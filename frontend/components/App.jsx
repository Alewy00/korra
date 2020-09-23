import Greetings from './greeting/greeting_container'
import React from "react";
import AskQuestionFormContainer from './questions/ask_question_container'
import QuestionIndex from './questions/question_index_container'

export const App = () => (

  <div>
          {/* <LoginFormContainer /> */}
      <div className="index">
          <AskQuestionFormContainer />
          <Greetings />
          {/* <QuestionIndex /> */}
          {/* <Route exact path="/" component={QuestionIndex} /> */}
          {/* <Greetings/> */}
        {/* <Switch></Switch> */}
        {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
        {/* <Route exact path="/signup" component={SignupFormContainer} /> */}
       
      </div>
    </div>
   

);
