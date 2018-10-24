"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var handleInputName = _ref.handleInputName,
      name = _ref.name;

  var textInput = _react.default.createRef();

  function getHandleInputName() {
    handleInputName(textInput.current.value);
  }

  return _react.default.createElement("section", {
    className: "section3"
  }, _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-6 text-center"
  }, _react.default.createElement("h4", null, "BurguerQueen")), _react.default.createElement("div", {
    className: "col-6 text-center"
  }, _react.default.createElement("div", {
    className: "input-group mb-3"
  }, _react.default.createElement("div", {
    className: "input-group-prepend"
  }, _react.default.createElement("span", {
    className: "input-group-text",
    id: "inputGroup-sizing-default"
  }, "Nombre del Cliente:")), _react.default.createElement("input", {
    type: "text",
    ref: textInput,
    value: name,
    className: "form-control",
    "aria-label": "Sizing example input",
    "aria-describedby": "inputGroup-sizing-default",
    onChange: getHandleInputName
  }))), _react.default.createElement("div", {
    className: "col-3"
  }))));
};

var _default = Header;
exports.default = _default;