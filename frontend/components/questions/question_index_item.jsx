import React from 'react';
import { withRouter } from 'react-router-dom';

class QuestionIndexItem extends React.Component {
  

  render() {
    const question = this.props.question;
    return (
      <div className="question-header">
        <div>
            <h1 id="question-header">Written by {question.author_id}  </h1>
            <h2 id="question-title">{question.title}</h2>
        <p id="question-body">{question.body}</p>
        </div>
      </div>
    );
  }
}


export default (QuestionIndexItem);
