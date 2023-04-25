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
exports.id = "pages/api/deleteGrade";
exports.ids = ["pages/api/deleteGrade"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/deleteGrade.js":
/*!**********************************!*\
  !*** ./pages/api/deleteGrade.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteGrade)\n/* harmony export */ });\nfunction deleteGrade(req, res) {\n    console.log(\"deleteGrade api page called...\");\n    console.log(\"looking at the variables we got from the browser..\");\n    console.log(req.body);\n    const gradeid = req.body.gradeid;\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"example\",\n        port: 2222,\n        database: \"wse\"\n    });\n    connection.query(\"DELETE FROM wse.grades WHERE id = '\" + gradeid + \"';\", function(err, results, fields) {\n        // return back the records\n        res.status(200).json(results);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGVsZXRlR3JhZGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFMUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFFOUNELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7SUFDbEVELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBRXRCLE1BQU1DLE9BQU8sR0FBR0wsR0FBRyxDQUFDSSxJQUFJLENBQUNDLE9BQU87SUFFaEMsTUFBTUMsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHNCQUFRLENBQUM7SUFFN0Isb0NBQW9DO0lBQ3RDLE1BQU1DLFVBQVUsR0FBR0YsS0FBSyxDQUFDRyxnQkFBZ0IsQ0FBQztRQUN0Q0MsSUFBSSxFQUFFLFdBQVc7UUFDakJDLElBQUksRUFBRSxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxTQUFTO1FBQ25CQyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxRQUFRLEVBQUUsS0FBSztLQUNsQixDQUFDO0lBRUZOLFVBQVUsQ0FBQ08sS0FBSyxDQUNaLHFDQUFxQyxHQUFDVixPQUFPLEdBQUMsSUFBSSxFQUNsRCxTQUFTVyxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFO1FBRTNCLDBCQUEwQjtRQUMxQmpCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxPQUFPLENBQUMsQ0FBQztJQUVsQyxDQUFDLENBQ0osQ0FBQztBQUVOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvZGVsZXRlR3JhZGUuanM/NmMzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVHcmFkZShyZXEsIHJlcykge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlR3JhZGUgYXBpIHBhZ2UgY2FsbGVkLi4uXCIpO1xyXG4gXHJcbiAgICBjb25zb2xlLmxvZyhcImxvb2tpbmcgYXQgdGhlIHZhcmlhYmxlcyB3ZSBnb3QgZnJvbSB0aGUgYnJvd3Nlci4uXCIpO1xyXG4gICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG5cclxuICAgIGNvbnN0IGdyYWRlaWQgPSByZXEuYm9keS5ncmFkZWlkO1xyXG5cclxuICAgIGNvbnN0IG15c3FsID0gcmVxdWlyZSgnbXlzcWwyJyk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdGhlIGNvbm5lY3Rpb24gdG8gZGF0YWJhc2VcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgICAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgICAgICB1c2VyOiAncm9vdCcsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdleGFtcGxlJyxcclxuICAgICAgICBwb3J0OiAyMjIyLFxyXG4gICAgICAgIGRhdGFiYXNlOiAnd3NlJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5xdWVyeShcclxuICAgICAgICBcIkRFTEVURSBGUk9NIHdzZS5ncmFkZXMgV0hFUkUgaWQgPSAnXCIrZ3JhZGVpZCtcIic7XCIsXHJcbiAgICAgICAgZnVuY3Rpb24oZXJyLCByZXN1bHRzLCBmaWVsZHMpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHJldHVybiBiYWNrIHRoZSByZWNvcmRzXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxufSJdLCJuYW1lcyI6WyJkZWxldGVHcmFkZSIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwiZ3JhZGVpZCIsIm15c3FsIiwicmVxdWlyZSIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsInBvcnQiLCJkYXRhYmFzZSIsInF1ZXJ5IiwiZXJyIiwicmVzdWx0cyIsImZpZWxkcyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/deleteGrade.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/deleteGrade.js"));
module.exports = __webpack_exports__;

})();