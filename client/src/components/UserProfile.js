import React, { Component } from "react";

class UserProfile extends Component {
    state = {
    user: [],
    error: null
  };

  componentDidMount() {
    fetch('/api/user/'+this.props.match.params.id)
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
      );
  }

  render() {
    const { error, user } = this.state;
    if (error) {
      return <div> Error: {error.message} </div>;
    } else {
      return (
        <div>
          <p> Questo è il profilo di {user.username}</p>
        </div>
      );
    }
  }
}

export default UserProfile;