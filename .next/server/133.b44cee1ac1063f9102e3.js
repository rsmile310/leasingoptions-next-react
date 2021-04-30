exports.ids = [133];
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

/***/ "sspj":
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

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./helpers/fieldArrayHelper.tsx
var fieldArrayHelper = __webpack_require__("5BkG");

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.min.css
var react_datepicker_min = __webpack_require__("XTIs");

// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__("ZTWx");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);

// EXTERNAL MODULE: ./components/proposal/address/address-input.tsx + 2 modules
var address_input = __webpack_require__("Ona+");

// EXTERNAL MODULE: ./helpers/validation.tsx
var validation = __webpack_require__("gt28");

// CONCATENATED MODULE: ./components/proposal/employment/employment-input.tsx












const EmploymentInput = ({
  formData,
  index,
  collectionName,
  onTimePeriodUpdate,
  notificationsSubscribe,
  initialPreviousDate,
  showYourPosition,
  showLandLine
}) => {
  var _fieldError, _fieldError2;

  const {
    control,
    setValue,
    register,
    errors
  } = Object(external_react_hook_form_["useFormContext"])();
  const {
    0: isEmployed,
    1: setIsEmployed
  } = Object(external_react_["useState"])(false);
  const {
    0: startDate,
    1: setStartDate
  } = Object(external_react_["useState"])(formData.startDate || null);
  const {
    0: previousDate,
    1: setPreviousDate
  } = Object(external_react_["useState"])(initialPreviousDate);
  Object(external_react_["useEffect"])(() => {
    if (formData.typeId) {
      handleEmploymentTypeChange(formData.typeId);
    }

    if (notificationsSubscribe) {
      notificationsSubscribe(handleNotifications, index);
    }
  }, []);
  Object(external_react_["useEffect"])(() => {
    calculateTotalMonths(previousDate, startDate);
  }, [startDate, previousDate]);

  const fieldName = name => {
    return Object(fieldArrayHelper["c" /* getFieldName */])(name, collectionName, index);
  }; //Used to avoid warning for non unique IDs


  const fieldId = name => {
    return Object(fieldArrayHelper["b" /* getFieldId */])(name, collectionName, index);
  };

  const fieldError = name => {
    return Object(fieldArrayHelper["a" /* getFieldError */])(name, collectionName, index, errors);
  }; //fromDate - is a previous or current date
  //toDate - is selected date (startDate)


  const calculateTotalMonths = (fromDate, toDate) => {
    if (toDate) {
      const dateStart = external_moment_default()(fromDate || Date.now()).startOf('day');
      const dateEnd = external_moment_default()(toDate).endOf('day');

      if (!dateStart.isBefore(dateEnd)) {
        const monthsDelta = dateStart.diff(dateEnd, "months");
        const years = Math.floor(monthsDelta / 12);
        const months = monthsDelta % 12;
        const totalMonthsEmployed = (years !== null && years !== void 0 ? years : 0) * 12 + (months !== null && months !== void 0 ? months : 0);
        setValue(fieldName("timeEmployedYears"), years);
        setValue(fieldName("timeEmployedMonths"), months);
      } else {
        setValue(fieldName("timeEmployedYears"), 0);
        setValue(fieldName("timeEmployedMonths"), 0);
      }
    }
  };

  const handleStartDateChanges = date => {
    setStartDate(date);

    if (onTimePeriodUpdate && date) {
      onTimePeriodUpdate(date);
    }
  };

  const handleEmploymentTypeChange = typeId => {
    switch (typeId) {
      case "":
      case "4":
      case "6":
      case "7":
        setIsEmployed(false);
        break;

      default:
        setIsEmployed(true);
        break;
    }
  };

  const handleNotifications = (type, data) => {
    if (type === "previous-date" && data) {
      setPreviousDate(data);
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-24 col-md-12 col-lg-6",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
          htmlFor: fieldId("typeId"),
          children: ["Type of Employment ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            children: "(Required)"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
          className: `form-control ${fieldError("typeId") ? "is-invalid" : ""}`,
          id: fieldId("typeId"),
          name: fieldName("typeId"),
          ref: register({
            required: true
          }),
          defaultValue: formData.typeId,
          onChange: evt => {
            handleEmploymentTypeChange(evt.target.value);
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
            value: "",
            children: "Please select..."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
            value: "1",
            children: "Employed Full Time"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
            value: "2",
            children: "Employed Part Time"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
            value: "3",
            children: "Employed Temp"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
            value: "4",
            children: "Retired"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
            value: "5",
            children: "Home Maker"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
            value: "6",
            children: "Student"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
            value: "7",
            children: "Unemployed"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
            value: "8",
            children: "Self-employed"
          })]
        }), fieldError("typeId") && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "This field is required"
        })]
      })
    }), isEmployed && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "form-row mb-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-12",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
            htmlFor: fieldId("employerName"),
            children: ["Employer Name ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              children: "(Required)"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "text",
            className: `form-control ${fieldError("employerName") ? "is-invalid" : ""}`,
            id: fieldId("employerName"),
            name: fieldName("employerName"),
            "aria-describedby": fieldId("employerName"),
            placeholder: "Employer Name",
            maxLength: 100,
            ref: register({
              required: true
            }),
            defaultValue: formData.employerName
          }), fieldError("employerName") && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: "This field is required"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "form-row mb-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-12",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
            htmlFor: fieldId("natureOfBusiness"),
            children: ["Nature of Business ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              children: "(Required)"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "text",
            className: `form-control ${fieldError("natureOfBusiness") ? "is-invalid" : ""}`,
            id: fieldId("natureOfBusiness"),
            name: fieldName("natureOfBusiness"),
            "aria-describedby": fieldId("natureOfBusiness"),
            placeholder: "Nature of Business",
            maxLength: 100,
            ref: register({
              required: true
            }),
            defaultValue: formData.natureOfBusiness
          }), fieldError("natureOfBusiness") && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: "This field is required"
          })]
        })
      }), showYourPosition && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "form-row mb-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-12",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
            htmlFor: fieldId("position"),
            children: ["Your Position ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              children: "(Required)"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "text",
            className: `form-control ${fieldError("position") ? "is-invalid" : ""}`,
            id: fieldId("position"),
            name: fieldName("position"),
            "aria-describedby": fieldId("position"),
            placeholder: "Job Title",
            maxLength: 100,
            ref: register({
              required: true
            }),
            defaultValue: formData.position
          }), fieldError("position") && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: "This field is required"
          })]
        })
      }), showLandLine && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "form-row mb-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-12",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
            htmlFor: fieldId("telephone"),
            children: ["Landline Telephone ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              children: "(Required)"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "tel",
            className: `form-control ${fieldError("telephone") ? "is-invalid" : ""}`,
            id: fieldId("telephone"),
            name: fieldName("telephone"),
            "aria-describedby": fieldId("telephone"),
            placeholder: "Your Employers No.",
            maxLength: 20,
            ref: register({
              required: true,
              pattern: /^[0-9]*$/
            }),
            defaultValue: formData.telephone
          }), fieldError("telephone") && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: "This field is required"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        className: "mt-5",
        children: "Address"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(address_input["a" /* default */], {
        excludeTownAndCounty: true,
        collectionName: collectionName,
        index: index,
        formData: formData
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {
        className: "mb-3"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "form-row mb-3",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-12",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "form-row",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-24",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                htmlFor: "startDate",
                children: ["Start Date ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                  children: "(Required)"
                })]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "form-row mb-3",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-24",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_hook_form_["Controller"], {
                as: external_react_datepicker_default.a,
                control: control,
                onChange: ([selected]) => {
                  handleStartDateChanges(selected);
                  return selected;
                },
                valueName: "selected",
                name: fieldName("startDate"),
                className: `form-control ${fieldError("startDate") ? "is-invalid" : ""}`,
                dateFormat: "dd/MM/yyyy",
                placeholderText: "From Date",
                defaultValue: formData.startDate,
                rules: {
                  required: true,
                  validate: validation["b" /* IsDateInPresentOrPast */]
                },
                showMonthDropdown: true,
                useShortMonthInDropdown: true,
                showYearDropdown: true
              }), ((_fieldError = fieldError("startDate")) === null || _fieldError === void 0 ? void 0 : _fieldError.type) === "required" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: "This field is required"
              }), ((_fieldError2 = fieldError("startDate")) === null || _fieldError2 === void 0 ? void 0 : _fieldError2.type) === "validate" && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: "Date can't be in the future"
              })]
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-12",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "form-row",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-24",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                children: ["Years & months Employed ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                  children: "(Required)"
                })]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "form-row mb-3",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-24 col-md-12",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                disabled: true,
                className: `form-control ${fieldError("timeEmployedYears") ? "is-invalid" : ""}`,
                name: fieldName("timeEmployedYears"),
                placeholder: "Years",
                maxLength: 2,
                ref: register({
                  required: true
                }),
                defaultValue: formData.timeEmployedYears
              }), fieldError("timeEmployedYears") && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: "This field is required"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-24 col-md-12",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                disabled: true,
                className: `form-control ${fieldError("timeEmployedMonths") ? "is-invalid" : ""}`,
                name: fieldName("timeEmployedMonths"),
                placeholder: "Months",
                maxLength: 2,
                ref: register({
                  required: true
                }),
                defaultValue: formData.timeEmployedMonths
              }), fieldError("timeEmployedMonths") && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: "This field is required"
              })]
            })]
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var employment_input = (EmploymentInput);
// CONCATENATED MODULE: ./components/proposal/employment/employment-history.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const EmploymentHistory = ({
  formData,
  minHistoryMonths,
  showSingleEmployentHistoryOnly,
  showYourPosition,
  showLandLine
}) => {
  var _employments$;

  const collectionName = "employments"; //used only for initial setup

  const {
    0: employments,
    1: setEmployments
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    if (!formData[collectionName]) {
      setEmployments([{}]);
    } else {
      setEmployments(formData[collectionName].map((value, index) => {
        return _objectSpread(_objectSpread({}, value), {}, {
          previousDate: index > 0 ? formData[collectionName][index - 1].startDate : null
        });
      }));
    }
  }, []);

  const subscribeComponent = (callback, index) => {
    updateEmployment(_objectSpread({
      notificationsHandler: callback
    }, employments[index]), index);
  };

  const updateEmployment = (data, index) => {
    setEmployments([...employments.slice(0, index), data, ...employments.slice(index + 1)]);
  };

  const onTimePeriodUpdate = (startDate, index) => {
    //create new array instance here
    let items = employments.slice(0);

    if (items.length > 0) {
      var _items$totalMonths;

      //update current item
      items[index] = _objectSpread(_objectSpread({}, items[index]), {}, {
        startDate: startDate
      }); //update next item

      if (index + 1 < items.length) {
        items[index + 1] = _objectSpread(_objectSpread({}, items[index + 1]), {}, {
          previousDate: startDate
        }); //force next item to update years & months employed

        if (items[index + 1].notificationsHandler) {
          items[index + 1].notificationsHandler("previous-date", startDate);
        }
      }

      let totalHistory = 0;
      items.forEach((item, index) => {
        const dateStart = external_moment_default()(item.previousDate || Date.now()).startOf('day');
        const dateEnd = external_moment_default()(item.startDate).endOf('day');
        item.totalMonths = 0;

        if (!dateStart.isBefore(dateEnd)) {
          const monthsDelta = dateStart.diff(dateEnd, "months");
          const years = Math.floor(monthsDelta / 12);
          const months = monthsDelta % 12;
          item.totalMonths = (years !== null && years !== void 0 ? years : 0) * 12 + (months !== null && months !== void 0 ? months : 0);
        }

        totalHistory += item.totalMonths;
      });

      if (totalHistory < minHistoryMonths && (items.length == 1 || ((_items$totalMonths = items[items.length - 1].totalMonths) !== null && _items$totalMonths !== void 0 ? _items$totalMonths : 0) > 0)) {
        items.push({
          previousDate: items[items.length - 1].startDate,
          totalMonths: 0
        });
      } else {
        while (items.length > 1 && totalHistory >= minHistoryMonths && totalHistory - ((_items$totalMonths2 = items[items.length - 1].totalMonths) !== null && _items$totalMonths2 !== void 0 ? _items$totalMonths2 : 0) >= minHistoryMonths) {
          var _items$totalMonths2;

          items = items.slice(0, -1);
          totalHistory = 0;
          items.forEach((item, index) => {
            var _item$totalMonths;

            totalHistory += (_item$totalMonths = item.totalMonths) !== null && _item$totalMonths !== void 0 ? _item$totalMonths : 0;
          });
        }
      }
    }

    setEmployments(items);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
    children: [showSingleEmployentHistoryOnly && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: "Current Employment"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(employment_input, {
        showLandLine: showLandLine,
        showYourPosition: showYourPosition,
        formData: employments,
        initialPreviousDate: (_employments$ = employments[0]) === null || _employments$ === void 0 ? void 0 : _employments$.previousDate,
        index: 0,
        collectionName: collectionName,
        onTimePeriodUpdate: startDate => {
          onTimePeriodUpdate(startDate, 0);
        },
        notificationsSubscribe: subscribeComponent
      })]
    }, 0), !showSingleEmployentHistoryOnly && employments.map((item, index) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: index === 0 ? "Current Employment" : `Previous Employment: ${index}`
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(employment_input, {
          showLandLine: showLandLine,
          showYourPosition: showYourPosition,
          formData: item,
          initialPreviousDate: item.previousDate,
          index: index,
          collectionName: collectionName,
          onTimePeriodUpdate: startDate => {
            onTimePeriodUpdate(startDate, index);
          },
          notificationsSubscribe: subscribeComponent
        })]
      }, index);
    })]
  });
};

