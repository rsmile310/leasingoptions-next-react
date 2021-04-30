exports.ids = [129];
exports.modules = {

/***/ "+jSg":
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
/* harmony import */ var _address_address_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JehN");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function mapStateToProps(state) {
  return {
    formData: state.formData,
    stepNumber: state.stepIndicator
  };
}

const PersonalStepFour = props => {
  const formData = props.formData[props.stepNumber];
  const methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])();
  const {
    handleSubmit
  } = methods;

  const onSubmit = (data, evt) => {
    if (props.handleFormSave(props.stepNumber, data)) {
      props.handleFormStep(props.stepNumber + 1);
    }

    Object(helpers_analytics__WEBPACK_IMPORTED_MODULE_1__[/* logLabelEvent */ "d"])('prop_form_tracking_personal', 'Click', 'address-history-completed');
  };

  const onBack = () => props.handleFormStep(props.stepNumber - 1);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "w-100 bg-white p-3 p-md-5",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["FormContext"], _objectSpread(_objectSpread({}, methods), {}, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
        onKeyDown: evt => {
          if (evt.key == 'Enter' || evt.keyCode === 13) {
            evt.preventDefault();
            evt.stopPropagation();
            return false;
          }
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_address_address_history__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
          formData: formData,
          minHistoryMonths: 60,
          parentContainer: null
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-row d-flex justify-content-end",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            type: "button",
            className: "btn btn-outline-secondary mr-3",
            onClick: onBack,
            children: "Back"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            type: "button",
            className: "btn btn-primary btn-lg",
            onClick: handleSubmit(onSubmit),
            children: "Next"
          })]
        })]
      })
    }))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(PersonalStepFour));

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

/***/ })

};;