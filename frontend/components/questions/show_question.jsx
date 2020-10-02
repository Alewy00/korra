
import React from "react";
import IndexItem from './question_index_item'
import EditQuestion from './edit_question_container'
import {Link} from 'react-router-dom';
import Answers from '../answers/answers_container'
import CreateAnswer from "../answers/create_answer_container";
class QuestionShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          question: {},
        }
        this.props.recieveQuestion( this.props.questionId )
        .then((question) => {
          this.setState(question);
        });
      }


    handleDelete(question) {
        this.props.deleteQuestion(question).then(() => {
            this.props.history.push('/');
          })
      }

      editButtons(question) {
        if (question.author_id === this.props.currentUser.id) {
          // console.log("hit edit question")
          return (
            <div className="edit-buttons">
            {/* <div > */}
                {/* <button className="delete-button" onClick={() => this.handleDelete(question)}>Delete Question</button> */}
              {/* </div> */}
              <div className="edit-form">
                <EditQuestion question={question} key={question.id}/>
              </div>
             </div>
            )
          }
        }

        // link(){
        //   window.location.href.reload()
        // }
      
      
     

    render(){
        function isEmpty(obj) {
            for(const key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
//   const question = this.props.recieveQuestion(this.props.questionId )
        if(!isEmpty(this.state.question)){
        return(
        <div> 
        <div className="q-show">
            <div className="show-item">
            {this.state.question.body}
              <div className="answer-q">
                    < CreateAnswer questionId={this.state.question.id} />
              </div>
            </div>
              <div className="answers">
                      < Answers questionId={this.state.question.id} />
              </div>
            {/* <div className="edit-form"> */}
                {/* <EditQuestion question={this.state.question} key={this.state.question.id}/> */}
            {/* </div> */}
            {this.editButtons(this.state.question)}
        </div>
            <div className="suggested">
              <h1 id="suggest-header">Suggested Questions</h1>
              <div className="thin-line">________________________________________</div>
              {/* <h2 className ="suggest-link" onClick={this.link(194)}>What are the most unknown facts on the Second World War?</h2> */}
               <h2><Link className ="suggest-link" to="/questions/74">What are the most unknown facts on the Second World War?</Link></h2>
               <h2><Link className ="suggest-link" to="/questions/75">What are some crazy things about the human body?</Link></h2>
               <h2><Link className ="suggest-link" to="/questions/76">What are some mind-blowing facts about food?</Link></h2>
            </div>
          </div>
        )
 
    }else{
        return null;
    }
}
}
export default QuestionShow;