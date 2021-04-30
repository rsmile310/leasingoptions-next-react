exports.ids = [146];
exports.modules = {

/***/ "Pitl":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contact-modal": "modal-contact_contact-modal__3S_XV",
	"contact-link__wrap": "modal-contact_contact-link__wrap__1S0Q2",
	"contact-link__background": "modal-contact_contact-link__background__3Cjhv"
};


/***/ }),

/***/ "j7jT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qqGZ");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Pitl");
/* harmony import */ var _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YjgO");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("btDt");
/* harmony import */ var helpers_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("mmV+");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);




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

  const handleCallbackClick = () => Object(_helpers_analytics__WEBPACK_IMPORTED_MODULE_7__[/* logLabelEvent */ "d"])('Contact', 'Click', 'request_callback_track');

  const handleContactClick = () => Object(_helpers_analytics__WEBPACK_IMPORTED_MODULE_7__[/* logLabelEvent */ "d"])('Contact', 'Click', 'leave_message_track');

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({
      onHide: onRequestClose,
      centered: true
    }, otherProps), {}, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Header, {
        className: "d-flex flex-nowrap justify-content-center align-items-center",
        closeButton: true,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Title, {
          className: " mb-0",
          children: title
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Body, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['contact-modal'],
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            passHref: true,
            href: "/request-callback",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['contact-link'],
              onClick: evt => {
                handleCallbackClick();
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                id: "request-a-callback",
                className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['contact-link__wrap'],
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  children: "No time to wait? We can call you"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                  className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['contact-link__background'],
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                    width: "50",
                    height: "50",
                    icon: _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHeadset"],
                    title: "Request a callback"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                    className: "btn btn-primary btn-lg",
                    children: "Request a callback"
                  })]
                })]
              })
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            passHref: true,
            href: "/contact",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['contact-link'],
              onClick: evt => {
                handleContactClick();
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                id: "leave-us-a-message",
                className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['contact-link__wrap'],
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  children: "Leave us a message"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                  className: _modal_contact_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['contact-link__background'],
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                    width: "50",
                    height: "50",
                    icon: _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEnvelope"],
                    title: "Contact us"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                    className: "btn btn-primary btn-lg",
                    children: "Contact us"
                  })]
                })]
              })
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
          className: "d-block my-3 text-center",
          children: ["Telephone: ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            href: `tel:${Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_8__[/* GetPhoneNumber */ "g"])(isInternal)}`,
            children: Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_8__[/* GetPhoneNumber */ "g"])(isInternal)
          })]
        })]
      })]
    }))
  });
};

const mapStateToProps = state => ({
  isInternal: state.isInternal
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(ModalContact));

/***/ })

};;