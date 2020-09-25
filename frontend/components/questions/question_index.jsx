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
    // this.handleDelete = this.handleDelete.bind(this)
    // this.editButtons = this.editButtons.bind(this)
  }


  handleDelete(question) {
    console.log("hit delete")
    this.props.deleteQuestion(question)
    // .then(() => {this.setState(this.props.questions)})
  }

  editButtons(question) {
    console.log(question.author_id)
      console.log(this.props.currentUser.id)
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
       <div className="question-item">
         <ul className ="question-list">
            {questions.map((question, i) => (
                <li key={i} className="question-items">
                  <IndexItem question={question} key={question.id} />
                    {this.editButtons(question)}
                </li>
                ))}
          </ul>
          </div> 
        </div>
    )          
  }
}
export default QuestionIndex;