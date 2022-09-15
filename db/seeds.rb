puts "Seeding Data..."

#Create Airports
a1 = Airport.create(name: "Albuquerque International Sunport", zipcode: 87106, airport_code: "ABQ")
a2 = Airport.create(name: "Atlantic City International Airport", zipcode: 80215, airport_code: "ACY")
a3 = Airport.create(name: "Austin-Bergstrom International Airport", zipcode: 78719, airport_code: "AUS")
a4 = Airport.create(name: "Boulder City Municipal Airport", zipcode: 89005, airport_code: "BLD")
a5 = Airport.create(name: "Cedar City Regional Airport", zipcode: 84720, airport_code: "CDC")
a6 = Airport.create(name: "Denver International Airport", zipcode: 80249, airport_code: "DEN")
a7 = Airport.create(name: "El Paso International Airport", zipcode: 79925, airport_code: "ELP")
a8 = Airport.create(name: "Fresno Yosemite International Airport", zipcode: 93727, airport_code: "FAT")
a9 = Airport.create(name: "Grand Forks International Airport", zipcode: 58203, airport_code: "GFK")
a10 = Airport.create(name: "Helena Regional Airport", zipcode: 59601, airport_code: "HLN")
a11 = Airport.create(name: "Idaho Falls Regional Airport", zipcode: 83402, airport_code: "IDA")
a12 = Airport.create(name: "Jackson Hole Airport", zipcode: 83001, airport_code: "JAC")
a13 = Airport.create(name: "Long Beach Airport", zipcode: 90808, airport_code: "LGB")
a14 = Airport.create(name: "Los Angeles International Airport", zipcode: 90045, airport_code: "LAX")
a15 = Airport.create(name: "Memphis International Airport", zipcode: 38116, airport_code: "MEM")
a16 = Airport.create(name: "Oakland International Airport", zipcode: 94621, airport_code: "OAK")
a17 = Airport.create(name: "Portland International Airport", zipcode: 97218, airport_code: "PDX")
a18 = Airport.create(name: "Rapid City Regional Airport", zipcode: 57703, airport_code: "RAP")
a19 = Airport.create(name: "San Antonio International Airport", zipcode: 78216, airport_code: "SAT")
a20 = Airport.create(name: "San Francisco International Airport", zipcode: 94128, airport_code: "SFO")
a21 = Airport.create(name: "Tucson International Airport", zipcode: 85756, airport_code: "TUS")
a22 = Airport.create(name: "Yuma International Airport", zipcode: 85365, airport_code: "YUM")

puts "Seeding Done!"

puts "creating available flights"
20.times do
    AvailableFlight.create(price: rand(100...1000), date: DateTime.now + (rand * 365), return_date: DateTime.now + (rand * 365), departing_from: Airport.all.sample.name, destination: Airport.all.sample.name, layovers: Airport.all.sample.name, airport_id: Airport.all.sample.id, favorite: false)
end
a1 = AvailableFlight.create(price: rand(100...1000), date: DateTime.now + (rand * 365), return_date: DateTime.now + (rand * 365), departing_from: Airport.all.sample.name, destination: Airport.all.sample.name, layovers: Airport.all.sample.name, airport_id: Airport.all.sample.id, favorite: true)
a2 = AvailableFlight.create(price: rand(100...1000), date: DateTime.now + (rand * 365), return_date: DateTime.now + (rand * 365), departing_from: Airport.all.sample.name, destination: Airport.all.sample.name, layovers: Airport.all.sample.name, airport_id: Airport.all.sample.id, favorite: true)
puts "done available flights"


puts "creating user"
u1 = User.create(name: "testing", zipcode: 19720, username: "testing", password: "testing")
puts "done creating user"

# puts "creating favorites"
# f = Favorite.create(user_id: u1.id, available_flights_id: AvailableFlight.all.first.id)
# puts "done creating favorites"

