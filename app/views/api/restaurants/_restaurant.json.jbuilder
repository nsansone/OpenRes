json.extract! restaurant, :id, :name, :address, :website, :phone, :description, :lat, :lng, :average_rating
json.photoUrl url_for(restaurant.photo)
 json.numReviews restaurant.reviews.pluck(:id)