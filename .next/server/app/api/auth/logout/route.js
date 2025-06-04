"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/logout/route";
exports.ids = ["app/api/auth/logout/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_gonza_db2tpo_backend_src_app_api_auth_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/logout/route.ts */ \"(rsc)/./src/app/api/auth/logout/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/logout/route\",\n        pathname: \"/api/auth/logout\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/logout/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\gonza\\\\db2tpo\\\\backend\\\\src\\\\app\\\\api\\\\auth\\\\logout\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_gonza_db2tpo_backend_src_app_api_auth_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/logout/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9nb3V0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGbG9nb3V0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRmxvZ291dCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNnb256YSU1Q2RiMnRwbyU1Q2JhY2tlbmQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2dvbnphJTVDZGIydHBvJTVDYmFja2VuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNzRDtBQUN2QztBQUNzQztBQUNyRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYjJ0cG8tYmFja2VuZC8/MmYwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJuZXh0L2Rpc3Qvc2VydmVyL25vZGUtcG9seWZpbGwtaGVhZGVyc1wiO1xuaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZ29uemFcXFxcZGIydHBvXFxcXGJhY2tlbmRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxsb2dvdXRcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbG9nb3V0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9sb2dvdXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvbG9nb3V0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZ29uemFcXFxcZGIydHBvXFxcXGJhY2tlbmRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxsb2dvdXRcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9sb2dvdXQvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/logout/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/auth/logout/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/middleware/auth */ \"(rsc)/./src/middleware/auth.ts\");\n/* harmony import */ var _lib_redis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/redis */ \"(rsc)/./src/lib/redis.ts\");\n\n\n\nasync function POST(request) {\n    const userId = (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_1__.getAuthenticatedUserId)(request);\n    if (!userId) return (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_1__.unauthorized)();\n    await (0,_lib_redis__WEBPACK_IMPORTED_MODULE_2__.deleteSession)(userId);\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        returnCode: \"SUCCESS\",\n        data: null,\n        message: \"Session deleted\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2xvZ291dC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQzhCO0FBQzdCO0FBR3JDLGVBQWVJLEtBQUtDLE9BQWdCO0lBQ3pDLE1BQU1DLFNBQVNMLHdFQUFzQkEsQ0FBQ0k7SUFDdEMsSUFBSSxDQUFDQyxRQUFRLE9BQU9KLDhEQUFZQTtJQUNoQyxNQUFNQyx5REFBYUEsQ0FBQ0c7SUFDcEIsT0FBT04sa0ZBQVlBLENBQUNPLElBQUksQ0FBYztRQUNwQ0MsWUFBWTtRQUNaQyxNQUFNO1FBQ05DLFNBQVM7SUFDWDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGIydHBvLWJhY2tlbmQvLi9zcmMvYXBwL2FwaS9hdXRoL2xvZ291dC9yb3V0ZS50cz9kMjY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgZ2V0QXV0aGVudGljYXRlZFVzZXJJZCwgdW5hdXRob3JpemVkIH0gZnJvbSAnQC9taWRkbGV3YXJlL2F1dGgnO1xyXG5pbXBvcnQgeyBkZWxldGVTZXNzaW9uIH0gZnJvbSAnQC9saWIvcmVkaXMnO1xyXG5pbXBvcnQgeyBBcGlSZXNwb25zZSB9IGZyb20gJ0AvdHlwZXMvYXBpJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICBjb25zdCB1c2VySWQgPSBnZXRBdXRoZW50aWNhdGVkVXNlcklkKHJlcXVlc3QpO1xyXG4gIGlmICghdXNlcklkKSByZXR1cm4gdW5hdXRob3JpemVkKCk7XHJcbiAgYXdhaXQgZGVsZXRlU2Vzc2lvbih1c2VySWQpO1xyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbjxBcGlSZXNwb25zZT4oe1xyXG4gICAgcmV0dXJuQ29kZTogJ1NVQ0NFU1MnLFxyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIG1lc3NhZ2U6ICdTZXNzaW9uIGRlbGV0ZWQnXHJcbiAgfSk7XHJcbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldEF1dGhlbnRpY2F0ZWRVc2VySWQiLCJ1bmF1dGhvcml6ZWQiLCJkZWxldGVTZXNzaW9uIiwiUE9TVCIsInJlcXVlc3QiLCJ1c2VySWQiLCJqc29uIiwicmV0dXJuQ29kZSIsImRhdGEiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/logout/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.ts":
/*!****************************!*\
  !*** ./src/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = \"mongodb+srv://db2:1234@db2tpo.u4ialfj.mongodb.net/?retryWrites=true&w=majority&appName=db2tpo\";\nasync function connectToDatabase() {\n    try {\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n            return (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            bufferCommands: false\n        });\n        return (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error);\n        throw error;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWM7QUFFYixlQUFlQztJQUNwQixJQUFJO1FBQ0YsSUFBSUYsNERBQW1CLENBQUNJLFVBQVUsS0FBSyxHQUFHO1lBQ3hDLE9BQU9KLGlEQUFRQTtRQUNqQjtRQUVBLE1BQU1BLHVEQUFnQixDQUFDQyxhQUFhO1lBQ2xDSyxnQkFBZ0I7UUFDbEI7UUFFQSxPQUFPTixpREFBUUE7SUFDakIsRUFBRSxPQUFPTyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO1FBQzNDLE1BQU1BO0lBQ1I7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2RiMnRwby1iYWNrZW5kLy4vc3JjL2xpYi9tb25nb2RiLnRzPzUzYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IE1PTkdPREJfVVJJID0gJ21vbmdvZGIrc3J2Oi8vZGIyOjEyMzRAZGIydHBvLnU0aWFsZmoubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPWRiMnRwbyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDEpIHtcclxuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIHtcclxuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsImJ1ZmZlckNvbW1hbmRzIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/redis.ts":
/*!**************************!*\
  !*** ./src/lib/redis.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToRedis: () => (/* binding */ connectToRedis),\n/* harmony export */   deleteCache: () => (/* binding */ deleteCache),\n/* harmony export */   deleteSession: () => (/* binding */ deleteSession),\n/* harmony export */   getCache: () => (/* binding */ getCache),\n/* harmony export */   getFavoriteRecipes: () => (/* binding */ getFavoriteRecipes),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   setCache: () => (/* binding */ setCache),\n/* harmony export */   setSession: () => (/* binding */ setSession),\n/* harmony export */   toggleFavoriteRecipe: () => (/* binding */ toggleFavoriteRecipe),\n/* harmony export */   updateRecentRecipes: () => (/* binding */ updateRecentRecipes)\n/* harmony export */ });\n/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ioredis */ \"(rsc)/./node_modules/ioredis/built/index.js\");\n/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ioredis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Recipe */ \"(rsc)/./src/models/Recipe.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.ts\");\n\n\n\nconst redis = new (ioredis__WEBPACK_IMPORTED_MODULE_0___default())(\"rediss://default:ATlUAAIjcDFiMWQzOTI4ZmZkMDY0NDM2OWQwYjRiNGYzYTYzNmE1Y3AxMA@good-asp-14676.upstash.io:6379\");\nconst SESSION_TTL = 30 * 24 * 60 * 60; // 30 days in seconds\nasync function getSession(userId) {\n    const sessionKey = `session:${userId}`;\n    const data = await redis.get(sessionKey);\n    return data ? JSON.parse(data) : null;\n}\nasync function setSession(userId, data) {\n    const sessionKey = `session:${userId}`;\n    await redis.set(sessionKey, JSON.stringify(data), \"EX\", SESSION_TTL);\n}\nasync function updateRecentRecipes(userId, recipeId) {\n    const sessionKey = `session:${userId}`;\n    const session = await getSession(userId);\n    if (session) {\n        const recentRecipes = new Set([\n            recipeId,\n            ...session.preferences.recentRecipes\n        ]);\n        session.preferences.recentRecipes = Array.from(recentRecipes).slice(0, 5); // Keep only last 5\n        await setSession(userId, session);\n    }\n}\nasync function deleteSession(userId) {\n    const sessionKey = `session:${userId}`;\n    await redis.del(sessionKey);\n}\nasync function connectToRedis() {\n    return redis;\n}\nasync function setCache(key, value, expirationInSeconds) {\n    if (expirationInSeconds) {\n        await redis.set(key, JSON.stringify(value), \"EX\", expirationInSeconds);\n    } else {\n        await redis.set(key, JSON.stringify(value));\n    }\n}\nasync function getCache(key) {\n    const value = await redis.get(key);\n    return value ? JSON.parse(value) : null;\n}\nasync function deleteCache(key) {\n    await redis.del(key);\n}\nasync function getFavoriteRecipes(userId) {\n    const session = await getSession(userId);\n    return session?.preferences.favoriteRecipes || [];\n}\nasync function toggleFavoriteRecipe(userId, recipeId) {\n    const session = await getSession(userId);\n    if (!session) return [];\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();\n    const recipe = await _models_Recipe__WEBPACK_IMPORTED_MODULE_1__.Recipe.findById(recipeId);\n    if (!recipe) return session.preferences.favoriteRecipes;\n    const recipeData = {\n        _id: recipe._id.toString(),\n        title: recipe.title,\n        ingredients: recipe.ingredients,\n        instructions: recipe.instructions,\n        ownerId: recipe.ownerId.toString(),\n        createdAt: recipe.createdAt\n    };\n    if (!session.preferences.favoriteRecipes) session.preferences.favoriteRecipes = [];\n    const exists = session.preferences.favoriteRecipes.some((r)=>r._id === recipeId);\n    if (exists) {\n        session.preferences.favoriteRecipes = session.preferences.favoriteRecipes.filter((r)=>r._id !== recipeId);\n    } else {\n        session.preferences.favoriteRecipes = [\n            recipeData,\n            ...session.preferences.favoriteRecipes\n        ];\n    }\n    await setSession(userId, session);\n    return session.preferences.favoriteRecipes;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsSUFBSSxDQUFDNUIsUUFBUUcsV0FBVyxDQUFDYyxlQUFlLEVBQUVqQixRQUFRRyxXQUFXLENBQUNjLGVBQWUsR0FBRyxFQUFFO0lBQ2xGLE1BQU1ZLFNBQVM3QixRQUFRRyxXQUFXLENBQUNjLGVBQWUsQ0FBQ2EsSUFBSSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFVCxHQUFHLEtBQUt2QjtJQUN2RSxJQUFJOEIsUUFBUTtRQUNWN0IsUUFBUUcsV0FBVyxDQUFDYyxlQUFlLEdBQUdqQixRQUFRRyxXQUFXLENBQUNjLGVBQWUsQ0FBQ2UsTUFBTSxDQUFDRCxDQUFBQSxJQUFLQSxFQUFFVCxHQUFHLEtBQUt2QjtJQUNsRyxPQUFPO1FBQ0xDLFFBQVFHLFdBQVcsQ0FBQ2MsZUFBZSxHQUFHO1lBQUNJO2VBQWVyQixRQUFRRyxXQUFXLENBQUNjLGVBQWU7U0FBQztJQUM1RjtJQUNBLE1BQU10QixXQUFXTixRQUFRVztJQUN6QixPQUFPQSxRQUFRRyxXQUFXLENBQUNjLGVBQWU7QUFDNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYjJ0cG8tYmFja2VuZC8uL3NyYy9saWIvcmVkaXMudHM/OTI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVkaXMgZnJvbSAnaW9yZWRpcyc7XHJcbmltcG9ydCB7IFNlc3Npb25EYXRhIH0gZnJvbSAnQC90eXBlcy9hcGknO1xyXG5pbXBvcnQgeyBSZWNpcGUgfSBmcm9tICdAL21vZGVscy9SZWNpcGUnO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJ0AvbGliL21vbmdvZGInO1xyXG5cclxuY29uc3QgcmVkaXMgPSBuZXcgUmVkaXMoJ3JlZGlzczovL2RlZmF1bHQ6QVRsVUFBSWpjREZpTVdRek9USTRabVprTURZME5ETTJPV1F3WWpSaU5HWXpZVFl6Tm1FMVkzQXhNQUBnb29kLWFzcC0xNDY3Ni51cHN0YXNoLmlvOjYzNzknKTtcclxuXHJcbmNvbnN0IFNFU1NJT05fVFRMID0gMzAgKiAyNCAqIDYwICogNjA7IC8vIDMwIGRheXMgaW4gc2Vjb25kc1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24odXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPFNlc3Npb25EYXRhIHwgbnVsbD4ge1xyXG4gIGNvbnN0IHNlc3Npb25LZXkgPSBgc2Vzc2lvbjoke3VzZXJJZH1gO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZWRpcy5nZXQoc2Vzc2lvbktleSk7XHJcbiAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFNlc3Npb24odXNlcklkOiBzdHJpbmcsIGRhdGE6IFNlc3Npb25EYXRhKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgY29uc3Qgc2Vzc2lvbktleSA9IGBzZXNzaW9uOiR7dXNlcklkfWA7XHJcbiAgYXdhaXQgcmVkaXMuc2V0KHNlc3Npb25LZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCAnRVgnLCBTRVNTSU9OX1RUTCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZWNlbnRSZWNpcGVzKHVzZXJJZDogc3RyaW5nLCByZWNpcGVJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgY29uc3Qgc2Vzc2lvbktleSA9IGBzZXNzaW9uOiR7dXNlcklkfWA7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24odXNlcklkKTtcclxuICBcclxuICBpZiAoc2Vzc2lvbikge1xyXG4gICAgY29uc3QgcmVjZW50UmVjaXBlcyA9IG5ldyBTZXQoW3JlY2lwZUlkLCAuLi5zZXNzaW9uLnByZWZlcmVuY2VzLnJlY2VudFJlY2lwZXNdKTtcclxuICAgIHNlc3Npb24ucHJlZmVyZW5jZXMucmVjZW50UmVjaXBlcyA9IEFycmF5LmZyb20ocmVjZW50UmVjaXBlcykuc2xpY2UoMCwgNSk7IC8vIEtlZXAgb25seSBsYXN0IDVcclxuICAgIGF3YWl0IHNldFNlc3Npb24odXNlcklkLCBzZXNzaW9uKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXNzaW9uKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgY29uc3Qgc2Vzc2lvbktleSA9IGBzZXNzaW9uOiR7dXNlcklkfWA7XHJcbiAgYXdhaXQgcmVkaXMuZGVsKHNlc3Npb25LZXkpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvUmVkaXMoKSB7XHJcbiAgcmV0dXJuIHJlZGlzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0Q2FjaGUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGV4cGlyYXRpb25JblNlY29uZHM/OiBudW1iZXIpIHtcclxuICBpZiAoZXhwaXJhdGlvbkluU2Vjb25kcykge1xyXG4gICAgYXdhaXQgcmVkaXMuc2V0KGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpLCAnRVgnLCBleHBpcmF0aW9uSW5TZWNvbmRzKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYXdhaXQgcmVkaXMuc2V0KGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYWNoZShrZXk6IHN0cmluZykge1xyXG4gIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVkaXMuZ2V0KGtleSk7XHJcbiAgcmV0dXJuIHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FjaGUoa2V5OiBzdHJpbmcpIHtcclxuICBhd2FpdCByZWRpcy5kZWwoa2V5KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZhdm9yaXRlUmVjaXBlcyh1c2VySWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHVzZXJJZCk7XHJcbiAgcmV0dXJuIHNlc3Npb24/LnByZWZlcmVuY2VzLmZhdm9yaXRlUmVjaXBlcyB8fCBbXTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlUmVjaXBlKHVzZXJJZDogc3RyaW5nLCByZWNpcGVJZDogc3RyaW5nKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24odXNlcklkKTtcclxuICBpZiAoIXNlc3Npb24pIHJldHVybiBbXTtcclxuICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gIGNvbnN0IHJlY2lwZSA9IGF3YWl0IFJlY2lwZS5maW5kQnlJZChyZWNpcGVJZCk7XHJcbiAgaWYgKCFyZWNpcGUpIHJldHVybiBzZXNzaW9uLnByZWZlcmVuY2VzLmZhdm9yaXRlUmVjaXBlcztcclxuICBjb25zdCByZWNpcGVEYXRhID0ge1xyXG4gICAgX2lkOiByZWNpcGUuX2lkLnRvU3RyaW5nKCksXHJcbiAgICB0aXRsZTogcmVjaXBlLnRpdGxlLFxyXG4gICAgaW5ncmVkaWVudHM6IHJlY2lwZS5pbmdyZWRpZW50cyxcclxuICAgIGluc3RydWN0aW9uczogcmVjaXBlLmluc3RydWN0aW9ucyxcclxuICAgIG93bmVySWQ6IHJlY2lwZS5vd25lcklkLnRvU3RyaW5nKCksXHJcbiAgICBjcmVhdGVkQXQ6IHJlY2lwZS5jcmVhdGVkQXRcclxuICB9O1xyXG4gIGlmICghc2Vzc2lvbi5wcmVmZXJlbmNlcy5mYXZvcml0ZVJlY2lwZXMpIHNlc3Npb24ucHJlZmVyZW5jZXMuZmF2b3JpdGVSZWNpcGVzID0gW107XHJcbiAgY29uc3QgZXhpc3RzID0gc2Vzc2lvbi5wcmVmZXJlbmNlcy5mYXZvcml0ZVJlY2lwZXMuc29tZShyID0+IHIuX2lkID09PSByZWNpcGVJZCk7XHJcbiAgaWYgKGV4aXN0cykge1xyXG4gICAgc2Vzc2lvbi5wcmVmZXJlbmNlcy5mYXZvcml0ZVJlY2lwZXMgPSBzZXNzaW9uLnByZWZlcmVuY2VzLmZhdm9yaXRlUmVjaXBlcy5maWx0ZXIociA9PiByLl9pZCAhPT0gcmVjaXBlSWQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXNzaW9uLnByZWZlcmVuY2VzLmZhdm9yaXRlUmVjaXBlcyA9IFtyZWNpcGVEYXRhLCAuLi5zZXNzaW9uLnByZWZlcmVuY2VzLmZhdm9yaXRlUmVjaXBlc107XHJcbiAgfVxyXG4gIGF3YWl0IHNldFNlc3Npb24odXNlcklkLCBzZXNzaW9uKTtcclxuICByZXR1cm4gc2Vzc2lvbi5wcmVmZXJlbmNlcy5mYXZvcml0ZVJlY2lwZXM7XHJcbn0gIl0sIm5hbWVzIjpbIlJlZGlzIiwiUmVjaXBlIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJyZWRpcyIsIlNFU1NJT05fVFRMIiwiZ2V0U2Vzc2lvbiIsInVzZXJJZCIsInNlc3Npb25LZXkiLCJkYXRhIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwic2V0U2Vzc2lvbiIsInNldCIsInN0cmluZ2lmeSIsInVwZGF0ZVJlY2VudFJlY2lwZXMiLCJyZWNpcGVJZCIsInNlc3Npb24iLCJyZWNlbnRSZWNpcGVzIiwiU2V0IiwicHJlZmVyZW5jZXMiLCJBcnJheSIsImZyb20iLCJzbGljZSIsImRlbGV0ZVNlc3Npb24iLCJkZWwiLCJjb25uZWN0VG9SZWRpcyIsInNldENhY2hlIiwia2V5IiwidmFsdWUiLCJleHBpcmF0aW9uSW5TZWNvbmRzIiwiZ2V0Q2FjaGUiLCJkZWxldGVDYWNoZSIsImdldEZhdm9yaXRlUmVjaXBlcyIsImZhdm9yaXRlUmVjaXBlcyIsInRvZ2dsZUZhdm9yaXRlUmVjaXBlIiwicmVjaXBlIiwiZmluZEJ5SWQiLCJyZWNpcGVEYXRhIiwiX2lkIiwidG9TdHJpbmciLCJ0aXRsZSIsImluZ3JlZGllbnRzIiwiaW5zdHJ1Y3Rpb25zIiwib3duZXJJZCIsImNyZWF0ZWRBdCIsImV4aXN0cyIsInNvbWUiLCJyIiwiZmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/redis.ts\n");

