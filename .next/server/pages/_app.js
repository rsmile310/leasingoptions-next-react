module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "2l32":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getApiResponse; });
const getApiResponse = async response => {
  const responseData = await response.json();
  const result = {
    data: responseData.data,
    isSucceed: response.ok && responseData.status.code === 0
  };
  return result;
};

/***/ }),

/***/ "3Oxi":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"trust-micro": "trust-micro_trust-micro__3HNeS",
	"trust-micro--light": "trust-micro_trust-micro--light__1kF_u",
	"lg-text": "trust-micro_lg-text__363s2",
	"trust-micro__logo": "trust-micro_trust-micro__logo__3jENN"
};


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5loB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingTypes; });
let PricingTypes;

(function (PricingTypes) {
  PricingTypes[PricingTypes["None"] = 0] = "None";
  PricingTypes[PricingTypes["Standard"] = 1] = "Standard";
  PricingTypes[PricingTypes["Atc"] = 2] = "Atc";
})(PricingTypes || (PricingTypes = {}));

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Ezaw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleTypes; });
let VehicleTypes;

(function (VehicleTypes) {
  VehicleTypes[VehicleTypes["None"] = 0] = "None";
  VehicleTypes[VehicleTypes["Car"] = 1] = "Car";
  VehicleTypes[VehicleTypes["Commercial"] = 2] = "Commercial";
})(VehicleTypes || (VehicleTypes = {}));

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FAkc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initialNavigationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initialFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialFilterData; });
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bDXC");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(accounting__WEBPACK_IMPORTED_MODULE_0__);

const initialNavigationData = {
  currentLink: {
    id: "",
    name: ""
  },
  currentSubLink: {
    id: "",
    name: ""
  },
  level: 1,
  controls: false,
  indicator: ""
};
const initialFormData = {
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {},
  8: {},
  9: {},
  10: {}
};
const initialFilterData = {
  searchType: {
    id: "",
    name: ""
  },
  manufacturerUrl: '',
  modelUrl: '',
  shortDerTextUrl: {
    id: "",
    name: ""
  },
  term: {
    id: "",
    name: ""
  },
  initialRental: {
    id: "6",
    name: "6" + " Months"
  },
  mileage: {
    id: "5000",
    name: accounting__WEBPACK_IMPORTED_MODULE_0___default.a.formatNumber(parseInt("5000")) + " Miles"
  },
  fuelType: {
    id: "",
    name: ""
  },
  transmission: {
    id: "",
    name: ""
  },
  co2: {
    id: "",
    name: ""
  },
  mpg: {
    id: "",
    name: ""
  },
  doors: {
    id: "",
    name: ""
  },
  seats: {
    id: "",
    name: ""
  },
  driveTrain: {
    id: "",
    name: ""
  },
  vehicleSize: {
    id: "",
    name: ""
  },
  vehicleStyle: {
    id: "",
    name: ""
  },
  engineSize: {
    id: "",
    name: ""
  },
  priceFrom: {
    id: "",
    name: ""
  },
  priceTo: {
    id: "",
    name: ""
  },
  isInStock: null,
  isSpecial: null
};

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "I4Hu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ trust_micro; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/trustpilot/trust-micro/trust-micro.module.scss
var trust_micro_module = __webpack_require__("3Oxi");
var trust_micro_module_default = /*#__PURE__*/__webpack_require__.n(trust_micro_module);

// EXTERNAL MODULE: ./enums/TrustThemeTypes.tsx
var TrustThemeTypes = __webpack_require__("MlS6");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/trustpilot/trust-micro/trust-micro.tsx








function mapStateToProps(state) {
  return {
    trustPilotRating: state.trustPilotRating
  };
}

const TrustMicro = ({
  theme,
  trustPilotRating
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: (trustPilotRating === null || trustPilotRating === void 0 ? void 0 : trustPilotRating.score) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${trust_micro_module_default.a['trust-micro']} ${theme === TrustThemeTypes["a" /* TrustThemeTypes */].Light ? trust_micro_module_default.a['trust-micro--light'] : ''}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        href: "https://uk.trustpilot.com/review/leasingoptions.co.uk?utm_medium=trustbox&utm_source=MicroTrustScore",
        target: "_blank",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
          className: trust_micro_module_default.a['lg-text'],
          children: "Excellent"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
          children: trustPilotRating === null || trustPilotRating === void 0 ? void 0 : trustPilotRating.score
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "out of 5"
        }), theme === TrustThemeTypes["a" /* TrustThemeTypes */].Light ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: `${"https://imagecdn.leasingoptions.co.uk"}/website/static/trustpilot-logo-star--white.svg`,
          width: "65",
          height: "16",
          className: `${trust_micro_module_default.a['trust-micro__logo']} img-fluid`,
          alt: "Trustpilot logo"
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: `${"https://imagecdn.leasingoptions.co.uk"}/website/static/trustpilot-logo-star.svg`,
          width: "65",
          height: "16",
          className: `${trust_micro_module_default.a['trust-micro__logo']} img-fluid lazyload`,
          alt: "Trustpilot logo"
        })]
      })
    })
  });
};

/* harmony default export */ var trust_micro = (Object(external_react_redux_["connect"])(mapStateToProps)(TrustMicro));
// CONCATENATED MODULE: ./components/trustpilot/trust-micro/index.jsx


/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Kj82":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return joinNotEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isNullOrWhiteSpace; });
/* unused harmony export escapeRegExp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return replaceAll; });
/* unused harmony export isNumeric */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasWhiteSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return shortCut; });
const joinNotEmpty = (separator, values) => {
  let filteredValues = [];

  if (values) {
    for (let i = 0; i < values.length; i++) {
      if (!isNullOrWhiteSpace(values[i])) {
        filteredValues.push(values[i]);
      }
    }
  }

  return filteredValues.join(separator || "");
};
const isNullOrWhiteSpace = value => {
  return !value || value === '' || !value.trim();
};
const escapeRegExp = text => {
  return text === null || text === void 0 ? void 0 : text.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
};
const replaceAll = (str, find, replace) => {
  return str === null || str === void 0 ? void 0 : str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
};
const isNumeric = value => {
  let reg = new RegExp('^\\d+$');
  return reg.test(value);
};
const capitalize = value => {
  if (!isNullOrWhiteSpace(value)) {
    var result = "";
    let wordBuilder = "";
    const stopChars = [" ", "-", ",", ".", "&", "|"];
    let idx = 0;

    while (idx <= value.length) {
      let currentValue = idx < value.length ? value[idx] : "";

      if (currentValue !== "" && !stopChars.includes(currentValue)) {
        wordBuilder += currentValue;
      } else {
        let word = wordBuilder.toString();

        if (word.length > 3 && !isNumeric(word[0]) && !isNumeric(word[word.length - 1])) {
          result += `${word.substring(0, 1).toUpperCase()}${word.substring(1).toLowerCase()}${currentValue}`;
        } else {
          result += `${word}${currentValue}`;
        }

        wordBuilder = "";
      }

      idx++;
    }

    return result;
  }

  return value;
};
const hasWhiteSpace = s => {
  return s.indexOf(' ') >= 0;
};
const shortCut = (value, take) => {
  let result = value ? value.trim() : value;

  if (result && take > 0 && result.length > take + 3) {
    const checkList = [' ', '.', ',', ':', ';', '?', '!'];
    let trailingChar = result.substring(take, take + 1);
    result = result.substring(0, take);

    if (!checkList.includes(trailingChar)) {
      result = result.substring(0, result.lastIndexOf(' ')).trim();
    }

    while (checkList.includes(result[result.length - 1])) {
      result = result.substring(0, result.length - 1).trim();
    }

    result = result.trim() + "...";
  }

  return result;
};

/***/ }),

/***/ "LEBW":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension/developmentOnly");

/***/ }),

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "MlS6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrustThemeTypes; });
let TrustThemeTypes;

(function (TrustThemeTypes) {
  TrustThemeTypes[TrustThemeTypes["Light"] = 1] = "Light";
  TrustThemeTypes[TrustThemeTypes["Dark"] = 2] = "Dark";
})(TrustThemeTypes || (TrustThemeTypes = {}));

/***/ }),

/***/ "N/OL":
/***/ (function(module, exports) {

module.exports = require("lazysizes/plugins/attrchange/ls.attrchange");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = "anonymous";
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = "anonymous"; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Oy2/":
/***/ (function(module, exports) {

module.exports = require("lazysizes");

/***/ }),

/***/ "PG61":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteSettings; });
/* harmony import */ var enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ezaw");
/* harmony import */ var enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("l7ai");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SiteSettings {
  static GetDealTypeDefaultMileage(leasingDealType) {
    return leasingDealType === enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_1__[/* LeasingDealTypes */ "a"].Van ? this.DefaultVanMileage : this.DefaultCarMileage;
  }

  static GetVehicleTypeDefaultMileage(vehicleType) {
    return vehicleType === enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_0__[/* VehicleTypes */ "a"].Commercial ? this.DefaultVanMileage : this.DefaultCarMileage;
  }

}

_defineProperty(SiteSettings, "DefaultCarMileage", parseInt("5000"));

_defineProperty(SiteSettings, "DefaultVanMileage", parseInt("8000"));

_defineProperty(SiteSettings, "DefaultInitialRentals", parseInt("6"));

_defineProperty(SiteSettings, "DefaultTerm", parseInt("4"));

_defineProperty(SiteSettings, "DefaultMaintenance", "false" === "true");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "VxR9":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal-ouibounce": "ouibounce_modal-ouibounce__29PtN",
	"ouibounce-overlay": "ouibounce_ouibounce-overlay__1X5DH",
	"ouibounce-overlay__modal": "ouibounce_ouibounce-overlay__modal__3tbfE",
	"ouibounce-overlay__bg": "ouibounce_ouibounce-overlay__bg__3ouNB",
	"ouibounce-overlay__close": "ouibounce_ouibounce-overlay__close__tLaEU",
	"ouibounce-overlay__input": "ouibounce_ouibounce-overlay__input__17Qk0",
	"is-invalid": "ouibounce_is-invalid__13feP",
	"ouibounce-overlay__tandcs": "ouibounce_ouibounce-overlay__tandcs__gVlkP"
};


/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YjgO":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/pro-light-svg-icons");

/***/ }),

/***/ "a2hv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ModalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  component: null,
  props: {},
  showModal: (T, A) => {},
  hideModal: () => {}
});
/* harmony default export */ __webpack_exports__["a"] = (ModalContext);

/***/ }),

/***/ "bDXC":
/***/ (function(module, exports) {

module.exports = require("accounting");

/***/ }),

/***/ "boQY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ wrapper; });

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension/developmentOnly"
var developmentOnly_ = __webpack_require__("LEBW");

// EXTERNAL MODULE: ./redux/initialState.tsx
var initialState = __webpack_require__("FAkc");

// EXTERNAL MODULE: ./enums/VehicleTypes.tsx
var VehicleTypes = __webpack_require__("Ezaw");

// EXTERNAL MODULE: ./enums/LeasingDealTypes.tsx
var LeasingDealTypes = __webpack_require__("l7ai");

// EXTERNAL MODULE: ./business-logic/vehicleService.tsx + 2 modules
var vehicleService = __webpack_require__("wbKs");

// CONCATENATED MODULE: ./reducers/reducers.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function vehiclePreference(state = VehicleTypes["a" /* VehicleTypes */].Car, action) {
  switch (action.type) {
    case "UPDATE_VEHICLE_PREFERENCE":
      return action.data;

    default:
      return state;
  }
}

function stickerList(state = [], action) {
  switch (action.type) {
    case "UPDATE_STICKER_LIST":
      return action.data;

    default:
      return state;
  }
}

function trustPilotRating(state = null, action) {
  switch (action.type) {
    case "UPDATE_TRUSTPILOT_RATING":
      return action.data;

    default:
      return state;
  }
}

function carManufacturerList(state = Object(vehicleService["G" /* GetStaticMakes */])(VehicleTypes["a" /* VehicleTypes */].Car), action) {
  switch (action.type) {
    case "UPDATE_CAR_MANUFACTURERS":
      return action.data;

    default:
      return state;
  }
}

function vanManufacturerList(state = Object(vehicleService["G" /* GetStaticMakes */])(VehicleTypes["a" /* VehicleTypes */].Commercial), action) {
  switch (action.type) {
    case "UPDATE_COMMERCIAL_MANUFACTURERS":
      return action.data;

    default:
      return state;
  }
}

function headerToggle(state = true, action) {
  switch (action.type) {
    case "UPDATE_HEADER_STATE":
      return action.toggle;

    default:
      return state;
  }
}

