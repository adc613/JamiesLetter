export const OPEN = "LETTER @ OPEN";


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

  };

}
