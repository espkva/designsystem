var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from '../../../../pkg/react.js';
import { string } from '../../../../pkg/prop-types.js';
import * as PropTypes from '../../../../pkg/prop-types.js';
var svg = React.createElement("svg", { viewBox: "0 0 200 200" },
    React.createElement("path", { d: "m 30.398493,0.46383799 c -6.543783,0 -11.654513,5.31921981 -11.654513,11.65851001 V 187.98648 c 0,6.54381 5.315223,11.65453 11.654513,11.65453 H 163.73046 c 6.33928,0 11.45003,-5.11152 11.65451,-11.45082 V 12.122348 c 0,-6.5437836 -5.31523,-11.65851001 -11.65451,-11.65851001 z M 32.036039,13.755896 H 161.88921 V 186.34894 H 32.036039 Z m 64.822744,18.148771 c -2.096055,0 -4.189713,0.76685 -5.723413,2.30055 L 53.915211,71.629072 c -2.249425,2.453919 -2.860509,5.723406 -1.633549,8.790814 1.226959,3.0674 4.089067,4.908632 7.360957,4.908632 h 1.226159 V 112.9351 c 0,4.49883 3.68088,8.17973 8.179728,8.17973 h 55.620574 c 4.49884,0 8.17971,-3.6809 8.17971,-8.17973 V 85.328518 h 1.23017 c 3.27187,0 6.13399,-1.841232 7.36094,-4.908632 1.22696,-3.067408 0.6119,-6.541389 -1.63754,-8.790814 L 127.53276,59.291581 V 36.661532 c 0,-1.635945 -1.22775,-2.863702 -2.86368,-2.863702 h -6.1348 c -1.63594,0 -2.85974,1.227757 -2.85974,2.863702 V 47.365473 L 102.58619,34.205217 c -1.5337,-1.5337 -3.631352,-2.30055 -5.727407,-2.30055 z m 0,12.525211 29.651517,29.651513 h -4.70096 V 109.86769 H 72.115906 V 74.081391 H 67.410965 Z M 53.711517,132.56565 c -3.067399,0 -5.727408,2.45552 -5.727408,5.7274 v 0.61509 c 0,3.06738 2.455516,5.72341 5.727408,5.72341 h 86.705923 c 3.27187,0 5.7234,-2.65603 5.7234,-5.72341 v -0.61509 c 0,-3.06738 -2.45153,-5.7274 -5.7234,-5.7274 z m 0,23.51671 c -3.067399,0 -5.727408,2.45552 -5.727408,5.7274 v 0.61507 c 0,3.06741 2.455516,5.72343 5.727408,5.72343 h 86.705923 c 3.27187,0 5.7234,-2.65602 5.7234,-5.72343 v -0.61507 c 0,-3.06739 -2.45153,-5.7274 -5.7234,-5.7274 z" }));
var Icon = function (_a) {
    var desc = _a.desc, title = _a.title, iconName = _a.iconName, rest = __rest(_a, ["desc", "title", "iconName"]);
    return (React.createElement("svg", __assign({}, svg.props, rest),
        title &&
            React.createElement("title", null, title),
        desc &&
            React.createElement("desc", null, desc),
        svg.props.children));
};
Icon.propTypes = {
    desc: string,
    title: string,
    focusable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: string
};
Icon.displayName = 'DokumentHusIkon';
export default Icon;
