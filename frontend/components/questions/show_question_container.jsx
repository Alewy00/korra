import React from "react";
import { connect } from "react-redux";
import showQuestion from "./show_question";
import { recieveQuestion } from "../../actions/question_actions";



const mapStateToProps = (state, { match }) => ({
    questionId: parseInt(match.params.id),
    users: state.users,
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    recieveQuestion: questionId => dispatch(recieveQuestion(questionId)),
    
})

export default connect(mapStateToProps, mapDispatchToProps)(showQuestion);