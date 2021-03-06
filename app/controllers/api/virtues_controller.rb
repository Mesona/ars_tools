class Api::VirtuesController < ApplicationController

  def index
    @virtues = Virtue.all
    render json: @virtues
  end

  def show
    @virtue = Virtue.find([params[:id]])
    if @virtue
      render :show
    else
      render json: @virtue.errors.full_messages, status: 404
    end
  end

  private
    def virtue_params
      params.require(:virtue).permit(:name, :description, :book, :perk_type, :major, :free)
    end

end
