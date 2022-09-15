class AvailableFlight < ApplicationRecord
  belongs_to :airport
  has_many :favorites
  has_many :users, through: :favorites

  # Set the flights's favorite setting to true and save the flights
  def favorite!
    self.favorite = true
    self.save!
  end

  # Set the flight's favorite setting to false and save the flights
  def unfavorite!
    self.favorite = false
    self.save!
  end

end
