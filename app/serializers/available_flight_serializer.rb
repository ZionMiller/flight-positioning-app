class AvailableFlightSerializer < ActiveModel::Serializer
  attributes :id, :price, :date, :departing_from, :destination, :layovers
  has_one :airport
end