function dealSelector(state = LeasingDealTypes["a" /* LeasingDealTypes */].Personal, action) {
  switch (action.type) {
    case "UPDATE_DEAL_TYPE":
      return action.deal;

    default:
      return state;
  }
}

function navigationStates(state = initialState["c" /* initialNavigationData */], action) {
  switch (action.type) {
    case "UPDATE_LINK_STATE":
      return _objectSpread(_objectSpread({}, state), {}, {
        currentLink: {
          id: action.id,
          name: action.indicator
        },
        currentSubLink: {
          id: "",
          name: ""
        },
        level: action.level,
        controls: action.controls,
        indicator: action.indicator
      });

    case "UPDATE_SUB_STATE":
      return _objectSpread(_objectSpread({}, state), {}, {
        currentLink: state.currentLink,
        currentSubLink: {
          id: action.id,
          name: action.indicator
        },
        level: action.level,
        controls: action.controls,
        indicator: action.indicator
      });

    default:
      return state;
  }
}

function overlayState(state = false, action) {
  switch (action.type) {
    case "UPDATE_OVERLAY_STATE":
      return action.state;

    default:
      return state;
  }
}

function siteAlertState(state = true, action) {
  switch (action.type) {
    case "CLOSE_ALERT_BAR":
      return action.close;

    default:
      return state;
  }
}

function stepIndicator(state = 1, action) {
  switch (action.type) {
    case "UPDATE_INDICATOR":
      return action.step;

    default:
      return state;
  }
}

function formData(state = initialState["b" /* initialFormData */], action) {
  switch (action.type) {
    case "UPDATE_FIELDS":
      return _objectSpread(_objectSpread({}, state), {}, {
        [action.step]: action.data
      });

    default:
      return state;
  }
}

function vehicleFilters(state = initialState["a" /* initialFilterData */], action) {
  var _vehicleFilter$term, _GetContractValues$fi, _GetContractValues$fi2, _vehicleFilter$initia, _GetRentalValues$find, _GetRentalValues$find2, _vehicleFilter$mileag, _GetVehicleMileageVal, _GetVehicleMileageVal2, _vehicleFilter$fuelTy, _GetFuelTypesValues$f, _GetFuelTypesValues$f2, _vehicleFilter$transm, _GetTransmissionValue, _GetTransmissionValue2, _vehicleFilter$co, _GetC02Values$find$na, _GetC02Values$find, _vehicleFilter$mpg, _GetMpgValues$find$na, _GetMpgValues$find, _vehicleFilter$seats, _GetSeatValues$find$n, _GetSeatValues$find, _vehicleFilter$driveT, _GetDriveTrainValues$, _GetDriveTrainValues$2, _vehicleFilter$vehicl, _GetVehicleSizeValues, _GetVehicleSizeValues2, _vehicleFilter$vehicl2, _GetVehicleStyleValue, _GetVehicleStyleValue2, _vehicleFilter$engine, _GetEngineSizeValues$, _GetEngineSizeValues$2, _vehicleFilter$priceT, _GetPriceToValues$fin, _GetPriceToValues$fin2;

  switch (action.type) {
    case "UPDATE_FILTERS":
      return _objectSpread(_objectSpread({}, state), {}, {
        [action.filterName]: action.filterValue
      });

    case "UPDATE_ALL_FILTERS":
      let vehicleFilter = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        searchType: {
          id: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.isSpecial ? 'offers' : vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.isInStock ? 'stock' : '',
          name: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.isSpecial ? 'Search special offers only' : vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.isInStock ? 'Search stock only' : ''
        },
        manufacturerUrl: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.manufacturerUrl ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.manufacturerUrl : '',
        modelUrl: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.shortModTextUrl ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.shortModTextUrl : '',
        shortDerTextUrl: {
          id: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.shortDerTextUrl ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.shortDerTextUrl : '',
          name: ''
        },
        term: {
          id: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.term ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : (_vehicleFilter$term = vehicleFilter.term) === null || _vehicleFilter$term === void 0 ? void 0 : _vehicleFilter$term.toString() : '',
          name: (_GetContractValues$fi = (_GetContractValues$fi2 = Object(vehicleService["h" /* GetContractValues */])().find(item => item.id == (vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.term))) === null || _GetContractValues$fi2 === void 0 ? void 0 : _GetContractValues$fi2.name) !== null && _GetContractValues$fi !== void 0 ? _GetContractValues$fi : ''
        },
        initialRental: {
          id: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.initialRentals ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : (_vehicleFilter$initia = vehicleFilter.initialRentals) === null || _vehicleFilter$initia === void 0 ? void 0 : _vehicleFilter$initia.toString() : '',
          name: (_GetRentalValues$find = (_GetRentalValues$find2 = Object(vehicleService["y" /* GetRentalValues */])().find(item => item.id == (vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.initialRentals))) === null || _GetRentalValues$find2 === void 0 ? void 0 : _GetRentalValues$find2.name) !== null && _GetRentalValues$find !== void 0 ? _GetRentalValues$find : ''
        },
        mileage: {
          id: vehicleFilter === null || vehicleFilter === void 0 ? void 0 : (_vehicleFilter$mileag = vehicleFilter.mileage) === null || _vehicleFilter$mileag === void 0 ? void 0 : _vehicleFilter$mileag.toString(),
          name: (_GetVehicleMileageVal = (_GetVehicleMileageVal2 = Object(vehicleService["T" /* GetVehicleMileageValues */])().find(item => item.id == (vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.mileage))) === null || _GetVehicleMileageVal2 === void 0 ? void 0 : _GetVehicleMileageVal2.name) !== null && _GetVehicleMileageVal !== void 0 ? _GetVehicleMileageVal : ''
        },
        fuelType: {
          id: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.fuelType ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : (_vehicleFilter$fuelTy = vehicleFilter.fuelType) === null || _vehicleFilter$fuelTy === void 0 ? void 0 : _vehicleFilter$fuelTy.toString() : '',
          name: (_GetFuelTypesValues$f = (_GetFuelTypesValues$f2 = Object(vehicleService["m" /* GetFuelTypesValues */])().find(item => item.id == (vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.fuelType))) === null || _GetFuelTypesValues$f2 === void 0 ? void 0 : _GetFuelTypesValues$f2.name) !== null && _GetFuelTypesValues$f !== void 0 ? _GetFuelTypesValues$f : ''
        },
        transmission: {
          id: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.transmission ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : (_vehicleFilter$transm = vehicleFilter.transmission) === null || _vehicleFilter$transm === void 0 ? void 0 : _vehicleFilter$transm.toString() : '',
          name: (_GetTransmissionValue = (_GetTransmissionValue2 = Object(vehicleService["M" /* GetTransmissionValues */])().find(item => item.id == (vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.transmission))) === null || _GetTransmissionValue2 === void 0 ? void 0 : _GetTransmissionValue2.name) !== null && _GetTransmissionValue !== void 0 ? _GetTransmissionValue : ''
        },
        co2: {
          id: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.co2 ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : (_vehicleFilter$co = vehicleFilter.co2) === null || _vehicleFilter$co === void 0 ? void 0 : _vehicleFilter$co.toString() : '',
          name: (_GetC02Values$find$na = (_GetC02Values$find = Object(vehicleService["e" /* GetC02Values */])().find(item => item.id == (vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.co2))) === null || _GetC02Values$find === void 0 ? void 0 : _GetC02Values$find.name) !== null && _GetC02Values$find$na !== void 0 ? _GetC02Values$find$na : ''
        },
        mpg: {
          id: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.mpg ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : (_vehicleFilter$mpg = vehicleFilter.mpg) === null || _vehicleFilter$mpg === void 0 ? void 0 : _vehicleFilter$mpg.toString() : '',
          name: (_GetMpgValues$find$na = (_GetMpgValues$find = Object(vehicleService["u" /* GetMpgValues */])().find(item => item.id == (vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.mpg))) === null || _GetMpgValues$find === void 0 ? void 0 : _GetMpgValues$find.name) !== null && _GetMpgValues$find$na !== void 0 ? _GetMpgValues$find$na : ''
        },
        //  doors: { id: vehicleFilter?.doors ? vehicleFilter?.doors?.toString() : '', name: GetDoo().find(item => item.id == vehicleFilter?.driveTrain).name ?? ''}, 
        seats: {
          id: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.seats ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : (_vehicleFilter$seats = vehicleFilter.seats) === null || _vehicleFilter$seats === void 0 ? void 0 : _vehicleFilter$seats.toString() : '',
          name: (_GetSeatValues$find$n = (_GetSeatValues$find = Object(vehicleService["A" /* GetSeatValues */])().find(item => item.id == (vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.seats))) === null || _GetSeatValues$find === void 0 ? void 0 : _GetSeatValues$find.name) !== null && _GetSeatValues$find$n !== void 0 ? _GetSeatValues$find$n : ''
        },
        driveTrain: {
          id: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.driveTrain ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : (_vehicleFilter$driveT = vehicleFilter.driveTrain) === null || _vehicleFilter$driveT === void 0 ? void 0 : _vehicleFilter$driveT.toString() : '',
          name: (_GetDriveTrainValues$ = (_GetDriveTrainValues$2 = Object(vehicleService["j" /* GetDriveTrainValues */])().find(item => item.id == (vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.driveTrain))) === null || _GetDriveTrainValues$2 === void 0 ? void 0 : _GetDriveTrainValues$2.name) !== null && _GetDriveTrainValues$ !== void 0 ? _GetDriveTrainValues$ : ''
        },
        vehicleSize: {
          id: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.vehicleSize ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : (_vehicleFilter$vehicl = vehicleFilter.vehicleSize) === null || _vehicleFilter$vehicl === void 0 ? void 0 : _vehicleFilter$vehicl.toString() : '',
          name: (_GetVehicleSizeValues = (_GetVehicleSizeValues2 = Object(vehicleService["Y" /* GetVehicleSizeValues */])().find(item => item.id == (vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.vehicleSize))) === null || _GetVehicleSizeValues2 === void 0 ? void 0 : _GetVehicleSizeValues2.name) !== null && _GetVehicleSizeValues !== void 0 ? _GetVehicleSizeValues : ''
        },
        vehicleStyle: {
          id: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.vehicleStyle ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : (_vehicleFilter$vehicl2 = vehicleFilter.vehicleStyle) === null || _vehicleFilter$vehicl2 === void 0 ? void 0 : _vehicleFilter$vehicl2.toString() : '',
          name: (_GetVehicleStyleValue = (_GetVehicleStyleValue2 = Object(vehicleService["Z" /* GetVehicleStyleValues */])().find(item => item.id == (vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.vehicleStyle))) === null || _GetVehicleStyleValue2 === void 0 ? void 0 : _GetVehicleStyleValue2.name) !== null && _GetVehicleStyleValue !== void 0 ? _GetVehicleStyleValue : ''
        },
        engineSize: {
          id: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.engineSize ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : (_vehicleFilter$engine = vehicleFilter.engineSize) === null || _vehicleFilter$engine === void 0 ? void 0 : _vehicleFilter$engine.toString() : '',
          name: (_GetEngineSizeValues$ = (_GetEngineSizeValues$2 = Object(vehicleService["k" /* GetEngineSizeValues */])().find(item => item.id == (vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.engineSize))) === null || _GetEngineSizeValues$2 === void 0 ? void 0 : _GetEngineSizeValues$2.name) !== null && _GetEngineSizeValues$ !== void 0 ? _GetEngineSizeValues$ : ''
        },
        // priceFrom: { id: vehicleFilter?.priceFrom ? vehicleFilter?.priceFrom?.toString() : '', name: 'Price from'},
        priceTo: {
          id: vehicleFilter !== null && vehicleFilter !== void 0 && vehicleFilter.priceTo ? vehicleFilter === null || vehicleFilter === void 0 ? void 0 : (_vehicleFilter$priceT = vehicleFilter.priceTo) === null || _vehicleFilter$priceT === void 0 ? void 0 : _vehicleFilter$priceT.toString() : '',
          name: (_GetPriceToValues$fin = (_GetPriceToValues$fin2 = Object(vehicleService["v" /* GetPriceToValues */])().find(item => item.id == (vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.priceTo))) === null || _GetPriceToValues$fin2 === void 0 ? void 0 : _GetPriceToValues$fin2.name) !== null && _GetPriceToValues$fin !== void 0 ? _GetPriceToValues$fin : ''
        },
        isInStock: vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.isInStock,
        isSpecial: vehicleFilter === null || vehicleFilter === void 0 ? void 0 : vehicleFilter.isSpecial
      });
    //case "RESET_FILTERS":
    //    return initialFilterData;

    default:
      return state;
  }
}

function referrerRoute(state = null, action) {
  switch (action.type) {
    case "UPDATE_REFERRER":
      return action.url;

    default:
      return state;
  }
}

