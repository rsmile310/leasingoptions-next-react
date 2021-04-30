(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./components/layout/modal-postcode/modal-postcode.tsx":
/*!*************************************************************!*\
  !*** ./components/layout/modal-postcode/modal-postcode.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_current_project_PPH_tfs_Website_website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_current_project_PPH_tfs_Website_website_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var helpers_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helpers/helpers */ "./helpers/helpers.tsx");
/* harmony import */ var _HOCs_modal_modalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../HOCs/modal/modalContext */ "./components/HOCs/modal/modalContext.tsx");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../search */ "./components/search/index.js");
/* harmony import */ var _enums_SearchPanels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../enums/SearchPanels */ "./enums/SearchPanels.tsx");





var _jsxFileName = "E:\\current_project\\PPH\\tfs\\Website\\website\\components\\layout\\modal-postcode\\modal-postcode.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_current_project_PPH_tfs_Website_website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function mapStateToProps(state) {
  return {
    dealToggle: state.dealSelector,
    vehicleFilters: state.vehicleFilters,
    userPostcode: state.userPostcode
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateUserPostcode: function updateUserPostcode(userPostcode) {
      dispatch({
        type: 'UPDATE_POSTCODE',
        userPostcode: userPostcode
      });
    }
  };
};

var ModalPostcode = function ModalPostcode(_ref) {
  _s();

  var onRequestClose = _ref.onRequestClose,
      title = _ref.title,
      userPostcode = _ref.userPostcode,
      updateUserPostcode = _ref.updateUserPostcode,
      otherProps = Object(E_current_project_PPH_tfs_Website_website_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["onRequestClose", "title", "userPostcode", "updateUserPostcode"]);

  var modalContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_HOCs_modal_modalContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var postcodeRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isSubmitted = _useState[0],
      setIsSubmitted = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isValidated = _useState2[0],
      setIsValidated = _useState2[1];

  var handlePostcodeSubmit = function handlePostcodeSubmit(evt) {
    evt.preventDefault();
    var enteredPostcode = postcodeRef.current.value.toLowerCase();

    if (Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_6__["FormatValidatePostcode"])(enteredPostcode)) {
      setIsValidated(true);
      updateUserPostcode(Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_6__["AddSpaceToPostcode"])(enteredPostcode));
    } else {
      setIsValidated(false);
      updateUserPostcode(null);
    }

    setIsSubmitted(true);

    if (Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_6__["FormatValidatePostcode"])(enteredPostcode)) {
      modalContext.showModal(_search__WEBPACK_IMPORTED_MODULE_8__["default"], {
        show: true,
        title: "Refine Search",
        activePanel: _enums_SearchPanels__WEBPACK_IMPORTED_MODULE_9__["SearchPanels"].SearchDetailed
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
      onHide: onRequestClose,
      centered: true
    }, otherProps), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Header, {
        className: "d-flex flex-nowrap justify-content-center align-items-center",
        closeButton: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Title, {
          className: "text-center mb-0",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Body, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-100 py-3 px-3 px-md-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mb-2",
            children: "Please enter a full postcode."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-24 form-group",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                ref: postcodeRef,
                className: "form-control ".concat(isSubmitted && !isValidated ? 'is-invalid' : ''),
                placeholder: "AB12 3CD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-24 d-flex align-items-center justify-content-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "btn btn-success btn-lg",
                onClick: function onClick(evt) {
                  return handlePostcodeSubmit(evt);
                },
                children: "Next"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, _this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(ModalPostcode, "gwu9NFj3QUJLfgoOSVGWdJOgrTU=");

_c = ModalPostcode;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(ModalPostcode));

var _c;

$RefreshReg$(_c, "ModalPostcode");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbW9kYWwtcG9zdGNvZGUvbW9kYWwtcG9zdGNvZGUudHN4Il0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGVhbFRvZ2dsZSIsImRlYWxTZWxlY3RvciIsInZlaGljbGVGaWx0ZXJzIiwidXNlclBvc3Rjb2RlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ1cGRhdGVVc2VyUG9zdGNvZGUiLCJ0eXBlIiwiTW9kYWxQb3N0Y29kZSIsIm9uUmVxdWVzdENsb3NlIiwidGl0bGUiLCJvdGhlclByb3BzIiwibW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIk1vZGFsQ29udGV4dCIsInBvc3Rjb2RlUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpc1N1Ym1pdHRlZCIsInNldElzU3VibWl0dGVkIiwiaXNWYWxpZGF0ZWQiLCJzZXRJc1ZhbGlkYXRlZCIsImhhbmRsZVBvc3Rjb2RlU3VibWl0IiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkUG9zdGNvZGUiLCJjdXJyZW50IiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsIkZvcm1hdFZhbGlkYXRlUG9zdGNvZGUiLCJBZGRTcGFjZVRvUG9zdGNvZGUiLCJzaG93TW9kYWwiLCJTZWFyY2giLCJzaG93IiwiYWN0aXZlUGFuZWwiLCJTZWFyY2hQYW5lbHMiLCJTZWFyY2hEZXRhaWxlZCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQzVCLFNBQU87QUFDSEMsY0FBVSxFQUFFRCxLQUFLLENBQUNFLFlBRGY7QUFFSEMsa0JBQWMsRUFBRUgsS0FBSyxDQUFDRyxjQUZuQjtBQUdIQyxnQkFBWSxFQUFFSixLQUFLLENBQUNJO0FB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OUM7QUFBbUgsMkJBQVcsRUFBQztBQUEvSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFPSTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyxzREFBZjtBQUFBLHFDQUNJO0FBQVEseUJBQVMsRUFBQyx3QkFBbEI7QUFBMkMsdUJBQU8sRUFBRSxpQkFBQ0csR0FBRDtBQUFBLHlCQUFTRCxvQkFBb0IsQ0FBQ0MsR0FBRCxDQUE3QjtBQUFBLGlCQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQXdCSCxDQWhERDs7R0FBTWYsYTs7S0FBQUEsYTtBQWtEUzZCLDBIQUFPLENBQUN2QyxlQUFELEVBQWtCTSxrQkFBbEIsQ0FBUCxDQUE2Q0ksYUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XHJcbmltcG9ydCB7IEZvcm1hdFZhbGlkYXRlUG9zdGNvZGUsIEFkZFNwYWNlVG9Qb3N0Y29kZSB9IGZyb20gJ2hlbHBlcnMvaGVscGVycyc7XHJcbmltcG9ydCBNb2RhbENvbnRleHQgZnJvbSAnLi4vLi4vSE9Dcy9tb2RhbC9tb2RhbENvbnRleHQnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uLy4uL3NlYXJjaCc7XHJcbmltcG9ydCB7IFNlYXJjaFBhbmVscyB9IGZyb20gJy4uLy4uLy4uL2VudW1zL1NlYXJjaFBhbmVscyc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgb25SZXF1ZXN0Q2xvc2U6IGFueTtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB1c2VyUG9zdGNvZGU6IHN0cmluZztcclxuICAgIHVwZGF0ZVVzZXJQb3N0Y29kZTogYW55O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGVhbFRvZ2dsZTogc3RhdGUuZGVhbFNlbGVjdG9yLFxyXG4gICAgICAgIHZlaGljbGVGaWx0ZXJzOiBzdGF0ZS52ZWhpY2xlRmlsdGVycyxcclxuICAgICAgICB1c2VyUG9zdGNvZGU6IHN0YXRlLnVzZXJQb3N0Y29kZSxcclxuICAgIH07XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXBkYXRlVXNlclBvc3Rjb2RlOiAodXNlclBvc3Rjb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9QT1NUQ09ERScsIHVzZXJQb3N0Y29kZTogdXNlclBvc3Rjb2RlIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IE1vZGFsUG9zdGNvZGU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG9uUmVxdWVzdENsb3NlLCB0aXRsZSwgdXNlclBvc3Rjb2RlLCB1cGRhdGVVc2VyUG9zdGNvZGUsIC4uLm90aGVyUHJvcHMgfSkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWxDb250ZXh0ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG4gICAgY29uc3QgcG9zdGNvZGVSZWYgPSB1c2VSZWYoKSBhcyBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gICAgY29uc3QgW2lzU3VibWl0dGVkLCBzZXRJc1N1Ym1pdHRlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNWYWxpZGF0ZWQsIHNldElzVmFsaWRhdGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZVBvc3Rjb2RlU3VibWl0ID0gKGV2dCkgPT4ge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBlbnRlcmVkUG9zdGNvZGUgPSBwb3N0Y29kZVJlZi5jdXJyZW50LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGlmIChGb3JtYXRWYWxpZGF0ZVBvc3Rjb2RlKGVudGVyZWRQb3N0Y29kZSkpIHtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZGF0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVVzZXJQb3N0Y29kZShBZGRTcGFjZVRvUG9zdGNvZGUoZW50ZXJlZFBvc3Rjb2RlKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNWYWxpZGF0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB1cGRhdGVVc2VyUG9zdGNvZGUobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRJc1N1Ym1pdHRlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKEZvcm1hdFZhbGlkYXRlUG9zdGNvZGUoZW50ZXJlZFBvc3Rjb2RlKSkge1xyXG4gICAgICAgICAgICBtb2RhbENvbnRleHQuc2hvd01vZGFsKFNlYXJjaCwgeyBzaG93OiB0cnVlLCB0aXRsZTogXCJSZWZpbmUgU2VhcmNoXCIsIGFjdGl2ZVBhbmVsOiBTZWFyY2hQYW5lbHMuU2VhcmNoRGV0YWlsZWQgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TW9kYWwgb25IaWRlPXtvblJlcXVlc3RDbG9zZX0gY2VudGVyZWQ9e3RydWV9IHsuLi5vdGhlclByb3BzfT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtbm93cmFwIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTBcIj57dGl0bGV9PC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBweS0zIHB4LTMgcHgtbWQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yXCI+UGxlYXNlIGVudGVyIGEgZnVsbCBwb3N0Y29kZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtwb3N0Y29kZVJlZn0gY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7aXNTdWJtaXR0ZWQgJiYgIWlzVmFsaWRhdGVkID8gJ2lzLWludmFsaWQnIDogJyd9YH0gcGxhY2Vob2xkZXI9XCJBQjEyIDNDRFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tbGdcIiBvbkNsaWNrPXsoZXZ0KSA9PiBoYW5kbGVQb3N0Y29kZVN1Ym1pdChldnQpfT5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1vZGFsUG9zdGNvZGUpOyJdLCJzb3VyY2VSb290IjoiIn0=