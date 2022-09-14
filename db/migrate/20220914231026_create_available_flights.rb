class CreateAvailableFlights < ActiveRecord::Migration[7.0]
  def change
    create_table :available_flights do |t|
      t.integer :price
      t.datetime :date
      t.string :departing_from
      t.string :destination
      t.string :layovers
      t.belongs_to :airport, null: false, foreign_key: true

      t.timestamps
    end
  end
end
