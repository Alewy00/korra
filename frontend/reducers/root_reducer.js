import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session  from './session_reducer';
import errors from './errors_reducer';
import questions from './questions_reducer'
export const rootReducer = combineReducers({
    entities,
    session,
    errors
  });