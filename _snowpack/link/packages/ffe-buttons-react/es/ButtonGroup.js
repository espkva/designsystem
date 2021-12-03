var _excluded = ["className", "thin", "inline"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { bool, string } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';

var ButtonGroup = function ButtonGroup(_ref) {
  var className = _ref.className,
      thin = _ref.thin,
      inline = _ref.inline,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('ffe-button-group', {
      'ffe-button-group--thin': thin
    }, {
      'ffe-button-group--inline': inline
    }, className)
  }, rest));
};

ButtonGroup.propTypes = {
  /** Extra class name applied in addition to the FFE classes */
  className: string,

  /** Applies the thin modifier to remove margins */
  thin: bool,

  /** Applies the inline modifier to make all child buttons inline */
  inline: bool
};
export default ButtonGroup;