"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// ----------------------------------------------------------------------

var Restricted = function Restricted(_ref) {
  var listPermissions = _ref.listPermissions,
    permission = _ref.permission,
    showMessageText = _ref.showMessageText,
    showMessageClassName = _ref.showMessageClassName,
    children = _ref.children;
  var Rendering = listPermissions === null || listPermissions === void 0 ? void 0 : listPermissions.some(function (item) {
    return item.codename === permission;
  });
  if (Rendering) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
  } else if (showMessageText) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        padding: 3,
        marginBottom: 3,
        width: '100%'
      },
      className: showMessageClassName
    }, /*#__PURE__*/_react["default"].createElement("span", null, showMessageText));
  } else {
    return null;
  }
};
var _default = Restricted;
exports["default"] = _default;