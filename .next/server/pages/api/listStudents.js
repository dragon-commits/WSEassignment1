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
exports.id = "pages/api/listStudents";
exports.ids = ["pages/api/listStudents"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/listStudents.js":
/*!***********************************!*\
  !*** ./pages/api/listStudents.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ listAllStudentsQuery)\n/* harmony export */ });\nfunction listAllStudentsQuery(req, res) {\n    // get the client\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"example\",\n        port: 2222,\n        database: \"wse\"\n    });\n    // simple query\n    connection.query(\"SELECT * FROM students;\", function(err, results, fields) {\n        //loop over all the records\n        //return back the records#\n        res.status(200).json(results);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlzdFN0dWRlbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxvQkFBb0IsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFbkQsaUJBQWlCO0lBQ3JCLE1BQU1DLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0lBRS9CLG9DQUFvQztJQUNwQyxNQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQWdCLENBQUM7UUFDMUNDLElBQUksRUFBRSxXQUFXO1FBQ2pCQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxRQUFRLEVBQUUsU0FBUztRQUNuQkMsSUFBSSxFQUFFLElBQUk7UUFDVkMsUUFBUSxFQUFFLEtBQUs7S0FDZCxDQUFDO0lBRUYsZUFBZTtJQUNmTixVQUFVLENBQUNPLEtBQUssQ0FDaEIseUJBQXlCLEVBQ3pCLFNBQVNDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUU7UUFFM0IsMkJBQTJCO1FBRTNCLDBCQUEwQjtRQUMxQmIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsT0FBTyxDQUFDLENBQUM7SUFFbEMsQ0FBQyxDQUNBLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL2xpc3RTdHVkZW50cy5qcz8yZjNjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RBbGxTdHVkZW50c1F1ZXJ5KHJlcSwgcmVzKSB7XHJcbiAgXHJcbiAgICAvLyBnZXQgdGhlIGNsaWVudFxyXG5jb25zdCBteXNxbCA9IHJlcXVpcmUoJ215c3FsMicpO1xyXG5cclxuLy8gY3JlYXRlIHRoZSBjb25uZWN0aW9uIHRvIGRhdGFiYXNlXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuaG9zdDogJ2xvY2FsaG9zdCcsXHJcbnVzZXI6ICdyb290JyxcclxucGFzc3dvcmQ6ICdleGFtcGxlJyxcclxucG9ydDogMjIyMixcclxuZGF0YWJhc2U6ICd3c2UnXHJcbn0pO1xyXG5cclxuLy8gc2ltcGxlIHF1ZXJ5XHJcbmNvbm5lY3Rpb24ucXVlcnkoXHJcblwiU0VMRUNUICogRlJPTSBzdHVkZW50cztcIixcclxuZnVuY3Rpb24oZXJyLCByZXN1bHRzLCBmaWVsZHMpIHtcclxuXHJcbiAgICAvL2xvb3Agb3ZlciBhbGwgdGhlIHJlY29yZHNcclxuXHJcbiAgICAvL3JldHVybiBiYWNrIHRoZSByZWNvcmRzI1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0cyk7XHJcbiBcclxufVxyXG4pO1xyXG59Il0sIm5hbWVzIjpbImxpc3RBbGxTdHVkZW50c1F1ZXJ5IiwicmVxIiwicmVzIiwibXlzcWwiLCJyZXF1aXJlIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwicG9ydCIsImRhdGFiYXNlIiwicXVlcnkiLCJlcnIiLCJyZXN1bHRzIiwiZmllbGRzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/listStudents.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/listStudents.js"));
module.exports = __webpack_exports__;

})();