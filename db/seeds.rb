# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.destroy_all
User.destroy_all 
Review.destroy_all
Cuisine.destroy_all
RestaurantCuisine.destroy_all
Location.destroy_all
RestaurantLocation.destroy_all

user = User.create!({
    fname: 'Nicole',
    lname: 'Nicole',
    email: 'Nicole',
    password: 'Nicole'
})


russ = Restaurant.create!({
    name: 'Russ & Daughters',
    address: '179 E Houston St, New York, NY 10002',
    phone: '(212) 475-4880',
    website: 'shop.russanddaughters.com',
    lat: 40.722645000000036,
    lng: -73.988292,
    description: 
    'Each week thousands of visitors from around the world flock to Katz’s to dine in this legendary deli, and to feast on the most delectable sandwiches, platters and meats. But it’s really New Yorkers have made Katz’s Delicatessen what it is, making Katz’s an inherent part of the city’s culture and history. They enthusiastically spread the word, brought their friends in, wrote books, shot films, and kept coming back for a pastrami on rye.
    Building a reputation on longevity alone is nothin’ to brag about, which is why we’ve built ours on quality. Now that’s somethin’ special. We only select the best cuts of beef for our corned beef, pastrami, brisket, and other fine foods. Our corned beef and pastrami is cured using a slower method, which best flavors the meat, without injecting chemicals, water, or other additives to speed the process.
    Our finished product can take up to a full 30 days to cure, while commercially prepared corned beef is often pressure-injected (or “pumped”) to cure in 36 hours. Yep, you read that right. 30 days vs. 36 hours. Now, which sounds like the better meat to you?'
})
file = open('https://s3.amazonaws.com/openres-aa-seeds/russ3.jpg')

russ.photo.attach(io: file, filename: 'russ3.jpg')


katz = Restaurant.create!({
    name: "Katz\'s Delicatessen",
    address: "205 E Houston St, New York, NY 10002",
    phone: "(212) 254-2246",
    website: "katzsdelicatessen.com",
    lat: 40.72297400279524,
    lng: -73.98917,
    description: 'At Russ & Daughters Cafe, expert smoked salmon slicers work their craft in front of guests; an open kitchen provides an over-the-counter connection like one feels in the store;  a soda fountain bar beckons with homemade sodas, egg creams, shrubs, and superb cocktails; friendly staff proudly wear the iconic white Russ & Daughters lab coats; and 105 years of living history permeates throughout the entire space.
                    The timeless appeal of the Russ & Daughters Cafe makes it a perfect spot any time of day: whether it’s a for a light nosh, brunch, lunch, cocktails, dinner, or a special occasion. You will be part of the mishpocha (family) — whether you have been a regular in the shop for 70 years or if you are a first time visitor.'
})

file2 = open('https://s3.amazonaws.com/openres-aa-seeds/katz.jpg')

katz.photo.attach(io: file2, filename: 'katz.jpg')

serra = Restaurant.create!({
    name: 'Serra by Birreria',
    address: '200 Fifth Avenue New York, NY 10010',
    phone: '(212) 937-8910',
    website: 'eataly.com',
    lat: 40.7420207,
    lng: -73.989928,
    description: 
    'SERRA by Birreria is a seasonal rooftop restaurant located on the 14th floor of Eataly NYC Flatiron. Meaning “greenhouse” in Italian, SERRA changes with the seasons, always offering a fun, themed atmosphere and a rustic menu reflective of the Italian countryside.

    And now, spring is in full bloom on the roof! Escape the hustle and bustle of Manhattan to relax at SERRA FIORITA, our “flowering greenhouse” replete with a lush, colorful atmosphere, an extensive Spritz cocktail menu, and vibrant seasonal plates infused with Italian springtime traditions. Book your table to be one of the first to experience it!'
})
file3 = open('https://s3.amazonaws.com/openres-aa-seeds/serra.jpg')

serra.photo.attach(io: file3, filename: 'serra.jpg')

momo = Restaurant.create!({
    name: 'Momofuku Noodle Bar',
    address: '171 1st Avenue, New York, NY 10003',
    phone: '(212) 777-7773',
    website: 'noodlebar-ny.momofuku.com',
    lat: 40.729233,
    lng: -73.98451,
    description: 
    'Momofuku was founded by chef David Chang in 2004 with the opening of Momofuku Noodle Bar in New York City. Credited with “the rise of contemporary Asian-American cuisine” by the New York Times and named the “most important restaurant in America” by Bon Appétit magazine, Momofuku has opened restaurants in the United States, Australia, and Canada. The restaurants have gained world-wide recognition for their innovative take on cuisine, while supporting sustainable and responsible farmers and food purveyors.'
})
file4 = open('https://s3.amazonaws.com/openres-aa-seeds/momo.jpeg')

momo.photo.attach(io: file4, filename: 'momo.jpeg')

milkbar = Restaurant.create!({
    name: 'Milk Bar',
    address: '220 8th Ave, New York, NY 10011',
    phone: '(917) 475-1187',
    website: 'milkbarstore.com',
    lat: 40.7440859,
    lng: -73.9991359,
    description: 
    'Milk Bar is a sweet (and occasionally savory) shop that’s been turning familiar treats upside down and on their heads, quietly shaking up the dessert scene since 2008. Bon Appetit magazine called us “one of the most exciting bakeries in the country.” But you can literally just call us Milk Bar. We’re not big on feeding the hype beast. But we’re super into feeding our flavorful treats to those who crave the unexpected.'
})
file5 = open('https://s3.amazonaws.com/openres-aa-seeds/milkbar.jpg')

