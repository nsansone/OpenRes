class Restaurant < ApplicationRecord
    validates :name, :address, :phone, :website, :lat, :lng, presence: true

    has_one_attached :photo

    has_many :reservations
    has_many :reviews

    def average_rating
        reviews.average(:rating)
    end
    
end