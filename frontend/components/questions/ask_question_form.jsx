import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import QuestionIndex from './question_index_container'
import {Route, Link} from 'react-router-dom';

class AskQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleCancel = this.handleSubmit.bind(this);
       
     }


    handleSubmit(e) {        
        e.preventDefault();
        this.props.askQuestion(this.state).then(this.setState({body: ''})) 
        this.handleCancel()
       
    }


    update(field) {
        return e => this.setState({
        [field]: e.currentTarget.value
        });
    }
       
  

    handleQuestion(){
        const modal = document.getElementById("ask-modal");
        modal.style.display = "block";
    }
    handleCancel(){
        const modal = document.getElementById("ask-modal");
            modal.style.display = "none";
     }
  

    render() {
        const { currentUser } = this.props;
      return (
         <div className="splash">
             <div className="ask-q">
            <button className="ask-q-button" onClick={this.handleQuestion}>
                <span className="button-username">
                        {currentUser.first_name}
                </span>
                <span className="inner-ask-button">
                    What is your question?
                </span> 
            </button>
        </div>

              <QuestionIndex />
          <div id="ask-modal" className="modal-main hide">
          {/* <Link to="/" className="x"><button className="close-question-button">x</button></Link> */}
          <form onSubmit={this.handleSubmit} className="q-form-box">
          <div className="ask-question-component">
          <div className="modal-content">
          <button type="button" className="close-button" onClick={this.handleCancel}>Close</button>
          <button type="button" className="x" onClick={this.handleCancel}>x</button>
          <div className="grey-top">
            <h1 id="ask-q">Add Question</h1>
          </div>
        <div className="question-attributes">
            <div className="tips">
               <h2 id="tips">Tips on getting good answers quickly</h2>
                <ul className="tip-list">
                    <li> Make sure your question has not been asked already</li>
                    <li>  Keep your question short and to the point</li>
                    <li>  Double-check grammar and spelling</li>
                </ul>
            </div>
      <h2 id="who-asked">{currentUser.first_name} asked </h2>
            <textarea type="text"
                id="ask-q-text"
                cols="50"
                rows="1"
              value={this.state.body}
              onChange={this.update('body')}
              className="body-input"
              placeholder="Start Your Question with What. Why, How etc.. ">
              </textarea>
          <br/>
          <div className="module-footer">
            <button className="question-submit">Add question</button>
          </div>
          {/* <input className="question-submit" type="submit" value={this.props.formType} /> */}
        </div>
            </div>
       </div>
       
      </form>
       </div>
       </div>
      )
     }
}
       
     
export default AskQuestion;

               

