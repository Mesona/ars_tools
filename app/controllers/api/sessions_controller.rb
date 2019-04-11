class Api::SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user.nil?
      render json: ['Invalid login credentials'], status: 401
    else
      login!(@user)
      # render json: @user; 
      render 'api/users/show';
    end

  end

  def destroy
    @user = current_user
    if @user 
      logout!
      render json: { message: 'Logout successful.' }
    else 
      render json: ["You aren't signed in"], status: 404
    end
  end
end
