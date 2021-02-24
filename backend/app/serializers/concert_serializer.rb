class ConcertSerializer
  include FastJsonapi::ObjectSerializer

  attributes :name, :date, :venue, :artist, :opener, :combined_review_score
  has_many :users
  attribute :reviews do |concert|
    concert.reviews.map do |rev|
      {
        id: rev.id,
        final_score: rev.final_score,
        user_id: rev.user_id

      }
    end
  end

  def combined_review_score
    combined_score = 0
    if self.reviews.count > 0
      self.reviews.each do |review|
        combined_score += review.final_score
      end
      combined_score = combined_score / self.reviews.count
    end
      return combined_score
  end
end
