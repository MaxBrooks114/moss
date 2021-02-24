import {
  resetLogin
} from './login.js'
import {
  resetSignup
} from "./signup.js"
import {
  clearConcerts
} from './concerts/concerts'
import {
  clearReviews
} from './reviews/reviews'





export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = user => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}


export const login = (credentials, history) => {
  return dispatch => {
    return fetch("https://moss-backend.herokuapp.com/api/v1/login", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
      .then(r => r.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user.data))
          dispatch(resetLogin())
          history.push('/about')
        }
      })
      .catch(console.log())
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearConcerts())
    dispatch(clearReviews())
    return fetch("https://moss-backend.herokuapp.com/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const signup = (credentials, history) => {
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch("https://moss-backend.herokuapp.com/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
      .then(r => r.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user.data))
          dispatch(resetSignup())
          history.push('/about')
        }
      })
      .catch(console.log())
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("https://moss-backend.herokuapp.com/api/v1/get_current_user", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },

      })
      .then(r => r.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user.data))
        }
      })
      .catch(err => console.log(err))
  }
}