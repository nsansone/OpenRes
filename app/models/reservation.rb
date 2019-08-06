class Reservation < ApplicationRecord 

validates :user_id, :restaurant_id, :date, :time, :party_size, presence: true

belongs_to :user 

belongs_to :restaurant


end
