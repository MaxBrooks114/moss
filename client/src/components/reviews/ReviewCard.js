import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
import { getUserReviews } from '../.././actions/reviews/reviews'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { LinkContainer } from 'react-router-bootstrap'


const ReviewCard = ({ review, currentUserId, ownProps, getUserReviews }) => {

  const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}


  return (
    review ?
      <Card>
        <Card.Body>
          <Card.Title>{capitalize(review.attributes.user.username)}'s review of {review.attributes.concert.name}
          <LinkContainer to={`/concerts/${review.attributes.concert.id}`}>
            <Button> See This Concert </Button>
          </LinkContainer> </Card.Title>
          <ListGroup>
            <ListGroup.Item>Performance: {review.attributes.set_score}/5</ListGroup.Item>
            <ListGroup.Item>Venue: {review.attributes.venue_score}/5</ListGroup.Item>
            <ListGroup.Item>Sound: {review.attributes.sound_score}/5</ListGroup.Item>
            <ListGroup.Item>Set: {review.attributes.set_score}/5</ListGroup.Item>
            <ListGroup.Item>Price: {review.attributes.price}</ListGroup.Item>
            <ListGroup.Item> {review.attributes.write_up}</ListGroup.Item>
            <ListGroup.Item>Final Score: {review.attributes.final_score}/5</ListGroup.Item>
          </ListGroup>
          {review.attributes.user.id == currentUserId ? <LinkContainer to={`/reviews/${review.id}/edit`}>
            <Button>Edit your review</Button>
            </LinkContainer> : ""}<br/>
          <LinkContainer to={`/users/${review.attributes.user.id}/reviews`}>
            <Button> See all of {review.attributes.user.username}'s reviews</Button>
          </LinkContainer>
        </Card.Body>

      </Card> : <Card> Maaaaan they ain't no review here </Card>
  )

}

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.currentUser ? state.currentUser.id : ""
  return ({
    currentUserId

  })
}

export default withRouter(connect(mapStateToProps, {getUserReviews})(ReviewCard))
