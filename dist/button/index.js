!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("@ybq/ui",["react"],t):"object"==typeof exports?exports["@ybq/ui"]=t(require("react")):e["@ybq/ui"]=t(e.React)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}([function(e,t,n){e.exports=n(13)()},function(t,n){t.exports=e},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(11),o=n(10);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var r=n(12);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){"use strict";var r=n(3),o=n.n(r),a=n(4),i=n.n(a),s=n(5),c=n.n(s),u=n(6),l=n.n(u),p=n(7),f=n.n(p),y=n(2),b=n.n(y),d=n(1),m=n(0),h=n.n(m),v=function(e){function t(){return o()(this,t),c()(this,l()(t).apply(this,arguments))}return f()(t,e),i()(t,[{key:"prefixClass",value:function(e){var t=this.props.prefix;return t&&t.trim&&t.trim()?"".concat(t).concat(e):"shiye".concat(e)}}]),t}(d.Component);b()(v,"propTypes",{prefix:h.a.string,className:h.a.string}),b()(v,"defaultProps",{prefix:"shiye",className:""}),t.a=v},function(e,t,n){var r;
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
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t,n){"use strict";var r=n(14);function o(){}e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=n(4),i=n.n(a),s=n(5),c=n.n(s),u=n(6),l=n.n(u),p=n(7),f=n.n(p),y=n(2),b=n.n(y),d=n(1),m=n.n(d),h=n(0),v=n.n(h),g=n(9),x=n.n(g),O=(n(16),function(e){function t(){return o()(this,t),c()(this,l()(t).apply(this,arguments))}return f()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,n=e.type,r=e.className,o=t.iconClassMap[n]||t.iconClassMap.square,a=x()("shiye-icon",r,o);return m.a.createElement("span",{className:a})}}]),t}(d.Component));b()(O,"propTypes",{type:v.a.oneOf(["share","previous","next","check","wrong","search","download","sqauare"])}),b()(O,"defaultProps",{type:"square"}),b()(O,"iconClassMap",{share:"icon-share-alt",previous:"icon-chevron-left",next:"icon-chevron-right",check:"icon-check",wrong:"icon-wrong",search:"icon-search",download:"icon-download",square:"icon-square-o"});var k=O;t.default=k},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=n(4),i=n.n(a),s=n(5),c=n.n(s),u=n(6),l=n.n(u),p=n(7),f=n.n(p),y=n(10),b=n.n(y),d=n(2),m=n.n(d),h=n(1),v=n.n(h),g=n(0),x=n.n(g),O=n(9),k=n.n(O),_=n(15),j=n(8),T=(n(22),function(e){function t(){var e,n;o()(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=c()(this,(e=l()(t)).call.apply(e,[this].concat(a))),m()(b()(b()(n)),"onClick",function(e){n.props.onClick&&n.props.onClick(e)}),n}return f()(t,e),i()(t,[{key:"convertChildren",value:function(){var e=this.props.children;return"string"==typeof e&&2===e.length?e[0]+" "+e[1]:e}},{key:"renderWrapper",value:function(e,n){var r=this.props,o=r.href,a=r.target,i=r.icon,s=r.style,c=this.props.htmlType;return t.validHtmlTypes.includes(c)||(c="button"),i&&(n=v.a.createElement(v.a.Fragment,null,v.a.createElement(_.default,{type:i}),n)),o?a?v.a.createElement("a",{className:e,href:o,target:a,style:s},n):v.a.createElement("a",{className:e,href:o,style:s},n):v.a.createElement("button",{style:s,className:e,onClick:this.onClick,type:c},n)}},{key:"render",value:function(){var e=this.props,t=e.block,n=e.outline,r=e.loading,o=e.disabled,a=k()(this.prefixClass("-btn"),e.className,{block:t,outline:n,loading:r,disabled:o,primary:"primary"===e.type,danger:"danger"===e.type,success:"success"===e.type,large:"large"===e.size,small:"small"===e.size,"no-border":!e.bordered,link:e.href}),i=v.a.createElement("span",{className:"shiye-btn__name"},e.children);return this.renderWrapper(a,i)}}]),t}(j.a));m()(T,"propTypes",{outline:x.a.bool,loading:x.a.bool,disabled:x.a.bool,bordered:x.a.bool,block:x.a.bool,type:x.a.oneOf(["default","primary","danger","success"]),size:x.a.oneOf(["large","medium","small"]),href:x.a.string,target:x.a.oneOf(["_blank",""]),icon:x.a.string,htmlType:x.a.oneOf(h.Component.validHtmlTypes),onClick:x.a.func,style:x.a.object}),m()(T,"validHtmlTypes",["button","submit","reset"]),m()(T,"defaultProps",{type:"default",size:"medium",outline:!1,loading:!1,disabled:!1,block:!1,bordered:!0,href:"",target:"",icon:"",htmlType:"button",style:{}});var w=T,P=function(e){function t(){return o()(this,t),c()(this,l()(t).apply(this,arguments))}return f()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.style,r=e.className,o=k()(this.prefixClass("-btn-group"),r);return v.a.createElement("span",{className:o,style:n},t)}}]),t}(j.a);m()(P,"propTypes",{style:x.a.object}),m()(P,"defaultProps",{style:{}});var S=P;w.Group=S;t.default=w},,,,,function(e,t,n){}])});