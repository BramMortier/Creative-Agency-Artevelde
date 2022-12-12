/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/lib/constants.js":
/*!*****************************************!*\
  !*** ./src/javascript/lib/constants.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeMenuBtn": () => (/* binding */ closeMenuBtn),
/* harmony export */   "flyoutMenu": () => (/* binding */ flyoutMenu),
/* harmony export */   "openMenuBtn": () => (/* binding */ openMenuBtn)
/* harmony export */ });
// menu buttons
var openMenuBtn = document.getElementById("open-menu-btn");
var closeMenuBtn = document.getElementById("close-menu-btn");
var flyoutMenu = document.getElementById("flyout-menu");

/***/ }),

/***/ "./src/javascript/lib/events.js":
/*!**************************************!*\
  !*** ./src/javascript/lib/events.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/javascript/lib/constants.js");
// ---------------------------------------- //
// module imports

// ---------------------------------------- //

if (_constants__WEBPACK_IMPORTED_MODULE_0__.openMenuBtn) {
  _constants__WEBPACK_IMPORTED_MODULE_0__.openMenuBtn.addEventListener("click", function () {
    _constants__WEBPACK_IMPORTED_MODULE_0__.flyoutMenu.classList.remove("menu--hidden");
  });
  _constants__WEBPACK_IMPORTED_MODULE_0__.closeMenuBtn.addEventListener("click", function () {
    _constants__WEBPACK_IMPORTED_MODULE_0__.flyoutMenu.classList.add("menu--hidden");
  });
}

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/events */ "./src/javascript/lib/events.js");
// ---------------------------------------- //
// sass entry point


// module imports

// ---------------------------------------- //
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map