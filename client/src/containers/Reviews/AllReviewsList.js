import React, { useState, useEffect } from 'react'
import ReviewsList from '../../components/reviews/ReviewsList'
import { getReviews } from '../../actions/reviews/reviews'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const AllReviewsList = ({ getReviews }) => {
  const [ reviews ] = useState({})

  useEffect(() => {
        getReviews()
    }, [])
    return (
      <Container className="reviews-container">
        <ReviewsList reviews={reviews} />
      </Container>
    )
}


export default withRouter(connect(null, {getReviews})(AllReviewsList))
