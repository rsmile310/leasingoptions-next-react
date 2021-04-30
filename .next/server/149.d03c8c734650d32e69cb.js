exports.ids = [149];
exports.modules = {

/***/ "WudC":
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
/* harmony import */ var _common_terms_agreement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("mnGr");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const mapStateToProps = state => {
  return {
    formData: state.formData,
    stepNumber: state.stepIndicator
  };
};

const PersonalStepTen = props => {
  const handleGATracking = () => Object(helpers_analytics__WEBPACK_IMPORTED_MODULE_1__[/* logLabelEvent */ "d"])('prop_form_tracking_personal', 'Click', 'completed-application');

  const formData = props.formData[props.stepNumber];
  const methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])();
  const {
    handleSubmit
  } = methods;

  const onSubmit = data => {
    props.handleFormSubmit(props.stepNumber, data);
  };

  const onBack = () => {
    props.handleFormStep(props.stepNumber - 1);
  };

  const onAccept = evt => {
    props.handleFormSave(props.stepNumber, {
      privacy: evt.target.checked
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "w-100 bg-white p-3 p-md-5",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
      className: "mb-5",
      children: "Submit Your Application"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
      children: "Terms and Conditions"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["FormContext"], _objectSpread(_objectSpread({}, methods), {}, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_common_terms_agreement__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
          defaultValue: formData.privacy,
          onAcceptChange: onAccept
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
            children: "Complete"
          })]
        })]
      })
    }))]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(PersonalStepTen));

/***/ }),

/***/ "mnGr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mmV+");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);







