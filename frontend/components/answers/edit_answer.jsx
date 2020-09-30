import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import {Route, Link} from 'react-router-dom';

class editAnswer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.answer.body,
            answer: this.props.answer,
            show: false,
            Klass: "a-drop-button"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleCancel = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        
      }
      
      componentDidMount(){
        if(this.props.alone){
          this.setState({Klass: 'alone'})
        }
     }


    handleSubmit(e) { 
        e.preventDefault();
        this.state.answer.body = this.state.body
        this.props.updateAnswer(this.state.answer).then(this.setState({body: ''})) 
        this.handleCancel()
        window.location.reload();
    }


    update(field) {
        return e => this.setState({
        [field]: e.currentTarget.value
        });
    }
    handleDelete() {
        this.props.deleteAnswer(this.state.answer)
        window.location.reload();
      }
       
    handleAnswer(){
        const modal = document.getElementById("edit-a-modal");
        modal.style.display = "block";
    }
    handleCancel(){
        const modal = document.getElementById("edit-a-modal");
            modal.style.display = "none";
     }
     handleBlur(e) {
        this.setState({show: false})
      }
      handleClick(){
        this.setState({show: !this.state.show})
      }
  

    render() {
        const { currentUser } = this.props;
       
      return (
          <div>
          <div id="edit-a-modal" className="modal-edit">
          <form onSubmit={this.handleSubmit} className="edit-form-box">
          <div className="edit-question-component">
          <div className="edit-a-modal-content">
          <button type="button" className="edit-close" onClick={this.handleCancel}>Close</button>
          <button type="button" className="edit-x" onClick={this.handleCancel}>x</button>
          <div className="grey-top">
            <h1 id="ask-q">Edit Answer</h1>
          </div>
        <div className="question-attributes">
            <textarea type="text"
                      id="edit-text"
                //  onInput="auto_grow(this)"
                cols="50"
                rows="1"
              value={this.state.body}
              onChange={this.update('body')}
              className="body-input"
              placeholder={this.props.answer.body}>
              '
              </textarea>
          <br/>
          <div className="edit-module-footer">
            <button className="question-submit">Edit answer</button>
          </div>
          {/* <input className="question-submit" type="submit" value={this.props.formType} /> */}
        </div>
            </div>
       </div>
       
      </form>
       </div>
       <div className="edit-dropdown">
          <button className={this.state.Klass} type="button" onBlur={this.handleBlur} onClick={this.handleClick} >
              . . .
              {this.state.show ? (
                <ul className="dropdown-list" onClick={e => e.stopPropagation()}>
                  <li className="drop-item" onClick={this.handleAnswer}>Edit</li>
                  <li className="drop-item" onClick={this.handleDelete}>Delete</li>
                </ul>
              ) : null }
          </button>
        </div>
       </div>
      )
     }
}
export default editAnswer;