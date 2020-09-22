import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

// when user clicks on "Add Question", a pop-up appears asking for user to enter a question
class AskQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        };
     }

    handleSubmit(e) {        
        e.preventDefault();
        this.props.askQuestion(this.state).then(this.setState({title: ''})) 
    }
    

  
    render() {
        const { currentUser } = this.props;
        return (
            <div className="ask-question_form">
            <form onSubmit={this.handleSubmit} className="q-form-box">
           {this.renderErrors()}
           <h5>Ask Question</h5>
          <div className="login-attributes">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
              />
            <br/>
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            <br/>
            <input className="login-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
            </div>
                
               

