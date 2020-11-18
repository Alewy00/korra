import React from 'react'
import IndexItem from '../questions/question_index_item'
class TopicShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: {},
            search: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)

        this.props.recieveTopic({id: this.props.topicId})
        .then((topic) => {
            this.setState(topic);
        });
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

        if(this.state.topic.questions != undefined  && this.state.topic.questions.length > 0 ){
            console.log(this.state.topic.questions[0])
            console.log(this.state.topic.questions[1])
            let questions = [];
            let authors = [];
            Object.values(this.state.topic.questions).forEach((ele) => {
                questions.push(ele);
            });
            Object.values(this.state.topic.authors).forEach((ele) => {
                authors.push(ele);
            });

            return (
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
                <div className="topic-feed">
                <ul className ="question-list">
                        <div className="question-items">
                         <h3 id="topic-title">{this.state.topic.title}</h3> 
                        </div>
                    {questions.map((question, i) => (
                    <li key={i} className="question-items">
                      <IndexItem 
                      question={question} 
                      author={authors[i]} 
                        key={question.id} 
                        recieveAllAnswersByQuestion={this.props.recieveAllAnswersByQuestion}
                        currentUser={this.props.currentUser}
                  />
                     </li>
                    ))}
                </ul>
         
                </div>
                </div>
            )
        } else {
            // console.log("empty")
            return (
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
                    <p className="empty-topic">This topic does not have any questions yet - be the first!</p>
            </div>
                </div>
            )
        }
    }
}

export default TopicShow;