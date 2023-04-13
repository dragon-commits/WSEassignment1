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
exports.id = "pages/api/listCourses";
exports.ids = ["pages/api/listCourses"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/listCourses.js":
/*!**********************************!*\
  !*** ./pages/api/listCourses.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ listAllCoursesQuery)\n/* harmony export */ });\nfunction listAllCoursesQuery(req, res) {\n    // get the client\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"example\",\n        port: 2222,\n        database: \"wse\"\n    });\n    // simple query\n    connection.query(\"SELECT * FROM courses;\", function(err, results, fields) {\n        //loop over all the records\n        //return back the records#\n        res.status(200).json(results);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlzdENvdXJzZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLG1CQUFtQixDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU5QyxpQkFBaUI7SUFDdkIsTUFBTUMsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHNCQUFRLENBQUM7SUFFL0Isb0NBQW9DO0lBQ3BDLE1BQU1DLFVBQVUsR0FBR0YsS0FBSyxDQUFDRyxnQkFBZ0IsQ0FBQztRQUN4Q0MsSUFBSSxFQUFFLFdBQVc7UUFDakJDLElBQUksRUFBRSxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxTQUFTO1FBQ25CQyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0lBRUEsZUFBZTtJQUNqQk4sVUFBVSxDQUFDTyxLQUFLLENBQ2Qsd0JBQXdCLEVBQ3hCLFNBQVNDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUU7UUFFM0IsMkJBQTJCO1FBRTNCLDBCQUEwQjtRQUMxQmIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsT0FBTyxDQUFDLENBQUM7SUFFbEMsQ0FBQyxDQUNGLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL2xpc3RDb3Vyc2VzLmpzPzk3MGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdEFsbENvdXJzZXNRdWVyeShyZXEsIHJlcykge1xyXG4gIFxyXG4gICAgICAgIC8vIGdldCB0aGUgY2xpZW50XHJcbiAgY29uc3QgbXlzcWwgPSByZXF1aXJlKCdteXNxbDInKTtcclxuICBcclxuICAvLyBjcmVhdGUgdGhlIGNvbm5lY3Rpb24gdG8gZGF0YWJhc2VcclxuICBjb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiAnZXhhbXBsZScsXHJcbiAgICBwb3J0OiAyMjIyLFxyXG4gICAgZGF0YWJhc2U6ICd3c2UnXHJcbiAgfSk7XHJcbiAgXHJcbiAgICAvLyBzaW1wbGUgcXVlcnlcclxuICBjb25uZWN0aW9uLnF1ZXJ5KFxyXG4gICAgXCJTRUxFQ1QgKiBGUk9NIGNvdXJzZXM7XCIsXHJcbiAgICBmdW5jdGlvbihlcnIsIHJlc3VsdHMsIGZpZWxkcykge1xyXG5cclxuICAgICAgICAvL2xvb3Agb3ZlciBhbGwgdGhlIHJlY29yZHNcclxuXHJcbiAgICAgICAgLy9yZXR1cm4gYmFjayB0aGUgcmVjb3JkcyNcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHRzKTtcclxuICAgICBcclxuICAgIH1cclxuICApO1xyXG4gIH0iXSwibmFtZXMiOlsibGlzdEFsbENvdXJzZXNRdWVyeSIsInJlcSIsInJlcyIsIm15c3FsIiwicmVxdWlyZSIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsInBvcnQiLCJkYXRhYmFzZSIsInF1ZXJ5IiwiZXJyIiwicmVzdWx0cyIsImZpZWxkcyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/listCourses.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/listCourses.js"));
module.exports = __webpack_exports__;

})();