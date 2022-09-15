class EditAirportIdfromFavorites < ActiveRecord::Migration[7.0]
  def change
    rename_column :favorites,  :airport_id, :available_flights_id
  end
end
