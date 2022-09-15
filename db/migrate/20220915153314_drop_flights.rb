class DropFlights < ActiveRecord::Migration[7.0]
  def change
    drop_table :flights
  end
end
