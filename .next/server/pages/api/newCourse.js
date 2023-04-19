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
exports.id = "pages/api/newCourse";
exports.ids = ["pages/api/newCourse"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/newCourse.js":
/*!********************************!*\
  !*** ./pages/api/newCourse.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newCourse)\n/* harmony export */ });\nfunction newCourse(req, res) {\n    console.log(\"newCourse api page called...\");\n    console.log(\"looking at the variables we got from the browser..\");\n    console.log(req.body);\n    // get the client\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"example\",\n        port: 2222,\n        database: \"wse\"\n    });\n    //Get the variables.\n    const title = req.body.title;\n    const desc = req.body.desc;\n    const nfq = req.body.nfq;\n    const courseyear = req.body.courseyear;\n    console.log(\"title is: \" + title);\n    console.log(\"desc is: \" + desc);\n    console.log(\"nfq is: \" + nfq);\n    console.log(\"courseyear is: \" + courseyear);\n    // simple query\n    connection.query(\"INSERT INTO `courses` (`title`, `desc`, `nfq`, `courseyear`) VALUES ('\" + title + \"', '\" + desc + \"', '\" + nfq + \"', '\" + courseyear + \"');\", function(err, results, fields) {\n        //return back the records\n        res.status(200).json(results);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3Q291cnNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxTQUFTLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBRXhDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQzVDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0lBQ2xFRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUVsQixpQkFBaUI7SUFDckIsTUFBTUMsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHNCQUFRLENBQUM7SUFFL0Isb0NBQW9DO0lBQ3BDLE1BQU1DLFVBQVUsR0FBR0YsS0FBSyxDQUFDRyxnQkFBZ0IsQ0FBQztRQUMxQ0MsSUFBSSxFQUFFLFdBQVc7UUFDakJDLElBQUksRUFBRSxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxTQUFTO1FBQ25CQyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxRQUFRLEVBQUUsS0FBSztLQUNkLENBQUM7SUFFRixvQkFBb0I7SUFDcEIsTUFBTUMsS0FBSyxHQUFHZCxHQUFHLENBQUNJLElBQUksQ0FBQ1UsS0FBSztJQUM1QixNQUFNQyxJQUFJLEdBQUdmLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDVyxJQUFJO0lBQzFCLE1BQU1DLEdBQUcsR0FBR2hCLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDWSxHQUFHO0lBQ3hCLE1BQU1DLFVBQVUsR0FBR2pCLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDYSxVQUFVO0lBRXRDZixPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEdBQUVXLEtBQUssQ0FBQyxDQUFDO0lBQ2pDWixPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEdBQUVZLElBQUksQ0FBQyxDQUFDO0lBQy9CYixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEdBQUVhLEdBQUcsQ0FBQyxDQUFDO0lBQzdCZCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRWMsVUFBVSxDQUFDLENBQUM7SUFFM0MsZUFBZTtJQUNmVixVQUFVLENBQUNXLEtBQUssQ0FDaEIsd0VBQXdFLEdBQUNKLEtBQUssR0FBQyxNQUFNLEdBQUNDLElBQUksR0FBQyxNQUFNLEdBQUNDLEdBQUcsR0FBQyxNQUFNLEdBQUNDLFVBQVUsR0FBQyxLQUFLLEVBQzdILFNBQVNFLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUU7UUFFM0IseUJBQXlCO1FBQ3pCcEIsR0FBRyxDQUFDcUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILE9BQU8sQ0FBQyxDQUFDO0lBRWxDLENBQUMsQ0FDQSxDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9uZXdDb3Vyc2UuanM/ZTE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdDb3Vyc2UocmVxLCByZXMpIHtcclxuICBcclxuICAgIGNvbnNvbGUubG9nKFwibmV3Q291cnNlIGFwaSBwYWdlIGNhbGxlZC4uLlwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwibG9va2luZyBhdCB0aGUgdmFyaWFibGVzIHdlIGdvdCBmcm9tIHRoZSBicm93c2VyLi5cIik7XHJcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcbiAgICBcclxuICAgICAgICAvLyBnZXQgdGhlIGNsaWVudFxyXG4gICAgY29uc3QgbXlzcWwgPSByZXF1aXJlKCdteXNxbDInKTtcclxuICAgIFxyXG4gICAgLy8gY3JlYXRlIHRoZSBjb25uZWN0aW9uIHRvIGRhdGFiYXNlXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiAnZXhhbXBsZScsXHJcbiAgICBwb3J0OiAyMjIyLFxyXG4gICAgZGF0YWJhc2U6ICd3c2UnXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy9HZXQgdGhlIHZhcmlhYmxlcy5cclxuICAgIGNvbnN0IHRpdGxlID0gcmVxLmJvZHkudGl0bGU7XHJcbiAgICBjb25zdCBkZXNjID0gcmVxLmJvZHkuZGVzYztcclxuICAgIGNvbnN0IG5mcSA9IHJlcS5ib2R5Lm5mcTtcclxuICAgIGNvbnN0IGNvdXJzZXllYXIgPSByZXEuYm9keS5jb3Vyc2V5ZWFyO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwidGl0bGUgaXM6IFwiKyB0aXRsZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImRlc2MgaXM6IFwiKyBkZXNjKTtcclxuICAgIGNvbnNvbGUubG9nKFwibmZxIGlzOiBcIisgbmZxKTtcclxuICAgIGNvbnNvbGUubG9nKFwiY291cnNleWVhciBpczogXCIrIGNvdXJzZXllYXIpO1xyXG5cclxuICAgIC8vIHNpbXBsZSBxdWVyeVxyXG4gICAgY29ubmVjdGlvbi5xdWVyeShcclxuICAgIFwiSU5TRVJUIElOVE8gYGNvdXJzZXNgIChgdGl0bGVgLCBgZGVzY2AsIGBuZnFgLCBgY291cnNleWVhcmApIFZBTFVFUyAoJ1wiK3RpdGxlK1wiJywgJ1wiK2Rlc2MrXCInLCAnXCIrbmZxK1wiJywgJ1wiK2NvdXJzZXllYXIrXCInKTtcIixcclxuICAgIGZ1bmN0aW9uKGVyciwgcmVzdWx0cywgZmllbGRzKSB7XHJcbiAgICBcclxuICAgICAgICAvL3JldHVybiBiYWNrIHRoZSByZWNvcmRzXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0cyk7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICApO1xyXG4gICAgfSJdLCJuYW1lcyI6WyJuZXdDb3Vyc2UiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIm15c3FsIiwicmVxdWlyZSIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsInBvcnQiLCJkYXRhYmFzZSIsInRpdGxlIiwiZGVzYyIsIm5mcSIsImNvdXJzZXllYXIiLCJxdWVyeSIsImVyciIsInJlc3VsdHMiLCJmaWVsZHMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/newCourse.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/newCourse.js"));
module.exports = __webpack_exports__;

})();