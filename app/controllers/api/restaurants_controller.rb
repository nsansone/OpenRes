class Api::RestaurantsController < ApplicationController

    def index
        
        restaurants = bounds ? Restaurant.in_bounds(bounds).with_attached_photo : Restaurant.none.with_attached_photo
        
        restaurants = Restaurant.text_includes(search).with_attached_photo if search && search.length != 0

        if restaurants.length == 0 && search
            
            restaurants = Restaurant.joins(:cuisines).where("LOWER(cuisines.name) LIKE '%#{search.downcase}%'").with_attached_photo
            if restaurants.length == 0
                restaurants = Restaurant.joins(:locations).where("LOWER(locations.name) LIKE '%#{search.downcase}%'").with_attached_photo
            end
        end
             
        if restaurants.length == 0 
            restaurants = Restaurant.all.with_attached_photo
        end
        
        if checked 
            if checked.length != 0

                checked.each do |filter|
                    
                    if (Cuisine.where(name: filter).length != 0)
                        restaurants = restaurants.joins(:cuisines).where("LOWER(cuisines.name) LIKE '%#{filter.downcase}%'").with_attached_photo 
                        
                    end
                    if (Location.where(name: filter).length != 0)
                        restaurants = restaurants.joins(:locations).where("LOWER(locations.name) LIKE '%#{filter.downcase}%'").with_attached_photo 
                        
                    end
                end
            end
        end
        
        @restaurants = restaurants.includes(:reviews, :cuisines).with_attached_photo
        
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

    def checked
        params[:checked]
    end


end