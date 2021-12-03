function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../../pkg/react.js';
import BaseFieldMessage from './BaseFieldMessage.js';

var ErrorFieldMessage = function ErrorFieldMessage(props) {
  return /*#__PURE__*/React.createElement(BaseFieldMessage, _extends({}, props, {
    type: "error",
    role: "alert"
  }));
};

export default ErrorFieldMessage;