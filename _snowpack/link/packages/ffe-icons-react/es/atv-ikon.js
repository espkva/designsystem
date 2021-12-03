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
    React.createElement("path", { d: "m102.51117,31c-2.67858,0 -5.02233,2.10934 -5.02233,4.96644l0,2.34371c0,2.67853 2.16518,5.02224 5.02233,5.02224l16.40624,0l10.71429,16.23858l-3.40402,3.73878c-7.67856,8.57129 -19.98884,11.95293 -31.41741,8.20299l-53.40402,-16.07117c-2.14286,-0.71427 -4.27455,-1.06025 -6.41741,-1.06025c-9.82143,0 -19.28571,6.80792 -23.21429,16.6292l-0.72544,1.56247c-1.25,3.21424 0.35714,7.00882 3.57143,8.2588l38.61607,14.45289c14.28571,5.53562 23.54911,18.90594 23.54911,34.26284l0,9.09584l36.43973,0l16.79687,-23.88355c7.85715,-11.78552 22.29911,-20.20057 35.15625,-20.20057l26.22768,0c6.42858,0 8.60492,-8.57129 3.0692,-11.60695c-9.10714,-4.99992 -51.26116,-30.17809 -51.61831,-30.35666l-4.46428,-2.67853l-0.16741,0.16741l-9.65402,-14.6203c-1.78571,-2.67853 -4.97768,-4.46421 -8.37054,-4.46421l-17.68972,0zm38.00222,34.65346c6.07143,3.57137 17.3326,10.16725 27.51117,16.23858l-2.84599,0c-17.14285,0 -35.35714,10.36813 -45.5357,25.72503l-12.83483,18.52649l-17.68973,0c-1.25,-19.10684 -13.23661,-35.68023 -31.80804,-42.46584l-31.75223,-11.99757c2.5,-2.8571 5.88169,-4.79903 9.09598,-4.79903c0.89286,0 1.78571,-0.02232 2.67857,0.33481l53.40402,16.07117c4.28572,1.42855 8.70536,2.17631 13.16964,2.17631c11.96429,0 23.21429,-5.20081 31.25,-13.95067l5.35714,-5.85928zm-107.14285,36.60655c-18.39286,0 -33.37054,14.97744 -33.37054,33.37s14.97768,33.37 33.37054,33.37c18.39285,0 33.42634,-14.97744 33.42634,-33.37s-15.03349,-33.37 -33.42634,-33.37zm133.25893,0c-18.39286,0 -33.42634,14.97744 -33.42634,33.37s15.03348,33.37 33.42634,33.37s33.37054,-14.97744 33.37054,-33.37s-14.97768,-33.37 -33.37054,-33.37zm-133.25893,12.27659c11.60714,0 20.92634,9.49762 20.92634,20.926c0,11.42839 -9.3192,20.8702 -20.92634,20.8702c-11.42857,0 -20.87054,-9.26324 -20.87054,-20.8702c0,-11.42838 9.26339,-20.926 20.87054,-20.926zm133.25893,0c11.42857,0 20.87053,9.49762 20.87053,20.926c0,11.42839 -9.26339,20.8702 -20.87053,20.8702c-11.42857,0 -20.92634,-9.26324 -20.92634,-20.8702c0,-11.42838 9.31919,-20.926 20.92634,-20.926z" }));
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
Icon.displayName = 'AtvIkon';
export default Icon;
