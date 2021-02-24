import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import {Nav }from 'react-bootstrap'
import {Navbar} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
import { LinkContainer } from 'react-router-bootstrap';

import { getUserReviews, getReviews } from '../actions/reviews/reviews'




const NavBar = ({ currentUser, loggedIn, getUserReviews, getReviews }) => {

  return (
    <>
      <Navbar sticky="top"  >
        <Navbar.Brand>
         <h1>
          <LinkContainer to={'/about'}>
            <Badge className="logo" >
                Moss
            </Badge>
          </LinkContainer>
         </h1>
          </Navbar.Brand>
          <Nav className="mr-auto" variant="pills">
              <LinkContainer exact activeClassName="active"  to="/concerts">
                <Nav.Link>Concerts</Nav.Link>
              </LinkContainer>
              <LinkContainer exact activeClassName="active" to="/reviews" >
                <Nav.Link >Reviews</Nav.Link>
              </LinkContainer>
              <LinkContainer exact activeClassName="active" to={`/users/${currentUser.id}/reviews`} >
                <Nav.Link>Your Reviews</Nav.Link>
               </LinkContainer>
          </Nav>
          <Nav >
            { loggedIn ? <><Logout/></> : null}
          </Nav>
      </Navbar>
    </>
  )
}


const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps, {getUserReviews, getReviews})(NavBar)
