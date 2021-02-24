import React from 'react'
import { connect } from 'react-redux'
import { updateReviewForm } from '../.././actions/reviews/reviewForm'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


const ReviewForm = ({ formData, updateReviewForm, userId, concertId, review, handleSubmit, editMode}) => {

  const { performance_score, venue_score, set_score, sound_score, price, write_up } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateReviewForm(name, value)
  }

  return (
    <Form onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData, userId, concertId)
    }}>
      <Form.Label>
        Rate the Performance:
        <Form.Control as="select" value={performance_score} name="performance_score" onChange={handleChange} >
          <option value=""> 0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
       </Form.Control>
      </Form.Label><br/>
      <Form.Label>
        Rate the Venue:
        <Form.Control as="select" value={venue_score} name="venue_score" onChange={handleChange} >
          <option value=""> 0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
       </Form.Control>
      </Form.Label><br/>
      <Form.Label>
        Rate the Set:
        <Form.Control as="select" value={set_score} name="set_score" onChange={handleChange} >
          <option value=""> 0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
       </Form.Control>
      </Form.Label><br/>
      <Form.Label>
        Rate the Sound:
        <Form.Control as="select" value={sound_score} name="sound_score" onChange={handleChange} >
          <option value=""> 0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
       </Form.Control>
      </Form.Label><br/>
      <Form.Label>
        Rate the Price:
        <Form.Control as="select" value={price} name="price" onChange={handleChange} >
          <option value=""> </option>
          <option value="free">Free</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
       </Form.Control>
      </Form.Label><br/>
      <textarea placeholder="Write something about your experience!" value={write_up} name="write_up" onChange={handleChange} /><br/>

      <Button type ="submit" >{editMode ? "Update Review" : "Create Review" }</Button>
    </Form>
  )
}

const mapStateToProps = (state, ownProps) => {
  const userId = state.currentUser ? state.currentUser.id : ""
  const concertId = ownProps.match.params.id
  return {
    formData: state.reviewForm,
    userId,
    concertId
  }
}


export default withRouter(connect(mapStateToProps, { updateReviewForm })(ReviewForm));
