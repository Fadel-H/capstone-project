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

    def update
      user = User.find(session[:user_id])
      user.update(username: params[:username], email: params[:email], password: params[:password])
      user.save
      render json: user, status: :ok
    end

    def delete
      user = User.find(session[:user_id])
      user.destroy
    end
    private

    def user_params
      params.permit :username, :password, :password_confirmation, :email, :profile_image
    end
end
