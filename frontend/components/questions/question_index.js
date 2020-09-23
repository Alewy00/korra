import React from 'react';
import {Link} from 'react-router-dom';
import IndexItem from './question_index_item'

class QuestionIndex extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {}; 
    this.props.recieveAllQuestions().then((questionss) => {
      this.state = questionss;
    });
    this.handleDelete = this.handleDelete.bind(this)
  }


  handleDelete(question) {
    this.props.deleteQuestion(question).then(() => {
      this.setState(this.props.recieveAllQuestions())
    })
  }

  editButtons(question) {
    console.log(question.author_id)
    if (question.author_id == this.props.currentUser.id) {
      return (
        <div className="edit-buttons">
          {/* <button className="edit-crud-button" onClick={() => this.handleEdit(question)}>Edit</button> */}
          <button className="delete-button" onClick={() => this.handleDelete(question)}>Delete</button>
        </div>
      )
    }
  }

 render() {
  const questions = Object.values(this.props.questions);
    return (
        <div className="question-index">
       <h1>Questions</h1>
       <div className="question-item">
            {questions.map((question, i) => (
                <li key={i} className="question-items">
                  <IndexItem question={question} key={question.id} />
                  {this.editButtons(question)}
                </li>
                ))}
          </div> 
        </div>
    )          
  }
}
export default QuestionIndex;