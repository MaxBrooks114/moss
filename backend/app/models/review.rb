class Review < ApplicationRecord
  belongs_to :user
  belongs_to :concert
  validates :venue_score, :sound_score, :performance_score, :set_score, presence: { message: "cannot be blank" }
  validates :concert_id, uniqueness: { scope: :user_id, message: "You've already review this concert!" },  :on => :create


  def final_score
     final_score = (venue_score + sound_score + performance_score + set_score)/4
  end



end
