import React from 'react';
import {Link} from 'react-router-dom';
import AnswerIndexItem from './answer_index_item'
import TopicList from '../topics/topic_list_container'
class AnswerIndex extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      search: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleDelete = this.handleDelete.bind(this)
    // this.editButtons = this.editButtons.bind(this)
   
} 
  componentDidMount(){
    this.props.recieveAllQuestions();
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

  
    render() { 
      const questions = Object.values(this.props.questions);
      return (
        <div>
             <TopicList />
             <form onSubmit={this.handleSubmit} className="create-search">
              <input type="text"
                value={this.state.search}
                onChange={this.update('search')}
                className="searchBar"
                placeholder="Search Korra"
                />
            {/* <button className="search-submit">SEARCH</button> */}
      
        </form>
      <div className="answer-index">
        <div className="a-index-top">
            <h4 id="a-index-top-header">Answers for you</h4>
        </div>
         <ul className ="answer-index-list">
            {questions.map((question, i) => (
                <li key={i} className="answer-index-items">
                  <AnswerIndexItem 
                  question={question} 
                  key={question.id} 
                  recieveAllAnswersByQuestion={this.props.recieveAllAnswersByQuestion}
                  currentUser={this.props.currentUser}
                    />    
                </li>
                ))}
          </ul>
       
          <div className="a-index-bottom">

        </div>
          </div> 
      </div>
    )          
  }
}
export default AnswerIndex;