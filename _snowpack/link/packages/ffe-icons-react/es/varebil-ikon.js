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
    React.createElement("path", { d: "M20.431,43.008c-11.384,0.578-20.431,10.001-20.431,21.508v67.715c0,4.8844,4.0028,8.8807,8.8951,8.8807h17.304c2.49,9.15,10.872,15.89,20.813,15.89,9.9301,0,18.277-6.755,20.778-15.888h66.539c2.5,9.14,10.85,15.89,20.78,15.89,9.9395,0,18.287-6.7433,20.778-15.888h1.2161c8.3391,0,13.787-3.5523,15.566-4.9954l0.34746-0.20814,0.76442-0.76318c1.44-1.33,6.21-6.68,6.21-15.67v-17.206c0-3.4413-2.0987-6.6397-5.212-8.0828l-24.46-11.344-14.25-34.274c-1.3343-3.3303-4.6421-5.5504-8.2001-5.5504h-126.34c-0.37179,0-0.74467-0.01864-1.1119,0zm1.0076,11.101,124.98,0,2.5712,6.2095-14.142,0c-4.8923,0-8.8951,3.9963-8.8951,8.8807v15.194c0,4.8844,4.0028,8.8807,8.8951,8.8807h31.758l22.411,10.338v15.853c0,4.7734-2.4739,7.3266-2.9187,7.7706l-0.31272,0.24283c-0.33356,0.22201-3.3496,2.6711-8.6866,2.6711h-1.1466c-2.38-9.3081-10.792-16.235-20.848-16.235-10.057,0-18.503,6.923-20.883,16.235h-66.331c-2.38-9.312-10.825-16.235-20.883-16.235-10.057,0-18.504,6.9246-20.883,16.235h-15.149v-65.634c0-5.7724,4.6769-10.407,10.459-10.407zm115.53,17.206,16.609,0,4.5518,10.962-21.161,0,0-10.962zm-30.681,5.8626c-2.4461,0-4.4475,1.9982-4.4475,4.4403v7.6665c0,2.4422,2.0014,4.4403,4.4475,4.4403h2.1195c2.4461,0,4.4475-1.9982,4.4475-4.4403v-7.6665c0-2.4422-2.0014-4.4403-4.4475-4.4403h-2.1195zm-59.277,47.838c5.7818,0,10.459,4.6693,10.459,10.442,0,5.7724-4.6769,10.442-10.459,10.442-5.7818,0-10.459-4.6693-10.459-10.442,0-5.7724,4.6769-10.442,10.459-10.442zm108.1,0c5.7818,0,10.424,4.6693,10.424,10.442,0,5.7724-4.6421,10.442-10.424,10.442-5.7818,0-10.459-4.6693-10.459-10.442,0-5.7724,4.6769-10.442,10.459-10.442z" }));
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
Icon.displayName = 'VarebilIkon';
export default Icon;
