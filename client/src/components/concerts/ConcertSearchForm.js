import React from 'react';
import { connect } from 'react-redux'
import { updateConcertSearchForm } from '../.././actions/concerts/concertSearchForm'
import Button from 'react-bootstrap/Button'


const ConcertSearchForm = ({ artist, updateConcertSearchForm, handleSubmit}) => {



  const handleChange = event => {
    const { name, value } = event.target
    updateConcertSearchForm(name, value)
  }

  return (
    <form className="form search__form" onSubmit={event => {
      event.preventDefault()
      handleSubmit(artist)
    }}>
      <input className='form-control' placeholder="Search " type="text" name="artist" value={ artist } onChange={ handleChange }/>
      <Button className="search-button" type="submit">Search Concerts</Button>
    </form>
  )
}
const mapStateToProps = (state) => {
  return {
    artist: state.concertSearchForm.artist
  }
}

export default connect(mapStateToProps, {updateConcertSearchForm}) (ConcertSearchForm);
