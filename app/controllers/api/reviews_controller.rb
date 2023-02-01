class Api::ReviewsController < ApplicationController
    # before_action :require_logged_in, only: [:new, :create, :update, :destroy]

    def index
        if params[:restaurant_id]#[:user_id]
            @reviews = Review.where(restaurant_id: params[:restaurant_id])#.includes(:restaurant)
        else
            @reviews = Review.all#.includes(:restaurant)
        end

        render :index
    end 

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render :show
        else
            render json:@review.errors.full_messages, status:422
        end
    end
    
    
    def create  
        @review = Review.new(review_params)
        # @review.user_id = current_user.id
        # @review.restaurant_id = restaurant.id

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end 


    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render :show
    end

    # private
    def review_params
            params.require(:review).permit(:user_id, :restaurant_id, :rating, :body)
    end
end
    
