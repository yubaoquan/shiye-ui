/**
 * top-center
 * left-center
 * right-center
 * bottom-center
 */

 import basePosSetter from './base';

 export default {
    'top-center': (param) => {
      const { baseLeft, left, width, portalWidth } = param;
      return {
        ...basePosSetter.top(param),
        left: `${baseLeft + left + (width / 2) - (portalWidth / 2)}px`,
      };
    },
    'left-center': (param) => {
      const { baseTop, top, height, portalHeight } = param;
      return {
        top: `${ baseTop + top + (height / 2) - (portalHeight / 2)}px`,
        ...basePosSetter.left(param),
      };
    },
    'right-center': (param) => {
      const { baseTop, top, height, portalHeight } = param;
      return {
        top: `${ baseTop + top + (height / 2) - (portalHeight / 2)}px`,
        ...basePosSetter.right(param),
      };
    },
    'bottom-center': (param) => {
      const { baseLeft, left, width, portalWidth } = param;
      return {
        ...basePosSetter.bottom(param),
        left: `${baseLeft + left + (width / 2) - (portalWidth / 2)}px`,
      };
    },
  }
