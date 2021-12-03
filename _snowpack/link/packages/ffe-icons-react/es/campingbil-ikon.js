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
    React.createElement("path", { d: "m28.216 35.849c-3.9747 0-7.4731 2.5438-8.586 6.3596l-18.759 61.531c-0.15899 0.79495-0.31984 1.5924-0.31984 2.5463v33.863c0 5.0876 4.1356 9.0642 9.0642 9.0642h19.029c3.4971 8.7328 12.039 14.942 21.988 14.942 9.9491 0 18.402-6.2095 21.926-14.942h60.223c3.4971 8.7328 12.039 14.942 21.988 14.942 9.9501 0 18.403-6.2112 21.926-14.946 8.3411-0.04 13.539-3.5054 15.436-4.928l0.31984-0.31674 0.79494-0.79494c1.4309-1.4309 6.2012-6.8372 6.2012-15.741v-21.622c0-3.8157-2.3867-7.1558-5.8845-8.4277l-9.2195-3.3382-18.284-7.6296c-0.8221-5.3893-1.5589-10.688-2.065-14.629h18.597c6.0416 0 10.334-5.7224 8.7444-11.446l-5.09-17.973c-1.1129-3.8157-4.7697-6.5179-8.7444-6.5179h-149.29zm1.7483 10.971h146.11l3.8164 13.672h-48.808c-5.0876 0-9.0642 4.1325-9.0642 9.0611v17.014c0 5.0877 4.1356 9.0611 9.0642 9.0611h27.885l21.24 8.7444 8.1109 3.0214v20.032c0 4.6107-2.3861 7.1558-2.863 7.6327l-0.31675 0.31673c-0.28003 0.28003-2.6633 2.1598-6.8098 2.6053-1.2501-11.88-11.361-21.206-23.56-21.206-12.233 0-22.365 9.378-23.569 21.305h-56.997c-1.202-11.93-11.338-21.31-23.57-21.31-12.286 0-22.444 9.4621-23.575 21.464h-15.216v-31.639l18.122-59.779zm19.079 13.672c-4.1337 0-7.7905 2.863-8.7444 6.8378l-4.2915 17.011c-1.4309 5.7236 2.8618 11.288 8.7444 11.288h47.06c5.0876 0 9.0636-4.1325 9.2226-9.0611v-17.014c0-5.0876-4.1356-9.0611-9.0642-9.0611h-42.927zm1.5899 11.288h39.114v12.719h-42.294l3.1798-12.719zm82.516 0h19.681c0.42555 3.4504 1.0332 7.9774 1.6768 12.719h-21.358v-12.719zm-82.517 56.12c6.8365 0 12.402 5.7242 12.561 12.561 0 6.9955-5.7242 12.558-12.561 12.558-6.9955 0-12.558-5.7211-12.558-12.558 0-6.9955 5.7211-12.561 12.558-12.561zm104.14 0c6.8365 0 12.402 5.7242 12.561 12.561 0 6.9955-5.7242 12.558-12.561 12.558-6.9955 0-12.558-5.7211-12.558-12.558 0-6.9955 5.7211-12.561 12.558-12.561z" }));
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
Icon.displayName = 'CampingbilIkon';
export default Icon;
