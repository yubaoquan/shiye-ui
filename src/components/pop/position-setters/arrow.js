function xLeft() {
  return {};
}

function xRight() {
  return {};
}

function xTop() {
  return {};
}

function xBottom() {
  return {};
}

const setterMap = {
  'top-left': xLeft,
  'bottom-left': xLeft,
  'top-right': xRight,
  'bottom-right': xRight,
  'left-top': xTop,
  'left-bottom': xBottom,
  'right-top': xTop,
  'right-bottom': xBottom,
};


function entry(position) {
  if (position.includes('center')) {
    return {};
  }
  return setterMap[position]();
}

export default entry;
