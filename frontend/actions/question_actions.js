import * as QuestionAPI from '../util/question_util';

export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";
export const DELETE_QUESTION = "DELETE_QUESTION";


export const receiveQuestion = question => ({
    type: RECEIVE_QUESTION,
    question
})

export const receiveAllQuestions = questions => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
})

export const deleteQuestion = questionId => ({
    type: DELETE_QUESTION,
    questionId
})

//thunks 

export const recieveAllQuestions = () => dispatch => (
    QuestionAPI.recieveAllQuestions()
        .then(questions => dispatch(receiveAllQuestions(questions)))
)

export const askQuestion = question => dispatch => (
    QuestionAPI.askQuestion(question)
        .then(question => dispatch(receiveQuestion(question)))
)

export const recieveQuestion = questionId => dispatch => (
    QuestionAPI.recieveQuestion(questionId)
        .then(question => dispatch(receiveQuestion(question)))
)





