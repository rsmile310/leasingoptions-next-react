exports.ids = [124];
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

/***/ "6ST+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./helpers/fieldArrayHelper.tsx
var fieldArrayHelper = __webpack_require__("5BkG");

// EXTERNAL MODULE: ./components/proposal/business/director-details.tsx
var director_details = __webpack_require__("EOWn");

// CONCATENATED MODULE: ./components/proposal/business/directors-list.tsx








const BusinessDirectorList = ({
  formData
}) => {
  const collectionName = "directors";
  const {
    register
  } = Object(external_react_hook_form_["useFormContext"])();
  const {
    0: directors,
    1: setDirectors
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    if (!formData[collectionName]) {
      addDirector({});
    } else {
      setDirectors(formData[collectionName]);
    }
  }, []);

  const addDirector = props => {
    setDirectors([...directors, props]);
  };

  const removeDirector = () => {
    setDirectors([...directors.slice(0, 1)]);
  };

  const onRadioboxChange = evt => {
    if (evt.target.value === "yes" && directors.length === 1) {
      addDirector({});
    } else if (evt.target.value === "no" && directors.length > 1) {
      removeDirector();
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: directors.map((item, index) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: index === 0 ? "Director Details" : "Additional Director"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(director_details["a" /* default */], {
          collectionName: collectionName,
          index: index,
          formData: item
        }), index === 0 && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "form-row",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-24 col-md-12",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                children: "Add Director"
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "form-row mb-5",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-24 col-md-12",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "form-check form-check-inline",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  className: "form-check-input",
                  type: "radio",
                  name: Object(fieldArrayHelper["c" /* getFieldName */])("addDirector", collectionName, index),
                  id: Object(fieldArrayHelper["b" /* getFieldId */])("addDirector_yes", collectionName, index),
                  value: "yes",
                  ref: register(),
                  defaultChecked: item.addDirector == "yes",
                  onChange: onRadioboxChange
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "form-check-label",
                  htmlFor: Object(fieldArrayHelper["b" /* getFieldId */])("addDirector_yes", collectionName, index),
                  children: "Yes"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "form-check form-check-inline",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  className: "form-check-input",
                  type: "radio",
                  name: Object(fieldArrayHelper["c" /* getFieldName */])("addDirector", collectionName, index),
                  id: Object(fieldArrayHelper["b" /* getFieldId */])("addDirector_no", collectionName, index),
                  value: "no",
                  ref: register(),
                  defaultChecked: !item.addDirector || item.addDirector == "no",
                  onChange: onRadioboxChange
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "form-check-label",
                  htmlFor: Object(fieldArrayHelper["b" /* getFieldId */])("addDirector_no", collectionName, index),
                  children: "No"
                })]
              })]
            })
          })]
        })]
      }, index);
    })
  });
};

/* harmony default export */ var directors_list = (BusinessDirectorList);
// EXTERNAL MODULE: ./helpers/analytics.tsx
var analytics = __webpack_require__("btDt");

// CONCATENATED MODULE: ./components/proposal/limited/ltd-step-04.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function mapStateToProps(state) {
  return {
    formData: state.formData,
    stepNumber: state.stepIndicator
  };
}

const LimitedStepFour = props => {
  const formData = props.formData[props.stepNumber];

  const handleGATracking = () => Object(analytics["d" /* logLabelEvent */])('prop_form_tracking_ltd', 'Click', 'directors-list-completed');

  const methods = Object(external_react_hook_form_["useForm"])();
  const {
    handleSubmit
  } = methods;

  const onSubmit = data => {
    if (props.handleFormSave(props.stepNumber, data)) {
      props.handleFormStep(props.stepNumber + 1);
    }
  };

  const onBack = () => props.handleFormStep(props.stepNumber - 1);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "w-100 bg-white p-3 p-md-5",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_hook_form_["FormContext"], _objectSpread(_objectSpread({}, methods), {}, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(directors_list, {
          formData: formData
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "form-row d-flex justify-content-end",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            type: "button",
            className: "btn btn-outline-secondary mr-3",
            onClick: onBack,
            children: "Back"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            type: "submit",
            className: "btn btn-primary btn-lg",
            onClick: () => {
              handleGATracking();
            },
            children: " Next"
          })]
        })]
      })
    }))
  });
};

/* harmony default export */ var ltd_step_04 = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(LimitedStepFour));

/***/ }),

/***/ "7lqE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5BkG");






