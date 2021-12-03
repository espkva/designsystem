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
    React.createElement("path", { d: "M15.0753769,100.330082 C15.0753769,147.050357 52.8724432,184.924623 99.4974874,184.924623 C146.122532,184.924623 183.919598,147.050357 183.919598,100.330082 C183.919598,71.6834188 169.591436,45.5698899 146.515605,30.0549194 L106.234255,104.014213 C102.425705,111.006971 91.8227501,108.29645 91.8227501,100.330082 L91.8227501,16.080402 C48.7943352,19.96582 15.0753769,56.2021658 15.0753769,100.330082 Z M137.476616,15.2733917 C139.513092,11.5419065 144.190204,10.1697268 147.919871,12.2095309 C179.764439,29.6257472 200,63.0352609 200,100 C200,155.228475 155.228475,200 100,200 C44.771525,200 0,155.228475 0,100 C0,44.771525 44.771525,0 100,0 C104.248345,0 107.692308,3.44396347 107.692308,7.69230769 L107.692308,69.8479386 L137.476616,15.2733917 Z", id: "Combined-Shape" }));
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
Icon.displayName = 'KakediagramLitenBitIkon';
export default Icon;
