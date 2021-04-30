module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		72: 0
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
/******/ 			var chunk = require("../../../../../../../../" + ({}[chunkId]||chunkId) + "." + {"0":"df7cae6b7c92765b72d8","1":"04d3d6dc2cfcfc42daeb","146":"6898b531603f7157cfe3","151":"1a1b75963a81358ea677"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
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

/***/ "+TqS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ vehicle_image_gallery_tabs; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// CONCATENATED MODULE: ./components/vehicle/vehicle-360/vehicle-360.tsx



const Gallery360 = ({
  alt,
  dir
}) => {
  const pixelsPerDegree = 2;
  const {
    0: dragging,
    1: setDragging
  } = Object(external_react_["useState"])(false);
  const {
    0: imageIndex,
    1: setImageIndex
  } = Object(external_react_["useState"])(1);
  const {
    0: dragStart,
    1: setDragStart
  } = Object(external_react_["useState"])(0);
  const {
    0: dragStartIndex,
    1: setDragStartIndex
  } = Object(external_react_["useState"])(1);
  const externalWrapper = external_react_default.a.useRef(null);
  Object(external_react_["useEffect"])(() => {
    if (externalWrapper.current) {
      externalWrapper.current.addEventListener("mousemove", handleMouseMove, false);
      externalWrapper.current.addEventListener("mouseup", handleMouseUp, false);
    }
  }, [dragging]);

  const handleMouseDown = e => {
    e.persist();
    setDragging(true);
    setDragStart(e.screenX);
    setDragStartIndex(imageIndex);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const updateImageIndex = currentPosition => {
    let numImages = 36;
    const pixelsPerImage = pixelsPerDegree * (360 / numImages);
    let dx = (currentPosition - dragStart) / pixelsPerImage;
    let index = Math.floor(dx) % numImages;

    if (index < 1) {
      index = numImages + index;
    }

    index = (index + dragStartIndex) % numImages;

    if (index === 0) {
      setImageIndex(1);
    } else if (index !== imageIndex) {
      setImageIndex(index);
    }
  };

  const handleMouseMove = e => {
    if (dragging) {
      updateImageIndex(e.screenX);
    }
  };

  const preventDragHandler = e => {
    e.preventDefault();
  };

  if (dir) {
    const renderImage = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: `${"https://imagecdn.leasingoptions.co.uk"}/${dir + imageIndex}.png`,
      className: "img-fluid",
      alt: `${alt} angle ${imageIndex}`
    });

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "external-360",
      ref: externalWrapper,
      onMouseDown: handleMouseDown,
      onDragStart: preventDragHandler,
      children: renderImage()
    });
  }

  return null;
};

/* harmony default export */ var vehicle_360 = (Gallery360);
// CONCATENATED MODULE: ./components/vehicle/vehicle-360/index.jsx

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/pro-regular-svg-icons"
var pro_regular_svg_icons_ = __webpack_require__("dFPx");

// CONCATENATED MODULE: ./components/vehicle/vehicle-images-slider/vehicle-images-slider.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const VehicleImagesSlider = ({
  images,
  imageDescription
}) => {
  const {
    0: activeSlide,
    1: setActiveSlide
  } = Object(external_react_["useState"])(1);
  const hasImages = images && images.length > 0;

  if (hasImages) {
    const ArrowLeft = props => {
      const {
        onClick
      } = props;
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "slick-arrow slick-prev",
        onClick: onClick,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "25",
          height: "25",
          icon: pro_regular_svg_icons_["faChevronLeft"]
        })
      });
    };

    const ArrowRight = props => {
      const {
        onClick
      } = props;
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "slick-arrow slick-next",
        onClick: onClick,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "25",
          height: "25",
          icon: pro_regular_svg_icons_["faChevronRight"]
        })
      });
    };

    const settings = {
      autoplay: false,
      lazyLoad: 'ondemand',
      arrows: true,
      prevArrow: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrowLeft, {}),
      nextArrow: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrowRight, {}),
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => setActiveSlide(next + 1)
    };
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_slick_default.a, _objectSpread(_objectSpread({}, settings), {}, {
        children: images.map((image, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: image,
          className: "img-fluid",
          alt: `${imageDescription} - ${index + 1}`
        }, `thumbnail-${index}`))
      })), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
        className: "slick-label",
        children: [activeSlide, " of ", images.length]
      })]
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
    className: "img-responsive",
    src: "https://imagecdn.leasingoptions.co.uk/fit-in/750x500/website/static/img-placeholder.jpg",
    alt: "Leasing Options Logo"
  });
};

/* harmony default export */ var vehicle_images_slider = (VehicleImagesSlider);
// CONCATENATED MODULE: ./components/vehicle/vehicle-images-slider/index.jsx

// EXTERNAL MODULE: ./enums/VehicleTypes.tsx
var VehicleTypes = __webpack_require__("Ezaw");

// CONCATENATED MODULE: ./components/vehicle/vehicle-image-gallery-tabs/vehicle-image-gallery-tabs.tsx








const VehicleImageGalleryTabs = ({
  vehicleType,
  imageUrls,
  interiorUrl,
  exteriorUrl,
  imageDescription
}) => {
  const hasIzmoImages = imageUrls && imageUrls.length > 0 && imageUrls.some(item => item.includes("pix_png2048"));
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Tabs"], {
    id: "gallery-tabs",
    defaultActiveKey: "gallery",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Tab"], {
      eventKey: "gallery",
      title: `${vehicleType === VehicleTypes["a" /* VehicleTypes */].Commercial ? "Van" : "Car"} Gallery`,
      className: "text-center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_images_slider, {
        images: imageUrls,
        imageDescription: imageDescription
      })
    }), hasIzmoImages && exteriorUrl ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Tab"], {
      eventKey: "exterior",
      title: "360\xB0 External",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_360, {
        alt: imageDescription,
        dir: exteriorUrl
      })
    }) : null, hasIzmoImages && interiorUrl ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Tab"], {
      eventKey: "interior",
      title: "360\xB0 Internal",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("iframe", {
        allowFullScreen: true,
        id: "internal360",
        frameBorder: "0",
        scrolling: "no",
        className: "iframe-fluid",
        src: interiorUrl
      })
    }) : null]
  });
};

/* harmony default export */ var vehicle_image_gallery_tabs = (VehicleImageGalleryTabs);
// CONCATENATED MODULE: ./components/vehicle/vehicle-image-gallery-tabs/index.jsx


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

/***/ "/kJK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleExtraOptionsHelper; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("CNqx");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class VehicleExtraOptionsHelper {
  static getRelationshipDescription(relationshipType) {
    let result = null;

    if (relationshipType) {
      switch (relationshipType.toUpperCase()) {
        case "OO":
          result = "From the options below, a maximum of one may be selected. For example, you can only have one type of paintwork.";
          break;

        case "RO":
          result = "The option you have chosen must be accompanied by at least one of the additional options in the group below.";
          break;

        case "RA":
          result = "The option you have chosen must be accompanied by all of the additional options in the group below.";
          break;

        case "NW":
          result = "The option you have chosen cannot be accompanied by any of the options in the group below. For example if wood inlay is chosen it cannot be accompanied by any cloth trim.";
          break;

        case "IN":
          result = "Please note the options below are included (at no extra cost) with the option you have chosen which comes as a pack.";
          break;

        case "IO":
          result = "The option you have chosen must be accompanied by one option from the group below. The additional option will be no extra cost.";
          break;
      }
    }

    return result ? result : relationshipType;
  }

  static getSelectedOptions(options, selectedOptionIds) {
    let selectedOptions = [];
    if (options && options.length > 0 && selectedOptionIds && selectedOptionIds.length > 0) selectedOptions = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.filter(options, function (option) {
      return underscore__WEBPACK_IMPORTED_MODULE_0___default.a.contains(selectedOptionIds, option.id);
    });
    return selectedOptions;
  }

  static getOptionsPrice(options, optionsStates) {
    let result = 0;

    if (options) {
      let self = this;
      options.forEach(function (option) {
        result += self.getOptionPrice(option, optionsStates);
      });
    }

    return result;
  }

  static getOptionPrice(option, optionsStates) {
    let result = 0;

    if (option) {
      let optionState = this._getOptionState(optionsStates, option.id);

      result = this._getOptionPrice(option, optionState);
    }

    return result;
  }

  static getOptionsStates(optionIds, relationships) {
    let optionsStates = [];

    if (optionIds && relationships) {
      let filteredRelationships = this.getRelationships(relationships, optionIds);
      filteredRelationships.forEach(function (relationship) {
        let primaryOptionIds = relationship.primaryOptionIds;
        let regularOptionIds = relationship.regularOptionIds;
        let isActive = relationship.type === "OO" || underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(primaryOptionIds, optionIds).length === primaryOptionIds.length;

        if (isActive) {
          if (relationship.type == "OO") {
            underscore__WEBPACK_IMPORTED_MODULE_0___default.a.difference(regularOptionIds, optionIds).forEach(function (optionId) {
              let optionState = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.find(optionsStates, function (option) {
                return option.id === optionId;
              });

              if (!optionState) {
                optionState = {
                  id: optionId,
                  selectionRequiredBy: [],
                  deselectionRequiredBy: []
                };
                optionsStates.push(optionState);
              }

              optionState.deselectionRequiredBy = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(optionState.deselectionRequiredBy, [-1]);
            });
          } else if (relationship.type == "RA" || relationship.type == "IN") {
            let isMirror = relationship.mirrorRelationshipIds && relationship.mirrorRelationshipIds.length > 0;
            regularOptionIds.forEach(function (optionId) {
              let optionState = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.find(optionsStates, function (option) {
                return option.id === optionId;
              });

              if (!optionState) {
                optionState = {
                  id: optionId,
                  selectionRequiredBy: [],
                  deselectionRequiredBy: [],
                  mirrorIn: []
                };
                optionsStates.push(optionState);
              }

              optionState.selectionRequiredBy = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(optionState.selectionRequiredBy, [relationship.id]);
              optionState.useZeroPrice = optionState.useZeroPrice || relationship.type === "IN";

              if (isMirror) {
                optionState.mirrorIn = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(optionState.mirrorIn, [relationship.id], relationship.mirrorRelationshipIds);
              }
            });
          }
        }
      });
    }

    return optionsStates;
  }

  static cloneOptionsStates(optionsStates) {
    return underscore__WEBPACK_IMPORTED_MODULE_0___default.a.map(optionsStates, function (optionState) {
      let result = {
        id: optionState.id,
        selectionRequiredBy: underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(optionState.selectionRequiredBy),
        deselectionRequiredBy: underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(optionState.deselectionRequiredBy),
        mirrorIn: underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(optionState.mirrorIn),
        useZeroPrice: optionState.useZeroPrice
      };
      return result;
    });
  }

  static getOptionsWithoutRelationships(options, optionIds) {
    let filteredOptions = [];

    if (optionIds && optionIds.length > 0) {
      filteredOptions = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.filter(options || [], function (item) {
        return item && underscore__WEBPACK_IMPORTED_MODULE_0___default.a.contains(optionIds, item.id) && (!item.linkedRelationshipIds || item.linkedRelationshipIds.length === 0);
      });
    }

    return filteredOptions;
  }

  static getRelationships(relationships, optionIds) {
    let filteredRelationships = [];
    let allowedRelationshipTypes = this.allowedRelationshipTypes;

    if (optionIds && optionIds.length > 0) {
      filteredRelationships = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.filter(relationships || [], function (item) {
        return item && underscore__WEBPACK_IMPORTED_MODULE_0___default.a.contains(allowedRelationshipTypes, item.type) && (underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(optionIds, item.primaryOptionIds).length > 0 || underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(optionIds, item.regularOptionIds).length > 0);
      });
    }

    return filteredRelationships;
  }

  static getConfirmRelationship(relationships, vehicleOptions, relationshipId, selectedOptionIds, optionsStates) {
    let confirmRelationship = null;

    if (relationships && relationships.length > 0) {
      let relationship = this._getRelationship(relationships, relationshipId);

      if (relationship) {
        confirmRelationship = {
          id: relationship.id,
          type: relationship.type,
          options: []
        };

        let relationshipPrimaryOptions = this._getRelationshipOptions(relationship, vehicleOptions, true, selectedOptionIds, optionsStates);

        let relationshipRegularOptions = this._getRelationshipOptions(relationship, vehicleOptions, false, selectedOptionIds, optionsStates);

        confirmRelationship.options = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(confirmRelationship.options, relationshipPrimaryOptions);
        confirmRelationship.options = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(confirmRelationship.options, relationshipRegularOptions);
      }
    }

    return confirmRelationship;
  } //is not used at the moment
  //public static disableConfirmRelationshipOptions(confirmRelationship: ExtraOptionConfirmRelationship, selectedOptionIds: number[]) {
  //    if (confirmRelationship.type !== "OO") {
  //        let relationshipPrimaryOptions: ExtraOptionRelationshipOption[] = _.filter(confirmRelationship.options,
  //            function (relationshipOption: ExtraOptionRelationshipOption) {
  //                return relationshipOption.isPrimary;
  //            });
  //        let relationshipRegularOptions: ExtraOptionRelationshipOption[] = _.filter(confirmRelationship.options,
  //            function (relationshipOption: ExtraOptionRelationshipOption) {
  //                return !relationshipOption.isPrimary;
  //            });
  //        let relationshipPrimaryOptionIds: number[] = _.pluck(relationshipPrimaryOptions, 'id');
  //        let relationshipRegularOptionIds: number[] = _.pluck(relationshipRegularOptions, 'id');
  //        let activeRule = _.intersection(relationshipPrimaryOptionIds, selectedOptionIds).length === relationshipPrimaryOptionIds.length;
  //        if (confirmRelationship.type == "RA" || confirmRelationship.type == "IN" || confirmRelationship.type == "NW") {
  //            relationshipRegularOptions.forEach(function (relationshipOption) {
  //                relationshipOption.isDisabled = activeRule;
  //            });
  //        }
  //        else if (confirmRelationship.type == "RO" || confirmRelationship.type == "IO") {
  //            //IO is a separate case
  //            if (activeRule) {
  //                let selectedIds: number[] = _.intersection(selectedOptionIds, relationshipRegularOptionIds);
  //                if (selectedIds.length == 1) {
  //                    relationshipRegularOptions.forEach(function (relationshipOption) {
  //                        relationshipOption.isDisabled = relationshipOption.id === selectedIds[0];
  //                    });
  //                }
  //            }
  //        }
  //    }
  //}


  static splitOptionIdsByAction(optionsToProcess) {
    let result = {
      selectIds: [],
      deselectIds: []
    };

    if (optionsToProcess && optionsToProcess.length > 0) {
      result.selectIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.pluck(underscore__WEBPACK_IMPORTED_MODULE_0___default.a.filter(optionsToProcess, function (option) {
        return option.selectionRequiredBy.length > 0;
      }), "id");
      result.deselectIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.pluck(underscore__WEBPACK_IMPORTED_MODULE_0___default.a.filter(optionsToProcess, function (option) {
        return option.deselectionRequiredBy.length > 0;
      }), "id");
    }

    return result;
  }

  static getOptionAction(option, selectedOptionIds) {
    let result = null;

    if (option && !option.isDisabled) {
      let optionId = option.id;
      let isSelectAction = !underscore__WEBPACK_IMPORTED_MODULE_0___default.a.contains(selectedOptionIds || [], optionId);
      result = {
        id: optionId,
        selectionRequiredBy: isSelectAction ? [0] : [],
        deselectionRequiredBy: !isSelectAction ? [0] : []
      };
    }

    return result;
  }

  static optionExists(optionId, vehicleOptions) {
    let option = this._getOption(vehicleOptions, optionId);

    if (option) {
      return true;
    }

    return false;
  }

  static _getRelationshipOptions(relationship, vehicleOptions, primary, selectedOptionIds, optionsStates) {
    let relationshipOptions = [];

    if (relationship !== null && vehicleOptions != null && vehicleOptions.length > 0) {
      let self = this;
      let ids = primary ? relationship.primaryOptionIds : relationship.regularOptionIds;
      (ids || []).forEach(function (id) {
        let option = self._getOption(vehicleOptions, id);

        if (option) {
          let optionState = self._getOptionState(optionsStates, option.id);

          let relationshipOption = {
            id: option.id,
            name: option.name,
            isPrimary: primary,
            price: self._getOptionPrice(option, optionState),
            isSelected: underscore__WEBPACK_IMPORTED_MODULE_0___default.a.contains(selectedOptionIds || [], option.id),
            isDisabled: false
          };
          relationshipOptions.push(relationshipOption);
        }
      });
      relationshipOptions = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(relationshipOptions, 'name');
    }

    return relationshipOptions;
  }

  static _getOptionPrice(option, optionState) {
    let result = 0;

    if (option) {
      result = optionState && optionState.useZeroPrice ? 0 : option.price;
    }

    return result;
  }

  static _getOptionState(optionsStates, id) {
    return underscore__WEBPACK_IMPORTED_MODULE_0___default.a.find(optionsStates, function (item) {
      return item && item.id === id;
    });
  }

  static _getOption(vehicleOptions, id) {
    return underscore__WEBPACK_IMPORTED_MODULE_0___default.a.find(vehicleOptions, function (item) {
      return item && item.id === id;
    });
  }

  static _getRelationship(relationships, id) {
    return underscore__WEBPACK_IMPORTED_MODULE_0___default.a.find(relationships, function (item) {
      return item && item.id === id;
    });
  }

}

_defineProperty(VehicleExtraOptionsHelper, "allowedRelationshipTypes", ["OO", "RO", "RA", "NW", "IN", "IO"]);

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

/***/ "2inZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketingCommunicationsService; });
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kG9d");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _systemService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("uDbZ");


class MarketingCommunicationsService {
  static async HasSeenMarketingForm(emailAddress) {
    return new Promise(resolve => {
      const cookies = Object(nookies__WEBPACK_IMPORTED_MODULE_0__["parseCookies"])();
      const hasSeenConsentFormEmail = cookies.HasSeenConsentForm;

      if (emailAddress != hasSeenConsentFormEmail) {
        Object(_systemService__WEBPACK_IMPORTED_MODULE_1__[/* HasSeenMarketingForm */ "e"])(emailAddress).then(response => {
          const result = response.isSucceed ? response.data : false;
          resolve(result);
        });
      } else {
        resolve(true);
      }
    });
  }

  static async SetToSeenMarketingForm(emailAddress, expiryDate) {
    return Object(_systemService__WEBPACK_IMPORTED_MODULE_1__[/* SetToSeenMarketingForm */ "h"])(emailAddress).then(response => {
      if (response.status.code === 0) {
        Object(nookies__WEBPACK_IMPORTED_MODULE_0__["setCookie"])(null, "HasSeenConsentForm", emailAddress, {
          expires: expiryDate,
          path: '/'
        });
      }
    });
  }

}

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

/***/ "3Xa5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ vehicle_options_tabs; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./components/vehicle/vehicle-options-tab-content/vehicle-options-tab-content.module.scss
var vehicle_options_tab_content_module = __webpack_require__("cQmL");
var vehicle_options_tab_content_module_default = /*#__PURE__*/__webpack_require__.n(vehicle_options_tab_content_module);

// EXTERNAL MODULE: ./helpers/currencyHelper.tsx
var currencyHelper = __webpack_require__("oszm");

// CONCATENATED MODULE: ./components/vehicle/vehicle-options-accordion-list/vehicle-options-accordion-list.tsx






const VehicleOptionsAccordionList = ({
  type,
  data,
  settings
}) => {
  const handleOptionClick = option => {
    if (settings.onOptionClick && settings.optionsSelectAllowed) {
      settings.onOptionClick(option);
    }
  };

  if (type == "technical") {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: data.map((option, idx) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24 col-md-20 d-flex flex-row flex-wrap",
          children: option.name
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24 col-md-4 d-flex flex-row flex-wrap py-1",
          children: option.value
        })]
      }, `option-${idx}`))
    });
  } else if (type == "equipment") {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: data.map((option, idx) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "py-1",
            children: option.name
          })
        })
      }, `option-${idx}`))
    });
  } else if (type == "extras") {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: data.map((option, idx) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-16 col-md-20 d-flex flex-row flex-wrap my-2",
          children: option.name
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-8 col-md-4 d-flex justify-content-end align-items-center",
          children: [Object(currencyHelper["a" /* formatMoney */])(option.price), settings.optionsSelectAllowed && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: `vehicle-option__indicator ${option.isSelected ? "is-active" : ""}`,
            onClick: () => handleOptionClick(option)
          })]
        })]
      }, `option-${idx}`))
    });
  }

  return null;
};

/* harmony default export */ var vehicle_options_accordion_list = (VehicleOptionsAccordionList);
// CONCATENATED MODULE: ./components/vehicle/vehicle-options-accordion-list/index.jsx

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/pro-regular-svg-icons"
var pro_regular_svg_icons_ = __webpack_require__("dFPx");

// CONCATENATED MODULE: ./components/vehicle/vehicle-options-accordion/vehicle-options-accordion.tsx







