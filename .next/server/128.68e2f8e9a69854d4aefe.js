exports.ids = [128];
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

/***/ "7lqE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5BkG");






const NationalitySelector = ({
  collectionName,
  index,
  defaultValue
}) => {
  const {
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();

  const fieldError = () => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldError */ "a"])("nationalityId", collectionName, index, errors);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "form-row mb-3",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "col-24 col-md-12 col-lg-6",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
        children: ["Nationality ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
          children: "(Required)"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
        className: `form-control ${fieldError() ? "is-invalid" : ""}`,
        name: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldName */ "c"])("nationalityId", collectionName, index),
        ref: register({
          required: true
        }),
        defaultValue: defaultValue,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "",
          children: "Please select..."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "27",
          children: "British"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "1",
          children: "Afghan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "2",
          children: "Albanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "3",
          children: "Algerian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "4",
          children: "American"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "5",
          children: "Andorran"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "6",
          children: "Angolan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "7",
          children: "Antiguans"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "8",
          children: "Argentinean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "9",
          children: "Armenian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "10",
          children: "Australian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "11",
          children: "Austrian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "12",
          children: "Azerbaijani"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "13",
          children: "Bahamian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "14",
          children: "Bahraini"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "15",
          children: "Bangladeshi"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "16",
          children: "Barbadian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "17",
          children: "Barbudans"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "18",
          children: "Batswana"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "19",
          children: "Belarusian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "20",
          children: "Belgian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "21",
          children: "Belizean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "22",
          children: "Beninese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "23",
          children: "Bhutanese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "24",
          children: "Bolivian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "25",
          children: "Bosnian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "26",
          children: "Brazilian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "28",
          children: "Bruneian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "29",
          children: "Bulgarian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "30",
          children: "Burkinabe"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "31",
          children: "Burmese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "32",
          children: "Burundian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "33",
          children: "Cambodian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "34",
          children: "Cameroonian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "35",
          children: "Canadian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "36",
          children: "Cape Verdean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "37",
          children: "Central African"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "38",
          children: "Chadian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "39",
          children: "Chilean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "40",
          children: "Chinese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "41",
          children: "Colombian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "42",
          children: "Comoran"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "43",
          children: "Congolese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "44",
          children: "Costa Rican"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "45",
          children: "Croatian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "46",
          children: "Cuban"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "47",
          children: "Cypriot"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "48",
          children: "Czech"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "49",
          children: "Danish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "50",
          children: "Djibouti"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "51",
          children: "Dominican"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "52",
          children: "Dutch"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "53",
          children: "Dutchman"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "54",
          children: "Dutchwoman"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "55",
          children: "East Timorese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "56",
          children: "Ecuadorean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "57",
          children: "Egyptian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "58",
          children: "Emirian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "59",
          children: "Equatorial Guinean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "60",
          children: "Eritrean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "61",
          children: "Estonian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "62",
          children: "Ethiopian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "63",
          children: "Fijian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "64",
          children: "Filipino"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "65",
          children: "Finnish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "66",
          children: "French"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "67",
          children: "Gabonese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "68",
          children: "Gambian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "69",
          children: "Georgian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "70",
          children: "German"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "71",
          children: "Ghanaian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "72",
          children: "Greek"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "73",
          children: "Grenadian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "74",
          children: "Guatemalan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "75",
          children: "Guinea Bissauan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "76",
          children: "Guinean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "77",
          children: "Guyanese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "78",
          children: "Haitian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "79",
          children: "Herzegovinian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "80",
          children: "Honduran"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "81",
          children: "Hungarian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "82",
          children: "Icelander"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "83",
          children: "IKiribati"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "84",
          children: "Indian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "85",
          children: "Indonesian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "86",
          children: "Iranian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "87",
          children: "Iraqi"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "88",
          children: "Irish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "89",
          children: "Israeli"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "90",
          children: "Italian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "91",
          children: "Ivorian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "92",
          children: "Jamaican"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "93",
          children: "Japanese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "94",
          children: "Jordanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "95",
          children: "Kazakhstani"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "96",
          children: "Kenyan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "97",
          children: "Kittian And Nevisian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "98",
          children: "Kuwaiti"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "99",
          children: "Kyrgyz"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "100",
          children: "Laotian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "101",
          children: "Latvian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "102",
          children: "Lebanese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "103",
          children: "Liberian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "104",
          children: "Libyan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "105",
          children: "Liechtensteiner"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "106",
          children: "Lithuanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "107",
          children: "Luxembourger"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "108",
          children: "Macedonian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "109",
          children: "Malagasy"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "110",
          children: "Malawian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "111",
          children: "Malaysian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "112",
          children: "Maldivan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "113",
          children: "Malian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "114",
          children: "Maltese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "115",
          children: "Marshallese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "116",
          children: "Mauritanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "117",
          children: "Mauritian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "118",
          children: "Mexican"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "119",
          children: "Micronesian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "120",
          children: "Moldovan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "121",
          children: "Monacan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "122",
          children: "Mongolian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "123",
          children: "Moroccan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "124",
          children: "Mosotho"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "125",
          children: "Motswana"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "126",
          children: "Mozambican"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "127",
          children: "Namibian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "128",
          children: "Nauruan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "129",
          children: "Nepalese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "130",
          children: "Netherlander"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "131",
          children: "New Zealander"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "132",
          children: "Nicaraguan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "133",
          children: "Nigerian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "134",
          children: "Nigerien"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "135",
          children: "Ni Vanuatu"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "136",
          children: "North Korean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "137",
          children: "Northern Irish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "138",
          children: "Norwegian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "139",
          children: "Omani"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "140",
          children: "Pakistani"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "141",
          children: "Palauan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "142",
          children: "Panamanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "143",
          children: "Papua New Guinean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "144",
          children: "Paraguayan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "145",
          children: "Peruvian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "146",
          children: "Polish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "147",
          children: "Portuguese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "148",
          children: "Qatari"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "149",
          children: "Romanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "150",
          children: "Russian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "151",
          children: "Rwandan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "152",
          children: "Saint Lucian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "153",
          children: "Salvadoran"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "154",
          children: "Samoan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "155",
          children: "San Marinese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "156",
          children: "Sao Tomean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "157",
          children: "Saudi"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "158",
          children: "Scottish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "159",
          children: "Senegalese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "160",
          children: "Serbian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "161",
          children: "Seychellois"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "162",
          children: "Sierra Leonean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "163",
          children: "Singaporean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "164",
          children: "Slovakian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "165",
          children: "Slovenian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "166",
          children: "Solomon Islander"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "167",
          children: "Somali"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "168",
          children: "South African"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "169",
          children: "South Korean"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "170",
          children: "Spanish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "171",
          children: "Sri Lankan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "172",
          children: "Sudanese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "173",
          children: "Surinamer"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "174",
          children: "Swazi"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "175",
          children: "Swedish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "176",
          children: "Swiss"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "177",
          children: "Syrian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "178",
          children: "Taiwanese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "179",
          children: "Tajik"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "180",
          children: "Tanzanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "181",
          children: "Thai"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "182",
          children: "Togolese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "183",
          children: "Tongan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "184",
          children: "Trinidadian Or Tobagonian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "185",
          children: "Tunisian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "186",
          children: "Turkish"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "187",
          children: "Tuvaluan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "188",
          children: "Ugandan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "189",
          children: "Ukrainian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "190",
          children: "Uruguayan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "191",
          children: "Uzbekistanian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "192",
          children: "Venezuelan"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "193",
          children: "Vietnamese"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "194",
          children: "Welsh"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "195",
          children: "Yemenite"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "196",
          children: "Zambian"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "197",
          children: "Zimbabwean"
        })]
      }), fieldError() && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "invalid-feedback d-block",
        children: "This field is required"
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (NationalitySelector);

