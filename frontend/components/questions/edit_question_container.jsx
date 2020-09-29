import React from "react";
import { connect } from "react-redux";
import editQuestion from "./edit_question";
import { updateQuestion } from "../../actions/question_actions";
import { deleteQuestion } from "../../actions/question_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, { match }) => ({
    questionId: parseInt(match.params.id),
    users: state.users,
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    updateQuestion: questionId => dispatch(updateQuestion(questionId)),
    deleteQuestion: question => dispatch(deleteQuestion(question))
})

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(editQuestion));