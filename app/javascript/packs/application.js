console.log('Hello World from Webpacker')

import "bootstrap"
import "../stylesheets/application"
import "controllers"

$(function() {
  $("#menu-toggle").on('click', function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
});
