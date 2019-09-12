webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _lib_useHover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/useHover */ "./lib/useHover.js");


var _jsxFileName = "/Users/micahbrich/Sites/lexend/components/Logo.js";


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  position: relative;\n  &:nth-of-type(4) {\n    right: -1px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.4rem;\n  cursor: default;\n  background: red;\n  display: inline-block;\n  color: white;\n  padding: 0.092em 0.392em;\n  margin-left: auto;\n  position: relative;\n  z-index: 100;\n  a {\n    color: white;\n    span:first-of-type {\n      margin-right: -2px;\n    }\n    span:last-of-type {\n      margin-left: 3px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var config = {
  mass: 0.2,
  tension: 100,
  friction: 10
};
var letters = "LEXEND".split("");

var isE = function isE(letter) {
  return letter === "E";
};

var list = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  },
  hidden: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
var items = {
  hidden: function hidden(e) {
    return {
      width: e ? 0 : "1rem",
      opacity: e ? 0 : 1,
      fontVariationSettings: "'LXND' 0"
    };
  },
  visible: {
    width: "1.618rem",
    opacity: 1,
    fontVariationSettings: "'LXND' 100"
  }
};
var spring = {
  type: "spring",
  damping: 10,
  stiffness: 90,
  mass: 1
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useHover = Object(_lib_useHover__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      _useHover2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useHover, 2),
      hoverRef = _useHover2[0],
      hovering = _useHover2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].a, {
    href: "#download",
    ref: hoverRef,
    initial: "hidden",
    animate: hovering ? "visible" : "hidden",
    variants: list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, letters.map(function (letter, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Span, {
      letter: letter,
      key: "".concat(letter, "-").concat(index),
      custom: letter === "E",
      variants: items,
      transition: spring,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, letter);
  })));
});
var Logo = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].h1)(_templateObject());
var Span = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].span)(_templateObject2());

/***/ })

})
//# sourceMappingURL=index.js.0144eef1cfa1bd0eed49.hot-update.js.map