function garageData(state = {}, action) {
  switch (action.type) {
    case "ADD_TO_GARAGE":
      return _objectSpread(_objectSpread({}, state), {}, {
        [action.garageId]: {
          vehicleRef: action.vehicleRef,
          leaseDealType: action.leaseDealType
        }
      });

    case "REMOVE_TO_GARAGE":
      const next = _objectSpread({}, state);

      delete next[action.garageId];
      return next;

    default:
      return state;
  }
}

function isInternal(state = null, action) {
  switch (action.type) {
    case "UPDATE_INTERNAL":
      return action.internal;

    default:
      return state;
  }
}

function userPostcode(state = null, action) {
  switch (action.type) {
    case "UPDATE_POSTCODE":
      return action.userPostcode;

    case "RESET_POSTCODE":
      return '';

    default:
      return state;
  }
}

const siteReducers = Object(external_redux_["combineReducers"])({
  vehiclePreference,
  stickerList,
  trustPilotRating,
  carManufacturerList,
  vanManufacturerList,
  headerToggle,
  dealSelector,
  navigationStates,
  overlayState,
  siteAlertState,
  stepIndicator,
  formData,
  vehicleFilters,
  referrerRoute,
  garageData,
  isInternal,
  userPostcode
});
/* harmony default export */ var reducers = (siteReducers);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// CONCATENATED MODULE: ./redux/store.tsx/store.tsx
function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const reducer = (state, action) => {
  if (action.type === external_next_redux_wrapper_["HYDRATE"]) {
    const nextState = store_objectSpread(store_objectSpread({}, state), action.payload); // preserve count value on client side navigation


    if (state.stickerList) nextState.stickerList = state.stickerList;
    if (state.headerToggle) nextState.headerToggle = state.headerToggle;
    if (state.stepIndicator) nextState.stepIndicator = state.stepIndicator;
    if (state.formData) nextState.formData = state.formData;
    if (state.navigationStates) nextState.navigationStates = state.navigationStates;
    if (state.garageData) nextState.garageData = state.garageData;
    return nextState;
  } else {
    return reducers(state, action);
  }
}; // create a makeStore function


const makeStore = context => Object(external_redux_["createStore"])(reducer, Object(developmentOnly_["composeWithDevTools"])());

; // export an assembled wrapper

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(makeStore, {
  debug: false
});
/* harmony default export */ var store = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "btDt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGAClientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return logLabelEvent; });
/* unused harmony export logException */
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lJcc");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_urlHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zjkP");
// utils/analytics.js


const initGA = () => {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize('UA-5906257-3');
};
const getGAClientId = () => {
  let gaClientId = null;
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.ga(tracker => {
    gaClientId = tracker.get('clientId');
  });
  return gaClientId;
};
const logPageView = () => {
  let pageUrl = Object(helpers_urlHelper__WEBPACK_IMPORTED_MODULE_1__[/* GetFullUrlPath */ "n"])();
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: pageUrl
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(pageUrl);
};
const logEvent = (category = '', action = '') => {
  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
      category,
      action
    });
  }
};
const logLabelEvent = (category = '', action = '', label = '') => {
  if (category && action && label) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
      category,
      action,
      label
    });
  }
};
const logException = (description = '', fatal = false) => {
  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.exception({
      description,
      fatal
    });
  }
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./sass/styles.scss
var styles = __webpack_require__("yjly");

// EXTERNAL MODULE: external "lazysizes"
var external_lazysizes_ = __webpack_require__("Oy2/");

// EXTERNAL MODULE: external "lazysizes/plugins/attrchange/ls.attrchange"
var ls_attrchange_ = __webpack_require__("N/OL");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/HOCs/modal/modalContext.tsx
var modalContext = __webpack_require__("a2hv");

// CONCATENATED MODULE: ./components/HOCs/modal/modalProvider.js


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class modalProvider_ModalProvider extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "showModal", (component, props = {}) => {
      this.setState({
        component,
        props
      });
    });

    _defineProperty(this, "hideModal", () => {
      this.setState({
        component: null,
        props: {}
      });
    });

    _defineProperty(this, "state", {
      component: null,
      props: {},
      showModal: this.showModal,
      hideModal: this.hideModal
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(modalContext["a" /* default */].Provider, {
      value: this.state,
      children: this.props.children
    });
  }

}

/* harmony default export */ var modalProvider = (modalProvider_ModalProvider);
// CONCATENATED MODULE: ./components/HOCs/modal/modalConsumer.js

const ModalConsumer = modalContext["a" /* default */].Consumer;
// CONCATENATED MODULE: ./components/HOCs/modal/modalRoot.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { modalRoot_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modalRoot_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ModalRoot = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModalConsumer, {
  children: ({
    component: Component,
    props,
    hideModal
  }) => Component ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread(_objectSpread({}, props), {}, {
    onRequestClose: hideModal
  })) : null
});

/* harmony default export */ var modalRoot = (ModalRoot);
// EXTERNAL MODULE: ./redux/store.tsx/store.tsx + 1 modules
var store = __webpack_require__("boQY");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./helpers/analytics.tsx
var analytics = __webpack_require__("btDt");

// EXTERNAL MODULE: ./components/ouibounce/ouibounce.module.scss
var ouibounce_module = __webpack_require__("VxR9");
var ouibounce_module_default = /*#__PURE__*/__webpack_require__.n(ouibounce_module);

// EXTERNAL MODULE: external "@fortawesome/pro-light-svg-icons"
var pro_light_svg_icons_ = __webpack_require__("YjgO");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: ./components/trustpilot/trust-micro/index.jsx + 1 modules
var trust_micro = __webpack_require__("I4Hu");

// EXTERNAL MODULE: ./enums/TrustThemeTypes.tsx
var TrustThemeTypes = __webpack_require__("MlS6");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "ouibounce"
var external_ouibounce_ = __webpack_require__("zbtU");
var external_ouibounce_default = /*#__PURE__*/__webpack_require__.n(external_ouibounce_);

// EXTERNAL MODULE: ./business-logic/systemService.tsx + 1 modules
var systemService = __webpack_require__("uDbZ");

// CONCATENATED MODULE: ./components/ouibounce/ouibounce.tsx













const OuibounceModal = () => {
  let emailAddress = Object(external_react_["useRef"])();
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(false);
  const leavingModalRef = Object(external_react_["useRef"])();

  const dissmissModal = () => {
    // @ts-ignore
    leavingModalRef.current.style.display = 'none';
    Object(analytics["d" /* logLabelEvent */])('ouibounce', 'Click', 'dismissed');
  };

  const newsletterSignup = () => {
    var _emailAddress$current, _emailAddress$current2;

    // @ts-ignore
    if (emailAddress !== null && emailAddress !== void 0 && (_emailAddress$current = emailAddress.current) !== null && _emailAddress$current !== void 0 && _emailAddress$current.value && EmailAddressIsValid(emailAddress === null || emailAddress === void 0 ? void 0 : (_emailAddress$current2 = emailAddress.current) === null || _emailAddress$current2 === void 0 ? void 0 : _emailAddress$current2.value)) {
      // @ts-ignore
      Object(systemService["f" /* NewsletterSignup */])(emailAddress.current.value, SubscriptionTypes.News).then(result => {
        if (result.status.message === "OK") {
          dissmissModal();
          setError(false);
          Object(analytics["d" /* logLabelEvent */])('ouibounce', 'click', 'newsletter_signup');
        }
      });
    } else {
      setError(true);
      emailAddress === null || emailAddress === void 0 ? void 0 : emailAddress.current.focus();
    }
  };

  Object(external_react_["useEffect"])(() => {
    // @ts-ignore
    external_ouibounce_default()(leavingModalRef.current, {
      delay: 20
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    id: "ouibounce-modal",
    className: ouibounce_module_default.a['modal-ouibounce'],
    style: {
      display: 'none'
    },
    ref: leavingModalRef,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: ouibounce_module_default.a['ouibounce-overlay'],
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: ouibounce_module_default.a['ouibounce-overlay__modal'],
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: ouibounce_module_default.a['ouibounce-overlay__bg'],
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/ouibounce-bg.jpg`,
            width: "315",
            height: "407",
            className: "lazyload",
            alt: "Decorative phone image"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: ouibounce_module_default.a['ouibounce-overlay__close'],
          onClick: dissmissModal,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            icon: pro_light_svg_icons_["faTimes"]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row no-gutters",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24 col-md-18",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "mb-3",
              children: "Leaving so soon?"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "mb-3 mb-md-4",
              children: "Want the latest deals? Special offers, exclusives and latest car news and reviews. Don\u2019t miss a thing and sign up for alerts!"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row no-gutters",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-24 col-md-16 col-lg-14 mb-3 mb-md-4",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "box bg-light-grey",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: `${ouibounce_module_default.a['ouibounce-overlay__input']} ${error ? "is-invalid" : ""}`,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  ref: emailAddress,
                  id: "emailAddress",
                  name: "emailAddress",
                  className: `form-control ${error ? ouibounce_module_default.a['is-invalid'] : "mb-2 mb-md-3"}`,
                  placeholder: "Your email address"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                  icon: pro_light_svg_icons_["faEnvelope"]
                })]
              }), error && /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                className: "w-100 d-block text-red mb-3",
                children: "Please enter a valid email address"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                className: "btn btn-primary btn-lg-md btn-block mb-3",
                onClick: () => {
                  newsletterSignup();
                },
                children: "Sign up for exclusive offers"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "w-100 position-relative text-center mb-3",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_micro["a" /* default */], {
                  theme: TrustThemeTypes["a" /* TrustThemeTypes */].Dark
                })
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row no-gutters",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-24 col-md-16 col-lg-14 text-center",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/ouibounce-cars.png`,
              width: "400",
              height: "100",
              className: "img-fluid mb-3 lazyload",
              alt: ""
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row no-gutters",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-24 col-md-16",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: ouibounce_module_default.a['ouibounce-overlay__tandcs'],
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("small", {
                children: ["You can unsubscribe at any time, by emailing ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  href: "mailto:compliance@leasingoptions.co.uk",
                  children: "compliance@leasingoptions.co.uk"
                }), " or by clicking the unsubscribe link at the end of any e-newsletter you have received from us. For more information, please see our ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  passHref: true,
                  href: "/privacy-policy",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Privacy Policy"
                  })
                }), "."]
              })
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ var ouibounce = (OuibounceModal);
// CONCATENATED MODULE: ./components/ouibounce/index.tsx

// CONCATENATED MODULE: ./pages/_app.tsx




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // do we need?









const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;

const MyApp = ({
  Component,
  pageProps
}) => {
  const router = Object(router_["useRouter"])();
  router_["Router"].events.on('routeChangeComplete', () => {
    Object(analytics["e" /* logPageView */])();
  });
  Object(external_react_["useEffect"])(() => {
    // @ts-ignore
    if (!window.GA_INITIALIZED) {
      Object(analytics["b" /* initGA */])(); // @ts-ignore

      window.GA_INITIALIZED = true;
    }

    if (!router.asPath.includes('?') || router.asPath.includes('?') && !isEmpty(router.query)) {
      Object(analytics["e" /* logPageView */])();
    }
  }, []); // @ts-ignore */

  if (Component.layout) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ouibounce, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(modalProvider, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Component.layout, {
          metaData: pageProps === null || pageProps === void 0 ? void 0 : pageProps.metaData,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modalRoot, {})]
      })]
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(modalProvider, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modalRoot, {})]
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (store["b" /* wrapper */].withRedux(MyApp));

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "l7ai":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeasingDealTypes; });
let LeasingDealTypes;

(function (LeasingDealTypes) {
  LeasingDealTypes[LeasingDealTypes["None"] = 0] = "None";
  LeasingDealTypes[LeasingDealTypes["Business"] = 1] = "Business";
  LeasingDealTypes[LeasingDealTypes["Personal"] = 2] = "Personal";
  LeasingDealTypes[LeasingDealTypes["Van"] = 3] = "Van";
})(LeasingDealTypes || (LeasingDealTypes = {}));

/***/ }),

/***/ "lJcc":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "uDbZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ GetSalesPeople; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ VerifySalesPerson; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CheckInformationNoticAcceptance; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ SendPricingFeedback; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ NewsletterSignup; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ GetTrustPilotRating; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ GetValuation; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ HasSeenMarketingForm; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ SetToSeenMarketingForm; });

// EXTERNAL MODULE: ./helpers/apiResponseHelper.tsx
var apiResponseHelper = __webpack_require__("2l32");

// CONCATENATED MODULE: ./API/SystemAPI.tsx


const queryString = __webpack_require__("Lc87");

