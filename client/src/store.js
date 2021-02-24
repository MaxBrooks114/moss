import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import users from './reducers/users'
import currentUser from './reducers/currentUser'
import login from './reducers/login'
import signup from './reducers/signup'
import reviewForm from './reducers/reviews/reviewForm'
import reviews from './reducers/reviews/reviews'
import concerts from './reducers/concerts/concerts'
import concert from './reducers/concerts/concert'
import concertSearchForm from './reducers/concerts/concertSearchForm'


const reducer = combineReducers({
    users,
    currentUser,
    login,
    signup,
    reviewForm,
    reviews,
    concerts,
    concert,
    concertSearchForm

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