const NationalitySelector = ({
  collectionName,
  index,
  defaultValue
}) => {
  const {
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();

  const fieldError = () => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldError */ "a"])("nationalityId", collectionName, index, errors);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "form-row mb-3",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "col-24 col-md-12 col-lg-6",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
        children: ["Nationality ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
          children: "(Required)"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
        className: `form-control ${fieldError() ? "is-invalid" : ""}`,
        name: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldName */ "c"])("nationalityId", collectionName, index),
        ref: register({
          required: true
        }),
        defaultValue: defaultValue,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "",
          children: "Please select..."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "27",
          children: "British"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "1",
          children: "Afghan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "2",
          children: "Albanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "3",
          children: "Algerian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "4",
          children: "American"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "5",
          children: "Andorran"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "6",
          children: "Angolan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "7",
          children: "Antiguans"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "8",
          children: "Argentinean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "9",
          children: "Armenian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "10",
          children: "Australian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "11",
          children: "Austrian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "12",
          children: "Azerbaijani"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "13",
          children: "Bahamian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "14",
          children: "Bahraini"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "15",
          children: "Bangladeshi"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "16",
          children: "Barbadian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "17",
          children: "Barbudans"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "18",
          children: "Batswana"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "19",
          children: "Belarusian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "20",
          children: "Belgian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "21",
          children: "Belizean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "22",
          children: "Beninese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "23",
          children: "Bhutanese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "24",
          children: "Bolivian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "25",
          children: "Bosnian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "26",
          children: "Brazilian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "28",
          children: "Bruneian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "29",
          children: "Bulgarian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "30",
          children: "Burkinabe"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "31",
          children: "Burmese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "32",
          children: "Burundian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "33",
          children: "Cambodian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "34",
          children: "Cameroonian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "35",
          children: "Canadian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "36",
          children: "Cape Verdean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "37",
          children: "Central African"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "38",
          children: "Chadian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "39",
          children: "Chilean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "40",
          children: "Chinese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "41",
          children: "Colombian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "42",
          children: "Comoran"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "43",
          children: "Congolese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "44",
          children: "Costa Rican"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "45",
          children: "Croatian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "46",
          children: "Cuban"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "47",
          children: "Cypriot"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "48",
          children: "Czech"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "49",
          children: "Danish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "50",
          children: "Djibouti"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "51",
          children: "Dominican"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "52",
          children: "Dutch"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "53",
          children: "Dutchman"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "54",
          children: "Dutchwoman"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "55",
          children: "East Timorese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "56",
          children: "Ecuadorean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "57",
          children: "Egyptian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "58",
          children: "Emirian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "59",
          children: "Equatorial Guinean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "60",
          children: "Eritrean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "61",
          children: "Estonian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "62",
          children: "Ethiopian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "63",
          children: "Fijian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "64",
          children: "Filipino"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "65",
          children: "Finnish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "66",
          children: "French"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "67",
          children: "Gabonese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "68",
          children: "Gambian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "69",
          children: "Georgian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "70",
          children: "German"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "71",
          children: "Ghanaian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "72",
          children: "Greek"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "73",
          children: "Grenadian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "74",
          children: "Guatemalan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "75",
          children: "Guinea Bissauan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "76",
          children: "Guinean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "77",
          children: "Guyanese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "78",
          children: "Haitian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "79",
          children: "Herzegovinian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "80",
          children: "Honduran"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "81",
          children: "Hungarian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "82",
          children: "Icelander"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "83",
          children: "IKiribati"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "84",
          children: "Indian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "85",
          children: "Indonesian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "86",
          children: "Iranian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "87",
          children: "Iraqi"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "88",
          children: "Irish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "89",
          children: "Israeli"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "90",
          children: "Italian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "91",
          children: "Ivorian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "92",
          children: "Jamaican"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "93",
          children: "Japanese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "94",
          children: "Jordanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "95",
          children: "Kazakhstani"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "96",
          children: "Kenyan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "97",
          children: "Kittian And Nevisian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "98",
          children: "Kuwaiti"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "99",
          children: "Kyrgyz"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "100",
          children: "Laotian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "101",
          children: "Latvian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "102",
          children: "Lebanese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "103",
          children: "Liberian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "104",
          children: "Libyan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "105",
          children: "Liechtensteiner"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "106",
          children: "Lithuanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "107",
          children: "Luxembourger"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "108",
          children: "Macedonian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "109",
          children: "Malagasy"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "110",
          children: "Malawian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "111",
          children: "Malaysian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "112",
          children: "Maldivan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "113",
          children: "Malian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "114",
          children: "Maltese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "115",
          children: "Marshallese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "116",
          children: "Mauritanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "117",
          children: "Mauritian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "118",
          children: "Mexican"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "119",
          children: "Micronesian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "120",
          children: "Moldovan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "121",
          children: "Monacan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "122",
          children: "Mongolian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "123",
          children: "Moroccan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "124",
          children: "Mosotho"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "125",
          children: "Motswana"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "126",
          children: "Mozambican"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "127",
          children: "Namibian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "128",
          children: "Nauruan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "129",
          children: "Nepalese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "130",
          children: "Netherlander"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "131",
          children: "New Zealander"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "132",
          children: "Nicaraguan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "133",
          children: "Nigerian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "134",
          children: "Nigerien"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "135",
          children: "Ni Vanuatu"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "136",
          children: "North Korean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "137",
          children: "Northern Irish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "138",
          children: "Norwegian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "139",
          children: "Omani"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "140",
          children: "Pakistani"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "141",
          children: "Palauan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "142",
          children: "Panamanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "143",
          children: "Papua New Guinean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "144",
          children: "Paraguayan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "145",
          children: "Peruvian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "146",
          children: "Polish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "147",
          children: "Portuguese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "148",
          children: "Qatari"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "149",
          children: "Romanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "150",
          children: "Russian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "151",
          children: "Rwandan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "152",
          children: "Saint Lucian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "153",
          children: "Salvadoran"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "154",
          children: "Samoan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "155",
          children: "San Marinese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "156",
          children: "Sao Tomean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "157",
          children: "Saudi"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "158",
          children: "Scottish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "159",
          children: "Senegalese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "160",
          children: "Serbian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "161",
          children: "Seychellois"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "162",
          children: "Sierra Leonean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "163",
          children: "Singaporean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "164",
          children: "Slovakian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "165",
          children: "Slovenian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "166",
          children: "Solomon Islander"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "167",
          children: "Somali"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "168",
          children: "South African"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "169",
          children: "South Korean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "170",
          children: "Spanish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "171",
          children: "Sri Lankan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "172",
          children: "Sudanese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "173",
          children: "Surinamer"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "174",
          children: "Swazi"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "175",
          children: "Swedish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "176",
          children: "Swiss"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "177",
          children: "Syrian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "178",
          children: "Taiwanese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "179",
          children: "Tajik"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "180",
          children: "Tanzanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "181",
          children: "Thai"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "182",
          children: "Togolese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "183",
          children: "Tongan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "184",
          children: "Trinidadian Or Tobagonian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "185",
          children: "Tunisian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "186",
          children: "Turkish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "187",
          children: "Tuvaluan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "188",
          children: "Ugandan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "189",
          children: "Ukrainian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "190",
          children: "Uruguayan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "191",
          children: "Uzbekistanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "192",
          children: "Venezuelan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "193",
          children: "Vietnamese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "194",
          children: "Welsh"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "195",
          children: "Yemenite"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "196",
          children: "Zambian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "197",
          children: "Zimbabwean"
        })]
      }), fieldError() && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "invalid-feedback d-block",
        children: "This field is required"
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (NationalitySelector);

