class Api::ReviewsController < ApplicationController
    # before_action :require_logged_in
    
    def create
        @revew = current_user.reviews.new(review_params)

        if @review.save
            render :show
        else
            render json: @review, status: :unprocessable_entity
        end
    end

    def review_params
        params.require(:review).permit(:rating, :body, :restaurant_id, :author_id)
    end
end