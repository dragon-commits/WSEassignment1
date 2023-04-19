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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    console.log(\"login api page called...\");\n    console.log(\"looking at the variables we got from the browser..\");\n    console.log(req.body);\n    // Get just the username and password and put them into variables.\n    const username = req.body.username;\n    const pass = req.body.password;\n    console.log(\"username is: \" + username);\n    console.log(\"password  is: \" + pass);\n    // get the client\n    const mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n    // create the connection to database\n    const connection = mysql.createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"example\",\n        port: 2222,\n        database: \"wse\"\n    });\n    // simple query\n    connection.query(\"SELECT * FROM adminlogin WHERE username = '\" + username + \"' AND pass = '\" + pass + \"' LIMIT 1;\", function(err, results, fields) {\n        console.log(results); // results contains rows returned by server\n        // sending back the result.\n        if (results.length == 1) {\n            res.status(200).json(\"ok\");\n        } else {\n            res.status(200).json(\"fail\");\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLGVBQWVBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFOUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFFeENELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7SUFDbEVELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBRXRCLGtFQUFrRTtJQUNsRSxNQUFNQyxRQUFRLEdBQUdMLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxRQUFRO0lBQ2xDLE1BQU1DLElBQUksR0FBR04sR0FBRyxDQUFDSSxJQUFJLENBQUNHLFFBQVE7SUFFOUJMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsR0FBRUUsUUFBUSxDQUFDLENBQUM7SUFDdkNILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixHQUFFRyxJQUFJLENBQUMsQ0FBQztJQUVoQyxpQkFBaUI7SUFDdkIsTUFBTUUsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHNCQUFRLENBQUM7SUFFL0Isb0NBQW9DO0lBQ3BDLE1BQU1DLFVBQVUsR0FBR0YsS0FBSyxDQUFDRyxnQkFBZ0IsQ0FBQztRQUN4Q0MsSUFBSSxFQUFFLFdBQVc7UUFDakJDLElBQUksRUFBRSxNQUFNO1FBQ1pOLFFBQVEsRUFBRSxTQUFTO1FBQ25CTyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0lBRUEsZUFBZTtJQUNqQkwsVUFBVSxDQUFDTSxLQUFLLENBQ2QsNkNBQTZDLEdBQUNYLFFBQVEsR0FBQyxnQkFBZ0IsR0FBQ0MsSUFBSSxHQUFDLFlBQVksRUFDekYsU0FBU1csR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRTtRQUU3QmpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZSxPQUFPLENBQUMsQ0FBQyxDQUFDLDJDQUEyQztRQUVqRSwyQkFBMkI7UUFDM0IsSUFBR0EsT0FBTyxDQUFDRSxNQUFNLElBQUksQ0FBQyxFQUFDO1lBRXRCbkIsR0FBRyxDQUFDb0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHeEIsT0FBUTtZQUVWckIsR0FBRyxDQUFDb0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0IsQ0FBQztJQUVILENBQUMsQ0FDRixDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuXHJcbiAgY29uc29sZS5sb2coXCJsb2dpbiBhcGkgcGFnZSBjYWxsZWQuLi5cIik7XHJcbiBcclxuICBjb25zb2xlLmxvZyhcImxvb2tpbmcgYXQgdGhlIHZhcmlhYmxlcyB3ZSBnb3QgZnJvbSB0aGUgYnJvd3Nlci4uXCIpO1xyXG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuXHJcbiAgLy8gR2V0IGp1c3QgdGhlIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBhbmQgcHV0IHRoZW0gaW50byB2YXJpYWJsZXMuXHJcbiAgY29uc3QgdXNlcm5hbWUgPSByZXEuYm9keS51c2VybmFtZTtcclxuICBjb25zdCBwYXNzID0gcmVxLmJvZHkucGFzc3dvcmQ7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwidXNlcm5hbWUgaXM6IFwiKyB1c2VybmFtZSk7XHJcbiAgY29uc29sZS5sb2coXCJwYXNzd29yZCAgaXM6IFwiKyBwYXNzKTtcclxuXHJcbiAgICAgIC8vIGdldCB0aGUgY2xpZW50XHJcbmNvbnN0IG15c3FsID0gcmVxdWlyZSgnbXlzcWwyJyk7XHJcblxyXG4vLyBjcmVhdGUgdGhlIGNvbm5lY3Rpb24gdG8gZGF0YWJhc2VcclxuY29uc3QgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gIHVzZXI6ICdyb290JyxcclxuICBwYXNzd29yZDogJ2V4YW1wbGUnLFxyXG4gIHBvcnQ6IDIyMjIsXHJcbiAgZGF0YWJhc2U6ICd3c2UnXHJcbn0pO1xyXG5cclxuICAvLyBzaW1wbGUgcXVlcnlcclxuY29ubmVjdGlvbi5xdWVyeShcclxuICBcIlNFTEVDVCAqIEZST00gYWRtaW5sb2dpbiBXSEVSRSB1c2VybmFtZSA9ICdcIit1c2VybmFtZStcIicgQU5EIHBhc3MgPSAnXCIrcGFzcytcIicgTElNSVQgMTtcIixcclxuICBmdW5jdGlvbihlcnIsIHJlc3VsdHMsIGZpZWxkcykge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpOyAvLyByZXN1bHRzIGNvbnRhaW5zIHJvd3MgcmV0dXJuZWQgYnkgc2VydmVyXHJcblxyXG4gICAgLy8gc2VuZGluZyBiYWNrIHRoZSByZXN1bHQuXHJcbiAgICBpZihyZXN1bHRzLmxlbmd0aCA9PSAxKXtcclxuXHJcbiAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oXCJva1wiKTtcclxuXHJcbiBcclxuICAgICAgICB9ICBlbHNlIHtcclxuICAgICBcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oXCJmYWlsXCIpO1xyXG5cclxuICAgIH1cclxuICAgXHJcbiAgfVxyXG4pO1xyXG59Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInVzZXJuYW1lIiwicGFzcyIsInBhc3N3b3JkIiwibXlzcWwiLCJyZXF1aXJlIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBvcnQiLCJkYXRhYmFzZSIsInF1ZXJ5IiwiZXJyIiwicmVzdWx0cyIsImZpZWxkcyIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();