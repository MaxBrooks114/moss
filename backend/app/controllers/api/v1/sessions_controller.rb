class Api::V1::SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:session][:username])

    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      render json: UserSerializer.new(@user)
    else
      render json: {
        error: "invalid credentials"
      }
    end
  end

  def get_current_user
      if logged_in?
        render json: UserSerializer.new(current_user)
    end

  end

  def destroy
    session.clear
    render json: {
      notice: "succesfully logged out"
    }, status: :ok
  end



end
