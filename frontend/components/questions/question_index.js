import React from 'react';
import {Link} from 'react-router-dom';
import IndexItem from './question_index_item'

class QuestionIndex extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {}; 
    this.props.recieveAllQuestions().then((questions) => {
      this.state = questions;
    });
  }


 render() {
  const questions = Object.values(this.props.questions);
    return (
        <div className="feed">
       <h6>Questions</h6>
       <div className="question-index">
            {questions.map((question, i) => (
                < IndexItem question={question} key={question.id}/>
            ))}   
        </div>
      </div>
    )          
  }
}
export default QuestionIndex;