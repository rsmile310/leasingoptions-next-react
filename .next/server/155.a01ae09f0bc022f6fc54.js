exports.ids = [155];
exports.modules = {

/***/ "8UPU":
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








const mapStateToProps = state => {
  return {
    formData: state.formData,
    stepNumber: state.stepIndicator
  };
};

const PersonalStepFive = props => {
  const formData = props.formData[props.stepNumber];

  const handleGATracking = () => Object(helpers_analytics__WEBPACK_IMPORTED_MODULE_1__[/* logLabelEvent */ "d"])('prop_form_tracking_personal', 'Click', 'income-details-completed');

  const {
    register,
    handleSubmit,
    errors,
    watch
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])();

  const onSubmit = data => {
    if (props.handleFormSave(props.stepNumber, data)) {
      props.handleFormStep(props.stepNumber + 1);
    }
  };

  const onBack = () => props.handleFormStep(props.stepNumber - 1);

  const watchHasOtherIncomes = watch("hasOtherIncomes", formData.hasOtherIncomes);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "w-100 bg-white p-3 p-md-5",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
      className: "mb-5",
      children: "Your Income Details"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [props.showSlimVersion && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "form-row mb-3",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "col-24 col-md-7",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
              htmlFor: "grossAnnualSalary",
              children: ["Your Gross Salary ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                children: "(Required)"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "input-group mb-3",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "input-group-prepend",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                  className: "input-group-text",
                  children: "\xA3"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                type: "text",
                className: `form-control ${errors.grossAnnualSalary ? "is-invalid" : ""}`,
                name: "grossAnnualSalary",
                id: "grossAnnualSalary",
                placeholder: "Gross Annual Salary",
                "aria-label": "Gross Annual Salary",
                "aria-describedby": "grossAnnualSalary",
                ref: register({
                  required: true,
                  pattern: /^[0-9]*$/
                }),
                defaultValue: formData.grossAnnualSalary
              }), errors.grossAnnualSalary && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: "This field is required"
              })]
            })]
          })
        })
      }), !props.showSlimVersion && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "form-row mb-3",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "col-24 col-md-7",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
              htmlFor: "grossMonthlySalary",
              children: ["Your Gross Monthly Salary ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                children: "(Required)"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "input-group mb-3",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "input-group-prepend",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                  className: "input-group-text",
                  children: "\xA3"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                type: "text",
                className: `form-control ${errors.grossMonthlySalary ? "is-invalid" : ""}`,
                name: "grossMonthlySalary",
                id: "grossMonthlySalary",
                placeholder: "Gross Monthly Salary",
                "aria-label": "Gross Monthly Salary",
                "aria-describedby": "grossMonthlySalary",
                ref: register({
                  required: true,
                  pattern: /^[0-9]*$/
                }),
                defaultValue: formData.grossMonthlySalary
              }), errors.grossMonthlySalary && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: "This field is required"
              })]
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "form-row mb-3",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "col-24 col-md-7",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
              htmlFor: "netMonthlySalary",
              children: ["Your Net Monthly Salary ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                children: "(Required)"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "input-group mb-3",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "input-group-prepend",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                  className: "input-group-text",
                  children: "\xA3"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                type: "text",
                className: `form-control ${errors.netMonthlySalary ? "is-invalid" : ""}`,
                name: "netMonthlySalary",
                id: "netMonthlySalary",
                placeholder: "Net Monthly Salary",
                "aria-label": "Net Monthly Salary",
                "aria-describedby": "net",
                ref: register({
                  required: true,
                  pattern: /^[0-9]*$/
                }),
                defaultValue: formData.netMonthlySalary
              }), errors.netMonthlySalary && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: "This field is required"
              })]
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "form-row mb-3",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "col-24 col-md-7",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
              htmlFor: "partnerGrossMonthlySalary",
              children: ["Partners Gross Monthly Salary ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                children: "(Required)"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "input-group mb-3",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "input-group-prepend",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                  className: "input-group-text",
                  children: "\xA3"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                type: "text",
                className: `form-control ${errors.partnerGrossMonthlySalary ? "is-invalid" : ""}`,
                name: "partnerGrossMonthlySalary",
                id: "partnerGrossMonthlySalary",
                placeholder: "Gross Monthly Salary",
                "aria-label": "Gross Monthly Salary",
                "aria-describedby": "partnerGross",
                ref: register({
                  required: true,
                  pattern: /^[0-9]*$/
                }),
                defaultValue: formData.partnerGrossMonthlySalary
              }), errors.partnerGrossMonthlySalary && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: "This field is required"
              })]
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "form-row mb-3",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "col-24 col-md-7",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
              htmlFor: "partnerNetMonthlySalary",
              children: ["Partners Net Monthly Salary ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                children: "(Required)"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "input-group mb-3",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "input-group-prepend",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                  className: "input-group-text",
                  children: "\xA3"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                type: "text",
                className: `form-control ${errors.partnerNetMonthlySalary ? "is-invalid" : ""}`,
                name: "partnerNetMonthlySalary",
                id: "partnerNetMonthlySalary",
                placeholder: "Net Monthly Salary",
                "aria-label": "Net Monthly Salary",
                "aria-describedby": "partnerNet",
                ref: register({
                  required: true,
                  pattern: /^[0-9]*$/
                }),
                defaultValue: formData.partnerNetMonthlySalary
              }), errors.partnerNetMonthlySalary && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                className: "invalid-feedback d-block",
                children: "This field is required"
              })]
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "form-row",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "col-24 col-md-12",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
              children: "Any Other Income?"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "form-row",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "col-24 col-md-12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "form-check form-check-inline",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                className: "form-check-input",
                type: "radio",
                name: "hasOtherIncomes",
                id: "hasOtherIncomes_no",
                value: "no",
                ref: register(),
                defaultChecked: !formData.hasOtherIncomes || formData.hasOtherIncomes === 'no'
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                className: "form-check-label",
                htmlFor: "hasOtherIncomes_no",
                children: "No"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "form-check form-check-inline",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                className: "form-check-input",
                type: "radio",
                name: "hasOtherIncomes",
                id: "hasOtherIncomes_yes",
                value: "yes",
                ref: register(),
                defaultChecked: formData.hasOtherIncomes === 'yes'
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                className: "form-check-label",
                htmlFor: "hasOtherIncomes_yes",
                children: "Yes"
              })]
            })]
          })
        }), watchHasOtherIncomes === "yes" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "form-row mb-3",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "col-24 col-md-7",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
                htmlFor: "otherIncome",
                children: ["Other Income ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("small", {
                  children: "(Required)"
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "input-group mb-3",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "input-group-prepend",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    className: "input-group-text",
                    children: "\xA3"
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
                  type: "text",
                  className: `form-control ${errors.otherIncome ? "is-invalid" : ""}`,
                  name: "otherIncome",
                  id: "otherIncome",
                  placeholder: "Other Income amount",
                  "aria-label": "Other Income amount",
                  "aria-describedby": "otherIncome",
                  ref: register({
                    required: true,
                    pattern: /^[0-9]*$/
                  }),
                  defaultValue: formData.otherIncome
                }), errors.otherIncome && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                  className: "invalid-feedback d-block",
                  children: "Please specify any other incomes."
                })]
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "form-row mb-3",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "col-24 col-md-7",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                htmlFor: "otherIncomeDetails",
                children: "Sources of Other Income"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("textarea", {
                className: "form-control",
                name: "otherIncomeDetails",
                id: "otherIncomeDetails",
                "aria-label": "Sources of Other Income",
                "aria-describedby": "otherIncomeDetails",
                placeholder: "If applicable please tell additional information that may be relevant to your application",
                ref: register(),
                defaultValue: formData.otherIncomeDetails
              })]
            })
          })]
        })]
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
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(PersonalStepFive));

/***/ })

};;