


import { connect } from "react-redux";
import { writeAnswer } from "../../actions/answer_actions";
import createAnswer from './create_answer'
const mapStateToProps = (state) => ({
    questions: state.entities.questions,
    answers: state.entities.answers,
    currentUser: state.session.currentUser
})


const mapDispatchToProps = dispatch => ({
    writeAnswer: answer => dispatch(writeAnswer(answer)), 
    // updateAnswer: answer => dispatch(updateAnswer(answer))
})

export default connect(mapStateToProps, mapDispatchToProps)(createAnswer);