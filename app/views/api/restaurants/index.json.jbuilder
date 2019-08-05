@restaurants.each do |restaurant|
    json.set! restaurant.id do 
        json.partial! 'restaurant', restaurant: restaurant
        json.reviewIds []
    end
end