function xLeft({ width, portalWidth }) {
  const left = pickInScope(width / 2, 0, portalWidth);
  return { left: `${left}px` };
}

function xRight({ width, portalWidth }) {
  let right = pickInScope(width / 2, 0, portalWidth);
  return { right: `${right}px` };
}

function xTop({ height, portalHeight }) {
  const top = pickInScope(height / 2, 0, portalHeight);
  return { top: `${top}px` };
}

function xBottom({ height, portalHeight }) {
  const bottom = pickInScope(height / 2, 0, portalHeight);
  return { bottom: `${bottom}px` };
}

function pickInScope(value, min, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
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


function entry(position, posParams) {
  if (position.includes('center')) {
    return {};
  }
  return setterMap[position](posParams);
}

export default entry;
