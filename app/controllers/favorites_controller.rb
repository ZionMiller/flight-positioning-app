class FavoritesController < ApplicationController

    def index
        render json: AvailableFlight.where(favorite: true), status: :ok
    end

    # def create
    #     fave_flight = Favorite.create!(fave_params)
    #     render json: fave_flight, status: :created
    # end


    def show
        favorite = Favorite.find(params[:id])
        render json: favorite, status: :ok
    end

    private

    def fave_params
        params.permit(:user_id, :available_flights_id)
    end

end
