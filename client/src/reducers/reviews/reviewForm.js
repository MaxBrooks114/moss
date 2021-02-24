const initialState = {
  venue_score:"",
  sound_score:"",
  performance_score:"",
  set_score:"",
  price:"",
  write_up:""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_REVIEW_FORM":
      const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal
    case "RESET_NEW_REVIEW_FORM":
      return initialState
    case "SET_FORM_DATA_FOR_EDIT":
      return action.reviewFormData
    default:
      return state
  }
}
