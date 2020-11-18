import React from 'react';
import {Link} from 'react-router-dom';
import IndexItem from './question_index_item'
import EditQuestion from './edit_question'
import AnswerItem from '../answers/answer_item'
import TopicList from '../topics/topic_list'
class QuestionIndex extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      search: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
   
} 
  componentDidMount(){
    this.props.recieveAllQuestions();
    //  this.setState({questions: Object.values(questions)}))
    //  console.log(this.state.questions)
  }

    handleSubmit(e) {        
      e.preventDefault();
      this.props.history.replace(`search/${this.state.search}`)
      // .then(this.setState({title: ''})) 
      // this.handleCancel()
      // window.location.reload();
   }

  update(field) {
      return e => this.setState({
      [field]: e.currentTarget.value
      });
  }


  // search(){
  //   // this.props.history.push("search")
  //   console.log("search")
  //   this.props.searchAllQuestions("war")
  //   .then(questions =>  this.props.getAllQuestions(questions))
  //   // .then(() => { this.props.history.push('search');})
  // }



    
    render() {
      // const questions = this.props.recieveAllQuestions()
     
      const questions = Object.values(this.props.questions);
      return (
        <div>
           <form onSubmit={this.handleSubmit} className="create-search-index">
              <input type="text"
                value={this.state.search}
                onChange={this.update('search')}
                className="searchBar"
                placeholder="Search Korra"
                />
            {/* <button className="search-submit">SEARCH</button> */}
      
        </form>
        <div className="question-index">
       <div className="question-item">
         <ul className ="question-list">
            {questions.map((question, i) => (
              <li key={i} className="question-items">
                  <IndexItem 
                  question={question} 
                  key={question.id} 
                  recieveAllAnswersByQuestion={this.props.recieveAllAnswersByQuestion}
                  currentUser={this.props.currentUser}
                    />
                   
                  
                </li>
                ))}
          </ul>
         
              
          </div> 
        </div>
        </div>
    )          
  }
}
export default QuestionIndex;