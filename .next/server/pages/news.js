module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		78: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"0":"df7cae6b7c92765b72d8","1":"04d3d6dc2cfcfc42daeb","146":"6898b531603f7157cfe3","151":"1a1b75963a81358ea677"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 75);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+CZG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getLandingPageSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getWebPageSchema; });
/* unused harmony export setSchemaContextTypeProperties */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetServiceSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetFaqsSchema; });
/* unused harmony export GetQuestion */
/* unused harmony export GetAnswer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GetBreadcrumbsSchema; });
/* unused harmony export GetBreadcrumbsListItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetBlogPostSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GetVehicleSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAggregateOffer; });
/* unused harmony export GetLoOrganization */
/* unused harmony export GetLogo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GetSerializedSchema; });
/* harmony import */ var enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("l7ai");
/* harmony import */ var _seoHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zjYf");
/* harmony import */ var _urlHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zjkP");
/* harmony import */ var enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ezaw");
/* harmony import */ var helpers_currencyHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oszm");
/* harmony import */ var helpers_enumsHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YLv1");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var business_logic_systemService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("uDbZ");









const getLandingPageSchema = (leasingDealType, url) => {
  let leasingTypeText = "";

  switch (leasingDealType) {
    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Business:
      leasingTypeText = "Business Car Leasing";
      break;

    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Personal:
      leasingTypeText = "Car Leasing";
      break;

    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Van:
      leasingTypeText = "Van Leasing";
      break;
  }

  const webPageSchema = {
    name: leasingTypeText,
    type: "WebPage",
    context: "http://schema.org",
    description: Object(_seoHelper__WEBPACK_IMPORTED_MODULE_1__[/* TopPageMetaDescription */ "k"])(leasingDealType, url)
  };
  return setSchemaContextTypeProperties(JSON.stringify(webPageSchema));
};
const getWebPageSchema = (name, description) => {
  const webPageSchema = {
    name: name,
    type: "WebPage",
    context: "http://schema.org",
    description: description
  };
  return setSchemaContextTypeProperties(JSON.stringify(webPageSchema));
};
const setSchemaContextTypeProperties = text => {
  return text.replace('"type"', '"@type"').replace('"context"', '"@context"');
};
const GetServiceSchema = async vehicleType => {
  var trustpilotRating = await Object(business_logic_systemService__WEBPACK_IMPORTED_MODULE_7__[/* GetTrustPilotRating */ "c"])();
  let schema = {
    name: "Leasing Options",
    serviceType: vehicleType == enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_3__[/* VehicleTypes */ "a"].Commercial ? "Van" : "Car" + " Leasing",
    context: "http://schema.org",
    type: "Service"
  };

  if (trustpilotRating.data != null) {
    schema.aggregateRating = {
      type: "AggregateRating",
      bestRating: 5,
      worstRating: 0,
      url: "https://uk.trustpilot.com/review/leasingoptions.co.uk",
      ratingCount: trustpilotRating.data.reviewsCount,
      ratingValue: trustpilotRating.data.score,
      itemReviewed: GetLoOrganization()
    };
  }

  return setSchemaContextTypeProperties(JSON.stringify(schema));
}; //TODO: review all above

const GetFaqsSchema = (leasingDealType, faqs) => {
  let schema = {
    mainEntity: []
  };

  if (faqs && faqs.length > 0) {
    let author = GetLoOrganization();
    author.url = (leasingDealType === enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Van ? Object(_urlHelper__WEBPACK_IMPORTED_MODULE_2__[/* GetCanonicalUrl */ "j"])("/van-leasing") : Object(_urlHelper__WEBPACK_IMPORTED_MODULE_2__[/* GetCanonicalUrl */ "j"])(leasingDealType == enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Business ? "/business-car-leasing" : "/car-leasing")).toLowerCase();

    for (let idx = 0; idx < faqs.length; idx++) {
      const item = faqs[idx];
      const schemaItem = GetQuestion(item, author);
      schema.mainEntity.push(schemaItem);
    }
  }

  return Object.assign({
    '@type': 'FAQPage'
  }, schema);
};
const GetQuestion = (faqItem, author) => {
  let schema = {
    name: faqItem.question,
    answerCount: 1,
    author: author,
    acceptedAnswer: GetAnswer(faqItem, author)
  };
  return Object.assign({
    '@type': 'Question'
  }, schema);
};
const GetAnswer = (faqItem, author) => {
  let schema = {
    text: faqItem.answer,
    author: author
  };
  return Object.assign({
    '@type': 'Answer'
  }, schema);
};
const GetBreadcrumbsSchema = breadcrumbs => {
  let schema = {
    itemListElement: []
  };

  if (breadcrumbs && breadcrumbs.length > 0) {
    for (let idx = 0; idx < breadcrumbs.length; idx++) {
      const item = breadcrumbs[idx];
      const schemaItem = GetBreadcrumbsListItem(idx + 1, item);
      schema.itemListElement.push(schemaItem);
    }
  }

  return Object.assign({
    '@type': 'BreadcrumbList'
  }, schema);
};
const GetBreadcrumbsListItem = (idx, breadcrumbsItem) => {
  let schema = {
    position: idx,
    name: breadcrumbsItem.name.toUpperCase(),
    item: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_2__[/* GetCanonicalUrl */ "j"])(breadcrumbsItem.url)
  };
  return Object.assign({
    '@type': 'ListItem'
  }, schema);
};
const GetBlogPostSchema = article => {
  let momentDate = moment__WEBPACK_IMPORTED_MODULE_6___default()(article.onDate, "YYYY-MM-DDTHH:mm");
  let formattedDate = momentDate.format("YYYY-MM-DD");
  let schema = {
    author: "Leasing Options",
    publisher: GetLoOrganization(),
    datePublished: article.onDate ? formattedDate : null,
    description: article.metaDescription ? article.metaDescription : null,
    headline: article.title ? article.title : null,
    image: "https://imagecdn.leasingoptions.co.uk" + article.imageUrl,
    mainEntityOfPage: article.newsUrl ? Object(_urlHelper__WEBPACK_IMPORTED_MODULE_2__[/* GetCanonicalUrl */ "j"])(`/news/blog/${article.newsUrl}`) : null,
    sameAs: "https://www.facebook.com/LeasingOptionsLtd/"
  };
  return Object.assign({
    '@type': 'BlogPosting'
  }, schema);
};
const GetVehicleSchema = (vehicle, url, imageUrl) => {
  let schema = {
    brand: vehicle.make,
    model: vehicle.model,
    vehicleConfiguration: vehicle.derivative,
    sku: vehicle.vehicleRef,
    name: vehicle.make + " " + vehicle.model + " " + vehicle.derivative,
    description: Object(_seoHelper__WEBPACK_IMPORTED_MODULE_1__[/* VehicleMetaDescription */ "l"])(vehicle.vehicleType, vehicle.make, vehicle.shortModel, vehicle.derivative),
    modelDate: null,
    url: url,
    image: imageUrl,
    fuelCapacity: null,
    fuelEfficiency: vehicle.mpg,
    fuelType: Object(helpers_enumsHelper__WEBPACK_IMPORTED_MODULE_5__[/* GetFuelTypeText */ "b"])(vehicle.fuelType),
    accelerationTime: null,
    emissionsCO2: vehicle.co2 || vehicle.co2 === 0 ? `${Object(helpers_currencyHelper__WEBPACK_IMPORTED_MODULE_4__[/* formatNumber */ "b"])(vehicle.co2)} g/km` : null,
    meetsEmissionStandard: null,
    numberOfDoors: vehicle.doors,
    numberOfForwardGears: null,
    payload: null,
    vehicleSeatingCapacity: vehicle.seats,
    vehicleSpecialUsage: "Leasing",
    vehicleTransmission: vehicle.transmission ? Object(helpers_enumsHelper__WEBPACK_IMPORTED_MODULE_5__[/* GetTransmissionText */ "f"])(vehicle.transmission) : null,
    speed: {
      minValue: 0,
      maxValue: null
    },
    offers: GetAggregateOffer(vehicle.minPrice, vehicle.maxPrice)
  };
  return Object.assign({
    '@type': 'Car'
  }, schema);
};
const GetAggregateOffer = (minPrice, maxPrice, count) => {
  const hasMinPrice = minPrice >= 0;
  const hasMaxPrice = maxPrice >= 0;

  if (hasMinPrice || hasMaxPrice) {
    let min = hasMinPrice ? minPrice : maxPrice;
    let max = hasMaxPrice ? maxPrice : minPrice;
    let schema = {
      priceCurrency: "GBP",
      seller: GetLoOrganization(),
      lowPrice: min,
      highPrice: max,
      offerCount: count
    };
    return Object.assign({
      '@type': 'AggregateOffer'
    }, schema);
  }

  return null;
};
const GetLoOrganization = () => {
  let schema = {
    name: "Leasing Options",
    logo: GetLogo(Object(_urlHelper__WEBPACK_IMPORTED_MODULE_2__[/* GetCanonicalUrl */ "j"])("/images/logo.png"))
  };
  return Object.assign({
    '@type': 'Organization'
  }, schema);
};
const GetLogo = url => {
  let schema = {
    url: url
  };
  return Object.assign({
    '@type': 'ImageObject'
  }, schema);
};
const GetSerializedSchema = shemaObject => {
  return JSON.stringify(Object.assign({
    '@context': 'http://schema.org'
  }, shemaObject), (key, value) => {
    if (value !== null) return value;
  });
};

/***/ }),

/***/ "+XcX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelTypes; });
let FuelTypes;

(function (FuelTypes) {
  FuelTypes[FuelTypes["Petrol"] = 1] = "Petrol";
  FuelTypes[FuelTypes["Diesel"] = 2] = "Diesel";
  FuelTypes[FuelTypes["Electric"] = 3] = "Electric";
  FuelTypes[FuelTypes["Hybrid"] = 4] = "Hybrid";
})(FuelTypes || (FuelTypes = {}));

/***/ }),

/***/ "/4mX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ PageUpsell; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/layout/page-upsell/page-upsell.module.scss
var page_upsell_module = __webpack_require__("bhZP");
var page_upsell_module_default = /*#__PURE__*/__webpack_require__.n(page_upsell_module);

// CONCATENATED MODULE: ./components/layout/page-upsell/page-upsell.tsx





function PageUpsell() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `container-fluid ${page_upsell_module_default.a['upsell']} py-5`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-24 upsell-title text-md-center",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: "mb-3 mb-md-5",
          children: "Ready to find your next vehicle?"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-24 col-lg-8",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: page_upsell_module_default.a['upsell-col'],
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: `${"https://imagecdn.leasingoptions.co.uk"}/fit-in/400x400/image/vehicles/ext360/audi/a8/4/4sedan/angle33.png`,
            className: "img-fluid",
            alt: "Audi A8"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/car-leasing",
            passHref: true,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "btn btn-primary btn-block btn-lg",
              children: "Car leasing deals"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/car-leasing-faqs",
            passHref: true,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "d-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
                children: "I have more questions about cars"
              })
            })
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-24 col-lg-8",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: page_upsell_module_default.a['upsell-col'],
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: `${"https://imagecdn.leasingoptions.co.uk"}/fit-in/400x400/image/vehicles/ext360/nissan/nv200/1/5cargovan%20visia/angle33.png`,
            className: "img-fluid",
            alt: "Nissan NV200"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/van-leasing",
            passHref: true,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "btn btn-primary btn-block btn-lg",
              children: "Van leasing deals"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/car-leasing-faqs",
            passHref: true,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "d-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
                children: "I have more questions about vans"
              })
            })
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-24 col-lg-8",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: page_upsell_module_default.a['upsell-col'],
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: `${"https://imagecdn.leasingoptions.co.uk"}/fit-in/400x400/image/vehicles/ext360/volkswagen/amarok/1/4pickup%20aventura/angle33.png`,
            className: "img-fluid",
            alt: "Volkswagen Amarok"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/van-leasing/body-type/pickup",
            passHref: true,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "btn btn-primary btn-block btn-lg",
              children: "Pickup leasing deals"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/car-leasing-faqs",
            passHref: true,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "d-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
                children: "I have more questions about pickups"
              })
            })
          })]
        })
      })]
    })]
  });
}
// CONCATENATED MODULE: ./components/layout/page-upsell/index.js


/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

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

/***/ "0pCW":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"to-top": "to-top_to-top__176mW",
	"is-active": "to-top_is-active__3GsuA"
};


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

/***/ "3yXq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationAPI; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AuthenticationAPI {
  static async IsInternal() {
    const response = await fetch(this.baseUrl + "api/authentication/isInternal", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  }

  static async Login(username, password) {
    var data = {
      username: username,
      password: password
    };
    const response = await fetch(this.baseUrl + "api/authentication/login", {
      method: "POST",
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  }

}

_defineProperty(AuthenticationAPI, "baseUrl", "https://auth-website.api.leasingoptions.co.uk/");

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

/***/ "72qO":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"partner-hover": "footer_partner-hover__1OtgH",
	"partner-hover__logo": "footer_partner-hover__logo__AN3yF",
	"partner-hover__colour": "footer_partner-hover__colour__2x5yK",
	"partner-hover__mono": "footer_partner-hover__mono__ELYLh",
	"footer": "footer_footer__90bA3",
	"footer__col": "footer_footer__col__3K4Bu",
	"footer__social": "footer_footer__social__3D2v6",
	"footer__disclaimer": "footer_footer__disclaimer__3ccGf"
};


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YdSy");


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

/***/ "7jhi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h7Ze");
/* harmony import */ var _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_leasebot_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);







const DynamicLeasebotComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 151).then(__webpack_require__.bind(null, "CCQB")), {
  loading: () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
    className: "m-0",
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("CCQB")],
    modules: ['../../components/leasebot']
  }
});

const LeaseBotIcon = props => {
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('closed');

  const handleClick = () => setVisible(visible == 'open' ? 'closed' : 'open');

  const headerRectStyle = {
    backgroundColor: '#000000',
    width: '408px',
    height: '40px',
    paddingTop: 12,
    paddingBottom: -12,
    color: '#FFFFFF',
    fontSize: '24px'
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: !props.isInternal && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      id: "chatwrapper",
      className: `${_leasebot_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['leasebot']} ${visible == 'open' ? _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['is-open'] : ""}`,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        id: "chat-title-image",
        className: _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['chat-title-image'],
        onClick: handleClick,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          className: "lazyload",
          alt: "Leasing Options Leasebot will help you find the best deals 24/7!",
          width: "110",
          height: "110",
          "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/leasebot.png`
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        id: "chat-header-rect",
        className: _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['chat-header-rect'],
        style: headerRectStyle,
        onClick: handleClick,
        children: [props.headerText, visible === 'open' ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: `${_leasebot_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['chevron']} ${_leasebot_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['top']}`
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: `${_leasebot_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['chevron']} ${_leasebot_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['bottom']}`
        })]
      }), visible === 'open' && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(DynamicLeasebotComponent, {
        botName: "LeaseBot",
        IdentityPoolId: "eu-west-1:4c26ecc6-cbd0-4b31-8b8b-dab6409b1800",
        placeholder: "Type your message here",
        style: {
          position: "absolute"
        },
        backgroundColor: "#FFFFFF",
        height: 430,
        region: "eu-west-1",
        headerText: "You are now talking to Leasebot!",
        visible: visible
      })]
    })
  });
};

const mapStateToProps = state => ({
  isInternal: state.isInternal
});

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(LeaseBotIcon));

/***/ }),

/***/ "7kSQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var API_ContentAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hDe3");

class NewsService {
  static async GetAllNewsArticlePreviews(newsType, tagIds, pageIndex, pageSize) {
    return API_ContentAPI__WEBPACK_IMPORTED_MODULE_0__[/* ContentAPI */ "a"].GetNewsArticlePreviews(newsType, tagIds, pageIndex, pageSize);
  }

  static async GetRelatedArticles(id) {
    return API_ContentAPI__WEBPACK_IMPORTED_MODULE_0__[/* ContentAPI */ "a"].GetRelatedArticles(id);
  }

  static async GetNewsArticle(newsArticleId, isAmp = false) {
    return API_ContentAPI__WEBPACK_IMPORTED_MODULE_0__[/* ContentAPI */ "a"].GetNewsArticle(newsArticleId, isAmp);
  }

  static async GetTopNews() {
    return API_ContentAPI__WEBPACK_IMPORTED_MODULE_0__[/* ContentAPI */ "a"].GetTopNews();
  }

  static async GetCategoryRelatedArticles(newsType) {
    return API_ContentAPI__WEBPACK_IMPORTED_MODULE_0__[/* ContentAPI */ "a"].GetCategoryRelatedArticles(newsType);
  }

  static async GetCategoryPopularArticles(newsType) {
    return API_ContentAPI__WEBPACK_IMPORTED_MODULE_0__[/* ContentAPI */ "a"].GetCategoryPopularArticles(newsType);
  }

  static async GetNewsSearchList(newsType, searchTerm) {
    return API_ContentAPI__WEBPACK_IMPORTED_MODULE_0__[/* ContentAPI */ "a"].GetNewsSearchList(newsType, searchTerm);
  }

}

/***/ }),

/***/ "8xcb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ breadcrumbs_breadcrumbs; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/layout/breadcrumbs/breadcrumbs.module.scss
var breadcrumbs_module = __webpack_require__("oZDz");
var breadcrumbs_module_default = /*#__PURE__*/__webpack_require__.n(breadcrumbs_module);

// EXTERNAL MODULE: ./components/trustpilot/trust-micro/index.jsx + 1 modules
var trust_micro = __webpack_require__("I4Hu");

// EXTERNAL MODULE: ./enums/TrustThemeTypes.tsx
var TrustThemeTypes = __webpack_require__("MlS6");

// CONCATENATED MODULE: ./components/layout/breadcrumbs/breadcrumbs.tsx









const overlapRoutes = ["/", "/test2", "/beta", "/car-leasing", "/business-car-leasing", "/van-leasing", "/news", "/news/[category]", "/advice", "/advice/[category]", "/value-your-car", "/car-leasing-with-insurance/[postcode]/search", "/car-leasing-with-insurance/[postcode]/[make]", "/car-leasing-with-insurance/[postcode]/[make]/[shortModel]", "/price-promise", "/our-story/30th-birthday", "/short-term-car-leasing", "/short-term-van-leasing", "/electric-hybrid-car-leasing", "/electric-hybrid-car-leasing/types", "/hydrogen-car-leasing", "/electric-hybrid-car-leasing/government-grants", "/electric-hybrid-car-leasing/charging"];

const Breadcrumbs = ({
  breadcrumbs
}) => {
  const {
    0: overlap,
    1: setOverlap
  } = Object(external_react_["useState"])(false);
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    if (overlapRoutes.includes(router.pathname.replace("/internal", ""))) {
      if (!overlap) {
        setOverlap(true);
      }
    } else {
      if (overlap) {
        setOverlap(false);
      }
    }
  }, [router.pathname]);
  let breadcrumbsActiveFor = ["/news", "/hydrogen-car-leasing", "/electric-hybrid-car-leasing", "/electric-hybrid-car-leasing/types", "/our-story/30th-birthday", "/our-partners-contact-details", "/electric-hybrid-car-leasing/government-grants", "/electric-hybrid-car-leasing/charging"];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [!overlap && !router.pathname.includes('specialdeal') && !router.pathname.includes('car-leasing-with-insurance') ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "container-fluid",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24 col-md-12 my-3",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_micro["a" /* default */], {
            theme: TrustThemeTypes["a" /* TrustThemeTypes */].Dark
          })
        })
      })
    }) : null, breadcrumbs && breadcrumbs.length > 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
      className: `container-fluid d-none d-md-block ${breadcrumbs_module_default.a['breadcrumbs']} ${overlap ? breadcrumbs_module_default.a['breadcrumbs--absolute'] : ""} ${breadcrumbsActiveFor.includes(router.pathname) ? breadcrumbs_module_default.a['breadcrumbs--white'] : ""}`,
      "aria-label": "breadcrumb",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ol", {
            children: breadcrumbs.map((item, idx) => {
              return idx + 1 !== breadcrumbs.length ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  passHref: true,
                  href: item.url,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: item.name
                  })
                })
              }, idx) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                className: breadcrumbs_module_default.a['is-active'],
                "aria-current": "page",
                children: item.name
              }, idx);
            })
          })
        })
      })
    })]
  });
};

/* harmony default export */ var breadcrumbs_breadcrumbs = (Breadcrumbs);
// CONCATENATED MODULE: ./components/layout/breadcrumbs/index.jsx


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

/***/ "CNqx":
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),

/***/ "CejT":
/***/ (function(module, exports) {

module.exports = require("@aws-sdk/client-lex-runtime-service-browser/LexRuntimeService");

/***/ }),

/***/ "Cv5H":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header_header__2EfgJ",
	"header--condensed": "header_header--condensed__1SGdg",
	"head-toggle": "header_head-toggle__3J2uy",
	"head-toggle__col": "header_head-toggle__col__1vnMA",
	"deal-view": "header_deal-view__3-AQn",
	"deal-manage": "header_deal-manage__3Eggl",
	"head-bar": "header_head-bar__9XE1e",
	"head-cta": "header_head-cta__2YrrD",
	"nav-bar": "header_nav-bar__1F-c6",
	"multilevel-nav-wrapper": "header_multilevel-nav-wrapper__3XsoG",
	"multilevel-controls": "header_multilevel-controls__26UpI",
	"deal-label": "header_deal-label__wqsP6",
	"deal-indicator": "header_deal-indicator__1nHFp",
	"deal-edit": "header_deal-edit__3PoL8",
	"head-toggle__close": "header_head-toggle__close__2sWzC",
	"head-bar__row": "header_head-bar__row__MhsWh",
	"head-bar__col": "header_head-bar__col__2DS5M",
	"head-bar__ql": "header_head-bar__ql__3bV0x",
	"head-bar__search": "header_head-bar__search__1GGsI",
	"input-wrapper": "header_input-wrapper__2iuzy",
	"input-icon": "header_input-icon__rGQ2O",
	"input-loading": "header_input-loading__1a28u",
	"input-list": "header_input-list__2qv7A",
	"is-active": "header_is-active__2Qm1-",
	"head-bar__sub": "header_head-bar__sub__2ebC6",
	"head-bar__dd": "header_head-bar__dd__2XJCh",
	"lvl-caption": "header_lvl-caption__dytNr",
	"sub-lvl": "header_sub-lvl__2597C",
	"sub-nav": "header_sub-nav__lrJTn",
	"head-bar__tel": "header_head-bar__tel__2ZgCW",
	"head-bar__toggle": "header_head-bar__toggle__26kLa",
	"trustpilot-widget": "header_trustpilot-widget__38h6b",
	"vehicle-search-button": "header_vehicle-search-button__2fTvd"
};


/***/ }),

/***/ "EMmP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ footer; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/layout/footer/footer.module.scss
var footer_module = __webpack_require__("72qO");
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);

// EXTERNAL MODULE: ./components/trustpilot/trust-mini/index.jsx + 1 modules
var trust_mini = __webpack_require__("dsaI");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./helpers/helpers.tsx
var helpers = __webpack_require__("mmV+");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./enums/TrustThemeTypes.tsx
var TrustThemeTypes = __webpack_require__("MlS6");

// CONCATENATED MODULE: ./components/layout/footer/footer.tsx













