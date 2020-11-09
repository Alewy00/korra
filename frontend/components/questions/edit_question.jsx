import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import {Route, Link} from 'react-router-dom';

class editQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.question.body,
            topic_id: this.props.question.topic_id,
            question: this.props.question,
            show: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleCancel = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
       
     }

     componentDidMount(){
      this.props.recieveTopics()
  }


    handleSubmit(e) { 
        e.preventDefault();
        this.state.question.body = this.state.body
        this.state.question.topic_id = this.state.topic_id
        this.props.updateQuestion(this.state.question).then(this.setState({body: ''})) 
        this.handleCancel()
        // window.location.reload();
    }


    update(field) {
        // console.log(field)
        return e => this.setState({
        [field]: e.currentTarget.value
        });
    }
    handleDelete() {
        this.props.deleteQuestion(this.state.question)
        .then(() => { this.props.history.push('/');})
      }
       
    handleQuestion(){
        const modal = document.getElementById("edit-q-modal");
        modal.style.display = "block";
    }

    handleCancel(){
        const modal = document.getElementById("edit-q-modal");
            modal.style.display = "none";
     }
     handleBlur(e) {
        this.setState({show: false})
      }
      handleClick(){
        this.setState({show: !this.state.show})
      }
  

    render() {
     const topics = Object.values(this.props.topics);
        const { currentUser } = this.props;
      return (
          <div>
          <div className="edit">
            {/* <button className="edit-q-button" onClick={this.handleQuestion}>Edit Question</button> */}
          </div>
          <div id="edit-q-modal" className="modal-main hide">
          <form onSubmit={this.handleSubmit} className="edit-form-box">
          <div className="edit-question-component">
          <div className="modal-content">
          <button type="button" className="edit-close" onClick={this.handleCancel}>Close</button>
          <button type="button" className="edit-x" onClick={this.handleCancel}>x</button>
          <div className="edit-grey-top">
            <h1 id="ask-q">Edit Question</h1>
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
              placeholder={this.props.question.body}>
              </textarea>
            <br/>
          <select value={this.state.topic_id} onChange={this.update("topic_id")}>
          <option defaultValue={null}>Topic</option>
            {topics.map((topic, i) =>(
              <option  key={i} value={topic.id}>{topic.title}</option>
            ))} 
          </select>
    
          <br/>
          <div className="edit-module-footer">
            <button className="question-submit">Edit question</button>
          </div>
          {/* <input className="question-submit" type="submit" value={this.props.formType} /> */}
        </div>
            </div>
       </div>
       
      </form>
       </div>
       <div className="q-edit-dropdown">
          <button className="q-drop-button" type="button" onBlur={this.handleBlur} onClick={this.handleClick} >
          <i className="fas fa-ellipsis-h"></i>
              {this.state.show ? (
                <ul className="q-dropdown-list" onClick={e => e.stopPropagation()}>
                  <li className="drop-item" onClick={this.handleQuestion}>Edit</li>
                  <li className="drop-item" onClick={this.handleDelete}>Delete</li>
                </ul>
              ) : null }
          </button>
        </div>
       </div>
      )
     }
}
export default editQuestion;