# == Schema Information
#
# Table name: restaurants
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  address     :string           not null
#  phone       :string           not null
#  website     :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#

class Restaurant < ApplicationRecord
    validates :name, :address, :phone, :website, :lat, :lng, presence: true

    has_one_attached :photo

    
    has_many :reservations
    has_many :reviews
    
    has_many :review_authors,
        through: :reviews,
        source: :author

    def average_rating
        reviews.average(:rating)
    end

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
    end

    def self.text_includes(string)
        self.where("name LIKE '%#{string}%'")
    end
    
end
