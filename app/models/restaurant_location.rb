class RestaurantLocation < ApplicationRecord

    belongs_to :restaurant,
      foreign_key: :restaurant_id,
      class_name: :Restaurant 

    belongs_to :location,
      foreign_key: :location_id,
      class_name: :Location
end
