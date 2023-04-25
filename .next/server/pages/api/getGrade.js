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
exports.id = "pages/api/getGrade";
exports.ids = ["pages/api/getGrade"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/getGrade.js":
/*!*******************************!*\
  !*** ./pages/api/getGrade.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getGrade)\n/* harmony export */ });\nfunction getGrade(req, res) {\n    // get the ID for the query\n    console.log(\"get enrolled page ID for query \" + req.query.id);\n    let studentid = req.query.id;\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"example\",\n        port: 2222,\n        database: \"wse\"\n    });\n    connection.query(\"SELECT * FROM wse.grades WHERE sid = '\" + studentid + \"';\", function(err, results, fields) {\n        // return back the records\n        res.status(200).json(results);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0R3JhZGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLFFBQVEsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFM0MsMkJBQTJCO0lBQzNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUMsR0FBR0gsR0FBRyxDQUFDSSxLQUFLLENBQUNDLEVBQUUsQ0FBQyxDQUFDO0lBQzlELElBQUlDLFNBQVMsR0FBR04sR0FBRyxDQUFDSSxLQUFLLENBQUNDLEVBQUU7SUFFeEIsTUFBTUUsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHNCQUFRLENBQUM7SUFFN0Isb0NBQW9DO0lBQ3RDLE1BQU1DLFVBQVUsR0FBR0YsS0FBSyxDQUFDRyxnQkFBZ0IsQ0FBQztRQUN0Q0MsSUFBSSxFQUFFLFdBQVc7UUFDakJDLElBQUksRUFBRSxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxTQUFTO1FBQ25CQyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxRQUFRLEVBQUUsS0FBSztLQUNsQixDQUFDO0lBRUZOLFVBQVUsQ0FBQ0wsS0FBSyxDQUNaLHdDQUF3QyxHQUFDRSxTQUFTLEdBQUMsSUFBSSxFQUN2RCxTQUFTVSxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFO1FBRTNCLDBCQUEwQjtRQUMxQmpCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxPQUFPLENBQUMsQ0FBQztJQUVsQyxDQUFDLENBQ0osQ0FBQztBQUVOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvZ2V0R3JhZGUuanM/YTg0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRHcmFkZShyZXEsIHJlcykge1xyXG5cclxuLy8gZ2V0IHRoZSBJRCBmb3IgdGhlIHF1ZXJ5XHJcbmNvbnNvbGUubG9nKFwiZ2V0IGVucm9sbGVkIHBhZ2UgSUQgZm9yIHF1ZXJ5IFwiICsgcmVxLnF1ZXJ5LmlkKTtcclxubGV0IHN0dWRlbnRpZCA9IHJlcS5xdWVyeS5pZDtcclxuXHJcbiAgICBjb25zdCBteXNxbCA9IHJlcXVpcmUoJ215c3FsMicpO1xyXG5cclxuICAgICAgLy8gY3JlYXRlIHRoZSBjb25uZWN0aW9uIHRvIGRhdGFiYXNlXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICAgICAgdXNlcjogJ3Jvb3QnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnZXhhbXBsZScsXHJcbiAgICAgICAgcG9ydDogMjIyMixcclxuICAgICAgICBkYXRhYmFzZTogJ3dzZSdcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ucXVlcnkoXHJcbiAgICAgICAgXCJTRUxFQ1QgKiBGUk9NIHdzZS5ncmFkZXMgV0hFUkUgc2lkID0gJ1wiK3N0dWRlbnRpZCtcIic7XCIsXHJcbiAgICAgICAgZnVuY3Rpb24oZXJyLCByZXN1bHRzLCBmaWVsZHMpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHJldHVybiBiYWNrIHRoZSByZWNvcmRzXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxufSJdLCJuYW1lcyI6WyJnZXRHcmFkZSIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImlkIiwic3R1ZGVudGlkIiwibXlzcWwiLCJyZXF1aXJlIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwicG9ydCIsImRhdGFiYXNlIiwiZXJyIiwicmVzdWx0cyIsImZpZWxkcyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getGrade.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getGrade.js"));
module.exports = __webpack_exports__;

})();