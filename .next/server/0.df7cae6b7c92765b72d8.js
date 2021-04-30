exports.ids = [0,1];
exports.modules = {

/***/ "SUUS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ search; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__("qqGZ");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);

// EXTERNAL MODULE: ./components/search/search.module.scss
var search_module = __webpack_require__("pmgs");
var search_module_default = /*#__PURE__*/__webpack_require__.n(search_module);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./helpers/urlHelper.tsx
var urlHelper = __webpack_require__("zjkP");

// EXTERNAL MODULE: ./enums/LeasingDealTypes.tsx
var LeasingDealTypes = __webpack_require__("l7ai");

// CONCATENATED MODULE: ./components/search/search-buttons.tsx









function mapStateToProps(state) {
  return {
    dealToggle: state.dealSelector
  };
}

const SearchButtons = ({
  active,
  handlePanelChange,
  dealToggle
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${search_module_default.a['modal-panel']} ${active ? search_module_default.a['is-active'] : ''} flex-wrap align-items-center justify-content-start p-3`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-24 col-md-12 d-flex align-items-center justify-content-start mb-3 pr-md-2",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
          className: "btn btn-primary btn-block btn-lg py-3 py-md-5",
          onClick: evt => handlePanelChange(2, `Choose ${dealToggle === LeasingDealTypes["a" /* LeasingDealTypes */].Van ? "Van" : "Car"} Make`),
          children: [dealToggle === LeasingDealTypes["a" /* LeasingDealTypes */].Van ? "Van" : "Car", " Make Search", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            className: "d-block",
            children: dealToggle === LeasingDealTypes["a" /* LeasingDealTypes */].Van ? "e.g Ford, Citroen, Mitsubishi" : "e.g Audi, BMW, VW"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-24 col-md-12 d-flex align-items-center justify-content-start mb-3 pl-md-2",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
          className: "btn btn-primary btn-block btn-lg py-3 py-md-5",
          onClick: evt => handlePanelChange(3, `Choose ${dealToggle === LeasingDealTypes["a" /* LeasingDealTypes */].Van ? "Van" : "Car"} Model`),
          children: [dealToggle === LeasingDealTypes["a" /* LeasingDealTypes */].Van ? "Van" : "Car", " Model Search", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            className: "d-block",
            children: dealToggle === LeasingDealTypes["a" /* LeasingDealTypes */].Van ? "e.g Transit, Berlingo, L200" : "e.g 3 Series, C Class, A4"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-24 col-md-12 d-flex align-items-center justify-content-start mb-3 pr-md-2",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
          className: "btn btn-primary btn-block btn-lg py-3 py-md-5",
          onClick: evt => handlePanelChange(4, 'Choose Body Type'),
          children: ["Body Type Search", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            className: "d-block",
            children: dealToggle === LeasingDealTypes["a" /* LeasingDealTypes */].Van ? "e.g Pickup, Crew, Dropside" : "e.g Saloon, Coupe, Estate"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-24 col-md-12 d-flex align-items-center justify-content-start mb-3 pl-md-2",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
          className: "btn btn-primary btn-block btn-lg py-3 py-md-5",
          onClick: evt => handlePanelChange(5, 'Choose A Budget'),
          children: ["Budget Search", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            className: "d-block",
            children: "e.g. \xA3150-\xA3300"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-24 col-md-12 d-flex align-items-center justify-content-start mb-3 pr-md-2",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: dealToggle != LeasingDealTypes["a" /* LeasingDealTypes */].Van ? '/car-leasing-deals' : '/van-leasing-deals',
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
            className: "btn btn-primary btn-block btn-lg py-3 py-md-5",
            children: ["Special Offers Search", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              className: "d-block",
              children: "See our current best deals"
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-24 col-md-12 d-flex align-items-center justify-content-start mb-3 pl-md-2",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
          className: "btn btn-primary btn-block btn-lg py-3 py-md-5",
          onClick: evt => handlePanelChange(6, 'Detailed Search'),
          children: ["Detailed Search", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            className: "d-block",
            children: "e.g. Fuel Type, MPG, Trim Level"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-24 col-md-12 d-flex align-items-center justify-content-start pr-md-2",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/in-stock'),
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
            className: "btn btn-success btn-block btn-lg py-3 py-md-5",
            children: ["In stock vehicles", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
              className: "d-block",
              children: "Our best offers ready to go"
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ var search_buttons = (Object(external_react_redux_["connect"])(mapStateToProps)(SearchButtons));
// CONCATENATED MODULE: ./components/search/search-makes.tsx








function search_makes_mapStateToProps(state) {
  return {
    dealToggle: state.dealSelector
  };
}

function SearchMakes({
  active,
  makes,
  dealToggle
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${search_module_default.a['modal-panel']} ${active ? search_module_default.a['is-active'] : ''} flex-wrap align-items-center justify-content-start p-3`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "row",
      children: makes === null || makes === void 0 ? void 0 : makes.map((make, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        passHref: true,
        href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/' + make.id),
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          className: "col-6 col-md-4 d-flex flex-row flex-wrap justify-content-center align-items-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: `${"https://imagecdn.leasingoptions.co.uk"}/website/static/makes/${make.id}.svg`,
            className: "img-fluid p-2",
            alt: make.text
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
            className: "d-block text-center text-default",
            children: make.text
          })]
        })
      }, index + make.id))
    })
  });
}

/* harmony default export */ var search_makes = (Object(external_react_redux_["connect"])(search_makes_mapStateToProps)(SearchMakes));
// EXTERNAL MODULE: ./enums/VehicleTypes.tsx
var VehicleTypes = __webpack_require__("Ezaw");

// EXTERNAL MODULE: ./business-logic/vehicleService.tsx + 2 modules
var vehicleService = __webpack_require__("wbKs");

// CONCATENATED MODULE: ./components/search/search-models.tsx










const SearchModels = ({
  active,
  makes,
  handleMakeUpdate,
  currentMake,
  dealToggle
}) => {
  const {
    0: modelList,
    1: setModelList
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    setModelList(makes);

    if (currentMake) {
      Object(vehicleService["s" /* GetModels */])(dealToggle === LeasingDealTypes["a" /* LeasingDealTypes */].Van ? VehicleTypes["a" /* VehicleTypes */].Commercial : VehicleTypes["a" /* VehicleTypes */].Car, currentMake).then(data => {
        setModelList(data.data);
      });
    }
  }, [makes, currentMake]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${search_module_default.a['modal-panel']} ${active ? search_module_default.a['is-active'] : ''} flex-wrap align-items-center justify-content-start`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      children: modelList.map((model, index) => {
        if (currentMake) {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              passHref: true,
              href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/' + currentMake + '/' + model.id),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "text-decoration-none",
                children: model.text
              })
            })
          }, index);
        } else {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
            onClick: evt => handleMakeUpdate(model.id),
            children: [model.text, " Models"]
          }, index);
        }
      })
    })
  });
};

/* harmony default export */ var search_models = (SearchModels);
// CONCATENATED MODULE: ./components/search/search-bodies.tsx









function search_bodies_mapStateToProps(state) {
  return {
    dealToggle: state.dealSelector
  };
}

const SearchBodies = ({
  active,
  dealToggle
}) => {
  if (dealToggle !== LeasingDealTypes["a" /* LeasingDealTypes */].Van) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${search_module_default.a['modal-panel']} ${active ? search_module_default.a['is-active'] : ''} flex-wrap align-items-center justify-content-start`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-suv-crossover'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    alt: "suv / crossover",
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-suv.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "SUV / Crossover"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g.Jeep Cherokee SW, Land Rover Discovery SW"
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-hatchback'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    alt: "hatchback",
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-hatchback.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "Hatchback"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g.Toyota Aygo, Vauxhall Astra"
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-saloon'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    alt: "saloon",
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-saloon.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "Saloon"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g.Alfa Romeo Giulia, Ford Mondeo"
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-estate'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    alt: "estate",
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-estate.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "Estate"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g.Hyundai i30 Tourer, Kia Ceed Sportswagon"
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-coupe'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    alt: "coupe",
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-coupe.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "Coupe"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g.Audi A5, BMW 2 Series"
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-convertible-cabriolet'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    alt: "convertible / cabriolet",
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-convertible.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "Convertible / Cabriolet"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g.Mercedes C Class, Smart ForTwo"
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-mpv'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    alt: "mpv",
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-mpv.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "MPV"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g.Renault Grand Scenic, Volkswagon Touran"
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-sports-car'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    alt: "sports car",
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-sportscar.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "Sports Car"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g.Abarth 124 Spider Roadster, Audi R8 Coupe"
                  })]
                })]
              })
            })
          })
        })]
      })
    });
  } else {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `${search_module_default.a['modal-panel']} ${active ? search_module_default.a['is-active'] : ''} flex-wrap align-items-center justify-content-start`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-small'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-small-van.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "Small"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g. Ford Connect, Peugeot Partner"
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-medium'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-medium-van.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "Medium"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g. Citroen Dispatch, VW Transporter"
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-large'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-large-van.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "Large"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g. Peugeot Boxer, Citroen Relay"
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-pickup'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-pickup.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "Pickup"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g. Mitsubish L200, Ford Ranger"
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-crew'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-crew-van.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "Crew"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g. VW Transporter, Ford Transit Custom"
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-dropside'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-dropside.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "Dropside"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g. Ford Transit, VW Crafter"
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            passHref: true,
            href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/body-type-luton'),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "text-decoration-none",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "w-100 row no-gutters d-flex align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-12 col-md-8",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/vehicle-images/panel-luton-van.png`,
                    className: "img-fluid lazyload"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "col-12 col-md-16 pl-3",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                    className: "d-block",
                    children: "Luton"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                    className: "d-block",
                    children: "e.g. Mercedes-Benz Sprinter, Ford Transit"
                  })]
                })]
              })
            })
          })
        })]
      })
    });
  }
};

