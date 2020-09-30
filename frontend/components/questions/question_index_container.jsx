import { connect } from "react-redux";
import QuestionIndex from "./question_index";
import { recieveAllQuestions, deleteQuestion } from "../../actions/question_actions";

import { receiveAllAnswers } from "../../actions/answer_actions";
import { recieveAllAnswersByQuestion } from "../../util/question_util";
const mapStateToProps = (state) => ({
    questions: state.entities.questions,
    currentUser: state.session.currentUser,
})

const mapDispatchToProps = dispatch => ({
    recieveAllQuestions: () => dispatch(recieveAllQuestions()),
    deleteQuestion: question => dispatch(deleteQuestion(question)),
    recieveAllAnswersByQuestion: questionId => recieveAllAnswersByQuestion(questionId),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);