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
exports.id = "app/api/recent-recipes/route";
exports.ids = ["app/api/recent-recipes/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frecent-recipes%2Froute&page=%2Fapi%2Frecent-recipes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecent-recipes%2Froute.ts&appDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frecent-recipes%2Froute&page=%2Fapi%2Frecent-recipes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecent-recipes%2Froute.ts&appDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_gonza_db2tpo_backend_src_app_api_recent_recipes_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/recent-recipes/route.ts */ \"(rsc)/./src/app/api/recent-recipes/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/recent-recipes/route\",\n        pathname: \"/api/recent-recipes\",\n        filename: \"route\",\n        bundlePath: \"app/api/recent-recipes/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\gonza\\\\db2tpo\\\\backend\\\\src\\\\app\\\\api\\\\recent-recipes\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_gonza_db2tpo_backend_src_app_api_recent_recipes_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/recent-recipes/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyZWNlbnQtcmVjaXBlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmVjZW50LXJlY2lwZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyZWNlbnQtcmVjaXBlcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNnb256YSU1Q2RiMnRwbyU1Q2JhY2tlbmQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2dvbnphJTVDZGIydHBvJTVDYmFja2VuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNzRDtBQUN2QztBQUN3QztBQUN2RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYjJ0cG8tYmFja2VuZC8/ZTY2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJuZXh0L2Rpc3Qvc2VydmVyL25vZGUtcG9seWZpbGwtaGVhZGVyc1wiO1xuaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZ29uemFcXFxcZGIydHBvXFxcXGJhY2tlbmRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccmVjZW50LXJlY2lwZXNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3JlY2VudC1yZWNpcGVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcmVjZW50LXJlY2lwZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3JlY2VudC1yZWNpcGVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZ29uemFcXFxcZGIydHBvXFxcXGJhY2tlbmRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccmVjZW50LXJlY2lwZXNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcmVjZW50LXJlY2lwZXMvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frecent-recipes%2Froute&page=%2Fapi%2Frecent-recipes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecent-recipes%2Froute.ts&appDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/recent-recipes/route.ts":
/*!*********************************************!*\
  !*** ./src/app/api/recent-recipes/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_redis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/redis */ \"(rsc)/./src/lib/redis.ts\");\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/middleware/auth */ \"(rsc)/./src/middleware/auth.ts\");\n/* harmony import */ var _models_Recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/Recipe */ \"(rsc)/./src/models/Recipe.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.ts\");\n\n\n\n\n\nasync function GET(request) {\n    try {\n        const userId = (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__.getAuthenticatedUserId)(request);\n        if (!userId) return (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__.unauthorized)();\n        // Get session from Redis\n        const session = await (0,_lib_redis__WEBPACK_IMPORTED_MODULE_1__.getSession)(userId);\n        if (!session) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                returnCode: \"ERROR\",\n                data: null,\n                message: \"Session not found\"\n            }, {\n                status: 404\n            });\n        }\n        // Get recipe IDs from session\n        const recipeIds = session.preferences.recentRecipes;\n        if (!recipeIds.length) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                returnCode: \"SUCCESS\",\n                data: [],\n                message: \"No recent recipes\"\n            });\n        }\n        // Get recipes from MongoDB\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_4__.connectToDatabase)();\n        const recipes = await _models_Recipe__WEBPACK_IMPORTED_MODULE_3__.Recipe.find({\n            _id: {\n                $in: recipeIds\n            }\n        });\n        // Sort recipes in the same order as recipeIds\n        const sortedRecipes = recipeIds.map((id)=>recipes.find((recipe)=>recipe._id.toString() === id)).filter((recipe)=>recipe); // Remove any null values\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            returnCode: \"SUCCESS\",\n            data: sortedRecipes,\n            message: \"Recent recipes retrieved\"\n        });\n    } catch (error) {\n        console.error(\"Error fetching recent recipes:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            returnCode: \"ERROR\",\n            data: null,\n            message: \"Error fetching recent recipes\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yZWNlbnQtcmVjaXBlcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFFRjtBQUNnQztBQUNoQztBQUNTO0FBRTNDLGVBQWVNLElBQUlDLE9BQWdCO0lBQ3hDLElBQUk7UUFDRixNQUFNQyxTQUFTTix3RUFBc0JBLENBQUNLO1FBQ3RDLElBQUksQ0FBQ0MsUUFBUSxPQUFPTCw4REFBWUE7UUFFaEMseUJBQXlCO1FBQ3pCLE1BQU1NLFVBQVUsTUFBTVIsc0RBQVVBLENBQUNPO1FBQ2pDLElBQUksQ0FBQ0MsU0FBUztZQUNaLE9BQU9ULGtGQUFZQSxDQUFDVSxJQUFJLENBQWM7Z0JBQ3BDQyxZQUFZO2dCQUNaQyxNQUFNO2dCQUNOQyxTQUFTO1lBQ1gsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ25CO1FBRUEsOEJBQThCO1FBQzlCLE1BQU1DLFlBQVlOLFFBQVFPLFdBQVcsQ0FBQ0MsYUFBYTtRQUNuRCxJQUFJLENBQUNGLFVBQVVHLE1BQU0sRUFBRTtZQUNyQixPQUFPbEIsa0ZBQVlBLENBQUNVLElBQUksQ0FBYztnQkFDcENDLFlBQVk7Z0JBQ1pDLE1BQU0sRUFBRTtnQkFDUkMsU0FBUztZQUNYO1FBQ0Y7UUFFQSwyQkFBMkI7UUFDM0IsTUFBTVIsK0RBQWlCQTtRQUN2QixNQUFNYyxVQUFVLE1BQU1mLGtEQUFNQSxDQUFDZ0IsSUFBSSxDQUFDO1lBQ2hDQyxLQUFLO2dCQUFFQyxLQUFLUDtZQUFVO1FBQ3hCO1FBRUEsOENBQThDO1FBQzlDLE1BQU1RLGdCQUFnQlIsVUFDbkJTLEdBQUcsQ0FBQ0MsQ0FBQUEsS0FBTU4sUUFBUUMsSUFBSSxDQUFDTSxDQUFBQSxTQUFVQSxPQUFPTCxHQUFHLENBQUNNLFFBQVEsT0FBT0YsS0FDM0RHLE1BQU0sQ0FBQ0YsQ0FBQUEsU0FBVUEsU0FBUyx5QkFBeUI7UUFFdEQsT0FBTzFCLGtGQUFZQSxDQUFDVSxJQUFJLENBQWM7WUFDcENDLFlBQVk7WUFDWkMsTUFBTVc7WUFDTlYsU0FBUztRQUNYO0lBRUYsRUFBRSxPQUFPZ0IsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsa0NBQWtDQTtRQUNoRCxPQUFPN0Isa0ZBQVlBLENBQUNVLElBQUksQ0FBYztZQUNwQ0MsWUFBWTtZQUNaQyxNQUFNO1lBQ05DLFNBQVM7UUFDWCxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNuQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGIydHBvLWJhY2tlbmQvLi9zcmMvYXBwL2FwaS9yZWNlbnQtcmVjaXBlcy9yb3V0ZS50cz82ZGZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgQXBpUmVzcG9uc2UgfSBmcm9tICdAL3R5cGVzL2FwaSc7XHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICdAL2xpYi9yZWRpcyc7XHJcbmltcG9ydCB7IGdldEF1dGhlbnRpY2F0ZWRVc2VySWQsIHVuYXV0aG9yaXplZCB9IGZyb20gJ0AvbWlkZGxld2FyZS9hdXRoJztcclxuaW1wb3J0IHsgUmVjaXBlIH0gZnJvbSAnQC9tb2RlbHMvUmVjaXBlJztcclxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tICdAL2xpYi9tb25nb2RiJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VySWQgPSBnZXRBdXRoZW50aWNhdGVkVXNlcklkKHJlcXVlc3QpO1xyXG4gICAgaWYgKCF1c2VySWQpIHJldHVybiB1bmF1dGhvcml6ZWQoKTtcclxuXHJcbiAgICAvLyBHZXQgc2Vzc2lvbiBmcm9tIFJlZGlzXHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih1c2VySWQpO1xyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbjxBcGlSZXNwb25zZT4oe1xyXG4gICAgICAgIHJldHVybkNvZGU6ICdFUlJPUicsXHJcbiAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICBtZXNzYWdlOiAnU2Vzc2lvbiBub3QgZm91bmQnXHJcbiAgICAgIH0sIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHJlY2lwZSBJRHMgZnJvbSBzZXNzaW9uXHJcbiAgICBjb25zdCByZWNpcGVJZHMgPSBzZXNzaW9uLnByZWZlcmVuY2VzLnJlY2VudFJlY2lwZXM7XHJcbiAgICBpZiAoIXJlY2lwZUlkcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uPEFwaVJlc3BvbnNlPih7XHJcbiAgICAgICAgcmV0dXJuQ29kZTogJ1NVQ0NFU1MnLFxyXG4gICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdObyByZWNlbnQgcmVjaXBlcydcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IHJlY2lwZXMgZnJvbSBNb25nb0RCXHJcbiAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gICAgY29uc3QgcmVjaXBlcyA9IGF3YWl0IFJlY2lwZS5maW5kKHtcclxuICAgICAgX2lkOiB7ICRpbjogcmVjaXBlSWRzIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNvcnQgcmVjaXBlcyBpbiB0aGUgc2FtZSBvcmRlciBhcyByZWNpcGVJZHNcclxuICAgIGNvbnN0IHNvcnRlZFJlY2lwZXMgPSByZWNpcGVJZHNcclxuICAgICAgLm1hcChpZCA9PiByZWNpcGVzLmZpbmQocmVjaXBlID0+IHJlY2lwZS5faWQudG9TdHJpbmcoKSA9PT0gaWQpKVxyXG4gICAgICAuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUpOyAvLyBSZW1vdmUgYW55IG51bGwgdmFsdWVzXHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uPEFwaVJlc3BvbnNlPih7XHJcbiAgICAgIHJldHVybkNvZGU6ICdTVUNDRVNTJyxcclxuICAgICAgZGF0YTogc29ydGVkUmVjaXBlcyxcclxuICAgICAgbWVzc2FnZTogJ1JlY2VudCByZWNpcGVzIHJldHJpZXZlZCdcclxuICAgIH0pO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcmVjZW50IHJlY2lwZXM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uPEFwaVJlc3BvbnNlPih7XHJcbiAgICAgIHJldHVybkNvZGU6ICdFUlJPUicsXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIG1lc3NhZ2U6ICdFcnJvciBmZXRjaGluZyByZWNlbnQgcmVjaXBlcydcclxuICAgIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXNzaW9uIiwiZ2V0QXV0aGVudGljYXRlZFVzZXJJZCIsInVuYXV0aG9yaXplZCIsIlJlY2lwZSIsImNvbm5lY3RUb0RhdGFiYXNlIiwiR0VUIiwicmVxdWVzdCIsInVzZXJJZCIsInNlc3Npb24iLCJqc29uIiwicmV0dXJuQ29kZSIsImRhdGEiLCJtZXNzYWdlIiwic3RhdHVzIiwicmVjaXBlSWRzIiwicHJlZmVyZW5jZXMiLCJyZWNlbnRSZWNpcGVzIiwibGVuZ3RoIiwicmVjaXBlcyIsImZpbmQiLCJfaWQiLCIkaW4iLCJzb3J0ZWRSZWNpcGVzIiwibWFwIiwiaWQiLCJyZWNpcGUiLCJ0b1N0cmluZyIsImZpbHRlciIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/recent-recipes/route.ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ioredis","vendor-chunks/@ioredis","vendor-chunks/debug","vendor-chunks/lodash.defaults","vendor-chunks/redis-parser","vendor-chunks/denque","vendor-chunks/cluster-key-slot","vendor-chunks/lodash.isarguments","vendor-chunks/redis-errors","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/standard-as-callback","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frecent-recipes%2Froute&page=%2Fapi%2Frecent-recipes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frecent-recipes%2Froute.ts&appDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgonza%5Cdb2tpo%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();