import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import {Route, Link} from 'react-router-dom';

class createAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            question_id: this.props.questionId 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleCancel = this.handleSubmit.bind(this);
       
     }


    handleSubmit(e) {        
        e.preventDefault();
        this.props.writeAnswer(this.state).then(this.setState({body: ''})) 
        this.handleCancel()
        window.location.reload();
    }


    update(field) {
        return e => this.setState({
        [field]: e.currentTarget.value
        });
    }
       
  

    handleAnswer(){
        const modal = document.getElementById("answer-modal");
        modal.style.display = "block";
    }

    handleCancel(){
        const modal = document.getElementById("answer-modal");
            modal.style.display = "none";
     }
  

    render() {
        const { currentUser } = this.props;
      return (
          <div className="answer">
            <button className="answer-button" onClick={this.handleAnswer}>
              Answer
            </button>
          <div id="answer-modal" className="answer-modal hide">
          {/* <Link to="/" className="x"><button className="close-question-button">x</button></Link> */}
          <form onSubmit={this.handleSubmit} className="a-form-box">
          <div className="answer-question-component">
          {/* <div className="answer-modal-content"> */}
          {/* <button type="button" className="close-button" onClick={this.handleCancel}>Close</button> */}
          <button type="button" className="answer-x" onClick={this.handleCancel}>x</button>
          <div className="answer-red-top">
            <h2 id="who-answered">{currentUser.first_name + " " + currentUser.last_name} </h2>
          {/* </div> */}
         </div>
        <div className="answer-box">
            <textarea type="text"
                id="answer-text"
                cols="50"
                rows="1"
              value={this.state.body}
              onChange={this.update('body')}
              className="body-input"
              placeholder="Write your answer">
              </textarea>
              <div className="answer-footer">
                   <button className="answer-submit">Submit</button>
              </div>
          <br/>
         
       
          {/* <input className="question-submit" type="submit" value={this.props.formType} /> */}
        </div>
            </div>  
      </form>
       </div>
       </div>
      )
     }
}
       
     
export default createAnswer;