# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_14_231026) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "airports", force: :cascade do |t|
    t.string "name"
    t.integer "zipcode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "airport_code"
  end

  create_table "available_flights", force: :cascade do |t|
    t.integer "price"
    t.datetime "date"
    t.string "departing_from"
    t.string "destination"
    t.string "layovers"
    t.bigint "airport_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["airport_id"], name: "index_available_flights_on_airport_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "airport_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["airport_id"], name: "index_favorites_on_airport_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "flights", force: :cascade do |t|
    t.integer "price"
    t.time "datetime"
    t.string "departing_from"
    t.string "destination"
    t.string "layovers"
    t.bigint "user_id", null: false
    t.bigint "airport_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["airport_id"], name: "index_flights_on_airport_id"
    t.index ["user_id"], name: "index_flights_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "zipcode"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "available_flights", "airports"
  add_foreign_key "favorites", "airports"
  add_foreign_key "favorites", "users"
  add_foreign_key "flights", "airports"
  add_foreign_key "flights", "users"
end
