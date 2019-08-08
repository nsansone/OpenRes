class Api::RestaurantsController < ApplicationController

    def index
        restaurants = bounds ? Restaurant.in_bounds(bounds) : Restaurant.all
        restaurants = restaurants.text_includes(search) 
        @restaurants = restaurants.includes(:reviews)
        
        
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
        @restaurant = Restaurant.includes(:reviews).includes(:review_authors).find(params[:id])
        render :show
    end

    def restaurant_params
        params.require(:restaurant).permit(:name, :phone, :website, :hours, :address, :lat, :lng, :photo)
    end


    def bounds
        params[:bounds]
    end

    def search
        params[:search]
    end


end