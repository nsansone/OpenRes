# == Schema Information
#
# Table name: restaurant_cuisines
#
#  id            :bigint           not null, primary key
#  restaurant_id :integer          not null
#  cuisine_id    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class RestaurantCuisine < ApplicationRecord

    belongs_to :restaurant,
      foreign_key: :restaurant_id,
      class_name: :Restaurant 

    belongs_to :cuisine,
      foreign_key: :cuisine_id,
      class_name: :Cuisine
end
