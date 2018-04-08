import React, { Component } from "react";

class Home extends Component {
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
          <p>Our users</p>
          <ul>
            {users.map(user => (
              <li key={user.username}>
                {user.username} {user.name}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Home;
