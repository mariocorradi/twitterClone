import React, { Component } from "react";

class Tweet extends Component {

  render() {
    return (
        <div>
          <p>Posted on {this.props.tweet.date}</p>
          <p>{this.props.tweet.title}</p>
          <p>{this.props.tweet.body}</p>
        </div>
    );
  }

}

export default Tweet;