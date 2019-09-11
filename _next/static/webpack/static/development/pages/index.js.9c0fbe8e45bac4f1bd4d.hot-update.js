webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TeamHeadshots.js":
/*!*************************************!*\
  !*** ./components/TeamHeadshots.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");

var _jsxFileName = "/Users/micahbrich/Sites/lexend/components/TeamHeadshots.js";


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 0;\n  margin: 2rem;\n  flex: 1 1 10%;\n  background: url(", ") no-repeat center center;\n  background-size: cover;\n  border: 0.192rem solid white;\n  min-height: 70vh;\n  min-width: 300px;\n  max-width: 400px;\n  overflow: hidden;\n  border-radius: 0.618rem;\n  position: sticky;\n  top: 3rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06),\n    0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  transition: all 180ms ease-in-out;\n  &:hover {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06),\n      0 28px 50px -12px rgba(0, 0, 0, 0.25);\n  }\n  &:before, &:after {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 5rem 1rem 1rem;\n    background: rgba(0, 0, 0, 0.24);\n    background: linear-gradient(transparent, rgba(0,0,0,0.8));\n    color: white;\n    text-shadow: 0px 1px 0px rgba(0,0,0,0.7);\n    font-size: 0.8rem;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-variation-settings: 'LXND' 64;\n    display: block;\n    z-index: 10;\n    line-height: 1.7;\n    content: \"", "\";\n    text-align: center;\n  }\n  &:before {\n    font-size: 0.718rem;\n    font-variation-settings: 'LXND' 100;\n    padding: 3rem 1rem 2.292rem;\n    z-index: 11;\n    background: transparent;\n  }\n  &:after {\n    z-index: 10;\n    font-size: 0.618rem;\n    color: rgba(255,255,255,0.7);\n    letter-spacing: 3px;\n    font-variation-settings: 'LXND' 50;\n    content: \"", "\";\n  }\n  @media (max-width: 1140px) {\n    position: relative;\n    min-height: 40vh;\n    position: relative;\n    margin: 1rem auto 4rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-around;\n  list-style: none;\n  padding: 0;\n  margin: 1rem auto;\n  div:nth-child(1) {\n    order: 1;\n  }\n  div:nth-child(2) {\n    order: 3;\n  }\n  div:nth-child(3) {\n    order: 2;\n  }\n  p {\n    font-size: 0.918rem;\n    max-width: 600px;\n  }\n  @media (max-width: 1600px) {\n    max-width: 1440px;\n    div:nth-child(1) {\n      order: 1;\n      z-index: 11;\n    }\n    div:nth-child(2) {\n      order: 2;\n    }\n    div:nth-child(3) {\n      order: 3;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var List = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])("div")(_templateObject());
var Headshot = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div)(_templateObject2(), function (props) {
  return props.src;
}, function (props) {
  return props.name;
}, function (props) {
  return props.title;
});
var spring = {
  type: "spring",
  damping: 5,
  stiffness: 80,
  mass: 2
};

var TeamHeadshots = function TeamHeadshots(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Headshot, {
    name: "Dr. Bonnie Shaver-Troup",
    title: "Educational Therapist",
    src: "/lexend/static/images/bonnie.jpeg",
    transition: spring,
    initial: {
      y: 0,
      rotate: -2,
      scale: 0.99
    },
    whileHover: {
      y: -10,
      rotate: -4,
      scale: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Headshot, {
    name: "Thomas Jockin",
    title: "Type Designer & Educator",
    src: "/lexend/static/images/thomas-jockin.jpg",
    transition: spring,
    initial: {
      y: 0,
      rotate: 1,
      scale: 0.99
    },
    whileHover: {
      y: -10,
      rotate: 3,
      scale: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (TeamHeadshots);

/***/ })

})
//# sourceMappingURL=index.js.9c0fbe8e45bac4f1bd4d.hot-update.js.map