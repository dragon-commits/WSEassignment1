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
exports.id = "pages/api/deleteStudent";
exports.ids = ["pages/api/deleteStudent"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/deleteStudent.js":
/*!************************************!*\
  !*** ./pages/api/deleteStudent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteStudent)\n/* harmony export */ });\nfunction deleteStudent(req, res) {\n    console.log(\"deleteStudent api page called...\");\n    console.log(\"looking at the variables we got from the browser..\");\n    console.log(req.body);\n    const studentid = req.body.id;\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"example\",\n        port: 2222,\n        database: \"wse\"\n    });\n    connection.query(\"DELETE FROM wse.students WHERE id = '\" + studentid + \"';\", function(err, results, fields) {\n        // return back the records\n        res.status(200).json(results);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGVsZXRlU3R1ZGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsYUFBYSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU1Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUVoREQsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQztJQUNsRUQsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7SUFFdEIsTUFBTUMsU0FBUyxHQUFHTCxHQUFHLENBQUNJLElBQUksQ0FBQ0UsRUFBRTtJQUU3QixNQUFNQyxLQUFLLEdBQUdDLG1CQUFPLENBQUMsc0JBQVEsQ0FBQztJQUU3QixvQ0FBb0M7SUFDdEMsTUFBTUMsVUFBVSxHQUFHRixLQUFLLENBQUNHLGdCQUFnQixDQUFDO1FBQ3RDQyxJQUFJLEVBQUUsV0FBVztRQUNqQkMsSUFBSSxFQUFFLE1BQU07UUFDWkMsUUFBUSxFQUFFLFNBQVM7UUFDbkJDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFFBQVEsRUFBRSxLQUFLO0tBQ2xCLENBQUM7SUFFRk4sVUFBVSxDQUFDTyxLQUFLLENBQ1osdUNBQXVDLEdBQUNYLFNBQVMsR0FBQyxJQUFJLEVBQ3RELFNBQVNZLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUU7UUFFM0IsMEJBQTBCO1FBQzFCbEIsR0FBRyxDQUFDbUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILE9BQU8sQ0FBQyxDQUFDO0lBRWxDLENBQUMsQ0FDSixDQUFDO0FBRU4sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9kZWxldGVTdHVkZW50LmpzP2RiNGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlU3R1ZGVudChyZXEsIHJlcykge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlU3R1ZGVudCBhcGkgcGFnZSBjYWxsZWQuLi5cIik7XHJcbiBcclxuICAgIGNvbnNvbGUubG9nKFwibG9va2luZyBhdCB0aGUgdmFyaWFibGVzIHdlIGdvdCBmcm9tIHRoZSBicm93c2VyLi5cIik7XHJcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcblxyXG4gICAgY29uc3Qgc3R1ZGVudGlkID0gcmVxLmJvZHkuaWQ7XHJcblxyXG4gICAgY29uc3QgbXlzcWwgPSByZXF1aXJlKCdteXNxbDInKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgY29ubmVjdGlvbiB0byBkYXRhYmFzZVxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgICAgIHVzZXI6ICdyb290JyxcclxuICAgICAgICBwYXNzd29yZDogJ2V4YW1wbGUnLFxyXG4gICAgICAgIHBvcnQ6IDIyMjIsXHJcbiAgICAgICAgZGF0YWJhc2U6ICd3c2UnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25uZWN0aW9uLnF1ZXJ5KFxyXG4gICAgICAgIFwiREVMRVRFIEZST00gd3NlLnN0dWRlbnRzIFdIRVJFIGlkID0gJ1wiK3N0dWRlbnRpZCtcIic7XCIsXHJcbiAgICAgICAgZnVuY3Rpb24oZXJyLCByZXN1bHRzLCBmaWVsZHMpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHJldHVybiBiYWNrIHRoZSByZWNvcmRzXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxufSJdLCJuYW1lcyI6WyJkZWxldGVTdHVkZW50IiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJzdHVkZW50aWQiLCJpZCIsIm15c3FsIiwicmVxdWlyZSIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsInBvcnQiLCJkYXRhYmFzZSIsInF1ZXJ5IiwiZXJyIiwicmVzdWx0cyIsImZpZWxkcyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/deleteStudent.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/deleteStudent.js"));
module.exports = __webpack_exports__;

})();