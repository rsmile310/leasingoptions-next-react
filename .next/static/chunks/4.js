(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

/***/ "./components/layout/modal-contact/modal-contact.module.scss":
/*!*******************************************************************!*\
  !*** ./components/layout/modal-contact/modal-contact.module.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./modal-contact.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/layout/modal-contact/modal-contact.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./modal-contact.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/layout/modal-contact/modal-contact.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./modal-contact.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/layout/modal-contact/modal-contact.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/layout/modal-contact/modal-contact.tsx":
/*!***********************************************************!*\
  !*** ./components/layout/modal-contact/modal-contact.tsx ***!
  \***********************************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-contact.module.scss */ "./components/layout/modal-contact/modal-contact.module.scss");
/* harmony import */ var _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "./node_modules/@fortawesome/pro-light-svg-icons/index.es.js");
/* harmony import */ var _helpers_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helpers/analytics */ "./helpers/analytics.tsx");
/* harmony import */ var helpers_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! helpers/helpers */ "./helpers/helpers.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var _jsxFileName = "E:\\current_project\\PPH\\tfs\\Website\\website\\components\\layout\\modal-contact\\modal-contact.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_current_project_PPH_tfs_Website_website_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var ModalContact = function ModalContact(_ref) {
  var isInternal = _ref.isInternal,
      onRequestClose = _ref.onRequestClose,
      title = _ref.title,
      otherProps = Object(E_current_project_PPH_tfs_Website_website_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["isInternal", "onRequestClose", "title"]);

  var handleCallbackClick = function handleCallbackClick() {
    return Object(_helpers_analytics__WEBPACK_IMPORTED_MODULE_9__["logLabelEvent"])('Contact', 'Click', 'request_callback_track');
  };

  var handleContactClick = function handleContactClick() {
    return Object(_helpers_analytics__WEBPACK_IMPORTED_MODULE_9__["logLabelEvent"])('Contact', 'Click', 'leave_message_track');
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
          className: " mb-0",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__["default"].Body, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['contact-modal'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            passHref: true,
            href: "/request-callback",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['contact-link'],
              onClick: function onClick(evt) {
                handleCallbackClick();
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                id: "request-a-callback",
                className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['contact-link__wrap'],
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "No time to wait? We can call you"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['contact-link__background'],
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
                    width: "50",
                    height: "50",
                    icon: _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHeadset"],
                    title: "Request a callback"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-primary btn-lg",
                    children: "Request a callback"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            passHref: true,
            href: "/contact",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['contact-link'],
              onClick: function onClick(evt) {
                handleContactClick();
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                id: "leave-us-a-message",
                className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['contact-link__wrap'],
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Leave us a message"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a['contact-link__background'],
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
                    width: "50",
                    height: "50",
                    icon: _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faEnvelope"],
                    title: "Contact us"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "btn btn-primary btn-lg",
                    children: "Contact us"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "d-block my-3 text-center",
          children: ["Telephone: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "tel:".concat(Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_10__["GetPhoneNumber"])(isInternal)),
            children: Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_10__["GetPhoneNumber"])(isInternal)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 72
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_c = ModalContact;

var mapStateToProps = function mapStateToProps(state) {
  return {
    isInternal: state.isInternal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps)(ModalContact));

var _c;

$RefreshReg$(_c, "ModalContact");

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

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/layout/modal-contact/modal-contact.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/layout/modal-contact/modal-contact.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*  ==========================================================================\n    https://raw.githubusercontent.com/twbs/bootstrap-sass/master/assets/stylesheets/bootstrap/_variables.scss\n    ==========================================================================  */\n/*  ==========================================================================\n    Grid\n    ==========================================================================  */\n/*  ==========================================================================\n    Colours\n    ==========================================================================  */\n/*  ==========================================================================\n    Typography\n    ==========================================================================  */\n/*  ==========================================================================\n    Padding\n    ==========================================================================  */\n/*  ==========================================================================\n    Z-index\n    ==========================================================================  */\n/*  ==========================================================================\n    Images\n\t==========================================================================  */\n.modal-contact_contact-modal__3S_XV {\n  position: relative;\n}\n.modal-contact_contact-modal__3S_XV a {\n  width: 100%;\n  position: relative;\n  text-decoration: none;\n}\n.modal-contact_contact-modal__3S_XV a:hover {\n  text-decoration: none;\n}\n.modal-contact_contact-modal__3S_XV a .modal-contact_contact-link__wrap__1S0Q2 {\n  width: 100%;\n  position: relative;\n  margin: 0 0 30px 0;\n}\n.modal-contact_contact-modal__3S_XV a .modal-contact_contact-link__wrap__1S0Q2 p {\n  font-weight: 600;\n  color: #0094C6;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.modal-contact_contact-modal__3S_XV a .modal-contact_contact-link__wrap__1S0Q2 .modal-contact_contact-link__background__3Cjhv {\n  width: 100%;\n  position: relative;\n  border-radius: 5px;\n  background-color: #d3d3d34f;\n  border-radius: 10px;\n  text-align: center;\n}\n.modal-contact_contact-modal__3S_XV a .modal-contact_contact-link__wrap__1S0Q2 svg {\n  width: 50px;\n  height: 50px;\n  margin: 20px;\n  fill: black;\n}\n.modal-contact_contact-modal__3S_XV a .modal-contact_contact-link__wrap__1S0Q2 svg path {\n  fill: black;\n}\n.modal-contact_contact-modal__3S_XV a .modal-contact_contact-link__wrap__1S0Q2 button {\n  width: 100%;\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-style: normal;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n@media screen and (min-width: 1024px) {\n  .modal-contact_contact-modal__3S_XV {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    align-items: center;\n  }\n  .modal-contact_contact-modal__3S_XV a {\n    max-width: 300px;\n  }\n  .modal-contact_contact-modal__3S_XV a .modal-contact_contact-link__wrap__1S0Q2 {\n    margin: 0;\n  }\n}", "",{"version":3,"sources":["webpack://../../../sass/_variables.scss","webpack://modal-contact.module.scss"],"names":[],"mappings":"AAAA;;iFAAA;AAIA;;iFAAA;AAoCA;;iFAAA;AA2DA;;iFAAA;AA6BA;;iFAAA;AAaA;;iFAAA;AAoBA;;8EAAA;AC9JA;EACI,kBAAA;AAmBJ;AAjBI;EACI,WAAA;EACA,kBAAA;EACA,qBAAA;AAmBR;AAjBQ;EACI,qBAAA;AAmBZ;AAhBQ;EACI,WAAA;EACA,kBAAA;EACA,kBAAA;AAkBZ;AAhBY;EACI,gBAAA;EACA,cDmCL;EClCK,kBAAA;EACA,mBAAA;AAkBhB;AAfY;EACI,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;AAiBhB;AAdY;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;AAgBhB;AAdgB;EACI,WAAA;AAgBpB;AAZY;EACI,WAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,0BAAA;EACA,yBAAA;AAchB;;AARA;EACI;IACI,aAAA;IACA,iBAAA;IACA,6BAAA;IACA,mBAAA;EAWN;EATM;IACI,gBAAA;EAWV;EATU;IACI,SAAA;EAWd;AACF","sourcesContent":["/*  ==========================================================================\r\n    https://raw.githubusercontent.com/twbs/bootstrap-sass/master/assets/stylesheets/bootstrap/_variables.scss\r\n    ==========================================================================  */\r\n\r\n/*  ==========================================================================\r\n    Grid\r\n    ==========================================================================  */\r\n\r\n\t// Grid breakpoints\r\n\t//\r\n\t// Define the minimum dimensions at which your layout will change,\r\n\t// adapting to different screen sizes, for use in media queries.\r\n\t$grid-breakpoints: (\r\n\t  xs: 0,\r\n\t  sm: 768px,\r\n\t  md: 1024px,\r\n\t  lg: 1200px,\r\n\t  xl: 1400px,\r\n\t) !default;\r\n\r\n\t$screen-xs: 480px !default;\r\n\t$screen-ml: 667px !default;\r\n\t$screen-sm: 768px !default;\r\n\t$screen-md: 1024px !default;\r\n\t$screen-lg: 1200px !default;\r\n\t$screen-xl: 1400px !default;\r\n\r\n\t// Grid containers\r\n\t//\r\n\t// Define the maximum width of `.container` for different screen sizes.\r\n\t$container-max-widths: (\r\n\t  sm: 724px,\r\n\t  md: 992px,\r\n\t  lg: 1140px,\r\n\t  xl: 1300px,\r\n\t) !default;\r\n\r\n\t$grid-columns:             24 !default;\r\n\t$grid-gutter-width: \t   30px !default;\r\n\r\n/*  ==========================================================================\r\n    Colours\r\n    ==========================================================================  */\r\n\t\r\n\t$primary:   #0094C6 !default;\r\n\t$secondary: #333333 !default;\r\n\t$success:    #39ac33 !default;\r\n\t$danger:     #e5332d !default;\r\n\t$warning:   orange !default;\r\n\t$info:      #000000 !default;\r\n\t$light:      #dcdcdc !default;\r\n\t$dark:       #000000 !default;\r\n\t$white:     #ffffff !default;\r\n\r\n\t$text-color: #000000;\r\n\t$lo-body-text: #333333;\r\n    $lo-black: #000;\r\n\t$lo-blue: #0094C6;\r\n\t$lo-aqua: #2ed5c8;\r\n\t$lo-mint: #0a676b;\r\n    $lo-drop: #f8f8f8;\r\n    $lo-grey: #f2f2f2;\r\n    $lo-border: #e6e6e6;\r\n    $lo-background: #ededed;\r\n    $lo-shadow: #bdbdbd;\r\n    $lo-charcoal: #3b3b3b;\r\n    $lo-navbar: #1D1D1F;\r\n    $lo-header: #2E3238;\r\n    $lo-footer: #1D1D1F;\r\n\t$lo-slideup: #2e2e2e;\r\n\t$lo-special: #2b2b2b;\r\n    $lo-placeholder: #ACACAC;\r\n    $lo-purple: #B800AA;\r\n    $lo-pink: #E6008A;\r\n    $lo-navy: #061D92;\r\n\t$lo-royal: #011F59;\r\n\t$lo-atc: #033c56;\r\n\t$lo-atc-table: #026299;\r\n    $lo-default: #2A3D5D;\r\n\t$lo-insured: #00B7E2;\r\n\t$lo-number-plate: #e1b638;\r\n\t$tp-green: #00b67a;\r\n\t$tp-text: #191919;\r\n\t$light-grey: #f0f0f0;\r\n\t$mid-grey: #d6d6d6;\r\n    $dark-grey: #8e8e8e;\r\n    $funder-grey: #F3F3F6;\r\n    $lo-muted: #484848;\r\n\r\n\t$lo-tag-teal: #009892;\r\n    $lo-tag-navy: #012958;\r\n    $lo-tag-grey: #FCFCFC;\r\n    $lo-tag-aqua: #007793;\r\n    $lo-tag-blue: #006BB1;\r\n    $lo-tag-red: #AC0021;\r\n    $lo-tag-pink: #820098;\r\n    $lo-tag-purple: #480B7E;\r\n    $lo-tag-green: #1A7B4E;\r\n\r\n/*  ==========================================================================\r\n    Typography\r\n    ==========================================================================  */\r\n\r\n\t$font-family-sans-serif:   'Poppins', sans-serif !default;\r\n\t$font-family-serif:        Georgia, Times New Roman, serif !default;\r\n\r\n\t$font-family-monospace:    Menlo, Monaco, Consolas, \"Courier New\", monospace !default;\r\n\t$font-family-base:         $font-family-sans-serif !default;\r\n\r\n\t$font-size-base:           0.86rem !default;\r\n\t$font-size-large:          ceil(($font-size-base * 1.25)) !default;\r\n\t$font-size-small:          ceil(($font-size-base * 0.85)) !default;\r\n\r\n\t$font-size-h1:             floor(($font-size-base * 2.8)) !default;\r\n\t$font-size-h2:             floor(($font-size-base * 2.5)) !default;\r\n\t$font-size-h3:             ceil(($font-size-base * 2)) !default;\r\n\t$font-size-h4:             ceil(($font-size-base * 1.2)) !default;\r\n\t$font-size-h5:             ceil(($font-size-base * 1)) !default;\r\n\t$font-size-h6:             ceil(($font-size-base * 0.85)) !default;\r\n\r\n\t$line-height-base:         1.428571429 !default;\r\n\t$line-height-computed:     floor(($font-size-base * $line-height-base)) !default;\r\n\r\n\t$headings-font-family:     inherit !default;\r\n\t$headings-font-weight:     500 !default;\r\n\t$headings-line-height:     1.1 !default;\r\n\t$headings-color:           inherit !default;\r\n\r\n/*  ==========================================================================\r\n    Padding\r\n    ==========================================================================  */\r\n\t\r\n\t$padding-base-vertical:    6px !default;\r\n\t$padding-base-horizontal:  12px !default;\r\n\t$padding-large-vertical:   10px !default;\r\n\t$padding-large-horizontal: 16px !default;\r\n\t$padding-small-vertical:   5px !default;\r\n\t$padding-small-horizontal: 10px !default;\r\n\t$padding-xs-vertical:      1px !default;\r\n\t$padding-xs-horizontal:    5px !default;\r\n\r\n/*  ==========================================================================\r\n    Z-index\r\n    ==========================================================================  */\r\n\r\n\t$zindex-navbar:           1000 !default;\r\n\t$zindex-dropdown:         1000 !default;\r\n\t$zindex-popover:          1060 !default;\r\n\t$zindex-tooltip:          1070 !default;\r\n\t$zindex-arrow:            1080 !default;\r\n    $zindex-navbar-fixed:     1030 !default;\r\n    $zindex-results-blocker:  2000 !default;\r\n    $zindex-live-chat:        2070 !default;\r\n    $zindex-loading-bar:      2080 !default;\r\n    $zindex-slide-up:         3000 !default;\r\n    $zindex-cta-bar:          3050 !default;\r\n\t$zindex-fullscreen:       4000 !default;\r\n\t$zindex-modal-background: 4040 !default;\r\n    $zindex-modal:            4060 !default;\r\n    $zindex-modal-ouibounce:  4080 !default;\r\n\r\n/*  ==========================================================================\r\n    Images\r\n\t==========================================================================  */\t\r\n\t\r\n\t$img-ratio:\t\t\t\t  66.66% !default; // 3:2 Aspect Ratio\t","@import \"../../../sass/_variables\";\r\n\r\n\r\n.contact-modal {\r\n    position: relative;\r\n\r\n    a {\r\n        width: 100%;\r\n        position: relative;\r\n        text-decoration: none;\r\n\r\n        &:hover {\r\n            text-decoration: none;\r\n        }\r\n\r\n        .contact-link__wrap {\r\n            width: 100%;\r\n            position: relative;\r\n            margin: 0 0 30px 0;\r\n\r\n            p {\r\n                font-weight: 600;\r\n                color: $lo-blue;\r\n                text-align: center;\r\n                margin-bottom: 10px;\r\n            }\r\n\r\n            .contact-link__background {\r\n                width: 100%;\r\n                position: relative;\r\n                border-radius: 5px;\r\n                background-color: #d3d3d34f;\r\n                border-radius: 10px;\r\n                text-align: center;\r\n            }\r\n\r\n            svg {\r\n                width: 50px;\r\n                height: 50px;\r\n                margin: 20px;\r\n                fill: black;\r\n\r\n                path {\r\n                    fill: black; \r\n                }\r\n            }\r\n\r\n            button {\r\n                width: 100%;\r\n                min-height: 40px;\r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n                font-style: normal;\r\n                border-top-right-radius: 0;\r\n                border-top-left-radius: 0;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (min-width: $screen-md) {\r\n    .contact-modal {\r\n        display: flex;\r\n        flex-wrap: nowrap;\r\n        justify-content: space-around;\r\n        align-items: center;\r\n    \r\n        a {\r\n            max-width: 300px;\r\n\r\n            .contact-link__wrap {\r\n                margin: 0;\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"contact-modal": "modal-contact_contact-modal__3S_XV",
	"contact-link__wrap": "modal-contact_contact-link__wrap__1S0Q2",
	"contact-link__background": "modal-contact_contact-link__background__3Cjhv"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbW9kYWwtY29udGFjdC9tb2RhbC1jb250YWN0Lm1vZHVsZS5zY3NzP2RmMzgiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L21vZGFsLWNvbnRhY3QvbW9kYWwtY29udGFjdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L21vZGFsLWNvbnRhY3QvbW9kYWwtY29udGFjdC5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJNb2RhbENvbnRhY3QiLCJpc0ludGVybmFsIiwib25SZXF1ZXN0Q2xvc2UiLCJ0aXRsZSIsIm90aGVyUHJvcHMiLCJoYW5kbGVDYWxsYmFja0NsaWNrIiwibG9nTGFiZWxFdmVudCIsImhhbmRsZUNvbnRhY3RDbGljayIsInN0eWxlIiwiZXZ0IiwiZmFIZWFkc2V0IiwiZmFFbnZlbG9wZSIsIkdldFBob25lTnVtYmVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxVQUFVLG1CQUFPLENBQUMseU5BQThHO0FBQ2hJLDBCQUEwQixtQkFBTyxDQUFDLDhuQkFBa1c7O0FBRXBZOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLDhuQkFBa1c7QUFDeFc7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw4bkJBQWtXOztBQUU1WDs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVB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QUF3Qyx1Q0FBdUMsaUJBQWlCLHlCQUF5QixnQ0FBZ0MsaUNBQWlDLGlDQUFpQyxnQ0FBZ0MsOEJBQThCLG9DQUFvQyxzQkFBc0IsaUJBQWlCLDRCQUE0QixnQ0FBZ0MscUNBQXFDLGtDQUFrQyx3Q0FBd0MsNENBQTRDLHVDQUF1QywrQ0FBK0MsOENBQThDLGlCQUFpQixhQUFhLFNBQVMsS0FBSyxtREFBbUQsd0JBQXdCLDBCQUEwQiw4QkFBOEIsMENBQTBDLGdDQUFnQyx1QkFBdUIsaUNBQWlDLHlDQUF5Qyw4QkFBOEIsaUJBQWlCLGFBQWEsU0FBUyxLQUFLLG1CQUFtQjtBQUN0elg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL2NodW5rcy80LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9tb2RhbC1jb250YWN0Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9tb2RhbC1jb250YWN0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vbW9kYWwtY29udGFjdC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vbW9kYWwtY29udGFjdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFIZWFkc2V0LCBmYUVudmVsb3BlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9wcm8tbGlnaHQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IGxvZ0xhYmVsRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2FuYWx5dGljcyc7XHJcbmltcG9ydCB7IEdldFBob25lTnVtYmVyIH0gZnJvbSAnaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBpc0ludGVybmFsOiBib29sZWFuLFxyXG4gICAgb25SZXF1ZXN0Q2xvc2U6IGFueSxcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbn1cclxuXHJcbmNvbnN0IE1vZGFsQ29udGFjdDpSZWFjdC5GQzxQcm9wcz4gPSAoeyBpc0ludGVybmFsLCBvblJlcXVlc3RDbG9zZSwgdGl0bGUsIC4uLm90aGVyUHJvcHMgfSkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ2FsbGJhY2tDbGljayA9ICgpID0+IGxvZ0xhYmVsRXZlbnQoJ0NvbnRhY3QnLCAnQ2xpY2snLCAncmVxdWVzdF9jYWxsYmFja190cmFjaycpO1xyXG4gICAgY29uc3QgaGFuZGxlQ29udGFjdENsaWNrID0gKCkgPT4gbG9nTGFiZWxFdmVudCgnQ29udGFjdCcsICdDbGljaycsICdsZWF2ZV9tZXNzYWdlX3RyYWNrJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TW9kYWwgb25IaWRlPXtvblJlcXVlc3RDbG9zZX0gY2VudGVyZWQ9e3RydWV9IHsuLi5vdGhlclByb3BzfT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtbm93cmFwIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlIGNsYXNzTmFtZT1cIiBtYi0wXCI+e3RpdGxlfTwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZVsnY29udGFjdC1tb2RhbCddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcGFzc0hyZWYgaHJlZj1cIi9yZXF1ZXN0LWNhbGxiYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlWydjb250YWN0LWxpbmsnXX0gb25DbGljaz17KGV2dCkgPT4ge2hhbmRsZUNhbGxiYWNrQ2xpY2soKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJyZXF1ZXN0LWEtY2FsbGJhY2tcIiBjbGFzc05hbWU9e3N0eWxlWydjb250YWN0LWxpbmtfX3dyYXAnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vIHRpbWUgdG8gd2FpdD8gV2UgY2FuIGNhbGwgeW91PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2NvbnRhY3QtbGlua19fYmFja2dyb3VuZCddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgaWNvbj17ZmFIZWFkc2V0fSB0aXRsZT1cIlJlcXVlc3QgYSBjYWxsYmFja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIj5SZXF1ZXN0IGEgY2FsbGJhY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcGFzc0hyZWYgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlWydjb250YWN0LWxpbmsnXX0gb25DbGljaz17KGV2dCkgPT4ge2hhbmRsZUNvbnRhY3RDbGljaygpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxlYXZlLXVzLWEtbWVzc2FnZVwiIGNsYXNzTmFtZT17c3R5bGVbJ2NvbnRhY3QtbGlua19fd3JhcCddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGVhdmUgdXMgYSBtZXNzYWdlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbJ2NvbnRhY3QtbGlua19fYmFja2dyb3VuZCddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgaWNvbj17ZmFFbnZlbG9wZX0gdGl0bGU9XCJDb250YWN0IHVzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiPkNvbnRhY3QgdXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkLWJsb2NrIG15LTMgdGV4dC1jZW50ZXJcIj5UZWxlcGhvbmU6IDxhIGhyZWY9e2B0ZWw6JHtHZXRQaG9uZU51bWJlcihpc0ludGVybmFsKX1gfT57R2V0UGhvbmVOdW1iZXIoaXNJbnRlcm5hbCl9PC9hPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gICAgaXNJbnRlcm5hbDogc3RhdGUuaXNJbnRlcm5hbFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNb2RhbENvbnRhY3QpOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgICBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdHdicy9ib290c3RyYXAtc2Fzcy9tYXN0ZXIvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdmFyaWFibGVzLnNjc3NcXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICovXFxuLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgIEdyaWRcXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICovXFxuLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgIENvbG91cnNcXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICovXFxuLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgIFR5cG9ncmFwaHlcXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICovXFxuLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgIFBhZGRpbmdcXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICovXFxuLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgIFotaW5kZXhcXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICovXFxuLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgIEltYWdlc1xcblxcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAqL1xcbi5tb2RhbC1jb250YWN0X2NvbnRhY3QtbW9kYWxfXzNTX1hWIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1vZGFsLWNvbnRhY3RfY29udGFjdC1tb2RhbF9fM1NfWFYgYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm1vZGFsLWNvbnRhY3RfY29udGFjdC1tb2RhbF9fM1NfWFYgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5tb2RhbC1jb250YWN0X2NvbnRhY3QtbW9kYWxfXzNTX1hWIGEgLm1vZGFsLWNvbnRhY3RfY29udGFjdC1saW5rX193cmFwX18xUzBRMiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMCAwIDMwcHggMDtcXG59XFxuLm1vZGFsLWNvbnRhY3RfY29udGFjdC1tb2RhbF9fM1NfWFYgYSAubW9kYWwtY29udGFjdF9jb250YWN0LWxpbmtfX3dyYXBfXzFTMFEyIHAge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjMDA5NEM2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLm1vZGFsLWNvbnRhY3RfY29udGFjdC1tb2RhbF9fM1NfWFYgYSAubW9kYWwtY29udGFjdF9jb250YWN0LWxpbmtfX3dyYXBfXzFTMFEyIC5tb2RhbC1jb250YWN0X2NvbnRhY3QtbGlua19fYmFja2dyb3VuZF9fM0NqaHYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzNGY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwtY29udGFjdF9jb250YWN0LW1vZGFsX18zU19YViBhIC5tb2RhbC1jb250YWN0X2NvbnRhY3QtbGlua19fd3JhcF9fMVMwUTIgc3ZnIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgZmlsbDogYmxhY2s7XFxufVxcbi5tb2RhbC1jb250YWN0X2NvbnRhY3QtbW9kYWxfXzNTX1hWIGEgLm1vZGFsLWNvbnRhY3RfY29udGFjdC1saW5rX193cmFwX18xUzBRMiBzdmcgcGF0aCB7XFxuICBmaWxsOiBibGFjaztcXG59XFxuLm1vZGFsLWNvbnRhY3RfY29udGFjdC1tb2RhbF9fM1NfWFYgYSAubW9kYWwtY29udGFjdF9jb250YWN0LWxpbmtfX3dyYXBfXzFTMFEyIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5tb2RhbC1jb250YWN0X2NvbnRhY3QtbW9kYWxfXzNTX1hWIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLm1vZGFsLWNvbnRhY3RfY29udGFjdC1tb2RhbF9fM1NfWFYgYSB7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICB9XFxuICAubW9kYWwtY29udGFjdF9jb250YWN0LW1vZGFsX18zU19YViBhIC5tb2RhbC1jb250YWN0X2NvbnRhY3QtbGlua19fd3JhcF9fMVMwUTIge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi8uLi8uLi9zYXNzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL21vZGFsLWNvbnRhY3QubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O2lGQUFBO0FBSUE7O2lGQUFBO0FBb0NBOztpRkFBQTtBQTJEQTs7aUZBQUE7QUE2QkE7O2lGQUFBO0FBYUE7O2lGQUFBO0FBb0JBOzs4RUFBQTtBQzlKQTtFQUNJLGtCQUFBO0FBbUJKO0FBakJJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFtQlI7QUFqQlE7RUFDSSxxQkFBQTtBQW1CWjtBQWhCUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBa0JaO0FBaEJZO0VBQ0ksZ0JBQUE7RUFDQSxjRG1DTDtFQ2xDSyxrQkFBQTtFQUNBLG1CQUFBO0FBa0JoQjtBQWZZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFpQmhCO0FBZFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBZ0JoQjtBQWRnQjtFQUNJLFdBQUE7QUFnQnBCO0FBWlk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQWNoQjs7QUFSQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLGlCQUFBO0lBQ0EsNkJBQUE7SUFDQSxtQkFBQTtFQVdOO0VBVE07SUFDSSxnQkFBQTtFQVdWO0VBVFU7SUFDSSxTQUFBO0VBV2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3R3YnMvYm9vdHN0cmFwLXNhc3MvbWFzdGVyL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3ZhcmlhYmxlcy5zY3NzXFxyXFxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAqL1xcclxcblxcclxcbi8qICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICBHcmlkXFxyXFxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAqL1xcclxcblxcclxcblxcdC8vIEdyaWQgYnJlYWtwb2ludHNcXHJcXG5cXHQvL1xcclxcblxcdC8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxcclxcblxcdC8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cXHJcXG5cXHQkZ3JpZC1icmVha3BvaW50czogKFxcclxcblxcdCAgeHM6IDAsXFxyXFxuXFx0ICBzbTogNzY4cHgsXFxyXFxuXFx0ICBtZDogMTAyNHB4LFxcclxcblxcdCAgbGc6IDEyMDBweCxcXHJcXG5cXHQgIHhsOiAxNDAwcHgsXFxyXFxuXFx0KSAhZGVmYXVsdDtcXHJcXG5cXHJcXG5cXHQkc2NyZWVuLXhzOiA0ODBweCAhZGVmYXVsdDtcXHJcXG5cXHQkc2NyZWVuLW1sOiA2NjdweCAhZGVmYXVsdDtcXHJcXG5cXHQkc2NyZWVuLXNtOiA3NjhweCAhZGVmYXVsdDtcXHJcXG5cXHQkc2NyZWVuLW1kOiAxMDI0cHggIWRlZmF1bHQ7XFxyXFxuXFx0JHNjcmVlbi1sZzogMTIwMHB4ICFkZWZhdWx0O1xcclxcblxcdCRzY3JlZW4teGw6IDE0MDBweCAhZGVmYXVsdDtcXHJcXG5cXHJcXG5cXHQvLyBHcmlkIGNvbnRhaW5lcnNcXHJcXG5cXHQvL1xcclxcblxcdC8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXFxyXFxuXFx0JGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXFxyXFxuXFx0ICBzbTogNzI0cHgsXFxyXFxuXFx0ICBtZDogOTkycHgsXFxyXFxuXFx0ICBsZzogMTE0MHB4LFxcclxcblxcdCAgeGw6IDEzMDBweCxcXHJcXG5cXHQpICFkZWZhdWx0O1xcclxcblxcclxcblxcdCRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgIDI0ICFkZWZhdWx0O1xcclxcblxcdCRncmlkLWd1dHRlci13aWR0aDogXFx0ICAgMzBweCAhZGVmYXVsdDtcXHJcXG5cXHJcXG4vKiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgQ29sb3Vyc1xcclxcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgKi9cXHJcXG5cXHRcXHJcXG5cXHQkcHJpbWFyeTogICAjMDA5NEM2ICFkZWZhdWx0O1xcclxcblxcdCRzZWNvbmRhcnk6ICMzMzMzMzMgIWRlZmF1bHQ7XFxyXFxuXFx0JHN1Y2Nlc3M6ICAgICMzOWFjMzMgIWRlZmF1bHQ7XFxyXFxuXFx0JGRhbmdlcjogICAgICNlNTMzMmQgIWRlZmF1bHQ7XFxyXFxuXFx0JHdhcm5pbmc6ICAgb3JhbmdlICFkZWZhdWx0O1xcclxcblxcdCRpbmZvOiAgICAgICMwMDAwMDAgIWRlZmF1bHQ7XFxyXFxuXFx0JGxpZ2h0OiAgICAgICNkY2RjZGMgIWRlZmF1bHQ7XFxyXFxuXFx0JGRhcms6ICAgICAgICMwMDAwMDAgIWRlZmF1bHQ7XFxyXFxuXFx0JHdoaXRlOiAgICAgI2ZmZmZmZiAhZGVmYXVsdDtcXHJcXG5cXHJcXG5cXHQkdGV4dC1jb2xvcjogIzAwMDAwMDtcXHJcXG5cXHQkbG8tYm9keS10ZXh0OiAjMzMzMzMzO1xcclxcbiAgICAkbG8tYmxhY2s6ICMwMDA7XFxyXFxuXFx0JGxvLWJsdWU6ICMwMDk0QzY7XFxyXFxuXFx0JGxvLWFxdWE6ICMyZWQ1Yzg7XFxyXFxuXFx0JGxvLW1pbnQ6ICMwYTY3NmI7XFxyXFxuICAgICRsby1kcm9wOiAjZjhmOGY4O1xcclxcbiAgICAkbG8tZ3JleTogI2YyZjJmMjtcXHJcXG4gICAgJGxvLWJvcmRlcjogI2U2ZTZlNjtcXHJcXG4gICAgJGxvLWJhY2tncm91bmQ6ICNlZGVkZWQ7XFxyXFxuICAgICRsby1zaGFkb3c6ICNiZGJkYmQ7XFxyXFxuICAgICRsby1jaGFyY29hbDogIzNiM2IzYjtcXHJcXG4gICAgJGxvLW5hdmJhcjogIzFEMUQxRjtcXHJcXG4gICAgJGxvLWhlYWRlcjogIzJFMzIzODtcXHJcXG4gICAgJGxvLWZvb3RlcjogIzFEMUQxRjtcXHJcXG5cXHQkbG8tc2xpZGV1cDogIzJlMmUyZTtcXHJcXG5cXHQkbG8tc3BlY2lhbDogIzJiMmIyYjtcXHJcXG4gICAgJGxvLXBsYWNlaG9sZGVyOiAjQUNBQ0FDO1xcclxcbiAgICAkbG8tcHVycGxlOiAjQjgwMEFBO1xcclxcbiAgICAkbG8tcGluazogI0U2MDA4QTtcXHJcXG4gICAgJGxvLW5hdnk6ICMwNjFEOTI7XFxyXFxuXFx0JGxvLXJveWFsOiAjMDExRjU5O1xcclxcblxcdCRsby1hdGM6ICMwMzNjNTY7XFxyXFxuXFx0JGxvLWF0Yy10YWJsZTogIzAyNjI5OTtcXHJcXG4gICAgJGxvLWRlZmF1bHQ6ICMyQTNENUQ7XFxyXFxuXFx0JGxvLWluc3VyZWQ6ICMwMEI3RTI7XFxyXFxuXFx0JGxvLW51bWJlci1wbGF0ZTogI2UxYjYzODtcXHJcXG5cXHQkdHAtZ3JlZW46ICMwMGI2N2E7XFxyXFxuXFx0JHRwLXRleHQ6ICMxOTE5MTk7XFxyXFxuXFx0JGxpZ2h0LWdyZXk6ICNmMGYwZjA7XFxyXFxuXFx0JG1pZC1ncmV5OiAjZDZkNmQ2O1xcclxcbiAgICAkZGFyay1ncmV5OiAjOGU4ZThlO1xcclxcbiAgICAkZnVuZGVyLWdyZXk6ICNGM0YzRjY7XFxyXFxuICAgICRsby1tdXRlZDogIzQ4NDg0ODtcXHJcXG5cXHJcXG5cXHQkbG8tdGFnLXRlYWw6ICMwMDk4OTI7XFxyXFxuICAgICRsby10YWctbmF2eTogIzAxMjk1ODtcXHJcXG4gICAgJGxvLXRhZy1ncmV5OiAjRkNGQ0ZDO1xcclxcbiAgICAkbG8tdGFnLWFxdWE6ICMwMDc3OTM7XFxyXFxuICAgICRsby10YWctYmx1ZTogIzAwNkJCMTtcXHJcXG4gICAgJGxvLXRhZy1yZWQ6ICNBQzAwMjE7XFxyXFxuICAgICRsby10YWctcGluazogIzgyMDA5ODtcXHJcXG4gICAgJGxvLXRhZy1wdXJwbGU6ICM0ODBCN0U7XFxyXFxuICAgICRsby10YWctZ3JlZW46ICMxQTdCNEU7XFxyXFxuXFxyXFxuLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgIFR5cG9ncmFwaHlcXHJcXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICovXFxyXFxuXFxyXFxuXFx0JGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgJ1BvcHBpbnMnLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xcclxcblxcdCRmb250LWZhbWlseS1zZXJpZjogICAgICAgIEdlb3JnaWEsIFRpbWVzIE5ldyBSb21hbiwgc2VyaWYgIWRlZmF1bHQ7XFxyXFxuXFxyXFxuXFx0JGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcXHJcXG5cXHQkZm9udC1mYW1pbHktYmFzZTogICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcXHJcXG5cXHJcXG5cXHQkZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAwLjg2cmVtICFkZWZhdWx0O1xcclxcblxcdCRmb250LXNpemUtbGFyZ2U6ICAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDEuMjUpKSAhZGVmYXVsdDtcXHJcXG5cXHQkZm9udC1zaXplLXNtYWxsOiAgICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAwLjg1KSkgIWRlZmF1bHQ7XFxyXFxuXFxyXFxuXFx0JGZvbnQtc2l6ZS1oMTogICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuOCkpICFkZWZhdWx0O1xcclxcblxcdCRmb250LXNpemUtaDI6ICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAyLjUpKSAhZGVmYXVsdDtcXHJcXG5cXHQkZm9udC1zaXplLWgzOiAgICAgICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAyKSkgIWRlZmF1bHQ7XFxyXFxuXFx0JGZvbnQtc2l6ZS1oNDogICAgICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS4yKSkgIWRlZmF1bHQ7XFxyXFxuXFx0JGZvbnQtc2l6ZS1oNTogICAgICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMSkpICFkZWZhdWx0O1xcclxcblxcdCRmb250LXNpemUtaDY6ICAgICAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDAuODUpKSAhZGVmYXVsdDtcXHJcXG5cXHJcXG5cXHQkbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAxLjQyODU3MTQyOSAhZGVmYXVsdDtcXHJcXG5cXHQkbGluZS1oZWlnaHQtY29tcHV0ZWQ6ICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UpKSAhZGVmYXVsdDtcXHJcXG5cXHJcXG5cXHQkaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgICBpbmhlcml0ICFkZWZhdWx0O1xcclxcblxcdCRoZWFkaW5ncy1mb250LXdlaWdodDogICAgIDUwMCAhZGVmYXVsdDtcXHJcXG5cXHQkaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAxLjEgIWRlZmF1bHQ7XFxyXFxuXFx0JGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcXHJcXG5cXHJcXG4vKiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgUGFkZGluZ1xcclxcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgKi9cXHJcXG5cXHRcXHJcXG5cXHQkcGFkZGluZy1iYXNlLXZlcnRpY2FsOiAgICA2cHggIWRlZmF1bHQ7XFxyXFxuXFx0JHBhZGRpbmctYmFzZS1ob3Jpem9udGFsOiAgMTJweCAhZGVmYXVsdDtcXHJcXG5cXHQkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbDogICAxMHB4ICFkZWZhdWx0O1xcclxcblxcdCRwYWRkaW5nLWxhcmdlLWhvcml6b250YWw6IDE2cHggIWRlZmF1bHQ7XFxyXFxuXFx0JHBhZGRpbmctc21hbGwtdmVydGljYWw6ICAgNXB4ICFkZWZhdWx0O1xcclxcblxcdCRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw6IDEwcHggIWRlZmF1bHQ7XFxyXFxuXFx0JHBhZGRpbmcteHMtdmVydGljYWw6ICAgICAgMXB4ICFkZWZhdWx0O1xcclxcblxcdCRwYWRkaW5nLXhzLWhvcml6b250YWw6ICAgIDVweCAhZGVmYXVsdDtcXHJcXG5cXHJcXG4vKiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgWi1pbmRleFxcclxcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgKi9cXHJcXG5cXHJcXG5cXHQkemluZGV4LW5hdmJhcjogICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XFxyXFxuXFx0JHppbmRleC1kcm9wZG93bjogICAgICAgICAxMDAwICFkZWZhdWx0O1xcclxcblxcdCR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgMTA2MCAhZGVmYXVsdDtcXHJcXG5cXHQkemluZGV4LXRvb2x0aXA6ICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XFxyXFxuXFx0JHppbmRleC1hcnJvdzogICAgICAgICAgICAxMDgwICFkZWZhdWx0O1xcclxcbiAgICAkemluZGV4LW5hdmJhci1maXhlZDogICAgIDEwMzAgIWRlZmF1bHQ7XFxyXFxuICAgICR6aW5kZXgtcmVzdWx0cy1ibG9ja2VyOiAgMjAwMCAhZGVmYXVsdDtcXHJcXG4gICAgJHppbmRleC1saXZlLWNoYXQ6ICAgICAgICAyMDcwICFkZWZhdWx0O1xcclxcbiAgICAkemluZGV4LWxvYWRpbmctYmFyOiAgICAgIDIwODAgIWRlZmF1bHQ7XFxyXFxuICAgICR6aW5kZXgtc2xpZGUtdXA6ICAgICAgICAgMzAwMCAhZGVmYXVsdDtcXHJcXG4gICAgJHppbmRleC1jdGEtYmFyOiAgICAgICAgICAzMDUwICFkZWZhdWx0O1xcclxcblxcdCR6aW5kZXgtZnVsbHNjcmVlbjogICAgICAgNDAwMCAhZGVmYXVsdDtcXHJcXG5cXHQkemluZGV4LW1vZGFsLWJhY2tncm91bmQ6IDQwNDAgIWRlZmF1bHQ7XFxyXFxuICAgICR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgNDA2MCAhZGVmYXVsdDtcXHJcXG4gICAgJHppbmRleC1tb2RhbC1vdWlib3VuY2U6ICA0MDgwICFkZWZhdWx0O1xcclxcblxcclxcbi8qICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICBJbWFnZXNcXHJcXG5cXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgKi9cXHRcXHJcXG5cXHRcXHJcXG5cXHQkaW1nLXJhdGlvOlxcdFxcdFxcdFxcdCAgNjYuNjYlICFkZWZhdWx0OyAvLyAzOjIgQXNwZWN0IFJhdGlvXFx0XCIsXCJAaW1wb3J0IFxcXCIuLi8uLi8uLi9zYXNzL192YXJpYWJsZXNcXFwiO1xcclxcblxcclxcblxcclxcbi5jb250YWN0LW1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBhIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmNvbnRhY3QtbGlua19fd3JhcCB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDMwcHggMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRsby1ibHVlO1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5jb250YWN0LWxpbmtfX2JhY2tncm91bmQge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM0ZjtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBzdmcge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGZpbGw6IGJsYWNrO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBwYXRoIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGJsYWNrOyBcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4tbWQpIHtcXHJcXG4gICAgLmNvbnRhY3QtbW9kYWwge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmNvbnRhY3QtbGlua19fd3JhcCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFjdC1tb2RhbFwiOiBcIm1vZGFsLWNvbnRhY3RfY29udGFjdC1tb2RhbF9fM1NfWFZcIixcblx0XCJjb250YWN0LWxpbmtfX3dyYXBcIjogXCJtb2RhbC1jb250YWN0X2NvbnRhY3QtbGlua19fd3JhcF9fMVMwUTJcIixcblx0XCJjb250YWN0LWxpbmtfX2JhY2tncm91bmRcIjogXCJtb2RhbC1jb250YWN0X2NvbnRhY3QtbGlua19fYmFja2dyb3VuZF9fM0NqaHZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9