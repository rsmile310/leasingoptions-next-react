exports.ids = [2];
exports.modules = {

/***/ "./components/leasebot/index.js":
/*!**************************************!*\
  !*** ./components/leasebot/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leasebot.module.scss */ "./components/leasebot/leasebot.module.scss");
/* harmony import */ var _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aws_sdk_client_lex_runtime_service_browser_LexRuntimeService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/client-lex-runtime-service-browser/LexRuntimeService */ "@aws-sdk/client-lex-runtime-service-browser/LexRuntimeService");
/* harmony import */ var _aws_sdk_client_lex_runtime_service_browser_LexRuntimeService__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_lex_runtime_service_browser_LexRuntimeService__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _aws_sdk_client_cognito_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-sdk/client-cognito-identity */ "@aws-sdk/client-cognito-identity");
/* harmony import */ var _aws_sdk_client_cognito_identity__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_cognito_identity__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _aws_sdk_credential_provider_cognito_identity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-sdk/credential-provider-cognito-identity */ "@aws-sdk/credential-provider-cognito-identity");
/* harmony import */ var _aws_sdk_credential_provider_cognito_identity__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_credential_provider_cognito_identity__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _aws_sdk_client_lex_runtime_service_browser_commands_PostTextCommand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-sdk/client-lex-runtime-service-browser/commands/PostTextCommand */ "@aws-sdk/client-lex-runtime-service-browser/commands/PostTextCommand");
/* harmony import */ var _aws_sdk_client_lex_runtime_service_browser_commands_PostTextCommand__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_lex_runtime_service_browser_commands_PostTextCommand__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "E:\\current_project\\PPH\\tfs\\Website\\website\\components\\leasebot\\index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class LeaseBot extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "callback", (err, data) => {
      if (err) {
        console.log(err, err.stack);
        this.showError('Error:  ' + err.message + ' (see console for details)');
      }

      if (data) {
        // capture the sessionAttributes for the next cycle
        this.setState({
          sessionAttributes: data.sessionAttributes
        }); //sessionAttributes = data.sessionAttributes;
        // show response and/or error/dialog status

        this.showResponse(data);
      }

      var inputFieldText = document.getElementById('inputField'); // re-enable input

      inputFieldText.value = '';
      inputFieldText.locked = false;
    });

    this.state = {
      data: '',
      lexUserId: 'chatbot' + Date.now(),
      sessionAttributes: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.getElementById("inputField").focus();
    this.lexRuntimeService = new _aws_sdk_client_lex_runtime_service_browser_LexRuntimeService__WEBPACK_IMPORTED_MODULE_4__["LexRuntimeService"]({
      region: "eu-west-1",
      IdentityPoolId: this.props.IdentityPoolId,
      credentials: Object(_aws_sdk_credential_provider_cognito_identity__WEBPACK_IMPORTED_MODULE_6__["fromCognitoIdentityPool"])({
        client: new _aws_sdk_client_cognito_identity__WEBPACK_IMPORTED_MODULE_5__["CognitoIdentityClient"]({
          region: "eu-west-1"
        }),
        identityPoolId: this.props.IdentityPoolId // IDENTITY_POOL_ID

      })
    });
    var params = {
      botAlias: 'LeaseBot',
      botName: this.props.botName,
      inputText: 'Hi',
      userId: this.state.lexUserId,
      sessionAttributes: this.state.sessionAttributes
    };
    const postTextRequest = new _aws_sdk_client_lex_runtime_service_browser_commands_PostTextCommand__WEBPACK_IMPORTED_MODULE_7__["PostTextCommand"](params);
    this.lexRuntimeService.send(postTextRequest, (err, data) => {
      this.callback(err, data);
    }); // this.lexruntime.postText(params, this.callback);
  }

  pushChat(event) {
    event.preventDefault();
    var inputFieldText = document.getElementById('inputField');

    if (inputFieldText && inputFieldText.value && inputFieldText.value.trim().length > 0) {
      // disable input to show we're sending it
      var inputField = inputFieldText.value.trim();
      inputFieldText.value = '...';
      inputFieldText.locked = true; // send it to the Lex runtime

      var params = {
        botAlias: 'LeaseBot',
        botName: this.props.botName,
        inputText: inputField,
        userId: this.state.lexUserId,
        sessionAttributes: this.state.sessionAttributes
      };
      this.showRequest(inputField);
      const postTextRequest = new _aws_sdk_client_lex_runtime_service_browser_commands_PostTextCommand__WEBPACK_IMPORTED_MODULE_7__["PostTextCommand"](params);
      this.lexRuntimeService.send(postTextRequest, (err, data) => {
        this.callback(err, data);
      });
    } // we always cancel form submission


    return false;
  }

  showRequest(daText) {
    var conversationDiv = document.getElementById('conversation');
    var requestPara = document.createElement("P");
    requestPara.className = 'userRequest';
    requestPara.appendChild(document.createTextNode(daText));
    conversationDiv.appendChild(requestPara);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
  }

  showError(daText) {
    var conversationDiv = document.getElementById('conversation');
    var errorPara = document.createElement("P");
    errorPara.className = 'lexError';
    errorPara.appendChild(document.createTextNode(daText));
    conversationDiv.appendChild(errorPara);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
  }

  showResponse(lexResponse) {
    var conversationDiv = document.getElementById('conversation');
    var responsePara = document.createElement("P");
    responsePara.className = 'lexResponse';

    if (lexResponse.message) {
      responsePara.appendChild(document.createTextNode(lexResponse.message));
      responsePara.appendChild(document.createElement('br'));
    }

    if (lexResponse.dialogState === 'ReadyForFulfillment') {
      responsePara.appendChild(document.createTextNode('Ready for fulfillment')); // TODO:  show slot values
    } else {
      responsePara.appendChild(document.createTextNode(''));
    }

    conversationDiv.appendChild(responsePara);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      data: event.target.value
    });
  }

  render() {
    const inputStyle = {
      padding: '4px',
      fontSize: 24,
      width: '388px',
      height: '40px',
      borderRadius: '1px',
      border: '10px'
    };
    const conversationStyle = {
      width: '400px',
      height: this.props.height,
      border: 'px solid #ccc',
      backgroundColor: this.props.backgroundColor,
      padding: '4px',
      overflow: 'scroll',
      borderBottom: 'thin ridge #bfbfbf'
    };
    const chatcontainerStyle = {
      backgroundColor: '#FFFFFF',
      width: 408
    };
    const chatFormStyle = {
      margin: '1px',
      padding: '2px'
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "chatcontainer",
        className: `${_leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['chatcontainer']} ${_leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[this.props.visible]}`,
        style: chatcontainerStyle,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "chatheader",
          className: _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['chatheader'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "lazyload",
            alt: "Leasing Options Leasebot will help you find the best deals 24/7!",
            width: "50",
            height: "50",
            "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/leasebot.png`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 74
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "LeaseBot"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 268
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "conversation",
          className: _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['conversation'],
          style: conversationStyle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          id: "chatform",
          className: _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['chatform'],
          style: chatFormStyle,
          onSubmit: this.pushChat.bind(this),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "inputField",
            size: "40",
            value: this.state.data,
            placeholder: this.props.placeholder,
            onChange: this.handleChange.bind(this),
            style: inputStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }, this)
    }, void 0, false);
  }

}

