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
    React.createElement("path", { d: "m10.28375,36.9625c-5.67375,0 -10.28375,4.6125 -10.28375,10.2875l0,106.86625c0,5.67375 4.61,10.28375 10.28375,10.28375l151.95,0c5.67375,0 10.2385,-4.61 10.2385,-10.28375l0,-10.465c0,-2.83775 -2.28325,-5.11925 -5.11925,-5.11925l-1.495,0c-2.83775,0 -5.1645,2.2815 -5.1645,5.11925l0,8.97l-148.9125,0l0,-104.015l148.9125,0l0,8.879375c0,2.83775 2.32675,5.1645 5.1645,5.1645l1.495,0c2.836,0 5.11925,-2.32675 5.11925,-5.1645l0,-10.2385c0,-5.67375 -4.56475,-10.28375 -10.2385,-10.28375l-151.95,0l0,-0.000875zm182.75,20.075875c-1.703375,0 -3.301625,0.810025 -4.2585,2.219875l-28.7675,42.40375l-12.23175,-16.98875c-0.965837,-1.339125 -2.517,-2.12925 -4.167875,-2.12925l-1.857375,0c-4.18775,0 -6.617875,4.75675 -4.167875,8.1545l14.135,19.61625c4.173375,5.787875 12.8475,5.633875 16.8525,-0.271812l30.53375,-44.98625c2.314,-3.410375 -0.135925,-8.018625 -4.2585,-8.018625l-1.812125,0l0.00025,0.000313zm-143.8375,20.47125c-2.352125,0 -3.62425,1.272125 -3.62425,3.62425l0,39.55c0,2.354 1.272125,3.578875 3.62425,3.578875l4.2585,0c2.354,0 3.578875,-1.224988 3.578875,-3.578875l0,-15.4025l4.7115,0l8.471625,16.445c0.98035,1.766875 2.29775,2.537 4.2585,2.537l5.028625,0c2.875875,0 3.955875,-1.819375 2.58225,-4.30375l-11.008625,-19.93375l0,-0.135913l10.193125,-18.03c1.37175,-2.48625 0.338863,-4.349125 -2.537,-4.349125l-4.43975,0c-1.96075,0 -3.278125,0.817275 -4.2585,2.58225l-8.2905,15.44875l-4.7115,0l0,-14.40625c0,-2.352125 -1.224988,-3.62425 -3.578875,-3.62425l-4.2585,0l0.00025,-0.001712zm42.9925,0c-2.352125,0 -3.578875,1.272125 -3.578875,3.62425l0,39.55c0,2.354 1.2268,3.578875 3.578875,3.578875l4.2585,0c2.354,0 3.578875,-1.224988 3.578875,-3.578875l0,-12.1865l5.391,0l6.886,13.22875c0.980363,1.766875 2.29775,2.537 4.2585,2.537l4.983375,0c2.810625,0 3.928625,-1.819375 2.491625,-4.30375l-6.6595,-12.050625c-1.110825,-1.96075 -1.766875,-2.80875 -1.766875,-2.80875l0,-0.135912c4.639,-2.352125 6.976625,-7.763125 6.976625,-12.73c0,-6.799 -3.357875,-11.564875 -8.652875,-13.59125c-2.026,-0.786475 -4.28925,-1.132575 -9.060625,-1.132575l-12.685,0l0.000375,-0.000638zm7.837375,9.83075l3.85075,0c1.8955,0 3.301625,0.175787 4.349125,0.63425c2.156375,0.849875 2.718125,2.629375 2.718125,4.983375c0,3.72575 -2.27425,5.7535 -5.934625,5.7535l-4.983375,0l0,-11.371l0,-0.000125z" }));
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
Icon.displayName = 'KrHakeIkon';
export default Icon;
