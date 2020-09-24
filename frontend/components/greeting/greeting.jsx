import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
      <div className="login-page">
        <Link to="/login">Login!</Link>
      </div>
    );
    const personalGreeting = () => (
    <div>
      <Link to="/login" id="korra-taskbar">Korra</Link>
      <div className="logout">
        <button onClick={logout}>Log Out</button>
      </div>
      </div>

    );
  
    return currentUser ? personalGreeting() : sessionLinks();
  };

  export default Greeting;