class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :available_flights
end
