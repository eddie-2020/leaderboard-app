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

/***/ "./src/API.js":
/*!********************!*\
  !*** ./src/API.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendData\": () => (/* binding */ sendData),\n/* harmony export */   \"sendScore\": () => (/* binding */ sendScore),\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst nameInput = document.getElementById('inputKey');\r\nconst scoreInput = document.getElementById('inputValue');\r\n\r\nconst sendData = () => {\r\n  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JISCZSyYfIzlC6N08Rja/scores/', {\r\n    method: 'POST',\r\n    headers: {\r\n      Accept: 'application/json',\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({ name: 'God of war' }),\r\n  });\r\n};\r\nsendData();\r\n\r\nconst sendScore = () => {\r\n  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JISCZSyYfIzlC6N08Rja/scores/', {\r\n    method: 'POST',\r\n    headers: {\r\n      Accept: 'application/json',\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({ user: nameInput.value, score: scoreInput.value }),\r\n  });\r\n};\r\n\r\nconst getData = async () => {\r\n  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JISCZSyYfIzlC6N08Rja/scores/';\r\n  const data = await fetch(url);\r\n  const content = await data.json();\r\n  return content.result;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://Leaderboard-setup-Project/./src/API.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ \"./src/API.js\");\n\r\n\r\nconst inputKey = document.getElementById('inputKey');\r\nconst inputValue = document.getElementById('inputValue');\r\nconst btnInsert = document.getElementById('btnSubmit');\r\nconst lsOutput = document.getElementById('data');\r\nconst refresher = document.getElementById('btnRefresher');\r\n\r\nconst renderDataBoard = async () => {\r\n  const score = await (0,_API__WEBPACK_IMPORTED_MODULE_0__.getData)();\r\n  lsOutput.innerHTML = '';\r\n  score.forEach((item) => {\r\n    const newListData = `<li class='dataElement'> ${item.user} : ${item.score} </li><br/>`;\r\n    lsOutput.innerHTML += newListData;\r\n  });\r\n};\r\n\r\nconst createNewGame = async () => {\r\n  await (0,_API__WEBPACK_IMPORTED_MODULE_0__.sendData)();\r\n  renderDataBoard();\r\n};\r\ncreateNewGame();\r\n\r\nrefresher.addEventListener('click', () => {\r\n  lsOutput.innerHTML = '';\r\n  renderDataBoard();\r\n});\r\n\r\nbtnInsert.addEventListener('click', async (e) => {\r\n  e.preventDefault();\r\n  await (0,_API__WEBPACK_IMPORTED_MODULE_0__.sendScore)();\r\n  inputKey.value = '';\r\n  inputValue.value = '';\r\n});\r\nrenderDataBoard();\n\n//# sourceURL=webpack://Leaderboard-setup-Project/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;