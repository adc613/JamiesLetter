export const OPEN = "LETTER @ OPEN";
export const PAGE_STATE = "LETER @ PAGE_STATE";
export const INPUT_CHANGE = "LETTER @ INPUT_CHANGE";


export function openAction(open) {

  return {
    type: OPEN,
    payload: {
      open,
    }
  };

}

export function open() {

  return (dispatch, getState) => {

    let state = getState();
    let open = 1 + state.letter.get('open');
    dispatch(openAction(open));

    if(open > 1) {
      let pageState = 1 + state.letter.get('pageState');
      dispatch(pageStateAction(pageState));
    }

  };

}

export function pageStateAction(state) {

  return {
    type: PAGE_STATE,
    payload:{
      state
    }
  };

}

export function pageState() {

  return (dispatch, getState) => {

    let state = 1 + getState().letter.get('pageState');
    dispatch(pageStateAction(state));

  };

}

export function inputChangeAction(value) {

  return {
    type: INPUT_CHANGE,
    payload:{
      value
    }
  };

}

export function inputChange(value) {

  return (dispatch, getState) => {

    dispatch(inputChangeAction(value));

  };

}
