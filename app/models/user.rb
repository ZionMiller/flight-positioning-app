class User < ApplicationRecord
    has_many :favorites
    has_many :available_flights, through: :favorites

    has_secure_password

    validates :name, :username, :password, presence: true
end
