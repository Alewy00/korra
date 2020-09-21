import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
      <div className="login-page">
        <Link to="/login">Login!</Link>
      </div>
    );
    const personalGreeting = () => (
      <div className="ask_question">
        <h1>{currentUser.first_name}!</h1>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  
    return currentUser ? personalGreeting() : sessionLinks();
  };

  export default Greeting;