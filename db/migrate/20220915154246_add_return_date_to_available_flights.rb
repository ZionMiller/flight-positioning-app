class AddReturnDateToAvailableFlights < ActiveRecord::Migration[7.0]
  def change
    add_column :available_flights, :return_date, :datetime
  end
end
