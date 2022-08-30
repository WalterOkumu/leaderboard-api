/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/addFavicon.js":
/*!**************************************!*\
  !*** ./src/components/addFavicon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_favicon_io_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/favicon_io/apple-touch-icon.png */ "./src/assets/favicon_io/apple-touch-icon.png");
/* harmony import */ var _assets_favicon_io_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/favicon_io/favicon-32x32.png */ "./src/assets/favicon_io/favicon-32x32.png");
/* harmony import */ var _assets_favicon_io_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/favicon_io/favicon-16x16.png */ "./src/assets/favicon_io/favicon-16x16.png");




const addFavicon = () => {
  const favAppleTouchIcon = document.createElement('link');
  const favIcon32 = document.createElement('link');
  const favIcon16 = document.createElement('link');
  favAppleTouchIcon.rel = 'apple-touch-icon';
  favAppleTouchIcon.sizes = '180x180';
  favAppleTouchIcon.href = _assets_favicon_io_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_0__;
  favIcon32.rel = 'icon';
  favIcon32.sizes = '32x32';
  favIcon32.type = 'image/png';
  favIcon32.href = _assets_favicon_io_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_1__;
  favIcon16.rel = 'icon';
  favIcon16.sizes = '16x16';
  favIcon16.type = 'image/png';
  favIcon16.href = _assets_favicon_io_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_2__;
  window.document.head.appendChild(favAppleTouchIcon);
  window.document.head.appendChild(favIcon32);
  window.document.head.appendChild(favIcon16);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addFavicon);

/***/ }),

/***/ "./src/components/createNewScore.js":
/*!******************************************!*\
  !*** ./src/components/createNewScore.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createNewGame = async (url, name, score) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      user: name,
      score
    })
  }).then(response => response.json()).then(json => json);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewGame);

/***/ }),

/***/ "./src/components/getScores.js":
/*!*************************************!*\
  !*** ./src/components/getScores.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getScores = async url => fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => response.json()).then(response => response.result);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getScores);

/***/ }),

/***/ "./src/components/populateScores.js":
/*!******************************************!*\
  !*** ./src/components/populateScores.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _removeChildNodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeChildNodes.js */ "./src/components/removeChildNodes.js");


