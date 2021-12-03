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
    React.createElement("path", { d: "m96.69625,2.87501c-3.129875,0.136725 -6.216875,1.45375 -8.54525,3.88425l-30.57375,31.90625l0,-24.6925c0,-3.473625 -2.794375,-6.325625 -6.270125,-6.325625l-2.996375,0c-3.47575,0 -6.270125,2.852125 -6.270125,6.325625l0,40.95l-38.51,40.16375c-7.664,8.001375 -2.035375,21.3075 9.044625,21.3075l8.48975,0l0,68.25125c0,6.949375 5.6465,12.54 12.59625,12.54l126.575,0c6.949375,0 12.54,-5.591 12.54,-12.54l0,-37.1775c0,-3.47575 -2.796625,-6.325625 -6.27025,-6.325625l-1.831125,0c-3.47575,0 -6.325625,2.849875 -6.325625,6.325625l0,35.29l-122.85125,0l0,-80.79125l-18.58875,0l80.45875,-84.01l27.07875,23.74875c2.612375,2.2905 6.587625,2.00425 8.878125,-0.610363l1.220738,-1.38725c2.2905,-2.612375 2.002,-6.587625 -0.610375,-8.878125l-28.355,-24.85875c-2.531375,-2.218375 -5.74825,-3.244125 -8.878125,-3.107375l-0.005863,0.011363zm92.11125,16.98c-2.086375,0 -4.04625,1.047625 -5.215875,2.774375l-65.6525,96.78l-23.19375,-32.1275c-1.183012,-1.64025 -3.082875,-2.608 -5.104875,-2.608l-5.0495,0c-5.129375,0 -8.05025,5.77075 -5.0495,9.932375l28.3,39.285c5.111625,7.08925 15.67875,6.9005 20.58625,-0.332925l70.47,-103.87375c2.834375,-4.177125 -0.166462,-9.8215 -5.215875,-9.8215l-4.883,0l0.008625,-0.008075z" }));
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
Icon.displayName = 'HusHakeIkon';
export default Icon;
