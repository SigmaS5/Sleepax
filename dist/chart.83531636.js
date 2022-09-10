// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/vendor/chart.js":[function(require,module,exports) {
var define;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _get2(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get2 = Reflect.get; } else { _get2 = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get2(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e85) { throw _e85; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e86) { didErr = true; err = _e86; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Chart = e();
}(this, function () {
  "use strict";

  function t() {}

  var e = function () {
    var t = 0;
    return function () {
      return t++;
    };
  }();

  function i(t) {
    return null == t;
  }

  function s(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    var e = Object.prototype.toString.call(t);
    return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
  }

  function n(t) {
    return null !== t && "[object Object]" === Object.prototype.toString.call(t);
  }

  var o = function o(t) {
    return ("number" == typeof t || t instanceof Number) && isFinite(+t);
  };

  function a(t, e) {
    return o(t) ? t : e;
  }

  function r(t, e) {
    return void 0 === t ? e : t;
  }

  var l = function l(t, e) {
    return "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : t / e;
  },
      h = function h(t, e) {
    return "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
  };

  function c(t, e, i) {
    if (t && "function" == typeof t.call) return t.apply(i, e);
  }

  function d(t, e, i, o) {
    var a, r, l;
    if (s(t)) {
      if (r = t.length, o) for (a = r - 1; a >= 0; a--) {
        e.call(i, t[a], a);
      } else for (a = 0; a < r; a++) {
        e.call(i, t[a], a);
      }
    } else if (n(t)) for (l = Object.keys(t), r = l.length, a = 0; a < r; a++) {
      e.call(i, t[l[a]], l[a]);
    }
  }

  function u(t, e) {
    var i, s, n, o;
    if (!t || !e || t.length !== e.length) return !1;

    for (i = 0, s = t.length; i < s; ++i) {
      if (n = t[i], o = e[i], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
    }

    return !0;
  }

  function f(t) {
    if (s(t)) return t.map(f);

    if (n(t)) {
      var _e2 = Object.create(null),
          _i2 = Object.keys(t),
          _s2 = _i2.length;

      var _n2 = 0;

      for (; _n2 < _s2; ++_n2) {
        _e2[_i2[_n2]] = f(t[_i2[_n2]]);
      }

      return _e2;
    }

    return t;
  }

  function g(t) {
    return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
  }

  function p(t, e, i, s) {
    if (!g(t)) return;
    var o = e[t],
        a = i[t];
    n(o) && n(a) ? m(o, a, s) : e[t] = f(a);
  }

  function m(t, e, i) {
    var o = s(e) ? e : [e],
        a = o.length;
    if (!n(t)) return t;
    var r = (i = i || {}).merger || p;

    for (var _s3 = 0; _s3 < a; ++_s3) {
      if (!n(e = o[_s3])) continue;

      var _a2 = Object.keys(e);

      for (var _s4 = 0, _n3 = _a2.length; _s4 < _n3; ++_s4) {
        r(_a2[_s4], t, e, i);
      }
    }

    return t;
  }

  function b(t, e) {
    return m(t, e, {
      merger: x
    });
  }

  function x(t, e, i) {
    if (!g(t)) return;
    var s = e[t],
        o = i[t];
    n(s) && n(o) ? b(s, o) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = f(o));
  }

  var _ = {
    "": function _(t) {
      return t;
    },
    x: function x(t) {
      return t.x;
    },
    y: function y(t) {
      return t.y;
    }
  };

  function y(t, e) {
    var i = _[e] || (_[e] = function (t) {
      var e = v(t);
      return function (t) {
        var _iterator = _createForOfIteratorHelper(e),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _i3 = _step.value;
            if ("" === _i3) break;
            t = t && t[_i3];
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return t;
      };
    }(e));

    return i(t);
  }

  function v(t) {
    var e = t.split("."),
        i = [];
    var s = "";

    var _iterator2 = _createForOfIteratorHelper(e),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _t2 = _step2.value;
        s += _t2, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (i.push(s), s = "");
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return i;
  }

  function w(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }

  var M = function M(t) {
    return void 0 !== t;
  },
      k = function k(t) {
    return "function" == typeof t;
  },
      S = function S(t, e) {
    if (t.size !== e.size) return !1;

    var _iterator3 = _createForOfIteratorHelper(t),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _i4 = _step3.value;
        if (!e.has(_i4)) return !1;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return !0;
  };

  function P(t) {
    return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type;
  }

  var D = Math.PI,
      O = 2 * D,
      C = O + D,
      A = Number.POSITIVE_INFINITY,
      T = D / 180,
      L = D / 2,
      E = D / 4,
      R = 2 * D / 3,
      I = Math.log10,
      z = Math.sign;

  function F(t) {
    var e = Math.round(t);
    t = N(t, e, t / 1e3) ? e : t;
    var i = Math.pow(10, Math.floor(I(t))),
        s = t / i;
    return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i;
  }

  function V(t) {
    var e = [],
        i = Math.sqrt(t);
    var s;

    for (s = 1; s < i; s++) {
      t % s == 0 && (e.push(s), e.push(t / s));
    }

    return i === (0 | i) && e.push(i), e.sort(function (t, e) {
      return t - e;
    }).pop(), e;
  }

  function B(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  }

  function N(t, e, i) {
    return Math.abs(t - e) < i;
  }

  function W(t, e) {
    var i = Math.round(t);
    return i - e <= t && i + e >= t;
  }

  function j(t, e, i) {
    var s, n, o;

    for (s = 0, n = t.length; s < n; s++) {
      o = t[s][i], isNaN(o) || (e.min = Math.min(e.min, o), e.max = Math.max(e.max, o));
    }
  }

  function H(t) {
    return t * (D / 180);
  }

  function $(t) {
    return t * (180 / D);
  }

  function Y(t) {
    if (!o(t)) return;
    var e = 1,
        i = 0;

    for (; Math.round(t * e) / e !== t;) {
      e *= 10, i++;
    }

    return i;
  }

  function U(t, e) {
    var i = e.x - t.x,
        s = e.y - t.y,
        n = Math.sqrt(i * i + s * s);
    var o = Math.atan2(s, i);
    return o < -.5 * D && (o += O), {
      angle: o,
      distance: n
    };
  }

  function X(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }

  function q(t, e) {
    return (t - e + C) % O - D;
  }

  function K(t) {
    return (t % O + O) % O;
  }

  function G(t, e, i, s) {
    var n = K(t),
        o = K(e),
        a = K(i),
        r = K(o - n),
        l = K(a - n),
        h = K(n - o),
        c = K(n - a);
    return n === o || n === a || s && o === a || r > l && h < c;
  }

  function Z(t, e, i) {
    return Math.max(e, Math.min(i, t));
  }

  function J(t) {
    return Z(t, -32768, 32767);
  }

  function Q(t, e, i) {
    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1e-6;
    return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
  }

  function tt(t, e, i) {
    i = i || function (i) {
      return t[i] < e;
    };

    var s,
        n = t.length - 1,
        o = 0;

    for (; n - o > 1;) {
      s = o + n >> 1, i(s) ? o = s : n = s;
    }

    return {
      lo: o,
      hi: n
    };
  }

  var et = function et(t, e, i, s) {
    return tt(t, i, s ? function (s) {
      return t[s][e] <= i;
    } : function (s) {
      return t[s][e] < i;
    });
  },
      it = function it(t, e, i) {
    return tt(t, i, function (s) {
      return t[s][e] >= i;
    });
  };

  function st(t, e, i) {
    var s = 0,
        n = t.length;

    for (; s < n && t[s] < e;) {
      s++;
    }

    for (; n > s && t[n - 1] > i;) {
      n--;
    }

    return s > 0 || n < t.length ? t.slice(s, n) : t;
  }

  var nt = ["push", "pop", "shift", "splice", "unshift"];

  function ot(t, e) {
    t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
      configurable: !0,
      enumerable: !1,
      value: {
        listeners: [e]
      }
    }), nt.forEach(function (e) {
      var i = "_onData" + w(e),
          s = t[e];
      Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !1,
        value: function value() {
          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          var n = s.apply(this, e);
          return t._chartjs.listeners.forEach(function (t) {
            "function" == typeof t[i] && t[i].apply(t, e);
          }), n;
        }
      });
    }));
  }

  function at(t, e) {
    var i = t._chartjs;
    if (!i) return;
    var s = i.listeners,
        n = s.indexOf(e);
    -1 !== n && s.splice(n, 1), s.length > 0 || (nt.forEach(function (e) {
      delete t[e];
    }), delete t._chartjs);
  }

  function rt(t) {
    var e = new Set();
    var i, s;

    for (i = 0, s = t.length; i < s; ++i) {
      e.add(t[i]);
    }

    return e.size === s ? t : Array.from(e);
  }

  var lt = "undefined" == typeof window ? function (t) {
    return t();
  } : window.requestAnimationFrame;

  function ht(t, e, i) {
    var s = i || function (t) {
      return Array.prototype.slice.call(t);
    };

    var n = !1,
        o = [];
    return function () {
      for (var _len2 = arguments.length, i = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        i[_key2] = arguments[_key2];
      }

      o = s(i), n || (n = !0, lt.call(window, function () {
        n = !1, t.apply(e, o);
      }));
    };
  }

  function ct(t, e) {
    var i;
    return function () {
      for (var _len3 = arguments.length, s = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        s[_key3] = arguments[_key3];
      }

      return e ? (clearTimeout(i), i = setTimeout(t, e, s)) : t.apply(this, s), e;
    };
  }

  var dt = function dt(t) {
    return "start" === t ? "left" : "end" === t ? "right" : "center";
  },
      ut = function ut(t, e, i) {
    return "start" === t ? e : "end" === t ? i : (e + i) / 2;
  },
      ft = function ft(t, e, i, s) {
    return t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e;
  };

  function gt(t, e, i) {
    var s = e.length;
    var n = 0,
        o = s;

    if (t._sorted) {
      var _a3 = t.iScale,
          _r = t._parsed,
          _l = _a3.axis,
          _a3$getUserBounds = _a3.getUserBounds(),
          _h = _a3$getUserBounds.min,
          _c = _a3$getUserBounds.max,
          _d = _a3$getUserBounds.minDefined,
          _u = _a3$getUserBounds.maxDefined;

      _d && (n = Z(Math.min(et(_r, _a3.axis, _h).lo, i ? s : et(e, _l, _a3.getPixelForValue(_h)).lo), 0, s - 1)), o = _u ? Z(Math.max(et(_r, _a3.axis, _c, !0).hi + 1, i ? 0 : et(e, _l, _a3.getPixelForValue(_c), !0).hi + 1), n, s) - n : s - n;
    }

    return {
      start: n,
      count: o
    };
  }

  function pt(t) {
    var e = t.xScale,
        i = t.yScale,
        s = t._scaleRanges,
        n = {
      xmin: e.min,
      xmax: e.max,
      ymin: i.min,
      ymax: i.max
    };
    if (!s) return t._scaleRanges = n, !0;
    var o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max;
    return Object.assign(s, n), o;
  }

  var mt = new ( /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);

      this._request = null, this._charts = new Map(), this._running = !1, this._lastDate = void 0;
    }

    _createClass(_class, [{
      key: "_notify",
      value: function _notify(t, e, i, s) {
        var n = e.listeners[s],
            o = e.duration;
        n.forEach(function (s) {
          return s({
            chart: t,
            initial: e.initial,
            numSteps: o,
            currentStep: Math.min(i - e.start, o)
          });
        });
      }
    }, {
      key: "_refresh",
      value: function _refresh() {
        var _this = this;

        this._request || (this._running = !0, this._request = lt.call(window, function () {
          _this._update(), _this._request = null, _this._running && _this._refresh();
        }));
      }
    }, {
      key: "_update",
      value: function _update() {
        var _this2 = this;

        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
        var e = 0;
        this._charts.forEach(function (i, s) {
          if (!i.running || !i.items.length) return;
          var n = i.items;
          var o,
              a = n.length - 1,
              r = !1;

          for (; a >= 0; --a) {
            o = n[a], o._active ? (o._total > i.duration && (i.duration = o._total), o.tick(t), r = !0) : (n[a] = n[n.length - 1], n.pop());
          }

          r && (s.draw(), _this2._notify(s, i, t, "progress")), n.length || (i.running = !1, _this2._notify(s, i, t, "complete"), i.initial = !1), e += n.length;
        }), this._lastDate = t, 0 === e && (this._running = !1);
      }
    }, {
      key: "_getAnims",
      value: function _getAnims(t) {
        var e = this._charts;
        var i = e.get(t);
        return i || (i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: {
            complete: [],
            progress: []
          }
        }, e.set(t, i)), i;
      }
    }, {
      key: "listen",
      value: function listen(t, e, i) {
        this._getAnims(t).listeners[e].push(i);
      }
    }, {
      key: "add",
      value: function add(t, e) {
        var _this$_getAnims$items;

        e && e.length && (_this$_getAnims$items = this._getAnims(t).items).push.apply(_this$_getAnims$items, _toConsumableArray(e));
      }
    }, {
      key: "has",
      value: function has(t) {
        return this._getAnims(t).items.length > 0;
      }
    }, {
      key: "start",
      value: function start(t) {
        var e = this._charts.get(t);

        e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce(function (t, e) {
          return Math.max(t, e._duration);
        }, 0), this._refresh());
      }
    }, {
      key: "running",
      value: function running(t) {
        if (!this._running) return !1;

        var e = this._charts.get(t);

        return !!(e && e.running && e.items.length);
      }
    }, {
      key: "stop",
      value: function stop(t) {
        var e = this._charts.get(t);

        if (!e || !e.items.length) return;
        var i = e.items;
        var s = i.length - 1;

        for (; s >= 0; --s) {
          i[s].cancel();
        }

        e.items = [], this._notify(t, e, Date.now(), "complete");
      }
    }, {
      key: "remove",
      value: function remove(t) {
        return this._charts.delete(t);
      }
    }]);

    return _class;
  }())();
  /*!
   * @kurkle/color v0.2.1
   * https://github.com/kurkle/color#readme
   * (c) 2022 Jukka Kurkela
   * Released under the MIT License
   */

  function bt(t) {
    return t + .5 | 0;
  }

  var xt = function xt(t, e, i) {
    return Math.max(Math.min(t, i), e);
  };

  function _t(t) {
    return xt(bt(2.55 * t), 0, 255);
  }

  function yt(t) {
    return xt(bt(255 * t), 0, 255);
  }

  function vt(t) {
    return xt(bt(t / 2.55) / 100, 0, 1);
  }

  function wt(t) {
    return xt(bt(100 * t), 0, 100);
  }

  var Mt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  },
      kt = _toConsumableArray("0123456789ABCDEF"),
      St = function St(t) {
    return kt[15 & t];
  },
      Pt = function Pt(t) {
    return kt[(240 & t) >> 4] + kt[15 & t];
  },
      Dt = function Dt(t) {
    return (240 & t) >> 4 == (15 & t);
  };

  function Ot(t) {
    var e = function (t) {
      return Dt(t.r) && Dt(t.g) && Dt(t.b) && Dt(t.a);
    }(t) ? St : Pt;
    return t ? "#" + e(t.r) + e(t.g) + e(t.b) + function (t, e) {
      return t < 255 ? e(t) : "";
    }(t.a, e) : void 0;
  }

  var Ct = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

  function At(t, e, i) {
    var s = e * Math.min(i, 1 - i),
        n = function n(e) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (e + t / 30) % 12;
      return i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
    };

    return [n(0), n(8), n(4)];
  }

  function Tt(t, e, i) {
    var s = function s(_s5) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (_s5 + t / 60) % 6;
      return i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
    };

    return [s(5), s(3), s(1)];
  }

  function Lt(t, e, i) {
    var s = At(t, 1, .5);
    var n;

    for (e + i > 1 && (n = 1 / (e + i), e *= n, i *= n), n = 0; n < 3; n++) {
      s[n] *= 1 - e - i, s[n] += e;
    }

    return s;
  }

  function Et(t) {
    var e = t.r / 255,
        i = t.g / 255,
        s = t.b / 255,
        n = Math.max(e, i, s),
        o = Math.min(e, i, s),
        a = (n + o) / 2;
    var r, l, h;
    return n !== o && (h = n - o, l = a > .5 ? h / (2 - n - o) : h / (n + o), r = function (t, e, i, s, n) {
      return t === n ? (e - i) / s + (e < i ? 6 : 0) : e === n ? (i - t) / s + 2 : (t - e) / s + 4;
    }(e, i, s, h, n), r = 60 * r + .5), [0 | r, l || 0, a];
  }

  function Rt(t, e, i, s) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(yt);
  }

  function It(t, e, i) {
    return Rt(At, t, e, i);
  }

  function zt(t) {
    return (t % 360 + 360) % 360;
  }

  function Ft(t) {
    var e = Ct.exec(t);
    var i,
        s = 255;
    if (!e) return;
    e[5] !== i && (s = e[6] ? _t(+e[5]) : yt(+e[5]));
    var n = zt(+e[2]),
        o = +e[3] / 100,
        a = +e[4] / 100;
    return i = "hwb" === e[1] ? function (t, e, i) {
      return Rt(Lt, t, e, i);
    }(n, o, a) : "hsv" === e[1] ? function (t, e, i) {
      return Rt(Tt, t, e, i);
    }(n, o, a) : It(n, o, a), {
      r: i[0],
      g: i[1],
      b: i[2],
      a: s
    };
  }

  var Vt = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh"
  },
      Bt = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32"
  };
  var Nt;

  function Wt(t) {
    Nt || (Nt = function () {
      var t = {},
          e = Object.keys(Bt),
          i = Object.keys(Vt);
      var s, n, o, a, r;

      for (s = 0; s < e.length; s++) {
        for (a = r = e[s], n = 0; n < i.length; n++) {
          o = i[n], r = r.replace(o, Vt[o]);
        }

        o = parseInt(Bt[a], 16), t[r] = [o >> 16 & 255, o >> 8 & 255, 255 & o];
      }

      return t;
    }(), Nt.transparent = [0, 0, 0, 0]);
    var e = Nt[t.toLowerCase()];
    return e && {
      r: e[0],
      g: e[1],
      b: e[2],
      a: 4 === e.length ? e[3] : 255
    };
  }

  var jt = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;

  var Ht = function Ht(t) {
    return t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055;
  },
      $t = function $t(t) {
    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  };

  function Yt(t, e, i) {
    if (t) {
      var _s6 = Et(t);

      _s6[e] = Math.max(0, Math.min(_s6[e] + _s6[e] * i, 0 === e ? 360 : 1)), _s6 = It(_s6), t.r = _s6[0], t.g = _s6[1], t.b = _s6[2];
    }
  }

  function Ut(t, e) {
    return t ? Object.assign(e || {}, t) : t;
  }

  function Xt(t) {
    var e = {
      r: 0,
      g: 0,
      b: 0,
      a: 255
    };
    return Array.isArray(t) ? t.length >= 3 && (e = {
      r: t[0],
      g: t[1],
      b: t[2],
      a: 255
    }, t.length > 3 && (e.a = yt(t[3]))) : (e = Ut(t, {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    })).a = yt(e.a), e;
  }

  function qt(t) {
    return "r" === t.charAt(0) ? function (t) {
      var e = jt.exec(t);
      var i,
          s,
          n,
          o = 255;

      if (e) {
        if (e[7] !== i) {
          var _t3 = +e[7];

          o = e[8] ? _t(_t3) : xt(255 * _t3, 0, 255);
        }

        return i = +e[1], s = +e[3], n = +e[5], i = 255 & (e[2] ? _t(i) : xt(i, 0, 255)), s = 255 & (e[4] ? _t(s) : xt(s, 0, 255)), n = 255 & (e[6] ? _t(n) : xt(n, 0, 255)), {
          r: i,
          g: s,
          b: n,
          a: o
        };
      }
    }(t) : Ft(t);
  }

  var Kt = /*#__PURE__*/function () {
    function Kt(t) {
      _classCallCheck(this, Kt);

      if (t instanceof Kt) return t;

      var e = _typeof(t);

      var i;
      var s, n, o;
      "object" === e ? i = Xt(t) : "string" === e && (o = (s = t).length, "#" === s[0] && (4 === o || 5 === o ? n = {
        r: 255 & 17 * Mt[s[1]],
        g: 255 & 17 * Mt[s[2]],
        b: 255 & 17 * Mt[s[3]],
        a: 5 === o ? 17 * Mt[s[4]] : 255
      } : 7 !== o && 9 !== o || (n = {
        r: Mt[s[1]] << 4 | Mt[s[2]],
        g: Mt[s[3]] << 4 | Mt[s[4]],
        b: Mt[s[5]] << 4 | Mt[s[6]],
        a: 9 === o ? Mt[s[7]] << 4 | Mt[s[8]] : 255
      })), i = n || Wt(t) || qt(t)), this._rgb = i, this._valid = !!i;
    }

    _createClass(Kt, [{
      key: "rgbString",
      value: function rgbString() {
        return this._valid ? (t = this._rgb) && (t.a < 255 ? "rgba(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ", ").concat(vt(t.a), ")") : "rgb(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ")")) : void 0;
        var t;
      }
    }, {
      key: "hexString",
      value: function hexString() {
        return this._valid ? Ot(this._rgb) : void 0;
      }
    }, {
      key: "hslString",
      value: function hslString() {
        return this._valid ? function (t) {
          if (!t) return;
          var e = Et(t),
              i = e[0],
              s = wt(e[1]),
              n = wt(e[2]);
          return t.a < 255 ? "hsla(".concat(i, ", ").concat(s, "%, ").concat(n, "%, ").concat(vt(t.a), ")") : "hsl(".concat(i, ", ").concat(s, "%, ").concat(n, "%)");
        }(this._rgb) : void 0;
      }
    }, {
      key: "mix",
      value: function mix(t, e) {
        if (t) {
          var _i5 = this.rgb,
              _s7 = t.rgb;

          var _n4;

          var _o2 = e === _n4 ? .5 : e,
              _a4 = 2 * _o2 - 1,
              _r2 = _i5.a - _s7.a,
              _l2 = ((_a4 * _r2 == -1 ? _a4 : (_a4 + _r2) / (1 + _a4 * _r2)) + 1) / 2;

          _n4 = 1 - _l2, _i5.r = 255 & _l2 * _i5.r + _n4 * _s7.r + .5, _i5.g = 255 & _l2 * _i5.g + _n4 * _s7.g + .5, _i5.b = 255 & _l2 * _i5.b + _n4 * _s7.b + .5, _i5.a = _o2 * _i5.a + (1 - _o2) * _s7.a, this.rgb = _i5;
        }

        return this;
      }
    }, {
      key: "interpolate",
      value: function interpolate(t, e) {
        return t && (this._rgb = function (t, e, i) {
          var s = $t(vt(t.r)),
              n = $t(vt(t.g)),
              o = $t(vt(t.b));
          return {
            r: yt(Ht(s + i * ($t(vt(e.r)) - s))),
            g: yt(Ht(n + i * ($t(vt(e.g)) - n))),
            b: yt(Ht(o + i * ($t(vt(e.b)) - o))),
            a: t.a + i * (e.a - t.a)
          };
        }(this._rgb, t._rgb, e)), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Kt(this.rgb);
      }
    }, {
      key: "alpha",
      value: function alpha(t) {
        return this._rgb.a = yt(t), this;
      }
    }, {
      key: "clearer",
      value: function clearer(t) {
        return this._rgb.a *= 1 - t, this;
      }
    }, {
      key: "greyscale",
      value: function greyscale() {
        var t = this._rgb,
            e = bt(.3 * t.r + .59 * t.g + .11 * t.b);
        return t.r = t.g = t.b = e, this;
      }
    }, {
      key: "opaquer",
      value: function opaquer(t) {
        return this._rgb.a *= 1 + t, this;
      }
    }, {
      key: "negate",
      value: function negate() {
        var t = this._rgb;
        return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
      }
    }, {
      key: "lighten",
      value: function lighten(t) {
        return Yt(this._rgb, 2, t), this;
      }
    }, {
      key: "darken",
      value: function darken(t) {
        return Yt(this._rgb, 2, -t), this;
      }
    }, {
      key: "saturate",
      value: function saturate(t) {
        return Yt(this._rgb, 1, t), this;
      }
    }, {
      key: "desaturate",
      value: function desaturate(t) {
        return Yt(this._rgb, 1, -t), this;
      }
    }, {
      key: "rotate",
      value: function rotate(t) {
        return function (t, e) {
          var i = Et(t);
          i[0] = zt(i[0] + e), i = It(i), t.r = i[0], t.g = i[1], t.b = i[2];
        }(this._rgb, t), this;
      }
    }, {
      key: "valid",
      get: function get() {
        return this._valid;
      }
    }, {
      key: "rgb",
      get: function get() {
        var t = Ut(this._rgb);
        return t && (t.a = vt(t.a)), t;
      },
      set: function set(t) {
        this._rgb = Xt(t);
      }
    }]);

    return Kt;
  }();

  function Gt(t) {
    return new Kt(t);
  }

  function Zt(t) {
    if (t && "object" == _typeof(t)) {
      var _e3 = t.toString();

      return "[object CanvasPattern]" === _e3 || "[object CanvasGradient]" === _e3;
    }

    return !1;
  }

  function Jt(t) {
    return Zt(t) ? t : Gt(t);
  }

  function Qt(t) {
    return Zt(t) ? t : Gt(t).saturate(.5).darken(.1).hexString();
  }

  var te = Object.create(null),
      ee = Object.create(null);

  function ie(t, e) {
    if (!e) return t;
    var i = e.split(".");

    for (var _e4 = 0, _s8 = i.length; _e4 < _s8; ++_e4) {
      var _s9 = i[_e4];
      t = t[_s9] || (t[_s9] = Object.create(null));
    }

    return t;
  }

  function se(t, e, i) {
    return "string" == typeof e ? m(ie(t, e), i) : m(ie(t, ""), e);
  }

  var ne = new ( /*#__PURE__*/function () {
    function _class2(t) {
      _classCallCheck(this, _class2);

      this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = function (t) {
        return t.chart.platform.getDevicePixelRatio();
      }, this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null
      }, this.hover = {}, this.hoverBackgroundColor = function (t, e) {
        return Qt(e.backgroundColor);
      }, this.hoverBorderColor = function (t, e) {
        return Qt(e.borderColor);
      }, this.hoverColor = function (t, e) {
        return Qt(e.color);
      }, this.indexAxis = "x", this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1
      }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t);
    }

    _createClass(_class2, [{
      key: "set",
      value: function set(t, e) {
        return se(this, t, e);
      }
    }, {
      key: "get",
      value: function get(t) {
        return ie(this, t);
      }
    }, {
      key: "describe",
      value: function describe(t, e) {
        return se(ee, t, e);
      }
    }, {
      key: "override",
      value: function override(t, e) {
        return se(te, t, e);
      }
    }, {
      key: "route",
      value: function route(t, e, i, s) {
        var _Object$definePropert;

        var o = ie(this, t),
            a = ie(this, i),
            l = "_" + e;
        Object.defineProperties(o, (_Object$definePropert = {}, _defineProperty(_Object$definePropert, l, {
          value: o[e],
          writable: !0
        }), _defineProperty(_Object$definePropert, e, {
          enumerable: !0,
          get: function get() {
            var t = this[l],
                e = a[s];
            return n(t) ? Object.assign({}, e, t) : r(t, e);
          },
          set: function set(t) {
            this[l] = t;
          }
        }), _Object$definePropert));
      }
    }]);

    return _class2;
  }())({
    _scriptable: function _scriptable(t) {
      return !t.startsWith("on");
    },
    _indexable: function _indexable(t) {
      return "events" !== t;
    },
    hover: {
      _fallback: "interaction"
    },
    interaction: {
      _scriptable: !1,
      _indexable: !1
    }
  });

  function oe() {
    return "undefined" != typeof window && "undefined" != typeof document;
  }

  function ae(t) {
    var e = t.parentNode;
    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
  }

  function re(t, e, i) {
    var s;
    return "string" == typeof t ? (s = parseInt(t, 10), -1 !== t.indexOf("%") && (s = s / 100 * e.parentNode[i])) : s = t, s;
  }

  var le = function le(t) {
    return window.getComputedStyle(t, null);
  };

  function he(t, e) {
    return le(t).getPropertyValue(e);
  }

  var ce = ["top", "right", "bottom", "left"];

  function de(t, e, i) {
    var s = {};
    i = i ? "-" + i : "";

    for (var _n5 = 0; _n5 < 4; _n5++) {
      var _o3 = ce[_n5];
      s[_o3] = parseFloat(t[e + "-" + _o3 + i]) || 0;
    }

    return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
  }

  function ue(t, e) {
    if ("native" in t) return t;

    var i = e.canvas,
        s = e.currentDevicePixelRatio,
        n = le(i),
        o = "border-box" === n.boxSizing,
        a = de(n, "padding"),
        r = de(n, "border", "width"),
        _ref = function (t, e) {
      var i = t.touches,
          s = i && i.length ? i[0] : t,
          n = s.offsetX,
          o = s.offsetY;
      var a,
          r,
          l = !1;
      if (function (t, e, i) {
        return (t > 0 || e > 0) && (!i || !i.shadowRoot);
      }(n, o, t.target)) a = n, r = o;else {
        var _t4 = e.getBoundingClientRect();

        a = s.clientX - _t4.left, r = s.clientY - _t4.top, l = !0;
      }
      return {
        x: a,
        y: r,
        box: l
      };
    }(t, i),
        l = _ref.x,
        h = _ref.y,
        c = _ref.box,
        d = a.left + (c && r.left),
        u = a.top + (c && r.top);

    var f = e.width,
        g = e.height;
    return o && (f -= a.width + r.width, g -= a.height + r.height), {
      x: Math.round((l - d) / f * i.width / s),
      y: Math.round((h - u) / g * i.height / s)
    };
  }

  var fe = function fe(t) {
    return Math.round(10 * t) / 10;
  };

  function ge(t, e, i, s) {
    var n = le(t),
        o = de(n, "margin"),
        a = re(n.maxWidth, t, "clientWidth") || A,
        r = re(n.maxHeight, t, "clientHeight") || A,
        l = function (t, e, i) {
      var s, n;

      if (void 0 === e || void 0 === i) {
        var _o4 = ae(t);

        if (_o4) {
          var _t5 = _o4.getBoundingClientRect(),
              _a5 = le(_o4),
              _r3 = de(_a5, "border", "width"),
              _l3 = de(_a5, "padding");

          e = _t5.width - _l3.width - _r3.width, i = _t5.height - _l3.height - _r3.height, s = re(_a5.maxWidth, _o4, "clientWidth"), n = re(_a5.maxHeight, _o4, "clientHeight");
        } else e = t.clientWidth, i = t.clientHeight;
      }

      return {
        width: e,
        height: i,
        maxWidth: s || A,
        maxHeight: n || A
      };
    }(t, e, i);

    var h = l.width,
        c = l.height;

    if ("content-box" === n.boxSizing) {
      var _t6 = de(n, "border", "width"),
          _e5 = de(n, "padding");

      h -= _e5.width + _t6.width, c -= _e5.height + _t6.height;
    }

    return h = Math.max(0, h - o.width), c = Math.max(0, s ? Math.floor(h / s) : c - o.height), h = fe(Math.min(h, a, l.maxWidth)), c = fe(Math.min(c, r, l.maxHeight)), h && !c && (c = fe(h / 2)), {
      width: h,
      height: c
    };
  }

  function pe(t, e, i) {
    var s = e || 1,
        n = Math.floor(t.height * s),
        o = Math.floor(t.width * s);
    t.height = n / s, t.width = o / s;
    var a = t.canvas;
    return a.style && (i || !a.style.height && !a.style.width) && (a.style.height = "".concat(t.height, "px"), a.style.width = "".concat(t.width, "px")), (t.currentDevicePixelRatio !== s || a.height !== n || a.width !== o) && (t.currentDevicePixelRatio = s, a.height = n, a.width = o, t.ctx.setTransform(s, 0, 0, s, 0, 0), !0);
  }

  var me = function () {
    var t = !1;

    try {
      var _e6 = {
        get passive() {
          return t = !0, !1;
        }

      };
      window.addEventListener("test", null, _e6), window.removeEventListener("test", null, _e6);
    } catch (t) {}

    return t;
  }();

  function be(t, e) {
    var i = he(t, e),
        s = i && i.match(/^(\d+)(\.\d+)?px$/);
    return s ? +s[1] : void 0;
  }

  function xe(t) {
    return !t || i(t.size) || i(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
  }

  function _e(t, e, i, s, n) {
    var o = e[n];
    return o || (o = e[n] = t.measureText(n).width, i.push(n)), o > s && (s = o), s;
  }

  function ye(t, e, i, n) {
    var o = (n = n || {}).data = n.data || {},
        a = n.garbageCollect = n.garbageCollect || [];
    n.font !== e && (o = n.data = {}, a = n.garbageCollect = [], n.font = e), t.save(), t.font = e;
    var r = 0;
    var l = i.length;
    var h, c, d, u, f;

    for (h = 0; h < l; h++) {
      if (u = i[h], null != u && !0 !== s(u)) r = _e(t, o, a, r, u);else if (s(u)) for (c = 0, d = u.length; c < d; c++) {
        f = u[c], null == f || s(f) || (r = _e(t, o, a, r, f));
      }
    }

    t.restore();
    var g = a.length / 2;

    if (g > i.length) {
      for (h = 0; h < g; h++) {
        delete o[a[h]];
      }

      a.splice(0, g);
    }

    return r;
  }

  function ve(t, e, i) {
    var s = t.currentDevicePixelRatio,
        n = 0 !== i ? Math.max(i / 2, .5) : 0;
    return Math.round((e - n) * s) / s + n;
  }

  function we(t, e) {
    (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore();
  }

  function Me(t, e, i, s) {
    ke(t, e, i, s, null);
  }

  function ke(t, e, i, s, n) {
    var o, a, r, l, h, c;
    var d = e.pointStyle,
        u = e.rotation,
        f = e.radius;
    var g = (u || 0) * T;
    if (d && "object" == _typeof(d) && (o = d.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, s), t.rotate(g), t.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height), void t.restore();

    if (!(isNaN(f) || f <= 0)) {
      switch (t.beginPath(), d) {
        default:
          n ? t.ellipse(i, s, n / 2, f, 0, 0, O) : t.arc(i, s, f, 0, O), t.closePath();
          break;

        case "triangle":
          t.moveTo(i + Math.sin(g) * f, s - Math.cos(g) * f), g += R, t.lineTo(i + Math.sin(g) * f, s - Math.cos(g) * f), g += R, t.lineTo(i + Math.sin(g) * f, s - Math.cos(g) * f), t.closePath();
          break;

        case "rectRounded":
          h = .516 * f, l = f - h, a = Math.cos(g + E) * l, r = Math.sin(g + E) * l, t.arc(i - a, s - r, h, g - D, g - L), t.arc(i + r, s - a, h, g - L, g), t.arc(i + a, s + r, h, g, g + L), t.arc(i - r, s + a, h, g + L, g + D), t.closePath();
          break;

        case "rect":
          if (!u) {
            l = Math.SQRT1_2 * f, c = n ? n / 2 : l, t.rect(i - c, s - l, 2 * c, 2 * l);
            break;
          }

          g += E;

        case "rectRot":
          a = Math.cos(g) * f, r = Math.sin(g) * f, t.moveTo(i - a, s - r), t.lineTo(i + r, s - a), t.lineTo(i + a, s + r), t.lineTo(i - r, s + a), t.closePath();
          break;

        case "crossRot":
          g += E;

        case "cross":
          a = Math.cos(g) * f, r = Math.sin(g) * f, t.moveTo(i - a, s - r), t.lineTo(i + a, s + r), t.moveTo(i + r, s - a), t.lineTo(i - r, s + a);
          break;

        case "star":
          a = Math.cos(g) * f, r = Math.sin(g) * f, t.moveTo(i - a, s - r), t.lineTo(i + a, s + r), t.moveTo(i + r, s - a), t.lineTo(i - r, s + a), g += E, a = Math.cos(g) * f, r = Math.sin(g) * f, t.moveTo(i - a, s - r), t.lineTo(i + a, s + r), t.moveTo(i + r, s - a), t.lineTo(i - r, s + a);
          break;

        case "line":
          a = n ? n / 2 : Math.cos(g) * f, r = Math.sin(g) * f, t.moveTo(i - a, s - r), t.lineTo(i + a, s + r);
          break;

        case "dash":
          t.moveTo(i, s), t.lineTo(i + Math.cos(g) * f, s + Math.sin(g) * f);
      }

      t.fill(), e.borderWidth > 0 && t.stroke();
    }
  }

  function Se(t, e, i) {
    return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i;
  }

  function Pe(t, e) {
    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
  }

  function De(t) {
    t.restore();
  }

  function Oe(t, e, i, s, n) {
    if (!e) return t.lineTo(i.x, i.y);

    if ("middle" === n) {
      var _s10 = (e.x + i.x) / 2;

      t.lineTo(_s10, e.y), t.lineTo(_s10, i.y);
    } else "after" === n != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);

    t.lineTo(i.x, i.y);
  }

  function Ce(t, e, i, s) {
    if (!e) return t.lineTo(i.x, i.y);
    t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y);
  }

  function Ae(t, e, n, o, a) {
    var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    var l = s(e) ? e : [e],
        h = r.strokeWidth > 0 && "" !== r.strokeColor;
    var c, d;

    for (t.save(), t.font = a.string, function (t, e) {
      e.translation && t.translate(e.translation[0], e.translation[1]);
      i(e.rotation) || t.rotate(e.rotation);
      e.color && (t.fillStyle = e.color);
      e.textAlign && (t.textAlign = e.textAlign);
      e.textBaseline && (t.textBaseline = e.textBaseline);
    }(t, r), c = 0; c < l.length; ++c) {
      d = l[c], h && (r.strokeColor && (t.strokeStyle = r.strokeColor), i(r.strokeWidth) || (t.lineWidth = r.strokeWidth), t.strokeText(d, n, o, r.maxWidth)), t.fillText(d, n, o, r.maxWidth), Te(t, n, o, d, r), o += a.lineHeight;
    }

    t.restore();
  }

  function Te(t, e, i, s, n) {
    if (n.strikethrough || n.underline) {
      var _o5 = t.measureText(s),
          _a6 = e - _o5.actualBoundingBoxLeft,
          _r4 = e + _o5.actualBoundingBoxRight,
          _l4 = i - _o5.actualBoundingBoxAscent,
          _h2 = i + _o5.actualBoundingBoxDescent,
          _c2 = n.strikethrough ? (_l4 + _h2) / 2 : _h2;

      t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(_a6, _c2), t.lineTo(_r4, _c2), t.stroke();
    }
  }

  function Le(t, e) {
    var i = e.x,
        s = e.y,
        n = e.w,
        o = e.h,
        a = e.radius;
    t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, -L, D, !0), t.lineTo(i, s + o - a.bottomLeft), t.arc(i + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, D, L, !0), t.lineTo(i + n - a.bottomRight, s + o), t.arc(i + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, L, 0, !0), t.lineTo(i + n, s + a.topRight), t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -L, !0), t.lineTo(i + a.topLeft, s);
  }

  function Ee(t) {
    var _o6;

    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [""];
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
    var s = arguments.length > 3 ? arguments[3] : undefined;
    var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {
      return t[0];
    };
    M(s) || (s = $e("_fallback", t));
    var o = (_o6 = {}, _defineProperty(_o6, Symbol.toStringTag, "Object"), _defineProperty(_o6, "_cacheable", !0), _defineProperty(_o6, "_scopes", t), _defineProperty(_o6, "_rootScopes", i), _defineProperty(_o6, "_fallback", s), _defineProperty(_o6, "_getTarget", n), _defineProperty(_o6, "override", function override(n) {
      return Ee([n].concat(_toConsumableArray(t)), e, i, s);
    }), _o6);
    return new Proxy(o, {
      deleteProperty: function deleteProperty(e, i) {
        return delete e[i], delete e._keys, delete t[0][i], !0;
      },
      get: function get(i, s) {
        return Ve(i, s, function () {
          return function (t, e, i, s) {
            var n;

            var _iterator4 = _createForOfIteratorHelper(e),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _o7 = _step4.value;
                if (n = $e(ze(_o7, t), i), M(n)) return Fe(t, n) ? je(i, s, t, n) : n;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }(s, e, t, i);
        });
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
        return Reflect.getOwnPropertyDescriptor(t._scopes[0], e);
      },
      getPrototypeOf: function getPrototypeOf() {
        return Reflect.getPrototypeOf(t[0]);
      },
      has: function has(t, e) {
        return Ye(t).includes(e);
      },
      ownKeys: function ownKeys(t) {
        return Ye(t);
      },
      set: function set(t, e, i) {
        var s = t._storage || (t._storage = n());
        return t[e] = s[e] = i, delete t._keys, !0;
      }
    });
  }

  function Re(t, e, i, o) {
    var a = {
      _cacheable: !1,
      _proxy: t,
      _context: e,
      _subProxy: i,
      _stack: new Set(),
      _descriptors: Ie(t, o),
      setContext: function setContext(e) {
        return Re(t, e, i, o);
      },
      override: function override(s) {
        return Re(t.override(s), e, i, o);
      }
    };
    return new Proxy(a, {
      deleteProperty: function deleteProperty(e, i) {
        return delete e[i], delete t[i], !0;
      },
      get: function get(t, e, i) {
        return Ve(t, e, function () {
          return function (t, e, i) {
            var o = t._proxy,
                a = t._context,
                r = t._subProxy,
                l = t._descriptors;
            var h = o[e];
            k(h) && l.isScriptable(e) && (h = function (t, e, i, s) {
              var n = i._proxy,
                  o = i._context,
                  a = i._subProxy,
                  r = i._stack;
              if (r.has(t)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t);
              r.add(t), e = e(o, a || s), r.delete(t), Fe(t, e) && (e = je(n._scopes, n, t, e));
              return e;
            }(e, h, t, i));
            s(h) && h.length && (h = function (t, e, i, s) {
              var o = i._proxy,
                  a = i._context,
                  r = i._subProxy,
                  l = i._descriptors;
              if (M(a.index) && s(t)) e = e[a.index % e.length];else if (n(e[0])) {
                var _i6 = e,
                    _s11 = o._scopes.filter(function (t) {
                  return t !== _i6;
                });

                e = [];

                var _iterator5 = _createForOfIteratorHelper(_i6),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var _n6 = _step5.value;

                    var _i7 = je(_s11, o, t, _n6);

                    e.push(Re(_i7, a, r && r[t], l));
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
              return e;
            }(e, h, t, l.isIndexable));
            Fe(e, h) && (h = Re(h, a, r && r[e], l));
            return h;
          }(t, e, i);
        });
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, i) {
        return e._descriptors.allKeys ? Reflect.has(t, i) ? {
          enumerable: !0,
          configurable: !0
        } : void 0 : Reflect.getOwnPropertyDescriptor(t, i);
      },
      getPrototypeOf: function getPrototypeOf() {
        return Reflect.getPrototypeOf(t);
      },
      has: function has(e, i) {
        return Reflect.has(t, i);
      },
      ownKeys: function ownKeys() {
        return Reflect.ownKeys(t);
      },
      set: function set(e, i, s) {
        return t[i] = s, delete e[i], !0;
      }
    });
  }

  function Ie(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      scriptable: !0,
      indexable: !0
    };
    var _t$_scriptable = t._scriptable,
        i = _t$_scriptable === void 0 ? e.scriptable : _t$_scriptable,
        _t$_indexable = t._indexable,
        s = _t$_indexable === void 0 ? e.indexable : _t$_indexable,
        _t$_allKeys = t._allKeys,
        n = _t$_allKeys === void 0 ? e.allKeys : _t$_allKeys;
    return {
      allKeys: n,
      scriptable: i,
      indexable: s,
      isScriptable: k(i) ? i : function () {
        return i;
      },
      isIndexable: k(s) ? s : function () {
        return s;
      }
    };
  }

  var ze = function ze(t, e) {
    return t ? t + w(e) : e;
  },
      Fe = function Fe(t, e) {
    return n(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);
  };

  function Ve(t, e, i) {
    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
    var s = i();
    return t[e] = s, s;
  }

  function Be(t, e, i) {
    return k(t) ? t(e, i) : t;
  }

  var Ne = function Ne(t, e) {
    return !0 === t ? e : "string" == typeof t ? y(e, t) : void 0;
  };

  function We(t, e, i, s, n) {
    var _iterator6 = _createForOfIteratorHelper(e),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _o8 = _step6.value;

        var _e7 = Ne(i, _o8);

        if (_e7) {
          t.add(_e7);

          var _o9 = Be(_e7._fallback, i, n);

          if (M(_o9) && _o9 !== i && _o9 !== s) return _o9;
        } else if (!1 === _e7 && M(s) && i !== s) return null;
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    return !1;
  }

  function je(t, e, i, o) {
    var a = e._rootScopes,
        r = Be(e._fallback, i, o),
        l = [].concat(_toConsumableArray(t), _toConsumableArray(a)),
        h = new Set();
    h.add(o);
    var c = He(h, l, i, r || i, o);
    return null !== c && (!M(r) || r === i || (c = He(h, l, r, c, o), null !== c)) && Ee(Array.from(h), [""], a, r, function () {
      return function (t, e, i) {
        var o = t._getTarget();

        e in o || (o[e] = {});
        var a = o[e];
        if (s(a) && n(i)) return i;
        return a;
      }(e, i, o);
    });
  }

  function He(t, e, i, s, n) {
    for (; i;) {
      i = We(t, e, i, s, n);
    }

    return i;
  }

  function $e(t, e) {
    var _iterator7 = _createForOfIteratorHelper(e),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _i8 = _step7.value;
        if (!_i8) continue;
        var _e8 = _i8[t];
        if (M(_e8)) return _e8;
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }

  function Ye(t) {
    var e = t._keys;
    return e || (e = t._keys = function (t) {
      var e = new Set();

      var _iterator8 = _createForOfIteratorHelper(t),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _i9 = _step8.value;

          var _iterator9 = _createForOfIteratorHelper(Object.keys(_i9).filter(function (t) {
            return !t.startsWith("_");
          })),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _t7 = _step9.value;
              e.add(_t7);
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      return Array.from(e);
    }(t._scopes)), e;
  }

  function Ue(t, e, i, s) {
    var n = t.iScale,
        _this$_parsing$key = this._parsing.key,
        o = _this$_parsing$key === void 0 ? "r" : _this$_parsing$key,
        a = new Array(s);
    var r, l, h, c;

    for (r = 0, l = s; r < l; ++r) {
      h = r + i, c = e[h], a[r] = {
        r: n.parse(y(c, o), h)
      };
    }

    return a;
  }

  var Xe = Number.EPSILON || 1e-14,
      qe = function qe(t, e) {
    return e < t.length && !t[e].skip && t[e];
  },
      Ke = function Ke(t) {
    return "x" === t ? "y" : "x";
  };

  function Ge(t, e, i, s) {
    var n = t.skip ? e : t,
        o = e,
        a = i.skip ? e : i,
        r = X(o, n),
        l = X(a, o);
    var h = r / (r + l),
        c = l / (r + l);
    h = isNaN(h) ? 0 : h, c = isNaN(c) ? 0 : c;
    var d = s * h,
        u = s * c;
    return {
      previous: {
        x: o.x - d * (a.x - n.x),
        y: o.y - d * (a.y - n.y)
      },
      next: {
        x: o.x + u * (a.x - n.x),
        y: o.y + u * (a.y - n.y)
      }
    };
  }

  function Ze(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "x";
    var i = Ke(e),
        s = t.length,
        n = Array(s).fill(0),
        o = Array(s);
    var a,
        r,
        l,
        h = qe(t, 0);

    for (a = 0; a < s; ++a) {
      if (r = l, l = h, h = qe(t, a + 1), l) {
        if (h) {
          var _t8 = h[e] - l[e];

          n[a] = 0 !== _t8 ? (h[i] - l[i]) / _t8 : 0;
        }

        o[a] = r ? h ? z(n[a - 1]) !== z(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a];
      }
    }

    !function (t, e, i) {
      var s = t.length;
      var n,
          o,
          a,
          r,
          l,
          h = qe(t, 0);

      for (var _c3 = 0; _c3 < s - 1; ++_c3) {
        l = h, h = qe(t, _c3 + 1), l && h && (N(e[_c3], 0, Xe) ? i[_c3] = i[_c3 + 1] = 0 : (n = i[_c3] / e[_c3], o = i[_c3 + 1] / e[_c3], r = Math.pow(n, 2) + Math.pow(o, 2), r <= 9 || (a = 3 / Math.sqrt(r), i[_c3] = n * a * e[_c3], i[_c3 + 1] = o * a * e[_c3])));
      }
    }(t, n, o), function (t, e) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "x";
      var s = Ke(i),
          n = t.length;
      var o,
          a,
          r,
          l = qe(t, 0);

      for (var _h3 = 0; _h3 < n; ++_h3) {
        if (a = r, r = l, l = qe(t, _h3 + 1), !r) continue;
        var _n7 = r[i],
            _c4 = r[s];
        a && (o = (_n7 - a[i]) / 3, r["cp1".concat(i)] = _n7 - o, r["cp1".concat(s)] = _c4 - o * e[_h3]), l && (o = (l[i] - _n7) / 3, r["cp2".concat(i)] = _n7 + o, r["cp2".concat(s)] = _c4 + o * e[_h3]);
      }
    }(t, o, e);
  }

  function Je(t, e, i) {
    return Math.max(Math.min(t, i), e);
  }

  function Qe(t, e, i, s, n) {
    var o, a, r, l;
    if (e.spanGaps && (t = t.filter(function (t) {
      return !t.skip;
    })), "monotone" === e.cubicInterpolationMode) Ze(t, n);else {
      var _i10 = s ? t[t.length - 1] : t[0];

      for (o = 0, a = t.length; o < a; ++o) {
        r = t[o], l = Ge(_i10, r, t[Math.min(o + 1, a - (s ? 0 : 1)) % a], e.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, _i10 = r;
      }
    }
    e.capBezierPoints && function (t, e) {
      var i,
          s,
          n,
          o,
          a,
          r = Se(t[0], e);

      for (i = 0, s = t.length; i < s; ++i) {
        a = o, o = r, r = i < s - 1 && Se(t[i + 1], e), o && (n = t[i], a && (n.cp1x = Je(n.cp1x, e.left, e.right), n.cp1y = Je(n.cp1y, e.top, e.bottom)), r && (n.cp2x = Je(n.cp2x, e.left, e.right), n.cp2y = Je(n.cp2y, e.top, e.bottom)));
      }
    }(t, i);
  }

  var ti = function ti(t) {
    return 0 === t || 1 === t;
  },
      ei = function ei(t, e, i) {
    return -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * O / i);
  },
      ii = function ii(t, e, i) {
    return Math.pow(2, -10 * t) * Math.sin((t - e) * O / i) + 1;
  },
      si = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return -t * (t - 2);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return (t -= 1) * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return -((t -= 1) * t * t * t - 1);
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return (t -= 1) * t * t * t * t + 1;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    },
    easeInSine: function easeInSine(t) {
      return 1 - Math.cos(t * L);
    },
    easeOutSine: function easeOutSine(t) {
      return Math.sin(t * L);
    },
    easeInOutSine: function easeInOutSine(t) {
      return -.5 * (Math.cos(D * t) - 1);
    },
    easeInExpo: function easeInExpo(t) {
      return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
    },
    easeOutExpo: function easeOutExpo(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    },
    easeInOutExpo: function easeInOutExpo(t) {
      return ti(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1)));
    },
    easeInCirc: function easeInCirc(t) {
      return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
    },
    easeOutCirc: function easeOutCirc(t) {
      return Math.sqrt(1 - (t -= 1) * t);
    },
    easeInOutCirc: function easeInOutCirc(t) {
      return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    easeInElastic: function easeInElastic(t) {
      return ti(t) ? t : ei(t, .075, .3);
    },
    easeOutElastic: function easeOutElastic(t) {
      return ti(t) ? t : ii(t, .075, .3);
    },
    easeInOutElastic: function easeInOutElastic(t) {
      var e = .1125;
      return ti(t) ? t : t < .5 ? .5 * ei(2 * t, e, .45) : .5 + .5 * ii(2 * t - 1, e, .45);
    },
    easeInBack: function easeInBack(t) {
      var e = 1.70158;
      return t * t * ((e + 1) * t - e);
    },
    easeOutBack: function easeOutBack(t) {
      var e = 1.70158;
      return (t -= 1) * t * ((e + 1) * t + e) + 1;
    },
    easeInOutBack: function easeInOutBack(t) {
      var e = 1.70158;
      return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
    },
    easeInBounce: function easeInBounce(t) {
      return 1 - si.easeOutBounce(1 - t);
    },
    easeOutBounce: function easeOutBounce(t) {
      var e = 7.5625,
          i = 2.75;
      return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375;
    },
    easeInOutBounce: function easeInOutBounce(t) {
      return t < .5 ? .5 * si.easeInBounce(2 * t) : .5 * si.easeOutBounce(2 * t - 1) + .5;
    }
  };

  function ni(t, e, i, s) {
    return {
      x: t.x + i * (e.x - t.x),
      y: t.y + i * (e.y - t.y)
    };
  }

  function oi(t, e, i, s) {
    return {
      x: t.x + i * (e.x - t.x),
      y: "middle" === s ? i < .5 ? t.y : e.y : "after" === s ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y
    };
  }

  function ai(t, e, i, s) {
    var n = {
      x: t.cp2x,
      y: t.cp2y
    },
        o = {
      x: e.cp1x,
      y: e.cp1y
    },
        a = ni(t, n, i),
        r = ni(n, o, i),
        l = ni(o, e, i),
        h = ni(a, r, i),
        c = ni(r, l, i);
    return ni(h, c, i);
  }

  var ri = new Map();

  function li(t, e, i) {
    return function (t, e) {
      e = e || {};
      var i = t + JSON.stringify(e);
      var s = ri.get(i);
      return s || (s = new Intl.NumberFormat(t, e), ri.set(i, s)), s;
    }(e, i).format(t);
  }

  var hi = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
      ci = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);

  function di(t, e) {
    var i = ("" + t).match(hi);
    if (!i || "normal" === i[1]) return 1.2 * e;

    switch (t = +i[2], i[3]) {
      case "px":
        return t;

      case "%":
        t /= 100;
    }

    return e * t;
  }

  function ui(t, e) {
    var i = {},
        s = n(e),
        o = s ? Object.keys(e) : e,
        a = n(t) ? s ? function (i) {
      return r(t[i], t[e[i]]);
    } : function (e) {
      return t[e];
    } : function () {
      return t;
    };

    var _iterator10 = _createForOfIteratorHelper(o),
        _step10;

    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var _t9 = _step10.value;
        i[_t9] = +a(_t9) || 0;
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }

    return i;
  }

  function fi(t) {
    return ui(t, {
      top: "y",
      right: "x",
      bottom: "y",
      left: "x"
    });
  }

  function gi(t) {
    return ui(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
  }

  function pi(t) {
    var e = fi(t);
    return e.width = e.left + e.right, e.height = e.top + e.bottom, e;
  }

  function mi(t, e) {
    t = t || {}, e = e || ne.font;
    var i = r(t.size, e.size);
    "string" == typeof i && (i = parseInt(i, 10));
    var s = r(t.style, e.style);
    s && !("" + s).match(ci) && (console.warn('Invalid font style specified: "' + s + '"'), s = "");
    var n = {
      family: r(t.family, e.family),
      lineHeight: di(r(t.lineHeight, e.lineHeight), i),
      size: i,
      style: s,
      weight: r(t.weight, e.weight),
      string: ""
    };
    return n.string = xe(n), n;
  }

  function bi(t, e, i, n) {
    var o,
        a,
        r,
        l = !0;

    for (o = 0, a = t.length; o < a; ++o) {
      if (r = t[o], void 0 !== r && (void 0 !== e && "function" == typeof r && (r = r(e), l = !1), void 0 !== i && s(r) && (r = r[i % r.length], l = !1), void 0 !== r)) return n && !l && (n.cacheable = !1), r;
    }
  }

  function xi(t, e, i) {
    var s = t.min,
        n = t.max,
        o = h(e, (n - s) / 2),
        a = function a(t, e) {
      return i && 0 === t ? 0 : t + e;
    };

    return {
      min: a(s, -Math.abs(o)),
      max: a(n, o)
    };
  }

  function _i(t, e) {
    return Object.assign(Object.create(t), e);
  }

  function yi(t, e, i) {
    return t ? function (t, e) {
      return {
        x: function x(i) {
          return t + t + e - i;
        },
        setWidth: function setWidth(t) {
          e = t;
        },
        textAlign: function textAlign(t) {
          return "center" === t ? t : "right" === t ? "left" : "right";
        },
        xPlus: function xPlus(t, e) {
          return t - e;
        },
        leftForLtr: function leftForLtr(t, e) {
          return t - e;
        }
      };
    }(e, i) : {
      x: function x(t) {
        return t;
      },
      setWidth: function setWidth(t) {},
      textAlign: function textAlign(t) {
        return t;
      },
      xPlus: function xPlus(t, e) {
        return t + e;
      },
      leftForLtr: function leftForLtr(t, e) {
        return t;
      }
    };
  }

  function vi(t, e) {
    var i, s;
    "ltr" !== e && "rtl" !== e || (i = t.canvas.style, s = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = s);
  }

  function wi(t, e) {
    void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]));
  }

  function Mi(t) {
    return "angle" === t ? {
      between: G,
      compare: q,
      normalize: K
    } : {
      between: Q,
      compare: function compare(t, e) {
        return t - e;
      },
      normalize: function normalize(t) {
        return t;
      }
    };
  }

  function ki(_ref2) {
    var t = _ref2.start,
        e = _ref2.end,
        i = _ref2.count,
        s = _ref2.loop,
        n = _ref2.style;
    return {
      start: t % i,
      end: e % i,
      loop: s && (e - t + 1) % i == 0,
      style: n
    };
  }

  function Si(t, e, i) {
    if (!i) return [t];

    var s = i.property,
        n = i.start,
        o = i.end,
        a = e.length,
        _Mi = Mi(s),
        r = _Mi.compare,
        l = _Mi.between,
        h = _Mi.normalize,
        _ref3 = function (t, e, i) {
      var s = i.property,
          n = i.start,
          o = i.end,
          _Mi2 = Mi(s),
          a = _Mi2.between,
          r = _Mi2.normalize,
          l = e.length;

      var h,
          c,
          d = t.start,
          u = t.end,
          f = t.loop;

      if (f) {
        for (d += l, u += l, h = 0, c = l; h < c && a(r(e[d % l][s]), n, o); ++h) {
          d--, u--;
        }

        d %= l, u %= l;
      }

      return u < d && (u += l), {
        start: d,
        end: u,
        loop: f,
        style: t.style
      };
    }(t, e, i),
        c = _ref3.start,
        d = _ref3.end,
        u = _ref3.loop,
        f = _ref3.style,
        g = [];

    var p,
        m,
        b,
        x = !1,
        _ = null;

    var y = function y() {
      return x || l(n, b, p) && 0 !== r(n, b);
    },
        v = function v() {
      return !x || 0 === r(o, p) || l(o, b, p);
    };

    for (var _t10 = c, _i11 = c; _t10 <= d; ++_t10) {
      m = e[_t10 % a], m.skip || (p = h(m[s]), p !== b && (x = l(p, n, o), null === _ && y() && (_ = 0 === r(p, n) ? _t10 : _i11), null !== _ && v() && (g.push(ki({
        start: _,
        end: _t10,
        loop: u,
        count: a,
        style: f
      })), _ = null), _i11 = _t10, b = p));
    }

    return null !== _ && g.push(ki({
      start: _,
      end: d,
      loop: u,
      count: a,
      style: f
    })), g;
  }

  function Pi(t, e) {
    var i = [],
        s = t.segments;

    for (var _n8 = 0; _n8 < s.length; _n8++) {
      var _o10 = Si(s[_n8], t.points, e);

      _o10.length && i.push.apply(i, _toConsumableArray(_o10));
    }

    return i;
  }

  function Di(t, e) {
    var i = t.points,
        s = t.options.spanGaps,
        n = i.length;
    if (!n) return [];

    var o = !!t._loop,
        _ref4 = function (t, e, i, s) {
      var n = 0,
          o = e - 1;
      if (i && !s) for (; n < e && !t[n].skip;) {
        n++;
      }

      for (; n < e && t[n].skip;) {
        n++;
      }

      for (n %= e, i && (o += n); o > n && t[o % e].skip;) {
        o--;
      }

      return o %= e, {
        start: n,
        end: o
      };
    }(i, n, o, s),
        a = _ref4.start,
        r = _ref4.end;

    if (!0 === s) return Oi(t, [{
      start: a,
      end: r,
      loop: o
    }], i, e);
    return Oi(t, function (t, e, i, s) {
      var n = t.length,
          o = [];
      var a,
          r = e,
          l = t[e];

      for (a = e + 1; a <= i; ++a) {
        var _i12 = t[a % n];
        _i12.skip || _i12.stop ? l.skip || (s = !1, o.push({
          start: e % n,
          end: (a - 1) % n,
          loop: s
        }), e = r = _i12.stop ? a : null) : (r = a, l.skip && (e = a)), l = _i12;
      }

      return null !== r && o.push({
        start: e % n,
        end: r % n,
        loop: s
      }), o;
    }(i, a, r < a ? r + n : r, !!t._fullLoop && 0 === a && r === n - 1), i, e);
  }

  function Oi(t, e, i, s) {
    return s && s.setContext && i ? function (t, e, i, s) {
      var n = t._chart.getContext(),
          o = Ci(t.options),
          a = t._datasetIndex,
          r = t.options.spanGaps,
          l = i.length,
          h = [];

      var c = o,
          d = e[0].start,
          u = d;

      function f(t, e, s, n) {
        var o = r ? -1 : 1;

        if (t !== e) {
          for (t += l; i[t % l].skip;) {
            t -= o;
          }

          for (; i[e % l].skip;) {
            e += o;
          }

          t % l != e % l && (h.push({
            start: t % l,
            end: e % l,
            loop: s,
            style: n
          }), c = n, d = e % l);
        }
      }

      var _iterator11 = _createForOfIteratorHelper(e),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _t11 = _step11.value;
          d = r ? d : _t11.start;

          var _e9 = void 0,
              _o11 = i[d % l];

          for (u = d + 1; u <= _t11.end; u++) {
            var _r5 = i[u % l];
            _e9 = Ci(s.setContext(_i(n, {
              type: "segment",
              p0: _o11,
              p1: _r5,
              p0DataIndex: (u - 1) % l,
              p1DataIndex: u % l,
              datasetIndex: a
            }))), Ai(_e9, c) && f(d, u - 1, _t11.loop, c), _o11 = _r5, c = _e9;
          }

          d < u - 1 && f(d, u - 1, _t11.loop, c);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      return h;
    }(t, e, i, s) : e;
  }

  function Ci(t) {
    return {
      backgroundColor: t.backgroundColor,
      borderCapStyle: t.borderCapStyle,
      borderDash: t.borderDash,
      borderDashOffset: t.borderDashOffset,
      borderJoinStyle: t.borderJoinStyle,
      borderWidth: t.borderWidth,
      borderColor: t.borderColor
    };
  }

  function Ai(t, e) {
    return e && JSON.stringify(t) !== JSON.stringify(e);
  }

  var Ti = Object.freeze({
    __proto__: null,
    easingEffects: si,
    isPatternOrGradient: Zt,
    color: Jt,
    getHoverColor: Qt,
    noop: t,
    uid: e,
    isNullOrUndef: i,
    isArray: s,
    isObject: n,
    isFinite: o,
    finiteOrDefault: a,
    valueOrDefault: r,
    toPercentage: l,
    toDimension: h,
    callback: c,
    each: d,
    _elementsEqual: u,
    clone: f,
    _merger: p,
    merge: m,
    mergeIf: b,
    _mergerIf: x,
    _deprecated: function _deprecated(t, e, i, s) {
      void 0 !== e && console.warn(t + ': "' + i + '" is deprecated. Please use "' + s + '" instead');
    },
    resolveObjectKey: y,
    _splitKey: v,
    _capitalize: w,
    defined: M,
    isFunction: k,
    setsEqual: S,
    _isClickEvent: P,
    toFontString: xe,
    _measureText: _e,
    _longestText: ye,
    _alignPixel: ve,
    clearCanvas: we,
    drawPoint: Me,
    drawPointLegend: ke,
    _isPointInArea: Se,
    clipArea: Pe,
    unclipArea: De,
    _steppedLineTo: Oe,
    _bezierCurveTo: Ce,
    renderText: Ae,
    addRoundedRectPath: Le,
    _lookup: tt,
    _lookupByKey: et,
    _rlookupByKey: it,
    _filterBetween: st,
    listenArrayEvents: ot,
    unlistenArrayEvents: at,
    _arrayUnique: rt,
    _createResolver: Ee,
    _attachContext: Re,
    _descriptors: Ie,
    _parseObjectDataRadialScale: Ue,
    splineCurve: Ge,
    splineCurveMonotone: Ze,
    _updateBezierControlPoints: Qe,
    _isDomSupported: oe,
    _getParentNode: ae,
    getStyle: he,
    getRelativePosition: ue,
    getMaximumSize: ge,
    retinaScale: pe,
    supportsEventListenerOptions: me,
    readUsedSize: be,
    fontString: function fontString(t, e, i) {
      return e + " " + t + "px " + i;
    },
    requestAnimFrame: lt,
    throttled: ht,
    debounce: ct,
    _toLeftRightCenter: dt,
    _alignStartEnd: ut,
    _textX: ft,
    _getStartAndCountOfVisiblePoints: gt,
    _scaleRangesChanged: pt,
    _pointInLine: ni,
    _steppedInterpolation: oi,
    _bezierInterpolation: ai,
    formatNumber: li,
    toLineHeight: di,
    _readValueToProps: ui,
    toTRBL: fi,
    toTRBLCorners: gi,
    toPadding: pi,
    toFont: mi,
    resolve: bi,
    _addGrace: xi,
    createContext: _i,
    PI: D,
    TAU: O,
    PITAU: C,
    INFINITY: A,
    RAD_PER_DEG: T,
    HALF_PI: L,
    QUARTER_PI: E,
    TWO_THIRDS_PI: R,
    log10: I,
    sign: z,
    niceNum: F,
    _factorize: V,
    isNumber: B,
    almostEquals: N,
    almostWhole: W,
    _setMinAndMaxByKey: j,
    toRadians: H,
    toDegrees: $,
    _decimalPlaces: Y,
    getAngleFromPoint: U,
    distanceBetweenPoints: X,
    _angleDiff: q,
    _normalizeAngle: K,
    _angleBetween: G,
    _limitValue: Z,
    _int16Range: J,
    _isBetween: Q,
    getRtlAdapter: yi,
    overrideTextDirection: vi,
    restoreTextDirection: wi,
    _boundSegment: Si,
    _boundSegments: Pi,
    _computeSegments: Di
  });

  function Li(t, e, i, s) {
    var n = t.controller,
        o = t.data,
        a = t._sorted,
        r = n._cachedMeta.iScale;

    if (r && e === r.axis && "r" !== e && a && o.length) {
      var _t12 = r._reversePixels ? it : et;

      if (!s) return _t12(o, e, i);

      if (n._sharedOptions) {
        var _s12 = o[0],
            _n9 = "function" == typeof _s12.getRange && _s12.getRange(e);

        if (_n9) {
          var _s13 = _t12(o, e, i - _n9),
              _a7 = _t12(o, e, i + _n9);

          return {
            lo: _s13.lo,
            hi: _a7.hi
          };
        }
      }
    }

    return {
      lo: 0,
      hi: o.length - 1
    };
  }

  function Ei(t, e, i, s, n) {
    var o = t.getSortedVisibleDatasetMetas(),
        a = i[e];

    for (var _t13 = 0, _i13 = o.length; _t13 < _i13; ++_t13) {
      var _o$_t = o[_t13],
          _i14 = _o$_t.index,
          _r6 = _o$_t.data,
          _Li = Li(o[_t13], e, a, n),
          _l5 = _Li.lo,
          _h4 = _Li.hi;

      for (var _t14 = _l5; _t14 <= _h4; ++_t14) {
        var _e10 = _r6[_t14];
        _e10.skip || s(_e10, _i14, _t14);
      }
    }
  }

  function Ri(t, e, i, s, n) {
    var o = [];
    if (!n && !t.isPointInArea(e)) return o;
    return Ei(t, i, e, function (i, a, r) {
      (n || Se(i, t.chartArea, 0)) && i.inRange(e.x, e.y, s) && o.push({
        element: i,
        datasetIndex: a,
        index: r
      });
    }, !0), o;
  }

  function Ii(t, e, i, s, n, o) {
    var a = [];

    var r = function (t) {
      var e = -1 !== t.indexOf("x"),
          i = -1 !== t.indexOf("y");
      return function (t, s) {
        var n = e ? Math.abs(t.x - s.x) : 0,
            o = i ? Math.abs(t.y - s.y) : 0;
        return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
      };
    }(i);

    var l = Number.POSITIVE_INFINITY;
    return Ei(t, i, e, function (i, h, c) {
      var d = i.inRange(e.x, e.y, n);
      if (s && !d) return;
      var u = i.getCenterPoint(n);
      if (!(!!o || t.isPointInArea(u)) && !d) return;
      var f = r(e, u);
      f < l ? (a = [{
        element: i,
        datasetIndex: h,
        index: c
      }], l = f) : f === l && a.push({
        element: i,
        datasetIndex: h,
        index: c
      });
    }), a;
  }

  function zi(t, e, i, s, n, o) {
    return o || t.isPointInArea(e) ? "r" !== i || s ? Ii(t, e, i, s, n, o) : function (t, e, i, s) {
      var n = [];
      return Ei(t, i, e, function (t, i, o) {
        var _t$getProps = t.getProps(["startAngle", "endAngle"], s),
            a = _t$getProps.startAngle,
            r = _t$getProps.endAngle,
            _U = U(t, {
          x: e.x,
          y: e.y
        }),
            l = _U.angle;

        G(l, a, r) && n.push({
          element: t,
          datasetIndex: i,
          index: o
        });
      }), n;
    }(t, e, i, n) : [];
  }

  function Fi(t, e, i, s, n) {
    var o = [],
        a = "x" === i ? "inXRange" : "inYRange";
    var r = !1;
    return Ei(t, i, e, function (t, s, l) {
      t[a](e[i], n) && (o.push({
        element: t,
        datasetIndex: s,
        index: l
      }), r = r || t.inRange(e.x, e.y, n));
    }), s && !r ? [] : o;
  }

  var Vi = {
    evaluateInteractionItems: Ei,
    modes: {
      index: function index(t, e, i, s) {
        var n = ue(e, t),
            o = i.axis || "x",
            a = i.includeInvisible || !1,
            r = i.intersect ? Ri(t, n, o, s, a) : zi(t, n, o, !1, s, a),
            l = [];
        return r.length ? (t.getSortedVisibleDatasetMetas().forEach(function (t) {
          var e = r[0].index,
              i = t.data[e];
          i && !i.skip && l.push({
            element: i,
            datasetIndex: t.index,
            index: e
          });
        }), l) : [];
      },
      dataset: function dataset(t, e, i, s) {
        var n = ue(e, t),
            o = i.axis || "xy",
            a = i.includeInvisible || !1;
        var r = i.intersect ? Ri(t, n, o, s, a) : zi(t, n, o, !1, s, a);

        if (r.length > 0) {
          var _e11 = r[0].datasetIndex,
              _i15 = t.getDatasetMeta(_e11).data;
          r = [];

          for (var _t15 = 0; _t15 < _i15.length; ++_t15) {
            r.push({
              element: _i15[_t15],
              datasetIndex: _e11,
              index: _t15
            });
          }
        }

        return r;
      },
      point: function point(t, e, i, s) {
        return Ri(t, ue(e, t), i.axis || "xy", s, i.includeInvisible || !1);
      },
      nearest: function nearest(t, e, i, s) {
        var n = ue(e, t),
            o = i.axis || "xy",
            a = i.includeInvisible || !1;
        return zi(t, n, o, i.intersect, s, a);
      },
      x: function x(t, e, i, s) {
        return Fi(t, ue(e, t), "x", i.intersect, s);
      },
      y: function y(t, e, i, s) {
        return Fi(t, ue(e, t), "y", i.intersect, s);
      }
    }
  };
  var Bi = ["left", "top", "right", "bottom"];

  function Ni(t, e) {
    return t.filter(function (t) {
      return t.pos === e;
    });
  }

  function Wi(t, e) {
    return t.filter(function (t) {
      return -1 === Bi.indexOf(t.pos) && t.box.axis === e;
    });
  }

  function ji(t, e) {
    return t.sort(function (t, i) {
      var s = e ? i : t,
          n = e ? t : i;
      return s.weight === n.weight ? s.index - n.index : s.weight - n.weight;
    });
  }

  function Hi(t, e) {
    var i = function (t) {
      var e = {};

      var _iterator12 = _createForOfIteratorHelper(t),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var _i16 = _step12.value;
          var _t16 = _i16.stack,
              _s14 = _i16.pos,
              _n10 = _i16.stackWeight;
          if (!_t16 || !Bi.includes(_s14)) continue;

          var _o12 = e[_t16] || (e[_t16] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
          });

          _o12.count++, _o12.weight += _n10;
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      return e;
    }(t),
        s = e.vBoxMaxWidth,
        n = e.hBoxMaxHeight;

    var o, a, r;

    for (o = 0, a = t.length; o < a; ++o) {
      r = t[o];

      var _a8 = r.box.fullSize,
          _l6 = i[r.stack],
          _h5 = _l6 && r.stackWeight / _l6.weight;

      r.horizontal ? (r.width = _h5 ? _h5 * s : _a8 && e.availableWidth, r.height = n) : (r.width = s, r.height = _h5 ? _h5 * n : _a8 && e.availableHeight);
    }

    return i;
  }

  function $i(t, e, i, s) {
    return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
  }

  function Yi(t, e) {
    t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right);
  }

  function Ui(t, e, i, s) {
    var o = i.pos,
        a = i.box,
        r = t.maxPadding;

    if (!n(o)) {
      i.size && (t[o] -= i.size);

      var _e12 = s[i.stack] || {
        size: 0,
        count: 1
      };

      _e12.size = Math.max(_e12.size, i.horizontal ? a.height : a.width), i.size = _e12.size / _e12.count, t[o] += i.size;
    }

    a.getPadding && Yi(r, a.getPadding());
    var l = Math.max(0, e.outerWidth - $i(r, t, "left", "right")),
        h = Math.max(0, e.outerHeight - $i(r, t, "top", "bottom")),
        c = l !== t.w,
        d = h !== t.h;
    return t.w = l, t.h = h, i.horizontal ? {
      same: c,
      other: d
    } : {
      same: d,
      other: c
    };
  }

  function Xi(t, e) {
    var i = e.maxPadding;

    function s(t) {
      var s = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      return t.forEach(function (t) {
        s[t] = Math.max(e[t], i[t]);
      }), s;
    }

    return s(t ? ["left", "right"] : ["top", "bottom"]);
  }

  function qi(t, e, i, s) {
    var n = [];
    var o, a, r, l, h, c;

    for (o = 0, a = t.length, h = 0; o < a; ++o) {
      r = t[o], l = r.box, l.update(r.width || e.w, r.height || e.h, Xi(r.horizontal, e));

      var _Ui = Ui(e, i, r, s),
          _a9 = _Ui.same,
          _d2 = _Ui.other;

      h |= _a9 && n.length, c = c || _d2, l.fullSize || n.push(r);
    }

    return h && qi(n, e, i, s) || c;
  }

  function Ki(t, e, i, s, n) {
    t.top = i, t.left = e, t.right = e + s, t.bottom = i + n, t.width = s, t.height = n;
  }

  function Gi(t, e, i, s) {
    var n = i.padding;
    var o = e.x,
        a = e.y;

    var _iterator13 = _createForOfIteratorHelper(t),
        _step13;

    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var _r7 = _step13.value;

        var _t17 = _r7.box,
            _l7 = s[_r7.stack] || {
          count: 1,
          placed: 0,
          weight: 1
        },
            _h6 = _r7.stackWeight / _l7.weight || 1;

        if (_r7.horizontal) {
          var _s15 = e.w * _h6,
              _o13 = _l7.size || _t17.height;

          M(_l7.start) && (a = _l7.start), _t17.fullSize ? Ki(_t17, n.left, a, i.outerWidth - n.right - n.left, _o13) : Ki(_t17, e.left + _l7.placed, a, _s15, _o13), _l7.start = a, _l7.placed += _s15, a = _t17.bottom;
        } else {
          var _s16 = e.h * _h6,
              _a10 = _l7.size || _t17.width;

          M(_l7.start) && (o = _l7.start), _t17.fullSize ? Ki(_t17, o, n.top, _a10, i.outerHeight - n.bottom - n.top) : Ki(_t17, o, e.top + _l7.placed, _a10, _s16), _l7.start = o, _l7.placed += _s16, o = _t17.right;
        }
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }

    e.x = o, e.y = a;
  }

  ne.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
  var Zi = {
    addBox: function addBox(t, e) {
      t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () {
        return [{
          z: 0,
          draw: function draw(t) {
            e.draw(t);
          }
        }];
      }, t.boxes.push(e);
    },
    removeBox: function removeBox(t, e) {
      var i = t.boxes ? t.boxes.indexOf(e) : -1;
      -1 !== i && t.boxes.splice(i, 1);
    },
    configure: function configure(t, e, i) {
      e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight;
    },
    update: function update(t, e, i, s) {
      if (!t) return;

      var n = pi(t.options.layout.padding),
          o = Math.max(e - n.width, 0),
          a = Math.max(i - n.height, 0),
          r = function (t) {
        var e = function (t) {
          var e = [];
          var i, s, n, o, a, r;

          for (i = 0, s = (t || []).length; i < s; ++i) {
            var _n11, _n11$options, _n11$options$stackWei;

            n = t[i], (_n11 = n, o = _n11.position, _n11$options = _n11.options, a = _n11$options.stack, _n11$options$stackWei = _n11$options.stackWeight, r = _n11$options$stackWei === void 0 ? 1 : _n11$options$stackWei, _n11), e.push({
              index: i,
              box: n,
              pos: o,
              horizontal: n.isHorizontal(),
              weight: n.weight,
              stack: a && o + a,
              stackWeight: r
            });
          }

          return e;
        }(t),
            i = ji(e.filter(function (t) {
          return t.box.fullSize;
        }), !0),
            s = ji(Ni(e, "left"), !0),
            n = ji(Ni(e, "right")),
            o = ji(Ni(e, "top"), !0),
            a = ji(Ni(e, "bottom")),
            r = Wi(e, "x"),
            l = Wi(e, "y");

        return {
          fullSize: i,
          leftAndTop: s.concat(o),
          rightAndBottom: n.concat(l).concat(a).concat(r),
          chartArea: Ni(e, "chartArea"),
          vertical: s.concat(n).concat(l),
          horizontal: o.concat(a).concat(r)
        };
      }(t.boxes),
          l = r.vertical,
          h = r.horizontal;

      d(t.boxes, function (t) {
        "function" == typeof t.beforeLayout && t.beforeLayout();
      });
      var c = l.reduce(function (t, e) {
        return e.box.options && !1 === e.box.options.display ? t : t + 1;
      }, 0) || 1,
          u = Object.freeze({
        outerWidth: e,
        outerHeight: i,
        padding: n,
        availableWidth: o,
        availableHeight: a,
        vBoxMaxWidth: o / 2 / c,
        hBoxMaxHeight: a / 2
      }),
          f = Object.assign({}, n);
      Yi(f, pi(s));
      var g = Object.assign({
        maxPadding: f,
        w: o,
        h: a,
        x: n.left,
        y: n.top
      }, n),
          p = Hi(l.concat(h), u);
      qi(r.fullSize, g, u, p), qi(l, g, u, p), qi(h, g, u, p) && qi(l, g, u, p), function (t) {
        var e = t.maxPadding;

        function i(i) {
          var s = Math.max(e[i] - t[i], 0);
          return t[i] += s, s;
        }

        t.y += i("top"), t.x += i("left"), i("right"), i("bottom");
      }(g), Gi(r.leftAndTop, g, u, p), g.x += g.w, g.y += g.h, Gi(r.rightAndBottom, g, u, p), t.chartArea = {
        left: g.left,
        top: g.top,
        right: g.left + g.w,
        bottom: g.top + g.h,
        height: g.h,
        width: g.w
      }, d(r.chartArea, function (e) {
        var i = e.box;
        Object.assign(i, t.chartArea), i.update(g.w, g.h, {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        });
      });
    }
  };

  var Ji = /*#__PURE__*/function () {
    function Ji() {
      _classCallCheck(this, Ji);
    }

    _createClass(Ji, [{
      key: "acquireContext",
      value: function acquireContext(t, e) {}
    }, {
      key: "releaseContext",
      value: function releaseContext(t) {
        return !1;
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(t, e, i) {}
    }, {
      key: "removeEventListener",
      value: function removeEventListener(t, e, i) {}
    }, {
      key: "getDevicePixelRatio",
      value: function getDevicePixelRatio() {
        return 1;
      }
    }, {
      key: "getMaximumSize",
      value: function getMaximumSize(t, e, i, s) {
        return e = Math.max(0, e || t.width), i = i || t.height, {
          width: e,
          height: Math.max(0, s ? Math.floor(e / s) : i)
        };
      }
    }, {
      key: "isAttached",
      value: function isAttached(t) {
        return !0;
      }
    }, {
      key: "updateConfig",
      value: function updateConfig(t) {}
    }]);

    return Ji;
  }();

  var Qi = /*#__PURE__*/function (_Ji) {
    _inherits(Qi, _Ji);

    var _super = _createSuper(Qi);

    function Qi() {
      _classCallCheck(this, Qi);

      return _super.apply(this, arguments);
    }

    _createClass(Qi, [{
      key: "acquireContext",
      value: function acquireContext(t) {
        return t && t.getContext && t.getContext("2d") || null;
      }
    }, {
      key: "updateConfig",
      value: function updateConfig(t) {
        t.options.animation = !1;
      }
    }]);

    return Qi;
  }(Ji);

  var ts = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
  },
      es = function es(t) {
    return null === t || "" === t;
  };

  var is = !!me && {
    passive: !0
  };

  function ss(t, e, i) {
    t.canvas.removeEventListener(e, i, is);
  }

  function ns(t, e) {
    var _iterator14 = _createForOfIteratorHelper(t),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var _i17 = _step14.value;
        if (_i17 === e || _i17.contains(e)) return !0;
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
  }

  function os(t, e, i) {
    var s = t.canvas,
        n = new MutationObserver(function (t) {
      var e = !1;

      var _iterator15 = _createForOfIteratorHelper(t),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var _i18 = _step15.value;
          e = e || ns(_i18.addedNodes, s), e = e && !ns(_i18.removedNodes, s);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }

      e && i();
    });
    return n.observe(document, {
      childList: !0,
      subtree: !0
    }), n;
  }

  function as(t, e, i) {
    var s = t.canvas,
        n = new MutationObserver(function (t) {
      var e = !1;

      var _iterator16 = _createForOfIteratorHelper(t),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var _i19 = _step16.value;
          e = e || ns(_i19.removedNodes, s), e = e && !ns(_i19.addedNodes, s);
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      e && i();
    });
    return n.observe(document, {
      childList: !0,
      subtree: !0
    }), n;
  }

  var rs = new Map();
  var ls = 0;

  function hs() {
    var t = window.devicePixelRatio;
    t !== ls && (ls = t, rs.forEach(function (e, i) {
      i.currentDevicePixelRatio !== t && e();
    }));
  }

  function cs(t, e, i) {
    var s = t.canvas,
        n = s && ae(s);
    if (!n) return;
    var o = ht(function (t, e) {
      var s = n.clientWidth;
      i(t, e), s < n.clientWidth && i();
    }, window),
        a = new ResizeObserver(function (t) {
      var e = t[0],
          i = e.contentRect.width,
          s = e.contentRect.height;
      0 === i && 0 === s || o(i, s);
    });
    return a.observe(n), function (t, e) {
      rs.size || window.addEventListener("resize", hs), rs.set(t, e);
    }(t, o), a;
  }

  function ds(t, e, i) {
    i && i.disconnect(), "resize" === e && function (t) {
      rs.delete(t), rs.size || window.removeEventListener("resize", hs);
    }(t);
  }

  function us(t, e, i) {
    var s = t.canvas,
        n = ht(function (e) {
      null !== t.ctx && i(function (t, e) {
        var i = ts[t.type] || t.type,
            _ue = ue(t, e),
            s = _ue.x,
            n = _ue.y;

        return {
          type: i,
          chart: e,
          native: t,
          x: void 0 !== s ? s : null,
          y: void 0 !== n ? n : null
        };
      }(e, t));
    }, t, function (t) {
      var e = t[0];
      return [e, e.offsetX, e.offsetY];
    });
    return function (t, e, i) {
      t.addEventListener(e, i, is);
    }(s, e, n), n;
  }

  var fs = /*#__PURE__*/function (_Ji2) {
    _inherits(fs, _Ji2);

    var _super2 = _createSuper(fs);

    function fs() {
      _classCallCheck(this, fs);

      return _super2.apply(this, arguments);
    }

    _createClass(fs, [{
      key: "acquireContext",
      value: function acquireContext(t, e) {
        var i = t && t.getContext && t.getContext("2d");
        return i && i.canvas === t ? (function (t, e) {
          var i = t.style,
              s = t.getAttribute("height"),
              n = t.getAttribute("width");

          if (t.$chartjs = {
            initial: {
              height: s,
              width: n,
              style: {
                display: i.display,
                height: i.height,
                width: i.width
              }
            }
          }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", es(n)) {
            var _e13 = be(t, "width");

            void 0 !== _e13 && (t.width = _e13);
          }

          if (es(s)) if ("" === t.style.height) t.height = t.width / (e || 2);else {
            var _e14 = be(t, "height");

            void 0 !== _e14 && (t.height = _e14);
          }
        }(t, e), i) : null;
      }
    }, {
      key: "releaseContext",
      value: function releaseContext(t) {
        var e = t.canvas;
        if (!e.$chartjs) return !1;
        var s = e.$chartjs.initial;
        ["height", "width"].forEach(function (t) {
          var n = s[t];
          i(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
        });
        var n = s.style || {};
        return Object.keys(n).forEach(function (t) {
          e.style[t] = n[t];
        }), e.width = e.width, delete e.$chartjs, !0;
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(t, e, i) {
        this.removeEventListener(t, e);
        var s = t.$proxies || (t.$proxies = {}),
            n = {
          attach: os,
          detach: as,
          resize: cs
        }[e] || us;
        s[e] = n(t, e, i);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(t, e) {
        var i = t.$proxies || (t.$proxies = {}),
            s = i[e];
        if (!s) return;
        (({
          attach: ds,
          detach: ds,
          resize: ds
        })[e] || ss)(t, e, s), i[e] = void 0;
      }
    }, {
      key: "getDevicePixelRatio",
      value: function getDevicePixelRatio() {
        return window.devicePixelRatio;
      }
    }, {
      key: "getMaximumSize",
      value: function getMaximumSize(t, e, i, s) {
        return ge(t, e, i, s);
      }
    }, {
      key: "isAttached",
      value: function isAttached(t) {
        var e = ae(t);
        return !(!e || !e.isConnected);
      }
    }]);

    return fs;
  }(Ji);

  function gs(t) {
    return !oe() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? Qi : fs;
  }

  var ps = Object.freeze({
    __proto__: null,
    _detectPlatform: gs,
    BasePlatform: Ji,
    BasicPlatform: Qi,
    DomPlatform: fs
  });
  var ms = "transparent",
      bs = {
    boolean: function boolean(t, e, i) {
      return i > .5 ? e : t;
    },
    color: function color(t, e, i) {
      var s = Jt(t || ms),
          n = s.valid && Jt(e || ms);
      return n && n.valid ? n.mix(s, i).hexString() : e;
    },
    number: function number(t, e, i) {
      return t + (e - t) * i;
    }
  };

  var xs = /*#__PURE__*/function () {
    function xs(t, e, i, s) {
      _classCallCheck(this, xs);

      var n = e[i];
      s = bi([t.to, s, n, t.from]);
      var o = bi([t.from, n, s]);
      this._active = !0, this._fn = t.fn || bs[t.type || _typeof(o)], this._easing = si[t.easing] || si.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = o, this._to = s, this._promises = void 0;
    }

    _createClass(xs, [{
      key: "active",
      value: function active() {
        return this._active;
      }
    }, {
      key: "update",
      value: function update(t, e, i) {
        if (this._active) {
          this._notify(!1);

          var _s17 = this._target[this._prop],
              _n12 = i - this._start,
              _o14 = this._duration - _n12;

          this._start = i, this._duration = Math.floor(Math.max(_o14, t.duration)), this._total += _n12, this._loop = !!t.loop, this._to = bi([t.to, e, _s17, t.from]), this._from = bi([t.from, _s17, e]);
        }
      }
    }, {
      key: "cancel",
      value: function cancel() {
        this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
      }
    }, {
      key: "tick",
      value: function tick(t) {
        var e = t - this._start,
            i = this._duration,
            s = this._prop,
            n = this._from,
            o = this._loop,
            a = this._to;
        var r;
        if (this._active = n !== a && (o || e < i), !this._active) return this._target[s] = a, void this._notify(!0);
        e < 0 ? this._target[s] = n : (r = e / i % 2, r = o && r > 1 ? 2 - r : r, r = this._easing(Math.min(1, Math.max(0, r))), this._target[s] = this._fn(n, a, r));
      }
    }, {
      key: "wait",
      value: function wait() {
        var t = this._promises || (this._promises = []);
        return new Promise(function (e, i) {
          t.push({
            res: e,
            rej: i
          });
        });
      }
    }, {
      key: "_notify",
      value: function _notify(t) {
        var e = t ? "res" : "rej",
            i = this._promises || [];

        for (var _t18 = 0; _t18 < i.length; _t18++) {
          i[_t18][e]();
        }
      }
    }]);

    return xs;
  }();

  ne.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  });

  var _s = Object.keys(ne.animation);

  ne.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: function _scriptable(t) {
      return "onProgress" !== t && "onComplete" !== t && "fn" !== t;
    }
  }), ne.set("animations", {
    colors: {
      type: "color",
      properties: ["color", "borderColor", "backgroundColor"]
    },
    numbers: {
      type: "number",
      properties: ["x", "y", "borderWidth", "radius", "tension"]
    }
  }), ne.describe("animations", {
    _fallback: "animation"
  }), ne.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: function fn(t) {
            return 0 | t;
          }
        }
      }
    }
  });

  var ys = /*#__PURE__*/function () {
    function ys(t, e) {
      _classCallCheck(this, ys);

      this._chart = t, this._properties = new Map(), this.configure(e);
    }

    _createClass(ys, [{
      key: "configure",
      value: function configure(t) {
        if (!n(t)) return;
        var e = this._properties;
        Object.getOwnPropertyNames(t).forEach(function (i) {
          var o = t[i];
          if (!n(o)) return;
          var a = {};

          var _iterator17 = _createForOfIteratorHelper(_s),
              _step17;

          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var _t19 = _step17.value;
              a[_t19] = o[_t19];
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }

          (s(o.properties) && o.properties || [i]).forEach(function (t) {
            t !== i && e.has(t) || e.set(t, a);
          });
        });
      }
    }, {
      key: "_animateOptions",
      value: function _animateOptions(t, e) {
        var i = e.options,
            s = function (t, e) {
          if (!e) return;
          var i = t.options;
          if (!i) return void (t.options = e);
          i.$shared && (t.options = i = Object.assign({}, i, {
            $shared: !1,
            $animations: {}
          }));
          return i;
        }(t, i);

        if (!s) return [];

        var n = this._createAnimations(s, i);

        return i.$shared && function (t, e) {
          var i = [],
              s = Object.keys(e);

          for (var _e15 = 0; _e15 < s.length; _e15++) {
            var _n13 = t[s[_e15]];
            _n13 && _n13.active() && i.push(_n13.wait());
          }

          return Promise.all(i);
        }(t.options.$animations, i).then(function () {
          t.options = i;
        }, function () {}), n;
      }
    }, {
      key: "_createAnimations",
      value: function _createAnimations(t, e) {
        var i = this._properties,
            s = [],
            n = t.$animations || (t.$animations = {}),
            o = Object.keys(e),
            a = Date.now();
        var r;

        for (r = o.length - 1; r >= 0; --r) {
          var _l8 = o[r];
          if ("$" === _l8.charAt(0)) continue;

          if ("options" === _l8) {
            s.push.apply(s, _toConsumableArray(this._animateOptions(t, e)));
            continue;
          }

          var _h7 = e[_l8];
          var _c5 = n[_l8];

          var _d3 = i.get(_l8);

          if (_c5) {
            if (_d3 && _c5.active()) {
              _c5.update(_d3, _h7, a);

              continue;
            }

            _c5.cancel();
          }

          _d3 && _d3.duration ? (n[_l8] = _c5 = new xs(_d3, t, _l8, _h7), s.push(_c5)) : t[_l8] = _h7;
        }

        return s;
      }
    }, {
      key: "update",
      value: function update(t, e) {
        if (0 === this._properties.size) return void Object.assign(t, e);

        var i = this._createAnimations(t, e);

        return i.length ? (mt.add(this._chart, i), !0) : void 0;
      }
    }]);

    return ys;
  }();

  function vs(t, e) {
    var i = t && t.options || {},
        s = i.reverse,
        n = void 0 === i.min ? e : 0,
        o = void 0 === i.max ? e : 0;
    return {
      start: s ? o : n,
      end: s ? n : o
    };
  }

  function ws(t, e) {
    var i = [],
        s = t._getSortedDatasetMetas(e);

    var n, o;

    for (n = 0, o = s.length; n < o; ++n) {
      i.push(s[n].index);
    }

    return i;
  }

  function Ms(t, e, i) {
    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var n = t.keys,
        a = "single" === s.mode;
    var r, l, h, c;

    if (null !== e) {
      for (r = 0, l = n.length; r < l; ++r) {
        if (h = +n[r], h === i) {
          if (s.all) continue;
          break;
        }

        c = t.values[h], o(c) && (a || 0 === e || z(e) === z(c)) && (e += c);
      }

      return e;
    }
  }

  function ks(t, e) {
    var i = t && t.options.stacked;
    return i || void 0 === i && void 0 !== e.stack;
  }

  function Ss(t, e, i) {
    var s = t[e] || (t[e] = {});
    return s[i] || (s[i] = {});
  }

  function Ps(t, e, i, s) {
    var _iterator18 = _createForOfIteratorHelper(e.getMatchingVisibleMetas(s).reverse()),
        _step18;

    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var _n14 = _step18.value;
        var _e16 = t[_n14.index];
        if (i && _e16 > 0 || !i && _e16 < 0) return _n14.index;
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }

    return null;
  }

  function Ds(t, e) {
    var i = t.chart,
        s = t._cachedMeta,
        n = i._stacks || (i._stacks = {}),
        o = s.iScale,
        a = s.vScale,
        r = s.index,
        l = o.axis,
        h = a.axis,
        c = function (t, e, i) {
      return "".concat(t.id, ".").concat(e.id, ".").concat(i.stack || i.type);
    }(o, a, s),
        d = e.length;

    var u;

    for (var _t20 = 0; _t20 < d; ++_t20) {
      var _i20 = e[_t20],
          _o15 = _i20[l],
          _d4 = _i20[h];
      u = (_i20._stacks || (_i20._stacks = {}))[h] = Ss(n, c, _o15), u[r] = _d4, u._top = Ps(u, a, !0, s.type), u._bottom = Ps(u, a, !1, s.type);
    }
  }

  function Os(t, e) {
    var i = t.scales;
    return Object.keys(i).filter(function (t) {
      return i[t].axis === e;
    }).shift();
  }

  function Cs(t, e) {
    var i = t.controller.index,
        s = t.vScale && t.vScale.axis;

    if (s) {
      e = e || t._parsed;

      var _iterator19 = _createForOfIteratorHelper(e),
          _step19;

      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var _t21 = _step19.value;
          var _e17 = _t21._stacks;
          if (!_e17 || void 0 === _e17[s] || void 0 === _e17[s][i]) return;
          delete _e17[s][i];
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }
    }
  }

  var As = function As(t) {
    return "reset" === t || "none" === t;
  },
      Ts = function Ts(t, e) {
    return e ? t : Object.assign({}, t);
  };

  var Ls = /*#__PURE__*/function () {
    function Ls(t, e) {
      _classCallCheck(this, Ls);

      this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.initialize();
    }

    _createClass(Ls, [{
      key: "initialize",
      value: function initialize() {
        var t = this._cachedMeta;
        this.configure(), this.linkScales(), t._stacked = ks(t.vScale, t), this.addElements();
      }
    }, {
      key: "updateIndex",
      value: function updateIndex(t) {
        this.index !== t && Cs(this._cachedMeta), this.index = t;
      }
    }, {
      key: "linkScales",
      value: function linkScales() {
        var t = this.chart,
            e = this._cachedMeta,
            i = this.getDataset(),
            s = function s(t, e, i, _s18) {
          return "x" === t ? e : "r" === t ? _s18 : i;
        },
            n = e.xAxisID = r(i.xAxisID, Os(t, "x")),
            o = e.yAxisID = r(i.yAxisID, Os(t, "y")),
            a = e.rAxisID = r(i.rAxisID, Os(t, "r")),
            l = e.indexAxis,
            h = e.iAxisID = s(l, n, o, a),
            c = e.vAxisID = s(l, o, n, a);

        e.xScale = this.getScaleForId(n), e.yScale = this.getScaleForId(o), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(h), e.vScale = this.getScaleForId(c);
      }
    }, {
      key: "getDataset",
      value: function getDataset() {
        return this.chart.data.datasets[this.index];
      }
    }, {
      key: "getMeta",
      value: function getMeta() {
        return this.chart.getDatasetMeta(this.index);
      }
    }, {
      key: "getScaleForId",
      value: function getScaleForId(t) {
        return this.chart.scales[t];
      }
    }, {
      key: "_getOtherScale",
      value: function _getOtherScale(t) {
        var e = this._cachedMeta;
        return t === e.iScale ? e.vScale : e.iScale;
      }
    }, {
      key: "reset",
      value: function reset() {
        this._update("reset");
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        var t = this._cachedMeta;
        this._data && at(this._data, this), t._stacked && Cs(t);
      }
    }, {
      key: "_dataCheck",
      value: function _dataCheck() {
        var t = this.getDataset(),
            e = t.data || (t.data = []),
            i = this._data;
        if (n(e)) this._data = function (t) {
          var e = Object.keys(t),
              i = new Array(e.length);
          var s, n, o;

          for (s = 0, n = e.length; s < n; ++s) {
            o = e[s], i[s] = {
              x: o,
              y: t[o]
            };
          }

          return i;
        }(e);else if (i !== e) {
          if (i) {
            at(i, this);
            var _t22 = this._cachedMeta;
            Cs(_t22), _t22._parsed = [];
          }

          e && Object.isExtensible(e) && ot(e, this), this._syncList = [], this._data = e;
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var t = this._cachedMeta;
        this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
      }
    }, {
      key: "buildOrUpdateElements",
      value: function buildOrUpdateElements(t) {
        var e = this._cachedMeta,
            i = this.getDataset();
        var s = !1;

        this._dataCheck();

        var n = e._stacked;
        e._stacked = ks(e.vScale, e), e.stack !== i.stack && (s = !0, Cs(e), e.stack = i.stack), this._resyncElements(t), (s || n !== e._stacked) && Ds(this, e._parsed);
      }
    }, {
      key: "configure",
      value: function configure() {
        var t = this.chart.config,
            e = t.datasetScopeKeys(this._type),
            i = t.getOptionScopes(this.getDataset(), e, !0);
        this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        var i = this._cachedMeta,
            o = this._data,
            a = i.iScale,
            r = i._stacked,
            l = a.axis;
        var h,
            c,
            d,
            u = 0 === t && e === o.length || i._sorted,
            f = t > 0 && i._parsed[t - 1];
        if (!1 === this._parsing) i._parsed = o, i._sorted = !0, d = o;else {
          d = s(o[t]) ? this.parseArrayData(i, o, t, e) : n(o[t]) ? this.parseObjectData(i, o, t, e) : this.parsePrimitiveData(i, o, t, e);

          var _a11 = function _a11() {
            return null === c[l] || f && c[l] < f[l];
          };

          for (h = 0; h < e; ++h) {
            i._parsed[h + t] = c = d[h], u && (_a11() && (u = !1), f = c);
          }

          i._sorted = u;
        }
        r && Ds(this, d);
      }
    }, {
      key: "parsePrimitiveData",
      value: function parsePrimitiveData(t, e, i, s) {
        var n = t.iScale,
            o = t.vScale,
            a = n.axis,
            r = o.axis,
            l = n.getLabels(),
            h = n === o,
            c = new Array(s);
        var d, u, f;

        for (d = 0, u = s; d < u; ++d) {
          var _c$d;

          f = d + i, c[d] = (_c$d = {}, _defineProperty(_c$d, a, h || n.parse(l[f], f)), _defineProperty(_c$d, r, o.parse(e[f], f)), _c$d);
        }

        return c;
      }
    }, {
      key: "parseArrayData",
      value: function parseArrayData(t, e, i, s) {
        var n = t.xScale,
            o = t.yScale,
            a = new Array(s);
        var r, l, h, c;

        for (r = 0, l = s; r < l; ++r) {
          h = r + i, c = e[h], a[r] = {
            x: n.parse(c[0], h),
            y: o.parse(c[1], h)
          };
        }

        return a;
      }
    }, {
      key: "parseObjectData",
      value: function parseObjectData(t, e, i, s) {
        var n = t.xScale,
            o = t.yScale,
            _this$_parsing = this._parsing,
            _this$_parsing$xAxisK = _this$_parsing.xAxisKey,
            a = _this$_parsing$xAxisK === void 0 ? "x" : _this$_parsing$xAxisK,
            _this$_parsing$yAxisK = _this$_parsing.yAxisKey,
            r = _this$_parsing$yAxisK === void 0 ? "y" : _this$_parsing$yAxisK,
            l = new Array(s);
        var h, c, d, u;

        for (h = 0, c = s; h < c; ++h) {
          d = h + i, u = e[d], l[h] = {
            x: n.parse(y(u, a), d),
            y: o.parse(y(u, r), d)
          };
        }

        return l;
      }
    }, {
      key: "getParsed",
      value: function getParsed(t) {
        return this._cachedMeta._parsed[t];
      }
    }, {
      key: "getDataElement",
      value: function getDataElement(t) {
        return this._cachedMeta.data[t];
      }
    }, {
      key: "applyStack",
      value: function applyStack(t, e, i) {
        var s = this.chart,
            n = this._cachedMeta,
            o = e[t.axis];
        return Ms({
          keys: ws(s, !0),
          values: e._stacks[t.axis]
        }, o, n.index, {
          mode: i
        });
      }
    }, {
      key: "updateRangeFromParsed",
      value: function updateRangeFromParsed(t, e, i, s) {
        var n = i[e.axis];
        var o = null === n ? NaN : n;
        var a = s && i._stacks[e.axis];
        s && a && (s.values = a, o = Ms(s, n, this._cachedMeta.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o);
      }
    }, {
      key: "getMinMax",
      value: function getMinMax(t, e) {
        var i = this._cachedMeta,
            s = i._parsed,
            n = i._sorted && t === i.iScale,
            a = s.length,
            r = this._getOtherScale(t),
            l = function (t, e, i) {
          return t && !e.hidden && e._stacked && {
            keys: ws(i, !0),
            values: null
          };
        }(e, i, this.chart),
            h = {
          min: Number.POSITIVE_INFINITY,
          max: Number.NEGATIVE_INFINITY
        },
            _ref5 = function (t) {
          var _t$getUserBounds = t.getUserBounds(),
              e = _t$getUserBounds.min,
              i = _t$getUserBounds.max,
              s = _t$getUserBounds.minDefined,
              n = _t$getUserBounds.maxDefined;

          return {
            min: s ? e : Number.NEGATIVE_INFINITY,
            max: n ? i : Number.POSITIVE_INFINITY
          };
        }(r),
            c = _ref5.min,
            d = _ref5.max;

        var u, f;

        function g() {
          f = s[u];
          var e = f[r.axis];
          return !o(f[t.axis]) || c > e || d < e;
        }

        for (u = 0; u < a && (g() || (this.updateRangeFromParsed(h, t, f, l), !n)); ++u) {
          ;
        }

        if (n) for (u = a - 1; u >= 0; --u) {
          if (!g()) {
            this.updateRangeFromParsed(h, t, f, l);
            break;
          }
        }
        return h;
      }
    }, {
      key: "getAllParsedValues",
      value: function getAllParsedValues(t) {
        var e = this._cachedMeta._parsed,
            i = [];
        var s, n, a;

        for (s = 0, n = e.length; s < n; ++s) {
          a = e[s][t.axis], o(a) && i.push(a);
        }

        return i;
      }
    }, {
      key: "getMaxOverflow",
      value: function getMaxOverflow() {
        return !1;
      }
    }, {
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta,
            i = e.iScale,
            s = e.vScale,
            n = this.getParsed(t);
        return {
          label: i ? "" + i.getLabelForValue(n[i.axis]) : "",
          value: s ? "" + s.getLabelForValue(n[s.axis]) : ""
        };
      }
    }, {
      key: "_update",
      value: function _update(t) {
        var e = this._cachedMeta;
        this.update(t || "default"), e._clip = function (t) {
          var e, i, s, o;
          return n(t) ? (e = t.top, i = t.right, s = t.bottom, o = t.left) : e = i = s = o = t, {
            top: e,
            right: i,
            bottom: s,
            left: o,
            disabled: !1 === t
          };
        }(r(this.options.clip, function (t, e, i) {
          if (!1 === i) return !1;
          var s = vs(t, i),
              n = vs(e, i);
          return {
            top: n.end,
            right: s.end,
            bottom: n.start,
            left: s.start
          };
        }(e.xScale, e.yScale, this.getMaxOverflow())));
      }
    }, {
      key: "update",
      value: function update(t) {}
    }, {
      key: "draw",
      value: function draw() {
        var t = this._ctx,
            e = this.chart,
            i = this._cachedMeta,
            s = i.data || [],
            n = e.chartArea,
            o = [],
            a = this._drawStart || 0,
            r = this._drawCount || s.length - a,
            l = this.options.drawActiveElementsOnTop;
        var h;

        for (i.dataset && i.dataset.draw(t, n, a, r), h = a; h < a + r; ++h) {
          var _e18 = s[h];
          _e18.hidden || (_e18.active && l ? o.push(_e18) : _e18.draw(t, n));
        }

        for (h = 0; h < o.length; ++h) {
          o[h].draw(t, n);
        }
      }
    }, {
      key: "getStyle",
      value: function getStyle(t, e) {
        var i = e ? "active" : "default";
        return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i);
      }
    }, {
      key: "getContext",
      value: function getContext(t, e, i) {
        var s = this.getDataset();
        var n;

        if (t >= 0 && t < this._cachedMeta.data.length) {
          var _e19 = this._cachedMeta.data[t];
          n = _e19.$context || (_e19.$context = function (t, e, i) {
            return _i(t, {
              active: !1,
              dataIndex: e,
              parsed: void 0,
              raw: void 0,
              element: i,
              index: e,
              mode: "default",
              type: "data"
            });
          }(this.getContext(), t, _e19)), n.parsed = this.getParsed(t), n.raw = s.data[t], n.index = n.dataIndex = t;
        } else n = this.$context || (this.$context = function (t, e) {
          return _i(t, {
            active: !1,
            dataset: void 0,
            datasetIndex: e,
            index: e,
            mode: "default",
            type: "dataset"
          });
        }(this.chart.getContext(), this.index)), n.dataset = s, n.index = n.datasetIndex = this.index;

        return n.active = !!e, n.mode = i, n;
      }
    }, {
      key: "resolveDatasetElementOptions",
      value: function resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t);
      }
    }, {
      key: "resolveDataElementOptions",
      value: function resolveDataElementOptions(t, e) {
        return this._resolveElementOptions(this.dataElementType.id, e, t);
      }
    }, {
      key: "_resolveElementOptions",
      value: function _resolveElementOptions(t) {
        var _this3 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
        var i = arguments.length > 2 ? arguments[2] : undefined;
        var s = "active" === e,
            n = this._cachedDataOpts,
            o = t + "-" + e,
            a = n[o],
            r = this.enableOptionSharing && M(i);
        if (a) return Ts(a, r);
        var l = this.chart.config,
            h = l.datasetElementScopeKeys(this._type, t),
            c = s ? ["".concat(t, "Hover"), "hover", t, ""] : [t, ""],
            d = l.getOptionScopes(this.getDataset(), h),
            u = Object.keys(ne.elements[t]),
            f = l.resolveNamedOptions(d, u, function () {
          return _this3.getContext(i, s);
        }, c);
        return f.$shared && (f.$shared = r, n[o] = Object.freeze(Ts(f, r))), f;
      }
    }, {
      key: "_resolveAnimations",
      value: function _resolveAnimations(t, e, i) {
        var s = this.chart,
            n = this._cachedDataOpts,
            o = "animation-".concat(e),
            a = n[o];
        if (a) return a;
        var r;

        if (!1 !== s.options.animation) {
          var _s19 = this.chart.config,
              _n15 = _s19.datasetAnimationScopeKeys(this._type, e),
              _o16 = _s19.getOptionScopes(this.getDataset(), _n15);

          r = _s19.createResolver(_o16, this.getContext(t, i, e));
        }

        var l = new ys(s, r && r.animations);
        return r && r._cacheable && (n[o] = Object.freeze(l)), l;
      }
    }, {
      key: "getSharedOptions",
      value: function getSharedOptions(t) {
        if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
      }
    }, {
      key: "includeOptions",
      value: function includeOptions(t, e) {
        return !e || As(t) || this.chart._animationsDisabled;
      }
    }, {
      key: "_getSharedOptions",
      value: function _getSharedOptions(t, e) {
        var i = this.resolveDataElementOptions(t, e),
            s = this._sharedOptions,
            n = this.getSharedOptions(i),
            o = this.includeOptions(e, n) || n !== s;
        return this.updateSharedOptions(n, e, i), {
          sharedOptions: n,
          includeOptions: o
        };
      }
    }, {
      key: "updateElement",
      value: function updateElement(t, e, i, s) {
        As(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
      }
    }, {
      key: "updateSharedOptions",
      value: function updateSharedOptions(t, e, i) {
        t && !As(e) && this._resolveAnimations(void 0, e).update(t, i);
      }
    }, {
      key: "_setStyle",
      value: function _setStyle(t, e, i, s) {
        t.active = s;
        var n = this.getStyle(e, s);

        this._resolveAnimations(e, i, s).update(t, {
          options: !s && this.getSharedOptions(n) || n
        });
      }
    }, {
      key: "removeHoverStyle",
      value: function removeHoverStyle(t, e, i) {
        this._setStyle(t, i, "active", !1);
      }
    }, {
      key: "setHoverStyle",
      value: function setHoverStyle(t, e, i) {
        this._setStyle(t, i, "active", !0);
      }
    }, {
      key: "_removeDatasetHoverStyle",
      value: function _removeDatasetHoverStyle() {
        var t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !1);
      }
    }, {
      key: "_setDatasetHoverStyle",
      value: function _setDatasetHoverStyle() {
        var t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !0);
      }
    }, {
      key: "_resyncElements",
      value: function _resyncElements(t) {
        var e = this._data,
            i = this._cachedMeta.data;

        var _iterator20 = _createForOfIteratorHelper(this._syncList),
            _step20;

        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var _step20$value = _slicedToArray(_step20.value, 3),
                _t23 = _step20$value[0],
                _e20 = _step20$value[1],
                _i21 = _step20$value[2];

            this[_t23](_e20, _i21);
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }

        this._syncList = [];
        var s = i.length,
            n = e.length,
            o = Math.min(n, s);
        o && this.parse(0, o), n > s ? this._insertElements(s, n - s, t) : n < s && this._removeElements(n, s - n);
      }
    }, {
      key: "_insertElements",
      value: function _insertElements(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var s = this._cachedMeta,
            n = s.data,
            o = t + e;
        var a;

        var r = function r(t) {
          for (t.length += e, a = t.length - 1; a >= o; a--) {
            t[a] = t[a - e];
          }
        };

        for (r(n), a = t; a < o; ++a) {
          n[a] = new this.dataElementType();
        }

        this._parsing && r(s._parsed), this.parse(t, e), i && this.updateElements(n, t, e, "reset");
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, s) {}
    }, {
      key: "_removeElements",
      value: function _removeElements(t, e) {
        var i = this._cachedMeta;

        if (this._parsing) {
          var _s20 = i._parsed.splice(t, e);

          i._stacked && Cs(i, _s20);
        }

        i.data.splice(t, e);
      }
    }, {
      key: "_sync",
      value: function _sync(t) {
        if (this._parsing) this._syncList.push(t);else {
          var _t24 = _slicedToArray(t, 3),
              _e21 = _t24[0],
              _i22 = _t24[1],
              _s21 = _t24[2];

          this[_e21](_i22, _s21);
        }

        this.chart._dataChanges.push([this.index].concat(_toConsumableArray(t)));
      }
    }, {
      key: "_onDataPush",
      value: function _onDataPush() {
        var t = arguments.length;

        this._sync(["_insertElements", this.getDataset().data.length - t, t]);
      }
    }, {
      key: "_onDataPop",
      value: function _onDataPop() {
        this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
      }
    }, {
      key: "_onDataShift",
      value: function _onDataShift() {
        this._sync(["_removeElements", 0, 1]);
      }
    }, {
      key: "_onDataSplice",
      value: function _onDataSplice(t, e) {
        e && this._sync(["_removeElements", t, e]);
        var i = arguments.length - 2;
        i && this._sync(["_insertElements", t, i]);
      }
    }, {
      key: "_onDataUnshift",
      value: function _onDataUnshift() {
        this._sync(["_insertElements", 0, arguments.length]);
      }
    }]);

    return Ls;
  }();

  Ls.defaults = {}, Ls.prototype.datasetElementType = null, Ls.prototype.dataElementType = null;

  var Es = /*#__PURE__*/function () {
    function Es() {
      _classCallCheck(this, Es);

      this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0;
    }

    _createClass(Es, [{
      key: "tooltipPosition",
      value: function tooltipPosition(t) {
        var _this$getProps = this.getProps(["x", "y"], t),
            e = _this$getProps.x,
            i = _this$getProps.y;

        return {
          x: e,
          y: i
        };
      }
    }, {
      key: "hasValue",
      value: function hasValue() {
        return B(this.x) && B(this.y);
      }
    }, {
      key: "getProps",
      value: function getProps(t, e) {
        var _this4 = this;

        var i = this.$animations;
        if (!e || !i) return this;
        var s = {};
        return t.forEach(function (t) {
          s[t] = i[t] && i[t].active() ? i[t]._to : _this4[t];
        }), s;
      }
    }]);

    return Es;
  }();

  Es.defaults = {}, Es.defaultRoutes = void 0;
  var Rs = {
    values: function values(t) {
      return s(t) ? t : "" + t;
    },
    numeric: function numeric(t, e, i) {
      if (0 === t) return "0";
      var s = this.chart.options.locale;
      var n,
          o = t;

      if (i.length > 1) {
        var _e22 = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));

        (_e22 < 1e-4 || _e22 > 1e15) && (n = "scientific"), o = function (t, e) {
          var i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
          Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
          return i;
        }(t, i);
      }

      var a = I(Math.abs(o)),
          r = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
          l = {
        notation: n,
        minimumFractionDigits: r,
        maximumFractionDigits: r
      };
      return Object.assign(l, this.options.ticks.format), li(t, s, l);
    },
    logarithmic: function logarithmic(t, e, i) {
      if (0 === t) return "0";
      var s = t / Math.pow(10, Math.floor(I(t)));
      return 1 === s || 2 === s || 5 === s ? Rs.numeric.call(this, t, e, i) : "";
    }
  };
  var Is = {
    formatters: Rs
  };

  function zs(t, e) {
    var s = t.options.ticks,
        n = s.maxTicksLimit || function (t) {
      var e = t.options.offset,
          i = t._tickSize(),
          s = t._length / i + (e ? 0 : 1),
          n = t._maxLength / i;

      return Math.floor(Math.min(s, n));
    }(t),
        o = s.major.enabled ? function (t) {
      var e = [];
      var i, s;

      for (i = 0, s = t.length; i < s; i++) {
        t[i].major && e.push(i);
      }

      return e;
    }(e) : [],
        a = o.length,
        r = o[0],
        l = o[a - 1],
        h = [];

    if (a > n) return function (t, e, i, s) {
      var n,
          o = 0,
          a = i[0];

      for (s = Math.ceil(s), n = 0; n < t.length; n++) {
        n === a && (e.push(t[n]), o++, a = i[o * s]);
      }
    }(e, h, o, a / n), h;

    var c = function (t, e, i) {
      var s = function (t) {
        var e = t.length;
        var i, s;
        if (e < 2) return !1;

        for (s = t[0], i = 1; i < e; ++i) {
          if (t[i] - t[i - 1] !== s) return !1;
        }

        return s;
      }(t),
          n = e.length / i;

      if (!s) return Math.max(n, 1);
      var o = V(s);

      for (var _t25 = 0, _e23 = o.length - 1; _t25 < _e23; _t25++) {
        var _e24 = o[_t25];
        if (_e24 > n) return _e24;
      }

      return Math.max(n, 1);
    }(o, e, n);

    if (a > 0) {
      var _t26, _s22;

      var _n16 = a > 1 ? Math.round((l - r) / (a - 1)) : null;

      for (Fs(e, h, c, i(_n16) ? 0 : r - _n16, r), _t26 = 0, _s22 = a - 1; _t26 < _s22; _t26++) {
        Fs(e, h, c, o[_t26], o[_t26 + 1]);
      }

      return Fs(e, h, c, l, i(_n16) ? e.length : l + _n16), h;
    }

    return Fs(e, h, c), h;
  }

  function Fs(t, e, i, s, n) {
    var o = r(s, 0),
        a = Math.min(r(n, t.length), t.length);
    var l,
        h,
        c,
        d = 0;

    for (i = Math.ceil(i), n && (l = n - s, i = l / Math.floor(l / i)), c = o; c < 0;) {
      d++, c = Math.round(o + d * i);
    }

    for (h = Math.max(o, 0); h < a; h++) {
      h === c && (e.push(t[h]), d++, c = Math.round(o + d * i));
    }
  }

  ne.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawBorder: !0,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: function tickWidth(t, e) {
        return e.lineWidth;
      },
      tickColor: function tickColor(t, e) {
        return e.color;
      },
      offset: !1,
      borderDash: [],
      borderDashOffset: 0,
      borderWidth: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Is.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), ne.route("scale.ticks", "color", "", "color"), ne.route("scale.grid", "color", "", "borderColor"), ne.route("scale.grid", "borderColor", "", "borderColor"), ne.route("scale.title", "color", "", "color"), ne.describe("scale", {
    _fallback: !1,
    _scriptable: function _scriptable(t) {
      return !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t;
    },
    _indexable: function _indexable(t) {
      return "borderDash" !== t && "tickBorderDash" !== t;
    }
  }), ne.describe("scales", {
    _fallback: "scale"
  }), ne.describe("scale.ticks", {
    _scriptable: function _scriptable(t) {
      return "backdropPadding" !== t && "callback" !== t;
    },
    _indexable: function _indexable(t) {
      return "backdropPadding" !== t;
    }
  });

  var Vs = function Vs(t, e, i) {
    return "top" === e || "left" === e ? t[e] + i : t[e] - i;
  };

  function Bs(t, e) {
    var i = [],
        s = t.length / e,
        n = t.length;
    var o = 0;

    for (; o < n; o += s) {
      i.push(t[Math.floor(o)]);
    }

    return i;
  }

  function Ns(t, e, i) {
    var s = t.ticks.length,
        n = Math.min(e, s - 1),
        o = t._startPixel,
        a = t._endPixel,
        r = 1e-6;
    var l,
        h = t.getPixelForTick(n);
    if (!(i && (l = 1 === s ? Math.max(h - o, a - h) : 0 === e ? (t.getPixelForTick(1) - h) / 2 : (h - t.getPixelForTick(n - 1)) / 2, h += n < e ? l : -l, h < o - r || h > a + r))) return h;
  }

  function Ws(t) {
    return t.drawTicks ? t.tickLength : 0;
  }

  function js(t, e) {
    if (!t.display) return 0;
    var i = mi(t.font, e),
        n = pi(t.padding);
    return (s(t.text) ? t.text.length : 1) * i.lineHeight + n.height;
  }

  function Hs(t, e, i) {
    var s = dt(t);
    return (i && "right" !== e || !i && "right" === e) && (s = function (t) {
      return "left" === t ? "right" : "right" === t ? "left" : t;
    }(s)), s;
  }

  var $s = /*#__PURE__*/function (_Es) {
    _inherits($s, _Es);

    var _super3 = _createSuper($s);

    function $s(t) {
      var _this5;

      _classCallCheck(this, $s);

      _this5 = _super3.call(this), _this5.id = t.id, _this5.type = t.type, _this5.options = void 0, _this5.ctx = t.ctx, _this5.chart = t.chart, _this5.top = void 0, _this5.bottom = void 0, _this5.left = void 0, _this5.right = void 0, _this5.width = void 0, _this5.height = void 0, _this5._margins = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, _this5.maxWidth = void 0, _this5.maxHeight = void 0, _this5.paddingTop = void 0, _this5.paddingBottom = void 0, _this5.paddingLeft = void 0, _this5.paddingRight = void 0, _this5.axis = void 0, _this5.labelRotation = void 0, _this5.min = void 0, _this5.max = void 0, _this5._range = void 0, _this5.ticks = [], _this5._gridLineItems = null, _this5._labelItems = null, _this5._labelSizes = null, _this5._length = 0, _this5._maxLength = 0, _this5._longestTextCache = {}, _this5._startPixel = void 0, _this5._endPixel = void 0, _this5._reversePixels = !1, _this5._userMax = void 0, _this5._userMin = void 0, _this5._suggestedMax = void 0, _this5._suggestedMin = void 0, _this5._ticksLength = 0, _this5._borderValue = 0, _this5._cache = {}, _this5._dataLimitsCached = !1, _this5.$context = void 0;
      return _this5;
    }

    _createClass($s, [{
      key: "init",
      value: function init(t) {
        this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        return t;
      }
    }, {
      key: "getUserBounds",
      value: function getUserBounds() {
        var t = this._userMin,
            e = this._userMax,
            i = this._suggestedMin,
            s = this._suggestedMax;
        return t = a(t, Number.POSITIVE_INFINITY), e = a(e, Number.NEGATIVE_INFINITY), i = a(i, Number.POSITIVE_INFINITY), s = a(s, Number.NEGATIVE_INFINITY), {
          min: a(t, i),
          max: a(e, s),
          minDefined: o(t),
          maxDefined: o(e)
        };
      }
    }, {
      key: "getMinMax",
      value: function getMinMax(t) {
        var e,
            _this$getUserBounds = this.getUserBounds(),
            i = _this$getUserBounds.min,
            s = _this$getUserBounds.max,
            n = _this$getUserBounds.minDefined,
            o = _this$getUserBounds.maxDefined;

        if (n && o) return {
          min: i,
          max: s
        };
        var r = this.getMatchingVisibleMetas();

        for (var _a12 = 0, _l9 = r.length; _a12 < _l9; ++_a12) {
          e = r[_a12].controller.getMinMax(this, t), n || (i = Math.min(i, e.min)), o || (s = Math.max(s, e.max));
        }

        return i = o && i > s ? s : i, s = n && i > s ? i : s, {
          min: a(i, a(s, i)),
          max: a(s, a(i, s))
        };
      }
    }, {
      key: "getPadding",
      value: function getPadding() {
        return {
          left: this.paddingLeft || 0,
          top: this.paddingTop || 0,
          right: this.paddingRight || 0,
          bottom: this.paddingBottom || 0
        };
      }
    }, {
      key: "getTicks",
      value: function getTicks() {
        return this.ticks;
      }
    }, {
      key: "getLabels",
      value: function getLabels() {
        var t = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
      }
    }, {
      key: "beforeLayout",
      value: function beforeLayout() {
        this._cache = {}, this._dataLimitsCached = !1;
      }
    }, {
      key: "beforeUpdate",
      value: function beforeUpdate() {
        c(this.options.beforeUpdate, [this]);
      }
    }, {
      key: "update",
      value: function update(t, e, i) {
        var _this$options = this.options,
            s = _this$options.beginAtZero,
            n = _this$options.grace,
            o = _this$options.ticks,
            a = o.sampleSize;
        this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = xi(this, n, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
        var r = a < this.ticks.length;
        this._convertTicksToLabels(r ? Bs(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o.display && (o.autoSkip || "auto" === o.source) && (this.ticks = zs(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), r && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
      }
    }, {
      key: "configure",
      value: function configure() {
        var t,
            e,
            i = this.options.reverse;
        this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, this._alignToPixels = this.options.alignToPixels;
      }
    }, {
      key: "afterUpdate",
      value: function afterUpdate() {
        c(this.options.afterUpdate, [this]);
      }
    }, {
      key: "beforeSetDimensions",
      value: function beforeSetDimensions() {
        c(this.options.beforeSetDimensions, [this]);
      }
    }, {
      key: "setDimensions",
      value: function setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
      }
    }, {
      key: "afterSetDimensions",
      value: function afterSetDimensions() {
        c(this.options.afterSetDimensions, [this]);
      }
    }, {
      key: "_callHooks",
      value: function _callHooks(t) {
        this.chart.notifyPlugins(t, this.getContext()), c(this.options[t], [this]);
      }
    }, {
      key: "beforeDataLimits",
      value: function beforeDataLimits() {
        this._callHooks("beforeDataLimits");
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {}
    }, {
      key: "afterDataLimits",
      value: function afterDataLimits() {
        this._callHooks("afterDataLimits");
      }
    }, {
      key: "beforeBuildTicks",
      value: function beforeBuildTicks() {
        this._callHooks("beforeBuildTicks");
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        return [];
      }
    }, {
      key: "afterBuildTicks",
      value: function afterBuildTicks() {
        this._callHooks("afterBuildTicks");
      }
    }, {
      key: "beforeTickToLabelConversion",
      value: function beforeTickToLabelConversion() {
        c(this.options.beforeTickToLabelConversion, [this]);
      }
    }, {
      key: "generateTickLabels",
      value: function generateTickLabels(t) {
        var e = this.options.ticks;
        var i, s, n;

        for (i = 0, s = t.length; i < s; i++) {
          n = t[i], n.label = c(e.callback, [n.value, i, t], this);
        }
      }
    }, {
      key: "afterTickToLabelConversion",
      value: function afterTickToLabelConversion() {
        c(this.options.afterTickToLabelConversion, [this]);
      }
    }, {
      key: "beforeCalculateLabelRotation",
      value: function beforeCalculateLabelRotation() {
        c(this.options.beforeCalculateLabelRotation, [this]);
      }
    }, {
      key: "calculateLabelRotation",
      value: function calculateLabelRotation() {
        var t = this.options,
            e = t.ticks,
            i = this.ticks.length,
            s = e.minRotation || 0,
            n = e.maxRotation;
        var o,
            a,
            r,
            l = s;
        if (!this._isVisible() || !e.display || s >= n || i <= 1 || !this.isHorizontal()) return void (this.labelRotation = s);

        var h = this._getLabelSizes(),
            c = h.widest.width,
            d = h.highest.height,
            u = Z(this.chart.width - c, 0, this.maxWidth);

        o = t.offset ? this.maxWidth / i : u / (i - 1), c + 6 > o && (o = u / (i - (t.offset ? .5 : 1)), a = this.maxHeight - Ws(t.grid) - e.padding - js(t.title, this.chart.options.font), r = Math.sqrt(c * c + d * d), l = $(Math.min(Math.asin(Z((h.highest.height + 6) / o, -1, 1)), Math.asin(Z(a / r, -1, 1)) - Math.asin(Z(d / r, -1, 1)))), l = Math.max(s, Math.min(n, l))), this.labelRotation = l;
      }
    }, {
      key: "afterCalculateLabelRotation",
      value: function afterCalculateLabelRotation() {
        c(this.options.afterCalculateLabelRotation, [this]);
      }
    }, {
      key: "afterAutoSkip",
      value: function afterAutoSkip() {}
    }, {
      key: "beforeFit",
      value: function beforeFit() {
        c(this.options.beforeFit, [this]);
      }
    }, {
      key: "fit",
      value: function fit() {
        var t = {
          width: 0,
          height: 0
        },
            e = this.chart,
            _this$options2 = this.options,
            i = _this$options2.ticks,
            s = _this$options2.title,
            n = _this$options2.grid,
            o = this._isVisible(),
            a = this.isHorizontal();

        if (o) {
          var _o17 = js(s, e.options.font);

          if (a ? (t.width = this.maxWidth, t.height = Ws(n) + _o17) : (t.height = this.maxHeight, t.width = Ws(n) + _o17), i.display && this.ticks.length) {
            var _this$_getLabelSizes = this._getLabelSizes(),
                _e25 = _this$_getLabelSizes.first,
                _s23 = _this$_getLabelSizes.last,
                _n17 = _this$_getLabelSizes.widest,
                _o18 = _this$_getLabelSizes.highest,
                _r8 = 2 * i.padding,
                _l10 = H(this.labelRotation),
                _h8 = Math.cos(_l10),
                _c6 = Math.sin(_l10);

            if (a) {
              var _e26 = i.mirror ? 0 : _c6 * _n17.width + _h8 * _o18.height;

              t.height = Math.min(this.maxHeight, t.height + _e26 + _r8);
            } else {
              var _e27 = i.mirror ? 0 : _h8 * _n17.width + _c6 * _o18.height;

              t.width = Math.min(this.maxWidth, t.width + _e27 + _r8);
            }

            this._calculatePadding(_e25, _s23, _c6, _h8);
          }
        }

        this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
      }
    }, {
      key: "_calculatePadding",
      value: function _calculatePadding(t, e, i, s) {
        var _this$options3 = this.options,
            _this$options3$ticks = _this$options3.ticks,
            n = _this$options3$ticks.align,
            o = _this$options3$ticks.padding,
            a = _this$options3.position,
            r = 0 !== this.labelRotation,
            l = "top" !== a && "x" === this.axis;

        if (this.isHorizontal()) {
          var _a13 = this.getPixelForTick(0) - this.left,
              _h9 = this.right - this.getPixelForTick(this.ticks.length - 1);

          var _c7 = 0,
              _d5 = 0;
          r ? l ? (_c7 = s * t.width, _d5 = i * e.height) : (_c7 = i * t.height, _d5 = s * e.width) : "start" === n ? _d5 = e.width : "end" === n ? _c7 = t.width : "inner" !== n && (_c7 = t.width / 2, _d5 = e.width / 2), this.paddingLeft = Math.max((_c7 - _a13 + o) * this.width / (this.width - _a13), 0), this.paddingRight = Math.max((_d5 - _h9 + o) * this.width / (this.width - _h9), 0);
        } else {
          var _i23 = e.height / 2,
              _s24 = t.height / 2;

          "start" === n ? (_i23 = 0, _s24 = t.height) : "end" === n && (_i23 = e.height, _s24 = 0), this.paddingTop = _i23 + o, this.paddingBottom = _s24 + o;
        }
      }
    }, {
      key: "_handleMargins",
      value: function _handleMargins() {
        this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
      }
    }, {
      key: "afterFit",
      value: function afterFit() {
        c(this.options.afterFit, [this]);
      }
    }, {
      key: "isHorizontal",
      value: function isHorizontal() {
        var _this$options4 = this.options,
            t = _this$options4.axis,
            e = _this$options4.position;
        return "top" === e || "bottom" === e || "x" === t;
      }
    }, {
      key: "isFullSize",
      value: function isFullSize() {
        return this.options.fullSize;
      }
    }, {
      key: "_convertTicksToLabels",
      value: function _convertTicksToLabels(t) {
        var e, s;

        for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, s = t.length; e < s; e++) {
          i(t[e].label) && (t.splice(e, 1), s--, e--);
        }

        this.afterTickToLabelConversion();
      }
    }, {
      key: "_getLabelSizes",
      value: function _getLabelSizes() {
        var t = this._labelSizes;

        if (!t) {
          var _e28 = this.options.ticks.sampleSize;
          var _i24 = this.ticks;
          _e28 < _i24.length && (_i24 = Bs(_i24, _e28)), this._labelSizes = t = this._computeLabelSizes(_i24, _i24.length);
        }

        return t;
      }
    }, {
      key: "_computeLabelSizes",
      value: function _computeLabelSizes(t, e) {
        var n = this.ctx,
            o = this._longestTextCache,
            a = [],
            r = [];

        var l,
            h,
            c,
            u,
            f,
            g,
            p,
            m,
            b,
            x,
            _,
            y = 0,
            v = 0;

        for (l = 0; l < e; ++l) {
          if (u = t[l].label, f = this._resolveTickFontOptions(l), n.font = g = f.string, p = o[g] = o[g] || {
            data: {},
            gc: []
          }, m = f.lineHeight, b = x = 0, i(u) || s(u)) {
            if (s(u)) for (h = 0, c = u.length; h < c; ++h) {
              _ = u[h], i(_) || s(_) || (b = _e(n, p.data, p.gc, b, _), x += m);
            }
          } else b = _e(n, p.data, p.gc, b, u), x = m;

          a.push(b), r.push(x), y = Math.max(b, y), v = Math.max(x, v);
        }

        !function (t, e) {
          d(t, function (t) {
            var i = t.gc,
                s = i.length / 2;
            var n;

            if (s > e) {
              for (n = 0; n < s; ++n) {
                delete t.data[i[n]];
              }

              i.splice(0, s);
            }
          });
        }(o, e);

        var w = a.indexOf(y),
            M = r.indexOf(v),
            k = function k(t) {
          return {
            width: a[t] || 0,
            height: r[t] || 0
          };
        };

        return {
          first: k(0),
          last: k(e - 1),
          widest: k(w),
          highest: k(M),
          widths: a,
          heights: r
        };
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(t) {
        return t;
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(t, e) {
        return NaN;
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {}
    }, {
      key: "getPixelForTick",
      value: function getPixelForTick(t) {
        var e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
      }
    }, {
      key: "getPixelForDecimal",
      value: function getPixelForDecimal(t) {
        this._reversePixels && (t = 1 - t);
        var e = this._startPixel + t * this._length;
        return J(this._alignToPixels ? ve(this.chart, e, 0) : e);
      }
    }, {
      key: "getDecimalForPixel",
      value: function getDecimalForPixel(t) {
        var e = (t - this._startPixel) / this._length;
        return this._reversePixels ? 1 - e : e;
      }
    }, {
      key: "getBasePixel",
      value: function getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
      }
    }, {
      key: "getBaseValue",
      value: function getBaseValue() {
        var t = this.min,
            e = this.max;
        return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
      }
    }, {
      key: "getContext",
      value: function getContext(t) {
        var e = this.ticks || [];

        if (t >= 0 && t < e.length) {
          var _i25 = e[t];
          return _i25.$context || (_i25.$context = function (t, e, i) {
            return _i(t, {
              tick: i,
              index: e,
              type: "tick"
            });
          }(this.getContext(), t, _i25));
        }

        return this.$context || (this.$context = _i(this.chart.getContext(), {
          scale: this,
          type: "scale"
        }));
      }
    }, {
      key: "_tickSize",
      value: function _tickSize() {
        var t = this.options.ticks,
            e = H(this.labelRotation),
            i = Math.abs(Math.cos(e)),
            s = Math.abs(Math.sin(e)),
            n = this._getLabelSizes(),
            o = t.autoSkipPadding || 0,
            a = n ? n.widest.width + o : 0,
            r = n ? n.highest.height + o : 0;

        return this.isHorizontal() ? r * i > a * s ? a / i : r / s : r * s < a * i ? r / i : a / s;
      }
    }, {
      key: "_isVisible",
      value: function _isVisible() {
        var t = this.options.display;
        return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
      }
    }, {
      key: "_computeGridLineItems",
      value: function _computeGridLineItems(t) {
        var e = this.axis,
            i = this.chart,
            s = this.options,
            o = s.grid,
            a = s.position,
            l = o.offset,
            h = this.isHorizontal(),
            c = this.ticks.length + (l ? 1 : 0),
            d = Ws(o),
            u = [],
            f = o.setContext(this.getContext()),
            g = f.drawBorder ? f.borderWidth : 0,
            p = g / 2,
            m = function m(t) {
          return ve(i, t, g);
        };

        var b, x, _, y, v, w, M, k, S, P, D, O;

        if ("top" === a) b = m(this.bottom), w = this.bottom - d, k = b - p, P = m(t.top) + p, O = t.bottom;else if ("bottom" === a) b = m(this.top), P = t.top, O = m(t.bottom) - p, w = b + p, k = this.top + d;else if ("left" === a) b = m(this.right), v = this.right - d, M = b - p, S = m(t.left) + p, D = t.right;else if ("right" === a) b = m(this.left), S = t.left, D = m(t.right) - p, v = b + p, M = this.left + d;else if ("x" === e) {
          if ("center" === a) b = m((t.top + t.bottom) / 2 + .5);else if (n(a)) {
            var _t27 = Object.keys(a)[0],
                _e29 = a[_t27];
            b = m(this.chart.scales[_t27].getPixelForValue(_e29));
          }
          P = t.top, O = t.bottom, w = b + p, k = w + d;
        } else if ("y" === e) {
          if ("center" === a) b = m((t.left + t.right) / 2);else if (n(a)) {
            var _t28 = Object.keys(a)[0],
                _e30 = a[_t28];
            b = m(this.chart.scales[_t28].getPixelForValue(_e30));
          }
          v = b - p, M = v - d, S = t.left, D = t.right;
        }
        var C = r(s.ticks.maxTicksLimit, c),
            A = Math.max(1, Math.ceil(c / C));

        for (x = 0; x < c; x += A) {
          var _t29 = o.setContext(this.getContext(x)),
              _e31 = _t29.lineWidth,
              _s25 = _t29.color,
              _n18 = _t29.borderDash || [],
              _a14 = _t29.borderDashOffset,
              _r9 = _t29.tickWidth,
              _c8 = _t29.tickColor,
              _d6 = _t29.tickBorderDash || [],
              _f = _t29.tickBorderDashOffset;

          _ = Ns(this, x, l), void 0 !== _ && (y = ve(i, _, _e31), h ? v = M = S = D = y : w = k = P = O = y, u.push({
            tx1: v,
            ty1: w,
            tx2: M,
            ty2: k,
            x1: S,
            y1: P,
            x2: D,
            y2: O,
            width: _e31,
            color: _s25,
            borderDash: _n18,
            borderDashOffset: _a14,
            tickWidth: _r9,
            tickColor: _c8,
            tickBorderDash: _d6,
            tickBorderDashOffset: _f
          }));
        }

        return this._ticksLength = c, this._borderValue = b, u;
      }
    }, {
      key: "_computeLabelItems",
      value: function _computeLabelItems(t) {
        var e = this.axis,
            i = this.options,
            o = i.position,
            a = i.ticks,
            r = this.isHorizontal(),
            l = this.ticks,
            h = a.align,
            c = a.crossAlign,
            d = a.padding,
            u = a.mirror,
            f = Ws(i.grid),
            g = f + d,
            p = u ? -d : g,
            m = -H(this.labelRotation),
            b = [];

        var x,
            _,
            y,
            v,
            w,
            M,
            k,
            S,
            P,
            D,
            O,
            C,
            A = "middle";

        if ("top" === o) M = this.bottom - p, k = this._getXAxisLabelAlignment();else if ("bottom" === o) M = this.top + p, k = this._getXAxisLabelAlignment();else if ("left" === o) {
          var _t30 = this._getYAxisLabelAlignment(f);

          k = _t30.textAlign, w = _t30.x;
        } else if ("right" === o) {
          var _t31 = this._getYAxisLabelAlignment(f);

          k = _t31.textAlign, w = _t31.x;
        } else if ("x" === e) {
          if ("center" === o) M = (t.top + t.bottom) / 2 + g;else if (n(o)) {
            var _t32 = Object.keys(o)[0],
                _e32 = o[_t32];
            M = this.chart.scales[_t32].getPixelForValue(_e32) + g;
          }
          k = this._getXAxisLabelAlignment();
        } else if ("y" === e) {
          if ("center" === o) w = (t.left + t.right) / 2 - g;else if (n(o)) {
            var _t33 = Object.keys(o)[0],
                _e33 = o[_t33];
            w = this.chart.scales[_t33].getPixelForValue(_e33);
          }
          k = this._getYAxisLabelAlignment(f).textAlign;
        }
        "y" === e && ("start" === h ? A = "top" : "end" === h && (A = "bottom"));

        var T = this._getLabelSizes();

        for (x = 0, _ = l.length; x < _; ++x) {
          y = l[x], v = y.label;

          var _t34 = a.setContext(this.getContext(x));

          S = this.getPixelForTick(x) + a.labelOffset, P = this._resolveTickFontOptions(x), D = P.lineHeight, O = s(v) ? v.length : 1;

          var _e34 = O / 2,
              _i26 = _t34.color,
              _n19 = _t34.textStrokeColor,
              _h10 = _t34.textStrokeWidth;

          var _d7 = void 0,
              _f2 = k;

          if (r ? (w = S, "inner" === k && (_f2 = x === _ - 1 ? this.options.reverse ? "left" : "right" : 0 === x ? this.options.reverse ? "right" : "left" : "center"), C = "top" === o ? "near" === c || 0 !== m ? -O * D + D / 2 : "center" === c ? -T.highest.height / 2 - _e34 * D + D : -T.highest.height + D / 2 : "near" === c || 0 !== m ? D / 2 : "center" === c ? T.highest.height / 2 - _e34 * D : T.highest.height - O * D, u && (C *= -1)) : (M = S, C = (1 - O) * D / 2), _t34.showLabelBackdrop) {
            var _e35 = pi(_t34.backdropPadding),
                _i27 = T.heights[x],
                _s26 = T.widths[x];

            var _n20 = M + C - _e35.top,
                _o19 = w - _e35.left;

            switch (A) {
              case "middle":
                _n20 -= _i27 / 2;
                break;

              case "bottom":
                _n20 -= _i27;
            }

            switch (k) {
              case "center":
                _o19 -= _s26 / 2;
                break;

              case "right":
                _o19 -= _s26;
            }

            _d7 = {
              left: _o19,
              top: _n20,
              width: _s26 + _e35.width,
              height: _i27 + _e35.height,
              color: _t34.backdropColor
            };
          }

          b.push({
            rotation: m,
            label: v,
            font: P,
            color: _i26,
            strokeColor: _n19,
            strokeWidth: _h10,
            textOffset: C,
            textAlign: _f2,
            textBaseline: A,
            translation: [w, M],
            backdrop: _d7
          });
        }

        return b;
      }
    }, {
      key: "_getXAxisLabelAlignment",
      value: function _getXAxisLabelAlignment() {
        var _this$options5 = this.options,
            t = _this$options5.position,
            e = _this$options5.ticks;
        if (-H(this.labelRotation)) return "top" === t ? "left" : "right";
        var i = "center";
        return "start" === e.align ? i = "left" : "end" === e.align ? i = "right" : "inner" === e.align && (i = "inner"), i;
      }
    }, {
      key: "_getYAxisLabelAlignment",
      value: function _getYAxisLabelAlignment(t) {
        var _this$options6 = this.options,
            e = _this$options6.position,
            _this$options6$ticks = _this$options6.ticks,
            i = _this$options6$ticks.crossAlign,
            s = _this$options6$ticks.mirror,
            n = _this$options6$ticks.padding,
            o = t + n,
            a = this._getLabelSizes().widest.width;

        var r, l;
        return "left" === e ? s ? (l = this.right + n, "near" === i ? r = "left" : "center" === i ? (r = "center", l += a / 2) : (r = "right", l += a)) : (l = this.right - o, "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", l = this.left)) : "right" === e ? s ? (l = this.left + n, "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", l -= a)) : (l = this.left + o, "near" === i ? r = "left" : "center" === i ? (r = "center", l += a / 2) : (r = "right", l = this.right)) : r = "right", {
          textAlign: r,
          x: l
        };
      }
    }, {
      key: "_computeLabelArea",
      value: function _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        var t = this.chart,
            e = this.options.position;
        return "left" === e || "right" === e ? {
          top: 0,
          left: this.left,
          bottom: t.height,
          right: this.right
        } : "top" === e || "bottom" === e ? {
          top: this.top,
          left: 0,
          bottom: this.bottom,
          right: t.width
        } : void 0;
      }
    }, {
      key: "drawBackground",
      value: function drawBackground() {
        var t = this.ctx,
            e = this.options.backgroundColor,
            i = this.left,
            s = this.top,
            n = this.width,
            o = this.height;
        e && (t.save(), t.fillStyle = e, t.fillRect(i, s, n, o), t.restore());
      }
    }, {
      key: "getLineWidthForValue",
      value: function getLineWidthForValue(t) {
        var e = this.options.grid;
        if (!this._isVisible() || !e.display) return 0;
        var i = this.ticks.findIndex(function (e) {
          return e.value === t;
        });

        if (i >= 0) {
          return e.setContext(this.getContext(i)).lineWidth;
        }

        return 0;
      }
    }, {
      key: "drawGrid",
      value: function drawGrid(t) {
        var e = this.options.grid,
            i = this.ctx,
            s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));

        var n, o;

        var a = function a(t, e, s) {
          s.width && s.color && (i.save(), i.lineWidth = s.width, i.strokeStyle = s.color, i.setLineDash(s.borderDash || []), i.lineDashOffset = s.borderDashOffset, i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.stroke(), i.restore());
        };

        if (e.display) for (n = 0, o = s.length; n < o; ++n) {
          var _t35 = s[n];
          e.drawOnChartArea && a({
            x: _t35.x1,
            y: _t35.y1
          }, {
            x: _t35.x2,
            y: _t35.y2
          }, _t35), e.drawTicks && a({
            x: _t35.tx1,
            y: _t35.ty1
          }, {
            x: _t35.tx2,
            y: _t35.ty2
          }, {
            color: _t35.tickColor,
            width: _t35.tickWidth,
            borderDash: _t35.tickBorderDash,
            borderDashOffset: _t35.tickBorderDashOffset
          });
        }
      }
    }, {
      key: "drawBorder",
      value: function drawBorder() {
        var t = this.chart,
            e = this.ctx,
            i = this.options.grid,
            s = i.setContext(this.getContext()),
            n = i.drawBorder ? s.borderWidth : 0;
        if (!n) return;
        var o = i.setContext(this.getContext(0)).lineWidth,
            a = this._borderValue;
        var r, l, h, c;
        this.isHorizontal() ? (r = ve(t, this.left, n) - n / 2, l = ve(t, this.right, o) + o / 2, h = c = a) : (h = ve(t, this.top, n) - n / 2, c = ve(t, this.bottom, o) + o / 2, r = l = a), e.save(), e.lineWidth = s.borderWidth, e.strokeStyle = s.borderColor, e.beginPath(), e.moveTo(r, h), e.lineTo(l, c), e.stroke(), e.restore();
      }
    }, {
      key: "drawLabels",
      value: function drawLabels(t) {
        if (!this.options.ticks.display) return;

        var e = this.ctx,
            i = this._computeLabelArea();

        i && Pe(e, i);

        var s = this._labelItems || (this._labelItems = this._computeLabelItems(t));

        var n, o;

        for (n = 0, o = s.length; n < o; ++n) {
          var _t36 = s[n],
              _i28 = _t36.font,
              _o20 = _t36.label;
          _t36.backdrop && (e.fillStyle = _t36.backdrop.color, e.fillRect(_t36.backdrop.left, _t36.backdrop.top, _t36.backdrop.width, _t36.backdrop.height)), Ae(e, _o20, 0, _t36.textOffset, _i28, _t36);
        }

        i && De(e);
      }
    }, {
      key: "drawTitle",
      value: function drawTitle() {
        var t = this.ctx,
            _this$options7 = this.options,
            e = _this$options7.position,
            i = _this$options7.title,
            o = _this$options7.reverse;
        if (!i.display) return;
        var a = mi(i.font),
            r = pi(i.padding),
            l = i.align;
        var h = a.lineHeight / 2;
        "bottom" === e || "center" === e || n(e) ? (h += r.bottom, s(i.text) && (h += a.lineHeight * (i.text.length - 1))) : h += r.top;

        var _ref6 = function (t, e, i, s) {
          var o = t.top,
              a = t.left,
              r = t.bottom,
              l = t.right,
              h = t.chart,
              c = h.chartArea,
              d = h.scales;
          var u,
              f,
              g,
              p = 0;
          var m = r - o,
              b = l - a;

          if (t.isHorizontal()) {
            if (f = ut(s, a, l), n(i)) {
              var _t37 = Object.keys(i)[0],
                  _s27 = i[_t37];
              g = d[_t37].getPixelForValue(_s27) + m - e;
            } else g = "center" === i ? (c.bottom + c.top) / 2 + m - e : Vs(t, i, e);

            u = l - a;
          } else {
            if (n(i)) {
              var _t38 = Object.keys(i)[0],
                  _s28 = i[_t38];
              f = d[_t38].getPixelForValue(_s28) - b + e;
            } else f = "center" === i ? (c.left + c.right) / 2 - b + e : Vs(t, i, e);

            g = ut(s, r, o), p = "left" === i ? -L : L;
          }

          return {
            titleX: f,
            titleY: g,
            maxWidth: u,
            rotation: p
          };
        }(this, h, e, l),
            c = _ref6.titleX,
            d = _ref6.titleY,
            u = _ref6.maxWidth,
            f = _ref6.rotation;

        Ae(t, i.text, 0, 0, a, {
          color: i.color,
          maxWidth: u,
          rotation: f,
          textAlign: Hs(l, e, o),
          textBaseline: "middle",
          translation: [c, d]
        });
      }
    }, {
      key: "draw",
      value: function draw(t) {
        this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
      }
    }, {
      key: "_layers",
      value: function _layers() {
        var _this6 = this;

        var t = this.options,
            e = t.ticks && t.ticks.z || 0,
            i = r(t.grid && t.grid.z, -1);
        return this._isVisible() && this.draw === $s.prototype.draw ? [{
          z: i,
          draw: function draw(t) {
            _this6.drawBackground(), _this6.drawGrid(t), _this6.drawTitle();
          }
        }, {
          z: i + 1,
          draw: function draw() {
            _this6.drawBorder();
          }
        }, {
          z: e,
          draw: function draw(t) {
            _this6.drawLabels(t);
          }
        }] : [{
          z: e,
          draw: function draw(t) {
            _this6.draw(t);
          }
        }];
      }
    }, {
      key: "getMatchingVisibleMetas",
      value: function getMatchingVisibleMetas(t) {
        var e = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + "AxisID",
            s = [];
        var n, o;

        for (n = 0, o = e.length; n < o; ++n) {
          var _o21 = e[n];
          _o21[i] !== this.id || t && _o21.type !== t || s.push(_o21);
        }

        return s;
      }
    }, {
      key: "_resolveTickFontOptions",
      value: function _resolveTickFontOptions(t) {
        return mi(this.options.ticks.setContext(this.getContext(t)).font);
      }
    }, {
      key: "_maxDigits",
      value: function _maxDigits() {
        var t = this._resolveTickFontOptions(0).lineHeight;

        return (this.isHorizontal() ? this.width : this.height) / t;
      }
    }]);

    return $s;
  }(Es);

  var Ys = /*#__PURE__*/function () {
    function Ys(t, e, i) {
      _classCallCheck(this, Ys);

      this.type = t, this.scope = e, this.override = i, this.items = Object.create(null);
    }

    _createClass(Ys, [{
      key: "isForType",
      value: function isForType(t) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
      }
    }, {
      key: "register",
      value: function register(t) {
        var e = Object.getPrototypeOf(t);
        var i;
        (function (t) {
          return "id" in t && "defaults" in t;
        })(e) && (i = this.register(e));
        var s = this.items,
            n = t.id,
            o = this.scope + "." + n;
        if (!n) throw new Error("class does not have id: " + t);
        return n in s || (s[n] = t, function (t, e, i) {
          var s = m(Object.create(null), [i ? ne.get(i) : {}, ne.get(e), t.defaults]);
          ne.set(e, s), t.defaultRoutes && function (t, e) {
            Object.keys(e).forEach(function (i) {
              var s = i.split("."),
                  n = s.pop(),
                  o = [t].concat(s).join("."),
                  a = e[i].split("."),
                  r = a.pop(),
                  l = a.join(".");
              ne.route(o, n, l, r);
            });
          }(e, t.defaultRoutes);
          t.descriptors && ne.describe(e, t.descriptors);
        }(t, o, i), this.override && ne.override(t.id, t.overrides)), o;
      }
    }, {
      key: "get",
      value: function get(t) {
        return this.items[t];
      }
    }, {
      key: "unregister",
      value: function unregister(t) {
        var e = this.items,
            i = t.id,
            s = this.scope;
        i in e && delete e[i], s && i in ne[s] && (delete ne[s][i], this.override && delete te[i]);
      }
    }]);

    return Ys;
  }();

  var Us = new ( /*#__PURE__*/function () {
    function _class3() {
      _classCallCheck(this, _class3);

      this.controllers = new Ys(Ls, "datasets", !0), this.elements = new Ys(Es, "elements"), this.plugins = new Ys(Object, "plugins"), this.scales = new Ys($s, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements];
    }

    _createClass(_class3, [{
      key: "add",
      value: function add() {
        for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          t[_key4] = arguments[_key4];
        }

        this._each("register", t);
      }
    }, {
      key: "remove",
      value: function remove() {
        for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          t[_key5] = arguments[_key5];
        }

        this._each("unregister", t);
      }
    }, {
      key: "addControllers",
      value: function addControllers() {
        for (var _len6 = arguments.length, t = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          t[_key6] = arguments[_key6];
        }

        this._each("register", t, this.controllers);
      }
    }, {
      key: "addElements",
      value: function addElements() {
        for (var _len7 = arguments.length, t = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          t[_key7] = arguments[_key7];
        }

        this._each("register", t, this.elements);
      }
    }, {
      key: "addPlugins",
      value: function addPlugins() {
        for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          t[_key8] = arguments[_key8];
        }

        this._each("register", t, this.plugins);
      }
    }, {
      key: "addScales",
      value: function addScales() {
        for (var _len9 = arguments.length, t = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          t[_key9] = arguments[_key9];
        }

        this._each("register", t, this.scales);
      }
    }, {
      key: "getController",
      value: function getController(t) {
        return this._get(t, this.controllers, "controller");
      }
    }, {
      key: "getElement",
      value: function getElement(t) {
        return this._get(t, this.elements, "element");
      }
    }, {
      key: "getPlugin",
      value: function getPlugin(t) {
        return this._get(t, this.plugins, "plugin");
      }
    }, {
      key: "getScale",
      value: function getScale(t) {
        return this._get(t, this.scales, "scale");
      }
    }, {
      key: "removeControllers",
      value: function removeControllers() {
        for (var _len10 = arguments.length, t = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          t[_key10] = arguments[_key10];
        }

        this._each("unregister", t, this.controllers);
      }
    }, {
      key: "removeElements",
      value: function removeElements() {
        for (var _len11 = arguments.length, t = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
          t[_key11] = arguments[_key11];
        }

        this._each("unregister", t, this.elements);
      }
    }, {
      key: "removePlugins",
      value: function removePlugins() {
        for (var _len12 = arguments.length, t = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          t[_key12] = arguments[_key12];
        }

        this._each("unregister", t, this.plugins);
      }
    }, {
      key: "removeScales",
      value: function removeScales() {
        for (var _len13 = arguments.length, t = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
          t[_key13] = arguments[_key13];
        }

        this._each("unregister", t, this.scales);
      }
    }, {
      key: "_each",
      value: function _each(t, e, i) {
        var _this7 = this;

        _toConsumableArray(e).forEach(function (e) {
          var s = i || _this7._getRegistryForType(e);

          i || s.isForType(e) || s === _this7.plugins && e.id ? _this7._exec(t, s, e) : d(e, function (e) {
            var s = i || _this7._getRegistryForType(e);

            _this7._exec(t, s, e);
          });
        });
      }
    }, {
      key: "_exec",
      value: function _exec(t, e, i) {
        var s = w(t);
        c(i["before" + s], [], i), e[t](i), c(i["after" + s], [], i);
      }
    }, {
      key: "_getRegistryForType",
      value: function _getRegistryForType(t) {
        for (var _e36 = 0; _e36 < this._typedRegistries.length; _e36++) {
          var _i29 = this._typedRegistries[_e36];
          if (_i29.isForType(t)) return _i29;
        }

        return this.plugins;
      }
    }, {
      key: "_get",
      value: function _get(t, e, i) {
        var s = e.get(t);
        if (void 0 === s) throw new Error('"' + t + '" is not a registered ' + i + ".");
        return s;
      }
    }]);

    return _class3;
  }())();

  var Xs = /*#__PURE__*/function () {
    function Xs() {
      _classCallCheck(this, Xs);

      this._init = [];
    }

    _createClass(Xs, [{
      key: "notify",
      value: function notify(t, e, i, s) {
        "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));

        var n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
            o = this._notify(n, t, e, i);

        return "afterDestroy" === e && (this._notify(n, t, "stop"), this._notify(this._init, t, "uninstall")), o;
      }
    }, {
      key: "_notify",
      value: function _notify(t, e, i, s) {
        s = s || {};

        var _iterator21 = _createForOfIteratorHelper(t),
            _step21;

        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var _n21 = _step21.value;
            var _t39 = _n21.plugin;
            if (!1 === c(_t39[i], [e, s, _n21.options], _t39) && s.cancelable) return !1;
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }

        return !0;
      }
    }, {
      key: "invalidate",
      value: function invalidate() {
        i(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
      }
    }, {
      key: "_descriptors",
      value: function _descriptors(t) {
        if (this._cache) return this._cache;

        var e = this._cache = this._createDescriptors(t);

        return this._notifyStateChanges(t), e;
      }
    }, {
      key: "_createDescriptors",
      value: function _createDescriptors(t, e) {
        var i = t && t.config,
            s = r(i.options && i.options.plugins, {}),
            n = function (t) {
          var e = {},
              i = [],
              s = Object.keys(Us.plugins.items);

          for (var _t40 = 0; _t40 < s.length; _t40++) {
            i.push(Us.getPlugin(s[_t40]));
          }

          var n = t.plugins || [];

          for (var _t41 = 0; _t41 < n.length; _t41++) {
            var _s29 = n[_t41];
            -1 === i.indexOf(_s29) && (i.push(_s29), e[_s29.id] = !0);
          }

          return {
            plugins: i,
            localIds: e
          };
        }(i);

        return !1 !== s || e ? function (t, _ref7, s, n) {
          var e = _ref7.plugins,
              i = _ref7.localIds;
          var o = [],
              a = t.getContext();

          var _iterator22 = _createForOfIteratorHelper(e),
              _step22;

          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var _r10 = _step22.value;

              var _e37 = _r10.id,
                  _l11 = qs(s[_e37], n);

              null !== _l11 && o.push({
                plugin: _r10,
                options: Ks(t.config, {
                  plugin: _r10,
                  local: i[_e37]
                }, _l11, a)
              });
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }

          return o;
        }(t, n, s, e) : [];
      }
    }, {
      key: "_notifyStateChanges",
      value: function _notifyStateChanges(t) {
        var e = this._oldCache || [],
            i = this._cache,
            s = function s(t, e) {
          return t.filter(function (t) {
            return !e.some(function (e) {
              return t.plugin.id === e.plugin.id;
            });
          });
        };

        this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
      }
    }]);

    return Xs;
  }();

  function qs(t, e) {
    return e || !1 !== t ? !0 === t ? {} : t : null;
  }

  function Ks(t, _ref8, s, n) {
    var e = _ref8.plugin,
        i = _ref8.local;
    var o = t.pluginScopeKeys(e),
        a = t.getOptionScopes(s, o);
    return i && e.defaults && a.push(e.defaults), t.createResolver(a, n, [""], {
      scriptable: !1,
      indexable: !1,
      allKeys: !0
    });
  }

  function Gs(t, e) {
    var i = ne.datasets[t] || {};
    return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x";
  }

  function Zs(t, e) {
    return "x" === t || "y" === t ? t : e.axis || ("top" === (i = e.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.charAt(0).toLowerCase();
    var i;
  }

  function Js(t) {
    var e = t.options || (t.options = {});
    e.plugins = r(e.plugins, {}), e.scales = function (t, e) {
      var i = te[t.type] || {
        scales: {}
      },
          s = e.scales || {},
          o = Gs(t.type, e),
          a = Object.create(null),
          r = Object.create(null);
      return Object.keys(s).forEach(function (t) {
        var e = s[t];
        if (!n(e)) return console.error("Invalid scale configuration for scale: ".concat(t));
        if (e._proxy) return console.warn("Ignoring resolver passed as options for scale: ".concat(t));

        var l = Zs(t, e),
            h = function (t, e) {
          return t === e ? "_index_" : "_value_";
        }(l, o),
            c = i.scales || {};

        a[l] = a[l] || t, r[t] = b(Object.create(null), [{
          axis: l
        }, e, c[l], c[h]]);
      }), t.data.datasets.forEach(function (i) {
        var n = i.type || t.type,
            o = i.indexAxis || Gs(n, e),
            l = (te[n] || {}).scales || {};
        Object.keys(l).forEach(function (t) {
          var e = function (t, e) {
            var i = t;
            return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i;
          }(t, o),
              n = i[e + "AxisID"] || a[e] || e;

          r[n] = r[n] || Object.create(null), b(r[n], [{
            axis: e
          }, s[n], l[t]]);
        });
      }), Object.keys(r).forEach(function (t) {
        var e = r[t];
        b(e, [ne.scales[e.type], ne.scale]);
      }), r;
    }(t, e);
  }

  function Qs(t) {
    return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t;
  }

  var tn = new Map(),
      en = new Set();

  function sn(t, e) {
    var i = tn.get(t);
    return i || (i = e(), tn.set(t, i), en.add(i)), i;
  }

  var nn = function nn(t, e, i) {
    var s = y(e, i);
    void 0 !== s && t.add(s);
  };

  var on = /*#__PURE__*/function () {
    function on(t) {
      _classCallCheck(this, on);

      this._config = function (t) {
        return (t = t || {}).data = Qs(t.data), Js(t), t;
      }(t), this._scopeCache = new Map(), this._resolverCache = new Map();
    }

    _createClass(on, [{
      key: "update",
      value: function update() {
        var t = this._config;
        this.clearCache(), Js(t);
      }
    }, {
      key: "clearCache",
      value: function clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear();
      }
    }, {
      key: "datasetScopeKeys",
      value: function datasetScopeKeys(t) {
        return sn(t, function () {
          return [["datasets.".concat(t), ""]];
        });
      }
    }, {
      key: "datasetAnimationScopeKeys",
      value: function datasetAnimationScopeKeys(t, e) {
        return sn("".concat(t, ".transition.").concat(e), function () {
          return [["datasets.".concat(t, ".transitions.").concat(e), "transitions.".concat(e)], ["datasets.".concat(t), ""]];
        });
      }
    }, {
      key: "datasetElementScopeKeys",
      value: function datasetElementScopeKeys(t, e) {
        return sn("".concat(t, "-").concat(e), function () {
          return [["datasets.".concat(t, ".elements.").concat(e), "datasets.".concat(t), "elements.".concat(e), ""]];
        });
      }
    }, {
      key: "pluginScopeKeys",
      value: function pluginScopeKeys(t) {
        var e = t.id;
        return sn("".concat(this.type, "-plugin-").concat(e), function () {
          return [["plugins.".concat(e)].concat(_toConsumableArray(t.additionalOptionScopes || []))];
        });
      }
    }, {
      key: "_cachedScopes",
      value: function _cachedScopes(t, e) {
        var i = this._scopeCache;
        var s = i.get(t);
        return s && !e || (s = new Map(), i.set(t, s)), s;
      }
    }, {
      key: "getOptionScopes",
      value: function getOptionScopes(t, e, i) {
        var s = this.options,
            n = this.type,
            o = this._cachedScopes(t, i),
            a = o.get(e);

        if (a) return a;
        var r = new Set();
        e.forEach(function (e) {
          t && (r.add(t), e.forEach(function (e) {
            return nn(r, t, e);
          })), e.forEach(function (t) {
            return nn(r, s, t);
          }), e.forEach(function (t) {
            return nn(r, te[n] || {}, t);
          }), e.forEach(function (t) {
            return nn(r, ne, t);
          }), e.forEach(function (t) {
            return nn(r, ee, t);
          });
        });
        var l = Array.from(r);
        return 0 === l.length && l.push(Object.create(null)), en.has(e) && o.set(e, l), l;
      }
    }, {
      key: "chartOptionScopes",
      value: function chartOptionScopes() {
        var t = this.options,
            e = this.type;
        return [t, te[e] || {}, ne.datasets[e] || {}, {
          type: e
        }, ne, ee];
      }
    }, {
      key: "resolveNamedOptions",
      value: function resolveNamedOptions(t, e, i) {
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [""];

        var o = {
          $shared: !0
        },
            _an = an(this._resolverCache, t, n),
            a = _an.resolver,
            r = _an.subPrefixes;

        var l = a;

        if (function (t, e) {
          var _Ie = Ie(t),
              i = _Ie.isScriptable,
              n = _Ie.isIndexable;

          var _iterator23 = _createForOfIteratorHelper(e),
              _step23;

          try {
            for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
              var _o22 = _step23.value;

              var _e38 = i(_o22),
                  _a15 = n(_o22),
                  _r11 = (_a15 || _e38) && t[_o22];

              if (_e38 && (k(_r11) || rn(_r11)) || _a15 && s(_r11)) return !0;
            }
          } catch (err) {
            _iterator23.e(err);
          } finally {
            _iterator23.f();
          }

          return !1;
        }(a, e)) {
          o.$shared = !1;
          l = Re(a, i = k(i) ? i() : i, this.createResolver(t, i, r));
        }

        var _iterator24 = _createForOfIteratorHelper(e),
            _step24;

        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _t42 = _step24.value;
            o[_t42] = l[_t42];
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }

        return o;
      }
    }, {
      key: "createResolver",
      value: function createResolver(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [""];
        var s = arguments.length > 3 ? arguments[3] : undefined;

        var _an2 = an(this._resolverCache, t, i),
            o = _an2.resolver;

        return n(e) ? Re(o, e, void 0, s) : o;
      }
    }, {
      key: "platform",
      get: function get() {
        return this._config.platform;
      }
    }, {
      key: "type",
      get: function get() {
        return this._config.type;
      },
      set: function set(t) {
        this._config.type = t;
      }
    }, {
      key: "data",
      get: function get() {
        return this._config.data;
      },
      set: function set(t) {
        this._config.data = Qs(t);
      }
    }, {
      key: "options",
      get: function get() {
        return this._config.options;
      },
      set: function set(t) {
        this._config.options = t;
      }
    }, {
      key: "plugins",
      get: function get() {
        return this._config.plugins;
      }
    }]);

    return on;
  }();

  function an(t, e, i) {
    var s = t.get(e);
    s || (s = new Map(), t.set(e, s));
    var n = i.join();
    var o = s.get(n);

    if (!o) {
      o = {
        resolver: Ee(e, i),
        subPrefixes: i.filter(function (t) {
          return !t.toLowerCase().includes("hover");
        })
      }, s.set(n, o);
    }

    return o;
  }

  var rn = function rn(t) {
    return n(t) && Object.getOwnPropertyNames(t).reduce(function (e, i) {
      return e || k(t[i]);
    }, !1);
  };

  var ln = ["top", "bottom", "left", "right", "chartArea"];

  function hn(t, e) {
    return "top" === t || "bottom" === t || -1 === ln.indexOf(t) && "x" === e;
  }

  function cn(t, e) {
    return function (i, s) {
      return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t];
    };
  }

  function dn(t) {
    var e = t.chart,
        i = e.options.animation;
    e.notifyPlugins("afterRender"), c(i && i.onComplete, [t], e);
  }

  function un(t) {
    var e = t.chart,
        i = e.options.animation;
    c(i && i.onProgress, [t], e);
  }

  function fn(t) {
    return oe() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t;
  }

  var gn = {},
      pn = function pn(t) {
    var e = fn(t);
    return Object.values(gn).filter(function (t) {
      return t.canvas === e;
    }).pop();
  };

  function mn(t, e, i) {
    var s = Object.keys(t);

    for (var _i30 = 0, _s30 = s; _i30 < _s30.length; _i30++) {
      var _n22 = _s30[_i30];

      var _s31 = +_n22;

      if (_s31 >= e) {
        var _o23 = t[_n22];
        delete t[_n22], (i > 0 || _s31 > e) && (t[_s31 + i] = _o23);
      }
    }
  }

  var bn = /*#__PURE__*/function () {
    function bn(t, i) {
      var _this8 = this;

      _classCallCheck(this, bn);

      var s = this.config = new on(i),
          n = fn(t),
          o = pn(n);
      if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
      var a = s.createResolver(s.chartOptionScopes(), this.getContext());
      this.platform = new (s.platform || gs(n))(), this.platform.updateConfig(s);
      var r = this.platform.acquireContext(n, a.aspectRatio),
          l = r && r.canvas,
          h = l && l.height,
          c = l && l.width;
      this.id = e(), this.ctx = r, this.canvas = l, this.width = c, this.height = h, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Xs(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = ct(function (t) {
        return _this8.update(t);
      }, a.resizeDelay || 0), this._dataChanges = [], gn[this.id] = this, r && l ? (mt.listen(this, "complete", dn), mt.listen(this, "progress", un), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item");
    }

    _createClass(bn, [{
      key: "_initialize",
      value: function _initialize() {
        return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : pe(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
      }
    }, {
      key: "clear",
      value: function clear() {
        return we(this.canvas, this.ctx), this;
      }
    }, {
      key: "stop",
      value: function stop() {
        return mt.stop(this), this;
      }
    }, {
      key: "resize",
      value: function resize(t, e) {
        mt.running(this) ? this._resizeBeforeDraw = {
          width: t,
          height: e
        } : this._resize(t, e);
      }
    }, {
      key: "_resize",
      value: function _resize(t, e) {
        var i = this.options,
            s = this.canvas,
            n = i.maintainAspectRatio && this.aspectRatio,
            o = this.platform.getMaximumSize(s, t, e, n),
            a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
            r = this.width ? "resize" : "attach";
        this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, pe(this, a, !0) && (this.notifyPlugins("resize", {
          size: o
        }), c(i.onResize, [this, o], this), this.attached && this._doResize(r) && this.render());
      }
    }, {
      key: "ensureScalesHaveIDs",
      value: function ensureScalesHaveIDs() {
        d(this.options.scales || {}, function (t, e) {
          t.id = e;
        });
      }
    }, {
      key: "buildOrUpdateScales",
      value: function buildOrUpdateScales() {
        var _this9 = this;

        var t = this.options,
            e = t.scales,
            i = this.scales,
            s = Object.keys(i).reduce(function (t, e) {
          return t[e] = !1, t;
        }, {});
        var n = [];
        e && (n = n.concat(Object.keys(e).map(function (t) {
          var i = e[t],
              s = Zs(t, i),
              n = "r" === s,
              o = "x" === s;
          return {
            options: i,
            dposition: n ? "chartArea" : o ? "bottom" : "left",
            dtype: n ? "radialLinear" : o ? "category" : "linear"
          };
        }))), d(n, function (e) {
          var n = e.options,
              o = n.id,
              a = Zs(o, n),
              l = r(n.type, e.dtype);
          void 0 !== n.position && hn(n.position, a) === hn(e.dposition) || (n.position = e.dposition), s[o] = !0;
          var h = null;
          if (o in i && i[o].type === l) h = i[o];else {
            h = new (Us.getScale(l))({
              id: o,
              type: l,
              ctx: _this9.ctx,
              chart: _this9
            }), i[h.id] = h;
          }
          h.init(n, t);
        }), d(s, function (t, e) {
          t || delete i[e];
        }), d(i, function (t) {
          Zi.configure(_this9, t, t.options), Zi.addBox(_this9, t);
        });
      }
    }, {
      key: "_updateMetasets",
      value: function _updateMetasets() {
        var t = this._metasets,
            e = this.data.datasets.length,
            i = t.length;

        if (t.sort(function (t, e) {
          return t.index - e.index;
        }), i > e) {
          for (var _t43 = e; _t43 < i; ++_t43) {
            this._destroyDatasetMeta(_t43);
          }

          t.splice(e, i - e);
        }

        this._sortedMetasets = t.slice(0).sort(cn("order", "index"));
      }
    }, {
      key: "_removeUnreferencedMetasets",
      value: function _removeUnreferencedMetasets() {
        var _this10 = this;

        var t = this._metasets,
            e = this.data.datasets;
        t.length > e.length && delete this._stacks, t.forEach(function (t, i) {
          0 === e.filter(function (e) {
            return e === t._dataset;
          }).length && _this10._destroyDatasetMeta(i);
        });
      }
    }, {
      key: "buildOrUpdateControllers",
      value: function buildOrUpdateControllers() {
        var t = [],
            e = this.data.datasets;
        var i, s;

        for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
          var _s32 = e[i];

          var _n23 = this.getDatasetMeta(i);

          var _o24 = _s32.type || this.config.type;

          if (_n23.type && _n23.type !== _o24 && (this._destroyDatasetMeta(i), _n23 = this.getDatasetMeta(i)), _n23.type = _o24, _n23.indexAxis = _s32.indexAxis || Gs(_o24, this.options), _n23.order = _s32.order || 0, _n23.index = i, _n23.label = "" + _s32.label, _n23.visible = this.isDatasetVisible(i), _n23.controller) _n23.controller.updateIndex(i), _n23.controller.linkScales();else {
            var _e39 = Us.getController(_o24),
                _ne$datasets$_o = ne.datasets[_o24],
                _s33 = _ne$datasets$_o.datasetElementType,
                _a16 = _ne$datasets$_o.dataElementType;

            Object.assign(_e39.prototype, {
              dataElementType: Us.getElement(_a16),
              datasetElementType: _s33 && Us.getElement(_s33)
            }), _n23.controller = new _e39(this, i), t.push(_n23.controller);
          }
        }

        return this._updateMetasets(), t;
      }
    }, {
      key: "_resetElements",
      value: function _resetElements() {
        var _this11 = this;

        d(this.data.datasets, function (t, e) {
          _this11.getDatasetMeta(e).controller.reset();
        }, this);
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElements(), this.notifyPlugins("reset");
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this.config;
        e.update();
        var i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
            s = this._animationsDisabled = !i.animation;
        if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", {
          mode: t,
          cancelable: !0
        })) return;
        var n = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        var o = 0;

        for (var _t44 = 0, _e40 = this.data.datasets.length; _t44 < _e40; _t44++) {
          var _this$getDatasetMeta = this.getDatasetMeta(_t44),
              _e41 = _this$getDatasetMeta.controller,
              _i31 = !s && -1 === n.indexOf(_e41);

          _e41.buildOrUpdateElements(_i31), o = Math.max(+_e41.getMaxOverflow(), o);
        }

        o = this._minPadding = i.layout.autoPadding ? o : 0, this._updateLayout(o), s || d(n, function (t) {
          t.reset();
        }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
          mode: t
        }), this._layers.sort(cn("z", "_idx"));
        var a = this._active,
            r = this._lastEvent;
        r ? this._eventHandler(r, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
      }
    }, {
      key: "_updateScales",
      value: function _updateScales() {
        var _this12 = this;

        d(this.scales, function (t) {
          Zi.removeBox(_this12, t);
        }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
      }
    }, {
      key: "_checkEventBindings",
      value: function _checkEventBindings() {
        var t = this.options,
            e = new Set(Object.keys(this._listeners)),
            i = new Set(t.events);
        S(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents());
      }
    }, {
      key: "_updateHiddenIndices",
      value: function _updateHiddenIndices() {
        var t = this._hiddenIndices,
            e = this._getUniformDataChanges() || [];

        var _iterator25 = _createForOfIteratorHelper(e),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _step25$value = _step25.value,
                _i32 = _step25$value.method,
                _s34 = _step25$value.start,
                _n24 = _step25$value.count;
            mn(t, _s34, "_removeElements" === _i32 ? -_n24 : _n24);
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }
    }, {
      key: "_getUniformDataChanges",
      value: function _getUniformDataChanges() {
        var t = this._dataChanges;
        if (!t || !t.length) return;
        this._dataChanges = [];

        var e = this.data.datasets.length,
            i = function i(e) {
          return new Set(t.filter(function (t) {
            return t[0] === e;
          }).map(function (t, e) {
            return e + "," + t.splice(1).join(",");
          }));
        },
            s = i(0);

        for (var _t45 = 1; _t45 < e; _t45++) {
          if (!S(s, i(_t45))) return;
        }

        return Array.from(s).map(function (t) {
          return t.split(",");
        }).map(function (t) {
          return {
            method: t[1],
            start: +t[2],
            count: +t[3]
          };
        });
      }
    }, {
      key: "_updateLayout",
      value: function _updateLayout(t) {
        var _this13 = this;

        if (!1 === this.notifyPlugins("beforeLayout", {
          cancelable: !0
        })) return;
        Zi.update(this, this.width, this.height, t);
        var e = this.chartArea,
            i = e.width <= 0 || e.height <= 0;
        this._layers = [], d(this.boxes, function (t) {
          var _this13$_layers;

          i && "chartArea" === t.position || (t.configure && t.configure(), (_this13$_layers = _this13._layers).push.apply(_this13$_layers, _toConsumableArray(t._layers())));
        }, this), this._layers.forEach(function (t, e) {
          t._idx = e;
        }), this.notifyPlugins("afterLayout");
      }
    }, {
      key: "_updateDatasets",
      value: function _updateDatasets(t) {
        if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
          mode: t,
          cancelable: !0
        })) {
          for (var _t46 = 0, _e42 = this.data.datasets.length; _t46 < _e42; ++_t46) {
            this.getDatasetMeta(_t46).controller.configure();
          }

          for (var _e43 = 0, _i33 = this.data.datasets.length; _e43 < _i33; ++_e43) {
            this._updateDataset(_e43, k(t) ? t({
              datasetIndex: _e43
            }) : t);
          }

          this.notifyPlugins("afterDatasetsUpdate", {
            mode: t
          });
        }
      }
    }, {
      key: "_updateDataset",
      value: function _updateDataset(t, e) {
        var i = this.getDatasetMeta(t),
            s = {
          meta: i,
          index: t,
          mode: e,
          cancelable: !0
        };
        !1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (i.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
      }
    }, {
      key: "render",
      value: function render() {
        !1 !== this.notifyPlugins("beforeRender", {
          cancelable: !0
        }) && (mt.has(this) ? this.attached && !mt.running(this) && mt.start(this) : (this.draw(), dn({
          chart: this
        })));
      }
    }, {
      key: "draw",
      value: function draw() {
        var t;

        if (this._resizeBeforeDraw) {
          var _this$_resizeBeforeDr = this._resizeBeforeDraw,
              _t47 = _this$_resizeBeforeDr.width,
              _e44 = _this$_resizeBeforeDr.height;
          this._resize(_t47, _e44), this._resizeBeforeDraw = null;
        }

        if (this.clear(), this.width <= 0 || this.height <= 0) return;
        if (!1 === this.notifyPlugins("beforeDraw", {
          cancelable: !0
        })) return;
        var e = this._layers;

        for (t = 0; t < e.length && e[t].z <= 0; ++t) {
          e[t].draw(this.chartArea);
        }

        for (this._drawDatasets(); t < e.length; ++t) {
          e[t].draw(this.chartArea);
        }

        this.notifyPlugins("afterDraw");
      }
    }, {
      key: "_getSortedDatasetMetas",
      value: function _getSortedDatasetMetas(t) {
        var e = this._sortedMetasets,
            i = [];
        var s, n;

        for (s = 0, n = e.length; s < n; ++s) {
          var _n25 = e[s];
          t && !_n25.visible || i.push(_n25);
        }

        return i;
      }
    }, {
      key: "getSortedVisibleDatasetMetas",
      value: function getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
      }
    }, {
      key: "_drawDatasets",
      value: function _drawDatasets() {
        if (!1 === this.notifyPlugins("beforeDatasetsDraw", {
          cancelable: !0
        })) return;
        var t = this.getSortedVisibleDatasetMetas();

        for (var _e45 = t.length - 1; _e45 >= 0; --_e45) {
          this._drawDataset(t[_e45]);
        }

        this.notifyPlugins("afterDatasetsDraw");
      }
    }, {
      key: "_drawDataset",
      value: function _drawDataset(t) {
        var e = this.ctx,
            i = t._clip,
            s = !i.disabled,
            n = this.chartArea,
            o = {
          meta: t,
          index: t.index,
          cancelable: !0
        };
        !1 !== this.notifyPlugins("beforeDatasetDraw", o) && (s && Pe(e, {
          left: !1 === i.left ? 0 : n.left - i.left,
          right: !1 === i.right ? this.width : n.right + i.right,
          top: !1 === i.top ? 0 : n.top - i.top,
          bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom
        }), t.controller.draw(), s && De(e), o.cancelable = !1, this.notifyPlugins("afterDatasetDraw", o));
      }
    }, {
      key: "isPointInArea",
      value: function isPointInArea(t) {
        return Se(t, this.chartArea, this._minPadding);
      }
    }, {
      key: "getElementsAtEventForMode",
      value: function getElementsAtEventForMode(t, e, i, s) {
        var n = Vi.modes[e];
        return "function" == typeof n ? n(this, t, i, s) : [];
      }
    }, {
      key: "getDatasetMeta",
      value: function getDatasetMeta(t) {
        var e = this.data.datasets[t],
            i = this._metasets;
        var s = i.filter(function (t) {
          return t && t._dataset === e;
        }).pop();
        return s || (s = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: e && e.order || 0,
          index: t,
          _dataset: e,
          _parsed: [],
          _sorted: !1
        }, i.push(s)), s;
      }
    }, {
      key: "getContext",
      value: function getContext() {
        return this.$context || (this.$context = _i(null, {
          chart: this,
          type: "chart"
        }));
      }
    }, {
      key: "getVisibleDatasetCount",
      value: function getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
      }
    }, {
      key: "isDatasetVisible",
      value: function isDatasetVisible(t) {
        var e = this.data.datasets[t];
        if (!e) return !1;
        var i = this.getDatasetMeta(t);
        return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
      }
    }, {
      key: "setDatasetVisibility",
      value: function setDatasetVisibility(t, e) {
        this.getDatasetMeta(t).hidden = !e;
      }
    }, {
      key: "toggleDataVisibility",
      value: function toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t];
      }
    }, {
      key: "getDataVisibility",
      value: function getDataVisibility(t) {
        return !this._hiddenIndices[t];
      }
    }, {
      key: "_updateVisibility",
      value: function _updateVisibility(t, e, i) {
        var s = i ? "show" : "hide",
            n = this.getDatasetMeta(t),
            o = n.controller._resolveAnimations(void 0, s);

        M(e) ? (n.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), o.update(n, {
          visible: i
        }), this.update(function (e) {
          return e.datasetIndex === t ? s : void 0;
        }));
      }
    }, {
      key: "hide",
      value: function hide(t, e) {
        this._updateVisibility(t, e, !1);
      }
    }, {
      key: "show",
      value: function show(t, e) {
        this._updateVisibility(t, e, !0);
      }
    }, {
      key: "_destroyDatasetMeta",
      value: function _destroyDatasetMeta(t) {
        var e = this._metasets[t];
        e && e.controller && e.controller._destroy(), delete this._metasets[t];
      }
    }, {
      key: "_stop",
      value: function _stop() {
        var t, e;

        for (this.stop(), mt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) {
          this._destroyDatasetMeta(t);
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.notifyPlugins("beforeDestroy");
        var t = this.canvas,
            e = this.ctx;
        this._stop(), this.config.clearCache(), t && (this.unbindEvents(), we(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), this.notifyPlugins("destroy"), delete gn[this.id], this.notifyPlugins("afterDestroy");
      }
    }, {
      key: "toBase64Image",
      value: function toBase64Image() {
        var _this$canvas;

        return (_this$canvas = this.canvas).toDataURL.apply(_this$canvas, arguments);
      }
    }, {
      key: "bindEvents",
      value: function bindEvents() {
        this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
      }
    }, {
      key: "bindUserEvents",
      value: function bindUserEvents() {
        var _this14 = this;

        var t = this._listeners,
            e = this.platform,
            i = function i(_i34, s) {
          e.addEventListener(_this14, _i34, s), t[_i34] = s;
        },
            s = function s(t, e, i) {
          t.offsetX = e, t.offsetY = i, _this14._eventHandler(t);
        };

        d(this.options.events, function (t) {
          return i(t, s);
        });
      }
    }, {
      key: "bindResponsiveEvents",
      value: function bindResponsiveEvents() {
        var _this15 = this;

        this._responsiveListeners || (this._responsiveListeners = {});

        var t = this._responsiveListeners,
            e = this.platform,
            i = function i(_i35, s) {
          e.addEventListener(_this15, _i35, s), t[_i35] = s;
        },
            s = function s(i, _s35) {
          t[i] && (e.removeEventListener(_this15, i, _s35), delete t[i]);
        },
            n = function n(t, e) {
          _this15.canvas && _this15.resize(t, e);
        };

        var o;

        var a = function a() {
          s("attach", a), _this15.attached = !0, _this15.resize(), i("resize", n), i("detach", o);
        };

        o = function o() {
          _this15.attached = !1, s("resize", n), _this15._stop(), _this15._resize(0, 0), i("attach", a);
        }, e.isAttached(this.canvas) ? a() : o();
      }
    }, {
      key: "unbindEvents",
      value: function unbindEvents() {
        var _this16 = this;

        d(this._listeners, function (t, e) {
          _this16.platform.removeEventListener(_this16, e, t);
        }), this._listeners = {}, d(this._responsiveListeners, function (t, e) {
          _this16.platform.removeEventListener(_this16, e, t);
        }), this._responsiveListeners = void 0;
      }
    }, {
      key: "updateHoverStyle",
      value: function updateHoverStyle(t, e, i) {
        var s = i ? "set" : "remove";
        var n, o, a, r;

        for ("dataset" === e && (n = this.getDatasetMeta(t[0].datasetIndex), n.controller["_" + s + "DatasetHoverStyle"]()), a = 0, r = t.length; a < r; ++a) {
          o = t[a];

          var _e46 = o && this.getDatasetMeta(o.datasetIndex).controller;

          _e46 && _e46[s + "HoverStyle"](o.element, o.datasetIndex, o.index);
        }
      }
    }, {
      key: "getActiveElements",
      value: function getActiveElements() {
        return this._active || [];
      }
    }, {
      key: "setActiveElements",
      value: function setActiveElements(t) {
        var _this17 = this;

        var e = this._active || [],
            i = t.map(function (_ref9) {
          var t = _ref9.datasetIndex,
              e = _ref9.index;

          var i = _this17.getDatasetMeta(t);

          if (!i) throw new Error("No dataset found at index " + t);
          return {
            datasetIndex: t,
            element: i.data[e],
            index: e
          };
        });
        !u(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e));
      }
    }, {
      key: "notifyPlugins",
      value: function notifyPlugins(t, e, i) {
        return this._plugins.notify(this, t, e, i);
      }
    }, {
      key: "_updateHoverStyles",
      value: function _updateHoverStyles(t, e, i) {
        var s = this.options.hover,
            n = function n(t, e) {
          return t.filter(function (t) {
            return !e.some(function (e) {
              return t.datasetIndex === e.datasetIndex && t.index === e.index;
            });
          });
        },
            o = n(e, t),
            a = i ? t : n(t, e);

        o.length && this.updateHoverStyle(o, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
      }
    }, {
      key: "_eventHandler",
      value: function _eventHandler(t, e) {
        var _this18 = this;

        var i = {
          event: t,
          replay: e,
          cancelable: !0,
          inChartArea: this.isPointInArea(t)
        },
            s = function s(e) {
          return (e.options.events || _this18.options.events).includes(t.native.type);
        };

        if (!1 === this.notifyPlugins("beforeEvent", i, s)) return;

        var n = this._handleEvent(t, e, i.inChartArea);

        return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (n || i.changed) && this.render(), this;
      }
    }, {
      key: "_handleEvent",
      value: function _handleEvent(t, e, i) {
        var _this$_active = this._active,
            s = _this$_active === void 0 ? [] : _this$_active,
            n = this.options,
            o = e,
            a = this._getActiveElements(t, s, i, o),
            r = P(t),
            l = function (t, e, i, s) {
          return i && "mouseout" !== t.type ? s ? e : t : null;
        }(t, this._lastEvent, i, r);

        i && (this._lastEvent = null, c(n.onHover, [t, a, this], this), r && c(n.onClick, [t, a, this], this));
        var h = !u(a, s);
        return (h || e) && (this._active = a, this._updateHoverStyles(a, s, e)), this._lastEvent = l, h;
      }
    }, {
      key: "_getActiveElements",
      value: function _getActiveElements(t, e, i, s) {
        if ("mouseout" === t.type) return [];
        if (!i) return e;
        var n = this.options.hover;
        return this.getElementsAtEventForMode(t, n.mode, n, s);
      }
    }, {
      key: "aspectRatio",
      get: function get() {
        var _this$options8 = this.options,
            t = _this$options8.aspectRatio,
            e = _this$options8.maintainAspectRatio,
            s = this.width,
            n = this.height,
            o = this._aspectRatio;
        return i(t) ? e && o ? o : n ? s / n : null : t;
      }
    }, {
      key: "data",
      get: function get() {
        return this.config.data;
      },
      set: function set(t) {
        this.config.data = t;
      }
    }, {
      key: "options",
      get: function get() {
        return this._options;
      },
      set: function set(t) {
        this.config.options = t;
      }
    }]);

    return bn;
  }();

  var xn = function xn() {
    return d(bn.instances, function (t) {
      return t._plugins.invalidate();
    });
  },
      _n = !0;

  function yn() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
  }

  Object.defineProperties(bn, {
    defaults: {
      enumerable: _n,
      value: ne
    },
    instances: {
      enumerable: _n,
      value: gn
    },
    overrides: {
      enumerable: _n,
      value: te
    },
    registry: {
      enumerable: _n,
      value: Us
    },
    version: {
      enumerable: _n,
      value: "3.9.1"
    },
    getChart: {
      enumerable: _n,
      value: pn
    },
    register: {
      enumerable: _n,
      value: function value() {
        Us.add.apply(Us, arguments), xn();
      }
    },
    unregister: {
      enumerable: _n,
      value: function value() {
        Us.remove.apply(Us, arguments), xn();
      }
    }
  });

  var vn = /*#__PURE__*/function () {
    function vn(t) {
      _classCallCheck(this, vn);

      this.options = t || {};
    }

    _createClass(vn, [{
      key: "init",
      value: function init(t) {}
    }, {
      key: "formats",
      value: function formats() {
        return yn();
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        return yn();
      }
    }, {
      key: "format",
      value: function format(t, e) {
        return yn();
      }
    }, {
      key: "add",
      value: function add(t, e, i) {
        return yn();
      }
    }, {
      key: "diff",
      value: function diff(t, e, i) {
        return yn();
      }
    }, {
      key: "startOf",
      value: function startOf(t, e, i) {
        return yn();
      }
    }, {
      key: "endOf",
      value: function endOf(t, e) {
        return yn();
      }
    }]);

    return vn;
  }();

  vn.override = function (t) {
    Object.assign(vn.prototype, t);
  };

  var wn = {
    _date: vn
  };

  function Mn(t) {
    var e = t.iScale,
        i = function (t, e) {
      if (!t._cache.$bar) {
        var _i36 = t.getMatchingVisibleMetas(e);

        var _s36 = [];

        for (var _e47 = 0, _n26 = _i36.length; _e47 < _n26; _e47++) {
          _s36 = _s36.concat(_i36[_e47].controller.getAllParsedValues(t));
        }

        t._cache.$bar = rt(_s36.sort(function (t, e) {
          return t - e;
        }));
      }

      return t._cache.$bar;
    }(e, t.type);

    var s,
        n,
        o,
        a,
        r = e._length;

    var l = function l() {
      32767 !== o && -32768 !== o && (M(a) && (r = Math.min(r, Math.abs(o - a) || r)), a = o);
    };

    for (s = 0, n = i.length; s < n; ++s) {
      o = e.getPixelForValue(i[s]), l();
    }

    for (a = void 0, s = 0, n = e.ticks.length; s < n; ++s) {
      o = e.getPixelForTick(s), l();
    }

    return r;
  }

  function kn(t, e, i, n) {
    return s(t) ? function (t, e, i, s) {
      var n = i.parse(t[0], s),
          o = i.parse(t[1], s),
          a = Math.min(n, o),
          r = Math.max(n, o);
      var l = a,
          h = r;
      Math.abs(a) > Math.abs(r) && (l = r, h = a), e[i.axis] = h, e._custom = {
        barStart: l,
        barEnd: h,
        start: n,
        end: o,
        min: a,
        max: r
      };
    }(t, e, i, n) : e[i.axis] = i.parse(t, n), e;
  }

  function Sn(t, e, i, s) {
    var n = t.iScale,
        o = t.vScale,
        a = n.getLabels(),
        r = n === o,
        l = [];
    var h, c, d, u;

    for (h = i, c = i + s; h < c; ++h) {
      u = e[h], d = {}, d[n.axis] = r || n.parse(a[h], h), l.push(kn(u, d, o, h));
    }

    return l;
  }

  function Pn(t) {
    return t && void 0 !== t.barStart && void 0 !== t.barEnd;
  }

  function Dn(t, e, i, s) {
    var n = e.borderSkipped;
    var o = {};
    if (!n) return void (t.borderSkipped = o);
    if (!0 === n) return void (t.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    });

    var _ref10 = function (t) {
      var e, i, s, n, o;
      return t.horizontal ? (e = t.base > t.x, i = "left", s = "right") : (e = t.base < t.y, i = "bottom", s = "top"), e ? (n = "end", o = "start") : (n = "start", o = "end"), {
        start: i,
        end: s,
        reverse: e,
        top: n,
        bottom: o
      };
    }(t),
        a = _ref10.start,
        r = _ref10.end,
        l = _ref10.reverse,
        h = _ref10.top,
        c = _ref10.bottom;

    "middle" === n && i && (t.enableBorderRadius = !0, (i._top || 0) === s ? n = h : (i._bottom || 0) === s ? n = c : (o[On(c, a, r, l)] = !0, n = h)), o[On(n, a, r, l)] = !0, t.borderSkipped = o;
  }

  function On(t, e, i, s) {
    var n, o, a;
    return s ? (a = i, t = Cn(t = (n = t) === (o = e) ? a : n === a ? o : n, i, e)) : t = Cn(t, e, i), t;
  }

  function Cn(t, e, i) {
    return "start" === t ? e : "end" === t ? i : t;
  }

  function An(t, _ref11, i) {
    var e = _ref11.inflateAmount;
    t.inflateAmount = "auto" === e ? 1 === i ? .33 : 0 : e;
  }

  var Tn = /*#__PURE__*/function (_Ls) {
    _inherits(Tn, _Ls);

    var _super4 = _createSuper(Tn);

    function Tn() {
      _classCallCheck(this, Tn);

      return _super4.apply(this, arguments);
    }

    _createClass(Tn, [{
      key: "parsePrimitiveData",
      value: function parsePrimitiveData(t, e, i, s) {
        return Sn(t, e, i, s);
      }
    }, {
      key: "parseArrayData",
      value: function parseArrayData(t, e, i, s) {
        return Sn(t, e, i, s);
      }
    }, {
      key: "parseObjectData",
      value: function parseObjectData(t, e, i, s) {
        var n = t.iScale,
            o = t.vScale,
            _this$_parsing2 = this._parsing,
            _this$_parsing2$xAxis = _this$_parsing2.xAxisKey,
            a = _this$_parsing2$xAxis === void 0 ? "x" : _this$_parsing2$xAxis,
            _this$_parsing2$yAxis = _this$_parsing2.yAxisKey,
            r = _this$_parsing2$yAxis === void 0 ? "y" : _this$_parsing2$yAxis,
            l = "x" === n.axis ? a : r,
            h = "x" === o.axis ? a : r,
            c = [];
        var d, u, f, g;

        for (d = i, u = i + s; d < u; ++d) {
          g = e[d], f = {}, f[n.axis] = n.parse(y(g, l), d), c.push(kn(y(g, h), f, o, d));
        }

        return c;
      }
    }, {
      key: "updateRangeFromParsed",
      value: function updateRangeFromParsed(t, e, i, s) {
        _get2(_getPrototypeOf(Tn.prototype), "updateRangeFromParsed", this).call(this, t, e, i, s);

        var n = i._custom;
        n && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, n.min), t.max = Math.max(t.max, n.max));
      }
    }, {
      key: "getMaxOverflow",
      value: function getMaxOverflow() {
        return 0;
      }
    }, {
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta,
            i = e.iScale,
            s = e.vScale,
            n = this.getParsed(t),
            o = n._custom,
            a = Pn(o) ? "[" + o.start + ", " + o.end + "]" : "" + s.getLabelForValue(n[s.axis]);
        return {
          label: "" + i.getLabelForValue(n[i.axis]),
          value: a
        };
      }
    }, {
      key: "initialize",
      value: function initialize() {
        this.enableOptionSharing = !0, _get2(_getPrototypeOf(Tn.prototype), "initialize", this).call(this);
        this._cachedMeta.stack = this.getDataset().stack;
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this._cachedMeta;
        this.updateElements(e.data, 0, e.data.length, t);
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, s, n) {
        var o = "reset" === n,
            a = this.index,
            r = this._cachedMeta.vScale,
            l = r.getBasePixel(),
            h = r.isHorizontal(),
            c = this._getRuler(),
            _this$_getSharedOptio = this._getSharedOptions(e, n),
            d = _this$_getSharedOptio.sharedOptions,
            u = _this$_getSharedOptio.includeOptions;

        for (var _f3 = e; _f3 < e + s; _f3++) {
          var _e48 = this.getParsed(_f3),
              _s37 = o || i(_e48[r.axis]) ? {
            base: l,
            head: l
          } : this._calculateBarValuePixels(_f3),
              _g = this._calculateBarIndexPixels(_f3, c),
              _p = (_e48._stacks || {})[r.axis],
              _m = {
            horizontal: h,
            base: _s37.base,
            enableBorderRadius: !_p || Pn(_e48._custom) || a === _p._top || a === _p._bottom,
            x: h ? _s37.head : _g.center,
            y: h ? _g.center : _s37.head,
            height: h ? _g.size : Math.abs(_s37.size),
            width: h ? Math.abs(_s37.size) : _g.size
          };

          u && (_m.options = d || this.resolveDataElementOptions(_f3, t[_f3].active ? "active" : n));

          var _b = _m.options || t[_f3].options;

          Dn(_m, _b, _p, a), An(_m, _b, c.ratio), this.updateElement(t[_f3], _f3, _m, n);
        }
      }
    }, {
      key: "_getStacks",
      value: function _getStacks(t, e) {
        var s = this._cachedMeta.iScale,
            n = s.getMatchingVisibleMetas(this._type).filter(function (t) {
          return t.controller.options.grouped;
        }),
            o = s.options.stacked,
            a = [],
            r = function r(t) {
          var s = t.controller.getParsed(e),
              n = s && s[t.vScale.axis];
          if (i(n) || isNaN(n)) return !0;
        };

        var _iterator26 = _createForOfIteratorHelper(n),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var _i37 = _step26.value;
            if ((void 0 === e || !r(_i37)) && ((!1 === o || -1 === a.indexOf(_i37.stack) || void 0 === o && void 0 === _i37.stack) && a.push(_i37.stack), _i37.index === t)) break;
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }

        return a.length || a.push(void 0), a;
      }
    }, {
      key: "_getStackCount",
      value: function _getStackCount(t) {
        return this._getStacks(void 0, t).length;
      }
    }, {
      key: "_getStackIndex",
      value: function _getStackIndex(t, e, i) {
        var s = this._getStacks(t, i),
            n = void 0 !== e ? s.indexOf(e) : -1;

        return -1 === n ? s.length - 1 : n;
      }
    }, {
      key: "_getRuler",
      value: function _getRuler() {
        var t = this.options,
            e = this._cachedMeta,
            i = e.iScale,
            s = [];
        var n, o;

        for (n = 0, o = e.data.length; n < o; ++n) {
          s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
        }

        var a = t.barThickness;
        return {
          min: a || Mn(e),
          pixels: s,
          start: i._startPixel,
          end: i._endPixel,
          stackCount: this._getStackCount(),
          scale: i,
          grouped: t.grouped,
          ratio: a ? 1 : t.categoryPercentage * t.barPercentage
        };
      }
    }, {
      key: "_calculateBarValuePixels",
      value: function _calculateBarValuePixels(t) {
        var _this$_cachedMeta = this._cachedMeta,
            e = _this$_cachedMeta.vScale,
            s = _this$_cachedMeta._stacked,
            _this$options9 = this.options,
            n = _this$options9.base,
            o = _this$options9.minBarLength,
            a = n || 0,
            r = this.getParsed(t),
            l = r._custom,
            h = Pn(l);
        var c,
            d,
            u = r[e.axis],
            f = 0,
            g = s ? this.applyStack(e, r, s) : u;
        g !== u && (f = g - u, g = u), h && (u = l.barStart, g = l.barEnd - l.barStart, 0 !== u && z(u) !== z(l.barEnd) && (f = 0), f += u);
        var p = i(n) || h ? f : n;
        var m = e.getPixelForValue(p);

        if (c = this.chart.getDataVisibility(t) ? e.getPixelForValue(f + g) : m, d = c - m, Math.abs(d) < o) {
          d = function (t, e, i) {
            return 0 !== t ? z(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
          }(d, e, a) * o, u === a && (m -= d / 2);

          var _t48 = e.getPixelForDecimal(0),
              _i38 = e.getPixelForDecimal(1),
              _s38 = Math.min(_t48, _i38),
              _n27 = Math.max(_t48, _i38);

          m = Math.max(Math.min(m, _n27), _s38), c = m + d;
        }

        if (m === e.getPixelForValue(a)) {
          var _t49 = z(d) * e.getLineWidthForValue(a) / 2;

          m += _t49, d -= _t49;
        }

        return {
          size: d,
          base: m,
          head: c,
          center: c + d / 2
        };
      }
    }, {
      key: "_calculateBarIndexPixels",
      value: function _calculateBarIndexPixels(t, e) {
        var s = e.scale,
            n = this.options,
            o = n.skipNull,
            a = r(n.maxBarThickness, 1 / 0);
        var l, h;

        if (e.grouped) {
          var _s39 = o ? this._getStackCount(t) : e.stackCount,
              _r12 = "flex" === n.barThickness ? function (t, e, i, s) {
            var n = e.pixels,
                o = n[t];
            var a = t > 0 ? n[t - 1] : null,
                r = t < n.length - 1 ? n[t + 1] : null;
            var l = i.categoryPercentage;
            null === a && (a = o - (null === r ? e.end - e.start : r - o)), null === r && (r = o + o - a);
            var h = o - (o - Math.min(a, r)) / 2 * l;
            return {
              chunk: Math.abs(r - a) / 2 * l / s,
              ratio: i.barPercentage,
              start: h
            };
          }(t, e, n, _s39) : function (t, e, s, n) {
            var o = s.barThickness;
            var a, r;
            return i(o) ? (a = e.min * s.categoryPercentage, r = s.barPercentage) : (a = o * n, r = 1), {
              chunk: a / n,
              ratio: r,
              start: e.pixels[t] - a / 2
            };
          }(t, e, n, _s39),
              _c9 = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);

          l = _r12.start + _r12.chunk * _c9 + _r12.chunk / 2, h = Math.min(a, _r12.chunk * _r12.ratio);
        } else l = s.getPixelForValue(this.getParsed(t)[s.axis], t), h = Math.min(a, e.min * e.ratio);

        return {
          base: l - h / 2,
          head: l + h / 2,
          center: l,
          size: h
        };
      }
    }, {
      key: "draw",
      value: function draw() {
        var t = this._cachedMeta,
            e = t.vScale,
            i = t.data,
            s = i.length;
        var n = 0;

        for (; n < s; ++n) {
          null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx);
        }
      }
    }]);

    return Tn;
  }(Ls);

  Tn.id = "bar", Tn.defaults = {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: .8,
    barPercentage: .9,
    grouped: !0,
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "base", "width", "height"]
      }
    }
  }, Tn.overrides = {
    scales: {
      _index_: {
        type: "category",
        offset: !0,
        grid: {
          offset: !0
        }
      },
      _value_: {
        type: "linear",
        beginAtZero: !0
      }
    }
  };

  var Ln = /*#__PURE__*/function (_Ls2) {
    _inherits(Ln, _Ls2);

    var _super5 = _createSuper(Ln);

    function Ln() {
      _classCallCheck(this, Ln);

      return _super5.apply(this, arguments);
    }

    _createClass(Ln, [{
      key: "initialize",
      value: function initialize() {
        this.enableOptionSharing = !0, _get2(_getPrototypeOf(Ln.prototype), "initialize", this).call(this);
      }
    }, {
      key: "parsePrimitiveData",
      value: function parsePrimitiveData(t, e, i, s) {
        var n = _get2(_getPrototypeOf(Ln.prototype), "parsePrimitiveData", this).call(this, t, e, i, s);

        for (var _t50 = 0; _t50 < n.length; _t50++) {
          n[_t50]._custom = this.resolveDataElementOptions(_t50 + i).radius;
        }

        return n;
      }
    }, {
      key: "parseArrayData",
      value: function parseArrayData(t, e, i, s) {
        var n = _get2(_getPrototypeOf(Ln.prototype), "parseArrayData", this).call(this, t, e, i, s);

        for (var _t51 = 0; _t51 < n.length; _t51++) {
          var _s40 = e[i + _t51];
          n[_t51]._custom = r(_s40[2], this.resolveDataElementOptions(_t51 + i).radius);
        }

        return n;
      }
    }, {
      key: "parseObjectData",
      value: function parseObjectData(t, e, i, s) {
        var n = _get2(_getPrototypeOf(Ln.prototype), "parseObjectData", this).call(this, t, e, i, s);

        for (var _t52 = 0; _t52 < n.length; _t52++) {
          var _s41 = e[i + _t52];
          n[_t52]._custom = r(_s41 && _s41.r && +_s41.r, this.resolveDataElementOptions(_t52 + i).radius);
        }

        return n;
      }
    }, {
      key: "getMaxOverflow",
      value: function getMaxOverflow() {
        var t = this._cachedMeta.data;
        var e = 0;

        for (var _i39 = t.length - 1; _i39 >= 0; --_i39) {
          e = Math.max(e, t[_i39].size(this.resolveDataElementOptions(_i39)) / 2);
        }

        return e > 0 && e;
      }
    }, {
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta,
            i = e.xScale,
            s = e.yScale,
            n = this.getParsed(t),
            o = i.getLabelForValue(n.x),
            a = s.getLabelForValue(n.y),
            r = n._custom;
        return {
          label: e.label,
          value: "(" + o + ", " + a + (r ? ", " + r : "") + ")"
        };
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this._cachedMeta.data;
        this.updateElements(e, 0, e.length, t);
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, s) {
        var n = "reset" === s,
            _this$_cachedMeta2 = this._cachedMeta,
            o = _this$_cachedMeta2.iScale,
            a = _this$_cachedMeta2.vScale,
            _this$_getSharedOptio2 = this._getSharedOptions(e, s),
            r = _this$_getSharedOptio2.sharedOptions,
            l = _this$_getSharedOptio2.includeOptions,
            h = o.axis,
            c = a.axis;

        for (var _d8 = e; _d8 < e + i; _d8++) {
          var _e49 = t[_d8],
              _i40 = !n && this.getParsed(_d8),
              _u2 = {},
              _f4 = _u2[h] = n ? o.getPixelForDecimal(.5) : o.getPixelForValue(_i40[h]),
              _g2 = _u2[c] = n ? a.getBasePixel() : a.getPixelForValue(_i40[c]);

          _u2.skip = isNaN(_f4) || isNaN(_g2), l && (_u2.options = r || this.resolveDataElementOptions(_d8, _e49.active ? "active" : s), n && (_u2.options.radius = 0)), this.updateElement(_e49, _d8, _u2, s);
        }
      }
    }, {
      key: "resolveDataElementOptions",
      value: function resolveDataElementOptions(t, e) {
        var i = this.getParsed(t);

        var s = _get2(_getPrototypeOf(Ln.prototype), "resolveDataElementOptions", this).call(this, t, e);

        s.$shared && (s = Object.assign({}, s, {
          $shared: !1
        }));
        var n = s.radius;
        return "active" !== e && (s.radius = 0), s.radius += r(i && i._custom, n), s;
      }
    }]);

    return Ln;
  }(Ls);

  Ln.id = "bubble", Ln.defaults = {
    datasetElementType: !1,
    dataElementType: "point",
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "borderWidth", "radius"]
      }
    }
  }, Ln.overrides = {
    scales: {
      x: {
        type: "linear"
      },
      y: {
        type: "linear"
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function title() {
            return "";
          }
        }
      }
    }
  };

  var En = /*#__PURE__*/function (_Ls3) {
    _inherits(En, _Ls3);

    var _super6 = _createSuper(En);

    function En(t, e) {
      var _this19;

      _classCallCheck(this, En);

      _this19 = _super6.call(this, t, e), _this19.enableOptionSharing = !0, _this19.innerRadius = void 0, _this19.outerRadius = void 0, _this19.offsetX = void 0, _this19.offsetY = void 0;
      return _this19;
    }

    _createClass(En, [{
      key: "linkScales",
      value: function linkScales() {}
    }, {
      key: "parse",
      value: function parse(t, e) {
        var i = this.getDataset().data,
            s = this._cachedMeta;
        if (!1 === this._parsing) s._parsed = i;else {
          var _o25,
              _a17,
              _r13 = function _r13(t) {
            return +i[t];
          };

          if (n(i[t])) {
            var _this$_parsing$key2 = this._parsing.key,
                _t53 = _this$_parsing$key2 === void 0 ? "value" : _this$_parsing$key2;

            _r13 = function _r13(e) {
              return +y(i[e], _t53);
            };
          }

          for (_o25 = t, _a17 = t + e; _o25 < _a17; ++_o25) {
            s._parsed[_o25] = _r13(_o25);
          }
        }
      }
    }, {
      key: "_getRotation",
      value: function _getRotation() {
        return H(this.options.rotation - 90);
      }
    }, {
      key: "_getCircumference",
      value: function _getCircumference() {
        return H(this.options.circumference);
      }
    }, {
      key: "_getRotationExtents",
      value: function _getRotationExtents() {
        var t = O,
            e = -O;

        for (var _i41 = 0; _i41 < this.chart.data.datasets.length; ++_i41) {
          if (this.chart.isDatasetVisible(_i41)) {
            var _s42 = this.chart.getDatasetMeta(_i41).controller,
                _n28 = _s42._getRotation(),
                _o26 = _s42._getCircumference();

            t = Math.min(t, _n28), e = Math.max(e, _n28 + _o26);
          }
        }

        return {
          rotation: t,
          circumference: e - t
        };
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this.chart,
            i = e.chartArea,
            s = this._cachedMeta,
            n = s.data,
            o = this.getMaxBorderWidth() + this.getMaxOffset(n) + this.options.spacing,
            a = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
            r = Math.min(l(this.options.cutout, a), 1),
            c = this._getRingWeight(this.index),
            _this$_getRotationExt = this._getRotationExtents(),
            d = _this$_getRotationExt.circumference,
            u = _this$_getRotationExt.rotation,
            _ref12 = function (t, e, i) {
          var s = 1,
              n = 1,
              o = 0,
              a = 0;

          if (e < O) {
            var _r14 = t,
                _l12 = _r14 + e,
                _h11 = Math.cos(_r14),
                _c10 = Math.sin(_r14),
                _d9 = Math.cos(_l12),
                _u3 = Math.sin(_l12),
                _f5 = function _f5(t, e, s) {
              return G(t, _r14, _l12, !0) ? 1 : Math.max(e, e * i, s, s * i);
            },
                _g3 = function _g3(t, e, s) {
              return G(t, _r14, _l12, !0) ? -1 : Math.min(e, e * i, s, s * i);
            },
                _p2 = _f5(0, _h11, _d9),
                _m2 = _f5(L, _c10, _u3),
                _b2 = _g3(D, _h11, _d9),
                _x = _g3(D + L, _c10, _u3);

            s = (_p2 - _b2) / 2, n = (_m2 - _x) / 2, o = -(_p2 + _b2) / 2, a = -(_m2 + _x) / 2;
          }

          return {
            ratioX: s,
            ratioY: n,
            offsetX: o,
            offsetY: a
          };
        }(u, d, r),
            f = _ref12.ratioX,
            g = _ref12.ratioY,
            p = _ref12.offsetX,
            m = _ref12.offsetY,
            b = (i.width - o) / f,
            x = (i.height - o) / g,
            _ = Math.max(Math.min(b, x) / 2, 0),
            y = h(this.options.radius, _),
            v = (y - Math.max(y * r, 0)) / this._getVisibleDatasetWeightTotal();

        this.offsetX = p * y, this.offsetY = m * y, s.total = this.calculateTotal(), this.outerRadius = y - v * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - v * c, 0), this.updateElements(n, 0, n.length, t);
      }
    }, {
      key: "_circumference",
      value: function _circumference(t, e) {
        var i = this.options,
            s = this._cachedMeta,
            n = this._getCircumference();

        return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === s._parsed[t] || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * n / O);
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, s) {
        var n = "reset" === s,
            o = this.chart,
            a = o.chartArea,
            r = o.options.animation,
            l = (a.left + a.right) / 2,
            h = (a.top + a.bottom) / 2,
            c = n && r.animateScale,
            d = c ? 0 : this.innerRadius,
            u = c ? 0 : this.outerRadius,
            _this$_getSharedOptio3 = this._getSharedOptions(e, s),
            f = _this$_getSharedOptio3.sharedOptions,
            g = _this$_getSharedOptio3.includeOptions;

        var p,
            m = this._getRotation();

        for (p = 0; p < e; ++p) {
          m += this._circumference(p, n);
        }

        for (p = e; p < e + i; ++p) {
          var _e50 = this._circumference(p, n),
              _i42 = t[p],
              _o27 = {
            x: l + this.offsetX,
            y: h + this.offsetY,
            startAngle: m,
            endAngle: m + _e50,
            circumference: _e50,
            outerRadius: u,
            innerRadius: d
          };

          g && (_o27.options = f || this.resolveDataElementOptions(p, _i42.active ? "active" : s)), m += _e50, this.updateElement(_i42, p, _o27, s);
        }
      }
    }, {
      key: "calculateTotal",
      value: function calculateTotal() {
        var t = this._cachedMeta,
            e = t.data;
        var i,
            s = 0;

        for (i = 0; i < e.length; i++) {
          var _n29 = t._parsed[i];
          null === _n29 || isNaN(_n29) || !this.chart.getDataVisibility(i) || e[i].hidden || (s += Math.abs(_n29));
        }

        return s;
      }
    }, {
      key: "calculateCircumference",
      value: function calculateCircumference(t) {
        var e = this._cachedMeta.total;
        return e > 0 && !isNaN(t) ? O * (Math.abs(t) / e) : 0;
      }
    }, {
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta,
            i = this.chart,
            s = i.data.labels || [],
            n = li(e._parsed[t], i.options.locale);
        return {
          label: s[t] || "",
          value: n
        };
      }
    }, {
      key: "getMaxBorderWidth",
      value: function getMaxBorderWidth(t) {
        var e = 0;
        var i = this.chart;
        var s, n, o, a, r;
        if (!t) for (s = 0, n = i.data.datasets.length; s < n; ++s) {
          if (i.isDatasetVisible(s)) {
            o = i.getDatasetMeta(s), t = o.data, a = o.controller;
            break;
          }
        }
        if (!t) return 0;

        for (s = 0, n = t.length; s < n; ++s) {
          r = a.resolveDataElementOptions(s), "inner" !== r.borderAlign && (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0));
        }

        return e;
      }
    }, {
      key: "getMaxOffset",
      value: function getMaxOffset(t) {
        var e = 0;

        for (var _i43 = 0, _s43 = t.length; _i43 < _s43; ++_i43) {
          var _t54 = this.resolveDataElementOptions(_i43);

          e = Math.max(e, _t54.offset || 0, _t54.hoverOffset || 0);
        }

        return e;
      }
    }, {
      key: "_getRingWeightOffset",
      value: function _getRingWeightOffset(t) {
        var e = 0;

        for (var _i44 = 0; _i44 < t; ++_i44) {
          this.chart.isDatasetVisible(_i44) && (e += this._getRingWeight(_i44));
        }

        return e;
      }
    }, {
      key: "_getRingWeight",
      value: function _getRingWeight(t) {
        return Math.max(r(this.chart.data.datasets[t].weight, 1), 0);
      }
    }, {
      key: "_getVisibleDatasetWeightTotal",
      value: function _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
      }
    }]);

    return En;
  }(Ls);

  En.id = "doughnut", En.defaults = {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: {
      animateRotate: !0,
      animateScale: !1
    },
    animations: {
      numbers: {
        type: "number",
        properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
      }
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r"
  }, En.descriptors = {
    _scriptable: function _scriptable(t) {
      return "spacing" !== t;
    },
    _indexable: function _indexable(t) {
      return "spacing" !== t;
    }
  }, En.overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels: function generateLabels(t) {
            var e = t.data;

            if (e.labels.length && e.datasets.length) {
              var _i45 = t.legend.options.labels.pointStyle;
              return e.labels.map(function (e, s) {
                var n = t.getDatasetMeta(0).controller.getStyle(s);
                return {
                  text: e,
                  fillStyle: n.backgroundColor,
                  strokeStyle: n.borderColor,
                  lineWidth: n.borderWidth,
                  pointStyle: _i45,
                  hidden: !t.getDataVisibility(s),
                  index: s
                };
              });
            }

            return [];
          }
        },
        onClick: function onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        }
      },
      tooltip: {
        callbacks: {
          title: function title() {
            return "";
          },
          label: function label(t) {
            var e = t.label;
            var i = ": " + t.formattedValue;
            return s(e) ? (e = e.slice(), e[0] += i) : e += i, e;
          }
        }
      }
    }
  };

  var Rn = /*#__PURE__*/function (_Ls4) {
    _inherits(Rn, _Ls4);

    var _super7 = _createSuper(Rn);

    function Rn() {
      _classCallCheck(this, Rn);

      return _super7.apply(this, arguments);
    }

    _createClass(Rn, [{
      key: "initialize",
      value: function initialize() {
        this.enableOptionSharing = !0, this.supportsDecimation = !0, _get2(_getPrototypeOf(Rn.prototype), "initialize", this).call(this);
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this._cachedMeta,
            i = e.dataset,
            _e$data = e.data,
            s = _e$data === void 0 ? [] : _e$data,
            n = e._dataset,
            o = this.chart._animationsDisabled;

        var _gt = gt(e, s, o),
            a = _gt.start,
            r = _gt.count;

        this._drawStart = a, this._drawCount = r, pt(e) && (a = 0, r = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!n._decimated, i.points = s;
        var l = this.resolveDatasetElementOptions(t);
        this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(i, void 0, {
          animated: !o,
          options: l
        }, t), this.updateElements(s, a, r, t);
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, s, n) {
        var o = "reset" === n,
            _this$_cachedMeta3 = this._cachedMeta,
            a = _this$_cachedMeta3.iScale,
            r = _this$_cachedMeta3.vScale,
            l = _this$_cachedMeta3._stacked,
            h = _this$_cachedMeta3._dataset,
            _this$_getSharedOptio4 = this._getSharedOptions(e, n),
            c = _this$_getSharedOptio4.sharedOptions,
            d = _this$_getSharedOptio4.includeOptions,
            u = a.axis,
            f = r.axis,
            _this$options10 = this.options,
            g = _this$options10.spanGaps,
            p = _this$options10.segment,
            m = B(g) ? g : Number.POSITIVE_INFINITY,
            b = this.chart._animationsDisabled || o || "none" === n;

        var x = e > 0 && this.getParsed(e - 1);

        for (var _g4 = e; _g4 < e + s; ++_g4) {
          var _e51 = t[_g4],
              _s44 = this.getParsed(_g4),
              _2 = b ? _e51 : {},
              _y = i(_s44[f]),
              _v = _2[u] = a.getPixelForValue(_s44[u], _g4),
              _w = _2[f] = o || _y ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, _s44, l) : _s44[f], _g4);

          _2.skip = isNaN(_v) || isNaN(_w) || _y, _2.stop = _g4 > 0 && Math.abs(_s44[u] - x[u]) > m, p && (_2.parsed = _s44, _2.raw = h.data[_g4]), d && (_2.options = c || this.resolveDataElementOptions(_g4, _e51.active ? "active" : n)), b || this.updateElement(_e51, _g4, _2, n), x = _s44;
        }
      }
    }, {
      key: "getMaxOverflow",
      value: function getMaxOverflow() {
        var t = this._cachedMeta,
            e = t.dataset,
            i = e.options && e.options.borderWidth || 0,
            s = t.data || [];
        if (!s.length) return i;
        var n = s[0].size(this.resolveDataElementOptions(0)),
            o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
        return Math.max(i, n, o) / 2;
      }
    }, {
      key: "draw",
      value: function draw() {
        var t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), _get2(_getPrototypeOf(Rn.prototype), "draw", this).call(this);
      }
    }]);

    return Rn;
  }(Ls);

  Rn.id = "line", Rn.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1
  }, Rn.overrides = {
    scales: {
      _index_: {
        type: "category"
      },
      _value_: {
        type: "linear"
      }
    }
  };

  var In = /*#__PURE__*/function (_Ls5) {
    _inherits(In, _Ls5);

    var _super8 = _createSuper(In);

    function In(t, e) {
      var _this20;

      _classCallCheck(this, In);

      _this20 = _super8.call(this, t, e), _this20.innerRadius = void 0, _this20.outerRadius = void 0;
      return _this20;
    }

    _createClass(In, [{
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta,
            i = this.chart,
            s = i.data.labels || [],
            n = li(e._parsed[t].r, i.options.locale);
        return {
          label: s[t] || "",
          value: n
        };
      }
    }, {
      key: "parseObjectData",
      value: function parseObjectData(t, e, i, s) {
        return Ue.bind(this)(t, e, i, s);
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(e, 0, e.length, t);
      }
    }, {
      key: "getMinMax",
      value: function getMinMax() {
        var _this21 = this;

        var t = this._cachedMeta,
            e = {
          min: Number.POSITIVE_INFINITY,
          max: Number.NEGATIVE_INFINITY
        };
        return t.data.forEach(function (t, i) {
          var s = _this21.getParsed(i).r;

          !isNaN(s) && _this21.chart.getDataVisibility(i) && (s < e.min && (e.min = s), s > e.max && (e.max = s));
        }), e;
      }
    }, {
      key: "_updateRadius",
      value: function _updateRadius() {
        var t = this.chart,
            e = t.chartArea,
            i = t.options,
            s = Math.min(e.right - e.left, e.bottom - e.top),
            n = Math.max(s / 2, 0),
            o = (n - Math.max(i.cutoutPercentage ? n / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
        this.outerRadius = n - o * this.index, this.innerRadius = this.outerRadius - o;
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, s) {
        var n = "reset" === s,
            o = this.chart,
            a = o.options.animation,
            r = this._cachedMeta.rScale,
            l = r.xCenter,
            h = r.yCenter,
            c = r.getIndexAngle(0) - .5 * D;
        var d,
            u = c;
        var f = 360 / this.countVisibleElements();

        for (d = 0; d < e; ++d) {
          u += this._computeAngle(d, s, f);
        }

        for (d = e; d < e + i; d++) {
          var _e52 = t[d];

          var _i46 = u,
              _g5 = u + this._computeAngle(d, s, f),
              _p3 = o.getDataVisibility(d) ? r.getDistanceFromCenterForValue(this.getParsed(d).r) : 0;

          u = _g5, n && (a.animateScale && (_p3 = 0), a.animateRotate && (_i46 = _g5 = c));
          var _m3 = {
            x: l,
            y: h,
            innerRadius: 0,
            outerRadius: _p3,
            startAngle: _i46,
            endAngle: _g5,
            options: this.resolveDataElementOptions(d, _e52.active ? "active" : s)
          };
          this.updateElement(_e52, d, _m3, s);
        }
      }
    }, {
      key: "countVisibleElements",
      value: function countVisibleElements() {
        var _this22 = this;

        var t = this._cachedMeta;
        var e = 0;
        return t.data.forEach(function (t, i) {
          !isNaN(_this22.getParsed(i).r) && _this22.chart.getDataVisibility(i) && e++;
        }), e;
      }
    }, {
      key: "_computeAngle",
      value: function _computeAngle(t, e, i) {
        return this.chart.getDataVisibility(t) ? H(this.resolveDataElementOptions(t, e).angle || i) : 0;
      }
    }]);

    return In;
  }(Ls);

  In.id = "polarArea", In.defaults = {
    dataElementType: "arc",
    animation: {
      animateRotate: !0,
      animateScale: !0
    },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
      }
    },
    indexAxis: "r",
    startAngle: 0
  }, In.overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels: function generateLabels(t) {
            var e = t.data;

            if (e.labels.length && e.datasets.length) {
              var _i47 = t.legend.options.labels.pointStyle;
              return e.labels.map(function (e, s) {
                var n = t.getDatasetMeta(0).controller.getStyle(s);
                return {
                  text: e,
                  fillStyle: n.backgroundColor,
                  strokeStyle: n.borderColor,
                  lineWidth: n.borderWidth,
                  pointStyle: _i47,
                  hidden: !t.getDataVisibility(s),
                  index: s
                };
              });
            }

            return [];
          }
        },
        onClick: function onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        }
      },
      tooltip: {
        callbacks: {
          title: function title() {
            return "";
          },
          label: function label(t) {
            return t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue;
          }
        }
      }
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: {
          display: !1
        },
        beginAtZero: !0,
        grid: {
          circular: !0
        },
        pointLabels: {
          display: !1
        },
        startAngle: 0
      }
    }
  };

  var zn = /*#__PURE__*/function (_En) {
    _inherits(zn, _En);

    var _super9 = _createSuper(zn);

    function zn() {
      _classCallCheck(this, zn);

      return _super9.apply(this, arguments);
    }

    return zn;
  }(En);

  zn.id = "pie", zn.defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };

  var Fn = /*#__PURE__*/function (_Ls6) {
    _inherits(Fn, _Ls6);

    var _super10 = _createSuper(Fn);

    function Fn() {
      _classCallCheck(this, Fn);

      return _super10.apply(this, arguments);
    }

    _createClass(Fn, [{
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta.vScale,
            i = this.getParsed(t);
        return {
          label: e.getLabels()[t],
          value: "" + e.getLabelForValue(i[e.axis])
        };
      }
    }, {
      key: "parseObjectData",
      value: function parseObjectData(t, e, i, s) {
        return Ue.bind(this)(t, e, i, s);
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this._cachedMeta,
            i = e.dataset,
            s = e.data || [],
            n = e.iScale.getLabels();

        if (i.points = s, "resize" !== t) {
          var _e53 = this.resolveDatasetElementOptions(t);

          this.options.showLine || (_e53.borderWidth = 0);
          var _o28 = {
            _loop: !0,
            _fullLoop: n.length === s.length,
            options: _e53
          };
          this.updateElement(i, void 0, _o28, t);
        }

        this.updateElements(s, 0, s.length, t);
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, s) {
        var n = this._cachedMeta.rScale,
            o = "reset" === s;

        for (var _a18 = e; _a18 < e + i; _a18++) {
          var _e54 = t[_a18],
              _i48 = this.resolveDataElementOptions(_a18, _e54.active ? "active" : s),
              _r15 = n.getPointPositionForValue(_a18, this.getParsed(_a18).r),
              _l13 = o ? n.xCenter : _r15.x,
              _h12 = o ? n.yCenter : _r15.y,
              _c11 = {
            x: _l13,
            y: _h12,
            angle: _r15.angle,
            skip: isNaN(_l13) || isNaN(_h12),
            options: _i48
          };

          this.updateElement(_e54, _a18, _c11, s);
        }
      }
    }]);

    return Fn;
  }(Ls);

  Fn.id = "radar", Fn.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: !0,
    elements: {
      line: {
        fill: "start"
      }
    }
  }, Fn.overrides = {
    aspectRatio: 1,
    scales: {
      r: {
        type: "radialLinear"
      }
    }
  };

  var Vn = /*#__PURE__*/function (_Ls7) {
    _inherits(Vn, _Ls7);

    var _super11 = _createSuper(Vn);

    function Vn() {
      _classCallCheck(this, Vn);

      return _super11.apply(this, arguments);
    }

    _createClass(Vn, [{
      key: "update",
      value: function update(t) {
        var e = this._cachedMeta,
            _e$data2 = e.data,
            i = _e$data2 === void 0 ? [] : _e$data2,
            s = this.chart._animationsDisabled;

        var _gt2 = gt(e, i, s),
            n = _gt2.start,
            o = _gt2.count;

        if (this._drawStart = n, this._drawCount = o, pt(e) && (n = 0, o = i.length), this.options.showLine) {
          var _n30 = e.dataset,
              _o29 = e._dataset;
          _n30._chart = this.chart, _n30._datasetIndex = this.index, _n30._decimated = !!_o29._decimated, _n30.points = i;

          var _a19 = this.resolveDatasetElementOptions(t);

          _a19.segment = this.options.segment, this.updateElement(_n30, void 0, {
            animated: !s,
            options: _a19
          }, t);
        }

        this.updateElements(i, n, o, t);
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var t = this.options.showLine;
        !this.datasetElementType && t && (this.datasetElementType = Us.getElement("line")), _get2(_getPrototypeOf(Vn.prototype), "addElements", this).call(this);
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, s, n) {
        var o = "reset" === n,
            _this$_cachedMeta4 = this._cachedMeta,
            a = _this$_cachedMeta4.iScale,
            r = _this$_cachedMeta4.vScale,
            l = _this$_cachedMeta4._stacked,
            h = _this$_cachedMeta4._dataset,
            c = this.resolveDataElementOptions(e, n),
            d = this.getSharedOptions(c),
            u = this.includeOptions(n, d),
            f = a.axis,
            g = r.axis,
            _this$options11 = this.options,
            p = _this$options11.spanGaps,
            m = _this$options11.segment,
            b = B(p) ? p : Number.POSITIVE_INFINITY,
            x = this.chart._animationsDisabled || o || "none" === n;

        var _ = e > 0 && this.getParsed(e - 1);

        for (var _c12 = e; _c12 < e + s; ++_c12) {
          var _e55 = t[_c12],
              _s45 = this.getParsed(_c12),
              _p4 = x ? _e55 : {},
              _y2 = i(_s45[g]),
              _v2 = _p4[f] = a.getPixelForValue(_s45[f], _c12),
              _w2 = _p4[g] = o || _y2 ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, _s45, l) : _s45[g], _c12);

          _p4.skip = isNaN(_v2) || isNaN(_w2) || _y2, _p4.stop = _c12 > 0 && Math.abs(_s45[f] - _[f]) > b, m && (_p4.parsed = _s45, _p4.raw = h.data[_c12]), u && (_p4.options = d || this.resolveDataElementOptions(_c12, _e55.active ? "active" : n)), x || this.updateElement(_e55, _c12, _p4, n), _ = _s45;
        }

        this.updateSharedOptions(d, n, c);
      }
    }, {
      key: "getMaxOverflow",
      value: function getMaxOverflow() {
        var t = this._cachedMeta,
            e = t.data || [];

        if (!this.options.showLine) {
          var _t55 = 0;

          for (var _i49 = e.length - 1; _i49 >= 0; --_i49) {
            _t55 = Math.max(_t55, e[_i49].size(this.resolveDataElementOptions(_i49)) / 2);
          }

          return _t55 > 0 && _t55;
        }

        var i = t.dataset,
            s = i.options && i.options.borderWidth || 0;
        if (!e.length) return s;
        var n = e[0].size(this.resolveDataElementOptions(0)),
            o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
        return Math.max(s, n, o) / 2;
      }
    }]);

    return Vn;
  }(Ls);

  Vn.id = "scatter", Vn.defaults = {
    datasetElementType: !1,
    dataElementType: "point",
    showLine: !1,
    fill: !1
  }, Vn.overrides = {
    interaction: {
      mode: "point"
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function title() {
            return "";
          },
          label: function label(t) {
            return "(" + t.label + ", " + t.formattedValue + ")";
          }
        }
      }
    },
    scales: {
      x: {
        type: "linear"
      },
      y: {
        type: "linear"
      }
    }
  };
  var Bn = Object.freeze({
    __proto__: null,
    BarController: Tn,
    BubbleController: Ln,
    DoughnutController: En,
    LineController: Rn,
    PolarAreaController: In,
    PieController: zn,
    RadarController: Fn,
    ScatterController: Vn
  });

  function Nn(t, e, i) {
    var s = e.startAngle,
        n = e.pixelMargin,
        o = e.x,
        a = e.y,
        r = e.outerRadius,
        l = e.innerRadius;
    var h = n / r;
    t.beginPath(), t.arc(o, a, r, s - h, i + h), l > n ? (h = n / l, t.arc(o, a, l, i + h, s - h, !0)) : t.arc(o, a, n, i + L, s - L), t.closePath(), t.clip();
  }

  function Wn(t, e, i, s) {
    var n = ui(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);

    var o = (i - e) / 2,
        a = Math.min(o, s * e / 2),
        r = function r(t) {
      var e = (i - Math.min(o, t)) * s / 2;
      return Z(t, 0, Math.min(o, e));
    };

    return {
      outerStart: r(n.outerStart),
      outerEnd: r(n.outerEnd),
      innerStart: Z(n.innerStart, 0, a),
      innerEnd: Z(n.innerEnd, 0, a)
    };
  }

  function jn(t, e, i, s) {
    return {
      x: i + t * Math.cos(e),
      y: s + t * Math.sin(e)
    };
  }

  function Hn(t, e, i, s, n, o) {
    var a = e.x,
        r = e.y,
        l = e.startAngle,
        h = e.pixelMargin,
        c = e.innerRadius,
        d = Math.max(e.outerRadius + s + i - h, 0),
        u = c > 0 ? c + s + i + h : 0;
    var f = 0;
    var g = n - l;

    if (s) {
      var _t56 = ((c > 0 ? c - s : 0) + (d > 0 ? d - s : 0)) / 2;

      f = (g - (0 !== _t56 ? g * _t56 / (_t56 + s) : g)) / 2;
    }

    var p = (g - Math.max(.001, g * d - i / D) / d) / 2,
        m = l + p + f,
        b = n - p - f,
        _Wn = Wn(e, u, d, b - m),
        x = _Wn.outerStart,
        _ = _Wn.outerEnd,
        y = _Wn.innerStart,
        v = _Wn.innerEnd,
        w = d - x,
        M = d - _,
        k = m + x / w,
        S = b - _ / M,
        P = u + y,
        O = u + v,
        C = m + y / P,
        A = b - v / O;

    if (t.beginPath(), o) {
      if (t.arc(a, r, d, k, S), _ > 0) {
        var _e57 = jn(M, S, a, r);

        t.arc(_e57.x, _e57.y, _, S, b + L);
      }

      var _e56 = jn(O, b, a, r);

      if (t.lineTo(_e56.x, _e56.y), v > 0) {
        var _e58 = jn(O, A, a, r);

        t.arc(_e58.x, _e58.y, v, b + L, A + Math.PI);
      }

      if (t.arc(a, r, u, b - v / u, m + y / u, !0), y > 0) {
        var _e59 = jn(P, C, a, r);

        t.arc(_e59.x, _e59.y, y, C + Math.PI, m - L);
      }

      var _i50 = jn(w, m, a, r);

      if (t.lineTo(_i50.x, _i50.y), x > 0) {
        var _e60 = jn(w, k, a, r);

        t.arc(_e60.x, _e60.y, x, m - L, k);
      }
    } else {
      t.moveTo(a, r);

      var _e61 = Math.cos(k) * d + a,
          _i51 = Math.sin(k) * d + r;

      t.lineTo(_e61, _i51);

      var _s46 = Math.cos(S) * d + a,
          _n31 = Math.sin(S) * d + r;

      t.lineTo(_s46, _n31);
    }

    t.closePath();
  }

  function $n(t, e, i, s, n, o) {
    var a = e.options,
        r = a.borderWidth,
        l = a.borderJoinStyle,
        h = "inner" === a.borderAlign;
    r && (h ? (t.lineWidth = 2 * r, t.lineJoin = l || "round") : (t.lineWidth = r, t.lineJoin = l || "bevel"), e.fullCircles && function (t, e, i) {
      var s = e.x,
          n = e.y,
          o = e.startAngle,
          a = e.pixelMargin,
          r = e.fullCircles,
          l = Math.max(e.outerRadius - a, 0),
          h = e.innerRadius + a;
      var c;

      for (i && Nn(t, e, o + O), t.beginPath(), t.arc(s, n, h, o + O, o, !0), c = 0; c < r; ++c) {
        t.stroke();
      }

      for (t.beginPath(), t.arc(s, n, l, o, o + O), c = 0; c < r; ++c) {
        t.stroke();
      }
    }(t, e, h), h && Nn(t, e, n), Hn(t, e, i, s, n, o), t.stroke());
  }

  var Yn = /*#__PURE__*/function (_Es2) {
    _inherits(Yn, _Es2);

    var _super12 = _createSuper(Yn);

    function Yn(t) {
      var _this23;

      _classCallCheck(this, Yn);

      _this23 = _super12.call(this), _this23.options = void 0, _this23.circumference = void 0, _this23.startAngle = void 0, _this23.endAngle = void 0, _this23.innerRadius = void 0, _this23.outerRadius = void 0, _this23.pixelMargin = 0, _this23.fullCircles = 0, t && Object.assign(_assertThisInitialized(_this23), t);
      return _this23;
    }

    _createClass(Yn, [{
      key: "inRange",
      value: function inRange(t, e, i) {
        var s = this.getProps(["x", "y"], i),
            _U2 = U(s, {
          x: t,
          y: e
        }),
            n = _U2.angle,
            o = _U2.distance,
            _this$getProps2 = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i),
            a = _this$getProps2.startAngle,
            l = _this$getProps2.endAngle,
            h = _this$getProps2.innerRadius,
            c = _this$getProps2.outerRadius,
            d = _this$getProps2.circumference,
            u = this.options.spacing / 2,
            f = r(d, l - a) >= O || G(n, a, l),
            g = Q(o, h + u, c + u);

        return f && g;
      }
    }, {
      key: "getCenterPoint",
      value: function getCenterPoint(t) {
        var _this$getProps3 = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t),
            e = _this$getProps3.x,
            i = _this$getProps3.y,
            s = _this$getProps3.startAngle,
            n = _this$getProps3.endAngle,
            o = _this$getProps3.innerRadius,
            a = _this$getProps3.outerRadius,
            _this$options12 = this.options,
            r = _this$options12.offset,
            l = _this$options12.spacing,
            h = (s + n) / 2,
            c = (o + a + l + r) / 2;

        return {
          x: e + Math.cos(h) * c,
          y: i + Math.sin(h) * c
        };
      }
    }, {
      key: "tooltipPosition",
      value: function tooltipPosition(t) {
        return this.getCenterPoint(t);
      }
    }, {
      key: "draw",
      value: function draw(t) {
        var e = this.options,
            i = this.circumference,
            s = (e.offset || 0) / 2,
            n = (e.spacing || 0) / 2,
            o = e.circular;
        if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = i > O ? Math.floor(i / O) : 0, 0 === i || this.innerRadius < 0 || this.outerRadius < 0) return;
        t.save();
        var a = 0;

        if (s) {
          a = s / 2;

          var _e62 = (this.startAngle + this.endAngle) / 2;

          t.translate(Math.cos(_e62) * a, Math.sin(_e62) * a), this.circumference >= D && (a = s);
        }

        t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor;

        var r = function (t, e, i, s, n) {
          var o = e.fullCircles,
              a = e.startAngle,
              r = e.circumference;
          var l = e.endAngle;

          if (o) {
            Hn(t, e, i, s, a + O, n);

            for (var _e63 = 0; _e63 < o; ++_e63) {
              t.fill();
            }

            isNaN(r) || (l = a + r % O, r % O == 0 && (l += O));
          }

          return Hn(t, e, i, s, l, n), t.fill(), l;
        }(t, this, a, n, o);

        $n(t, this, a, n, r, o), t.restore();
      }
    }]);

    return Yn;
  }(Es);

  function Un(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e;
    t.lineCap = r(i.borderCapStyle, e.borderCapStyle), t.setLineDash(r(i.borderDash, e.borderDash)), t.lineDashOffset = r(i.borderDashOffset, e.borderDashOffset), t.lineJoin = r(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = r(i.borderWidth, e.borderWidth), t.strokeStyle = r(i.borderColor, e.borderColor);
  }

  function Xn(t, e, i) {
    t.lineTo(i.x, i.y);
  }

  function qn(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var s = t.length,
        _i$start = i.start,
        n = _i$start === void 0 ? 0 : _i$start,
        _i$end = i.end,
        o = _i$end === void 0 ? s - 1 : _i$end,
        a = e.start,
        r = e.end,
        l = Math.max(n, a),
        h = Math.min(o, r),
        c = n < a && o < a || n > r && o > r;
    return {
      count: s,
      start: l,
      loop: e.loop,
      ilen: h < l && !c ? s + h - l : h - l
    };
  }

  function Kn(t, e, i, s) {
    var n = e.points,
        o = e.options,
        _qn = qn(n, i, s),
        a = _qn.count,
        r = _qn.start,
        l = _qn.loop,
        h = _qn.ilen,
        c = function (t) {
      return t.stepped ? Oe : t.tension || "monotone" === t.cubicInterpolationMode ? Ce : Xn;
    }(o);

    var d,
        u,
        f,
        _ref13 = s || {},
        _ref13$move = _ref13.move,
        g = _ref13$move === void 0 ? !0 : _ref13$move,
        p = _ref13.reverse;

    for (d = 0; d <= h; ++d) {
      u = n[(r + (p ? h - d : d)) % a], u.skip || (g ? (t.moveTo(u.x, u.y), g = !1) : c(t, f, u, p, o.stepped), f = u);
    }

    return l && (u = n[(r + (p ? h : 0)) % a], c(t, f, u, p, o.stepped)), !!l;
  }

  function Gn(t, e, i, s) {
    var n = e.points,
        _qn2 = qn(n, i, s),
        o = _qn2.count,
        a = _qn2.start,
        r = _qn2.ilen,
        _ref14 = s || {},
        _ref14$move = _ref14.move,
        l = _ref14$move === void 0 ? !0 : _ref14$move,
        h = _ref14.reverse;

    var c,
        d,
        u,
        f,
        g,
        p,
        m = 0,
        b = 0;

    var x = function x(t) {
      return (a + (h ? r - t : t)) % o;
    },
        _ = function _() {
      f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p));
    };

    for (l && (d = n[x(0)], t.moveTo(d.x, d.y)), c = 0; c <= r; ++c) {
      if (d = n[x(c)], d.skip) continue;

      var _e64 = d.x,
          _i52 = d.y,
          _s47 = 0 | _e64;

      _s47 === u ? (_i52 < f ? f = _i52 : _i52 > g && (g = _i52), m = (b * m + _e64) / ++b) : (_(), t.lineTo(_e64, _i52), u = _s47, b = 0, f = g = _i52), p = _i52;
    }

    _();
  }

  function Zn(t) {
    var e = t.options,
        i = e.borderDash && e.borderDash.length;
    return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i) ? Gn : Kn;
  }

  Yn.id = "arc", Yn.defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0
  }, Yn.defaultRoutes = {
    backgroundColor: "backgroundColor"
  };
  var Jn = "function" == typeof Path2D;

  function Qn(t, e, i, s) {
    Jn && !e.options.segment ? function (t, e, i, s) {
      var n = e._path;
      n || (n = e._path = new Path2D(), e.path(n, i, s) && n.closePath()), Un(t, e.options), t.stroke(n);
    }(t, e, i, s) : function (t, e, i, s) {
      var n = e.segments,
          o = e.options,
          a = Zn(e);

      var _iterator27 = _createForOfIteratorHelper(n),
          _step27;

      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var _r16 = _step27.value;
          Un(t, o, _r16.style), t.beginPath(), a(t, e, _r16, {
            start: i,
            end: i + s - 1
          }) && t.closePath(), t.stroke();
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
    }(t, e, i, s);
  }

  var to = /*#__PURE__*/function (_Es3) {
    _inherits(to, _Es3);

    var _super13 = _createSuper(to);

    function to(t) {
      var _this24;

      _classCallCheck(this, to);

      _this24 = _super13.call(this), _this24.animated = !0, _this24.options = void 0, _this24._chart = void 0, _this24._loop = void 0, _this24._fullLoop = void 0, _this24._path = void 0, _this24._points = void 0, _this24._segments = void 0, _this24._decimated = !1, _this24._pointsUpdated = !1, _this24._datasetIndex = void 0, t && Object.assign(_assertThisInitialized(_this24), t);
      return _this24;
    }

    _createClass(to, [{
      key: "updateControlPoints",
      value: function updateControlPoints(t, e) {
        var i = this.options;

        if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
          var _s48 = i.spanGaps ? this._loop : this._fullLoop;

          Qe(this._points, i, t, _s48, e), this._pointsUpdated = !0;
        }
      }
    }, {
      key: "first",
      value: function first() {
        var t = this.segments,
            e = this.points;
        return t.length && e[t[0].start];
      }
    }, {
      key: "last",
      value: function last() {
        var t = this.segments,
            e = this.points,
            i = t.length;
        return i && e[t[i - 1].end];
      }
    }, {
      key: "interpolate",
      value: function interpolate(t, e) {
        var i = this.options,
            s = t[e],
            n = this.points,
            o = Pi(this, {
          property: e,
          start: s,
          end: s
        });
        if (!o.length) return;

        var a = [],
            r = function (t) {
          return t.stepped ? oi : t.tension || "monotone" === t.cubicInterpolationMode ? ai : ni;
        }(i);

        var l, h;

        for (l = 0, h = o.length; l < h; ++l) {
          var _o$l = o[l],
              _h13 = _o$l.start,
              _c13 = _o$l.end,
              _d10 = n[_h13],
              _u4 = n[_c13];

          if (_d10 === _u4) {
            a.push(_d10);
            continue;
          }

          var _f6 = r(_d10, _u4, Math.abs((s - _d10[e]) / (_u4[e] - _d10[e])), i.stepped);

          _f6[e] = t[e], a.push(_f6);
        }

        return 1 === a.length ? a[0] : a;
      }
    }, {
      key: "pathSegment",
      value: function pathSegment(t, e, i) {
        return Zn(this)(t, this, e, i);
      }
    }, {
      key: "path",
      value: function path(t, e, i) {
        var s = this.segments,
            n = Zn(this);
        var o = this._loop;
        e = e || 0, i = i || this.points.length - e;

        var _iterator28 = _createForOfIteratorHelper(s),
            _step28;

        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _a20 = _step28.value;
            o &= n(t, this, _a20, {
              start: e,
              end: e + i - 1
            });
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }

        return !!o;
      }
    }, {
      key: "draw",
      value: function draw(t, e, i, s) {
        var n = this.options || {};
        (this.points || []).length && n.borderWidth && (t.save(), Qn(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
      }
    }, {
      key: "points",
      set: function set(t) {
        this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
      },
      get: function get() {
        return this._points;
      }
    }, {
      key: "segments",
      get: function get() {
        return this._segments || (this._segments = Di(this, this.options.segment));
      }
    }]);

    return to;
  }(Es);

  function eo(t, e, i, s) {
    var n = t.options,
        _t$getProps2 = t.getProps([i], s),
        o = _t$getProps2[i];

    return Math.abs(e - o) < n.radius + n.hitRadius;
  }

  to.id = "line", to.defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0
  }, to.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  }, to.descriptors = {
    _scriptable: !0,
    _indexable: function _indexable(t) {
      return "borderDash" !== t && "fill" !== t;
    }
  };

  var io = /*#__PURE__*/function (_Es4) {
    _inherits(io, _Es4);

    var _super14 = _createSuper(io);

    function io(t) {
      var _this25;

      _classCallCheck(this, io);

      _this25 = _super14.call(this), _this25.options = void 0, _this25.parsed = void 0, _this25.skip = void 0, _this25.stop = void 0, t && Object.assign(_assertThisInitialized(_this25), t);
      return _this25;
    }

    _createClass(io, [{
      key: "inRange",
      value: function inRange(t, e, i) {
        var s = this.options,
            _this$getProps4 = this.getProps(["x", "y"], i),
            n = _this$getProps4.x,
            o = _this$getProps4.y;

        return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2);
      }
    }, {
      key: "inXRange",
      value: function inXRange(t, e) {
        return eo(this, t, "x", e);
      }
    }, {
      key: "inYRange",
      value: function inYRange(t, e) {
        return eo(this, t, "y", e);
      }
    }, {
      key: "getCenterPoint",
      value: function getCenterPoint(t) {
        var _this$getProps5 = this.getProps(["x", "y"], t),
            e = _this$getProps5.x,
            i = _this$getProps5.y;

        return {
          x: e,
          y: i
        };
      }
    }, {
      key: "size",
      value: function size(t) {
        var e = (t = t || this.options || {}).radius || 0;
        e = Math.max(e, e && t.hoverRadius || 0);
        return 2 * (e + (e && t.borderWidth || 0));
      }
    }, {
      key: "draw",
      value: function draw(t, e) {
        var i = this.options;
        this.skip || i.radius < .1 || !Se(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, Me(t, i, this.x, this.y));
      }
    }, {
      key: "getRange",
      value: function getRange() {
        var t = this.options || {};
        return t.radius + t.hitRadius;
      }
    }]);

    return io;
  }(Es);

  function so(t, e) {
    var _t$getProps3 = t.getProps(["x", "y", "base", "width", "height"], e),
        i = _t$getProps3.x,
        s = _t$getProps3.y,
        n = _t$getProps3.base,
        o = _t$getProps3.width,
        a = _t$getProps3.height;

    var r, l, h, c, d;
    return t.horizontal ? (d = a / 2, r = Math.min(i, n), l = Math.max(i, n), h = s - d, c = s + d) : (d = o / 2, r = i - d, l = i + d, h = Math.min(s, n), c = Math.max(s, n)), {
      left: r,
      top: h,
      right: l,
      bottom: c
    };
  }

  function no(t, e, i, s) {
    return t ? 0 : Z(e, i, s);
  }

  function oo(t) {
    var e = so(t),
        i = e.right - e.left,
        s = e.bottom - e.top,
        o = function (t, e, i) {
      var s = t.options.borderWidth,
          n = t.borderSkipped,
          o = fi(s);
      return {
        t: no(n.top, o.top, 0, i),
        r: no(n.right, o.right, 0, e),
        b: no(n.bottom, o.bottom, 0, i),
        l: no(n.left, o.left, 0, e)
      };
    }(t, i / 2, s / 2),
        a = function (t, e, i) {
      var _t$getProps4 = t.getProps(["enableBorderRadius"]),
          s = _t$getProps4.enableBorderRadius,
          o = t.options.borderRadius,
          a = gi(o),
          r = Math.min(e, i),
          l = t.borderSkipped,
          h = s || n(o);

      return {
        topLeft: no(!h || l.top || l.left, a.topLeft, 0, r),
        topRight: no(!h || l.top || l.right, a.topRight, 0, r),
        bottomLeft: no(!h || l.bottom || l.left, a.bottomLeft, 0, r),
        bottomRight: no(!h || l.bottom || l.right, a.bottomRight, 0, r)
      };
    }(t, i / 2, s / 2);

    return {
      outer: {
        x: e.left,
        y: e.top,
        w: i,
        h: s,
        radius: a
      },
      inner: {
        x: e.left + o.l,
        y: e.top + o.t,
        w: i - o.l - o.r,
        h: s - o.t - o.b,
        radius: {
          topLeft: Math.max(0, a.topLeft - Math.max(o.t, o.l)),
          topRight: Math.max(0, a.topRight - Math.max(o.t, o.r)),
          bottomLeft: Math.max(0, a.bottomLeft - Math.max(o.b, o.l)),
          bottomRight: Math.max(0, a.bottomRight - Math.max(o.b, o.r))
        }
      }
    };
  }

  function ao(t, e, i, s) {
    var n = null === e,
        o = null === i,
        a = t && !(n && o) && so(t, s);
    return a && (n || Q(e, a.left, a.right)) && (o || Q(i, a.top, a.bottom));
  }

  function ro(t, e) {
    t.rect(e.x, e.y, e.w, e.h);
  }

  function lo(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var s = t.x !== i.x ? -e : 0,
        n = t.y !== i.y ? -e : 0,
        o = (t.x + t.w !== i.x + i.w ? e : 0) - s,
        a = (t.y + t.h !== i.y + i.h ? e : 0) - n;
    return {
      x: t.x + s,
      y: t.y + n,
      w: t.w + o,
      h: t.h + a,
      radius: t.radius
    };
  }

  io.id = "point", io.defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
  }, io.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };

  var ho = /*#__PURE__*/function (_Es5) {
    _inherits(ho, _Es5);

    var _super15 = _createSuper(ho);

    function ho(t) {
      var _this26;

      _classCallCheck(this, ho);

      _this26 = _super15.call(this), _this26.options = void 0, _this26.horizontal = void 0, _this26.base = void 0, _this26.width = void 0, _this26.height = void 0, _this26.inflateAmount = void 0, t && Object.assign(_assertThisInitialized(_this26), t);
      return _this26;
    }

    _createClass(ho, [{
      key: "draw",
      value: function draw(t) {
        var e = this.inflateAmount,
            _this$options13 = this.options,
            i = _this$options13.borderColor,
            s = _this$options13.backgroundColor,
            _oo = oo(this),
            n = _oo.inner,
            o = _oo.outer,
            a = (r = o.radius).topLeft || r.topRight || r.bottomLeft || r.bottomRight ? Le : ro;

        var r;
        t.save(), o.w === n.w && o.h === n.h || (t.beginPath(), a(t, lo(o, e, n)), t.clip(), a(t, lo(n, -e, o)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), a(t, lo(n, e)), t.fillStyle = s, t.fill(), t.restore();
      }
    }, {
      key: "inRange",
      value: function inRange(t, e, i) {
        return ao(this, t, e, i);
      }
    }, {
      key: "inXRange",
      value: function inXRange(t, e) {
        return ao(this, t, null, e);
      }
    }, {
      key: "inYRange",
      value: function inYRange(t, e) {
        return ao(this, null, t, e);
      }
    }, {
      key: "getCenterPoint",
      value: function getCenterPoint(t) {
        var _this$getProps6 = this.getProps(["x", "y", "base", "horizontal"], t),
            e = _this$getProps6.x,
            i = _this$getProps6.y,
            s = _this$getProps6.base,
            n = _this$getProps6.horizontal;

        return {
          x: n ? (e + s) / 2 : e,
          y: n ? i : (i + s) / 2
        };
      }
    }, {
      key: "getRange",
      value: function getRange(t) {
        return "x" === t ? this.width / 2 : this.height / 2;
      }
    }]);

    return ho;
  }(Es);

  ho.id = "bar", ho.defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0
  }, ho.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  var co = Object.freeze({
    __proto__: null,
    ArcElement: Yn,
    LineElement: to,
    PointElement: io,
    BarElement: ho
  });

  function uo(t) {
    if (t._decimated) {
      var _e65 = t._data;
      delete t._decimated, delete t._data, Object.defineProperty(t, "data", {
        value: _e65
      });
    }
  }

  function fo(t) {
    t.data.datasets.forEach(function (t) {
      uo(t);
    });
  }

  var go = {
    id: "decimation",
    defaults: {
      algorithm: "min-max",
      enabled: !1
    },
    beforeElementsUpdate: function beforeElementsUpdate(t, e, s) {
      if (!s.enabled) return void fo(t);
      var n = t.width;
      t.data.datasets.forEach(function (e, o) {
        var a = e._data,
            r = e.indexAxis,
            l = t.getDatasetMeta(o),
            h = a || e.data;
        if ("y" === bi([r, t.options.indexAxis])) return;
        if (!l.controller.supportsDecimation) return;
        var c = t.scales[l.xAxisID];
        if ("linear" !== c.type && "time" !== c.type) return;
        if (t.options.parsing) return;

        var _ref15 = function (t, e) {
          var i = e.length;
          var s,
              n = 0;

          var o = t.iScale,
              _o$getUserBounds = o.getUserBounds(),
              a = _o$getUserBounds.min,
              r = _o$getUserBounds.max,
              l = _o$getUserBounds.minDefined,
              h = _o$getUserBounds.maxDefined;

          return l && (n = Z(et(e, o.axis, a).lo, 0, i - 1)), s = h ? Z(et(e, o.axis, r).hi + 1, n, i) - n : i - n, {
            start: n,
            count: s
          };
        }(l, h),
            d = _ref15.start,
            u = _ref15.count;

        if (u <= (s.threshold || 4 * n)) return void uo(e);
        var f;

        switch (i(a) && (e._data = h, delete e.data, Object.defineProperty(e, "data", {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this._decimated;
          },
          set: function set(t) {
            this._data = t;
          }
        })), s.algorithm) {
          case "lttb":
            f = function (t, e, i, s, n) {
              var o = n.samples || s;
              if (o >= i) return t.slice(e, e + i);
              var a = [],
                  r = (i - 2) / (o - 2);
              var l = 0;
              var h = e + i - 1;
              var c,
                  d,
                  u,
                  f,
                  g,
                  p = e;

              for (a[l++] = t[p], c = 0; c < o - 2; c++) {
                var _s49 = void 0,
                    _n32 = 0,
                    _o30 = 0;

                var _h14 = Math.floor((c + 1) * r) + 1 + e,
                    _m4 = Math.min(Math.floor((c + 2) * r) + 1, i) + e,
                    _b3 = _m4 - _h14;

                for (_s49 = _h14; _s49 < _m4; _s49++) {
                  _n32 += t[_s49].x, _o30 += t[_s49].y;
                }

                _n32 /= _b3, _o30 /= _b3;

                var _x2 = Math.floor(c * r) + 1 + e,
                    _3 = Math.min(Math.floor((c + 1) * r) + 1, i) + e,
                    _t$p = t[p],
                    _y3 = _t$p.x,
                    _v3 = _t$p.y;

                for (u = f = -1, _s49 = _x2; _s49 < _3; _s49++) {
                  f = .5 * Math.abs((_y3 - _n32) * (t[_s49].y - _v3) - (_y3 - t[_s49].x) * (_o30 - _v3)), f > u && (u = f, d = t[_s49], g = _s49);
                }

                a[l++] = d, p = g;
              }

              return a[l++] = t[h], a;
            }(h, d, u, n, s);

            break;

          case "min-max":
            f = function (t, e, s, n) {
              var o,
                  a,
                  r,
                  l,
                  h,
                  c,
                  d,
                  u,
                  f,
                  g,
                  p = 0,
                  m = 0;
              var b = [],
                  x = e + s - 1,
                  _ = t[e].x,
                  y = t[x].x - _;

              for (o = e; o < e + s; ++o) {
                a = t[o], r = (a.x - _) / y * n, l = a.y;

                var _e66 = 0 | r;

                if (_e66 === h) l < f ? (f = l, c = o) : l > g && (g = l, d = o), p = (m * p + a.x) / ++m;else {
                  var _s50 = o - 1;

                  if (!i(c) && !i(d)) {
                    var _e67 = Math.min(c, d),
                        _i53 = Math.max(c, d);

                    _e67 !== u && _e67 !== _s50 && b.push(_objectSpread(_objectSpread({}, t[_e67]), {}, {
                      x: p
                    })), _i53 !== u && _i53 !== _s50 && b.push(_objectSpread(_objectSpread({}, t[_i53]), {}, {
                      x: p
                    }));
                  }

                  o > 0 && _s50 !== u && b.push(t[_s50]), b.push(a), h = _e66, m = 0, f = g = l, c = d = u = o;
                }
              }

              return b;
            }(h, d, u, n);

            break;

          default:
            throw new Error("Unsupported decimation algorithm '".concat(s.algorithm, "'"));
        }

        e._decimated = f;
      });
    },
    destroy: function destroy(t) {
      fo(t);
    }
  };

  function po(t, e, i, s) {
    if (s) return;
    var n = e[t],
        o = i[t];
    return "angle" === t && (n = K(n), o = K(o)), {
      property: t,
      start: n,
      end: o
    };
  }

  function mo(t, e, i) {
    for (; e > t; e--) {
      var _t57 = i[e];
      if (!isNaN(_t57.x) && !isNaN(_t57.y)) break;
    }

    return e;
  }

  function bo(t, e, i, s) {
    return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
  }

  function xo(t, e) {
    var i = [],
        n = !1;
    return s(t) ? (n = !0, i = t) : i = function (t, e) {
      var _ref16 = t || {},
          _ref16$x = _ref16.x,
          i = _ref16$x === void 0 ? null : _ref16$x,
          _ref16$y = _ref16.y,
          s = _ref16$y === void 0 ? null : _ref16$y,
          n = e.points,
          o = [];

      return e.segments.forEach(function (_ref17) {
        var t = _ref17.start,
            e = _ref17.end;
        e = mo(t, e, n);
        var a = n[t],
            r = n[e];
        null !== s ? (o.push({
          x: a.x,
          y: s
        }), o.push({
          x: r.x,
          y: s
        })) : null !== i && (o.push({
          x: i,
          y: a.y
        }), o.push({
          x: i,
          y: r.y
        }));
      }), o;
    }(t, e), i.length ? new to({
      points: i,
      options: {
        tension: 0
      },
      _loop: n,
      _fullLoop: n
    }) : null;
  }

  function _o(t) {
    return t && !1 !== t.fill;
  }

  function yo(t, e, i) {
    var s = t[e].fill;
    var n = [e];
    var a;
    if (!i) return s;

    for (; !1 !== s && -1 === n.indexOf(s);) {
      if (!o(s)) return s;
      if (a = t[s], !a) return !1;
      if (a.visible) return s;
      n.push(s), s = a.fill;
    }

    return !1;
  }

  function vo(t, e, i) {
    var s = function (t) {
      var e = t.options,
          i = e.fill;
      var s = r(i && i.target, i);
      void 0 === s && (s = !!e.backgroundColor);
      if (!1 === s || null === s) return !1;
      if (!0 === s) return "origin";
      return s;
    }(t);

    if (n(s)) return !isNaN(s.value) && s;
    var a = parseFloat(s);
    return o(a) && Math.floor(a) === a ? function (t, e, i, s) {
      "-" !== t && "+" !== t || (i = e + i);
      if (i === e || i < 0 || i >= s) return !1;
      return i;
    }(s[0], e, a, i) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s;
  }

  function wo(t, e, i) {
    var s = [];

    for (var _n33 = 0; _n33 < i.length; _n33++) {
      var _o31 = i[_n33],
          _Mo = Mo(_o31, e, "x"),
          _a21 = _Mo.first,
          _r17 = _Mo.last,
          _l14 = _Mo.point;

      if (!(!_l14 || _a21 && _r17)) if (_a21) s.unshift(_l14);else if (t.push(_l14), !_r17) break;
    }

    t.push.apply(t, s);
  }

  function Mo(t, e, i) {
    var s = t.interpolate(e, i);
    if (!s) return {};
    var n = s[i],
        o = t.segments,
        a = t.points;
    var r = !1,
        l = !1;

    for (var _t58 = 0; _t58 < o.length; _t58++) {
      var _e68 = o[_t58],
          _s51 = a[_e68.start][i],
          _h15 = a[_e68.end][i];

      if (Q(n, _s51, _h15)) {
        r = n === _s51, l = n === _h15;
        break;
      }
    }

    return {
      first: r,
      last: l,
      point: s
    };
  }

  var ko = /*#__PURE__*/function () {
    function ko(t) {
      _classCallCheck(this, ko);

      this.x = t.x, this.y = t.y, this.radius = t.radius;
    }

    _createClass(ko, [{
      key: "pathSegment",
      value: function pathSegment(t, e, i) {
        var s = this.x,
            n = this.y,
            o = this.radius;
        return e = e || {
          start: 0,
          end: O
        }, t.arc(s, n, o, e.end, e.start, !0), !i.bounds;
      }
    }, {
      key: "interpolate",
      value: function interpolate(t) {
        var e = this.x,
            i = this.y,
            s = this.radius,
            n = t.angle;
        return {
          x: e + Math.cos(n) * s,
          y: i + Math.sin(n) * s,
          angle: n
        };
      }
    }]);

    return ko;
  }();

  function So(t) {
    var e = t.chart,
        i = t.fill,
        s = t.line;
    if (o(i)) return function (t, e) {
      var i = t.getDatasetMeta(e);
      return i && t.isDatasetVisible(e) ? i.dataset : null;
    }(e, i);
    if ("stack" === i) return function (t) {
      var e = t.scale,
          i = t.index,
          s = t.line,
          n = [],
          o = s.segments,
          a = s.points,
          r = function (t, e) {
        var i = [],
            s = t.getMatchingVisibleMetas("line");

        for (var _t59 = 0; _t59 < s.length; _t59++) {
          var _n34 = s[_t59];
          if (_n34.index === e) break;
          _n34.hidden || i.unshift(_n34.dataset);
        }

        return i;
      }(e, i);

      r.push(xo({
        x: null,
        y: e.bottom
      }, s));

      for (var _t60 = 0; _t60 < o.length; _t60++) {
        var _e69 = o[_t60];

        for (var _t61 = _e69.start; _t61 <= _e69.end; _t61++) {
          wo(n, a[_t61], r);
        }
      }

      return new to({
        points: n,
        options: {}
      });
    }(t);
    if ("shape" === i) return !0;

    var a = function (t) {
      if ((t.scale || {}).getPointPositionForValue) return function (t) {
        var e = t.scale,
            i = t.fill,
            s = e.options,
            o = e.getLabels().length,
            a = s.reverse ? e.max : e.min,
            r = function (t, e, i) {
          var s;
          return s = "start" === t ? i : "end" === t ? e.options.reverse ? e.min : e.max : n(t) ? t.value : e.getBaseValue(), s;
        }(i, e, a),
            l = [];

        if (s.grid.circular) {
          var _t62 = e.getPointPositionForValue(0, a);

          return new ko({
            x: _t62.x,
            y: _t62.y,
            radius: e.getDistanceFromCenterForValue(r)
          });
        }

        for (var _t63 = 0; _t63 < o; ++_t63) {
          l.push(e.getPointPositionForValue(_t63, r));
        }

        return l;
      }(t);
      return function (t) {
        var _t$scale = t.scale,
            e = _t$scale === void 0 ? {} : _t$scale,
            i = t.fill,
            s = function (t, e) {
          var i = null;
          return "start" === t ? i = e.bottom : "end" === t ? i = e.top : n(t) ? i = e.getPixelForValue(t.value) : e.getBasePixel && (i = e.getBasePixel()), i;
        }(i, e);

        if (o(s)) {
          var _t64 = e.isHorizontal();

          return {
            x: _t64 ? s : null,
            y: _t64 ? null : s
          };
        }

        return null;
      }(t);
    }(t);

    return a instanceof ko ? a : xo(a, s);
  }

  function Po(t, e, i) {
    var s = So(e),
        n = e.line,
        o = e.scale,
        a = e.axis,
        r = n.options,
        l = r.fill,
        h = r.backgroundColor,
        _ref18 = l || {},
        _ref18$above = _ref18.above,
        c = _ref18$above === void 0 ? h : _ref18$above,
        _ref18$below = _ref18.below,
        d = _ref18$below === void 0 ? h : _ref18$below;

    s && n.points.length && (Pe(t, i), function (t, e) {
      var i = e.line,
          s = e.target,
          n = e.above,
          o = e.below,
          a = e.area,
          r = e.scale,
          l = i._loop ? "angle" : e.axis;
      t.save(), "x" === l && o !== n && (Do(t, s, a.top), Oo(t, {
        line: i,
        target: s,
        color: n,
        scale: r,
        property: l
      }), t.restore(), t.save(), Do(t, s, a.bottom));
      Oo(t, {
        line: i,
        target: s,
        color: o,
        scale: r,
        property: l
      }), t.restore();
    }(t, {
      line: n,
      target: s,
      above: c,
      below: d,
      area: i,
      scale: o,
      axis: a
    }), De(t));
  }

  function Do(t, e, i) {
    var s = e.segments,
        n = e.points;
    var o = !0,
        a = !1;
    t.beginPath();

    var _iterator29 = _createForOfIteratorHelper(s),
        _step29;

    try {
      for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
        var _r18 = _step29.value;
        var _s52 = _r18.start,
            _l15 = _r18.end,
            _h16 = n[_s52],
            _c14 = n[mo(_s52, _l15, n)];
        o ? (t.moveTo(_h16.x, _h16.y), o = !1) : (t.lineTo(_h16.x, i), t.lineTo(_h16.x, _h16.y)), a = !!e.pathSegment(t, _r18, {
          move: a
        }), a ? t.closePath() : t.lineTo(_c14.x, i);
      }
    } catch (err) {
      _iterator29.e(err);
    } finally {
      _iterator29.f();
    }

    t.lineTo(e.first().x, i), t.closePath(), t.clip();
  }

  function Oo(t, e) {
    var i = e.line,
        s = e.target,
        n = e.property,
        o = e.color,
        a = e.scale,
        r = function (t, e, i) {
      var s = t.segments,
          n = t.points,
          o = e.points,
          a = [];

      var _iterator30 = _createForOfIteratorHelper(s),
          _step30;

      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var _t65 = _step30.value;
          var _s53 = _t65.start,
              _r19 = _t65.end;
          _r19 = mo(_s53, _r19, n);

          var _l16 = po(i, n[_s53], n[_r19], _t65.loop);

          if (!e.segments) {
            a.push({
              source: _t65,
              target: _l16,
              start: n[_s53],
              end: n[_r19]
            });
            continue;
          }

          var _h17 = Pi(e, _l16);

          var _iterator31 = _createForOfIteratorHelper(_h17),
              _step31;

          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var _e70 = _step31.value;

              var _s54 = po(i, o[_e70.start], o[_e70.end], _e70.loop),
                  _r20 = Si(_t65, n, _s54);

              var _iterator32 = _createForOfIteratorHelper(_r20),
                  _step32;

              try {
                for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                  var _t66 = _step32.value;
                  a.push({
                    source: _t66,
                    target: _e70,
                    start: _defineProperty({}, i, bo(_l16, _s54, "start", Math.max)),
                    end: _defineProperty({}, i, bo(_l16, _s54, "end", Math.min))
                  });
                }
              } catch (err) {
                _iterator32.e(err);
              } finally {
                _iterator32.f();
              }
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }

      return a;
    }(i, s, n);

    var _iterator33 = _createForOfIteratorHelper(r),
        _step33;

    try {
      for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
        var _step33$value = _step33.value,
            _e71 = _step33$value.source,
            _l17 = _step33$value.target,
            _h18 = _step33$value.start,
            _c15 = _step33$value.end;
        var _e71$style = _e71.style;
        _e71$style = _e71$style === void 0 ? {} : _e71$style;

        var _e71$style$background = _e71$style.backgroundColor,
            _r21 = _e71$style$background === void 0 ? o : _e71$style$background,
            _d11 = !0 !== s;

        t.save(), t.fillStyle = _r21, Co(t, a, _d11 && po(n, _h18, _c15)), t.beginPath();

        var _u5 = !!i.pathSegment(t, _e71);

        var _f7 = void 0;

        if (_d11) {
          _u5 ? t.closePath() : Ao(t, s, _c15, n);

          var _e72 = !!s.pathSegment(t, _l17, {
            move: _u5,
            reverse: !0
          });

          _f7 = _u5 && _e72, _f7 || Ao(t, s, _h18, n);
        }

        t.closePath(), t.fill(_f7 ? "evenodd" : "nonzero"), t.restore();
      }
    } catch (err) {
      _iterator33.e(err);
    } finally {
      _iterator33.f();
    }
  }

  function Co(t, e, i) {
    var _e$chart$chartArea = e.chart.chartArea,
        s = _e$chart$chartArea.top,
        n = _e$chart$chartArea.bottom,
        _ref19 = i || {},
        o = _ref19.property,
        a = _ref19.start,
        r = _ref19.end;

    "x" === o && (t.beginPath(), t.rect(a, s, r - a, n - s), t.clip());
  }

  function Ao(t, e, i, s) {
    var n = e.interpolate(i, s);
    n && t.lineTo(n.x, n.y);
  }

  var To = {
    id: "filler",
    afterDatasetsUpdate: function afterDatasetsUpdate(t, e, i) {
      var s = (t.data.datasets || []).length,
          n = [];
      var o, a, r, l;

      for (a = 0; a < s; ++a) {
        o = t.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof to && (l = {
          visible: t.isDatasetVisible(a),
          index: a,
          fill: vo(r, a, s),
          chart: t,
          axis: o.controller.options.indexAxis,
          scale: o.vScale,
          line: r
        }), o.$filler = l, n.push(l);
      }

      for (a = 0; a < s; ++a) {
        l = n[a], l && !1 !== l.fill && (l.fill = yo(n, a, i.propagate));
      }
    },
    beforeDraw: function beforeDraw(t, e, i) {
      var s = "beforeDraw" === i.drawTime,
          n = t.getSortedVisibleDatasetMetas(),
          o = t.chartArea;

      for (var _e73 = n.length - 1; _e73 >= 0; --_e73) {
        var _i54 = n[_e73].$filler;
        _i54 && (_i54.line.updateControlPoints(o, _i54.axis), s && _i54.fill && Po(t.ctx, _i54, o));
      }
    },
    beforeDatasetsDraw: function beforeDatasetsDraw(t, e, i) {
      if ("beforeDatasetsDraw" !== i.drawTime) return;
      var s = t.getSortedVisibleDatasetMetas();

      for (var _e74 = s.length - 1; _e74 >= 0; --_e74) {
        var _i55 = s[_e74].$filler;
        _o(_i55) && Po(t.ctx, _i55, t.chartArea);
      }
    },
    beforeDatasetDraw: function beforeDatasetDraw(t, e, i) {
      var s = e.meta.$filler;
      _o(s) && "beforeDatasetDraw" === i.drawTime && Po(t.ctx, s, t.chartArea);
    },
    defaults: {
      propagate: !0,
      drawTime: "beforeDatasetDraw"
    }
  };

  var Lo = function Lo(t, e) {
    var _t$boxHeight = t.boxHeight,
        i = _t$boxHeight === void 0 ? e : _t$boxHeight,
        _t$boxWidth = t.boxWidth,
        s = _t$boxWidth === void 0 ? e : _t$boxWidth;
    return t.usePointStyle && (i = Math.min(i, e), s = t.pointStyleWidth || Math.min(s, e)), {
      boxWidth: s,
      boxHeight: i,
      itemHeight: Math.max(e, i)
    };
  };

  var Eo = /*#__PURE__*/function (_Es6) {
    _inherits(Eo, _Es6);

    var _super16 = _createSuper(Eo);

    function Eo(t) {
      var _this27;

      _classCallCheck(this, Eo);

      _this27 = _super16.call(this), _this27._added = !1, _this27.legendHitBoxes = [], _this27._hoveredItem = null, _this27.doughnutMode = !1, _this27.chart = t.chart, _this27.options = t.options, _this27.ctx = t.ctx, _this27.legendItems = void 0, _this27.columnSizes = void 0, _this27.lineWidths = void 0, _this27.maxHeight = void 0, _this27.maxWidth = void 0, _this27.top = void 0, _this27.bottom = void 0, _this27.left = void 0, _this27.right = void 0, _this27.height = void 0, _this27.width = void 0, _this27._margins = void 0, _this27.position = void 0, _this27.weight = void 0, _this27.fullSize = void 0;
      return _this27;
    }

    _createClass(Eo, [{
      key: "update",
      value: function update(t, e, i) {
        this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit();
      }
    }, {
      key: "setDimensions",
      value: function setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
      }
    }, {
      key: "buildLabels",
      value: function buildLabels() {
        var _this28 = this;

        var t = this.options.labels || {};
        var e = c(t.generateLabels, [this.chart], this) || [];
        t.filter && (e = e.filter(function (e) {
          return t.filter(e, _this28.chart.data);
        })), t.sort && (e = e.sort(function (e, i) {
          return t.sort(e, i, _this28.chart.data);
        })), this.options.reverse && e.reverse(), this.legendItems = e;
      }
    }, {
      key: "fit",
      value: function fit() {
        var t = this.options,
            e = this.ctx;
        if (!t.display) return void (this.width = this.height = 0);

        var i = t.labels,
            s = mi(i.font),
            n = s.size,
            o = this._computeTitleHeight(),
            _Lo = Lo(i, n),
            a = _Lo.boxWidth,
            r = _Lo.itemHeight;

        var l, h;
        e.font = s.string, this.isHorizontal() ? (l = this.maxWidth, h = this._fitRows(o, n, a, r) + 10) : (h = this.maxHeight, l = this._fitCols(o, n, a, r) + 10), this.width = Math.min(l, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
      }
    }, {
      key: "_fitRows",
      value: function _fitRows(t, e, i, s) {
        var n = this.ctx,
            o = this.maxWidth,
            a = this.options.labels.padding,
            r = this.legendHitBoxes = [],
            l = this.lineWidths = [0],
            h = s + a;
        var c = t;
        n.textAlign = "left", n.textBaseline = "middle";
        var d = -1,
            u = -h;
        return this.legendItems.forEach(function (t, f) {
          var g = i + e / 2 + n.measureText(t.text).width;
          (0 === f || l[l.length - 1] + g + 2 * a > o) && (c += h, l[l.length - (f > 0 ? 0 : 1)] = 0, u += h, d++), r[f] = {
            left: 0,
            top: u,
            row: d,
            width: g,
            height: s
          }, l[l.length - 1] += g + a;
        }), c;
      }
    }, {
      key: "_fitCols",
      value: function _fitCols(t, e, i, s) {
        var n = this.ctx,
            o = this.maxHeight,
            a = this.options.labels.padding,
            r = this.legendHitBoxes = [],
            l = this.columnSizes = [],
            h = o - t;
        var c = a,
            d = 0,
            u = 0,
            f = 0,
            g = 0;
        return this.legendItems.forEach(function (t, o) {
          var p = i + e / 2 + n.measureText(t.text).width;
          o > 0 && u + s + 2 * a > h && (c += d + a, l.push({
            width: d,
            height: u
          }), f += d + a, g++, d = u = 0), r[o] = {
            left: f,
            top: u,
            col: g,
            width: p,
            height: s
          }, d = Math.max(d, p), u += s + a;
        }), c += d, l.push({
          width: d,
          height: u
        }), c;
      }
    }, {
      key: "adjustHitBoxes",
      value: function adjustHitBoxes() {
        if (!this.options.display) return;

        var t = this._computeTitleHeight(),
            e = this.legendHitBoxes,
            _this$options14 = this.options,
            i = _this$options14.align,
            s = _this$options14.labels.padding,
            n = _this$options14.rtl,
            o = yi(n, this.left, this.width);

        if (this.isHorizontal()) {
          var _n35 = 0,
              _a22 = ut(i, this.left + s, this.right - this.lineWidths[_n35]);

          var _iterator34 = _createForOfIteratorHelper(e),
              _step34;

          try {
            for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
              var _r22 = _step34.value;
              _n35 !== _r22.row && (_n35 = _r22.row, _a22 = ut(i, this.left + s, this.right - this.lineWidths[_n35])), _r22.top += this.top + t + s, _r22.left = o.leftForLtr(o.x(_a22), _r22.width), _a22 += _r22.width + s;
            }
          } catch (err) {
            _iterator34.e(err);
          } finally {
            _iterator34.f();
          }
        } else {
          var _n36 = 0,
              _a23 = ut(i, this.top + t + s, this.bottom - this.columnSizes[_n36].height);

          var _iterator35 = _createForOfIteratorHelper(e),
              _step35;

          try {
            for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
              var _r23 = _step35.value;
              _r23.col !== _n36 && (_n36 = _r23.col, _a23 = ut(i, this.top + t + s, this.bottom - this.columnSizes[_n36].height)), _r23.top = _a23, _r23.left += this.left + s, _r23.left = o.leftForLtr(o.x(_r23.left), _r23.width), _a23 += _r23.height + s;
            }
          } catch (err) {
            _iterator35.e(err);
          } finally {
            _iterator35.f();
          }
        }
      }
    }, {
      key: "isHorizontal",
      value: function isHorizontal() {
        return "top" === this.options.position || "bottom" === this.options.position;
      }
    }, {
      key: "draw",
      value: function draw() {
        if (this.options.display) {
          var _t67 = this.ctx;
          Pe(_t67, this), this._draw(), De(_t67);
        }
      }
    }, {
      key: "_draw",
      value: function _draw() {
        var _this29 = this;

        var t = this.options,
            e = this.columnSizes,
            i = this.lineWidths,
            s = this.ctx,
            n = t.align,
            o = t.labels,
            a = ne.color,
            l = yi(t.rtl, this.left, this.width),
            h = mi(o.font),
            c = o.color,
            d = o.padding,
            u = h.size,
            f = u / 2;
        var g;
        this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = .5, s.font = h.string;

        var _Lo2 = Lo(o, u),
            p = _Lo2.boxWidth,
            m = _Lo2.boxHeight,
            b = _Lo2.itemHeight,
            x = this.isHorizontal(),
            _ = this._computeTitleHeight();

        g = x ? {
          x: ut(n, this.left + d, this.right - i[0]),
          y: this.top + d + _,
          line: 0
        } : {
          x: this.left + d,
          y: ut(n, this.top + _ + d, this.bottom - e[0].height),
          line: 0
        }, vi(this.ctx, t.textDirection);
        var y = b + d;
        this.legendItems.forEach(function (v, w) {
          s.strokeStyle = v.fontColor || c, s.fillStyle = v.fontColor || c;
          var M = s.measureText(v.text).width,
              k = l.textAlign(v.textAlign || (v.textAlign = o.textAlign)),
              S = p + f + M;
          var P = g.x,
              D = g.y;
          l.setWidth(_this29.width), x ? w > 0 && P + S + d > _this29.right && (D = g.y += y, g.line++, P = g.x = ut(n, _this29.left + d, _this29.right - i[g.line])) : w > 0 && D + y > _this29.bottom && (P = g.x = P + e[g.line].width + d, g.line++, D = g.y = ut(n, _this29.top + _ + d, _this29.bottom - e[g.line].height));
          !function (t, e, i) {
            if (isNaN(p) || p <= 0 || isNaN(m) || m < 0) return;
            s.save();
            var n = r(i.lineWidth, 1);

            if (s.fillStyle = r(i.fillStyle, a), s.lineCap = r(i.lineCap, "butt"), s.lineDashOffset = r(i.lineDashOffset, 0), s.lineJoin = r(i.lineJoin, "miter"), s.lineWidth = n, s.strokeStyle = r(i.strokeStyle, a), s.setLineDash(r(i.lineDash, [])), o.usePointStyle) {
              var _a24 = {
                radius: m * Math.SQRT2 / 2,
                pointStyle: i.pointStyle,
                rotation: i.rotation,
                borderWidth: n
              },
                  _r24 = l.xPlus(t, p / 2);

              ke(s, _a24, _r24, e + f, o.pointStyleWidth && p);
            } else {
              var _o32 = e + Math.max((u - m) / 2, 0),
                  _a25 = l.leftForLtr(t, p),
                  _r25 = gi(i.borderRadius);

              s.beginPath(), Object.values(_r25).some(function (t) {
                return 0 !== t;
              }) ? Le(s, {
                x: _a25,
                y: _o32,
                w: p,
                h: m,
                radius: _r25
              }) : s.rect(_a25, _o32, p, m), s.fill(), 0 !== n && s.stroke();
            }

            s.restore();
          }(l.x(P), D, v), P = ft(k, P + p + f, x ? P + S : _this29.right, t.rtl), function (t, e, i) {
            Ae(s, i.text, t, e + b / 2, h, {
              strikethrough: i.hidden,
              textAlign: l.textAlign(i.textAlign)
            });
          }(l.x(P), D, v), x ? g.x += S + d : g.y += y;
        }), wi(this.ctx, t.textDirection);
      }
    }, {
      key: "drawTitle",
      value: function drawTitle() {
        var t = this.options,
            e = t.title,
            i = mi(e.font),
            s = pi(e.padding);
        if (!e.display) return;
        var n = yi(t.rtl, this.left, this.width),
            o = this.ctx,
            a = e.position,
            r = i.size / 2,
            l = s.top + r;
        var h,
            c = this.left,
            d = this.width;
        if (this.isHorizontal()) d = Math.max.apply(Math, _toConsumableArray(this.lineWidths)), h = this.top + l, c = ut(t.align, c, this.right - d);else {
          var _e75 = this.columnSizes.reduce(function (t, e) {
            return Math.max(t, e.height);
          }, 0);

          h = l + ut(t.align, this.top, this.bottom - _e75 - t.labels.padding - this._computeTitleHeight());
        }
        var u = ut(a, c, c + d);
        o.textAlign = n.textAlign(dt(a)), o.textBaseline = "middle", o.strokeStyle = e.color, o.fillStyle = e.color, o.font = i.string, Ae(o, e.text, u, h, i);
      }
    }, {
      key: "_computeTitleHeight",
      value: function _computeTitleHeight() {
        var t = this.options.title,
            e = mi(t.font),
            i = pi(t.padding);
        return t.display ? e.lineHeight + i.height : 0;
      }
    }, {
      key: "_getLegendItemAt",
      value: function _getLegendItemAt(t, e) {
        var i, s, n;
        if (Q(t, this.left, this.right) && Q(e, this.top, this.bottom)) for (n = this.legendHitBoxes, i = 0; i < n.length; ++i) {
          if (s = n[i], Q(t, s.left, s.left + s.width) && Q(e, s.top, s.top + s.height)) return this.legendItems[i];
        }
        return null;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(t) {
        var e = this.options;
        if (!function (t, e) {
          if (("mousemove" === t || "mouseout" === t) && (e.onHover || e.onLeave)) return !0;
          if (e.onClick && ("click" === t || "mouseup" === t)) return !0;
          return !1;
        }(t.type, e)) return;

        var i = this._getLegendItemAt(t.x, t.y);

        if ("mousemove" === t.type || "mouseout" === t.type) {
          var _o33 = this._hoveredItem,
              _a26 = (n = i, null !== (s = _o33) && null !== n && s.datasetIndex === n.datasetIndex && s.index === n.index);

          _o33 && !_a26 && c(e.onLeave, [t, _o33, this], this), this._hoveredItem = i, i && !_a26 && c(e.onHover, [t, i, this], this);
        } else i && c(e.onClick, [t, i, this], this);

        var s, n;
      }
    }]);

    return Eo;
  }(Es);

  var Ro = {
    id: "legend",
    _element: Eo,
    start: function start(t, e, i) {
      var s = t.legend = new Eo({
        ctx: t.ctx,
        options: i,
        chart: t
      });
      Zi.configure(t, s, i), Zi.addBox(t, s);
    },
    stop: function stop(t) {
      Zi.removeBox(t, t.legend), delete t.legend;
    },
    beforeUpdate: function beforeUpdate(t, e, i) {
      var s = t.legend;
      Zi.configure(t, s, i), s.options = i;
    },
    afterUpdate: function afterUpdate(t) {
      var e = t.legend;
      e.buildLabels(), e.adjustHitBoxes();
    },
    afterEvent: function afterEvent(t, e) {
      e.replay || t.legend.handleEvent(e.event);
    },
    defaults: {
      display: !0,
      position: "top",
      align: "center",
      fullSize: !0,
      reverse: !1,
      weight: 1e3,
      onClick: function onClick(t, e, i) {
        var s = e.datasetIndex,
            n = i.chart;
        n.isDatasetVisible(s) ? (n.hide(s), e.hidden = !0) : (n.show(s), e.hidden = !1);
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: function color(t) {
          return t.chart.options.color;
        },
        boxWidth: 40,
        padding: 10,
        generateLabels: function generateLabels(t) {
          var e = t.data.datasets,
              _t$legend$options$lab = t.legend.options.labels,
              i = _t$legend$options$lab.usePointStyle,
              s = _t$legend$options$lab.pointStyle,
              n = _t$legend$options$lab.textAlign,
              o = _t$legend$options$lab.color;
          return t._getSortedDatasetMetas().map(function (t) {
            var a = t.controller.getStyle(i ? 0 : void 0),
                r = pi(a.borderWidth);
            return {
              text: e[t.index].label,
              fillStyle: a.backgroundColor,
              fontColor: o,
              hidden: !t.visible,
              lineCap: a.borderCapStyle,
              lineDash: a.borderDash,
              lineDashOffset: a.borderDashOffset,
              lineJoin: a.borderJoinStyle,
              lineWidth: (r.width + r.height) / 4,
              strokeStyle: a.borderColor,
              pointStyle: s || a.pointStyle,
              rotation: a.rotation,
              textAlign: n || a.textAlign,
              borderRadius: 0,
              datasetIndex: t.index
            };
          }, this);
        }
      },
      title: {
        color: function color(t) {
          return t.chart.options.color;
        },
        display: !1,
        position: "center",
        text: ""
      }
    },
    descriptors: {
      _scriptable: function _scriptable(t) {
        return !t.startsWith("on");
      },
      labels: {
        _scriptable: function _scriptable(t) {
          return !["generateLabels", "filter", "sort"].includes(t);
        }
      }
    }
  };

  var Io = /*#__PURE__*/function (_Es7) {
    _inherits(Io, _Es7);

    var _super17 = _createSuper(Io);

    function Io(t) {
      var _this30;

      _classCallCheck(this, Io);

      _this30 = _super17.call(this), _this30.chart = t.chart, _this30.options = t.options, _this30.ctx = t.ctx, _this30._padding = void 0, _this30.top = void 0, _this30.bottom = void 0, _this30.left = void 0, _this30.right = void 0, _this30.width = void 0, _this30.height = void 0, _this30.position = void 0, _this30.weight = void 0, _this30.fullSize = void 0;
      return _this30;
    }

    _createClass(Io, [{
      key: "update",
      value: function update(t, e) {
        var i = this.options;
        if (this.left = 0, this.top = 0, !i.display) return void (this.width = this.height = this.right = this.bottom = 0);
        this.width = this.right = t, this.height = this.bottom = e;
        var n = s(i.text) ? i.text.length : 1;
        this._padding = pi(i.padding);

        var o = n * mi(i.font).lineHeight + this._padding.height;

        this.isHorizontal() ? this.height = o : this.width = o;
      }
    }, {
      key: "isHorizontal",
      value: function isHorizontal() {
        var t = this.options.position;
        return "top" === t || "bottom" === t;
      }
    }, {
      key: "_drawArgs",
      value: function _drawArgs(t) {
        var e = this.top,
            i = this.left,
            s = this.bottom,
            n = this.right,
            o = this.options,
            a = o.align;
        var r,
            l,
            h,
            c = 0;
        return this.isHorizontal() ? (l = ut(a, i, n), h = e + t, r = n - i) : ("left" === o.position ? (l = i + t, h = ut(a, s, e), c = -.5 * D) : (l = n - t, h = ut(a, e, s), c = .5 * D), r = s - e), {
          titleX: l,
          titleY: h,
          maxWidth: r,
          rotation: c
        };
      }
    }, {
      key: "draw",
      value: function draw() {
        var t = this.ctx,
            e = this.options;
        if (!e.display) return;

        var i = mi(e.font),
            s = i.lineHeight / 2 + this._padding.top,
            _this$_drawArgs = this._drawArgs(s),
            n = _this$_drawArgs.titleX,
            o = _this$_drawArgs.titleY,
            a = _this$_drawArgs.maxWidth,
            r = _this$_drawArgs.rotation;

        Ae(t, e.text, 0, 0, i, {
          color: e.color,
          maxWidth: a,
          rotation: r,
          textAlign: dt(e.align),
          textBaseline: "middle",
          translation: [n, o]
        });
      }
    }]);

    return Io;
  }(Es);

  var zo = {
    id: "title",
    _element: Io,
    start: function start(t, e, i) {
      !function (t, e) {
        var i = new Io({
          ctx: t.ctx,
          options: e,
          chart: t
        });
        Zi.configure(t, i, e), Zi.addBox(t, i), t.titleBlock = i;
      }(t, i);
    },
    stop: function stop(t) {
      var e = t.titleBlock;
      Zi.removeBox(t, e), delete t.titleBlock;
    },
    beforeUpdate: function beforeUpdate(t, e, i) {
      var s = t.titleBlock;
      Zi.configure(t, s, i), s.options = i;
    },
    defaults: {
      align: "center",
      display: !1,
      font: {
        weight: "bold"
      },
      fullSize: !0,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: !0,
      _indexable: !1
    }
  };
  var Fo = new WeakMap();
  var Vo = {
    id: "subtitle",
    start: function start(t, e, i) {
      var s = new Io({
        ctx: t.ctx,
        options: i,
        chart: t
      });
      Zi.configure(t, s, i), Zi.addBox(t, s), Fo.set(t, s);
    },
    stop: function stop(t) {
      Zi.removeBox(t, Fo.get(t)), Fo.delete(t);
    },
    beforeUpdate: function beforeUpdate(t, e, i) {
      var s = Fo.get(t);
      Zi.configure(t, s, i), s.options = i;
    },
    defaults: {
      align: "center",
      display: !1,
      font: {
        weight: "normal"
      },
      fullSize: !0,
      padding: 0,
      position: "top",
      text: "",
      weight: 1500
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: !0,
      _indexable: !1
    }
  };
  var Bo = {
    average: function average(t) {
      if (!t.length) return !1;
      var e,
          i,
          s = 0,
          n = 0,
          o = 0;

      for (e = 0, i = t.length; e < i; ++e) {
        var _i56 = t[e].element;

        if (_i56 && _i56.hasValue()) {
          var _t68 = _i56.tooltipPosition();

          s += _t68.x, n += _t68.y, ++o;
        }
      }

      return {
        x: s / o,
        y: n / o
      };
    },
    nearest: function nearest(t, e) {
      if (!t.length) return !1;
      var i,
          s,
          n,
          o = e.x,
          a = e.y,
          r = Number.POSITIVE_INFINITY;

      for (i = 0, s = t.length; i < s; ++i) {
        var _s55 = t[i].element;

        if (_s55 && _s55.hasValue()) {
          var _t69 = X(e, _s55.getCenterPoint());

          _t69 < r && (r = _t69, n = _s55);
        }
      }

      if (n) {
        var _t70 = n.tooltipPosition();

        o = _t70.x, a = _t70.y;
      }

      return {
        x: o,
        y: a
      };
    }
  };

  function No(t, e) {
    return e && (s(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }

  function Wo(t) {
    return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
  }

  function jo(t, e) {
    var i = e.element,
        s = e.datasetIndex,
        n = e.index,
        o = t.getDatasetMeta(s).controller,
        _o$getLabelAndValue = o.getLabelAndValue(n),
        a = _o$getLabelAndValue.label,
        r = _o$getLabelAndValue.value;

    return {
      chart: t,
      label: a,
      parsed: o.getParsed(n),
      raw: t.data.datasets[s].data[n],
      formattedValue: r,
      dataset: o.getDataset(),
      dataIndex: n,
      datasetIndex: s,
      element: i
    };
  }

  function Ho(t, e) {
    var i = t.chart.ctx,
        s = t.body,
        n = t.footer,
        o = t.title,
        a = e.boxWidth,
        r = e.boxHeight,
        l = mi(e.bodyFont),
        h = mi(e.titleFont),
        c = mi(e.footerFont),
        u = o.length,
        f = n.length,
        g = s.length,
        p = pi(e.padding);
    var m = p.height,
        b = 0,
        x = s.reduce(function (t, e) {
      return t + e.before.length + e.lines.length + e.after.length;
    }, 0);

    if (x += t.beforeBody.length + t.afterBody.length, u && (m += u * h.lineHeight + (u - 1) * e.titleSpacing + e.titleMarginBottom), x) {
      m += g * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) + (x - g) * l.lineHeight + (x - 1) * e.bodySpacing;
    }

    f && (m += e.footerMarginTop + f * c.lineHeight + (f - 1) * e.footerSpacing);
    var _ = 0;

    var y = function y(t) {
      b = Math.max(b, i.measureText(t).width + _);
    };

    return i.save(), i.font = h.string, d(t.title, y), i.font = l.string, d(t.beforeBody.concat(t.afterBody), y), _ = e.displayColors ? a + 2 + e.boxPadding : 0, d(s, function (t) {
      d(t.before, y), d(t.lines, y), d(t.after, y);
    }), _ = 0, i.font = c.string, d(t.footer, y), i.restore(), b += p.width, {
      width: b,
      height: m
    };
  }

  function $o(t, e, i, s) {
    var n = i.x,
        o = i.width,
        a = t.width,
        _t$chartArea = t.chartArea,
        r = _t$chartArea.left,
        l = _t$chartArea.right;
    var h = "center";
    return "center" === s ? h = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? h = "left" : n >= a - o / 2 && (h = "right"), function (t, e, i, s) {
      var n = s.x,
          o = s.width,
          a = i.caretSize + i.caretPadding;
      return "left" === t && n + o + a > e.width || "right" === t && n - o - a < 0 || void 0;
    }(h, t, e, i) && (h = "center"), h;
  }

  function Yo(t, e, i) {
    var s = i.yAlign || e.yAlign || function (t, e) {
      var i = e.y,
          s = e.height;
      return i < s / 2 ? "top" : i > t.height - s / 2 ? "bottom" : "center";
    }(t, i);

    return {
      xAlign: i.xAlign || e.xAlign || $o(t, e, i, s),
      yAlign: s
    };
  }

  function Uo(t, e, i, s) {
    var n = t.caretSize,
        o = t.caretPadding,
        a = t.cornerRadius,
        r = i.xAlign,
        l = i.yAlign,
        h = n + o,
        _gi = gi(a),
        c = _gi.topLeft,
        d = _gi.topRight,
        u = _gi.bottomLeft,
        f = _gi.bottomRight;

    var g = function (t, e) {
      var i = t.x,
          s = t.width;
      return "right" === e ? i -= s : "center" === e && (i -= s / 2), i;
    }(e, r);

    var p = function (t, e, i) {
      var s = t.y,
          n = t.height;
      return "top" === e ? s += i : s -= "bottom" === e ? n + i : n / 2, s;
    }(e, l, h);

    return "center" === l ? "left" === r ? g += h : "right" === r && (g -= h) : "left" === r ? g -= Math.max(c, u) + n : "right" === r && (g += Math.max(d, f) + n), {
      x: Z(g, 0, s.width - e.width),
      y: Z(p, 0, s.height - e.height)
    };
  }

  function Xo(t, e, i) {
    var s = pi(i.padding);
    return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - s.right : t.x + s.left;
  }

  function qo(t) {
    return No([], Wo(t));
  }

  function Ko(t, e) {
    var i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
    return i ? t.override(i) : t;
  }

  var Go = /*#__PURE__*/function (_Es8) {
    _inherits(Go, _Es8);

    var _super18 = _createSuper(Go);

    function Go(t) {
      var _this31;

      _classCallCheck(this, Go);

      _this31 = _super18.call(this), _this31.opacity = 0, _this31._active = [], _this31._eventPosition = void 0, _this31._size = void 0, _this31._cachedAnimations = void 0, _this31._tooltipItems = [], _this31.$animations = void 0, _this31.$context = void 0, _this31.chart = t.chart || t._chart, _this31._chart = _this31.chart, _this31.options = t.options, _this31.dataPoints = void 0, _this31.title = void 0, _this31.beforeBody = void 0, _this31.body = void 0, _this31.afterBody = void 0, _this31.footer = void 0, _this31.xAlign = void 0, _this31.yAlign = void 0, _this31.x = void 0, _this31.y = void 0, _this31.height = void 0, _this31.width = void 0, _this31.caretX = void 0, _this31.caretY = void 0, _this31.labelColors = void 0, _this31.labelPointStyles = void 0, _this31.labelTextColors = void 0;
      return _this31;
    }

    _createClass(Go, [{
      key: "initialize",
      value: function initialize(t) {
        this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
      }
    }, {
      key: "_resolveAnimations",
      value: function _resolveAnimations() {
        var t = this._cachedAnimations;
        if (t) return t;
        var e = this.chart,
            i = this.options.setContext(this.getContext()),
            s = i.enabled && e.options.animation && i.animations,
            n = new ys(this.chart, s);
        return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n;
      }
    }, {
      key: "getContext",
      value: function getContext() {
        return this.$context || (this.$context = (t = this.chart.getContext(), e = this, i = this._tooltipItems, _i(t, {
          tooltip: e,
          tooltipItems: i,
          type: "tooltip"
        })));
        var t, e, i;
      }
    }, {
      key: "getTitle",
      value: function getTitle(t, e) {
        var i = e.callbacks,
            s = i.beforeTitle.apply(this, [t]),
            n = i.title.apply(this, [t]),
            o = i.afterTitle.apply(this, [t]);
        var a = [];
        return a = No(a, Wo(s)), a = No(a, Wo(n)), a = No(a, Wo(o)), a;
      }
    }, {
      key: "getBeforeBody",
      value: function getBeforeBody(t, e) {
        return qo(e.callbacks.beforeBody.apply(this, [t]));
      }
    }, {
      key: "getBody",
      value: function getBody(t, e) {
        var _this32 = this;

        var i = e.callbacks,
            s = [];
        return d(t, function (t) {
          var e = {
            before: [],
            lines: [],
            after: []
          },
              n = Ko(i, t);
          No(e.before, Wo(n.beforeLabel.call(_this32, t))), No(e.lines, n.label.call(_this32, t)), No(e.after, Wo(n.afterLabel.call(_this32, t))), s.push(e);
        }), s;
      }
    }, {
      key: "getAfterBody",
      value: function getAfterBody(t, e) {
        return qo(e.callbacks.afterBody.apply(this, [t]));
      }
    }, {
      key: "getFooter",
      value: function getFooter(t, e) {
        var i = e.callbacks,
            s = i.beforeFooter.apply(this, [t]),
            n = i.footer.apply(this, [t]),
            o = i.afterFooter.apply(this, [t]);
        var a = [];
        return a = No(a, Wo(s)), a = No(a, Wo(n)), a = No(a, Wo(o)), a;
      }
    }, {
      key: "_createItems",
      value: function _createItems(t) {
        var _this33 = this;

        var e = this._active,
            i = this.chart.data,
            s = [],
            n = [],
            o = [];
        var a,
            r,
            l = [];

        for (a = 0, r = e.length; a < r; ++a) {
          l.push(jo(this.chart, e[a]));
        }

        return t.filter && (l = l.filter(function (e, s, n) {
          return t.filter(e, s, n, i);
        })), t.itemSort && (l = l.sort(function (e, s) {
          return t.itemSort(e, s, i);
        })), d(l, function (e) {
          var i = Ko(t.callbacks, e);
          s.push(i.labelColor.call(_this33, e)), n.push(i.labelPointStyle.call(_this33, e)), o.push(i.labelTextColor.call(_this33, e));
        }), this.labelColors = s, this.labelPointStyles = n, this.labelTextColors = o, this.dataPoints = l, l;
      }
    }, {
      key: "update",
      value: function update(t, e) {
        var i = this.options.setContext(this.getContext()),
            s = this._active;
        var n,
            o = [];

        if (s.length) {
          var _t71 = Bo[i.position].call(this, s, this._eventPosition);

          o = this._createItems(i), this.title = this.getTitle(o, i), this.beforeBody = this.getBeforeBody(o, i), this.body = this.getBody(o, i), this.afterBody = this.getAfterBody(o, i), this.footer = this.getFooter(o, i);

          var _e76 = this._size = Ho(this, i),
              _a27 = Object.assign({}, _t71, _e76),
              _r26 = Yo(this.chart, i, _a27),
              _l18 = Uo(i, _a27, _r26, this.chart);

          this.xAlign = _r26.xAlign, this.yAlign = _r26.yAlign, n = {
            opacity: 1,
            x: _l18.x,
            y: _l18.y,
            width: _e76.width,
            height: _e76.height,
            caretX: _t71.x,
            caretY: _t71.y
          };
        } else 0 !== this.opacity && (n = {
          opacity: 0
        });

        this._tooltipItems = o, this.$context = void 0, n && this._resolveAnimations().update(this, n), t && i.external && i.external.call(this, {
          chart: this.chart,
          tooltip: this,
          replay: e
        });
      }
    }, {
      key: "drawCaret",
      value: function drawCaret(t, e, i, s) {
        var n = this.getCaretPosition(t, i, s);
        e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3);
      }
    }, {
      key: "getCaretPosition",
      value: function getCaretPosition(t, e, i) {
        var s = this.xAlign,
            n = this.yAlign,
            o = i.caretSize,
            a = i.cornerRadius,
            _gi2 = gi(a),
            r = _gi2.topLeft,
            l = _gi2.topRight,
            h = _gi2.bottomLeft,
            c = _gi2.bottomRight,
            d = t.x,
            u = t.y,
            f = e.width,
            g = e.height;

        var p, m, b, x, _, y;

        return "center" === n ? (_ = u + g / 2, "left" === s ? (p = d, m = p - o, x = _ + o, y = _ - o) : (p = d + f, m = p + o, x = _ - o, y = _ + o), b = p) : (m = "left" === s ? d + Math.max(r, h) + o : "right" === s ? d + f - Math.max(l, c) - o : this.caretX, "top" === n ? (x = u, _ = x - o, p = m - o, b = m + o) : (x = u + g, _ = x + o, p = m + o, b = m - o), y = x), {
          x1: p,
          x2: m,
          x3: b,
          y1: x,
          y2: _,
          y3: y
        };
      }
    }, {
      key: "drawTitle",
      value: function drawTitle(t, e, i) {
        var s = this.title,
            n = s.length;
        var o, a, r;

        if (n) {
          var _l19 = yi(i.rtl, this.x, this.width);

          for (t.x = Xo(this, i.titleAlign, i), e.textAlign = _l19.textAlign(i.titleAlign), e.textBaseline = "middle", o = mi(i.titleFont), a = i.titleSpacing, e.fillStyle = i.titleColor, e.font = o.string, r = 0; r < n; ++r) {
            e.fillText(s[r], _l19.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + a, r + 1 === n && (t.y += i.titleMarginBottom - a);
          }
        }
      }
    }, {
      key: "_drawColorBox",
      value: function _drawColorBox(t, e, i, s, o) {
        var a = this.labelColors[i],
            r = this.labelPointStyles[i],
            l = o.boxHeight,
            h = o.boxWidth,
            c = o.boxPadding,
            d = mi(o.bodyFont),
            u = Xo(this, "left", o),
            f = s.x(u),
            g = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0,
            p = e.y + g;

        if (o.usePointStyle) {
          var _e77 = {
            radius: Math.min(h, l) / 2,
            pointStyle: r.pointStyle,
            rotation: r.rotation,
            borderWidth: 1
          },
              _i57 = s.leftForLtr(f, h) + h / 2,
              _n37 = p + l / 2;

          t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Me(t, _e77, _i57, _n37), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, Me(t, _e77, _i57, _n37);
        } else {
          t.lineWidth = n(a.borderWidth) ? Math.max.apply(Math, _toConsumableArray(Object.values(a.borderWidth))) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;

          var _e78 = s.leftForLtr(f, h - c),
              _i58 = s.leftForLtr(s.xPlus(f, 1), h - c - 2),
              _r27 = gi(a.borderRadius);

          Object.values(_r27).some(function (t) {
            return 0 !== t;
          }) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Le(t, {
            x: _e78,
            y: p,
            w: h,
            h: l,
            radius: _r27
          }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), Le(t, {
            x: _i58,
            y: p + 1,
            w: h - 2,
            h: l - 2,
            radius: _r27
          }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(_e78, p, h, l), t.strokeRect(_e78, p, h, l), t.fillStyle = a.backgroundColor, t.fillRect(_i58, p + 1, h - 2, l - 2));
        }

        t.fillStyle = this.labelTextColors[i];
      }
    }, {
      key: "drawBody",
      value: function drawBody(t, e, i) {
        var s = this.body,
            n = i.bodySpacing,
            o = i.bodyAlign,
            a = i.displayColors,
            r = i.boxHeight,
            l = i.boxWidth,
            h = i.boxPadding,
            c = mi(i.bodyFont);
        var u = c.lineHeight,
            f = 0;

        var g = yi(i.rtl, this.x, this.width),
            p = function p(i) {
          e.fillText(i, g.x(t.x + f), t.y + u / 2), t.y += u + n;
        },
            m = g.textAlign(o);

        var b, x, _, y, v, w, M;

        for (e.textAlign = o, e.textBaseline = "middle", e.font = c.string, t.x = Xo(this, m, i), e.fillStyle = i.bodyColor, d(this.beforeBody, p), f = a && "right" !== m ? "center" === o ? l / 2 + h : l + 2 + h : 0, y = 0, w = s.length; y < w; ++y) {
          for (b = s[y], x = this.labelTextColors[y], e.fillStyle = x, d(b.before, p), _ = b.lines, a && _.length && (this._drawColorBox(e, t, y, g, i), u = Math.max(c.lineHeight, r)), v = 0, M = _.length; v < M; ++v) {
            p(_[v]), u = c.lineHeight;
          }

          d(b.after, p);
        }

        f = 0, u = c.lineHeight, d(this.afterBody, p), t.y -= n;
      }
    }, {
      key: "drawFooter",
      value: function drawFooter(t, e, i) {
        var s = this.footer,
            n = s.length;
        var o, a;

        if (n) {
          var _r28 = yi(i.rtl, this.x, this.width);

          for (t.x = Xo(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = _r28.textAlign(i.footerAlign), e.textBaseline = "middle", o = mi(i.footerFont), e.fillStyle = i.footerColor, e.font = o.string, a = 0; a < n; ++a) {
            e.fillText(s[a], _r28.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + i.footerSpacing;
          }
        }
      }
    }, {
      key: "drawBackground",
      value: function drawBackground(t, e, i, s) {
        var n = this.xAlign,
            o = this.yAlign,
            a = t.x,
            r = t.y,
            l = i.width,
            h = i.height,
            _gi3 = gi(s.cornerRadius),
            c = _gi3.topLeft,
            d = _gi3.topRight,
            u = _gi3.bottomLeft,
            f = _gi3.bottomRight;

        e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(a + c, r), "top" === o && this.drawCaret(t, e, i, s), e.lineTo(a + l - d, r), e.quadraticCurveTo(a + l, r, a + l, r + d), "center" === o && "right" === n && this.drawCaret(t, e, i, s), e.lineTo(a + l, r + h - f), e.quadraticCurveTo(a + l, r + h, a + l - f, r + h), "bottom" === o && this.drawCaret(t, e, i, s), e.lineTo(a + u, r + h), e.quadraticCurveTo(a, r + h, a, r + h - u), "center" === o && "left" === n && this.drawCaret(t, e, i, s), e.lineTo(a, r + c), e.quadraticCurveTo(a, r, a + c, r), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke();
      }
    }, {
      key: "_updateAnimationTarget",
      value: function _updateAnimationTarget(t) {
        var e = this.chart,
            i = this.$animations,
            s = i && i.x,
            n = i && i.y;

        if (s || n) {
          var _i59 = Bo[t.position].call(this, this._active, this._eventPosition);

          if (!_i59) return;

          var _o34 = this._size = Ho(this, t),
              _a28 = Object.assign({}, _i59, this._size),
              _r29 = Yo(e, t, _a28),
              _l20 = Uo(t, _a28, _r29, e);

          s._to === _l20.x && n._to === _l20.y || (this.xAlign = _r29.xAlign, this.yAlign = _r29.yAlign, this.width = _o34.width, this.height = _o34.height, this.caretX = _i59.x, this.caretY = _i59.y, this._resolveAnimations().update(this, _l20));
        }
      }
    }, {
      key: "_willRender",
      value: function _willRender() {
        return !!this.opacity;
      }
    }, {
      key: "draw",
      value: function draw(t) {
        var e = this.options.setContext(this.getContext());
        var i = this.opacity;
        if (!i) return;

        this._updateAnimationTarget(e);

        var s = {
          width: this.width,
          height: this.height
        },
            n = {
          x: this.x,
          y: this.y
        };
        i = Math.abs(i) < .001 ? 0 : i;
        var o = pi(e.padding),
            a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        e.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(n, t, s, e), vi(t, e.textDirection), n.y += o.top, this.drawTitle(n, t, e), this.drawBody(n, t, e), this.drawFooter(n, t, e), wi(t, e.textDirection), t.restore());
      }
    }, {
      key: "getActiveElements",
      value: function getActiveElements() {
        return this._active || [];
      }
    }, {
      key: "setActiveElements",
      value: function setActiveElements(t, e) {
        var _this34 = this;

        var i = this._active,
            s = t.map(function (_ref20) {
          var t = _ref20.datasetIndex,
              e = _ref20.index;

          var i = _this34.chart.getDatasetMeta(t);

          if (!i) throw new Error("Cannot find a dataset at index " + t);
          return {
            datasetIndex: t,
            element: i.data[e],
            index: e
          };
        }),
            n = !u(i, s),
            o = this._positionChanged(s, e);

        (n || o) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        if (e && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;

        var s = this.options,
            n = this._active || [],
            o = this._getActiveElements(t, n, e, i),
            a = this._positionChanged(o, t),
            r = e || !u(o, n) || a;

        return r && (this._active = o, (s.enabled || s.external) && (this._eventPosition = {
          x: t.x,
          y: t.y
        }, this.update(!0, e))), r;
      }
    }, {
      key: "_getActiveElements",
      value: function _getActiveElements(t, e, i, s) {
        var n = this.options;
        if ("mouseout" === t.type) return [];
        if (!s) return e;
        var o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
        return n.reverse && o.reverse(), o;
      }
    }, {
      key: "_positionChanged",
      value: function _positionChanged(t, e) {
        var i = this.caretX,
            s = this.caretY,
            n = this.options,
            o = Bo[n.position].call(this, t, e);
        return !1 !== o && (i !== o.x || s !== o.y);
      }
    }]);

    return Go;
  }(Es);

  Go.positioners = Bo;
  var Zo = {
    id: "tooltip",
    _element: Go,
    positioners: Bo,
    afterInit: function afterInit(t, e, i) {
      i && (t.tooltip = new Go({
        chart: t,
        options: i
      }));
    },
    beforeUpdate: function beforeUpdate(t, e, i) {
      t.tooltip && t.tooltip.initialize(i);
    },
    reset: function reset(t, e, i) {
      t.tooltip && t.tooltip.initialize(i);
    },
    afterDraw: function afterDraw(t) {
      var e = t.tooltip;

      if (e && e._willRender()) {
        var _i60 = {
          tooltip: e
        };
        if (!1 === t.notifyPlugins("beforeTooltipDraw", _i60)) return;
        e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", _i60);
      }
    },
    afterEvent: function afterEvent(t, e) {
      if (t.tooltip) {
        var _i61 = e.replay;
        t.tooltip.handleEvent(e.event, _i61, e.inChartArea) && (e.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: "average",
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      titleFont: {
        weight: "bold"
      },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: "left",
      bodyColor: "#fff",
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: "left",
      footerColor: "#fff",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: {
        weight: "bold"
      },
      footerAlign: "left",
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: function boxHeight(t, e) {
        return e.bodyFont.size;
      },
      boxWidth: function boxWidth(t, e) {
        return e.bodyFont.size;
      },
      multiKeyBackground: "#fff",
      displayColors: !0,
      boxPadding: 0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      animation: {
        duration: 400,
        easing: "easeOutQuart"
      },
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "width", "height", "caretX", "caretY"]
        },
        opacity: {
          easing: "linear",
          duration: 200
        }
      },
      callbacks: {
        beforeTitle: t,
        title: function title(t) {
          if (t.length > 0) {
            var _e79 = t[0],
                _i62 = _e79.chart.data.labels,
                _s56 = _i62 ? _i62.length : 0;

            if (this && this.options && "dataset" === this.options.mode) return _e79.dataset.label || "";
            if (_e79.label) return _e79.label;
            if (_s56 > 0 && _e79.dataIndex < _s56) return _i62[_e79.dataIndex];
          }

          return "";
        },
        afterTitle: t,
        beforeBody: t,
        beforeLabel: t,
        label: function label(t) {
          if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
          var e = t.dataset.label || "";
          e && (e += ": ");
          var s = t.formattedValue;
          return i(s) || (e += s), e;
        },
        labelColor: function labelColor(t) {
          var e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
          return {
            borderColor: e.borderColor,
            backgroundColor: e.backgroundColor,
            borderWidth: e.borderWidth,
            borderDash: e.borderDash,
            borderDashOffset: e.borderDashOffset,
            borderRadius: 0
          };
        },
        labelTextColor: function labelTextColor() {
          return this.options.bodyColor;
        },
        labelPointStyle: function labelPointStyle(t) {
          var e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
          return {
            pointStyle: e.pointStyle,
            rotation: e.rotation
          };
        },
        afterLabel: t,
        afterBody: t,
        beforeFooter: t,
        footer: t,
        afterFooter: t
      }
    },
    defaultRoutes: {
      bodyFont: "font",
      footerFont: "font",
      titleFont: "font"
    },
    descriptors: {
      _scriptable: function _scriptable(t) {
        return "filter" !== t && "itemSort" !== t && "external" !== t;
      },
      _indexable: !1,
      callbacks: {
        _scriptable: !1,
        _indexable: !1
      },
      animation: {
        _fallback: !1
      },
      animations: {
        _fallback: "animation"
      }
    },
    additionalOptionScopes: ["interaction"]
  },
      Jo = Object.freeze({
    __proto__: null,
    Decimation: go,
    Filler: To,
    Legend: Ro,
    SubTitle: Vo,
    Title: zo,
    Tooltip: Zo
  });

  function Qo(t, e, i, s) {
    var n = t.indexOf(e);
    if (-1 === n) return function (t, e, i, s) {
      return "string" == typeof e ? (i = t.push(e) - 1, s.unshift({
        index: i,
        label: e
      })) : isNaN(e) && (i = null), i;
    }(t, e, i, s);
    return n !== t.lastIndexOf(e) ? i : n;
  }

  var ta = /*#__PURE__*/function (_$s) {
    _inherits(ta, _$s);

    var _super19 = _createSuper(ta);

    function ta(t) {
      var _this35;

      _classCallCheck(this, ta);

      _this35 = _super19.call(this, t), _this35._startValue = void 0, _this35._valueRange = 0, _this35._addedLabels = [];
      return _this35;
    }

    _createClass(ta, [{
      key: "init",
      value: function init(t) {
        var e = this._addedLabels;

        if (e.length) {
          var _t72 = this.getLabels();

          var _iterator36 = _createForOfIteratorHelper(e),
              _step36;

          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
              var _step36$value = _step36.value,
                  _i63 = _step36$value.index,
                  _s57 = _step36$value.label;
              _t72[_i63] === _s57 && _t72.splice(_i63, 1);
            }
          } catch (err) {
            _iterator36.e(err);
          } finally {
            _iterator36.f();
          }

          this._addedLabels = [];
        }

        _get2(_getPrototypeOf(ta.prototype), "init", this).call(this, t);
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        if (i(t)) return null;
        var s = this.getLabels();
        return function (t, e) {
          return null === t ? null : Z(Math.round(t), 0, e);
        }(e = isFinite(e) && s[e] === t ? e : Qo(s, t, r(e, t), this._addedLabels), s.length - 1);
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var _this$getUserBounds2 = this.getUserBounds(),
            t = _this$getUserBounds2.minDefined,
            e = _this$getUserBounds2.maxDefined;

        var _this$getMinMax = this.getMinMax(!0),
            i = _this$getMinMax.min,
            s = _this$getMinMax.max;

        "ticks" === this.options.bounds && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s;
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var t = this.min,
            e = this.max,
            i = this.options.offset,
            s = [];
        var n = this.getLabels();
        n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1), this._valueRange = Math.max(n.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? .5 : 0);

        for (var _i64 = t; _i64 <= e; _i64++) {
          s.push({
            value: _i64
          });
        }

        return s;
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(t) {
        var e = this.getLabels();
        return t >= 0 && t < e.length ? e[t] : t;
      }
    }, {
      key: "configure",
      value: function configure() {
        _get2(_getPrototypeOf(ta.prototype), "configure", this).call(this), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(t) {
        return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
      }
    }, {
      key: "getPixelForTick",
      value: function getPixelForTick(t) {
        var e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {
        return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
      }
    }, {
      key: "getBasePixel",
      value: function getBasePixel() {
        return this.bottom;
      }
    }]);

    return ta;
  }($s);

  function ea(t, e, _ref21) {
    var i = _ref21.horizontal,
        s = _ref21.minRotation;
    var n = H(s),
        o = (i ? Math.sin(n) : Math.cos(n)) || .001,
        a = .75 * e * ("" + t).length;
    return Math.min(e / o, a);
  }

  ta.id = "category", ta.defaults = {
    ticks: {
      callback: ta.prototype.getLabelForValue
    }
  };

  var ia = /*#__PURE__*/function (_$s2) {
    _inherits(ia, _$s2);

    var _super20 = _createSuper(ia);

    function ia(t) {
      var _this36;

      _classCallCheck(this, ia);

      _this36 = _super20.call(this, t), _this36.start = void 0, _this36.end = void 0, _this36._startValue = void 0, _this36._endValue = void 0, _this36._valueRange = 0;
      return _this36;
    }

    _createClass(ia, [{
      key: "parse",
      value: function parse(t, e) {
        return i(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t;
      }
    }, {
      key: "handleTickRangeOptions",
      value: function handleTickRangeOptions() {
        var t = this.options.beginAtZero,
            _this$getUserBounds3 = this.getUserBounds(),
            e = _this$getUserBounds3.minDefined,
            i = _this$getUserBounds3.maxDefined;

        var s = this.min,
            n = this.max;

        var o = function o(t) {
          return s = e ? s : t;
        },
            a = function a(t) {
          return n = i ? n : t;
        };

        if (t) {
          var _t73 = z(s),
              _e80 = z(n);

          _t73 < 0 && _e80 < 0 ? a(0) : _t73 > 0 && _e80 > 0 && o(0);
        }

        if (s === n) {
          var _e81 = 1;
          (n >= Number.MAX_SAFE_INTEGER || s <= Number.MIN_SAFE_INTEGER) && (_e81 = Math.abs(.05 * n)), a(n + _e81), t || o(s - _e81);
        }

        this.min = s, this.max = n;
      }
    }, {
      key: "getTickLimit",
      value: function getTickLimit() {
        var t = this.options.ticks;
        var e,
            i = t.maxTicksLimit,
            s = t.stepSize;
        return s ? (e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, e > 1e3 && (console.warn("scales.".concat(this.id, ".ticks.stepSize: ").concat(s, " would result generating up to ").concat(e, " ticks. Limiting to 1000.")), e = 1e3)) : (e = this.computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e;
      }
    }, {
      key: "computeTickLimit",
      value: function computeTickLimit() {
        return Number.POSITIVE_INFINITY;
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var t = this.options,
            e = t.ticks;
        var s = this.getTickLimit();
        s = Math.max(2, s);

        var n = function (t, e) {
          var s = [],
              n = t.bounds,
              o = t.step,
              a = t.min,
              r = t.max,
              l = t.precision,
              h = t.count,
              c = t.maxTicks,
              d = t.maxDigits,
              u = t.includeBounds,
              f = o || 1,
              g = c - 1,
              p = e.min,
              m = e.max,
              b = !i(a),
              x = !i(r),
              _ = !i(h),
              y = (m - p) / (d + 1);

          var v,
              w,
              M,
              k,
              S = F((m - p) / g / f) * f;
          if (S < 1e-14 && !b && !x) return [{
            value: p
          }, {
            value: m
          }];
          k = Math.ceil(m / S) - Math.floor(p / S), k > g && (S = F(k * S / g / f) * f), i(l) || (v = Math.pow(10, l), S = Math.ceil(S * v) / v), "ticks" === n ? (w = Math.floor(p / S) * S, M = Math.ceil(m / S) * S) : (w = p, M = m), b && x && o && W((r - a) / o, S / 1e3) ? (k = Math.round(Math.min((r - a) / S, c)), S = (r - a) / k, w = a, M = r) : _ ? (w = b ? a : w, M = x ? r : M, k = h - 1, S = (M - w) / k) : (k = (M - w) / S, k = N(k, Math.round(k), S / 1e3) ? Math.round(k) : Math.ceil(k));
          var P = Math.max(Y(S), Y(w));
          v = Math.pow(10, i(l) ? P : l), w = Math.round(w * v) / v, M = Math.round(M * v) / v;
          var D = 0;

          for (b && (u && w !== a ? (s.push({
            value: a
          }), w < a && D++, N(Math.round((w + D * S) * v) / v, a, ea(a, y, t)) && D++) : w < a && D++); D < k; ++D) {
            s.push({
              value: Math.round((w + D * S) * v) / v
            });
          }

          return x && u && M !== r ? s.length && N(s[s.length - 1].value, r, ea(r, y, t)) ? s[s.length - 1].value = r : s.push({
            value: r
          }) : x && M !== r || s.push({
            value: M
          }), s;
        }({
          maxTicks: s,
          bounds: t.bounds,
          min: t.min,
          max: t.max,
          precision: e.precision,
          step: e.stepSize,
          count: e.count,
          maxDigits: this._maxDigits(),
          horizontal: this.isHorizontal(),
          minRotation: e.minRotation || 0,
          includeBounds: !1 !== e.includeBounds
        }, this._range || this);

        return "ticks" === t.bounds && j(n, this, "value"), t.reverse ? (n.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), n;
      }
    }, {
      key: "configure",
      value: function configure() {
        var t = this.ticks;
        var e = this.min,
            i = this.max;

        if (_get2(_getPrototypeOf(ia.prototype), "configure", this).call(this), this.options.offset && t.length) {
          var _s58 = (i - e) / Math.max(t.length - 1, 1) / 2;

          e -= _s58, i += _s58;
        }

        this._startValue = e, this._endValue = i, this._valueRange = i - e;
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(t) {
        return li(t, this.chart.options.locale, this.options.ticks.format);
      }
    }]);

    return ia;
  }($s);

  var sa = /*#__PURE__*/function (_ia) {
    _inherits(sa, _ia);

    var _super21 = _createSuper(sa);

    function sa() {
      _classCallCheck(this, sa);

      return _super21.apply(this, arguments);
    }

    _createClass(sa, [{
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var _this$getMinMax2 = this.getMinMax(!0),
            t = _this$getMinMax2.min,
            e = _this$getMinMax2.max;

        this.min = o(t) ? t : 0, this.max = o(e) ? e : 1, this.handleTickRangeOptions();
      }
    }, {
      key: "computeTickLimit",
      value: function computeTickLimit() {
        var t = this.isHorizontal(),
            e = t ? this.width : this.height,
            i = H(this.options.ticks.minRotation),
            s = (t ? Math.sin(i) : Math.cos(i)) || .001,
            n = this._resolveTickFontOptions(0);

        return Math.ceil(e / Math.min(40, n.lineHeight / s));
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(t) {
        return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
      }
    }]);

    return sa;
  }(ia);

  function na(t) {
    return 1 === t / Math.pow(10, Math.floor(I(t)));
  }

  sa.id = "linear", sa.defaults = {
    ticks: {
      callback: Is.formatters.numeric
    }
  };

  var oa = /*#__PURE__*/function (_$s3) {
    _inherits(oa, _$s3);

    var _super22 = _createSuper(oa);

    function oa(t) {
      var _this37;

      _classCallCheck(this, oa);

      _this37 = _super22.call(this, t), _this37.start = void 0, _this37.end = void 0, _this37._startValue = void 0, _this37._valueRange = 0;
      return _this37;
    }

    _createClass(oa, [{
      key: "parse",
      value: function parse(t, e) {
        var i = ia.prototype.parse.apply(this, [t, e]);
        if (0 !== i) return o(i) && i > 0 ? i : null;
        this._zero = !0;
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var _this$getMinMax3 = this.getMinMax(!0),
            t = _this$getMinMax3.min,
            e = _this$getMinMax3.max;

        this.min = o(t) ? Math.max(0, t) : null, this.max = o(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this.handleTickRangeOptions();
      }
    }, {
      key: "handleTickRangeOptions",
      value: function handleTickRangeOptions() {
        var _this$getUserBounds4 = this.getUserBounds(),
            t = _this$getUserBounds4.minDefined,
            e = _this$getUserBounds4.maxDefined;

        var i = this.min,
            s = this.max;

        var n = function n(e) {
          return i = t ? i : e;
        },
            o = function o(t) {
          return s = e ? s : t;
        },
            a = function a(t, e) {
          return Math.pow(10, Math.floor(I(t)) + e);
        };

        i === s && (i <= 0 ? (n(1), o(10)) : (n(a(i, -1)), o(a(s, 1)))), i <= 0 && n(a(s, -1)), s <= 0 && o(a(i, 1)), this._zero && this.min !== this._suggestedMin && i === a(this.min, 0) && n(a(i, -1)), this.min = i, this.max = s;
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var t = this.options,
            e = function (t, e) {
          var i = Math.floor(I(e.max)),
              s = Math.ceil(e.max / Math.pow(10, i)),
              n = [];
          var o = a(t.min, Math.pow(10, Math.floor(I(e.min)))),
              r = Math.floor(I(o)),
              l = Math.floor(o / Math.pow(10, r)),
              h = r < 0 ? Math.pow(10, Math.abs(r)) : 1;

          do {
            n.push({
              value: o,
              major: na(o)
            }), ++l, 10 === l && (l = 1, ++r, h = r >= 0 ? 1 : h), o = Math.round(l * Math.pow(10, r) * h) / h;
          } while (r < i || r === i && l < s);

          var c = a(t.max, o);
          return n.push({
            value: c,
            major: na(o)
          }), n;
        }({
          min: this._userMin,
          max: this._userMax
        }, this);

        return "ticks" === t.bounds && j(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e;
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(t) {
        return void 0 === t ? "0" : li(t, this.chart.options.locale, this.options.ticks.format);
      }
    }, {
      key: "configure",
      value: function configure() {
        var t = this.min;
        _get2(_getPrototypeOf(oa.prototype), "configure", this).call(this), this._startValue = I(t), this._valueRange = I(this.max) - I(t);
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(t) {
        return void 0 !== t && 0 !== t || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (I(t) - this._startValue) / this._valueRange);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {
        var e = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + e * this._valueRange);
      }
    }]);

    return oa;
  }($s);

  function aa(t) {
    var e = t.ticks;

    if (e.display && t.display) {
      var _t74 = pi(e.backdropPadding);

      return r(e.font && e.font.size, ne.font.size) + _t74.height;
    }

    return 0;
  }

  function ra(t, e, i, s, n) {
    return t === s || t === n ? {
      start: e - i / 2,
      end: e + i / 2
    } : t < s || t > n ? {
      start: e - i,
      end: e
    } : {
      start: e,
      end: e + i
    };
  }

  function la(t) {
    var e = {
      l: t.left + t._padding.left,
      r: t.right - t._padding.right,
      t: t.top + t._padding.top,
      b: t.bottom - t._padding.bottom
    },
        i = Object.assign({}, e),
        n = [],
        o = [],
        a = t._pointLabels.length,
        r = t.options.pointLabels,
        l = r.centerPointLabels ? D / a : 0;

    for (var _u6 = 0; _u6 < a; _u6++) {
      var _a29 = r.setContext(t.getPointLabelContext(_u6));

      o[_u6] = _a29.padding;

      var _f8 = t.getPointPosition(_u6, t.drawingArea + o[_u6], l),
          _g6 = mi(_a29.font),
          _p5 = (h = t.ctx, c = _g6, d = s(d = t._pointLabels[_u6]) ? d : [d], {
        w: ye(h, c.string, d),
        h: d.length * c.lineHeight
      });

      n[_u6] = _p5;

      var _m5 = K(t.getIndexAngle(_u6) + l),
          _b4 = Math.round($(_m5));

      ha(i, e, _m5, ra(_b4, _f8.x, _p5.w, 0, 180), ra(_b4, _f8.y, _p5.h, 90, 270));
    }

    var h, c, d;
    t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b), t._pointLabelItems = function (t, e, i) {
      var s = [],
          n = t._pointLabels.length,
          o = t.options,
          a = aa(o) / 2,
          r = t.drawingArea,
          l = o.pointLabels.centerPointLabels ? D / n : 0;

      for (var _o35 = 0; _o35 < n; _o35++) {
        var _n38 = t.getPointPosition(_o35, r + a + i[_o35], l),
            _h19 = Math.round($(K(_n38.angle + L))),
            _c16 = e[_o35],
            _d12 = ua(_n38.y, _c16.h, _h19),
            _u7 = ca(_h19),
            _f9 = da(_n38.x, _c16.w, _u7);

        s.push({
          x: _n38.x,
          y: _d12,
          textAlign: _u7,
          left: _f9,
          top: _d12,
          right: _f9 + _c16.w,
          bottom: _d12 + _c16.h
        });
      }

      return s;
    }(t, n, o);
  }

  function ha(t, e, i, s, n) {
    var o = Math.abs(Math.sin(i)),
        a = Math.abs(Math.cos(i));
    var r = 0,
        l = 0;
    s.start < e.l ? (r = (e.l - s.start) / o, t.l = Math.min(t.l, e.l - r)) : s.end > e.r && (r = (s.end - e.r) / o, t.r = Math.max(t.r, e.r + r)), n.start < e.t ? (l = (e.t - n.start) / a, t.t = Math.min(t.t, e.t - l)) : n.end > e.b && (l = (n.end - e.b) / a, t.b = Math.max(t.b, e.b + l));
  }

  function ca(t) {
    return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
  }

  function da(t, e, i) {
    return "right" === i ? t -= e : "center" === i && (t -= e / 2), t;
  }

  function ua(t, e, i) {
    return 90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e), t;
  }

  function fa(t, e, i, s) {
    var n = t.ctx;
    if (i) n.arc(t.xCenter, t.yCenter, e, 0, O);else {
      var _i65 = t.getPointPosition(0, e);

      n.moveTo(_i65.x, _i65.y);

      for (var _o36 = 1; _o36 < s; _o36++) {
        _i65 = t.getPointPosition(_o36, e), n.lineTo(_i65.x, _i65.y);
      }
    }
  }

  oa.id = "logarithmic", oa.defaults = {
    ticks: {
      callback: Is.formatters.logarithmic,
      major: {
        enabled: !0
      }
    }
  };

  var ga = /*#__PURE__*/function (_ia2) {
    _inherits(ga, _ia2);

    var _super23 = _createSuper(ga);

    function ga(t) {
      var _this38;

      _classCallCheck(this, ga);

      _this38 = _super23.call(this, t), _this38.xCenter = void 0, _this38.yCenter = void 0, _this38.drawingArea = void 0, _this38._pointLabels = [], _this38._pointLabelItems = [];
      return _this38;
    }

    _createClass(ga, [{
      key: "setDimensions",
      value: function setDimensions() {
        var t = this._padding = pi(aa(this.options) / 2),
            e = this.width = this.maxWidth - t.width,
            i = this.height = this.maxHeight - t.height;
        this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2);
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var _this$getMinMax4 = this.getMinMax(!1),
            t = _this$getMinMax4.min,
            e = _this$getMinMax4.max;

        this.min = o(t) && !isNaN(t) ? t : 0, this.max = o(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
      }
    }, {
      key: "computeTickLimit",
      value: function computeTickLimit() {
        return Math.ceil(this.drawingArea / aa(this.options));
      }
    }, {
      key: "generateTickLabels",
      value: function generateTickLabels(t) {
        var _this39 = this;

        ia.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map(function (t, e) {
          var i = c(_this39.options.pointLabels.callback, [t, e], _this39);
          return i || 0 === i ? i : "";
        }).filter(function (t, e) {
          return _this39.chart.getDataVisibility(e);
        });
      }
    }, {
      key: "fit",
      value: function fit() {
        var t = this.options;
        t.display && t.pointLabels.display ? la(this) : this.setCenterPoint(0, 0, 0, 0);
      }
    }, {
      key: "setCenterPoint",
      value: function setCenterPoint(t, e, i, s) {
        this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s));
      }
    }, {
      key: "getIndexAngle",
      value: function getIndexAngle(t) {
        return K(t * (O / (this._pointLabels.length || 1)) + H(this.options.startAngle || 0));
      }
    }, {
      key: "getDistanceFromCenterForValue",
      value: function getDistanceFromCenterForValue(t) {
        if (i(t)) return NaN;
        var e = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
      }
    }, {
      key: "getValueForDistanceFromCenter",
      value: function getValueForDistanceFromCenter(t) {
        if (i(t)) return NaN;
        var e = t / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - e : this.min + e;
      }
    }, {
      key: "getPointLabelContext",
      value: function getPointLabelContext(t) {
        var e = this._pointLabels || [];

        if (t >= 0 && t < e.length) {
          var _i66 = e[t];
          return function (t, e, i) {
            return _i(t, {
              label: i,
              index: e,
              type: "pointLabel"
            });
          }(this.getContext(), t, _i66);
        }
      }
    }, {
      key: "getPointPosition",
      value: function getPointPosition(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var s = this.getIndexAngle(t) - L + i;
        return {
          x: Math.cos(s) * e + this.xCenter,
          y: Math.sin(s) * e + this.yCenter,
          angle: s
        };
      }
    }, {
      key: "getPointPositionForValue",
      value: function getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
      }
    }, {
      key: "getBasePosition",
      value: function getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue());
      }
    }, {
      key: "getPointLabelPosition",
      value: function getPointLabelPosition(t) {
        var _this$_pointLabelItem = this._pointLabelItems[t],
            e = _this$_pointLabelItem.left,
            i = _this$_pointLabelItem.top,
            s = _this$_pointLabelItem.right,
            n = _this$_pointLabelItem.bottom;
        return {
          left: e,
          top: i,
          right: s,
          bottom: n
        };
      }
    }, {
      key: "drawBackground",
      value: function drawBackground() {
        var _this$options15 = this.options,
            t = _this$options15.backgroundColor,
            e = _this$options15.grid.circular;

        if (t) {
          var _i67 = this.ctx;
          _i67.save(), _i67.beginPath(), fa(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), _i67.closePath(), _i67.fillStyle = t, _i67.fill(), _i67.restore();
        }
      }
    }, {
      key: "drawGrid",
      value: function drawGrid() {
        var _this40 = this;

        var t = this.ctx,
            e = this.options,
            s = e.angleLines,
            n = e.grid,
            o = this._pointLabels.length;
        var a, r, l;

        if (e.pointLabels.display && function (t, e) {
          var s = t.ctx,
              n = t.options.pointLabels;

          for (var _o37 = e - 1; _o37 >= 0; _o37--) {
            var _e82 = n.setContext(t.getPointLabelContext(_o37)),
                _a30 = mi(_e82.font),
                _t$_pointLabelItems$_ = t._pointLabelItems[_o37],
                _r30 = _t$_pointLabelItems$_.x,
                _l21 = _t$_pointLabelItems$_.y,
                _h20 = _t$_pointLabelItems$_.textAlign,
                _c17 = _t$_pointLabelItems$_.left,
                _d13 = _t$_pointLabelItems$_.top,
                _u8 = _t$_pointLabelItems$_.right,
                _f10 = _t$_pointLabelItems$_.bottom,
                _g7 = _e82.backdropColor;

            if (!i(_g7)) {
              var _t75 = gi(_e82.borderRadius),
                  _i68 = pi(_e82.backdropPadding);

              s.fillStyle = _g7;

              var _n39 = _c17 - _i68.left,
                  _o38 = _d13 - _i68.top,
                  _a31 = _u8 - _c17 + _i68.width,
                  _r31 = _f10 - _d13 + _i68.height;

              Object.values(_t75).some(function (t) {
                return 0 !== t;
              }) ? (s.beginPath(), Le(s, {
                x: _n39,
                y: _o38,
                w: _a31,
                h: _r31,
                radius: _t75
              }), s.fill()) : s.fillRect(_n39, _o38, _a31, _r31);
            }

            Ae(s, t._pointLabels[_o37], _r30, _l21 + _a30.lineHeight / 2, _a30, {
              color: _e82.color,
              textAlign: _h20,
              textBaseline: "middle"
            });
          }
        }(this, o), n.display && this.ticks.forEach(function (t, e) {
          if (0 !== e) {
            r = _this40.getDistanceFromCenterForValue(t.value);
            !function (t, e, i, s) {
              var n = t.ctx,
                  o = e.circular,
                  a = e.color,
                  r = e.lineWidth;
              !o && !s || !a || !r || i < 0 || (n.save(), n.strokeStyle = a, n.lineWidth = r, n.setLineDash(e.borderDash), n.lineDashOffset = e.borderDashOffset, n.beginPath(), fa(t, i, o, s), n.closePath(), n.stroke(), n.restore());
            }(_this40, n.setContext(_this40.getContext(e - 1)), r, o);
          }
        }), s.display) {
          for (t.save(), a = o - 1; a >= 0; a--) {
            var _i69 = s.setContext(this.getPointLabelContext(a)),
                _n40 = _i69.color,
                _o39 = _i69.lineWidth;

            _o39 && _n40 && (t.lineWidth = _o39, t.strokeStyle = _n40, t.setLineDash(_i69.borderDash), t.lineDashOffset = _i69.borderDashOffset, r = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l = this.getPointPosition(a, r), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke());
          }

          t.restore();
        }
      }
    }, {
      key: "drawBorder",
      value: function drawBorder() {}
    }, {
      key: "drawLabels",
      value: function drawLabels() {
        var _this41 = this;

        var t = this.ctx,
            e = this.options,
            i = e.ticks;
        if (!i.display) return;
        var s = this.getIndexAngle(0);
        var n, o;
        t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach(function (s, a) {
          if (0 === a && !e.reverse) return;
          var r = i.setContext(_this41.getContext(a)),
              l = mi(r.font);

          if (n = _this41.getDistanceFromCenterForValue(_this41.ticks[a].value), r.showLabelBackdrop) {
            t.font = l.string, o = t.measureText(s.label).width, t.fillStyle = r.backdropColor;

            var _e83 = pi(r.backdropPadding);

            t.fillRect(-o / 2 - _e83.left, -n - l.size / 2 - _e83.top, o + _e83.width, l.size + _e83.height);
          }

          Ae(t, s.label, 0, -n, l, {
            color: r.color
          });
        }), t.restore();
      }
    }, {
      key: "drawTitle",
      value: function drawTitle() {}
    }]);

    return ga;
  }(ia);

  ga.id = "radialLinear", ga.defaults = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0
    },
    grid: {
      circular: !1
    },
    startAngle: 0,
    ticks: {
      showLabelBackdrop: !0,
      callback: Is.formatters.numeric
    },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: {
        size: 10
      },
      callback: function callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1
    }
  }, ga.defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
  }, ga.descriptors = {
    angleLines: {
      _fallback: "grid"
    }
  };
  var pa = {
    millisecond: {
      common: !0,
      size: 1,
      steps: 1e3
    },
    second: {
      common: !0,
      size: 1e3,
      steps: 60
    },
    minute: {
      common: !0,
      size: 6e4,
      steps: 60
    },
    hour: {
      common: !0,
      size: 36e5,
      steps: 24
    },
    day: {
      common: !0,
      size: 864e5,
      steps: 30
    },
    week: {
      common: !1,
      size: 6048e5,
      steps: 4
    },
    month: {
      common: !0,
      size: 2628e6,
      steps: 12
    },
    quarter: {
      common: !1,
      size: 7884e6,
      steps: 4
    },
    year: {
      common: !0,
      size: 3154e7
    }
  },
      ma = Object.keys(pa);

  function ba(t, e) {
    return t - e;
  }

  function xa(t, e) {
    if (i(e)) return null;
    var s = t._adapter,
        _t$_parseOpts = t._parseOpts,
        n = _t$_parseOpts.parser,
        a = _t$_parseOpts.round,
        r = _t$_parseOpts.isoWeekday;
    var l = e;
    return "function" == typeof n && (l = n(l)), o(l) || (l = "string" == typeof n ? s.parse(l, n) : s.parse(l)), null === l ? null : (a && (l = "week" !== a || !B(r) && !0 !== r ? s.startOf(l, a) : s.startOf(l, "isoWeek", r)), +l);
  }

  function _a(t, e, i, s) {
    var n = ma.length;

    for (var _o40 = ma.indexOf(t); _o40 < n - 1; ++_o40) {
      var _t76 = pa[ma[_o40]],
          _n41 = _t76.steps ? _t76.steps : Number.MAX_SAFE_INTEGER;

      if (_t76.common && Math.ceil((i - e) / (_n41 * _t76.size)) <= s) return ma[_o40];
    }

    return ma[n - 1];
  }

  function ya(t, e, i) {
    if (i) {
      if (i.length) {
        var _tt = tt(i, e),
            _s59 = _tt.lo,
            _n42 = _tt.hi;

        t[i[_s59] >= e ? i[_s59] : i[_n42]] = !0;
      }
    } else t[e] = !0;
  }

  function va(t, e, i) {
    var s = [],
        n = {},
        o = e.length;
    var a, r;

    for (a = 0; a < o; ++a) {
      r = e[a], n[r] = a, s.push({
        value: r,
        major: !1
      });
    }

    return 0 !== o && i ? function (t, e, i, s) {
      var n = t._adapter,
          o = +n.startOf(e[0].value, s),
          a = e[e.length - 1].value;
      var r, l;

      for (r = o; r <= a; r = +n.add(r, 1, s)) {
        l = i[r], l >= 0 && (e[l].major = !0);
      }

      return e;
    }(t, s, n, i) : s;
  }

  var wa = /*#__PURE__*/function (_$s4) {
    _inherits(wa, _$s4);

    var _super24 = _createSuper(wa);

    function wa(t) {
      var _this42;

      _classCallCheck(this, wa);

      _this42 = _super24.call(this, t), _this42._cache = {
        data: [],
        labels: [],
        all: []
      }, _this42._unit = "day", _this42._majorUnit = void 0, _this42._offsets = {}, _this42._normalized = !1, _this42._parseOpts = void 0;
      return _this42;
    }

    _createClass(wa, [{
      key: "init",
      value: function init(t, e) {
        var i = t.time || (t.time = {}),
            s = this._adapter = new wn._date(t.adapters.date);
        s.init(e), b(i.displayFormats, s.formats()), this._parseOpts = {
          parser: i.parser,
          round: i.round,
          isoWeekday: i.isoWeekday
        }, _get2(_getPrototypeOf(wa.prototype), "init", this).call(this, t), this._normalized = e.normalized;
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        return void 0 === t ? null : xa(this, t);
      }
    }, {
      key: "beforeLayout",
      value: function beforeLayout() {
        _get2(_getPrototypeOf(wa.prototype), "beforeLayout", this).call(this), this._cache = {
          data: [],
          labels: [],
          all: []
        };
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var t = this.options,
            e = this._adapter,
            i = t.time.unit || "day";

        var _this$getUserBounds5 = this.getUserBounds(),
            s = _this$getUserBounds5.min,
            n = _this$getUserBounds5.max,
            a = _this$getUserBounds5.minDefined,
            r = _this$getUserBounds5.maxDefined;

        function l(t) {
          a || isNaN(t.min) || (s = Math.min(s, t.min)), r || isNaN(t.max) || (n = Math.max(n, t.max));
        }

        a && r || (l(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || l(this.getMinMax(!1))), s = o(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), n = o(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, n - 1), this.max = Math.max(s + 1, n);
      }
    }, {
      key: "_getLabelBounds",
      value: function _getLabelBounds() {
        var t = this.getLabelTimestamps();
        var e = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
        return t.length && (e = t[0], i = t[t.length - 1]), {
          min: e,
          max: i
        };
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var t = this.options,
            e = t.time,
            i = t.ticks,
            s = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
        "ticks" === t.bounds && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
        var n = this.min,
            o = st(s, n, this.max);
        return this._unit = e.unit || (i.autoSkip ? _a(e.minUnit, this.min, this.max, this._getLabelCapacity(n)) : function (t, e, i, s, n) {
          for (var _o41 = ma.length - 1; _o41 >= ma.indexOf(i); _o41--) {
            var _i70 = ma[_o41];
            if (pa[_i70].common && t._adapter.diff(n, s, _i70) >= e - 1) return _i70;
          }

          return ma[i ? ma.indexOf(i) : 0];
        }(this, o.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function (t) {
          for (var _e84 = ma.indexOf(t) + 1, _i71 = ma.length; _e84 < _i71; ++_e84) {
            if (pa[ma[_e84]].common) return ma[_e84];
          }
        }(this._unit) : void 0, this.initOffsets(s), t.reverse && o.reverse(), va(this, o, this._majorUnit);
      }
    }, {
      key: "afterAutoSkip",
      value: function afterAutoSkip() {
        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(function (t) {
          return +t.value;
        }));
      }
    }, {
      key: "initOffsets",
      value: function initOffsets(t) {
        var e,
            i,
            s = 0,
            n = 0;
        this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), n = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
        var o = t.length < 3 ? .5 : .25;
        s = Z(s, 0, o), n = Z(n, 0, o), this._offsets = {
          start: s,
          end: n,
          factor: 1 / (s + 1 + n)
        };
      }
    }, {
      key: "_generate",
      value: function _generate() {
        var t = this._adapter,
            e = this.min,
            i = this.max,
            s = this.options,
            n = s.time,
            o = n.unit || _a(n.minUnit, e, i, this._getLabelCapacity(e)),
            a = r(n.stepSize, 1),
            l = "week" === o && n.isoWeekday,
            h = B(l) || !0 === l,
            c = {};

        var d,
            u,
            f = e;
        if (h && (f = +t.startOf(f, "isoWeek", l)), f = +t.startOf(f, h ? "day" : o), t.diff(i, e, o) > 1e5 * a) throw new Error(e + " and " + i + " are too far apart with stepSize of " + a + " " + o);
        var g = "data" === s.ticks.source && this.getDataTimestamps();

        for (d = f, u = 0; d < i; d = +t.add(d, a, o), u++) {
          ya(c, d, g);
        }

        return d !== i && "ticks" !== s.bounds && 1 !== u || ya(c, d, g), Object.keys(c).sort(function (t, e) {
          return t - e;
        }).map(function (t) {
          return +t;
        });
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(t) {
        var e = this._adapter,
            i = this.options.time;
        return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime);
      }
    }, {
      key: "_tickFormatFunction",
      value: function _tickFormatFunction(t, e, i, s) {
        var n = this.options,
            o = n.time.displayFormats,
            a = this._unit,
            r = this._majorUnit,
            l = a && o[a],
            h = r && o[r],
            d = i[e],
            u = r && h && d && d.major,
            f = this._adapter.format(t, s || (u ? h : l)),
            g = n.ticks.callback;

        return g ? c(g, [f, e, i], this) : f;
      }
    }, {
      key: "generateTickLabels",
      value: function generateTickLabels(t) {
        var e, i, s;

        for (e = 0, i = t.length; e < i; ++e) {
          s = t[e], s.label = this._tickFormatFunction(s.value, e, t);
        }
      }
    }, {
      key: "getDecimalForValue",
      value: function getDecimalForValue(t) {
        return null === t ? NaN : (t - this.min) / (this.max - this.min);
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(t) {
        var e = this._offsets,
            i = this.getDecimalForValue(t);
        return this.getPixelForDecimal((e.start + i) * e.factor);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {
        var e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
        return this.min + i * (this.max - this.min);
      }
    }, {
      key: "_getLabelSize",
      value: function _getLabelSize(t) {
        var e = this.options.ticks,
            i = this.ctx.measureText(t).width,
            s = H(this.isHorizontal() ? e.maxRotation : e.minRotation),
            n = Math.cos(s),
            o = Math.sin(s),
            a = this._resolveTickFontOptions(0).size;

        return {
          w: i * n + a * o,
          h: i * o + a * n
        };
      }
    }, {
      key: "_getLabelCapacity",
      value: function _getLabelCapacity(t) {
        var e = this.options.time,
            i = e.displayFormats,
            s = i[e.unit] || i.millisecond,
            n = this._tickFormatFunction(t, 0, va(this, [t], this._majorUnit), s),
            o = this._getLabelSize(n),
            a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;

        return a > 0 ? a : 1;
      }
    }, {
      key: "getDataTimestamps",
      value: function getDataTimestamps() {
        var t,
            e,
            i = this._cache.data || [];
        if (i.length) return i;
        var s = this.getMatchingVisibleMetas();
        if (this._normalized && s.length) return this._cache.data = s[0].controller.getAllParsedValues(this);

        for (t = 0, e = s.length; t < e; ++t) {
          i = i.concat(s[t].controller.getAllParsedValues(this));
        }

        return this._cache.data = this.normalize(i);
      }
    }, {
      key: "getLabelTimestamps",
      value: function getLabelTimestamps() {
        var t = this._cache.labels || [];
        var e, i;
        if (t.length) return t;
        var s = this.getLabels();

        for (e = 0, i = s.length; e < i; ++e) {
          t.push(xa(this, s[e]));
        }

        return this._cache.labels = this._normalized ? t : this.normalize(t);
      }
    }, {
      key: "normalize",
      value: function normalize(t) {
        return rt(t.sort(ba));
      }
    }]);

    return wa;
  }($s);

  function Ma(t, e, i) {
    var _et, _t$r, _t$l, _et2, _t$r2, _t$l2;

    var s,
        n,
        o,
        a,
        r = 0,
        l = t.length - 1;
    i ? (e >= t[r].pos && e <= t[l].pos && (_et = et(t, "pos", e), r = _et.lo, l = _et.hi, _et), (_t$r = t[r], s = _t$r.pos, o = _t$r.time, _t$r), (_t$l = t[l], n = _t$l.pos, a = _t$l.time, _t$l)) : (e >= t[r].time && e <= t[l].time && (_et2 = et(t, "time", e), r = _et2.lo, l = _et2.hi, _et2), (_t$r2 = t[r], s = _t$r2.time, o = _t$r2.pos, _t$r2), (_t$l2 = t[l], n = _t$l2.time, a = _t$l2.pos, _t$l2));
    var h = n - s;
    return h ? o + (a - o) * (e - s) / h : o;
  }

  wa.id = "time", wa.defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {}
    },
    ticks: {
      source: "auto",
      major: {
        enabled: !1
      }
    }
  };

  var ka = /*#__PURE__*/function (_wa) {
    _inherits(ka, _wa);

    var _super25 = _createSuper(ka);

    function ka(t) {
      var _this43;

      _classCallCheck(this, ka);

      _this43 = _super25.call(this, t), _this43._table = [], _this43._minPos = void 0, _this43._tableRange = void 0;
      return _this43;
    }

    _createClass(ka, [{
      key: "initOffsets",
      value: function initOffsets() {
        var t = this._getTimestampsForTable(),
            e = this._table = this.buildLookupTable(t);

        this._minPos = Ma(e, this.min), this._tableRange = Ma(e, this.max) - this._minPos, _get2(_getPrototypeOf(ka.prototype), "initOffsets", this).call(this, t);
      }
    }, {
      key: "buildLookupTable",
      value: function buildLookupTable(t) {
        var e = this.min,
            i = this.max,
            s = [],
            n = [];
        var o, a, r, l, h;

        for (o = 0, a = t.length; o < a; ++o) {
          l = t[o], l >= e && l <= i && s.push(l);
        }

        if (s.length < 2) return [{
          time: e,
          pos: 0
        }, {
          time: i,
          pos: 1
        }];

        for (o = 0, a = s.length; o < a; ++o) {
          h = s[o + 1], r = s[o - 1], l = s[o], Math.round((h + r) / 2) !== l && n.push({
            time: l,
            pos: o / (a - 1)
          });
        }

        return n;
      }
    }, {
      key: "_getTimestampsForTable",
      value: function _getTimestampsForTable() {
        var t = this._cache.all || [];
        if (t.length) return t;
        var e = this.getDataTimestamps(),
            i = this.getLabelTimestamps();
        return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, t = this._cache.all = t, t;
      }
    }, {
      key: "getDecimalForValue",
      value: function getDecimalForValue(t) {
        return (Ma(this._table, t) - this._minPos) / this._tableRange;
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {
        var e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
        return Ma(this._table, i * this._tableRange + this._minPos, !0);
      }
    }]);

    return ka;
  }(wa);

  ka.id = "timeseries", ka.defaults = wa.defaults;
  var Sa = Object.freeze({
    __proto__: null,
    CategoryScale: ta,
    LinearScale: sa,
    LogarithmicScale: oa,
    RadialLinearScale: ga,
    TimeScale: wa,
    TimeSeriesScale: ka
  });
  return bn.register(Bn, Sa, co, Jo), bn.helpers = _objectSpread({}, Ti), bn._adapters = wn, bn.Animation = xs, bn.Animations = ys, bn.animator = mt, bn.controllers = Us.controllers.items, bn.DatasetController = Ls, bn.Element = Es, bn.elements = co, bn.Interaction = Vi, bn.layouts = Zi, bn.platforms = ps, bn.Scale = $s, bn.Ticks = Is, Object.assign(bn, Bn, Sa, co, Jo, ps), bn.Chart = bn, "undefined" != typeof window && (window.Chart = bn), bn;
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53102" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/vendor/chart.js"], null)
//# sourceMappingURL=/chart.83531636.js.map