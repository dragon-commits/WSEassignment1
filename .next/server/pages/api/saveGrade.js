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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SaveGrade)\n/* harmony export */ });\nfunction SaveGrade(req, res) {\n    const sid = req.body.sid;\n    const cid = req.body.cid;\n    const grade = req.body.grade;\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"example\",\n        port: 2222,\n        database: \"wse\"\n    });\n    connection.query(\"INSERT INTO wse.grades (sid,courseid,grade) VALUES ('\" + sid + \"','\" + cid + \"','\" + grade + \"');\", function(err, results, fields) {\n        // return back the records\n        res.status(200).json(results);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2F2ZUdyYWRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxTQUFTLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRXhDLE1BQU1DLEdBQUcsR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNELEdBQUc7SUFDeEIsTUFBTUUsR0FBRyxHQUFHSixHQUFHLENBQUNHLElBQUksQ0FBQ0MsR0FBRztJQUN4QixNQUFNQyxLQUFLLEdBQUdMLEdBQUcsQ0FBQ0csSUFBSSxDQUFDRSxLQUFLO0lBRzVCLE1BQU1DLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0lBRTdCLG9DQUFvQztJQUN0QyxNQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQWdCLENBQUM7UUFDdENDLElBQUksRUFBRSxXQUFXO1FBQ2pCQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxRQUFRLEVBQUUsU0FBUztRQUNuQkMsSUFBSSxFQUFFLElBQUk7UUFDVkMsUUFBUSxFQUFFLEtBQUs7S0FDbEIsQ0FBQztJQUdGTixVQUFVLENBQUNPLEtBQUssQ0FDWix1REFBdUQsR0FBQ2IsR0FBRyxHQUFDLEtBQUssR0FBQ0UsR0FBRyxHQUFDLEtBQUssR0FBQ0MsS0FBSyxHQUFDLEtBQUssRUFDdkYsU0FBU1csR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRTtRQU0zQiwwQkFBMEI7UUFDMUJqQixHQUFHLENBQUNrQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsT0FBTyxDQUFDLENBQUM7SUFNbEMsQ0FBQyxDQUNKLENBQUM7QUFPTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL3NhdmVHcmFkZS5qcz85MDdlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmVHcmFkZShyZXEsIHJlcykge1xyXG5cclxuICAgIGNvbnN0IHNpZCA9IHJlcS5ib2R5LnNpZDtcclxuICAgIGNvbnN0IGNpZCA9IHJlcS5ib2R5LmNpZDtcclxuICAgIGNvbnN0IGdyYWRlID0gcmVxLmJvZHkuZ3JhZGU7XHJcblxyXG5cclxuICAgIGNvbnN0IG15c3FsID0gcmVxdWlyZSgnbXlzcWwyJyk7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdGhlIGNvbm5lY3Rpb24gdG8gZGF0YWJhc2VcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgICAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgICAgICB1c2VyOiAncm9vdCcsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdleGFtcGxlJyxcclxuICAgICAgICBwb3J0OiAyMjIyLFxyXG4gICAgICAgIGRhdGFiYXNlOiAnd3NlJ1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGNvbm5lY3Rpb24ucXVlcnkoXHJcbiAgICAgICAgXCJJTlNFUlQgSU5UTyB3c2UuZ3JhZGVzIChzaWQsY291cnNlaWQsZ3JhZGUpIFZBTFVFUyAoJ1wiK3NpZCtcIicsJ1wiK2NpZCtcIicsJ1wiK2dyYWRlK1wiJyk7XCIsXHJcbiAgICAgICAgZnVuY3Rpb24oZXJyLCByZXN1bHRzLCBmaWVsZHMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gcmV0dXJuIGJhY2sgdGhlIHJlY29yZHNcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0cyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgICAgXHJcbiBcclxuICAgICBcclxuICAgICBcclxuICAgICBcclxuXHJcbn0iXSwibmFtZXMiOlsiU2F2ZUdyYWRlIiwicmVxIiwicmVzIiwic2lkIiwiYm9keSIsImNpZCIsImdyYWRlIiwibXlzcWwiLCJyZXF1aXJlIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwicG9ydCIsImRhdGFiYXNlIiwicXVlcnkiLCJlcnIiLCJyZXN1bHRzIiwiZmllbGRzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/saveGrade.js\n");

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