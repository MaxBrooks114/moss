class Api::V1::ConcertsController < ApplicationController
  before_action :set_concert, only: [:show, :update, :destroy]

  # GET /concerts
  def index
    if params[:user_id]
      @user = User.find(params[:user_id])
      @concerts = @user.concerts

    else
      @concerts = Concert.all

    end
    render json: ConcertSerializer.new(@concerts)
  end

  # GET /concerts/1
  def show
   @reviews = @concert.reviews
   render json: ConcertSerializer.new(@concert)
  end

  # POST /concerts
  def create
    @concert = Concert.new(concert_params.except(:concert_api_id))
    @concert.id = params[:concert_api_id]
    if @concert.save
        render json: ConcertSerializer.new(@concert)
      else
        resp = {
          error: @concert.errors.full_messages.to_sentence
        }
        render json: resp, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /concerts/1
  def update
    if @concert.update(concert_params)
      render json: @concert
    else
      render json: @concert.errors, status: :unprocessable_entity
    end
  end

  # DELETE /concerts/1
  def destroy
    @concert.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_concert
      @concert = Concert.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def concert_params
      params.require(:concert).permit(:concert_api_id, :combined_review_score, :artist, :venue, :name, :date, :opener)
    end
end
