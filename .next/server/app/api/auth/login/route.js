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
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_gonza_db2tpo_backend_src_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/login/route.ts */ \"(rsc)/./src/app/api/auth/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\gonza\\\\db2tpo\\\\backend\\\\src\\\\app\\\\api\\\\auth\\\\login\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_gonza_db2tpo_backend_src_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/login/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNnb256YSU1Q2RiMnRwbyU1Q2JhY2tlbmQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2dvbnphJTVDZGIydHBvJTVDYmFja2VuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNzRDtBQUN2QztBQUNxQztBQUNwRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYjJ0cG8tYmFja2VuZC8/Mjk5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJuZXh0L2Rpc3Qvc2VydmVyL25vZGUtcG9seWZpbGwtaGVhZGVyc1wiO1xuaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZ29uemFcXFxcZGIydHBvXFxcXGJhY2tlbmRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxsb2dpblxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvbG9naW5cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvbG9naW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxnb256YVxcXFxkYjJ0cG9cXFxcYmFja2VuZFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXGxvZ2luXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvbG9naW4vcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/login/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/auth/login/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_redis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/redis */ \"(rsc)/./src/lib/redis.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.ts\");\n\n\n\n\nfunction generateMockJWT(userId) {\n    // Create a mock JWT with a simple structure\n    const header = btoa(JSON.stringify({\n        alg: \"none\",\n        typ: \"JWT\"\n    }));\n    const payload = btoa(JSON.stringify({\n        userId,\n        iat: Date.now()\n    }));\n    const signature = \"mock-signature\";\n    return `${header}.${payload}.${signature}`;\n}\nasync function POST(request) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__.connectToDatabase)();\n        const body = await request.json();\n        const { email, password } = body;\n        // Validate required fields\n        if (!email || !password) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                returnCode: \"ERROR\",\n                data: null,\n                message: \"Email and password are required\"\n            }, {\n                status: 400\n            });\n        }\n        // Find user by email\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__.User.findOne({\n            email\n        });\n        if (!user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                returnCode: \"ERROR\",\n                data: null,\n                message: \"User not found\"\n            }, {\n                status: 401\n            });\n        }\n        // Check password (in a real app, we would hash and compare)\n        if (user.password !== password) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                returnCode: \"ERROR\",\n                data: null,\n                message: \"Invalid credentials\"\n            }, {\n                status: 401\n            });\n        }\n        // Generate mock JWT\n        const jwt = generateMockJWT(user._id.toString());\n        // Create session in Redis\n        await (0,_lib_redis__WEBPACK_IMPORTED_MODULE_1__.setSession)(user._id.toString(), {\n            jwt,\n            preferences: {\n                theme: \"light\",\n                recentRecipes: []\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            returnCode: \"SUCCESS\",\n            data: {\n                jwt,\n                userId: user._id.toString()\n            },\n            message: \"Login successful\"\n        });\n    } catch (error) {\n        console.error(\"Error in login:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            returnCode: \"ERROR\",\n            data: null,\n            message: \"Error during login\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBRUY7QUFDSjtBQUNhO0FBRWxELFNBQVNJLGdCQUFnQkMsTUFBYztJQUNyQyw0Q0FBNEM7SUFDNUMsTUFBTUMsU0FBU0MsS0FBS0MsS0FBS0MsU0FBUyxDQUFDO1FBQUVDLEtBQUs7UUFBUUMsS0FBSztJQUFNO0lBQzdELE1BQU1DLFVBQVVMLEtBQUtDLEtBQUtDLFNBQVMsQ0FBQztRQUFFSjtRQUFRUSxLQUFLQyxLQUFLQyxHQUFHO0lBQUc7SUFDOUQsTUFBTUMsWUFBWTtJQUVsQixPQUFPLENBQUMsRUFBRVYsT0FBTyxDQUFDLEVBQUVNLFFBQVEsQ0FBQyxFQUFFSSxVQUFVLENBQUM7QUFDNUM7QUFFTyxlQUFlQyxLQUFLQyxPQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTWYsK0RBQWlCQTtRQUN2QixNQUFNZ0IsT0FBTyxNQUFNRCxRQUFRRSxJQUFJO1FBQy9CLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR0g7UUFFNUIsMkJBQTJCO1FBQzNCLElBQUksQ0FBQ0UsU0FBUyxDQUFDQyxVQUFVO1lBQ3ZCLE9BQU90QixrRkFBWUEsQ0FBQ29CLElBQUksQ0FBYztnQkFDcENHLFlBQVk7Z0JBQ1pDLE1BQU07Z0JBQ05DLFNBQVM7WUFDWCxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDbkI7UUFFQSxxQkFBcUI7UUFDckIsTUFBTUMsT0FBTyxNQUFNekIsOENBQUlBLENBQUMwQixPQUFPLENBQUM7WUFBRVA7UUFBTTtRQUN4QyxJQUFJLENBQUNNLE1BQU07WUFDVCxPQUFPM0Isa0ZBQVlBLENBQUNvQixJQUFJLENBQWM7Z0JBQ3BDRyxZQUFZO2dCQUNaQyxNQUFNO2dCQUNOQyxTQUFTO1lBQ1gsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ25CO1FBRUEsNERBQTREO1FBQzVELElBQUlDLEtBQUtMLFFBQVEsS0FBS0EsVUFBVTtZQUM5QixPQUFPdEIsa0ZBQVlBLENBQUNvQixJQUFJLENBQWM7Z0JBQ3BDRyxZQUFZO2dCQUNaQyxNQUFNO2dCQUNOQyxTQUFTO1lBQ1gsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ25CO1FBRUEsb0JBQW9CO1FBQ3BCLE1BQU1HLE1BQU16QixnQkFBZ0J1QixLQUFLRyxHQUFHLENBQUNDLFFBQVE7UUFFN0MsMEJBQTBCO1FBQzFCLE1BQU05QixzREFBVUEsQ0FBQzBCLEtBQUtHLEdBQUcsQ0FBQ0MsUUFBUSxJQUFJO1lBQ3BDRjtZQUNBRyxhQUFhO2dCQUNYQyxPQUFPO2dCQUNQQyxlQUFlLEVBQUU7WUFDbkI7UUFDRjtRQUVBLE9BQU9sQyxrRkFBWUEsQ0FBQ29CLElBQUksQ0FBYztZQUNwQ0csWUFBWTtZQUNaQyxNQUFNO2dCQUNKSztnQkFDQXhCLFFBQVFzQixLQUFLRyxHQUFHLENBQUNDLFFBQVE7WUFDM0I7WUFDQU4sU0FBUztRQUNYO0lBRUYsRUFBRSxPQUFPVSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxtQkFBbUJBO1FBQ2pDLE9BQU9uQyxrRkFBWUEsQ0FBQ29CLElBQUksQ0FBYztZQUNwQ0csWUFBWTtZQUNaQyxNQUFNO1lBQ05DLFNBQVM7UUFDWCxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNuQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGIydHBvLWJhY2tlbmQvLi9zcmMvYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlLnRzP2QzMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBBcGlSZXNwb25zZSB9IGZyb20gJ0AvdHlwZXMvYXBpJztcclxuaW1wb3J0IHsgc2V0U2Vzc2lvbiB9IGZyb20gJ0AvbGliL3JlZGlzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0AvbW9kZWxzL1VzZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJ0AvbGliL21vbmdvZGInO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVNb2NrSldUKHVzZXJJZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAvLyBDcmVhdGUgYSBtb2NrIEpXVCB3aXRoIGEgc2ltcGxlIHN0cnVjdHVyZVxyXG4gIGNvbnN0IGhlYWRlciA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoeyBhbGc6ICdub25lJywgdHlwOiAnSldUJyB9KSk7XHJcbiAgY29uc3QgcGF5bG9hZCA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoeyB1c2VySWQsIGlhdDogRGF0ZS5ub3coKSB9KSk7XHJcbiAgY29uc3Qgc2lnbmF0dXJlID0gJ21vY2stc2lnbmF0dXJlJztcclxuICBcclxuICByZXR1cm4gYCR7aGVhZGVyfS4ke3BheWxvYWR9LiR7c2lnbmF0dXJlfWA7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBib2R5O1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkc1xyXG4gICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uPEFwaVJlc3BvbnNlPih7XHJcbiAgICAgICAgcmV0dXJuQ29kZTogJ0VSUk9SJyxcclxuICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdFbWFpbCBhbmQgcGFzc3dvcmQgYXJlIHJlcXVpcmVkJ1xyXG4gICAgICB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdXNlciBieSBlbWFpbFxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbjxBcGlSZXNwb25zZT4oe1xyXG4gICAgICAgIHJldHVybkNvZGU6ICdFUlJPUicsXHJcbiAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICBtZXNzYWdlOiAnVXNlciBub3QgZm91bmQnXHJcbiAgICAgIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgcGFzc3dvcmQgKGluIGEgcmVhbCBhcHAsIHdlIHdvdWxkIGhhc2ggYW5kIGNvbXBhcmUpXHJcbiAgICBpZiAodXNlci5wYXNzd29yZCAhPT0gcGFzc3dvcmQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uPEFwaVJlc3BvbnNlPih7XHJcbiAgICAgICAgcmV0dXJuQ29kZTogJ0VSUk9SJyxcclxuICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdJbnZhbGlkIGNyZWRlbnRpYWxzJ1xyXG4gICAgICB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlbmVyYXRlIG1vY2sgSldUXHJcbiAgICBjb25zdCBqd3QgPSBnZW5lcmF0ZU1vY2tKV1QodXNlci5faWQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHNlc3Npb24gaW4gUmVkaXNcclxuICAgIGF3YWl0IHNldFNlc3Npb24odXNlci5faWQudG9TdHJpbmcoKSwge1xyXG4gICAgICBqd3QsXHJcbiAgICAgIHByZWZlcmVuY2VzOiB7XHJcbiAgICAgICAgdGhlbWU6ICdsaWdodCcsXHJcbiAgICAgICAgcmVjZW50UmVjaXBlczogW11cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uPEFwaVJlc3BvbnNlPih7XHJcbiAgICAgIHJldHVybkNvZGU6ICdTVUNDRVNTJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGp3dCxcclxuICAgICAgICB1c2VySWQ6IHVzZXIuX2lkLnRvU3RyaW5nKClcclxuICAgICAgfSxcclxuICAgICAgbWVzc2FnZTogJ0xvZ2luIHN1Y2Nlc3NmdWwnXHJcbiAgICB9KTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGxvZ2luOicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbjxBcGlSZXNwb25zZT4oe1xyXG4gICAgICByZXR1cm5Db2RlOiAnRVJST1InLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBtZXNzYWdlOiAnRXJyb3IgZHVyaW5nIGxvZ2luJ1xyXG4gICAgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInNldFNlc3Npb24iLCJVc2VyIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJnZW5lcmF0ZU1vY2tKV1QiLCJ1c2VySWQiLCJoZWFkZXIiLCJidG9hIiwiSlNPTiIsInN0cmluZ2lmeSIsImFsZyIsInR5cCIsInBheWxvYWQiLCJpYXQiLCJEYXRlIiwibm93Iiwic2lnbmF0dXJlIiwiUE9TVCIsInJlcXVlc3QiLCJib2R5IiwianNvbiIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXR1cm5Db2RlIiwiZGF0YSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJ1c2VyIiwiZmluZE9uZSIsImp3dCIsIl9pZCIsInRvU3RyaW5nIiwicHJlZmVyZW5jZXMiLCJ0aGVtZSIsInJlY2VudFJlY2lwZXMiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/login/route.ts\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToRedis: () => (/* binding */ connectToRedis),\n/* harmony export */   deleteCache: () => (/* binding */ deleteCache),\n/* harmony export */   deleteSession: () => (/* binding */ deleteSession),\n/* harmony export */   getCache: () => (/* binding */ getCache),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   setCache: () => (/* binding */ setCache),\n/* harmony export */   setSession: () => (/* binding */ setSession),\n/* harmony export */   updateRecentRecipes: () => (/* binding */ updateRecentRecipes)\n/* harmony export */ });\n/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ioredis */ \"(rsc)/./node_modules/ioredis/built/index.js\");\n/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ioredis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst redis = new (ioredis__WEBPACK_IMPORTED_MODULE_0___default())(\"rediss://default:ATlUAAIjcDFiMWQzOTI4ZmZkMDY0NDM2OWQwYjRiNGYzYTYzNmE1Y3AxMA@good-asp-14676.upstash.io:6379\");\nconst SESSION_TTL = 30 * 24 * 60 * 60; // 30 days in seconds\nasync function getSession(userId) {\n    const sessionKey = `session:${userId}`;\n    const data = await redis.get(sessionKey);\n    return data ? JSON.parse(data) : null;\n}\nasync function setSession(userId, data) {\n    const sessionKey = `session:${userId}`;\n    await redis.set(sessionKey, JSON.stringify(data), \"EX\", SESSION_TTL);\n}\nasync function updateRecentRecipes(userId, recipeId) {\n    const sessionKey = `session:${userId}`;\n    const session = await getSession(userId);\n    if (session) {\n        const recentRecipes = new Set([\n            recipeId,\n            ...session.preferences.recentRecipes\n        ]);\n        session.preferences.recentRecipes = Array.from(recentRecipes).slice(0, 5); // Keep only last 5\n        await setSession(userId, session);\n    }\n}\nasync function deleteSession(userId) {\n    const sessionKey = `session:${userId}`;\n    await redis.del(sessionKey);\n}\nasync function connectToRedis() {\n    return redis;\n}\nasync function setCache(key, value, expirationInSeconds) {\n    if (expirationInSeconds) {\n        await redis.set(key, JSON.stringify(value), \"EX\", expirationInSeconds);\n    } else {\n        await redis.set(key, JSON.stringify(value));\n    }\n}\nasync function getCache(key) {\n    const value = await redis.get(key);\n    return value ? JSON.parse(value) : null;\n}\nasync function deleteCache(key) {\n    await redis.del(key);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3JlZGlzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFHNUIsTUFBTUMsUUFBUSxJQUFJRCxnREFBS0EsQ0FBQztBQUV4QixNQUFNRSxjQUFjLEtBQUssS0FBSyxLQUFLLElBQUkscUJBQXFCO0FBRXJELGVBQWVDLFdBQVdDLE1BQWM7SUFDN0MsTUFBTUMsYUFBYSxDQUFDLFFBQVEsRUFBRUQsT0FBTyxDQUFDO0lBQ3RDLE1BQU1FLE9BQU8sTUFBTUwsTUFBTU0sR0FBRyxDQUFDRjtJQUM3QixPQUFPQyxPQUFPRSxLQUFLQyxLQUFLLENBQUNILFFBQVE7QUFDbkM7QUFFTyxlQUFlSSxXQUFXTixNQUFjLEVBQUVFLElBQWlCO0lBQ2hFLE1BQU1ELGFBQWEsQ0FBQyxRQUFRLEVBQUVELE9BQU8sQ0FBQztJQUN0QyxNQUFNSCxNQUFNVSxHQUFHLENBQUNOLFlBQVlHLEtBQUtJLFNBQVMsQ0FBQ04sT0FBTyxNQUFNSjtBQUMxRDtBQUVPLGVBQWVXLG9CQUFvQlQsTUFBYyxFQUFFVSxRQUFnQjtJQUN4RSxNQUFNVCxhQUFhLENBQUMsUUFBUSxFQUFFRCxPQUFPLENBQUM7SUFDdEMsTUFBTVcsVUFBVSxNQUFNWixXQUFXQztJQUVqQyxJQUFJVyxTQUFTO1FBQ1gsTUFBTUMsZ0JBQWdCLElBQUlDLElBQUk7WUFBQ0g7ZUFBYUMsUUFBUUcsV0FBVyxDQUFDRixhQUFhO1NBQUM7UUFDOUVELFFBQVFHLFdBQVcsQ0FBQ0YsYUFBYSxHQUFHRyxNQUFNQyxJQUFJLENBQUNKLGVBQWVLLEtBQUssQ0FBQyxHQUFHLElBQUksbUJBQW1CO1FBQzlGLE1BQU1YLFdBQVdOLFFBQVFXO0lBQzNCO0FBQ0Y7QUFFTyxlQUFlTyxjQUFjbEIsTUFBYztJQUNoRCxNQUFNQyxhQUFhLENBQUMsUUFBUSxFQUFFRCxPQUFPLENBQUM7SUFDdEMsTUFBTUgsTUFBTXNCLEdBQUcsQ0FBQ2xCO0FBQ2xCO0FBRU8sZUFBZW1CO0lBQ3BCLE9BQU92QjtBQUNUO0FBRU8sZUFBZXdCLFNBQVNDLEdBQVcsRUFBRUMsS0FBVSxFQUFFQyxtQkFBNEI7SUFDbEYsSUFBSUEscUJBQXFCO1FBQ3ZCLE1BQU0zQixNQUFNVSxHQUFHLENBQUNlLEtBQUtsQixLQUFLSSxTQUFTLENBQUNlLFFBQVEsTUFBTUM7SUFDcEQsT0FBTztRQUNMLE1BQU0zQixNQUFNVSxHQUFHLENBQUNlLEtBQUtsQixLQUFLSSxTQUFTLENBQUNlO0lBQ3RDO0FBQ0Y7QUFFTyxlQUFlRSxTQUFTSCxHQUFXO0lBQ3hDLE1BQU1DLFFBQVEsTUFBTTFCLE1BQU1NLEdBQUcsQ0FBQ21CO0lBQzlCLE9BQU9DLFFBQVFuQixLQUFLQyxLQUFLLENBQUNrQixTQUFTO0FBQ3JDO0FBRU8sZUFBZUcsWUFBWUosR0FBVztJQUMzQyxNQUFNekIsTUFBTXNCLEdBQUcsQ0FBQ0c7QUFDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYjJ0cG8tYmFja2VuZC8uL3NyYy9saWIvcmVkaXMudHM/OTI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVkaXMgZnJvbSAnaW9yZWRpcyc7XHJcbmltcG9ydCB7IFNlc3Npb25EYXRhIH0gZnJvbSAnQC90eXBlcy9hcGknO1xyXG5cclxuY29uc3QgcmVkaXMgPSBuZXcgUmVkaXMoJ3JlZGlzczovL2RlZmF1bHQ6QVRsVUFBSWpjREZpTVdRek9USTRabVprTURZME5ETTJPV1F3WWpSaU5HWXpZVFl6Tm1FMVkzQXhNQUBnb29kLWFzcC0xNDY3Ni51cHN0YXNoLmlvOjYzNzknKTtcclxuXHJcbmNvbnN0IFNFU1NJT05fVFRMID0gMzAgKiAyNCAqIDYwICogNjA7IC8vIDMwIGRheXMgaW4gc2Vjb25kc1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24odXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPFNlc3Npb25EYXRhIHwgbnVsbD4ge1xyXG4gIGNvbnN0IHNlc3Npb25LZXkgPSBgc2Vzc2lvbjoke3VzZXJJZH1gO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZWRpcy5nZXQoc2Vzc2lvbktleSk7XHJcbiAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFNlc3Npb24odXNlcklkOiBzdHJpbmcsIGRhdGE6IFNlc3Npb25EYXRhKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgY29uc3Qgc2Vzc2lvbktleSA9IGBzZXNzaW9uOiR7dXNlcklkfWA7XHJcbiAgYXdhaXQgcmVkaXMuc2V0KHNlc3Npb25LZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCAnRVgnLCBTRVNTSU9OX1RUTCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVSZWNlbnRSZWNpcGVzKHVzZXJJZDogc3RyaW5nLCByZWNpcGVJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgY29uc3Qgc2Vzc2lvbktleSA9IGBzZXNzaW9uOiR7dXNlcklkfWA7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24odXNlcklkKTtcclxuICBcclxuICBpZiAoc2Vzc2lvbikge1xyXG4gICAgY29uc3QgcmVjZW50UmVjaXBlcyA9IG5ldyBTZXQoW3JlY2lwZUlkLCAuLi5zZXNzaW9uLnByZWZlcmVuY2VzLnJlY2VudFJlY2lwZXNdKTtcclxuICAgIHNlc3Npb24ucHJlZmVyZW5jZXMucmVjZW50UmVjaXBlcyA9IEFycmF5LmZyb20ocmVjZW50UmVjaXBlcykuc2xpY2UoMCwgNSk7IC8vIEtlZXAgb25seSBsYXN0IDVcclxuICAgIGF3YWl0IHNldFNlc3Npb24odXNlcklkLCBzZXNzaW9uKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXNzaW9uKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgY29uc3Qgc2Vzc2lvbktleSA9IGBzZXNzaW9uOiR7dXNlcklkfWA7XHJcbiAgYXdhaXQgcmVkaXMuZGVsKHNlc3Npb25LZXkpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvUmVkaXMoKSB7XHJcbiAgcmV0dXJuIHJlZGlzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0Q2FjaGUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGV4cGlyYXRpb25JblNlY29uZHM/OiBudW1iZXIpIHtcclxuICBpZiAoZXhwaXJhdGlvbkluU2Vjb25kcykge1xyXG4gICAgYXdhaXQgcmVkaXMuc2V0KGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpLCAnRVgnLCBleHBpcmF0aW9uSW5TZWNvbmRzKTtcclxuICB9IGVsc2Uge1xyXG4gICAgYXdhaXQgcmVkaXMuc2V0KGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYWNoZShrZXk6IHN0cmluZykge1xyXG4gIGNvbnN0IHZhbHVlID0gYXdhaXQgcmVkaXMuZ2V0KGtleSk7XHJcbiAgcmV0dXJuIHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FjaGUoa2V5OiBzdHJpbmcpIHtcclxuICBhd2FpdCByZWRpcy5kZWwoa2V5KTtcclxufSAiXSwibmFtZXMiOlsiUmVkaXMiLCJyZWRpcyIsIlNFU1NJT05fVFRMIiwiZ2V0U2Vzc2lvbiIsInVzZXJJZCIsInNlc3Npb25LZXkiLCJkYXRhIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwic2V0U2Vzc2lvbiIsInNldCIsInN0cmluZ2lmeSIsInVwZGF0ZVJlY2VudFJlY2lwZXMiLCJyZWNpcGVJZCIsInNlc3Npb24iLCJyZWNlbnRSZWNpcGVzIiwiU2V0IiwicHJlZmVyZW5jZXMiLCJBcnJheSIsImZyb20iLCJzbGljZSIsImRlbGV0ZVNlc3Npb24iLCJkZWwiLCJjb25uZWN0VG9SZWRpcyIsInNldENhY2hlIiwia2V5IiwidmFsdWUiLCJleHBpcmF0aW9uSW5TZWNvbmRzIiwiZ2V0Q2FjaGUiLCJkZWxldGVDYWNoZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/redis.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Username is required\"\n        ],\n        trim: true,\n        unique: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Email is required\"\n        ],\n        unique: true,\n        trim: true,\n        lowercase: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ]\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBU2hDLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FBQztJQUNyQ0csVUFBVTtRQUNSQyxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF1QjtRQUN4Q0MsTUFBTTtRQUNOQyxRQUFRO0lBQ1Y7SUFDQUMsT0FBTztRQUNMTCxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUFvQjtRQUNyQ0UsUUFBUTtRQUNSRCxNQUFNO1FBQ05HLFdBQVc7SUFDYjtJQUNBQyxVQUFVO1FBQ1JQLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXVCO0lBRzFDO0lBQ0FNLFdBQVc7UUFDVFIsTUFBTVM7UUFDTkMsU0FBU0QsS0FBS0UsR0FBRztJQUNuQjtBQUNGO0FBRU8sTUFBTUMsT0FBT2hCLHdEQUFlLENBQUNnQixJQUFJLElBQUloQixxREFBYyxDQUFRLFFBQVFDLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYjJ0cG8tYmFja2VuZC8uL3NyYy9tb2RlbHMvVXNlci50cz8wOTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIGV4dGVuZHMgbW9uZ29vc2UuRG9jdW1lbnQge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIGNyZWF0ZWRBdDogRGF0ZTtcclxufVxyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIHVzZXJuYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogW3RydWUsICdVc2VybmFtZSBpcyByZXF1aXJlZCddLFxyXG4gICAgdHJpbTogdHJ1ZSxcclxuICAgIHVuaXF1ZTogdHJ1ZVxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0VtYWlsIGlzIHJlcXVpcmVkJ10sXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICB0cmltOiB0cnVlLFxyXG4gICAgbG93ZXJjYXNlOiB0cnVlXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnXSxcclxuICAgIC8vIE5vdGU6IEluIGEgcmVhbCBhcHBsaWNhdGlvbiwgd2Ugd291bGQgaGFzaCB0aGUgcGFzc3dvcmQsXHJcbiAgICAvLyBidXQgYXMgcGVyIHJlcXVpcmVtZW50cywgdGhpcyBpcyBtb2NrZWRcclxuICB9LFxyXG4gIGNyZWF0ZWRBdDoge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGRlZmF1bHQ6IERhdGUubm93XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWw8SVVzZXI+KCdVc2VyJywgdXNlclNjaGVtYSk7ICJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJ1bmlxdWUiLCJlbWFpbCIsImxvd2VyY2FzZSIsInBhc3N3b3JkIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJVc2VyIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ioredis","vendor-chunks/@ioredis","vendor-chunks/debug","vendor-chunks/lodash.defaults","vendor-chunks/redis-parser","vendor-chunks/denque","vendor-chunks/cluster-key-slot","vendor-chunks/lodash.isarguments","vendor-chunks/redis-errors","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/standard-as-callback","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();