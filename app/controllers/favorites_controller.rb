class FavoritesController < ApplicationController

    def index
        render json: AvailableFlight.where(favorite: true), status: :ok
    end

    def show
        favorite = Favorite.find(params[:id])
        render json: favorite, status: :ok
    end



end
