!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("@ybq/ui",["react"],t):"object"==typeof exports?exports["@ybq/ui"]=t(require("react")):e["@ybq/ui"]=t(e.React)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=262)}({0:function(e,t,n){e.exports=n(49)()},1:function(t,n){t.exports=e},14:function(e,t,n){"use strict";var r=n(4),o=n.n(r),u=n(5),i=n.n(u),c=n(6),f=n.n(c),p=n(7),a=n.n(p),s=n(8),l=n.n(s),y=n(2),b=n.n(y),d=n(1),m=n(0),h=n.n(m),v=function(e){function t(){return o()(this,t),f()(this,a()(t).apply(this,arguments))}return l()(t,e),i()(t,[{key:"prefixClass",value:function(e){var t=this.props.prefix;return t&&t.trim&&t.trim()?"".concat(t).concat(e):"shiye".concat(e)}},{key:"safeCall",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];"function"==typeof e&&e.apply(null,t)}}]),t}(d.Component);b()(v,"propTypes",{prefix:h.a.string,className:h.a.string}),b()(v,"defaultProps",{prefix:"shiye",className:""}),t.a=v},2:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},262:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),u=n(5),i=n.n(u),c=n(6),f=n.n(c),p=n(7),a=n.n(p),s=n(8),l=n.n(s),y=n(1),b=n.n(y),d=n(14),m=(n(0),n(333),function(e){function t(){return o()(this,t),f()(this,a()(t).apply(this,arguments))}return l()(t,e),i()(t,[{key:"render",value:function(){return b.a.createElement("div",null,this.props.children)}}]),t}(d.a)),h=function(e){function t(){return o()(this,t),f()(this,a()(t).apply(this,arguments))}return l()(t,e),i()(t,[{key:"render",value:function(){return b.a.createElement("div",null,b.a.createElement("span",null,"form input field"),this.props.children)}}]),t}(y.Component);m.InputField=h;t.default=m},3:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},333:function(e,t,n){},4:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},47:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},48:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},49:function(e,t,n){"use strict";var r=n(50);function o(){}e.exports=function(){function e(e,t,n,o,u,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},5:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},50:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6:function(e,t,n){var r=n(47),o=n(3);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},7:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},8:function(e,t,n){var r=n(48);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}}})});