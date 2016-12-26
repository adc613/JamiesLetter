import letterReducer from './letter';
import { combineReducers } from 'redux';


export default combineReducers({
  letter: letterReducer,
});
