const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_CONCERT':
      return state;
    case 'GET_CONCERT':
      return action.concert.data
    case 'SET_CONCERT':
      return action.concert
    default:
      return state;
  }
}
