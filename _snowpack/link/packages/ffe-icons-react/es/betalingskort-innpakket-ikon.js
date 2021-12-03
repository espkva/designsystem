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
    React.createElement("path", { d: "m124.0011,0c-18.73256,0 -26.435096,33.097512 -29.392869,54.752387c-3.549327,-4.134113 -8.072255,-9.092588 -13.001877,-14.211013c-17.352269,-17.717626 -30.797812,-26.145803 -40.854241,-26.145803c-6.112731,0 -11.030028,3.100585 -13.987801,8.612735c-2.760589,5.118426 -2.982422,10.630576 -0.616203,15.749001c6.112731,13.189789 29.405194,23.42664 47.940572,29.529377l-61.312171,0c-6.112731,0 -11.27651,4.958475 -11.27651,11.258075l0,109.258691c0,6.10274 4.966594,11.19656 11.27651,11.19656l174.50861,0c6.11273,0 11.21489,-4.89696 11.21489,-11.19656l0,-109.443249c-0.19718,-6.102738 -5.08983,-11.073517 -11.39975,-11.073517l-52.87019,0c13.80294,-5.709012 24.06887,-14.530914 30.37879,-26.145802c1.57748,-2.952938 0.38205,-6.693326 -2.77291,-7.874501l-0.6162,-0.184558c-2.56341,-0.984313 -5.71837,-0.02461 -6.90148,2.337742c-9.26768,16.930176 -27.75377,23.217473 -41.16234,25.776685c12.02828,-14.174101 29.15872,-37.219319 26.00376,-50.999695c-0.78874,-3.346662 -3.17961,-7.849892 -9.48952,-10.212242c-1.97185,-0.787451 -3.69722,-0.984313 -5.66907,-0.984313zm0,11.627192c0.59156,0 0.93663,0.172255 1.72537,0.369117c1.57748,0.590588 1.77466,1.193479 1.97185,1.784067c1.38029,6.2996 -8.04761,21.827131 -20.27307,36.788682c3.54933,-20.867424 10.06875,-38.941866 16.57585,-38.941866zm-83.248987,14.58013c9.070504,0 26.804819,16.093511 41.593684,32.236237c-19.521302,-6.102738 -41.211638,-15.355276 -45.35252,-24.607814c-0.78874,-1.771763 -0.739443,-3.518918 0.246481,-5.290681c0.985924,-1.968625 2.132061,-2.337742 3.512355,-2.337742zm-25.449172,55.859738l61.373791,0l0,58.50508l-61.373791,0l0,-58.50508zm73.944327,0l14.234282,0l0,103.78346l-14.234282,0l0,-103.78346zm27.051302,0l68.21364,0l0,58.50508l-68.21364,0l0,-58.50508zm-100.995629,84.09721l61.373791,0l0,19.87081l-61.373791,0l0,-19.87081zm100.995629,0l68.21364,0l0,19.87081l-68.21364,0l0,-19.87081z" }));
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
Icon.displayName = 'BetalingskortInnpakketIkon';
export default Icon;
