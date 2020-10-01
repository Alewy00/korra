import React from 'react';
import {Route, Link} from 'react-router-dom';

class TopicList extends React.Component {
    constructor(props){
        super(props);
    } 
    render(){
        const TOPICS = ["Food", "Wow!", "War", "Human Body"]
    return(
        <div className="topic-class">
             <ul className="topic-list">
            {TOPICS.map((topic, i) =>(
                <li key={i}>{topic}</li>
            ))}                       
         </ul>
        </div>
    )
 }
}
export default TopicList;