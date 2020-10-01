import React from 'react';
import {Link} from 'react-router-dom';
import AnswerIndexItem from './answer_index_item'
class AnswerIndex extends React.Component {
 
  constructor(props){
    super(props);
    // this.handleDelete = this.handleDelete.bind(this)
    // this.editButtons = this.editButtons.bind(this)
   
} 
  componentDidMount(){
    this.props.recieveAllQuestions();
  }

  
    render() { 
      const questions = Object.values(this.props.questions);
      return (
      <div className="answer-index">
         <ul className ="question-list">
            {questions.map((question, i) => (
                <li key={i} className="question-items">
                  <AnswerIndexItem 
                  question={question} 
                  key={question.id} 
                  recieveAllAnswersByQuestion={this.props.recieveAllAnswersByQuestion}
                  currentUser={this.props.currentUser}
                    />    
                </li>
                ))}
          </ul>
          </div> 
    )          
  }
}
export default AnswerIndex;