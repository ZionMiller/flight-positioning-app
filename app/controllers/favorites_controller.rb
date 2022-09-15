class FavoritesController < ApplicationController

    def index
        render json: Favorite.all, status: :ok
    end

    def show
        favorite = Favorite.find(params[:id])
        render json: favorite, status: :ok
    end

     # NEED TO FIX THE CREATE!!!
    def create
        favorite = Favorite.create!(user_params)
        render json: favorite, status: :created
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        head :no_content
    end

    private

    def find_flight
         # find the flight from the flights table based on the result.id
         # get the user using the currenti user id
         #find current user the
         found_flight = AvailableFlight.find(params[:id])
         flight_id = found_flight

        #  params.permit(available_flight: found_flight.id, user.id: user.id)
    end


end
