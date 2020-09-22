import { connect } from "react-redux";
import { askQuestion } from "../../actions/question_actions";
import askQuestionForm from "./ask_question_form";


const mapStateToProps = state => ({
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    askQuestion: question => dispatch(askQuestion(question))
})

export default connect(mapStateToProps, mapDispatchToProps)(askQuestionForm)