/***/ }),

/***/ "E5EP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5BkG");






const MaritalStatusSelector = ({
  collectionName,
  index,
  defaultValue
}) => {
  const {
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();

  const fieldError = () => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldError */ "a"])("maritalStatusId", collectionName, index, errors);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "form-row mb-3",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "col-24 col-md-12 col-lg-6",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
        children: ["Marital Status ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
          children: "(Required)"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
        className: `form-control ${fieldError() ? "is-invalid" : ""}`,
        name: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldName */ "c"])("maritalStatusId", collectionName, index),
        ref: register({
          required: true
        }),
        defaultValue: defaultValue,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "",
          children: "Please select..."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "1",
          children: "Single"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "2",
          children: "Married"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "3",
          children: "Divorced"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "4",
          children: "Separated"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "5",
          children: "Widow"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "6",
          children: "Widower"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "7",
          children: "Living with Partner"
        })]
      }), fieldError() && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "invalid-feedback d-block",
        children: "This field is required"
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (MaritalStatusSelector);

/***/ }),

/***/ "ICnl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5BkG");







const PropertyTypeSelector = ({
  collectionName,
  index,
  defaultValue
}) => {
  const {
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();

  const fieldError = () => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldError */ "a"])("propertyTypeId", collectionName, index, errors);
  };

  const fieldName = () => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldName */ "c"])("propertyTypeId", collectionName, index);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "col-24 col-md-12",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
          htmlFor: "propertyType",
          children: ["Property Type ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
            children: "(Required)"
          })]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-check form-check-inline",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
            className: `form-check-input ${fieldError() ? "is-invalid" : ""}`,
            type: "radio",
            name: fieldName(),
            id: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])("house", collectionName, index),
            value: "1",
            ref: register({
              required: true
            }),
            defaultChecked: defaultValue == 1
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            className: "form-check-label",
            htmlFor: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])("house", collectionName, index),
            children: "House"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-check form-check-inline",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
            className: `form-check-input ${fieldError() ? "is-invalid" : ""}`,
            type: "radio",
            name: fieldName(),
            id: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])("flat", collectionName, index),
            value: "2",
            ref: register({
              required: true
            }),
            defaultChecked: defaultValue == 2
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            className: "form-check-label",
            htmlFor: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])("flat", collectionName, index),
            children: "Flat"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-check form-check-inline",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
            className: `form-check-input ${fieldError() ? "is-invalid" : ""}`,
            type: "radio",
            name: fieldName(),
            id: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])("cottage", collectionName, index),
            value: "3",
            ref: register({
              required: true
            }),
            defaultChecked: defaultValue == 3
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            className: "form-check-label",
            htmlFor: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])("cottage", collectionName, index),
            children: "Cottage"
          })]
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "col-24 col-md-12",
        children: fieldError() && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "This field is required"
        })
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (PropertyTypeSelector);

