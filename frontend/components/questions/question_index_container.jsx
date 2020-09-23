import { connect } from "react-redux";
import QuestionIndex from "./question_index";
import { recieveAllQuestions } from "../../actions/question_actions";


const mapStateToProps = (state, ownProps) => ({
    questions: state.entities.questions,
    currentUser: state.session.currentUser,
})

const mapDispatchToProps = dispatch => ({
    recieveAllQuestions: () => dispatch(recieveAllQuestions()),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);