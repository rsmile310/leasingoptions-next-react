exports.ids = [145];
exports.modules = {

/***/ "5BkG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFieldName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFieldId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFieldError; });
//returns a valid element name property for properly use fieldArray collection of Reach-hook-form
const getFieldName = (name, collectionName, index) => {
  if (collectionName) {
    return `${collectionName}[${index}].${name}`;
  } else {
    return name;
  }
}; //Used to avoid warning for non unique IDs

const getFieldId = (name, collectionName, index) => {
  if (collectionName) {
    return `${collectionName}_${index}_${name}`;
  } else {
    return name;
  }
}; //errors: formContext or useForm errors collection

const getFieldError = (name, collectionName, index, errors) => {
  if (collectionName) {
    if (errors[collectionName] && errors[collectionName].length > index) {
      var _errors$collectionNam;

      return (_errors$collectionNam = errors[collectionName][index]) === null || _errors$collectionNam === void 0 ? void 0 : _errors$collectionNam[name];
    }
  } else {
    return errors[name];
  }

  return null;
};

/***/ }),

/***/ "gt28":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PhoneNumberIsValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UKMobileNumberIsValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailAddressIsValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IsOver18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IsDateInPresentOrPast; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const UKDateFormat = 'DD/MM/YYYY';
const PhoneNumberIsValid = (phoneNumber, allowEmpty = true) => {
  if (phoneNumber) {
    let value = phoneNumber.replace(/\s+/g, "");
    return /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(value);
  } else if (!allowEmpty) {
    return false;
  }

  return true;
};
const UKMobileNumberIsValid = (phoneNumber, allowEmpty = true) => {
  if (phoneNumber) {
    let value = phoneNumber.replace(/\s+/g, "");

    if (value.length != 11) {
      return false;
    } else {
      return /^(07\d{8,12}|447\d{7,11})$/.test(value);
    }
  } else if (!allowEmpty) {
    return false;
  }

  return true;
};
const EmailAddressIsValid = (email, allowEmpty = true) => {
  if (email) {
    let value = email.replace(/\s+/g, "");
    return /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,15}|[0-9]{1,3})?$/.test(value);
  } else if (!allowEmpty) {
    return false;
  }

  return true;
};
const IsOver18 = date => {
  const age = moment__WEBPACK_IMPORTED_MODULE_0___default()().diff(moment__WEBPACK_IMPORTED_MODULE_0___default()(date, UKDateFormat), 'years', true);

  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};
const IsDateInPresentOrPast = date => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date, 'YYYY-MM-DD').isBefore(moment__WEBPACK_IMPORTED_MODULE_0___default()().add(1, 'days').format('YYYY-MM-DD'), 'day');
};

/***/ }),

/***/ "tQCv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helpers_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("gt28");
/* harmony import */ var _common_full_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("usxA");
/* harmony import */ var helpers_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("btDt");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function mapStateToProps(state) {
  return {
    formData: state.formData,
    stepNumber: state.stepIndicator
  };
}