const Footer = ({
  isInternal
}) => {
  const phoneNumber = Object(helpers["g" /* GetPhoneNumber */])(isInternal);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container-fluid py-3 py-md-5 bg-funder-grey",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24 col-md-12 mb-3 mb-md-0 px-0 px-md-3 d-flex",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "w-100 position-relative bg-white py-3 p-md-4 d-flex flex-wrap justify-content-center align-items-start align-items-md-center",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "w-100 position-relative text-center px-3 px-md-0",
              children: "Accreditation & Partners"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "w-100 position-relative text-center px-3 px-md-0",
              children: "As accredited car leasing brokers in the UK, we work with leading car manufacturers and a number of finance companies, including: ALD automotive, ARVAL, Alphabet, Hitachi, Lex Autolease, LeasePlan and Santander to get you the best deal on your lease. We are a proud member of the BVRLA."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "ALD logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/ald-mono.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "Alphabet logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/alphabet-mono.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "Arval logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/arval-mono.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "BVRLA logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/bvrla-mono.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "Hitachi logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/hitachi-mono.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "LeasePlan logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/leaseplan-mono.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "Lex Autolease logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/lex-mono.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "Santander logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/satander-mono.png`
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24 col-md-12 mb-3 mb-md-0 px-0 px-md-3 d-flex",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "w-100 position-relative bg-white py-3 p-md-4 d-flex flex-wrap justify-content-center align-items-start align-items-md-center",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "w-100 position-relative text-center px-3 px-md-0",
              children: "Featured on"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "w-100 position-relative text-center px-3 px-md-0",
              children: "At LeasingOptions we pride ourselves on being industry leaders and are willing to share our expertise with national and regional media to help educate people on all aspects of leasing. Here is a snapshot of some of the media outlets that we have been featured in recently."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "Autoevolution logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/autoevolution-mono.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "Autoblog logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/autoblog-mono.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "BMWblog logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/bmwblog-mono.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "Car throttle logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/carthrottle-mono.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "Daily Express logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/dailyexpress-mono.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "Daily Record logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/dailyrecord-mono.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "Car Scoops logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/carscoops-mono.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              width: "100",
              height: "43",
              className: `${footer_module_default.a['partner-hover']} img-fluid lazyload`,
              alt: "Drive Tribe logo colour",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/partner-logos/drivetribe-mono.png`
            })]
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
      className: footer_module_default.a.footer,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "container-fluid py-3 py-5",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: `col-24 col-md-6 ${footer_module_default.a['footer__col']} d-flex flex-column mb-3 mb-md-5`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: "mb-3",
              children: "Support"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "mb-3 py-3",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "phonenumber_call_now_href",
                "aria-label": "Phone number",
                href: `tel:${phoneNumber}`,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: "phonenumber_call_now",
                  children: phoneNumber
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                children: ["Monday to Friday:", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  children: " |"
                }), " 9.00am - 6.00pm"]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  href: "mailto:info@leasingoptions.co.uk",
                  children: "info@leasingoptions.co.uk"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              className: `${footer_module_default.a['footer__social']} mt-4`,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  "aria-label": "Instagram",
                  href: "https://www.instagram.com/leasing_options_ltd",
                  target: "_blank",
                  rel: "noreferrer",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                    width: "28",
                    height: "28",
                    icon: free_brands_svg_icons_["faInstagram"]
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  "aria-label": "Twitter",
                  href: "https://twitter.com/LeasingOptions",
                  target: "_blank",
                  rel: "noreferrer",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                    width: "28",
                    height: "28",
                    icon: free_brands_svg_icons_["faTwitter"]
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  "aria-label": "LinkedIn",
                  href: "https://www.linkedin.com/company/leasing-options-ltd",
                  target: "_blank",
                  rel: "noreferrer",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                    width: "28",
                    height: "28",
                    icon: free_brands_svg_icons_["faLinkedin"]
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  "aria-label": "Facebook",
                  href: "https://www.facebook.com/LeasingOptionsLtd",
                  target: "_blank",
                  rel: "noreferrer",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                    width: "28",
                    height: "28",
                    icon: free_brands_svg_icons_["faFacebook"]
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  "aria-label": "Youtube",
                  href: "https://www.youtube.com/channel/UCavDFgP64eci2XUTqElJvcQ",
                  target: "_blank",
                  rel: "noreferrer",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                    width: "28",
                    height: "28",
                    icon: free_brands_svg_icons_["faYoutube"]
                  })
                })
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: `col-24 col-md-6 ${footer_module_default.a['footer__col']} d-flex flex-column mb-3 mb-md-5`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: "mb-3",
              children: "Company"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              className: "mb-3",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/our-story",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "About Us"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/terms-and-conditions",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Terms & Conditions"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/news",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "News"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/careers",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Careers"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/contact",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Contact"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  href: "/sitemap",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Sitemap"
                  })
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_mini["a" /* default */], {
              theme: TrustThemeTypes["a" /* TrustThemeTypes */].Light
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: `col-24 col-md-6 ${footer_module_default.a['footer__col']} d-flex flex-column mb-3 mb-md-5`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: "mb-3",
              children: "Quick Links"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/car-leasing",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Personal Car Leasing"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/van-leasing",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Van Leasing"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/business-car-leasing",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Business Car Leasing"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/car-leasing-deals",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Car Leasing Special Offers"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/car-leasing-with-insurance",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Leasing With Insurance"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/my-garage",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "My Garage"
                  })
                })
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: `col-24 col-md-6 ${footer_module_default.a['footer__col']} d-flex flex-column mb-3 mb-md-5`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: "mb-3",
              children: "Compliance"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/privacy-policy",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Privacy Policy"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/cookie-policy",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Cookie Policy"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/treating-customers-fairly",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Treating Customers Fairly"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/initial-disclosure",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Initial Disclosure Document"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  prefetch: false,
                  passHref: true,
                  href: "/complaints",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: "Complaints"
                  })
                })
              })]
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-24",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: footer_module_default.a['footer__disclaimer'],
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: "Leasing Options Limited is authorised and regulated by the Financial Conduct Authority FRN 660061. Our BVRLA membership number is 1487. We act as a credit broker not a lender. We can introduce you to a limited number of lenders who may be able to offer you finance facilities for your purchase. We will only introduce you to these lenders. We may receive a commission payment from the finance provider if you decide to enter into an agreement with them. You may be able to obtain finance for your purchase from other lenders and you are encouraged to seek alternative quotations. Business customers may not be protected under the Consumer Credit Act 1974 or the rules of the Financial Conduct Authority."
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                children: ["Leasing Options Limited - Registered in England and Wales. Company number: 02487254. Registered with the Information Commissioner\u2019s Office as a Data Controller. Data Protection Registration number: Z7436776. Registered Office Address: Options House, Atkin Street, Worsley, Manchester, M28 3DG Telephone: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  href: `tel: ${phoneNumber}`,
                  children: phoneNumber
                }), ". Email: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  href: "mailto:info@leasingoptions.co.uk",
                  children: "info@leasingoptions.co.uk"
                })]
              })]
            })
          })
        })]
      })
    })]
  });
};

const mapStateToProps = state => ({
  isInternal: state.isInternal
});

/* harmony default export */ var footer = (Object(external_react_redux_["connect"])(mapStateToProps)(Footer));
// CONCATENATED MODULE: ./components/layout/footer/index.js


/***/ }),

/***/ "EXpO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var API_AuthenticationAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3yXq");

class AuthenticationService {
  static async IsInternalPage() {
    return API_AuthenticationAPI__WEBPACK_IMPORTED_MODULE_0__[/* AuthenticationAPI */ "a"].IsInternal();
  }

}

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

/***/ "Ida8":
/***/ (function(module, exports) {

module.exports = require("@aws-sdk/client-lex-runtime-service-browser/commands/PostTextCommand");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "KABT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Newsletter; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/layout/newsletter/newsletter.module.scss
var newsletter_module = __webpack_require__("zaUG");
var newsletter_module_default = /*#__PURE__*/__webpack_require__.n(newsletter_module);

// EXTERNAL MODULE: ./components/HOCs/modal/modalContext.tsx
var modal_modalContext = __webpack_require__("a2hv");

// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__("qqGZ");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);

// EXTERNAL MODULE: ./helpers/validation.tsx
var validation = __webpack_require__("gt28");

// CONCATENATED MODULE: ./enums/SubscriptionTypes.tsx
let SubscriptionTypes;

(function (SubscriptionTypes) {
  SubscriptionTypes[SubscriptionTypes["None"] = 0] = "None";
  SubscriptionTypes[SubscriptionTypes["General"] = 1] = "General";
  SubscriptionTypes[SubscriptionTypes["News"] = 2] = "News";
})(SubscriptionTypes || (SubscriptionTypes = {}));
// EXTERNAL MODULE: ./business-logic/systemService.tsx + 1 modules
var systemService = __webpack_require__("uDbZ");

// CONCATENATED MODULE: ./components/layout/modal-newsletter/modal-newsletter.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const ModalContact = (_ref) => {
  let {
    onRequestClose,
    title
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["onRequestClose", "title"]);

  const newsletterEmail = Object(external_react_["useRef"])();
  const {
    0: isSubmitted,
    1: setIsSubmitted
  } = Object(external_react_["useState"])(false);
  const {
    0: isValidated,
    1: setIsValidated
  } = Object(external_react_["useState"])(false);

  const handleSignupClick = () => {
    // @ts-ignore
    let emailAddress = newsletterEmail.current.value;
    setIsSubmitted(true);

    if (emailAddress && Object(validation["a" /* EmailAddressIsValid */])(emailAddress)) {
      Object(systemService["f" /* NewsletterSignup */])(emailAddress, SubscriptionTypes.News).then(result => {
        if (result.status.message === "OK") {
          setIsValidated(true);
          newsletterEmail.current.value = "";
        }
      }).catch(error => {
        console.log(error);
      });
    } else {
      setIsValidated(false);
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Modal_default.a, _objectSpread(_objectSpread({
      onHide: onRequestClose,
      centered: true
    }, otherProps), {}, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Header, {
        className: "d-flex flex-nowrap justify-content-center align-items-center",
        closeButton: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Title, {
          className: " mb-0",
          children: title
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Body, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "w-100 py-3 px-3 px-md-5",
          children: [isSubmitted && isValidated ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "text-mint mb-4",
            children: "Thank you for signing up to our newsletter."
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "mb-4",
            children: "Want the latest news, advice and offers straight to your inbox?"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-24 form-group",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                className: "control-label",
                children: "Your Email"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                ref: newsletterEmail,
                className: `form-control ${isSubmitted && !isValidated ? 'is-invalid' : ''}`,
                placeholder: "Email Address*"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-24 d-flex align-items-center justify-content-end",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                className: "btn btn-primary btn-lg",
                onClick: () => handleSignupClick(),
                children: "Sign Me Up"
              })
            })
          })]
        })
      })]
    }))
  });
};

/* harmony default export */ var modal_newsletter = (ModalContact);
// CONCATENATED MODULE: ./components/layout/modal-newsletter/index.jsx

// CONCATENATED MODULE: ./components/layout/newsletter/newsletter.tsx






function Newsletter() {
  const modalContext = Object(external_react_["useContext"])(modal_modalContext["a" /* default */]);

  const handleNewsletterClick = () => {
    modalContext.showModal(modal_newsletter, {
      show: true,
      title: "Get Our Newsletter"
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    className: `container-fluid ${newsletter_module_default.a['newsletter']} d-none d-lg-block text-center py-3 py-md-5`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-24 d-flex flex-nowrap align-items-center justify-content-center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Want the latest news, advice and offers straight to your inbox?"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: "btn btn-primary btn-lg",
          onClick: () => handleNewsletterClick(),
          children: "Get Our Newsletter"
        })]
      })
    })
  });
}
// CONCATENATED MODULE: ./components/layout/newsletter/index.js


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

/***/ "KjR0":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"trust-score": "trust-score_trust-score__ZXzTY",
	"trust-score__logo": "trust-score_trust-score__logo__qJrxD",
	"trust-score__reviews": "trust-score_trust-score__reviews__1pAYy"
};


/***/ }),

/***/ "LDja":
/***/ (function(module, exports) {

module.exports = require("@aws-sdk/credential-provider-cognito-identity");

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

/***/ "Mw6g":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"page-banner": "page-banner_page-banner__1IA5N",
	"page-banner--fluid": "page-banner_page-banner--fluid__28v1z",
	"page-banner--stl": "page-banner_page-banner--stl__2QtZC",
	"page-banner--stvl": "page-banner_page-banner--stvl__2_Op8",
	"page-banner--il": "page-banner_page-banner--il__1Ewg4",
	"page-banner--ehl": "page-banner_page-banner--ehl__1h6sV",
	"page-banner--hl": "page-banner_page-banner--hl__12cjU",
	"page-banner--eclt": "page-banner_page-banner--eclt__1uVEV",
	"page-banner--gg": "page-banner_page-banner--gg__KtR25",
	"page-banner--ecc": "page-banner_page-banner--ecc__36iDW",
	"page-banner--tblp": "page-banner_page-banner--tblp__1i6Ki",
	"page-banner--news": "page-banner_page-banner--news__2fG0s",
	"page-banner--latest-news": "page-banner_page-banner--latest-news__ik9aN",
	"page-banner--vehicle-reviews": "page-banner_page-banner--vehicle-reviews__1Ff1e",
	"page-banner--blog": "page-banner_page-banner--blog__2ShuP",
	"page-banner--guides": "page-banner_page-banner--guides__2UUET",
	"page-banner--advice": "page-banner_page-banner--advice__1_3_7",
	"page-banner__dd": "page-banner_page-banner__dd__2sc0Y",
	"active": "page-banner_active__Vs-l_",
	"page-banner__search": "page-banner_page-banner__search__IlO2g",
	"page-banner__loading": "page-banner_page-banner__loading__1A2-m",
	"page-banner_results": "page-banner_page-banner_results__2rM2D",
	"is-active": "page-banner_is-active__3SrOg",
	"page-banner__toggle": "page-banner_page-banner__toggle__1GBKv",
	"page-banner__toggle--fixed": "page-banner_page-banner__toggle--fixed__1le1G"
};


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

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P0/Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticUrls; });
let StaticUrls;

(function (StaticUrls) {
  StaticUrls["Home"] = "/";
  StaticUrls["BussinessDeals"] = "/business-car-leasing";
  StaticUrls["VED"] = "/car-tax-vehicle-excise-duty-changes";
  StaticUrls["PrivacyPolicy"] = "/privacy-policy";
  StaticUrls["CookiePolicy"] = "/cookie-policy";
  StaticUrls["PrivacyAndCookiePolicy"] = "/privacy-cookie-policy";
  StaticUrls["CarSpecialOffers"] = "/car-leasing-deals";
  StaticUrls["VanSpecialOffers"] = "/van-leasing-deals";
  StaticUrls["SpecialDeal"] = "/specialdeal";
  StaticUrls["Lccc"] = "/lancashire-cricket-club-partnership";
  StaticUrls["LeasingBenefits"] = "/benefits-of-car-leasing";
  StaticUrls["SmoothRadio"] = "/smooth-radio-partnership";
  StaticUrls["LcccOffer"] = "/lccc-offer";
  StaticUrls["ObsidionLeasing"] = "/obsidion-leasing";
  StaticUrls["MovieCars"] = "/movie-cars";
  StaticUrls["LookAfterMyCar"] = "/look-after-my-car";
  StaticUrls["CanIBuyLeasedCar"] = "/can-i-buy-my-leased-car";
  StaticUrls["LeaseWithBadCredit"] = "/car-leasing-with-bad-credit";
  StaticUrls["CarLeasingWithInsurance"] = "/car-leasing-with-insurance";
  StaticUrls["DriveToAKill"] = "/drive-to-a-kill/index.html";
  StaticUrls["CustomerTestimonials"] = "/customer-testimonials";
  StaticUrls["Roads2050"] = "/roads-2050";
  StaticUrls["InitialDisclosure"] = "/initial-disclosure";
  StaticUrls["TermsAndConditions"] = "/terms-and-conditions";
  StaticUrls["PersonalDeals"] = "/car-leasing";
  StaticUrls["VanDeals"] = "/van-leasing";
  StaticUrls["ValueYourCar"] = "/value-your-car";
  StaticUrls["Dealometer"] = "/dealometer";
  StaticUrls["FairWearAndTear"] = "/fair-wear-and-tear";
  StaticUrls["FAQ"] = "/car-leasing-faqs";
  StaticUrls["WhyLeaseWithUs"] = "/why-lease-with-us";
  StaticUrls["OurStory"] = "/our-story";
  StaticUrls["LeasingSchool"] = "/what-is-leasing";
  StaticUrls["Careers"] = "/careers";
  StaticUrls["TreatingCustomersFairly"] = "/treating-customers-fairly";
  StaticUrls["TaxCalculator"] = "/what-is-bik-tax";
  StaticUrls["Complaints"] = "/complaints";
  StaticUrls["PricePromise"] = "/price-promise";
  StaticUrls["MyGarage"] = "/my-garage";
  StaticUrls["Contact"] = "/contact";
  StaticUrls["News"] = "/news";
  StaticUrls["RequestCallback"] = "/request-callback";
  StaticUrls["GapInsurance"] = "/gap-insurance";
  StaticUrls["ShortTermCarLeasing"] = "/short-term-car-leasing";
  StaticUrls["ShortTermVanLeasing"] = "/short-term-van-leasing";
  StaticUrls["LatestNews"] = "/latest-news";
  StaticUrls["VehicleReviews"] = "/vehicle-reviews";
  StaticUrls["Blog"] = "/blog";
  StaticUrls["ElectricHybridLeasing"] = "/electric-hybrid-car-leasing";
  StaticUrls["ElectricTypes"] = "/electric-hybrid-car-leasing/types";
  StaticUrls["ElectricCharging"] = "/electric-hybrid-car-leasing/charging";
  StaticUrls["ElectricGrants"] = "/electric-hybrid-car-leasing/government-grants";
  StaticUrls["HydrogrenLeasing"] = "/hydrogen-car-leasing";
})(StaticUrls || (StaticUrls = {}));

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

/***/ "PYSM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ isWithinLeaseBotHours; });

// CONCATENATED MODULE: ./helpers/dateHelper.tsx
const parseStringDate = d => {
  var parts = d.split(/:|\s/);
  var date = new Date();
  if (parts.pop().toLowerCase() == 'pm') parts[0] = +parts[0] + 12;
  date.setHours(+parts.shift());
  date.setMinutes(+parts.shift());
  return date;
};
// CONCATENATED MODULE: ./components/leasebot/helper.tsx

const isWithinLeaseBotHours = () => {
  let now = new Date();
  let currentDay = now.getUTCDay();
  let startTime = '';
  let endTime = '';
  let startDate = null;
  let endDate = null;

  if (currentDay == 6 || currentDay == 0) {
    // if sat/sunday
    startTime = '10:01 PM';
    endTime = '8:01 AM';
  } else {
    startTime = '9:01 AM';
    endTime = '6:01 PM';
  }

  startDate = parseStringDate(startTime);
  endDate = parseStringDate(endTime);

  if (startDate > endDate) {
    // check if start comes before end
    let temp = startDate; // if so, assume it's across midnight

    startDate = endDate; // and swap the dates

    endDate = temp;
    return !(now < endDate && now > startDate);
  } else {
    return now < endDate && now > startDate;
  }
};

/***/ }),

/***/ "PdwN":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"page-overlay": "page-overlay_page-overlay__qhjhi",
	"is-active": "page-overlay_is-active__2R617"
};


/***/ }),

/***/ "Ps8g":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card-news": "card-news_card-news__1d1an",
	"card-news--featured": "card-news_card-news--featured__3Qnzw",
	"card-news--space": "card-news_card-news--space__1UfJs",
	"card-news__img": "card-news_card-news__img__3YOqN",
	"card-news__info": "card-news_card-news__info__1n7d3",
	"card-news__tag": "card-news_card-news__tag__WU2v9",
	"card-news__tag--latest": "card-news_card-news__tag--latest__3EMiv",
	"card-news__tag--reviews": "card-news_card-news__tag--reviews__2i_2r",
	"card-news__tag--blog": "card-news_card-news__tag--blog__1HpXB",
	"card-news__tag--teal": "card-news_card-news__tag--teal__22IIY",
	"card-news__tag--navy": "card-news_card-news__tag--navy__3S_qI",
	"card-news__tag--white": "card-news_card-news__tag--white__1uOtt",
	"card-news__tag--aqua": "card-news_card-news__tag--aqua__1Jwvv",
	"card-news__tag--blue": "card-news_card-news__tag--blue__3_Q1i",
	"card-news__tag--red": "card-news_card-news__tag--red__UbMgE",
	"card-news__tag--pink": "card-news_card-news__tag--pink__17gyJ",
	"card-news__tag--purple": "card-news_card-news__tag--purple__2y8lV",
	"card-news__tag--green": "card-news_card-news__tag--green__2SsCt",
	"card-news__desc": "card-news_card-news__desc__8Fl7I",
	"card-news__more": "card-news_card-news__more__3gU6O",
	"card-news--condensed": "card-news_card-news--condensed__3uWmJ"
};


/***/ }),

/***/ "ThyV":
/***/ (function(module, exports) {

module.exports = require("react-snowfall");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "WhW2":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"liveChatLink": "live-chat_liveChatLink__3W6k0"
};


/***/ }),

/***/ "WzHi":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav-bar": "navigation_nav-bar__1aSkV",
	"nav-bar--scrolled": "navigation_nav-bar--scrolled__2hfWV",
	"multilevel-nav-wrapper": "navigation_multilevel-nav-wrapper__hanEQ",
	"multilevel-nav-wrapper__top": "navigation_multilevel-nav-wrapper__top__2-iDM",
	"multilevel-controls": "navigation_multilevel-controls__30QIJ",
	"multilevel-controls--full": "navigation_multilevel-controls--full__2FgVI",
	"multilevel-controls__back": "navigation_multilevel-controls__back__39pay",
	"multilevel-controls__label": "navigation_multilevel-controls__label__1fIFl",
	"multilevel-controls__close": "navigation_multilevel-controls__close__3meoG",
	"multilevel-nav": "navigation_multilevel-nav__1Zb8r",
	"lvl-items": "navigation_lvl-items__3eNop",
	"button-control": "navigation_button-control__3SySg",
	"lrg-widget": "navigation_lrg-widget__3IyNk",
	"trustpilot-widget": "navigation_trustpilot-widget__3g3TV",
	"lvl-item": "navigation_lvl-item__3Ts7B",
	"mobile": "navigation_mobile__ptb1m",
	"is-active": "navigation_is-active__1RKE2",
	"highlight": "navigation_highlight__oWU8k",
	"lvl-caption": "navigation_lvl-caption__2t6MG",
	"sub-lvl": "navigation_sub-lvl__CxEeA",
	"lvl-link": "navigation_lvl-link__5FCDj",
	"sub-nav": "navigation_sub-nav__3trud",
	"lvl": "navigation_lvl__2RqqG",
	"sub-nav-panel": "navigation_sub-nav-panel__OHs1G",
	"panel-title": "navigation_panel-title__2zz0o",
	"close": "navigation_close__3UGIe",
	"panel-content": "navigation_panel-content__2H9cr",
	"make-nav": "navigation_make-nav__2oaKI",
	"make-card": "navigation_make-card__2RN3-",
	"model-nav": "navigation_model-nav__4GCbT",
	"budget-nav": "navigation_budget-nav__3rMcE",
	"body-nav": "navigation_body-nav__1cwXY",
	"body-type-card": "navigation_body-type-card__2un9b",
	"name": "navigation_name__2Dks-",
	"description": "navigation_description__3GFwS",
	"multilevel-footer": "navigation_multilevel-footer__KOEYz",
	"sub-lvl-one": "navigation_sub-lvl-one__1mAry",
	"sml-widget": "navigation_sml-widget__VTaQf",
	"simple": "navigation_simple__2CnSj",
	"flex-space-wrapper": "navigation_flex-space-wrapper__2p8gK"
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

/***/ "YLv1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ GetLeasingDealText; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ GetFuelTypeText; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ GetFeatureText; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ GetTransmissionText; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ GetNewsTypeText; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ GetVehicleCategory; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ GetNewsType; });

// EXTERNAL MODULE: ./enums/LeasingDealTypes.tsx
var LeasingDealTypes = __webpack_require__("l7ai");

// CONCATENATED MODULE: ./enums/VehicleCategoryTypes.tsx
let VehicleCategoryTypes;

