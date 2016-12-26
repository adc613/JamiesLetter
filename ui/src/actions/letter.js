export const OPEN = "LETTER @ OPEN";


export function openAction() {

  return {
    type: OPEN,
    payload: {}
  };

}

export function open() {

  return (dispatch, getState) => {

    dispatch(openAction());

  };

}
