class Api::RestaurantsController < ApplicationController

    def index
    
        restaurants = bounds ? Restaurant.in_bounds(bounds).with_attached_photo : Restaurant.none
        restaurants = Restaurant.text_includes(search).with_attached_photo if search && search.length != 0
        
        if restaurants.length == 0
            restaurants = Restaurant.joins(:cuisines).where(cuisines: { name: search }).with_attached_photo
            if restaurants.length == 0
                restaurants = Restaurant.all.with_attached_photo
            end
        end

        

        # cuisines = search ? Cuisine.text_includes(search) : []
        # restaurants = Restaurant.joins(:cuisines).where(cuisines: { name: search })
        # debugger
        # if !cuisines.empty?
        #     # restaurants = []
        #     cuisines.each do |cuisine|
        #         restaurants = restaurants.merge(cuisine.restaurants)
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