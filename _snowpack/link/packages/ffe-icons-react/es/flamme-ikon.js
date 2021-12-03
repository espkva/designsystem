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
    React.createElement("path", { d: "M64.200714,0.00130498c-4.517529-0.0986822-7.758252,5.41343312-4.348796,9.30000012l3.583408,4.1294769c3.673863,4.108657,13.115969,17.413209,13.115969,29.183955,0,19.432835-12.336666,31.314626-25.36218,43.862685-13.693485,13.214327-29.189115,28.101268-29.189115,52.642168,0,38.86567,30.511152,56.42462,46.653882,60.31119l1.774306,0.41642c3.785191,0.88835,7.368599-2.2209,6.923283-6.10747l0.104381-0.1041-0.208742-1.87388c0-0.11105-1.342907-16.45545,16.803748-32.4459,10.687602-9.32776,17.708292-18.52365,21.048182-27.51828,2.67188-7.10686,3.33988-14.65097,3.33988-21.20261,7.12503,6.99582,12.11397,14.85224,14.78589,23.1806,3.33987,10.54925,3.91041,32.89007-8.00179,50.76828-1.44726,2.33194-1.23855,5.33015,0.76537,7.21791l2.67888,2.53321c2.11524,1.9988,5.35772,2.02656,7.58428,0.1388,23.15648-20.54328,41.74845-41.32253,41.74845-76.96791,0-42.530149-25.73094-76.62783-76.60838-101.501859-16.69938-8.2173129-29.502233-13.3114919-30.058881-13.5335819l-5.114183-2.01268602c-0.681893-0.2637315-1.372481-0.402321-2.017842-0.4164181zm21.952721,24.08283502c2.783228,1.332537,5.782158,2.78306,9.010705,4.337686,45.75628,22.32,68.91972,52.281263,68.91972,89.148134,0,18.87761-6.23443,32.98724-16.14273,45.42425,2.11525-12.32597,1.33595-24.20082-1.66995-33.41753-3.45121-10.88239-9.93613-20.89724-19.0651-29.669781-7.34775-7.10687-13.90225-10.854626-14.1249-10.965671l-2.67888-1.561567c-4.34182-2.442985-9.46993,1.436637-8.24532,6.211568l0.80019,2.98433c0,0.11104,4.00093,16.885741-1.00891,30.433211-2.449242,6.77373-8.245314,14.22761-17.15165,22.00074-14.138805,12.32597-19.03033,25.31127-20.700266,33.97276-10.576274-4.88597-28.284568-17.205-28.284568-43.96679,0-18.65552,11.585191-29.76694,24.944692-42.648131,13.916146-13.325379,29.606602-28.545449,29.606602-53.752612,0-6.440597-1.760396-12.867314-4.209635-18.530597z" }));
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
Icon.displayName = 'FlammeIkon';
export default Icon;
