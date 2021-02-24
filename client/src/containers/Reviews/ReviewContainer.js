import React, { useEffect } from 'react'
import ReviewCard from '../.././components/reviews/ReviewCard'
import { getReviews, getUserReviews, getConcertReviews } from '../.././actions/reviews/reviews'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const ReviewContainer = ({getReviews, reviewId, getUserReviews, getConcertReviews, concertId, reviews, currentUserId, userId}) => {
  useEffect(() => {
      if (concertId){
        getConcertReviews(concertId)
      } else if (userId) {
        getUserReviews(userId)
      } else {
        getReviews()
      }
    }, [reviewId, concertId, getConcertReviews, getReviews, getUserReviews, userId])
  return <ReviewCard review={reviews.find(review => review.id === reviewId)} />
}


const mapStateToProps = (state, ownProps) => {
  const reviewId = ownProps.match.params.id
  const concertId = ownProps.match.path === "/concerts/:id/reviews" ? ownProps.match.params.id : null
  const userId = ownProps.match.path === "/users/:id/reviews" ? ownProps.match.params.id : null
  const currentUserId = state.currentUser ? state.currentUser.id : ""
  return ({
    reviews : state.reviews,
    reviewId,
    concertId,
    currentUserId,
    userId
  })
}


export default withRouter(connect(mapStateToProps, {getReviews, getUserReviews, getConcertReviews})(ReviewContainer))
