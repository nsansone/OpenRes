json.extract! restaurant, :id, :name, :address, :website, :phone, :description, :lat, :lng
json.photoUrl url_for(restaurant.photo)