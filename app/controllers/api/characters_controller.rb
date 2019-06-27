class Api::CharactersController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @characters = @user.characters
    render json: @characters
  end

  def show
    @character = Character.includes(:abilities, :ability_associations).find(params[:id])
    if @character
      render :show
    else
      render json: @character.errors.full_messages, status: 404 
    end
  end

  def edit
    @character = Character.find(params[:id])
    render json: @character;
  end

  def create
    @character = Character.new(character_params)
    Character.generate_abilities(params[:id])

    if @character.save!
      render json: @character;
    else
      render json: @character.errors.full_messages, status: 401
    end
  end

  def update
    @character = Character.find(params[:id])
    if @character.update(character_params)
      render :show
    else
      render json: @character.errors.full_messages, status: 422
    end
  end

  def destroy
    @character = Character.find(params[:id])
    if @character && (current_user.id = @character.user_id)
      @character.destroy
      render :show
    else
      render json: @character.errors.full_messages, status: 422
    end
  end

  private
    def character_params
      params.require(:character).permit(:character_type, :name, :user_id)
    end
  
end