/* harmony default export */ var employment_history = (EmploymentHistory);
// EXTERNAL MODULE: ./helpers/analytics.tsx
var analytics = __webpack_require__("btDt");

// CONCATENATED MODULE: ./components/proposal/personal/personal-step-07.tsx



function personal_step_07_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function personal_step_07_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { personal_step_07_ownKeys(Object(source), true).forEach(function (key) { personal_step_07_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { personal_step_07_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function personal_step_07_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const mapStateToProps = state => {
  return {
    formData: state.formData,
    stepNumber: state.stepIndicator
  };
};

const PersonalStepSeven = props => {
  const handleGATracking = () => Object(analytics["d" /* logLabelEvent */])('prop_form_tracking_personal', 'Click', 'employment-details-completed');

  const formData = props.formData[props.stepNumber];
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

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-100 bg-white p-3 p-md-5",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: "mb-5",
      children: "Your Employment Details"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_hook_form_["FormContext"], personal_step_07_objectSpread(personal_step_07_objectSpread({}, methods), {}, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(employment_history, {
          showLandLine: props.showLandLine,
          showYourPosition: props.showYourPosition,
          showSingleEmployentHistoryOnly: props.showSingleEmployentHistoryOnly,
          minHistoryMonths: 36,
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
            children: "Next"
          })]
        })]
      })
    }))]
  });
};

/* harmony default export */ var personal_step_07 = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(PersonalStepSeven));

/***/ })

};;