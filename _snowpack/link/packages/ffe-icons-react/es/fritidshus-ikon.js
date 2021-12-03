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
var svg = React.createElement("svg", { viewBox: "0 0 200.00001 200.00001" },
    React.createElement("path", { d: "m69.618 38.542c-2.3685 0-4.7369 0.89902-6.5337 2.6958l-60.274 60.762c-2.9402 2.9402-0.81672 7.8417 3.2669 7.8417h14.372v42.306c0 5.227 4.2488 9.3093 9.3125 9.3093h80.038c5.0636 0 9.1466-4.245 9.1466-9.472v-42.306h14.375c4.0836 0 6.207-4.9016 3.2669-7.8417l-24.993-25.06v-30.802h-10.617v20.156l-24.829-24.896c-1.7968-1.7968-4.1652-2.6958-6.5337-2.6958zm0.16271 11.026 49.166 49.657h-10.617v51.616h-77.097v-51.616h-10.617l49.166-49.657zm102.74 1.308-24.99 30.218c-2.4501 2.9402-0.32796 7.5131 3.5923 7.5131h1.7993c1.3067 0 2.7756-0.65337 3.5923-1.6334l15.843-19.438 16.009 19.438c0.81671 1.1434 2.1222 1.6334 3.5923 1.6334h1.7993c3.9202 0 6.0424-4.573 3.5923-7.5131l-24.82-30.218zm-0.16589 25.644-24.827 30.218c-2.4501 2.9402-0.32796 7.5131 3.5923 7.5131h1.7993c1.3067 0 2.7756-0.65338 3.5923-1.6334l16.009-19.435 16.006 19.435c0.81672 1.1434 2.1254 1.6334 3.5955 1.6334h1.7961c3.9202 0 6.0424-4.573 3.5923-7.5131l-25.15-30.221zm0 25.647-24.827 30.381c-2.4501 2.9402-0.32796 7.5131 3.5923 7.5131h1.7993c1.3067 0 2.7756-0.65338 3.5923-1.6334l16.009-19.438 16.006 19.438c0.81672 1.1434 2.1254 1.6334 3.5955 1.6334h1.7961c3.9202 0 6.0424-4.573 3.5923-7.5131l-25.155-30.381zm-0.65082 33.157c-2.6135 0-4.5749 2.1247-4.5749 4.5749v16.988c0 2.4502 1.9614 4.5717 4.5749 4.5717h1.3048c2.6135 0 4.5749-2.1215 4.5749-4.5717v-16.988c0-2.6135-2.1247-4.5749-4.5749-4.5749h-1.3048z" }));
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
Icon.displayName = 'FritidshusIkon';
export default Icon;