const TermsAgreement = ({
  isInternal,
  defaultValue,
  onAcceptChange
}) => {
  const {
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useFormContext"])();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "w-100 bg-light-grey p-3 mb-3",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
      children: "Use of your Personal Data"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
      className: "mb-5",
      children: ["By submitting and completing this credit application, you confirm that you understand that Leasing Options will use your Personal Data in the ways set out in our ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        href: "https://www.leasingoptions.co.uk/privacy-policy",
        target: "_blank",
        children: "Privacy Policy"
      }), ". For the avoidance of doubt, this will involve submitting your details to one or more of our carefully selected funding partners who will conduct searches with Credit Reference Agencies. The lenders will leave a footprint of their searches which may be visible to other organisations if you apply for credit again in the future."]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
      children: "Our Privacy Policy"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
        className: "h5 text-blue",
        children: "IMPORTANT: USE OF YOUR PERSONAL DATA. Please read this information carefully before proceeding"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "terms-and-conditions",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "We are Leasing Options Limited, a financial services intermediary with company number 02487254 and whose registered office is at Options House, Atkin Street, Worsley, Manchester, M28 3DG (\u2018we\u2019, \u2018us\u2019 or \u2018our\u2019). We take the privacy of our customers very seriously. We ask that you read this Privacy Policy (\u2018the Policy\u2019) carefully as it contains important information about how we will use your personal data."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "For the purposes of the Data Protection Act (\u2018DPA\u2019), we are the \u2018Data Controller\u2019 (i.e. the company who is responsible for, and controls the processing of, your personal data)."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "This Policy was last updated June 2018 in line with requirements as set out under the GDPR and the Data Protection Act 2018. The reform sets out more rights for individuals and greater transparency in how personal data is processed by Data Controllers, such as consent, distribution, marketing and deletion. As we are a credit intermediary, we undertake a number of financial tasks that relate to consumer credit and insurance mediation. Our firm\u2019s lawful basis for processing your personal data is done so under a Legitimate Interest - Article 6(1)(f) \u2013 \u201Cthe processing is necessary for your legitimate interests or the legitimate interests of a third party unless there is a good reason to protect the individual\u2019s personal data which overrides those legitimate interests.\u201D"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "The Legitimate Interest relates to legal requirements for us to hold your personal data and financial information on record for up to a total of six years from the end date of your credit agreement. This six-year period satisfies the requirement of our regulator, The Financial Conduct Authority. Additionally, there is also a legal requirement to hold accounting information with Her Majesty\u2019s Revenue & Customs (HMR&C). This is in line with other financial industry retention periods. Please also refer to a separate document - \u201CLegitimate Interest Assessment\u201D which can be provided to you by requesting it from us."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: "Personal data We may collect"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "We will obtain personal data about you (including your name, address, date of birth, contact information, interests, payment details, financial information and opinions) and those whose personal data you have with express authority disclosed to us (\u2018others\u2019) whenever you complete an online form or make a telephone enquiry with us to receive our services. If you submit an online enquiry you will be required to agree to the terms of this Policy which include permitting us to contact you for the purposes of the finance related or insurance enquiries via the contact means of which you provide us with the details of. i.e. email address, telephone number etc."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "For example, we will obtain personal data when you (i.e. contact us for any reason, or purchase services). In certain circumstances, we may hold sensitive personal data if you provide us with such information if you feel that it is relevant for the purpose of your enquiry, but we will not ask for such information. Any sensitive personal data obtained and recorded will only be done so with your explicit consent."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: "How We use personal data"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "We will use the personal data you disclose to us for the purposes described in Our Terms. These purposes include:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "to assist us in processing your enquiries and obtaining the services which you require;"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "to help us identify you and any accounts that you hold with us;"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "undertaking credit checks;"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "administration;"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "research, statistical analysis and behavioural analysis;"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "customer profiling and analysing your preferences;"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "marketing (providing you have opted-in) [for further information see \u2018Marketing and opting-in\u2019 below];"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "fraud prevention and detection;"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "billing and order fulfilment;"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "customising our website and its content to your particular preferences;"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "to notify you of any changes to our website or to our services which may affect you;"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "security vetting; and"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "improving our services."
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: "Marketing and opting-in"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "We may share your personal data with organisations as set out in the \u2018Disclosure of personal data\u2019 section below. If you have opted-in to receive our marketing material, we will ensure that it is to your requirements and granular. We or they may contact you or others (unless you have asked us or them not to do so) by mail, telephone, text message, email, (each contact method requires its own consent via an opt-in selection) The nature of these marketing communications relate to information on products, services, promotions and special offers which we believe may be of interest to you or others. If you or others would prefer not to receive any further direct marketing communications from us or our business partners, it is possible to opt out at any time. See further \u2018Your rights\u2019 below"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: "Disclosure of personal data"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "When acting as a credit intermediary for vehicle finance and associated insurance products, there would be a reasonable expectation for us to share your personal data with finance houses and funding partners for the purposes of arranging finance for your new vehicle(s)."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "We may disclose personal data which you provide to us to:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "Our agents and service providers (e.g. providers of web hosting, maintenance services or potential lenders);"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "When using the part-ex valuation area of the website (www.leasingoptions.co.uk), the personal data that you submit which includes your full name, telephone number, post code, email address as well as the make, model and registration of your vehicle and the vehicle mileage will be securely transferred to the Digital Automotive Solutions Limited T/as The Car Buying Group. This transfer is for the purposes of providing you with a purchase price quotation on the vehicle. For further information on how they will use your personal data, please read their Privacy Policy"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "Advise you on insurance products which we are authorised and regulated to do so. These relate to add-on products of your finance agreement with our approved insurance partners; Look After My Car and lookaftermycar.co.uk Trading As Premia Solutions Limited (read their Privacy Policy) and Tobell Automotive Limited (read their Privacy Policy)."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "When using the website (www.leasingoptions.co.uk) online chat facility, the chat message content is relayed to a third-party, The Chat Shop Limited that provide this service on our behalf, 24 hours a day. For the purposes of being transparent, your personal data may be transferred outside of the European Economic Area (EEA) when using this service, however adequate safeguards are in place to ensure its protection. Please also see \u2018International Transfers\u2019 below;"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "Law enforcement agencies in connection with any investigation to help prevent unlawful activity;"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
          children: ["Our business partners in accordance with the \u2018Marketing and opting out\u2019 section above, specifically being:", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: "our group companies (as defined in the Companies Act 2006);"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: "finance companies with whom we deal for the purposes of providing our services to you;"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: "Insurance companies with whom we deal for the purposes of providing our services to you and to verify information provided to us by you; and"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: "other third parties with whom we deal with in the course of providing our services to you; and"
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "Any regulators within whose jurisdiction we operate within from time to time."
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: "Motorfinity Customers"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Motorfinity Group Limited (Data Protection Registration No: ZA230768) and Leasing Options Limited (Data Protection Registration No: Z7436776)."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Where you may have made an enquiry through Motorfinity Group Limited via motorfinityleasing.co.uk for vehicle leasing, your personal data will be used within the group and shared with Leasing Options Limited, who act as the preferred partner to Motorfinity Group Limited for vehicle leasing. For further information on how Motorfinity Group Limited use your information, please read their terms, privacy and data protection statement."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Motorfinity Leasing and motorfinityleasing.co.uk are trading styles of Leasing Options Limited."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Motorfinity Group Limited and Leasing Options Limited are joint Data Controller\u2019s in regard to the security and processing of your personal data."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Please be aware that we will not sell or otherwise disclose any personal data provided to us to any other party."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: "Keeping data secure"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "We currently safeguard personal data by storing it on a CRM protected by password and shall ensure that from time to time we use no lesser technical and organisational measures to safeguard personal data which is disclosed to us. Whilst we will use all reasonable efforts to safeguard such personal data, you acknowledge that the use of the internet is not entirely secure and for this reason we cannot guarantee the security or integrity of any personal data which are transferred from you or to you via the internet."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: "Monitoring"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "We may monitor and record communications with you (such as telephone conversations and emails) for the purpose of quality assurance, training, fraud prevention, compliance or charitable purposes."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: "Information about other individuals"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "If you give us information about others, you confirm that the other third party person has appointed you to act on his/her behalf. This is also relevant where others are concerned if you indeed ask another person to act on your behalf as a third party."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Under the third party authorisation, the other person can:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "Give consent on his/her behalf to the processing of his or her personal data for the purposes and reasons set out in this Policy; and"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "Receive on his/her behalf any data protection notices."
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Such authorisation will remain in place until this has been revoked, either by verbal or written communication."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: "Use of Google Analytics Advertising"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "We use Google Analytics Advertising Features (\u2018GAAF\u2019) through our website, which means that certain information about the traffic on our website is collected. In light of using GAAF, We will not facilitate the merging of personally-identifiable information with non-personally identifiable information collected through GAAF unless we receive your express consent to that merger."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Furthermore, We are hereby notifying You that:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
          children: ["The specific GAAF feature(s) which we have implemented are:", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: "Remarketing with Google Analytics"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: "Google Display Network Impression Reporting"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
              children: "Google Analytics Demographics and Interest Reporting"
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "We use first-party cookies (such as GAAF cookies) or other first-party identifiers, and third-party cookies (such as advertising cookies) or other third-party identifiers together and that this is done in the ways detailed under the sub-heading \u2018Use of First & Third Party Cookies and Identifiers\u2019 below; and"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "You can opt-out of the GAAF you use, including through Ads Settings, Ad Settings for mobile apps, or any other available means such as the Google Analytics currently available opt-outs accessible via tools.google.com/dlpage/gaoptout"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: "Your rights"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "You have the right to request access to your personal data which we process. This formal request is made under the DPA and is referred to as a Subject Access Request. If you wish to exercise this right and make a Subject Access Request, you should;"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "Put your request in writing; either by Email or by letter."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "Include proof of your identity and address (e.g. a copy of your driving licence or passport, and a recent utility or credit card bill);"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "Specify the personal data you want access to, including any account or reference numbers where applicable."
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "You have the right to require us to correct any inaccuracies in your data free of charge. If you wish to exercise this right, you should:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "Either speak to us via telephone or put your request in writing;"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "Provide us with enough information to identify you (e.g. account/order number, username, registration details); and"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "Specify the information that is incorrect and what it should be replaced with."
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "You also have the right to ask us to stop processing your personal data for direct marketing purposes. If you wish to exercise this right you should:"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "put your request in writing (an email sent to compliance@leasingoptions.co.uk with a header that says \u2018unsubscribe\u2019 is acceptable);"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "provide us with enough information to identify you (e.g. account/order number, username, registration details);"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          children: "if your objection is not to direct marketing in general, but to direct marketing by a particular channel (e.g. email or telephone) please specify the channel you are objecting to."
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: "Data Retention"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "The retention period for your personal data will be up to a total of six years from the end data of the credit agreement. If you do not proceed with an enquiry for finance, or, you do not obtain a finance agreement under which we have arranged for you with our panel of lenders, your personal data is likely to be subject to a shorter retention period and in line with Article 5(1)(c) of the GDPR \u2013 \u201Cadequate, relevant and limited to what is necessary in relation to the purposes for which they are processed (\u2018data minimisation\u2019)\u201D."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: "International Transfers"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "In the normal course of business there may be a need for Leasing Options Limited or any other firm associated to the business, usually when processing an application for credit, personal data would have to be transferred outside of the European Economic Area (EEA) where those countries do not typically have the same protections and safeguards in place for the protection of personal data to those countries within the EEA."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "Leasing Options deal with a number of large, international corporations where data is likely to be transferred in this way. Assurances and processes will always be put in place and considered before any international transfer to a non-EEA country is undertaken to ensure the protection and security of the personal data."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: "Our contact details"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
        children: ["We welcome your feedback and questions. If You wish to contact us, please send an email to marketing@leasingoptions.co.uk or you can write to us at Options House, Atkin Street, Worsley, Manchester, M28 3DG or call us on ", Object(helpers_helpers__WEBPACK_IMPORTED_MODULE_3__[/* GetPhoneNumber */ "g"])(isInternal), ". We may change this Policy from time to time. You should check this policy occasionally to ensure you are aware of the most recent version which will apply each time you deal with us."]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "w-100 text-right form-check pt-3 pl-0 pr-3 mb-3",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
        className: "form-check-label",
        htmlFor: "privacy",
        children: "I confirm that I have read and understand this Privacy Policy"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        className: `form-check-input mr-0 ml-2 ${errors.privacy ? "is-invalid" : ""}`,
        type: "checkbox",
        value: "",
        id: "privacy",
        name: "privacy",
        ref: register({
          required: true
        }),
        defaultChecked: defaultValue,
        onChange: evt => onAcceptChange(evt)
      }), errors.privacy && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        className: "invalid-feedback d-block",
        children: "Please confirm that you have read and understood the Privacy Policy"
      })]
    })]
  });
};

const mapStateToProps = state => ({
  isInternal: state.isInternal
});

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(TermsAgreement));

/***/ })

};;