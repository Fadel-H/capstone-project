class AddMangaIdAndAnimeIdToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :manga_id, :integer 
    add_column :reviews, :anime_id, :integer 
  end
end
