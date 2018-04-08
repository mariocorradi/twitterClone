import React, { Component } from "react";

class User extends Component {
  state = {
    users: [],
    error: null
  };

  componentDidMount() {
    fetch("/api/user")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            users: result
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
    const { error, users } = this.state;
    if (error) {
      return <div> Error: {error.message} </div>;
    } else {
      return (
        <div>
          <p>Singolar user page</p>
        </div>
      );
    }
  }
}

export default User;