(function (VehicleCategoryTypes) {
  VehicleCategoryTypes[VehicleCategoryTypes["None"] = 0] = "None";
  VehicleCategoryTypes[VehicleCategoryTypes["Coupe"] = 1] = "Coupe";
  VehicleCategoryTypes[VehicleCategoryTypes["Convertible"] = 3] = "Convertible";
  VehicleCategoryTypes[VehicleCategoryTypes["Hatchback"] = 4] = "Hatchback";
  VehicleCategoryTypes[VehicleCategoryTypes["Saloon"] = 5] = "Saloon";
  VehicleCategoryTypes[VehicleCategoryTypes["Estate"] = 6] = "Estate";
  VehicleCategoryTypes[VehicleCategoryTypes["SUV"] = 7] = "SUV";
  VehicleCategoryTypes[VehicleCategoryTypes["MPV"] = 10] = "MPV";
  VehicleCategoryTypes[VehicleCategoryTypes["SportsCar"] = 11] = "SportsCar";
  VehicleCategoryTypes[VehicleCategoryTypes["SmallVan"] = 14] = "SmallVan";
  VehicleCategoryTypes[VehicleCategoryTypes["MediumVan"] = 15] = "MediumVan";
  VehicleCategoryTypes[VehicleCategoryTypes["LargeVan"] = 16] = "LargeVan";
  VehicleCategoryTypes[VehicleCategoryTypes["Pickup"] = 17] = "Pickup";
  VehicleCategoryTypes[VehicleCategoryTypes["Crew"] = 18] = "Crew";
  VehicleCategoryTypes[VehicleCategoryTypes["Dropside"] = 19] = "Dropside";
  VehicleCategoryTypes[VehicleCategoryTypes["Luton"] = 20] = "Luton";
})(VehicleCategoryTypes || (VehicleCategoryTypes = {}));
// EXTERNAL MODULE: ./enums/FuelTypes.tsx
var FuelTypes = __webpack_require__("+XcX");

// EXTERNAL MODULE: ./enums/NewsTypes.tsx
var NewsTypes = __webpack_require__("lVS+");

// CONCATENATED MODULE: ./enums/VehicleFeatureTypes.tsx
let VehicleFeatureTypes;

(function (VehicleFeatureTypes) {
  VehicleFeatureTypes[VehicleFeatureTypes["None"] = 0] = "None";
  VehicleFeatureTypes[VehicleFeatureTypes["Bluetooth"] = 1] = "Bluetooth";
  VehicleFeatureTypes[VehicleFeatureTypes["ClimateControl"] = 2] = "ClimateControl";
  VehicleFeatureTypes[VehicleFeatureTypes["ParkingSensors"] = 3] = "ParkingSensors";
  VehicleFeatureTypes[VehicleFeatureTypes["Alloys"] = 4] = "Alloys";
})(VehicleFeatureTypes || (VehicleFeatureTypes = {}));
// CONCATENATED MODULE: ./enums/TransmissionTypes.tsx
let TransmissionTypes;

(function (TransmissionTypes) {
  TransmissionTypes[TransmissionTypes["Any"] = 0] = "Any";
  TransmissionTypes[TransmissionTypes["Manual"] = 1] = "Manual";
  TransmissionTypes[TransmissionTypes["Auto"] = 2] = "Auto";
  TransmissionTypes[TransmissionTypes["Other"] = 3] = "Other";
})(TransmissionTypes || (TransmissionTypes = {}));
// CONCATENATED MODULE: ./helpers/enumsHelper.tsx






const GetLeasingDealText = leasingDealType => {
  switch (leasingDealType) {
    case LeasingDealTypes["a" /* LeasingDealTypes */].Personal:
      return "Personal";

    case LeasingDealTypes["a" /* LeasingDealTypes */].Business:
      return "Business";

    case LeasingDealTypes["a" /* LeasingDealTypes */].Van:
      return "Van";

    default:
      return;
  }
};
const GetFuelTypeText = fuelType => {
  switch (fuelType) {
    case FuelTypes["a" /* FuelTypes */].Petrol:
      return "Petrol";

    case FuelTypes["a" /* FuelTypes */].Diesel:
      return "Diesel";

    case FuelTypes["a" /* FuelTypes */].Electric:
      return "Electric";

    case FuelTypes["a" /* FuelTypes */].Hybrid:
      return "Hybrid";

    default:
      return "N/A";
  }
};
const GetFeatureText = feature => {
  switch (feature) {
    case VehicleFeatureTypes.Bluetooth:
      return "Bluetooth";

    case VehicleFeatureTypes.ClimateControl:
      return "Climate Control";

    case VehicleFeatureTypes.ParkingSensors:
      return "Parking Sensors";

    case VehicleFeatureTypes.Alloys:
      return "Alloy Wheels";

    default:
      return;
  }
};
const GetTransmissionText = transmission => {
  switch (transmission) {
    case TransmissionTypes.Manual:
      return "Manual";

    case TransmissionTypes.Auto:
      return "Auto";

    default:
      return;
  }
};
const GetNewsTypeText = newsType => {
  switch (newsType) {
    case 1:
      return "Latest News";

    case 2:
      return "Vehicle Reviews";

    case 3:
      return "Blog";

    case 4:
      return "LO 30th Birthday";

    default:
      return;
  }
};
const GetVehicleCategory = urlValue => {
  switch (urlValue) {
    case "coupe":
      return VehicleCategoryTypes.Coupe;

    case "convertible-cabriolet":
      return VehicleCategoryTypes.Convertible;

    case "hatchback":
      return VehicleCategoryTypes.Hatchback;

    case "saloon":
      return VehicleCategoryTypes.Saloon;

    case "estate":
      return VehicleCategoryTypes.Estate;

    case "suv-crossover":
      return VehicleCategoryTypes.SUV;

    case "mpv":
      return VehicleCategoryTypes.MPV;

    case "sports-car":
      return VehicleCategoryTypes.SportsCar;

    case "small":
      return VehicleCategoryTypes.SmallVan;

    case "medium":
      return VehicleCategoryTypes.MediumVan;

    case "large":
      return VehicleCategoryTypes.LargeVan;

    case "pickup":
      return VehicleCategoryTypes.Pickup;

    case "crew":
      return VehicleCategoryTypes.Crew;

    case "dropside":
      return VehicleCategoryTypes.Dropside;

    case "luton":
      return VehicleCategoryTypes.Luton;

    default:
      return VehicleCategoryTypes.None;
  }
};
const GetNewsType = urlValue => {
  switch (urlValue) {
    case "latest-news":
      return NewsTypes["a" /* NewsTypes */].LatestNews;

    case "vehicle-reviews":
      return NewsTypes["a" /* NewsTypes */].VehicleReviews;

    case "blog":
      return NewsTypes["a" /* NewsTypes */].Blog;

    default:
      return NewsTypes["a" /* NewsTypes */].None;
  }
};

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

/***/ "YdSy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("z+X5");
/* harmony import */ var _components_page_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kRh9");
/* harmony import */ var _components_card_card_news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xDYP");
/* harmony import */ var _components_layout_aside_news__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cPDz");
/* harmony import */ var _components_layout_newsletter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("KABT");
/* harmony import */ var _components_layout_page_upsell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("/4mX");
/* harmony import */ var enums_NewsTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("lVS+");
/* harmony import */ var redux_store_tsx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("boQY");
/* harmony import */ var business_logic_newsService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("7kSQ");
/* harmony import */ var components_page_banner_page_banner_searchNews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("veHW");
/* harmony import */ var helpers_urlHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("zjkP");
/* harmony import */ var helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("xVrE");
















const getServerSideProps = redux_store_tsx_store__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].getServerSideProps(async context => {
  const topNewsPromise = await business_logic_newsService__WEBPACK_IMPORTED_MODULE_10__[/* NewsService */ "a"].GetTopNews();
  const metaData = {
    title: `Car Leasing News | Latest news from Leasing options in Manchester`,
    description: `Read the latest news from the Motoring Industry as well as news about the Leasing Industry brought to you from Industry experts.`,
    canonicalUrl: Object(helpers_urlHelper__WEBPACK_IMPORTED_MODULE_12__[/* GetCanonicalUrl */ "j"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_13__[/* getBaseUrl */ "a"])(context.req.url)),
    keywords: `Personal Car Leasing, Personal Car Lease Deals, Personal Car Leasing Manchester, Contract hire`,
    imageUrl: "https://imagecdn.leasingoptions.co.uk" + "/website/news/page-banner.png"
  };
  return {
    props: {
      metaData: metaData,
      topNews: topNewsPromise.data
    }
  };
});
function News({
  topNews
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_page_banner__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      className: "page-banner--news",
      image: `${"https://imagecdn.leasingoptions.co.uk"}/website/news/page-banner.png`,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "col-24 pt-md-5",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
            className: "text-white",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
              children: "The Leasing Lounge"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
            className: "text-white mb-3 mb-md-5",
            children: "All the latest news, vehicle reviews and blog articles!"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_page_banner_page_banner_searchNews__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {})]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
      className: "container-fluid py-3 py-md-4 pb-md-5 bg-light-grey",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "row mb-md-4",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "col-24 col-lg-6 d-flex",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_layout_aside_news__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
            social: true
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "col-24 col-lg-18 py-5 py-md-0",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "row no-gutters",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "col-24 d-lg-none",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                children: "Latest Articles"
              })
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "row",
            children: topNews === null || topNews === void 0 ? void 0 : topNews.map(newsItem => {
              if (newsItem.type == enums_NewsTypes__WEBPACK_IMPORTED_MODULE_8__[/* NewsTypes */ "a"].None) {
                return;
              }

              let moreText = null;
              let morelink = null;
              let colId = null;

              if (newsItem.type == enums_NewsTypes__WEBPACK_IMPORTED_MODULE_8__[/* NewsTypes */ "a"].Blog) {
                moreText = "All Blogs";
                morelink = "/news/blog";
                colId = "latest-blog-col";
              } else if (newsItem.type == enums_NewsTypes__WEBPACK_IMPORTED_MODULE_8__[/* NewsTypes */ "a"].VehicleReviews) {
                moreText = "All Vehicle Reviews";
                morelink = "/news/vehicle-reviews";
                colId = "latest-reviews-col";
              } else if (newsItem.type == enums_NewsTypes__WEBPACK_IMPORTED_MODULE_8__[/* NewsTypes */ "a"].LatestNews) {
                moreText = "All Latest News";
                morelink = "/news/latest-news";
                colId = "latest-news-col";
              }

              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "col-24 col-lg-8 d-flex",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_card_card_news__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
                  id: colId,
                  image: newsItem.imageUrl,
                  tag: newsItem.type,
                  link: newsItem.url,
                  title: newsItem.title,
                  date: newsItem.onDate,
                  excerpt: newsItem.description,
                  moreLink: morelink,
                  moreText: moreText
                })
              }, newsItem.id);
            })
          })]
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_layout_newsletter__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_layout_page_upsell__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {})]
  });
}
;
News.layout = _components_layout_main_layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"];

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

/***/ "acQV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBreadcrumbs; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mmV+");
/* harmony import */ var _urlsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xVrE");


let breadcrumbsActiveFor = ["/car-leasing", "/car-leasing/[make]", "/car-leasing/[make]/[shortModel]", "/car-leasing/[make]/[shortModel]/[model]", "/car-leasing/[make]/[shortModel]/[model]/[derivative]/[vehicleRef]/vehicle", "/business-car-leasing", "/van-leasing", "/van-leasing/[make]", "/van-leasing/[make]/[shortModel]", "/van-leasing/[make]/[shortModel]/[model]", "/van-leasing/[make]/[shortModel]/[model]/[derivative]/[vehicleRef]/vehicle", "/car-leasing-deals", "/van-leasing-deals", "/car-leasing-with-insurance/[postcode]/[make]", "/car-leasing-with-insurance/[postcode]/[make]/[shortModel]", "/car-leasing-with-insurance/[postcode]/[make]/[shortModel]/[model]/[derivative]/[vehicleRef]/vehicle", "/value-your-car", "/contact", "/request-callback", "/our-story", "/terms-and-conditions", "/news", "/news/[category]", "/news/[category]/[url]", "/news/[category]/[url]/[id]", "/advice", "/advice/[category]", "/advice/[category]/[url]", "/advice/[category]/[url]", "/sitemap", "/my-garage", "/privacy-policy", "/cookie-policy", "/treating-customers-fairly", "/initial-disclosure", "/complaints", "/car-leasing-faqs", "/look-after-my-car", "/lancashire-cricket-club-partnership", "/complaints", "/initial-disclosure", "/fair-wear-and-tear", "/what-is-bik-tax", "/treating-customers-fairly", "/our-story", "/careers", "/terms-and-conditions", "/privacy-policy", "/cookie-policy", "/car-leasing-deals", "/van-leasing-deals", "/hydrogen-car-leasing", "/electric-hybrid-car-leasing", "/electric-hybrid-car-leasing/types", "/price-promise", "/our-story/30th-birthday", "/our-partners-contact-details", "/electric-hybrid-car-leasing/government-grants", "/electric-hybrid-car-leasing/charging"];
const getBreadcrumbs = router => {
  let breadcrumbsList = null;
  let routerPathName = router.pathname;

  if (routerPathName.startsWith("/internal/")) {
    routerPathName = routerPathName.replace("/internal", "");
  }

  if (breadcrumbsActiveFor.includes(routerPathName)) {
    breadcrumbsList = [{
      name: "Home",
      url: "/"
    }];
    const routerQuery = router.query;
    const currentUrl = Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_1__[/* getBaseUrl */ "a"])(router.asPath.startsWith("/internal/") ? router.asPath.replace("/internal", "") : router.asPath); // Check routerPath to find correct breadcrumb links

    if (routerPathName.startsWith("/car-leasing/") || routerPathName.startsWith("/van-leasing/")) {
      let baseUrl = "";
      let queryString = "";

      if (routerPathName.startsWith("/car-leasing")) {
        if (routerQuery.leasingdeal === "business") {
          queryString = "?leasingdeal=business";
          breadcrumbsList.push({
            name: "Car Leasing",
            url: "/business-car-leasing"
          });
        } else {
          breadcrumbsList.push({
            name: "Car Leasing",
            url: "/car-leasing"
          });
        }

        baseUrl = "/car-leasing";
      } else if (routerPathName.startsWith("/van-leasing")) {
        breadcrumbsList.push({
          name: "Van Leasing",
          url: "/van-leasing"
        });
        baseUrl = "/van-leasing";
      }

      if (routerPathName === "/car-leasing/[make]/[shortModel]/[model]/[derivative]/[vehicleRef]/vehicle" || routerPathName === "/van-leasing/[make]/[shortModel]/[model]/[derivative]/[vehicleRef]/vehicle") {
        breadcrumbsList.push.apply(breadcrumbsList, [{
          name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.make.toString()),
          url: `${baseUrl}/${routerQuery.make}${queryString}`
        }, {
          name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.shortModel.toString()),
          url: `${baseUrl}/${routerQuery.make}/${routerQuery.shortModel}${queryString}`
        }, {
          name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.derivative.toString()),
          url: currentUrl + queryString
        }]);
      } else if (routerPathName === "/car-leasing/[make]/[shortModel]/[model]" || routerPathName === "/van-leasing/[make]/[shortModel]/[model]") {
        breadcrumbsList.push.apply(breadcrumbsList, [{
          name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.make.toString()),
          url: `${baseUrl}/${routerQuery.make}${queryString}`
        }, {
          name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.shortModel.toString()),
          url: `${baseUrl}/${routerQuery.make}/${routerQuery.shortModel}${queryString}`
        }, {
          name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.model.toString()),
          url: currentUrl + queryString
        }]);
      } else if (routerPathName === "/car-leasing/[make]/[shortModel]" || routerPathName === "/van-leasing/[make]/[shortModel]") {
        breadcrumbsList.push.apply(breadcrumbsList, [{
          name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.make.toString()),
          url: `${baseUrl}/${routerQuery.make}${queryString}`
        }, {
          name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.shortModel.toString() + ' Lease Deals'),
          url: currentUrl + queryString
        }]);
      } else if (routerPathName === "/car-leasing/[make]" || routerPathName === "/van-leasing/[make]") {
        breadcrumbsList.push.apply(breadcrumbsList, [{
          name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.make.toString()),
          url: currentUrl + queryString
        }]);
      }
    } else if (routerPathName === "/car-leasing-with-insurance/[postcode]/[make]/[shortModel]/[model]/[derivative]/[vehicleRef]/vehicle") {
      breadcrumbsList.push.apply(breadcrumbsList, [{
        name: "Fuel & Go",
        url: "/car-leasing-with-insurance"
      }, {
        name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.make.toString()),
        url: `/car-leasing-with-insurance/${routerQuery.postcode}/${routerQuery.make}`
      }, {
        name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.shortModel.toString()),
        url: `/car-leasing-with-insurance/${routerQuery.postcode}/${routerQuery.make}/${routerQuery.shortModel}`
      }, {
        name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.derivative.toString()),
        url: currentUrl
      }]);
    } else if (routerPathName === "/car-leasing-with-insurance/[postcode]/[make]/[shortModel]") {
      breadcrumbsList.push.apply(breadcrumbsList, [{
        name: "Fuel & Go",
        url: "/car-leasing-with-insurance"
      }, {
        name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.make.toString()),
        url: `/car-leasing-with-insurance/${routerQuery.postcode}/${routerQuery.make}`
      }, {
        name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.shortModel.toString() + ' Lease Deals'),
        url: currentUrl
      }]);
    } else if (routerPathName === "/car-leasing-with-insurance/[postcode]/[make]") {
      breadcrumbsList.push.apply(breadcrumbsList, [{
        name: "Fuel & Go",
        url: "/car-leasing-with-insurance"
      }, {
        name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.make.toString()),
        url: currentUrl
      }]);
    } else if (routerPathName === "/business-car-leasing") {
      breadcrumbsList.push({
        name: "Business Car Leasing",
        url: "/business-car-leasing"
      });
    } else if (routerPathName === "/car-leasing") {
      breadcrumbsList.push({
        name: "Car Leasing",
        url: "/car-leasing"
      });
    } else if (routerPathName === "/van-leasing") {
      breadcrumbsList.push({
        name: "Van Leasing",
        url: "/van-leasing"
      });
    } else if (routerPathName === "/electric-hybrid-car-leasing") {
      breadcrumbsList.push({
        name: "Electric Hybrid Car Leasing",
        url: "/electric-hybrid-car-leasing"
      });
    } else if (routerPathName === "/hydrogen-car-leasing") {
      breadcrumbsList.push({
        name: "Hydrogen Car Leasing",
        url: "/hydrogen-car-leasing"
      });
    } else if (routerPathName === "/electric-hybrid-car-leasing/types") {
      breadcrumbsList.push.apply(breadcrumbsList, [{
        name: "Electric Hybrid Car Leasing",
        url: "/electric-hybrid-car-leasing"
      }, {
        name: "Types",
        url: "/electric-hybrid-car-leasing/types"
      }]);
    } else if (routerPathName === "/electric-hybrid-car-leasing/charging") {
      breadcrumbsList.push.apply(breadcrumbsList, [{
        name: "Electric Hybrid Car Leasing",
        url: "/electric-hybrid-car-leasing"
      }, {
        name: "Charging",
        url: currentUrl
      }]);
    } else if (routerPathName === "/electric-hybrid-car-leasing/government-grants") {
      breadcrumbsList.push.apply(breadcrumbsList, [{
        name: "Electric Hybrid Car Leasing",
        url: "/electric-hybrid-car-leasing"
      }, {
        name: "Government Grants",
        url: currentUrl
      }]);
    } else if (routerPathName === "/our-partners-contact-details") {
      breadcrumbsList.push({
        name: "Our Partners Contact Details",
        url: "/our-partners-contact-details"
      });
    } else if (routerPathName === "/news/[category]/[url]/[id]") {
      breadcrumbsList.push.apply(breadcrumbsList, [{
        name: "News",
        url: "/news"
      }, {
        name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.category.toString()),
        url: "/news/" + routerQuery.category.toString()
      }, {
        name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.url.toString()),
        url: currentUrl
      }]);
    } else if (routerPathName === "/news/[category]") {
      breadcrumbsList.push.apply(breadcrumbsList, [{
        name: "News",
        url: "/news"
      }, {
        name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.category.toString()),
        url: "/news/" + routerQuery.category.toString()
      }]);
    } else if (routerPathName === "/news") {
      breadcrumbsList.push.apply(breadcrumbsList, [{
        name: "News",
        url: currentUrl
      }]);
    } else if (routerPathName === "/advice/[category]/[url]") {
      breadcrumbsList.push.apply(breadcrumbsList, [{
        name: "Advice",
        url: "/advice"
      }, {
        name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.category.toString()),
        url: "/advice/" + routerQuery.category.toString()
      }, {
        name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.url.toString()),
        url: currentUrl
      }]);
    } else if (routerPathName === "/advice/[category]") {
      breadcrumbsList.push.apply(breadcrumbsList, [{
        name: "Advice",
        url: "/advice"
      }, {
        name: Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* GetFriendlyName */ "d"])(routerQuery.category.toString()),
        url: "/advice/" + routerQuery.category.toString()
      }]);
    } else if (routerPathName === "/advice") {
      breadcrumbsList.push.apply(breadcrumbsList, [{
        name: "Advice",
        url: currentUrl
      }]);
    } else if (routerPathName === "/car-leasing-faqs") {
      breadcrumbsList.push({
        name: "FAQ",
        url: currentUrl
      });
    } else if (routerPathName === "/look-after-my-car") {
      breadcrumbsList.push({
        name: "Look after my car",
        url: currentUrl
      });
    } else if (routerPathName === "/lancashire-cricket-club-partnership") {
      breadcrumbsList.push({
        name: "Lancashire County Cricket Club Partnership",
        url: currentUrl
      });
    } else if (routerPathName === "/complaints") {
      breadcrumbsList.push({
        name: "Complaints",
        url: currentUrl
      });
    } else if (routerPathName === "/initial-disclosure") {
      breadcrumbsList.push({
        name: "Initial Disclosure",
        url: currentUrl
      });
    } else if (routerPathName === "/fair-wear-and-tear") {
      breadcrumbsList.push({
        name: "Fair wear and tear",
        url: currentUrl
      });
    } else if (routerPathName === "/what-is-bik-tax") {
      breadcrumbsList.push({
        name: "BIK Tax",
        url: currentUrl
      });
    } else if (routerPathName === "/treating-customers-fairly") {
      breadcrumbsList.push({
        name: "Treating Customers Fairly",
        url: currentUrl
      });
    } else if (routerPathName === "/our-story") {
      breadcrumbsList.push({
        name: "Our Story",
        url: currentUrl
      });
    } else if (routerPathName === "/careers") {
      breadcrumbsList.push({
        name: "Careers",
        url: currentUrl
      });
    } else if (routerPathName === "/terms-and-conditions") {
      breadcrumbsList.push({
        name: "Terms and Conditions",
        url: currentUrl
      });
    } else if (routerPathName === "/privacy-policy") {
      breadcrumbsList.push({
        name: "Privacy Policy",
        url: currentUrl
      });
    } else if (routerPathName === "/cookie-policy") {
      breadcrumbsList.push({
        name: "Cookie Policy",
        url: currentUrl
      });
    } else if (routerPathName === "/movie-cars") {
      breadcrumbsList.push({
        name: "Movie Cars",
        url: currentUrl
      });
    } else if (routerPathName === "/lccc-offer") {
      breadcrumbsList.push({
        name: "LANCASHIRE COUNTY CRICKET CLUB SPECIAL OFFER",
        url: currentUrl
      });
    } else if (routerPathName === "/car-leasing-deals") {
      breadcrumbsList.push({
        name: "CAR LEASE DEALS & SPECIAL OFFERS",
        url: currentUrl
      });
    } else if (routerPathName === "/van-leasing-deals") {
      breadcrumbsList.push({
        name: "VAN LEASE DEALS & SPECIAL OFFERS",
        url: currentUrl
      });
    } else if (routerPathName === "/value-your-car") {
      breadcrumbsList.push({
        name: "Value your car",
        url: currentUrl
      });
    } else if (routerPathName === "/price-promise") {
      breadcrumbsList.push({
        name: "Price Match Promise",
        url: currentUrl
      });
    } else if (routerPathName === "/my-garage") {
      breadcrumbsList.push({
        name: "Compare",
        url: currentUrl
      });
    } else if (routerPathName === "/our-story/30th-birthday") {
      breadcrumbsList.push.apply(breadcrumbsList, [{
        name: "Our Story",
        url: "/our-story"
      }, {
        name: "30th Birthday Celebrations",
        url: currentUrl
      }]);
    }
  }

  return breadcrumbsList;
};

