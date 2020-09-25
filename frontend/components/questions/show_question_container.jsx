import {recieveQuestion} from '../../util/question_util'



const mapStateToProps = (state, ownProps) => ({
    question: state.entities.questions[ownProps.match.params.questionId],
    users: state.users,
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    recieveQuestion: questionId => dispatch(recieveQuestion(questionId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);