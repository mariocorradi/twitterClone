import React, { Component } from "react";
import Tweet from './Tweet.js';

class UserProfile extends Component {
  state = {
    user: [],
    tweets : [],
    error: null
  };

  constructor(props){
    super(props);
    this.postEvent = this.postEvent.bind(this);
   }

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

  postEvent(event){ 
    event.preventDefault();
    fetch('/api/tweet', {
     method: 'post',
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
     },
     body: JSON.stringify({
      user: this.state.user._id,
      username: this.state.user.username,
      title: this.refs.title.value,
      body: this.refs.body.value
     })
    })
    .then((res) => res.json())
    .catch((err)=>console.log(err))

  };

  render() {
    const { error, tweets, user } = this.state;
    
    if (error) {
      return <div> Error: {error.message} </div>;
    } else {
      return (
        <div>
          <form onSubmit={this.postEvent}>
          <input ref="title" placeholder="Title" type="text" name="title"/><br />
          <input ref="body" placeholder="Write here your Tweet!" type="text" name="body"/><br />
            <button type="Submit">Send your Tweet!</button>
          </form>
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