/***/ }),

/***/ "87sv":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"input-wrapper": "postcode-lookup_input-wrapper__1ican",
	"input-icon": "postcode-lookup_input-icon__3KJ0b",
	"input-loading": "postcode-lookup_input-loading__D5OhR",
	"input-list": "postcode-lookup_input-list__qFhzo",
	"is-active": "postcode-lookup_is-active__150Bh"
};


/***/ }),

/***/ "E5EP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5BkG");






const MaritalStatusSelector = ({
  collectionName,
  index,
  defaultValue
}) => {
  const {
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();

  const fieldError = () => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldError */ "a"])("maritalStatusId", collectionName, index, errors);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "form-row mb-3",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "col-24 col-md-12 col-lg-6",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
        children: ["Marital Status ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
          children: "(Required)"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
        className: `form-control ${fieldError() ? "is-invalid" : ""}`,
        name: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldName */ "c"])("maritalStatusId", collectionName, index),
        ref: register({
          required: true
        }),
        defaultValue: defaultValue,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "",
          children: "Please select..."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "1",
          children: "Single"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "2",
          children: "Married"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "3",
          children: "Divorced"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "4",
          children: "Separated"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "5",
          children: "Widow"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "6",
          children: "Widower"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "7",
          children: "Living with Partner"
        })]
      }), fieldError() && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "invalid-feedback d-block",
        children: "This field is required"
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (MaritalStatusSelector);

/***/ }),

/***/ "EOWn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_date_of_birth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LO0M");
/* harmony import */ var _common_full_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("usxA");
/* harmony import */ var _common_gender_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QAH0");
/* harmony import */ var _common_nationality_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7lqE");
/* harmony import */ var _common_marital_status_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("E5EP");
/* harmony import */ var _common_property_status_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("qmPZ");
/* harmony import */ var _common_property_type_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ICnl");
/* harmony import */ var _address_address_history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("JehN");













const DirectorDetails = ({
  collectionName,
  index,
  formData
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_common_full_name__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      formData: formData,
      collectionName: collectionName,
      index: index
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_common_date_of_birth__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      defaultValue: formData.dob,
      collectionName: collectionName,
      index: index,
      minYears: 0
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_common_gender_selector__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      defaultValue: formData.genderId,
      collectionName: collectionName,
      index: index
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_common_nationality_selector__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      defaultValue: formData.nationalityId,
      collectionName: collectionName,
      index: index
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_common_marital_status_selector__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      defaultValue: formData.maritalStatusId,
      collectionName: collectionName,
      index: index
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_common_property_status_selector__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      defaultValue: formData.propertyStatusId,
      collectionName: collectionName,
      index: index
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_common_property_type_selector__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      defaultValue: formData.propertyTypeId,
      collectionName: collectionName,
      index: index
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "mb-5"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_address_address_history__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      formData: formData,
      minHistoryMonths: 60,
      parentContainer: collectionName ? `${collectionName}[${index}]` : null
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (DirectorDetails);

/***/ }),

/***/ "FPSo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataLookupAPI; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DataLookupAPI {
  static async PostcodeLookup(postcode) {
    const result = await fetch(this.baseUrl + `lookup/postcodes/${postcode}`);
    return await result.json();
  }

  static async SortcodeLookup(sortcode) {
    const result = await fetch(this.baseUrl + `lookup/sortcodes/${sortcode}`);
    return await result.json();
  }

}

_defineProperty(DataLookupAPI, "baseUrl", "https://apigw.leasingoptions.co.uk/");

/***/ }),

/***/ "ICnl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5BkG");







const PropertyTypeSelector = ({
  collectionName,
  index,
  defaultValue
}) => {
  const {
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();

  const fieldError = () => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldError */ "a"])("propertyTypeId", collectionName, index, errors);
  };

  const fieldName = () => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldName */ "c"])("propertyTypeId", collectionName, index);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "col-24 col-md-12",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
          htmlFor: "propertyType",
          children: ["Property Type ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
            children: "(Required)"
          })]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-check form-check-inline",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
            className: `form-check-input ${fieldError() ? "is-invalid" : ""}`,
            type: "radio",
            name: fieldName(),
            id: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])("house", collectionName, index),
            value: "1",
            ref: register({
              required: true
            }),
            defaultChecked: defaultValue == 1
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            className: "form-check-label",
            htmlFor: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])("house", collectionName, index),
            children: "House"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-check form-check-inline",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
            className: `form-check-input ${fieldError() ? "is-invalid" : ""}`,
            type: "radio",
            name: fieldName(),
            id: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])("flat", collectionName, index),
            value: "2",
            ref: register({
              required: true
            }),
            defaultChecked: defaultValue == 2
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            className: "form-check-label",
            htmlFor: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])("flat", collectionName, index),
            children: "Flat"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-check form-check-inline",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
            className: `form-check-input ${fieldError() ? "is-invalid" : ""}`,
            type: "radio",
            name: fieldName(),
            id: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])("cottage", collectionName, index),
            value: "3",
            ref: register({
              required: true
            }),
            defaultChecked: defaultValue == 3
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            className: "form-check-label",
            htmlFor: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])("cottage", collectionName, index),
            children: "Cottage"
          })]
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "col-24 col-md-12",
        children: fieldError() && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "This field is required"
        })
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (PropertyTypeSelector);

