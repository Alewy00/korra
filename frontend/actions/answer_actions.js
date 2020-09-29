import * as AnswerAPI from '../util/answer_util';


export const RECEIVE_ANSWER = "RECEIVE_ANSWERS";
export const RECEIVE_ALL_ANSWERS = "RECEIVE_ALL_ANSWERS";
export const DELETE_ANSWER = "DELETE_ANSWER";


export const showAnswer = answer => ({
    type: RECEIVE_ANSWER,
    answer 
})
 
export const receiveAllAnswers = answers => ({
    type: RECEIVE_ALL_ANSWERS,
    answers
})

export const removeAnswer = answerId => ({
    type: DELETE_ANSWER,
    answerId
})



export const recieveAllAnswers = () => dispatch => (
    AnswerAPI.recieveAllAnswers()
        .then(answers => dispatch(receiveAllAnswers(answers)))
)




export const writeAnswer = answer => dispatch => (
    AnswerAPI.writeAnswer(answer)
        .then(answer => dispatch(showAnswer(answer)))
)

export const recieveAnswer = answerId => dispatch => (
    AnswerAPI.recieveAnswer(answerId)
        .then(answer => dispatch(showAnswer(answer)))
)


export const updateAnswer = (answer) => dispatch => (
    AnswerAPI.updateAnswer(answer)
        .then(answer => dispatch(receiveAnswer(answer)))
)

export const deleteAnswer = answerId => dispatch => (
    AnswerAPI.deleteAnswer(answerId)
        .then(answer => dispatch(removeAnswer(answer.id)))
)

