// ==UserScript==
// @name         ImageViewer
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.11
// @author       WhiteSevs
// @description  Viewer看图工具，支持图片翻转、旋转、缩放
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.2/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.min.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.2/dist/index.umd.min.js
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

(function (e, t, n, r, i) {
  "use strict";
  var a = Object.create,
    o = Object.defineProperty,
    s = Object.getOwnPropertyDescriptor,
    c = Object.getOwnPropertyNames,
    l = Object.getPrototypeOf,
    u = Object.prototype.hasOwnProperty,
    d = (e, t, n, r) => {
      if ((t && typeof t == `object`) || typeof t == `function`)
        for (var i = c(t), a = 0, l = i.length, d; a < l; a++)
          ((d = i[a]),
            !u.call(e, d) &&
              d !== n &&
              o(e, d, { get: ((e) => t[e]).bind(null, d), enumerable: !(r = s(t, d)) || r.enumerable }));
      return e;
    },
    f = (e, t, n) => (
      (n = e == null ? {} : a(l(e))),
      d(t || !e || !e.__esModule ? o(n, `default`, { value: e, enumerable: !0 }) : n, e)
    );
  ((e = f(e)), (t = f(t)), (n = f(n)), (r = f(r)), (i = f(i)));
  var p = typeof GM_addValueChangeListener < `u` ? GM_addValueChangeListener : void 0,
    m = typeof GM_deleteValue < `u` ? GM_deleteValue : void 0,
    h = typeof GM_getResourceText < `u` ? GM_getResourceText : void 0,
    g = typeof GM_getValue < `u` ? GM_getValue : void 0,
    _ = typeof GM_info < `u` ? GM_info : void 0,
    v = typeof GM_listValues < `u` ? GM_listValues : void 0,
    y = typeof GM_registerMenuCommand < `u` ? GM_registerMenuCommand : void 0,
    ee = typeof GM_removeValueChangeListener < `u` ? GM_removeValueChangeListener : void 0,
    b = typeof GM_setValue < `u` ? GM_setValue : void 0,
    x = typeof GM_setValues < `u` ? GM_setValues : void 0,
    te = typeof GM_unregisterMenuCommand < `u` ? GM_unregisterMenuCommand : void 0,
    S = typeof GM_xmlhttpRequest < `u` ? GM_xmlhttpRequest : void 0,
    C = typeof unsafeWindow < `u` ? unsafeWindow : void 0,
    w = window,
    T = {
      qmsg_config_position: { key: `qmsg-config-position`, defaultValue: `bottom` },
      qmsg_config_maxnums: { key: `qmsg-config-maxnums`, defaultValue: 3 },
      qmsg_config_showreverse: { key: `qmsg-config-showreverse`, defaultValue: !1 },
      httpx_cookie_manager_enable: { key: `httpx-use-cookie-enable`, defaultValue: !1 },
      httpx_cookie_manager_use_document_cookie: { key: `httpx-use-document-cookie`, defaultValue: !1 },
    },
    E = {
      waitRemove(...e) {
        e.forEach((e) => {
          typeof e == `string` &&
            t.default.waitNodeList(e).then((e) => {
              e.forEach((e) => e.remove());
            });
        });
      },
      createBlockCSSNode(...e) {
        let n = [];
        if (e.length !== 0 && !(e.length === 1 && typeof e[0] == `string` && e[0].trim() === ``))
          return (
            e.forEach((e) => {
              Array.isArray(e) ? (n = n.concat(e)) : n.push(e);
            }),
            t.default.createElement(`style`, {
              type: `text/css`,
              innerHTML: `${n.join(`,
`)}{display: none !important;}`,
            })
          );
      },
      addBlockCSS(...e) {
        let t = [];
        if (
          e.length !== 0 &&
          !(e.length === 1 && typeof e[0] == `string` && e[0].trim() === ``) &&
          (e.forEach((e) => {
            Array.isArray(e) ? (t = t.concat(e)) : t.push(e);
          }),
          (t = t.map((e) => e.trim()).filter((e) => e !== ``)),
          t.length)
        )
          return F(
            `${t.join(`,
`)}{display: none !important;}`
          );
      },
      setGMResourceCSS(e) {
        let t = typeof h == `function` ? h(e.keyName) : null;
        return typeof t == `string` && t ? F(t) : E.loadStyleLink(e.url);
      },
      async loadStyleLink(e) {
        let n = document.createElement(`link`);
        return (
          (n.rel = `stylesheet`),
          (n.type = `text/css`),
          (n.href = e),
          new Promise((e) => {
            t.default.onReady(() => {
              (document.head.appendChild(n), e(n));
            });
          })
        );
      },
      async loadScript(e) {
        let t = document.createElement(`script`);
        return (
          (t.src = e),
          new Promise((e) => {
            ((t.onload = () => {
              e(null);
            }),
              (document.head || document.documentElement).appendChild(t));
          })
        );
      },
      fixUrl(e) {
        return (
          (e = e.trim()),
          e.startsWith(`data:`) || e.match(/^http(s|):\/\//i)
            ? e
            : e.startsWith(`//`)
              ? (e.startsWith(`///`) || (e = window.location.protocol + e), e)
              : (e.startsWith(`/`) || (e += `/`), (e = window.location.origin + e), e)
        );
      },
      fixHttps(e) {
        if (e.startsWith(`https://`) || !e.startsWith(`http://`)) return e;
        try {
          let t = new URL(e);
          return ((t.protocol = `https:`), t.toString());
        } catch {
          return e;
        }
      },
      lockScroll(...e) {
        let t = document.createElement(`style`);
        t.innerHTML = `
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;
        let n = [document.documentElement, document.body].concat(...(e || []));
        return (
          n.forEach((e) => {
            e.classList.add(`pops-overflow-hidden-important`);
          }),
          (document.head || document.documentElement).appendChild(t),
          {
            recovery() {
              (n.forEach((e) => {
                e.classList.remove(`pops-overflow-hidden-important`);
              }),
                t.remove());
            },
          }
        );
      },
      async getClipboardText() {
        function e(e) {
          navigator.clipboard
            .readText()
            .then((t) => {
              e(t);
            })
            .catch((t) => {
              (A.error(`读取剪贴板内容失败👉`, t), e(``));
            });
        }
        function t(t) {
          navigator.permissions
            .query({ name: `clipboard-read` })
            .then(() => {
              e(t);
            })
            .catch((n) => {
              (A.error(`申请剪贴板权限失败，尝试直接读取👉`, n.message ?? n.name ?? n.stack), e(t));
            });
        }
        function n() {
          return !(
            typeof navigator?.clipboard?.readText != `function` || typeof navigator?.permissions?.query != `function`
          );
        }
        return new Promise((e) => {
          if (!n()) {
            e(``);
            return;
          }
          document.hasFocus()
            ? t(e)
            : window.addEventListener(
                `focus`,
                () => {
                  t(e);
                },
                { once: !0 }
              );
        });
      },
      escapeHtml(e) {
        return e
          .replace(/&/g, `&amp;`)
          .replace(/</g, `&lt;`)
          .replace(/>/g, `&gt;`)
          .replace(/"/g, `&quot;`)
          .replace(/'/g, `&#039;`)
          .replace(/©/g, `&copy;`)
          .replace(/®/g, `&reg;`)
          .replace(/™/g, `&trade;`)
          .replace(/→/g, `&rarr;`)
          .replace(/←/g, `&larr;`)
          .replace(/↑/g, `&uarr;`)
          .replace(/↓/g, `&darr;`)
          .replace(/—/g, `&mdash;`)
          .replace(/–/g, `&ndash;`)
          .replace(/…/g, `&hellip;`)
          .replace(/ /g, `&nbsp;`)
          .replace(/\r\n/g, `<br>`)
          .replace(/\r/g, `<br>`)
          .replace(/\n/g, `<br>`)
          .replace(/\t/g, `&nbsp;&nbsp;&nbsp;&nbsp;`);
      },
      interval(e, t, n = 5e3) {
        let r,
          i = n - t,
          a = t,
          o = async (n) => {
            let s = await e(n);
            if ((typeof s == `boolean` && s) || n) {
              D.workerClearTimeout(r);
              return;
            }
            if (((a += t), a > i)) {
              o(!0);
              return;
            }
            r = D.workerSetTimeout(() => {
              o(!1);
            }, t);
          };
        o(!1);
      },
      findParentNode(e, n, r) {
        if (r) {
          let i = t.default.closest(e, r);
          if (i) return i.querySelector(n);
        } else return t.default.matches(e, n) ? e : t.default.closest(e, n);
      },
      toStr(e, t = 2) {
        let n = `__undefined__placeholder__replaced__str__` + performance.now();
        return JSON.stringify(e, (e, t) => (t === void 0 ? n : t), t).replace(RegExp(`"${n}"`, `g`), `undefined`);
      },
      isVerticalScreen() {
        return !globalThis.screen.orientation.type.includes(`landscape`);
      },
      isMobileDevice(e = 768) {
        return this.isVerticalScreen() ? globalThis.innerWidth < e : globalThis.innerHeight < e;
      },
      isTopWindow() {
        let e = typeof C == `object` && C ? C : window;
        return e.top === e.self;
      },
      formatVideoDuration(e) {
        if ((typeof e != `number` && (e = parseInt(e)), isNaN(e))) return e.toString();
        let t = function (e) {
          return e < 10 ? `0${e}` : e;
        };
        if (e < 60) return `0:${t(e)}`;
        if (e >= 60 && e < 3600) return `${Math.floor(e / 60)}:${t(e % 60)}`;
        {
          let n = Math.floor(e / 3600),
            r = Math.floor(e / 60) % 60,
            i = e % 60;
          return `${n}:${t(r)}:${t(i)}`;
        }
      },
      formatTimeStamp(e, t) {
        if (typeof e == `number` && e < 0xe8d4a51000) {
          let t = String(Date.now()).length - String(e).length;
          e *= 10 ** t;
        }
        let n = e,
          r = new Date(typeof e == `string` ? e.replace(/-/g, `/`) : e),
          i = new Date(t ?? Date.now()).getTime() - r.getTime(),
          a = Math.floor(i / (24 * 3600 * 1e3));
        if (a > 0) n = a > 7 ? D.formatTime(r.getTime()) : a + `天前`;
        else {
          let e = i % (24 * 3600 * 1e3),
            t = Math.floor(e / (3600 * 1e3));
          if (t > 0) n = t + `小时前`;
          else {
            let t = e % (3600 * 1e3),
              r = Math.floor(t / (60 * 1e3));
            if (r > 0) n = r + `分钟前`;
            else {
              let e = t % (60 * 1e3);
              n = Math.round(e / 1e3) + `秒前`;
            }
          }
        }
        return n;
      },
    },
    D = r.default.noConflict(),
    O = t.default.noConflict(),
    k = n.default,
    A = new D.Log(_, C.console || w.console),
    j = _?.script?.name || void 0,
    ne = n.default.fn.Utils.AnyTouch();
  A.config({ debug: !1, logMaxCount: 250, autoClearConsole: !0, tag: !0 });
  var M = () => {
    let e = n.default.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex ?? 0,
      t = D.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex ?? 0;
    return Math.max(100, e, t);
  };
  (e.default.config({
    isHTML: !0,
    autoClose: !0,
    showClose: !1,
    consoleLogContent(e) {
      let t = e.setting.type;
      if (t === `loading`) return !1;
      let n = e.setting.content;
      return (t === `warning` ? A.warn(n) : t === `error` ? A.error(n) : A.info(n), !1);
    },
    get position() {
      return Q.getValue(T.qmsg_config_position.key, T.qmsg_config_position.defaultValue);
    },
    get maxNums() {
      return Q.getValue(T.qmsg_config_maxnums.key, T.qmsg_config_maxnums.defaultValue);
    },
    get showReverse() {
      return Q.getValue(T.qmsg_config_showreverse.key, T.qmsg_config_showreverse.defaultValue);
    },
    get zIndex() {
      return M();
    },
  }),
    k.GlobalConfig.setGlobalConfig({
      zIndex: () => M(),
      mask: { enable: !0, clickEvent: { toClose: !1, toHide: !1 } },
      drag: !0,
    }));
  var N = new D.GM_Menu({ GM_getValue: g, GM_setValue: b, GM_registerMenuCommand: y, GM_unregisterMenuCommand: te }),
    P = new D.Httpx({ xmlHttpRequest: S, logDetails: !1 });
  (P.interceptors.request.use((e) => e),
    P.interceptors.response.use(
      (e) => e,
      (t) => (
        A.error(`[Httpx-HttpxRequest.response] 响应错误`, { data: t }),
        t.type === `onabort`
          ? e.default.warning(`请求取消`, { consoleLogContent: !0 })
          : t.type === `onerror`
            ? e.default.error(`请求异常`, { consoleLogContent: !0 })
            : t.type === `ontimeout`
              ? e.default.error(`请求超时`, { consoleLogContent: !0 })
              : e.default.error(`其它错误`, { consoleLogContent: !0 }),
        t
      )
    ),
    C.Object.defineProperty,
    C.Object.keys,
    C.Object.values,
    C.Function.prototype.apply,
    C.Function.prototype.call,
    C.Element.prototype.appendChild,
    C.setTimeout.bind(C),
    C.clearTimeout.bind(C),
    C.setInterval.bind(C),
    C.clearInterval.bind(C));
  var F = O.addStyle.bind(O);
  E.addBlockCSS.bind(E);
  var I = t.default.selector.bind(t.default),
    L = t.default.selectorAll.bind(t.default),
    R = new D.CookieManagerService({ baseCookieHandler: `GM_cookie` });
  (R.isSupportGM_cookie ||
    (R.isSupportCookieStore
      ? R.setOptions({ baseCookieHandler: `cookieStore` })
      : R.setOptions({ baseCookieHandler: `document.cookie` })),
    new D.DocumentCookieHandler());
  var z = `GM_Panel`,
    re = `data-init`,
    B = `data-key`,
    V = `data-default-value`,
    H = `data-init-more-value`,
    U = `data-plugin-search-config`,
    W = `data-storage-api`,
    G = {
      followBrowserSize: !1,
      get width() {
        return G.followBrowserSize ? globalThis.outerWidth : globalThis.innerWidth;
      },
      get height() {
        return G.followBrowserSize ? globalThis.outerHeight : globalThis.innerHeight;
      },
    },
    K = {
      setting: {
        get width() {
          return G.width < 550 ? `88vw` : G.width < 700 ? `550px` : `700px`;
        },
        get height() {
          return G.height < 450 ? `70vh` : G.height < 550 ? `450px` : `550px`;
        },
      },
      settingMiddle: {
        get width() {
          return G.width < 350 ? `88vw` : `350px`;
        },
        get height() {
          return G.height < 450 ? `88vh` : `450px`;
        },
      },
      settingBig: {
        get width() {
          return G.width < 800 ? `92vw` : `800px`;
        },
        get height() {
          return G.height < 600 ? `80vh` : `600px`;
        },
      },
      info: {
        get width() {
          return G.width < 350 ? `88vw` : `350px`;
        },
        get height() {
          return G.height < 250 ? `88vh` : `250px`;
        },
      },
    },
    q = {
      $data: {
        __contentConfig: null,
        get contentConfig() {
          return ((this.__contentConfig ??= new D.Dictionary()), this.__contentConfig);
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
      getDefaultBottomContentConfig(t) {
        if (this.$data.__defaultBottomContentConfig.length) return this.$data.__defaultBottomContentConfig;
        let n = !1,
          r,
          i = (e, n) => {
            if (t && typeof t.translateCallback == `function`) return t.translateCallback(e, n);
            if (typeof n == `object` && n) for (let t in n) e = e.replaceAll(`{{${t}}}`, n[t]);
            return e;
          },
          a = (e, t) => {
            typeof t != `string` && (t = E.toStr(t));
            let n = new Blob([t]),
              r = globalThis.URL.createObjectURL(n);
            (O.createElement(`a`, { href: r, download: e }).click(),
              D.workerSetTimeout(() => {
                globalThis.URL.revokeObjectURL(r);
              }, 500));
          },
          o = () => {
            let t = (t) => {
                let n = k.alert({
                    title: { text: i(`请选择导入方式`), position: `center` },
                    content: {
                      text: `
            <div class="btn-control" data-mode="local">${i(`本地导入`)}</div>
            <div class="btn-control" data-mode="network">${i(`网络导入`)}</div>
            <div class="btn-control" data-mode="clipboard">${i(`剪贴板导入`)}</div>`,
                      html: !0,
                    },
                    btn: {
                      ok: { enable: !1 },
                      close: {
                        enable: !0,
                        callback(e) {
                          e.close();
                        },
                      },
                    },
                    drag: !0,
                    mask: { enable: !0 },
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
                  r = n.$shadowRoot.querySelector(`.btn-control[data-mode='local']`),
                  a = n.$shadowRoot.querySelector(`.btn-control[data-mode='network']`),
                  o = n.$shadowRoot.querySelector(`.btn-control[data-mode='clipboard']`),
                  s = async (n) => {
                    (confirm(i(`是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）`)) &&
                      (typeof v == `function`
                        ? typeof m == `function`
                          ? (v().forEach((e) => {
                              m(e);
                            }),
                            e.default.success(i(`已清空脚本存储的配置`)))
                          : e.default.error(i(`不支持GM_deleteValue函数，无法执行删除脚本配置`))
                        : e.default.error(i(`不支持GM_listValues函数，无法清空脚本存储的配置`))),
                      typeof x == `function`
                        ? x(n)
                        : Object.keys(n).forEach((e) => {
                            let t = n[e];
                            b(e, t);
                          }),
                      e.default.success(i(`配置导入完毕`)),
                      t?.());
                  },
                  c = (t) =>
                    new Promise(async (n) => {
                      let r = D.toJSON(t);
                      (Object.keys(r).length === 0 ? e.default.warning(i(`解析为空配置，不导入`)) : await s(r), n(!0));
                    });
                (O.on(r, `click`, (e) => {
                  (O.preventEvent(e), n.close());
                  let t = O.createElement(`input`, { type: `file`, accept: `.json` });
                  (O.on(t, [`propertychange`, `input`], () => {
                    if (!t.files?.length) return;
                    let e = t.files[0],
                      n = new FileReader();
                    ((n.onload = () => {
                      c(n.result);
                    }),
                      n.readAsText(e, `UTF-8`));
                  }),
                    t.click());
                }),
                  O.on(a, `click`, (t) => {
                    (O.preventEvent(t), n.close());
                    let r = k.prompt({
                        title: { text: i(`网络导入`), position: `center` },
                        content: { text: ``, placeholder: i(`请填写URL`), focus: !0 },
                        btn: {
                          close: {
                            enable: !0,
                            callback(e) {
                              e.close();
                            },
                          },
                          ok: {
                            text: i(`导入`),
                            callback: async (t) => {
                              let n = t.text;
                              if (D.isNull(n)) {
                                e.default.error(i(`请填入完整的url`));
                                return;
                              }
                              let r = e.default.loading(i(`正在获取配置...`)),
                                a = await P.get(n, { allowInterceptConfig: !1 });
                              if ((r.close(), !a.status)) {
                                (A.error(a), e.default.error(i(`获取配置失败`), { consoleLogContent: !0 }));
                                return;
                              }
                              (await c(a.data.responseText)) && t.close();
                            },
                          },
                          cancel: { enable: !1 },
                        },
                        drag: !0,
                        mask: { enable: !0 },
                        width: K.info.width,
                        height: `auto`,
                      }),
                      a = r.$shadowRoot.querySelector(`input`),
                      o = r.$shadowRoot.querySelector(`.pops-prompt-btn-ok`);
                    (O.on(a, [`input`, `propertychange`], () => {
                      O.val(a) === `` ? O.attr(o, `disabled`, `true`) : O.removeAttr(o, `disabled`);
                    }),
                      O.onKeyboard(a, `keydown`, (e, t, n) => {
                        e === `Enter` && n.length === 0 && O.val(a) !== `` && O.emit(o, `click`);
                      }),
                      O.emit(a, `input`));
                  }),
                  O.on(o, `click`, async (t) => {
                    (O.preventEvent(t), n.close());
                    let r = await E.getClipboardText();
                    if (r.trim() === ``) {
                      e.default.warning(i(`获取到的剪贴板内容为空`));
                      return;
                    }
                    await c(r);
                  }));
              },
              n = (t = `${j}_panel-setting-${D.formatTime(Date.now(), `yyyy_MM_dd_HH_mm_ss`)}.json`, n) => {
                let r = k.alert({
                    title: { text: i(`请选择导出方式`), position: `center` },
                    content: {
                      text: `
            <div class="btn-control" data-mode="export-to-file">${i(`导出至文件`)}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${i(`导出至剪贴板`)}</div>
            `,
                      html: !0,
                    },
                    btn: {
                      ok: { enable: !1 },
                      close: {
                        enable: !0,
                        callback(e) {
                          e.close();
                        },
                      },
                    },
                    drag: !0,
                    mask: { enable: !0 },
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
                  o = r.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-file']`),
                  s = r.$shadowRoot.querySelector(`.btn-control[data-mode='export-to-clipboard']`);
                (O.on(o, `click`, (i) => {
                  O.preventEvent(i);
                  try {
                    (a(t, n), r.close());
                  } catch (t) {
                    e.default.error(t.toString(), { consoleLogContent: !0 });
                  }
                }),
                  O.on(s, `click`, async () => {
                    (await D.copy(n)) ? (e.default.success(i(`复制成功`)), r.close()) : e.default.error(i(`复制失败`));
                  }));
              },
              r = k
                .confirm({
                  title: { text: i(`配置`), position: `center` },
                  content: { text: `<textarea name="config-value" id="config" readonly></textarea>`, html: !0 },
                  btn: {
                    ok: {
                      enable: !0,
                      type: `primary`,
                      text: i(`导入`),
                      callback() {
                        t();
                      },
                    },
                    cancel: {
                      enable: !0,
                      text: i(`导出`),
                      callback() {
                        n(void 0, s);
                      },
                    },
                  },
                  width: G.width < 450 ? `90vw` : `450px`,
                  height: `auto`,
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
                })
                .$shadowRoot.querySelector(`textarea`),
              o = {};
            if (typeof v == `function`)
              v().forEach((e) => {
                let t = g(e);
                Reflect.set(o, e, t);
              });
            else {
              e.default.warning(i(`不支持函数GM_listValues，仅导出菜单配置`));
              let t = g(z);
              Reflect.set(o, z, t);
            }
            let s = E.toStr(o);
            r.value = s;
          },
          s = () => {
            let e = _?.script?.supportURL || _?.script?.namespace;
            typeof e == `string` && D.isNotNull(e) && window.open(e, `_blank`);
          };
        return [
          {
            id: `script-version`,
            title: i(`版本：{{version}}`, { version: _?.script?.version || i(`未知`) }),
            isBottom: !0,
            views: [],
            clickFirstCallback() {
              return !1;
            },
            afterRender(e) {
              new ne(e.$asideLiElement).on(`tap`, function () {
                (clearTimeout(r),
                  (r = void 0),
                  n
                    ? ((n = !1), o())
                    : ((r = setTimeout(() => {
                        ((n = !1), s());
                      }, 200)),
                      (n = !0)));
              });
            },
          },
        ];
      },
      setDefaultBottomContentConfig(e) {
        this.$data.__defaultBottomContentConfig = e;
      },
    },
    J = {
      $data: {
        __menuOption: [
          {
            key: `show_pops_panel_setting`,
            text: `⚙ 设置`,
            autoReload: !1,
            isStoreValue: !1,
            showText(e) {
              return e;
            },
            callback: () => {
              Q.showPanel(q.getConfig(0));
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
        E.isTopWindow() && N.add(this.$data.menuOption);
      },
      addMenuOption(e) {
        (Array.isArray(e) || (e = [e]), this.$data.menuOption.push(...e));
      },
      updateMenuOption(e) {
        (Array.isArray(e) || (e = [e]),
          e.forEach((e) => {
            let t = this.$data.menuOption.findIndex((t) => t.key === e.key);
            t !== -1 && (this.$data.menuOption[t] = e);
          }));
      },
      getMenuOption(e = 0) {
        return this.$data.menuOption[e];
      },
      deleteMenuOption(e = 0) {
        this.$data.menuOption.splice(e, 1);
      },
    },
    Y = class {
      data = { storeNodeList: [], destoryFnList: [] };
      option = {};
      constructor(e) {
        this.option = e;
      }
      handlerResult(e, t) {
        let n = [],
          r = [],
          i = [];
        if (Array.isArray(t)) i = i.concat(t);
        else {
          let e = (t) => {
            if (typeof t == `object` && t)
              if (t instanceof Element) i.push(t);
              else if (Array.isArray(t)) e(t);
              else {
                let { $css: e, destory: n } = t;
                (e != null && (Array.isArray(e) ? (i = i.concat(e)) : e instanceof Element && i.push(e)),
                  typeof n == `function` && i.push(n));
              }
            else i.push(t);
          };
          e(t);
        }
        let a = (e) => {
          if (e != null) {
            if (e instanceof Element) {
              n.push(e);
              return;
            }
            if (typeof e == `function`) {
              r.push(e);
              return;
            }
          }
        };
        for (let e of i) {
          let t = a(e);
          if (typeof t == `boolean` && !t) break;
          if (Array.isArray(e))
            for (let t of e) {
              let e = a(t);
              if (typeof e == `boolean` && !e) break;
            }
        }
        (this.clearStoreNodeList(),
          this.execDestoryFnAndClear(),
          e &&
            ((this.data.storeNodeList = this.data.storeNodeList.concat(n)),
            (this.data.destoryFnList = this.data.destoryFnList.concat(r))));
      }
      getEnableStatus(e) {
        return !!this.option.getValue(e);
      }
      clearStoreNodeList = () => {
        for (let e = this.data.storeNodeList.length - 1; e >= 0; e--)
          (this.data.storeNodeList[e]?.remove(), this.data.storeNodeList.splice(e, 1));
      };
      execDestoryFnAndClear = () => {
        for (let e = this.data.destoryFnList.length - 1; e >= 0; e--) {
          let t = this.data.destoryFnList[e];
          (t(), this.data.destoryFnList.splice(e, 1));
        }
      };
      checkMenuExec() {
        let e = !1;
        return (
          (e =
            typeof this.option.checkExec == `function`
              ? this.option.checkExec(this.option.keyList)
              : this.option.keyList.every((e) => this.getEnableStatus(e))),
          e
        );
      }
    },
    X = class {
      storageKey;
      listenerData;
      cacheData;
      callbacks = [];
      constructor(e) {
        if (typeof e == `string`) {
          let t = e.trim();
          if (t == ``) throw Error(`key can not be empty string`);
          this.storageKey = t;
        } else throw TypeError(`key must be a string`);
        ((this.listenerData = new r.default.Dictionary()),
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
        for (let e = this.callbacks.length - 1; e >= 0; e--) {
          let t = this.callbacks[e];
          (t(), this.callbacks.splice(e, 1));
        }
      }
      getLocalValue() {
        if (this.cacheData == null) {
          let e = g(this.storageKey);
          (e ?? ((e = {}), this.setLocalValue(e)), this.destory(), (this.cacheData = e));
          let t = p(this.storageKey, (e, t, n) => {
            ((this.cacheData = null), (this.cacheData = n));
          });
          return (
            this.callbacks.push(() => {
              ee(t);
            }),
            e
          );
        } else return this.cacheData;
      }
      setLocalValue(e) {
        ((this.cacheData = null), (this.cacheData = e), b(this.storageKey, e));
      }
      set(e, t) {
        let n = this.get(e),
          r = this.getLocalValue();
        (Reflect.set(r, e, t), this.setLocalValue(r), this.emitValueChangeListener(e, t, n));
      }
      get(e, t) {
        let n = this.getLocalValue();
        return Reflect.get(n, e) ?? t;
      }
      getAll() {
        return this.getLocalValue();
      }
      delete(e) {
        let t = this.get(e),
          n = this.getLocalValue();
        (Reflect.deleteProperty(n, e), this.setLocalValue(n), this.emitValueChangeListener(e, void 0, t));
      }
      has(e) {
        let t = this.getLocalValue();
        return Reflect.has(t, e);
      }
      keys() {
        let e = this.getLocalValue();
        return Reflect.ownKeys(e);
      }
      values() {
        let e = this.getLocalValue();
        return Reflect.ownKeys(e).map((t) => Reflect.get(e, t));
      }
      clear() {
        (this.destory(), m(this.storageKey));
      }
      addValueChangeListener(e, t) {
        let n = Math.random(),
          r = this.listenerData.get(e) || [];
        return (r.push({ id: n, key: e, callback: t }), this.listenerData.set(e, r), n);
      }
      removeValueChangeListener(e) {
        let t = !1;
        for (let [n, r] of this.listenerData.entries()) {
          for (let n = 0; n < r.length; n++) {
            let i = r[n];
            ((typeof e == `string` && i.key === e) || (typeof e == `number` && i.id === e)) &&
              (r.splice(n, 1), n--, (t = !0));
          }
          this.listenerData.set(n, r);
        }
        return t;
      }
      async emitValueChangeListener(...e) {
        let [t, n, r] = e;
        if (!this.listenerData.has(t)) return;
        let i = this.listenerData.get(t);
        for (let a = 0; a < i.length; a++) {
          let o = i[a];
          if (typeof o.callback == `function`) {
            let i, a;
            (e.length === 1 || (e.length === 2 ? (i = n) : e.length === 3 && ((i = n), (a = r))),
              await o.callback(t, i, a));
          }
        }
      }
    },
    Z = new X(z),
    Q = {
      $data: {
        __contentConfigInitDefaultValue: null,
        __onceExecMenuData: null,
        __urlChangeReloadMenuExecOnce: null,
        __onceExecData: null,
        __panelConfig: {},
        $panel: null,
        panelContent: [],
        get contentConfigInitDefaultValue() {
          return ((this.__contentConfigInitDefaultValue ??= new D.Dictionary()), this.__contentConfigInitDefaultValue);
        },
        contentConfigInitDisabledKeys: [],
        get onceExecMenuData() {
          return ((this.__onceExecMenuData ??= new D.Dictionary()), this.__onceExecMenuData);
        },
        get urlChangeReloadMenuExecOnce() {
          return ((this.__urlChangeReloadMenuExecOnce ??= new D.Dictionary()), this.__urlChangeReloadMenuExecOnce);
        },
        get onceExecData() {
          return ((this.__onceExecData ??= new D.Dictionary()), this.__onceExecData);
        },
        get scriptName() {
          return j;
        },
        get panelConfig() {
          return this.__panelConfig;
        },
        set panelConfig(e) {
          this.__panelConfig = e;
        },
        key: z,
        attributeKeyName: B,
        attributeDefaultValueName: V,
      },
      init() {
        (this.initContentDefaultValue(), J.init());
      },
      initContentDefaultValue() {
        let e = (e) => {
            if (!e.attributes || e.type === `button` || e.type === `container` || e.type === `deepMenu`) return;
            let t = e.attributes,
              n = t[re];
            if (typeof n == `function`) {
              let e = n();
              if (typeof e == `boolean` && !e) return;
            }
            let r = new Map(),
              i = t[B];
            if (i != null) {
              let e = t[V];
              r.set(i, e);
            }
            let a = t[H];
            if (
              (typeof a == `object` &&
                a &&
                Object.keys(a).forEach((e) => {
                  let t = a[e];
                  r.set(e, t);
                }),
              !r.size)
            ) {
              A.warn(`请先配置键`, e);
              return;
            }
            if (e.type === `switch`) {
              let t = typeof e.disabled == `function` ? e.disabled() : e.disabled;
              typeof t == `boolean` && t && this.$data.contentConfigInitDisabledKeys.push(...r.keys());
            }
            for (let [e, t] of r.entries()) this.setDefaultValue(e, t);
          },
          t = (n) => {
            for (let r = 0; r < n.length; r++) {
              let i = n[r];
              e(i);
              let a = i.views;
              a && Array.isArray(a) && t(a);
            }
          },
          n = [...q.getAllContentConfig()];
        for (let e = 0; e < n.length; e++) {
          let r = n[e];
          if (!r.views) continue;
          let i = r.views;
          i && Array.isArray(i) && t(i);
        }
        this.$data.contentConfigInitDisabledKeys = [...new Set(this.$data.contentConfigInitDisabledKeys)];
      },
      setDefaultValue(e, t) {
        (this.$data.contentConfigInitDefaultValue.has(e) &&
          A.warn(`该key已存在，初始化默认值失败: `, {
            key: e,
            initValue: this.$data.contentConfigInitDefaultValue.get(e),
          }),
          this.$data.contentConfigInitDefaultValue.set(e, t));
      },
      getDefaultValue(e) {
        return this.$data.contentConfigInitDefaultValue.get(e);
      },
      setValue(e, t) {
        Z.set(e, t);
      },
      getValue(e, t) {
        return (
          Z.get(e) ??
          (this.$data.contentConfigInitDefaultValue.has(e) ? this.$data.contentConfigInitDefaultValue.get(e) : t)
        );
      },
      deleteValue(e) {
        Z.delete(e);
      },
      hasKey(e) {
        return Z.has(e);
      },
      addValueChangeListener(e, t, n) {
        let r = Z.addValueChangeListener(e, t);
        if (n?.immediate || n?.immediateAll) {
          let r = this.getValue(e);
          n?.immediate ? t(e, r, r) : n?.immediateAll && Q.emitMenuValueChange(e, r, r);
        }
        return r;
      },
      removeValueChangeListener(e) {
        Z.removeValueChangeListener(e);
      },
      emitMenuValueChange(e, t, n) {
        Z.emitValueChangeListener(e, t, n);
      },
      async exec(e, t, n, r = !0) {
        let i;
        i = typeof e == `string` || Array.isArray(e) ? () => e : e;
        let a = !1,
          o = i(),
          s = [];
        Array.isArray(o) ? ((a = !0), (s = o)) : s.push(o);
        let c = s.find((e) => !this.$data.contentConfigInitDefaultValue.has(e));
        if (c) {
          A.warn(`${c} 键不存在`);
          return;
        }
        let l = JSON.stringify(s);
        if (r && this.$data.onceExecMenuData.has(l)) return this.$data.onceExecMenuData.get(l);
        let u = [],
          d = new Y({
            keyList: s,
            getValue: (e) => !!this.getValue(e),
            checkExec(e) {
              let t = !1;
              return ((t = typeof n == `function` ? n(e) : e.every((e) => this.getValue(e))), t);
            },
          }),
          f = async (e) => {
            let n = d.checkMenuExec(),
              r = [];
            if (n) {
              let i = s.map((e) => this.getValue(e));
              r = await t({
                key: s,
                triggerKey: e?.key,
                value: a ? i : i[0],
                addStoreValue: (...e) => d.handlerResult(n, e),
              });
            }
            d.handlerResult(n, r);
          };
        (r &&
          s.forEach((e) => {
            let t = this.addValueChangeListener(e, (e, t, n) => f({ key: e, newValue: t, oldValue: n }));
            u.push(t);
          }),
          await f());
        let p = {
          checkMenuExec: d.checkMenuExec.bind(d),
          keyList: s,
          reload() {
            (this.clearStoreNodeList(), this.execDestoryFnAndClear(), f());
          },
          clear() {
            (d.clearStoreNodeList(),
              this.execDestoryFnAndClear(),
              this.removeValueChangeListener(),
              this.clearOnceExecMenuData());
          },
          clearStoreNodeList: d.clearStoreNodeList.bind(d),
          execDestoryFnAndClear: d.execDestoryFnAndClear.bind(d),
          removeValueChangeListener: () => {
            u.forEach((e) => {
              this.removeValueChangeListener(e);
            });
          },
          clearOnceExecMenuData() {
            r && Q.$data.onceExecMenuData.delete(l);
          },
        };
        return (this.$data.onceExecMenuData.set(l, p), p);
      },
      async execMenu(e, t, n = !1, r = !1) {
        return await this.exec(
          e,
          async (...e) => await t(...e),
          (e) =>
            e.every((e) => {
              let t = !!this.getValue(e);
              return (
                Q.$data.contentConfigInitDisabledKeys.includes(e) &&
                  ((t = !1), A.warn(`.execMenu${r ? `Once` : ``} ${e} 被禁用`)),
                n && (t = !t),
                t
              );
            }),
          r
        );
      },
      async execMenuOnce(e, t, n = !1, r = !1) {
        let i = await this.execMenu(e, t, n, !0);
        return (
          r &&
            i &&
            (this.removeUrlChangeWithExecMenuOnceListener(e),
            this.addUrlChangeWithExecMenuOnceListener(e, () => {
              i.reload();
            })),
          i
        );
      },
      async execMoreMenu(e, t, n = !1, r = !1, i = !1) {
        let a = await Promise.all(e.map(async ([e, t]) => await this.execMenu(e, (...e) => t(...e), n, r))),
          o = new Y({ keyList: e.map(([e]) => e), getValue: (e) => !!this.getValue(e) }),
          s = [],
          c = (e = !1) => {
            if ((o.clearStoreNodeList(), o.execDestoryFnAndClear(), e)) {
              for (let e of s) this.removeValueChangeListener(e);
              for (let e of a) e && this.removeUrlChangeWithExecMenuOnceListener(e.keyList);
            }
          },
          l = () => {
            let e = a.every((e) => (e ? e.checkMenuExec() : !0));
            if ((c(!1), e)) {
              let n = t();
              o.handlerResult(e, n);
            }
          };
        l();
        for (let e of a)
          if (e) {
            let t = this.addValueChangeListener(e.keyList[0], () => {
              l();
            });
            (s.push(t),
              i &&
                (this.removeUrlChangeWithExecMenuOnceListener(e.keyList),
                this.addUrlChangeWithExecMenuOnceListener(e.keyList, () => {
                  e.reload();
                })));
          }
        return {
          clear() {
            for (let e of a) e?.clear();
            (this.execDestoryFnAndClear(), this.removeValueChangeListener());
          },
          execDestoryFnAndClear() {
            for (let e of a) e?.execDestoryFnAndClear();
            c(!1);
          },
          removeValueChangeListener() {
            for (let e of a) e?.removeValueChangeListener();
            c(!0);
          },
        };
      },
      async execMoreMenuOnce(e, t, n = !1, r = !1) {
        return await this.execMoreMenu(e, t, n, !0, r);
      },
      deleteExecMenuOnce(e) {
        return (
          (e = this.transformKey(e)),
          this.$data.onceExecMenuData.delete(e),
          this.$data.urlChangeReloadMenuExecOnce.delete(e),
          Z.removeValueChangeListener(e)
        );
      },
      onceExec(e, t, n = !1) {
        if (((e = this.transformKey(e)), typeof e != `string`)) throw TypeError(`key 必须是字符串`);
        this.$data.onceExecData.has(e) ||
          (n &&
            (Array.isArray(e) ? e : [e]).findIndex((e) => {
              if (!Q.getValue(e)) return !0;
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
        let t = this.$data.urlChangeReloadMenuExecOnce.values();
        for (let n of t) await n(e);
      },
      showPanel(e, t = `${j}-设置`, n = !1, r = !1) {
        ((this.$data.$panel = null), (this.$data.panelContent = []));
        let i =
          e.findIndex(
            (e) => (typeof e.isBottom == `function` ? e.isBottom() : !!e.isBottom) && e.id === `script-version`
          ) !== -1;
        !n && !i && e.push(...q.getDefaultBottomContentConfig());
        let a = k.panel({
          title: { text: t, position: `center`, html: !1, style: `` },
          content: e,
          btn: {
            close: {
              enable: !0,
              callback: (e) => {
                (e.close(), (this.$data.$panel = null));
              },
            },
          },
          mask: {
            enable: !0,
            clickEvent: { toClose: !0, toHide: !1 },
            clickCallBack: (e) => {
              (e(), (this.$data.$panel = null));
            },
          },
          width: K.setting.width,
          height: K.setting.height,
          drag: !0,
          only: !0,
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
          (this.$data.$panel = a),
          (this.$data.panelContent = e),
          r || this.registerConfigSearch({ $panel: a, content: e }),
          { $panel: a, content: e }
        );
      },
      registerConfigSearch(t) {
        let { $panel: n, content: r } = t,
          i = (e, n) => {
            if (typeof t.translateCallback == `function`) return t.translateCallback(e, n);
            if (typeof n == `object` && n) for (let t in n) e = e.replaceAll(`{{${t}}}`, n[t]);
            return e;
          },
          a = async (e, t) => {
            if (e == null) return;
            let n = await t(e);
            return n && typeof n.isFind == `boolean` && n.isFind ? n.data : await a(n.data, t);
          },
          o = (e, t) => {
            let n = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting && (t?.(), n.disconnect());
                });
              },
              { root: null, threshold: 1 }
            );
            (n.observe(e), e.scrollIntoView({ behavior: `smooth`, block: `center` }));
          },
          s = (e) => {
            let t = `pops-flashing`;
            (O.onAnimationend(e, () => {
              e.classList.remove(t);
            }),
              e.classList.add(t));
          },
          c = (c) => {
            if (c.type === `dblclick` && f) return;
            O.preventEvent(c);
            let l = k.alert({
                title: { text: i(`搜索配置`), position: `center` },
                content: {
                  text: `
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${i(`请输入需要搜素的配置名称`)}">
						</div>
						<div class="search-result-wrapper"></div>
					`,
                  html: !0,
                },
                btn: { ok: { enable: !1 } },
                mask: { clickEvent: { toClose: !0 } },
                width: K.settingMiddle.width,
                height: `auto`,
                drag: !0,
                style: `
					${k.config.cssText.panelCSS}

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
					${t.searchDialogStyle ?? ``}
				`,
              }),
              u = l.$shadowRoot.querySelector(`.search-config-text`),
              d = l.$shadowRoot.querySelector(`.search-result-wrapper`);
            u.focus();
            let p = () => {
                O.empty(d);
              },
              m = (t) => {
                let r = D.queryProperty(t, (e) => (e?.next ? { isFind: !1, data: e.next } : { isFind: !0, data: e })),
                  c = O.createElement(`div`, {
                    className: `search-result-item`,
                    innerHTML: `
							<div class="search-result-item-path">${r.matchedData?.path}</div>
							<div class="search-result-item-description">${r.matchedData?.description ?? ``}</div>
						`,
                  }),
                  l = k.fn.PanelHandlerComponents();
                return (
                  O.on(c, `click`, () => {
                    let r = n.$shadowRoot.querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-top-container li`)[
                      t.index
                    ];
                    if (!r) {
                      e.default.error(i(`左侧项下标{{index}}不存在`, { index: t.index }));
                      return;
                    }
                    (r.scrollIntoView({ behavior: `smooth`, block: `center` }),
                      r.click(),
                      a(t.next, async (t) => {
                        if (t?.next) {
                          let r = await O.waitNode(
                            () =>
                              Array.from(n.$shadowRoot.querySelectorAll(`.pops-panel-deepMenu-nav-item`)).find((e) => {
                                let n = Reflect.get(e, l.$data.nodeStoreConfigKey);
                                return typeof n == `object` && !!n && n.text === t.name;
                              }),
                            2500
                          );
                          if (r) r.click();
                          else return (e.default.error(i(`未找到对应的二级菜单`)), { isFind: !0, data: t });
                          return { isFind: !1, data: t.next };
                        } else {
                          let r = await O.waitNode(
                            () =>
                              Array.from(n.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(
                                (e) => Reflect.get(e, l.$data.nodeStoreConfigKey) === t.matchedData?.formConfig
                              ),
                            2500
                          );
                          if (r) {
                            o(r);
                            let e = r.closest(`.pops-panel-forms-fold[data-fold-enable]`);
                            (e && (e.querySelector(`.pops-panel-forms-fold-container`).click(), await D.sleep(500)),
                              o(r, () => {
                                s(r);
                              }));
                          } else e.default.error(i(`未找到对应的菜单项`));
                          return { isFind: !0, data: t };
                        }
                      }));
                  }),
                  c
                );
              },
              h = (e) => {
                let t = new RegExp(e, `i`),
                  n = [],
                  i = (e, r) => {
                    for (let a = 0; a < e.length; a++) {
                      let o = e[a],
                        s = o.views;
                      if (s && Array.isArray(s)) {
                        let e = D.deepClone(r);
                        if (o.type === `deepMenu`) {
                          let t = D.queryProperty(e, (e) =>
                            e?.next ? { isFind: !1, data: e.next } : { isFind: !0, data: e }
                          );
                          t.next = { name: o.text };
                        }
                        i(s, e);
                      } else {
                        let e, i;
                        if (o.type === `own`) {
                          let t = Reflect.get(o.attributes || {}, U);
                          t &&
                            (typeof t == `function` && (t = t()),
                            typeof t.text == `string` && (e = t.text),
                            typeof t.desc == `string` && (i = t.desc));
                        } else ((e = o.text), (i = Reflect.get(o, `description`)));
                        let a = [e, i],
                          s = a.findIndex((e) => {
                            if (typeof e == `string`) return e.match(t);
                          });
                        if (s !== -1) {
                          let t = D.deepClone(r),
                            c = D.queryProperty(t, (e) =>
                              e?.next ? { isFind: !1, data: e.next } : { isFind: !0, data: e }
                            );
                          c.next = {
                            name: e,
                            matchedData: { path: ``, formConfig: o, matchedText: a[s], description: i },
                          };
                          let l = [];
                          D.queryProperty(t, (e) => {
                            let t = e?.name;
                            return (
                              typeof t == `string` && t.trim() !== `` && l.push(t),
                              e?.next ? { isFind: !1, data: e.next } : { isFind: !0, data: e }
                            );
                          });
                          let u = l.join(E.escapeHtml(` - `));
                          ((c.next.matchedData.path = u), n.push(t));
                        }
                      }
                    }
                  };
                for (let e = 0; e < r.length; e++) {
                  let t = r[e];
                  if (!t.views || (t.isBottom && t.id === `script-version`)) continue;
                  let n = t.views;
                  if (n && Array.isArray(n)) {
                    let r = t.title;
                    (typeof r == `function` && (r = r()), i(n, { index: e, name: r }));
                  }
                }
                let a = document.createDocumentFragment();
                for (let e of n) {
                  let t = m(e);
                  a.appendChild(t);
                }
                (p(), d.append(a));
              };
            O.on(
              u,
              `input`,
              D.debounce((e) => {
                O.preventEvent(e);
                let t = O.val(u).trim();
                if (t === ``) {
                  p();
                  return;
                }
                h(t);
              }, 200)
            );
          };
        n.$shadowRoot
          .querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`)
          .forEach((e) => {
            O.on(e, `dblclick`, c);
          });
        let l = new WeakMap(),
          u = !1,
          d,
          f = !1;
        (O.on(
          n.$shadowRoot,
          `touchend`,
          `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,
          (e, t) => {
            ((f = !0),
              clearTimeout(d),
              (d = void 0),
              u && l.has(t)
                ? ((u = !1), l.delete(t), c(e))
                : ((d = setTimeout(() => {
                    u = !1;
                  }, 200)),
                  (u = !0),
                  l.set(t, e)));
          },
          { capture: !0 }
        ),
          n.$shadowRoot.appendChild(
            O.createElement(`style`, {
              type: `text/css`,
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
            let t = e.sort();
            return JSON.stringify(t);
          } else return e[0];
        else return e;
      },
      getDynamicValue(e, t) {
        let n = !1,
          r = t,
          i = this.addValueChangeListener(e, (e, t) => {
            r = t;
          });
        return {
          get value() {
            return (n || ((n = !0), (r = Q.getValue(e, t))), r);
          },
          destory() {
            Q.removeValueChangeListener(i);
          },
        };
      },
    },
    ie = {
      $data: {
        __storeApiFn: null,
        get storeApiValue() {
          return ((this.__storeApiFn ||= new r.default.Dictionary()), this.__storeApiFn);
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
        let r;
        ((r = this.hasStorageApi(e) ? this.getStorageApi(e) : n), this.setComponentsStorageApiProperty(t, r));
      },
      setComponentsStorageApiProperty(e, t) {
        Reflect.set(e.props, W, t);
      },
    },
    ae = {
      id: `view-general`,
      title: `通用`,
      views: [
        {
          type: `container`,
          text: `功能`,
          views: [
            (function (t, n, r = !1, i, a, o, s, c, l) {
              if (l && typeof l.defaultValue == `object` && l.defaultValue != null) {
                let e = l.key ?? n;
                (l.handler.add({ key: e, name: t }), l.handler.shortCut.initConfig(e, l.defaultValue));
              }
              let u = {
                text: t,
                type: `switch`,
                description: a,
                disabled: s,
                attributes: {},
                props: {},
                getValue() {
                  return this.props[W].get(n, r);
                },
                callback(e, r) {
                  let a = !!r;
                  (A.success(`${a ? `开启` : `关闭`} ${t}`),
                    !(typeof i == `function` && i(e, a)) &&
                      (this.props[W].set(n, a), typeof c == `function` && c(e, a)));
                },
                afterAddToUListCallBack: (...r) => {
                  if ((o?.(...r), l)) {
                    let i = l.handler.shortCut,
                      a = l.key ?? n,
                      [o, s] = r,
                      c = s.target?.querySelector(`.pops-panel-item-left-main-text`);
                    if (!c) return;
                    let u = () => {
                      let e = l.handler.shortCut.getShowText(a, `暂未录入快捷键`),
                        n = O.createElement(
                          `div`,
                          {
                            className: `pops-switch-shortcut-wrapper`,
                            innerHTML: `
              <i class="pops-bottom-icon" is-loading="false">
                <svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">
                  <path d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
                  <path d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
                  <path d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
                </svg>
              </i>
            `,
                          },
                          { style: `margin-right: 5px;display: inline-flex;` }
                        ),
                        r = n.querySelector(`.pops-bottom-icon`);
                      O.on(
                        r,
                        `click`,
                        function (e) {
                          (l.handler.shortCut.deleteOption(a),
                            i.toolTip.offEvent(),
                            i.toolTip.close(),
                            i.toolTip.destory(),
                            n.remove());
                        },
                        { once: !0 }
                      );
                      let i = k.tooltip({
                        $target: r,
                        content: () => e,
                        className: `github-tooltip`,
                        isFixed: !0,
                        only: !0,
                      });
                      (O.empty(c), O.append(c, n, t));
                    };
                    if (
                      (k.rightClickMenu({
                        $target: c,
                        only: !0,
                        data: [
                          {
                            text: () => (l.handler.shortCut.hasOption(a) ? `修改快捷键` : `添加快捷键`),
                            icon: k.config.iconSVG.keyboard,
                            callback(t, n, r, o) {
                              if (i.isWaitKeyboardPress()) {
                                e.default.warning(`请先执行当前的录入操作`);
                                return;
                              }
                              let s = e.default.loading(`请按下快捷键...`, {
                                showClose: !0,
                                onClose() {
                                  i.cancelEnterShortcutKeys();
                                },
                              });
                              i.enterShortcutKeys(a).then(({ status: t, option: n, key: r }) => {
                                (s.close(),
                                  t
                                    ? (A.success(`录入快捷键`, n), e.default.success(`录入成功`), u())
                                    : e.default.error(
                                        `快捷键 ${i.translateKeyboardValueToButtonText(n)} 已被 ${r} 占用`
                                      ));
                              });
                            },
                          },
                        ],
                      }),
                      !i.hasOption(a))
                    )
                      return;
                    u();
                  }
                },
              };
              return (
                Reflect.set(u.attributes, B, n),
                Reflect.set(u.attributes, V, r),
                ie.initComponentsStorageApi(`switch`, u, {
                  get(e, t) {
                    return Q.getValue(e, t);
                  },
                  set(e, t) {
                    Q.setValue(e, t);
                  },
                }),
                u
              );
            })(`默认规则`, `user-rule-default-enable`, !0, void 0, `如果当前网站没有设置规则，那么使用默认规则`),
          ],
        },
      ],
    },
    oe = new X(`user-rule-data`),
    se = () => ({
      url: `*://*/*`,
      selector: `img`,
      mode: `handleClickEvent`,
      isPreventDefault: !0,
      clickEvent: `
      const $image = event.target;
      const url = this.ImageUtils.getImageElementUrl($image);
      resolve({
        "isView": true,
        "imageList": [url],
      });
      `,
    }),
    ce = {
      getImageElementUrl(e) {
        function t(e) {
          return e.trim() === `null` || e.trim() === `undefined` || e.trim() === ``;
        }
        if (e == null || (typeof e == `string` && t(e))) return;
        let n = ``;
        if (
          (t(n) && e.hasAttribute(`data-src`) && (n = e.getAttribute(`data-src`)),
          t(n) && e.hasAttribute(`src`) && (n = e.getAttribute(`src`)),
          t(n) && e.hasAttribute(`alt`) && (n = e.getAttribute(`alt`)),
          !t(n))
        )
          return n;
      },
    },
    le = {
      viewIMG(e, t = 0) {
        A.info([`查看图片`, [e, t]]);
        let n = ``;
        e.forEach((e) => {
          n += `<li><img data-src="${e}" loading="lazy"></li>`;
        });
        let r = new i.default(O.createElement(`ul`, { innerHTML: n }), {
          inline: !1,
          url: `data-src`,
          zIndex: D.getMaxZIndex() + 100,
          hidden: () => {
            r.destroy();
          },
        });
        ((t = parseInt(t.toString())), (isNaN(t) || t < 0) && (t = 0), r.view(t), r.zoomTo(1), r.show());
      },
    },
    $ = {
      $data: {
        get defaultRule() {
          return se();
        },
        get userRule() {
          return oe.get(`user-rule`, []);
        },
        currentRule: [],
      },
      execRule() {
        (A.info(`正在匹配当前网站规则...`),
          this.$data.userRule.forEach((e, t) => {
            if (D.isNull(e)) {
              A.error([`改规则不存在匹配Url`, [e, t]]);
              return;
            }
            new RegExp(e.url, `gi`).test(window.location.href) && this.$data.currentRule.push(e);
          }),
          this.$data.currentRule.length === 0 &&
            Q.getValue(`user-rule-default-enable`) &&
            this.$data.currentRule.push(this.$data.defaultRule),
          A.success([`当前的看图规则`, this.$data.currentRule]),
          this.$data.currentRule.forEach((e) => {
            e.mode === `handleClickEvent`
              ? this.handleClickEvent(e)
              : e.mode === `handleElement`
                ? this.handleElement(e)
                : A.error([`未知模式的规则`, e]);
          }));
      },
      handleClickEvent(e) {
        function t(t) {
          t != null &&
            O.on(
              t,
              `click`,
              e.selector,
              async (t) => {
                e.isPreventDefault && O.preventEvent(t);
                let n = t.target;
                if (n instanceof HTMLImageElement && n.closest(`.viewer-container`)) return;
                let r = [],
                  i = 0;
                if (typeof e.clickEvent == `string`) {
                  let n = await (function (t) {
                    return new Promise((n, r) => {
                      Function(`event`, `resolve`, `reject`, e.clickEvent).bind({
                        ImageUtils: ce,
                        utils: D,
                        DOMUtils: O,
                      })(t, n, r);
                    });
                  })(t);
                  if (!n.isView) return;
                  (Array.isArray(n.imageList) && (r = n.imageList),
                    typeof n.imageIndex == `number` && ((i = n.imageIndex), (i < 0 || i >= r.length) && (i = 0)));
                }
                le.viewIMG(r, i);
              },
              { capture: !0 }
            );
        }
        typeof e.context == `string`
          ? O.waitNode(e.context).then((n) => {
              e.useSelector === `querySelector` ? t(I(e.context)) : t(L(e.context));
            })
          : t(document);
      },
      handleElement(e) {},
    };
  (q.addContentConfig([ae]),
    Q.init(),
    t.default.onReady(() => {
      $.execRule();
    }));
})(Qmsg, DOMUtils, pops, Utils, Viewer);