const populateScores = listData => {
  const listObj = document.getElementsByClassName('score-list')[0];
  (0,_removeChildNodes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(listObj);

  if (listData.length > 0) {
    listData.forEach(score => {
      const listItem = document.createElement('li');
      listItem.className = 'score-list-item';
      listItem.innerHTML = `${score.user} : ${score.score}`;
      listObj.appendChild(listItem);
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateScores);

/***/ }),

/***/ "./src/components/removeChildNodes.js":
/*!********************************************!*\
  !*** ./src/components/removeChildNodes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeAllChildNodes = parent => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeAllChildNodes);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ul,\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nbody {\n  margin: 0;\n  padding: 1em;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.title {\n  font-size: 2.5em;\n}\n\n.container {\n  padding: 0.5em;\n  display: flex;\n  flex-direction: row;\n  gap: 5em;\n}\n.container .enter-scores {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\n.container .enter-scores .subtitle {\n  font-size: 1.5em;\n  padding: 0.5em;\n}\n.container .enter-scores .input-area {\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  gap: 1em;\n  padding: 0.5em;\n}\n.container .enter-scores .input-area .input-box {\n  background-color: white;\n  color: black;\n  border: 0.2em solid black;\n  height: 1.8em;\n}\n.container .enter-scores .button-area {\n  padding: 0.5em;\n}\n.container .enter-scores .button-area .buttons {\n  width: 25%;\n  padding: 0.3em;\n  box-shadow: 3px 4px 5px 0 rgba(0, 0, 0, 0.75);\n  background-color: white;\n  color: black;\n  border: 0.2em solid black;\n  font-weight: bold;\n  cursor: pointer;\n}\n.container .enter-scores .button-area .buttons:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n}\n.container .view-scores {\n  width: 50%;\n}\n.container .view-scores .view-scores-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.container .view-scores .view-scores-header .subtitle {\n  font-size: 1.5em;\n  padding: 0.5em;\n}\n.container .view-scores .view-scores-header .button-area .buttons {\n  width: 100%;\n  padding: 0.3em;\n  box-shadow: 3px 4px 5px 0 rgba(0, 0, 0, 0.75);\n  background-color: white;\n  color: black;\n  border: 0.2em solid black;\n  font-weight: bold;\n  cursor: pointer;\n}\n.container .view-scores .view-scores-header .button-area .buttons:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n}\n.container .view-scores .score-list {\n  border: 0.2em solid black;\n  font-weight: bold;\n  padding: 0.15em;\n  width: 80%;\n}\n.container .view-scores .score-list .score-list-item:nth-child(even) {\n  background-color: cyan;\n}\n.container .view-scores .score-list:empty {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.scss"],"names":[],"mappings":"AAKA;;EAEE,SAAA;EACA,UAAA;EACA,gBAAA;AAHF;;AAMA;EACE,SAAA;EACA,YAAA;EACA,iCAAA;AAHF;;AAMA;EACE,gBAAA;AAHF;;AAMA;EACE,cAAA;EACA,aAAA;EACA,mBAAA;EACA,QAAA;AAHF;AAKE;EACE,UAAA;EACA,aAAA;EACA,sBAAA;AAHJ;AAKI;EACE,gBAAA;EACA,cAAA;AAHN;AAMI;EACE,aAAA;EACA,sBAAA;EACA,UAAA;EACA,QAAA;EACA,cAAA;AAJN;AAMM;EACE,uBAAA;EACA,YAAA;EACA,yBAAA;EACA,aAAA;AAJR;AAQI;EACE,cAAA;AANN;AAQM;EACE,UAAA;EACA,cAAA;EACA,6CA3DI;EA4DJ,uBAAA;EACA,YAAA;EACA,yBAAA;EACA,iBAAA;EACA,eAAA;AANR;AASM;EACE,2BAAA;EACA,0CAAA;AAPR;AAYE;EACE,UAAA;AAVJ;AAYI;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;AAVN;AAYM;EACE,gBAAA;EACA,cAAA;AAVR;AAcQ;EACE,WAAA;EACA,cAAA;EACA,6CA3FE;EA4FF,uBAAA;EACA,YAAA;EACA,yBAAA;EACA,iBAAA;EACA,eAAA;AAZV;AAeQ;EACE,2BAAA;EACA,0CAAA;AAbV;AAkBI;EACE,yBAAA;EACA,iBAAA;EACA,eAAA;EACA,UAAA;AAhBN;AAkBM;EACE,sBAAA;AAhBR;AAoBI;EACE,aAAA;AAlBN","sourcesContent":["$boxShadow: 3px 4px 5px 0 rgba(0, 0, 0, 0.75);\r\n$removeBoxShadow: 0 0 0 0 rgba(0, 0, 0, 0);\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n\r\nul,\r\nli {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 1em;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.title {\r\n  font-size: 2.5em;\r\n}\r\n\r\n.container {\r\n  padding: 0.5em;\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 5em;\r\n\r\n  .enter-scores {\r\n    width: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    .subtitle {\r\n      font-size: 1.5em;\r\n      padding: 0.5em;\r\n    }\r\n\r\n    .input-area {\r\n      display: flex;\r\n      flex-direction: column;\r\n      width: 60%;\r\n      gap: 1em;\r\n      padding: 0.5em;\r\n\r\n      .input-box {\r\n        background-color: white;\r\n        color: black;\r\n        border: 0.2em solid black;\r\n        height: 1.8em;\r\n      }\r\n    }\r\n\r\n    .button-area {\r\n      padding: 0.5em;\r\n\r\n      .buttons {\r\n        width: 25%;\r\n        padding: 0.3em;\r\n        box-shadow: $boxShadow;\r\n        background-color: white;\r\n        color: black;\r\n        border: 0.2em solid black;\r\n        font-weight: bold;\r\n        cursor: pointer;\r\n      }\r\n\r\n      .buttons:hover {\r\n        transform: translateY(-3px);\r\n        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\r\n      }\r\n    }\r\n  }\r\n\r\n  .view-scores {\r\n    width: 50%;\r\n\r\n    .view-scores-header {\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n\r\n      .subtitle {\r\n        font-size: 1.5em;\r\n        padding: 0.5em;\r\n      }\r\n\r\n      .button-area {\r\n        .buttons {\r\n          width: 100%;\r\n          padding: 0.3em;\r\n          box-shadow: $boxShadow;\r\n          background-color: white;\r\n          color: black;\r\n          border: 0.2em solid black;\r\n          font-weight: bold;\r\n          cursor: pointer;\r\n        }\r\n\r\n        .buttons:hover {\r\n          transform: translateY(-3px);\r\n          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\r\n        }\r\n      }\r\n    }\r\n\r\n    .score-list {\r\n      border: 0.2em solid black;\r\n      font-weight: bold;\r\n      padding: 0.15em;\r\n      width: 80%;\r\n\r\n      .score-list-item:nth-child(even) {\r\n        background-color: cyan;\r\n      }\r\n    }\r\n\r\n    .score-list:empty {\r\n      display: none;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/favicon_io/apple-touch-icon.png":
/*!****************************************************!*\
  !*** ./src/assets/favicon_io/apple-touch-icon.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "apple-touch-icon.png";

/***/ }),

/***/ "./src/assets/favicon_io/favicon-16x16.png":
/*!*************************************************!*\
  !*** ./src/assets/favicon_io/favicon-16x16.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "favicon-16x16.png";

/***/ }),

/***/ "./src/assets/favicon_io/favicon-32x32.png":
/*!*************************************************!*\
  !*** ./src/assets/favicon_io/favicon-32x32.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "favicon-32x32.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _components_addFavicon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/addFavicon.js */ "./src/components/addFavicon.js");
/* harmony import */ var _components_createNewScore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/createNewScore.js */ "./src/components/createNewScore.js");
/* harmony import */ var _components_getScores_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/getScores.js */ "./src/components/getScores.js");
/* harmony import */ var _components_populateScores_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/populateScores.js */ "./src/components/populateScores.js");





const apiKey = "L6xLuEpFVcCNZhbdTW8c";
const baseURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api";
const url = `${baseURL}/games/${apiKey}/scores`;
const refreshButton = document.getElementById('refresh-button');
const submitButton = document.getElementById('submit');

window.onload = async () => {
  (0,_components_addFavicon_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

refreshButton.addEventListener('click', async () => {
  const list = await (0,_components_getScores_js__WEBPACK_IMPORTED_MODULE_3__["default"])(url);
  (0,_components_populateScores_js__WEBPACK_IMPORTED_MODULE_4__["default"])(list);
});
submitButton.addEventListener('click', async () => {
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');

  if (nameInput.value !== '' && scoreInput.value !== '') {
    (0,_components_createNewScore_js__WEBPACK_IMPORTED_MODULE_2__["default"])(url, nameInput.value, scoreInput.value);
    nameInput.value = '';
    scoreInput.value = '';
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main.befdc7f300244bc93889.js.map