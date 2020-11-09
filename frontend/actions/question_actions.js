import * as QuestionAPI from '../util/question_util';

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";
export const DELETE_QUESTION = "DELETE_QUESTION";


export const showQuestion = question => ({
    type: RECEIVE_QUESTION,
    question
})

export const getAllQuestions = questions => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
})

export const removeQuestion = questionId => ({
    type: DELETE_QUESTION,
    questionId
})



export const recieveAllQuestions = () => dispatch => (
    QuestionAPI.recieveAllQuestions()
        .then(questions => dispatch(getAllQuestions(questions)))
)

export const searchByQuestion = search => dispatch => (
    QuestionAPI.searchAllQuestions(search)
    .then(questions => dispatch(getAllQuestions(questions)))
    )
    



export const recieveQuestion = questionId => dispatch => (
    QuestionAPI.recieveQuestion(questionId)
    .then(question => dispatch(showQuestion(question)))
    )
    
    export const askQuestion = question => dispatch => (
        QuestionAPI.askQuestion(question)
            .then(question => dispatch(recieveQuestion(question.id)))
    )

export const deleteQuestion = question => dispatch => (
    QuestionAPI.deleteQuestion(question)
    .then(() => (dispatch(removeQuestion(question.id)))
))
export const updateQuestion = question => dispatch => (
    QuestionAPI.updateQuestion(question)
    .then(question => (dispatch(showQuestion(question))),
    )
)