//TODO: Do not use index as key. Include item ids to service response. Unify options api responses
const VehicleOptionsAccordion = ({
  type,
  data,
  isDeactivated,
  settings
}) => {
  const {
    0: activeIdx,
    1: setActiveIdx
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    setActiveIdx(null);
  }, [isDeactivated]);

  const handleAccordionToggleClick = itemIdx => {
    if (!isDeactivated) {
      if (itemIdx !== activeIdx) {
        setActiveIdx(itemIdx);
      } else {
        setActiveIdx(null);
      }
    }
  };

  const isActive = itemIdx => {
    return isDeactivated || activeIdx === itemIdx;
  };

  if (data && data.length) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "accordion",
      children: data.map((category, idx) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `accordion__item ${isActive(idx) ? 'is-active' : ''}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `accordion__toggle d-flex flex-nowrap justify-content-between align-items-center ${category.isSelected ? 'is-selected' : ''}`,
          onClick: () => handleAccordionToggleClick(idx),
          children: [category.name, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            width: "20",
            height: "20",
            icon: isActive(idx) ? pro_regular_svg_icons_["faMinus"] : pro_regular_svg_icons_["faPlus"]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "accordion__options",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_options_accordion_list, {
            type: type,
            data: category.options,
            settings: {
              optionsSelectAllowed: settings.optionsSelectAllowed,
              onOptionClick: settings.onOptionClick
            }
          })
        })]
      }, `category-${idx}`))
    });
  }

  return null;
};

/* harmony default export */ var vehicle_options_accordion = (VehicleOptionsAccordion);
// CONCATENATED MODULE: ./components/vehicle/vehicle-options-accordion/index.jsx

// CONCATENATED MODULE: ./components/vehicle/vehicle-options-tab-content/vehicle-options-tab-content.tsx









const VehicleOptionsTabContent = ({
  type,
  data,
  isLoading,
  settings
}) => {
  const {
    0: options,
    1: setOptions
  } = Object(external_react_["useState"])(data);
  const {
    0: isFiltered,
    1: setIsFiltered
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    setIsFiltered(false);

    if (options !== data) {
      setOptions(data);
    }
  }, [data]);

  const handleOptionsSearch = evt => {
    if (evt.target.value && evt.target.value.length >= 3) {
      let value = evt.target.value.toLowerCase();
      let filteredOptions = [];
      data.forEach(item => {
        let options = item.options.filter(option => {
          return option.name.toLowerCase().search(value) !== -1;
        });

        if (options && options.length > 0) {
          filteredOptions.push({
            name: item.name,
            options: options
          });
        }
      });
      setIsFiltered(true);
      setOptions(filteredOptions);
    } else {
      setIsFiltered(false);

      if (options !== data) {
        setOptions(data);
      }
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: `${vehicle_options_tab_content_module_default.a['cap-warning']} my-3 mx-md-3`,
      children: "All vehicle data is supplied by an industry leading third party provider,  for guidance purposes only, and is subject to change. Leasing Options Limited is not responsible for any vehicle-data discrepancies or errors."
    }), isLoading && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: "Please wait while data is loading"
    }), !isLoading && options && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [settings.searchAllowed && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: vehicle_options_tab_content_module_default.a['option-search'],
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "20",
          height: "20",
          icon: pro_regular_svg_icons_["faSearch"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          className: "form-control",
          name: "search",
          placeholder: "Search",
          onChange: handleOptionsSearch
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_options_accordion, {
        type: type,
        data: options,
        isDeactivated: isFiltered,
        settings: {
          optionsSelectAllowed: settings.optionsSelectAllowed,
          onOptionClick: settings.onOptionClick
        }
      })]
    })]
  });
};

/* harmony default export */ var vehicle_options_tab_content = (VehicleOptionsTabContent);
// CONCATENATED MODULE: ./components/vehicle/vehicle-options-tab-content/index.jsx

// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__("CNqx");
var external_underscore_default = /*#__PURE__*/__webpack_require__.n(external_underscore_);

// EXTERNAL MODULE: ./components/vehicle/_libs/helpers/VehicleExtraOptionsHelper.tsx
var VehicleExtraOptionsHelper = __webpack_require__("/kJK");

// EXTERNAL MODULE: ./helpers/vehiclePricingHelper.tsx
var vehiclePricingHelper = __webpack_require__("Ezyo");

// EXTERNAL MODULE: ./business-logic/vehicleService.tsx + 2 modules
var vehicleService = __webpack_require__("wbKs");

// CONCATENATED MODULE: ./components/vehicle/vehicle-options-tabs/vehicle-options-tabs.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const VehicleOptionsTabs = ({
  vehicleType,
  capId,
  options,
  settings
}) => {
  const visibleItems = settings.visibleItems && settings.visibleItems.length > 0 ? settings.visibleItems : ["technical", "equipment", "extras"];
  const {
    0: key,
    1: setKey
  } = Object(external_react_["useState"])('technical');
  const {
    0: keyOptions,
    1: setKeyOptions
  } = Object(external_react_["useState"])([{
    id: "technical",
    title: "Technical",
    data: null,
    isDataLoading: false
  }, {
    id: "equipment",
    title: "Equipment",
    data: null,
    isDataLoading: false
  }, {
    id: "extras",
    title: "Add Extras",
    data: null,
    isDataLoading: false
  }]);
  Object(external_react_["useEffect"])(() => {
    //maybe load extras only if initial custom options state has selected extra options?
    if (visibleItems.includes("extras")) {
      loadOptions("extras");
    }
  }, []);
  Object(external_react_["useEffect"])(() => {
    let optionsType = key;
    loadOptions(optionsType);
  }, [key]);

  const updateKeyOptionsItem = (id, data, isDataLoading) => {
    if (id) {
      setKeyOptions(prevState => {
        const newKeyOptions = prevState.map(item => {
          if (item.id === id) {
            const updatedItem = _objectSpread(_objectSpread({}, item), {}, {
              data: data && Array.isArray(data) ? data : null,
              isDataLoading: isDataLoading
            });

            return updatedItem;
          }

          return item;
        });
        return newKeyOptions;
      });
    }
  };

  const loadOptions = optionsType => {
    let keyOptionsItem = keyOptions.find(function (item) {
      return item.id === optionsType;
    });

    if (keyOptionsItem) {
      if (!keyOptionsItem.data && !keyOptionsItem.isDataLoading) {
        let dataLoadMethod = null;

        switch (optionsType) {
          case "technical":
            dataLoadMethod = vehicleService["I" /* GetTechOptions */];
            break;

          case "equipment":
            dataLoadMethod = vehicleService["C" /* GetSpecOptions */];
            break;

          case "extras":
            dataLoadMethod = vehicleService["l" /* GetExtraOptions */];
            break;
        }

        if (dataLoadMethod) {
          updateKeyOptionsItem(keyOptionsItem.id, keyOptionsItem.data, true);
          dataLoadMethod(vehicleType, capId).then(result => {
            let originalData = null;
            let data = null;

            if (result.isSucceed && result.data) {
              originalData = result.data;

              if (keyOptionsItem.id === "technical") {
                data = originalData;
              } else if (keyOptionsItem.id === "equipment" && Array.isArray(originalData)) {
                data = originalData.map(x => ({
                  name: x.name,
                  options: x.options.map(x => ({
                    name: x
                  }))
                }));
              } else if (keyOptionsItem.id === "extras") {
                data = originalData.options;
              }
            }

            updateKeyOptionsItem(keyOptionsItem.id, data, false);

            if (settings.onOptionsDataLoaded) {
              settings.onOptionsDataLoaded(keyOptionsItem.id, originalData);
            }
          });
        }
      }
    }
  };

  const getOptionsToDisplay = (type, data) => {
    if (type === "extras" && data && options) {
      let customOptions = options;
      return data.map(categoryItem => {
        let resultCategory = {
          code: categoryItem.code,
          name: categoryItem.name,
          options: categoryItem.options.map(optionItem => {
            let resultOption = {
              code: optionItem.code,
              name: optionItem.name,
              price: Object(vehiclePricingHelper["b" /* getVehicleMonthlyPrice */])(customOptions.leasingDealType, optionItem.price, customOptions.term, customOptions.initialRentalMonths),
              isSelected: customOptions.options.includes(optionItem.code)
            };
            resultOption.price = VehicleExtraOptionsHelper["a" /* VehicleExtraOptionsHelper */].getOptionPrice({
              id: resultOption.code,
              price: resultOption.price,
              name: "",
              linkedRelationshipIds: []
            }, customOptions.optionsStates);
            return resultOption;
          }),
          isSelected: false
        };
        resultCategory.isSelected = external_underscore_default.a.some(resultCategory.options || [], function (item) {
          return item.isSelected;
        });
        return resultCategory;
      });
    }

    return data;
  };

  const getVisibleTabs = () => {
    let result = keyOptions.filter(item => visibleItems.includes(item.id));
    return result || [];
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: "h1 mb-5",
      children: "Technical specification and additional options"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "option-tabs",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Tabs"], {
        id: "options-tabs",
        defaultActiveKey: "technical",
        onSelect: k => setKey(k),
        children: getVisibleTabs().map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Tab"], {
          eventKey: item.id,
          title: item.title,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_options_tab_content, {
            type: item.id,
            data: getOptionsToDisplay(item.id, item.data),
            isLoading: item.isDataLoading,
            settings: {
              searchAllowed: settings.searchAllowed,
              optionsSelectAllowed: settings.optionsSelectAllowed,
              onOptionClick: settings.onOptionClick
            }
          })
        }, item.id))
      })
    })]
  });
};

/* harmony default export */ var vehicle_options_tabs = (VehicleOptionsTabs);
// CONCATENATED MODULE: ./components/vehicle/vehicle-options-tabs/index.jsx


/***/ }),

/***/ "3tIS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ sticker_sticker; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./components/layout/sticker/sticker.module.scss
var sticker_module = __webpack_require__("APW+");
var sticker_module_default = /*#__PURE__*/__webpack_require__.n(sticker_module);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/pro-light-svg-icons"
var pro_light_svg_icons_ = __webpack_require__("YjgO");

// CONCATENATED MODULE: ./components/layout/sticker/sticker.tsx








const Sticker = ({
  sticker,
  title
}) => {
  var _sticker$id;

  const blackFridayTheme = "false";
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: sticker_module_default.a['sticker'],
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["OverlayTrigger"], {
      trigger: "click",
      placement: "top",
      overlay: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Popover"], {
        id: `popover-positioned-${sticker === null || sticker === void 0 ? void 0 : sticker.id}`,
        children: [title ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Popover"].Title, {
          children: title
        }) : "", /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Popover"].Content, {
          children: sticker === null || sticker === void 0 ? void 0 : sticker.description
        })]
      }),
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
        type: "button",
        id: sticker === null || sticker === void 0 ? void 0 : (_sticker$id = sticker.id) === null || _sticker$id === void 0 ? void 0 : _sticker$id.toString(),
        className: `${sticker_module_default.a['sticker__btn']} ${blackFridayTheme === 'true' ? sticker_module_default.a['sticker__btn--bf'] : ''}`,
        children: [sticker === null || sticker === void 0 ? void 0 : sticker.name, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "33",
          height: "33",
          icon: pro_light_svg_icons_["faInfoCircle"]
        })]
      })
    }, sticker === null || sticker === void 0 ? void 0 : sticker.id)
  });
};

/* harmony default export */ var sticker_sticker = (Sticker);
// CONCATENATED MODULE: ./components/layout/sticker/index.js


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

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wcP7");


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

/***/ "7Sq+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ enquiryService_EnquiryService; });

// CONCATENATED MODULE: ./enums/ContactRequestTypes.tsx
let ContactRequestTypes;

(function (ContactRequestTypes) {
  ContactRequestTypes[ContactRequestTypes["ContactUs"] = 1] = "ContactUs";
  ContactRequestTypes[ContactRequestTypes["RequestCallback"] = 2] = "RequestCallback";
})(ContactRequestTypes || (ContactRequestTypes = {}));
// EXTERNAL MODULE: ./types/enquiry/BaseEnquiry.tsx
var BaseEnquiry = __webpack_require__("9ggA");

// CONCATENATED MODULE: ./types/enquiry/PricePromiseEnquiry.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class PricePromiseEnquiry_PricePromiseEnquiry extends BaseEnquiry["a" /* BaseEnquiry */] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "companyName", void 0);

    _defineProperty(this, "comments", void 0);

    _defineProperty(this, "fileId", void 0);
  }

}
// EXTERNAL MODULE: ./helpers/analytics.tsx
var analytics = __webpack_require__("btDt");

// EXTERNAL MODULE: ./helpers/apiResponseHelper.tsx
var apiResponseHelper = __webpack_require__("2l32");

// CONCATENATED MODULE: ./API/EnquiryAPI.tsx
function EnquiryAPI_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class EnquiryAPI_EnquiryAPI {
  static async SubmitRequestCallback(payload) {
    const response = await fetch(this.baseUrl + "api/enquiries/contactenquiry", {
      method: "POST",
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return await response.json();
  }

  static async SubmitContactEnquiry(payload) {
    const response = await fetch(this.baseUrl + "api/enquiries/contactenquiry", {
      method: "POST",
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return await response.json();
  }

  static async SubmitValuationEnquiry(payload) {
    const response = await fetch(this.baseUrl + "api/enquiries/valueyourcarenquiry", {
      method: "POST",
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return await response.json();
  }

  static async SubmitPricePromiseEnquiry(payload) {
    const response = await fetch(this.baseUrl + "api/enquiries/pricepromiseenquiry", {
      method: "POST",
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return await response.json();
  }

  static async SubmitQuoteEnquiry(payload) {
    const response = await fetch(this.baseUrl + "/api/enquiries/quoteenquiry", {
      method: "POST",
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return Object(apiResponseHelper["a" /* getApiResponse */])(response);
  }

  static async SubmitGarageEnquiry(payload) {
    const response = await fetch(this.baseUrl + "api/enquiries/garageenquiry", {
      method: "POST",
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return Object(apiResponseHelper["a" /* getApiResponse */])(response);
  }

}

EnquiryAPI_defineProperty(EnquiryAPI_EnquiryAPI, "baseUrl", "https://enquiries-website.api.leasingoptions.co.uk/");
// CONCATENATED MODULE: ./business-logic/enquiryService.tsx




class enquiryService_EnquiryService {
  static async SubmitRequestCallback(name, telephone, referrerUrl = null) {
    let payload = {
      contactEnquiryType: ContactRequestTypes.RequestCallback,
      details: referrerUrl,
      fullName: name,
      telephone: telephone,
      gaClientId: Object(analytics["a" /* getGAClientId */])(),
      email: '',
      allowedCommunicationTypes: []
    };
    return EnquiryAPI_EnquiryAPI.SubmitRequestCallback(payload);
  }

  static async SubmitContactEnquiry(email, name, telephone, companyName, leasingDealType, message, allowedCommunicationTypes, referrerUrl = null) {
    let payload = {
      contactEnquiryType: ContactRequestTypes.ContactUs,
      contactSubtype: null,
      details: referrerUrl,
      fullName: name,
      telephone: telephone,
      gaClientId: Object(analytics["a" /* getGAClientId */])(),
      email: email,
      leasingDealType: leasingDealType,
      companyName: companyName,
      comments: message,
      allowedCommunicationTypes: allowedCommunicationTypes
    };
    return EnquiryAPI_EnquiryAPI.SubmitContactEnquiry(payload);
  }

  static async SubmitValuationEnquiry(payload) {
    return EnquiryAPI_EnquiryAPI.SubmitValuationEnquiry(payload);
  }

  static async SubmitPricePromiseEnquiry(name, companyName, telephone, email, message, fileId, allowedCommunicationTypes) {
    let payload = new PricePromiseEnquiry_PricePromiseEnquiry();
    payload.fullName = name;
    payload.telephone = telephone;
    payload.email = email;
    payload.companyName = companyName;
    payload.comments = message;
    payload.fileId = fileId;
    payload.allowedCommunicationTypes = allowedCommunicationTypes;
    payload.gaClientId = Object(analytics["a" /* getGAClientId */])();
    return EnquiryAPI_EnquiryAPI.SubmitPricePromiseEnquiry(payload);
  }

  static async SubmitQuoteEnquiry(payload) {
    return EnquiryAPI_EnquiryAPI.SubmitQuoteEnquiry(payload);
  }

  static async SubmitGarageEnquiry(payload) {
    return EnquiryAPI_EnquiryAPI.SubmitGarageEnquiry(payload);
  }

}

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

/***/ "8qXx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrustWidgetTypes; });
let TrustWidgetTypes;

(function (TrustWidgetTypes) {
  TrustWidgetTypes[TrustWidgetTypes["Slider"] = 1] = "Slider";
  TrustWidgetTypes[TrustWidgetTypes["Box"] = 2] = "Box";
})(TrustWidgetTypes || (TrustWidgetTypes = {}));

/***/ }),

/***/ "8ua7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ privacy_policy_consent; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: ./components/privacy-policy-consent/privacy-policy-consent.module.scss
var privacy_policy_consent_module = __webpack_require__("jEoz");
var privacy_policy_consent_module_default = /*#__PURE__*/__webpack_require__.n(privacy_policy_consent_module);

// EXTERNAL MODULE: ./helpers/cookiesHelper.tsx
var cookiesHelper = __webpack_require__("DQXc");

// CONCATENATED MODULE: ./components/privacy-policy-consent/privacy-policy-consent.tsx







const PrivacyPolicyConsent = ({}) => {
  //Used to share "privacyConfirmed" field with parent form and use same validation
  const formContext = Object(external_react_hook_form_["useFormContext"])();
  const isRequired = !Object(cookiesHelper["a" /* hasPrivacyAccepted */])();

  if (isRequired) {
    var _formContext$errors$p;

    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "form-group",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `form-check form-check-inline ${privacy_policy_consent_module_default.a["privacy-agreement"]}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "checkbox",
          className: "form-check-input",
          id: "privacyConfirmed",
          name: "privacyConfirmed",
          ref: formContext.register({
            validate: value => value === true || "Confirm is required."
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
          htmlFor: "privacyConfirmed",
          className: formContext.errors.privacyConfirmed ? privacy_policy_consent_module_default.a["invalid-feedback"] : null,
          children: "I confirm that I have read the Leasing Options Privacy Policy and that I understand the ways in which Leasing Options will use my personal data."
        })]
      }), formContext.errors.privacyConfirmed && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "invalid-feedback d-block",
        children: (_formContext$errors$p = formContext.errors.privacyConfirmed) === null || _formContext$errors$p === void 0 ? void 0 : _formContext$errors$p.message
      })]
    });
  }

  return null;
};

/* harmony default export */ var privacy_policy_consent = (PrivacyPolicyConsent);
// CONCATENATED MODULE: ./components/privacy-policy-consent/index.jsx


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

/***/ "9U2n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ vehicle_quote_enquiry_modal; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__("qqGZ");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);

// EXTERNAL MODULE: ./components/marketing-consent/index.jsx + 1 modules
var marketing_consent = __webpack_require__("SeHH");

// EXTERNAL MODULE: ./components/privacy-policy-consent/index.jsx + 1 modules
var privacy_policy_consent = __webpack_require__("8ua7");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/pro-regular-svg-icons"
var pro_regular_svg_icons_ = __webpack_require__("dFPx");

// EXTERNAL MODULE: ./enums/LeasingDealTypes.tsx
var LeasingDealTypes = __webpack_require__("l7ai");

// EXTERNAL MODULE: ./helpers/currencyHelper.tsx
var currencyHelper = __webpack_require__("oszm");

// EXTERNAL MODULE: ./helpers/validation.tsx
var validation = __webpack_require__("gt28");

// EXTERNAL MODULE: ./helpers/analytics.tsx
var analytics = __webpack_require__("btDt");

// EXTERNAL MODULE: ./helpers/cookiesHelper.tsx
var cookiesHelper = __webpack_require__("DQXc");

// EXTERNAL MODULE: ./helpers/urlHelper.tsx
var urlHelper = __webpack_require__("zjkP");

// EXTERNAL MODULE: ./business-logic/marketingCommunicationsService.tsx
var marketingCommunicationsService = __webpack_require__("2inZ");

// EXTERNAL MODULE: ./business-logic/enquiryService.tsx + 3 modules
var enquiryService = __webpack_require__("7Sq+");

// EXTERNAL MODULE: ./business-logic/systemService.tsx + 1 modules
var systemService = __webpack_require__("uDbZ");

// CONCATENATED MODULE: ./business-logic/quotesService.tsx

class quotesService_QuotesService {
  static async VerifySalesPerson(salesPersonId, emailAddress, telephone) {
    return Object(systemService["i" /* VerifySalesPerson */])(salesPersonId, emailAddress, telephone);
  }

  static async CheckInformationNoticAcceptance(emailAddress, telephone) {
    return new Promise(resolve => {
      Object(systemService["a" /* CheckInformationNoticAcceptance */])(emailAddress, telephone).then(response => {
        const result = response.isSucceed ? response.data : false;
        resolve(result);
      });
    });
  }

}
// CONCATENATED MODULE: ./components/vehicle/vehicle-quote-enquiry-modal/vehicle-quote-enquiry-modal.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




















const VehicleQuoteEnquiryModal = (_ref) => {
  var _errors$telephone, _errors$email, _errors$ownerId, _errors$informationNo;

  let {
    title,
    baseData,
    settings,
    onRequestClose
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["title", "baseData", "settings", "onRequestClose"]);

  const router = Object(router_["useRouter"])();
  const methods = Object(external_react_hook_form_["useForm"])();
  const {
    register,
    handleSubmit,
    errors
  } = methods;
  const procFee = parseFloat("199");
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: marketingConsentIsVerifying,
    1: setMarketingConsentIsVerifying
  } = Object(external_react_["useState"])(false);
  const {
    0: emailAddressConsent,
    1: setEmailAddressConsent
  } = Object(external_react_["useState"])(null);
  const {
    0: salesPersons,
    1: setSalesPersons
  } = Object(external_react_["useState"])(settings.salesPersons || []);
  const {
    0: salesPersonVerificationRequired,
    1: setSalesPersonVerificationRequired
  } = Object(external_react_["useState"])(false);
  const {
    0: ownerConfirmRequired,
    1: setOwnerConfirmRequired
  } = Object(external_react_["useState"])(false);
  const {
    0: owners,
    1: setOwners
  } = Object(external_react_["useState"])([]);
  const {
    0: owner,
    1: setOwner
  } = Object(external_react_["useState"])(null);
  const {
    0: step,
    1: setStep
  } = Object(external_react_["useState"])(1);
  const {
    0: formState,
    1: setFormState
  } = Object(external_react_["useState"])({
    fullName: null,
    telephone: null,
    email: null,
    companyName: null,
    ownerId: null,
    allowedCommunicationTypes: null,
    informationNoticeConfirmed: false
  }); //TODO: get salespersons with settings

  Object(external_react_["useEffect"])(() => {
    if (salesPersons.length === 0 && settings.isInternal) {
      Object(systemService["b" /* GetSalesPeople */])().then(result => {
        setSalesPersons(result.data);
      });
    }
  }, []);

  const getTitle = step => {
    let result = title;

    if (step === 2) {
      result = "Information Notice";
    }

    return result;
  }; //Fires only when input loses focus and triggers marketing-consent to reinitialize


  const handleEmailFocusOut = event => {
    if (!settings.isInternal) {
      if (event.target.value && Object(validation["a" /* EmailAddressIsValid */])(event.target.value)) {
        setEmailAddressConsent(event.target.value);
      } else {
        setEmailAddressConsent(null);
      }
    }

    setSalesPersonVerificationFlag();
  };

  const handleTelephoneFocusOut = event => {
    setSalesPersonVerificationFlag();
  };

  const handleSalesPersonChange = event => {
    setSalesPersonVerificationFlag();
  };

  const setSalesPersonVerificationFlag = () => {
    if (settings.isInternal) {
      setSalesPersonVerificationRequired(true);
      setOwnerConfirmRequired(false);
      setOwners([]);
      setOwner(null);
    }
  };

  const verifySalesPerson = (salesPersonId, email, telephone) => {
    return new Promise(resolve => {
      if (salesPersonVerificationRequired) {
        setOwnerConfirmRequired(false);
        setOwner(null);
      }

      if (salesPersonVerificationRequired && salesPersonId) {
        quotesService_QuotesService.VerifySalesPerson(salesPersonId, email, telephone).then(result => {
          let stopExecutionFlag = false;
          setSalesPersonVerificationRequired(false);

          if (result.isSucceed && result.data.isRequired && result.data.salesPersons) {
            setOwnerConfirmRequired(true);
            const ownersList = result.data.salesPersons;
            var existingOwner = ownersList.find(item => {
              return item.isExisting;
            });

            if (existingOwner) {
              setOwner({
                id: existingOwner.id,
                name: existingOwner.text
              });
            }

            setOwners(ownersList);
            stopExecutionFlag = true;
          } else {
            setOwner({
              id: salesPersonId,
              name: null
            });
          }

          resolve(stopExecutionFlag);
        });
      } else {
        setSalesPersonVerificationRequired(false);
        resolve(false);
      }
    });
  };

  const onSubmit = data => {
    if (!isLoading && !marketingConsentIsVerifying) {
      if (step === 1) {
        setIsLoading(true);
        const email = data.email;
        const telephone = data.telephone;
        const salesPersonId = data.salesPersonId;
        verifySalesPerson(salesPersonId, email, telephone).then(verifySalesPersonStopExecutionFlag => {
          if (verifySalesPersonStopExecutionFlag) {
            setIsLoading(false);
          } else {
            let formData = {
              fullName: data.fullName,
              telephone: data.telephone,
              email: data.email,
              companyName: data.companyName,
              ownerId: data.ownerId || data.salesPersonId || null,
              allowedCommunicationTypes: data.allowedCommunicationTypes
            };

            if (settings.proceededToApplyForFinanceDirectly) {
              quotesService_QuotesService.CheckInformationNoticAcceptance(email, telephone).then(result => {
                if (result) {
                  setFormState(prevState => {
                    return _objectSpread(_objectSpread({}, prevState), formData);
                  });
                  setIsLoading(false);
                  setStep(2);
                } else {
                  doSubmit(formData);
                }
              });
            } else {
              doSubmit(formData);
            }
          }
        });
      } else if (step === 2) {
        let formData = _objectSpread({}, formState);

        formData.informationNoticeConfirmed = data.informationNoticeConfirmed;
        doSubmit(formData);
      }
    }
  };

  const doSubmit = formData => {
    if (formData && baseData) {
      setIsLoading(true);

      let enquiryData = _objectSpread(_objectSpread({}, baseData), {}, {
        quoteEnquiryType: settings.proceededToApplyForFinanceDirectly ? 2 : 1,
        isIDDAccepted: settings.proceededToApplyForFinanceDirectly && formData.informationNoticeConfirmed,
        fullName: formData.fullName,
        telephone: formData.telephone,
        email: formData.email,
        companyName: baseData.leasingDealType !== 2 ? formData.companyName : null,
        gaClientId: Object(analytics["a" /* getGAClientId */])()
      });

      if (settings.isInternal) {
        enquiryData.salesPersonId = formData.ownerId;
      } else {
        enquiryData.allowedCommunicationTypes = formData.allowedCommunicationTypes || null;
      }

      enquiryService["a" /* EnquiryService */].SubmitQuoteEnquiry(enquiryData).then(result => {
        setIsLoading(false);

        if (result.isSucceed && result.data) {
          if (!settings.isInternal) {
            let expiryDate = new Date();
            expiryDate.setFullYear(expiryDate.getFullYear() + 1);

            if (enquiryData.allowedCommunicationTypes) {
              marketingCommunicationsService["a" /* MarketingCommunicationsService */].SetToSeenMarketingForm(enquiryData.email, expiryDate);
            }

            if (formData.privacyConfirmed) {
              Object(cookiesHelper["b" /* setPrivacyAccepted */])(expiryDate);
            }
          }

          if (settings.proceededToApplyForFinanceDirectly) {
            switch (enquiryData.leasingDealType.toString()) {
              case "1":
              case "3":
                var url = "/proposal_business?directfinance=1&fromconfirmquote=1&enquiryid=" + result.data + "&email=" + encodeURI(enquiryData.email) + "&fromInsuredLeasing=" + (window.location.href.includes("car-leasing-with-insurance") ? "1" : "0");
                router.push(url);
                break;

              case "2":
                var url = "/proposal_personal?directfinance=1&fromconfirmquote=1&enquiryid=" + result.data + "&email=" + encodeURI(enquiryData.email) + "&fromInsuredLeasing=" + (window.location.href.includes("car-leasing-with-insurance") ? "1" : "0");
                router.push(url);
                break;
            }
          } else {
            if (settings.isInternal) {
              router.push(Object(urlHelper["s" /* GetThankYouPageUrl */])(true));
            } else {
              router.push(Object(urlHelper["s" /* GetThankYouPageUrl */])(false, "quoteconfirm"));
            }
          }

          onRequestClose();
        }
      });
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Modal_default.a, _objectSpread(_objectSpread({
    onHide: onRequestClose,
    centered: true,
    scrollable: false
  }, otherProps), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Header, {
      className: "d-flex flex-nowrap justify-content-center align-items-center",
      closeButton: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Title, {
        className: "mb-0",
        children: getTitle(step)
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Body, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_hook_form_["FormContext"], _objectSpread(_objectSpread({}, methods), {}, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-24",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "A member of our team will contact you shortly after your submission."
            })
          })
        }), step === 1 ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "row",
            children: [settings.leasingMessage ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-24",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                children: ["I\u2019m interested in leasing of ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                  children: settings.leasingMessage
                })]
              })
            }) : null, /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-24 col-lg-12 form-group",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                children: ["Full Name ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  children: "(Required)"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                className: `form-control ${errors.fullName ? "is-invalid" : ""}`,
                placeholder: "First & Last Name",
                maxLength: 50,
                name: "fullName",
                disabled: ownerConfirmRequired,
                ref: register({
                  required: true
                })
              }), errors.fullName ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: "Full Name is required."
              }) : null]
            }), baseData.leasingDealType !== LeasingDealTypes["a" /* LeasingDealTypes */].Personal ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-24 col-lg-12 form-group",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                children: "Company Name"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                className: "form-control",
                placeholder: "Company Name",
                maxLength: 50,
                name: "companyName",
                disabled: ownerConfirmRequired,
                ref: register()
              })]
            }) : null, /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-24 col-lg-12 form-group",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                children: ["Telephone ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  children: "(Required)"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "tel",
                className: `form-control ${errors.telephone ? "is-invalid" : ""}`,
                placeholder: "Mobile or Home",
                maxLength: 20,
                name: "telephone",
                onBlur: handleTelephoneFocusOut,
                disabled: ownerConfirmRequired,
                ref: register({
                  required: 'Telephone is required.',
                  validate: value => Object(validation["d" /* PhoneNumberIsValid */])(value) === true || 'Please specify a valid UK phone number.'
                })
              }), errors.telephone ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: (_errors$telephone = errors.telephone) === null || _errors$telephone === void 0 ? void 0 : _errors$telephone.message
              }) : null]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-24 col-lg-12 form-group",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                children: ["Email ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  children: "(Required)"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "email",
                className: `form-control ${errors.email ? "is-invalid" : ""}`,
                placeholder: "E.g. johnsmith@website.co.uk",
                maxLength: 50,
                name: "email",
                onBlur: handleEmailFocusOut,
                disabled: ownerConfirmRequired,
                ref: register({
                  required: 'Email is required.',
                  validate: value => Object(validation["a" /* EmailAddressIsValid */])(value) === true || 'Email is invalid.'
                })
              }), errors.email ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
              }) : null]
            }), settings.isInternal ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-24 col-lg-12 form-group",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                children: "Salesperson"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
                className: "form-control",
                name: "salesPersonId",
                onChange: handleSalesPersonChange,
                disabled: ownerConfirmRequired,
                ref: register,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  value: "",
                  children: "Please select"
                }), salesPersons.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  value: item.id,
                  children: item.fullName
                }, item.id))]
              })]
            }) : null]
          }), settings.isInternal && ownerConfirmRequired ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-24",
              children: [owner && owner.name ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
                children: ["Account with these details already exists for Owner: ", owner.name]
              }) : null, owners.map((item, idx) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  type: "radio",
                  className: "d-inline mr-1",
                  name: "ownerId",
                  id: `salesPerson_${idx}`,
                  value: item.id,
                  defaultChecked: owner.id === item.id,
                  ref: register({
                    required: 'Owner is required.'
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "d-inline",
                  htmlFor: `salesPerson_${idx}`,
                  children: item.text
                })]
              }, item.id)), errors.ownerId ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: (_errors$ownerId = errors.ownerId) === null || _errors$ownerId === void 0 ? void 0 : _errors$ownerId.message
              }) : null]
            })
          }) : null, !settings.isInternal ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-24",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(marketing_consent["a" /* default */], {
                emailAddress: emailAddressConsent,
                settings: {
                  onVerificationStart: () => {
                    setMarketingConsentIsVerifying(true);
                  },
                  onVerificationComplete: () => {
                    setMarketingConsentIsVerifying(false);
                  }
                }
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(privacy_policy_consent["a" /* default */], {})]
            })
          }) : null]
        }) : null, step === 2 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              className: "mb-3",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                children: ["We are ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                  children: "Leasing Options Limited"
                }), ", a credit intermediary for vehicle finance and insurance related products. Our registered office is ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                  children: "Options House, Atkin Street, Worsley, Manchester, M28 3DG"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                children: ["We are authorised and regulated by the Financial Conduct Authority. Registered no: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                  children: "660061"
                }), "."]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: "We are a credit broker of vehicle finance, we are not a funder or a lender."
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                children: ["We charge a Processing Fee of ", Object(currencyHelper["a" /* formatMoney */])(procFee), " including VAT which is only payable at order stage, once acceptable finance has been obtained, as a contribution to the costs incurred in processing the vehicle finance agreement. We do not charge fees for processing insurance products. Payment of the Processing Fee can be made on-line using a credit or debit card or by BACs transfer."]
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "form-check form-check-inline privacy-agreement",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  type: "checkbox",
                  className: "form-check-input",
                  id: "infoConfirmed",
                  name: "informationNoticeConfirmed",
                  ref: register({
                    validate: value => value === true || "Information Notice confirmation required."
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  htmlFor: "infoConfirmed",
                  className: errors.informationNoticeConfirmed ? "invalid-feedback" : null,
                  children: "Please respond to this 'Information Notice' confirming that you understand and acknowledge the above and that you are happy to proceed. Any delays in receiving confirmation may impact on the rates quoted."
                })]
              }), errors.informationNoticeConfirmed && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: (_errors$informationNo = errors.informationNoticeConfirmed) === null || _errors$informationNo === void 0 ? void 0 : _errors$informationNo.message
              })]
            })]
          })
        }) : null, settings.showPriceWarning ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-24",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "alert alert-warning",
              role: "alert",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                children: "IMPORTANT:"
              }), " This is an indicative price, please speak to your account manager for the exact rental."]
            })
          })
        }) : null]
      }))
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Footer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        type: "button",
        className: "btn btn-primary btn-lg",
        onClick: handleSubmit(onSubmit),
        children: isLoading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "16",
          height: "16",
          icon: pro_regular_svg_icons_["faSpinner"],
          className: "fa-spin"
        }) : "Submit"
      })
    })]
  }));
};

/* harmony default export */ var vehicle_quote_enquiry_modal = (VehicleQuoteEnquiryModal);
// CONCATENATED MODULE: ./components/vehicle/vehicle-quote-enquiry-modal/index.jsx


/***/ }),

/***/ "9W3L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ vehicle_features; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: ./helpers/helpers.tsx
var helpers = __webpack_require__("mmV+");

// EXTERNAL MODULE: ./helpers/enumsHelper.tsx + 3 modules
var enumsHelper = __webpack_require__("YLv1");

// CONCATENATED MODULE: ./components/vehicle/vehicle-features/vehicle-features.tsx








const VehicleFeatures = ({
  features
}) => {
  if (features && features.length > 0) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        className: "h1 mb-5",
        children: "Features"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("table", {
        className: "table table-bordered border-0",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
            className: "d-flex flex-wrap",
            children: features.map((feature, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
              className: `col-24 col-md-12 d-flex d-md-inline-flex justify-content-between align-items-center pt-2 pb-2 ${index > 1 ? 'border-top-0' : null}`,
              children: [Object(enumsHelper["a" /* GetFeatureText */])(feature), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                width: "32",
                height: "32",
                icon: Object(helpers["c" /* GetFeatureIcon */])(feature),
                className: "fa-2x"
              })]
            }, index))
          })
        })
      })]
    });
  }

  return null;
};

/* harmony default export */ var vehicle_features = (VehicleFeatures);
// CONCATENATED MODULE: ./components/vehicle/vehicle-features/index.jsx


/***/ }),

/***/ "9d+h":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"vehicle-slideup": "vehicle-slideup_vehicle-slideup__2_PhR",
	"panel-close": "vehicle-slideup_panel-close__1nn4T",
	"vehicle-price": "vehicle-slideup_vehicle-price__3ed9R",
	"btn": "vehicle-slideup_btn__3inQ9"
};