/***/ }),

/***/ "(rsc)/./src/middleware/auth.ts":
/*!********************************!*\
  !*** ./src/middleware/auth.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAuthenticatedUserId: () => (/* binding */ getAuthenticatedUserId),\n/* harmony export */   unauthorized: () => (/* binding */ unauthorized)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\nfunction getAuthenticatedUserId(request) {\n    const authHeader = request.headers.get(\"Authorization\");\n    if (!authHeader || !authHeader.startsWith(\"Bearer \")) {\n        return null;\n    }\n    // In a real app, we would verify the JWT\n    // For this mock version, we'll extract the userId from the token\n    const token = authHeader.split(\" \")[1];\n    try {\n        // Mock JWT parsing - in reality we would verify the token\n        const payload = JSON.parse(atob(token.split(\".\")[1]));\n        return payload.userId;\n    } catch  {\n        return null;\n    }\n}\nfunction unauthorized() {\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        returnCode: \"UNAUTHORIZED\",\n        data: null,\n        message: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbWlkZGxld2FyZS9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUdwQyxTQUFTQyx1QkFBdUJDLE9BQWdCO0lBQ3JELE1BQU1DLGFBQWFELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBRXZDLElBQUksQ0FBQ0YsY0FBYyxDQUFDQSxXQUFXRyxVQUFVLENBQUMsWUFBWTtRQUNwRCxPQUFPO0lBQ1Q7SUFFQSx5Q0FBeUM7SUFDekMsaUVBQWlFO0lBQ2pFLE1BQU1DLFFBQVFKLFdBQVdLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUN0QyxJQUFJO1FBQ0YsMERBQTBEO1FBQzFELE1BQU1DLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ0MsS0FBS0wsTUFBTUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ25ELE9BQU9DLFFBQVFJLE1BQU07SUFDdkIsRUFBRSxPQUFNO1FBQ04sT0FBTztJQUNUO0FBQ0Y7QUFFTyxTQUFTQztJQUNkLE9BQU9kLGtGQUFZQSxDQUFDZSxJQUFJLENBQ3RCO1FBQ0VDLFlBQVk7UUFDWkMsTUFBTTtRQUNOQyxTQUFTO0lBQ1gsR0FDQTtRQUFFQyxRQUFRO0lBQUk7QUFFbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYjJ0cG8tYmFja2VuZC8uL3NyYy9taWRkbGV3YXJlL2F1dGgudHM/YjlhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCB7IEFwaVJlc3BvbnNlIH0gZnJvbSAnQC90eXBlcy9hcGknO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEF1dGhlbnRpY2F0ZWRVc2VySWQocmVxdWVzdDogUmVxdWVzdCk6IHN0cmluZyB8IG51bGwge1xyXG4gIGNvbnN0IGF1dGhIZWFkZXIgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdBdXRob3JpemF0aW9uJyk7XHJcbiAgXHJcbiAgaWYgKCFhdXRoSGVhZGVyIHx8ICFhdXRoSGVhZGVyLnN0YXJ0c1dpdGgoJ0JlYXJlciAnKSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBJbiBhIHJlYWwgYXBwLCB3ZSB3b3VsZCB2ZXJpZnkgdGhlIEpXVFxyXG4gIC8vIEZvciB0aGlzIG1vY2sgdmVyc2lvbiwgd2UnbGwgZXh0cmFjdCB0aGUgdXNlcklkIGZyb20gdGhlIHRva2VuXHJcbiAgY29uc3QgdG9rZW4gPSBhdXRoSGVhZGVyLnNwbGl0KCcgJylbMV07XHJcbiAgdHJ5IHtcclxuICAgIC8vIE1vY2sgSldUIHBhcnNpbmcgLSBpbiByZWFsaXR5IHdlIHdvdWxkIHZlcmlmeSB0aGUgdG9rZW5cclxuICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnBhcnNlKGF0b2IodG9rZW4uc3BsaXQoJy4nKVsxXSkpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQudXNlcklkO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5hdXRob3JpemVkKCk6IE5leHRSZXNwb25zZTxBcGlSZXNwb25zZT4ge1xyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbjxBcGlSZXNwb25zZT4oXHJcbiAgICB7XHJcbiAgICAgIHJldHVybkNvZGU6ICdVTkFVVEhPUklaRUQnLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBtZXNzYWdlOiAnVW5hdXRob3JpemVkJ1xyXG4gICAgfSxcclxuICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICk7XHJcbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldEF1dGhlbnRpY2F0ZWRVc2VySWQiLCJyZXF1ZXN0IiwiYXV0aEhlYWRlciIsImhlYWRlcnMiLCJnZXQiLCJzdGFydHNXaXRoIiwidG9rZW4iLCJzcGxpdCIsInBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJhdG9iIiwidXNlcklkIiwidW5hdXRob3JpemVkIiwianNvbiIsInJldHVybkNvZGUiLCJkYXRhIiwibWVzc2FnZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/middleware/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/Recipe.ts":
/*!******************************!*\
  !*** ./src/models/Recipe.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Recipe: () => (/* binding */ Recipe)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst recipeSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: [\n            true,\n            \"Title is required\"\n        ],\n        trim: true\n    },\n    ingredients: [\n        {\n            type: String,\n            required: true\n        }\n    ],\n    instructions: {\n        type: String,\n        required: [\n            true,\n            \"Instructions are required\"\n        ]\n    },\n    ownerId: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"User\",\n        required: [\n            true,\n            \"Owner ID is required\"\n        ]\n    }\n}, {\n    timestamps: true\n});\n// Add text index for title search\nrecipeSchema.index({\n    title: \"text\"\n});\nconst Recipe = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Recipe || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Recipe\", recipeSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1JlY2lwZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFVaEMsTUFBTUMsZUFBZSxJQUFJRCx3REFBZSxDQUFDO0lBQ3ZDRyxPQUFPO1FBQ0xDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQW9CO1FBQ3JDQyxNQUFNO0lBQ1I7SUFDQUMsYUFBYTtRQUFDO1lBQ1pKLE1BQU1DO1lBQ05DLFVBQVU7UUFDWjtLQUFFO0lBQ0ZHLGNBQWM7UUFDWkwsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBNEI7SUFDL0M7SUFDQUksU0FBUztRQUNQTixNQUFNSix3REFBZSxDQUFDVyxLQUFLLENBQUNDLFFBQVE7UUFDcENDLEtBQUs7UUFDTFAsVUFBVTtZQUFDO1lBQU07U0FBdUI7SUFDMUM7QUFDRixHQUFHO0lBQ0RRLFlBQVk7QUFDZDtBQUVBLGtDQUFrQztBQUNsQ2IsYUFBYWMsS0FBSyxDQUFDO0lBQUVaLE9BQU87QUFBTztBQUU1QixNQUFNYSxTQUFTaEIsd0RBQWUsQ0FBQ2dCLE1BQU0sSUFBSWhCLHFEQUFjLENBQVUsVUFBVUMsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL2RiMnRwby1iYWNrZW5kLy4vc3JjL21vZGVscy9SZWNpcGUudHM/NWIzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVjaXBlIGV4dGVuZHMgbW9uZ29vc2UuRG9jdW1lbnQge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgaW5ncmVkaWVudHM6IHN0cmluZ1tdO1xyXG4gIGluc3RydWN0aW9uczogc3RyaW5nO1xyXG4gIG93bmVySWQ6IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkO1xyXG4gIGNyZWF0ZWRBdDogRGF0ZTtcclxufVxyXG5cclxuY29uc3QgcmVjaXBlU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgdGl0bGU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1RpdGxlIGlzIHJlcXVpcmVkJ10sXHJcbiAgICB0cmltOiB0cnVlXHJcbiAgfSxcclxuICBpbmdyZWRpZW50czogW3tcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfV0sXHJcbiAgaW5zdHJ1Y3Rpb25zOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogW3RydWUsICdJbnN0cnVjdGlvbnMgYXJlIHJlcXVpcmVkJ11cclxuICB9LFxyXG4gIG93bmVySWQ6IHtcclxuICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIHJlZjogJ1VzZXInLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnT3duZXIgSUQgaXMgcmVxdWlyZWQnXVxyXG4gIH1cclxufSwge1xyXG4gIHRpbWVzdGFtcHM6IHRydWVcclxufSk7XHJcblxyXG4vLyBBZGQgdGV4dCBpbmRleCBmb3IgdGl0bGUgc2VhcmNoXHJcbnJlY2lwZVNjaGVtYS5pbmRleCh7IHRpdGxlOiAndGV4dCcgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgUmVjaXBlID0gbW9uZ29vc2UubW9kZWxzLlJlY2lwZSB8fCBtb25nb29zZS5tb2RlbDxJUmVjaXBlPignUmVjaXBlJywgcmVjaXBlU2NoZW1hKTsgIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVjaXBlU2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwiaW5ncmVkaWVudHMiLCJpbnN0cnVjdGlvbnMiLCJvd25lcklkIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInRpbWVzdGFtcHMiLCJpbmRleCIsIlJlY2lwZSIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Recipe.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ioredis","vendor-chunks/@ioredis","vendor-chunks/debug","vendor-chunks/lodash.defaults","vendor-chunks/redis-parser","vendor-chunks/denque","vendor-chunks/cluster-key-slot","vendor-chunks/lodash.isarguments","vendor-chunks/redis-errors","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/standard-as-callback","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();