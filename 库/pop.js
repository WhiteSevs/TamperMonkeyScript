// ==UserScript==
// @exclude       *
// @author        whitesev

// ==UserLibrary==
// @name          pop
// @description   POP v3.0 — 为简单高效而开发的web弹出层
// @copyright 2022, whitesev (https://openuserjs.org/users/whitesev)
// @license MIT

// @homepageURL   https://openuserjs.org/libs/whitesev/pop

// ==/UserScript==

// ==/UserLibrary==
/* pop-layer https://yangsample.com 2019.8.9 
原链接：https://www.jq22.com/demo/jquerypop201811270105/js_pop.min.js
文档：https://www.jq22.com/yanshi20539
提示：无须css，这个js底下就有了
修改：修正一部分在某些界面执行出问题的bug
*/
(function (w, m) {
  var h = w("t"),
    d = window,
    e = d.document,
    b = {
      cfg: {
        className: "pop",
        viewport: !1,
        minWidth: 300,
        minHeight: 160,
        zIndex: 1e4,
        boundary: 5,
        resize: !1,
        window: !1,
        simplify: !1,
        simplifyAry: {
          "-1": "close",
          0: "cfg",
          1: "alert",
          2: "confirm",
          3: "prompt",
          4: "news",
          5: "iframe",
          6: "custom",
          7: "lateral",
          8: "wait",
          9: "tips",
          10: "img",
        },
        maskColor: "rgba(0,0,0,.4)",
      },
      tmp: {},
      pub: {
        ele: {},
        indexDeposit: void 0,
        customerType: h.customerType(),
        minWidth: 200,
        version: "3.0.4",
      },
      def: {
        anim: {
          start: "showAlert",
          end: "hideAlert",
        },
        html: {
          title: "title",
          content: "content",
          buttonBox: "buttonBox",
          buttonSpcl: "buttonSpcl",
          button: {
            commonly: "button",
            control: "control",
          },
          mask: "mask",
        },
        specialButton: ["min", "max", "close"],
        tran: "transition",
        BoxMinWidth: 200,
        dragSizeName: "size",
      },
      fn: {
        layer: {
          dragSize: function () {
            var a = this.ele,
              c = this.tmp,
              f = this,
              g,
              k,
              n,
              l,
              p,
              r,
              q,
              m,
              t = "PC" == b.pub.customerType ? !0 : !1,
              y = function (c) {
                var v = a.offset().x,
                  u = a.offset().y;
                g = b.cfg.boundary;
                k = v;
                n = u;
                l = Math.ceil(a.width(!0));
                p = Math.ceil(a.height(!0));
                r = d.innerWidth;
                q = d.innerHeight;
                m = void 0;
                m = z(c, a);
                0 < m &&
                  f.state().type &&
                  (f.state("dragSize"),
                  h(e)
                    .on(t ? "mousemove.dragSize" : "touchmove.dragSize", x)
                    .on(t ? "mouseup.dragSize" : "touchend.dragSize", A));
              },
              v = function (c) {
                var b = !f.state().type;
                m || b
                  ? b && a.css("cursor", "")
                  : ((c = z(c, a)),
                    a.css(
                      "cursor",
                      " se-resize s-resize ne-resize w-resize w-resize ne-resize s-resize se-resize".split(
                        " "
                      )[c]
                    ));
              },
              x = function (d) {
                var e = function (a) {
                    var b = parseFloat(a.css("minWidth")),
                      b = b ? l - b : l,
                      f = t ? d.clientX : d.touches[0].clientX,
                      f = f > k + b ? k + b : f;
                    g && (f = f > g ? f : g);
                    c.width = k - f + l;
                    c.left = f;
                    a.css({
                      width: c.width,
                      left: c.left,
                    });
                  },
                  h = function (a) {
                    var b = t ? d.clientX : d.touches[0].clientX;
                    g && (b = b > r - g ? r - g : b);
                    c.width = b - k;
                    a.width(c.width);
                  },
                  v = function (a) {
                    var b = parseFloat(a.css("minHeight")),
                      b = b ? p - b : p,
                      f = t ? d.clientY : d.touches[0].clientY,
                      f = f > n + b ? n + b : f;
                    g && (f = f > g ? f : g);
                    c.height = n - f + p;
                    c.top = f;
                    a.css({
                      height: c.height,
                      top: c.top,
                    });
                  },
                  u = function (a) {
                    var b = t ? d.clientY : d.touches[0].clientY;
                    g && (b = b > q - g ? q - g : b);
                    c.height = b - n;
                    a.height(c.height);
                  },
                  e = [
                    void 0,
                    [e, v],
                    [v],
                    [h, v],
                    [e],
                    [h],
                    [e, u],
                    [u],
                    [h, u],
                  ][m],
                  x;
                for (x in e) e[x](a);
                b.fn.stateEve("dragSize", f.sequence);
              },
              A = function (a) {
                m = void 0;
                f.state(!0);
                h(e)
                  .off(t ? "mousemove.dragSize" : "touchmove.dragSize")
                  .off(t ? "mouseup.dragSize" : "touchend.dragSize");
              },
              z = function (a, c) {
                var b = c.width(!0),
                  f = c.height(!0),
                  d = c.offset().x,
                  g = c.offset().y,
                  e = (t ? a.clientX : a.touches[0].clientX) - d,
                  k = (t ? a.clientY : a.touches[0].clientY) - g,
                  g = 0 < e && 10 > e,
                  d = 10 < e && e < b - 10,
                  b = e > b - 10 && e < b,
                  e = 0 < k && 10 > k,
                  n = 10 < k && k < f - 10,
                  f = k > f - 10 && k < f;
                return g && e
                  ? 1
                  : d && e
                  ? 2
                  : b && e
                  ? 3
                  : g && n
                  ? 4
                  : b && n
                  ? 5
                  : g && f
                  ? 6
                  : d && f
                  ? 7
                  : b && f
                  ? 8
                  : 0;
              };
            this.cfg.dragSize &&
              a
                .on(t ? "mousedown.dragSize" : "touchstart.dragSize", y)
                .on(t ? "mousemove.dragSize" : "touchmove.dragSize", v);
            return this;
          },
          drag: function () {
            var a = this.ele,
              c = this.cfg,
              f = this.tmp,
              g = this,
              k = {},
              n = {},
              l = "PC" == b.pub.customerType ? !0 : !1,
              p = a.child("." + b.cfg.className + "-" + b.def.html.title),
              r = function (c) {
                var b = Math.ceil(p.height(!0)),
                  f = Math.ceil(p.width(!0)),
                  d = a.offset().x,
                  g = a.offset().y,
                  d = c.clientX - d;
                c = c.clientY - g;
                return (10 > d && c < b) ||
                  (d < f && 10 > c) ||
                  (d > f - 10 && c < b)
                  ? 0
                  : 1;
              },
              q = function (a) {
                var b = !g.state().type;
                n.move || b
                  ? b && p.css("cursor", "")
                  : p.css(
                      "cursor",
                      c.dragSize ? (0 < r(a) ? "move" : "") : "move"
                    );
              },
              m = function (f) {
                var d = a.offset().x,
                  p = a.offset().y,
                  q = l ? f.clientX : f.touches[0].clientX,
                  m = l ? f.clientY : f.touches[0].clientY;
                k = {};
                n = {
                  boundary: b.cfg.boundary,
                  width: a.width(!0),
                  height: a.height(!0),
                  offsetX: d,
                  offsetY: p,
                  m_clientX: q - d,
                  m_clientY: m - p,
                };
                (c.dragSize && 1 > r(f)) ||
                  !g.state().type ||
                  ((n.move = !0),
                  g.state("drag"),
                  h("body").css("overflow", "hidden"),
                  h(e)
                    .on(l ? "mousemove.drag" : "touchmove.drag", t)
                    .on(l ? "mouseup.drag" : "touchend.drag", y));
              },
              t = function (c) {
                if (n.move) {
                  k = {
                    left: (l ? c.clientX : c.touches[0].clientX) - n.m_clientX,
                    top: (l ? c.clientY : c.touches[0].clientY) - n.m_clientY,
                  };
                  if (0 < n.boundary) {
                    c = d.innerWidth - n.width - n.boundary;
                    var e = d.innerHeight - n.height - n.boundary;
                    k.left =
                      k.left < n.boundary
                        ? n.boundary
                        : k.left > c
                        ? c
                        : k.left;
                    k.top =
                      k.top < n.boundary ? n.boundary : k.top > e ? e : k.top;
                  }
                  f.left = k.left;
                  f.top = k.top;
                  b.fn.stateEve("drag", g.sequence);
                  a.css(k);
                }
              },
              y = function () {
                n.move = void 0;
                g.state(!0);
                h("body").css("overflow", "");
                h(e)
                  .off(l ? "mousemove.drag" : "touchmove.drag")
                  .off(l ? "mouseup.drag" : "touchend.drag");
              };
            this.cfg.drag &&
              0 < p.length &&
              p
                .on(l ? "mousedown.drag" : "touchstart.drag", m)
                .on(l ? "mousemove.drag" : "touchmove.drag", q);
            return this;
          },
          place: function () {
            var a = this.ele,
              c = this.tmp,
              f = h(this.cfg.box),
              g = f.tagName("body"),
              e = this.sequence,
              n = {},
              l = g ? d.innerWidth : f.width(!0),
              p = g ? d.innerHeight : f.height(!0),
              r = a.width(!0),
              q = a.height(!0),
              f = (l - r) / 2,
              g = (p - q) / 2,
              l = l - r,
              p = p - q,
              q = 0 < b.cfg.boundary ? b.cfg.boundary : 0,
              f = [
                {
                  left: q,
                  top: q,
                },
                {
                  left: f,
                  top: q,
                },
                {
                  left: l - q,
                  top: q,
                },
                {
                  left: q,
                  top: g,
                },
                {
                  left: f,
                  top: g,
                },
                {
                  left: l - q,
                  top: g,
                },
                {
                  left: q,
                  top: p - q,
                },
                {
                  left: f,
                  top: p - q,
                },
                {
                  left: l - q,
                  top: p - q,
                },
              ],
              g = this.cfg.place;
            "number" == typeof g
              ? ((n = f[g - 1]),
                (c.left = n.left),
                (c.top = n.top),
                (c.place = "auto[" + g + "]"))
              : ((c.left = n.left = g.left),
                (c.top = n.top = g.top),
                (c.right = n.right = g.right),
                (c.bottom = n.bottom = g.bottom),
                (c.place = "obj"));
            this.cfg.place && a.css(n);
            b.fn.stateEve("place", e);
            return this;
          },
          upIndex: function (a) {
            var c = this.ele,
              f = this.tmp;
            b.pub.indexDeposit = b.pub.indexDeposit
              ? b.pub.indexDeposit
              : b.cfg.zIndex;
            a = a ? (b.pub.indexDeposit += 1) : b.pub.indexDeposit + 1;
            f.zIndex = a;
            c.css("zIndex", a);
            return this;
          },
          close: function (a) {
            var c = this.ele,
              f = this;
            a = a || 1e3 * parseFloat(c.css("animation-duration")) + 50;
            var d = this.sequence,
              e = b.pub,
              n = f.state().val,
              l = this.cfg.mask && h.eve.domData(c, "ele", "mask"),
              p = "close",
              r = function () {
                if ("min" == n) {
                  delete b.tmp.minQueue[d];
                  var a = 0,
                    g;
                  for (g in b.tmp.minQueue)
                    b.tmp.minQueue[g].css("left", a), (a += b.pub.minWidth);
                }
                b.fn.stateEve("close", d);
                b.fn.stateEve("close", d, !1);
                f.cfg.alias && b.fn.alias(f.cfg.alias, 0);
                h.eve.domData(c);
                delete e.ele[d];
                c.remove();
              };
            "min" == n && ((f.cfg.anim = "slide-bottom"), (p = "min-close"));
            f.cfg.mask
              ? l.hide(function () {
                  this.remove();
                  r();
                }, a)
              : h.timeFn(function () {
                  r();
                }, a);
            this.anim(!0);
            this.state(p);
          },
          anim: function () {
            var a = this.ele,
              c = this.cfg;
            a.hasClass(b.def.anim.start)
              ? a.removeClass(b.def.anim.start).addClass(b.def.anim.end)
              : a.addClass(b.def.anim.start).attr("anim", c.anim || "");
            return this;
          },
          index: function () {
            var a = this.ele,
              c = this.cfg,
              f = this.tmp,
              d = this,
              e = "PC" == b.pub.customerType ? !0 : !1,
              n = b.pub,
              l = c.drag || c.dragSize ? "mousedown.index" : "click.index";
            c.index &&
              a
                .off(e ? l : "touchstart.index")
                .on(e ? l : "touchstart.index", function () {
                  b.fn.stateEve("index", d.sequence);
                  (f.zIndex || a.css("zIndex")) < n.indexDeposit &&
                    d.upIndex(!0);
                });
            return this;
          },
          toClose: function () {
            var a = this.cfg,
              c = b.tmp,
              f = b.pub.ele,
              d = b.cfg,
              k = "PC" == b.pub.customerType ? !0 : !1,
              n = "mousedown.toClose",
              l = b.fn.layerSequence,
              p = b.fn.stateEve,
              r = function (a, b, e) {
                a = (a = h(a.target).parent("." + d.className)) && l(a);
                for (var g in c.toClose)
                  (a && g == a[2]) ||
                    (f[g] && f[g].state().type && 1 > c.toClose[g]
                      ? (p("toClose", g), f[g].close(), delete c.toClose[g])
                      : c.toClose[g]--);
              };
            c.toCloseFn = c.toCloseFn || (a.drag || a.dragSize ? !0 : !1);
            c.toCloseFn || (n = "click.toClose");
            a.toClose &&
              ((c.toClose = c.toClose || {}),
              (c.toClose[this.sequence] = "call" == a.callMode ? 0 : 1),
              h(e)
                .off(k ? n : "touchstart.toClose")
                .on(k ? n : "touchstart.toClose", r));
            return this;
          },
          sizeAdapt: function () {
            var a = this.ele,
              c = this.cfg,
              f = a.child("." + b.def.html.content),
              d = f.height(),
              f = f.html(),
              e = h("<div>")
                .html(f)
                .css({
                  opacity: 1,
                  display: "inline-block",
                })
                .fn(function (a) {
                  h("body").append(a);
                }),
              f = e.width(),
              e = e.height();
            c.sizeAdapt &&
              a.css({
                width: f,
                height: a.height() - d + e,
              });
            return this;
          },
          id: function () {
            this.cfg.id && this.ele.attr("id", this.cfg.id);
            return this;
          },
          class: function () {
            var a = this.ele,
              c = this.cfg,
              f = b.cfg;
            c["class"] &&
              a.addClass(function () {
                var a = h.strAry(c["class"]),
                  b = "",
                  d;
                for (d in a) b = b + f.className + "-" + a[d] + " ";
                return b;
              });
            return this;
          },
          time: function () {
            var a = this.cfg,
              c = this;
            "tipsReg" != a.type &&
              a.time &&
              h.timeFn(function () {
                b.fn.stateEve("time", c.sequence);
                c.state().type && c.close();
              }, a.time);
          },
          box: function () {
            var a = this.cfg,
              c = this.sys,
              b = h(a.box && "auto" != a.box ? a.box : c.box);
            b.append(this.ele).css(function () {
              if (!b.tagName("body") && "static" == b.css("position"))
                return {
                  position: "relative",
                };
            });
            return this;
          },
          only: function () {
            var a = this.sequence,
              c = this.cfg.type,
              f;
            for (f in b.pub.ele) {
              var d = b.pub.ele[f];
              a != d.sequence && c == d.cfg.type && d.close();
            }
            return this;
          },
          state: function (a) {
            var c = this.ele,
              b = this.tmp;
            if (a)
              return (
                "boolean" == typeof a && (a = "normal"),
                (b.state = a),
                c.attr("state", a),
                this
              );
            a = b.state || c.attr("state");
            return {
              0: a,
              1: "normal" == a ? !0 : !1,
              val: a,
              type: "normal" == a ? !0 : !1,
            };
          },
          focus: function () {
            var a = this.ele;
            "prompt" == this.cfg.type &&
              a.child("input[pop],textarea[pop]").focus();
          },
          mask: function (a) {
            a = this.ele;
            var c = this.cfg,
              f = h("<div>")
                .addClass(b.cfg.className)
                .attr("type", b.def.html.mask)
                .css(function () {
                  var a = {
                    zIndex: b.pub.indexDeposit - 2,
                  };
                  "number" == typeof c.mask
                    ? (a.backgroundColor = "rgba(0,0,0," + c.mask + ")")
                    : "string" == c.mask
                    ? (a.backgroundColor = c.mask)
                    : "rgba(0,0,0,.4)" != b.cfg.maskColor &&
                      (a.backgroundColor = b.cfg.maskColor);
                  return a;
                });
            h.eve.domData(a, "ele", "mask", f);
            h(c.box).append(f);
            return this;
          },
          repair: {
            iframe: function () {
              var a = this.ele,
                c = this.cfg,
                f = a.child("iframe[pop]"),
                d = h("<div." + b.cfg.className + "-loadMask>");
              "iframe" == c.title && this.titleHtml(c.src);
              f.on("load", function () {
                h.timeFn(function () {
                  d.hide(d.remove, 500);
                }, 200);
              });
              a.append(d);
            },
            wait: function () {
              this.ele.css("font-size", this.cfg.size);
            },
            lateral: function () {
              var a = ["top", "right", "left", "bottom"],
                c = this.ele,
                b = this.cfg;
              b.direction =
                "number" == typeof b.direction && a[b.direction]
                  ? a[b.direction]
                  : (b.direction =
                      ("string" == typeof b.direction) &
                      (-1 < a.indexOf(b.direction))
                        ? b.direction
                        : a[1]);
              b.anim = "slide-" + b.direction;
              b.place = {};
              if ("top" == b.direction || "bottom" == b.direction)
                c.css("width", ""), (b.place.left = 0);
              if ("left" == b.direction || "right" == b.direction)
                c.css("height", ""), (b.place.top = 0);
              b.place[b.direction] = 0;
            },
            img: function () {
              var a = this.ele,
                c = this,
                f = h("<div." + b.cfg.className + "-loadMask>"),
                d = "." + b.cfg.className + "-" + b.def.html.button.control,
                e = a.child(d + "[type=min]," + d + "[type=max]"),
                n = a.child("img"),
                d = "flipV flipL rotateR reset rotateL enlarge narrow".split(
                  " "
                ),
                l = [],
                p;
              for (p in d) {
                var r = d[p];
                l[p] = ["icon", h("<i." + r + ">"), b.fn.imgControl(n, c)[r]];
              }
              this.state("Image-Loading");
              a.append(f).append(this.html.buttonBox(l));
              e.hide();
              n.on("load", function () {
                h.timeFn(function () {
                  c.state(!0);
                  e.show(200);
                  f.hide(f.remove, 1e3);
                }, 200);
                n.off("load");
                a.child(".pop-content").css("bottom", "");
                b.fn.imgControl(n, c).init();
              });
            },
            mask: function () {
              var a = this.cfg;
              this.ele.css(function () {
                var c = {};
                "rgba(0,0,0,.4)" != b.cfg.maskColor
                  ? (c.backgroundColor = b.cfg.maskColor)
                  : a.color &&
                    ("number" == typeof a.color &&
                      (c.backgroundColor = "rgba(0,0,0," + a.color + ")"),
                    "string" == typeof a.color &&
                      (c.backgroundColor = a.color));
                return c;
              });
            },
            tips: function () {
              var a,
                c = this.cfg,
                b = this.sys;
              for (
                a = h(c.selector)[0];
                a && a instanceof HTMLElement && !h(a).hasScrolled(!0);

              )
                a = a.parentNode;
              b.box = a instanceof Document ? e.body : a;
              c.box = "auto";
            },
          },
          getTitle: function () {
            var a = this.ele,
              c = this.cfg;
            "iframe" == c.type &&
              "iframe" == c.title &&
              ((c = a.child("." + b.cfg.className + "-" + b.def.html.title)),
              (a = a.child("iframe[pop]")),
              a[0].contentWindow.document.title &&
                c.html(a[0].contentWindow.document.title));
            return this;
          },
          contentAdapt: function () {
            var a = this.ele;
            !this.cfg.title &&
              a
                .child("." + b.cfg.className + "-" + b.def.html.content)
                .css("top", 0);
            !this.cfg.button &&
              a
                .child("." + b.cfg.className + "-" + b.def.html.content)
                .css("bottom", 0);
          },
          placeAround: function (a) {
            var c = ["top", "right", "left", "bottom"],
              f = this.cfg,
              e = this.ele,
              k = b.cfg.boundary,
              f = a.attr("direction") ? a.attr("direction") : f.direction,
              n = h("<div." + b.cfg.className + "-tail>"),
              l = {
                auto: function (a) {
                  var c = this.sele,
                    b = this.ele,
                    f = "top";
                  c.t < b.h && c.l < b.w
                    ? (f = "topLeft")
                    : c.t < b.h && c.r < b.w
                    ? (f = "topRight")
                    : c.b < b.h && c.r < b.w
                    ? (f = "bottomRight")
                    : c.b < b.h && c.l < b.w
                    ? (f = "bottomLeft")
                    : c.l < b.h
                    ? (f = "left")
                    : c.r < b.h
                    ? (f = "right")
                    : c.t < b.h
                    ? (f = "top")
                    : c.b < b.h && (f = "bottom");
                  n.attr("direction", f);
                  a[f].call(this);
                },
                bottom: function () {
                  this.ele.box.css({
                    top: this.sele.t - this.ele.h - 10,
                    left: this.sele.l + this.width_d,
                  });
                  n.attr("direction", "bottom");
                },
                left: function () {
                  this.ele.box.css({
                    top: this.sele.t + this.height_d,
                    left: this.sele.w + this.sele.l + 10,
                  });
                  n.attr("direction", "left");
                },
                right: function () {
                  this.ele.box.css({
                    top: this.sele.t + this.height_d,
                    left: this.sele.l - this.ele.w - 10,
                  });
                  n.attr("direction", "right");
                },
                top: function () {
                  this.ele.box.css({
                    top: this.sele.t + this.sele.h + 10,
                    left: this.sele.l + this.width_d,
                  });
                  n.attr("direction", "top");
                },
                topLeft: function () {
                  var a = this;
                  a.ele.box.css(function () {
                    var c = {
                      top: a.sele.h + 10,
                    };
                    0 < a.width_d
                      ? (c.left = a.width_d)
                      : ((c.left = k), a.tail.css("left", a.sele.w / 2 - k));
                    return c;
                  });
                },
                topRight: function () {
                  var a = this;
                  a.ele.box.css(function () {
                    var c = {
                      top: a.sele.h + 10,
                    };
                    0 < a.width_d
                      ? (c.left = a.sele.l + a.width_d)
                      : ((c.left = a.win.w - a.ele.w - k),
                        a.tail.css(
                          "left",
                          a.ele.w - a.sele.w + a.sele.w / 2 + k
                        ));
                    return c;
                  });
                },
                bottomLeft: function () {
                  var a = this;
                  a.ele.box.css(function () {
                    var c = {
                      top: a.sele.t - a.ele.h - 10,
                    };
                    0 < a.width_d
                      ? (c.left = a.width_d)
                      : ((c.left = k), a.tail.css("left", a.sele.w / 2 - k));
                    return c;
                  });
                },
                bottomRight: function () {
                  var a = this;
                  a.ele.box.css(function () {
                    var c = {
                      top: a.sele.t - a.ele.h - 10,
                    };
                    0 < a.width_d
                      ? (c.left = a.sele.l + a.width_d)
                      : ((c.left = a.win.w - a.ele.w - k),
                        a.tail.css(
                          "left",
                          a.ele.w - a.sele.w + a.sele.w / 2 + k
                        ));
                    return c;
                  });
                },
              },
              f = "number" == typeof f && c[f] ? c[f] : (f = (c.indexOf(f), f));
            l[f ? f : "auto"].call(
              (function () {
                var c = {
                    box: a,
                    w: a.width(!0),
                    h: a.height(!0),
                    t: a.offset().y,
                    l: a.offset().x,
                  },
                  b = {
                    box: e,
                    w: e.width(!0),
                    h: e.height(!0),
                  };
                c.r = d.innerWidth - c.l - c.w;
                c.b = d.innerHeight - c.t - c.h;
                c.th = c.t + c.h;
                c.lw = c.l + c.w;
                e.append(n);
                return {
                  tail: n,
                  win: {
                    w: d.innerWidth,
                    h: d.innerHeight,
                  },
                  sele: c,
                  ele: b,
                  width_d: (c.w - b.w) / 2,
                  height_d: (c.h - b.h) / 2,
                };
              })(),
              l
            );
            return this;
          },
          layReg: function () {
            var a = new b.fn.pop_layer(this),
              c = b.tmp.layReg;
            if (c)
              for (var f in c[this.cfg.type]) {
                var d = c[this.cfg.type][f],
                  e = d[1];
                a[d[0]](e[0], e[1], e[2]);
              }
            return this;
          },
          titleHtml: function (a) {
            var c = this.ele.child(
              "." + b.cfg.className + "-" + b.def.html.title
            );
            0 < c.child("p[pop]").length
              ? c.child("p[pop]").html(a)
              : c.html(a);
          },
          mobileDevices: function () {
            !this.cfg.maxWidth &&
              this.ele.css("maxWidth", d.innerWidth - 2 * b.cfg.boundary);
            !this.cfg.maxHeight &&
              this.ele.css("maxHeight", d.innerHeight - 2 * b.cfg.boundary);
            return this;
          },
          applyPack: function () {
            var a =
                "box id class sizeAdapt place anim drag dragSize index toClose time only focus getTitle mask".split(
                  " "
                ),
              c = this.cfg,
              f = this.tmp;
            f.applyPack = f.applyPack || {};
            this.repair[c.type] && this.repair[c.type].call(this);
            "PC" != b.pub.customerType && this.mobileDevices();
            for (var d in a) {
              var e = a[d];
              this[e] &&
                (c[e]
                  ? (this[e](c[e]), (f.applyPack[e] = !0))
                  : (f.applyPack[e] = !1));
            }
            this.contentAdapt();
            f.width = c.width;
            f.height = c.height;
            return this;
          },
          pop_layer: function () {
            return new b.fn.pop_layer(this);
          },
        },
        imgControl: function (a, c) {
          var f = c.ele,
            d = {
              init: function () {
                var c = {
                  width: a.width(),
                  height: a.height(),
                  marginLeft: 0,
                  marginTop: 0,
                };
                a.css(c).cache({
                  height: c.height,
                  width: c.width,
                });
                d.adaptive(c);
                d.drag();
              },
              drag: function () {
                var c = !1;
                a.off("mousedown").on("mousedown", function (b) {
                  var d = parseFloat(a.css("left")),
                    f = parseFloat(a.css("top")),
                    g = b.clientX,
                    n = b.clientY;
                  c = !0;
                  a.attr("drag", "");
                  b.preventDefault && b.preventDefault();
                  h(e)
                    .on("mousemove", function (b) {
                      c &&
                        a.css({
                          left: d + (b.clientX - g),
                          top: f + (b.clientY - n),
                        });
                    })
                    .on("mouseup", function () {
                      h(e).off("mousemove").off("mouseup");
                      a.removeAttr("drag");
                      c = !1;
                    });
                });
              },
              adaptive: function (c) {
                var e = f.width(!0),
                  g = f
                    .child("." + b.cfg.className + "-" + b.def.html.content)
                    .height(!0),
                  k = 100;
                for (
                  a.css({
                    left: (e - c.width) / 2,
                    top: (g - c.height) / 2,
                  });
                  (k / 100) * c.width > e || (k / 100) * c.height > g;

                )
                  k -= 5;
                a.cache("size", k);
                d.narrow("init");
                100 > k && d.news("图像处于缩放状态");
              },
              news: function (a) {
                var c = h("<p[pop].news>").html(a);
                f.child("p[pop].news").remove();
                f.append(c);
                h.timeFn(function () {
                  c.hide(c.remove, 50);
                }, 3e3);
              },
              narrow: function (c) {
                var b = a.cache("width"),
                  f = a.cache("height"),
                  e = a.cache("size") || 100,
                  e = 100 >= e ? e - 5 : e - 10,
                  e = 5 >= e ? 5 : e,
                  g = e / 100;
                a.css({
                  width: b * g,
                  height: f * g,
                  marginLeft: (b - b * g) / 2,
                  marginTop: (f - f * g) / 2,
                }).cache("size", e);
                "init" != c && d.news("图像比例：" + e + "%");
              },
              enlarge: function () {
                var c = a.cache("width"),
                  b = a.cache("height"),
                  f = a.cache("size") || 100,
                  f = 100 >= f ? f + 5 : f + 10,
                  f = 300 <= f ? 300 : f,
                  e = f / 100;
                a.css({
                  width: c * e,
                  height: b * e,
                  marginLeft: (c - c * e) / 2,
                  marginTop: (b - b * e) / 2,
                }).cache("size", f);
                d.news("图像比例：" + f + "%");
              },
              rotateL: function () {
                var c = a.cache("rotate") || 0;
                a.cache("rotate", c - 90);
                d.transform();
                d.news("左侧旋转");
              },
              rotateR: function () {
                var c = a.cache("rotate") || 0;
                a.cache("rotate", c + 90);
                d.transform();
                d.news("右侧旋转");
              },
              flipL: function () {
                var c = a.cache("rotateY") || 0;
                a.cache("rotateY", 0 < c ? 0 : 180);
                d.transform();
                d.news("水平翻转");
              },
              flipV: function () {
                var c = a.cache("rotateX") || 0;
                a.cache("rotateX", 0 < c ? 0 : 180);
                d.transform();
                d.news("垂直翻转");
              },
              reset: function (c) {
                a.hide(function () {
                  for (
                    var c = a.cache("width"),
                      e = a.cache("height"),
                      g = f.width(!0),
                      k = f
                        .child("." + b.cfg.className + "-" + b.def.html.content)
                        .height(!0),
                      h = 100;
                    (h / 100) * c > g || (h / 100) * e > k;

                  )
                    h -= 5;
                  a.css({
                    width: c,
                    heighe: e,
                    left: (g - c) / 2,
                    top: (k - e) / 2,
                    marginLeft: 0,
                    marginTop: 0,
                    transform: "",
                  });
                  a.cache({
                    size: h,
                    rotate: 0,
                    rotateX: 0,
                    rotateY: 0,
                  });
                  d.narrow("init");
                  a.show(500);
                });
                d.news("图像复位");
              },
              transform: function () {
                var c = "rotate(" + (a.cache("rotate") || 0) + "deg)",
                  b = "rotateX(" + (a.cache("rotateX") || 0) + "deg)",
                  f = "rotateY(" + (a.cache("rotateY") || 0) + "deg)";
                a.css("transform", c + b + f);
              },
              up: function () {
                for (
                  var b = this.config,
                    b = h(b.father).child(b.selector),
                    f = a.cache("displayImg")[0],
                    e = 0,
                    g = 0;
                  g < b.length;
                  g++
                )
                  b[g] == f && (e = g);
                e = 0 >= e ? b.length - 2 : e - 1;
                b = h(b[e]);
                f = b.attr("src");
                e = b.attr("title");
                a.attr("src", f).cache("displayImg", b);
                d.reset();
                d.news("上一张图片");
                c.titleHtml(e || f);
              },
              down: function () {
                for (
                  var b = this.config,
                    b = h(b.father).child(b.selector),
                    f = a.cache("displayImg")[0],
                    e = 0,
                    g = 0;
                  g < b.length;
                  g++
                )
                  b[g] == f && (e = g);
                e = e >= b.length - 2 ? 0 : e + 1;
                b = h(b[e]);
                f = b.attr("src");
                e = b.attr("title");
                a.attr("src", f).cache("displayImg", b);
                d.reset();
                d.news("下一张图片");
                c.titleHtml(e || f);
              },
            };
          return d;
        },
        layerSequence: function (a) {
          a = a instanceof HTMLElement ? a : a[0];
          var c = h.eve.domData;
          a = c(a, "ele", "sequence");
          var c = b.pub.ele,
            f = void 0;
          a &&
            c[a] &&
            (f = {
              0: c[a].ele,
              1: c[a],
              2: a,
              ele: c[a].ele,
              obj: c[a],
              sequence: a,
            });
          return f;
        },
        controlKey: {
          min: function (a) {
            var c = b.fn.layerSequence(
              h(a.target).parent("." + b.cfg.className)
            );
            a = c[0];
            var f = c[2],
              c = b.pub.ele[f],
              d = c.tmp,
              e = c.state().val,
              n = b.pub,
              l = b.tmp;
            l.minQueue = l.minQueue || {};
            if (0 < ("normal" == e || "max" == e ? 1 : 0))
              (d[f + "minStyle"] = a.attr("style")),
                (d[f + "minMaxCompatible"] = "max" == e ? !0 : !1),
                c.state("min"),
                a
                  .css({
                    bottom: -2,
                    left: Object.keys(l.minQueue).length * n.minWidth,
                    width: n.minWidth,
                    minWidth: "",
                    height: a
                      .child("." + b.cfg.className + "-" + b.def.html.title)
                      .height(),
                    minHeight: "",
                    top: "",
                    right: "",
                  })
                  .child(
                    "." +
                      b.cfg.className +
                      "-" +
                      b.def.html.button.control +
                      "[type=max]"
                  )
                  .css("display", "none"),
                (l.minQueue[f] = a);
            else {
              c.state(d[f + "minMaxCompatible"] ? "max" : "normal");
              a.attr("style", d[f + "minStyle"])
                .child(
                  "." +
                    b.cfg.className +
                    "-" +
                    b.def.html.button.control +
                    "[type=max]"
                )
                .css("display", "");
              delete l.minQueue[f];
              delete d[f + "minStyle"];
              a = 0;
              for (var m in l.minQueue)
                l.minQueue[m].css("left", a), (a += n.minWidth);
            }
            b.fn.stateEve("min", c.sequence);
          },
          max: function (a) {
            var c = b.fn.layerSequence(
              h(a.target).parent("." + b.cfg.className)
            );
            a = c[0];
            var c = c[2],
              f = b.pub.ele[c],
              d = f.tmp;
            0 < (f.state().type ? 1 : 0)
              ? ((d[c + "maxStyle"] = a.attr("style")),
                f.state("max"),
                a.css({
                  bottom: 0,
                  left: 0,
                  top: 0,
                  right: 0,
                  width: "",
                  height: "",
                  borderRadius: 0,
                }),
                f.upIndex())
              : (f.state(!0),
                a.attr("style", d[c + "maxStyle"]),
                delete d[c + "minStyle"]);
            b.fn.stateEve("min", f.sequence);
          },
          close: function (a) {
            a = b.fn.layerSequence(h(a.target).parent("." + b.cfg.className));
            b.pub.ele[a[2]].close();
          },
        },
        buttonEvent: {
          all: {
            close: function () {
              b.fn.layerSequence(this.htmlDOM).obj.close();
            },
          },
          prompt: {
            getText: function () {
              var a = b.fn.layerSequence(this.htmlDOM);
              return h(a[0]).child("input[pop],textarea[pop]").val();
            },
            setText: function (a) {
              var c = b.fn.layerSequence(this.htmlDOM);
              h(c[0]).child("input[pop],textarea[pop]").val(a);
              c[1].focus();
            },
            delText: function (a) {
              a = b.fn.layerSequence(this.htmlDOM);
              h(a[0]).child("input[pop],textarea[pop]").val("");
              a[1].focus();
            },
          },
        },
        stateEve: function (a, c, f) {
          var d = b.tmp;
          d.stateEve = d.stateEve || {};
          "function" == typeof f
            ? "load" == a
              ? h.timeFn(
                  f,
                  1e3 * parseFloat(b.pub.ele[c].ele.css("animation-duration")) +
                    50
                )
              : ((d.stateEve[c] = d.stateEve[c] || {}), (d.stateEve[c][a] = f))
            : void 0 == f || f
            ? d.stateEve[c] &&
              d.stateEve[c][a] &&
              b.pub.ele[c] &&
              ((f = new b.fn.pop_Event(b.pub.ele[c])),
              d.stateEve[c][a].call(f, f))
            : d.stateEve[c] && delete d.stateEve[c];
        },
        alias: function (a, c) {
          var d = b.tmp,
            e = "pop";
          d.alias = d.alias || {};
          if ("string" == typeof a) {
            for (var k = 0; k < a.length; k++)
              e += a.charCodeAt(k).toString(16);
            if (c || void 0 == c)
              if (c) (c.cfg.alias = a), (d.alias[e] = c);
              else return d.alias[e];
            else delete d.alias[e];
          }
        },
        popInit: function () {
          this.pop = function () {
            this.config = b.cfg;
            this.__proto__ = h.objAssign(b.layer, b.fn.globalFn);
            this.version = b.pub.version;
            this.clientInfo = b.pub.customerType;
            this.pcIn = "PC" == this.clientInfo ? !0 : !1;
            return this;
          };
          if (d.pop) return !1;
          b.pub.pop = d.pop = new this.pop();
          this.label();
          this.globalFn.cfg(b.cfg);
          return !0;
        },
        label: function () {
          var a = h(h("script")[h("script").length - 1]),
            c = h.strToObj(a.html()) || {},
            d;
          for (d in b.cfg)
            a.attr(d) &&
              ((c[d] = h.strToObj(a.attr(d)) || a.attr(d)), a.removeAttr(d));
          h("head").append(
            (b.tmp.styleDOM = h("<style>").attr({
              name: "pop-layer",
              medias: "all",
              type: "text/css",
              rel: "stylesheet",
            }))
          );
          a.attr({
            name: "pop-layer",
            version: b.pub.version,
            type: "text/javascript",
          })
            .html("pop弹出层 - 原生JS编写开发")
            .removeAttr("src");
          h.objAssign(b.cfg, c);
        },
        simplify: function () {
          var a = function () {
              var c = arguments;
              if (0 < arguments.length && a[c[0]])
                a[c[0]](c[1], c[2], c[3], c[4], c[5]);
            },
            c = b.cfg.simplifyAry,
            d = b.pub.pop.__proto__,
            e;
          for (e in c) {
            var k = c[e];
            d[k] && (a[e] = d[k]);
          }
          return a;
        },
        globalFn: {
          cfg: function (a, c) {
            var f = {},
              e = {
                className: function (a) {
                  "string" == typeof a &&
                    0 < a.length &&
                    (b.tmp.styleDOM.html(
                      m[0].replace(/\.pop/g, "." + a) + m[1]
                    ),
                    (b.cfg.className = a));
                },
                viewport: function (a) {
                  a &&
                    !b.tmp.viewport &&
                    ((b.tmp.viewport = h("<meta>").attr({
                      pop: "",
                      name: "viewport",
                      content: "width=device-width,initial-scale=1.0",
                    })),
                    h("head").prepend(b.tmp.viewport),
                    (b.cfg.viewport = !0));
                  !a &&
                    b.tmp.viewport &&
                    (b.tmp.viewport.remove(),
                    delete b.tmp.viewport,
                    (b.cfg.viewport = !1));
                },
                window: function (a) {
                  if (a) {
                    var c = b.pub.pop.__proto__;
                    b.tmp.window = {};
                    for (var f in c) (b.tmp.window[f] = d[f]), (d[f] = c[f]);
                    b.cfg.window = !0;
                  }
                  if (!a && b.tmp.window)
                    for (f in ((a = b.tmp.window), a))
                      delete window[f], (d[f] = a[f]);
                  b.cfg.window = !1;
                },
                simplify: function (a) {
                  a && ((d.p = b.fn.simplify()), (b.cfg.simplify = !0));
                  !a && d.p && (delete d.p, (b.cfg.simplify = !1));
                },
                simplifyAry: function (a) {
                  "object" == typeof a &&
                    (h.objAssign(b.cfg.simplifyAry, a),
                    b.cfg.simplify && (d.p = b.fn.simplify()));
                },
                resize: function (a) {
                  h(d).off("resize.pop");
                  a &&
                    h(d).on("resize.pop", function () {
                      var a = d.innerWidth,
                        c = d.innerHeight,
                        f;
                      for (f in b.pub.ele) {
                        var e = b.pub.ele[f];
                        e.tmp.left + e.tmp.width > a &&
                          ((e.tmp.left = a - e.tmp.width - b.cfg.boundary),
                          (e.tmp.left =
                            e.tmp.left < b.cfg.boundary
                              ? b.cfg.boundary
                              : e.tmp.left));
                        e.tmp.top + e.tmp.height > c &&
                          ((e.tmp.top = c - e.tmp.height - b.cfg.boundary),
                          (e.tmp.top =
                            e.tmp.top < b.cfg.boundary
                              ? b.cfg.boundary
                              : e.tmp.top));
                        e.ele.css({
                          top: e.tmp.top,
                          left: e.tmp.left,
                        });
                      }
                    });
                },
              };
            void 0 != c ? (f[a] = c) : (f = a);
            for (var k in f)
              if (e[k]) e[k](f[k]);
              else f[k];
          },
          close: function (a) {
            if ("closeAll" == a)
              for (var c in b.pub.ele) {
                var d = b.pub.ele[c];
                d.close();
              }
            else if (b.layer[a])
              for (c in b.pub.ele)
                (d = b.pub.ele[c]), d.cfg.type == a && d.close();
            else (a = this.getLayer(a)) && a.close && a.close();
          },
          getAlias: function (a) {
            return (a = b.fn.alias(a)) && new b.fn.pop_layer(a);
          },
          getLayer: function (a) {
            var c, d;
            if (a) {
              if ((c = this.getAlias(a))) return c;
              c = "string" == typeof a[0] || "." == a[0] || "#" == a[0];
              var e = a.substring(1).replace(/[\w\[\]=]/g, "").length;
              if (c && 0 == e && 0 < (d = h(a)).length && b.fn.layerSequence(d))
                return new b.fn.pop_layer(b.fn.layerSequence(d).obj);
            }
          },
          getjQuery: function (a) {
            return (a = this.getLayer(a)) && a.jQuery;
          },
          getInput: function (a) {
            if ((a = this.getLayer(a)) && "prompt" == a.config.type)
              return h(a.htmlDOM).child("input[pop],textarea[pop]").val();
          },
        },
        pop_Event: function (a) {
          var c = b.fn.buttonEvent;
          this.htmlDOM = a.ele[0];
          this.temporary = a.tmp;
          this.config = a.cfg;
          window.jQuery &&
            window.jQuery.fn &&
            window.jQuery.fn.jquery &&
            (this.$ = this.jQuery = window.jQuery(this.htmlDOM));
          for (var d in c.all) this.__proto__[d] = c.all[d];
          for (d in c[this.config.type])
            this.__proto__[d] = c[this.config.type][d];
          return this;
        },
        layerData: function (a, c, b, d, e, n) {
          c = Array.prototype.slice.call(c);
          this.cfg = {
            title: "pop弹出层",
            content: "欢迎使用pop弹出层插件，这是默认演示文字。",
            place: 5,
            box: "body",
            anim: "fadeIn-zoom",
          };
          h.objAssign(this.cfg, a instanceof Array ? a[0] : a);
          if (
            c[0] instanceof Object &&
            0 == c[0] instanceof jQuery &&
            0 == c[0] instanceof HTMLElement
          )
            h.objAssign(this.cfg, c[0]);
          else {
            if (b instanceof Array)
              for (var f in b) void 0 != c[f] && (this.cfg[b[f]] = c[f]);
            "function" == typeof b && h.objAssign(this.cfg, new b(c, this.cfg));
          }
          a instanceof Array && h.objAssign(this.cfg, a[1]);
          this.cfg.type = e;
          this.cfg.callMode = d ? "element" : "call";
          this.sys = n || {};
          this.reg = 1;
          return this;
        },
        layerInit: function (a) {
          this.cfg = a.cfg;
          this.sys = a.sys;
          this.ele = b.html.box(this.cfg, this.sys);
          this.sequence = h.generateUUID("pop", "_");
          h.eve.domData(this.ele[0], "ele", "sequence", this.sequence);
          this.pub = b.pub;
          this.html = b.html;
          this.tmp = {
            state: "normal",
          };
          this.__proto__ = b.fn.layer;
          b.pub.ele = b.pub.ele || {};
          b.pub.ele[this.sequence] = this;
          return this;
        },
        pop_layerReg: function (a, c, d, e) {
          this.htmlDOM
            ? a()
            : ((b.tmp.layReg = b.tmp.layReg || {}),
              (b.tmp.layReg[this.config.type] =
                b.tmp.layReg[this.config.type] || []),
              b.tmp.layReg[this.config.type].push([c, [d, e]]));
        },
        pop_layer: function (a) {
          var c = b.fn.pop_layerReg;
          a.reg
            ? (this.config = a.cfg)
            : ((this.config = a.cfg),
              (this.temporary = a.tmp),
              (this.htmlDOM = a.ele[0]),
              window.jQuery &&
                window.jQuery.fn &&
                window.jQuery.fn.jquery &&
                (this.$ = this.jQuery = window.jQuery(this.htmlDOM)));
          this.__proto__ = {
            id: function (b) {
              c.call(
                this,
                function () {
                  a.cfg.id = b;
                  a.cfg.id && a.id();
                },
                "mask",
                b
              );
              return this;
            },
            mask: function (b) {
              c.call(
                this,
                function () {
                  a.cfg.mask = b || !0;
                  a.mask();
                },
                "mask",
                b
              );
              return this;
            },
            close: function () {
              c.call(
                this,
                function () {
                  a.close();
                },
                "close"
              );
            },
            alias: function (d) {
              c.call(
                this,
                function () {
                  h.typeOf(d, [2, 3]) && b.fn.alias(d, a);
                },
                "alias",
                d
              );
              return this;
            },
            stateEve: function (d, e) {
              c.call(
                this,
                function () {
                  h.typeOf(d, [2, 3]) &&
                    h.typeOf(e, ["function"]) &&
                    b.fn.stateEve(d, a.sequence, e);
                },
                "stateEve",
                d,
                e
              );
              return this;
            },
            control: function (d) {
              c.call(
                this,
                function () {
                  var c = a.ele.child(
                    "." +
                      b.cfg.className +
                      "-" +
                      b.def.html.button.control +
                      "[type=" +
                      d +
                      "]"
                  );
                  0 < c.length && c[0].click();
                },
                "control",
                d
              );
              return this;
            },
          };
          return this;
        },
      },
      html: {
        box: function (a, c) {
          return h("<div." + b.cfg.className + ">")
            .append(function () {
              return b.html.title(a.title);
            })
            .append(function () {
              if (a.content || a.html)
                return b.html[a.content ? "content" : "html"](
                  a.content || a.html
                );
              if (c.html) return b.html.html(b.html[c.html](a));
            })
            .append(function () {
              return b.html.buttonBox(a.button);
            })
            .append(function () {
              return b.html.buttonSpcl(a.buttonSpcl);
            })
            .attr({
              type: a.type,
              state: "normal",
            })
            .css({
              width: a.width,
              height: a.height,
              zIndex: b.pub.indexDeposit || b.cfg.zIndex,
              minWidth: void 0 != a.minWidth ? a.minWidth : b.cfg.minWidth,
              minHeight: void 0 != a.minHeight ? a.minHeight : b.cfg.minHeight,
              maxWidth: a.maxWidth,
              maxHeight: a.maxHeight,
            })
            .fn(function (a) {
              b.pub.indexDeposit = b.pub.indexDeposit
                ? b.pub.indexDeposit + 1
                : b.cfg.zIndex + 1;
            });
        },
        title: function (a) {
          return (
            a &&
            h("<div." + b.cfg.className + "-" + b.def.html.title + ">").html(
              h("<p[pop]>").html(a)
            )
          );
        },
        content: function (a) {
          return (
            a &&
            h("<div." + b.cfg.className + "-" + b.def.html.content + ">").html(
              h("<p[pop]>").html(a)
            )
          );
        },
        html: function (a) {
          return (
            a &&
            h("<div." + b.cfg.className + "-" + b.def.html.content + ">").html(
              a
            )
          );
        },
        buttonBox: function (a) {
          a = a ? (h.multiAry(a) ? a : [a]) : [];
          return (
            0 < a.length &&
            h("<div." + b.cfg.className + "-" + b.def.html.buttonBox + ">").fn(
              function (c) {
                for (var d in a)
                  0 < a[d].length && c.prepend(b.html.button(a[d]));
              }
            )
          );
        },
        button: function (a) {
          a = {
            type: a[0] || a.type,
            html: a[1] || a.html || "",
            eve: a[2] || a.eve || function () {},
            eveType: a.eveType || "click",
            class: a["class"]
              ? b.cfg.className + "-" + a["class"]
              : b.cfg.className + "-" + b.def.html.button.commonly,
            title: a.title || "",
          };
          return h("<button." + a["class"] + ">")
            .html(a.html)
            .attr({
              type: a.type,
              title: a.title,
            })
            .on(
              a.eveType,
              {
                layerSequence: b.fn.layerSequence,
                className: "." + b.cfg.className,
              },
              function (c, d, e) {
                c = d.layerSequence(e.parent(d.className)).obj;
                Event = new b.fn.pop_Event(c);
                a.eve.call(Event, Event);
                b.fn.stateEve("button", c.sequence);
              }
            );
        },
        buttonSpcl: function (a) {
          a = h.strAry(a);
          return (
            0 < a.length &&
            h("<div." + b.cfg.className + "-" + b.def.html.buttonSpcl + ">").fn(
              function (c) {
                var d = b.def.specialButton,
                  e = b.fn.controlKey,
                  k;
                for (k in d)
                  -1 < a.indexOf(d[k]) &&
                    c.prepend(
                      h(
                        "<button." +
                          b.cfg.className +
                          "-" +
                          b.def.html.button.control +
                          ">"
                      )
                        .attr("type", d[k])
                        .on("click", function (a) {
                          var c = h(a.target).attr("type");
                          e[c] && e[c](a);
                        })
                    );
              }
            )
          );
        },
        text: function (a) {
          var c = a.row ? "textarea" : "input",
            b = 0 == a.placeholder.indexOf("pwd:");
          a.placeholder = a.placeholder || "";
          return h("<" + c + ">")
            .attr("pop", "")
            .attr({
              placeholder: b ? a.placeholder.substring(4) : a.placeholder,
            })
            .fn(function (c) {
              !a.row && c.attr("type", b ? "password" : "text");
            });
        },
        iframe: function (a) {
          a.src = a.src.replace(/^:/i, "http://").replace(/^s:/i, "https://");
          return h("<iframe>")
            .attr({
              src: a.src,
            })
            .attr("pop", "");
        },
        img: function (a) {
          return h("<img>").attr(function () {
            var c = {
              draggable: "false",
            };
            a.src && "auto" != a.src && (c.src = a.src);
            c.pop = "";
            return c;
          });
        },
      },
      layer: {
        alert: function () {
          var a = new b.fn.layerData(
            [
              {
                title: "提示",
                width: 350,
                height: 200,
                drag: !1,
                toClose: !1,
                button: [
                  "primary",
                  "我知道了",
                  function () {
                    this.close();
                  },
                ],
              },
              {
                dragSize: !1,
                index: !1,
                only: !1,
                buttonSpcl: "close",
              },
            ],
            arguments,
            function (a, b) {
              this.button = b.button;
              this.content = "string" == typeof a[0] ? a[0] : b.content;
              this.title = "string" == typeof a[1] ? a[1] : b.title;
              "string" == typeof a[1]
                ? (this.button[2] =
                    "function" == typeof a[2] ? a[2] : b.button[2])
                : "function" == typeof a[1] && (this.button[2] = a[1]);
              return this;
            },
            event,
            "alert"
          );
          return new b.fn.layerInit(a).applyPack().pop_layer();
        },
        confirm: function () {
          var a = new b.fn.layerData(
            [
              {
                title: "请注意",
                width: 350,
                height: 200,
                drag: !1,
                toClose: !1,
                button: [
                  [
                    "primary",
                    "确定",
                    function () {
                      this.close();
                    },
                  ],
                  [
                    "default",
                    "取消",
                    function () {
                      this.close();
                    },
                  ],
                ],
              },
              {
                dragSize: !1,
                index: !1,
                only: !1,
                buttonSpcl: "close",
              },
            ],
            arguments,
            function (a, b) {
              this.button = b.button;
              this.title = "string" == typeof a[1] ? a[1] : b.title;
              this.content = "string" == typeof a[0] ? a[0] : b.content;
              "string" == typeof a[0] && "string" == typeof a[1]
                ? ((this.button[0][2] =
                    "function" == typeof a[2] ? a[2] : b.button[0][2]),
                  (this.button[1][2] =
                    "function" == typeof a[3] ? a[3] : b.button[1][2]))
                : "function" == typeof a[1] &&
                  "function" == typeof a[1] &&
                  ((this.button[0][2] =
                    "function" == typeof a[1] ? a[1] : b.button[0][2]),
                  (this.button[1][2] =
                    "function" == typeof a[2] ? a[2] : b.button[1][2]));
              return this;
            },
            event,
            "confirm"
          );
          return new b.fn.layerInit(a).applyPack().pop_layer();
        },
        prompt: function () {
          var a = new b.fn.layerData(
            [
              {
                title: "请输入",
                width: 350,
                height: 200,
                drag: !1,
                toClose: !1,
                button: [
                  [
                    "primary",
                    "确定",
                    function () {
                      this.close();
                    },
                  ],
                  [
                    "default",
                    "取消",
                    function () {
                      this.close();
                    },
                  ],
                ],
                placeholder: "此处输入...",
                row: !1,
                focus: !0,
              },
              {
                dragSize: !1,
                content: !1,
                html: !1,
                index: !1,
                only: !1,
                buttonSpcl: "close",
              },
            ],
            arguments,
            function (a, b) {
              this.button = b.button;
              this.row = "boolean" == typeof a[0] ? a[0] : b.row;
              this.placeholder = "string" == typeof a[0] ? a[0] : a[1];
              this.title =
                "boolean" == typeof a[0] && "string" == typeof a[2]
                  ? a[2]
                  : "string" == typeof a[0] && "string" == typeof a[1]
                  ? a[1]
                  : b.title;
              "boolean" == typeof a[0] && "string" == typeof a[2]
                ? ((this.button[0][2] =
                    "function" == typeof a[3] ? a[3] : b.button[0][2]),
                  (this.button[1][2] =
                    "function" == typeof a[4] ? a[4] : b.button[1][2]))
                : "boolean" == typeof a[0] && "function" == typeof a[2]
                ? ((this.button[0][2] =
                    "function" == typeof a[2] ? a[2] : b.button[0][2]),
                  (this.button[1][2] =
                    "function" == typeof a[3] ? a[3] : b.button[1][2]))
                : "string" == typeof a[0] && "string" == typeof a[1]
                ? ((this.button[0][2] =
                    "function" == typeof a[2] ? a[2] : b.button[0][2]),
                  (this.button[1][2] =
                    "function" == typeof a[3] ? a[3] : b.button[1][2]))
                : "string" == typeof a[0] &&
                  "function" == typeof a[1] &&
                  ((this.button[0][2] =
                    "function" == typeof a[1] ? a[1] : b.button[0][2]),
                  (this.button[1][2] =
                    "function" == typeof a[2] ? a[2] : b.button[1][2]));
              return this;
            },
            event,
            "prompt",
            {
              html: "text",
            }
          );
          return new b.fn.layerInit(a).applyPack().pop_layer();
        },
        news: function () {
          var a = new b.fn.layerData(
            [
              {
                content: !1,
                html: !1,
                time: 3e3,
                only: !1,
              },
              {
                title: !1,
                width: "",
                height: "",
                drag: !1,
                toClose: !1,
                button: !1,
                dragSize: !1,
                index: !1,
                buttonSpcl: !1,
                minWidth: 80,
                minHeight: "",
                maxWidth: "50%",
                maxHeight: "",
              },
            ],
            arguments,
            function (a, b) {
              this.content = "string" == typeof a[0] && a[0];
              this.time = "number" == typeof a[1] ? a[1] : b.time;
              this.box = ("number" == typeof a[1] ? a[2] : a[1]) || "body";
              this.only = "boolean" == typeof a[3] ? a[3] : a[2];
              return this;
            },
            event,
            "news"
          );
          return new b.fn.layerInit(a).applyPack().pop_layer();
        },
        iframe: function () {
          var a = new b.fn.layerData(
            [
              {
                title: "iframe",
                getTitle: !0,
                width: 600,
                height: 400,
                drag: !0,
                dragSize: !0,
                toClose: !1,
                index: !0,
                buttonSpcl: "min max close",
                src: ":www.baidu.com",
                button: !1,
              },
              {
                only: !1,
                content: !1,
                html: !1,
              },
            ],
            arguments,
            function (a, b) {
              this.src = "string" == typeof a[0] ? a[0] : b.src;
              this.title = "string" == typeof a[1] ? a[1] : b.title;
              this.getTitle =
                "boolean" == typeof a[1]
                  ? a[1]
                  : "boolean" == typeof a[2]
                  ? a[2]
                  : b.getTitle;
              return this;
            },
            event,
            "iframe",
            {
              html: "iframe",
            }
          );
          return new b.fn.layerInit(a).applyPack().pop_layer();
        },
        custom: function () {
          var a = new b.fn.layerData(
            [
              {
                width: "60%",
                height: "60%",
                drag: !0,
                dragSize: !0,
                toClose: !1,
                index: !0,
                buttonSpcl: "close",
                button: !1,
                html: !1,
                only: !1,
              },
              {
                getTitle: !1,
              },
            ],
            arguments,
            function (a, b) {
              return this;
            },
            event,
            "custom"
          );
          return new b.fn.layerInit(a).applyPack().pop_layer();
        },
        lateral: function () {
          var a = new b.fn.layerData(
            [
              {
                title: !1,
                height: 500,
                width: 500,
                toClose: !0,
                direction: 1,
                buttonSpcl: !1,
                button: !1,
                html: !1,
                only: !1,
              },
              {
                index: !1,
                drag: !1,
                dragSize: !1,
                maxWidth: "100%",
                minWidth: "0%",
                maxHeight: "100%",
                minHeight: "0%",
              },
            ],
            arguments,
            function (a, b) {
              ["html", "direction"];
              this.html = a[0] ? a[0] : b.html;
              this.direction = a[1];
              this.height = a[2] ? a[2] : b.height;
              this.width = a[2] ? a[2] : b.width;
            },
            event,
            "lateral"
          );
          return new b.fn.layerInit(a).applyPack().pop_layer();
        },
        wait: function () {
          var a = new b.fn.layerData(
            [
              {
                only: !1,
                mask: !1,
                size: 14,
                content: "",
              },
              {
                height: "",
                width: "",
                title: !1,
                toClose: !1,
                direction: !1,
                html: !1,
                buttonSpcl: !1,
                button: !1,
                index: !1,
                drag: !1,
                dragSize: !1,
                maxWidth: "100%",
                minWidth: "0%",
                maxHeight: "100%",
                minHeight: "0%",
              },
            ],
            arguments,
            function (a, b) {
              this.box = a[0] ? a[0] : b.box;
              this.content = "string" == typeof a[1] ? a[1] : b.content;
              this.size = "number" == typeof a[1] ? a[1] : a[2] || b.size;
              return this;
            },
            event,
            "wait"
          );
          return new b.fn.layerInit(a).applyPack().pop_layer();
        },
        tips: function () {
          var a = new b.fn.layerData(
              [
                {
                  direction: !1,
                  title: !1,
                  selector: !1,
                  maxWidth: 200,
                  time: 3e3,
                  height: "",
                  width: "",
                },
                {
                  buttonSpcl: !1,
                  button: !1,
                  mask: !1,
                  only: !1,
                  toClose: !1,
                  index: !1,
                  drag: !1,
                  dragSize: !1,
                  place: !1,
                  box: !1,
                  minWidth: "0%",
                  maxHeight: "100%",
                  minHeight: "0%",
                },
              ],
              arguments,
              function (a, b) {
                this.selector = a[0] ? a[0] : b.selector;
                this.content = a[1] ? a[1] : b.content;
                this.title = "string" == typeof a[2] ? a[2] : !1;
                this.time = ("string" == typeof a[2] ? a[3] : a[2]) || b.time;
                this.direction =
                  ("string" == typeof a[2] ? a[4] : a[3]) || b.direction;
                return this;
              },
              event,
              "tips"
            ),
            c = h(a.cfg.selector);
          if (0 < c.length)
            return (
              (c = 1 < c.length ? h(c[0]) : c),
              (a = new b.fn.layerInit(a).applyPack().placeAround(c)),
              a.pop_layer()
            );
        },
        tipsReg: function () {
          var a = new b.fn.layerData(
            [
              {
                direction: !1,
                selector: !1,
                label: "title",
                labelTitle: "h",
                maxWidth: 200,
                time: 3e3,
              },
              {
                title: !1,
                html: !1,
                content: !1,
                mask: !1,
                only: !1,
                height: "none",
                width: "none",
                toClose: !1,
                index: !1,
                drag: !1,
                dragSize: !1,
                place: !1,
                minWidth: "0%",
                maxHeight: "100%",
                minHeight: "0%",
              },
            ],
            arguments,
            ["selector", "label", "labelTitle", "time", "direction"],
            event,
            "tipsReg"
          );
          a.cfg.selector &&
            h(a.cfg.selector).on("mouseover.tipsReg", function () {
              var c = this.dom[0],
                d = function () {
                  c.setTimeout = setTimeout(function () {
                    c.tips && (c.tips.close(), (c.tips = void 0));
                  }, a.cfg.time);
                },
                g = function () {
                  c.setTimeout &&
                    (clearInterval(c.setTimeout), (c.setTimeout = void 0));
                },
                k = a.cfg.label,
                n = a.cfg.label + "-" + a.cfg.labelTitle,
                l = c;
              g();
              if (!c.tips) {
                "title" == k &&
                  ((k = "pop-" + a.cfg.label),
                  (n = k + "-" + n),
                  this.dom.attr(a.cfg.label) &&
                    this.dom
                      .attr(k, this.dom.attr(a.cfg.label))
                      .removeAttr(a.cfg.label),
                  this.dom.attr(a.cfg.label + "-" + a.cfg.labelTitle) &&
                    this.dom
                      .attr(
                        n,
                        this.dom.attr(a.cfg.label + "-" + a.cfg.labelTitle)
                      )
                      .removeAttr(a.cfg.label + "-" + a.cfg.labelTitle));
                for (; l && l instanceof HTMLElement && !h(l).hasScrolled(!0); )
                  l = l.parentNode;
                a.sys.box = l instanceof Document ? e.body : l;
                a.cfg.box = "auto";
                l = new b.fn.layerInit(a);
                l.ele
                  .append(b.html.title(this.dom.attr(n)))
                  .append(b.html.content(this.dom.attr(k)));
                c.tips = l.applyPack().placeAround(this.dom).layReg();
                this.dom.off("mouseout.tips").on("mouseout.tips", d);
                l.ele.on("mouseout.tips", d).on("mouseover.tips", g);
              }
            });
          return new b.fn.pop_layer(a);
        },
        img: function () {
          var a = new b.fn.layerData(
            [
              {
                width: 600,
                height: 400,
                drag: !0,
                src: "static/test.jpg",
                dragSize: !0,
                toClose: !1,
                index: !0,
                buttonSpcl: "min max close",
                only: !1,
              },
              {
                content: !1,
                html: !1,
                button: !1,
              },
            ],
            arguments,
            function (a, b) {
              this.src = a[0] || b.src;
              this.title = a[1] || this.src;
              return this;
            },
            event,
            "img",
            {
              html: "img",
            }
          );
          return new b.fn.layerInit(a).applyPack().pop_layer();
        },
        imgReg: function () {
          var a = new b.fn.layerData(
            [
              {
                selector: "img",
                label: "title",
                father: "body",
                buttonSpcl: "min max close",
                button: !1,
                height: 550,
                width: 600,
                toClose: !1,
                index: !1,
                drag: !0,
                dragSize: !0,
                only: !1,
                mask: !1,
              },
              {
                src: "auto",
                title: !1,
                time: !1,
                content: !1,
                html: !1,
                getTitle: !1,
              },
            ],
            arguments,
            ["selector", "father"],
            event,
            "imgReg",
            {
              html: "img",
            }
          );
          h(a.cfg.father)
            .child(a.cfg.selector)
            .on("click.imgReg", function () {
              var c = new b.fn.layerInit(a),
                d = c.ele,
                e = this.dom,
                k = e.attr(a.cfg.label),
                n = e.attr("src"),
                l = d.child("img"),
                m =
                  "flipV flipL rotateR rotateL reset enlarge narrow down up".split(
                    " "
                  ),
                r = [],
                q;
              for (q in m) {
                var u = m[q];
                r[q] = ["icon", h("<i." + u + ">"), b.fn.imgControl(l, c)[u]];
              }
              l.attr("src", n).cache("displayImg", e);
              d.prepend(c.html.title(k || n)).append(c.html.buttonBox(r));
              c.applyPack(c, !0).layReg();
              d.child(".pop-content").removeAttr("style");
              b.fn.imgControl(l, c).init();
            });
          return new b.fn.pop_layer(a);
        },
        mask: function () {
          var a = new b.fn.layerData(
            [
              {
                only: !1,
                color: !1,
              },
              {
                width: !1,
                height: !1,
                place: !1,
                title: !1,
                drag: !1,
                dragSize: !1,
                toClose: !1,
                index: !1,
                buttonSpcl: !1,
                content: !1,
                html: !1,
                button: !1,
                minWidth: "100%",
                minHeight: "100%",
              },
            ],
            arguments,
            ["box", "color"],
            event,
            "mask"
          );
          return new b.fn.layerInit(a).applyPack().pop_layer();
        },
      },
    };
  !b.fn.popInit() &&
    console.error(
      " 注册pop弹出层失败,可以尝试以下问题，也可以联系作者。\n\n    1.浏览器版本过低，请尝试使用最新的主流网页浏览器。\n    2.window对象已经存在pop对象，为了兼容性插件以停止注册，请参考文档进行更改。\n\n"
    );
})(
  function (w) {
    var m = function (d, e) {
      return new m.fn.init(d, e);
    };
    m.data = {};
    m.cfg = {
      name: "pop",
      domOBJName: void 0,
    };
    m.eve = {
      domOBJName: function () {
        m.cfg.domOBJName ||
          (m.cfg.domOBJName = m.generateUUID(m.cfg.name, "_"));
      },
      domData: function (d, e, b, a) {
        var c = m.cfg.domOBJName;
        d =
          d instanceof HTMLElement || d instanceof Document
            ? d
            : d[0]
            ? d[0]
            : {};
        var f = d[c],
          g = m.data;
        if (d && !(!d instanceof HTMLElement))
          if (!e && d[c]) {
            for (var k in d[c])
              for (var h in d[c][k])
                delete g[k][h][d[c][k][h]],
                  1 > m.objLength(g[k]) && delete g[k];
            delete d[c];
          } else if (!b && f && f[e]) {
            for (var l in f && f[e]) delete g[e][l];
            1 > m.objLength(g[e]) && delete g[e];
            delete f[e];
          } else if (!a && void 0 != a && f && f[e] && f[e][b])
            delete f[e][b], delete g[e][b];
          else {
            if (!a && void 0 == a) {
              a = {};
              if ("all" == e)
                for (k in f)
                  for (h in ((a[k] = {}), f[k])) a[k][h] = g[k][h][f[k][h]];
              else if ("all" == b) for (l in f[e]) a[l] = g[e][l][f[e][l]];
              else {
                if (f && f[e] && f[e][b] && f[e] && f[e][b])
                  return g[e][b][f[e][b]];
                return;
              }
              return a;
            }
            a &&
              ((f = d[c] = d[c] || {}),
              (g[e] = g[e] || {}),
              (g[e][b] = g[e][b] || {}),
              (f[e] = f[e] || {}),
              (f[e][b] = f[e][b] || {}),
              (d =
                String.fromCharCode(65 + Math.ceil(25 * Math.random())) +
                new Date().valueOf()),
              (g[e][b][d] = a),
              (f[e][b] = d));
          }
      },
    };
    m.fn = m.prototype = {
      hasScrolled: function (d) {
        var e = {},
          b = void 0;
        this.each(this, function (a, c) {
          var f = a.scrollWidth > a.clientWidth,
            g = a.scrollHeight > a.clientHeight;
          e[c] = d
            ? f || g || !1
            : {
                x: f,
                y: g,
              };
          b = c + 1;
        });
        return b ? (1 < b ? e : e[0]) : this;
      },
      focus: function () {
        this.each(this, function (d, e) {
          if (d.setSelectionRange) d.focus();
          else if (d.createTextRange) {
            var b = d.createTextRange();
            b.collapse(!0);
            b.moveEnd("character", -1);
            b.moveStart("character", -1);
            b.select();
          }
        });
        return this;
      },
      tagName: function (d) {
        var e = {},
          b = void 0;
        this.each(this, function (a, c) {
          e[c] = d
            ? d.toLowerCase() == a.tagName.toLowerCase()
            : a.tagName && a.tagName.toLowerCase();
          b = c + 1;
        });
        return b ? (1 < b ? e : e[0]) : this;
      },
      show: function (d, e) {
        var b = {},
          a = void 0;
        e = "number" == typeof d ? d : e ? e : 0;
        d = "function" == typeof d ? d : void 0;
        e = 1 < e ? e / 100 : e;
        this.each(this, function (c, f) {
          c = m(c);
          if (0 < e) {
            c.css({
              display: "block",
              opacity: 0,
            });
            var g = 0,
              k = setInterval(function () {
                100 > g
                  ? (g++, c.css("opacity", 0.01 * g))
                  : (clearInterval(k), d && d.call(c, c));
              }, e);
          } else c.css("display", "block"), d && d.call(c, c);
          b[f] = new m.fn.init(c);
          a = f + 1;
        });
        return a ? (1 < a ? b : b[0]) : this;
      },
      hide: function (d, e) {
        var b = {},
          a = void 0;
        e = "number" == typeof d ? d : e ? e : 0;
        d = "function" == typeof d ? d : void 0;
        e = 1 < e ? e / 100 : e;
        this.each(this, function (c, f) {
          c = m(c);
          if (0 < e)
            var g = 100,
              k = setInterval(function () {
                0 < g
                  ? (g--, c.css("opacity", 0.01 * g))
                  : (c.css("display", "none"),
                    d && d.call(c, c),
                    clearInterval(k));
              }, e);
          else c.css("display", "none"), d && d.call(c, c);
          b[f] = new m.fn.init(c[0]);
          a = f + 1;
        });
        return a ? (1 < a ? b : b[0]) : this;
      },
      css: function (d, e) {
        d = "function" == typeof d ? d() : d;
        var b = {},
          a,
          c = ["opacity", "zIndex"];
        this.each(this, function (f, g) {
          if (m.typeOf(d, [2]) && void 0 === e)
            (b[g] = f.currentStyle
              ? f.currentStyle[d]
              : window.getComputedStyle
              ? window.getComputedStyle(f, null)[d]
              : f.style[d]),
              (a = g + 1);
          else {
            var k = {};
            m.typeOf(d, [4]) ? (k = d) : (k[d] = e);
            for (var h in k) {
              var l = h,
                p = k[h],
                r = f,
                p =
                  void 0 != p
                    ? p + (0 > c.indexOf(l) && "number" == typeof p ? "px" : "")
                    : "";
              r.style[l] = p;
            }
            type = !0;
          }
        });
        return a ? (1 < a ? b : b[0]) : this;
      },
      fn: function (d) {
        "function" == typeof d && d.call(this, this);
        return this;
      },
      child: function (d) {
        var e = {},
          b = void 0;
        this.each(this, function (a, c) {
          e[c] =
            d && "string" == typeof d
              ? new m.fn.init(d, a)
              : new m.fn.init(a.children[0]);
          b = b ? b++ : 1;
        });
        return b ? (1 < b ? e : e[0]) : this;
      },
      offset: function (d) {
        var e = {},
          b = void 0;
        d = "function" == typeof d ? d() : d;
        this.each(this, function (a, c) {
          if ("object" == typeof d && 0 == d instanceof HTMLElement)
            (a.offsetLeft = d.left || a.offsetLeft),
              (a.offsetTop = d.top || a.offsetTop);
          else {
            if ("string" == typeof d) {
              var f = a;
              for (
                e[c] = {
                  x: 0,
                  y: 0,
                };
                f && f instanceof HTMLElement && f.tagName != d;

              )
                (e[c].x += f.offsetLeft),
                  (e[c].y += f.offsetTop),
                  (f = f.parentNode);
            } else
              e[c] = {
                x: a.offsetLeft,
                y: a.offsetTop,
              };
            b = c + 1;
          }
        });
        return b ? (1 < b ? e : e[0]) : this;
      },
      val: function (d) {
        var e = {},
          b = void 0,
          a = void 0;
        d = "function" == typeof d ? d() : d;
        this.each(this, function (c, f) {
          "string" == typeof d
            ? ((c.value = d), (a = !0))
            : d || ((e[f] = c.value), (b = f + 1));
        });
        return a ? this : b ? (1 < b ? e : e[0]) : this;
      },
      parent: function (d) {
        var e = {},
          b = void 0;
        this.each(this, function (a, c) {
          if (d)
            for (
              var f =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.msMatchesSelector;
              a && !f.call(a, d);

            )
              a = a.parentElement;
          else a = a.parentNode;
          e[c] = a ? m(a) : void 0;
          b = b ? b++ : 1;
        });
        return b ? (1 < b ? e : e[0]) : this;
      },
      cache: function (d, e) {
        e = "function" == typeof e ? e() : e;
        var b = m.eve.domData,
          a = {},
          c = void 0,
          f = void 0;
        this.each(this, function (g, k) {
          if (m.typeOf(d, [2, 3]) && void 0 === e)
            (a[k] = b(g, "cache", d)), (c = c ? c++ : 1);
          else {
            var h = {};
            m.typeOf(d, [4]) ? (h = d) : (h[d] = e);
            for (var l in h) b(g, "cache", l, h[l]);
            f = !0;
          }
        });
        return f ? this : c ? (1 < c ? a : a[0]) : null;
      },
      data: function (d, e) {
        e = "function" == typeof e ? e() : e;
        var b = m.cfg.name + "-data",
          a = {},
          c = void 0,
          f = void 0;
        this.each(this, function (g, h) {
          if (m.typeOf(d, [2, 3]) && void 0 === e) {
            var k = g.getAttribute(b),
              k = k ? m.strToObj(k) : {};
            a[h] = k[d];
            c = c ? c++ : 1;
          } else {
            k = {};
            m.typeOf(d, [4]) ? (k = d) : (k[d] = e);
            for (var l in k) (m.typeOf(k[l], [2, 3]) && k[l]) || delete k[l];
            0 < m.objLength(k) && g.setAttribute(b, m.strToObj(k));
            f = !0;
          }
        });
        return f ? this : c ? (1 < c ? a : a[0]) : null;
      },
      height: function (d) {
        var e = {},
          b = void 0;
        d = "function" == typeof d ? d() : d;
        this.each(this, function (a, c) {
          d && "boolean" != typeof d
            ? m(a).css("height", d)
            : (e[c] = d ? a.offsetHeight : a.clientHeight);
          b = b ? b++ : 1;
        });
        return b ? (1 < b ? e : e[0]) : this;
      },
      width: function (d) {
        var e = {},
          b = void 0;
        d = "function" == typeof d ? d() : d;
        this.each(this, function (a, c) {
          d && "boolean" != typeof d
            ? m(a).css("width", d)
            : (e[c] = d ? a.offsetWidth : a.clientWidth);
          b = b ? b++ : 1;
        });
        return b ? (1 < b ? e : e[0]) : this;
      },
      off: function (d) {
        d = d.split(",");
        this.each(this, function (e, b) {
          for (var a in d) {
            var c = d[a],
              f = "",
              g = c,
              k,
              h = function (a, b, c) {
                m.eve.domData(e, "handler", a, null);
                e.removeEventListener
                  ? e.removeEventListener(b, c, !1)
                  : e.deattachEvent
                  ? e.deattachEvent("on" + b, c)
                  : (e["on" + b] = null);
              };
            0 < c.indexOf(".") &&
              ((f = c.substring(c.indexOf(".") + 1)),
              (g = c.substring(0, c.indexOf("."))));
            k = m.eve.domData(e, "handler", 1 > f.length ? "all" : g + f);
            if ("function" == typeof k) h(f, g, k);
            else if ("object" == typeof k)
              for (a in k) -1 < a.indexOf(c) && h(a, c, k[a]);
          }
        });
        return this;
      },
      on: function (d, e, b) {
        d = d.split(",");
        "function" == typeof e && ((b = e), (e = void 0));
        this.each(this, function (a, c) {
          var f = function (c) {
              b.call(
                {
                  MouseEvent: c,
                  parameter: e,
                  dom: m(a),
                },
                c,
                e,
                m(a)
              );
            },
            g;
          for (g in d) {
            var k = d[g],
              h = "",
              l = k;
            0 < k.indexOf(".") &&
              ((h = k.substring(k.indexOf(".") + 1)),
              (l = k.substring(0, k.indexOf("."))));
            m.eve.domData(a, "handler", l + h, f);
            a.addEventListener
              ? a.addEventListener(l, f, !1)
              : a.attachEvent
              ? a.attachEvent("on" + l, f)
              : (a["on" + l] = f);
          }
        });
        return this;
      },
      remove: function () {
        this.each(this, function (d, e) {
          d && d.parentNode && d.parentNode.removeChild(d);
        });
      },
      init: function (d, e) {
        if ("string" == typeof d)
          if ("<" == d[0] && ">" == d[d.length - 1] && 2 < d.length) {
            var b = d.substring(1, d.length - 1),
              a = "Tag",
              c = {};
            this.length = 1;
            if (/[\.#\[\]=]/.test(b)) {
              for (var f in b) {
                if ("." == b[f]) a = "class";
                else if ("#" == b[f]) a = "id";
                else if ("[" == b[f] || "]" == b[f] || "=" == b[f]) a = "attr";
                c[a] = c[a] ? c[a] + b[f] : b[f];
              }
              this[0] = document.createElement(c.Tag);
              if (c["class"]) {
                c["class"] = c["class"].replace(/function[\s\S]*/gi, ""); // 在某些网站会出现错误，特此修复
                for (f in ((c["class"] = c["class"].split(".")), c["class"]))
                  0 < c["class"][f].length &&
                    this[0].classList.add(c["class"][f]);
              }

              if (c.id) {
                c.id = c.id.replace(/function[\s\S]*/gi, ""); // 在某些网站会出现错误，特此修复
                for (f in ((c.id = c.id.split("#")), c.id))
                  0 < c.id[f].length &&
                    this[0].setAttribute("id", c["class"][f]);
              }

              if (c.attr) {
                c.attr = c.attr.replace(/function[\s\S]*/gi, ""); // 在某些网站会出现错误，特此修复
                for (f in ((c.attr = c.attr.replace(/\]/g, "").split("[")),
                c.attr))
                  0 < c.attr[f].length &&
                    ((b = c.attr[f]),
                    (a = ""),
                    0 < c.attr[f].indexOf("=") &&
                      ((a = c.attr[f].split("=")), (b = a[0]), (a = a[1])),
                    this[0].setAttribute(b, a));
              }
            } else this[0] = document.createElement(b);
          } else {
            c = 0;
            b = d.indexOf(",") ? d.split(",") : [d];
            for (f in b)
              if (
                ((a = b[f]),
                !(
                  "" == a ||
                  null == a ||
                  "undefined" == typeof a ||
                  1 > a.length
                ))
              )
                for (
                  var a =
                      e instanceof HTMLElement
                        ? e.querySelectorAll(a)
                        : document.querySelectorAll(a),
                    g = 0;
                  g < a.length;
                  g++
                )
                  (this[c] = a[g]), c++;
            this.length = c;
          }
        else if ("object" == typeof d)
          if (
            d instanceof HTMLElement ||
            d instanceof Document ||
            d instanceof Window
          )
            (this[0] = d), (this.length = 1);
          else if (
            d instanceof NodeList ||
            d instanceof m ||
            d instanceof jQuery
          )
            for (g = 0; g < d.length; g++)
              (this[g] = d[g]), (this.length = g + 1);
          else {
            if (d instanceof Array) {
              c = 0;
              for (f in d)
                for (a = new m.fn.init(d[f]), g = 0; g < a.length; g++)
                  (this[c] = a[g]), c++;
              this.length = c;
            }
          }
        else if ("function" == typeof d || "boolean" == typeof d)
          "boolean" == typeof d && "function" == typeof e
            ? (window.onload = e)
            : "function" != typeof d ||
              e ||
              (document.addEventListener
                ? document.addEventListener(
                    "DOMContentLoaded",
                    function () {
                      document.removeEventListener(
                        "DOMContentLoaded",
                        arguments.callee,
                        !1
                      );
                      d();
                    },
                    !1
                  )
                : document.attachEvent
                ? document.attachEvent("onreadytstatechange", function () {
                    "complete" == document.readyState &&
                      (document.detachEvent(
                        "onreadystatechange",
                        arguments.callee
                      ),
                      d());
                  })
                : document.lastChild == document.body && d());
        this.__proto__ = m.fn;
        return this;
      },
      each: function (d, e) {
        if ("object" == typeof d && "function" == typeof e)
          for (var b = 0; b < d.length; b++) e(d[b], b);
        else if ("function" == typeof d && !e)
          for (b = 0; b < this.length; b++) d(m(this[b]), b);
      },
      addClass: function (d) {
        (d = "function" == typeof d ? d() : d) &&
          1 < d.length &&
          ((d = d.split(" ").filter(function (d) {
            return d && d.trim();
          })),
          this.each(this, function (e) {
            var b = d,
              a;
            for (a in b) b[a] && e.classList.add(b[a]);
          }));
        return this;
      },
      removeClass: function (d) {
        (d = "function" == typeof d ? d() : d) &&
          1 < d.length &&
          ((d = d.split(" ").filter(function (d) {
            return d && d.trim();
          })),
          this.each(this, function (e) {
            var b = d,
              a;
            for (a in b) e.classList.remove(b[a]);
          }));
        return this;
      },
      hasClass: function (d) {
        d = "function" == typeof d ? d().split(" ") : d.split(" ");
        returnVal = {};
        length;
        this.each(this, function (e, b) {
          returnVal[b] = e.classList.contains(d);
          length = b + 1;
        });
        return length ? (1 < length ? returnVal : returnVal[0]) : this;
      },
      toggleClass: function (d) {
        d = "function" == typeof d ? d().split(" ") : d.split(" ");
        this.each(this, function (e) {
          var b = d,
            a;
          for (a in b)
            e.classList.contains(d)
              ? e.classList.remove(b[a])
              : e.classList.add(b[a]);
        });
        return this;
      },
      attr: function (d, e) {
        d = "function" == typeof d ? d() : d;
        var b = {},
          a;
        this.each(this, function (c, f) {
          if (m.typeOf(d, [2]) && void 0 === e)
            (b[f] = c.getAttribute(d)), (a = f + 1);
          else {
            var g = {};
            m.typeOf(d, [4]) ? (g = d) : (g[d] = e);
            for (var h in g) c.setAttribute(h, g[h]);
            type = !0;
          }
        });
        return a ? (1 < a ? b : b[0]) : this;
      },
      removeAttr: function (d) {
        d = "function" == typeof d ? d() : d;
        this.each(this, function (e) {
          e.removeAttribute(d);
        });
        return this;
      },
      html: function (d) {
        var e = {},
          b = void 0;
        d = "function" == typeof d ? d() : d;
        this.each(this, function (a, c) {
          if ("string" == typeof d && 0 <= d.length) a.innerHTML = d;
          else if (d && "object" == typeof d) {
            var f = d;
            a.innerHTML = "";
            for (var g = 0; g < f.length; g++) a.appendChild(f[g]);
          } else d || ((e[c] = a.innerHTML), (b = c + 1));
        });
        return b ? (1 < b ? e : e[0]) : this;
      },
      text: function (d) {
        var e = {},
          b = void 0;
        d = "function" == typeof d ? d() : d;
        this.each(this, function (a, c) {
          "string" == typeof d && 0 <= d.length
            ? (a.innerText = d)
            : d || ((e[c] = a.innerText), (b = c + 1));
        });
        return b ? (1 < b ? e : e[0]) : this;
      },
      append: function (d) {
        d = "function" == typeof d ? d() : d;
        this.each(this, function (e, b) {
          if (d && "string" == typeof d) e.innerHTML += d;
          else if (d && "object" == typeof d)
            for (var a = d, c = 0; c < a.length; c++) e.appendChild(a[c]);
        });
        return this;
      },
      prepend: function (d) {
        d = "function" == typeof d ? d() : d;
        this.each(this, function (e, b) {
          if (d && "string" == typeof d) e.innerHTML = d + e.innerHTML;
          else if (d && "object" == typeof d)
            for (var a = d, c = 0; c < a.length; c++)
              e.insertBefore(a[c], e.childNodes[0]);
        });
        return this;
      },
    };
    m.way = m.__proto__ = {
      strToObj: function (d) {
        try {
          if ("string" == typeof d) return JSON.parse(d);
          if ("object" == typeof d) return JSON.stringify(d);
        } catch (e) {}
      },
      typeOf: function (d, e, b) {
        var a = 0,
          c = typeof d;
        e = e instanceof Array ? e : [e];
        var f = "undefined boolean string number object function empty".split(
            " "
          ),
          g;
        for (g in e) {
          var h = "number" == typeof e[g] ? (f[e[g]] ? f[e[g]] : void 0) : e[g];
          "empty" === h && d ? a++ : c == h && a++;
        }
        return (a = b ? (a >= e.length ? !0 : !1) : 0 < a ? !0 : !1);
      },
      objAssign: function () {
        for (var d = arguments, e = 1; e < d.length; e++)
          if (Object.assign) Object.assign(d[0], d[e]);
          else for (var b in d[e]) d[0][b] = d[e][b];
        return d[0];
      },
      objLength: function (d) {
        var e = void 0;
        "object" == typeof d &&
          (e = d instanceof Array ? d.length : Object.keys(d).length);
        return e;
      },
      generateUUID: function (d, e) {
        var b = new Date().getTime();
        e = e || "-";
        window.performance &&
          "function" === typeof window.performance.now &&
          (b += performance.now());
        var a = "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (a) {
            var c = (b + 16 * Math.random()) % 16 | 0;
            b = Math.floor(b / 16);
            return ("x" == a ? c : (c & 3) | 8).toString(16);
          }
        );
        "-" != e && (a = a.replace(/[-]/g, e));
        d && 1 > d.replace(/\w/g, "").length && (a = d + a);
        return a;
      },
      jsonp: function (d, e, b) {
        var a =
          "object" == typeof d
            ? d
            : {
                src: d,
                callback: e,
                fn: b,
              };
        if (a.src && a.callback && a.fn) {
          var c = document.getElementsByTagName("head")[0],
            f = document.createElement("script"),
            g;
          f.src = a.src;
          f.setAttribute("type", "text/jscript");
          c.appendChild(f);
          window[a.callback] = function (b) {
            clearTimeout(g);
            a.fn(b);
            c.removeChild(f);
            window[a.callback] = void 0;
            delete window[a.callback];
          };
          g = setTimeout(function () {
            a.failFn && a.failFn();
          }, a.time || 1e4);
        }
      },
      strAry: function (d) {
        return d
          ? d instanceof Array
            ? d
            : d.replace(/[|.\s]/g, ",").split(",")
          : [];
      },
      multiAry: function (d, e) {
        if (d instanceof Array) {
          for (var b = 0, a = 0; a < d.length; a++)
            d[a] instanceof Array && (b += m.multiAry(d[a], !0)), b++;
          return e ? b : d.length < b ? !0 : !1;
        }
      },
      customerType: function () {
        for (
          var d = "Android;iPhone;SymbianOS;Windows Phone;iPad;iPod".split(";"),
            e = !1,
            b = 0;
          b < d.length;
          b++
        )
          if (0 < window.navigator.userAgent.indexOf(d[b])) {
            e = d[b];
            break;
          }
        return e ? e : "PC";
      },
      timeFn: function (d, e) {
        return setTimeout(d, e);
      },
    };
    if (w && "string" == typeof w) {
      var h = function (d, e) {
        return m(d, e);
      };
      h.way = h.__proto__ = m.__proto__;
      h.fn = h.prototype = m.prototype;
      window[w] = h;
    }
    return m;
  },
  [
    '@charset "utf-8";.pop *{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:0;padding:0}.pop{transition:all .35s;overflow:hidden;background-color:#fff;border-radius:5px;box-shadow:0 5px 15px rgba(0,0,0,.5);border:1px solid rgba(0,0,0,.2);user-select:none}.pop+*[type=mask],.pop[type=mask]{position:fixed;top:0;left:0;right:0;bottom:0;border:0;background-color:rgba(0,0,0,.4);border-radius:0;box-shadow:none;transition:none}* .pop,* .pop[type=mask]{position:absolute}.pop .pop-loadMask{position:absolute;top:40px;bottom:0;left:0;right:0;background-color:#fff;z-index:5}.pop .pop-loadMask:before{display:block;content:"";position:absolute;top:50%;left:50%;padding:20px;margin:-20px 0 0 -20px;border:4px solid #ddd;border-radius:50%;border-top-color:transparent;z-index:3;animation:waitRotate 1.2s linear infinite}.pop:after,.pop *:after,.pop:before,.pop *:before{position:relative;display:none}.pop[state=drag],.pop[state=dragSize]{transition:none}.pop[state=drag]:after,.pop[state=dragSize]:after{display:block;position:absolute;top:0;left:0;right:0;bottom:0;content:""}.pop[state=min]{box-shadow:0 -5px 20px rgba(0,0,0,.15)}.pop[state=min] .pop-content,.pop[state=min] .pop-buttonBox,.pop[state=min-close] .pop-content,.pop[state=min-close] .pop-buttonBox{display:none}.pop-title{position:absolute;width:100%;height:55px;border-bottom:1px solid #e5e5e5}.pop-title p[pop]{text-indent:15px;font-size:18px;line-height:55px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#333}.pop-content{position:absolute;width:100%;height:auto;top:55px;bottom:55px;overflow:hidden}.pop-content p[pop]{text-indent:15px;font-size:14px;padding:5px 10px;color:#333}.pop-buttonBox{position:absolute;bottom:0;width:100%;height:55px;line-height:55px;text-align:right;border-top:1px solid #e5e5e5;padding:10px 10px 0 10px}.pop-button{float:right;outline:0;display:inline-block;padding:6px 12px;background-color:transparent;border:1px solid transparent;border-radius:5px;cursor:pointer;font-size:14px;font-weight:400;line-height:1.45;margin:0 5px;transition:all .3s ease-in-out}.pop-button[type="primary"]{border-color:#2e6da4;background-color:#337ab7;color:#fff}.pop-button[type="primary"]:hover{background-color:#286090}.pop-button[type="ban"]{border-color:#ccc;background-color:#eee;color:#666;cursor:not-allowed}.pop-button[type="default"]{border-color:#ccc;background-color:#fff;color:#333}.pop-button[type="default"]:hover{background-color:#e6e6e6;border-color:#adadad;color:#333}.pop-button[type="success"]{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.pop-button[type="success"]:hover{color:#fff;background-color:#449d44;border-color:#398439}.pop-button[type="info"]{color:#fff;background-color:#5bc0de;border-color:#46b8da}.pop-button[type="info"]:hover{color:#fff;background-color:#31b0d5;border-color:#269abc}.pop-button[type="warning"]{color:#fff;background-color:#f0ad4e;border-color:#eea236}.pop-button[type="warning"]:hover{color:#fff;background-color:#ec971f;border-color:#d58512}.pop-button[type="danger"]{color:#fff;background-color:#d9534f;border-color:#d43f3a}.pop-button[type="danger"]:hover{color:#fff;background-color:#c9302c;border-color:#ac2925}.pop-buttonSpcl{position:absolute;right:0;right:5px;top:15px}.pop-control{float:right;background-color:transparent;border:0;cursor:pointer;width:22px;height:22px;margin:0 2px;position:relative;color:#888;border-color:#888;outline:none!important;transition:all .3s ease-in-out}.pop-control:hover{color:#222;border-color:#222}.pop-control[type=close]:after,.pop-control[type=close]:before{position:absolute;content:" ";border-top:2.3px solid;width:14px;top:8px;left:2px}.pop-control[type]:after,.pop-control[type]:before{display:block}.pop-control[type=close]:after{transform:rotate(45deg)}.pop-control[type=close]:before{transform:rotate(-45deg)}.pop-control[type="min"]:after{content:" ";width:10px;position:absolute;left:5px;top:9px;border-bottom:2px solid}.pop-control[type="max"]:after{content:" ";width:12px;height:8px;position:absolute;left:3px;top:4px;border:1px solid;border-top:2px solid;box-sizing:initial}.pop[state=min] .pop-control[type=min]:before,.pop[state=max] .pop-control[type=max]:before{content:" ";width:14px;height:11px;position:absolute;left:4px;top:2px;border-top:1px solid;border-right:1px solid;box-sizing:initial}.pop[state=min] .pop-control[type=min]:after,.pop[state=max] .pop-control[type=max]:after{content:" ";width:12px;height:8px;position:absolute;left:3px;top:4px;border:1px solid;border-top:2px solid;box-sizing:initial}.pop[type="prompt"] textarea[pop],.pop[type="prompt"] input[type="text"][pop],.pop[type="prompt"] input[type="password"][pop]{position:absolute;left:0;top:0;width:100%;height:100%;border:0;outline:0;color:#333}.pop[type="prompt"] textarea[pop]{padding:5px 10px;resize:none;font-size:14px}.pop[type="prompt"] input[type="text"][pop],.pop[type="prompt"] input[type="password"][pop]{font-size:18px;padding:5px 10px}.pop[type="news"]{padding:6px 12px;background-color:rgba(0,0,0,.9);box-shadow:0 0 15px rgba(0,0,0,.5)}.pop[type="news"] .pop-content,.pop[type="wait"] .pop-content{position:static}.pop[type="news"] .pop-content p[pop]{text-indent:0;padding:0;color:#fafafa;text-align:center}.pop[type="iframe"] iframe[pop]{position:absolute;top:0;left:0;width:100%;height:100%;border:0;top:calc(0% + 2px);left:calc(0% + 2px);width:calc(100% - 4px);height:calc(100% - 4px)}.pop[type="lateral"]{border-radius:0;border-width:0;width:100%;height:100%;box-shadow:0 0 30px rgba(0,0,0,.25)}.pop[type="lateral"][anim=slide-right]{border-left:1px}.pop[type="lateral"][anim=slide-left]{border-right:1px}.pop[type="lateral"][anim=slide-top]{border-bottom:1px}.pop[type="lateral"][anim=slide-bottom]{border-top:1px}.pop[type="wait"]{font-size:16px;box-shadow:0 0 5px rgba(0,0,0,.5);background-color:#fff;padding:10px 15px;vertical-align:middle;border-radius:15px}.pop[type="wait"] .pop-content p[pop]{font-size:inherit;display:inline-block;padding-left:10px}.pop[type="wait"] .pop-content{float:left;width:auto;line-height:2em;font-size:inherit}.pop[type="wait"]:before{vertical-align:middle;font-size:inherit;content:" ";width:2em;height:2em;border-radius:50%;display:inline-block;border:.3em solid rgba(100,149,237,.1);border-top:.3em solid rgba(100,149,237,1);animation:waitRotate 1.2s linear infinite;float:left}@keyframes waitRotate{form{transform:rotate(0deg)}to{transform:rotate(360deg)}}.pop[type^=tips]{overflow:visible;padding:5px}.pop[type^=tips] .pop-title,.pop[type^=tips] .pop-content{position:relative}.pop[type^=tips] .pop-title{height:auto}.pop[type^=tips] .pop-title p[pop],.pop[type^=tips] .pop-content p[pop]{text-indent:0;line-height:20px;font-size:16px;word-wrap:break-word;white-space:pre-wrap;overflow:visible}.pop[type^=tips] .pop-content p[pop]{font-size:14px;line-height:16px}.pop[type^=tips] .pop-tail[direction]{position:absolute;width:14px;height:14px;overflow:hidden;z-index:-1}.pop[type^=tips] .pop-tail[direction]:after{position:absolute;content:"";display:block;height:100%;width:100%;background-color:#fff;border:1px solid rgba(0,0,0,.2);box-sizing:border-box;transform:rotate(45deg)}.pop[type^=tips] .pop-tail[direction^=top]{top:0;margin-left:-7px;margin-top:-14px;left:50%}.pop[type^=tips] .pop-tail[direction^=top]:after{top:10px}.pop[type^=tips] .pop-tail[direction^=bottom]{bottom:0;margin-bottom:-14px;margin-left:-7px;left:50%}.pop[type^=tips] .pop-tail[direction^=bottom]:after{bottom:10px}.pop[type^=tips] .pop-tail[direction^=left]{top:50%;left:0;margin-top:-7px;margin-left:-14px}.pop[type^=tips] .pop-tail[direction^=left]:after{left:10px}.pop[type^=tips] .pop-tail[direction^=right]{top:50%;right:0;margin-top:-7px;margin-right:-14px}.pop[type^=tips] .pop-tail[direction^=right]:after{right:10px}.pop[type^=tips] .pop-content{position:relative;top:0;bottom:0}.pop[type^=tips] .pop-content p[pop]{text-indent:0;font-size:12px}.pop[type^=img] .pop-title{height:40px}.pop[type^=img] .pop-title p{line-height:40px;font-size:16px}.pop[type^=img] .pop-buttonSpcl{top:10px}.pop[type^=img] .pop-content{bottom:40px;top:40px}.pop[type^=img] .pop-content img{position:absolute;z-index:1;transition:all .3s;user-select:none}.pop[type^=img] .pop-content img[drag]{transition:none}.pop[type^=img] .pop-buttonBox{bottom:0;height:40px;padding:5px 12px;border-top:1px solid #e5e5e5;background-color:#fff;text-align:center}.pop[type^=img] .pop-button{margin-left:-2px;margin-right:-2px;padding:0;width:35px;height:35px;border-radius:5px;transform:scale(.75,.75);float:none;vertical-align:middle;margin-top:-25px;position:relative}.pop[type^=img] .news{position:absolute;left:50%;top:50%;background-color:rgba(0,0,0,.9);color:#fafafa;z-index:10;transform:translate(-50%,-50%);box-shadow:0 0 15px rgba(0,0,0,.5);padding:8px 12px;text-align:center;min-width:80px;max-width:50%;border:1px solid rgba(0,0,0,.2);border-radius:5px}.pop[type^=img] .pop-button[type=icon] *{width:20px;height:20px;display:inline-block;color:#000;border-color:#000;position:relative}.pop[type^=img] .pop-button[type=icon] *:before,.pop[type^=img] .pop-button[type=icon] *:after{content:"";display:inline-block;position:absolute}.pop[type^=img] .pop-button[type=icon] *.enlarge,.pop[type^=img] .pop-button[type=icon] *.narrow,.pop[type^=img] .pop-button[type=icon] *.rotateL,.pop[type^=img] .pop-button[type=icon] *.rotateR{border:2px solid;border-radius:50%}.pop[type^=img] .pop-button[type=icon] *.enlarge,.pop[type^=img] .pop-button[type=icon] *.narrow{width:24px;height:24px;top:3px}.pop[type^=img] .pop-button[type=icon] *.enlarge:after,.pop[type^=img] .pop-button[type=icon] *.narrow:after,.pop[type^=img] .pop-button[type=icon] *.enlarge:before,.pop[type^=img] .pop-button[type=icon] *.narrow:before{width:14px;height:2px;top:50%;left:50%;margin-top:-4px;margin-left:-12px;background-color:#000;left:15px;top:13px}.pop[type^=img] .pop-button[type=icon] *.enlarge:before{width:2px;height:14px;margin-top:-10px;margin-left:-6px}.pop[type^=img] .pop-button[type=icon] *.rotateL{border-left-color:transparent;top:3px}.pop[type^=img] .pop-button[type=icon] *.rotateL:before{border:5px solid transparent;border-bottom-color:#000;top:8px;left:-6px;transform:rotate(-60deg)}.pop[type^=img] .pop-button[type=icon] *.rotateR{border-right-color:transparent;top:3px}.pop[type^=img] .pop-button[type=icon] *.rotateR:before{border:5px solid transparent;border-bottom-color:#000;top:8px;right:-6px;transform:rotate(60deg)}.pop[type^=img] .pop-button[type=icon] *.flipV{transform:rotate(90deg);top:1px;left:-4px}.pop[type^=img] .pop-button[type=icon] *.flipL{top:6px;left:5px;left:1px;top:5px}.pop[type^=img] .pop-button[type=icon] *.flipV,.pop[type^=img] .pop-button[type=icon] *.flipL{width:16px;height:10px;border-top:2px solid}.pop[type^=img] .pop-button[type=icon] *.flipV:before,.pop[type^=img] .pop-button[type=icon] *.flipL:before{border:5px solid transparent;border-right-color:#000;left:-9px;top:-6px}.pop[type^=img] .pop-button[type=icon] *.flipV:after,.pop[type^=img] .pop-button[type=icon] *.flipL:after{border:5px solid transparent;border-left-color:#000;right:-9px;top:-6px}.pop[type^=img] .pop-button[type=icon] *.reset{background-color:#000;width:24px;height:24px;top:3px;border-radius:4px}.pop[type^=img] .pop-button[type=icon] *.reset:before,.pop[type^=img] .pop-button[type=icon] *.reset:after{width:24px;height:2px;top:11px;left:0;background-color:#fff}.pop[type^=img] .pop-button[type=icon] *.reset:after{top:11px;transform:rotate(90deg)}.pop[type^=img] .pop-button[type=icon] *.up,.pop[type^=img] .pop-button[type=icon] *.down{border:10px solid;width:0;height:0;margin-top:6px}.pop[type^=img] .pop-button[type=icon] *.up{border-left-color:transparent;border-top-color:transparent;border-bottom-color:transparent}.pop[type^=img] .pop-button[type=icon] *.up:before,.pop[type^=img] .pop-button[type=icon] *.down:before{height:19px;width:3px;background-color:#000;left:-3px;top:-9px}.pop[type^=img] .pop-button[type=icon] *.down:before{left:0}.pop[type^=img] .pop-button[type=icon] *.down{border-right-color:transparent;border-top-color:transparent;border-bottom-color:transparent}',
    '@charset "utf-8";.showAlert[anim=fadeIn]{animation:showFadeIn .3s}.hideAlert[anim=fadeIn]{animation:hideFadeIn .3s forwards}@keyframes showFadeIn{0%{opacity:0}100%{opacity:1}}@keyframes hideFadeIn{0%{opacity:1}100%{opacity:0}}.showAlert[anim=fadeIn-zoom]{animation:showFadeIn-zoom .3s}.hideAlert[anim=fadeIn-zoom]{animation:hideFadeIn-zoom .3s forwards}@keyframes showFadeIn-zoom{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}@keyframes hideFadeIn-zoom{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.5)}}.showAlert[anim=fadeIn-alert]{animation:showfadeIn-Alert .3s}.hideAlert[anim=fadeIn-alert]{animation:hidefadeIn-Alert .3s forwards}@keyframes showfadeIn-Alert{0%{transform:scale(.5)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes hidefadeIn-Alert{0%{transform:scale(1)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(0);opacity:0}}.showAlert[anim=slide-top]{animation:showSlide-top .8s}.hideAlert[anim=slide-top]{animation:hideSlide-top .8s forwards}@keyframes showSlide-top{0%{opacity:0;transform:translateY(-200%)}100%{opacity:1;transform:translateY(0%)}}@keyframes hideSlide-top{0%{opacity:1;transform:translateY(0%)}100%{opacity:0;transform:translateY(-200%)}}.showAlert[anim=slide-left]{animation:showSlide-left .8s}.hideAlert[anim=slide-left]{animation:hideSlide-left .8s forwards}@keyframes showSlide-left{0%{opacity:0;transform:translateX(-200%)}100%{opacity:1;transform:translateX(0%)}}@keyframes hideSlide-left{0%{opacity:1;transform:translateX(0%)}100%{opacity:0;transform:translateX(-200%)}}.showAlert[anim=slide-bottom]{animation:showSlide-bottom .8s}.hideAlert[anim=slide-bottom]{animation:hideSlide-bottom .8s forwards}@keyframes showSlide-bottom{0%{opacity:0;transform:translateY(200%)}100%{opacity:1;transform:translateY(0%)}}@keyframes hideSlide-bottom{0%{opacity:1;transform:translateY(0%)}100%{opacity:0;transform:translateY(200%)}}.showAlert[anim=slide-right]{animation:showSlide-right .8s}.hideAlert[anim=slide-right]{animation:hideSlide-right .8s forwards}@keyframes showSlide-right{0%{mopacity:0;transform:translateX(200%)}100%{opacity:1;transform:translateX(0%)}}@keyframes hideSlide-right{0%{opacity:1;transform:translateX(0%)}100%{opacity:0;transform:translateX(200%)}}.showAlert[anim=rollIng-left]{animation:showRollIng-left .5s}.hideAlert[anim=rollIng-left]{animation:hideRollIng-left .5s forwards}@keyframes showRollIng-left{0%{opacity:0;transform:translateX(-100%) rotate(-120deg)}100%{opacity:1;transform:translateX(0) rotate(0)}}@keyframes hideRollIng-left{0%{opacity:1;transform:translateX(0) rotate(0)}100%{opacity:0;transform:translateX(-100%) rotate(-120deg)}}.showAlert[anim=rollIng-right]{animation:showRollIng-right .5s}.hideAlert[anim=rollIng-right]{animation:hideRollIng-right .5s forwards}@keyframes showRollIng-right{0%{opacity:0;transform:translateX(100%) rotate(120deg)}100%{opacity:1;transform:translateX(0) rotate(0)}}@keyframes hideRollIng-right{0%{opacity:1;transform:translateX(0) rotate(0)}100%{opacity:0;transform:translateX(100%) rotate(120deg)}}.showAlert[anim=shake]{animation:showShake .3s}.hideAlert[anim=shake]{animation:hideShake .3s forwards}@keyframes showShake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}10%,30%,50%,70%,90%{-webkit-transform:translateX(-10px);transform:translateX(-10px)}20%,40%,60%,80%{-webkit-transform:translateX(10px);transform:translateX(10px)}}@-webkit-keyframes hideShake{0%,100%{-webkit-transform:translateX(10px);transform:translateX(10px)}10%,30%,50%,70%,90%{-webkit-transform:translateX(-10px);transform:translateX(-10px)}20%,40%,60%,80%{-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0}}.showAlert[anim=spread]{animation:showSpread .5s}.hideAlert[anim=spread]{animation:hideShake .5s forwards}@keyframes showSpread{0%{transform:scaleX(0);opacity:0}100%{transform:scaleX(1);opacity:1}}@keyframes hideShake{0%{transform:scaleX(1);opacity:1}100%{transform:scaleX(0);opacity:0}}.showAlert[anim=sandra]{animation:showSandra .5s}.hideAlert[anim=sandra]{animation:hideSandra .5s forwards}@keyframes showSandra{0%{opacity:0;-webkit-transform:scale3d(1.1,1.1,1);transform:scale3d(1.1,1.1,1)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes hideSandra{0%{opacity:1}100%{opacity:0;-webkit-transform:scale3d(.9,.9,1);transform:scale3d(.9,.9,1)}}.showAlert[anim=roll]{animation:showRoll .7s}.hideAlert[anim=roll]{animation:hideRoll .4s forwards}@keyframes showRoll{0%{transform:perspective(1000px) rotate3d(1,0,0,90deg)}100%{transform:perspective(1000px) rotate3d(1,0,0,0deg)}}@keyframes hideRoll{0%{transform:perspective(1000px) rotate3d(1,0,0,0deg)}100%{transform:perspective(1000px) rotate3d(1,0,0,90deg)}}.showAlert[anim=don]{animation:showDon 1.2s}.hideAlert[anim=don]{animation:hideDon .5s forwards}@keyframes showDon{0%{opacity:0;-webkit-transform:matrix3d(0.7,0,0,0,0,0.7,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.7,0,0,0,0,0.7,0,0,0,0,1,0,0,0,0,1)}2.083333%{-webkit-transform:matrix3d(0.75266,0,0,0,0,0.76342,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.75266,0,0,0,0,0.76342,0,0,0,0,1,0,0,0,0,1)}4.166667%{-webkit-transform:matrix3d(0.81071,0,0,0,0,0.84545,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.81071,0,0,0,0,0.84545,0,0,0,0,1,0,0,0,0,1)}6.25%{-webkit-transform:matrix3d(0.86808,0,0,0,0,0.9286,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.86808,0,0,0,0,0.9286,0,0,0,0,1,0,0,0,0,1)}8.333333%{-webkit-transform:matrix3d(0.92038,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.92038,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}10.416667%{-webkit-transform:matrix3d(0.96482,0,0,0,0,1.05202,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.96482,0,0,0,0,1.05202,0,0,0,0,1,0,0,0,0,1)}12.5%{-webkit-transform:matrix3d(1,0,0,0,0,1.08204,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1.08204,0,0,0,0,1,0,0,0,0,1)}14.583333%{-webkit-transform:matrix3d(1.02563,0,0,0,0,1.09149,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.02563,0,0,0,0,1.09149,0,0,0,0,1,0,0,0,0,1)}16.666667%{-webkit-transform:matrix3d(1.04227,0,0,0,0,1.08453,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.04227,0,0,0,0,1.08453,0,0,0,0,1,0,0,0,0,1)}18.75%{-webkit-transform:matrix3d(1.05102,0,0,0,0,1.06666,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.05102,0,0,0,0,1.06666,0,0,0,0,1,0,0,0,0,1)}20.833333%{-webkit-transform:matrix3d(1.05334,0,0,0,0,1.04355,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.05334,0,0,0,0,1.04355,0,0,0,0,1,0,0,0,0,1)}22.916667%{-webkit-transform:matrix3d(1.05078,0,0,0,0,1.02012,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.05078,0,0,0,0,1.02012,0,0,0,0,1,0,0,0,0,1)}25%{-webkit-transform:matrix3d(1.04487,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.04487,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}27.083333%{-webkit-transform:matrix3d(1.03699,0,0,0,0,0.98534,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.03699,0,0,0,0,0.98534,0,0,0,0,1,0,0,0,0,1)}29.166667%{-webkit-transform:matrix3d(1.02831,0,0,0,0,0.97688,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.02831,0,0,0,0,0.97688,0,0,0,0,1,0,0,0,0,1)}31.25%{-webkit-transform:matrix3d(1.01973,0,0,0,0,0.97422,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.01973,0,0,0,0,0.97422,0,0,0,0,1,0,0,0,0,1)}33.333333%{-webkit-transform:matrix3d(1.01191,0,0,0,0,0.97618,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.01191,0,0,0,0,0.97618,0,0,0,0,1,0,0,0,0,1)}35.416667%{-webkit-transform:matrix3d(1.00526,0,0,0,0,0.98122,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.00526,0,0,0,0,0.98122,0,0,0,0,1,0,0,0,0,1)}37.5%{-webkit-transform:matrix3d(1,0,0,0,0,0.98773,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,0.98773,0,0,0,0,1,0,0,0,0,1)}39.583333%{-webkit-transform:matrix3d(0.99617,0,0,0,0,0.99433,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99617,0,0,0,0,0.99433,0,0,0,0,1,0,0,0,0,1)}41.666667%{-webkit-transform:matrix3d(0.99368,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99368,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}43.75%{-webkit-transform:matrix3d(0.99237,0,0,0,0,1.00413,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99237,0,0,0,0,1.00413,0,0,0,0,1,0,0,0,0,1)}45.833333%{-webkit-transform:matrix3d(0.99202,0,0,0,0,1.00651,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99202,0,0,0,0,1.00651,0,0,0,0,1,0,0,0,0,1)}47.916667%{-webkit-transform:matrix3d(0.99241,0,0,0,0,1.00726,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99241,0,0,0,0,1.00726,0,0,0,0,1,0,0,0,0,1)}50%{opacity:1;-webkit-transform:matrix3d(0.99329,0,0,0,0,1.00671,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99329,0,0,0,0,1.00671,0,0,0,0,1,0,0,0,0,1)}52.083333%{-webkit-transform:matrix3d(0.99447,0,0,0,0,1.00529,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99447,0,0,0,0,1.00529,0,0,0,0,1,0,0,0,0,1)}54.166667%{-webkit-transform:matrix3d(0.99577,0,0,0,0,1.00346,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99577,0,0,0,0,1.00346,0,0,0,0,1,0,0,0,0,1)}56.25%{-webkit-transform:matrix3d(0.99705,0,0,0,0,1.0016,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99705,0,0,0,0,1.0016,0,0,0,0,1,0,0,0,0,1)}58.333333%{-webkit-transform:matrix3d(0.99822,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99822,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}60.416667%{-webkit-transform:matrix3d(0.99921,0,0,0,0,0.99884,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99921,0,0,0,0,0.99884,0,0,0,0,1,0,0,0,0,1)}62.5%{-webkit-transform:matrix3d(1,0,0,0,0,0.99816,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,0.99816,0,0,0,0,1,0,0,0,0,1)}64.583333%{-webkit-transform:matrix3d(1.00057,0,0,0,0,0.99795,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.00057,0,0,0,0,0.99795,0,0,0,0,1,0,0,0,0,1)}66.666667%{-webkit-transform:matrix3d(1.00095,0,0,0,0,0.99811,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.00095,0,0,0,0,0.99811,0,0,0,0,1,0,0,0,0,1)}68.75%{-webkit-transform:matrix3d(1.00114,0,0,0,0,0.99851,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.00114,0,0,0,0,0.99851,0,0,0,0,1,0,0,0,0,1)}70.833333%{-webkit-transform:matrix3d(1.00119,0,0,0,0,0.99903,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.00119,0,0,0,0,0.99903,0,0,0,0,1,0,0,0,0,1)}72.916667%{-webkit-transform:matrix3d(1.00114,0,0,0,0,0.99955,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.00114,0,0,0,0,0.99955,0,0,0,0,1,0,0,0,0,1)}75%{-webkit-transform:matrix3d(1.001,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.001,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}77.083333%{-webkit-transform:matrix3d(1.00083,0,0,0,0,1.00033,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.00083,0,0,0,0,1.00033,0,0,0,0,1,0,0,0,0,1)}79.166667%{-webkit-transform:matrix3d(1.00063,0,0,0,0,1.00052,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.00063,0,0,0,0,1.00052,0,0,0,0,1,0,0,0,0,1)}81.25%{-webkit-transform:matrix3d(1.00044,0,0,0,0,1.00058,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.00044,0,0,0,0,1.00058,0,0,0,0,1,0,0,0,0,1)}83.333333%{-webkit-transform:matrix3d(1.00027,0,0,0,0,1.00053,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.00027,0,0,0,0,1.00053,0,0,0,0,1,0,0,0,0,1)}85.416667%{-webkit-transform:matrix3d(1.00012,0,0,0,0,1.00042,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1.00012,0,0,0,0,1.00042,0,0,0,0,1,0,0,0,0,1)}87.5%{-webkit-transform:matrix3d(1,0,0,0,0,1.00027,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1.00027,0,0,0,0,1,0,0,0,0,1)}89.583333%{-webkit-transform:matrix3d(0.99991,0,0,0,0,1.00013,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99991,0,0,0,0,1.00013,0,0,0,0,1,0,0,0,0,1)}91.666667%{-webkit-transform:matrix3d(0.99986,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99986,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}93.75%{-webkit-transform:matrix3d(0.99983,0,0,0,0,0.99991,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99983,0,0,0,0,0.99991,0,0,0,0,1,0,0,0,0,1)}95.833333%{-webkit-transform:matrix3d(0.99982,0,0,0,0,0.99985,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99982,0,0,0,0,0.99985,0,0,0,0,1,0,0,0,0,1)}97.916667%{-webkit-transform:matrix3d(0.99983,0,0,0,0,0.99984,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(0.99983,0,0,0,0,0.99984,0,0,0,0,1,0,0,0,0,1)}100%{opacity:1;-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}}@keyframes hideDon{0%{opacity:1}100%{opacity:0;transform:scale3d(0.8,0.8,1)}}.showAlert[anim=gather]{animation:showGather .4s}.hideAlert[anim=gather]{animation:hideGather .3s forwards}@keyframes showGather{0%{opacity:0;transform:scale(5,0)}100%{opacity:1;transform:scale(1,1)}}@keyframes hideGather{0%{opacity:1;transform:scale(1,1)}100%{opacity:0;transform:scale(5,0)}}',
  ]
);
