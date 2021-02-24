import axios from 'axios';
import store from '../.././store';
import { resetConcertSearchForm }from './concertSearchForm'

export const setConcerts = concerts => {
  return {
    type: "SET_CONCERTS",
    concerts
  }
}

export const setConcert = concert => {
  return {
    type: "SET_CONCERT",
    concert
  }
}

export const clearConcerts = () => {
  return {
    type: "CLEAR_CONCERTS"
  }
}



const REACT_APP_BANDSINTOWN_APP_ID = process.env.REACT_APP_BANDSINTOWN_APP_ID ;

export const getConcerts = (artist) => {
      return (dispatch) => {
        dispatch({ type: 'LOADING_CONCERTS' });
        return axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=${REACT_APP_BANDSINTOWN_APP_ID}&date=past`, {headers: {
          'Access-Control-Allow-Origin': 'https://localhost:3000/'},
        })
          .then(concerts => {
            dispatch({ type: 'GET_CONCERTS', concerts })
            dispatch({ type: 'SET_CONCERTS', concerts })
            dispatch(addReviewsToConcerts(concerts))
            dispatch(resetConcertSearchForm())
          })
          .catch( err=> {
            console.log(err.code)
            console.log(err.message)
            console.log(err.stack)
          }
          )
        }
    }

export const getConcert = (concertId) => {
      return dispatch => {
        return fetch(`https://moss-backend.herokuapp.com/api/v1/concerts/${concertId}`, {
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
              console.log(response.data)
              dispatch(setConcert(response.data))
            }
          })
          .catch(console.log)
      }
    }

export const saveConcert = (concertData) => {
    return dispatch => {
      const sendableConcertData = {
        venue: concertData.venue.name,
        artist: concertData.lineup[0],
        date: concertData.datetime,
        concert_api_id: parseInt(concertData.id, 10)
      }
      return fetch("https://moss-backend.herokuapp.com/api/v1/concerts", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableConcertData)
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            console.log(resp.error)
          } else {
            console.log(resp)


          }
        })
        .catch(console.log)

    }
  }


export const addReviewsToConcerts = (concerts) => {
  return (dispatch, getState) => {
    const reviews  = store.getState().reviews
    return concerts.data.map(concert => concert.reviews = reviews.filter(review => review.attributes.concert.id == concert.id))
}
}
