"use strict";(self.webpackChunkkoillection=self.webpackChunkkoillection||[]).push([[500],{77500:(t,e,n)=>{n.r(e),n.d(e,{default:()=>h});n(92222),n(74916),n(15306),n(89554),n(54747),n(69070),n(68304),n(30489),n(12419),n(78011),n(82526),n(41817),n(41539),n(32165),n(66992),n(78783),n(33948);var o=n(67931),r=n(51474);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=p(t);if(e){var r=p(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return a(this,n)}}function a(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(a,t);var e,n,o,i=l(a);function a(){var t;u(this,a);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return y(s(t=i.call.apply(i,[this].concat(n))),"index",null),t}return e=a,(n=[{key:"connect",value:function(){this.index=this.fieldTargets.length,this.computePositions();var t=this;new r.ZP(this.element,{draggable:".field",handle:".handle",onSort:function(){t.computePositions()}})}},{key:"add",value:function(t){t.preventDefault();var e=this.element.dataset.prototype.replace(/__name__/g,this.index);this.buttonTarget.insertAdjacentHTML("beforebegin",e),this.index++,this.computePositions()}},{key:"remove",value:function(t){t.preventDefault(),t.target.closest(".field").remove(),this.computePositions()}},{key:"computePositions",value:function(){this.positionTargets.forEach((function(t,e){t.value=e+1}))}}])&&c(e.prototype,n),o&&c(e,o),a}(o.Controller);y(h,"targets",["field","button","position"])}}]);