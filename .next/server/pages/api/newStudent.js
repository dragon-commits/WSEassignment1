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
exports.id = "pages/api/newStudent";
exports.ids = ["pages/api/newStudent"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/newStudent.js":
/*!*********************************!*\
  !*** ./pages/api/newStudent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newStudent)\n/* harmony export */ });\nfunction newStudent(req, res) {\n    console.log(\"newStudent api page called...\");\n    console.log(\"looking at the variables we got from the browser..\");\n    console.log(req.body);\n    // get the client\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"example\",\n        port: 2222,\n        database: \"wse\"\n    });\n    //Get the variables.\n    const firstname = req.body.firstname;\n    const lastname = req.body.lastname;\n    const email = req.body.email;\n    const address = req.body.address;\n    const telephone = req.body.telephone;\n    const enrolledin = req.body.enrolledin;\n    console.log(\"firstname is \" + firstname);\n    console.log(\"lastname is \" + lastname);\n    console.log(\"email is \" + email);\n    console.log(\"address is \" + address);\n    console.log(\"telephone is \" + telephone);\n    console.log(\"enrolledin is \" + enrolledin);\n    // simple query\n    connection.query(\"INSERT INTO `students` (`firstname`, `lastname`, `email`, `address`, `telephone`, `enrolledin`) VALUES ('\" + firstname + \"', '\" + lastname + \"', '\" + email + \"', '\" + address + \"', '\" + telephone + \"', '\" + enrolledin + \"');\", function(err, results, fields) {\n        //return back the records\n        res.status(200).json(\"ok\");\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3U3R1ZGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsVUFBVSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUV6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUM3Q0QsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQztJQUNsRUQsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7SUFFbEIsaUJBQWlCO0lBQ3JCLE1BQU1DLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0lBRS9CLG9DQUFvQztJQUNwQyxNQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQWdCLENBQUM7UUFDMUNDLElBQUksRUFBRSxXQUFXO1FBQ2pCQyxJQUFJLEVBQUUsTUFBTTtRQUNaQyxRQUFRLEVBQUUsU0FBUztRQUNuQkMsSUFBSSxFQUFFLElBQUk7UUFDVkMsUUFBUSxFQUFFLEtBQUs7S0FDZCxDQUFDO0lBRUYsb0JBQW9CO0lBQ3BCLE1BQU1DLFNBQVMsR0FBR2QsR0FBRyxDQUFDSSxJQUFJLENBQUNVLFNBQVM7SUFDcEMsTUFBTUMsUUFBUSxHQUFHZixHQUFHLENBQUNJLElBQUksQ0FBQ1csUUFBUTtJQUNsQyxNQUFNQyxLQUFLLEdBQUdoQixHQUFHLENBQUNJLElBQUksQ0FBQ1ksS0FBSztJQUM1QixNQUFNQyxPQUFPLEdBQUdqQixHQUFHLENBQUNJLElBQUksQ0FBQ2EsT0FBTztJQUNoQyxNQUFNQyxTQUFTLEdBQUdsQixHQUFHLENBQUNJLElBQUksQ0FBQ2MsU0FBUztJQUNwQyxNQUFNQyxVQUFVLEdBQUduQixHQUFHLENBQUNJLElBQUksQ0FBQ2UsVUFBVTtJQUV0Q2pCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsR0FBR1csU0FBUyxDQUFDLENBQUM7SUFDekNaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsR0FBR1ksUUFBUSxDQUFDLENBQUM7SUFDdkNiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsR0FBR2EsS0FBSyxDQUFDLENBQUM7SUFDakNkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsR0FBR2MsT0FBTyxDQUFDLENBQUM7SUFDckNmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsR0FBR2UsU0FBUyxDQUFDLENBQUM7SUFDekNoQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBR2dCLFVBQVUsQ0FBQyxDQUFDO0lBRTNDLGVBQWU7SUFDZlosVUFBVSxDQUFDYSxLQUFLLENBQ2hCLDJHQUEyRyxHQUFDTixTQUFTLEdBQUMsTUFBTSxHQUFDQyxRQUFRLEdBQUMsTUFBTSxHQUFDQyxLQUFLLEdBQUMsTUFBTSxHQUFDQyxPQUFPLEdBQUMsTUFBTSxHQUFDQyxTQUFTLEdBQUMsTUFBTSxHQUFDQyxVQUFVLEdBQUMsS0FBSyxFQUMxTSxTQUFTRSxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFO1FBRTNCLHlCQUF5QjtRQUN6QnRCLEdBQUcsQ0FBQ3VCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9CLENBQUMsQ0FDQSxDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9uZXdTdHVkZW50LmpzP2NjY2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3U3R1ZGVudChyZXEsIHJlcykge1xyXG4gIFxyXG4gICAgY29uc29sZS5sb2coXCJuZXdTdHVkZW50IGFwaSBwYWdlIGNhbGxlZC4uLlwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwibG9va2luZyBhdCB0aGUgdmFyaWFibGVzIHdlIGdvdCBmcm9tIHRoZSBicm93c2VyLi5cIik7XHJcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcbiAgICBcclxuICAgICAgICAvLyBnZXQgdGhlIGNsaWVudFxyXG4gICAgY29uc3QgbXlzcWwgPSByZXF1aXJlKCdteXNxbDInKTtcclxuICAgIFxyXG4gICAgLy8gY3JlYXRlIHRoZSBjb25uZWN0aW9uIHRvIGRhdGFiYXNlXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiAnZXhhbXBsZScsXHJcbiAgICBwb3J0OiAyMjIyLFxyXG4gICAgZGF0YWJhc2U6ICd3c2UnXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy9HZXQgdGhlIHZhcmlhYmxlcy5cclxuICAgIGNvbnN0IGZpcnN0bmFtZSA9IHJlcS5ib2R5LmZpcnN0bmFtZTtcclxuICAgIGNvbnN0IGxhc3RuYW1lID0gcmVxLmJvZHkubGFzdG5hbWU7XHJcbiAgICBjb25zdCBlbWFpbCA9IHJlcS5ib2R5LmVtYWlsO1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IHJlcS5ib2R5LmFkZHJlc3M7XHJcbiAgICBjb25zdCB0ZWxlcGhvbmUgPSByZXEuYm9keS50ZWxlcGhvbmU7XHJcbiAgICBjb25zdCBlbnJvbGxlZGluID0gcmVxLmJvZHkuZW5yb2xsZWRpbjtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImZpcnN0bmFtZSBpcyBcIiArIGZpcnN0bmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImxhc3RuYW1lIGlzIFwiICsgbGFzdG5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJlbWFpbCBpcyBcIiArIGVtYWlsKTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkcmVzcyBpcyBcIiArIGFkZHJlc3MpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0ZWxlcGhvbmUgaXMgXCIgKyB0ZWxlcGhvbmUpO1xyXG4gICAgY29uc29sZS5sb2coXCJlbnJvbGxlZGluIGlzIFwiICsgZW5yb2xsZWRpbik7XHJcblxyXG4gICAgLy8gc2ltcGxlIHF1ZXJ5XHJcbiAgICBjb25uZWN0aW9uLnF1ZXJ5KFxyXG4gICAgXCJJTlNFUlQgSU5UTyBgc3R1ZGVudHNgIChgZmlyc3RuYW1lYCwgYGxhc3RuYW1lYCwgYGVtYWlsYCwgYGFkZHJlc3NgLCBgdGVsZXBob25lYCwgYGVucm9sbGVkaW5gKSBWQUxVRVMgKCdcIitmaXJzdG5hbWUrXCInLCAnXCIrbGFzdG5hbWUrXCInLCAnXCIrZW1haWwrXCInLCAnXCIrYWRkcmVzcytcIicsICdcIit0ZWxlcGhvbmUrXCInLCAnXCIrZW5yb2xsZWRpbitcIicpO1wiLFxyXG4gICAgZnVuY3Rpb24oZXJyLCByZXN1bHRzLCBmaWVsZHMpIHtcclxuICAgIFxyXG4gICAgICAgIC8vcmV0dXJuIGJhY2sgdGhlIHJlY29yZHNcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihcIm9rXCIpO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgKTtcclxuICAgIH0iXSwibmFtZXMiOlsibmV3U3R1ZGVudCIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwibXlzcWwiLCJyZXF1aXJlIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwicG9ydCIsImRhdGFiYXNlIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJlbWFpbCIsImFkZHJlc3MiLCJ0ZWxlcGhvbmUiLCJlbnJvbGxlZGluIiwicXVlcnkiLCJlcnIiLCJyZXN1bHRzIiwiZmllbGRzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/newStudent.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/newStudent.js"));
module.exports = __webpack_exports__;

})();