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
exports.id = "pages/api/getEnrolledStudents";
exports.ids = ["pages/api/getEnrolledStudents"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/getEnrolledStudents.js":
/*!******************************************!*\
  !*** ./pages/api/getEnrolledStudents.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getEnrolledStudents)\n/* harmony export */ });\nfunction getEnrolledStudents(req, res) {\n    // get the ID for the query\n    console.log(\"get enrolled page ID for query \" + req.query.id);\n    let currentID = req.query.id;\n    // get the client\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"example\",\n        port: 2222,\n        database: \"wse\"\n    });\n    // simple query\n    connection.query(\"SELECT * FROM students where enrolledin = '\" + currentID + \"';\", function(err, results, fields) {\n        //return back the records#\n        res.status(200).json(results);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0RW5yb2xsZWRTdHVkZW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsbUJBQW1CLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRXRELDJCQUEyQjtJQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUNBQWlDLEdBQUdILEdBQUcsQ0FBQ0ksS0FBSyxDQUFDQyxFQUFFLENBQUMsQ0FBQztJQUM5RCxJQUFJQyxTQUFTLEdBQUdOLEdBQUcsQ0FBQ0ksS0FBSyxDQUFDQyxFQUFFO0lBRXhCLGlCQUFpQjtJQUNyQixNQUFNRSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsc0JBQVEsQ0FBQztJQUUvQixvQ0FBb0M7SUFDcEMsTUFBTUMsVUFBVSxHQUFHRixLQUFLLENBQUNHLGdCQUFnQixDQUFDO1FBQzFDQyxJQUFJLEVBQUUsV0FBVztRQUNqQkMsSUFBSSxFQUFFLE1BQU07UUFDWkMsUUFBUSxFQUFFLFNBQVM7UUFDbkJDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFFBQVEsRUFBRSxLQUFLO0tBQ2QsQ0FBQztJQUVGLGVBQWU7SUFDZk4sVUFBVSxDQUFDTCxLQUFLLENBQ2hCLDZDQUE2QyxHQUFDRSxTQUFTLEdBQUMsSUFBSSxFQUM1RCxTQUFTVSxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFO1FBRTNCLDBCQUEwQjtRQUMxQmpCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSCxPQUFPLENBQUMsQ0FBQztJQUVsQyxDQUFDLENBQ0EsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvZ2V0RW5yb2xsZWRTdHVkZW50cy5qcz8xMTIxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEVucm9sbGVkU3R1ZGVudHMocmVxLCByZXMpIHtcclxuICBcclxuLy8gZ2V0IHRoZSBJRCBmb3IgdGhlIHF1ZXJ5XHJcbmNvbnNvbGUubG9nKFwiZ2V0IGVucm9sbGVkIHBhZ2UgSUQgZm9yIHF1ZXJ5IFwiICsgcmVxLnF1ZXJ5LmlkKTtcclxubGV0IGN1cnJlbnRJRCA9IHJlcS5xdWVyeS5pZDtcclxuXHJcbiAgICAvLyBnZXQgdGhlIGNsaWVudFxyXG5jb25zdCBteXNxbCA9IHJlcXVpcmUoJ215c3FsMicpO1xyXG5cclxuLy8gY3JlYXRlIHRoZSBjb25uZWN0aW9uIHRvIGRhdGFiYXNlXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuaG9zdDogJ2xvY2FsaG9zdCcsXHJcbnVzZXI6ICdyb290JyxcclxucGFzc3dvcmQ6ICdleGFtcGxlJyxcclxucG9ydDogMjIyMixcclxuZGF0YWJhc2U6ICd3c2UnXHJcbn0pO1xyXG5cclxuLy8gc2ltcGxlIHF1ZXJ5XHJcbmNvbm5lY3Rpb24ucXVlcnkoXHJcblwiU0VMRUNUICogRlJPTSBzdHVkZW50cyB3aGVyZSBlbnJvbGxlZGluID0gJ1wiK2N1cnJlbnRJRCtcIic7XCIsXHJcbmZ1bmN0aW9uKGVyciwgcmVzdWx0cywgZmllbGRzKSB7XHJcblxyXG4gICAgLy9yZXR1cm4gYmFjayB0aGUgcmVjb3JkcyNcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMpO1xyXG4gXHJcbn1cclxuKTtcclxufSJdLCJuYW1lcyI6WyJnZXRFbnJvbGxlZFN0dWRlbnRzIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaWQiLCJjdXJyZW50SUQiLCJteXNxbCIsInJlcXVpcmUiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJwb3J0IiwiZGF0YWJhc2UiLCJlcnIiLCJyZXN1bHRzIiwiZmllbGRzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getEnrolledStudents.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getEnrolledStudents.js"));
module.exports = __webpack_exports__;

})();