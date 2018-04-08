import React, {
  Component
} from 'react';

import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    users: [],
    error: null

  };

  componentDidMount() {
    fetch("/api/user")
      .then(res => res.json())
      .then((result) => {
          this.setState({
            users: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        })
  }


  render() {
    const {
      error,
      users
    } = this.state;
    if (error) {
      return <div > Error: {
        error.message
      } < /div>;
    } else {
      return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <  img src = {logo}
        className = "App-logo"
        alt = "logo" / >
        <h1 className = "App-title" > Welcome to Twitter < /h1> < /
        header >
        <p>Our users
       </p>
       <ul>
        {users.map(user => (
          <li key={user.username}>
            {user.username} {user.name}
          </li>
        ))}
      </ul> < /
        div >
      );
    }
  }
}

export default App;
