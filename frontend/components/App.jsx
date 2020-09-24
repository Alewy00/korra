import Greetings from './greeting/greeting_container'
import React from "react";
import AskQuestionFormContainer from './questions/ask_question_container'
import QuestionIndex from './questions/question_index_container'

export const App = () => (

 
        
      <div className="index">
          <Greetings />
          <AskQuestionFormContainer />
          <QuestionIndex />
    </div>
   

);
