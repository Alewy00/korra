import React from 'react';

class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          questionId: this.props.questionId,
          answers: {}
        }
        this.props.recieveAllByQuestion( this.props.questionId )
        .then((answers) => {
          this.setState(answers);
        });
      }


    // should return a list of answer index items
    render() {
        const answers = Object.values(this.state.answers);
            return (
                <ul className ="answer-list">
                {answers.map((answer, i) => (
                     <li key={i} className="answer-items">
                     {answer.body}
                     </li>
                ))}
          </ul>
            )
    }
}

export default Answers;