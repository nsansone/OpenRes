class Api::ReviewsController < ApplicationController
    before_action :require_logged_in
    
    def create
        @revew = current_user.reviews.new(review_param)

        if @review.save
            render :show
        else
            render json: @revew, status: :unprocessable_entity
        end
    end

    def review_params
        params.require(:review).permit(:rating, :body, :restaurant_id)
    end
end