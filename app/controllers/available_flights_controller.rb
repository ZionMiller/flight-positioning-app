class AvailableFlightsController < ApplicationController

    def index
        render json: AvailableFlight.all.order(:price), status: :ok
    end
end
