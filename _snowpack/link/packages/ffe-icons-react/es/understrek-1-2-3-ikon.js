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
    React.createElement("path", { d: "m98.62283,54.00001c-10.86811,0 -17.3733,5.59547 -20.50833,9.75954c-1.88101,2.49845 -1.20176,4.81471 1.30627,6.89675l3.52691,2.92787c2.50802,2.08203 4.82011,1.24922 7.11913,-1.04102c1.46301,-1.45743 3.93185,-3.12306 6.85788,-3.12306c3.34403,0 7.11913,1.86082 7.11913,6.4413c0,9.36917 -28.41121,13.71542 -28.41121,37.86705l0,2.08204c0,3.33125 2.28596,5.0099 5.42099,5.0099l36.18347,0c3.34404,0 5.02912,-1.67865 5.02912,-5.0099l0,-3.70863c0,-3.33126 -1.68508,-5.0099 -5.02912,-5.0099l-23.44741,0c0.836,-8.53635 27.43152,-12.51825 27.43152,-32.92221c0,-13.94965 -11.73025,-20.16973 -22.59835,-20.16973zm54.99366,1.2362c-3.34403,0 -5.02911,1.67865 -5.02911,5.00991l0,3.70862c0,3.33126 1.68508,5.00991 5.02911,5.00991l10.64604,0c4.18004,0 6.27006,-0.39039 6.27006,-0.39039l0,0.19519s-2.54721,2.49845 -5.68224,6.24612l-6.00881,7.28712c-1.88102,2.08204 -2.35127,4.35927 -1.30626,6.44131l0.45719,0.84582c1.25401,2.70666 2.6909,3.51344 5.61693,3.51344l0.45719,0c7.10607,0 12.27887,2.08204 12.27887,7.28713c0,3.53946 -3.34403,6.50637 -9.40509,6.50637c-3.76204,0 -6.89707,-1.27525 -9.40509,-2.73268c-2.92603,-1.87383 -5.18587,-1.67864 -6.85788,1.23621l-2.54721,3.96889c-1.67202,2.70665 -1.46302,5.0099 1.04501,7.09193c3.55303,2.49845 9.82309,5.59548 18.81018,5.59548c16.51116,0 24.49242,-11.20396 24.49242,-22.44696c0,-9.16097 -6.04799,-16.91655 -15.87109,-18.99859l11.03792,-12.68741c1.67202,-1.87384 2.28596,-3.74767 2.28596,-6.24611l0,-1.4314c0,-3.33126 -1.61977,-5.00991 -4.9638,-5.00991l-31.3503,0zm-125.00934,0.1952c-2.50802,0 -4.38904,0.87185 -6.27006,2.53748l-11.49511,10.60537c-2.50802,2.29024 -2.49496,4.8017 -0.19594,7.09194l2.28596,2.47242c2.29902,2.29024 4.82011,2.48543 7.11913,0.19519l0.58782,-0.84582c1.25401,-0.83282 2.09002,-2.86281 2.09002,-2.86281l0.26125,0l0,4.94484l0,27.52193l-9.01321,0c-3.34403,0 -5.02911,1.67864 -5.02911,5.0099l0.19594,0l0,3.70863c0,3.33125 1.68508,5.0099 5.02911,5.0099l33.63626,0c3.34403,0 5.02911,-1.67865 5.02911,-5.0099l0,-3.51344c0,-3.33126 -1.68508,-5.0099 -5.02911,-5.0099l-8.9479,0l0,-46.84583c0,-3.33126 -1.68508,-5.0099 -5.02911,-5.0099l-5.22505,0zm-22.79428,76.18953c-3.13503,0 -5.81287,2.52448 -5.81287,5.85573l0,2.73267c0,3.12306 2.46884,5.79067 5.81287,5.79067l43.89042,0c3.34404,0 6.08719,-2.66761 5.87819,-5.79067l0,-2.73267c0,-3.12305 -2.53415,-5.85573 -5.87819,-5.85573l-43.89042,0zm72.30164,0c-3.13504,0 -5.81287,2.52448 -5.81287,5.85573l0,2.73267c0,3.12306 2.46883,5.79067 5.81287,5.79067l43.89042,0c3.13503,0 5.87819,-2.66761 5.87819,-5.79067l0,-2.73267c0,-3.12305 -2.53415,-5.85573 -5.87819,-5.85573l-43.89042,0zm72.1057,0c-3.13503,0 -5.81287,2.52448 -5.81287,5.85573l0,2.73267c0,3.12306 2.46883,5.79067 5.81287,5.79067l43.89042,0c3.34403,0 6.08718,-2.66761 5.87818,-5.79067l0,-2.73267c0,-3.12305 -2.53415,-5.85573 -5.87818,-5.85573l-43.89042,0z" }));
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
Icon.displayName = 'Understrek123Ikon';
export default Icon;
