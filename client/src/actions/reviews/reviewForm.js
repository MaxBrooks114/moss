export const updateReviewForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_REVIEW_FORM",
    formData
  }
}

export const resetReviewForm = () => {
  return {
    type: "RESET_NEW_REVIEW_FORM",
  }
}

export const setFormDataForEdit = review => {
  const reviewFormData = {
    venue_score :review.attributes.venue_score,
    sound_score :review.attributes.sound_score,
    performance_score :review.attributes.performance_score,
    set_score :review.attributes.set_score,
    price :review.attributes.price,
    write_up :review.attributes.write_up,
    user_id :review.attributes.user_id,
    concert_id :review.attributes.concert_id
  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    reviewFormData
  }
}
