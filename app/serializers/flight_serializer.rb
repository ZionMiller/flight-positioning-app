class FlightSerializer < ActiveModel::Serializer
  attributes :id, :price, :date, :time, :departing_from, :destination, :layovers
  has_one :user
  has_one :airport
end
