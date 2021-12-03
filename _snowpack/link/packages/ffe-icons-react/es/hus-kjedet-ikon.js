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
    React.createElement("g", { transform: "matrix(1.8119 0 0 1.8119 -26.563 -5.9067)" },
        React.createElement("path", { d: "m124.2 55.1-6.7-5.4v-11.5c0-1.6-1.3-2.8-2.8-2.8h-6.8c-1.6 0-2.8 1.3-2.8 2.8v1.2l-3.7-3c-1-0.8-2.5-0.9-3.6 0l-23.8 18.7c-0.6 0.5-0.7 1.4-0.2 2l0.4 0.5c0.5 0.6 1.4 0.7 2 0.2l4.5-3.6 3.5-2.8 15.2-12 9 7.4v-7.9h5.5v12.5l8.1 6.5c0.6 0.5 1.5 0.4 2-0.2l0.4-0.5c0.5-0.7 0.4-1.6-0.2-2.1zm-10.2 23h-29.8v-20.8l-3.5 2.8v5.7h-21.7v-11.6l4.5 3.6c0.6 0.5 1.5 0.4 2-0.2l0.4-0.5c0.5-0.6 0.4-1.5-0.2-2l-6.7-5.4v-11.5c0-1.6-1.3-2.8-2.8-2.8h-6.8c-1.6 0-2.8 1.3-2.8 2.8v1.2l-3.7-3c-1-0.8-2.5-0.9-3.6 0l-23.8 18.7c-0.6 0.5-0.7 1.4-0.2 2l0.4 0.5c0.5 0.6 1.4 0.7 2 0.2l4.5-3.6v24.5c0 1.6 1.3 2.8 2.8 2.8h89.6c1.6 0 2.8-1.3 2.8-2.8v-18.8l-3.5-2.9v21.1zm-33.3 0h-21.7v-8.8h21.7v8.8z" })));
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
Icon.displayName = 'HusKjedetIkon';
export default Icon;
