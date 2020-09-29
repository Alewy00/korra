import React from 'react';
import { Link } from 'react-router-dom';
import QuestionIndex from '../questions/question_index_container'

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
      <div className="login-page">
        <Link to="/login">Login!</Link>
      </div>
    );
    const personalGreeting = () => (
      <div className="MAIN">
    <div className="taskbar">
      <Link to="/" id="korra-taskbar">Korra</Link>
      <button className="logout" onClick={logout}>Log Out</button>
      </div>
      </div>

    );
  
    return currentUser ? personalGreeting() : sessionLinks();
  };

  export default Greeting;