/***/ }),

/***/ "9ggA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseEnquiry; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BaseEnquiry {
  constructor() {
    _defineProperty(this, "fullName", void 0);

    _defineProperty(this, "telephone", void 0);

    _defineProperty(this, "email", void 0);

    _defineProperty(this, "details", void 0);

    _defineProperty(this, "gaClientId", void 0);

    _defineProperty(this, "allowedCommunicationTypes", null);
  }

}

/***/ }),

/***/ "APW+":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sticker": "sticker_sticker__1kSf8",
	"sticker__btn": "sticker_sticker__btn__2uGvo",
	"sticker__btn--bf": "sticker_sticker__btn--bf__1YAur"
};


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

/***/ "BEL6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ vehicle_key_info; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/layout/popover/index.js + 1 modules
var popover = __webpack_require__("TovF");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/pro-regular-svg-icons"
var pro_regular_svg_icons_ = __webpack_require__("dFPx");

// EXTERNAL MODULE: ./enums/LeasingDealTypes.tsx
var LeasingDealTypes = __webpack_require__("l7ai");

// EXTERNAL MODULE: ./enums/FuelTypes.tsx
var FuelTypes = __webpack_require__("+XcX");

// EXTERNAL MODULE: ./helpers/currencyHelper.tsx
var currencyHelper = __webpack_require__("oszm");

// EXTERNAL MODULE: ./helpers/enumsHelper.tsx + 3 modules
var enumsHelper = __webpack_require__("YLv1");

// CONCATENATED MODULE: ./components/vehicle/vehicle-key-info/vehicle-key-info.tsx













const VehicleKeyInfo = ({
  leasingDealType,
  vehicle,
  prices,
  sourceUrl
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: "h1 mb-5",
      children: "Key Information"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "table table-bordered border-0",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row no-gutters",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24 col-md-12 px-0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("table", {
            className: "w-100",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tbody", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                className: "d-flex flex-wrap",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                  className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-md-0",
                  children: ["Fuel Economy: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: vehicle.fuelType !== FuelTypes["a" /* FuelTypes */].Electric && vehicle.mpg ? `${Object(currencyHelper["b" /* formatNumber */])(vehicle.mpg, 1)} MPG` : "N/A"
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                className: "d-flex flex-wrap",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                  className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-md-0",
                  children: ["0 - 62 mph: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: vehicle.speed60mph && vehicle.speed60mph > 0 ? `${Object(currencyHelper["b" /* formatNumber */])(vehicle.speed60mph, 1)} Secs` : "N/A"
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                className: "d-flex flex-wrap",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                  className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-md-0",
                  children: [vehicle.fuelType === FuelTypes["a" /* FuelTypes */].Electric ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
                    children: ["Range: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      children: vehicle.range ? `${vehicle.range} km` : "N/A"
                    })]
                  }) : null, vehicle.fuelType !== FuelTypes["a" /* FuelTypes */].Electric ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
                    children: ["Co2: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      children: vehicle.co2 || vehicle.co2 === 0 ? `${Object(currencyHelper["b" /* formatNumber */])(vehicle.co2)} g/km` : "N/A"
                    })]
                  }) : null]
                })
              }), leasingDealType !== LeasingDealTypes["a" /* LeasingDealTypes */].Personal && /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                className: "d-flex flex-wrap",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                  className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-md-0",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                    children: ["BIK Tax: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(popover["a" /* default */], {
                      id: "contract-length",
                      trigger: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                        width: "16",
                        height: "16",
                        icon: pro_regular_svg_icons_["faInfoCircle"]
                      }),
                      body: "BIK Tax"
                    })]
                  }), " ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                      href: `/contact?type=bik&source=${sourceUrl}`,
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                        children: "Click"
                      })
                    }), " to request"]
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24 col-md-12 px-0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("table", {
            className: "w-100",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tbody", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                className: "d-flex flex-wrap",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                  className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                    children: ["P11D: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(popover["a" /* default */], {
                      id: "contract-length",
                      trigger: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                        width: "16",
                        height: "16",
                        icon: pro_regular_svg_icons_["faInfoCircle"]
                      }),
                      body: "The valuation used by employers to calculate Company Car Tax"
                    })]
                  }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: prices.p11d || "N/A"
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                className: "d-flex flex-wrap",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                  className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center",
                  children: ["Insurance Group: ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                    children: [vehicle.insuranceGroup && vehicle.insuranceGroup !== "0" ? `Group ${vehicle.insuranceGroup}` : "-", " "]
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                className: "d-flex flex-wrap",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                  className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center",
                  children: ["Passengers: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: vehicle.seats ? `${vehicle.seats} Adults` : "N/A"
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                className: "d-flex flex-wrap",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                  className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center",
                  children: ["Fuel Type: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: Object(enumsHelper["b" /* GetFuelTypeText */])(vehicle.fuelType)
                  })]
                })
              })]
            })
          })
        })]
      })
    })]
  });
};

/* harmony default export */ var vehicle_key_info = (VehicleKeyInfo);
// CONCATENATED MODULE: ./components/vehicle/vehicle-key-info/index.jsx


/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

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

/***/ "CTce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleExtraOptionsManager; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("CNqx");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_VehicleExtraOptionsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/kJK");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class VehicleExtraOptionsManager {
  constructor() {
    _defineProperty(this, "_vehicleOptions", []);

    _defineProperty(this, "_vehicleOptionRelationships", []);

    _defineProperty(this, "_selectedOptionIds", []);

    _defineProperty(this, "_confirmRelationshipIds", []);

    _defineProperty(this, "_optionsStates", []);
  }

  _clearMangerState() {
    this._confirmRelationshipIds = [];
    this._selectedOptionIds = [];
    this._optionsStates = [];
  }

  init(options, relationships) {
    this._vehicleOptions = options || [];
    this._vehicleOptionRelationships = relationships || [];

    this._clearMangerState();
  }

  processOptions(optionsToProcess, confirmRelationshipIds = null, selectedOptionIds = null, optionsStates = null) {
    this._clearMangerState();

    this._selectedOptionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(selectedOptionIds || []);
    this._confirmRelationshipIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(confirmRelationshipIds || []);
    this._optionsStates = _helpers_VehicleExtraOptionsHelper__WEBPACK_IMPORTED_MODULE_1__[/* VehicleExtraOptionsHelper */ "a"].cloneOptionsStates(optionsStates || []);
    let silentlySelectedOptionIds = null;

    if (optionsToProcess && optionsToProcess.length > 0) {
      let selectedOptionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(this._selectedOptionIds);

      let optionIdsByAction = _helpers_VehicleExtraOptionsHelper__WEBPACK_IMPORTED_MODULE_1__[/* VehicleExtraOptionsHelper */ "a"].splitOptionIdsByAction(optionsToProcess);

      if (underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(optionIdsByAction.selectIds, optionIdsByAction.deselectIds).length > 0) {
        alert("Action is not allowed.");
        return null;
      }

      let forSilentSelect = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.pluck(_helpers_VehicleExtraOptionsHelper__WEBPACK_IMPORTED_MODULE_1__[/* VehicleExtraOptionsHelper */ "a"].getOptionsWithoutRelationships(this._vehicleOptions, optionIdsByAction.selectIds), 'id');

      let forSilentDeselect = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.pluck(_helpers_VehicleExtraOptionsHelper__WEBPACK_IMPORTED_MODULE_1__[/* VehicleExtraOptionsHelper */ "a"].getOptionsWithoutRelationships(this._vehicleOptions, optionIdsByAction.deselectIds), 'id');

      let optionIdsForSilentApply = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(forSilentSelect, forSilentDeselect);

      if (optionIdsForSilentApply.length > 0) {
        selectedOptionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(selectedOptionIds, forSilentSelect);
        selectedOptionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.difference(selectedOptionIds, forSilentDeselect);
        this._selectedOptionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(selectedOptionIds);
        silentlySelectedOptionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(selectedOptionIds);
      }

      let optionsToConfirm = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.filter(optionsToProcess, function (optionToProcess) {
        return !underscore__WEBPACK_IMPORTED_MODULE_0___default.a.contains(optionIdsForSilentApply, optionToProcess.id);
      });

      if (optionsToConfirm != null && optionsToConfirm.length > 0) {
        let confirmDetails = this._getConfirmDetails(optionsToConfirm, selectedOptionIds, this._confirmRelationshipIds, this._optionsStates);

        if (confirmDetails.hasConflicts) {
          alert("Action is not allowed.");
          return null;
        }

        let optionsForSilentApply = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.filter(optionsToConfirm, function (option) {
          let notAny = !underscore__WEBPACK_IMPORTED_MODULE_0___default.a.some(confirmDetails.confirmRelationships, function (confirmRelationship) {
            let contains = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.contains(confirmRelationship.optionIds, option.id);

            return contains;
          });
          return notAny;
        });

        if (optionsForSilentApply.length > 0) {
          silentlySelectedOptionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(this._selectedOptionIds);
          optionIdsByAction = _helpers_VehicleExtraOptionsHelper__WEBPACK_IMPORTED_MODULE_1__[/* VehicleExtraOptionsHelper */ "a"].splitOptionIdsByAction(optionsForSilentApply);
          silentlySelectedOptionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(silentlySelectedOptionIds, optionIdsByAction.selectIds);
          silentlySelectedOptionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.difference(silentlySelectedOptionIds, optionIdsByAction.deselectIds);
        }

        this._selectedOptionIds = confirmDetails.selectedOptionIds;
        this._confirmRelationshipIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.pluck(confirmDetails.confirmRelationships, "id");
        this._optionsStates = confirmDetails.optionsStates;
      }
    }

    let result = {
      selectedOptionIds: underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(this._selectedOptionIds),
      confirmRelationshipIds: underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(this._confirmRelationshipIds),
      optionsStates: underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(this._optionsStates),
      silentlySelectedOptionIds: silentlySelectedOptionIds
    };
    return result;
  }

  _getConfirmDetails(optionsToConfirm, initialSelectedOptionIds, initialConfirmReationshipIds, initialOptionsStates) {
    let result = {
      hasConflicts: false,
      selectedOptionIds: [],
      confirmRelationships: [],
      optionsStates: []
    };

    if (optionsToConfirm && optionsToConfirm.length > 0) {
      let currentSelectedOptionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(initialSelectedOptionIds || []);

      let currentPendingRelationshipIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(initialConfirmReationshipIds || []);

      let currentOptionsStates = _helpers_VehicleExtraOptionsHelper__WEBPACK_IMPORTED_MODULE_1__[/* VehicleExtraOptionsHelper */ "a"].cloneOptionsStates(initialOptionsStates || []);

      let iterationOptions = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.clone(optionsToConfirm);

      let iterationResult = this._getConfirmDetailsIteration(iterationOptions, currentSelectedOptionIds, currentOptionsStates);

      while (iterationResult) {
        if (iterationResult.hasConflicts) {
          result.hasConflicts = true;
          break;
        }

        iterationOptions.forEach(function (iterationOptionState) {
          let optionState = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.find(currentOptionsStates, function (optionState) {
            return optionState.id === iterationOptionState.id;
          });

          if (!optionState) {
            optionState = {
              id: iterationOptionState.id,
              selectionRequiredBy: [],
              deselectionRequiredBy: [],
              mirrorIn: []
            };
            currentOptionsStates.push(optionState);
          }

          optionState.selectionRequiredBy = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(optionState.selectionRequiredBy, underscore__WEBPACK_IMPORTED_MODULE_0___default.a.difference(iterationOptionState.selectionRequiredBy, [-1]));
          optionState.deselectionRequiredBy = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(optionState.deselectionRequiredBy, underscore__WEBPACK_IMPORTED_MODULE_0___default.a.difference(iterationOptionState.deselectionRequiredBy, [-1]));
          optionState.mirrorIn = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(optionState.mirrorIn, iterationOptionState.mirrorIn);
        });

        if (iterationResult.recallRestrictionRelationshipIds) {
          currentOptionsStates.forEach(function (optionState) {
            optionState.selectionRequiredBy = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.difference(optionState.selectionRequiredBy, iterationResult.recallRestrictionRelationshipIds);
            optionState.deselectionRequiredBy = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.difference(optionState.deselectionRequiredBy, iterationResult.recallRestrictionRelationshipIds);
          });
        }

        let selectIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.pluck(underscore__WEBPACK_IMPORTED_MODULE_0___default.a.filter(iterationOptions, function (option) {
          return option.selectionRequiredBy.length > 0;
        }), "id");

        let deselectIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.pluck(underscore__WEBPACK_IMPORTED_MODULE_0___default.a.filter(iterationOptions, function (option) {
          return option.deselectionRequiredBy.length > 0;
        }), "id");

        currentSelectedOptionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.difference(underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(currentSelectedOptionIds, selectIds), deselectIds);
        currentPendingRelationshipIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(currentPendingRelationshipIds, iterationResult.confirmRelationshipIds);
        iterationOptions = iterationResult.nextIterationOptions;
        iterationResult = this._getConfirmDetailsIteration(iterationOptions, currentSelectedOptionIds, currentOptionsStates);
      }

      if (!result.hasConflicts) {
        let self = this;
        let optionsStates = currentOptionsStates;
        let selectedOptionIds = currentSelectedOptionIds;
        let confirmRelationships = [];
        currentPendingRelationshipIds.forEach(function (relationshipId) {
          let relationship = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.find(self._vehicleOptionRelationships, function (item) {
            return item && item.id === relationshipId;
          });

          if (relationship) {
            let optionIds = [];
            optionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(optionIds, relationship.primaryOptionIds);
            optionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(optionIds, relationship.regularOptionIds);
            optionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.filter(optionIds, function (id) {
              return _helpers_VehicleExtraOptionsHelper__WEBPACK_IMPORTED_MODULE_1__[/* VehicleExtraOptionsHelper */ "a"].optionExists(id, self._vehicleOptions);
            });

            if (optionIds.length > 0) {
              confirmRelationships.push({
                id: relationshipId,
                optionIds: optionIds
              });
            }
          }
        }); //process empty RO, IO here
        //wrong, should be applied processed items which not covered by confirm rules
        //if ((!confirmRelationships || confirmRelationships.length === 0) && silentApplyAllowed && selectedOptionIds.length > 0) {
        //    if (this.onApply) {
        //        this.onApply(_.clone(selectedOptionIds));
        //    }
        //}
        //cleanup confirm relationships
        //--------------------------

        let emptyRelationships = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.filter(confirmRelationships, function (item) {
          return underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(item.optionIds, selectedOptionIds).length == 0;
        });

        if (confirmRelationships.length > emptyRelationships.length) {
          confirmRelationships = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.filter(confirmRelationships, function (item) {
            return underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(item.optionIds, selectedOptionIds).length > 0;
          });
        } //--------------------------
        //confirmRelationships.forEach(function (confirmRelationship) {
        //    VehicleExtraOptionsHelper.disableConfirmRelationshipOptions(confirmRelationship, selectedOptionIds);
        //});


        let zeroPriceOptionIds = [];

        let activeINRelationships = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.filter(this._vehicleOptionRelationships, function (relationship) {
          return relationship && underscore__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_helpers_VehicleExtraOptionsHelper__WEBPACK_IMPORTED_MODULE_1__[/* VehicleExtraOptionsHelper */ "a"].allowedRelationshipTypes, relationship.type) && relationship.type === "IN" && underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(selectedOptionIds, relationship.primaryOptionIds).length === relationship.primaryOptionIds.length;
        });

        if (activeINRelationships && activeINRelationships.length > 0) {
          activeINRelationships.forEach(function (relationship) {
            zeroPriceOptionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(zeroPriceOptionIds, relationship.regularOptionIds);
          });
        }

        optionsStates.forEach(function (optionState) {
          optionState.useZeroPrice = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.contains(zeroPriceOptionIds, optionState.id);
          optionState.selectionRequiredBy = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.without(optionState.selectionRequiredBy, 0);
          optionState.deselectionRequiredBy = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.without(optionState.deselectionRequiredBy, 0);
        });
        result.optionsStates = optionsStates;
        result.selectedOptionIds = selectedOptionIds;
        result.confirmRelationships = confirmRelationships;
      }
    }

    return result;
  }

  _getConfirmDetailsIteration(iterationOptions, selectedOptionIds, optionsStates) {
    if (iterationOptions && iterationOptions.length > 0) {
      let hasConflicts = false;
      let confirmRelationshipIds = [];
      let nextIterationOptions = [];
      let recallRestrictionRelationshipIds = [];
      let requiredOptionIdsByAction = _helpers_VehicleExtraOptionsHelper__WEBPACK_IMPORTED_MODULE_1__[/* VehicleExtraOptionsHelper */ "a"].splitOptionIdsByAction(iterationOptions);
      hasConflicts = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(requiredOptionIdsByAction.selectIds, requiredOptionIdsByAction.deselectIds).length > 0;

      if (!hasConflicts) {
        let uniqueSelectIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.difference(requiredOptionIdsByAction.selectIds, selectedOptionIds);

        let uniqueDeselectIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(requiredOptionIdsByAction.deselectIds, selectedOptionIds);

        let iterationSelectedOptionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.difference(underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(selectedOptionIds, uniqueSelectIds), uniqueDeselectIds);

        let relationshipsToConfirm = _helpers_VehicleExtraOptionsHelper__WEBPACK_IMPORTED_MODULE_1__[/* VehicleExtraOptionsHelper */ "a"].getRelationships(this._vehicleOptionRelationships, underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(uniqueSelectIds, uniqueDeselectIds));

        if (relationshipsToConfirm && relationshipsToConfirm.length > 0) {
          for (let relationshipIdx = 0; relationshipIdx < relationshipsToConfirm.length; relationshipIdx++) {
            let relationshipToConfirm = relationshipsToConfirm[relationshipIdx];
            let primaryOptionIds = relationshipToConfirm.primaryOptionIds;
            let regularOptionIds = relationshipToConfirm.regularOptionIds;

            let optionIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(primaryOptionIds, regularOptionIds);

            let selectIntersection = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(optionIds, uniqueSelectIds);

            let deselectIntersection = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(optionIds, uniqueDeselectIds);

            if (selectIntersection.length > 0 && deselectIntersection.length > 0) {} else if (selectIntersection.length > 0) {
              let isActive = relationshipToConfirm.type === "OO" || underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(primaryOptionIds, iterationSelectedOptionIds).length === primaryOptionIds.length;

              if (!isActive) {
                continue;
              }

              for (let i = 0; i < selectIntersection.length; i++) {
                let optionId = selectIntersection[0];

                let optionState = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.find(optionsStates, function (optionState) {
                  return optionState.id === optionId;
                });

                if (optionState) {
                  if (underscore__WEBPACK_IMPORTED_MODULE_0___default.a.difference(optionState.deselectionRequiredBy, [relationshipToConfirm.id, -1]).length > 0) {
                    hasConflicts = true;
                    break;
                  }
                }
              }

              if (hasConflicts) {
                break;
              }

              if (relationshipToConfirm.type == "OO") {
                if (selectIntersection.length > 1) {
                  hasConflicts = true;
                  break;
                } else {
                  let selectOptionState = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.find(optionsStates, function (optionState) {
                    return optionState.id === selectIntersection[0];
                  }); //if (selectOptionState) {
                  //    selectOptionState.deselectionRequiredBy = _.without(selectOptionState.deselectionRequiredBy, relationshipToConfirm.id);
                  //}


                  underscore__WEBPACK_IMPORTED_MODULE_0___default.a.difference(regularOptionIds, selectIntersection).forEach(function (optionId) {
                    let nextIterationOption = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.find(nextIterationOptions, function (option) {
                      return option.id === optionId;
                    });

                    if (!nextIterationOption) {
                      nextIterationOption = {
                        id: optionId,
                        selectionRequiredBy: [],
                        deselectionRequiredBy: []
                      };
                      nextIterationOptions.push(nextIterationOption);
                    }

                    nextIterationOption.deselectionRequiredBy = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(nextIterationOption.deselectionRequiredBy, [-1]);
                  });
                }
              } else if (relationshipToConfirm.type == "RA" || relationshipToConfirm.type == "IN") {
                let isMirror = relationshipToConfirm.mirrorRelationshipIds && relationshipToConfirm.mirrorRelationshipIds.length > 0;
                regularOptionIds.forEach(function (optionId) {
                  let nextIterationOption = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.find(nextIterationOptions, function (option) {
                    return option.id === optionId;
                  });

                  if (!nextIterationOption) {
                    nextIterationOption = {
                      id: optionId,
                      selectionRequiredBy: [],
                      deselectionRequiredBy: [],
                      mirrorIn: []
                    };
                    nextIterationOptions.push(nextIterationOption);
                  }

                  nextIterationOption.selectionRequiredBy = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(nextIterationOption.selectionRequiredBy, [relationshipToConfirm.id]);

                  if (isMirror) {
                    nextIterationOption.mirrorIn = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(nextIterationOption.mirrorIn, [relationshipToConfirm.id], relationshipToConfirm.mirrorRelationshipIds);
                  }
                });
              }

              confirmRelationshipIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(confirmRelationshipIds, [relationshipToConfirm.id]);
            } else if (deselectIntersection.length > 0) {
              for (let i = 0; i < deselectIntersection.length; i++) {
                let optionId = deselectIntersection[i];

                let optionState = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.find(optionsStates, function (optionState) {
                  return optionState.id === optionId;
                });

                if (optionState && underscore__WEBPACK_IMPORTED_MODULE_0___default.a.difference(optionState.selectionRequiredBy, optionState.mirrorIn).length > 0) {
                  hasConflicts = true;
                  break;
                }
              }

              if (hasConflicts) {
                break;
              }

              if (relationshipToConfirm.type == "OO") {
                if (underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(iterationSelectedOptionIds, optionIds).length == 0) {
                  recallRestrictionRelationshipIds.push(relationshipToConfirm.id);
                }

                confirmRelationshipIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(confirmRelationshipIds, [relationshipToConfirm.id]);
              } else if (relationshipToConfirm.type == "RA" || relationshipToConfirm.type == "IN") {
                let isMirror = relationshipToConfirm.mirrorRelationshipIds && relationshipToConfirm.mirrorRelationshipIds.length > 0;

                if (isMirror) {
                  underscore__WEBPACK_IMPORTED_MODULE_0___default.a.difference(optionIds, deselectIntersection).forEach(function (optionId) {
                    let nextIterationOption = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.find(nextIterationOptions, function (option) {
                      return option.id === optionId;
                    });

                    if (!nextIterationOption) {
                      nextIterationOption = {
                        id: optionId,
                        selectionRequiredBy: [],
                        deselectionRequiredBy: [],
                        mirrorIn: []
                      };
                      nextIterationOptions.push(nextIterationOption);
                    }

                    nextIterationOption.deselectionRequiredBy = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(nextIterationOption.deselectionRequiredBy, [0]);
                  });
                }

                if (underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(primaryOptionIds, iterationSelectedOptionIds).length !== primaryOptionIds.length) {
                  recallRestrictionRelationshipIds.push(relationshipToConfirm.id);
                }

                if (underscore__WEBPACK_IMPORTED_MODULE_0___default.a.intersection(primaryOptionIds, selectedOptionIds).length === primaryOptionIds.length) {
                  confirmRelationshipIds = underscore__WEBPACK_IMPORTED_MODULE_0___default.a.union(confirmRelationshipIds, [relationshipToConfirm.id]);
                }
              }
            }
          }
        }
      }

      return {
        hasConflicts: hasConflicts,
        confirmRelationshipIds: hasConflicts ? [] : confirmRelationshipIds,
        nextIterationOptions: hasConflicts ? [] : nextIterationOptions,
        recallRestrictionRelationshipIds: hasConflicts ? [] : recallRestrictionRelationshipIds
      };
    }

    return null;
  }

}

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

/***/ "DQXc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasPrivacyAccepted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setPrivacyAccepted; });
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kG9d");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);

const hasPrivacyAccepted = () => {
  const cookies = Object(nookies__WEBPACK_IMPORTED_MODULE_0__["parseCookies"])();
  return cookies.HasSeenConfirmForm === "1";
};
const setPrivacyAccepted = expiryDate => {
  Object(nookies__WEBPACK_IMPORTED_MODULE_0__["setCookie"])(null, "HasSeenConfirmForm", "1", {
    expires: expiryDate,
    path: '/'
  });
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

/***/ "Ezyo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getVehicleMonthlyPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAnnualTax; });
/* harmony import */ var enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("l7ai");

const getVehicleMonthlyPrice = (leasingDealType, price, term, rentalMonths) => {
  let result = null;

  if (price && price > 0) {
    price = leasingDealType === enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Personal ? price * 1.2 : price;
    result = price / (term * 12 - 1 + rentalMonths);
  }

  return result || 0;
};
const getAnnualTax = (p11d, taxRate, co2TaxMultiplier) => {
  if (p11d >= 0 && taxRate >= 0 && co2TaxMultiplier >= 0) {
    return p11d * (taxRate / 100) * (co2TaxMultiplier / 100);
  }

  return null;
};

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

/***/ "FK8X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiclesStorageProvider; });
/* harmony import */ var enums_VehicleStorageTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("G6YE");
/* harmony import */ var helpers_stringHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Kj82");
/* harmony import */ var helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mmV+");



class VehiclesStorageProvider {
  static getTriggerMaxSize(storageType) {
    switch (storageType) {
      case enums_VehicleStorageTypes__WEBPACK_IMPORTED_MODULE_0__[/* VehicleStorageTypes */ "a"].History:
        return 4;

      default:
        return null;
    }
  }

  static getStorageMaxSize(storageType) {
    switch (storageType) {
      case enums_VehicleStorageTypes__WEBPACK_IMPORTED_MODULE_0__[/* VehicleStorageTypes */ "a"].Garage:
        return 4;

      case enums_VehicleStorageTypes__WEBPACK_IMPORTED_MODULE_0__[/* VehicleStorageTypes */ "a"].History:
        return 20;

      default:
        return null;
    }
  }

  static getStorageName(storageType) {
    switch (storageType) {
      case enums_VehicleStorageTypes__WEBPACK_IMPORTED_MODULE_0__[/* VehicleStorageTypes */ "a"].Garage:
        return "garage";

      case enums_VehicleStorageTypes__WEBPACK_IMPORTED_MODULE_0__[/* VehicleStorageTypes */ "a"].History:
        return "history";

      default:
        return null;
    }
  }

  static getItems(storageType) {
    let items = null;
    const storageName = this.getStorageName(storageType);

    if (!Object(helpers_stringHelper__WEBPACK_IMPORTED_MODULE_1__[/* isNullOrWhiteSpace */ "c"])(storageName)) {
      items = JSON.parse(localStorage.getItem(storageName));
    }

    if (!items) {
      items = [];
    }

    const requiredSize = this.getStorageMaxSize(storageType);

    if (items.length < requiredSize) {
      const itemsToAdd = requiredSize - items.length;

      for (let i = 0; i < itemsToAdd; i++) {
        items.push(null);
      }
    }

    return items;
  }

  static getItem(storageType, itemId) {
    const items = this.getItems(storageType);
    const item = items.find(item => {
      return item && item.id === itemId;
    });
    return item;
  }

  static addItem(storageType, item, index) {
    let result = false;
    const items = this.getItems(storageType);
    const storageMaxSize = this.getStorageMaxSize(storageType);
    const indexHasValue = !Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_2__[/* isNullOrEmpty */ "w"])(index);

    if (!indexHasValue && items.length < storageMaxSize || indexHasValue && index >= 0 && index < storageMaxSize) {
      if (indexHasValue) {
        items[index] = item;
      } else {
        items.push(item);
      }

      result = this.persistItems(storageType, items);
    }

    return result;
  }

  static updateItem(storageType, item) {
    let result = false;
    const items = this.getItems(storageType);
    const existingItem = items.find(existingItem => {
      return existingItem && existingItem.id === item.id && existingItem.index === item.index;
    });

    if (existingItem) {
      items[items.indexOf(existingItem)] = item;
      result = this.persistItems(storageType, items);
    }

    return result;
  }

  static removeItem(storageType, itemId) {
    let result = false;
    const items = this.getItems(storageType);
    const item = items.find(item => {
      return item && item.id === itemId;
    });

    if (item) {
      items[items.indexOf(item)] = null;
      result = this.persistItems(storageType, items);
    }

    return result;
  }

  static clear(storageType) {
    const storageName = this.getStorageName(storageType);

    if (!Object(helpers_stringHelper__WEBPACK_IMPORTED_MODULE_1__[/* isNullOrWhiteSpace */ "c"])(storageName)) {
      localStorage.removeItem(storageName);
      return true;
    }

    return false;
  }

  static persistItems(storageType, vehicleItems) {
    const storageName = this.getStorageName(storageType);

    if (!Object(helpers_stringHelper__WEBPACK_IMPORTED_MODULE_1__[/* isNullOrWhiteSpace */ "c"])(storageName)) {
      localStorage.setItem(storageName, JSON.stringify(vehicleItems));
      return true;
    }

    return false;
  }

}

/***/ }),

/***/ "G6YE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleStorageTypes; });
let VehicleStorageTypes;

