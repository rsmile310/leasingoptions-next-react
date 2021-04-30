exports.ids = [158];
exports.modules = {

/***/ "8xw/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./API/ProposalEnquiriesAPI.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ProposalEnquiriesAPI {
  static async GetEnquiryid(enquiryType, quoteid, quoteEnquiryid, salespersonId, directfinance) {
    const url = this.baseUrl + `api/proposalenquiries/getenquiryid?enquiryType=${enquiryType}&quoteid=${quoteid}&quoteEnquiryid=${quoteEnquiryid}&salespersonId=${salespersonId}&directfinance=${directfinance}`;
    const response = await fetch(url, {
      method: "GET",
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  }

  static async UpdateEnquiry(payload) {
    const response = await fetch(this.baseUrl + "api/proposalenquiries/updateenquiry", {
      method: "POST",
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return await response.json();
  }

  static async CompleteEnquiry(payload) {
    const response = await fetch(this.baseUrl + "api/proposalenquiries/completeenquiry", {
      method: "POST",
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return await response.json();
  }

}

_defineProperty(ProposalEnquiriesAPI, "baseUrl", "https://enquiries-website.api.leasingoptions.co.uk/");
// EXTERNAL MODULE: ./helpers/analytics.tsx
var analytics = __webpack_require__("btDt");

// CONCATENATED MODULE: ./business-logic/proposalEnquirieService.tsx


class proposalEnquirieService_ProposalEnquirieService {
  static async GetEnquiryid(enquiryType, quoteid, quoteEnquiryid, salespersonId, directfinance) {
    return ProposalEnquiriesAPI.GetEnquiryid(enquiryType, quoteid, quoteEnquiryid, salespersonId, directfinance);
  }

  static async UpdateEnquiry(proposalEnquiryid, proposalData) {
    const payload = {
      proposalEnquiryid: proposalEnquiryid,
      data: JSON.stringify(proposalData),
      gaClientId: Object(analytics["a" /* getGAClientId */])()
    };
    return ProposalEnquiriesAPI.UpdateEnquiry(payload);
  }

  static async CompleteEnquiry(proposalEnquiryid, proposalData) {
    const payload = {
      proposalEnquiryid: proposalEnquiryid,
      data: JSON.stringify(proposalData),
      gaClientId: Object(analytics["a" /* getGAClientId */])()
    };
    return ProposalEnquiriesAPI.CompleteEnquiry(payload);
  }

}
// EXTERNAL MODULE: ./enums/ProposalTypes.tsx
var ProposalTypes = __webpack_require__("6HoF");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./components/proposal/helpers/ProposalDataHelper.tsx
function ProposalDataHelper_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ProposalDataHelper {}

ProposalDataHelper_defineProperty(ProposalDataHelper, "getProposalData", (proposalType, data, slimVersion) => {
  switch (proposalType) {
    case ProposalTypes["a" /* ProposalTypes */].Personal:
      if (slimVersion) {
        return ProposalDataHelper.getPersonalProposalDataSlim(data);
      } else {
        return ProposalDataHelper.getPersonalProposalData(data);
      }

      break;

    case ProposalTypes["a" /* ProposalTypes */].BusinessSole:
      return ProposalDataHelper.getSoleProposalData(data);
      break;

    case ProposalTypes["a" /* ProposalTypes */].BusinessPartner:
      return ProposalDataHelper.getPartnershipProposalData(data);
      break;

    case ProposalTypes["a" /* ProposalTypes */].BusinessLtd:
      return ProposalDataHelper.getLimitedProposalData(data);
  }
});

ProposalDataHelper_defineProperty(ProposalDataHelper, "getPersonalProposalDataSlim", data => {
  var _data$, _data$2, _data$3, _data$4, _data$5, _data$6, _data$7, _data$8, _data$9, _data$10, _data$11, _data$12, _data$13, _data$14, _data$15, _data$15$addresses, _data$16, _data$17, _data$18, _data$19, _data$20, _data$21, _data$22, _data$23, _data$24, _data$25, _data$26, _data$27, _data$28, _data$29, _data$30;

  const result = {};
  result["person"] = {
    hirerTitleId: (_data$ = data["2"]) === null || _data$ === void 0 ? void 0 : _data$.title,
    foreName: (_data$2 = data["2"]) === null || _data$2 === void 0 ? void 0 : _data$2.firstName,
    middleName: (_data$3 = data["2"]) === null || _data$3 === void 0 ? void 0 : _data$3.middleName,
    surName: (_data$4 = data["2"]) === null || _data$4 === void 0 ? void 0 : _data$4.lastName,
    mobile: (_data$5 = data["2"]) === null || _data$5 === void 0 ? void 0 : _data$5.mobileNumber,
    landline: (_data$6 = data["2"]) === null || _data$6 === void 0 ? void 0 : _data$6.homeNumber,
    email: (_data$7 = data["2"]) === null || _data$7 === void 0 ? void 0 : _data$7.emailAddress,
    birthDate: data["3"].dob ? external_moment_default()(data["3"].dob).format("DD/MM/YYYY") : null,
    genderId: (_data$8 = data["3"]) === null || _data$8 === void 0 ? void 0 : _data$8.genderId,
    nationalityId: (_data$9 = data["3"]) === null || _data$9 === void 0 ? void 0 : _data$9.nationalityId,
    maritalStatusId: (_data$10 = data["3"]) === null || _data$10 === void 0 ? void 0 : _data$10.maritalStatusId,
    propertyStatusId: (_data$11 = data["3"]) === null || _data$11 === void 0 ? void 0 : _data$11.propertyStatusId,
    propertyTenureId: (_data$12 = data["3"]) === null || _data$12 === void 0 ? void 0 : _data$12.propertyTenureId,
    propertyTypeId: (_data$13 = data["3"]) === null || _data$13 === void 0 ? void 0 : _data$13.propertyTypeId,
    dependents: (_data$14 = data["3"]) === null || _data$14 === void 0 ? void 0 : _data$14.dependents,
    addresses: (_data$15 = data["4"]) === null || _data$15 === void 0 ? void 0 : (_data$15$addresses = _data$15.addresses) === null || _data$15$addresses === void 0 ? void 0 : _data$15$addresses.map((item, index) => {
      return ProposalDataHelper.getAddress(item);
    })
  };
  result["income"] = {
    grossAnnualSalary: (_data$16 = data["4"]) === null || _data$16 === void 0 ? void 0 : _data$16.grossAnnualSalary,
    netMonthlySalary: (_data$17 = data["4"]) === null || _data$17 === void 0 ? void 0 : _data$17.netMonthlySalary,
    grossMonthlySalary: (_data$18 = data["4"]) === null || _data$18 === void 0 ? void 0 : _data$18.grossMonthlySalary,
    partnerNetMonthlySalary: (_data$19 = data["4"]) === null || _data$19 === void 0 ? void 0 : _data$19.partnerNetMonthlySalary,
    partnerGrossMonthlySalary: (_data$20 = data["4"]) === null || _data$20 === void 0 ? void 0 : _data$20.partnerGrossMonthlySalary,
    otherIncome: (_data$21 = data["4"]) === null || _data$21 === void 0 ? void 0 : _data$21.otherIncome,
    otherIncomeDetails: (_data$22 = data["4"]) === null || _data$22 === void 0 ? void 0 : _data$22.otherIncomeDetails,
    mortgageRent: (_data$23 = data["5"]) === null || _data$23 === void 0 ? void 0 : _data$23.mortgageRent,
    utilityBills: (_data$24 = data["5"]) === null || _data$24 === void 0 ? void 0 : _data$24.utilityBills,
    loans: (_data$25 = data["5"]) === null || _data$25 === void 0 ? void 0 : _data$25.loans,
    totalMonthlyExpenditure: (_data$26 = data["5"]) === null || _data$26 === void 0 ? void 0 : _data$26.totalMonthlyExpenditure,
    //cardRepaymentAmount: self.expenditures.cardRepaymentAmount(), - not used on website
    otherExpenses: (_data$27 = data["5"]) === null || _data$27 === void 0 ? void 0 : _data$27.otherExpenses,
    currentCarPayment: (_data$28 = data["5"]) === null || _data$28 === void 0 ? void 0 : _data$28.currentCarPayment,
    replacesCurrentCar: ((_data$29 = data["5"]) === null || _data$29 === void 0 ? void 0 : _data$29.replacesCurrentCar) == "yes"
  };

  if (data["5"]) {
    result["creditCards"] = {
      amex: data["5"].amex || false,
      masterCard: data["5"].masterCard || false,
      visa: data["5"].visa || false,
      other: data["5"].other || false
    };
  }

  if (data["6"] && data["6"].employments) {
    result["employments"] = data["6"].employments.map((item, index) => {
      return ProposalDataHelper.getEmployment(item);
    });
  }

  if (data["7"] || data["8"]) {
    result["bank"] = ProposalDataHelper.getBankDetails(data["7"], data["8"]);
  }

  result["notes"] = (_data$30 = data["5"]) === null || _data$30 === void 0 ? void 0 : _data$30.notes;
  return result;
});

ProposalDataHelper_defineProperty(ProposalDataHelper, "getPersonalProposalData", data => {
  var _data$31, _data$32, _data$33, _data$34, _data$35, _data$36, _data$37, _data$38, _data$39, _data$40, _data$41, _data$42, _data$43, _data$44, _data$45, _data$45$addresses, _data$46, _data$47, _data$48, _data$49, _data$50, _data$51, _data$52, _data$53, _data$54, _data$55, _data$56, _data$57, _data$58, _data$59;

  const result = {};
  result["person"] = {
    hirerTitleId: (_data$31 = data["2"]) === null || _data$31 === void 0 ? void 0 : _data$31.title,
    foreName: (_data$32 = data["2"]) === null || _data$32 === void 0 ? void 0 : _data$32.firstName,
    middleName: (_data$33 = data["2"]) === null || _data$33 === void 0 ? void 0 : _data$33.middleName,
    surName: (_data$34 = data["2"]) === null || _data$34 === void 0 ? void 0 : _data$34.lastName,
    mobile: (_data$35 = data["2"]) === null || _data$35 === void 0 ? void 0 : _data$35.mobileNumber,
    landline: (_data$36 = data["2"]) === null || _data$36 === void 0 ? void 0 : _data$36.homeNumber,
    email: (_data$37 = data["2"]) === null || _data$37 === void 0 ? void 0 : _data$37.emailAddress,
    birthDate: data["3"].dob ? external_moment_default()(data["3"].dob).format("DD/MM/YYYY") : null,
    genderId: (_data$38 = data["3"]) === null || _data$38 === void 0 ? void 0 : _data$38.genderId,
    nationalityId: (_data$39 = data["3"]) === null || _data$39 === void 0 ? void 0 : _data$39.nationalityId,
    maritalStatusId: (_data$40 = data["3"]) === null || _data$40 === void 0 ? void 0 : _data$40.maritalStatusId,
    propertyStatusId: (_data$41 = data["3"]) === null || _data$41 === void 0 ? void 0 : _data$41.propertyStatusId,
    propertyTenureId: (_data$42 = data["3"]) === null || _data$42 === void 0 ? void 0 : _data$42.propertyTenureId,
    propertyTypeId: (_data$43 = data["3"]) === null || _data$43 === void 0 ? void 0 : _data$43.propertyTypeId,
    dependents: (_data$44 = data["3"]) === null || _data$44 === void 0 ? void 0 : _data$44.dependents,
    addresses: (_data$45 = data["4"]) === null || _data$45 === void 0 ? void 0 : (_data$45$addresses = _data$45.addresses) === null || _data$45$addresses === void 0 ? void 0 : _data$45$addresses.map((item, index) => {
      return ProposalDataHelper.getAddress(item);
    })
  };
  result["income"] = {
    netMonthlySalary: (_data$46 = data["5"]) === null || _data$46 === void 0 ? void 0 : _data$46.netMonthlySalary,
    grossMonthlySalary: (_data$47 = data["5"]) === null || _data$47 === void 0 ? void 0 : _data$47.grossMonthlySalary,
    partnerNetMonthlySalary: (_data$48 = data["5"]) === null || _data$48 === void 0 ? void 0 : _data$48.partnerNetMonthlySalary,
    partnerGrossMonthlySalary: (_data$49 = data["5"]) === null || _data$49 === void 0 ? void 0 : _data$49.partnerGrossMonthlySalary,
    otherIncome: (_data$50 = data["5"]) === null || _data$50 === void 0 ? void 0 : _data$50.otherIncome,
    otherIncomeDetails: (_data$51 = data["5"]) === null || _data$51 === void 0 ? void 0 : _data$51.otherIncomeDetails,
    mortgageRent: (_data$52 = data["6"]) === null || _data$52 === void 0 ? void 0 : _data$52.mortgageRent,
    utilityBills: (_data$53 = data["6"]) === null || _data$53 === void 0 ? void 0 : _data$53.utilityBills,
    loans: (_data$54 = data["6"]) === null || _data$54 === void 0 ? void 0 : _data$54.loans,
    totalMonthlyExpenditure: (_data$55 = data["6"]) === null || _data$55 === void 0 ? void 0 : _data$55.totalMonthlyExpenditure,
    //cardRepaymentAmount: self.expenditures.cardRepaymentAmount(), - not used on website
    otherExpenses: (_data$56 = data["6"]) === null || _data$56 === void 0 ? void 0 : _data$56.otherExpenses,
    currentCarPayment: (_data$57 = data["6"]) === null || _data$57 === void 0 ? void 0 : _data$57.currentCarPayment,
    replacesCurrentCar: ((_data$58 = data["6"]) === null || _data$58 === void 0 ? void 0 : _data$58.replacesCurrentCar) == "yes"
  };

  if (data["6"]) {
    result["creditCards"] = {
      amex: data["6"].amex || false,
      masterCard: data["6"].masterCard || false,
      visa: data["6"].visa || false,
      other: data["6"].other || false
    };
  }

  if (data["7"] && data["7"].employments) {
    result["employments"] = data["7"].employments.map((item, index) => {
      return ProposalDataHelper.getEmployment(item);
    });
  }

  if (data["8"] || data["9"]) {
    result["bank"] = ProposalDataHelper.getBankDetails(data["8"], data["9"]);
  }

  result["notes"] = (_data$59 = data["6"]) === null || _data$59 === void 0 ? void 0 : _data$59.notes;
  return result;
});

ProposalDataHelper_defineProperty(ProposalDataHelper, "getSoleProposalData", data => {
  const result = ProposalDataHelper.getBusinessProposalBase(data["2"], data["3"]);
  result["businessPerson"] = ProposalDataHelper.getBusinessPerson(data["4"]);
  result["bank"] = ProposalDataHelper.getBankDetails(data["5"], data["6"]);
  return result;
});

ProposalDataHelper_defineProperty(ProposalDataHelper, "getPartnershipProposalData", data => {
  const result = ProposalDataHelper.getBusinessProposalBase(data["2"], data["3"]);
  result["partners"] = [ProposalDataHelper.getBusinessPerson(data["4"]), ProposalDataHelper.getBusinessPerson(data["5"])];
  result["bank"] = ProposalDataHelper.getBankDetails(data["6"], data["7"]);
  return result;
});

ProposalDataHelper_defineProperty(ProposalDataHelper, "getLimitedProposalData", data => {
  var _data$4$directors;

  const result = ProposalDataHelper.getBusinessProposalBase(data["2"], data["3"]);
  result["directors"] = (_data$4$directors = data["4"].directors) === null || _data$4$directors === void 0 ? void 0 : _data$4$directors.map((item, index) => {
    return ProposalDataHelper.getBusinessPerson(item);
  });
  result["bank"] = ProposalDataHelper.getBankDetails(data["5"], data["6"]);
  return result;
});

ProposalDataHelper_defineProperty(ProposalDataHelper, "getAddress", address => {
  const result = {
    address1: address.address1,
    address2: address.address2,
    address3: address.address3,
    postcode: address.postcode,
    town: address.town,
    county: address.county,
    fromDate: address.fromDate ? external_moment_default()(address.fromDate).format("DD/MM/YYYY") : null,
    monthsAtAddress: address.timeAtAddressMonths,
    yearsAtAddress: address.timeAtAddressYears
  };
  return result;
});

ProposalDataHelper_defineProperty(ProposalDataHelper, "getEmployment", data => {
  const result = {
    typeId: data.typeId,
    position: data.position,
    employerName: data.employerName,
    natureOfBusiness: data.natureOfBusiness,
    telephone: data.telephone,
    startDate: data.startDate ? external_moment_default()(data.startDate).format("DD/MM/YYYY") : null,
    yearsEmployed: data.timeEmployedYears,
    monthsEmployed: data.timeEmployedMonths,
    address: {
      address1: data.address1,
      address2: data.address2,
      address3: data.address3,
      postcode: data.postcode,
      town: data.town,
      county: data.county
    }
  };
  return result;
});

ProposalDataHelper_defineProperty(ProposalDataHelper, "getBusinessPerson", data => {
  var _data$addresses;

  return {
    hirerTitleId: data.title,
    name: `${data.firstName} ${data.middleName} ${data.lastName}`,
    foreName: data.firstName,
    middleName: data.middleName,
    surName: data.lastName,
    birthDate: data.dob ? external_moment_default()(data.dob).format("DD/MM/YYYY") : null,
    genderId: data.genderId,
    email: data.emailAddress,
    nationalityId: data.nationalityId,
    maritalStatusId: data.maritalStatusId,
    propertyStatusId: data.propertyStatusId,
    propertyTypeId: data.propertyTypeId,
    addresses: data === null || data === void 0 ? void 0 : (_data$addresses = data.addresses) === null || _data$addresses === void 0 ? void 0 : _data$addresses.map((item, index) => {
      return ProposalDataHelper.getAddress(item);
    })
  };
});

ProposalDataHelper_defineProperty(ProposalDataHelper, "getBankDetails", (accountData, addressData) => {
  return {
    sortCode: accountData.sortCode,
    bankName: accountData.bankName,
    accountName: accountData.accountName,
    accountNumber: accountData.accountNumber,
    yearsWithBank: parseInt(addressData.bankYears) || 0,
    address: ProposalDataHelper.getAddress(addressData)
  };
});

ProposalDataHelper_defineProperty(ProposalDataHelper, "getBusinessProposalBase", (details, contactPage) => {
  var result = {
    tradingName: details.tradingName,
    natureOfBusiness: details.natureOfBusiness,
    dateEstablished: details.establishedDate ? external_moment_default()(details.establishedDate).format("DD/MM/YYYY") : null,
    vatNumber: details.vatNumber,
    parentCompany: details.parentCompany,
    companyReg: details.companyReg,
    email: contactPage.emailAddress,
    landline: contactPage.landline,
    fax: contactPage.fax,
    mobile: contactPage.mobileNumber,
    addresses: [ProposalDataHelper.getAddress(contactPage)],
    notes: contactPage === null || contactPage === void 0 ? void 0 : contactPage.notes
  };
  return result;
});
// EXTERNAL MODULE: ./helpers/urlHelper.tsx
var urlHelper = __webpack_require__("zjkP");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./components/proposal/wizard.tsx











const PersonalStepOne = dynamic_default()(() => __webpack_require__.e(/* import() */ 154).then(__webpack_require__.bind(null, "eWtZ")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("eWtZ")],
    modules: ['../../components/proposal/personal/personal-step-01']
  }
});
const PersonalStepTwo = dynamic_default()(() => __webpack_require__.e(/* import() */ 145).then(__webpack_require__.bind(null, "tQCv")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("tQCv")],
    modules: ['../../components/proposal/personal/personal-step-02']
  }
});
const PersonalStepThree = dynamic_default()(() => __webpack_require__.e(/* import() */ 128).then(__webpack_require__.bind(null, "chOp")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("chOp")],
    modules: ['../../components/proposal/personal/personal-step-03']
  }
});
const PersonalStepFour = dynamic_default()(() => __webpack_require__.e(/* import() */ 129).then(__webpack_require__.bind(null, "+jSg")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("+jSg")],
    modules: ['../../components/proposal/personal/personal-step-04']
  }
});
const PersonalStepFive = dynamic_default()(() => __webpack_require__.e(/* import() */ 155).then(__webpack_require__.bind(null, "8UPU")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("8UPU")],
    modules: ['../../components/proposal/personal/personal-step-05']
  }
});
const PersonalStepSix = dynamic_default()(() => __webpack_require__.e(/* import() */ 156).then(__webpack_require__.bind(null, "zt9G")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("zt9G")],
    modules: ['../../components/proposal/personal/personal-step-06']
  }
});
const PersonalStepSeven = dynamic_default()(() => __webpack_require__.e(/* import() */ 133).then(__webpack_require__.bind(null, "sspj")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("sspj")],
    modules: ['../../components/proposal/personal/personal-step-07']
  }
});
const PersonalStepEight = dynamic_default()(() => __webpack_require__.e(/* import() */ 140).then(__webpack_require__.bind(null, "OV31")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("OV31")],
    modules: ['../../components/proposal/personal/personal-step-08']
  }
});
const PersonalStepNine = dynamic_default()(() => __webpack_require__.e(/* import() */ 136).then(__webpack_require__.bind(null, "qaOE")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("qaOE")],
    modules: ['../../components/proposal/personal/personal-step-09']
  }
});
const PersonalStepTen = dynamic_default()(() => __webpack_require__.e(/* import() */ 149).then(__webpack_require__.bind(null, "WudC")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("WudC")],
    modules: ['../../components/proposal/personal/personal-step-10']
  }
});
const LimitedStepOne = dynamic_default()(() => __webpack_require__.e(/* import() */ 152).then(__webpack_require__.bind(null, "aCCq")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("aCCq")],
    modules: ['../../components/proposal/limited/ltd-step-01']
  }
});
const LimitedStepTwo = dynamic_default()(() => __webpack_require__.e(/* import() */ 142).then(__webpack_require__.bind(null, "NJea")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("NJea")],
    modules: ['../../components/proposal/limited/ltd-step-02']
  }
});
const LimitedStepThree = dynamic_default()(() => __webpack_require__.e(/* import() */ 130).then(__webpack_require__.bind(null, "wvCf")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("wvCf")],
    modules: ['../../components/proposal/limited/ltd-step-03']
  }
});
const LimitedStepFour = dynamic_default()(() => __webpack_require__.e(/* import() */ 124).then(__webpack_require__.bind(null, "6ST+")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("6ST+")],
    modules: ['../../components/proposal/limited/ltd-step-04']
  }
});
const LimitedStepFive = dynamic_default()(() => __webpack_require__.e(/* import() */ 138).then(__webpack_require__.bind(null, "cM5a")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("cM5a")],
    modules: ['../../components/proposal/limited/ltd-step-05']
  }
});
const LimitedStepSix = dynamic_default()(() => __webpack_require__.e(/* import() */ 134).then(__webpack_require__.bind(null, "f5hM")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("f5hM")],
    modules: ['../../components/proposal/limited/ltd-step-06']
  }
});
const LimitedStepSeven = dynamic_default()(() => __webpack_require__.e(/* import() */ 147).then(__webpack_require__.bind(null, "LGg4")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("LGg4")],
    modules: ['../../components/proposal/limited/ltd-step-07']
  }
});
const PartnerStepOne = dynamic_default()(() => __webpack_require__.e(/* import() */ 153).then(__webpack_require__.bind(null, "soh9")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("soh9")],
    modules: ['../../components/proposal/partnership/partner-step-01']
  }
});
const PartnerStepTwo = dynamic_default()(() => __webpack_require__.e(/* import() */ 143).then(__webpack_require__.bind(null, "1xwn")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("1xwn")],
    modules: ['../../components/proposal/partnership/partner-step-02']
  }
});
const PartnerStepThree = dynamic_default()(() => __webpack_require__.e(/* import() */ 131).then(__webpack_require__.bind(null, "bjHq")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("bjHq")],
    modules: ['../../components/proposal/partnership/partner-step-03']
  }
});
const PartnerStepFour = dynamic_default()(() => __webpack_require__.e(/* import() */ 125).then(__webpack_require__.bind(null, "4ODU")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("4ODU")],
    modules: ['../../components/proposal/partnership/partner-step-04']
  }
});
const PartnerStepFive = dynamic_default()(() => __webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(null, "hzTk")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("hzTk")],
    modules: ['../../components/proposal/partnership/partner-step-05']
  }
});
const PartnerStepSix = dynamic_default()(() => __webpack_require__.e(/* import() */ 139).then(__webpack_require__.bind(null, "Z14Q")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Z14Q")],
    modules: ['../../components/proposal/partnership/partner-step-06']
  }
});
const PartnerStepSeven = dynamic_default()(() => __webpack_require__.e(/* import() */ 135).then(__webpack_require__.bind(null, "+593")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("+593")],
    modules: ['../../components/proposal/partnership/partner-step-07']
  }
});
const PartnerStepEight = dynamic_default()(() => __webpack_require__.e(/* import() */ 148).then(__webpack_require__.bind(null, "OrHR")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("OrHR")],
    modules: ['../../components/proposal/partnership/partner-step-08']
  }
});
const SoleStepOne = dynamic_default()(() => __webpack_require__.e(/* import() */ 157).then(__webpack_require__.bind(null, "AJbk")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("AJbk")],
    modules: ['../../components/proposal/soletrader/sole-step-01']
  }
});
const SoleStepTwo = dynamic_default()(() => __webpack_require__.e(/* import() */ 144).then(__webpack_require__.bind(null, "7uvP")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("7uvP")],
    modules: ['../../components/proposal/soletrader/sole-step-02']
  }
});
const SoleStepThree = dynamic_default()(() => __webpack_require__.e(/* import() */ 132).then(__webpack_require__.bind(null, "oTaC")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("oTaC")],
    modules: ['../../components/proposal/soletrader/sole-step-03']
  }
});
const SoleStepFour = dynamic_default()(() => __webpack_require__.e(/* import() */ 127).then(__webpack_require__.bind(null, "FJHl")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("FJHl")],
    modules: ['../../components/proposal/soletrader/sole-step-04']
  }
});
const SoleStepFive = dynamic_default()(() => __webpack_require__.e(/* import() */ 141).then(__webpack_require__.bind(null, "poAI")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("poAI")],
    modules: ['../../components/proposal/soletrader/sole-step-05']
  }
});
const SoleStepSix = dynamic_default()(() => __webpack_require__.e(/* import() */ 137).then(__webpack_require__.bind(null, "GZ6d")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("GZ6d")],
    modules: ['../../components/proposal/soletrader/sole-step-06']
  }
});
const SoleStepSeven = dynamic_default()(() => __webpack_require__.e(/* import() */ 150).then(__webpack_require__.bind(null, "KCEV")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  }),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("KCEV")],
    modules: ['../../components/proposal/soletrader/sole-step-07']
  }
});

