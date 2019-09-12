webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tester.js":
/*!******************************!*\
  !*** ./components/Tester.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_useTypeChoices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/useTypeChoices */ "./lib/useTypeChoices.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var react_variable_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-variable-fonts */ "./node_modules/react-variable-fonts/lib/index.js");
/* harmony import */ var react_variable_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_variable_fonts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! markdown-to-jsx */ "./node_modules/markdown-to-jsx/dist/esm.js");
/* harmony import */ var _data_texts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/texts */ "./data/texts.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Page */ "./components/Page.js");
/* harmony import */ var _RangeSlider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RangeSlider */ "./components/RangeSlider.js");




var _jsxFileName = "/Users/micahbrich/Sites/lexend/components/Tester.js";


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  font-size: 5.4vw !important;\n  line-height: 1;\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n  span {\n    display: inline-block;\n    margin: 2px;\n    border: 1px dashed rgba(0, 0, 0, 0.12);\n  }\n  & + p {\n    margin-left: 0.392rem;\n  }\n  @media (max-width: 960px) {\n    font-size: 12vw !important;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  max-width: 800px;\n  padding: 1rem 0.618rem;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  margin-top: 0;\n  margin-bottom: 1.618rem;\n  @media (max-width: 960px) {\n    max-width: 100%;\n  }\n  input {\n    cursor: grab;\n    width: 100%;\n  }\n  label {\n    display: block;\n    text-transform: uppercase;\n    font-size: 0.718rem;\n    letter-spacing: 2px;\n    margin: 2.618rem 0 0.618rem;\n  }\n  @media (max-width: 960px) {\n    width: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  text-transform: uppercase;\n  font-size: 80%;\n  letter-spacing: 2px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  padding: 1.618rem 1.618rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var initialSettings = {
  LXND: 0
};

var Tester = function Tester(_ref) {
  var weight = _ref.weight,
      lxnd = _ref.lxnd;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_lib_useTypeChoices__WEBPACK_IMPORTED_MODULE_5__["default"]),
      axis = _useContext.axis,
      setAxis = _useContext.setAxis,
      customStyles = _useContext.customStyles;

  switch (weight) {
    case "default":
      lxnd = 0;
      break;

    case "Regular":
      lxnd = 0;
      break;

    case "Deca":
      lxnd = 0;
      break;

    case "Exa":
      lxnd = 40;
      break;

    case "Giga":
      lxnd = 56;
      break;

    case "Mega":
      lxnd = 64;
      break;

    case "Peta":
      lxnd = 72;
      break;

    case "Tera":
      lxnd = 80;
      break;

    case "Zetta":
      lxnd = 26;
      break;

    default:
      lxnd = axis.LXND;
      break;
  }

  var style = {
    fontVariationSettings: "'LXND' ".concat(lxnd)
  };
  var exampleCSS = "h1, p { font-variation-settings: 'LXND' ".concat(axis.LXND, "; }");
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, weight && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Weight, {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, weight), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Title, {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "LEXEND"), !weight && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Controls, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, style),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "lxnd-axis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Variable Width + Bounding Box"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_RangeSlider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "lxnd-axis",
    type: "range",
    min: "0",
    max: "100",
    value: axis.LXND,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return setAxis({
        LXND: target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "lxnd-axis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Variable Font Settings for CSS"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, exampleCSS))));
};

var Container = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"])("section")(_templateObject());
var Weight = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"])("span")(_templateObject2());
var Controls = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"])("nav")(_templateObject3());
var H1 = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"])("h1")(_templateObject4());

var Title = function Title(_ref3) {
  var children = _ref3.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, children.split("").map(function (child, i) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: "".concat(child, "-").concat(i)
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }), child);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Tester);

/***/ })

})
//# sourceMappingURL=index.js.50ce02d9d8d40a50601b.hot-update.js.map