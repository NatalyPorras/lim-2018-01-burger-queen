"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _data = _interopRequireDefault(require("../data/data"));

var _Button = _interopRequireDefault(require("./Button"));

require("./Breakfast.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Breakfast =
/*#__PURE__*/
function (_Component) {
  _inherits(Breakfast, _Component);

  function Breakfast() {
    _classCallCheck(this, Breakfast);

    return _possibleConstructorReturn(this, _getPrototypeOf(Breakfast).apply(this, arguments));
  }

  _createClass(Breakfast, [{
    key: "showDataCafe",
    value: function showDataCafe() {
      var _this = this;

      return _react.default.createElement("div", {
        className: "typeCafe"
      }, _react.default.createElement("h5", null, "Caf\xE9"), _react.default.createElement("div", {
        className: "pl-5"
      }, _data.default.map(function (aliment) {
        return aliment.Breakfast.map(function (breakfast, i) {
          if (breakfast.name.substring(4, -1) === 'Café') {
            return _react.default.createElement(_Button.default, {
              key: "break".concat(i),
              name: breakfast.name,
              price: breakfast.price,
              addHandleTakeOrder: _this.props.addHandleTakeOrder
            });
          }
        });
      })));
    }
  }, {
    key: "showDataJugo",
    value: function showDataJugo() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: "typeJugo"
      }, _react.default.createElement("h5", null, "Jugos"), _react.default.createElement("div", {
        className: "pl-5"
      }, _data.default.map(function (aliment) {
        return aliment.Breakfast.map(function (breakfast, i) {
          if (breakfast.name.substring(4, -1) === 'Jugo') {
            return _react.default.createElement(_Button.default, {
              key: "break".concat(i),
              name: breakfast.name,
              price: breakfast.price,
              addHandleTakeOrder: _this2.props.addHandleTakeOrder
            });
          }
        });
      })));
    }
  }, {
    key: "showDataSandwich",
    value: function showDataSandwich() {
      var _this3 = this;

      return _react.default.createElement("div", {
        className: "typeSandwich"
      }, _react.default.createElement("h5", null, "Sandwiches"), _react.default.createElement("div", {
        className: "pl-5"
      }, _data.default.map(function (aliment) {
        return aliment.Breakfast.map(function (breakfast, i) {
          if (breakfast.name.substring(8, -1) === 'Sandwich') {
            return _react.default.createElement(_Button.default, {
              key: "break".concat(i),
              name: breakfast.name,
              price: breakfast.price,
              addHandleTakeOrder: _this3.props.addHandleTakeOrder
            });
          }
        });
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "showFoods pt-1 pb-1 pl-3 pr-1"
      }, this.showDataCafe(), _react.default.createElement("hr", null), this.showDataJugo(), _react.default.createElement("hr", null), this.showDataSandwich());
    }
  }]);

  return Breakfast;
}(_react.Component);

var _default = Breakfast;
exports.default = _default;