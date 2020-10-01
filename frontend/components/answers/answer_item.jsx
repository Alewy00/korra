import React from 'react';
import { withRouter } from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import EditAnswer from './edit_answer_container'
class AnswerItem extends React.Component {
  
  editButtons(answer) {
    console.log(answer)
    if (answer.author.id === this.props.currentUser.id) {
      return (
            <EditAnswer answer={answer} alone={this.props.alone} />
        )
      }
  }
    alone(){
      const answer = this.props.answer;
      if(!this.props.alone){
        return(
          <div className="answer-header">
          <div className="a-user-icon">
          <i id="a-user-circle" className="fas fa-user-circle"></i>
          </div>
          <h2 id="answer-header">{answer.author.first_name + " " + answer.author.last_name }</h2>
        </div>
        )

      }
    }
    aloneLine(){
      if(!this.props.alone){
        return(
            <div className="thin-line">
                    __________________________________________________________________________
            </div>
        )
      }
    }

  render() {
    const answer = this.props.answer;
    return (
      <div className="answer-item">
             <div className="edit-answer">
               {this.editButtons(answer)}
              </div> 
            {this.alone()}
        <p id="answer-body">{answer.body}</p>
        {this.aloneLine()}
      </div>
    );
  }
}


export default (AnswerItem);