const SendPricingFeedbackAPI = async pricingFeedback => {
  const response = await fetch("https://system-website.api.leasingoptions.co.uk/" + `api/internaltools/sendpricefeedback?` + queryString.stringify(pricingFeedback));
  return Object(apiResponseHelper["a" /* getApiResponse */])(response);
};
const HasSeenMarketingFormAPI = async emailAddress => {
  const response = await fetch("https://system-website.api.leasingoptions.co.uk/" + `api/consentforms/hasseenmarketingform?email=${emailAddress}`);
  return Object(apiResponseHelper["a" /* getApiResponse */])(response);
};
const CheckInformationNoticAcceptanceAPI = async (emailAddress, telephone) => {
  const response = await fetch("https://system-website.api.leasingoptions.co.uk/" + `api/bmaccounts/checkinformationnoticacceptance?email=${emailAddress}&telephone=${telephone}`);
  return Object(apiResponseHelper["a" /* getApiResponse */])(response);
};
const VerifySalesPersonAPI = async (salesPersonId, emailAddress, telephone) => {
  const response = await fetch("https://system-website.api.leasingoptions.co.uk/" + `api/bmaccounts/verifysalesperson?salespersonid=${salesPersonId}&email=${emailAddress}&telephone=${telephone}`);
  return Object(apiResponseHelper["a" /* getApiResponse */])(response);
};
const SetToSeenMarketingFormAPI = async emailAddress => {
  const response = await fetch("https://system-website.api.leasingoptions.co.uk/" + `api/consentforms/settoseenmarketingform?email=${emailAddress}`);
  return await response.json();
};
const GetValuationAPI = async payload => {
  const response = await fetch("https://system-website.api.leasingoptions.co.uk/" + `api/valuecars/getvaluation?vrm=${payload.vrm}&mileage=${payload.mileage}&fullName=${payload.fullName}&telephone=${payload.telephone}&email=${payload.email}&postCode=${payload.postCode}`);
  return await response.json();
};
const GetSalesPeopleAPI = async () => {
  const response = await fetch("https://system-website.api.leasingoptions.co.uk/" + `api/salespersons/list`);
  return await response.json();
};
const NewsletterSignupAPI = async (emailAddress, type) => {
  const response = await fetch("https://system-website.api.leasingoptions.co.uk/" + `api/communications/subscribe`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    } // body: {
    //     email: emailAddress,
    //     type: type.toString(),
    // }
    // commented out as breaks the build

  });
  return await response.json();
};
const GetTrustPilotRatingAPI = async () => {
  const response = await fetch("https://system-website.api.leasingoptions.co.uk/" + `api/systemvalues/trustpilotrating`);
  return await response.json();
};
// CONCATENATED MODULE: ./business-logic/systemService.tsx

const GetSalesPeople = async () => {
  return GetSalesPeopleAPI();
};
const VerifySalesPerson = async (salesPersonId, email, telephone) => {
  return VerifySalesPersonAPI(salesPersonId, email, telephone);
};
const CheckInformationNoticAcceptance = async (email, tel) => {
  return CheckInformationNoticAcceptanceAPI(email, tel);
};
const SendPricingFeedback = async pricingFeedback => {
  return SendPricingFeedbackAPI(pricingFeedback);
};
const NewsletterSignup = async (emailAddress, type) => {
  return NewsletterSignupAPI(emailAddress, type);
};
const GetTrustPilotRating = async () => {
  return GetTrustPilotRatingAPI();
};
const GetValuation = async payload => {
  return GetValuationAPI(payload);
};
const HasSeenMarketingForm = async email => {
  return HasSeenMarketingFormAPI(email);
};
const SetToSeenMarketingForm = async email => {
  return SetToSeenMarketingFormAPI(email);
};

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wbKs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "G", function() { return /* binding */ GetStaticMakes; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* binding */ GetMakes; });
__webpack_require__.d(__webpack_exports__, "L", function() { return /* binding */ GetTopVehicles; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* binding */ GetModels; });
__webpack_require__.d(__webpack_exports__, "P", function() { return /* binding */ GetVehicleDenotations; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* binding */ GetManufacturersModels; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* binding */ GetManufacturersModelsGarage; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* binding */ GetModelsTrimsGarage; });
__webpack_require__.d(__webpack_exports__, "N", function() { return /* binding */ GetVehicleAlternativeModels; });
__webpack_require__.d(__webpack_exports__, "Q", function() { return /* binding */ GetVehicleGarage; });
__webpack_require__.d(__webpack_exports__, "V", function() { return /* binding */ GetVehicleModelPreviews; });
__webpack_require__.d(__webpack_exports__, "W", function() { return /* binding */ GetVehiclePreviews; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* binding */ GetRecommendedForModel; });
__webpack_require__.d(__webpack_exports__, "J", function() { return /* binding */ GetTopLoPickVehicles; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* binding */ GetPricingMatrix; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ GetDealData; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* binding */ GetModelReview; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* binding */ GetModelGalleryImages; });
__webpack_require__.d(__webpack_exports__, "U", function() { return /* binding */ GetVehicleModelDealsSummary; });
__webpack_require__.d(__webpack_exports__, "R", function() { return /* binding */ GetVehicleImage; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ GetCapId; });
__webpack_require__.d(__webpack_exports__, "z", function() { return /* binding */ GetSearchResults; });
__webpack_require__.d(__webpack_exports__, "D", function() { return /* binding */ GetSpecialDealContent; });
__webpack_require__.d(__webpack_exports__, "E", function() { return /* binding */ GetSpecialDealPricing; });
__webpack_require__.d(__webpack_exports__, "H", function() { return /* binding */ GetStickerList; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ GetBudgetTo; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ GetBudgetOver; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ GetCategoriesForType; });
__webpack_require__.d(__webpack_exports__, "K", function() { return /* binding */ GetTopSpecialOffers; });
__webpack_require__.d(__webpack_exports__, "F", function() { return /* binding */ GetSpecialOffersGrouped; });
__webpack_require__.d(__webpack_exports__, "S", function() { return /* binding */ GetVehicleInfo; });
__webpack_require__.d(__webpack_exports__, "C", function() { return /* binding */ GetSpecOptions; });
__webpack_require__.d(__webpack_exports__, "X", function() { return /* binding */ GetVehiclePricesDetails; });
__webpack_require__.d(__webpack_exports__, "O", function() { return /* binding */ GetVehicleCheapestPriceTerm; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* binding */ GetExtraOptions; });
__webpack_require__.d(__webpack_exports__, "I", function() { return /* binding */ GetTechOptions; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ GetAvailableMakes; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ GetAvailableShortModels; });
__webpack_require__.d(__webpack_exports__, "ab", function() { return /* binding */ GetVehiclesFilterOptions; });
__webpack_require__.d(__webpack_exports__, "B", function() { return /* binding */ GetShortTermDeals; });
__webpack_require__.d(__webpack_exports__, "A", function() { return /* binding */ GetSeatValues; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* binding */ GetPriceToValues; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* binding */ GetMpgValues; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ GetC02Values; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ GetDriveTrainValues; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ GetEngineSizeValues; });
__webpack_require__.d(__webpack_exports__, "M", function() { return /* binding */ GetTransmissionValues; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* binding */ GetFuelTypesValues; });
__webpack_require__.d(__webpack_exports__, "Y", function() { return /* binding */ GetVehicleSizeValues; });
__webpack_require__.d(__webpack_exports__, "Z", function() { return /* binding */ GetVehicleStyleValues; });
__webpack_require__.d(__webpack_exports__, "T", function() { return /* binding */ GetVehicleMileageValues; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ GetContractValues; });
__webpack_require__.d(__webpack_exports__, "y", function() { return /* binding */ GetRentalValues; });

// UNUSED EXPORTS: GetTrimLevels, GetTopScoredVehicles, GetCategories

// EXTERNAL MODULE: ./enums/VehicleTypes.tsx
var VehicleTypes = __webpack_require__("Ezaw");

// CONCATENATED MODULE: ./helpers/collectionsHelper.tsx
class CollectionsHelper {
  static rentalMonths() {
    return [{
      name: "1 Month",
      id: 1
    }, {
      name: "3 Months",
      id: 3
    }, {
      name: "6 Months",
      id: 6
    }, {
      name: "9 Months",
      id: 9
    }, {
      name: "12 Months",
      id: 12
    }];
  }

  static terms() {
    return [{
      name: "Any",
      id: "",
      isDefault: true
    }, {
      name: "2 Years",
      id: 2
    }, {
      name: "3 Years",
      id: 3
    }, {
      name: "4 Years",
      id: 4
    }];
  }

  static mileages() {
    return [{
      name: "Any",
      id: "",
      isDefault: true
    }, {
      name: "5,000 Miles",
      id: 5000
    }, {
      name: "8,000 Miles",
      id: 8000
    }, {
      name: "10,000 Miles",
      id: 10000
    }, {
      name: "12,000 Miles",
      id: 12000
    }, {
      name: "15,000 Miles",
      id: 15000
    }, {
      name: "20,000 Miles",
      id: 20000
    }, {
      name: "30,000 Miles",
      id: 30000
    }];
  }

  static vehicleStyles() {
    return [{
      name: "Any",
      id: "",
      isDefault: true
    }, {
      name: "Coupe",
      id: 1,
      type: 1
    }, {
      name: "Convertible",
      id: 3,
      type: 1
    }, {
      name: "Hatchback",
      id: 4,
      type: 1
    }, {
      name: "Saloon",
      id: 5,
      type: 1
    }, {
      name: "Estate",
      id: 6,
      type: 1
    }, {
      name: "SUV / Crossover",
      id: 7,
      type: 1
    }, {
      name: "MPV",
      id: 10,
      type: 1
    }, {
      name: "Sports Car",
      id: 11,
      type: 1
    }, {
      name: "Small",
      id: 14,
      type: 2
    }, {
      name: "Medium",
      id: 15,
      type: 2
    }, {
      name: "Large",
      id: 16,
      type: 2
    }, {
      name: "Pickup",
      id: 17,
      type: 2
    }, {
      name: "Crew",
      id: 18,
      type: 2
    }, {
      name: "Dropside",
      id: 19,
      type: 2
    }, {
      name: "Luton",
      id: 20,
      type: 2
    }];
  }

  static vehicleSizes() {
    return [{
      name: "Any",
      id: "",
      isDefault: true
    }, {
      name: "Small",
      id: 1
    }, {
      name: "Medium",
      id: 2
    }, {
      name: "Large",
      id: 3
    }];
  }

  static fuelTypes() {
    return [{
      name: "Any",
      id: "",
      isDefault: true
    }, {
      name: "Diesel",
      id: 2
    }, {
      name: "Petrol",
      id: 1
    }, {
      name: "Electric",
      id: 3
    }, {
      name: "Hybrid",
      id: 4
    }];
  }

  static transmissions() {
    return [{
      name: "Any",
      id: "",
      isDefault: true
    }, {
      name: "Auto",
      id: 2
    }, {
      name: "Manual",
      id: 1
    }];
  }

  static engineSizes() {
    return [{
      name: "Any",
      id: "",
      isDefault: true
    }, {
      name: "< 1 Litre",
      id: "0,998"
    }, {
      name: "1 - 1.3 Litres",
      id: "998,1350"
    }, {
      name: "1.4 - 1.6 Litres",
      id: "1350,1650"
    }, {
      name: "1.7 - 1.9 Litres",
      id: "1650,1950"
    }, {
      name: "2.0 - 2.5 Litres",
      id: "1950,2500"
    }, {
      name: "2.5+ Litres",
      id: "2500,15000"
    }];
  }

  static driveTrains() {
    return [{
      name: "Any",
      id: "",
      isDefault: true
    }, {
      name: "Front Wheel Drive",
      id: "F"
    }, {
      name: "Rear Wheel Drive",
      id: "R"
    }, {
      name: "Four Wheel Drive",
      id: "4"
    }];
  }

  static co2s() {
    return [{
      name: "Any",
      id: "",
      isDefault: true
    }, {
      name: "<0",
      id: 0
    }, {
      name: "<50",
      id: 50
    }, {
      name: "<100",
      id: 100
    }, {
      name: "<150",
      id: 150
    }, {
      name: "<200",
      id: 200
    }, {
      name: "<250",
      id: 250
    }, {
      name: "<300",
      id: 300
    }];
  }

  static mpgs() {
    return [{
      name: "Any",
      id: "",
      isDefault: true
    }, {
      name: "0+",
      id: "",
      isDefault: true
    }, {
      name: "10+",
      id: 10
    }, {
      name: "20+",
      id: 20
    }, {
      name: "30+",
      id: 30
    }, {
      name: "40+",
      id: 40
    }, {
      name: "50+",
      id: 50
    }, {
      name: "60+",
      id: 60
    }, {
      name: "70+",
      id: 70
    }, {
      name: "80+",
      id: 80
    }, {
      name: "90+",
      id: 90
    }, {
      name: "100+",
      id: 100
    }];
  }