const PersonalStepTwo = props => {
  const formData = props.formData[props.stepNumber];

  const handleGATracking = () => Object(helpers_analytics__WEBPACK_IMPORTED_MODULE_6__[/* logLabelEvent */ "d"])('prop_form_tracking_personal', 'Click', 'personal-details-completed');

  const methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])();
  const {
    register,
    handleSubmit,
    errors
  } = methods;

  const onSubmit = data => {
    if (props.handleFormSave(props.stepNumber, data)) {
      props.handleFormStep(props.stepNumber + 1);
    }
  };

  const onBack = () => props.handleFormStep(props.stepNumber - 1);

  const queryParams = new URLSearchParams(window.location.search);
  const emailDefaultValue = queryParams.get("email") ? queryParams.get("email") : formData.emailAddress;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "w-100 bg-white p-3 p-md-5",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
      className: "mb-5",
      children: "Your Details"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
          children: ["Email Address", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
            children: " (Required)"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          type: "text",
          className: `form-control ${errors.emailAddress ? "is-invalid" : ""}`,
          name: "emailAddress",
          placeholder: "Your Email Address",
          maxLength: 100,
          ref: register({
            required: true,
            validate: value => Object(helpers_validation__WEBPACK_IMPORTED_MODULE_4__[/* EmailAddressIsValid */ "a"])(value) === true || 'Invalid email address'
          }),
          defaultValue: emailDefaultValue
        }), errors.emailAddress && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "This field is required"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["FormContext"], _objectSpread(_objectSpread({}, methods), {}, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
          children: "Your Name"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_common_full_name__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
          showMiddleName: props.showMiddleName,
          formData: formData,
          collectionName: null,
          index: 0
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
          children: "Contact Details"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "form-row mb-3",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "col-24 col-md-12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
              htmlFor: "mobileNumber",
              children: ["Mobile Number ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                children: "(Required)"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              type: "tel",
              className: `form-control ${errors.mobileNumber ? "is-invalid" : ""}`,
              id: "mobileNumber",
              name: "mobileNumber",
              "aria-describedby": "mobileNumber",
              placeholder: "Mobile Number",
              ref: register({
                required: true,
                validate: value => Object(helpers_validation__WEBPACK_IMPORTED_MODULE_4__[/* UKMobileNumberIsValid */ "e"])(value, false) === true || 'Please specify a valid UK mobile number.'
              }),
              defaultValue: formData.mobileNumber
            }), errors.mobileNumber && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: "invalid-feedback d-block",
              children: "Please specify a valid UK mobile number."
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "form-row mb-3",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "col-24 col-md-12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
              htmlFor: "homeNumber",
              children: "Home Number"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              type: "tel",
              className: `form-control ${errors.homeNumber ? "is-invalid" : ""}`,
              id: "homeNumber",
              name: "homeNumber",
              "aria-describedby": "homeNumber",
              placeholder: "Home Number",
              ref: register({
                validate: value => Object(helpers_validation__WEBPACK_IMPORTED_MODULE_4__[/* PhoneNumberIsValid */ "d"])(value) === true || 'Please specify a valid UK landline number.'
              }),
              defaultValue: formData.homeNumber
            }), errors.homeNumber && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: "invalid-feedback d-block",
              children: "Please specify a valid UK landline number."
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-row d-flex justify-content-end",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            type: "button",
            className: "btn btn-outline-secondary mr-3",
            onClick: onBack,
            children: "Back"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            type: "submit",
            className: "btn btn-primary btn-lg",
            onClick: () => {
              handleGATracking();
            },
            children: "Next"
          })]
        })]
      })
    }))]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(PersonalStepTwo));

/***/ }),

/***/ "usxA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5BkG");







const FullName = ({
  collectionName,
  index,
  formData,
  showMiddleName = true
}) => {
  const {
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();

  const fieldName = name => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldName */ "c"])(name, collectionName, index);
  };

  const fieldId = name => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])(name, collectionName, index);
  };

  const fieldError = (name, errors) => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldError */ "a"])(name, collectionName, index, errors);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "col-24 col-md-12 col-lg-6",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
          children: ["Title ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
            children: "(Required)"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
          className: `form-control ${fieldError("title", errors) ? "is-invalid" : ""}`,
          name: fieldName("title"),
          ref: register({
            required: true
          }),
          defaultValue: formData.title,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
            value: "",
            children: "Please select..."
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
            value: "1",
            children: "Mr"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
            value: "2",
            children: "Mrs"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
            value: "3",
            children: "Miss"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
            value: "4",
            children: "Ms"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
            value: "5",
            children: "Dr"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
            value: "6",
            children: "Rev"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
            value: "7",
            children: "Prof"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
            value: "8",
            children: "Lt. Col"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
            value: "9",
            children: "Lord"
          })]
        }), fieldError("title", errors) && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "This field is required"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
          children: ["First Name ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
            children: "(Required)"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          type: "text",
          className: `form-control ${fieldError("firstName", errors) ? "is-invalid" : ""}`,
          name: fieldName("firstName"),
          placeholder: "First Name",
          maxLength: 100,
          defaultValue: formData.firstName,
          ref: register({
            required: true
          })
        }), fieldError("firstName", errors) && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "This field is required"
        })]
      })
    }), showMiddleName && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
          children: "Middle Name"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          type: "text",
          className: "form-control",
          name: fieldName("middleName"),
          placeholder: "Middle Name",
          maxLength: 100,
          ref: register(),
          defaultValue: formData.middleName
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
          children: ["Last Name ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
            children: "(Required)"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          type: "text",
          className: `form-control ${fieldError("lastName", errors) ? "is-invalid" : ""}`,
          name: fieldName("lastName"),
          placeholder: "Last Name",
          maxLength: 100,
          ref: register({
            required: true
          }),
          defaultValue: formData.lastName
        }), fieldError("lastName", errors) && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "This field is required"
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (FullName);

/***/ })

};;