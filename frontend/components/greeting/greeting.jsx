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
      {/* <QuestionIndex /> */}
    <div className="taskbar">
      <Link to="/" id="korra-taskbar">Korra</Link>
      <div className="logout">
        <button onClick={logout}>Log Out</button>
      </div>
      </div>
      </div>

    );
  
    return currentUser ? personalGreeting() : sessionLinks();
  };

  export default Greeting;