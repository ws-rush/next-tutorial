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
exports.id = "pages/api/articles/[id]";
exports.ids = ["pages/api/articles/[id]"];
exports.modules = {

/***/ "(api)/./pages/api/articles/[id].ts":
/*!************************************!*\
  !*** ./pages/api/articles/[id].ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst articles = [\n    {\n        id: 1,\n        title: \"First article\"\n    },\n    {\n        id: 2,\n        title: \"Second article\"\n    },\n    {\n        id: 3,\n        title: \"Third article\"\n    }\n];\n// { query: { id } } equal to req.query.id\nfunction handler({ query: { id  }  }, res) {\n    const filterd = articles.filter((article)=>article.id === id);\n    // Article with id exists\n    if (filterd.length > 0) {\n        res.status(200).json(filterd[0]);\n    } else {\n        res.status(404).json({\n            message: `Article with id ${id} does not exist`\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXJ0aWNsZXMvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsV0FBVztJQUNmO1FBQUVDLElBQUk7UUFBR0MsT0FBTztJQUFnQjtJQUNoQztRQUFFRCxJQUFJO1FBQUdDLE9BQU87SUFBaUI7SUFDakM7UUFBRUQsSUFBSTtRQUFHQyxPQUFPO0lBQWdCO0NBQ2pDO0FBRUQsMENBQTBDO0FBQzNCLFNBQVNDLFFBQVEsRUFBRUMsT0FBTyxFQUFFSCxHQUFFLEVBQUUsR0FBTyxFQUFFSSxHQUFRLEVBQUU7SUFDaEUsTUFBTUMsVUFBVU4sU0FBU08sTUFBTSxDQUFDLENBQUNDLFVBQVlBLFFBQVFQLEVBQUUsS0FBS0E7SUFDNUQseUJBQXlCO0lBQ3pCLElBQUlLLFFBQVFHLE1BQU0sR0FBRyxHQUFHO1FBQ3RCSixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTCxPQUFPLENBQUMsRUFBRTtJQUNqQyxPQUVLO1FBQ0hELElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFWCxHQUFHLGVBQWUsQ0FBQztRQUFDO0lBQ3pFLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10dXRvcmlhbC8uL3BhZ2VzL2FwaS9hcnRpY2xlcy9baWRdLnRzP2I4MTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXJ0aWNsZXMgPSBbXHJcbiAgeyBpZDogMSwgdGl0bGU6IFwiRmlyc3QgYXJ0aWNsZVwiIH0sXHJcbiAgeyBpZDogMiwgdGl0bGU6IFwiU2Vjb25kIGFydGljbGVcIiB9LFxyXG4gIHsgaWQ6IDMsIHRpdGxlOiBcIlRoaXJkIGFydGljbGVcIiB9LFxyXG5dO1xyXG5cclxuLy8geyBxdWVyeTogeyBpZCB9IH0gZXF1YWwgdG8gcmVxLnF1ZXJ5LmlkXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoeyBxdWVyeTogeyBpZCB9IH06IGFueSwgcmVzOiBhbnkpIHtcclxuICBjb25zdCBmaWx0ZXJkID0gYXJ0aWNsZXMuZmlsdGVyKChhcnRpY2xlKSA9PiBhcnRpY2xlLmlkID09PSBpZCk7XHJcbiAgLy8gQXJ0aWNsZSB3aXRoIGlkIGV4aXN0c1xyXG4gIGlmIChmaWx0ZXJkLmxlbmd0aCA+IDApIHtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZpbHRlcmRbMF0pO1xyXG4gIH1cclxuICAvLyBBcnRpY2xlIHdpdGggaWQgZG9lcyBub3QgZXhpc3RcclxuICBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogYEFydGljbGUgd2l0aCBpZCAke2lkfSBkb2VzIG5vdCBleGlzdGAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJhcnRpY2xlcyIsImlkIiwidGl0bGUiLCJoYW5kbGVyIiwicXVlcnkiLCJyZXMiLCJmaWx0ZXJkIiwiZmlsdGVyIiwiYXJ0aWNsZSIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/articles/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/articles/[id].ts"));
module.exports = __webpack_exports__;

})();