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
var svg = React.createElement("svg", { viewBox: "0 0 125 92" },
    React.createElement("path", { d: "M116.3 13.4H92C90.4 13.4 89.2 12.1 89.2 10.6V9.3C89.2 7.7 90.5 6.5 92 6.5H116.3V13.4Z" }),
    React.createElement("path", { d: "M116.8 18.5L123.6 11.4C124.4 10.6 124.4 9.30001 123.6 8.50001L116.8 1.40001C115.5 1.16825e-05 113.1 1.00001 113.1 2.90001V17C113.1 19 115.5 19.9 116.8 18.5Z" }),
    React.createElement("path", { d: "M120.4 46C120.3 45.9 120.3 45.9 120.2 45.8C118.4 43.9 115.7 41.9 109.2 41C105.9 40.6 101.6 40 97.3 39.5H97.1C94 39.1 88.7 37 85.7 34.4C81.4 30.7 74.9 24.8 74.1 24.1C71 21 67.6 19.8 62 19.8H31.3C26.5 19.8 23 22 21 23.9C18.3 26.4 14.9 29.9 11.3 33.6C9.40001 35.6 7.00001 38 4.90001 40.1C1.70001 43.3 0.200012 46.9 0.200012 51.1V74.1C0.200012 77.2 2.70001 79.8 5.90001 79.8H12.6C15 86.8 21.6 91.8 29.3 91.8C37 91.8 43.7 86.8 46 79.8H74.4C76.8 86.8 83.4 91.8 91.1 91.8C98.8 91.8 105.5 86.8 107.8 79.8H109.1C114.6 79.8 118.1 77.4 119.3 76.5L119.5 76.3L120 75.8C121 74.9 124.1 71.4 124.1 65.5V56.6C124.2 55.4 124 49.3 120.4 46ZM29.3 84.8C23.4 84.8 18.6 80 18.6 74.1C18.6 68.2 23.4 63.4 29.3 63.4C35.2 63.4 40 68.2 40 74.1C40 80 35.2 84.8 29.3 84.8ZM91.2 84.8C85.3 84.8 80.5 80 80.5 74.1C80.5 68.2 85.3 63.4 91.2 63.4C97.1 63.4 101.9 68.2 101.9 74.1C101.9 80 97.1 84.8 91.2 84.8ZM117.2 65.5C117.2 68.7 115.6 70.4 115.3 70.7L115.1 70.9C114.9 71.1 112.8 72.7 109.3 72.7H108.9C108.2 63.6 100.6 56.4 91.3 56.4C82 56.4 74.4 63.6 73.7 72.7H46.9C46.2 63.6 38.6 56.4 29.3 56.4C20 56.4 12.4 63.6 11.7 72.7H7.20001V51C7.20001 48.6 8.00001 46.8 9.90001 44.9C12 42.8 14.4 40.3 16.4 38.2C19.9 34.6 23.2 31.2 25.8 28.8C27.4 27.3 29.3 26.6 31.3 26.6H62C66.5 26.6 67.8 27.5 69.2 28.9C70.3 30 77 36.1 81.2 39.6C85.5 43.3 92.2 45.8 96.2 46.3H96.4C100.7 46.8 105 47.4 108.3 47.8C113.2 48.5 114.5 49.7 115.2 50.5C115.4 50.7 115.6 50.9 115.7 51C116.7 52 117.2 54.8 117.3 56.5V65.5H117.2Z" }));
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
Icon.displayName = 'BilPilIkon';
export default Icon;
