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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendData\": () => (/* binding */ sendData),\n/* harmony export */   \"sendScore\": () => (/* binding */ sendScore),\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst nameInput = document.getElementById('inputKey');\nconst scoreInput = document.getElementById('inputValue');\n\nconst sendData = () => {\n  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JISCZSyYfIzlC6N08Rja/scores/', {\n    method: 'POST',\n    headers: {\n      Accept: 'application/json',\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ name: 'God of war' }),\n  });\n};\nsendData();\n\nconst sendScore = () => {\n  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JISCZSyYfIzlC6N08Rja/scores/', {\n    method: 'POST',\n    headers: {\n      Accept: 'application/json',\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ user: nameInput.value, score: scoreInput.value }),\n  });\n};\n\nconst getData = async () => {\n  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JISCZSyYfIzlC6N08Rja/scores/';\n  const data = await fetch(url);\n  const content = await data.json();\n  return content.result;\n};\n\n\n\n//# sourceURL=webpack://Leaderboard-setup-Project/./src/API.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ \"./src/API.js\");\n\n\nconst inputKey = document.getElementById('inputKey');\nconst inputValue = document.getElementById('inputValue');\nconst btnInsert = document.getElementById('btnSubmit');\nconst lsOutput = document.getElementById('data');\nconst refresher = document.getElementById('btnRefresher');\n\nconst renderDataBoard = async () => {\n  const score = await (0,_API__WEBPACK_IMPORTED_MODULE_0__.getData)();\n  lsOutput.innerHTML = '';\n  score.forEach((item) => {\n    const newListData = `<li class='dataElement'> ${item.user} : ${item.score} </li><br/>`;\n    lsOutput.innerHTML += newListData;\n  });\n};\n\nconst createNewGame = async () => {\n  await (0,_API__WEBPACK_IMPORTED_MODULE_0__.sendData)();\n  renderDataBoard();\n};\ncreateNewGame();\n\nrefresher.addEventListener('click', () => {\n  lsOutput.innerHTML = '';\n  renderDataBoard();\n});\n\nbtnInsert.addEventListener('click', async (e) => {\n  e.preventDefault();\n  await (0,_API__WEBPACK_IMPORTED_MODULE_0__.sendScore)();\n  inputKey.value = '';\n  inputValue.value = '';\n});\nrenderDataBoard();\n\n//# sourceURL=webpack://Leaderboard-setup-Project/./src/index.js?");

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