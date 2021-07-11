/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant-odin/./src/style.css?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./includes.js */ \"./src/includes.js\");\n\n\nfunction createTitle() {\n\tconst header = document.createElement('header');\n\tconst title = document.createElement('h1');\n\tconst subtitle = document.createElement('p');\n\tconst container = (0,_includes_js__WEBPACK_IMPORTED_MODULE_0__.createContainer)();\n\ttitle.setAttribute(\"id\", \"title\");\n\tsubtitle.setAttribute(\"id\", \"sub-title\");\n\theader.setAttribute(\"id\", \"header\");\n\n\ttitle.innerText = \"The Nusantara Spices\";\n\tsubtitle.innerHTML = \"High class Indonesian Restaurant, <br>with affordable price.\";\n\n\tcontainer.appendChild(title);\n\tcontainer.appendChild(subtitle);\n\n\theader.appendChild(container);\n\treturn header;\n}\n\nfunction render() {\n\tconst main = document.createElement('div');\n\tmain.setAttribute(\"id\", \"home\");\n\tmain.appendChild(createTitle());\n\treturn main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n\n\n//# sourceURL=webpack://restaurant-odin/./src/home.js?");

/***/ }),

/***/ "./src/includes.js":
/*!*************************!*\
  !*** ./src/includes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContainer\": () => (/* binding */ createContainer),\n/* harmony export */   \"nav\": () => (/* binding */ nav)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nfunction createContainer() {\n\tconst div = document.createElement('div');\n\tdiv.classList.add(\"container\");\n\treturn div;\n}\nconst nav = (() => {\n\tlet navContent = [\n\t\t\"Home\",\n\t\t\"Menu\",\n\t\t\"Contact\",\n\t]\n\n\tfunction addItem(text) {\n\t\tlet link = document.createElement(\"a\")\n\t\tlet item = document.createElement(\"li\");\n\t\tlink.innerText = text;\n\t\titem.href = \"#\";\n\t\titem.addEventListener(\"click\", () => _index_js__WEBPACK_IMPORTED_MODULE_0__.DOM.render(text))\n\t\titem.appendChild(link);\n\t\titem.classList.add(\"nav-item\");\n\t\treturn item;\n\t} \n\n\tfunction create() {\n\t\tlet nav = document.createElement(\"nav\");\n\t\tlet ul = document.createElement(\"ul\");\n\t\tnav.setAttribute(\"id\", \"nav-bar\");\n\t\tul.setAttribute(\"id\", \"nav-list\");\n\n\t\tnavContent.forEach(item => {\n\t\t\tul.appendChild(addItem(item));\n\t\t});\n\n\t\tnav.appendChild(ul);\n\t\treturn nav;\n\t}\n\n\treturn {\n\t\tcreate,\n\t}\n})();\n\n\n\n//# sourceURL=webpack://restaurant-odin/./src/includes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOM\": () => (/* binding */ DOM)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./includes.js */ \"./src/includes.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\"use strict\";\n\nconst DOM = (() => {\n\tconst main = document.querySelector('#content');\n\tconst body = document.getElementsByTagName(\"body\")[0];\n\tconst render = (item) => {\n\t\titem = item.toLowerCase();\n\t\tif (main.innerHTML) {\n\t\t\tmain.innerHTML = \"\";\n\t\t}\n\t\tswitch (item) {\n\t\t\tcase 'home': main.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)()); break;\n\t\t\tdefault: console.warn(\"There's no element with that name\"); break;\n\t\t}\n\t\t\n\t}\n\tconst init = () => {\n\t\tbody.appendChild(_includes_js__WEBPACK_IMPORTED_MODULE_1__.nav.create());\n\t\trender(\"home\");\n\t}\n\treturn {\n\t\tinit,\n\t\trender,\n\t}\n})();\n\nDOM.init()\n\n\n//# sourceURL=webpack://restaurant-odin/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;