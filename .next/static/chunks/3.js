(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./node_modules/react-snowfall/lib/Snowfall.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-snowfall/lib/Snowfall.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _config = __webpack_require__(/*! ./config */ "./node_modules/react-snowfall/lib/config.js");

var _hooks = __webpack_require__(/*! ./hooks */ "./node_modules/react-snowfall/lib/hooks.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var Snowfall = function Snowfall() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#dee4fd' : _ref$color,
      _ref$snowflakeCount = _ref.snowflakeCount,
      snowflakeCount = _ref$snowflakeCount === void 0 ? 150 : _ref$snowflakeCount,
      style = _ref.style;

  var mergedStyle = (0, _hooks.useSnowfallStyle)(style);
  var canvasRef = (0, _react.useRef)();
  var canvasSize = (0, _hooks.useComponentSize)(canvasRef);
  var animationFrame = (0, _react.useRef)(0);
  var lastUpdate = (0, _react.useRef)(Date.now());
  var config = (0, _react.useMemo)(function () {
    return {
      color: color
    };
  }, [color]);
  var snowflakes = (0, _hooks.useSnowflakes)(canvasRef, snowflakeCount, config);

  var updateCanvasRef = function updateCanvasRef(element) {
    canvasRef.current = element;
  };

  var render = (0, _react.useCallback)(function () {
    var framesPassed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var canvas = canvasRef.current;

    if (canvas) {
      // Update the positions of the snowflakes
      snowflakes.forEach(function (snowflake) {
        return snowflake.update(canvas, framesPassed);
      }); // Render them if the canvas is available

      var ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        snowflakes.forEach(function (snowflake) {
          return snowflake.draw(canvas, ctx);
        });
      }
    }
  }, [snowflakes]);
  var loop = (0, _react.useCallback)(function () {
    // Update based on time passed so that a slow frame rate won't slow down the snowflake
    var now = Date.now();
    var msPassed = Date.now() - lastUpdate.current;
    lastUpdate.current = now; // Frames that would have passed if running at 60 fps

    var framesPassed = msPassed / _config.targetFrameTime;
    render(framesPassed);
    animationFrame.current = requestAnimationFrame(loop);
  }, [render]);
  (0, _react.useEffect)(function () {
    loop();
    return function () {
      return cancelAnimationFrame(animationFrame.current);
    };
  }, [loop]);
  return _react["default"].createElement("canvas", {
    ref: updateCanvasRef,
    height: canvasSize.height,
    width: canvasSize.width,
    style: mergedStyle
  });
};

var _default = Snowfall;
exports["default"] = _default;
//# sourceMappingURL=Snowfall.js.map

/***/ }),

/***/ "./node_modules/react-snowfall/lib/Snowflake.js":
/*!******************************************************!*\
  !*** ./node_modules/react-snowfall/lib/Snowflake.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-snowfall/lib/utils.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultConfig = {
  color: '#dee4fd',
  radius: [0.5, 3.0],
  speed: [1, 3],
  wind: [-0.5, 2],
  changeFrequency: 200
};

/** An individual snowflake that will update it's location every call to `draw` */
var Snowflake =
/*#__PURE__*/
function () {
  function Snowflake(_canvas) {
    var _this = this;

    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Snowflake);

    _defineProperty(this, "config", void 0);

    _defineProperty(this, "params", void 0);

    _defineProperty(this, "framesSinceLastUpdate", void 0);

    _defineProperty(this, "draw", function (canvas, inputCtx) {
      var ctx = inputCtx || canvas.getContext('2d');

      if (ctx) {
        ctx.beginPath();
        ctx.arc(_this.params.x, _this.params.y, _this.params.radius, 0, 2 * Math.PI);
        ctx.fillStyle = _this.fullConfig.color;
        ctx.closePath();
        ctx.fill();
      }
    });

    _defineProperty(this, "translate", function (canvas) {
      var framesPassed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var _this$params = _this.params,
          x = _this$params.x,
          y = _this$params.y,
          wind = _this$params.wind,
          speed = _this$params.speed,
          nextWind = _this$params.nextWind,
          nextSpeed = _this$params.nextSpeed; // Update current location, wrapping around if going off the canvas

      _this.params.x = (x + wind * framesPassed) % canvas.offsetWidth;
      _this.params.y = (y + speed * framesPassed) % canvas.offsetHeight; // Update the wind and speed towards the desired values

      _this.params.speed = (0, _utils.lerp)(speed, nextSpeed, 0.01);
      _this.params.wind = (0, _utils.lerp)(wind, nextWind, 0.01);

      if (_this.framesSinceLastUpdate++ > _this.fullConfig.changeFrequency) {
        _this.updateTargetParams();

        _this.framesSinceLastUpdate = 0;
      }
    });

    _defineProperty(this, "updateTargetParams", function () {
      _this.params.nextSpeed = _utils.random.apply(void 0, _toConsumableArray(_this.fullConfig.speed));
      _this.params.nextWind = _utils.random.apply(void 0, _toConsumableArray(_this.fullConfig.wind));
    });

    _defineProperty(this, "update", function (canvas, framesPassed) {
      _this.translate(canvas, framesPassed);
    });

    // Set custom config
    this.config = config; // Setting initial parameters

    var _this$fullConfig = this.fullConfig,
        radius = _this$fullConfig.radius,
        _wind = _this$fullConfig.wind,
        _speed = _this$fullConfig.speed;
    this.params = {
      x: (0, _utils.random)(0, _canvas.offsetWidth),
      y: (0, _utils.random)(-_canvas.offsetHeight, 0),
      radius: _utils.random.apply(void 0, _toConsumableArray(radius)),
      speed: _utils.random.apply(void 0, _toConsumableArray(_speed)),
      wind: _utils.random.apply(void 0, _toConsumableArray(_wind)),
      nextSpeed: _utils.random.apply(void 0, _toConsumableArray(_wind)),
      nextWind: _utils.random.apply(void 0, _toConsumableArray(_speed))
    };
    this.framesSinceLastUpdate = 0;
  }

  _createClass(Snowflake, [{
    key: "fullConfig",
    get: function get() {
      return _objectSpread({}, defaultConfig, this.config);
    }
  }]);

  return Snowflake;
}();

