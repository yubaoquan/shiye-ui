/**
 * top-x
 * left-x
 * right-x
 * bottom-x
 */

 export default {
  top: ({ baseTop, top, portalHeight }) => {
    return { top: `${baseTop + top - portalHeight - 10}px` };
  },
  left: ({ baseLeft, left, portalWidth }) => {
    return { left: `${baseLeft + left - portalWidth - 10}px` };
  },
  right: ({ baseLeft, right }) => {
    return { left: `${baseLeft + right + 10}px` };
  },
  bottom: ({ baseTop, bottom }) => {
    return { top: `${baseTop + bottom + 10}px` };
  },
};
