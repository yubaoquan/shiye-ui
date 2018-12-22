/**
 * x-left
 * x-right
 * x-top
 * x-bottom
 */

 export default {
  top: ({ baseTop, top }) => {
    return { top: `${baseTop + top}px` };
  },
  left: ({ baseLeft, left }) => {
    return { left: `${baseLeft + left}px`, };
  },
  right: ({ baseLeft, right, portalWidth }) => {
    return { left: `${baseLeft + right - portalWidth}px` };
  },
  bottom: ({ baseTop, bottom, portalHeight }) => {
    return { top: `${baseTop + bottom - portalHeight}px` };
  },
};
