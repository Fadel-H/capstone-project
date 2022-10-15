class UsersController < ApplicationController
    def show
        user = User.find(session[:user_id])
        render json: user
      end

    def create
      
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :ok
    end
    private

    def user_params
      params.permit :username, :password, :password_confirmation, :email, :profile_image
    end
end
