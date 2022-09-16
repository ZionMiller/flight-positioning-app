class AvailableFlightsController < ApplicationController

    before_action :set_flight, only: [:create, :destroy, :update]

    def index
        flights = AvailableFlight.all.order(:price)
        render json: flights , status: :ok
    end

    def show
        avail_flight = AvailableFlight.find(params[:id])
        render json: avail_flight, status: :ok
    end

    def update
        @available_flight.update!(flight_params)
        # @available_flight.save!
        render json: @available_flight, status: :created
    end
    
    def destroy
        @available_flight.favorite = false
        @available_flight.save!
    end
    
    # def update
    #     @available_flight.update(flight_params)
    #      render json: @available_flight, status: :accepted
    # end
    
    private
    
    # def update_flight
    #     @available_flight.favorite = true
        
    # end

    def set_flight
        @available_flight = AvailableFlight.find(params[:id])
    end

    def flight_params
        params.permit(:favorite)
    end


end
