class CreatePostsTags < ActiveRecord::Migration[5.2]
  def change
    create_table :posts_tags do |t|
      t.references :post, foreign_key: false
      t.references :tag, foreign_key: false

      t.timestamps
    end
  end
end
