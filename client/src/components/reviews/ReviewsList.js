import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap';




const ReviewsList = ({reviews}) => {

  const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

  return (

  <div className ='row'>
      {reviews.map(r =>
        <Card key={r.id} className="col-md-3" >
          <Card.Body>
            <Card.Title>{capitalize(r.attributes.user.username)}'s review of {r.attributes.concert.name}</Card.Title>
            <Card.Text>Final Score: {r.attributes.final_score}</Card.Text><br/>
            <LinkContainer to={`/reviews/${r.id}`}>
              <Button>See This Review</Button>
            </LinkContainer>
          </Card.Body>
        </Card>)}
  </div>
 )
}




const mapStateToProps = (state, ownProps) => {
  return {

    reviews: state.reviews

  }
}

export default withRouter(connect(mapStateToProps)(ReviewsList))
