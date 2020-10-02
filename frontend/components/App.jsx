import Greetings from './greeting/greeting_container'
import React from "react";
import AskQuestionFormContainer from './questions/ask_question_container'
import AnswerIndexContainer from './answers/answer_index_container'
// import { Link} from 'react-router-dom'
import showQuestion from './questions/show_question_container'
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { BrowserRouter, Route, Link } from 'react-router-dom';
export const App = () => (  
      <div className="index">
            <Greetings />
      </div>
   

);
