const initialState = {
  artist:""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_CONCERT_SEARCH_FORM":
      const returnVal = {
        ...state,
        [action.artist.name]: action.artist.value
      }
      return returnVal
    case "RESET_CONCERT_SEARCH_FORM":
      return initialState
    default:
      return state
  }
}
