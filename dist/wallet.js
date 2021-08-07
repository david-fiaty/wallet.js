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

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nmodule.exports = /*#__PURE__*/function () {\n  function ApplePay(config) {\n    _classCallCheck(this, ApplePay);\n\n    this.config = config;\n  }\n\n  _createClass(ApplePay, [{\n    key: \"test\",\n    value: function test() {\n      console.log('ApplePay');\n      console.log(this.config);\n    }\n  }]);\n\n  return ApplePay;\n}();\n\n//# sourceURL=webpack://Wallet/./src/js/psp/applepay.js?");

/***/ }),

/***/ "./src/js/psp/googlepay.js":
/*!*********************************!*\
  !*** ./src/js/psp/googlepay.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar script = __webpack_require__(/*! scriptjs */ \"./node_modules/scriptjs/dist/script.js\");\n\nmodule.exports = /*#__PURE__*/function () {\n  function GooglePay(config) {\n    _classCallCheck(this, GooglePay);\n\n    this.config = config;\n  }\n\n  _createClass(GooglePay, [{\n    key: \"test\",\n    value: function test() {\n      var self = this;\n      script(\"https://pay.google.com/gp/p/js/pay.js\", function () {\n        // Initialize Google Pay\n        console.log('GooglePay');\n        console.log(self.config);\n      });\n    }\n  }]);\n\n  return GooglePay;\n}();\n\n//# sourceURL=webpack://Wallet/./src/js/psp/googlepay.js?");

/***/ }),

/***/ "./src/js/wallet.js":
/*!**************************!*\
  !*** ./src/js/wallet.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GooglePay = __webpack_require__(/*! psp/googlepay */ \"./src/js/psp/googlepay.js\");\n\nvar ApplePay = __webpack_require__(/*! psp/applepay */ \"./src/js/psp/applepay.js\");\n\nmodule.exports = /*#__PURE__*/function () {\n  function Wallet(config) {\n    _classCallCheck(this, Wallet);\n\n    this.config = config;\n  }\n\n  _createClass(Wallet, [{\n    key: \"pay\",\n    value: function pay() {\n      var gp = new GooglePay(this.config);\n      gp.test();\n    }\n  }]);\n\n  return Wallet;\n}();\n\n//# sourceURL=webpack://Wallet/./src/js/wallet.js?");

/***/ }),

/***/ "./node_modules/scriptjs/dist/script.js":
/*!**********************************************!*\
  !*** ./node_modules/scriptjs/dist/script.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  * $script.js JS loader & dependency manager\n  * https://github.com/ded/script.js\n  * (c) Dustin Diaz 2014 | License MIT\n  */\n\n(function (name, definition) {\n  if ( true && module.exports) module.exports = definition()\n  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n  else {}\n})('$script', function () {\n  var doc = document\n    , head = doc.getElementsByTagName('head')[0]\n    , s = 'string'\n    , f = false\n    , push = 'push'\n    , readyState = 'readyState'\n    , onreadystatechange = 'onreadystatechange'\n    , list = {}\n    , ids = {}\n    , delay = {}\n    , scripts = {}\n    , scriptpath\n    , urlArgs\n\n  function every(ar, fn) {\n    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f\n    return 1\n  }\n  function each(ar, fn) {\n    every(ar, function (el) {\n      fn(el)\n      return 1\n    })\n  }\n\n  function $script(paths, idOrDone, optDone) {\n    paths = paths[push] ? paths : [paths]\n    var idOrDoneIsDone = idOrDone && idOrDone.call\n      , done = idOrDoneIsDone ? idOrDone : optDone\n      , id = idOrDoneIsDone ? paths.join('') : idOrDone\n      , queue = paths.length\n    function loopFn(item) {\n      return item.call ? item() : list[item]\n    }\n    function callback() {\n      if (!--queue) {\n        list[id] = 1\n        done && done()\n        for (var dset in delay) {\n          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])\n        }\n      }\n    }\n    setTimeout(function () {\n      each(paths, function loading(path, force) {\n        if (path === null) return callback()\n        \n        if (!force && !/^https?:\\/\\//.test(path) && scriptpath) {\n          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;\n        }\n        \n        if (scripts[path]) {\n          if (id) ids[id] = 1\n          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)\n        }\n\n        scripts[path] = 1\n        if (id) ids[id] = 1\n        create(path, callback)\n      })\n    }, 0)\n    return $script\n  }\n\n  function create(path, fn) {\n    var el = doc.createElement('script'), loaded\n    el.onload = el.onerror = el[onreadystatechange] = function () {\n      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;\n      el.onload = el[onreadystatechange] = null\n      loaded = 1\n      scripts[path] = 2\n      fn()\n    }\n    el.async = 1\n    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;\n    head.insertBefore(el, head.lastChild)\n  }\n\n  $script.get = create\n\n  $script.order = function (scripts, id, done) {\n    (function callback(s) {\n      s = scripts.shift()\n      !scripts.length ? $script(s, id, done) : $script(s, callback)\n    }())\n  }\n\n  $script.path = function (p) {\n    scriptpath = p\n  }\n  $script.urlArgs = function (str) {\n    urlArgs = str;\n  }\n  $script.ready = function (deps, ready, req) {\n    deps = deps[push] ? deps : [deps]\n    var missing = [];\n    !each(deps, function (dep) {\n      list[dep] || missing[push](dep);\n    }) && every(deps, function (dep) {return list[dep]}) ?\n      ready() : !function (key) {\n      delay[key] = delay[key] || []\n      delay[key][push](ready)\n      req && req(missing)\n    }(deps.join('|'))\n    return $script\n  }\n\n  $script.done = function (idOrDone) {\n    $script([null], idOrDone)\n  }\n\n  return $script\n});\n\n\n//# sourceURL=webpack://Wallet/./node_modules/scriptjs/dist/script.js?");

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