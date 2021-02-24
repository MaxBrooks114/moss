class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes  :final_score, :venue_score, :sound_score, :performance_score, :set_score, :price, :write_up
  belongs_to :user, serializer: UserSerializer
  belongs_to :concert, serializer: ConcertSerializer

  attribute :user do |rev|
    rev.user do |user| {
      username: user.username,
      userId: user.id
    }
    end
end

  attribute :concert do |review|
    review.concert do |concert| {
      name: concert.name,
      date: concert.date,
      artist: concert.artist,
      venue: concert.venue
    }
  end
  end

end
