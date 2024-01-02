/**
 * 初始化PageSpy
 * + https://fastly.jsdelivr.net/npm/@huolala-tech/page-spy
 */
let initPageSpy = function () {
  var PageSpy = (function () {
    "use strict";
    function D(t, e) {
      var n,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(t)),
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, n)),
        r
      );
    }
    function U(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? D(Object(n), !0).forEach(function (e) {
              c(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : D(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function E() {
      E = function () {
        return a;
      };
      var a = {},
        e = Object.prototype,
        c = e.hasOwnProperty,
        u =
          Object.defineProperty ||
          function (e, t, n) {
            e[t] = n.value;
          },
        t = "function" == typeof Symbol ? Symbol : {},
        r = t.iterator || "@@iterator",
        n = t.asyncIterator || "@@asyncIterator",
        o = t.toStringTag || "@@toStringTag";
      function i(e, t, n) {
        return (
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        i({}, "");
      } catch (e) {
        i = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function s(e, t, n, r) {
        var o,
          i,
          a,
          s,
          t = t && t.prototype instanceof d ? t : d,
          t = Object.create(t.prototype),
          r = new w(r || []);
        return (
          u(t, "_invoke", {
            value:
              ((o = e),
              (i = n),
              (a = r),
              (s = "suspendedStart"),
              function (e, t) {
                if ("executing" === s)
                  throw new Error("Generator is already running");
                if ("completed" === s) {
                  if ("throw" === e) throw t;
                  return x();
                }
                for (a.method = e, a.arg = t; ; ) {
                  var n = a.delegate;
                  if (n) {
                    n = (function e(t, n) {
                      var r = n.method,
                        o = t.iterator[r];
                      if (void 0 === o)
                        return (
                          (n.delegate = null),
                          ("throw" === r &&
                            t.iterator.return &&
                            ((n.method = "return"),
                            (n.arg = void 0),
                            e(t, n),
                            "throw" === n.method)) ||
                            ("return" !== r &&
                              ((n.method = "throw"),
                              (n.arg = new TypeError(
                                "The iterator does not provide a '" +
                                  r +
                                  "' method"
                              )))),
                          f
                        );
                      r = l(o, t.iterator, n.arg);
                      if ("throw" === r.type)
                        return (
                          (n.method = "throw"),
                          (n.arg = r.arg),
                          (n.delegate = null),
                          f
                        );
                      o = r.arg;
                      return o
                        ? o.done
                          ? ((n[t.resultName] = o.value),
                            (n.next = t.nextLoc),
                            "return" !== n.method &&
                              ((n.method = "next"), (n.arg = void 0)),
                            (n.delegate = null),
                            f)
                          : o
                        : ((n.method = "throw"),
                          (n.arg = new TypeError(
                            "iterator result is not an object"
                          )),
                          (n.delegate = null),
                          f);
                    })(n, a);
                    if (n) {
                      if (n === f) continue;
                      return n;
                    }
                  }
                  if ("next" === a.method) a.sent = a._sent = a.arg;
                  else if ("throw" === a.method) {
                    if ("suspendedStart" === s)
                      throw ((s = "completed"), a.arg);
                    a.dispatchException(a.arg);
                  } else "return" === a.method && a.abrupt("return", a.arg);
                  s = "executing";
                  n = l(o, i, a);
                  if ("normal" === n.type) {
                    if (
                      ((s = a.done ? "completed" : "suspendedYield"),
                      n.arg === f)
                    )
                      continue;
                    return { value: n.arg, done: a.done };
                  }
                  "throw" === n.type &&
                    ((s = "completed"), (a.method = "throw"), (a.arg = n.arg));
                }
              }),
          }),
          t
        );
      }
      function l(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      a.wrap = s;
      var f = {};
      function d() {}
      function p() {}
      function h() {}
      var t = {},
        g =
          (i(t, r, function () {
            return this;
          }),
          Object.getPrototypeOf),
        g = g && g(g(k([]))),
        y =
          (g && g !== e && c.call(g, r) && (t = g),
          (h.prototype = d.prototype = Object.create(t)));
      function v(e) {
        ["next", "throw", "return"].forEach(function (t) {
          i(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function m(a, s) {
        var t;
        u(this, "_invoke", {
          value: function (n, r) {
            function e() {
              return new s(function (e, t) {
                !(function t(e, n, r, o) {
                  var i,
                    e = l(a[e], a, n);
                  if ("throw" !== e.type)
                    return (n = (i = e.arg).value) &&
                      "object" == typeof n &&
                      c.call(n, "__await")
                      ? s.resolve(n.__await).then(
                          function (e) {
                            t("next", e, r, o);
                          },
                          function (e) {
                            t("throw", e, r, o);
                          }
                        )
                      : s.resolve(n).then(
                          function (e) {
                            (i.value = e), r(i);
                          },
                          function (e) {
                            return t("throw", e, r, o);
                          }
                        );
                  o(e.arg);
                })(n, r, e, t);
              });
            }
            return (t = t ? t.then(e, e) : e());
          },
        });
      }
      function b(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function A(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function w(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(b, this),
          this.reset(!0);
      }
      function k(t) {
        if (t) {
          var n,
            e = t[r];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length))
            return (
              (n = -1),
              ((e = function e() {
                for (; ++n < t.length; )
                  if (c.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              }).next = e)
            );
        }
        return { next: x };
      }
      function x() {
        return { value: void 0, done: !0 };
      }
      return (
        u(y, "constructor", { value: (p.prototype = h), configurable: !0 }),
        u(h, "constructor", { value: p, configurable: !0 }),
        (p.displayName = i(h, o, "GeneratorFunction")),
        (a.isGeneratorFunction = function (e) {
          e = "function" == typeof e && e.constructor;
          return (
            !!e &&
            (e === p || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (a.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, h)
              : ((e.__proto__ = h), i(e, o, "GeneratorFunction")),
            (e.prototype = Object.create(y)),
            e
          );
        }),
        (a.awrap = function (e) {
          return { __await: e };
        }),
        v(m.prototype),
        i(m.prototype, n, function () {
          return this;
        }),
        (a.AsyncIterator = m),
        (a.async = function (e, t, n, r, o) {
          void 0 === o && (o = Promise);
          var i = new m(s(e, t, n, r), o);
          return a.isGeneratorFunction(t)
            ? i
            : i.next().then(function (e) {
                return e.done ? e.value : i.next();
              });
        }),
        v(y),
        i(y, o, "Generator"),
        i(y, r, function () {
          return this;
        }),
        i(y, "toString", function () {
          return "[object Generator]";
        }),
        (a.keys = function (e) {
          var t,
            n = Object(e),
            r = [];
          for (t in n) r.push(t);
          return (
            r.reverse(),
            function e() {
              for (; r.length; ) {
                var t = r.pop();
                if (t in n) return (e.value = t), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (a.values = k),
        (w.prototype = {
          constructor: w,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(A),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  c.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (n) {
            if (this.done) throw n;
            var r = this;
            function e(e, t) {
              return (
                (i.type = "throw"),
                (i.arg = n),
                (r.next = e),
                t && ((r.method = "next"), (r.arg = void 0)),
                !!t
              );
            }
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var o = this.tryEntries[t],
                i = o.completion;
              if ("root" === o.tryLoc) return e("end");
              if (o.tryLoc <= this.prev) {
                var a = c.call(o, "catchLoc"),
                  s = c.call(o, "finallyLoc");
                if (a && s) {
                  if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                } else if (a) {
                  if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                } else {
                  if (!s)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
              var r = this.tryEntries[n];
              if (
                r.tryLoc <= this.prev &&
                c.call(r, "finallyLoc") &&
                this.prev < r.finallyLoc
              ) {
                var o = r;
                break;
              }
            }
            var i = (o =
              o &&
              ("break" === e || "continue" === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc
                ? null
                : o)
              ? o.completion
              : {};
            return (
              (i.type = e),
              (i.arg = t),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                : this.complete(i)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              f
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), A(n), f;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var n,
                r,
                o = this.tryEntries[t];
              if (o.tryLoc === e)
                return (
                  "throw" === (n = o.completion).type && ((r = n.arg), A(o)), r
                );
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: k(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              f
            );
          },
        }),
        a
      );
    }
    function N(e) {
      return (N =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function _(e, t, n, r, o, i, a) {
      try {
        var s = e[i](a),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, o);
    }
    function l(s) {
      return function () {
        var e = this,
          a = arguments;
        return new Promise(function (t, n) {
          var r = s.apply(e, a);
          function o(e) {
            _(r, t, n, o, i, "next", e);
          }
          function i(e) {
            _(r, t, n, o, i, "throw", e);
          }
          o(void 0);
        });
      };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function q(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, ee(r.key), r);
      }
    }
    function s(e, t, n) {
      return (
        t && q(e.prototype, t),
        n && q(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function c(e, t, n) {
      (t = ee(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n);
    }
    function F(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && H(e, t);
    }
    function Q(e) {
      return (Q = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function H(e, t) {
      return (H = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
    }
    function z(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function G(n) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var e,
          t = Q(n),
          t =
            ((e = r
              ? ((e = Q(this).constructor), Reflect.construct(t, arguments, e))
              : t.apply(this, arguments)),
            this);
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return z(t);
      };
    }
    function W(e, t) {
      return (
        J(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != n) {
            var r,
              o,
              i,
              a,
              s = [],
              c = !0,
              u = !1;
            try {
              if (((i = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                c = !1;
              } else
                for (
                  ;
                  !(c = (r = i.call(n)).done) &&
                  (s.push(r.value), s.length !== t);
                  c = !0
                );
            } catch (e) {
              (u = !0), (o = e);
            } finally {
              try {
                if (
                  !c &&
                  null != n.return &&
                  ((a = n.return()), Object(a) !== a)
                )
                  return;
              } finally {
                if (u) throw o;
              }
            }
            return s;
          }
        })(e, t) ||
        $(e, t) ||
        K()
      );
    }
    function V(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return Y(e);
        })(e) ||
        X(e) ||
        $(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function J(e) {
      if (Array.isArray(e)) return e;
    }
    function X(e) {
      if (
        ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e["@@iterator"]
      )
        return Array.from(e);
    }
    function $(e, t) {
      var n;
      if (e)
        return "string" == typeof e
          ? Y(e, t)
          : "Map" ===
              (n =
                "Object" ===
                  (n = Object.prototype.toString.call(e).slice(8, -1)) &&
                e.constructor
                  ? e.constructor.name
                  : n) || "Set" === n
          ? Array.from(e)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Y(e, t)
          : void 0;
    }
    function Y(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function K() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    function Z(e, t) {
      var n,
        r,
        o,
        i,
        a =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
      if (a)
        return (
          (r = !(n = !0)),
          {
            s: function () {
              a = a.call(e);
            },
            n: function () {
              var e = a.next();
              return (n = e.done), e;
            },
            e: function (e) {
              (r = !0), (o = e);
            },
            f: function () {
              try {
                n || null == a.return || a.return();
              } finally {
                if (r) throw o;
              }
            },
          }
        );
      if (
        Array.isArray(e) ||
        (a = $(e)) ||
        (t && e && "number" == typeof e.length)
      )
        return (
          a && (e = a),
          (i = 0),
          {
            s: (t = function () {}),
            n: function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            },
            e: function (e) {
              throw e;
            },
            f: t,
          }
        );
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    function ee(e) {
      e = (function (e, t) {
        if ("object" != typeof e || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 === n) return ("string" === t ? String : Number)(e);
        if ("object" != typeof (n = n.call(e, t || "default"))) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      })(e, "string");
      return "symbol" == typeof e ? e : String(e);
    }
    function te(e) {
      return e && e.Math == Math && e;
    }
    function ne(t, n) {
      try {
        Ue(De, t, { value: n, configurable: !0, writable: !0 });
      } catch (e) {
        De[t] = n;
      }
      return n;
    }
    function e(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    }
    function re(e) {
      return null == e;
    }
    function oe(e) {
      if (Fe(e)) throw Qe("Can't call method on " + e);
      return e;
    }
    function ie(e) {
      return ze(He(e));
    }
    function ae(e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + $e(++Je + Xe, 36);
    }
    function t(e) {
      return (
        Ze(rt, e) || (rt[e] = et && Ze(nt, e) ? nt[e] : ot("Symbol." + e)),
        rt[e]
      );
    }
    function se(e) {
      return ut ? ct.createElement(e) : {};
    }
    function n(e) {
      if (dt(e)) return e;
      throw ht(pt(e) + " is not an object");
    }
    function ce(e, t) {
      return arguments.length < 2
        ? ((n = yt[e]), vt(n) ? n : void 0)
        : yt[e] && yt[e][t];
      var n;
    }
    function ue(e) {
      try {
        return xt(e);
      } catch (e) {
        return "Object";
      }
    }
    function le(e) {
      if (Et(e)) return e;
      throw Pt(St(e) + " is not a function");
    }
    function fe(e, t) {
      return (e = e[t]), Ot(e) ? void 0 : Tt(e);
    }
    function de(e, t) {
      if (!Bt(e) || Mt(e)) return e;
      var n = Dt(e, _t);
      if (n) {
        if (
          ((n = Lt(n, e, (t = void 0 === t ? "default" : t))), !Bt(n) || Mt(n))
        )
          return n;
        throw Nt("Can't convert object to primitive value");
      }
      return Ut(e, (t = void 0 === t ? "number" : t));
    }
    function pe(e) {
      return (e = qt(e, "string")), Ft(e) ? e : e + "";
    }
    function he(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    }
    function ge(e) {
      return on[e] || (on[e] = rn(e));
    }
    function ye(e, t, n, r) {
      var o = (r = r || {}).enumerable,
        i = void 0 !== r.name ? r.name : t;
      if ((Rn(n) && In(n, i, r), r.global)) o ? (e[t] = n) : Cn(t, n);
      else {
        try {
          r.unsafe ? e[t] && (o = !0) : delete e[t];
        } catch (e) {}
        o
          ? (e[t] = n)
          : jn.f(e, t, {
              value: n,
              enumerable: !1,
              configurable: !r.nonConfigurable,
              writable: !r.nonWritable,
            });
      }
      return e;
    }
    function ve(e) {
      return Bn(Ln(e), 8, -1);
    }
    function me(e) {
      if ("Function" === Fn(e)) return Qn(e);
    }
    function be(e, t) {
      return (
        Hn(e),
        void 0 === t
          ? e
          : zn
          ? Gn(e, t)
          : function () {
              return e.apply(t, arguments);
            }
      );
    }
    function Ae(e) {
      return (e = +e) != e || 0 == e ? 0 : Yn(e);
    }
    function we(e) {
      return 0 < e ? Zn(Kn(e), 9007199254740991) : 0;
    }
    function ke(e) {
      return er(e.length);
    }
    function xe() {}
    function Ee(e) {
      if (!rr(e)) return !1;
      try {
        return sr(xe, ar, e), !0;
      } catch (e) {
        return !1;
      }
    }
    function Se(e) {
      if (!rr(e)) return !1;
      switch (or(e)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return lr || !!ur(cr, ir(e));
      } catch (e) {
        return !0;
      }
    }
    function Pe(e, t) {
      return new (yr(e))(0 === t ? 0 : t);
    }
    function Te(d) {
      var p = 1 == d,
        h = 2 == d,
        g = 3 == d,
        y = 4 == d,
        v = 6 == d,
        m = 7 == d,
        b = 5 == d || v;
      return function (e, t, n, r) {
        for (
          var o,
            i,
            a = br(e),
            s = mr(a),
            c = vr(t, n),
            u = Ar(s),
            l = 0,
            t = r || wr,
            f = p ? t(e, u) : h || m ? t(e, 0) : void 0;
          l < u;
          l++
        )
          if ((b || l in s) && ((i = c((o = s[l]), l, a)), d))
            if (p) f[l] = i;
            else if (i)
              switch (d) {
                case 3:
                  return !0;
                case 5:
                  return o;
                case 6:
                  return l;
                case 2:
                  kr(f, o);
              }
            else
              switch (d) {
                case 4:
                  return !1;
                case 7:
                  kr(f, o);
              }
        return v ? -1 : g || y ? y : f;
      };
    }
    function Oe(e, t) {
      var n = [][e];
      return (
        !!n &&
        xr(function () {
          n.call(
            null,
            t ||
              function () {
                return 1;
              },
            1
          );
        })
      );
    }
    function Re(t) {
      if (t && t.forEach !== Or)
        try {
          Rr(t, "forEach", Or);
        } catch (e) {
          t.forEach = Or;
        }
    }
    var je,
      Ie,
      Ce,
      Le,
      Be,
      r =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      r =
        te("object" == typeof globalThis && globalThis) ||
        te("object" == typeof window && window) ||
        te("object" == typeof self && self) ||
        te("object" == typeof r && r) ||
        (function () {
          return this;
        })() ||
        Function("return this")(),
      Me = {},
      i = {
        get exports() {
          return Me;
        },
        set exports(e) {
          Me = e;
        },
      },
      De = r,
      Ue = Object.defineProperty,
      a = ne,
      Ne = "__core-js_shared__",
      a = r[Ne] || a(Ne, {}),
      _e = a,
      Ne =
        ((i.exports = function (e, t) {
          return _e[e] || (_e[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.30.1",
          mode: "global",
          copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",
          source: "https://github.com/zloirock/core-js",
        }),
        !e(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        })),
      i = Ne,
      u = Function.prototype,
      qe = u.call,
      u = i && u.bind.bind(qe, qe),
      i = i
        ? u
        : function (e) {
            return function () {
              return qe.apply(e, arguments);
            };
          },
      Fe = re,
      Qe = TypeError,
      He = oe,
      ze = Object,
      Ge = ie,
      We = i({}.hasOwnProperty),
      u =
        Object.hasOwn ||
        function (e, t) {
          return We(Ge(e), t);
        },
      Ve = i,
      Je = 0,
      Xe = Math.random(),
      $e = Ve((1).toString),
      Ve =
        ("undefined" != typeof navigator && String(navigator.userAgent)) || "",
      f = Ve,
      Ye = r.process,
      d = r.Deno,
      Ye = (Ye && Ye.versions) || (d && d.version),
      d = Ye && Ye.v8,
      Ye = (h =
        !(h = d
          ? 0 < (p = d.split("."))[0] && p[0] < 4
            ? 1
            : +(p[0] + p[1])
          : h) &&
        f &&
        (!(p = f.match(/Edge\/(\d+)/)) || 74 <= p[1]) &&
        (p = f.match(/Chrome\/(\d+)/))
          ? +p[1]
          : h),
      Ke = Ye,
      d = e,
      f =
        !!Object.getOwnPropertySymbols &&
        !d(function () {
          var e = Symbol();
          return (
            !String(e) ||
            !(Object(e) instanceof Symbol) ||
            (!Symbol.sham && Ke && Ke < 41)
          );
        }),
      p = f && !Symbol.sham && "symbol" == typeof Symbol.iterator,
      h = Me,
      Ze = u,
      d = ae,
      et = f,
      tt = p,
      nt = r.Symbol,
      rt = h("wks"),
      ot = tt ? nt.for || nt : (nt && nt.withoutSetter) || d,
      h = {},
      tt = ((h[t("toStringTag")] = "z"), "[object z]" === String(h)),
      d = "object" == typeof document && document.all,
      h = { all: d, IS_HTMLDDA: void 0 === d && void 0 !== d },
      it = h.all,
      d = h.IS_HTMLDDA
        ? function (e) {
            return "function" == typeof e || e === it;
          }
        : function (e) {
            return "function" == typeof e;
          },
      g = {},
      y = !e(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      }),
      at = d,
      st = h.all,
      h = h.IS_HTMLDDA
        ? function (e) {
            return "object" == typeof e ? null !== e : at(e) || e === st;
          }
        : function (e) {
            return "object" == typeof e ? null !== e : at(e);
          },
      v = h,
      ct = r.document,
      ut = v(ct) && v(ct.createElement),
      lt = se,
      v =
        !y &&
        !e(function () {
          return (
            7 !=
            Object.defineProperty(lt("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        }),
      ft =
        y &&
        e(function () {
          return (
            42 !=
            Object.defineProperty(function () {}, "prototype", {
              value: 42,
              writable: !1,
            }).prototype
          );
        }),
      dt = h,
      pt = String,
      ht = TypeError,
      gt = Function.prototype.call,
      m = Ne
        ? gt.bind(gt)
        : function () {
            return gt.apply(gt, arguments);
          },
      yt = r,
      vt = d,
      mt = i({}.isPrototypeOf),
      bt = ce,
      At = d,
      wt = mt,
      kt = Object,
      p = p
        ? function (e) {
            return "symbol" == typeof e;
          }
        : function (e) {
            var t = bt("Symbol");
            return At(t) && wt(t.prototype, kt(e));
          },
      xt = String,
      Et = d,
      St = ue,
      Pt = TypeError,
      Tt = le,
      Ot = re,
      Rt = m,
      jt = d,
      It = h,
      Ct = TypeError,
      Lt = m,
      Bt = h,
      Mt = p,
      Dt = fe,
      Ut = function (e, t) {
        var n, r;
        if ("string" === t && jt((n = e.toString)) && !It((r = Rt(n, e))))
          return r;
        if (jt((n = e.valueOf)) && !It((r = Rt(n, e)))) return r;
        if ("string" !== t && jt((n = e.toString)) && !It((r = Rt(n, e))))
          return r;
        throw Ct("Can't convert object to primitive value");
      },
      Nt = TypeError,
      _t = t("toPrimitive"),
      qt = de,
      Ft = p,
      Qt = v,
      Ht = n,
      zt = pe,
      Gt = TypeError,
      Wt = Object.defineProperty,
      Vt = Object.getOwnPropertyDescriptor,
      Jt = "enumerable",
      Xt = "configurable",
      $t = "writable",
      Yt =
        ((g.f = y
          ? ft
            ? function (e, t, n) {
                var r;
                return (
                  Ht(e),
                  (t = zt(t)),
                  Ht(n),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in n &&
                    $t in n &&
                    !n[$t] &&
                    (r = Vt(e, t)) &&
                    r[$t] &&
                    ((e[t] = n.value),
                    (n = {
                      configurable: (Xt in n ? n : r)[Xt],
                      enumerable: (Jt in n ? n : r)[Jt],
                      writable: !1,
                    })),
                  Wt(e, t, n)
                );
              }
            : Wt
          : function (e, t, n) {
              if ((Ht(e), (t = zt(t)), Ht(n), Qt))
                try {
                  return Wt(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n) throw Gt("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            }),
        {}),
      b = {
        get exports() {
          return Yt;
        },
        set exports(e) {
          Yt = e;
        },
      },
      A = y,
      Kt = u,
      Zt = Function.prototype,
      w = A && Object.getOwnPropertyDescriptor,
      Kt = Kt(Zt, "name"),
      Kt = {
        EXISTS: Kt,
        PROPER: Kt && "something" === function () {}.name,
        CONFIGURABLE: Kt && (!A || w(Zt, "name").configurable),
      },
      A = d,
      w = a,
      en = i(Function.toString),
      Zt =
        (A(w.inspectSource) ||
          (w.inspectSource = function (e) {
            return en(e);
          }),
        w.inspectSource),
      A = d,
      w = r.WeakMap,
      A = A(w) && /native code/.test(String(w)),
      tn = g,
      nn = he,
      w = y
        ? function (e, t, n) {
            return tn.f(e, t, nn(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          },
      rn = ae,
      on = Me("keys"),
      an = {},
      sn = h,
      cn = w,
      un = u,
      ln = ge,
      fn = an,
      dn = "Object already initialized",
      pn = r.TypeError,
      k = r.WeakMap,
      hn =
        A || a.state
          ? (((Ce = a.state || (a.state = new k())).get = Ce.get),
            (Ce.has = Ce.has),
            (Ce.set = Ce.set),
            (je = function (e, t) {
              if (Ce.has(e)) throw pn(dn);
              return (t.facade = e), Ce.set(e, t), t;
            }),
            (Ie = function (e) {
              return Ce.get(e) || {};
            }),
            function (e) {
              return Ce.has(e);
            })
          : ((fn[(Le = ln("state"))] = !0),
            (je = function (e, t) {
              if (un(e, Le)) throw pn(dn);
              return (t.facade = e), cn(e, Le, t), t;
            }),
            (Ie = function (e) {
              return un(e, Le) ? e[Le] : {};
            }),
            function (e) {
              return un(e, Le);
            }),
      A = {
        set: je,
        get: Ie,
        has: hn,
        enforce: function (e) {
          return hn(e) ? Ie(e) : je(e, {});
        },
        getterFor: function (t) {
          return function (e) {
            if (sn(e) && (e = Ie(e)).type === t) return e;
            throw pn("Incompatible receiver, " + t + " required");
          };
        },
      },
      a = i,
      k = e,
      gn = d,
      yn = u,
      vn = y,
      mn = Kt.CONFIGURABLE,
      bn = Zt,
      An = A.enforce,
      wn = A.get,
      kn = String,
      xn = Object.defineProperty,
      En = a("".slice),
      Sn = a("".replace),
      Pn = a([].join),
      Tn =
        vn &&
        !k(function () {
          return 8 !== xn(function () {}, "length", { value: 8 }).length;
        }),
      On = String(String).split("String"),
      fn = (b.exports = function (e, t, n) {
        "Symbol(" === En(kn(t), 0, 7) &&
          (t = "[" + Sn(kn(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
          n && n.getter && (t = "get " + t),
          n && n.setter && (t = "set " + t),
          (!yn(e, "name") || (mn && e.name !== t)) &&
            (vn ? xn(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
          Tn &&
            n &&
            yn(n, "arity") &&
            e.length !== n.arity &&
            xn(e, "length", { value: n.arity });
        try {
          n && yn(n, "constructor") && n.constructor
            ? vn && xn(e, "prototype", { writable: !1 })
            : e.prototype && (e.prototype = void 0);
        } catch (e) {}
        n = An(e);
        return (
          yn(n, "source") || (n.source = Pn(On, "string" == typeof t ? t : "")),
          e
        );
      }),
      Rn =
        ((Function.prototype.toString = fn(function () {
          return (gn(this) && wn(this).source) || bn(this);
        }, "toString")),
        d),
      jn = g,
      In = Yt,
      Cn = ne,
      ln = i,
      Ln = ln({}.toString),
      Bn = ln("".slice),
      a = tt,
      Mn = d,
      Dn = ve,
      Un = t("toStringTag"),
      Nn = Object,
      _n =
        "Arguments" ==
        Dn(
          (function () {
            return arguments;
          })()
        ),
      k = a
        ? Dn
        : function (e) {
            var t;
            return void 0 === e
              ? "Undefined"
              : null === e
              ? "Null"
              : "string" ==
                typeof (t = (function (e, t) {
                  try {
                    return e[t];
                  } catch (e) {}
                })((e = Nn(e)), Un))
              ? t
              : _n
              ? Dn(e)
              : "Object" == (t = Dn(e)) && Mn(e.callee)
              ? "Arguments"
              : t;
          },
      qn = k,
      b =
        (tt ||
          ye(
            Object.prototype,
            "toString",
            tt
              ? {}.toString
              : function () {
                  return "[object " + qn(this) + "]";
                },
            { unsafe: !0 }
          ),
        {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        }),
      fn = se("span").classList,
      ln = fn && fn.constructor && fn.constructor.prototype,
      a = ln === Object.prototype ? void 0 : ln,
      Fn = ve,
      Qn = i,
      Hn = le,
      zn = Ne,
      Gn = me(me.bind),
      tt = e,
      Wn = ve,
      Vn = Object,
      Jn = i("".split),
      fn = tt(function () {
        return !Vn("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == Wn(e) ? Jn(e, "") : Vn(e);
          }
        : Vn,
      Xn = Math.ceil,
      $n = Math.floor,
      Yn =
        Math.trunc ||
        function (e) {
          e = +e;
          return (0 < e ? $n : Xn)(e);
        },
      Kn = Ae,
      Zn = Math.min,
      er = we,
      tr = ve,
      ln =
        Array.isArray ||
        function (e) {
          return "Array" == tr(e);
        },
      tt = i,
      nr = e,
      rr = d,
      or = k,
      ir = Zt,
      ar = [],
      sr = ce("Reflect", "construct"),
      cr = /^\s*(?:class|function)\b/,
      ur = tt(cr.exec),
      lr = !cr.exec(xe),
      tt =
        ((Se.sham = !0),
        !sr ||
        nr(function () {
          var e;
          return (
            Ee(Ee.call) ||
            !Ee(Object) ||
            !Ee(function () {
              e = !0;
            }) ||
            e
          );
        })
          ? Se
          : Ee),
      fr = ln,
      dr = tt,
      pr = h,
      hr = t("species"),
      gr = Array,
      yr = function (e) {
        var t;
        return void 0 ===
          (t =
            fr(e) &&
            ((t = e.constructor),
            (dr(t) && (t === gr || fr(t.prototype))) ||
              (pr(t) && null === (t = t[hr])))
              ? void 0
              : t)
          ? gr
          : t;
      },
      vr = be,
      mr = fn,
      br = ie,
      Ar = ke,
      wr = Pe,
      kr = i([].push),
      nr = {
        forEach: Te(0),
        map: Te(1),
        filter: Te(2),
        some: Te(3),
        every: Te(4),
        find: Te(5),
        findIndex: Te(6),
        filterReject: Te(7),
      },
      xr = e,
      Er = nr.forEach,
      Sr = r,
      Pr = b,
      Tr = a,
      Or = Oe("forEach")
        ? [].forEach
        : function (e) {
            return Er(this, e, 1 < arguments.length ? arguments[1] : void 0);
          },
      Rr = w;
    for (Be in Pr) Pr[Be] && Re(Sr[Be] && Sr[Be].prototype);
    Re(Tr);
    function jr(e) {
      return Gr(Wr(e));
    }
    function Ir(e, t) {
      return (e = to(e)) < 0 ? no(e + t, 0) : ro(e, t);
    }
    function Cr(s) {
      return function (e, t, n) {
        var r,
          o = oo(e),
          i = ao(o),
          a = io(n, i);
        if (s && t != t) {
          for (; a < i; ) if ((r = o[a++]) != r) return !0;
        } else
          for (; a < i; a++)
            if ((s || a in o) && o[a] === t) return s || a || 0;
        return !s && -1;
      };
    }
    function Lr(e, t) {
      var n,
        r = co(e),
        o = 0,
        i = [];
      for (n in r) !so(lo, n) && so(r, n) && fo(i, n);
      for (; t.length > o; ) !so(r, (n = t[o++])) || ~uo(i, n) || fo(i, n);
      return i;
    }
    function Br(e, t, n) {
      for (var r = wo(t), o = xo.f, i = ko.f, a = 0; a < r.length; a++) {
        var s = r[a];
        Ao(e, s) || (n && Ao(n, s)) || o(e, s, i(t, s));
      }
    }
    function Mr(e, t) {
      return (e = Oo[To(e)]) == jo || (e != Ro && (So(t) ? Eo(t) : !!t));
    }
    function x(e, t) {
      var n,
        r,
        o,
        i = e.target,
        a = e.global,
        s = e.stat,
        c = a ? Co : s ? Co[i] || Do(i, {}) : (Co[i] || {}).prototype;
      if (c)
        for (n in t) {
          if (
            ((r = t[n]),
            (o = e.dontCallGetSet ? (o = Lo(c, n)) && o.value : c[n]),
            !No(a ? n : i + (s ? "." : "#") + n, e.forced) && void 0 !== o)
          ) {
            if (typeof r == typeof o) continue;
            Uo(r, o);
          }
          (e.sham || (o && o.sham)) && Bo(r, "sham", !0), Mo(c, n, r, e);
        }
    }
    function S(e) {
      if ("Symbol" === Qo(e))
        throw TypeError("Cannot convert a Symbol value to a string");
      return Ho(e);
    }
    function Dr(e, t) {
      var n = ni(arguments),
        r = ri(t);
      if (ei(r) || (void 0 !== e && !ti(e)))
        return (
          (n[1] = function (e, t) {
            if ((ei(r) && (t = Ko(r, this, oi(e), t)), !ti(t))) return t;
          }),
          Yo(ii, null, n)
        );
    }
    function Ur(e, t, n) {
      var r = si(n, t - 1),
        n = si(n, t + 1);
      return (ai(di, e) && !ai(pi, n)) || (ai(pi, e) && !ai(di, r))
        ? "\\u" + li(ci(e, 0), 16)
        : e;
    }
    function Nr(e) {
      if (9007199254740991 < e) throw yi("Maximum allowed index exceeded");
      return e;
    }
    function _r(e, t, n) {
      (t = vi(t)) in e ? mi.f(e, t, bi(0, n)) : (e[t] = n);
    }
    function qr(t) {
      return (
        51 <= wi ||
        !Ai(function () {
          var e = [];
          return (
            ((e.constructor = {})[ki] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    }
    var Tr = {},
      Fr = {},
      Qr = {}.propertyIsEnumerable,
      Hr = Object.getOwnPropertyDescriptor,
      zr = Hr && !Qr.call({ 1: 2 }, 1),
      Gr =
        ((Fr.f = zr
          ? function (e) {
              e = Hr(this, e);
              return !!e && e.enumerable;
            }
          : Qr),
        fn),
      Wr = oe,
      Vr = m,
      Jr = Fr,
      Xr = he,
      $r = jr,
      Yr = pe,
      Kr = u,
      Zr = v,
      eo = Object.getOwnPropertyDescriptor,
      zr =
        ((Tr.f = y
          ? eo
          : function (e, t) {
              if (((e = $r(e)), (t = Yr(t)), Zr))
                try {
                  return eo(e, t);
                } catch (e) {}
              if (Kr(e, t)) return Xr(!Vr(Jr.f, e, t), e[t]);
            }),
        {}),
      to = Ae,
      no = Math.max,
      ro = Math.min,
      oo = jr,
      io = Ir,
      ao = ke,
      Qr = { includes: Cr(!0), indexOf: Cr(!1) },
      v = i,
      so = u,
      co = jr,
      uo = Qr.indexOf,
      lo = an,
      fo = v([].push),
      v = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ],
      po = Lr,
      ho = v.concat("length", "prototype"),
      P =
        ((zr.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return po(e, ho);
          }),
        {}),
      go = ((P.f = Object.getOwnPropertySymbols), ce),
      yo = zr,
      vo = P,
      mo = n,
      bo = i([].concat),
      go =
        go("Reflect", "ownKeys") ||
        function (e) {
          var t = yo.f(mo(e)),
            n = vo.f;
          return n ? bo(t, n(e)) : t;
        },
      Ao = u,
      wo = go,
      ko = Tr,
      xo = g,
      Eo = e,
      So = d,
      Po = /#|\.prototype\./,
      To = (Mr.normalize = function (e) {
        return String(e).replace(Po, ".").toLowerCase();
      }),
      Oo = (Mr.data = {}),
      Ro = (Mr.NATIVE = "N"),
      jo = (Mr.POLYFILL = "P"),
      Io = Mr,
      Co = r,
      Lo = Tr.f,
      Bo = w,
      Mo = ye,
      Do = ne,
      Uo = Br,
      No = Io,
      _o = Function.prototype,
      qo = _o.apply,
      Fo = _o.call,
      _o =
        ("object" == typeof Reflect && Reflect.apply) ||
        (Ne
          ? Fo.bind(qo)
          : function () {
              return Fo.apply(qo, arguments);
            }),
      Ne = i([].slice),
      Qo = k,
      Ho = String,
      zo = ln,
      Go = d,
      Wo = ve,
      Vo = S,
      Jo = i([].push),
      Xo = x,
      $o = ce,
      Yo = _o,
      Ko = m,
      Zo = i,
      T = e,
      ei = d,
      ti = p,
      ni = Ne,
      ri = function (e) {
        if (Go(e)) return e;
        if (zo(e)) {
          for (var t = e.length, r = [], n = 0; n < t; n++) {
            var o = e[n];
            "string" == typeof o
              ? Jo(r, o)
              : ("number" != typeof o &&
                  "Number" != Wo(o) &&
                  "String" != Wo(o)) ||
                Jo(r, Vo(o));
          }
          var i = r.length,
            a = !0;
          return function (e, t) {
            if (a) return (a = !1), t;
            if (zo(this)) return t;
            for (var n = 0; n < i; n++) if (r[n] === e) return t;
          };
        }
      },
      oi = String,
      ii = $o("JSON", "stringify"),
      ai = Zo(/./.exec),
      si = Zo("".charAt),
      ci = Zo("".charCodeAt),
      ui = Zo("".replace),
      li = Zo((1).toString),
      fi = /[\uD800-\uDFFF]/g,
      di = /^[\uD800-\uDBFF]$/,
      pi = /^[\uDC00-\uDFFF]$/,
      hi =
        !f ||
        T(function () {
          var e = $o("Symbol")();
          return (
            "[null]" != ii([e]) || "{}" != ii({ a: e }) || "{}" != ii(Object(e))
          );
        }),
      gi = T(function () {
        return (
          '"\\udf06\\ud834"' !== ii("\udf06\ud834") ||
          '"\\udead"' !== ii("\udead")
        );
      }),
      yi =
        (ii &&
          Xo(
            { target: "JSON", stat: !0, arity: 3, forced: hi || gi },
            {
              stringify: function (e, t, n) {
                var r = ni(arguments),
                  r = Yo(hi ? Dr : ii, null, r);
                return gi && "string" == typeof r ? ui(r, fi, Ur) : r;
              },
            }
          ),
        TypeError),
      vi = pe,
      mi = g,
      bi = he,
      Ai = e,
      wi = Ye,
      ki = t("species"),
      Zo = x,
      f = e,
      xi = ln,
      Ei = h,
      Si = ie,
      Pi = ke,
      Ti = Nr,
      Oi = _r,
      Ri = Pe,
      T = qr,
      Xo = Ye,
      ji = t("isConcatSpreadable"),
      Xo =
        51 <= Xo ||
        !f(function () {
          var e = [];
          return (e[ji] = !1), e.concat()[0] !== e;
        }),
      f =
        (Zo(
          { target: "Array", proto: !0, arity: 1, forced: !Xo || !T("concat") },
          {
            concat: function (e) {
              for (
                var t,
                  n,
                  r,
                  o,
                  i,
                  a = Si(this),
                  s = Ri(a, 0),
                  c = 0,
                  u = -1,
                  l = arguments.length;
                u < l;
                u++
              )
                if (
                  ((i = void 0),
                  !Ei((o = r = -1 === u ? a : arguments[u])) ||
                    (void 0 !== (i = o[ji]) ? !i : !xi(o)))
                )
                  Ti(c + 1), Oi(s, c++, r);
                else
                  for (n = Pi(r), Ti(c + n), t = 0; t < n; t++, c++)
                    t in r && Oi(s, c, r[t]);
              return (s.length = c), s;
            },
          }
        ),
        x),
      Ii = ln,
      Ci = tt,
      Li = h,
      Bi = Ir,
      Mi = ke,
      Di = jr,
      Ui = _r,
      Zo = t,
      Ni = Ne,
      Xo = qr("slice"),
      _i = Zo("species"),
      qi = Array,
      Fi = Math.max,
      T =
        (f(
          { target: "Array", proto: !0, forced: !Xo },
          {
            slice: function (e, t) {
              var n,
                r,
                o,
                i = Di(this),
                a = Mi(i),
                s = Bi(e, a),
                c = Bi(void 0 === t ? a : t, a);
              if (
                Ii(i) &&
                ((n = i.constructor),
                (n =
                  (Ci(n) && (n === qi || Ii(n.prototype))) ||
                  (Li(n) && null === (n = n[_i]))
                    ? void 0
                    : n) === qi || void 0 === n)
              )
                return Ni(i, s, c);
              for (
                r = new (void 0 === n ? qi : n)(Fi(c - s, 0)), o = 0;
                s < c;
                s++, o++
              )
                s in i && Ui(r, o, i[s]);
              return (r.length = o), r;
            },
          }
        ),
        {}),
      Qi = Lr,
      Hi = v,
      Zo =
        Object.keys ||
        function (e) {
          return Qi(e, Hi);
        },
      zi = g,
      Gi = n,
      Wi = jr,
      Vi = Zo;
    T.f =
      y && !ft
        ? Object.defineProperties
        : function (e, t) {
            Gi(e);
            for (var n, r = Wi(t), o = Vi(t), i = o.length, a = 0; a < i; )
              zi.f(e, (n = o[a++]), r[n]);
            return e;
          };
    function Ji() {}
    function Xi(e) {
      e.write(ga("")), e.close();
      var t = e.parentWindow.Object;
      return (e = null), t;
    }
    function $i(e) {
      ma[va][e] = !0;
    }
    function Yi(e) {
      var t;
      return Aa(e) && (void 0 !== (t = e[ka]) ? !!t : "RegExp" == wa(e));
    }
    function Ki(e) {
      if (xa(e)) throw Ea("The method doesn't accept regular expressions");
      return e;
    }
    function Zi(t) {
      var n = /./;
      try {
        "/./"[t](n);
      } catch (e) {
        try {
          return (n[Sa] = !1), "/./"[t](n);
        } catch (e) {}
      }
      return !1;
    }
    function ea() {
      var e = ja(this),
        t = "";
      return (
        e.hasIndices && (t += "d"),
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.unicodeSets && (t += "v"),
        e.sticky && (t += "y"),
        t
      );
    }
    function ta(n, e, t, r) {
      var a,
        o = ns(n),
        s = !ts(function () {
          var e = {};
          return (
            (e[o] = function () {
              return 7;
            }),
            7 != ""[n](e)
          );
        }),
        i =
          s &&
          !ts(function () {
            var e = !1,
              t = /a/;
            return (
              "split" === n &&
                (((t = { constructor: {} }).constructor[os] = function () {
                  return t;
                }),
                (t.flags = ""),
                (t[o] = /./[o])),
              (t.exec = function () {
                return (e = !0), null;
              }),
              t[o](""),
              !e
            );
          });
      (s && i && !t) ||
        ((a = Ka(/./[o])),
        (i = e(o, ""[n], function (e, t, n, r, o) {
          var e = Ka(e),
            i = t.exec;
          return i === es || i === is.exec
            ? s && !o
              ? { done: !0, value: a(t, n, r) }
              : { done: !0, value: e(n, t, r) }
            : { done: !1 };
        })),
        Za(String.prototype, n, i[0]),
        Za(is, o, i[1])),
        r && rs(is[o], "sham", !0);
    }
    function na(o) {
      return function (e, t) {
        var n,
          e = ss(cs(e)),
          t = as(t),
          r = e.length;
        return t < 0 || r <= t
          ? o
            ? ""
            : void 0
          : (n = ls(e, t)) < 55296 ||
            56319 < n ||
            t + 1 === r ||
            (r = ls(e, t + 1)) < 56320 ||
            57343 < r
          ? o
            ? us(e, t)
            : n
          : o
          ? fs(e, t, t + 2)
          : r - 56320 + ((n - 55296) << 10) + 65536;
      };
    }
    function ra(e, t, n) {
      return t + (n ? ds(e, t).length : 1);
    }
    function oa(e, t) {
      var n = e.exec;
      if (gs(n)) return null !== (n = ps(n, e, t)) && hs(n), n;
      if ("RegExp" === ys(e)) return ps(vs, e, t);
      throw ms("RegExp#exec called on incompatible receiver");
    }
    function ia(t) {
      return function (e) {
        e = Rs(Os(e));
        return 1 & t && (e = js(e, Is, "")), (e = 2 & t ? js(e, Cs, "$1") : e);
      };
    }
    var aa,
      f = ce("document", "documentElement"),
      sa = n,
      ca = T,
      ua = v,
      Xo = an,
      la = f,
      fa = se,
      da = "prototype",
      pa = "script",
      ha = ge("IE_PROTO"),
      ga = function (e) {
        return "<" + pa + ">" + e + "</" + pa + ">";
      },
      ya = function () {
        try {
          aa = new ActiveXObject("htmlfile");
        } catch (e) {}
        ya =
          "undefined" == typeof document || (document.domain && aa)
            ? Xi(aa)
            : ((e = fa("iframe")),
              (t = "java" + pa + ":"),
              (e.style.display = "none"),
              la.appendChild(e),
              (e.src = String(t)),
              (t = e.contentWindow.document).open(),
              t.write(ga("document.F=Object")),
              t.close(),
              t.F);
        for (var e, t, n = ua.length; n--; ) delete ya[da][ua[n]];
        return ya();
      },
      ft =
        ((Xo[ha] = !0),
        Object.create ||
          function (e, t) {
            var n;
            return (
              null !== e
                ? ((Ji[da] = sa(e)),
                  (n = new Ji()),
                  (Ji[da] = null),
                  (n[ha] = e))
                : (n = ya()),
              void 0 === t ? n : ca.f(n, t)
            );
          }),
      T = t,
      v = ft,
      Xo = g.f,
      va = T("unscopables"),
      ma = Array.prototype,
      T =
        (null == ma[va] && Xo(ma, va, { configurable: !0, value: v(null) }), x),
      ba = Qr.includes,
      Xo = $i,
      Aa =
        (T(
          {
            target: "Array",
            proto: !0,
            forced: e(function () {
              return !Array(1).includes();
            }),
          },
          {
            includes: function (e) {
              return ba(this, e, 1 < arguments.length ? arguments[1] : void 0);
            },
          }
        ),
        Xo("includes"),
        h),
      wa = ve,
      ka = t("match"),
      xa = Yi,
      Ea = TypeError,
      Sa = t("match"),
      v = x,
      Pa = Ki,
      Ta = oe,
      Oa = S,
      T = Zi,
      Ra = i("".indexOf),
      ja =
        (v(
          { target: "String", proto: !0, forced: !T("includes") },
          {
            includes: function (e) {
              return !!~Ra(
                Oa(Ta(this)),
                Oa(Pa(e)),
                1 < arguments.length ? arguments[1] : void 0
              );
            },
          }
        ),
        n),
      Xo = e,
      Ia = r.RegExp,
      v = Xo(function () {
        var e = Ia("a", "y");
        return (e.lastIndex = 2), null != e.exec("abcd");
      }),
      T =
        v ||
        Xo(function () {
          return !Ia("a", "y").sticky;
        }),
      Xo = {
        BROKEN_CARET:
          v ||
          Xo(function () {
            var e = Ia("^r", "gy");
            return (e.lastIndex = 2), null != e.exec("str");
          }),
        MISSED_STICKY: T,
        UNSUPPORTED_Y: v,
      },
      T = e,
      Ca = r.RegExp,
      v = T(function () {
        var e = Ca(".", "s");
        return !(e.dotAll && e.exec("\n") && "s" === e.flags);
      }),
      T = e,
      La = r.RegExp,
      T = T(function () {
        var e = La("(?<a>b)", "g");
        return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
      }),
      Ba = m,
      Ma = i,
      Da = S,
      Ua = ea,
      Na = Xo,
      _a = Me,
      qa = ft,
      Fa = A.get,
      Qa = _a("native-string-replace", String.prototype.replace),
      Ha = RegExp.prototype.exec,
      za = Ha,
      Ga = Ma("".charAt),
      Wa = Ma("".indexOf),
      Va = Ma("".replace),
      Ja = Ma("".slice),
      Xa =
        ((_a = /b*/g),
        Ba(Ha, (Ma = /a/), "a"),
        Ba(Ha, _a, "a"),
        0 !== Ma.lastIndex || 0 !== _a.lastIndex),
      $a = Na.BROKEN_CARET,
      Ya = void 0 !== /()??/.exec("")[1],
      Ma = (za =
        Xa || Ya || $a || v || T
          ? function (e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                s = this,
                c = Fa(s),
                e = Da(e),
                u = c.raw;
              if (u)
                return (
                  (u.lastIndex = s.lastIndex),
                  (f = Ba(za, u, e)),
                  (s.lastIndex = u.lastIndex),
                  f
                );
              var l = c.groups,
                u = $a && s.sticky,
                f = Ba(Ua, s),
                c = s.source,
                d = 0,
                p = e;
              if (
                (u &&
                  ((f = Va(f, "y", "")),
                  -1 === Wa(f, "g") && (f += "g"),
                  (p = Ja(e, s.lastIndex)),
                  0 < s.lastIndex &&
                    (!s.multiline ||
                      (s.multiline && "\n" !== Ga(e, s.lastIndex - 1))) &&
                    ((c = "(?: " + c + ")"), (p = " " + p), d++),
                  (t = new RegExp("^(?:" + c + ")", f))),
                Ya && (t = new RegExp("^" + c + "$(?!\\s)", f)),
                Xa && (n = s.lastIndex),
                (r = Ba(Ha, u ? t : s, p)),
                u
                  ? r
                    ? ((r.input = Ja(r.input, d)),
                      (r[0] = Ja(r[0], d)),
                      (r.index = s.lastIndex),
                      (s.lastIndex += r[0].length))
                    : (s.lastIndex = 0)
                  : Xa &&
                    r &&
                    (s.lastIndex = s.global ? r.index + r[0].length : n),
                Ya &&
                  r &&
                  1 < r.length &&
                  Ba(Qa, r[0], t, function () {
                    for (o = 1; o < arguments.length - 2; o++)
                      void 0 === arguments[o] && (r[o] = void 0);
                  }),
                r && l)
              )
                for (r.groups = i = qa(null), o = 0; o < l.length; o++)
                  i[(a = l[o])[0]] = r[a[1]];
              return r;
            }
          : za),
      Ka =
        (x(
          { target: "RegExp", proto: !0, forced: /./.exec !== Ma },
          { exec: Ma }
        ),
        me),
      Za = ye,
      es = Ma,
      ts = e,
      ns = t,
      rs = w,
      os = ns("species"),
      is = RegExp.prototype,
      _a = i,
      as = Ae,
      ss = S,
      cs = oe,
      us = _a("".charAt),
      ls = _a("".charCodeAt),
      fs = _a("".slice),
      Na = { codeAt: na(!1), charAt: na(!0) },
      ds = Na.charAt,
      ps = m,
      hs = n,
      gs = d,
      ys = ve,
      vs = Ma,
      ms = TypeError,
      bs = m,
      As = n,
      ws = re,
      ks = we,
      xs = S,
      Es = oe,
      Ss = fe,
      Ps = ra,
      Ts = oa,
      v =
        (ta("match", function (r, s, c) {
          return [
            function (e) {
              var t = Es(this),
                n = ws(e) ? void 0 : Ss(e, r);
              return n ? bs(n, e, t) : new RegExp(e)[r](xs(t));
            },
            function (e) {
              var t = As(this),
                n = xs(e),
                e = c(s, t, n);
              if (e.done) return e.value;
              if (!t.global) return Ts(t, n);
              for (
                var r = t.unicode, o = [], i = (t.lastIndex = 0);
                null !== (a = Ts(t, n));

              ) {
                var a = xs(a[0]);
                "" === (o[i] = a) && (t.lastIndex = Ps(n, ks(t.lastIndex), r)),
                  i++;
              }
              return 0 === i ? null : o;
            },
          ];
        }),
        "\t\n\v\f\r                　\u2028\u2029\ufeff"),
      Os = oe,
      Rs = S,
      T = v,
      js = i("".replace),
      Is = RegExp("^[" + T + "]+"),
      Cs = RegExp("(^|[^" + T + "])[" + T + "]+$"),
      _a = { start: ia(1), end: ia(2), trim: ia(3) },
      T = r,
      Ls = e,
      O = i,
      Bs = S,
      Ms = _a.trim,
      Ds = O("".charAt),
      Us = T.parseFloat,
      O = T.Symbol,
      Ns = O && O.iterator,
      T =
        1 / Us("\t\n\v\f\r                　\u2028\u2029\ufeff-0") != -1 / 0 ||
        (Ns &&
          !Ls(function () {
            Us(Object(Ns));
          }))
          ? function (e) {
              var e = Ms(Bs(e)),
                t = Us(e);
              return 0 === t && "-" == Ds(e, 0) ? -0 : t;
            }
          : Us,
      _s =
        (x({ global: !0, forced: parseFloat != T }, { parseFloat: T }),
        function () {
          var t = document.getSelection();
          if (!t.rangeCount) return function () {};
          for (
            var e = document.activeElement, n = [], r = 0;
            r < t.rangeCount;
            r++
          )
            n.push(t.getRangeAt(r));
          switch (e.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
              e.blur();
              break;
            default:
              e = null;
          }
          return (
            t.removeAllRanges(),
            function () {
              "Caret" === t.type && t.removeAllRanges(),
                t.rangeCount ||
                  n.forEach(function (e) {
                    t.addRange(e);
                  }),
                e && e.focus();
            }
          );
        }),
      qs = { "text/plain": "Text", "text/html": "Url", default: "Text" };
    function Fs(e) {
      var t = e.flags;
      return void 0 !== t || "flags" in $s || Vs(e, "flags") || !Js($s, e)
        ? t
        : Ws(Xs, e);
    }
    var Qs = function (n, r) {
        var t,
          e,
          o,
          i,
          a = !1,
          s = (r = r || {}).debug || !1;
        try {
          var c = _s(),
            u = document.createRange(),
            l = document.getSelection();
          if (
            (((e = document.createElement("span")).textContent = n),
            (e.ariaHidden = "true"),
            (e.style.all = "unset"),
            (e.style.position = "fixed"),
            (e.style.top = 0),
            (e.style.clip = "rect(0, 0, 0, 0)"),
            (e.style.whiteSpace = "pre"),
            (e.style.webkitUserSelect = "text"),
            (e.style.MozUserSelect = "text"),
            (e.style.msUserSelect = "text"),
            (e.style.userSelect = "text"),
            e.addEventListener("copy", function (e) {
              var t;
              e.stopPropagation(),
                r.format &&
                  (e.preventDefault(),
                  void 0 === e.clipboardData
                    ? (s && console.warn("unable to use e.clipboardData"),
                      s && console.warn("trying IE specific stuff"),
                      window.clipboardData.clearData(),
                      (t = qs[r.format] || qs.default),
                      window.clipboardData.setData(t, n))
                    : (e.clipboardData.clearData(),
                      e.clipboardData.setData(r.format, n))),
                r.onCopy && (e.preventDefault(), r.onCopy(e.clipboardData));
            }),
            document.body.appendChild(e),
            u.selectNodeContents(e),
            l.addRange(u),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          a = !0;
        } catch (e) {
          s && console.error("unable to copy using execCommand: ", e),
            s && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(r.format || "text", n),
              r.onCopy && r.onCopy(window.clipboardData),
              (a = !0);
          } catch (e) {
            s && console.error("unable to copy using clipboardData: ", e),
              s && console.error("falling back to prompt"),
              (o =
                "message" in r
                  ? r.message
                  : "Copy to clipboard: #{key}, Enter"),
              (i =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (t = o.replace(/#{\s*key\s*}/g, i)),
              window.prompt(t, n);
          }
        } finally {
          l &&
            ("function" == typeof l.removeRange
              ? l.removeRange(u)
              : l.removeAllRanges()),
            e && document.body.removeChild(e),
            c();
        }
        return a;
      },
      Hs = (function () {
        function r() {
          var t = this,
            e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = (o(this, r), e.className),
            n = void 0 === n ? "" : n,
            e = e.el,
            e = document.createElement(void 0 === e ? "div" : e);
          (e.dataset.testid = "modal"),
            (e.className = ["page-spy-modal", n].join(" ")),
            (e.style.display = "none"),
            (e.onclick = function (e) {
              e.stopPropagation(), e.preventDefault(), t.close();
            }),
            (this.el = e);
        }
        return (
          s(r, [
            {
              key: "show",
              value: function () {
                var e = this;
                (this.el.style.display = "flex"),
                  setTimeout(function () {
                    e.el.classList.add("show");
                  }, 50);
              },
            },
            {
              key: "close",
              value: function () {
                var e = this;
                this.el.classList.remove("show"),
                  setTimeout(function () {
                    e.el.style.display = "none";
                  }, 300);
              },
            },
            {
              key: "append",
              value: function (e) {
                this.el.appendChild(e);
              },
            },
          ]),
          r
        );
      })(),
      zs = (function () {
        function n(e) {
          o(this, n), (this.options = U({}, e));
          var t = document.createElement("div");
          (t.dataset.testid = "content"),
            (t.className = ["page-spy-content", e.className].join(" ")),
            (t.onclick = function (e) {
              e.stopPropagation();
            }),
            (this.el = t),
            this.render();
        }
        return (
          s(n, [
            {
              key: "render",
              value: function () {
                var e = this.options,
                  t = e.content,
                  t = void 0 === t ? "" : t,
                  n = e.onOk,
                  e = document.createElement("div"),
                  t =
                    ((e.className = "page-spy-content__info"),
                    (e.innerHTML = t),
                    document.createElement("div")),
                  r =
                    ((t.dataset.testid = "copy-button"),
                    (t.className = "page-spy-content__ok"),
                    navigator.language);
                (t.textContent = "zh-CN" === r ? "拷贝" : "Copy"),
                  (t.onclick = function (e) {
                    e.stopPropagation(), n && n();
                  }),
                  this.el.append(e, t);
              },
            },
          ]),
          n
        );
      })(),
      O = x,
      Gs = nr.map,
      Ws =
        (O(
          { target: "Array", proto: !0, forced: !qr("map") },
          {
            map: function (e) {
              return Gs(this, e, 1 < arguments.length ? arguments[1] : void 0);
            },
          }
        ),
        m),
      Vs = u,
      Js = mt,
      Xs = ea,
      $s = RegExp.prototype,
      Ls = Kt.PROPER,
      T = ye,
      Ys = n,
      Ks = S,
      O = e,
      Zs = Fs,
      ec = "toString",
      tc = RegExp.prototype[ec],
      O = O(function () {
        return "/a/b" != tc.call({ source: "a", flags: "b" });
      }),
      Ls = Ls && tc.name != ec;
    (O || Ls) &&
      T(
        RegExp.prototype,
        ec,
        function () {
          var e = Ys(this);
          return "/" + Ks(e.source) + "/" + Ks(Zs(e));
        },
        { unsafe: !0 }
      );
    var nc,
      rc = ie,
      oc = Zo,
      O =
        (x(
          {
            target: "Object",
            stat: !0,
            forced: e(function () {
              oc(1);
            }),
          },
          {
            keys: function (e) {
              return oc(rc(e));
            },
          }
        ),
        {}),
      Ls = !e(function () {
        function e() {}
        return (
          (e.prototype.constructor = null),
          Object.getPrototypeOf(new e()) !== e.prototype
        );
      }),
      ic = u,
      ac = d,
      sc = ie,
      T = Ls,
      cc = ge("IE_PROTO"),
      uc = Object,
      lc = uc.prototype,
      ec = T
        ? uc.getPrototypeOf
        : function (e) {
            var t,
              e = sc(e);
            return ic(e, cc)
              ? e[cc]
              : ((t = e.constructor),
                ac(t) && e instanceof t
                  ? t.prototype
                  : e instanceof uc
                  ? lc
                  : null);
          },
      T = e,
      fc = d,
      R = h,
      dc = ec,
      j = ye,
      pc = t("iterator"),
      hc = !1;
    [].keys &&
      ("next" in (I = [].keys())
        ? (dc = dc(dc(I))) !== Object.prototype && (nc = dc)
        : (hc = !0));
    function gc(e, t, n) {
      (e = e && !n ? e.prototype : e) &&
        !kc(e, xc) &&
        wc(e, xc, { configurable: !0, value: t });
    }
    function yc() {
      return this;
    }
    function vc(e, t, n, r) {
      return (
        (t += " Iterator"),
        (e.prototype = Sc(Ec, { next: Pc(+!r, n) })),
        Tc(e, t, !1),
        (Oc[t] = yc),
        e
      );
    }
    function mc() {
      return this;
    }
    function bc(e, t, n, r, o, i, a) {
      function s(e) {
        if (e === o && p) return p;
        if (!$c && e in f) return f[e];
        switch (e) {
          case "keys":
          case Kc:
          case Zc:
            return function () {
              return new n(this, e);
            };
        }
        return function () {
          return new n(this);
        };
      }
      qc(n, t, r);
      var c,
        u,
        r = t + " Iterator",
        l = !1,
        f = e.prototype,
        d = f[Yc] || f["@@iterator"] || (o && f[o]),
        p = (!$c && d) || s(o),
        h = ("Array" == t && f.entries) || d;
      if (
        (h &&
          (h = Fc(h.call(new e()))) !== Object.prototype &&
          h.next &&
          (Fc(h) !== Xc && (Qc ? Qc(h, Xc) : _c(h[Yc]) || Gc(h, Yc, mc)),
          Hc(h, r, !0)),
        Vc &&
          o == Kc &&
          d &&
          d.name !== Kc &&
          (Jc
            ? zc(f, "name", Kc)
            : ((l = !0),
              (p = function () {
                return Nc(d, this);
              }))),
        o)
      )
        if (
          ((c = { values: s(Kc), keys: i ? p : s("keys"), entries: s(Zc) }), a)
        )
          for (u in c) (!$c && !l && u in f) || Gc(f, u, c[u]);
        else Uc({ target: t, proto: !0, forced: $c || l }, c);
      return f[Yc] !== p && Gc(f, Yc, p, { name: o }), (Wc[t] = p), c;
    }
    function Ac(e, t) {
      return { value: e, done: t };
    }
    fc(
      (nc =
        !R(nc) ||
        T(function () {
          var e = {};
          return nc[pc].call(e) !== e;
        })
          ? {}
          : nc)[pc]
    ) ||
      j(nc, pc, function () {
        return this;
      });
    var I = { IteratorPrototype: nc, BUGGY_SAFARI_ITERATORS: hc },
      wc = g.f,
      kc = u,
      xc = t("toStringTag"),
      Ec = I.IteratorPrototype,
      Sc = ft,
      Pc = he,
      Tc = gc,
      Oc = O,
      Rc = i,
      jc = le,
      Ic = d,
      Cc = String,
      Lc = TypeError,
      Bc = function (e, t, n) {
        try {
          return Rc(jc(Object.getOwnPropertyDescriptor(e, t)[n]));
        } catch (e) {}
      },
      Mc = n,
      Dc = function (e) {
        if ("object" == typeof e || Ic(e)) return e;
        throw Lc("Can't set " + Cc(e) + " as a prototype");
      },
      dc =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var n,
                r = !1,
                e = {};
              try {
                (n = Bc(Object.prototype, "__proto__", "set"))(e, []),
                  (r = e instanceof Array);
              } catch (e) {}
              return function (e, t) {
                return Mc(e), Dc(t), r ? n(e, t) : (e.__proto__ = t), e;
              };
            })()
          : void 0),
      Uc = x,
      Nc = m,
      _c = d,
      qc = vc,
      Fc = ec,
      Qc = dc,
      Hc = gc,
      zc = w,
      Gc = ye,
      fc = t,
      Wc = O,
      Vc = Kt.PROPER,
      Jc = Kt.CONFIGURABLE,
      Xc = I.IteratorPrototype,
      $c = I.BUGGY_SAFARI_ITERATORS,
      Yc = fc("iterator"),
      Kc = "values",
      Zc = "entries",
      eu = jr,
      R = $i,
      T = O,
      j = A,
      hc = g.f,
      I = bc,
      tu = Ac,
      fc = y,
      nu = "Array Iterator",
      ru = j.set,
      ou = j.getterFor(nu),
      j = I(
        Array,
        "Array",
        function (e, t) {
          ru(this, { type: nu, target: eu(e), index: 0, kind: t });
        },
        function () {
          var e = ou(this),
            t = e.target,
            n = e.kind,
            r = e.index++;
          return !t || r >= t.length
            ? ((e.target = void 0), tu(void 0, !0))
            : tu("keys" == n ? r : "values" == n ? t[r] : [r, t[r]], !1);
        },
        "values"
      ),
      I = (T.Arguments = T.Array);
    if ((R("keys"), R("values"), R("entries"), fc && "values" !== I.name))
      try {
        hc(I, "name", { value: "values" });
      } catch (e) {}
    function iu(t, e) {
      if (t) {
        if (t[vu] !== bu)
          try {
            yu(t, vu, bu);
          } catch (e) {
            t[vu] = bu;
          }
        if ((t[mu] || yu(t, mu, e), hu[e]))
          for (var n in gu)
            if (t[n] !== gu[n])
              try {
                yu(t, n, gu[n]);
              } catch (e) {
                t[n] = gu[n];
              }
      }
    }
    var au,
      su = Na.charAt,
      cu = S,
      T = A,
      R = bc,
      uu = Ac,
      lu = "String Iterator",
      fu = T.set,
      du = T.getterFor(lu),
      pu =
        (R(
          String,
          "String",
          function (e) {
            fu(this, { type: lu, string: cu(e), index: 0 });
          },
          function () {
            var e = du(this),
              t = e.string,
              n = e.index;
            return n >= t.length
              ? uu(void 0, !0)
              : ((t = su(t, n)), (e.index += t.length), uu(t, !1));
          }
        ),
        r),
      hu = b,
      fc = a,
      gu = j,
      yu = w,
      hc = t,
      vu = hc("iterator"),
      mu = hc("toStringTag"),
      bu = gu.values;
    for (au in hu) iu(pu[au] && pu[au].prototype, au);
    iu(fc, "DOMTokenList");
    function Au(e, t, n) {
      return (
        n.get && Xu(n.get, t, { getter: !0 }),
        n.set && Xu(n.set, t, { setter: !0 }),
        $u.f(e, t, n)
      );
    }
    function wu(e, t, n) {
      for (var r in t) Yu(e, r, t[r], n);
      return e;
    }
    function ku(e, t) {
      if (Ku(t, e)) return e;
      throw Zu("Incorrect invocation");
    }
    function xu(e) {
      if (!nl(e)) return tl(e, ol) || tl(e, "@@iterator") || rl[el(e)];
    }
    function Eu(e, t) {
      if (((t = arguments.length < 2 ? ul(e) : t), al(t))) return sl(il(t, e));
      throw ll(cl(e) + " is not iterable");
    }
    function Su(e, t) {
      if (e < t) throw fl("Not enough arguments");
      return e;
    }
    function Pu(e, t, n) {
      for (
        var r = pl(e),
          o = dl(t, r),
          i = dl(void 0 === n ? r : n, r),
          a = gl(yl(i - o, 0)),
          s = 0;
        o < i;
        o++, s++
      )
        hl(a, s, e[o]);
      return (a.length = s), a;
    }
    function Tu(e, t) {
      var n = e.length,
        r = ml(n / 2);
      if (n < 8) {
        for (var o, i, a = e, s = t, c = a.length, u = 1; u < c; ) {
          for (o = a[(i = u)]; i && 0 < s(a[i - 1], o); ) a[i] = a[--i];
          i !== u++ && (a[i] = o);
        }
        return a;
      }
      for (
        var l = e,
          f = Tu(vl(e, 0, r), t),
          d = Tu(vl(e, r), t),
          p = t,
          h = f.length,
          g = d.length,
          y = 0,
          v = 0;
        y < h || v < g;

      )
        l[y + v] =
          y < h && v < g
            ? p(f[y], d[v]) <= 0
              ? f[y++]
              : d[v++]
            : y < h
            ? f[y++]
            : d[v++];
      return l;
    }
    function Ou(e) {
      var t;
      return wl ? (t = ql(bl, e)) && t.value : bl[e];
    }
    function Ru(t) {
      try {
        return Vl(t);
      } catch (e) {
        return t;
      }
    }
    function ju(e) {
      var t,
        n = Kl(e, rf, " "),
        r = 4;
      try {
        return Vl(n);
      } catch (e) {
        for (; r; )
          n = Kl(
            n,
            ((t = r--),
            of[t - 1] ||
              (of[t - 1] = Gl("((?:%[\\da-f]{2}){" + t + "})", "gi"))),
            Ru
          );
        return n;
      }
    }
    function Iu(e) {
      return sf[e];
    }
    function Cu(e) {
      return Kl(Jl(e), af, Iu);
    }
    function Lu(e) {
      (this.entries = []),
        (this.url = null),
        void 0 !== e &&
          (Tl(e)
            ? this.parseObject(e)
            : this.parseQuery(
                "string" == typeof e ? ("?" === Xl(e, 0) ? nf(e, 1) : e) : Ol(e)
              ));
    }
    function Bu() {
      kl(this, uf);
      var e = Ul(this, new Lu(0 < arguments.length ? arguments[0] : void 0));
      wl || (this.length = e.entries.length);
    }
    function Mu(e, t, n) {
      var r, o;
      wf(e);
      try {
        if (!(r = kf(e, "return"))) {
          if ("throw" === t) throw n;
          return n;
        }
        r = Af(r, e);
      } catch (e) {
        (o = !0), (r = e);
      }
      if ("throw" === t) throw n;
      if (o) throw r;
      return wf(r), n;
    }
    function Du(e) {
      return void 0 !== e && (Sf.Array === e || Tf[Pf] === e);
    }
    function Uu(e) {
      var t, n, r, o;
      if ("number" == typeof e) {
        for (t = [], n = 0; n < 4; n++) Ud(t, e % 256), (e = Ed(e / 256));
        return Od(t, ".");
      }
      if ("object" != typeof e) return e;
      for (
        t = "",
          r = (function (e) {
            for (var t = null, n = 1, r = null, o = 0, i = 0; i < 8; i++)
              0 !== e[i]
                ? (n < o && ((t = r), (n = o)), (r = null), (o = 0))
                : (null === r && (r = i), ++o);
            return n < o && ((t = r), (n = o)), t;
          })(e),
          n = 0;
        n < 8;
        n++
      )
        (o && 0 === e[n]) ||
          ((o = o && !1),
          r === n
            ? ((t += n ? ":" : "::"), (o = !0))
            : ((t += Rd(e[n], 16)), n < 7 && (t += ":")));
      return "[" + t + "]";
    }
    function Nu(e, t) {
      var n = hd(e, 0);
      return 32 < n && n < 127 && !fd(t, e) ? e : encodeURIComponent(e);
    }
    function _u(e, t) {
      return (
        2 == e.length &&
        Td(Fd, Pd(e, 0)) &&
        (":" == (e = Pd(e, 1)) || (!t && "|" == e))
      );
    }
    function qu(e) {
      return (
        1 < e.length &&
        _u(Md(e, 0, 2)) &&
        (2 == e.length ||
          "/" === (e = Pd(e, 2)) ||
          "\\" === e ||
          "?" === e ||
          "#" === e)
      );
    }
    function Fu(e, t, n) {
      var r,
        o,
        e = yd(e);
      if (t) {
        if ((o = this.parse(e))) throw kd(o);
        this.searchParams = null;
      } else {
        if ((void 0 !== n && (r = new Fu(n, !0)), (o = this.parse(e, null, r))))
          throw kd(o);
        (t = wd(new Ad())).bindURL(this), (this.searchParams = t);
      }
    }
    function Qu(e, t) {
      return {
        get: function () {
          return bd(this)[e]();
        },
        set:
          t &&
          function (e) {
            return bd(this)[t](e);
          },
        configurable: !0,
        enumerable: !0,
      };
    }
    var Hu,
      zu,
      Gu,
      Wu,
      I = e,
      Vu = y,
      Ju = t("iterator"),
      T = !I(function () {
        var e = new URL("b?a=1&b=2&c=3", "http://a"),
          n = e.searchParams,
          r = "";
        return (
          (e.pathname = "c%20d"),
          n.forEach(function (e, t) {
            n.delete("b"), (r += t + e);
          }),
          (!n.size && !Vu) ||
            !n.sort ||
            "http://a/c%20d?a=1&c=3" !== e.href ||
            "3" !== n.get("c") ||
            "a=1" !== String(new URLSearchParams("?a=1")) ||
            !n[Ju] ||
            "a" !== new URL("https://a@b").username ||
            "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
            "xn--e1aybc" !== new URL("http://тест").host ||
            "#%D0%B1" !== new URL("http://a#б").hash ||
            "a1c3" !== r ||
            "x" !== new URL("http://x", void 0).host
        );
      }),
      Xu = Yt,
      $u = g,
      Yu = ye,
      Ku = mt,
      Zu = TypeError,
      el = k,
      tl = fe,
      nl = re,
      rl = O,
      ol = t("iterator"),
      il = m,
      al = le,
      sl = n,
      cl = ue,
      ul = xu,
      ll = TypeError,
      fl = TypeError,
      dl = Ir,
      pl = ke,
      hl = _r,
      gl = Array,
      yl = Math.max,
      vl = Pu,
      ml = Math.floor,
      R = x,
      bl = r,
      Al = m,
      b = i,
      wl = y,
      a = T,
      j = ye,
      hc = Au,
      fc = wu,
      I = gc,
      C = vc,
      L = A,
      kl = ku,
      B = d,
      xl = u,
      El = be,
      Sl = k,
      Pl = n,
      Tl = h,
      Ol = S,
      Rl = ft,
      jl = he,
      Il = Eu,
      Cl = xu,
      Ll = Su,
      Bl = Tu,
      k = t("iterator"),
      Ml = "URLSearchParams",
      Dl = Ml + "Iterator",
      Ul = L.set,
      Nl = L.getterFor(Ml),
      _l = L.getterFor(Dl),
      ql = Object.getOwnPropertyDescriptor,
      Fl = Ou("fetch"),
      Ql = Ou("Request"),
      Hl = Ou("Headers"),
      zl = Ql && Ql.prototype,
      L = Hl && Hl.prototype,
      Gl = bl.RegExp,
      Wl = bl.TypeError,
      Vl = bl.decodeURIComponent,
      Jl = bl.encodeURIComponent,
      Xl = b("".charAt),
      $l = b([].join),
      Yl = b([].push),
      Kl = b("".replace),
      Zl = b([].shift),
      ef = b([].splice),
      tf = b("".split),
      nf = b("".slice),
      rf = /\+/g,
      of = Array(4),
      af = /[!'()~]|%20/g,
      sf = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
      },
      cf = C(
        function (e, t) {
          Ul(this, { type: Dl, iterator: Il(Nl(e).entries), kind: t });
        },
        "Iterator",
        function () {
          var e = _l(this),
            t = e.kind,
            e = e.iterator.next(),
            n = e.value;
          return (
            e.done ||
              (e.value =
                "keys" === t
                  ? n.key
                  : "values" === t
                  ? n.value
                  : [n.key, n.value]),
            e
          );
        },
        !0
      ),
      uf =
        ((Lu.prototype = {
          type: Ml,
          bindURL: function (e) {
            (this.url = e), this.update();
          },
          parseObject: function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s = Cl(e);
            if (s)
              for (n = (t = Il(e, s)).next; !(r = Al(n, t)).done; ) {
                if (
                  ((o = (r = Il(Pl(r.value))).next),
                  (i = Al(o, r)).done || (a = Al(o, r)).done || !Al(o, r).done)
                )
                  throw Wl("Expected sequence with length 2");
                Yl(this.entries, { key: Ol(i.value), value: Ol(a.value) });
              }
            else
              for (var c in e)
                xl(e, c) && Yl(this.entries, { key: c, value: Ol(e[c]) });
          },
          parseQuery: function (e) {
            if (e)
              for (var t, n = tf(e, "&"), r = 0; r < n.length; )
                (t = n[r++]).length &&
                  ((t = tf(t, "=")),
                  Yl(this.entries, { key: ju(Zl(t)), value: ju($l(t, "=")) }));
          },
          serialize: function () {
            for (var e, t = this.entries, n = [], r = 0; r < t.length; )
              (e = t[r++]), Yl(n, Cu(e.key) + "=" + Cu(e.value));
            return $l(n, "&");
          },
          update: function () {
            (this.entries.length = 0), this.parseQuery(this.url.query);
          },
          updateURL: function () {
            this.url && this.url.update();
          },
        }),
        Bu.prototype),
      fc =
        (fc(
          uf,
          {
            append: function (e, t) {
              Ll(arguments.length, 2);
              var n = Nl(this);
              Yl(n.entries, { key: Ol(e), value: Ol(t) }),
                wl || this.length++,
                n.updateURL();
            },
            delete: function (e) {
              Ll(arguments.length, 1);
              for (
                var t = Nl(this), n = t.entries, r = Ol(e), o = 0;
                o < n.length;

              )
                n[o].key === r ? ef(n, o, 1) : o++;
              wl || (this.length = n.length), t.updateURL();
            },
            get: function (e) {
              Ll(arguments.length, 1);
              for (
                var t = Nl(this).entries, n = Ol(e), r = 0;
                r < t.length;
                r++
              )
                if (t[r].key === n) return t[r].value;
              return null;
            },
            getAll: function (e) {
              Ll(arguments.length, 1);
              for (
                var t = Nl(this).entries, n = Ol(e), r = [], o = 0;
                o < t.length;
                o++
              )
                t[o].key === n && Yl(r, t[o].value);
              return r;
            },
            has: function (e) {
              Ll(arguments.length, 1);
              for (var t = Nl(this).entries, n = Ol(e), r = 0; r < t.length; )
                if (t[r++].key === n) return !0;
              return !1;
            },
            set: function (e, t) {
              Ll(arguments.length, 1);
              for (
                var n,
                  r = Nl(this),
                  o = r.entries,
                  i = !1,
                  a = Ol(e),
                  s = Ol(t),
                  c = 0;
                c < o.length;
                c++
              )
                (n = o[c]).key === a &&
                  (i ? ef(o, c--, 1) : ((i = !0), (n.value = s)));
              i || Yl(o, { key: a, value: s }),
                wl || (this.length = o.length),
                r.updateURL();
            },
            sort: function () {
              var e = Nl(this);
              Bl(e.entries, function (e, t) {
                return e.key > t.key ? 1 : -1;
              }),
                e.updateURL();
            },
            forEach: function (e) {
              for (
                var t,
                  n = Nl(this).entries,
                  r = El(e, 1 < arguments.length ? arguments[1] : void 0),
                  o = 0;
                o < n.length;

              )
                r((t = n[o++]).value, t.key, this);
            },
            keys: function () {
              return new cf(this, "keys");
            },
            values: function () {
              return new cf(this, "values");
            },
            entries: function () {
              return new cf(this, "entries");
            },
          },
          { enumerable: !0 }
        ),
        j(uf, k, uf.entries, { name: "entries" }),
        j(
          uf,
          "toString",
          function () {
            return Nl(this).serialize();
          },
          { enumerable: !0 }
        ),
        wl &&
          hc(uf, "size", {
            get: function () {
              return Nl(this).entries.length;
            },
            configurable: !0,
            enumerable: !0,
          }),
        I(Bu, Ml),
        R({ global: !0, constructor: !0, forced: !a }, { URLSearchParams: Bu }),
        !a &&
          B(Hl) &&
          ((Hu = b(L.has)),
          (zu = b(L.set)),
          (Gu = function (e) {
            if (Tl(e)) {
              var t,
                n = e.body;
              if (Sl(n) === Ml)
                return (
                  (t = e.headers ? new Hl(e.headers) : new Hl()),
                  Hu(t, "content-type") ||
                    zu(
                      t,
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ),
                  Rl(e, { body: jl(0, Ol(n)), headers: jl(0, t) })
                );
            }
            return e;
          }),
          B(Fl) &&
            R(
              { global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0 },
              {
                fetch: function (e) {
                  return Fl(e, 1 < arguments.length ? Gu(arguments[1]) : {});
                },
              }
            ),
          B(Ql)) &&
          (((zl.constructor = C =
            function (e) {
              return (
                kl(this, zl),
                new Ql(e, 1 < arguments.length ? Gu(arguments[1]) : {})
              );
            }).prototype = zl),
          R(
            { global: !0, constructor: !0, dontCallGetSet: !0, forced: !0 },
            { Request: C }
          )),
        { URLSearchParams: Bu, getState: Nl }),
      lf = y,
      k = i,
      ff = m,
      j = e,
      df = Zo,
      pf = P,
      hf = Fr,
      gf = ie,
      yf = fn,
      vf = Object.assign,
      mf = Object.defineProperty,
      bf = k([].concat),
      hc =
        !vf ||
        j(function () {
          var e, t, n, r;
          return (
            (lf &&
              1 !==
                vf(
                  { b: 1 },
                  vf(
                    mf({}, "a", {
                      enumerable: !0,
                      get: function () {
                        mf(this, "b", { value: 3, enumerable: !1 });
                      },
                    }),
                    { b: 2 }
                  )
                ).b) ||
            ((t = {}),
            (r = "abcdefghijklmnopqrst"),
            ((e = {})[(n = Symbol())] = 7),
            r.split("").forEach(function (e) {
              t[e] = e;
            }),
            7 != vf({}, e)[n]) ||
            df(vf({}, t)).join("") != r
          );
        })
          ? function (e, t) {
              for (
                var n = gf(e), r = arguments.length, o = 1, i = pf.f, a = hf.f;
                o < r;

              )
                for (
                  var s,
                    c = yf(arguments[o++]),
                    u = i ? bf(df(c), i(c)) : df(c),
                    l = u.length,
                    f = 0;
                  f < l;

                )
                  (s = u[f++]), (lf && !ff(a, c, s)) || (n[s] = c[s]);
              return n;
            }
          : vf,
      Af = m,
      wf = n,
      kf = fe,
      xf = n,
      Ef = Mu,
      Sf = O,
      Pf = t("iterator"),
      Tf = Array.prototype,
      Of = be,
      Rf = m,
      jf = ie,
      If = function (t, e, n, r) {
        try {
          return r ? e(xf(n)[0], n[1]) : e(n);
        } catch (e) {
          Ef(t, "throw", e);
        }
      },
      Cf = Du,
      Lf = tt,
      Bf = ke,
      Mf = _r,
      Df = Eu,
      Uf = xu,
      Nf = Array,
      I = i,
      _f = 2147483647,
      qf = 36,
      Ff = 1,
      Qf = 26,
      Hf = 72,
      zf = 128,
      Gf = "-",
      Wf = /[^\0-\u007E]/,
      Vf = /[.\u3002\uFF0E\uFF61]/g,
      Jf = "Overflow: input needs wider integers to process",
      Xf = qf - Ff,
      $f = RangeError,
      Yf = I(Vf.exec),
      Kf = Math.floor,
      Zf = String.fromCharCode,
      ed = I("".charCodeAt),
      td = I([].join),
      nd = I([].push),
      rd = I("".replace),
      od = I("".split),
      id = I("".toLowerCase),
      ad = function (e) {
        for (var t = [], n = 0, r = e.length; n < r; ) {
          var o,
            i = ed(e, n++);
          55296 <= i && i <= 56319 && n < r
            ? 56320 == (64512 & (o = ed(e, n++)))
              ? nd(t, ((1023 & i) << 10) + (1023 & o) + 65536)
              : (nd(t, i), n--)
            : nd(t, i);
        }
        return t;
      },
      sd = function (e) {
        return e + 22 + 75 * (e < 26);
      },
      cd = function (e, t, n) {
        var r = 0;
        for (e = n ? Kf(e / 700) : e >> 1, e += Kf(e / t); (Xf * Qf) >> 1 < e; )
          (e = Kf(e / Xf)), (r += qf);
        return Kf(r + ((1 + Xf) * e) / (e + 38));
      },
      a = x,
      ud = y,
      b = T,
      L = r,
      B = be,
      R = i,
      C = ye,
      P = Au,
      ld = ku,
      fd = u,
      k = hc,
      dd = function (e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          s = jf(e),
          e = Lf(this),
          c = arguments.length,
          u = 1 < c ? arguments[1] : void 0,
          l = void 0 !== u,
          c = (l && (u = Of(u, 2 < c ? arguments[2] : void 0)), Uf(s)),
          f = 0;
        if (!c || (this === Nf && Cf(c)))
          for (t = Bf(s), n = e ? new this(t) : Nf(t); f < t; f++)
            (a = l ? u(s[f], f) : s[f]), Mf(n, f, a);
        else
          for (
            i = (o = Df(s, c)).next, n = e ? new this() : [];
            !(r = Rf(i, o)).done;
            f++
          )
            (a = l ? If(o, u, [r.value, f], !0) : r.value), Mf(n, f, a);
        return (n.length = f), n;
      },
      pd = Pu,
      hd = Na.codeAt,
      gd = function (e) {
        for (
          var t, n = [], r = od(rd(id(e), Vf, "."), "."), o = 0;
          o < r.length;
          o++
        )
          (t = r[o]),
            nd(
              n,
              Yf(Wf, t)
                ? "xn--" +
                    (function (e) {
                      var t,
                        n = [],
                        r = (e = ad(e)).length,
                        o = zf,
                        i = 0,
                        a = Hf;
                      for (l = 0; l < e.length; l++)
                        (t = e[l]) < 128 && nd(n, Zf(t));
                      var s = n.length,
                        c = s;
                      for (s && nd(n, Gf); c < r; ) {
                        for (var u = _f, l = 0; l < e.length; l++)
                          o <= (t = e[l]) && t < u && (u = t);
                        var f = c + 1;
                        if (u - o > Kf((_f - i) / f)) throw $f(Jf);
                        for (
                          i += (u - o) * f, o = u, l = 0;
                          l < e.length;
                          l++
                        ) {
                          if ((t = e[l]) < o && ++i > _f) throw $f(Jf);
                          if (t == o) {
                            for (var d = i, p = qf; ; ) {
                              var h = p <= a ? Ff : a + Qf <= p ? Qf : p - a;
                              if (d < h) break;
                              var g = d - h,
                                y = qf - h;
                              nd(n, Zf(sd(h + (g % y)))),
                                (d = Kf(g / y)),
                                (p += qf);
                            }
                            nd(n, Zf(sd(d))),
                              (a = cd(i, f, c == s)),
                              (i = 0),
                              c++;
                          }
                        }
                        i++, o++;
                      }
                      return td(n, "");
                    })(t)
                : t
            );
        return td(n, ".");
      },
      yd = S,
      j = gc,
      vd = Su,
      O = fc,
      I = A,
      md = I.set,
      bd = I.getterFor("URL"),
      Ad = O.URLSearchParams,
      wd = O.getState,
      T = L.URL,
      kd = L.TypeError,
      xd = L.parseInt,
      Ed = Math.floor,
      Sd = Math.pow,
      Pd = R("".charAt),
      Td = R(/./.exec),
      Od = R([].join),
      Rd = R((1).toString),
      jd = R([].pop),
      Id = R([].push),
      Cd = R("".replace),
      Ld = R([].shift),
      Bd = R("".split),
      Md = R("".slice),
      Dd = R("".toLowerCase),
      Ud = R([].unshift),
      Nd = "Invalid scheme",
      _d = "Invalid host",
      qd = "Invalid port",
      Fd = /[a-z]/i,
      Qd = /[\d+-.a-z]/i,
      Hd = /\d/,
      zd = /^0x/i,
      Gd = /^[0-7]+$/,
      Wd = /^\d+$/,
      Vd = /^[\da-f]+$/i,
      Jd = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
      Xd = /[\0\t\n\r #/:<>?@[\\\]^|]/,
      $d = /^[\u0000-\u0020]+/,
      Yd = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
      Kd = /[\t\n\r]/g,
      Zd = {},
      ep = k({}, Zd, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
      tp = k({}, ep, { "#": 1, "?": 1, "{": 1, "}": 1 }),
      np = k({}, tp, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1,
      }),
      rp = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
      op = {},
      ip = {},
      ap = {},
      sp = {},
      cp = {},
      up = {},
      lp = {},
      fp = {},
      dp = {},
      pp = {},
      hp = {},
      gp = {},
      yp = {},
      vp = {},
      mp = {},
      bp = {},
      Ap = {},
      wp = {},
      kp = {},
      xp = {},
      Ep = {},
      Sp =
        ((Fu.prototype = {
          type: "URL",
          parse: function (e, t, n) {
            var r,
              o,
              i,
              a,
              s = this,
              c = t || op,
              u = 0,
              l = "",
              f = !1,
              d = !1,
              p = !1;
            for (
              e = yd(e),
                t ||
                  ((s.scheme = ""),
                  (s.username = ""),
                  (s.password = ""),
                  (s.host = null),
                  (s.port = null),
                  (s.path = []),
                  (s.query = null),
                  (s.fragment = null),
                  (s.cannotBeABaseURL = !1),
                  (e = Cd(e, $d, "")),
                  (e = Cd(e, Yd, "$1"))),
                e = Cd(e, Kd, ""),
                r = dd(e);
              u <= r.length;

            ) {
              switch (((o = r[u]), c)) {
                case op:
                  if (!o || !Td(Fd, o)) {
                    if (t) return Nd;
                    c = ap;
                    continue;
                  }
                  (l += Dd(o)), (c = ip);
                  break;
                case ip:
                  if (o && (Td(Qd, o) || "+" == o || "-" == o || "." == o))
                    l += Dd(o);
                  else {
                    if (":" != o) {
                      if (t) return Nd;
                      (l = ""), (c = ap), (u = 0);
                      continue;
                    }
                    if (
                      t &&
                      (s.isSpecial() != fd(rp, l) ||
                        ("file" == l &&
                          (s.includesCredentials() || null !== s.port)) ||
                        ("file" == s.scheme && !s.host))
                    )
                      return;
                    if (((s.scheme = l), t))
                      return void (
                        s.isSpecial() &&
                        rp[s.scheme] == s.port &&
                        (s.port = null)
                      );
                    (l = ""),
                      "file" == s.scheme
                        ? (c = vp)
                        : s.isSpecial() && n && n.scheme == s.scheme
                        ? (c = sp)
                        : s.isSpecial()
                        ? (c = fp)
                        : "/" == r[u + 1]
                        ? ((c = cp), u++)
                        : ((s.cannotBeABaseURL = !0), Id(s.path, ""), (c = kp));
                  }
                  break;
                case ap:
                  if (!n || (n.cannotBeABaseURL && "#" != o)) return Nd;
                  if (n.cannotBeABaseURL && "#" == o) {
                    (s.scheme = n.scheme),
                      (s.path = pd(n.path)),
                      (s.query = n.query),
                      (s.fragment = ""),
                      (s.cannotBeABaseURL = !0),
                      (c = Ep);
                    break;
                  }
                  c = "file" == n.scheme ? vp : up;
                  continue;
                case sp:
                  if ("/" != o || "/" != r[u + 1]) {
                    c = up;
                    continue;
                  }
                  (c = dp), u++;
                  break;
                case cp:
                  if ("/" == o) {
                    c = pp;
                    break;
                  }
                  c = wp;
                  continue;
                case up:
                  if (((s.scheme = n.scheme), o == Wu))
                    (s.username = n.username),
                      (s.password = n.password),
                      (s.host = n.host),
                      (s.port = n.port),
                      (s.path = pd(n.path)),
                      (s.query = n.query);
                  else if ("/" == o || ("\\" == o && s.isSpecial())) c = lp;
                  else if ("?" == o)
                    (s.username = n.username),
                      (s.password = n.password),
                      (s.host = n.host),
                      (s.port = n.port),
                      (s.path = pd(n.path)),
                      (s.query = ""),
                      (c = xp);
                  else {
                    if ("#" != o) {
                      (s.username = n.username),
                        (s.password = n.password),
                        (s.host = n.host),
                        (s.port = n.port),
                        (s.path = pd(n.path)),
                        s.path.length--,
                        (c = wp);
                      continue;
                    }
                    (s.username = n.username),
                      (s.password = n.password),
                      (s.host = n.host),
                      (s.port = n.port),
                      (s.path = pd(n.path)),
                      (s.query = n.query),
                      (s.fragment = ""),
                      (c = Ep);
                  }
                  break;
                case lp:
                  if (!s.isSpecial() || ("/" != o && "\\" != o)) {
                    if ("/" != o) {
                      (s.username = n.username),
                        (s.password = n.password),
                        (s.host = n.host),
                        (s.port = n.port),
                        (c = wp);
                      continue;
                    }
                    c = pp;
                  } else c = dp;
                  break;
                case fp:
                  if (((c = dp), "/" != o || "/" != Pd(l, u + 1))) continue;
                  u++;
                  break;
                case dp:
                  if ("/" == o || "\\" == o) break;
                  c = pp;
                  continue;
                case pp:
                  if ("@" == o) {
                    f && (l = "%40" + l);
                    for (var f = !0, h = dd(l), g = 0; g < h.length; g++) {
                      var y = h[g];
                      ":" != y || p
                        ? ((y = Nu(y, np)),
                          p ? (s.password += y) : (s.username += y))
                        : (p = !0);
                    }
                    l = "";
                  } else if (
                    o == Wu ||
                    "/" == o ||
                    "?" == o ||
                    "#" == o ||
                    ("\\" == o && s.isSpecial())
                  ) {
                    if (f && "" == l) return "Invalid authority";
                    (u -= dd(l).length + 1), (l = ""), (c = hp);
                  } else l += o;
                  break;
                case hp:
                case gp:
                  if (t && "file" == s.scheme) {
                    c = bp;
                    continue;
                  }
                  if (":" != o || d) {
                    if (
                      o == Wu ||
                      "/" == o ||
                      "?" == o ||
                      "#" == o ||
                      ("\\" == o && s.isSpecial())
                    ) {
                      if (s.isSpecial() && "" == l) return _d;
                      if (
                        t &&
                        "" == l &&
                        (s.includesCredentials() || null !== s.port)
                      )
                        return;
                      if ((i = s.parseHost(l))) return i;
                      if (((l = ""), (c = Ap), t)) return;
                      continue;
                    }
                    "[" == o ? (d = !0) : "]" == o && (d = !1), (l += o);
                  } else {
                    if ("" == l) return _d;
                    if ((i = s.parseHost(l))) return i;
                    if (((l = ""), (c = yp), t == gp)) return;
                  }
                  break;
                case yp:
                  if (!Td(Hd, o)) {
                    if (
                      o == Wu ||
                      "/" == o ||
                      "?" == o ||
                      "#" == o ||
                      ("\\" == o && s.isSpecial()) ||
                      t
                    ) {
                      if ("" != l) {
                        var v = xd(l, 10);
                        if (65535 < v) return qd;
                        (s.port =
                          s.isSpecial() && v === rp[s.scheme] ? null : v),
                          (l = "");
                      }
                      if (t) return;
                      c = Ap;
                      continue;
                    }
                    return qd;
                  }
                  l += o;
                  break;
                case vp:
                  if (((s.scheme = "file"), "/" == o || "\\" == o)) c = mp;
                  else {
                    if (!n || "file" != n.scheme) {
                      c = wp;
                      continue;
                    }
                    if (o == Wu)
                      (s.host = n.host),
                        (s.path = pd(n.path)),
                        (s.query = n.query);
                    else if ("?" == o)
                      (s.host = n.host),
                        (s.path = pd(n.path)),
                        (s.query = ""),
                        (c = xp);
                    else {
                      if ("#" != o) {
                        qu(Od(pd(r, u), "")) ||
                          ((s.host = n.host),
                          (s.path = pd(n.path)),
                          s.shortenPath()),
                          (c = wp);
                        continue;
                      }
                      (s.host = n.host),
                        (s.path = pd(n.path)),
                        (s.query = n.query),
                        (s.fragment = ""),
                        (c = Ep);
                    }
                  }
                  break;
                case mp:
                  if ("/" == o || "\\" == o) {
                    c = bp;
                    break;
                  }
                  n &&
                    "file" == n.scheme &&
                    !qu(Od(pd(r, u), "")) &&
                    (_u(n.path[0], !0)
                      ? Id(s.path, n.path[0])
                      : (s.host = n.host)),
                    (c = wp);
                  continue;
                case bp:
                  if (
                    o == Wu ||
                    "/" == o ||
                    "\\" == o ||
                    "?" == o ||
                    "#" == o
                  ) {
                    if (!t && _u(l)) c = wp;
                    else {
                      if ("" == l) {
                        if (((s.host = ""), t)) return;
                      } else {
                        if ((i = s.parseHost(l))) return i;
                        if (("localhost" == s.host && (s.host = ""), t)) return;
                        l = "";
                      }
                      c = Ap;
                    }
                    continue;
                  }
                  l += o;
                  break;
                case Ap:
                  if (s.isSpecial()) {
                    if (((c = wp), "/" != o && "\\" != o)) continue;
                  } else if (t || "?" != o)
                    if (t || "#" != o) {
                      if (o != Wu && ((c = wp), "/" != o)) continue;
                    } else (s.fragment = ""), (c = Ep);
                  else (s.query = ""), (c = xp);
                  break;
                case wp:
                  if (
                    o == Wu ||
                    "/" == o ||
                    ("\\" == o && s.isSpecial()) ||
                    (!t && ("?" == o || "#" == o))
                  ) {
                    if (
                      (".." === (v = Dd((v = l))) ||
                      "%2e." === v ||
                      ".%2e" === v ||
                      "%2e%2e" === v
                        ? (s.shortenPath(),
                          "/" == o ||
                            ("\\" == o && s.isSpecial()) ||
                            Id(s.path, ""))
                        : "." === (a = l) || "%2e" === Dd(a)
                        ? "/" == o ||
                          ("\\" == o && s.isSpecial()) ||
                          Id(s.path, "")
                        : ("file" == s.scheme &&
                            !s.path.length &&
                            _u(l) &&
                            (s.host && (s.host = ""), (l = Pd(l, 0) + ":")),
                          Id(s.path, l)),
                      (l = ""),
                      "file" == s.scheme && (o == Wu || "?" == o || "#" == o))
                    )
                      for (; 1 < s.path.length && "" === s.path[0]; )
                        Ld(s.path);
                    "?" == o
                      ? ((s.query = ""), (c = xp))
                      : "#" == o && ((s.fragment = ""), (c = Ep));
                  } else l += Nu(o, tp);
                  break;
                case kp:
                  "?" == o
                    ? ((s.query = ""), (c = xp))
                    : "#" == o
                    ? ((s.fragment = ""), (c = Ep))
                    : o != Wu && (s.path[0] += Nu(o, Zd));
                  break;
                case xp:
                  t || "#" != o
                    ? o != Wu &&
                      ("'" == o && s.isSpecial()
                        ? (s.query += "%27")
                        : (s.query += "#" == o ? "%23" : Nu(o, Zd)))
                    : ((s.fragment = ""), (c = Ep));
                  break;
                case Ep:
                  o != Wu && (s.fragment += Nu(o, ep));
              }
              u++;
            }
          },
          parseHost: function (e) {
            var t, n, r;
            if ("[" == Pd(e, 0))
              return "]" == Pd(e, e.length - 1) &&
                (t = (function (e) {
                  function t() {
                    return Pd(e, d);
                  }
                  var n,
                    r,
                    o,
                    i,
                    a,
                    s,
                    c,
                    u = [0, 0, 0, 0, 0, 0, 0, 0],
                    l = 0,
                    f = null,
                    d = 0;
                  if (":" == t()) {
                    if (":" != Pd(e, 1)) return;
                    (d += 2), (f = ++l);
                  }
                  for (; t(); ) {
                    if (8 == l) return;
                    if (":" == t()) {
                      if (null !== f) return;
                      d++, (f = ++l);
                    } else {
                      for (n = r = 0; r < 4 && Td(Vd, t()); )
                        (n = 16 * n + xd(t(), 16)), d++, r++;
                      if ("." == t()) {
                        if (0 == r) return;
                        if (((d -= r), 6 < l)) return;
                        for (o = 0; t(); ) {
                          if (((i = null), 0 < o)) {
                            if (!("." == t() && o < 4)) return;
                            d++;
                          }
                          if (!Td(Hd, t())) return;
                          for (; Td(Hd, t()); ) {
                            if (((a = xd(t(), 10)), null === i)) i = a;
                            else {
                              if (0 == i) return;
                              i = 10 * i + a;
                            }
                            if (255 < i) return;
                            d++;
                          }
                          (u[l] = 256 * u[l] + i), (2 != ++o && 4 != o) || l++;
                        }
                        if (4 != o) return;
                        break;
                      }
                      if (":" == t()) {
                        if ((d++, !t())) return;
                      } else if (t()) return;
                      u[l++] = n;
                    }
                  }
                  if (null !== f)
                    for (s = l - f, l = 7; 0 != l && 0 < s; )
                      (c = u[l]), (u[l--] = u[f + s - 1]), (u[f + --s] = c);
                  else if (8 != l) return;
                  return u;
                })(Md(e, 1, -1)))
                ? void (this.host = t)
                : _d;
            if (this.isSpecial())
              return (
                (e = gd(e)),
                Td(Jd, e) ||
                null ===
                  (t = (function (e) {
                    var t,
                      n,
                      r,
                      o,
                      i,
                      a,
                      s,
                      c = Bd(e, ".");
                    if (
                      (c.length && "" == c[c.length - 1] && c.length--,
                      4 < (t = c.length))
                    )
                      return e;
                    for (n = [], r = 0; r < t; r++) {
                      if ("" == (o = c[r])) return e;
                      if (
                        ((i = 10),
                        1 < o.length &&
                          "0" == Pd(o, 0) &&
                          ((i = Td(zd, o) ? 16 : 8),
                          (o = Md(o, 8 == i ? 1 : 2))),
                        "" === o)
                      )
                        a = 0;
                      else {
                        if (!Td(10 == i ? Wd : 8 == i ? Gd : Vd, o)) return e;
                        a = xd(o, i);
                      }
                      Id(n, a);
                    }
                    for (r = 0; r < t; r++)
                      if (((a = n[r]), r == t - 1)) {
                        if (a >= Sd(256, 5 - t)) return null;
                      } else if (255 < a) return null;
                    for (s = jd(n), r = 0; r < n.length; r++)
                      s += n[r] * Sd(256, 3 - r);
                    return s;
                  })(e))
                  ? _d
                  : void (this.host = t)
              );
            if (Td(Xd, e)) return _d;
            for (t = "", n = dd(e), r = 0; r < n.length; r++) t += Nu(n[r], Zd);
            this.host = t;
          },
          cannotHaveUsernamePasswordPort: function () {
            return !this.host || this.cannotBeABaseURL || "file" == this.scheme;
          },
          includesCredentials: function () {
            return "" != this.username || "" != this.password;
          },
          isSpecial: function () {
            return fd(rp, this.scheme);
          },
          shortenPath: function () {
            var e = this.path,
              t = e.length;
            !t ||
              ("file" == this.scheme && 1 == t && _u(e[0], !0)) ||
              e.length--;
          },
          serialize: function () {
            var e = this,
              t = e.scheme,
              n = e.username,
              r = e.password,
              o = e.host,
              i = e.port,
              a = e.path,
              s = e.query,
              c = e.fragment,
              u = t + ":";
            return (
              null !== o
                ? ((u += "//"),
                  e.includesCredentials() &&
                    (u += n + (r ? ":" + r : "") + "@"),
                  (u += Uu(o)),
                  null !== i && (u += ":" + i))
                : "file" == t && (u += "//"),
              (u += e.cannotBeABaseURL
                ? a[0]
                : a.length
                ? "/" + Od(a, "/")
                : ""),
              null !== s && (u += "?" + s),
              null !== c && (u += "#" + c),
              u
            );
          },
          setHref: function (e) {
            e = this.parse(e);
            if (e) throw kd(e);
            this.searchParams.update();
          },
          getOrigin: function () {
            var e = this.scheme,
              t = this.port;
            if ("blob" == e)
              try {
                return new Sp(e.path[0]).origin;
              } catch (e) {
                return "null";
              }
            return "file" != e && this.isSpecial()
              ? e + "://" + Uu(this.host) + (null !== t ? ":" + t : "")
              : "null";
          },
          getProtocol: function () {
            return this.scheme + ":";
          },
          setProtocol: function (e) {
            this.parse(yd(e) + ":", op);
          },
          getUsername: function () {
            return this.username;
          },
          setUsername: function (e) {
            var t = dd(yd(e));
            if (!this.cannotHaveUsernamePasswordPort()) {
              this.username = "";
              for (var n = 0; n < t.length; n++) this.username += Nu(t[n], np);
            }
          },
          getPassword: function () {
            return this.password;
          },
          setPassword: function (e) {
            var t = dd(yd(e));
            if (!this.cannotHaveUsernamePasswordPort()) {
              this.password = "";
              for (var n = 0; n < t.length; n++) this.password += Nu(t[n], np);
            }
          },
          getHost: function () {
            var e = this.host,
              t = this.port;
            return null === e ? "" : null === t ? Uu(e) : Uu(e) + ":" + t;
          },
          setHost: function (e) {
            this.cannotBeABaseURL || this.parse(e, hp);
          },
          getHostname: function () {
            var e = this.host;
            return null === e ? "" : Uu(e);
          },
          setHostname: function (e) {
            this.cannotBeABaseURL || this.parse(e, gp);
          },
          getPort: function () {
            var e = this.port;
            return null === e ? "" : yd(e);
          },
          setPort: function (e) {
            this.cannotHaveUsernamePasswordPort() ||
              ("" == (e = yd(e)) ? (this.port = null) : this.parse(e, yp));
          },
          getPathname: function () {
            var e = this.path;
            return this.cannotBeABaseURL
              ? e[0]
              : e.length
              ? "/" + Od(e, "/")
              : "";
          },
          setPathname: function (e) {
            this.cannotBeABaseURL || ((this.path = []), this.parse(e, Ap));
          },
          getSearch: function () {
            var e = this.query;
            return e ? "?" + e : "";
          },
          setSearch: function (e) {
            "" == (e = yd(e))
              ? (this.query = null)
              : ("?" == Pd(e, 0) && (e = Md(e, 1)),
                (this.query = ""),
                this.parse(e, xp)),
              this.searchParams.update();
          },
          getSearchParams: function () {
            return this.searchParams.facade;
          },
          getHash: function () {
            var e = this.fragment;
            return e ? "#" + e : "";
          },
          setHash: function (e) {
            "" == (e = yd(e))
              ? (this.fragment = null)
              : ("#" == Pd(e, 0) && (e = Md(e, 1)),
                (this.fragment = ""),
                this.parse(e, Ep));
          },
          update: function () {
            this.query = this.searchParams.serialize() || null;
          },
        }),
        function (e) {
          var t = ld(this, Pp),
            n = 1 < vd(arguments.length, 1) ? arguments[1] : void 0,
            e = md(t, new Fu(e, !1, n));
          ud ||
            ((t.href = e.serialize()),
            (t.origin = e.getOrigin()),
            (t.protocol = e.getProtocol()),
            (t.username = e.getUsername()),
            (t.password = e.getPassword()),
            (t.host = e.getHost()),
            (t.hostname = e.getHostname()),
            (t.port = e.getPort()),
            (t.pathname = e.getPathname()),
            (t.search = e.getSearch()),
            (t.searchParams = e.getSearchParams()),
            (t.hash = e.getHash()));
        }),
      Pp = Sp.prototype;
    ud &&
      (P(Pp, "href", Qu("serialize", "setHref")),
      P(Pp, "origin", Qu("getOrigin")),
      P(Pp, "protocol", Qu("getProtocol", "setProtocol")),
      P(Pp, "username", Qu("getUsername", "setUsername")),
      P(Pp, "password", Qu("getPassword", "setPassword")),
      P(Pp, "host", Qu("getHost", "setHost")),
      P(Pp, "hostname", Qu("getHostname", "setHostname")),
      P(Pp, "port", Qu("getPort", "setPort")),
      P(Pp, "pathname", Qu("getPathname", "setPathname")),
      P(Pp, "search", Qu("getSearch", "setSearch")),
      P(Pp, "searchParams", Qu("getSearchParams")),
      P(Pp, "hash", Qu("getHash", "setHash"))),
      C(
        Pp,
        "toJSON",
        function () {
          return bd(this).serialize();
        },
        { enumerable: !0 }
      ),
      C(
        Pp,
        "toString",
        function () {
          return bd(this).serialize();
        },
        { enumerable: !0 }
      ),
      T &&
        ((hc = T.createObjectURL),
        (Na = T.revokeObjectURL),
        hc && C(Sp, "createObjectURL", B(hc, T)),
        Na) &&
        C(Sp, "revokeObjectURL", B(Na, T)),
      j(Sp, "URL"),
      a({ global: !0, constructor: !0, forced: !b, sham: !ud }, { URL: Sp });
    function Tp(e, t, n) {
      return (
        Ip &&
          Rp((t = t.constructor)) &&
          t !== n &&
          jp((t = t.prototype)) &&
          t !== n.prototype &&
          Ip(e, t),
        e
      );
    }
    function Op(e) {
      var t,
        e =
          arguments.length < 1
            ? 0
            : Qp(
                (function (e) {
                  e = Dp(e, "number");
                  return "bigint" == typeof e ? e : Vp(e);
                })(e)
              );
      return Bp(Hp, (t = this)) &&
        Up(function () {
          qp(t);
        })
        ? Lp(Object(e), this, Op)
        : e;
    }
    var fc = r,
      Rp = d,
      jp = h,
      Ip = dc,
      I = i((1).valueOf),
      O = x,
      L = y,
      R = fc,
      k = i,
      P = Io,
      Cp = u,
      Lp = Tp,
      Bp = mt,
      Mp = p,
      Dp = de,
      Up = e,
      hc = zr.f,
      Np = Tr.f,
      _p = g.f,
      qp = I,
      Fp = _a.trim,
      C = "Number",
      Qp = r[C],
      Hp = (R[C], Qp.prototype),
      zp = r.TypeError,
      Gp = k("".slice),
      Wp = k("".charCodeAt),
      Vp = function (e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          s,
          c = Dp(e, "number");
        if (Mp(c)) throw zp("Cannot convert a Symbol value to a number");
        if ("string" == typeof c && 2 < c.length)
          if (((c = Fp(c)), 43 === (e = Wp(c, 0)) || 45 === e)) {
            if (88 === (t = Wp(c, 2)) || 120 === t) return NaN;
          } else if (48 === e) {
            switch (Wp(c, 1)) {
              case 66:
              case 98:
                (n = 2), (r = 49);
                break;
              case 79:
              case 111:
                (n = 8), (r = 55);
                break;
              default:
                return +c;
            }
            for (i = (o = Gp(c, 2)).length, a = 0; a < i; a++)
              if ((s = Wp(o, a)) < 48 || r < s) return NaN;
            return parseInt(o, n);
          }
        return +c;
      },
      B = P(C, !Qp(" 0o1") || !Qp("0b1") || Qp("+0x1"));
    (Op.prototype = Hp),
      B && (Hp.constructor = Op),
      O({ global: !0, constructor: !0, wrap: !0, forced: B }, { Number: Op });
    if (B)
      for (
        var Jp,
          Xp = R[C],
          $p = Qp,
          Yp = L
            ? hc($p)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(
                ","
              ),
          Kp = 0;
        Yp.length > Kp;
        Kp++
      )
        Cp($p, (Jp = Yp[Kp])) && !Cp(Xp, Jp) && _p(Xp, Jp, Np($p, Jp));
    function Zp(e, t) {
      var n = {};
      (n[e] = Rh(e, t, Ch)),
        Th({ global: !0, constructor: !0, arity: 1, forced: Ch }, n);
    }
    function eh(e, t) {
      var n;
      Ih &&
        Ih[e] &&
        (((n = {})[e] = Rh(jh + "." + e, t, Ch)),
        Th({ target: jh, stat: !0, constructor: !0, arity: 1, forced: Ch }, n));
    }
    function th(u) {
      return function (e, t, n, r) {
        Lh(t);
        var o = Bh(e),
          i = Mh(o),
          a = Dh(o),
          s = u ? a - 1 : 0,
          c = u ? -1 : 1;
        if (n < 2)
          for (;;) {
            if (s in i) {
              (r = i[s]), (s += c);
              break;
            }
            if (((s += c), u ? s < 0 : a <= s))
              throw Uh("Reduce of empty array with no initial value");
          }
        for (; u ? 0 <= s : s < a; s += c) s in i && (r = t(r, i[s], s, o));
        return r;
      };
    }
    var nh = g.f,
      rh = S,
      oh = h,
      ih = w,
      ah = Error,
      sh = i("".replace),
      Na = String(ah("zxcasd").stack),
      ch = /\n\s*at [^:]*:[^\n]*/,
      uh = ch.test(Na),
      lh = he,
      T = !e(function () {
        var e = Error("a");
        return (
          !("stack" in e) ||
          (Object.defineProperty(e, "stack", lh(1, 7)), 7 !== e.stack)
        );
      }),
      fh = w,
      dh = function (e, t) {
        if (uh && "string" == typeof e && !ah.prepareStackTrace)
          for (; t--; ) e = sh(e, ch, "");
        return e;
      },
      ph = T,
      hh = Error.captureStackTrace,
      gh = ce,
      yh = u,
      vh = w,
      mh = mt,
      bh = dc,
      Ah = Br,
      wh = function (e, t, n) {
        n in e ||
          nh(e, n, {
            configurable: !0,
            get: function () {
              return t[n];
            },
            set: function (e) {
              t[n] = e;
            },
          });
      },
      kh = Tp,
      xh = function (e, t) {
        return void 0 === e ? (arguments.length < 2 ? "" : t) : rh(e);
      },
      Eh = function (e, t) {
        oh(t) && "cause" in t && ih(e, "cause", t.cause);
      },
      Sh = function (e, t, n, r) {
        ph && (hh ? hh(e, t) : fh(e, "stack", dh(n, r)));
      },
      Ph = y,
      Th = x,
      Oh = _o,
      Rh = function (e, t, n, r) {
        var o = "stackTraceLimit",
          i = r ? 2 : 1,
          e = e.split("."),
          a = e[e.length - 1],
          s = gh.apply(null, e);
        if (s) {
          var c = s.prototype;
          if ((yh(c, "cause") && delete c.cause, !n)) return s;
          var e = gh("Error"),
            u = t(function (e, t) {
              (t = xh(r ? t : e, void 0)), (e = r ? new s(e) : new s());
              return (
                void 0 !== t && vh(e, "message", t),
                Sh(e, u, e.stack, 2),
                this && mh(c, this) && kh(e, this, u),
                i < arguments.length && Eh(e, arguments[i]),
                e
              );
            });
          (u.prototype = c),
            "Error" !== a
              ? bh
                ? bh(u, e)
                : Ah(u, e, { name: !0 })
              : Ph && o in s && (wh(u, s, o), wh(u, s, "prepareStackTrace")),
            Ah(u, s);
          try {
            c.name !== a && vh(c, "name", a), (c.constructor = u);
          } catch (e) {}
          return u;
        }
      },
      jh = "WebAssembly",
      Ih = r[jh],
      Ch = 7 !== Error("e", { cause: 7 }).cause,
      Lh =
        (Zp("Error", function (t) {
          return function (e) {
            return Oh(t, this, arguments);
          };
        }),
        Zp("EvalError", function (t) {
          return function (e) {
            return Oh(t, this, arguments);
          };
        }),
        Zp("RangeError", function (t) {
          return function (e) {
            return Oh(t, this, arguments);
          };
        }),
        Zp("ReferenceError", function (t) {
          return function (e) {
            return Oh(t, this, arguments);
          };
        }),
        Zp("SyntaxError", function (t) {
          return function (e) {
            return Oh(t, this, arguments);
          };
        }),
        Zp("TypeError", function (t) {
          return function (e) {
            return Oh(t, this, arguments);
          };
        }),
        Zp("URIError", function (t) {
          return function (e) {
            return Oh(t, this, arguments);
          };
        }),
        eh("CompileError", function (t) {
          return function (e) {
            return Oh(t, this, arguments);
          };
        }),
        eh("LinkError", function (t) {
          return function (e) {
            return Oh(t, this, arguments);
          };
        }),
        eh("RuntimeError", function (t) {
          return function (e) {
            return Oh(t, this, arguments);
          };
        }),
        le),
      Bh = ie,
      Mh = fn,
      Dh = ke,
      Uh = TypeError,
      j = { left: th(!1), right: th(!0) },
      a = "undefined" != typeof process && "process" == ve(process),
      b = x,
      Nh = j.left;
    function _h() {
      return Math.random().toString(36).slice(2);
    }
    function qh(e) {
      return Object.keys(e);
    }
    function Fh(e) {
      return Object.prototype.toString.call(e);
    }
    function Qh(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function Hh(e) {
      return "string" == typeof e;
    }
    function zh(e) {
      return "[object BigInt]" === Fh(e);
    }
    function Gh(e) {
      return e instanceof Array;
    }
    function Wh(e) {
      return "object" === N(e) && null !== e;
    }
    function Vh(e) {
      return e instanceof Blob;
    }
    function Jh(e) {
      return e instanceof URLSearchParams;
    }
    function Xh(e) {
      return e instanceof FormData;
    }
    function $h(e) {
      return e instanceof Document;
    }
    b(
      {
        target: "Array",
        proto: !0,
        forced: (!a && 79 < Ye && Ye < 83) || !Oe("reduce"),
      },
      {
        reduce: function (e) {
          var t = arguments.length;
          return Nh(this, e, t, 1 < t ? arguments[1] : void 0);
        },
      }
    );
    function Yh(e) {
      return "".concat(e);
    }
    function Kh(e) {
      return { ok: !0, value: e };
    }
    function Zh(e) {
      return void 0 === e
        ? Kh(Yh(e))
        : null === e
        ? Kh(e)
        : "number" != typeof e ||
          (e !== -1 / 0 && e !== 1 / 0 && !Number.isNaN(e))
        ? zh(e)
          ? Kh("".concat(e, "n"))
          : "symbol" === N(e) || "function" == typeof e
          ? Kh(Yh(e.toString()))
          : e instanceof Error
          ? Kh(Yh(e.stack))
          : e === Object.prototype
          ? { value: null, ok: !1 }
          : e instanceof Object || "object" === N(e)
          ? { value: e, ok: !1 }
          : Kh(e)
        : Kh(Yh(e));
    }
    var M = ["log", "info", "error", "warn"].reduce(function (e, t) {
        return (
          (e[t] = function (e) {
            console[t](
              "[PageSpy] ["
                .concat(t.toLocaleUpperCase(), "]: ")
                .concat(e.toString())
            );
          }),
          e
        );
      }, {}),
      eg = "message",
      tg = "console",
      ng = "refresh";
    function rg(e, t, n) {
      return {
        role: "client",
        type: e,
        data: U(
          U({}, (!(2 < arguments.length && void 0 !== n) || n) && { id: _h() }),
          t
        ),
      };
    }
    var og = ln,
      ig = TypeError,
      ag = Object.getOwnPropertyDescriptor,
      fc =
        y &&
        !(function () {
          if (void 0 !== this) return 1;
          try {
            Object.defineProperty([], "length", { writable: !1 }).length = 1;
          } catch (e) {
            return e instanceof TypeError;
          }
        })(),
      sg = ie,
      cg = ke,
      ug = fc
        ? function (e, t) {
            if (og(e) && !ag(e, "length").writable)
              throw ig("Cannot set read only .length");
            return (e.length = t);
          }
        : function (e, t) {
            return (e.length = t);
          },
      lg = Nr,
      p =
        (x(
          {
            target: "Array",
            proto: !0,
            arity: 1,
            forced:
              e(function () {
                return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
              }) ||
              !(function () {
                try {
                  Object.defineProperty([], "length", { writable: !1 }).push();
                } catch (e) {
                  return e instanceof TypeError;
                }
              })(),
          },
          {
            push: function (e) {
              var t = sg(this),
                n = cg(t),
                r = arguments.length;
              lg(n + r);
              for (var o = 0; o < r; o++) (t[n] = arguments[o]), n++;
              return ug(t, n), n;
            },
          }
        ),
        x),
      fg = nr.findIndex,
      I = $i,
      k = "findIndex",
      dg = !0,
      P =
        (k in [] &&
          Array(1)[k](function () {
            dg = !1;
          }),
        p(
          { target: "Array", proto: !0, forced: dg },
          {
            findIndex: function (e) {
              return fg(this, e, 1 < arguments.length ? arguments[1] : void 0);
            },
          }
        ),
        I(k),
        x),
      O = me,
      pg = Qr.indexOf,
      B = Oe,
      hg = O([].indexOf),
      gg = !!hg && 1 / hg([1], 1, -0) < 0,
      R =
        (P(
          { target: "Array", proto: !0, forced: gg || !B("indexOf") },
          {
            indexOf: function (e) {
              var t = 1 < arguments.length ? arguments[1] : void 0;
              return gg ? hg(this, e, t) || 0 : pg(this, e, t);
            },
          }
        ),
        x),
      C = e,
      yg = jr,
      vg = Tr.f,
      L = y;
    R(
      {
        target: "Object",
        stat: !0,
        forced:
          !L ||
          C(function () {
            vg(1);
          }),
        sham: !L,
      },
      {
        getOwnPropertyDescriptor: function (e, t) {
          return vg(yg(e), t);
        },
      }
    );
    var mg = go,
      bg = jr,
      Ag = Tr,
      wg = _r,
      kg =
        (x(
          { target: "Object", stat: !0, sham: !y },
          {
            getOwnPropertyDescriptors: function (e) {
              for (
                var t, n, r = bg(e), o = Ag.f, i = mg(r), a = {}, s = 0;
                i.length > s;

              )
                void 0 !== (n = o(r, (t = i[s++]))) && wg(a, t, n);
              return a;
            },
          }
        ),
        {}),
      hc = {
        get exports() {
          return kg;
        },
        set exports(e) {
          kg = e;
        },
      },
      Na = {},
      xg = ve,
      Eg = jr,
      Sg = zr.f,
      Pg = Pu,
      Tg =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    Na.f = function (e) {
      if (!Tg || "Window" != xg(e)) return Sg(Eg(e));
      try {
        return Sg(e);
      } catch (e) {
        return Pg(Tg);
      }
    };
    function Og(e) {
      _g(e, Gg, { value: { objectID: "O" + Wg++, weakData: {} } });
    }
    function Rg(e, t) {
      (this.stopped = e), (this.result = t);
    }
    function jg(e, t, n) {
      function r(e) {
        return i && ry(i, "normal", e), new Rg(!0, e);
      }
      function o(e) {
        return d
          ? ($g(e), g ? y(e[0], e[1], r) : y(e[0], e[1]))
          : g
          ? y(e, r)
          : y(e);
      }
      var i,
        a,
        s,
        c,
        u,
        l,
        f = n && n.that,
        d = !(!n || !n.AS_ENTRIES),
        p = !(!n || !n.IS_RECORD),
        h = !(!n || !n.IS_ITERATOR),
        g = !(!n || !n.INTERRUPTED),
        y = Jg(t, f);
      if (p) i = e.iterator;
      else if (h) i = e;
      else {
        if (!(n = ny(e))) throw oy(Yg(e) + " is not iterable");
        if (Kg(n)) {
          for (a = 0, s = Zg(e); a < s; a++)
            if ((c = o(e[a])) && ey(iy, c)) return c;
          return new Rg(!1);
        }
        i = ty(e, n);
      }
      for (u = (p ? e : i).next; !(l = Xg(u, i)).done; ) {
        try {
          c = o(l.value);
        } catch (e) {
          ry(i, "throw", e);
        }
        if ("object" == typeof c && c && ey(iy, c)) return c;
      }
      return new Rg(!1);
    }
    var T = e(function () {
        var e;
        "function" == typeof ArrayBuffer &&
          ((e = new ArrayBuffer(8)), Object.isExtensible(e)) &&
          Object.defineProperty(e, "a", { value: 8 });
      }),
      w = e,
      Ig = h,
      Cg = ve,
      Lg = T,
      Bg = Object.isExtensible,
      fn =
        w(function () {
          Bg(1);
        }) || Lg
          ? function (e) {
              return (
                !(!Ig(e) || (Lg && "ArrayBuffer" == Cg(e))) && (!Bg || Bg(e))
              );
            }
          : Bg,
      j = !e(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      }),
      Mg = x,
      Dg = i,
      b = an,
      Ug = h,
      Ng = u,
      _g = g.f,
      qg = zr,
      Fg = Na,
      Qg = fn,
      Hg = j,
      zg = !1,
      Gg = ae("meta"),
      Wg = 0,
      Vg = (hc.exports = {
        enable: function () {
          (Vg.enable = function () {}), (zg = !0);
          var o = qg.f,
            i = Dg([].splice),
            e = {};
          (e[Gg] = 1),
            o(e).length &&
              ((qg.f = function (e) {
                for (var t = o(e), n = 0, r = t.length; n < r; n++)
                  if (t[n] === Gg) {
                    i(t, n, 1);
                    break;
                  }
                return t;
              }),
              Mg(
                { target: "Object", stat: !0, forced: !0 },
                { getOwnPropertyNames: Fg.f }
              ));
        },
        fastKey: function (e, t) {
          if (!Ug(e))
            return "symbol" == typeof e
              ? e
              : ("string" == typeof e ? "S" : "P") + e;
          if (!Ng(e, Gg)) {
            if (!Qg(e)) return "F";
            if (!t) return "E";
            Og(e);
          }
          return e[Gg].objectID;
        },
        getWeakData: function (e, t) {
          if (!Ng(e, Gg)) {
            if (!Qg(e)) return !0;
            if (!t) return !1;
            Og(e);
          }
          return e[Gg].weakData;
        },
        onFreeze: function (e) {
          return Hg && zg && Qg(e) && !Ng(e, Gg) && Og(e), e;
        },
      }),
      Jg = ((b[Gg] = !0), be),
      Xg = m,
      $g = n,
      Yg = ue,
      Kg = Du,
      Zg = ke,
      ey = mt,
      ty = Eu,
      ny = xu,
      ry = Mu,
      oy = TypeError,
      iy = Rg.prototype,
      ay = t("iterator"),
      sy = !1;
    try {
      var cy = 0,
        uy = {
          next: function () {
            return { done: !!cy++ };
          },
          return: function () {
            sy = !0;
          },
        };
      (uy[ay] = function () {
        return this;
      }),
        Array.from(uy, function () {
          throw 2;
        });
    } catch (e) {}
    function ly(e, t) {
      if (!t && !sy) return !1;
      var n = !1;
      try {
        var r = {};
        (r[ay] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          e(r);
      } catch (e) {}
      return n;
    }
    function fy(e, t, n) {
      function r(e) {
        var n = gy(p[e]);
        vy(
          p,
          e,
          "add" == e
            ? function (e) {
                return n(this, 0 === e ? 0 : e), this;
              }
            : "delete" == e
            ? function (e) {
                return !(l && !xy(e)) && n(this, 0 === e ? 0 : e);
              }
            : "get" == e
            ? function (e) {
                return l && !xy(e) ? void 0 : n(this, 0 === e ? 0 : e);
              }
            : "has" == e
            ? function (e) {
                return !(l && !xy(e)) && n(this, 0 === e ? 0 : e);
              }
            : function (e, t) {
                return n(this, 0 === e ? 0 : e, t), this;
              }
        );
      }
      var o,
        i,
        a,
        s,
        c,
        u = -1 !== e.indexOf("Map"),
        l = -1 !== e.indexOf("Weak"),
        f = u ? "set" : "add",
        d = hy[e],
        p = d && d.prototype,
        h = d,
        g = {};
      return (
        yy(
          e,
          !wy(d) ||
            !(
              l ||
              (p.forEach &&
                !Ey(function () {
                  new d().entries().next();
                }))
            )
        )
          ? ((h = n.getConstructor(t, e, u, f)), my.enable())
          : yy(e, !0) &&
            ((i = (o = new h())[f](l ? {} : -0, 1) != o),
            (a = Ey(function () {
              o.has(1);
            })),
            (s = Sy(function (e) {
              new d(e);
            })),
            (c =
              !l &&
              Ey(function () {
                for (var e = new d(), t = 5; t--; ) e[f](t, t);
                return !e.has(-0);
              })),
            s ||
              (((h = t(function (e, t) {
                Ay(e, p);
                e = Ty(new d(), e, h);
                return ky(t) || by(t, e[f], { that: e, AS_ENTRIES: u }), e;
              })).prototype = p).constructor = h),
            (a || c) && (r("delete"), r("has"), u) && r("get"),
            (c || i) && r(f),
            l) &&
            p.clear &&
            delete p.clear,
        py({ global: !0, constructor: !0, forced: (g[e] = h) != d }, g),
        Py(h, e),
        l || n.setStrong(h, e, u),
        h
      );
    }
    function dy(e) {
      (e = Oy(e)),
        jy &&
          e &&
          !e[Iy] &&
          Ry(e, Iy, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
    }
    var py = x,
      hy = r,
      gy = i,
      yy = Io,
      vy = ye,
      my = kg,
      by = jg,
      Ay = ku,
      wy = d,
      ky = re,
      xy = h,
      Ey = e,
      Sy = ly,
      Py = gc,
      Ty = Tp,
      Oy = ce,
      Ry = Au,
      jy = y,
      Iy = t("species"),
      Cy = ft,
      Ly = Au,
      By = wu,
      My = be,
      Dy = ku,
      Uy = re,
      Ny = jg,
      _y = bc,
      qy = Ac,
      Fy = dy,
      Qy = y,
      Hy = kg.fastKey,
      zy = A.set,
      Gy = A.getterFor,
      ln = {
        getConstructor: function (e, n, r, o) {
          function i(e, t, n) {
            var r,
              o = c(e),
              i = a(e, t);
            return (
              i
                ? (i.value = n)
                : ((o.last = i =
                    {
                      index: (r = Hy(t, !0)),
                      key: t,
                      value: n,
                      previous: (t = o.last),
                      next: void 0,
                      removed: !1,
                    }),
                  o.first || (o.first = i),
                  t && (t.next = i),
                  Qy ? o.size++ : e.size++,
                  "F" !== r && (o.index[r] = i)),
              e
            );
          }
          function a(e, t) {
            var n,
              e = c(e),
              r = Hy(t);
            if ("F" !== r) return e.index[r];
            for (n = e.first; n; n = n.next) if (n.key == t) return n;
          }
          var e = e(function (e, t) {
              Dy(e, s),
                zy(e, {
                  type: n,
                  index: Cy(null),
                  first: void 0,
                  last: void 0,
                  size: 0,
                }),
                Qy || (e.size = 0),
                Uy(t) || Ny(t, e[o], { that: e, AS_ENTRIES: r });
            }),
            s = e.prototype,
            c = Gy(n);
          return (
            By(s, {
              clear: function () {
                for (var e = c(this), t = e.index, n = e.first; n; )
                  (n.removed = !0),
                    n.previous && (n.previous = n.previous.next = void 0),
                    delete t[n.index],
                    (n = n.next);
                (e.first = e.last = void 0),
                  Qy ? (e.size = 0) : (this.size = 0);
              },
              delete: function (e) {
                var t,
                  n,
                  r = c(this),
                  e = a(this, e);
                return (
                  e &&
                    ((t = e.next),
                    (n = e.previous),
                    delete r.index[e.index],
                    (e.removed = !0),
                    n && (n.next = t),
                    t && (t.previous = n),
                    r.first == e && (r.first = t),
                    r.last == e && (r.last = n),
                    Qy ? r.size-- : this.size--),
                  !!e
                );
              },
              forEach: function (e) {
                for (
                  var t,
                    n = c(this),
                    r = My(e, 1 < arguments.length ? arguments[1] : void 0);
                  (t = t ? t.next : n.first);

                )
                  for (r(t.value, t.key, this); t && t.removed; )
                    t = t.previous;
              },
              has: function (e) {
                return !!a(this, e);
              },
            }),
            By(
              s,
              r
                ? {
                    get: function (e) {
                      e = a(this, e);
                      return e && e.value;
                    },
                    set: function (e, t) {
                      return i(this, 0 === e ? 0 : e, t);
                    },
                  }
                : {
                    add: function (e) {
                      return i(this, (e = 0 === e ? 0 : e), e);
                    },
                  }
            ),
            Qy &&
              Ly(s, "size", {
                configurable: !0,
                get: function () {
                  return c(this).size;
                },
              }),
            e
          );
        },
        setStrong: function (e, t, n) {
          var r = t + " Iterator",
            o = Gy(t),
            i = Gy(r);
          _y(
            e,
            t,
            function (e, t) {
              zy(this, {
                type: r,
                target: e,
                state: o(e),
                kind: t,
                last: void 0,
              });
            },
            function () {
              for (var e = i(this), t = e.kind, n = e.last; n && n.removed; )
                n = n.previous;
              return e.target && (e.last = n = n ? n.next : e.state.first)
                ? qy(
                    "keys" == t
                      ? n.key
                      : "values" == t
                      ? n.value
                      : [n.key, n.value],
                    !1
                  )
                : ((e.target = void 0), qy(void 0, !0));
            },
            n ? "entries" : "values",
            !n,
            !0
          ),
            Fy(t);
        },
      };
    fy(
      "Set",
      function (e) {
        return function () {
          return e(this, arguments.length ? arguments[0] : void 0);
        };
      },
      ln
    ),
      fy(
        "Map",
        function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        ln
      );
    var Wy = ie,
      Vy = ec,
      fc = Ls;
    x(
      {
        target: "Object",
        stat: !0,
        forced: e(function () {
          Vy(1);
        }),
        sham: !fc,
      },
      {
        getPrototypeOf: function (e) {
          return Vy(Wy(e));
        },
      }
    );
    function Jy(e) {
      var t, n;
      return "object" !== N(e) ||
        !1 ===
          [(t = (e = Object(e)).name), (n = e.message), (e = e.stack)].every(
            Boolean
          )
        ? null
        : { name: t, message: n, stack: e };
    }
    function Xy(e, t) {
      return void 0 === (e = ov(e).constructor) || av((e = ov(e)[sv]))
        ? t
        : iv(e);
    }
    var $y = new ((function () {
        function a() {
          o(this, a), c(this, "store", {}), c(this, "instanceStore", {});
        }
        return (
          s(
            a,
            [
              {
                key: "getStore",
                value: function () {
                  return this.store;
                },
              },
              {
                key: "resetStore",
                value: function () {
                  this.store = {};
                },
              },
              {
                key: "getInstanceStore",
                value: function () {
                  return this.instanceStore;
                },
              },
              {
                key: "resetInstanceStore",
                value: function () {
                  this.instanceStore = {};
                },
              },
              {
                key: "transformToAtom",
                value: function (e) {
                  var t = Zh(e),
                    n = t.value;
                  return t.ok
                    ? {
                        id: _h(),
                        type:
                          void 0 === (t = e)
                            ? "undefined"
                            : null === t
                            ? "null"
                            : zh(t)
                            ? "bigint"
                            : t instanceof Object
                            ? t instanceof Error
                              ? "error"
                              : t instanceof Function
                              ? "function"
                              : "object"
                            : N(t),
                        value: n,
                      }
                    : this.add(e);
                },
              },
              {
                key: "get",
                value: function (e) {
                  var n,
                    r,
                    o = this,
                    t = this.store[e],
                    i = this.instanceStore[e];
                  return t
                    ? ((n = {}),
                      (r = Object.getOwnPropertyDescriptors(t)),
                      Object.keys(r).forEach(function (e) {
                        var t = r[e];
                        Qh(t, "value") &&
                          (t.value = o.transformToAtom(t.value)),
                          (n[e] = a.getAtomOverview({
                            atomId: _h(),
                            instanceId: i,
                            value: t,
                          }));
                      }),
                      (t = this.addExtraProperty(e)),
                      U(U({}, n), t))
                    : null;
                },
              },
              {
                key: "getOrigin",
                value: function (e) {
                  e = this.store[e];
                  return e || null;
                },
              },
              {
                key: "add",
                value: function (e) {
                  var t =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    n = _h(),
                    r = n,
                    o =
                      (Wh((o = e)) &&
                        Qh(o, "constructor") &&
                        "function" == typeof o.constructor &&
                        (r = t),
                      (this.store[n] = e),
                      (this.instanceStore[n] = r),
                      a.getSemanticValue(e));
                  return a.getAtomOverview({
                    atomId: n,
                    value: o,
                    instanceId: r,
                  });
                },
              },
              {
                key: "addExtraProperty",
                value: function (e) {
                  var t,
                    n = this.store[e],
                    e = this.instanceStore[e],
                    r = {};
                  if (
                    ((n instanceof String ||
                      n instanceof Number ||
                      n instanceof Boolean) &&
                      (r["[[PrimitiveValue]]"] = this.transformToAtom(
                        n.valueOf()
                      )),
                    n instanceof Set)
                  ) {
                    var o,
                      i = {},
                      a = 0,
                      s = Z(n);
                    try {
                      for (s.s(); !(o = s.n()).done; ) {
                        var c = o.value;
                        i[a++] = c;
                      }
                    } catch (e) {
                      s.e(e);
                    } finally {
                      s.f();
                    }
                    (i.size = n.size),
                      (r["[[Entries]]"] = this.transformToAtom(i));
                  }
                  if (n instanceof Map) {
                    var u,
                      l = {},
                      f = 0,
                      d = Z(n.entries());
                    try {
                      for (d.s(); !(u = d.n()).done; ) {
                        var p = W(u.value, 2),
                          h = p[0],
                          g = p[1];
                        l[f++] = { key: h, value: g };
                      }
                    } catch (e) {
                      d.e(e);
                    } finally {
                      d.f();
                    }
                    (l.size = n.size),
                      (r["[[Entries]]"] = this.transformToAtom(l));
                  }
                  return (
                    (Gh(n) ||
                      (t = n) instanceof NodeList ||
                      t instanceof HTMLCollection) &&
                      (r.length = this.transformToAtom(n.length)),
                    null !== Object.getPrototypeOf(n)
                      ? (r["[[Prototype]]"] = this.add(
                          Object.getPrototypeOf(n),
                          e
                        ))
                      : (r.___proto___ = this.transformToAtom(null)),
                    r
                  );
                },
              },
            ],
            [
              {
                key: "getAtomOverview",
                value: function (e) {
                  var t = e.instanceId,
                    t = void 0 === t ? "" : t,
                    n = e.atomId,
                    e = e.value;
                  return {
                    id: _h(),
                    type: "atom",
                    __atomId: n,
                    instanceId: t,
                    value: e,
                  };
                },
              },
              {
                key: "getSemanticValue",
                value: function (e) {
                  var t;
                  return Wh((t = e)) && "[object Object]" === Fh(t)
                    ? "Object {...}"
                    : Gh(e)
                    ? "Array (".concat(e.length, ")")
                    : e.constructor.name;
                },
              },
            ]
          ),
          a
        );
      })())(),
      Yy = "page-spy-room",
      Ky = new ((function () {
        function e() {
          o(this, e),
            c(this, "socket", null),
            c(this, "socketUrl", ""),
            c(this, "socketConnection", null),
            c(this, "timer", null),
            c(this, "retryTimer", null),
            c(this, "messages", []),
            c(this, "events", {
              refresh: [],
              debug: [],
              "atom-detail": [],
              "atom-getter": [],
              "debugger-online": [],
              "database-pagination": [],
            }),
            c(this, "reconnectable", !0),
            c(this, "reconnectTimes", 3),
            c(this, "connectionStatus", !1),
            this.addListener("debug", e.handleDebugger),
            this.addListener("atom-detail", e.handleResolveAtom),
            this.addListener("atom-getter", e.handleAtomPropertyGetter),
            this.addListener("debugger-online", this.handleFlushBuffer);
        }
        return (
          s(
            e,
            [
              {
                key: "getSocket",
                value: function () {
                  return this.socket;
                },
              },
              {
                key: "init",
                value: function (e) {
                  var t = this;
                  try {
                    if (!e) throw Error("WebSocket url cannot be empty");
                    (this.socket = new WebSocket(e)),
                      (this.socketUrl = e),
                      this.socket.addEventListener("open", function () {
                        t.connectOnline(), t.peelMessage();
                      }),
                      this.socket.addEventListener("close", function () {
                        t.connectOffline();
                      }),
                      this.socket.addEventListener("error", function () {
                        (t.reconnectTimes = 0),
                          (t.reconnectable = !1),
                          t.connectOffline();
                      });
                  } catch (e) {
                    M.error(e.message);
                  }
                },
              },
              {
                key: "addListener",
                value: function (e, t) {
                  this.events[e] || (this.events[e] = []),
                    this.events[e].push(t);
                },
              },
              {
                key: "broadcastMessage",
                value: function (e) {
                  this.send(
                    { type: "broadcast", content: { data: e } },
                    1 < arguments.length &&
                      void 0 !== arguments[1] &&
                      arguments[1]
                  );
                },
              },
              {
                key: "close",
                value: function () {
                  var e;
                  this.clearPing(),
                    (this.reconnectTimes = 0),
                    (this.reconnectable = !1),
                    null != (e = this.socket) && e.close();
                },
              },
              {
                key: "connectOnline",
                value: function () {
                  (this.connectionStatus = !0),
                    (this.reconnectTimes = 3),
                    this.pingConnect();
                },
              },
              {
                key: "connectOffline",
                value: function () {
                  var e = this;
                  (this.socket = null),
                    (this.connectionStatus = !1),
                    (this.socketConnection = null),
                    this.clearPing(),
                    !this.reconnectable || this.reconnectTimes <= 0
                      ? (window.dispatchEvent(new CustomEvent("sdk-inactive")),
                        sessionStorage.setItem(
                          Yy,
                          JSON.stringify({ usable: !1 })
                        ))
                      : (this.retryTimer && clearTimeout(this.retryTimer),
                        (this.retryTimer = setTimeout(function () {
                          (e.retryTimer = null), e.tryReconnect();
                        }, 2e3)));
                },
              },
              {
                key: "tryReconnect",
                value: function () {
                  --this.reconnectTimes, this.init(this.socketUrl);
                },
              },
              {
                key: "pingConnect",
                value: function () {
                  var t = this;
                  this.timer = setInterval(function () {
                    var e;
                    (null == (e = t.socket) ? void 0 : e.readyState) ===
                      WebSocket.OPEN && t.send({ type: "ping", content: null });
                  }, 1e4);
                },
              },
              {
                key: "clearPing",
                value: function () {
                  this.timer && window.clearInterval(this.timer);
                },
              },
              {
                key: "peelMessage",
                value: function () {
                  var a = this;
                  this.socket &&
                    this.socket.addEventListener("message", function (e) {
                      var t,
                        n = JSON.parse(e.data);
                      switch (n.type) {
                        case "connect":
                          var r = n.content.selfConnection;
                          a.socketConnection = r;
                          break;
                        case "message":
                          var r = n.content,
                            o = r.data,
                            i = r.from,
                            r = r.to;
                          r.address ===
                            (null == (t = a.socketConnection)
                              ? void 0
                              : t.address) &&
                            a.dispatchEvent(o.type, {
                              source: o,
                              from: i,
                              to: r,
                            });
                          break;
                        case "error":
                          (a.reconnectable = !1), a.connectOffline();
                      }
                    });
                },
              },
              {
                key: "dispatchEvent",
                value: function (e, t) {
                  var n = this;
                  this.events[e].forEach(function (e) {
                    e.call(n, t, function (e) {
                      n.unicastMessage(e, t.from);
                    });
                  });
                },
              },
              {
                key: "unicastMessage",
                value: function (e, t) {
                  var n;
                  (n = this.socketConnection),
                    this.send({
                      type: eg,
                      content: { data: e, from: n, to: t },
                    });
                },
              },
              {
                key: "handleFlushBuffer",
                value: function (t) {
                  var n = this,
                    r = t.source.data.latestId,
                    e = this.messages.findIndex(function (e) {
                      return e.content.data.data.id === r;
                    });
                  this.messages.slice(e + 1).forEach(function (e) {
                    e = {
                      type: eg,
                      content: {
                        data: e.content.data,
                        from: n.socketConnection,
                        to: t.from,
                      },
                    };
                    n.send(e, !0);
                  });
                },
              },
              {
                key: "send",
                value: function (e) {
                  var t,
                    n,
                    r,
                    o,
                    i =
                      1 < arguments.length &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (this.connectionStatus)
                    try {
                      null != (t = this.socket) &&
                        t.send(
                          ((r = (o = Zh((n = e))).ok),
                          (o = o.value),
                          r
                            ? o
                            : JSON.stringify(
                                n,
                                function (e, t) {
                                  return Zh(t).value;
                                },
                                2
                              ))
                        );
                    } catch (e) {
                      throw Error("Incompatible: ".concat(e.message));
                    }
                  i ||
                    -1 < [eg, "ping"].indexOf(e.type) ||
                    this.messages.push(e);
                },
              },
            ],
            [
              {
                key: "handleDebugger",
                value: function (e, t) {
                  var e = e.source,
                    n = e.type,
                    e = e.data;
                  if ("debug" === n) {
                    t(
                      rg(tg, {
                        logType: "debug-origin",
                        logs: [{ id: _h(), type: "debug-origin", value: e }],
                      })
                    );
                    try {
                      var r = new Function("return ".concat(e))();
                      t(
                        rg(tg, {
                          logType: "debug-eval",
                          logs: [$y.transformToAtom(r)],
                        })
                      );
                    } catch (e) {
                      t(
                        rg(tg, {
                          logType: "error",
                          logs: [{ type: "error", value: e.stack }],
                        })
                      );
                    }
                  }
                },
              },
              {
                key: "handleResolveAtom",
                value: function (e, t) {
                  var e = e.source,
                    n = e.type,
                    e = e.data;
                  "atom-detail" === n &&
                    ((n = $y.get(e) || {}),
                    t(rg("atom-detail-".concat(e), n, !1)));
                },
              },
              {
                key: "handleAtomPropertyGetter",
                value: function (e, t) {
                  var n,
                    r,
                    o,
                    e = e.source,
                    i = e.type,
                    e = e.data;
                  "atom-getter" === i &&
                    ((i = e.id),
                    (n = e.parentId),
                    (r = e.key),
                    (e = e.instanceId),
                    (e = $y.getOrigin(e)),
                    (n = $y.getOrigin(n)),
                    (o = {}),
                    (o =
                      e && n
                        ? null == (n = Object.getOwnPropertyDescriptor(n, r)) ||
                          null == (r = n.get)
                          ? void 0
                          : r.call(e)
                        : new Error("Getter computed failed")),
                    t(rg("atom-getter-".concat(i), $y.transformToAtom(o))));
                },
              },
            ]
          ),
          e
        );
      })())(),
      Zy = (function () {
        function t() {
          o(this, t), c(this, "name", "ConsolePlugin"), c(this, "console", {});
        }
        var e;
        return (
          s(t, [
            {
              key: "onCreated",
              value:
                ((e = l(
                  E().mark(function e() {
                    var o = this;
                    return E().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (t.hasInitd) return e.abrupt("return");
                            e.next = 2;
                            break;
                          case 2:
                            (t.hasInitd = !0),
                              ["log", "info", "error", "warn", "debug"].forEach(
                                function (r) {
                                  (o.console[r] =
                                    window.console[r] ||
                                    window.console.log ||
                                    function () {}),
                                    (window.console[r] = function () {
                                      for (
                                        var e = arguments.length,
                                          t = new Array(e),
                                          n = 0;
                                        n < e;
                                        n++
                                      )
                                        t[n] = arguments[n];
                                      o.printLog({
                                        logType: r,
                                        logs: t,
                                        url: window.location.href,
                                      });
                                    });
                                }
                              );
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            },
            {
              key: "printLog",
              value: function (e) {
                var t;
                e.logs &&
                  e.logs.length &&
                  ((t = this.console)[e.logType].apply(t, V(e.logs)),
                  (e.logs = e.logs.map(function (e) {
                    return $y.transformToAtom(e);
                  })),
                  (t = rg(tg, U({ time: Date.now() }, e))),
                  Ky.broadcastMessage(t));
              },
            },
          ]),
          t
        );
      })(),
      ev =
        (c(Zy, "hasInitd", !1),
        (function () {
          function r() {
            o(this, r), c(this, "name", "ErrorPlugin");
          }
          return (
            s(
              r,
              [
                {
                  key: "onCreated",
                  value: function () {
                    r.hasInitd ||
                      ((r.hasInitd = !0),
                      this.onUncaughtError(),
                      this.onResourceLoadError(),
                      this.onUnhandledRejectionError());
                  },
                },
                {
                  key: "onUncaughtError",
                  value: function () {
                    window.addEventListener("error", function (e) {
                      var t, n;
                      e.error
                        ? ((t = (n = e.error).message),
                          (n = n.stack),
                          (e = Jy(e.error)),
                          r.sendMessage(n || t, e))
                        : r.sendMessage(
                            "[PageSpy] An unknown error occurred and no stack trace available",
                            null
                          );
                    });
                  },
                },
                {
                  key: "onResourceLoadError",
                  value: function () {
                    window.addEventListener(
                      "error",
                      function (e) {
                        e instanceof ErrorEvent ||
                          ((e = e.target),
                          r.sendMessage(
                            "[PageSpy] Resource Load Error: Cannot load resource of (".concat(
                              e.src || e.href,
                              ")"
                            ),
                            null
                          ));
                      },
                      !0
                    );
                  },
                },
                {
                  key: "onUnhandledRejectionError",
                  value: function () {
                    window.addEventListener("unhandledrejection", function (e) {
                      var t = Jy(e.reason);
                      r.sendMessage(e.reason, t);
                    });
                  },
                },
              ],
              [
                {
                  key: "sendMessage",
                  value: function (e, t) {
                    (e = {
                      logType: "error",
                      logs: [$y.transformToAtom(e)],
                      time: Date.now(),
                      url: window.location.href,
                      errorDetail: t,
                    }),
                      (t = rg(tg, e));
                    Ky.broadcastMessage(t);
                  },
                },
              ]
            ),
            r
          );
        })()),
      tv = (c(ev, "hasInitd", !1), tt),
      nv = ue,
      rv = TypeError,
      ov = n,
      iv = function (e) {
        if (tv(e)) return e;
        throw rv(nv(e) + " is not a constructor");
      },
      av = re,
      sv = t("species"),
      cv = _o,
      uv = m,
      p = i,
      I = ta,
      lv = n,
      fv = re,
      dv = Yi,
      pv = oe,
      hv = Xy,
      gv = ra,
      yv = we,
      vv = S,
      mv = fe,
      bv = Pu,
      Av = oa,
      wv = Ma,
      k = e,
      kv = Xo.UNSUPPORTED_Y,
      xv = 4294967295,
      Ev = Math.min,
      Sv = [].push,
      Pv = p(/./.exec),
      Tv = p(Sv),
      Ov = p("".slice),
      Rv =
        (I(
          "split",
          function (o, h, g) {
            var y =
              "c" == "abbc".split(/(b)*/)[1] ||
              4 != "test".split(/(?:)/, -1).length ||
              2 != "ab".split(/(?:ab)*/).length ||
              4 != ".".split(/(.?)(.?)/).length ||
              1 < ".".split(/()()/).length ||
              "".split(/.?/).length
                ? function (e, t) {
                    var n = vv(pv(this)),
                      r = void 0 === t ? xv : t >>> 0;
                    if (0 == r) return [];
                    if (void 0 === e) return [n];
                    if (!dv(e)) return uv(h, n, e, r);
                    for (
                      var o,
                        i,
                        a,
                        s = [],
                        t =
                          (e.ignoreCase ? "i" : "") +
                          (e.multiline ? "m" : "") +
                          (e.unicode ? "u" : "") +
                          (e.sticky ? "y" : ""),
                        c = 0,
                        u = new RegExp(e.source, t + "g");
                      (o = uv(wv, u, n)) &&
                      !(
                        c < (i = u.lastIndex) &&
                        (Tv(s, Ov(n, c, o.index)),
                        1 < o.length &&
                          o.index < n.length &&
                          cv(Sv, s, bv(o, 1)),
                        (a = o[0].length),
                        (c = i),
                        r <= s.length)
                      );

                    )
                      u.lastIndex === o.index && u.lastIndex++;
                    return (
                      c === n.length
                        ? (!a && Pv(u, "")) || Tv(s, "")
                        : Tv(s, Ov(n, c)),
                      r < s.length ? bv(s, 0, r) : s
                    );
                  }
                : "0".split(void 0, 0).length
                ? function (e, t) {
                    return void 0 === e && 0 === t ? [] : uv(h, this, e, t);
                  }
                : h;
            return [
              function (e, t) {
                var n = pv(this),
                  r = fv(e) ? void 0 : mv(e, o);
                return r ? uv(r, e, n, t) : uv(y, vv(n), e, t);
              },
              function (e, t) {
                var n = lv(this),
                  r = vv(e),
                  e = g(y, n, r, t, y !== h);
                if (e.done) return e.value;
                var e = hv(n, RegExp),
                  o = n.unicode,
                  i =
                    (n.ignoreCase ? "i" : "") +
                    (n.multiline ? "m" : "") +
                    (n.unicode ? "u" : "") +
                    (kv ? "g" : "y"),
                  a = new e(kv ? "^(?:" + n.source + ")" : n, i),
                  s = void 0 === t ? xv : t >>> 0;
                if (0 == s) return [];
                if (0 === r.length) return null === Av(a, r) ? [r] : [];
                for (var c = 0, u = 0, l = []; u < r.length; ) {
                  a.lastIndex = kv ? 0 : u;
                  var f,
                    d = Av(a, kv ? Ov(r, u) : r);
                  if (
                    null === d ||
                    (f = Ev(yv(a.lastIndex + (kv ? u : 0)), r.length)) === c
                  )
                    u = gv(r, u, o);
                  else {
                    if ((Tv(l, Ov(r, c, u)), l.length === s)) return l;
                    for (var p = 1; p <= d.length - 1; p++)
                      if ((Tv(l, d[p]), l.length === s)) return l;
                    u = c = f;
                  }
                }
                return Tv(l, Ov(r, c)), l;
              },
            ];
          },
          !!k(function () {
            var e = /(?:)/,
              t = e.exec,
              e =
                ((e.exec = function () {
                  return t.apply(this, arguments);
                }),
                "ab".split(e));
            return 2 !== e.length || "a" !== e[0] || "b" !== e[1];
          }),
          kv
        ),
        Kt.PROPER),
      jv = e,
      Iv = v,
      Qr = x,
      Cv = _a.trim;
    Qr(
      {
        target: "String",
        proto: !0,
        forced: (function (e) {
          return jv(function () {
            return !!Iv[e]() || "​᠎" !== "​᠎"[e]() || (Rv && Iv[e].name !== e);
          });
        })("trim"),
      },
      {
        trim: function () {
          return Cv(this);
        },
      }
    );
    function Lv(e) {
      return function () {
        dm(e);
      };
    }
    function Bv(e) {
      dm(e.data);
    }
    function Mv(e) {
      Yv.postMessage(cm(e), qv.protocol + "//" + qv.host);
    }
    function Dv() {
      (this.head = null), (this.tail = null);
    }
    function Uv(e) {
      try {
        return { error: !1, value: e() };
      } catch (e) {
        return { error: !0, value: e };
      }
    }
    function Nv(e) {
      var n, r;
      (this.promise = new e(function (e, t) {
        if (void 0 !== n || void 0 !== r) throw Sm("Bad Promise constructor");
        (n = e), (r = t);
      })),
        (this.resolve = Em(n)),
        (this.reject = Em(r));
    }
    function _v(e, t) {
      var n,
        r,
        o,
        i,
        a = t.value,
        s = t.state == Zm,
        c = s ? e.ok : e.fail,
        u = e.resolve,
        l = e.reject,
        f = e.domain;
      try {
        c
          ? (s ||
              (t.rejection === n0 &&
                ((i = t),
                Om(Bm, Tm, function () {
                  var e = i.facade;
                  Pm ? Vm.emit("rejectionHandled", e) : i0(Km, e, i.value);
                })),
              (t.rejection = t0)),
            !0 === c
              ? (n = a)
              : (f && f.enter(), (n = c(a)), f && (f.exit(), (o = !0))),
            n === e.promise
              ? l(Gm("Promise-chain cycle"))
              : (r = r0(n))
              ? Om(r, n, u, l)
              : u(n))
          : l(a);
      } catch (e) {
        f && !o && f.exit(), l(e);
      }
    }
    var qv,
      Fv,
      Qv,
      Hv,
      zv,
      Gv,
      Wv,
      Vv,
      Jv,
      Xv,
      $v,
      O = /(?:ipad|iphone|ipod).*applewebkit/i.test(Ve),
      Yv = r,
      Kv = _o,
      P = be,
      Zv = d,
      em = u,
      B = e,
      tm = f,
      nm = Ne,
      rm = se,
      om = Su,
      R = O,
      C = a,
      L = Yv.setImmediate,
      go = Yv.clearImmediate,
      im = Yv.process,
      am = Yv.Dispatch,
      sm = Yv.Function,
      T = Yv.MessageChannel,
      cm = Yv.String,
      um = 0,
      lm = {},
      fm = "onreadystatechange",
      dm =
        (B(function () {
          qv = Yv.location;
        }),
        function (e) {
          var t;
          em(lm, e) && ((t = lm[e]), delete lm[e], t());
        }),
      g =
        ((L && go) ||
          ((L = function (e) {
            om(arguments.length, 1);
            var t = Zv(e) ? e : sm(e),
              n = nm(arguments, 1);
            return (
              (lm[++um] = function () {
                Kv(t, void 0, n);
              }),
              Fv(um),
              um
            );
          }),
          (go = function (e) {
            delete lm[e];
          }),
          C
            ? (Fv = function (e) {
                im.nextTick(Lv(e));
              })
            : am && am.now
            ? (Fv = function (e) {
                am.now(Lv(e));
              })
            : T && !R
            ? ((an = (w = new T()).port2),
              (w.port1.onmessage = Bv),
              (Fv = P(an.postMessage, an)))
            : Yv.addEventListener &&
              Zv(Yv.postMessage) &&
              !Yv.importScripts &&
              qv &&
              "file:" !== qv.protocol &&
              !B(Mv)
            ? ((Fv = Mv), Yv.addEventListener("message", Bv, !1))
            : (Fv =
                fm in rm("script")
                  ? function (e) {
                      tm.appendChild(rm("script"))[fm] = function () {
                        tm.removeChild(this), dm(e);
                      };
                    }
                  : function (e) {
                      setTimeout(Lv(e), 0);
                    })),
        { set: L, clear: go }),
      zr =
        ((Dv.prototype = {
          add: function (e) {
            var e = { item: e, next: null },
              t = this.tail;
            t ? (t.next = e) : (this.head = e), (this.tail = e);
          },
          get: function () {
            var e = this.head;
            if (e)
              return (
                null === (this.head = e.next) && (this.tail = null), e.item
              );
          },
        }),
        Dv),
      Na = /ipad|iphone|ipod/i.test(Ve) && "undefined" != typeof Pebble,
      fn = /web0s(?!.*chrome)/i.test(Ve),
      j = r,
      hc = be,
      b = Tr.f,
      pm = g.set,
      mt = zr,
      uy = O,
      ft = Na,
      ln = fn,
      hm = a,
      ec = j.MutationObserver || j.WebKitMutationObserver,
      Ls = j.document,
      gm = j.process,
      fc = j.Promise,
      tt = b(j, "queueMicrotask"),
      Ma = tt && tt.value,
      p =
        (Ma ||
          ((Gv = new mt()),
          (Wv = function () {
            var e, t;
            for (hm && (e = gm.domain) && e.exit(); (t = Gv.get()); )
              try {
                t();
              } catch (e) {
                throw (Gv.head && Vv(), e);
              }
            e && e.enter();
          }),
          (Vv =
            uy || hm || ln || !ec || !Ls
              ? !ft && fc && fc.resolve
                ? (((Xo = fc.resolve(void 0)).constructor = fc),
                  (zv = hc(Xo.then, Xo)),
                  function () {
                    zv(Wv);
                  })
                : hm
                ? function () {
                    gm.nextTick(Wv);
                  }
                : ((pm = hc(pm, j)),
                  function () {
                    pm(Wv);
                  })
              : ((Qv = !0),
                (Hv = Ls.createTextNode("")),
                new ec(Wv).observe(Hv, { characterData: !0 }),
                function () {
                  Hv.data = Qv = !Qv;
                })),
          (Ma = function (e) {
            Gv.head || Vv(), Gv.add(e);
          })),
        Ma),
      I = r.Promise,
      k = "object" == typeof Deno && Deno && "object" == typeof Deno.version,
      Kt = !k && !a && "object" == typeof window && "object" == typeof document,
      v = r,
      ym = I,
      _a = d,
      Qr = Io,
      vm = Zt,
      u = t,
      mm = Kt,
      bm = k,
      Am = Ye,
      wm = (ym && ym.prototype, u("species")),
      km = !1,
      xm = _a(v.PromiseRejectionEvent),
      f = {
        CONSTRUCTOR: Qr("Promise", function () {
          var e = vm(ym),
            t = e !== String(ym);
          if (!t && 66 === Am) return !0;
          if (!Am || Am < 51 || !/native code/.test(e)) {
            var e = new ym(function (e) {
                e(1);
              }),
              n = function (e) {
                e(
                  function () {},
                  function () {}
                );
              };
            if (
              (((e.constructor = {})[wm] = n),
              !(km = e.then(function () {}) instanceof n))
            )
              return !0;
          }
          return !t && (mm || bm) && !xm;
        }),
        REJECTION_EVENT: xm,
        SUBCLASSING: km,
      },
      Ne = {},
      Em = le,
      Sm = TypeError,
      C =
        ((Ne.f = function (e) {
          return new Nv(e);
        }),
        x),
      Pm = a,
      Tm = r,
      Om = m,
      R = ye,
      T = dc,
      w = gc,
      P = dy,
      Rm = le,
      jm = d,
      Im = h,
      Cm = ku,
      Lm = Xy,
      Bm = g.set,
      Mm = p,
      Dm = function (e, t) {
        try {
          1 == arguments.length ? console.error(e) : console.error(e, t);
        } catch (e) {}
      },
      Um = Uv,
      Nm = zr,
      an = A,
      B = I,
      L = Ne,
      _m = "Promise",
      go = f.CONSTRUCTOR,
      qm = f.REJECTION_EVENT,
      Ve = f.SUBCLASSING,
      Fm = an.getterFor(_m),
      Qm = an.set,
      O = B && B.prototype,
      Hm = B,
      zm = O,
      Gm = Tm.TypeError,
      Wm = Tm.document,
      Vm = Tm.process,
      Jm = L.f,
      Xm = Jm,
      $m = !!(Wm && Wm.createEvent && Tm.dispatchEvent),
      Ym = "unhandledrejection",
      Km = "rejectionhandled",
      Zm = 1,
      e0 = 2,
      t0 = 1,
      n0 = 2,
      r0 = function (e) {
        var t;
        return !(!Im(e) || !jm((t = e.then))) && t;
      },
      o0 = function (n, o) {
        n.notified ||
          ((n.notified = !0),
          Mm(function () {
            for (var e, r, t = n.reactions; (e = t.get()); ) _v(e, n);
            (n.notified = !1),
              o &&
                !n.rejection &&
                ((r = n),
                Om(Bm, Tm, function () {
                  var e = r.facade,
                    t = r.value,
                    n = a0(r);
                  if (
                    n &&
                    ((n = Um(function () {
                      Pm ? Vm.emit("unhandledRejection", t, e) : i0(Ym, e, t);
                    })),
                    (r.rejection = Pm || a0(r) ? n0 : t0),
                    n.error)
                  )
                    throw n.value;
                }));
          }));
      },
      i0 = function (e, t, n) {
        var r;
        $m
          ? (((r = Wm.createEvent("Event")).promise = t),
            (r.reason = n),
            r.initEvent(e, !1, !0),
            Tm.dispatchEvent(r))
          : (r = { promise: t, reason: n }),
          !qm && (t = Tm["on" + e])
            ? t(r)
            : e === Ym && Dm("Unhandled promise rejection", n);
      },
      a0 = function (e) {
        return e.rejection !== t0 && !e.parent;
      },
      s0 = function (t, n, r) {
        return function (e) {
          t(n, e, r);
        };
      },
      c0 = function (e, t, n) {
        e.done ||
          ((e.done = !0),
          ((e = n ? n : e).value = t),
          (e.state = e0),
          o0(e, !0));
      },
      u0 = function (n, e, t) {
        if (!n.done) {
          (n.done = !0), t && (n = t);
          try {
            if (n.facade === e) throw Gm("Promise can't be resolved itself");
            var r = r0(e);
            r
              ? Mm(function () {
                  var t = { done: !1 };
                  try {
                    Om(r, e, s0(u0, t, n), s0(c0, t, n));
                  } catch (e) {
                    c0(t, e, n);
                  }
                })
              : ((n.value = e), (n.state = Zm), o0(n, !1));
          } catch (e) {
            c0({ done: !1 }, e, n);
          }
        }
      };
    if (
      go &&
      ((zm = (Hm = function (e) {
        Cm(this, zm), Rm(e), Om(Jv, this);
        var t = Fm(this);
        try {
          e(s0(u0, t), s0(c0, t));
        } catch (e) {
          c0(t, e);
        }
      }).prototype),
      ((Jv = function (e) {
        Qm(this, {
          type: _m,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: new Nm(),
          rejection: !1,
          state: 0,
          value: void 0,
        });
      }).prototype = R(zm, "then", function (e, t) {
        var n = Fm(this),
          r = Jm(Lm(this, Hm));
        return (
          (n.parent = !0),
          (r.ok = !jm(e) || e),
          (r.fail = jm(t) && t),
          (r.domain = Pm ? Vm.domain : void 0),
          0 == n.state
            ? n.reactions.add(r)
            : Mm(function () {
                _v(r, n);
              }),
          r.promise
        );
      })),
      (Xv = function () {
        var e = new Jv(),
          t = Fm(e);
        (this.promise = e),
          (this.resolve = s0(u0, t)),
          (this.reject = s0(c0, t));
      }),
      (L.f = Jm =
        function (e) {
          return e === Hm || void 0 === e ? new Xv() : Xm(e);
        }),
      jm(B)) &&
      O !== Object.prototype
    ) {
      ($v = O.then),
        Ve ||
          R(
            O,
            "then",
            function (e, t) {
              var n = this;
              return new Hm(function (e, t) {
                Om($v, n, e, t);
              }).then(e, t);
            },
            { unsafe: !0 }
          );
      try {
        delete O.constructor;
      } catch (e) {}
      T && T(O, zm);
    }
    C({ global: !0, constructor: !0, wrap: !0, forced: go }, { Promise: Hm }),
      w(Hm, _m, !1),
      P(_m);
    var l0 = I,
      Na = ly,
      fn =
        f.CONSTRUCTOR ||
        !Na(function (e) {
          l0.all(e).then(void 0, function () {});
        }),
      f0 = m,
      d0 = le,
      p0 = Ne,
      h0 = Uv,
      g0 = jg,
      b =
        (x(
          { target: "Promise", stat: !0, forced: fn },
          {
            all: function (e) {
              var s = this,
                t = p0.f(s),
                c = t.resolve,
                u = t.reject,
                n = h0(function () {
                  var r = d0(s.resolve),
                    o = [],
                    i = 0,
                    a = 1;
                  g0(e, function (e) {
                    var t = i++,
                      n = !1;
                    a++,
                      f0(r, s, e).then(function (e) {
                        n || ((n = !0), (o[t] = e), --a) || c(o);
                      }, u);
                  }),
                    --a || c(o);
                });
              return n.error && u(n.value), t.promise;
            },
          }
        ),
        x),
      tt = I,
      mt = ce,
      uy = d,
      ln = ye,
      ft = tt && tt.prototype;
    b(
      { target: "Promise", proto: !0, forced: f.CONSTRUCTOR, real: !0 },
      {
        catch: function (e) {
          return this.then(void 0, e);
        },
      }
    ),
      uy(tt) &&
        ((fc = mt("Promise").prototype.catch), ft.catch !== fc) &&
        ln(ft, "catch", fc, { unsafe: !0 });
    var y0 = m,
      v0 = le,
      m0 = Ne,
      b0 = Uv,
      A0 = jg;
    x(
      { target: "Promise", stat: !0, forced: fn },
      {
        race: function (e) {
          var n = this,
            r = m0.f(n),
            o = r.reject,
            t = b0(function () {
              var t = v0(n.resolve);
              A0(e, function (e) {
                y0(t, n, e).then(r.resolve, o);
              });
            });
          return t.error && o(t.value), r.promise;
        },
      }
    );
    function w0(e, t) {
      return (
        P0(e),
        T0(t) && t.constructor === e
          ? t
          : ((0, (e = O0.f(e)).resolve)(t), e.promise)
      );
    }
    function k0(r) {
      return new Promise(function (t, e) {
        var n = new FileReader();
        (n.onload = function (e) {
          t(null == (e = e.target) ? void 0 : e.result);
        }),
          (n.onerror = function () {
            e(new Error("blob2base64Async: can not convert"));
          }),
          n.readAsDataURL(r);
      });
    }
    function x0(i, a, s, c, u, e) {
      var l = s + i.length,
        f = c.length,
        t = N0;
      return (
        void 0 !== u && ((u = C0(u)), (t = U0)),
        M0(e, t, function (e, t) {
          var n;
          switch (B0(t, 0)) {
            case "$":
              return "$";
            case "&":
              return i;
            case "`":
              return D0(a, 0, s);
            case "'":
              return D0(a, l);
            case "<":
              n = u[D0(t, 1, -1)];
              break;
            default:
              var r,
                o = +t;
              if (0 == o) return e;
              if (f < o)
                return 0 !== (r = L0(o / 10)) && r <= f
                  ? void 0 === c[r - 1]
                    ? B0(t, 1)
                    : c[r - 1] + B0(t, 1)
                  : e;
              n = c[o - 1];
          }
          return void 0 === n ? "" : n;
        })
      );
    }
    var E0 = m,
      S0 = Ne,
      P0 =
        (x(
          { target: "Promise", stat: !0, forced: f.CONSTRUCTOR },
          {
            reject: function (e) {
              var t = S0.f(this);
              return E0(t.reject, void 0, e), t.promise;
            },
          }
        ),
        n),
      T0 = h,
      O0 = Ne,
      Xo = x,
      hc = ce,
      j = f.CONSTRUCTOR,
      R0 = w0,
      j0 =
        (hc("Promise"),
        Xo(
          { target: "Promise", stat: !0, forced: j },
          {
            resolve: function (e) {
              return R0(this, e);
            },
          }
        ),
        s(function e(t) {
          o(this, e),
            c(this, "id", ""),
            c(this, "name", ""),
            c(this, "method", ""),
            c(this, "url", ""),
            c(this, "requestType", "xhr"),
            c(this, "requestHeader", null),
            c(this, "status", 0),
            c(this, "statusText", ""),
            c(this, "readyState", 0),
            c(this, "responseReason", null),
            c(this, "responseType", ""),
            c(this, "responseHeader", null),
            c(this, "startTime", 0),
            c(this, "endTime", 0),
            c(this, "costTime", 0),
            c(this, "getData", null),
            c(this, "postData", null),
            c(this, "requestPayload", null),
            c(this, "withCredentials", !1),
            (this.id = t);
        })),
      I0 = (function () {
        function e() {
          o(this, e), c(this, "reqMap", Object.create(null));
        }
        return (
          s(e, [
            {
              key: "getRequestMap",
              value: function () {
                return this.reqMap;
              },
            },
            {
              key: "getRequest",
              value: function (e) {
                return this.reqMap[e];
              },
            },
            {
              key: "createRequest",
              value: function (e) {
                return e
                  ? this.reqMap[e]
                    ? (M.warn(
                        "The request object has been in store, disallow duplicate create"
                      ),
                      !1)
                    : ((this.reqMap[e] = new j0(e)), !0)
                  : (M.error('The "id" is required when init request object'),
                    !1);
              },
            },
            {
              key: "setRequest",
              value: function (e, t) {
                return !(!e || !t || ((this.reqMap[e] = t), 0));
              },
            },
            {
              key: "sendRequestItem",
              value: function (e, t) {
                this.reqMap[e] || (this.reqMap[e] = t);
                var n = rg("network", U({}, t), !1);
                Ky.broadcastMessage(n, t.readyState !== XMLHttpRequest.DONE),
                  this.deferDeleteRequest(e);
              },
            },
            {
              key: "deferDeleteRequest",
              value: function (e) {
                var t = this,
                  n = this.getRequest(e);
                n &&
                  4 === n.readyState &&
                  setTimeout(function () {
                    delete t.reqMap[e];
                  }, 3e3);
              },
            },
          ]),
          e
        );
      })(),
      Ls = i,
      C0 = ie,
      L0 = Math.floor,
      B0 = Ls("".charAt),
      M0 = Ls("".replace),
      D0 = Ls("".slice),
      U0 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
      N0 = /\$([$&'`]|\d{1,2})/g,
      _0 = _o,
      q0 = m,
      ec = i,
      Ma = ta,
      Io = e,
      F0 = n,
      Q0 = d,
      H0 = re,
      z0 = Ae,
      G0 = we,
      W0 = S,
      V0 = oe,
      J0 = ra,
      X0 = fe,
      $0 = x0,
      Y0 = oa,
      K0 = t("replace"),
      Z0 = Math.max,
      eb = Math.min,
      tb = ec([].concat),
      nb = ec([].push),
      rb = ec("".indexOf),
      ob = ec("".slice),
      Zt = "$0" === "a".replace(/./, "$0"),
      ib = !!/./[K0] && "" === /./[K0]("a", "$0"),
      ab =
        (Ma(
          "replace",
          function (e, b, A) {
            var w = ib ? "$" : "$0";
            return [
              function (e, t) {
                var n = V0(this),
                  r = H0(e) ? void 0 : X0(e, K0);
                return r ? q0(r, e, n, t) : q0(b, W0(n), e, t);
              },
              function (e, t) {
                var n = F0(this),
                  r = W0(e);
                if (
                  "string" == typeof t &&
                  -1 === rb(t, w) &&
                  -1 === rb(t, "$<")
                ) {
                  e = A(b, n, r, t);
                  if (e.done) return e.value;
                }
                for (
                  var o,
                    i = Q0(t),
                    a = (i || (t = W0(t)), n.global),
                    s = (a && ((o = n.unicode), (n.lastIndex = 0)), []);
                  null !== (d = Y0(n, r)) && (nb(s, d), a);

                )
                  "" === W0(d[0]) && (n.lastIndex = J0(r, G0(n.lastIndex), o));
                for (var c, u = "", l = 0, f = 0; f < s.length; f++) {
                  for (
                    var d,
                      p = W0((d = s[f])[0]),
                      h = Z0(eb(z0(d.index), r.length), 0),
                      g = [],
                      y = 1;
                    y < d.length;
                    y++
                  )
                    nb(g, void 0 === (c = d[y]) ? c : String(c));
                  var v = d.groups,
                    m = i
                      ? ((m = tb([p], g, h, r)),
                        void 0 !== v && nb(m, v),
                        W0(_0(t, void 0, m)))
                      : $0(p, r, h, g, v, t);
                  l <= h && ((u += ob(r, l, h) + m), (l = h + p.length));
                }
                return u + ob(r, l);
              },
            ];
          },
          !!Io(function () {
            var e = /./;
            return (
              (e.exec = function () {
                var e = [];
                return (e.groups = { a: "7" }), e;
              }),
              "7" !== "".replace(e, "$<a>")
            );
          }) ||
            !Zt ||
            ib
        ),
        "Exceed maximum limit"),
      sb = "(file)";
    function cb(e) {
      for (var t = [], n = e.next(); !n.done; ) {
        var r = W(n.value, 2),
          o = r[0],
          r = r[1],
          i = void 0,
          i = r instanceof File ? sb : String(r);
        t.push([o, i]), (n = e.next());
      }
      return t;
    }
    function ub(e) {
      try {
        var t = new URL(e, window.location.href),
          n = t.href,
          r = t.searchParams,
          o = n,
          i = V(r.entries());
        return {
          url: o,
          name: n.replace(/^.*?([^/]+)(\/)*(\?.*?)?$/, "$1$2$3") || "",
          query: i,
        };
      } catch (e) {
        return (
          console.error(e), { url: "Unknown", name: "Unknown", query: null }
        );
      }
    }
    var lb = "Content-Type";
    function fb(e, t) {
      if (!t) return e;
      t = (t = t)
        ? Xh(t)
          ? "multipart/form-data"
          : Jh(t)
          ? "application/x-www-form-urlencoded;charset=UTF-8"
          : $h(t)
          ? "application/xml"
          : Vh(t)
          ? t.type
          : "text/plain;charset=UTF-8"
        : null;
      if (!t) return e;
      t = [lb, t];
      if (!e) return [t];
      for (var n = 0; n < e.length; n++)
        if (W(e[n], 1)[0].toUpperCase() === lb.toUpperCase()) return e;
      return [].concat(V(e), [t]);
    }
    function db() {
      return pb.apply(this, arguments);
    }
    function pb() {
      return (pb = l(
        E().mark(function e(t) {
          var n;
          return E().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (t) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", null);
                case 2:
                  if (Jh(t) || Xh(t))
                    return e.abrupt("return", cb(t.entries()));
                  e.next = 4;
                  break;
                case 4:
                  if (Vh(t)) return e.abrupt("return", "[object Blob]");
                  e.next = 6;
                  break;
                case 6:
                  if (ArrayBuffer.isView(t))
                    return e.abrupt("return", "[object TypedArray]");
                  e.next = 8;
                  break;
                case 8:
                  if ($h(t))
                    return (
                      (n = new XMLSerializer().serializeToString(t)),
                      e.abrupt("return", n)
                    );
                  e.next = 11;
                  break;
                case 11:
                  if (Hh(t)) return e.abrupt("return", t);
                  e.next = 13;
                  break;
                case 13:
                  return e.abrupt("return", Fh(t));
                case 14:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function hb(e) {
      return 200 <= e && e < 400;
    }
    function gb(s) {
      return function (e) {
        for (var t, n = bb(e), r = mb(n), o = r.length, i = 0, a = []; i < o; )
          (t = r[i++]), (vb && !Ab(n, t)) || wb(a, s ? [t, n[t]] : n[t]);
        return a;
      };
    }
    var yb = (function () {
        F(r, I0);
        var t,
          n = G(r);
        function r() {
          var e;
          return (
            o(this, r),
            c(z((e = n.call(this))), "xhrOpen", null),
            c(z(e), "xhrSend", null),
            c(z(e), "xhrSetRequestHeader", null),
            e.initProxyHandler(),
            e
          );
        }
        return (
          s(r, [
            {
              key: "initProxyHandler",
              value: function () {
                var e,
                  s,
                  a,
                  r,
                  c = this;
                window.XMLHttpRequest &&
                  ((e = window.XMLHttpRequest.prototype),
                  (s = e.open),
                  (a = e.send),
                  (r = e.setRequestHeader),
                  (this.xhrOpen = s),
                  (this.xhrSend = a),
                  (this.xhrSetRequestHeader = r),
                  (window.XMLHttpRequest.prototype.open = function () {
                    for (
                      var o = this,
                        e = arguments.length,
                        t = new Array(e),
                        n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    var r = t[0],
                      i = t[1],
                      a = _h();
                    return (
                      c.createRequest(a),
                      (this.pageSpyRequestId = a),
                      (this.pageSpyRequestMethod = r),
                      (this.pageSpyRequestUrl = i),
                      o.addEventListener(
                        "readystatechange",
                        l(
                          E().mark(function e() {
                            var t, n, r;
                            return E().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    (t = c.getRequest(a))
                                      ? ((t.readyState = o.readyState),
                                        (e.t0 = o.readyState),
                                        (e.next =
                                          e.t0 === o.UNSENT || e.t0 === o.OPENED
                                            ? 6
                                            : e.t0 === o.HEADERS_RECEIVED
                                            ? 10
                                            : e.t0 === o.LOADING
                                            ? 16
                                            : e.t0 === o.DONE
                                            ? 19
                                            : 28))
                                      : (e.next = 34);
                                    break;
                                  case 6:
                                    return (
                                      (t.status = o.status),
                                      (t.statusText = "Pending"),
                                      t.startTime || (t.startTime = Date.now()),
                                      e.abrupt("break", 31)
                                    );
                                  case 10:
                                    return (
                                      (t.status = o.status),
                                      (t.statusText = "Loading"),
                                      (n = o.getAllResponseHeaders() || ""),
                                      (n = n.trim().split(/[\r\n]+/)),
                                      (t.responseHeader = n.reduce(function (
                                        e,
                                        t
                                      ) {
                                        var t = t.split(": "),
                                          t = J((t = t)) || X(t) || $(t) || K(),
                                          n = t[0],
                                          t = t.slice(1);
                                        return e.push([n, t.join(": ")]), e;
                                      },
                                      [])),
                                      e.abrupt("break", 31)
                                    );
                                  case 16:
                                    return (
                                      (t.status = o.status),
                                      (t.statusText = "Loading"),
                                      e.abrupt("break", 31)
                                    );
                                  case 19:
                                    return (
                                      (t.status = o.status),
                                      (t.statusText = "Done"),
                                      (t.endTime = Date.now()),
                                      (t.costTime =
                                        t.endTime - (t.startTime || t.endTime)),
                                      (e.next = 25),
                                      c.formatResponse(o)
                                    );
                                  case 25:
                                    return (
                                      qh((r = e.sent)).forEach(function (e) {
                                        t[e] = r[e];
                                      }),
                                      e.abrupt("break", 31)
                                    );
                                  case 28:
                                    return (
                                      (t.status = o.status),
                                      (t.statusText = "Unknown"),
                                      e.abrupt("break", 31)
                                    );
                                  case 31:
                                    c.sendRequestItem(o.pageSpyRequestId, t),
                                      (e.next = 35);
                                    break;
                                  case 34:
                                    M.warn(
                                      "The request object is not found on XMLHttpRequest's readystatechange event"
                                    );
                                  case 35:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )
                      ),
                      s.apply(o, t)
                    );
                  }),
                  (window.XMLHttpRequest.prototype.setRequestHeader = function (
                    e,
                    t
                  ) {
                    var n = c.getRequest(this.pageSpyRequestId);
                    return (
                      n
                        ? (n.requestHeader || (n.requestHeader = []),
                          n.requestHeader.push([e, t]))
                        : M.warn(
                            "The request object is not found on XMLHttpRequest's setRequestHeader event"
                          ),
                      r.apply(this, [e, t])
                    );
                  }),
                  (window.XMLHttpRequest.prototype.send = function (e) {
                    var t = this,
                      n = t.pageSpyRequestId,
                      r = t.pageSpyRequestMethod,
                      r = void 0 === r ? "GET" : r,
                      o = t.pageSpyRequestUrl,
                      o = void 0 === o ? "" : o,
                      i = c.getRequest(n);
                    return (
                      i
                        ? ((n = ub(o)),
                          (i.url = n.url),
                          (i.name = n.name),
                          (i.getData = n.query),
                          (i.method = r.toUpperCase()),
                          (i.requestType = "xhr"),
                          (i.responseType = t.responseType),
                          (i.withCredentials = t.withCredentials),
                          "GET" !== i.method &&
                            ((i.requestHeader = fb(i.requestHeader, e)),
                            db(e).then(function (e) {
                              (i.requestPayload = e),
                                c.sendRequestItem(t.pageSpyRequestId, i);
                            })))
                        : M.warn(
                            "The request object is not found on XMLHttpRequest's send event"
                          ),
                      a.apply(t, [e])
                    );
                  }));
              },
            },
            {
              key: "formatResponse",
              value:
                ((t = l(
                  E().mark(function e(t) {
                    var n, r, o;
                    return E().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = { response: "", responseReason: null }),
                                hb(t.status))
                              ) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return", n);
                            case 3:
                              (e.t0 = t.responseType),
                                (e.next =
                                  "" === e.t0 || "text" === e.t0
                                    ? 6
                                    : "json" === e.t0
                                    ? 8
                                    : "blob" === e.t0 || "arraybuffer" === e.t0
                                    ? 10
                                    : (e.t0, 32));
                              break;
                            case 6:
                              if (Hh(t.response))
                                try {
                                  n.response = JSON.parse(t.response);
                                } catch (e) {
                                  n.response = t.response;
                                }
                              else
                                void 0 !== t.response &&
                                  (n.response = Fh(t.response));
                              return e.abrupt("break", 34);
                            case 8:
                              return (
                                void 0 !== t.response &&
                                  (n.response = t.response),
                                e.abrupt("break", 34)
                              );
                            case 10:
                              if (t.response)
                                if (
                                  Vh(
                                    (r =
                                      (r = t.response) instanceof ArrayBuffer &&
                                      (o = t.getResponseHeader("content-type"))
                                        ? new Blob([r], { type: o })
                                        : r)
                                  )
                                ) {
                                  if (r.size <= 2097152)
                                    return (e.prev = 15), (e.next = 18), k0(r);
                                  e.next = 29;
                                } else e.next = 31;
                              else e.next = 31;
                              break;
                            case 18:
                              (n.response = e.sent), (e.next = 27);
                              break;
                            case 21:
                              return (
                                (e.prev = 21),
                                (e.t1 = e.catch(15)),
                                (e.next = 25),
                                r.text()
                              );
                            case 25:
                              (n.response = e.sent), M.error(e.t1.message);
                            case 27:
                              e.next = 31;
                              break;
                            case 29:
                              (n.response = "[object Blob]"),
                                (n.responseReason = ab);
                            case 31:
                              return e.abrupt("break", 34);
                            case 32:
                              return (
                                void 0 !== t.response &&
                                  (n.response = Object.prototype.toString.call(
                                    t.response
                                  )),
                                e.abrupt("break", 34)
                              );
                            case 34:
                              return e.abrupt("return", n);
                            case 35:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[15, 21]]
                    );
                  })
                )),
                function (e) {
                  return t.apply(this, arguments);
                }),
            },
          ]),
          r
        );
      })(),
      vb = y,
      Kt = i,
      mb = Zo,
      bb = jr,
      Ab = Kt(Fr.f),
      wb = Kt([].push),
      k = x,
      kb = { entries: gb(!0), values: gb(!1) }.entries,
      Ye =
        (k(
          { target: "Object", stat: !0 },
          {
            entries: function (e) {
              return kb(e);
            },
          }
        ),
        x),
      u = I,
      _a = e,
      xb = ce,
      Eb = d,
      Sb = Xy,
      Pb = w0,
      v = ye,
      Tb = u && u.prototype,
      Ob =
        (Ye(
          {
            target: "Promise",
            proto: !0,
            real: !0,
            forced:
              !!u &&
              _a(function () {
                Tb.finally.call({ then: function () {} }, function () {});
              }),
          },
          {
            finally: function (t) {
              var n = Sb(this, xb("Promise")),
                e = Eb(t);
              return this.then(
                e
                  ? function (e) {
                      return Pb(n, t()).then(function () {
                        return e;
                      });
                    }
                  : t,
                e
                  ? function (e) {
                      return Pb(n, t()).then(function () {
                        throw e;
                      });
                    }
                  : t
              );
            },
          }
        ),
        Eb(u) &&
          ((Qr = xb("Promise").prototype.finally), Tb.finally !== Qr) &&
          v(Tb, "finally", Qr, { unsafe: !0 }),
        (function () {
          F(n, I0);
          var t = G(n);
          function n() {
            var e;
            return (
              o(this, n),
              c(z((e = t.call(this))), "fetch", null),
              e.initProxyHandler(),
              e
            );
          }
          return (
            s(n, [
              {
                key: "initProxyHandler",
                value: function () {
                  var c = this,
                    u = window.fetch;
                  u &&
                    ((this.fetch = u),
                    (window.fetch = function (e) {
                      var t,
                        n,
                        r,
                        o =
                          1 < arguments.length && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        i = u(e, o),
                        a = _h(),
                        s = (c.createRequest(a), c.getRequest(a));
                      return (
                        s
                          ? ((t = "GET"),
                            (r = null),
                            (r =
                              Hh(e) || e instanceof URL
                                ? ((t = o.method || "GET"),
                                  (n = e),
                                  o.headers || null)
                                : ((t = e.method), (n = e.url), e.headers)),
                            (e = ub(n)),
                            (s.url = e.url),
                            (s.name = e.name),
                            (s.getData = e.query),
                            (s.method = t.toUpperCase()),
                            (s.requestType = "fetch"),
                            (s.status = 0),
                            (s.statusText = "Pending"),
                            (s.startTime = Date.now()),
                            (s.readyState = XMLHttpRequest.UNSENT),
                            o.credentials &&
                              "omit" !== o.credentials &&
                              (s.withCredentials = !0),
                            r instanceof Headers
                              ? (s.requestHeader = V(r.entries()))
                              : Wh(r)
                              ? (s.requestHeader = Object.entries(r))
                              : (s.requestHeader = r),
                            "GET" !== s.method &&
                              ((s.requestHeader = fb(s.requestHeader, o.body)),
                              db(o.body).then(function (e) {
                                (s.requestPayload = e), c.sendRequestItem(a, s);
                              })),
                            c.sendRequestItem(a, s),
                            i
                              .then(function (e) {
                                if (
                                  ((s.endTime = Date.now()),
                                  (s.costTime =
                                    s.endTime - (s.startTime || s.endTime)),
                                  (s.status = e.status || 200),
                                  (s.statusText = e.statusText || "Done"),
                                  (s.responseHeader = V(e.headers.entries())),
                                  (s.readyState =
                                    XMLHttpRequest.HEADERS_RECEIVED),
                                  c.sendRequestItem(a, s),
                                  !hb(e.status))
                                )
                                  return "";
                                var t = e.headers.get("content-type");
                                if (t) {
                                  if (t.includes("application/json"))
                                    return (
                                      (s.responseType = "json"),
                                      e.clone().text()
                                    );
                                  if (
                                    t.includes("text/html") ||
                                    t.includes("text/plain")
                                  )
                                    return (
                                      (s.responseType = "text"),
                                      e.clone().text()
                                    );
                                }
                                return (
                                  (s.responseType = "blob"), e.clone().blob()
                                );
                              })
                              .then(
                                (function () {
                                  var t = l(
                                    E().mark(function e(t) {
                                      var n;
                                      return E().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                (e.t0 = s.responseType),
                                                  (e.next =
                                                    "text" === e.t0 ||
                                                    "json" === e.t0
                                                      ? 3
                                                      : "blob" === e.t0
                                                      ? 5
                                                      : 24);
                                                break;
                                              case 3:
                                                try {
                                                  s.response = JSON.parse(t);
                                                } catch (e) {
                                                  (s.response = t),
                                                    (s.responseType = "text");
                                                }
                                                return e.abrupt("break", 25);
                                              case 5:
                                                if ((n = t).size <= 2097152)
                                                  return (
                                                    (e.prev = 7),
                                                    (e.next = 10),
                                                    k0(n)
                                                  );
                                                e.next = 21;
                                                break;
                                              case 10:
                                                (s.response = e.sent),
                                                  (e.next = 19);
                                                break;
                                              case 13:
                                                return (
                                                  (e.prev = 13),
                                                  (e.t1 = e.catch(7)),
                                                  (e.next = 17),
                                                  n.text()
                                                );
                                              case 17:
                                                (s.response = e.sent),
                                                  M.error(e.t1.message);
                                              case 19:
                                                e.next = 23;
                                                break;
                                              case 21:
                                                (s.response = "[object Blob]"),
                                                  (s.responseReason = ab);
                                              case 23:
                                              case 24:
                                                return e.abrupt("break", 25);
                                              case 25:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e,
                                        null,
                                        [[7, 13]]
                                      );
                                    })
                                  );
                                  return function (e) {
                                    return t.apply(this, arguments);
                                  };
                                })()
                              )
                              .finally(function () {
                                (s.readyState = XMLHttpRequest.DONE),
                                  c.sendRequestItem(a, s);
                              }))
                          : M.warn(
                              "The request object is not found on window.fetch event"
                            ),
                        i
                      );
                    }));
                },
              },
            ]),
            n
          );
        })()),
      Rb = (function () {
        F(n, I0);
        var t = G(n);
        function n() {
          var e;
          return (
            o(this, n),
            c(z((e = t.call(this))), "sendBeacon", null),
            e.initProxyHandler(),
            e
          );
        }
        return (
          s(n, [
            {
              key: "initProxyHandler",
              value: function () {
                var i,
                  a = window.navigator.sendBeacon;
                a &&
                  (((i = this).sendBeacon = a),
                  (window.navigator.sendBeacon = function (e, t) {
                    var n = a.call(window.navigator, e, t),
                      r = _h(),
                      o = (i.createRequest(r), i.getRequest(r));
                    return (
                      o
                        ? ((e = ub(e)),
                          (o.url = e.url),
                          (o.name = e.name),
                          (o.getData = e.query),
                          (o.method = "POST"),
                          (o.status = 0),
                          (o.statusText = "Pending"),
                          (o.requestType = "ping"),
                          (o.requestHeader = fb(o.requestHeader, t)),
                          (o.startTime = Date.now()),
                          db(t).then(function (e) {
                            (o.requestPayload = e), i.sendRequestItem(r, o);
                          }),
                          (o.response = ""),
                          n
                            ? ((o.status = 200),
                              (o.statusText = "Sent"),
                              (o.endTime = Date.now()),
                              (o.costTime =
                                o.endTime - (o.startTime || o.endTime)))
                            : ((o.status = 500), (o.statusText = "Unknown")),
                          (o.readyState = XMLHttpRequest.DONE),
                          i.sendRequestItem(r, o))
                        : M.warn(
                            "The request object is not on navigator.sendBeacon event"
                          ),
                      n
                    );
                  }));
              },
            },
          ]),
          n
        );
      })(),
      jb = (function () {
        function e() {
          o(this, e),
            c(this, "name", "NetworkPlugin"),
            c(this, "xhrProxy", null),
            c(this, "fetchProxy", null),
            c(this, "beaconProxy", null);
        }
        return (
          s(e, [
            {
              key: "onCreated",
              value: function () {
                e.hasInitd ||
                  ((e.hasInitd = !0),
                  (this.xhrProxy = new yb()),
                  (this.fetchProxy = new Ob()),
                  (this.beaconProxy = new Rb()));
              },
            },
          ]),
          e
        );
      })();
    c(jb, "hasInitd", !1);
    (a = r), (dc = gc);
    x({ global: !0 }, { Reflect: {} }), dc(a.Reflect, "Reflect", !0);
    function Ib(e, t, n) {
      return n > e.length ? -1 : "" === t ? n : Hb(e, t, n);
    }
    x(
      { target: "Reflect", stat: !0 },
      {
        has: function (e, t) {
          return t in e;
        },
      }
    );
    var g = x,
      Cb = m,
      p = i,
      Lb = oe,
      Bb = d,
      Mb = re,
      Db = Yi,
      Ub = S,
      Nb = fe,
      _b = Fs,
      qb = x0,
      Fb = t("replace"),
      Qb = TypeError,
      Hb = p("".indexOf),
      zb = (p("".replace), p("".slice)),
      Gb = Math.max,
      Wb =
        (g(
          { target: "String", proto: !0 },
          {
            replaceAll: function (e, t) {
              var n,
                r,
                o,
                i,
                a,
                s,
                c,
                u = Lb(this),
                l = 0,
                f = 0,
                d = "";
              if (!Mb(e)) {
                if (Db(e) && ((n = Ub(Lb(_b(e)))), !~Hb(n, "g")))
                  throw Qb("`.replaceAll` does not allow non-global regexes");
                if ((n = Nb(e, Fb))) return Cb(n, e, u, t);
              }
              for (
                r = Ub(u),
                  o = Ub(e),
                  (i = Bb(t)) || (t = Ub(t)),
                  a = o.length,
                  s = Gb(1, a),
                  l = Ib(r, o, 0);
                -1 !== l;

              )
                (c = i ? Ub(t(o, l, r)) : qb(o, r, l, [], void 0, t)),
                  (d += zb(r, f, l) + c),
                  (f = l + a),
                  (l = Ib(r, o, l + s));
              return f < r.length && (d += zb(r, f)), d;
            },
          }
        ),
        {
          WeChat: /MicroMessenger\/([\d.]+)/,
          QQ: /(?:QQBrowser|MQQBrowser|QQ)\/([\d.]+)/,
          UC: /(?:UCBrowser|UCBS)\/([\d.]+)/,
          Baidu: /(?:BIDUBrowser|baiduboxapp)[/]?([\d.]*)/,
          Edge: /Edg(?:e|A|iOS)?\/([\d.]+)/,
          Chrome: /(?:Chrome|CriOS)\/([\d.]+)/,
          Firefox: /(?:Firefox|FxiOS)\/([\d.]+)/,
          Safari: /Version\/([\d.]+).*Safari/,
        }),
      Vb = {
        Windows: /Windows NT ([\d_.]+)/,
        iPhone: /iPhone OS ([\d_.]+)/,
        iPad: /iPad.*OS ([\d_.]+)/,
        Mac: /Mac OS X ([\d_.]+)/,
        Android: /Android ([\d_.]+)/,
        Linux: /Linux/,
      };
    function Jb(e) {
      var t,
        n,
        r =
          0 < arguments.length && void 0 !== e ? e : window.navigator.userAgent,
        o = "Unknown",
        i = "Unknown",
        a = "Unknown",
        s = "Unknown";
      for (t in Vb)
        if (Object.prototype.hasOwnProperty.call(Vb, t)) {
          var c = r.match(Vb[t]);
          if (c) {
            (o = t), (i = null == (c = c[1]) ? void 0 : c.replaceAll("_", "."));
            break;
          }
        }
      for (n in Wb)
        if (Object.prototype.hasOwnProperty.call(Wb, n)) {
          var u = r.match(Wb[n]);
          if (u) {
            (a = n), (s = u[1]);
            break;
          }
        }
      return { osName: o, osVersion: i, browserName: a, browserVersion: s };
    }
    var Xb,
      $b = {},
      Yb =
        ((Xb = {
          get exports() {
            return $b;
          },
          set exports(e) {
            $b = e;
          },
        }),
        (function (D, d, l, p) {
          function h(e, t) {
            return typeof e === t;
          }
          function U(e) {
            var t,
              n = b.className,
              r = m._config.classPrefix || "";
            A && (n = n.baseVal),
              m._config.enableJSClass &&
                ((t = new RegExp("(^|\\s)" + r + "no-js(\\s|$)")),
                (n = n.replace(t, "$1" + r + "js$2"))),
              m._config.enableClasses &&
                (0 < e.length && (n += " " + r + e.join(" " + r)),
                A ? (b.className.baseVal = n) : (b.className = n));
          }
          function f(e, t) {
            if ("object" == typeof e) for (var n in e) H(e, n) && f(n, e[n]);
            else {
              var r = (e = e.toLowerCase()).split("."),
                o = m[r[0]];
              if (void 0 !== (o = 2 === r.length ? o[r[1]] : o)) return m;
              (t = "function" == typeof t ? t() : t),
                1 === r.length
                  ? (m[r[0]] = t)
                  : (!m[r[0]] ||
                      m[r[0]] instanceof Boolean ||
                      (m[r[0]] = new Boolean(m[r[0]])),
                    (m[r[0]][r[1]] = t)),
                U([(t && !1 !== t ? "" : "no-") + r.join("-")]),
                m._trigger(e, t);
            }
            return m;
          }
          function g(e) {
            return "function" != typeof l.createElement
              ? l.createElement(e)
              : A
              ? l.createElementNS.call(l, "http://www.w3.org/2000/svg", e)
              : l.createElement.apply(l, arguments);
          }
          function y(e, t, n, r) {
            var o,
              i,
              a,
              s,
              c = "modernizr",
              u = g("div");
            (s = l.body) || ((s = g(A ? "svg" : "body")).fake = !0);
            if (parseInt(n, 10))
              for (; n--; )
                ((i = g("div")).id = r ? r[n] : c + (n + 1)), u.appendChild(i);
            return (
              ((o = g("style")).type = "text/css"),
              (o.id = "s" + c),
              (s.fake ? s : u).appendChild(o),
              s.appendChild(u),
              o.styleSheet
                ? (o.styleSheet.cssText = e)
                : o.appendChild(l.createTextNode(e)),
              (u.id = c),
              s.fake &&
                ((s.style.background = ""),
                (s.style.overflow = "hidden"),
                (a = b.style.overflow),
                (b.style.overflow = "hidden"),
                b.appendChild(s)),
              (o = t(u, e)),
              s.fake && s.parentNode
                ? (s.parentNode.removeChild(s),
                  (b.style.overflow = a),
                  b.offsetHeight)
                : u.parentNode.removeChild(u),
              !!o
            );
          }
          function N(e, t, n) {
            var r, o;
            return (
              "getComputedStyle" in d
                ? ((r = getComputedStyle.call(d, e, t)),
                  (o = d.console),
                  null !== r
                    ? n && (r = r.getPropertyValue(n))
                    : o &&
                      o[o.error ? "error" : "log"].call(
                        o,
                        "getComputedStyle returning null, its possible modernizr test results are inaccurate"
                      ))
                : (r = !t && e.currentStyle && e.currentStyle[n]),
              r
            );
          }
          function v(e) {
            return e
              .replace(/([A-Z])/g, function (e, t) {
                return "-" + t.toLowerCase();
              })
              .replace(/^ms-/, "-ms-");
          }
          function _(e) {
            return e
              .replace(/([a-z])-([a-z])/g, function (e, t, n) {
                return t + n.toUpperCase();
              })
              .replace(/^-/, "");
          }
          function q(e, t, n, r) {
            function o() {
              a && (delete T.style, delete T.modElem);
            }
            if (((r = !(void 0 === r) && r), void 0 !== n)) {
              var i = (function (e, t) {
                var n = e.length;
                if ("CSS" in d && "supports" in d.CSS) {
                  for (; n--; ) if (d.CSS.supports(v(e[n]), t)) return !0;
                  return !1;
                }
                if ("CSSSupportsRule" in d) {
                  for (var r = []; n--; ) r.push("(" + v(e[n]) + ":" + t + ")");
                  return y(
                    "@supports (" +
                      (r = r.join(" or ")) +
                      ") { #modernizr { position: absolute; } }",
                    function (e) {
                      return "absolute" === N(e, null, "position");
                    }
                  );
                }
                return p;
              })(e, n);
              if (void 0 !== i) return i;
            }
            for (
              var a, s, c, u, l, f = ["modernizr", "tspan", "samp"];
              !T.style && f.length;

            )
              (a = !0), (T.modElem = g(f.shift())), (T.style = T.modElem.style);
            for (c = e.length, s = 0; s < c; s++)
              if (
                ((u = e[s]),
                (l = T.style[u]),
                ~("" + u).indexOf("-") && (u = _(u)),
                T.style[u] !== p)
              ) {
                if (r || void 0 === n) return o(), "pfx" !== t || u;
                try {
                  T.style[u] = n;
                } catch (e) {}
                if (T.style[u] !== l) return o(), "pfx" !== t || u;
              }
            return o(), !1;
          }
          function r(e, t, n, r, o) {
            var i,
              a,
              s = e.charAt(0).toUpperCase() + e.slice(1),
              c = (e + " " + W.join(s + " ") + s).split(" ");
            if (h(t, "string") || void 0 === t) return q(c, t, r, o);
            var u = (e + " " + w.join(s + " ") + s).split(" "),
              l = t,
              f = n;
            for (a in u)
              if (u[a] in l)
                if (!1 === f) return u[a];
                else {
                  i = l[u[a]];
                  if (h(i, "function")) {
                    var d = i;
                    var p = f || l;
                    return function () {
                      return d.apply(p, arguments);
                    };
                    return;
                  } else return i;
                }
            return !1;
          }
          function F(e, t) {
            e = e.deleteDatabase(t);
            (e.onsuccess = function () {
              f("indexeddb.deletedatabase", !0);
            }),
              (e.onerror = function () {
                f("indexeddb.deletedatabase", !1);
              });
          }
          function Q(e) {
            var t,
              n = le.length,
              r = d.CSSRule;
            if (void 0 === r) return p;
            if (e) {
              if (
                (t =
                  (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() +
                  "_RULE") in r
              )
                return "@" + e;
              for (var o = 0; o < n; o++) {
                var i = le[o];
                if (i.toUpperCase() + "_" + t in r)
                  return "@-" + i.toLowerCase() + "-" + e;
              }
            }
            return !1;
          }
          var H,
            n,
            z,
            o = [],
            e = {
              _version: "4.0.0-alpha",
              _config: {
                classPrefix: "",
                enableClasses: !1,
                enableJSClass: !0,
                usePrefixes: !0,
              },
              _q: [],
              on: function (e, t) {
                var n = this;
                setTimeout(function () {
                  t(n[e]);
                }, 0);
              },
              addTest: function (e, t, n) {
                o.push({ name: e, fn: t, options: n });
              },
              addAsyncTest: function (e) {
                o.push({ name: null, fn: e });
              },
            },
            m = function () {},
            G = ((m.prototype = e), (m = new m()), []),
            b = l.documentElement,
            A = "svg" === b.nodeName.toLowerCase(),
            t =
              ((H =
                void 0 === (n = {}.hasOwnProperty) || void 0 === n.call
                  ? function (e, t) {
                      return t in e && void 0 === e.constructor.prototype[t];
                    }
                  : function (e, t) {
                      return n.call(e, t);
                    }),
              (e._l = {}),
              (e.on = function (e, t) {
                this._l[e] || (this._l[e] = []),
                  this._l[e].push(t),
                  m.hasOwnProperty(e) &&
                    setTimeout(function () {
                      m._trigger(e, m[e]);
                    }, 0);
              }),
              (e._trigger = function (e, t) {
                var n;
                this._l[e] &&
                  ((n = this._l[e]),
                  setTimeout(function () {
                    for (var e = 0; e < n.length; e++) (0, n[e])(t);
                  }, 0),
                  delete this._l[e]);
              }),
              m._q.push(function () {
                e.addTest = f;
              }),
              "Moz O ms Webkit"),
            W = e._config.usePrefixes ? t.split(" ") : [],
            w =
              ((e._cssomPrefixes = W),
              (e.atRule = Q),
              e._config.usePrefixes ? t.toLowerCase().split(" ") : []),
            i =
              ((e._domPrefixes = w),
              (z = !("onblur" in b)),
              function (e, t) {
                var n;
                return (
                  !!e &&
                  (!(n =
                    (e = "on" + e) in
                    (t = t && "string" != typeof t ? t : g(t || "div"))) &&
                    z &&
                    ((t = t.setAttribute ? t : g("div")).setAttribute(e, ""),
                    (n = "function" == typeof t[e]),
                    t[e] !== p && (t[e] = p),
                    t.removeAttribute(e)),
                  n)
                );
              });
          if (((e.hasEvent = i), !A)) {
            var a = l;
            function V(e, t) {
              var n = e.createElement("p"),
                e = e.getElementsByTagName("head")[0] || e.documentElement;
              return (
                (n.innerHTML = "x<style>" + t + "</style>"),
                e.insertBefore(n.lastChild, e.firstChild)
              );
            }
            function k() {
              var e = S.elements;
              return "string" == typeof e ? e.split(" ") : e;
            }
            function x(e) {
              var t = re[e[te]];
              return t || ((t = {}), ne++, (e[te] = ne), (re[ne] = t)), t;
            }
            function J(e, t, n) {
              return (
                (t = t || a),
                s
                  ? t.createElement(e)
                  : !(t = (n = n || x(t)).cache[e]
                      ? n.cache[e].cloneNode()
                      : ee.test(e)
                      ? (n.cache[e] = n.createElem(e)).cloneNode()
                      : n.createElem(e)).canHaveChildren ||
                    Z.test(e) ||
                    t.tagUrn
                  ? t
                  : n.frag.appendChild(t)
              );
            }
            function X(e) {
              var t,
                n,
                r = x((e = e || a));
              return (
                !S.shivCSS ||
                  K ||
                  r.hasCSS ||
                  (r.hasCSS = !!V(
                    e,
                    "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
                  )),
                s ||
                  ((t = e),
                  (n = r).cache ||
                    ((n.cache = {}),
                    (n.createElem = t.createElement),
                    (n.createFrag = t.createDocumentFragment),
                    (n.frag = n.createFrag())),
                  (t.createElement = function (e) {
                    return S.shivMethods ? J(e, t, n) : n.createElem(e);
                  }),
                  (t.createDocumentFragment = Function(
                    "h,f",
                    "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                      k()
                        .join()
                        .replace(/[\w\-:]+/g, function (e) {
                          return (
                            n.createElem(e),
                            n.frag.createElement(e),
                            'c("' + e + '")'
                          );
                        }) +
                      ");return n}"
                  )(S, n.frag))),
                e
              );
            }
            function $(e) {
              for (
                var t,
                  n = e.getElementsByTagName("*"),
                  r = n.length,
                  o = RegExp("^(?:" + k().join("|") + ")$", "i"),
                  i = [];
                r--;

              )
                (t = n[r]),
                  o.test(t.nodeName) &&
                    i.push(
                      t.applyElement(
                        (function (e) {
                          for (
                            var t,
                              n = e.attributes,
                              r = n.length,
                              o = e.ownerDocument.createElement(
                                P + ":" + e.nodeName
                              );
                            r--;

                          )
                            (t = n[r]).specified &&
                              o.setAttribute(t.nodeName, t.nodeValue);
                          return (o.style.cssText = e.style.cssText), o;
                        })(t)
                      )
                    );
              return i;
            }
            function Y(s) {
              function c() {
                clearTimeout(n._removeSheetTimer),
                  u && u.removeNode(!0),
                  (u = null);
              }
              var u,
                l,
                n = x(s),
                e = s.namespaces,
                t = s.parentWindow;
              return (
                !ie ||
                  s.printShived ||
                  (void 0 === e[P] && e.add(P),
                  t.attachEvent("onbeforeprint", function () {
                    c();
                    for (
                      var e,
                        t,
                        n,
                        r = s.styleSheets,
                        o = [],
                        i = r.length,
                        a = Array(i);
                      i--;

                    )
                      a[i] = r[i];
                    for (; (n = a.pop()); )
                      if (!n.disabled && oe.test(n.media)) {
                        try {
                          t = (e = n.imports).length;
                        } catch (e) {
                          t = 0;
                        }
                        for (i = 0; i < t; i++) a.push(e[i]);
                        try {
                          o.push(n.cssText);
                        } catch (e) {}
                      }
                    (o = (function (e) {
                      for (
                        var t,
                          n = e.split("{"),
                          r = n.length,
                          o = RegExp(
                            "(^|[\\s,>+~])(" +
                              k().join("|") +
                              ")(?=[[\\s,>+~#.:]|$)",
                            "gi"
                          ),
                          i = "$1" + P + "\\:$2";
                        r--;

                      )
                        ((t = n[r] = n[r].split("}"))[t.length - 1] = t[
                          t.length - 1
                        ].replace(o, i)),
                          (n[r] = t.join("}"));
                      return n.join("{");
                    })(o.reverse().join(""))),
                      (l = $(s)),
                      (u = V(s, o));
                  }),
                  t.attachEvent("onafterprint", function () {
                    for (var e = l, t = e.length; t--; ) e[t].removeNode();
                    clearTimeout(n._removeSheetTimer),
                      (n._removeSheetTimer = setTimeout(c, 500));
                  }),
                  (s.printShived = !0)),
                s
              );
            }
            var K,
              s,
              c = (t = void 0 !== d ? d : this).html5 || {},
              Z =
                /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
              ee =
                /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
              te = "_html5shiv",
              ne = 0,
              re = {};
            try {
              var u = a.createElement("a");
              (u.innerHTML = "<xyz></xyz>"),
                (K = "hidden" in u),
                (s =
                  1 == u.childNodes.length ||
                  (a.createElement("a"),
                  void 0 === (E = a.createDocumentFragment()).cloneNode) ||
                  void 0 === E.createDocumentFragment ||
                  void 0 === E.createElement);
            } catch (u) {
              s = K = !0;
            }
            var E,
              S = {
                elements:
                  c.elements ||
                  "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
                version: "3.7.3",
                shivCSS: !1 !== c.shivCSS,
                supportsUnknownElements: s,
                shivMethods: !1 !== c.shivMethods,
                type: "default",
                shivDocument: X,
                createElement: J,
                createDocumentFragment: function (e, t) {
                  if (((e = e || a), s)) return e.createDocumentFragment();
                  for (
                    var n = (t = t || x(e)).frag.cloneNode(),
                      r = 0,
                      o = k(),
                      i = o.length;
                    r < i;
                    r++
                  )
                    n.createElement(o[r]);
                  return n;
                },
                addElements: function (e, t) {
                  var n = S.elements;
                  "string" != typeof n && (n = n.join(" ")),
                    "string" != typeof e && (e = e.join(" ")),
                    (S.elements = n + " " + e),
                    X(t);
                },
              },
              oe = ((t.html5 = S), X(a), /^$|\b(?:all|print)\b/),
              P = "html5shiv",
              ie = !(
                s ||
                ((E = a.documentElement), void 0 === a.namespaces) ||
                void 0 === a.parentWindow ||
                void 0 === E.applyElement ||
                void 0 === E.removeNode ||
                void 0 === t.attachEvent
              );
            (S.type += " print"),
              (S.shivPrint = Y)(a),
              Xb.exports && (Xb.exports = S);
          }
          var ae,
            se = function () {},
            ce = function () {},
            c =
              (d.console &&
                ((se = function () {
                  var e = console.error ? "error" : "log";
                  d.console[e].apply(
                    d.console,
                    Array.prototype.slice.call(arguments)
                  );
                }),
                (ce = function () {
                  var e = console.warn ? "warn" : "log";
                  d.console[e].apply(
                    d.console,
                    Array.prototype.slice.call(arguments)
                  );
                })),
              (e.load = function () {
                "yepnope" in d
                  ? (ce(
                      "yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so we’ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information."
                    ),
                    d.yepnope.apply(d, [].slice.call(arguments, 0)))
                  : se(
                      "yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information."
                    );
              }),
              (ae = d.matchMedia || d.msMatchMedia)
                ? function (e) {
                    e = ae(e);
                    return (e && e.matches) || !1;
                  }
                : function (e) {
                    var t = !1;
                    return (
                      y(
                        "@media " +
                          e +
                          " { #modernizr { position: absolute; } }",
                        function (e) {
                          t = "absolute" === N(e, null, "position");
                        }
                      ),
                      t
                    );
                  }),
            ue = ((e.mq = c), { elem: g("modernizr") }),
            T =
              (m._q.push(function () {
                delete ue.elem;
              }),
              { style: ue.elem.style }),
            O =
              (m._q.unshift(function () {
                delete T.style;
              }),
              (e.testAllProps = r),
              (e.prefixed = function (e, t, n) {
                return 0 === e.indexOf("@")
                  ? Q(e)
                  : (-1 !== e.indexOf("-") && (e = _(e)),
                    t ? r(e, t, n) : r(e, "pfx"));
              })),
            le = e._config.usePrefixes
              ? " -webkit- -moz- -o- -ms- ".split(" ")
              : ["", ""],
            R =
              ((e._prefixes = le),
              (e.prefixedCSS = function (e) {
                e = O(e);
                return e && v(e);
              }),
              (e.testAllProps = function (e, t, n) {
                return r(e, p, p, t, n);
              }),
              (e.testProp = function (e, t, n) {
                return q([e], p, t, n);
              }),
              (e.testStyles = y),
              m.addAsyncTest(function () {
                var e,
                  t = ["read", "readText", "write", "writeText"];
                if (navigator.clipboard) {
                  f("clipboard", !0);
                  for (var n = 0; n < t.length; n++)
                    (e = !!navigator.clipboard[t[n]]),
                      f("clipboard." + t[n].toLowerCase(), e);
                } else f("clipboard", !1);
              }),
              m.addTest(
                "contextmenu",
                "contextMenu" in b && "HTMLMenuItemElement" in d
              ),
              m.addTest(
                "cors",
                "XMLHttpRequest" in d &&
                  "withCredentials" in new XMLHttpRequest()
              ),
              m.addTest(
                "es6array",
                !!(
                  Array.prototype &&
                  Array.prototype.copyWithin &&
                  Array.prototype.fill &&
                  Array.prototype.find &&
                  Array.prototype.findIndex &&
                  Array.prototype.keys &&
                  Array.prototype.entries &&
                  Array.prototype.values &&
                  Array.from &&
                  Array.of
                )
              ),
              m.addTest("arrow", function () {
                try {
                  (0, eval)("()=>{}");
                } catch (e) {
                  return !1;
                }
                return !0;
              }),
              m.addTest("es6class", function () {
                try {
                  (0, eval)("class A{}");
                } catch (e) {
                  return !1;
                }
                return !0;
              }),
              m.addTest(
                "es6collections",
                !!(d.Map && d.Set && d.WeakMap && d.WeakSet)
              ),
              m.addTest("generators", function () {
                try {
                  new Function("function* test() {}")();
                } catch (e) {
                  return !1;
                }
                return !0;
              }),
              m.addTest(
                "es6math",
                !!(
                  Math &&
                  Math.clz32 &&
                  Math.cbrt &&
                  Math.imul &&
                  Math.sign &&
                  Math.log10 &&
                  Math.log2 &&
                  Math.log1p &&
                  Math.expm1 &&
                  Math.cosh &&
                  Math.sinh &&
                  Math.tanh &&
                  Math.acosh &&
                  Math.asinh &&
                  Math.atanh &&
                  Math.hypot &&
                  Math.trunc &&
                  Math.fround
                )
              ),
              m.addTest(
                "es6number",
                !!(
                  Number.isFinite &&
                  Number.isInteger &&
                  Number.isSafeInteger &&
                  Number.isNaN &&
                  Number.parseInt &&
                  Number.parseFloat &&
                  Number.isInteger(Number.MAX_SAFE_INTEGER) &&
                  Number.isInteger(Number.MIN_SAFE_INTEGER) &&
                  Number.isFinite(Number.EPSILON)
                )
              ),
              m.addTest(
                "es6object",
                !!(Object.assign && Object.is && Object.setPrototypeOf)
              ),
              m.addTest("promises", function () {
                return (
                  "Promise" in d &&
                  "resolve" in d.Promise &&
                  "reject" in d.Promise &&
                  "all" in d.Promise &&
                  "race" in d.Promise &&
                  (new d.Promise(function (e) {
                    t = e;
                  }),
                  "function" == typeof t)
                );
                var t;
              }),
              m.addTest("restparameters", function () {
                try {
                  (0, eval)("function f(...rest) {}");
                } catch (e) {
                  return !1;
                }
                return !0;
              }),
              m.addTest("spreadarray", function () {
                try {
                  (0, eval)("(function f(){})(...[1])");
                } catch (e) {
                  return !1;
                }
                return !0;
              }),
              m.addTest("stringtemplate", function () {
                try {
                  return (
                    "-1-" ===
                    (0, eval)("(function(){var a=1; return `-${a}-`;})()")
                  );
                } catch (e) {
                  return !1;
                }
              }),
              m.addTest(
                "es6string",
                !!(
                  String.fromCodePoint &&
                  String.raw &&
                  String.prototype.codePointAt &&
                  String.prototype.repeat &&
                  String.prototype.startsWith &&
                  String.prototype.endsWith &&
                  String.prototype.includes
                )
              ),
              m.addTest(
                "es6symbol",
                !!(
                  "function" == typeof Symbol &&
                  Symbol.for &&
                  Symbol.hasInstance &&
                  Symbol.isConcatSpreadable &&
                  Symbol.iterator &&
                  Symbol.keyFor &&
                  Symbol.match &&
                  Symbol.prototype &&
                  Symbol.replace &&
                  Symbol.search &&
                  Symbol.species &&
                  Symbol.split &&
                  Symbol.toPrimitive &&
                  Symbol.toStringTag &&
                  Symbol.unscopables
                )
              ),
              m.addTest(
                "es7array",
                !(!Array.prototype || !Array.prototype.includes)
              ),
              m.addTest("restdestructuringarray", function () {
                try {
                  (0, eval)("var [...rest]=[1]");
                } catch (e) {
                  return !1;
                }
                return !0;
              }),
              m.addTest("restdestructuringobject", function () {
                try {
                  (0, eval)("var {...rest}={a:1}");
                } catch (e) {
                  return !1;
                }
                return !0;
              }),
              m.addTest("spreadobject", function () {
                try {
                  (0, eval)("var a={...{b:1}}");
                } catch (e) {
                  return !1;
                }
                return !0;
              }),
              m.addTest("es8object", !(!Object.entries || !Object.values)),
              m.addTest(
                "customevent",
                "CustomEvent" in d && "function" == typeof d.CustomEvent
              ),
              m.addTest("eventlistener", "addEventListener" in d),
              m.addTest("forcetouch", function () {
                return (
                  !!i(O("mouseforcewillbegin", d, !1), d) &&
                  MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN &&
                  MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN
                );
              }),
              m.addTest("hashchange", function () {
                return (
                  !1 !== i("hashchange", d) &&
                  (l.documentMode === p || 7 < l.documentMode)
                );
              }),
              m.addTest("oninput", function () {
                var e = g("input");
                if (
                  (e.setAttribute("oninput", "return"),
                  (e.style.cssText = "position:fixed;top:0;"),
                  i("oninput", b) || "function" == typeof e.oninput)
                )
                  return !0;
                try {
                  var t = l.createEvent("KeyboardEvent"),
                    n = !1,
                    r = function (e) {
                      (n = !0), e.preventDefault(), e.stopPropagation();
                    };
                  t.initKeyEvent(
                    "keypress",
                    !0,
                    !0,
                    d,
                    !1,
                    !1,
                    !1,
                    !1,
                    0,
                    "e".charCodeAt(0)
                  ),
                    b.appendChild(e),
                    e.addEventListener("input", r, !1),
                    e.focus(),
                    e.dispatchEvent(t),
                    e.removeEventListener("input", r, !1),
                    b.removeChild(e);
                } catch (e) {
                  n = !1;
                }
                return n;
              }),
              [""].concat(w)),
            fe =
              ((e._domPrefixesAll = R),
              m.addTest("pointerevents", function () {
                for (var e = 0, t = R.length; e < t; e++)
                  if (i(R[e] + "pointerdown")) return !0;
                return !1;
              }),
              m.addTest("history", function () {
                var e = navigator.userAgent;
                return (
                  !!e &&
                  ((-1 === e.indexOf("Android 2.") &&
                    -1 === e.indexOf("Android 4.0")) ||
                    -1 === e.indexOf("Mobile Safari") ||
                    -1 !== e.indexOf("Chrome") ||
                    -1 !== e.indexOf("Windows Phone") ||
                    "file:" === location.protocol) &&
                  d.history &&
                  "pushState" in d.history
                );
              }),
              m.addTest("sandbox", "sandbox" in g("iframe")),
              m.addTest("seamless", "seamless" in g("iframe")),
              m.addTest("srcdoc", "srcdoc" in g("iframe")),
              m.addTest("canvas", function () {
                var e = g("canvas");
                return !(!e.getContext || !e.getContext("2d"));
              }),
              m.addAsyncTest(function () {
                if (!m.canvas) return !1;
                var e = new Image(),
                  t = g("canvas"),
                  n = t.getContext("2d");
                (e.onload = function () {
                  f("apng", function () {
                    return (
                      void 0 !== t.getContext &&
                      (n.drawImage(e, 0, 0),
                      0 === n.getImageData(0, 0, 1, 1).data[3])
                    );
                  });
                }),
                  (e.src =
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg==");
              }),
              m.addAsyncTest(function () {
                var e = new Image();
                (e.onload = e.onerror =
                  function () {
                    f("avif", 1 === e.width);
                  }),
                  (e.src =
                    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAAEcbWV0YQAAAAAAAABIaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGNhdmlmIC0gaHR0cHM6Ly9naXRodWIuY29tL2xpbmstdS9jYXZpZgAAAAAeaWxvYwAAAAAEQAABAAEAAAAAAUQAAQAAABcAAAAqaWluZgEAAAAAAAABAAAAGmluZmUCAAAAAAEAAGF2MDFJbWFnZQAAAAAOcGl0bQAAAAAAAQAAAHJpcHJwAAAAUmlwY28AAAAQcGFzcAAAAAEAAAABAAAAFGlzcGUAAAAAAAAAAQAAAAEAAAAQcGl4aQAAAAADCAgIAAAAFmF2MUOBAAwACggYAAYICGgIIAAAABhpcG1hAAAAAAAAAAEAAQUBAoMDhAAAAB9tZGF0CggYAAYICGgIIBoFHiAAAEQiBACwDoA=");
              }),
              m.addTest("imgcrossorigin", "crossOrigin" in g("img")),
              m.addAsyncTest(function () {
                var e = new Image();
                (e.onerror = function () {
                  f("exiforientation", !1);
                }),
                  (e.onload = function () {
                    f("exiforientation", 2 !== e.width);
                  }),
                  (e.src =
                    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q==");
              }),
              m.addAsyncTest(function () {
                var e = new Image();
                (e.onload = e.onerror =
                  function () {
                    f("jpeg2000", 1 === e.width);
                  }),
                  (e.src =
                    "data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k=");
              }),
              m.addTest("lazyloading", "loading" in HTMLImageElement.prototype),
              m.addAsyncTest(function () {
                function n(n, e, r) {
                  function t(e) {
                    var t = !(!e || "load" !== e.type) && 1 === o.width;
                    f(n, "webp" === n && t ? new Boolean(t) : t), r && r(e);
                  }
                  var o = new Image();
                  (o.onerror = t), (o.onload = t), (o.src = e);
                }
                var r = [
                    {
                      uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
                      name: "webp",
                    },
                    {
                      uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
                      name: "webp.alpha",
                    },
                    {
                      uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
                      name: "webp.animation",
                    },
                    {
                      uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
                      name: "webp.lossless",
                    },
                  ],
                  e = r.shift();
                n(e.name, e.uri, function (e) {
                  if (e && "load" === e.type)
                    for (var t = 0; t < r.length; t++) n(r[t].name, r[t].uri);
                });
              }),
              m.addTest("messagechannel", "MessageChannel" in d),
              m.addTest("beacon", "sendBeacon" in navigator),
              m.addTest("fetch", "fetch" in d),
              m.addTest("performance", !!O("performance", d)),
              !0);
          try {
            d.postMessage(
              {
                toString: function () {
                  fe = !1;
                },
              },
              "*"
            );
          } catch (e) {}
          m.addTest("postmessage", new Boolean("postMessage" in d)),
            m.addTest("postmessage.structuredclones", fe),
            m.addTest("proxy", "Proxy" in d),
            m.addTest(
              "queryselector",
              "querySelector" in l && "querySelectorAll" in l
            ),
            m.addTest("prefetch", function () {
              var e;
              return (
                11 === l.documentMode ||
                (!(!(e = g("link").relList) || !e.supports) &&
                  e.supports("prefetch"))
              );
            }),
            m.addTest(
              "requestanimationframe",
              !!O("requestAnimationFrame", d),
              {
                aliases: ["raf"],
              }
            ),
            m.addTest("scriptasync", "async" in g("script")),
            m.addTest("scriptdefer", "defer" in g("script")),
            m.addTest("serviceworker", "serviceWorker" in navigator),
            m.addTest("cookies", function () {
              try {
                l.cookie = "cookietest=1";
                var e = -1 !== l.cookie.indexOf("cookietest=");
                return (
                  (l.cookie =
                    "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT"),
                  e
                );
              } catch (e) {
                return !1;
              }
            }),
            m.addAsyncTest(function () {
              var t;
              try {
                t = O("indexedDB", d);
              } catch (t) {}
              if (t) {
                var n,
                  r = "modernizr-" + Math.random();
                try {
                  n = t.open(r);
                } catch (t) {
                  return void f("indexeddb", !1);
                }
                (n.onerror = function (e) {
                  !n.error ||
                  ("InvalidStateError" !== n.error.name &&
                    "UnknownError" !== n.error.name)
                    ? (f("indexeddb", !0), F(t, r))
                    : (f("indexeddb", !1), e.preventDefault());
                }),
                  (n.onsuccess = function () {
                    f("indexeddb", !0), F(t, r);
                  });
              } else f("indexeddb", !1);
            }),
            m.addTest("localstorage", function () {
              var e = "modernizr";
              try {
                return (
                  localStorage.setItem(e, e), localStorage.removeItem(e), !0
                );
              } catch (e) {
                return !1;
              }
            }),
            m.addTest("sessionstorage", function () {
              var e = "modernizr";
              try {
                return (
                  sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
                );
              } catch (e) {
                return !1;
              }
            }),
            m.addTest("websqldatabase", "openDatabase" in d),
            m.addTest("webanimations", "animate" in g("div")),
            m.addTest("webgl", function () {
              return "WebGLRenderingContext" in d;
            }),
            m.addTest("peerconnection", !!O("RTCPeerConnection", d)),
            m.addTest("datachannel", function () {
              if (m.peerconnection)
                for (var e = 0, t = R.length; e < t; e++) {
                  var n = d[R[e] + "RTCPeerConnection"];
                  if (n)
                    try {
                      return "createDataChannel" in new n({});
                    } catch (e) {}
                }
              return !1;
            }),
            m.addTest(
              "getUserMedia",
              "mediaDevices" in navigator &&
                "getUserMedia" in navigator.mediaDevices
            ),
            m.addTest("resizeobserver", "ResizeObserver" in d),
            m.addAsyncTest(function () {
              function e() {
                f("blobworkers", !1), t();
              }
              function t() {
                s && r.revokeObjectURL(s),
                  a && a.terminate(),
                  c && clearTimeout(c);
              }
              try {
                var n = d.BlobBuilder,
                  r = d.URL;
                m._config.usePrefix &&
                  ((n =
                    n ||
                    d.MozBlobBuilder ||
                    d.WebKitBlobBuilder ||
                    d.MSBlobBuilder ||
                    d.OBlobBuilder),
                  (r = r || d.MozURL || d.webkitURL || d.MSURL || d.OURL));
                var o,
                  i,
                  a,
                  s,
                  c,
                  u = "this.onmessage=function(e){postMessage(e.data)}";
                try {
                  o = new Blob([u], { type: "text/javascript" });
                } catch (e) {}
                o || ((i = new n()).append(u), (o = i.getBlob())),
                  (s = r.createObjectURL(o)),
                  ((a = new Worker(s)).onmessage = function (e) {
                    f("blobworkers", "Modernizr" === e.data), t();
                  }),
                  (a.onerror = e),
                  (c = setTimeout(e, 200)),
                  a.postMessage("Modernizr");
              } catch (t) {
                e();
              }
            }),
            m.addAsyncTest(function () {
              try {
                var t = new Worker(
                  "data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0="
                );
                (t.onmessage = function (e) {
                  t.terminate(),
                    f("dataworkers", "Modernizr" === e.data),
                    (t = null);
                }),
                  (t.onerror = function () {
                    f("dataworkers", !1), (t = null);
                  }),
                  setTimeout(function () {
                    f("dataworkers", !1);
                  }, 200),
                  t.postMessage("Modernizr");
              } catch (t) {
                setTimeout(function () {
                  f("dataworkers", !1);
                }, 0);
              }
            }),
            m.addTest("sharedworkers", "SharedWorker" in d),
            m.addTest(
              "blobconstructor",
              function () {
                try {
                  return !!new Blob();
                } catch (e) {
                  return !1;
                }
              },
              { aliases: ["blob-constructor"] }
            );
          var j,
            I,
            C,
            L,
            B,
            M,
            de,
            t = (t = O("URL", d, !1)) && d[t];
          for (de in (m.addTest(
            "bloburls",
            t && "revokeObjectURL" in t && "createObjectURL" in t
          ),
          m.addTest("webworkers", "Worker" in d),
          m.addTest("typedarrays", "ArrayBuffer" in d),
          m.addAsyncTest(function () {
            function e() {
              f("transferables", !1), t();
            }
            function t() {
              i && URL.revokeObjectURL(i),
                a && a.terminate(),
                r && clearTimeout(r);
            }
            if (
              !(
                m.blobconstructor &&
                m.bloburls &&
                m.webworkers &&
                m.typedarrays
              )
            )
              return f("transferables", !1);
            try {
              var n,
                r,
                o = new Blob(['var hello = "world"'], {
                  type: "text/javascript",
                }),
                i = URL.createObjectURL(o),
                a = new Worker(i);
              (a.onerror = e),
                (r = setTimeout(e, 200)),
                (n = new ArrayBuffer(1)),
                a.postMessage(n, [n]),
                f("transferables", 0 === n.byteLength),
                t();
            } catch (t) {
              e();
            }
          }),
          o))
            if (o.hasOwnProperty(de)) {
              if (
                ((j = []),
                (I = o[de]).name &&
                  (j.push(I.name.toLowerCase()), I.options) &&
                  I.options.aliases &&
                  I.options.aliases.length)
              )
                for (C = 0; C < I.options.aliases.length; C++)
                  j.push(I.options.aliases[C].toLowerCase());
              for (
                L = h(I.fn, "function") ? I.fn() : I.fn, B = 0;
                B < j.length;
                B++
              )
                1 === (M = j[B].split(".")).length
                  ? (m[M[0]] = L)
                  : ((m[M[0]] && (!m[M[0]] || m[M[0]] instanceof Boolean)) ||
                      (m[M[0]] = new Boolean(m[M[0]])),
                    (m[M[0]][M[1]] = L)),
                  G.push((L ? "" : "no-") + M.join("-"));
            }
          U(G), delete e.addTest, delete e.addAsyncTest;
          for (var pe = 0; pe < m._q.length; pe++) m._q[pe]();
          D.Modernizr = m;
        })(window, window, document),
        {
          Element: {
            sandbox: { title: "iframe/sandbox", keyPath: "iframe/sandbox" },
            srcdoc: { title: "iframe/srcdoc", keyPath: "iframe/srcdoc" },
            apng: { title: "img/apng", keyPath: "img/apng" },
            avif: { title: "img/avif", keyPath: "img/avif" },
            imgcrossorigin: {
              title: "img/crossorigin",
              keyPath: "img/crossorigin",
            },
            exiforientation: {
              title: "img/exif-orientation",
              keyPath: "img/exif-orientation",
            },
            lazyloading: {
              title: "img/lazyloading",
              keyPath: "img/lazyloading",
            },
            webp: { title: "img/webp", keyPath: "img/webp" },
            prefetch: { title: "link/prefetch", keyPath: "link/prefetch" },
            scriptasync: { title: "script/async", keyPath: "script/async" },
            scriptdefer: { title: "script/defer", keyPath: "script/defer" },
          },
          Feature: {
            clipboard: { title: "Clipboard", keyPath: "clipboard" },
            customevent: {
              title: "Custom Event",
              keyPath: "event/customevent",
            },
            eventlistener: {
              title: "Eventlistener",
              keyPath: "event/eventlistener",
            },
            forcetouch: { title: "Force Touch", keyPath: "event/forcetouch" },
            hashchange: { title: "Hash Change", keyPath: "event/hashchange" },
            oninput: { title: "Input Event", keyPath: "event/oninput" },
            pointerevents: {
              title: "Pointer Event",
              keyPath: "event/forcetouch",
            },
            history: { title: "History", keyPath: "history" },
            messagechannel: {
              title: "Message Channel",
              keyPath: "messagechannel",
            },
            postmessage: { title: "Postmessage", keyPath: "postmessage" },
            performance: { title: "Performance API", keyPath: "performance" },
            queryselector: { title: "queryselector", keyPath: "queryselector" },
            requestanimationframe: {
              title: "requestanimationframe",
              keyPath: "requestanimationframe",
            },
            serviceworker: {
              title: "Service Worker",
              keyPath: "serviceworker",
            },
            webanimations: { title: "Web Animation", keyPath: "webanimations" },
            webgl: { title: "WebGL", keyPath: "webgl/webgl" },
            datachannel: {
              title: "WebRTC/datachannel",
              keyPath: "webrtc/datachannel",
            },
            getusermedia: {
              title: "WebRTC/getusermedia",
              keyPath: "webrtc/getusermedia",
            },
            peerconnection: {
              title: "WebRTC/peerconnection",
              keyPath: "webrtc/peerconnection",
            },
            resizeobserver: {
              title: "Resizeobserver",
              keyPath: "window/resizeobserver",
            },
            sharedworkers: {
              title: "Shared Worker",
              keyPath: "workers/sharedworkers",
            },
            webworkers: { title: "Web Worker", keyPath: "workers/webworkers" },
          },
          Network: {
            cors: { title: "Cors", keyPath: "cors" },
            beacon: { title: "Beacon", keyPath: "network/beacon" },
            fetch: { title: "Fetch", keyPath: "network/fetch" },
          },
          Javascript: {
            es6array: { title: "ES6 Array", keyPath: "es6/array" },
            arrow: { title: "ES6 Arrow Function", keyPath: "es6/arrow" },
            es6class: { title: "ES6 Class", keyPath: "es6/class" },
            es6collections: {
              title: "ES6 Collections",
              keyPath: "es6/collections",
            },
            generators: { title: "ES6 Generators", keyPath: "es6/generators" },
            es6math: { title: "ES6 Math", keyPath: "es6/math" },
            es6number: { title: "ES6 Number", keyPath: "es6/number" },
            es6object: { title: "ES6 Object", keyPath: "es6/object" },
            promises: { title: "ES6 Promise", keyPath: "es6/promises" },
            restparameters: {
              title: "ES6 Rest Parameters",
              keyPath: "es6/rest-parameters",
            },
            spreadarray: {
              title: "ES6 Array Spread",
              keyPath: "es6/spread-array",
            },
            stringtemplate: {
              title: "ES6 String Template",
              keyPath: "es6/string-template",
            },
            es6string: { title: "ES6 String", keyPath: "es6/string" },
            es6symbol: { title: "ES6 Symbol", keyPath: "es6/symbol" },
            proxy: { title: "ES6 Proxy", keyPath: "proxy" },
            reflect: {
              title: "ES6 Reflect",
              customTest:
                "\"Reflect\" in window &&\n      typeof window.Reflect === 'object' &&\n      typeof Reflect.has === 'function' &&\n      [\n        'apply',\n        'construct',\n        'defineProperty',\n        'deleteProperty',\n        'getOwnPropertyDescriptor',\n        'getPrototypeOf',\n        'has',\n        'isExtensible',\n        'ownKeys',\n        'preventExtensions',\n        'setPrototypeOf',\n      ].every((i) => Reflect.has(Reflect, i))",
            },
            es7array: { title: "ES7 Array", keyPath: "es7/array" },
            restdestructuringarray: {
              title: "ES7 Rest Destructuring",
              keyPath: "es7/rest-destructuring",
            },
            spreadobject: {
              title: "ES7 Object Spread",
              keyPath: "es7/spread-object",
            },
            es8object: { title: "ES8 Object", keyPath: "es8/object" },
            finally: {
              title: "ES9 Promise Finally",
              customTest: "<ES6 Promise> && !!Promise.prototype.finally",
            },
          },
          Storage: {
            cookies: { title: "Cookies", keyPath: "storage/cookies" },
            indexeddb: { title: "IndexedDB", keyPath: "storage/indexeddb" },
            localstorage: {
              title: "LocalStorage",
              keyPath: "storage/localstorage",
            },
            sessionstorage: {
              title: "SessionStorage",
              keyPath: "storage/sessionstorage",
            },
            websqldatabase: {
              title: "Web SQL Database",
              keyPath: "storage/websqldatabase",
            },
          },
        }),
      Kb = "https://github.com/Modernizr/Modernizr/tree/master/feature-detects",
      Zb = ["indexeddb", "apng", "avif", "exiforientation", "webp"];
    function eA() {
      return (eA = l(
        E().mark(function e() {
          var n, t;
          return E().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  (n = {
                    Element: [],
                    Feature: [],
                    Network: [],
                    Javascript: [],
                    Storage: [],
                  }),
                    qh(Yb).forEach(function (e) {
                      var o = Yb[e],
                        t = qh(o).map(
                          (function () {
                            var t = l(
                              E().mark(function e(t) {
                                var r;
                                return E().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((r = o[t]).keyPath &&
                                            (r.keyPath = ""
                                              .concat(Kb, "/")
                                              .concat(r.keyPath, ".js")),
                                          !(-1 < Zb.indexOf(t)))
                                        ) {
                                          e.next = 8;
                                          break;
                                        }
                                        e.next = 5;
                                        var n = t;
                                        return new Promise(function (t) {
                                          Modernizr.on(n, function (e) {
                                            t(e);
                                          });
                                        });
                                      case 5:
                                        (r.supported = e.sent), (e.next = 9);
                                        break;
                                      case 8:
                                        r.supported = Modernizr[t];
                                      case 9:
                                        return e.abrupt("return", r);
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()
                        );
                      n[e] = t;
                    }),
                    (e.t0 = E().keys(n));
                case 3:
                  if ((e.t1 = e.t0()).done) e.next = 11;
                  else {
                    if (((t = e.t1.value), Qh(n, t)))
                      return (e.next = 8), Promise.all(n[t]);
                    e.next = 9;
                  }
                  break;
                case 8:
                  n[t] = e.sent;
                case 9:
                  e.next = 3;
                  break;
                case 11:
                  return e.abrupt("return", n);
                case 12:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    window.Modernizr.addTest(
      "finally",
      Modernizr.promises && !!Promise.prototype.finally
    ),
      window.Modernizr.addTest(
        "reflect",
        "Reflect" in window &&
          "object" === N(window.Reflect) &&
          "function" == typeof Reflect.has &&
          [
            "apply",
            "construct",
            "defineProperty",
            "deleteProperty",
            "getOwnPropertyDescriptor",
            "getPrototypeOf",
            "has",
            "isExtensible",
            "ownKeys",
            "preventExtensions",
            "setPrototypeOf",
          ].every(function (e) {
            return Reflect.has(Reflect, e);
          })
      );
    function tA(e) {
      if ("boolean" == typeof e)
        return e ? ["https://", "wss://"] : ["http://", "ws://"];
      try {
        if (new URL(pA.scriptLink).protocol.startsWith("https"))
          return ["https://", "wss://"];
      } catch (e) {
        M.error(
          "Failed to resolve the protocol and fallback to [http://, ws://]"
        );
      }
      return ["http://", "ws://"];
    }
    function nA(e) {
      var n = new URLSearchParams();
      return (
        Object.entries(e).forEach(function (e) {
          var e = W(e, 2),
            t = e[0],
            e = e[1];
          n.append(t, String(e));
        }),
        n.toString()
      );
    }
    var rA = (function () {
        function r() {
          o(this, r), c(this, "name", "SystemPlugin");
        }
        var e;
        return (
          s(r, [
            {
              key: "onCreated",
              value:
                ((e = l(
                  E().mark(function e() {
                    var t, n;
                    return E().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (r.hasInitd) return e.abrupt("return");
                            e.next = 2;
                            break;
                          case 2:
                            return (
                              (r.hasInitd = !0),
                              (t = _h()),
                              (e.next = 6),
                              (function () {
                                return eA.apply(this, arguments);
                              })()
                            );
                          case 6:
                            (n = e.sent),
                              Ky.broadcastMessage(
                                rg("system", {
                                  id: t,
                                  system: U({ ua: navigator.userAgent }, Jb()),
                                  features: n,
                                }),
                                !1
                              );
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            },
          ]),
          r
        );
      })(),
      oA =
        (c(rA, "hasInitd", !1),
        (function () {
          function n() {
            o(this, n), c(this, "name", "PagePlugin");
          }
          return (
            s(
              n,
              [
                {
                  key: "onCreated",
                  value: function () {
                    n.hasInitd ||
                      ((n.hasInitd = !0),
                      Ky.addListener(ng, function (e, t) {
                        "page" === e.source.data && t(n.collectHtml());
                      }));
                  },
                },
              ],
              [
                {
                  key: "collectHtml",
                  value: function () {
                    return rg("page", {
                      html: document.documentElement.outerHTML,
                      location: window.location,
                    });
                  },
                },
              ]
            ),
            n
          );
        })()),
      iA =
        (c(oA, "hasInitd", !1),
        (function () {
          function a() {
            o(this, a), c(this, "name", "StoragePlugin");
          }
          var e;
          return (
            s(
              a,
              [
                {
                  key: "onCreated",
                  value: function () {
                    a.hasInitd ||
                      ((a.hasInitd = !0),
                      a.listenRefreshEvent(),
                      a.initStorageProxy());
                  },
                },
              ],
              [
                {
                  key: "listenRefreshEvent",
                  value: function () {
                    Ky.addListener(
                      ng,
                      (function () {
                        var t = l(
                          E().mark(function e(t) {
                            var n, r;
                            return E().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    (n = t.source),
                                      (n = n.data),
                                      (r = null),
                                      (e.t0 = n),
                                      (e.next =
                                        "localStorage" === e.t0 ||
                                        "sessionStorage" === e.t0
                                          ? 6
                                          : "cookie" === e.t0
                                          ? 8
                                          : 12);
                                    break;
                                  case 6:
                                    return (
                                      (r = a.takeStorage(n)),
                                      e.abrupt("break", 13)
                                    );
                                  case 8:
                                    return (e.next = 10), a.takeCookie();
                                  case 10:
                                    return (r = e.sent), e.abrupt("break", 13);
                                  case 12:
                                    return e.abrupt("break", 13);
                                  case 13:
                                    r && a.sendStorageItem(r);
                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()
                    );
                  },
                },
                {
                  key: "takeStorage",
                  value: function (e) {
                    var t = { type: e, action: "get", data: [] },
                      n = window[e],
                      r = n.length;
                    if (r)
                      for (var o = 0; o <= r - 1; o++) {
                        var i,
                          a = n.key(o);
                        a &&
                          ((i = n.getItem(a) || ""),
                          t.data.push({ name: a, value: i }));
                      }
                    return t;
                  },
                },
                {
                  key: "takeCookie",
                  value:
                    ((e = l(
                      E().mark(function e() {
                        var t;
                        return E().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = {
                                    type: "cookie",
                                    action: "get",
                                    data: [],
                                  }),
                                  window.cookieStore)
                                )
                                  return (
                                    (e.next = 4), window.cookieStore.getAll()
                                  );
                                e.next = 7;
                                break;
                              case 4:
                                (t.data = e.sent), (e.next = 8);
                                break;
                              case 7:
                                t.data = document.cookie
                                  .split("; ")
                                  .map(function (e) {
                                    e = W(e.split("="), 2);
                                    return { name: e[0], value: e[1] };
                                  });
                              case 8:
                                return e.abrupt("return", t);
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    function () {
                      return e.apply(this, arguments);
                    }),
                },
                {
                  key: "initStorageProxy",
                  value: function () {
                    var n = a.getStorageType,
                      r = a.sendStorageItem,
                      e = Storage.prototype,
                      t = e.clear,
                      o = e.removeItem,
                      i = e.setItem;
                    (Storage.prototype.clear = function () {
                      t.call(this);
                      var e = { type: n(this), action: "clear" };
                      r(e);
                    }),
                      (Storage.prototype.removeItem = function (e) {
                        o.call(this, e);
                        e = {
                          type: n(this),
                          action: "remove",
                          name: String(e),
                        };
                        r(e);
                      }),
                      (Storage.prototype.setItem = function (e, t) {
                        i.call(this, e, t);
                        e = {
                          type: n(this),
                          action: "set",
                          name: String(e),
                          value: String(t),
                        };
                        r(e);
                      }),
                      window.cookieStore &&
                        window.cookieStore.addEventListener(
                          "change",
                          function (e) {
                            var t = e.changed,
                              e = e.deleted;
                            0 < t.length &&
                              t.forEach(function (e) {
                                e = U({ type: "cookie", action: "set" }, e);
                                a.sendStorageItem(e);
                              }),
                              0 < e.length &&
                                e.forEach(function (e) {
                                  e = {
                                    type: "cookie",
                                    action: "remove",
                                    name: e.name,
                                  };
                                  a.sendStorageItem(e);
                                });
                          }
                        );
                  },
                },
                {
                  key: "getStorageType",
                  value: function (e) {
                    return e === localStorage
                      ? "localStorage"
                      : e === sessionStorage
                      ? "sessionStorage"
                      : e.constructor.name;
                  },
                },
                {
                  key: "sendStorageItem",
                  value: function (e) {
                    e = rg("storage", e);
                    Ky.broadcastMessage(e, !0);
                  },
                },
              ]
            ),
            a
          );
        })()),
      zr = (c(iA, "hasInitd", !1), x),
      A = me,
      an = Tr.f,
      aA = we,
      sA = S,
      cA = Ki,
      uA = oe,
      L = Zi,
      lA = A("".startsWith),
      fA = A("".slice),
      dA = Math.min,
      B = L("startsWith"),
      pA =
        (zr(
          {
            target: "String",
            proto: !0,
            forced:
              !!(
                B ||
                !(Ve = an(String.prototype, "startsWith")) ||
                Ve.writable
              ) && !B,
          },
          {
            startsWith: function (e) {
              var t = sA(uA(this)),
                n =
                  (cA(e),
                  aA(
                    dA(1 < arguments.length ? arguments[1] : void 0, t.length)
                  )),
                e = sA(e);
              return lA ? lA(t, e, n) : fA(t, n, n + e.length) === e;
            },
          }
        ),
        (function () {
          function e() {
            o(this, e);
          }
          return (
            s(e, null, [
              {
                key: "get",
                value: function () {
                  return e.value;
                },
              },
            ]),
            e
          );
        })()),
      hA =
        (c(
          pA,
          "scriptLink",
          null == (R = document.currentScript) ? void 0 : R.src
        ),
        c(pA, "resolveConfig", function () {
          var e,
            t,
            n = {
              api: "",
              clientOrigin: "",
              project: "default",
              autoRender: !0,
              title: "",
              enableSSL: null,
            };
          return pA.scriptLink
            ? ((e = (t = new URL(pA.scriptLink)).host),
              (t = t.origin),
              U(U({}, n), {}, { api: e, clientOrigin: t }))
            : n;
        }),
        c(pA, "mergeConfig", function (e) {
          return (pA.value = U(U({}, pA.resolveConfig()), e)), pA.value;
        }),
        (function () {
          function t() {
            var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            if ((o(this, t), !(this.base = e)))
              throw Error("The api base url cannot be empty");
          }
          return (
            s(t, [
              {
                key: "createRoom",
                value: function () {
                  var e,
                    t,
                    n,
                    r = pA.get(),
                    o = tA(r.enableSSL),
                    i = Jb(),
                    i =
                      ((a = (e = i).osName),
                      (t = i.osVersion),
                      (n = i.browserName),
                      (e = i.browserVersion),
                      ""
                        .concat(a, "/")
                        .concat(t, " ")
                        .concat(n, "/")
                        .concat(e)),
                    a = nA({ name: i, group: r.project, title: r.title });
                  return fetch(
                    ""
                      .concat(o[0])
                      .concat(this.base, "/api/v1/room/create?")
                      .concat(a),
                    { method: "POST" }
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .catch(function (e) {
                      throw Error(
                        "Request create room failed: ".concat(e.message)
                      );
                    });
                },
              },
              {
                key: "getRoomUrl",
                value: function () {
                  var e =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = pA.get(),
                    t = tA(t.enableSSL);
                  return ""
                    .concat(t[1])
                    .concat(this.base, "/api/v1/ws/room/join?")
                    .concat(nA(e));
                },
              },
            ]),
            t
          );
        })()),
      gA = "1.4.10";
    function yA(e) {
      return window.TouchEvent && e instanceof TouchEvent ? e.touches[0] : e;
    }
    (T =
      "#__pageSpy {\n  font-size: 14px;\n}\n#__pageSpy .page-spy-logo {\n  position: fixed;\n  left: 1.42857143em;\n  bottom: 5.71428571em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 5.71428571em;\n  height: 5.71428571em;\n  font-size: 1em;\n  border-radius: 5.71428571em;\n  background-color: #fff;\n  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  z-index: 13000;\n  transition: all ease-in-out 0.3s;\n}\n#__pageSpy .page-spy-logo.inactive {\n  background-color: #a2a2a2;\n  -webkit-filter: grayscale(1);\n          filter: grayscale(1);\n}\n#__pageSpy .page-spy-modal {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  transition: all ease-out 0.3s;\n  z-index: 13000;\n}\n#__pageSpy .page-spy-modal.show {\n  opacity: 1;\n}\n#__pageSpy .page-spy-content {\n  width: 75%;\n  max-width: 25em;\n  background-color: #fafafa;\n  border-radius: 0.28571429em;\n  text-align: center;\n}\n#__pageSpy .page-spy-content__info {\n  padding: 1.71428571em 1.14285714em;\n  font-size: 1.14285714em;\n  line-height: 1.5;\n  text-align: left;\n  color: #202124;\n  letter-spacing: 2px;\n}\n#__pageSpy .page-spy-content__info > p {\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n#__pageSpy .page-spy-content__info > p b {\n  display: inline-block;\n  width: 6.57142857em;\n  text-align: right;\n  margin-right: 10px;\n}\n#__pageSpy .page-spy-content__ok {\n  padding: 0.57142857em 0;\n  border-top: 1px solid #eee;\n  font-size: 1.14285714em;\n  line-height: 1.5;\n  color: transparent;\n  -webkit-background-clip: text;\n          background-clip: text;\n  background-image: linear-gradient(45deg, #efdfff, #4e00b1 52%, #3d0c7c);\n  cursor: pointer;\n}\n.page-spy-toast {\n  position: fixed;\n  left: 50%;\n  top: 10%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  max-width: 50vw;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 6px 12px;\n  color: #9a62e4;\n  font-size: 14px;\n  background-color: #fafafa;\n  border-radius: 4px;\n  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.2);\n  z-index: 99999;\n}\n"),
      (vA = (vA = void 0 === vA ? {} : vA).insertAt),
      T &&
        "undefined" != typeof document &&
        ((O = document.head || document.getElementsByTagName("head")[0]),
        ((C = document.createElement("style")).type = "text/css"),
        "top" === vA && O.firstChild
          ? O.insertBefore(C, O.firstChild)
          : O.appendChild(C),
        C.styleSheet
          ? (C.styleSheet.cssText = T)
          : C.appendChild(document.createTextNode(T)));
    var vA,
      go = x,
      mA = nr.filter;
    function bA(n) {
      return new Promise(function (e, t) {
        n.addEventListener("success", function () {
          e(n.result);
        }),
          n.addEventListener("error", function () {
            t();
          });
      });
    }
    go(
      { target: "Array", proto: !0, forced: !qr("filter") },
      {
        filter: function (e) {
          return mA(this, e, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    );
    var AA = (function () {
        function i() {
          o(this, i), c(this, "name", "DatabasePlugin");
        }
        var t, n, e;
        return (
          s(
            i,
            [
              {
                key: "onCreated",
                value: function () {
                  !i.isSupport ||
                    i.hasInitd ||
                    ((i.hasInitd = !0),
                    i.listenEvents(),
                    i.initIndexedDBProxy());
                },
              },
            ],
            [
              {
                key: "isSupport",
                get: function () {
                  return !!(IDBFactory && IDBObjectStore && window.indexedDB);
                },
              },
              {
                key: "listenEvents",
                value: function () {
                  var r = this;
                  Ky.addListener(
                    ng,
                    (function () {
                      var t = l(
                        E().mark(function e(t) {
                          var n;
                          return E().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ("indexedDB" === t.source.data)
                                    return (e.next = 4), r.takeBasicInfo();
                                  e.next = 7;
                                  break;
                                case 4:
                                  (n = e.sent),
                                    i.sendData({ action: "basic", result: n });
                                case 7:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  ),
                    Ky.addListener(
                      "database-pagination",
                      (function () {
                        var t = l(
                          E().mark(function e(t) {
                            var n, r, o;
                            return E().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (r = t.source),
                                      (r = r.data),
                                      (o = r.db),
                                      (n = r.store),
                                      (r = r.page),
                                      (e.next = 4),
                                      i.getStoreDataWithPagination({
                                        db: o,
                                        store: n,
                                        page: r,
                                      })
                                    );
                                  case 4:
                                    (o = e.sent), i.sendData(o);
                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()
                    );
                },
              },
              {
                key: "initIndexedDBProxy",
                value: function () {
                  var e = IDBObjectStore.prototype,
                    t = e.put,
                    n = e.add,
                    r = e.delete,
                    e = e.clear,
                    s = i.sendData,
                    o =
                      ([
                        { origin: t, method: "put" },
                        { origin: n, method: "add" },
                        { origin: r, method: "delete" },
                        { origin: e, method: "clear" },
                      ].forEach(function (e) {
                        var i = e.origin,
                          a = e.method;
                        IDBObjectStore.prototype[a] = function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          var r = i.apply(this, t),
                            o = {
                              action: "clear" === a ? "clear" : "update",
                              database: this.transaction.db.name,
                              store: this.name,
                            };
                          return (
                            r.addEventListener("success", function () {
                              s(o);
                            }),
                            r
                          );
                        };
                      }),
                      IDBFactory.prototype.deleteDatabase);
                  IDBFactory.prototype.deleteDatabase = function (e) {
                    var t = o.call(this, e),
                      n = { action: "drop", database: e };
                    return (
                      t.addEventListener("success", function () {
                        s(n);
                      }),
                      t
                    );
                  };
                },
              },
              {
                key: "takeBasicInfo",
                value:
                  ((e = l(
                    E().mark(function e() {
                      var t, n, r;
                      return E().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), window.indexedDB.databases();
                            case 2:
                              if ((t = e.sent).length) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return", null);
                            case 5:
                              if (
                                (n = t.filter(function (e) {
                                  return e.name && e.version;
                                })).length
                              ) {
                                e.next = 8;
                                break;
                              }
                              return e.abrupt("return", null);
                            case 8:
                              return (
                                (e.next = 10),
                                Promise.all(
                                  n.map(function (e) {
                                    return i.getDBData(e);
                                  })
                                )
                              );
                            case 10:
                              return (
                                (r = e.sent),
                                e.abrupt("return", r.filter(Boolean))
                              );
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function () {
                    return e.apply(this, arguments);
                  }),
              },
              {
                key: "getDBData",
                value:
                  ((n = l(
                    E().mark(function e(t) {
                      var n, r, o;
                      return E().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (n = {
                                    name: t.name,
                                    version: t.version,
                                    stores: [],
                                  }),
                                  (e.next = 4),
                                  bA(window.indexedDB.open(t.name, t.version))
                                );
                              case 4:
                                return (
                                  (r = e.sent).objectStoreNames.length &&
                                    ((o = V(r.objectStoreNames).map(function (
                                      e
                                    ) {
                                      return r
                                        .transaction(e, "readonly")
                                        .objectStore(e);
                                    })),
                                    (n.stores = o.map(function (e) {
                                      return {
                                        name: e.name,
                                        keyPath: e.keyPath,
                                        autoIncrement: e.autoIncrement,
                                        indexes: V(e.indexNames),
                                      };
                                    }))),
                                  e.abrupt("return", n)
                                );
                              case 9:
                                return (
                                  (e.prev = 9),
                                  (e.t0 = e.catch(0)),
                                  M.error(
                                    "Failed to get indexedDB data, more info: ".concat(
                                      e.t0.message
                                    )
                                  ),
                                  e.abrupt("return", null)
                                );
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 9]]
                      );
                    })
                  )),
                  function (e) {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "getStoreDataWithPagination",
                value:
                  ((t = l(
                    E().mark(function e(t) {
                      var n, r, o, i, a, s, c, u, l, f;
                      return E().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = t.db),
                                (r = t.store),
                                (o = t.page),
                                (i = {
                                  action: "get",
                                  database: null,
                                  store: null,
                                  page: { current: o, prev: null, next: null },
                                  total: 0,
                                  data: [],
                                }),
                                o < 1)
                              )
                                return e.abrupt("return", i);
                              e.next = 4;
                              break;
                            case 4:
                              return (e.next = 6), bA(window.indexedDB.open(n));
                            case 6:
                              return (
                                (a = e.sent),
                                (s = a
                                  .transaction(r, "readonly")
                                  .objectStore(r)),
                                (i.database = {
                                  name: a.name,
                                  version: a.version,
                                }),
                                (i.store = {
                                  name: s.name,
                                  keyPath: s.keyPath,
                                  autoIncrement: s.autoIncrement,
                                  indexes: V(s.indexNames),
                                }),
                                (e.next = 12),
                                bA(s.count())
                              );
                            case 12:
                              return (
                                (i.total = e.sent),
                                (c = 50 * (o - 1)),
                                (u = 50 * o),
                                (i.page.prev = 1 < o ? o - 1 : null),
                                (i.page.next = 50 + c < i.total ? o + 1 : null),
                                (l = 0),
                                (f = s.openCursor()),
                                e.abrupt(
                                  "return",
                                  new Promise(function (t, e) {
                                    f.addEventListener("success", function () {
                                      var e = f.result;
                                      e
                                        ? (c <= l &&
                                            l < u &&
                                            i.data.push({
                                              key: e.key,
                                              value: e.value,
                                            }),
                                          l++,
                                          e.continue())
                                        : t(i);
                                    }),
                                      f.addEventListener("error", e);
                                  })
                                )
                              );
                            case 20:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )),
                  function (e) {
                    return t.apply(this, arguments);
                  }),
              },
              {
                key: "sendData",
                value: function (e) {
                  e = rg("database", e);
                  Ky.broadcastMessage(e, !0);
                },
              },
            ]
          ),
          i
        );
      })(),
      wA =
        (c(AA, "hasInitd", !1),
        (function () {
          function r() {
            o(this, r);
          }
          return (
            s(r, null, [
              {
                key: "message",
                value: function (e) {
                  var t = document.createElement("div"),
                    n =
                      (t.classList.add("page-spy-toast"),
                      (t.innerText = String(e)),
                      document.documentElement.appendChild(t),
                      setTimeout(function () {
                        document.contains(t) &&
                          document.documentElement.removeChild(t),
                          r.timer === n && (r.timer = null);
                      }, 1500));
                  r.timer = n;
                },
              },
              {
                key: "destroy",
                value: function () {
                  var e = document.querySelectorAll(".page-spy-toast");
                  e.length &&
                    (V(e).forEach(function (e) {
                      document.contains(e) &&
                        document.documentElement.removeChild(e);
                    }),
                    r.timer) &&
                    clearTimeout(r.timer),
                    (r.timer = null);
                },
              },
            ]),
            r
          );
        })()),
      kA = (c(wA, "timer", null), "__pageSpy"),
      w = (function () {
        function t() {
          var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          if (
            (o(this, t),
            c(this, "root", null),
            c(this, "version", gA),
            c(this, "plugins", {}),
            c(this, "request", null),
            c(this, "name", ""),
            c(this, "address", ""),
            c(this, "roomUrl", ""),
            c(this, "socketStore", Ky),
            t.instance)
          )
            return (
              M.warn("Cannot initialize PageSpy multiple times"), t.instance
            );
          t.instance = this;
          e = pA.mergeConfig(e).api;
          (this.request = new hA(e)),
            this.loadPlugins(
              new Zy(),
              new ev(),
              new jb(),
              new rA(),
              new oA(),
              new iA(),
              new AA()
            ),
            this.init();
        }
        var e, n;
        return (
          s(t, [
            {
              key: "loadPlugins",
              value: function () {
                for (
                  var t = this, e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                n.forEach(function (e) {
                  (t.plugins[e.name] = e).onCreated && e.onCreated();
                });
              },
            },
            {
              key: "init",
              value:
                ((n = l(
                  E().mark(function e() {
                    var t, n, r, o, i, a, s;
                    return E().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.checkConfig()) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              if (
                                ((t = pA.get()),
                                null === (n = sessionStorage.getItem(Yy)))
                              )
                                return (e.next = 8), this.createNewConnection();
                              e.next = 10;
                              break;
                            case 8:
                              e.next = 20;
                              break;
                            case 10:
                              if (
                                ((s = JSON.parse(n)),
                                (r = s.name),
                                (o = s.address),
                                (i = s.roomUrl),
                                (a = s.usable),
                                (s = s.project),
                                a && t.project === s)
                              ) {
                                e.next = 16;
                                break;
                              }
                              return (e.next = 14), this.createNewConnection();
                            case 14:
                              e.next = 20;
                              break;
                            case 16:
                              (this.name = r),
                                (this.address = o),
                                (this.roomUrl = i),
                                this.useOldConnection();
                            case 20:
                              M.log("Plugins inited"),
                                t.autoRender && this.render();
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "createNewConnection",
              value:
                ((e = l(
                  E().mark(function e() {
                    var t, n;
                    return E().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.checkConfig()) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              if (this.request) {
                                e.next = 6;
                                break;
                              }
                              return (
                                M.error("Cannot get the Request"),
                                e.abrupt("return")
                              );
                            case 6:
                              return (e.next = 8), this.request.createRoom();
                            case 8:
                              (t = e.sent),
                                (t = t.data),
                                (n = this.request.getRoomUrl({
                                  address: t.address,
                                  name: "client:".concat(_h()),
                                  userId: "Client",
                                })),
                                (this.name = t.name),
                                (this.address = t.address),
                                (this.roomUrl = n),
                                this.refreshRoomInfo(),
                                Ky.init(n);
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return e.apply(this, arguments);
                }),
            },
            {
              key: "useOldConnection",
              value: function () {
                this.refreshRoomInfo(), Ky.init(this.roomUrl);
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  n = this;
                document.querySelector("#".concat(kA))
                  ? M.warn(
                      "Cannot render the widget because it has been in the DOM"
                    )
                  : void 0 !== document
                  ? "loading" === document.readyState
                    ? window.addEventListener(
                        "DOMContentLoaded",
                        this.render.bind(this)
                      )
                    : this.startRender()
                  : (t = setTimeout(function e() {
                      document && "complete" === document.readyState
                        ? (t && clearTimeout(t), n.startRender())
                        : (t = setTimeout(e, 1));
                    }, 1));
              },
            },
            {
              key: "refreshRoomInfo",
              value: function () {
                var t = this,
                  n =
                    (this.saveSession(),
                    setInterval(function () {
                      var e = sessionStorage.getItem(Yy);
                      if (null !== e && !1 === JSON.parse(e).usable)
                        return void clearInterval(n);
                      t.saveSession();
                    }, 15e3));
              },
            },
            {
              key: "saveSession",
              value: function () {
                var e, t, n;
                this.checkConfig() &&
                  ((n = this.name),
                  (e = this.address),
                  (t = this.roomUrl),
                  (n = JSON.stringify({
                    name: n,
                    address: e,
                    roomUrl: t,
                    usable: !0,
                    project: pA.get().project,
                  })),
                  sessionStorage.setItem(Yy, n));
              },
            },
            {
              key: "startRender",
              value: function () {
                var t,
                  r,
                  e,
                  n,
                  o,
                  i,
                  a,
                  s,
                  c = this,
                  u = pA.get(),
                  l = u.project,
                  f = u.clientOrigin;
                function d(e) {
                  t.isMoveEvent || (e.stopPropagation(), r.show());
                }
                function p(e) {
                  e.preventDefault(), (o.isMoveEvent = !0);
                  var e = yA(e),
                    t = e.clientX,
                    e = e.clientY,
                    t = t - s.x,
                    e = e - s.y,
                    t = i.x + t,
                    e =
                      (t < 0 ? (t = 0) : t > a.xAxis && (t = a.xAxis), i.y + e);
                  e < 0 ? (e = 0) : e > a.yAxis && (e = a.yAxis),
                    (o.style.left = "".concat(t, "px")),
                    (o.style.top = "".concat(e, "px"));
                }
                function h() {
                  (s.x = 0),
                    (s.y = 0),
                    document.removeEventListener("mousemove", p),
                    document.removeEventListener("mouseup", h),
                    document.removeEventListener("touchmove", p),
                    document.removeEventListener("touchend", h);
                }
                function g(e) {
                  e.preventDefault(),
                    (o.isMoveEvent = !1),
                    (i = o.getBoundingClientRect()),
                    (a.xAxis = window.innerWidth - i.width),
                    (a.yAxis = window.innerHeight - i.height);
                  var e = yA(e),
                    t = e.clientX,
                    e = e.clientY;
                  (s.x = t),
                    (s.y = e),
                    document.addEventListener("mousemove", p, !1),
                    document.addEventListener("mouseup", h, !1),
                    document.addEventListener("touchmove", p, {
                      capture: !1,
                      passive: !1,
                    }),
                    document.addEventListener("touchend", h, !1);
                }
                this.checkConfig() &&
                  (((u = document.createElement("div")).id = kA),
                  (this.root = u),
                  ((t = document.createElement("div")).className =
                    "page-spy-logo"),
                  ((e = document.createElement("img")).alt = "PageSpy Logo"),
                  (e.src =
                    "data:image/svg+xml,%3csvg width='255' height='255' viewBox='0 0 255 255' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M183 24L81 126V141.5L90 150.5H105L145 110.5H160.5L169.5 119.5V133.5L72 231' stroke='url(%23paint0_linear_106_8)' stroke-width='25' stroke-linecap='round' /%3e %3cdefs%3e %3clinearGradient id='paint0_linear_106_8' x1='127.5' y1='24' x2='127.5' y2='231' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%233D0C7C' /%3e %3cstop offset='0.519204' stop-color='%234E00B1' /%3e %3cstop offset='1' stop-color='%23EFDFFF' /%3e %3c/linearGradient%3e %3c/defs%3e%3c/svg%3e"),
                  (e.width = 50),
                  (e.height = 50),
                  t.append(e),
                  u.insertAdjacentElement("afterbegin", t),
                  window.addEventListener("sdk-inactive", function () {
                    t.classList.add("inactive");
                  }),
                  (r = new Hs()),
                  (n = (e = W(this.name.split(" "), 2))[0]),
                  (e = e[1]),
                  (n = new zs({
                    content:
                      "\n      <p><b>Device ID:</b> <span style=\"font-family: 'Monaco'\">"
                        .concat(
                          this.address.slice(0, 4),
                          "</span></p>\n      <p><b>System:</b> "
                        )
                        .concat(n, "</p>\n      <p><b>Browser:</b> ")
                        .concat(e, "</p>\n      <p><b>Project:</b> ")
                        .concat(l, "</p>\n      "),
                    onOk: function () {
                      var e = ""
                          .concat(f, "/devtools?version=")
                          .concat(c.name, "&address=")
                          .concat(c.address),
                        e = Qs(e),
                        t = "",
                        n = navigator.languages,
                        t = ["zh-CN", "zh-HK", "zh-TW", "zh"].some(function (
                          e
                        ) {
                          return n.includes(e);
                        })
                          ? e
                            ? "拷贝成功!"
                            : "拷贝失败!"
                          : e
                          ? "Copy successfully!"
                          : "Copy failed!";
                      wA.message(t), r.close();
                    },
                  })),
                  r.append(n.el),
                  u.append(r.el),
                  t.addEventListener("click", d, !1),
                  t.addEventListener("touchend", d, !1),
                  document.documentElement.append(u),
                  (a = { xAxis: 0, yAxis: 0 }),
                  (s = { x: 0, y: 0 }),
                  (o = t).addEventListener("mousedown", g, !1),
                  o.addEventListener("touchstart", g, {
                    capture: !1,
                    passive: !1,
                  }),
                  this.handleDeviceDPR(),
                  M.log("Render success"));
              },
            },
            {
              key: "checkConfig",
              value: function () {
                return (
                  !!pA.get() || (M.error("Cannot get the config info"), !1)
                );
              },
            },
            {
              key: "handleDeviceDPR",
              value: function () {
                var e = window.devicePixelRatio || 1,
                  t = document.querySelector('[name="viewport"]');
                t &&
                  ((t = (t.getAttribute("content") || "").match(
                    /initial-scale=\d+(\.\d+)?/
                  ))
                    ? parseFloat(t[0].split("=")[1])
                    : 1) < 1 &&
                  (this.root.style.fontSize = "".concat(14 * e, "px"));
              },
            },
          ]),
          t
        );
      })();
    return c(w, "instance", null), w;
  })();
  return PageSpy;
};