(function (VehicleStorageTypes) {
  VehicleStorageTypes[VehicleStorageTypes["None"] = 0] = "None";
  VehicleStorageTypes[VehicleStorageTypes["Garage"] = 1] = "Garage";
  VehicleStorageTypes[VehicleStorageTypes["History"] = 2] = "History";
})(VehicleStorageTypes || (VehicleStorageTypes = {}));

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "HszW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ vehicle_short_info; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/layout/sticker/index.js + 1 modules
var layout_sticker = __webpack_require__("3tIS");

// EXTERNAL MODULE: ./helpers/urlsHelper.tsx
var urlsHelper = __webpack_require__("xVrE");

// CONCATENATED MODULE: ./components/vehicle/vehicle-short-info/vehicle-short-info.tsx







const VehicleShortInfo = ({
  vehicle
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "w-100 d-flex align-items-center mb-3",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/makes/${Object(urlsHelper["b" /* getFriendlyUrlSegment */])(vehicle.make)}.svg`,
        className: "manfacturer-logo d-none d-md-inline mr-3 lazyload",
        alt: `${vehicle.make} logo`
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "d-inline-flex flex-wrap",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h1", {
          className: "w-100 h3 mb-1",
          children: [vehicle.make, " ", vehicle.model]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: "w-100 h4 mb-0",
          children: vehicle.derivative
        })]
      })]
    }), vehicle.stickers && vehicle.stickers.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "w-100 d-flex flex-wrap align-items-center",
      children: vehicle.stickers.map(sticker => /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout_sticker["a" /* default */], {
        sticker: sticker
      }, sticker.id))
    }) : null]
  });
};

/* harmony default export */ var vehicle_short_info = (VehicleShortInfo);
// CONCATENATED MODULE: ./components/vehicle/vehicle-short-info/index.jsx


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

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

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

/***/ "M22K":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"internal-quote": "vehicle-manual-details_internal-quote__2K_PA",
	"is-active": "vehicle-manual-details_is-active__1G0hQ",
	"internal-quote__info": "vehicle-manual-details_internal-quote__info__30PlG",
	"internal-quote__header": "vehicle-manual-details_internal-quote__header__Lspj3"
};


/***/ }),

/***/ "MgYN":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"internal-options": "vehicle-options_internal-options__36Ehi",
	"is-active": "vehicle-options_is-active__2XF1V",
	"internal-options__info": "vehicle-options_internal-options__info__5ZudW",
	"internal-options__header": "vehicle-options_internal-options__header__cJRBJ"
};


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

/***/ "MsP3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ vehicle_pricing_error_feedback_modal; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__("qqGZ");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/pro-regular-svg-icons"
var pro_regular_svg_icons_ = __webpack_require__("dFPx");

// CONCATENATED MODULE: ./enums/internal/PricingErrorFeedbackTypes.tsx
let PricingErrorFeedbackTypes;

(function (PricingErrorFeedbackTypes) {
  PricingErrorFeedbackTypes[PricingErrorFeedbackTypes["None"] = 0] = "None";
  PricingErrorFeedbackTypes[PricingErrorFeedbackTypes["PricingIssue"] = 1] = "PricingIssue";
  PricingErrorFeedbackTypes[PricingErrorFeedbackTypes["StockUpdate"] = 2] = "StockUpdate";
  PricingErrorFeedbackTypes[PricingErrorFeedbackTypes["Other"] = 3] = "Other";
})(PricingErrorFeedbackTypes || (PricingErrorFeedbackTypes = {}));
// CONCATENATED MODULE: ./types/internal/PricingErrorFeedbackSubtypes.tsx
let PricingErrorFeedbackSubtypes;

(function (PricingErrorFeedbackSubtypes) {
  PricingErrorFeedbackSubtypes[PricingErrorFeedbackSubtypes["None"] = 0] = "None";
  PricingErrorFeedbackSubtypes[PricingErrorFeedbackSubtypes["DoesntStack"] = 1] = "DoesntStack";
  PricingErrorFeedbackSubtypes[PricingErrorFeedbackSubtypes["TooExpensive"] = 2] = "TooExpensive";
  PricingErrorFeedbackSubtypes[PricingErrorFeedbackSubtypes["ShowingRatebookPrice"] = 3] = "ShowingRatebookPrice";
  PricingErrorFeedbackSubtypes[PricingErrorFeedbackSubtypes["SoldOut"] = 4] = "SoldOut";
  PricingErrorFeedbackSubtypes[PricingErrorFeedbackSubtypes["StockAvailable"] = 5] = "StockAvailable";
})(PricingErrorFeedbackSubtypes || (PricingErrorFeedbackSubtypes = {}));
// EXTERNAL MODULE: ./business-logic/systemService.tsx + 1 modules
var systemService = __webpack_require__("uDbZ");

// CONCATENATED MODULE: ./components/layout/vehicle-pricing-error-feedback-modal/vehicle-pricing-error-feedback-modal.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const VehiclePricingErrorFeedbackModal = (_ref) => {
  let {
    onRequestClose,
    vehicleRef,
    capId,
    vehicleName,
    vehiclePageUrl,
    settings
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["onRequestClose", "vehicleRef", "capId", "vehicleName", "vehiclePageUrl", "settings"]);

  const methods = Object(external_react_hook_form_["useForm"])();
  const {
    register,
    handleSubmit,
    errors
  } = methods;
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: type,
    1: setType
  } = Object(external_react_["useState"])(null);
  const {
    0: subtype,
    1: setSubtype
  } = Object(external_react_["useState"])(null);
  const {
    0: salespersons,
    1: setSalespersons
  } = Object(external_react_["useState"])(settings.salespersons || []); //TODO: get salespersons with settings

  Object(external_react_["useEffect"])(() => {
    if (salespersons.length === 0) {
      Object(systemService["b" /* GetSalesPeople */])().then(result => {
        setSalespersons(result.data);
      });
    }
  }, []);
  Object(external_react_["useEffect"])(() => {
    setSubtype(null);
  }, [type]);

  const onSubmit = data => {
    if (!isLoading) {
      setIsLoading(true);

      let pricingFeedback = _objectSpread({
        vehicleRef: vehicleRef,
        capId: capId,
        vehicleName: vehicleName,
        vehiclePageUrl: vehiclePageUrl
      }, data);

      Object(systemService["g" /* SendPricingFeedback */])(pricingFeedback).then(result => {
        setIsLoading(false);

        if (result.isSucceed) {
          onRequestClose();
        } else {
          alert("Failed to submit form.");
        }
      });
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Modal_default.a, _objectSpread(_objectSpread({
    onHide: onRequestClose,
    centered: true
  }, otherProps), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Header, {
      className: "d-flex flex-nowrap justify-content-center align-items-center",
      closeButton: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Title, {
        className: "text-center",
        children: "Pricing Error Feedback"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Body, {
      className: "modal-body--dark",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_hook_form_["FormContext"], _objectSpread(_objectSpread({}, methods), {}, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-8 mb-3",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "Vehicle Ref:"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-16 mb-3",
            children: vehicleRef
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-8 mb-3",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "Vehicle:"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-16 mb-3",
            children: vehicleName
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-8 mb-3",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "Salesperson:"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-16 mb-3",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
              className: `form-control ${errors.salespersonId ? "is-invalid" : ""}`,
              id: "salespersonId",
              name: "salespersonId",
              ref: register({
                required: true
              }),
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                value: "",
                children: "Please select"
              }), salespersons.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                value: item.id,
                children: item.fullName
              }, item.id))]
            }), errors.salespersonId ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "invalid-feedback d-block",
              children: "Salesperson is required"
            }) : null]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-8 mb-3",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "Type:"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-16 mb-3",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
              className: `form-control ${errors.type ? "is-invalid" : ""}`,
              id: "type",
              name: "type",
              onChange: evt => {
                setType(parseInt(evt.target.value));
              },
              ref: register({
                required: true
              }),
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                value: "",
                children: "Please select"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                value: PricingErrorFeedbackTypes.PricingIssue,
                children: "Pricing Issue"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                value: PricingErrorFeedbackTypes.StockUpdate,
                children: "Stock Update"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                value: PricingErrorFeedbackTypes.Other,
                children: "Other"
              })]
            }), errors.type ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "invalid-feedback d-block",
              children: "Type is required"
            }) : null]
          })]
        }), [PricingErrorFeedbackTypes.PricingIssue, PricingErrorFeedbackTypes.StockUpdate].includes(type) ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-8 mb-3",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "Subtype:"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-16 mb-3",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
              className: `form-control ${errors.subtype ? "is-invalid" : ""}`,
              id: "subtype",
              name: "subtype",
              onChange: evt => {
                setSubtype(parseInt(evt.target.value));
              },
              ref: register({
                required: true
              }),
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                value: "",
                children: "Please select"
              }), type === PricingErrorFeedbackTypes.PricingIssue ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  value: PricingErrorFeedbackSubtypes.DoesntStack,
                  children: "Doesn't stack"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  value: PricingErrorFeedbackSubtypes.TooExpensive,
                  children: "Too expensive"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  value: PricingErrorFeedbackSubtypes.ShowingRatebookPrice,
                  children: "Showing ratebook price"
                })]
              }) : null, type === PricingErrorFeedbackTypes.StockUpdate ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  value: PricingErrorFeedbackSubtypes.SoldOut,
                  children: "Sold Out"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  value: PricingErrorFeedbackSubtypes.StockAvailable,
                  children: "Stock Available"
                })]
              }) : null]
            }), errors.subtype ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "invalid-feedback d-block",
              children: "Subtype is required"
            }) : null]
          })]
        }) : null, [PricingErrorFeedbackTypes.Other].includes(type) ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-8 mb-3",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "Note:"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-16 mb-3",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
              className: `form-control ${errors.note ? "is-invalid" : ""}`,
              id: "note",
              name: "note",
              ref: register({
                required: true
              })
            }), errors.note ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "invalid-feedback d-block",
              children: "Note is required"
            }) : null]
          })]
        }) : null, [PricingErrorFeedbackSubtypes.DoesntStack, PricingErrorFeedbackSubtypes.TooExpensive].includes(subtype) ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-8 mb-3",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                children: "Funder:"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-16 mb-3",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                className: `form-control ${errors.funder ? "is-invalid" : ""}`,
                id: "funder",
                name: "funder",
                ref: register({
                  required: true
                })
              }), errors.funder ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: "Funder is required"
              }) : null]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-8 mb-3",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                children: "Quote Number:"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-16 mb-3",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                className: `form-control ${errors.quoteNumber ? "is-invalid" : ""}`,
                id: "quoteNumber",
                name: "quoteNumber",
                ref: register({
                  required: true
                })
              }), errors.quoteNumber ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: "Quote Number is required"
              }) : null]
            })]
          })]
        }) : null, [PricingErrorFeedbackSubtypes.SoldOut].includes(subtype) ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-8 mb-3",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "Dealer Contacted:"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-16 mb-3",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              type: "text",
              className: `form-control ${errors.dealerContacted ? "is-invalid" : ""}`,
              id: "dealerContacted",
              name: "dealerContacted",
              ref: register({
                required: true
              })
            }), errors.dealerContacted ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "invalid-feedback d-block",
              children: "Value is required"
            }) : null]
          })]
        }) : null, [PricingErrorFeedbackSubtypes.StockAvailable].includes(subtype) ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-8 mb-3",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                children: "Where:"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-16 mb-3",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                className: `form-control ${errors.where ? "is-invalid" : ""}`,
                id: "where",
                name: "where",
                ref: register({
                  required: true
                })
              }), errors.where ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: "Value is required"
              }) : null]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-8 mb-3",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                children: "How Many:"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "col-16 mb-3",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                className: `form-control ${errors.howMany ? "is-invalid" : ""}`,
                id: "howMany",
                name: "howMany",
                ref: register({
                  required: true
                })
              }), errors.howMany ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: "Value is required"
              }) : null]
            })]
          })]
        }) : null]
      }))
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Footer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        type: "button",
        className: "btn btn-primary btn-lg",
        onClick: handleSubmit(onSubmit),
        children: isLoading ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "16",
          height: "16",
          icon: pro_regular_svg_icons_["faSpinner"],
          className: "fa-spin"
        }) : "Submit"
      })
    })]
  }));
};

/* harmony default export */ var vehicle_pricing_error_feedback_modal = (VehiclePricingErrorFeedbackModal);
// CONCATENATED MODULE: ./components/layout/vehicle-pricing-error-feedback-modal/index.jsx


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

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "OLa3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ trust_card; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ./components/trustpilot/trust-card/trust-card.module.scss
var trust_card_module = __webpack_require__("Xa+E");
var trust_card_module_default = /*#__PURE__*/__webpack_require__.n(trust_card_module);

// EXTERNAL MODULE: ./enums/TrustWidgetTypes.tsx
var TrustWidgetTypes = __webpack_require__("8qXx");

// CONCATENATED MODULE: ./components/trustpilot/trust-card/trust-card.tsx







const TrustCard = ({
  type,
  rating,
  date,
  header,
  text,
  name,
  url
}) => {
  const innerText = external_react_default.a.useRef();
  const {
    0: textLimited,
    1: setTextLimited
  } = Object(external_react_["useState"])(false);
  const {
    0: textToggle,
    1: setTextToggle
  } = Object(external_react_["useState"])(false);

  const handleTextToggle = evt => {
    evt.preventDefault();
    setTextToggle(!textToggle);
  };

  Object(external_react_["useEffect"])(() => {
    let wrapperHeight = external_react_dom_default.a.findDOMNode(innerText.current).clientHeight;
    let windowWidth = window.innerWidth;
    let screenLimited = 0;

    if (windowWidth > 767) {
      screenLimited = 85;
    } else {
      screenLimited = 0;
    }

    if (wrapperHeight) {
      if (wrapperHeight > screenLimited) {
        setTextLimited(true);
      }
    }
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `${trust_card_module_default.a['trust-card']} ${type === TrustWidgetTypes["a" /* TrustWidgetTypes */].Box ? trust_card_module_default.a['trust-card--box'] : ''}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: trust_card_module_default.a['trust-card__stars'],
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
        viewBox: "0 0 251 46",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
          className: trust_card_module_default.a['tp-star'],
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: trust_card_module_default.a['tp-star__canvas'],
            fill: "#dcdce6",
            d: "M0 46.330002h46.375586V0H0z"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: trust_card_module_default.a['tp-star__shape'],
            d: "M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z",
            fill: "#FFF"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
          className: trust_card_module_default.a['tp-star'],
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: trust_card_module_default.a['tp-star__canvas'],
            fill: "#dcdce6",
            d: "M51.24816 46.330002h46.375587V0H51.248161z"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: trust_card_module_default.a['tp-star__shape'],
            d: "M74.990978 31.32991L81.150908 30 84 39l-9.660206-7.202786L64.30279 39l3.895636-11.840666L58 19.841466h12.605577L74.499595 8l3.895637 11.841466H91L74.990978 31.329909z",
            fill: "#FFF"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
          className: trust_card_module_default.a['tp-star'],
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: trust_card_module_default.a['tp-star__canvas'],
            fill: "#dcdce6",
            d: "M102.532209 46.330002h46.375586V0h-46.375586z"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: trust_card_module_default.a['tp-star__shape'],
            d: "M142.066994 19.711433L115.763298 38.80065l3.838215-11.797827-10.047304-7.291391h12.418975l3.837418-11.798624 3.837417 11.798624h12.418975zM125.81156 31.510075l7.183595-1.509576 2.862113 8.800152-10.045708-7.290576z",
            fill: "#FFF"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
          className: trust_card_module_default.a['tp-star'],
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: trust_card_module_default.a['tp-star__canvas'],
            fill: "#dcdce6",
            d: "M153.815458 46.330002h46.375586V0h-46.375586z"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: trust_card_module_default.a['tp-star__shape'],
            d: "M193.348355 19.711433L167.045457 38.80065l3.837417-11.797827-10.047303-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418974zM177.09292 31.510075l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z",
            fill: "#FFF"
          })]
        }), rating === 4.5 && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
          className: `${trust_card_module_default.a['tp-star']} ${trust_card_module_default.a['tp-star--half']}`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: trust_card_module_default.a['tp-star__canvas'],
            fill: "#dcdce6",
            d: "M205.064416 46.330002h46.375587V0h-46.375587z"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: `${trust_card_module_default.a['tp-star__canvas']} ${trust_card_module_default.a['tp-star__canvas--half']}`,
            fill: "#dcdce6",
            d: "M205.064416 46.330002h23.187793V0h-23.187793z"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: trust_card_module_default.a['tp-star__shape'],
            d: "M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z",
            fill: "#FFF"
          })]
        }), rating === 5 && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
          className: trust_card_module_default.a['tp-star'],
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: trust_card_module_default.a['tp-star__canvas'],
            fill: "#dcdce6",
            d: "M205.064416 46.330002h46.375587V0h-46.375587z"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: trust_card_module_default.a['tp-star__canvas'],
            fill: "#dcdce6",
            d: "M205.064416 46.330002h23.187793V0h-23.187793z"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: trust_card_module_default.a['tp-star__shape'],
            d: "M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z",
            fill: "#FFF"
          })]
        })]
      })
    }), date ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: trust_card_module_default.a['trust-card__date'],
      children: date
    }) : '', type === TrustWidgetTypes["a" /* TrustWidgetTypes */].Box && /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: url,
      target: "_blank",
      rel: "nofollow",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `${trust_card_module_default.a['trust-card__name']} ${trust_card_module_default.a['trust-card__name--box']} mb-3`,
        children: name
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: url,
      target: "_blank",
      rel: "nofollow",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: trust_card_module_default.a['trust-card__header'],
        children: header
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: url,
      target: "_blank",
      rel: "nofollow",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        ref: innerText,
        className: `${trust_card_module_default.a['trust-card__text']} ${textLimited && !textToggle ? trust_card_module_default.a['is-limited'] : ''}`,
        children: text
      })
    }), type === TrustWidgetTypes["a" /* TrustWidgetTypes */].Slider && /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: url,
      target: "_blank",
      rel: "nofollow",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: trust_card_module_default.a['trust-card__name'],
        children: name
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: `${trust_card_module_default.a['trust-card__more']} ${textLimited && !textToggle ? trust_card_module_default.a['is-limited'] : ''}`,
      onClick: evt => handleTextToggle(evt),
      children: "Read More"
    })]
  });
};

/* harmony default export */ var trust_card = (TrustCard);
// CONCATENATED MODULE: ./components/trustpilot/trust-card/index.jsx


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "OtTu":
/***/ (function(module, exports) {

module.exports = require("react-rangeslider");

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

/***/ "QOVr":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"trust-box": "trust-box_trust-box__YwAUG",
	"trust-box__logo": "trust-box_trust-box__logo__F50Dq",
	"trust-box__rating": "trust-box_trust-box__rating__2IYtd",
	"trust-box__reviews": "trust-box_trust-box__reviews__3HH6E",
	"trust-box__review": "trust-box_trust-box__review__1iT_e"
};


/***/ }),

/***/ "Rb8l":
/***/ (function(module, exports) {



/***/ }),

/***/ "SeHH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ marketing_consent; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/marketing-consent/marketing-consent.module.scss
var marketing_consent_module = __webpack_require__("sfgh");
var marketing_consent_module_default = /*#__PURE__*/__webpack_require__.n(marketing_consent_module);

// EXTERNAL MODULE: ./helpers/validation.tsx
var validation = __webpack_require__("gt28");

// EXTERNAL MODULE: ./business-logic/marketingCommunicationsService.tsx
var marketingCommunicationsService = __webpack_require__("2inZ");

// EXTERNAL MODULE: ./helpers/helpers.tsx
var helpers = __webpack_require__("mmV+");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/marketing-consent/marketing-consent.tsx











const MarketingConsent = ({
  isInternal,
  emailAddress,
  settings
}) => {
  //Used to share "privacyConfirmed" field with parent form and use same validation
  const formContext = Object(external_react_hook_form_["useFormContext"])(); //Set only when email address is present and marketing consent wasn't accepted earlier

  const {
    0: isRequired,
    1: setIsRequired
  } = Object(external_react_["useState"])(false); //Should trigger only when email address is changed

  Object(external_react_["useEffect"])(() => {
    //do we need timeout here?
    if (settings.onVerificationStart) {
      settings.onVerificationStart();
    }

    if (emailAddress && Object(validation["a" /* EmailAddressIsValid */])(emailAddress)) {
      marketingCommunicationsService["a" /* MarketingCommunicationsService */].HasSeenMarketingForm(emailAddress).then(result => {
        setIsRequired(!result);

        if (settings.onVerificationComplete) {
          settings.onVerificationComplete();
        }
      });
    } else {
      setIsRequired(false);

      if (settings.onVerificationComplete) {
        settings.onVerificationComplete();
      }
    }
  }, [emailAddress]); //TODO: check if phone number should be dynamic here?

  if (isRequired) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "form-group",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: marketing_consent_module_default.a['marketing'],
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          children: "Marketing Communications"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "mb-4",
          children: "We would love to keep you updated with our latest special offers, car news and exclusive benefits just for Leasing Options customers. Please let us know how you'd like us to contact you:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: `${marketing_consent_module_default.a["checkboxes"]} mb-4`,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "form-check form-check-inline",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              className: "form-check-input",
              type: "checkbox",
              name: "allowedCommunicationTypes",
              value: 1,
              id: "contactEmail",
              ref: formContext.register
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              className: "form-check-label mb-0",
              htmlFor: "contactEmail",
              children: "Email"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "form-check form-check-inline",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              className: "form-check-input",
              type: "checkbox",
              name: "allowedCommunicationTypes",
              value: 2,
              id: "contactPost",
              ref: formContext.register
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              className: "form-check-label mb-0",
              htmlFor: "contactPost",
              children: "Post"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "form-check form-check-inline",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              className: "form-check-input",
              type: "checkbox",
              name: "allowedCommunicationTypes",
              value: 3,
              id: "contactSms",
              ref: formContext.register
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              className: "form-check-label mb-0",
              htmlFor: "contactSms",
              children: "SMS"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "form-check form-check-inline",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              className: "form-check-input",
              type: "checkbox",
              name: "allowedCommunicationTypes",
              value: 4,
              id: "contactPhone",
              ref: formContext.register
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              className: "form-check-label mb-0",
              htmlFor: "contactPhone",
              children: "Telephone"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          className: "mb-4",
          children: ["Your personal information will not be shared with any third party companies. For more information, please read our Privacy Policy ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/privacy-policy",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "here"
            })
          }), " for further details. You can unsubscribe from marketing communications at any time by contacting us on ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "phonenumber_call_now",
              children: Object(helpers["g" /* GetPhoneNumber */])(isInternal)
            })
          }), " or via Email at ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "mailto:marketing@leasingoptions.co.uk",
            children: "marketing@leasingoptions.co.uk"
          })]
        })]
      })
    });
  }

  return null;
};

const mapStateToProps = state => ({
  isInternal: state.isInternal
});

/* harmony default export */ var marketing_consent = (Object(external_react_redux_["connect"])(mapStateToProps)(MarketingConsent));
// CONCATENATED MODULE: ./components/marketing-consent/index.jsx


/***/ }),

/***/ "TlRc":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"vehicle-info": "vehicle-info_vehicle-info__2Pu0b",
	"vehicle-info__header": "vehicle-info_vehicle-info__header__-5dD5",
	"vehicle-info__content": "vehicle-info_vehicle-info__content__15905"
};


/***/ }),

/***/ "TovF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ popover; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// CONCATENATED MODULE: ./components/layout/popover/popover.tsx





const PopOver = ({
  id,
  trigger,
  title,
  body
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["OverlayTrigger"], {
    trigger: "click",
    placement: "top",
    overlay: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Popover"], {
      id: `popover-positioned-${id}`,
      children: [title ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Popover"].Title, {
        children: title
      }) : "", /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Popover"].Content, {
        children: body
      })]
    }),
    children: trigger
  }, id);
};

/* harmony default export */ var popover = (PopOver);
// CONCATENATED MODULE: ./components/layout/popover/index.js


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

/***/ "Wj+e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ vehicle_extra_options_confirm_modal; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__("qqGZ");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);

// EXTERNAL MODULE: ./helpers/helpers.tsx
var helpers = __webpack_require__("mmV+");

// EXTERNAL MODULE: ./helpers/currencyHelper.tsx
var currencyHelper = __webpack_require__("oszm");

// EXTERNAL MODULE: ./components/vehicle/_libs/helpers/VehicleExtraOptionsHelper.tsx
var VehicleExtraOptionsHelper = __webpack_require__("/kJK");

// EXTERNAL MODULE: ./components/vehicle/_libs/VehicleExtraOptionsManager.tsx
var VehicleExtraOptionsManager = __webpack_require__("CTce");

// CONCATENATED MODULE: ./components/vehicle/vehicle-extra-options-relationships-manager/vehicle-extra-options-relationships-manager.tsx









const VehicleExtraOptionsRelationshipsManager = ({
  options,
  relationships,
  leasingDealType,
  state,
  settings
}) => {
  const vatText = Object(helpers["i" /* GetVATText */])(leasingDealType);
  const {
    0: confirmRelationships,
    1: setConfirmRelationships
  } = Object(external_react_["useState"])([]);

  const handleOptionClick = option => {
    let optionToProcess = VehicleExtraOptionsHelper["a" /* VehicleExtraOptionsHelper */].getOptionAction(option, state.selectedOptionIds);

    if (optionToProcess) {
      let optionsToProcess = [optionToProcess];
      let manager = new VehicleExtraOptionsManager["a" /* VehicleExtraOptionsManager */]();
      manager.init(options, relationships);
      let managerState = manager.processOptions(optionsToProcess, state.confirmRelationshipIds, state.selectedOptionIds, state.optionsStates);

      if (managerState) {
        if (settings.onStateChanged) {
          settings.onStateChanged({
            confirmRelationshipIds: managerState.confirmRelationshipIds,
            selectedOptionIds: managerState.selectedOptionIds,
            optionsStates: managerState.optionsStates
          });
        }
      }
    }
  };

  Object(external_react_["useEffect"])(() => {
    let confirmList = [];

    if (state.confirmRelationshipIds && state.confirmRelationshipIds.length > 0) {
      state.confirmRelationshipIds.forEach(function (relationshipId) {
        let confirmRelationship = VehicleExtraOptionsHelper["a" /* VehicleExtraOptionsHelper */].getConfirmRelationship(relationships, options, relationshipId, state.selectedOptionIds, state.optionsStates);

        if (confirmRelationship) {
          confirmList.push(confirmRelationship);
        }
      });
    }

    setConfirmRelationships(confirmList);
  }, [state]);

  if (confirmRelationships.length > 0) {
    const totalPrice = VehicleExtraOptionsHelper["a" /* VehicleExtraOptionsHelper */].getOptionsPrice(VehicleExtraOptionsHelper["a" /* VehicleExtraOptionsHelper */].getSelectedOptions(options, state.selectedOptionIds), state.optionsStates);
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "options-box",
        children: confirmRelationships.map(relationship => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "rule-item",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "my-3",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              className: "text-center",
              children: VehicleExtraOptionsHelper["a" /* VehicleExtraOptionsHelper */].getRelationshipDescription(relationship.type)
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: relationship.options.map(option => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: `col-16 col-md-20 d-flex flex-row flex-wrap align-items-center my-2`,
                children: [option.isPrimary ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  className: "lazyload mr-2",
                  height: "13",
                  alt: "Primary icon",
                  "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/icon-primary.png`
                }) : "", " ", option.name]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "col-8 col-md-4 d-flex justify-content-end align-items-center",
                children: [Object(currencyHelper["a" /* formatMoney */])(option.price), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: `vehicle-option__indicator ${option.isSelected ? "is-active" : ""} ${option.isDisabled ? "is-disabled" : ""}`,
                  onClick: () => handleOptionClick(option)
                })]
              })]
            }, `option-${option.id}`))
          })]
        }, `rule-${relationship.id}`))
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "options-pricing",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-16 col-md-19 d-flex flex-row flex-wrap my-2",
            children: "Total Extras Cost Per Month"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-8 col-md-5 d-flex justify-content-end align-items-center",
            children: [Object(currencyHelper["a" /* formatMoney */])(totalPrice), " ", vatText]
          })]
        })
      })]
    });
  }

  return null;
};

/* harmony default export */ var vehicle_extra_options_relationships_manager = (VehicleExtraOptionsRelationshipsManager);
// CONCATENATED MODULE: ./components/vehicle/vehicle-extra-options-relationships-manager/index.jsx

