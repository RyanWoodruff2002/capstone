class SessionsController < ApplicationController
  
  skip_before_action :authorized,  only: :create

  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: "Invalid Credentials", status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
  end

end