/***/ }),

/***/ "LO0M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZTWx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5BkG");
/* harmony import */ var helpers_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("gt28");
/* harmony import */ var _node_modules_react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("XTIs");
/* harmony import */ var _node_modules_react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_datepicker_dist_react_datepicker_min_css__WEBPACK_IMPORTED_MODULE_6__);









const DateOfBirth = ({
  collectionName,
  index,
  defaultValue,
  minYears
}) => {
  var _getFieldError, _getFieldError2;

  const {
    register,
    errors,
    control
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "form-row mb-3",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "col-24 col-md-12 col-lg-6",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
        children: ["Date of Birth ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
          children: "(Required)"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], {
        as: react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a,
        control: control,
        valueName: "selected",
        name: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_4__[/* getFieldName */ "c"])("dob", collectionName, index),
        className: `form-control ${Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_4__[/* getFieldError */ "a"])("dob", collectionName, index, errors) ? "is-invalid" : ""}`,
        dateFormat: "dd/MM/yyyy",
        maxDate: new Date().setFullYear(new Date().getFullYear() - minYears),
        placeholderText: "Date of birth",
        defaultValue: defaultValue,
        rules: {
          required: true,
          validate: helpers_validation__WEBPACK_IMPORTED_MODULE_5__[/* IsOver18 */ "c"]
        },
        showMonthDropdown: true,
        useShortMonthInDropdown: true,
        showYearDropdown: 15
      }), ((_getFieldError = Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_4__[/* getFieldError */ "a"])("dob", collectionName, index, errors)) === null || _getFieldError === void 0 ? void 0 : _getFieldError.type) === "required" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "invalid-feedback d-block",
        children: "This field is required"
      }), ((_getFieldError2 = Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_4__[/* getFieldError */ "a"])("dob", collectionName, index, errors)) === null || _getFieldError2 === void 0 ? void 0 : _getFieldError2.type) === "validate" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "invalid-feedback d-block",
        children: "You need to be at least 18 years old"
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (DateOfBirth);

