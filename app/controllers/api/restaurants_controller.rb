class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.all
        render :index
    end

    def create
        @restaurant = Restaurant.new(restaurant_params)
        if @restaurant.save
            render :show
        else
            render json: @restaurant.errors.full_messages, status: 422
        end
    end

    def show 
        @restaurant = Restaurant.find(params[:id])
        render :show
    end

    def restaurant_params
        params.require(:restaurant).permit(:name, :phone, :website, :hours, :address, :lat, :lng)
    end





end