class UsersController < ApplicationController

    skip_before_action :authorized,  only: [:show, :create, :update]

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    def delete
        user = User.find(params[:id])
        user.destroy
        render json: user, status: :ok
    end

    def my_animals
        user = User.find(session[:user_id])
        animals = user.animals
        render json: animals, status: :ok
    end

    def show
        current_user = User.find(session[:user_id])
        if current_user
            render json: current_user, status: :ok
        else
            render json: "No current session stored", status: :unauthorized
        end
    end

    private

    def update_params
        params.permit(:email)
    end

    def user_params
        params.permit(:first_name, :last_name, :email, :password)
    end

end
