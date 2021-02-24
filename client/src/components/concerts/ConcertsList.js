import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { saveConcert } from '../.././actions/concerts/concerts'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap';



const ConcertsList = ({concerts, saveConcert}) => {

    const date = (datetime) => {
      return new Date(datetime).toDateString()
    }
    return (

            <div className ='row'>
              {concerts.sort((a, b) => (a.datetime < b.datetime) ? 1 : -1).map(
                c =>
                  <Card key={c.id} className="col-md-3">
                    <Card.Body>
                      <Card.Title>{c.lineup[0]} @ {c.venue.name} on {date(c.datetime)}</Card.Title>
                      <LinkContainer to={`/concerts/${c.id}`} onClick={()=>saveConcert(c)}>
                        <Button>See This Concert</Button>
                      </LinkContainer>
                    </Card.Body>
                  </Card>)}
              </div>



    )
}




export default withRouter(connect(null, {saveConcert})(ConcertsList))