/* harmony default export */ var search_bodies = (Object(external_react_redux_["connect"])(search_bodies_mapStateToProps)(SearchBodies));
// CONCATENATED MODULE: ./components/search/search-budgets.tsx








function search_budgets_mapStateToProps(state) {
  return {
    dealToggle: state.dealSelector
  };
}

const SearchBudgets = ({
  active,
  dealToggle
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${search_module_default.a['modal-panel']} ${active ? search_module_default.a['is-active'] : ''} flex-wrap align-items-center justify-content-start`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/search'),
          children: "Show me everything"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/budget-150'),
          children: "Below \xA3150"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/budget-200'),
          children: "Up to \xA3200"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/budget-250'),
          children: "Up to \xA3250"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/budget-300'),
          children: "Up to \xA3300"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/budget-350'),
          children: "Up to \xA3350"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/budget-400'),
          children: "Up to \xA3400"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/budget-450'),
          children: "Up to \xA3450"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/budget-500'),
          children: "Up to \xA3500"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/budget-600'),
          children: "Up to \xA3600"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/budget-700'),
          children: "Up to \xA3700"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/budget-800'),
          children: "Up to \xA3800"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/budget-900'),
          children: "Up to \xA3900"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/budget-1000'),
          children: "Up to \xA31000"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: Object(urlHelper["k" /* GetDealTypeUrl */])(dealToggle, '/budget-over-1000'),
          children: "Above \xA31000"
        })
      })]
    })
  });
};

/* harmony default export */ var search_budgets = (Object(external_react_redux_["connect"])(search_budgets_mapStateToProps)(SearchBudgets));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/pro-regular-svg-icons"
var pro_regular_svg_icons_ = __webpack_require__("dFPx");

// CONCATENATED MODULE: ./components/search/search-accordion.tsx







const SearchAccordion = ({
  selected,
  title,
  subtitle,
  autoclose = true,
  children
}) => {
  const {
    0: accordionToggle,
    1: setAccordionToggle
  } = Object(external_react_["useState"])(false);

  const handleAccordionToggle = evt => setAccordionToggle(!accordionToggle);

  Object(external_react_["useEffect"])(() => {
    if (autoclose) {
      setAccordionToggle(false);
    }
  }, [selected]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
    className: `${search_module_default.a['accordion']} ${accordionToggle ? search_module_default.a['is-active'] : ''} ${selected !== null && selected !== void 0 && selected.id && (selected === null || selected === void 0 ? void 0 : selected.id) != '' ? search_module_default.a['is-selected'] : ''}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      onClick: evt => handleAccordionToggle(evt),
      className: search_module_default.a['accordion-toggle'],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        className: "d-inline-flex justify-content-between align-items-center m-0",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: title
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("small", {
          children: ["- ", selected !== null && selected !== void 0 && selected.id && (selected === null || selected === void 0 ? void 0 : selected.id) != '' ? '' : /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "E.g. "
          }), subtitle]
        })]
      }), " ", accordionToggle ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        width: "25",
        height: "25",
        icon: pro_regular_svg_icons_["faChevronUp"]
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        width: "25",
        height: "25",
        icon: pro_regular_svg_icons_["faChevronDown"]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: search_module_default.a['accordion-content'],
      children: children
    })]
  });
};

/* harmony default export */ var search_accordion = (SearchAccordion);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: ./enums/PricingTypes.tsx
var PricingTypes = __webpack_require__("5loB");

// EXTERNAL MODULE: ./helpers/helpers.tsx
var helpers = __webpack_require__("mmV+");

// CONCATENATED MODULE: ./components/search/search-detailed.tsx

















const defaultSelected = {
  id: '',
  name: ''
};

function search_detailed_mapStateToProps(state) {
  return {
    dealToggle: state.dealSelector,
    vehicleFilters: state.vehicleFilters,
    userPostcode: state.userPostcode,
    isInternal: state.isInternal
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserPostcode: userPostcode => {
      dispatch({
        type: 'UPDATE_POSTCODE',
        userPostcode: userPostcode
      });
    }
  };
}; //TODO: Whole filter logic needs to be reviewed
//TODO: Fix option accordions logic. Default state
//TODO: Don't use index as key in map list


