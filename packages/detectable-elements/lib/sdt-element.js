"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

var d3 = _interopRequireWildcard(require("d3"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        ---shadow-0: var(--shadow-0, ", ");\n        ---shadow-2: var(--shadow-2, ", ");\n        ---shadow-4: var(--shadow-4, ", ");\n        ---shadow-8: var(--shadow-8, ", ");\n\n        ---color-h: var(--color-h, ", ");\n        ---color-m: var(--color-m, ", ");\n        ---color-fa: var(--color-fa, ", ");\n        ---color-cr: var(--color-cr, ", ");\n        ---color-hr: var(--color-hr, ", ");\n        ---color-far: var(--color-far, ", ");\n        ---color-acc: var(--color-acc, ", ");\n        ---color-d: var(--color-d, ", ");\n        ---color-c: var(--color-c, ", ");\n        ---color-s: var(--color-s, ", ");\n        ---color-present: var(--color-present, ", ");\n        ---color-absent: var(--color-absent, ", ");\n        ---color-correct: var(--color-correct, ", ");\n        ---color-error: var(--color-error, ", ");\n        ---color-nr: var(--color-nr, ", ");\n\n        ---color-h-light: var(--color-h-light, ", ");\n        ---color-m-light: var(--color-m-light, ", ");\n        ---color-fa-light: var(--color-fa-light, ", ");\n        ---color-cr-light: var(--color-cr-light, ", ");\n        ---color-hr-light: var(--color-hr-light, ", ");\n        ---color-far-light: var(--color-far-light, ", ");\n        ---color-acc-light: var(--color-acc-light, ", ");\n        ---color-d-light: var(--color-d-light, ", ");\n        ---color-c-light: var(--color-c-light, ", ");\n        ---color-s-light: var(--color-s-light, ", ");\n        ---color-present-light: var(--color-present-light, ", ");\n        ---color-absent-light: var(--color-absent-light, ", ");\n        ---color-correct-light: var(--color-correct-light, ", ");\n        ---color-error-light: var(--color-error-light, ", ");\n        ---color-nr-light: var(--color-nr-light, ", ");\n\n        ---color-h-dark: var(--color-h-dark, ", ");\n        ---color-m-dark: var(--color-m-dark, ", ");\n        ---color-fa-dark: var(--color-fa-dark, ", ");\n        ---color-cr-dark: var(--color-cr-dark, ", ");\n        ---color-hr-dark: var(--color-hr-dark, ", ");\n        ---color-far-dark: var(--color-far-dark, ", ");\n        ---color-acc-dark: var(--color-acc-dark, ", ");\n        ---color-d-dark: var(--color-d-dark, ", ");\n        ---color-c-dark: var(--color-c-dark, ", ");\n        ---color-s-dark: var(--color-s-dark, ", ");\n        ---color-present-dark: var(--color-present-dark, ", ");\n        ---color-absent-dark: var(--color-absent-dark, ", ");\n        ---color-correct-dark: var(--color-correct-dark, ", ");\n        ---color-error-dark: var(--color-error-dark, ", ");\n        ---color-nr-dark: var(--color-nr-dark, ", ");\n\n        ---color-background: var(--color-background, ", ");\n        ---color-border: var(--color-border, ", ");\n        ---color-text: var(--color-text, ", ");\n        ---color-text-inverse: var(--color-text-inverse, ", ");\n        ---color-link: var(--color-link, ", ");\n        ---color-element-background: var(--color-element-background, ", ");\n        ---color-element-disabled: var(--color-element-disabled, ", ");\n        ---color-element-enabled: var(--color-element-enabled, ", ");\n        ---color-element-selected: var(--color-element-selected, ", ");\n        ---color-element-border: var(--color-element-border, ", ");\n        ---color-element-emphasis: var(--color-element-emphasis, ", ");\n\n        ---font-family-base: var(--font-family-base, \"Source Sans Pro\", sans-serif);\n        ---font-family-math: var(--font-family-math, \"Source Serif Pro\", serif);\n\n        ---transition-duration: var(--transition-duration, 500ms);\n\n        font-family: var(---font-family-base);\n      }\n\n      :host,\n      :host *,\n      :host *::before,\n      :host *::after {\n        box-sizing: border-box;\n      }\n\n      .math-var {\n        font-family: var(---font-family-math);\n        font-style: italic;\n      }\n\n      .math-greek {\n        font-family: var(---font-family-math);\n        font-style: normal;\n      }\n\n      .defs {\n        display: block;\n\n        width: 0;\n        height: 0;\n      }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      <svg class=\"defs\">\n        <defs>\n          ", "\n        </defs>\n      </svg>\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["<feMorphology in=\"offA\" result=\"spreadA\" operator=", " radius=", " />"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["<feMorphology in=\"offP\" result=\"spreadP\" operator=", " radius=", " />"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["<feMorphology in=\"offU\" result=\"spreadU\" operator=", " radius=", " />"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        <filter id=", " x=\"-200%\" y=\"-200%\" width=\"500%\" height=\"500%\">\n          <feComponentTransfer in=\"SourceAlpha\" result=\"solid\">\n            <feFuncA  type=\"table\" tableValues=\"0 1 1\"/>\n          </feComponentTransfer>\n          <feOffset in=\"solid\" result=\"offU\" dx=", " dy=", " />\n          <feOffset in=\"solid\" result=\"offP\" dx=", " dy=", " />\n          <feOffset in=\"solid\" result=\"offA\" dx=", " dy=", " />\n          ", "\n          ", "\n          ", "\n          <feGaussianBlur in=", " result=\"blurU\" stdDeviation=", " />\n          <feGaussianBlur in=", " result=\"blurP\" stdDeviation=", " />\n          <feGaussianBlur in=", " result=\"blurA\" stdDeviation=", " />\n          <feFlood in=\"SourceGraphic\" result=\"opU\" flood-color=", " flood-opacity=", " />\n          <feFlood in=\"SourceGraphic\" result=\"opP\" flood-color=", " flood-opacity=", " />\n          <feFlood in=\"SourceGraphic\" result=\"opA\" flood-color=", " flood-opacity=", " />\n          <feComposite in=\"opU\" in2=\"blurU\" result=\"shU\" operator=\"in\" />\n          <feComposite in=\"opP\" in2=\"blurP\" result=\"shP\" operator=\"in\" />\n          <feComposite in=\"opA\" in2=\"blurA\" result=\"shA\" operator=\"in\" />\n          <!-- HACK Edge: Using a dynamic value for erode radius stops Edge from corrupting the \"radius\" value! -->\n          <feMorphology in=\"solid\" result=\"smaller\" operator=\"erode\" radius=", " />\n          <feComposite in=\"shU\" in2=\"smaller\" result=\"finalU\" operator=\"out\" />\n          <feComposite in=\"shP\" in2=\"smaller\" result=\"finalP\" operator=\"out\" />\n          <feComposite in=\"shA\" in2=\"smaller\" result=\"finalA\" operator=\"out\" />\n          <feMerge>\n            <feMergeNode in=\"finalU\" />\n            <feMergeNode in=\"finalP\" />\n            <feMergeNode in=\"finalA\" />\n            <feMergeNode in=\"SourceGraphic\" />\n          </feMerge>\n        </filter>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
  SDTElement Base Class - Not intended for instantiation!
  <sdt-element>

  Variables:
    H = hits
    M = misses
    FA = false alarms
    CR = correct rejections
    HR = hit rate
    FAR = false alarm rate
    ACC = accuracy
    PPV = positive predictive value
    FOMR = false omission rate (used FOMR to avoid keyword FOR!)
    d = sensitivity (d' for equal variance, d_a for unequal variance)
    c = response bias (c for equal variance, c_a for unequal variance)
    s = standard deviation of signal distribution, with standard deviation of noise distribution = 1
    muN = mean of noise distribution
    muS = mean of signal distribution
    l = lambda, threshold location, with l = 0 indicating no response bias
    h = height of signal distribution

  Equations (* = unequal variance):
    HR = H / (H + M)
    FAR = FA / (FA + CR)
    ACC = (H + CR) / (H + M + FA + CR)
    ACC = (HR + (1 - FAR)) / 2
    PPV = H / (H + FA)
    FOMR = M / (M + CR)

    d' = Z^-1(HR) - Z^-1(FAR)
    *d' = (2 / (s^2 + 1))^(1/2) * (s * Z^-1(HR) - Z^-1(FAR))

    c = -(Z^-1(HR) + Z^-1(FAR))/2
    *c = (2 / (s^2 + 1))^(1/2) * (s / s + 1) * -(Z^-1(HR) + Z^-1(FAR))

    HR = Z(d'/2 - c)
    *HR = Z(((s^2 + 1) / 2)^(1/2) * (d' / (s + 1) - c / s))

    FAR = Z(-d'/2 - c)
    *FAR = Z(((s^2 + 1) / 2)^(1/2) * -(d' / (s + 1) + c))

    HR = Z(d' + Z^-1(FAR))
    *HR = Z(((s^2 + 1) / 2)^(1/2) * d' + Z^-1(FAR) / s)

    HR = Z(-2c - Z^-1(FAR))
    *HR = Z(-((s^2 + 1) / 2)^(1/2) * ((s + 1) / s) * c - Z^-1(FAR))

    muN = -d'/2
    *muN = -((s^2 + 1) / 2)^(1/2) * (1 / (s + 1)) * d'

    d' = -2 * muN
    *d' = -(2 / (s^2 + 1))^(1/2) * (s + 1) * muN

    muS = d'/2
    *muS = ((s^2 + 1) / 2)^(1/2) * (s / (s + 1)) * d'

    d' = 2 * muS
    *d' = (2 / (s^2 + 1))^(1/2) * ((s + 1) / s) * muS

    l = c
    l = ((s^2 + 1) / 2)^(1/2) * c

    c = l
    c = (2 / (s^2 + 1))^(1/2) * l

    h = 1 / (s * (2 * pi)^(1/2))
    s = 1 / (h * (2 * pi)^(1/2))
*/
var SDTElement = /*#__PURE__*/function (_LitElement) {
  _inherits(SDTElement, _LitElement);

  _createClass(SDTElement, null, [{
    key: "properties",
    get: function get() {
      return {
        interactive: {
          attribute: 'interactive',
          type: Boolean,
          reflect: true
        }
      };
    } // HACK: Create a unique ID for each SDTElement
    // This is needed because Edge/IE11 don't have real Shadow DOM, so IDs leak
    // out of elements and collide if there is more than one of an element on a
    // page. Known issue for checkbox/switches and the id/for pattern on <input>
    // and <label>

  }, {
    key: "uniqueId",
    get: function get() {
      SDTElement.ID += 1;
      return SDTElement.ID;
    }
  }]);

  function SDTElement() {
    var _this;

    _classCallCheck(this, SDTElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SDTElement).call(this));
    _this.uniqueId = "sdt-".concat(SDTElement.uniqueId);
    _this.interactive = false;
    return _this;
  }

  _createClass(SDTElement, [{
    key: "getComputedStyleValue",
    value: function getComputedStyleValue(property) {
      // HACK: IE11 requires use of polyfill interface to get custom property value in Javascript
      if (window.ShadyCSS) {
        return window.ShadyCSS.getComputedStyleValue(this, property);
      }

      return getComputedStyle(this).getPropertyValue(property);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated(changedProperties) {
      _get(_getPrototypeOf(SDTElement.prototype), "firstUpdated", this).call(this, changedProperties); // Use focus highlighting if keyboard is used at all


      d3.select(this.renderRoot.host).classed('keyboard', true).on('mousemove.keyboard touchstart.keyboard', function (datum, index, elements) {
        var element = elements[index];
        d3.select(element.renderRoot.host).classed('keyboard', false).on('mousemove.keyboard touchstart.keyboard', null);
      }).on('keydown.keyboard', function (datum, index, elements) {
        var element = elements[index];
        d3.select(element.renderRoot.host).classed('keyboard', true).on('keydown.keyboard mousemove.keyboard touchstart.keyboard', null);
      });
    }
  }], [{
    key: "cssBoxShadow",
    value: function cssBoxShadow(elevation) {
      var rotate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var inverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var umbraO = this.shadows.opacityUmbra + this.shadows.opacityBoost;
      var penumbraO = this.shadows.opacityPenumbra + this.shadows.opacityBoost;
      var ambientO = this.shadows.opacityAmbient + this.shadows.opacityBoost;
      var umbraC = inverse ? "rgba(".concat(this.shadows.inverseBaselineColorString, ", ").concat(umbraO, ")") : "rgba(".concat(this.shadows.baselineColorString, ", ").concat(umbraO, ")");
      var penumbraC = inverse ? "rgba(".concat(this.shadows.inverseBaselineColorString, ", ").concat(penumbraO, ")") : "rgba(".concat(this.shadows.baselineColorString, ", ").concat(penumbraO, ")");
      var ambientC = inverse ? "rgba(".concat(this.shadows.inverseBaselineColorString, ", ").concat(ambientO, ")") : "rgba(".concat(this.shadows.baselineColorString, ", ").concat(ambientO, ")");
      var umbraM = this.shadows.mapUmbra[elevation];
      var penumbraM = this.shadows.mapPenumbra[elevation];
      var ambientM = this.shadows.mapAmbient[elevation];
      var umbraS = rotate ? "".concat(-umbraM.y, "px ").concat(umbraM.y / 2, "px ").concat(umbraM.b, "px ").concat(umbraM.s, "px") : "".concat(umbraM.y / 2, "px ").concat(umbraM.y, "px ").concat(umbraM.b, "px ").concat(umbraM.s, "px");
      var penumbraS = rotate ? "".concat(-penumbraM.y, "px ").concat(penumbraM.y / 2, "px ").concat(penumbraM.b, "px ").concat(penumbraM.s, "px") : "".concat(penumbraM.y / 2, "px ").concat(penumbraM.y, "px ").concat(penumbraM.b, "px ").concat(penumbraM.s, "px");
      var ambientS = rotate ? "".concat(-ambientM.y, "px ").concat(ambientM.y / 2, "px ").concat(ambientM.b, "px ").concat(ambientM.s, "px") : "".concat(ambientM.y / 2, "px ").concat(ambientM.y, "px ").concat(ambientM.b, "px ").concat(ambientM.s, "px");
      return "".concat(umbraS, " ").concat(umbraC, ", ").concat(penumbraS, " ").concat(penumbraC, ", ").concat(ambientS, " ").concat(ambientC);
    }
  }, {
    key: "colors",
    get: function get() {
      return {
        h: d3.schemeSet1[2],
        m: d3.schemeSet1[4],
        fa: d3.schemeSet1[1],
        cr: d3.schemeSet1[0],
        hr: d3.schemeSet1[5],
        far: d3.schemeSet1[3],
        acc: d3.schemeSet1[8],
        d: d3.schemeSet1[7],
        c: d3.schemeSet1[6],
        s: '#4545d0',
        present: '#f032e6',
        absent: '#10dbc9',
        correct: '#ffffff',
        error: '#000000',
        nr: '#cccccc'
      };
    }
  }, {
    key: "lights",
    get: function get() {
      return Object.keys(SDTElement.colors).reduce(function (acc, cur) {
        acc[cur] = d3.interpolateRgb(SDTElement.colors[cur], '#ffffff')(0.5);
        return acc;
      }, {});
    }
  }, {
    key: "darks",
    get: function get() {
      return Object.keys(SDTElement.colors).reduce(function (acc, cur) {
        acc[cur] = d3.interpolateRgb(SDTElement.colors[cur], '#000000')(0.5);
        return acc;
      }, {});
    }
  }, {
    key: "greys",
    get: function get() {
      var grey = '#999999';
      var greys = {};
      greys.white = '#ffffff';
      greys.light75 = d3.interpolateRgb(grey, '#ffffff')(0.75);
      greys.light50 = d3.interpolateRgb(grey, '#ffffff')(0.5);
      greys.light25 = d3.interpolateRgb(grey, '#ffffff')(0.25);
      greys.grey = grey;
      greys.dark25 = d3.interpolateRgb(grey, '#000000')(0.25);
      greys.dark50 = d3.interpolateRgb(grey, '#000000')(0.5);
      greys.dark75 = d3.interpolateRgb(grey, '#000000')(0.75);
      greys.black = '#000000';
      return greys;
    }
  }, {
    key: "shadows",
    get: function get() {
      // Material Design elevation styles
      // References:
      //   https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation
      //   https://codepen.io/hanger/pen/yOGvQp

      /* eslint-disable key-spacing, object-curly-newline */
      return {
        elevations: [0, 2, 4, 8, 16],
        baselineColor: '#000000',
        baselineColorString: '0, 0, 0',
        inverseBaselineColor: '#FFFFFF',
        inverseBaselineColorString: '255, 255, 255',
        opacityUmbra: 0.2,
        opacityPenumbra: 0.14,
        opacityAmbient: 0.12,
        opacityBoost: 0.2,
        mapUmbra: {
          // $mdc-elevation-umbra-map
          0: {
            x: 0,
            y: 0,
            b: 0,
            s: 0
          },
          // offset-x, offset-y, blur-radius, spread-radius
          2: {
            x: 0,
            y: 3,
            b: 1,
            s: -2
          },
          4: {
            x: 0,
            y: 2,
            b: 4,
            s: -1
          },
          8: {
            x: 0,
            y: 5,
            b: 5,
            s: -3
          },
          16: {
            x: 0,
            y: 8,
            b: 10,
            s: -5
          }
        },
        mapPenumbra: {
          // $mdc-elevation-penumbra-map
          0: {
            x: 0,
            y: 0,
            b: 0,
            s: 0
          },
          // offset-x, offset-y, blur-radius, spread-radius
          2: {
            x: 0,
            y: 2,
            b: 2,
            s: 0
          },
          4: {
            x: 0,
            y: 4,
            b: 5,
            s: 0
          },
          8: {
            x: 0,
            y: 8,
            b: 10,
            s: 1
          },
          16: {
            x: 0,
            y: 16,
            b: 24,
            s: 2
          }
        },
        mapAmbient: {
          // $mdc-elevation-ambient-map
          0: {
            x: 0,
            y: 0,
            b: 0,
            s: 0
          },
          // offset-x, offset-y, blur-radius, spread-radius
          2: {
            x: 0,
            y: 1,
            b: 5,
            s: 0
          },
          4: {
            x: 0,
            y: 1,
            b: 10,
            s: 0
          },
          8: {
            x: 0,
            y: 3,
            b: 14,
            s: 2
          },
          16: {
            x: 0,
            y: 6,
            b: 30,
            s: 5
          }
        }
      };
      /* eslint-enable key-spacing, object-curly-newline */
    }
  }, {
    key: "svgFilters",
    get: function get() {
      var shadows = SDTElement.shadows; // eslint-disable-line prefer-destructuring

      var erodeRadius = 1;
      var filters = shadows.elevations.map(function (z) {
        return (0, _litElement.svg)(_templateObject(), "shadow-".concat(z), shadows.mapUmbra[z].y / 2, shadows.mapUmbra[z].y, shadows.mapPenumbra[z].y / 2, shadows.mapPenumbra[z].y, shadows.mapAmbient[z].y / 2, shadows.mapAmbient[z].y, shadows.mapUmbra[z].s === 0 ? (0, _litElement.svg)(_templateObject2()) : (0, _litElement.svg)(_templateObject3(), shadows.mapUmbra[z].s > 0 ? 'dilate' : 'erode', Math.abs(shadows.mapUmbra[z].s)), shadows.mapPenumbra[z].s === 0 ? (0, _litElement.svg)(_templateObject4()) : (0, _litElement.svg)(_templateObject5(), shadows.mapPenumbra[z].s > 0 ? 'dilate' : 'erode', Math.abs(shadows.mapPenumbra[z].s)), shadows.mapAmbient[z].s === 0 ? (0, _litElement.svg)(_templateObject6()) : (0, _litElement.svg)(_templateObject7(), shadows.mapAmbient[z].s > 0 ? 'dilate' : 'erode', Math.abs(shadows.mapAmbient[z].s)), shadows.mapUmbra[z].s === 0 ? 'offU' : 'spreadU', shadows.mapUmbra[z].b / 2, shadows.mapPenumbra[z].s === 0 ? 'offP' : 'spreadP', shadows.mapPenumbra[z].b / 2, shadows.mapAmbient[z].s === 0 ? 'offA' : 'spreadA', shadows.mapAmbient[z].b / 2, shadows.baselineColor, shadows.opacityUmbra + shadows.opacityBoost, shadows.baselineColor, shadows.opacityPenumbra + shadows.opacityBoost, shadows.baselineColor, shadows.opacityAmbient + shadows.opacityBoost, erodeRadius);
      });
      return (0, _litElement.svg)(_templateObject8(), filters);
    }
  }, {
    key: "styles",
    get: function get() {
      return (0, _litElement.css)(_templateObject9(), (0, _litElement.unsafeCSS)(this.cssBoxShadow(0)), (0, _litElement.unsafeCSS)(this.cssBoxShadow(2)), (0, _litElement.unsafeCSS)(this.cssBoxShadow(4)), (0, _litElement.unsafeCSS)(this.cssBoxShadow(8)), (0, _litElement.unsafeCSS)(this.colors.h), (0, _litElement.unsafeCSS)(this.colors.m), (0, _litElement.unsafeCSS)(this.colors.fa), (0, _litElement.unsafeCSS)(this.colors.cr), (0, _litElement.unsafeCSS)(this.colors.hr), (0, _litElement.unsafeCSS)(this.colors.far), (0, _litElement.unsafeCSS)(this.colors.acc), (0, _litElement.unsafeCSS)(this.colors.d), (0, _litElement.unsafeCSS)(this.colors.c), (0, _litElement.unsafeCSS)(this.colors.s), (0, _litElement.unsafeCSS)(this.colors.present), (0, _litElement.unsafeCSS)(this.colors.absent), (0, _litElement.unsafeCSS)(this.colors.correct), (0, _litElement.unsafeCSS)(this.colors.error), (0, _litElement.unsafeCSS)(this.colors.nr), (0, _litElement.unsafeCSS)(this.lights.h), (0, _litElement.unsafeCSS)(this.lights.m), (0, _litElement.unsafeCSS)(this.lights.fa), (0, _litElement.unsafeCSS)(this.lights.cr), (0, _litElement.unsafeCSS)(this.lights.hr), (0, _litElement.unsafeCSS)(this.lights.far), (0, _litElement.unsafeCSS)(this.lights.acc), (0, _litElement.unsafeCSS)(this.lights.d), (0, _litElement.unsafeCSS)(this.lights.c), (0, _litElement.unsafeCSS)(this.lights.s), (0, _litElement.unsafeCSS)(this.lights.present), (0, _litElement.unsafeCSS)(this.lights.absent), (0, _litElement.unsafeCSS)(this.lights.correct), (0, _litElement.unsafeCSS)(this.lights.error), (0, _litElement.unsafeCSS)(this.lights.nr), (0, _litElement.unsafeCSS)(this.darks.h), (0, _litElement.unsafeCSS)(this.darks.m), (0, _litElement.unsafeCSS)(this.darks.fa), (0, _litElement.unsafeCSS)(this.darks.cr), (0, _litElement.unsafeCSS)(this.darks.hr), (0, _litElement.unsafeCSS)(this.darks.far), (0, _litElement.unsafeCSS)(this.darks.acc), (0, _litElement.unsafeCSS)(this.darks.d), (0, _litElement.unsafeCSS)(this.darks.c), (0, _litElement.unsafeCSS)(this.darks.s), (0, _litElement.unsafeCSS)(this.darks.present), (0, _litElement.unsafeCSS)(this.darks.absent), (0, _litElement.unsafeCSS)(this.darks.correct), (0, _litElement.unsafeCSS)(this.darks.error), (0, _litElement.unsafeCSS)(this.darks.nr), (0, _litElement.unsafeCSS)(this.greys.white), (0, _litElement.unsafeCSS)(this.greys.light75), (0, _litElement.unsafeCSS)(this.greys.dark75), (0, _litElement.unsafeCSS)(this.greys.white), (0, _litElement.unsafeCSS)(this.greys.dark25), (0, _litElement.unsafeCSS)(this.greys.light75), (0, _litElement.unsafeCSS)(this.greys.light50), (0, _litElement.unsafeCSS)(this.greys.grey), (0, _litElement.unsafeCSS)(this.greys.dark25), (0, _litElement.unsafeCSS)(this.greys.dark50), (0, _litElement.unsafeCSS)(this.greys.dark75));
    }
  }]);

  return SDTElement;
}(_litElement.LitElement); // Static property of SDTElement!


exports.default = SDTElement;
SDTElement.ID = 0;
//# sourceMappingURL=sdt-element.js.map