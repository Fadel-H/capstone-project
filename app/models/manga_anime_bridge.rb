class MangaAnimeBridge < ApplicationRecord
    belongs_to :user
    belongs_to :anime 
    belongs_to :manga
end
