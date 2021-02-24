import { resetReviewForm } from './reviewForm'
import { getConcerts } from '../concerts/concerts'

// synchronous actions

export const setReviews = reviews => {
  return {
    type: "SET_REVIEWS",
    reviews
  }
}


export const setUserReviews = reviews => {
  return {
    type: "SET_USER_REVIEWS",
    reviews
  }
}

export const setConcertReviews = reviews => {
  return {
    type: "SET_CONCERT_REVIEWS",
    reviews
  }
}


export const clearReviews = () => {
  return {
    type: "CLEAR_REVIEWS"
  }
}

export const addReview = review => {
  return {
    type: "ADD_REVIEW",
    review
  }
}

export const deleteReviewSuccess = reviewId => {
  return {
    type: "DELETE_REVIEW",
    reviewId
  }
}

export const updateReviewSuccess = review => {
  return {
    type: "UPDATE_REVIEW",
    review
  }
}

// async actions


export const getReviews = () => {
  return dispatch => {
    return fetch(`https://moss-backend.herokuapp.com/api/v1/reviews`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setReviews(response.data))
        }
      })
      .catch(console.log)
  }
}

export const getConcertReviews = (concertId) => {
  return dispatch => {
    return fetch(`https://moss-backend.herokuapp.com/api/v1/concerts/${concertId}/reviews`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setConcertReviews(response.data))
        }
      })
      .catch(console.log)
  }
}

export const getUserReviews = (userId) => {
  return dispatch => {
    return fetch(`https://moss-backend.herokuapp.com/api/v1/users/${userId}/reviews`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setUserReviews(response.data))
        }
      })
      .catch(console.log)
  }
}

export const createReview = (reviewData, history) => {
  return dispatch => {
    const sendableReviewData = {
      venue_score :reviewData.venue_score,
      sound_score :reviewData.sound_score,
      performance_score :reviewData.performance_score,
      set_score :reviewData.set_score,
      price :reviewData.price,
      write_up :reviewData.write_up,
      user_id :reviewData.userId,
      concert_id: reviewData.concertId
    }
    return fetch("https://moss-backend.herokuapp.com/api/v1/reviews", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableReviewData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          console.log(resp.data)
          dispatch(addReview(resp.data))
          dispatch(getConcerts(resp.data.attributes.concert.artist))
          dispatch(resetReviewForm())
          history.push(`/reviews/${resp.data.id}`)

        }
      })
      .catch(console.log)

  }
}

export const updateReview = (reviewData, history) => {
  return dispatch => {
    const sendableReviewData = {
      venue_score :reviewData.venue_score,
      sound_score :reviewData.sound_score,
      performance_score :reviewData.performance_score,
      set_score :reviewData.set_score,
      price :reviewData.price,
      write_up :reviewData.write_up,
      user_id :reviewData.userId,
      concert_id :reviewData.concertId
    }
    return fetch(`https://moss-backend.herokuapp.com/api/v1/reviews/${reviewData.reviewId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableReviewData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(updateReviewSuccess(resp.data))
          dispatch(getConcertReviews(resp.data.attributes.concert.id))
          dispatch(getConcerts(resp.data.attributes.concert.artist))
          dispatch(resetReviewForm())
          history.push(`/reviews/${resp.data.id}`)
        }
      })
      .catch(console.log)

  }
}

export const deleteReview = (reviewId, history, concertId, userId) => {
  return dispatch => {
    return fetch(`https://moss-backend.herokuapp.com/api/v1/reviews/${reviewId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          console.log(resp)
          dispatch(deleteReviewSuccess(reviewId))
          dispatch(getUserReviews(userId))
          dispatch(getConcertReviews(concertId))
          history.push(`/concerts/${concertId}`)
        }

      })

      .catch(console.log)


  }

}
