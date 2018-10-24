"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Breakfast = _interopRequireDefault(require("./Breakfast"));

var _LunchDinner = _interopRequireDefault(require("./Lunch-Dinner"));

var _HeaaderOrder = _interopRequireDefault(require("./HeaaderOrder"));

require("./TakeOrderDay.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TakeOrderDay =
/*#__PURE__*/
function (_Component) {
  _inherits(TakeOrderDay, _Component);

  function TakeOrderDay() {
    var _this;

    _classCallCheck(this, TakeOrderDay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TakeOrderDay).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addHandleTakeOrder", function (name, price) {
      var order = _this.state.order;
      order.push({
        name: name,
        price: price
      });

      _this.setState({
        order: order
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateOrder", function () {
      var order = _this.state.order;
      var total = 0;

      if (order !== []) {
        order.map(function (order) {
          total += order.price;
          return total;
        });
        return _react.default.createElement("span", null, total);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleGetPosicionDelete", function (e) {
      var order = _this.state.order;
      var posicion = e.target.id; // delete order[posicion]

      order.splice(posicion, 1);

      _this.setState({
        order: order
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputName", function (name) {
      _this.setState({
        name: name
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSendData", function () {
      var _this$state = _this.state,
          order = _this$state.order,
          name = _this$state.name;

      if (name !== '') {
        window.firebase.firestore().collection('pedido').add({
          fullname: name,
          order: _this.state.order,
          Total: _this.state.total
        });
        order.splice(0, _this.state.order.length);

        _this.setState({
          order: order,
          name: ''
        });
      } else {
        alert('Ingresa nombre del cliente');
      }
    });

    _this.state = {
      order: [],
      total: 0,
      showHide: false,
      name: ''
    };
    return _this;
  }

  _createClass(TakeOrderDay, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: "main"
      }, _react.default.createElement(_HeaaderOrder.default, {
        handleInputName: this.handleInputName,
        name: this.state.name
      }), _react.default.createElement("div", {
        className: "section4"
      }, _react.default.createElement("div", {
        className: "container takeOrder"
      }, _react.default.createElement("div", {
        className: "row titleOrder text-center"
      }, _react.default.createElement("div", {
        className: "col-12"
      }, _react.default.createElement("p", null, " Tomar Pedido "))), _react.default.createElement("div", {
        className: "row filaContent"
      }, _react.default.createElement("div", {
        className: "col-7 orders"
      }, _react.default.createElement("nav", null, _react.default.createElement("div", {
        className: "nav nav-tabs",
        id: "nav-tab",
        role: "tablist"
      }, _react.default.createElement("a", {
        className: "nav-item nav-link active",
        id: "nav-home-tab",
        "data-toggle": "tab",
        href: "#nav-home",
        role: "tab",
        "aria-controls": "nav-home",
        "aria-selected": "true"
      }, "Desayuno"), _react.default.createElement("a", {
        className: "nav-item nav-link",
        id: "nav-profile-tab",
        "data-toggle": "tab",
        href: "#nav-profile",
        role: "tab",
        "aria-controls": "nav-profile",
        "aria-selected": "false"
      }, "Almuerzo y Cena"))), _react.default.createElement("div", {
        className: "tab-content",
        id: "nav-tabContent"
      }, _react.default.createElement("div", {
        className: "tab-pane fade show active",
        id: "nav-home",
        role: "tabpanel",
        "aria-labelledby": "nav-home-tab"
      }, _react.default.createElement(_Breakfast.default, {
        addHandleTakeOrder: this.addHandleTakeOrder
      })), _react.default.createElement("div", {
        className: "tab-pane fade",
        id: "nav-profile",
        role: "tabpanel",
        "aria-labelledby": "nav-profile-tab"
      }, _react.default.createElement(_LunchDinner.default, {
        addHandleTakeOrder: this.addHandleTakeOrder
      })))), _react.default.createElement("div", {
        className: "col-5 orderListContent"
      }, _react.default.createElement("div", {
        className: "orderList"
      }, this.state.order.map(function (order, i) {
        return _react.default.createElement("div", {
          key: i,
          className: "listFood"
        }, _react.default.createElement("div", {
          className: "food name pl-2"
        }, " ", order.name, " "), _react.default.createElement("div", {
          className: "food price text-center"
        }, " ", order.price, " "), _react.default.createElement("div", {
          className: "food icono text-center"
        }, _react.default.createElement("i", {
          className: "fas fa-trash-alt",
          id: i,
          onClick: _this2.handleGetPosicionDelete
        })));
      }), _react.default.createElement("div", {
        className: "priceTotal ml-2 mr-1 mt-2 mb-1"
      }, _react.default.createElement("p", null, "Total: S/ ", this.calculateOrder()), _react.default.createElement("button", {
        className: this.state.order.length > 0 ? "hiden1 btn btn-outline-light mb-2 ml-3" : "hiden",
        onClick: this.handleSendData
      }, "Enviar a Cocina"))))))));
    }
  }]);

  return TakeOrderDay;
}(_react.Component);

var _default = TakeOrderDay;
exports.default = _default;