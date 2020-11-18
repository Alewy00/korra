
import React from "react";
import IndexItem from './question_index_item'
import EditQuestion from './edit_question_container'
import {Link} from 'react-router-dom';
import Answers from '../answers/answers_container'
import CreateAnswer from "../answers/create_answer_container";
class QuestionShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          question: {},
          search: "",
        }
       
        this.handleSubmit = this.handleSubmit.bind(this)
        this.link = this.link.bind(this)
        this.props.recieveQuestion( this.props.questionId )
        .then((question) => {
          this.setState(question);
        });

      }

    


    handleDelete(question) {
        this.props.deleteQuestion(question).then(() => {
            this.props.history.push('/');
          })
      }

      handleSubmit(e) {        
        e.preventDefault();
        // this.props.history.push(`/search`)
        this.props.history.push(`/search/${this.state.search}`)
        // window.location.reload();
        // .then(this.setState({title: ''})) 
        // this.handleCancel()
     }
    
    update(field) {
        return e => this.setState({
        [field]: e.currentTarget.value
        });
    }

      editButtons(question) {
        if (question.author_id === this.props.currentUser.id) {
          // console.log("hit edit question")
          return (
            <div className="edit-buttons">
            {/* <div > */}
                {/* <button className="delete-button" onClick={() => this.handleDelete(question)}>Delete Question</button> */}
              {/* </div> */}
              <div className="edit-form">
                <EditQuestion question={question} key={question.id}/>
              </div>
             </div>
            )
          }
        }

        link(){
          this.props.history.push(`224`)
          window.location.href.reload()
        
        }
      
      
     

    render(){
        function isEmpty(obj) {
            for(const key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
//   const question = this.props.recieveQuestion(this.props.questionId )
        if(!isEmpty(this.state.question)){
        return(
        <div> 
         
        <div className="q-show">
            <div className="show-item">
            {this.state.question.body}
              <div className="answer-q">
                    {this.editButtons(this.state.question)}
                    < CreateAnswer questionId={this.state.question.id} />
              </div>
            </div>
              <div className="answers">
                      < Answers questionId={this.state.question.id} />
              </div>
            {/* <div className="edit-form"> */}
                {/* <EditQuestion question={this.state.question} key={this.state.question.id}/> */}
            {/* </div> */}
        </div>
            <div className="suggested">
              <h1 id="suggest-header">Suggested Questions</h1>
              <div className="thin-line">________________________________________</div>
              {/* <h2 className ="suggest-link" onClick={this.link}>What are the most unknown facts on the Second World War?</h2> */}
               <h2><Link className ="suggest-link" to="/questions/224" onClick={() => location.assign("https://korra09.herokuapp.com/#/questions/105")} >What are the most unknown facts on the Second World War?</Link></h2>
               <h2><Link className ="suggest-link" to="/questions/225" onClick={() => location.assign("https://korra09.herokuapp.com/#/questions/106")}    >What are some crazy things about the human body?</Link></h2>
               <h2><Link className ="suggest-link"  to="/questions/226" onClick={() => location.assign("https://korra09.herokuapp.com/#/questions/107")} >What are some mind-blowing facts about food?</Link></h2>
            </div>
            <form onSubmit={this.handleSubmit} className="create-search">
              <input type="text"
                value={this.state.search}
                onChange={this.update('search')}
                className="searchBar"
                placeholder="Search Korra"
                />
            {/* <button className="search-submit">SEARCH</button> */}
        </form>
          </div>
        )
 
    }else{
        return null;
    }
}
}
export default QuestionShow;