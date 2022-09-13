class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authenticate_user

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
rescue_from ActiveRecord::RecordNotFound, with: :not_found

    private

    def unprocessable_entity(exception)
        render json: { errors: exception.record.errors }, status: :unprocessable_entity
    end

    def not_found(error)
        render json: { errors: {error.model => "Not found"}}, status: :not_found
    end
    # memoization, instantiate current user

    def current_user
        @current_user ||= User.find_by_id(session[:user_id])
    end

    def authenticate_user

        render json: { errors: {User: "You don't have access"} }, status: :unauthorized unless current_user
    end

    def authorized
        permitted = current_user.admin?
        render json: { error: {User: "doesn't have permission"} }, status: :forbidden unless permitted
    end

end
