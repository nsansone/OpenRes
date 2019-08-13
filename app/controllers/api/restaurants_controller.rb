class Api::RestaurantsController < ApplicationController

    def index
        restaurants = bounds ? Restaurant.with_attached_photo.in_bounds(bounds) : Restaurant.with_attached_photo.all
        restaurants = restaurants.text_includes(search) if search
        
        # cuisines = Cuisine.text_includes(search) if search
        # if !cuisines.nil?
        #     restaurants = []
        #     cuisines.each do |cuisine|
        #         cuisine.restaurants.each do |restaurant|
        #             restaurants << restaurant
        #         end
        #     end
        # end



        @restaurants = restaurants.includes(:reviews, :cuisines)
        
        
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
        @restaurant = Restaurant.with_attached_photo.includes(:reviews, :cuisines).includes(:review_authors).find(params[:id])
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

    # def cuisines
    #     params[:restCuisine]
    # end


end