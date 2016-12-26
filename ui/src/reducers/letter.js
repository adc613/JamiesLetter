import {
  OPEN
} from '../actions/letter';
import { fromJS } from 'immutable';

const initialState = fromJS({
  open: 0,
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

  let open = payload.open;
  return state.set('open', open);

}