/***/ }),

/***/ "bDXC":
/***/ (function(module, exports) {

module.exports = require("accounting");

/***/ }),

/***/ "bhZP":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"upsell": "page-upsell_upsell__oRta_",
	"upsell-title": "page-upsell_upsell-title__1_Vmr",
	"upsell-col": "page-upsell_upsell-col__268U7"
};


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

/***/ "brxi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPanels; });
let SearchPanels;

(function (SearchPanels) {
  SearchPanels[SearchPanels["SearchButtons"] = 1] = "SearchButtons";
  SearchPanels[SearchPanels["SearchMakes"] = 2] = "SearchMakes";
  SearchPanels[SearchPanels["SearchModels"] = 3] = "SearchModels";
  SearchPanels[SearchPanels["SearchBodies"] = 4] = "SearchBodies";
  SearchPanels[SearchPanels["SearchBudgets"] = 5] = "SearchBudgets";
  SearchPanels[SearchPanels["SearchDetailed"] = 6] = "SearchDetailed";
})(SearchPanels || (SearchPanels = {}));

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

/***/ "c9Kb":
/***/ (function(module, exports) {

module.exports = require("@aws-sdk/client-cognito-identity");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPDz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ aside_news; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/layout/aside-news/aside-news.module.scss
var aside_news_module = __webpack_require__("k1z6");
var aside_news_module_default = /*#__PURE__*/__webpack_require__.n(aside_news_module);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// EXTERNAL MODULE: ./enums/NewsTypes.tsx
var NewsTypes = __webpack_require__("lVS+");

// CONCATENATED MODULE: ./components/layout/aside-news/aside-news.tsx










const AsideNews = ({
  social = false,
  popular = false,
  filters = false,
  popularNews,
  newsType,
  category
}) => {
  const {
    0: categoryToggle,
    1: setCategoryToggle
  } = Object(external_react_["useState"])(false);
  const {
    0: popularToggle,
    1: setPopularToggle
  } = Object(external_react_["useState"])(false);
  const {
    0: popularTitle,
    1: setPopularTitle
  } = Object(external_react_["useState"])('');
  const {
    0: filterToggle,
    1: setFilterToggle
  } = Object(external_react_["useState"])(false);

  const handleCategoryToggle = () => setCategoryToggle(!categoryToggle);

  const handlePopularToggle = () => setPopularToggle(!categoryToggle);

  const handleFilterToggle = () => setFilterToggle(!filterToggle);

  Object(external_react_["useEffect"])(() => {
    if (popular && newsType) {
      switch (newsType) {
        case NewsTypes["a" /* NewsTypes */].LatestNews:
          setPopularTitle("Popular News");
          break;

        case NewsTypes["a" /* NewsTypes */].VehicleReviews:
          setPopularTitle("Popular Reviews");
          break;

        case NewsTypes["a" /* NewsTypes */].Blog:
          setPopularTitle("Popular Blog Posts");
          break;

        default:
          setPopularTitle("Popular Posts");
          break;
      }
    }
  }, [newsType]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("aside", {
    className: `${aside_news_module_default.a['aside-news']} pt-md-4`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${aside_news_module_default.a['aside-news__accordion']} ${category ? aside_news_module_default.a['aside-news__accordion--' + category] : ''} ${categoryToggle ? aside_news_module_default.a['is-active'] : ''}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
        onClick: () => handleCategoryToggle(),
        children: ["Lounge Categories ", categoryToggle ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_solid_svg_icons_["faChevronUp"]
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_solid_svg_icons_["faChevronDown"]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/news/latest-news",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: newsType === NewsTypes["a" /* NewsTypes */].LatestNews ? aside_news_module_default.a['is-active'] : '',
            children: "Latest News"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/news/vehicle-reviews",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: newsType === NewsTypes["a" /* NewsTypes */].VehicleReviews ? aside_news_module_default.a['is-active'] : '',
            children: "Vehicle Reviews"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/news/blog",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: newsType === NewsTypes["a" /* NewsTypes */].Blog ? aside_news_module_default.a['is-active'] : '',
            children: "Blog"
          })
        })]
      })]
    }), popular && popularNews.length > 0 && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${aside_news_module_default.a['aside-news__accordion']} ${popularToggle ? aside_news_module_default.a['is-active'] : ''} pt-3 pt-md-4`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
        onClick: () => handlePopularToggle(),
        children: [popularTitle, " ", popularToggle ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "25",
          height: "25",
          icon: free_solid_svg_icons_["faChevronUp"]
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "25",
          height: "25",
          icon: free_solid_svg_icons_["faChevronDown"]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
        children: popularNews.map(popular => /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: popular.url,
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: popular.title
          })
        }, popular.id))
      })]
    }), filters && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${aside_news_module_default.a['aside-news__accordion']} ${filterToggle ? aside_news_module_default.a['is-active'] : ''}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
        onClick: () => handleFilterToggle(),
        children: ["Review By Manufacturer ", filterToggle ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "25",
          height: "25",
          icon: free_solid_svg_icons_["faChevronUp"]
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "25",
          height: "25",
          icon: free_solid_svg_icons_["faChevronDown"]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `${aside_news_module_default.a['aside-news__manufacturer']}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("select", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
            value: "",
            children: "Manufacturer"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("select", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
            value: "",
            children: "Model"
          })
        })]
      })]
    }), social && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: aside_news_module_default.a['aside-news__social'],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
        children: "Stay connected on social"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          "aria-label": "Facebook",
          href: "https://www.facebook.com/LeasingOptionsLtd",
          target: "_blank",
          rel: "noreferrer",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            width: "25",
            height: "25",
            icon: free_brands_svg_icons_["faFacebookF"]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          "aria-label": "LinkedIn",
          href: "https://www.linkedin.com/company/leasing-options-ltd",
          target: "_blank",
          rel: "noreferrer",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            width: "25",
            height: "25",
            icon: free_brands_svg_icons_["faLinkedin"]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          "aria-label": "Instagram",
          href: "https://www.instagram.com/leasing_options_ltd",
          target: "_blank",
          rel: "noreferrer",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            width: "25",
            height: "25",
            icon: free_brands_svg_icons_["faInstagram"]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          "aria-label": "Twitter",
          href: "https://twitter.com/LeasingOptions",
          target: "_blank",
          rel: "noreferrer",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            width: "25",
            height: "25",
            icon: free_brands_svg_icons_["faTwitter"]
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var aside_news = (AsideNews);
// CONCATENATED MODULE: ./components/layout/aside-news/index.jsx


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

/***/ "dFPx":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/pro-regular-svg-icons");

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

/***/ "dsaI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ trust_mini; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/trustpilot/trust-mini/trust-mini.module.scss
var trust_mini_module = __webpack_require__("elsa");
var trust_mini_module_default = /*#__PURE__*/__webpack_require__.n(trust_mini_module);

// EXTERNAL MODULE: ./enums/TrustThemeTypes.tsx
var TrustThemeTypes = __webpack_require__("MlS6");

// EXTERNAL MODULE: ./helpers/currencyHelper.tsx
var currencyHelper = __webpack_require__("oszm");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/trustpilot/trust-mini/trust-mini.tsx









function mapStateToProps(state) {
  return {
    trustPilotRating: state.trustPilotRating
  };
}

const TrustMini = ({
  trustPilotRating,
  theme = TrustThemeTypes["a" /* TrustThemeTypes */].Light
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: trustPilotRating && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${trust_mini_module_default.a['trust-mini']} ${theme === TrustThemeTypes["a" /* TrustThemeTypes */].Dark ? trust_mini_module_default.a['trust-mini--dark'] : ''}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        href: "https://uk.trustpilot.com/review/leasingoptions.co.uk?utm_medium=trustbox&utm_source=Mini",
        target: "_blank",
        children: [theme === TrustThemeTypes["a" /* TrustThemeTypes */].Dark && /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/trustpilot-wstars--dark.svg`,
          width: "145",
          height: "50",
          className: "img-fluid lazyload",
          alt: "Trustpilot logo"
        }), theme === TrustThemeTypes["a" /* TrustThemeTypes */].Light && /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/trustpilot-wstars.svg`,
          width: "145",
          height: "50",
          className: "img-fluid lazyload",
          alt: "Trustpilot logo"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "TrustScore"
        }), " ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("strong", {
          children: [trustPilotRating === null || trustPilotRating === void 0 ? void 0 : trustPilotRating.score, " | ", Object(currencyHelper["b" /* formatNumber */])(trustPilotRating === null || trustPilotRating === void 0 ? void 0 : trustPilotRating.reviewsCount)]
        }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "reviews"
        })]
      })
    })
  });
};

/* harmony default export */ var trust_mini = (Object(external_react_redux_["connect"])(mapStateToProps)(TrustMini));
// CONCATENATED MODULE: ./components/trustpilot/trust-mini/index.jsx


/***/ }),

/***/ "elsa":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"trust-mini": "trust-mini_trust-mini__Q0ovD",
	"trust-mini--dark": "trust-mini_trust-mini--dark__3ye7x"
};


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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "h7Ze":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"leasebot": "leasebot_leasebot__2m-9M",
	"is-open": "leasebot_is-open__1qRpN",
	"chat-title-image": "leasebot_chat-title-image__3BKX5",
	"chat-header-rect": "leasebot_chat-header-rect__2o0TJ",
	"chevron": "leasebot_chevron__1_6FE",
	"bottom": "leasebot_bottom__2RD4w",
	"chatcontainer": "leasebot_chatcontainer__16uMB",
	"closed": "leasebot_closed__5OD-w",
	"chatheader": "leasebot_chatheader__1lzx0",
	"conversation": "leasebot_conversation__1kLMA",
	"chatform": "leasebot_chatform__1ONRd"
};


/***/ }),

/***/ "hDe3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentAPI; });
/* harmony import */ var helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xVrE");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class ContentAPI {
  static async GetNewsArticlePreviews(newsType, tagIds, pageIndex, pageSize) {
    let apiUrl = `api/news/getnewsarticlepreviews?filter[newsTypeId]=${newsType}&paginationCriteria[pageIndex]=${pageIndex}&paginationCriteria[pageSize]=${pageSize}`;

    if (tagIds) {
      apiUrl += apiUrl + `&filter[tagIds]=${tagIds}`;
    }

    const res = await fetch(this.baseUrl + apiUrl);
    const data = await res.json();
    return data;
  }

  static async GetRelatedArticles(id) {
    const res = await fetch(this.baseUrl + `api/news/getarticle/${id}/related`);
    const data = await res.json();
    return data;
  }

  static async GetTopNews() {
    const res = await fetch(this.baseUrl + `api/news/gettopnews`);
    const data = await res.json();
    return data;
  }

  static async GetCategoryRelatedArticles(newsType) {
    const res = await fetch(this.baseUrl + `api/news/getcategory/${newsType}/relatedarticles`);
    const data = await res.json();
    return data;
  }

  static async GetCategoryPopularArticles(newsType) {
    const res = await fetch(this.baseUrl + `api/news/getcategory/${newsType}/populararticles`);
    const data = await res.json();
    return data;
  }

  static async GetNewsArticle(newsArticleId, isAmp = false) {
    const res = await fetch(this.baseUrl + `api/news/newsarticle/${newsArticleId}?isamp=${isAmp}`);
    const data = await res.json();
    return data;
  }

  static async GetTags() {
    const res = await fetch(this.baseUrl + `api/tags/list`);
    const data = await res.json();
    return data;
  }

  static async GetPopularContentItems(tagIds = [], take = null) {
    let queryStringParts = [];

    if (tagIds && tagIds.length > 0) {
      for (let idx = 0; idx < tagIds.length; idx++) {
        queryStringParts.push(`tagids[${idx}]=${tagIds[idx]}`);
      }
    }

    if (take && take > 0) {
      queryStringParts.push(`takecount=${take}`);
    }

    const url = Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_0__[/* getUrl */ "d"])(this.baseUrl + 'api/content/items/getpopular', queryStringParts);
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  static async GetContentCategories() {
    const res = await fetch(this.baseUrl + `api/content/categories/list`);
    const data = await res.json();
    return data;
  }

  static async GetContentItems(categoryId) {
    const res = await fetch(this.baseUrl + `api/content/items/list?filter[categoryid]=${categoryId}`);
    const data = await res.json();
    return data;
  }

  static async GetGuideItems(categoryId = null, pageIndex, pageSize) {
    const res = await fetch(this.baseUrl + `/api/content/items/pagedlist?filter%5BcategoryId%5D=${categoryId}&paginationCriteria%5BpageIndex%5D=${pageIndex}&paginationCriteria%5BpageSize%5D=${pageSize}`);
    const data = await res.json();
    return data;
  }

  static async GetManufacturePageContent(contentType, leaseDealType, manufacturerUrl) {
    const res = await fetch(this.baseUrl + `api/content/custom/get?criteria.contentType=${contentType}&criteria.leasingDealType=${leaseDealType}&criteria.manufacturer=${manufacturerUrl}`);
    const data = await res.json();
    return data;
  }

  static async GetModelPageContent(contentType, leaseDealType, manufacturerUrl, modelUrl) {
    const res = await fetch(this.baseUrl + `api/content/custom/get?criteria.contentType=${contentType}&criteria.leasingDealType=${leaseDealType}&criteria.manufacturer=${manufacturerUrl}&criteria.shortModel=${modelUrl}`);
    const data = await res.json();
    return data;
  }

  static async GetCustomPageContent(contentType, vehicleType, key) {
    let url = this.baseUrl + `api/content/custom/get?criteria.contentType=${contentType}&criteria.vehicleType=${vehicleType}`;

    if (key) {
      url += `&criteria.key=${key}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  static async GetFaqListAll() {
    const res = await fetch(this.baseUrl + 'api/faq/list');
    const data = await res.json();
    return data;
  }

  static async GetFaqList(categoryId = 0) {
    let FaqUrl = this.baseUrl + 'api/faq/listfaqs';

    if (categoryId !== 0) {
      FaqUrl += '?categoryIds=' + categoryId;
    }

    const res = await fetch(FaqUrl);
    const data = await res.json();
    return data;
  }

  static async GetFaqSearchResults(searchTerm, pageIndex, pageSize) {
    const res = await fetch(this.baseUrl + 'api/faq/search?searchTerm=' + searchTerm + '&pageSize=' + pageSize + '&pageIndex=' + pageIndex);
    const data = await res.json();
    return data;
  }

  static async GetAdviceGuidesFaqs(categoryId = null, take = null) {
    let takePart = '';
    let queryParams = '';

    if (categoryId && categoryId > 0) {
      queryParams += '&categoryid=' + categoryId;
    }

    if (take !== null && take > 0) {
      if (queryParams) {
        takePart += '&';
      } else {
        takePart += '?';
      }

      takePart += 'takecount=' + take;
    }

    const res = await fetch(this.baseUrl + `api/faq/contenthub` + queryParams + takePart);
    const data = await res.json();
    return data;
  }

  static async IncrementLikes(postID) {
    const res = await fetch(this.baseUrl + `api/news/incrementlikes/${postID}`);
    const data = await res.json();
    return data;
  }

  static async IncrementDislikes(postID) {
    const res = await fetch(this.baseUrl + `api/news/incrementdislikes/${postID}`);
    const data = await res.json();
    return data;
  }

  static async GetNewsSearchList(newsType, searchTerm) {
    const res = await fetch(this.baseUrl + `api/news/list?filter%5BnewsTypeId%5D=${newsType}&filter%5BsearchTerm%5D=${searchTerm}`);
    const data = await res.json();
    return data;
  }

  static async GetGuidesSearchList(categoryId, searchTerm) {
    const res = await fetch(this.baseUrl + `api/content/items/list?filter%5BcategoryId%5D=${categoryId}&filter%5BsearchTerm%5D=${searchTerm}`);
    const data = await res.json();
    return data;
  }

  static async GetByUrl(urlString, isAmp = false) {
    const res = await fetch(this.baseUrl + `api/content/items/getbyurl/${urlString}?isamp=${isAmp}`);
    const data = await res.json();
    return data;
  }

  static async GetTotalLeasedValues() {
    const res = await fetch(this.baseUrl + 'api/commoninfo/totalleasedvalues');
    const data = await res.json();
    return data;
  }

}

_defineProperty(ContentAPI, "baseUrl", "https://content-website.api.leasingoptions.co.uk/");

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

/***/ "jD8p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _live_chat_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WhW2");
/* harmony import */ var _live_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_live_chat_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helpers_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("btDt");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);










const LiveChat = ({
  isInternal
}) => {
  const openLiveChat = () => {
    Object(helpers_analytics__WEBPACK_IMPORTED_MODULE_4__[/* logLabelEvent */ "d"])('Contact', 'Click', 'live_chat_track');
    liveChatPopup();
  };

  const liveChatPopup = () => {
    if (false) {}

    return false;
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: !isInternal && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      onClick: openLiveChat,
      id: "liveChatLink",
      className: _live_chat_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['liveChatLink'],
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        id: "livechat",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          id: "livechat_container",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faComment"],
            className: "mr-1"
          }), "Live Chat"]
        })
      })
    })
  });
};

const mapStateToProps = state => ({
  isInternal: state.isInternal
});

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(LiveChat));

/***/ }),

/***/ "k1z6":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"aside-news": "aside-news_aside-news__QMSQj",
	"aside-news__accordion": "aside-news_aside-news__accordion__2Zptq",
	"is-active": "aside-news_is-active__2TBFU",
	"aside-news__manufacturer": "aside-news_aside-news__manufacturer__2dw0p",
	"aside-news__accordion--latest-news": "aside-news_aside-news__accordion--latest-news__2f1Sl",
	"aside-news__accordion--vehicle-reviews": "aside-news_aside-news__accordion--vehicle-reviews__2BJFZ",
	"aside-news__accordion--blog": "aside-news_aside-news__accordion--blog__3rko2",
	"aside-news__social": "aside-news_aside-news__social__2uyFl"
};


/***/ }),

/***/ "kRh9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ page_banner; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/page-banner/page-banner.module.scss
var page_banner_module = __webpack_require__("Mw6g");
var page_banner_module_default = /*#__PURE__*/__webpack_require__.n(page_banner_module);

// EXTERNAL MODULE: ./components/trustpilot/trust-micro/index.jsx + 1 modules
var trust_micro = __webpack_require__("I4Hu");

// EXTERNAL MODULE: ./enums/TrustThemeTypes.tsx
var TrustThemeTypes = __webpack_require__("MlS6");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./components/page-banner/page-banner.tsx








const PageBanner = ({
  children,
  className,
  image,
  padded = true,
  trustPilot = false,
  trustPilotCentered = false
}) => {
  const Snow = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "ThyV", 7)), {
    ssr: false,
    loadableGenerated: {
      webpack: () => [/*require.resolve*/("ThyV")],
      modules: ['react-snowfall']
    }
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    id: "page-banner",
    className: `${page_banner_module_default.a['page-banner']} container-fluid ${padded ? "py-3 py-md-5" : "pt-2 pt-md-0"} ${className ? page_banner_module_default.a[className] : ''}`,
    children: [ false && /*#__PURE__*/false, image && /*#__PURE__*/Object(jsx_runtime_["jsx"])("style", {
      dangerouslySetInnerHTML: {
        __html: `
                    @media (max-width : 767px) {
                        #page-banner { background-image:url(${image}); }
                    }
                    @media only screen and (min-width: 768px) and (max-width: 1024px)  {
                        #page-banner { background-image:url(${image}); }
                    }
                    @media only screen and (min-width : 1025px) {
                        #page-banner { background-image:url(${image}); }
                    }
                `
      }
    }), trustPilot && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `col-24 col-md-12 ${trustPilotCentered ? "offset-md-6 text-center" : ""} mb-3 mt-md-3 mb-md-0`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_micro["a" /* default */], {
          theme: TrustThemeTypes["a" /* TrustThemeTypes */].Light
        })
      })
    }), children]
  });
};

/* harmony default export */ var page_banner = (PageBanner);
// CONCATENATED MODULE: ./components/page-banner/index.jsx


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

/***/ "lVS+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsTypes; });
let NewsTypes;

(function (NewsTypes) {
  NewsTypes[NewsTypes["None"] = 0] = "None";
  NewsTypes[NewsTypes["LatestNews"] = 1] = "LatestNews";
  NewsTypes[NewsTypes["VehicleReviews"] = 2] = "VehicleReviews";
  NewsTypes[NewsTypes["Blog"] = 3] = "Blog";
})(NewsTypes || (NewsTypes = {}));

/***/ }),

/***/ "lsBd":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"deal-selector": "deal-selector_deal-selector__F8NIA",
	"deal-selector--light": "deal-selector_deal-selector--light__GwMi9",
	"deal-selector--hidden": "deal-selector_deal-selector--hidden__1rvw5",
	"business": "deal-selector_business__3jFjS",
	"personal": "deal-selector_personal__1Euv7"
};


/***/ }),

/***/ "mmV+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export stripHtml */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return listenToScroll; });
/* unused harmony export serialize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GetProperManufacturerName; });
/* unused harmony export isEmpty */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetFriendlyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GetMonthlyVATText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GetVATText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GetFeatureIcon; });
/* unused harmony export GetNewsTypeFriendlyName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetNewsTagClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return getVehicleHeaderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getFeaturedHeaderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getFeaturedHeaderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getFeaturedHeaderLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return getSearchButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return groupByArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return formatAtcPostcode; });
/* unused harmony export checkUrlPostcode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return isValidPasswordComplexity; });
/* unused harmony export isValidPostcode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSpaceToPostcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormatValidatePostcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return isNullOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return getGUID; });
/* unused harmony export isLibraryImage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return isIzmoImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GetPhoneNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return MakeVanABCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return MakeABCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return MakeContentABCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MakeABSplit; });
/* harmony import */ var enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("l7ai");
/* harmony import */ var enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ezaw");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YjgO");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helpers_urlHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zjkP");
/* harmony import */ var _redux_initialState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FAkc");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("CNqx");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stringHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Kj82");
/* harmony import */ var _environment_siteSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("PG61");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("bDXC");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(accounting__WEBPACK_IMPORTED_MODULE_9__);











/**
 * Returns the text from a HTML string
 * 
 * @param {html} String The html string
 */

const stripHtml = html => {
  // Create a new div element
  var temporalDivElement = document.createElement("div"); // Set the HTML content with the providen

  temporalDivElement.innerHTML = html; // Retrieve the text property of the element (cross-browser support)

  return temporalDivElement.textContent || temporalDivElement.innerText || "";
};
let listenToScroll = scrolledCheck => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = winScroll / height;
  return scrolled > scrolledCheck;
};
const serialize = obj => {
  var str = [];

  for (var p in obj) if (obj.hasOwnProperty(p)) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  }

  return str === null || str === void 0 ? void 0 : str.join("&");
};
const GetProperManufacturerName = manufacturer => {
  return manufacturer.toLowerCase().replace("alfa romeo", "alfa").replace("mercedes benz", "mercedes").replace("mg motor uk", "mg").replace("volkswagen", "vw");
};
const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;
const GetFriendlyName = value => {
  if (value == null || value == undefined) {
    return;
  }

  value = value.toString();
  value = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_7__[/* replaceAll */ "e"])(value, "-", " ");
  value = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_7__[/* replaceAll */ "e"])(value, "––", " ");
  value = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_7__[/* replaceAll */ "e"])(value, "/", "");
  value = GetProperManufacturerName(value);

  if (value === "bmw" || value === "ds" || value === "mg" || value === "vw" || value === "seat") {
    value = value.toUpperCase();
  }

  return value;
};
const GetMonthlyVATText = leasingDealType => {
  if (leasingDealType == enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Personal) {
    return "Per Month " + GetVATText(leasingDealType);
  }

  return "Per Month " + GetVATText(leasingDealType);
};
const GetVATText = leasingDealType => {
  if (leasingDealType == enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Personal) {
    return "Inc. VAT";
  }

  return "+VAT";
};
const GetFeatureIcon = featureId => {
  switch (featureId) {
    case 1:
      return _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBluetooth"];

    case 2:
      return _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSnowflake"];

    case 3:
      return _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBullseye"];

    case 4:
      return _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTire"];

    default:
      return;
  }
};
const GetNewsTypeFriendlyName = value => {
  value = value.toString();
  value = Object(_stringHelper__WEBPACK_IMPORTED_MODULE_7__[/* replaceAll */ "e"])(value, "-", " ");
  return value;
};
const GetNewsTagClass = tagId => {
  switch (tagId) {
    case 1:
      return "card-news__tag--latest";

    case 2:
      return "card-news__tag--reviews";

    case 3:
      return "card-news__tag--blog";

    case 4:
      return "card-news__tag--red";

    default:
      return;
  }
};
const getVehicleHeaderIcon = optionType => {
  switch (optionType) {
    case 1:
      return _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCalendar"];

    case 2:
      return _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHourglass"];

    case 3:
      return _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCoin"];

    default:
      return null;
  }
};
const getFeaturedHeaderIcon = dealType => {
  switch (dealType) {
    case "BASE":
      return _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTire"];

    case "ADVANCED":
      return _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSteeringWheel"];

    case "PREMIUM":
      return _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGem"];

    case "LOPICK":
      return null;

    default:
      return null;
  }
};
const getFeaturedHeaderColor = dealType => {
  switch (dealType) {
    case "BASE":
      return '#223e77';

    case "ADVANCED":
      return '#009892';

    case "PREMIUM":
      return '#9d8e60';

    case "LOPICK":
      return '#910606';

    default:
      return null;
  }
};
const getFeaturedHeaderLabel = dealType => {
  switch (dealType) {
    case "BASE":
      return 'Starts From';

    case "ADVANCED":
      return 'Premium Model';

    case "PREMIUM":
      return 'High Specification';

    case "LOPICK":
      return 'Leasing Options Pick';

    default:
      return null;
  }
};
const getSearchButton = (router, vehicleFilters, leasingDealType) => {
  let compareState = JSON.parse(JSON.stringify(_redux_initialState__WEBPACK_IMPORTED_MODULE_5__[/* initialFilterData */ "a"]));

  if (leasingDealType === enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Van) {
    compareState.mileage.id = _environment_siteSettings__WEBPACK_IMPORTED_MODULE_8__[/* SiteSettings */ "a"].DefaultVanMileage.toString();
    compareState.mileage.name = accounting__WEBPACK_IMPORTED_MODULE_9___default.a.formatNumber(_environment_siteSettings__WEBPACK_IMPORTED_MODULE_8__[/* SiteSettings */ "a"].DefaultVanMileage) + " Miles";
  } //TODO: Values mutate on some stage. Check and fix


  compareState.isInStock = vehicleFilters.isInStock === null ? null : undefined;
  compareState.isSpecial = vehicleFilters.isSpecial === null ? null : undefined;

  if (!underscore__WEBPACK_IMPORTED_MODULE_6__["isEqual"](vehicleFilters, compareState)) {
    return "Refine Search";
  } else if (Object(helpers_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* CheckVanUrl */ "e"])(router.pathname)) {
    return "Search for a Van";
  } else {
    return "Search for a Car";
  }
};
const groupByArray = (xs, key) => {
  return xs.reduce(function (rv, x) {
    let v = key instanceof Function ? key(x) : x[key];
    let el = rv.find(r => r && r.key === v);

    if (el) {
      el.values.push(x);
    } else {
      rv.push({
        key: v,
        values: [x]
      });
    }

    return rv;
  }, []);
};
const formatAtcPostcode = userPostcode => {
  if (userPostcode !== undefined && userPostcode !== '' && userPostcode !== null) {
    return userPostcode.split("-").join(" ");
  } else {
    return '';
  }
};
const checkUrlPostcode = (urlPostcode, userPostcode) => {
  if (urlPostcode !== undefined && urlPostcode !== '' && urlPostcode !== null) {
    urlPostcode = urlPostcode.split("-").join(" ").toLowerCase();

    if (urlPostcode !== userPostcode) {
      return urlPostcode;
    } else {
      return false;
    }
  } else {
    return false;
  }
}; // at least one number, one lowercase and one uppercase letter
// at least six characters

const isValidPasswordComplexity = str => {
  var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  return re.test(str);
};
const isValidPostcode = userPostcode => {
  let postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
  return postcodeRegEx.test(userPostcode);
};
const AddSpaceToPostcode = userPostcode => {
  userPostcode = userPostcode.toUpperCase();

  if (!Object(_stringHelper__WEBPACK_IMPORTED_MODULE_7__[/* hasWhiteSpace */ "b"])(userPostcode)) {
    userPostcode = userPostcode.replace(/^(.*)(\d)(.*)/, "$1 $2$3"); // Adds space to the postcode
  }

  return userPostcode;
};
const FormatValidatePostcode = userPostcode => {
  if (userPostcode !== '') {
    AddSpaceToPostcode(userPostcode);

    if (!isValidPostcode(userPostcode)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
const isNullOrEmpty = arg => {
  if (arg == undefined || arg == null || typeof arg == "string" && arg == "") {
    return true;
  } //else if (arg.toString().trim().length == 0) {
  else if (arg.toString().length == 0) {
      return true;
    }

  return false;
};
const getGUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};
const isLibraryImage = imageUrl => {
  if (imageUrl && (imageUrl.indexOf('/manual/') !== -1 || imageUrl.indexOf('/ids/') !== -1) || imageUrl.includes('img-placeholder.jpg')) {
    return true;
  } else {
    return false;
  }
};
const isIzmoImage = imageUrl => {
  return imageUrl ? !isLibraryImage(imageUrl) : false;
};
const GetPhoneNumber = internal => {
  if (internal) {
    return "0161 703 8744";
  } else {
    return "0161 826 9716";
  }
};
const MakeVanABCheck = (make, vehicleType) => {
  if (vehicleType === enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_1__[/* VehicleTypes */ "a"].Car) {
    if (make === "citroen" || make === "fiat" || make === "ford" || make === "mercedes-benz" || make === "mitsubishi" || make === "nissan" || make === "peugeot" || make === "renault" || make === "toyota" || make === "vauxhall" || make === "volkswagen") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
const MakeABCheck = (make, vehicleType) => {
  if (vehicleType === enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_1__[/* VehicleTypes */ "a"].Car) {
    if (make === "bmw" || make === "tesla" || make === "mercedes-benz" || make === "ford" || make === "kia") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
const MakeContentABCheck = (make, vehicleType) => {
  if (vehicleType === enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_1__[/* VehicleTypes */ "a"].Car) {
    if (make && make.toLowerCase() === "seat" || make && make.toLowerCase() === "skoda") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
const MakeABSplit = (make, description) => {
  let descriptionArray = "";

  switch (make) {
    case "bmw":
      descriptionArray = description.split(/(<p>The range also includes)/);
      break;

    case "tesla":
      descriptionArray = description.split(/(<p>Tesla&rsquo;s sporty)/);
      break;

    case "mercedes-benz":
      descriptionArray = description.split(/(<p>And at the other end,)/);
      break;

    case "ford":
      descriptionArray = description.split(/(<p>The <a href=")/);
      break;

    case "kia":
      descriptionArray = description.split(/(<p>We love the <a href=")/);
      break;

    default:
      return;
  }

  return descriptionArray;
};

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

/***/ "oZDz":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"breadcrumbs": "breadcrumbs_breadcrumbs__azJ9s",
	"breadcrumbs--absolute": "breadcrumbs_breadcrumbs--absolute__1Wo6O",
	"breadcrumbs--white": "breadcrumbs_breadcrumbs--white__2u2yQ",
	"is-active": "breadcrumbs_is-active__1Z1Av"
};


/***/ }),

/***/ "oszm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export currencySymbol */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unformat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatNumber; });
/* unused harmony export formatNumberThousands */
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bDXC");
/* harmony import */ var accounting__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(accounting__WEBPACK_IMPORTED_MODULE_0__);

const currencySymbol = "£";
const unformat = value => {
  return accounting__WEBPACK_IMPORTED_MODULE_0___default.a.unformat(value);
};
const formatMoney = number => {
  return accounting__WEBPACK_IMPORTED_MODULE_0___default.a.formatMoney(number, currencySymbol, 2);
};
const formatNumber = (number, precision) => {
  return accounting__WEBPACK_IMPORTED_MODULE_0___default.a.formatNumber(number, precision);
};
const formatNumberThousands = number => {
  return accounting__WEBPACK_IMPORTED_MODULE_0___default.a.formatNumber(number, 0, ".");
};

/***/ }),

/***/ "qqGZ":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "sZbk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _to_top_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0pCW");
/* harmony import */ var _to_top_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_to_top_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("mmV+");







const ToTop = () => {
  const {
    0: scrolled,
    1: setScrolled
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function myFunc() {
    if (Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__[/* listenToScroll */ "y"])(0.15)) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  ;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener('scroll', myFunc);
    return () => {
      window.removeEventListener('scroll', myFunc);
    };
  }, []);

  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    className: `${_to_top_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['to-top']} button button-text justify-content-center align-items-center ${scrolled ? _to_top_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['is-active'] : ''}`,
    onClick: handleToTop,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      width: "14",
      height: "50",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronUp"]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ToTop);

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

/***/ "v878":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ header; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/layout/navigation/navigation.module.scss
var navigation_module = __webpack_require__("WzHi");
var navigation_module_default = /*#__PURE__*/__webpack_require__.n(navigation_module);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/layout/navigation/navigation-link.tsx








function mapStateToProps(state) {
  return {
    navigationStates: state.navigationStates
  };
}

const HeaderLink = ({
  children,
  className,
  linkTitle,
  id,
  handleNavStates,
  navigationStates
}) => {
  const handleLinkToggle = evt => {
    var _evt$currentTarget;

    evt.preventDefault();
    handleNavStates(evt, id, 2, (_evt$currentTarget = evt.currentTarget) === null || _evt$currentTarget === void 0 ? void 0 : _evt$currentTarget.innerText);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
    className: `${className} ${navigationStates.currentLink.id === id ? navigation_module_default.a['is-active'] : ""}`,
    id: id,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: navigation_module_default.a['lvl-caption'],
      onClick: evt => {
        handleLinkToggle(evt);
      },
      children: [linkTitle, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        width: "18",
        height: "18",
        icon: free_solid_svg_icons_["faChevronRight"]
      })]
    }), children]
  });
};

/* harmony default export */ var navigation_link = (Object(external_react_redux_["connect"])(mapStateToProps)(HeaderLink));
// EXTERNAL MODULE: ./helpers/urlHelper.tsx
var urlHelper = __webpack_require__("zjkP");

// EXTERNAL MODULE: ./helpers/helpers.tsx
var helpers = __webpack_require__("mmV+");

// EXTERNAL MODULE: ./business-logic/vehicleService.tsx + 2 modules
var vehicleService = __webpack_require__("wbKs");

// CONCATENATED MODULE: ./components/layout/navigation/navigation-manufacturers.tsx











const NavManufacturer = ({
  id,
  VehicleType,
  dealSelector
}) => {
  let manufacturers = Object(vehicleService["G" /* GetStaticMakes */])(VehicleType);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    id: id,
    className: navigation_module_default.a['panel-content'],
    children: manufacturers.map(manufacturer => /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      passHref: true,
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/' + manufacturer.id),
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: `${navigation_module_default.a['make-card']} text-decoration-none`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          alt: manufacturer.text,
          "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/makes/${manufacturer.id}.svg`,
          width: "40",
          height: "40",
          className: "lazyload"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          className: navigation_module_default.a['name'],
          children: [Object(helpers["d" /* GetFriendlyName */])(manufacturer.text), " ", Object(helpers["l" /* MakeContentABCheck */])(manufacturer.id, VehicleType) ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              className: "badge badge-success",
              children: "Best Prices"
            })]
          }) : '']
        })]
      })
    }, manufacturer.id))
  });
};

