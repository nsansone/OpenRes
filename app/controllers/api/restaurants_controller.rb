class Api::RestaurantsController < ApplicationController

    def index
        restaurants = Restaurant.ApplicationController
        render :index
    end

    def create
        @restaurant = Restaurant.create!(restaurant_params)
        def :show
    end

    def restaurant_params
        params.require(:restaurant).permit(:name, :phone, :website, :hours, :address, :lat, :lng)
    end





end