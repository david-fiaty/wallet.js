/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = {\n\tplugins: [\n\t\t__webpack_require__(/*! ./wallet */ \"./src/js/wallet.js\")\n\t]\n};\n\n\n\n//# sourceURL=webpack://wallet.js/./src/js/app.js?");

/***/ }),

/***/ "./src/js/psp/applepay.js":
/*!********************************!*\
  !*** ./src/js/psp/applepay.js ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = class ApplePay {\n    constructor(config) {\n        this.config = config;\n    }\n\n    test() {\n        console.log('ApplePay');\n        console.log(this.config);\n    }\n}\n\n//# sourceURL=webpack://wallet.js/./src/js/psp/applepay.js?");

/***/ }),

/***/ "./src/js/psp/googlepay.js":
/*!*********************************!*\
  !*** ./src/js/psp/googlepay.js ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = class GooglePay {\n    constructor(config) {\n        this.config = config;\n    }\n\n    test() {\n        console.log('GooglePay');\n        console.log(this.config);\n    }\n}\n\n\n\n//# sourceURL=webpack://wallet.js/./src/js/psp/googlepay.js?");

/***/ }),

/***/ "./src/js/wallet.js":
/*!**************************!*\
  !*** ./src/js/wallet.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wallet\": () => (/* binding */ Wallet)\n/* harmony export */ });\n\n\nconst GooglePay = __webpack_require__(/*! ./psp/googlepay */ \"./src/js/psp/googlepay.js\");\nconst ApplePay = __webpack_require__(/*! ./psp/applepay */ \"./src/js/psp/applepay.js\");\n\nclass Wallet {\n\tconstructor(config) {\n\t\tconsole.log('wallet loaded');\n\t}\n}\n\n\n//# sourceURL=webpack://wallet.js/./src/js/wallet.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;