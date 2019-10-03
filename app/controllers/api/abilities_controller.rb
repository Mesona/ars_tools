class Api::AbilitiesController < ApplicationController
  # before_action :set_user, only: [:show, :edit, :update, :destroy]

  def index
    @abilities = Ability.all
    render json: @abilities
  end

  private
    def ability_params
      params.require(:ability).permit(:name, :id)
  end
end

