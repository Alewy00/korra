import React from 'react';
import { withRouter } from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
class QuestionIndexItem extends React.Component {
  

  render() {
    const question = this.props.question;
    return (
      <div className="question-item">
        <div>
            <h1 id="question-header">{question.author_id}</h1>
      
        <p id="question-body">{question.body}</p>
        </div>
      </div>
    );
  }
}


export default (QuestionIndexItem);
