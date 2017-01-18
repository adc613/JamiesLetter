import {
  DRAW_LEAF
} from '../actions/tree';
import { fromJS } from 'immutable';

const initialState = fromJS({
  images: [
    'test.jpg',
  ],
  leaves: []
});

export default function reducer(state=initialState, action) {

  console.log(state);
  switch(action.type) {
    case DRAW_LEAF:
      return drawLeaf(state, action.payload);
    default:
      return state;
  }

}


export function drawLeaf(state, payload) {

  let top = payload.top;
  let position = payload.position;
  let left = payload.left;
  let width = payload.width;
  let leaf = payload.leaf;
  let style = {
    position,
    top,
    left,
    width,
  };

  leaf = fromJS({
    leaf,
    style,
  });


  let leaves = state.get('leaves').push(leaf);

  return state.set('leaves', leaves);


}
