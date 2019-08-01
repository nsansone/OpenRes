# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.delete_all


Restaurant.create!({
    name: 'Russ & Daughters',
    address: '179 E Houston St, New York, NY 10002',
    phone: '(212) 475-4880',
    website: 'shop.russanddaughters.com',
    lat: 40.722616,
    lng: -73.988296
})

Restaurant.create!({
    name: "Katz\'s Delicatessen",
    address: "205 E Houston St, New York, NY 10002",
    phone: "(212) 254-2246",
    website: "katzsdelicatessen.com",
    lat: 40.722313,
    lng: -73.987335
})

