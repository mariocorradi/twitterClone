import React, { Component } from "react";
import Tweet from './Tweet.js';

class UserProfile extends Component {
  state = {
    user: [],
    tweets : [],
    error: null
  };

  componentDidMount() {
    fetch("/api/user/" + this.props.match.params.id)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            user: result
          });
        },
        error => {
          this.setState({
            error
          });
        }
      )

    fetch("/api/tweet/?username=" + this.state.user.username)
        .then(res => res.json())
        .then(
        result => {
            this.setState({
            tweets: result
            });
        },
        error => {
            this.setState({
            error
            });
        }
    )
    
  }

  render() {
    const { error, tweets, user } = this.state;
    
    if (error) {
      return <div> Error: {error.message} </div>;
    } else {
      return (
        <div>
          <p> Questo è il profilo di {user.username}</p>
          <ul>
	        {tweets.map(tweet => (
                <li key={tweet._id}>
                <Tweet tweet={tweet}/>
                </li>
            ))}
        </ul>
        </div>
      );
    }
  }
}

export default UserProfile;
