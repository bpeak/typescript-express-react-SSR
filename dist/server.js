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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/react/App.tsx":
/*!***************************!*\
  !*** ./src/react/App.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\n//components\r\nconst HomePage_1 = __webpack_require__(/*! ~components/pages/HomePage/HomePage */ \"./src/react/components/pages/HomePage/HomePage.tsx\");\r\nconst PostsPage_1 = __webpack_require__(/*! ~components/pages/PostsPage/PostsPage */ \"./src/react/components/pages/PostsPage/PostsPage.tsx\");\r\nclass App extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        const isBrowser = process.env.isBrowser;\r\n        if (isBrowser) {\r\n            console.log('run in browser');\r\n        }\r\n        else {\r\n            console.log('run in server');\r\n        }\r\n    }\r\n    render() {\r\n        return (React.createElement(\"div\", null,\r\n            React.createElement(\"h1\", null, \"REACT SERVER SIDE RENDERING\"),\r\n            React.createElement(\"div\", null,\r\n                React.createElement(\"div\", null,\r\n                    React.createElement(react_router_dom_1.Link, { to: \"/\" }, \"\\uD648\")),\r\n                React.createElement(\"div\", null,\r\n                    React.createElement(react_router_dom_1.Link, { to: \"/posts\" }, \"\\uD3EC\\uC2A4\\uD2B8\\uC2A4\"))),\r\n            React.createElement(react_router_1.Route, { exact: true, path: \"/\", component: HomePage_1.default }),\r\n            React.createElement(react_router_1.Route, { exact: true, path: \"/posts\", component: PostsPage_1.default })));\r\n    }\r\n}\r\nexports.default = App;\r\n\n\n//# sourceURL=webpack:///./src/react/App.tsx?");

/***/ }),

/***/ "./src/react/assets/55.jpg":
/*!*********************************!*\
  !*** ./src/react/assets/55.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/public/imgs/55.jpg\";\n\n//# sourceURL=webpack:///./src/react/assets/55.jpg?");

/***/ }),

/***/ "./src/react/components/pages/HomePage/HomePage.scss":
/*!***********************************************************!*\
  !*** ./src/react/components/pages/HomePage/HomePage.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"title\": \"HomePage__title--K0Ohz\"\n};\n\n//# sourceURL=webpack:///./src/react/components/pages/HomePage/HomePage.scss?");

/***/ }),

/***/ "./src/react/components/pages/HomePage/HomePage.tsx":
/*!**********************************************************!*\
  !*** ./src/react/components/pages/HomePage/HomePage.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst classNames = __webpack_require__(/*! classnames/bind */ \"classnames/bind\");\r\n//styles\r\nconst styles = __webpack_require__(/*! ./HomePage.scss */ \"./src/react/components/pages/HomePage/HomePage.scss\");\r\nconst cx = classNames.bind(styles);\r\n//assets\r\nconst homeImg = __webpack_require__(/*! ~assets/55.jpg */ \"./src/react/assets/55.jpg\");\r\nclass HomePage extends React.PureComponent {\r\n    constructor(props) {\r\n        super(props);\r\n    }\r\n    render() {\r\n        return (React.createElement(\"div\", { className: cx('title') },\r\n            React.createElement(\"img\", { src: homeImg })));\r\n    }\r\n}\r\nexports.default = HomePage;\r\n\n\n//# sourceURL=webpack:///./src/react/components/pages/HomePage/HomePage.tsx?");

/***/ }),

/***/ "./src/react/components/pages/PostsPage/PostsPage.tsx":
/*!************************************************************!*\
  !*** ./src/react/components/pages/PostsPage/PostsPage.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nclass PostsPage extends React.PureComponent {\r\n    render() {\r\n        return (React.createElement(\"div\", null, \"\\uD3EC\\uC2A4\\uD2B8\\uD398\\uC774\\uC9C0.\"));\r\n    }\r\n}\r\nexports.default = PostsPage;\r\n\n\n//# sourceURL=webpack:///./src/react/components/pages/PostsPage/PostsPage.tsx?");

/***/ }),

/***/ "./src/server/ExpressApp.ts":
/*!**********************************!*\
  !*** ./src/server/ExpressApp.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst express = __webpack_require__(/*! express */ \"express\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nconst render_1 = __webpack_require__(/*! ./render */ \"./src/server/render.tsx\");\r\nclass ExpressApp {\r\n    constructor() {\r\n        this.app = express();\r\n        this.parserSetup();\r\n        this.routerSetup();\r\n    }\r\n    parserSetup() {\r\n    }\r\n    routerSetup() {\r\n        this.app.use('/public', express.static(path.join(__dirname, '../../public')));\r\n        this.app.get('*', (req, res) => {\r\n            const url = req.url;\r\n            const rendered = render_1.default(url);\r\n            return res.send(rendered);\r\n        });\r\n    }\r\n}\r\nexports.default = ExpressApp;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, \"src\\\\server\"))\n\n//# sourceURL=webpack:///./src/server/ExpressApp.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ExpressApp_1 = __webpack_require__(/*! ./ExpressApp */ \"./src/server/ExpressApp.ts\");\r\nconst { app } = new ExpressApp_1.default();\r\nconst PORT = process.env.PORT ? Number(process.env.PORT) : 80;\r\napp.listen(PORT, () => {\r\n    console.log(`PORT ${PORT} CONNECTED SUCCESS!`);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/index.ts?");

/***/ }),

/***/ "./src/server/render.tsx":
/*!*******************************!*\
  !*** ./src/server/render.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\r\nconst react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\r\nconst App_1 = __webpack_require__(/*! ../react/App */ \"./src/react/App.tsx\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nconst fs = __webpack_require__(/*! fs */ \"fs\");\r\nconst render = (url) => {\r\n    const indexFile = fs.readFileSync(path.join(__dirname, '../../public/index.html'), { encoding: 'utf-8' });\r\n    const appRenderingResult = ReactDOMServer.renderToString(React.createElement(react_router_1.StaticRouter, { location: url },\r\n        React.createElement(App_1.default, null)));\r\n    const rendered = indexFile.replace('<div id=\"app-root\"></div>', `<div id=\"app-root\">${appRenderingResult}</div>`);\r\n    return rendered;\r\n};\r\nexports.default = render;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, \"src\\\\server\"))\n\n//# sourceURL=webpack:///./src/server/render.tsx?");

/***/ }),

/***/ "classnames/bind":
/*!**********************************!*\
  !*** external "classnames/bind" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames/bind\");\n\n//# sourceURL=webpack:///external_%22classnames/bind%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });