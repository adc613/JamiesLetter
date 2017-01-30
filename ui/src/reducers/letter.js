import {
  OPEN,
  PAGE_STATE,
  INPUT_CHANGE,
} from '../actions/letter';
import { fromJS } from 'immutable';

let riddles = [
  {
    question: "What's the most comfortable sleeping position?",
    answer: 'log'
  },
  {
    question: "What's my favorite color?",
    answer: 'red'
  },
  {
    question: "What's my favorite food?",
    answer: 'bacon'
  },
  {
    question: "What month is my birthday?",
    answer: 'june'
  },
  {
    question: "What's my favorite candy?",
    answer: 'gummy bears'
  },
];
let riddle = riddles[Math.floor(Math.random() * riddles.length)];
const initialState = fromJS({
  open: 0,
  pageState: 0,
  riddle: {
    disabled: true,
    answer: '',
    actualAnswer: riddle.answer,
    question: riddle.question
  }
});

export default function reducer(state=initialState, action) {

  switch(action.type) {
    case OPEN:
      return open(state, action.payload);
    case PAGE_STATE:
      return pageState(state, action.payload);
    case INPUT_CHANGE:
      return inputChange(state, action.payload);
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

function inputChange(state, payload) {

  let value = payload.value;
  state = state.setIn(['riddle', 'answer'], value);
  if (value.toLowerCase() == state.getIn(['riddle', 'actualAnswer'])) {
    state = state.setIn(['riddle', 'disabled'], false);
  }
  return state;

}


