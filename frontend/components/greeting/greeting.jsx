import React from 'react';
import { Link } from 'react-router-dom';
import QuestionIndex from '../questions/question_index_container'
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import AskQuestionFormContainer from '../questions/ask_question_container'
import AnswerIndexContainer from '../answers/answer_index_container'
// import { Link} from 'react-router-dom'
import showQuestion from '../questions/show_question_container'
import showTopic from '../topics/show_topic_container'
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
                <Link to="/" id="home-taskbar"><i className="fas fa-home">
                  <span id="home-text"> Home</span></i></Link>
                <Link to="answers" id="answers-taskbar"><i className="far fa-edit">
                <span id="answers-text">Answer</span></i></Link>
                <button className="logout" onClick={logout}>Log Out</button>
           </div>
        <Switch>
            <Route path="/questions/:id" component={showQuestion}/>
            <Route path="/topics/:id" component={showTopic}/>
            <Route exact path="/" component={AskQuestionFormContainer} />
            <Route exact path="/answers" component={AnswerIndexContainer} />
        </Switch>
      </div>

    );
  
    return currentUser ? personalGreeting() : sessionLinks();
  };

  export default Greeting;