import React from 'react';
import { withRouter } from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import { recieveAllAnswersByQuestion } from '../../util/question_util';
import AnswerItem from '../answers/answer_item'

class QuestionIndexItem extends React.Component {
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
    
    // console.log(this.state.answers[0])
    if(this.state.answers.length > 0){
      return(
              <AnswerItem 
              answer={this.state.answers[0]}  
              currentUser={this.props.currentUser}
              alone={true}
               />
      ) 
    }
  }

    author(){
      if(!this.state.answers.length > 0){
      return(
        <div>
        <div className="no-answer">
          No Answers yet!
        </div>
        </div>
      )
    }
    
  }
    

  render() {
    const question = this.props.question;
    return (
      <div className="question-item">
        <div className="user-icon">
         <i id="user-circle" className="fas fa-user-circle"></i>
        </div>
          <h3 id="q-author-name">{question.author.first_name + " " + question.author.last_name }</h3>
          <p className="question-index-body"><Link className ="question-link"to={`/questions/${question.id}`}>{question.body}</Link></p>
            <div className="question-answer">
              {this.answer()}
            </div>
          {this.author()}
      </div>
    );
  }
}


export default (QuestionIndexItem);
