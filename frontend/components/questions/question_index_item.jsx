import React from 'react';
import { withRouter } from 'react-router-dom';

class QuestionIndexItem extends React.Component {

  render() {
    const question = this.props.question;
    return (
      <div className="question-header">
          <div>
            <h1 id="question-header">Written by {question.author.fname} {question.title}  </h1>
        </div>
        <p id="question-body">{question.body}</p>
      </div>
    );
  }
}


export default (QuestionIndexItem);