// CONCATENATED MODULE: ./components/vehicle/vehicle-extra-options-confirm-modal/vehicle-extra-options-confirm-modal.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const VehicleExtarOptionsConfirmModal = (_ref) => {
  let {
    title,
    data,
    options,
    initialState,
    settings,
    onRequestClose
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["title", "data", "options", "initialState", "settings", "onRequestClose"]);

  const {
    0: currentState,
    1: setCurrentState
  } = Object(external_react_["useState"])(initialState);

  const hadleCancelClick = () => {
    if (settings.onCancel) {
      settings.onCancel();
    }

    onRequestClose();
  };

  const handleApplyClick = () => {
    if (settings.onApply) {
      settings.onApply(currentState);
    }

    onRequestClose();
  };

  const onManagerStateChanged = managerState => {
    setCurrentState(managerState);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Modal_default.a, _objectSpread(_objectSpread({
    onHide: hadleCancelClick,
    centered: true,
    scrollable: true
  }, otherProps), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Header, {
      className: "options-title d-flex flex-nowrap justify-content-center align-items-center",
      closeButton: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Title, {
        className: "mb-0",
        children: title
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Body, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_extra_options_relationships_manager, {
        options: data.extraOptions,
        relationships: data.extraOptionsRelationships,
        leasingDealType: options.leasingDealType,
        state: currentState,
        settings: {
          onStateChanged: onManagerStateChanged
        }
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Modal_default.a.Footer, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: "btn btn-danger btn-lg d-flex justify-content-center align-items-center flex-grow-1",
        onClick: hadleCancelClick,
        children: "Cancel"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: "btn btn-primary btn-lg d-flex justify-content-center align-items-center flex-grow-1",
        onClick: handleApplyClick,
        children: "Apply"
      })]
    })]
  }));
};

/* harmony default export */ var vehicle_extra_options_confirm_modal = (VehicleExtarOptionsConfirmModal);
// CONCATENATED MODULE: ./components/vehicle/vehicle-extra-options-confirm-modal/index.jsx


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

/***/ "Xa+E":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"trust-card": "trust-card_trust-card__18Qh3",
	"trust-card--box": "trust-card_trust-card--box__3eUY9",
	"trust-card__header": "trust-card_trust-card__header__prNHK",
	"trust-card__text": "trust-card_trust-card__text__cjpk9",
	"is-limited": "trust-card_is-limited__T3m1k",
	"trust-card__stars": "trust-card_trust-card__stars__1R1LP",
	"tp-star": "trust-card_tp-star__1E1yu",
	"tp-star--half": "trust-card_tp-star--half__3uV75",
	"tp-star__canvas": "trust-card_tp-star__canvas__1J-fX",
	"tp-star__canvas--half": "trust-card_tp-star__canvas--half__aXvWt",
	"trust-card__date": "trust-card_trust-card__date__hmYi5",
	"trust-card__name": "trust-card_trust-card__name__3NwGM",
	"trust-card__name--box": "trust-card_trust-card__name--box__1Gpzh",
	"trust-card__more": "trust-card_trust-card__more__p55Zl"
};


/***/ }),

/***/ "Xpna":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProps; });
/* harmony import */ var redux_dispatches_dispatchs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rKDi");
/* harmony import */ var enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("l7ai");
/* harmony import */ var enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ezaw");
/* harmony import */ var helpers_seoHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zjYf");
/* harmony import */ var helpers_urlHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zjkP");
/* harmony import */ var helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xVrE");
/* harmony import */ var helpers_apiHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("qgyD");
/* harmony import */ var business_logic_vehicleService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("wbKs");








const getProps = async context => {
  let vehicleType = enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_2__[/* VehicleTypes */ "a"].None;
  let leasingDealType = enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_1__[/* LeasingDealTypes */ "a"].None;
  let isInternal = false;
  let url = context.req.url;

  if (url.startsWith("/internal/")) {
    isInternal = true;
    url = url.replace("/internal", "");
  }

  if (url.startsWith("/car-leasing/")) {
    Object(redux_dispatches_dispatchs__WEBPACK_IMPORTED_MODULE_0__[/* dispatchUpdateDealToggle */ "b"])(context);
    vehicleType = enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_2__[/* VehicleTypes */ "a"].Car;
    leasingDealType = context.store.getState().dealSelector;
  } else if (url.startsWith("/van-leasing/")) {
    vehicleType = enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_2__[/* VehicleTypes */ "a"].Commercial;
    leasingDealType = enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_1__[/* LeasingDealTypes */ "a"].Van;
  }

  if (vehicleType === enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_2__[/* VehicleTypes */ "a"].None || leasingDealType === enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_1__[/* LeasingDealTypes */ "a"].None) {
    //Do we have custom page to show?
    context.res.writeHead(404);
    context.res.end();
    return;
  }

  const vehicleRef = context.query.vehicleRef;
  const vehicle = (await Object(business_logic_vehicleService__WEBPACK_IMPORTED_MODULE_7__[/* GetVehicleInfo */ "S"])(vehicleRef, null, null, true, true, Object(helpers_apiHelper__WEBPACK_IMPORTED_MODULE_6__[/* getLOSSRFetchHeaders */ "a"])(context))).data;

  if (vehicle === null || vehicle.vehicleType !== vehicleType || vehicle.manufacturerUrl.toLowerCase() !== context.query.make.toLowerCase() || vehicle.shortModTextUrl.toLowerCase() !== context.query.shortModel.toLowerCase() || vehicle.modelUrl.toLowerCase() !== context.query.model.toLowerCase() || vehicle.derivativeUrl.toLowerCase() !== context.query.derivative.toLowerCase()) {
    context.res.writeHead(302, {
      //TODO: avoid chain redirect
      Location: (vehicleType === enums_VehicleTypes__WEBPACK_IMPORTED_MODULE_2__[/* VehicleTypes */ "a"].Commercial ? '/van-leasing/' : '/car-leasing/') + context.query.make.toLowerCase()
    });
    context.res.end();
    return;
  } //TODO: implement
  //    if (CurrentAppContext.IsInternalIP) {
  //        using(var client = new BibleClient())
  //            {
  //                var response = client.GetColoursForCapId(vehicle.CapId);
  //        if (response != null) {
  //            var biblecolours2 = new List<BibleColours2>();
  //            foreach(var item in response)
  //            {
  //                biblecolours2.Add(new BibleColours2()
  //                            {
  //                        colour = item.colour,
  //                        count = item.count
  //                    });
  //            }
  //            vehicle.InternalDetails.BibleColours = biblecolours2;
  //        }
  //    }
  //}


  let vehicleModel = {
    vehicleRef: vehicle.vehicleRef,
    capId: vehicle.capId,
    vehicleType: vehicle.vehicleType,
    make: vehicle.manufacturer.trim(),
    shortModel: vehicle.shortModText.trim(),
    model: vehicle.model.trim(),
    derivative: vehicle.derivative.trim(),
    imageUrl: vehicle.imageUrl,
    imageUrls: vehicle.imageUrls,
    interiorUrl: vehicle.interiorUrl,
    exteriorUrl: vehicle.exteriorUrl,
    fuelType: vehicle.fuelType,
    mpg: vehicle.mpg,
    speed60mph: vehicle.speed60mph,
    insuranceGroup: vehicle.insuranceGroup,
    co2: vehicle.cO2,
    range: vehicle.range,
    seats: vehicle.seats,
    doors: vehicle.doors,
    transmission: vehicle.transmission,
    features: vehicle.features,
    stickers: vehicle.stickers,
    minPrice: vehicle.minPrice,
    maxPrice: vehicle.maxPrice,
    optionsSelectAllowed: vehicle.optionsIsSelectable,
    availableMileages: vehicle.availableMileages,
    hasMaintenance: vehicle.hasMaintenance
  };

  if (isInternal) {
    vehicleModel.extraDetails = vehicle.internalDetails;
  }

  let metaData = {
    title: Object(helpers_seoHelper__WEBPACK_IMPORTED_MODULE_3__[/* VehiclePageTitle */ "m"])(vehicleModel.vehicleType, vehicleModel.make, vehicleModel.model, vehicleModel.derivative),
    description: Object(helpers_seoHelper__WEBPACK_IMPORTED_MODULE_3__[/* VehicleMetaDescription */ "l"])(vehicleModel.vehicleType, vehicleModel.make, vehicleModel.shortModel, vehicleModel.derivative),
    imageUrl: vehicleModel.imageUrls && vehicleModel.imageUrls.length > 0 ? vehicleModel.imageUrls[0] : null,
    canonicalUrl: Object(helpers_urlHelper__WEBPACK_IMPORTED_MODULE_4__[/* GetCanonicalUrl */ "j"])(Object(helpers_urlsHelper__WEBPACK_IMPORTED_MODULE_5__[/* getBaseUrl */ "a"])(url))
  };
  return {
    props: {
      vehicle: vehicleModel,
      metaData: metaData,
      orderModalOpenned: context.query.showordermodal === "1"
    }
  };
};

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

/***/ "YjgO":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/pro-light-svg-icons");

/***/ }),

/***/ "Yp3H":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"vehicle-socials": "vehicle-social_vehicle-socials__ioGGt"
};


/***/ }),

/***/ "ZrQC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOptionsHelper; });
/* unused harmony export CustomOptionsStorageHelper */
/* harmony import */ var _stringHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Kj82");
/* harmony import */ var _urlsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xVrE");
/* harmony import */ var environment_siteSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PG61");
/* harmony import */ var business_logic_vehicleService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wbKs");




class CustomOptionsHelper {
  static getVehicleCustomOptions(data, callback) {
    let values = {};
    let isDefault = false;
    const parts = data.url.split('?');
    const queryStringParams = parts[1] ? Object(_urlsHelper__WEBPACK_IMPORTED_MODULE_1__[/* getQueryParams */ "c"])(parts[1].split('&')) : null;

    if (queryStringParams) {
      let parsedInt = NaN;
      parsedInt = parseInt(queryStringParams["term"]);

      if (!isNaN(parsedInt)) {
        values["term"] = parsedInt;
      }

      parsedInt = parseInt(queryStringParams["initialrentals"]);

      if (!isNaN(parsedInt)) {
        values["initialRentalMonths"] = parsedInt;
      }

      parsedInt = parseInt(queryStringParams["mileage"]);

      if (!isNaN(parsedInt)) {
        values["mileage"] = parsedInt;
      }

      isDefault = !Object(_stringHelper__WEBPACK_IMPORTED_MODULE_0__[/* isNullOrWhiteSpace */ "c"])(queryStringParams["isdefault"]) && queryStringParams["isdefault"] === "1";
    }

    if (data.pricingType && data.pricingType === 2) {
      //isAtcPricing
      values["maintenance"] = true;
    } else if (!data.maintenanceAllowed) {
      values["maintenance"] = false;
    }

    let customOptions = CustomOptionsStorageHelper.getOrAddVehicleCustomOptions(data.vehicleRef, data.leasingDealType, isDefault, values);

    if (customOptions.useCheapestTerm) {
      let pricingData = {
        pricingType: data.pricingType || undefined,
        postcode: data.postcode || undefined
      };
      Object(business_logic_vehicleService__WEBPACK_IMPORTED_MODULE_3__[/* GetVehicleCheapestPriceTerm */ "O"])(customOptions.vehicleRef, customOptions.leasingDealType, customOptions.maintenance, customOptions.mileage, customOptions.initialRentalMonths, pricingData).then(result => {
        let cheapestTerm = null;

        if (result.isSucceed && result.data) {
          cheapestTerm = result.data;
        }

        customOptions.useCheapestTerm = false;

        if (cheapestTerm && cheapestTerm > 0) {
          customOptions.term = cheapestTerm;
        }

        CustomOptionsStorageHelper.addOrUpdateVehicleCustomOptions(customOptions);
        callback(customOptions);
      });
    } else {
      callback(customOptions);
    }
  }

  static storeVehicleCustomOptions(customOptions) {
    if (customOptions) {
      customOptions.useCheapestTerm = false;
      CustomOptionsStorageHelper.addOrUpdateVehicleCustomOptions(customOptions);
    }
  }

}
class CustomOptionsStorageHelper {
  static getOrAddVehicleCustomOptions(vehicleRef, leasingDealType, setToDefault, values) {
    let customOptions = this.getVehicleCustomOptions(vehicleRef, leasingDealType);

    if (!customOptions || setToDefault) {
      customOptions = {
        vehicleRef: vehicleRef,
        leasingDealType: leasingDealType,
        term: environment_siteSettings__WEBPACK_IMPORTED_MODULE_2__[/* SiteSettings */ "a"].DefaultTerm,
        mileage: environment_siteSettings__WEBPACK_IMPORTED_MODULE_2__[/* SiteSettings */ "a"].GetDealTypeDefaultMileage(leasingDealType),
        maintenance: environment_siteSettings__WEBPACK_IMPORTED_MODULE_2__[/* SiteSettings */ "a"].DefaultMaintenance,
        initialRentalMonths: environment_siteSettings__WEBPACK_IMPORTED_MODULE_2__[/* SiteSettings */ "a"].DefaultInitialRentals,
        options: [],
        salesCode: 0,
        ageCategory: null,
        useCheapestTerm: true
      };
    }

    Object.assign(customOptions, values || {});
    this.addOrUpdateVehicleCustomOptions(customOptions);
    return customOptions;
  }

  static addOrUpdateVehicleCustomOptions(customOptions) {
    if (customOptions !== null) {
      const key = this.getOptionsItemKey(customOptions.vehicleRef, customOptions.leasingDealType);
      localStorage.setItem(key, JSON.stringify(customOptions));
    }
  }

  static getVehicleCustomOptions(vehicleRef, leasingDealType) {
    let customOptions = null;

    if (vehicleRef && leasingDealType) {
      const key = this.getOptionsItemKey(vehicleRef, leasingDealType);
      const serializedItem = localStorage.getItem(key);
      customOptions = JSON.parse(serializedItem);
    }

    return customOptions;
  }

  static getOptionsItemKey(vehicleRef, leasingDealType) {
    return ("options_" + vehicleRef + "_" + leasingDealType).toLowerCase();
  }

}

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

/***/ "bBzr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ vehicle_rental_months_slider; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-rangeslider"
var external_react_rangeslider_ = __webpack_require__("OtTu");
var external_react_rangeslider_default = /*#__PURE__*/__webpack_require__.n(external_react_rangeslider_);

// CONCATENATED MODULE: ./components/vehicle/vehicle-rental-months-slider/vehicle-rental-months-slider.tsx




const VehicleRentalMonthsSlider = ({
  value,
  onValueChanged,
  isDisabled
}) => {
  const values = [1, 3, 6, 9, 12];
  const {
    0: sliderValue,
    1: setSliderValue
  } = Object(external_react_["useState"])(values.indexOf(value) !== -1 ? values.indexOf(value) : 0);
  Object(external_react_["useEffect"])(() => {
    setSliderValue(values.indexOf(value) !== -1 ? values.indexOf(value) : 0);
  }, [value]);

  const handleOnChange = value => {
    if (!isDisabled) {
      setSliderValue(value);
    }
  };

  const handleOnChangeComplete = () => {
    onValueChanged(values[sliderValue]);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_rangeslider_default.a, {
    min: 0,
    max: values.length - 1,
    step: 1,
    value: sliderValue,
    tooltip: false,
    className: `${isDisabled ? "rangeslider--locked" : ""}`,
    onChange: handleOnChange,
    onChangeComplete: handleOnChangeComplete
  });
};

/* harmony default export */ var vehicle_rental_months_slider = (VehicleRentalMonthsSlider);
// CONCATENATED MODULE: ./components/vehicle/vehicle-rental-months-slider/index.jsx


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

/***/ "cQmL":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cap-warning": "vehicle-options-tab-content_cap-warning__9HvVR",
	"option-search": "vehicle-options-tab-content_option-search__3g26o"
};


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

/***/ "dM2G":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"drop-down": "drop-down_drop-down__2EUfj",
	"active": "drop-down_active__1UHN0",
	"btn": "drop-down_btn__3cfvq",
	"btn-label": "drop-down_btn-label__3dskM",
	"drop-down__menu": "drop-down_drop-down__menu__2d5t3",
	"is-active": "drop-down_is-active__1jT7T"
};


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

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

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

/***/ "jEoz":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"privacy-agreement": "privacy-policy-consent_privacy-agreement__3QFUT",
	"invalid-feedback": "privacy-policy-consent_invalid-feedback__2FPEH"
};


/***/ }),

/***/ "jmJx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarageStorageHelper; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("CNqx");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var enums_VehicleStorageTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("G6YE");
/* harmony import */ var helpers_vehiclesStorageProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FK8X");
/* harmony import */ var helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mmV+");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class GarageStorageHelper {
  static addItem(index, item) {
    if (item && index >= 0 && index < this.storageMaxSize) {
      const storageItem = {
        id: Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_3__[/* getGUID */ "r"])(),
        index: index,
        vehicle: item
      };

      if (helpers_vehiclesStorageProvider__WEBPACK_IMPORTED_MODULE_2__[/* VehiclesStorageProvider */ "a"].addItem(this.storageType, storageItem, index)) {
        return storageItem;
      }
    }

    return null;
  }

  static updateItem(itemId, item, alwaysUpdate) {
    if (item) {
      const storageItem = helpers_vehiclesStorageProvider__WEBPACK_IMPORTED_MODULE_2__[/* VehiclesStorageProvider */ "a"].getItem(this.storageType, itemId);

      if (storageItem && (alwaysUpdate || !underscore__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(storageItem.vehicle, item))) {
        storageItem.vehicle = item;

        if (helpers_vehiclesStorageProvider__WEBPACK_IMPORTED_MODULE_2__[/* VehiclesStorageProvider */ "a"].updateItem(this.storageType, storageItem)) {
          return storageItem;
        }
      }
    }

    return null;
  }

  static addOrUpdateItem(item) {
    if (item) {
      const storageItems = this.getItems(false);
      const storageItem = storageItems.find(storageItem => {
        return storageItem && storageItem.vehicle && storageItem.vehicle.vehicleRef === item.vehicleRef;
      });

      if (storageItem) {
        return this.updateItem(storageItem.id, item, true);
      } else {
        const index = storageItems.indexOf(null);

        if (!Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_3__[/* isNullOrEmpty */ "w"])(index) && index >= 0 && index < this.storageMaxSize) {
          return this.addItem(index, item);
        }
      }
    }

    return null;
  }

  static cloneItem(itemId) {
    const storageItems = this.getItems(false);
    const itemToClone = storageItems.find(item => {
      return item && item.id === itemId;
    });

    if (itemToClone) {
      const index = storageItems.indexOf(null);

      if (!Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_3__[/* isNullOrEmpty */ "w"])(index) && index >= 0 && index < this.storageMaxSize) {
        const clonnedItem = {
          id: Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_3__[/* getGUID */ "r"])(),
          index: index,
          vehicle: itemToClone.vehicle //copy not made as data comes from json

        };

        if (helpers_vehiclesStorageProvider__WEBPACK_IMPORTED_MODULE_2__[/* VehiclesStorageProvider */ "a"].addItem(this.storageType, clonnedItem, index)) {
          return clonnedItem;
        }
      }
    }

    return null;
  }

  static removeItem(itemId) {
    return helpers_vehiclesStorageProvider__WEBPACK_IMPORTED_MODULE_2__[/* VehiclesStorageProvider */ "a"].removeItem(this.storageType, itemId);
  }

  static getItems(ignoreEmptyItems) {
    let result = helpers_vehiclesStorageProvider__WEBPACK_IMPORTED_MODULE_2__[/* VehiclesStorageProvider */ "a"].getItems(this.storageType);

    if (result && result.length > 0 && ignoreEmptyItems) {
      result = result.filter(item => {
        return item;
      });
    }

    return result;
  }

  static clear() {
    helpers_vehiclesStorageProvider__WEBPACK_IMPORTED_MODULE_2__[/* VehiclesStorageProvider */ "a"].clear(this.storageType);
  }

  static countItems() {
    return this.getItems(true).length;
  }

  static isFull() {
    return !(this.countItems() < this.storageMaxSize);
  }

}

_defineProperty(GarageStorageHelper, "storageType", enums_VehicleStorageTypes__WEBPACK_IMPORTED_MODULE_1__[/* VehicleStorageTypes */ "a"].Garage);

_defineProperty(GarageStorageHelper, "storageMaxSize", helpers_vehiclesStorageProvider__WEBPACK_IMPORTED_MODULE_2__[/* VehiclesStorageProvider */ "a"].getStorageMaxSize(enums_VehicleStorageTypes__WEBPACK_IMPORTED_MODULE_1__[/* VehicleStorageTypes */ "a"].Garage) || 0);

/***/ }),

/***/ "kG9d":
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "kjHD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ vehicle_slideup; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/vehicle/vehicle-slideup/vehicle-slideup.module.scss
var vehicle_slideup_module = __webpack_require__("9d+h");
var vehicle_slideup_module_default = /*#__PURE__*/__webpack_require__.n(vehicle_slideup_module);

// EXTERNAL MODULE: ./helpers/helpers.tsx
var helpers = __webpack_require__("mmV+");

// EXTERNAL MODULE: ./enums/LeasingDealTypes.tsx
var LeasingDealTypes = __webpack_require__("l7ai");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/vehicle/vehicle-slideup/vehicle-slideup.tsx










const VehicleSlideup = ({
  isInternal,
  monthlyPrice,
  leasingDealType,
  settings
}) => {
  const handleButtonClick = type => {
    if (settings.onProceed && settings.proceedAllowed) {
      settings.onProceed(type);
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${vehicle_slideup_module_default.a['vehicle-slideup']} container-fluid py-2`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-24 col-md-12 d-flex justify-content-start align-items-center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: `d-inline text-white mr-3 ${vehicle_slideup_module_default.a['vehicle-price']}`,
          children: monthlyPrice
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          className: "d-inline text-white mb-0",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            children: [LeasingDealTypes["a" /* LeasingDealTypes */][leasingDealType], " price per month ", Object(helpers["i" /* GetVATText */])(leasingDealType)]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: `tel:${Object(helpers["g" /* GetPhoneNumber */])(isInternal)}`,
            children: "Call us"
          }), " or ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: "/request-callback",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: "Request a call back"
            })
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-24 col-md-12 d-flex justify-content-between justify-content-md-end align-items-center mt-3 mt-md-0",
        children: [!settings.isSimpleMode && settings.proceedAllowed ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: `${vehicle_slideup_module_default.a['btn']} btn btn-outline-light btn-lg btn-fluid flex-grow-1 flex-md-grow-0 mr-3`,
            onClick: () => handleButtonClick("enquiry"),
            children: "Enquire Now"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
            className: `${vehicle_slideup_module_default.a['btn']} btn btn-primary btn-lg btn-fluid flex-grow-1 flex-md-grow-0`,
            onClick: () => handleButtonClick("order"),
            children: ["Order this ", leasingDealType === LeasingDealTypes["a" /* LeasingDealTypes */].Van ? "van" : "car"]
          })]
        }) : null, settings.isSimpleMode && settings.proceedAllowed ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: `${vehicle_slideup_module_default.a['btn']} btn btn-primary btn-lg btn-fluid flex-grow-1 flex-md-grow-0 mr-3`,
            onClick: () => handleButtonClick("order"),
            children: "Continue to Order"
          })
        }) : null]
      })]
    })
  });
};

const mapStateToProps = state => ({
  isInternal: state.isInternal
});

/* harmony default export */ var vehicle_slideup = (Object(external_react_redux_["connect"])(mapStateToProps)(VehicleSlideup));
// CONCATENATED MODULE: ./components/vehicle/vehicle-slideup/index.jsx


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

/***/ "n9Ri":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ vehicle_pricing_matrix_modal; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__("qqGZ");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);

// EXTERNAL MODULE: ./business-logic/vehicleService.tsx + 2 modules
var vehicleService = __webpack_require__("wbKs");

// CONCATENATED MODULE: ./components/layout/vehicle-pricing-matrix-modal/vehicle-pricing-matrix-modal.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const VehiclePricingMatrixModal = (_ref) => {
  let {
    onRequestClose,
    pricingType,
    userPostcode,
    vehicleRef,
    vehicleName
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["onRequestClose", "pricingType", "userPostcode", "vehicleRef", "vehicleName"]);

  const {
    0: pricingMatrix,
    1: setPricingMatrix
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    Object(vehicleService["w" /* GetPricingMatrix */])(vehicleRef, pricingType, userPostcode).then(result => {
      if (result.isSucceed) {
        setPricingMatrix(result.data);
      } else {
        alert("Failed to get data.");
      }
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Modal_default.a, _objectSpread(_objectSpread({
    onHide: onRequestClose,
    centered: true
  }, otherProps), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Header, {
      className: "d-flex flex-nowrap justify-content-center align-items-center",
      closeButton: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Title, {
        className: "text-center",
        children: "Pricing Matrix"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Modal_default.a.Body, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["Vehicle Ref:", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
          children: vehicleRef
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["Vehicle:", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
          children: vehicleName
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("sup", {
        children: "8k mileage prices / no maintanence"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("table", {
        className: "w-100",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("thead", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
              children: "Type"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
              children: "Term"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
              children: "Price"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
              children: "Source"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
          children: pricingMatrix.map((row, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
              children: row.dealType
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
              children: row.term
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
              children: row.price
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
              children: row.source
            })]
          }, index))
        })]
      })]
    })]
  }));
};

/* harmony default export */ var vehicle_pricing_matrix_modal = (VehiclePricingMatrixModal);
// CONCATENATED MODULE: ./components/layout/vehicle-pricing-matrix-modal/index.jsx


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

/***/ "qPfW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ drop_down; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/layout/drop-down/drop-down.module.scss
var drop_down_module = __webpack_require__("dM2G");
var drop_down_module_default = /*#__PURE__*/__webpack_require__.n(drop_down_module);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// CONCATENATED MODULE: ./components/layout/drop-down/drop-down.tsx







//TODO: better implementation required. onChange event needed
const DropDown = ({
  wrapperClass,
  indicator = false,
  active = "All",
  buttonClass,
  buttonText,
  children
}) => {
  const {
    0: dropDownToggle,
    1: setDropDownToggle
  } = Object(external_react_["useState"])(false);
  const {
    0: dropDownIndicator,
    1: setDropDownIndicator
  } = Object(external_react_["useState"])(active);

  const handleDropDownToggle = () => {
    setDropDownToggle(!dropDownToggle);
  };

  const handleDropDownClick = evt => {
    setDropDownToggle(false);
    setDropDownIndicator(evt.target.innerText);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `${drop_down_module_default.a['drop-down']} ${wrapperClass} ${dropDownToggle ? drop_down_module_default.a['active'] : ""}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
      type: "button",
      className: `btn ${drop_down_module_default.a['btn']} ${buttonClass}`,
      onClick: evt => handleDropDownToggle(),
      children: [buttonText ? buttonText : "Read More", " ", indicator ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("mark", {
        className: "mark-text",
        onClick: evt => handleDropDownClick(evt),
        children: dropDownIndicator
      }) : null, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        width: "14",
        height: "14",
        icon: free_solid_svg_icons_["faChevronDown"]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: drop_down_module_default.a['drop-down__menu'],
      onClick: evt => handleDropDownClick(evt),
      children: children
    })]
  });
};

/* harmony default export */ var drop_down = (DropDown);
// CONCATENATED MODULE: ./components/layout/drop-down/index.jsx


/***/ }),

/***/ "qgyD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLOSSRFetchHeaders; });
//TODO: Check what ip value is returned for server-side requests. Check rest of the values as well
const getLOSSRFetchHeaders = context => {
  const fetchHeaders = {
    headers: {
      // @ts-ignore
      'LO-ORIGINAL-IP': context.req.client.remoteAddress,
      'LO-ORIGINAL-USERAGENT': context.req.headers["user-agent"],
      'LO-ORIGINAL-HOSTNAME': context.req.headers["host"]
    }
  };
  return fetchHeaders;
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

/***/ "rKDi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dispatchUpdateDealToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dispatchUpdateUserPostcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dispatchSearchType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dispatchUpdateVehicleFilterSearch; });
/* harmony import */ var enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("l7ai");
/* harmony import */ var helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mmV+");


const dispatchUpdateDealToggle = context => {
  if (context.query.leasingdeal === "business" || context.req.url.replace("/internal", "").startsWith("/business-car-leasing")) {
    context.store.dispatch({
      type: 'UPDATE_DEAL_TYPE',
      deal: enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Business
    });
  } else {
    context.store.dispatch({
      type: 'UPDATE_DEAL_TYPE',
      deal: enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_0__[/* LeasingDealTypes */ "a"].Personal
    });
  }
};
const dispatchUpdateUserPostcode = context => {
  if (context.query.postcode) {
    context.store.dispatch({
      type: 'UPDATE_POSTCODE',
      userPostcode: Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_1__[/* formatAtcPostcode */ "n"])(context.query.postcode)
    });
  } else {
    context.store.dispatch({
      type: 'UPDATE_POSTCODE',
      userPostcode: ''
    });
  }
};
const dispatchSearchType = (context, id, name) => {
  context.store.dispatch({
    type: 'UPDATE_FILTERS',
    filterName: 'searchType',
    filterValue: {
      id: id,
      name: name
    }
  });
};
const dispatchUpdateVehicleFilterSearch = async (context, vehicleFilter) => {
  await context.store.dispatch({
    type: 'UPDATE_DEAL_TYPE',
    deal: vehicleFilter.leasingDealType
  });
  await context.store.dispatch({
    type: 'UPDATE_ALL_FILTERS',
    payload: vehicleFilter
  });
};

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

/***/ "sfgh":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"marketing": "marketing-consent_marketing__2i0I5",
	"highlight": "marketing-consent_highlight__16gCK",
	"checkboxes": "marketing-consent_checkboxes__2fW02"
};


