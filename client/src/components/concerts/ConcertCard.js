import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getConcerts, getConcert } from '../.././actions/concerts/concerts.js'
import { getConcertReviews } from '../.././actions/reviews/reviews.js'
import { withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'


const ConcertCard = ({concert, currentUserId}) => {

    return (
      concert && concert.attributes ?
          <Card className = "concert-card">
            <Card.Body>
              <Card.Text>Date: {concert.attributes.date}</Card.Text>
              <Card.Text>Artist: {concert.attributes.artist}</Card.Text>
              <Card.Text>Venue: {concert.attributes.venue}</Card.Text>
              <Card.Text>Aggregated Score: {concert.attributes.combined_review_score}</Card.Text>
              <LinkContainer to={`/concerts/${concert.id}/reviews`} >
                <Button>See all reviews for this concert</Button>
              </LinkContainer>
              {!!concert.attributes.reviews.find(review => review.user_id == currentUserId) ?
                <LinkContainer to ={`/reviews/${concert.attributes.reviews.find(review => review.user_id == currentUserId).id}`}>
                    <Button>Your Review</Button>
                </LinkContainer> :
                <LinkContainer to ={`/concerts/${concert.id}/reviews/new`}>
                 <Button>Add a Review</Button>
                </LinkContainer> }
            </Card.Body>
          </Card>
          : <Card> Concert not found </Card>

      )

    }

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.currentUser ? state.currentUser.id : ""
  const concertId = ownProps.match.params.id
  return ({
    currentUserId,
    concertId,
    concerts: state.concerts,
    reviews: state.reviews,
    concert: state.concert,




  })
}


export default withRouter(connect(mapStateToProps, {getConcerts, getConcertReviews, getConcert})(ConcertCard))
