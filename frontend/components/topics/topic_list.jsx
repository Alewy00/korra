import React from 'react';
import {Route, Link} from 'react-router-dom';
import TopicItem from './topic_item'
class TopicList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: ""

      
        }
        // console.log()
       
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleSubmit(e) {        
        e.preventDefault();
        this.props.createTopic(this.state)
        window.location.reload();
        // .then(this.setState({title: ''})) 
        // this.handleCancel()
    }

    update(field) {
        return e => this.setState({
        [field]: e.currentTarget.value
        });
    }

    componentDidMount(){
        this.props.recieveTopics()
    }

    render(){
        const topics = Object.values(this.props.topics);
    return(
        <div>
        <div className="topic-class">
             <ul className="topic-list">
            {topics.map((topic, i) =>(
                < TopicItem topic={topic} key={i} />
                // <li className="topic-item" key={i}><button className="topic-button">{topic.title}</button></li>
            ))}                       
        <form onSubmit={this.handleSubmit} className="create-topic">
              <input type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="topic"
                placeholder="New Topic"
                />
            {/* <button className="topic-submit">Submit</button> */}
      
        </form>
         </ul>
        </div>
       </div>
        
    )
 }
}
export default TopicList;