/***/ }),

/***/ "QAH0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5BkG");







const GenderSelector = ({
  collectionName,
  index,
  defaultValue
}) => {
  const {
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();
  const fieldName = Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldName */ "c"])("genderId", collectionName, index);
  const fieldError = Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldError */ "a"])("genderId", collectionName, index, errors);

  const fieldId = name => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldId */ "b"])(name, collectionName, index);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "col-24 col-md-12",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
          htmlFor: "genderId",
          children: ["Gender ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
            children: "(Required)"
          })]
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "col-24 col-md-12",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-check form-check-inline",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
            className: `form-check-input ${fieldError ? "is-invalid" : ""}`,
            type: "radio",
            name: fieldName,
            id: fieldId("male"),
            value: 1,
            ref: register({
              required: true
            }),
            defaultChecked: defaultValue == 1
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            className: "form-check-label",
            htmlFor: fieldId("male"),
            children: "Male"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-check form-check-inline",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
            className: `form-check-input ${fieldError ? "is-invalid" : ""}`,
            type: "radio",
            name: fieldName,
            id: fieldId("female"),
            value: 2,
            ref: register({
              required: true
            }),
            defaultChecked: defaultValue == 2
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            className: "form-check-label",
            htmlFor: fieldId("female"),
            children: "Female"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "form-check form-check-inline",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
            className: `form-check-input ${fieldError ? "is-invalid" : ""}`,
            type: "radio",
            name: fieldName,
            id: fieldId("other"),
            value: 3,
            ref: register({
              required: true
            }),
            defaultChecked: defaultValue == 3
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
            className: "form-check-label",
            htmlFor: fieldId("other"),
            children: "Other"
          })]
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "form-row mb-3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "col-24 col-md-12",
        children: fieldError && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          className: "invalid-feedback d-block",
          children: "This field is required"
        })
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (GenderSelector);

/***/ }),

/***/ "XTIs":
/***/ (function(module, exports) {



/***/ }),

/***/ "chOp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./components/proposal/common/date-of-birth.tsx
var date_of_birth = __webpack_require__("LO0M");

// EXTERNAL MODULE: ./components/proposal/common/gender-selector.tsx
var gender_selector = __webpack_require__("QAH0");

// EXTERNAL MODULE: ./components/proposal/common/nationality-selector.tsx
var nationality_selector = __webpack_require__("7lqE");

// EXTERNAL MODULE: ./components/proposal/common/marital-status-selector.tsx
var marital_status_selector = __webpack_require__("E5EP");

// EXTERNAL MODULE: ./components/proposal/common/property-status-selector.tsx
var property_status_selector = __webpack_require__("qmPZ");

// EXTERNAL MODULE: ./helpers/fieldArrayHelper.tsx
var fieldArrayHelper = __webpack_require__("5BkG");

// CONCATENATED MODULE: ./components/proposal/common/property-tenure-selector.tsx






const PropertyTenireSelector = ({
  collectionName,
  index,
  defaultValue
}) => {
  const {
    register,
    errors
  } = Object(external_react_hook_form_["useFormContext"])();

  const fieldError = () => {
    return Object(fieldArrayHelper["a" /* getFieldError */])("propertyTenureId", collectionName, index, errors);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "form-row mb-3",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "col-24 col-md-12 col-lg-6",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
        htmlFor: "propertyTenure",
        children: ["Property Tenure ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
          children: "(Required)"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
        className: `form-control ${fieldError() ? "is-invalid" : ""}`,
        name: Object(fieldArrayHelper["c" /* getFieldName */])("propertyTenureId", collectionName, index),
        ref: register({
          required: true
        }),
        defaultValue: defaultValue,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "",
          children: "Please select..."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "1",
          children: "Leasehold"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
          value: "2",
          children: "Freehold"
        })]
      }), fieldError() && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: "invalid-feedback d-block",
        children: "This field is required"
      })]
    })
  });
};

/* harmony default export */ var property_tenure_selector = (PropertyTenireSelector);
// EXTERNAL MODULE: ./components/proposal/common/property-type-selector.tsx
var property_type_selector = __webpack_require__("ICnl");

