function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1 = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    e$2 = Symbol(),
    n$3 = new Map();

var s$3 = /*#__PURE__*/function () {
  function s(t, n) {
    _classCallCheck(this, s);

    if (this._$cssResult$ = !0, n !== e$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t;
  }

  _createClass(s, [{
    key: "styleSheet",
    get: function get() {
      var e = n$3.get(this.cssText);
      return t$1 && void 0 === e && (n$3.set(this.cssText, e = new CSSStyleSheet()), e.replaceSync(this.cssText)), e;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }]);

  return s;
}();

var o$3 = function o(t) {
  return new s$3("string" == typeof t ? t : t + "", e$2);
},
    r$2 = function r(t) {
  for (var _len = arguments.length, n = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    n[_key - 1] = arguments[_key];
  }

  var o = 1 === t.length ? t[0] : n.reduce(function (e, n, s) {
    return e + function (t) {
      if (!0 === t._$cssResult$) return t.cssText;
      if ("number" == typeof t) return t;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    }(n) + t[s + 1];
  }, t[0]);
  return new s$3(o, e$2);
},
    i$1 = function i(e, n) {
  t$1 ? e.adoptedStyleSheets = n.map(function (t) {
    return t instanceof CSSStyleSheet ? t : t.styleSheet;
  }) : n.forEach(function (t) {
    var n = document.createElement("style"),
        s = window.litNonce;
    void 0 !== s && n.setAttribute("nonce", s), n.textContent = t.cssText, e.appendChild(n);
  });
},
    S$1 = t$1 ? function (t) {
  return t;
} : function (t) {
  return t instanceof CSSStyleSheet ? function (t) {
    var e = "";

    var _iterator = _createForOfIteratorHelper(t.cssRules),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _n = _step.value;
        e += _n.cssText;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return o$3(e);
  }(t) : t;
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var s$2;

var e$1 = window.trustedTypes,
    r$1 = e$1 ? e$1.emptyScript : "",
    h$1 = window.reactiveElementPolyfillSupport,
    o$2 = {
  toAttribute: function toAttribute(t, i) {
    switch (i) {
      case Boolean:
        t = t ? r$1 : null;
        break;

      case Object:
      case Array:
        t = null == t ? t : JSON.stringify(t);
    }

    return t;
  },
  fromAttribute: function fromAttribute(t, i) {
    var s = t;

    switch (i) {
      case Boolean:
        s = null !== t;
        break;

      case Number:
        s = null === t ? null : Number(t);
        break;

      case Object:
      case Array:
        try {
          s = JSON.parse(t);
        } catch (t) {
          s = null;
        }

    }

    return s;
  }
},
    n$2 = function n(t, i) {
  return i !== t && (i == i || t == t);
},
    l$3 = {
  attribute: !0,
  type: String,
  converter: o$2,
  reflect: !1,
  hasChanged: n$2
};

var a$1 = /*#__PURE__*/function (_HTMLElement) {
  _inherits(a, _HTMLElement);

  var _super = _createSuper(a);

  function a() {
    var _this;

    _classCallCheck(this, a);

    _this = _super.call(this), _this._$Et = new Map(), _this.isUpdatePending = !1, _this.hasUpdated = !1, _this._$Ei = null, _this.o();
    return _this;
  }

  _createClass(a, [{
    key: "o",
    value: function o() {
      var _this2 = this;

      var t;
      this._$Ep = new Promise(function (t) {
        return _this2.enableUpdating = t;
      }), this._$AL = new Map(), this._$Em(), this.requestUpdate(), null === (t = this.constructor.l) || void 0 === t || t.forEach(function (t) {
        return t(_this2);
      });
    }
  }, {
    key: "addController",
    value: function addController(t) {
      var i, s;
      (null !== (i = this._$Eg) && void 0 !== i ? i : this._$Eg = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
  }, {
    key: "removeController",
    value: function removeController(t) {
      var i;
      null === (i = this._$Eg) || void 0 === i || i.splice(this._$Eg.indexOf(t) >>> 0, 1);
    }
  }, {
    key: "_$Em",
    value: function _$Em() {
      var _this3 = this;

      this.constructor.elementProperties.forEach(function (t, i) {
        _this3.hasOwnProperty(i) && (_this3._$Et.set(i, _this3[i]), delete _this3[i]);
      });
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var t;
      var s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
      return i$1(s, this.constructor.elementStyles), s;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var t;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$Eg) || void 0 === t || t.forEach(function (t) {
        var i;
        return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
      });
    }
  }, {
    key: "enableUpdating",
    value: function enableUpdating(t) {}
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var t;
      null === (t = this._$Eg) || void 0 === t || t.forEach(function (t) {
        var i;
        return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
      });
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(t, i, s) {
      this._$AK(t, s);
    }
  }, {
    key: "_$ES",
    value: function _$ES(t, i) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l$3;
      var e, r;

      var h = this.constructor._$Eh(t, s);

      if (void 0 !== h && !0 === s.reflect) {
        var _n = (null !== (r = null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) && void 0 !== r ? r : o$2.toAttribute)(i, s.type);

        this._$Ei = t, null == _n ? this.removeAttribute(h) : this.setAttribute(h, _n), this._$Ei = null;
      }
    }
  }, {
    key: "_$AK",
    value: function _$AK(t, i) {
      var s, e, r;

      var h = this.constructor,
          n = h._$Eu.get(t);

      if (void 0 !== n && this._$Ei !== n) {
        var _t = h.getPropertyOptions(n),
            _l = _t.converter,
            _a2 = null !== (r = null !== (e = null === (s = _l) || void 0 === s ? void 0 : s.fromAttribute) && void 0 !== e ? e : "function" == typeof _l ? _l : null) && void 0 !== r ? r : o$2.fromAttribute;

        this._$Ei = n, this[n] = _a2(i, _t.type), this._$Ei = null;
      }
    }
  }, {
    key: "requestUpdate",
    value: function requestUpdate(t, i, s) {
      var e = !0;
      void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || n$2)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$Ei !== t && (void 0 === this._$E_ && (this._$E_ = new Map()), this._$E_.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$Ep = this._$EC());
    }
  }, {
    key: "_$EC",
    value: function () {
      var _$EC2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var t;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isUpdatePending = !0;
                _context.prev = 1;
                _context.next = 4;
                return this._$Ep;

              case 4:
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);
                Promise.reject(_context.t0);

              case 9:
                t = this.scheduleUpdate();
                _context.t1 = null != t;

                if (!_context.t1) {
                  _context.next = 14;
                  break;
                }

                _context.next = 14;
                return t;

              case 14:
                return _context.abrupt("return", !this.isUpdatePending);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 6]]);
      }));

      function _$EC() {
        return _$EC2.apply(this, arguments);
      }

      return _$EC;
    }()
  }, {
    key: "scheduleUpdate",
    value: function scheduleUpdate() {
      return this.performUpdate();
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      var _this4 = this;

      var t;
      if (!this.isUpdatePending) return;
      this.hasUpdated, this._$Et && (this._$Et.forEach(function (t, i) {
        return _this4[i] = t;
      }), this._$Et = void 0);
      var i = !1;
      var s = this._$AL;

      try {
        i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$Eg) || void 0 === t || t.forEach(function (t) {
          var i;
          return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
        }), this.update(s)) : this._$EU();
      } catch (t) {
        throw i = !1, this._$EU(), t;
      }

      i && this._$AE(s);
    }
  }, {
    key: "willUpdate",
    value: function willUpdate(t) {}
  }, {
    key: "_$AE",
    value: function _$AE(t) {
      var i;
      null === (i = this._$Eg) || void 0 === i || i.forEach(function (t) {
        var i;
        return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
      }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
  }, {
    key: "_$EU",
    value: function _$EU() {
      this._$AL = new Map(), this.isUpdatePending = !1;
    }
  }, {
    key: "updateComplete",
    get: function get() {
      return this.getUpdateComplete();
    }
  }, {
    key: "getUpdateComplete",
    value: function getUpdateComplete() {
      return this._$Ep;
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(t) {
      return !0;
    }
  }, {
    key: "update",
    value: function update(t) {
      var _this5 = this;

      void 0 !== this._$E_ && (this._$E_.forEach(function (t, i) {
        return _this5._$ES(i, _this5[i], t);
      }), this._$E_ = void 0), this._$EU();
    }
  }, {
    key: "updated",
    value: function updated(t) {}
  }, {
    key: "firstUpdated",
    value: function firstUpdated(t) {}
  }], [{
    key: "addInitializer",
    value: function addInitializer(t) {
      var i;
      null !== (i = this.l) && void 0 !== i || (this.l = []), this.l.push(t);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      var _this6 = this;

      this.finalize();
      var t = [];
      return this.elementProperties.forEach(function (i, s) {
        var e = _this6._$Eh(s, i);

        void 0 !== e && (_this6._$Eu.set(e, s), t.push(e));
      }), t;
    }
  }, {
    key: "createProperty",
    value: function createProperty(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l$3;

      if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
        var _s = "symbol" == _typeof(t) ? Symbol() : "__" + t,
            _e = this.getPropertyDescriptor(t, _s, i);

        void 0 !== _e && Object.defineProperty(this.prototype, t, _e);
      }
    }
  }, {
    key: "getPropertyDescriptor",
    value: function getPropertyDescriptor(t, i, s) {
      return {
        get: function get() {
          return this[i];
        },
        set: function set(e) {
          var r = this[t];
          this[i] = e, this.requestUpdate(t, r, s);
        },
        configurable: !0,
        enumerable: !0
      };
    }
  }, {
    key: "getPropertyOptions",
    value: function getPropertyOptions(t) {
      return this.elementProperties.get(t) || l$3;
    }
  }, {
    key: "finalize",
    value: function finalize() {
      if (this.hasOwnProperty("finalized")) return !1;
      this.finalized = !0;
      var t = Object.getPrototypeOf(this);

      if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
        var _t2 = this.properties,
            _i = [].concat(_toConsumableArray(Object.getOwnPropertyNames(_t2)), _toConsumableArray(Object.getOwnPropertySymbols(_t2)));

        var _iterator = _createForOfIteratorHelper(_i),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _s2 = _step.value;
            this.createProperty(_s2, _t2[_s2]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
  }, {
    key: "finalizeStyles",
    value: function finalizeStyles(i) {
      var s = [];

      if (Array.isArray(i)) {
        var _e2 = new Set(i.flat(1 / 0).reverse());

        var _iterator2 = _createForOfIteratorHelper(_e2),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _i2 = _step2.value;
            s.unshift(S$1(_i2));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else void 0 !== i && s.push(S$1(i));

      return s;
    }
  }, {
    key: "_$Eh",
    value: function _$Eh(t, i) {
      var s = i.attribute;
      return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
  }]);

  return a;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

a$1.finalized = !0, a$1.elementProperties = new Map(), a$1.elementStyles = [], a$1.shadowRootOptions = {
  mode: "open"
}, null == h$1 || h$1({
  ReactiveElement: a$1
}), (null !== (s$2 = globalThis.reactiveElementVersions) && void 0 !== s$2 ? s$2 : globalThis.reactiveElementVersions = []).push("1.1.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;

var i = globalThis.trustedTypes,
    s$1 = i ? i.createPolicy("lit-html", {
  createHTML: function createHTML(t) {
    return t;
  }
}) : void 0,
    e = "lit$".concat((Math.random() + "").slice(9), "$"),
    o$1 = "?" + e,
    n$1 = "<".concat(o$1, ">"),
    l$2 = document,
    h = function h() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return l$2.createComment(t);
},
    r = function r(t) {
  return null === t || "object" != _typeof(t) && "function" != typeof t;
},
    d = Array.isArray,
    u = function u(t) {
  var i;
  return d(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
},
    c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    v = /-->/g,
    a = />/g,
    f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
    _ = /'/g,
    m = /"/g,
    g = /^(?:script|style|textarea)$/i,
    p = function p(t) {
  return function (i) {
    for (var _len = arguments.length, s = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      s[_key - 1] = arguments[_key];
    }

    return {
      _$litType$: t,
      strings: i,
      values: s
    };
  };
},
    $ = p(1),
    y$1 = p(2),
    b = Symbol.for("lit-noChange"),
    w = Symbol.for("lit-nothing"),
    T = new WeakMap(),
    x$1 = function x(t, i, s) {
  var e, o;
  var n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  var l = n._$litPart$;

  if (void 0 === l) {
    var _t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;

    n._$litPart$ = l = new N(i.insertBefore(h(), _t), _t, void 0, null != s ? s : {});
  }

  return l._$AI(t), l;
},
    A = l$2.createTreeWalker(l$2, 129, null, !1),
    C = function C(t, i) {
  var o = t.length - 1,
      l = [];
  var h,
      r = 2 === i ? "<svg>" : "",
      d = c;

  for (var _i = 0; _i < o; _i++) {
    var _s = t[_i];

    var _o = void 0,
        _u = void 0,
        _p = -1,
        _$ = 0;

    for (; _$ < _s.length && (d.lastIndex = _$, _u = d.exec(_s), null !== _u);) {
      _$ = d.lastIndex, d === c ? "!--" === _u[1] ? d = v : void 0 !== _u[1] ? d = a : void 0 !== _u[2] ? (g.test(_u[2]) && (h = RegExp("</" + _u[2], "g")), d = f) : void 0 !== _u[3] && (d = f) : d === f ? ">" === _u[0] ? (d = null != h ? h : c, _p = -1) : void 0 === _u[1] ? _p = -2 : (_p = d.lastIndex - _u[2].length, _o = _u[1], d = void 0 === _u[3] ? f : '"' === _u[3] ? m : _) : d === m || d === _ ? d = f : d === v || d === a ? d = c : (d = f, h = void 0);
    }

    var _y = d === f && t[_i + 1].startsWith("/>") ? " " : "";

    r += d === c ? _s + n$1 : _p >= 0 ? (l.push(_o), _s.slice(0, _p) + "$lit$" + _s.slice(_p) + e + _y) : _s + e + (-2 === _p ? (l.push(void 0), _i) : _y);
  }

  var u = r + (t[o] || "<?>") + (2 === i ? "</svg>" : "");
  if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return [void 0 !== s$1 ? s$1.createHTML(u) : u, l];
};

var E = /*#__PURE__*/function () {
  function E(_ref, n) {
    var t = _ref.strings,
        s = _ref._$litType$;

    _classCallCheck(this, E);

    var l;
    this.parts = [];
    var r = 0,
        d = 0;

    var u = t.length - 1,
        c = this.parts,
        _C = C(t, s),
        _C2 = _slicedToArray(_C, 2),
        v = _C2[0],
        a = _C2[1];

    if (this.el = E.createElement(v, n), A.currentNode = this.el.content, 2 === s) {
      var _t2 = this.el.content,
          _i2 = _t2.firstChild;
      _i2.remove(), _t2.append.apply(_t2, _toConsumableArray(_i2.childNodes));
    }

    for (; null !== (l = A.nextNode()) && c.length < u;) {
      if (1 === l.nodeType) {
        if (l.hasAttributes()) {
          var _t3 = [];

          var _iterator = _createForOfIteratorHelper(l.getAttributeNames()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _i5 = _step.value;

              if (_i5.endsWith("$lit$") || _i5.startsWith(e)) {
                var _s2 = a[d++];

                if (_t3.push(_i5), void 0 !== _s2) {
                  var _t5 = l.getAttribute(_s2.toLowerCase() + "$lit$").split(e),
                      _i6 = /([.?@])?(.*)/.exec(_s2);

                  c.push({
                    type: 1,
                    index: r,
                    name: _i6[2],
                    strings: _t5,
                    ctor: "." === _i6[1] ? M : "?" === _i6[1] ? H : "@" === _i6[1] ? I : S
                  });
                } else c.push({
                  type: 6,
                  index: r
                });
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          for (var _i3 = 0, _t4 = _t3; _i3 < _t4.length; _i3++) {
            var _i4 = _t4[_i3];
            l.removeAttribute(_i4);
          }
        }

        if (g.test(l.tagName)) {
          var _t6 = l.textContent.split(e),
              _s3 = _t6.length - 1;

          if (_s3 > 0) {
            l.textContent = i ? i.emptyScript : "";

            for (var _i7 = 0; _i7 < _s3; _i7++) {
              l.append(_t6[_i7], h()), A.nextNode(), c.push({
                type: 2,
                index: ++r
              });
            }

            l.append(_t6[_s3], h());
          }
        }
      } else if (8 === l.nodeType) if (l.data === o$1) c.push({
        type: 2,
        index: r
      });else {
        var _t7 = -1;

        for (; -1 !== (_t7 = l.data.indexOf(e, _t7 + 1));) {
          c.push({
            type: 7,
            index: r
          }), _t7 += e.length - 1;
        }
      }

      r++;
    }
  }

  _createClass(E, null, [{
    key: "createElement",
    value: function createElement(t, i) {
      var s = l$2.createElement("template");
      return s.innerHTML = t, s;
    }
  }]);

  return E;
}();

function P(t, i) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
  var e = arguments.length > 3 ? arguments[3] : undefined;
  var o, n, l, h;
  if (i === b) return i;
  var d = void 0 !== e ? null === (o = s._$Cl) || void 0 === o ? void 0 : o[e] : s._$Cu;
  var u = r(i) ? void 0 : i._$litDirective$;
  return (null == d ? void 0 : d.constructor) !== u && (null === (n = null == d ? void 0 : d._$AO) || void 0 === n || n.call(d, !1), void 0 === u ? d = void 0 : (d = new u(t), d._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Cl) && void 0 !== l ? l : h._$Cl = [])[e] = d : s._$Cu = d), void 0 !== d && (i = P(t, d._$AS(t, i.values), d, e)), i;
}

var V = /*#__PURE__*/function () {
  function V(t, i) {
    _classCallCheck(this, V);

    this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }

  _createClass(V, [{
    key: "parentNode",
    get: function get() {
      return this._$AM.parentNode;
    }
  }, {
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "p",
    value: function p(t) {
      var i;
      var _this$_$AD = this._$AD,
          s = _this$_$AD.el.content,
          e = _this$_$AD.parts,
          o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : l$2).importNode(s, !0);
      A.currentNode = o;
      var n = A.nextNode(),
          h = 0,
          r = 0,
          d = e[0];

      for (; void 0 !== d;) {
        if (h === d.index) {
          var _i8 = void 0;

          2 === d.type ? _i8 = new N(n, n.nextSibling, this, t) : 1 === d.type ? _i8 = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (_i8 = new L(n, this, t)), this.v.push(_i8), d = e[++r];
        }

        h !== (null == d ? void 0 : d.index) && (n = A.nextNode(), h++);
      }

      return o;
    }
  }, {
    key: "m",
    value: function m(t) {
      var i = 0;

      var _iterator2 = _createForOfIteratorHelper(this.v),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _s4 = _step2.value;
          void 0 !== _s4 && (void 0 !== _s4.strings ? (_s4._$AI(t, _s4, i), i += _s4.strings.length - 2) : _s4._$AI(t[i])), i++;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return V;
}();

var N = /*#__PURE__*/function () {
  function N(t, i, s, e) {
    _classCallCheck(this, N);

    var o;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cg = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
  }

  _createClass(N, [{
    key: "_$AU",
    get: function get() {
      var t, i;
      return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cg;
    }
  }, {
    key: "parentNode",
    get: function get() {
      var t = this._$AA.parentNode;
      var i = this._$AM;
      return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
    }
  }, {
    key: "startNode",
    get: function get() {
      return this._$AA;
    }
  }, {
    key: "endNode",
    get: function get() {
      return this._$AB;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      t = P(this, t, i), r(t) ? t === w || null == t || "" === t ? (this._$AH !== w && this._$AR(), this._$AH = w) : t !== this._$AH && t !== b && this.$(t) : void 0 !== t._$litType$ ? this.T(t) : void 0 !== t.nodeType ? this.S(t) : u(t) ? this.A(t) : this.$(t);
    }
  }, {
    key: "M",
    value: function M(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._$AB;
      return this._$AA.parentNode.insertBefore(t, i);
    }
  }, {
    key: "S",
    value: function S(t) {
      this._$AH !== t && (this._$AR(), this._$AH = this.M(t));
    }
  }, {
    key: "$",
    value: function $(t) {
      this._$AH !== w && r(this._$AH) ? this._$AA.nextSibling.data = t : this.S(l$2.createTextNode(t)), this._$AH = t;
    }
  }, {
    key: "T",
    value: function T(t) {
      var i;
      var s = t.values,
          e = t._$litType$,
          o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = E.createElement(e.h, this.options)), e);
      if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.m(s);else {
        var _t8 = new V(o, this),
            _i9 = _t8.p(this.options);

        _t8.m(s), this.S(_i9), this._$AH = _t8;
      }
    }
  }, {
    key: "_$AC",
    value: function _$AC(t) {
      var i = T.get(t.strings);
      return void 0 === i && T.set(t.strings, i = new E(t)), i;
    }
  }, {
    key: "A",
    value: function A(t) {
      d(this._$AH) || (this._$AH = [], this._$AR());
      var i = this._$AH;
      var s,
          e = 0;

      var _iterator3 = _createForOfIteratorHelper(t),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _o2 = _step3.value;
          e === i.length ? i.push(s = new N(this.M(h()), this.M(h()), this, this.options)) : s = i[e], s._$AI(_o2), e++;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
  }, {
    key: "_$AR",
    value: function _$AR() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._$AA.nextSibling;
      var i = arguments.length > 1 ? arguments[1] : undefined;
      var s;

      for (null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;) {
        var _i10 = t.nextSibling;
        t.remove(), t = _i10;
      }
    }
  }, {
    key: "setConnected",
    value: function setConnected(t) {
      var i;
      void 0 === this._$AM && (this._$Cg = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
  }]);

  return N;
}();

var S = /*#__PURE__*/function () {
  function S(t, i, s, e, o) {
    _classCallCheck(this, S);

    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = w;
  }

  _createClass(S, [{
    key: "tagName",
    get: function get() {
      return this.element.tagName;
    }
  }, {
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      var e = arguments.length > 3 ? arguments[3] : undefined;
      var o = this.strings;
      var n = !1;
      if (void 0 === o) t = P(this, t, i, 0), n = !r(t) || t !== this._$AH && t !== b, n && (this._$AH = t);else {
        var _e = t;

        var _l, _h;

        for (t = o[0], _l = 0; _l < o.length - 1; _l++) {
          _h = P(this, _e[s + _l], i, _l), _h === b && (_h = this._$AH[_l]), n || (n = !r(_h) || _h !== this._$AH[_l]), _h === w ? t = w : t !== w && (t += (null != _h ? _h : "") + o[_l + 1]), this._$AH[_l] = _h;
        }
      }
      n && !e && this.k(t);
    }
  }, {
    key: "k",
    value: function k(t) {
      t === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
  }]);

  return S;
}();

var M = /*#__PURE__*/function (_S) {
  _inherits(M, _S);

  var _super = _createSuper(M);

  function M() {
    var _this;

    _classCallCheck(this, M);

    _this = _super.apply(this, arguments), _this.type = 3;
    return _this;
  }

  _createClass(M, [{
    key: "k",
    value: function k(t) {
      this.element[this.name] = t === w ? void 0 : t;
    }
  }]);

  return M;
}(S);

var _k = i ? i.emptyScript : "";

var H = /*#__PURE__*/function (_S2) {
  _inherits(H, _S2);

  var _super2 = _createSuper(H);

  function H() {
    var _this2;

    _classCallCheck(this, H);

    _this2 = _super2.apply(this, arguments), _this2.type = 4;
    return _this2;
  }

  _createClass(H, [{
    key: "k",
    value: function k(t) {
      t && t !== w ? this.element.setAttribute(this.name, _k) : this.element.removeAttribute(this.name);
    }
  }]);

  return H;
}(S);

var I = /*#__PURE__*/function (_S3) {
  _inherits(I, _S3);

  var _super3 = _createSuper(I);

  function I(t, i, s, e, o) {
    var _this3;

    _classCallCheck(this, I);

    _this3 = _super3.call(this, t, i, s, e, o), _this3.type = 5;
    return _this3;
  }

  _createClass(I, [{
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var s;
      if ((t = null !== (s = P(this, t, i, 0)) && void 0 !== s ? s : w) === b) return;
      var e = this._$AH,
          o = t === w && e !== w || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
          n = t !== w && (e === w || o);
      o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(t) {
      var i, s;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
  }]);

  return I;
}(S);

var L = /*#__PURE__*/function () {
  function L(t, i, s) {
    _classCallCheck(this, L);

    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }

  _createClass(L, [{
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      P(this, t);
    }
  }]);

  return L;
}();

var z = window.litHtmlPolyfillSupport;
null == z || z(E, N), (null !== (t = globalThis.litHtmlVersions) && void 0 !== t ? t : globalThis.litHtmlVersions = []).push("2.1.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var l$1, o;

var s = /*#__PURE__*/function (_t) {
  _inherits(s, _t);

  var _super = _createSuper(s);

  function s() {
    var _this;

    _classCallCheck(this, s);

    _this = _super.apply(this, arguments), _this.renderOptions = {
      host: _assertThisInitialized(_this)
    }, _this._$Dt = void 0;
    return _this;
  }

  _createClass(s, [{
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var t, e;

      var i = _get(_getPrototypeOf(s.prototype), "createRenderRoot", this).call(this);

      return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
  }, {
    key: "update",
    value: function update(t) {
      var i = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), _get(_getPrototypeOf(s.prototype), "update", this).call(this, t), this._$Dt = x$1(i, this.renderRoot, this.renderOptions);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var t;
      _get(_getPrototypeOf(s.prototype), "connectedCallback", this).call(this), null === (t = this._$Dt) || void 0 === t || t.setConnected(!0);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var t;
      _get(_getPrototypeOf(s.prototype), "disconnectedCallback", this).call(this), null === (t = this._$Dt) || void 0 === t || t.setConnected(!1);
    }
  }, {
    key: "render",
    value: function render() {
      return b;
    }
  }]);

  return s;
}(a$1);

s.finalized = !0, s._$litElement$ = !0, null === (l$1 = globalThis.litElementHydrateSupport) || void 0 === l$1 || l$1.call(globalThis, {
  LitElement: s
});
var n = globalThis.litElementPolyfillSupport;
null == n || n({
  LitElement: s
});
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.1.1");

function ascending$2(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector(f) {
  var delta = f;
  var compare1 = f;
  var compare2 = f;

  if (f.length !== 2) {
    delta = function delta(d, x) {
      return f(d) - x;
    };

    compare1 = ascending$2;

    compare2 = function compare2(d, x) {
      return ascending$2(f(d), x);
    };
  }

  function left(a, x) {
    var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;

    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;

      do {
        var mid = lo + hi >>> 1;
        if (compare2(a[mid], x) < 0) lo = mid + 1;else hi = mid;
      } while (lo < hi);
    }

    return lo;
  }

  function right(a, x) {
    var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;

    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;

      do {
        var mid = lo + hi >>> 1;
        if (compare2(a[mid], x) <= 0) lo = mid + 1;else hi = mid;
      } while (lo < hi);
    }

    return lo;
  }

  function center(a, x) {
    var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;
    var i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {
    left: left,
    center: center,
    right: right
  };
}

function number$2(x) {
  return x === null ? NaN : +x;
}

var ascendingBisect = bisector(ascending$2);
var bisectRight = ascendingBisect.right;
bisector(number$2).center;
var bisect = bisectRight;

function count(values, valueof) {
  var count = 0;

  if (valueof === undefined) {
    var _iterator = _createForOfIteratorHelper(values),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;

        if (value != null && (value = +value) >= value) {
          ++count;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    var index = -1;

    var _iterator2 = _createForOfIteratorHelper(values),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _value = _step2.value;

        if ((_value = valueof(_value, ++index, values)) != null && (_value = +_value) >= _value) {
          ++count;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return count;
}

function extent(values, valueof) {
  var min;
  var max;

  if (valueof === undefined) {
    var _iterator = _createForOfIteratorHelper(values),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;

        if (value != null) {
          if (min === undefined) {
            if (value >= value) min = max = value;
          } else {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    var index = -1;

    var _iterator2 = _createForOfIteratorHelper(values),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _value = _step2.value;

        if ((_value = valueof(_value, ++index, values)) != null) {
          if (min === undefined) {
            if (_value >= _value) min = max = _value;
          } else {
            if (min > _value) min = _value;
            if (max < _value) max = _value;
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return [min, max];
}

// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
var Adder = /*#__PURE__*/function () {
  function Adder() {
    _classCallCheck(this, Adder);

    this._partials = new Float64Array(32);
    this._n = 0;
  }

  _createClass(Adder, [{
    key: "add",
    value: function add(x) {
      var p = this._partials;
      var i = 0;

      for (var j = 0; j < this._n && j < 32; j++) {
        var y = p[j],
            hi = x + y,
            lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
        if (lo) p[i++] = lo;
        x = hi;
      }

      p[i] = x;
      this._n = i + 1;
      return this;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      var p = this._partials;
      var n = this._n,
          x,
          y,
          lo,
          hi = 0;

      if (n > 0) {
        hi = p[--n];

        while (n > 0) {
          x = hi;
          y = p[--n];
          hi = x + y;
          lo = y - (hi - x);
          if (lo) break;
        }

        if (n > 0 && (lo < 0 && p[n - 1] < 0 || lo > 0 && p[n - 1] > 0)) {
          y = lo * 2;
          x = hi + y;
          if (y == x - hi) hi = x;
        }
      }

      return hi;
    }
  }]);

  return Adder;
}();

function identity$6(x) {
  return x;
}

var array$3 = Array.prototype;
var slice$1 = array$3.slice;

function constant$5(x) {
  return function () {
    return x;
  };
}

var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);
function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;
  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    var r0 = Math.round(start / step),
        r1 = Math.round(stop / step);
    if (r0 * step < start) ++r0;
    if (r1 * step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);

    while (++i < n) {
      ticks[i] = (r0 + i) * step;
    }
  } else {
    step = -step;

    var _r = Math.round(start * step),
        _r2 = Math.round(stop * step);

    if (_r / step < start) ++_r;
    if (_r2 / step > stop) --_r2;
    ticks = new Array(n = _r2 - _r + 1);

    while (++i < n) {
      ticks[i] = (_r + i) / step;
    }
  }

  if (reverse) ticks.reverse();
  return ticks;
}
function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;else if (error >= e5) step1 *= 5;else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

function nice(start, stop, count) {
  var prestep;

  while (true) {
    var step = tickIncrement(start, stop, count);

    if (step === prestep || step === 0 || !isFinite(step)) {
      return [start, stop];
    } else if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
    }

    prestep = step;
  }
}

function thresholdSturges(values) {
  return Math.ceil(Math.log(count(values)) / Math.LN2) + 1;
}

function bin() {
  var value = identity$6,
      domain = extent,
      threshold = thresholdSturges;

  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1); // Convert number of thresholds into uniform thresholds, and nice the
    // default domain accordingly.

    if (!Array.isArray(tz)) {
      var max = x1,
          tn = +tz;

      if (domain === extent) {
        var _nice = nice(x0, x1, tn);

        var _nice2 = _slicedToArray(_nice, 2);

        x0 = _nice2[0];
        x1 = _nice2[1];
      }

      tz = ticks(x0, x1, tn); // If the last threshold is coincident with the domain’s upper bound, the
      // last bin will be zero-width. If the default domain is used, and this
      // last threshold is coincident with the maximum input value, we can
      // extend the niced upper bound by one tick to ensure uniform bin widths;
      // otherwise, we simply remove the last threshold. Note that we don’t
      // coerce values or the domain to numbers, and thus must be careful to
      // compare order (>=) rather than strict equality (===)!

      if (tz[tz.length - 1] >= x1) {
        if (max >= x1 && domain === extent) {
          var step = tickIncrement(x0, x1, tn);

          if (isFinite(step)) {
            if (step > 0) {
              x1 = (Math.floor(x1 / step) + 1) * step;
            } else if (step < 0) {
              x1 = (Math.ceil(x1 * -step) + 1) / -step;
            }
          }
        } else {
          tz.pop();
        }
      }
    } // Remove any thresholds outside the domain.


    var m = tz.length;

    while (tz[0] <= x0) {
      tz.shift(), --m;
    }

    while (tz[m - 1] > x1) {
      tz.pop(), --m;
    }

    var bins = new Array(m + 1),
        bin; // Initialize bins.

    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    } // Assign data to bins by value, ignoring any outside the domain.


    for (i = 0; i < n; ++i) {
      x = values[i];

      if (x != null && x0 <= x && x <= x1) {
        bins[bisect(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function (_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant$5(_), histogram) : value;
  };

  histogram.domain = function (_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : constant$5([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function (_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant$5(slice$1.call(_)) : constant$5(_), histogram) : threshold;
  };

  return histogram;
}

var _marked$1 = /*#__PURE__*/regeneratorRuntime.mark(flatten);

function flatten(arrays) {
  var _iterator, _step, array;

  return regeneratorRuntime.wrap(function flatten$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iterator = _createForOfIteratorHelper(arrays);
          _context.prev = 1;

          _iterator.s();

        case 3:
          if ((_step = _iterator.n()).done) {
            _context.next = 8;
            break;
          }

          array = _step.value;
          return _context.delegateYield(array, "t0", 6);

        case 6:
          _context.next = 3;
          break;

        case 8:
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t1 = _context["catch"](1);

          _iterator.e(_context.t1);

        case 13:
          _context.prev = 13;

          _iterator.f();

          return _context.finish(13);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked$1, null, [[1, 10, 13, 16]]);
}

function merge(arrays) {
  return Array.from(flatten(arrays));
}

function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}

function identity$5 (x) {
  return x;
}

var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon$2 = 1e-6;

function translateX(x) {
  return "translate(" + x + ",0)";
}

function translateY(y) {
  return "translate(0," + y + ")";
}

function number$1(scale) {
  return function (d) {
    return +scale(d);
  };
}

function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round()) offset = Math.round(offset);
  return function (d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues,
        format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$5 : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + offset,
        range1 = +range[range.length - 1] + offset,
        position = (scale.bandwidth ? center : number$1)(scale.copy(), offset),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");
    path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
    tick = tick.merge(tickEnter);
    line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
    text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);
      tickExit = tickExit.transition(context).attr("opacity", epsilon$2).attr("transform", function (d) {
        return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon$2).attr("transform", function (d) {
        var p = this.parentNode.__axis;
        return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset);
      });
    }

    tickExit.remove();
    path.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
    tick.attr("opacity", 1).attr("transform", function (d) {
      return transform(position(d) + offset);
    });
    line.attr(x + "2", k * tickSizeInner);
    text.attr(x, k * spacing).text(format);
    selection.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
    selection.each(function () {
      this.__axis = position;
    });
  }

  axis.scale = function (_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function () {
    return tickArguments = Array.from(arguments), axis;
  };

  axis.tickArguments = function (_) {
    return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function (_) {
    return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function (_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function (_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function (_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function (_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function (_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  axis.offset = function (_) {
    return arguments.length ? (offset = +_, axis) : offset;
  };

  return axis;
}
function axisRight(scale) {
  return axis(right, scale);
}
function axisBottom(scale) {
  return axis(bottom, scale);
}
function axisLeft(scale) {
  return axis(left, scale);
}

var noop$2 = {
  value: function value() {}
};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }

  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames$1(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {
      type: t,
      name: name
    };
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function on(typename, callback) {
    var _ = this._,
        T = parseTypenames$1(typename + "", _),
        t,
        i = -1,
        n = T.length; // If no callback was specified, return the callback of the given type and name.

    if (arguments.length < 2) {
      while (++i < n) {
        if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
      }

      return;
    } // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.


    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);

    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);else if (callback == null) for (t in _) {
        _[t] = set$1(_[t], typename.name, null);
      }
    }

    return this;
  },
  copy: function copy() {
    var copy = {},
        _ = this._;

    for (var t in _) {
      copy[t] = _[t].slice();
    }

    return new Dispatch(copy);
  },
  call: function call(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) {
      args[i] = arguments[i + 2];
    }
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);

    for (t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  },
  apply: function apply(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);

    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) {
      t[i].value.apply(that, args);
    }
  }
};

function get$1(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set$1(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop$2, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }

  if (callback != null) type.push({
    name: name,
    value: callback
  });
  return type;
}

var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

function namespace (name) {
  var prefix = name += "",
      i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {
    space: namespaces[prefix],
    local: name
  } : name; // eslint-disable-line no-prototype-builtins
}

function creatorInherit(name) {
  return function () {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function () {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

function creator (name) {
  var fullname = namespace(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

function none() {}

function selector (selector) {
  return selector == null ? none : function () {
    return this.querySelector(selector);
  };
}

function selection_select (select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection$1(subgroups, this._parents);
}

// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array$2(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}

function empty() {
  return [];
}

function selectorAll (selector) {
  return selector == null ? empty : function () {
    return this.querySelectorAll(selector);
  };
}

function arrayAll(select) {
  return function () {
    return array$2(select.apply(this, arguments));
  };
}

function selection_selectAll (select) {
  if (typeof select === "function") select = arrayAll(select);else select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection$1(subgroups, parents);
}

function matcher (selector) {
  return function () {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function (node) {
    return node.matches(selector);
  };
}

var find = Array.prototype.find;

function childFind(match) {
  return function () {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

function selection_selectChild (match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

var filter = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function () {
    return filter.call(this.children, match);
  };
}

function selection_selectChildren (match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

function selection_filter (match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection$1(subgroups, this._parents);
}

function sparse (update) {
  return new Array(update.length);
}

function selection_enter () {
  return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
}
function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function appendChild(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function insertBefore(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function querySelector(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function querySelectorAll(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

function constant$4 (x) {
  return function () {
    return x;
  };
}

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length; // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.

  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  } // Put any non-null nodes that don’t fit into exit.


  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map(),
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue; // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.

  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";

      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  } // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.


  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";

    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  } // Add any remaining nodes that were not bound to data to exit.


  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

function selection_data (value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;
  if (typeof value !== "function") value = constant$4(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key); // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.

    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;

        while (!(next = updateGroup[i1]) && ++i1 < dataLength) {
        }

        previous._next = next || null;
      }
    }
  }

  update = new Selection$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
} // Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)

function arraylike(data) {
  return _typeof(data) === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
  : Array.from(data); // Map, Set, iterable, string, or anything else
}

function selection_exit () {
  return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
}

function selection_join (onenter, onupdate, onexit) {
  var enter = this.enter(),
      update = this,
      exit = this.exit();

  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }

  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }

  if (onexit == null) exit.remove();else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

function selection_merge (context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection$1(merges, this._parents);
}

function selection_order () {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}

function selection_sort (compare) {
  if (!compare) compare = ascending$1;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }

    sortgroup.sort(compareNode);
  }

  return new Selection$1(sortgroups, this._parents).order();
}

function ascending$1(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function selection_call () {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

function selection_nodes () {
  return Array.from(this);
}

function selection_node () {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}

function selection_size () {
  var size = 0;

  var _iterator = _createForOfIteratorHelper(this),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      ++size;
    } // eslint-disable-line no-unused-vars

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return size;
}

function selection_empty () {
  return !this.node();
}

function selection_each (callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}

function attrRemove$1(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS$1(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant$1(name, value) {
  return function () {
    this.setAttribute(name, value);
  };
}

function attrConstantNS$1(fullname, value) {
  return function () {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction$1(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
  };
}

function attrFunctionNS$1(fullname, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

function selection_attr (name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }

  return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
}

function defaultView (node) {
  return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
  || node.document && node // node is a Window
  || node.defaultView; // node is a Document
}

function styleRemove$1(name) {
  return function () {
    this.style.removeProperty(name);
  };
}

function styleConstant$1(name, value, priority) {
  return function () {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction$1(name, value, priority) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
  };
}

function selection_style (name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}

function propertyRemove(name) {
  return function () {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function () {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];else this[name] = v;
  };
}

function selection_property (name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function add(name) {
    var i = this._names.indexOf(name);

    if (i < 0) {
      this._names.push(name);

      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function remove(name) {
    var i = this._names.indexOf(name);

    if (i >= 0) {
      this._names.splice(i, 1);

      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function contains(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;

  while (++i < n) {
    list.add(names[i]);
  }
}

function classedRemove(node, names) {
  var list = classList(node),
      i = -1,
      n = names.length;

  while (++i < n) {
    list.remove(names[i]);
  }
}

function classedTrue(names) {
  return function () {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function () {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function () {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

function selection_classed (name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()),
        i = -1,
        n = names.length;

    while (++i < n) {
      if (!list.contains(names[i])) return false;
    }

    return true;
  }

  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

function textRemove() {
  this.textContent = "";
}

function textConstant$1(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction$1(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

function selection_text (value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
}

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function () {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function () {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

function selection_html (value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

function selection_raise () {
  return this.each(raise);
}

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

function selection_lower () {
  return this.each(lower);
}

function selection_append (name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function () {
    return this.appendChild(create.apply(this, arguments));
  });
}

function constantNull() {
  return null;
}

function selection_insert (name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function () {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

function selection_remove () {
  return this.each(remove);
}

function selection_cloneShallow() {
  var clone = this.cloneNode(false),
      parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true),
      parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_clone (deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

function selection_datum (value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

function contextListener(listener) {
  return function (event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {
      type: t,
      name: name
    };
  });
}

function onRemove(typename) {
  return function () {
    var on = this.__on;
    if (!on) return;

    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }

    if (++i) on.length = i;else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function () {
    var on = this.__on,
        o,
        listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {
      type: typename.type,
      name: typename.name,
      value: value,
      listener: listener,
      options: options
    };
    if (!on) this.__on = [o];else on.push(o);
  };
}

function selection_on (typename, value, options) {
  var typenames = parseTypenames(typename + ""),
      i,
      n = typenames.length,
      t;

  if (arguments.length < 2) {
    var on = this.node().__on;

    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;

  for (i = 0; i < n; ++i) {
    this.each(on(typenames[i], value, options));
  }

  return this;
}

function dispatchEvent(node, type, params) {
  var window = defaultView(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function () {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function () {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

function selection_dispatch (type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_callee);

function _callee() {
  var groups, j, m, group, i, n, node;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          groups = this._groups, j = 0, m = groups.length;

        case 1:
          if (!(j < m)) {
            _context.next = 13;
            break;
          }

          group = groups[j], i = 0, n = group.length;

        case 3:
          if (!(i < n)) {
            _context.next = 10;
            break;
          }

          if (!(node = group[i])) {
            _context.next = 7;
            break;
          }

          _context.next = 7;
          return node;

        case 7:
          ++i;
          _context.next = 3;
          break;

        case 10:
          ++j;
          _context.next = 1;
          break;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var root = [null];
function Selection$1(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection$1([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection$1.prototype = selection.prototype = _defineProperty({
  constructor: Selection$1,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch
}, Symbol.iterator, _callee);

function select (selector) {
  return typeof selector === "string" ? new Selection$1([[document.querySelector(selector)]], [document.documentElement]) : new Selection$1([[selector]], root);
}

function sourceEvent (event) {
  var sourceEvent;

  while (sourceEvent = event.sourceEvent) {
    event = sourceEvent;
  }

  return event;
}

function pointer (event, node) {
  event = sourceEvent(event);
  if (node === undefined) node = event.currentTarget;

  if (node) {
    var svg = node.ownerSVGElement || node;

    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }

    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }

  return [event.pageX, event.pageY];
}

// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
var nonpassive = {
  passive: false
};
var nonpassivecapture = {
  capture: true,
  passive: false
};
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

function dragDisable (view) {
  var root = view.document.documentElement,
      selection = select(view).on("dragstart.drag", noevent, nonpassivecapture);

  if ("onselectstart" in root) {
    selection.on("selectstart.drag", noevent, nonpassivecapture);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = select(view).on("dragstart.drag", null);

  if (noclick) {
    selection.on("click.drag", noevent, nonpassivecapture);
    setTimeout(function () {
      selection.on("click.drag", null);
    }, 0);
  }

  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}

var constant$3 = (function (x) {
  return function () {
    return x;
  };
});

function DragEvent(type, _ref) {
  var sourceEvent = _ref.sourceEvent,
      subject = _ref.subject,
      target = _ref.target,
      identifier = _ref.identifier,
      active = _ref.active,
      x = _ref.x,
      y = _ref.y,
      dx = _ref.dx,
      dy = _ref.dy,
      dispatch = _ref.dispatch;
  Object.defineProperties(this, {
    type: {
      value: type,
      enumerable: true,
      configurable: true
    },
    sourceEvent: {
      value: sourceEvent,
      enumerable: true,
      configurable: true
    },
    subject: {
      value: subject,
      enumerable: true,
      configurable: true
    },
    target: {
      value: target,
      enumerable: true,
      configurable: true
    },
    identifier: {
      value: identifier,
      enumerable: true,
      configurable: true
    },
    active: {
      value: active,
      enumerable: true,
      configurable: true
    },
    x: {
      value: x,
      enumerable: true,
      configurable: true
    },
    y: {
      value: y,
      enumerable: true,
      configurable: true
    },
    dx: {
      value: dx,
      enumerable: true,
      configurable: true
    },
    dy: {
      value: dy,
      enumerable: true,
      configurable: true
    },
    _: {
      value: dispatch
    }
  });
}

DragEvent.prototype.on = function () {
  var value = this._.on.apply(this._, arguments);

  return value === this._ ? this : value;
};

function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(event, d) {
  return d == null ? {
    x: event.x,
    y: event.y
  } : d;
}

function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}

function drag () {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = dispatch("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned(event, d) {
    if (touchending || !filter.call(this, event, d)) return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture) return;
    select(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
    dragDisable(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }

  function mousemoved(event) {
    noevent(event);

    if (!mousemoving) {
      var dx = event.clientX - mousedownx,
          dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }

    gestures.mouse("drag", event);
  }

  function mouseupped(event) {
    select(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent(event);
    gestures.mouse("end", event);
  }

  function touchstarted(event, d) {
    if (!filter.call(this, event, d)) return;
    var touches = event.changedTouches,
        c = container.call(this, event, d),
        n = touches.length,
        i,
        gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        nopropagation(event);
        gesture("start", event, touches[i]);
      }
    }
  }

  function touchmoved(event) {
    var touches = event.changedTouches,
        n = touches.length,
        i,
        gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent(event);
        gesture("drag", event, touches[i]);
      }
    }
  }

  function touchended(event) {
    var touches = event.changedTouches,
        n = touches.length,
        i,
        gesture;
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function () {
      touchending = null;
    }, 500); // Ghost clicks are delayed!

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i]);
      }
    }
  }

  function beforestart(that, container, event, d, identifier, touch) {
    var dispatch = listeners.copy(),
        p = pointer(touch || event, container),
        dx,
        dy,
        s;
    if ((s = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag,
      identifier: identifier,
      active: active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch
    }), d)) == null) return;
    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;
    return function gesture(type, event, touch) {
      var p0 = p,
          n;

      switch (type) {
        case "start":
          gestures[identifier] = gesture, n = active++;
          break;

        case "end":
          delete gestures[identifier], --active;
        // falls through

        case "drag":
          p = pointer(touch || event, container), n = active;
          break;
      }

      dispatch.call(type, that, new DragEvent(type, {
        sourceEvent: event,
        subject: s,
        target: drag,
        identifier: identifier,
        active: n,
        x: p[0] + dx,
        y: p[1] + dy,
        dx: p[0] - p0[0],
        dy: p[1] - p0[1],
        dispatch: dispatch
      }), d);
    };
  }

  drag.filter = function (_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant$3(!!_), drag) : filter;
  };

  drag.container = function (_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant$3(_), drag) : container;
  };

  drag.subject = function (_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant$3(_), drag) : subject;
  };

  drag.touchable = function (_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$3(!!_), drag) : touchable;
  };

  drag.on = function () {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function (_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
}

function define (constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);

  for (var key in definition) {
    prototype[key] = definition[key];
  }

  return prototype;
}

function Color() {}
var _darker = 0.7;

var _brighter = 1 / _darker;
var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};
define(Color, color, {
  copy: function copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
  : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
  : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
  : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
  : null // invalid hex
  ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
  : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
  : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
  : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
  : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
  : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
  : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
  : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb, extend(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function rgb() {
    return this;
  },
  displayable: function displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity;
  a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;

  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }

  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function brighter(k) {
    k = k == null ? _brighter : Math.pow(_brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function darker(k) {
    k = k == null ? _darker : Math.pow(_darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function formatHsl() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
  }
}));
/* From FvD 13.37, CSS Color Module Level 3 */

function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

var constant$2 = (function (x) {
  return function () {
    return x;
  };
});

function linear$2(a, d) {
  return function (t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function (a, b) {
    return b - a ? exponential(a, b, y) : constant$2(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear$2(a, d) : constant$2(isNaN(a) ? b : a);
}

var interpolateRgb = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb$1(start, end) {
    var r = color((start = rgb(start)).r, (end = rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function (t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$1.gamma = rgbGamma;
  return rgb$1;
})(1);

function numberArray (a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function (t) {
    for (i = 0; i < n; ++i) {
      c[i] = a[i] * (1 - t) + b[i] * t;
    }

    return c;
  };
}
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) {
    x[i] = interpolate$1(a[i], b[i]);
  }

  for (; i < nb; ++i) {
    c[i] = b[i];
  }

  return function (t) {
    for (i = 0; i < na; ++i) {
      c[i] = x[i](t);
    }

    return c;
  };
}

function date (a, b) {
  var d = new Date();
  return a = +a, b = +b, function (t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

function interpolateNumber (a, b) {
  return a = +a, b = +b, function (t) {
    return a * (1 - t) + b * t;
  };
}

function object (a, b) {
  var i = {},
      c = {},
      k;
  if (a === null || _typeof(a) !== "object") a = {};
  if (b === null || _typeof(b) !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolate$1(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function (t) {
    for (k in i) {
      c[k] = i[k](t);
    }

    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function () {
    return b;
  };
}

function one(b) {
  return function (t) {
    return b(t) + "";
  };
}

function interpolateString (a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0,
      // scan index for next number in b
  am,
      // current match in a
  bm,
      // current match in b
  bs,
      // string preceding current number in b, if any
  i = -1,
      // index in s
  s = [],
      // string constants and placeholders
  q = []; // number interpolators
  // Coerce inputs to strings.

  a = a + "", b = b + ""; // Interpolate pairs of numbers in a & b.

  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    if ((am = am[0]) === (bm = bm[0])) {
      // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else {
      // interpolate non-matching numbers
      s[++i] = null;
      q.push({
        i: i,
        x: interpolateNumber(am, bm)
      });
    }

    bi = reB.lastIndex;
  } // Add remains of b.


  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  } // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.


  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
    for (var i = 0, o; i < b; ++i) {
      s[(o = q[i]).i] = o.x(t);
    }

    return s.join("");
  });
}

function interpolate$1 (a, b) {
  var t = _typeof(b),
      c;

  return b == null || t === "boolean" ? constant$2(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color(b)) ? (b = c, interpolateRgb) : interpolateString : b instanceof color ? interpolateRgb : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a, b);
}

function interpolateRound (a, b) {
  return a = +a, b = +b, function (t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

var degrees$1 = 180 / Math.PI;
var identity$4 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose (a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees$1,
    skewX: Math.atan(skewX) * degrees$1,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var svgNode;
/* eslint-disable no-undef */

function parseCss(value) {
  var m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity$4 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity$4;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$4;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({
        i: i - 4,
        x: interpolateNumber(xa, xb)
      }, {
        i: i - 2,
        x: interpolateNumber(ya, yb)
      });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path

      q.push({
        i: s.push(pop(s) + "rotate(", null, degParen) - 2,
        x: interpolateNumber(a, b)
      });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({
        i: s.push(pop(s) + "skewX(", null, degParen) - 2,
        x: interpolateNumber(a, b)
      });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: interpolateNumber(xa, xb)
      }, {
        i: i - 2,
        x: interpolateNumber(ya, yb)
      });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function (a, b) {
    var s = [],
        // string constants and placeholders
    q = []; // number interpolators

    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc

    return function (t) {
      var i = -1,
          n = q.length,
          o;

      while (++i < n) {
        s[(o = q[i]).i] = o.x(t);
      }

      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

var frame = 0,
    // is an animation frame pending?
timeout$1 = 0,
    // is a timeout pending?
interval$1 = 0,
    // are any timers active?
pokeDelay = 1000,
    // how frequently we check for clock skew
taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" && performance.now ? performance : Date,
    setFrame = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function restart(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);

    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;else taskHead = this;
      taskTail = this;
    }

    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function stop() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now(); // Get the current time, if not already set.

  ++frame; // Pretend we’ve set an alarm, if we haven’t already.

  var t = taskHead,
      e;

  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }

  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout$1 = 0;

  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(),
      delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0,
      t1 = taskHead,
      t2,
      time = Infinity;

  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }

  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.

  if (timeout$1) timeout$1 = clearTimeout(timeout$1);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.

  if (delay > 24) {
    if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval$1) interval$1 = clearInterval(interval$1);
  } else {
    if (!interval$1) clockLast = clock.now(), interval$1 = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

function timeout (callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart(function (elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

function interval (callback, delay, time) {
  var t = new Timer(),
      total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  t._restart = t.restart;

  t.restart = function (callback, delay, time) {
    delay = +delay, time = time == null ? now() : +time;

    t._restart(function tick(elapsed) {
      elapsed += total;

      t._restart(tick, total += delay, time);

      callback(elapsed);
    }, delay, time);
  };

  t.restart(callback, delay, time);
  return t;
}

var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule (node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index,
    // For context during callback.
    group: group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}
function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween; // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!

  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time); // If the elapsed delay is less than our first sleep, start immediately.

    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o; // If the state is not SCHEDULED, then we previously errored on start.

    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue; // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!

      if (o.state === STARTED) return timeout(start); // Interrupt the active transition, if any.

      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    } // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.


    timeout(function () {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    }); // Dispatch the start event.
    // Note this must be done before the tween are initialized.

    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted

    self.state = STARTED; // Initialize the tween, deleting null tween.

    tween = new Array(n = self.tween.length);

    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }

    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    } // Dispatch the end event.


    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];

    for (var i in schedules) {
      return;
    } // eslint-disable-line no-unused-vars


    delete node.__transition;
  }
}

function interrupt (node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;
  if (!schedules) return;
  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty = false;
      continue;
    }

    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}

function selection_interrupt (name) {
  return this.each(function () {
    interrupt(this, name);
  });
}

function tweenRemove(id, name) {
  var tween0, tween1;
  return function () {
    var schedule = set(this, id),
        tween = schedule.tween; // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.

    if (tween !== tween0) {
      tween1 = tween0 = tween;

      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function () {
    var schedule = set(this, id),
        tween = schedule.tween; // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.

    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();

      for (var t = {
        name: name,
        value: value
      }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }

      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

function transition_tween (name, value) {
  var id = this._id;
  name += "";

  if (arguments.length < 2) {
    var tween = get(this.node(), id).tween;

    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }

    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}
function tweenValue(transition, name, value) {
  var id = transition._id;
  transition.each(function () {
    var schedule = set(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function (node) {
    return get(node, id).value[name];
  };
}

function interpolate (a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
}

function attrRemove(name) {
  return function () {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function () {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0,
        value1 = value(this),
        string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0,
        value1 = value(this),
        string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function transition_attr (name, value) {
  var fullname = namespace(name),
      i = fullname === "transform" ? interpolateTransformSvg : interpolate;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}

function attrInterpolate(name, i) {
  return function (t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function (t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;

  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }

  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;

  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }

  tween._value = value;
  return tween;
}

function transition_attrTween (name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

function delayFunction(id, value) {
  return function () {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function () {
    init(this, id).delay = value;
  };
}

function transition_delay (value) {
  var id = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : get(this.node(), id).delay;
}

function durationFunction(id, value) {
  return function () {
    set(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function () {
    set(this, id).duration = value;
  };
}

function transition_duration (value) {
  var id = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : get(this.node(), id).duration;
}

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error();
  return function () {
    set(this, id).ease = value;
  };
}

function transition_ease (value) {
  var id = this._id;
  return arguments.length ? this.each(easeConstant(id, value)) : get(this.node(), id).ease;
}

function easeVarying(id, value) {
  return function () {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error();
    set(this, id).ease = v;
  };
}

function transition_easeVarying (value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}

function transition_filter (match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
}

function transition_merge (transition) {
  if (transition._id !== this._id) throw new Error();

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
}

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function (t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0,
      on1,
      sit = start(name) ? init : set;
  return function () {
    var schedule = sit(this, id),
        on = schedule.on; // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.

    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}

function transition_on (name, listener) {
  var id = this._id;
  return arguments.length < 2 ? get(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
}

function removeFunction(id) {
  return function () {
    var parent = this.parentNode;

    for (var i in this.__transition) {
      if (+i !== id) return;
    }

    if (parent) parent.removeChild(this);
  };
}

function transition_remove () {
  return this.on("end.remove", removeFunction(this._id));
}

function transition_select (select) {
  var name = this._name,
      id = this._id;
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, get(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
}

function transition_selectAll (select) {
  var name = this._name,
      id = this._id;
  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }

        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
}

var Selection = selection.prototype.constructor;
function transition_selection () {
  return new Selection(this._groups, this._parents);
}

function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function () {
    var string0 = styleValue(this, name),
        string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function () {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function () {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function () {
    var string0 = styleValue(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0,
      on1,
      listener0,
      key = "style." + name,
      event = "end." + key,
      remove;
  return function () {
    var schedule = set(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined; // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.

    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}

function transition_style (name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
}

function styleInterpolate(name, i, priority) {
  return function (t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;

  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }

  tween._value = value;
  return tween;
}

function transition_styleTween (name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

function textConstant(value) {
  return function () {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function () {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

function transition_text (value) {
  return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}

function textInterpolate(i) {
  return function (t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;

  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }

  tween._value = value;
  return tween;
}

function transition_textTween (value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}

function transition_transition () {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
}

function transition_end () {
  var on0,
      on1,
      that = this,
      id = that._id,
      size = that.size();
  return new Promise(function (resolve, reject) {
    var cancel = {
      value: reject
    },
        end = {
      value: function value() {
        if (--size === 0) resolve();
      }
    };
    that.each(function () {
      var schedule = set(this, id),
          on = schedule.on; // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.

      if (on !== on0) {
        on1 = (on0 = on).copy();

        on1._.cancel.push(cancel);

        on1._.interrupt.push(cancel);

        on1._.end.push(end);
      }

      schedule.on = on1;
    }); // The selection was empty, resolve end immediately

    if (size === 0) resolve();
  });
}

var id = 0;
function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}
function newId() {
  return ++id;
}
var selection_prototype = selection.prototype;
Transition.prototype = _defineProperty({
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end
}, Symbol.iterator, selection_prototype[Symbol.iterator]);

var linear$1 = function linear(t) {
  return +t;
};

function cubicIn(t) {
  return t * t * t;
}
function cubicOut(t) {
  return --t * t * t + 1;
}
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function inherit(node, id) {
  var timing;

  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error("transition ".concat(id, " not found"));
    }
  }

  return timing;
}

function selection_transition (name) {
  var id, timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
}

selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;

var pi$1 = Math.PI,
    tau$1 = 2 * pi$1,
    epsilon$1 = 1e-6,
    tauEpsilon = tau$1 - epsilon$1;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath

  this._ = "";
}

function path() {
  return new Path();
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function moveTo(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function lineTo(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function quadraticCurveTo(x1, y1, x, y) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function bezierCurveTo(x1, y1, x2, y2, x, y) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01; // Is the radius negative? Error.

    if (r < 0) throw new Error("negative radius: " + r); // Is this path empty? Move to (x1,y1).

    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    } // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon$1)) ; // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    } // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi$1 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21; // If the start tangent is not coincident with (x0,y0), line to.

      if (Math.abs(t01 - 1) > epsilon$1) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function arc(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0; // Is the radius negative? Error.

    if (r < 0) throw new Error("negative radius: " + r); // Is this path empty? Move to (x0,y0).

    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    } // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
      this._ += "L" + x0 + "," + y0;
    } // Is this arc empty? We’re done.


    if (!r) return; // Does the angle go the wrong way? Flip the direction.

    if (da < 0) da = da % tau$1 + tau$1; // Is this a complete circle? Draw two arcs to complete the circle.

    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    } // Is this arc non-empty? Draw an arc!
    else if (da > epsilon$1) {
      this._ += "A" + r + "," + r + ",0," + +(da >= pi$1) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function rect(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
  },
  toString: function toString() {
    return this._;
  }
};

var array$1 = Array.prototype;
var slice = array$1.slice;

function ascending (a, b) {
  return a - b;
}

function area (ring) {
  var i = 0,
      n = ring.length,
      area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];

  while (++i < n) {
    area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
  }

  return area;
}

var constant$1 = (function (x) {
  return function () {
    return x;
  };
});

function contains (ring, hole) {
  var i = -1,
      n = hole.length,
      c;

  while (++i < n) {
    if (c = ringContains(ring, hole[i])) return c;
  }

  return 0;
}

function ringContains(ring, point) {
  var x = point[0],
      y = point[1],
      contains = -1;

  for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    var pi = ring[i],
        xi = pi[0],
        yi = pi[1],
        pj = ring[j],
        xj = pj[0],
        yj = pj[1];
    if (segmentContains(pi, pj, point)) return 0;
    if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) contains = -contains;
  }

  return contains;
}

function segmentContains(a, b, c) {
  var i;
  return collinear(a, b, c) && within(a[i = +(a[0] === b[0])], c[i], b[i]);
}

function collinear(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) === (c[0] - a[0]) * (b[1] - a[1]);
}

function within(p, q, r) {
  return p <= q && q <= r || r <= q && q <= p;
}

function noop$1 () {}

var cases = [[], [[[1.0, 1.5], [0.5, 1.0]]], [[[1.5, 1.0], [1.0, 1.5]]], [[[1.5, 1.0], [0.5, 1.0]]], [[[1.0, 0.5], [1.5, 1.0]]], [[[1.0, 1.5], [0.5, 1.0]], [[1.0, 0.5], [1.5, 1.0]]], [[[1.0, 0.5], [1.0, 1.5]]], [[[1.0, 0.5], [0.5, 1.0]]], [[[0.5, 1.0], [1.0, 0.5]]], [[[1.0, 1.5], [1.0, 0.5]]], [[[0.5, 1.0], [1.0, 0.5]], [[1.5, 1.0], [1.0, 1.5]]], [[[1.5, 1.0], [1.0, 0.5]]], [[[0.5, 1.0], [1.5, 1.0]]], [[[1.0, 1.5], [1.5, 1.0]]], [[[0.5, 1.0], [1.0, 1.5]]], []];
function contours () {
  var dx = 1,
      dy = 1,
      threshold = thresholdSturges,
      smooth = smoothLinear;

  function contours(values) {
    var tz = threshold(values); // Convert number of thresholds into uniform thresholds.

    if (!Array.isArray(tz)) {
      var e = extent(values),
          ts = tickStep(e[0], e[1], tz);
      tz = ticks(Math.floor(e[0] / ts) * ts, Math.floor(e[1] / ts - 1) * ts, tz);
    } else {
      tz = tz.slice().sort(ascending);
    }

    return tz.map(function (value) {
      return contour(values, value);
    });
  } // Accumulate, smooth contour rings, assign holes to exterior rings.
  // Based on https://github.com/mbostock/shapefile/blob/v0.6.2/shp/polygon.js


  function contour(values, value) {
    var polygons = [],
        holes = [];
    isorings(values, value, function (ring) {
      smooth(ring, values, value);
      if (area(ring) > 0) polygons.push([ring]);else holes.push(ring);
    });
    holes.forEach(function (hole) {
      for (var i = 0, n = polygons.length, polygon; i < n; ++i) {
        if (contains((polygon = polygons[i])[0], hole) !== -1) {
          polygon.push(hole);
          return;
        }
      }
    });
    return {
      type: "MultiPolygon",
      value: value,
      coordinates: polygons
    };
  } // Marching squares with isolines stitched into rings.
  // Based on https://github.com/topojson/topojson-client/blob/v3.0.0/src/stitch.js


  function isorings(values, value, callback) {
    var fragmentByStart = new Array(),
        fragmentByEnd = new Array(),
        x,
        y,
        t0,
        t1,
        t2,
        t3; // Special case for the first row (y = -1, t2 = t3 = 0).

    x = y = -1;
    t1 = values[0] >= value;
    cases[t1 << 1].forEach(stitch);

    while (++x < dx - 1) {
      t0 = t1, t1 = values[x + 1] >= value;
      cases[t0 | t1 << 1].forEach(stitch);
    }

    cases[t1 << 0].forEach(stitch); // General case for the intermediate rows.

    while (++y < dy - 1) {
      x = -1;
      t1 = values[y * dx + dx] >= value;
      t2 = values[y * dx] >= value;
      cases[t1 << 1 | t2 << 2].forEach(stitch);

      while (++x < dx - 1) {
        t0 = t1, t1 = values[y * dx + dx + x + 1] >= value;
        t3 = t2, t2 = values[y * dx + x + 1] >= value;
        cases[t0 | t1 << 1 | t2 << 2 | t3 << 3].forEach(stitch);
      }

      cases[t1 | t2 << 3].forEach(stitch);
    } // Special case for the last row (y = dy - 1, t0 = t1 = 0).


    x = -1;
    t2 = values[y * dx] >= value;
    cases[t2 << 2].forEach(stitch);

    while (++x < dx - 1) {
      t3 = t2, t2 = values[y * dx + x + 1] >= value;
      cases[t2 << 2 | t3 << 3].forEach(stitch);
    }

    cases[t2 << 3].forEach(stitch);

    function stitch(line) {
      var start = [line[0][0] + x, line[0][1] + y],
          end = [line[1][0] + x, line[1][1] + y],
          startIndex = index(start),
          endIndex = index(end),
          f,
          g;

      if (f = fragmentByEnd[startIndex]) {
        if (g = fragmentByStart[endIndex]) {
          delete fragmentByEnd[f.end];
          delete fragmentByStart[g.start];

          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[f.start] = fragmentByEnd[g.end] = {
              start: f.start,
              end: g.end,
              ring: f.ring.concat(g.ring)
            };
          }
        } else {
          delete fragmentByEnd[f.end];
          f.ring.push(end);
          fragmentByEnd[f.end = endIndex] = f;
        }
      } else if (f = fragmentByStart[endIndex]) {
        if (g = fragmentByEnd[startIndex]) {
          delete fragmentByStart[f.start];
          delete fragmentByEnd[g.end];

          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[g.start] = fragmentByEnd[f.end] = {
              start: g.start,
              end: f.end,
              ring: g.ring.concat(f.ring)
            };
          }
        } else {
          delete fragmentByStart[f.start];
          f.ring.unshift(start);
          fragmentByStart[f.start = startIndex] = f;
        }
      } else {
        fragmentByStart[startIndex] = fragmentByEnd[endIndex] = {
          start: startIndex,
          end: endIndex,
          ring: [start, end]
        };
      }
    }
  }

  function index(point) {
    return point[0] * 2 + point[1] * (dx + 1) * 4;
  }

  function smoothLinear(ring, values, value) {
    ring.forEach(function (point) {
      var x = point[0],
          y = point[1],
          xt = x | 0,
          yt = y | 0,
          v0,
          v1 = values[yt * dx + xt];

      if (x > 0 && x < dx && xt === x) {
        v0 = values[yt * dx + xt - 1];
        point[0] = x + (value - v0) / (v1 - v0) - 0.5;
      }

      if (y > 0 && y < dy && yt === y) {
        v0 = values[(yt - 1) * dx + xt];
        point[1] = y + (value - v0) / (v1 - v0) - 0.5;
      }
    });
  }

  contours.contour = contour;

  contours.size = function (_) {
    if (!arguments.length) return [dx, dy];

    var _0 = Math.floor(_[0]),
        _1 = Math.floor(_[1]);

    if (!(_0 >= 0 && _1 >= 0)) throw new Error("invalid size");
    return dx = _0, dy = _1, contours;
  };

  contours.thresholds = function (_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant$1(slice.call(_)) : constant$1(_), contours) : threshold;
  };

  contours.smooth = function (_) {
    return arguments.length ? (smooth = _ ? smoothLinear : noop$1, contours) : smooth === smoothLinear;
  };

  return contours;
}

function formatDecimal (x) {
  return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
} // Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].

function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity

  var i,
      coefficient = x.slice(0, i); // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).

  return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
}

function exponent (x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}

function formatGroup (grouping, thousands) {
  return function (value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

function formatNumerals (numerals) {
  return function (value) {
    return value.replace(/[0-9]/g, function (i) {
      return numerals[+i];
    });
  };
}

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function () {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim (s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;
        break;

      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;

      default:
        if (!+s[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }

  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

var prefixExponent;
function formatPrefixAuto (x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded (x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

var formatTypes = {
  "%": function _(x, p) {
    return (x * 100).toFixed(p);
  },
  "b": function b(x) {
    return Math.round(x).toString(2);
  },
  "c": function c(x) {
    return x + "";
  },
  "d": formatDecimal,
  "e": function e(x, p) {
    return x.toExponential(p);
  },
  "f": function f(x, p) {
    return x.toFixed(p);
  },
  "g": function g(x, p) {
    return x.toPrecision(p);
  },
  "o": function o(x) {
    return Math.round(x).toString(8);
  },
  "p": function p(x, _p) {
    return formatRounded(x * 100, _p);
  },
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": function X(x) {
    return Math.round(x).toString(16).toUpperCase();
  },
  "x": function x(_x) {
    return Math.round(_x).toString(16);
  }
};

function identity$3 (x) {
  return x;
}

var map = Array.prototype.map,
    prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale (locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity$3 : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? identity$3 : formatNumerals(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type; // The "n" type is an alias for ",g".

    if (type === "n") comma = true, type = "g"; // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g"; // If zero fill is specified, padding goes after sign and before digits.

    if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "="; // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.

    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : ""; // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?

    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type); // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].

    precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i,
          n,
          c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value; // Determine the sign. -0 is not less than 0, but 1 / -0 is!

        var valueNegative = value < 0 || 1 / value < 0; // Perform the initial formatting.

        value = isNaN(value) ? nan : formatType(Math.abs(value), precision); // Trim insignificant zeros.

        if (trim) value = formatTrim(value); // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.

        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false; // Compute the prefix and suffix.

        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : ""); // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.

        if (maybeSuffix) {
          i = -1, n = value.length;

          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      } // If the fill character is not "0", grouping is applied before padding.


      if (comma && !zero) value = group(value, Infinity); // Compute the padding.

      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : ""; // If the fill character is "0", grouping is applied after padding.

      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = ""; // Reconstruct the final output based on the desired alignment.

      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;

        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;

        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;

        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }

      return numerals(value);
    }

    format.toString = function () {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function (value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

function precisionFixed (step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

function precisionPrefix (step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

function precisionRound (step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

var epsilon = 1e-6;
var pi = Math.PI;
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;
var abs = Math.abs;
var cos = Math.cos;
var sin = Math.sin;
var sqrt = Math.sqrt;

function noop() {}

function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function Feature(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function FeatureCollection(object, stream) {
    var features = object.features,
        i = -1,
        n = features.length;

    while (++i < n) {
      streamGeometry(features[i].geometry, stream);
    }
  }
};
var streamGeometryType = {
  Sphere: function Sphere(object, stream) {
    stream.sphere();
  },
  Point: function Point(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function MultiPoint(object, stream) {
    var coordinates = object.coordinates,
        i = -1,
        n = coordinates.length;

    while (++i < n) {
      object = coordinates[i], stream.point(object[0], object[1], object[2]);
    }
  },
  LineString: function LineString(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function MultiLineString(object, stream) {
    var coordinates = object.coordinates,
        i = -1,
        n = coordinates.length;

    while (++i < n) {
      streamLine(coordinates[i], stream, 0);
    }
  },
  Polygon: function Polygon(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function MultiPolygon(object, stream) {
    var coordinates = object.coordinates,
        i = -1,
        n = coordinates.length;

    while (++i < n) {
      streamPolygon(coordinates[i], stream);
    }
  },
  GeometryCollection: function GeometryCollection(object, stream) {
    var geometries = object.geometries,
        i = -1,
        n = geometries.length;

    while (++i < n) {
      streamGeometry(geometries[i], stream);
    }
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1,
      n = coordinates.length - closed,
      coordinate;
  stream.lineStart();

  while (++i < n) {
    coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  }

  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1,
      n = coordinates.length;
  stream.polygonStart();

  while (++i < n) {
    streamLine(coordinates[i], stream, 1);
  }

  stream.polygonEnd();
}

function geoStream (object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
}

function clipBuffer () {
  var lines = [],
      line;
  return {
    point: function point(x, y, m) {
      line.push([x, y, m]);
    },
    lineStart: function lineStart() {
      lines.push(line = []);
    },
    lineEnd: noop,
    rejoin: function rejoin() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function result() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
}

function pointEqual (a, b) {
  return abs(a[0] - b[0]) < epsilon && abs(a[1] - b[1]) < epsilon;
}

function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection

  this.e = entry; // is an entry?

  this.v = false; // visited

  this.n = this.p = null; // next & previous
} // A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.


function clipRejoin (segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;
  segments.forEach(function (segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n,
        p0 = segment[0],
        p1 = segment[n],
        x;

    if (pointEqual(p0, p1)) {
      if (!p0[2] && !p1[2]) {
        stream.lineStart();

        for (i = 0; i < n; ++i) {
          stream.point((p0 = segment[i])[0], p0[1]);
        }

        stream.lineEnd();
        return;
      } // handle degenerate cases by moving the point


      p1[0] += 2 * epsilon;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });
  if (!subject.length) return;
  clip.sort(compareIntersection);
  link(subject);
  link(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;

    while (current.v) {
      if ((current = current.n) === start) return;
    }

    points = current.z;
    stream.lineStart();

    do {
      current.v = current.o.v = true;

      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) {
            stream.point((point = points[i])[0], point[1]);
          }
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }

        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;

          for (i = points.length - 1; i >= 0; --i) {
            stream.point((point = points[i])[0], point[1]);
          }
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }

        current = current.p;
      }

      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);

    stream.lineEnd();
  }
}

function link(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;

  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }

  a.n = b = array[0];
  b.p = a;
}

function clipLine (a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;
  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;

  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;

  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;

  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;

  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
}

var clipMax = 1e9,
    clipMin = -clipMax; // TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {
  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0,
        a1 = 0;

    if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
      do {
        stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      } while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return abs(p[0] - x0) < epsilon ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < epsilon ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < epsilon ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
  }

  return function (stream) {
    var activeStream = stream,
        bufferStream = clipBuffer(),
        segments,
        polygon,
        ring,
        x__,
        y__,
        v__,
        // first point
    x_,
        y_,
        v_,
        // previous point
    first,
        clean;
    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];

          if (a1 <= y1) {
            if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding;
          } else {
            if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding;
          }
        }
      }

      return winding;
    } // Buffer geometry within a polygon and then clip it en masse.


    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = merge(segments)).length;

      if (cleanInside || visible) {
        stream.polygonStart();

        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }

        if (visible) {
          clipRejoin(segments, compareIntersection, startInside, interpolate, stream);
        }

        stream.polygonEnd();
      }

      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    } // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.


    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }

      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);

      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;

        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];

          if (clipLine(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }

            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }

      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}

var identity$2 = (function (x) {
  return x;
});

var areaSum = new Adder(),
    areaRingSum = new Adder(),
    x00$2,
    y00$2,
    x0$3,
    y0$3;
var areaStream = {
  point: noop,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: function polygonStart() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function polygonEnd() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = noop;
    areaSum.add(abs(areaRingSum));
    areaRingSum = new Adder();
  },
  result: function result() {
    var area = areaSum / 2;
    areaSum = new Adder();
    return area;
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00$2 = x0$3 = x, y00$2 = y0$3 = y;
}

function areaPoint(x, y) {
  areaRingSum.add(y0$3 * x - x0$3 * y);
  x0$3 = x, y0$3 = y;
}

function areaRingEnd() {
  areaPoint(x00$2, y00$2);
}

var pathArea = areaStream;

var x0$2 = Infinity,
    y0$2 = x0$2,
    x1 = -x0$2,
    y1 = x1;
var boundsStream = {
  point: boundsPoint,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: noop,
  polygonEnd: noop,
  result: function result() {
    var bounds = [[x0$2, y0$2], [x1, y1]];
    x1 = y1 = -(y0$2 = x0$2 = Infinity);
    return bounds;
  }
};

function boundsPoint(x, y) {
  if (x < x0$2) x0$2 = x;
  if (x > x1) x1 = x;
  if (y < y0$2) y0$2 = y;
  if (y > y1) y1 = y;
}

var boundsStream$1 = boundsStream;

var X0 = 0,
    Y0 = 0,
    Z0 = 0,
    X1 = 0,
    Y1 = 0,
    Z1 = 0,
    X2 = 0,
    Y2 = 0,
    Z2 = 0,
    x00$1,
    y00$1,
    x0$1,
    y0$1;
var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function polygonStart() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function polygonEnd() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function result() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2] : Z1 ? [X1 / Z1, Y1 / Z1] : Z0 ? [X0 / Z0, Y0 / Z0] : [NaN, NaN];
    X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
    return centroid;
  }
};

function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}

function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0$1 = x, y0$1 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0$1,
      dy = y - y0$1,
      z = sqrt(dx * dx + dy * dy);
  X1 += z * (x0$1 + x) / 2;
  Y1 += z * (y0$1 + y) / 2;
  Z1 += z;
  centroidPoint(x0$1 = x, y0$1 = y);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}

function centroidRingEnd() {
  centroidPointRing(x00$1, y00$1);
}

function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00$1 = x0$1 = x, y00$1 = y0$1 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0$1,
      dy = y - y0$1,
      z = sqrt(dx * dx + dy * dy);
  X1 += z * (x0$1 + x) / 2;
  Y1 += z * (y0$1 + y) / 2;
  Z1 += z;
  z = y0$1 * x - x0$1 * y;
  X2 += z * (x0$1 + x);
  Y2 += z * (y0$1 + y);
  Z2 += z * 3;
  centroidPoint(x0$1 = x, y0$1 = y);
}

var pathCentroid = centroidStream;

function PathContext(context) {
  this._context = context;
}
PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function pointRadius(_) {
    return this._radius = _, this;
  },
  polygonStart: function polygonStart() {
    this._line = 0;
  },
  polygonEnd: function polygonEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function point(x, y) {
    switch (this._point) {
      case 0:
        {
          this._context.moveTo(x, y);

          this._point = 1;
          break;
        }

      case 1:
        {
          this._context.lineTo(x, y);

          break;
        }

      default:
        {
          this._context.moveTo(x + this._radius, y);

          this._context.arc(x, y, this._radius, 0, tau);

          break;
        }
    }
  },
  result: noop
};

var lengthSum = new Adder(),
    lengthRing,
    x00,
    y00,
    x0,
    y0;
var lengthStream = {
  point: noop,
  lineStart: function lineStart() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function lineEnd() {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = noop;
  },
  polygonStart: function polygonStart() {
    lengthRing = true;
  },
  polygonEnd: function polygonEnd() {
    lengthRing = null;
  },
  result: function result() {
    var length = +lengthSum;
    lengthSum = new Adder();
    return length;
  }
};

function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add(sqrt(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

var pathMeasure = lengthStream;

function PathString() {
  this._string = [];
}
PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function pointRadius(_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function polygonStart() {
    this._line = 0;
  },
  polygonEnd: function polygonEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function point(x, y) {
    switch (this._point) {
      case 0:
        {
          this._string.push("M", x, ",", y);

          this._point = 1;
          break;
        }

      case 1:
        {
          this._string.push("L", x, ",", y);

          break;
        }

      default:
        {
          if (this._circle == null) this._circle = circle(this._radius);

          this._string.push("M", x, ",", y, this._circle);

          break;
        }
    }
  },
  result: function result() {
    if (this._string.length) {
      var result = this._string.join("");

      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};

function circle(radius) {
  return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
}

function index (projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      geoStream(object, projectionStream(contextStream));
    }

    return contextStream.result();
  }

  path.area = function (object) {
    geoStream(object, projectionStream(pathArea));
    return pathArea.result();
  };

  path.measure = function (object) {
    geoStream(object, projectionStream(pathMeasure));
    return pathMeasure.result();
  };

  path.bounds = function (object) {
    geoStream(object, projectionStream(boundsStream$1));
    return boundsStream$1.result();
  };

  path.centroid = function (object) {
    geoStream(object, projectionStream(pathCentroid));
    return pathCentroid.result();
  };

  path.projection = function (_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, identity$2) : (projection = _).stream, path) : projection;
  };

  path.context = function (_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new PathString()) : new PathContext(context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function (_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
}

function transformer$1(methods) {
  return function (stream) {
    var s = new TransformStream();

    for (var key in methods) {
      s[key] = methods[key];
    }

    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function point(x, y) {
    this.stream.point(x, y);
  },
  sphere: function sphere() {
    this.stream.sphere();
  },
  lineStart: function lineStart() {
    this.stream.lineStart();
  },
  lineEnd: function lineEnd() {
    this.stream.lineEnd();
  },
  polygonStart: function polygonStart() {
    this.stream.polygonStart();
  },
  polygonEnd: function polygonEnd() {
    this.stream.polygonEnd();
  }
};

function fit(projection, fitBounds, object) {
  var clip = projection.clipExtent && projection.clipExtent();
  projection.scale(150).translate([0, 0]);
  if (clip != null) projection.clipExtent(null);
  geoStream(object, projection.stream(boundsStream$1));
  fitBounds(boundsStream$1.result());
  if (clip != null) projection.clipExtent(clip);
  return projection;
}

function fitExtent(projection, extent, object) {
  return fit(projection, function (b) {
    var w = extent[1][0] - extent[0][0],
        h = extent[1][1] - extent[0][1],
        k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
        x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
        y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}
function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}
function fitWidth(projection, width, object) {
  return fit(projection, function (b) {
    var w = +width,
        k = w / (b[1][0] - b[0][0]),
        x = (w - k * (b[1][0] + b[0][0])) / 2,
        y = -k * b[0][1];
    projection.scale(150 * k).translate([x, y]);
  }, object);
}
function fitHeight(projection, height, object) {
  return fit(projection, function (b) {
    var h = +height,
        k = h / (b[1][1] - b[0][1]),
        x = -k * b[0][0],
        y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function identity$1 () {
  var k = 1,
      tx = 0,
      ty = 0,
      sx = 1,
      sy = 1,
      // scale, translate and reflect
  alpha = 0,
      ca,
      sa,
      // angle
  x0 = null,
      y0,
      x1,
      y1,
      // clip extent
  kx = 1,
      ky = 1,
      transform = transformer$1({
    point: function point(x, y) {
      var p = projection([x, y]);
      this.stream.point(p[0], p[1]);
    }
  }),
      postclip = identity$2,
      cache,
      cacheStream;

  function reset() {
    kx = k * sx;
    ky = k * sy;
    cache = cacheStream = null;
    return projection;
  }

  function projection(p) {
    var x = p[0] * kx,
        y = p[1] * ky;

    if (alpha) {
      var t = y * ca - x * sa;
      x = x * ca + y * sa;
      y = t;
    }

    return [x + tx, y + ty];
  }

  projection.invert = function (p) {
    var x = p[0] - tx,
        y = p[1] - ty;

    if (alpha) {
      var t = y * ca + x * sa;
      x = x * ca - y * sa;
      y = t;
    }

    return [x / kx, y / ky];
  };

  projection.stream = function (stream) {
    return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
  };

  projection.postclip = function (_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };

  projection.clipExtent = function (_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$2) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function (_) {
    return arguments.length ? (k = +_, reset()) : k;
  };

  projection.translate = function (_) {
    return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [tx, ty];
  };

  projection.angle = function (_) {
    return arguments.length ? (alpha = _ % 360 * radians, sa = sin(alpha), ca = cos(alpha), reset()) : alpha * degrees;
  };

  projection.reflectX = function (_) {
    return arguments.length ? (sx = _ ? -1 : 1, reset()) : sx < 0;
  };

  projection.reflectY = function (_) {
    return arguments.length ? (sy = _ ? -1 : 1, reset()) : sy < 0;
  };

  projection.fitExtent = function (extent, object) {
    return fitExtent(projection, extent, object);
  };

  projection.fitSize = function (size, object) {
    return fitSize(projection, size, object);
  };

  projection.fitWidth = function (width, object) {
    return fitWidth(projection, width, object);
  };

  projection.fitHeight = function (height, object) {
    return fitHeight(projection, height, object);
  };

  return projection;
}

function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;

    case 1:
      this.range(domain);
      break;

    default:
      this.range(range).domain(domain);
      break;
  }

  return this;
}

function constants(x) {
  return function () {
    return x;
  };
}

function number(x) {
  return +x;
}

var unit = [0, 1];
function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= a = +a) ? function (x) {
    return (x - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function (x) {
    return Math.max(a, Math.min(b, x));
  };
} // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].


function bimap(domain, range, interpolate) {
  var d0 = domain[0],
      d1 = domain[1],
      r0 = range[0],
      r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function (x) {
    return r0(d0(x));
  };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1; // Reverse descending domains.

  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function (x) {
    var i = bisect(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit,
      range = unit,
      interpolate = interpolate$1,
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function (y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };

  scale.domain = function (_) {
    return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
  };

  scale.range = function (_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function (_) {
    return range = Array.from(_), interpolate = interpolateRound, rescale();
  };

  scale.clamp = function (_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };

  scale.interpolate = function (_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function (_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function (t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity, identity);
}

function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);

  switch (specifier.type) {
    case "s":
      {
        var value = Math.max(Math.abs(start), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
        return formatPrefix(specifier, value);
      }

    case "":
    case "e":
    case "g":
    case "p":
    case "r":
      {
        if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
        break;
      }

    case "f":
    case "%":
      {
        if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
  }

  return format(specifier);
}

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function (count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function (count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function (count) {
    if (count == null) count = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);

      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }

      prestep = step;
    }

    return scale;
  };

  return scale;
}
function linear() {
  var scale = continuous();

  scale.copy = function () {
    return copy(scale, linear());
  };

  initRange.apply(scale, arguments);
  return linearish(scale);
}

function colors (specifier) {
  var n = specifier.length / 6 | 0,
      colors = new Array(n),
      i = 0;

  while (i < n) {
    colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  }

  return colors;
}

var Set1 = colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

function constant (x) {
  return function constant() {
    return x;
  };
}

function array (x) {
  return _typeof(x) === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
  : Array.from(x); // Map, Set, iterable, string, or anything else
}

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function areaStart() {
    this._line = 0;
  },
  areaEnd: function areaEnd() {
    this._line = NaN;
  },
  lineStart: function lineStart() {
    this._point = 0;
  },
  lineEnd: function lineEnd() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function point(x, y) {
    x = +x, y = +y;

    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;

      case 1:
        this._point = 2;
      // falls through

      default:
        this._context.lineTo(x, y);

        break;
    }
  }
};
function curveLinear (context) {
  return new Linear(context);
}

function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

function line (x$1, y$1) {
  var defined = constant(true),
      context = null,
      curve = curveLinear,
      output = null;
  x$1 = typeof x$1 === "function" ? x$1 : x$1 === undefined ? x : constant(x$1);
  y$1 = typeof y$1 === "function" ? y$1 : y$1 === undefined ? y : constant(y$1);

  function line(data) {
    var i,
        n = (data = array(data)).length,
        d,
        defined0 = false,
        buffer;
    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();else output.lineEnd();
      }

      if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function (_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), line) : x$1;
  };

  line.y = function (_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), line) : y$1;
  };

  line.defined = function (_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
  };

  line.curve = function (_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function (_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

var _templateObject$m, _templateObject2$k, _templateObject3$a, _templateObject4$a, _templateObject5$a, _templateObject6$a, _templateObject7$a, _templateObject8$8, _templateObject9$8;
/*
  DecidableElement Base Class - Not intended for instantiation!
  <decidable-element>
*/

var DecidableElement = /*#__PURE__*/function (_LitElement) {
  _inherits(DecidableElement, _LitElement);

  var _super = _createSuper(DecidableElement);

  function DecidableElement() {
    var _this;

    _classCallCheck(this, DecidableElement);

    _this = _super.call(this);
    _this.uniqueId = "decidable-".concat(DecidableElement.uniqueId);
    return _this;
  }

  _createClass(DecidableElement, [{
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
      _get(_getPrototypeOf(DecidableElement.prototype), "firstUpdated", this).call(this, changedProperties); // Use focus highlighting if keyboard is used at all


      select(this.renderRoot.host).classed('keyboard', true).on('mousemove.keyboard touchstart.keyboard', function (event) {
        var element = event.currentTarget;
        select(element.renderRoot.host).classed('keyboard', false).on('mousemove.keyboard touchstart.keyboard', null);
      }).on('keydown.keyboard', function (event) {
        var element = event.currentTarget;
        select(element.renderRoot.host).classed('keyboard', true).on('keydown.keyboard mousemove.keyboard touchstart.keyboard', null);
      });
    }
  }], [{
    key: "uniqueId",
    get: // HACK: Create a unique ID for each DecidableElement
    // This is needed because Edge/IE11 don't have real Shadow DOM, so IDs leak
    // out of elements and collide if there is more than one of an element on a
    // page. Known issue for checkbox/switches and the id/for pattern on <input>
    // and <label>
    function get() {
      DecidableElement.ID += 1;
      return DecidableElement.ID;
    }
  }, {
    key: "greys",
    get: function get() {
      var grey = '#999999';
      var greys = {};
      greys.white = '#ffffff';
      greys.light75 = interpolateRgb(grey, '#ffffff')(0.75);
      greys.light50 = interpolateRgb(grey, '#ffffff')(0.5);
      greys.light25 = interpolateRgb(grey, '#ffffff')(0.25);
      greys.grey = grey;
      greys.dark25 = interpolateRgb(grey, '#000000')(0.25);
      greys.dark50 = interpolateRgb(grey, '#000000')(0.5);
      greys.dark75 = interpolateRgb(grey, '#000000')(0.75);
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
    key: "svgFilters",
    get: function get() {
      var shadows = DecidableElement.shadows; // eslint-disable-line prefer-destructuring

      var erodeRadius = 1;
      var filters = shadows.elevations.map(function (z) {
        // <filter id=${`shadow-${z}`} x="-200%" y="-200%" width="500%" height="500%">
        // Firefox doesn't support viewport units, but Chrome doesn't handle percentages correctly
        return y$1(_templateObject$m || (_templateObject$m = _taggedTemplateLiteral(["\n        <filter id=", " filterUnits=\"userSpaceOnUse\" x=\"-50vw\" y=\"-50vh\" width=\"200vw\" height=\"200vh\">\n          <feComponentTransfer in=\"SourceAlpha\" result=\"solid\">\n            <feFuncA  type=\"table\" tableValues=\"0 1 1\"/>\n          </feComponentTransfer>\n          <feOffset in=\"solid\" result=\"offU\" dx=", " dy=", " />\n          <feOffset in=\"solid\" result=\"offP\" dx=", " dy=", " />\n          <feOffset in=\"solid\" result=\"offA\" dx=", " dy=", " />\n          ", "\n          ", "\n          ", "\n          <feGaussianBlur in=", " result=\"blurU\" stdDeviation=", " />\n          <feGaussianBlur in=", " result=\"blurP\" stdDeviation=", " />\n          <feGaussianBlur in=", " result=\"blurA\" stdDeviation=", " />\n          <feFlood in=\"SourceGraphic\" result=\"opU\" flood-color=", " flood-opacity=", " />\n          <feFlood in=\"SourceGraphic\" result=\"opP\" flood-color=", " flood-opacity=", " />\n          <feFlood in=\"SourceGraphic\" result=\"opA\" flood-color=", " flood-opacity=", " />\n          <feComposite in=\"opU\" in2=\"blurU\" result=\"shU\" operator=\"in\" />\n          <feComposite in=\"opP\" in2=\"blurP\" result=\"shP\" operator=\"in\" />\n          <feComposite in=\"opA\" in2=\"blurA\" result=\"shA\" operator=\"in\" />\n          <!-- HACK Edge: Using a dynamic value for erode radius stops Edge from corrupting the \"radius\" value! -->\n          <feMorphology in=\"solid\" result=\"smaller\" operator=\"erode\" radius=", " />\n          <feComposite in=\"shU\" in2=\"smaller\" result=\"finalU\" operator=\"out\" />\n          <feComposite in=\"shP\" in2=\"smaller\" result=\"finalP\" operator=\"out\" />\n          <feComposite in=\"shA\" in2=\"smaller\" result=\"finalA\" operator=\"out\" />\n          <feMerge>\n            <feMergeNode in=\"finalU\" />\n            <feMergeNode in=\"finalP\" />\n            <feMergeNode in=\"finalA\" />\n            <feMergeNode in=\"SourceGraphic\" />\n          </feMerge>\n        </filter>"])), "shadow-".concat(z), shadows.mapUmbra[z].y / 2, shadows.mapUmbra[z].y, shadows.mapPenumbra[z].y / 2, shadows.mapPenumbra[z].y, shadows.mapAmbient[z].y / 2, shadows.mapAmbient[z].y, shadows.mapUmbra[z].s === 0 ? y$1(_templateObject2$k || (_templateObject2$k = _taggedTemplateLiteral([""]))) : y$1(_templateObject3$a || (_templateObject3$a = _taggedTemplateLiteral(["<feMorphology in=\"offU\" result=\"spreadU\" operator=", " radius=", " />"])), shadows.mapUmbra[z].s > 0 ? 'dilate' : 'erode', Math.abs(shadows.mapUmbra[z].s)), shadows.mapPenumbra[z].s === 0 ? y$1(_templateObject4$a || (_templateObject4$a = _taggedTemplateLiteral([""]))) : y$1(_templateObject5$a || (_templateObject5$a = _taggedTemplateLiteral(["<feMorphology in=\"offP\" result=\"spreadP\" operator=", " radius=", " />"])), shadows.mapPenumbra[z].s > 0 ? 'dilate' : 'erode', Math.abs(shadows.mapPenumbra[z].s)), shadows.mapAmbient[z].s === 0 ? y$1(_templateObject6$a || (_templateObject6$a = _taggedTemplateLiteral([""]))) : y$1(_templateObject7$a || (_templateObject7$a = _taggedTemplateLiteral(["<feMorphology in=\"offA\" result=\"spreadA\" operator=", " radius=", " />"])), shadows.mapAmbient[z].s > 0 ? 'dilate' : 'erode', Math.abs(shadows.mapAmbient[z].s)), shadows.mapUmbra[z].s === 0 ? 'offU' : 'spreadU', shadows.mapUmbra[z].b / 2, shadows.mapPenumbra[z].s === 0 ? 'offP' : 'spreadP', shadows.mapPenumbra[z].b / 2, shadows.mapAmbient[z].s === 0 ? 'offA' : 'spreadA', shadows.mapAmbient[z].b / 2, shadows.baselineColor, shadows.opacityUmbra + shadows.opacityBoost, shadows.baselineColor, shadows.opacityPenumbra + shadows.opacityBoost, shadows.baselineColor, shadows.opacityAmbient + shadows.opacityBoost, erodeRadius);
      });
      return y$1(_templateObject8$8 || (_templateObject8$8 = _taggedTemplateLiteral(["\n      <svg class=\"defs\">\n        <defs>\n          ", "\n        </defs>\n      </svg>\n    "])), filters);
    }
  }, {
    key: "styles",
    get: function get() {
      return r$2(_templateObject9$8 || (_templateObject9$8 = _taggedTemplateLiteral(["\n      :host {\n        ---shadow-0: var(--shadow-0, ", ");\n        ---shadow-2: var(--shadow-2, ", ");\n        ---shadow-4: var(--shadow-4, ", ");\n        ---shadow-8: var(--shadow-8, ", ");\n\n        ---color-background: var(--color-background, ", ");\n        ---color-border: var(--color-border, ", ");\n        ---color-text: var(--color-text, ", ");\n        ---color-text-inverse: var(--color-text-inverse, ", ");\n        ---color-link: var(--color-link, ", ");\n        ---color-element-background: var(--color-element-background, ", ");\n        ---color-element-disabled: var(--color-element-disabled, ", ");\n        ---color-element-enabled: var(--color-element-enabled, ", ");\n        ---color-element-selected: var(--color-element-selected, ", ");\n        ---color-element-border: var(--color-element-border, ", ");\n        ---color-element-emphasis: var(--color-element-emphasis, ", ");\n\n        ---font-family-base: var(--font-family-base, \"Source Sans\", sans-serif);\n        ---font-family-math: var(--font-family-math, \"Source Serif\", serif);\n\n        ---transition-duration: var(--transition-duration, 500ms);\n\n        font-family: var(---font-family-base);\n      }\n\n      :host,\n      :host *,\n      :host *::before,\n      :host *::after {\n        box-sizing: border-box;\n      }\n\n      .math-greek {\n        font-family: var(---font-family-math);\n        font-style: normal;\n      }\n\n      .math-num {\n        font-family: var(---font-family-base);\n        font-style: normal;\n      }\n\n      .math-var {\n        font-family: var(---font-family-math);\n        font-style: italic;\n      }\n\n      .defs {\n        display: block;\n\n        width: 0;\n        height: 0;\n      }\n    "])), o$3(this.cssBoxShadow(0)), o$3(this.cssBoxShadow(2)), o$3(this.cssBoxShadow(4)), o$3(this.cssBoxShadow(8)), o$3(this.greys.white), o$3(this.greys.light75), o$3(this.greys.dark75), o$3(this.greys.white), o$3(this.greys.dark25), o$3(this.greys.light75), o$3(this.greys.light50), o$3(this.greys.grey), o$3(this.greys.dark25), o$3(this.greys.dark50), o$3(this.greys.dark75));
    }
  }]);

  return DecidableElement;
}(s); // Static property of DecidableElement!
DecidableElement.ID = 0;

var _templateObject$l, _templateObject2$j;

var DecidableButton = /*#__PURE__*/function (_DecidableElement) {
  _inherits(DecidableButton, _DecidableElement);

  var _super = _createSuper(DecidableButton);

  function DecidableButton() {
    var _this;

    _classCallCheck(this, DecidableButton);

    _this = _super.call(this); // Attributes

    _this.disabled = false;
    return _this;
  }

  _createClass(DecidableButton, [{
    key: "render",
    value: function render() {
      return $(_templateObject$l || (_templateObject$l = _taggedTemplateLiteral(["\n      <button ?disabled=", ">\n        <slot></slot>\n      </button>\n    "])), this.disabled);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidableButton), "styles", this), r$2(_templateObject2$j || (_templateObject2$j = _taggedTemplateLiteral(["\n        :host {\n          margin: 0.25rem;\n        }\n\n        button {\n          width: 100%;\n          height: 100%;\n          padding: 0.375rem 0.75rem;\n\n          font-family: var(---font-family-base);\n          font-size: 1.125rem;\n          line-height: 1.5;\n          color: var(---color-text-inverse);\n\n          border: 0;\n          border-radius: 0.25rem;\n          outline: none;\n        }\n\n        button:disabled {\n          background-color: var(--decidable-button-background-color, var(---color-element-disabled));\n          outline: none;\n          box-shadow: none;\n        }\n\n        button:enabled {\n          cursor: pointer;\n\n          background-color: var(--decidable-button-background-color, var(---color-element-enabled));\n          outline: none;\n          box-shadow: var(---shadow-2);\n        }\n\n        button:enabled:hover {\n          outline: none;\n          box-shadow: var(---shadow-4);\n        }\n\n        button:enabled:active {\n          outline: none;\n          box-shadow: var(---shadow-8);\n        }\n\n        :host(.keyboard) button:enabled:focus {\n          outline: none;\n          box-shadow: var(---shadow-4);\n        }\n\n        :host(.keyboard) button:enabled:focus:active {\n          outline: none;\n          box-shadow: var(---shadow-8);\n        }\n      "])))];
    }
  }]);

  return DecidableButton;
}(DecidableElement);
customElements.define('decidable-button', DecidableButton);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var l = function l(_l) {
  return null != _l ? _l : w;
};

var _templateObject$k, _templateObject2$i;

var DecidableSlider = /*#__PURE__*/function (_DecidableElement) {
  _inherits(DecidableSlider, _DecidableElement);

  var _super = _createSuper(DecidableSlider);

  function DecidableSlider() {
    var _this;

    _classCallCheck(this, DecidableSlider);

    _this = _super.call(this); // Attributes

    _this.disabled = false;
    _this.max = undefined;
    _this.min = undefined;
    _this.step = undefined;
    _this.value = undefined;
    return _this;
  }

  _createClass(DecidableSlider, [{
    key: "changed",
    value: function changed(event) {
      this.value = event.target.value;
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          value: this.value
        },
        bubbles: true
      }));
    }
  }, {
    key: "inputted",
    value: function inputted(event) {
      this.value = event.target.value;
    }
  }, {
    key: "render",
    value: function render() {
      return $(_templateObject$k || (_templateObject$k = _taggedTemplateLiteral(["\n      <label for=", ">\n        <slot></slot>\n      </label>\n      <div class=\"range\">\n        <input type=\"range\" id=", " min=", " max=", " step=", " .value=", " @change=", " @input=", ">\n      </div>\n      <decidable-spinner min=", " max=", " step=", " .value=", " @input=", "></decidable-spinner>\n    "])), "".concat(this.uniqueId, "-slider"), "".concat(this.uniqueId, "-slider"), l(this.min), l(this.max), l(this.step), this.value, this.changed.bind(this), this.inputted.bind(this), l(this.min), l(this.max), l(this.step), this.value, this.inputted.bind(this));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        },
        max: {
          attribute: 'max',
          type: Number,
          reflect: true
        },
        min: {
          attribute: 'min',
          type: Number,
          reflect: true
        },
        step: {
          attribute: 'step',
          type: Number,
          reflect: true
        },
        value: {
          attribute: 'value',
          type: Number,
          reflect: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidableSlider), "styles", this), r$2(_templateObject2$i || (_templateObject2$i = _taggedTemplateLiteral(["\n        :host {\n          ---shadow-2-rotate: var(--shadow-2-rotate, ", ");\n          ---shadow-4-rotate: var(--shadow-4-rotate, ", ");\n          ---shadow-8-rotate: var(--shadow-8-rotate, ", ");\n\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: center;\n          justify-content: center;\n        }\n\n        label {\n          margin: 0.25rem 0.25rem 0;\n        }\n\n        .range {\n          display: inline-block;\n\n          width: 3.5rem;\n          height: 4.75rem;\n          margin: 0 0.25rem 0.25rem;\n        }\n\n        decidable-spinner {\n          --decidable-spinner-input-width: 3.5rem;\n\n          margin: 0 0.25rem 0.25rem;\n        }\n\n        /* Adapted from http://danielstern.ca/range.css/#/ */\n        /* Overall */\n        input[type=range] {\n          width: 4.75rem;\n          height: 3.5rem;\n          padding: 0;\n          margin: 0;\n\n          background-color: unset;\n\n          transform: rotate(-90deg);\n          transform-origin: 2.375rem 2.375rem;\n\n          /* stylelint-disable-next-line property-no-vendor-prefix */\n          -webkit-appearance: none;\n        }\n\n        input[type=range]:enabled {\n          cursor: ns-resize;\n        }\n\n        input[type=range]:focus {\n          outline: none;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-ms-tooltip {\n          display: none;\n        }\n\n        /* Track */\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-webkit-slider-runnable-track {\n          width: 100%;\n          height: 4px;\n\n          background: var(---color-element-disabled);\n          border: 0;\n          border-radius: 2px;\n          box-shadow: none;\n        }\n\n        input[type=range]:focus::-webkit-slider-runnable-track {\n          background: var(---color-element-disabled);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-moz-range-track {\n          width: 100%;\n          height: 4px;\n\n          background: var(---color-element-disabled);\n          border: 0;\n          border-radius: 2px;\n          box-shadow: none;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-ms-track {\n          width: 100%;\n          height: 4px;\n\n          color: transparent;\n\n          background: transparent;\n          border-color: transparent;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-ms-fill-lower {\n          background: #cccccc;\n          /* background: var(---color-element-disabled); */\n          border: 0;\n          border-radius: 2px;\n          box-shadow: none;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-ms-fill-upper {\n          background: #cccccc;\n          /* background: var(---color-element-disabled); */\n          border: 0;\n          border-radius: 2px;\n          box-shadow: none;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:focus::-ms-fill-lower {\n          background: var(---color-element-disabled);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:focus::-ms-fill-upper {\n          background: var(---color-element-disabled);\n        }\n\n        /* Thumb */\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-webkit-slider-thumb {\n          width: 10px;\n          height: 20px;\n          margin-top: -8px;\n\n          border: 0;\n          border-radius: 4px;\n\n          /* stylelint-disable-next-line property-no-vendor-prefix */\n          -webkit-appearance: none;\n        }\n\n        input[type=range]:disabled::-webkit-slider-thumb {\n          background: var(---color-element-disabled);\n          box-shadow: none;\n        }\n\n        input[type=range]:enabled::-webkit-slider-thumb {\n          background: var(---color-element-enabled);\n          box-shadow: var(---shadow-2-rotate);\n        }\n\n        input[type=range]:enabled:hover::-webkit-slider-thumb {\n          box-shadow: var(---shadow-4-rotate);\n        }\n\n        input[type=range]:enabled:active::-webkit-slider-thumb {\n          box-shadow: var(---shadow-8-rotate);\n        }\n\n        :host(.keyboard) input[type=range]:enabled:focus::-webkit-slider-thumb {\n          box-shadow: var(---shadow-4-rotate);\n        }\n\n        :host(.keyboard) input[type=range]:focus:active::-webkit-slider-thumb {\n          box-shadow: var(---shadow-8-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-moz-range-thumb {\n          width: 10px;\n          height: 20px;\n\n          border: 0;\n          border-radius: 4px;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:disabled::-moz-range-thumb {\n          background: var(---color-element-disabled);\n          box-shadow: none;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:enabled::-moz-range-thumb {\n          background: var(---color-element-enabled);\n          box-shadow: var(---shadow-2-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:enabled:hover::-moz-range-thumb {\n          box-shadow: var(---shadow-4-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:enabled:active::-moz-range-thumb {\n          box-shadow: var(---shadow-8-rotate);\n        }\n\n        :host(.keyboard) input[type=range]:enabled:focus::-moz-range-thumb {\n          box-shadow: var(---shadow-4-rotate);\n        }\n\n        :host(.keyboard) input[type=range]:enabled:focus:active::-moz-range-thumb {\n          box-shadow: var(---shadow-8-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]::-ms-thumb {\n          width: 10px;\n          height: 20px;\n          margin-top: 0;\n\n          background: #999999;\n          /* background: var(---color-element-enabled); */\n          border: 0;\n          border-radius: 4px;\n          box-shadow: var(---shadow-2-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:disabled::-ms-thumb {\n          background: var(---color-element-disabled);\n          box-shadow: none;\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:enabled::-ms-thumb {\n          background: var(---color-element-enabled);\n          box-shadow: var(---shadow-2-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:enabled:hover::-ms-thumb {\n          box-shadow: var(---shadow-4-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        input[type=range]:enabled:active::-ms-thumb {\n          box-shadow: var(---shadow-8-rotate);\n        }\n\n        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n        :host(.keyboard) input[type=range]:enabled:focus::-ms-thumb {\n          box-shadow: var(---shadow-4-rotate);\n        }\n\n        :host(.keyboard) input[type=range]:enabled:focus:active::-ms-thumb {\n          box-shadow: var(---shadow-8-rotate);\n        }\n      "])), o$3(this.cssBoxShadow(2, true, false)), o$3(this.cssBoxShadow(4, true, false)), o$3(this.cssBoxShadow(8, true, false)))];
    }
  }]);

  return DecidableSlider;
}(DecidableElement);
customElements.define('decidable-slider', DecidableSlider);

var _templateObject$j, _templateObject2$h;

var DecidableSpinner = /*#__PURE__*/function (_DecidableElement) {
  _inherits(DecidableSpinner, _DecidableElement);

  var _super = _createSuper(DecidableSpinner);

  function DecidableSpinner() {
    var _this;

    _classCallCheck(this, DecidableSpinner);

    _this = _super.call(this); // Attributes

    _this.disabled = false;
    _this.max = undefined;
    _this.min = undefined;
    _this.step = undefined;
    _this.value = undefined;
    return _this;
  }

  _createClass(DecidableSpinner, [{
    key: "inputted",
    value: function inputted(event) {
      this.value = event.target.value;
    }
  }, {
    key: "render",
    value: function render() {
      return $(_templateObject$j || (_templateObject$j = _taggedTemplateLiteral(["\n      <label>\n        <slot></slot>\n        <input ?disabled=", " type=\"number\" min=", " max=", " step=", " .value=", " @input=", ">\n      </label>\n    "])), this.disabled, l(this.min), l(this.max), l(this.step), this.value, this.inputted.bind(this));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        },
        max: {
          attribute: 'max',
          type: Number,
          reflect: true
        },
        min: {
          attribute: 'min',
          type: Number,
          reflect: true
        },
        step: {
          attribute: 'step',
          type: Number,
          reflect: true
        },
        value: {
          attribute: 'value',
          type: Number,
          reflect: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidableSpinner), "styles", this), r$2(_templateObject2$h || (_templateObject2$h = _taggedTemplateLiteral(["\n        :host {\n          ---decidable-spinner-font-size: var(--decidable-spinner-font-size, 1.125rem);\n          ---decidable-spinner-input-width: var(--decidable-spinner-input-width, 4rem);\n          ---decidable-spinner-prefix: var(--decidable-spinner-prefix, \"\");\n\n          display: block;\n        }\n\n        label {\n          position: relative;\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: center;\n\n          margin: 0;\n\n          font-size: 0.75rem;\n        }\n\n        label::before {\n          position: absolute;\n          bottom: 1px;\n          left: calc(50% - var(---decidable-spinner-input-width) / 2 + 0.25rem);\n\n          font-size: var(---decidable-spinner-font-size);\n          line-height: normal;\n\n          content: var(---decidable-spinner-prefix);\n        }\n\n        input[type=number] {\n          width: var(---decidable-spinner-input-width);\n\n          font-family: var(---font-family-base);\n          font-size: var(---decidable-spinner-font-size);\n          color: inherit;\n          text-align: right;\n\n          background: none;\n          border: 0;\n          border-radius: 0;\n          outline: none;\n          box-shadow: var(---shadow-2);\n\n          -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */\n        }\n\n        input[type=number]:hover {\n          box-shadow: var(---shadow-4);\n        }\n\n        input[type=number]:focus,\n        input[type=number]:active {\n          box-shadow: var(---shadow-8);\n        }\n\n        input[type=number]:disabled {\n          color: var(---color-text);\n\n          border: 0;\n          box-shadow: none;\n\n          /* HACK: Use correct text color in Safari */\n          -webkit-opacity: 1;\n          /* HACK: Hide spinners in disabled input for Firefox and Safari */\n          -moz-appearance: textfield; /* stylelint-disable-line property-no-vendor-prefix */\n          /* HACK: Use correct text color in Safari */\n          -webkit-text-fill-color: var(---color-text);\n        }\n\n        /* HACK: Hide spinners in disabled input for Firefox and Safari */\n        input[type=number]:disabled::-webkit-outer-spin-button,\n        input[type=number]:disabled::-webkit-inner-spin-button {\n          margin: 0;\n          -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */\n        }\n      "])))];
    }
  }]);

  return DecidableSpinner;
}(DecidableElement);
customElements.define('decidable-spinner', DecidableSpinner);

var _templateObject$i, _templateObject2$g;

var DecidableSwitch = /*#__PURE__*/function (_DecidableElement) {
  _inherits(DecidableSwitch, _DecidableElement);

  var _super = _createSuper(DecidableSwitch);

  function DecidableSwitch() {
    var _this;

    _classCallCheck(this, DecidableSwitch);

    _this = _super.call(this); // Attributes

    _this.checked = false;
    _this.disabled = false;
    return _this;
  }

  _createClass(DecidableSwitch, [{
    key: "changed",
    value: function changed(event) {
      this.checked = event.target.checked;
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          checked: this.checked
        },
        bubbles: true
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return $(_templateObject$i || (_templateObject$i = _taggedTemplateLiteral(["\n      <input type=\"checkbox\" id=", " ?checked=", " ?disabled=", " @change=", ">\n      <label for=", ">\n        <slot name=\"off-label\"></slot>\n      </label>\n      <label for=", ">\n        <slot></slot>\n      </label>\n    "])), "".concat(this.uniqueId, "-checkbox"), this.checked, this.disabled, this.changed.bind(this), "".concat(this.uniqueId, "-checkbox"), "".concat(this.uniqueId, "-checkbox"));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        checked: {
          attribute: 'checked',
          type: Boolean,
          reflect: true
        },
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidableSwitch), "styles", this), r$2(_templateObject2$g || (_templateObject2$g = _taggedTemplateLiteral(["\n        :host {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: center;\n          justify-content: center;\n        }\n\n        /* Adapted from https://codepen.io/guuslieben/pen/YyPRVP */\n        input[type=checkbox] {\n          /* visuallyhidden: https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/css.md */\n          position: absolute;\n\n          width: 1px;\n          height: 1px;\n          padding: 0;\n          margin: -1px;\n          overflow: hidden;\n          clip: rect(0 0 0 0);\n\n          white-space: nowrap;\n\n          border: 0;\n          clip-path: inset(100%); /* May cause a performance issue: https://github.com/h5bp/html5-boilerplate/issues/2021 */\n        }\n\n        input[type=checkbox] + label {\n          order: 1;\n\n          margin: 0 0.25rem 0.25rem;\n\n          font-weight: 400;\n        }\n\n        input[type=checkbox] + label + label {\n          position: relative;\n\n          min-width: 24px;\n          padding: 0 0 36px;\n          margin: 0.25rem 0.25rem 0;\n\n          font-weight: 400;\n\n          outline: none;\n        }\n\n        input[type=checkbox] + label + label::before,\n        input[type=checkbox] + label + label::after {\n          position: absolute;\n\n          left: 50%;\n\n          margin: 0;\n\n          content: \"\";\n\n          outline: 0;\n\n          transition: all var(---transition-duration) ease;\n          transform: translate(-50%, 0);\n        }\n\n        input[type=checkbox] + label + label::before {\n          bottom: 1px;\n\n          width: 8px;\n          height: 34px;\n\n          background-color: var(---color-element-disabled);\n          border-radius: 4px;\n        }\n\n        input[type=checkbox] + label + label::after {\n          bottom: 0;\n\n          width: 18px;\n          height: 18px;\n\n          background-color: var(---color-element-enabled);\n          border-radius: 50%;\n          box-shadow: var(---shadow-2);\n        }\n\n        input[type=checkbox]:checked + label + label::after {\n          transform: translate(-50%, -100%);\n        }\n\n        input[type=checkbox]:disabled + label + label::after {\n          background-color: var(---color-element-disabled);\n          box-shadow: none;\n        }\n\n        input[type=checkbox]:enabled + label,\n        input[type=checkbox]:enabled + label + label {\n          cursor: pointer;\n        }\n\n        input[type=checkbox]:enabled + label:hover + label::after,\n        input[type=checkbox]:enabled + label + label:hover::after {\n          box-shadow: var(---shadow-4);\n        }\n\n        input[type=checkbox]:enabled + label:active + label::after,\n        input[type=checkbox]:enabled + label + label:active::after {\n          box-shadow: var(---shadow-8);\n        }\n\n        /* stylelint-disable-next-line selector-max-compound-selectors */\n        :host(.keyboard) input[type=checkbox]:enabled:focus + label + label::after {\n          box-shadow: var(---shadow-4);\n        }\n\n        /* stylelint-disable-next-line selector-max-compound-selectors */\n        :host(.keyboard) input[type=checkbox]:enabled:focus + label + label:active::after,\n        :host(.keyboard) input[type=checkbox]:enabled:focus:active + label + label::after {\n          box-shadow: var(---shadow-8);\n        }\n      "])))];
    }
  }]);

  return DecidableSwitch;
}(DecidableElement);
customElements.define('decidable-switch', DecidableSwitch);

var _templateObject$h, _templateObject2$f;

var DecidableToggle = /*#__PURE__*/function (_DecidableElement) {
  _inherits(DecidableToggle, _DecidableElement);

  var _super = _createSuper(DecidableToggle);

  function DecidableToggle() {
    var _this;

    _classCallCheck(this, DecidableToggle);

    _this = _super.call(this); // Attributes

    _this.disabled = false;
    return _this;
  }

  _createClass(DecidableToggle, [{
    key: "render",
    value: function render() {
      return $(_templateObject$h || (_templateObject$h = _taggedTemplateLiteral(["\n      <fieldset ?disabled=", ">\n        <legend><slot name=\"label\"></slot></legend>\n        <slot></slot>\n      </fieldset>\n    "])), this.disabled);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidableToggle), "styles", this), r$2(_templateObject2$f || (_templateObject2$f = _taggedTemplateLiteral(["\n        fieldset {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: stretch;\n          justify-content: center;\n\n          margin: 0.25rem;\n\n          border: 0;\n        }\n\n        legend {\n          text-align: center;\n        }\n      "])))];
    }
  }]);

  return DecidableToggle;
}(DecidableElement);
customElements.define('decidable-toggle', DecidableToggle);

var _templateObject$g, _templateObject2$e;

var DecidableToggleOption = /*#__PURE__*/function (_DecidableElement) {
  _inherits(DecidableToggleOption, _DecidableElement);

  var _super = _createSuper(DecidableToggleOption);

  function DecidableToggleOption() {
    var _this;

    _classCallCheck(this, DecidableToggleOption);

    _this = _super.call(this); // Attributes

    _this.checked = false;
    _this.disabled = false;
    _this.name = undefined;
    _this.value = undefined;
    return _this;
  }

  _createClass(DecidableToggleOption, [{
    key: "changed",
    value: function changed(event) {
      this.checked = event.target.checked;
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          checked: this.checked,
          value: this.value
        },
        bubbles: true
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return $(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(["\n      <input type=\"radio\" id=", " name=", " value=", " .checked=", " @change=", ">\n      <label for=", ">\n        <slot></slot>\n      </label>\n    "])), "".concat(this.uniqueId, "-radio"), this.name, this.value, this.checked, this.changed.bind(this), "".concat(this.uniqueId, "-radio"));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        checked: {
          attribute: 'checked',
          type: Boolean,
          reflect: true
        },
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        },
        name: {
          attribute: 'name',
          type: String,
          reflect: true
        },
        value: {
          attribute: 'value',
          type: String,
          reflect: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidableToggleOption), "styles", this), r$2(_templateObject2$e || (_templateObject2$e = _taggedTemplateLiteral(["\n        :host {\n          display: flex;\n        }\n\n        input[type=radio] {\n          /* visuallyhidden: https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/css.md */\n          position: absolute;\n\n          width: 1px;\n          height: 1px;\n          padding: 0;\n          margin: -1px;\n          overflow: hidden;\n          clip: rect(0 0 0 0);\n\n          white-space: nowrap;\n\n          border: 0;\n          clip-path: inset(100%); /* May cause a performance issue: https://github.com/h5bp/html5-boilerplate/issues/2021 */\n        }\n\n        input[type=radio] + label {\n          width: 100%;\n          padding: 0.375rem 0.75rem;\n\n          font-family: var(---font-family-base);\n          font-size: 1.125rem;\n          line-height: 1.5;\n          color: var(---color-text-inverse);\n          text-align: center;\n\n          cursor: pointer;\n\n          background-color: var(---color-element-enabled);\n          border: 0;\n          border-radius: 0;\n          outline: none;\n\n          box-shadow: var(---shadow-2);\n        }\n\n        input[type=radio]:checked + label {\n          background-color: var(---color-element-selected);\n          outline: none;\n          box-shadow: var(---shadow-2);\n        }\n\n        input[type=radio] + label:hover {\n          z-index: 1;\n\n          outline: none;\n          box-shadow: var(---shadow-4);\n        }\n\n        input[type=radio] + label:active {\n          z-index: 2;\n\n          outline: none;\n          box-shadow: var(---shadow-8);\n        }\n\n        :host(:first-of-type) input[type=radio] + label {\n          border-top-left-radius: 0.25rem;\n          border-top-right-radius: 0.25rem;\n        }\n\n        :host(:last-of-type) input[type=radio] + label {\n          border-bottom-right-radius: 0.25rem;\n          border-bottom-left-radius: 0.25rem;\n        }\n\n        :host(.keyboard) input[type=radio]:focus + label {\n          z-index: 1;\n\n          outline: none;\n          box-shadow: var(---shadow-4);\n        }\n\n        :host(.keyboard) input[type=radio]:focus:checked + label {\n          z-index: 1;\n\n          background-color: var(---color-element-selected);\n          outline: none;\n          box-shadow: var(---shadow-4);\n        }\n\n        :host(.keyboard) input[type=radio]:focus + label:active {\n          z-index: 2;\n\n          outline: none;\n          box-shadow: var(---shadow-8);\n        }\n      "])))];
    }
  }]);

  return DecidableToggleOption;
}(DecidableElement);
customElements.define('decidable-toggle-option', DecidableToggleOption);

/*
  Attribute: Space-separated sequence of strings
  Property: Set of strings
*/
var DecidableConverterSet = {
  fromAttribute: function fromAttribute(value) {
    return new Set(value.split(/\s+/));
  },
  toAttribute: function toAttribute(value) {
    return value.size ? _toConsumableArray(value).join(' ') : null;
  }
};

var _templateObject$f;
/*
  SDTElement Base Class - Not intended for instantiation!
  <sdt-element>
*/

var SDTElement = /*#__PURE__*/function (_DecidableElement) {
  _inherits(SDTElement, _DecidableElement);

  var _super = _createSuper(SDTElement);

  function SDTElement() {
    var _this;

    _classCallCheck(this, SDTElement);

    _this = _super.call(this);
    _this.interactive = false;
    return _this;
  }

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
    }
  }, {
    key: "colors",
    get: function get() {
      return {
        h: Set1[2],
        m: Set1[4],
        fa: Set1[1],
        cr: Set1[0],
        hr: Set1[5],
        far: Set1[3],
        acc: Set1[8],
        d: Set1[7],
        c: Set1[6],
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
        acc[cur] = interpolateRgb(SDTElement.colors[cur], '#ffffff')(0.5);
        return acc;
      }, {});
    }
  }, {
    key: "darks",
    get: function get() {
      return Object.keys(SDTElement.colors).reduce(function (acc, cur) {
        acc[cur] = interpolateRgb(SDTElement.colors[cur], '#000000')(0.5);
        return acc;
      }, {});
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTElement), "styles", this), r$2(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral(["\n        :host {\n          ---color-h: var(--color-h, ", ");\n          ---color-m: var(--color-m, ", ");\n          ---color-fa: var(--color-fa, ", ");\n          ---color-cr: var(--color-cr, ", ");\n          ---color-hr: var(--color-hr, ", ");\n          ---color-far: var(--color-far, ", ");\n          ---color-acc: var(--color-acc, ", ");\n          ---color-d: var(--color-d, ", ");\n          ---color-c: var(--color-c, ", ");\n          ---color-s: var(--color-s, ", ");\n          ---color-present: var(--color-present, ", ");\n          ---color-absent: var(--color-absent, ", ");\n          ---color-correct: var(--color-correct, ", ");\n          ---color-error: var(--color-error, ", ");\n          ---color-nr: var(--color-nr, ", ");\n\n          ---color-h-light: var(--color-h-light, ", ");\n          ---color-m-light: var(--color-m-light, ", ");\n          ---color-fa-light: var(--color-fa-light, ", ");\n          ---color-cr-light: var(--color-cr-light, ", ");\n          ---color-hr-light: var(--color-hr-light, ", ");\n          ---color-far-light: var(--color-far-light, ", ");\n          ---color-acc-light: var(--color-acc-light, ", ");\n          ---color-d-light: var(--color-d-light, ", ");\n          ---color-c-light: var(--color-c-light, ", ");\n          ---color-s-light: var(--color-s-light, ", ");\n          ---color-present-light: var(--color-present-light, ", ");\n          ---color-absent-light: var(--color-absent-light, ", ");\n          ---color-correct-light: var(--color-correct-light, ", ");\n          ---color-error-light: var(--color-error-light, ", ");\n          ---color-nr-light: var(--color-nr-light, ", ");\n\n          ---color-h-dark: var(--color-h-dark, ", ");\n          ---color-m-dark: var(--color-m-dark, ", ");\n          ---color-fa-dark: var(--color-fa-dark, ", ");\n          ---color-cr-dark: var(--color-cr-dark, ", ");\n          ---color-hr-dark: var(--color-hr-dark, ", ");\n          ---color-far-dark: var(--color-far-dark, ", ");\n          ---color-acc-dark: var(--color-acc-dark, ", ");\n          ---color-d-dark: var(--color-d-dark, ", ");\n          ---color-c-dark: var(--color-c-dark, ", ");\n          ---color-s-dark: var(--color-s-dark, ", ");\n          ---color-present-dark: var(--color-present-dark, ", ");\n          ---color-absent-dark: var(--color-absent-dark, ", ");\n          ---color-correct-dark: var(--color-correct-dark, ", ");\n          ---color-error-dark: var(--color-error-dark, ", ");\n          ---color-nr-dark: var(--color-nr-dark, ", ");\n        }\n      "])), o$3(this.colors.h), o$3(this.colors.m), o$3(this.colors.fa), o$3(this.colors.cr), o$3(this.colors.hr), o$3(this.colors.far), o$3(this.colors.acc), o$3(this.colors.d), o$3(this.colors.c), o$3(this.colors.s), o$3(this.colors.present), o$3(this.colors.absent), o$3(this.colors.correct), o$3(this.colors.error), o$3(this.colors.nr), o$3(this.lights.h), o$3(this.lights.m), o$3(this.lights.fa), o$3(this.lights.cr), o$3(this.lights.hr), o$3(this.lights.far), o$3(this.lights.acc), o$3(this.lights.d), o$3(this.lights.c), o$3(this.lights.s), o$3(this.lights.present), o$3(this.lights.absent), o$3(this.lights.correct), o$3(this.lights.error), o$3(this.lights.nr), o$3(this.darks.h), o$3(this.darks.m), o$3(this.darks.fa), o$3(this.darks.cr), o$3(this.darks.hr), o$3(this.darks.far), o$3(this.darks.acc), o$3(this.darks.d), o$3(this.darks.c), o$3(this.darks.s), o$3(this.darks.present), o$3(this.darks.absent), o$3(this.darks.correct), o$3(this.darks.error), o$3(this.darks.nr))];
    }
  }]);

  return SDTElement;
}(DecidableElement);

var _templateObject$e, _templateObject2$d;
/*
  RDKTask element
  <rdk-task>

  Attributes:
  Dots; Coherence;
  # Direction, Speed, Lifetime
*/

var RDKTask = /*#__PURE__*/function (_SDTElement) {
  _inherits(RDKTask, _SDTElement);

  var _super = _createSuper(RDKTask);

  function RDKTask() {
    var _this;

    _classCallCheck(this, RDKTask);

    _this = _super.call(this); // Attributes

    _this.coherence = 0.5; // Proportion of dots moving coherently

    _this.count = 100; // Number of dots

    _this.probability = 0.5; // Probability of signal (as opposed to noise)

    _this.duration = 2000; // Duration of stimulus in milliseconds

    _this.wait = 2000; // Duration of wait period for response in milliseconds

    _this.iti = 2000; // Duration of inter-trial interval in milliseconds

    _this.trials = 5; // Number of trials per block

    _this.running = false; // Currently executing block of trials
    // Properties

    _this.direction = -1; // Direction of current trial in degrees

    _this.lifetime = 400; // Lifetime of each dot in milliseconds

    _this.speed = 50; // Rate of dot movement in pixels per second

    _this.width = NaN; // Width of component in pixels

    _this.height = NaN; // Height of component in pixels

    _this.rem = NaN; // Pixels per rem for component
    // Private

    _this.firstUpdate = true;
    _this.COHERENT = 0; // "Constant" for index to coherent dots

    _this.RANDOM = 1; // "Constant" for index to random dots

    _this.dots = [[], []]; // Array of array of dots

    _this.trial = 0; // Count of current trial

    _this.states = ['resetted', 'iti', 'stimulus', 'wait', 'ended']; // Possible states of task

    _this.state = 'resetted'; // Current state of task

    _this.baseTime = 0; // Real time, in milliseconds, that the current block started

    _this.pauseTime = 0; // Real time, in milliseconds, that block was paused at

    _this.startTime = 0; // Virtual time, in milliseconds, that current stage of trial started

    _this.lastTime = 0; // Virtual time, in milliseconds, of the most recent frame

    _this.currentDirection = undefined; // Direction in degrees for current trial

    _this.signals = ['present', 'absent']; // Possible trial types

    _this.signal = undefined; // Current trial type

    _this.runner = undefined; // D3 Interval for frame timing

    _this.xScale = undefined; // D3 Scale for x-axis

    _this.yScale = undefined; // D3 Scale for y-axis

    return _this;
  }

  _createClass(RDKTask, [{
    key: "render",
    value: function render() {
      // eslint-disable-line class-methods-use-this
      return $(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral([""])));
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      this.width = parseFloat(this.getComputedStyleValue('width'), 10);
      this.height = parseFloat(this.getComputedStyleValue('height'), 10);
      this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10); // console.log(`rdk-task: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(RDKTask.prototype), "connectedCallback", this).call(this);

      window.addEventListener('resize', this.getDimensions.bind(this));
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      window.removeEventListener('resize', this.getDimensions.bind(this));

      _get(_getPrototypeOf(RDKTask.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated(changedProperties) {
      _get(_getPrototypeOf(RDKTask.prototype), "firstUpdated", this).call(this, changedProperties); // Get the width and height after initial render/update has occurred
      // HACK Edge: Edge doesn't have width/height until after a 0ms timeout


      window.setTimeout(this.getDimensions.bind(this), 0);
    }
  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this2 = this;

      _get(_getPrototypeOf(RDKTask.prototype), "update", this).call(this, changedProperties); // Bail out if we can't get the width/height/rem


      if (Number.isNaN(this.width) || Number.isNaN(this.height) || Number.isNaN(this.rem)) {
        return;
      }

      var elementWidth = this.width;
      var elementHeight = this.height;
      var elementSize = Math.min(elementWidth, elementHeight);
      var margin = {
        top: 0.25 * this.rem,
        bottom: 0.25 * this.rem,
        left: 0.25 * this.rem,
        right: 0.25 * this.rem
      };
      var height = elementSize - (margin.top + margin.bottom);
      var width = elementSize - (margin.left + margin.right); // X Scale

      this.xScale = linear().domain([-1, 1]).range([0, width]); // Y Scale

      this.yScale = linear().domain([1, -1]).range([0, height]); // Svg
      //  DATA-JOIN

      var svgUpdate = select(this.renderRoot).selectAll('.main').data([{
        width: this.width,
        height: this.height,
        rem: this.rem
      }]); //  ENTER

      var svgEnter = svgUpdate.enter().append('svg').classed('main', true); //  MERGE

      var svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', "0 0 ".concat(elementSize, " ").concat(elementSize)); // Clippath
      //  ENTER

      svgEnter.append('clipPath').attr('id', 'clip-rdk-task').append('circle'); //  MERGE

      svgMerge.select('clipPath circle').attr('cx', this.xScale(0)).attr('cy', this.yScale(0)).attr('r', this.xScale(1) - this.xScale(0)); // Plot
      //  ENTER

      var plotEnter = svgEnter.append('g').classed('plot', true); //  MERGE

      var plotMerge = svgMerge.select('.plot').attr('transform', "translate(".concat(margin.left, ", ").concat(margin.top, ")")); // Underlayer
      //  ENTER

      var underlayerEnter = plotEnter.append('g').classed('underlayer', true); // MERGE

      var underlayerMerge = plotMerge.select('.underlayer'); // Background
      //  ENTER

      underlayerEnter.append('circle').classed('background', true); //  MERGE

      underlayerMerge.select('.background').attr('cx', this.xScale(0)).attr('cy', this.yScale(0)).attr('r', this.xScale(1) - this.xScale(0)); // Content
      //  ENTER

      plotEnter.append('g').classed('content', true).attr('clip-path', 'url(#clip-rdk-task)'); //  MERGE

      var contentMerge = plotMerge.select('.content'); // Dot Groups
      //  DATA-JOIN

      var dotsUpdate = contentMerge.selectAll('.dots').data([[], []]); //  ENTER

      dotsUpdate.enter().append('g').classed('dots', true).classed('coherent', function (datum, index) {
        return index === _this2.COHERENT;
      }).classed('random', function (datum, index) {
        return index === _this2.RANDOM;
      }); // Overlayer
      //  ENTER

      var overlayerEnter = plotEnter.append('g').classed('overlayer', true); // MERGE

      var overlayerMerge = plotMerge.select('.overlayer'); // Outline
      //  ENTER

      overlayerEnter.append('circle').classed('outline', true); //  MERGE

      overlayerMerge.select('.outline').attr('cx', this.xScale(0)).attr('cy', this.yScale(0)).attr('r', this.xScale(1) - this.yScale(0)); // Start or stop trial block

      if (this.firstUpdate || changedProperties.has('running')) {
        if (this.running) {
          // (Re)Start
          if (this.pauseTime) {
            // Shift timeline forward as if paused time never happened
            this.baseTime += now() - this.pauseTime;
            this.pauseTime = 0;
          }

          this.runner = interval(this.run.bind(this), 20); // FIXME??
        } else if (this.runner !== undefined) {
          // Pause
          this.runner.stop();
          this.pauseTime = now();
        }
      }

      this.firstUpdate = false;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.runner.stop();
      this.running = false;
      this.trial = 0;
      this.state = 'resetted';
      this.baseTime = 0;
      this.pauseTime = 0;
      this.startTime = 0;
      this.lastTime = 0;
      this.signal = undefined;
      this.currentDirection = undefined;
      var dotsUpdate = select(this.renderRoot).select('.content').selectAll('.dots').data([[], []]);
      var dotUpdate = dotsUpdate.selectAll('.dot').data(function (datum) {
        return datum;
      });
      dotUpdate.exit().remove();
      var fixationUpdate = select(this.renderRoot).select('.content').selectAll('.fixation').data([]);
      fixationUpdate.exit().remove();
      var queryUpdate = select(this.renderRoot).select('.content').selectAll('.query').data([]);
      queryUpdate.exit().remove();
    }
  }, {
    key: "run",
    value: function
      /* elapsed */
    run() {
      var realTime = now();
      var currentTime = this.baseTime ? realTime - this.baseTime : 0;
      var elapsedTime = this.baseTime ? currentTime - this.startTime : 0;
      var frameTime = this.baseTime ? currentTime - this.lastTime : 0;
      this.lastTime = currentTime;
      var newTrial = false;

      if (this.state === 'resetted') {
        // Start block with an ITI
        this.state = 'iti';
        this.baseTime = realTime;
        this.startTime = 0;
        this.dispatchEvent(new CustomEvent('rdk-block-start', {
          detail: {
            trials: this.trials
          },
          bubbles: true
        }));
      } else if (this.state === 'iti' && elapsedTime >= this.iti) {
        // Start new trial with a stimulus
        newTrial = true;
        this.trial += 1;
        this.state = 'stimulus';
        this.startTime = currentTime;
        this.signal = Math.random() < this.probability ? 'present' : 'absent';
        this.currentDirection = this.signal === 'absent' ? undefined : this.direction >= 0 ? this.direction : Math.random() * 360;
        this.dispatchEvent(new CustomEvent('rdk-trial-start', {
          detail: {
            trials: this.trials,
            duration: this.duration,
            wait: this.wait,
            iti: this.iti,
            trial: this.trial,
            signal: this.signal
          },
          bubbles: true
        }));
      } else if (this.state === 'stimulus' && elapsedTime >= this.duration) {
        // Stimulus is over, now wait
        this.state = 'wait';
        this.startTime = currentTime;
        this.dispatchEvent(new CustomEvent('rdk-trial-middle', {
          detail: {
            trials: this.trials,
            duration: this.duration,
            wait: this.wait,
            iti: this.iti,
            trial: this.trial,
            signal: this.signal
          },
          bubbles: true
        }));
      } else if (this.state === 'wait' && elapsedTime >= this.wait) {
        // Wait is over, end of trial
        this.dispatchEvent(new CustomEvent('rdk-trial-end', {
          detail: {
            trials: this.trials,
            duration: this.duration,
            wait: this.wait,
            iti: this.iti,
            trial: this.trial,
            signal: this.signal
          },
          bubbles: true
        }));

        if (this.trial >= this.trials) {
          // End of block
          this.runner.stop();
          this.running = false;
          this.state = 'ended';
          this.baseTime = 0;
          this.pauseTime = 0;
          this.startTime = 0;
          this.lastTime = 0;
          this.signal = undefined;
          this.currentDirection = undefined;
          this.dispatchEvent(new CustomEvent('rdk-block-end', {
            detail: {
              trials: this.trial
            },
            bubbles: true
          }));
        } else {
          // ITI
          this.state = 'iti';
          this.startTime = currentTime;
        }
      } // Dots


      if (this.state === 'stimulus') {
        this.dots[this.COHERENT].length = this.signal === 'present' ? Math.round(this.count * this.coherence) : 0;
        this.dots[this.RANDOM].length = this.signal === 'present' ? this.count - this.dots[this.COHERENT].length : this.count;

        for (var t = 0; t < this.dots.length; t += 1) {
          for (var i = 0; i < this.dots[t].length; i += 1) {
            var newDot = this.dots[t][i] === undefined;

            if (newDot) {
              this.dots[t][i] = {};
            }

            var dot = this.dots[t][i];

            if (newTrial || newDot) {
              dot.direction = t === this.RANDOM ? Math.random() * 360 : this.currentDirection;
              dot.birth = currentTime - Math.floor(Math.random() * this.lifetime);
              var angle = Math.random() * 2 * Math.PI;
              var radius = Math.sqrt(Math.random());
              dot.x = this.xScale(radius * Math.cos(angle));
              dot.y = this.yScale(radius * Math.sin(angle));
            } else if (currentTime > dot.birth + this.lifetime) {
              // Dot has died, so rebirth
              dot.birth += this.lifetime;
              dot.direction = t === this.RANDOM ? Math.random() * 360 : this.currentDirection;

              var _angle = Math.random() * 2 * Math.PI;

              var _radius = Math.sqrt(Math.random());

              dot.x = this.xScale(_radius * Math.cos(_angle));
              dot.y = this.yScale(_radius * Math.sin(_angle));
            } else {
              if (t === this.COHERENT) {
                dot.direction = this.currentDirection;
              }

              var directionR = dot.direction * (Math.PI / 180);
              dot.dx = this.speed * (frameTime / 1000) * Math.cos(directionR);
              dot.dy = this.speed * (frameTime / 1000) * Math.sin(directionR); // Update position

              dot.x += dot.dx;
              dot.y += dot.dy; // Calculate squared distance from center

              var distance2 = Math.pow(dot.x - this.xScale(0), 2) + Math.pow(dot.y - this.yScale(0), 2);
              var radius2 = Math.pow(this.xScale(1) - this.xScale(0), 2);

              if (distance2 > radius2) {
                // Dot has exited so move to other side
                dot.x = -(dot.x - this.xScale(0)) + this.xScale(0);
                dot.y = -(dot.y - this.yScale(0)) + this.yScale(0);
              }
            }
          }
        }
      } // Fixation
      //  DATA-JOIN


      var fixationUpdate = select(this.renderRoot).select('.content').selectAll('.fixation').data(this.state === 'iti' ? [true] : []); //  ENTER

      var fixationEnter = fixationUpdate.enter().append('g').classed('fixation', true);
      fixationEnter.append('line').attr('x1', this.xScale(-0.1)).attr('y1', this.xScale(0)).attr('x2', this.xScale(0.1)).attr('y2', this.xScale(0));
      fixationEnter.append('line').attr('x1', this.xScale(0)).attr('y1', this.xScale(-0.1)).attr('x2', this.xScale(0)).attr('y2', this.xScale(0.1)); //  EXIT

      fixationUpdate.exit().remove(); // Dots
      //  DATA-JOIN

      var dotsUpdate = select(this.renderRoot).select('.content').selectAll('.dots').data(this.state === 'stimulus' ? this.dots : [[], []]);
      var dotUpdate = dotsUpdate.selectAll('.dot').data(function (datum) {
        return datum;
      }); //  ENTER

      var dotEnter = dotUpdate.enter().append('circle').classed('dot', true).attr('r', 2);
      /* HACK: Firefox does not support CSS SVG Geometry Properties */
      //  MERGE

      dotEnter.merge(dotUpdate).attr('cx', function (datum) {
        return datum.x;
      }).attr('cy', function (datum) {
        return datum.y;
      }); //  EXIT

      dotUpdate.exit().remove(); // Query
      //  DATA-JOIN

      var queryUpdate = select(this.renderRoot).select('.content').selectAll('.query').data(this.state === 'wait' ? [true] : []); //  ENTER

      var queryEnter = queryUpdate.enter().append('g').classed('query', true);
      queryEnter.append('text').attr('x', this.xScale(0)).attr('y', this.xScale(0)).attr('text-anchor', 'middle').attr('alignment-baseline', 'middle').text('?'); //  EXIT

      queryUpdate.exit().remove();
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        coherence: {
          attribute: 'coherence',
          type: Number,
          reflect: true
        },
        count: {
          attribute: 'count',
          type: Number,
          reflect: true
        },
        probability: {
          attribute: 'probability',
          type: Number,
          reflect: true
        },
        duration: {
          attribute: 'duration',
          type: Number,
          reflect: true
        },
        wait: {
          attribute: 'wait',
          type: Number,
          reflect: true
        },
        iti: {
          attribute: 'iti',
          type: Number,
          reflect: true
        },
        trials: {
          attribute: 'trials',
          type: Number,
          reflect: true
        },
        running: {
          attribute: 'running',
          type: Boolean,
          reflect: true
        },
        direction: {
          attribute: false,
          type: Number,
          reflect: false
        },
        lifetime: {
          attribute: false,
          type: Number,
          reflect: false
        },
        speed: {
          attribute: false,
          type: Number,
          reflect: false
        },
        width: {
          attribute: false,
          type: Number,
          reflect: false
        },
        height: {
          attribute: false,
          type: Number,
          reflect: false
        },
        rem: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(RDKTask), "styles", this), r$2(_templateObject2$d || (_templateObject2$d = _taggedTemplateLiteral(["\n        :host {\n          display: inline-block;\n\n          width: 10rem;\n          height: 10rem;\n        }\n\n        .main {\n          width: 100%;\n          height: 100%;\n        }\n\n        .background {\n          fill: var(---color-element-disabled);\n          stroke: none;\n        }\n\n        .outline {\n          fill: none;\n          stroke: var(---color-element-emphasis);\n          stroke-width: 2px;\n        }\n\n        .dot {\n          /* r: 2px; HACK: Firefox does not support CSS SVG Geometry Properties */\n        }\n\n        .dots.coherent {\n          fill: var(---color-background);\n        }\n\n        .dots.random {\n          fill: var(---color-background);\n        }\n\n        .fixation {\n          stroke: var(---color-text);\n          stroke-width: 2px;\n        }\n\n        .query {\n          font-size: 1.75rem;\n          font-weight: 600;\n        }\n      "])))];
    }
  }]);

  return RDKTask;
}(SDTElement);
customElements.define('rdk-task', RDKTask);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var jstat = {exports: {}};

(function (module, exports) {
  (function (window, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function () {
    var jStat = function (Math, undefined$1) {
      // For quick reference.
      var concat = Array.prototype.concat;
      var slice = Array.prototype.slice;
      var toString = Object.prototype.toString; // Calculate correction for IEEE error
      // TODO: This calculation can be improved.

      function calcRdx(n, m) {
        var val = n > m ? n : m;
        return Math.pow(10, 17 - ~~(Math.log(val > 0 ? val : -val) * Math.LOG10E));
      }

      var isArray = Array.isArray || function isArray(arg) {
        return toString.call(arg) === '[object Array]';
      };

      function isFunction(arg) {
        return toString.call(arg) === '[object Function]';
      }

      function isNumber(num) {
        return typeof num === 'number' ? num - num === 0 : false;
      } // Converts the jStat matrix to vector.


      function toVector(arr) {
        return concat.apply([], arr);
      } // The one and only jStat constructor.


      function jStat() {
        return new jStat._init(arguments);
      } // TODO: Remove after all references in src files have been removed.


      jStat.fn = jStat.prototype; // By separating the initializer from the constructor it's easier to handle
      // always returning a new instance whether "new" was used or not.

      jStat._init = function _init(args) {
        // If first argument is an array, must be vector or matrix.
        if (isArray(args[0])) {
          // Check if matrix.
          if (isArray(args[0][0])) {
            // See if a mapping function was also passed.
            if (isFunction(args[1])) args[0] = jStat.map(args[0], args[1]); // Iterate over each is faster than this.push.apply(this, args[0].

            for (var i = 0; i < args[0].length; i++) {
              this[i] = args[0][i];
            }

            this.length = args[0].length; // Otherwise must be a vector.
          } else {
            this[0] = isFunction(args[1]) ? jStat.map(args[0], args[1]) : args[0];
            this.length = 1;
          } // If first argument is number, assume creation of sequence.

        } else if (isNumber(args[0])) {
          this[0] = jStat.seq.apply(null, args);
          this.length = 1; // Handle case when jStat object is passed to jStat.
        } else if (args[0] instanceof jStat) {
          // Duplicate the object and pass it back.
          return jStat(args[0].toArray()); // Unexpected argument value, return empty jStat object.
          // TODO: This is strange behavior. Shouldn't this throw or some such to let
          // the user know they had bad arguments?
        } else {
          this[0] = [];
          this.length = 1;
        }

        return this;
      };

      jStat._init.prototype = jStat.prototype;
      jStat._init.constructor = jStat; // Utility functions.
      // TODO: for internal use only?

      jStat.utils = {
        calcRdx: calcRdx,
        isArray: isArray,
        isFunction: isFunction,
        isNumber: isNumber,
        toVector: toVector
      };
      jStat._random_fn = Math.random;

      jStat.setRandom = function setRandom(fn) {
        if (typeof fn !== 'function') throw new TypeError('fn is not a function');
        jStat._random_fn = fn;
      }; // Easily extend the jStat object.
      // TODO: is this seriously necessary?


      jStat.extend = function extend(obj) {
        var i, j;

        if (arguments.length === 1) {
          for (j in obj) {
            jStat[j] = obj[j];
          }

          return this;
        }

        for (i = 1; i < arguments.length; i++) {
          for (j in arguments[i]) {
            obj[j] = arguments[i][j];
          }
        }

        return obj;
      }; // Returns the number of rows in the matrix.


      jStat.rows = function rows(arr) {
        return arr.length || 1;
      }; // Returns the number of columns in the matrix.


      jStat.cols = function cols(arr) {
        return arr[0].length || 1;
      }; // Returns the dimensions of the object { rows: i, cols: j }


      jStat.dimensions = function dimensions(arr) {
        return {
          rows: jStat.rows(arr),
          cols: jStat.cols(arr)
        };
      }; // Returns a specified row as a vector or return a sub matrix by pick some rows


      jStat.row = function row(arr, index) {
        if (isArray(index)) {
          return index.map(function (i) {
            return jStat.row(arr, i);
          });
        }

        return arr[index];
      }; // return row as array
      // rowa([[1,2],[3,4]],0) -> [1,2]


      jStat.rowa = function rowa(arr, i) {
        return jStat.row(arr, i);
      }; // Returns the specified column as a vector or return a sub matrix by pick some
      // columns


      jStat.col = function col(arr, index) {
        if (isArray(index)) {
          var submat = jStat.arange(arr.length).map(function () {
            return new Array(index.length);
          });
          index.forEach(function (ind, i) {
            jStat.arange(arr.length).forEach(function (j) {
              submat[j][i] = arr[j][ind];
            });
          });
          return submat;
        }

        var column = new Array(arr.length);

        for (var i = 0; i < arr.length; i++) {
          column[i] = [arr[i][index]];
        }

        return column;
      }; // return column as array
      // cola([[1,2],[3,4]],0) -> [1,3]


      jStat.cola = function cola(arr, i) {
        return jStat.col(arr, i).map(function (a) {
          return a[0];
        });
      }; // Returns the diagonal of the matrix


      jStat.diag = function diag(arr) {
        var nrow = jStat.rows(arr);
        var res = new Array(nrow);

        for (var row = 0; row < nrow; row++) {
          res[row] = [arr[row][row]];
        }

        return res;
      }; // Returns the anti-diagonal of the matrix


      jStat.antidiag = function antidiag(arr) {
        var nrow = jStat.rows(arr) - 1;
        var res = new Array(nrow);

        for (var i = 0; nrow >= 0; nrow--, i++) {
          res[i] = [arr[i][nrow]];
        }

        return res;
      }; // Transpose a matrix or array.


      jStat.transpose = function transpose(arr) {
        var obj = [];
        var objArr, rows, cols, j, i; // Make sure arr is in matrix format.

        if (!isArray(arr[0])) arr = [arr];
        rows = arr.length;
        cols = arr[0].length;

        for (i = 0; i < cols; i++) {
          objArr = new Array(rows);

          for (j = 0; j < rows; j++) {
            objArr[j] = arr[j][i];
          }

          obj.push(objArr);
        } // If obj is vector, return only single array.


        return obj.length === 1 ? obj[0] : obj;
      }; // Map a function to an array or array of arrays.
      // "toAlter" is an internal variable.


      jStat.map = function map(arr, func, toAlter) {
        var row, nrow, ncol, res, col;
        if (!isArray(arr[0])) arr = [arr];
        nrow = arr.length;
        ncol = arr[0].length;
        res = toAlter ? arr : new Array(nrow);

        for (row = 0; row < nrow; row++) {
          // if the row doesn't exist, create it
          if (!res[row]) res[row] = new Array(ncol);

          for (col = 0; col < ncol; col++) {
            res[row][col] = func(arr[row][col], row, col);
          }
        }

        return res.length === 1 ? res[0] : res;
      }; // Cumulatively combine the elements of an array or array of arrays using a function.


      jStat.cumreduce = function cumreduce(arr, func, toAlter) {
        var row, nrow, ncol, res, col;
        if (!isArray(arr[0])) arr = [arr];
        nrow = arr.length;
        ncol = arr[0].length;
        res = toAlter ? arr : new Array(nrow);

        for (row = 0; row < nrow; row++) {
          // if the row doesn't exist, create it
          if (!res[row]) res[row] = new Array(ncol);
          if (ncol > 0) res[row][0] = arr[row][0];

          for (col = 1; col < ncol; col++) {
            res[row][col] = func(res[row][col - 1], arr[row][col]);
          }
        }

        return res.length === 1 ? res[0] : res;
      }; // Destructively alter an array.


      jStat.alter = function alter(arr, func) {
        return jStat.map(arr, func, true);
      }; // Generate a rows x cols matrix according to the supplied function.


      jStat.create = function create(rows, cols, func) {
        var res = new Array(rows);
        var i, j;

        if (isFunction(cols)) {
          func = cols;
          cols = rows;
        }

        for (i = 0; i < rows; i++) {
          res[i] = new Array(cols);

          for (j = 0; j < cols; j++) {
            res[i][j] = func(i, j);
          }
        }

        return res;
      };

      function retZero() {
        return 0;
      } // Generate a rows x cols matrix of zeros.


      jStat.zeros = function zeros(rows, cols) {
        if (!isNumber(cols)) cols = rows;
        return jStat.create(rows, cols, retZero);
      };

      function retOne() {
        return 1;
      } // Generate a rows x cols matrix of ones.


      jStat.ones = function ones(rows, cols) {
        if (!isNumber(cols)) cols = rows;
        return jStat.create(rows, cols, retOne);
      }; // Generate a rows x cols matrix of uniformly random numbers.


      jStat.rand = function rand(rows, cols) {
        if (!isNumber(cols)) cols = rows;
        return jStat.create(rows, cols, jStat._random_fn);
      };

      function retIdent(i, j) {
        return i === j ? 1 : 0;
      } // Generate an identity matrix of size row x cols.


      jStat.identity = function identity(rows, cols) {
        if (!isNumber(cols)) cols = rows;
        return jStat.create(rows, cols, retIdent);
      }; // Tests whether a matrix is symmetric


      jStat.symmetric = function symmetric(arr) {
        var size = arr.length;
        var row, col;
        if (arr.length !== arr[0].length) return false;

        for (row = 0; row < size; row++) {
          for (col = 0; col < size; col++) {
            if (arr[col][row] !== arr[row][col]) return false;
          }
        }

        return true;
      }; // Set all values to zero.


      jStat.clear = function clear(arr) {
        return jStat.alter(arr, retZero);
      }; // Generate sequence.


      jStat.seq = function seq(min, max, length, func) {
        if (!isFunction(func)) func = false;
        var arr = [];
        var hival = calcRdx(min, max);
        var step = (max * hival - min * hival) / ((length - 1) * hival);
        var current = min;
        var cnt; // Current is assigned using a technique to compensate for IEEE error.
        // TODO: Needs better implementation.

        for (cnt = 0; current <= max && cnt < length; cnt++, current = (min * hival + step * hival * cnt) / hival) {
          arr.push(func ? func(current, cnt) : current);
        }

        return arr;
      }; // arange(5) -> [0,1,2,3,4]
      // arange(1,5) -> [1,2,3,4]
      // arange(5,1,-1) -> [5,4,3,2]


      jStat.arange = function arange(start, end, step) {
        var rl = [];
        var i;
        step = step || 1;

        if (end === undefined$1) {
          end = start;
          start = 0;
        }

        if (start === end || step === 0) {
          return [];
        }

        if (start < end && step < 0) {
          return [];
        }

        if (start > end && step > 0) {
          return [];
        }

        if (step > 0) {
          for (i = start; i < end; i += step) {
            rl.push(i);
          }
        } else {
          for (i = start; i > end; i += step) {
            rl.push(i);
          }
        }

        return rl;
      }; // A=[[1,2,3],[4,5,6],[7,8,9]]
      // slice(A,{row:{end:2},col:{start:1}}) -> [[2,3],[5,6]]
      // slice(A,1,{start:1}) -> [5,6]
      // as numpy code A[:2,1:]


      jStat.slice = function () {
        function _slice(list, start, end, step) {
          // note it's not equal to range.map mode it's a bug
          var i;
          var rl = [];
          var length = list.length;

          if (start === undefined$1 && end === undefined$1 && step === undefined$1) {
            return jStat.copy(list);
          }

          start = start || 0;
          end = end || list.length;
          start = start >= 0 ? start : length + start;
          end = end >= 0 ? end : length + end;
          step = step || 1;

          if (start === end || step === 0) {
            return [];
          }

          if (start < end && step < 0) {
            return [];
          }

          if (start > end && step > 0) {
            return [];
          }

          if (step > 0) {
            for (i = start; i < end; i += step) {
              rl.push(list[i]);
            }
          } else {
            for (i = start; i > end; i += step) {
              rl.push(list[i]);
            }
          }

          return rl;
        }

        function slice(list, rcSlice) {
          var colSlice, rowSlice;
          rcSlice = rcSlice || {};

          if (isNumber(rcSlice.row)) {
            if (isNumber(rcSlice.col)) return list[rcSlice.row][rcSlice.col];
            var row = jStat.rowa(list, rcSlice.row);
            colSlice = rcSlice.col || {};
            return _slice(row, colSlice.start, colSlice.end, colSlice.step);
          }

          if (isNumber(rcSlice.col)) {
            var col = jStat.cola(list, rcSlice.col);
            rowSlice = rcSlice.row || {};
            return _slice(col, rowSlice.start, rowSlice.end, rowSlice.step);
          }

          rowSlice = rcSlice.row || {};
          colSlice = rcSlice.col || {};

          var rows = _slice(list, rowSlice.start, rowSlice.end, rowSlice.step);

          return rows.map(function (row) {
            return _slice(row, colSlice.start, colSlice.end, colSlice.step);
          });
        }

        return slice;
      }(); // A=[[1,2,3],[4,5,6],[7,8,9]]
      // sliceAssign(A,{row:{start:1},col:{start:1}},[[0,0],[0,0]])
      // A=[[1,2,3],[4,0,0],[7,0,0]]


      jStat.sliceAssign = function sliceAssign(A, rcSlice, B) {
        var nl, ml;

        if (isNumber(rcSlice.row)) {
          if (isNumber(rcSlice.col)) return A[rcSlice.row][rcSlice.col] = B;
          rcSlice.col = rcSlice.col || {};
          rcSlice.col.start = rcSlice.col.start || 0;
          rcSlice.col.end = rcSlice.col.end || A[0].length;
          rcSlice.col.step = rcSlice.col.step || 1;
          nl = jStat.arange(rcSlice.col.start, Math.min(A.length, rcSlice.col.end), rcSlice.col.step);
          var m = rcSlice.row;
          nl.forEach(function (n, i) {
            A[m][n] = B[i];
          });
          return A;
        }

        if (isNumber(rcSlice.col)) {
          rcSlice.row = rcSlice.row || {};
          rcSlice.row.start = rcSlice.row.start || 0;
          rcSlice.row.end = rcSlice.row.end || A.length;
          rcSlice.row.step = rcSlice.row.step || 1;
          ml = jStat.arange(rcSlice.row.start, Math.min(A[0].length, rcSlice.row.end), rcSlice.row.step);
          var n = rcSlice.col;
          ml.forEach(function (m, j) {
            A[m][n] = B[j];
          });
          return A;
        }

        if (B[0].length === undefined$1) {
          B = [B];
        }

        rcSlice.row.start = rcSlice.row.start || 0;
        rcSlice.row.end = rcSlice.row.end || A.length;
        rcSlice.row.step = rcSlice.row.step || 1;
        rcSlice.col.start = rcSlice.col.start || 0;
        rcSlice.col.end = rcSlice.col.end || A[0].length;
        rcSlice.col.step = rcSlice.col.step || 1;
        ml = jStat.arange(rcSlice.row.start, Math.min(A.length, rcSlice.row.end), rcSlice.row.step);
        nl = jStat.arange(rcSlice.col.start, Math.min(A[0].length, rcSlice.col.end), rcSlice.col.step);
        ml.forEach(function (m, i) {
          nl.forEach(function (n, j) {
            A[m][n] = B[i][j];
          });
        });
        return A;
      }; // [1,2,3] ->
      // [[1,0,0],[0,2,0],[0,0,3]]


      jStat.diagonal = function diagonal(diagArray) {
        var mat = jStat.zeros(diagArray.length, diagArray.length);
        diagArray.forEach(function (t, i) {
          mat[i][i] = t;
        });
        return mat;
      }; // return copy of A


      jStat.copy = function copy(A) {
        return A.map(function (row) {
          if (isNumber(row)) return row;
          return row.map(function (t) {
            return t;
          });
        });
      }; // TODO: Go over this entire implementation. Seems a tragic waste of resources
      // doing all this work. Instead, and while ugly, use new Function() to generate
      // a custom function for each static method.
      // Quick reference.


      var jProto = jStat.prototype; // Default length.

      jProto.length = 0; // For internal use only.
      // TODO: Check if they're actually used, and if they are then rename them
      // to _*

      jProto.push = Array.prototype.push;
      jProto.sort = Array.prototype.sort;
      jProto.splice = Array.prototype.splice;
      jProto.slice = Array.prototype.slice; // Return a clean array.

      jProto.toArray = function toArray() {
        return this.length > 1 ? slice.call(this) : slice.call(this)[0];
      }; // Map a function to a matrix or vector.


      jProto.map = function map(func, toAlter) {
        return jStat(jStat.map(this, func, toAlter));
      }; // Cumulatively combine the elements of a matrix or vector using a function.


      jProto.cumreduce = function cumreduce(func, toAlter) {
        return jStat(jStat.cumreduce(this, func, toAlter));
      }; // Destructively alter an array.


      jProto.alter = function alter(func) {
        jStat.alter(this, func);
        return this;
      }; // Extend prototype with methods that have no argument.


      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) {
          (function (passfunc) {
            jProto[passfunc] = function (func) {
              var self = this,
                  results; // Check for callback.

              if (func) {
                setTimeout(function () {
                  func.call(self, jProto[passfunc].call(self));
                });
                return this;
              }

              results = jStat[passfunc](this);
              return isArray(results) ? jStat(results) : results;
            };
          })(funcs[i]);
        }
      })('transpose clear symmetric rows cols dimensions diag antidiag'.split(' ')); // Extend prototype with methods that have one argument.


      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) {
          (function (passfunc) {
            jProto[passfunc] = function (index, func) {
              var self = this; // check for callback

              if (func) {
                setTimeout(function () {
                  func.call(self, jProto[passfunc].call(self, index));
                });
                return this;
              }

              return jStat(jStat[passfunc](this, index));
            };
          })(funcs[i]);
        }
      })('row col'.split(' ')); // Extend prototype with simple shortcut methods.


      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) {
          (function (passfunc) {
            jProto[passfunc] = function () {
              return jStat(jStat[passfunc].apply(null, arguments));
            };
          })(funcs[i]);
        }
      })('create zeros ones rand identity'.split(' ')); // Exposing jStat.


      return jStat;
    }(Math);

    (function (jStat, Math) {
      var isFunction = jStat.utils.isFunction; // Ascending functions for sort

      function ascNum(a, b) {
        return a - b;
      }

      function clip(arg, min, max) {
        return Math.max(min, Math.min(arg, max));
      } // sum of an array


      jStat.sum = function sum(arr) {
        var sum = 0;
        var i = arr.length;

        while (--i >= 0) {
          sum += arr[i];
        }

        return sum;
      }; // sum squared


      jStat.sumsqrd = function sumsqrd(arr) {
        var sum = 0;
        var i = arr.length;

        while (--i >= 0) {
          sum += arr[i] * arr[i];
        }

        return sum;
      }; // sum of squared errors of prediction (SSE)


      jStat.sumsqerr = function sumsqerr(arr) {
        var mean = jStat.mean(arr);
        var sum = 0;
        var i = arr.length;
        var tmp;

        while (--i >= 0) {
          tmp = arr[i] - mean;
          sum += tmp * tmp;
        }

        return sum;
      }; // sum of an array in each row


      jStat.sumrow = function sumrow(arr) {
        var sum = 0;
        var i = arr.length;

        while (--i >= 0) {
          sum += arr[i];
        }

        return sum;
      }; // product of an array


      jStat.product = function product(arr) {
        var prod = 1;
        var i = arr.length;

        while (--i >= 0) {
          prod *= arr[i];
        }

        return prod;
      }; // minimum value of an array


      jStat.min = function min(arr) {
        var low = arr[0];
        var i = 0;

        while (++i < arr.length) {
          if (arr[i] < low) low = arr[i];
        }

        return low;
      }; // maximum value of an array


      jStat.max = function max(arr) {
        var high = arr[0];
        var i = 0;

        while (++i < arr.length) {
          if (arr[i] > high) high = arr[i];
        }

        return high;
      }; // unique values of an array


      jStat.unique = function unique(arr) {
        var hash = {},
            _arr = [];

        for (var i = 0; i < arr.length; i++) {
          if (!hash[arr[i]]) {
            hash[arr[i]] = true;

            _arr.push(arr[i]);
          }
        }

        return _arr;
      }; // mean value of an array


      jStat.mean = function mean(arr) {
        return jStat.sum(arr) / arr.length;
      }; // mean squared error (MSE)


      jStat.meansqerr = function meansqerr(arr) {
        return jStat.sumsqerr(arr) / arr.length;
      }; // geometric mean of an array


      jStat.geomean = function geomean(arr) {
        return Math.pow(jStat.product(arr), 1 / arr.length);
      }; // median of an array


      jStat.median = function median(arr) {
        var arrlen = arr.length;

        var _arr = arr.slice().sort(ascNum); // check if array is even or odd, then return the appropriate


        return !(arrlen & 1) ? (_arr[arrlen / 2 - 1] + _arr[arrlen / 2]) / 2 : _arr[arrlen / 2 | 0];
      }; // cumulative sum of an array


      jStat.cumsum = function cumsum(arr) {
        return jStat.cumreduce(arr, function (a, b) {
          return a + b;
        });
      }; // cumulative product of an array


      jStat.cumprod = function cumprod(arr) {
        return jStat.cumreduce(arr, function (a, b) {
          return a * b;
        });
      }; // successive differences of a sequence


      jStat.diff = function diff(arr) {
        var diffs = [];
        var arrLen = arr.length;
        var i;

        for (i = 1; i < arrLen; i++) {
          diffs.push(arr[i] - arr[i - 1]);
        }

        return diffs;
      }; // ranks of an array


      jStat.rank = function (arr) {
        var i;
        var distinctNumbers = [];
        var numberCounts = {};

        for (i = 0; i < arr.length; i++) {
          var number = arr[i];

          if (numberCounts[number]) {
            numberCounts[number]++;
          } else {
            numberCounts[number] = 1;
            distinctNumbers.push(number);
          }
        }

        var sortedDistinctNumbers = distinctNumbers.sort(ascNum);
        var numberRanks = {};
        var currentRank = 1;

        for (i = 0; i < sortedDistinctNumbers.length; i++) {
          var number = sortedDistinctNumbers[i];
          var count = numberCounts[number];
          var first = currentRank;
          var last = currentRank + count - 1;
          var rank = (first + last) / 2;
          numberRanks[number] = rank;
          currentRank += count;
        }

        return arr.map(function (number) {
          return numberRanks[number];
        });
      }; // mode of an array
      // if there are multiple modes of an array, return all of them
      // is this the appropriate way of handling it?


      jStat.mode = function mode(arr) {
        var arrLen = arr.length;

        var _arr = arr.slice().sort(ascNum);

        var count = 1;
        var maxCount = 0;
        var numMaxCount = 0;
        var mode_arr = [];
        var i;

        for (i = 0; i < arrLen; i++) {
          if (_arr[i] === _arr[i + 1]) {
            count++;
          } else {
            if (count > maxCount) {
              mode_arr = [_arr[i]];
              maxCount = count;
              numMaxCount = 0;
            } // are there multiple max counts
            else if (count === maxCount) {
              mode_arr.push(_arr[i]);
              numMaxCount++;
            } // resetting count for new value in array


            count = 1;
          }
        }

        return numMaxCount === 0 ? mode_arr[0] : mode_arr;
      }; // range of an array


      jStat.range = function range(arr) {
        return jStat.max(arr) - jStat.min(arr);
      }; // variance of an array
      // flag = true indicates sample instead of population


      jStat.variance = function variance(arr, flag) {
        return jStat.sumsqerr(arr) / (arr.length - (flag ? 1 : 0));
      }; // pooled variance of an array of arrays


      jStat.pooledvariance = function pooledvariance(arr) {
        var sumsqerr = arr.reduce(function (a, samples) {
          return a + jStat.sumsqerr(samples);
        }, 0);
        var count = arr.reduce(function (a, samples) {
          return a + samples.length;
        }, 0);
        return sumsqerr / (count - arr.length);
      }; // deviation of an array


      jStat.deviation = function (arr) {
        var mean = jStat.mean(arr);
        var arrlen = arr.length;
        var dev = new Array(arrlen);

        for (var i = 0; i < arrlen; i++) {
          dev[i] = arr[i] - mean;
        }

        return dev;
      }; // standard deviation of an array
      // flag = true indicates sample instead of population


      jStat.stdev = function stdev(arr, flag) {
        return Math.sqrt(jStat.variance(arr, flag));
      }; // pooled standard deviation of an array of arrays


      jStat.pooledstdev = function pooledstdev(arr) {
        return Math.sqrt(jStat.pooledvariance(arr));
      }; // mean deviation (mean absolute deviation) of an array


      jStat.meandev = function meandev(arr) {
        var mean = jStat.mean(arr);
        var a = [];

        for (var i = arr.length - 1; i >= 0; i--) {
          a.push(Math.abs(arr[i] - mean));
        }

        return jStat.mean(a);
      }; // median deviation (median absolute deviation) of an array


      jStat.meddev = function meddev(arr) {
        var median = jStat.median(arr);
        var a = [];

        for (var i = arr.length - 1; i >= 0; i--) {
          a.push(Math.abs(arr[i] - median));
        }

        return jStat.median(a);
      }; // coefficient of variation


      jStat.coeffvar = function coeffvar(arr) {
        return jStat.stdev(arr) / jStat.mean(arr);
      }; // quartiles of an array


      jStat.quartiles = function quartiles(arr) {
        var arrlen = arr.length;

        var _arr = arr.slice().sort(ascNum);

        return [_arr[Math.round(arrlen / 4) - 1], _arr[Math.round(arrlen / 2) - 1], _arr[Math.round(arrlen * 3 / 4) - 1]];
      }; // Arbitary quantiles of an array. Direct port of the scipy.stats
      // implementation by Pierre GF Gerard-Marchant.


      jStat.quantiles = function quantiles(arr, quantilesArray, alphap, betap) {
        var sortedArray = arr.slice().sort(ascNum);
        var quantileVals = [quantilesArray.length];
        var n = arr.length;
        var i, p, m, aleph, k, gamma;
        if (typeof alphap === 'undefined') alphap = 3 / 8;
        if (typeof betap === 'undefined') betap = 3 / 8;

        for (i = 0; i < quantilesArray.length; i++) {
          p = quantilesArray[i];
          m = alphap + p * (1 - alphap - betap);
          aleph = n * p + m;
          k = Math.floor(clip(aleph, 1, n - 1));
          gamma = clip(aleph - k, 0, 1);
          quantileVals[i] = (1 - gamma) * sortedArray[k - 1] + gamma * sortedArray[k];
        }

        return quantileVals;
      }; // Return the k-th percentile of values in a range, where k is in the range 0..1, inclusive.
      // Passing true for the exclusive parameter excludes both endpoints of the range.


      jStat.percentile = function percentile(arr, k, exclusive) {
        var _arr = arr.slice().sort(ascNum);

        var realIndex = k * (_arr.length + (exclusive ? 1 : -1)) + (exclusive ? 0 : 1);
        var index = parseInt(realIndex);
        var frac = realIndex - index;

        if (index + 1 < _arr.length) {
          return _arr[index - 1] + frac * (_arr[index] - _arr[index - 1]);
        } else {
          return _arr[index - 1];
        }
      }; // The percentile rank of score in a given array. Returns the percentage
      // of all values in the input array that are less than (kind='strict') or
      // less or equal than (kind='weak') score. Default is weak.


      jStat.percentileOfScore = function percentileOfScore(arr, score, kind) {
        var counter = 0;
        var len = arr.length;
        var strict = false;
        var value, i;
        if (kind === 'strict') strict = true;

        for (i = 0; i < len; i++) {
          value = arr[i];

          if (strict && value < score || !strict && value <= score) {
            counter++;
          }
        }

        return counter / len;
      }; // Histogram (bin count) data


      jStat.histogram = function histogram(arr, binCnt) {
        binCnt = binCnt || 4;
        var first = jStat.min(arr);
        var binWidth = (jStat.max(arr) - first) / binCnt;
        var len = arr.length;
        var bins = [];
        var i;

        for (i = 0; i < binCnt; i++) {
          bins[i] = 0;
        }

        for (i = 0; i < len; i++) {
          bins[Math.min(Math.floor((arr[i] - first) / binWidth), binCnt - 1)] += 1;
        }

        return bins;
      }; // covariance of two arrays


      jStat.covariance = function covariance(arr1, arr2) {
        var u = jStat.mean(arr1);
        var v = jStat.mean(arr2);
        var arr1Len = arr1.length;
        var sq_dev = new Array(arr1Len);
        var i;

        for (i = 0; i < arr1Len; i++) {
          sq_dev[i] = (arr1[i] - u) * (arr2[i] - v);
        }

        return jStat.sum(sq_dev) / (arr1Len - 1);
      }; // (pearson's) population correlation coefficient, rho


      jStat.corrcoeff = function corrcoeff(arr1, arr2) {
        return jStat.covariance(arr1, arr2) / jStat.stdev(arr1, 1) / jStat.stdev(arr2, 1);
      }; // (spearman's) rank correlation coefficient, sp


      jStat.spearmancoeff = function (arr1, arr2) {
        arr1 = jStat.rank(arr1);
        arr2 = jStat.rank(arr2); //return pearson's correlation of the ranks:

        return jStat.corrcoeff(arr1, arr2);
      }; // statistical standardized moments (general form of skew/kurt)


      jStat.stanMoment = function stanMoment(arr, n) {
        var mu = jStat.mean(arr);
        var sigma = jStat.stdev(arr);
        var len = arr.length;
        var skewSum = 0;

        for (var i = 0; i < len; i++) {
          skewSum += Math.pow((arr[i] - mu) / sigma, n);
        }

        return skewSum / arr.length;
      }; // (pearson's) moment coefficient of skewness


      jStat.skewness = function skewness(arr) {
        return jStat.stanMoment(arr, 3);
      }; // (pearson's) (excess) kurtosis


      jStat.kurtosis = function kurtosis(arr) {
        return jStat.stanMoment(arr, 4) - 3;
      };

      var jProto = jStat.prototype; // Extend jProto with method for calculating cumulative sums and products.
      // This differs from the similar extension below as cumsum and cumprod should
      // not be run again in the case fullbool === true.
      // If a matrix is passed, automatically assume operation should be done on the
      // columns.

      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) {
          (function (passfunc) {
            // If a matrix is passed, automatically assume operation should be done on
            // the columns.
            jProto[passfunc] = function (fullbool, func) {
              var arr = [];
              var i = 0;
              var tmpthis = this; // Assignment reassignation depending on how parameters were passed in.

              if (isFunction(fullbool)) {
                func = fullbool;
                fullbool = false;
              } // Check if a callback was passed with the function.


              if (func) {
                setTimeout(function () {
                  func.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool));
                });
                return this;
              } // Check if matrix and run calculations.


              if (this.length > 1) {
                tmpthis = fullbool === true ? this : this.transpose();

                for (; i < tmpthis.length; i++) {
                  arr[i] = jStat[passfunc](tmpthis[i]);
                }

                return arr;
              } // Pass fullbool if only vector, not a matrix. for variance and stdev.


              return jStat[passfunc](this[0], fullbool);
            };
          })(funcs[i]);
        }
      })('cumsum cumprod'.split(' ')); // Extend jProto with methods which don't require arguments and work on columns.


      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) {
          (function (passfunc) {
            // If a matrix is passed, automatically assume operation should be done on
            // the columns.
            jProto[passfunc] = function (fullbool, func) {
              var arr = [];
              var i = 0;
              var tmpthis = this; // Assignment reassignation depending on how parameters were passed in.

              if (isFunction(fullbool)) {
                func = fullbool;
                fullbool = false;
              } // Check if a callback was passed with the function.


              if (func) {
                setTimeout(function () {
                  func.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool));
                });
                return this;
              } // Check if matrix and run calculations.


              if (this.length > 1) {
                if (passfunc !== 'sumrow') tmpthis = fullbool === true ? this : this.transpose();

                for (; i < tmpthis.length; i++) {
                  arr[i] = jStat[passfunc](tmpthis[i]);
                }

                return fullbool === true ? jStat[passfunc](jStat.utils.toVector(arr)) : arr;
              } // Pass fullbool if only vector, not a matrix. for variance and stdev.


              return jStat[passfunc](this[0], fullbool);
            };
          })(funcs[i]);
        }
      })(('sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr ' + 'geomean median diff rank mode range variance deviation stdev meandev ' + 'meddev coeffvar quartiles histogram skewness kurtosis').split(' ')); // Extend jProto with functions that take arguments. Operations on matrices are
      // done on columns.


      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) {
          (function (passfunc) {
            jProto[passfunc] = function () {
              var arr = [];
              var i = 0;
              var tmpthis = this;
              var args = Array.prototype.slice.call(arguments);
              var callbackFunction; // If the last argument is a function, we assume it's a callback; we
              // strip the callback out and call the function again.

              if (isFunction(args[args.length - 1])) {
                callbackFunction = args[args.length - 1];
                var argsToPass = args.slice(0, args.length - 1);
                setTimeout(function () {
                  callbackFunction.call(tmpthis, jProto[passfunc].apply(tmpthis, argsToPass));
                });
                return this; // Otherwise we curry the function args and call normally.
              } else {
                callbackFunction = undefined;

                var curriedFunction = function curriedFunction(vector) {
                  return jStat[passfunc].apply(tmpthis, [vector].concat(args));
                };
              } // If this is a matrix, run column-by-column.


              if (this.length > 1) {
                tmpthis = tmpthis.transpose();

                for (; i < tmpthis.length; i++) {
                  arr[i] = curriedFunction(tmpthis[i]);
                }

                return arr;
              } // Otherwise run on the vector.


              return curriedFunction(this[0]);
            };
          })(funcs[i]);
        }
      })('quantiles percentileOfScore'.split(' '));
    })(jStat, Math); // Special functions //


    (function (jStat, Math) {
      // Log-gamma function
      jStat.gammaln = function gammaln(x) {
        var j = 0;
        var cof = [76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5];
        var ser = 1.000000000190015;
        var xx, y, tmp;
        tmp = (y = xx = x) + 5.5;
        tmp -= (xx + 0.5) * Math.log(tmp);

        for (; j < 6; j++) {
          ser += cof[j] / ++y;
        }

        return Math.log(2.5066282746310005 * ser / xx) - tmp;
      };
      /*
       * log-gamma function to support poisson distribution sampling. The
       * algorithm comes from SPECFUN by Shanjie Zhang and Jianming Jin and their
       * book "Computation of Special Functions", 1996, John Wiley & Sons, Inc.
       */


      jStat.loggam = function loggam(x) {
        var x0, x2, xp, gl, gl0;
        var k, n;
        var a = [8.333333333333333e-02, -2.777777777777778e-03, 7.936507936507937e-04, -5.952380952380952e-04, 8.417508417508418e-04, -1.917526917526918e-03, 6.410256410256410e-03, -2.955065359477124e-02, 1.796443723688307e-01, -1.39243221690590e+00];
        x0 = x;
        n = 0;

        if (x == 1.0 || x == 2.0) {
          return 0.0;
        }

        if (x <= 7.0) {
          n = Math.floor(7 - x);
          x0 = x + n;
        }

        x2 = 1.0 / (x0 * x0);
        xp = 2 * Math.PI;
        gl0 = a[9];

        for (k = 8; k >= 0; k--) {
          gl0 *= x2;
          gl0 += a[k];
        }

        gl = gl0 / x0 + 0.5 * Math.log(xp) + (x0 - 0.5) * Math.log(x0) - x0;

        if (x <= 7.0) {
          for (k = 1; k <= n; k++) {
            gl -= Math.log(x0 - 1.0);
            x0 -= 1.0;
          }
        }

        return gl;
      }; // gamma of x


      jStat.gammafn = function gammafn(x) {
        var p = [-1.716185138865495, 24.76565080557592, -379.80425647094563, 629.3311553128184, 866.9662027904133, -31451.272968848367, -36144.413418691176, 66456.14382024054];
        var q = [-30.8402300119739, 315.35062697960416, -1015.1563674902192, -3107.771671572311, 22538.118420980151, 4755.8462775278811, -134659.9598649693, -115132.2596755535];
        var fact = false;
        var n = 0;
        var xden = 0;
        var xnum = 0;
        var y = x;
        var i, z, yi, res;

        if (x > 171.6243769536076) {
          return Infinity;
        }

        if (y <= 0) {
          res = y % 1 + 3.6e-16;

          if (res) {
            fact = (!(y & 1) ? 1 : -1) * Math.PI / Math.sin(Math.PI * res);
            y = 1 - y;
          } else {
            return Infinity;
          }
        }

        yi = y;

        if (y < 1) {
          z = y++;
        } else {
          z = (y -= n = (y | 0) - 1) - 1;
        }

        for (i = 0; i < 8; ++i) {
          xnum = (xnum + p[i]) * z;
          xden = xden * z + q[i];
        }

        res = xnum / xden + 1;

        if (yi < y) {
          res /= yi;
        } else if (yi > y) {
          for (i = 0; i < n; ++i) {
            res *= y;
            y++;
          }
        }

        if (fact) {
          res = fact / res;
        }

        return res;
      }; // lower incomplete gamma function, which is usually typeset with a
      // lower-case greek gamma as the function symbol


      jStat.gammap = function gammap(a, x) {
        return jStat.lowRegGamma(a, x) * jStat.gammafn(a);
      }; // The lower regularized incomplete gamma function, usually written P(a,x)


      jStat.lowRegGamma = function lowRegGamma(a, x) {
        var aln = jStat.gammaln(a);
        var ap = a;
        var sum = 1 / a;
        var del = sum;
        var b = x + 1 - a;
        var c = 1 / 1.0e-30;
        var d = 1 / b;
        var h = d;
        var i = 1; // calculate maximum number of itterations required for a

        var ITMAX = -~(Math.log(a >= 1 ? a : 1 / a) * 8.5 + a * 0.4 + 17);
        var an;

        if (x < 0 || a <= 0) {
          return NaN;
        } else if (x < a + 1) {
          for (; i <= ITMAX; i++) {
            sum += del *= x / ++ap;
          }

          return sum * Math.exp(-x + a * Math.log(x) - aln);
        }

        for (; i <= ITMAX; i++) {
          an = -i * (i - a);
          b += 2;
          d = an * d + b;
          c = b + an / c;
          d = 1 / d;
          h *= d * c;
        }

        return 1 - h * Math.exp(-x + a * Math.log(x) - aln);
      }; // natural log factorial of n


      jStat.factorialln = function factorialln(n) {
        return n < 0 ? NaN : jStat.gammaln(n + 1);
      }; // factorial of n


      jStat.factorial = function factorial(n) {
        return n < 0 ? NaN : jStat.gammafn(n + 1);
      }; // combinations of n, m


      jStat.combination = function combination(n, m) {
        // make sure n or m don't exceed the upper limit of usable values
        return n > 170 || m > 170 ? Math.exp(jStat.combinationln(n, m)) : jStat.factorial(n) / jStat.factorial(m) / jStat.factorial(n - m);
      };

      jStat.combinationln = function combinationln(n, m) {
        return jStat.factorialln(n) - jStat.factorialln(m) - jStat.factorialln(n - m);
      }; // permutations of n, m


      jStat.permutation = function permutation(n, m) {
        return jStat.factorial(n) / jStat.factorial(n - m);
      }; // beta function


      jStat.betafn = function betafn(x, y) {
        // ensure arguments are positive
        if (x <= 0 || y <= 0) return undefined; // make sure x + y doesn't exceed the upper limit of usable values

        return x + y > 170 ? Math.exp(jStat.betaln(x, y)) : jStat.gammafn(x) * jStat.gammafn(y) / jStat.gammafn(x + y);
      }; // natural logarithm of beta function


      jStat.betaln = function betaln(x, y) {
        return jStat.gammaln(x) + jStat.gammaln(y) - jStat.gammaln(x + y);
      }; // Evaluates the continued fraction for incomplete beta function by modified
      // Lentz's method.


      jStat.betacf = function betacf(x, a, b) {
        var fpmin = 1e-30;
        var m = 1;
        var qab = a + b;
        var qap = a + 1;
        var qam = a - 1;
        var c = 1;
        var d = 1 - qab * x / qap;
        var m2, aa, del, h; // These q's will be used in factors that occur in the coefficients

        if (Math.abs(d) < fpmin) d = fpmin;
        d = 1 / d;
        h = d;

        for (; m <= 100; m++) {
          m2 = 2 * m;
          aa = m * (b - m) * x / ((qam + m2) * (a + m2)); // One step (the even one) of the recurrence

          d = 1 + aa * d;
          if (Math.abs(d) < fpmin) d = fpmin;
          c = 1 + aa / c;
          if (Math.abs(c) < fpmin) c = fpmin;
          d = 1 / d;
          h *= d * c;
          aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2)); // Next step of the recurrence (the odd one)

          d = 1 + aa * d;
          if (Math.abs(d) < fpmin) d = fpmin;
          c = 1 + aa / c;
          if (Math.abs(c) < fpmin) c = fpmin;
          d = 1 / d;
          del = d * c;
          h *= del;
          if (Math.abs(del - 1.0) < 3e-7) break;
        }

        return h;
      }; // Returns the inverse of the lower regularized inomplete gamma function


      jStat.gammapinv = function gammapinv(p, a) {
        var j = 0;
        var a1 = a - 1;
        var EPS = 1e-8;
        var gln = jStat.gammaln(a);
        var x, err, t, u, pp, lna1, afac;
        if (p >= 1) return Math.max(100, a + 100 * Math.sqrt(a));
        if (p <= 0) return 0;

        if (a > 1) {
          lna1 = Math.log(a1);
          afac = Math.exp(a1 * (lna1 - 1) - gln);
          pp = p < 0.5 ? p : 1 - p;
          t = Math.sqrt(-2 * Math.log(pp));
          x = (2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t;
          if (p < 0.5) x = -x;
          x = Math.max(1e-3, a * Math.pow(1 - 1 / (9 * a) - x / (3 * Math.sqrt(a)), 3));
        } else {
          t = 1 - a * (0.253 + a * 0.12);
          if (p < t) x = Math.pow(p / t, 1 / a);else x = 1 - Math.log(1 - (p - t) / (1 - t));
        }

        for (; j < 12; j++) {
          if (x <= 0) return 0;
          err = jStat.lowRegGamma(a, x) - p;
          if (a > 1) t = afac * Math.exp(-(x - a1) + a1 * (Math.log(x) - lna1));else t = Math.exp(-x + a1 * Math.log(x) - gln);
          u = err / t;
          x -= t = u / (1 - 0.5 * Math.min(1, u * ((a - 1) / x - 1)));
          if (x <= 0) x = 0.5 * (x + t);
          if (Math.abs(t) < EPS * x) break;
        }

        return x;
      }; // Returns the error function erf(x)


      jStat.erf = function erf(x) {
        var cof = [-1.3026537197817094, 6.4196979235649026e-1, 1.9476473204185836e-2, -9.561514786808631e-3, -9.46595344482036e-4, 3.66839497852761e-4, 4.2523324806907e-5, -2.0278578112534e-5, -1.624290004647e-6, 1.303655835580e-6, 1.5626441722e-8, -8.5238095915e-8, 6.529054439e-9, 5.059343495e-9, -9.91364156e-10, -2.27365122e-10, 9.6467911e-11, 2.394038e-12, -6.886027e-12, 8.94487e-13, 3.13092e-13, -1.12708e-13, 3.81e-16, 7.106e-15, -1.523e-15, -9.4e-17, 1.21e-16, -2.8e-17];
        var j = cof.length - 1;
        var isneg = false;
        var d = 0;
        var dd = 0;
        var t, ty, tmp, res;

        if (x < 0) {
          x = -x;
          isneg = true;
        }

        t = 2 / (2 + x);
        ty = 4 * t - 2;

        for (; j > 0; j--) {
          tmp = d;
          d = ty * d - dd + cof[j];
          dd = tmp;
        }

        res = t * Math.exp(-x * x + 0.5 * (cof[0] + ty * d) - dd);
        return isneg ? res - 1 : 1 - res;
      }; // Returns the complmentary error function erfc(x)


      jStat.erfc = function erfc(x) {
        return 1 - jStat.erf(x);
      }; // Returns the inverse of the complementary error function


      jStat.erfcinv = function erfcinv(p) {
        var j = 0;
        var x, err, t, pp;
        if (p >= 2) return -100;
        if (p <= 0) return 100;
        pp = p < 1 ? p : 2 - p;
        t = Math.sqrt(-2 * Math.log(pp / 2));
        x = -0.70711 * ((2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t);

        for (; j < 2; j++) {
          err = jStat.erfc(x) - pp;
          x += err / (1.12837916709551257 * Math.exp(-x * x) - x * err);
        }

        return p < 1 ? x : -x;
      }; // Returns the inverse of the incomplete beta function


      jStat.ibetainv = function ibetainv(p, a, b) {
        var EPS = 1e-8;
        var a1 = a - 1;
        var b1 = b - 1;
        var j = 0;
        var lna, lnb, pp, t, u, err, x, al, h, w, afac;
        if (p <= 0) return 0;
        if (p >= 1) return 1;

        if (a >= 1 && b >= 1) {
          pp = p < 0.5 ? p : 1 - p;
          t = Math.sqrt(-2 * Math.log(pp));
          x = (2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t;
          if (p < 0.5) x = -x;
          al = (x * x - 3) / 6;
          h = 2 / (1 / (2 * a - 1) + 1 / (2 * b - 1));
          w = x * Math.sqrt(al + h) / h - (1 / (2 * b - 1) - 1 / (2 * a - 1)) * (al + 5 / 6 - 2 / (3 * h));
          x = a / (a + b * Math.exp(2 * w));
        } else {
          lna = Math.log(a / (a + b));
          lnb = Math.log(b / (a + b));
          t = Math.exp(a * lna) / a;
          u = Math.exp(b * lnb) / b;
          w = t + u;
          if (p < t / w) x = Math.pow(a * w * p, 1 / a);else x = 1 - Math.pow(b * w * (1 - p), 1 / b);
        }

        afac = -jStat.gammaln(a) - jStat.gammaln(b) + jStat.gammaln(a + b);

        for (; j < 10; j++) {
          if (x === 0 || x === 1) return x;
          err = jStat.ibeta(x, a, b) - p;
          t = Math.exp(a1 * Math.log(x) + b1 * Math.log(1 - x) + afac);
          u = err / t;
          x -= t = u / (1 - 0.5 * Math.min(1, u * (a1 / x - b1 / (1 - x))));
          if (x <= 0) x = 0.5 * (x + t);
          if (x >= 1) x = 0.5 * (x + t + 1);
          if (Math.abs(t) < EPS * x && j > 0) break;
        }

        return x;
      }; // Returns the incomplete beta function I_x(a,b)


      jStat.ibeta = function ibeta(x, a, b) {
        // Factors in front of the continued fraction.
        var bt = x === 0 || x === 1 ? 0 : Math.exp(jStat.gammaln(a + b) - jStat.gammaln(a) - jStat.gammaln(b) + a * Math.log(x) + b * Math.log(1 - x));
        if (x < 0 || x > 1) return false;
        if (x < (a + 1) / (a + b + 2)) // Use continued fraction directly.
          return bt * jStat.betacf(x, a, b) / a; // else use continued fraction after making the symmetry transformation.

        return 1 - bt * jStat.betacf(1 - x, b, a) / b;
      }; // Returns a normal deviate (mu=0, sigma=1).
      // If n and m are specified it returns a object of normal deviates.


      jStat.randn = function randn(n, m) {
        var u, v, x, y, q;
        if (!m) m = n;
        if (n) return jStat.create(n, m, function () {
          return jStat.randn();
        });

        do {
          u = jStat._random_fn();
          v = 1.7156 * (jStat._random_fn() - 0.5);
          x = u - 0.449871;
          y = Math.abs(v) + 0.386595;
          q = x * x + y * (0.19600 * y - 0.25472 * x);
        } while (q > 0.27597 && (q > 0.27846 || v * v > -4 * Math.log(u) * u * u));

        return v / u;
      }; // Returns a gamma deviate by the method of Marsaglia and Tsang.


      jStat.randg = function randg(shape, n, m) {
        var oalph = shape;
        var a1, a2, u, v, x, mat;
        if (!m) m = n;
        if (!shape) shape = 1;

        if (n) {
          mat = jStat.zeros(n, m);
          mat.alter(function () {
            return jStat.randg(shape);
          });
          return mat;
        }

        if (shape < 1) shape += 1;
        a1 = shape - 1 / 3;
        a2 = 1 / Math.sqrt(9 * a1);

        do {
          do {
            x = jStat.randn();
            v = 1 + a2 * x;
          } while (v <= 0);

          v = v * v * v;
          u = jStat._random_fn();
        } while (u > 1 - 0.331 * Math.pow(x, 4) && Math.log(u) > 0.5 * x * x + a1 * (1 - v + Math.log(v))); // alpha > 1


        if (shape == oalph) return a1 * v; // alpha < 1

        do {
          u = jStat._random_fn();
        } while (u === 0);

        return Math.pow(u, 1 / oalph) * a1 * v;
      }; // making use of static methods on the instance


      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) {
          (function (passfunc) {
            jStat.fn[passfunc] = function () {
              return jStat(jStat.map(this, function (value) {
                return jStat[passfunc](value);
              }));
            };
          })(funcs[i]);
        }
      })('gammaln gammafn factorial factorialln'.split(' '));

      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) {
          (function (passfunc) {
            jStat.fn[passfunc] = function () {
              return jStat(jStat[passfunc].apply(null, arguments));
            };
          })(funcs[i]);
        }
      })('randn'.split(' '));
    })(jStat, Math);

    (function (jStat, Math) {
      // generate all distribution instance methods
      (function (list) {
        for (var i = 0; i < list.length; i++) {
          (function (func) {
            // distribution instance method
            jStat[func] = function f(a, b, c) {
              if (!(this instanceof f)) return new f(a, b, c);
              this._a = a;
              this._b = b;
              this._c = c;
              return this;
            }; // distribution method to be used on a jStat instance


            jStat.fn[func] = function (a, b, c) {
              var newthis = jStat[func](a, b, c);
              newthis.data = this;
              return newthis;
            }; // sample instance method


            jStat[func].prototype.sample = function (arr) {
              var a = this._a;
              var b = this._b;
              var c = this._c;
              if (arr) return jStat.alter(arr, function () {
                return jStat[func].sample(a, b, c);
              });else return jStat[func].sample(a, b, c);
            }; // generate the pdf, cdf and inv instance methods


            (function (vals) {
              for (var i = 0; i < vals.length; i++) {
                (function (fnfunc) {
                  jStat[func].prototype[fnfunc] = function (x) {
                    var a = this._a;
                    var b = this._b;
                    var c = this._c;
                    if (!x && x !== 0) x = this.data;

                    if (typeof x !== 'number') {
                      return jStat.fn.map.call(x, function (x) {
                        return jStat[func][fnfunc](x, a, b, c);
                      });
                    }

                    return jStat[func][fnfunc](x, a, b, c);
                  };
                })(vals[i]);
              }
            })('pdf cdf inv'.split(' ')); // generate the mean, median, mode and variance instance methods


            (function (vals) {
              for (var i = 0; i < vals.length; i++) {
                (function (fnfunc) {
                  jStat[func].prototype[fnfunc] = function () {
                    return jStat[func][fnfunc](this._a, this._b, this._c);
                  };
                })(vals[i]);
              }
            })('mean median mode variance'.split(' '));
          })(list[i]);
        }
      })(('beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy ' + 'laplace lognormal noncentralt normal pareto studentt weibull uniform ' + 'binomial negbin hypgeom poisson triangular tukey arcsine').split(' ')); // extend beta function with static methods


      jStat.extend(jStat.beta, {
        pdf: function pdf(x, alpha, beta) {
          // PDF is zero outside the support
          if (x > 1 || x < 0) return 0; // PDF is one for the uniform case

          if (alpha == 1 && beta == 1) return 1;

          if (alpha < 512 && beta < 512) {
            return Math.pow(x, alpha - 1) * Math.pow(1 - x, beta - 1) / jStat.betafn(alpha, beta);
          } else {
            return Math.exp((alpha - 1) * Math.log(x) + (beta - 1) * Math.log(1 - x) - jStat.betaln(alpha, beta));
          }
        },
        cdf: function cdf(x, alpha, beta) {
          return x > 1 || x < 0 ? (x > 1) * 1 : jStat.ibeta(x, alpha, beta);
        },
        inv: function inv(x, alpha, beta) {
          return jStat.ibetainv(x, alpha, beta);
        },
        mean: function mean(alpha, beta) {
          return alpha / (alpha + beta);
        },
        median: function median(alpha, beta) {
          return jStat.ibetainv(0.5, alpha, beta);
        },
        mode: function mode(alpha, beta) {
          return (alpha - 1) / (alpha + beta - 2);
        },
        // return a random sample
        sample: function sample(alpha, beta) {
          var u = jStat.randg(alpha);
          return u / (u + jStat.randg(beta));
        },
        variance: function variance(alpha, beta) {
          return alpha * beta / (Math.pow(alpha + beta, 2) * (alpha + beta + 1));
        }
      }); // extend F function with static methods

      jStat.extend(jStat.centralF, {
        // This implementation of the pdf function avoids float overflow
        // See the way that R calculates this value:
        // https://svn.r-project.org/R/trunk/src/nmath/df.c
        pdf: function pdf(x, df1, df2) {
          var p, q, f;
          if (x < 0) return 0;

          if (df1 <= 2) {
            if (x === 0 && df1 < 2) {
              return Infinity;
            }

            if (x === 0 && df1 === 2) {
              return 1;
            }

            return 1 / jStat.betafn(df1 / 2, df2 / 2) * Math.pow(df1 / df2, df1 / 2) * Math.pow(x, df1 / 2 - 1) * Math.pow(1 + df1 / df2 * x, -(df1 + df2) / 2);
          }

          p = df1 * x / (df2 + x * df1);
          q = df2 / (df2 + x * df1);
          f = df1 * q / 2.0;
          return f * jStat.binomial.pdf((df1 - 2) / 2, (df1 + df2 - 2) / 2, p);
        },
        cdf: function cdf(x, df1, df2) {
          if (x < 0) return 0;
          return jStat.ibeta(df1 * x / (df1 * x + df2), df1 / 2, df2 / 2);
        },
        inv: function inv(x, df1, df2) {
          return df2 / (df1 * (1 / jStat.ibetainv(x, df1 / 2, df2 / 2) - 1));
        },
        mean: function mean(df1, df2) {
          return df2 > 2 ? df2 / (df2 - 2) : undefined;
        },
        mode: function mode(df1, df2) {
          return df1 > 2 ? df2 * (df1 - 2) / (df1 * (df2 + 2)) : undefined;
        },
        // return a random sample
        sample: function sample(df1, df2) {
          var x1 = jStat.randg(df1 / 2) * 2;
          var x2 = jStat.randg(df2 / 2) * 2;
          return x1 / df1 / (x2 / df2);
        },
        variance: function variance(df1, df2) {
          if (df2 <= 4) return undefined;
          return 2 * df2 * df2 * (df1 + df2 - 2) / (df1 * (df2 - 2) * (df2 - 2) * (df2 - 4));
        }
      }); // extend cauchy function with static methods

      jStat.extend(jStat.cauchy, {
        pdf: function pdf(x, local, scale) {
          if (scale < 0) {
            return 0;
          }

          return scale / (Math.pow(x - local, 2) + Math.pow(scale, 2)) / Math.PI;
        },
        cdf: function cdf(x, local, scale) {
          return Math.atan((x - local) / scale) / Math.PI + 0.5;
        },
        inv: function inv(p, local, scale) {
          return local + scale * Math.tan(Math.PI * (p - 0.5));
        },
        median: function median(local
        /*, scale*/
        ) {
          return local;
        },
        mode: function mode(local
        /*, scale*/
        ) {
          return local;
        },
        sample: function sample(local, scale) {
          return jStat.randn() * Math.sqrt(1 / (2 * jStat.randg(0.5))) * scale + local;
        }
      }); // extend chisquare function with static methods

      jStat.extend(jStat.chisquare, {
        pdf: function pdf(x, dof) {
          if (x < 0) return 0;
          return x === 0 && dof === 2 ? 0.5 : Math.exp((dof / 2 - 1) * Math.log(x) - x / 2 - dof / 2 * Math.log(2) - jStat.gammaln(dof / 2));
        },
        cdf: function cdf(x, dof) {
          if (x < 0) return 0;
          return jStat.lowRegGamma(dof / 2, x / 2);
        },
        inv: function inv(p, dof) {
          return 2 * jStat.gammapinv(p, 0.5 * dof);
        },
        mean: function mean(dof) {
          return dof;
        },
        // TODO: this is an approximation (is there a better way?)
        median: function median(dof) {
          return dof * Math.pow(1 - 2 / (9 * dof), 3);
        },
        mode: function mode(dof) {
          return dof - 2 > 0 ? dof - 2 : 0;
        },
        sample: function sample(dof) {
          return jStat.randg(dof / 2) * 2;
        },
        variance: function variance(dof) {
          return 2 * dof;
        }
      }); // extend exponential function with static methods

      jStat.extend(jStat.exponential, {
        pdf: function pdf(x, rate) {
          return x < 0 ? 0 : rate * Math.exp(-rate * x);
        },
        cdf: function cdf(x, rate) {
          return x < 0 ? 0 : 1 - Math.exp(-rate * x);
        },
        inv: function inv(p, rate) {
          return -Math.log(1 - p) / rate;
        },
        mean: function mean(rate) {
          return 1 / rate;
        },
        median: function median(rate) {
          return 1 / rate * Math.log(2);
        },
        mode: function
          /*rate*/
        mode() {
          return 0;
        },
        sample: function sample(rate) {
          return -1 / rate * Math.log(jStat._random_fn());
        },
        variance: function variance(rate) {
          return Math.pow(rate, -2);
        }
      }); // extend gamma function with static methods

      jStat.extend(jStat.gamma, {
        pdf: function pdf(x, shape, scale) {
          if (x < 0) return 0;
          return x === 0 && shape === 1 ? 1 / scale : Math.exp((shape - 1) * Math.log(x) - x / scale - jStat.gammaln(shape) - shape * Math.log(scale));
        },
        cdf: function cdf(x, shape, scale) {
          if (x < 0) return 0;
          return jStat.lowRegGamma(shape, x / scale);
        },
        inv: function inv(p, shape, scale) {
          return jStat.gammapinv(p, shape) * scale;
        },
        mean: function mean(shape, scale) {
          return shape * scale;
        },
        mode: function mode(shape, scale) {
          if (shape > 1) return (shape - 1) * scale;
          return undefined;
        },
        sample: function sample(shape, scale) {
          return jStat.randg(shape) * scale;
        },
        variance: function variance(shape, scale) {
          return shape * scale * scale;
        }
      }); // extend inverse gamma function with static methods

      jStat.extend(jStat.invgamma, {
        pdf: function pdf(x, shape, scale) {
          if (x <= 0) return 0;
          return Math.exp(-(shape + 1) * Math.log(x) - scale / x - jStat.gammaln(shape) + shape * Math.log(scale));
        },
        cdf: function cdf(x, shape, scale) {
          if (x <= 0) return 0;
          return 1 - jStat.lowRegGamma(shape, scale / x);
        },
        inv: function inv(p, shape, scale) {
          return scale / jStat.gammapinv(1 - p, shape);
        },
        mean: function mean(shape, scale) {
          return shape > 1 ? scale / (shape - 1) : undefined;
        },
        mode: function mode(shape, scale) {
          return scale / (shape + 1);
        },
        sample: function sample(shape, scale) {
          return scale / jStat.randg(shape);
        },
        variance: function variance(shape, scale) {
          if (shape <= 2) return undefined;
          return scale * scale / ((shape - 1) * (shape - 1) * (shape - 2));
        }
      }); // extend kumaraswamy function with static methods

      jStat.extend(jStat.kumaraswamy, {
        pdf: function pdf(x, alpha, beta) {
          if (x === 0 && alpha === 1) return beta;else if (x === 1 && beta === 1) return alpha;
          return Math.exp(Math.log(alpha) + Math.log(beta) + (alpha - 1) * Math.log(x) + (beta - 1) * Math.log(1 - Math.pow(x, alpha)));
        },
        cdf: function cdf(x, alpha, beta) {
          if (x < 0) return 0;else if (x > 1) return 1;
          return 1 - Math.pow(1 - Math.pow(x, alpha), beta);
        },
        inv: function inv(p, alpha, beta) {
          return Math.pow(1 - Math.pow(1 - p, 1 / beta), 1 / alpha);
        },
        mean: function mean(alpha, beta) {
          return beta * jStat.gammafn(1 + 1 / alpha) * jStat.gammafn(beta) / jStat.gammafn(1 + 1 / alpha + beta);
        },
        median: function median(alpha, beta) {
          return Math.pow(1 - Math.pow(2, -1 / beta), 1 / alpha);
        },
        mode: function mode(alpha, beta) {
          if (!(alpha >= 1 && beta >= 1 && alpha !== 1 && beta !== 1)) return undefined;
          return Math.pow((alpha - 1) / (alpha * beta - 1), 1 / alpha);
        },
        variance: function
          /*alpha, beta*/
        variance() {
          throw new Error('variance not yet implemented'); // TODO: complete this
        }
      }); // extend lognormal function with static methods

      jStat.extend(jStat.lognormal, {
        pdf: function pdf(x, mu, sigma) {
          if (x <= 0) return 0;
          return Math.exp(-Math.log(x) - 0.5 * Math.log(2 * Math.PI) - Math.log(sigma) - Math.pow(Math.log(x) - mu, 2) / (2 * sigma * sigma));
        },
        cdf: function cdf(x, mu, sigma) {
          if (x < 0) return 0;
          return 0.5 + 0.5 * jStat.erf((Math.log(x) - mu) / Math.sqrt(2 * sigma * sigma));
        },
        inv: function inv(p, mu, sigma) {
          return Math.exp(-1.41421356237309505 * sigma * jStat.erfcinv(2 * p) + mu);
        },
        mean: function mean(mu, sigma) {
          return Math.exp(mu + sigma * sigma / 2);
        },
        median: function median(mu
        /*, sigma*/
        ) {
          return Math.exp(mu);
        },
        mode: function mode(mu, sigma) {
          return Math.exp(mu - sigma * sigma);
        },
        sample: function sample(mu, sigma) {
          return Math.exp(jStat.randn() * sigma + mu);
        },
        variance: function variance(mu, sigma) {
          return (Math.exp(sigma * sigma) - 1) * Math.exp(2 * mu + sigma * sigma);
        }
      }); // extend noncentralt function with static methods

      jStat.extend(jStat.noncentralt, {
        pdf: function pdf(x, dof, ncp) {
          var tol = 1e-14;
          if (Math.abs(ncp) < tol) // ncp approx 0; use student-t
            return jStat.studentt.pdf(x, dof);

          if (Math.abs(x) < tol) {
            // different formula for x == 0
            return Math.exp(jStat.gammaln((dof + 1) / 2) - ncp * ncp / 2 - 0.5 * Math.log(Math.PI * dof) - jStat.gammaln(dof / 2));
          } // formula for x != 0


          return dof / x * (jStat.noncentralt.cdf(x * Math.sqrt(1 + 2 / dof), dof + 2, ncp) - jStat.noncentralt.cdf(x, dof, ncp));
        },
        cdf: function cdf(x, dof, ncp) {
          var tol = 1e-14;
          var min_iterations = 200;
          if (Math.abs(ncp) < tol) // ncp approx 0; use student-t
            return jStat.studentt.cdf(x, dof); // turn negative x into positive and flip result afterwards

          var flip = false;

          if (x < 0) {
            flip = true;
            ncp = -ncp;
          }

          var prob = jStat.normal.cdf(-ncp, 0, 1);
          var value = tol + 1; // use value at last two steps to determine convergence

          var lastvalue = value;
          var y = x * x / (x * x + dof);
          var j = 0;
          var p = Math.exp(-ncp * ncp / 2);
          var q = Math.exp(-ncp * ncp / 2 - 0.5 * Math.log(2) - jStat.gammaln(3 / 2)) * ncp;

          while (j < min_iterations || lastvalue > tol || value > tol) {
            lastvalue = value;

            if (j > 0) {
              p *= ncp * ncp / (2 * j);
              q *= ncp * ncp / (2 * (j + 1 / 2));
            }

            value = p * jStat.beta.cdf(y, j + 0.5, dof / 2) + q * jStat.beta.cdf(y, j + 1, dof / 2);
            prob += 0.5 * value;
            j++;
          }

          return flip ? 1 - prob : prob;
        }
      }); // extend normal function with static methods

      jStat.extend(jStat.normal, {
        pdf: function pdf(x, mean, std) {
          return Math.exp(-0.5 * Math.log(2 * Math.PI) - Math.log(std) - Math.pow(x - mean, 2) / (2 * std * std));
        },
        cdf: function cdf(x, mean, std) {
          return 0.5 * (1 + jStat.erf((x - mean) / Math.sqrt(2 * std * std)));
        },
        inv: function inv(p, mean, std) {
          return -1.41421356237309505 * std * jStat.erfcinv(2 * p) + mean;
        },
        mean: function mean(_mean
        /*, std*/
        ) {
          return _mean;
        },
        median: function median(mean
        /*, std*/
        ) {
          return mean;
        },
        mode: function mode(mean
        /*, std*/
        ) {
          return mean;
        },
        sample: function sample(mean, std) {
          return jStat.randn() * std + mean;
        },
        variance: function variance(mean, std) {
          return std * std;
        }
      }); // extend pareto function with static methods

      jStat.extend(jStat.pareto, {
        pdf: function pdf(x, scale, shape) {
          if (x < scale) return 0;
          return shape * Math.pow(scale, shape) / Math.pow(x, shape + 1);
        },
        cdf: function cdf(x, scale, shape) {
          if (x < scale) return 0;
          return 1 - Math.pow(scale / x, shape);
        },
        inv: function inv(p, scale, shape) {
          return scale / Math.pow(1 - p, 1 / shape);
        },
        mean: function mean(scale, shape) {
          if (shape <= 1) return undefined;
          return shape * Math.pow(scale, shape) / (shape - 1);
        },
        median: function median(scale, shape) {
          return scale * (shape * Math.SQRT2);
        },
        mode: function mode(scale
        /*, shape*/
        ) {
          return scale;
        },
        variance: function variance(scale, shape) {
          if (shape <= 2) return undefined;
          return scale * scale * shape / (Math.pow(shape - 1, 2) * (shape - 2));
        }
      }); // extend studentt function with static methods

      jStat.extend(jStat.studentt, {
        pdf: function pdf(x, dof) {
          dof = dof > 1e100 ? 1e100 : dof;
          return 1 / (Math.sqrt(dof) * jStat.betafn(0.5, dof / 2)) * Math.pow(1 + x * x / dof, -((dof + 1) / 2));
        },
        cdf: function cdf(x, dof) {
          var dof2 = dof / 2;
          return jStat.ibeta((x + Math.sqrt(x * x + dof)) / (2 * Math.sqrt(x * x + dof)), dof2, dof2);
        },
        inv: function inv(p, dof) {
          var x = jStat.ibetainv(2 * Math.min(p, 1 - p), 0.5 * dof, 0.5);
          x = Math.sqrt(dof * (1 - x) / x);
          return p > 0.5 ? x : -x;
        },
        mean: function mean(dof) {
          return dof > 1 ? 0 : undefined;
        },
        median: function
          /*dof*/
        median() {
          return 0;
        },
        mode: function
          /*dof*/
        mode() {
          return 0;
        },
        sample: function sample(dof) {
          return jStat.randn() * Math.sqrt(dof / (2 * jStat.randg(dof / 2)));
        },
        variance: function variance(dof) {
          return dof > 2 ? dof / (dof - 2) : dof > 1 ? Infinity : undefined;
        }
      }); // extend weibull function with static methods

      jStat.extend(jStat.weibull, {
        pdf: function pdf(x, scale, shape) {
          if (x < 0 || scale < 0 || shape < 0) return 0;
          return shape / scale * Math.pow(x / scale, shape - 1) * Math.exp(-Math.pow(x / scale, shape));
        },
        cdf: function cdf(x, scale, shape) {
          return x < 0 ? 0 : 1 - Math.exp(-Math.pow(x / scale, shape));
        },
        inv: function inv(p, scale, shape) {
          return scale * Math.pow(-Math.log(1 - p), 1 / shape);
        },
        mean: function mean(scale, shape) {
          return scale * jStat.gammafn(1 + 1 / shape);
        },
        median: function median(scale, shape) {
          return scale * Math.pow(Math.log(2), 1 / shape);
        },
        mode: function mode(scale, shape) {
          if (shape <= 1) return 0;
          return scale * Math.pow((shape - 1) / shape, 1 / shape);
        },
        sample: function sample(scale, shape) {
          return scale * Math.pow(-Math.log(jStat._random_fn()), 1 / shape);
        },
        variance: function variance(scale, shape) {
          return scale * scale * jStat.gammafn(1 + 2 / shape) - Math.pow(jStat.weibull.mean(scale, shape), 2);
        }
      }); // extend uniform function with static methods

      jStat.extend(jStat.uniform, {
        pdf: function pdf(x, a, b) {
          return x < a || x > b ? 0 : 1 / (b - a);
        },
        cdf: function cdf(x, a, b) {
          if (x < a) return 0;else if (x < b) return (x - a) / (b - a);
          return 1;
        },
        inv: function inv(p, a, b) {
          return a + p * (b - a);
        },
        mean: function mean(a, b) {
          return 0.5 * (a + b);
        },
        median: function median(a, b) {
          return jStat.mean(a, b);
        },
        mode: function
          /*a, b*/
        mode() {
          throw new Error('mode is not yet implemented');
        },
        sample: function sample(a, b) {
          return a / 2 + b / 2 + (b / 2 - a / 2) * (2 * jStat._random_fn() - 1);
        },
        variance: function variance(a, b) {
          return Math.pow(b - a, 2) / 12;
        }
      }); // Got this from http://www.math.ucla.edu/~tom/distributions/binomial.html

      function betinc(x, a, b, eps) {
        var a0 = 0;
        var b0 = 1;
        var a1 = 1;
        var b1 = 1;
        var m9 = 0;
        var a2 = 0;
        var c9;

        while (Math.abs((a1 - a2) / a1) > eps) {
          a2 = a1;
          c9 = -(a + m9) * (a + b + m9) * x / (a + 2 * m9) / (a + 2 * m9 + 1);
          a0 = a1 + c9 * a0;
          b0 = b1 + c9 * b0;
          m9 = m9 + 1;
          c9 = m9 * (b - m9) * x / (a + 2 * m9 - 1) / (a + 2 * m9);
          a1 = a0 + c9 * a1;
          b1 = b0 + c9 * b1;
          a0 = a0 / b1;
          b0 = b0 / b1;
          a1 = a1 / b1;
          b1 = 1;
        }

        return a1 / a;
      } // extend uniform function with static methods


      jStat.extend(jStat.binomial, {
        pdf: function pdf(k, n, p) {
          return p === 0 || p === 1 ? n * p === k ? 1 : 0 : jStat.combination(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
        },
        cdf: function cdf(x, n, p) {
          var betacdf;
          var eps = 1e-10;
          if (x < 0) return 0;
          if (x >= n) return 1;
          if (p < 0 || p > 1 || n <= 0) return NaN;
          x = Math.floor(x);
          var z = p;
          var a = x + 1;
          var b = n - x;
          var s = a + b;
          var bt = Math.exp(jStat.gammaln(s) - jStat.gammaln(b) - jStat.gammaln(a) + a * Math.log(z) + b * Math.log(1 - z));
          if (z < (a + 1) / (s + 2)) betacdf = bt * betinc(z, a, b, eps);else betacdf = 1 - bt * betinc(1 - z, b, a, eps);
          return Math.round((1 - betacdf) * (1 / eps)) / (1 / eps);
        }
      }); // extend uniform function with static methods

      jStat.extend(jStat.negbin, {
        pdf: function pdf(k, r, p) {
          if (k !== k >>> 0) return false;
          if (k < 0) return 0;
          return jStat.combination(k + r - 1, r - 1) * Math.pow(1 - p, k) * Math.pow(p, r);
        },
        cdf: function cdf(x, r, p) {
          var sum = 0,
              k = 0;
          if (x < 0) return 0;

          for (; k <= x; k++) {
            sum += jStat.negbin.pdf(k, r, p);
          }

          return sum;
        }
      }); // extend uniform function with static methods

      jStat.extend(jStat.hypgeom, {
        pdf: function pdf(k, N, m, n) {
          // Hypergeometric PDF.
          // A simplification of the CDF algorithm below.
          // k = number of successes drawn
          // N = population size
          // m = number of successes in population
          // n = number of items drawn from population
          if (k !== k | 0) {
            return false;
          } else if (k < 0 || k < m - (N - n)) {
            // It's impossible to have this few successes drawn.
            return 0;
          } else if (k > n || k > m) {
            // It's impossible to have this many successes drawn.
            return 0;
          } else if (m * 2 > N) {
            // More than half the population is successes.
            if (n * 2 > N) {
              // More than half the population is sampled.
              return jStat.hypgeom.pdf(N - m - n + k, N, N - m, N - n);
            } else {
              // Half or less of the population is sampled.
              return jStat.hypgeom.pdf(n - k, N, N - m, n);
            }
          } else if (n * 2 > N) {
            // Half or less is successes.
            return jStat.hypgeom.pdf(m - k, N, m, N - n);
          } else if (m < n) {
            // We want to have the number of things sampled to be less than the
            // successes available. So swap the definitions of successful and sampled.
            return jStat.hypgeom.pdf(k, N, n, m);
          } else {
            // If we get here, half or less of the population was sampled, half or
            // less of it was successes, and we had fewer sampled things than
            // successes. Now we can do this complicated iterative algorithm in an
            // efficient way.
            // The basic premise of the algorithm is that we partially normalize our
            // intermediate product to keep it in a numerically good region, and then
            // finish the normalization at the end.
            // This variable holds the scaled probability of the current number of
            // successes.
            var scaledPDF = 1; // This keeps track of how much we have normalized.

            var samplesDone = 0;

            for (var i = 0; i < k; i++) {
              // For every possible number of successes up to that observed...
              while (scaledPDF > 1 && samplesDone < n) {
                // Intermediate result is growing too big. Apply some of the
                // normalization to shrink everything.
                scaledPDF *= 1 - m / (N - samplesDone); // Say we've normalized by this sample already.

                samplesDone++;
              } // Work out the partially-normalized hypergeometric PDF for the next
              // number of successes


              scaledPDF *= (n - i) * (m - i) / ((i + 1) * (N - m - n + i + 1));
            }

            for (; samplesDone < n; samplesDone++) {
              // Apply all the rest of the normalization
              scaledPDF *= 1 - m / (N - samplesDone);
            } // Bound answer sanely before returning.


            return Math.min(1, Math.max(0, scaledPDF));
          }
        },
        cdf: function cdf(x, N, m, n) {
          // Hypergeometric CDF.
          // This algorithm is due to Prof. Thomas S. Ferguson, <tom@math.ucla.edu>,
          // and comes from his hypergeometric test calculator at
          // <http://www.math.ucla.edu/~tom/distributions/Hypergeometric.html>.
          // x = number of successes drawn
          // N = population size
          // m = number of successes in population
          // n = number of items drawn from population
          if (x < 0 || x < m - (N - n)) {
            // It's impossible to have this few successes drawn or fewer.
            return 0;
          } else if (x >= n || x >= m) {
            // We will always have this many successes or fewer.
            return 1;
          } else if (m * 2 > N) {
            // More than half the population is successes.
            if (n * 2 > N) {
              // More than half the population is sampled.
              return jStat.hypgeom.cdf(N - m - n + x, N, N - m, N - n);
            } else {
              // Half or less of the population is sampled.
              return 1 - jStat.hypgeom.cdf(n - x - 1, N, N - m, n);
            }
          } else if (n * 2 > N) {
            // Half or less is successes.
            return 1 - jStat.hypgeom.cdf(m - x - 1, N, m, N - n);
          } else if (m < n) {
            // We want to have the number of things sampled to be less than the
            // successes available. So swap the definitions of successful and sampled.
            return jStat.hypgeom.cdf(x, N, n, m);
          } else {
            // If we get here, half or less of the population was sampled, half or
            // less of it was successes, and we had fewer sampled things than
            // successes. Now we can do this complicated iterative algorithm in an
            // efficient way.
            // The basic premise of the algorithm is that we partially normalize our
            // intermediate sum to keep it in a numerically good region, and then
            // finish the normalization at the end.
            // Holds the intermediate, scaled total CDF.
            var scaledCDF = 1; // This variable holds the scaled probability of the current number of
            // successes.

            var scaledPDF = 1; // This keeps track of how much we have normalized.

            var samplesDone = 0;

            for (var i = 0; i < x; i++) {
              // For every possible number of successes up to that observed...
              while (scaledCDF > 1 && samplesDone < n) {
                // Intermediate result is growing too big. Apply some of the
                // normalization to shrink everything.
                var factor = 1 - m / (N - samplesDone);
                scaledPDF *= factor;
                scaledCDF *= factor; // Say we've normalized by this sample already.

                samplesDone++;
              } // Work out the partially-normalized hypergeometric PDF for the next
              // number of successes


              scaledPDF *= (n - i) * (m - i) / ((i + 1) * (N - m - n + i + 1)); // Add to the CDF answer.

              scaledCDF += scaledPDF;
            }

            for (; samplesDone < n; samplesDone++) {
              // Apply all the rest of the normalization
              scaledCDF *= 1 - m / (N - samplesDone);
            } // Bound answer sanely before returning.


            return Math.min(1, Math.max(0, scaledCDF));
          }
        }
      }); // extend uniform function with static methods

      jStat.extend(jStat.poisson, {
        pdf: function pdf(k, l) {
          if (l < 0 || k % 1 !== 0 || k < 0) {
            return 0;
          }

          return Math.pow(l, k) * Math.exp(-l) / jStat.factorial(k);
        },
        cdf: function cdf(x, l) {
          var sumarr = [],
              k = 0;
          if (x < 0) return 0;

          for (; k <= x; k++) {
            sumarr.push(jStat.poisson.pdf(k, l));
          }

          return jStat.sum(sumarr);
        },
        mean: function mean(l) {
          return l;
        },
        variance: function variance(l) {
          return l;
        },
        sampleSmall: function sampleSmall(l) {
          var p = 1,
              k = 0,
              L = Math.exp(-l);

          do {
            k++;
            p *= jStat._random_fn();
          } while (p > L);

          return k - 1;
        },
        sampleLarge: function sampleLarge(l) {
          var lam = l;
          var k;
          var U, V, slam, loglam, a, b, invalpha, vr, us;
          slam = Math.sqrt(lam);
          loglam = Math.log(lam);
          b = 0.931 + 2.53 * slam;
          a = -0.059 + 0.02483 * b;
          invalpha = 1.1239 + 1.1328 / (b - 3.4);
          vr = 0.9277 - 3.6224 / (b - 2);

          while (1) {
            U = Math.random() - 0.5;
            V = Math.random();
            us = 0.5 - Math.abs(U);
            k = Math.floor((2 * a / us + b) * U + lam + 0.43);

            if (us >= 0.07 && V <= vr) {
              return k;
            }

            if (k < 0 || us < 0.013 && V > us) {
              continue;
            }
            /* log(V) == log(0.0) ok here */

            /* if U==0.0 so that us==0.0, log is ok since always returns */


            if (Math.log(V) + Math.log(invalpha) - Math.log(a / (us * us) + b) <= -lam + k * loglam - jStat.loggam(k + 1)) {
              return k;
            }
          }
        },
        sample: function sample(l) {
          if (l < 10) return this.sampleSmall(l);else return this.sampleLarge(l);
        }
      }); // extend triangular function with static methods

      jStat.extend(jStat.triangular, {
        pdf: function pdf(x, a, b, c) {
          if (b <= a || c < a || c > b) {
            return NaN;
          } else {
            if (x < a || x > b) {
              return 0;
            } else if (x < c) {
              return 2 * (x - a) / ((b - a) * (c - a));
            } else if (x === c) {
              return 2 / (b - a);
            } else {
              // x > c
              return 2 * (b - x) / ((b - a) * (b - c));
            }
          }
        },
        cdf: function cdf(x, a, b, c) {
          if (b <= a || c < a || c > b) return NaN;
          if (x <= a) return 0;else if (x >= b) return 1;
          if (x <= c) return Math.pow(x - a, 2) / ((b - a) * (c - a));else // x > c
            return 1 - Math.pow(b - x, 2) / ((b - a) * (b - c));
        },
        inv: function inv(p, a, b, c) {
          if (b <= a || c < a || c > b) {
            return NaN;
          } else {
            if (p <= (c - a) / (b - a)) {
              return a + (b - a) * Math.sqrt(p * ((c - a) / (b - a)));
            } else {
              // p > ((c - a) / (b - a))
              return a + (b - a) * (1 - Math.sqrt((1 - p) * (1 - (c - a) / (b - a))));
            }
          }
        },
        mean: function mean(a, b, c) {
          return (a + b + c) / 3;
        },
        median: function median(a, b, c) {
          if (c <= (a + b) / 2) {
            return b - Math.sqrt((b - a) * (b - c)) / Math.sqrt(2);
          } else if (c > (a + b) / 2) {
            return a + Math.sqrt((b - a) * (c - a)) / Math.sqrt(2);
          }
        },
        mode: function mode(a, b, c) {
          return c;
        },
        sample: function sample(a, b, c) {
          var u = jStat._random_fn();

          if (u < (c - a) / (b - a)) return a + Math.sqrt(u * (b - a) * (c - a));
          return b - Math.sqrt((1 - u) * (b - a) * (b - c));
        },
        variance: function variance(a, b, c) {
          return (a * a + b * b + c * c - a * b - a * c - b * c) / 18;
        }
      }); // extend arcsine function with static methods

      jStat.extend(jStat.arcsine, {
        pdf: function pdf(x, a, b) {
          if (b <= a) return NaN;
          return x <= a || x >= b ? 0 : 2 / Math.PI * Math.pow(Math.pow(b - a, 2) - Math.pow(2 * x - a - b, 2), -0.5);
        },
        cdf: function cdf(x, a, b) {
          if (x < a) return 0;else if (x < b) return 2 / Math.PI * Math.asin(Math.sqrt((x - a) / (b - a)));
          return 1;
        },
        inv: function inv(p, a, b) {
          return a + (0.5 - 0.5 * Math.cos(Math.PI * p)) * (b - a);
        },
        mean: function mean(a, b) {
          if (b <= a) return NaN;
          return (a + b) / 2;
        },
        median: function median(a, b) {
          if (b <= a) return NaN;
          return (a + b) / 2;
        },
        mode: function
          /*a, b*/
        mode() {
          throw new Error('mode is not yet implemented');
        },
        sample: function sample(a, b) {
          return (a + b) / 2 + (b - a) / 2 * Math.sin(2 * Math.PI * jStat.uniform.sample(0, 1));
        },
        variance: function variance(a, b) {
          if (b <= a) return NaN;
          return Math.pow(b - a, 2) / 8;
        }
      });

      function laplaceSign(x) {
        return x / Math.abs(x);
      }

      jStat.extend(jStat.laplace, {
        pdf: function pdf(x, mu, b) {
          return b <= 0 ? 0 : Math.exp(-Math.abs(x - mu) / b) / (2 * b);
        },
        cdf: function cdf(x, mu, b) {
          if (b <= 0) {
            return 0;
          }

          if (x < mu) {
            return 0.5 * Math.exp((x - mu) / b);
          } else {
            return 1 - 0.5 * Math.exp(-(x - mu) / b);
          }
        },
        mean: function mean(mu
        /*, b*/
        ) {
          return mu;
        },
        median: function median(mu
        /*, b*/
        ) {
          return mu;
        },
        mode: function mode(mu
        /*, b*/
        ) {
          return mu;
        },
        variance: function variance(mu, b) {
          return 2 * b * b;
        },
        sample: function sample(mu, b) {
          var u = jStat._random_fn() - 0.5;
          return mu - b * laplaceSign(u) * Math.log(1 - 2 * Math.abs(u));
        }
      });

      function tukeyWprob(w, rr, cc) {
        var nleg = 12;
        var ihalf = 6;
        var C1 = -30;
        var C2 = -50;
        var C3 = 60;
        var bb = 8;
        var wlar = 3;
        var wincr1 = 2;
        var wincr2 = 3;
        var xleg = [0.981560634246719250690549090149, 0.904117256370474856678465866119, 0.769902674194304687036893833213, 0.587317954286617447296702418941, 0.367831498998180193752691536644, 0.125233408511468915472441369464];
        var aleg = [0.047175336386511827194615961485, 0.106939325995318430960254718194, 0.160078328543346226334652529543, 0.203167426723065921749064455810, 0.233492536538354808760849898925, 0.249147045813402785000562436043];
        var qsqz = w * 0.5; // if w >= 16 then the integral lower bound (occurs for c=20)
        // is 0.99999999999995 so return a value of 1.

        if (qsqz >= bb) return 1.0; // find (f(w/2) - 1) ^ cc
        // (first term in integral of hartley's form).

        var pr_w = 2 * jStat.normal.cdf(qsqz, 0, 1, 1, 0) - 1; // erf(qsqz / M_SQRT2)
        // if pr_w ^ cc < 2e-22 then set pr_w = 0

        if (pr_w >= Math.exp(C2 / cc)) pr_w = Math.pow(pr_w, cc);else pr_w = 0.0; // if w is large then the second component of the
        // integral is small, so fewer intervals are needed.

        var wincr;
        if (w > wlar) wincr = wincr1;else wincr = wincr2; // find the integral of second term of hartley's form
        // for the integral of the range for equal-length
        // intervals using legendre quadrature.  limits of
        // integration are from (w/2, 8).  two or three
        // equal-length intervals are used.
        // blb and bub are lower and upper limits of integration.

        var blb = qsqz;
        var binc = (bb - qsqz) / wincr;
        var bub = blb + binc;
        var einsum = 0.0; // integrate over each interval

        var cc1 = cc - 1.0;

        for (var wi = 1; wi <= wincr; wi++) {
          var elsum = 0.0;
          var a = 0.5 * (bub + blb); // legendre quadrature with order = nleg

          var b = 0.5 * (bub - blb);

          for (var jj = 1; jj <= nleg; jj++) {
            var j, xx;

            if (ihalf < jj) {
              j = nleg - jj + 1;
              xx = xleg[j - 1];
            } else {
              j = jj;
              xx = -xleg[j - 1];
            }

            var c = b * xx;
            var ac = a + c; // if exp(-qexpo/2) < 9e-14,
            // then doesn't contribute to integral

            var qexpo = ac * ac;
            if (qexpo > C3) break;
            var pplus = 2 * jStat.normal.cdf(ac, 0, 1, 1, 0);
            var pminus = 2 * jStat.normal.cdf(ac, w, 1, 1, 0); // if rinsum ^ (cc-1) < 9e-14,
            // then doesn't contribute to integral

            var rinsum = pplus * 0.5 - pminus * 0.5;

            if (rinsum >= Math.exp(C1 / cc1)) {
              rinsum = aleg[j - 1] * Math.exp(-(0.5 * qexpo)) * Math.pow(rinsum, cc1);
              elsum += rinsum;
            }
          }

          elsum *= 2.0 * b * cc / Math.sqrt(2 * Math.PI);
          einsum += elsum;
          blb = bub;
          bub += binc;
        } // if pr_w ^ rr < 9e-14, then return 0


        pr_w += einsum;
        if (pr_w <= Math.exp(C1 / rr)) return 0;
        pr_w = Math.pow(pr_w, rr);
        if (pr_w >= 1) // 1 was iMax was eps
          return 1;
        return pr_w;
      }

      function tukeyQinv(p, c, v) {
        var p0 = 0.322232421088;
        var q0 = 0.993484626060e-01;
        var p1 = -1.0;
        var q1 = 0.588581570495;
        var p2 = -0.342242088547;
        var q2 = 0.531103462366;
        var p3 = -0.204231210125;
        var q3 = 0.103537752850;
        var p4 = -0.453642210148e-04;
        var q4 = 0.38560700634e-02;
        var c1 = 0.8832;
        var c2 = 0.2368;
        var c3 = 1.214;
        var c4 = 1.208;
        var c5 = 1.4142;
        var vmax = 120.0;
        var ps = 0.5 - 0.5 * p;
        var yi = Math.sqrt(Math.log(1.0 / (ps * ps)));
        var t = yi + ((((yi * p4 + p3) * yi + p2) * yi + p1) * yi + p0) / ((((yi * q4 + q3) * yi + q2) * yi + q1) * yi + q0);
        if (v < vmax) t += (t * t * t + t) / v / 4.0;
        var q = c1 - c2 * t;
        if (v < vmax) q += -c3 / v + c4 * t / v;
        return t * (q * Math.log(c - 1.0) + c5);
      }

      jStat.extend(jStat.tukey, {
        cdf: function cdf(q, nmeans, df) {
          // Identical implementation as the R ptukey() function as of commit 68947
          var rr = 1;
          var cc = nmeans;
          var nlegq = 16;
          var ihalfq = 8;
          var eps1 = -30.0;
          var eps2 = 1.0e-14;
          var dhaf = 100.0;
          var dquar = 800.0;
          var deigh = 5000.0;
          var dlarg = 25000.0;
          var ulen1 = 1.0;
          var ulen2 = 0.5;
          var ulen3 = 0.25;
          var ulen4 = 0.125;
          var xlegq = [0.989400934991649932596154173450, 0.944575023073232576077988415535, 0.865631202387831743880467897712, 0.755404408355003033895101194847, 0.617876244402643748446671764049, 0.458016777657227386342419442984, 0.281603550779258913230460501460, 0.950125098376374401853193354250e-1];
          var alegq = [0.271524594117540948517805724560e-1, 0.622535239386478928628438369944e-1, 0.951585116824927848099251076022e-1, 0.124628971255533872052476282192, 0.149595988816576732081501730547, 0.169156519395002538189312079030, 0.182603415044923588866763667969, 0.189450610455068496285396723208];
          if (q <= 0) return 0; // df must be > 1
          // there must be at least two values

          if (df < 2 || rr < 1 || cc < 2) return NaN;
          if (!Number.isFinite(q)) return 1;
          if (df > dlarg) return tukeyWprob(q, rr, cc); // calculate leading constant

          var f2 = df * 0.5;
          var f2lf = f2 * Math.log(df) - df * Math.log(2) - jStat.gammaln(f2);
          var f21 = f2 - 1.0; // integral is divided into unit, half-unit, quarter-unit, or
          // eighth-unit length intervals depending on the value of the
          // degrees of freedom.

          var ff4 = df * 0.25;
          var ulen;
          if (df <= dhaf) ulen = ulen1;else if (df <= dquar) ulen = ulen2;else if (df <= deigh) ulen = ulen3;else ulen = ulen4;
          f2lf += Math.log(ulen); // integrate over each subinterval

          var ans = 0.0;

          for (var i = 1; i <= 50; i++) {
            var otsum = 0.0; // legendre quadrature with order = nlegq
            // nodes (stored in xlegq) are symmetric around zero.

            var twa1 = (2 * i - 1) * ulen;

            for (var jj = 1; jj <= nlegq; jj++) {
              var j, t1;

              if (ihalfq < jj) {
                j = jj - ihalfq - 1;
                t1 = f2lf + f21 * Math.log(twa1 + xlegq[j] * ulen) - (xlegq[j] * ulen + twa1) * ff4;
              } else {
                j = jj - 1;
                t1 = f2lf + f21 * Math.log(twa1 - xlegq[j] * ulen) + (xlegq[j] * ulen - twa1) * ff4;
              } // if exp(t1) < 9e-14, then doesn't contribute to integral


              var qsqz;

              if (t1 >= eps1) {
                if (ihalfq < jj) {
                  qsqz = q * Math.sqrt((xlegq[j] * ulen + twa1) * 0.5);
                } else {
                  qsqz = q * Math.sqrt((-(xlegq[j] * ulen) + twa1) * 0.5);
                } // call wprob to find integral of range portion


                var wprb = tukeyWprob(qsqz, rr, cc);
                var rotsum = wprb * alegq[j] * Math.exp(t1);
                otsum += rotsum;
              } // end legendre integral for interval i
              // L200:

            } // if integral for interval i < 1e-14, then stop.
            // However, in order to avoid small area under left tail,
            // at least  1 / ulen  intervals are calculated.


            if (i * ulen >= 1.0 && otsum <= eps2) break; // end of interval i
            // L330:

            ans += otsum;
          }

          if (otsum > eps2) {
            // not converged
            throw new Error('tukey.cdf failed to converge');
          }

          if (ans > 1) ans = 1;
          return ans;
        },
        inv: function inv(p, nmeans, df) {
          // Identical implementation as the R qtukey() function as of commit 68947
          var rr = 1;
          var cc = nmeans;
          var eps = 0.0001;
          var maxiter = 50; // df must be > 1 ; there must be at least two values

          if (df < 2 || rr < 1 || cc < 2) return NaN;
          if (p < 0 || p > 1) return NaN;
          if (p === 0) return 0;
          if (p === 1) return Infinity; // Initial value

          var x0 = tukeyQinv(p, cc, df); // Find prob(value < x0)

          var valx0 = jStat.tukey.cdf(x0, nmeans, df) - p; // Find the second iterate and prob(value < x1).
          // If the first iterate has probability value
          // exceeding p then second iterate is 1 less than
          // first iterate; otherwise it is 1 greater.

          var x1;
          if (valx0 > 0.0) x1 = Math.max(0.0, x0 - 1.0);else x1 = x0 + 1.0;
          var valx1 = jStat.tukey.cdf(x1, nmeans, df) - p; // Find new iterate

          var ans;

          for (var iter = 1; iter < maxiter; iter++) {
            ans = x1 - valx1 * (x1 - x0) / (valx1 - valx0);
            valx0 = valx1; // New iterate must be >= 0

            x0 = x1;

            if (ans < 0.0) {
              ans = 0.0;
              valx1 = -p;
            } // Find prob(value < new iterate)


            valx1 = jStat.tukey.cdf(ans, nmeans, df) - p;
            x1 = ans; // If the difference between two successive
            // iterates is less than eps, stop

            var xabs = Math.abs(x1 - x0);
            if (xabs < eps) return ans;
          }

          throw new Error('tukey.inv failed to converge');
        }
      });
    })(jStat, Math);
    /* Provides functions for the solution of linear system of equations, integration, extrapolation,
     * interpolation, eigenvalue problems, differential equations and PCA analysis. */


    (function (jStat, Math) {
      var push = Array.prototype.push;
      var isArray = jStat.utils.isArray;

      function isUsable(arg) {
        return isArray(arg) || arg instanceof jStat;
      }

      jStat.extend({
        // add a vector/matrix to a vector/matrix or scalar
        add: function add(arr, arg) {
          // check if arg is a vector or scalar
          if (isUsable(arg)) {
            if (!isUsable(arg[0])) arg = [arg];
            return jStat.map(arr, function (value, row, col) {
              return value + arg[row][col];
            });
          }

          return jStat.map(arr, function (value) {
            return value + arg;
          });
        },
        // subtract a vector or scalar from the vector
        subtract: function subtract(arr, arg) {
          // check if arg is a vector or scalar
          if (isUsable(arg)) {
            if (!isUsable(arg[0])) arg = [arg];
            return jStat.map(arr, function (value, row, col) {
              return value - arg[row][col] || 0;
            });
          }

          return jStat.map(arr, function (value) {
            return value - arg;
          });
        },
        // matrix division
        divide: function divide(arr, arg) {
          if (isUsable(arg)) {
            if (!isUsable(arg[0])) arg = [arg];
            return jStat.multiply(arr, jStat.inv(arg));
          }

          return jStat.map(arr, function (value) {
            return value / arg;
          });
        },
        // matrix multiplication
        multiply: function multiply(arr, arg) {
          var row, col, nrescols, sum, nrow, ncol, res, rescols; // eg: arr = 2 arg = 3 -> 6 for res[0][0] statement closure

          if (arr.length === undefined && arg.length === undefined) {
            return arr * arg;
          }

          nrow = arr.length, ncol = arr[0].length, res = jStat.zeros(nrow, nrescols = isUsable(arg) ? arg[0].length : ncol), rescols = 0;

          if (isUsable(arg)) {
            for (; rescols < nrescols; rescols++) {
              for (row = 0; row < nrow; row++) {
                sum = 0;

                for (col = 0; col < ncol; col++) {
                  sum += arr[row][col] * arg[col][rescols];
                }

                res[row][rescols] = sum;
              }
            }

            return nrow === 1 && rescols === 1 ? res[0][0] : res;
          }

          return jStat.map(arr, function (value) {
            return value * arg;
          });
        },
        // outer([1,2,3],[4,5,6])
        // ===
        // [[1],[2],[3]] times [[4,5,6]]
        // ->
        // [[4,5,6],[8,10,12],[12,15,18]]
        outer: function outer(A, B) {
          return jStat.multiply(A.map(function (t) {
            return [t];
          }), [B]);
        },
        // Returns the dot product of two matricies
        dot: function dot(arr, arg) {
          if (!isUsable(arr[0])) arr = [arr];
          if (!isUsable(arg[0])) arg = [arg]; // convert column to row vector

          var left = arr[0].length === 1 && arr.length !== 1 ? jStat.transpose(arr) : arr,
              right = arg[0].length === 1 && arg.length !== 1 ? jStat.transpose(arg) : arg,
              res = [],
              row = 0,
              nrow = left.length,
              ncol = left[0].length,
              sum,
              col;

          for (; row < nrow; row++) {
            res[row] = [];
            sum = 0;

            for (col = 0; col < ncol; col++) {
              sum += left[row][col] * right[row][col];
            }

            res[row] = sum;
          }

          return res.length === 1 ? res[0] : res;
        },
        // raise every element by a scalar
        pow: function pow(arr, arg) {
          return jStat.map(arr, function (value) {
            return Math.pow(value, arg);
          });
        },
        // exponentiate every element
        exp: function exp(arr) {
          return jStat.map(arr, function (value) {
            return Math.exp(value);
          });
        },
        // generate the natural log of every element
        log: function exp(arr) {
          return jStat.map(arr, function (value) {
            return Math.log(value);
          });
        },
        // generate the absolute values of the vector
        abs: function abs(arr) {
          return jStat.map(arr, function (value) {
            return Math.abs(value);
          });
        },
        // computes the p-norm of the vector
        // In the case that a matrix is passed, uses the first row as the vector
        norm: function norm(arr, p) {
          var nnorm = 0,
              i = 0; // check the p-value of the norm, and set for most common case

          if (isNaN(p)) p = 2; // check if multi-dimensional array, and make vector correction

          if (isUsable(arr[0])) arr = arr[0]; // vector norm

          for (; i < arr.length; i++) {
            nnorm += Math.pow(Math.abs(arr[i]), p);
          }

          return Math.pow(nnorm, 1 / p);
        },
        // computes the angle between two vectors in rads
        // In case a matrix is passed, this uses the first row as the vector
        angle: function angle(arr, arg) {
          return Math.acos(jStat.dot(arr, arg) / (jStat.norm(arr) * jStat.norm(arg)));
        },
        // augment one matrix by another
        // Note: this function returns a matrix, not a jStat object
        aug: function aug(a, b) {
          var newarr = [];
          var i;

          for (i = 0; i < a.length; i++) {
            newarr.push(a[i].slice());
          }

          for (i = 0; i < newarr.length; i++) {
            push.apply(newarr[i], b[i]);
          }

          return newarr;
        },
        // The inv() function calculates the inverse of a matrix
        // Create the inverse by augmenting the matrix by the identity matrix of the
        // appropriate size, and then use G-J elimination on the augmented matrix.
        inv: function inv(a) {
          var rows = a.length;
          var cols = a[0].length;
          var b = jStat.identity(rows, cols);
          var c = jStat.gauss_jordan(a, b);
          var result = [];
          var i = 0;
          var j; //We need to copy the inverse portion to a new matrix to rid G-J artifacts

          for (; i < rows; i++) {
            result[i] = [];

            for (j = cols; j < c[0].length; j++) {
              result[i][j - cols] = c[i][j];
            }
          }

          return result;
        },
        // calculate the determinant of a matrix
        det: function det(a) {
          var alen = a.length,
              alend = alen * 2,
              vals = new Array(alend),
              rowshift = alen - 1,
              colshift = alend - 1,
              mrow = rowshift - alen + 1,
              mcol = colshift,
              i = 0,
              result = 0,
              j; // check for special 2x2 case

          if (alen === 2) {
            return a[0][0] * a[1][1] - a[0][1] * a[1][0];
          }

          for (; i < alend; i++) {
            vals[i] = 1;
          }

          for (i = 0; i < alen; i++) {
            for (j = 0; j < alen; j++) {
              vals[mrow < 0 ? mrow + alen : mrow] *= a[i][j];
              vals[mcol < alen ? mcol + alen : mcol] *= a[i][j];
              mrow++;
              mcol--;
            }

            mrow = --rowshift - alen + 1;
            mcol = --colshift;
          }

          for (i = 0; i < alen; i++) {
            result += vals[i];
          }

          for (; i < alend; i++) {
            result -= vals[i];
          }

          return result;
        },
        gauss_elimination: function gauss_elimination(a, b) {
          var i = 0,
              j = 0,
              n = a.length,
              m = a[0].length,
              factor = 1,
              sum = 0,
              x = [],
              maug,
              pivot,
              temp,
              k;
          a = jStat.aug(a, b);
          maug = a[0].length;

          for (i = 0; i < n; i++) {
            pivot = a[i][i];
            j = i;

            for (k = i + 1; k < m; k++) {
              if (pivot < Math.abs(a[k][i])) {
                pivot = a[k][i];
                j = k;
              }
            }

            if (j != i) {
              for (k = 0; k < maug; k++) {
                temp = a[i][k];
                a[i][k] = a[j][k];
                a[j][k] = temp;
              }
            }

            for (j = i + 1; j < n; j++) {
              factor = a[j][i] / a[i][i];

              for (k = i; k < maug; k++) {
                a[j][k] = a[j][k] - factor * a[i][k];
              }
            }
          }

          for (i = n - 1; i >= 0; i--) {
            sum = 0;

            for (j = i + 1; j <= n - 1; j++) {
              sum = sum + x[j] * a[i][j];
            }

            x[i] = (a[i][maug - 1] - sum) / a[i][i];
          }

          return x;
        },
        gauss_jordan: function gauss_jordan(a, b) {
          var m = jStat.aug(a, b);
          var h = m.length;
          var w = m[0].length;
          var c = 0;
          var x, y, y2; // find max pivot

          for (y = 0; y < h; y++) {
            var maxrow = y;

            for (y2 = y + 1; y2 < h; y2++) {
              if (Math.abs(m[y2][y]) > Math.abs(m[maxrow][y])) maxrow = y2;
            }

            var tmp = m[y];
            m[y] = m[maxrow];
            m[maxrow] = tmp;

            for (y2 = y + 1; y2 < h; y2++) {
              c = m[y2][y] / m[y][y];

              for (x = y; x < w; x++) {
                m[y2][x] -= m[y][x] * c;
              }
            }
          } // backsubstitute


          for (y = h - 1; y >= 0; y--) {
            c = m[y][y];

            for (y2 = 0; y2 < y; y2++) {
              for (x = w - 1; x > y - 1; x--) {
                m[y2][x] -= m[y][x] * m[y2][y] / c;
              }
            }

            m[y][y] /= c;

            for (x = h; x < w; x++) {
              m[y][x] /= c;
            }
          }

          return m;
        },
        // solve equation
        // Ax=b
        // A is upper triangular matrix
        // A=[[1,2,3],[0,4,5],[0,6,7]]
        // b=[1,2,3]
        // triaUpSolve(A,b) // -> [2.666,0.1666,1.666]
        // if you use matrix style
        // A=[[1,2,3],[0,4,5],[0,6,7]]
        // b=[[1],[2],[3]]
        // will return [[2.666],[0.1666],[1.666]]
        triaUpSolve: function triaUpSolve(A, b) {
          var size = A[0].length;
          var x = jStat.zeros(1, size)[0];
          var parts;
          var matrix_mode = false;

          if (b[0].length != undefined) {
            b = b.map(function (i) {
              return i[0];
            });
            matrix_mode = true;
          }

          jStat.arange(size - 1, -1, -1).forEach(function (i) {
            parts = jStat.arange(i + 1, size).map(function (j) {
              return x[j] * A[i][j];
            });
            x[i] = (b[i] - jStat.sum(parts)) / A[i][i];
          });
          if (matrix_mode) return x.map(function (i) {
            return [i];
          });
          return x;
        },
        triaLowSolve: function triaLowSolve(A, b) {
          // like to triaUpSolve but A is lower triangular matrix
          var size = A[0].length;
          var x = jStat.zeros(1, size)[0];
          var parts;
          var matrix_mode = false;

          if (b[0].length != undefined) {
            b = b.map(function (i) {
              return i[0];
            });
            matrix_mode = true;
          }

          jStat.arange(size).forEach(function (i) {
            parts = jStat.arange(i).map(function (j) {
              return A[i][j] * x[j];
            });
            x[i] = (b[i] - jStat.sum(parts)) / A[i][i];
          });
          if (matrix_mode) return x.map(function (i) {
            return [i];
          });
          return x;
        },
        // A -> [L,U]
        // A=LU
        // L is lower triangular matrix
        // U is upper triangular matrix
        lu: function lu(A) {
          var size = A.length; //var L=jStat.diagonal(jStat.ones(1,size)[0]);

          var L = jStat.identity(size);
          var R = jStat.zeros(A.length, A[0].length);
          var parts;
          jStat.arange(size).forEach(function (t) {
            R[0][t] = A[0][t];
          });
          jStat.arange(1, size).forEach(function (l) {
            jStat.arange(l).forEach(function (i) {
              parts = jStat.arange(i).map(function (jj) {
                return L[l][jj] * R[jj][i];
              });
              L[l][i] = (A[l][i] - jStat.sum(parts)) / R[i][i];
            });
            jStat.arange(l, size).forEach(function (j) {
              parts = jStat.arange(l).map(function (jj) {
                return L[l][jj] * R[jj][j];
              });
              R[l][j] = A[parts.length][j] - jStat.sum(parts);
            });
          });
          return [L, R];
        },
        // A -> T
        // A=TT'
        // T is lower triangular matrix
        cholesky: function cholesky(A) {
          var size = A.length;
          var T = jStat.zeros(A.length, A[0].length);
          var parts;
          jStat.arange(size).forEach(function (i) {
            parts = jStat.arange(i).map(function (t) {
              return Math.pow(T[i][t], 2);
            });
            T[i][i] = Math.sqrt(A[i][i] - jStat.sum(parts));
            jStat.arange(i + 1, size).forEach(function (j) {
              parts = jStat.arange(i).map(function (t) {
                return T[i][t] * T[j][t];
              });
              T[j][i] = (A[i][j] - jStat.sum(parts)) / T[i][i];
            });
          });
          return T;
        },
        gauss_jacobi: function gauss_jacobi(a, b, x, r) {
          var i = 0;
          var j = 0;
          var n = a.length;
          var l = [];
          var u = [];
          var d = [];
          var xv, c, h, xk;

          for (; i < n; i++) {
            l[i] = [];
            u[i] = [];
            d[i] = [];

            for (j = 0; j < n; j++) {
              if (i > j) {
                l[i][j] = a[i][j];
                u[i][j] = d[i][j] = 0;
              } else if (i < j) {
                u[i][j] = a[i][j];
                l[i][j] = d[i][j] = 0;
              } else {
                d[i][j] = a[i][j];
                l[i][j] = u[i][j] = 0;
              }
            }
          }

          h = jStat.multiply(jStat.multiply(jStat.inv(d), jStat.add(l, u)), -1);
          c = jStat.multiply(jStat.inv(d), b);
          xv = x;
          xk = jStat.add(jStat.multiply(h, x), c);
          i = 2;

          while (Math.abs(jStat.norm(jStat.subtract(xk, xv))) > r) {
            xv = xk;
            xk = jStat.add(jStat.multiply(h, xv), c);
            i++;
          }

          return xk;
        },
        gauss_seidel: function gauss_seidel(a, b, x, r) {
          var i = 0;
          var n = a.length;
          var l = [];
          var u = [];
          var d = [];
          var j, xv, c, h, xk;

          for (; i < n; i++) {
            l[i] = [];
            u[i] = [];
            d[i] = [];

            for (j = 0; j < n; j++) {
              if (i > j) {
                l[i][j] = a[i][j];
                u[i][j] = d[i][j] = 0;
              } else if (i < j) {
                u[i][j] = a[i][j];
                l[i][j] = d[i][j] = 0;
              } else {
                d[i][j] = a[i][j];
                l[i][j] = u[i][j] = 0;
              }
            }
          }

          h = jStat.multiply(jStat.multiply(jStat.inv(jStat.add(d, l)), u), -1);
          c = jStat.multiply(jStat.inv(jStat.add(d, l)), b);
          xv = x;
          xk = jStat.add(jStat.multiply(h, x), c);
          i = 2;

          while (Math.abs(jStat.norm(jStat.subtract(xk, xv))) > r) {
            xv = xk;
            xk = jStat.add(jStat.multiply(h, xv), c);
            i = i + 1;
          }

          return xk;
        },
        SOR: function SOR(a, b, x, r, w) {
          var i = 0;
          var n = a.length;
          var l = [];
          var u = [];
          var d = [];
          var j, xv, c, h, xk;

          for (; i < n; i++) {
            l[i] = [];
            u[i] = [];
            d[i] = [];

            for (j = 0; j < n; j++) {
              if (i > j) {
                l[i][j] = a[i][j];
                u[i][j] = d[i][j] = 0;
              } else if (i < j) {
                u[i][j] = a[i][j];
                l[i][j] = d[i][j] = 0;
              } else {
                d[i][j] = a[i][j];
                l[i][j] = u[i][j] = 0;
              }
            }
          }

          h = jStat.multiply(jStat.inv(jStat.add(d, jStat.multiply(l, w))), jStat.subtract(jStat.multiply(d, 1 - w), jStat.multiply(u, w)));
          c = jStat.multiply(jStat.multiply(jStat.inv(jStat.add(d, jStat.multiply(l, w))), b), w);
          xv = x;
          xk = jStat.add(jStat.multiply(h, x), c);
          i = 2;

          while (Math.abs(jStat.norm(jStat.subtract(xk, xv))) > r) {
            xv = xk;
            xk = jStat.add(jStat.multiply(h, xv), c);
            i++;
          }

          return xk;
        },
        householder: function householder(a) {
          var m = a.length;
          var n = a[0].length;
          var i = 0;
          var w = [];
          var p = [];
          var alpha, r, k, j, factor;

          for (; i < m - 1; i++) {
            alpha = 0;

            for (j = i + 1; j < n; j++) {
              alpha += a[j][i] * a[j][i];
            }

            factor = a[i + 1][i] > 0 ? -1 : 1;
            alpha = factor * Math.sqrt(alpha);
            r = Math.sqrt((alpha * alpha - a[i + 1][i] * alpha) / 2);
            w = jStat.zeros(m, 1);
            w[i + 1][0] = (a[i + 1][i] - alpha) / (2 * r);

            for (k = i + 2; k < m; k++) {
              w[k][0] = a[k][i] / (2 * r);
            }

            p = jStat.subtract(jStat.identity(m, n), jStat.multiply(jStat.multiply(w, jStat.transpose(w)), 2));
            a = jStat.multiply(p, jStat.multiply(a, p));
          }

          return a;
        },
        // A -> [Q,R]
        // Q is orthogonal matrix
        // R is upper triangular
        QR: function () {
          // x -> Q
          // find a orthogonal matrix Q st.
          // Qx=y
          // y is [||x||,0,0,...]
          // quick ref
          var sum = jStat.sum;
          var range = jStat.arange;

          function qr2(x) {
            // quick impletation
            // https://www.stat.wisc.edu/~larget/math496/qr.html
            var n = x.length;
            var p = x[0].length;
            var r = jStat.zeros(p, p);
            x = jStat.copy(x);
            var i, j, k;

            for (j = 0; j < p; j++) {
              r[j][j] = Math.sqrt(sum(range(n).map(function (i) {
                return x[i][j] * x[i][j];
              })));

              for (i = 0; i < n; i++) {
                x[i][j] = x[i][j] / r[j][j];
              }

              for (k = j + 1; k < p; k++) {
                r[j][k] = sum(range(n).map(function (i) {
                  return x[i][j] * x[i][k];
                }));

                for (i = 0; i < n; i++) {
                  x[i][k] = x[i][k] - x[i][j] * r[j][k];
                }
              }
            }

            return [x, r];
          }

          return qr2;
        }(),
        lstsq: function () {
          // solve least squard problem for Ax=b as QR decomposition way if b is
          // [[b1],[b2],[b3]] form will return [[x1],[x2],[x3]] array form solution
          // else b is [b1,b2,b3] form will return [x1,x2,x3] array form solution
          function R_I(A) {
            A = jStat.copy(A);
            var size = A.length;
            var I = jStat.identity(size);
            jStat.arange(size - 1, -1, -1).forEach(function (i) {
              jStat.sliceAssign(I, {
                row: i
              }, jStat.divide(jStat.slice(I, {
                row: i
              }), A[i][i]));
              jStat.sliceAssign(A, {
                row: i
              }, jStat.divide(jStat.slice(A, {
                row: i
              }), A[i][i]));
              jStat.arange(i).forEach(function (j) {
                var c = jStat.multiply(A[j][i], -1);
                var Aj = jStat.slice(A, {
                  row: j
                });
                var cAi = jStat.multiply(jStat.slice(A, {
                  row: i
                }), c);
                jStat.sliceAssign(A, {
                  row: j
                }, jStat.add(Aj, cAi));
                var Ij = jStat.slice(I, {
                  row: j
                });
                var cIi = jStat.multiply(jStat.slice(I, {
                  row: i
                }), c);
                jStat.sliceAssign(I, {
                  row: j
                }, jStat.add(Ij, cIi));
              });
            });
            return I;
          }

          function qr_solve(A, b) {
            var array_mode = false;

            if (b[0].length === undefined) {
              // [c1,c2,c3] mode
              b = b.map(function (x) {
                return [x];
              });
              array_mode = true;
            }

            var QR = jStat.QR(A);
            var Q = QR[0];
            var R = QR[1];
            var attrs = A[0].length;
            var Q1 = jStat.slice(Q, {
              col: {
                end: attrs
              }
            });
            var R1 = jStat.slice(R, {
              row: {
                end: attrs
              }
            });
            var RI = R_I(R1);
            var Q2 = jStat.transpose(Q1);

            if (Q2[0].length === undefined) {
              Q2 = [Q2]; // The confusing jStat.multifly implementation threat nature process again.
            }

            var x = jStat.multiply(jStat.multiply(RI, Q2), b);

            if (x.length === undefined) {
              x = [[x]]; // The confusing jStat.multifly implementation threat nature process again.
            }

            if (array_mode) return x.map(function (i) {
              return i[0];
            });
            return x;
          }

          return qr_solve;
        }(),
        jacobi: function jacobi(a) {
          var condition = 1;
          var n = a.length;
          var e = jStat.identity(n, n);
          var ev = [];
          var b, i, j, p, q, maxim, theta, s; // condition === 1 only if tolerance is not reached

          while (condition === 1) {
            maxim = a[0][1];
            p = 0;
            q = 1;

            for (i = 0; i < n; i++) {
              for (j = 0; j < n; j++) {
                if (i != j) {
                  if (maxim < Math.abs(a[i][j])) {
                    maxim = Math.abs(a[i][j]);
                    p = i;
                    q = j;
                  }
                }
              }
            }

            if (a[p][p] === a[q][q]) theta = a[p][q] > 0 ? Math.PI / 4 : -Math.PI / 4;else theta = Math.atan(2 * a[p][q] / (a[p][p] - a[q][q])) / 2;
            s = jStat.identity(n, n);
            s[p][p] = Math.cos(theta);
            s[p][q] = -Math.sin(theta);
            s[q][p] = Math.sin(theta);
            s[q][q] = Math.cos(theta); // eigen vector matrix

            e = jStat.multiply(e, s);
            b = jStat.multiply(jStat.multiply(jStat.inv(s), a), s);
            a = b;
            condition = 0;

            for (i = 1; i < n; i++) {
              for (j = 1; j < n; j++) {
                if (i != j && Math.abs(a[i][j]) > 0.001) {
                  condition = 1;
                }
              }
            }
          }

          for (i = 0; i < n; i++) {
            ev.push(a[i][i]);
          } //returns both the eigenvalue and eigenmatrix


          return [e, ev];
        },
        rungekutta: function rungekutta(f, h, p, t_j, u_j, order) {
          var k1, k2, u_j1, k3, k4;

          if (order === 2) {
            while (t_j <= p) {
              k1 = h * f(t_j, u_j);
              k2 = h * f(t_j + h, u_j + k1);
              u_j1 = u_j + (k1 + k2) / 2;
              u_j = u_j1;
              t_j = t_j + h;
            }
          }

          if (order === 4) {
            while (t_j <= p) {
              k1 = h * f(t_j, u_j);
              k2 = h * f(t_j + h / 2, u_j + k1 / 2);
              k3 = h * f(t_j + h / 2, u_j + k2 / 2);
              k4 = h * f(t_j + h, u_j + k3);
              u_j1 = u_j + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
              u_j = u_j1;
              t_j = t_j + h;
            }
          }

          return u_j;
        },
        romberg: function romberg(f, a, b, order) {
          var i = 0;
          var h = (b - a) / 2;
          var x = [];
          var h1 = [];
          var g = [];
          var m, a1, j, k, I;

          while (i < order / 2) {
            I = f(a);

            for (j = a, k = 0; j <= b; j = j + h, k++) {
              x[k] = j;
            }

            m = x.length;

            for (j = 1; j < m - 1; j++) {
              I += (j % 2 !== 0 ? 4 : 2) * f(x[j]);
            }

            I = h / 3 * (I + f(b));
            g[i] = I;
            h /= 2;
            i++;
          }

          a1 = g.length;
          m = 1;

          while (a1 !== 1) {
            for (j = 0; j < a1 - 1; j++) {
              h1[j] = (Math.pow(4, m) * g[j + 1] - g[j]) / (Math.pow(4, m) - 1);
            }

            a1 = h1.length;
            g = h1;
            h1 = [];
            m++;
          }

          return g;
        },
        richardson: function richardson(X, f, x, h) {
          function pos(X, x) {
            var i = 0;
            var n = X.length;
            var p;

            for (; i < n; i++) {
              if (X[i] === x) p = i;
            }

            return p;
          }

          var h_min = Math.abs(x - X[pos(X, x) + 1]);
          var i = 0;
          var g = [];
          var h1 = [];
          var y1, y2, m, a, j;

          while (h >= h_min) {
            y1 = pos(X, x + h);
            y2 = pos(X, x);
            g[i] = (f[y1] - 2 * f[y2] + f[2 * y2 - y1]) / (h * h);
            h /= 2;
            i++;
          }

          a = g.length;
          m = 1;

          while (a != 1) {
            for (j = 0; j < a - 1; j++) {
              h1[j] = (Math.pow(4, m) * g[j + 1] - g[j]) / (Math.pow(4, m) - 1);
            }

            a = h1.length;
            g = h1;
            h1 = [];
            m++;
          }

          return g;
        },
        simpson: function simpson(f, a, b, n) {
          var h = (b - a) / n;
          var I = f(a);
          var x = [];
          var j = a;
          var k = 0;
          var i = 1;
          var m;

          for (; j <= b; j = j + h, k++) {
            x[k] = j;
          }

          m = x.length;

          for (; i < m - 1; i++) {
            I += (i % 2 !== 0 ? 4 : 2) * f(x[i]);
          }

          return h / 3 * (I + f(b));
        },
        hermite: function hermite(X, F, dF, value) {
          var n = X.length;
          var p = 0;
          var i = 0;
          var l = [];
          var dl = [];
          var A = [];
          var B = [];
          var j;

          for (; i < n; i++) {
            l[i] = 1;

            for (j = 0; j < n; j++) {
              if (i != j) l[i] *= (value - X[j]) / (X[i] - X[j]);
            }

            dl[i] = 0;

            for (j = 0; j < n; j++) {
              if (i != j) dl[i] += 1 / (X[i] - X[j]);
            }

            A[i] = (1 - 2 * (value - X[i]) * dl[i]) * (l[i] * l[i]);
            B[i] = (value - X[i]) * (l[i] * l[i]);
            p += A[i] * F[i] + B[i] * dF[i];
          }

          return p;
        },
        lagrange: function lagrange(X, F, value) {
          var p = 0;
          var i = 0;
          var j, l;
          var n = X.length;

          for (; i < n; i++) {
            l = F[i];

            for (j = 0; j < n; j++) {
              // calculating the lagrange polynomial L_i
              if (i != j) l *= (value - X[j]) / (X[i] - X[j]);
            } // adding the lagrange polynomials found above


            p += l;
          }

          return p;
        },
        cubic_spline: function cubic_spline(X, F, value) {
          var n = X.length;
          var i = 0,
              j;
          var A = [];
          var B = [];
          var alpha = [];
          var c = [];
          var h = [];
          var b = [];
          var d = [];

          for (; i < n - 1; i++) {
            h[i] = X[i + 1] - X[i];
          }

          alpha[0] = 0;

          for (i = 1; i < n - 1; i++) {
            alpha[i] = 3 / h[i] * (F[i + 1] - F[i]) - 3 / h[i - 1] * (F[i] - F[i - 1]);
          }

          for (i = 1; i < n - 1; i++) {
            A[i] = [];
            B[i] = [];
            A[i][i - 1] = h[i - 1];
            A[i][i] = 2 * (h[i - 1] + h[i]);
            A[i][i + 1] = h[i];
            B[i][0] = alpha[i];
          }

          c = jStat.multiply(jStat.inv(A), B);

          for (j = 0; j < n - 1; j++) {
            b[j] = (F[j + 1] - F[j]) / h[j] - h[j] * (c[j + 1][0] + 2 * c[j][0]) / 3;
            d[j] = (c[j + 1][0] - c[j][0]) / (3 * h[j]);
          }

          for (j = 0; j < n; j++) {
            if (X[j] > value) break;
          }

          j -= 1;
          return F[j] + (value - X[j]) * b[j] + jStat.sq(value - X[j]) * c[j] + (value - X[j]) * jStat.sq(value - X[j]) * d[j];
        },
        gauss_quadrature: function gauss_quadrature() {
          throw new Error('gauss_quadrature not yet implemented');
        },
        PCA: function PCA(X) {
          var m = X.length;
          var n = X[0].length;
          var i = 0;
          var j, temp1;
          var u = [];
          var D = [];
          var result = [];
          var temp2 = [];
          var Y = [];
          var Bt = [];
          var B = [];
          var C = [];
          var V = [];
          var Vt = [];

          for (i = 0; i < m; i++) {
            u[i] = jStat.sum(X[i]) / n;
          }

          for (i = 0; i < n; i++) {
            B[i] = [];

            for (j = 0; j < m; j++) {
              B[i][j] = X[j][i] - u[j];
            }
          }

          B = jStat.transpose(B);

          for (i = 0; i < m; i++) {
            C[i] = [];

            for (j = 0; j < m; j++) {
              C[i][j] = jStat.dot([B[i]], [B[j]]) / (n - 1);
            }
          }

          result = jStat.jacobi(C);
          V = result[0];
          D = result[1];
          Vt = jStat.transpose(V);

          for (i = 0; i < D.length; i++) {
            for (j = i; j < D.length; j++) {
              if (D[i] < D[j]) {
                temp1 = D[i];
                D[i] = D[j];
                D[j] = temp1;
                temp2 = Vt[i];
                Vt[i] = Vt[j];
                Vt[j] = temp2;
              }
            }
          }

          Bt = jStat.transpose(B);

          for (i = 0; i < m; i++) {
            Y[i] = [];

            for (j = 0; j < Bt.length; j++) {
              Y[i][j] = jStat.dot([Vt[i]], [Bt[j]]);
            }
          }

          return [X, D, Vt, Y];
        }
      }); // extend jStat.fn with methods that require one argument

      (function (funcs) {
        for (var i = 0; i < funcs.length; i++) {
          (function (passfunc) {
            jStat.fn[passfunc] = function (arg, func) {
              var tmpthis = this; // check for callback

              if (func) {
                setTimeout(function () {
                  func.call(tmpthis, jStat.fn[passfunc].call(tmpthis, arg));
                }, 15);
                return this;
              }

              if (typeof jStat[passfunc](this, arg) === 'number') return jStat[passfunc](this, arg);else return jStat(jStat[passfunc](this, arg));
            };
          })(funcs[i]);
        }
      })('add divide multiply subtract dot pow exp log abs norm angle'.split(' '));
    })(jStat, Math);

    (function (jStat, Math) {
      var slice = [].slice;
      var isNumber = jStat.utils.isNumber;
      var isArray = jStat.utils.isArray; // flag==true denotes use of sample standard deviation
      // Z Statistics

      jStat.extend({
        // 2 different parameter lists:
        // (value, mean, sd)
        // (value, array, flag)
        zscore: function zscore() {
          var args = slice.call(arguments);

          if (isNumber(args[1])) {
            return (args[0] - args[1]) / args[2];
          }

          return (args[0] - jStat.mean(args[1])) / jStat.stdev(args[1], args[2]);
        },
        // 3 different paramter lists:
        // (value, mean, sd, sides)
        // (zscore, sides)
        // (value, array, sides, flag)
        ztest: function ztest() {
          var args = slice.call(arguments);
          var z;

          if (isArray(args[1])) {
            // (value, array, sides, flag)
            z = jStat.zscore(args[0], args[1], args[3]);
            return args[2] === 1 ? jStat.normal.cdf(-Math.abs(z), 0, 1) : jStat.normal.cdf(-Math.abs(z), 0, 1) * 2;
          } else {
            if (args.length > 2) {
              // (value, mean, sd, sides)
              z = jStat.zscore(args[0], args[1], args[2]);
              return args[3] === 1 ? jStat.normal.cdf(-Math.abs(z), 0, 1) : jStat.normal.cdf(-Math.abs(z), 0, 1) * 2;
            } else {
              // (zscore, sides)
              z = args[0];
              return args[1] === 1 ? jStat.normal.cdf(-Math.abs(z), 0, 1) : jStat.normal.cdf(-Math.abs(z), 0, 1) * 2;
            }
          }
        }
      });
      jStat.extend(jStat.fn, {
        zscore: function zscore(value, flag) {
          return (value - this.mean()) / this.stdev(flag);
        },
        ztest: function ztest(value, sides, flag) {
          var zscore = Math.abs(this.zscore(value, flag));
          return sides === 1 ? jStat.normal.cdf(-zscore, 0, 1) : jStat.normal.cdf(-zscore, 0, 1) * 2;
        }
      }); // T Statistics

      jStat.extend({
        // 2 parameter lists
        // (value, mean, sd, n)
        // (value, array)
        tscore: function tscore() {
          var args = slice.call(arguments);
          return args.length === 4 ? (args[0] - args[1]) / (args[2] / Math.sqrt(args[3])) : (args[0] - jStat.mean(args[1])) / (jStat.stdev(args[1], true) / Math.sqrt(args[1].length));
        },
        // 3 different paramter lists:
        // (value, mean, sd, n, sides)
        // (tscore, n, sides)
        // (value, array, sides)
        ttest: function ttest() {
          var args = slice.call(arguments);
          var tscore;

          if (args.length === 5) {
            tscore = Math.abs(jStat.tscore(args[0], args[1], args[2], args[3]));
            return args[4] === 1 ? jStat.studentt.cdf(-tscore, args[3] - 1) : jStat.studentt.cdf(-tscore, args[3] - 1) * 2;
          }

          if (isNumber(args[1])) {
            tscore = Math.abs(args[0]);
            return args[2] == 1 ? jStat.studentt.cdf(-tscore, args[1] - 1) : jStat.studentt.cdf(-tscore, args[1] - 1) * 2;
          }

          tscore = Math.abs(jStat.tscore(args[0], args[1]));
          return args[2] == 1 ? jStat.studentt.cdf(-tscore, args[1].length - 1) : jStat.studentt.cdf(-tscore, args[1].length - 1) * 2;
        }
      });
      jStat.extend(jStat.fn, {
        tscore: function tscore(value) {
          return (value - this.mean()) / (this.stdev(true) / Math.sqrt(this.cols()));
        },
        ttest: function ttest(value, sides) {
          return sides === 1 ? 1 - jStat.studentt.cdf(Math.abs(this.tscore(value)), this.cols() - 1) : jStat.studentt.cdf(-Math.abs(this.tscore(value)), this.cols() - 1) * 2;
        }
      }); // F Statistics

      jStat.extend({
        // Paramter list is as follows:
        // (array1, array2, array3, ...)
        // or it is an array of arrays
        // array of arrays conversion
        anovafscore: function anovafscore() {
          var args = slice.call(arguments),
              expVar,
              sample,
              sampMean,
              sampSampMean,
              tmpargs,
              unexpVar,
              i,
              j;

          if (args.length === 1) {
            tmpargs = new Array(args[0].length);

            for (i = 0; i < args[0].length; i++) {
              tmpargs[i] = args[0][i];
            }

            args = tmpargs;
          } // Builds sample array


          sample = new Array();

          for (i = 0; i < args.length; i++) {
            sample = sample.concat(args[i]);
          }

          sampMean = jStat.mean(sample); // Computes the explained variance

          expVar = 0;

          for (i = 0; i < args.length; i++) {
            expVar = expVar + args[i].length * Math.pow(jStat.mean(args[i]) - sampMean, 2);
          }

          expVar /= args.length - 1; // Computes unexplained variance

          unexpVar = 0;

          for (i = 0; i < args.length; i++) {
            sampSampMean = jStat.mean(args[i]);

            for (j = 0; j < args[i].length; j++) {
              unexpVar += Math.pow(args[i][j] - sampSampMean, 2);
            }
          }

          unexpVar /= sample.length - args.length;
          return expVar / unexpVar;
        },
        // 2 different paramter setups
        // (array1, array2, array3, ...)
        // (anovafscore, df1, df2)
        anovaftest: function anovaftest() {
          var args = slice.call(arguments),
              df1,
              df2,
              n,
              i;

          if (isNumber(args[0])) {
            return 1 - jStat.centralF.cdf(args[0], args[1], args[2]);
          }

          var anovafscore = jStat.anovafscore(args);
          df1 = args.length - 1;
          n = 0;

          for (i = 0; i < args.length; i++) {
            n = n + args[i].length;
          }

          df2 = n - df1 - 1;
          return 1 - jStat.centralF.cdf(anovafscore, df1, df2);
        },
        ftest: function ftest(fscore, df1, df2) {
          return 1 - jStat.centralF.cdf(fscore, df1, df2);
        }
      });
      jStat.extend(jStat.fn, {
        anovafscore: function anovafscore() {
          return jStat.anovafscore(this.toArray());
        },
        anovaftes: function anovaftes() {
          var n = 0;
          var i;

          for (i = 0; i < this.length; i++) {
            n = n + this[i].length;
          }

          return jStat.ftest(this.anovafscore(), this.length - 1, n - this.length);
        }
      }); // Tukey's range test

      jStat.extend({
        // 2 parameter lists
        // (mean1, mean2, n1, n2, sd)
        // (array1, array2, sd)
        qscore: function qscore() {
          var args = slice.call(arguments);
          var mean1, mean2, n1, n2, sd;

          if (isNumber(args[0])) {
            mean1 = args[0];
            mean2 = args[1];
            n1 = args[2];
            n2 = args[3];
            sd = args[4];
          } else {
            mean1 = jStat.mean(args[0]);
            mean2 = jStat.mean(args[1]);
            n1 = args[0].length;
            n2 = args[1].length;
            sd = args[2];
          }

          return Math.abs(mean1 - mean2) / (sd * Math.sqrt((1 / n1 + 1 / n2) / 2));
        },
        // 3 different parameter lists:
        // (qscore, n, k)
        // (mean1, mean2, n1, n2, sd, n, k)
        // (array1, array2, sd, n, k)
        qtest: function qtest() {
          var args = slice.call(arguments);
          var qscore;

          if (args.length === 3) {
            qscore = args[0];
            args = args.slice(1);
          } else if (args.length === 7) {
            qscore = jStat.qscore(args[0], args[1], args[2], args[3], args[4]);
            args = args.slice(5);
          } else {
            qscore = jStat.qscore(args[0], args[1], args[2]);
            args = args.slice(3);
          }

          var n = args[0];
          var k = args[1];
          return 1 - jStat.tukey.cdf(qscore, k, n - k);
        },
        tukeyhsd: function tukeyhsd(arrays) {
          var sd = jStat.pooledstdev(arrays);
          var means = arrays.map(function (arr) {
            return jStat.mean(arr);
          });
          var n = arrays.reduce(function (n, arr) {
            return n + arr.length;
          }, 0);
          var results = [];

          for (var i = 0; i < arrays.length; ++i) {
            for (var j = i + 1; j < arrays.length; ++j) {
              var p = jStat.qtest(means[i], means[j], arrays[i].length, arrays[j].length, sd, n, arrays.length);
              results.push([[i, j], p]);
            }
          }

          return results;
        }
      }); // Error Bounds

      jStat.extend({
        // 2 different parameter setups
        // (value, alpha, sd, n)
        // (value, alpha, array)
        normalci: function normalci() {
          var args = slice.call(arguments),
              ans = new Array(2),
              change;

          if (args.length === 4) {
            change = Math.abs(jStat.normal.inv(args[1] / 2, 0, 1) * args[2] / Math.sqrt(args[3]));
          } else {
            change = Math.abs(jStat.normal.inv(args[1] / 2, 0, 1) * jStat.stdev(args[2]) / Math.sqrt(args[2].length));
          }

          ans[0] = args[0] - change;
          ans[1] = args[0] + change;
          return ans;
        },
        // 2 different parameter setups
        // (value, alpha, sd, n)
        // (value, alpha, array)
        tci: function tci() {
          var args = slice.call(arguments),
              ans = new Array(2),
              change;

          if (args.length === 4) {
            change = Math.abs(jStat.studentt.inv(args[1] / 2, args[3] - 1) * args[2] / Math.sqrt(args[3]));
          } else {
            change = Math.abs(jStat.studentt.inv(args[1] / 2, args[2].length - 1) * jStat.stdev(args[2], true) / Math.sqrt(args[2].length));
          }

          ans[0] = args[0] - change;
          ans[1] = args[0] + change;
          return ans;
        },
        significant: function significant(pvalue, alpha) {
          return pvalue < alpha;
        }
      });
      jStat.extend(jStat.fn, {
        normalci: function normalci(value, alpha) {
          return jStat.normalci(value, alpha, this.toArray());
        },
        tci: function tci(value, alpha) {
          return jStat.tci(value, alpha, this.toArray());
        }
      }); // internal method for calculating the z-score for a difference of proportions test

      function differenceOfProportions(p1, n1, p2, n2) {
        if (p1 > 1 || p2 > 1 || p1 <= 0 || p2 <= 0) {
          throw new Error("Proportions should be greater than 0 and less than 1");
        }

        var pooled = (p1 * n1 + p2 * n2) / (n1 + n2);
        var se = Math.sqrt(pooled * (1 - pooled) * (1 / n1 + 1 / n2));
        return (p1 - p2) / se;
      } // Difference of Proportions


      jStat.extend(jStat.fn, {
        oneSidedDifferenceOfProportions: function oneSidedDifferenceOfProportions(p1, n1, p2, n2) {
          var z = differenceOfProportions(p1, n1, p2, n2);
          return jStat.ztest(z, 1);
        },
        twoSidedDifferenceOfProportions: function twoSidedDifferenceOfProportions(p1, n1, p2, n2) {
          var z = differenceOfProportions(p1, n1, p2, n2);
          return jStat.ztest(z, 2);
        }
      });
    })(jStat, Math);

    jStat.models = function () {
      function sub_regress(exog) {
        var var_count = exog[0].length;
        var modelList = jStat.arange(var_count).map(function (endog_index) {
          var exog_index = jStat.arange(var_count).filter(function (i) {
            return i !== endog_index;
          });
          return ols(jStat.col(exog, endog_index).map(function (x) {
            return x[0];
          }), jStat.col(exog, exog_index));
        });
        return modelList;
      } // do OLS model regress
      // exog have include const columns ,it will not generate it .In fact, exog is
      // "design matrix" look at
      //https://en.wikipedia.org/wiki/Design_matrix


      function ols(endog, exog) {
        var nobs = endog.length;
        var df_model = exog[0].length - 1;
        var df_resid = nobs - df_model - 1;
        var coef = jStat.lstsq(exog, endog);
        var predict = jStat.multiply(exog, coef.map(function (x) {
          return [x];
        })).map(function (p) {
          return p[0];
        });
        var resid = jStat.subtract(endog, predict);
        var ybar = jStat.mean(endog); // constant cause problem
        // var SST = jStat.sum(endog.map(function(y) {
        //   return Math.pow(y-ybar,2);
        // }));

        var SSE = jStat.sum(predict.map(function (f) {
          return Math.pow(f - ybar, 2);
        }));
        var SSR = jStat.sum(endog.map(function (y, i) {
          return Math.pow(y - predict[i], 2);
        }));
        var SST = SSE + SSR;
        var R2 = SSE / SST;
        return {
          exog: exog,
          endog: endog,
          nobs: nobs,
          df_model: df_model,
          df_resid: df_resid,
          coef: coef,
          predict: predict,
          resid: resid,
          ybar: ybar,
          SST: SST,
          SSE: SSE,
          SSR: SSR,
          R2: R2
        };
      } // H0: b_I=0
      // H1: b_I!=0


      function t_test(model) {
        var subModelList = sub_regress(model.exog); //var sigmaHat=jStat.stdev(model.resid);

        var sigmaHat = Math.sqrt(model.SSR / model.df_resid);
        var seBetaHat = subModelList.map(function (mod) {
          var SST = mod.SST;
          var R2 = mod.R2;
          return sigmaHat / Math.sqrt(SST * (1 - R2));
        });
        var tStatistic = model.coef.map(function (coef, i) {
          return (coef - 0) / seBetaHat[i];
        });
        var pValue = tStatistic.map(function (t) {
          var leftppf = jStat.studentt.cdf(t, model.df_resid);
          return (leftppf > 0.5 ? 1 - leftppf : leftppf) * 2;
        });
        var c = jStat.studentt.inv(0.975, model.df_resid);
        var interval95 = model.coef.map(function (coef, i) {
          var d = c * seBetaHat[i];
          return [coef - d, coef + d];
        });
        return {
          se: seBetaHat,
          t: tStatistic,
          p: pValue,
          sigmaHat: sigmaHat,
          interval95: interval95
        };
      }

      function F_test(model) {
        var F_statistic = model.R2 / model.df_model / ((1 - model.R2) / model.df_resid);

        var fcdf = function fcdf(x, n1, n2) {
          return jStat.beta.cdf(x / (n2 / n1 + x), n1 / 2, n2 / 2);
        };

        var pvalue = 1 - fcdf(F_statistic, model.df_model, model.df_resid);
        return {
          F_statistic: F_statistic,
          pvalue: pvalue
        };
      }

      function ols_wrap(endog, exog) {
        var model = ols(endog, exog);
        var ttest = t_test(model);
        var ftest = F_test(model); // Provide the Wherry / Ezekiel / McNemar / Cohen Adjusted R^2
        // Which matches the 'adjusted R^2' provided by R's lm package

        var adjust_R2 = 1 - (1 - model.R2) * ((model.nobs - 1) / model.df_resid);
        model.t = ttest;
        model.f = ftest;
        model.adjust_R2 = adjust_R2;
        return model;
      }

      return {
        ols: ols_wrap
      };
    }(); //To regress, simply build X matrix
    //(append column of 1's) using
    //buildxmatrix and build the Y
    //matrix using buildymatrix
    //(simply the transpose)
    //and run regress.
    //Regressions


    jStat.extend({
      buildxmatrix: function buildxmatrix() {
        //Parameters will be passed in as such
        //(array1,array2,array3,...)
        //as (x1,x2,x3,...)
        //needs to be (1,x1,x2,x3,...)
        var matrixRows = new Array(arguments.length);

        for (var i = 0; i < arguments.length; i++) {
          var array = [1];
          matrixRows[i] = array.concat(arguments[i]);
        }

        return jStat(matrixRows);
      },
      builddxmatrix: function builddxmatrix() {
        //Paramters will be passed in as such
        //([array1,array2,...]
        var matrixRows = new Array(arguments[0].length);

        for (var i = 0; i < arguments[0].length; i++) {
          var array = [1];
          matrixRows[i] = array.concat(arguments[0][i]);
        }

        return jStat(matrixRows);
      },
      buildjxmatrix: function buildjxmatrix(jMat) {
        //Builds from jStat Matrix
        var pass = new Array(jMat.length);

        for (var i = 0; i < jMat.length; i++) {
          pass[i] = jMat[i];
        }

        return jStat.builddxmatrix(pass);
      },
      buildymatrix: function buildymatrix(array) {
        return jStat(array).transpose();
      },
      buildjymatrix: function buildjymatrix(jMat) {
        return jMat.transpose();
      },
      matrixmult: function matrixmult(A, B) {
        var i, j, k, result, sum;

        if (A.cols() == B.rows()) {
          if (B.rows() > 1) {
            result = [];

            for (i = 0; i < A.rows(); i++) {
              result[i] = [];

              for (j = 0; j < B.cols(); j++) {
                sum = 0;

                for (k = 0; k < A.cols(); k++) {
                  sum += A.toArray()[i][k] * B.toArray()[k][j];
                }

                result[i][j] = sum;
              }
            }

            return jStat(result);
          }

          result = [];

          for (i = 0; i < A.rows(); i++) {
            result[i] = [];

            for (j = 0; j < B.cols(); j++) {
              sum = 0;

              for (k = 0; k < A.cols(); k++) {
                sum += A.toArray()[i][k] * B.toArray()[j];
              }

              result[i][j] = sum;
            }
          }

          return jStat(result);
        }
      },
      //regress and regresst to be fixed
      regress: function regress(jMatX, jMatY) {
        //print("regressin!");
        //print(jMatX.toArray());
        var innerinv = jStat.xtranspxinv(jMatX); //print(innerinv);

        var xtransp = jMatX.transpose();
        var next = jStat.matrixmult(jStat(innerinv), xtransp);
        return jStat.matrixmult(next, jMatY);
      },
      regresst: function regresst(jMatX, jMatY, sides) {
        var beta = jStat.regress(jMatX, jMatY);
        var compile = {};
        compile.anova = {};
        var jMatYBar = jStat.jMatYBar(jMatX, beta);
        compile.yBar = jMatYBar;
        var yAverage = jMatY.mean();
        compile.anova.residuals = jStat.residuals(jMatY, jMatYBar);
        compile.anova.ssr = jStat.ssr(jMatYBar, yAverage);
        compile.anova.msr = compile.anova.ssr / (jMatX[0].length - 1);
        compile.anova.sse = jStat.sse(jMatY, jMatYBar);
        compile.anova.mse = compile.anova.sse / (jMatY.length - (jMatX[0].length - 1) - 1);
        compile.anova.sst = jStat.sst(jMatY, yAverage);
        compile.anova.mst = compile.anova.sst / (jMatY.length - 1);
        compile.anova.r2 = 1 - compile.anova.sse / compile.anova.sst;
        if (compile.anova.r2 < 0) compile.anova.r2 = 0;
        compile.anova.fratio = compile.anova.msr / compile.anova.mse;
        compile.anova.pvalue = jStat.anovaftest(compile.anova.fratio, jMatX[0].length - 1, jMatY.length - (jMatX[0].length - 1) - 1);
        compile.anova.rmse = Math.sqrt(compile.anova.mse);
        compile.anova.r2adj = 1 - compile.anova.mse / compile.anova.mst;
        if (compile.anova.r2adj < 0) compile.anova.r2adj = 0;
        compile.stats = new Array(jMatX[0].length);
        var covar = jStat.xtranspxinv(jMatX);
        var sds, ts, ps;

        for (var i = 0; i < beta.length; i++) {
          sds = Math.sqrt(compile.anova.mse * Math.abs(covar[i][i]));
          ts = Math.abs(beta[i] / sds);
          ps = jStat.ttest(ts, jMatY.length - jMatX[0].length - 1, sides);
          compile.stats[i] = [beta[i], sds, ts, ps];
        }

        compile.regress = beta;
        return compile;
      },
      xtranspx: function xtranspx(jMatX) {
        return jStat.matrixmult(jMatX.transpose(), jMatX);
      },
      xtranspxinv: function xtranspxinv(jMatX) {
        var inner = jStat.matrixmult(jMatX.transpose(), jMatX);
        var innerinv = jStat.inv(inner);
        return innerinv;
      },
      jMatYBar: function jMatYBar(jMatX, beta) {
        var yBar = jStat.matrixmult(jMatX, beta);
        return new jStat(yBar);
      },
      residuals: function residuals(jMatY, jMatYBar) {
        return jStat.matrixsubtract(jMatY, jMatYBar);
      },
      ssr: function ssr(jMatYBar, yAverage) {
        var ssr = 0;

        for (var i = 0; i < jMatYBar.length; i++) {
          ssr += Math.pow(jMatYBar[i] - yAverage, 2);
        }

        return ssr;
      },
      sse: function sse(jMatY, jMatYBar) {
        var sse = 0;

        for (var i = 0; i < jMatY.length; i++) {
          sse += Math.pow(jMatY[i] - jMatYBar[i], 2);
        }

        return sse;
      },
      sst: function sst(jMatY, yAverage) {
        var sst = 0;

        for (var i = 0; i < jMatY.length; i++) {
          sst += Math.pow(jMatY[i] - yAverage, 2);
        }

        return sst;
      },
      matrixsubtract: function matrixsubtract(A, B) {
        var ans = new Array(A.length);

        for (var i = 0; i < A.length; i++) {
          ans[i] = new Array(A[i].length);

          for (var j = 0; j < A[i].length; j++) {
            ans[i][j] = A[i][j] - B[i][j];
          }
        }

        return jStat(ans);
      }
    }); // Make it compatible with previous version.

    jStat.jStat = jStat;
    return jStat;
  });
})(jstat);

/*
  SDTMath Static Class - Not intended for instantiation!

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

var SDTMath = /*#__PURE__*/function () {
  function SDTMath() {
    _classCallCheck(this, SDTMath);
  }

  _createClass(SDTMath, null, [{
    key: "hM2Hr",
    value: function hM2Hr(h, m) {
      if (h === 0 && m === 0) {
        return 0;
      }

      return h / (h + m);
    }
  }, {
    key: "faCr2Far",
    value: function faCr2Far(fa, cr) {
      if (fa === 0 && cr === 0) {
        return 0;
      }

      return fa / (fa + cr);
    }
  }, {
    key: "hMFaCr2Acc",
    value: function hMFaCr2Acc(h, m, fa, cr) {
      if (h === 0 && m === 0 && fa === 0 && cr === 0) {
        return 0;
      }

      return (h + cr) / (h + m + fa + cr);
    }
  }, {
    key: "hrFar2Acc",
    value: function hrFar2Acc(hr, far) {
      return (hr + (1 - far)) / 2;
    }
  }, {
    key: "hFa2Ppv",
    value: function hFa2Ppv(h, fa) {
      if (h === 0 && fa === 0) {
        return 0;
      }

      return h / (h + fa);
    }
  }, {
    key: "mCr2Fomr",
    value: function mCr2Fomr(m, cr) {
      if (m === 0 && cr === 0) {
        return 0;
      }

      return m / (m + cr);
    }
  }, {
    key: "hrFar2D",
    value: function hrFar2D(hr, far) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      if (s === 1) return jstat.exports.normal.inv(hr, 0, 1) - jstat.exports.normal.inv(far, 0, 1);
      return Math.sqrt(2 / (s * s + 1)) * (s * jstat.exports.normal.inv(hr, 0, 1) - jstat.exports.normal.inv(far, 0, 1));
    }
  }, {
    key: "hrFar2C",
    value: function hrFar2C(hr, far) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      if (s === 1) return -(jstat.exports.normal.inv(hr, 0, 1) + jstat.exports.normal.inv(far, 0, 1)) / 2;
      return Math.sqrt(2 / (s * s + 1)) * (s / (s + 1)) * -(jstat.exports.normal.inv(hr, 0, 1) + jstat.exports.normal.inv(far, 0, 1));
    }
  }, {
    key: "dC2Hr",
    value: function dC2Hr(d, c) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      if (s === 1) return jstat.exports.normal.cdf(d / 2 - c, 0, 1);
      return jstat.exports.normal.cdf(Math.sqrt((s * s + 1) / 2) * (d / (1 + s) - c / s), 0, 1);
    }
  }, {
    key: "dC2Far",
    value: function dC2Far(d, c) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      if (s === 1) return jstat.exports.normal.cdf(-(d / 2 + c), 0, 1);
      return jstat.exports.normal.cdf(Math.sqrt((s * s + 1) / 2) * -(d / (1 + s) + c), 0, 1);
    }
  }, {
    key: "dFar2Hr",
    value: function dFar2Hr(d, far) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      if (s === 1) return jstat.exports.normal.cdf(d + jstat.exports.normal.inv(far, 0, 1), 0, 1);
      return jstat.exports.normal.cdf((Math.sqrt((s * s + 1) / 2) * d + jstat.exports.normal.inv(far, 0, 1)) / s, 0, 1);
    }
  }, {
    key: "cFar2Hr",
    value: function cFar2Hr(c, far) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      if (s === 1) return jstat.exports.normal.cdf(-(2 * c) - jstat.exports.normal.inv(far, 0, 1), 0, 1);
      return jstat.exports.normal.cdf(-Math.sqrt((s * s + 1) / 2) * ((s + 1) / s) * c - jstat.exports.normal.inv(far, 0, 1), 0, 1);
    }
  }, {
    key: "d2MuN",
    value: function d2MuN(d) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (s === 1) return -d / 2;
      return -Math.sqrt((s * s + 1) / 2) * (1 / (s + 1)) * d;
    }
  }, {
    key: "muN2D",
    value: function muN2D(muN) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (s === 1) return -2 * muN;
      return -Math.sqrt(2 / (s * s + 1)) * (s + 1) * muN;
    }
  }, {
    key: "d2MuS",
    value: function d2MuS(d) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (s === 1) return d / 2;
      return Math.sqrt((s * s + 1) / 2) * (s / (s + 1)) * d;
    }
  }, {
    key: "muS2D",
    value: function muS2D(muS) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (s === 1) return 2 * muS;
      return Math.sqrt(2 / (s * s + 1)) * ((s + 1) / s) * muS;
    }
  }, {
    key: "c2L",
    value: function c2L(c) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (s === 1) return c;
      return Math.sqrt((s * s + 1) / 2) * c;
    }
  }, {
    key: "l2C",
    value: function l2C(l) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (s === 1) return l;
      return Math.sqrt(2 / (s * s + 1)) * l;
    }
  }, {
    key: "s2H",
    value: function s2H() {
      var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return 1 / (s * Math.sqrt(2 * Math.PI));
    }
  }, {
    key: "h2S",
    value: function h2S(h) {
      return 1 / (h * Math.sqrt(2 * Math.PI));
    }
  }, {
    key: "hr2Zhr",
    value: function hr2Zhr(hr) {
      return jstat.exports.normal.inv(hr, 0, 1);
    }
  }, {
    key: "far2Zfar",
    value: function far2Zfar(far) {
      return jstat.exports.normal.inv(far, 0, 1);
    }
  }, {
    key: "zhr2Hr",
    value: function zhr2Hr(zhr) {
      return jstat.exports.normal.cdf(zhr, 0, 1);
    }
  }, {
    key: "zfar2Far",
    value: function zfar2Far(zfar) {
      return jstat.exports.normal.cdf(zfar, 0, 1);
    }
  }]);

  return SDTMath;
}();

var _templateObject$d, _templateObject2$c;
/*
  ROCSpace element
  <roc-space>

  Attributes:
    FAR; HR;
    d'; C; zFAR; zHR

    draggable: yes/no

    scale: FAR/HR; zFAR/zHR; d'/C
    grid: FAR/HR; zFAR/zHR; d'/C
    isos: d'; C; FAR; HR

  Styles:
    ??
*/

var ROCSpace = /*#__PURE__*/function (_SDTElement) {
  _inherits(ROCSpace, _SDTElement);

  var _super = _createSuper(ROCSpace);

  function ROCSpace() {
    var _this;

    _classCallCheck(this, ROCSpace);

    _this = _super.call(this);
    _this.firstUpdate = true;
    _this.drag = false;
    _this.sdt = false;
    _this.contours = ['sensitivity', 'bias', 'accuracy'];
    _this.contour = undefined;
    _this.points = ['all', 'first', 'rest', 'none'];
    _this.point = 'all';
    _this.isoDs = ['all', 'first', 'rest', 'none'];
    _this.isoD = 'first';
    _this.isoCs = ['all', 'first', 'rest', 'none'];
    _this.isoC = 'first';
    _this.zRoc = false;
    _this.far = 0.25;
    _this.hr = 0.75;
    _this.s = 1;
    _this.label = '';
    _this.locations = [{
      name: 'default',
      far: _this.far,
      hr: _this.hr,
      s: _this.s,
      label: ''
    }];
    _this.pointArray = [];
    _this.isoDArray = [];
    _this.isoCArray = [];
    _this.width = NaN;
    _this.height = NaN;
    _this.rem = NaN;

    _this.alignState();

    return _this;
  }

  _createClass(ROCSpace, [{
    key: "alignState",
    value: function alignState() {
      var _this2 = this;

      this.locations[0].hr = this.hr;
      this.locations[0].far = this.far;
      this.locations[0].s = this.s;
      this.locations[0].label = this.label;
      this.d = SDTMath.hrFar2D(this.hr, this.far, this.s);
      this.c = SDTMath.hrFar2C(this.hr, this.far, this.s);
      this.pointArray = [];
      this.isoDArray = [];
      this.isoCArray = [];
      this.locations.forEach(function (item, index) {
        item.d = SDTMath.hrFar2D(item.hr, item.far, item.s);
        item.c = SDTMath.hrFar2C(item.hr, item.far, item.s);

        if (index === 0 && (_this2.point === 'first' || _this2.point === 'all')) {
          _this2.pointArray.push(item);
        } else if (index > 0 && (_this2.point === 'rest' || _this2.point === 'all')) {
          _this2.pointArray.push(item);
        }

        if (index === 0 && (_this2.isoD === 'first' || _this2.isoD === 'all')) {
          _this2.isoDArray.push(item);
        } else if (index > 0 && (_this2.isoD === 'rest' || _this2.isoD === 'all')) {
          _this2.isoDArray.push(item);
        }

        if (index === 0 && (_this2.isoC === 'first' || _this2.isoC === 'all')) {
          _this2.isoCArray.push(item);
        } else if (index > 0 && (_this2.isoC === 'rest' || _this2.isoC === 'all')) {
          _this2.isoCArray.push(item);
        }
      });
    }
  }, {
    key: "set",
    value: function set(hr, far) {
      var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
      var label = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

      if (name === 'default') {
        this.hr = hr;
        this.far = far;
        this.s = s;
        this.label = label;
      }

      var location = this.locations.find(function (item) {
        return item.name === name;
      });

      if (location === undefined) {
        this.locations.push({
          name: name,
          far: far,
          hr: hr,
          s: s,
          label: label
        });
      } else {
        location.hr = hr;
        location.far = far;
        location.s = s;
        location.label = label;
      }

      this.requestUpdate();
    }
  }, {
    key: "setWithSDT",
    value: function setWithSDT(d, c) {
      var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
      var label = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

      if (name === 'default') {
        this.hr = SDTMath.dC2Hr(d, c, s);
        this.far = SDTMath.dC2Far(d, c, s);
        this.s = s;
        this.label = label;
      }

      var location = this.locations.find(function (item) {
        return item.name === name;
      });

      if (location === undefined) {
        this.locations.push({
          name: name,
          far: SDTMath.dC2Far(d, c, s),
          hr: SDTMath.dC2Hr(d, c, s),
          s: s,
          label: label
        });
      } else {
        location.hr = SDTMath.dC2Hr(d, c, s);
        location.far = SDTMath.dC2Far(d, c, s);
        location.s = s;
        location.label = label;
      }

      this.sdt = true;
      this.requestUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-line class-methods-use-this
      return $(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["\n      ", "\n    "])), SDTElement.svgFilters);
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      this.width = parseFloat(this.getComputedStyleValue('width'), 10);
      this.height = parseFloat(this.getComputedStyleValue('height'), 10);
      this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10); // console.log(`roc-space: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ROCSpace.prototype), "connectedCallback", this).call(this);

      window.addEventListener('resize', this.getDimensions.bind(this));
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      window.removeEventListener('resize', this.getDimensions.bind(this));

      _get(_getPrototypeOf(ROCSpace.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated(changedProperties) {
      _get(_getPrototypeOf(ROCSpace.prototype), "firstUpdated", this).call(this, changedProperties); // Get the width and height after initial render/update has occurred
      // HACK Edge: Edge doesn't have width/height until after a 0ms timeout


      window.setTimeout(this.getDimensions.bind(this), 0);
    }
  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this3 = this;

      _get(_getPrototypeOf(ROCSpace.prototype), "update", this).call(this, changedProperties);

      this.alignState(); // Bail out if we can't get the width/height/rem

      if (Number.isNaN(this.width) || Number.isNaN(this.height) || Number.isNaN(this.rem)) {
        return;
      }

      var elementWidth = this.width;
      var elementHeight = this.height;
      var elementSize = Math.min(elementWidth, elementHeight);
      var margin = {
        top: 2 * this.rem,
        bottom: 3 * this.rem,
        left: 3 * this.rem,
        right: 2 * this.rem
      };
      var height = elementSize - (margin.top + margin.bottom);
      var width = elementSize - (margin.left + margin.right);
      var transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10); // X Scale

      var xScale = linear().domain(this.zRoc ? [-3, 3] : [0, 1]) // zFAR or FAR
      .range([0, width]);
      this.xScale = xScale; // Y Scale

      var yScale = linear().domain(this.zRoc ? [3, -3] : [1, 0]) // zHR or HR
      .range([0, height]);
      this.yScale = yScale; // Drag behavior

      var drag$1 = drag().subject(function (event, datum) {
        return {
          x: _this3.xScale(_this3.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far),
          y: _this3.yScale(_this3.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr)
        };
      }).on('start', function (event) {
        var element = event.currentTarget;
        select(element).classed('dragging', true);
      }).on('drag', function (event, datum) {
        _this3.drag = true;
        var far = _this3.zRoc ? SDTMath.zfar2Far(_this3.xScale.invert(event.x)) : _this3.xScale.invert(event.x);
        var hr = _this3.zRoc ? SDTMath.zhr2Hr(_this3.yScale.invert(event.y)) : _this3.yScale.invert(event.y); // Clamp FAR and HR to ROC Space

        datum.far = far < 0.001 ? 0.001 : far > 0.999 ? 0.999 : far;
        datum.hr = hr <= 0.001 ? 0.001 : hr >= 0.999 ? 0.999 : hr; // console.log(`roc-space.drag: far = ${datum.far}, hr = ${datum.hr}`);

        if (datum.name === 'default') {
          _this3.far = datum.far;
          _this3.hr = datum.hr;
        }

        _this3.alignState();

        _this3.requestUpdate();

        _this3.dispatchEvent(new CustomEvent('roc-point-change', {
          detail: {
            name: datum.name,
            far: datum.far,
            hr: datum.hr,
            d: datum.d,
            c: datum.c,
            s: datum.s,
            label: datum.label
          },
          bubbles: true
        }));
      }).on('end', function (event) {
        var element = event.currentTarget;
        select(element).classed('dragging', false);
      }); // Line for FAR/HR Space

      var line$1 = line().x(function (datum) {
        return xScale(_this3.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far);
      }).y(function (datum) {
        return yScale(_this3.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr);
      }); // Svg
      //  DATA-JOIN

      var svgUpdate = select(this.renderRoot).selectAll('.main').data([{
        width: this.width,
        height: this.height,
        rem: this.rem
      }]); //  ENTER

      var svgEnter = svgUpdate.enter().append('svg').classed('main', true); //  MERGE

      var svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', "0 0 ".concat(elementSize, " ").concat(elementSize)); // Plot
      //  ENTER

      var plotEnter = svgEnter.append('g').classed('plot', true); //  MERGE

      var plotMerge = svgMerge.select('.plot').attr('transform', "translate(".concat(margin.left, ", ").concat(margin.top, ")")); // Clippath
      //  ENTER

      plotEnter.append('clipPath').attr('id', 'clip-roc-space').append('rect'); //  MERGE

      plotMerge.select('clipPath rect').attr('height', height + 1).attr('width', width + 1); // Underlayer
      //  ENTER

      var underlayerEnter = plotEnter.append('g').classed('underlayer', true); // MERGE

      var underlayerMerge = plotMerge.select('.underlayer'); // Background
      //  ENTER

      underlayerEnter.append('rect').classed('background', true); //  MERGE

      underlayerMerge.select('.background').attr('height', height).attr('width', width); // Contour Plotting
      //  Handles: Bias, Sensitivity, & Accuracy

      if (this.firstUpdate || changedProperties.has('contour') || changedProperties.has('zRoc') || changedProperties.has('width') || changedProperties.has('height') || changedProperties.has('rem') || changedProperties.has('s')) {
        if (this.contour !== undefined) {
          // Contour Plot
          var n = 100; // Resolution

          var contourValues = [];

          for (var j = 0.5, k = 0; j < n; j += 1) {
            for (var i = 0.5; i < n; i += 1, k += 1) {
              var hr = this.zRoc ? SDTMath.zhr2Hr(i / n * 6 - 3) : i / n;
              var far = this.zRoc ? SDTMath.zfar2Far((1 - j / n) * 6 - 3) : 1 - j / n;
              contourValues[k] = this.contour === 'bias' ? SDTMath.hrFar2C(hr, far, this.s) : this.contour === 'sensitivity' ? SDTMath.hrFar2D(hr, far, this.s) : this.contour === 'accuracy' ? SDTMath.hrFar2Acc(hr, far) : null;
            }
          }

          var contourThresholds = this.contour === 'bias' ? range(-3, 3, 0.25) : this.contour === 'sensitivity' ? range(-6, 6, 0.5) : this.contour === 'accuracy' ? range(0, 1, 0.05) : null;
          var contours$1 = contours().size([n, n]).thresholds(contourThresholds);
          var contourColorStart = this.getComputedStyleValue(this.contour === 'bias' ? '---color-element-background' : this.contour === 'sensitivity' ? '---color-d' : this.contour === 'accuracy' ? '---color-acc-dark' : null);
          var contourColorEnd = this.getComputedStyleValue(this.contour === 'bias' ? '---color-c' : this.contour === 'sensitivity' ? '---color-element-background' : this.contour === 'accuracy' ? '---color-element-background' : null);
          var contourColor = linear().domain(extent(contourThresholds)).interpolate(function () {
            return interpolateRgb(contourColorStart, contourColorEnd);
          }); //  DATA-JOIN

          var contourPlotUpdate = underlayerMerge.selectAll('.plot-contour').data([this.contour]); //  ENTER

          var contourPlotEnter = contourPlotUpdate.enter().append('g').classed('plot-contour', true); //  MERGE

          var contourPlotMerge = contourPlotEnter.merge(contourPlotUpdate); // Contour Plot Contours
          //  DATA-JOIN

          var contoursUpdate = contourPlotMerge.selectAll('.contour').data(contours$1(contourValues)); //  ENTER

          var contoursEnter = contoursUpdate.enter().append('path').classed('contour', true); //  MERGE

          contoursEnter.merge(contoursUpdate).transition().duration(transitionDuration * 2) // Extra long transition!
          .ease(cubicOut).attr('d', index(identity$1().scale(width / n))) // ????
          .attr('fill', function (datum) {
            return contourColor(datum.value);
          }); //  EXIT

          contoursUpdate.exit().remove(); // Contour Title
          //  DATA-JOIN

          var contourTitleUpdate = underlayerMerge.selectAll('.title-contour').data([this.contour]); //  ENTER

          var contourTitleEnter = contourTitleUpdate.enter().append('text').classed('title-contour', true).attr('text-anchor', 'middle'); //  MERGE

          contourTitleEnter.merge(contourTitleUpdate).classed('math-var', this.contour === 'bias' || this.contour === 'sensitivity').attr('transform', this.contour === 'bias' ? "translate(".concat(width + 1.25 * this.rem, ", ").concat(this.rem, ")") : this.contour === 'sensitivity' ? "translate(".concat(width + 1.25 * this.rem, ", ").concat(this.rem, ")") : this.contour === 'accuracy' ? "translate(".concat(width + 1.125 * this.rem, ", ").concat(this.rem, ")") : null).text(this.contour === 'bias' ? 'c' : this.contour === 'sensitivity' ? 'd′' : this.contour === 'accuracy' ? 'Acc' : null); // Contour Legend

          var l = 100;
          var contourLegendValues = []; // new Array(4 * l);

          for (var _i = 0.5, _k = 0; _i < l; _i += 1, _k += 4) {
            contourLegendValues[_k] = this.contour === 'bias' ? -(_i / n * 6 - 3) : this.contour === 'sensitivity' ? _i / n * 12 - 6 : this.contour === 'accuracy' ? _i / n : null;
            contourLegendValues[_k + 1] = contourLegendValues[_k];
            contourLegendValues[_k + 2] = contourLegendValues[_k];
            contourLegendValues[_k + 3] = contourLegendValues[_k];
          }

          var legendContours = contours().size([4, l]).thresholds(contourThresholds);
          var legendScale = linear().domain(this.contour === 'bias' ? [3, -3] : this.contour === 'sensitivity' ? [6, -6] : this.contour === 'accuracy' ? [1, 0] : null).range([0, 10 * this.rem]); //  DATA-JOIN

          var contourLegendUpdate = underlayerMerge.selectAll('.legend-contour').data([this.contour]); //  ENTER

          var contourLegendEnter = contourLegendUpdate.enter().append('g').classed('legend-contour', true); //  MERGE

          var contourLegendMerge = contourLegendEnter.merge(contourLegendUpdate).attr('transform', this.contour === 'bias' ? "translate(".concat(width + 1.25 * this.rem, ", ").concat(1.5 * this.rem, ")") : this.contour === 'sensitivity' ? "translate(".concat(width + 1.25 * this.rem, ", ").concat(1.5 * this.rem, ")") : this.contour === 'accuracy' ? "translate(".concat(width + 1.5 * this.rem, ", ").concat(1.5 * this.rem, ")") : null); //  EXIT

          contourLegendUpdate.exit().remove(); // Contour Legend Axis
          //  ENTER

          contourLegendEnter.append('g').classed('axis-contour', true); //  MERGE

          contourLegendMerge.select('.axis-contour').call(axisLeft(legendScale).ticks(7).tickSize(0)).attr('font-size', null).attr('font-family', null); // Contour Legend Contours
          //  DATA-JOIN

          var legendContoursUpdate = contourLegendMerge.selectAll('.contour').data(legendContours(contourLegendValues)); //  ENTER

          var legendContoursEnter = legendContoursUpdate.enter().append('path').classed('contour', true); //  MERGE

          legendContoursEnter.merge(legendContoursUpdate).attr('d', index(identity$1().scale(10 * this.rem / l))) // ????
          .attr('fill', function (datum) {
            return contourColor(datum.value);
          }); //  EXIT

          legendContoursUpdate.exit().remove();
        } else {
          // Contour Plot
          //  DATA-JOIN
          var _contourPlotUpdate = underlayerMerge.selectAll('.plot-contour').data([]); //  EXIT


          _contourPlotUpdate.exit().remove(); // Contour Title
          //  DATA-JOIN


          var _contourTitleUpdate = underlayerMerge.selectAll('.title-contour').data([]); //  EXIT


          _contourTitleUpdate.exit().remove(); // Contour Legend
          //  DATA-JOIN


          var _contourLegendUpdate = underlayerMerge.selectAll('.legend-contour').data([]); //  EXIT


          _contourLegendUpdate.exit().remove();
        }
      } // X Axis
      //  ENTER


      underlayerEnter.append('g').classed('axis-x', true); //  MERGE

      var axisXMerge = underlayerMerge.select('.axis-x').attr('transform', "translate(0, ".concat(height, ")"));
      var axisXTransition = axisXMerge.transition().duration(transitionDuration * 2) // Extra long transition!
      .ease(cubicOut).call(axisBottom(xScale)).attr('font-size', null).attr('font-family', null);
      axisXTransition.selectAll('line, path').attr('stroke', null); // X Axis Title
      //  ENTER

      var titleXEnter = underlayerEnter.append('text').classed('title-x', true).attr('text-anchor', 'middle');
      titleXEnter.append('tspan').classed('z math-var', true);
      titleXEnter.append('tspan').classed('name', true); //  MERGE

      var titleXMerge = underlayerMerge.select('.title-x').attr('transform', "translate(".concat(width / 2, ", ").concat(height + 2.25 * this.rem, ")"));
      titleXMerge.select('tspan.z').text(this.zRoc ? 'z' : '');
      titleXMerge.select('tspan.name').text(this.zRoc ? '(False Alarm Rate)' : 'False Alarm Rate'); // Y Axis
      //  ENTER

      underlayerEnter.append('g').classed('axis-y', true); // MERGE

      var axisYTransition = underlayerMerge.select('.axis-y').transition().duration(transitionDuration * 2) // Extra long transition!
      .ease(cubicOut).call(axisLeft(yScale)).attr('font-size', null).attr('font-family', null);
      axisYTransition.selectAll('line, path').attr('stroke', null); // Y Axis Title
      //  ENTER

      var titleYEnter = underlayerEnter.append('text').classed('title-y', true).attr('text-anchor', 'middle');
      titleYEnter.append('tspan').classed('z math-var', true);
      titleYEnter.append('tspan').classed('name', true); //  MERGE

      var titleYMerge = underlayerMerge.select('.title-y').attr('transform', "translate(".concat(-2 * this.rem, ", ").concat(height / 2, ")rotate(-90)"));
      titleYMerge.select('tspan.z').text(this.zRoc ? 'z' : '');
      titleYMerge.select('tspan.name').text(this.zRoc ? '(Hit Rate)' : 'Hit Rate'); // No-Information Line
      //  ENTER

      underlayerEnter.append('line').classed('diagonal', true); //  MERGE

      underlayerMerge.select('.diagonal').attr('x1', this.zRoc ? xScale(-3) : xScale(0)).attr('y1', this.zRoc ? yScale(-3) : yScale(0)).attr('x2', this.zRoc ? xScale(3) : xScale(1)).attr('y2', this.zRoc ? yScale(3) : yScale(1)); // Content
      //  ENTER

      plotEnter.append('g').classed('content', true); //  MERGE

      var contentMerge = plotMerge.select('.content'); // Iso-sensitivity Curve
      //  DATA-JOIN

      var isoDUpdate = contentMerge.selectAll('.curve-iso-d').data(this.isoDArray, function (datum) {
        return datum.name;
      }); //  ENTER

      var isoDEnter = isoDUpdate.enter().append('path').classed('curve-iso-d', true).attr('clip-path', 'url(#clip-roc-space)'); //  MERGE

      var isoDMerge = isoDEnter.merge(isoDUpdate);

      if (this.firstUpdate || changedProperties.has('zRoc')) {
        isoDMerge.transition().duration(this.drag ? 0 : transitionDuration * 2) // Extra long transition!
        .ease(cubicOut).attr('d', function (datum) {
          return line$1(range(xScale.range()[0], xScale.range()[1] + 1, 1).map(function (x) {
            return {
              far: _this3.zRoc ? SDTMath.zfar2Far(xScale.invert(x)) : xScale.invert(x),
              hr: _this3.zRoc ? SDTMath.dFar2Hr(datum.d, SDTMath.zfar2Far(xScale.invert(x)), datum.s) : SDTMath.dFar2Hr(datum.d, xScale.invert(x), datum.s)
            };
          }));
        });
      } else if (this.sdt) {
        isoDMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', function (datum, index, elements) {
          var element = elements[index];
          element.hr = undefined;
          element.far = undefined;
          var interpolateD = interpolate$1(element.d !== undefined ? element.d : datum.d, datum.d);
          var interpolateS = interpolate$1(element.s !== undefined ? element.s : datum.s, datum.s);
          return function (time) {
            element.d = interpolateD(time);
            element.s = interpolateS(time);
            var isoD = range(xScale.range()[0], xScale.range()[1] + 1, 1).map(function (x) {
              return {
                far: _this3.zRoc ? SDTMath.zfar2Far(xScale.invert(x)) : xScale.invert(x),
                hr: _this3.zRoc ? SDTMath.dFar2Hr(element.d, SDTMath.zfar2Far(xScale.invert(x)), element.s) : SDTMath.dFar2Hr(element.d, xScale.invert(x), element.s)
              };
            });
            return line$1(isoD);
          };
        });
      } else {
        isoDMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', function (datum, index, elements) {
          var element = elements[index];
          element.d = undefined;
          element.s = undefined;
          var interpolateHr = interpolate$1(element.hr !== undefined ? element.hr : datum.hr, datum.hr);
          var interpolateFar = interpolate$1(element.far !== undefined ? element.far : datum.far, datum.far);
          return function (time) {
            element.hr = interpolateHr(time);
            element.far = interpolateFar(time);
            var isoD = range(xScale.range()[0], xScale.range()[1] + 1, 1).map(function (x) {
              return {
                far: _this3.zRoc ? SDTMath.zfar2Far(xScale.invert(x)) : xScale.invert(x),
                hr: _this3.zRoc ? SDTMath.dFar2Hr(SDTMath.hrFar2D(element.hr, element.far, datum.s), SDTMath.zfar2Far(xScale.invert(x)), datum.s) : SDTMath.dFar2Hr(SDTMath.hrFar2D(element.hr, element.far, datum.s), xScale.invert(x), datum.s)
              };
            });
            return line$1(isoD);
          };
        });
      } //  EXIT
      // NOTE: Could add a transition here


      isoDUpdate.exit().remove(); // Iso-bias Curve
      //  DATA-JOIN

      var isoCUpdate = contentMerge.selectAll('.curve-iso-c').data(this.isoCArray, function (datum) {
        return datum.name;
      }); //  ENTER

      var isoCEnter = isoCUpdate.enter().append('path').classed('curve-iso-c', true).attr('clip-path', 'url(#clip-roc-space)'); //  MERGE

      var isoCMerge = isoCEnter.merge(isoCUpdate);

      if (this.firstUpdate || changedProperties.has('zRoc')) {
        isoCMerge.transition().duration(this.drag ? 0 : transitionDuration * 2) // Extra long transition!
        .ease(cubicOut).attr('d', function (datum) {
          return line$1(range(xScale.range()[0], xScale.range()[1] + 1, 1).map(function (x) {
            return {
              far: _this3.zRoc ? SDTMath.zfar2Far(xScale.invert(x)) : xScale.invert(x),
              hr: _this3.zRoc ? SDTMath.cFar2Hr(datum.c, SDTMath.zfar2Far(xScale.invert(x)), datum.s) : SDTMath.cFar2Hr(datum.c, xScale.invert(x), datum.s)
            };
          }));
        });
      } else if (this.sdt) {
        isoCMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', function (datum, index, elements) {
          var element = elements[index];
          element.hr = undefined;
          element.far = undefined;
          var interpolateC = interpolate$1(element.c !== undefined ? element.c : datum.c, datum.c);
          var interpolateS = interpolate$1(element.s !== undefined ? element.s : datum.s, datum.s);
          return function (time) {
            element.c = interpolateC(time);
            element.s = interpolateS(time);
            var isoC = range(xScale.range()[0], xScale.range()[1] + 1, 1).map(function (x) {
              return {
                far: _this3.zRoc ? SDTMath.zfar2Far(xScale.invert(x)) : xScale.invert(x),
                hr: _this3.zRoc ? SDTMath.cFar2Hr(element.c, SDTMath.zfar2Far(xScale.invert(x)), element.s) : SDTMath.cFar2Hr(element.c, xScale.invert(x), element.s)
              };
            });
            return line$1(isoC);
          };
        });
      } else {
        isoCMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', function (datum, index, elements) {
          var element = elements[index];
          element.c = undefined;
          element.s = undefined;
          var interpolateHr = interpolate$1(element.hr !== undefined ? element.hr : datum.hr, datum.hr);
          var interpolateFar = interpolate$1(element.far !== undefined ? element.far : datum.far, datum.far);
          return function (time) {
            element.hr = interpolateHr(time);
            element.far = interpolateFar(time);
            var isoC = range(xScale.range()[0], xScale.range()[1] + 1, 1).map(function (x) {
              return {
                far: _this3.zRoc ? SDTMath.zfar2Far(xScale.invert(x)) : xScale.invert(x),
                hr: _this3.zRoc ? SDTMath.cFar2Hr(SDTMath.hrFar2C(element.hr, element.far, datum.s), SDTMath.zfar2Far(xScale.invert(x)), datum.s) : SDTMath.cFar2Hr(SDTMath.hrFar2C(element.hr, element.far, datum.s), xScale.invert(x), datum.s)
              };
            });
            return line$1(isoC);
          };
        });
      } //  EXIT
      // NOTE: Could add a transition here


      isoCUpdate.exit().remove(); // Point
      //  DATA-JOIN

      var pointUpdate = contentMerge.selectAll('.point').data(this.pointArray, function (datum) {
        return datum.name;
      }); //  ENTER

      var pointEnter = pointUpdate.enter().append('g').classed('point', true);
      pointEnter.append('circle').classed('circle', true).attr('r', 6);
      /* HACK: Firefox does not support CSS SVG Geometry Properties */

      pointEnter.append('text').classed('label', true); //  MERGE

      var pointMerge = pointEnter.merge(pointUpdate);
      pointMerge.select('text').text(function (datum) {
        return datum.label;
      });

      if (this.firstUpdate || changedProperties.has('interactive')) {
        if (this.interactive) {
          pointMerge.attr('tabindex', 0).classed('interactive', true).call(drag$1).on('keydown', function (event, datum) {
            if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
              var _hr = _this3.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr;

              var _far = _this3.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far;

              switch (event.key) {
                case 'ArrowUp':
                  _hr += _this3.zRoc ? event.shiftKey ? 0.05 : 0.25 : event.shiftKey ? 0.01 : 0.05;
                  break;

                case 'ArrowDown':
                  _hr -= _this3.zRoc ? event.shiftKey ? 0.05 : 0.25 : event.shiftKey ? 0.01 : 0.05;
                  break;

                case 'ArrowRight':
                  _far += _this3.zRoc ? event.shiftKey ? 0.05 : 0.25 : event.shiftKey ? 0.01 : 0.05;
                  break;

                case 'ArrowLeft':
                  _far -= _this3.zRoc ? event.shiftKey ? 0.05 : 0.25 : event.shiftKey ? 0.01 : 0.05;
                  break;

              }

              _hr = _this3.zRoc ? SDTMath.zhr2Hr(_hr) : _hr;
              _far = _this3.zRoc ? SDTMath.zfar2Far(_far) : _far; // Clamp FAR and HR to ROC Space

              _hr = _hr < 0.001 ? 0.001 : _hr > 0.999 ? 0.999 : _hr;
              _far = _far < 0.001 ? 0.001 : _far > 0.999 ? 0.999 : _far;

              if (_hr !== datum.hr || _far !== datum.far) {
                datum.hr = _hr;
                datum.far = _far;

                if (datum.name === 'default') {
                  _this3.hr = datum.hr;
                  _this3.far = datum.far;
                }

                _this3.alignState();

                _this3.requestUpdate();

                _this3.dispatchEvent(new CustomEvent('roc-point-change', {
                  detail: {
                    name: datum.name,
                    far: datum.far,
                    hr: datum.hr,
                    d: datum.d,
                    c: datum.c,
                    s: datum.s,
                    label: datum.label
                  },
                  bubbles: true
                }));
              }

              event.preventDefault();
            }
          });
        } else {
          pointMerge.attr('tabindex', null).classed('interactive', false).on('drag', null).on('keydown', null);
        }
      }

      if (this.firstUpdate || changedProperties.has('zRoc')) {
        pointMerge.transition().duration(this.drag ? 0 : transitionDuration * 2) // Extra long transition!
        .ease(cubicOut).attr('transform', function (datum, index, elements) {
          var element = elements[index];
          element.d = undefined;
          element.c = undefined;
          element.s = undefined;
          return "translate(\n            ".concat(xScale(_this3.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far), ",\n            ").concat(yScale(_this3.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr), "\n          )");
        });
      } else if (this.sdt) {
        pointMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('transform', function (datum, index, elements) {
          var element = elements[index];
          var interpolateD = interpolate$1(element.d !== undefined ? element.d : datum.d, datum.d);
          var interpolateC = interpolate$1(element.c !== undefined ? element.c : datum.c, datum.c);
          var interpolateS = interpolate$1(element.s !== undefined ? element.s : datum.s, datum.s);
          return function (time) {
            element.d = interpolateD(time);
            element.c = interpolateC(time);
            element.s = interpolateS(time);
            return "translate(\n              ".concat(xScale(_this3.zRoc ? SDTMath.far2Zfar(SDTMath.dC2Far(element.d, element.c, element.s)) : SDTMath.dC2Far(element.d, element.c, element.s)), ",\n              ").concat(yScale(_this3.zRoc ? SDTMath.hr2Zhr(SDTMath.dC2Hr(element.d, element.c, element.s)) : SDTMath.dC2Hr(element.d, element.c, element.s)), "\n            )");
          };
        });
      } else {
        pointMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('transform', function (datum, index, elements) {
          var element = elements[index];
          element.d = undefined;
          element.c = undefined;
          element.s = undefined;
          return "translate(\n            ".concat(xScale(_this3.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far), ",\n            ").concat(yScale(_this3.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr), "\n          )");
        });
      } //  EXIT
      // NOTE: Could add a transition here


      pointUpdate.exit().remove();
      this.drag = false;
      this.sdt = false;
      this.firstUpdate = false;
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        contour: {
          attribute: 'contour',
          type: String,
          reflect: true
        },
        point: {
          attribute: 'point',
          type: String,
          reflect: true
        },
        isoD: {
          attribute: 'iso-d',
          type: String,
          reflect: true
        },
        isoC: {
          attribute: 'iso-c',
          type: String,
          reflect: true
        },
        zRoc: {
          attribute: 'z-roc',
          type: Boolean,
          reflect: true
        },
        far: {
          attribute: 'far',
          type: Number,
          reflect: true
        },
        hr: {
          attribute: 'hr',
          type: Number,
          reflect: true
        },
        d: {
          attribute: false,
          type: Number,
          reflect: false
        },
        c: {
          attribute: false,
          type: Number,
          reflect: false
        },
        s: {
          attribute: false,
          type: Number,
          reflect: false
        },
        width: {
          attribute: false,
          type: Number,
          reflect: false
        },
        height: {
          attribute: false,
          type: Number,
          reflect: false
        },
        rem: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(ROCSpace), "styles", this), r$2(_templateObject2$c || (_templateObject2$c = _taggedTemplateLiteral(["\n        :host {\n          display: inline-block;\n\n          width: 20rem;\n          height: 20rem;\n        }\n\n        .main {\n          width: 100%;\n          height: 100%;\n        }\n\n        .plot-contour,\n        .legend-contour .contour {\n          stroke: var(---color-background);\n          stroke-width: 0.5;\n        }\n\n        text {\n          /* stylelint-disable property-no-vendor-prefix */\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n        }\n\n        .point.interactive {\n          cursor: move;\n\n          filter: url(\"#shadow-2\");\n          outline: none;\n\n          /* HACK: This gets Safari to correctly apply the filter! */\n          /* https://github.com/emilbjorklund/svg-weirdness/issues/27 */\n          stroke: #000000;\n          stroke-opacity: 0;\n          stroke-width: 0;\n        }\n\n        /* Make a larger target for touch users */\n        @media (pointer: coarse) {\n          .point.interactive .circle {\n            stroke: #000000;\n            stroke-opacity: 0;\n            stroke-width: 12px;\n          }\n        }\n\n        .point.interactive:hover {\n          filter: url(\"#shadow-4\");\n\n          /* HACK: This gets Safari to correctly apply the filter! */\n          stroke: #ff0000;\n        }\n\n        .point.interactive:active {\n          filter: url(\"#shadow-8\");\n\n          /* HACK: This gets Safari to correctly apply the filter! */\n          stroke: #00ff00;\n        }\n\n        :host(.keyboard) .point.interactive:focus {\n          filter: url(\"#shadow-8\");\n\n          /* HACK: This gets Safari to correctly apply the filter! */\n          stroke: #0000ff;\n        }\n\n        .background {\n          fill: var(---color-element-background);\n          stroke: var(---color-element-border);\n          stroke-width: 1;\n          shape-rendering: crispEdges;\n        }\n\n        .title-x,\n        .title-y,\n        .title-contour {\n          font-weight: 600;\n\n          fill: currentColor;\n        }\n\n        .tick {\n          font-size: 0.75rem;\n        }\n\n        .axis-x path,\n        .axis-x line,\n        .axis-y path,\n        .axis-y line {\n          stroke: var(---color-element-border);\n        }\n\n        .axis-contour .domain {\n          stroke: none;\n        }\n\n        .diagonal {\n          stroke: var(---color-element-border);\n          stroke-dasharray: 4;\n          stroke-width: 1;\n        }\n\n        .curve-iso-d {\n          fill: none;\n          stroke: var(---color-d);\n          stroke-width: 2;\n        }\n\n        .curve-iso-c {\n          fill: none;\n          stroke: var(---color-c);\n          stroke-width: 2;\n        }\n\n        .point .circle {\n          fill: var(---color-element-emphasis);\n\n          /* r: 6; HACK: Firefox does not support CSS SVG Geometry Properties */\n        }\n\n        .point .label {\n          font-size: 0.75rem;\n\n          dominant-baseline: middle;\n          text-anchor: middle;\n\n          fill: var(---color-text-inverse);\n        }\n      "])))];
    }
  }]);

  return ROCSpace;
}(SDTElement);
customElements.define('roc-space', ROCSpace);

var _templateObject$c, _templateObject2$b, _templateObject3$9, _templateObject4$9, _templateObject5$9, _templateObject6$9, _templateObject7$9, _templateObject8$7, _templateObject9$7, _templateObject10$7, _templateObject11$7, _templateObject12$2, _templateObject13$2, _templateObject14$2, _templateObject15$2, _templateObject16$2, _templateObject17$2, _templateObject18$2, _templateObject19$2, _templateObject20$2;
/*
  SDTControl element
  <sdt-control>

  Attributes:

*/

var SDTControl = /*#__PURE__*/function (_SDTElement) {
  _inherits(SDTControl, _SDTElement);

  var _super = _createSuper(SDTControl);

  function SDTControl() {
    var _this;

    _classCallCheck(this, SDTControl);

    _this = _super.call(this); // Attributes

    _this.trials = undefined;
    _this.duration = undefined;
    _this.coherence = undefined;
    _this.payoff = undefined;
    _this.colors = ['none', 'accuracy', 'stimulus', 'response', 'outcome'];
    _this.color = undefined;
    _this.zRoc = undefined;
    _this.run = false;
    _this.pause = false;
    _this.reset = false; // Properties

    _this.states = ['resetted', 'running', 'paused', 'ended'];
    _this.state = 'resetted';
    return _this;
  }

  _createClass(SDTControl, [{
    key: "setTrials",
    value: function setTrials(e) {
      this.trials = e.target.value;
      this.dispatchEvent(new CustomEvent('sdt-control-trials', {
        detail: {
          trials: this.trials
        },
        bubbles: true
      }));
    }
  }, {
    key: "setDuration",
    value: function setDuration(e) {
      this.duration = e.target.value;
      this.dispatchEvent(new CustomEvent('sdt-control-duration', {
        detail: {
          duration: this.duration
        },
        bubbles: true
      }));
    }
  }, {
    key: "setCoherence",
    value: function setCoherence(e) {
      this.coherence = e.target.value;
      this.dispatchEvent(new CustomEvent('sdt-control-coherence', {
        detail: {
          coherence: this.coherence
        },
        bubbles: true
      }));
    }
  }, {
    key: "setPayoff",
    value: function setPayoff(e) {
      this.payoff = e.target.value;
      this.dispatchEvent(new CustomEvent('sdt-control-payoff', {
        detail: {
          payoff: this.payoff
        },
        bubbles: true
      }));
    }
  }, {
    key: "chooseColor",
    value: function chooseColor(e) {
      this.color = e.target.value;
      this.dispatchEvent(new CustomEvent('sdt-control-color', {
        detail: {
          color: this.color
        },
        bubbles: true
      }));
    }
  }, {
    key: "flipZRoc",
    value: function flipZRoc(e) {
      this.zRoc = e.target.checked;
      this.dispatchEvent(new CustomEvent('sdt-control-z-roc', {
        detail: {
          zRoc: this.zRoc
        },
        bubbles: true
      }));
    }
  }, {
    key: "doRun",
    value: function doRun() {
      this.state = 'running';
      this.dispatchEvent(new CustomEvent('sdt-control-run', {
        detail: {},
        bubbles: true
      }));
    }
  }, {
    key: "doPause",
    value: function doPause() {
      this.state = 'paused';
      this.dispatchEvent(new CustomEvent('sdt-control-pause', {
        detail: {},
        bubbles: true
      }));
    }
  }, {
    key: "doReset",
    value: function doReset() {
      this.state = 'resetted';
      this.dispatchEvent(new CustomEvent('sdt-control-reset', {
        detail: {},
        bubbles: true
      }));
    }
  }, {
    key: "complete",
    value: function complete() {
      this.state = 'ended';
    }
  }, {
    key: "render",
    value: function render() {
      return $(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        ", "\n        <div class=\"buttons\">\n          ", "\n          ", "\n          ", "\n        </div>\n      </div>"])), this.trials ? $(_templateObject2$b || (_templateObject2$b = _taggedTemplateLiteral(["<decidable-slider min=\"1\" max=\"100\" step=\"1\" .value=", " @change=", " @input=", ">Trials</decidable-slider>"])), this.trials, this.setTrials.bind(this), this.setTrials.bind(this)) : $(_templateObject3$9 || (_templateObject3$9 = _taggedTemplateLiteral([""]))), this.duration ? $(_templateObject4$9 || (_templateObject4$9 = _taggedTemplateLiteral(["<decidable-slider min=\"10\" max=\"2000\" step=\"10\" .value=", " @change=", " @input=", ">Duration</decidable-slider>"])), this.duration, this.setDuration.bind(this), this.setDuration.bind(this)) : $(_templateObject5$9 || (_templateObject5$9 = _taggedTemplateLiteral([""]))), this.coherence ? $(_templateObject6$9 || (_templateObject6$9 = _taggedTemplateLiteral(["<decidable-slider min=\"0\" max=\"1\" step=\".01\" .value=", " @change=", " @input=", ">Coherence</decidable-slider>"])), this.coherence, this.setCoherence.bind(this), this.setCoherence.bind(this)) : $(_templateObject7$9 || (_templateObject7$9 = _taggedTemplateLiteral([""]))), this.payoff ? $(_templateObject8$7 || (_templateObject8$7 = _taggedTemplateLiteral(["<decidable-slider class=\"payoff\" min=\"0\" max=\"100\" step=\"1\" .value=", " @change=", " @input=", ">Payoff</decidable-slider>"])), this.payoff, this.setPayoff.bind(this), this.setPayoff.bind(this)) : $(_templateObject9$7 || (_templateObject9$7 = _taggedTemplateLiteral([""]))), this.color !== undefined ? $(_templateObject10$7 || (_templateObject10$7 = _taggedTemplateLiteral(["\n            <decidable-toggle @change=", ">\n              <span slot=\"label\">Emphasis</span>\n              <decidable-toggle-option name=", " value=\"none\" ?checked=", ">None</decidable-toggle-option>\n              <decidable-toggle-option name=", " value=\"accuracy\" ?checked=", ">Accuracy</decidable-toggle-option>\n              <decidable-toggle-option name=", " value=\"stimulus\" ?checked=", ">Stimulus</decidable-toggle-option>\n              <decidable-toggle-option name=", " value=\"response\" ?checked=", ">Response</decidable-toggle-option>\n              <decidable-toggle-option name=", " value=\"outcome\" ?checked=", ">Outcome</decidable-toggle-option>\n            </decidable-toggle>\n          "])), this.chooseColor.bind(this), "".concat(this.uniqueId, "-color"), this.color === 'none', "".concat(this.uniqueId, "-color"), this.color === 'accuracy', "".concat(this.uniqueId, "-color"), this.color === 'stimulus', "".concat(this.uniqueId, "-color"), this.color === 'response', "".concat(this.uniqueId, "-color"), this.color === 'outcome') : $(_templateObject11$7 || (_templateObject11$7 = _taggedTemplateLiteral([""]))), this.zRoc !== undefined ? $(_templateObject12$2 || (_templateObject12$2 = _taggedTemplateLiteral(["\n            <decidable-switch ?checked=", " @change=", ">\n              <span class=\"math-var\">z</span>ROC\n              <span slot=\"off-label\">ROC</span>\n            </decidable-switch>\n          "])), this.zRoc, this.flipZRoc.bind(this)) : $(_templateObject13$2 || (_templateObject13$2 = _taggedTemplateLiteral([""]))), this.run ? $(_templateObject14$2 || (_templateObject14$2 = _taggedTemplateLiteral(["<decidable-button name=\"run\" ?disabled=", " @click=", ">Run</decidable-button>"])), this.state === 'running' || this.state === 'ended', this.doRun.bind(this)) : $(_templateObject15$2 || (_templateObject15$2 = _taggedTemplateLiteral([""]))), this.pause ? $(_templateObject16$2 || (_templateObject16$2 = _taggedTemplateLiteral(["<decidable-button name=\"pause\" ?disabled=", " @click=", ">Pause</decidable-button>"])), this.state !== 'running', this.doPause.bind(this)) : $(_templateObject17$2 || (_templateObject17$2 = _taggedTemplateLiteral([""]))), this.reset ? $(_templateObject18$2 || (_templateObject18$2 = _taggedTemplateLiteral(["<decidable-button name=\"reset\" ?disabled=", " @click=", ">Reset</decidable-button>"])), this.state === 'resetted', this.doReset.bind(this)) : $(_templateObject19$2 || (_templateObject19$2 = _taggedTemplateLiteral([""]))));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        trials: {
          attribute: 'trials',
          type: Number,
          reflect: true
        },
        duration: {
          attribute: 'duration',
          type: Number,
          reflect: true
        },
        coherence: {
          attribute: 'coherence',
          type: Number,
          reflect: true
        },
        payoff: {
          attribute: 'payoff',
          type: Number,
          reflect: true
        },
        color: {
          attribute: 'color',
          type: String,
          reflect: true
        },
        zRoc: {
          attribute: 'z-roc',
          type: Boolean,
          reflect: true
        },
        run: {
          attribute: 'run',
          type: Boolean,
          reflect: true
        },
        pause: {
          attribute: 'pause',
          type: Boolean,
          reflect: true
        },
        reset: {
          attribute: 'reset',
          type: Boolean,
          reflect: true
        },
        state: {
          atribute: false,
          type: String,
          reflect: false
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTControl), "styles", this), r$2(_templateObject20$2 || (_templateObject20$2 = _taggedTemplateLiteral(["\n        :host {\n          display: inline-block;\n        }\n\n        .holder {\n          display: flex;\n\n          flex-direction: row;\n\n          align-items: stretch;\n          justify-content: center;\n        }\n\n        .buttons {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: stretch;\n          justify-content: center;\n        }\n\n        /* Payoff  Slider */\n        .payoff {\n          --decidable-spinner-prefix: \"$\";\n        }\n      "])))];
    }
  }]);

  return SDTControl;
}(SDTElement);
customElements.define('sdt-control', SDTControl);

var _templateObject$b, _templateObject2$a;
/*
  SDTModel element
  <sdt-model>

  Attributes:
    d'; C;
    FAR; HR; zFAR; zHR;

    draggable: d'; C;
    highlight: H; M; CR; FA;

    Styles:
      ??
*/

var SDTModel = /*#__PURE__*/function (_SDTElement) {
  _inherits(SDTModel, _SDTElement);

  var _super = _createSuper(SDTModel);

  function SDTModel() {
    var _this;

    _classCallCheck(this, SDTModel);

    _this = _super.call(this); // Attributes

    _this.colors = ['outcome', 'response', 'stimulus', 'none']; // Allowable values of 'color'

    _this.color = 'outcome'; // How to color distributions and trials

    _this.distributions = false; // Show distributions?

    _this.threshold = false; // Show threshold?

    _this.unequal = false; // Allow unequal variance?

    _this.sensitivity = false; // Show d'?

    _this.bias = false; // Show c?

    _this.variance = false; // Show variance?

    _this.histogram = false; // Show histogram?

    _this.d = 1; // Sensitivity

    _this.c = 0; // Bias

    _this.s = 1; // Variance
    // Properties

    _this.binWidth = 0.25; // Histogram bin width in units of evidence

    _this.signals = ['present', 'absent']; // Allowable values of trial.signal

    _this.responses = ['present', 'absent']; // Allowable values of trial.response

    _this.trials = []; // Array of simulated trials

    _this.width = NaN; // Width of component in pixels

    _this.height = NaN; // Height of component in pixels

    _this.rem = NaN; // Pixels per rem for component
    // Private

    _this.muN = NaN; // Mean of noise distribution

    _this.muS = NaN; // Mean of signal distribution

    _this.l = NaN; // lambda (threshold location)

    _this.hS = NaN; // Height of signal distribution

    _this.binRange = [-3.0, 3.0]; // Range of histogram

    _this.h = 0; // Hits

    _this.m = 0; // Misses

    _this.fa = 0; // False alarms

    _this.cr = 0; // Correct rejections

    _this.firstUpdate = true; // Are we waiting for the first update?

    _this.drag = false; // Are we currently dragging?

    _this.alignState();

    return _this;
  }

  _createClass(SDTModel, [{
    key: "reset",
    value: function reset() {
      this.trials = [];
      this.h = 0;
      this.m = 0;
      this.fa = 0;
      this.cr = 0;
    }
  }, {
    key: "trial",
    value: function trial(trialNumber, signal, duration, wait, iti) {
      var trial = {};
      trial.new = true;
      trial.paused = false;
      trial.trial = trialNumber;
      trial.signal = signal;
      trial.duration = duration;
      trial.wait = wait;
      trial.iti = iti;
      trial.evidence = jstat.exports.normal.sample(0, 1);
      this.alignTrial(trial);
      this.trials.push(trial);
      this.requestUpdate();
    }
  }, {
    key: "alignTrial",
    value: function alignTrial(trial) {
      if (trial.signal === 'present') {
        trial.trueEvidence = trial.evidence * this.s + this.muS;
        trial.response = trial.trueEvidence > this.l ? 'present' : 'absent';
        trial.outcome = trial.response === 'present' ? 'h' : 'm';
      } else {
        // trial.signal == 'absent'
        trial.trueEvidence = trial.evidence + this.muN;
        trial.response = trial.trueEvidence > this.l ? 'present' : 'absent';
        trial.outcome = trial.response === 'present' ? 'fa' : 'cr';
      }

      if (!trial.new) this[trial.outcome] += 1;
      return trial;
    }
  }, {
    key: "alignState",
    value: function alignState() {
      this.far = SDTMath.dC2Far(this.d, this.c, this.s);
      this.hr = SDTMath.dC2Hr(this.d, this.c, this.s);
      this.muN = SDTMath.d2MuN(this.d, this.s);
      this.muS = SDTMath.d2MuS(this.d, this.s);
      this.l = SDTMath.c2L(this.c, this.s);
      this.hS = SDTMath.s2H(this.s);
      this.h = 0;
      this.m = 0;
      this.fa = 0;
      this.cr = 0;

      for (var i = 0; i < this.trials.length; i += 1) {
        this.alignTrial(this.trials[i]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-line class-methods-use-this
      return $(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["\n      ", "\n    "])), SDTElement.svgFilters);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-model-change', {
        detail: {
          d: this.d,
          c: this.c,
          s: this.s,
          far: this.far,
          hr: this.hr,
          h: this.h,
          m: this.m,
          fa: this.fa,
          cr: this.cr
        },
        bubbles: true
      }));
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      this.width = parseFloat(this.getComputedStyleValue('width'), 10);
      this.height = parseFloat(this.getComputedStyleValue('height'), 10);
      this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10); // console.log(`sdt-model: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(SDTModel.prototype), "connectedCallback", this).call(this);

      window.addEventListener('resize', this.getDimensions.bind(this));
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      window.removeEventListener('resize', this.getDimensions.bind(this));

      _get(_getPrototypeOf(SDTModel.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated(changedProperties) {
      _get(_getPrototypeOf(SDTModel.prototype), "firstUpdated", this).call(this, changedProperties); // Get the width and height after initial render/update has occurred
      // HACK Edge: Edge doesn't have width/height until after a 0ms timeout


      window.setTimeout(this.getDimensions.bind(this), 0);
    }
  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this2 = this;

      _get(_getPrototypeOf(SDTModel.prototype), "update", this).call(this, changedProperties);

      this.alignState(); // Bail out if we can't get the width/height

      if (Number.isNaN(this.width) || Number.isNaN(this.height) || Number.isNaN(this.rem)) {
        return;
      }

      var hostWidth = this.width;
      var hostHeight = this.height;
      var hostAspectRatio = hostWidth / hostHeight;
      var elementAspectRatio = 1.8;
      var elementWidth;
      var elementHeight;

      if (hostAspectRatio > elementAspectRatio) {
        elementHeight = hostHeight;
        elementWidth = elementHeight * elementAspectRatio;
      } else {
        elementWidth = hostWidth;
        elementHeight = elementWidth / elementAspectRatio;
      }

      var margin = {
        top: 2 * this.rem,
        bottom: 3 * this.rem,
        left: 3 * this.rem,
        right: (this.histogram && this.distributions ? 3 : 0.75) * this.rem
      };
      var height = elementHeight - (margin.top + margin.bottom);
      var width = elementWidth - (margin.left + margin.right);
      var transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10); // X Scale

      var xScale = linear().domain([-3, 3]) // Evidence // FIX - no hardcoding
      .range([0, width]); // Y Scale

      var yScale = linear().domain([0.5, 0]) // Probability // FIX - no hardcoding
      .range([0, height]); // 2nd Y Scale

      var strokeWidth = 3; // FIX - no hardcoding

      var binWidth = xScale(this.binWidth) - xScale(0);
      var y2Scale = linear().domain([height / binWidth, 0]) // Number of Stimuli
      .range([0, height]); // Threshold Drag behavior

      var dragThreshold = drag().subject(function () {
        return {
          x: xScale(_this2.l),
          y: 0
        };
      }).on('start', function (event) {
        var element = event.currentTarget;
        select(element).classed('dragging', true);
      }).on('drag', function (event) {
        _this2.drag = true;
        var l = xScale.invert(event.x); // Clamp lambda to stay visible

        l = l < xScale.domain()[0] ? xScale.domain()[0] : l > xScale.domain()[1] ? xScale.domain()[1] : l;
        _this2.c = SDTMath.l2C(l, _this2.s);

        _this2.alignState();

        _this2.sendEvent();
      }).on('end', function (event) {
        var element = event.currentTarget;
        select(element).classed('dragging', false);
      }); // Noise Curve Drag behavior

      var dragNoise = drag().subject(function () {
        return {
          x: xScale(_this2.muN),
          y: 0
        };
      }).on('start', function (event) {
        var element = event.currentTarget;
        select(element).classed('dragging', true);
      }).on('drag', function (event) {
        _this2.drag = true;
        var muN = xScale.invert(event.x); // Clamp Noise Curve to stay visible

        muN = muN < xScale.domain()[0] ? xScale.domain()[0] : muN > xScale.domain()[1] ? xScale.domain()[1] : muN;
        _this2.d = SDTMath.muN2D(muN, _this2.s);

        _this2.alignState();

        _this2.sendEvent();
      }).on('end', function (event) {
        var element = event.currentTarget;
        select(element).classed('dragging', false);
      }); // Signal+Noise Curve Drag behavior

      var dragSignal = drag().subject(function () {
        return {
          x: xScale(_this2.muS),
          y: yScale(_this2.hS)
        };
      }).on('start', function (event, datum) {
        var element = event.currentTarget;
        select(element).classed('dragging', true);
        datum.startX = event.x;
        datum.startY = event.y;
        datum.startHS = _this2.hS;
        datum.startMuS = _this2.muS;
      }).on('drag', function (event, datum) {
        _this2.drag = true;
        var muS = _this2.muS; // eslint-disable-line prefer-destructuring

        if (_this2.interactive) {
          muS = xScale.invert(event.x); // Clamp Signal Curve to stay visible

          muS = muS < xScale.domain()[0] ? xScale.domain()[0] : muS > xScale.domain()[1] ? xScale.domain()[1] : muS;
        }

        var hS = _this2.hS; // eslint-disable-line prefer-destructuring

        if (_this2.unequal) {
          hS = yScale.invert(event.y); // Clamp Signal Curve to stay visible

          hS = hS < 0.01 ? 0.01 : hS > yScale.domain()[0] ? yScale.domain()[0] : hS;
        }

        if (_this2.interactive && _this2.unequal) {
          // Use shift key as modifier for single dimension
          if (event.sourceEvent.shiftKey) {
            if (Math.abs(event.x - datum.startX) > Math.abs(event.y - datum.startY)) {
              hS = datum.startHS;
            } else {
              muS = datum.startMuS;
            }
          }
        }

        if (_this2.unequal) {
          _this2.s = SDTMath.h2S(hS);
          _this2.c = SDTMath.l2C(_this2.l, _this2.s);
        }

        _this2.d = SDTMath.muS2D(muS, _this2.s);

        _this2.alignState();

        _this2.sendEvent();
      }).on('end', function (event) {
        var element = event.currentTarget;
        select(element).classed('dragging', false);
      }); // Line for Evidence/Probability Space

      var line$1 = line().x(function (datum) {
        return xScale(datum.e);
      }).y(function (datum) {
        return yScale(datum.p);
      }); // Svg
      //  DATA-JOIN

      var svgUpdate = select(this.renderRoot).selectAll('.main').data([{
        width: this.width,
        height: this.height,
        rem: this.rem
      }]); // ENTER

      var svgEnter = svgUpdate.enter().append('svg').classed('main', true); // MERGE

      var svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', "0 0 ".concat(elementWidth, " ").concat(elementHeight)); // Plot
      //  ENTER

      var plotEnter = svgEnter.append('g').classed('plot', true); //  MERGE

      var plotMerge = svgMerge.select('.plot').attr('transform', "translate(".concat(margin.left, ", ").concat(margin.top, ")")); // Underlayer
      //  ENTER

      var underlayerEnter = plotEnter.append('g').classed('underlayer', true); // MERGE

      var underlayerMerge = plotMerge.select('.underlayer'); // Background
      //  ENTER

      underlayerEnter.append('rect').classed('background', true); //  MERGE

      underlayerMerge.select('.background').attr('height', height).attr('width', width); // X Axis
      //  ENTER

      underlayerEnter.append('g').classed('axis-x', true); //  MERGE

      var axisXMerge = underlayerMerge.select('.axis-x').attr('transform', "translate(0, ".concat(height, ")")).call(axisBottom(xScale)).attr('font-size', null).attr('font-family', null);
      axisXMerge.selectAll('line, path').attr('stroke', null); // X Axis Title
      //  ENTER

      underlayerEnter.append('text').classed('title-x', true).attr('text-anchor', 'middle').text('Evidence'); //  MERGE

      underlayerMerge.select('.title-x').attr('transform', "translate(".concat(width / 2, ", ").concat(height + 2.25 * this.rem, ")")); // Y Axis
      //  DATA-JOIN

      var axisYUpdate = underlayerMerge.selectAll('.axis-y').data(this.distributions ? [{}] : []); //  ENTER

      var axisYEnter = axisYUpdate.enter().append('g').classed('axis-y', true); //  MERGE

      var axisYMerge = axisYEnter.merge(axisYUpdate).call(axisLeft(yScale).ticks(5)).attr('font-size', null).attr('font-family', null);
      axisYMerge.selectAll('line, path').attr('stroke', null); //  EXIT

      axisYUpdate.exit().remove(); // Y Axis Title
      //  DATA-JOIN

      var titleYUpdate = underlayerMerge.selectAll('.title-y').data(this.distributions ? [{}] : []); //  ENTER

      var titleYEnter = titleYUpdate.enter().append('text').classed('title-y', true).attr('text-anchor', 'middle').text('Probability'); //  MERGE

      titleYEnter.merge(titleYUpdate).attr('transform', "translate(".concat(-2 * this.rem, ", ").concat(height / 2, ")rotate(-90)")); //  EXIT

      titleYUpdate.exit().remove(); // 2nd Y Axis
      //  DATA-JOIN

      var axisY2Update = underlayerMerge.selectAll('.axis-y2').data(this.histogram ? [{}] : []); //  ENTER

      var axisY2Enter = axisY2Update.enter().append('g').classed('axis-y2', true); //  MERGE

      var axisY2Merge = axisY2Enter.merge(axisY2Update).attr('transform', this.distributions ? "translate(".concat(width, ", 0)") : '').call(this.distributions ? axisRight(y2Scale).ticks(10) : axisLeft(y2Scale).ticks(10)).attr('font-size', null).attr('font-family', null);
      axisY2Merge.selectAll('line, path').attr('stroke', null); //  EXIT

      axisY2Update.exit().remove(); // 2nd Y Axis Title
      //  DATA-JOIN

      var titleY2Update = underlayerMerge.selectAll('.title-y2').data(this.histogram ? [{}] : []); //  ENTER

      var titleY2Enter = titleY2Update.enter().append('text').classed('title-y2', true).attr('text-anchor', 'middle').text('Count'); //  MERGE

      titleY2Enter.merge(titleY2Update).attr('transform', this.distributions ? "translate(".concat(width + 1.5 * this.rem, ", ").concat(height / 2, ")rotate(90)") : "translate(".concat(-1.5 * this.rem, ", ").concat(height / 2, ")rotate(-90)")); //  EXIT

      titleY2Update.exit().remove(); // Plot Content

      plotEnter.append('g').classed('content', true); //  MERGE

      var contentMerge = plotMerge.select('.content'); // Noise & Signal + Noise Distributions
      //  DATA-JOIN

      var signalNoiseUpdate = contentMerge.selectAll('.signal-noise').data(this.distributions ? [{}] : []); //  ENTER

      var signalNoiseEnter = signalNoiseUpdate.enter().append('g').classed('signal-noise', true); //  MERGE

      var signalNoiseMerge = signalNoiseEnter.merge(signalNoiseUpdate); //  EXIT

      signalNoiseUpdate.exit().remove(); // Noise Distribution
      //  ENTER

      var noiseEnter = signalNoiseEnter.append('g').classed('noise', true); //  MERGE

      var noiseMerge = signalNoiseMerge.selectAll('.noise').attr('tabindex', this.interactive ? 0 : null).classed('interactive', this.interactive).on('keydown', this.interactive ? function (event) {
        if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
          var muN = _this2.muN; // eslint-disable-line prefer-destructuring

          switch (event.key) {
            case 'ArrowRight':
              muN += event.shiftKey ? 0.01 : 0.1;
              break;

            case 'ArrowLeft':
              muN -= event.shiftKey ? 0.01 : 0.1;
              break;
          } // Clamp C to visible extent


          muN = muN < xScale.domain()[0] ? xScale.domain()[0] : muN > xScale.domain()[1] ? xScale.domain()[1] : muN;

          if (muN !== _this2.muN) {
            _this2.d = SDTMath.muN2D(muN, _this2.s);

            _this2.alignState();

            _this2.sendEvent();
          }

          event.preventDefault();
        }
      } : null);

      if (this.firstUpdate || changedProperties.has('interactive')) {
        if (this.interactive) {
          noiseMerge.call(dragNoise);
        } else {
          noiseMerge.on('.drag', null);
        }
      } // CR Curve
      //  ENTER


      noiseEnter.append('path').classed('curve-cr', true); //  MERGE

      noiseMerge.select('.curve-cr').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', function (datum, index, elements) {
        var element = elements[index];
        var interpolateD = interpolate$1(element.d !== undefined ? element.d : _this2.d, _this2.d);
        var interpolateC = interpolate$1(element.c !== undefined ? element.c : _this2.c, _this2.c);
        var interpolateS = interpolate$1(element.s !== undefined ? element.s : _this2.s, _this2.s);
        return function (time) {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          element.s = interpolateS(time);
          var correctRejections = range(xScale.domain()[0], SDTMath.c2L(element.c, element.s), 0.05).map(function (e) {
            return {
              e: e,
              p: jstat.exports.normal.pdf(e, SDTMath.d2MuN(element.d, element.s), 1)
            };
          });
          correctRejections.push({
            e: SDTMath.c2L(element.c, element.s),
            p: jstat.exports.normal.pdf(SDTMath.c2L(element.c, element.s), SDTMath.d2MuN(element.d, element.s), 1)
          });
          correctRejections.push({
            e: SDTMath.c2L(element.c, element.s),
            p: 0
          });
          correctRejections.push({
            e: xScale.domain()[0],
            p: 0
          });
          return line$1(correctRejections);
        };
      }); // FA Curve
      //  ENTER

      noiseEnter.append('path').classed('curve-fa', true); //  MERGE

      noiseMerge.select('.curve-fa').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', function (datum, index, elements) {
        var element = elements[index];
        var interpolateD = interpolate$1(element.d !== undefined ? element.d : _this2.d, _this2.d);
        var interpolateC = interpolate$1(element.c !== undefined ? element.c : _this2.c, _this2.c);
        var interpolateS = interpolate$1(element.s !== undefined ? element.s : _this2.s, _this2.s);
        return function (time) {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          element.s = interpolateS(time);
          var falseAlarms = range(SDTMath.c2L(element.c, element.s), xScale.domain()[1], 0.05).map(function (e) {
            return {
              e: e,
              p: jstat.exports.normal.pdf(e, SDTMath.d2MuN(element.d, element.s), 1)
            };
          });
          falseAlarms.push({
            e: xScale.domain()[1],
            p: jstat.exports.normal.pdf(xScale.domain()[1], SDTMath.d2MuN(element.d, element.s), 1)
          });
          falseAlarms.push({
            e: xScale.domain()[1],
            p: 0
          });
          falseAlarms.push({
            e: SDTMath.c2L(element.c, element.s),
            p: 0
          });
          return line$1(falseAlarms);
        };
      }); // Noise Curve
      //  ENTER

      noiseEnter.append('path').classed('curve-noise', true); //  MERGE

      noiseMerge.select('.curve-noise').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', function (datum, index, elements) {
        var element = elements[index];
        var interpolateD = interpolate$1(element.d !== undefined ? element.d : _this2.d, _this2.d);
        var interpolateS = interpolate$1(element.s !== undefined ? element.s : _this2.s, _this2.s);
        return function (time) {
          element.d = interpolateD(time);
          element.s = interpolateS(time);
          var noise = range(xScale.domain()[0], xScale.domain()[1], 0.05).map(function (e) {
            return {
              e: e,
              p: jstat.exports.normal.pdf(e, SDTMath.d2MuN(element.d, element.s), 1)
            };
          });
          noise.push({
            e: xScale.domain()[1],
            p: jstat.exports.normal.pdf(xScale.domain()[1], SDTMath.d2MuN(element.d, element.s), 1)
          });
          return line$1(noise);
        };
      }); // Signal + Noise Distribution
      //  ENTER

      var signalEnter = signalNoiseEnter.append('g').classed('signal', true); //  MERGE

      var signalMerge = signalNoiseMerge.selectAll('.signal').attr('tabindex', this.interactive || this.unequal ? 0 : null).classed('interactive', this.interactive).classed('unequal', this.unequal).on('keydown.sensitivity', this.interactive ? function (event) {
        if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
          var muS = _this2.muS; // eslint-disable-line prefer-destructuring

          switch (event.key) {
            case 'ArrowRight':
              muS += event.shiftKey ? 0.01 : 0.1;
              break;

            case 'ArrowLeft':
              muS -= event.shiftKey ? 0.01 : 0.1;
              break;
          } // Clamp C to visible extent


          muS = muS < xScale.domain()[0] ? xScale.domain()[0] : muS > xScale.domain()[1] ? xScale.domain()[1] : muS;

          if (muS !== _this2.muS) {
            _this2.d = SDTMath.muS2D(muS, _this2.s);

            _this2.alignState();

            _this2.sendEvent();
          }

          event.preventDefault();
        }
      } : null).on('keydown.variance', this.unequal ? function (event) {
        if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
          var hS = _this2.hS; // eslint-disable-line prefer-destructuring

          switch (event.key) {
            case 'ArrowUp':
              hS += event.shiftKey ? 0.002 : 0.02;
              break;

            case 'ArrowDown':
              hS -= event.shiftKey ? 0.002 : 0.02;
              break;
          } // Clamp s so distribution stays visible


          hS = hS < 0.01 ? 0.01 : hS > yScale.domain()[0] ? yScale.domain()[0] : hS;

          if (hS !== _this2.hS) {
            _this2.s = SDTMath.h2S(hS);
            _this2.d = SDTMath.muN2D(_this2.muN, _this2.s);
            _this2.c = SDTMath.l2C(_this2.l, _this2.s);

            _this2.alignState();

            _this2.sendEvent();
          }

          event.preventDefault();
        }
      } : null);

      if (this.firstUpdate || changedProperties.has('interactive') || changedProperties.has('unequal')) {
        if (this.interactive || this.unequal) {
          signalMerge.call(dragSignal);
        } else {
          signalMerge.on('.drag', null);
        }
      } // M Curve
      //  ENTER


      signalEnter.append('path').classed('curve-m', true); //  MERGE

      signalMerge.select('.curve-m').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', function (datum, index, elements) {
        var element = elements[index];
        var interpolateD = interpolate$1(element.d !== undefined ? element.d : _this2.d, _this2.d);
        var interpolateC = interpolate$1(element.c !== undefined ? element.c : _this2.c, _this2.c);
        var interpolateS = interpolate$1(element.s !== undefined ? element.s : _this2.s, _this2.s);
        return function (time) {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          element.s = interpolateS(time);
          var misses = range(xScale.domain()[0], SDTMath.c2L(element.c, element.s), 0.05).map(function (e) {
            return {
              e: e,
              p: jstat.exports.normal.pdf(e, SDTMath.d2MuS(element.d, element.s), element.s)
            };
          });
          misses.push({
            e: SDTMath.c2L(element.c, element.s),
            p: jstat.exports.normal.pdf(SDTMath.c2L(element.c, element.s), SDTMath.d2MuS(element.d, element.s), element.s)
          });
          misses.push({
            e: SDTMath.c2L(element.c, element.s),
            p: 0
          });
          misses.push({
            e: xScale.domain()[0],
            p: 0
          });
          return line$1(misses);
        };
      }); // H Curve
      //  ENTER

      signalEnter.append('path').classed('curve-h', true); //  MERGE

      signalMerge.select('.curve-h').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', function (datum, index, elements) {
        var element = elements[index];
        var interpolateD = interpolate$1(element.d !== undefined ? element.d : _this2.d, _this2.d);
        var interpolateC = interpolate$1(element.c !== undefined ? element.c : _this2.c, _this2.c);
        var interpolateS = interpolate$1(element.s !== undefined ? element.s : _this2.s, _this2.s);
        return function (time) {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          element.s = interpolateS(time);
          var hits = range(SDTMath.c2L(element.c, element.s), xScale.domain()[1], 0.05).map(function (e) {
            return {
              e: e,
              p: jstat.exports.normal.pdf(e, SDTMath.d2MuS(element.d, element.s), element.s)
            };
          });
          hits.push({
            e: xScale.domain()[1],
            p: jstat.exports.normal.pdf(xScale.domain()[1], SDTMath.d2MuS(element.d, element.s), element.s)
          });
          hits.push({
            e: xScale.domain()[1],
            p: 0
          });
          hits.push({
            e: SDTMath.c2L(element.c, element.s),
            p: 0
          });
          return line$1(hits);
        };
      }); // Signal Curve
      //  ENTER

      signalEnter.append('path').classed('curve-signal', true); //  MERGE

      signalMerge.select('.curve-signal').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attrTween('d', function (datum, index, elements) {
        var element = elements[index];
        var interpolateD = interpolate$1(element.d !== undefined ? element.d : _this2.d, _this2.d);
        var interpolateS = interpolate$1(element.s !== undefined ? element.s : _this2.s, _this2.s);
        return function (time) {
          element.d = interpolateD(time);
          element.s = interpolateS(time);
          var signal = range(xScale.domain()[0], xScale.domain()[1], 0.05).map(function (e) {
            return {
              e: e,
              p: jstat.exports.normal.pdf(e, SDTMath.d2MuS(element.d, element.s), element.s)
            };
          });
          signal.push({
            e: xScale.domain()[1],
            p: jstat.exports.normal.pdf(xScale.domain()[1], SDTMath.d2MuS(element.d, element.s), element.s)
          });
          return line$1(signal);
        };
      }); // d' Measure
      //  DATA-JOIN

      var dUpdate = contentMerge.selectAll('.measure-d').data(this.sensitivity ? [{}] : []); //  ENTER

      var dEnter = dUpdate.enter().append('g').classed('measure-d', true);
      dEnter.append('line').classed('line', true);
      dEnter.append('line').classed('cap-left', true);
      dEnter.append('line').classed('cap-right', true);
      var dLabel = dEnter.append('text').classed('label', true);
      dLabel.append('tspan').classed('d math-var', true).text('d′');
      dLabel.append('tspan').classed('equals', true).text(' = ');
      dLabel.append('tspan').classed('value', true); //  MERGE

      var dMerge = dEnter.merge(dUpdate);
      dMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muN)).attr('y1', yScale(0.43)) // FIX - no hardcoding
      .attr('x2', xScale(this.muS)).attr('y2', yScale(0.43)); // FIX - no hardcoding

      dMerge.select('.cap-left').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muN)).attr('y1', yScale(0.43) + 5) // FIX - no hardcoding
      .attr('x2', xScale(this.muN)).attr('y2', yScale(0.43) - 5); // FIX - no hardcoding

      dMerge.select('.cap-right').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muS)).attr('y1', yScale(0.43) + 5) // FIX - no hardcoding
      .attr('x2', xScale(this.muS)).attr('y2', yScale(0.43) - 5); // FIX - no hardcoding

      var dLabelTransition = dMerge.select('.label').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x', xScale(this.muN > this.muS ? this.muN : this.muS) + 5).attr('y', yScale(0.43) + 3); // FIX - no hardcoding

      dLabelTransition.select('.value').tween('text', function (datum, index, elements) {
        var element = elements[index];
        var interpolateD = interpolate$1(element.d !== undefined ? element.d : _this2.d, _this2.d);
        return function (time) {
          element.d = interpolateD(time);
          select(element).text(+element.d.toFixed(3));
        };
      }); //  EXIT

      dUpdate.exit().remove(); // c Measure
      //  DATA-JOIN

      var cUpdate = contentMerge.selectAll('.measure-c').data(this.bias ? [{}] : []); //  ENTER

      var cEnter = cUpdate.enter().append('g').classed('measure-c', true);
      cEnter.append('line').classed('line', true);
      cEnter.append('line').classed('cap-zero', true);
      var cLabel = cEnter.append('text').classed('label', true);
      cLabel.append('tspan').classed('c math-var', true).text('c');
      cLabel.append('tspan').classed('equals', true).text(' = ');
      cLabel.append('tspan').classed('value', true); //  MERGE

      var cMerge = cEnter.merge(cUpdate);
      cMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.l)).attr('y1', yScale(0.47)) // FIX - no hardcoding
      .attr('x2', xScale(0)).attr('y2', yScale(0.47)); // FIX - no hardcoding

      cMerge.select('.cap-zero').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(0)).attr('y1', yScale(0.47) + 5) // FIX - no hardcoding
      .attr('x2', xScale(0)).attr('y2', yScale(0.47) - 5); // FIX - no hardcoding

      var cLabelTransition = cMerge.select('.label').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x', xScale(0) + (this.l < 0 ? 5 : -5)).attr('y', yScale(0.47) + 3) // FIX - no hardcoding
      .attr('text-anchor', this.c < 0 ? 'start' : 'end');
      cLabelTransition.select('.value').tween('text', function (datum, index, elements) {
        var element = elements[index];
        var interpolateC = interpolate$1(element.c !== undefined ? element.c : _this2.c, _this2.c);
        return function (time) {
          element.c = interpolateC(time);
          select(element).text(+element.c.toFixed(3));
        };
      }); //  EXIT

      cUpdate.exit().remove(); // s Measure
      //  DATA-JOIN

      var sUpdate = contentMerge.selectAll('.measure-s').data(this.variance ? [{}] : []); //  ENTER

      var sEnter = sUpdate.enter().append('g').classed('measure-s', true);
      sEnter.append('line').classed('line', true);
      sEnter.append('line').classed('cap-left', true);
      sEnter.append('line').classed('cap-right', true);
      var sLabel = sEnter.append('text').classed('label', true);
      sLabel.append('tspan').classed('s math-var', true).text('σ');
      sLabel.append('tspan').classed('equals', true).text(' = ');
      sLabel.append('tspan').classed('value', true); //  MERGE

      var sMerge = sEnter.merge(sUpdate);
      sMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muS - this.s)).attr('y1', yScale(jstat.exports.normal.pdf(this.s, 0, this.s)) + 10 / this.s) // FIX - no hardcoding
      .attr('x2', xScale(this.muS + this.s)).attr('y2', yScale(jstat.exports.normal.pdf(this.s, 0, this.s)) + 10 / this.s); // FIX - no hardcoding

      sMerge.select('.cap-left').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muS - this.s)).attr('y1', yScale(jstat.exports.normal.pdf(this.s, 0, this.s)) + 10 / this.s + 5) // FIX - no hardcoding
      .attr('x2', xScale(this.muS - this.s)).attr('y2', yScale(jstat.exports.normal.pdf(this.s, 0, this.s)) + 10 / this.s - 5); // FIX - no hardcoding

      sMerge.select('.cap-right').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.muS + this.s)).attr('y1', yScale(jstat.exports.normal.pdf(this.s, 0, this.s)) + 10 / this.s + 5) // FIX - no hardcoding
      .attr('x2', xScale(this.muS + this.s)).attr('y2', yScale(jstat.exports.normal.pdf(this.s, 0, this.s)) + 10 / this.s - 5); // FIX - no hardcoding

      var sLabelTransition = sMerge.select('.label').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x', xScale(this.muS)).attr('y', yScale(jstat.exports.normal.pdf(this.s, 0, this.s)) + 10 / this.s - 3); // FIX - no hardcoding

      sLabelTransition.select('.value').tween('text', function (datum, index, elements) {
        var element = elements[index];
        var interpolateS = interpolate$1(element.s !== undefined ? element.s : _this2.s, _this2.s);
        return function (time) {
          element.s = interpolateS(time);
          select(element).text(+element.s.toFixed(3));
        };
      }); //  EXIT

      sUpdate.exit().remove(); // Threshold Line
      //  DATA-JOIN

      var thresholdUpdate = contentMerge.selectAll('.threshold').data(this.threshold ? [{}] : []); //  ENTER

      var thresholdEnter = thresholdUpdate.enter().append('g').classed('threshold', true);
      thresholdEnter.append('line').classed('line', true);
      thresholdEnter.append('circle').classed('handle', true).attr('r', 6);
      /* HACK: Firefox does not support CSS SVG Geometry Properties */
      //  MERGE

      var thresholdMerge = thresholdEnter.merge(thresholdUpdate).attr('tabindex', this.interactive ? 0 : null).classed('interactive', this.interactive);

      if (this.firstUpdate || changedProperties.has('interactive')) {
        if (this.interactive) {
          thresholdMerge.call(dragThreshold).on('keydown', function (event) {
            if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
              var l = _this2.l; // eslint-disable-line prefer-destructuring

              switch (event.key) {
                case 'ArrowRight':
                  l += event.shiftKey ? 0.01 : 0.1;
                  break;

                case 'ArrowLeft':
                  l -= event.shiftKey ? 0.01 : 0.1;
                  break;
              } // Clamp C to visible extent


              l = l < xScale.domain()[0] ? xScale.domain()[0] : l > xScale.domain()[1] ? xScale.domain()[1] : l;

              if (l !== _this2.l) {
                _this2.c = SDTMath.l2C(l, _this2.s);

                _this2.alignState();

                _this2.sendEvent();
              }

              event.preventDefault();
            }
          });
        } else {
          thresholdMerge.on('drag', null).on('keydown', null);
        }
      }

      thresholdMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('x1', xScale(this.l)).attr('y1', yScale(0)).attr('x2', xScale(this.l)).attr('y2', yScale(0.54));
      thresholdMerge.select('.handle').transition().duration(this.drag ? 0 : transitionDuration).ease(cubicOut).attr('cx', xScale(this.l)).attr('cy', yScale(0.54)); //  EXIT

      thresholdUpdate.exit().remove(); // Histogram
      //  DATA-JOIN

      var histogramUpdate = contentMerge.selectAll('.histogram').data(this.histogram ? [{}] : []); //  ENTER

      var histogramEnter = histogramUpdate.enter().append('g').classed('histogram', true); //  MERGE

      var histogramMerge = histogramEnter.merge(histogramUpdate); //  EXIT

      histogramUpdate.exit().remove(); // Trials

      if (this.histogram) {
        var histogram = bin().value(function (datum) {
          return datum.trueEvidence;
        }).domain(xScale.domain()).thresholds(range(this.binRange[0], this.binRange[1], this.binWidth));
        var hist = histogram(this.trials);
        var binCountLeft = -1;
        var binCountRight = -1;

        for (var i = 0; i < hist.length; i += 1) {
          for (var j = 0; j < hist[i].length; j += 1) {
            hist[i][j].binValue = hist[i].x0;
            hist[i][j].binCount = j;
            if (i === 0) binCountLeft = j;
            if (i === hist.length - 1) binCountRight = j;
          }
        } // Put out-of-range values in extreme left/right bins


        for (var _i = 0; _i < this.trials.length; _i += 1) {
          if (this.trials[_i].trueEvidence < this.binRange[0]) {
            binCountLeft += 1;
            this.trials[_i].binCount = binCountLeft;
            this.trials[_i].binValue = hist[0].x0;
          }

          if (this.trials[_i].trueEvidence > this.binRange[1]) {
            binCountRight += 1;
            this.trials[_i].binCount = binCountRight;
            this.trials[_i].binValue = hist[hist.length - 1].x0;
          }
        } //  DATA-JOIN


        var trialUpdate = histogramMerge.selectAll('.trial').data(this.trials, function (datum) {
          return datum.trial;
        }); //  ENTER

        var trialEnter = trialUpdate.enter().append('rect').attr('stroke-width', strokeWidth).attr('data-new-trial-ease-time', 0) // use 'data-trial-enter'
        .attr('stroke', this.getComputedStyleValue('---color-acc')).attr('fill', this.getComputedStyleValue('---color-acc-light')); //  MERGE

        var trialMerge = trialEnter.merge(trialUpdate).attr('class', function (datum) {
          return "trial ".concat(datum.outcome);
        }).attr('width', binWidth - strokeWidth).attr('height', binWidth - strokeWidth); //  MERGE - Active New Trials

        var trialMergeNewActive = trialMerge.filter(function (datum) {
          return datum.new && !datum.paused;
        });

        if (!trialMergeNewActive.empty()) {
          var easeTime = trialMergeNewActive.attr('data-new-trial-ease-time');

          var scaleIn = function scaleIn(time) {
            return linear().domain([0, 1]).range([easeTime, 1])(time);
          };

          var scaleOutGenerator = function scaleOutGenerator(easeFunction) {
            return function (time) {
              return linear().domain([easeFunction(easeTime), 1]).range([0, 1])(easeFunction(time));
            };
          };

          trialMergeNewActive.transition('new').duration(function (datum) {
            return Math.floor((datum.duration * 0.75 + datum.wait * 0.25) * (1 - easeTime));
          }).ease(scaleIn).attr('data-new-trial-ease-time', 1).attrTween('stroke', function (datum, index, elements) {
            var element = elements[index];
            var interpolator = interpolateRgb(element.getAttribute('stroke'), _this2.color === 'stimulus' ? datum.signal === 'present' ? _this2.getComputedStyleValue('---color-hr') : _this2.getComputedStyleValue('---color-far') : _this2.color === 'response' ? _this2.getComputedStyleValue("---color-".concat(datum.response)) : _this2.color === 'outcome' ? _this2.getComputedStyleValue("---color-".concat(datum.outcome)) : _this2.getComputedStyleValue('---color-acc'));
            return function (time) {
              return interpolator(scaleOutGenerator(cubicIn)(time));
            };
          }).attrTween('fill', function (datum, index, elements) {
            var element = elements[index];
            var interpolator = interpolateRgb(element.getAttribute('fill'), _this2.color === 'stimulus' ? datum.signal === 'present' ? _this2.getComputedStyleValue('---color-hr-light') : _this2.getComputedStyleValue('---color-far-light') : _this2.color === 'response' ? _this2.getComputedStyleValue("---color-".concat(datum.response, "-light")) : _this2.color === 'outcome' ? _this2.getComputedStyleValue("---color-".concat(datum.outcome, "-light")) : _this2.getComputedStyleValue('---color-acc-light'));
            return function (time) {
              return interpolator(scaleOutGenerator(cubicIn)(time));
            };
          }).attrTween('x', function (datum, index, elements) {
            var element = elements[index];
            var interpolator = interpolate$1(element.getAttribute('x'), xScale(datum.binValue) + strokeWidth / 2);
            return function (time) {
              return interpolator(scaleOutGenerator(cubicOut)(time));
            };
          }).attrTween('y', function (datum, index, elements) {
            var element = elements[index];
            var interpolator = interpolate$1(element.getAttribute('y'), yScale(0) + strokeWidth / 2 - (datum.binCount + 1) * binWidth);
            return function (time) {
              return interpolator(scaleOutGenerator(cubicIn)(time));
            };
          }).on('end', function (datum, index, elements) {
            var element = elements[index];
            element.removeAttribute('data-new-trial-ease-time');
            datum.new = false;

            _this2.alignTrial(datum);

            _this2.dispatchEvent(new CustomEvent('sdt-response', {
              detail: {
                stimulus: datum.signal,
                response: datum.response,
                outcome: datum.outcome,
                h: _this2.h,
                m: _this2.m,
                fa: _this2.fa,
                cr: _this2.cr,
                nr: 0
              },
              bubbles: true
            }));
          });
        } // MERGE - Paused New Trials


        var trialMergeNewPaused = trialMerge.filter(function (datum) {
          return datum.new && datum.paused;
        });

        if (!trialMergeNewPaused.empty()) {
          var _easeTime = trialMergeNewPaused.attr('data-new-trial-ease-time');

          trialMergeNewPaused.transition().duration(transitionDuration).ease(cubicOut).attr('x', function (datum) {
            var interpolator = interpolate$1(0, xScale(datum.binValue) + strokeWidth / 2);
            return interpolator(cubicOut(_easeTime));
          }).attr('y', function (datum) {
            var interpolator = interpolate$1(0, yScale(0) + strokeWidth / 2 - (datum.binCount + 1) * binWidth);
            return interpolator(cubicIn(_easeTime));
          }).attr('stroke', function (datum) {
            var interpolator = interpolateRgb(_this2.getComputedStyleValue('---color-acc'), _this2.color === 'stimulus' ? datum.signal === 'present' ? _this2.getComputedStyleValue('---color-hr') : _this2.getComputedStyleValue('---color-far') : _this2.color === 'response' ? _this2.getComputedStyleValue("---color-".concat(datum.response)) : _this2.color === 'outcome' ? _this2.getComputedStyleValue("---color-".concat(datum.outcome)) : _this2.getComputedStyleValue('---color-acc'));
            return interpolator(cubicIn(_easeTime));
          }).attr('fill', function (datum) {
            var interpolator = interpolateRgb(_this2.getComputedStyleValue('---color-acc-light'), _this2.color === 'stimulus' ? datum.signal === 'present' ? _this2.getComputedStyleValue('---color-hr-light') : _this2.getComputedStyleValue('---color-far-light') : _this2.color === 'response' ? _this2.getComputedStyleValue("---color-".concat(datum.response, "-light")) : _this2.color === 'outcome' ? _this2.getComputedStyleValue("---color-".concat(datum.outcome, "-light")) : _this2.getComputedStyleValue('---color-acc-light'));
            return interpolator(cubicIn(_easeTime));
          });
        } //  MERGE - Old Trials


        trialMerge.filter(function (datum) {
          return !datum.new;
        }).transition().duration(transitionDuration).ease(cubicOut).attr('x', function (datum) {
          return xScale(datum.binValue) + strokeWidth / 2;
        }).attr('y', function (datum) {
          return yScale(0) + strokeWidth / 2 - (datum.binCount + 1) * binWidth;
        }).attr('stroke', function (datum) {
          return _this2.color === 'stimulus' ? datum.signal === 'present' ? _this2.getComputedStyleValue('---color-hr') : _this2.getComputedStyleValue('---color-far') : _this2.color === 'response' ? _this2.getComputedStyleValue("---color-".concat(datum.response)) : _this2.color === 'outcome' ? _this2.getComputedStyleValue("---color-".concat(datum.outcome)) : _this2.getComputedStyleValue('---color-acc');
        }).attr('fill', function (datum) {
          return _this2.color === 'stimulus' ? datum.signal === 'present' ? _this2.getComputedStyleValue('---color-hr-light') : _this2.getComputedStyleValue('---color-far-light') : _this2.color === 'response' ? _this2.getComputedStyleValue("---color-".concat(datum.response, "-light")) : _this2.color === 'outcome' ? _this2.getComputedStyleValue("---color-".concat(datum.outcome, "-light")) : _this2.getComputedStyleValue('---color-acc-light');
        }); //  EXIT

        trialUpdate.exit().transition().duration(transitionDuration).ease(linear$1).attrTween('stroke', function (datum, index, elements) {
          var element = elements[index];
          var interpolator = interpolateRgb(element.getAttribute('stroke'), _this2.getComputedStyleValue('---color-acc'));
          return function (time) {
            return interpolator(cubicIn(time));
          };
        }).attrTween('fill', function (datum, index, elements) {
          var element = elements[index];
          var interpolator = interpolateRgb(element.getAttribute('fill'), _this2.getComputedStyleValue('---color-acc-light'));
          return function (time) {
            return interpolator(cubicIn(time));
          };
        }).attrTween('x', function (datum, index, elements) {
          var element = elements[index];
          var interpolator = interpolate$1(element.getAttribute('x'), 0);
          return function (time) {
            return interpolator(cubicIn(time));
          };
        }).attrTween('y', function (datum, index, elements) {
          var element = elements[index];
          var interpolator = interpolate$1(element.getAttribute('y'), 0);
          return function (time) {
            return interpolator(cubicOut(time));
          };
        }).remove();
      } // Overlayer
      //  ENTER


      var overlayerEnter = plotEnter.append('g').classed('overlayer', true); // MERGE

      var overlayerMerge = plotMerge.select('.overlayer'); // Background
      //  ENTER

      overlayerEnter.append('rect').classed('background', true); //  MERGE

      overlayerMerge.select('.background').attr('height', height).attr('width', width);
      this.drag = false;
      this.firstUpdate = false;
    } // Called to pause trial animations!

  }, {
    key: "pauseTrial",
    value: function pauseTrial() {
      var trialNew = select(this.renderRoot).select('.trial[data-new-trial-ease-time]');
      trialNew.interrupt('new');
      trialNew.datum(function (datum) {
        datum.paused = true;
        return datum;
      });
    } // Called to resume trial animations!

  }, {
    key: "resumeTrial",
    value: function resumeTrial() {
      var trialNew = select(this.renderRoot).select('.trial[data-new-trial-ease-time]');
      trialNew.datum(function (datum) {
        datum.paused = false;
        return datum;
      });
      this.requestUpdate();
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        color: {
          attribute: 'color',
          type: String,
          reflect: true
        },
        distributions: {
          attribute: 'distributions',
          type: Boolean,
          reflect: true
        },
        threshold: {
          attribute: 'threshold',
          type: Boolean,
          reflect: true
        },
        unequal: {
          attribute: 'unequal',
          type: Boolean,
          reflect: true
        },
        sensitivity: {
          attribute: 'sensitivity',
          type: Boolean,
          reflect: true
        },
        bias: {
          attribute: 'bias',
          type: Boolean,
          reflect: true
        },
        variance: {
          attribute: 'variance',
          type: Boolean,
          reflect: true
        },
        histogram: {
          attribute: 'histogram',
          type: Boolean,
          reflect: true
        },
        d: {
          attribute: 'd',
          type: Number,
          reflect: true
        },
        c: {
          attribute: 'c',
          type: Number,
          reflect: true
        },
        s: {
          attribute: 's',
          type: Number,
          reflect: true
        },
        far: {
          attribute: false,
          type: Number,
          reflect: false
        },
        hr: {
          attribute: false,
          type: Number,
          reflect: false
        },
        binWidth: {
          attribute: false,
          type: Number,
          reflect: false
        },
        trials: {
          attribute: false,
          type: Array,
          reflect: false
        },
        width: {
          attribute: false,
          type: Number,
          reflect: false
        },
        height: {
          attribute: false,
          type: Number,
          reflect: false
        },
        rem: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTModel), "styles", this), r$2(_templateObject2$a || (_templateObject2$a = _taggedTemplateLiteral(["\n        :host {\n          display: inline-block;\n\n          width: 27rem;\n          height: 15rem;\n        }\n\n        .main {\n          width: 100%;\n          height: 100%;\n        }\n\n        text {\n          /* stylelint-disable property-no-vendor-prefix */\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n        }\n\n        .tick {\n          font-size: 0.75rem;\n        }\n\n        .axis-x path,\n        .axis-x line,\n        .axis-y path,\n        .axis-y line,\n        .axis-y2 path,\n        .axis-y2 line {\n          stroke: var(---color-element-border);\n        }\n\n        .noise.interactive,\n        .signal.interactive,\n        .threshold.interactive {\n          cursor: ew-resize;\n\n          filter: url(\"#shadow-2\");\n          outline: none;\n        }\n\n        .signal.unequal {\n          cursor: ns-resize;\n\n          filter: url(\"#shadow-2\");\n          outline: none;\n        }\n\n        .signal.interactive.unequal {\n          cursor: move;\n        }\n\n        .noise.interactive:hover,\n        .signal.interactive:hover,\n        .signal.unequal:hover,\n        .threshold.interactive:hover {\n          filter: url(\"#shadow-4\");\n\n          /* HACK: This gets Safari to correctly apply the filter! */\n          transform: translateX(0);\n        }\n\n        .noise.interactive:hover,\n        .signal.interactive:hover,\n        .signal.unequal:hover,\n        .threshold.interactive:active {\n          filter: url(\"#shadow-8\");\n\n          /* HACK: This gets Safari to correctly apply the filter! */\n          transform: translateY(0);\n        }\n\n        :host(.keyboard) .noise.interactive:focus,\n        :host(.keyboard) .signal.interactive:focus,\n        :host(.keyboard) .signal.unequal:focus,\n        :host(.keyboard) .threshold.interactive:focus {\n          filter: url(\"#shadow-8\");\n\n          /* HACK: This gets Safari to correctly apply the filter! */\n          transform: translateZ(0);\n        }\n\n        .underlayer .background {\n          fill: var(---color-element-background);\n          stroke: none;\n        }\n\n        .overlayer .background {\n          fill: none;\n          stroke: var(---color-element-border);\n          stroke-width: 1;\n          shape-rendering: crispEdges;\n        }\n\n        .title-x,\n        .title-y,\n        .title-y2 {\n          font-weight: 600;\n\n          fill: currentColor;\n        }\n\n        .curve-cr,\n        .curve-fa,\n        .curve-m,\n        .curve-h {\n          fill-opacity: 0.5;\n          stroke: none;\n\n          transition: fill var(---transition-duration) ease;\n        }\n\n        .curve-cr {\n          fill: var(---color-cr);\n        }\n\n        .curve-fa {\n          fill: var(---color-fa);\n        }\n\n        .curve-m {\n          fill: var(---color-m);\n        }\n\n        .curve-h {\n          fill: var(---color-h);\n        }\n\n        :host([color=\"accuracy\"]) .curve-h,\n        :host([color=\"accuracy\"]) .curve-cr {\n          fill: var(---color-correct);\n        }\n\n        :host([color=\"accuracy\"]) .curve-m,\n        :host([color=\"accuracy\"]) .curve-fa {\n          fill: var(---color-error);\n        }\n\n        :host([color=\"stimulus\"]) .curve-cr,\n        :host([color=\"stimulus\"]) .curve-fa {\n          fill: var(---color-far);\n        }\n\n        :host([color=\"stimulus\"]) .curve-m,\n        :host([color=\"stimulus\"]) .curve-h {\n          fill: var(---color-hr);\n        }\n\n        :host([color=\"response\"]) .curve-cr,\n        :host([color=\"response\"]) .curve-m {\n          fill: var(---color-absent);\n        }\n\n        :host([color=\"response\"]) .curve-fa,\n        :host([color=\"response\"]) .curve-h {\n          fill: var(---color-present);\n        }\n\n        :host([color=\"none\"]) .curve-cr,\n        :host([color=\"none\"]) .curve-fa,\n        :host([color=\"none\"]) .curve-m,\n        :host([color=\"none\"]) .curve-h {\n          fill: var(---color-element-enabled);\n        }\n\n        .curve-noise,\n        .curve-signal {\n          fill: none;\n          stroke: var(---color-element-emphasis);\n          stroke-width: 2;\n        }\n\n        .measure-d,\n        .measure-c,\n        .measure-s {\n          pointer-events: none;\n        }\n\n        .threshold .line {\n          stroke: var(---color-element-emphasis);\n          stroke-width: 2;\n        }\n\n        .threshold .handle {\n          fill: var(---color-element-emphasis);\n\n          /* r: 6; HACK: Firefox does not support CSS SVG Geometry Properties */\n        }\n\n        /* Make a larger target for touch users */\n        @media (pointer: coarse) {\n          .threshold.interactive .handle {\n            stroke: #000000;\n            stroke-opacity: 0;\n            stroke-width: 12px;\n          }\n        }\n\n        .measure-d .line,\n        .measure-d .cap-left,\n        .measure-d .cap-right {\n          stroke: var(---color-d);\n          stroke-width: 2;\n          shape-rendering: crispEdges;\n        }\n\n        .measure-d .label {\n          font-size: 0.75rem;\n\n          text-anchor: start;\n          fill: currentColor;\n        }\n\n        .measure-c .line,\n        .measure-c .cap-zero {\n          stroke: var(---color-c);\n          stroke-width: 2;\n          shape-rendering: crispEdges;\n        }\n\n        .measure-c .label {\n          font-size: 0.75rem;\n\n          fill: currentColor;\n        }\n\n        .measure-s .line,\n        .measure-s .cap-left,\n        .measure-s .cap-right {\n          stroke: var(---color-s);\n          stroke-width: 2;\n          shape-rendering: crispEdges;\n        }\n\n        .measure-s .label {\n          font-size: 0.75rem;\n\n          text-anchor: middle;\n          fill: currentColor;\n        }\n      "])))];
    }
  }]);

  return SDTModel;
}(SDTElement);
customElements.define('sdt-model', SDTModel);

var _templateObject$a, _templateObject2$9, _templateObject3$8, _templateObject4$8, _templateObject5$8, _templateObject6$8, _templateObject7$8, _templateObject8$6, _templateObject9$6, _templateObject10$6, _templateObject11$6, _templateObject12$1, _templateObject13$1, _templateObject14$1, _templateObject15$1, _templateObject16$1, _templateObject17$1, _templateObject18$1, _templateObject19$1, _templateObject20$1;
/*
  SDTResponse element
  <sdt-response>

  Attributes:

*/

var SDTResponse = /*#__PURE__*/function (_SDTElement) {
  _inherits(SDTResponse, _SDTElement);

  var _super = _createSuper(SDTResponse);

  function SDTResponse() {
    var _this;

    _classCallCheck(this, SDTResponse);

    _this = _super.call(this); // Attributes

    _this.feedbacks = ['none', 'accuracy', 'outcome']; // Possible values for 'feedback'

    _this.feedback = 'outcome'; // What feedback to display

    _this.trial = false; // Show trial count?

    _this.payoffs = ['none', 'trial', 'total']; // Possible types of 'payoff' info

    _this.payoff = 'none'; // What payoff info to display

    _this.hPayoff = 0; // Hit payoff

    _this.mPayoff = 0; // Miss payoff

    _this.crPayoff = 0; // Correct Rejection payoff

    _this.faPayoff = 0; // False Alarm payoff

    _this.nrPayoff = 0; // No Response payoff
    // Properties

    _this.states = ['off', 'waiting', 'feedback']; // Possible states

    _this.state = 'off'; // Current state

    _this.trialCount = 0; // Current trial

    _this.trialTotal = 0; // Total trials
    // Private

    _this.signals = ['present', 'absent']; // Possible values of 'signal'

    _this.signal = undefined; // Signal for current trial

    _this.responses = ['present', 'absent']; // Possible values of 'response'

    _this.response = undefined; // Response for current trial

    _this.outcomes = ['h', 'm', 'fa', 'cr', 'nr']; // Possible values of 'outcome'

    _this.outcome = undefined; // Outcome for current trial

    _this.accuracies = ['c', 'e', 'nr']; // Possible values of 'accuracy'

    _this.accuracy = undefined; // Accuracy for current trial

    _this.h = 0; // Count of Hits

    _this.m = 0; // Count of Misses

    _this.cr = 0; // Count of Correct Rejections

    _this.fa = 0; // Count of False Alarms

    _this.c = 0; // Count of Correct trials

    _this.e = 0; // Count of Error trials

    _this.nr = 0; // Count of No Response trials

    return _this;
  }

  _createClass(SDTResponse, [{
    key: "trialPayoff",
    get: function get() {
      switch (this.outcome) {
        case 'h':
          return this.hPayoff;

        case 'm':
          return this.mPayoff;

        case 'fa':
          return this.faPayoff;

        case 'cr':
          return this.crPayoff;

        case 'nr':
          return this.nrPayoff;

        default:
          return undefined;
      }
    }
  }, {
    key: "totalPayoff",
    get: function get() {
      return this.h * this.hPayoff + this.m * this.mPayoff + this.cr * this.crPayoff + this.fa * this.faPayoff + this.nr * this.nrPayoff;
    }
  }, {
    key: "start",
    value: function start(signal, trial) {
      this.trialCount = trial;
      this.state = 'waiting';
      this.signal = signal;
      this.response = undefined;
      this.outcome = undefined;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.state = 'feedback';

      if (this.response === undefined) {
        this.outcome = 'nr';
        this.nr += 1;
        this.accuracy = 'nr';
      }
    }
  }, {
    key: "present",
    value: function present() {
      this.responded('present');
    }
  }, {
    key: "absent",
    value: function absent() {
      this.responded('absent');
    }
  }, {
    key: "responded",
    value: function responded(response) {
      this.state = 'feedback';
      this.response = response;

      if (this.signal === 'present' && this.response === 'present') {
        this.outcome = 'h';
        this.h += 1;
        this.accuracy = 'c';
        this.c += 1;
      } else if (this.signal === 'present' && this.response === 'absent') {
        this.outcome = 'm';
        this.m += 1;
        this.accuracy = 'e';
        this.e += 1;
      } else if (this.signal === 'absent' && this.response === 'present') {
        this.outcome = 'fa';
        this.fa += 1;
        this.accuracy = 'e';
        this.e += 1;
      } else if (this.signal === 'absent' && this.response === 'absent') {
        this.outcome = 'cr';
        this.cr += 1;
        this.accuracy = 'c';
        this.c += 1;
      }

      this.dispatchEvent(new CustomEvent('sdt-response', {
        detail: {
          trial: this.trialCount,
          signal: this.signal,
          response: this.response,
          outcome: this.outcome,
          payoff: this.trialPayoff,
          h: this.h,
          m: this.m,
          fa: this.fa,
          cr: this.cr,
          nr: this.nr,
          totalPayoff: this.totalPayoff
        },
        bubbles: true
      }));
    }
  }, {
    key: "reset",
    value: function reset() {
      this.state = 'off';
      this.trialCount = 0;
      this.signal = undefined;
      this.response = undefined;
      this.outcome = undefined;
      this.accuracy = undefined;
      this.h = 0;
      this.m = 0;
      this.cr = 0;
      this.fa = 0;
      this.nr = 0;
      this.c = 0;
      this.e = 0;
    }
  }, {
    key: "render",
    value: function render() {
      return $(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        <div class=\"responses\">\n          <decidable-button name=\"present\" class=", " ?disabled=", " @click=", ">Present</decidable-button>\n          <decidable-button name=\"absent\" class=", " ?disabled=", " @click=", ">Absent</decidable-button>\n        </div>\n        ", "\n      </div>"])), this.state === 'feedback' && this.response === 'present' ? 'selected' : this.state === 'waiting' ? 'waiting' : '', this.state !== 'waiting' || this.interactive !== true, this.present.bind(this), this.state === 'feedback' && this.response === 'absent' ? 'selected' : this.state === 'waiting' ? 'waiting' : '', this.state !== 'waiting' || this.interactive !== true, this.absent.bind(this), this.trial || this.feedback !== 'none' || this.payoff === 'total' ? $(_templateObject2$9 || (_templateObject2$9 = _taggedTemplateLiteral(["\n            <div class=\"feedbacks\">\n              ", "\n              ", "\n              ", "\n            </div>"])), this.trial ? $(_templateObject3$8 || (_templateObject3$8 = _taggedTemplateLiteral(["\n                  <div class=\"trial\">\n                    <span class=\"label\">Trial: </span><span class=\"count\">", "</span><span class=\"of\"> of </span><span class=\"total\">", "</span>\n                  </div>"])), this.trialCount, this.trialTotal) : $(_templateObject4$8 || (_templateObject4$8 = _taggedTemplateLiteral([""]))), this.feedback !== 'none' ? $(_templateObject5$8 || (_templateObject5$8 = _taggedTemplateLiteral(["\n                  <div class=", ">\n                    ", "\n                    ", "\n                  </div>"])), "feedback ".concat(this.state === 'feedback' ? this.feedback === 'outcome' ? this.outcome : this.accuracy : ''), this.state === 'feedback' ? this.feedback === 'outcome' ? this.outcome === 'h' ? $(_templateObject6$8 || (_templateObject6$8 = _taggedTemplateLiteral(["<span class=\"outcome\">Hit</span>"]))) : this.outcome === 'm' ? $(_templateObject7$8 || (_templateObject7$8 = _taggedTemplateLiteral(["<span class=\"outcome\">Miss</span>"]))) : this.outcome === 'fa' ? $(_templateObject8$6 || (_templateObject8$6 = _taggedTemplateLiteral(["<span class=\"outcome\">False<br>Alarm</span>"]))) : this.outcome === 'cr' ? $(_templateObject9$6 || (_templateObject9$6 = _taggedTemplateLiteral(["<span class=\"outcome\">Correct<br>Rejection</span>"]))) : $(_templateObject10$6 || (_templateObject10$6 = _taggedTemplateLiteral(["<span class=\"outcome\">No<br>Response</span>"]))) : this.accuracy === 'c' ? $(_templateObject11$6 || (_templateObject11$6 = _taggedTemplateLiteral(["<span class=\"outcome\">Correct</span>"]))) : this.accuracy === 'e' ? $(_templateObject12$1 || (_templateObject12$1 = _taggedTemplateLiteral(["<span class=\"outcome\">Error</span>"]))) : $(_templateObject13$1 || (_templateObject13$1 = _taggedTemplateLiteral(["<span class=\"outcome\">No<br>Response</span>"]))) : '', this.payoff === 'trial' || this.payoff === 'total' ? $(_templateObject14$1 || (_templateObject14$1 = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"])), this.trialPayoff) : $(_templateObject15$1 || (_templateObject15$1 = _taggedTemplateLiteral([""])))) : $(_templateObject16$1 || (_templateObject16$1 = _taggedTemplateLiteral([""]))), this.payoff === 'total' ? $(_templateObject17$1 || (_templateObject17$1 = _taggedTemplateLiteral(["\n                  <div class=\"payoff\">\n                    <span class=\"label\">Total: </span><span class=\"value\">", "</span>\n                  </div>"])), this.totalPayoff) : $(_templateObject18$1 || (_templateObject18$1 = _taggedTemplateLiteral([""])))) : $(_templateObject19$1 || (_templateObject19$1 = _taggedTemplateLiteral([""]))));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        feedback: {
          attribute: 'feedback',
          type: String,
          reflect: true
        },
        trial: {
          attribute: 'trial',
          type: Boolean,
          reflect: true
        },
        payoff: {
          attribute: 'payoff',
          type: String,
          reflect: true
        },
        hPayoff: {
          attribute: 'hit-payoff',
          type: Number,
          reflect: true
        },
        mPayoff: {
          attribute: 'miss-payoff',
          type: Number,
          reflect: true
        },
        faPayoff: {
          attribute: 'false-alarm-payoff',
          type: Number,
          reflect: true
        },
        crPayoff: {
          attribute: 'correct-rejection-payoff',
          type: Number,
          reflect: true
        },
        nrPayoff: {
          attribute: 'no-response-payoff',
          type: Number,
          reflect: true
        },
        state: {
          attribute: false,
          type: String,
          reflect: false
        },
        trialCount: {
          attribute: false,
          type: Number,
          reflect: false
        },
        trialTotal: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTResponse), "styles", this), r$2(_templateObject20$1 || (_templateObject20$1 = _taggedTemplateLiteral(["\n        :host {\n          display: inline-block;\n        }\n\n        /* Overall container */\n        .holder {\n          display: flex;\n\n          flex-direction: row;\n        }\n\n        /* Response buttons */\n        .responses {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: stretch;\n          justify-content: center;\n        }\n\n        .waiting[disabled] {\n          --decidable-button-background-color: var(---color-element-enabled);\n        }\n\n        .selected[disabled][name=\"present\"] {\n          --decidable-button-background-color: var(---color-present);\n        }\n\n        .selected[disabled][name=\"absent\"] {\n          --decidable-button-background-color: var(---color-absent);\n        }\n\n        /* Feedback messages */\n        .feedbacks {\n          display: flex;\n\n          flex-direction: column;\n\n          justify-content: center;\n        }\n\n        /* Trial feedback */\n        .trial {\n          text-align: center;\n        }\n\n        .trial .label {\n          font-weight: 600;\n        }\n\n        /* Outcome feedback */\n        .feedback {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: center;\n          justify-content: center;\n\n          width: 6rem;\n          height: 3.5rem;\n          padding: 0.375rem 0.75rem;\n          margin: 0.25rem;\n\n          text-align: center;\n\n          background-color: var(---color-element-background);\n          border: 1px solid var(---color-element-border);\n        }\n\n        .feedback.h {\n          background-color: var(---color-h-light);\n        }\n\n        .feedback.m {\n          background-color: var(---color-m-light);\n        }\n\n        .feedback.fa {\n          background-color: var(---color-fa-light);\n        }\n\n        .feedback.cr {\n          background-color: var(---color-cr-light);\n        }\n\n        .feedback.nr {\n          background-color: var(---color-nr-light);\n        }\n\n        .feedback.c {\n          background-color: var(---color-correct-light);\n        }\n\n        .feedback.e {\n          color: var(---color-text-inverse);\n\n          background-color: var(---color-error-light);\n        }\n\n        .feedback .outcome {\n          font-weight: 600;\n          line-height: 1.15;\n        }\n\n        :host([payoff=\"trial\"]) .feedback,\n        :host([payoff=\"total\"]) .feedback {\n          height: 4rem;\n        }\n\n        /* Payoff feedback */\n        .payoff {\n          text-align: center;\n        }\n\n        .payoff .label {\n          font-weight: 600;\n        }\n      "])))];
    }
  }]);

  return SDTResponse;
}(SDTElement);
customElements.define('sdt-response', SDTResponse);

var _templateObject$9, _templateObject2$8, _templateObject3$7, _templateObject4$7, _templateObject5$7, _templateObject6$7, _templateObject7$7, _templateObject8$5, _templateObject9$5, _templateObject10$5, _templateObject11$5, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46;
/*
  SDTTable element
  <sdt-table>

  Attributes:
  Hit; Miss; FalseAlarm; CorrectRejection;
*/

var SDTTable = /*#__PURE__*/function (_SDTElement) {
  _inherits(SDTTable, _SDTElement);

  var _super = _createSuper(SDTTable);

  function SDTTable() {
    var _this;

    _classCallCheck(this, SDTTable);

    _this = _super.call(this);
    _this.numeric = false;
    _this.summaries = ['stimulusRates', 'responseRates', 'accuracy'];
    _this.summary = new Set();
    _this.colors = ['none', 'accuracy', 'stimulus', 'response', 'outcome'];
    _this.color = 'outcome';
    _this.h = 40;
    _this.m = 60;
    _this.fa = 75;
    _this.cr = 25;

    _this.alignState();

    _this.payoff = false;
    _this.hPayoff = undefined; // Hit payoff

    _this.mPayoff = undefined; // Miss payoff

    _this.crPayoff = undefined; // Correct Rejection payoff

    _this.faPayoff = undefined; // False Alarm payoff

    return _this;
  }

  _createClass(SDTTable, [{
    key: "alignState",
    value: function alignState() {
      this.hr = SDTMath.hM2Hr(this.h, this.m);
      this.far = SDTMath.faCr2Far(this.fa, this.cr);
      this.acc = SDTMath.hMFaCr2Acc(this.h, this.m, this.fa, this.cr);
      this.ppv = SDTMath.hFa2Ppv(this.h, this.fa);
      this.fomr = SDTMath.mCr2Fomr(this.m, this.cr);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-table-change', {
        detail: {
          h: this.h,
          m: this.m,
          hr: this.hr,
          fa: this.fa,
          cr: this.cr,
          far: this.far,
          acc: this.acc,
          ppv: this.ppv,
          fomr: this.fomr
        },
        bubbles: true
      }));
    }
  }, {
    key: "hInput",
    value: function hInput(e) {
      this.h = parseInt(e.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "mInput",
    value: function mInput(e) {
      this.m = parseInt(e.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "faInput",
    value: function faInput(e) {
      this.fa = parseInt(e.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "crInput",
    value: function crInput(e) {
      this.cr = parseInt(e.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "hrInput",
    value: function hrInput(e) {
      var newhr = parseFloat(e.target.value);
      var present = this.h + this.m;
      this.h = Math.round(newhr * present);
      this.m = present - this.h;
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "farInput",
    value: function farInput(e) {
      var newfar = parseFloat(e.target.value);
      var absent = this.fa + this.cr;
      this.fa = Math.round(newfar * absent);
      this.cr = absent - this.fa;
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "accInput",
    value: function accInput(e) {
      var newacc = parseFloat(e.target.value);
      var present = this.h + this.m;
      var absent = this.fa + this.cr;
      var x = (this.hr + this.far - 1) / 2; // Rotate into ACC

      var newhr = x + newacc;
      var newfar = 1 + x - newacc;

      if (newfar > 1) {
        newfar = 1;
        newhr = newfar + 2 * newacc - 1;
      }

      if (newfar < 0) {
        newfar = 0;
        newhr = newfar + 2 * newacc - 1;
      }

      if (newhr > 1) {
        newhr = 1;
        newfar = newhr - 2 * newacc + 1;
      }

      if (newhr < 0) {
        newhr = 0;
        newfar = newhr - 2 * newacc + 1;
      }

      this.h = Math.round(newhr * present);
      this.m = present - this.h;
      this.fa = Math.round(newfar * absent);
      this.cr = absent - this.fa;
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "ppvInput",
    value: function ppvInput(e) {
      var newppv = parseFloat(e.target.value);
      var present = this.h + this.fa;
      this.h = Math.round(newppv * present);
      this.fa = present - this.h;
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "fomrInput",
    value: function fomrInput(e) {
      var newfomr = parseFloat(e.target.value);
      var present = this.m + this.cr;
      this.m = Math.round(newfomr * present);
      this.cr = present - this.m;
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "render",
    value: function render() {
      var payoffFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      this.alignState();
      var h;
      var m;
      var fa;
      var cr;
      var hr;
      var far;
      var acc;
      var ppv;
      var fomr;

      if (this.numeric) {
        h = $(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n        <decidable-spinner ?disabled=", " min=\"0\" .value=\"", "\" @input=", ">\n          <span>Hits</span>\n          ", "\n        </decidable-spinner>\n      "])), !this.interactive, this.h, this.hInput.bind(this), this.payoff ? $(_templateObject2$8 || (_templateObject2$8 = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"])), payoffFormatter.format(this.hPayoff)) : $(_templateObject3$7 || (_templateObject3$7 = _taggedTemplateLiteral([""]))));
        m = $(_templateObject4$7 || (_templateObject4$7 = _taggedTemplateLiteral(["\n        <decidable-spinner ?disabled=", " min=\"0\" .value=\"", "\" @input=", ">\n          <span>Misses</span>\n          ", "\n        </decidable-spinner>\n      "])), !this.interactive, this.m, this.mInput.bind(this), this.payoff ? $(_templateObject5$7 || (_templateObject5$7 = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"])), payoffFormatter.format(this.mPayoff)) : $(_templateObject6$7 || (_templateObject6$7 = _taggedTemplateLiteral([""]))));
        fa = $(_templateObject7$7 || (_templateObject7$7 = _taggedTemplateLiteral(["\n        <decidable-spinner ?disabled=", " min=\"0\" .value=\"", "\" @input=", ">\n          <span>False Alarms</span>\n          ", "\n        </decidable-spinner>\n      "])), !this.interactive, this.fa, this.faInput.bind(this), this.payoff ? $(_templateObject8$5 || (_templateObject8$5 = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"])), payoffFormatter.format(this.faPayoff)) : $(_templateObject9$5 || (_templateObject9$5 = _taggedTemplateLiteral([""]))));
        cr = $(_templateObject10$5 || (_templateObject10$5 = _taggedTemplateLiteral(["\n        <decidable-spinner ?disabled=", " min=\"0\" .value=\"", "\" @input=", ">\n          <span>Correct Rejections</span>\n          ", "\n        </decidable-spinner>\n      "])), !this.interactive, this.cr, this.crInput.bind(this), this.payoff ? $(_templateObject11$5 || (_templateObject11$5 = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"])), payoffFormatter.format(this.crPayoff)) : $(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([""]))));
        hr = $(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        <decidable-spinner ?disabled=", " min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n          <span>Hit Rate</span>\n        </decidable-spinner>\n      "])), !this.interactive, +this.hr.toFixed(3), this.hrInput.bind(this));
        far = $(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        <decidable-spinner ?disabled=", " min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n          <span>False Alarm Rate</span>\n        </decidable-spinner>\n      "])), !this.interactive, +this.far.toFixed(3), this.farInput.bind(this));
        acc = $(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        <decidable-spinner ?disabled=", " min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n          <span>Accuracy</span>\n        </decidable-spinner>\n      "])), !this.interactive, +this.acc.toFixed(3), this.accInput.bind(this));
        ppv = $(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        <decidable-spinner ?disabled=", " min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n          <span>Positive Predictive Value</span>\n        </decidable-spinner>\n      "])), !this.interactive, +this.ppv.toFixed(3), this.ppvInput.bind(this));
        fomr = $(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        <decidable-spinner ?disabled=", " min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n          <span>False Omission Rate</span>\n        </decidable-spinner>\n      "])), !this.interactive, +this.fomr.toFixed(3), this.fomrInput.bind(this));
      } else {
        h = $(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["<span>Hits</span>\n        ", ""])), this.payoff ? $(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"])), payoffFormatter.format(this.hPayoff)) : $(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral([""]))));
        m = $(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["<span>Misses</span>\n        ", ""])), this.payoff ? $(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"])), payoffFormatter.format(this.mPayoff)) : $(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral([""]))));
        fa = $(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["<span>False Alarms</span>\n        ", ""])), this.payoff ? $(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"])), payoffFormatter.format(this.faPayoff)) : $(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral([""]))));
        cr = $(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["<span>Correct Rejections</span>\n        ", ""])), this.payoff ? $(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["<span class=\"payoff\">", "</span>"])), payoffFormatter.format(this.crPayoff)) : $(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral([""]))));
        hr = $(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["<span>Hit Rate</span>"])));
        far = $(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["<span>False Alarm Rate</span>"])));
        acc = $(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["<span>Accuracy</span>"])));
        ppv = $(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["<span>Positive Predictive Value</span>"])));
        fomr = $(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["<span>False Omission Rate</span>"])));
      }

      return $(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n      <table class=", ">\n        <thead>\n          <tr>\n            <th colspan=\"2\" rowspan=\"2\"></th>\n            <th class=\"th th-main\" colspan=\"2\" scope=\"col\">\n              Response\n            </th>\n          </tr>\n          <tr>\n            <th class=\"th th-sub\" scope=\"col\">\n              \"Present\"\n            </th>\n            <th class=\"th th-sub\" scope=\"col\">\n              \"Absent\"\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th class=\"th th-main\" rowspan=\"2\" scope=\"row\">\n              Signal\n            </th>\n            <th class=\"th th-sub th-left\" scope=\"row\">\n              Present\n            </th>\n            <td class=\"td td-data h\">\n              ", "\n            </td>\n            <td class=\"td td-data m\">\n              ", "\n            </td>\n            ", "\n          </tr>\n          <tr>\n            <th class=\"th th-sub th-left\" scope=\"row\">\n              Absent\n            </th>\n            <td class=\"td td-data fa\">\n              ", "\n            </td>\n            <td class=\"td td-data cr\">\n              ", "\n            </td>\n            ", "\n          </tr>\n          ", "\n        </tbody>\n      </table>"])), this.numeric ? 'numeric' : '', h, m, this.summary.has('stimulusRates') ? $(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n                <td class=\"td td-summary hr\">\n                  ", "\n                </td>"])), hr) : $(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral([""]))), fa, cr, this.summary.has('stimulusRates') ? $(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n                <td class=\"td td-summary far\">\n                  ", "\n                </td>"])), far) : $(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral([""]))), this.summary.has('responseRates') || this.summary.has('accuracy') ? $(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n              <tr>\n                <td colspan=\"2\"></td>\n                ", "\n                ", "\n              </tr>"])), this.summary.has('responseRates') ? $(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n                    <td class=\"td td-summary ppv\">\n                      ", "\n                    </td>\n                    <td class=\"td td-summary fomr\">\n                      ", "\n                    </td>"])), ppv, fomr) : $(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n                    <td colspan=\"2\"></td>"]))), this.summary.has('accuracy') ? $(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n                    <td class=\"td td-summary acc\" rowspan=\"2\">\n                      ", "\n                    </td>"])), acc) : $(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral([""])))) : $(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral([""]))));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        numeric: {
          attribute: 'numeric',
          type: Boolean,
          reflect: true
        },
        summary: {
          attribute: 'summary',
          converter: DecidableConverterSet,
          reflect: true
        },
        color: {
          attribute: 'color',
          type: String,
          reflect: true
        },
        h: {
          attribute: 'hits',
          type: Number,
          reflect: true
        },
        m: {
          attribute: 'misses',
          type: Number,
          reflect: true
        },
        fa: {
          attribute: 'false-alarms',
          type: Number,
          reflect: true
        },
        cr: {
          attribute: 'correct-rejections',
          type: Number,
          reflect: true
        },
        payoff: {
          attribute: 'payoff',
          type: Boolean,
          reflect: true
        },
        hPayoff: {
          attribute: 'hit-payoff',
          type: Number,
          reflect: true
        },
        mPayoff: {
          attribute: 'miss-payoff',
          type: Number,
          reflect: true
        },
        faPayoff: {
          attribute: 'false-alarm-payoff',
          type: Number,
          reflect: true
        },
        crPayoff: {
          attribute: 'correct-rejection-payoff',
          type: Number,
          reflect: true
        },
        far: {
          attribute: false,
          type: Number,
          reflect: false
        },
        hr: {
          attribute: false,
          type: Number,
          reflect: false
        },
        acc: {
          attribute: false,
          type: Number,
          reflect: false
        },
        // positive predictive value (https://en.wikipedia.org/wiki/Receiver_operating_characteristic)
        ppv: {
          attribute: false,
          type: Number,
          reflect: false
        },
        // false omission rate (https://en.wikipedia.org/wiki/Receiver_operating_characteristic)
        // Using "fomr" to avoid keyword "for"
        fomr: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTTable), "styles", this), r$2(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n        :host {\n          display: inline-block;\n        }\n\n        /* Overall element */\n        table {\n          text-align: center;\n\n          border-collapse: collapse;\n\n          border: 0;\n        }\n\n        /* Headers */\n        .th-main {\n          padding: 0;\n\n          font-weight: bold;\n        }\n\n        .th-sub {\n          padding: 0 0.25rem;\n\n          font-weight: 600;\n        }\n\n        .th-left {\n          padding-left: 0;\n\n          text-align: right;\n        }\n\n        /* Cells */\n        .td {\n          width: 10rem;\n\n          padding: 0.25rem 0.25rem 0.375rem;\n\n          transition: all var(---transition-duration) ease;\n        }\n\n        .numeric .td {\n          width: 7rem;\n        }\n\n        /* Labels */\n        .payoff {\n          font-weight: 600;\n          line-height: 0.75rem;\n        }\n\n        /* User interaction <input> */\n        .td-data decidable-spinner {\n          --decidable-spinner-input-width: 3.5rem;\n        }\n\n        .td-summary decidable-spinner {\n          --decidable-spinner-input-width: 4.5rem;\n        }\n\n        /* Color schemes & Table emphasis */\n\n        /* (Default) Outcome color scheme */\n        .h {\n          background: var(---color-h-light);\n          border-top: 2px solid var(---color-element-emphasis);\n          border-left: 2px solid var(---color-element-emphasis);\n        }\n\n        .m {\n          background: var(---color-m-light);\n          border-top: 2px solid var(---color-element-emphasis);\n          border-right: 2px solid var(---color-element-emphasis);\n        }\n\n        .fa {\n          background: var(---color-fa-light);\n          border-bottom: 2px solid var(---color-element-emphasis);\n          border-left: 2px solid var(---color-element-emphasis);\n        }\n\n        .cr {\n          background: var(---color-cr-light);\n          border-right: 2px solid var(---color-element-emphasis);\n          border-bottom: 2px solid var(---color-element-emphasis);\n        }\n\n        .hr {\n          background: var(---color-hr-light);\n        }\n\n        .far {\n          background: var(---color-far-light);\n        }\n\n        .acc {\n          background: var(---color-acc-light);\n        }\n\n        .ppv {\n          background: var(---color-present-light);\n        }\n\n        .fomr {\n          background: var(---color-absent-light);\n        }\n\n        /* Accuracy color scheme */\n        :host([color=\"accuracy\"]) .h,\n        :host([color=\"accuracy\"]) .cr {\n          background: var(---color-correct-light);\n        }\n\n        :host([color=\"accuracy\"]) .m,\n        :host([color=\"accuracy\"]) .fa {\n          color: var(---color-text-inverse);\n\n          background: var(---color-error-light);\n        }\n\n        :host([color=\"accuracy\"]) .hr,\n        :host([color=\"accuracy\"]) .far,\n        :host([color=\"accuracy\"]) .ppv,\n        :host([color=\"accuracy\"]) .fomr {\n          background: var(---color-element-background);\n        }\n\n        /* Stimulus color scheme */\n        :host([color=\"stimulus\"]) .cr,\n        :host([color=\"stimulus\"]) .fa {\n          background: var(---color-far-light);\n        }\n\n        :host([color=\"stimulus\"]) .m,\n        :host([color=\"stimulus\"]) .h {\n          background: var(---color-hr-light);\n        }\n\n        :host([color=\"stimulus\"]) .ppv,\n        :host([color=\"stimulus\"]) .fomr,\n        :host([color=\"stimulus\"]) .acc {\n          background: var(---color-element-background);\n        }\n\n        /* Response color scheme */\n        :host([color=\"response\"]) .cr,\n        :host([color=\"response\"]) .m {\n          background: var(---color-absent-light);\n        }\n\n        :host([color=\"response\"]) .fa,\n        :host([color=\"response\"]) .h {\n          background: var(---color-present-light);\n        }\n\n        :host([color=\"response\"]) .hr,\n        :host([color=\"response\"]) .far,\n        :host([color=\"response\"]) .acc {\n          background: var(---color-element-background);\n        }\n\n        /* No color scheme */\n        :host([color=\"none\"]) .cr,\n        :host([color=\"none\"]) .fa,\n        :host([color=\"none\"]) .m,\n        :host([color=\"none\"]) .h,\n        :host([color=\"none\"]) .hr,\n        :host([color=\"none\"]) .far,\n        :host([color=\"none\"]) .ppv,\n        :host([color=\"none\"]) .fomr,\n        :host([color=\"none\"]) .acc {\n          background: var(---color-element-background);\n        }\n      "])))];
    }
  }]);

  return SDTTable;
}(SDTElement);
customElements.define('sdt-table', SDTTable);

var _templateObject$8;
/*
  SDTEquation Base Class - Not intended for instantiation!
  <sdt-equation>
*/

var SDTEquation = /*#__PURE__*/function (_SDTElement) {
  _inherits(SDTEquation, _SDTElement);

  var _super = _createSuper(SDTEquation);

  function SDTEquation() {
    var _this;

    _classCallCheck(this, SDTEquation);

    _this = _super.call(this);
    _this.numeric = false;
    return _this;
  }

  _createClass(SDTEquation, null, [{
    key: "properties",
    get: function get() {
      return {
        numeric: {
          attribute: 'numeric',
          type: Boolean,
          reflect: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTEquation), "styles", this), r$2(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n        :host {\n          display: block;\n\n          margin: 1rem;\n        }\n\n        /* Containing <div> */\n        .holder {\n          display: flex;\n\n          flex-direction: row;\n\n          justify-content: left;\n        }\n\n        /* Overall <table> */\n        .equation {\n          text-align: center;\n\n          border-collapse: collapse;\n\n          border: 0;\n        }\n\n        /* Modifies <td> */\n        .underline {\n          border-bottom: 1px solid var(---color-text);\n        }\n\n        /* Basic <span> and <var> w/modifiers */\n        span,\n        var {\n          padding: 0 0.25rem;\n\n          font-style: normal;\n        }\n\n        .tight {\n          padding: 0;\n        }\n\n        .paren {\n          font-size: 150%;\n        }\n\n        .bracket {\n          font-size: 175%;\n        }\n\n        .exp {\n          font-size: 0.75rem;\n        }\n\n        /* Input wrapping <label> */\n        decidable-spinner {\n          --decidable-spinner-input-width: 4rem;\n\n          display: inline-block;\n\n          padding: 0.125rem 0.375rem 0.375rem;\n\n          vertical-align: middle;\n        }\n\n        .bottom {\n          vertical-align: bottom;\n        }\n\n        /* Color scheme */\n        .h {\n          background: var(---color-h-light);\n        }\n\n        .m {\n          background: var(---color-m-light);\n        }\n\n        .hr {\n          background: var(---color-hr-light);\n        }\n\n        .fa {\n          background: var(---color-fa-light);\n        }\n\n        .acc {\n          background: var(---color-acc-light);\n        }\n\n        .cr {\n          background: var(---color-cr-light);\n        }\n\n        .far {\n          background: var(---color-far-light);\n        }\n\n        .d {\n          background: var(---color-d-light);\n        }\n\n        .c {\n          background: var(---color-c-light);\n        }\n\n        .s {\n          background: var(---color-s-light);\n        }\n      "])))];
    }
  }]);

  return SDTEquation;
}(SDTElement);

var _templateObject$7, _templateObject2$7, _templateObject3$6, _templateObject4$6, _templateObject5$6, _templateObject6$6, _templateObject7$6, _templateObject8$4, _templateObject9$4, _templateObject10$4, _templateObject11$4;
/*
  SDTEquationDC2Far element
  <sdt-equation-dc2far>

  Attributes:
  d'; c; False Alarm Rate;
*/

var SDTEquationDC2Far = /*#__PURE__*/function (_SDTEquation) {
  _inherits(SDTEquationDC2Far, _SDTEquation);

  var _super = _createSuper(SDTEquationDC2Far);

  function SDTEquationDC2Far() {
    var _this;

    _classCallCheck(this, SDTEquationDC2Far);

    _this = _super.call(this);
    _this.unequal = false;
    _this.d = 0;
    _this.c = 0;
    _this.s = 1;

    _this.alignState();

    return _this;
  }

  _createClass(SDTEquationDC2Far, [{
    key: "alignState",
    value: function alignState() {
      this.far = SDTMath.dC2Far(this.d, this.c, this.s);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-equation-dc2far-change', {
        detail: {
          d: this.d,
          c: this.c,
          s: this.s,
          far: this.far
        },
        bubbles: true
      }));
    }
  }, {
    key: "dInput",
    value: function dInput(event) {
      this.d = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "cInput",
    value: function cInput(event) {
      this.c = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "sInput",
    value: function sInput(event) {
      this.s = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "render",
    value: function render() {
      this.alignState();
      var d;
      var c;
      var s;
      var far;

      if (this.numeric) {
        d = $(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"d bottom\" ?disabled=", " step=\".001\" .value=\"", "\" @input=", ">\n          <var class=\"math-var\">d\u2032</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.d, this.dInput.bind(this));
        c = $(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"c bottom\" ?disabled=", " step=\".001\" .value=\"", "\" @input=", ">\n          <var class=\"math-var\">c</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.c, this.cInput.bind(this));
        s = $(_templateObject3$6 || (_templateObject3$6 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"s bottom\" ?disabled=", " min=\"0\" step=\".001\" .value=\"", "\" @input=", ">\n          <var class=\"math-var\">\u03C3</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.s, this.sInput.bind(this));
        far = $(_templateObject4$6 || (_templateObject4$6 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"far bottom\" disabled min=\"0\" max=\"1\" step=\".001\" .value=\"", "\">\n          <var>False Alarm Rate</var>\n        </decidable-spinner>\n      "])), +this.far.toFixed(3));
      } else {
        d = $(_templateObject5$6 || (_templateObject5$6 = _taggedTemplateLiteral(["<var class=\"math-var d\">d\u2032</var>"])));
        c = $(_templateObject6$6 || (_templateObject6$6 = _taggedTemplateLiteral(["<var class=\"math-var c\">c</var>"])));
        s = $(_templateObject7$6 || (_templateObject7$6 = _taggedTemplateLiteral(["<var class=\"math-var s\">\u03C3</var>"])));
        far = $(_templateObject8$4 || (_templateObject8$4 = _taggedTemplateLiteral(["<var class=\"far\">False Alarm Rate</var>"])));
      }

      var equation;

      if (this.unequal) {
        equation = $(_templateObject9$4 || (_templateObject9$4 = _taggedTemplateLiteral(["\n        <tr>\n          <td rowspan=\"2\">\n            ", "<span class=\"equals\">=</span><var class=\"math-greek phi tight\">\u03A6</var><span class=\"paren tight\">(</span><span class=\"bracket tight\">[</span>\n          </td>\n          <td class=\"underline bottom\">\n            <span>1</span><span class=\"plus tight\">+</span><span>", "<sup class=\"exp\">2</sup></span>\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"bracket tight\">]<sup class=\"exp\">\xBD</sup></span><span class=\"bracket tight\">[</span>\n          </td>\n          <td class=\"underline\">\n            <span class=\"minus tight\">\u2212</span>", "\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"minus\">\u2212</span>", "<span class=\"bracket tight\">]</span><span class=\"paren tight\">)</span>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span>2</span>\n          </td>\n          <td>\n            <span><span>1</span><span class=\"plus\">+</span>", "</span>\n          </td>\n        </tr>"])), far, s, d, c, s);
      } else {
        equation = $(_templateObject10$4 || (_templateObject10$4 = _taggedTemplateLiteral(["\n        <tr>\n          <td rowspan=\"2\">\n            ", "<span class=\"equals\">=</span><var class=\"math-greek phi tight\">\u03A6</var><span class=\"paren tight\">(</span><span class=\"minus tight\">\u2212</span>\n          </td>\n          <td class=\"underline\">\n            ", "\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"minus\">\u2212</span>", "<span class=\"paren tight\">)</span>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span>2</span>\n          </td>\n        </tr>"])), far, d, c);
      }

      return $(_templateObject11$4 || (_templateObject11$4 = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        <table class=\"equation\">\n          <tbody>\n            ", "\n          </tbody>\n        </table>\n      </div>"])), equation);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        unequal: {
          attribute: 'unequal',
          type: Boolean,
          reflect: true
        },
        d: {
          attribute: 'd',
          type: Number,
          reflect: true
        },
        c: {
          attribute: 'c',
          type: Number,
          reflect: true
        },
        s: {
          attribute: 's',
          type: Number,
          reflect: true
        },
        far: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }]);

  return SDTEquationDC2Far;
}(SDTEquation);
customElements.define('sdt-equation-dc2far', SDTEquationDC2Far);

var _templateObject$6, _templateObject2$6, _templateObject3$5, _templateObject4$5, _templateObject5$5, _templateObject6$5, _templateObject7$5, _templateObject8$3, _templateObject9$3, _templateObject10$3, _templateObject11$3;
/*
  SDTEquationDC2Hr element
  <sdt-equation-dc2hr>

  Attributes:
  d'; c; Hit Rate;
*/

var SDTEquationDC2Hr = /*#__PURE__*/function (_SDTEquation) {
  _inherits(SDTEquationDC2Hr, _SDTEquation);

  var _super = _createSuper(SDTEquationDC2Hr);

  function SDTEquationDC2Hr() {
    var _this;

    _classCallCheck(this, SDTEquationDC2Hr);

    _this = _super.call(this);
    _this.unequal = false;
    _this.d = 0;
    _this.c = 0;
    _this.s = 1;

    _this.alignState();

    return _this;
  }

  _createClass(SDTEquationDC2Hr, [{
    key: "alignState",
    value: function alignState() {
      this.hr = SDTMath.dC2Hr(this.d, this.c, this.s);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-equation-dc2hr-change', {
        detail: {
          d: this.d,
          c: this.c,
          s: this.s,
          hr: this.hr
        },
        bubbles: true
      }));
    }
  }, {
    key: "dInput",
    value: function dInput(event) {
      this.d = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "cInput",
    value: function cInput(event) {
      this.c = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "sInput",
    value: function sInput(event) {
      this.s = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "render",
    value: function render() {
      this.alignState();
      var d;
      var c;
      var s;
      var hr;

      if (this.numeric) {
        d = $(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"d bottom\" ?disabled=", " step=\".001\" .value=\"", "\" @input=", ">\n          <var class=\"math-var\">d\u2032</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.d, this.dInput.bind(this));
        c = $(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"c bottom\" ?disabled=", " step=\".001\" .value=\"", "\" @input=", ">\n          <var class=\"math-var\">c</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.c, this.cInput.bind(this));
        s = $(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"s bottom\" ?disabled=", " min=\"0\" step=\".001\" .value=\"", "\" @input=", ">\n          <var class=\"math-var\">\u03C3</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.s, this.sInput.bind(this));
        hr = $(_templateObject4$5 || (_templateObject4$5 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"hr bottom\" disabled min=\"0\" max=\"1\" step=\".001\" .value=\"", "\">\n          <var>Hit Rate</var>\n        </decidable-spinner>\n      "])), +this.hr.toFixed(3));
      } else {
        d = $(_templateObject5$5 || (_templateObject5$5 = _taggedTemplateLiteral(["<var class=\"math-var d\">d\u2032</var>"])));
        c = $(_templateObject6$5 || (_templateObject6$5 = _taggedTemplateLiteral(["<var class=\"math-var c\">c</var>"])));
        s = $(_templateObject7$5 || (_templateObject7$5 = _taggedTemplateLiteral(["<var class=\"math-var s\">\u03C3</var>"])));
        hr = $(_templateObject8$3 || (_templateObject8$3 = _taggedTemplateLiteral(["<var class=\"hr\">Hit Rate</var>"])));
      }

      var equation;

      if (this.unequal) {
        equation = $(_templateObject9$3 || (_templateObject9$3 = _taggedTemplateLiteral(["\n        <tr>\n          <td rowspan=\"2\">\n            ", "<span class=\"equals\">=</span><var class=\"math-greek phi tight\">\u03A6</var><span class=\"paren tight\">(</span><span class=\"bracket tight\">[</span>\n          </td>\n          <td class=\"underline bottom\">\n            <span>1</span><span class=\"plus tight\">+</span><span>", "<sup class=\"exp\">2</sup></span>\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"bracket tight\">]<sup class=\"exp\">\xBD</sup></span><span class=\"bracket tight\">[</span>\n          </td>\n          <td class=\"underline\">\n            ", "\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"minus\">\u2212</span>\n          </td>\n          <td class=\"underline\">\n            ", "\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"bracket tight\">]</span><span class=\"paren tight\">)</span>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span>2</span>\n          </td>\n          <td>\n            <span><span>1</span><span class=\"plus\">+</span>", "</span>\n          </td>\n          <td>\n            ", "\n          </td>\n        </tr>"])), hr, s, d, c, s, s);
      } else {
        equation = $(_templateObject10$3 || (_templateObject10$3 = _taggedTemplateLiteral(["\n        <tr>\n          <td rowspan=\"2\">\n            ", "<span class=\"equals\">=</span><var class=\"math-greek phi tight\">\u03A6</var><span class=\"paren tight\">(</span>\n          </td>\n          <td class=\"underline\">\n            ", "\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"minus\">\u2212</span>", "<span class=\"paren tight\">)</span>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span>2</span>\n          </td>\n        </tr>"])), hr, d, c);
      }

      return $(_templateObject11$3 || (_templateObject11$3 = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        <table class=\"equation\">\n          <tbody>\n            ", "\n          </tbody>\n        </table>\n      </div>"])), equation);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        unequal: {
          attribute: 'unequal',
          type: Boolean,
          reflect: true
        },
        d: {
          attribute: 'd',
          type: Number,
          reflect: true
        },
        c: {
          attribute: 'c',
          type: Number,
          reflect: true
        },
        s: {
          attribute: 's',
          type: Number,
          reflect: true
        },
        hr: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }]);

  return SDTEquationDC2Hr;
}(SDTEquation);
customElements.define('sdt-equation-dc2hr', SDTEquationDC2Hr);

var _templateObject$5, _templateObject2$5, _templateObject3$4, _templateObject4$4, _templateObject5$4, _templateObject6$4, _templateObject7$4;
/*
  SDTEquationFaCr2Far element
  <sdt-equation-facr2far>

  Attributes:
  False Alarms; Correct Rejections; False Alarm Rate;
*/

var SDTEquationFaCr2Far = /*#__PURE__*/function (_SDTEquation) {
  _inherits(SDTEquationFaCr2Far, _SDTEquation);

  var _super = _createSuper(SDTEquationFaCr2Far);

  function SDTEquationFaCr2Far() {
    var _this;

    _classCallCheck(this, SDTEquationFaCr2Far);

    _this = _super.call(this);
    _this.fa = 0;
    _this.cr = 0;

    _this.alignState();

    return _this;
  }

  _createClass(SDTEquationFaCr2Far, [{
    key: "alignState",
    value: function alignState() {
      this.far = SDTMath.faCr2Far(this.fa, this.cr);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-equation-facr2far-change', {
        detail: {
          fa: this.fa,
          cr: this.cr,
          far: this.far
        },
        bubbles: true
      }));
    }
  }, {
    key: "faInput",
    value: function faInput(event) {
      this.fa = parseInt(event.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "crInput",
    value: function crInput(event) {
      this.cr = parseInt(event.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "render",
    value: function render() {
      this.alignState();
      var fa;
      var cr;
      var far;

      if (this.numeric) {
        fa = $(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"fa\" ?disabled=", " min=\"0\" .value=\"", "\" @input=", ">\n          <var>False Alarms</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.fa, this.faInput.bind(this));
        cr = $(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"cr\" ?disabled=", " min=\"0\" .value=\"", "\" @input=", ">\n          <var>Correct Rejections</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.cr, this.crInput.bind(this));
        far = $(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"far\" disabled min=\"0\" max=\"1\" step=\".001\" .value=\"", "\">\n          <var>False Alarm Rate</var>\n        </decidable-spinner>\n      "])), +this.far.toFixed(3));
      } else {
        fa = $(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteral(["<var class=\"fa\">False Alarms</var>"])));
        cr = $(_templateObject5$4 || (_templateObject5$4 = _taggedTemplateLiteral(["<var class=\"cr\">Correct Rejections</var>"])));
        far = $(_templateObject6$4 || (_templateObject6$4 = _taggedTemplateLiteral(["<var class=\"far\">False Alarm Rate</var>"])));
      }

      return $(_templateObject7$4 || (_templateObject7$4 = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        <table class=\"equation\">\n          <tbody>\n            <tr>\n              <td rowspan=\"2\">\n                ", "<span class=\"equals\">=</span>\n              </td>\n              <td class=\"underline\">\n                ", "\n              </td>\n            </tr>\n            <tr>\n              <td>\n                ", "<span class=\"plus\">+</span>", "\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>"])), far, fa, fa, cr);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        fa: {
          attribute: 'false-alarms',
          type: Number,
          reflect: true
        },
        cr: {
          attribute: 'correct-rejections',
          type: Number,
          reflect: true
        },
        far: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }]);

  return SDTEquationFaCr2Far;
}(SDTEquation);
customElements.define('sdt-equation-facr2far', SDTEquationFaCr2Far);

var _templateObject$4, _templateObject2$4, _templateObject3$3, _templateObject4$3, _templateObject5$3, _templateObject6$3, _templateObject7$3;
/*
  SDTEquationHM2Hr element
  <sdt-equation-hm2hr>

  Attributes:
  Hits; Misses; Hit Rate;
*/

var SDTEquationHM2Hr = /*#__PURE__*/function (_SDTEquation) {
  _inherits(SDTEquationHM2Hr, _SDTEquation);

  var _super = _createSuper(SDTEquationHM2Hr);

  function SDTEquationHM2Hr() {
    var _this;

    _classCallCheck(this, SDTEquationHM2Hr);

    _this = _super.call(this);
    _this.h = 0;
    _this.m = 0;

    _this.alignState();

    return _this;
  }

  _createClass(SDTEquationHM2Hr, [{
    key: "alignState",
    value: function alignState() {
      this.hr = SDTMath.hM2Hr(this.h, this.m);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-equation-hm2hr-change', {
        detail: {
          h: this.h,
          m: this.m,
          hr: this.hr
        },
        bubbles: true
      }));
    }
  }, {
    key: "hInput",
    value: function hInput(event) {
      this.h = parseInt(event.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "mInput",
    value: function mInput(event) {
      this.m = parseInt(event.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "render",
    value: function render() {
      this.alignState();
      var h;
      var m;
      var hr;

      if (this.numeric) {
        h = $(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"h\" ?disabled=", " min=\"0\" .value=\"", "\" @input=", ">\n          <var>Hits</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.h, this.hInput.bind(this));
        m = $(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"m\" ?disabled=", " min=\"0\" .value=\"", "\" @input=", ">\n          <var>Misses</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.m, this.mInput.bind(this));
        hr = $(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"hr\" disabled min=\"0\" max=\"1\" step=\".001\" .value=\"", "\">\n          <var>Hit Rate</var>\n        </decidable-spinner>\n      "])), +this.hr.toFixed(3));
      } else {
        h = $(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteral(["<var class=\"h\">Hits</var>"])));
        m = $(_templateObject5$3 || (_templateObject5$3 = _taggedTemplateLiteral(["<var class=\"m\">Misses</var>"])));
        hr = $(_templateObject6$3 || (_templateObject6$3 = _taggedTemplateLiteral(["<var class=\"hr\">Hit Rate</var>"])));
      }

      return $(_templateObject7$3 || (_templateObject7$3 = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        <table class=\"equation\">\n          <tbody>\n            <tr>\n              <td rowspan=\"2\">\n                ", "<span class=\"equals\">=</span>\n              </td>\n              <td class=\"underline\">\n                ", "\n              </td>\n            </tr>\n            <tr>\n              <td>\n                ", "<span class=\"plus\">+</span>", "\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    "])), hr, h, h, m);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        h: {
          attribute: 'hits',
          type: Number,
          reflect: true
        },
        m: {
          attribute: 'misses',
          type: Number,
          reflect: true
        },
        hr: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }]);

  return SDTEquationHM2Hr;
}(SDTEquation);
customElements.define('sdt-equation-hm2hr', SDTEquationHM2Hr);

var _templateObject$3, _templateObject2$3, _templateObject3$2, _templateObject4$2, _templateObject5$2, _templateObject6$2, _templateObject7$2, _templateObject8$2, _templateObject9$2, _templateObject10$2, _templateObject11$2;
/*
  SDTEquationHMFaCr2Acc element
  <sdt-equation-hmfacr2acc>

  Attributes:
  Hits; Misses; False Alarms; Correct Rejections; Accuracy;
*/

var SDTEquationHMFaCr2Acc = /*#__PURE__*/function (_SDTEquation) {
  _inherits(SDTEquationHMFaCr2Acc, _SDTEquation);

  var _super = _createSuper(SDTEquationHMFaCr2Acc);

  function SDTEquationHMFaCr2Acc() {
    var _this;

    _classCallCheck(this, SDTEquationHMFaCr2Acc);

    _this = _super.call(this);
    _this.h = 0;
    _this.m = 0;
    _this.fa = 0;
    _this.cr = 0;

    _this.alignState();

    return _this;
  }

  _createClass(SDTEquationHMFaCr2Acc, [{
    key: "alignState",
    value: function alignState() {
      this.acc = SDTMath.hMFaCr2Acc(this.h, this.m, this.fa, this.cr);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-equation-hmfacr2acc-change', {
        detail: {
          h: this.h,
          m: this.m,
          fa: this.fa,
          cr: this.cr,
          acc: this.acc
        },
        bubbles: true
      }));
    }
  }, {
    key: "hInput",
    value: function hInput(event) {
      this.h = parseInt(event.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "mInput",
    value: function mInput(event) {
      this.m = parseInt(event.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "faInput",
    value: function faInput(event) {
      this.fa = parseInt(event.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "crInput",
    value: function crInput(event) {
      this.cr = parseInt(event.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "render",
    value: function render() {
      this.alignState();
      var h;
      var m;
      var fa;
      var cr;
      var acc;

      if (this.numeric) {
        h = $(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"h\" ?disabled=", " min=\"0\" .value=\"", "\" @input=", ">\n          <var>Hits</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.h, this.hInput.bind(this));
        m = $(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"m\" ?disabled=", " min=\"0\" .value=\"", "\" @input=", ">\n          <var>Misses</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.m, this.mInput.bind(this));
        fa = $(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"fa\" ?disabled=", " min=\"0\" .value=\"", "\" @input=", ">\n          <var>False Alarms</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.fa, this.faInput.bind(this));
        cr = $(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"cr\" ?disabled=", " min=\"0\" .value=\"", "\" @input=", ">\n          <var>Correct Rejections</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.cr, this.crInput.bind(this));
        acc = $(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"acc\" disabled min=\"0\" max=\"1\" step=\".001\" .value=\"", "\">\n          <var>Accuracy</var>\n        </decidable-spinner>\n      "])), +this.acc.toFixed(3));
      } else {
        h = $(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteral(["<var class=\"h\">Hits</var>"])));
        m = $(_templateObject7$2 || (_templateObject7$2 = _taggedTemplateLiteral(["<var class=\"m\">Misses</var>"])));
        fa = $(_templateObject8$2 || (_templateObject8$2 = _taggedTemplateLiteral(["<var class=\"fa\">False Alarms</var>"])));
        cr = $(_templateObject9$2 || (_templateObject9$2 = _taggedTemplateLiteral(["<var class=\"cr\">Correct Rejections</var>"])));
        acc = $(_templateObject10$2 || (_templateObject10$2 = _taggedTemplateLiteral(["<var class=\"acc\">Accuracy</var>"])));
      }

      return $(_templateObject11$2 || (_templateObject11$2 = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        <table class=\"equation\">\n          <tbody>\n            <tr>\n              <td rowspan=\"2\">\n                ", "<span class=\"equals\">=</span>\n              </td>\n              <td class=\"underline\">\n                ", "<span class=\"plus\">+</span>", "\n              </td>\n            </tr>\n            <tr>\n              <td>\n                ", "<span class=\"plus\">+</span>", "<span class=\"plus\">+</span>", "<span class=\"plus\">+</span>", "\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>"])), acc, h, cr, h, m, fa, cr);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        h: {
          attribute: 'hits',
          type: Number,
          reflect: true
        },
        m: {
          attribute: 'misses',
          type: Number,
          reflect: true
        },
        fa: {
          attribute: 'false-alarms',
          type: Number,
          reflect: true
        },
        cr: {
          attribute: 'correct-rejections',
          type: Number,
          reflect: true
        },
        acc: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }]);

  return SDTEquationHMFaCr2Acc;
}(SDTEquation);
customElements.define('sdt-equation-hmfacr2acc', SDTEquationHMFaCr2Acc);

var _templateObject$2, _templateObject2$2, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7$1, _templateObject8$1, _templateObject9$1, _templateObject10$1, _templateObject11$1;
/*
  SDTEquationHrFar2C element
  <sdt-equation-hrfar2c>

  Attributes:
  Hit Rate; False Alarm Rate; d';
*/

var SDTEquationHrFar2C = /*#__PURE__*/function (_SDTEquation) {
  _inherits(SDTEquationHrFar2C, _SDTEquation);

  var _super = _createSuper(SDTEquationHrFar2C);

  function SDTEquationHrFar2C() {
    var _this;

    _classCallCheck(this, SDTEquationHrFar2C);

    _this = _super.call(this);
    _this.unequal = false;
    _this.hr = 0;
    _this.far = 0;
    _this.s = 1;

    _this.alignState();

    return _this;
  }

  _createClass(SDTEquationHrFar2C, [{
    key: "alignState",
    value: function alignState() {
      this.c = SDTMath.hrFar2C(this.hr, this.far, this.s);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-equation-hrfar2c-change', {
        detail: {
          hr: this.hr,
          far: this.far,
          s: this.s,
          c: this.c
        },
        bubbles: true
      }));
    }
  }, {
    key: "hrInput",
    value: function hrInput(event) {
      this.hr = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "farInput",
    value: function farInput(event) {
      this.far = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "sInput",
    value: function sInput(event) {
      this.s = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "render",
    value: function render() {
      this.alignState();
      var hr;
      var far;
      var s;
      var c;

      if (this.numeric) {
        hr = $(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"hr bottom\" ?disabled=", " min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n          <var>Hit Rate</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.hr, this.hrInput.bind(this));
        far = $(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"far bottom\" ?disabled=", " min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n          <var>False Alarm Rate</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.far, this.farInput.bind(this));
        s = $(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"s bottom\" ?disabled=", " min=\"0\" step=\".001\" .value=\"", "\" @input=", ">\n          <var class=\"math-var\">\u03C3</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.s, this.sInput.bind(this));
        c = $(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"c bottom\" disabled step=\".001\" .value=\"", "\">\n          <var class=\"math-var\">c</var>\n        </decidable-spinner>\n      "])), +this.c.toFixed(3));
      } else {
        hr = $(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["<var class=\"hr\">Hit Rate</var>"])));
        far = $(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["<var class=\"far\">False Alarm Rate</var>"])));
        s = $(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral(["<var class=\"math-var s\">\u03C3</var>"])));
        c = $(_templateObject8$1 || (_templateObject8$1 = _taggedTemplateLiteral(["<var class=\"math-var c\">c</var>"])));
      }

      var equation;

      if (this.unequal) {
        equation = $(_templateObject9$1 || (_templateObject9$1 = _taggedTemplateLiteral(["\n        <tr>\n          <td rowspan=\"2\">\n            ", "<span class=\"equals\">=</span><span class=\"bracket tight\">(</span>\n          </td>\n          <td class=\"underline bottom\">\n            <span>1</span><span class=\"plus tight\">+</span><span>", "<sup class=\"exp\">2</sup></span>\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"bracket tight\">)<sup class=\"exp\">\u2212\xBD</sup></span><span class=\"bracket tight\">(</span>\n          </td>\n          <td class=\"underline bottom\">\n            <span class=\"minus tight\">\u2212</span>", "\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"bracket tight\">)</span><span class=\"bracket\">[</span><span class=\"tight\"><var class=\"math-greek phi tight\">\u03A6</var><sup class=\"exp\">\u22121</sup></span><span class=\"paren tight\">(</span>", "<span class=\"paren tight\">)</span><span class=\"plus\">+</span><span class=\"tight\"><var class=\"math-greek phi tight\">\u03A6</var><sup class=\"exp\">\u22121</sup></span><span class=\"paren tight\">(</span>", "<span class=\"paren tight\">)</span><span class=\"bracket\">]</span>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span>2</span>\n          </td>\n          <td>\n            <span><span>1</span><span class=\"plus\">+</span>", "</span>\n          </td>\n        </tr>"])), c, s, s, hr, far, s);
      } else {
        equation = $(_templateObject10$1 || (_templateObject10$1 = _taggedTemplateLiteral(["\n        <tr>\n          <td rowspan=\"2\">\n            ", "<span class=\"equals\">=</span>\n          </td>\n          <td class=\"underline\">\n            <span class=\"minus tight\">\u2212</span><span class=\"bracket tight\">[</span><span class=\"tight\"><var class=\"math-greek phi tight\">\u03A6</var><sup class=\"exp\">\u22121</sup></span><span class=\"paren tight\">(</span>", "<span class=\"paren tight\">)</span><span class=\"plus\">+</span><span class=\"tight\"><var class=\"math-greek phi tight\">\u03A6</var><sup class=\"exp\">\u22121</sup></span><span class=\"paren tight\">(</span>", "<span class=\"paren tight\">)</span><span class=\"bracket tight\">]</span>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span>2</span>\n          </td>\n        </tr>"])), c, hr, far);
      }

      return $(_templateObject11$1 || (_templateObject11$1 = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        <table class=\"equation\">\n          <tbody>\n            ", "\n          </tbody>\n        </table>\n      </div>"])), equation);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        unequal: {
          attribute: 'unequal',
          type: Boolean,
          reflect: true
        },
        hr: {
          attribute: 'hit-rate',
          type: Number,
          reflect: true
        },
        far: {
          attribute: 'false-alarm-rate',
          type: Number,
          reflect: true
        },
        s: {
          attribute: 's',
          type: Number,
          reflect: true
        },
        c: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }]);

  return SDTEquationHrFar2C;
}(SDTEquation);
customElements.define('sdt-equation-hrfar2c', SDTEquationHrFar2C);

var _templateObject$1, _templateObject2$1, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
/*
  SDTEquationHrFar2D element
  <sdt-equation-hrfar2d>

  Attributes:
  Hit Rate; False Alarm Rate; d';
*/

var SDTEquationHrFar2D = /*#__PURE__*/function (_SDTEquation) {
  _inherits(SDTEquationHrFar2D, _SDTEquation);

  var _super = _createSuper(SDTEquationHrFar2D);

  function SDTEquationHrFar2D() {
    var _this;

    _classCallCheck(this, SDTEquationHrFar2D);

    _this = _super.call(this);
    _this.unequal = false;
    _this.hr = 0;
    _this.far = 0;
    _this.s = 1;

    _this.alignState();

    return _this;
  }

  _createClass(SDTEquationHrFar2D, [{
    key: "alignState",
    value: function alignState() {
      this.d = SDTMath.hrFar2D(this.hr, this.far, this.s);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-equation-hrfar2d-change', {
        detail: {
          hr: this.hr,
          far: this.far,
          s: this.s,
          d: this.d
        },
        bubbles: true
      }));
    }
  }, {
    key: "hrInput",
    value: function hrInput(event) {
      this.hr = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "farInput",
    value: function farInput(event) {
      this.far = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "sInput",
    value: function sInput(event) {
      this.s = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "render",
    value: function render() {
      this.alignState();
      var hr;
      var far;
      var s;
      var d;

      if (this.numeric) {
        hr = $(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"hr bottom\" ?disabled=", " min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n          <var>Hit Rate</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.hr, this.hrInput.bind(this));
        far = $(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"far bottom\" ?disabled=", " min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n          <var>False Alarm Rate</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.far, this.farInput.bind(this));
        s = $(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"s bottom\" ?disabled=", " min=\"0\" step=\".001\" .value=\"", "\" @input=", ">\n          <var class=\"math-var\">\u03C3</var>\n        </decidable-spinner>\n      "])), !this.interactive, this.s, this.sInput.bind(this));
        d = $(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"d bottom\" disabled step=\".001\" .value=\"", "\">\n          <var class=\"math-var\">d\u2032</var>\n        </decidable-spinner>\n      "])), +this.d.toFixed(3));
      } else {
        hr = $(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<var class=\"hr\">Hit Rate</var>"])));
        far = $(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<var class=\"far\">False Alarm Rate</var>"])));
        s = $(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["<var class=\"math-var s\">\u03C3</var>"])));
        d = $(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["<var class=\"math-var d\">d\u2032</var>"])));
      }

      var equation;

      if (this.unequal) {
        equation = $(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        <tr>\n          <td rowspan=\"2\">\n            ", "<span class=\"equals\">=</span><span class=\"bracket tight\">(</span>\n          </td>\n          <td class=\"underline bottom\">\n            <span>1</span><span class=\"plus tight\">+</span><span>", "<sup class=\"exp\">2</sup></span>\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"bracket tight\">)<sup class=\"exp\">\u2212\xBD</sup></span><span class=\"bracket\">[</span>", "<span class=\"tight\"><var class=\"math-greek phi tight\">\u03A6</var><sup class=\"exp\">\u22121</sup></span><span class=\"paren tight\">(</span>", "<span class=\"paren tight\">)</span><span class=\"minus\">\u2212</span><span class=\"tight\"><var class=\"math-greek phi tight\">\u03A6</var><sup class=\"exp\">\u22121</sup></span><span class=\"paren tight\">(</span>", "<span class=\"paren tight\">)</span><span class=\"bracket\">]</span>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span>2</span>\n          </td>\n        </tr>"])), d, s, s, hr, far);
      } else {
        equation = $(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        <tr>\n          <td>\n              ", "<span class=\"equals\">=</span><span class=\"tight\"><var class=\"math-greek phi tight\">\u03A6</var><sup class=\"exp\">\u22121</sup></span><span class=\"paren tight\">(</span>", "<span class=\"paren tight\">)</span><span class=\"minus\">\u2212</span><span class=\"tight\"><var class=\"math-greek phi tight\">\u03A6</var><sup class=\"exp\">\u22121</sup></span><span class=\"paren tight\">(</span>", "<span class=\"paren tight\">)</span>\n          </td>\n        </tr>"])), d, hr, far);
      }

      return $(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        <table class=\"equation\">\n          <tbody>\n            ", "\n          </tbody>\n        </table>\n      </div>"])), equation);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        unequal: {
          attribute: 'unequal',
          type: Boolean,
          reflect: true
        },
        hr: {
          attribute: 'hit-rate',
          type: Number,
          reflect: true
        },
        far: {
          attribute: 'false-alarm-rate',
          type: Number,
          reflect: true
        },
        s: {
          attribute: 's',
          type: Number,
          reflect: true
        },
        d: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }]);

  return SDTEquationHrFar2D;
}(SDTEquation);
customElements.define('sdt-equation-hrfar2d', SDTEquationHrFar2D);

var _templateObject, _templateObject2;
/*
  SDTExample Base Class - Not intended for instantiation!
  <sdt-example>
*/

var SDTExample = /*#__PURE__*/function (_SDTElement) {
  _inherits(SDTExample, _SDTElement);

  var _super = _createSuper(SDTExample);

  function SDTExample() {
    _classCallCheck(this, SDTExample);

    return _super.apply(this, arguments);
  }

  _createClass(SDTExample, [{
    key: "render",
    value: function render() {
      // eslint-disable-line class-methods-use-this
      return $(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        <div class=\"body\">\n          <slot>Empty!</slot>\n        </div>\n      </div>"])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTExample), "styles", this), r$2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        :host {\n          ---border: var(--border, 1px solid var(---color-border));\n          display: inline-block;\n\n          /* This makes IE11 happy */\n          width: 100%;\n\n          margin-bottom: 1rem;\n        }\n\n        .holder {\n          display: flex;\n        }\n\n        .body {\n          display: flex;\n\n          flex-wrap: wrap;\n\n          align-items: center;\n          justify-content: left;\n\n          padding: 0.625rem;\n\n          border: var(---border);\n          border-radius: 0.25rem;\n        }\n\n        .body ::slotted(*) {\n          margin: 0.625rem;\n        }\n\n        /* HACK: Sibling selectors not working with ::slotted */\n        /* .body > rdk-task + sdt-response,\n        ::slotted(rdk-task) + ::slotted(sdt-response) { */\n        .body ::slotted(sdt-response) {\n          margin-left: 0;\n        }\n\n        /* HACK: Sibling selectors not working with ::slotted */\n        /* .body > sdt-control + rdk-task,\n        ::slotted(sdt-control) + ::slotted(rdk-task) {\n          margin-left: 0;\n        } */\n        .body ::slotted(rdk-task) {\n          margin-left: 0;\n        }\n      "])))];
    }
  }]);

  return SDTExample;
}(SDTElement);
customElements.define('sdt-example', SDTExample);

/*
  SDTExample_DoubleInteractive element
  <sdt-example-interactive>
*/

var SDTExampleDoubleInteractive = /*#__PURE__*/function (_SDTExample) {
  _inherits(SDTExampleDoubleInteractive, _SDTExample);

  var _super = _createSuper(SDTExampleDoubleInteractive);

  function SDTExampleDoubleInteractive() {
    _classCallCheck(this, SDTExampleDoubleInteractive);

    return _super.apply(this, arguments);
  }

  _createClass(SDTExampleDoubleInteractive, [{
    key: "firstUpdated",
    value: function
      /* changedProperties */
    firstUpdated() {
      var _this = this;

      this.one = {};
      this.one.h = 95;
      this.one.m = 5;
      this.one.fa = 35;
      this.one.cr = 65;
      this.one.hr = SDTMath.hM2Hr(this.one.h, this.one.m);
      this.one.far = SDTMath.faCr2Far(this.one.fa, this.one.cr);
      this.one.d = SDTMath.hrFar2D(this.one.hr, this.one.far);
      this.one.c = SDTMath.hrFar2C(this.one.hr, this.one.far);
      this.two = {};
      this.two.h = 40;
      this.two.m = 60;
      this.two.fa = 20;
      this.two.cr = 80;
      this.two.hr = SDTMath.hM2Hr(this.two.h, this.two.m);
      this.two.far = SDTMath.faCr2Far(this.two.fa, this.two.cr);
      this.two.d = SDTMath.hrFar2D(this.two.hr, this.two.far);
      this.two.c = SDTMath.hrFar2C(this.two.hr, this.two.far);
      this.sdtTableOne = this.querySelector('sdt-table:nth-of-type(1)');
      this.sdtTableTwo = this.querySelector('sdt-table:nth-of-type(2)');
      this.rocSpace = this.querySelector('roc-space');
      this.sdtModelOne = this.querySelector('sdt-model:nth-of-type(1)');
      this.sdtModelTwo = this.querySelector('sdt-model:nth-of-type(2)');

      if (this.sdtTableOne) {
        this.sdtTableOne.h = this.one.h;
        this.sdtTableOne.m = this.one.m;
        this.sdtTableOne.fa = this.one.fa;
        this.sdtTableOne.cr = this.one.cr;
        this.sdtTableOne.addEventListener('sdt-table-change', function (event) {
          if (_this.rocSpace) {
            _this.rocSpace.set(event.detail.hr, event.detail.far, 'default', '↑');
          }

          if (_this.sdtModelOne) {
            _this.sdtModelOne.d = SDTMath.hrFar2D(event.detail.hr, event.detail.far);
            _this.sdtModelOne.c = SDTMath.hrFar2C(event.detail.hr, event.detail.far);
          }
        });
      }

      if (this.sdtTableTwo) {
        this.sdtTableTwo.h = this.two.h;
        this.sdtTableTwo.m = this.two.m;
        this.sdtTableTwo.fa = this.two.fa;
        this.sdtTableTwo.cr = this.two.cr;
        this.sdtTableTwo.addEventListener('sdt-table-change', function (event) {
          if (_this.rocSpace) {
            _this.rocSpace.set(event.detail.hr, event.detail.far, 'two', '↓');
          }

          if (_this.sdtModelTwo) {
            _this.sdtModelTwo.d = SDTMath.hrFar2D(event.detail.hr, event.detail.far);
            _this.sdtModelTwo.c = SDTMath.hrFar2C(event.detail.hr, event.detail.far);
          }
        });
      }

      if (this.rocSpace) {
        this.rocSpace.set(this.one.hr, this.one.far, 'default', '↑');
        this.rocSpace.set(this.two.hr, this.two.far, 'two', '↓');
        this.rocSpace.addEventListener('roc-point-change', function (event) {
          if (event.detail.name === 'default' && _this.sdtModelOne) {
            _this.sdtModelOne.d = event.detail.d;
            _this.sdtModelOne.c = event.detail.c;
          } else if (event.detail.name === 'two' && _this.sdtModelTwo) {
            _this.sdtModelTwo.d = event.detail.d;
            _this.sdtModelTwo.c = event.detail.c;
          }

          if (event.detail.name === 'default' && _this.sdtTableOne) {
            var newh = Math.round((_this.sdtTableOne.h + _this.sdtTableOne.m) * event.detail.hr);
            var newm = _this.sdtTableOne.h + _this.sdtTableOne.m - newh;
            var newfa = Math.round((_this.sdtTableOne.fa + _this.sdtTableOne.cr) * event.detail.far);
            var newcr = _this.sdtTableOne.fa + _this.sdtTableOne.cr - newfa;
            _this.sdtTableOne.h = newh;
            _this.sdtTableOne.m = newm;
            _this.sdtTableOne.fa = newfa;
            _this.sdtTableOne.cr = newcr;
          } else if (event.detail.name === 'two' && _this.sdtTableTwo) {
            var _newh = Math.round((_this.sdtTableTwo.h + _this.sdtTableTwo.m) * event.detail.hr);

            var _newm = _this.sdtTableTwo.h + _this.sdtTableTwo.m - _newh;

            var _newfa = Math.round((_this.sdtTableTwo.fa + _this.sdtTableTwo.cr) * event.detail.far);

            var _newcr = _this.sdtTableTwo.fa + _this.sdtTableTwo.cr - _newfa;

            _this.sdtTableTwo.h = _newh;
            _this.sdtTableTwo.m = _newm;
            _this.sdtTableTwo.fa = _newfa;
            _this.sdtTableTwo.cr = _newcr;
          }
        });
      }

      if (this.sdtModelOne) {
        this.sdtModelOne.h = this.one.d;
        this.sdtModelOne.m = this.one.c;
        this.sdtModelOne.addEventListener('sdt-model-change', function (event) {
          if (_this.rocSpace) {
            _this.rocSpace.setWithSDT(event.detail.d, event.detail.c, 'default', '↑');
          }

          if (_this.sdtTableOne) {
            var newh = Math.round((_this.sdtTableOne.h + _this.sdtTableOne.m) * event.detail.hr);
            var newm = _this.sdtTableOne.h + _this.sdtTableOne.m - newh;
            var newfa = Math.round((_this.sdtTableOne.fa + _this.sdtTableOne.cr) * event.detail.far);
            var newcr = _this.sdtTableOne.fa + _this.sdtTableOne.cr - newfa;
            _this.sdtTableOne.h = newh;
            _this.sdtTableOne.m = newm;
            _this.sdtTableOne.fa = newfa;
            _this.sdtTableOne.cr = newcr;
          }
        });
      }

      if (this.sdtModelTwo) {
        this.sdtModelTwo.h = this.two.d;
        this.sdtModelTwo.m = this.two.c;
        this.sdtModelTwo.addEventListener('sdt-model-change', function (event) {
          if (_this.rocSpace) {
            _this.rocSpace.setWithSDT(event.detail.d, event.detail.c, 'two', '↓');
          }

          if (_this.sdtTableTwo) {
            var newh = Math.round((_this.sdtTableTwo.h + _this.sdtTableTwo.m) * event.detail.hr);
            var newm = _this.sdtTableTwo.h + _this.sdtTableTwo.m - newh;
            var newfa = Math.round((_this.sdtTableTwo.fa + _this.sdtTableTwo.cr) * event.detail.far);
            var newcr = _this.sdtTableTwo.fa + _this.sdtTableTwo.cr - newfa;
            _this.sdtTableTwo.h = newh;
            _this.sdtTableTwo.m = newm;
            _this.sdtTableTwo.fa = newfa;
            _this.sdtTableTwo.cr = newcr;
          }
        });
      }
    }
  }]);

  return SDTExampleDoubleInteractive;
}(SDTExample);
customElements.define('sdt-example-double-interactive', SDTExampleDoubleInteractive);

/*
  SDTExample_Human element
  <sdt-example-human>
*/

var SDTExampleHuman = /*#__PURE__*/function (_SDTExample) {
  _inherits(SDTExampleHuman, _SDTExample);

  var _super = _createSuper(SDTExampleHuman);

  function SDTExampleHuman() {
    _classCallCheck(this, SDTExampleHuman);

    return _super.apply(this, arguments);
  }

  _createClass(SDTExampleHuman, [{
    key: "firstUpdated",
    value: function
      /* changedProperties */
    firstUpdated() {
      var _this = this;

      this.count = 1;
      this.sdtControl = this.querySelector('sdt-control');
      this.rdkTask = this.querySelector('rdk-task');
      this.sdtResponse = this.querySelector('sdt-response');
      this.sdtTable = this.querySelector('sdt-table');
      this.rocSpace = this.querySelector('roc-space');
      this.sdtModel = this.querySelector('sdt-model');

      if (this.rocSpace) {
        if (this.rocSpace.hasAttribute('history')) {
          this.rocSpace.set(0.5, 0.5, 'default', this.count);
        }
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('trials')) {
        this.sdtControl.addEventListener('sdt-control-trials', function (event) {
          if (_this.rdkTask) {
            _this.rdkTask.trials = event.detail.trials;
          }

          if (_this.sdtResponse) {
            _this.sdtResponse.trialTotal = event.detail.trials;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('duration')) {
        this.sdtControl.addEventListener('sdt-control-duration', function (event) {
          if (_this.rdkTask) {
            _this.rdkTask.duration = event.detail.duration;
            _this.rdkTask.wait = event.detail.duration;
            _this.rdkTask.iti = event.detail.duration;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('coherence')) {
        this.sdtControl.addEventListener('sdt-control-coherence', function (event) {
          if (_this.rdkTask) {
            _this.rdkTask.coherence = event.detail.coherence;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('payoff')) {
        this.sdtControl.addEventListener('sdt-control-payoff', function (event) {
          if (_this.sdtResponse) {
            _this.sdtResponse.hPayoff = event.detail.payoff;
            _this.sdtResponse.mPayoff = -event.detail.payoff + 0; // Get rid of -0

            _this.sdtResponse.faPayoff = -(100 - event.detail.payoff) + 0; // Get rid of -0

            _this.sdtResponse.crPayoff = 100 - event.detail.payoff;
          }

          if (_this.sdtTable) {
            _this.sdtTable.hPayoff = event.detail.payoff;
            _this.sdtTable.mPayoff = -event.detail.payoff + 0; // Get rid of -0

            _this.sdtTable.faPayoff = -(100 - event.detail.payoff) + 0; // Get rid of -0

            _this.sdtTable.crPayoff = 100 - event.detail.payoff;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('run')) {
        this.sdtControl.addEventListener('sdt-control-run', function
          /* event */
        () {
          if (_this.rdkTask) {
            _this.rdkTask.running = true;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('pause')) {
        this.sdtControl.addEventListener('sdt-control-pause', function
          /* event */
        () {
          if (_this.rdkTask) {
            _this.rdkTask.running = false;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('reset')) {
        this.sdtControl.addEventListener('sdt-control-reset', function
          /* event */
        () {
          if (_this.rdkTask) {
            _this.rdkTask.reset();
          }

          if (_this.sdtResponse) {
            _this.sdtResponse.reset();
          }

          if (_this.sdtTable) {
            _this.sdtTable.h = 0;
            _this.sdtTable.m = 0;
            _this.sdtTable.fa = 0;
            _this.sdtTable.cr = 0;
          }

          if (_this.rocSpace) {
            if (_this.rocSpace.hasAttribute('history')) {
              _this.count += 1;

              _this.rocSpace.set(0.5, 0.5, "point".concat(_this.count), _this.count);
            } else {
              _this.rocSpace.hr = 0.5;
              _this.rocSpace.far = 0.5;
            }
          }

          if (_this.sdtModel) {
            _this.sdtModel.d = 0;
            _this.sdtModel.c = 0;
          }
        });
      }

      if (this.rdkTask) {
        if (this.sdtResponse) {
          this.sdtResponse.trialTotal = this.rdkTask.trials;
        }
      }

      if (this.rdkTask) {
        this.rdkTask.addEventListener('rdk-trial-start', function (event) {
          if (_this.sdtResponse) {
            _this.sdtResponse.start(event.detail.signal, event.detail.trial);
          }
        });
      }

      if (this.rdkTask) {
        this.rdkTask.addEventListener('rdk-trial-end', function
          /* event */
        () {
          if (_this.sdtResponse) {
            _this.sdtResponse.stop();
          }
        });
      }

      if (this.rdkTask) {
        this.rdkTask.addEventListener('rdk-block-end', function
          /* event */
        () {
          if (_this.sdtControl) {
            _this.sdtControl.complete();
          }
        });
      }

      if (this.sdtResponse) {
        this.sdtResponse.addEventListener('sdt-response', function (event) {
          if (_this.sdtTable) {
            _this.sdtTable.h = event.detail.h;
            _this.sdtTable.m = event.detail.m;
            _this.sdtTable.fa = event.detail.fa;
            _this.sdtTable.cr = event.detail.cr;
          }

          var newhr = SDTMath.hM2Hr(event.detail.h + 1, event.detail.m + 1);
          var newfar = SDTMath.faCr2Far(event.detail.fa + 1, event.detail.cr + 1);

          if (_this.rocSpace) {
            if (_this.rocSpace.hasAttribute('history')) {
              _this.rocSpace.set(newhr, newfar, _this.count === 1 ? 'default' : "point".concat(_this.count), _this.count);
            } else {
              _this.rocSpace.hr = newhr;
              _this.rocSpace.far = newfar;
            }
          }

          if (_this.sdtModel) {
            _this.sdtModel.d = SDTMath.hrFar2D(newhr, newfar);
            _this.sdtModel.c = SDTMath.hrFar2C(newhr, newfar);
          }
        });
      }
    }
  }]);

  return SDTExampleHuman;
}(SDTExample);
customElements.define('sdt-example-human', SDTExampleHuman);

/*
  SDTExample_Interactive element
  <sdt-example-interactive>
*/

var SDTExampleInteractive = /*#__PURE__*/function (_SDTExample) {
  _inherits(SDTExampleInteractive, _SDTExample);

  var _super = _createSuper(SDTExampleInteractive);

  function SDTExampleInteractive() {
    _classCallCheck(this, SDTExampleInteractive);

    return _super.apply(this, arguments);
  }

  _createClass(SDTExampleInteractive, [{
    key: "firstUpdated",
    value: function
      /* changedProperties */
    firstUpdated() {
      var _this = this;

      this.sdtControl = this.querySelector('sdt-control');
      this.sdtTable = this.querySelector('sdt-table');
      this.rocSpace = this.querySelector('roc-space');
      this.sdtModel = this.querySelector('sdt-model');
      this.rocSpaces = this.querySelectorAll('roc-space');

      if (this.sdtControl && this.sdtControl.hasAttribute('color')) {
        this.sdtControl.addEventListener('sdt-control-color', function (event) {
          if (_this.sdtModel) {
            _this.sdtModel.color = event.detail.color;
          }

          if (_this.sdtTable) {
            _this.sdtTable.color = event.detail.color;
          }
        });
      }

      if (this.sdtControl) {
        this.sdtControl.addEventListener('sdt-control-z-roc', function (event) {
          if (_this.rocSpaces.length > 0) {
            _this.rocSpaces.forEach(function (rocSpace) {
              rocSpace.zRoc = event.detail.zRoc;
            });
          }
        });
      }

      if (this.sdtTable) {
        if (this.rocSpace) {
          this.rocSpace.hr = SDTMath.hM2Hr(this.sdtTable.h, this.sdtTable.m);
          this.rocSpace.far = SDTMath.faCr2Far(this.sdtTable.fa, this.sdtTable.cr);
        }

        if (this.sdtModel) {
          this.sdtModel.d = SDTMath.hrFar2D(SDTMath.hM2Hr(this.sdtTable.h, this.sdtTable.m), SDTMath.faCr2Far(this.sdtTable.fa, this.sdtTable.cr), this.sdtModel.s);
          this.sdtModel.c = SDTMath.hrFar2C(SDTMath.hM2Hr(this.sdtTable.h, this.sdtTable.m), SDTMath.faCr2Far(this.sdtTable.fa, this.sdtTable.cr), this.sdtModel.s);
        }

        this.sdtTable.addEventListener('sdt-table-change', function (event) {
          if (_this.rocSpace) {
            _this.rocSpace.far = event.detail.far;
            _this.rocSpace.hr = event.detail.hr;
          }

          if (_this.sdtModel) {
            _this.sdtModel.d = SDTMath.hrFar2D(event.detail.hr, event.detail.far, _this.sdtModel.s);
            _this.sdtModel.c = SDTMath.hrFar2C(event.detail.hr, event.detail.far, _this.sdtModel.s);
          }
        });
      }

      if (this.rocSpace) {
        if (this.sdtModel && !this.sdtTable) {
          this.sdtModel.d = SDTMath.hrFar2D(this.rocSpace.hr, this.rocSpace.far, this.rocSpace.s);
          this.sdtModel.c = SDTMath.hrFar2C(this.rocSpace.hr, this.rocSpace.far, this.rocSpace.s);
          this.sdtModel.s = this.rocSpace.s;
        }

        this.rocSpace.addEventListener('roc-point-change', function (event) {
          if (_this.sdtModel) {
            _this.sdtModel.d = event.detail.d;
            _this.sdtModel.c = event.detail.c;
            _this.sdtModel.s = event.detail.s;
          }

          if (_this.sdtTable) {
            var newh = Math.round((_this.sdtTable.h + _this.sdtTable.m) * event.detail.hr);
            var newm = _this.sdtTable.h + _this.sdtTable.m - newh;
            var newfa = Math.round((_this.sdtTable.fa + _this.sdtTable.cr) * event.detail.far);
            var newcr = _this.sdtTable.fa + _this.sdtTable.cr - newfa;
            _this.sdtTable.h = newh;
            _this.sdtTable.m = newm;
            _this.sdtTable.fa = newfa;
            _this.sdtTable.cr = newcr;
          }
        });
      }

      if (this.sdtModel) {
        this.sdtModel.addEventListener('sdt-model-change', function (event) {
          if (_this.rocSpaces.length > 0) {
            _this.rocSpaces.forEach(function (rocSpace) {
              rocSpace.setWithSDT(event.detail.d, event.detail.c, 'default', '', event.detail.s);
            });
          }

          if (_this.sdtTable) {
            var newh = Math.round((_this.sdtTable.h + _this.sdtTable.m) * event.detail.hr);
            var newm = _this.sdtTable.h + _this.sdtTable.m - newh;
            var newfa = Math.round((_this.sdtTable.fa + _this.sdtTable.cr) * event.detail.far);
            var newcr = _this.sdtTable.fa + _this.sdtTable.cr - newfa;
            _this.sdtTable.h = newh;
            _this.sdtTable.m = newm;
            _this.sdtTable.fa = newfa;
            _this.sdtTable.cr = newcr;
          }
        });
      }
    }
  }]);

  return SDTExampleInteractive;
}(SDTExample);
customElements.define('sdt-example-interactive', SDTExampleInteractive);

/*
  SDTExample_Model element
  <sdt-example-model>
*/

var SDTExampleModel = /*#__PURE__*/function (_SDTExample) {
  _inherits(SDTExampleModel, _SDTExample);

  var _super = _createSuper(SDTExampleModel);

  function SDTExampleModel() {
    _classCallCheck(this, SDTExampleModel);

    return _super.apply(this, arguments);
  }

  _createClass(SDTExampleModel, [{
    key: "firstUpdated",
    value: function
      /* changedProperties */
    firstUpdated() {
      var _this = this;

      this.count = 1;
      this.sdtControl = this.querySelector('sdt-control');
      this.rdkTask = this.querySelector('rdk-task');
      this.sdtModel = this.querySelector('sdt-model');
      this.sdtResponse = this.querySelector('sdt-response');
      this.sdtTable = this.querySelector('sdt-table');
      this.rocSpace = this.querySelector('roc-space');

      if (this.sdtControl && this.sdtControl.hasAttribute('color')) {
        this.sdtControl.addEventListener('sdt-control-color', function (event) {
          if (_this.sdtModel) {
            _this.sdtModel.color = event.detail.color;
          }

          if (_this.sdtTable) {
            _this.sdtTable.color = event.detail.color;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('duration')) {
        this.sdtControl.addEventListener('sdt-control-duration', function (event) {
          if (_this.rdkTask) {
            _this.rdkTask.duration = event.detail.duration;
            _this.rdkTask.wait = event.detail.duration;
            _this.rdkTask.iti = event.detail.duration;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('trials')) {
        this.sdtControl.addEventListener('sdt-control-trials', function (event) {
          if (_this.rdkTask) {
            _this.rdkTask.trials = event.detail.trials;
          }

          if (_this.sdtResponse) {
            _this.sdtResponse.trialTotal = event.detail.trials;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('coherence')) {
        this.sdtControl.addEventListener('sdt-control-coherence', function (event) {
          if (_this.rdkTask) {
            _this.rdkTask.coherence = event.detail.coherence;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('run')) {
        this.sdtControl.addEventListener('sdt-control-run', function
          /* event */
        () {
          if (_this.rdkTask) {
            _this.rdkTask.running = true;
          }

          if (_this.sdtModel) {
            _this.sdtModel.resumeTrial();
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('pause')) {
        this.sdtControl.addEventListener('sdt-control-pause', function
          /* event */
        () {
          if (_this.rdkTask) {
            _this.rdkTask.running = false;
          }

          if (_this.sdtModel) {
            _this.sdtModel.pauseTrial();
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('reset')) {
        this.sdtControl.addEventListener('sdt-control-reset', function
          /* event */
        () {
          if (_this.rdkTask) {
            _this.rdkTask.reset();
          }

          if (_this.sdtResponse) {
            _this.sdtResponse.reset();
          }

          if (_this.sdtModel) {
            _this.sdtModel.reset();
          }

          if (_this.sdtTable) {
            _this.sdtTable.h = 0;
            _this.sdtTable.m = 0;
            _this.sdtTable.fa = 0;
            _this.sdtTable.cr = 0;
          }

          if (_this.rocSpace) {
            if (_this.rocSpace.hasAttribute('history')) {
              _this.count += 1;

              _this.rocSpace.set(0.5, 0.5, "point".concat(_this.count), '', 1);
            } else {
              _this.rocSpace.hr = 0.5;
              _this.rocSpace.far = 0.5;
            }
          }
        });
      }

      if (this.rdkTask) {
        if (this.sdtResponse) {
          this.sdtResponse.trialTotal = this.rdkTask.trials;
        }
      }

      if (this.rdkTask) {
        this.rdkTask.addEventListener('rdk-trial-start', function (event) {
          if (_this.sdtResponse) {
            _this.sdtResponse.start(event.detail.signal, event.detail.trial);
          }

          if (_this.sdtModel) {
            _this.sdtModel.trial(event.detail.trial, event.detail.signal, event.detail.duration, event.detail.wait, event.detail.iti);
          }
        });
      }

      if (this.rdkTask) {
        this.rdkTask.addEventListener('rdk-trial-middle', function
          /* event */
        () {// if (this.sdtModel) {
          //   this.sdtModel.trial(event.detail.trial, event.detail.signal);
          // }
        });
      }

      if (this.rdkTask) {
        this.rdkTask.addEventListener('rdk-trial-end', function
          /* event */
        () {
          if (_this.sdtResponse) {
            _this.sdtResponse.stop();
          }
        });
      }

      if (this.rdkTask) {
        this.rdkTask.addEventListener('rdk-block-end', function
          /* event */
        () {
          if (_this.sdtControl) {
            _this.sdtControl.complete();
          }
        });
      }

      if (this.sdtModel) {
        this.sdtModel.addEventListener('sdt-response', function (event) {
          if (_this.sdtResponse) {
            _this.sdtResponse.responded(event.detail.response);
          }

          if (_this.sdtTable) {
            _this.sdtTable.h = event.detail.h;
            _this.sdtTable.m = event.detail.m;
            _this.sdtTable.fa = event.detail.fa;
            _this.sdtTable.cr = event.detail.cr;
          }

          if (_this.rocSpace) {
            _this.rocSpace.hr = SDTMath.hM2Hr(event.detail.h, event.detail.m);
            _this.rocSpace.far = SDTMath.faCr2Far(event.detail.fa, event.detail.cr);
          }
        });
      }

      if (this.sdtModel) {
        this.sdtModel.addEventListener('sdt-model-change', function (event) {
          if (_this.sdtTable) {
            _this.sdtTable.h = event.detail.h;
            _this.sdtTable.m = event.detail.m;
            _this.sdtTable.fa = event.detail.fa;
            _this.sdtTable.cr = event.detail.cr;
          }

          if (_this.rocSpace) {
            _this.rocSpace.hr = SDTMath.hM2Hr(event.detail.h, event.detail.m);
            _this.rocSpace.far = SDTMath.faCr2Far(event.detail.fa, event.detail.cr);
          }
        });
      }
    }
  }]);

  return SDTExampleModel;
}(SDTExample);
customElements.define('sdt-example-model', SDTExampleModel);

/*
  SDTExampleUnequal element
  <sdt-example-unequal>
*/

var SDTExampleUnequal = /*#__PURE__*/function (_SDTExample) {
  _inherits(SDTExampleUnequal, _SDTExample);

  var _super = _createSuper(SDTExampleUnequal);

  function SDTExampleUnequal() {
    _classCallCheck(this, SDTExampleUnequal);

    return _super.apply(this, arguments);
  }

  _createClass(SDTExampleUnequal, [{
    key: "firstUpdated",
    value: function
      /* changedProperties */
    firstUpdated() {
      var _this = this;

      this.sdtControl = this.querySelector('sdt-control');
      this.rocSpace = this.querySelector('roc-space');
      this.sdtModel = this.querySelector('sdt-model');

      if (this.sdtControl) {
        this.sdtControl.addEventListener('sdt-control-z-roc', function (event) {
          _this.rocSpace.zRoc = event.detail.zRoc;
        });
      }

      if (this.rocSpace) {
        this.rocSpace.setWithSDT(1, 0, 'default', '', 1); // Set 'default' to equal variance for contours
      }

      if (this.sdtModel) {
        if (this.rocSpace) {
          range(-1.5, 1.6, 0.5).forEach(function (c, index) {
            _this.rocSpace.setWithSDT(_this.sdtModel.d, c, "point".concat(index), '', _this.sdtModel.s);
          });
        }

        this.sdtModel.addEventListener('sdt-model-change', function (event) {
          if (_this.rocSpace) {
            range(-1.5, 1.6, 0.5).forEach(function (c, index) {
              _this.rocSpace.setWithSDT(event.detail.d, c, "point".concat(index), '', event.detail.s);
            });
          }
        });
      }
    }
  }]);

  return SDTExampleUnequal;
}(SDTExample);
customElements.define('sdt-example-unequal', SDTExampleUnequal);

export { RDKTask, ROCSpace, SDTControl, SDTElement, SDTEquationDC2Far, SDTEquationDC2Hr, SDTEquationFaCr2Far, SDTEquationHM2Hr, SDTEquationHMFaCr2Acc, SDTEquationHrFar2C, SDTEquationHrFar2D, SDTExampleDoubleInteractive, SDTExampleHuman, SDTExampleInteractive, SDTExampleModel, SDTExampleUnequal, SDTModel, SDTResponse, SDTTable };
//# sourceMappingURL=detectableElements.esm.js.map