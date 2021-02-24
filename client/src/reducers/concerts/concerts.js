
const initialState = {
  isLoading: false,
  concerts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_CONCERTS":
    return { ...state, isLoading: true };
  case "GET_CONCERTS":
    return { ...state,
             concerts: action.concerts.data,
             isLoading: false };
 case 'ADD_REVIEWS_TO_CONCERTS':
      return action.concerts
case 'SAVE_CONCERT':
      return action
case "CLEAR_REVIEWS":
        return initialState
  default:
      return state;
  }
}