  static prices() {
    return [{
      name: "Show me everything",
      id: "",
      isDefault: true
    }, {
      name: "Up to £150",
      id: 150
    }, {
      name: "Up to £200",
      id: 200
    }, {
      name: "Up to £250",
      id: 250
    }, {
      name: "Up to £300",
      id: 300
    }, {
      name: "Up to £350",
      id: 350
    }, {
      name: "Up to £400",
      id: 400
    }, {
      name: "Up to £450",
      id: 450
    }, {
      name: "Up to £500",
      id: 500
    }, {
      name: "Up to £600",
      id: 600
    }, {
      name: "Up to £700",
      id: 700
    }, {
      name: "Up to £800",
      id: 800
    }, {
      name: "Up to £900",
      id: 900
    }, {
      name: "Up to £1000",
      id: 1000
    }, {
      name: "£1000+",
      id: 9999
    }];
  }

  static seats() {
    return [{
      name: "Any",
      id: "",
      isDefault: true
    }, {
      name: "1",
      id: 1
    }, {
      name: "2",
      id: 2
    }, {
      name: "3",
      id: 3
    }, {
      name: "4",
      id: 4
    }, {
      name: "5",
      id: 5
    }, {
      name: "6",
      id: 6
    }, {
      name: "7",
      id: 7
    }, {
      name: "8",
      id: 8
    }, {
      name: "9",
      id: 9
    }];
  }

  static makes() {
    return [{
      "id": "abarth",
      "text": "Abarth",
      "vehicleType": [1]
    }, {
      "id": "alfa-romeo",
      "text": "Alfa Romeo",
      "vehicleType": [1]
    }, // {
    //     "id": "alpine",
    //     "text": "Alpine",
    //     "vehicleType": [1]
    // },
    {
      "id": "audi",
      "text": "Audi",
      "vehicleType": [1]
    }, {
      "id": "bmw",
      "text": "BMW",
      "vehicleType": [1]
    }, {
      "id": "citroen",
      "text": "Citroen",
      "vehicleType": [1, 2]
    }, {
      "id": "cupra",
      "text": "Cupra",
      "vehicleType": [1]
    }, {
      "id": "ds",
      "text": "DS",
      "vehicleType": [1]
    }, {
      "id": "fiat",
      "text": "Fiat",
      "vehicleType": [1, 2]
    }, {
      "id": "ford",
      "text": "Ford",
      "vehicleType": [1, 2]
    }, {
      "id": "honda",
      "text": "Honda",
      "vehicleType": [1]
    }, {
      "id": "hyundai",
      "text": "Hyundai",
      "vehicleType": [1]
    }, {
      "id": "jaguar",
      "text": "Jaguar",
      "vehicleType": [1]
    }, {
      "id": "jeep",
      "text": "Jeep",
      "vehicleType": [1]
    }, {
      "id": "kia",
      "text": "KIA",
      "vehicleType": [1]
    }, {
      "id": "land-rover",
      "text": "Land Rover",
      "vehicleType": [1]
    }, {
      "id": "lexus",
      "text": "Lexus",
      "vehicleType": [1]
    }, {
      "id": "maserati",
      "text": "Maserati",
      "vehicleType": [1]
    }, {
      "id": "mazda",
      "text": "Mazda",
      "vehicleType": [1]
    }, {
      "id": "mercedes-benz",
      "text": "Mercedes-Benz",
      "vehicleType": [1, 2]
    }, {
      "id": "mg-motor-uk",
      "text": "MG Motor UK",
      "vehicleType": [1]
    }, {
      "id": "mini",
      "text": "Mini",
      "vehicleType": [1]
    }, {
      "id": "mitsubishi",
      "text": "Mitsubishi",
      "vehicleType": [1, 2]
    }, {
      "id": "nissan",
      "text": "Nissan",
      "vehicleType": [1, 2]
    }, {
      "id": "peugeot",
      "text": "Peugeot",
      "vehicleType": [1, 2]
    }, {
      "id": "polestar",
      "text": "Polestar",
      "vehicleType": [1]
    }, {
      "id": "porsche",
      "text": "Porsche",
      "vehicleType": [1]
    }, {
      "id": "renault",
      "text": "Renault",
      "vehicleType": [1, 2]
    }, {
      "id": "seat",
      "text": "Seat",
      "vehicleType": [1]
    }, {
      "id": "skoda",
      "text": "Skoda",
      "vehicleType": [1]
    }, {
      "id": "smart",
      "text": "Smart",
      "vehicleType": [1]
    }, {
      "id": "suzuki",
      "text": "Suzuki",
      "vehicleType": [1]
    }, {
      "id": "tesla",
      "text": "Tesla",
      "vehicleType": [1]
    }, {
      "id": "toyota",
      "text": "Toyota",
      "vehicleType": [1, 2]
    }, {
      "id": "vauxhall",
      "text": "Vauxhall",
      "vehicleType": [1, 2]
    }, {
      "id": "volkswagen",
      "text": "Volkswagen",
      "vehicleType": [1, 2]
    }, {
      "id": "volvo",
      "text": "Volvo",
      "vehicleType": [1]
    }];
  }

}

/* harmony default export */ var collectionsHelper = (CollectionsHelper);
// EXTERNAL MODULE: ./enums/PricingTypes.tsx
var PricingTypes = __webpack_require__("5loB");

// EXTERNAL MODULE: ./helpers/stringHelper.tsx
var stringHelper = __webpack_require__("Kj82");

// EXTERNAL MODULE: ./helpers/urlsHelper.tsx
var urlsHelper = __webpack_require__("xVrE");

// EXTERNAL MODULE: ./helpers/apiResponseHelper.tsx
var apiResponseHelper = __webpack_require__("2l32");

// EXTERNAL MODULE: ./environment/siteSettings.tsx
var siteSettings = __webpack_require__("PG61");

// CONCATENATED MODULE: ./API/VehicleAPI.tsx







const queryString = __webpack_require__("Lc87"); // Work out a way to implement cleaner + error handling global approach


