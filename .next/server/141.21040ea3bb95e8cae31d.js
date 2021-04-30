exports.ids = [141];
exports.modules = {

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

/***/ "Onab":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"input-wrapper": "sortcode-lookup_input-wrapper__1W76n",
	"input-icon": "sortcode-lookup_input-icon__3rU_1",
	"input-loading": "sortcode-lookup_input-loading__1IALO",
	"input-list": "sortcode-lookup_input-list__3_Zfh",
	"is-active": "sortcode-lookup_is-active__1m27d"
};


/***/ }),

/***/ "hoA6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: ./components/proposal/sortcode-lookup/sortcode-lookup.module.scss
var sortcode_lookup_module = __webpack_require__("Onab");
var sortcode_lookup_module_default = /*#__PURE__*/__webpack_require__.n(sortcode_lookup_module);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: ./API/DataLookupApi.tsx
var DataLookupApi = __webpack_require__("FPSo");

// CONCATENATED MODULE: ./components/proposal/sortcode-lookup/sortcode-lookup.tsx









const SortcodeLookup = ({
  selectedSortCode,
  onBankSelected,
  register,
  errors
}) => {
  const minQueryLength = 6;
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: isActive,
    1: setIsActive
  } = Object(external_react_["useState"])(false);
  const {
    0: searchResults,
    1: setSearchResults
  } = Object(external_react_["useState"])([]);

  const handleSearchInit = evt => {
    let searchQuery = evt.target.value.toString();

    if (searchQuery.length === minQueryLength) {
      setIsLoading(true);
      Promise.resolve(getSearchResults(searchQuery)).then(function (results) {
        setIsActive(true);
        setSearchResults([results]);
        setIsLoading(false);
      });
    } else {
      setIsActive(false);
      setSearchResults([]);
    }
  };

  const handleSearchBlur = () => {
    setTimeout(handleSearchClose, 250);
  };

  const handleSearchClose = () => {
    setIsActive(false);
    setIsLoading(false);
    setSearchResults([]);
  };

  const handleBankSelect = item => {
    if (onBankSelected) {
      onBankSelected({
        name: item.longbank1 + ' - ' + item.bankname,
        address1: item.printaddr1,
        address2: item.printaddr2,
        address3: item.printaddr3 + (item.printaddr4 ? ", " + item.printaddr4 : ""),
        town: item.printtown,
        county: item.printcounty,
        postcode: item.printpcode1 + ' ' + item.printpcode2
      });
    }
  };

  async function getSearchResults(searchQuery) {
    return await DataLookupApi["a" /* DataLookupAPI */].SortcodeLookup(searchQuery);
  }

  Object(external_react_["useEffect"])(() => {}, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: sortcode_lookup_module_default.a['input-wrapper'],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        type: "text",
        className: `form-control ${errors.sortCode ? "is-invalid" : ""}`,
        id: "sortCode",
        name: "sortCode",
        "aria-describedby": "sortCode",
        placeholder: "Sort Code (Lookup)",
        maxLength: 6,
        ref: register({
          required: true,
          minLength: 6,
          maxLength: 6,
          pattern: /^[0-9]*$/
        }),
        defaultValue: selectedSortCode,
        onFocus: evt => {
          handleSearchInit(evt);
        },
        onKeyUp: evt => {
          handleSearchInit(evt);
        },
        onBlur: handleSearchBlur
      }), isLoading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        width: "16",
        height: "16",
        icon: free_solid_svg_icons_["faSpinner"],
        className: `fa-spin ${sortcode_lookup_module_default.a['input-loading']}`
      }) : "", /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `${sortcode_lookup_module_default.a['input-list']} ${isActive ? sortcode_lookup_module_default.a['is-active'] : ""}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
          children: searchResults.map((item, index) => {
            return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              onClick: evt => {
                handleBankSelect(item);
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                children: `${item.longbank1} - ${item.bankname}`
              })
            }, `result-${index}`);
          })
        })
      })]
    }), errors.sortCode && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: "invalid-feedback d-block",
      children: "This field is required"
    })]
  });
};

/* harmony default export */ var sortcode_lookup = (SortcodeLookup);
// CONCATENATED MODULE: ./components/proposal/sortcode-lookup/index.jsx

// CONCATENATED MODULE: ./components/proposal/bank/account-details.tsx







const AccountDetails = ({
  formData,
  showSortCodeLookup,
  showAccountName,
  showAccountNumer
}) => {
  const {
    setValue,
    register,
    errors
  } = Object(external_react_hook_form_["useFormContext"])();

  const onBankSelected = address => {
    setValue("bankName", address.name);
    setValue("address1", address.address1);
    setValue("address2", address.address2);
    setValue("address3", address.address3);
    setValue("town", address.town);
    setValue("county", address.county);
    setValue("postcode", address.postcode);
    setValue("timestamp", Date.now());
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "hidden",
      id: "postcode",
      name: "postcode",
      ref: register(),
      defaultValue: formData.postcode
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "hidden",
      id: "address1",
      name: "address1",
      ref: register(),
      defaultValue: formData.address1
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "hidden",
      id: "address2",
      name: "address2",
      ref: register(),
      defaultValue: formData.address2
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "hidden",
      id: "address3",
      name: "address3",
      ref: register(),
      defaultValue: formData.address3
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "hidden",
      id: "town",
      name: "town",
      ref: register(),
      defaultValue: formData.town
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "hidden",
      id: "county",
      name: "county",
      ref: register(),
      defaultValue: formData.county
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "hidden",
      id: "timestamp",
      name: "timestamp",
      ref: register(),
      defaultValue: formData.timestamp || Date.now()
    }), showSortCodeLookup && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
          children: ["Sort Code (Lookup) ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            children: "(Required)"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sortcode_lookup, {
          onBankSelected: onBankSelected,
          selectedSortCode: formData.sortCode,
          register: register,
          errors: errors
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
          htmlFor: "bankName",
          children: ["Bank Name ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            children: "(Required)"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          className: `form-control ${errors.bankName ? "is-invalid" : ""}`,
          id: "bankName",
          name: "bankName",
          "aria-describedby": "bankName",
          placeholder: "Your Bank Name",
          maxLength: 100,
          ref: register({
            required: true
          }),
          defaultValue: formData.bankName
        }), errors.bankName && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "This field is required"
        })]
      })
    }), showAccountName && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
          htmlFor: "accountName",
          children: ["Account Name ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            children: "(Required)"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          className: `form-control ${errors.accountName ? "is-invalid" : ""}`,
          id: "accountName",
          name: "accountName",
          "aria-describedby": "accountName",
          placeholder: "Your Account Name",
          maxLength: 100,
          ref: register({
            required: true
          }),
          defaultValue: formData.accountName
        }), errors.accountName && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "This field is required"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "text-blue",
          children: "Payments must be made from the applicants main account"
        })]
      })
    }), showAccountNumer && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
          htmlFor: "accountNumber",
          children: ["Account Number ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            children: "(Required)"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          className: `form-control ${errors.accountNumber ? "is-invalid" : ""}`,
          id: "accountNumber",
          name: "accountNumber",
          "aria-describedby": "accountNumber",
          placeholder: "Your Account Number",
          maxLength: 8,
          ref: register({
            required: true,
            minLength: 8,
            maxLength: 8,
            pattern: /^[0-9]*$/
          }),
          defaultValue: formData.accountNumber
        }), errors.accountNumber && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "This field is required"
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "mb-3",
      children: "Please confirm that you are authorised to set-up a direct debit and to allow payments to be made using the bank details provided, without the permission of any other account holders."
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "w-100 text-right form-check pl-0 pr-3 mb-3",
      children: [showAccountNumer && showAccountName && /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        className: "form-check-label",
        htmlFor: "authorised",
        children: "I am authorised to set-up a direct debit and to allow payments to be made using the bank details provided"
      }), !(showAccountNumer && showAccountName) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        className: "form-check-label",
        htmlFor: "authorised",
        children: " I am authorised to set up a direct debit and to allow payments to be made using this account"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        className: `form-check-input mr-0 ml-2 ${errors.authorised ? "is-invalid" : ""}`,
        type: "checkbox",
        defaultChecked: formData.authorised,
        id: "authorised",
        name: "authorised",
        ref: register({
          required: true
        })
      }), errors.authorised && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "invalid-feedback d-block",
        children: "Please authorised the set-up of a direct debit to allow payments to be made using the bank details provided"
      })]
    })]
  });
};

/* harmony default export */ var account_details = __webpack_exports__["a"] = (AccountDetails);

/***/ }),

/***/ "poAI":
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
/* harmony import */ var _bank_account_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("hoA6");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const mapStateToProps = state => {
  return {
    formData: state.formData,
    stepNumber: state.stepIndicator
  };
};

const SoleStepFive = props => {
  const formData = props.formData[props.stepNumber];

  const handleGATracking = () => Object(helpers_analytics__WEBPACK_IMPORTED_MODULE_1__[/* logLabelEvent */ "d"])('prop_form_tracking_soletrader', 'Click', 'bank-details-completed');

  const methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])();
  const {
    handleSubmit
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
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
      className: "mb-5",
      children: "Your Bank Details"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["FormContext"], _objectSpread(_objectSpread({}, methods), {}, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_bank_account_details__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
          showSortCodeLookup: true,
          showAccountNumer: true,
          showAccountName: true,
          formData: formData
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(SoleStepFive));

/***/ })

};;