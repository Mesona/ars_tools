class Api::FlawsController < ApplicationController

  def index
    @flaws = Flaw.all
    render json: @flaws
  end

  def show
    @flaw = Flaw.find([params[:id]])
    if @flaw
      render :show
    else
      render json: @flaw.errors.full_messages, status: 404
    end
  end

  private
    def flaw_params 
      params.require(:flaw).permit(:name, :description, :book, :flaw_type, :major)
    end
  
end
