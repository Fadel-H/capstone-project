class User < ApplicationRecord
    has_secure_password
    has_many :manga_anime_bridges
    has_many :mangas, through: :manga_anime_bridges
    has_many :animes, through: :manga_anime_bridges
    has_many :reviews, through: :animes
    has_many :reviews, through: :mangas
    validates :username, uniqueness: true
    validates :username, presence: true
    validates :password, presence: true
    validates :email, presence: true
end
