import { recieveAllAnswersByQuestion } from "../../util/question_util";
import { searchAllQuestions } from "../../util/question_util";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import SearchIndex from "./search_index";
import { recieveAllQuestions, deleteQuestion, getAllQuestions} from "../../actions/question_actions";
const mapStateToProps = (state,  { match }) => ({
    search: match.params.id,
    questions: state.entities.questions,
    currentUser: state.session.currentUser,
})

const mapDispatchToProps = dispatch => ({
    recieveAllAnswersByQuestion: questionId => recieveAllAnswersByQuestion(questionId),
    recieveAllQuestions: () => dispatch(recieveAllQuestions()),
    searchAllQuestions: search => searchAllQuestions(search),
    getAllQuestions: questions => dispatch(getAllQuestions(questions)),

})

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(SearchIndex));