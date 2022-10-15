class Manga < ApplicationRecord
    has_many :manga_anime_bridges
    has_many :reviews
    has_many :users, through: :manga_anime_bridges
end
