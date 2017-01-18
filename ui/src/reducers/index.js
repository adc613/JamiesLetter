import letterReducer from './letter';
import { combineReducers } from 'redux';
import treeReducer from './tree';


export default combineReducers({
  letter: letterReducer,
  tree: treeReducer,
});