/* harmony default export */ var navigation_manufacturers = (NavManufacturer);
// EXTERNAL MODULE: ./enums/VehicleTypes.tsx
var VehicleTypes = __webpack_require__("Ezaw");

// CONCATENATED MODULE: ./components/layout/navigation/navigation-models.tsx



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function navigation_models_mapStateToProps(state) {
  return {
    carManufacturerList: state.carManufacturerList,
    vanManufacturerList: state.vanManufacturerList
  };
}

const NavModel = (_ref) => {
  let {
    id,
    VehicleType,
    dealSelector
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["id", "VehicleType", "dealSelector"]);

  const {
    0: manfacturer,
    1: setManufacturer
  } = Object(external_react_["useState"])();
  const {
    0: modelList,
    1: setModelList
  } = Object(external_react_["useState"])([]);
  let manufacturerList = VehicleType === VehicleTypes["a" /* VehicleTypes */].Commercial ? otherProps.vanManufacturerList : otherProps.carManufacturerList;

  const handleModelRequest = evt => {
    const manfacturerUrl = evt.currentTarget.value;
    setManufacturer(manfacturerUrl);

    if (manfacturerUrl) {
      Object(vehicleService["s" /* GetModels */])(VehicleType, manfacturerUrl).then(data => {
        setModelList(data.data);
      });
    }
  };

  const handleModelClick = model => {
    if (manfacturer) {
      Object(vehicleService["s" /* GetModels */])(VehicleType, manfacturer).then(data => {
        setModelList(data.data);
      });
    }

    router_default.a.push(Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/[make]/[shortModel]'), Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/' + manfacturer + '/' + model));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    id: id,
    className: navigation_module_default.a['panel-content'],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "form-group",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
        className: "form-control",
        onChange: evt => handleModelRequest(evt),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "",
          children: "Select Make"
        }), manufacturerList.map(manufacturer => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: manufacturer.id,
          children: manufacturer.text
        }, manufacturer.id))]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "form-group",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
        className: "form-control",
        onChange: evt => handleModelClick(evt.currentTarget.value),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "",
          children: "Select Model"
        }), modelList.map(model => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: model.id,
          children: model.text
        }, model.id))]
      })
    })]
  });
};

/* harmony default export */ var navigation_models = (Object(external_react_redux_["connect"])(navigation_models_mapStateToProps)(NavModel));
// CONCATENATED MODULE: ./components/layout/navigation/navigation-budgets.tsx







const NavBudgets = ({
  id,
  dealSelector
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    id: id,
    className: navigation_module_default.a['panel-content'],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/budget/150'),
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Below \xA3150"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/budget/200'),
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Up to \xA3200"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/budget/250'),
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Up to \xA3250"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/budget/300'),
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Up to \xA3300"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/budget/350'),
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Up to \xA3350"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/budget/400'),
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Up to \xA3400"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/budget/450'),
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Up to \xA3450"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/budget/500'),
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Up to \xA3500"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/budget/600'),
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Up to \xA3600"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/budget/700'),
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Up to \xA3700"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/budget/800'),
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Up to \xA3800"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/budget/900'),
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Up to \xA3900"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/budget/1000'),
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Up to \xA31000"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/budget-over/1000'),
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Above \xA31000"
      })
    })]
  });
};

/* harmony default export */ var navigation_budgets = (NavBudgets);
// CONCATENATED MODULE: ./components/layout/navigation/navigation-bodies.tsx








const NavBodies = ({
  id,
  dealSelector,
  VehicleType
}) => {
  const getDeralTypeUrlDynamic = Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector);

  if (VehicleType === VehicleTypes["a" /* VehicleTypes */].Commercial) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: id,
      className: navigation_module_default.a['panel-content'],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/small'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "Small",
              width: "200",
              height: "80",
              className: "lazyload",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-small-van.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "Small"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g. Ford Connect, Peugeot Partner"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/medium'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "Medium",
              width: "200",
              height: "80",
              className: "lazyload",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-medium-van.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "Medium"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g. Citroen Dispatch, VW Transporter"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/large'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "Large",
              width: "200",
              height: "80",
              className: "lazyload",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-large-van.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "Large"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g. Peugeot Boxer, Citroen Relay"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/pickup'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "Pickup",
              width: "200",
              height: "80",
              className: "lazyload",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-pickup.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "Pickup"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g. Mitsubish L200, Ford Ranger"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/crew'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "Crew",
              width: "200",
              height: "80",
              className: "lazyload",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-crew-van.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "Crew"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g. VW Transporter, Ford Transit Custom"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/dropside'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "Dropside",
              width: "200",
              height: "80",
              className: "lazyload",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-dropside.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "Dropside"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g. Ford Transit, VW Crafter"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/luton'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "Luton",
              width: "200",
              height: "80",
              className: "lazyload",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-luton-van.png`
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "Luton"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g. Mercedes-Benz Sprinter, Ford Transit"
            })]
          })
        })
      })]
    });
  } else {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: id,
      className: navigation_module_default.a['panel-content'],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/suv-crossover'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "suv / crossover",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-suv.png`,
              width: "200",
              height: "80",
              className: "lazyload"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "SUV / Crossover"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g.Jeep Cherokee SW, Land Rover Discovery SW"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/hatchback'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "hatchback",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-hatchback.png`,
              width: "200",
              height: "80",
              className: "lazyload"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "Hatchback"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g.Toyota Aygo, Vauxhall Astra"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/saloon'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "saloon",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-saloon.png`,
              width: "200",
              height: "80",
              className: "lazyload"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "Saloon"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g.Alfa Romeo Giulia, Ford Mondeo"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/estate'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "estate",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-estate.png`,
              width: "200",
              height: "80",
              className: "lazyload"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "Estate"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g.Hyundai i30 Tourer, Kia Ceed Sportswagon"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/coupe'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "coupe",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-coupe.png`,
              width: "200",
              height: "80",
              className: "lazyload"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "Coupe"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g.Audi A5, BMW 2 Series"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/convertible-cabriolet'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "convertible / cabriolet",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-convertible.png`,
              width: "200",
              height: "80",
              className: "lazyload"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "Convertible / Cabriolet"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g.Mercedes C Class, Smart ForTwo"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/mpv'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "mpv",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-mpv.png`,
              width: "200",
              height: "80",
              className: "lazyload"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "MPV"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g.Renault Grand Scenic, Volkswagon Touran"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealSelector, '/body-type/sports-car'),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-decoration-none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: navigation_module_default.a['body-type-card'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "sports car",
              "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-sportscar.png`,
              width: "200",
              height: "80",
              className: "lazyload"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['name'],
              children: "Sports Car"
            }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: navigation_module_default.a['description'],
              children: "e.g.Abarth 124 Spider Roadster, Audi R8 Coupe"
            })]
          })
        })
      })]
    });
  }
};

/* harmony default export */ var navigation_bodies = (NavBodies);
// CONCATENATED MODULE: ./components/layout/navigation/navigation-sublink.tsx



function navigation_sublink_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = navigation_sublink_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function navigation_sublink_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











function navigation_sublink_mapStateToProps(state) {
  return {
    carManufacturerList: state.carManufacturerList,
    vanManufacturerList: state.vanManufacturerList,
    navigationStates: state.navigationStates
  };
}

const HeaderSubLink = (_ref) => {
  let {
    children,
    className,
    linkTitle,
    panelClass,
    id,
    dealSelector,
    VehicleType,
    handleNavStates,
    handlePanelClose,
    carManufacturerList,
    vanManufacturerList,
    navigationStates
  } = _ref,
      otherProps = navigation_sublink_objectWithoutProperties(_ref, ["children", "className", "linkTitle", "panelClass", "id", "dealSelector", "VehicleType", "handleNavStates", "handlePanelClose", "carManufacturerList", "vanManufacturerList", "navigationStates"]);

  const handleSubLinkToggle = evt => {
    var _evt$currentTarget;

    evt.preventDefault();
    handleNavStates(evt, id, 3, (_evt$currentTarget = evt.currentTarget) === null || _evt$currentTarget === void 0 ? void 0 : _evt$currentTarget.innerText);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
    className: `${className} ${navigationStates.currentSubLink.id === id ? navigation_module_default.a['is-active'] : ""}`,
    id: id,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: navigation_module_default.a['lvl-caption'],
      onClick: evt => {
        handleSubLinkToggle(evt);
      },
      children: [linkTitle, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        width: "18",
        height: "18",
        icon: free_solid_svg_icons_["faChevronRight"]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${navigation_module_default.a['sub-nav-panel']} ${navigation_module_default.a[panelClass]}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: navigation_module_default.a['panel-title'],
        children: [linkTitle, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: navigation_module_default.a['close'],
          type: "button",
          onClick: evt => {
            handlePanelClose(evt);
          },
          children: "\xD7"
        })]
      }), panelClass == 'make-nav' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_manufacturers, {
        id: id,
        dealSelector: dealSelector,
        VehicleType: VehicleType
      }), panelClass == 'model-nav' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_models, {
        id: id,
        dealSelector: dealSelector,
        VehicleType: VehicleType
      }), panelClass == 'budget-nav' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_budgets, {
        id: id,
        dealSelector: dealSelector
      }), panelClass == 'body-nav' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_bodies, {
        id: id,
        dealSelector: dealSelector,
        VehicleType: VehicleType
      })]
    })]
  });
};

/* harmony default export */ var navigation_sublink = (Object(external_react_redux_["connect"])(navigation_sublink_mapStateToProps)(HeaderSubLink));
// EXTERNAL MODULE: ./components/HOCs/modal/modalContext.tsx
var modal_modalContext = __webpack_require__("a2hv");

// EXTERNAL MODULE: external "@fortawesome/pro-regular-svg-icons"
var pro_regular_svg_icons_ = __webpack_require__("dFPx");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// EXTERNAL MODULE: external "@fortawesome/pro-light-svg-icons"
var pro_light_svg_icons_ = __webpack_require__("YjgO");

// EXTERNAL MODULE: ./enums/LeasingDealTypes.tsx
var LeasingDealTypes = __webpack_require__("l7ai");

// EXTERNAL MODULE: ./enums/SearchPanels.tsx
var SearchPanels = __webpack_require__("brxi");

// CONCATENATED MODULE: ./components/layout/navigation/navigation.tsx










const Search = dynamic_default()(() => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "SUUS")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("SUUS")],
    modules: ['../../search']
  }
});
const ModalPostcode = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "TG2e")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("TG2e")],
    modules: ['../modal-postcode/modal-postcode']
  }
});











function navigation_mapStateToProps(state) {
  return {
    isInternal: state.isInternal,
    navigationStates: state.navigationStates,
    userPostcode: state.userPostcode
  };
}

