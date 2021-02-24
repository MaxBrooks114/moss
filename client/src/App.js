import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar'
import Login  from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import About from './components/About'
import UserProfile from './components/UserProfile'
import NewReviewFormWrapper from './containers/Reviews/NewReviewFormWrapper'
import EditReviewFormWrapper from './containers/Reviews/EditReviewFormWrapper'
import ConcertFetcher from './containers/Concerts/ConcertFetcher'
import Concerts from './containers/Concerts/Concerts'
import AllReviewsList from './containers/Reviews/AllReviewsList'
import UserReviewsList from './containers/Reviews/UserReviewsList'
import ConcertReviewsList from './containers/Reviews/ConcertReviewsList'
import ReviewContainer from './containers/Reviews/ReviewContainer'
import { Route, Switch, withRouter } from 'react-router-dom'




class App extends React.Component {
  componentDidMount(ownProps){
    this.props.getCurrentUser()

  }
  render() {
    const { loggedIn, reviews } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar/> : <Home/> }

        <Switch>
          <Route exact path='/about' component={About}/>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/concerts' component={Concerts}/>
          <Route exact path='/concerts/:id' component={ConcertFetcher}/>
          <Route exact path='/reviews' component={AllReviewsList}/>
          <Route exact path='/concerts/:id/reviews' component={ConcertReviewsList}/>
          <Route exact path='/users/:id/reviews' component={UserReviewsList}/>
          <Route exact path='/reviews/:id' component={ReviewContainer}/>
          <Route exact path='/concerts/:id/reviews/new' component={NewReviewFormWrapper}/>
     
          <Route exact path='/reviews/:id/edit' render={props => {
             const review = reviews.find(review => review.id === props.match.params.id)
             return <EditReviewFormWrapper review={review} {...props}/>
           }
         }/>
         <Route exact path='/users/:id' render={(props) => ( <UserProfile {...props}/>)}/>
        </Switch>

      </div>
    );

  }
}

const mapStateToProps = (state, ownProps) => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return ({
    loggedIn: !!state.currentUser,
    concerts: state.concerts,
    userId,
    reviews: state.reviews
  })

}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
