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
    React.createElement("g", { transform: "matrix(1.9548 0 0 1.9548 -77.496 -73.585)" },
        React.createElement("path", { d: "m64.1 131.5c-13.3 0-24.2-10.8-24.2-24.2 0.1-13.3 10.9-24.2 24.2-24.2s24.2 10.8 24.2 24.2c0 13.3-10.8 24.2-24.2 24.2zm0-41.6c-9.6 0-17.4 7.8-17.4 17.4s7.8 17.4 17.4 17.4 17.4-7.8 17.4-17.4-7.8-17.4-17.4-17.4z" }),
        React.createElement("path", { d: "m125.6 131.5c-8.9 0-16.1-7.2-16.1-16.1s7.2-16.1 16.1-16.1 16.1 7.2 16.1 16.1c0.1 8.8-7.2 16.1-16.1 16.1zm0-25.5c-5.1 0-9.3 4.2-9.3 9.4s4.2 9.4 9.3 9.4 9.3-4.2 9.3-9.4c0.1-5.2-4.1-9.4-9.3-9.4z" }),
        React.createElement("rect", { height: "6.8", width: "32.4", y: "102.2", x: "85.4" }),
        React.createElement("rect", { height: "37.1", width: "6.8", y: "49.4", x: "51.7" }),
        React.createElement("path", { d: "m82.8 75.1-5.8-22.3h-28.3c-1.6 0-2.8-1.3-2.8-2.8v-1.1c0-1.6 1.3-2.8 2.8-2.8h29.2c2.6 0 4.8 1.8 5.5 4.3l6 23.1-6.6 1.6z" }),
        React.createElement("path", { d: "m120.7 75.8h-6.8v-19.4c0-1.6 1.3-2.8 2.8-2.8h1.1c1.6 0 2.8 1.3 2.8 2.8v19.4z" }),
        React.createElement("path", { d: "m134.2 104.7h-6.8v-19.4c0-3.4-2.8-6.2-6.2-6.2h-63.9v-6.8h63.9c7.1 0 12.9 5.8 12.9 12.9v19.5z" })));
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
Icon.displayName = 'TraktorIkon';
export default Icon;