var _default = Snowflake;
exports["default"] = _default;
//# sourceMappingURL=Snowflake.js.map

/***/ }),

/***/ "./node_modules/react-snowfall/lib/config.js":
/*!***************************************************!*\
  !*** ./node_modules/react-snowfall/lib/config.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestAnimationFrame = exports.targetFrameTime = exports.snowfallBaseStyle = void 0;
var snowfallBaseStyle = {
  pointerEvents: 'none',
  backgroundColor: 'transparent',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%' // Target of 60 frames per second

};
exports.snowfallBaseStyle = snowfallBaseStyle;
var targetFrameTime = 1000 / 60;
exports.targetFrameTime = targetFrameTime;
var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
exports.requestAnimationFrame = requestAnimationFrame;
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/react-snowfall/lib/hooks.js":
/*!**************************************************!*\
  !*** ./node_modules/react-snowfall/lib/hooks.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSnowfallStyle = exports.useComponentSize = exports.useSnowflakes = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _Snowflake = _interopRequireDefault(__webpack_require__(/*! ./Snowflake */ "./node_modules/react-snowfall/lib/Snowflake.js"));

var _config = __webpack_require__(/*! ./config */ "./node_modules/react-snowfall/lib/config.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-snowfall/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * A utility function to create a collection of snowflakes
 * @param canvasRef A ref to the canvas element
 * @param amount The number of snowflakes
 * @param config The configuration for each snowflake
 */
var createSnowflakes = function createSnowflakes(canvasRef, amount, config) {
  var snowflakes = [];

  for (var i = 0; i < amount; i++) {
    snowflakes.push(new _Snowflake["default"](canvasRef.current, config));
  }

  return snowflakes;
};
/**
 * A utility hook to manage creating and updating a collection of snowflakes
 * @param canvasRef A ref to the canvas element
 * @param amount The number of snowflakes
 * @param config The configuration for each snowflake
 */


var useSnowflakes = function useSnowflakes(canvasRef, amount, config) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      snowflakes = _useState2[0],
      setSnowflakes = _useState2[1]; // Handle change of amount


  (0, _react.useEffect)(function () {
    setSnowflakes(function (snowflakes) {
      var sizeDifference = amount - snowflakes.length;

      if (sizeDifference > 0) {
        return [].concat(_toConsumableArray(snowflakes), _toConsumableArray(createSnowflakes(canvasRef, sizeDifference, config)));
      }

      if (sizeDifference < 0) {
        return snowflakes.slice(0, amount);
      }

      return snowflakes;
    });
  }, [amount, canvasRef, config]); // Handle change of config

  (0, _react.useEffect)(function () {
    setSnowflakes(function (snowflakes) {
      return snowflakes.map(function (snowflake) {
        snowflake.config = config;
        return snowflake;
      });
    });
  }, [config]);
  return snowflakes;
};
/**
 * Returns the height and width of a HTML element, uses the `ResizeObserver` api if available to detect changes to the
 * size. Falls back to listening for resize events on the window.
 * @param ref A ref to the HTML element to be measured
 */


exports.useSnowflakes = useSnowflakes;

var useComponentSize = function useComponentSize(ref) {
  var _useState3 = (0, _react.useState)((0, _utils.getSize)(ref.current)),
      _useState4 = _slicedToArray(_useState3, 2),
      size = _useState4[0],
      setSize = _useState4[1];

  var resizeHandler = (0, _react.useCallback)(function () {
    if (ref.current) {
      setSize((0, _utils.getSize)(ref.current));
    }
  }, [ref]);
  (0, _react.useLayoutEffect)(function () {
    var _window = window,
        ResizeObserver = _window.ResizeObserver;
    if (!ref.current) return;
    resizeHandler();

    if (typeof ResizeObserver === 'function') {
      var resizeObserver = new ResizeObserver(resizeHandler);
      resizeObserver.observe(ref.current);
      return function () {
        return resizeObserver.disconnect();
      };
    } else {
      window.addEventListener('resize', resizeHandler);
      return function () {
        return window.removeEventListener('resize', resizeHandler);
      };
    }
  }, [ref, resizeHandler]);
  return size;
};
/**
 * Utility hook that merges any provided styles with the default styles
 * @param overrides The style prop passed into the component
 */


exports.useComponentSize = useComponentSize;

var useSnowfallStyle = function useSnowfallStyle(overrides) {
  var styles = (0, _react.useMemo)(function () {
    return _objectSpread({}, _config.snowfallBaseStyle, overrides || {});
  }, [overrides]);
  return styles;
};

exports.useSnowfallStyle = useSnowfallStyle;
//# sourceMappingURL=hooks.js.map

/***/ }),

/***/ "./node_modules/react-snowfall/lib/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/react-snowfall/lib/utils.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = random;
exports.lerp = lerp;
exports.getSize = getSize;

/**
 * Enhanced random function, selects a random value between a minimum and maximum. If the values provided are both
 * integers then the number returned will be an integer, otherwise the return number will be a decimal.
 * @param min The minimum value
 * @param max The maximum value
 */
function random(min, max) {
  var randomNumber = Math.random() * (max - min + 1) + min;

  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return randomNumber;
  } else {
    return Math.floor(randomNumber);
  }
}
/**
 * Linear interpolation function to gradually step towards a target value
 * @param start The current value
 * @param end The target value
 * @param normal The rate of change between 0 and 1 (0 = no change, 1 = instant)
 */


function lerp(start, end, normal) {
  return (1 - normal) * start + normal * end;
}
/**
 * Gets the height and width of the provided HTML element
 * @param element The html element to measure
 */


