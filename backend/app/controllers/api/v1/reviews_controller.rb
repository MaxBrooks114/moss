class Api::V1::ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  # GET /reviews
  def index
    if params[:user_id]
      @user = User.find(params[:user_id])
      @reviews = @user.reviews
    elsif params[:concert_id]
      @concert = Concert.find(params[:concert_id])
      @reviews = @concert.reviews
    else
      @reviews = Review.all
    end
    render json: ReviewSerializer.new(@reviews)
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    # byebug
    @review = current_user.reviews.build(review_params)
    @review.concert = Concert.find(params[:concert_id])
    @review.user = User.find(params[:user_id])


    if @review.save
      render json:  ReviewSerializer.new(@review), status: :created
    else
      error_resp = {
        error: @review.errors.full_messages.to_sentence
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end


  # PATCH/PUT /reviews/1
  def update
    if current_user.id == @review.user.id
      if @review.update(review_params)
        render json:  ReviewSerializer.new(@review), status: :ok
      else
        error_resp = {
          error: @review.errors.full_messages.to_sentence
        }
        render json: error_resp, status: :unprocessable_entity
      end
    else
        error_resp = {
          error: "This is not your review to edit"
        }
        render json: error_resp, status: :unprocessable_entity
   end
  end

  # DELETE /reviews/1
  def destroy
    if @review.destroy
          render json:  { data: "Review successfully destroyed" }, status: :ok
        else
          error_resp = {
            error: "Review not found and not destroyed"
          }
          render json: error_resp, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def review_params
      params.require(:review).permit(:venue_score, :sound_score, :performance_score, :set_score, :price, :write_up, :user_id, :concert_id, )
    end
end