const SearchDetailed = ({
  active,
  handleVehicleCountUpdate,
  dealToggle,
  vehicleFilters,
  userPostcode,
  isInternal,
  updateUserPostcode
}) => {
  var _vehicleFilters$searc2, _vehicleFilters$searc3, _vehicleFilters$searc4, _vehicleFilters$price4, _vehicleFilters$price5, _vehicleFilters$price6, _makesList$find, _makesList$find2, _modelList$find, _modelList$find2, _vehicleFilters$short2, _vehicleFilters$short3, _vehicleFilters$short4, _vehicleFilters$fuelT4, _vehicleFilters$fuelT5, _vehicleFilters$fuelT6, _vehicleFilters$trans4, _vehicleFilters$trans5, _vehicleFilters$trans6, _vehicleFilters$drive4, _vehicleFilters$drive5, _vehicleFilters$drive6, _vehicleFilters$vehic7, _vehicleFilters$vehic8, _vehicleFilters$vehic9, _vehicleFilters$vehic11, _vehicleFilters$vehic12, _vehicleFilters$vehic13, _vehicleFilters$seats4, _vehicleFilters$seats5, _vehicleFilters$seats6, _vehicleFilters$engin4, _vehicleFilters$engin5, _vehicleFilters$engin6, _vehicleFilters$mpg4, _vehicleFilters$mpg5, _vehicleFilters$mpg6, _vehicleFilters$co4, _vehicleFilters$co5, _vehicleFilters$co6, _vehicleFilters$vehic15, _vehicleFilters$vehic16, _vehicleFilters$vehic17, _vehicleFilters$vehic19, _vehicleFilters$vehic20, _vehicleFilters$vehic21, _vehicleFilters$milea3, _vehicleFilters$milea4, _vehicleFilters$term4, _vehicleFilters$term5, _vehicleFilters$initi3, _vehicleFilters$initi4;

  const router = Object(router_["useRouter"])();
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const pricingType = Object(urlHelper["d" /* CheckAtcUrl */])(router.pathname) ? PricingTypes["a" /* PricingTypes */].Atc : null; //TODO: should it come in params instead? Same for options below

  const isATC = pricingType === PricingTypes["a" /* PricingTypes */].Atc;
  const leaseDealType = Object(urlHelper["e" /* CheckVanUrl */])(router.pathname) ? LeasingDealTypes["a" /* LeasingDealTypes */].Van : dealToggle;
  const vehicleType = Object(urlHelper["u" /* GetVehicleTypeFromUrl */])(router.pathname);
  const postcodeRef = external_react_default.a.useRef(); //TODO: shouldn't we clear selected values when related collections being updated?

  const {
    0: makesList,
    1: setMakesList
  } = Object(external_react_["useState"])([]);
  const {
    0: modelList,
    1: setModelList
  } = Object(external_react_["useState"])([]);
  const {
    0: trimList,
    1: setTrimList
  } = Object(external_react_["useState"])([]);
  const {
    0: seatList,
    1: setSeatList
  } = Object(external_react_["useState"])([]);
  const {
    0: mpgList,
    1: setMpgList
  } = Object(external_react_["useState"])([]);
  const {
    0: c02List,
    1: setC02List
  } = Object(external_react_["useState"])([]);
  const {
    0: driveTrainList,
    1: setDriveTrainList
  } = Object(external_react_["useState"])([]);
  const {
    0: vehicleSizelist,
    1: setEngizeSizeList
  } = Object(external_react_["useState"])([]);
  const {
    0: transmissionList,
    1: setTransmissionList
  } = Object(external_react_["useState"])([]);
  const {
    0: fuelTypesList,
    1: setFuelTypesList
  } = Object(external_react_["useState"])([]);
  const {
    0: vehicleSizeList,
    1: setVehicleSizeList
  } = Object(external_react_["useState"])([]);
  const {
    0: vehicleStyleList,
    1: setVehicleStyleList
  } = Object(external_react_["useState"])([]);
  const {
    0: mileageList,
    1: setMileageList
  } = Object(external_react_["useState"])([]);
  const {
    0: contractList,
    1: setContractList
  } = Object(external_react_["useState"])([]);
  const {
    0: rentalList,
    1: setRentalList
  } = Object(external_react_["useState"])([]);
  const {
    0: budgetList,
    1: setBudgetList
  } = Object(external_react_["useState"])([]);

  const handlePostcodeSubmit = () => {
    let enteredPostcode = postcodeRef.current.value.toLowerCase();

    if (Object(helpers["b" /* FormatValidatePostcode */])(enteredPostcode)) {
      updateUserPostcode(Object(helpers["a" /* AddSpaceToPostcode */])(enteredPostcode));
    } else {
      updateUserPostcode(null);
    }
  };

  const handlePostcodeCheck = evt => {
    if (evt.target.value === '') {
      updateUserPostcode(null);
    }
  };

  const handleTypeChange = searchType => {
    var _vehicleFilters$searc;

    if ((searchType === null || searchType === void 0 ? void 0 : searchType.id) === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$searc = vehicleFilters.searchType) === null || _vehicleFilters$searc === void 0 ? void 0 : _vehicleFilters$searc.id)) {
      handleFilterUpdate("searchType", defaultSelected);
      handleFilterUpdate("isSpecial", "");
      handleFilterUpdate("isInStock", "");
    } else {
      handleFilterUpdate("searchType", searchType);

      if ((searchType === null || searchType === void 0 ? void 0 : searchType.id) === 'offers') {
        handleFilterUpdate("isSpecial", true);
        handleFilterUpdate("isInStock", "");
      } else if ((searchType === null || searchType === void 0 ? void 0 : searchType.id) === 'stock') {
        handleFilterUpdate("isSpecial", "");
        handleFilterUpdate("isInStock", true);
      } else {
        handleFilterUpdate("isSpecial", "");
        handleFilterUpdate("isInStock", "");
      }
    }
  };

  const handleBudgetChange = priceTo => {
    var _vehicleFilters$price;

    if ((priceTo === null || priceTo === void 0 ? void 0 : priceTo.id) === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$price = vehicleFilters.priceTo) === null || _vehicleFilters$price === void 0 ? void 0 : _vehicleFilters$price.id)) {
      handleFilterUpdate("priceTo", defaultSelected);
    } else {
      handleFilterUpdate("priceTo", priceTo);
    }
  };

  const handleMakeChange = make => {
    if (make === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.manufacturerUrl)) {
      handleFilterUpdate("manufacturerUrl", '');
    } else {
      handleFilterUpdate("manufacturerUrl", make);
    }

    handleFilterUpdate("modelUrl", '');
    handleFilterUpdate("shortDerTextUrl", defaultSelected);
  };

  const handleModelChange = model => {
    if (model === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.modelUrl)) {
      handleFilterUpdate("modelUrl", '');
    } else {
      handleFilterUpdate("modelUrl", model);
    }

    handleFilterUpdate("shortDerTextUrl", defaultSelected);
  };

  const handleTrimChange = shortDerTextUrl => {
    var _vehicleFilters$short;

    if ((shortDerTextUrl === null || shortDerTextUrl === void 0 ? void 0 : shortDerTextUrl.id) === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$short = vehicleFilters.shortDerTextUrl) === null || _vehicleFilters$short === void 0 ? void 0 : _vehicleFilters$short.id)) {
      handleFilterUpdate("shortDerTextUrl", defaultSelected);
    } else {
      handleFilterUpdate("shortDerTextUrl", shortDerTextUrl);
    }
  };

  const handleFuelChange = fuelType => {
    var _vehicleFilters$fuelT;

    if ((fuelType === null || fuelType === void 0 ? void 0 : fuelType.id) === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$fuelT = vehicleFilters.fuelType) === null || _vehicleFilters$fuelT === void 0 ? void 0 : _vehicleFilters$fuelT.id)) {
      handleFilterUpdate("fuelType", defaultSelected);
    } else {
      handleFilterUpdate("fuelType", fuelType);
    }
  };

  const handleGearboxChange = transmission => {
    var _vehicleFilters$trans;

    if ((transmission === null || transmission === void 0 ? void 0 : transmission.id) === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$trans = vehicleFilters.transmission) === null || _vehicleFilters$trans === void 0 ? void 0 : _vehicleFilters$trans.id)) {
      handleFilterUpdate("transmission", defaultSelected);
    } else {
      handleFilterUpdate("transmission", transmission);
    }
  };

  const handleDriveTrainChange = driveTrain => {
    var _vehicleFilters$drive;

    if ((driveTrain === null || driveTrain === void 0 ? void 0 : driveTrain.id) === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$drive = vehicleFilters.driveTrain) === null || _vehicleFilters$drive === void 0 ? void 0 : _vehicleFilters$drive.id)) {
      handleFilterUpdate("driveTrain", defaultSelected);
    } else {
      handleFilterUpdate("driveTrain", driveTrain);
    }
  };

  const handleVehicleStyleChange = vehicleStyle => {
    var _vehicleFilters$vehic;

    if ((vehicleStyle === null || vehicleStyle === void 0 ? void 0 : vehicleStyle.id) === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic = vehicleFilters.vehicleStyle) === null || _vehicleFilters$vehic === void 0 ? void 0 : _vehicleFilters$vehic.id)) {
      handleFilterUpdate("vehicleStyle", defaultSelected);
    } else {
      handleFilterUpdate("vehicleStyle", vehicleStyle);
    }
  };

  const handleVehicleSizeChange = vehicleSize => {
    var _vehicleFilters$vehic2;

    if ((vehicleSize === null || vehicleSize === void 0 ? void 0 : vehicleSize.id) === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic2 = vehicleFilters.vehicleSize) === null || _vehicleFilters$vehic2 === void 0 ? void 0 : _vehicleFilters$vehic2.id)) {
      handleFilterUpdate("vehicleSize", defaultSelected);
    } else {
      handleFilterUpdate("vehicleSize", vehicleSize);
    }
  };

  const handleSeatChange = seats => {
    var _vehicleFilters$seats;

    if ((seats === null || seats === void 0 ? void 0 : seats.id) === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$seats = vehicleFilters.seats) === null || _vehicleFilters$seats === void 0 ? void 0 : _vehicleFilters$seats.id)) {
      handleFilterUpdate("seats", defaultSelected);
    } else {
      handleFilterUpdate("seats", seats);
    }
  };

  const handleEngineChange = engineSize => {
    var _vehicleFilters$engin;

    if ((engineSize === null || engineSize === void 0 ? void 0 : engineSize.id) === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$engin = vehicleFilters.engineSize) === null || _vehicleFilters$engin === void 0 ? void 0 : _vehicleFilters$engin.id)) {
      handleFilterUpdate("engineSize", defaultSelected);
    } else {
      handleFilterUpdate("engineSize", engineSize);
    }
  };

  const handleMpgChange = mpg => {
    var _vehicleFilters$mpg;

    if ((mpg === null || mpg === void 0 ? void 0 : mpg.id) === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$mpg = vehicleFilters.mpg) === null || _vehicleFilters$mpg === void 0 ? void 0 : _vehicleFilters$mpg.id)) {
      handleFilterUpdate("mpg", defaultSelected);
    } else {
      handleFilterUpdate("mpg", mpg);
    }
  };

  const handleC02Change = co2 => {
    var _vehicleFilters$co;

    if ((co2 === null || co2 === void 0 ? void 0 : co2.id) === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$co = vehicleFilters.co2) === null || _vehicleFilters$co === void 0 ? void 0 : _vehicleFilters$co.id)) {
      handleFilterUpdate("co2", defaultSelected);
    } else {
      handleFilterUpdate("co2", co2);
    }
  };

  const handleMileageChange = mileage => handleFilterUpdate("mileage", mileage);

  const handleTermChange = term => {
    var _vehicleFilters$term;

    if ((term === null || term === void 0 ? void 0 : term.id) === (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$term = vehicleFilters.term) === null || _vehicleFilters$term === void 0 ? void 0 : _vehicleFilters$term.id)) {
      handleFilterUpdate("term", defaultSelected);
    } else {
      handleFilterUpdate("term", term);
    }
  };

  const handleInitialRentalChange = initialRental => handleFilterUpdate("initialRental", initialRental); // Update filter dispatch function


  function handleFilterUpdate(name, value) {
    if (name === "searchType" || name === "priceTo") {
      dispatch({
        type: 'UPDATE_FILTERS',
        filterName: "manufacturerUrl",
        filterValue: ''
      });
      dispatch({
        type: 'UPDATE_FILTERS',
        filterName: "modelUrl",
        filterValue: ''
      });
      dispatch({
        type: 'UPDATE_FILTERS',
        filterName: "shortDerTextUrl",
        filterValue: defaultSelected
      });
    }

    dispatch({
      type: 'UPDATE_FILTERS',
      filterName: name,
      filterValue: value
    });
  } // Get model list and set trim to default on make change


  Object(external_react_["useEffect"])(() => {
    if (vehicleFilters !== null && vehicleFilters !== void 0 && vehicleFilters.manufacturerUrl) {
      var _vehicleFilters$term2, _vehicleFilters$initi, _vehicleFilters$milea, _vehicleFilters$fuelT2, _vehicleFilters$trans2, _vehicleFilters$co2, _vehicleFilters$mpg2, _vehicleFilters$seats2, _vehicleFilters$drive2, _vehicleFilters$vehic3, _vehicleFilters$vehic4, _vehicleFilters$engin2, _vehicleFilters$price2;

      //TODO: remove NaN values from request
      const vehicleFilter = {
        pricingType: pricingType,
        postcode: userPostcode,
        leasingDealType: leaseDealType,
        vehicleType: vehicleType,
        manufacturerUrl: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.manufacturerUrl,
        term: parseInt(vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$term2 = vehicleFilters.term) === null || _vehicleFilters$term2 === void 0 ? void 0 : _vehicleFilters$term2.id),
        initialRentals: parseInt(vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$initi = vehicleFilters.initialRental) === null || _vehicleFilters$initi === void 0 ? void 0 : _vehicleFilters$initi.id),
        mileage: parseInt(vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$milea = vehicleFilters.mileage) === null || _vehicleFilters$milea === void 0 ? void 0 : _vehicleFilters$milea.id),
        fuelType: parseInt(vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$fuelT2 = vehicleFilters.fuelType) === null || _vehicleFilters$fuelT2 === void 0 ? void 0 : _vehicleFilters$fuelT2.id),
        transmission: parseInt(vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$trans2 = vehicleFilters.transmission) === null || _vehicleFilters$trans2 === void 0 ? void 0 : _vehicleFilters$trans2.id),
        co2: parseInt(vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$co2 = vehicleFilters.co2) === null || _vehicleFilters$co2 === void 0 ? void 0 : _vehicleFilters$co2.id),
        mpg: parseInt(vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$mpg2 = vehicleFilters.mpg) === null || _vehicleFilters$mpg2 === void 0 ? void 0 : _vehicleFilters$mpg2.id),
        seats: parseInt(vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$seats2 = vehicleFilters.seats) === null || _vehicleFilters$seats2 === void 0 ? void 0 : _vehicleFilters$seats2.id),
        driveTrain: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$drive2 = vehicleFilters.driveTrain) === null || _vehicleFilters$drive2 === void 0 ? void 0 : _vehicleFilters$drive2.id,
        vehicleSize: parseInt(vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic3 = vehicleFilters.vehicleSize) === null || _vehicleFilters$vehic3 === void 0 ? void 0 : _vehicleFilters$vehic3.id),
        vehicleStyle: parseInt(vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic4 = vehicleFilters.vehicleStyle) === null || _vehicleFilters$vehic4 === void 0 ? void 0 : _vehicleFilters$vehic4.id),
        engineSize: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$engin2 = vehicleFilters.engineSize) === null || _vehicleFilters$engin2 === void 0 ? void 0 : _vehicleFilters$engin2.id,
        priceTo: parseInt(vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$price2 = vehicleFilters.priceTo) === null || _vehicleFilters$price2 === void 0 ? void 0 : _vehicleFilters$price2.id),
        isInStock: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.isInStock,
        isSpecial: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.isSpecial
      };
      Object(vehicleService["b" /* GetAvailableShortModels */])(vehicleFilter).then(data => {
        setModelList(data.data);
      });
    }
  }, [vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.manufacturerUrl]); // Get filter data on all filter changes

  Object(external_react_["useEffect"])(() => {
    var _vehicleFilters$term3, _vehicleFilters$initi2, _vehicleFilters$milea2, _vehicleFilters$fuelT3, _vehicleFilters$trans3, _vehicleFilters$co3, _vehicleFilters$mpg3, _vehicleFilters$seats3, _vehicleFilters$drive3, _vehicleFilters$vehic5, _vehicleFilters$vehic6, _vehicleFilters$engin3, _vehicleFilters$price3;

    // Get available make data
    Object(vehicleService["a" /* GetAvailableMakes */])(leaseDealType, vehicleType, vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$term3 = vehicleFilters.term) === null || _vehicleFilters$term3 === void 0 ? void 0 : _vehicleFilters$term3.id, vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$initi2 = vehicleFilters.initialRental) === null || _vehicleFilters$initi2 === void 0 ? void 0 : _vehicleFilters$initi2.id, vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$milea2 = vehicleFilters.mileage) === null || _vehicleFilters$milea2 === void 0 ? void 0 : _vehicleFilters$milea2.id, vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$fuelT3 = vehicleFilters.fuelType) === null || _vehicleFilters$fuelT3 === void 0 ? void 0 : _vehicleFilters$fuelT3.id, vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$trans3 = vehicleFilters.transmission) === null || _vehicleFilters$trans3 === void 0 ? void 0 : _vehicleFilters$trans3.id, vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$co3 = vehicleFilters.co2) === null || _vehicleFilters$co3 === void 0 ? void 0 : _vehicleFilters$co3.id, vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$mpg3 = vehicleFilters.mpg) === null || _vehicleFilters$mpg3 === void 0 ? void 0 : _vehicleFilters$mpg3.id, '', vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$seats3 = vehicleFilters.seats) === null || _vehicleFilters$seats3 === void 0 ? void 0 : _vehicleFilters$seats3.id, vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$drive3 = vehicleFilters.driveTrain) === null || _vehicleFilters$drive3 === void 0 ? void 0 : _vehicleFilters$drive3.id, vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic5 = vehicleFilters.vehicleSize) === null || _vehicleFilters$vehic5 === void 0 ? void 0 : _vehicleFilters$vehic5.id, vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic6 = vehicleFilters.vehicleStyle) === null || _vehicleFilters$vehic6 === void 0 ? void 0 : _vehicleFilters$vehic6.id, vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$engin3 = vehicleFilters.engineSize) === null || _vehicleFilters$engin3 === void 0 ? void 0 : _vehicleFilters$engin3.id, '', vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$price3 = vehicleFilters.priceTo) === null || _vehicleFilters$price3 === void 0 ? void 0 : _vehicleFilters$price3.id, vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.isInStock, vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.isSpecial, pricingType, userPostcode).then(data => {
      setMakesList(data.data);
    }); // Get available filter option data

    Object(vehicleService["ab" /* GetVehiclesFilterOptions */])(leaseDealType, vehicleType, vehicleFilters.manufacturerUrl, vehicleFilters.modelUrl, vehicleFilters.shortDerTextUrl.id, vehicleFilters.term.id, vehicleFilters.initialRental.id, vehicleFilters.mileage.id, vehicleFilters.fuelType.id, vehicleFilters.transmission.id, vehicleFilters.co2.id, vehicleFilters.mpg.id, vehicleFilters.doors.id, vehicleFilters.seats.id, vehicleFilters.driveTrain.id, vehicleFilters.vehicleSize.id, vehicleFilters.vehicleStyle.id, vehicleFilters.engineSize.id, vehicleFilters.priceFrom.id, vehicleFilters.priceTo.id, vehicleFilters.isInStock, vehicleFilters.isSpecial, pricingType, userPostcode).then(function (data) {
      //TODO: error handling
      let fuelTypes = null;
      let transmission = null;
      let driveTrain = null;
      let seats = null;
      let mileage = null;
      let co2 = null;
      let mpg = null;
      let engineSize = null;
      let vehicleSize = null;
      let vehicleStyle = null;
      let price = null;
      let trimLevel = [];

      if (data.data) {
        handleVehicleCountUpdate(data.data.count); // Filter API request

        fuelTypes = data.data.counts.fuelType;
        transmission = data.data.counts.transmission;
        driveTrain = data.data.counts.driveTrain;
        seats = data.data.counts.seats;
        mileage = data.data.counts.mileage;
        co2 = data.data.counts.co2;
        mpg = data.data.counts.mpg;
        engineSize = data.data.counts.engineSize;
        vehicleSize = data.data.counts.vehicleSize;
        vehicleStyle = data.data.counts.vehicleStyle;
        price = data.data.counts.price;

        if (vehicleFilters !== null && vehicleFilters !== void 0 && vehicleFilters.manufacturerUrl && vehicleFilters !== null && vehicleFilters !== void 0 && vehicleFilters.modelUrl) {
          trimLevel = data.data.counts.trimLevel;
        }
      } else {
        handleVehicleCountUpdate(0);
      } // Set filter list values


      setSeatList(seats);
      setMpgList(mpg);
      setC02List(co2);
      setDriveTrainList(driveTrain);
      setEngizeSizeList(engineSize);
      setTransmissionList(transmission);
      setFuelTypesList(fuelTypes);
      setVehicleSizeList(vehicleSize);
      setVehicleStyleList(vehicleStyle);
      setMileageList(mileage);
      setBudgetList(price);
      setTrimList(trimLevel); //TODO: Should it be static? if so set only 1 time on modal show?

      setContractList(Object(vehicleService["h" /* GetContractValues */])());
      setRentalList(Object(vehicleService["y" /* GetRentalValues */])());
    });
  }, [userPostcode, vehicleFilters]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${search_module_default.a['modal-panel']} ${active ? search_module_default.a['is-active'] : ''} flex-wrap align-items-center justify-content-start`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
      children: [isATC && /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
        selected: {
          id: userPostcode
        },
        autoclose: isATC && !userPostcode ? false : true,
        title: "Postcode",
        subtitle: userPostcode ? userPostcode : "AB12 3CD",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
            className: search_module_default.a['is-postcode'],
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              ref: postcodeRef,
              type: "text",
              className: "form-control m-0",
              defaultValue: userPostcode,
              placeholder: "AB12 3CD",
              onChange: evt => handlePostcodeCheck(evt)
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "button",
              className: "btn",
              onClick: () => handlePostcodeSubmit(),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                width: "8",
                height: "16",
                icon: pro_regular_svg_icons_["faSearch"]
              })
            })]
          }), !userPostcode && /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: search_module_default.a['is-postcode'],
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
              className: "d-block invalid-feedback",
              children: ["Sorry, we can't find that postcode please check and try again. If the postcode is correct, please call us on ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                "aria-label": "Phone number",
                className: "text-red",
                href: `tel:${Object(helpers["g" /* GetPhoneNumber */])(isInternal)}`,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: "phonenumber_call_now text-red",
                  children: Object(helpers["g" /* GetPhoneNumber */])(isInternal)
                })
              }), " for a quote."]
            })
          })]
        })
      }), (isATC && userPostcode || !isATC) && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
          selected: vehicleFilters.searchType,
          title: "Search Type",
          subtitle: vehicleFilters.searchType.name ? vehicleFilters.searchType.name : "All, Special Offers, Stock",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
              onClick: () => handleTypeChange({
                id: '',
                name: ''
              }),
              className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$searc2 = vehicleFilters.searchType) === null || _vehicleFilters$searc2 === void 0 ? void 0 : _vehicleFilters$searc2.id) === '' ? search_module_default.a['is-active'] : '',
              children: ["Search", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                children: "\xA0all\xA0"
              }), "vehicles"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
              onClick: () => handleTypeChange({
                id: 'offers',
                name: 'Search special offers only'
              }),
              className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$searc3 = vehicleFilters.searchType) === null || _vehicleFilters$searc3 === void 0 ? void 0 : _vehicleFilters$searc3.id) === 'offers' ? search_module_default.a['is-active'] : '',
              children: ["Search", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                children: "\xA0special offers\xA0"
              }), "only"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
              onClick: () => handleTypeChange({
                id: 'stock',
                name: 'Search stock only'
              }),
              className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$searc4 = vehicleFilters.searchType) === null || _vehicleFilters$searc4 === void 0 ? void 0 : _vehicleFilters$searc4.id) === 'stock' ? search_module_default.a['is-active'] : '',
              children: ["Search", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                children: "\xA0stock\xA0"
              }), "only"]
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
          selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.priceTo,
          title: "Budget",
          subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$price4 = vehicleFilters.priceTo) !== null && _vehicleFilters$price4 !== void 0 && _vehicleFilters$price4.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$price5 = vehicleFilters.priceTo) === null || _vehicleFilters$price5 === void 0 ? void 0 : _vehicleFilters$price5.name : "£200 per month",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              onClick: () => handleBudgetChange({
                id: '',
                name: ''
              }),
              className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$price6 = vehicleFilters.priceTo) === null || _vehicleFilters$price6 === void 0 ? void 0 : _vehicleFilters$price6.id) === '' ? search_module_default.a['is-active'] : '',
              children: "Show me everything"
            }), budgetList === null || budgetList === void 0 ? void 0 : budgetList.map((budget, index) => {
              var _vehicleFilters$price7;

              return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                onClick: () => handleBudgetChange({
                  id: budget.value,
                  name: `Up to £${budget.value}`
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$price7 = vehicleFilters.priceTo) === null || _vehicleFilters$price7 === void 0 ? void 0 : _vehicleFilters$price7.id) == budget.value ? search_module_default.a['is-active'] : '',
                children: ["Up to \xA3", budget.value]
              }, index);
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
          selected: {
            id: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.manufacturerUrl
          },
          title: "Make",
          subtitle: makesList !== null && makesList !== void 0 && (_makesList$find = makesList.find(x => {
            var _x$manufacturerUrl, _vehicleFilters$manuf;

            return ((_x$manufacturerUrl = x.manufacturerUrl) === null || _x$manufacturerUrl === void 0 ? void 0 : _x$manufacturerUrl.toLowerCase()) == (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$manuf = vehicleFilters.manufacturerUrl) === null || _vehicleFilters$manuf === void 0 ? void 0 : _vehicleFilters$manuf.toLowerCase());
          })) !== null && _makesList$find !== void 0 && _makesList$find.manufacturer ? makesList === null || makesList === void 0 ? void 0 : (_makesList$find2 = makesList.find(x => {
            var _x$manufacturerUrl2, _vehicleFilters$manuf2;

            return ((_x$manufacturerUrl2 = x.manufacturerUrl) === null || _x$manufacturerUrl2 === void 0 ? void 0 : _x$manufacturerUrl2.toLowerCase()) == (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$manuf2 = vehicleFilters.manufacturerUrl) === null || _vehicleFilters$manuf2 === void 0 ? void 0 : _vehicleFilters$manuf2.toLowerCase());
          })) === null || _makesList$find2 === void 0 ? void 0 : _makesList$find2.manufacturer : "BMW, VW, Ford",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              onClick: () => handleMakeChange(''),
              className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.manufacturerUrl) == '' ? search_module_default.a['is-active'] : '',
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                className: "d-flex flex-nowrap justify-content-center align-items-center",
                children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                  icon: free_solid_svg_icons_["faInfinity"]
                }), "All Makes"]
              })
            }), makesList === null || makesList === void 0 ? void 0 : makesList.map((make, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              onClick: () => handleMakeChange(make.manufacturerUrl),
              className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.manufacturerUrl) == make.manufacturerUrl ? search_module_default.a['is-active'] : '',
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                className: "d-flex flex-nowrap justify-content-center align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/makes/${make.manufacturerUrl}.svg`,
                  className: "img-fluid lazyload",
                  alt: make.manufacturer
                }), Object(helpers["d" /* GetFriendlyName */])(make.manufacturer)]
              })
            }, index))]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
          selected: {
            id: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.modelUrl
          },
          title: "Model",
          subtitle: (_modelList$find = modelList.find(x => x.shortModTextUrl == (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.modelUrl))) !== null && _modelList$find !== void 0 && _modelList$find.shortModText ? (_modelList$find2 = modelList.find(x => x.shortModTextUrl == (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.modelUrl))) === null || _modelList$find2 === void 0 ? void 0 : _modelList$find2.shortModText : "3 Series, Golf, Focus",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              onClick: () => handleModelChange(''),
              className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.modelUrl) == '' ? search_module_default.a['is-active'] : '',
              children: "All Models"
            }), modelList === null || modelList === void 0 ? void 0 : modelList.map((model, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              onClick: () => handleModelChange(model.shortModTextUrl),
              className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.modelUrl) == model.shortModTextUrl ? search_module_default.a['is-active'] : '',
              children: model.shortModText
            }, index))]
          })
        }), leaseDealType !== LeasingDealTypes["a" /* LeasingDealTypes */].Van && /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
          selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.shortDerTextUrl,
          title: "Trim Level",
          subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$short2 = vehicleFilters.shortDerTextUrl) !== null && _vehicleFilters$short2 !== void 0 && _vehicleFilters$short2.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$short3 = vehicleFilters.shortDerTextUrl) === null || _vehicleFilters$short3 === void 0 ? void 0 : _vehicleFilters$short3.name : "SE, M Sport, S Line",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              onClick: evt => handleTrimChange({
                id: '',
                name: ''
              }),
              className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$short4 = vehicleFilters.shortDerTextUrl) === null || _vehicleFilters$short4 === void 0 ? void 0 : _vehicleFilters$short4.id) === '' ? search_module_default.a['is-active'] : '',
              children: "Any"
            }), trimList === null || trimList === void 0 ? void 0 : trimList.map((trim, index) => {
              var _vehicleFilters$short5;

              return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: evt => handleTrimChange({
                  id: trim.value,
                  name: trim.name
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$short5 = vehicleFilters.shortDerTextUrl) === null || _vehicleFilters$short5 === void 0 ? void 0 : _vehicleFilters$short5.id) == trim.value ? search_module_default.a['is-active'] : '',
                children: trim.name
              }, index);
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
          selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.fuelType,
          title: "Fuel Type",
          subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$fuelT4 = vehicleFilters.fuelType) !== null && _vehicleFilters$fuelT4 !== void 0 && _vehicleFilters$fuelT4.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$fuelT5 = vehicleFilters.fuelType) === null || _vehicleFilters$fuelT5 === void 0 ? void 0 : _vehicleFilters$fuelT5.name : "Diesel, Petrol, Hybrid",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              onClick: () => handleFuelChange({
                id: '',
                name: ''
              }),
              className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$fuelT6 = vehicleFilters.fuelType) === null || _vehicleFilters$fuelT6 === void 0 ? void 0 : _vehicleFilters$fuelT6.id) === '' ? search_module_default.a['is-active'] : '',
              children: "Any"
            }), fuelTypesList === null || fuelTypesList === void 0 ? void 0 : fuelTypesList.map((fuelType, index) => {
              var _vehicleFilters$fuelT7;

              return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: () => handleFuelChange({
                  id: fuelType.value,
                  name: fuelType.name
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$fuelT7 = vehicleFilters.fuelType) === null || _vehicleFilters$fuelT7 === void 0 ? void 0 : _vehicleFilters$fuelT7.id) == fuelType.value ? search_module_default.a['is-active'] : '',
                children: fuelType.name
              }, index);
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
          selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.transmission,
          title: "Gearbox",
          subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$trans4 = vehicleFilters.transmission) !== null && _vehicleFilters$trans4 !== void 0 && _vehicleFilters$trans4.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$trans5 = vehicleFilters.transmission) === null || _vehicleFilters$trans5 === void 0 ? void 0 : _vehicleFilters$trans5.name : "Manual, Auto",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              onClick: () => handleGearboxChange({
                id: '',
                name: ''
              }),
              className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$trans6 = vehicleFilters.transmission) === null || _vehicleFilters$trans6 === void 0 ? void 0 : _vehicleFilters$trans6.id) === '' ? search_module_default.a['is-active'] : '',
              children: "Any"
            }), transmissionList === null || transmissionList === void 0 ? void 0 : transmissionList.map((transmission, index) => {
              var _vehicleFilters$trans7;

              return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: () => handleGearboxChange({
                  id: transmission.value,
                  name: transmission.name
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$trans7 = vehicleFilters.transmission) === null || _vehicleFilters$trans7 === void 0 ? void 0 : _vehicleFilters$trans7.id) == transmission.value ? search_module_default.a['is-active'] : '',
                children: transmission.name
              }, index);
            })]
          })
        }), leaseDealType !== LeasingDealTypes["a" /* LeasingDealTypes */].Van && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
            selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.driveTrain,
            title: "Drive Trains",
            subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$drive4 = vehicleFilters.driveTrain) !== null && _vehicleFilters$drive4 !== void 0 && _vehicleFilters$drive4.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$drive5 = vehicleFilters.driveTrain) === null || _vehicleFilters$drive5 === void 0 ? void 0 : _vehicleFilters$drive5.name : "2WD",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: () => handleDriveTrainChange({
                  id: '',
                  name: ''
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$drive6 = vehicleFilters.driveTrain) === null || _vehicleFilters$drive6 === void 0 ? void 0 : _vehicleFilters$drive6.id) === '' ? search_module_default.a['is-active'] : '',
                children: "Any"
              }), driveTrainList === null || driveTrainList === void 0 ? void 0 : driveTrainList.map((driveTrain, index) => {
                var _vehicleFilters$drive7;

                return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  onClick: () => handleDriveTrainChange({
                    id: driveTrain.value,
                    name: driveTrain.name
                  }),
                  className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$drive7 = vehicleFilters.driveTrain) === null || _vehicleFilters$drive7 === void 0 ? void 0 : _vehicleFilters$drive7.id) == driveTrain.value ? search_module_default.a['is-active'] : '',
                  children: driveTrain.name
                }, index);
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
            selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.vehicleStyle,
            title: "Body Type",
            subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$vehic7 = vehicleFilters.vehicleStyle) !== null && _vehicleFilters$vehic7 !== void 0 && _vehicleFilters$vehic7.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic8 = vehicleFilters.vehicleStyle) === null || _vehicleFilters$vehic8 === void 0 ? void 0 : _vehicleFilters$vehic8.name : "Saloon, Coupe, Estate",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: () => handleVehicleStyleChange({
                  id: '',
                  name: ''
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic9 = vehicleFilters.vehicleStyle) === null || _vehicleFilters$vehic9 === void 0 ? void 0 : _vehicleFilters$vehic9.id) === '' ? search_module_default.a['is-active'] : '',
                children: "Any"
              }), vehicleStyleList === null || vehicleStyleList === void 0 ? void 0 : vehicleStyleList.map((vehicleStyle, index) => {
                var _vehicleFilters$vehic10;

                return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  onClick: () => handleVehicleStyleChange({
                    id: vehicleStyle.value,
                    name: vehicleStyle.name
                  }),
                  className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic10 = vehicleFilters.vehicleStyle) === null || _vehicleFilters$vehic10 === void 0 ? void 0 : _vehicleFilters$vehic10.id) == vehicleStyle.value ? search_module_default.a['is-active'] : '',
                  children: vehicleStyle.name
                }, index);
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
            selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.vehicleSize,
            title: "Vehicle Size",
            subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$vehic11 = vehicleFilters.vehicleSize) !== null && _vehicleFilters$vehic11 !== void 0 && _vehicleFilters$vehic11.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic12 = vehicleFilters.vehicleSize) === null || _vehicleFilters$vehic12 === void 0 ? void 0 : _vehicleFilters$vehic12.name : "Large, Medium or Small",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: () => handleVehicleSizeChange({
                  id: '',
                  name: ''
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic13 = vehicleFilters.vehicleSize) === null || _vehicleFilters$vehic13 === void 0 ? void 0 : _vehicleFilters$vehic13.id) === '' ? search_module_default.a['is-active'] : '',
                children: "Any"
              }), vehicleSizeList === null || vehicleSizeList === void 0 ? void 0 : vehicleSizeList.map((vehicleSize, index) => {
                var _vehicleFilters$vehic14;

                return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  onClick: () => handleVehicleSizeChange({
                    id: vehicleSize.value,
                    name: vehicleSize === null || vehicleSize === void 0 ? void 0 : vehicleSize.name
                  }),
                  className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic14 = vehicleFilters.vehicleSize) === null || _vehicleFilters$vehic14 === void 0 ? void 0 : _vehicleFilters$vehic14.id) == vehicleSize.value ? search_module_default.a['is-active'] : '',
                  children: vehicleSize.name
                }, index);
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
            selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.seats,
            title: "Seats",
            subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$seats4 = vehicleFilters.seats) !== null && _vehicleFilters$seats4 !== void 0 && _vehicleFilters$seats4.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$seats5 = vehicleFilters.seats) === null || _vehicleFilters$seats5 === void 0 ? void 0 : _vehicleFilters$seats5.name : "4",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: () => handleSeatChange({
                  id: '',
                  name: ''
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$seats6 = vehicleFilters.seats) === null || _vehicleFilters$seats6 === void 0 ? void 0 : _vehicleFilters$seats6.id) == '' ? search_module_default.a['is-active'] : '',
                children: "Any"
              }), seatList === null || seatList === void 0 ? void 0 : seatList.map((seat, index) => {
                var _vehicleFilters$seats7;

                return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  onClick: () => handleSeatChange({
                    id: seat.value,
                    name: seat.name
                  }),
                  className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$seats7 = vehicleFilters.seats) === null || _vehicleFilters$seats7 === void 0 ? void 0 : _vehicleFilters$seats7.id) == seat.value ? search_module_default.a['is-active'] : '',
                  children: seat.name
                }, index);
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
            selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.engineSize,
            title: "Engine Sizes",
            subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$engin4 = vehicleFilters.engineSize) !== null && _vehicleFilters$engin4 !== void 0 && _vehicleFilters$engin4.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$engin5 = vehicleFilters.engineSize) === null || _vehicleFilters$engin5 === void 0 ? void 0 : _vehicleFilters$engin5.name : "2.0L",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: () => handleEngineChange({
                  id: '',
                  name: ''
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$engin6 = vehicleFilters.engineSize) === null || _vehicleFilters$engin6 === void 0 ? void 0 : _vehicleFilters$engin6.id) === '' ? search_module_default.a['is-active'] : '',
                children: "Any"
              }), vehicleSizelist === null || vehicleSizelist === void 0 ? void 0 : vehicleSizelist.map((engine, index) => {
                var _vehicleFilters$engin7;

                return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  onClick: () => handleEngineChange({
                    id: engine.value,
                    name: engine.name
                  }),
                  className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$engin7 = vehicleFilters.engineSize) === null || _vehicleFilters$engin7 === void 0 ? void 0 : _vehicleFilters$engin7.id) == engine.value ? search_module_default.a['is-active'] : '',
                  children: engine.name
                }, index);
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
            selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.mpg,
            title: "MPG",
            subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$mpg4 = vehicleFilters.mpg) !== null && _vehicleFilters$mpg4 !== void 0 && _vehicleFilters$mpg4.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$mpg5 = vehicleFilters.mpg) === null || _vehicleFilters$mpg5 === void 0 ? void 0 : _vehicleFilters$mpg5.name : "50+",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: () => handleMpgChange({
                  id: '',
                  name: ''
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$mpg6 = vehicleFilters.mpg) === null || _vehicleFilters$mpg6 === void 0 ? void 0 : _vehicleFilters$mpg6.id) === '' ? search_module_default.a['is-active'] : '',
                children: "0+"
              }), mpgList === null || mpgList === void 0 ? void 0 : mpgList.map((mpg, index) => {
                var _vehicleFilters$mpg7;

                return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  onClick: () => handleMpgChange({
                    id: mpg.value,
                    name: mpg.name
                  }),
                  className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$mpg7 = vehicleFilters.mpg) === null || _vehicleFilters$mpg7 === void 0 ? void 0 : _vehicleFilters$mpg7.id) == mpg.value ? search_module_default.a['is-active'] : '',
                  children: mpg.name ? mpg.name : "0+"
                }, index);
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
            selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.co2,
            title: "CO2",
            subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$co4 = vehicleFilters.co2) !== null && _vehicleFilters$co4 !== void 0 && _vehicleFilters$co4.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$co5 = vehicleFilters.co2) === null || _vehicleFilters$co5 === void 0 ? void 0 : _vehicleFilters$co5.name : "<300",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: () => handleC02Change({
                  id: '',
                  name: ''
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$co6 = vehicleFilters.co2) === null || _vehicleFilters$co6 === void 0 ? void 0 : _vehicleFilters$co6.id) === '' ? search_module_default.a['is-active'] : '',
                children: "Any"
              }), c02List === null || c02List === void 0 ? void 0 : c02List.map((c02, index) => {
                var _vehicleFilters$co7;

                return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  onClick: () => handleC02Change({
                    id: c02.value,
                    name: c02.name
                  }),
                  className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$co7 = vehicleFilters.co2) === null || _vehicleFilters$co7 === void 0 ? void 0 : _vehicleFilters$co7.id) == c02.value ? search_module_default.a['is-active'] : '',
                  children: c02.name
                }, index);
              })]
            })
          })]
        }), leaseDealType === LeasingDealTypes["a" /* LeasingDealTypes */].Van && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
            selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.vehicleStyle,
            title: "Body Type",
            subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$vehic15 = vehicleFilters.vehicleStyle) !== null && _vehicleFilters$vehic15 !== void 0 && _vehicleFilters$vehic15.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic16 = vehicleFilters.vehicleStyle) === null || _vehicleFilters$vehic16 === void 0 ? void 0 : _vehicleFilters$vehic16.name : "Saloon, Coupe, Estate",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: () => handleVehicleStyleChange({
                  id: '',
                  name: ''
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic17 = vehicleFilters.vehicleStyle) === null || _vehicleFilters$vehic17 === void 0 ? void 0 : _vehicleFilters$vehic17.id) == '' ? search_module_default.a['is-active'] : '',
                children: "Any"
              }), vehicleStyleList === null || vehicleStyleList === void 0 ? void 0 : vehicleStyleList.map((vehicleStyle, index) => {
                var _vehicleFilters$vehic18;

                return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  onClick: () => handleVehicleStyleChange({
                    id: vehicleStyle.value,
                    name: vehicleStyle.name
                  }),
                  className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic18 = vehicleFilters.vehicleStyle) === null || _vehicleFilters$vehic18 === void 0 ? void 0 : _vehicleFilters$vehic18.id) === vehicleStyle.value ? search_module_default.a['is-active'] : '',
                  children: vehicleStyle.name
                }, index);
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
            selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.vehicleSize,
            title: "Vehicle Size",
            subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$vehic19 = vehicleFilters.vehicleSize) !== null && _vehicleFilters$vehic19 !== void 0 && _vehicleFilters$vehic19.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic20 = vehicleFilters.vehicleSize) === null || _vehicleFilters$vehic20 === void 0 ? void 0 : _vehicleFilters$vehic20.name : "Large, Medium or Small",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: () => handleVehicleSizeChange({
                  id: '',
                  name: ''
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic21 = vehicleFilters.vehicleSize) === null || _vehicleFilters$vehic21 === void 0 ? void 0 : _vehicleFilters$vehic21.id) === '' ? search_module_default.a['is-active'] : '',
                children: "Any"
              }), vehicleSizeList === null || vehicleSizeList === void 0 ? void 0 : vehicleSizeList.map((vehicleSize, index) => {
                var _vehicleFilters$vehic22;

                return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  onClick: () => handleVehicleSizeChange({
                    id: vehicleSize.value,
                    name: vehicleSize === null || vehicleSize === void 0 ? void 0 : vehicleSize.name
                  }),
                  className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$vehic22 = vehicleFilters.vehicleSize) === null || _vehicleFilters$vehic22 === void 0 ? void 0 : _vehicleFilters$vehic22.id) == vehicleSize.value ? search_module_default.a['is-active'] : '',
                  children: vehicleSize.name
                }, index);
              })]
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
          selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.mileage,
          title: "Annual Mileage",
          subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$milea3 = vehicleFilters.mileage) !== null && _vehicleFilters$milea3 !== void 0 && _vehicleFilters$milea3.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$milea4 = vehicleFilters.mileage) === null || _vehicleFilters$milea4 === void 0 ? void 0 : _vehicleFilters$milea4.name : "8,000 Miles",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
            children: mileageList === null || mileageList === void 0 ? void 0 : mileageList.map((mileage, index) => {
              var _vehicleFilters$milea5;

              return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: evt => handleMileageChange({
                  id: mileage.value,
                  name: mileage.name
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$milea5 = vehicleFilters.mileage) === null || _vehicleFilters$milea5 === void 0 ? void 0 : _vehicleFilters$milea5.id) == mileage.value ? search_module_default.a['is-active'] : '',
                children: mileage.name
              }, index);
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
          selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.term,
          title: "Contract Length",
          subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$term4 = vehicleFilters.term) !== null && _vehicleFilters$term4 !== void 0 && _vehicleFilters$term4.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$term5 = vehicleFilters.term) === null || _vehicleFilters$term5 === void 0 ? void 0 : _vehicleFilters$term5.name : "2 Years",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
            children: contractList === null || contractList === void 0 ? void 0 : contractList.map((contract, index) => {
              var _vehicleFilters$term6;

              return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: evt => handleTermChange({
                  id: contract === null || contract === void 0 ? void 0 : contract.id,
                  name: contract.name
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$term6 = vehicleFilters.term) === null || _vehicleFilters$term6 === void 0 ? void 0 : _vehicleFilters$term6.id) == (contract === null || contract === void 0 ? void 0 : contract.id) ? search_module_default.a['is-active'] : '',
                children: contract.name
              }, index);
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_accordion, {
          selected: vehicleFilters === null || vehicleFilters === void 0 ? void 0 : vehicleFilters.initialRental,
          title: "Initial Rental",
          subtitle: vehicleFilters !== null && vehicleFilters !== void 0 && (_vehicleFilters$initi3 = vehicleFilters.initialRental) !== null && _vehicleFilters$initi3 !== void 0 && _vehicleFilters$initi3.name ? vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$initi4 = vehicleFilters.initialRental) === null || _vehicleFilters$initi4 === void 0 ? void 0 : _vehicleFilters$initi4.name : "3 Months",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
            children: rentalList === null || rentalList === void 0 ? void 0 : rentalList.map((rental, index) => {
              var _vehicleFilters$initi5;

              return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                onClick: evt => handleInitialRentalChange({
                  id: rental.id,
                  name: rental.name
                }),
                className: (vehicleFilters === null || vehicleFilters === void 0 ? void 0 : (_vehicleFilters$initi5 = vehicleFilters.initialRental) === null || _vehicleFilters$initi5 === void 0 ? void 0 : _vehicleFilters$initi5.id) == rental.id ? search_module_default.a['is-active'] : '',
                children: rental.name
              }, index);
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var search_detailed = (Object(external_react_redux_["connect"])(search_detailed_mapStateToProps, mapDispatchToProps)(SearchDetailed));
// EXTERNAL MODULE: ./enums/SearchPanels.tsx
var SearchPanels = __webpack_require__("brxi");

