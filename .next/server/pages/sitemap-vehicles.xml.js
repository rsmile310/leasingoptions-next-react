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
/******/ 	return __webpack_require__(__webpack_require__.s = 95);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "461Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ getSitemapVehiclesXMLPage; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ getSitemapPagesXMLPage; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* binding */ getSitemapXMLPage; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ GetGeneralSitemapPages; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ GetSitemapNewsPages; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ GetSitemapAdviceGuidesPages; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ GetSitemapBodyTypePages; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ GetVehicleTypes; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ GetSitemapBudgetPages; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ GetInStockPages; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ GetModelPages; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ GetManufacterModelPages; });

// UNUSED EXPORTS: GetPriority, GetSitemapBudgetUnderPages, GetSitemapBudgetOverPages

// EXTERNAL MODULE: ./enums/SitemapItemChangeFrequencies.tsx
var SitemapItemChangeFrequencies = __webpack_require__("ZQqS");

// CONCATENATED MODULE: ./types/SitemapPriorities.tsx
var SitemapPriorities;

(function (SitemapPriorities) {
  SitemapPriorities[SitemapPriorities["_0_0"] = 0] = "_0_0";
  SitemapPriorities[SitemapPriorities["_0_1"] = 1] = "_0_1";
  SitemapPriorities[SitemapPriorities["_0_2"] = 2] = "_0_2";
  SitemapPriorities[SitemapPriorities["_0_3"] = 3] = "_0_3";
  SitemapPriorities[SitemapPriorities["_0_4"] = 4] = "_0_4";
  SitemapPriorities[SitemapPriorities["_0_5"] = 5] = "_0_5";
  SitemapPriorities[SitemapPriorities["_0_6"] = 6] = "_0_6";
  SitemapPriorities[SitemapPriorities["_0_7"] = 7] = "_0_7";
  SitemapPriorities[SitemapPriorities["_0_8"] = 8] = "_0_8";
  SitemapPriorities[SitemapPriorities["_0_9"] = 9] = "_0_9";
  SitemapPriorities[SitemapPriorities["_1_0"] = 10] = "_1_0";
})(SitemapPriorities || (SitemapPriorities = {}));

/* harmony default export */ var types_SitemapPriorities = (SitemapPriorities);
// EXTERNAL MODULE: ./helpers/urlHelper.tsx
var urlHelper = __webpack_require__("zjkP");

// EXTERNAL MODULE: ./enums/StaticUrls.tsx
var StaticUrls = __webpack_require__("P0/Z");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./types/SitemapPages.tsx





const modifiedDate = external_moment_default()().format('YYYY-MM-DD');
const SitemapDefaultPages = [{
  name: "Home",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].Home),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].yearly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Contact Us",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].Contact),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].yearly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Request Callback",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].RequestCallback),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].yearly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "About Us",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].OurStory),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].yearly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Careers",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].Careers),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].daily,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Terms & Conditions",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].TermsAndConditions),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].yearly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Privacy Policy",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].PrivacyPolicy),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].yearly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Cookie Policy",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].CookiePolicy),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].yearly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Car Leasing FAQs",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].FAQ),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Treating Customers Fairly",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].TreatingCustomersFairly),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].yearly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Fair Wear & Tear",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].FairWearAndTear),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].yearly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Tax Calculator",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].TaxCalculator),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].yearly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Complaints",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].Complaints),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].yearly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Initial Disclosure",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].InitialDisclosure),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].yearly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Price Promise",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].PricePromise),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].yearly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Car Valuation",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].ValueYourCar),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].yearly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Business Car Leasing",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].BussinessDeals),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Personal Car Leasing",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].PersonalDeals),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Van Leasing",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].VanDeals),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Short Term Car Leasing",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].ShortTermCarLeasing),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Short Term Van Leasing",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].ShortTermVanLeasing),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Lancashire Cricket Club Partnership",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].Lccc),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Customer Testimonials",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].CustomerTestimonials),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Lancashire County Cricket Club Special Offer",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].LcccOffer),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Movie Cars",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].MovieCars),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Insured Vehicle Leasing",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].CarLeasingWithInsurance),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Drive To A Kill",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].DriveToAKill),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Car Leasing Deals",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].CarSpecialOffers),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Look after my car",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].LookAfterMyCar),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "My garage",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].MyGarage),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Van leasing deals",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].VanSpecialOffers),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Electric Hybrid Car Leasing",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].ElectricHybridLeasing),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Types",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].ElectricTypes),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Charging",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].ElectricCharging),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Government Grants",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].ElectricGrants),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Hydrogen Car Leasing",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].HydrogrenLeasing),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
  priority: types_SitemapPriorities._1_0,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}];
