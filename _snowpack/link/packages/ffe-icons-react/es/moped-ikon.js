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
    React.createElement("path", { d: "m153.06332,36.49153c-0.31399,-0.0199 -0.63625,-0.0035 -0.95942,0.05347c-11.71035,1.6729 -18.70434,9.58177 -18.70434,18.85879c0,1.97707 0.30356,3.95235 0.91189,5.77734l-0.30297,0.15149l-10.03981,-15.20822c-0.76041,-1.21666 -2.12677,-1.97529 -3.6476,-1.97529l-17.18648,0c-2.43332,0 -4.25948,1.97529 -4.25948,4.25652l0,1.97826c0,2.43331 1.97825,4.25949 4.25948,4.25949l13.83888,0l8.06155,12.16658l-9.12492,5.62585c-1.06457,0.60833 -1.67409,1.67409 -1.97827,2.73867l0,0.76041c-4.71454,23.26859 -19.61801,34.2185 -28.28669,34.2185c-2.12915,0 -3.49908,-0.60953 -4.25949,-1.97827c-1.67291,-2.88955 -0.91012,-10.03681 6.23775,-21.44299l0,-0.15149c2.12915,-3.49788 -0.30476,-8.06154 -4.41098,-8.06154l-36.80569,0c-10.03742,0 -21.59508,5.47377 -30.56794,14.75079c-8.97285,9.12494 -14.44662,21.4442 -15.5112,37.10867c-0.15208,3.04164 2.12915,5.78031 5.32288,5.78031l10.64576,0c2.12915,14.59989 13.99157,25.85398 28.13522,25.85398c14.14364,0 26.00606,-11.25409 28.13521,-25.85398l60.8329,0c2.58539,17.64154 16.2722,25.85398 29.04712,25.85398c14.75195,0 26.91795,-11.40617 28.28669,-25.85398l3.65057,0c3.19372,0 5.62705,-2.73867 5.32288,-5.78031c-2.43333,-23.57275 -19.31386,-39.3899 -39.69287,-39.3899c-0.91249,0 -1.67469,0.002 -2.58718,0.15444l-12.46956,-18.09836c2.28124,1.06457 4.86663,1.52082 7.60411,1.52082c2.43332,0 4.56247,-1.97707 4.56247,-4.56247l0,-29.04711c0,-2.39529 -1.86271,-4.32514 -4.06047,-4.46444l0,-0.00001zm-4.91298,9.93882l0,17.94392c-3.19372,-1.67291 -5.47436,-5.01634 -5.47436,-8.97048c-0.15208,-3.95414 2.12855,-7.30054 5.47436,-8.97344zm-15.05673,28.13521l13.08144,19.01028c-13.53532,5.01871 -23.72542,17.33679 -25.7025,32.08876l-109.4992,0l0,-0.1515c2.88956,-21.2915 22.05074,-36.19675 35.28189,-36.19675l27.83224,0c-5.77912,12.16658 -4.41157,19.61978 -1.97826,24.03017c2.5854,4.71456 7.60471,7.45263 13.53592,7.45263c7.45203,0 15.81654,-4.1074 22.81234,-11.10319c5.17079,-5.32288 12.01389,-14.60108 15.35971,-29.35305l9.27642,-5.77735zm27.07182,27.06886c14.29574,0 27.67957,11.86419 28.74414,23.87868l-57.48828,0c2.5854,-13.53531 14.44842,-23.87868 28.74414,-23.87868zm-16.12013,34.52445l35.73933,0c-1.21666,8.5166 -8.66867,15.20821 -17.48945,15.20821c-7.90828,0 -15.81656,-4.71455 -18.24988,-15.20821zm-116.80034,1.06339l34.06702,0c-2.28123,7.60411 -8.97166,13.38442 -17.03202,13.38442c-7.90828,0 -14.75376,-5.62822 -17.035,-13.38442z", id: "path3412" }));
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
Icon.displayName = 'MopedIkon';
export default Icon;
