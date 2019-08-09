class RestaurantCuisine < ApplicationRecord

    belongs_to :restaurant,
      foreign_key: :restaurant_id,
      class_name: :Restaurant 

    belongs_to :cuisine,
      foreign_key: :cuisine_id,
      class_name: :Cuisine
end