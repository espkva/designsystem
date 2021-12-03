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
    React.createElement("path", { d: "m133.8375,8.775c-6.113875,0 -11.081625,4.96575 -11.081625,11.08175l0,4.6865l-14.3525,-11.765125c-4.022625,-3.302 -9.77925,-3.37425 -13.86375,-0.146437l-92.45625,73.07625c-2.398,1.89375 -2.774875,5.36375 -0.878775,7.7625l1.611,2.05c1.896125,2.399875 5.362125,2.823625 7.762,0.927537l90.80125,-71.7625l35.05125,28.75375l0,-31l21.48,0l0,48.67125l31.43875,25.2875c2.384375,1.913625 5.89525,1.554375 7.811,-0.829913l1.610875,-2.050375c1.915625,-2.382375 1.554375,-5.8465 -0.829888,-7.762125l-26.36125,-21.1875l0,-44.7175c0,-6.115875 -4.96775,-11.08175 -11.08175,-11.08175l-26.655,0l-0.005338,0.006188zm-48.1775,79.185c-8.318625,0 -15.25625,3.8605 -18.99,10.642375c-4.301875,7.81475 -3.548125,18.11125 1.95275,26.80125c4.8525,7.668375 17.17375,17.99375 24.36,22.89625c2.0855,1.4255 4.497125,2.19675 7.02975,2.19675c2.53075,0 4.995,-0.771325 7.078625,-2.19675c7.188,-4.901375 19.5075,-15.2275 24.36,-22.89625c5.50075,-8.689625 6.209625,-18.98625 1.903875,-26.80125c-3.733625,-6.78175 -10.62475,-10.642375 -18.94125,-10.642375c-4.71775,0 -9.636625,1.706625 -14.40125,5.02825c-4.75875,-3.321625 -9.63475,-5.02825 -14.3525,-5.02825zm72.44625,5.56525l0,82.01375l-116.23625,0l0,-81.08625l-13.66875,10.78875l0,72.885c0,6.114 4.96775,11.081625 11.08175,11.081625l121.41,0c6.114,0 11.08175,-4.96775 11.08175,-11.081625l0,-73.47125l-13.66875,-11.1305l0.00025,0.0005zm-72.44,7.1275c2.874375,0 6.43225,1.8395 10.0565,5.17475l4.296,3.95425l4.296,-3.95425c3.630125,-3.33525 7.232875,-5.17475 10.105375,-5.17475c3.6555,0 6.3835,1.419625 7.85975,4.10075c2.04125,3.70375 1.4175,9.155 -1.5625,13.86375c-3.30375,5.22125 -13.54125,14.235 -20.69875,19.13625c-7.15625,-4.89875 -17.34375,-13.915 -20.65,-19.13625c-2.979875,-4.708 -3.600875,-10.162 -1.562125,-13.86375c1.47625,-2.685 4.20425,-4.10075 7.85975,-4.10075z" }));
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
Icon.displayName = 'HusHjerteIkon';
export default Icon;
