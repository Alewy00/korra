import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

// when user clicks on "Add Question", a pop-up appears asking for user to enter a question
class AskQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
     }


    handleSubmit(e) {        
        e.preventDefault();
        this.props.askQuestion(this.state).then(this.setState({title: ''})) 
    }

//     renderErrors() {
//         return(
//             <div className="login-errors">
//             <ul>
//                 {this.props.errors.map((error, i) => (
//                 <li key={`error-${i}`}>
//                     {error} 
//                     <br/><br/>
//                 </li>
//                 ))}     
//             </ul>
//             </div>
//         );
//   }
    update(field) {
        return e => this.setState({
        [field]: e.currentTarget.value
        });
    }
  
    render() {
        const { currentUser } = this.props;
        return (
            <div className="ask-question_form">
            <form onSubmit={this.handleSubmit} className="q-form-box">
           {/* {this.renderErrors()} */}
           <h5>Ask Question</h5>
          <div className="question-attributes">
              <input type="text"
                value={this.state.body}
                onChange={this.update('body')}
                className="body-input"
                placeholder="Title"
              />
            <br/>
            <input className="question-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
         </div>
        )
    }
}
 export default AskQuestion;
                
               

