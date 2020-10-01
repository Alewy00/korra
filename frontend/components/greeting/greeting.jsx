import React from 'react';
import { Link } from 'react-router-dom';
import QuestionIndex from '../questions/question_index_container'
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import AskQuestionFormContainer from '../questions/ask_question_container'
import AnswerIndexContainer from '../answers/answer_index_container'
// import { Link} from 'react-router-dom'
import showQuestion from '../questions/show_question_container'
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
                <Link to="/" id="home-taskbar">Home</Link>
                <Link to="answers" id="answers-taskbar">Answers</Link>
                <button className="logout" onClick={logout}>Log Out</button>
           </div>
        <Switch>
            <Route path="/questions/:id" component={showQuestion}/>
            <Route exact path="/" component={AskQuestionFormContainer} />
            <Route exact path="/answers" component={AnswerIndexContainer} />
        </Switch>
      </div>

    );
  
    return currentUser ? personalGreeting() : sessionLinks();
  };

  export default Greeting;