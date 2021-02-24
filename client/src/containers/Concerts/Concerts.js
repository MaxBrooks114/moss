
import React from 'react';
import ConcertSearchFormWrapper from './ConcertSearchFormWrapper';
import ConcertsList from '../.././components/concerts/ConcertsList';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const Concerts = ({concerts, isLoading, artist}) => {
    return (
      <Container className="concerts-container">
        <ConcertSearchFormWrapper />
        {isLoading  ?
          <Button className="loading-bar" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
                  />
              Loading...
            </Button>
           :
           ((concerts.length > 0 && concerts !== '\n{warn=Not found}\n') ? <ConcertsList concerts={concerts}/> : null)}

      </Container>
    )
};



const mapStateToProps = (state) => {

  return {

      concerts: state.concerts.concerts,
      isLoading: state.concerts.isLoading,
      artist: state.concertSearchForm.artist

  }
}

export default connect(mapStateToProps)(Concerts);
