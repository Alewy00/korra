import React from 'react';
import { withRouter } from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import { recieveAllAnswersByQuestion } from '../../util/question_util';
import AnswerItem from '../answers/answer_item'

class AnswerIndexItem extends React.Component {
  constructor(props){
    super(props);
    // this.handleDelete = this.handleDelete.bind(this)
    // this.editButtons = this.editButtons.bind(this)
    this.state = {
      questionId: this.props.question.id,
      answers: {}
    }
    this.props.recieveAllAnswersByQuestion(this.state.questionId)
            .then(answers => this.setState({answers: Object.values(answers)}))
    
} 
  answer(){
    if(this.state.answers.length > 0){
      return(
           <h3> There are {this.state.answers.length} answers for this question</h3>  
      ) 
    }
  }

    author(){
      const question = this.props.question;
      if(!this.state.answers.length > 0){
      return(
          <div className="no-answer">
          <Link className ="question-link"to={`/questions/${question.id}`}>No answers yet!</Link>
          </div>
      )
    }
    
  }
    

  render() {
    const question = this.props.question;
    return (
      <div className="question-item">
          <Link className ="question-link"to={`/questions/${question.id}`}>{question.body}</Link>
            <div className="question-answer">
              {this.answer()}
            </div>
          {this.author()}
      </div>
    );
  }
}


export default (AnswerIndexItem);