const Navigation = ({
  isInternal,
  navToggle,
  searchButtonText,
  handleMenuClose,
  navigationStates,
  userPostcode
}) => {
  const router = Object(router_["useRouter"])();
  const modalContext = Object(external_react_["useContext"])(modal_modalContext["a" /* default */]);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const phoneNumber = Object(helpers["g" /* GetPhoneNumber */])(isInternal);

  const handleMenuBack = evt => {
    evt.preventDefault();

    if (navigationStates.level === 2) {
      dispatch({
        type: 'UPDATE_LINK_STATE',
        id: "",
        level: 1,
        controls: false,
        indicator: ""
      });
    } else if (navigationStates.level === 3) {
      dispatch({
        type: 'UPDATE_LINK_STATE',
        id: navigationStates.currentLink.id,
        level: 2,
        controls: true,
        indicator: navigationStates.currentLink.name
      });
    }
  };

  const handlePanelClose = evt => {
    evt.preventDefault();
    dispatch({
      type: 'UPDATE_LINK_STATE',
      id: navigationStates.currentLink.id,
      level: 2,
      controls: true,
      indicator: navigationStates.currentLink.name
    });
  };

  const handleNavStates = (evt, id, level, indicator) => {
    evt.preventDefault();
    dispatch({
      type: 'UPDATE_OVERLAY_STATE',
      state: true
    });

    if (level == 2) {
      if (id === navigationStates.currentLink.id) {
        dispatch({
          type: 'UPDATE_LINK_STATE',
          id: "",
          level: 1,
          controls: false,
          indicator: ""
        });
        dispatch({
          type: 'UPDATE_OVERLAY_STATE',
          state: false
        });
      } else {
        dispatch({
          type: 'UPDATE_LINK_STATE',
          id: id,
          level: level,
          controls: true,
          indicator: indicator
        });
      }
    } else if (level == 3) {
      if (id === navigationStates.currentSubLink.id) {
        dispatch({
          type: 'UPDATE_SUB_STATE',
          id: "",
          level: 2,
          controls: true,
          indicator: ""
        });
      } else {
        dispatch({
          type: 'UPDATE_SUB_STATE',
          id: id,
          level: level,
          controls: true,
          indicator: indicator
        });
      }
    }
  };

  const handleSearchClick = () => {
    if (router.pathname.includes('car-leasing-with-insurance')) {
      if (userPostcode) {
        modalContext.showModal(Search, {
          show: true,
          title: "Refine Search",
          activePanel: SearchPanels["a" /* SearchPanels */].SearchDetailed
        });
      } else {
        modalContext.showModal(ModalPostcode, {
          show: true,
          title: 'Search Insured Cars'
        });
      }
    } else {
      modalContext.showModal(Search, {
        show: true,
        title: searchButtonText,
        activePanel: searchButtonText === "Refine Search" ? 6 : 1
      });
    }
  };

  const navRef = external_react_default.a.useRef();
  Object(external_react_["useEffect"])(() => {
    if (navRef.current.scrollTop != 0) {
      navRef.current.scrollTop = 0;
    }
  }, [navToggle, navigationStates]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    ref: navRef,
    className: `container-fluid ${navigation_module_default.a['nav-bar']} ${navToggle ? 'd-block' : ''}`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${navigation_module_default.a['multilevel-nav-wrapper']} ${navigation_module_default.a['multilevel-nav-wrapper__top']}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `${navigation_module_default.a['multilevel-controls']} ${navigationStates.controls ? navigation_module_default.a['multilevel-controls--full'] : ""}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          href: "#",
          className: navigation_module_default.a['multilevel-controls__back'],
          onClick: evt => handleMenuBack(evt),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            width: "18",
            height: "18",
            icon: pro_regular_svg_icons_["faChevronLeft"]
          }), " Back"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: navigation_module_default.a['multilevel-controls__label'],
          children: navigationStates.indicator
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "#",
          className: navigation_module_default.a['multilevel-controls__close'],
          onClick: evt => handleMenuClose(evt),
          children: "Close"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        className: navigation_module_default.a['multilevel-nav'],
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_link, {
          className: navigation_module_default.a['lvl-item'],
          linkTitle: "Personal Car Leasing",
          id: "personal-leasing",
          handleNavStates: handleNavStates,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: navigation_module_default.a['sub-lvl'],
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              className: navigation_module_default.a['sub-nav'],
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/car-leasing",
                  passHref: true,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: "text-decoration-none",
                    children: "Car Leasing"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_sublink, {
                className: navigation_module_default.a['lvl'],
                linkTitle: "Manufacturer",
                id: "personal-leasing-manufacturer",
                dealSelector: LeasingDealTypes["a" /* LeasingDealTypes */].Personal,
                VehicleType: VehicleTypes["a" /* VehicleTypes */].Car,
                panelClass: "make-nav",
                handleNavStates: handleNavStates,
                handlePanelClose: handlePanelClose
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_sublink, {
                className: navigation_module_default.a['lvl'],
                linkTitle: "Model",
                id: "personal-leasing-model",
                dealSelector: LeasingDealTypes["a" /* LeasingDealTypes */].Personal,
                VehicleType: VehicleTypes["a" /* VehicleTypes */].Car,
                panelClass: "model-nav",
                handleNavStates: handleNavStates,
                handlePanelClose: handlePanelClose
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_sublink, {
                className: navigation_module_default.a['lvl'],
                linkTitle: "Budget",
                id: "personal-leasing-budget",
                dealSelector: LeasingDealTypes["a" /* LeasingDealTypes */].Personal,
                VehicleType: VehicleTypes["a" /* VehicleTypes */].Car,
                panelClass: "budget-nav",
                handleNavStates: handleNavStates,
                handlePanelClose: handlePanelClose
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_sublink, {
                className: navigation_module_default.a['lvl'],
                linkTitle: "Body",
                id: "personal-leasing-body",
                dealSelector: LeasingDealTypes["a" /* LeasingDealTypes */].Personal,
                VehicleType: VehicleTypes["a" /* VehicleTypes */].Car,
                panelClass: "body-nav",
                handleNavStates: handleNavStates,
                handlePanelClose: handlePanelClose
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/car-leasing/in-stock",
                  passHref: true,
                  prefetch: false,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: "text-decoration-none",
                    children: "In Stock"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/short-term-car-leasing",
                  passHref: true,
                  prefetch: false,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: "text-decoration-none",
                    children: "Short Term Leasing"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/hydrogen-car-leasing",
                  passHref: true,
                  prefetch: false,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: "text-decoration-none",
                    children: "Hydrogen Leasing"
                  })
                })
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          className: navigation_module_default.a['lvl-items'],
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: navigation_module_default.a['multilevel-nav-wrapper'],
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              className: navigation_module_default.a['multilevel-nav'],
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_link, {
                className: navigation_module_default.a['lvl-item'],
                linkTitle: "Business Car Leasing",
                id: "business-leasing",
                handleNavStates: handleNavStates,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: navigation_module_default.a['sub-lvl'],
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                    className: navigation_module_default.a['sub-nav'],
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                        href: "/business-car-leasing",
                        passHref: true,
                        prefetch: false,
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                          className: "text-decoration-none",
                          children: "Business Car Leasing"
                        })
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_sublink, {
                      className: navigation_module_default.a['lvl'],
                      linkTitle: "Manufacturer",
                      id: "business-leasing-manufacturer",
                      dealSelector: LeasingDealTypes["a" /* LeasingDealTypes */].Business,
                      VehicleType: VehicleTypes["a" /* VehicleTypes */].Car,
                      panelClass: "make-nav",
                      handleNavStates: handleNavStates,
                      handlePanelClose: handlePanelClose
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_sublink, {
                      className: navigation_module_default.a['lvl'],
                      linkTitle: "Model",
                      id: "business-leasing-model",
                      dealSelector: LeasingDealTypes["a" /* LeasingDealTypes */].Business,
                      VehicleType: VehicleTypes["a" /* VehicleTypes */].Car,
                      panelClass: "model-nav",
                      handleNavStates: handleNavStates,
                      handlePanelClose: handlePanelClose
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_sublink, {
                      className: navigation_module_default.a['lvl'],
                      linkTitle: "Budget",
                      id: "business-leasing-budget",
                      dealSelector: LeasingDealTypes["a" /* LeasingDealTypes */].Business,
                      VehicleType: VehicleTypes["a" /* VehicleTypes */].Car,
                      panelClass: "budget-nav",
                      handleNavStates: handleNavStates,
                      handlePanelClose: handlePanelClose
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_sublink, {
                      className: navigation_module_default.a['lvl'],
                      linkTitle: "Body",
                      id: "business-leasing-body",
                      dealSelector: LeasingDealTypes["a" /* LeasingDealTypes */].Business,
                      VehicleType: VehicleTypes["a" /* VehicleTypes */].Car,
                      panelClass: "body-nav",
                      handleNavStates: handleNavStates,
                      handlePanelClose: handlePanelClose
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                        href: "/car-leasing/in-stock?leasingdeal=business",
                        passHref: true,
                        prefetch: false,
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                          className: "text-decoration-none",
                          children: "In Stock"
                        })
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                        href: "/short-term-car-leasing?leasingdeal=business",
                        passHref: true,
                        prefetch: false,
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                          className: "text-decoration-none",
                          children: "Short Term Leasing"
                        })
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                        href: "/hydrogen-car-leasing",
                        passHref: true,
                        prefetch: false,
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                          className: "text-decoration-none",
                          children: "Hydrogen Leasing"
                        })
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                className: navigation_module_default.a['lvl-items'],
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: navigation_module_default.a['multilevel-nav-wrapper'],
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: navigation_module_default.a['flex-space-wrapper'],
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                      className: navigation_module_default.a['multilevel-nav'],
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_link, {
                        className: navigation_module_default.a['lvl-item'],
                        linkTitle: "Van Leasing",
                        id: "van-leasing",
                        handleNavStates: handleNavStates,
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                          className: navigation_module_default.a['sub-lvl'],
                          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                            className: navigation_module_default.a['sub-nav'],
                            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                                href: "/van-leasing",
                                passHref: true,
                                prefetch: false,
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                                  className: "text-decoration-none",
                                  children: "Van Leasing"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_sublink, {
                              className: navigation_module_default.a['lvl'],
                              linkTitle: "Manufacturer",
                              id: "van-leasing-manufacturer",
                              dealSelector: LeasingDealTypes["a" /* LeasingDealTypes */].Van,
                              VehicleType: VehicleTypes["a" /* VehicleTypes */].Commercial,
                              panelClass: "make-nav",
                              handleNavStates: handleNavStates,
                              handlePanelClose: handlePanelClose
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_sublink, {
                              className: navigation_module_default.a['lvl'],
                              linkTitle: "Model",
                              id: "van-leasing-model",
                              dealSelector: LeasingDealTypes["a" /* LeasingDealTypes */].Van,
                              VehicleType: VehicleTypes["a" /* VehicleTypes */].Commercial,
                              panelClass: "model-nav",
                              handleNavStates: handleNavStates,
                              handlePanelClose: handlePanelClose
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_sublink, {
                              className: navigation_module_default.a['lvl'],
                              linkTitle: "Budget",
                              id: "van-leasing-budget",
                              dealSelector: LeasingDealTypes["a" /* LeasingDealTypes */].Van,
                              VehicleType: VehicleTypes["a" /* VehicleTypes */].Commercial,
                              panelClass: "budget-nav",
                              handleNavStates: handleNavStates,
                              handlePanelClose: handlePanelClose
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_sublink, {
                              className: navigation_module_default.a['lvl'],
                              linkTitle: "Body",
                              id: "van-leasing-body",
                              dealSelector: LeasingDealTypes["a" /* LeasingDealTypes */].Van,
                              VehicleType: VehicleTypes["a" /* VehicleTypes */].Commercial,
                              panelClass: "body-nav",
                              handleNavStates: handleNavStates,
                              handlePanelClose: handlePanelClose
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                                href: "/van-leasing/in-stock",
                                passHref: true,
                                prefetch: false,
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                                  className: "text-decoration-none",
                                  children: "In Stock"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                                href: "/short-term-van-leasing",
                                passHref: true,
                                prefetch: false,
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                                  className: "text-decoration-none",
                                  children: "Short Term Leasing"
                                })
                              })
                            })]
                          })
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_link, {
                        className: `${navigation_module_default.a['lvl-item']} ${navigation_module_default.a['simple']}`,
                        linkTitle: "Special Offers",
                        id: "specialoffers",
                        handleNavStates: handleNavStates,
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                          className: navigation_module_default.a['sub-lvl'],
                          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                            className: navigation_module_default.a['sub-nav'],
                            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                                href: "/car-leasing-deals",
                                passHref: true,
                                prefetch: false,
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                                  className: "text-decoration-none",
                                  children: "Car Special Offers"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                                href: "/van-leasing-deals",
                                passHref: true,
                                prefetch: false,
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                                  className: "text-decoration-none",
                                  children: "Van Special Offers"
                                })
                              })
                            })]
                          })
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                        className: `${navigation_module_default.a['lvl-item']} ${navigation_module_default.a['simple']}`,
                        id: "electric-hybrid-leasing",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                          href: "/electric-hybrid-car-leasing",
                          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                            className: navigation_module_default.a['lvl-link'],
                            children: ["Electric & Hybrid  ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                              width: "18",
                              height: "18",
                              icon: pro_light_svg_icons_["faBolt"],
                              className: "ml-2 fill-blue"
                            })]
                          })
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                        className: `${navigation_module_default.a['lvl-item']} ${navigation_module_default.a['simple']}`,
                        id: "atc",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                          href: "/car-leasing-with-insurance",
                          prefetch: false,
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                            className: navigation_module_default.a['lvl-link'],
                            children: "Insured Leasing"
                          })
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                        className: `${navigation_module_default.a['lvl-item']} ${navigation_module_default.a['simple']}`,
                        id: "valueyourcar",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                          href: "/value-your-car",
                          prefetch: false,
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                            className: navigation_module_default.a['lvl-link'],
                            children: "Part Exchange"
                          })
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                        className: `${navigation_module_default.a['lvl-item']} ${navigation_module_default.a['simple']}`,
                        id: "my-garage",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                          href: "/my-garage",
                          prefetch: false,
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                            className: navigation_module_default.a['lvl-link'],
                            children: "My Garage"
                          })
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                        className: `${navigation_module_default.a['lvl-item']} ${navigation_module_default.a['mobile']} ${navigation_module_default.a['simple']}`,
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                          href: "/news",
                          prefetch: false,
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                            className: navigation_module_default.a['lvl-link'],
                            children: "Blog"
                          })
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                        className: `${navigation_module_default.a['lvl-item']} ${navigation_module_default.a['mobile']} ${navigation_module_default.a['simple']}`,
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                          href: "/advice",
                          prefetch: false,
                          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                            className: navigation_module_default.a['lvl-link'],
                            children: "Guides"
                          })
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation_link, {
                        className: `${navigation_module_default.a['lvl-item']} ${navigation_module_default.a['mobile']} ${navigation_module_default.a['simple']}`,
                        linkTitle: "Help",
                        id: "mobile-links",
                        handleNavStates: handleNavStates,
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                          className: navigation_module_default.a['sub-lvl'],
                          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                            className: navigation_module_default.a['sub-nav'],
                            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                                href: "/car-leasing-faqs",
                                passHref: true,
                                prefetch: false,
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                                  className: "text-decoration-none",
                                  children: "FAQ's"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                                href: "/customer-testimonials",
                                passHref: true,
                                prefetch: false,
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                                  className: "text-decoration-none",
                                  children: "Testimonials"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                                href: "/our-story",
                                prefetch: false,
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                                  className: "text-decoration-none",
                                  children: "Our Story"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                                href: "/look-after-my-car",
                                passHref: true,
                                prefetch: false,
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                                  className: "text-decoration-none",
                                  children: "Gap Insurance"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                                href: "/what-is-bik-tax",
                                passHref: true,
                                prefetch: false,
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                                  className: "text-decoration-none",
                                  children: "Tax Calculator"
                                })
                              })
                            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                                href: "/fair-wear-and-tear",
                                passHref: true,
                                prefetch: false,
                                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                                  className: "text-decoration-none",
                                  children: "Fair wear and tear"
                                })
                              })
                            })]
                          })
                        })
                      })]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                      className: `${navigation_module_default.a['button-control']} d-none d-lg-flex flex-nowrap align-items-center justify-content-end`,
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                        onClick: () => handleSearchClick(),
                        className: "btn btn-primary btn-fluid vehicle-search-button",
                        children: searchButtonText
                      })
                    })]
                  })
                })
              })]
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: navigation_module_default.a['multilevel-footer'],
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Speak to one of our team"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: `tel:${phoneNumber}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "phonenumber_call_now",
            children: phoneNumber
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: ["Open today: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "9am - 7pm"
          }), " | ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/contact#openinghours",
            passHref: true,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: "See all hours"
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "https://www.facebook.com/LeasingOptionsLtd",
              "aria-label": "Facebook",
              target: "_blank",
              rel: "noreferrer",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                width: "20",
                height: "20",
                icon: free_brands_svg_icons_["faFacebookF"]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "https://www.linkedin.com/company/leasing-options-ltd",
              "aria-label": "LinkedIn",
              target: "_blank",
              rel: "noreferrer",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                width: "20",
                height: "20",
                icon: free_brands_svg_icons_["faLinkedin"]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "https://www.instagram.com/leasing_options_ltd",
              "aria-label": "Instagram",
              target: "_blank",
              rel: "noreferrer",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                width: "20",
                height: "20",
                icon: free_brands_svg_icons_["faInstagram"]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "https://twitter.com/LeasingOptions",
              "aria-label": "Twitter",
              target: "_blank",
              rel: "noreferrer",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                width: "20",
                height: "20",
                icon: free_brands_svg_icons_["faTwitter"]
              })
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ var navigation = (Object(external_react_redux_["connect"])(navigation_mapStateToProps)(Navigation));
// CONCATENATED MODULE: ./components/layout/navigation/index.js

// EXTERNAL MODULE: ./components/layout/deal-selector/deal-selector.module.scss
var deal_selector_module = __webpack_require__("lsBd");
var deal_selector_module_default = /*#__PURE__*/__webpack_require__.n(deal_selector_module);

// CONCATENATED MODULE: ./components/layout/deal-selector/deal-selector.tsx








function deal_selector_mapStateToProps(state) {
  return {
    dealToggle: state.dealSelector
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    handleDealToggle: evt => {
      if (evt.target.checked) {
        dispatch({
          type: 'UPDATE_DEAL_TYPE',
          deal: LeasingDealTypes["a" /* LeasingDealTypes */].Personal
        });
      } else {
        dispatch({
          type: 'UPDATE_DEAL_TYPE',
          deal: LeasingDealTypes["a" /* LeasingDealTypes */].Business
        });
      }
    },
    handleDealLabel: (evt, deal) => {
      evt.preventDefault();
      dispatch({
        type: 'UPDATE_DEAL_TYPE',
        deal: deal
      });
    }
  };
};

function deal_selector_dealSelector(props) {
  const router = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `${deal_selector_module_default.a['deal-selector']} ${props.theme === 'light' ? deal_selector_module_default.a['deal-selector--light'] : ''}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
      className: deal_selector_module_default.a.business,
      onClick: evt => props.handleDealLabel(evt, LeasingDealTypes["a" /* LeasingDealTypes */].Business),
      children: ["Business ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: "Prices"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        type: "checkbox",
        id: "switch",
        onClick: evt => props.handleDealToggle(evt),
        defaultChecked: props.dealToggle === LeasingDealTypes["a" /* LeasingDealTypes */].Personal
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "switch",
        children: "Deal Selector"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
      className: deal_selector_module_default.a.personal,
      onClick: evt => props.handleDealLabel(evt, LeasingDealTypes["a" /* LeasingDealTypes */].Personal),
      children: ["Personal ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: "Prices"
      })]
    })]
  });
}

/* harmony default export */ var deal_selector = (Object(external_react_redux_["connect"])(deal_selector_mapStateToProps, mapDispatchToProps)(deal_selector_dealSelector));
// CONCATENATED MODULE: ./components/layout/deal-selector/index.js

// EXTERNAL MODULE: ./components/layout/header/header.module.scss
var header_module = __webpack_require__("Cv5H");
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);

// CONCATENATED MODULE: ./components/layout/header/header-search.tsx













const HeaderSearch = ({
  dealSelector,
  isInternal
}) => {
  const {
    0: leaseDealType,
    1: setLeaseDealType
  } = Object(external_react_["useState"])(dealSelector === LeasingDealTypes["a" /* LeasingDealTypes */].Van ? LeasingDealTypes["a" /* LeasingDealTypes */].Business : dealSelector);
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

  const handleSearchInit = evt => {
    let searchQuery = evt.target.value.toString();

    if (searchQuery.length >= 2) {
      setIsLoading(true);
      Promise.resolve(getSearchResults(searchQuery)).then(function (data) {
        setIsactive(true);
        setSearchResults(data.data);
        setIsLoading(false);
      });
    } else {
      setIsactive(false);
      setSearchResults([]);
    }
  };

  const handleSearchBlur = () => {
    document.body.removeEventListener('click', handleSearchClose);
  };

  const handleSearchClose = () => {
    setIsactive(false);
    setIsLoading(false);
    setSearchResults([]);
  };

  async function getSearchResults(searchQuery) {
    return await Object(vehicleService["z" /* GetSearchResults */])(searchQuery, isInternal);
  }

  Object(external_react_["useEffect"])(() => {
    setLeaseDealType(dealSelector === LeasingDealTypes["a" /* LeasingDealTypes */].Van ? LeasingDealTypes["a" /* LeasingDealTypes */].Personal : dealSelector);
    setIsactive(false);
    setSearchResults([]);
    setIsLoading(false);
  }, [dealSelector]);
  Object(external_react_["useEffect"])(() => {
    document.body.addEventListener('click', handleSearchClose);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: header_module_default.a['input-wrapper'],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: header_module_default.a['input-icon'],
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        width: "16",
        height: "16",
        icon: free_solid_svg_icons_["faSearch"]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "search",
      placeholder: "e.g. BMW 3 Series",
      onFocus: evt => {
        handleSearchInit(evt);
      },
      onKeyUp: evt => {
        handleSearchInit(evt);
      },
      onBlur: evt => handleSearchBlur
    }), isLoading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
      width: "16",
      height: "16",
      icon: free_solid_svg_icons_["faSpinner"],
      className: `fa-spin ${header_module_default.a['input-loading']}`
    }) : "", /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${header_module_default.a['input-list']} ${isActive ? header_module_default.a['is-active'] : ""}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
        children: searchResults.map(result => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              passHref: true,
              href: Object(urlHelper["v" /* GetVehicleUrl */])(false, '', result.vehicleTypeId === VehicleTypes["a" /* VehicleTypes */].Commercial ? LeasingDealTypes["a" /* LeasingDealTypes */].Van : leaseDealType, result.manufacturer, result.shortModTextUrl, result.modelUrl, result.derivativeUrl, result.vehicleRef, null, null, null, null, isInternal),
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                children: [result.manufacturer, " ", result.model, " ", result.derivative]
              })
            })
          }, `result-${result.vehicleRef}`);
        })
      })
    })]
  });
};

const header_search_mapStateToProps = state => ({
  isInternal: state.isInternal
});

/* harmony default export */ var header_search = (Object(external_react_redux_["connect"])(header_search_mapStateToProps)(HeaderSearch));
// EXTERNAL MODULE: ./components/trustpilot/trust-score/trust-score.module.scss
var trust_score_module = __webpack_require__("KjR0");
var trust_score_module_default = /*#__PURE__*/__webpack_require__.n(trust_score_module);

// EXTERNAL MODULE: ./helpers/currencyHelper.tsx
var currencyHelper = __webpack_require__("oszm");

// CONCATENATED MODULE: ./components/trustpilot/trust-score/trust-score.tsx







function trust_score_mapStateToProps(state) {
  return {
    trustPilotRating: state.trustPilotRating
  };
}

const TrustScore = ({
  trustPilotRating
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: trust_score_module_default.a['trust-score'],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: trust_score_module_default.a['trust-score__logo'],
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/trustpilot-logo-score.svg`,
        className: `${trust_score_module_default.a['trust-micro__logo']} img-fluid lazyload`,
        alt: "Trustpilot logo"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: trust_score_module_default.a['trust-score__reviews'],
      children: [Object(currencyHelper["b" /* formatNumber */])(Math.round(parseInt(trustPilotRating === null || trustPilotRating === void 0 ? void 0 : trustPilotRating.reviewsCount) * 10 / 10)), "k reviews"]
    })]
  });
};

/* harmony default export */ var trust_score = (Object(external_react_redux_["connect"])(trust_score_mapStateToProps)(TrustScore));
// CONCATENATED MODULE: ./components/trustpilot/trust-score/index.jsx

