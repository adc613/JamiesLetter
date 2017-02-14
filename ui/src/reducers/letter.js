import {
  OPEN,
  PAGE_STATE,
  INPUT_CHANGE,
} from '../actions/letter';
import { fromJS } from 'immutable';

let riddles = [
  {
    question: "How would you finish this senetence \"Log base ______\"?",
    answer: 'adam'
  },
  {
    question: "What's the most comfortable sleeping position?",
    answer: 'log'
  },
  {
    question: "Is Evanston better than Boston?",
    answer: 'yes'
  },
  {
    question: "Where was our first date?",
    answer: 'panera'
  },
  {
    question: "You tracked my location without me knowning when I was interviewing in what city?",
    answer: 'boston'
  },
  {
    question: "What did I get you for our first Christmas?",
    answer: 'pajamas'
  },
  {
    question: "Sophomore year I made you watch every episode of Game of Thrones with me. What was the color of the futon we watched it on?",
    answer: 'black'
  },
  {
    question: "What's my favorite candy?",
    answer: 'gummy bears'
  },
  {
    question: "When you are sad I make you dance with me to what John Legend song?",
    answer: 'slow dance'
  },
  {
    question: "What was I wearing when we first met?",
    answer: 'towel'
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
  } else {
    state = state.setIn(['riddle', 'disabled'], true);
  }
  return state;

}


