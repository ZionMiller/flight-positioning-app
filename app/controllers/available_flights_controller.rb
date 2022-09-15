class AvailableFlightsController < ApplicationController

    def index
        render json: AvailableFlight.all, status: :ok
    end
end
