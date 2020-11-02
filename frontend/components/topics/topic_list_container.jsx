import React from 'react';
import { connect } from 'react-redux';
import TopicList from './topic_list';
import { recieveTopics } from '../../actions/topic_actions'
import { createTopic } from "../../actions/topic_actions";

const mapStateToProps = state => ({
    topics: state.entities.topics,
});

const mapDispatchToProps = dispatch => ({
    recieveTopics: () => dispatch(recieveTopics()),
    createTopic: topic => dispatch(createTopic(topic)),
 
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicList);