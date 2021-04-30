exports.ids = [151];
exports.modules = {

/***/ "CCQB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h7Ze");
/* harmony import */ var _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aws_sdk_client_lex_runtime_service_browser_LexRuntimeService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CejT");
/* harmony import */ var _aws_sdk_client_lex_runtime_service_browser_LexRuntimeService__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_lex_runtime_service_browser_LexRuntimeService__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aws_sdk_client_cognito_identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("c9Kb");
/* harmony import */ var _aws_sdk_client_cognito_identity__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_cognito_identity__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _aws_sdk_credential_provider_cognito_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LDja");
/* harmony import */ var _aws_sdk_credential_provider_cognito_identity__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_credential_provider_cognito_identity__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _aws_sdk_client_lex_runtime_service_browser_commands_PostTextCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Ida8");
/* harmony import */ var _aws_sdk_client_lex_runtime_service_browser_commands_PostTextCommand__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_lex_runtime_service_browser_commands_PostTextCommand__WEBPACK_IMPORTED_MODULE_6__);




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
    this.lexRuntimeService = new _aws_sdk_client_lex_runtime_service_browser_LexRuntimeService__WEBPACK_IMPORTED_MODULE_3__["LexRuntimeService"]({
      region: "eu-west-1",
      IdentityPoolId: this.props.IdentityPoolId,
      credentials: Object(_aws_sdk_credential_provider_cognito_identity__WEBPACK_IMPORTED_MODULE_5__["fromCognitoIdentityPool"])({
        client: new _aws_sdk_client_cognito_identity__WEBPACK_IMPORTED_MODULE_4__["CognitoIdentityClient"]({
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
    const postTextRequest = new _aws_sdk_client_lex_runtime_service_browser_commands_PostTextCommand__WEBPACK_IMPORTED_MODULE_6__["PostTextCommand"](params);
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
      const postTextRequest = new _aws_sdk_client_lex_runtime_service_browser_commands_PostTextCommand__WEBPACK_IMPORTED_MODULE_6__["PostTextCommand"](params);
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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        id: "chatcontainer",
        className: `${_leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['chatcontainer']} ${_leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[this.props.visible]}`,
        style: chatcontainerStyle,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          id: "chatheader",
          className: _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['chatheader'],
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            className: "lazyload",
            alt: "Leasing Options Leasebot will help you find the best deals 24/7!",
            width: "50",
            height: "50",
            "data-src": `${"https://imagecdn.leasingoptions.co.uk"}/website/static/leasebot.png`
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            children: "LeaseBot"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          id: "conversation",
          className: _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['conversation'],
          style: conversationStyle
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("form", {
          id: "chatform",
          className: _leasebot_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['chatform'],
          style: chatFormStyle,
          onSubmit: this.pushChat.bind(this),
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
            type: "text",
            id: "inputField",
            size: "40",
            value: this.state.data,
            placeholder: this.props.placeholder,
            onChange: this.handleChange.bind(this),
            style: inputStyle
          })
        })]
      })
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LeaseBot);

/***/ })

};;