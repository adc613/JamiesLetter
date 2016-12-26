import {
  OPEN
} from '../actions/letter';
import { fromJS } from 'immutable';

const initialState = fromJS({
  open: false,
});

export default function reducer(state=initialState, action) {

  switch(action.type) {
    case OPEN:
      return open(state, action.payload);
    default:
      return state;
  }

}


function open(state, payload) {

  return state.set('open', true);

}
