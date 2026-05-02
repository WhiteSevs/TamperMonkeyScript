// ==UserScript==
// @name         ImageViewer
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.2
// @author       WhiteSevs
// @description  Viewer看图工具，支持图片翻转、旋转、缩放
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.1/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.7/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
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

(function (v, T, se, ie, be) {
  "use strict";

  var we = typeof GM_addValueChangeListener < "u" ? GM_addValueChangeListener : void 0,
    te = typeof GM_deleteValue < "u" ? GM_deleteValue : void 0,
    he = typeof GM_getResourceText < "u" ? GM_getResourceText : void 0,
    Q = typeof GM_getValue < "u" ? GM_getValue : void 0,
    j = typeof GM_info < "u" ? GM_info : void 0,
    Z = typeof GM_listValues < "u" ? GM_listValues : void 0,
    ve = typeof GM_registerMenuCommand < "u" ? GM_registerMenuCommand : void 0,
    _e = typeof GM_removeValueChangeListener < "u" ? GM_removeValueChangeListener : void 0,
    le = typeof GM_setValue < "u" ? GM_setValue : void 0,
    pe = typeof GM_setValues < "u" ? GM_setValues : void 0,
    Ve = typeof GM_unregisterMenuCommand < "u" ? GM_unregisterMenuCommand : void 0,
    Me = typeof GM_xmlhttpRequest < "u" ? GM_xmlhttpRequest : void 0,
    M = typeof unsafeWindow < "u" ? unsafeWindow : void 0,
    Ee = window;
  const z = {
      qmsg_config_position: { key: "qmsg-config-position", defaultValue: "bottom" },
      qmsg_config_maxnums: { key: "qmsg-config-maxnums", defaultValue: 3 },
      qmsg_config_showreverse: { key: "qmsg-config-showreverse", defaultValue: false },
    },
    q = {
      waitRemove(...e) {
        e.forEach((t) => {
          typeof t == "string" &&
            T.waitNodeList(t).then((n) => {
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
            T.createElement("style", {
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
            ge(
              `${t.join(`,
`)}{display: none !important;}`
            )
          );
      },
      setGMResourceCSS(e) {
        const t = typeof he == "function" ? he(e.keyName) : null;
        return typeof t == "string" && t ? ge(t) : q.loadStyleLink(e.url);
      },
      async loadStyleLink(e) {
        let t = document.createElement("link");
        return (
          (t.rel = "stylesheet"),
          (t.type = "text/css"),
          (t.href = e),
          new Promise((n) => {
            T.onReady(() => {
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
              (E.error("读取剪贴板内容失败👉", o), a(""));
            });
        }
        function t(a) {
          navigator.permissions
            .query({ name: "clipboard-read" })
            .then(() => {
              e(a);
            })
            .catch((o) => {
              (E.error("申请剪贴板权限失败，尝试直接读取👉", o.message ?? o.name ?? o.stack), e(a));
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
          r = t,
          i = async (s) => {
            const c = await e(s);
            if ((typeof c == "boolean" && c) || s) {
              m.workerClearTimeout(a);
              return;
            }
            if (((r += t), r > o)) {
              i(true);
              return;
            }
            a = m.workerSetTimeout(() => {
              i(false);
            }, t);
          };
        i(false);
      },
      findParentNode(e, t, n) {
        if (n) {
          let a = T.closest(e, n);
          if (a) return a.querySelector(t);
        } else return T.matches(e, t) ? e : T.closest(e, t);
      },
      toStr(e, t = 2) {
        const n = "__undefined__placeholder__replaced__str__" + performance.now();
        return JSON.stringify(e, (o, r) => (r === void 0 ? n : r), t).replace(new RegExp(`"${n}"`, "g"), "undefined");
      },
      isVerticalScreen() {
        return !globalThis.screen.orientation.type.includes("landscape");
      },
      isMobileDevice(e = 768) {
        return this.isVerticalScreen() ? globalThis.innerWidth < e : globalThis.innerHeight < e;
      },
      isTopWindow() {
        const e = typeof M == "object" && M != null ? M : window;
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
          const s = String(Date.now()).length - String(e).length;
          e = e * Math.pow(10, s);
        }
        let n = e,
          a = new Date(typeof e == "string" ? e.replace(/-/g, "/") : e),
          r = new Date(t ?? Date.now()).getTime() - a.getTime(),
          i = Math.floor(r / (24 * 3600 * 1e3));
        if (i > 0) i > 7 ? (n = m.formatTime(a.getTime())) : (n = i + "天前");
        else {
          let s = r % 864e5,
            c = Math.floor(s / (3600 * 1e3));
          if (c > 0) n = c + "小时前";
          else {
            let u = s % 36e5,
              l = Math.floor(u / (60 * 1e3));
            if (l > 0) n = l + "分钟前";
            else {
              let f = u % 6e4;
              n = Math.round(f / 1e3) + "秒前";
            }
          }
        }
        return n;
      },
    },
    m = ie.noConflict(),
    h = T.noConflict(),
    F = se,
    E = new m.Log(j, M.console || Ee.console),
    ne = j?.script?.name || void 0,
    $e = se.fn.Utils.AnyTouch();
  E.config({ debug: false, logMaxCount: 250, autoClearConsole: true, tag: true });
  const ye = () => {
    const t = se.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex ?? 0,
      n = m.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex ?? 0;
    return Math.max(100, t, n);
  };
  v.config({
    isHTML: true,
    autoClose: true,
    showClose: false,
    consoleLogContent(e) {
      const t = e.setting.type;
      if (t === "loading") return false;
      const n = e.setting.content;
      return (t === "warning" ? E.warn(n) : t === "error" ? E.error(n) : E.info(n), false);
    },
    get position() {
      return D.getValue(z.qmsg_config_position.key, z.qmsg_config_position.defaultValue);
    },
    get maxNums() {
      return D.getValue(z.qmsg_config_maxnums.key, z.qmsg_config_maxnums.defaultValue);
    },
    get showReverse() {
      return D.getValue(z.qmsg_config_showreverse.key, z.qmsg_config_showreverse.defaultValue);
    },
    get zIndex() {
      return ye();
    },
  });
  F.GlobalConfig.setGlobalConfig({
    zIndex: () => ye(),
    mask: { enable: true, clickEvent: { toClose: false, toHide: false } },
    drag: true,
  });
  const ke = new m.GM_Menu({
      GM_getValue: Q,
      GM_setValue: le,
      GM_registerMenuCommand: ve,
      GM_unregisterMenuCommand: Ve,
    }),
    ce = new m.Httpx({ xmlHttpRequest: Me, logDetails: false });
  ce.interceptors.request.use((e) => e);
  ce.interceptors.response.use(
    (e) => e,
    (e) => (
      E.error("[Httpx-HttpxRequest.response] 响应错误", { data: e }),
      e.type === "onabort"
        ? v.warning("请求取消", { consoleLogContent: true })
        : e.type === "onerror"
          ? v.error("请求异常", { consoleLogContent: true })
          : e.type === "ontimeout"
            ? v.error("请求超时", { consoleLogContent: true })
            : v.error("其它错误", { consoleLogContent: true }),
      e
    )
  );
  (M.Object.defineProperty,
    M.Object.keys,
    M.Object.values,
    M.Function.prototype.apply,
    M.Function.prototype.call,
    M.Element.prototype.appendChild,
    M.setTimeout.bind(M),
    M.clearTimeout.bind(M),
    M.setInterval.bind(M),
    M.clearInterval.bind(M));
  const ge = h.addStyle.bind(h);
  q.addBlockCSS.bind(q);
  const Le = T.selector.bind(T),
    Ae = T.selectorAll.bind(T),
    J = new m.CookieManagerService({ baseCookieHandler: "GM_cookie" });
  J.isSupportGM_cookie ||
    (J.isSupportCookieStore
      ? J.setOptions({ baseCookieHandler: "cookieStore" })
      : J.setOptions({ baseCookieHandler: "document.cookie" }));
  new m.DocumentCookieHandler();
  const Y = "GM_Panel",
    Se = "data-init",
    ae = "data-key",
    oe = "data-default-value",
    De = "data-init-more-value",
    Re = "data-plugin-search-config",
    re = "data-storage-api",
    N = {
      get width() {
        return globalThis.innerWidth;
      },
      get height() {
        return globalThis.innerHeight;
      },
    },
    P = {
      setting: {
        get width() {
          return N.width < 550 ? "88vw" : N.width < 700 ? "550px" : "700px";
        },
        get height() {
          return N.height < 450 ? "70vh" : N.height < 550 ? "450px" : "550px";
        },
      },
      settingMiddle: {
        get width() {
          return N.width < 350 ? "88vw" : "350px";
        },
      },
      info: {
        get width() {
          return N.width < 350 ? "88vw" : "350px";
        },
        get height() {
          return N.height < 250 ? "88vh" : "250px";
        },
      },
    },
    X = {
      $data: {
        __contentConfig: null,
        get contentConfig() {
          return (this.__contentConfig == null && (this.__contentConfig = new m.Dictionary()), this.__contentConfig);
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
      getDefaultBottomContentConfig(e) {
        if (this.$data.__defaultBottomContentConfig.length) return this.$data.__defaultBottomContentConfig;
        let t = false,
          n;
        const a = (s, c) => {
            if (e && typeof e.translateCallback == "function") return e.translateCallback(s, c);
            if (typeof c == "object" && c) for (const u in c) s = s.replaceAll(`{{${u}}}`, c[u]);
            return s;
          },
          o = (s, c) => {
            typeof c != "string" && (c = q.toStr(c));
            const u = new Blob([c]),
              l = globalThis.URL.createObjectURL(u);
            (h.createElement("a", { href: l, download: s }).click(),
              m.workerSetTimeout(() => {
                globalThis.URL.revokeObjectURL(l);
              }, 500));
          },
          r = () => {
            const s = (g) => {
                const d = F.alert({
                    title: { text: a("请选择导入方式"), position: "center" },
                    content: {
                      text: `
            <div class="btn-control" data-mode="local">${a("本地导入")}</div>
            <div class="btn-control" data-mode="network">${a("网络导入")}</div>
            <div class="btn-control" data-mode="clipboard">${a("剪贴板导入")}</div>`,
                      html: true,
                    },
                    btn: {
                      ok: { enable: false },
                      close: {
                        enable: true,
                        callback(y) {
                          y.close();
                        },
                      },
                    },
                    drag: true,
                    mask: { enable: true },
                    width: P.info.width,
                    height: P.info.height,
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
                  p = d.$shadowRoot.querySelector(".btn-control[data-mode='local']"),
                  A = d.$shadowRoot.querySelector(".btn-control[data-mode='network']"),
                  I = d.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),
                  R = async (y) => {
                    (confirm(a("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")) &&
                      (typeof Z == "function"
                        ? typeof te == "function"
                          ? (Z().forEach((V) => {
                              te(V);
                            }),
                            v.success(a("已清空脚本存储的配置")))
                          : v.error(a("不支持GM_deleteValue函数，无法执行删除脚本配置"))
                        : v.error(a("不支持GM_listValues函数，无法清空脚本存储的配置"))),
                      typeof pe == "function"
                        ? pe(y)
                        : Object.keys(y).forEach((V) => {
                            const k = y[V];
                            le(V, k);
                          }),
                      v.success(a("配置导入完毕")));
                  },
                  B = (y) =>
                    new Promise(async (C) => {
                      const _ = m.toJSON(y);
                      (Object.keys(_).length === 0 ? v.warning(a("解析为空配置，不导入")) : await R(_), C(true));
                    });
                (h.on(p, "click", (y) => {
                  (h.preventEvent(y), d.close());
                  const C = h.createElement("input", { type: "file", accept: ".json" });
                  (h.on(C, ["propertychange", "input"], () => {
                    if (!C.files?.length) return;
                    const _ = C.files[0],
                      V = new FileReader();
                    ((V.onload = () => {
                      B(V.result);
                    }),
                      V.readAsText(_, "UTF-8"));
                  }),
                    C.click());
                }),
                  h.on(A, "click", (y) => {
                    (h.preventEvent(y), d.close());
                    const C = F.prompt({
                        title: { text: a("网络导入"), position: "center" },
                        content: { text: "", placeholder: a("请填写URL"), focus: true },
                        btn: {
                          close: {
                            enable: true,
                            callback(k) {
                              k.close();
                            },
                          },
                          ok: {
                            text: a("导入"),
                            callback: async (k) => {
                              const L = k.text;
                              if (m.isNull(L)) {
                                v.error(a("请填入完整的url"));
                                return;
                              }
                              const x = v.loading(a("正在获取配置...")),
                                b = await ce.get(L, { allowInterceptConfig: false });
                              if ((x.close(), !b.status)) {
                                (E.error(b), v.error(a("获取配置失败"), { consoleLogContent: true }));
                                return;
                              }
                              (await B(b.data.responseText)) && k.close();
                            },
                          },
                          cancel: { enable: false },
                        },
                        drag: true,
                        mask: { enable: true },
                        width: P.info.width,
                        height: "auto",
                      }),
                      _ = C.$shadowRoot.querySelector("input"),
                      V = C.$shadowRoot.querySelector(".pops-prompt-btn-ok");
                    (h.on(_, ["input", "propertychange"], () => {
                      h.val(_) === "" ? h.attr(V, "disabled", "true") : h.removeAttr(V, "disabled");
                    }),
                      h.onKeyboard(_, "keydown", (k, L, x) => {
                        k === "Enter" && x.length === 0 && h.val(_) !== "" && h.emit(V, "click");
                      }),
                      h.emit(_, "input"));
                  }),
                  h.on(I, "click", async (y) => {
                    (h.preventEvent(y), d.close());
                    let C = await q.getClipboardText();
                    if (C.trim() === "") {
                      v.warning(a("获取到的剪贴板内容为空"));
                      return;
                    }
                    await B(C);
                  }));
              },
              c = (g = `${ne}_panel-setting-${m.formatTime(Date.now(), "yyyy_MM_dd_HH_mm_ss")}.json`, d) => {
                const p = F.alert({
                    title: { text: a("请选择导出方式"), position: "center" },
                    content: {
                      text: `
            <div class="btn-control" data-mode="export-to-file">${a("导出至文件")}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${a("导出至剪贴板")}</div>
            `,
                      html: true,
                    },
                    btn: {
                      ok: { enable: false },
                      close: {
                        enable: true,
                        callback(R) {
                          R.close();
                        },
                      },
                    },
                    drag: true,
                    mask: { enable: true },
                    width: P.info.width,
                    height: P.info.height,
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
                  A = p.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),
                  I = p.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");
                (h.on(A, "click", (R) => {
                  h.preventEvent(R);
                  try {
                    (o(g, d), p.close());
                  } catch (B) {
                    v.error(B.toString(), { consoleLogContent: true });
                  }
                }),
                  h.on(I, "click", async () => {
                    (await m.copy(d)) ? (v.success(a("复制成功")), p.close()) : v.error(a("复制失败"));
                  }));
              },
              l = F.confirm({
                title: { text: a("配置"), position: "center" },
                content: { text: '<textarea name="config-value" id="config" readonly></textarea>', html: true },
                btn: {
                  ok: {
                    enable: true,
                    type: "primary",
                    text: a("导入"),
                    callback() {
                      s();
                    },
                  },
                  cancel: {
                    enable: true,
                    text: a("导出"),
                    callback() {
                      c(void 0, $);
                    },
                  },
                },
                width: N.width < 450 ? "90vw" : "450px",
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
              f = {};
            if (typeof Z == "function")
              Z().forEach((d) => {
                const p = Q(d);
                Reflect.set(f, d, p);
              });
            else {
              v.warning(a("不支持函数GM_listValues，仅导出菜单配置"));
              const g = Q(Y);
              Reflect.set(f, Y, g);
            }
            const $ = q.toStr(f);
            l.value = $;
          },
          i = () => {
            let s = j?.script?.supportURL || j?.script?.namespace;
            typeof s == "string" && m.isNotNull(s) && window.open(s, "_blank");
          };
        return [
          {
            id: "script-version",
            title: a("版本：{{version}}", { version: j?.script?.version || a("未知") }),
            isBottom: true,
            views: [],
            clickFirstCallback() {
              return false;
            },
            afterRender(s) {
              new $e(s.$asideLiElement).on("tap", function () {
                (clearTimeout(n),
                  (n = void 0),
                  t
                    ? ((t = false), r())
                    : ((n = setTimeout(() => {
                        ((t = false), i());
                      }, 200)),
                      (t = true)));
              });
            },
          },
        ];
      },
      setDefaultBottomContentConfig(e) {
        this.$data.__defaultBottomContentConfig = e;
      },
    },
    Ie = {
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
              D.showPanel(X.getConfig(0));
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
        q.isTopWindow() && ke.add(this.$data.menuOption);
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
  class me {
    data = { storeNodeList: [], destoryFnList: [] };
    option = {};
    constructor(t) {
      this.option = t;
    }
    handlerResult(t, n) {
      const a = [],
        o = [];
      let r = [];
      if (Array.isArray(n)) r = r.concat(n);
      else {
        const s = (c) => {
          if (typeof c == "object" && c != null)
            if (c instanceof Element) r.push(c);
            else if (Array.isArray(c)) s(c);
            else {
              const { $css: u, destory: l } = c;
              (u != null && (Array.isArray(u) ? (r = r.concat(u)) : u instanceof Element && r.push(u)),
                typeof l == "function" && r.push(l));
            }
          else r.push(c);
        };
        s(n);
      }
      const i = (s) => {
        if (s != null) {
          if (s instanceof Element) {
            a.push(s);
            return;
          }
          if (typeof s == "function") {
            o.push(s);
            return;
          }
        }
      };
      for (const s of r) {
        const c = i(s);
        if (typeof c == "boolean" && !c) break;
        if (Array.isArray(s))
          for (const u of s) {
            const l = i(u);
            if (typeof l == "boolean" && !l) break;
          }
      }
      (this.clearStoreNodeList(),
        this.execDestoryFnAndClear(),
        t &&
          ((this.data.storeNodeList = this.data.storeNodeList.concat(a)),
          (this.data.destoryFnList = this.data.destoryFnList.concat(o))));
    }
    getEnableStatus(t) {
      return !!this.option.getValue(t);
    }
    clearStoreNodeList = () => {
      for (let t = this.data.storeNodeList.length - 1; t >= 0; t--)
        (this.data.storeNodeList[t]?.remove(), this.data.storeNodeList.splice(t, 1));
    };
    execDestoryFnAndClear = () => {
      for (let t = this.data.destoryFnList.length - 1; t >= 0; t--) {
        const n = this.data.destoryFnList[t];
        (n(), this.data.destoryFnList.splice(t, 1));
      }
    };
    checkMenuExec() {
      let t = false;
      return (
        typeof this.option.checkExec == "function"
          ? (t = this.option.checkExec(this.option.keyList))
          : (t = this.option.keyList.every((n) => this.getEnableStatus(n))),
        t
      );
    }
  }
  class Ce {
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
        let t = Q(this.storageKey);
        (t == null && ((t = {}), this.setLocalValue(t)), this.destory(), (this.cacheData = t));
        const n = we(this.storageKey, (a, o, r) => {
          ((this.cacheData = null), (this.cacheData = r));
        });
        return (
          this.callbacks.push(() => {
            _e(n);
          }),
          t
        );
      } else return this.cacheData;
    }
    setLocalValue(t) {
      ((this.cacheData = null), (this.cacheData = t), le(this.storageKey, t));
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
      (this.destory(), te(this.storageKey));
    }
    addValueChangeListener(t, n) {
      const a = Math.random(),
        o = this.listenerData.get(t) || [];
      return (o.push({ id: a, key: t, callback: n }), this.listenerData.set(t, o), a);
    }
    removeValueChangeListener(t) {
      let n = false;
      for (const [a, o] of this.listenerData.entries()) {
        for (let r = 0; r < o.length; r++) {
          const i = o[r];
          ((typeof t == "string" && i.key === t) || (typeof t == "number" && i.id === t)) &&
            (o.splice(r, 1), r--, (n = true));
        }
        this.listenerData.set(a, o);
      }
      return n;
    }
    async emitValueChangeListener(...t) {
      const [n, a, o] = t;
      if (!this.listenerData.has(n)) return;
      const r = this.listenerData.get(n);
      for (let i = 0; i < r.length; i++) {
        const s = r[i];
        if (typeof s.callback == "function") {
          let c, u;
          (t.length === 1 || (t.length === 2 ? (c = a) : t.length === 3 && ((c = a), (u = o))),
            await s.callback(n, c, u));
        }
      }
    }
  }
  const U = new Ce(Y),
    D = {
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
            this.__contentConfigInitDefaultValue == null && (this.__contentConfigInitDefaultValue = new m.Dictionary()),
            this.__contentConfigInitDefaultValue
          );
        },
        contentConfigInitDisabledKeys: [],
        get onceExecMenuData() {
          return (
            this.__onceExecMenuData == null && (this.__onceExecMenuData = new m.Dictionary()), this.__onceExecMenuData
          );
        },
        get urlChangeReloadMenuExecOnce() {
          return (
            this.__urlChangeReloadMenuExecOnce == null && (this.__urlChangeReloadMenuExecOnce = new m.Dictionary()),
            this.__urlChangeReloadMenuExecOnce
          );
        },
        get onceExecData() {
          return (this.__onceExecData == null && (this.__onceExecData = new m.Dictionary()), this.__onceExecData);
        },
        get scriptName() {
          return ne;
        },
        get panelConfig() {
          return this.__panelConfig;
        },
        set panelConfig(e) {
          this.__panelConfig = e;
        },
        key: Y,
        attributeKeyName: ae,
        attributeDefaultValueName: oe,
      },
      init() {
        (this.initContentDefaultValue(), Ie.init());
      },
      initContentDefaultValue() {
        const e = (a) => {
            if (!a.attributes || a.type === "button" || a.type === "container" || a.type === "deepMenu") return;
            const o = a.attributes,
              r = o[Se];
            if (typeof r == "function") {
              const u = r();
              if (typeof u == "boolean" && !u) return;
            }
            const i = new Map(),
              s = o[ae];
            if (s != null) {
              const u = o[oe];
              i.set(s, u);
            }
            const c = o[De];
            if (
              (typeof c == "object" &&
                c &&
                Object.keys(c).forEach((u) => {
                  const l = c[u];
                  i.set(u, l);
                }),
              !i.size)
            ) {
              E.warn("请先配置键", a);
              return;
            }
            if (a.type === "switch") {
              const u = typeof a.disabled == "function" ? a.disabled() : a.disabled;
              typeof u == "boolean" && u && this.$data.contentConfigInitDisabledKeys.push(...i.keys());
            }
            for (const [u, l] of i.entries()) this.setDefaultValue(u, l);
          },
          t = (a) => {
            for (let o = 0; o < a.length; o++) {
              const r = a[o];
              e(r);
              const i = r.views;
              i && Array.isArray(i) && t(i);
            }
          },
          n = [...X.getAllContentConfig()];
        for (let a = 0; a < n.length; a++) {
          const o = n[a];
          if (!o.views) continue;
          const r = o.views;
          r && Array.isArray(r) && t(r);
        }
        this.$data.contentConfigInitDisabledKeys = [...new Set(this.$data.contentConfigInitDisabledKeys)];
      },
      setDefaultValue(e, t) {
        (this.$data.contentConfigInitDefaultValue.has(e) &&
          E.warn("该key已存在，初始化默认值失败: ", {
            key: e,
            initValue: this.$data.contentConfigInitDefaultValue.get(e),
          }),
          this.$data.contentConfigInitDefaultValue.set(e, t));
      },
      getDefaultValue(e) {
        return this.$data.contentConfigInitDefaultValue.get(e);
      },
      setValue(e, t) {
        U.set(e, t);
      },
      getValue(e, t) {
        const n = U.get(e);
        return (
          n ?? (this.$data.contentConfigInitDefaultValue.has(e) ? this.$data.contentConfigInitDefaultValue.get(e) : t)
        );
      },
      deleteValue(e) {
        U.delete(e);
      },
      hasKey(e) {
        return U.has(e);
      },
      addValueChangeListener(e, t, n) {
        const a = U.addValueChangeListener(e, t);
        if (n?.immediate || n?.immediateAll) {
          const o = this.getValue(e);
          n?.immediate ? t(e, o, o) : n?.immediateAll && D.emitMenuValueChange(e, o, o);
        }
        return a;
      },
      removeValueChangeListener(e) {
        U.removeValueChangeListener(e);
      },
      emitMenuValueChange(e, t, n) {
        U.emitValueChangeListener(e, t, n);
      },
      async exec(e, t, n, a = true) {
        let o;
        typeof e == "string" || Array.isArray(e) ? (o = () => e) : (o = e);
        let r = false;
        const i = o();
        let s = [];
        Array.isArray(i) ? ((r = true), (s = i)) : s.push(i);
        const c = s.find((d) => !this.$data.contentConfigInitDefaultValue.has(d));
        if (c) {
          E.warn(`${c} 键不存在`);
          return;
        }
        const u = JSON.stringify(s);
        if (a && this.$data.onceExecMenuData.has(u)) return this.$data.onceExecMenuData.get(u);
        const l = [],
          f = new me({
            keyList: s,
            getValue: (d) => !!this.getValue(d),
            checkExec(d) {
              let p = false;
              return (typeof n == "function" ? (p = n(d)) : (p = d.every((A) => this.getValue(A))), p);
            },
          }),
          $ = async (d) => {
            const p = f.checkMenuExec();
            let A = [];
            if (p) {
              const I = s.map((R) => this.getValue(R));
              A = await t({
                key: s,
                triggerKey: d?.key,
                value: r ? I : I[0],
                addStoreValue: (...R) => f.handlerResult(p, R),
              });
            }
            f.handlerResult(p, A);
          };
        (a &&
          s.forEach((d) => {
            const p = this.addValueChangeListener(d, (A, I, R) => $({ key: A }));
            l.push(p);
          }),
          await $());
        const g = {
          checkMenuExec: f.checkMenuExec.bind(f),
          keyList: s,
          reload() {
            (this.clearStoreNodeList(), this.execDestoryFnAndClear(), $());
          },
          clear() {
            (f.clearStoreNodeList(),
              this.execDestoryFnAndClear(),
              this.removeValueChangeListener(),
              this.clearOnceExecMenuData());
          },
          clearStoreNodeList: f.clearStoreNodeList.bind(f),
          execDestoryFnAndClear: f.execDestoryFnAndClear.bind(f),
          removeValueChangeListener: () => {
            l.forEach((d) => {
              this.removeValueChangeListener(d);
            });
          },
          clearOnceExecMenuData() {
            a && D.$data.onceExecMenuData.delete(u);
          },
        };
        return (this.$data.onceExecMenuData.set(u, g), g);
      },
      async execMenu(e, t, n = false, a = false) {
        return await this.exec(
          e,
          async (...o) => await t(...o),
          (o) =>
            o.every((i) => {
              let s = !!this.getValue(i);
              return (
                D.$data.contentConfigInitDisabledKeys.includes(i) &&
                  ((s = false), E.warn(`.execMenu${a ? "Once" : ""} ${i} 被禁用`)),
                n && (s = !s),
                s
              );
            }),
          a
        );
      },
      async execMenuOnce(e, t, n = false, a = false) {
        const o = await this.execMenu(e, t, n, true);
        if (a && o) {
          const r = () => {
            o.reload();
          };
          (this.removeUrlChangeWithExecMenuOnceListener(e), this.addUrlChangeWithExecMenuOnceListener(e, r));
        }
        return o;
      },
      async execMoreMenu(e, t, n = false, a = false, o = false) {
        const r = await Promise.all(e.map(async ([l, f]) => await this.execMenu(l, (...g) => f(...g), n, a))),
          i = new me({ keyList: e.map(([l]) => l), getValue: (l) => !!this.getValue(l) }),
          s = [],
          c = (l = false) => {
            if ((i.clearStoreNodeList(), i.execDestoryFnAndClear(), l)) {
              for (const f of s) this.removeValueChangeListener(f);
              for (const f of r) f && this.removeUrlChangeWithExecMenuOnceListener(f.keyList);
            }
          },
          u = () => {
            const l = r.every((f) => (f ? f.checkMenuExec() : true));
            if ((c(false), l)) {
              const f = t();
              i.handlerResult(l, f);
            }
          };
        u();
        for (const l of r)
          if (l) {
            const f = this.addValueChangeListener(l.keyList[0], () => {
              u();
            });
            if ((s.push(f), o)) {
              const $ = () => {
                l.reload();
              };
              (this.removeUrlChangeWithExecMenuOnceListener(l.keyList),
                this.addUrlChangeWithExecMenuOnceListener(l.keyList, $));
            }
          }
        return {
          clear() {
            for (const l of r) l?.clear();
            (this.execDestoryFnAndClear(), this.removeValueChangeListener());
          },
          execDestoryFnAndClear() {
            for (const l of r) l?.execDestoryFnAndClear();
            c(false);
          },
          removeValueChangeListener() {
            for (const l of r) l?.removeValueChangeListener();
            c(true);
          },
        };
      },
      async execMoreMenuOnce(e, t, n = false, a = false) {
        return await this.execMoreMenu(e, t, n, true, a);
      },
      deleteExecMenuOnce(e) {
        return (
          (e = this.transformKey(e)),
          this.$data.onceExecMenuData.delete(e),
          this.$data.urlChangeReloadMenuExecOnce.delete(e),
          U.removeValueChangeListener(e)
        );
      },
      onceExec(e, t, n = false) {
        if (((e = this.transformKey(e)), typeof e != "string")) throw new TypeError("key 必须是字符串");
        this.$data.onceExecData.has(e) ||
          (n &&
            (Array.isArray(e) ? e : [e]).findIndex((o) => {
              if (!!!D.getValue(o)) return true;
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
      showPanel(e, t = `${ne}-设置`, n = false, a = false) {
        ((this.$data.$panel = null), (this.$data.panelContent = []));
        const o =
          e.findIndex(
            (i) => (typeof i.isBottom == "function" ? i.isBottom() : !!i.isBottom) && i.id === "script-version"
          ) !== -1;
        !n && !o && e.push(...X.getDefaultBottomContentConfig());
        const r = F.panel({
          title: { text: t, position: "center", html: false, style: "" },
          content: e,
          btn: {
            close: {
              enable: true,
              callback: (i) => {
                (i.close(), (this.$data.$panel = null));
              },
            },
          },
          mask: {
            enable: true,
            clickEvent: { toClose: true, toHide: false },
            clickCallBack: (i) => {
              (i(), (this.$data.$panel = null));
            },
          },
          width: P.setting.width,
          height: P.setting.height,
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
        return (
          (this.$data.$panel = r),
          (this.$data.panelContent = e),
          a || this.registerConfigSearch({ $panel: r, content: e }),
          { $panel: r, content: e }
        );
      },
      registerConfigSearch(e) {
        const { $panel: t, content: n } = e,
          a = (g, d) => {
            if (typeof e.translateCallback == "function") return e.translateCallback(g, d);
            if (typeof d == "object" && d) for (const p in d) g = g.replaceAll(`{{${p}}}`, d[p]);
            return g;
          },
          o = async (g, d) => {
            if (g == null) return;
            const p = await d(g);
            return p && typeof p.isFind == "boolean" && p.isFind ? p.data : await o(p.data, d);
          },
          r = (g, d) => {
            const p = new IntersectionObserver(
              (A) => {
                A.forEach((I) => {
                  I.isIntersecting && (d?.(), p.disconnect());
                });
              },
              { root: null, threshold: 1 }
            );
            (p.observe(g), g.scrollIntoView({ behavior: "smooth", block: "center" }));
          },
          i = (g) => {
            const d = "pops-flashing";
            (h.onAnimationend(g, () => {
              g.classList.remove(d);
            }),
              g.classList.add(d));
          },
          s = (g) => {
            if (g.type === "dblclick" && $) return;
            h.preventEvent(g);
            const d = F.alert({
                title: { text: a("搜索配置"), position: "center" },
                content: {
                  text: `
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${a("请输入需要搜素的配置名称")}">
						</div>
						<div class="search-result-wrapper"></div>
					`,
                  html: true,
                },
                btn: { ok: { enable: false } },
                mask: { clickEvent: { toClose: true } },
                width: P.settingMiddle.width,
                height: "auto",
                drag: true,
                style: `
					${F.config.cssText.panelCSS}

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
            flex-wrap: wrap;
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${e.searchDialogStyle ?? ""}
				`,
              }),
              p = d.$shadowRoot.querySelector(".search-config-text"),
              A = d.$shadowRoot.querySelector(".search-result-wrapper");
            p.focus();
            const I = () => {
                h.empty(A);
              },
              R = (y) => {
                const C = m.queryProperty(y, (k) =>
                    k?.next ? { isFind: false, data: k.next } : { isFind: true, data: k }
                  ),
                  _ = h.createElement("div", {
                    className: "search-result-item",
                    innerHTML: `
							<div class="search-result-item-path">${C.matchedData?.path}</div>
							<div class="search-result-item-description">${C.matchedData?.description ?? ""}</div>
						`,
                  }),
                  V = F.fn.PanelHandlerComponents();
                return (
                  h.on(_, "click", () => {
                    const L = t.$shadowRoot.querySelectorAll(
                      "aside.pops-panel-aside .pops-panel-aside-top-container li"
                    )[y.index];
                    if (!L) {
                      v.error(a("左侧项下标{{index}}不存在", { index: y.index }));
                      return;
                    }
                    (L.scrollIntoView({ behavior: "smooth", block: "center" }),
                      L.click(),
                      o(y.next, async (x) => {
                        if (x?.next) {
                          const b = await h.waitNode(
                            () =>
                              Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find((w) => {
                                const O = Reflect.get(w, V.$data.nodeStoreConfigKey);
                                return typeof O == "object" && O != null && O.text === x.name;
                              }),
                            2500
                          );
                          if (b) b.click();
                          else return (v.error(a("未找到对应的二级菜单")), { isFind: true, data: x });
                          return { isFind: false, data: x.next };
                        } else {
                          const b = await h.waitNode(
                            () =>
                              Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(
                                (w) => Reflect.get(w, V.$data.nodeStoreConfigKey) === x.matchedData?.formConfig
                              ),
                            2500
                          );
                          if (b) {
                            r(b);
                            const w = b.closest(".pops-panel-forms-fold[data-fold-enable]");
                            (w && (w.querySelector(".pops-panel-forms-fold-container").click(), await m.sleep(500)),
                              r(b, () => {
                                i(b);
                              }));
                          } else v.error(a("未找到对应的菜单项"));
                          return { isFind: true, data: x };
                        }
                      }));
                  }),
                  _
                );
              },
              B = (y) => {
                const C = new RegExp(y, "i"),
                  _ = [],
                  V = (L, x) => {
                    for (let b = 0; b < L.length; b++) {
                      const w = L[b],
                        O = w.views;
                      if (O && Array.isArray(O)) {
                        const K = m.deepClone(x);
                        if (w.type === "deepMenu") {
                          const W = m.queryProperty(K, (H) =>
                            H?.next ? { isFind: false, data: H.next } : { isFind: true, data: H }
                          );
                          W.next = { name: w.text };
                        }
                        V(O, K);
                      } else {
                        let K, W;
                        if (w.type === "own") {
                          let S = Reflect.get(w.attributes || {}, Re);
                          S &&
                            (typeof S == "function" && (S = S()),
                            typeof S.text == "string" && (K = S.text),
                            typeof S.desc == "string" && (W = S.desc));
                        } else ((K = w.text), (W = Reflect.get(w, "description")));
                        const H = [K, W],
                          ue = H.findIndex((S) => {
                            if (typeof S == "string") return S.match(C);
                          });
                        if (ue !== -1) {
                          const S = m.deepClone(x),
                            de = m.queryProperty(S, (G) =>
                              G?.next ? { isFind: false, data: G.next } : { isFind: true, data: G }
                            );
                          de.next = {
                            name: K,
                            matchedData: { path: "", formConfig: w, matchedText: H[ue], description: W },
                          };
                          const fe = [];
                          m.queryProperty(S, (G) => {
                            const ee = G?.name;
                            return (
                              typeof ee == "string" && ee.trim() !== "" && fe.push(ee),
                              G?.next ? { isFind: false, data: G.next } : { isFind: true, data: G }
                            );
                          });
                          const xe = fe.join(q.escapeHtml(" - "));
                          ((de.next.matchedData.path = xe), _.push(S));
                        }
                      }
                    }
                  };
                for (let L = 0; L < n.length; L++) {
                  const x = n[L];
                  if (!x.views || (x.isBottom && x.id === "script-version")) continue;
                  const b = x.views;
                  if (b && Array.isArray(b)) {
                    let w = x.title;
                    (typeof w == "function" && (w = w()), V(b, { index: L, name: w }));
                  }
                }
                const k = document.createDocumentFragment();
                for (const L of _) {
                  const x = R(L);
                  k.appendChild(x);
                }
                (I(), A.append(k));
              };
            h.on(
              p,
              "input",
              m.debounce((y) => {
                h.preventEvent(y);
                const C = h.val(p).trim();
                if (C === "") {
                  I();
                  return;
                }
                B(C);
              }, 200)
            );
          };
        t.$shadowRoot
          .querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)")
          .forEach((g) => {
            h.on(g, "dblclick", s);
          });
        const u = new WeakMap();
        let l = false,
          f,
          $ = false;
        (h.on(
          t.$shadowRoot,
          "touchend",
          "aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",
          (g, d) => {
            (($ = true),
              clearTimeout(f),
              (f = void 0),
              l && u.has(d)
                ? ((l = false), u.delete(d), s(g))
                : ((f = setTimeout(() => {
                    l = false;
                  }, 200)),
                  (l = true),
                  u.set(d, g)));
          },
          { capture: true }
        ),
          t.$shadowRoot.appendChild(
            h.createElement("style", {
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
        if (Array.isArray(e))
          if (e.length > 1) {
            const t = e.sort();
            return JSON.stringify(t);
          } else return e[0];
        else return e;
      },
      getDynamicValue(e, t) {
        let n = false,
          a = t;
        const o = this.addValueChangeListener(e, (r, i) => {
          a = i;
        });
        return {
          get value() {
            return (n || ((n = true), (a = D.getValue(e, t))), a);
          },
          destory() {
            D.removeValueChangeListener(o);
          },
        };
      },
    },
    Te = {
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
        Reflect.set(e.props, re, t);
      },
    },
    Oe = function (e, t, n = false, a, o, r, i, s, c) {
      const u = {
        text: e,
        type: "switch",
        description: o,
        disabled: i,
        attributes: {},
        props: {},
        getValue() {
          return this.props[re].get(t, n);
        },
        callback(l, f) {
          const $ = !!f;
          (E.success(`${$ ? "开启" : "关闭"} ${e}`), this.props[re].set(t, $));
        },
        afterAddToUListCallBack: (...l) => {},
      };
      return (
        Reflect.set(u.attributes, ae, t),
        Reflect.set(u.attributes, oe, n),
        Te.initComponentsStorageApi("switch", u, {
          get(l, f) {
            return D.getValue(l, f);
          },
          set(l, f) {
            D.setValue(l, f);
          },
        }),
        u
      );
    },
    Fe = {
      id: "view-general",
      title: "通用",
      views: [
        {
          type: "container",
          text: "功能",
          views: [
            Oe("默认规则", "user-rule-default-enable", true, void 0, "如果当前网站没有设置规则，那么使用默认规则"),
          ],
        },
      ],
    },
    Ge = new Ce("user-rule-data"),
    Ue = () => ({
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
    Ne = {
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
    Pe = {
      viewIMG(e, t = 0) {
        E.info(["查看图片", [e, t]]);
        let n = "";
        e.forEach((r) => {
          n += `<li><img data-src="${r}" loading="lazy"></li>`;
        });
        let a = h.createElement("ul", { innerHTML: n }),
          o = new be(a, {
            inline: false,
            url: "data-src",
            zIndex: m.getMaxZIndex() + 100,
            hidden: () => {
              o.destroy();
            },
          });
        ((t = parseInt(t.toString())), (isNaN(t) || t < 0) && (t = 0), o.view(t), o.zoomTo(1), o.show());
      },
    },
    qe = {
      $data: {
        get defaultRule() {
          return Ue();
        },
        get userRule() {
          return Ge.get("user-rule", []);
        },
        currentRule: [],
      },
      execRule() {
        (E.info("正在匹配当前网站规则..."),
          this.$data.userRule.forEach((e, t) => {
            if (m.isNull(e)) {
              E.error(["改规则不存在匹配Url", [e, t]]);
              return;
            }
            new RegExp(e.url, "gi").test(window.location.href) && this.$data.currentRule.push(e);
          }),
          this.$data.currentRule.length === 0 &&
            D.getValue("user-rule-default-enable") &&
            this.$data.currentRule.push(this.$data.defaultRule),
          E.success(["当前的看图规则", this.$data.currentRule]),
          this.$data.currentRule.forEach((e) => {
            e.mode === "handleClickEvent"
              ? this.handleClickEvent(e)
              : e.mode === "handleElement"
                ? this.handleElement(e)
                : E.error(["未知模式的规则", e]);
          }));
      },
      handleClickEvent(e) {
        function t(n) {
          n != null &&
            h.on(
              n,
              "click",
              e.selector,
              async (a) => {
                e.isPreventDefault && h.preventEvent(a);
                const o = a.target;
                if (o instanceof HTMLImageElement && o.closest(".viewer-container")) return;
                let r = [],
                  i = 0;
                if (typeof e.clickEvent == "string") {
                  let c = await (function (u) {
                    return new Promise((l, f) => {
                      new Function("event", "resolve", "reject", e.clickEvent).bind({
                        ImageUtils: Ne,
                        utils: m,
                        DOMUtils: h,
                      })(u, l, f);
                    });
                  })(a);
                  if (!c.isView) return;
                  (Array.isArray(c.imageList) && (r = c.imageList),
                    typeof c.imageIndex == "number" && ((i = c.imageIndex), (i < 0 || i >= r.length) && (i = 0)));
                }
                Pe.viewIMG(r, i);
              },
              { capture: true }
            );
        }
        typeof e.context == "string"
          ? h.waitNode(e.context).then((n) => {
              e.useSelector === "querySelector" ? t(Le(e.context)) : t(Ae(e.context));
            })
          : t(document);
      },
      handleElement(e) {},
    };
  X.addContentConfig([Fe]);
  D.init();
  T.onReady(() => {
    qe.execRule();
  });
})(Qmsg, DOMUtils, pops, Utils, Viewer);
