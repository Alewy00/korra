import  {RECEIVE_QUESTION} from '../actions/question_actions';
import {RECEIVE_ALL_QUESTIONS} from '../actions/question_actions';
import  {DELETE_QUESTION} from '../actions/question_actions';




const questionReducer = (state = {}, action) => {
    Object.freeze({}, state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return action.questions;
        case RECEIVE_QUESTION:
            return Object.assign({}, state, { [action.question.id]: action.question });
        case DELETE_QUESTION:
            newState[action.questionId] = null;
            return newState;
        default:
            return state;
    }
}

export default questionReducer;