import React from 'react';
import {Route, Link} from 'react-router-dom';
class TopicItem extends React.Component {
 render() {
    const topic = this.props.topic;
    return (
      <div className="topic-item">
          <p className="topic-button"><Link to={`/topics/${topic.id}`}>{topic.title}</Link></p>
      </div>
    );
  }
}


export default (TopicItem);