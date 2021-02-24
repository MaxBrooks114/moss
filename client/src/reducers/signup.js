const initialState = {
  username: "",
  name: "",
  password:""
}



export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNUP":
      return action.formData
    case "RESET_SIGNUP":
      return initialState
    default:
      return state
  }
}
 
