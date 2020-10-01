import React from 'react';
import { withRouter } from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import { recieveAllAnswersByQuestion } from '../../util/question_util';
import AnswerItem from '../answers/answer_item'
import CreateAnswer from './create_answer_container'
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
    const question = this.props.question;
    if(this.state.answers.length > 0){
      return(
           <Link className="number-link" to={`/questions/${question.id}`}> {this.state.answers.length} Answers</Link>
      ) 
    }
  }

    author(){
      const question = this.props.question;
      if(!this.state.answers.length > 0){
      return(
          <h3><Link className="no-answer-link"to={`/questions/${question.id}`}>No answers yet!</Link></h3>
      )
    }
    
  }
    

  render() {
    const question = this.props.question;
    return (
      <div className="question-index-item">
        <div className="a-index-content">
          <p className="question-index-link-p"><Link className ="question-index-link"to={`/questions/${question.id}`}>{question.body}</Link></p>
              {this.answer()}
              {this.author()}
          <CreateAnswer questionId={question.id} index={true} />
          </div>
      </div>
    );
  }
}


export default (AnswerIndexItem);