/***/ }),

/***/ "JehN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: ./helpers/fieldArrayHelper.tsx
var fieldArrayHelper = __webpack_require__("5BkG");

// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__("ZTWx");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.min.css
var react_datepicker_min = __webpack_require__("XTIs");

// EXTERNAL MODULE: ./components/proposal/address/address-input.tsx + 2 modules
var address_input = __webpack_require__("Ona+");

// EXTERNAL MODULE: ./helpers/validation.tsx
var validation = __webpack_require__("gt28");

// CONCATENATED MODULE: ./components/proposal/address/address-history-item.tsx












const AddressHistoryItem = ({
  title,
  fromDateRequired,
  timeAtAddressRequired,
  addressData,
  collectionName,
  index,
  onTimePeriodUpdate
}, ...props) => {
  var _addressData$fromDate, _addressData$timeAtAd, _addressData$timeAtAd2, _addressData$totalMon, _getFieldError, _getFieldError2, _getFieldError3, _getFieldError4;

  const {
    control,
    setValue,
    errors,
    register
  } = Object(external_react_hook_form_["useFormContext"])();
  const {
    0: fromDate,
    1: setFromDate
  } = Object(external_react_["useState"])((_addressData$fromDate = addressData === null || addressData === void 0 ? void 0 : addressData.fromDate) !== null && _addressData$fromDate !== void 0 ? _addressData$fromDate : null);
  const {
    0: timeAtAddressYears,
    1: setTimeAtAddressYears
  } = Object(external_react_["useState"])((_addressData$timeAtAd = addressData === null || addressData === void 0 ? void 0 : addressData.timeAtAddressYears) !== null && _addressData$timeAtAd !== void 0 ? _addressData$timeAtAd : 0);
  const {
    0: timeAtAddressMonths,
    1: setTimeAtAddressMonths
  } = Object(external_react_["useState"])((_addressData$timeAtAd2 = addressData === null || addressData === void 0 ? void 0 : addressData.timeAtAddressMonths) !== null && _addressData$timeAtAd2 !== void 0 ? _addressData$timeAtAd2 : 0);
  const {
    0: totalMonthsAtAddress,
    1: setTotalMonthsAtAddress
  } = Object(external_react_["useState"])(parseInt((_addressData$totalMon = addressData === null || addressData === void 0 ? void 0 : addressData.totalMonthsAtAddress) !== null && _addressData$totalMon !== void 0 ? _addressData$totalMon : 0));
  const {
    0: fromDateYears,
    1: setFromDateYears
  } = Object(external_react_["useState"])(0);
  const {
    0: fromDateMonths,
    1: setFromDateMonths
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    calculateTotalHistory();
  }, []);
  const isInitialMount = Object(external_react_["useRef"])(true);
  Object(external_react_["useEffect"])(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      updateTimePeriod();
    }
  }, [fromDate, timeAtAddressYears, timeAtAddressMonths]);

  const handleTimePeriodChanges = (fieldName, value) => {
    switch (fieldName) {
      case "fromDate":
        setFromDate(value);
        const now = external_moment_default()().startOf('day');
        let result = 0;

        if (!now.isBefore(value)) {
          result = now.diff(value, "months");
          const years = Math.floor(result / 12);
          const months = result % 12;
          setTimeAtAddressYears(years);
          setTimeAtAddressMonths(months);
        }

        break;

      case "timeAtAddressYears":
        if (value) {
          setTimeAtAddressYears(parseInt(value !== null && value !== void 0 ? value : 0));
        } else {
          setTimeAtAddressYears(0);
        }

        break;

      case "timeAtAddressMonths":
        if (value) {
          setTimeAtAddressMonths(parseInt(value !== null && value !== void 0 ? value : 0));
        } else {
          setTimeAtAddressMonths(0);
        }

        break;
    }
  };

  const calculateTotalHistory = () => {
    let result = 0;

    if (fromDateRequired && fromDate) {
      const now = external_moment_default()().startOf('day');

      if (!now.isBefore(fromDate)) {
        result = now.diff(fromDate, "months");
        const years = Math.floor(result / 12);
        const months = result % 12;
        setFromDateYears(years);
        setFromDateMonths(months);
      } else {
        setFromDateYears(0);
        setFromDateMonths(0);
      }
    } else if (timeAtAddressRequired) {
      result = (timeAtAddressYears !== null && timeAtAddressYears !== void 0 ? timeAtAddressYears : 0) * 12 + (timeAtAddressMonths !== null && timeAtAddressMonths !== void 0 ? timeAtAddressMonths : 0);
    }

    return result;
  };

  const updateTimePeriod = () => {
    const totalMonthsAtAddress = calculateTotalHistory();
    setTotalMonthsAtAddress(totalMonthsAtAddress);

    if (onTimePeriodUpdate) {
      onTimePeriodUpdate(totalMonthsAtAddress);
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "hidden",
      ref: register(),
      defaultValue: totalMonthsAtAddress,
      name: Object(fieldArrayHelper["c" /* getFieldName */])("totalMonthsAtAddress", collectionName, index)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "hidden",
      ref: register(),
      defaultValue: timeAtAddressYears,
      name: Object(fieldArrayHelper["c" /* getFieldName */])("timeAtAddressYears", collectionName, index)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "hidden",
      ref: register(),
      defaultValue: timeAtAddressMonths,
      name: Object(fieldArrayHelper["c" /* getFieldName */])("timeAtAddressMonths", collectionName, index)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: "mb-5",
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(address_input["a" /* default */], {
      excludeTownAndCounty: false,
      formData: addressData,
      index: index,
      collectionName: collectionName
    }), fromDateRequired && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "form-row mb-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-12 col-lg-6",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
            children: ["From Date ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              children: "(Required)"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_hook_form_["Controller"], {
            as: external_react_datepicker_default.a,
            control: control,
            onChange: ([selected]) => {
              handleTimePeriodChanges("fromDate", selected);
              return selected;
            },
            valueName: "selected",
            name: Object(fieldArrayHelper["c" /* getFieldName */])("fromDate", collectionName, index),
            className: `form-control ${Object(fieldArrayHelper["a" /* getFieldError */])("fromDate", collectionName, index, errors) ? "is-invalid" : ""}`,
            dateFormat: "dd/MM/yyyy",
            placeholderText: "From Date",
            maxDate: new Date(),
            defaultValue: addressData.fromDate,
            rules: {
              required: true,
              validate: validation["b" /* IsDateInPresentOrPast */]
            },
            showMonthDropdown: true,
            useShortMonthInDropdown: true,
            showYearDropdown: true
          }), ((_getFieldError = Object(fieldArrayHelper["a" /* getFieldError */])("fromDate", collectionName, index, errors)) === null || _getFieldError === void 0 ? void 0 : _getFieldError.type) === "required" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: "This field is required"
          }), ((_getFieldError2 = Object(fieldArrayHelper["a" /* getFieldError */])("fromDate", collectionName, index, errors)) === null || _getFieldError2 === void 0 ? void 0 : _getFieldError2.type) === "validate" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: "Date can't be in the future"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: `${fromDateYears} Year(s) ${fromDateMonths} Month(s)`
      })]
    }), timeAtAddressRequired && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "form-row",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24 col-md-12",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
            htmlFor: "yearsMonths2",
            children: ["Years & months at address ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              children: "(Required)"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "form-row mb-3",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-6 col-lg-3",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "text",
            className: `form-control ${Object(fieldArrayHelper["a" /* getFieldError */])("timeAtAddressYears", collectionName, index, errors) ? "is-invalid" : ""}`,
            name: Object(fieldArrayHelper["c" /* getFieldName */])("timeAtAddressYears", collectionName, index),
            placeholder: "Years",
            ref: register({
              required: 'This field is required',
              pattern: {
                value: /^[0-9]*$/,
                message: 'Valid value is required'
              },
              min: {
                value: 0,
                message: 'Valid value is required'
              },
              max: {
                value: 100,
                message: 'Valid value is required'
              }
            }),
            defaultValue: addressData.timeAtAddressYears,
            onBlur: evt => {
              handleTimePeriodChanges("timeAtAddressYears", evt.target.value);
            },
            onKeyPress: evt => {
              if (evt.keyCode === 13) {
                handleTimePeriodChanges("timeAtAddressYears", evt.target.value);
                evt.stopPropagation();
              }
            }
          }), Object(fieldArrayHelper["a" /* getFieldError */])("timeAtAddressYears", collectionName, index, errors) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: (_getFieldError3 = Object(fieldArrayHelper["a" /* getFieldError */])("timeAtAddressYears", collectionName, index, errors)) === null || _getFieldError3 === void 0 ? void 0 : _getFieldError3.message
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-6 col-lg-3",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "text",
            className: `form-control ${Object(fieldArrayHelper["a" /* getFieldError */])("timeAtAddressMonths", collectionName, index, errors) ? "is-invalid" : ""}`,
            name: Object(fieldArrayHelper["c" /* getFieldName */])("timeAtAddressMonths", collectionName, index),
            placeholder: "Months",
            ref: register({
              required: 'This field is required',
              pattern: {
                value: /^[0-9]*$/,
                message: 'Valid value is required'
              },
              min: {
                value: 0,
                message: 'Valid value is required'
              },
              max: {
                value: 100,
                message: 'Valid value is required'
              }
            }),
            defaultValue: addressData.timeAtAddressMonths,
            onBlur: evt => {
              handleTimePeriodChanges("timeAtAddressMonths", evt.target.value);
            }
          }), Object(fieldArrayHelper["a" /* getFieldError */])("timeAtAddressMonths", collectionName, index, errors) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: (_getFieldError4 = Object(fieldArrayHelper["a" /* getFieldError */])("timeAtAddressMonths", collectionName, index, errors)) === null || _getFieldError4 === void 0 ? void 0 : _getFieldError4.message
          })]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "mb-5"
    })]
  });
};

