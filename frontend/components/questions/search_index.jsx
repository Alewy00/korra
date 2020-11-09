import React from 'react';
import {Link} from 'react-router-dom';
import IndexItem from './question_index_item'
import EditQuestion from './edit_question'
import AnswerItem from '../answers/answer_item'
import TopicList from '../topics/topic_list'
class SearchIndex extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
        search: ""
      }
      this.handleSubmit = this.handleSubmit.bind(this)
 
} 
  componentDidMount(){
    console.log(this.props.search)
     this.props.searchAllQuestions(this.props.search)
    .then(questions =>  this.props.getAllQuestions(questions))
  }

  handleSubmit(e) {        
    e.preventDefault();
    this.props.history.push(`${this.state.search}`)
    window.location.reload();
    // .then(this.setState({title: ''})) 
    // this.handleCancel()
 }

update(field) {
    return e => this.setState({
    [field]: e.currentTarget.value
    });
}




    render() {
      // const questions = this.props.recieveAllQuestions()
     
      const questions = Object.values(this.props.questions);
      if(questions.length != 0){

      
      return (
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
    return(
        <div>
             <form onSubmit={this.handleSubmit} className="create-search">
              <input type="text"
                value={this.state.search}
                onChange={this.update('search')}
                className="searchBar"
                placeholder="Search Korra"
                />
            {/* <button className="search-submit">SEARCH</button> */}
      
        </form>
        <div className="question-list">
        <p className="empty-topic">No search results for {this.props.search}</p>
        </div>
        </div>
    )
  }
}
}
export default SearchIndex;