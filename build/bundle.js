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

/***/ "./02安装/index.js":
/*!***********************!*\
  !*** ./02安装/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\n// 渲染器\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer()\r\nrenderer.setSize(document.body.clientWidth, document.body.clientHeight)\r\ndocument.body.appendChild(renderer.domElement)\r\n\r\n\r\n// 摄像机\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, document.body.clientWidth/document.body.clientHeight, 1, 500)\r\ncamera.position.set(0, 0, 100)\r\ncamera.lookAt(0, 0, 0)\r\n\r\n// 场景\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene()\r\n\r\n\r\n//create a blue LineBasicMaterial\r\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial( { color: 0x0000ff } );\r\nconst points = [];\r\npoints.push( new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( - 10, 0, 0 ) );\r\npoints.push( new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( 0, 10, 0 ) );\r\npoints.push( new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( 10, 0, 0 ) );\r\n\r\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry().setFromPoints( points );\r\nconst line = new three__WEBPACK_IMPORTED_MODULE_0__.Line( geometry, material );\r\n\r\nscene.add( line );\r\nrenderer.render( scene, camera );\r\n\n\n//# sourceURL=webpack://three_note/./02%E5%AE%89%E8%A3%85/index.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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
/******/ 	var __webpack_exports__ = __webpack_require__("./02安装/index.js");
/******/ 	
/******/ })()
;