LeaseBot.propTypes = {
  botName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  IdentityPoolId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  headerText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (LeaseBot);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xlYXNlYm90L2luZGV4LmpzIl0sIm5hbWVzIjpbIkxlYXNlQm90IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZXJyIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsInNob3dFcnJvciIsIm1lc3NhZ2UiLCJzZXRTdGF0ZSIsInNlc3Npb25BdHRyaWJ1dGVzIiwic2hvd1Jlc3BvbnNlIiwiaW5wdXRGaWVsZFRleHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJsb2NrZWQiLCJzdGF0ZSIsImxleFVzZXJJZCIsIkRhdGUiLCJub3ciLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJmb2N1cyIsImxleFJ1bnRpbWVTZXJ2aWNlIiwiTGV4UnVudGltZVNlcnZpY2UiLCJyZWdpb24iLCJJZGVudGl0eVBvb2xJZCIsImNyZWRlbnRpYWxzIiwiZnJvbUNvZ25pdG9JZGVudGl0eVBvb2wiLCJjbGllbnQiLCJDb2duaXRvSWRlbnRpdHlDbGllbnQiLCJpZGVudGl0eVBvb2xJZCIsInBhcmFtcyIsImJvdEFsaWFzIiwiYm90TmFtZSIsImlucHV0VGV4dCIsInVzZXJJZCIsInBvc3RUZXh0UmVxdWVzdCIsIlBvc3RUZXh0Q29tbWFuZCIsInNlbmQiLCJjYWxsYmFjayIsInB1c2hDaGF0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJsZW5ndGgiLCJpbnB1dEZpZWxkIiwic2hvd1JlcXVlc3QiLCJkYVRleHQiLCJjb252ZXJzYXRpb25EaXYiLCJyZXF1ZXN0UGFyYSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZXJyb3JQYXJhIiwibGV4UmVzcG9uc2UiLCJyZXNwb25zZVBhcmEiLCJkaWFsb2dTdGF0ZSIsInRhcmdldCIsInJlbmRlciIsImlucHV0U3R5bGUiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImNvbnZlcnNhdGlvblN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmZsb3ciLCJib3JkZXJCb3R0b20iLCJjaGF0Y29udGFpbmVyU3R5bGUiLCJjaGF0Rm9ybVN0eWxlIiwibWFyZ2luIiwic3R5bGUiLCJ2aXNpYmxlIiwicHJvY2VzcyIsInBsYWNlaG9sZGVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImhlYWRlclRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxRQUFOLFNBQXVCQyw0Q0FBSyxDQUFDQyxTQUE3QixDQUF1QztBQUNuQ0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDZixVQUFNQSxLQUFOOztBQURlLHNDQXlDUixDQUFDQyxHQUFELEVBQU1DLElBQU4sS0FBZTtBQUN0QixVQUFJRCxHQUFKLEVBQVM7QUFDTEUsZUFBTyxDQUFDQyxHQUFSLENBQVlILEdBQVosRUFBaUJBLEdBQUcsQ0FBQ0ksS0FBckI7QUFDQSxhQUFLQyxTQUFMLENBQWUsYUFBYUwsR0FBRyxDQUFDTSxPQUFqQixHQUEyQiw0QkFBMUM7QUFDSDs7QUFDRCxVQUFJTCxJQUFKLEVBQVU7QUFDTjtBQUNBLGFBQUtNLFFBQUwsQ0FBYztBQUFDQywyQkFBaUIsRUFBRVAsSUFBSSxDQUFDTztBQUF6QixTQUFkLEVBRk0sQ0FHTjtBQUNBOztBQUNBLGFBQUtDLFlBQUwsQ0FBa0JSLElBQWxCO0FBQ0g7O0FBQ0QsVUFBSVMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBckIsQ0Fac0IsQ0FhdEI7O0FBQ0FGLG9CQUFjLENBQUNHLEtB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QUFFLEtBQUtsQyxRQUFMLENBQWNyQixJQUFkLENBQW1CLElBQW5CLENBQWxGO0FBQUEsaUNBQ0k7QUFDSSxnQkFBSSxFQUFDLE1BRFQ7QUFFSSxjQUFFLEVBQUMsWUFGUDtBQUdJLGdCQUFJLEVBQUMsSUFIVDtBQUlJLGlCQUFLLEVBQUUsS0FBS0wsS0FBTCxDQUFXZCxJQUp0QjtBQUtJLHVCQUFXLEVBQUUsS0FBS0YsS0FBTCxDQUFXaUYsV0FMNUI7QUFNSSxvQkFBUSxFQUFFLEtBQUs3RCxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQU5kO0FBT0ksaUJBQUssRUFBRTJDO0FBUFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUJBREo7QUFtQkg7O0FBdExrQzs7QUF5THZDcEUsUUFBUSxDQUFDc0YsU0FBVCxHQUFxQjtBQUNqQi9DLFNBQU8sRUFBRWdELGlEQUFTLENBQUNDLE1BREY7QUFFakJ6RCxnQkFBYyxFQUFFd0QsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGaEI7QUFHakJKLGFBQVcsRUFBRUUsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFIYjtBQUlqQmIsaUJBQWUsRUFBRVcsaURBQVMsQ0FBQ0MsTUFKVjtBQUtqQmhCLFFBQU0sRUFBRWUsaURBQVMsQ0FBQ0csTUFMRDtBQU1qQkMsWUFBVSxFQUFFSixpREFBUyxDQUFDQztBQU5MLENBQXJCO0FBU2V4Rix1RUFBZixFIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9sZWFzZWJvdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExleFJ1bnRpbWVTZXJ2aWNlICB9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtbGV4LXJ1bnRpbWUtc2VydmljZS1icm93c2VyL0xleFJ1bnRpbWVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvZ25pdG9JZGVudGl0eUNsaWVudCB9ICBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LWNvZ25pdG8taWRlbnRpdHlcIjtcclxuaW1wb3J0IHsgZnJvbUNvZ25pdG9JZGVudGl0eVBvb2wgfSAgZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItY29nbml0by1pZGVudGl0eVwiO1xyXG5pbXBvcnQgeyBQb3N0VGV4dENvbW1hbmQgIH0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1sZXgtcnVudGltZS1zZXJ2aWNlLWJyb3dzZXIvY29tbWFuZHMvUG9zdFRleHRDb21tYW5kXCI7XHJcbmNsYXNzIExlYXNlQm90IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRhdGE6ICcnLCBcclxuICAgICAgICAgICAgbGV4VXNlcklkOiAnY2hhdGJvdCcgKyBEYXRlLm5vdygpLCBcclxuICAgICAgICAgICAgc2Vzc2lvbkF0dHJpYnV0ZXM6IHt9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7ICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZpZWxkXCIpLmZvY3VzKCk7XHJcblxyXG4gICAgICAgIHRoaXMubGV4UnVudGltZVNlcnZpY2UgPSBuZXcgTGV4UnVudGltZVNlcnZpY2UoeyBcclxuICAgICAgICAgICAgcmVnaW9uOiBcImV1LXdlc3QtMVwiLFxyXG4gICAgICAgICAgICBJZGVudGl0eVBvb2xJZDogdGhpcy5wcm9wcy5JZGVudGl0eVBvb2xJZCwgXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBmcm9tQ29nbml0b0lkZW50aXR5UG9vbCh7XHJcbiAgICAgICAgICAgICAgICBjbGllbnQ6IG5ldyBDb2duaXRvSWRlbnRpdHlDbGllbnQoeyByZWdpb246IFwiZXUtd2VzdC0xXCIgfSksXHJcbiAgICAgICAgICAgICAgICBpZGVudGl0eVBvb2xJZDogdGhpcy5wcm9wcy5JZGVudGl0eVBvb2xJZCAvLyBJREVOVElUWV9QT09MX0lEXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgYm90QWxpYXM6ICdMZWFzZUJvdCcsXHJcbiAgICAgICAgICAgIGJvdE5hbWU6IHRoaXMucHJvcHMuYm90TmFtZSxcclxuICAgICAgICAgICAgaW5wdXRUZXh0OiAnSGknLFxyXG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMuc3RhdGUubGV4VXNlcklkLCAgICAgIFxyXG4gICAgICAgICAgICBzZXNzaW9uQXR0cmlidXRlczogdGhpcy5zdGF0ZS5zZXNzaW9uQXR0cmlidXRlc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHBvc3RUZXh0UmVxdWVzdCA9IG5ldyBQb3N0VGV4dENvbW1hbmQocGFyYW1zKTtcclxuXHJcbiAgICAgICAgdGhpcy5sZXhSdW50aW1lU2VydmljZS5zZW5kKHBvc3RUZXh0UmVxdWVzdCwgKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKGVyciwgZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubGV4cnVudGltZS5wb3N0VGV4dChwYXJhbXMsIHRoaXMuY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuIFxyXG4gIFxyXG4gICAgY2FsbGJhY2sgPSAoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIsIGVyci5zdGFjayk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKCdFcnJvcjogICcgKyBlcnIubWVzc2FnZSArICcgKHNlZSBjb25zb2xlIGZvciBkZXRhaWxzKScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIGNhcHR1cmUgdGhlIHNlc3Npb25BdHRyaWJ1dGVzIGZvciB0aGUgbmV4dCBjeWNsZVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZXNzaW9uQXR0cmlidXRlczogZGF0YS5zZXNzaW9uQXR0cmlidXRlc30pXHJcbiAgICAgICAgICAgIC8vc2Vzc2lvbkF0dHJpYnV0ZXMgPSBkYXRhLnNlc3Npb25BdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAvLyBzaG93IHJlc3BvbnNlIGFuZC9vciBlcnJvci9kaWFsb2cgc3RhdHVzXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3BvbnNlKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5wdXRGaWVsZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRGaWVsZCcpO1xyXG4gICAgICAgIC8vIHJlLWVuYWJsZSBpbnB1dFxyXG4gICAgICAgIGlucHV0RmllbGRUZXh0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgaW5wdXRGaWVsZFRleHQubG9ja2VkID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1c2hDaGF0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIGlucHV0RmllbGRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RmllbGQnKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0RmllbGRUZXh0ICYmIGlucHV0RmllbGRUZXh0LnZhbHVlICYmIGlucHV0RmllbGRUZXh0LnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBkaXNhYmxlIGlucHV0IHRvIHNob3cgd2UncmUgc2VuZGluZyBpdFxyXG4gICAgICAgICAgICB2YXIgaW5wdXRGaWVsZCA9IGlucHV0RmllbGRUZXh0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZFRleHQudmFsdWUgPSAnLi4uJztcclxuICAgICAgICAgICAgaW5wdXRGaWVsZFRleHQubG9ja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNlbmQgaXQgdG8gdGhlIExleCBydW50aW1lXHJcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBib3RBbGlhczogJ0xlYXNlQm90JyxcclxuICAgICAgICAgICAgICAgIGJvdE5hbWU6IHRoaXMucHJvcHMuYm90TmFtZSxcclxuICAgICAgICAgICAgICAgIGlucHV0VGV4dDogaW5wdXRGaWVsZCxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdGhpcy5zdGF0ZS5sZXhVc2VySWQsXHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uQXR0cmlidXRlczogdGhpcy5zdGF0ZS5zZXNzaW9uQXR0cmlidXRlc1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93UmVxdWVzdChpbnB1dEZpZWxkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RUZXh0UmVxdWVzdCA9IG5ldyBQb3N0VGV4dENvbW1hbmQocGFyYW1zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGV4UnVudGltZVNlcnZpY2Uuc2VuZChwb3N0VGV4dFJlcXVlc3QsIChlcnIsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soZXJyLCBkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdlIGFsd2F5cyBjYW5jZWwgZm9ybSBzdWJtaXNzaW9uXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dSZXF1ZXN0KGRhVGV4dCkge1xyXG4gICAgICAgIHZhciBjb252ZXJzYXRpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udmVyc2F0aW9uJyk7XHJcbiAgICAgICAgdmFyIHJlcXVlc3RQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgICAgICAgcmVxdWVzdFBhcmEuY2xhc3NOYW1lID0gJ3VzZXJSZXF1ZXN0JztcclxuICAgICAgICByZXF1ZXN0UGFyYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYVRleHQpKTtcclxuICAgICAgICBjb252ZXJzYXRpb25EaXYuYXBwZW5kQ2hpbGQocmVxdWVzdFBhcmEpO1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbkRpdi5zY3JvbGxUb3AgPSBjb252ZXJzYXRpb25EaXYuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dFcnJvcihkYVRleHQpIHtcclxuICAgICAgICB2YXIgY29udmVyc2F0aW9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnZlcnNhdGlvbicpO1xyXG4gICAgICAgIHZhciBlcnJvclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuICAgICAgICBlcnJvclBhcmEuY2xhc3NOYW1lID0gJ2xleEVycm9yJztcclxuICAgICAgICBlcnJvclBhcmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGFUZXh0KSk7XHJcbiAgICAgICAgY29udmVyc2F0aW9uRGl2LmFwcGVuZENoaWxkKGVycm9yUGFyYSk7XHJcbiAgICAgICAgY29udmVyc2F0aW9uRGl2LnNjcm9sbFRvcCA9IGNvbnZlcnNhdGlvbkRpdi5zY3JvbGxIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Jlc3BvbnNlKGxleFJlc3BvbnNlKSB7XHJcbiAgICAgICAgdmFyIGNvbnZlcnNhdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb252ZXJzYXRpb24nKTtcclxuICAgICAgICB2YXIgcmVzcG9uc2VQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgICAgICAgcmVzcG9uc2VQYXJhLmNsYXNzTmFtZSA9ICdsZXhSZXNwb25zZSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGxleFJlc3BvbnNlLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2VQYXJhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxleFJlc3BvbnNlLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgcmVzcG9uc2VQYXJhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGV4UmVzcG9uc2UuZGlhbG9nU3RhdGUgPT09ICdSZWFkeUZvckZ1bGZpbGxtZW50Jykge1xyXG4gICAgICAgICAgICByZXNwb25zZVBhcmEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXHJcbiAgICAgICAgICAgICdSZWFkeSBmb3IgZnVsZmlsbG1lbnQnKSk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86ICBzaG93IHNsb3QgdmFsdWVzXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzcG9uc2VQYXJhLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnZlcnNhdGlvbkRpdi5hcHBlbmRDaGlsZChyZXNwb25zZVBhcmEpO1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbkRpdi5zY3JvbGxUb3AgPSBjb252ZXJzYXRpb25EaXYuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0U3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICc0cHgnLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMjQsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMzg4cHgnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXB4JyxcclxuICAgICAgICAgICAgYm9yZGVyOiAnMTBweCdcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29udmVyc2F0aW9uU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnNDAwcHgnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxyXG4gICAgICAgICAgICBib3JkZXI6ICdweCBzb2xpZCAjY2NjJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgcGFkZGluZzogJzRweCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAndGhpbiByaWRnZSAjYmZiZmJmJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjaGF0Y29udGFpbmVyU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgICAgICAgICB3aWR0aDogNDA4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNoYXRGb3JtU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogJzFweCcsIFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMnB4J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaGF0Y29udGFpbmVyXCIgY2xhc3NOYW1lPXtgJHtzdHlsZVsnY2hhdGNvbnRhaW5lciddfSAke3N0eWxlW3RoaXMucHJvcHMudmlzaWJsZV19YH0gc3R5bGU9e2NoYXRjb250YWluZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNoYXRoZWFkZXJcIiBjbGFzc05hbWU9e3N0eWxlWydjaGF0aGVhZGVyJ119PjxpbWcgY2xhc3NOYW1lPVwibGF6eWxvYWRcIiBhbHQ9XCJMZWFzaW5nIE9wdGlvbnMgTGVhc2Vib3Qgd2lsbCBoZWxwIHlvdSBmaW5kIHRoZSBiZXN0IGRlYWxzIDI0LzchXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgZGF0YS1zcmM9e2Ake3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NETn0vd2Vic2l0ZS9zdGF0aWMvbGVhc2Vib3QucG5nYH0gLz48c3Bhbj5MZWFzZUJvdDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udmVyc2F0aW9uXCIgY2xhc3NOYW1lPXtzdHlsZVsnY29udmVyc2F0aW9uJ119IHN0eWxlPXtjb252ZXJzYXRpb25TdHlsZX0gPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiY2hhdGZvcm1cIiBjbGFzc05hbWU9e3N0eWxlWydjaGF0Zm9ybSddfSBzdHlsZT17Y2hhdEZvcm1TdHlsZX0gb25TdWJtaXQ9e3RoaXMucHVzaENoYXQuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dEZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtpbnB1dFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbkxlYXNlQm90LnByb3BUeXBlcyA9IHtcclxuICAgIGJvdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBJZGVudGl0eVBvb2xJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGhlYWRlclRleHQ6IFByb3BUeXBlcy5zdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVhc2VCb3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==