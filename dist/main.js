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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const GooglePay = __webpack_require__(/*! ./psp/googlepay */ \"./src/js/psp/googlepay.js\");\nconst ApplePay = __webpack_require__(/*! ./psp/applepay */ \"./src/js/psp/applepay.js\");\n\nmodule.exports = class Wallet {\n    constructor(config) {\n        let gp = new GooglePay(config);\n    }\n}\n\n\n\n//# sourceURL=webpack://wallet.js/./src/js/wallet.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/wallet.js");
/******/ 	
/******/ })()
;