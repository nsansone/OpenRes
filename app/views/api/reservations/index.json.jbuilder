json.reservations do 
    @reservations.each do |reservation|
        json.set! reservation.id do
            json.partial! "api/reservations/reservation", reservation: reservation
        end 
    end
end

@reservations.each do |reservation|
    json.restaurants do 
        json.set! reservation.restaurant.id do 
            json.partial! "api/restaurants/restaurant", restaurant: reservation.restaurant
        end
    end
end