// EXTERNAL MODULE: ./helpers/analytics.tsx
var analytics = __webpack_require__("btDt");

// CONCATENATED MODULE: ./components/proposal/personal/personal-step-03.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function mapStateToProps(state) {
  return {
    formData: state.formData,
    stepNumber: state.stepIndicator
  };
}

const PersonalStepThree = props => {
  const formData = props.formData[props.stepNumber];

  const handleGATracking = () => Object(analytics["d" /* logLabelEvent */])('prop_form_tracking_personal', 'Click', 'personal-details-2-completed');

  const methods = Object(external_react_hook_form_["useForm"])();
  const {
    register,
    handleSubmit,
    errors,
    control,
    watch
  } = methods;
  const watchPropertyStatusId = watch("propertyStatusId", formData.propertyStatusId);

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
      children: "Your Details continued"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      children: "Personal Details"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_hook_form_["FormContext"], _objectSpread(_objectSpread({}, methods), {}, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(date_of_birth["a" /* default */], {
          defaultValue: formData.dob,
          collectionName: null,
          index: null,
          minYears: 18
        }), props.showGenderSelector && /*#__PURE__*/Object(jsx_runtime_["jsx"])(gender_selector["a" /* default */], {
          defaultValue: formData.genderId,
          collectionName: null,
          index: null
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(nationality_selector["a" /* default */], {
          defaultValue: formData.nationalityId,
          collectionName: null,
          index: null
        }), props.showMaritalStatus && /*#__PURE__*/Object(jsx_runtime_["jsx"])(marital_status_selector["a" /* default */], {
          defaultValue: formData.maritalStatusId,
          collectionName: null,
          index: null
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "form-row mb-3",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-24 col-md-12 col-lg-6",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
              htmlFor: "dependents",
              children: ["Number of dependents ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("small", {
                children: "(Required)"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              type: "number",
              min: 0,
              max: 99,
              className: `form-control ${errors.dependents ? "is-invalid" : ""}`,
              id: "dependents",
              name: "dependents",
              "aria-describedby": "dependents",
              placeholder: "Number of dependents",
              ref: register({
                required: true,
                pattern: /^[0-9]*$/
              }),
              defaultValue: formData.dependents
            }), errors.dependents && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "invalid-feedback d-block",
              children: "This field is required"
            })]
          })
        }), props.showProperyStatus && /*#__PURE__*/Object(jsx_runtime_["jsx"])(property_status_selector["a" /* default */], {
          defaultValue: formData.propertyStatusId,
          collectionName: null,
          index: null
        }), (watchPropertyStatusId == "1" || watchPropertyStatusId == "3") && /*#__PURE__*/Object(jsx_runtime_["jsx"])(property_tenure_selector, {
          defaultValue: formData.propertyTenureId,
          collectionName: null,
          index: null
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(property_type_selector["a" /* default */], {
          defaultValue: formData.propertyTypeId,
          collectionName: null,
          index: null
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

/* harmony default export */ var personal_step_03 = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(PersonalStepThree));

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

/***/ "qmPZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5BkG");






const PropertyStatusSelector = ({
  collectionName,
  index,
  defaultValue
}) => {
  const {
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();

  const fieldError = () => {
    return Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldError */ "a"])("propertyStatusId", collectionName, index, errors);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "form-row mb-3",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "col-24 col-md-12 col-lg-6",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
        children: ["Property Status ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
          children: "(Required)"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
        className: `form-control ${fieldError() ? "is-invalid" : ""}`,
        name: Object(helpers_fieldArrayHelper__WEBPACK_IMPORTED_MODULE_3__[/* getFieldName */ "c"])("propertyStatusId", collectionName, index),
        ref: register({
          required: true
        }),
        defaultValue: defaultValue,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "",
          children: "Please select..."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "1",
          children: "Mortgaged"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "2",
          children: "Living with Parents"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "3",
          children: "Owned Outright"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "4",
          children: "Rented"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "5",
          children: "Council Tenant"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "6",
          children: "Private Tenant"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "7",
          children: "Living with Partner"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: "8",
          children: "Other"
        })]
      }), fieldError() && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "invalid-feedback d-block",
        children: "This field is required"
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (PropertyStatusSelector);

/***/ })

};;