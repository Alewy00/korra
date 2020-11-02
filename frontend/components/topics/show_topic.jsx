import React from 'react'
import IndexItem from '../questions/question_index_item'
class TopicShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: {},
        }

        this.props.recieveTopic({id: this.props.topicId})
        .then((topic) => {
            this.setState(topic);
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
                <div className="topic-feed">
                <ul className ="question-list">
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
            )
        } else {
            // console.log("empty")
            return (
                <div className="topic-feed">
                    <p className="empty-topic">This topic does not have any questions yet - be the first!</p>
                </div>
            )
        }
    }
}

export default TopicShow;