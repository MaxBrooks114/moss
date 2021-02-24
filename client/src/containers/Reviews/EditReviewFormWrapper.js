import React from 'react';
import ReviewForm from '../.././components/reviews/ReviewForm'
import { updateReview, deleteReview } from '../.././actions/reviews/reviews'
import { setFormDataForEdit, resetReviewForm } from '../.././actions/reviews/reviewForm'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class EditReviewFormWrapper extends React.Component {
  componentDidMount(){
    this.props.review && this.props.setFormDataForEdit(this.props.review)
  }

  componentDidUpdate(prevProps) {
    this.props.review && !prevProps.review && this.props.setFormDataForEdit(this.props.review)
  }

  componentWillUnmount() {
    this.props.resetReviewForm()
  }

  handleSubmit = (formData) => {
    const { updateReview, review, history } = this.props
    updateReview({
      ...formData,
      reviewId: review.id
    }, history)
  }

  render() {
    const { history, deleteReview, review, currentUserId } = this.props
    const reviewId = review ? review.id : null
    const concertId = review ? review.attributes.concert.id : null
    const userId = review ? review.attributes.user.id : null

    return (
      currentUserId == userId ?
        <Card>
              <ReviewForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <Button onClick={()=>deleteReview(reviewId, history, concertId, userId)}>Delete this review</Button>
        </Card> : <Card> <Card.Title>This is not your review to edit!</Card.Title></Card>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.currentUser ? state.currentUser.id : ""
  return ({
    currentUserId
  })
}


export default connect(mapStateToProps, { updateReview, setFormDataForEdit, resetReviewForm, deleteReview })(EditReviewFormWrapper);
