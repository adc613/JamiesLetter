import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';



const logger = createLogger({
  collapsed: true,
  stateTransformer: (state) => {
    let newState = {};

    for(let key in state) {
      newState[key] = state[key].toJS();
    }

    return newState;
  },
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);


export default store;