/* harmony default export */ var address_history_item = (AddressHistoryItem);
// CONCATENATED MODULE: ./components/proposal/address/address-history.tsx




const AddressHistory = ({
  formData,
  minHistoryMonths,
  parentContainer
}) => {
  const collectionName = parentContainer ? `${parentContainer}.addresses` : "addresses";
  const {
    0: addresses,
    1: setAddresses
  } = Object(external_react_["useState"])([]);
  const {
    0: historyUpdated,
    1: setHistoryUpdated
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    if (!formData.addresses) {
      appendAddress({});
    } else {
      const addressHistory = formData.addresses.map((value, index) => {
        return {
          address1: value.address1,
          address2: value.address2,
          address3: value.address3,
          town: value.town,
          county: value.county,
          postcode: value.postcode,
          fromDate: value.fromDate,
          timeAtAddressMonths: value.timeAtAddressMonths ? parseInt(value.timeAtAddressMonths) : 0,
          timeAtAddressYears: value.timeAtAddressYears ? parseInt(value.timeAtAddressYears) : 0,
          totalMonthsAtAddress: value.totalMonthsAtAddress ? parseInt(value.totalMonthsAtAddress) : 0
        };
      });
      setAddresses(addressHistory);
    }
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (historyUpdated) {
      refreshHistoryItemsList();
    }
  }, [historyUpdated]);

  const appendAddress = props => {
    setAddresses([...addresses, props]);
  };

  const removeAddress = index => {
    setAddresses([...addresses.slice(0, index), ...addresses.slice(index + 1)]);
  };

  const updateAddress = (data, index) => {
    setAddresses([...addresses.slice(0, index), data, ...addresses.slice(index + 1)]);
  };

  const onTimePeriodUpdate = (totalMonths, index) => {
    updateAddress({
      totalMonthsAtAddress: totalMonths !== null && totalMonths !== void 0 ? totalMonths : 0
    }, index);
    setHistoryUpdated(Date.now());
  };

  const refreshHistoryItemsList = () => {
    if (addresses.length > 0) {
      var _items$totalMonthsAtA;

      let totalHistory = 0; //create new array instance here

      let items = addresses.slice(0);
      items.forEach((address, index) => {
        var _parseInt, _address$totalMonthsA;

        totalHistory += (_parseInt = parseInt((_address$totalMonthsA = address.totalMonthsAtAddress) !== null && _address$totalMonthsA !== void 0 ? _address$totalMonthsA : "0")) !== null && _parseInt !== void 0 ? _parseInt : 0;
      });

      if (totalHistory < minHistoryMonths && (items.length == 1 || ((_items$totalMonthsAtA = items[items.length - 1].totalMonthsAtAddress) !== null && _items$totalMonthsAtA !== void 0 ? _items$totalMonthsAtA : 0) > 0)) {
        appendAddress({
          totalMonthsAtAddress: 0
        });
      } else {
        let itemsCountToRemove = 0;

        while (items.length > 1 && totalHistory >= minHistoryMonths && totalHistory - ((_items$totalMonthsAtA2 = items[items.length - 1].totalMonthsAtAddress) !== null && _items$totalMonthsAtA2 !== void 0 ? _items$totalMonthsAtA2 : 0) >= minHistoryMonths) {
          var _items$totalMonthsAtA2;

          items = items.slice(0, -1);
          itemsCountToRemove += 1;
          totalHistory = 0;
          items.forEach((address, index) => {
            var _address$totalMonthsA2;

            totalHistory += (_address$totalMonthsA2 = address.totalMonthsAtAddress) !== null && _address$totalMonthsA2 !== void 0 ? _address$totalMonthsA2 : 0;
          });
        }

        if (itemsCountToRemove > 0) {
          setAddresses(addresses.slice(0, -itemsCountToRemove));
        }
      }
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_default.a.Fragment, {
    children: addresses.map((item, index) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_default.a.Fragment, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(address_history_item, {
          addressData: item,
          title: index === 0 ? "Current Address" : `Previous Address ${index}`,
          fromDateRequired: index === 0,
          timeAtAddressRequired: index !== 0,
          collectionName: collectionName,
          index: index,
          onTimePeriodUpdate: totalMonths => {
            onTimePeriodUpdate(totalMonths, index);
          }
        })
      }, index);
    })
  });
};

