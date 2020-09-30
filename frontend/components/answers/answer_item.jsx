import React from 'react';
import { withRouter } from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import EditAnswer from './edit_answer_container'
class AnswerItem extends React.Component {
  
  editButtons(answer) {
    console.log(answer)
    if (answer.author.id === this.props.currentUser.id) {
      return (
            <EditAnswer answer={answer} />
        )
      }
  }
    alone(){
      const answer = this.props.answer;
      if(this.props.alone){
        return <h2 id="index-header">{answer.author.first_name + " " + answer.author.last_name }</h2>
      }else{
        return(
        <div>
          <h2 id="answer-header">{answer.author.first_name + " " + answer.author.last_name }</h2>
            <div className="thin-line">
                    __________________________________________________________________________
            </div>
        </div>
        )
      }
    }

  render() {
    const answer = this.props.answer;
    return (
      <div className="answer-item">
        {/* <h2 id="answer-header">{answer.author.first_name + " " + answer.author.last_name }</h2> */}
        <p id="answer-body">{answer.body}</p>
        <div className="edit-answer">
         {this.editButtons(answer)}
         </div>
            {this.alone()}
      </div>
    );
  }
}


export default (AnswerItem);