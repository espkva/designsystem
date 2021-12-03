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
    React.createElement("path", { d: "m58.06074,3.5c-12.01495,0 -24.82476,7.08772 -24.82476,27.0457l0,65.30689l-17.99065,0c-8.41309,0 -15.24533,6.83071 -15.24533,15.24607l0,8.00272c0,8.41349 6.83224,15.24607 15.24533,15.24607l1.92757,0l0,6.01664c0,19.64886 12.88999,36.35099 30.66588,42.05811l0,8.76211c0,2.92724 2.39019,5.31568 5.31542,5.31568l2.51169,0c2.92523,0 5.257,-2.38844 5.257,-5.31568l0,-6.6592c0.13615,0.001 0.27245,0 0.40888,0l77.33645,0c0.11696,0 0.23372,0.00091 0.35047,0l0,6.6592c0,2.92724 2.38832,5.31568 5.31542,5.31568l2.51168,0c2.9271,0 5.25888,-2.38844 5.25701,-5.31568l0,-8.76211c17.80469,-5.69057 30.72278,-22.3883 30.7243,-42.05811l0,-6.01664l1.92757,0c8.41308,0 15.24532,-6.83258 15.24532,-15.24607l0,-8.00272c0,-8.41536 -6.83224,-15.24607 -15.24532,-15.24607l-139.36916,0l0,-65.30689c0,-9.89768 4.24533,-14.89558 12.67524,-14.89558c5.31048,0 12.58545,8.02734 18.69158,15.36289c-2.28104,3.69224 -3.39943,8.02479 -3.21261,12.5006c0.23925,5.71056 2.8514,11.02951 6.89252,15.07083c1.9028,1.90476 4.98785,1.90476 6.89252,0l24.24066,-24.18342c1.90466,-1.90289 1.90466,-4.98996 0,-6.89285l-0.0584,0c-4.03926,-4.03945 -9.36169,-6.71014 -15.0701,-6.95127c-3.78019,-0.16007 -7.41696,0.65506 -10.68925,2.27814c-8.13199,-9.74703 -17.20734,-19.33504 -27.68692,-19.33504l-0.00001,0zm37.44159,28.27239c0.86729,0 1.69112,0.0958 2.51168,0.29207l-13.0257,13.02633c-0.19813,-0.8206 -0.29205,-1.70475 -0.29205,-2.57022c0,-2.87677 1.12056,-5.56195 3.1542,-7.59382c2.03365,-2.03561 4.7771,-3.15436 7.65187,-3.15436zm-80.257,76.23032l169.50934,0c1.71402,0 3.09578,1.37998 3.09578,3.09595l0,8.00272c0,1.7141 -1.38176,3.09595 -3.09578,3.09595l-14.0771,0l0,18.16676c0,17.64385 -14.36636,32.0109 -32.00935,32.0109l-77.33645,0c-17.64112,0 -32.00934,-14.36705 -32.00934,-32.0109l0,-18.16676l-14.0771,0c-1.71402,0 -3.15421,-1.38185 -3.15421,-3.09595l0,-8.00272c0,-1.71597 1.44019,-3.09595 3.15421,-3.09595z" }));
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
Icon.displayName = 'BadekarDusjIkon';
export default Icon;
