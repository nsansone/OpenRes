class Api::ReservationsController < ApplicationController 

    def index
        @reservations = Reservation.includes(:restaurant).where(user_id: current_user.id) 
        render :index
    end 

    def create
        @reservation = current_user.reservations.new(reservation_params)
        if @reservation.save
            render :show
 
        else
            render json: ['please fill out the entire form'], status: 422
        end
    end

    def update
        
        @reservation = Reservation.find(params[:id])
        
        if @reservation.update(reservation_params)
            
            render :show
        else 
            render json: ['invalid update parameters'], status: 422
        end
    end

    def show 
        
        @reservation = Reservation.find(params[:id])
        render :show
    end

    def destroy

        @reservation = Reservation.find(params[:id])
        @reservation.destroy

        render :show
    end

    def reservation_params
        params.require(:reservation).permit(:date, :time, :party_size, :restaurant_id)
    end

    



end