// EXTERNAL MODULE: ./environment/siteSettings.tsx
var siteSettings = __webpack_require__("PG61");

// CONCATENATED MODULE: ./components/search/search.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




















function search_mapStateToProps(state) {
  return {
    dealToggle: state.dealSelector,
    vehicleFilters: state.vehicleFilters,
    carManufacturerList: state.carManufacturerList,
    vanManufacturerList: state.vanManufacturerList,
    userPostcode: state.userPostcode
  };
}

const Search = (_ref) => {
  let {
    onRequestClose,
    title,
    activePanel = 1,
    dealToggle,
    carManufacturerList,
    vanManufacturerList,
    vehicleFilters,
    userPostcode
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["onRequestClose", "title", "activePanel", "dealToggle", "carManufacturerList", "vanManufacturerList", "vehicleFilters", "userPostcode"]);

  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: modalCtas,
    1: setmodalCtas
  } = Object(external_react_["useState"])(false);
  const {
    0: modalTitle,
    1: setModalTitle
  } = Object(external_react_["useState"])(title);
  const {
    0: currentPanel,
    1: setCurrentPanel
  } = Object(external_react_["useState"])(activePanel);
  const {
    0: currentMake,
    1: setCurrentMake
  } = Object(external_react_["useState"])('');
  const {
    0: vehicleCount,
    1: setVehicleCount
  } = Object(external_react_["useState"])(0);

  const handleTitleChange = title => {
    setModalTitle(title);
  };

  const handlePanelChange = (panel, title) => {
    setCurrentPanel(panel);
    handleTitleChange(title);

    if (panel === SearchPanels["a" /* SearchPanels */].SearchDetailed) {
      setmodalCtas(true);
    } else {
      setmodalCtas(false);
    }
  };

  const handleMakeUpdate = make => setCurrentMake(make);

  const handleBackButton = () => {
    if (currentPanel === SearchPanels["a" /* SearchPanels */].SearchModels && currentMake) {
      setCurrentMake('');
    } else {
      setCurrentPanel(SearchPanels["a" /* SearchPanels */].SearchButtons);
      handlePanelChange(SearchPanels["a" /* SearchPanels */].SearchButtons, title);
    }
  };

  const handleVehicleCountUpdate = count => setVehicleCount(count);

  const handleClearButton = () => {
    dispatch({
      type: 'RESET_POSTCODE'
    });
    dispatch({
      type: 'UPDATE_ALL_FILTERS',
      payload: {
        initialRentals: siteSettings["a" /* SiteSettings */].DefaultInitialRentals,
        mileage: siteSettings["a" /* SiteSettings */].GetDealTypeDefaultMileage(dealToggle)
      }
    });
  };

  Object(external_react_["useEffect"])(() => {
    if (activePanel === SearchPanels["a" /* SearchPanels */].SearchDetailed) {
      setmodalCtas(true);
    } else {
      setmodalCtas(false);
    }
  }, [activePanel]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Modal_default.a, _objectSpread(_objectSpread({
      onHide: onRequestClose,
      centered: true,
      className: `search-modal ${currentPanel === SearchPanels["a" /* SearchPanels */].SearchDetailed ? "search-modal--detailed" : ""}`
    }, otherProps), {}, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Header, {
        className: "d-flex flex-nowrap justify-content-center align-items-center",
        closeButton: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Modal_default.a.Title, {
          className: "text-center mb-0",
          children: [modalTitle, " ", !userPostcode && currentPanel > 1 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            width: "12",
            height: "24",
            icon: free_solid_svg_icons_["faChevronLeft"],
            onClick: () => handleBackButton()
          }) : null]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Body, {
        className: "modal-body--search p-0",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: search_module_default.a['vehicle-search'],
          children: [currentPanel === SearchPanels["a" /* SearchPanels */].SearchButtons && /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_buttons, {
            active: true,
            handlePanelChange: handlePanelChange
          }), currentPanel === SearchPanels["a" /* SearchPanels */].SearchMakes && /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_makes, {
            active: true,
            makes: dealToggle === LeasingDealTypes["a" /* LeasingDealTypes */].Van ? vanManufacturerList : carManufacturerList
          }), currentPanel === SearchPanels["a" /* SearchPanels */].SearchModels && /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_models, {
            active: true,
            makes: dealToggle === LeasingDealTypes["a" /* LeasingDealTypes */].Van ? vanManufacturerList : carManufacturerList,
            handleMakeUpdate: handleMakeUpdate,
            currentMake: currentMake,
            dealToggle: dealToggle
          }), currentPanel === SearchPanels["a" /* SearchPanels */].SearchBodies && /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_bodies, {
            active: true
          }), currentPanel === SearchPanels["a" /* SearchPanels */].SearchBudgets && /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_budgets, {
            active: true
          }), currentPanel === SearchPanels["a" /* SearchPanels */].SearchDetailed && /*#__PURE__*/Object(jsx_runtime_["jsx"])(search_detailed, {
            active: true,
            handleVehicleCountUpdate: handleVehicleCountUpdate
          })]
        })
      }), modalCtas && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal_default.a.Footer, {
        className: "modal-footer__ctas",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: search_module_default.a['search-ctas'],
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: "btn btn-lg",
            onClick: () => handleClearButton(),
            children: "Clear search"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: "btn btn-primary btn-lg",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              passHref: true,
              href: Object(urlHelper["q" /* GetSearchFiltersUrl */])(dealToggle, userPostcode, vehicleFilters),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "text-decoration-none",
                children: vehicleCount === 0 ? "No results" : "See " + vehicleCount + " deals"
              })
            })
          })]
        })
      })]
    }))
  });
};

