class CreateAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :animes do |t|
      t.string :name
      t.string :description
      t.float :score
      t.integer :episodes
      t.string :status
      t.datetime :last_update
      t.string :author
      t.string :artist
      t.integer :reviews_id
      t.string :user_status
      t.integer :user_episode

      t.timestamps
    end
  end
end
