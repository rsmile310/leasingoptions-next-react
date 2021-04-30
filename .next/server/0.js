exports.ids = [0];
exports.modules = {

/***/ "./components/layout/modal-postcode/modal-postcode.tsx":
/*!*************************************************************!*\
  !*** ./components/layout/modal-postcode/modal-postcode.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "react-bootstrap/Modal");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helpers_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/helpers */ "./helpers/helpers.tsx");
/* harmony import */ var _HOCs_modal_modalContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../HOCs/modal/modalContext */ "./components/HOCs/modal/modalContext.tsx");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../search */ "./components/search/index.js");
/* harmony import */ var _enums_SearchPanels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../enums/SearchPanels */ "./enums/SearchPanels.tsx");


var _jsxFileName = "E:\\current_project\\PPH\\tfs\\Website\\website\\components\\layout\\modal-postcode\\modal-postcode.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function mapStateToProps(state) {
  return {
    dealToggle: state.dealSelector,
    vehicleFilters: state.vehicleFilters,
    userPostcode: state.userPostcode
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserPostcode: userPostcode => {
      dispatch({
        type: 'UPDATE_POSTCODE',
        userPostcode: userPostcode
      });
    }
  };
};

const ModalPostcode = (_ref) => {
  let {
    onRequestClose,
    title,
    userPostcode,
    updateUserPostcode
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["onRequestClose", "title", "userPostcode", "updateUserPostcode"]);

  const modalContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_HOCs_modal_modalContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const postcodeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    0: isSubmitted,
    1: setIsSubmitted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isValidated,
    1: setIsValidated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handlePostcodeSubmit = evt => {
    evt.preventDefault();
    let enteredPostcode = postcodeRef.current.value.toLowerCase();

    if (Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["FormatValidatePostcode"])(enteredPostcode)) {
      setIsValidated(true);
      updateUserPostcode(Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["AddSpaceToPostcode"])(enteredPostcode));
    } else {
      setIsValidated(false);
      updateUserPostcode(null);
    }

    setIsSubmitted(true);

    if (Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_4__["FormatValidatePostcode"])(enteredPostcode)) {
      modalContext.showModal(_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
        show: true,
        title: "Refine Search",
        activePanel: _enums_SearchPanels__WEBPACK_IMPORTED_MODULE_7__["SearchPanels"].SearchDetailed
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({
      onHide: onRequestClose,
      centered: true
    }, otherProps), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Header, {
        className: "d-flex flex-nowrap justify-content-center align-items-center",
        closeButton: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Title, {
          className: "text-center mb-0",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Body, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-100 py-3 px-3 px-md-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mb-2",
            children: "Please enter a full postcode."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-24 form-group",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                ref: postcodeRef,
                className: `form-control ${isSubmitted && !isValidated ? 'is-invalid' : ''}`,
                placeholder: "AB12 3CD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-24 d-flex align-items-center justify-content-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "btn btn-success btn-lg",
                onClick: evt => handlePostcodeSubmit(evt),
                children: "Next"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, undefined)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ModalPostcode));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9tb2RhbC1wb3N0Y29kZS9tb2RhbC1wb3N0Y29kZS50c3giXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJkZWFsVG9nZ2xlIiwiZGVhbFNlbGVjdG9yIiwidmVoaWNsZUZpbHRlcnMiLCJ1c2VyUG9zdGNvZGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInVwZGF0ZVVzZXJQb3N0Y29kZSIsInR5cGUiLCJNb2RhbFBvc3Rjb2RlIiwib25SZXF1ZXN0Q2xvc2UiLCJ0aXRsZSIsIm90aGVyUHJvcHMiLCJtb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiTW9kYWxDb250ZXh0IiwicG9zdGNvZGVSZWYiLCJ1c2VSZWYiLCJpc1N1Ym1pdHRlZCIsInNldElzU3VibWl0dGVkIiwidXNlU3RhdGUiLCJpc1ZhbGlkYXRlZCIsInNldElzVmFsaWRhdGVkIiwiaGFuZGxlUG9zdGNvZGVTdWJtaXQiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRQb3N0Y29kZSIsImN1cnJlbnQiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwiRm9ybWF0VmFsaWRhdGVQb3N0Y29kZSIsIkFkZFNwYWNlVG9Qb3N0Y29kZSIsInNob3dNb2RhbCIsIlNlYXJjaCIsInNob3ciLCJhY3RpdmVQYW5lbCIsIlNlYXJjaFBhbmVscyIsIlNlYXJjaERldGFpbGVkIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM1QixTQUFPO0FBQ0hDLGNBQVUsRUFBRUQsS0FBSyxDQUFDRSxZQURmO0FBRUhDLGtCQUFjLEVBQUVILEtBQUssQ0FBQ0csY0FGbkI7QUFHSEMsZ0JBQVksRUFBRUosS0FBSyxDQUFDSTtBQUhq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LEtBQWY7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsc0RBQWY7QUFBQSxxQ0FDSTtBQUFRLHlCQUFTLEVBQUMsd0JBQWxCO0FBQTJDLHVCQUFPLEVBQUdHLEdBQUQsSUFBU0Qsb0JBQW9CLENBQUNDLEdBQUQsQ0FBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBd0JILENBaEREOztBQWtEZWMsMEhBQU8sQ0FBQ3ZDLGVBQUQsRUFBa0JNLGtCQUFsQixDQUFQLENBQTZDSSxhQUE3QyxDQUFmLEUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcclxuaW1wb3J0IHsgRm9ybWF0VmFsaWRhdGVQb3N0Y29kZSwgQWRkU3BhY2VUb1Bvc3Rjb2RlIH0gZnJvbSAnaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IE1vZGFsQ29udGV4dCBmcm9tICcuLi8uLi9IT0NzL21vZGFsL21vZGFsQ29udGV4dCc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vLi4vc2VhcmNoJztcclxuaW1wb3J0IHsgU2VhcmNoUGFuZWxzIH0gZnJvbSAnLi4vLi4vLi4vZW51bXMvU2VhcmNoUGFuZWxzJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBvblJlcXVlc3RDbG9zZTogYW55O1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHVzZXJQb3N0Y29kZTogc3RyaW5nO1xyXG4gICAgdXBkYXRlVXNlclBvc3Rjb2RlOiBhbnk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkZWFsVG9nZ2xlOiBzdGF0ZS5kZWFsU2VsZWN0b3IsXHJcbiAgICAgICAgdmVoaWNsZUZpbHRlcnM6IHN0YXRlLnZlaGljbGVGaWx0ZXJzLFxyXG4gICAgICAgIHVzZXJQb3N0Y29kZTogc3RhdGUudXNlclBvc3Rjb2RlLFxyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cGRhdGVVc2VyUG9zdGNvZGU6ICh1c2VyUG9zdGNvZGUpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVVBEQVRFX1BPU1RDT0RFJywgdXNlclBvc3Rjb2RlOiB1c2VyUG9zdGNvZGUgfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgTW9kYWxQb3N0Y29kZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb25SZXF1ZXN0Q2xvc2UsIHRpdGxlLCB1c2VyUG9zdGNvZGUsIHVwZGF0ZVVzZXJQb3N0Y29kZSwgLi4ub3RoZXJQcm9wcyB9KSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbENvbnRleHQgPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgICBjb25zdCBwb3N0Y29kZVJlZiA9IHVzZVJlZigpIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XHJcbiAgICBjb25zdCBbaXNTdWJtaXR0ZWQsIHNldElzU3VibWl0dGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc1ZhbGlkYXRlZCwgc2V0SXNWYWxpZGF0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlUG9zdGNvZGVTdWJtaXQgPSAoZXZ0KSA9PiB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGVudGVyZWRQb3N0Y29kZSA9IHBvc3Rjb2RlUmVmLmN1cnJlbnQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKEZvcm1hdFZhbGlkYXRlUG9zdGNvZGUoZW50ZXJlZFBvc3Rjb2RlKSkge1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkYXRlZCh0cnVlKTtcclxuICAgICAgICAgICAgdXBkYXRlVXNlclBvc3Rjb2RlKEFkZFNwYWNlVG9Qb3N0Y29kZShlbnRlcmVkUG9zdGNvZGUpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1ZhbGlkYXRlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVVzZXJQb3N0Y29kZShudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldElzU3VibWl0dGVkKHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoRm9ybWF0VmFsaWRhdGVQb3N0Y29kZShlbnRlcmVkUG9zdGNvZGUpKSB7XHJcbiAgICAgICAgICAgIG1vZGFsQ29udGV4dC5zaG93TW9kYWwoU2VhcmNoLCB7IHNob3c6IHRydWUsIHRpdGxlOiBcIlJlZmluZSBTZWFyY2hcIiwgYWN0aXZlUGFuZWw6IFNlYXJjaFBhbmVscy5TZWFyY2hEZXRhaWxlZCB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNb2RhbCBvbkhpZGU9e29uUmVxdWVzdENsb3NlfSBjZW50ZXJlZD17dHJ1ZX0gey4uLm90aGVyUHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1ub3dyYXAganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMFwiPnt0aXRsZX08L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHB5LTMgcHgtMyBweC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj5QbGVhc2UgZW50ZXIgYSBmdWxsIHBvc3Rjb2RlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTI0IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9e3Bvc3Rjb2RlUmVmfSBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtpc1N1Ym1pdHRlZCAmJiAhaXNWYWxpZGF0ZWQgPyAnaXMtaW52YWxpZCcgOiAnJ31gfSBwbGFjZWhvbGRlcj1cIkFCMTIgM0NEXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTI0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1sZ1wiIG9uQ2xpY2s9eyhldnQpID0+IGhhbmRsZVBvc3Rjb2RlU3VibWl0KGV2dCl9Pk5leHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTW9kYWxQb3N0Y29kZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==