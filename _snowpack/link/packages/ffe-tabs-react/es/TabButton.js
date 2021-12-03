var _excluded = ["className", "selected", "ghost", "condensed"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { bool, string } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
export default function TabButton(props) {
  var className = props.className,
      selected = props.selected,
      ghost = props.ghost,
      condensed = props.condensed,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "tab",
    "aria-selected": selected,
    className: classNames('ffe-tab-button', {
      'ffe-tab-button--selected': selected
    }, {
      'ffe-tab-button--ghost': ghost
    }, {
      'ffe-tab-button--condensed': condensed
    }, className)
  }, rest));
}
TabButton.propTypes = {
  /** Selected tab button */
  selected: bool,

  /** Transparent background style tab button */
  ghost: bool,

  /** Compact style tab button */
  condensed: bool,

  /** Additional css classes */
  className: string,

  /** Id of the element it controls */
  'aria-controls': string.isRequired
};