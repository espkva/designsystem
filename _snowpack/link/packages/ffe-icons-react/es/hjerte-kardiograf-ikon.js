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
    React.createElement("path", { d: "m55.192 3.1806c-21.263 0-38.82 10.955-48.128 30.174-11.147 22.787-8.9453 53.399 5.546 79.347 13.934 24.79 51.36 60.096 72.233 75.997 4.3752 3.3492 9.5306 5.1335 15.132 5.1335 5.3785 0 10.562-1.8156 15.133-5.1335 20.901-15.901 58.3-51.207 72.206-75.997 14.519-25.948 16.721-56.309 5.5734-79.347-9.3636-19.218-26.865-30.174-48.128-30.174-17.501 0-33.219 10.517-44.784 21.221-14.904-13.834-30.258-21.22-44.778-21.22zm0.4456 17.027c15.327 0 30.042 11.862 39.573 21.66l4.96 5.1335 4.9607-5.1335c9.5308-9.8596 24.273-21.66 39.573-21.66 15.94 0 28.258 7.6058 35.225 21.472 8.3882 17.372 6.4096 41.316-5.3228 62.288-11.342 20.126-44.143 52.96-68.054 71.052-3.9851 2.9109-9.3635 2.9109-13.126 0-22.684-17.184-53.506-47.827-66.27-67.922h16.693l9.5313 14.523c1.6163 2.4728 4.1803 3.5689 6.772 3.1307 2.5917-0.43825 4.793-2.6608 5.3783-5.5718l7.1622-28.827 11.955 50.487c0.80818 3.3491 3.3997 5.572 6.3537 5.8224h0.39019c2.7868 0 5.3791-1.8157 6.3544-4.9144l13.126-35.307h14.324c3.7622 0 6.9397-3.5681 6.9397-7.7936s-3.1776-7.7937-6.9397-7.7937h-18.894c-2.7868 0-5.3783 2.0034-6.3537 4.9144l-6.769 18.563-13.126-55.873c-0.80816-3.3491-3.595-5.8224-6.772-5.8224s-5.7687 2.2229-6.772 5.8224l-10.144 41.129-3.1769-4.9144c-1.3934-2.0032-3.4002-3.1299-5.546-3.1299h-27.84c-6.354-17.435-6.354-35.745 0.585-49.831 6.772-13.897 19.313-21.503 35.253-21.503z" }));
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
Icon.displayName = 'HjerteKardiografIkon';
export default Icon;
