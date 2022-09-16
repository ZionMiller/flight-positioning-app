class AvailableFlightSerializer < ActiveModel::Serializer
  attributes :id, :price, :date, :departing_from, :destination, :layovers, :favorite
  has_one :airport
end
