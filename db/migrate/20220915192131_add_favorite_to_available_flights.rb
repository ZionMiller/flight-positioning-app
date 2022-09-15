class AddFavoriteToAvailableFlights < ActiveRecord::Migration[7.0]
  def change
    add_column :available_flights, :favorite, :boolean, default: false
  end
end
