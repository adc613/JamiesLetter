import {
  OPEN,
  PAGE_STATE,
} from '../actions/letter';
import { fromJS } from 'immutable';

const initialState = fromJS({
  open: 0,
  pageState: 0,
});

export default function reducer(state=initialState, action) {

  switch(action.type) {
    case OPEN:
      return open(state, action.payload);
    case PAGE_STATE:
      return pageState(state, action.payload);
    default:
      return state;
  }

}


function open(state, payload) {

  let open = payload.open;
  return state.set('open', open);

}

function pageState(state, payload) {

  let pageState = payload.state;
  return state.set('pageState', pageState);

}
