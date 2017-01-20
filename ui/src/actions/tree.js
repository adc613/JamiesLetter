export const DRAW_LEAF = 'TREE@@DRAW_LEAF';
export const CHANGE_CLASS = "TREE@@CHANGE_CLASS";
export const REMOVE_LEAF = "TREE@@REMOVE_LEAF";


export function drawLeafAction(style, leaf, key) {

  return {
    type: DRAW_LEAF,
    payload:{
      position:"absolute",
      style,
      leaf,
      key,
    }
  };

}


export function drawLeaf() {

  return (dispatch, getState) => {

    let tree = document.getElementById('Tree');
    let rect = tree.getBoundingClientRect();
    rect = randomLocation(rect);

    let leaves = getState().tree.get('images');
    let size = leaves.size;
    let index = Math.floor(Math.random() * size);
    let leaf = leaves.get(index);
    let left = rect.left;
    let width = "50px";

    let style = {
      top: rect.top,
      left: rect.left,
      position: "absolute",
      maxWidth: "50px",
    };

    size = getState().tree.get('leaves').size;
    let key = 'leaf-' + size;
    dispatch(drawLeafAction(style, leaf, key));

  };

}


export function changeClassAction(index, className) {

  return {
    type: CHANGE_CLASS,
    payload:{
      index,
      className
    }
  };

}


export function removeLeaves() {

  return (dispatch, getState) => {

    let leaves = getState().tree.get('leaves');
    for(let i = 0; i < leaves.size; i++) {
      dispatch(changeClassAction(i, "leaf-falling"));

      let interval = Math.random() * 2000;
      interval = Math.floor(interval + 1000);

      console.log(interval);
      setTimeout(removeLeaf(dispatch, i), interval);
    }

  };

}


export function removeLeafAction(index) {
  return {
    type: REMOVE_LEAF,
    payload: {
      index,
    }
  };
}


export function removeLeaf(dispatch, index, interval) {
  return () => {
    dispatch(removeLeafAction(index));
  };
}

function randomLocation(rect) {

  let left = rect.left;
  let right = rect.right;
  left += (Math.random() * (right - left));

  let top = rect.top;
  let bottom = rect.bottom;
  top += Math.random() * (top + bottom) * 0.28;

  return {
    left,
    right,
    top,
    bottom,
  };

}
