"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  return _react.default.createElement("button", {
    type: "button",
    className: "btn btn-primary btn-sm mr-2 ml-2 mt-2 mb-2",
    onClick: function onClick() {
      return props.addHandleTakeOrder(props.name, props.price);
    }
  }, props.name, _react.default.createElement("br", null), " S/ ", props.price);
};

var _default = Button;
exports.default = _default;