exports.ids = [1];
exports.modules = {

/***/ "./components/layout/modal-contact/modal-contact.module.scss":
/*!*******************************************************************!*\
  !*** ./components/layout/modal-contact/modal-contact.module.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contact-modal": "modal-contact_contact-modal__3S_XV",
	"contact-link__wrap": "modal-contact_contact-link__wrap__1S0Q2",
	"contact-link__background": "modal-contact_contact-link__background__3Cjhv"
};


/***/ }),

/***/ "./components/layout/modal-contact/modal-contact.tsx":
/*!***********************************************************!*\
  !*** ./components/layout/modal-contact/modal-contact.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "react-bootstrap/Modal");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-contact.module.scss */ "./components/layout/modal-contact/modal-contact.module.scss");
/* harmony import */ var _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "@fortawesome/pro-light-svg-icons");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/analytics */ "./helpers/analytics.tsx");
/* harmony import */ var helpers_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! helpers/helpers */ "./helpers/helpers.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "E:\\current_project\\PPH\\tfs\\Website\\website\\components\\layout\\modal-contact\\modal-contact.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const ModalContact = (_ref) => {
  let {
    isInternal,
    onRequestClose,
    title
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["isInternal", "onRequestClose", "title"]);

  const handleCallbackClick = () => Object(_helpers_analytics__WEBPACK_IMPORTED_MODULE_7__["logLabelEvent"])('Contact', 'Click', 'request_callback_track');

  const handleContactClick = () => Object(_helpers_analytics__WEBPACK_IMPORTED_MODULE_7__["logLabelEvent"])('Contact', 'Click', 'leave_message_track');

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({
      onHide: onRequestClose,
      centered: true
    }, otherProps), {}, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Header, {
        className: "d-flex flex-nowrap justify-content-center align-items-center",
        closeButton: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Title, {
          className: " mb-0",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Body, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['contact-modal'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            passHref: true,
            href: "/request-callback",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['contact-link'],
              onClick: evt => {
                handleCallbackClick();
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                id: "request-a-callback",
                className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['contact-link__wrap'],
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "No time to wait? We can call you"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['contact-link__background'],
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                    width: "50",
                    height: "50",
                    icon: _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHeadset"],
                    title: "Request a callback"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-primary btn-lg",
                    children: "Request a callback"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 41
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            passHref: true,
            href: "/contact",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['contact-link'],
              onClick: evt => {
                handleContactClick();
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                id: "leave-us-a-message",
                className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['contact-link__wrap'],
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Leave us a message"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 37
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['contact-link__background'],
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                    width: "50",
                    height: "50",
                    icon: _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEnvelope"],
                    title: "Contact us"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 41
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-primary btn-lg",
                    children: "Contact us"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 41
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 37
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "d-block my-3 text-center",
          children: ["Telephone: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: `tel:${Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_8__["GetPhoneNumber"])(isInternal)}`,
            children: Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_8__["GetPhoneNumber"])(isInternal)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 72
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

const mapStateToProps = state => ({
  isInternal: state.isInternal
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(ModalContact));

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9tb2RhbC1jb250YWN0L21vZGFsLWNvbnRhY3QubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbW9kYWwtY29udGFjdC9tb2RhbC1jb250YWN0LnRzeCJdLCJuYW1lcyI6WyJNb2RhbENvbnRhY3QiLCJpc0ludGVybmFsIiwib25SZXF1ZXN0Q2xvc2UiLCJ0aXRsZSIsIm90aGVyUHJvcHMiLCJoYW5kbGVDYWxsYmFja0NsaWNrIiwibG9nTGFiZWxFdmVudCIsImhhbmRsZUNvbnRhY3RDbGljayIsInN0eWxlIiwiZXZ0IiwiZmFIZWFkc2V0IiwiZmFFbnZlbG9wZSIsIkdldFBob25lTnVtYmVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLE1BQU1BLFlBQTRCLEdBQUcsVUFBMEQ7QUFBQSxNQUF6RDtBQUFFQyxjQUFGO0FBQWNDLGtCQUFkO0FBQThCQztBQUE5QixHQUF5RDtBQUFBLE1BQWpCQyxVQUFpQjs7QUFDM0YsUUFBTUMsbUJBQW1CLEdBQUcsTUFBTUMsd0VBQWEsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQix3QkFBckIsQ0FBL0M7O0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUcsTUFBTUQsd0VBQWEsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixxQkFBckIsQ0FBOUM7O0FBRUEsc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQyw0REFBRDtBQUFPLFlBQU0sRUFBRUosY0FBZjtBQUErQixjQUFRLEVBQUU7QUFBekMsT0FBbURFLFVBQW5EO0FBQUEsOEJBQ0kscUVBQUMsNERBQUQsQ0FB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QUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFvQ0gsQ0F4Q0Q7O0FBMENBLE1BQU1ZLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ2hDYixZQUFVLEVBQUVhLEtBQUssQ0FBQ2I7QUFEYyxDQUFaLENBQXhCOztBQUllYywwSEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUJiLFlBQXpCLENBQWYsRSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFjdC1tb2RhbFwiOiBcIm1vZGFsLWNvbnRhY3RfY29udGFjdC1tb2RhbF9fM1NfWFZcIixcblx0XCJjb250YWN0LWxpbmtfX3dyYXBcIjogXCJtb2RhbC1jb250YWN0X2NvbnRhY3QtbGlua19fd3JhcF9fMVMwUTJcIixcblx0XCJjb250YWN0LWxpbmtfX2JhY2tncm91bmRcIjogXCJtb2RhbC1jb250YWN0X2NvbnRhY3QtbGlua19fYmFja2dyb3VuZF9fM0NqaHZcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9tb2RhbC1jb250YWN0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUhlYWRzZXQsIGZhRW52ZWxvcGUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3Byby1saWdodC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgbG9nTGFiZWxFdmVudCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvYW5hbHl0aWNzJztcclxuaW1wb3J0IHsgR2V0UGhvbmVOdW1iZXIgfSBmcm9tICdoZWxwZXJzL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIGlzSW50ZXJuYWw6IGJvb2xlYW4sXHJcbiAgICBvblJlcXVlc3RDbG9zZTogYW55LFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxufVxyXG5cclxuY29uc3QgTW9kYWxDb250YWN0OlJlYWN0LkZDPFByb3BzPiA9ICh7IGlzSW50ZXJuYWwsIG9uUmVxdWVzdENsb3NlLCB0aXRsZSwgLi4ub3RoZXJQcm9wcyB9KSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVDYWxsYmFja0NsaWNrID0gKCkgPT4gbG9nTGFiZWxFdmVudCgnQ29udGFjdCcsICdDbGljaycsICdyZXF1ZXN0X2NhbGxiYWNrX3RyYWNrJyk7XHJcbiAgICBjb25zdCBoYW5kbGVDb250YWN0Q2xpY2sgPSAoKSA9PiBsb2dMYWJlbEV2ZW50KCdDb250YWN0JywgJ0NsaWNrJywgJ2xlYXZlX21lc3NhZ2VfdHJhY2snKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNb2RhbCBvbkhpZGU9e29uUmVxdWVzdENsb3NlfSBjZW50ZXJlZD17dHJ1ZX0gey4uLm90aGVyUHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1ub3dyYXAganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGUgY2xhc3NOYW1lPVwiIG1iLTBcIj57dGl0bGV9PC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlWydjb250YWN0LW1vZGFsJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBwYXNzSHJlZiBocmVmPVwiL3JlcXVlc3QtY2FsbGJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVbJ2NvbnRhY3QtbGluayddfSBvbkNsaWNrPXsoZXZ0KSA9PiB7aGFuZGxlQ2FsbGJhY2tDbGljaygpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInJlcXVlc3QtYS1jYWxsYmFja1wiIGNsYXNzTmFtZT17c3R5bGVbJ2NvbnRhY3QtbGlua19fd3JhcCddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm8gdGltZSB0byB3YWl0PyBXZSBjYW4gY2FsbCB5b3U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnY29udGFjdC1saW5rX19iYWNrZ3JvdW5kJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiBpY29uPXtmYUhlYWRzZXR9IHRpdGxlPVwiUmVxdWVzdCBhIGNhbGxiYWNrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiPlJlcXVlc3QgYSBjYWxsYmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBwYXNzSHJlZiBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVbJ2NvbnRhY3QtbGluayddfSBvbkNsaWNrPXsoZXZ0KSA9PiB7aGFuZGxlQ29udGFjdENsaWNrKCl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGVhdmUtdXMtYS1tZXNzYWdlXCIgY2xhc3NOYW1lPXtzdHlsZVsnY29udGFjdC1saW5rX193cmFwJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MZWF2ZSB1cyBhIG1lc3NhZ2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnY29udGFjdC1saW5rX19iYWNrZ3JvdW5kJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiBpY29uPXtmYUVudmVsb3BlfSB0aXRsZT1cIkNvbnRhY3QgdXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCI+Q29udGFjdCB1czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImQtYmxvY2sgbXktMyB0ZXh0LWNlbnRlclwiPlRlbGVwaG9uZTogPGEgaHJlZj17YHRlbDoke0dldFBob25lTnVtYmVyKGlzSW50ZXJuYWwpfWB9PntHZXRQaG9uZU51bWJlcihpc0ludGVybmFsKX08L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBpc0ludGVybmFsOiBzdGF0ZS5pc0ludGVybmFsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE1vZGFsQ29udGFjdCk7Il0sInNvdXJjZVJvb3QiOiIifQ==