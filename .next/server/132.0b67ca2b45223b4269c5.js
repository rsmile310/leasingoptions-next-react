exports.ids = [132];
exports.modules = {

/***/ "3Gxi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("gt28");








const BusinessContactPhones = ({
  formData
}) => {
  const {
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
          htmlFor: "landline",
          children: ["Business Landline ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
            children: "(Required)"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          type: "tel",
          className: `form-control ${errors.landline ? "is-invalid" : ""}`,
          id: "landline",
          name: "landline",
          "aria-describedby": "landline",
          placeholder: "Business Telephone",
          ref: register({
            required: true,
            validate: value => Object(helpers_validation__WEBPACK_IMPORTED_MODULE_3__[/* PhoneNumberIsValid */ "d"])(value) === true || 'Please specify a valid UK landline number.'
          }),
          defaultValue: formData.landline
        }), errors.landline && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "Please specify a valid UK landline number."
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
          htmlFor: "fax",
          children: "Business Fax Number"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          type: "tel",
          className: `form-control ${errors.fax ? "is-invalid" : ""}`,
          id: "fax",
          name: "fax",
          "aria-describedby": "fax",
          placeholder: "Your Fax Number",
          ref: register({
            validate: value => Object(helpers_validation__WEBPACK_IMPORTED_MODULE_3__[/* PhoneNumberIsValid */ "d"])(value) === true || 'Please specify a valid UK landline number.'
          }),
          defaultValue: formData.landline
        }), errors.landline && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "Please specify a valid UK landline number."
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
          htmlFor: "mobileNumber",
          children: "Mobile Number"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          type: "tel",
          className: `form-control ${errors.mobileNumber ? "is-invalid" : ""}`,
          id: "mobileNumber",
          name: "mobileNumber",
          "aria-describedby": "mobileNumber",
          placeholder: "Your Mobile Number",
          ref: register({
            validate: value => Object(helpers_validation__WEBPACK_IMPORTED_MODULE_3__[/* UKMobileNumberIsValid */ "e"])(value, true) === true || 'Please specify a valid UK mobile number.'
          }),
          defaultValue: formData.mobileNumber
        }), errors.mobileNumber && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "Please specify a valid UK mobile number."
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (BusinessContactPhones);

/***/ }),

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

/***/ "oTaC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("btDt");
/* harmony import */ var helpers_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gt28");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _address_address_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Ona+");
/* harmony import */ var _business_business_contact_phones__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("3Gxi");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function mapStateToProps(state) {
  return {
    formData: state.formData,
    stepNumber: state.stepIndicator
  };
}

const SoleStepThree = props => {
  const formData = props.formData[props.stepNumber];

  const handleGATracking = () => Object(helpers_analytics__WEBPACK_IMPORTED_MODULE_1__[/* logLabelEvent */ "d"])('prop_form_tracking_soletrader', 'Click', 'contact-and-address-completed');

  const methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])();
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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "w-100 bg-white p-3 p-md-5",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["FormContext"], _objectSpread(_objectSpread({}, methods), {}, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
          children: "Your Email"
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
                validate: value => Object(helpers_validation__WEBPACK_IMPORTED_MODULE_2__[/* EmailAddressIsValid */ "a"])(value) === true || 'Invalid email address'
              }),
              defaultValue: emailDefaultValue
            }), errors.emailAddress && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: "invalid-feedback d-block",
              children: "This field is required"
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
          children: "Contact Details"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_business_business_contact_phones__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
          formData: formData
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
          className: "mt-5",
          children: "Trading Address"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_address_address_input__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
          excludeTownAndCounty: false,
          formData: formData,
          index: 0,
          collectionName: null
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "form-row mb-3",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "col-24 col-md-7",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
              htmlFor: "notes",
              children: "Notes"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("textarea", {
              className: "form-control",
              name: "notes",
              id: "notes",
              "aria-label": "Notes",
              "aria-describedby": "notes",
              placeholder: "If applicable please tell additional information that may be relevant to your application",
              ref: register(),
              defaultValue: formData.notes
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
    }))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(SoleStepThree));

/***/ })

};;