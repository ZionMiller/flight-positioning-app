class AvailableFlight < ApplicationRecord
  belongs_to :airport
  has_many :favorites
  has_many :users, through: :favorites

end
