import { connect } from "react-redux";
import AnswerIndex from "./answer_index";
import { recieveAllQuestions } from "../../actions/question_actions";
import { receiveAllAnswers } from "../../actions/answer_actions";
import { recieveAllAnswersByQuestion } from "../../util/question_util";
const mapStateToProps = (state) => ({
    questions: state.entities.questions,
    currentUser: state.session.currentUser,
})

const mapDispatchToProps = dispatch => ({
    recieveAllQuestions: () => dispatch(recieveAllQuestions()),
    recieveAllAnswersByQuestion: questionId => recieveAllAnswersByQuestion(questionId),
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);