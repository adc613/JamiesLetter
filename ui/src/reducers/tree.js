import {
  DRAW_LEAF,
  CHANGE_CLASS,
  REMOVE_LEAF,
} from '../actions/tree';
import { fromJS } from 'immutable';

const initialState = fromJS({
  images: [
    'test.jpg',
  ],
  leaves: []
});

export default function reducer(state=initialState, action) {

  switch(action.type) {
    case DRAW_LEAF:
      return drawLeaf(state, action.payload);
    case CHANGE_CLASS:
      return changeClass(state, action.payload);
    case REMOVE_LEAF:
      return removeLeaf(state, action.payload);
    default:
      return state;
  }

}


export function drawLeaf(state, payload) {

  let leaf = payload.leaf;
  let key = payload.key;
  let style = payload.style;

  leaf = fromJS({
    leaf,
    style,
    key,
  });


  let leaves = state.get('leaves').push(leaf);

  return state.set('leaves', leaves);


}

export function changeClass(state, payload) {

  let index = payload.index;
  let className = payload.className;
  return state.setIn(['leaves', index, 'className'], className);

}

export function removeLeaf(state, payload) {

  let index = payload.index;
  return state.deleteIn(['leaves', index]);

}
