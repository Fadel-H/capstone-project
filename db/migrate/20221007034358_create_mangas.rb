class CreateMangas < ActiveRecord::Migration[6.1]
  def change
    create_table :mangas do |t|
      t.string :name
      t.string :description
      t.float :score
      t.integer :chapters
      t.string :status
      t.string :image
      t.string :author
      t.string :artist
      t.integer :reviews_id
      t.string :user_status
      t.integer :user_chapter

      t.timestamps
    end
  end
end
