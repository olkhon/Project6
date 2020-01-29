/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#app {\\n  display: grid;\\n  grid-auto-rows: minmax(150px, auto);\\n  /* grid-template-columns:  */\\n  height: 100vh;\\n  background: #f23557;\\n  color: #f0d43a;\\n  justify-content: center;\\n  grid-gap: 1em;\\n  font-size: 20px;\\n  font-family: 'Oswald', sans-serif; }\\n\\n.entry {\\n  background: rgba(59, 74, 107, 0.4); }\\n\\n/*  Basic Styling To Override Default For Basic HTML Elements */\\nlabel {\\n  font-size: 27px; }\\n\\ninput {\\n  height: 60px;\\n  width: 320px;\\n  background: #22b2da;\\n  color: #f0d43a;\\n  font-size: 20px;\\n  font-family: 'Oswald', sans-serif;\\n  border: none; }\\n\\nbutton {\\n  width: 100%;\\n  height: 100px;\\n  background: #3b4a6b;\\n  color: #f0d43a;\\n  font-size: 26px;\\n  font-family: 'Oswald', sans-serif;\\n  border: none;\\n  box-shadow: 2px 4px 5px #444; }\\n\\nh1 {\\n  font-size: 36px; }\\n\\ntextarea {\\n  background: #22b2da;\\n  color: #f0d43a;\\n  font-size: 20px;\\n  font-family: 'Oswald', sans-serif; }\\n\\n/* Reset style for HTML element on active to have no border*/\\ninput:focus,\\nselect:focus,\\ntextarea:focus,\\nbutton:focus {\\n  outline: none; }\\n\\n/* Style for Placeholder Text*/\\n::placeholder {\\n  /* Firefox, Chrome, Opera */\\n  color: #f0d43a;\\n  font-family: 'Oswald', sans-serif; }\\n\\n:-ms-input-placeholder {\\n  /* Internet Explorer 10-11 */\\n  color: #f0d43a;\\n  font-family: 'Oswald', sans-serif; }\\n\\n::-ms-input-placeholder {\\n  /* Microsoft Edge */\\n  color: #f0d43a;\\n  font-family: 'Oswald', sans-serif; }\\n\\n#imgTagPixabay {\\n  height: 100px;\\n  width: 100px; }\\n\\n.grid-container {\\n  display: inline-grid;\\n  grid-template-columns: auto auto auto;\\n  padding: 10px; }\\n\\n.grid-item {\\n  padding: 20px;\\n  text-align: center; }\\n\\n.divh1,\\n.divButton {\\n  text-align: center; }\\n\\n.margin-small-bottom {\\n  margin-bottom: 5px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar isOldIE = function isOldIE() {\r\n  var memo;\r\n  return function memorize() {\r\n    if (typeof memo === 'undefined') {\r\n      // Test for IE <= 9 as proposed by Browserhacks\r\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\r\n      // Tests for existence of standard globals is to allow style-loader\r\n      // to operate correctly into non-standard environments\r\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\r\n      memo = Boolean(window && document && document.all && !window.atob);\r\n    }\r\n\r\n    return memo;\r\n  };\r\n}();\r\n\r\nvar getTarget = function getTarget() {\r\n  var memo = {};\r\n  return function memorize(target) {\r\n    if (typeof memo[target] === 'undefined') {\r\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n        try {\r\n          // This will throw an exception if access to iframe is blocked\r\n          // due to cross-origin restrictions\r\n          styleTarget = styleTarget.contentDocument.head;\r\n        } catch (e) {\r\n          // istanbul ignore next\r\n          styleTarget = null;\r\n        }\r\n      }\r\n\r\n      memo[target] = styleTarget;\r\n    }\r\n\r\n    return memo[target];\r\n  };\r\n}();\r\n\r\nvar stylesInDom = {};\r\n\r\nfunction modulesToDom(moduleId, list, options) {\r\n  for (var i = 0; i < list.length; i++) {\r\n    var part = {\r\n      css: list[i][1],\r\n      media: list[i][2],\r\n      sourceMap: list[i][3]\r\n    };\r\n\r\n    if (stylesInDom[moduleId][i]) {\r\n      stylesInDom[moduleId][i](part);\r\n    } else {\r\n      stylesInDom[moduleId].push(addStyle(part, options));\r\n    }\r\n  }\r\n}\r\n\r\nfunction insertStyleElement(options) {\r\n  var style = document.createElement('style');\r\n  var attributes = options.attributes || {};\r\n\r\n  if (typeof attributes.nonce === 'undefined') {\r\n    var nonce =  true ? __webpack_require__.nc : undefined;\r\n\r\n    if (nonce) {\r\n      attributes.nonce = nonce;\r\n    }\r\n  }\r\n\r\n  Object.keys(attributes).forEach(function (key) {\r\n    style.setAttribute(key, attributes[key]);\r\n  });\r\n\r\n  if (typeof options.insert === 'function') {\r\n    options.insert(style);\r\n  } else {\r\n    var target = getTarget(options.insert || 'head');\r\n\r\n    if (!target) {\r\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n    }\r\n\r\n    target.appendChild(style);\r\n  }\r\n\r\n  return style;\r\n}\r\n\r\nfunction removeStyleElement(style) {\r\n  // istanbul ignore if\r\n  if (style.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  style.parentNode.removeChild(style);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nvar replaceText = function replaceText() {\r\n  var textStore = [];\r\n  return function replace(index, replacement) {\r\n    textStore[index] = replacement;\r\n    return textStore.filter(Boolean).join('\\n');\r\n  };\r\n}();\r\n\r\nfunction applyToSingletonTag(style, index, remove, obj) {\r\n  var css = remove ? '' : obj.css; // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n  if (style.styleSheet) {\r\n    style.styleSheet.cssText = replaceText(index, css);\r\n  } else {\r\n    var cssNode = document.createTextNode(css);\r\n    var childNodes = style.childNodes;\r\n\r\n    if (childNodes[index]) {\r\n      style.removeChild(childNodes[index]);\r\n    }\r\n\r\n    if (childNodes.length) {\r\n      style.insertBefore(cssNode, childNodes[index]);\r\n    } else {\r\n      style.appendChild(cssNode);\r\n    }\r\n  }\r\n}\r\n\r\nfunction applyToTag(style, options, obj) {\r\n  var css = obj.css;\r\n  var media = obj.media;\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (media) {\r\n    style.setAttribute('media', media);\r\n  } else {\r\n    style.removeAttribute('media');\r\n  }\r\n\r\n  if (sourceMap && btoa) {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  if (style.styleSheet) {\r\n    style.styleSheet.cssText = css;\r\n  } else {\r\n    while (style.firstChild) {\r\n      style.removeChild(style.firstChild);\r\n    }\r\n\r\n    style.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nvar singleton = null;\r\nvar singletonCounter = 0;\r\n\r\nfunction addStyle(obj, options) {\r\n  var style;\r\n  var update;\r\n  var remove;\r\n\r\n  if (options.singleton) {\r\n    var styleIndex = singletonCounter++;\r\n    style = singleton || (singleton = insertStyleElement(options));\r\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\r\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\r\n  } else {\r\n    style = insertStyleElement(options);\r\n    update = applyToTag.bind(null, style, options);\r\n\r\n    remove = function remove() {\r\n      removeStyleElement(style);\r\n    };\r\n  }\r\n\r\n  update(obj);\r\n  return function updateStyle(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\r\n        return;\r\n      }\r\n\r\n      update(obj = newObj);\r\n    } else {\r\n      remove();\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = function (moduleId, list, options) {\r\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\r\n  // tags it will allow on a page\r\n\r\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\r\n    options.singleton = isOldIE();\r\n  }\r\n\r\n  moduleId = options.base ? moduleId + options.base : moduleId;\r\n  list = list || [];\r\n\r\n  if (!stylesInDom[moduleId]) {\r\n    stylesInDom[moduleId] = [];\r\n  }\r\n\r\n  modulesToDom(moduleId, list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\r\n      return;\r\n    }\r\n\r\n    if (!stylesInDom[moduleId]) {\r\n      stylesInDom[moduleId] = [];\r\n    }\r\n\r\n    modulesToDom(moduleId, newList, options);\r\n\r\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\r\n      stylesInDom[moduleId][j]();\r\n    }\r\n\r\n    stylesInDom[moduleId].length = newList.length;\r\n\r\n    if (stylesInDom[moduleId].length === 0) {\r\n      delete stylesInDom[moduleId];\r\n    }\r\n  };\r\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: performAction, updateGui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_indexscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/indexscript.js */ \"./src/client/js/indexscript.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"performAction\", function() { return _js_indexscript_js__WEBPACK_IMPORTED_MODULE_0__[\"performAction\"]; });\n\n/* harmony import */ var _js_updateGui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/updateGui.js */ \"./src/client/js/updateGui.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"updateGui\", function() { return _js_updateGui_js__WEBPACK_IMPORTED_MODULE_1__[\"updateGui\"]; });\n\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/client/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/indexscript.js":
/*!**************************************!*\
  !*** ./src/client/js/indexscript.js ***!
  \**************************************/
/*! exports provided: performAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"performAction\", function() { return performAction; });\n/* harmony import */ var _updateGui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateGui.js */ \"./src/client/js/updateGui.js\");\n/* Global Variables */\r\n\r\n// add Listener for button with id generate\r\n\r\ndocument.getElementById('generate').addEventListener('click', performAction);\r\n\r\n\r\n// Function posts data from \r\n\r\nfunction performAction(e) {\r\n\r\n\r\n    // getting the input from field city and the user\r\n    const newCity = document.getElementById('city').value;\r\n    const newDateArrival = new Date(document.getElementById('arrival').value).getTime() / 1000;\r\n    const newDateDeparture = new Date(document.getElementById('departure').value).getTime() / 1000;\r\n    const currentTime = new Date().getTime() / 1000;\r\n    console.log(currentTime);\r\n\r\n\r\n    /* Function to POST data from clientside to server-side out of the box method */\r\n    const postData = async(url = '/city', data = {}) => {\r\n        console.log(data)\r\n        const response = await fetch(url, {\r\n            method: 'POST', // *GET, POST, PUT, DELETE, etc.\r\n            credentials: 'same-origin', // include, *same-origin, omit\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify(data), // body data type must match \"Content-Type\" header        \r\n        });\r\n\r\n        try {\r\n            const newData = await response.json();\r\n            // console.log(newData);\r\n            return newData\r\n        } catch (error) {\r\n            console.log(\"error\", error);\r\n            // appropriately handle the error\r\n        }\r\n    }\r\n\r\n    const resultsForm = {\r\n        city: newCity,\r\n        arrival: newDateArrival,\r\n        departure: newDateDeparture,\r\n    }\r\n\r\n    console.log(resultsForm)\r\n\r\n    // calling postData function with parameters url and value of city\r\n    //working version\r\n    postData('http://localhost:5501/addCity', resultsForm)\r\n        .then(data => {\r\n            console.log('returned data', data);\r\n            Object(_updateGui_js__WEBPACK_IMPORTED_MODULE_0__[\"updateGui\"])(data)\r\n        })\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/client/js/indexscript.js?");

/***/ }),

/***/ "./src/client/js/updateGui.js":
/*!************************************!*\
  !*** ./src/client/js/updateGui.js ***!
  \************************************/
/*! exports provided: updateGui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateGui\", function() { return updateGui; });\nasync function updateGui(data) {\r\n    /*\r\n        const fetch = require('node-fetch');\r\n        const req = await fetch('http://localhost:5501/retrievedData')\r\n\r\n        try {\r\n            const retrievedData = await req.json();\r\n            console.log(retrievedData);\r\n            document.getElementById('imageContainer').innerHTML = `${retrievedData.temperature}`;\r\n\r\n        } catch (error) {\r\n            console.log('error', error)\r\n        }\r\n        */\r\n    console.log(data);\r\n    document.getElementById('imageContainer').innerHTML = `<img src=\"${data.imageUrl}\" id=\"imgTagPixabay\">`;\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/client/js/updateGui.js?");

/***/ }),

/***/ "./src/client/styles/style.scss":
/*!**************************************!*\
  !*** ./src/client/styles/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/client/styles/style.scss?");

/***/ })

/******/ });