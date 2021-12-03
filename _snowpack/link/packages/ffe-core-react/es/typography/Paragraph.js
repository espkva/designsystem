var _excluded = ["children", "className", "lead", "subLead", "textCenter", "textLeft"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../../pkg/react.js';
import { bool, node, string } from '../../../../../pkg/prop-types.js';
import classNames from '../../../../../pkg/classnames.js';
export default function Paragraph(props) {
  var children = props.children,
      className = props.className,
      lead = props.lead,
      subLead = props.subLead,
      textCenter = props.textCenter,
      textLeft = props.textLeft,
      rest = _objectWithoutProperties(props, _excluded);

  var _filter = [lead && 'ffe-lead-paragraph', subLead && 'ffe-sub-lead-paragraph', 'ffe-body-paragraph'].filter(Boolean),
      _filter2 = _slicedToArray(_filter, 1),
      mainClass = _filter2[0];

  return /*#__PURE__*/React.createElement("p", _extends({
    className: classNames(mainClass, {
      'ffe-body-paragraph--text-center': textCenter
    }, {
      'ffe-body-paragraph--text-left': textLeft
    }, className)
  }, rest), children);
}
Paragraph.propTypes = {
  children: node.isRequired,
  className: string,

  /** Makes this paragraph a lead paragraph, typically used directly below a heading. */
  lead: bool,

  /** Makes this paragraph a sub-lead paragraph, typically used directly below a lead paragraph. */
  subLead: bool,

  /** Use if text alignment should override that of its container. */
  textCenter: bool,

  /** Use if text alignment should override that of its container. */
  textLeft: bool
};