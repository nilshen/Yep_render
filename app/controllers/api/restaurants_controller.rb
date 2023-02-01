class Api::RestaurantsController < ApplicationController

    def index
        # debugger
        if params[:input]
            @restaurants = Restaurant.includes(:reviews)
                .where("name ILIKE ? OR category ILIKE?", "%#{params[:input]}%", "%#{params[:input]}%")
            if @restaurants.length > 0
                render :index
            else
                render json: ["No result is found for #{params[:input]}, please try again with restaurant name or category"], status: 422
            end
        else
            @restaurants = Restaurant.includes(:reviews).all
            render :index
        end
        # debugger
    end

    def show
        @restaurant = Restaurant.includes(:reviews).find(params[:id])

        if @restaurant
            render :show
        else
            render json: @restaurant.errors.full_messages, status: 404
        end
    end

    # def create
    #     @restaurant = Restaurant.new(restaurant_params)
    
    #     if @restaurant.save
    #       render :show
    #     else
    #       render json: @restaurant.errors.full_messages, status: :unprocessable_entity
    #     end
    #   end
    
    #   def restaurant_params
    #     params.require(:restaurant).permit(:name)
    #   end
end
