exports.ids = [136];
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

/***/ "qaOE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("btDt");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _address_address_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ona+");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const mapStateToProps = state => {
  return {
    formData: state.formData,
    stepNumber: state.stepIndicator
  };
};

const PersonalStepNine = props => {
  const handleGATracking = () => Object(helpers_analytics__WEBPACK_IMPORTED_MODULE_1__[/* logLabelEvent */ "d"])('prop_form_tracking_personal', 'Click', 'bank-address-completed');

  const prepareFormData = () => {
    let data = props.formData[props.stepNumber];
    const prevStepData = props.formData[props.stepNumber - 1];
    let timestampPrev = prevStepData ? parseInt(prevStepData.timestamp || 0) : 0;
    let timestampCurr = data ? parseInt(data.timestamp || 0) : 0;

    if (timestampPrev > timestampCurr) {
      data = _objectSpread(_objectSpread({}, data), {}, {
        postcode: prevStepData.postcode,
        address1: prevStepData.address1,
        address2: prevStepData.address2,
        address3: prevStepData.address3,
        town: prevStepData.town,
        county: prevStepData.county
      });
    }

    return data;
  };

  const formData = prepareFormData();
  const methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])();
  const {
    register,
    setValue,
    handleSubmit,
    errors
  } = methods;

  const onSubmit = data => {
    if (props.handleFormSave(props.stepNumber, data)) {
      props.handleFormStep(props.stepNumber + 1);
    }
  };

  const onBack = () => {
    props.handleFormStep(props.stepNumber - 1);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "w-100 bg-white p-3 p-md-5",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
      children: "Your Bank's Address"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["FormContext"], _objectSpread(_objectSpread({}, methods), {}, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_address_address_input__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
          excludeTownAndCounty: false,
          formData: formData,
          index: 0,
          collectionName: null
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "form-row mb-3",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "col-24 col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
              htmlFor: "firstName",
              children: ["Years with Bank  ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                children: "(Required)"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              type: "text",
              className: `form-control ${errors.bankYears ? "is-invalid" : ""}`,
              id: "bankYears",
              name: "bankYears",
              "aria-describedby": "bankYears",
              placeholder: "Years",
              maxLength: 100,
              ref: register({
                required: true,
                pattern: /^[0-9]*$/
              }),
              defaultValue: formData.bankYears
            }), errors.bankYears && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: "invalid-feedback d-block",
              children: "This field is required"
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(PersonalStepNine));

/***/ })

};;