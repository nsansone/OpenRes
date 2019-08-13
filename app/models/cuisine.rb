# == Schema Information
#
# Table name: cuisines
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cuisine < ApplicationRecord

  validates :name, presence: true

  has_many :restaurant_cuisines,
    foreign_key: :cuisine_id,
    class_name: :RestaurantCuisine

  has_many :restaurants,
    through: :restaurant_cuisines,
    source: :cuisine


  def self.text_includes(string)
      self.where("lower(name) LIKE '%#{string.downcase}%'")
  end

end
