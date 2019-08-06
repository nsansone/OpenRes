class ReservationsController < ApplicationController 

    def create
        @reservation = current_user.reservations.new(reservation_params)
        if @reservation.save
            render :show
        else
            render json: @reservation, status: 422
        end
    end

    def reservation_params
        params.require(:reservation).permit(:date, :time, :party_size)
    end

    



end