function mapStateToProps(state) {
  return {
    formData: state.formData,
    stepIndicator: state.stepIndicator
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    handleFormStep: step => {
      dispatch({
        type: 'UPDATE_INDICATOR',
        step: step
      });
    },
    handleFormSave: (step, data) => {
      dispatch({
        type: 'UPDATE_FIELDS',
        step: step,
        data: data
      });
    }
  };
};

const ProposalWizard = props => {
  const {
    0: stepsCount,
    1: setStepsCount
  } = Object(external_react_["useState"])(0); //Fields uses to submit form data

  const {
    0: proposalEnquiryId,
    1: setProposalEnquiryId
  } = Object(external_react_["useState"])(null);
  const {
    0: updateRequested,
    1: setUpdateRequested
  } = Object(external_react_["useState"])(null);
  const {
    0: completeRequested,
    1: setCompleteRequested
  } = Object(external_react_["useState"])(null);
  const {
    0: isSlimVersion,
    1: setIsSlimVersion
  } = Object(external_react_["useState"])(false);
  const router = Object(router_["useRouter"])(); //Should return true or false if not possible to continue

  const handleStepDataSave = (step, data) => {
    let result = false; //do some validation if required

    props.handleFormSave(step, data);
    result = true;

    if (result) {
      setUpdateRequested(Date.now());
    }

    return result;
  }; // Why not just call handleFormSave directly?


  const handleFormSubmit = (step, data) => {
    let result = false; //do some validation if required

    props.handleFormSave(step, data);
    result = true;

    if (result) {
      setCompleteRequested(Date.now());
    }

    return result;
  }; //Initialization


  Object(external_react_["useEffect"])(() => {
    const queryParams = new URLSearchParams(window.location.search);
    let quoteid = router.query.quoteid || queryParams.get("quoteid");
    let enquiryid = router.query.enquiryid || queryParams.get("enquiryid");
    let uid = router.query.uid || queryParams.get("uid");
    let directfinance = router.query.directfinance || queryParams.get("directfinance");

    if (props.proposalType === ProposalTypes["a" /* ProposalTypes */].Personal) {
      let slimVersion = router.query.slimversion || queryParams.get("slimversion");

      if (slimVersion == "1") {
        setIsSlimVersion(true);
      } // else{
      //     if(Math.round(Math.random()) === 1){
      //         setIsSlimVersion(true);
      //         router.push(GetFullUrlPath() + "&slimversion=1")
      //     }
      // }

    }

    ; //initialize proposal

    proposalEnquirieService_ProposalEnquirieService.GetEnquiryid(props.proposalType, quoteid, enquiryid, uid, directfinance == "1").then(result => {
      if (result.data) {
        setProposalEnquiryId(result.data.id);
      }
    });

    switch (props.proposalType) {
      case ProposalTypes["a" /* ProposalTypes */].Personal:
        setStepsCount(10);
        break;

      case ProposalTypes["a" /* ProposalTypes */].BusinessLtd:
        setStepsCount(7);
        break;

      case ProposalTypes["a" /* ProposalTypes */].BusinessPartner:
        setStepsCount(8);
        break;

      case ProposalTypes["a" /* ProposalTypes */].BusinessSole:
        setStepsCount(7);
        break;
    }

    props.handleFormStep(1);
  }, []);
  Object(external_react_["useEffect"])(() => {
    window.scrollTo(0, 0);
  }, [props.stepIndicator]);
  Object(external_react_["useEffect"])(() => {
    if (updateRequested) {
      const proposalData = getProposalData(); //Update proposal enquiry

      proposalEnquirieService_ProposalEnquirieService.UpdateEnquiry(proposalEnquiryId, proposalData);
    }
  }, [updateRequested]);
  Object(external_react_["useEffect"])(() => {
    if (completeRequested) {
      const proposalData = getProposalData(); //Update proposal enquiry

      proposalEnquirieService_ProposalEnquirieService.CompleteEnquiry(proposalEnquiryId, proposalData).then(() => {
        let goal = "proposal";

        if (isSlimVersion) {
          goal += "&slimversion=1";
        }

        let url = Object(urlHelper["s" /* GetThankYouPageUrl */])(false, goal);
        router.push(url);
      });
    }
  }, [completeRequested]);

  const getProposalData = () => {
    return ProposalDataHelper.getProposalData(props.proposalType, props.formData, isSlimVersion);
  };

  const renderProposalSteps = proposalType => {
    let steps = null;

    switch (proposalType) {
      case ProposalTypes["a" /* ProposalTypes */].Personal:
        if (isSlimVersion) {
          steps = /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [props.stepIndicator === 1 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepOne, {
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 2 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepTwo, {
              showMiddleName: false,
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 3 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepThree, {
              showProperyStatus: false,
              showMaritalStatus: false,
              showGenderSelector: false,
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 4 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepFive, {
              showSlimVersion: true,
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 5 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepSix, {
              showTotalMonthlyExpendature: true,
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 6 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepSeven, {
              showLandLine: false,
              showYourPosition: false,
              showSingleEmployentHistoryOnly: true,
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 7 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepEight, {
              showAccountName: false,
              showAccountNumer: false,
              showSortCodeLookup: false,
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 8 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepNine, {
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 9 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepTen, {
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: handleFormSubmit
            }) : ""]
          });
        } else {
          steps = /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [props.stepIndicator === 1 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepOne, {
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 2 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepTwo, {
              showMiddleName: true,
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 3 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepThree, {
              showProperyStatus: true,
              showMaritalStatus: true,
              showGenderSelector: true,
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 4 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepFour, {
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 5 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepFive, {
              showSlimVersion: false,
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 6 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepSix, {
              showTotalMonthlyExpendature: false,
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 7 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepSeven, {
              showLandLine: true,
              showYourPosition: true,
              showSingleEmployentHistoryOnly: false,
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 8 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepEight, {
              showAccountName: true,
              showAccountNumer: true,
              showSortCodeLookup: true,
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 9 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepNine, {
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: null
            }) : "", props.stepIndicator === 10 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PersonalStepTen, {
              handleFormSave: handleStepDataSave,
              handleFormStep: props.handleFormStep,
              handleFormSubmit: handleFormSubmit
            }) : ""]
          });
        }

        break;

      case ProposalTypes["a" /* ProposalTypes */].BusinessLtd:
        steps = /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [props.stepIndicator === 1 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(LimitedStepOne, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 2 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(LimitedStepTwo, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 3 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(LimitedStepThree, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 4 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(LimitedStepFour, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 5 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(LimitedStepFive, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 6 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(LimitedStepSix, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 7 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(LimitedStepSeven, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: handleFormSubmit
          }) : ""]
        });
        break;

      case ProposalTypes["a" /* ProposalTypes */].BusinessSole:
        steps = /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [props.stepIndicator === 1 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(SoleStepOne, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 2 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(SoleStepTwo, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 3 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(SoleStepThree, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 4 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(SoleStepFour, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 5 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(SoleStepFive, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 6 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(SoleStepSix, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 7 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(SoleStepSeven, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: handleFormSubmit
          }) : ""]
        });
        break;

      case ProposalTypes["a" /* ProposalTypes */].BusinessPartner:
        steps = /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [props.stepIndicator === 1 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PartnerStepOne, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 2 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PartnerStepTwo, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 3 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PartnerStepThree, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 4 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PartnerStepFour, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 5 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PartnerStepFive, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 6 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PartnerStepSix, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 7 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PartnerStepSeven, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: null
          }) : "", props.stepIndicator === 8 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(PartnerStepEight, {
            handleFormSave: handleStepDataSave,
            handleFormStep: props.handleFormStep,
            handleFormSubmit: handleFormSubmit
          }) : ""]
        });
        break;
    }

    return steps;
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: renderProposalSteps(props.proposalType)
  });
};

/* harmony default export */ var wizard = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(ProposalWizard));

/***/ })

};;