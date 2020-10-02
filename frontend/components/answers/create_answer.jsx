import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import {Route, Link} from 'react-router-dom';

class createAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            question_id: this.props.questionId,
            modalKlass: "answer-modal" 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleCancel = this.handleSubmit.bind(this);
       
     }
  
     componentDidMount(){
      if(this.props.index){
        this.setState({Klass: 'modal-index'})
      }
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
               <i className="far fa-edit"></i>
            </button>
          <div id="answer-modal" className={this.state.modalKlass}>
          {/* <Link to="/" className="x"><button className="close-question-button">x</button></Link> */}
          <form onSubmit={this.handleSubmit} className="a-form-box">
          <div className="answer-question-component">
            <button type="button" className="answer-x" onClick={this.handleCancel}>x</button>
          <div className="answer-red-top">
            <i id="create-a-user-circle" className="fas fa-user-circle"></i>
            <h2 id="who-answered">{currentUser.first_name + " " + currentUser.last_name} </h2>
         
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
        </div>
            </div>  
      </form>
       </div>
       </div>
      )
     }
}    


export default createAnswer;