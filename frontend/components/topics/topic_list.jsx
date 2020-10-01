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
                <li className="topic-item" key={i}><button className="topic-button">{topic}</button></li>
            ))}                       
         </ul>
        </div>
    )
 }
}
export default TopicList;