import React, { Component } from 'react';
import {withRouter} from 'react-router';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }

    }



    componentDidMount( ) {
        const userId = this.props.match.params.id
        fetch(`https://moss-backend.herokuapp.com/api/v1/users/${userId}`, {
            credentials: "include",
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          })
          .then(r => r.json())
          .then(((user) => {
            this.setState(() => ({ user }))
            console.log({user})
            console.log(this.state.user.data)
          }))

    }

    

    render() {
        return (
            <div>
               <h1>{this.state.user.data.attributes.username}'s Profile</h1>
            </div>
        );
    }
}



export default withRouter(UserProfile);