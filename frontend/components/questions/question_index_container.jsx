import { connect } from "react-redux";
import QuestionIndex from "./question_index";
import { recieveAllQuestions, deleteQuestion } from "../../actions/question_actions";


const mapStateToProps = (state) => ({
    questions: state.entities.questions,
    currentUser: state.session.currentUser,
    // author : state.entities.questions.author_id
})

const mapDispatchToProps = dispatch => ({
    recieveAllQuestions: () => dispatch(recieveAllQuestions()),
    deleteQuestion: question => dispatch(deleteQuestion(question)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);