/* harmony default export */ var address_history = __webpack_exports__["a"] = (AddressHistory);

/***/ }),

/***/ "LO0M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZTWx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5BkG");
/* harmony import */ var helpers_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("gt28");
/* harmony import */ var _node_modules_react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XTIs");
/* harmony import */ var _node_modules_react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_6__);









const DateOfBirth = ({
  collectionName,
  index,
  defaultValue,
  minYears
}) => {
  var _getFieldError, _getFieldError2;

  const {
    register,
    errors,
    control
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "form-row mb-3",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "col-24 col-md-12 col-lg-6",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
        children: ["Date of Birth ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
          children: "(Required)"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], {
        as: react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a,
        control: control,
        valueName: "selected",
        name: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_4__[/* getFieldName */ "c"])("dob", collectionName, index),
        className: `form-control ${Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_4__[/* getFieldError */ "a"])("dob", collectionName, index, errors) ? "is-invalid" : ""}`,
        dateFormat: "dd/MM/yyyy",
        maxDate: new Date().setFullYear(new Date().getFullYear() - minYears),
        placeholderText: "Date of birth",
        defaultValue: defaultValue,
        rules: {
          required: true,
          validate: helpers_validation__WEBPACK_IMPORTED_MODULE_5__[/* IsOver18 */ "c"]
        },
        showMonthDropdown: true,
        useShortMonthInDropdown: true,
        showYearDropdown: 15
      }), ((_getFieldError = Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_4__[/* getFieldError */ "a"])("dob", collectionName, index, errors)) === null || _getFieldError === void 0 ? void 0 : _getFieldError.type) === "required" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "invalid-feedback d-block",
        children: "This field is required"
      }), ((_getFieldError2 = Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_4__[/* getFieldError */ "a"])("dob", collectionName, index, errors)) === null || _getFieldError2 === void 0 ? void 0 : _getFieldError2.type) === "validate" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "invalid-feedback d-block",
        children: "You need to be at least 18 years old"
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (DateOfBirth);

