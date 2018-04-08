import React, { Component } from "react";
import { Link } from 'react-router-dom'

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
          <p>Users</p>
          <ul>
            {users.map(user => (
              <li key={user.username}>
              <Link to={`/userProfile/${user._id}`}>{user.username} {user.name}</Link>
            </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Home;