// EXTERNAL MODULE: ./helpers/analytics.tsx
var analytics = __webpack_require__("btDt");

// CONCATENATED MODULE: ./components/layout/header/header.tsx











const header_Search = dynamic_default()(() => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "SUUS")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("SUUS")],
    modules: ['../../search']
  }
});
const header_ModalPostcode = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "TG2e")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("TG2e")],
    modules: ['../modal-postcode/modal-postcode']
  }
});
const ModalContact = dynamic_default()(() => __webpack_require__.e(/* import() */ 146).then(__webpack_require__.bind(null, "j7jT")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("j7jT")],
    modules: ['../modal-contact/modal-contact']
  }
});









const Header = props => {
  const router = Object(router_["useRouter"])();
  const modalContext = Object(external_react_["useContext"])(modal_modalContext["a" /* default */]);
  const {
    0: navToggle,
    1: setNavToggle
  } = Object(external_react_["useState"])(false);
  const {
    0: searchToggle,
    1: setSearchToggle
  } = Object(external_react_["useState"])(false);
  const {
    0: searchButtonText,
    1: setSearchButtonText
  } = Object(external_react_["useState"])(Object(helpers["s" /* getSearchButton */])(router, props.vehicleFilters, props.dealSelector));

  const handleHeaderToggle = (evt, toggle) => {
    evt.preventDefault();
    props.dispatchHeaderToggle(toggle);
  };

  const handleSearchToggle = evt => {
    evt.preventDefault();
    setSearchToggle(!searchToggle);
  };

  const handleMenuToggle = evt => {
    evt.preventDefault();
    setNavToggle(!navToggle);
    props.dispatchMenuToggle();
  };

  const handleMenuClose = evt => {
    evt.preventDefault();
    setNavToggle(false);
    props.dispatchMenuClose();
  };

  const handleSearchClick = () => {
    if (router.pathname.includes('car-leasing-with-insurance')) {
      if (props.userPostcode) {
        modalContext.showModal(header_Search, {
          show: true,
          title: "Refine Search",
          activePanel: SearchPanels["a" /* SearchPanels */].SearchDetailed
        });
      } else {
        modalContext.showModal(header_ModalPostcode, {
          show: true,
          title: 'Search Insured Cars'
        });
      }
    } else {
      modalContext.showModal(header_Search, {
        show: true,
        title: searchButtonText,
        activePanel: searchButtonText === "Refine Search" ? 6 : 1
      });
    }
  };

  const logContact = () => {
    Object(analytics["c" /* logEvent */])('Contact', 'Click');
    Object(analytics["d" /* logLabelEvent */])('Contact', 'Click', 'leave_message_track');
  };

  const handleContactClick = () => {
    modalContext.showModal(ModalContact, {
      show: true,
      title: "Contact"
    });
  };

  const HasLeaseDealTypeToggle = router => {
    let showToggle = false; //TODO: check this logic. Don't think router.pathname.includes('car-leasing') check is correct. In any case better solution is required

    if (router.asPath === "/" || router.asPath !== "/car-leasing-with-insurance" && router.pathname.includes('car-leasing')) {
      showToggle = true;
    }

    return showToggle;
  };

  Object(external_react_["useEffect"])(() => {
    router_default.a.events.on('routeChangeStart', url => {
      setNavToggle(false);
      props.dispatchMenuClose();
      props.dispatchRouteChange(url); // Close search on route change

      modalContext.showModal(header_Search, {
        show: false,
        title: "Start Your Search"
      });
    });
  }, []);
  Object(external_react_["useEffect"])(() => {
    // Check for active filters
    setSearchButtonText(Object(helpers["s" /* getSearchButton */])(router, props.vehicleFilters, props.dealSelector));
  }, [router, props.vehicleFilters, props.dealSelector]);
  const hasLeaseDealTypeToggle = HasLeaseDealTypeToggle(router);
  const phoneNumber = Object(helpers["g" /* GetPhoneNumber */])(props.isInternal);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: `${header_module_default.a['header']} ${props.headerToggle ? header_module_default.a['header--condensed'] : ''}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${header_module_default.a['head-toggle']} container-fluid d-lg-none`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: `col-24 ${header_module_default.a['head-toggle__col']}`,
          children: hasLeaseDealTypeToggle && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: header_module_default.a['deal-manage'],
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(deal_selector, {
                theme: "light"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: header_module_default.a['head-toggle__close'],
                onClick: evt => handleHeaderToggle(evt, true),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                  width: "20",
                  height: "20",
                  icon: pro_regular_svg_icons_["faTimes"]
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: header_module_default.a['deal-view'],
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                className: `${header_module_default.a['deal-label']} ${header_module_default.a['deal-indicator']}`,
                children: [props.dealSelector === 1 ? "Business" : "Personal", " Prices Active"]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: `${header_module_default.a['deal-label']} ${header_module_default.a['deal-edit']} ${header_module_default.a['head-toggle__open']}`,
                onClick: evt => handleHeaderToggle(evt, false),
                children: "Change Prices"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                width: "16",
                height: "16",
                icon: pro_regular_svg_icons_["faEdit"]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                width: "16",
                height: "16",
                icon: pro_regular_svg_icons_["faCheck"]
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `container-fluid ${header_module_default.a['head-bar']}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `row ${header_module_default.a['head-bar__row']}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: `col-10 col-lg-4 ${header_module_default.a['head-bar__col']}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            prefetch: false,
            href: "/",
            passHref: true,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: `${"https://imagecdn.leasingoptions.co.uk"}/website/static/leasing-options-logo.svg`,
                alt: "LeasingOptions Logo",
                className: "img-fluid",
                width: "230"
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `col-14 ${header_module_default.a['head-bar__col']} d-inline-flex justify-content-end align-items-center d-lg-none`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            className: `${header_module_default.a['head-bar__ql']} list-inline`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "list-inline-item",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                onClick: evt => handleContactClick(),
                "aria-label": "Contact",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                  width: "16",
                  height: "16",
                  icon: pro_regular_svg_icons_["faEnvelope"],
                  onClick: logContact
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "list-inline-item",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: `tel:${phoneNumber}`,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                  width: "22",
                  height: "22",
                  icon: pro_regular_svg_icons_["faPhoneAlt"]
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "list-inline-item",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                onClick: evt => handleSearchToggle(evt),
                "aria-label": "Search",
                children: searchToggle ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                  width: "22",
                  height: "22",
                  icon: pro_regular_svg_icons_["faTimes"]
                }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                  width: "22",
                  height: "22",
                  icon: pro_regular_svg_icons_["faSearch"]
                })
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
            id: header_module_default.a['head-bar__toggle'],
            onClick: evt => handleMenuToggle(evt),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: "Menu"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
              width: "22",
              height: "25",
              icon: pro_regular_svg_icons_["faBars"]
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: `col-4 d-none d-lg-flex justify-content-center align-items-center ${header_module_default.a['head-bar__col']}`,
          children: hasLeaseDealTypeToggle && /*#__PURE__*/Object(jsx_runtime_["jsx"])(deal_selector, {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          id: "text-search",
          className: `${header_module_default.a['head-bar__col']} ${header_module_default.a['head-bar__search']} col-24 col-lg-6 ${searchToggle ? 'd-block' : ''}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(header_search, {
            dealSelector: props.dealSelector
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: `${header_module_default.a['head-bar__col']} col-6 d-none d-lg-flex justify-content-center align-items-center text-center`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            className: `${header_module_default.a['head-bar__sub']} list-inline`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "list-inline-item",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                prefetch: false,
                passHref: true,
                href: "/news",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: "Blog"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "list-inline-item",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                prefetch: false,
                passHref: true,
                href: "/advice",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: "Guides"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
              className: `list-inline-item ${header_module_default.a['head-bar__dd']}`,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: header_module_default.a['lvl-caption'],
                children: ["Help ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                  width: "20",
                  height: "20",
                  icon: pro_regular_svg_icons_["faChevronDown"]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: header_module_default.a['sub-lvl'],
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                  className: header_module_default.a['sub-nav'],
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                      prefetch: false,
                      passHref: true,
                      href: "/car-leasing-faqs",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        children: "FAQs"
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                      prefetch: false,
                      passHref: true,
                      href: "/customer-testimonials",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        children: "Testimonials"
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                      prefetch: false,
                      passHref: true,
                      href: "/our-story",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        children: "Our Story"
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                      prefetch: false,
                      passHref: true,
                      href: "/look-after-my-car",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        children: "Gap Insurance"
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                      prefetch: false,
                      passHref: true,
                      href: "/what-is-bik-tax",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        children: "Tax Calculator"
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                      prefetch: false,
                      passHref: true,
                      href: "/fair-wear-and-tear",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        children: "Fair Wear And Tear"
                      })
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "list-inline-item",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                "aria-label": "Contact",
                onClick: evt => handleContactClick(),
                children: "Contact"
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: `${header_module_default.a['head-bar__col']} ${header_module_default.a['head-bar__tel']} col-4 d-none d-lg-block text-right`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            "aria-label": "Phone number",
            href: `tel:${phoneNumber}`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "phonenumber_call_now",
              children: phoneNumber
            })
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `container-fluid ${header_module_default.a['head-cta']} d-lg-none`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 d-flex flex-nowrap align-items-center justify-content-between",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_score, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: "btn btn-primary btn-fluid vehicle-search-button",
            onClick: () => handleSearchClick(),
            children: searchButtonText
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(navigation, {
      navToggle: navToggle,
      searchButtonText: searchButtonText,
      handleMenuClose: handleMenuClose
    })]
  });
};

const header_mapStateToProps = state => ({
  isInternal: state.isInternal,
  dealSelector: state.dealSelector,
  headerToggle: state.headerToggle,
  vehicleFilters: state.vehicleFilters,
  userPostcode: state.userPostcode
});

const header_mapDispatchToProps = dispatch => {
  return {
    dispatchHeaderToggle: toggle => {
      dispatch({
        type: 'UPDATE_HEADER_STATE',
        toggle: toggle
      });
    },
    dispatchMenuToggle: () => {
      dispatch({
        type: 'UPDATE_OVERLAY_STATE',
        state: false
      });
    },
    dispatchMenuClose: () => {
      dispatch({
        type: 'UPDATE_LINK_STATE',
        id: "",
        level: 1,
        controls: false,
        indicator: ""
      });
      dispatch({
        type: 'UPDATE_OVERLAY_STATE',
        state: false
      });
    },
    dispatchRouteChange: url => {
      //Set referrer
      dispatch({
        type: "UPDATE_REFERRER",
        url: url
      }); // Reset navigation state

      dispatch({
        type: 'UPDATE_LINK_STATE',
        id: "",
        level: 1,
        controls: false,
        indicator: ""
      }); // Reset Overlay

      dispatch({
        type: 'UPDATE_OVERLAY_STATE',
        state: false
      });
    }
  };
};

/* harmony default export */ var header = (Object(external_react_redux_["connect"])(header_mapStateToProps, header_mapDispatchToProps)(Header));
// CONCATENATED MODULE: ./components/layout/header/index.js


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

/***/ "veHW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _page_banner_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Mw6g");
/* harmony import */ var _page_banner_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_banner_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var enums_NewsTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("lVS+");
/* harmony import */ var business_logic_newsService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("7kSQ");










const PageBannerSearchNews = ({
  newsType
}) => {
  const newsSearchTerm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: selectednewsType,
    1: setSelectednewsType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(newsType);
  const {
    0: searchList,
    1: setSearchList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const handleNewsTypeChange = evt => setSelectednewsType(evt.currentTarget.value);

  const handleNewsSearch = () => getSearchResults();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getSearchResults();
  }, [selectednewsType]);

  function getSearchResults() {
    // @ts-ignore
    let searchTerm = newsSearchTerm.current.value.toString();

    if (searchTerm.length >= 3) {
      setIsLoading(true);
      Promise.resolve(GetNewsSearchList(selectednewsType, searchTerm)).then(function (data) {
        setSearchList(data.data);
        setIsLoading(false);
      });
    } else {
      setSearchList([]);
    }
  }

  async function GetNewsSearchList(newsType, searchTerm) {
    return await business_logic_newsService__WEBPACK_IMPORTED_MODULE_7__[/* NewsService */ "a"].GetNewsSearchList(newsType, searchTerm);
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: _page_banner_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['page-banner__search'],
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _page_banner_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['page-banner__dd'],
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
          defaultValue: selectednewsType,
          onChange: evt => handleNewsTypeChange(evt),
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
            value: "",
            children: "Search all articles"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
            value: enums_NewsTypes__WEBPACK_IMPORTED_MODULE_6__[/* NewsTypes */ "a"].LatestNews,
            children: "Latest News"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
            value: enums_NewsTypes__WEBPACK_IMPORTED_MODULE_6__[/* NewsTypes */ "a"].VehicleReviews,
            children: "Vehicle Reviews"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
            value: enums_NewsTypes__WEBPACK_IMPORTED_MODULE_6__[/* NewsTypes */ "a"].Blog,
            children: "Blog"
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "w-100 d-inline-flex",
        children: [isLoading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
          width: "40",
          height: "50",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSpinner"],
          className: `fa-spin ${_page_banner_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['page-banner__loading']}`
        }) : "", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          ref: newsSearchTerm,
          type: "search",
          placeholder: "e.g. BMW 3 Series",
          autoComplete: "off",
          onChange: () => handleNewsSearch()
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
            width: "40",
            height: "50",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"],
            onClick: () => handleNewsSearch()
          })
        })]
      }), searchList.length > 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _page_banner_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['page-banner_results'],
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
          children: searchList.map(result => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: result.url,
              passHref: true,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                children: result.title
              })
            })
          }, `result-${result.url}`))
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (PageBannerSearchNews);

/***/ }),

/***/ "voCN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_overlay_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PdwN");
/* harmony import */ var _page_overlay_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_overlay_module_scss__WEBPACK_IMPORTED_MODULE_3__);





function mapStateToProps(state) {
  return {
    overlayState: state.overlayState
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleOverlayClick: evt => {
      dispatch({
        type: 'UPDATE_OVERLAY_STATE',
        state: false
      });
      dispatch({
        type: 'UPDATE_LINK_STATE',
        id: "",
        level: 1,
        controls: false,
        indicator: ""
      });
    }
  };
};

const PageOverlay = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: `${_page_overlay_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['page-overlay']} ${props.overlayState ? _page_overlay_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['is-active'] : ""}`,
    onClick: evt => props.handleOverlayClick(evt)
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(PageOverlay));

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

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xDYP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ card_news; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/card/card-news/card-news.module.scss
var card_news_module = __webpack_require__("Ps8g");
var card_news_module_default = /*#__PURE__*/__webpack_require__.n(card_news_module);

// EXTERNAL MODULE: ./helpers/helpers.tsx
var helpers = __webpack_require__("mmV+");

// EXTERNAL MODULE: ./helpers/enumsHelper.tsx + 3 modules
var enumsHelper = __webpack_require__("YLv1");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./helpers/stringHelper.tsx
var stringHelper = __webpack_require__("Kj82");

// CONCATENATED MODULE: ./components/card/card-news/card-news.tsx












//TODO: enqure that excerpt contains plain text only
const CardNews = ({
  condensed = false,
  id,
  image,
  tag,
  link,
  title,
  date,
  excerpt,
  moreLink,
  moreText,
  className
}) => {
  const cardImage = image ? image : "/fit-in/400x400/website/static/img-placeholder.jpg";
  const momentDate = external_moment_default()(date, "YYYY-MM-DDTHH:mm");
  const formattedDate = momentDate.format("DD MMMM YYYY");
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    id: id,
    className: `${card_news_module_default.a['card-news']} ${card_news_module_default.a[className]} ${condensed ? card_news_module_default.a['card-news--condensed'] : ''} ${moreLink ? card_news_module_default.a['card-news--featured'] : ''}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("style", {
      dangerouslySetInnerHTML: {
        __html: `#${id} .${card_news_module_default.a['card-news__img']} { background-image: url(${"https://imagecdn.leasingoptions.co.uk" + cardImage});}`
      }
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: card_news_module_default.a['card-news__img'],
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: '/news/[category]/[url]/[id]',
        as: link,
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {})
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: card_news_module_default.a['card-news__info'],
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: '/news/[category]/[url]/[id]',
        as: link,
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: `${card_news_module_default.a['card-news__tag']} ${tag ? card_news_module_default.a[Object(helpers["f" /* GetNewsTagClass */])(tag)] : ''}`,
            children: Object(enumsHelper["e" /* GetNewsTypeText */])(tag)
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
            children: title
          }), condensed ? "" : /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: formattedDate
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            dangerouslySetInnerHTML: {
              __html: condensed ? Object(stringHelper["f" /* shortCut */])(excerpt.replace('<br>', ''), 70) : excerpt
            }
          })]
        })
      })
    }), moreLink && /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: moreLink,
      passHref: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: `${card_news_module_default.a['card-news__more']}`,
        children: [moreText, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "16",
          height: "16",
          icon: free_solid_svg_icons_["faAngleDoubleRight"]
        })]
      })
    })]
  });
};

/* harmony default export */ var card_news = (CardNews);
// CONCATENATED MODULE: ./components/card/card-news/index.jsx


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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z+X5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ main_layout; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/layout/breadcrumbs/index.jsx + 1 modules
var layout_breadcrumbs = __webpack_require__("8xcb");

// EXTERNAL MODULE: ./components/page-overlay/page-overlay.tsx
var page_overlay = __webpack_require__("voCN");

// EXTERNAL MODULE: ./helpers/schemaHelper.tsx
var schemaHelper = __webpack_require__("+CZG");

// EXTERNAL MODULE: ./components/live-chat/index.tsx
var live_chat = __webpack_require__("jD8p");

// EXTERNAL MODULE: ./components/leasebot/helper.tsx + 1 modules
var helper = __webpack_require__("PYSM");

// EXTERNAL MODULE: ./business-logic/authenticationService.tsx
var authenticationService = __webpack_require__("EXpO");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./helpers/breadcrumbsHelper.tsx
var breadcrumbsHelper = __webpack_require__("acQV");

// EXTERNAL MODULE: ./components/layout/header/index.js + 14 modules
var header = __webpack_require__("v878");

// EXTERNAL MODULE: ./components/layout/footer/index.js + 1 modules
var footer = __webpack_require__("EMmP");

// EXTERNAL MODULE: ./components/layout/to-top/to-top.tsx
var to_top = __webpack_require__("sZbk");

// CONCATENATED MODULE: ./components/layout/to-top/index.jsx

// EXTERNAL MODULE: ./components/leasebot/leaseBotIcon.tsx
var leaseBotIcon = __webpack_require__("7jhi");

// EXTERNAL MODULE: ./business-logic/systemService.tsx + 1 modules
var systemService = __webpack_require__("uDbZ");

// CONCATENATED MODULE: ./components/layout/main-layout/main-layout.tsx




















const MainLayout = ({
  isInternal,
  dispatchInternalCheck,
  metaData,
  breadcrumbs,
  children,
  className,
  trustPilotRating,
  updateTrustPilotRating
}) => {
  const router = Object(router_["useRouter"])();
  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 1);

  const checkChatStatus = () => {
    var liveChat = document.getElementById("liveChatLink");
    var chatWrapper = document.getElementById("chatwrapper");

    if (Object(helper["a" /* isWithinLeaseBotHours */])()) {
      if (true) {
        chatWrapper === null || chatWrapper === void 0 ? void 0 : chatWrapper.classList.remove("d-none");
      }

      liveChat === null || liveChat === void 0 ? void 0 : liveChat.classList.add("d-none");
    } else {
      chatWrapper === null || chatWrapper === void 0 ? void 0 : chatWrapper.classList.add("d-none");
      liveChat === null || liveChat === void 0 ? void 0 : liveChat.classList.remove("d-none");
    }
  };

  Object(external_react_["useEffect"])(() => {
    // Check for internal user on first pageload
    checkInternalIp();
    checkTrustpilot(); // Check for internal user on first route change

    router_["Router"].events.on('routeChangeComplete', () => {
      checkInternalIp();
      checkTrustpilot();
    });
  }, []);

  const checkTrustpilot = () => {
    if (trustPilotRating == null) {
      Object(systemService["c" /* GetTrustPilotRating */])().then(response => {
        updateTrustPilotRating(response.data);
      });
    }
  };

  Object(external_react_["useEffect"])(() => {
    // Check chat status
    // ! This is required otherwise there's a delay in showing the cirrect chat
    checkChatStatus(); // Check chat repeater

    const interval = setInterval(checkChatStatus, 15000);
    return () => clearInterval(interval);
  }, []);

  function checkInternalIp() {
    if (isInternal === null) {
      authenticationService["a" /* AuthenticationService */].IsInternalPage().then(result => {
        dispatchInternalCheck(result.data);
      }).catch(error => {
        console.log(error);
      });
    }
  }

  var breadcrumbs = Object(breadcrumbsHelper["a" /* getBreadcrumbs */])(router);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [metaData ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
          children: metaData.title
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "description",
          content: metaData.description
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "keywords",
          content: metaData.keywords
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          property: "og:type",
          content: "website"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          property: "og:url",
          content: "https://www.leasingoptions.co.uk" + router.asPath
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          property: "og:title",
          content: metaData.title
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          property: "og:description",
          content: metaData.description
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          property: "og:image",
          content: metaData.imageUrl ? metaData.imageUrl : "https://imagecdn.leasingoptions.co.uk" + "/fit-in/400x400/website/static/img-placeholder.jpg"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          property: "twitter:card",
          content: "summary_large_image"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          property: "twitter:url",
          content: "https://www.leasingoptions.co.uk" + router.asPath
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          property: "twitter:title",
          content: metaData.title
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          property: "twitter:description",
          content: metaData.description
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          property: "twitter:image",
          content: metaData.imageUrl ? metaData.imageUrl : "https://imagecdn.leasingoptions.co.uk" + "/fit-in/400x400/website/static/img-placeholder.jpg"
        })]
      }) : null, metaData && metaData.canonicalUrl ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
          rel: "canonical",
          href: metaData.canonicalUrl
        })
      }) : null, metaData && metaData.ampHTML ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
          rel: "amphtml",
          href: metaData.ampHTML
        })
      }) : null, metaData && metaData.noIndex ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "robots",
          content: "noindex,nofollow"
        })
      }) : null, metaData && metaData.author ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "author",
          content: metaData.author
        })
      }) : null, breadcrumbs && breadcrumbs.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: Object(schemaHelper["e" /* GetSerializedSchema */])(Object(schemaHelper["c" /* GetBreadcrumbsSchema */])(breadcrumbs))
        }
      }) : null,  true && /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
        type: "application/javascript",
        dangerouslySetInnerHTML: {
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PG5CHN');`
        }
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(header["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout_breadcrumbs["a" /* default */], {
      breadcrumbs: breadcrumbs
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
      className: className,
      children: children
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(footer["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(to_top["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(page_overlay["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(leaseBotIcon["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(live_chat["a" /* default */], {})]
  });
};

const mapStateToProps = state => ({
  isInternal: state.isInternal,
  trustPilotRating: state.trustPilotRating
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchInternalCheck: internal => {
      dispatch({
        type: "UPDATE_INTERNAL",
        internal: internal
      });
    },
    updateTrustPilotRating: data => {
      dispatch({
        type: 'UPDATE_TRUSTPILOT_RATING',
        data: data
      });
    }
  };
};

/* harmony default export */ var main_layout = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(MainLayout));
// CONCATENATED MODULE: ./components/layout/main-layout/index.js


/***/ }),

/***/ "zaUG":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"newsletter": "newsletter_newsletter__1LkFT"
};


/***/ }),

