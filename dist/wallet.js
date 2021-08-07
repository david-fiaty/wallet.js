/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var Wallet;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar Wallet = __webpack_require__(/*! ./wallet */ \"./src/js/wallet.js\");\n\nmodule.exports = Wallet;\n\n//# sourceURL=webpack://Wallet/./src/js/app.js?");

/***/ }),

/***/ "./src/js/psp/applepay.js":
/*!********************************!*\
  !*** ./src/js/psp/applepay.js ***!
  \********************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nmodule.exports = /*#__PURE__*/function () {\n  function ApplePay(config) {\n    _classCallCheck(this, ApplePay);\n\n    this.config = config;\n  }\n\n  _createClass(ApplePay, [{\n    key: \"test\",\n    value: function test() {\n      console.log('ApplePay');\n      console.log(this.config);\n    }\n  }]);\n\n  return ApplePay;\n}();\n\n//# sourceURL=webpack://Wallet/./src/js/psp/applepay.js?");

/***/ }),

/***/ "./src/js/psp/googlepay.js":
/*!*********************************!*\
  !*** ./src/js/psp/googlepay.js ***!
  \*********************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nmodule.exports = /*#__PURE__*/function () {\n  function GooglePay(config) {\n    _classCallCheck(this, GooglePay);\n\n    this.config = config;\n  }\n\n  _createClass(GooglePay, [{\n    key: \"test\",\n    value: function test() {\n      console.log('GooglePay');\n      console.log(this.config);\n    }\n  }]);\n\n  return GooglePay;\n}();\n\n//# sourceURL=webpack://Wallet/./src/js/psp/googlepay.js?");

/***/ }),

/***/ "./src/js/wallet.js":
/*!**************************!*\
  !*** ./src/js/wallet.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GooglePay = __webpack_require__(/*! ./psp/googlepay */ \"./src/js/psp/googlepay.js\");\n\nvar ApplePay = __webpack_require__(/*! ./psp/applepay */ \"./src/js/psp/applepay.js\");\n\nmodule.exports = /*#__PURE__*/function () {\n  function Wallet(config) {\n    _classCallCheck(this, Wallet);\n\n    this.config = config;\n  }\n\n  _createClass(Wallet, [{\n    key: \"init\",\n    value: function init() {\n      console.log('wallet params');\n      console.log(this.config);\n    }\n  }, {\n    key: \"pay\",\n    value: function pay() {\n      var gp = new GooglePay(this.config);\n      gp.test();\n    }\n  }]);\n\n  return Wallet;\n}();\n\n//# sourceURL=webpack://Wallet/./src/js/wallet.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	Wallet = __webpack_exports__;
/******/ 	
/******/ })()
;