class Game < ApplicationRecord
    has_many :bookmarks
    has_many :users, through: :bookmarks
end
