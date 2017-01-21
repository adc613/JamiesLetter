import {
  DRAW_LEAF,
  CHANGE_CLASS,
  REMOVE_LEAF,
  DRAW,
  CLEAR_LEAVES,
  REMEMBER_A_MEMORY,
  SHOW,
} from '../actions/tree';
import { fromJS } from 'immutable';

const initialState = fromJS({
  images: [
    'test.jpg',
  ],
  description: {
    'test.jpg': "Testing 1 2 3 testing",
  },
  memory: {
  },
  leaves: [],
  draw: false,
  displayMemory: false,
});

export default function reducer(state=initialState, action) {

  switch(action.type) {
    case DRAW_LEAF:
      return drawLeaf(state, action.payload);
    case CHANGE_CLASS:
      return changeClass(state, action.payload);
    case REMOVE_LEAF:
      return removeLeaf(state, action.payload);
    case DRAW:
      return setDraw(state, action.payload);
    case CLEAR_LEAVES:
      return clearLeaves(state, action.payload);
    case REMEMBER_A_MEMORY:
      return rememberAMemory(state, action.payload);
    case SHOW:
      return showMemory(state, action.payload);
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

export function setDraw(state, payload) {

  let shouldDraw = payload.shouldDraw;
  return state.set('draw', shouldDraw);

}


export function clearLeaves(state, payload) {

  let leaves = fromJS([]);
  return state.set('leaves', leaves);

}

export function rememberAMemory(state, payload) {

  let src = payload.src;
  let description = payload.description;
  let memory = fromJS({
    src,
    description,
  });

  return state.set('memory', memory);
}


export function showMemory(state, payload) {

  let show = payload.show;
  return state.set('displayMemory', show);

}
