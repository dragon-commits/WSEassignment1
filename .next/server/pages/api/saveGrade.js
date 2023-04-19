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
exports.id = "pages/api/saveGrade";
exports.ids = ["pages/api/saveGrade"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/saveGrade.js":
/*!********************************!*\
  !*** ./pages/api/saveGrade.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SaveGrade)\n/* harmony export */ });\nfunction SaveGrade(req, res) {\n    const cid = req.body.cid;\n    const sid = req.body.sid;\n    const grade = req.body.grade;\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"example\",\n        port: 2222,\n        database: \"wse\"\n    });\n    connection.query(\"INSERT INTO wse.grades (sid,courseid,grade) VALUES ('\" + sid + \"','\" + cid + \"','\" + grade + \"');\", function(err, results, fields) {\n        // return back the records\n        res.status(200).json(results);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2F2ZUdyYWRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxTQUFTLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBR3hDLE1BQU1DLEdBQUcsR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNELEdBQUc7SUFDeEIsTUFBTUUsR0FBRyxHQUFHSixHQUFHLENBQUNHLElBQUksQ0FBQ0MsR0FBRztJQUN4QixNQUFNQyxLQUFLLEdBQUdMLEdBQUcsQ0FBQ0csSUFBSSxDQUFDRSxLQUFLO0lBRzVCLE1BQU1DLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0lBRTdCLG9DQUFvQztJQUN0QyxNQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQWdCLENBQUM7UUFDdENDLElBQUksRUFBRSxXQUFXO1FBQ2pCQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxRQUFRLEVBQUUsU0FBUztRQUNuQkMsSUFBSSxFQUFFLElBQUk7UUFDVkMsUUFBUSxFQUFFLEtBQUs7S0FDbEIsQ0FBQztJQUdGTixVQUFVLENBQUNPLEtBQUssQ0FDWix1REFBdUQsR0FBQ1gsR0FBRyxHQUFDLEtBQUssR0FBQ0YsR0FBRyxHQUFDLEtBQUssR0FBQ0csS0FBSyxHQUFDLEtBQUssRUFDdkYsU0FBU1csR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRTtRQU0zQiwwQkFBMEI7UUFDMUJqQixHQUFHLENBQUNrQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsT0FBTyxDQUFDLENBQUM7SUFNbEMsQ0FBQyxDQUNKLENBQUM7QUFPTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL3NhdmVHcmFkZS5qcz85MDdlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmVHcmFkZShyZXEsIHJlcykge1xyXG5cclxuIFxyXG4gICAgY29uc3QgY2lkID0gcmVxLmJvZHkuY2lkO1xyXG4gICAgY29uc3Qgc2lkID0gcmVxLmJvZHkuc2lkO1xyXG4gICAgY29uc3QgZ3JhZGUgPSByZXEuYm9keS5ncmFkZTtcclxuXHJcblxyXG4gICAgY29uc3QgbXlzcWwgPSByZXF1aXJlKCdteXNxbDInKTtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgY29ubmVjdGlvbiB0byBkYXRhYmFzZVxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgICAgIHVzZXI6ICdyb290JyxcclxuICAgICAgICBwYXNzd29yZDogJ2V4YW1wbGUnLFxyXG4gICAgICAgIHBvcnQ6IDIyMjIsXHJcbiAgICAgICAgZGF0YWJhc2U6ICd3c2UnXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29ubmVjdGlvbi5xdWVyeShcclxuICAgICAgICBcIklOU0VSVCBJTlRPIHdzZS5ncmFkZXMgKHNpZCxjb3Vyc2VpZCxncmFkZSkgVkFMVUVTICgnXCIrc2lkK1wiJywnXCIrY2lkK1wiJywnXCIrZ3JhZGUrXCInKTtcIixcclxuICAgICAgICBmdW5jdGlvbihlcnIsIHJlc3VsdHMsIGZpZWxkcykge1xyXG5cclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAvLyByZXR1cm4gYmFjayB0aGUgcmVjb3Jkc1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHRzKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICAgICBcclxuIFxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgIFxyXG5cclxufSJdLCJuYW1lcyI6WyJTYXZlR3JhZGUiLCJyZXEiLCJyZXMiLCJjaWQiLCJib2R5Iiwic2lkIiwiZ3JhZGUiLCJteXNxbCIsInJlcXVpcmUiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJwb3J0IiwiZGF0YWJhc2UiLCJxdWVyeSIsImVyciIsInJlc3VsdHMiLCJmaWVsZHMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/saveGrade.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/saveGrade.js"));
module.exports = __webpack_exports__;

})();