/***/ }),

/***/ "tpS9":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"internal-details": "vehicle-details_internal-details__hHo5R",
	"is-active": "vehicle-details_is-active__5wTsN",
	"internal-details__info": "vehicle-details_internal-details__info__O1a3g",
	"internal-details__header": "vehicle-details_internal-details__header__1Ogff"
};


/***/ }),

/***/ "tq2Q":
/***/ (function(module, exports) {

module.exports = require("react-masonry-css");

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

/***/ "udbO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ vehicle_vehicle; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: ./components/vehicle/vehicle-short-info/index.jsx + 1 modules
var vehicle_short_info = __webpack_require__("HszW");

// EXTERNAL MODULE: ./components/vehicle/vehicle-info/vehicle-info.module.scss
var vehicle_info_module = __webpack_require__("TlRc");
var vehicle_info_module_default = /*#__PURE__*/__webpack_require__.n(vehicle_info_module);

// EXTERNAL MODULE: ./components/layout/popover/index.js + 1 modules
var popover = __webpack_require__("TovF");

// EXTERNAL MODULE: ./components/layout/drop-down/index.jsx + 1 modules
var drop_down = __webpack_require__("qPfW");

// EXTERNAL MODULE: ./components/vehicle/vehicle-rental-months-slider/index.jsx + 1 modules
var vehicle_rental_months_slider = __webpack_require__("bBzr");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/pro-regular-svg-icons"
var pro_regular_svg_icons_ = __webpack_require__("dFPx");

// EXTERNAL MODULE: ./helpers/helpers.tsx
var helpers = __webpack_require__("mmV+");

// EXTERNAL MODULE: ./enums/LeasingDealTypes.tsx
var LeasingDealTypes = __webpack_require__("l7ai");

// EXTERNAL MODULE: ./helpers/currencyHelper.tsx
var currencyHelper = __webpack_require__("oszm");

// CONCATENATED MODULE: ./components/vehicle/vehicle-custom-options/vehicle-custom-options.tsx













//TODO: merge vehicle-custom-options and vehicle-custom-options-special-deal components
const VehicleCustomOptions = ({
  options,
  prices,
  settings
}) => {
  const blackFridayTheme = "false";
  let terms = [2, 3, 4];
  let top3MileageItems = [];
  let isCustomMileage = false;

  if (settings.availableMileages && settings.availableMileages.length > 0) {
    if (settings.availableMileages.length <= 3) {
      Array.prototype.push.apply(top3MileageItems, settings.availableMileages);
    } else {
      if (!settings.isAtc) {
        Array.prototype.push.apply(top3MileageItems, options.leasingDealType === LeasingDealTypes["a" /* LeasingDealTypes */].Van ? [8000, 10000, 12000] : [5000, 8000, 10000]);
      } else {
        Array.prototype.push.apply(top3MileageItems, [5000, 10000, 15000]);
      }
    }

    isCustomMileage = !top3MileageItems.includes(options.mileage);
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "w-100 py-3",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
        className: "mr-1",
        children: ["Contract Length - ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          children: [options.term, " Years"]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(popover["a" /* default */], {
        id: "contract-length",
        trigger: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "16",
          height: "16",
          icon: pro_regular_svg_icons_["faInfoCircle"]
        }),
        body: "This is the term you will lease your vehicle for."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `btn-group chck-buttons ${blackFridayTheme === 'true' ? 'chck-buttons--bf' : ''} chck-buttons--x3`,
        role: "group",
        "aria-label": "Contract Length",
        children: terms.map(term => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
          onClick: () => settings.setOptions("term", term),
          className: `btn btn-option btn-fluid btn-lg ${options.term === term ? "is-active" : ""}`,
          children: [term, " Years"]
        }, `term-${term}`))
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "w-100 py-3",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
        className: "mr-1",
        children: ["Annual Mileage - ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          children: [Object(currencyHelper["b" /* formatNumber */])(options.mileage), " Miles"]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(popover["a" /* default */], {
        id: "annual-mileage",
        trigger: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "16",
          height: "16",
          icon: pro_regular_svg_icons_["faInfoCircle"]
        }),
        body: "Each mile travelled in excess of the annual mileage allowance will attract a cost in pence per mile. This figure will be confirmed at order stage and on your finance agreement."
      }), top3MileageItems && top3MileageItems.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `btn-group chck-buttons ${blackFridayTheme === 'true' ? 'chck-buttons--bf' : ''}`,
        role: "group",
        "aria-label": "Annual Mileage",
        children: [top3MileageItems.map(mileage => /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => settings.setOptions("mileage", mileage),
          className: `btn btn-option btn-fluid btn-lg ${options.mileage === mileage && !isCustomMileage ? "is-active" : ""}`,
          children: Object(currencyHelper["b" /* formatNumber */])(mileage)
        }, `top-mileage-${mileage}`)), settings.availableMileages.length > 3 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(drop_down["a" /* default */], {
          wrapperClass: "btn--dd",
          buttonClass: `btn btn-outline-primary btn-fluid btn-lg ${isCustomMileage ? " is-active" : ""}`,
          buttonText: isCustomMileage ? Object(currencyHelper["b" /* formatNumber */])(options.mileage) : "More",
          children: settings.availableMileages.map(mileage => /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            onClick: () => settings.setOptions("mileage", mileage),
            type: "button",
            className: `${options.mileage === mileage ? "is-active" : ""}`,
            children: Object(currencyHelper["b" /* formatNumber */])(mileage)
          }, `mileage-${mileage}`))
        }) : null]
      }) : null]
    }), settings.maintenanceEnabled || settings.isAtc ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "w-100 py-3",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
        className: "mr-1",
        children: ["Maintenance - ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: options.maintenance ? prices.monthlyMaintenance + " Per month" : "No"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(popover["a" /* default */], {
        id: "maintenance",
        trigger: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "16",
          height: "16",
          icon: pro_regular_svg_icons_["faInfoCircle"]
        }),
        body: "Select if you would like to order a maintenance package with your vehicle. If you do not select you will be responsible for all maintenance costs."
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `btn-group chck-buttons ${blackFridayTheme === 'true' ? 'chck-buttons--bf' : ''} chck-buttons--x3`,
        role: "group",
        "aria-label": "Maintenance",
        children: [!settings.isAtc ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => settings.setOptions("maintenance", false),
          className: `btn btn-option btn-fluid btn-lg ${options.maintenance ? "" : "is-active"}`,
          children: "No"
        }) : null, settings.isAtc || settings.hasMaintenance ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => settings.setOptions("maintenance", true),
          className: `btn btn-option btn-fluid btn-lg ${options.maintenance ? "is-active" : ""}`,
          children: "Yes"
        }) : null]
      })]
    }) : null, /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "w-100 py-3",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
        className: "mr-1",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          children: ["x", options.initialRentalMonths]
        }), " Initial Payment - ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          children: [prices.initialRental, " ", Object(helpers["i" /* GetVATText */])(options.leasingDealType)]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(popover["a" /* default */], {
        id: "cinitial-payment",
        trigger: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "16",
          height: "16",
          icon: pro_regular_svg_icons_["faInfoCircle"]
        }),
        body: "Your first payment is calculated in multiples of your monthly rental. Choosing a larger initial rental makes your monthly payments smaller. This is part of your contract and is not a deposit. It is non-refundable and is usually taken within 14 days of your vehicle being delivered."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_rental_months_slider["a" /* default */], {
        value: options.initialRentalMonths,
        onValueChanged: value => settings.setOptions("initialRentalMonths", value)
      })]
    })]
  });
};

/* harmony default export */ var vehicle_custom_options = (VehicleCustomOptions);
// CONCATENATED MODULE: ./components/vehicle/vehicle-custom-options/index.jsx

// CONCATENATED MODULE: ./components/vehicle/vehicle-info/vehicle-info.tsx







const VehicleInfo = ({
  options,
  prices,
  settings,
  vehicle
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: vehicle_info_module_default.a['vehicle-info'],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${vehicle_info_module_default.a['vehicle-info__header']} d-none d-md-block`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_short_info["a" /* default */], {
        vehicle: vehicle
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: vehicle_info_module_default.a['vehicle-info__content'],
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_custom_options, {
        options: options,
        prices: prices,
        settings: settings
      })
    })]
  });
};

/* harmony default export */ var vehicle_info = (VehicleInfo);
// CONCATENATED MODULE: ./components/vehicle/vehicle-info/index.jsx

// EXTERNAL MODULE: ./components/vehicle/vehicle-image-gallery-tabs/index.jsx + 5 modules
var vehicle_image_gallery_tabs = __webpack_require__("+TqS");

// EXTERNAL MODULE: ./components/vehicle/vehicle-key-info/index.jsx + 1 modules
var vehicle_key_info = __webpack_require__("BEL6");

// EXTERNAL MODULE: ./components/vehicle/vehicle-features/index.jsx + 1 modules
var vehicle_features = __webpack_require__("9W3L");

// CONCATENATED MODULE: ./components/vehicle/vehicle-summary/vehicle-summary.tsx








//Warning: Fix layout. Table needs to be replaces with div
const VehicleSummary = ({
  options,
  prices,
  settings
}) => {
  const vatText = Object(helpers["i" /* GetVATText */])(options.leasingDealType);
  const hasExtraOptions = prices.extraOptions && prices.extraOptions.length > 0;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: "h1 mb-5",
      children: "Vehicle Summary"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "w-100 box bg-white p-0",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "table table-bordered table--summary border-0 m-0",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row no-gutters",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-24 col-md-12 px-0",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("table", {
              className: "w-100",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tbody", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                  className: "d-flex flex-wrap",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                    className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-0",
                    children: ["Contract Type: ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                      children: [LeasingDealTypes["a" /* LeasingDealTypes */][options.leasingDealType], " Lease"]
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                  className: "d-flex flex-wrap",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                    className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-0",
                    children: ["Contract Length: ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                      children: [options.term, " Years"]
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                  className: "d-flex flex-wrap",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                    className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-0",
                    children: ["Annual Mileage: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      children: Object(currencyHelper["b" /* formatNumber */])(options.mileage)
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                  className: "d-flex flex-wrap",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                    className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-0",
                    children: ["Initial Rentals: ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                      children: [options.initialRentalMonths, " Rental", options.initialRentalMonths !== 1 ? "s" : ""]
                    })]
                  })
                }), settings.maintenanceEnabled && !settings.isAtc ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                  className: "d-flex flex-wrap",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                    className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-0",
                    children: ["Maintenance: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      children: options.maintenance ? prices.monthlyMaintenance + " Per month" : "N/A"
                    })]
                  })
                }) : null, settings.isAtc ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                  className: "d-flex flex-wrap",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                    className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-0",
                    children: ["Maintenance & Insurance: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      children: "Included"
                    })]
                  })
                }) : null]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-24 col-md-12 px-0",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("table", {
              className: "w-100",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tbody", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                  className: "d-flex flex-wrap",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                    className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-0",
                    children: ["Trim / Interior: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      children: options.interior ? options.interior : "Not selected"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                  className: "d-flex flex-wrap",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                    className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-0",
                    children: ["Optional Extras:", hasExtraOptions && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                      children: ["x", prices.extraOptions.length, " = ", prices.extraOptionsTotal]
                    }), !hasExtraOptions && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      children: "No options added"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                  className: "d-flex flex-wrap",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                    className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-0",
                    children: ["Processing Fee: ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                      children: [prices.processingFee, " ", vatText]
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                  className: "d-flex flex-wrap",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                    className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-0",
                    children: ["Paint: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      children: options.exterior ? options.exterior : "Not selected"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tr", {
                  className: "d-flex flex-wrap",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                    className: "col-24 d-flex d-md-inline-flex justify-content-between align-items-center border-right-0",
                    children: ["Road Fund Licence: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      children: "Included"
                    })]
                  })
                })]
              })
            })
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "w-100 d-flex flex-wrap justify-content-end align-items-center p-3",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
          className: "vehicle-price mr-1",
          children: prices.monthly
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: vatText
        })]
      })]
    })]
  });
};

/* harmony default export */ var vehicle_summary = (VehicleSummary);
// CONCATENATED MODULE: ./components/vehicle/vehicle-summary/index.jsx

// EXTERNAL MODULE: ./components/vehicle/vehicle-options-tabs/index.jsx + 7 modules
var vehicle_options_tabs = __webpack_require__("3Xa5");

// EXTERNAL MODULE: ./components/vehicle/vehicle-slideup/index.jsx + 1 modules
var vehicle_slideup = __webpack_require__("kjHD");

// EXTERNAL MODULE: ./components/trustpilot/trust-box/index.jsx + 1 modules
var trust_box = __webpack_require__("wMTI");

// EXTERNAL MODULE: ./components/HOCs/modal/modalContext.tsx
var modal_modalContext = __webpack_require__("a2hv");

// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__("CNqx");
var external_underscore_default = /*#__PURE__*/__webpack_require__.n(external_underscore_);

// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__("qqGZ");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);

// EXTERNAL MODULE: ./components/garage/_libs/helpers/garageStorageHelper.tsx
var garageStorageHelper = __webpack_require__("jmJx");

// EXTERNAL MODULE: ./enums/VehicleStorageTypes.tsx
var VehicleStorageTypes = __webpack_require__("G6YE");

// EXTERNAL MODULE: ./helpers/vehiclesStorageProvider.tsx
var vehiclesStorageProvider = __webpack_require__("FK8X");

// CONCATENATED MODULE: ./components/history/_libs/helpers/historyStorageHelper.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class historyStorageHelper_HistoryStorageHelper {
  static addItem(index, item, summary) {
    if (item && index >= 0 && index < this.storageMaxSize) {
      const storageItem = {
        id: Object(helpers["r" /* getGUID */])(),
        index: index,
        vehicle: item,
        timeStamp: Date.now(),
        summary: summary
      };

      if (vehiclesStorageProvider["a" /* VehiclesStorageProvider */].addItem(this.storageType, storageItem, index)) {
        return storageItem;
      }
    }

    return null;
  }

  static updateItem(itemId, item, alwaysUpdate, summary) {
    if (item) {
      const storageItem = vehiclesStorageProvider["a" /* VehiclesStorageProvider */].getItem(this.storageType, itemId);

      if (storageItem && (alwaysUpdate || !external_underscore_default.a.isEqual(storageItem.vehicle, item))) {
        storageItem.vehicle = item;
        storageItem.timeStamp = Date.now();
        storageItem.summary = summary;

        if (vehiclesStorageProvider["a" /* VehiclesStorageProvider */].updateItem(this.storageType, storageItem)) {
          return storageItem;
        }
      }
    }

    return null;
  }

  static addOrUpdateItem(item, summary) {
    if (item) {
      const storageItems = this.getItems(false);
      const storageItem = storageItems.find(storageItem => {
        return storageItem && storageItem.vehicle && storageItem.vehicle.vehicleRef === item.vehicleRef;
      });

      if (storageItem) {
        return this.updateItem(storageItem.id, item, true, summary);
      } else {
        // If full, remove the oldest entry
        if (this.isFull()) {
          var _orderedStorageItems$;

          let orderedStorageItems = external_underscore_default.a.sortBy(storageItems, function (orderedStorageItem) {
            return orderedStorageItem.timeStamp;
          });

          let itemId = (_orderedStorageItems$ = orderedStorageItems[0]) === null || _orderedStorageItems$ === void 0 ? void 0 : _orderedStorageItems$.index;
          this.removeItem(itemId);
          this.addItem(itemId, item, summary);
        } else {
          const index = storageItems.indexOf(null);

          if (!Object(helpers["w" /* isNullOrEmpty */])(index) && index >= 0 && index < this.storageMaxSize) {
            return this.addItem(index, item, summary);
          }
        }
      }
    }

    return null;
  }

  static removeItem(itemId) {
    return vehiclesStorageProvider["a" /* VehiclesStorageProvider */].removeItem(this.storageType, itemId);
  }

  static getItems(ignoreEmptyItems) {
    let result = vehiclesStorageProvider["a" /* VehiclesStorageProvider */].getItems(this.storageType);

    if (result && result.length > 0 && ignoreEmptyItems) {
      result = result.filter(item => {
        return item;
      });
    }

    return result;
  }

  static countItems() {
    return this.getItems(true).length;
  }

  static isFull() {
    return !(this.countItems() < this.storageMaxSize);
  }

  static isTriggered() {
    return !(this.countItems() < this.triggerMaxSize);
  }

}

_defineProperty(historyStorageHelper_HistoryStorageHelper, "storageType", VehicleStorageTypes["a" /* VehicleStorageTypes */].History);

_defineProperty(historyStorageHelper_HistoryStorageHelper, "storageMaxSize", vehiclesStorageProvider["a" /* VehiclesStorageProvider */].getStorageMaxSize(VehicleStorageTypes["a" /* VehicleStorageTypes */].History) || 0);

_defineProperty(historyStorageHelper_HistoryStorageHelper, "triggerMaxSize", vehiclesStorageProvider["a" /* VehiclesStorageProvider */].getTriggerMaxSize(VehicleStorageTypes["a" /* VehicleStorageTypes */].History) || 0);
// EXTERNAL MODULE: ./helpers/analytics.tsx
var analytics = __webpack_require__("btDt");

// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__("kG9d");

// CONCATENATED MODULE: ./components/layout/modal-garage/modal-garage.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { modal_garage_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_garage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const ModalGarage = (_ref) => {
  let {
    onRequestClose
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["onRequestClose"]);

  const router = Object(router_["useRouter"])();

  const orderedStorageItems = external_underscore_default.a.sortBy(historyStorageHelper_HistoryStorageHelper.getItems(true), function (orderedStorageItem) {
    return orderedStorageItem.timeStamp;
  });

  const slicedStorageItems = orderedStorageItems.reverse().slice(0, vehiclesStorageProvider["a" /* VehiclesStorageProvider */].getTriggerMaxSize(VehicleStorageTypes["a" /* VehicleStorageTypes */].History));
  const {
    0: vehicleHistory,
    1: setVehicleHistory
  } = Object(external_react_["useState"])(slicedStorageItems);
  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 1);

  const handleClose = () => {
    Object(external_nookies_["setCookie"])(null, "HasClosedGaragePromo", "true", {
      expires: expiryDate,
      path: '/'
    });
    Object(analytics["d" /* logLabelEvent */])('my-garage-modal', 'decline', 'modal');
  };

  const addToGarage = () => {
    vehicleHistory.map(item => {
      garageStorageHelper["a" /* GarageStorageHelper */].addOrUpdateItem(item.vehicle);
    });
    router.push('/my-garage?referrer=modal');
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Modal_default.a, _objectSpread(_objectSpread({
      className: "modal--compare",
      onHide: onRequestClose,
      centered: true
    }, otherProps), {}, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Header, {
        className: "d-flex flex-nowrap justify-content-center align-items-center",
        closeButton: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Title, {
          className: "text-center capitalize mb-0",
          children: "My Garage"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Modal_default.a.Body, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-24 text-center",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "mb-0",
              children: "We've noticed you've been looking at the following vehicles:"
            })
          })
        }), (vehicleHistory === null || vehicleHistory === void 0 ? void 0 : vehicleHistory.length) > 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row",
          children: vehicleHistory.map(vehicle => {
            var _vehicle$summary, _vehicle$summary2, _vehicle$summary3, _vehicle$summary4, _vehicle$summary5, _vehicle$summary6, _vehicle$summary7;

            return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: `col-24 col-md-12 ${(vehicleHistory === null || vehicleHistory === void 0 ? void 0 : vehicleHistory.length) > 2 ? 'col-lg-6' : ''} mb-md-3`,
              children: [((_vehicle$summary = vehicle.summary) === null || _vehicle$summary === void 0 ? void 0 : _vehicle$summary.imageUrl) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/${(_vehicle$summary2 = vehicle.summary) === null || _vehicle$summary2 === void 0 ? void 0 : _vehicle$summary2.imageUrl}`,
                className: "img-fluid lazyload mb-2",
                alt: `${(_vehicle$summary3 = vehicle.summary) === null || _vehicle$summary3 === void 0 ? void 0 : _vehicle$summary3.make} ${(_vehicle$summary4 = vehicle.summary) === null || _vehicle$summary4 === void 0 ? void 0 : _vehicle$summary4.model}`
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("small", {
                className: "w-100 d-block mb-2 text-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("strong", {
                  children: [(_vehicle$summary5 = vehicle.summary) === null || _vehicle$summary5 === void 0 ? void 0 : _vehicle$summary5.make, " ", (_vehicle$summary6 = vehicle.summary) === null || _vehicle$summary6 === void 0 ? void 0 : _vehicle$summary6.model]
                }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), (_vehicle$summary7 = vehicle.summary) === null || _vehicle$summary7 === void 0 ? void 0 : _vehicle$summary7.derivative]
              })]
            });
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-24 text-center",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "mb-0",
              children: "Did you know, you can add them to your garage and compare them?"
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Modal_default.a.Footer, {
        className: "d-flex flex-md-nowrap justify-content-center align-items-center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: "btn btn-danger btn-lg btn-fluid-xs mb-2 mb-md-0 mr-sm-3 garage-modal-dismiss",
          onClick: () => {
            handleClose();
            onRequestClose();
          },
          children: "Dismiss"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: "btn btn-primary btn-lg btn-fluid-xs garage-modal-compare",
          onClick: addToGarage,
          children: "Compare Now"
        })]
      })]
    }))
  });
};

/* harmony default export */ var modal_garage = (ModalGarage);
// CONCATENATED MODULE: ./components/layout/modal-garage/index.jsx

// EXTERNAL MODULE: ./components/vehicle/vehicle-extra-options-confirm-modal/index.jsx + 3 modules
var vehicle_extra_options_confirm_modal = __webpack_require__("Wj+e");

// EXTERNAL MODULE: ./components/vehicle/vehicle-quote-enquiry-modal/index.jsx + 2 modules
var vehicle_quote_enquiry_modal = __webpack_require__("9U2n");

// CONCATENATED MODULE: ./components/vehicle/vehicle-additional-tax-modal/vehicle-additional-tax-modal.tsx



function vehicle_additional_tax_modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vehicle_additional_tax_modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vehicle_additional_tax_modal_ownKeys(Object(source), true).forEach(function (key) { vehicle_additional_tax_modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vehicle_additional_tax_modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function vehicle_additional_tax_modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function vehicle_additional_tax_modal_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = vehicle_additional_tax_modal_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function vehicle_additional_tax_modal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const VehicleAdditionalTaxModal = (_ref) => {
  let {
    onRequestClose
  } = _ref,
      otherProps = vehicle_additional_tax_modal_objectWithoutProperties(_ref, ["onRequestClose"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Modal_default.a, vehicle_additional_tax_modal_objectSpread(vehicle_additional_tax_modal_objectSpread({
    onHide: onRequestClose,
    centered: true,
    scrollable: true
  }, otherProps), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Header, {
      className: "d-flex flex-nowrap justify-content-center align-items-center",
      closeButton: true,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Title, {
        className: "mb-0",
        children: "Additional Tax"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Body, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "As the options that you have chosen increase the vehicle P11D value to over \xA340,000, the vehicle tax will increase by \xA3320 per annum, from the second year of the lease onwards. Please contact your Account Manager if you have any questions regarding the vehicle-tax rate."
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Footer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        type: "button",
        className: "btn btn-primary btn-lg",
        onClick: onRequestClose,
        children: "Close"
      })
    })]
  }));
};

/* harmony default export */ var vehicle_additional_tax_modal = (VehicleAdditionalTaxModal);
// CONCATENATED MODULE: ./components/vehicle/vehicle-additional-tax-modal/index.jsx

// EXTERNAL MODULE: ./components/layout/vehicle-pricing-matrix-modal/index.jsx + 1 modules
var vehicle_pricing_matrix_modal = __webpack_require__("n9Ri");

// EXTERNAL MODULE: ./components/layout/vehicle-pricing-error-feedback-modal/index.jsx + 3 modules
var vehicle_pricing_error_feedback_modal = __webpack_require__("MsP3");

// EXTERNAL MODULE: ./components/layout/vehicle-social/vehicle-social.module.scss
var vehicle_social_module = __webpack_require__("Yp3H");
var vehicle_social_module_default = /*#__PURE__*/__webpack_require__.n(vehicle_social_module);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// CONCATENATED MODULE: ./components/layout/vehicle-social/vehicle-social.tsx







const VehicleSocial = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
    className: vehicle_social_module_default.a['vehicle-socials'],
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "https://www.facebook.com/LeasingOptionsLtd",
        target: "_blank",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "16",
          height: "16",
          icon: free_brands_svg_icons_["faFacebookF"]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "https://twitter.com/LeasingOptions",
        target: "_blank",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "16",
          height: "16",
          icon: free_brands_svg_icons_["faTwitter"]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "https://www.linkedin.com/company/leasing-options-ltd/",
        target: "_blank",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "16",
          height: "16",
          icon: free_brands_svg_icons_["faLinkedin"]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "https://www.instagram.com/leasing_options_ltd/",
        target: "_blank",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          width: "16",
          height: "16",
          icon: free_brands_svg_icons_["faInstagram"]
        })
      })
    })]
  });
};

/* harmony default export */ var vehicle_social = (VehicleSocial);
// CONCATENATED MODULE: ./components/layout/vehicle-social/index.js

// EXTERNAL MODULE: ./components/internal/vehicle-details/vehicle-details.module.scss
var vehicle_details_module = __webpack_require__("tpS9");
var vehicle_details_module_default = /*#__PURE__*/__webpack_require__.n(vehicle_details_module);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./components/internal/vehicle-details/vehicle-details.tsx






const InternalVehicleDetails = ({
  data
}) => {
  const {
    0: boxToggle,
    1: setBoxToggle
  } = Object(external_react_["useState"])(true);
  const createdOn = external_moment_default()(data === null || data === void 0 ? void 0 : data.createdOn, "YYYY-MM-DDTHH:mm:ss");
  const formattedCreatedOn = createdOn.format("DD/MM/YYYY HH:mm:ss");
  const updatedOn = external_moment_default()(data === null || data === void 0 ? void 0 : data.updatedOn, "YYYY-MM-DDTHH:mm:ss");
  const formattedUpdatedOn = updatedOn.format("DD/MM/YYYY HH:mm:ss");

  if (data) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${vehicle_details_module_default.a['internal-details']} ${boxToggle ? vehicle_details_module_default.a['is-active'] : ""}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `${vehicle_details_module_default.a['internal-details__header']} d-flex justify-content-between align-items-center bg-navy text-white p-3 mb-0 h5`,
        onClick: () => {
          setBoxToggle(!boxToggle);
        },
        children: ["Internal Details ", boxToggle ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "-"
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "+"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `${vehicle_details_module_default.a['internal-details__info']} bg-white p-3`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row mb-3 mb-0",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24 col-md-8",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "Created:"
            }), " ", formattedCreatedOn, " (", data === null || data === void 0 ? void 0 : data.createdBy, ")"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24 col-md-16",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "Updated:"
            }), " ", formattedUpdatedOn, " (", data === null || data === void 0 ? void 0 : data.updatedBy, ")"]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row mb-3 mb-0",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24 col-md-8",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "Cap Id:"
            }), " ", data === null || data === void 0 ? void 0 : data.capId]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24 col-md-8",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "Vehicle Ref:"
            }), " ", data === null || data === void 0 ? void 0 : data.vehicleRef]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24 col-md-8",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "Dealer Name:"
            }), " ", data === null || data === void 0 ? void 0 : data.dealerName]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row mb-3 mb-0",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24 col-md-8",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "CH Funder Name (2 Year):"
            }), " ", data === null || data === void 0 ? void 0 : data.chFunderName2Year]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24 col-md-8",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "CH Funder Name (3 Year):"
            }), " ", data === null || data === void 0 ? void 0 : data.chFunderName3Year]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24 col-md-8",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "CH Funder Name (4 Year):"
            }), " ", data === null || data === void 0 ? void 0 : data.chFunderName4Year]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row mb-3 mb-0",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24 col-md-8",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "PCH Funder Name (2 Year):"
            }), " ", data === null || data === void 0 ? void 0 : data.pchFunderName2Year]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24 col-md-8",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "PCH Funder Name (3 Year):"
            }), " ", data === null || data === void 0 ? void 0 : data.pchFunderName3Year]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24 col-md-8",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "PCH Funder Name (4 Year):"
            }), " ", data === null || data === void 0 ? void 0 : data.pchFunderName4Year]
          })]
        }), data !== null && data !== void 0 && data.notes ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row mb-3 mb-0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "Notes:"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), data === null || data === void 0 ? void 0 : data.notes]
          })
        }) : null]
      })]
    });
  }

  return null;
};

/* harmony default export */ var vehicle_details = (InternalVehicleDetails);
// CONCATENATED MODULE: ./components/internal/vehicle-details/index.jsx

// EXTERNAL MODULE: ./components/internal/vehicle-options/vehicle-options.module.scss
var vehicle_options_module = __webpack_require__("MgYN");
var vehicle_options_module_default = /*#__PURE__*/__webpack_require__.n(vehicle_options_module);