const SitemapDefaultNewsPages = [{
  name: "News",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(StaticUrls["a" /* StaticUrls */].News),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Latest News",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(Object(urlHelper["o" /* GetNewsTypeUrl */])(StaticUrls["a" /* StaticUrls */].LatestNews)),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Vehicle Reviews",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(Object(urlHelper["o" /* GetNewsTypeUrl */])(StaticUrls["a" /* StaticUrls */].VehicleReviews)),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}, {
  name: "Blog",
  url: Object(urlHelper["j" /* GetCanonicalUrl */])(Object(urlHelper["o" /* GetNewsTypeUrl */])(StaticUrls["a" /* StaticUrls */].Blog)),
  changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
  priority: types_SitemapPriorities._0_5,
  modifiedOn: external_moment_default()().format('YYYY-MM-DD')
}];
// EXTERNAL MODULE: ./enums/NewsTypes.tsx
var NewsTypes = __webpack_require__("lVS+");

// EXTERNAL MODULE: ./API/ContentAPI.tsx
var ContentAPI = __webpack_require__("hDe3");

// EXTERNAL MODULE: ./enums/VehicleTypes.tsx
var VehicleTypes = __webpack_require__("Ezaw");

// EXTERNAL MODULE: ./business-logic/newsService.tsx
var newsService = __webpack_require__("7kSQ");

// EXTERNAL MODULE: ./enums/LeasingDealTypes.tsx
var LeasingDealTypes = __webpack_require__("l7ai");

// EXTERNAL MODULE: ./helpers/helpers.tsx
var helpers = __webpack_require__("mmV+");

// EXTERNAL MODULE: ./business-logic/vehicleService.tsx + 2 modules
var vehicleService = __webpack_require__("wbKs");

// CONCATENATED MODULE: ./business-logic/sitemapService.tsx












