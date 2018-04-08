import React from "react";
import { Link } from 'react-router-dom'
import "../App.css";
import logo from "../logo.svg";

const Header = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title"> Welcome to Twitter </h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>Users</Link></li>
        </ul>
      </nav>
    </header>
  </div>
)
export default Header;
