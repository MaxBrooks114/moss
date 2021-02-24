export const updateSignup = formData => {
 return {
   type: "UPDATE_SIGNUP",
   formData
 }
}

export const resetSignup = formData => {
 return {
   type: "RESET_SIGNUP"
 }
}
