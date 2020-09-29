
import { combineReducers } from 'redux';
import {usersReducer} from "./users_reducer";
import questionReducer from "./questions_reducer";
import answerReducer from "./answers_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  questions: questionReducer,
  answers: answerReducer,

});

export default entitiesReducer;