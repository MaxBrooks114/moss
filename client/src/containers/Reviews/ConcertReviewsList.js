import React, { useState, useEffect } from 'react'
import ReviewsList from '../.././components/reviews/ReviewsList'
import { getConcertReviews } from '../.././actions/reviews/reviews'
import { connect } from 'react-redux'
import { withRouter, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const ConcertReviewsList = ({ getConcertReviews, currentUserId, concertId}) => {
  const [ reviews ] = useState({})
  useEffect(() => {
        getConcertReviews(concertId)
    }, [ concertId])
    return (
      <Container className="reviews-container">
        <ReviewsList reviews={reviews} />
      </Container>
    )
}


const mapStateToProps = (state, ownProps) => {

  const concertId = ownProps.match.params.id 
  return ({
    concertId
  })
}


export default withRouter(connect(mapStateToProps, {getConcertReviews})(ConcertReviewsList))