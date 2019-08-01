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
    lng: -73.988296,
    description: 
    'Each week thousands of visitors from around the world flock to Katz’s to dine in this legendary deli, and to feast on the most delectable sandwiches, platters and meats. But it’s really New Yorkers have made Katz’s Delicatessen what it is, making Katz’s an inherent part of the city’s culture and history. They enthusiastically spread the word, brought their friends in, wrote books, shot films, and kept coming back for a pastrami on rye.
    Building a reputation on longevity alone is nothin’ to brag about, which is why we’ve built ours on quality. Now that’s somethin’ special. We only select the best cuts of beef for our corned beef, pastrami, brisket, and other fine foods. Our corned beef and pastrami is cured using a slower method, which best flavors the meat, without injecting chemicals, water, or other additives to speed the process.
    Our finished product can take up to a full 30 days to cure, while commercially prepared corned beef is often pressure-injected (or “pumped”) to cure in 36 hours. Yep, you read that right. 30 days vs. 36 hours. Now, which sounds like the better meat to you?'
})

Restaurant.create!({
    name: "Katz\'s Delicatessen",
    address: "205 E Houston St, New York, NY 10002",
    phone: "(212) 254-2246",
    website: "katzsdelicatessen.com",
    lat: 40.722313,
    lng: -73.987335,
    description: 'At Russ & Daughters Cafe, expert smoked salmon slicers work their craft in front of guests; an open kitchen provides an over-the-counter connection like one feels in the store;  a soda fountain bar beckons with homemade sodas, egg creams, shrubs, and superb cocktails; friendly staff proudly wear the iconic white Russ & Daughters lab coats; and 105 years of living history permeates throughout the entire space.
                    The timeless appeal of the Russ & Daughters Cafe makes it a perfect spot any time of day: whether it’s a for a light nosh, brunch, lunch, cocktails, dinner, or a special occasion. You will be part of the mishpocha (family) — whether you have been a regular in the shop for 70 years or if you are a first time visitor.'
})

