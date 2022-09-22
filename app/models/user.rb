class User < ApplicationRecord
    has_secure_password
    has_many :donations
    has_many :animals, through: :donations

    validates :email, uniqueness: true
    validates :email, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :password, presence: true
end
