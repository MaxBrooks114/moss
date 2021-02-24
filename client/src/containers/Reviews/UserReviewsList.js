import React, { useState, useEffect } from 'react'
import ReviewsList from '../.././components/reviews/ReviewsList'
import { getUserReviews } from '../.././actions/reviews/reviews'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const UserReviewsList = ({ getUserReviews, userId}) => {
  const [ reviews ] = useState({})
  useEffect(() => {
        getUserReviews(userId)
    }, [ userId ])
    return (
      <Container className="reviews-container">
        <ReviewsList reviews={reviews} />
      </Container>
    )
}


const mapStateToProps = (state, ownProps) => {

  const userId = ownProps.match.params.id 
  return ({
    userId
  })
}


export default withRouter(connect(mapStateToProps, {getUserReviews})(UserReviewsList))