/***/ }),

/***/ "Ona+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/proposal/postcode-lookup/postcode-lookup.module.scss
var postcode_lookup_module = __webpack_require__("87sv");
var postcode_lookup_module_default = /*#__PURE__*/__webpack_require__.n(postcode_lookup_module);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: ./API/DataLookupApi.tsx
var DataLookupApi = __webpack_require__("FPSo");

// EXTERNAL MODULE: ./helpers/stringHelper.tsx
var stringHelper = __webpack_require__("Kj82");

// CONCATENATED MODULE: ./components/proposal/postcode-lookup/postcode-lookup.tsx









const PostcodeLookup = ({
  minQueryLength,
  excludeTownAndCounty,
  onAddressSelected
}) => {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: isActive,
    1: setIsactive
  } = Object(external_react_["useState"])(false);
  const {
    0: searchResults,
    1: setSearchResults
  } = Object(external_react_["useState"])([]);
  let setTimeoutId = null;

  const handleSearchInit = evt => {
    const searchQuery = evt.target.value.toString();
    setIsactive(false);
    setSearchResults([]); //Reset any pending (executing) requests

    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }

    if (searchQuery && searchQuery.length >= 4) {
      setIsLoading(true);
      setTimeoutId = setTimeout(function () {
        Promise.resolve(getSearchResults(searchQuery)).then(function (results) {
          setIsactive(true);
          setSearchResults(results);
          setIsLoading(false);
          setTimeoutId = null;
        });
      }, 50);
    }
  };

  const handleSearchBlur = () => {
    setTimeout(handleSearchClose, 250);
  };

  const handleSearchClose = () => {
    setIsactive(false);
    setIsLoading(false);
    setSearchResults([]);
  };

  const handleAddressSelect = (address, evt) => {
    evt.stopPropagation();

    if (onAddressSelected) {
      if (!excludeTownAndCounty) {
        onAddressSelected({
          address1: address.addressline1,
          address2: address.addressline2,
          address3: address.addressline3,
          town: address.posttown,
          county: address.county,
          postcode: address.postcode
        });
      } else {
        onAddressSelected({
          address1: address.addressline1,
          address2: address.addressline2,
          address3: Object(stringHelper["d" /* joinNotEmpty */])(", ", [address.addressline3, address.posttown, address.county]),
          postcode: address.postcode
        });
      }
    }
  };

  async function getSearchResults(searchQuery) {
    return await DataLookupApi["a" /* DataLookupAPI */].PostcodeLookup(searchQuery);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: postcode_lookup_module_default.a['input-wrapper'],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "text",
      className: "form-control",
      placeholder: "Postcode",
      onFocus: evt => {
        handleSearchInit(evt);
      },
      onKeyUp: evt => {
        handleSearchInit(evt);
      },
      onBlur: handleSearchBlur
    }), isLoading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_["faSpinner"],
      className: `fa-spin ${postcode_lookup_module_default.a['input-loading']}`
    }) : "", /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${postcode_lookup_module_default.a['input-list']} ${isActive ? postcode_lookup_module_default.a['is-active'] : ""}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
        children: searchResults.map((item, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            onClick: evt => {
              handleAddressSelect(item, evt);
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: item.summaryline
            })
          }, `result-${index}`);
        })
      })
    })]
  });
};

/* harmony default export */ var postcode_lookup = (PostcodeLookup);
// CONCATENATED MODULE: ./components/proposal/postcode-lookup/index.jsx

// EXTERNAL MODULE: ./helpers/fieldArrayHelper.tsx
var fieldArrayHelper = __webpack_require__("5BkG");

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// CONCATENATED MODULE: ./components/proposal/address/address-input.tsx








