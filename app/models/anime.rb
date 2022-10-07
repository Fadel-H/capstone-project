class Anime < ApplicationRecord
    has_many :manga_anime_bridges
    has_many :reviews
end
