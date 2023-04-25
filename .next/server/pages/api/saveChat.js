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
exports.id = "pages/api/saveChat";
exports.ids = ["pages/api/saveChat"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/saveChat.js":
/*!*******************************!*\
  !*** ./pages/api/saveChat.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ saveChat)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction saveChat(req, res) {\n    // catching the variables\n    const username = req.body.username;\n    const comment = req.body.comment;\n    // Replace the uri string with your MongoDB deployment's connection string.\n    const uri = \"mongodb://root:example@0.0.0.0:6666\";\n    // create mongo connection client\n    const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n    async function run() {\n        try {\n            const database = client.db(\"courses\");\n            const col = database.collection(\"chats\");\n            // create a document to insert\n            const doc = {\n                username: username,\n                content: comment\n            };\n            const result = await col.insertOne(doc);\n            console.log(`A document was inserted with the _id: ${result.insertedId}`);\n        } finally{\n            await client.close();\n        }\n    }\n    run().catch(console.dir);\n    // return back the records\n    res.status(200).json(username + \" \" + comment);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2F2ZUNoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXRCLFNBQVNDLFFBQVEsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFekMseUJBQXlCO0lBQ3ZCLE1BQU1DLFFBQVEsR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNELFFBQVE7SUFDbEMsTUFBTUUsT0FBTyxHQUFHSixHQUFHLENBQUNHLElBQUksQ0FBQ0MsT0FBTztJQUVwQywyRUFBMkU7SUFDM0UsTUFBTUMsR0FBRyxHQUFHLHFDQUFxQztJQUVqRCxpQ0FBaUM7SUFDakMsTUFBTUMsTUFBTSxHQUFHLElBQUlSLGdEQUFXLENBQUNPLEdBQUcsQ0FBQztJQUVuQyxlQUFlRSxHQUFHLEdBQUc7UUFDbkIsSUFBSTtZQUNGLE1BQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ3JDLE1BQU1DLEdBQUcsR0FBR0YsUUFBUSxDQUFDRyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBRXhDLDhCQUE4QjtZQUM5QixNQUFNQyxHQUFHLEdBQUc7Z0JBQ1ZWLFFBQVEsRUFBRUEsUUFBUTtnQkFDbEJXLE9BQU8sRUFBRVQsT0FBTzthQUNqQjtZQUNELE1BQU1VLE1BQU0sR0FBRyxNQUFNSixHQUFHLENBQUNLLFNBQVMsQ0FBQ0gsR0FBRyxDQUFDO1lBQ3ZDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDLHNDQUFzQyxFQUFFSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxTQUFVO1lBQ1IsTUFBTVosTUFBTSxDQUFDYSxLQUFLLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUdEWixHQUFHLEVBQUUsQ0FBQ2EsS0FBSyxDQUFDSixPQUFPLENBQUNLLEdBQUcsQ0FBQyxDQUFDO0lBRXJCLDBCQUEwQjtJQUMxQnBCLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDckIsUUFBUSxHQUFDLEdBQUcsR0FBQ0UsT0FBTyxDQUFDLENBQUM7QUFFL0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9zYXZlQ2hhdC5qcz9hM2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYicgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYXZlQ2hhdChyZXEsIHJlcykge1xyXG5cclxuICAvLyBjYXRjaGluZyB0aGUgdmFyaWFibGVzXHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5ib2R5LnVzZXJuYW1lO1xyXG4gICAgY29uc3QgY29tbWVudCA9IHJlcS5ib2R5LmNvbW1lbnQ7XHJcbiBcclxuLy8gUmVwbGFjZSB0aGUgdXJpIHN0cmluZyB3aXRoIHlvdXIgTW9uZ29EQiBkZXBsb3ltZW50J3MgY29ubmVjdGlvbiBzdHJpbmcuXHJcbmNvbnN0IHVyaSA9IFwibW9uZ29kYjovL3Jvb3Q6ZXhhbXBsZUAwLjAuMC4wOjY2NjZcIjtcclxuXHJcbi8vIGNyZWF0ZSBtb25nbyBjb25uZWN0aW9uIGNsaWVudFxyXG5jb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YWJhc2UgPSBjbGllbnQuZGIoXCJjb3Vyc2VzXCIpO1xyXG4gICAgY29uc3QgY29sID0gZGF0YWJhc2UuY29sbGVjdGlvbihcImNoYXRzXCIpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IHRvIGluc2VydFxyXG4gICAgY29uc3QgZG9jID0ge1xyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGNvbnRlbnQ6IGNvbW1lbnQsXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb2wuaW5zZXJ0T25lKGRvYyk7XHJcbiAgICBjb25zb2xlLmxvZyhgQSBkb2N1bWVudCB3YXMgaW5zZXJ0ZWQgd2l0aCB0aGUgX2lkOiAke3Jlc3VsdC5pbnNlcnRlZElkfWApO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBhd2FpdCBjbGllbnQuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ydW4oKS5jYXRjaChjb25zb2xlLmRpcik7XHJcbiAgIFxyXG4gICAgLy8gcmV0dXJuIGJhY2sgdGhlIHJlY29yZHNcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXJuYW1lK1wiIFwiK2NvbW1lbnQpOyAgIFxyXG5cclxufSJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInNhdmVDaGF0IiwicmVxIiwicmVzIiwidXNlcm5hbWUiLCJib2R5IiwiY29tbWVudCIsInVyaSIsImNsaWVudCIsInJ1biIsImRhdGFiYXNlIiwiZGIiLCJjb2wiLCJjb2xsZWN0aW9uIiwiZG9jIiwiY29udGVudCIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJpbnNlcnRlZElkIiwiY2xvc2UiLCJjYXRjaCIsImRpciIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/saveChat.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/saveChat.js"));
module.exports = __webpack_exports__;

})();