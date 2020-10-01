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
        <div className="a-index-top">
            <h4 id="a-index-top-header">Answers for you</h4>
        </div>
         <ul className ="answer-index-list">
            {questions.map((question, i) => (
                <li key={i} className="answer-index-items">
                  <AnswerIndexItem 
                  question={question} 
                  key={question.id} 
                  recieveAllAnswersByQuestion={this.props.recieveAllAnswersByQuestion}
                  currentUser={this.props.currentUser}
                    />    
                </li>
                ))}
          </ul>
          <div className="a-index-bottom">

        </div>
          </div> 
    )          
  }
}
export default AnswerIndex;