/* harmony default export */ var search = (Object(external_react_redux_["connect"])(search_mapStateToProps)(Search));
// CONCATENATED MODULE: ./components/search/index.js


/***/ }),

/***/ "TG2e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qqGZ");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helpers_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mmV+");
/* harmony import */ var _HOCs_modal_modalContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a2hv");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("SUUS");
/* harmony import */ var _enums_SearchPanels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("brxi");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function mapStateToProps(state) {
  return {
    dealToggle: state.dealSelector,
    vehicleFilters: state.vehicleFilters,
    userPostcode: state.userPostcode
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserPostcode: userPostcode => {
      dispatch({
        type: 'UPDATE_POSTCODE',
        userPostcode: userPostcode
      });
    }
  };
};

const ModalPostcode = (_ref) => {
  let {
    onRequestClose,
    title,
    userPostcode,
    updateUserPostcode
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["onRequestClose", "title", "userPostcode", "updateUserPostcode"]);

  const modalContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_HOCs_modal_modalContext__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
  const postcodeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    0: isSubmitted,
    1: setIsSubmitted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isValidated,
    1: setIsValidated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handlePostcodeSubmit = evt => {
    evt.preventDefault();
    let enteredPostcode = postcodeRef.current.value.toLowerCase();

    if (Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_4__[/* FormatValidatePostcode */ "b"])(enteredPostcode)) {
      setIsValidated(true);
      updateUserPostcode(Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_4__[/* AddSpaceToPostcode */ "a"])(enteredPostcode));
    } else {
      setIsValidated(false);
      updateUserPostcode(null);
    }

    setIsSubmitted(true);

    if (Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_4__[/* FormatValidatePostcode */ "b"])(enteredPostcode)) {
      modalContext.showModal(_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
        show: true,
        title: "Refine Search",
        activePanel: _enums_SearchPanels__WEBPACK_IMPORTED_MODULE_7__[/* SearchPanels */ "a"].SearchDetailed
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({
      onHide: onRequestClose,
      centered: true
    }, otherProps), {}, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Header, {
        className: "d-flex flex-nowrap justify-content-center align-items-center",
        closeButton: true,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Title, {
          className: "text-center mb-0",
          children: title
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default.a.Body, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "w-100 py-3 px-3 px-md-5",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
            className: "mb-2",
            children: "Please enter a full postcode."
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "col-24 form-group",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                type: "text",
                ref: postcodeRef,
                className: `form-control ${isSubmitted && !isValidated ? 'is-invalid' : ''}`,
                placeholder: "AB12 3CD"
              })
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "col-24 d-flex align-items-center justify-content-end",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                className: "btn btn-success btn-lg",
                onClick: evt => handlePostcodeSubmit(evt),
                children: "Next"
              })
            })
          })]
        })
      })]
    }))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ModalPostcode));

/***/ }),

/***/ "pmgs":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"vehicle-search": "search_vehicle-search__10Ih2",
	"modal-panel": "search_modal-panel__2dKLt",
	"is-active": "search_is-active__2laAB",
	"accordion": "search_accordion__I2JeF",
	"accordion-toggle": "search_accordion-toggle__2T-ue",
	"accordion-content": "search_accordion-content__2Zecf",
	"is-selected": "search_is-selected__3l_S3",
	"is-postcode": "search_is-postcode__1sdw3",
	"search-ctas": "search_search-ctas__247JW"
};


/***/ })

};;