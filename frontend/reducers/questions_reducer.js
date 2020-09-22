const questionReducer = (state = {}, action) => {
    Object.freeze({}, state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return action.questions;
        case RECEIVE_QUESTION:
            newState = {}; 
            newState[action.question.id] = action.question;
            return state;
        case DELETE_QUESTION:
            newState[action.questionId] = null;
            return newState;
        default:
            return state;
    }
}

export default questionReducer;