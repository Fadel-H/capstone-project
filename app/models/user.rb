class User < ApplicationRecord
    has_many :manga_anime_bridges
    has_many :mangas, through: :manga_anime_bridges
    has_many :animes, through: :manga_anime_bridges
end
