class Cuisine < ApplicationRecord

  validates :name, presence: true

  has_many :restaurant_cuisines,
    foreign_key: :cuisine_id,
    class_name: :RestaurantCuisine

  has_many :restaurants,
    through: :restaurant_cuisines,
    source: :cuisine

end