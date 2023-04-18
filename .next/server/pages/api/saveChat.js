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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ saveChat)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction saveChat(req, res) {\n    // catching the variables\n    const username = req.body.username;\n    const comment = req.body.comment;\n    // Replace the uri string with your MongoDB deployment's connection string.\n    const uri = \"mongodb://root:example@0.0.0.0:6666\";\n    // create mongo connection client\n    const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n    async function run() {\n        try {\n            const database = client.db(\"courses\");\n            const col = database.collection(\"chats\");\n            // create a document to insert\n            const doc = {\n                username: username,\n                content: comment\n            };\n            const result = await col.insertOne(doc);\n            console.log(`A document was inserted with the _id: ${result.insertedId}`);\n        } finally{\n            await client.close();\n        }\n    }\n    run().catch(console.dir);\n    // return back the records\n    res.status(200).json(username + \" \" + comment);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2F2ZUNoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXRCLFNBQVNDLFFBQVEsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFekMseUJBQXlCO0lBQ3ZCLE1BQU1DLFFBQVEsR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNELFFBQVE7SUFDbEMsTUFBTUUsT0FBTyxHQUFHSixHQUFHLENBQUNHLElBQUksQ0FBQ0MsT0FBTztJQUdwQywyRUFBMkU7SUFDM0UsTUFBTUMsR0FBRyxHQUFHLHFDQUFxQztJQUVqRCxpQ0FBaUM7SUFDakMsTUFBTUMsTUFBTSxHQUFHLElBQUlSLGdEQUFXLENBQUNPLEdBQUcsQ0FBQztJQUluQyxlQUFlRSxHQUFHLEdBQUc7UUFDbkIsSUFBSTtZQUNGLE1BQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBRXJDLE1BQU1DLEdBQUcsR0FBR0YsUUFBUSxDQUFDRyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBRXhDLDhCQUE4QjtZQUM5QixNQUFNQyxHQUFHLEdBQUc7Z0JBQ1ZWLFFBQVEsRUFBRUEsUUFBUTtnQkFDbEJXLE9BQU8sRUFBRVQsT0FBTzthQUNqQjtZQUNELE1BQU1VLE1BQU0sR0FBRyxNQUFNSixHQUFHLENBQUNLLFNBQVMsQ0FBQ0gsR0FBRyxDQUFDO1lBQ3ZDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDLHNDQUFzQyxFQUFFSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxTQUFVO1lBQ1IsTUFBTVosTUFBTSxDQUFDYSxLQUFLLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUdEWixHQUFHLEVBQUUsQ0FBQ2EsS0FBSyxDQUFDSixPQUFPLENBQUNLLEdBQUcsQ0FBQyxDQUFDO0lBT3JCLDBCQUEwQjtJQUMxQnBCLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDckIsUUFBUSxHQUFDLEdBQUcsR0FBQ0UsT0FBTyxDQUFDLENBQUM7QUFXL0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9zYXZlQ2hhdC5qcz9hM2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYicgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYXZlQ2hhdChyZXEsIHJlcykge1xyXG5cclxuICAvLyBjYXRjaGluZyB0aGUgdmFyaWFibGVzXHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHJlcS5ib2R5LnVzZXJuYW1lO1xyXG4gICAgY29uc3QgY29tbWVudCA9IHJlcS5ib2R5LmNvbW1lbnQ7XHJcbiBcclxuXHJcbi8vIFJlcGxhY2UgdGhlIHVyaSBzdHJpbmcgd2l0aCB5b3VyIE1vbmdvREIgZGVwbG95bWVudCdzIGNvbm5lY3Rpb24gc3RyaW5nLlxyXG5jb25zdCB1cmkgPSBcIm1vbmdvZGI6Ly9yb290OmV4YW1wbGVAMC4wLjAuMDo2NjY2XCI7XHJcblxyXG4vLyBjcmVhdGUgbW9uZ28gY29ubmVjdGlvbiBjbGllbnRcclxuY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSk7XHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YWJhc2UgPSBjbGllbnQuZGIoXCJjb3Vyc2VzXCIpO1xyXG5cclxuICAgIGNvbnN0IGNvbCA9IGRhdGFiYXNlLmNvbGxlY3Rpb24oXCJjaGF0c1wiKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgYSBkb2N1bWVudCB0byBpbnNlcnRcclxuICAgIGNvbnN0IGRvYyA9IHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBjb250ZW50OiBjb21tZW50LFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29sLmluc2VydE9uZShkb2MpO1xyXG4gICAgY29uc29sZS5sb2coYEEgZG9jdW1lbnQgd2FzIGluc2VydGVkIHdpdGggdGhlIF9pZDogJHtyZXN1bHQuaW5zZXJ0ZWRJZH1gKTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgYXdhaXQgY2xpZW50LmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxucnVuKCkuY2F0Y2goY29uc29sZS5kaXIpO1xyXG4gICBcclxuXHJcbiAgIFxyXG5cclxuXHJcblxyXG4gICAgLy8gcmV0dXJuIGJhY2sgdGhlIHJlY29yZHNcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXJuYW1lK1wiIFwiK2NvbW1lbnQpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuXHJcbn0iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJzYXZlQ2hhdCIsInJlcSIsInJlcyIsInVzZXJuYW1lIiwiYm9keSIsImNvbW1lbnQiLCJ1cmkiLCJjbGllbnQiLCJydW4iLCJkYXRhYmFzZSIsImRiIiwiY29sIiwiY29sbGVjdGlvbiIsImRvYyIsImNvbnRlbnQiLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiaW5zZXJ0ZWRJZCIsImNsb3NlIiwiY2F0Y2giLCJkaXIiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/saveChat.js\n");

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