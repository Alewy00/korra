import { connect } from "react-redux";
import QuestionIndex from "./question_index";
import { recieveAllQuestions, deleteQuestion, getAllQuestions} from "../../actions/question_actions";

import { receiveAllAnswers } from "../../actions/answer_actions";
import { recieveAllAnswersByQuestion } from "../../util/question_util";
import { searchAllQuestions } from "../../util/question_util";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const mapStateToProps = (state,  { match }) => ({
    // search: parseInt(match.params.id),
    questions: state.entities.questions,
    currentUser: state.session.currentUser,
})

const mapDispatchToProps = dispatch => ({
    recieveAllQuestions: () => dispatch(recieveAllQuestions()),
    getAllQuestions: questions => dispatch(getAllQuestions(questions)),
    deleteQuestion: question => dispatch(deleteQuestion(question)),
    recieveAllAnswersByQuestion: questionId => recieveAllAnswersByQuestion(questionId),
    searchAllQuestions: search => searchAllQuestions(search),

})

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(QuestionIndex));