// CONCATENATED MODULE: ./enums/VehicleAgeCategories.tsx
let VehicleAgeCategories;

(function (VehicleAgeCategories) {
  VehicleAgeCategories[VehicleAgeCategories["New"] = 1] = "New";
  VehicleAgeCategories[VehicleAgeCategories["NearlyNew"] = 2] = "NearlyNew";
  VehicleAgeCategories[VehicleAgeCategories["Used"] = 3] = "Used";
  VehicleAgeCategories[VehicleAgeCategories["PreReg"] = 4] = "PreReg";
  VehicleAgeCategories[VehicleAgeCategories["ParallelImport"] = 5] = "ParallelImport";
})(VehicleAgeCategories || (VehicleAgeCategories = {}));
// CONCATENATED MODULE: ./components/internal/vehicle-options/vehicle-options.tsx









const VehicleOptions = ({
  options,
  settings
}) => {
  const {
    register,
    errors
  } = Object(external_react_hook_form_["useFormContext"])();
  const {
    0: boxToggle,
    1: setBoxToggle
  } = Object(external_react_["useState"])(true);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `${vehicle_options_module_default.a['internal-options']} ${boxToggle ? vehicle_options_module_default.a['is-active'] : ""}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${vehicle_options_module_default.a['internal-options__header']} d-flex justify-content-between align-items-center bg-navy text-white p-3 mb-0 h5`,
      onClick: () => {
        setBoxToggle(!boxToggle);
      },
      children: ["Internal Options ", boxToggle ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: "-"
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: "+"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${vehicle_options_module_default.a['internal-options__info']} bg-white p-3`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 d-flex justify-content-end align-items-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            width: "20",
            height: "20",
            icon: pro_regular_svg_icons_["faInfoCircle"],
            title: "Pricing Matrix",
            onClick: () => settings.onPricingMatrix()
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            width: "20",
            height: "20",
            icon: pro_regular_svg_icons_["faExclamationTriangle"],
            className: "ml-1",
            title: "Report Mistake",
            onClick: () => settings.onErrorFeedback()
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-12",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Additional Sales Code"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
            className: "form-control",
            value: options.salesCode || 0,
            onChange: evt => settings.setOptions("salesCode", parseInt(evt.currentTarget.value)),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: 0,
              children: "\xA30"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: 100,
              children: "\xA3100"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: 200,
              children: "\xA3200"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: 300,
              children: "\xA3300"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: 400,
              children: "\xA3400"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: 500,
              children: "\xA3500"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: 750,
              children: "\xA3750"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: 1000,
              children: "\xA31000"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-12",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Age Category"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
            name: "ageCategory",
            className: `form-control ${errors.ageCategory ? "is-invalid" : ""}`,
            value: options.ageCategory || '',
            onChange: evt => settings.setOptions("ageCategory", parseInt(evt.currentTarget.value) || null),
            ref: register({
              required: true
            }),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: "",
              children: "Please select..."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: VehicleAgeCategories.New,
              children: "New"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: VehicleAgeCategories.PreReg,
              children: "Pre Reg"
            })]
          }), errors.ageCategory ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: "Age category is required"
          }) : null]
        })]
      })]
    })]
  });
};

/* harmony default export */ var vehicle_options = (VehicleOptions);
// CONCATENATED MODULE: ./components/internal/vehicle-options/index.jsx

// EXTERNAL MODULE: ./components/internal/vehicle-manual-details/vehicle-manual-details.module.scss
var vehicle_manual_details_module = __webpack_require__("M22K");
var vehicle_manual_details_module_default = /*#__PURE__*/__webpack_require__.n(vehicle_manual_details_module);

// CONCATENATED MODULE: ./components/internal/vehicle-manual-details/vehicle-manual-details.tsx



function vehicle_manual_details_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vehicle_manual_details_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vehicle_manual_details_ownKeys(Object(source), true).forEach(function (key) { vehicle_manual_details_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vehicle_manual_details_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function vehicle_manual_details_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






//TODO: implement missing validation rules
//get data from single state object otherwise fails when reset method is applied
//reset used to clear form state on data update
//defaultValue is needed for monthlyMaintenancePrice to properly restore its value when maintenance being changed outside
//manual colors foelds conditional rendering applied based on data object to prevent re-rendering before color change confirm received
const VehicleManualDetailsForm = ({
  data,
  settings
}) => {
  var _errors$monthlyMainte, _errors$monthlyPrice, _errors$initialRental, _errors$processingFee;

  const {
    register,
    errors,
    setValue,
    reset
  } = Object(external_react_hook_form_["useFormContext"])();
  const {
    0: boxToggle,
    1: setBoxToggle
  } = Object(external_react_["useState"])(true);
  const {
    0: fieldsStates,
    1: setFieldsStates
  } = Object(external_react_["useState"])([{
    name: "dealerOption1Price",
    disabled: true,
    visible: true
  }, {
    name: "dealerOption2Price",
    disabled: true,
    visible: true
  }, {
    name: "dealerOption3Price",
    disabled: true,
    visible: true
  }, {
    name: "monthlyMaintenancePrice",
    disabled: false,
    visible: false
  }]);
  Object(external_react_["useEffect"])(() => {
    setValue("mileage", data.mileage);
    setValue("maintenance", data.maintenance);
    setValue("monthlyPrice", data.monthlyPrice);
    setValue("monthlyMaintenancePrice", data.maintenance ? data.monthlyMaintenancePrice : null);
    setValue("initialRentalPrice", data.initialRentalPrice);
    setValue("processingFee", data.processingFee);
    setValue("exteriorColor", data.exteriorColor);
    setValue("interiorColor", data.interiorColor);
    setMaintenanceState(data.maintenance);
    reset();
  }, [data]);

  const getMileages = () => {
    let mileages = [];

    for (let mileage = 5000; mileage <= 50000; mileage += 1000) {
      mileages.push(mileage);
    }

    return mileages;
  };

  const handleInternalToggle = evt => setBoxToggle(!boxToggle);

  const handleColorChange = evt => {
    const name = evt.target.name;
    const value = parseInt(evt.target.value) || null;
    const newId = value;
    const prevId = data[name];
    settings.onTryChangeColor(name, prevId, newId);
  };

  const handleDealerOptionChange = evt => {
    const name = evt.target.name + "Price";
    const value = evt.target.value;
    const disabled = !value;

    if (disabled) {
      setValue(name, null);
    }

    const fieldState = getFieldState(name);

    if (fieldState && fieldState.disabled !== disabled) {
      setFieldsStates(prevState => {
        const newStates = prevState.map(item => {
          if (item.name === name) {
            const updatedItem = vehicle_manual_details_objectSpread(vehicle_manual_details_objectSpread({}, item), {}, {
              disabled: disabled
            });

            return updatedItem;
          }

          return item;
        });
        return newStates;
      });
    }
  };

  const handlePriceInput = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    setValue(name, value ? Object(currencyHelper["a" /* formatMoney */])(Object(currencyHelper["c" /* unformat */])(value)) : null);
  };

  const handleMaintenanceChange = evt => {
    const mainteance = evt.target.value === "true";
    setMaintenanceState(mainteance);
  };

  const getFieldState = name => {
    return fieldsStates.find(item => {
      return item.name === name;
    });
  };

  const setMaintenanceState = maintenance => {
    const name = "monthlyMaintenancePrice";

    if (!maintenance) {
      setValue(name, null);
    }

    const fieldState = getFieldState(name);

    if (fieldState && fieldState.visible !== maintenance) {
      setFieldsStates(prevState => {
        const newStates = prevState.map(item => {
          if (item.name === name) {
            const updatedItem = vehicle_manual_details_objectSpread(vehicle_manual_details_objectSpread({}, item), {}, {
              visible: maintenance
            });

            return updatedItem;
          }

          return item;
        });
        return newStates;
      });
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `${vehicle_manual_details_module_default.a['internal-quote']} ${boxToggle ? vehicle_manual_details_module_default.a['is-active'] : ""}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${vehicle_manual_details_module_default.a['internal-quote__header']} d-flex justify-content-between align-items-center bg-blue text-white p-3 mb-0 h5`,
      onClick: evt => {
        handleInternalToggle(evt);
      },
      children: ["Quote Details ", boxToggle ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: "-"
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        children: "+"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${vehicle_manual_details_module_default.a['internal-quote__info']} bg-white p-3`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-8 form-group",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Annual Mileage"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("select", {
            name: "mileage",
            className: "form-control",
            ref: register,
            children: getMileages().map(mileage => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: mileage,
              children: mileage
            }, mileage))
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-8 form-group",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Maintenance"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
            name: "maintenance",
            className: "form-control",
            onChange: handleMaintenanceChange,
            ref: register,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: "false",
              children: "No"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: "true",
              children: "Yes"
            })]
          })]
        }), getFieldState("monthlyMaintenancePrice").visible ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-8 form-group",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Maintenance Price"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            name: "monthlyMaintenancePrice",
            className: `form-control ${errors.monthlyMaintenancePrice ? "is-invalid" : ""}`,
            type: "text",
            defaultValue: data.maintenance ? data.monthlyMaintenancePrice : '',
            onBlur: handlePriceInput,
            ref: register({
              required: 'Monthly maintenance price is required.'
            })
          }), errors.monthlyMaintenancePrice ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: (_errors$monthlyMainte = errors.monthlyMaintenancePrice) === null || _errors$monthlyMainte === void 0 ? void 0 : _errors$monthlyMainte.message
          }) : null]
        }) : null]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-8 form-group",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Monthly Price"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            name: "monthlyPrice",
            className: `form-control ${errors.monthlyPrice ? "is-invalid" : ""}`,
            type: "text",
            onBlur: handlePriceInput,
            ref: register({
              required: 'Monthly price is required.'
            })
          }), errors.monthlyPrice ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: (_errors$monthlyPrice = errors.monthlyPrice) === null || _errors$monthlyPrice === void 0 ? void 0 : _errors$monthlyPrice.message
          }) : null]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-8 form-group",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Initial Payment"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            name: "initialRentalPrice",
            className: `form-control ${errors.initialRentalPrice ? "is-invalid" : ""}`,
            type: "text",
            onBlur: handlePriceInput,
            ref: register({
              required: 'Initial rental price is required.'
            })
          }), errors.initialRentalPrice ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: (_errors$initialRental = errors.initialRentalPrice) === null || _errors$initialRental === void 0 ? void 0 : _errors$initialRental.message
          }) : null]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-8 form-group",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Processing Fee"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            name: "processingFee",
            className: `form-control ${errors.processingFee ? "is-invalid" : ""}`,
            type: "text",
            onBlur: handlePriceInput,
            ref: register({
              required: 'Processing fee is required.'
            })
          }), errors.processingFee ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "invalid-feedback d-block",
            children: (_errors$processingFee = errors.processingFee) === null || _errors$processingFee === void 0 ? void 0 : _errors$processingFee.message
          }) : null]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-16 form-group",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Dealer Option 1"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            name: "dealerOption1",
            className: "form-control",
            type: "text",
            maxLength: 100,
            onChange: handleDealerOptionChange,
            ref: register
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-8 form-group",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Price"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            name: "dealerOption1Price",
            className: "form-control",
            type: "text",
            disabled: getFieldState("dealerOption1Price").disabled,
            onBlur: handlePriceInput,
            ref: register
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-16 form-group",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Dealer Option 2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            name: "dealerOption2",
            className: "form-control",
            type: "text",
            maxLength: 100,
            onChange: handleDealerOptionChange,
            ref: register
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-8 form-group",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Price"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            name: "dealerOption2Price",
            className: "form-control",
            type: "text",
            disabled: getFieldState("dealerOption2Price").disabled,
            onBlur: handlePriceInput,
            ref: register
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-16 form-group",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Dealer Option 3"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            name: "dealerOption3",
            className: "form-control",
            type: "text",
            maxLength: 100,
            onChange: handleDealerOptionChange,
            ref: register
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-8 form-group",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Price"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            name: "dealerOption3Price",
            className: "form-control",
            type: "text",
            disabled: getFieldState("dealerOption3Price").disabled,
            onBlur: handlePriceInput,
            ref: register
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-12 form-group",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Exterior Colour"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
            name: "exteriorColor",
            className: "form-control",
            onChange: handleColorChange,
            ref: register,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: "",
              children: "Not selected"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: "1000",
              children: "TBC"
            }), settings.exteriorColors.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: item.id,
              children: item.name
            }, item.id))]
          }), data.exteriorColor === 1000 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            name: "exteriorColorManual",
            className: "form-control mt15",
            type: "text",
            maxLength: 200,
            ref: register
          }) : null]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 col-md-12 form-group",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            children: "Interior Color"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
            name: "interiorColor",
            className: "form-control",
            onChange: handleColorChange,
            ref: register,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: "",
              children: "Not selected"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: "1000",
              children: "TBC"
            }), settings.interiorColors.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
              value: item.id,
              children: item.name
            }, item.id))]
          }), data.interiorColor === 1000 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            name: "interiorColorManual",
            className: "form-control mt15",
            type: "text",
            maxLength: 200,
            ref: register
          }) : null]
        })]
      })]
    })]
  });
};

/* harmony default export */ var vehicle_manual_details = (VehicleManualDetailsForm);
// CONCATENATED MODULE: ./components/internal/vehicle-manual-details/index.jsx

// EXTERNAL MODULE: ./enums/PricingTypes.tsx
var PricingTypes = __webpack_require__("5loB");

// EXTERNAL MODULE: ./enums/VehicleTypes.tsx
var VehicleTypes = __webpack_require__("Ezaw");

// EXTERNAL MODULE: ./helpers/customOptionsHelper.tsx
var customOptionsHelper = __webpack_require__("ZrQC");

// EXTERNAL MODULE: ./helpers/vehiclePricingHelper.tsx
var vehiclePricingHelper = __webpack_require__("Ezyo");

// EXTERNAL MODULE: ./components/vehicle/_libs/helpers/VehicleExtraOptionsHelper.tsx
var VehicleExtraOptionsHelper = __webpack_require__("/kJK");

// EXTERNAL MODULE: ./components/vehicle/_libs/VehicleExtraOptionsManager.tsx
var VehicleExtraOptionsManager = __webpack_require__("CTce");

// EXTERNAL MODULE: ./helpers/stringHelper.tsx
var stringHelper = __webpack_require__("Kj82");

// EXTERNAL MODULE: ./environment/siteSettings.tsx
var siteSettings = __webpack_require__("PG61");

// EXTERNAL MODULE: ./business-logic/vehicleService.tsx + 2 modules
var vehicleService = __webpack_require__("wbKs");

// EXTERNAL MODULE: external "react-placeholder"
var external_react_placeholder_ = __webpack_require__("xQpJ");
var external_react_placeholder_default = /*#__PURE__*/__webpack_require__.n(external_react_placeholder_);

// EXTERNAL MODULE: ./node_modules/react-placeholder/lib/reactPlaceholder.css
var reactPlaceholder = __webpack_require__("Rb8l");

// CONCATENATED MODULE: ./components/pages/vehicle/vehicle.tsx




