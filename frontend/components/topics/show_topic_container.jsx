import React from 'react';
import { connect } from 'react-redux';
import TopicShow from './show_topic';
import { recieveTopic } from '../../actions/topic_actions'
import { recieveAllAnswersByQuestion } from "../../util/question_util";

const mapStateToProps = (state, { match }) => ({
    topic: state.entities.topics,
    topicId: parseInt(match.params.id),
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
    recieveTopic: topicId => dispatch(recieveTopic(topicId)),
    recieveAllAnswersByQuestion: questionId => recieveAllAnswersByQuestion(questionId),

});

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow);