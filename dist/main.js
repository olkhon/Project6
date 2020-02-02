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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#app {\\n  display: grid;\\n  grid-auto-rows: minmax(150px, auto);\\n  /* grid-template-columns:  */\\n  height: 100vh;\\n  background: #f23557;\\n  color: #f0d43a;\\n  justify-content: center;\\n  grid-gap: 1em;\\n  font-size: 20px;\\n  font-family: 'Oswald', sans-serif; }\\n\\n.entry {\\n  background: rgba(59, 74, 107, 0.4); }\\n\\n/*  Basic Styling To Override Default For Basic HTML Elements */\\nlabel {\\n  font-size: 27px; }\\n\\ninput {\\n  height: 60px;\\n  width: 320px;\\n  background: #22b2da;\\n  color: #f0d43a;\\n  font-size: 20px;\\n  font-family: 'Oswald', sans-serif;\\n  border: none;\\n  text-align: center; }\\n\\nbutton {\\n  width: 100%;\\n  height: 100px;\\n  background: #3b4a6b;\\n  color: #f0d43a;\\n  font-size: 26px;\\n  font-family: 'Oswald', sans-serif;\\n  border: none;\\n  box-shadow: 2px 4px 5px #444; }\\n\\nh1 {\\n  font-size: 36px; }\\n\\ntextarea {\\n  background: #22b2da;\\n  color: #f0d43a;\\n  font-size: 20px;\\n  font-family: 'Oswald', sans-serif; }\\n\\n/* Reset style for HTML element on active to have no border*/\\ninput:focus,\\nselect:focus,\\ntextarea:focus,\\nbutton:focus {\\n  outline: none; }\\n\\n/* Style for Placeholder Text*/\\n::placeholder {\\n  /* Firefox, Chrome, Opera */\\n  color: #f0d43a;\\n  font-family: 'Oswald', sans-serif; }\\n\\n:-ms-input-placeholder {\\n  /* Internet Explorer 10-11 */\\n  color: #f0d43a;\\n  font-family: 'Oswald', sans-serif; }\\n\\n::-ms-input-placeholder {\\n  /* Microsoft Edge */\\n  color: #f0d43a;\\n  font-family: 'Oswald', sans-serif; }\\n\\n#imgTagPixabay {\\n  height: 300px;\\n  width: 300px; }\\n\\n.grid-container {\\n  display: inline-grid;\\n  grid-template-columns: auto auto auto;\\n  padding: 10px; }\\n\\n.grid-item {\\n  padding: 20px;\\n  text-align: center; }\\n\\n.divh1,\\n.divButton {\\n  text-align: center; }\\n\\n.margin-small-bottom {\\n  margin-bottom: 5px; }\\n\\n.grid-container-2 {\\n  display: inline-grid;\\n  grid-template-columns: auto auto;\\n  padding: 10px; }\\n\\n.grid-item-2 {\\n  padding: 20px;\\n  text-align: center; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/client/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: performAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_indexscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/indexscript.js */ \"./src/client/js/indexscript.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"performAction\", function() { return _js_indexscript_js__WEBPACK_IMPORTED_MODULE_0__[\"performAction\"]; });\n\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/client/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/deleteJourney.js":
/*!****************************************!*\
  !*** ./src/client/js/deleteJourney.js ***!
  \****************************************/
/*! exports provided: deleteJourney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteJourney\", function() { return deleteJourney; });\nfunction deleteJourney() {\r\n\r\n    document.getElementById('deleteButton').addEventListener('click', function() {\r\n        document.getElementById('picDiv').innerHTML = \"\";\r\n        document.getElementById('textDiv').innerHTML = \"\";\r\n        document.getElementById(\"deleteButton\").remove();\r\n        document.getElementById(\"printButton\").remove();\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/client/js/deleteJourney.js?");

/***/ }),

/***/ "./src/client/js/indexscript.js":
/*!**************************************!*\
  !*** ./src/client/js/indexscript.js ***!
  \**************************************/
/*! exports provided: performAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"performAction\", function() { return performAction; });\n/* harmony import */ var _updateGui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateGui.js */ \"./src/client/js/updateGui.js\");\n/* harmony import */ var _printTravelData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printTravelData */ \"./src/client/js/printTravelData.js\");\n/* Imports */\r\n\r\n\r\n\r\n\r\n// add Listener for button with id generate\r\n\r\ndocument.getElementById('generate').addEventListener('click', performAction);\r\n\r\n// Function posts data from \r\n\r\nfunction performAction(e) {\r\n\r\n\r\n    // getting the input from field city and the user\r\n    const newCity = document.getElementById('city').value;\r\n    const newDateArrival = new Date(document.getElementById('arrival').value).getTime() / 1000;\r\n    const newDateDeparture = new Date(document.getElementById('departure').value).getTime() / 1000;\r\n    const newCurrentTime = (new Date().getTime() / 1000).toFixed(0);\r\n    // 60*60*24 = 86400 in order to get days\r\n    const newCountdown = ((newDateArrival - newCurrentTime) / 86400).toFixed(0);\r\n    const newDuration = ((newDateDeparture - newDateArrival) / 86400).toFixed(0);\r\n\r\n\r\n    console.log(newCurrentTime);\r\n\r\n\r\n\r\n\r\n    /* Function to POST data from clientside to server-side out of the box method */\r\n    const postData = async(url = '/city', data = {}) => {\r\n        console.log(data)\r\n        const response = await fetch(url, {\r\n            method: 'POST', // *GET, POST, PUT, DELETE, etc.\r\n            credentials: 'same-origin', // include, *same-origin, omit\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify(data), // body data type must match \"Content-Type\" header        \r\n        });\r\n\r\n        try {\r\n            const newData = await response.json();\r\n            // console.log(newData);\r\n            return newData\r\n        } catch (error) {\r\n            console.log(\"error\", error);\r\n            // appropriately handle the error\r\n        }\r\n    }\r\n\r\n    const resultsForm = {\r\n        city: newCity,\r\n        arrival: newDateArrival,\r\n        departure: newDateDeparture,\r\n        countdown: newCountdown,\r\n        duration: newDuration,\r\n        current: newCurrentTime,\r\n    }\r\n\r\n    console.log(resultsForm)\r\n\r\n    // calling postData function with parameters url and value of city\r\n    //working version\r\n    postData('http://localhost:5501/addCity', resultsForm)\r\n        .then(data => {\r\n            console.log('returned data', data);\r\n            Object(_updateGui_js__WEBPACK_IMPORTED_MODULE_0__[\"updateGui\"])(data)\r\n        })\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/client/js/indexscript.js?");

/***/ }),

/***/ "./src/client/js/printTravelData.js":
/*!******************************************!*\
  !*** ./src/client/js/printTravelData.js ***!
  \******************************************/
/*! exports provided: printTravelData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printTravelData\", function() { return printTravelData; });\n/* function to print only the relevant travel data for the trip, in this case content of div datacontainer\r\nfunction logic originally found on https://gist.github.com/andrewlimaza/490a69417d9fe2df3f668195a7661605 \r\n\r\n*/\r\n\r\n\r\nfunction printTravelData() {\r\n\r\n    document.getElementById('printButton').addEventListener('click', function() {\r\n        let toBePrinted = document.getElementById('dataContainer').innerHTML;\r\n        let allContent = document.body.innerHTML;\r\n\r\n        document.body.innerHTML = toBePrinted;\r\n\r\n        window.print();\r\n\r\n        document.body.innerHTML = allContent;\r\n    });\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/client/js/printTravelData.js?");

/***/ }),

/***/ "./src/client/js/updateGui.js":
/*!************************************!*\
  !*** ./src/client/js/updateGui.js ***!
  \************************************/
/*! exports provided: updateGui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateGui\", function() { return updateGui; });\n/* harmony import */ var _deleteJourney__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteJourney */ \"./src/client/js/deleteJourney.js\");\n/* harmony import */ var _printTravelData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printTravelData */ \"./src/client/js/printTravelData.js\");\n\r\n\r\n\r\nasync function updateGui(data) {\r\n    let days;\r\n\r\n    if (data.duration > 1) {\r\n        days = 'days';\r\n\r\n    } else {\r\n        days = 'day';\r\n    }\r\n\r\n    console.log(data);\r\n\r\n    if (data.countdown == 0) {\r\n        const deleteButton = document.createElement(\"BUTTON\");\r\n        deleteButton.setAttribute(\"id\", \"deleteButton\");\r\n        deleteButton.innerHTML = \"Delete current travel data\";\r\n        document.getElementById(\"removeButton\").appendChild(deleteButton);\r\n\r\n        const printButton = document.createElement(\"BUTTON\");\r\n        printButton.setAttribute(\"id\", \"printButton\");\r\n        printButton.innerHTML = \"Print Travel Data\"\r\n        document.getElementById(\"printTravelData\").appendChild(printButton);\r\n\r\n        document.getElementById('picDiv').innerHTML = `<img src=\"${data.imageUrl}\" id=\"imgTagPixabay\">`;\r\n        document.getElementById('textDiv').innerHTML = `<p>${data.summary}</p>\r\n        <p>Temperature in ${data.city} will be ${data.temperature} Celcius.</p>\r\n        <p>Your trip to ${data.city} starts tomorrow.</p>\r\n        <p>Your trip will last in total ${data.duration} ${days}.</p>`;\r\n    } else {\r\n\r\n        const deleteButton = document.createElement(\"BUTTON\");\r\n        deleteButton.setAttribute(\"id\", \"deleteButton\");\r\n        deleteButton.innerHTML = \"Delete current travel data\";\r\n        document.getElementById(\"removeButton\").appendChild(deleteButton);\r\n\r\n        const printButton = document.createElement(\"BUTTON\");\r\n        printButton.setAttribute(\"id\", \"printButton\");\r\n        printButton.innerHTML = \"Print Travel Data\"\r\n        document.getElementById(\"printTravelData\").appendChild(printButton);\r\n\r\n        document.getElementById('picDiv').innerHTML = `<img src=\"${data.imageUrl}\" id=\"imgTagPixabay\">`;\r\n        document.getElementById('textDiv').innerHTML = `<p>${data.summary}</p>\r\n        <p>Temperature in ${data.city} will be ${data.temperature} Celcius.</p>\r\n        <p>Your trip to ${data.city} starts in ${data.countdown} days.</p>\r\n        <p>Your trip will last in total ${data.duration} ${days}.</p>`;\r\n    }\r\n\r\n\r\n    Object(_deleteJourney__WEBPACK_IMPORTED_MODULE_0__[\"deleteJourney\"])();\r\n    Object(_printTravelData__WEBPACK_IMPORTED_MODULE_1__[\"printTravelData\"])();\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/client/js/updateGui.js?");

/***/ }),

/***/ "./src/client/styles/style.scss":
/*!**************************************!*\
  !*** ./src/client/styles/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/client/styles/style.scss?");

/***/ })

/******/ });