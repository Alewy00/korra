import { connect } from "react-redux";
import QuestionPage from "./question_page";
import { recieveQuestion } from "../../actions/question_actions";


const mapStateToProps = (state, ownProps) => ({
    question: state.entities.questions[ownProps.match.params.questionId],
    answers: state.entities.answers,
    users: state.users,
    currentUserId: state.session.currentUser.id
})

const mapDispatchToProps = dispatch => ({
    recieveQuestion: questionId => dispatch(recieveQuestion(questionId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage)