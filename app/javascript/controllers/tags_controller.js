// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['tagList', 'tagName', 'tagErrors'];

  connect () {
    console.log("Hello from StimulusJS!");
  }

  createSuccess(event) {
    const [_data, _status, xhr] = event.detail;

    var tag = JSON.parse(xhr.response);
    debugger
    var tagDiv = document.createElement("div");
    var tagCheckbox = document.createElement("input");
    $(tagCheckbox).attr({
      "type": "checkbox",
      "value": tag.id,
      "name": "post[tag_ids][]",
      "id": "post_tag_ids_" + tag.id
    });
    
    var tagLabel = document.createElement("label");
    $(tagLabel).attr({
      "for": "post_tag_ids_" + tag.id
    });
    tagLabel.innerHTML = tag.name;

    tagDiv.appendChild(tagCheckbox);
    tagDiv.appendChild(tagLabel);
    this.tagListTarget.append(tagDiv);
    this.tagNameTarget.value = '';
  }

  createError(event){
    const [_data, _status, xhr] = event.detail;
    this.tagErrorsTarget.innerHTML = xhr.response;
  }
}