milkbar.photo.attach(io: file5, filename: 'milkbar.jpg')

pizza = Restaurant.create!({
    name: 'Roberta\'s',
    address: '261 Moore St, Brooklyn, NY 11206',
    phone: '(718) 417-1118',
    website: 'http://robertaspizza.com/',
    lat: 40.7050766,
    lng: -73.9335923,
    description: 
    'Roberta\'s is a New American pizzeria in Brooklyn, New York. Located in the neighborhood of East Williamsburg, it is known for its wood oven cooked pizza and hipster vibe.The restaurant serves pizza containing ingredients cooked from a rooftop garden, and houses a radio station in the rear of the building.

Roberta\'s has recently gained notoriety for its so-called "Tiki Disco" parties, which are thrown throughout Brooklyn, and in 2013 at the Bonnaroo Music Festival in Manchester, Tennessee. That same year, USA Today published a column from The Daily Meal which named Roberta\'s as one of America\'s top 15 pizzerias.'
})
file6 = open('https://s3.amazonaws.com/openres-aa-seeds/pizza.jpg')

pizza.photo.attach(io: file6, filename: 'pizza.jpg')

review1 = Review.create!({
    rating: 4,
    body: 'Respect for old school long tradition eatery.
Amazing selection of fish, salmon and herring especially.
Bagels also have some special options.
Busy, expect some time in a line.',
    restaurant_id: russ.id,
    author_id: user.id,

})

review2 = Review.create!({
    rating: 5,
    body: 'Had to have a bagel when I visited New York, and Russ & Daughters really delivered. We came on a Sunday morning, and the place was full! There are maybe 5 guys working behind the counter, and you can tell they\'ve been doing this for years. There\'s not really room to eat inside, but there are some nice benches right outside as well as a park around the corner. We split an everything bagel with scallion schmear, lox, onion, capers, and tomato. It was really tasty!! Keep in mind that this place is definitely more about the lox than the bagels, so if you\'re looking for warm bagels fresh out of the oven, maybe go elsewhere. Overall, I really enjoyed the food I had here and would highly recommend!',
    restaurant_id: russ.id,
    author_id: user.id,

})

review3 = Review.create!({
    rating: 4,
    body: 'Wonderful!  Long wait for your food but worth it!  Pick a bagel offering they suggest or create your own. Nice!  Had one of their own creations that featured Gaspe Nova Smoked Salmon and Wild Alaskan Salmon Roe. Along with all the other features such as cram cheese and onions. Wow. Fabulous. So many things I wanted to take with me. I just took some smoked peepers mackerel. Nice light flavor. 

Love it. Take it and go find a spot to eat. Joy!!  While you wait you have time to expire all the choices and offerings. Lots here!',
    restaurant_id: russ.id,
    author_id: user.id,

})

review4 = Review.create!({
    rating: 5,
    body: 'If you like bagels and lox, you HAVE to come here. It\'s the best I\'ve ever had! You create your own "sandwich" by picking your bagel, your spread, and your lox. 

I got the everything bagel with scallion cream cheese and the gaspe nova. Did not disappoint! The bagel is perfectly toasted and they are generous with the lox. Every bite was a dream.',
    restaurant_id: russ.id,
    author_id: user.id,

})

cuisine1 = Cuisine.create!({name: "dessert"})
cuisine2 = Cuisine.create!({name: "italian"})
cuisine3 = Cuisine.create!({name: "asian"})
cuisine4 = Cuisine.create!({name: "deli"})
cuisine5 = Cuisine.create!({name: "bagels"})


restaurant_cuisine1 = RestaurantCuisine.create!({restaurant_id: milkbar.id, cuisine_id: cuisine1.id})
restaurant_cuisine2 = RestaurantCuisine.create!({restaurant_id: pizza.id, cuisine_id: cuisine2.id})
restaurant_cuisine3 = RestaurantCuisine.create!({restaurant_id: momo.id, cuisine_id: cuisine3.id})
restaurant_cuisine4 = RestaurantCuisine.create!({restaurant_id: katz.id, cuisine_id: cuisine4.id})
restaurant_cuisine5 = RestaurantCuisine.create!({restaurant_id: russ.id, cuisine_id: cuisine5.id})
restaurant_cuisine6 = RestaurantCuisine.create!({restaurant_id: serra.id, cuisine_id: cuisine2.id})

location1 = Location.create!({name: "Chelsea"})
location2 = Location.create!({name: "East Village"})

restaurant_location1 = RestaurantLocation.create!({restaurant_id: milkbar.id, location_id: location1.id})
restaurant_location2 = RestaurantLocation.create!({restaurant_id: pizza.id, location_id: location2.id})
restaurant_location3 = RestaurantLocation.create!({restaurant_id: momo.id, location_id: location2.id})
restaurant_location4 = RestaurantLocation.create!({restaurant_id: katz.id, location_id: location2.id})
restaurant_location5 = RestaurantLocation.create!({restaurant_id: russ.id, location_id: location2.id})
restaurant_location6 = RestaurantLocation.create!({restaurant_id: serra.id, location_id: location2.id})
