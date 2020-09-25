import Greetings from './greeting/greeting_container'
import React from "react";
import AskQuestionFormContainer from './questions/ask_question_container'
import QuestionIndex from './questions/question_index_container'
import {Route, Link} from 'react-router-dom'
import showQuestion from './questions/show_question_container'
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
export const App = () => (  
      <div className="index">
            <Greetings />
           <Switch>
            {/* <AskQuestionFormContainer /> */}
            {/* <QuestionIndex /> */}
            <Route path="/questions/:id" component={showQuestion}/>
            <Route exact path="/" component={AskQuestionFormContainer} />
          </Switch>

    </div>
   

);