const GetMakesAPI = async (vehicleType, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehiclesinfo/info/' + vehicleType + '/manufacturers', fetchHeaders);
  return Object(apiResponseHelper["a" /* getApiResponse */])(res);
};
const GetAllMakesAPI = async fetchHeaders => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehiclesinfo/info/manufacturers', fetchHeaders);
  return Object(apiResponseHelper["a" /* getApiResponse */])(res);
};
const GetVehiclePricesDetailsAPI = async (payload, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicles/getvehiclepricesdetails?' + queryString.stringify(payload), fetchHeaders);
  return Object(apiResponseHelper["a" /* getApiResponse */])(res);
};
const GetVehicleCheapestPriceTermAPI = async (vehicleRef, leasingDealType, maintenance, mileage, initialRentalMonths, pricingData, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicles/vehicle/' + vehicleRef + "/" + leasingDealType + "/" + maintenance + "/" + mileage + "/" + initialRentalMonths + "/cheapestpriceterm?" + queryString.stringify(pricingData), fetchHeaders);
  return Object(apiResponseHelper["a" /* getApiResponse */])(res);
};
const getTopVehiclesAPI = async (leaseDealType, take, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/advertisevehicles/gettopvehicles?leasingDealType=' + leaseDealType + '&take=' + take, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetModelsAPI = async (vehicleType, manufacturerUrl, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehiclesinfo/info/' + vehicleType + '/' + manufacturerUrl + '/shortmodels', fetchHeaders);
  const data = await res.json();
  return data;
};
const GetManufacturersModelsAPI = async fetchHeaders => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehiclesinfo/info/manufacturers/models', fetchHeaders);
  const data = await res.json();
  return data;
};
const GetManufacturersModelsGarageAPI = async (vehicleType, manufacturerUrl, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehiclesinfo/info/' + vehicleType + '/' + manufacturerUrl + '/models', fetchHeaders);
  const data = await res.json();
  return data;
};
const GetModelsTrimsGarageAPI = async (vehicleType, manufacturerUrl, shortModTextUrl, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehiclesinfo/info/' + vehicleType + '/' + manufacturerUrl + '/' + shortModTextUrl + '/derivatives', fetchHeaders);
  return Object(apiResponseHelper["a" /* getApiResponse */])(res);
};
const GetTrimLevelsAPI = async (vehicleType, manufacturerUrl, shortModTextUrl, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehiclesinfo/info/' + vehicleType + '/' + manufacturerUrl + '/' + shortModTextUrl + '/trimlevels', fetchHeaders);
  const data = await res.json();
  return data;
};
const GetVehicleAlternativeModelsAPI = async (vehicleType, manufacturerUrl, shortModTextUrl, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehiclesinfo/info/' + vehicleType + '/' + manufacturerUrl + '/' + shortModTextUrl + '/alternativemodels?take=10', fetchHeaders);
  const data = await res.json();
  return data;
};
const GetVehicleGarageAPI = async (vehicleRef, leaseDealType, options, fetchHeaders) => {
  let url = "https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicles/vehicle/' + vehicleRef + '/' + leaseDealType + '/customized';

  if (options) {
    url += "?" + queryString.stringify(options, {
      skipNull: true
    });
  }

  const res = await fetch(url, fetchHeaders);
  return Object(apiResponseHelper["a" /* getApiResponse */])(res);
};
const GetCapIdAPI = async (manufacturerUrl, modelUrl, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicles/getvehiclecapid?manufacturerUrl=' + manufacturerUrl + '&shortModelUrl=' + modelUrl + '&modelUrl=', fetchHeaders);
  const data = await res.json();
  return data;
};
const GetVehicleModelPreviewsAPI = async (vehiclesFilter, paginationCriteria, sortingCriteria, fetchHeaders) => {
  let url = "https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicles/getvehiclemodelpreviews?' + queryString.stringify(vehiclesFilter, {
    skipNull: true
  });

  if (paginationCriteria) {
    url += "&" + queryString.stringify(paginationCriteria, {
      skipNull: true
    });
  }

  if (sortingCriteria) {
    url += "&" + queryString.stringify(sortingCriteria, {
      skipNull: true
    });
  }

  const res = await fetch(url, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetVehiclePreviewsAPI = async (vehiclesFilter, paginationCriteria, sortingCriteria, fetchHeaders) => {
  let url = "https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicles/getvehiclepreviews?' + queryString.stringify(vehiclesFilter, {
    skipNull: true
  }, fetchHeaders);

  if (paginationCriteria) {
    url += "&" + queryString.stringify(paginationCriteria, {
      skipNull: true
    });
  }

  if (sortingCriteria) {
    url += "&" + queryString.stringify(sortingCriteria, {
      skipNull: true
    });
  }

  const res = await fetch(url, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetRecommendedForModelAPI = async (pricingType, postcode, vehicleType, leaseDealType, manufacturerUrl, modelUrl, fetchHeaders) => {
  let mileage = siteSettings["a" /* SiteSettings */].GetVehicleTypeDefaultMileage(vehicleType);
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/advertisevehicles/getrecommendedformodel?pricingType=' + pricingType + '&postcode=' + postcode + '&vehicleType=' + vehicleType + '&leasingDealType=' + leaseDealType + '&initialRentals=6&mileage=' + mileage + '&maintenance=false&manufacturerUrl=' + manufacturerUrl + '&shortModTextUrl=' + modelUrl, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetTopLoPickVehiclesAPI = async (vehicleType, manufacturerUrl, pricingType, postcode, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/advertisevehicles/gettoplopickvehicles?pricingType=' + pricingType + '&postcode=' + postcode + '&vehicleType=' + vehicleType + '&manufacturer=' + manufacturerUrl, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetTopScoredVehiclesAPI = async (pricingType, vehicleType, postcode, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/advertisevehicles/gettopscoredvehicles?pricingType=' + pricingType + '&vehicleType=' + vehicleType + '&postcode=' + postcode, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetVehicleDenotationsAPI = async (manufacturerUrl, modelUrl = null, maintenance = null, fetchHeaders) => {
  // implement generic approach for query params next
  var obj = {
    modelUrl: modelUrl,
    maintenance: maintenance
  };
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicles/vehicledenotations/' + manufacturerUrl + "?" + queryString.stringify(obj), fetchHeaders);
  const data = await res.json();
  return data;
};
const GetTopSpecialOffersAPI = async (vehicleType, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/advertisevehicles/gettopspecialoffers?vehicleType=' + vehicleType, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetSpecialOffersGroupedAPI = async (vehicleType, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/specialoffers/grouped/' + vehicleType, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetPricingMatrixAPI = async (vehicleRef, pricingType, postcode, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicles/vehicle/' + vehicleRef + '/pricingmatrix?pricingType=' + pricingType + '&postcode=' + postcode, fetchHeaders);
  return Object(apiResponseHelper["a" /* getApiResponse */])(res);
};
const GetDealDataAPI = async (vehicleRef, term, mileage, initialRentalMonths, dealType, maintenance, pricingType, postcode, fetchHeaders) => {
  const url = "https://vehicle-website.api.leasingoptions.co.uk/" + `api/vehicles/vehicle/${vehicleRef}/${dealType}/deal?term=${term}&mileage=${mileage}&initialRentalMonths=${initialRentalMonths}&maintenance=${maintenance}&pricingType=${pricingType}&postcode=${postcode}`;
  const res = await fetch(url, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetModelReviewAPI = async (vehicleType, manufacturerUrl, shortModelUrl, modelUrl = null, fetchHeaders) => {
  let url = "https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicles/vehicle/' + vehicleType + '/' + manufacturerUrl + '/' + shortModelUrl + '/review';

  if (!Object(stringHelper["c" /* isNullOrWhiteSpace */])(modelUrl)) {
    url += "?model=" + modelUrl;
  }

  const res = await fetch(url, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetModelGalleryImagesAPI = async (vehicleType, capId, width, height, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicleimages/info/' + vehicleType + '/' + capId + '/' + width + '/' + height + '/gallery', fetchHeaders);
  const data = await res.json();
  return data;
};
const GetVehicleModelDealsSummaryAPI = async (manufacturerUrl, modelUrl, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicles/vehicle/' + manufacturerUrl + '/' + modelUrl + '/dealssummary', fetchHeaders);
  const data = await res.json();
  return data;
};
const GetVehicleImageAPI = async (vehicleType, capId, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicleimages/info/' + vehicleType + '/' + capId + '/image', fetchHeaders);
  const data = await res.json();
  return data;
};
const GetVehicleInfoAPI = async (vehicleRef, pricingType = null, postcode = null, includeImages = false, includePriceRanges = false, fetchHeaders) => {
  let url = "https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicles/vehiclebase/' + vehicleRef;

  if (includeImages || includePriceRanges) {
    let obj = {
      images: includeImages ? "true" : "false",
      priceRanges: includePriceRanges ? "true" : "false"
    };
    url += "?" + queryString.stringify(obj);
  }

  let queryParts = [];

  if (pricingType && (pricingType === PricingTypes["a" /* PricingTypes */].Atc || pricingType === PricingTypes["a" /* PricingTypes */].Standard)) {
    queryParts.push(`pricingtype=${pricingType}`);
  }

  if (!Object(stringHelper["c" /* isNullOrWhiteSpace */])(postcode)) {
    queryParts.push(`postcode=${postcode}`);
  }

  url = Object(urlsHelper["d" /* getUrl */])(url, queryParts);
  const res = await fetch(url, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetSpecOptionsAPI = async (vehicleType, capId, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/capvehicles/vehicle/' + vehicleType + '/' + capId + '/groupedspecifications', fetchHeaders);
  return Object(apiResponseHelper["a" /* getApiResponse */])(res);
};
const GetExtraOptionsAPI = async (vehicleType, capId, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/capvehicles/vehicle/' + vehicleType + '/' + capId + '/groupedextraoptions', fetchHeaders);
  return Object(apiResponseHelper["a" /* getApiResponse */])(res);
};
const GetTechOptionsAPI = async (vehicleType, capId, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/capvehicles/vehicle/' + vehicleType + '/' + capId + '/groupedtechdata', fetchHeaders);
  return Object(apiResponseHelper["a" /* getApiResponse */])(res);
};
const GetAvailableMakesAPI = async (pricingType, postCode, leaseDealType, vehicleType, term, initialRentals, mileage, fuelType, transmission, co2, mpg, doors, seats, driveTrain, vehicleSize, vehicleStyle, engineSize, priceFrom, priceTo, isInStock, isSpecial, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicles/availablemakes?pricingType=' + pricingType + '&postcode=' + postCode + '&leasingDealType=' + leaseDealType + '&vehicleType=' + vehicleType + '&term=' + term + '&initialRentals=' + initialRentals + '&mileage=' + mileage + '&fuelType=' + fuelType + '&transmission=' + transmission + '&co2=' + co2 + '&mpg=' + mpg + '&doors=' + doors + '&seats=' + seats + '&driveTrain=' + driveTrain + '&vehicleSize=' + vehicleSize + '&vehicleStyle=' + vehicleStyle + '&engineSize=' + engineSize + '&priceFrom=' + priceFrom + '&priceTo=' + priceTo + '&isInStock=' + isInStock + '&isSpecial=' + isSpecial, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetAvailableShortModelsAPI = async (vehiclesFilter, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicles/availableshortmodels?' + queryString.stringify(vehiclesFilter, {
    skipNull: true
  }, fetchHeaders));
  const data = await res.json();
  return data;
};
const GetVehiclesFilterOptionsAPI = async (leaseDealType, vehicleType, manufacturerUrl, modelUrl, shortDerTextUrl, term, initialRentals, mileage, fuelType, transmission, co2, mpg, doors, seats, driveTrain, vehicleSize, vehicleStyle, engineSize, priceFrom, priceTo, isInStock, isSpecial, pricingType, postCode, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/vehicles/getvehiclesfilteroptions?pricingType=' + pricingType + '&postcode=' + postCode + '&leasingDealType=' + leaseDealType + '&vehicleType=' + vehicleType + '&manufacturerUrl=' + manufacturerUrl + '&shortModTextUrl=' + modelUrl + '&shortDerTextUrl=' + shortDerTextUrl + '&term=' + term + '&initialRentals=' + initialRentals + '&mileage=' + mileage + '&fuelType=' + fuelType + '&transmission=' + transmission + '&co2=' + co2 + '&mpg=' + mpg + '&doors=' + doors + '&seats=' + seats + '&driveTrain=' + driveTrain + '&vehicleSize=' + vehicleSize + '&vehicleStyle=' + vehicleStyle + '&engineSize=' + engineSize + '&priceFrom=' + priceFrom + '&priceTo=' + priceTo + '&isInStock=' + isInStock + '&isSpecial=' + isSpecial, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetShortTermDealsAPI = async (vehicleType, leaseDealType, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + '/api/shorttermdeals/list?filter[vehicleType]=' + vehicleType + '&filter[leasingDealType]=' + leaseDealType, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetSearchResultsAPI = async (searchQuery, isInternal = false, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + `api/vehicles/search/${searchQuery}?isInternal=${isInternal}`, fetchHeaders);
  const data = await res.json();
  return data;
};
const GetSpecialDealContentAPI = async (id, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/specialdeals/get/' + id + '/content', fetchHeaders);
  const data = await res.json();
  return data;
};
const GetSpecialDealPricingAPI = async (id, fetchHeaders) => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/specialdeals/get/' + id + '/pricing', fetchHeaders);
  return Object(apiResponseHelper["a" /* getApiResponse */])(res);
};
const GetStickerListAPI = async fetchHeaders => {
  const res = await fetch("https://vehicle-website.api.leasingoptions.co.uk/" + 'api/stickers/list', fetchHeaders);
  const data = await res.json();
  return data;
};
const GetSeatValuesAPI = () => {
  return collectionsHelper.seats();
};
const GetPriceToValuesAPI = () => {
  return collectionsHelper.prices();
};
const GetMpgValuesAPI = () => {
  return collectionsHelper.mpgs();
};
const GetC02ValuesAPI = () => {
  return collectionsHelper.co2s();
};
const GetDriveTrainValuesAPI = () => {
  return collectionsHelper.driveTrains();
};
const GetEngineSizeValuesAPI = () => {
  return collectionsHelper.engineSizes();
};
const GetTransmissionValuesAPI = () => {
  return collectionsHelper.transmissions();
};
const GetFuelTypesValuesAPI = () => {
  return collectionsHelper.fuelTypes();
};
const GetVehicleSizeValuesAPI = () => {
  return collectionsHelper.vehicleSizes();
};
const GetVehicleStyleValuesAPI = () => {
  return collectionsHelper.vehicleStyles();
};
const GetVehicleMileageValuesAPI = () => {
  return collectionsHelper.mileages();
};
const GetContractValuesAPI = () => {
  return collectionsHelper.terms();
};
const GetRentalValuesAPI = () => {
  return collectionsHelper.rentalMonths();
};
// CONCATENATED MODULE: ./business-logic/vehicleService.tsx



const GetStaticMakes = vehicleType => {
  return collectionsHelper.makes().filter(x => x.vehicleType.includes(vehicleType)).map(item => ({
    id: item.id,
    text: item.text
  }));
};
const GetMakes = async (vehicleType, fetchHeaders) => {
  return GetMakesAPI(vehicleType, fetchHeaders);
};
const GetTopVehicles = async (leasingDealType, take, fetchHeaders) => {
  return getTopVehiclesAPI(leasingDealType, take, fetchHeaders);
};
const GetModels = async (vehicleType, manufacturerUrl, fetchHeaders) => {
  return GetModelsAPI(vehicleType, manufacturerUrl, fetchHeaders);
};
const GetVehicleDenotations = async (manufacturerUrl, modelUrl = null, maintenance = null, fetchHeaders) => {
  return GetVehicleDenotationsAPI(manufacturerUrl, modelUrl, maintenance, fetchHeaders);
};
const GetManufacturersModels = async fetchHeaders => {
  return GetManufacturersModelsAPI(fetchHeaders);
};
const GetManufacturersModelsGarage = async (vehicleType, manufacturerUrl, fetchHeaders) => {
  return GetManufacturersModelsGarageAPI(vehicleType, manufacturerUrl, fetchHeaders);
};
const GetModelsTrimsGarage = async (vehicleType, manufacturerUrl, shortModTextUrl, fetchHeaders) => {
  return GetModelsTrimsGarageAPI(vehicleType, manufacturerUrl, shortModTextUrl, fetchHeaders);
};
const GetTrimLevels = async (vehicleType, manufacturerUrl, shortModTextUrl, fetchHeaders) => {
  return GetTrimLevelsAPI(vehicleType, manufacturerUrl, shortModTextUrl, fetchHeaders);
};
const GetVehicleAlternativeModels = async (vehicleType, manufacturerUrl, shortModTextUrl, fetchHeaders) => {
  return GetVehicleAlternativeModelsAPI(vehicleType, manufacturerUrl, shortModTextUrl, fetchHeaders);
};
const GetVehicleGarage = async (vehicleRef, leaseDealType, options, fetchHeaders) => {
  return GetVehicleGarageAPI(vehicleRef, leaseDealType, options, fetchHeaders);
};
const GetVehicleModelPreviews = async (vehiclesFilter, paginationCriteria, sortingCriteria, fetchHeaders) => {
  return GetVehicleModelPreviewsAPI(vehiclesFilter, paginationCriteria, sortingCriteria, fetchHeaders);
};
const GetVehiclePreviews = async (vehiclesFilter, paginationCriteria, sortingCriteria, fetchHeaders) => {
  return GetVehiclePreviewsAPI(vehiclesFilter, paginationCriteria, sortingCriteria, fetchHeaders);
};
const GetRecommendedForModel = async (pricingType, postcode, vehicleType, leaseDealType, manufacturerUrl, modelUrl, fetchHeaders) => {
  return GetRecommendedForModelAPI(pricingType, postcode, vehicleType, leaseDealType, manufacturerUrl, modelUrl, fetchHeaders);
};
const GetTopLoPickVehicles = async (vehicleType, manufacturerUrl, pricingType, postcode, fetchHeaders) => {
  return GetTopLoPickVehiclesAPI(vehicleType, manufacturerUrl, pricingType, postcode, fetchHeaders);
};
const GetTopScoredVehicles = async (pricingType, vehicleType, postcode, fetchHeaders) => {
  return GetTopScoredVehiclesAPI(pricingType, vehicleType, postcode, fetchHeaders);
};
const GetPricingMatrix = async (vehicleRef, pricingType, postcode, fetchHeaders) => {
  return GetPricingMatrixAPI(vehicleRef, pricingType, postcode, fetchHeaders);
};
const GetDealData = async (vehicleRef, term, mileage, initialRentalMonths, leasingDealType, maintenance, pricingType, postcode, fetchHeaders) => {
  return GetDealDataAPI(vehicleRef, term, mileage, initialRentalMonths, leasingDealType, maintenance, pricingType, postcode, fetchHeaders);
};
const GetModelReview = async (vehicleType, manufacturerUrl, shortModelUrl, modelUrl = null, fetchHeaders) => {
  return GetModelReviewAPI(vehicleType, manufacturerUrl, shortModelUrl, modelUrl, fetchHeaders);
};
const GetModelGalleryImages = async (vehicleType, capId, width, height, fetchHeaders) => {
  return GetModelGalleryImagesAPI(vehicleType, capId, width, height, fetchHeaders);
};
const GetVehicleModelDealsSummary = async (manufacturerUrl, modelUrl, fetchHeaders) => {
  return GetVehicleModelDealsSummaryAPI(manufacturerUrl, modelUrl, fetchHeaders);
};
const GetVehicleImage = async (vehicleType, capId, fetchHeaders) => {
  return GetVehicleImageAPI(vehicleType, capId, fetchHeaders);
};
const GetCapId = async (manufacturerUrl, modelUrl, fetchHeaders) => {
  return GetCapIdAPI(manufacturerUrl, modelUrl, fetchHeaders);
};
const GetSearchResults = async (searchQuery, isInternal = false, fetchHeaders) => {
  return GetSearchResultsAPI(searchQuery, isInternal, fetchHeaders);
};
const GetSpecialDealContent = async (id, fetchHeaders) => {
  return GetSpecialDealContentAPI(id, fetchHeaders);
};
const GetSpecialDealPricing = async (id, fetchHeaders) => {
  return GetSpecialDealPricingAPI(id, fetchHeaders);
};
const GetStickerList = async fetchHeaders => {
  return GetStickerListAPI(fetchHeaders);
};
const GetBudgetTo = () => {
  return [150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000];
};
const GetBudgetOver = () => {
  return [1000];
};
const GetCategories = () => {
  // Potentially split into two consts by type
  const vehicleCategories = [{
    type: VehicleTypes["a" /* VehicleTypes */].Car,
    name: "Coupe",
    id: 1
  }, {
    type: VehicleTypes["a" /* VehicleTypes */].Car,
    name: "Convertible / Cabriolet",
    id: 3
  }, {
    type: VehicleTypes["a" /* VehicleTypes */].Car,
    name: "Hatchback",
    id: 4
  }, {
    type: VehicleTypes["a" /* VehicleTypes */].Car,
    name: "Saloon",
    id: 5
  }, {
    type: VehicleTypes["a" /* VehicleTypes */].Car,
    name: "Estate",
    id: 6
  }, {
    type: VehicleTypes["a" /* VehicleTypes */].Car,
    name: "SUV / Crossover",
    id: 7
  }, {
    type: VehicleTypes["a" /* VehicleTypes */].Car,
    name: "MPV",
    id: 10
  }, {
    type: VehicleTypes["a" /* VehicleTypes */].Car,
    name: "Sports Car",
    id: 11
  }, {
    type: VehicleTypes["a" /* VehicleTypes */].Commercial,
    name: "Small",
    id: 14
  }, {
    type: VehicleTypes["a" /* VehicleTypes */].Commercial,
    name: "Medium",
    id: 15
  }, {
    type: VehicleTypes["a" /* VehicleTypes */].Commercial,
    name: "Large",
    id: 16
  }, {
    type: VehicleTypes["a" /* VehicleTypes */].Commercial,
    name: "Pickup",
    id: 17
  }, {
    type: VehicleTypes["a" /* VehicleTypes */].Commercial,
    name: "Crew",
    id: 18
  }, {
    type: VehicleTypes["a" /* VehicleTypes */].Commercial,
    name: "Dropside",
    id: 19
  }, {
    type: VehicleTypes["a" /* VehicleTypes */].Commercial,
    name: "Luton",
    id: 20
  }];
  return vehicleCategories;
};
const GetCategoriesForType = vehicleType => {
  if (vehicleType) {
    var applicableCategories = GetCategories().filter(function (category) {
      return category.type === vehicleType;
    });
    return applicableCategories;
  }

  return null;
};
const GetTopSpecialOffers = async (vehicleType, fetchHeaders) => {
  return GetTopSpecialOffersAPI(vehicleType, fetchHeaders);
};
const GetSpecialOffersGrouped = async (vehicleType, fetchHeaders) => {
  return GetSpecialOffersGroupedAPI(vehicleType, fetchHeaders);
};
const GetVehicleInfo = async (vehicleRef, pricingType = null, postcode = null, includeImages = false, includePriceRanges = false, fetchHeaders) => {
  return GetVehicleInfoAPI(vehicleRef, pricingType, postcode, includeImages, includePriceRanges, fetchHeaders);
};
const GetSpecOptions = async (vehicleRef, capId, fetchHeaders) => {
  return GetSpecOptionsAPI(vehicleRef, capId, fetchHeaders);
};
const GetVehiclePricesDetails = async (options, fetchHeaders) => {
  return GetVehiclePricesDetailsAPI(options, fetchHeaders);
};
const GetVehicleCheapestPriceTerm = async (vehicleRef, leasingDealType, maintenance, mileage, initialRentalMonths, pricingData, fetchHeaders) => {
  return GetVehicleCheapestPriceTermAPI(vehicleRef, leasingDealType, maintenance, mileage, initialRentalMonths, pricingData, fetchHeaders);
};
const GetExtraOptions = async (vehicleRef, capId, fetchHeaders) => {
  return GetExtraOptionsAPI(vehicleRef, capId, fetchHeaders);
};
const GetTechOptions = async (vehicleRef, capId, fetchHeaders) => {
  return GetTechOptionsAPI(vehicleRef, capId, fetchHeaders);
}; //TODO: put all params into single object

const GetAvailableMakes = async (leaseDealType, vehicleType, term, initialRentals, mileage, fuelType, transmission, co2, mpg, doors, seats, driveTrain, vehicleSize, vehicleStyle, engineSize, priceFrom, priceTo, isInStock, isSpecial, pricingType = null, postcode = null, fetchHeaders) => {
  return GetAvailableMakesAPI(pricingType, postcode, leaseDealType, vehicleType, term, initialRentals, mileage, fuelType, transmission, co2, mpg, doors, seats, driveTrain, vehicleSize, vehicleStyle, engineSize, priceFrom, priceTo, isInStock, isSpecial, fetchHeaders);
};
const GetAvailableShortModels = async (vehiclesFilter, fetchHeaders) => {
  return GetAvailableShortModelsAPI(vehiclesFilter, fetchHeaders);
}; //TODO: put all params into single object

const GetVehiclesFilterOptions = async (leaseDealType, vehicleType, manufacturerUrl, modelUrl, shortDerTextUrl, term, initialRentals, mileage, fuelType, transmission, co2, mpg, doors, seats, driveTrain, vehicleSize, vehicleStyle, engineSize, priceFrom, priceTo, isInStock, isSpecial, pricingType = null, postcode = null, fetchHeaders) => {
  return GetVehiclesFilterOptionsAPI(leaseDealType, vehicleType, manufacturerUrl, modelUrl, shortDerTextUrl, term, initialRentals, mileage, fuelType, transmission, co2, mpg, doors, seats, driveTrain, vehicleSize, vehicleStyle, engineSize, priceFrom, priceTo, isInStock, isSpecial, pricingType, postcode, fetchHeaders);
};
const GetShortTermDeals = async (vehicleType, leaseDealType, fetchHeaders) => {
  return GetShortTermDealsAPI(vehicleType, leaseDealType, fetchHeaders);
};
const GetSeatValues = () => {
  return GetSeatValuesAPI();
};
const GetPriceToValues = () => {
  return GetPriceToValuesAPI();
};
const GetMpgValues = () => {
  return GetMpgValuesAPI();
};
const GetC02Values = () => {
  return GetC02ValuesAPI();
};
const GetDriveTrainValues = () => {
  return GetDriveTrainValuesAPI();
};
const GetEngineSizeValues = () => {
  return GetEngineSizeValuesAPI();
};
const GetTransmissionValues = () => {
  return GetTransmissionValuesAPI();
};
const GetFuelTypesValues = () => {
  return GetFuelTypesValuesAPI();
};
const GetVehicleSizeValues = () => {
  return GetVehicleSizeValuesAPI();
};
const GetVehicleStyleValues = () => {
  return GetVehicleStyleValuesAPI();
};
const GetVehicleMileageValues = () => {
  return GetVehicleMileageValuesAPI();
};
const GetContractValues = () => {
  return GetContractValuesAPI();
};
const GetRentalValues = () => {
  return GetRentalValuesAPI();
};

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xVrE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFriendlyUrlSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getQueryParams; });
/* harmony import */ var _stringHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Kj82");

const getBaseUrl = url => {
  let result = null;

  if (!Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* isNullOrWhiteSpace */ "c"])(url)) {
    result = url;
    const splitIdx = result.indexOf('?');

    if (splitIdx !== -1) {
      result = result.substring(0, splitIdx);
    }
  }

  return result;
};
const getFriendlyUrlSegment = value => {
  if (value == null || value == undefined) {
    return value;
  }

  let result = value.toString().toLowerCase();
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, " ", "-");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, ",", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, ".", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "#", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "'", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "\"", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "&", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "%", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "!", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "\"", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "?", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "(", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, ")", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, ":", "-");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "�", "-");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "_", "-");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "��", "-");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "�", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "�", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "/", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "\\", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "[", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "]", "");
  result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "+", "-");

  while (result.includes("--")) {
    result = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* replaceAll */ "e"])(result, "--", "-");
  } // result = result.trim('-', '_')


  return result;
};
const getUrl = (baseUrl, queryParams) => {
  let result = null;

  if (!Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* isNullOrWhiteSpace */ "c"])(baseUrl)) {
    result = baseUrl;

    if (queryParams && queryParams.length > 0) {
      result += (result.indexOf('?') === -1 ? '?' : '&') + Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* joinNotEmpty */ "d"])("&", queryParams);
    }
  }

  return result;
};
const getQueryParams = function (queryStringParts) {
  if (!queryStringParts || queryStringParts.length === 0) return {};
  let result = {};

  for (let i = 0; i < queryStringParts.length; ++i) {
    let param = queryStringParts[i].split('=', 2);

    if (param.length === 1) {
      result[param[0].toLowerCase()] = "";
    } else {
      result[param[0].toLowerCase()] = decodeURIComponent(param[1].replace(/\+/g, " "));
    }
  }

  return result;
};

