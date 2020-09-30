import { connect } from "react-redux";
import Answers from "./answers";
import { recieveAllByQuestion } from "../../util/answer_util";
import { receiveAllAnswers } from "../../actions/answer_actions";


const mapStateToProps = (state) => ({
    questions: state.entities.questions,
    answers: state.entities.answers,
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    recieveAllByQuestion: questionId => recieveAllByQuestion(questionId)
        .then(answers => dispatch(receiveAllAnswers(answers))),
})

export default connect(mapStateToProps, mapDispatchToProps)(Answers);