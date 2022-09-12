class User < ApplicationRecord
    has_many :flights
    has_many :airports, through: :flights

    has_secure_password

    validates :name, :username, :password, presense: true
end
