import React from "react";
import { connect } from "react-redux";
import showQuestion from "./show_question";
import { recieveQuestion } from "../../actions/question_actions";
import { deleteQuestion } from "../../actions/question_actions";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, { match }) => ({
    questionId: parseInt(match.params.id),
    users: state.users,
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    recieveQuestion: questionId => dispatch(recieveQuestion(questionId)),
    deleteQuestion: question => dispatch(deleteQuestion(question))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(showQuestion));