class Location < ApplicationRecord

  validates :name, presence: true

  has_many :restaurant_locations,
    foreign_key: :location_id,
    class_name: :RestaurantLocation

  has_many :restaurants,
    through: :restaurant_locations,
    source: :location


  def self.text_includes(string)
      self.where("lower(name) LIKE '%#{string.downcase}%'")
  end

end