/***/ }),

/***/ "yjly":
/***/ (function(module, exports) {



/***/ }),

/***/ "zbtU":
/***/ (function(module, exports) {

module.exports = require("ouibounce");

/***/ }),

/***/ "zjkP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GetCanonicalUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GetNonAmpCanonicalUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return GetVehiclesSearchUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return GetVehicleManufacturerUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GetShortModelUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GetDynamicShortModelUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GetNewsTypeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GetAdviceCategoryUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GetAdviceTagUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetAdviceArticleUrl; });
/* unused harmony export BodyTypeUrlLeasingDeal */
/* unused harmony export ShortTermLeasing */
/* unused harmony export InStockUrlLeasingType */
/* unused harmony export BudgetToUrlLeasingType */
/* unused harmony export BudgetFromUrlLeasingDealType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BudgetToUrlVehicleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BudgetFromUrlVehicleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyTypeUrlVehicleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return InStockUrlVehicleType; });
/* unused harmony export GetVehicleUrlTemplate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return GetVehicleUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GetDynamicVehicleUrl; });
/* unused harmony export GetVehicleTypeUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GetBaseVehicleTypeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GetDealTypeUrl; });
/* unused harmony export GetAtcUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GetThankYouPageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return GetVehicleTypeFromUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CheckAtcUrl; });
/* unused harmony export CheckCarUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CheckVanUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GetSearchFiltersUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GetFullUrlPath; });
/* harmony import */ var enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ezaw");
/* harmony import */ var enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("l7ai");
/* harmony import */ var _stringHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Kj82");
/* harmony import */ var _urlsHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xVrE");





const queryString = __webpack_require__("Lc87");

