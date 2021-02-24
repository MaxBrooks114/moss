import React from 'react';
import ReviewForm from '../.././components/reviews/ReviewForm'
import { createReview } from '../.././actions/reviews/reviews'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'

const NewReviewFormWrapper = ({ history, createReview }) => {

  const handleSubmit = (formData, userId, concertId) => {
    createReview({
      ...formData,
      userId, concertId
    }, history)
  }
  return (
      <Card>
        <ReviewForm history={history} handleSubmit={handleSubmit} />
      </Card>

    )
};

export default connect(null, { createReview })(NewReviewFormWrapper);
