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
    React.createElement("path", { d: "m 129.19574,12.097656 c -6.00647,0 -10.69951,4.880741 -10.69951,10.699515 v 4.503688 L 104.79426,16.039468 C 101.04021,12.848527 95.409345,12.66196 91.467595,15.8529 L 2.6846216,86.052735 c -2.44013068,1.877023 -2.81637672,5.255888 -0.9393531,7.508316 l 1.5012295,1.876537 c 1.8770237,2.440131 5.2558886,2.816377 7.508317,0.939353 L 97.84999,27.489597 131.63633,55.082283 v -29.84453 h 20.64625 v 46.7377 l 30.40857,24.21275 c 2.25243,1.877024 5.6313,1.501812 7.50832,-0.750615 l 1.50123,-1.876537 c 1.87703,-2.252428 1.50181,-5.631293 -0.75062,-7.508316 L 165.60925,65.781798 V 22.797171 c 0,-6.006476 -4.87857,-10.699515 -10.69735,-10.699515 z m 23.27557,81.463395 v 24.776789 c 0,2.06473 1.68835,3.75308 3.75308,3.75308 h 5.63178 c 2.06472,0 3.75308,-1.68835 3.75308,-3.75308 V 104.26057 Z M 40.788083,94.498235 27.647986,104.82244 v 70.01327 c 0,5.81877 4.693039,10.69951 10.699514,10.69951 h 116.75097 c 5.81878,0 10.69951,-4.69304 10.69951,-10.69951 v -14.26602 c 0,-2.06472 -1.69052,-3.75308 -3.75524,-3.75308 h -5.62961 c -2.25243,0.18771 -3.94182,1.87709 -3.94182,3.94182 v 11.63669 H 40.788083 Z M 183.00138,122.36426 c -2.12371,-0.06 -4.25204,1.59192 -4.25204,4.04378 v 6.7577 h -39.6047 c -2.81552,0 -5.25647,2.25324 -5.25647,5.25647 v 2.44059 c 0,2.81554 2.25324,5.2543 5.25647,5.2543 h 39.6047 v 6.7577 c 0,3.75404 4.50414,5.44372 6.94427,2.81589 l 12.76479,-13.32667 c 1.50163,-1.50162 1.50163,-3.94141 0,-5.44304 l -12.76479,-13.32883 c -0.76254,-0.82119 -1.72691,-1.20062 -2.69223,-1.22789 z" }));
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
Icon.displayName = 'HusPilUtIkon';
export default Icon;
