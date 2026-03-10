// ==UserScript==
// @name         ImageViewer
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.3.10.22
// @author       WhiteSevs
// @description  Viewer看图工具，支持图片翻转、旋转、缩放
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.11/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.11/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.3/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.0/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (E, O, oe, ie, ye) {
  "use strict";

  var X = typeof GM_deleteValue < "u" ? GM_deleteValue : void 0,
    de = typeof GM_getResourceText < "u" ? GM_getResourceText : void 0,
    Z = typeof GM_getValue < "u" ? GM_getValue : void 0,
    j = typeof GM_info < "u" ? GM_info : void 0,
    z = typeof GM_listValues < "u" ? GM_listValues : void 0,
    xe = typeof GM_registerMenuCommand < "u" ? GM_registerMenuCommand : void 0,
    re = typeof GM_setValue < "u" ? GM_setValue : void 0,
    fe = typeof GM_setValues < "u" ? GM_setValues : void 0,
    Ce = typeof GM_unregisterMenuCommand < "u" ? GM_unregisterMenuCommand : void 0,
    be = typeof GM_xmlhttpRequest < "u" ? GM_xmlhttpRequest : void 0,
    k = typeof unsafeWindow < "u" ? unsafeWindow : void 0,
    we = window;
  const W = {
      qmsg_config_position: { key: "qmsg-config-position", defaultValue: "bottom" },
      qmsg_config_maxnums: { key: "qmsg-config-maxnums", defaultValue: 3 },
      qmsg_config_showreverse: { key: "qmsg-config-showreverse", defaultValue: false },
    },
    H = {
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
        return typeof t == "string" && t ? he(t) : H.loadStyleLink(e.url);
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
              (R.error("读取剪贴板内容失败👉", o), a(""));
            });
        }
        function t(a) {
          navigator.permissions
            .query({ name: "clipboard-read" })
            .then(() => {
              e(a);
            })
            .catch((o) => {
              (R.error("申请剪贴板权限失败，尝试直接读取👉", o.message ?? o.name ?? o.stack), e(a));
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
          i = async (y) => {
            const u = await e(y);
            if ((typeof u == "boolean" && u) || y) {
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
          let a = O.closest(e, n);
          if (a) return a.querySelector(t);
        } else return O.matches(e, t) ? e : O.closest(e, t);
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
        const e = typeof k == "object" && k != null ? k : window;
        return e.top === e.self;
      },
    },
    m = ie.noConflict(),
    l = O.noConflict(),
    P = oe,
    R = new m.Log(j, k.console || we.console),
    ee = j?.script?.name || void 0,
    ve = oe.fn.Utils.AnyTouch(),
    _e = false;
  R.config({ debug: false, logMaxCount: 250, autoClearConsole: true, tag: true });
  const pe = () => {
    const t = oe.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex ?? 0,
      n = m.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex ?? 0;
    return Math.max(100, t, n);
  };
  E.config({
    isHTML: true,
    autoClose: true,
    showClose: false,
    consoleLogContent(e) {
      const t = e.setting.type;
      if (t === "loading") return false;
      const n = e.setting.content;
      return (t === "warning" ? R.warn(n) : t === "error" ? R.error(n) : R.info(n), false);
    },
    get position() {
      return U.getValue(W.qmsg_config_position.key, W.qmsg_config_position.defaultValue);
    },
    get maxNums() {
      return U.getValue(W.qmsg_config_maxnums.key, W.qmsg_config_maxnums.defaultValue);
    },
    get showReverse() {
      return U.getValue(W.qmsg_config_showreverse.key, W.qmsg_config_showreverse.defaultValue);
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
  const Ve = new m.GM_Menu({
      GM_getValue: Z,
      GM_setValue: re,
      GM_registerMenuCommand: xe,
      GM_unregisterMenuCommand: Ce,
    }),
    se = new m.Httpx({ xmlHttpRequest: be, logDetails: _e });
  se.interceptors.request.use((e) => e);
  se.interceptors.response.use(
    void 0,
    (e) => (
      R.error("拦截器-请求错误", e),
      e.type === "onabort"
        ? E.warning("请求取消", { consoleLogContent: true })
        : e.type === "onerror"
          ? E.error("请求异常", { consoleLogContent: true })
          : e.type === "ontimeout"
            ? E.error("请求超时", { consoleLogContent: true })
            : E.error("其它错误", { consoleLogContent: true }),
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
  const he = l.addStyle.bind(l),
    Ee = O.selector.bind(O),
    $e = O.selectorAll.bind(O);
  new m.GM_Cookie();
  const J = "GM_Panel",
    Me = "data-init",
    te = "data-key",
    ne = "data-default-value",
    ke = "data-init-more-value",
    Re = "data-plugin-search-config",
    ae = "data-storage-api",
    B = {
      get width() {
        return globalThis.innerWidth;
      },
      get height() {
        return globalThis.innerHeight;
      },
    },
    K = {
      setting: {
        get width() {
          return B.width < 550 ? "88vw" : B.width < 700 ? "550px" : "700px";
        },
        get height() {
          return B.height < 450 ? "70vh" : B.height < 550 ? "450px" : "550px";
        },
      },
      settingMiddle: {
        get width() {
          return B.width < 350 ? "88vw" : "350px";
        },
      },
      info: {
        get width() {
          return B.width < 350 ? "88vw" : "350px";
        },
        get height() {
          return B.height < 250 ? "88vh" : "250px";
        },
      },
    },
    Q = {
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
      getDefaultBottomContentConfig() {
        if (this.$data.__defaultBottomContentConfig.length) return this.$data.__defaultBottomContentConfig;
        let e = false,
          t;
        const n = (r, i) => {
            typeof i != "string" && (i = H.toStr(i));
            const y = new Blob([i]),
              u = globalThis.URL.createObjectURL(y);
            (l.createElement("a", { href: u, download: r }).click(),
              m.workerSetTimeout(() => {
                globalThis.URL.revokeObjectURL(u);
              }, 500));
          },
          a = () => {
            const r = (C) => {
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
                        callback(S, x) {
                          S.close();
                        },
                      },
                    },
                    drag: true,
                    mask: { enable: true },
                    width: K.info.width,
                    height: K.info.height,
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
                  g = c.$shadowRoot.querySelector(".btn-control[data-mode='local']"),
                  $ = c.$shadowRoot.querySelector(".btn-control[data-mode='network']"),
                  G = c.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),
                  L = async (S) => {
                    (confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）") &&
                      (typeof z == "function"
                        ? typeof X == "function"
                          ? (z().forEach((s) => {
                              X(s);
                            }),
                            E.success("已清空脚本存储的配置"))
                          : E.error("不支持GM_deleteValue函数，无法执行删除脚本配置")
                        : E.error("不支持GM_listValues函数，无法清空脚本存储的配置")),
                      typeof fe == "function"
                        ? fe(S)
                        : Object.keys(S).forEach((s) => {
                            const d = S[s];
                            re(s, d);
                          }),
                      E.success("配置导入完毕"));
                  },
                  I = (S) =>
                    new Promise(async (x) => {
                      const v = m.toJSON(S);
                      (Object.keys(v).length === 0 ? E.warning("解析为空配置，不导入") : await L(v), x(true));
                    });
                (l.on(g, "click", (S) => {
                  (l.preventEvent(S), c.close());
                  const x = l.createElement("input", { type: "file", accept: ".json" });
                  (l.on(x, ["propertychange", "input"], (v) => {
                    if (!x.files?.length) return;
                    const s = x.files[0],
                      d = new FileReader();
                    ((d.onload = () => {
                      I(d.result);
                    }),
                      d.readAsText(s, "UTF-8"));
                  }),
                    x.click());
                }),
                  l.on($, "click", (S) => {
                    (l.preventEvent(S), c.close());
                    const x = P.prompt({
                        title: { text: "网络导入", position: "center" },
                        content: { text: "", placeholder: "请填写URL", focus: true },
                        btn: {
                          close: {
                            enable: true,
                            callback(d, M) {
                              d.close();
                            },
                          },
                          ok: {
                            text: "导入",
                            callback: async (d, M) => {
                              const b = d.text;
                              if (m.isNull(b)) {
                                E.error("请填入完整的url");
                                return;
                              }
                              const h = E.loading("正在获取配置..."),
                                _ = await se.get(b, { allowInterceptConfig: false });
                              if ((h.close(), !_.status)) {
                                (R.error(_), E.error("获取配置失败", { consoleLogContent: true }));
                                return;
                              }
                              (await I(_.data.responseText)) && d.close();
                            },
                          },
                          cancel: { enable: false },
                        },
                        drag: true,
                        mask: { enable: true },
                        width: K.info.width,
                        height: "auto",
                      }),
                      v = x.$shadowRoot.querySelector("input"),
                      s = x.$shadowRoot.querySelector(".pops-prompt-btn-ok");
                    (l.on(v, ["input", "propertychange"], (d) => {
                      l.val(v) === "" ? l.attr(s, "disabled", "true") : l.removeAttr(s, "disabled");
                    }),
                      l.onKeyboard(v, "keydown", (d, M, b) => {
                        d === "Enter" && b.length === 0 && l.val(v) !== "" && l.emit(s, "click");
                      }),
                      l.emit(v, "input"));
                  }),
                  l.on(G, "click", async (S) => {
                    (l.preventEvent(S), c.close());
                    let x = await H.getClipboardText();
                    if (x.trim() === "") {
                      E.warning("获取到的剪贴板内容为空");
                      return;
                    }
                    await I(x);
                  }));
              },
              i = (C = `${ee}_panel-setting-${m.formatTime(Date.now(), "yyyy_MM_dd_HH_mm_ss")}.json`, c) => {
                const g = P.alert({
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
                        callback(L, I) {
                          L.close();
                        },
                      },
                    },
                    drag: true,
                    mask: { enable: true },
                    width: K.info.width,
                    height: K.info.height,
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
                  $ = g.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']"),
                  G = g.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");
                (l.on($, "click", (L) => {
                  l.preventEvent(L);
                  try {
                    (n(C, c), g.close());
                  } catch (I) {
                    E.error(I.toString(), { consoleLogContent: true });
                  }
                }),
                  l.on(G, "click", async (L) => {
                    (await m.copy(c)) ? (E.success("复制成功"), g.close()) : E.error("复制失败");
                  }));
              },
              u = P.confirm({
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
                    callback(C, c) {
                      r();
                    },
                  },
                  cancel: {
                    enable: true,
                    text: "导出",
                    callback(C, c) {
                      i(void 0, w);
                    },
                  },
                },
                width: B.width < 450 ? "90vw" : "450px",
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
            if (typeof z == "function")
              z().forEach((c) => {
                const g = Z(c);
                Reflect.set(f, c, g);
              });
            else {
              E.warning("不支持函数GM_listValues，仅导出菜单配置");
              const C = Z(J);
              Reflect.set(f, J, C);
            }
            const w = H.toStr(f);
            u.value = w;
          },
          o = () => {
            let r = j?.script?.supportURL || j?.script?.namespace;
            typeof r == "string" && m.isNotNull(r) && window.open(r, "_blank");
          };
        return [
          {
            id: "script-version",
            title: `版本：${j?.script?.version || "未知"}`,
            isBottom: true,
            views: [],
            clickFirstCallback() {
              return false;
            },
            afterRender(r) {
              new ve(r.$asideLiElement).on("tap", function (y) {
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
    Se = {
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
              U.showPanel(Q.getConfig(0));
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
        H.isTopWindow() && Ve.add(this.$data.menuOption);
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
    constructor(t) {
      if (typeof t == "string") {
        const n = t.trim();
        if (n == "") throw new Error("key参数不能为空字符串");
        this.storageKey = n;
      } else throw new Error("key参数类型错误，必须是字符串");
      ((this.listenerData = new ie.Dictionary()),
        (this.getLocalValue = this.getLocalValue.bind(this)),
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
    getLocalValue() {
      let t = Z(this.storageKey);
      return (t == null && ((t = {}), this.setLocalValue(t)), t);
    }
    setLocalValue(t) {
      re(this.storageKey, t);
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
      X(this.storageKey);
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
        const y = r[i];
        if (typeof y.callback == "function") {
          let u, f;
          (t.length === 1 || (t.length === 2 ? (u = a) : t.length === 3 && ((u = a), (f = o))),
            await y.callback(n, u, f));
        }
      }
    }
  }
  const q = new ge(J),
    U = {
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
        (this.initContentDefaultValue(), Se.init());
      },
      initContentDefaultValue() {
        const e = (a) => {
            if (!a.attributes || a.type === "button" || a.type === "container" || a.type === "deepMenu") return;
            const o = a.attributes;
            let r = o[Me];
            if (typeof r == "function") {
              let f = r();
              if (typeof f == "boolean" && !f) return;
            }
            let i = new Map(),
              y = o[te];
            if (y != null) {
              const f = o[ne];
              i.set(y, f);
            }
            let u = o[ke];
            if (
              (typeof u == "object" &&
                u &&
                Object.keys(u).forEach((f) => {
                  const w = u[f];
                  i.set(f, w);
                }),
              !i.size)
            ) {
              R.warn("请先配置键", a);
              return;
            }
            if (a.type === "switch") {
              let f = typeof a.disabled == "function" ? a.disabled() : a.disabled;
              typeof f == "boolean" && f && this.$data.contentConfigInitDisabledKeys.push(...i.keys());
            }
            for (const [f, w] of i.entries()) this.setDefaultValue(f, w);
          },
          t = (a) => {
            for (let o = 0; o < a.length; o++) {
              let r = a[o];
              e(r);
              let i = r.views;
              i && Array.isArray(i) && t(i);
            }
          },
          n = [...Q.getAllContentConfig()];
        for (let a = 0; a < n.length; a++) {
          let o = n[a];
          if (!o.views) continue;
          const r = o.views;
          r && Array.isArray(r) && t(r);
        }
        this.$data.contentConfigInitDisabledKeys = [...new Set(this.$data.contentConfigInitDisabledKeys)];
      },
      setDefaultValue(e, t) {
        (this.$data.contentConfigInitDefaultValue.has(e) && R.warn("该key已存在，初始化默认值失败: " + e),
          this.$data.contentConfigInitDefaultValue.set(e, t));
      },
      getDefaultValue(e) {
        return this.$data.contentConfigInitDefaultValue.get(e);
      },
      setValue(e, t) {
        q.set(e, t);
      },
      getValue(e, t) {
        const n = q.get(e);
        return (
          n ?? (this.$data.contentConfigInitDefaultValue.has(e) ? this.$data.contentConfigInitDefaultValue.get(e) : t)
        );
      },
      deleteValue(e) {
        q.delete(e);
      },
      hasKey(e) {
        return q.has(e);
      },
      addValueChangeListener(e, t, n) {
        const a = q.addValueChangeListener(e, t);
        if (n?.immediate || n?.immediateAll) {
          const o = this.getValue(e);
          n?.immediate ? t(e, o, o) : n?.immediateAll && U.emitMenuValueChange(e, o, o);
        }
        return a;
      },
      removeValueChangeListener(e) {
        q.removeValueChangeListener(e);
      },
      emitMenuValueChange(e, t, n) {
        q.emitValueChangeListener(e, t, n);
      },
      async exec(e, t, n, a = true) {
        const o = this;
        let r;
        typeof e == "string" || Array.isArray(e) ? (r = () => e) : (r = e);
        let i = false;
        const y = r();
        let u = [];
        Array.isArray(y) ? ((i = true), (u = y)) : u.push(y);
        const f = u.find((s) => !this.$data.contentConfigInitDefaultValue.has(s));
        if (f) {
          R.warn(`${f} 键不存在`);
          return;
        }
        const w = JSON.stringify(u);
        if (a && this.$data.onceExecMenuData.has(w)) return this.$data.onceExecMenuData.get(w);
        let C = [];
        const c = [];
        let g = [];
        const $ = (s, d) => {
            let M = [],
              b = [],
              h = [];
            if (Array.isArray(d)) h = h.concat(d);
            else {
              const p = (V) => {
                if (typeof V == "object" && V != null)
                  if (V instanceof Element) h.push(V);
                  else {
                    const { $css: D, destory: T } = V;
                    (D != null && (Array.isArray(D) ? (h = h.concat(D)) : h.push(D)),
                      typeof T == "function" && h.push(T));
                  }
                else h.push(V);
              };
              if (d != null && Array.isArray(d)) for (const V of d) p(V);
              else p(d);
            }
            const _ = (p) => {
              if (p != null) {
                if (p instanceof Element) {
                  M.push(p);
                  return;
                }
                if (typeof p == "function") {
                  b.push(p);
                  return;
                }
              }
            };
            for (const p of h) {
              const V = _(p);
              if (typeof V == "boolean" && !V) break;
              if (Array.isArray(p))
                for (const D of p) {
                  const T = _(D);
                  if (typeof T == "boolean" && !T) break;
                }
            }
            (L(), I(), s && ((C = C.concat(M)), (g = g.concat(b))));
          },
          G = (s) => !!this.getValue(s),
          L = () => {
            for (let s = 0; s < C.length; s++) (C[s]?.remove(), C.splice(s, 1), s--);
          },
          I = () => {
            for (let s = 0; s < g.length; s++) {
              const d = g[s];
              (d(), g.splice(s, 1), s--);
            }
          },
          S = () => {
            let s = false;
            return (typeof n == "function" ? (s = n(u)) : (s = u.every((d) => G(d))), s);
          },
          x = async (s) => {
            const d = S();
            let M = [];
            if (d) {
              const b = u.map((h) => this.getValue(h));
              M = await t({ key: u, triggerKey: s?.key, value: i ? b : b[0], addStoreValue: (...h) => $(d, h) });
            }
            $(d, M);
          };
        (a &&
          u.forEach((s) => {
            const d = this.addValueChangeListener(s, (M, b, h) => x({ key: M }));
            c.push(d);
          }),
          await x());
        const v = {
          reload() {
            (this.clearStoreStyleElements(), this.destory(), x());
          },
          clear() {
            (this.clearStoreStyleElements(),
              this.destory(),
              this.removeValueChangeListener(),
              this.clearOnceExecMenuData());
          },
          clearStoreStyleElements: () => L(),
          destory() {
            return I();
          },
          removeValueChangeListener: () => {
            c.forEach((s) => {
              this.removeValueChangeListener(s);
            });
          },
          clearOnceExecMenuData() {
            a && o.$data.onceExecMenuData.delete(w);
          },
        };
        return (this.$data.onceExecMenuData.set(w, v), v);
      },
      async execMenu(e, t, n = false, a = false) {
        return await this.exec(
          e,
          async (o) => await t(o),
          (o) =>
            o.every((i) => {
              let y = !!this.getValue(i);
              return (
                U.$data.contentConfigInitDisabledKeys.includes(i) &&
                  ((y = false), R.warn(`.execMenu${a ? "Once" : ""} ${i} 被禁用`)),
                n && (y = !y),
                y
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
      deleteExecMenuOnce(e) {
        return (
          (e = this.transformKey(e)),
          this.$data.onceExecMenuData.delete(e),
          this.$data.urlChangeReloadMenuExecOnce.delete(e),
          q.removeValueChangeListener(e)
        );
      },
      onceExec(e, t) {
        if (((e = this.transformKey(e)), typeof e != "string")) throw new TypeError("key 必须是字符串");
        this.$data.onceExecData.has(e) || (t(), this.$data.onceExecData.set(e, 1));
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
            (i) => (typeof i.isBottom == "function" ? i.isBottom() : !!i.isBottom) && i.id === "script-version"
          ) !== -1;
        !n && !o && e.push(...Q.getDefaultBottomContentConfig());
        const r = P.panel({
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
          width: K.setting.width,
          height: K.setting.height,
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
        ((this.$data.$panel = r),
          (this.$data.panelContent = e),
          a || this.registerConfigSearch({ $panel: r, content: e }));
      },
      registerConfigSearch(e) {
        const { $panel: t, content: n } = e,
          a = async (c, g) => {
            if (c == null) return;
            const $ = await g(c);
            return $ && typeof $.isFind == "boolean" && $.isFind ? $.data : await a($.data, g);
          },
          o = (c, g) => {
            const $ = new IntersectionObserver(
              (G) => {
                G.forEach((L) => {
                  L.isIntersecting && (g?.(), $.disconnect());
                });
              },
              { root: null, threshold: 1 }
            );
            ($.observe(c), c.scrollIntoView({ behavior: "smooth", block: "center" }));
          },
          r = (c) => {
            const g = "pops-flashing";
            (l.onAnimationend(c, () => {
              c.classList.remove(g);
            }),
              c.classList.add(g));
          },
          i = (c) => {
            if (c.type === "dblclick" && C) return;
            l.preventEvent(c);
            const g = P.alert({
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
              width: K.settingMiddle.width,
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
            g.$shadowRoot.querySelector(".search-wrapper");
            const $ = g.$shadowRoot.querySelector(".search-config-text"),
              G = g.$shadowRoot.querySelector(".search-result-wrapper");
            $.focus();
            const L = () => {
                l.empty(G);
              },
              I = (x) => {
                const v = m.queryProperty(x, (M) =>
                    M?.next ? { isFind: false, data: M.next } : { isFind: true, data: M }
                  ),
                  s = l.createElement("div", {
                    className: "search-result-item",
                    innerHTML: `
							<div class="search-result-item-path">${v.matchedData?.path}</div>
							<div class="search-result-item-description">${v.matchedData?.description ?? ""}</div>
						`,
                  }),
                  d = P.fn.PanelHandlerComponents();
                return (
                  l.on(s, "click", () => {
                    const b = t.$shadowRoot.querySelectorAll(
                      "aside.pops-panel-aside .pops-panel-aside-top-container li"
                    )[x.index];
                    if (!b) {
                      E.error(`左侧项下标${x.index}不存在`);
                      return;
                    }
                    (b.scrollIntoView({ behavior: "smooth", block: "center" }),
                      b.click(),
                      a(x.next, async (h) => {
                        if (h?.next) {
                          const _ = await l.waitNode(
                            () =>
                              Array.from(t.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find((p) => {
                                const V = Reflect.get(p, d.$data.nodeStoreConfigKey);
                                return typeof V == "object" && V != null && V.text === h.name;
                              }),
                            2500
                          );
                          if (_) _.click();
                          else return (E.error("未找到对应的二级菜单"), { isFind: true, data: h });
                          return { isFind: false, data: h.next };
                        } else {
                          const _ = await l.waitNode(
                            () =>
                              Array.from(t.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(
                                (p) => Reflect.get(p, d.$data.nodeStoreConfigKey) === h.matchedData?.formConfig
                              ),
                            2500
                          );
                          if (_) {
                            o(_);
                            const p = _.closest(".pops-panel-forms-fold[data-fold-enable]");
                            (p && (p.querySelector(".pops-panel-forms-fold-container").click(), await m.sleep(500)),
                              o(_, () => {
                                r(_);
                              }));
                          } else E.error("未找到对应的菜单项");
                          return { isFind: true, data: h };
                        }
                      }));
                  }),
                  s
                );
              },
              S = (x) => {
                const v = new RegExp(x, "i"),
                  s = [],
                  d = (b, h) => {
                    for (let _ = 0; _ < b.length; _++) {
                      const p = b[_],
                        V = p.views;
                      if (V && Array.isArray(V)) {
                        const D = m.deepClone(h);
                        if (p.type === "deepMenu") {
                          const T = m.queryProperty(D, (N) =>
                            N?.next ? { isFind: false, data: N.next } : { isFind: true, data: N }
                          );
                          T.next = { name: p.text };
                        }
                        d(V, D);
                      } else {
                        let D, T;
                        if (p.type === "own") {
                          let A = Reflect.get(p.attributes || {}, Re);
                          A &&
                            (typeof A == "function" && (A = A()),
                            typeof A.text == "string" && (D = A.text),
                            typeof A.desc == "string" && (T = A.desc));
                        } else ((D = p.text), (T = Reflect.get(p, "description")));
                        const N = [D, T],
                          le = N.findIndex((A) => {
                            if (typeof A == "string") return A.match(v);
                          });
                        if (le !== -1) {
                          const A = m.deepClone(h),
                            ce = m.queryProperty(A, (F) =>
                              F?.next ? { isFind: false, data: F.next } : { isFind: true, data: F }
                            );
                          ce.next = {
                            name: D,
                            matchedData: { path: "", formConfig: p, matchedText: N[le], description: T },
                          };
                          const ue = [];
                          m.queryProperty(A, (F) => {
                            const Y = F?.name;
                            return (
                              typeof Y == "string" && Y.trim() !== "" && ue.push(Y),
                              F?.next ? { isFind: false, data: F.next } : { isFind: true, data: F }
                            );
                          });
                          const me = ue.join(H.escapeHtml(" - "));
                          ((ce.next.matchedData.path = me), s.push(A));
                        }
                      }
                    }
                  };
                for (let b = 0; b < n.length; b++) {
                  const h = n[b];
                  if (!h.views || (h.isBottom && h.id === "script-version")) continue;
                  const _ = h.views;
                  if (_ && Array.isArray(_)) {
                    let p = h.title;
                    (typeof p == "function" && (p = p()), d(_, { index: b, name: p }));
                  }
                }
                const M = document.createDocumentFragment();
                for (const b of s) {
                  let h = I(b);
                  M.appendChild(h);
                }
                (L(), G.append(M));
              };
            l.on(
              $,
              "input",
              m.debounce((x) => {
                l.preventEvent(x);
                let v = l.val($).trim();
                if (v === "") {
                  L();
                  return;
                }
                S(v);
              }, 200)
            );
          };
        t.$shadowRoot
          .querySelectorAll("aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)")
          .forEach((c) => {
            l.on(c, "dblclick", i);
          });
        let u = new WeakMap(),
          f = false,
          w,
          C = false;
        (l.on(
          t.$shadowRoot,
          "touchend",
          "aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",
          (c, g) => {
            ((C = true),
              clearTimeout(w),
              (w = void 0),
              f && u.has(g)
                ? ((f = false), u.delete(g), i(c))
                : ((w = setTimeout(() => {
                    f = false;
                  }, 200)),
                  (f = true),
                  u.set(g, c)));
          },
          { capture: true }
        ),
          t.$shadowRoot.appendChild(
            l.createElement("style", {
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
        const r = this.addValueChangeListener(e, (i, y) => {
          o = y;
        });
        return {
          get value() {
            return (a || ((a = true), (o = n.getValue(e, t))), o);
          },
          destory() {
            n.removeValueChangeListener(r);
          },
        };
      },
    },
    Ae = {
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
    Le = function (e, t, n, a, o, r, i, y, u) {
      const f = {
        text: e,
        type: "switch",
        description: o,
        disabled: i,
        attributes: {},
        props: {},
        getValue() {
          return this.props[ae].get(t, n);
        },
        callback(w, C) {
          const c = !!C;
          (R.success(`${c ? "开启" : "关闭"} ${e}`), this.props[ae].set(t, c));
        },
        afterAddToUListCallBack: (...w) => {},
      };
      return (
        Reflect.set(f.attributes, te, t),
        Reflect.set(f.attributes, ne, n),
        Ae.initComponentsStorageApi("switch", f, {
          get(w, C) {
            return U.getValue(w, C);
          },
          set(w, C) {
            U.setValue(w, C);
          },
        }),
        f
      );
    },
    De = {
      id: "view-general",
      title: "通用",
      views: [
        {
          type: "container",
          text: "功能",
          views: [
            Le("默认规则", "user-rule-default-enable", true, void 0, "如果当前网站没有设置规则，那么使用默认规则"),
          ],
        },
      ],
    },
    Ie = new ge("user-rule-data"),
    Te = () => ({
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
    Oe = {
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
    Ge = {
      viewIMG(e, t = 0) {
        R.info(["查看图片", [e, t]]);
        let n = "";
        e.forEach((r) => {
          n += `<li><img data-src="${r}" loading="lazy"></li>`;
        });
        let a = l.createElement("ul", { innerHTML: n }),
          o = new ye(a, {
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
    Ue = {
      $data: {
        get defaultRule() {
          return Te();
        },
        get userRule() {
          return Ie.get("user-rule", []);
        },
        currentRule: [],
      },
      execRule() {
        (R.info("正在匹配当前网站规则..."),
          this.$data.userRule.forEach((e, t) => {
            if (m.isNull(e)) {
              R.error(["改规则不存在匹配Url", [e, t]]);
              return;
            }
            new RegExp(e.url, "gi").test(window.location.href) && this.$data.currentRule.push(e);
          }),
          this.$data.currentRule.length === 0 &&
            U.getValue("user-rule-default-enable") &&
            this.$data.currentRule.push(this.$data.defaultRule),
          R.success(["当前的看图规则", this.$data.currentRule]),
          this.$data.currentRule.forEach((e) => {
            e.mode === "handleClickEvent"
              ? this.handleClickEvent(e)
              : e.mode === "handleElement"
                ? this.handleElement(e)
                : R.error(["未知模式的规则", e]);
          }));
      },
      handleClickEvent(e) {
        function t(n) {
          n != null &&
            l.on(
              n,
              "click",
              e.selector,
              async (a) => {
                e.isPreventDefault && l.preventEvent(a);
                const o = a.target;
                if (o instanceof HTMLImageElement && o.closest(".viewer-container")) return;
                let r = [],
                  i = 0;
                if (typeof e.clickEvent == "string") {
                  let u = await (function (f) {
                    return new Promise((w, C) => {
                      new Function("event", "resolve", "reject", e.clickEvent).bind({
                        ImageUtils: Oe,
                        utils: m,
                        DOMUtils: l,
                      })(f, w, C);
                    });
                  })(a);
                  if (!u.isView) return;
                  (Array.isArray(u.imageList) && (r = u.imageList),
                    typeof u.imageIndex == "number" && ((i = u.imageIndex), (i < 0 || i >= r.length) && (i = 0)));
                }
                Ge.viewIMG(r, i);
              },
              { capture: true }
            );
        }
        typeof e.context == "string"
          ? l.waitNode(e.context).then((n) => {
              e.useSelector === "querySelector" ? t(Ee(e.context)) : t($e(e.context));
            })
          : t(document);
      },
      handleElement(e) {},
    };
  Q.addContentConfig([De]);
  U.init();
  O.onReady(() => {
    Ue.execRule();
  });
})(Qmsg, DOMUtils, pops, Utils, Viewer);