const GetCanonicalUrl = relativePath => {
  return "https://www.leasingoptions.co.uk" + (!Object(_stringHelper__WEBPACK_IMPORTED_MODULE_2__[/* isNullOrWhiteSpace */ "c"])(relativePath) && relativePath !== "/" ? relativePath : "");
};
const GetNonAmpCanonicalUrl = relativePath => {
  if (true) {
    return relativePath.replace("/amp", "");
  } else {}
};
const GetVehiclesSearchUrl = (leasingDealType, userPostcode, trailingPart = null) => {
  if (userPostcode) {
    return GetAtcUrl(leasingDealType, userPostcode, "/search");
  } else {
    let vehicleTemplateUrl = GetVehicleUrlTemplate(leasingDealType).toLowerCase();

    if (vehicleTemplateUrl.includes("?")) {
      var fullUrl = vehicleTemplateUrl.split('?');
      var startUrl = fullUrl[0];
      var endUrl = fullUrl[1];
      return startUrl + "/search?" + endUrl + (trailingPart ? "&" + trailingPart : '');
    } else {
      return vehicleTemplateUrl + "/search" + (trailingPart ? "?" + trailingPart : '');
    }
  }
};
const GetVehicleManufacturerUrl = (isATC, userPostcode, leasingDealType, manufacturer) => {
  if (isATC && userPostcode) {
    return GetAtcUrl(leasingDealType, userPostcode, "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(manufacturer));
  } else {
    return GetDealTypeUrl(leasingDealType, "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(manufacturer));
  }
};
const GetShortModelUrl = (isATC, userPostcode, leasingDealType, manufacturer, shortModText, vehicleFilters) => {
  let baseUrl = '';
  let queryParams = [];

  if (isATC && userPostcode) {
    baseUrl = GetAtcUrl(leasingDealType, userPostcode, "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(manufacturer) + "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(shortModText));
  } else {
    baseUrl = GetDealTypeUrl(leasingDealType, "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(manufacturer) + "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(shortModText));
  }

  return Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getUrl */ "d"])(baseUrl, GetQueryParamsFromFilter(vehicleFilters));
};
const GetDynamicShortModelUrl = (isATC, userPostcode, leasingDealType, vehicleFilters) => {
  let baseUrl = '';
  let queryParams = [];

  if (isATC && userPostcode) {
    baseUrl = GetAtcUrl(leasingDealType, userPostcode, "/[make]/[shortModel]");
  } else {
    baseUrl = GetDealTypeUrl(leasingDealType, "/[make]/[shortModel]");
  }

  return Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getUrl */ "d"])(baseUrl, GetQueryParamsFromFilter(vehicleFilters));
};
const GetNewsTypeUrl = newsType => {
  var newsTypeUrl = Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(newsType).trim();

  if (newsTypeUrl) {
    return "/news/" + newsTypeUrl;
  }

  return null;
};
const GetAdviceCategoryUrl = categoryUrl => {
  return "/advice/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(categoryUrl).toLowerCase();
};
const GetAdviceTagUrl = tagUrl => {
  return "/advice/tag-" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(tagUrl).toLowerCase();
};
const GetAdviceArticleUrl = (categoryUrl, articleUrl) => {
  return ("/advice/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(categoryUrl) + "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(articleUrl)).toLowerCase();
};
const BodyTypeUrlLeasingDeal = (leasingDealType, bodyType) => {
  return GetDealTypeUrl(leasingDealType, "/body-type-" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(bodyType.toString()));
};
const ShortTermLeasing = leasingDealType => {
  return GetDealTypeUrl(leasingDealType, "/short-term");
};
const InStockUrlLeasingType = leasingDealType => {
  return GetDealTypeUrl(leasingDealType, "/in-stock");
};
const BudgetToUrlLeasingType = (leasingDealType, budget) => {
  return GetDealTypeUrl(leasingDealType, "/budget/" + budget);
};
const BudgetFromUrlLeasingDealType = (leasingDealType, budget) => {
  return GetDealTypeUrl(leasingDealType, "/budget-over/" + budget);
};
const BudgetToUrlVehicleType = (vehicleType, budget) => {
  return GetVehicleTypeUrl(vehicleType, "/budget/" + budget);
};
const BudgetFromUrlVehicleType = (vehicleType, budget) => {
  return GetVehicleTypeUrl(vehicleType, "/budget-over/" + budget);
};
const BodyTypeUrlVehicleType = (vehicleType, bodyType) => {
  return GetVehicleTypeUrl(vehicleType, "/body-type/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(bodyType.toString()));
};
const InStockUrlVehicleType = vehicleType => {
  return GetVehicleTypeUrl(vehicleType, "/in-stock");
};
const GetVehicleUrlTemplate = leasingDealType => {
  var result = "/" + (leasingDealType == enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_1__[/* LeasingDealTypes */ "a"].Van ? "van" : "car") + "-leasing";

  if (leasingDealType == enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_1__[/* LeasingDealTypes */ "a"].Business) {
    result += "?leasingdeal=business";
  }

  return result.toLowerCase();
};
const GetVehicleUrl = (isATC, userPostcode, leasingDealType, manufacturer, shortModText, model, derivative, vehicleref, mileage, rentals, term, isDefault = false, isInternal = false) => {
  let url = "";

  if (isATC && userPostcode) {
    url = GetAtcUrl(leasingDealType, userPostcode, "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(manufacturer) + "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(shortModText) + "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(model) + "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(derivative) + "/" + vehicleref + "/vehicle");
  } else {
    url = GetDealTypeUrl(leasingDealType, "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(manufacturer) + "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(shortModText) + "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(model) + "/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(derivative) + "/" + vehicleref + "/vehicle");
  }

  if (mileage || rentals || term || isDefault || isInternal) {
    if (!url.includes('?')) {
      url += "?";
    }

    if (mileage && rentals && term) {
      url += '&' + queryString.stringify({
        mileage,
        rentals,
        term
      });
    }

    if (isInternal) {
      url += "&isInternal=1";
    }

    if (isDefault) {
      url += "&isDefault=1";
    }
  }

  return url.toLowerCase();
};
const GetDynamicVehicleUrl = (isATC, userPostcode, leasingDealType) => {
  let url = "";

  if (isATC && userPostcode) {
    url = GetAtcUrl(leasingDealType, userPostcode, "/[make]/[shortModel]/[model]/[derivative]/[vehicleRef]/vehicle");
  } else {
    url = GetDealTypeUrl(leasingDealType, "/[make]/[shortModel]/[model]/[derivative]/[vehicleRef]/vehicle");
  }

  return url;
};
const GetVehicleTypeUrl = (vehicleType, trailingPart = null) => {
  var result = GetBaseVehicleTypeUrl(vehicleType);

  if (!Object(_stringHelper__WEBPACK_IMPORTED_MODULE_2__[/* isNullOrWhiteSpace */ "c"])(result) && !Object(_stringHelper__WEBPACK_IMPORTED_MODULE_2__[/* isNullOrWhiteSpace */ "c"])(trailingPart)) {
    result += trailingPart;
  }

  return result.toLowerCase();
};
const GetBaseVehicleTypeUrl = vehicleType => {
  var result = "";

  switch (vehicleType) {
    case enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_0__[/* VehicleTypes */ "a"].Car:
      result = "/car-leasing";
      break;

    case enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_0__[/* VehicleTypes */ "a"].Commercial:
      result = "/van-leasing";
      break;
  }

  return result.toLowerCase();
};
const GetDealTypeUrl = (leasingDealType, trailingPart = null) => {
  let result = "";

  if (leasingDealType == enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_1__[/* LeasingDealTypes */ "a"].Business) {
    result = "/car-leasing" + (trailingPart !== null && trailingPart !== void 0 ? trailingPart : "") + "?leasingdeal=business";
  } else if (leasingDealType == enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_1__[/* LeasingDealTypes */ "a"].Personal) {
    result = "/car-leasing" + (trailingPart !== null && trailingPart !== void 0 ? trailingPart : "");
  } else if (leasingDealType == enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_1__[/* LeasingDealTypes */ "a"].Van) {
    result = "/van-leasing" + (trailingPart !== null && trailingPart !== void 0 ? trailingPart : "");
  }

  return result;
};
const GetAtcUrl = (leasingDealType, userPostcode, trailingPart = null) => {
  let result = "/car-leasing-with-insurance/" + Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFriendlyUrlSegment */ "b"])(userPostcode).toLowerCase() + trailingPart;

  if (leasingDealType == enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_1__[/* LeasingDealTypes */ "a"].Business) {
    result += "?leasingdeal=business";
  }

  return result;
};
const GetThankYouPageUrl = (isInternal, goal = null) => {
  if (!isInternal) {
    return "/thankyou?goal=" + goal;
  } else {
    return "/thankyouinternal";
  }
};
const GetVehicleTypeFromUrl = url => {
  if (CheckVanUrl(url)) {
    return enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_0__[/* VehicleTypes */ "a"].Commercial;
  } else {
    return enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_0__[/* VehicleTypes */ "a"].Car;
  }
};
const CheckAtcUrl = url => {
  return url.includes("car-leasing-with-insurance");
};
const CheckCarUrl = url => {
  return url.includes("car-leasing");
};
const CheckVanUrl = url => {
  if (url.includes("van-leasing") || url.includes("van-leasing-deals")) {
    return true;
  } else {
    return false;
  }
};
const GetSearchFiltersUrl = (leasingDealType, userPostcode, vehicleFilters) => {
  let baseUrl = null;
  let isAtc = false;

  if (userPostcode) {
    isAtc = true;

    if (vehicleFilters.manufacturerUrl === "") {
      baseUrl = GetVehiclesSearchUrl(leasingDealType, userPostcode);
    } else if (vehicleFilters.modelUrl === "") {
      baseUrl = GetVehicleManufacturerUrl(isAtc, userPostcode, leasingDealType, vehicleFilters.manufacturerUrl);
    } else {
      baseUrl = GetShortModelUrl(isAtc, userPostcode, leasingDealType, vehicleFilters.manufacturerUrl, vehicleFilters.modelUrl, null);
    }
  } else {
    if (vehicleFilters.manufacturerUrl === "") {
      baseUrl = GetVehiclesSearchUrl(leasingDealType, '');
    } else if (vehicleFilters.modelUrl === "") {
      baseUrl = GetVehicleManufacturerUrl(isAtc, null, leasingDealType, vehicleFilters.manufacturerUrl);
    } else {
      baseUrl = GetShortModelUrl(isAtc, null, leasingDealType, vehicleFilters.manufacturerUrl, vehicleFilters.modelUrl, null);
    }
  }

  return Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_3__[/* getUrl */ "d"])(baseUrl, GetQueryParamsFromFilter(vehicleFilters));
};

const GetQueryParamsFromFilter = vehicleFilters => {
  let queryParams = [];

  if (vehicleFilters) {
    if (vehicleFilters.shortDerTextUrl && vehicleFilters.shortDerTextUrl.id !== "") {
      queryParams.push("trimlevel=" + vehicleFilters.shortDerTextUrl.id);
    }

    if (vehicleFilters.mileage && vehicleFilters.mileage.id) {
      queryParams.push("mileage=" + vehicleFilters.mileage.id);
    }

    if (vehicleFilters.initialRental && vehicleFilters.initialRental.id) {
      queryParams.push("rentals=" + vehicleFilters.initialRental.id);
    }

    if (vehicleFilters.term && vehicleFilters.term.id) {
      queryParams.push("term=" + vehicleFilters.term.id);
    }

    if (vehicleFilters.priceFrom && vehicleFilters.priceFrom.id) {
      queryParams.push("pricefrom=" + vehicleFilters.priceFrom.id);
    }

    if (vehicleFilters.priceTo && vehicleFilters.priceTo.id) {
      queryParams.push("priceto=" + vehicleFilters.priceTo.id);
    }

    if (vehicleFilters.fuelType && vehicleFilters.fuelType.id) {
      queryParams.push("fuel=" + vehicleFilters.fuelType.id);
    }

    if (vehicleFilters.transmission && vehicleFilters.transmission.id) {
      queryParams.push("gear=" + vehicleFilters.transmission.id);
    }

    if (vehicleFilters.engineSize && vehicleFilters.engineSize.id !== "") {
      queryParams.push("engine=" + vehicleFilters.engineSize.id);
    }

    if (vehicleFilters.driveTrain && vehicleFilters.driveTrain.id !== "") {
      queryParams.push("drivetrain=" + vehicleFilters.driveTrain.id);
    }

    if (vehicleFilters.doors && vehicleFilters.doors.id) {
      queryParams.push("doors=" + vehicleFilters.doors.id);
    }

    if (vehicleFilters.seats && vehicleFilters.seats.id) {
      queryParams.push("seats=" + vehicleFilters.seats.id);
    }

    if (vehicleFilters.co2 && vehicleFilters.co2.id) {
      queryParams.push("co2=" + vehicleFilters.co2.id);
    }

    if (vehicleFilters.mpg && vehicleFilters.mpg.id) {
      queryParams.push("mpg=" + vehicleFilters.mpg.id);
    }

    if (vehicleFilters.vehicleStyle && vehicleFilters.vehicleStyle.id) {
      queryParams.push("vehiclestyle=" + vehicleFilters.vehicleStyle.id);
    }

    if (vehicleFilters.vehicleSize && vehicleFilters.vehicleSize.id) {
      queryParams.push("vehiclesize=" + vehicleFilters.vehicleSize.id);
    }

    if (vehicleFilters.isInStock) {
      queryParams.push("isinstock=true");
    }

    if (vehicleFilters.isSpecial) {
      queryParams.push("isspecial=true");
    }
  }

  return queryParams;
};

const GetFullUrlPath = () => {
  return window.location.pathname + window.location.search;
};

/***/ })

/******/ });