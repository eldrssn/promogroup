!function(r){var t={};function o(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=r,o.c=t,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)o.d(r,t,function(e){return n[e]}.bind(null,t));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s="./app/js/modules/main.js")}({"./app/js/modules/hide-element.js":
/*!****************************************!*\
  !*** ./app/js/modules/hide-element.js ***!
  \****************************************/
/*! exports provided: hideElement */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideElement\", function() { return hideElement; });\nconst TIMEOUT_COUNT = 300;\r\n\r\nconst hideElement = (elemHide, ...elemShow) => {\r\n\r\n  const showElement = () => {\r\n    setTimeout(() => {\r\n      elemShow.forEach(elem => {\r\n        elem.classList.remove('visually-hidden');\r\n      })\r\n    }, TIMEOUT_COUNT);\r\n  }\r\n\r\n  const onElementClick = () => {\r\n    elemHide.classList.add('hide');\r\n    setTimeout(() => { elemHide.style.display = \"none\"; }, TIMEOUT_COUNT);\r\n    document.removeEventListener('keydown', onDocumentKeydown);\r\n    elemHide.removeEventListener('click', onElementClick);\r\n    showElement(elemShow);\r\n  }\r\n  \r\n  const onDocumentKeydown = () => {\r\n    elemHide.classList.add('hide');\r\n    setTimeout(() => { elemHide.style.display = \"none\"; }, TIMEOUT_COUNT);\r\n    document.removeEventListener('keydown', onDocumentKeydown);\r\n    elemHide.removeEventListener('click', onElementClick);\r\n    showElement(elemShow);\r\n  }\r\n  \r\n  elemHide.addEventListener('click', onElementClick);\r\n  document.addEventListener('keydown', onDocumentKeydown);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./app/js/modules/hide-element.js?")},"./app/js/modules/main.js":
/*!********************************!*\
  !*** ./app/js/modules/main.js ***!
  \********************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hide_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hide-element */ \"./app/js/modules/hide-element.js\");\n/* harmony import */ var _open_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./open-burger-menu */ \"./app/js/modules/open-burger-menu.js\");\n\r\n\r\n\r\nconst greetings = document.querySelector('.greetings');\r\nconst nav = document.querySelector('.nav');\r\nconst main = document.querySelector('main');\r\nconst footer = document.querySelector('footer');\r\n\r\nif (greetings) {\r\n  nav.classList.add('visually-hidden');\r\n  main.classList.add('visually-hidden');\r\n  footer.classList.add('visually-hidden');\r\n  Object(_hide_element__WEBPACK_IMPORTED_MODULE_0__[\"hideElement\"])(greetings, nav, main, footer);\r\n}\r\n\r\nObject(_open_burger_menu__WEBPACK_IMPORTED_MODULE_1__[\"openBurgerMenu\"])(nav, main);\n\n//# sourceURL=webpack:///./app/js/modules/main.js?")},"./app/js/modules/open-burger-menu.js":
/*!********************************************!*\
  !*** ./app/js/modules/open-burger-menu.js ***!
  \********************************************/
/*! exports provided: openBurgerMenu */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openBurgerMenu\", function() { return openBurgerMenu; });\n/* harmony import */ var _hide_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hide-element */ \"./app/js/modules/hide-element.js\");\n\r\n\r\nconst openBurgerMenu = (selector, ...others) => {\r\n  const button = selector.querySelector('.burger_menu__button');\r\n\r\n  const toggleBurgerMenu = () => {\r\n    selector.classList.toggle('nav--open_burger');\r\n    others.forEach(node => {\r\n      node.classList.toggle('visually-hidden');\r\n    }) \r\n  }\r\n\r\n  button.addEventListener('click', (evt) => {\r\n    evt.preventDefault();\r\n    toggleBurgerMenu();\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./app/js/modules/open-burger-menu.js?")}});