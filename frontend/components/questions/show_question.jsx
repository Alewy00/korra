
import React from "react";
import IndexItem from './question_index_item'
import EditQuestion from './edit_question_container'
import {Link} from 'react-router-dom';
import Answers from '../answers/answers_container'
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
        suggest(){
          this.props.history.push('/');
        }
      
     

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

        <div className="q-show">
            <div className="show-item">
            {this.state.question.body}
            </div>
            <div className="answers">
                    < Answers questionId={this.state.question.id} />
            </div>
            {/* <div className="edit-form"> */}
                {/* <EditQuestion question={this.state.question} key={this.state.question.id}/> */}
            {/* </div> */}
            {this.editButtons(this.state.question)}
            <div className="suggested">
              <h1 id="suggest-header">Suggested Questions</h1>
               <h2><Link className ="suggest-link" to="/questions/88">Do you think my wife will care if I murdered many children in order to save her life?</Link></h2>
               <h2><Link className ="suggest-link"to="/questions/89">..................</Link></h2>
               <h2><Link className ="suggest-link"to="/questions/90">Do you think I may have dual-personality disorder? No of course you don't, the precious told us so! Oh good I was worried for a second</Link></h2>
            </div>
        </div>
        )
 
    }else{
        return null;
    }
}
}
export default QuestionShow;