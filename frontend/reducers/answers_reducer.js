import  {RECEIVE_ANSWER} from '../actions/answer_actions';
import {RECEIVE_ALL_ANSWERS} from '../actions/answer_actions';
import  {DELETE_ANSWER} from '../actions/answer_actions';


const answerReducer = (state = {}, action) => {
    Object.freeze({}, state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_ANSWERS:
            return action.answers;
        case RECEIVE_ANSWER:
            return Object.assign({}, state, { [action.answer.id]: action.answer });
        case DELETE_ANSWER:
            delete newState[action.answerId];
            return newState;
        default:
            return state;
    }
}

export default answerReducer;