/***/ "zjYf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RemoveInternalIdentifier */
/* unused harmony export getPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return TopPageMetaDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MakePageMetaTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MakePageMetaDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ModelPageMetaTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ModelPageMetaDescription; });
/* unused harmony export SearchPageTitle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetNewsCategoryPageTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetNewsCategoryPageMetaDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GetNewsCategoryPageKeywords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GetNewsCategoryPageMetaImageDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetBodyTypePageMetaImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return VehiclePageTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return VehicleMetaDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAdviceCategoryMeta; });
/* harmony import */ var enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("l7ai");
/* harmony import */ var enums_NewsTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lVS+");
/* harmony import */ var _enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ezaw");
/* harmony import */ var _stringHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Kj82");
/* harmony import */ var _urlHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zjkP");
/* harmony import */ var _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("P0/Z");
/* harmony import */ var helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xVrE");








const internaalIdentifier = "/internal";
const pages = [{
  url: "/",
  metaData: {
    title: "Leasing Options | 5* Professional & Personal Vehicle Leasing Service",
    description: "Business & Personal Car Leasing Deals from Leasing Options UK - {0} Years Experience, FREE Instant Quotes & Price Match Promise on our Car Lease Deals.",
    // CurrentAppContext.Years),
    keywords: "Car Leasing, Business Car Leasing, Car Lease Deals, Car Leasing Manchester, Contract Hire"
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].Careers,
  metaData: {
    title: "Car Leasing Industry Career Opportunities | Jobs at Leasing Options",
    description: "Looking for a career in Car Leasing? Find out more about a career with Leasing Options, an established market leader in the Leasing Industry.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].Complaints,
  metaData: {
    title: "Complaints Procedure | Leasing Options ",
    description: "Let us help you resolve your complaint, find details of how Leasing Options can help.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].Contact,
  metaData: {
    title: "Contact Us | Leasing Options the UK Car Leasing Specialist",
    description: "Find details on how to contact us. Here at Leasing Options we have a unique team of Leasing Experts to assist you with any of your needs.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].Dealometer,
  metaData: {
    title: "Find the Best Car Lease Deals using our DealOmeter | Leasing Options",
    description: "Use our new DealOmeter tool to find your perfect car lease deal by searching by the type of car, fuel and drive of the car.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].FairWearAndTear,
  metaData: {
    title: "BVRLA Fair Wear and Tear Policy | Leasing Options",
    description: "What is Fair Wear and Tear on a leased car? Find out with our outline of the BVRLA's Fair Wear and Tear policy.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].FAQ,
  metaData: {
    title: "Frequently Asked Car Leasing Questions | Leasing Options",
    description: "Find answers to some of the most frequently asked Car Leasing questions or contact us directly to get an answer.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].InitialDisclosure,
  metaData: {
    title: "Initial Disclosure Document | Leasing Options",
    description: "Read the Leasing Options Limited Initial Disclosure Policy Document.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].MyGarage,
  metaData: {
    title: "Compare Car Lease Deals: Comparison Garage | Leasing Options",
    description: "Use the My Garage Leasing Options tool to quickly and easily compare Cars and Car Lease Deals to find your perfect lease.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].OurStory,
  metaData: {
    title: "About Leasing Options Ltd & Nigel Brain: UK Car Leasing Specialist",
    description: "Find out more about who Leasing Options are and how Nigel has grown the company over the last {0} years!",
    //CurrentAppContext.Years),
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].PricePromise,
  metaData: {
    title: "Price Match Promise | £50 if we cant Price Match | Leasing Options",
    description: "Leasing Options offer competitive Leasing Deals and if you find a cheaper price elsewhere we will match it and offer £50 off!",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].PrivacyAndCookiePolicy,
  metaData: {
    title: "Privacy & Cookie Policy | Leasing Options",
    description: "Read details of the Leasing Options Limited Privacy & Cookie Policy.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].PrivacyPolicy,
  metaData: {
    title: "Privacy Policy | Leasing Options",
    description: "Read details of the Leasing Options Limited Privacy Policy.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].CookiePolicy,
  metaData: {
    title: "Cookie Policy | Leasing Options",
    description: "Read details of the Leasing Options Limited Cookie Policy.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].RequestCallback,
  metaData: {
    title: "Request a Callback - Talk to one of our friendly Team | Leasing Options",
    description: "Our team of experts are here to help you find your perfect vehicle and answer any questions you may have about Leasing.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].TermsAndConditions,
  metaData: {
    title: "Terms & Conditions | Leasing Options",
    description: "Read details our Terms and Conditions.",
    keywords: ""
  }
}, {
  url: "/sitemap",
  metaData: {
    title: "Sitemap | Leasing Options",
    description: "View the Leasing Options Sitemap to help you navigate our site.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].TreatingCustomersFairly,
  metaData: {
    title: "Treating Our Customers Fairly | Leasing Options",
    description: "Providing customers with an excellent level of service & treating customers fairly has been at the core of our business philosophy.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].News,
  metaData: {
    title: "Car Leasing News | Latest news from Leasing options in Manchester",
    description: "Read the latest news from the Motoring Industry as well as news about the Leasing Industry brought to you from Industry experts.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].TaxCalculator,
  metaData: {
    title: "What is BIK (Benefit In Kind) Tax | Leasing Options",
    description: "What is Benefit In Kind (BIK) Tax? How is it calculated? Find the answers to your BIK Car Tax questions here - Leasing Options",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].ValueYourCar,
  metaData: {
    title: "Part Exchange Car Lease - Value Your Car | Leasing Options",
    description: "Value your car online now with Leasing Options and work out how much you can put towards your new car leasing deal. You'll even have your car picked up for free!",
    keywords: ""
  }
}, {
  url: "/car-leasing-deals",
  metaData: {
    title: "Best Car Lease Deals & Special Offers | Leasing Options",
    description: "Take advantage of our best car lease deals. Personal & business lease deals available all in one place, vehicles delivered anywhere in the UK.",
    keywords: ""
  }
}, {
  url: "/van-leasing-deals",
  metaData: {
    title: "Best Van Lease Deals & Special Offers | Leasing Options",
    description: "Take advantage of our best van lease deals. Personal & business lease deals available all in one place, vehicles delivered anywhere in the UK.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].VED,
  metaData: {
    title: "Car Tax – Vehicle Excise Duty (VED) 2017 Changes | Leasing Options",
    description: "Vehicle Excise Duty (VED) car tax is due to change from 1st April 2017, take a look at what is changing and how this might impact you.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].Lccc,
  metaData: {
    title: "Lancashire Cricket Club Partnership | Leasing Options",
    description: "Find out more about the partnership between Lancashire Cricket Club and Leasing Options.",
    keywords: ""
  }
}, {
  url: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetNewsTypeUrl */ "o"])(enums_NewsTypes__WEBPACK_IMPORTED_MODULE_1__[/* NewsTypes */ "a"].LatestNews),
  metaData: {
    title: "Car Leasing Industry News | Leasing Options",
    description: "Stay up-to-date with the car leasing industry news, featuring the latest developments in the car leasing market | Leasing Options",
    keywords: ""
  }
}, {
  url: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetNewsTypeUrl */ "o"])(enums_NewsTypes__WEBPACK_IMPORTED_MODULE_1__[/* NewsTypes */ "a"].VehicleReviews),
  metaData: {
    title: "Vehicle Reviews – Car & Van Reviews | Leasing Options",
    description: "Read through our unbiased vehicle reviews to help you make a decision when looking for your perfect car | Leasing Options",
    keywords: ""
  }
}, {
  url: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetNewsTypeUrl */ "o"])(enums_NewsTypes__WEBPACK_IMPORTED_MODULE_1__[/* NewsTypes */ "a"].Blog),
  metaData: {
    title: "Leasing Options Blog - Car Leasing Blog",
    description: "Read the latest from Leasing Options on our car leasing blog, featuring our latest company updates and developments | Leasing Options",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].CustomerTestimonials,
  metaData: {
    title: "Car Leasing Customer Testimonials | Leasing Options",
    description: "Watch our Customer Testimonial video and find out what happy customers who took advantage of our Car Leasing deals have to say, on LeasingOptions.co.uk",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].LcccOffer,
  metaData: {
    title: "Lancashire County Cricket Club Special Offer | Leasing Options",
    description: "Read about our Lancashire County Cricket Club Special Offer.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].MovieCars,
  metaData: {
    title: "Iconic Movie Cars Quiz | Leasing Options UK",
    description: "The perfect game if you love cars and movies. Find the iconic movie cars hidden in this fantastic city-scape.",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].LookAfterMyCar,
  metaData: {
    title: "Look After My Car | Leasing Options UK",
    description: "",
    keywords: ""
  }
}, {
  url: _enums_StaticUrls__WEBPACK_IMPORTED_MODULE_5__[/* StaticUrls */ "a"].CarLeasingWithInsurance,
  metaData: {
    title: "Car Leasing With Insurance | Leasing Options UK",
    description: "Get everything in one package with our Fuel & Go car leasing with insurance deals. Includes maintenance, repairs & breakdown cover. Enquire today.",
    keywords: ""
  }
}];
const RemoveInternalIdentifier = urlPath => {
  if (urlPath == "/internal") {
    return "/";
  } else if (urlPath.startsWith(internaalIdentifier)) {
    return urlPath.replace(internaalIdentifier, "");
  } else {
    return urlPath;
  }
};
const getPage = urlPath => {
  return pages.find(x => {
    return x.url == urlPath;
  });
};
const TopPageMetaDescription = (leasingDealType, URLpath) => {
  var _getPage, _getPage$metaData, _getPage2, _getPage2$metaData;

  var result = "";
  URLpath = RemoveInternalIdentifier(URLpath);
  result = (_getPage = getPage(URLpath)) === null || _getPage === void 0 ? void 0 : (_getPage$metaData = _getPage.metaData) === null || _getPage$metaData === void 0 ? void 0 : _getPage$metaData.description;

  if (Object(_stringHelper__WEBPACK_IMPORTED_MODULE_3__[/* isNullOrWhiteSpace */ "c"])(result)) {
    switch (leasingDealType) {
      case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Business:
      default:
        result = "The best business car leasing deals available now at Leasing Options. A huge range of affordable contract hire vehicles with a 5-star Trustpilot rating.";
        break;

      case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Personal:
        result = "Get the best car leasing deals for personal contract hire from Leasing Options. Vehicles delivered anywhere in the UK. Get your FREE instant quote, today.";
        break;

      case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Van:
        result = "Leasing Options offer the most competitive van lease deals in the marketplace. We will not be beaten on price for long term van hire.";
        break;

      case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].None:
        result = (_getPage2 = getPage("/")) === null || _getPage2 === void 0 ? void 0 : (_getPage2$metaData = _getPage2.metaData) === null || _getPage2$metaData === void 0 ? void 0 : _getPage2$metaData.description;
        break;
    }
  }

  return result;
};
const MakePageMetaTitle = (leasingDealType, manufacturer) => {
  let metaTitle = null;

  switch (leasingDealType) {
    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Business:
    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Personal:
      metaTitle = `${manufacturer} Lease Deals | ${manufacturer} Car Leasing | Leasing Options`;
      break;

    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Van:
      metaTitle = `${manufacturer} Van Leasing | ${manufacturer} Van Lease Deals | Leasing Option`;
      break;
  }

  return metaTitle;
};
const MakePageMetaDescription = (leasingDealType, manufacturer) => {
  let metaDescription = null;

  switch (leasingDealType) {
    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Business:
    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Personal:
      metaDescription = `Search our ${manufacturer} Car Lease Deals today from Leasing Options Limited. We offer FREE instant quotes & Price Match Promise on all our Car Leases.`;
      break;

    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Van:
      metaDescription = `Search our ${manufacturer} Van Lease Deals today from Leasing Options Limited. We offer FREE instant quotes & Price Match Promise on all our Van Leases.`;
      break;
  }

  return metaDescription;
};
const ModelPageMetaTitle = (leasingDealType, manufacturer, model) => {
  let metaTitle = null;

  switch (leasingDealType) {
    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Business:
    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Personal:
      metaTitle = manufacturer + " " + model + " Car Lease Deals & Contract Hire | Leasing Options";
      break;

    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Van:
      metaTitle = manufacturer + " " + model + " Van Lease Deals & Long Term Hire | Leasing Options";
      break;
  }

  return metaTitle;
};
const ModelPageMetaDescription = (leasingDealType, manufacturer, model) => {
  let metaDescription = null;

  switch (leasingDealType) {
    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Business:
    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Personal:
      metaDescription = `Browse the range of ${manufacturer} ${model} Car Lease Deals available with Leasing Options Limited. We offer FREE instant quotes & we will Price Match.`;
      break;

    case enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Van:
      metaDescription = `Browse the range of ${manufacturer} ${model} Van Lease Deals today from Leasing Options Limited. We offer FREE instant quotes & we will Price Match.`;
      break;
  }

  return metaDescription;
};
const SearchPageTitle = vehicleType => {
  let result = "";

  if (vehicleType == _enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_2__[/* VehicleTypes */ "a"].Car) {
    result = `Car Leasing | Personal Lease Deals &amp; Contract Hire | Leasing Options`;
  } else if (vehicleType == _enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_2__[/* VehicleTypes */ "a"].Commercial) {
    result = `Check out our in stock van lease deals and drive a brand-new vehicle in less than two weeks.`;
  }

  return result;
};
const GetNewsCategoryPageTitle = newsType => {
  let result = "";

  if (newsType == enums_NewsTypes__WEBPACK_IMPORTED_MODULE_1__[/* NewsTypes */ "a"].LatestNews) {
    result = `Car Leasing Industry News | Leasing Options`;
  } else if (newsType == enums_NewsTypes__WEBPACK_IMPORTED_MODULE_1__[/* NewsTypes */ "a"].VehicleReviews) {
    result = `Vehicle Reviews – Car & Van Reviews | Leasing Options`;
  } else if (newsType == enums_NewsTypes__WEBPACK_IMPORTED_MODULE_1__[/* NewsTypes */ "a"].Blog) {
    result = `Leasing Options Blog - Car Leasing Blog`;
  }

  return result;
};
const GetNewsCategoryPageMetaDescription = newsType => {
  let result = "";

  if (newsType == enums_NewsTypes__WEBPACK_IMPORTED_MODULE_1__[/* NewsTypes */ "a"].LatestNews) {
    result = `Stay up-to-date with the car leasing industry news, featuring the latest developments in the car leasing market | Leasing Options`;
  } else if (newsType == enums_NewsTypes__WEBPACK_IMPORTED_MODULE_1__[/* NewsTypes */ "a"].VehicleReviews) {
    result = `Read through our unbiased vehicle reviews to help you make a decision when looking for your perfect car | Leasing Options`;
  } else if (newsType == enums_NewsTypes__WEBPACK_IMPORTED_MODULE_1__[/* NewsTypes */ "a"].Blog) {
    result = `Read the latest from Leasing Options on our car leasing blog, featuring our latest company updates and developments | Leasing Options`;
  }

  return result;
};
const GetNewsCategoryPageKeywords = () => {
  return "Personal Car Leasing, Personal Car Lease Deals, Personal Car Leasing Manchester, Contract hire";
};
const GetNewsCategoryPageMetaImageDescription = newsType => {
  let result = "";

  if (newsType == enums_NewsTypes__WEBPACK_IMPORTED_MODULE_1__[/* NewsTypes */ "a"].LatestNews) {
    result = "https://imagecdn.leasingoptions.co.uk" + '/website/news/page-banner--latest-news.png';
  } else if (newsType == enums_NewsTypes__WEBPACK_IMPORTED_MODULE_1__[/* NewsTypes */ "a"].VehicleReviews) {
    result = "https://imagecdn.leasingoptions.co.uk" + '/website/news/page-banner--vehicle-reviews.png';
  } else if (newsType == enums_NewsTypes__WEBPACK_IMPORTED_MODULE_1__[/* NewsTypes */ "a"].Blog) {
    result = "https://imagecdn.leasingoptions.co.uk" + '/website/news/page-banner--blog.png';
  }

  return result;
};
const GetBodyTypePageMetaImage = bodyType => {
  let result = "";

  if (bodyType == 'suv-crossover') {
    result = 'suv';
  } else if (bodyType == 'convertible-cabriolet') {
    result = 'convertible';
  } else if (bodyType == 'sports-car') {
    result = 'sportscar';
  } else if (bodyType == 'small') {
    result = 'small-van';
  } else if (bodyType == 'medium') {
    result = 'medium-van';
  } else if (bodyType == 'large') {
    result = 'large-van';
  } else if (bodyType == 'crew') {
    result = 'crew-van';
  } else if (bodyType == 'luton') {
    result = 'luton-van';
  }

  return result;
};
const VehiclePageTitle = (vehicleType, make, model, derivative) => {
  let result = ""; // Temp: Ford Ford Rapter

  if (make === "Ford" && model === "Ranger Diesel" && derivative === "Pick Up Double Cab Raptor 2.0 EcoBlue 213 Auto") {
    result = "Ford Ranger Raptor Lease: Diesel Pick Up Double Cab Raptor 2.0 EcoBlue 213 Auto | Leasing Options";
  } else {
    if (vehicleType !== _enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_2__[/* VehicleTypes */ "a"].None) {
      //Make, model needs to be capitalized
      result = make + " " + model + " " + derivative + " " + (vehicleType === _enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_2__[/* VehicleTypes */ "a"].Commercial ? "Van" : "Car") + " Lease Deals | Leasing Options";
    }
  }

  return result;
};
const VehicleMetaDescription = (vehicleType, make, shortModel, derivative) => {
  let result = "";

  switch (vehicleType) {
    case _enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_2__[/* VehicleTypes */ "a"].Car:
      result = `Find your perfect ${make.toUpperCase()} ${shortModel.toUpperCase()} ${derivative} lease deal. We offer FREE instant quotes & we will Price Match.`;
      break;

    case _enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_2__[/* VehicleTypes */ "a"].Commercial:
      result = `Find your perfect ${make.toUpperCase()} ${shortModel.toUpperCase()} ${derivative} lease deal. We offer FREE instant quotes & we will Price Match.`;
      break;
  }

  return result;
};
const GetAdviceCategoryMeta = (categoryId, url) => {
  let metaData = {
    title: "",
    description: "",
    canonicalUrl: "",
    keywords: "",
    imageUrl: ""
  };

  switch (categoryId) {
    case 14:
      metaData = {
        title: "Personal Leasing Guides | Leasing Options",
        description: "Find answers to the most popular questions around personal leasing with our handy guides.",
        canonicalUrl: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetCanonicalUrl */ "j"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_6__[/* getBaseUrl */ "a"])(url)),
        keywords: '',
        imageUrl: "https://imagecdn.leasingoptions.co.uk" + "/website/news/page-banner--blog.png"
      };
      break;

    case 8:
      metaData = {
        title: "Popular Topics | Leasing Guides | Leasing Options",
        description: "The most popular car leasing topics covered in one place. Get the answers to all your leasing questions here in our handy guides.",
        canonicalUrl: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetCanonicalUrl */ "j"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_6__[/* getBaseUrl */ "a"])(url)),
        keywords: '',
        imageUrl: "https://imagecdn.leasingoptions.co.uk" + "/website/news/page-banner--blog.png"
      };
      break;

    case 9:
      metaData = {
        title: "Business Leasing Guides | Leasing Options",
        description: "See how you could save money on a brand-new company car. Find useful information on tax, benefits and more in our business leasing guides.",
        canonicalUrl: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetCanonicalUrl */ "j"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_6__[/* getBaseUrl */ "a"])(url)),
        keywords: '',
        imageUrl: "https://imagecdn.leasingoptions.co.uk" + "/website/news/page-banner--blog.png"
      };
      break;

    case 13:
      metaData = {
        title: "Van Leasing Guides | Leasing Options",
        description: "Find everything you need to know in our van leasing guides. Learn about tax, insurance, benefits and more to see how leasing a van could save you cash.",
        canonicalUrl: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetCanonicalUrl */ "j"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_6__[/* getBaseUrl */ "a"])(url)),
        keywords: '',
        imageUrl: "https://imagecdn.leasingoptions.co.uk" + "/website/news/page-banner--blog.png"
      };
      break;

    case 10:
      metaData = {
        title: "Costs | Car Leasing Guides | Leasing Options",
        description: "Everything you need to know about the costs of car leasing. Learn about pricing, depreciation and how to get the best deal on your next car.",
        canonicalUrl: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetCanonicalUrl */ "j"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_6__[/* getBaseUrl */ "a"])(url)),
        keywords: '',
        imageUrl: "https://imagecdn.leasingoptions.co.uk" + "/website/news/page-banner--blog.png"
      };
      break;

    case 15:
      metaData = {
        title: "Vehicle Care | Car Leasing Guides | Leasing Options",
        description: "Get advice on how to care for and maintain your car for the duration of your lease with our handy guides.",
        canonicalUrl: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetCanonicalUrl */ "j"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_6__[/* getBaseUrl */ "a"])(url)),
        keywords: '',
        imageUrl: "https://imagecdn.leasingoptions.co.uk" + "/website/news/page-banner--blog.png"
      };
      break;

    case 11:
      metaData = {
        title: "Choosing Your Car | Leasing Guides | Leasing Options",
        description: "Finding the right lease car can be a hard choice. Get help and advice on choosing your next car with complete guides and reviews from Leasing Options.",
        canonicalUrl: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetCanonicalUrl */ "j"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_6__[/* getBaseUrl */ "a"])(url)),
        keywords: '',
        imageUrl: "https://imagecdn.leasingoptions.co.uk" + "/website/news/page-banner--blog.png"
      };
      break;

    case 16:
      metaData = {
        title: "PCP & Other Finance | Leasing Guides | Leasing Options",
        description: "Find out about other ways you can finance a new car, to help you make an informed decision when considering leasing, using our handy guides.",
        canonicalUrl: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetCanonicalUrl */ "j"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_6__[/* getBaseUrl */ "a"])(url)),
        keywords: '',
        imageUrl: "https://imagecdn.leasingoptions.co.uk" + "/website/news/page-banner--blog.png"
      };
      break;

    case 2:
      metaData = {
        title: "How to Get the Best Car for Your Budget | Leasing Options",
        description: "No matter how much you want to spend each month, you can still drive a brand-new car. Find out more here in our car budget guides from Leasing Options.",
        canonicalUrl: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetCanonicalUrl */ "j"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_6__[/* getBaseUrl */ "a"])(url)),
        keywords: '',
        imageUrl: "https://imagecdn.leasingoptions.co.uk" + "/website/news/page-banner--blog.png"
      };
      break;

    case 17:
      metaData = {
        title: "Compare Cars | Leasing Guides | Leasing Options",
        description: "Stuck between which car to lease? Use our handy guides to compare the pros and cons of similar spec cars, to help you make the right choice.",
        canonicalUrl: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetCanonicalUrl */ "j"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_6__[/* getBaseUrl */ "a"])(url)),
        keywords: '',
        imageUrl: "https://imagecdn.leasingoptions.co.uk" + "/website/news/page-banner--blog.png"
      };
      break;

    case 3:
      metaData = {
        title: "Electric Leasing Guides | EV & Hybrid Advice | Leasing Options",
        description: "EV and hybrid cars are becoming more popular. Get to know electric vehicles in our complete guides, with costs, emissions, charging and more covered.",
        canonicalUrl: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetCanonicalUrl */ "j"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_6__[/* getBaseUrl */ "a"])(url)),
        keywords: '',
        imageUrl: "https://imagecdn.leasingoptions.co.uk" + "/website/news/page-banner--blog.png"
      };
      break;

    default:
      metaData = {
        title: "Car Leasing | Personal Lease Deals & Contract Hire | Leasing Options",
        description: "Get the best car leasing deals for personal contract hire from Leasing Options. Vehicles delivered anywhere in the UK. Get your FREE instant quote, today.",
        canonicalUrl: Object(_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetCanonicalUrl */ "j"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_6__[/* getBaseUrl */ "a"])(url)),
        keywords: "Personal Car Leasing, Personal Car Lease Deals, Personal Car Leasing Manchester, Contract hire",
        imageUrl: "https://imagecdn.leasingoptions.co.uk" + "/website/news/page-banner--blog.png"
      };
      break;
  }

  return metaData;
};

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