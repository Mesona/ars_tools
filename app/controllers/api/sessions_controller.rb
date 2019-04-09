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
      render json: @user; 
    end

  end

  def destroy
    logout!
    render json: { message: 'Logout successful.' }
  end
end
