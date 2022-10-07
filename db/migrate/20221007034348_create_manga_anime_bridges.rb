class CreateMangaAnimeBridges < ActiveRecord::Migration[6.1]
  def change
    create_table :manga_anime_bridges do |t|
      t.integer :manga_id
      t.integer :anime_id
      t.integer :user_id

      t.timestamps
    end
  end
end
