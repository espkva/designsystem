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
    React.createElement("path", { d: "m66.802566,52.006568c-0.749816,0.0315-1.495681,0.167861-2.211923,0.419639l-20.012633,6.959091c-5.280527,1.79048-7.204549,8.148071-3.721648,12.624271l23.383183,29.444981-17.309173,6.36459-19.310436-8.392869c-1.909978-0.67142-4.051681-0.776341-6.074011-0.104911l-16.2909858,5.84003c-5.28052657,2.01431-6.9728232,8.72159-3.2652192,12.97399,6.7410978,7.72144,15.623899,17.66699,17.870931,20.35271,5.280527,6.37857,12.583383,9.51191,21.908568,9.51191,4.665747-0.0226,9.851386-0.80471,15.939887-2.23809,10.673405-2.90953,108.763394-39.04083,136.963654-49.447991,4.49406-1.678569,6.62874-6.8332,4.49406-11.08558-1.57292-3.133341-3.93932-6.70031-7.19752-9.721741-5.16818-4.811909-12.44294-8.952389-22.32989-8.952389-4.38171,0-9.2339,0.76934-14.28972,2.447919h-0.10533c-7.63991,2.685711-21.11508,7.504621-25.9462,9.407001l-58.879276-25.633221c-1.123516-0.55952-2.366625-0.821799-3.616318-0.76934zm0.456428,10.176351,62.144496,26.96209,1.89593-0.664429s18.22905-6.707311,27.66659-10.176361c3.93231-1.34286,7.61182-2.028271,11.09472-2.028271,9.9993,0,16.30503,6.035871,19.45088,11.295402-24.82971,9.064301-124.036198,45.56628-134.260195,48.36391-5.168175,1.45476-9.55691,2.09821-13.376867,2.09821-6.404042,0-10.771712-1.98631-14.254612-6.01488-2.584087-2.90954-10.792778-12.20463-16.185657-18.35942l0.105329-0.1049,12.920438-4.721,22.364997,9.75673,34.056588-12.55434-30.334941-38.047672,16.712304-5.805069z" }));
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
Icon.displayName = 'FlyIkon';
export default Icon;
