class Reservation < ApplicationRecord 

validates :user_id, :restaurant_id, :date, :time, :party_size, presence: true

belongs_to :user 

belongs_to :restaurant

def overlapping_res
    # Reservation.where(restaurant_id: restaurant_id).where(date: date AND time: time)
end


end
