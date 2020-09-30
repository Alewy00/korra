import React from 'react';
import AnswerItem from './answer_item'
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


    
    render() {
        const currentUser = this.props.currentUser;
        const answers = Object.values(this.state.answers);
            return (
            <div>
                <ul className ="answer-list">
                <div className="thin-line">
                __________________________________________________________________________
            </div>
                {answers.map((answer, i) => (
                     <li key={i} className="answer-items">
                         < AnswerItem answer={answer} currentUser={currentUser} alone={false} />
                     </li>
                    
                ))}
                </ul>
          </div>
            )
    }
}

export default Answers;