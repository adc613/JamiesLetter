export const DRAW_LEAF = 'TREE@@DRAW_LEAF';


export function drawLeafAction(top, left, width, leaf) {

  return {
    type: DRAW_LEAF,
    payload:{
      position:"absolute",
      top,
      left,
      width,
      leaf,
    }
  };

}

export function drawLeaf() {

  return (dispatch, getState) => {

    let tree = document.getElementById('Tree');
    let rect = tree.getBoundingClientRect();
    rect = randomLocation(rect);
    console.log(rect);

    let leaves = getState().tree.get('images');
    let size = leaves.size;
    let index = Math.floor(Math.random() * size);
    let leaf = leaves.get(index);
    let top = rect.top;
    let left = rect.left;
    let width = "50px";
    dispatch(drawLeafAction(top, left, width, leaf));

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