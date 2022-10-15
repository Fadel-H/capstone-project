class Review < ApplicationRecord
    belongs_to :anime, optional: true
    belongs_to :manga, optional: true
    belongs_to :user
end
