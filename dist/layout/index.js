!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("@ybq/ui",["react"],t):"object"==typeof exports?exports["@ybq/ui"]=t(require("react")):e["@ybq/ui"]=t(e.React)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=330)}({0:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1:function(e,t,n){e.exports=n(77)()},14:function(e,t,n){"use strict";var r=n(4),o=n.n(r),i=n(5),u=n.n(i),c=n(6),f=n.n(c),a=n(7),s=n.n(a),p=n(8),l=n.n(p),y=n(0),b=n.n(y),m=n(3),d=n(1),v=n.n(d),h=function(e){function t(){return o()(this,t),f()(this,s()(t).apply(this,arguments))}return l()(t,e),u()(t,[{key:"prefixClass",value:function(e){var t=this.props.prefix;return t&&t.trim&&t.trim()?"".concat(t).concat(e):"shiye".concat(e)}},{key:"safeCall",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];"function"==typeof e&&e.apply(null,t)}}],[{key:"safeCall",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];"function"==typeof e&&e.apply(null,t)}}]),t}(m.Component);b()(h,"propTypes",{prefix:v.a.string,className:v.a.string}),b()(h,"defaultProps",{prefix:"shiye",className:""}),t.a=h},18:function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var u=o.apply(null,r);u&&e.push(u)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},2:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},3:function(t,n){t.exports=e},330:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),i=n(5),u=n.n(i),c=n(6),f=n.n(c),a=n(7),s=n.n(a),p=n(8),l=n.n(p),y=n(3),b=n.n(y),m=n(18),d=n.n(m),v=n(14),h=function(e){function t(){return o()(this,t),f()(this,s()(t).apply(this,arguments))}return l()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=d()(this.prefixClass("-row"),t);return b.a.createElement("div",{className:r},n)}}]),t}(v.a),x=n(0),O=n.n(x),_=n(1),g=n.n(_),j=function(e){function t(){return o()(this,t),f()(this,s()(t).apply(this,arguments))}return l()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.span,n=e.offset,r=e.className,o=e.children,i=d()(this.prefixClass("-col"),"span-".concat(t),"offset-".concat(n),r);return b.a.createElement("span",{className:i},o)}}]),t}(v.a);O()(j,"propTypes",{span:g.a.number.isRequired,offset:g.a.number}),O()(j,"defaultProps",{offset:0});var P=j;n(335),t.default={Row:h,Col:P}},335:function(e,t,n){},4:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},5:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},6:function(e,t,n){var r=n(75),o=n(2);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},7:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},75:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},76:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},77:function(e,t,n){"use strict";var r=n(78);function o(){}e.exports=function(){function e(e,t,n,o,i,u){if(u!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},78:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8:function(e,t,n){var r=n(76);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}}})});