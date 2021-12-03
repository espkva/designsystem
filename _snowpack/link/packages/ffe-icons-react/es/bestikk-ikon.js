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
    React.createElement("path", { d: "m166.354522,199.99999l-20.550903,0c-6.706783,0 -12.143326,-5.428703 -12.143326,-12.125814l0,-56.327602l-3.097416,0c-7.495061,0 -13.569937,-6.066115 -13.569937,-13.550367l0,-74.130238c0,-24.225959 19.668376,-43.86597 43.929323,-43.86597l5.434401,0c6.706783,0 12.143326,5.428703 12.143326,12.125814l0,175.746224c0,6.69925 -5.438685,12.127953 -12.145468,12.127953zm-17.699824,-14.972781l14.850887,0l0,-170.054429l-2.583322,0c-15.954047,0 -28.934918,12.96215 -28.934918,28.893189l0,72.707824l16.667353,0l0,68.453415z" }),
    React.createElement("path", { d: "m73.324947,199.99999l-20.548761,0c-6.706783,0 -12.143326,-5.428703 -12.143326,-12.125814l0,-83.344915l-5.562924,0c-7.495061,0 -13.569937,-6.066115 -13.569937,-13.550367l0,-83.830461c0,-3.347486 2.718271,-6.063976 6.072734,-6.063976l2.851079,0c3.354463,0 6.072734,2.714351 6.072734,6.063976l0,82.408047l19.132861,0l0,95.472868l14.848745,0l0,-95.472868l19.132861,0l0,-82.408047c0,-3.347486 2.718271,-6.063976 6.072734,-6.063976l2.851079,0c3.352321,0 6.072734,2.714351 6.072734,6.063976l0,83.8326c0,7.482113 -6.074876,13.548228 -13.567795,13.548228l-5.565066,0l0,83.344915c-0.006426,6.697111 -5.442969,12.125814 -12.149752,12.125814z" }),
    React.createElement("path", { d: "m58.660419,59.906096l-13.923376,0l0,-52.757663c0,-3.347486 2.718271,-6.063976 6.072734,-6.063976l1.78005,0c3.354463,0 6.072734,2.714351 6.072734,6.063976l0,52.757663l-0.002142,0z" }),
    React.createElement("path", { d: "m81.361949,59.906096l-13.923376,0l0,-52.757663c0,-3.347486 2.718271,-6.063976 6.072734,-6.063976l1.78005,0c3.352321,0 6.072734,2.714351 6.072734,6.063976l0,52.757663l-0.002142,0z" }));
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
Icon.displayName = 'BestikkIkon';
export default Icon;
