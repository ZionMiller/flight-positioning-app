class AvailableFlightsController < ApplicationController

    def index
        render json: AvailableFlight.all.order(:price), status: :ok
    end

    def create
        @available_flight.favorite!
        # render json: favorite, status: :created
    end

    def destroy
        @available_flight.favorite!
    end

    def update
        @available_flight.update!(favorite: true)
    end

    private
    def set_flight
        @available_flight = AvailableFlight.find(params[:id])
    end

    def flight_params
        params.permit(:favorite)
    end


end
