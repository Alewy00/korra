import React from 'react';
import {Link} from 'react-router-dom';
import IndexItem from './question_index_item'
import EditQuestion from './edit_question'

class QuestionIndex extends React.Component {
 
  constructor(props){
    super(props);
    // this.handleDelete = this.handleDelete.bind(this)
    // this.editButtons = this.editButtons.bind(this)
  }
  componentDidMount(){
    this.props.recieveAllQuestions();
  }


  handleDelete(question) {
    this.props.deleteQuestion(question)
  }
  
  editButtons(question) {
    if (question.author_id === this.props.currentUser.id) {
      return (
        <div className="delete-button">
            <button className="delete-button" onClick={() => this.handleDelete(question)}>Delete</button>
          </div>
        )
      }
    }
    
    render() {
      // const questions = this.props.recieveAllQuestions()
     
      const questions = Object.values(this.props.questions);
      return (
      <div className="question-index">
       <div className="question-item">
         <ul className ="question-list">
            {questions.map((question, i) => (
                <li key={i} className="question-items">
                  <IndexItem question={question} key={question.id} />
                    {/* {this.editButtons(question)} */}
                </li>
                ))}
          </ul>
          </div> 
        </div>
    )          
  }
}
export default QuestionIndex;