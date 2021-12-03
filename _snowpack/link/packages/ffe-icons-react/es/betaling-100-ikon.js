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
    React.createElement("path", { d: "m10.825358,34.999996c-5.992344,0 -10.825358,4.845498 -10.825358,10.853321l0,108.233383c0,6.00783 4.833014,10.91329 10.825358,10.91329l178.289462,0c5.99234,0 10.88708,-4.90738 10.88516,-10.91329l0,-108.233383c0,-6.007823 -4.89282,-10.853321 -10.88516,-10.853321l-178.289462,0zm1.614833,12.472325l175.119599,0l0,105.055349l-175.119599,0l0,-105.055349zm87.440187,29.202029c-13.083253,0 -17.284688,10.559741 -17.284688,23.80535c0,13.24753 4.199521,23.98524 17.284688,23.98524c13.083252,0 17.344492,-10.73963 17.344492,-23.98524c0,-13.247528 -4.26124,-23.80535 -17.344492,-23.80535zm40.490422,0c-13.08325,0 -17.3445,10.559741 -17.3445,23.80535c0,13.24753 4.26125,23.98524 17.3445,23.98524s17.3445,-10.73963 17.3445,-23.98524c0,-13.247528 -4.26125,-23.80535 -17.3445,-23.80535zm-78.528698,0.77952c-1.804784,0 -3.072727,0.570849 -4.425837,1.798893l-7.954545,7.495387c-1.676555,1.615646 -1.7311,3.356015 -0.119617,5.0369l1.674641,1.798893c1.548325,1.678967 3.287559,1.730296 4.964114,0.17989l0.538278,-0.539668c0.773206,-0.646642 1.435407,-2.038746 1.435407,-2.038746l0.119617,0s-0.05981,1.793617 -0.05981,3.537823l0,19.248158l-6.220095,0c-2.319617,0 -3.588517,1.27217 -3.588517,3.59778l0,2.57842c0,2.32752 1.2689,3.53782 3.588517,3.53782l23.564592,0c2.321531,0 3.528708,-1.2103 3.528708,-3.53782l0,-2.57842c0,-2.32561 -1.207177,-3.59778 -3.528708,-3.59778l-6.339713,0l0,-32.919744c0,-2.325609 -1.207177,-3.597786 -3.528708,-3.597786l-3.648325,0l0.000001,0zm38.038276,9.594096c4.447842,0 5.741622,5.936826 5.741622,13.431734c0,7.56207 -1.29378,13.61354 -5.741622,13.61162c-4.445933,0 -5.681818,-6.05147 -5.681818,-13.61162c0,-7.494908 1.235885,-13.431734 5.681818,-13.431734zm40.490422,0c4.44785,0 5.74163,5.936826 5.74163,13.431734c0,7.56207 -1.29378,13.61354 -5.74163,13.61162c-4.44593,0 -5.74163,-6.05147 -5.74163,-13.61162c0,-7.494908 1.2957,-13.431734 5.74163,-13.431734z" }));
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
Icon.displayName = 'Betaling100Ikon';
export default Icon;