const getSitemapVehiclesXMLPage = async make => {
  const pages = [];
  const vehiclesPromise = await Object(vehicleService["P" /* GetVehicleDenotations */])(make, null, false);
  vehiclesPromise.data.forEach(vehicle => {
    let sitemap = {
      name: vehicle.derivativeUrl,
      url: Object(urlHelper["j" /* GetCanonicalUrl */])(Object(urlHelper["v" /* GetVehicleUrl */])(false, '', vehicle.vehicleTypeId == VehicleTypes["a" /* VehicleTypes */].Car ? LeasingDealTypes["a" /* LeasingDealTypes */].Personal : LeasingDealTypes["a" /* LeasingDealTypes */].Van, vehicle.manufacturerUrl, vehicle.shortModTextUrl, vehicle.modelUrl, vehicle.derivativeUrl, vehicle.vehicleRef)),
      priority: types_SitemapPriorities._1_0,
      changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
      modifiedOn: external_moment_default()().format('YYYY-MM-DD')
    };
    pages.push(sitemap);
  });
  return pages;
};
const getSitemapPagesXMLPage = async () => {
  const pages = [];
  const data = await GetGeneralSitemapPages();
  data.forEach(item => {
    pages.push(item);
  });
  GetVehicleTypes().forEach(vehicleType => {
    const inStock = GetInStockPages(vehicleType);
    const underBudget = GetSitemapBudgetUnderPages(vehicleType);
    const overBudget = GetSitemapBudgetOverPages(vehicleType);
    const bodyTypePages = GetSitemapBodyTypePages(vehicleType);
    const allPages = inStock.concat(underBudget).concat(overBudget).concat(bodyTypePages);
    allPages.forEach(item => {
      pages.push(item);
    });
  });
  return pages;
};
const getSitemapXMLPage = async () => {
  const currentDate = external_moment_default()().format('YYYY-MM-DD');
  const pages = [{
    url: Object(urlHelper["j" /* GetCanonicalUrl */])("/sitemap-pages.xml"),
    modifiedOn: currentDate
  }, {
    url: Object(urlHelper["j" /* GetCanonicalUrl */])("/sitemap-news.xml"),
    modifiedOn: currentDate
  }, {
    url: Object(urlHelper["j" /* GetCanonicalUrl */])("/sitemap-advice-guides.xml"),
    modifiedOn: currentDate
  }, {
    url: Object(urlHelper["j" /* GetCanonicalUrl */])("/sitemap-manufacturers.xml"),
    modifiedOn: currentDate
  }, {
    url: Object(urlHelper["j" /* GetCanonicalUrl */])("/sitemap-models.xml"),
    modifiedOn: currentDate
  }];
  const manufacturerPages = await Object(vehicleService["o" /* GetManufacturersModels */])();
  manufacturerPages.data.forEach(item => {
    let manufacturerPage = {
      url: Object(urlHelper["j" /* GetCanonicalUrl */])("/sitemap-vehicles.xml?make=" + item.manufacturer.manufacturerUrl),
      modifiedOn: currentDate
    };
    pages.push(manufacturerPage);
  });
  return pages;
};
const GetGeneralSitemapPages = async (includeContentHubBasePages = false) => {
  let siteMapPages = SitemapDefaultPages;

  if (includeContentHubBasePages) {
    siteMapPages = siteMapPages.concat(await GetSitemapNewsPages()).concat(await GetSitemapAdviceGuidesPages());
  }

  return siteMapPages;
};
const GetPriority = date => {
  let priority = types_SitemapPriorities._0_5;
  var a = external_moment_default()(date);
  var b = external_moment_default()(); // Current Date

  let differenceInDays = b.diff(a, 'days'); // 1

  if (differenceInDays <= 7) priority = types_SitemapPriorities._0_5;else if (differenceInDays <= 14) priority = types_SitemapPriorities._0_4;else if (differenceInDays <= 30) priority = types_SitemapPriorities._0_3;else if (differenceInDays <= 90) priority = types_SitemapPriorities._0_2;
  return priority;
};
const GetSitemapNewsPages = async (baseOnly = true) => {
  let siteMapPages = SitemapDefaultNewsPages;

  if (!baseOnly) {
    var blogsBatch = await newsService["a" /* NewsService */].GetAllNewsArticlePreviews(NewsTypes["a" /* NewsTypes */].Blog, null, 1, 500000);
    var latestNewsBatch = await newsService["a" /* NewsService */].GetAllNewsArticlePreviews(NewsTypes["a" /* NewsTypes */].LatestNews, null, 1, 500000);
    var vehicleReviewsBatch = await newsService["a" /* NewsService */].GetAllNewsArticlePreviews(NewsTypes["a" /* NewsTypes */].VehicleReviews, null, 1, 500000);
    let newsItems = blogsBatch.data.dataItems.concat(latestNewsBatch.data.dataItems, vehicleReviewsBatch.data.dataItems);
    newsItems.forEach(x => {
      let sitemap = {
        name: x.title,
        url: Object(urlHelper["j" /* GetCanonicalUrl */])(x.url),
        priority: GetPriority(x.onDate != null ? x.onDate : external_moment_default()()),
        changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
        modifiedOn: external_moment_default()().format('YYYY-MM-DD')
      };
      siteMapPages.push(sitemap);
    });
  }

  return siteMapPages;
};
const GetSitemapAdviceGuidesPages = async (baseOnly = false) => {
  let siteMapPages = [];
  let sitemap = {
    name: "Advice Guides",
    url: Object(urlHelper["j" /* GetCanonicalUrl */])("/advice"),
    priority: types_SitemapPriorities._0_5,
    changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
    modifiedOn: external_moment_default()().format('YYYY-MM-DD')
  };
  siteMapPages.push(sitemap);
  var categories = await ContentAPI["a" /* ContentAPI */].GetContentCategories();
  var tags = await ContentAPI["a" /* ContentAPI */].GetTags();
  await Promise.all(categories.data.map(async category => {
    let sitemap = {
      name: "Advice Guides - " + category.name,
      url: Object(urlHelper["j" /* GetCanonicalUrl */])(Object(urlHelper["g" /* GetAdviceCategoryUrl */])(category.url)),
      priority: types_SitemapPriorities._0_5,
      changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
      modifiedOn: external_moment_default()().format('YYYY-MM-DD')
    };
    siteMapPages.push(sitemap);

    if (!baseOnly) {
      var contentItem = await ContentAPI["a" /* ContentAPI */].GetContentItems(category.id);

      if (contentItem != null && contentItem.data != null) {
        contentItem.data.forEach(content => {
          let sitemap = {
            name: content.pageTitle,
            url: Object(urlHelper["j" /* GetCanonicalUrl */])(Object(urlHelper["f" /* GetAdviceArticleUrl */])(content.categoryUrl, content.url)),
            priority: GetPriority(content.publishDate),
            changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
            modifiedOn: external_moment_default()().format('YYYY-MM-DD')
          };
          siteMapPages.push(sitemap);
        });
      }
    }
  }));
  tags.data.forEach(category => {
    let sitemap = {
      name: "Advice Guides - " + category.name,
      url: Object(urlHelper["j" /* GetCanonicalUrl */])(Object(urlHelper["h" /* GetAdviceTagUrl */])(category.url)),
      priority: types_SitemapPriorities._0_5,
      changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
      modifiedOn: external_moment_default()().format('YYYY-MM-DD')
    };
    siteMapPages.push(sitemap);
  });
  return siteMapPages;
};
const GetSitemapBodyTypePages = vehicleType => {
  let pages = [];
  let bodyTypes = Object(vehicleService["g" /* GetCategoriesForType */])(vehicleType);
  bodyTypes.forEach(bodyType => {
    let sitemap = {
      name: bodyType.name,
      url: Object(urlHelper["j" /* GetCanonicalUrl */])(Object(urlHelper["a" /* BodyTypeUrlVehicleType */])(vehicleType, bodyType.name)),
      priority: types_SitemapPriorities._1_0,
      changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
      modifiedOn: external_moment_default()().format('YYYY-MM-DD')
    };
    pages.push(sitemap);
  });
  return pages;
};
const GetVehicleTypes = () => {
  return [VehicleTypes["a" /* VehicleTypes */].Car, VehicleTypes["a" /* VehicleTypes */].Commercial];
};
const GetSitemapBudgetPages = vehicleType => {
  let pages = [];
  let under = GetSitemapBudgetUnderPages(vehicleType);
  let over = GetSitemapBudgetOverPages(vehicleType);
  pages = pages.concat(under).concat(over);
  return pages;
};
const GetSitemapBudgetUnderPages = vehicleType => {
  let pages = [];
  Object(vehicleService["d" /* GetBudgetTo */])().forEach(value => {
    let sitemap = {
      name: "Up to £" + value,
      url: Object(urlHelper["j" /* GetCanonicalUrl */])(Object(urlHelper["c" /* BudgetToUrlVehicleType */])(vehicleType, value)),
      priority: types_SitemapPriorities._1_0,
      changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
      modifiedOn: external_moment_default()().format('YYYY-MM-DD')
    };
    pages.push(sitemap);
  });
  return pages;
};
const GetSitemapBudgetOverPages = vehicleType => {
  let pages = [];
  Object(vehicleService["c" /* GetBudgetOver */])().forEach(value => {
    let sitemap = {
      name: "Above £" + value,
      url: Object(urlHelper["j" /* GetCanonicalUrl */])(Object(urlHelper["b" /* BudgetFromUrlVehicleType */])(vehicleType, value)),
      priority: types_SitemapPriorities._1_0,
      changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
      modifiedOn: external_moment_default()().format('YYYY-MM-DD')
    };
    pages.push(sitemap);
  });
  return pages;
};
const GetInStockPages = vehicleType => {
  let pages = [];
  let sitemap = {
    name: (vehicleType == VehicleTypes["a" /* VehicleTypes */].Commercial ? "Van" : "Car") + " Leasing In Stock",
    url: Object(urlHelper["j" /* GetCanonicalUrl */])(Object(urlHelper["x" /* InStockUrlVehicleType */])(vehicleType)),
    priority: types_SitemapPriorities._1_0,
    changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
    modifiedOn: external_moment_default()().format('YYYY-MM-DD')
  };
  pages.push(sitemap);
  return pages;
};
const GetModelPages = async () => {
  let manufacturerModels = await Object(vehicleService["o" /* GetManufacturersModels */])();
  let pages = [];
  let vehicleTypes = GetVehicleTypes();
  vehicleTypes.forEach(vehicleType => {
    const manufacturers = manufacturerModels.data.filter(item => {
      return item.models.some(x => x.vehicleType == vehicleType);
    });
    manufacturers.forEach(item => {
      const models = Object(helpers["u" /* groupByArray */])(item.models.filter(item => {
        return item.vehicleType == vehicleType;
      }), 'shortModText');
      models.forEach(model => {
        let sitemap = {
          name: model.key,
          url: Object(urlHelper["j" /* GetCanonicalUrl */])(Object(urlHelper["r" /* GetShortModelUrl */])(false, null, vehicleType == VehicleTypes["a" /* VehicleTypes */].Car ? LeasingDealTypes["a" /* LeasingDealTypes */].Personal : LeasingDealTypes["a" /* LeasingDealTypes */].Van, item.manufacturer.manufacturerUrl, model.key, null)),
          priority: types_SitemapPriorities._1_0,
          changeFrequency: SitemapItemChangeFrequencies["a" /* default */].monthly,
          modifiedOn: external_moment_default()().format('YYYY-MM-DD')
        };
        pages.push(sitemap);
      });
    });
  });
  return pages;
};
const GetManufacterModelPages = async () => {
  let manufacturerModels = await Object(vehicleService["o" /* GetManufacturersModels */])();
  let pages = [];
  let vehicleTypes = GetVehicleTypes();
  vehicleTypes.forEach(vehicleType => {
    const manufacturers = manufacturerModels.data.filter(item => {
      return item.models.some(x => x.vehicleType == vehicleType);
    });
    manufacturers.forEach(element => {
      let sitemap = {
        name: element.manufacturer.manufacturerUrl,
        url: Object(urlHelper["j" /* GetCanonicalUrl */])(Object(urlHelper["t" /* GetVehicleManufacturerUrl */])(false, null, vehicleType == VehicleTypes["a" /* VehicleTypes */].Car ? LeasingDealTypes["a" /* LeasingDealTypes */].Personal : LeasingDealTypes["a" /* LeasingDealTypes */].Van, element.manufacturer.manufacturerUrl)),
        priority: types_SitemapPriorities._1_0,
        changeFrequency: SitemapItemChangeFrequencies["a" /* default */].always,
        modifiedOn: external_moment_default()().format('YYYY-MM-DD')
      };
      pages.push(sitemap);
    });
  });
  return pages;
};

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

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UfuA");