function vehicle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vehicle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vehicle_ownKeys(Object(source), true).forEach(function (key) { vehicle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vehicle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function vehicle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















































const VehiclePage = ({
  isInternal,
  pricingType,
  userPostcode,
  leasingDealType,
  vehicle,
  orderModalOpenned
}) => {
  const router = Object(router_["useRouter"])();
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const modalContext = Object(external_react_["useContext"])(modal_modalContext["a" /* default */]);
  const methods = Object(external_react_hook_form_["useForm"])();
  const cookies = Object(external_nookies_["parseCookies"])();
  const {
    handleSubmit
  } = methods; //const [selectedTerm, setselectedTerm] = useState(term);
  //const [selectedMileage, setselectedMileage] = useState(mileage || process.env.NEXT_PUBLIC_DEFAULT_CAR_MILEAGE);
  //const [selectedMaintenance, setselectedMaintenance] = useState(maintenance || process.env.NEXT_PUBLIC_DEFAULT_MAINTENANCE);
  //const [selectedInitialRentals, setselectedInitialRentals] = useState(initialRentalMonths || process.env.NEXT_PUBLIC_DEFAULT_INITIAL_RENTALS);
  //TODO: implement maintenanceEnabled setting

  const maintenanceEnabled = isInternal || true;
  const isAtc = pricingType && pricingType === PricingTypes["a" /* PricingTypes */].Atc;
  const blackFridayTheme = "false";

  const isClientSideRendering = () => {
    return  false && false;
  };

  const pricesDefaultState = {
    fullMonthlyPrice: "Please Call",
    initialRental: "POA",
    salesCode: "POA",
    monthlyPrice: "POA",
    monthlyMaintenancePrice: "POA",
    processingFee: Object(currencyHelper["a" /* formatMoney */])(parseFloat(leasingDealType === LeasingDealTypes["a" /* LeasingDealTypes */].Personal ? "199" : "165.83")),
    extraOptions: [],
    extraOptionsTotal: Object(currencyHelper["a" /* formatMoney */])(0),
    p11d: "N/A",
    bikTax: "-"
  };
  const {
    0: enquiryAllowed,
    1: setEnquiryAllowed
  } = Object(external_react_["useState"])(false);
  const {
    0: addToGarageAllowed,
    1: setAddToGarageAllowed
  } = Object(external_react_["useState"])(false);
  const {
    0: isGarageFull,
    1: setIsGarageFull
  } = Object(external_react_["useState"])(false);
  const {
    0: customOptionsInitialized,
    1: setCustomOptionsInitialized
  } = Object(external_react_["useState"])(false);
  const {
    0: shownAdditionalTaxNotification,
    1: setShownAdditionalTaxNotification
  } = Object(external_react_["useState"])(true);
  const {
    0: shownInitialOrderModal,
    1: setShownInitialOrderModal
  } = Object(external_react_["useState"])(orderModalOpenned);
  const {
    0: customOptions,
    1: setCustomOptions
  } = Object(external_react_["useState"])({
    vehicleRef: vehicle.vehicleRef,
    leasingDealType: leasingDealType,
    term: siteSettings["a" /* SiteSettings */].DefaultTerm,
    mileage: siteSettings["a" /* SiteSettings */].GetDealTypeDefaultMileage(leasingDealType),
    maintenance: siteSettings["a" /* SiteSettings */].DefaultMaintenance,
    initialRentalMonths: siteSettings["a" /* SiteSettings */].DefaultInitialRentals,
    options: [],
    salesCode: 0,
    ageCategory: null
  });
  const {
    0: prices,
    1: setPrices
  } = Object(external_react_["useState"])(pricesDefaultState);
  const {
    0: extraOptions,
    1: setExtraOptions
  } = Object(external_react_["useState"])([]);
  const {
    0: extraOptionsRelationships,
    1: setExtraOptionsRelationships
  } = Object(external_react_["useState"])([]);
  const {
    0: extraOptionsStates,
    1: setExtraOptionsStates
  } = Object(external_react_["useState"])([]);
  const {
    0: interiorColors,
    1: setInteriorColors
  } = Object(external_react_["useState"])([]);
  const {
    0: exteriorColors,
    1: setExteriorColors
  } = Object(external_react_["useState"])([]);
  const {
    0: manualDetails,
    1: setManualDetails
  } = Object(external_react_["useState"])({
    mileage: null,
    maintenance: null,
    monthlyPrice: null,
    monthlyMaintenancePrice: null,
    initialRentalPrice: null,
    processingFee: null,
    exteriorColor: null,
    interiorColor: null
  });
  const {
    0: selectedColors,
    1: setSelectedColors
  } = Object(external_react_["useState"])({
    interiorColor: {
      id: null,
      name: null
    },
    exteriorColor: {
      id: null,
      name: null
    }
  });
  const {
    0: changeColorDump,
    1: setChangeColorDump
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    setIsGarageFull(garageStorageHelper["a" /* GarageStorageHelper */].isFull());
    let data = {
      pricingType: pricingType || undefined,
      postcode: userPostcode || undefined,
      vehicleRef: vehicle.vehicleRef,
      leasingDealType: leasingDealType,
      url: router.asPath,
      maintenanceAllowed: vehicle.hasMaintenance && maintenanceEnabled
    };
    customOptionsHelper["a" /* CustomOptionsHelper */].getVehicleCustomOptions(data, customOptionsState => {
      setCustomOptions(prevState => {
        let updatedValues = {
          term: customOptionsState.term,
          mileage: customOptionsState.mileage,
          maintenance: customOptionsState.maintenance,
          initialRentalMonths: customOptionsState.initialRentalMonths,
          options: customOptionsState.options,
          salesCode: customOptionsState.salesCode,
          ageCategory: customOptionsState.ageCategory
        };
        return vehicle_objectSpread(vehicle_objectSpread({}, prevState), updatedValues);
      });
      setCustomOptionsInitialized(true);
    });
  }, []);
  Object(external_react_["useEffect"])(() => {
    // Check for not internal
    if (!isInternal) {
      // Check user hasn't dismissed modal and for an empty garage
      if (!cookies.HasClosedGaragePromo && garageStorageHelper["a" /* GarageStorageHelper */].countItems() === 0) {
        // Add item to vehicle history 
        let historyItem = customOptions;
        historyItem.ageCategory = 1;
        let storageItem = historyStorageHelper_HistoryStorageHelper.addOrUpdateItem(historyItem, {
          make: vehicle.make,
          model: vehicle.model,
          derivative: vehicle.derivative,
          imageUrl: vehicle.imageUrl
        }); // If vehicle history is full

        if (storageItem && historyStorageHelper_HistoryStorageHelper.isTriggered()) {
          // Launch promo modal after 10 seconds
          const modalTimer = setTimeout(() => {
            modalContext.showModal(modal_garage, {
              show: true
            });
            Object(analytics["d" /* logLabelEvent */])('my-garage-modal', 'impression', 'modal');
          }, 10000);
          return () => clearTimeout(modalTimer);
        }
      }
    }
  }, [vehicle, customOptions]);
  Object(external_react_["useEffect"])(() => {
    setCustomOptions(prevState => {
      let updatedValues = {
        leasingDealType: leasingDealType
      };
      return vehicle_objectSpread(vehicle_objectSpread({}, prevState), updatedValues);
    });
  }, [leasingDealType]);
  Object(external_react_["useEffect"])(() => {
    if (customOptionsInitialized) {
      dispatch({
        type: 'UPDATE_OVERLAY_STATE',
        state: true
      });
      customOptionsHelper["a" /* CustomOptionsHelper */].storeVehicleCustomOptions(customOptions);
      Object(vehicleService["X" /* GetVehiclePricesDetails */])({
        pricingType: pricingType || undefined,
        postcode: userPostcode || undefined,
        vehicleRef: customOptions.vehicleRef,
        leasingDealType: customOptions.leasingDealType,
        term: customOptions.term,
        mileage: customOptions.mileage,
        maintenance: customOptions.maintenance,
        initialRentalMonths: customOptions.initialRentalMonths,
        options: customOptions.options,
        salesCode: customOptions.salesCode,
        ageCategory: customOptions.ageCategory
      }).then(result => {
        let pricesState = external_underscore_default.a.clone(pricesDefaultState);

        if (result.isSucceed && result.data) {
          let newPrices = result.data;
          let hasAllowedPrice = newPrices.baseMonthlyPrice && newPrices.baseMonthlyPrice > 0;
          pricesState.extraOptions = newPrices.extraOptions || [];
          pricesState.extraOptionsTotal = Object(currencyHelper["a" /* formatMoney */])(newPrices.extraOptionsTotal);
          pricesState.p11d = newPrices.p11D ? Object(currencyHelper["a" /* formatMoney */])(newPrices.p11D) : "N/A";
          pricesState.bikTax = newPrices.bik20Tax && newPrices.bik40Tax ? Object(currencyHelper["a" /* formatMoney */])(newPrices.bik20Tax) + "/" + Object(currencyHelper["a" /* formatMoney */])(newPrices.bik40Tax) + " p/m" : "-";

          if (hasAllowedPrice) {
            //TODO: Should we have separate object for manual prices or should we store prices as numbers here to format them on display later?
            pricesState.fullMonthlyPrice = newPrices.fullMonthlyPrice ? Object(currencyHelper["a" /* formatMoney */])(newPrices.fullMonthlyPrice) : "Please Call";
            pricesState.initialRental = Object(currencyHelper["a" /* formatMoney */])(newPrices.initialRental);
            pricesState.salesCode = Object(currencyHelper["a" /* formatMoney */])(newPrices.salesCode);
            pricesState.monthlyPrice = Object(currencyHelper["a" /* formatMoney */])(newPrices.baseMonthlyPrice);
            pricesState.monthlyMaintenancePrice = Object(currencyHelper["a" /* formatMoney */])(newPrices.monthlyMaintenancePrice);
          }

          setPrices(pricesState);
          setEnquiryAllowed(hasAllowedPrice);
          setAddToGarageAllowed(true);
          let suppressTaxNotification = false;

          if (shownInitialOrderModal) {
            suppressTaxNotification = hasAllowedPrice;
            setShownInitialOrderModal(false);
            onEnquiry(hasAllowedPrice, "order");
          }

          if (shownAdditionalTaxNotification && newPrices.p11DTaxApplied) {
            setShownAdditionalTaxNotification(false);

            if (!suppressTaxNotification) {
              modalContext.showModal(vehicle_additional_tax_modal, {
                show: true
              });
            }
          } //TODO: implement?
          //if (options.onPricesLoaded) {
          //    options.onPricesLoaded(dataOptions.leasingDealType);
          //}
          //onPricesLoaded: function (dealTypeId) {
          //    if ("@((byte)leasingDealType)" !== dealTypeId) {
          //        switch (dealTypeId) {
          //            case "1":
          //                window.location = "@businessUrl";
          //                break;
          //            case "2":
          //                window.location = "@personalUrl";
          //                break;
          //        }
          //    }
          //}

        } else {
          setPrices(pricesState);
          setEnquiryAllowed(false);
          setAddToGarageAllowed(false);
        }

        dispatch({
          type: 'UPDATE_OVERLAY_STATE',
          state: false
        });
      });
    }
  }, [customOptionsInitialized, customOptions]);
  Object(external_react_["useEffect"])(() => {
    let exteriorColor = {
      id: null,
      name: null
    };
    let interiorColor = {
      id: null,
      name: null
    };
    const exteriorColorOption = getColorExtraOption(0, customOptions.options);

    if (exteriorColorOption) {
      exteriorColor.id = exteriorColorOption.id;
      exteriorColor.name = exteriorColorOption.name;
    } else {
      if (changeColorDump && changeColorDump.type === "exteriorColor" && (!changeColorDump.newId || changeColorDump.newId === 1000)) {
        exteriorColor.id = changeColorDump.newId;
        exteriorColor.name = changeColorDump.newId === 1000 ? "TBC" : null;
      }
    }

    const interiorColorOption = getColorExtraOption(1, customOptions.options);

    if (interiorColorOption) {
      interiorColor.id = interiorColorOption.id;
      interiorColor.name = interiorColorOption.name;
    } else {
      if (changeColorDump && changeColorDump.type === "interiorColor" && (!changeColorDump.newId || changeColorDump.newId === 1000)) {
        interiorColor.id = changeColorDump.newId;
        interiorColor.name = changeColorDump.newId === 1000 ? "TBC" : null;
      }
    }

    setSelectedColors(prevState => {
      let updatedValues = {
        interiorColor: interiorColor,
        exteriorColor: exteriorColor
      };
      return vehicle_objectSpread(vehicle_objectSpread({}, prevState), updatedValues);
    });
    setChangeColorDump(null);
  }, [interiorColors, exteriorColors, customOptions.options]);
  Object(external_react_["useEffect"])(() => {
    if (customOptionsInitialized && isInternal && !isAtc) {
      setManualDetails(prevState => {
        let updatedValues = {
          mileage: customOptions.mileage,
          maintenance: customOptions.maintenance,
          monthlyPrice: prices.monthlyPrice,
          monthlyMaintenancePrice: prices.monthlyMaintenancePrice,
          initialRentalPrice: prices.initialRental,
          processingFee: prices.processingFee,
          exteriorColor: selectedColors.exteriorColor.id,
          interiorColor: selectedColors.interiorColor.id
        };
        return vehicle_objectSpread(vehicle_objectSpread({}, prevState), updatedValues);
      });
    }
  }, [customOptionsInitialized, prices, selectedColors]);

  const setOptions = (name, value) => {
    if (customOptions[name] !== value) {
      setCustomOptions(prevState => {
        let updatedValues = {};
        updatedValues[name] = value;
        return vehicle_objectSpread(vehicle_objectSpread({}, prevState), updatedValues);
      });
    }
  };

  const getColorExtraOption = (colorType, selectedOptionIds) => {
    let result = null;

    if (selectedOptionIds && selectedOptionIds.length > 0) {
      let colorOptions = [];

      switch (colorType) {
        case 0:
          //exterior
          colorOptions = exteriorColors;
          break;

        case 1:
          //interior
          colorOptions = interiorColors;
          break;
      }

      if (colorOptions && colorOptions.length > 0) {
        result = external_underscore_default.a.find(colorOptions, function (item) {
          return external_underscore_default.a.contains(selectedOptionIds, item.id);
        });
      }
    }

    return result;
  };

  const addToGarage = () => {
    if (addToGarageAllowed) {
      if (!garageStorageHelper["a" /* GarageStorageHelper */].isFull()) {
        let item = customOptions;
        item.ageCategory = 1;
        var storageItem = garageStorageHelper["a" /* GarageStorageHelper */].addOrUpdateItem(item);

        if (storageItem) {
          router.push('/my-garage');
        }
      } else {
        router.push('/my-garage');
      }
    }
  };

  const processOption = optionToProcess => {
    if (optionToProcess) {
      let optionsToProcess = [optionToProcess];
      let manager = new VehicleExtraOptionsManager["a" /* VehicleExtraOptionsManager */]();
      manager.init(extraOptions, extraOptionsRelationships);
      let managerState = manager.processOptions(optionsToProcess, null, customOptions.options, extraOptionsStates);

      if (managerState) {
        if (managerState.silentlySelectedOptionIds) {
          setCustomOptions(prevState => {
            let updatedValues = {
              options: managerState.selectedOptionIds || []
            };
            return vehicle_objectSpread(vehicle_objectSpread({}, prevState), updatedValues);
          });
        }

        if (managerState.confirmRelationshipIds && managerState.confirmRelationshipIds.length > 0) {
          modalContext.showModal(vehicle_extra_options_confirm_modal["a" /* default */], {
            show: true,
            title: "+ Optional Extras",
            data: {
              extraOptions: extraOptions.map(item => {
                let result = {
                  id: item.id,
                  name: item.name,
                  price: Object(vehiclePricingHelper["b" /* getVehicleMonthlyPrice */])(customOptions.leasingDealType, item.price, customOptions.term, customOptions.initialRentalMonths),
                  linkedRelationshipIds: item.linkedRelationshipIds
                };
                return result;
              }),
              extraOptionsRelationships: extraOptionsRelationships
            },
            options: {
              leasingDealType: customOptions.leasingDealType
            },
            initialState: managerState,
            settings: {
              onCancel: () => {
                setSelectedColors(prevState => {
                  return vehicle_objectSpread({}, prevState);
                });
                setChangeColorDump(null);
              },
              onApply: confirmedState => {
                if (confirmedState) {
                  setCustomOptions(prevState => {
                    let updatedValues = {
                      options: confirmedState.selectedOptionIds || []
                    };
                    return vehicle_objectSpread(vehicle_objectSpread({}, prevState), updatedValues);
                  });

                  if (confirmedState.optionsStates) {
                    setExtraOptionsStates(confirmedState.optionsStates);
                  }
                }
              }
            }
          });
        }
      }
    }
  };

  const onVehicleExtraOptionClick = option => {
    if (option && vehicle.optionsSelectAllowed) {
      //TODO: check usage of optionsSelectAllowed for internal users
      option.id = option.code;
      let optionToProcess = VehicleExtraOptionsHelper["a" /* VehicleExtraOptionsHelper */].getOptionAction(option, customOptions.options || []);
      processOption(optionToProcess);
    }
  };

  const onTryChangeColor = (type, prevId, newId) => {
    let optionToProcess = null;

    if (newId && newId !== 1000) {
      optionToProcess = {
        id: newId,
        selectionRequiredBy: [0],
        deselectionRequiredBy: []
      };
    } else if (prevId && prevId !== 1000) {
      optionToProcess = {
        id: prevId,
        selectionRequiredBy: [],
        deselectionRequiredBy: [0]
      };
    }

    if (optionToProcess) {
      setChangeColorDump({
        type: type,
        prevId: prevId,
        newId: newId
      });
      processOption(optionToProcess);
    } else {
      setSelectedColors(prevState => {
        let updatedValues = {};
        updatedValues[type] = {
          id: newId,
          name: null
        };
        return vehicle_objectSpread(vehicle_objectSpread({}, prevState), updatedValues);
      });
    }
  };

  const onEnquiryButtonClick = type => {
    onEnquiry(enquiryAllowed, type);
  };

  const onEnquiry = (showAllowed, type) => {
    if (isInternal) {
      handleSubmit(data => {
        showEnquiryModal(showAllowed, type, data);
      })();
    } else {
      showEnquiryModal(showAllowed, type);
    }
  };

  const showEnquiryModal = (showAllowed, type, internalData) => {
    if (showAllowed && type) {
      let enquiryData = {
        dealType: 1,
        dealId: customOptions.vehicleRef,
        pricingType: pricingType,
        pricingPostcode: userPostcode,
        details: `${vehicle.make} ${vehicle.model} ${vehicle.derivative}`,
        vehicleRef: customOptions.vehicleRef,
        leasingDealType: customOptions.leasingDealType,
        term: customOptions.term,
        mileage: customOptions.mileage,
        initialRentalMonths: customOptions.initialRentalMonths,
        maintenance: customOptions.maintenance || false,
        options: customOptions.options,
        salesCode: customOptions.salesCode,
        ageCategory: customOptions.ageCategory,
        manualDetails: null
      };

      if (isInternal && !isAtc) {
        enquiryData.manualDetails = {
          mileage: Object(currencyHelper["c" /* unformat */])(internalData.mileage),
          maintenance: internalData.maintenance === "true",
          monthlyPrice: Object(currencyHelper["c" /* unformat */])(internalData.monthlyPrice),
          monthlyMaintenancePrice: Object(currencyHelper["c" /* unformat */])(internalData.monthlyMaintenancePrice),
          initialRental: Object(currencyHelper["c" /* unformat */])(internalData.initialRentalPrice),
          processingFee: Object(currencyHelper["c" /* unformat */])(internalData.processingFee),
          dealerOption1: internalData.dealerOption1,
          dealerOption1Price: Object(currencyHelper["c" /* unformat */])(internalData.dealerOption1Price) || null,
          dealerOption2: internalData.dealerOption2,
          dealerOption2Price: Object(currencyHelper["c" /* unformat */])(internalData.dealerOption2Price) || null,
          dealerOption3: internalData.dealerOption3,
          dealerOption3Price: Object(currencyHelper["c" /* unformat */])(internalData.dealerOption3Price) || null,
          exteriorColor: Object(currencyHelper["c" /* unformat */])(internalData.exteriorColor) || null,
          exteriorColorManual: internalData.exteriorColorManual,
          interiorColor: Object(currencyHelper["c" /* unformat */])(internalData.interiorColor) || null,
          interiorColorManual: internalData.interiorColorManual
        };
      }

      let enquiryModalOptions = {
        show: true,
        title: null,
        baseData: enquiryData,
        settings: {
          isInternal: isInternal,
          showPriceWarning: isAtc,
          proceededToApplyForFinanceDirectly: false
        }
      };

      if (type === "enquiry") {
        enquiryModalOptions.title = "Enquire Now";
      } else if (type === "order") {
        enquiryModalOptions.title = "Order this " + (vehicle.vehicleType === VehicleTypes["a" /* VehicleTypes */].Commercial ? "van" : "car");
        enquiryModalOptions.settings.proceededToApplyForFinanceDirectly = true;
      }

      if (enquiryModalOptions) {
        modalContext.showModal(vehicle_quote_enquiry_modal["a" /* default */], enquiryModalOptions);
      }
    }
  };

  const onOptionsDataLoaded = (optionsType, data) => {
    if (optionsType === "extras" && vehicle.optionsSelectAllowed) {
      setExtraOptions([]);
      setExtraOptionsRelationships([]);
      let optionsList = [];
      let relationshipsList = [];
      let optiosStatesList = [];
      let interiorColorsList = [];
      let exteriorColorsList = [];

      if (data) {
        let optionCategories = data.options || [];
        let relationships = data.relationships || [];
        let interiorColorCategories = [81, 82, 83, 84, 86, 90, 97, 110, 109];
        let exteriorColorCategories = [44, 45, 73, 74, 75, 76, 103, 104, 105, 106, 107, 108];
        ;
        optionCategories.forEach(function (category) {
          let isInteriorColorsCategory = external_underscore_default.a.contains(interiorColorCategories, category.code);

          let isExteriorColorsCategory = external_underscore_default.a.contains(exteriorColorCategories, category.code);

          category.options.forEach(function (option) {
            let optionRelationshipIds = external_underscore_default.a.pluck(external_underscore_default.a.filter(relationships, function (relationship) {
              return relationship && external_underscore_default.a.contains(VehicleExtraOptionsHelper["a" /* VehicleExtraOptionsHelper */].allowedRelationshipTypes, relationship.type) && relationship.options && external_underscore_default.a.find(relationship.options, function (relationshipOption) {
                return relationshipOption.id === option.code;
              });
            }), "id");

            let extraOption = {
              id: option.code,
              name: option.name,
              price: option.price,
              linkedRelationshipIds: optionRelationshipIds
            };
            optionsList.push(extraOption);

            if (isInteriorColorsCategory) {
              interiorColorsList.push(extraOption);
            }

            if (isExteriorColorsCategory) {
              exteriorColorsList.push(extraOption);
            }
          });
        });
        (data.relationships || []).forEach(function (relationship) {
          let result = {
            id: relationship.id,
            type: relationship.type,
            primaryOptionIds: external_underscore_default.a.pluck(external_underscore_default.a.filter(relationship.options, function (option) {
              return option.isPrimary;
            }), "id"),
            regularOptionIds: external_underscore_default.a.pluck(external_underscore_default.a.filter(relationship.options, function (option) {
              return !option.isPrimary;
            }), "id"),
            mirrorRelationshipIds: relationship.mirrorRelationshipIds
          };
          relationshipsList.push(result);
        });
      }

      optiosStatesList = VehicleExtraOptionsHelper["a" /* VehicleExtraOptionsHelper */].getOptionsStates(customOptions.options, relationshipsList);
      setExtraOptions(optionsList);
      setInteriorColors(interiorColorsList);
      setExteriorColors(exteriorColorsList);
      setExtraOptionsRelationships(relationshipsList);
      setExtraOptionsStates(optiosStatesList);
    }
  };

  const onPricingMatrixButtonClick = () => {
    if (isInternal) {
      modalContext.showModal(vehicle_pricing_matrix_modal["a" /* default */], {
        show: true,
        vehicleRef: vehicle.vehicleRef,
        vehicleName: `${vehicle.make} ${vehicle.model} ${vehicle.derivative}`,
        pricingType: pricingType || undefined,
        userPostcode: userPostcode || undefined
      });
    }
  };

  const onErrorFeedbackButtonClick = () => {
    if (isInternal) {
      modalContext.showModal(vehicle_pricing_error_feedback_modal["a" /* default */], {
        show: true,
        vehicleRef: vehicle.vehicleRef,
        capId: vehicle.capId,
        vehicleName: `${vehicle.make} ${vehicle.model} ${vehicle.derivative}`,
        vehiclePageUrl: window.location.href,
        settings: {
          salespersons: []
        }
      });
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "container-fluid py-3 py-md-5 bg-light-grey",
      children: [isInternal && vehicle.extraDetails ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_details, {
            data: vehicle.extraDetails
          })
        })
      }) : null, /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 d-md-none order-1",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_short_info["a" /* default */], {
            vehicle: vehicle
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {
            className: "my-2 my-md-3"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24 order-2 col-lg-12 order-lg-3",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: `vehicle-gallery ${blackFridayTheme === 'true' ? 'vehicle-gallery--bf' : ''} mb-3 mb-md-0`,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_placeholder_default.a, {
              type: "rect",
              ready: vehicle ? true : false,
              color: "#E0E0E0",
              style: {
                height: 400
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_image_gallery_tabs["a" /* default */], {
                vehicleType: vehicle.vehicleType,
                imageDescription: `${Object(stringHelper["a" /* capitalize */])(Object(helpers["d" /* GetFriendlyName */])(vehicle.make))} ${Object(stringHelper["a" /* capitalize */])(Object(helpers["d" /* GetFriendlyName */])(vehicle.model))} ${Object(stringHelper["a" /* capitalize */])(Object(helpers["d" /* GetFriendlyName */])(vehicle.derivative))}`,
                imageUrls: vehicle.imageUrls,
                interiorUrl: vehicle.interiorUrl,
                exteriorUrl: vehicle.exteriorUrl
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                children: "Images are for illustration purposes only"
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-24 col-md-12 d-flex justify-content-between align-items-center mb-3 my-md-4",
              children: addToGarageAllowed ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                  onClick: () => addToGarage(),
                  className: "btn btn-outline-primary btn-fluid btn-lg flex-grow-1 mr-3 add-to-garage",
                  children: isGarageFull ? "View Garage" : `Compare ${vehicle.vehicleType === VehicleTypes["a" /* VehicleTypes */].Commercial ? "Van" : "Car"}s`
                }), isGarageFull ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(popover["a" /* default */], {
                  id: "garage-full",
                  trigger: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                    width: "20",
                    height: "20",
                    icon: pro_regular_svg_icons_["faInfoCircle"]
                  }),
                  body: "You are currently comparing four vehicles. Please remove one if you wish to add."
                }) : null]
              }) : null
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-24 col-md-12 d-none d-md-flex justify-content-end align-items-center my-3 my-md-4",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_social, {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-24",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {
                className: "m-0 p-0"
              })
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24 order-4 col-lg-12 order-lg-2 d-md-flex mb-3 mb-md-0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_placeholder_default.a, {
            type: "rect",
            ready: vehicle ? true : false,
            color: "#FFFFFF",
            style: {
              height: 650
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_info, {
              vehicle: vehicle,
              options: {
                leasingDealType: customOptions.leasingDealType,
                term: customOptions.term,
                mileage: customOptions.mileage,
                maintenance: customOptions.maintenance,
                initialRentalMonths: customOptions.initialRentalMonths
              },
              prices: {
                initialRental: prices.initialRental,
                monthlyMaintenance: prices.monthlyMaintenancePrice
              },
              settings: {
                availableMileages: vehicle.availableMileages,
                hasMaintenance: vehicle.hasMaintenance,
                isAtc: isAtc,
                maintenanceEnabled: maintenanceEnabled,
                setOptions: setOptions
              }
            })
          })
        })]
      }), isInternal ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_hook_form_["FormContext"], vehicle_objectSpread(vehicle_objectSpread({}, methods), {}, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-24 col-lg-12 mt-3 mt-md-5",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_options, {
              options: {
                salesCode: customOptions.salesCode,
                ageCategory: customOptions.ageCategory
              },
              settings: {
                setOptions: setOptions,
                onErrorFeedback: onErrorFeedbackButtonClick,
                onPricingMatrix: onPricingMatrixButtonClick
              }
            })
          }), !isAtc ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-24 col-lg-12 mt-3 mt-md-5",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_manual_details, {
              data: manualDetails,
              settings: {
                interiorColors: interiorColors,
                exteriorColors: exteriorColors,
                onTryChangeColor: onTryChangeColor
              }
            })
          }) : null]
        })
      })) : null]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `container-fluid py-5 ${isAtc ? "bg-atc" : "bg-white"}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24 col-md-12 mb-5 mb-md-0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_placeholder_default.a, {
            firstLaunchOnly: true,
            type: "text",
            showLoadingAnimation: true,
            ready: vehicle ? true : false,
            rows: 3,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_key_info["a" /* default */], {
              leasingDealType: leasingDealType,
              vehicle: vehicle,
              prices: {
                p11d: prices.p11d,
                bikTax: prices.bikTax
              },
              sourceUrl: router.asPath
            })
          })
        }), vehicle.features && vehicle.features.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24 col-md-12",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_placeholder_default.a, {
            firstLaunchOnly: true,
            type: "text",
            showLoadingAnimation: true,
            ready: vehicle.features ? true : false,
            rows: 3,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_features["a" /* default */], {
              features: vehicle.features
            })
          })
        }) : null]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container-fluid py-5 bg-light-grey",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_placeholder_default.a, {
            firstLaunchOnly: true,
            type: "text",
            showLoadingAnimation: true,
            color: "#FFFFFF",
            ready: customOptions ? true : false,
            rows: 8,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_summary, {
              options: {
                leasingDealType: customOptions.leasingDealType,
                term: customOptions.term,
                mileage: customOptions.mileage,
                maintenance: customOptions.maintenance,
                initialRentalMonths: customOptions.initialRentalMonths,
                interior: selectedColors.interiorColor.name,
                exterior: selectedColors.exteriorColor.name
              },
              prices: {
                monthly: prices.fullMonthlyPrice,
                monthlyMaintenance: prices.monthlyMaintenancePrice,
                processingFee: prices.processingFee,
                extraOptions: prices.extraOptions,
                extraOptionsTotal: prices.extraOptionsTotal
              },
              settings: {
                maintenanceEnabled: maintenanceEnabled,
                isAtc: isAtc
              }
            })
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container-fluid py-3 py-md-5 bg-white",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "col-24",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_placeholder_default.a, {
            firstLaunchOnly: true,
            type: "text",
            showLoadingAnimation: true,
            ready: customOptions ? true : false,
            rows: 10,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_options_tabs["a" /* default */], {
              vehicleType: vehicle.vehicleType,
              capId: vehicle.capId,
              options: {
                leasingDealType: customOptions.leasingDealType,
                term: customOptions.term,
                initialRentalMonths: customOptions.initialRentalMonths,
                options: customOptions.options,
                optionsStates: extraOptionsStates
              },
              settings: {
                searchAllowed: isInternal,
                optionsSelectAllowed: vehicle.optionsSelectAllowed,
                onOptionClick: onVehicleExtraOptionClick,
                onOptionsDataLoaded: onOptionsDataLoaded
              }
            })
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container-fluid py-3 py-md-5 bg-light-grey",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-24",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
            children: "What our customers think"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_box["a" /* default */], {})]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(vehicle_slideup["a" /* default */], {
      leasingDealType: customOptions.leasingDealType,
      monthlyPrice: prices.fullMonthlyPrice,
      settings: {
        isSimpleMode: !isInternal,
        proceedAllowed: enquiryAllowed,
        onProceed: onEnquiryButtonClick
      }
    })]
  });
};

/* harmony default export */ var vehicle_vehicle = (VehiclePage);
// CONCATENATED MODULE: ./components/pages/vehicle/index.jsx


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

/***/ "wMTI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ trust_box; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/trustpilot/trust-box/trust-box.module.scss
var trust_box_module = __webpack_require__("QOVr");
var trust_box_module_default = /*#__PURE__*/__webpack_require__.n(trust_box_module);

// EXTERNAL MODULE: ./components/trustpilot/trust-card/index.jsx + 1 modules
var trust_card = __webpack_require__("OLa3");

// EXTERNAL MODULE: ./enums/TrustWidgetTypes.tsx
var TrustWidgetTypes = __webpack_require__("8qXx");

// EXTERNAL MODULE: ./helpers/currencyHelper.tsx
var currencyHelper = __webpack_require__("oszm");

// EXTERNAL MODULE: external "react-masonry-css"
var external_react_masonry_css_ = __webpack_require__("tq2Q");
var external_react_masonry_css_default = /*#__PURE__*/__webpack_require__.n(external_react_masonry_css_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/trustpilot/trust-box/trust-box.tsx










function mapStateToProps(state) {
  return {
    trustPilotRating: state.trustPilotRating
  };
}

const TrustBox = ({
  trustPilotRating
}) => {
  const breakpointColumns = {
    default: 4,
    1200: 4,
    1024: 3,
    480: 1
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `trust-box ${trust_box_module_default.a['trust-box']}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: trust_box_module_default.a['trust-box__logo'],
      children: ["Excellent ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/trustpilot-5stars.svg`,
        className: "img-fluid lazyload",
        alt: "Trustpilot logo"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: trust_box_module_default.a['trust-box__rating'],
      children: ["Rated ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("strong", {
        children: [" ", trustPilotRating === null || trustPilotRating === void 0 ? void 0 : trustPilotRating.score, " "]
      }), " out of 5 based on ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        target: "_blank",
        href: "https://uk.trustpilot.com/review/leasingoptions.co.uk?utm_medium=trustbox&utm_source=Box",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("strong", {
          children: [" ", Object(currencyHelper["b" /* formatNumber */])(trustPilotRating === null || trustPilotRating === void 0 ? void 0 : trustPilotRating.reviewsCount), " reviews "]
        })
      }), " on ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/trustpilot-logo-star.svg`,
        className: "img-fluid lazyload",
        alt: "Trustpilot logo"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_masonry_css_default.a, {
      breakpointCols: breakpointColumns,
      className: trust_box_module_default.a['trust-box__reviews'],
      columnClassName: trust_box_module_default.a['trust-box__review'],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "After being let down by another leasing",
        text: "After being let down by another leasing company, leasing options was Recommend to me after explaining my situation,Cass was very helpful and worked on finding me the right car at within my budget. Great communication great friendly service will be using again and again thank you !!",
        name: "John",
        url: "https://uk.trustpilot.com/reviews/5f45598802e85708c8d8b23b?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Returning Customer!",
        text: "Returning Customer! Again, another easy, simple service by provided Cass",
        name: "Anthony Pinnell",
        url: "https://uk.trustpilot.com/reviews/5f45546e02e85708c8d8ae20?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Brilliant Service",
        text: "Sal helped us find our new car. He was at the end of the phone answering any queries. He also managed to save us quite a bit of money overall :) I have been mentioning yourselves and will continue to do so. Thank you for the brilliant help and support you provided throughout.",
        name: "Jeni Mason",
        url: "https://uk.trustpilot.com/reviews/5f4542c102e8570814f8bba7?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Excellent 5*",
        text: "This has been my first time leasing a vehicle through Leasing Options and I'm more than happy with their service. Jenny and the team have not only been super efficient and knowledgeable but have also been very personable and friendly to deal with - nothing has been too much trouble for them! Best price around too! Highly recommended!",
        name: "Lisa Marie Jones",
        url: "https://uk.trustpilot.com/reviews/5f45005c02e8570814f87981?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Leasing Options - Car Lease",
        text: "Recently leased two Tesla cars through Leasing Options. Michelle was fantastic throughout the process and made every step easy. She kept me informed with phone calls and emails. I will definitely be using Leasing Options again.",
        name: "Glenn R",
        url: "https://uk.trustpilot.com/reviews/5f44fb1102e8570814f87466?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "10/10 Excellent!!",
        text: "Natalie was amazing, she found me a cat really efficiently and at a great price. She communicated throughout the whole transaction and provided me with a fabulous car!! Awesome service",
        name: "Laura",
        url: "https://uk.trustpilot.com/reviews/5f44e88402e85708c8d8453a?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Really friendly and efficient service.",
        text: "Really friendly and efficient service. Lesley was incredibly helpful and prompt throughout. I was keen to use Leasing Options from the start, simply because they were the most proactive and helpful of the companies I went to for a quote. Luckily, they price matched the cheapest quote I received, making it an easy decision in the end. Would thoroughly recommend if you\u2019re looking to lease a car.",
        name: "SteveC",
        url: "https://uk.trustpilot.com/reviews/5f44d57502e8570814f850c1?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "First time I've leased .Jake was very",
        text: "First time I've leased .Jake was very helpful and went through it step by step very clearly and explained everything very well .and I've been in touch a couple of times since ordering and he has been nothing but helpful..would recommend leasing options to a friend without hesitation",
        name: "Chris Lister",
        url: "https://uk.trustpilot.com/reviews/5f44d24f02e8570814f84dd0?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "This is my 2nd time leasing from",
        text: "This is my 2nd time leasing from Leasing Options and they have been fantastic throughout. The aftercare is brilliant and I cant rate them enough! :) Cass has both times made sure everything ran smoothly and stress free.",
        name: "K.Man",
        url: "https://uk.trustpilot.com/reviews/5f44a04502e8570814f831db?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Rachael was friendly",
        text: "Rachael was friendly, efficient and a pleasure to deal with. She explained everything thoroughly and made the whole process very straight forward and stress free.",
        name: "Hazel Parmenter",
        url: "https://uk.trustpilot.com/reviews/5f43b22302e8570814f7ae0b?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Fantastic customer service",
        text: "Rachael Shaw handled my application and was fantastic. I was so impressed I wrote a letter of commendation. We did have some delays with the lender \u201CLex\u201D which Rachael chased up leaving me to get on with my own business. The price was great as they matched a better deal. Cannot recommend more.",
        name: "Mark  Barnett",
        url: "https://uk.trustpilot.com/reviews/5f43803602e8570814f7824b?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Leasing Options Review",
        text: "I dealt with Luke at Leasing Options. Brilliant service and I will definitely be recommending them to friends and family. Easy to deal with and very professional.",
        name: "Harry",
        url: "https://uk.trustpilot.com/reviews/5f40c09702e85708c8d64bd3?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Thanks Andy",
        text: "Andy Cliffe has just processed my second order and, as before, he has been a pleasure to deal with.",
        name: "Geoff Ralph",
        url: "https://uk.trustpilot.com/reviews/5f40b9ce02e8570814f668f8?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Cass Tynan handled my order.  She was capable and very professional throughout. Cass was also very responsive to any questions and quick to call back at all times.",
        text: "Cass Tynan handled my order. She was capable and very professional throughout. Cass was also very responsive to any questions and quick to call back at all times.",
        name: "Shannon Riley-Gregson",
        url: "https://uk.trustpilot.com/reviews/5f3fe21902e85708c8d5e5a6?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Yet another vehicle I have leased via",
        text: "Yet another vehicle I have leased via Leasing Options, This Will be my 5th, I have leased both personal and business with leasing options, Rob Ingham Has been a pleasure to deal with, always on hand with any information I have needed and will do his best to find the best deal for you and your needs. Cannot recommend Rob or Leasing Options enough - my go to for any new vehicle \uD83D\uDC4D\uD83C\uDFFB Keep up the good work guys \uD83D\uDC4D\uD83C\uDFFB",
        name: "Dan Mortlock",
        url: "https://uk.trustpilot.com/reviews/5f3fd97d02e85708c8d5dcfe?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Great service and communication from start to finish",
        text: "Great service and communication from Sal and the team. Driving my new vehicle in next to no time with no hiccups. Recommended.",
        name: "John Freed",
        url: "https://uk.trustpilot.com/reviews/5f3fd5df02e8570814f5f8fd?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Excellent service by Sal",
        text: "Excellent service by Sal and Louise, especially during these unprecedented times. Sal found me the perfect bmw lease car at an unbeatable price. The continued service and after care has been exceptional and Sal ensured i was satisfied. I highly recommend people speak to Sal for the future lease car and you will not be dissapointed. I will definitely be coming back when my lease ends. Massive thank you Sal, your a great asset to Leasing Options.",
        name: "Aftab Ahmed",
        url: "https://uk.trustpilot.com/reviews/5f3fd52302e85708c8d5d858?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Highly recommended",
        text: "Great service from Sal and Louise from start to finish. Kept me updated with progress of my order during a difficult time, very easy to deal with and quick responses to any enquiries even after delivery. Fantastic team",
        name: "Gary",
        url: "https://uk.trustpilot.com/reviews/5f3fbf5802e8570814f5e478?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Great service and communication from",
        text: "Great service and communication from start to finish. I spoke with many employees including Ashley the team leader and they were all superb. I recommend this company.",
        name: "J G Hales",
        url: "https://uk.trustpilot.com/reviews/5f3f9c5a02e85708c8d5a5b9?utm_medium=trustbox&utm_source=Box"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(trust_card["a" /* default */], {
        type: TrustWidgetTypes["a" /* TrustWidgetTypes */].Box,
        rating: 5,
        date: "",
        header: "Salavatore did a great job of finding Me the perfect day, would definitely recommend him and the company",
        text: "Salavatore did a great job of finding Me the perfect day, would definitely recommend him and the company",
        name: "Mrs Cardall",
        url: "https://uk.trustpilot.com/reviews/5f3fae2f02e85708c8d5b55b?utm_medium=trustbox&utm_source=Box"
      })]
    })]
  });
};

/* harmony default export */ var trust_box = (Object(external_react_redux_["connect"])(mapStateToProps)(TrustBox));
// CONCATENATED MODULE: ./components/trustpilot/trust-box/index.jsx


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

/***/ "wcP7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_store_tsx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("boQY");
/* harmony import */ var components_layout_main_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("z+X5");
/* harmony import */ var components_pages_vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("udbO");
/* harmony import */ var enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("l7ai");
/* harmony import */ var ssr_vehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Xpna");







const getServerSideProps = redux_store_tsx_store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getServerSideProps(ssr_vehicle_page__WEBPACK_IMPORTED_MODULE_6__[/* getProps */ "a"]);

const VanVehicleInternalPage = ({
  vehicle,
  orderModalOpenned
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_pages_vehicle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    isInternal: true,
    leasingDealType: enums_LeasingDealTypes__WEBPACK_IMPORTED_MODULE_5__[/* LeasingDealTypes */ "a"].Van,
    vehicle: vehicle,
    orderModalOpenned: orderModalOpenned
  });
};

VanVehicleInternalPage.layout = components_layout_main_layout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"];
/* harmony default export */ __webpack_exports__["default"] = (VanVehicleInternalPage);

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

/***/ "xQpJ":
/***/ (function(module, exports) {

module.exports = require("react-placeholder");

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