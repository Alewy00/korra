import React from "react";
import { connect } from "react-redux";
import editAnswer from "./edit_answer";
import { updateAnswer } from "../../actions/answer_actions";
import { deleteAnswer } from "../../actions/answer_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, { match }) => ({
    users: state.users,
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    updateAnswer: answerId => dispatch(updateAnswer(answerId)),
    deleteAnswer: answer => dispatch(deleteAnswer(answer))
})

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(editAnswer));