/***/ }),

/***/ "CNqx":
/***/ (function(module, exports) {

module.exports = require("underscore");

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

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

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

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

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

/***/ "UfuA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var business_logic_sitemapService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("461Z");
/* harmony import */ var enums_SitemapItemChangeFrequencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZQqS");
/* harmony import */ var helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xVrE");



const getServerSideProps = async ({
  res,
  req,
  query
}) => {
  if (!req || !res) {
    return {
      props: {}
    };
  }

  const make = query.make;
  const items = await Object(business_logic_sitemapService__WEBPACK_IMPORTED_MODULE_0__[/* getSitemapVehiclesXMLPage */ "k"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_2__[/* getFriendlyUrlSegment */ "b"])(make));
  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  res.write(SitemapVehiclePages(items));
  res.end();
};

const SitemapVehiclePages = items => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <?xml-stylesheet type="text/xsl" href="sitemap1.xsl"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${items.map(function (item) {
    return `
                <url>
                    <loc>${`${item.url}`}</loc>
                    <lastmod>${`${item.modifiedOn}`}</lastmod> 
                    <changefreq>${enums_SitemapItemChangeFrequencies__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"][item.changeFrequency]}</changefreq> 
                    <priority>${item.priority / 10}</priority>                          
                </url>`;
  })}
    </urlset>`;
};

/* harmony default export */ __webpack_exports__["default"] = (SitemapVehiclePages);

/***/ }),

/***/ "YjgO":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/pro-light-svg-icons");

/***/ }),

/***/ "ZQqS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var SitemapItemChangeFrequencies;

(function (SitemapItemChangeFrequencies) {
  SitemapItemChangeFrequencies[SitemapItemChangeFrequencies["always"] = 0] = "always";
  SitemapItemChangeFrequencies[SitemapItemChangeFrequencies["hourly"] = 1] = "hourly";
  SitemapItemChangeFrequencies[SitemapItemChangeFrequencies["daily"] = 2] = "daily";
  SitemapItemChangeFrequencies[SitemapItemChangeFrequencies["weekly"] = 3] = "weekly";
  SitemapItemChangeFrequencies[SitemapItemChangeFrequencies["monthly"] = 4] = "monthly";
  SitemapItemChangeFrequencies[SitemapItemChangeFrequencies["yearly"] = 5] = "yearly";
  SitemapItemChangeFrequencies[SitemapItemChangeFrequencies["never"] = 6] = "never";
})(SitemapItemChangeFrequencies || (SitemapItemChangeFrequencies = {}));

/* harmony default export */ __webpack_exports__["a"] = (SitemapItemChangeFrequencies);

/***/ }),

/***/ "bDXC":
/***/ (function(module, exports) {

module.exports = require("accounting");

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

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

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