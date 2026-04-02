// ==UserScript==
// @name         ImageViewer
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.4.2
// @author       WhiteSevs
// @description  Viewer看图工具，支持图片翻转、旋转、缩放
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.13/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.5/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.4/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @grant        GM_addValueChangeListener
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_removeValueChangeListener
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (M, O, oe, ie, ye) {
  "use strict";

  var be = typeof GM_addValueChangeListener < "u" ? GM_addValueChangeListener : void 0,
    X = typeof GM_deleteValue < "u" ? GM_deleteValue : void 0,
    de = typeof GM_getResourceText < "u" ? GM_getResourceText : void 0,
    Z = typeof GM_getValue < "u" ? GM_getValue : void 0,
    z = typeof GM_info < "u" ? GM_info : void 0,
    j = typeof GM_listValues < "u" ? GM_listValues : void 0,
    xe = typeof GM_registerMenuCommand < "u" ? GM_registerMenuCommand : void 0,
    Ce = typeof GM_removeValueChangeListener < "u" ? GM_removeValueChangeListener : void 0,
    re = typeof GM_setValue < "u" ? GM_setValue : void 0,
    fe = typeof GM_setValues < "u" ? GM_setValues : void 0,
    we = typeof GM_unregisterMenuCommand < "u" ? GM_unregisterMenuCommand : void 0,
    ve = typeof GM_xmlhttpRequest < "u" ? GM_xmlhttpRequest : void 0,
    k = typeof unsafeWindow < "u" ? unsafeWindow : void 0,
    _e = window;
  const H = {
      qmsg_config_position: { key: "qmsg-config-position", defaultValue: "bottom" },
      qmsg_config_maxnums: { key: "qmsg-config-maxnums", defaultValue: 3 },
      qmsg_config_showreverse: { key: "qmsg-config-showreverse", defaultValue: false },
    },
    B = {
      waitRemove(...e) {
        e.forEach((t) => {
          typeof t == "string" &&
            O.waitNodeList(t).then((n) => {
              n.forEach((a) => a.remove());
            });
        });
      },
      createBlockCSSNode(...e) {
        let t = [];
        if (e.length !== 0 && !(e.length === 1 && typeof e[0] == "string" && e[0].trim() === ""))
          return (
            e.forEach((n) => {
              Array.isArray(n) ? (t = t.concat(n)) : t.push(n);
            }),
            O.createElement("style", {
              type: "text/css",
              innerHTML: `${t.join(`,
`)}{display: none !important;}`,
            })
          );
      },
      addBlockCSS(...e) {
        let t = [];
        if (e.length !== 0 && !(e.length === 1 && typeof e[0] == "string" && e[0].trim() === ""))
          return (
            e.forEach((n) => {
              Array.isArray(n) ? (t = t.concat(n)) : t.push(n);
            }),
            he(
              `${t.join(`,
`)}{display: none !important;}`
            )
          );
      },
      setGMResourceCSS(e) {
        const t = typeof de == "function" ? de(e.keyName) : null;
        return typeof t == "string" && t ? he(t) : B.loadStyleLink(e.url);
      },
      async loadStyleLink(e) {
        let t = document.createElement("link");
        return (
          (t.rel = "stylesheet"),
          (t.type = "text/css"),
          (t.href = e),
          new Promise((n) => {
            O.onReady(() => {
              (document.head.appendChild(t), n(t));
            });
          })
        );
      },
      async loadScript(e) {
        let t = document.createElement("script");
        return (
          (t.src = e),
          new Promise((n) => {
            ((t.onload = () => {
              n(null);
            }),
              (document.head || document.documentElement).appendChild(t));
          })
        );
      },
      fixUrl(e) {
        return (
          (e = e.trim()),
          e.startsWith("data:") || e.match(/^http(s|):\/\//i)
            ? e
            : e.startsWith("//")
              ? (e.startsWith("///") || (e = window.location.protocol + e), e)
              : (e.startsWith("/") || (e += "/"), (e = window.location.origin + e), e)
        );
      },
      fixHttps(e) {
        if (e.startsWith("https://") || !e.startsWith("http://")) return e;
        try {
          let t = new URL(e);
          return ((t.protocol = "https:"), t.toString());
        } catch {
          return e;
        }
      },
      lockScroll(...e) {
        let t = document.createElement("style");
        t.innerHTML = `
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;
        let n = [document.documentElement, document.body].concat(...(e || []));
        return (
          n.forEach((a) => {
            a.classList.add("pops-overflow-hidden-important");
          }),
          (document.head || document.documentElement).appendChild(t),
          {
            recovery() {
              (n.forEach((a) => {
                a.classList.remove("pops-overflow-hidden-important");
              }),
                t.remove());
            },
          }
        );
      },
      async getClipboardText() {
        function e(a) {
          navigator.clipboard
            .readText()
            .then((o) => {
              a(o);
            })
            .catch((o) => {
              (S.error("读取剪贴板内容失败👉", o), a(""));
            });
        }
        function t(a) {
          navigator.permissions
            .query({ name: "clipboard-read" })
            .then(() => {
              e(a);
            })
            .catch((o) => {
              (S.error("申请剪贴板权限失败，尝试直接读取👉", o.message ?? o.name ?? o.stack), e(a));
            });
        }
        function n() {
          return !(
            typeof navigator?.clipboard?.readText != "function" || typeof navigator?.permissions?.query != "function"
          );
        }
        return new Promise((a) => {
          if (!n()) {
            a("");
            return;
          }
          document.hasFocus()
            ? t(a)
            : window.addEventListener(
                "focus",
                () => {
                  t(a);
                },
                { once: true }
              );
        });
      },
      escapeHtml(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;")
          .replace(/©/g, "&copy;")
          .replace(/®/g, "&reg;")
          .replace(/™/g, "&trade;")
          .replace(/→/g, "&rarr;")
          .replace(/←/g, "&larr;")
          .replace(/↑/g, "&uarr;")
          .replace(/↓/g, "&darr;")
          .replace(/—/g, "&mdash;")
          .replace(/–/g, "&ndash;")
          .replace(/…/g, "&hellip;")
          .replace(/ /g, "&nbsp;")
          .replace(/\r\n/g, "<br>")
          .replace(/\r/g, "<br>")
          .replace(/\n/g, "<br>")
          .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
      },
      interval(e, t, n = 5e3) {
        let a,
          o = n - t,
          i = t,
          r = async (g) => {
            const l = await e(g);
            if ((typeof l == "boolean" && l) || g) {
              y.workerClearTimeout(a);
              return;
            }
            if (((i += t), i > o)) {
              r(true);
              return;
            }
            a = y.workerSetTimeout(() => {
              r(false);
            }, t);
          };
        r(false);
      },
      findParentNode(e, t, n) {
        if (n) {
          let a = O.closest(e, n);
          if (a) return a.querySelector(t);
        } else return O.matches(e, t) ? e : O.closest(e, t);
      },
      toStr(e, t = 2) {
        const n = "__undefined__placeholder__replaced__str__" + performance.now();
        return JSON.stringify(e, (o, i) => (i === void 0 ? n : i), t).replace(new RegExp(`"${n}"`, "g"), "undefined");
      },
      isVerticalScreen() {
        return !globalThis.screen.orientation.type.includes("landscape");
      },
      isMobileDevice(e = 768) {
        return this.isVerticalScreen() ? globalThis.innerWidth < e : globalThis.innerHeight < e;
      },
      isTopWindow() {
        const e = typeof k == "object" && k != null ? k : window;
        return e.top === e.self;
      },
      formatVideoDuration(e) {
        if ((typeof e != "number" && (e = parseInt(e)), isNaN(e))) return e.toString();
        const t = function (n) {
          return n < 10 ? `0${n}` : n;
        };
        if (e < 60) return `0:${t(e)}`;
        if (e >= 60 && e < 3600) {
          const n = Math.floor(e / 60),
            a = e % 60;
          return `${n}:${t(a)}`;
        } else {
          const n = Math.floor(e / 3600),
            a = Math.floor(e / 60) % 60,
            o = e % 60;
          return `${n}:${t(a)}:${t(o)}`;
        }
      },
      formatTimeStamp(e, t) {
        if (typeof e == "number" && e < 1e12) {
          const g = String(Date.now()).length - String(e).length;
          e = e * Math.pow(10, g);
        }
        let n = e,
          a = new Date(typeof e == "string" ? e.replace(/-/g, "/") : e),
          i = new Date(t ?? Date.now()).getTime() - a.getTime(),
          r = Math.floor(i / (24 * 3600 * 1e3));
        if (r > 0) r > 7 ? (n = y.formatTime(a.getTime())) : (n = r + "天前");
        else {
          let g = i % 864e5,
            l = Math.floor(g / (3600 * 1e3));
          if (l > 0) n = l + "小时前";
          else {
            let d = g % 36e5,
              b = Math.floor(d / (60 * 1e3));
            if (b > 0) n = b + "分钟前";
            else {
              let x = d % 6e4;
              n = Math.round(x / 1e3) + "秒前";
            }
          }
        }
        return n;
      },
    },
    y = ie.noConflict(),
    u = O.noConflict(),
    P = oe,
    S = new y.Log(z, k.console || _e.console),
    ee = z?.script?.name || void 0,
    Ve = oe.fn.Utils.AnyTouch();
  S.config({ debug: false, logMaxCount: 250, autoClearConsole: true, tag: true });
  const pe = () => {
    const t = oe.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex ?? 0,
      n = y.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex ?? 0;
    return Math.max(100, t, n);
  };
  M.config({
    isHTML: true,
    autoClose: true,
    showClose: false,
    consoleLogContent(e) {
      const t = e.setting.type;
      if (t === "loading") return false;
      const n = e.setting.content;
      return (t === "warning" ? S.warn(n) : t === "error" ? S.error(n) : S.info(n), false);
    },
    get position() {
      return G.getValue(H.qmsg_config_position.key, H.qmsg_config_position.defaultValue);
    },
    get maxNums() {
      return G.getValue(H.qmsg_config_maxnums.key, H.qmsg_config_maxnums.defaultValue);
    },
    get showReverse() {
      return G.getValue(H.qmsg_config_showreverse.key, H.qmsg_config_showreverse.defaultValue);
    },
    get zIndex() {
      return pe();
    },
  });
  P.GlobalConfig.setGlobalConfig({
    zIndex: () => pe(),
    mask: { enable: true, clickEvent: { toClose: false, toHide: false } },
    drag: true,
  });
  const Me = new y.GM_Menu({
      GM_getValue: Z,
      GM_setValue: re,
      GM_registerMenuCommand: xe,
      GM_unregisterMenuCommand: we,
    }),
    se = new y.Httpx({ xmlHttpRequest: ve, logDetails: false });
  se.interceptors.request.use((e) => e);
  se.interceptors.response.use(
    (e) => e,
    (e) => (
      S.error("[Httpx-HttpxRequest.response] 响应错误", { data: e }),
      e.type === "onabort"
        ? M.warning("请求取消", { consoleLogContent: true })
        : e.type === "onerror"
          ? M.error("请求异常", { consoleLogContent: true })
          : e.type === "ontimeout"
            ? M.error("请求超时", { consoleLogContent: true })
            : M.error("其它错误", { consoleLogContent: true }),
      e
    )
  );
  (k.Object.defineProperty,
    k.Object.keys,
    k.Object.values,
    k.Function.prototype.apply,
    k.Function.prototype.call,
    k.Element.prototype.appendChild,
    k.setTimeout.bind(k),
    k.clearTimeout.bind(k),
    k.setInterval.bind(k),
    k.clearInterval.bind(k));
  const he = u.addStyle.bind(u);
  B.addBlockCSS.bind(B);
  const $e = O.selector.bind(O),
    Ee = O.selectorAll.bind(O);
  new y.GM_Cookie();
  const J = "GM_Panel",
    ke = "data-init",
    te = "data-key",
    ne = "data-default-value",
    Se = "data-init-more-value",
    Le = "data-plugin-search-config",
    ae = "data-storage-api",
    K = {
      get width() {
        return globalThis.innerWidth;
      },
      get height() {
        return globalThis.innerHeight;
      },
    },
    N = {
      setting: {
        get width() {
          return K.width < 550 ? "88vw" : K.width < 700 ? "550px" : "700px";
        },
        get height() {
          return K.height < 450 ? "70vh" : K.height < 550 ? "450px" : "550px";
        },
      },
      settingMiddle: {
        get width() {
          return K.width < 350 ? "88vw" : "350px";
        },
      },
      info: {
        get width() {
          return K.width < 350 ? "88vw" : "350px";
        },
        get height() {
          return K.height < 250 ? "88vh" : "250px";
        },
      },
    },
    Q = {
      $data: {
        __contentConfig: null,
        get contentConfig() {
          return (this.__contentConfig == null && (this.__contentConfig = new y.Dictionary()), this.__contentConfig);
        },
        __defaultBottomContentConfig: [],
      },
      addContentConfig(e) {
        Array.isArray(e) || (e = [e]);
        let t = this.$data.contentConfig.keys().length;
        this.$data.contentConfig.set(t, e);
      },
      getAllContentConfig() {
        return this.$data.contentConfig.values().flat();
      },
      getConfig(e = 0) {
        return this.$data.contentConfig.get(e) ?? [];
      },
      getDefaultBottomContentConfig() {
        if (this.$data.__defaultBottomContentConfig.length) return this.$data.__defaultBottomContentConfig;
        let e = false,
          t;
        const n = (i, r) => {
            typeof r != "string" && (r = B.toStr(r));
            const g = new Blob([r]),
              l = globalThis.URL.createObjectURL(g);
            (u.createElement("a", { href: l, download: i }).click(),
              y.workerSetTimeout(() => {
                globalThis.URL.revokeObjectURL(l);
              }, 500));
          },
          a = () => {
            const i = (x) => {
                const c = P.alert({
                    title: { text: "请选择导入方式", position: "center" },
                    content: {
                      text: `
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,
                      html: true,
                    },
                    btn: {
                      ok: { enable: false },
                      close: {
                        enable: true,
                        callback(L, C) {
                          L.close();
                        },
                      },
                    },
                    drag: true,
                    mask: { enable: true },
                    width: N.info.width,
                    height: N.info.height,
                    style: `
          .btn-control{
              display: inline-block;
              margin: 10px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`,
                  }),
                  m = c.$shadowRoot.querySelector(".btn-control[data-mode='local']"),
                  $ = c.$shadowRoot.querySelector(".btn-control[data-mode='network']"),
                  U = c.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),
                  R = async (L) => {
                    (confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）") &&
                      (typeof j == "function"
                        ? typeof X == "function"
                          ? (j().forEach((s) => {
                              X(s);
                            }),
                            M.success("已清空脚本存储的配置"))
                          : M.error("不支持GM_deleteValue函数，无法执行删除脚本配置")
                        : M.error("不支持GM_listValues函数，无法清空脚本存储的配置")),
                      typeof fe == "function"
                        ? fe(L)
                        : Object.keys(L).forEach((s) => {
                            const f = L[s];
                            re(s, f);
                          }),
                      M.success("配置导入完毕"));
                  },
                  I = (L) =>
                    new Promise(async (C) => {
                      const v = y.toJSON(L);
                      (Object.keys(v).length === 0 ? M.warning("解析为空配置，不导入") : await R(v), C(true));
                    });
                (u.on(m, "click", (L) => {
                  (u.preventEvent(L), c.close());
                  const C = u.createElement("input", { type: "file", accept: ".json" });
                  (u.on(C, ["propertychange", "input"], (v) => {
                    if (!C.files?.length) return;
                    const s = C.files[0],
                      f = new FileReader();
                    ((f.onload = () => {
                      I(f.result);
                    }),
                      f.readAsText(s, "UTF-8"));
                  }),
                    C.click());
                }),
                  u.on($, "click", (L) => {
                    (u.preventEvent(L), c.close());
                    const C = P.prompt({
                        title: { text: "网络导入", position: "center" },
                        content: { text: "", placeholder: "请填写URL", focus: true },
                        btn: {
                          close: {
                            enable: true,
                            callback(f, E) {
                              f.close();
                            },
                          },
                          ok: {
                            text: "导入",
                            callback: async (f, E) => {
                              const w = f.text;
                              if (y.isNull(w)) {
                                M.error("请填入完整的url");
                                return;
                              }
                              const h = M.loading("正在获取配置..."),
                                _ = await se.get(w, { allowInterceptConfig: false });
                              if ((h.close(), !_.status)) {
                                (S.error(_), M.error("获取配置失败", { consoleLogContent: true }));
                                return;
                              }
                              (await I(_.data.responseText)) && f.close();
                            },
                          },
                          cancel: { enable: false },
                        },
                        drag: true,
                        mask: { enable: true },
                        width: N.info.width,
                        height: "auto",
                      }),
                      v = C.$shadowRoot.querySelector("input"),
                      s = C.$shadowRoot.querySelector(".pops-prompt-btn-ok");
                    (u.on(v, ["input", "propertychange"], (f) => {
                      u.val(v) === "" ? u.attr(s, "disabled", "true") : u.removeAttr(s, "disabled");
                    }),
                      u.onKeyboard(v, "keydown", (f, E, w) => {
                        f === "Enter" && w.length === 0 && u.val(v) !== "" && u.emit(s, "click");
                      }),
                      u.emit(v, "input"));
                  }),
                  u.on(U, "click", async (L) => {
                    (u.preventEvent(L), c.close());
                    let C = await B.getClipboardText();
                    if (C.trim() === "") {
                      M.warning("获取到的剪贴板内容为空");
                      return;
                    }
                    await I(C);
                  }));
              },
              r = (x = `${ee}_panel-setting-${y.formatTime(Date.now(), "yyyy_MM_dd_HH_mm_ss")}.json`, c) => {
                const m = P.alert({
                    title: { text: "请选择导出方式", position: "center" },
                    content: {
                      text: `
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,
                      html: true,
                    },
                    btn: {
                      ok: { enable: false },
                      close: {
                        enable: true,
                        callback(R, I) {
                          R.close();
                        },
                      },
                    },
                    drag: true,
                    mask: { enable: true },
                    width: N.info.width,
                    height: N.info.height,
                    style: `
          .btn-control{
              display: inline-block;
              margin: 10px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`,
                  }),
                  $ = m.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),
                  U = m.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");
                (u.on($, "click", (R) => {
                  u.preventEvent(R);
                  try {
                    (n(x, c), m.close());
                  } catch (I) {
                    M.error(I.toString(), { consoleLogContent: true });
                  }
                }),
                  u.on(U, "click", async (R) => {
                    (await y.copy(c)) ? (M.success("复制成功"), m.close()) : M.error("复制失败");
                  }));
              },
              l = P.confirm({
                title: { text: "配置", position: "center" },
                content: {
                  text: `
            <textarea name="config-value" id="config" readonly></textarea>
          `,
                  html: true,
                },
                btn: {
                  ok: {
                    enable: true,
                    type: "primary",
                    text: "导入",
                    callback(x, c) {
                      i();
                    },
                  },
                  cancel: {
                    enable: true,
                    text: "导出",
                    callback(x, c) {
                      r(void 0, b);
                    },
                  },
                },
                width: K.width < 450 ? "90vw" : "450px",
                height: "auto",
                style: `
          .pops-content textarea {
            --textarea-bd-color: #dcdfe6;
            display: inline-block;
            resize: vertical;
            padding: 5px 15px;
            margin: 0;
            line-height: normal;
            box-sizing: border-box;
            color: #606266;
            border: 0;
            border-radius: 0;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: none;
            width: 100%;
            height: 100%;
            appearance: none;
            resize: none;
          }
          .pops-content textarea{
            height: 500px;
          }
          .pops-content textarea:focus {
            --textarea-bd-color: #3677f0;
          }
          .pops-content textarea:hover {
            --textarea-bd-color: #c0c4cc;
          }
        `,
              }).$shadowRoot.querySelector("textarea"),
              d = {};
            if (typeof j == "function")
              j().forEach((c) => {
                const m = Z(c);
                Reflect.set(d, c, m);
              });
            else {
              M.warning("不支持函数GM_listValues，仅导出菜单配置");
              const x = Z(J);
              Reflect.set(d, J, x);
            }
            const b = B.toStr(d);
            l.value = b;
          },
          o = () => {
            let i = z?.script?.supportURL || z?.script?.namespace;
            typeof i == "string" && y.isNotNull(i) && window.open(i, "_blank");
          };
        return [
          {
            id: "script-version",
            title: `版本：${z?.script?.version || "未知"}`,
            isBottom: true,
            views: [],
            clickFirstCallback() {
              return false;
            },
            afterRender(i) {
              new Ve(i.$asideLiElement).on("tap", function (g) {
                (clearTimeout(t),
                  (t = void 0),
                  e
                    ? ((e = false), a())
                    : ((t = setTimeout(() => {
                        ((e = false), o());
                      }, 200)),
                      (e = true)));
              });
            },
          },
        ];
      },
      setDefaultBottomContentConfig(e) {
        this.$data.__defaultBottomContentConfig = e;
      },
    },
    De = {
      $data: {
        __menuOption: [
          {
            key: "show_pops_panel_setting",
            text: "⚙ 设置",
            autoReload: false,
            isStoreValue: false,
            showText(e) {
              return e;
            },
            callback: () => {
              G.showPanel(Q.getConfig(0));
            },
          },
        ],
        get menuOption() {
          return this.__menuOption;
        },
      },
      init() {
        this.initExtensionsMenu();
      },
      initExtensionsMenu() {
        B.isTopWindow() && Me.add(this.$data.menuOption);
      },
      addMenuOption(e) {
        (Array.isArray(e) || (e = [e]), this.$data.menuOption.push(...e));
      },
      updateMenuOption(e) {
        (Array.isArray(e) || (e = [e]),
          e.forEach((t) => {
            let n = this.$data.menuOption.findIndex((a) => a.key === t.key);
            n !== -1 && (this.$data.menuOption[n] = t);
          }));
      },
      getMenuOption(e = 0) {
        return this.$data.menuOption[e];
      },
      deleteMenuOption(e = 0) {
        this.$data.menuOption.splice(e, 1);
      },
    };
  class ge {
    storageKey;
    listenerData;
    cacheData;
    callbacks = [];
    constructor(t) {
      if (typeof t == "string") {
        const n = t.trim();
        if (n == "") throw new Error("key can not be empty string");
        this.storageKey = n;
      } else throw new TypeError("key must be a string");
      ((this.listenerData = new ie.Dictionary()),
        (this.getLocalValue = this.getLocalValue.bind(this)),
        (this.setLocalValue = this.setLocalValue.bind(this)),
        (this.destory = this.destory.bind(this)),
        (this.set = this.set.bind(this)),
        (this.get = this.get.bind(this)),
        (this.getAll = this.getAll.bind(this)),
        (this.delete = this.delete.bind(this)),
        (this.has = this.has.bind(this)),
        (this.keys = this.keys.bind(this)),
        (this.values = this.values.bind(this)),
        (this.clear = this.clear.bind(this)),
        (this.addValueChangeListener = this.addValueChangeListener.bind(this)),
        (this.removeValueChangeListener = this.removeValueChangeListener.bind(this)),
        (this.emitValueChangeListener = this.emitValueChangeListener.bind(this)));
    }
    [Symbol.dispose]() {
      this.destory();
    }
    async [Symbol.asyncDispose]() {
      this.destory();
    }
    destory() {
      this.cacheData = null;
      for (let t = this.callbacks.length - 1; t >= 0; t--) {
        const n = this.callbacks[t];
        (n(), this.callbacks.splice(t, 1));
      }
    }
    getLocalValue() {
      if (this.cacheData == null) {
        let t = Z(this.storageKey);
        (t == null && ((t = {}), this.setLocalValue(t)), this.destory(), (this.cacheData = t));
        const n = be(this.storageKey, (a, o, i) => {
          ((this.cacheData = null), (this.cacheData = i));
        });
        return (
          this.callbacks.push(() => {
            Ce(n);
          }),
          t
        );
      } else return this.cacheData;
    }
    setLocalValue(t) {
      ((this.cacheData = null), (this.cacheData = t), re(this.storageKey, t));
    }
    set(t, n) {
      const a = this.get(t),
        o = this.getLocalValue();
      (Reflect.set(o, t, n), this.setLocalValue(o), this.emitValueChangeListener(t, n, a));
    }
    get(t, n) {
      const a = this.getLocalValue();
      return Reflect.get(a, t) ?? n;
    }
    getAll() {
      return this.getLocalValue();
    }
    delete(t) {
      const n = this.get(t),
        a = this.getLocalValue();
      (Reflect.deleteProperty(a, t), this.setLocalValue(a), this.emitValueChangeListener(t, void 0, n));
    }
    has(t) {
      const n = this.getLocalValue();
      return Reflect.has(n, t);
    }
    keys() {
      const t = this.getLocalValue();
      return Reflect.ownKeys(t);
    }
    values() {
      const t = this.getLocalValue();
      return Reflect.ownKeys(t).map((n) => Reflect.get(t, n));
    }
    clear() {
      (this.destory(), X(this.storageKey));
    }
    addValueChangeListener(t, n) {
      const a = Math.random(),
        o = this.listenerData.get(t) || [];
      return (o.push({ id: a, key: t, callback: n }), this.listenerData.set(t, o), a);
    }
    removeValueChangeListener(t) {
      let n = false;
      for (const [a, o] of this.listenerData.entries()) {
        for (let i = 0; i < o.length; i++) {
          const r = o[i];
          ((typeof t == "string" && r.key === t) || (typeof t == "number" && r.id === t)) &&
            (o.splice(i, 1), i--, (n = true));
        }
        this.listenerData.set(a, o);
      }
      return n;
    }
    async emitValueChangeListener(...t) {
      const [n, a, o] = t;
      if (!this.listenerData.has(n)) return;
      const i = this.listenerData.get(n);
      for (let r = 0; r < i.length; r++) {
        const g = i[r];
        if (typeof g.callback == "function") {
          let l, d;
          (t.length === 1 || (t.length === 2 ? (l = a) : t.length === 3 && ((l = a), (d = o))),
            await g.callback(n, l, d));
        }
      }
    }
  }
  const F = new ge(J),
    G = {
      $data: {
        __contentConfigInitDefaultValue: null,
        __onceExecMenuData: null,
        __urlChangeReloadMenuExecOnce: null,
        __onceExecData: null,
        __panelConfig: {},
        $panel: null,
        panelContent: [],
        get contentConfigInitDefaultValue() {
          return (
            this.__contentConfigInitDefaultValue == null && (this.__contentConfigInitDefaultValue = new y.Dictionary()),
            this.__contentConfigInitDefaultValue
          );
        },
        contentConfigInitDisabledKeys: [],
        get onceExecMenuData() {
          return (
            this.__onceExecMenuData == null && (this.__onceExecMenuData = new y.Dictionary()), this.__onceExecMenuData
          );
        },
        get urlChangeReloadMenuExecOnce() {
          return (
            this.__urlChangeReloadMenuExecOnce == null && (this.__urlChangeReloadMenuExecOnce = new y.Dictionary()),
            this.__urlChangeReloadMenuExecOnce
          );
        },
        get onceExecData() {
          return (this.__onceExecData == null && (this.__onceExecData = new y.Dictionary()), this.__onceExecData);
        },
        get scriptName() {
          return ee;
        },
        get panelConfig() {
          return this.__panelConfig;
        },
        set panelConfig(e) {
          this.__panelConfig = e;
        },
        key: J,
        attributeKeyName: te,
        attributeDefaultValueName: ne,
      },
      init() {
        (this.initContentDefaultValue(), De.init());
      },
      initContentDefaultValue() {
        const e = (a) => {
            if (!a.attributes || a.type === "button" || a.type === "container" || a.type === "deepMenu") return;
            const o = a.attributes,
              i = o[ke];
            if (typeof i == "function") {
              const d = i();
              if (typeof d == "boolean" && !d) return;
            }
            const r = new Map(),
              g = o[te];
            if (g != null) {
              const d = o[ne];
              r.set(g, d);
            }
            const l = o[Se];
            if (
              (typeof l == "object" &&
                l &&
                Object.keys(l).forEach((d) => {
                  const b = l[d];
                  r.set(d, b);
                }),
              !r.size)
            ) {
              S.warn("请先配置键", a);
              return;
            }
            if (a.type === "switch") {
              const d = typeof a.disabled == "function" ? a.disabled() : a.disabled;
              typeof d == "boolean" && d && this.$data.contentConfigInitDisabledKeys.push(...r.keys());
            }
            for (const [d, b] of r.entries()) this.setDefaultValue(d, b);
          },
          t = (a) => {
            for (let o = 0; o < a.length; o++) {
              const i = a[o];
              e(i);
              const r = i.views;
              r && Array.isArray(r) && t(r);
            }
          },
          n = [...Q.getAllContentConfig()];
        for (let a = 0; a < n.length; a++) {
          const o = n[a];
          if (!o.views) continue;
          const i = o.views;
          i && Array.isArray(i) && t(i);
        }
        this.$data.contentConfigInitDisabledKeys = [...new Set(this.$data.contentConfigInitDisabledKeys)];
      },
      setDefaultValue(e, t) {
        (this.$data.contentConfigInitDefaultValue.has(e) &&
          S.warn("该key已存在，初始化默认值失败: ", {
            key: e,
            initValue: this.$data.contentConfigInitDefaultValue.get(e),
          }),
          this.$data.contentConfigInitDefaultValue.set(e, t));
      },
      getDefaultValue(e) {
        return this.$data.contentConfigInitDefaultValue.get(e);
      },
      setValue(e, t) {
        F.set(e, t);
      },
      getValue(e, t) {
        const n = F.get(e);
        return (
          n ?? (this.$data.contentConfigInitDefaultValue.has(e) ? this.$data.contentConfigInitDefaultValue.get(e) : t)
        );
      },
      deleteValue(e) {
        F.delete(e);
      },
      hasKey(e) {
        return F.has(e);
      },
      addValueChangeListener(e, t, n) {
        const a = F.addValueChangeListener(e, t);
        if (n?.immediate || n?.immediateAll) {
          const o = this.getValue(e);
          n?.immediate ? t(e, o, o) : n?.immediateAll && G.emitMenuValueChange(e, o, o);
        }
        return a;
      },
      removeValueChangeListener(e) {
        F.removeValueChangeListener(e);
      },
      emitMenuValueChange(e, t, n) {
        F.emitValueChangeListener(e, t, n);
      },
      async exec(e, t, n, a = true) {
        const o = this;
        let i;
        typeof e == "string" || Array.isArray(e) ? (i = () => e) : (i = e);
        let r = false;
        const g = i();
        let l = [];
        Array.isArray(g) ? ((r = true), (l = g)) : l.push(g);
        const d = l.find((s) => !this.$data.contentConfigInitDefaultValue.has(s));
        if (d) {
          S.warn(`${d} 键不存在`);
          return;
        }
        const b = JSON.stringify(l);
        if (a && this.$data.onceExecMenuData.has(b)) return this.$data.onceExecMenuData.get(b);
        let x = [];
        const c = [];
        let m = [];
        const $ = (s, f) => {
            const E = [],
              w = [];
            let h = [];
            if (Array.isArray(f)) h = h.concat(f);
            else {
              const p = (V) => {
                if (typeof V == "object" && V != null)
                  if (V instanceof Element) h.push(V);
                  else {
                    const { $css: A, destory: T } = V;
                    (A != null && (Array.isArray(A) ? (h = h.concat(A)) : h.push(A)),
                      typeof T == "function" && h.push(T));
                  }
                else h.push(V);
              };
              if (f != null && Array.isArray(f)) for (const V of f) p(V);
              else p(f);
            }
            const _ = (p) => {
              if (p != null) {
                if (p instanceof Element) {
                  E.push(p);
                  return;
                }
                if (typeof p == "function") {
                  w.push(p);
                  return;
                }
              }
            };
            for (const p of h) {
              const V = _(p);
              if (typeof V == "boolean" && !V) break;
              if (Array.isArray(p))
                for (const A of p) {
                  const T = _(A);
                  if (typeof T == "boolean" && !T) break;
                }
            }
            (R(), I(), s && ((x = x.concat(E)), (m = m.concat(w))));
          },
          U = (s) => !!this.getValue(s),
          R = () => {
            for (let s = 0; s < x.length; s++) (x[s]?.remove(), x.splice(s, 1), s--);
          },
          I = () => {
            for (let s = 0; s < m.length; s++) {
              const f = m[s];
              (f(), m.splice(s, 1), s--);
            }
          },
          L = () => {
            let s = false;
            return (typeof n == "function" ? (s = n(l)) : (s = l.every((f) => U(f))), s);
          },
          C = async (s) => {
            const f = L();
            let E = [];
            if (f) {
              const w = l.map((h) => this.getValue(h));
              E = await t({ key: l, triggerKey: s?.key, value: r ? w : w[0], addStoreValue: (...h) => $(f, h) });
            }
            $(f, E);
          };
        (a &&
          l.forEach((s) => {
            const f = this.addValueChangeListener(s, (E, w, h) => C({ key: E }));
            c.push(f);
          }),
          await C());
        const v = {
          reload() {
            (this.clearStoreStyleElements(), this.destory(), C());
          },
          clear() {
            (this.clearStoreStyleElements(),
              this.destory(),
              this.removeValueChangeListener(),
              this.clearOnceExecMenuData());
          },
          clearStoreStyleElements: () => R(),
          destory() {
            return I();
          },
          removeValueChangeListener: () => {
            c.forEach((s) => {
              this.removeValueChangeListener(s);
            });
          },
          clearOnceExecMenuData() {
            a && o.$data.onceExecMenuData.delete(b);
          },
        };
        return (this.$data.onceExecMenuData.set(b, v), v);
      },
      async execMenu(e, t, n = false, a = false) {
        return await this.exec(
          e,
          async (o) => await t(o),
          (o) =>
            o.every((r) => {
              let g = !!this.getValue(r);
              return (
                G.$data.contentConfigInitDisabledKeys.includes(r) &&
                  ((g = false), S.warn(`.execMenu${a ? "Once" : ""} ${r} 被禁用`)),
                n && (g = !g),
                g
              );
            }),
          a
        );
      },
      async execMenuOnce(e, t, n = false, a = false) {
        const o = await this.execMenu(e, t, n, true);
        if (a && o) {
          const i = () => {
            o.reload();
          };
          (this.removeUrlChangeWithExecMenuOnceListener(e), this.addUrlChangeWithExecMenuOnceListener(e, i));
        }
        return o;
      },
      deleteExecMenuOnce(e) {
        return (
          (e = this.transformKey(e)),
          this.$data.onceExecMenuData.delete(e),
          this.$data.urlChangeReloadMenuExecOnce.delete(e),
          F.removeValueChangeListener(e)
        );
      },
      onceExec(e, t, n = false) {
        if (((e = this.transformKey(e)), typeof e != "string")) throw new TypeError("key 必须是字符串");
        this.$data.onceExecData.has(e) ||
          (n &&
            (Array.isArray(e) ? e : [e]).findIndex((o) => {
              if (!!!G.getValue(o)) return true;
            }) !== -1) ||
          (t(), this.$data.onceExecData.set(e, 1));
      },
      deleteOnceExec(e) {
        ((e = this.transformKey(e)), this.$data.onceExecData.delete(e));
      },
      addUrlChangeWithExecMenuOnceListener(e, t) {
        return (
          (e = this.transformKey(e)),
          this.$data.urlChangeReloadMenuExecOnce.set(e, t),
          { off: () => this.removeUrlChangeWithExecMenuOnceListener(e) }
        );
      },
      removeUrlChangeWithExecMenuOnceListener(e) {
        ((e = this.transformKey(e)), this.$data.urlChangeReloadMenuExecOnce.delete(e));
      },
      hasUrlChangeWithExecMenuOnceListener(e) {
        return ((e = this.transformKey(e)), this.$data.urlChangeReloadMenuExecOnce.has(e));
      },
      async emitUrlChangeWithExecMenuOnceEvent(e) {
        const t = this.$data.urlChangeReloadMenuExecOnce.values();
        for (const n of t) await n(e);
      },
      showPanel(e, t = `${ee}-设置`, n = false, a = false) {
        ((this.$data.$panel = null), (this.$data.panelContent = []));
        const o =
          e.findIndex(
            (r) => (typeof r.isBottom == "function" ? r.isBottom() : !!r.isBottom) && r.id === "script-version"
          ) !== -1;
        !n && !o && e.push(...Q.getDefaultBottomContentConfig());
        const i = P.panel({
          title: { text: t, position: "center", html: false, style: "" },
          content: e,
          btn: {
            close: {
              enable: true,
              callback: (r) => {
                (r.close(), (this.$data.$panel = null));
              },
            },
          },
          mask: {
            enable: true,
            clickEvent: { toClose: true, toHide: false },
            clickCallBack: (r) => {
              (r(), (this.$data.$panel = null));
            },
          },
          width: N.setting.width,
          height: N.setting.height,
          drag: true,
          only: true,
          style: `
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,
          ...this.$data.panelConfig,
        });
        ((this.$data.$panel = i),
          (this.$data.panelContent = e),
          a || this.registerConfigSearch({ $panel: i, content: e }));
      },
      registerConfigSearch(e) {
        const { $panel: t, content: n } = e,
          a = async (c, m) => {
            if (c == null) return;
            const $ = await m(c);
            return $ && typeof $.isFind == "boolean" && $.isFind ? $.data : await a($.data, m);
          },
          o = (c, m) => {
            const $ = new IntersectionObserver(
              (U) => {
                U.forEach((R) => {
                  R.isIntersecting && (m?.(), $.disconnect());
                });
              },
              { root: null, threshold: 1 }
            );
            ($.observe(c), c.scrollIntoView({ behavior: "smooth", block: "center" }));
          },
          i = (c) => {
            const m = "pops-flashing";
            (u.onAnimationend(c, () => {
              c.classList.remove(m);
            }),
              c.classList.add(m));
          },
          r = (c) => {
            if (c.type === "dblclick" && x) return;
            u.preventEvent(c);
            const m = P.alert({
              title: { text: "搜索配置", position: "center" },
              content: {
                text: `
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,
                html: true,
              },
              btn: { ok: { enable: false } },
              mask: { clickEvent: { toClose: true } },
              width: N.settingMiddle.width,
              height: "auto",
              drag: true,
              style: `
					${P.config.cssText.panelCSS}

					.search-wrapper{
						border-bottom: 1px solid rgb(235, 238, 245, 1);
					}
					.pops-content:has(.search-result-wrapper:empty) .search-wrapper{
						border-bottom: 0;
					}
					.search-config-text{
						width: 100%;
						border: 0;
						height: 32px;
						padding: 0px 10px;
						outline: none;
					}
					.search-result-wrapper{
						max-height: 400px;
						overflow: auto;
					}
					.search-result-item{
						cursor: pointer;
						padding: 5px 10px;
						display: flex;
						flex-direction: column;
					}
					.search-result-item:hover{
						background-color: #D8F1FD;
					}
					.search-result-item-path{
						display: flex;
    					align-items: center;
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${e.searchDialogStyle ?? ""}
				`,
            });
            m.$shadowRoot.querySelector(".search-wrapper");
            const $ = m.$shadowRoot.querySelector(".search-config-text"),
              U = m.$shadowRoot.querySelector(".search-result-wrapper");
            $.focus();
            const R = () => {
                u.empty(U);
              },
              I = (C) => {
                const v = y.queryProperty(C, (E) =>
                    E?.next ? { isFind: false, data: E.next } : { isFind: true, data: E }
                  ),
                  s = u.createElement("div", {
                    className: "search-result-item",
                    innerHTML: `
							<div class="search-result-item-path">${v.matchedData?.path}</div>
							<div class="search-result-item-description">${v.matchedData?.description ?? ""}</div>
						`,
                  }),
                  f = P.fn.PanelHandlerComponents();
                return (
                  u.on(s, "click", () => {
                    const w = t.$shadowRoot.querySelectorAll(
                      "aside.pops-panel-aside .pops-panel-aside-top-container li"
                    )[C.index];
                    if (!w) {
                      M.error(`左侧项下标${C.index}不存在`);
                      return;
                    }
                    (w.scrollIntoView({ behavior: "smooth", block: "center" }),
                      w.click(),
                      a(C.next, async (h) => {
                        if (h?.next) {
                          const _ = await u.waitNode(
                            () =>
                              Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find((p) => {
                                const V = Reflect.get(p, f.$data.nodeStoreConfigKey);
                                return typeof V == "object" && V != null && V.text === h.name;
                              }),
                            2500
                          );
                          if (_) _.click();
                          else return (M.error("未找到对应的二级菜单"), { isFind: true, data: h });
                          return { isFind: false, data: h.next };
                        } else {
                          const _ = await u.waitNode(
                            () =>
                              Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(
                                (p) => Reflect.get(p, f.$data.nodeStoreConfigKey) === h.matchedData?.formConfig
                              ),
                            2500
                          );
                          if (_) {
                            o(_);
                            const p = _.closest(".pops-panel-forms-fold[data-fold-enable]");
                            (p && (p.querySelector(".pops-panel-forms-fold-container").click(), await y.sleep(500)),
                              o(_, () => {
                                i(_);
                              }));
                          } else M.error("未找到对应的菜单项");
                          return { isFind: true, data: h };
                        }
                      }));
                  }),
                  s
                );
              },
              L = (C) => {
                const v = new RegExp(C, "i"),
                  s = [],
                  f = (w, h) => {
                    for (let _ = 0; _ < w.length; _++) {
                      const p = w[_],
                        V = p.views;
                      if (V && Array.isArray(V)) {
                        const A = y.deepClone(h);
                        if (p.type === "deepMenu") {
                          const T = y.queryProperty(A, (W) =>
                            W?.next ? { isFind: false, data: W.next } : { isFind: true, data: W }
                          );
                          T.next = { name: p.text };
                        }
                        f(V, A);
                      } else {
                        let A, T;
                        if (p.type === "own") {
                          let D = Reflect.get(p.attributes || {}, Le);
                          D &&
                            (typeof D == "function" && (D = D()),
                            typeof D.text == "string" && (A = D.text),
                            typeof D.desc == "string" && (T = D.desc));
                        } else ((A = p.text), (T = Reflect.get(p, "description")));
                        const W = [A, T],
                          le = W.findIndex((D) => {
                            if (typeof D == "string") return D.match(v);
                          });
                        if (le !== -1) {
                          const D = y.deepClone(h),
                            ce = y.queryProperty(D, (q) =>
                              q?.next ? { isFind: false, data: q.next } : { isFind: true, data: q }
                            );
                          ce.next = {
                            name: A,
                            matchedData: { path: "", formConfig: p, matchedText: W[le], description: T },
                          };
                          const ue = [];
                          y.queryProperty(D, (q) => {
                            const Y = q?.name;
                            return (
                              typeof Y == "string" && Y.trim() !== "" && ue.push(Y),
                              q?.next ? { isFind: false, data: q.next } : { isFind: true, data: q }
                            );
                          });
                          const me = ue.join(B.escapeHtml(" - "));
                          ((ce.next.matchedData.path = me), s.push(D));
                        }
                      }
                    }
                  };
                for (let w = 0; w < n.length; w++) {
                  const h = n[w];
                  if (!h.views || (h.isBottom && h.id === "script-version")) continue;
                  const _ = h.views;
                  if (_ && Array.isArray(_)) {
                    let p = h.title;
                    (typeof p == "function" && (p = p()), f(_, { index: w, name: p }));
                  }
                }
                const E = document.createDocumentFragment();
                for (const w of s) {
                  const h = I(w);
                  E.appendChild(h);
                }
                (R(), U.append(E));
              };
            u.on(
              $,
              "input",
              y.debounce((C) => {
                u.preventEvent(C);
                const v = u.val($).trim();
                if (v === "") {
                  R();
                  return;
                }
                L(v);
              }, 200)
            );
          };
        t.$shadowRoot
          .querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)")
          .forEach((c) => {
            u.on(c, "dblclick", r);
          });
        const l = new WeakMap();
        let d = false,
          b,
          x = false;
        (u.on(
          t.$shadowRoot,
          "touchend",
          "aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",
          (c, m) => {
            ((x = true),
              clearTimeout(b),
              (b = void 0),
              d && l.has(m)
                ? ((d = false), l.delete(m), r(c))
                : ((b = setTimeout(() => {
                    d = false;
                  }, 200)),
                  (d = true),
                  l.set(m, c)));
          },
          { capture: true }
        ),
          t.$shadowRoot.appendChild(
            u.createElement("style", {
              type: "text/css",
              textContent: `
    			.pops-flashing{
    				animation: double-blink 1.5s ease-in-out;
    			}
    			@keyframes double-blink {
    				 0% {
    					background-color: initial;
    				}
    				25% {
    					background-color: yellow;
    				}
    				50% {
    					background-color: initial;
    				}
    				75% {
    					background-color: yellow;
    				}
    				100% {
    					background-color: initial;
    				}
    			}
    		`,
            })
          ));
      },
      transformKey(e) {
        if (Array.isArray(e)) {
          const t = e.sort();
          return JSON.stringify(t);
        } else return e;
      },
      getDynamicValue(e, t) {
        const n = this;
        let a = false,
          o = t;
        const i = this.addValueChangeListener(e, (r, g) => {
          o = g;
        });
        return {
          get value() {
            return (a || ((a = true), (o = n.getValue(e, t))), o);
          },
          destory() {
            n.removeValueChangeListener(i);
          },
        };
      },
    },
    Re = {
      $data: {
        __storeApiFn: null,
        get storeApiValue() {
          return (this.__storeApiFn || (this.__storeApiFn = new ie.Dictionary()), this.__storeApiFn);
        },
      },
      getStorageApi(e) {
        if (this.hasStorageApi(e)) return this.$data.storeApiValue.get(e);
      },
      hasStorageApi(e) {
        return this.$data.storeApiValue.has(e);
      },
      setStorageApi(e, t) {
        this.$data.storeApiValue.set(e, t);
      },
      initComponentsStorageApi(e, t, n) {
        let a;
        (this.hasStorageApi(e) ? (a = this.getStorageApi(e)) : (a = n), this.setComponentsStorageApiProperty(t, a));
      },
      setComponentsStorageApiProperty(e, t) {
        Reflect.set(e.props, ae, t);
      },
    },
    Ae = function (e, t, n = false, a, o, i, r, g, l) {
      const d = {
        text: e,
        type: "switch",
        description: o,
        disabled: r,
        attributes: {},
        props: {},
        getValue() {
          return this.props[ae].get(t, n);
        },
        callback(b, x) {
          const c = !!x;
          (S.success(`${c ? "开启" : "关闭"} ${e}`), this.props[ae].set(t, c));
        },
        afterAddToUListCallBack: (...b) => {},
      };
      return (
        Reflect.set(d.attributes, te, t),
        Reflect.set(d.attributes, ne, n),
        Re.initComponentsStorageApi("switch", d, {
          get(b, x) {
            return G.getValue(b, x);
          },
          set(b, x) {
            G.setValue(b, x);
          },
        }),
        d
      );
    },
    Ie = {
      id: "view-general",
      title: "通用",
      views: [
        {
          type: "container",
          text: "功能",
          views: [
            Ae("默认规则", "user-rule-default-enable", true, void 0, "如果当前网站没有设置规则，那么使用默认规则"),
          ],
        },
      ],
    },
    Te = new ge("user-rule-data"),
    Oe = () => ({
      url: "*://*/*",
      selector: "img",
      mode: "handleClickEvent",
      isPreventDefault: true,
      clickEvent: `
      const $image = event.target;
      const url = this.ImageUtils.getImageElementUrl($image);
      resolve({
        "isView": true,
        "imageList": [url],
      });
      `,
    }),
    Ge = {
      getImageElementUrl(e) {
        function t(a) {
          return a.trim() === "null" || a.trim() === "undefined" || a.trim() === "";
        }
        if (e == null || (typeof e == "string" && t(e))) return;
        let n = "";
        if (
          (t(n) && e.hasAttribute("data-src") && (n = e.getAttribute("data-src")),
          t(n) && e.hasAttribute("src") && (n = e.getAttribute("src")),
          t(n) && e.hasAttribute("alt") && (n = e.getAttribute("alt")),
          !t(n))
        )
          return n;
      },
    },
    Ue = {
      viewIMG(e, t = 0) {
        S.info(["查看图片", [e, t]]);
        let n = "";
        e.forEach((i) => {
          n += `<li><img data-src="${i}" loading="lazy"></li>`;
        });
        let a = u.createElement("ul", { innerHTML: n }),
          o = new ye(a, {
            inline: false,
            url: "data-src",
            zIndex: y.getMaxZIndex() + 100,
            hidden: () => {
              o.destroy();
            },
          });
        ((t = parseInt(t.toString())), (isNaN(t) || t < 0) && (t = 0), o.view(t), o.zoomTo(1), o.show());
      },
    },
    Pe = {
      $data: {
        get defaultRule() {
          return Oe();
        },
        get userRule() {
          return Te.get("user-rule", []);
        },
        currentRule: [],
      },
      execRule() {
        (S.info("正在匹配当前网站规则..."),
          this.$data.userRule.forEach((e, t) => {
            if (y.isNull(e)) {
              S.error(["改规则不存在匹配Url", [e, t]]);
              return;
            }
            new RegExp(e.url, "gi").test(window.location.href) && this.$data.currentRule.push(e);
          }),
          this.$data.currentRule.length === 0 &&
            G.getValue("user-rule-default-enable") &&
            this.$data.currentRule.push(this.$data.defaultRule),
          S.success(["当前的看图规则", this.$data.currentRule]),
          this.$data.currentRule.forEach((e) => {
            e.mode === "handleClickEvent"
              ? this.handleClickEvent(e)
              : e.mode === "handleElement"
                ? this.handleElement(e)
                : S.error(["未知模式的规则", e]);
          }));
      },
      handleClickEvent(e) {
        function t(n) {
          n != null &&
            u.on(
              n,
              "click",
              e.selector,
              async (a) => {
                e.isPreventDefault && u.preventEvent(a);
                const o = a.target;
                if (o instanceof HTMLImageElement && o.closest(".viewer-container")) return;
                let i = [],
                  r = 0;
                if (typeof e.clickEvent == "string") {
                  let l = await (function (d) {
                    return new Promise((b, x) => {
                      new Function("event", "resolve", "reject", e.clickEvent).bind({
                        ImageUtils: Ge,
                        utils: y,
                        DOMUtils: u,
                      })(d, b, x);
                    });
                  })(a);
                  if (!l.isView) return;
                  (Array.isArray(l.imageList) && (i = l.imageList),
                    typeof l.imageIndex == "number" && ((r = l.imageIndex), (r < 0 || r >= i.length) && (r = 0)));
                }
                Ue.viewIMG(i, r);
              },
              { capture: true }
            );
        }
        typeof e.context == "string"
          ? u.waitNode(e.context).then((n) => {
              e.useSelector === "querySelector" ? t($e(e.context)) : t(Ee(e.context));
            })
          : t(document);
      },
      handleElement(e) {},
    };
  Q.addContentConfig([Ie]);
  G.init();
  O.onReady(() => {
    Pe.execRule();
  });
})(Qmsg, DOMUtils, pops, Utils, Viewer);