const AddressInput = ({
  excludeTownAndCounty,
  formData,
  index,
  collectionName
}) => {
  const {
    setValue,
    register,
    errors
  } = Object(external_react_hook_form_["useFormContext"])();

  const onAddressSelected = address => {
    setValue(fieldName("address1"), address.address1);
    setValue(fieldName("address2"), address.address2);
    setValue(fieldName("address3"), address.address3);
    setValue(fieldName("town"), address.town);
    setValue(fieldName("county"), address.county);
    setValue(fieldName("postcode"), address.postcode);
    setValue(fieldName("timestamp"), Date.now());
  };

  const fieldName = name => {
    return Object(fieldArrayHelper["c" /* getFieldName */])(name, collectionName, index);
  }; //Used to avoid warning for non unique IDs


  const fieldId = name => {
    return Object(fieldArrayHelper["b" /* getFieldId */])(name, collectionName, index);
  };

  const fieldError = (name, errors) => {
    return Object(fieldArrayHelper["a" /* getFieldError */])(name, collectionName, index, errors);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "hidden",
      name: fieldName("timestamp"),
      defaultValue: formData.timestamp,
      ref: register()
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-24",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          htmlFor: "postcodeLookup",
          children: "Start typing an address or postcode"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(postcode_lookup, {
          minQueryLength: 4,
          excludeTownAndCounty: excludeTownAndCounty,
          onAddressSelected: onAddressSelected
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
          htmlFor: fieldId("address1"),
          children: ["Address ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            children: "(Required)"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          className: `form-control ${fieldError("address1", errors) ? "is-invalid" : ""}`,
          id: fieldId("address1"),
          name: fieldName("address1"),
          placeholder: "Number and street",
          maxLength: 100,
          ref: register({
            required: true
          }),
          defaultValue: formData.address1
        }), fieldError("address1", errors) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "This field is required"
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          htmlFor: fieldId("address2"),
          children: "Address Line 2"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          className: "form-control",
          id: fieldId("address2"),
          name: fieldName("address2"),
          placeholder: "Address 2",
          maxLength: 100,
          ref: register(),
          defaultValue: formData.address2
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          htmlFor: fieldId("address3"),
          children: "Address Line 3"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          className: "form-control",
          id: fieldId("address3"),
          name: fieldName("address3"),
          placeholder: "Address 3",
          maxLength: 100,
          ref: register(),
          defaultValue: formData.address3
        })]
      })
    }), !excludeTownAndCounty && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "form-row mb-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-12",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
            htmlFor: fieldId("town"),
            children: ["Town / City ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              children: "(Required)"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "text",
            className: `form-control ${fieldError("town", errors) ? "is-invalid" : ""}`,
            id: fieldId("town"),
            name: fieldName("town"),
            placeholder: "Town",
            maxLength: 100,
            ref: register({
              required: true
            }),
            defaultValue: formData.town
          }), fieldError("town", errors) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: "This field is required"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "form-row mb-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-12",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
            htmlFor: fieldId("county"),
            children: ["County ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              children: "(Required)"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "text",
            className: `form-control ${fieldError("county", errors) ? "is-invalid" : ""}`,
            id: fieldId("county"),
            name: fieldName("county"),
            placeholder: "County",
            maxLength: 100,
            ref: register({
              required: true
            }),
            defaultValue: formData.county
          }), fieldError("county", errors) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: "This field is required"
          })]
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
          htmlFor: fieldId("postcode"),
          children: ["Postcode ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            children: "(Required)"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          className: `form-control ${fieldError("postcode", errors) ? "is-invalid" : ""}`,
          id: fieldId("postcode"),
          name: fieldName("postcode"),
          placeholder: "Postcode",
          maxLength: 10,
          ref: register({
            required: true
          }),
          defaultValue: formData.postcode,
          onChange: () => {
            setValue(fieldName("timestamp"), Date.now());
          }
        }), fieldError("postcode", errors) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "This field is required"
        })]
      })
    })]
  });
};

/* harmony default export */ var address_input = __webpack_exports__["a"] = (AddressInput);

/***/ }),

/***/ "QAH0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5BkG");







const GenderSelector = ({
  collectionName,
  index,
  defaultValue
}) => {
  const {
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();
  const fieldName = Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldName */ "c"])("genderId", collectionName, index);
  const fieldError = Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldError */ "a"])("genderId", collectionName, index, errors);

  const fieldId = name => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])(name, collectionName, index);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "col-24 col-md-12",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
          htmlFor: "genderId",
          children: ["Gender ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
            children: "(Required)"
          })]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-check form-check-inline",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
            className: `form-check-input ${fieldError ? "is-invalid" : ""}`,
            type: "radio",
            name: fieldName,
            id: fieldId("male"),
            value: 1,
            ref: register({
              required: true
            }),
            defaultChecked: defaultValue == 1
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            className: "form-check-label",
            htmlFor: fieldId("male"),
            children: "Male"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-check form-check-inline",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
            className: `form-check-input ${fieldError ? "is-invalid" : ""}`,
            type: "radio",
            name: fieldName,
            id: fieldId("female"),
            value: 2,
            ref: register({
              required: true
            }),
            defaultChecked: defaultValue == 2
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            className: "form-check-label",
            htmlFor: fieldId("female"),
            children: "Female"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-check form-check-inline",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
            className: `form-check-input ${fieldError ? "is-invalid" : ""}`,
            type: "radio",
            name: fieldName,
            id: fieldId("other"),
            value: 3,
            ref: register({
              required: true
            }),
            defaultChecked: defaultValue == 3
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            className: "form-check-label",
            htmlFor: fieldId("other"),
            children: "Other"
          })]
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "col-24 col-md-12",
        children: fieldError && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "This field is required"
        })
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (GenderSelector);

/***/ }),

/***/ "XTIs":
/***/ (function(module, exports) {



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

/***/ "qmPZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5BkG");






const PropertyStatusSelector = ({
  collectionName,
  index,
  defaultValue
}) => {
  const {
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();

  const fieldError = () => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldError */ "a"])("propertyStatusId", collectionName, index, errors);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "form-row mb-3",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "col-24 col-md-12 col-lg-6",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
        children: ["Property Status ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
          children: "(Required)"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
        className: `form-control ${fieldError() ? "is-invalid" : ""}`,
        name: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldName */ "c"])("propertyStatusId", collectionName, index),
        ref: register({
          required: true
        }),
        defaultValue: defaultValue,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "",
          children: "Please select..."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "1",
          children: "Mortgaged"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "2",
          children: "Living with Parents"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "3",
          children: "Owned Outright"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "4",
          children: "Rented"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "5",
          children: "Council Tenant"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "6",
          children: "Private Tenant"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "7",
          children: "Living with Partner"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "8",
          children: "Other"
        })]
      }), fieldError() && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "invalid-feedback d-block",
        children: "This field is required"
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (PropertyStatusSelector);

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