function getSize(element) {
  if (!element) return {
    height: 0,
    width: 0
  };
  return {
    height: element.offsetHeight,
    width: element.offsetWidth
  };
}
//# sourceMappingURL=utils.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNub3dmYWxsL2xpYi9Tbm93ZmFsbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNub3dmYWxsL2xpYi9Tbm93Zmxha2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zbm93ZmFsbC9saWIvY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc25vd2ZhbGwvbGliL2hvb2tzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc25vd2ZhbGwvbGliL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLHFDQUFxQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVwRCxjQUFjLG1CQUFPLENBQUMsNkRBQVU7O0FBRWhDLGFBQWEsbUJBQU8sQ0FBQywyREFBUzs7QUFFOUIsdUNBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1QixzREFBc0Qsc0hBQXNILDRCQUE0QiwwQ0FBMEMsRUFBRSxPQUFPLHdCQUF3QixFQUFFLEVBQUUsRUFBRSxFQUFFLHlCQUF5QixlQUFlLEVBQUU7O0FBRXpkO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEVBQUU7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0Esb0M7Ozs7Ozs7Ozs7OztBQ3JGYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLGFBQWEsbUJBQU8sQ0FBQywyREFBUzs7QUFFOUIsZ0NBQWdDLGdCQUFnQixzQkFBc0IsT0FBTyx1REFBdUQsbUNBQW1DLDBEQUEwRCxzRkFBc0YsZ0VBQWdFLEVBQUUsR0FBRyxFQUFFLGlDQUFpQywyQ0FBMkMsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFL2Qsa0NBQWtDLGlGQUFpRjs7QUFFbkgsK0JBQStCLHdFQUF3RTs7QUFFdkcsaUNBQWlDLCtIQUErSDs7QUFFaEssa0NBQWtDLDBCQUEwQiw4Q0FBOEMsZ0JBQWdCLE9BQU8sa0JBQWtCLEVBQUUsYUFBYSxFQUFFOztBQUVwSyxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COztBQUVyTiwyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFL007QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0Esd0VBQXdFOztBQUV4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7Ozs7O0FDL0hhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUNyQmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNENBQU87O0FBRTVCLHdDQUF3QyxtQkFBTyxDQUFDLG1FQUFhOztBQUU3RCxjQUFjLG1CQUFPLENBQUMsNkRBQVU7O0FBRWhDLGFBQWEsbUJBQU8sQ0FBQywyREFBUzs7QUFFOUIsc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GLGdDQUFnQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELG1DQUFtQywwREFBMEQsc0ZBQXNGLGdFQUFnRSxFQUFFLEdBQUcsRUFBRSxpQ0FBaUMsMkNBQTJDLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRS9kLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUUvTSxrQ0FBa0MsaUZBQWlGOztBQUVuSCwrQkFBK0Isd0VBQXdFOztBQUV2RyxpQ0FBaUMsK0hBQStIOztBQUVoSyxrQ0FBa0MsMEJBQTBCLDhDQUE4QyxnQkFBZ0IsT0FBTyxrQkFBa0IsRUFBRSxhQUFhLEVBQUU7O0FBRXBLLGlDQUFpQyxvRkFBb0Y7O0FBRXJILDZCQUE2Qiw2RUFBNkU7O0FBRTFHLHdDQUF3QyxlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFdlosK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOzs7QUFHcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRywrQkFBK0I7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQiw0Q0FBNEM7QUFDdkUsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDdEphOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcblxudmFyIF9ob29rcyA9IHJlcXVpcmUoXCIuL2hvb2tzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIFNub3dmYWxsID0gZnVuY3Rpb24gU25vd2ZhbGwoKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgIF9yZWYkY29sb3IgPSBfcmVmLmNvbG9yLFxuICAgICAgY29sb3IgPSBfcmVmJGNvbG9yID09PSB2b2lkIDAgPyAnI2RlZTRmZCcgOiBfcmVmJGNvbG9yLFxuICAgICAgX3JlZiRzbm93Zmxha2VDb3VudCA9IF9yZWYuc25vd2ZsYWtlQ291bnQsXG4gICAgICBzbm93Zmxha2VDb3VudCA9IF9yZWYkc25vd2ZsYWtlQ291bnQgPT09IHZvaWQgMCA/IDE1MCA6IF9yZWYkc25vd2ZsYWtlQ291bnQsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGU7XG5cbiAgdmFyIG1lcmdlZFN0eWxlID0gKDAsIF9ob29rcy51c2VTbm93ZmFsbFN0eWxlKShzdHlsZSk7XG4gIHZhciBjYW52YXNSZWYgPSAoMCwgX3JlYWN0LnVzZVJlZikoKTtcbiAgdmFyIGNhbnZhc1NpemUgPSAoMCwgX2hvb2tzLnVzZUNvbXBvbmVudFNpemUpKGNhbnZhc1JlZik7XG4gIHZhciBhbmltYXRpb25GcmFtZSA9ICgwLCBfcmVhY3QudXNlUmVmKSgwKTtcbiAgdmFyIGxhc3RVcGRhdGUgPSAoMCwgX3JlYWN0LnVzZVJlZikoRGF0ZS5ub3coKSk7XG4gIHZhciBjb25maWcgPSAoMCwgX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6IGNvbG9yXG4gICAgfTtcbiAgfSwgW2NvbG9yXSk7XG4gIHZhciBzbm93Zmxha2VzID0gKDAsIF9ob29rcy51c2VTbm93Zmxha2VzKShjYW52YXNSZWYsIHNub3dmbGFrZUNvdW50LCBjb25maWcpO1xuXG4gIHZhciB1cGRhdGVDYW52YXNSZWYgPSBmdW5jdGlvbiB1cGRhdGVDYW52YXNSZWYoZWxlbWVudCkge1xuICAgIGNhbnZhc1JlZi5jdXJyZW50ID0gZWxlbWVudDtcbiAgfTtcblxuICB2YXIgcmVuZGVyID0gKDAsIF9yZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKCkge1xuICAgIHZhciBmcmFtZXNQYXNzZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDE7XG4gICAgdmFyIGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuXG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgLy8gVXBkYXRlIHRoZSBwb3NpdGlvbnMgb2YgdGhlIHNub3dmbGFrZXNcbiAgICAgIHNub3dmbGFrZXMuZm9yRWFjaChmdW5jdGlvbiAoc25vd2ZsYWtlKSB7XG4gICAgICAgIHJldHVybiBzbm93Zmxha2UudXBkYXRlKGNhbnZhcywgZnJhbWVzUGFzc2VkKTtcbiAgICAgIH0pOyAvLyBSZW5kZXIgdGhlbSBpZiB0aGUgY2FudmFzIGlzIGF2YWlsYWJsZVxuXG4gICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMub2Zmc2V0V2lkdGgsIGNhbnZhcy5vZmZzZXRIZWlnaHQpO1xuICAgICAgICBzbm93Zmxha2VzLmZvckVhY2goZnVuY3Rpb24gKHNub3dmbGFrZSkge1xuICAgICAgICAgIHJldHVybiBzbm93Zmxha2UuZHJhdyhjYW52YXMsIGN0eCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3Nub3dmbGFrZXNdKTtcbiAgdmFyIGxvb3AgPSAoMCwgX3JlYWN0LnVzZUNhbGxiYWNrKShmdW5jdGlvbiAoKSB7XG4gICAgLy8gVXBkYXRlIGJhc2VkIG9uIHRpbWUgcGFzc2VkIHNvIHRoYXQgYSBzbG93IGZyYW1lIHJhdGUgd29uJ3Qgc2xvdyBkb3duIHRoZSBzbm93Zmxha2VcbiAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbXNQYXNzZWQgPSBEYXRlLm5vdygpIC0gbGFzdFVwZGF0ZS5jdXJyZW50O1xuICAgIGxhc3RVcGRhdGUuY3VycmVudCA9IG5vdzsgLy8gRnJhbWVzIHRoYXQgd291bGQgaGF2ZSBwYXNzZWQgaWYgcnVubmluZyBhdCA2MCBmcHNcblxuICAgIHZhciBmcmFtZXNQYXNzZWQgPSBtc1Bhc3NlZCAvIF9jb25maWcudGFyZ2V0RnJhbWVUaW1lO1xuICAgIHJlbmRlcihmcmFtZXNQYXNzZWQpO1xuICAgIGFuaW1hdGlvbkZyYW1lLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gIH0sIFtyZW5kZXJdKTtcbiAgKDAsIF9yZWFjdC51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICBsb29wKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZS5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbbG9vcF0pO1xuICByZXR1cm4gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHtcbiAgICByZWY6IHVwZGF0ZUNhbnZhc1JlZixcbiAgICBoZWlnaHQ6IGNhbnZhc1NpemUuaGVpZ2h0LFxuICAgIHdpZHRoOiBjYW52YXNTaXplLndpZHRoLFxuICAgIHN0eWxlOiBtZXJnZWRTdHlsZVxuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IFNub3dmYWxsO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNub3dmYWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7IG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7IH0pKTsgfSBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICBjb2xvcjogJyNkZWU0ZmQnLFxuICByYWRpdXM6IFswLjUsIDMuMF0sXG4gIHNwZWVkOiBbMSwgM10sXG4gIHdpbmQ6IFstMC41LCAyXSxcbiAgY2hhbmdlRnJlcXVlbmN5OiAyMDBcbn07XG5cbi8qKiBBbiBpbmRpdmlkdWFsIHNub3dmbGFrZSB0aGF0IHdpbGwgdXBkYXRlIGl0J3MgbG9jYXRpb24gZXZlcnkgY2FsbCB0byBgZHJhd2AgKi9cbnZhciBTbm93Zmxha2UgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTbm93Zmxha2UoX2NhbnZhcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTbm93Zmxha2UpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29uZmlnXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwYXJhbXNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZyYW1lc1NpbmNlTGFzdFVwZGF0ZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZHJhd1wiLCBmdW5jdGlvbiAoY2FudmFzLCBpbnB1dEN0eCkge1xuICAgICAgdmFyIGN0eCA9IGlucHV0Q3R4IHx8IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICBpZiAoY3R4KSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhfdGhpcy5wYXJhbXMueCwgX3RoaXMucGFyYW1zLnksIF90aGlzLnBhcmFtcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IF90aGlzLmZ1bGxDb25maWcuY29sb3I7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRyYW5zbGF0ZVwiLCBmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICB2YXIgZnJhbWVzUGFzc2VkID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuICAgICAgdmFyIF90aGlzJHBhcmFtcyA9IF90aGlzLnBhcmFtcyxcbiAgICAgICAgICB4ID0gX3RoaXMkcGFyYW1zLngsXG4gICAgICAgICAgeSA9IF90aGlzJHBhcmFtcy55LFxuICAgICAgICAgIHdpbmQgPSBfdGhpcyRwYXJhbXMud2luZCxcbiAgICAgICAgICBzcGVlZCA9IF90aGlzJHBhcmFtcy5zcGVlZCxcbiAgICAgICAgICBuZXh0V2luZCA9IF90aGlzJHBhcmFtcy5uZXh0V2luZCxcbiAgICAgICAgICBuZXh0U3BlZWQgPSBfdGhpcyRwYXJhbXMubmV4dFNwZWVkOyAvLyBVcGRhdGUgY3VycmVudCBsb2NhdGlvbiwgd3JhcHBpbmcgYXJvdW5kIGlmIGdvaW5nIG9mZiB0aGUgY2FudmFzXG5cbiAgICAgIF90aGlzLnBhcmFtcy54ID0gKHggKyB3aW5kICogZnJhbWVzUGFzc2VkKSAlIGNhbnZhcy5vZmZzZXRXaWR0aDtcbiAgICAgIF90aGlzLnBhcmFtcy55ID0gKHkgKyBzcGVlZCAqIGZyYW1lc1Bhc3NlZCkgJSBjYW52YXMub2Zmc2V0SGVpZ2h0OyAvLyBVcGRhdGUgdGhlIHdpbmQgYW5kIHNwZWVkIHRvd2FyZHMgdGhlIGRlc2lyZWQgdmFsdWVzXG5cbiAgICAgIF90aGlzLnBhcmFtcy5zcGVlZCA9ICgwLCBfdXRpbHMubGVycCkoc3BlZWQsIG5leHRTcGVlZCwgMC4wMSk7XG4gICAgICBfdGhpcy5wYXJhbXMud2luZCA9ICgwLCBfdXRpbHMubGVycCkod2luZCwgbmV4dFdpbmQsIDAuMDEpO1xuXG4gICAgICBpZiAoX3RoaXMuZnJhbWVzU2luY2VMYXN0VXBkYXRlKysgPiBfdGhpcy5mdWxsQ29uZmlnLmNoYW5nZUZyZXF1ZW5jeSkge1xuICAgICAgICBfdGhpcy51cGRhdGVUYXJnZXRQYXJhbXMoKTtcblxuICAgICAgICBfdGhpcy5mcmFtZXNTaW5jZUxhc3RVcGRhdGUgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidXBkYXRlVGFyZ2V0UGFyYW1zXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnBhcmFtcy5uZXh0U3BlZWQgPSBfdXRpbHMucmFuZG9tLmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KF90aGlzLmZ1bGxDb25maWcuc3BlZWQpKTtcbiAgICAgIF90aGlzLnBhcmFtcy5uZXh0V2luZCA9IF91dGlscy5yYW5kb20uYXBwbHkodm9pZCAwLCBfdG9Db25zdW1hYmxlQXJyYXkoX3RoaXMuZnVsbENvbmZpZy53aW5kKSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKGNhbnZhcywgZnJhbWVzUGFzc2VkKSB7XG4gICAgICBfdGhpcy50cmFuc2xhdGUoY2FudmFzLCBmcmFtZXNQYXNzZWQpO1xuICAgIH0pO1xuXG4gICAgLy8gU2V0IGN1c3RvbSBjb25maWdcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZzsgLy8gU2V0dGluZyBpbml0aWFsIHBhcmFtZXRlcnNcblxuICAgIHZhciBfdGhpcyRmdWxsQ29uZmlnID0gdGhpcy5mdWxsQ29uZmlnLFxuICAgICAgICByYWRpdXMgPSBfdGhpcyRmdWxsQ29uZmlnLnJhZGl1cyxcbiAgICAgICAgX3dpbmQgPSBfdGhpcyRmdWxsQ29uZmlnLndpbmQsXG4gICAgICAgIF9zcGVlZCA9IF90aGlzJGZ1bGxDb25maWcuc3BlZWQ7XG4gICAgdGhpcy5wYXJhbXMgPSB7XG4gICAgICB4OiAoMCwgX3V0aWxzLnJhbmRvbSkoMCwgX2NhbnZhcy5vZmZzZXRXaWR0aCksXG4gICAgICB5OiAoMCwgX3V0aWxzLnJhbmRvbSkoLV9jYW52YXMub2Zmc2V0SGVpZ2h0LCAwKSxcbiAgICAgIHJhZGl1czogX3V0aWxzLnJhbmRvbS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShyYWRpdXMpKSxcbiAgICAgIHNwZWVkOiBfdXRpbHMucmFuZG9tLmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KF9zcGVlZCkpLFxuICAgICAgd2luZDogX3V0aWxzLnJhbmRvbS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShfd2luZCkpLFxuICAgICAgbmV4dFNwZWVkOiBfdXRpbHMucmFuZG9tLmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KF93aW5kKSksXG4gICAgICBuZXh0V2luZDogX3V0aWxzLnJhbmRvbS5hcHBseSh2b2lkIDAsIF90b0NvbnN1bWFibGVBcnJheShfc3BlZWQpKVxuICAgIH07XG4gICAgdGhpcy5mcmFtZXNTaW5jZUxhc3RVcGRhdGUgPSAwO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNub3dmbGFrZSwgW3tcbiAgICBrZXk6IFwiZnVsbENvbmZpZ1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRDb25maWcsIHRoaXMuY29uZmlnKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU25vd2ZsYWtlO1xufSgpO1xuXG52YXIgX2RlZmF1bHQgPSBTbm93Zmxha2U7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U25vd2ZsYWtlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBleHBvcnRzLnRhcmdldEZyYW1lVGltZSA9IGV4cG9ydHMuc25vd2ZhbGxCYXNlU3R5bGUgPSB2b2lkIDA7XG52YXIgc25vd2ZhbGxCYXNlU3R5bGUgPSB7XG4gIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJyAvLyBUYXJnZXQgb2YgNjAgZnJhbWVzIHBlciBzZWNvbmRcblxufTtcbmV4cG9ydHMuc25vd2ZhbGxCYXNlU3R5bGUgPSBzbm93ZmFsbEJhc2VTdHlsZTtcbnZhciB0YXJnZXRGcmFtZVRpbWUgPSAxMDAwIC8gNjA7XG5leHBvcnRzLnRhcmdldEZyYW1lVGltZSA9IHRhcmdldEZyYW1lVGltZTtcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5leHBvcnRzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmZpZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlU25vd2ZhbGxTdHlsZSA9IGV4cG9ydHMudXNlQ29tcG9uZW50U2l6ZSA9IGV4cG9ydHMudXNlU25vd2ZsYWtlcyA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9Tbm93Zmxha2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1Nub3dmbGFrZVwiKSk7XG5cbnZhciBfY29uZmlnID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG4vKipcbiAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0byBjcmVhdGUgYSBjb2xsZWN0aW9uIG9mIHNub3dmbGFrZXNcbiAqIEBwYXJhbSBjYW52YXNSZWYgQSByZWYgdG8gdGhlIGNhbnZhcyBlbGVtZW50XG4gKiBAcGFyYW0gYW1vdW50IFRoZSBudW1iZXIgb2Ygc25vd2ZsYWtlc1xuICogQHBhcmFtIGNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiBmb3IgZWFjaCBzbm93Zmxha2VcbiAqL1xudmFyIGNyZWF0ZVNub3dmbGFrZXMgPSBmdW5jdGlvbiBjcmVhdGVTbm93Zmxha2VzKGNhbnZhc1JlZiwgYW1vdW50LCBjb25maWcpIHtcbiAgdmFyIHNub3dmbGFrZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XG4gICAgc25vd2ZsYWtlcy5wdXNoKG5ldyBfU25vd2ZsYWtlW1wiZGVmYXVsdFwiXShjYW52YXNSZWYuY3VycmVudCwgY29uZmlnKSk7XG4gIH1cblxuICByZXR1cm4gc25vd2ZsYWtlcztcbn07XG4vKipcbiAqIEEgdXRpbGl0eSBob29rIHRvIG1hbmFnZSBjcmVhdGluZyBhbmQgdXBkYXRpbmcgYSBjb2xsZWN0aW9uIG9mIHNub3dmbGFrZXNcbiAqIEBwYXJhbSBjYW52YXNSZWYgQSByZWYgdG8gdGhlIGNhbnZhcyBlbGVtZW50XG4gKiBAcGFyYW0gYW1vdW50IFRoZSBudW1iZXIgb2Ygc25vd2ZsYWtlc1xuICogQHBhcmFtIGNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiBmb3IgZWFjaCBzbm93Zmxha2VcbiAqL1xuXG5cbnZhciB1c2VTbm93Zmxha2VzID0gZnVuY3Rpb24gdXNlU25vd2ZsYWtlcyhjYW52YXNSZWYsIGFtb3VudCwgY29uZmlnKSB7XG4gIHZhciBfdXNlU3RhdGUgPSAoMCwgX3JlYWN0LnVzZVN0YXRlKShbXSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIHNub3dmbGFrZXMgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0U25vd2ZsYWtlcyA9IF91c2VTdGF0ZTJbMV07IC8vIEhhbmRsZSBjaGFuZ2Ugb2YgYW1vdW50XG5cblxuICAoMCwgX3JlYWN0LnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgIHNldFNub3dmbGFrZXMoZnVuY3Rpb24gKHNub3dmbGFrZXMpIHtcbiAgICAgIHZhciBzaXplRGlmZmVyZW5jZSA9IGFtb3VudCAtIHNub3dmbGFrZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoc2l6ZURpZmZlcmVuY2UgPiAwKSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHNub3dmbGFrZXMpLCBfdG9Db25zdW1hYmxlQXJyYXkoY3JlYXRlU25vd2ZsYWtlcyhjYW52YXNSZWYsIHNpemVEaWZmZXJlbmNlLCBjb25maWcpKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaXplRGlmZmVyZW5jZSA8IDApIHtcbiAgICAgICAgcmV0dXJuIHNub3dmbGFrZXMuc2xpY2UoMCwgYW1vdW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNub3dmbGFrZXM7XG4gICAgfSk7XG4gIH0sIFthbW91bnQsIGNhbnZhc1JlZiwgY29uZmlnXSk7IC8vIEhhbmRsZSBjaGFuZ2Ugb2YgY29uZmlnXG5cbiAgKDAsIF9yZWFjdC51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICBzZXRTbm93Zmxha2VzKGZ1bmN0aW9uIChzbm93Zmxha2VzKSB7XG4gICAgICByZXR1cm4gc25vd2ZsYWtlcy5tYXAoZnVuY3Rpb24gKHNub3dmbGFrZSkge1xuICAgICAgICBzbm93Zmxha2UuY29uZmlnID0gY29uZmlnO1xuICAgICAgICByZXR1cm4gc25vd2ZsYWtlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtjb25maWddKTtcbiAgcmV0dXJuIHNub3dmbGFrZXM7XG59O1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBoZWlnaHQgYW5kIHdpZHRoIG9mIGEgSFRNTCBlbGVtZW50LCB1c2VzIHRoZSBgUmVzaXplT2JzZXJ2ZXJgIGFwaSBpZiBhdmFpbGFibGUgdG8gZGV0ZWN0IGNoYW5nZXMgdG8gdGhlXG4gKiBzaXplLiBGYWxscyBiYWNrIHRvIGxpc3RlbmluZyBmb3IgcmVzaXplIGV2ZW50cyBvbiB0aGUgd2luZG93LlxuICogQHBhcmFtIHJlZiBBIHJlZiB0byB0aGUgSFRNTCBlbGVtZW50IHRvIGJlIG1lYXN1cmVkXG4gKi9cblxuXG5leHBvcnRzLnVzZVNub3dmbGFrZXMgPSB1c2VTbm93Zmxha2VzO1xuXG52YXIgdXNlQ29tcG9uZW50U2l6ZSA9IGZ1bmN0aW9uIHVzZUNvbXBvbmVudFNpemUocmVmKSB7XG4gIHZhciBfdXNlU3RhdGUzID0gKDAsIF9yZWFjdC51c2VTdGF0ZSkoKDAsIF91dGlscy5nZXRTaXplKShyZWYuY3VycmVudCkpLFxuICAgICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgICAgc2l6ZSA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRTaXplID0gX3VzZVN0YXRlNFsxXTtcblxuICB2YXIgcmVzaXplSGFuZGxlciA9ICgwLCBfcmVhY3QudXNlQ2FsbGJhY2spKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIHNldFNpemUoKDAsIF91dGlscy5nZXRTaXplKShyZWYuY3VycmVudCkpO1xuICAgIH1cbiAgfSwgW3JlZl0pO1xuICAoMCwgX3JlYWN0LnVzZUxheW91dEVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgIHZhciBfd2luZG93ID0gd2luZG93LFxuICAgICAgICBSZXNpemVPYnNlcnZlciA9IF93aW5kb3cuUmVzaXplT2JzZXJ2ZXI7XG4gICAgaWYgKCFyZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIHJlc2l6ZUhhbmRsZXIoKTtcblxuICAgIGlmICh0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihyZXNpemVIYW5kbGVyKTtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUocmVmLmN1cnJlbnQpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGFuZGxlcik7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW3JlZiwgcmVzaXplSGFuZGxlcl0pO1xuICByZXR1cm4gc2l6ZTtcbn07XG4vKipcbiAqIFV0aWxpdHkgaG9vayB0aGF0IG1lcmdlcyBhbnkgcHJvdmlkZWQgc3R5bGVzIHdpdGggdGhlIGRlZmF1bHQgc3R5bGVzXG4gKiBAcGFyYW0gb3ZlcnJpZGVzIFRoZSBzdHlsZSBwcm9wIHBhc3NlZCBpbnRvIHRoZSBjb21wb25lbnRcbiAqL1xuXG5cbmV4cG9ydHMudXNlQ29tcG9uZW50U2l6ZSA9IHVzZUNvbXBvbmVudFNpemU7XG5cbnZhciB1c2VTbm93ZmFsbFN0eWxlID0gZnVuY3Rpb24gdXNlU25vd2ZhbGxTdHlsZShvdmVycmlkZXMpIHtcbiAgdmFyIHN0eWxlcyA9ICgwLCBfcmVhY3QudXNlTWVtbykoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBfY29uZmlnLnNub3dmYWxsQmFzZVN0eWxlLCBvdmVycmlkZXMgfHwge30pO1xuICB9LCBbb3ZlcnJpZGVzXSk7XG4gIHJldHVybiBzdHlsZXM7XG59O1xuXG5leHBvcnRzLnVzZVNub3dmYWxsU3R5bGUgPSB1c2VTbm93ZmFsbFN0eWxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJhbmRvbSA9IHJhbmRvbTtcbmV4cG9ydHMubGVycCA9IGxlcnA7XG5leHBvcnRzLmdldFNpemUgPSBnZXRTaXplO1xuXG4vKipcbiAqIEVuaGFuY2VkIHJhbmRvbSBmdW5jdGlvbiwgc2VsZWN0cyBhIHJhbmRvbSB2YWx1ZSBiZXR3ZWVuIGEgbWluaW11bSBhbmQgbWF4aW11bS4gSWYgdGhlIHZhbHVlcyBwcm92aWRlZCBhcmUgYm90aFxuICogaW50ZWdlcnMgdGhlbiB0aGUgbnVtYmVyIHJldHVybmVkIHdpbGwgYmUgYW4gaW50ZWdlciwgb3RoZXJ3aXNlIHRoZSByZXR1cm4gbnVtYmVyIHdpbGwgYmUgYSBkZWNpbWFsLlxuICogQHBhcmFtIG1pbiBUaGUgbWluaW11bSB2YWx1ZVxuICogQHBhcmFtIG1heCBUaGUgbWF4aW11bSB2YWx1ZVxuICovXG5mdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcbiAgdmFyIHJhbmRvbU51bWJlciA9IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW47XG5cbiAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKG1pbikgfHwgIU51bWJlci5pc0ludGVnZXIobWF4KSkge1xuICAgIHJldHVybiByYW5kb21OdW1iZXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZG9tTnVtYmVyKTtcbiAgfVxufVxuLyoqXG4gKiBMaW5lYXIgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiB0byBncmFkdWFsbHkgc3RlcCB0b3dhcmRzIGEgdGFyZ2V0IHZhbHVlXG4gKiBAcGFyYW0gc3RhcnQgVGhlIGN1cnJlbnQgdmFsdWVcbiAqIEBwYXJhbSBlbmQgVGhlIHRhcmdldCB2YWx1ZVxuICogQHBhcmFtIG5vcm1hbCBUaGUgcmF0ZSBvZiBjaGFuZ2UgYmV0d2VlbiAwIGFuZCAxICgwID0gbm8gY2hhbmdlLCAxID0gaW5zdGFudClcbiAqL1xuXG5cbmZ1bmN0aW9uIGxlcnAoc3RhcnQsIGVuZCwgbm9ybWFsKSB7XG4gIHJldHVybiAoMSAtIG5vcm1hbCkgKiBzdGFydCArIG5vcm1hbCAqIGVuZDtcbn1cbi8qKlxuICogR2V0cyB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBvZiB0aGUgcHJvdmlkZWQgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0gZWxlbWVudCBUaGUgaHRtbCBlbGVtZW50IHRvIG1lYXN1cmVcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFNpemUoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHJldHVybiB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH07XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aFxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==