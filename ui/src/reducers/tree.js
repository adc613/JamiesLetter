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
    'fb1.jpg',
    'fb2.jpg',
    'pic1.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg',
    'pic6.jpg',
    'pic8.jpg',
    'pic9.jpg',
    'pic10.jpg',
    'pic11.jpg',
    'pic12.jpg',
    'pic13.jpg',
    'pic14.jpg',
    'pic15.jpg',
    'pic16.jpg',
    'pic17.jpg',
    'pic18.jpg',
    'pic19.jpg',
    'pic20.jpg',
    'pic21.jpg',
    'pic22.jpg',
    'pic23.jpg',
    'pic24.jpg',
    'pic25.jpg',
    'pic26.jpg',
  ],
  description: {
    'fb1.jpg': "I'm an adult I can support myself... sometimes. In my defense we were on a hill",
    'fb2.jpg': "I still don't get your obssesion with the bean. It's the samething every time",
    'pic1.jpg': "This is one of the first pictures we ever took together",
    'pic3.jpg': "This was one of the first time I've ever had sushi. I remember you were so afraid I wasn't going to like it",
    'pic4.jpg': "I don't know why I include this picture, but you look cozy",
    'pic5.jpg': "Smile for the camera!",
    'pic6.jpg': "I will attack you with kisses! You can't run from me!",
    'pic8.jpg': "This is one ofmy favorite pictures. MASON!",
    'pic9.jpg': "This was the most fun date we've ever been on",
    'pic10.jpg': "That time when we flew to California on your 21st to get dinner, because you would never drink at a restuarant if you weren't 21",
    'pic11.jpg': "Good old Boston, still not as nice as Evanston",
    'pic12.jpg': "Are your eyes open in this picture?",
    'pic13.jpg': "Shit... I'm going to be stuck next to the person next to me for the whole plane ride...",
    'pic14.jpg': "This is one of the first pictures we ever took together",
    'pic15.jpg': "This picture embodies Clarke Tower",
    'pic16.jpg': "I'm glad you understand tennis comes first",
    'pic17.jpg': "Feed me, AH!",
    'pic18.jpg': "Hey everyone come see how good I look",
    'pic19.jpg': "When you get stressed out so you hide in the library and watch Gaurdians of the Galaxy until Jamie comes and rescues you...",
    'pic20.jpg': "Never did find the waterall, but this is a great picture",
    'pic21.jpg': "Smile ;)",
    'pic22.jpg': "Look how much fun we're having",
    'pic23.jpg': "This is one of the first pictures we ever took together",
    'pic24.jpg': "Good old Clarke Tower, gotta love the futon ;)",
    'pic25.jpg': "Just so you know I will never let you win in anything, unless I lose then I let you win...",
    'pic26.jpg': "That time we took a picture underwater. S/O to Apple for making the iPhone 7 waterproof",
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
  let id = payload.id;
  let className = payload.className;
  let memory = fromJS({
    src,
    description,
    id,
    className,
  });

  return state.set('memory', memory);
}


export function showMemory(state, payload) {

  let show = payload.show;
  return state.set('displayMemory', show);

}
