!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define("@ybq/ui",["react"],n):"object"==typeof exports?exports["@ybq/ui"]=n(require("react")):e["@ybq/ui"]=n(e.React)}(window,function(e){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=25)}([function(n,t){n.exports=e},function(e,n,t){e.exports=t(13)()},function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},function(e,n,t){var r=t(11),o=t(10);e.exports=function(e,n){return!n||"object"!==r(n)&&"function"!=typeof n?o(e):n}},function(e,n){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},function(e,n,t){var r=t(12);e.exports=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}},function(e,n,t){"use strict";var r=t(3),o=t.n(r),i=t(4),a=t.n(i),u=t(5),s=t.n(u),c=t(6),l=t.n(c),p=t(7),f=t.n(p),y=t(2),d=t.n(y),h=t(0),m=t(1),b=t.n(m),v=function(e){function n(){return o()(this,n),s()(this,l()(n).apply(this,arguments))}return f()(n,e),a()(n,[{key:"prefixClass",value:function(e){var n=this.props.prefix;return n&&n.trim&&n.trim()?"".concat(n).concat(e):"shiye".concat(e)}}]),n}(h.Component);d()(v,"propTypes",{prefix:b.a.string,className:b.a.string}),d()(v,"defaultProps",{prefix:"shiye",className:""}),n.a=v},function(e,n,t){var r;
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
!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var u in r)t.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},function(e,n){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,n){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(n){return"function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?e.exports=r=function(e){return t(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},r(n)}e.exports=r},function(e,n){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(n,r)}e.exports=t},function(e,n,t){"use strict";var r=t(14);function o(){}e.exports=function(){function e(e,n,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n};return t.checkPropTypes=o,t.PropTypes=t,t}},function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){"use strict";t.r(n);var r=t(3),o=t.n(r),i=t(4),a=t.n(i),u=t(5),s=t.n(u),c=t(6),l=t.n(c),p=t(7),f=t.n(p),y=t(2),d=t.n(y),h=t(0),m=t.n(h),b=t(1),v=t.n(b),g=t(9),x=t.n(g),O=(t(16),function(e){function n(){return o()(this,n),s()(this,l()(n).apply(this,arguments))}return f()(n,e),a()(n,[{key:"render",value:function(){var e=this.props,t=e.type,r=e.className,o=n.iconClassMap[t]||n.iconClassMap.square,i=x()("shiye-icon",r,o);return m.a.createElement("span",{className:i})}}]),n}(h.Component));d()(O,"propTypes",{type:v.a.oneOf(["share","previous","next","check","wrong","search","download","sqauare"])}),d()(O,"defaultProps",{type:"square"}),d()(O,"iconClassMap",{share:"icon-share-alt",previous:"icon-chevron-left",next:"icon-chevron-right",check:"icon-check",wrong:"icon-wrong",search:"icon-search",download:"icon-download",square:"icon-square-o"});var k=O;n.default=k},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(3),o=t.n(r),i=t(4),a=t.n(i),u=t(5),s=t.n(u),c=t(6),l=t.n(c),p=t(7),f=t.n(p),y=t(10),d=t.n(y),h=t(2),m=t.n(h),b=t(0),v=t.n(b),g=t(1),x=t.n(g),O=t(9),k=t.n(O),_=t(15),j=t(8),w=(t(22),function(e){function n(){var e,t;o()(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=s()(this,(e=l()(n)).call.apply(e,[this].concat(i))),m()(d()(d()(t)),"onClick",function(e){t.props.onClick&&t.props.onClick(e)}),t}return f()(n,e),a()(n,[{key:"convertChildren",value:function(){var e=this.props.children;return"string"==typeof e&&2===e.length?e[0]+" "+e[1]:e}},{key:"renderWrapper",value:function(e,t){var r=this.props,o=r.href,i=r.target,a=r.icon,u=r.style,s=this.props.htmlType;return n.validHtmlTypes.includes(s)||(s="button"),a&&(t=v.a.createElement(v.a.Fragment,null,v.a.createElement(_.default,{type:a}),t)),o?i?v.a.createElement("a",{className:e,href:o,target:i,style:u},t):v.a.createElement("a",{className:e,href:o,style:u},t):v.a.createElement("button",{style:u,className:e,onClick:this.onClick,type:s},t)}},{key:"render",value:function(){var e=this.props,n=e.block,t=e.outline,r=e.loading,o=e.disabled,i=k()(this.prefixClass("-btn"),e.className,{block:n,outline:t,loading:r,disabled:o,primary:"primary"===e.type,danger:"danger"===e.type,success:"success"===e.type,large:"large"===e.size,small:"small"===e.size,"no-border":!e.bordered,link:e.href}),a=v.a.createElement("span",{className:"shiye-btn__name"},e.children);return this.renderWrapper(i,a)}}]),n}(j.a));m()(w,"propTypes",{outline:x.a.bool,loading:x.a.bool,disabled:x.a.bool,bordered:x.a.bool,block:x.a.bool,type:x.a.oneOf(["default","primary","danger","success"]),size:x.a.oneOf(["large","medium","small"]),href:x.a.string,target:x.a.oneOf(["_blank",""]),icon:x.a.string,htmlType:x.a.oneOf(b.Component.validHtmlTypes),onClick:x.a.func,style:x.a.object}),m()(w,"validHtmlTypes",["button","submit","reset"]),m()(w,"defaultProps",{type:"default",size:"medium",outline:!1,loading:!1,disabled:!1,block:!1,bordered:!0,href:"",target:"",icon:"",htmlType:"button",style:{}});var P=w,T=function(e){function n(){return o()(this,n),s()(this,l()(n).apply(this,arguments))}return f()(n,e),a()(n,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.style,r=e.className,o=k()(this.prefixClass("-btn-group"),r);return v.a.createElement("span",{className:o,style:t},n)}}]),n}(j.a);m()(T,"propTypes",{style:x.a.object}),m()(T,"defaultProps",{style:{}});var C=T;P.Group=C;n.default=P},function(e,n,t){"use strict";t.r(n);var r=t(3),o=t.n(r),i=t(4),a=t.n(i),u=t(5),s=t.n(u),c=t(6),l=t.n(c),p=t(7),f=t.n(p),y=t(0),d=t.n(y),h=t(9),m=t.n(h),b=t(8),v=function(e){function n(){return o()(this,n),s()(this,l()(n).apply(this,arguments))}return f()(n,e),a()(n,[{key:"render",value:function(){var e=this.props,n=e.className,t=e.children,r=m()(this.prefixClass("-row"),n);return d.a.createElement("div",{className:r},t)}}]),n}(b.a),g=t(2),x=t.n(g),O=t(1),k=t.n(O),_=function(e){function n(){return o()(this,n),s()(this,l()(n).apply(this,arguments))}return f()(n,e),a()(n,[{key:"render",value:function(){var e=this.props,n=e.span,t=e.offset,r=e.className,o=e.children,i=m()(this.prefixClass("-col"),"span-".concat(n),"offset-".concat(t),r);return d.a.createElement("span",{className:i},o)}}]),n}(b.a);x()(_,"propTypes",{span:k.a.number.isRequired,offset:k.a.number}),x()(_,"defaultProps",{offset:0});var j=_;t(23),n.default={Row:v,Col:j}},function(e,n,t){"use strict";t.r(n);var r=t(3),o=t.n(r),i=t(4),a=t.n(i),u=t(5),s=t.n(u),c=t(6),l=t.n(c),p=t(7),f=t.n(p),y=t(0),d=t.n(y),h=t(8),m=(t(1),t(24),function(e){function n(){return o()(this,n),s()(this,l()(n).apply(this,arguments))}return f()(n,e),a()(n,[{key:"render",value:function(){return d.a.createElement("div",null,this.props.children)}}]),n}(h.a)),b=function(e){function n(){return o()(this,n),s()(this,l()(n).apply(this,arguments))}return f()(n,e),a()(n,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("span",null,"form input field"),this.props.children)}}]),n}(y.Component);m.InputField=b;n.default=m},function(e,n,t){"use strict";t.r(n),console.info("this is input");n.default=function(){console.info("this is input function")}},function(e,n,t){"use strict";t.r(n);var r=t(3),o=t.n(r),i=t(4),a=t.n(i),u=t(5),s=t.n(u),c=t(6),l=t.n(c),p=t(7),f=t.n(p),y=t(0),d=t.n(y),h=(t(1),function(e){function n(){return o()(this,n),s()(this,l()(n).apply(this,arguments))}return f()(n,e),a()(n,[{key:"render",value:function(){return d.a.createElement("span",{className:"shiye-pop"},"pop")}}]),n}(t(8).a));n.default=h},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(17);t.d(n,"Button",function(){return r.default});var o=t(20);t.d(n,"Input",function(){return o.default});var i=t(15);t.d(n,"Icon",function(){return i.default});var a=t(18);t.d(n,"Layout",function(){return a.default});var u=t(21);t.d(n,"Pop",function(){return u.default});var s=t(19);t.d(n,"Form",function(){return s.default})}])});