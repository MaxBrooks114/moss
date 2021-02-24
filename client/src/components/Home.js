import React from 'react'
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => (
  <Jumbotron>
    <Badge className="logo">
       Moss
    </Badge>
    <span className="linkcontainer">
      <LinkContainer to="/signup">
          <Button>Sign Up</Button>
      </LinkContainer> or
      <LinkContainer to="/login">
          <Button>Log in</Button>
      </LinkContainer>
    </span>
  </Jumbotron>
);


export default Home;
