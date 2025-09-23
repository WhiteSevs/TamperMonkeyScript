// ==UserScript==
// @name         网盘链接识别
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.9.23
// @author       WhiteSevs
// @description  识别网页中显示的网盘链接，目前包括百度网盘、蓝奏云、天翼云、中国移动云盘(原:和彩云)、阿里云、文叔叔、奶牛快传、123盘、腾讯微云、迅雷网盘、115网盘、夸克网盘、城通网盘(部分)、坚果云、UC网盘、BT磁力、360云盘，支持蓝奏云、天翼云(需登录)、123盘、奶牛、UC网盘(需登录)、坚果云(需登录)和阿里云盘(需登录，且限制在网盘页面解析)直链获取下载，页面动态监控加载的链接，可自定义规则来识别小众网盘/网赚网盘或其它自定义的链接。
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACsJJREFUeF7tXW+IHdUVP2c2u8kHIQYL0TRIaK1SgrFFaZsvVkpAo6YR1LJpa9jUd++83SUpSrUNBFRCrVgxNOv+mTOvJBBNmtpamoQG9UNBKLHFDzEtFttKBdOYQENE/Lb75vZd2cVNum/uvXNnZt/MnoGQD+/c8+d3fu+c+2f2PgR+ljQCuKSj5+CBCbDEScAEYAIscQSWePhcAZgASxyBJR4+VwAmQHEIjIyM3DAzM/M1pdSXEfEWALgVANbkaPE0ABwhomdz1GmtSgixHxF3Wg8wC55HxPeVUu8DgP7/jRUrVvxpbGzsY/PQbBK5VwCd9Ha7vVkptRkA9L8yHiKisAxDczaklL8GgAfLsImIryql3gSAqBPnh3nazI0AjUZjbRAEjwLAI3k6aKtLKbUjjuODtvI+cs1m894kSY776Mg49hwAxHkSIRcCSCl10nXy12YMLI9hrxDR/XkoMukQQrQQ8WGTXIGfn0PEZ6IoGvO14U0AKeUJALjH15Ecxr9ARHn2464uCSEOI+K2HHz2VXGUiAZ9lHgRQEp5BgBu9nEgr7FBEGyZmprSZCz8EUIMIuKRwg3ZGfiAiK63E/1/qcwEkFJ+BAArsxrOedzLRPSdnHWmqgvD8EBntj5Ups0UWxeI6NosvmQigBDibUTckMVgAWNKXwHMxSClfBwAtgPA+gLiclX5GhHd6TrImQBhGO5RSu11MHQREY8nSXICEf/R399/bnx8/KLD+CUl2plf3BgEwa1JktyOiN8HgKscAHCuhE4EaDabQ0mSHLBxSCml5weHlFKHWq3WBZsxLHM5AlLKLwLAQwCwCwBWWeLzKBHts5S1fx9ASnkdALxluZPXIiJh6wTLpSMwPDx8U7vd/iEADFtgdTZJko2tVuushawTAZ4EgCdMSpVSW+M4PmaS48/dEZBSWuWgMznfR0R6X8b4WLUA228/Ig5GUXTUaJUFMiMghNiEiK+bFCxbtuxLExMT/zLJ2RLAhnmTRDRiMsif+yMQhuFupdTTaZoQcZfNTqEVAYQQf0TEO1IMXurr69s4OTn5rn94rMEGAYul+Ekiutuky0iAoaGhqwcGBi4ZFD1FRLpK8FMSAkKIHyHiz9PM2bQBIwGklPcBwO9SDH0CAF8hovdKip3NAECj0VgdBMHf05aHSqntcRwfSm0VJjSllD8DgJ90k1NKTcVxbLM8MZnizx0RkFL+BgC6noAi4nNRFD3mSwB96NH1xKnMc3hHfGovbnEoZdweNraAMAxPKaW+0Q1NRFwfRdE7tUe7BwOUUuqTWL3j2u0xHhIZCSCl1K8gdT1pIiKjjh7ErhYujY6OXjM9Pf3ftGBM+TEmT0qpfAzUAukeDsI3P0yAHk6ujWtMABuUaizDBKhxcm1CYwLYoFRjGSZAjZNrExoTwAalGsswAWqcXJvQmAA2KNVYhglQ4+TahMYEsEGpxjK1IYCU8vcAcJvlW8dVTqn+C9+3iGhrHkHUggCmIPIAqhd1mA5qbHw2YWeysehnAWVetGADaMkyzn/Jc6V/dSDAeQBYXTLwvWLOeF5vcrQOBEg9bjYBUPXPTSXaFB8TwIRQj3/OBDC8cNLj+fN2r+oEOE1EX/VBwVTCfHRXYWzBBDDmx7gKMNyF92PfO/pMBPAFKO9Zsyupio7PNz9GAuiAuyzVcrmZo2iA6k4A3/xYEUAb0Xfjtdvt+xBxlVLqeF538jEB8nmrOmt+rAngWvps5ZkA+RDAFu8r5XqBAP9J2f8/R0SfzxrcQuMWgXClxueKVS8QQB8CfbuL48fyOjSZ078IBCg1vsoRYHYSs+BuYN4rgDRbc8CVabMIW5UkwLyZ7O2zAbxR1MWPZVeAeZVH3y5eeHyVJYCr41nlF4sAWf0tetyizwGKDnCx9wHKjs/VHhPgCsR6oS+7JtFHngnABPDhT/XG8hzg8pxxBeAKUL1vsY/HXAG4AvCNJ/M4wC2AW4BPQa3eWG4B3AK4BXAL6F65eCOoelXdyWNuAdwCuAVwC+AWMIcALwN5GejUQisvzHMAngPwHIDnADwH4DlAFw7wPkDlu3x6ADwHyDgHCMPwLqXUJgCYDoLgpampqb9VkSt1JUDW/FgtA6WUvwSAH1yR8Bc7vxSmf9i4Uk8dCeCTHyMBDL8a9j0iOlwlBtSNAL75sSGA/v1Z/TPmCz3/JqIvMAEWDwEppVd+bAhQq3VzDSuAV36YABXfCvYlNBOACbC01s2+35jF6/YLW/aNhysAVwCuAPMRqNpWMFcAx5rsC5ijucLFfePhFsAtgFsAt4AUDviWmMJroKMBjsfxNJABc2RYyeK++VmKc4CevrfPlT9MAEfEZn+cqrR7CR3dcxZnAjhD9unl16XdS5jBPachTAAnuD4Tnr0Bvefu7XMNhwngiljN5JkANUuoazhMAFfEaia/6ATo7+//3Pj4+MWa4VqZcAwEOE9E16UFY7MPkLZu1ro3ENFfK4NYjRwVQtyIiO92CwkR34yiaKMvAY4BwJZuSpRSD8Rx/Nsa4VqZUMIw3KaUSnsr+1dEtM2LAEKIvYi4J4VlB6Mo2lEZ1GrkqBBiEhGbKSE9Q0S7vQggpfwuALyUouRikiTrW63WhRph2/OhSCn1q/qnAeCqlOp8dxzHJ70IMDIycsPMzMw/05QopR6L4/i5nketRg5KKZ8EgCfSQlq+fPnKsbGxj70IoAdLKf8AAJtTmHYmjuNbaoRvT4cyPDx8U7vdPgUAq1Ja86tRFN1lCsS4CtAKwjDcqZTab1DWIiJhMsif+yMgpZwAgGGDpqeISFeJ1MeKADZtQFtRSm2N41ivGvgpCAGb0t8p2ucA4DYi+tDkhhUBZtvA8wDwiFEh4mAURUdNcvy5OwJCiE2I+LrFSKtvv9ZjTYBGo7E2CALdd9ZaODDZ19f3i8nJya6bFBY6WGQeAmEY7lZKPW0BivW334kAs1VAVwBdCWyeSwCg5w2HOvcIvGczgGUuR6DRaKxGRH0Hw0OIuMEGH0TcFUXRmI2sMwFmSXACAO6xNQAAnyilXuysIv4cBMFfoih6x2HskhIdHR29Znp6eo1Saj0iPgAA30qb6S8AzlEiGnQBzboFzFcqpTwDADe7GCpIVm+EHCGiZwvSn6pWCLEfEXcuhu0FbH5ARNe7+pKJALOV4CMAWOlqsCB56sx4w4J0L6h29o2iB8u0mWLrAhFdm8WXzATQxoQQb9v2pizOuYxRSu2I4/igy5isss1m894kSY5nHZ/zuNeI6M6sOr0IoI2GYbhHKbU3qwM5jnulcyx9f476uqoSQrQQ8eEybBlsvOz7G8veBNAONpvNoSRJfgoAaxYRlBeIqJR+3DmHP9w5h089Zi0Yh7N6NUZE+3zt5EKA2TmBfvNE92G9HVw6EYIg2DI1NaVXKIU/QohBRDxSuKGFDexLkuT5VqulSeD95EaAOU+klJ8SQSn1TUS8w9tDOwXepdDOzGdSYRgeUEoNuY7LKH8SEU/29fWdnJiY0LeC5fbkToD5ng0NDV09MDCgSfB1AFiHiOuUUusAINOMtUvUpa8A5pH9cQDYDgDrc8sIgH6vQk+uzyRJcqa/v/9U3kmf72uhBMgRFFZVEAJMgIKArYpaJkBVMlWQn0yAgoCtilomQFUyVZCfTICCgK2KWiZAVTJVkJ9MgIKArYra/wGYigzMiqJYZwAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@7272395d2c4ef6f254ee09724e20de4899098bc0/scripts-vite/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB-%E5%9B%BE%E6%A0%87.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.8.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.6.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.4.7/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/data-paging@0.0.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.4.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@886625af68455365e426018ecb55419dd4ea6f30/lib/CryptoJS/index.js
// @connect      *
// @connect      lanzoub.com
// @connect      lanzouc.com
// @connect      lanzoue.com
// @connect      lanzouf.com
// @connect      lanzoug.com
// @connect      lanzouh.com
// @connect      lanzoui.com
// @connect      lanzouj.com
// @connect      lanzouk.com
// @connect      lanzoul.com
// @connect      lanzoum.com
// @connect      lanzouo.com
// @connect      lanzoup.com
// @connect      lanzouq.com
// @connect      lanzous.com
// @connect      lanzout.com
// @connect      lanzouu.com
// @connect      lanzouv.com
// @connect      lanzouw.com
// @connect      lanzoux.com
// @connect      lanzouy.com
// @connect      lanosso.com
// @connect      lanzn.com
// @connect      lanzog.com
// @connect      lanpw.com
// @connect      lanpv.com
// @connect      lanzv.com
// @connect      wwentua.com
// @connect      ilanzou.com
// @connect      189.cn
// @connect      123pan.com
// @connect      123pan.cn
// @connect      wenshushu.cn
// @connect      jianguoyun.com
// @connect      cowtransfer.com
// @connect      cowcs.com
// @connect      aliyundrive.com
// @connect      baidu.com
// @connect      139.com
// @connect      weiyun.com
// @connect      xunlei.com
// @connect      115.com
// @connect      quark.cn
// @connect      jianguoyun.com
// @connect      uc.cn
// @connect      ctfile.com
// @connect      sharepoint.com
// @connect      whatslink.info
// @connect      www.yunpan.com
// @connect      link.yunpan.com
// @grant        GM_deleteValue
// @grant        GM_download
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (f, B, ce, lt, Pt, Ot) {
  "use strict";

  var wt = typeof GM_deleteValue < "u" ? GM_deleteValue : void 0,
    bt = typeof GM_download < "u" ? GM_download : void 0,
    Ct = typeof GM_getResourceText < "u" ? GM_getResourceText : void 0,
    ie = typeof GM_getValue < "u" ? GM_getValue : void 0,
    Pe = typeof GM_info < "u" ? GM_info : void 0,
    Ht = typeof GM_openInTab < "u" ? GM_openInTab : void 0,
    jt = typeof GM_registerMenuCommand < "u" ? GM_registerMenuCommand : void 0,
    pe = typeof GM_setValue < "u" ? GM_setValue : void 0,
    Zt = typeof GM_unregisterMenuCommand < "u" ? GM_unregisterMenuCommand : void 0,
    Kt = typeof GM_xmlhttpRequest < "u" ? GM_xmlhttpRequest : void 0,
    me = typeof unsafeWindow < "u" ? unsafeWindow : void 0,
    qt = window;
  const We = {
      waitRemove(...t) {
        t.forEach((e) => {
          typeof e == "string" &&
            p.waitNodeList(e).then((a) => {
              a.forEach((n) => n.remove());
            });
        });
      },
      createBlockCSSNode(...t) {
        let e = [];
        if (t.length !== 0 && !(t.length === 1 && typeof t[0] == "string" && t[0].trim() === ""))
          return (
            t.forEach((a) => {
              Array.isArray(a) ? (e = e.concat(a)) : e.push(a);
            }),
            B.createElement("style", {
              type: "text/css",
              innerHTML: `${e.join(`,
`)}{display: none !important;}`,
            })
          );
      },
      addBlockCSS(...t) {
        let e = [];
        if (t.length !== 0 && !(t.length === 1 && typeof t[0] == "string" && t[0].trim() === ""))
          return (
            t.forEach((a) => {
              Array.isArray(a) ? (e = e.concat(a)) : e.push(a);
            }),
            vt(
              `${e.join(`,
`)}{display: none !important;}`
            )
          );
      },
      setGMResourceCSS(t) {
        let e = typeof Ct == "function" ? Ct(t.keyName) : null;
        typeof e == "string" && e ? vt(e) : We.loadStyleLink(t.url);
      },
      async loadStyleLink(t) {
        let e = document.createElement("link");
        ((e.rel = "stylesheet"),
          (e.type = "text/css"),
          (e.href = t),
          B.ready(() => {
            document.head.appendChild(e);
          }));
      },
      async loadScript(t) {
        let e = document.createElement("script");
        return (
          (e.src = t),
          new Promise((a) => {
            ((e.onload = () => {
              a(null);
            }),
              (document.head || document.documentElement).appendChild(e));
          })
        );
      },
      fixUrl(t) {
        return (
          (t = t.trim()),
          t.match(/^http(s|):\/\//i)
            ? t
            : t.startsWith("//")
              ? (t.startsWith("///") || (t = window.location.protocol + t), t)
              : (t.startsWith("/") || (t += "/"), (t = window.location.origin + t), t)
        );
      },
      fixHttps(t) {
        if (t.startsWith("https://") || !t.startsWith("http://")) return t;
        let e = new URL(t);
        return ((e.protocol = "https:"), e.toString());
      },
      lockScroll(...t) {
        let e = document.createElement("style");
        e.innerHTML = `
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;
        let a = [document.documentElement, document.body].concat(...(t || []));
        return (
          a.forEach((n) => {
            n.classList.add("pops-overflow-hidden-important");
          }),
          (document.head || document.documentElement).appendChild(e),
          {
            recovery() {
              (a.forEach((n) => {
                n.classList.remove("pops-overflow-hidden-important");
              }),
                e.remove());
            },
          }
        );
      },
      async getClipboardText() {
        function t(n) {
          navigator.clipboard
            .readText()
            .then((r) => {
              n(r);
            })
            .catch((r) => {
              (g.error("读取剪贴板内容失败👉", r), n(""));
            });
        }
        function e(n) {
          navigator.permissions
            .query({ name: "clipboard-read" })
            .then((r) => {
              t(n);
            })
            .catch((r) => {
              (g.error("申请剪贴板权限失败，尝试直接读取👉", r.message ?? r.name ?? r.stack), t(n));
            });
        }
        function a() {
          return !(
            typeof navigator?.clipboard?.readText != "function" || typeof navigator?.permissions?.query != "function"
          );
        }
        return new Promise((n) => {
          if (!a()) {
            n("");
            return;
          }
          document.hasFocus()
            ? e(n)
            : window.addEventListener(
                "focus",
                () => {
                  e(n);
                },
                { once: true }
              );
        });
      },
      escapeHtml(t) {
        return t
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
      interval(t, e, a = 5e3) {
        let n,
          r = a - e,
          s = e,
          i = async (l) => {
            let o = await t(l);
            if ((typeof o == "boolean" && !o) || l) {
              p.workerClearTimeout(n);
              return;
            }
            if (((s += e), s > r)) {
              i(true);
              return;
            }
            n = p.workerSetTimeout(() => {
              i(false);
            }, e);
          };
        i(false);
      },
      findParentNode(t, e, a) {
        if (a) {
          let n = B.closest(t, a);
          if (n) return n.querySelector(e);
        } else return B.matches(t, e) ? t : B.closest(t, e);
      },
    },
    Ue = {
      qmsg_config_position: { key: "qmsg-config-position", defaultValue: "bottom" },
      qmsg_config_maxnums: { key: "qmsg-config-maxnums", defaultValue: 3 },
      qmsg_config_showreverse: { key: "qmsg-config-showreverse", defaultValue: false },
    },
    p = ce.noConflict(),
    w = B.noConflict(),
    O = lt,
    g = new p.Log(Pe, me.console || qt.console);
  let ft = Pe?.script?.name || void 0;
  const Wt = lt.config.Utils.AnyTouch(),
    Gt = false;
  g.config({ debug: false, logMaxCount: 1e3, autoClearConsole: true, tag: true });
  f.config({
    isHTML: true,
    autoClose: true,
    showClose: false,
    consoleLogContent(t) {
      const e = t.getSetting().type;
      if (e === "loading") return false;
      const a = t.getSetting().content;
      return (e === "warning" ? g.warn(a) : e === "error" ? g.error(a) : g.info(a), true);
    },
    get position() {
      return j.getValue(Ue.qmsg_config_position.key, Ue.qmsg_config_position.defaultValue);
    },
    get maxNums() {
      return j.getValue(Ue.qmsg_config_maxnums.key, Ue.qmsg_config_maxnums.defaultValue);
    },
    get showReverse() {
      return j.getValue(Ue.qmsg_config_showreverse.key, Ue.qmsg_config_showreverse.defaultValue);
    },
    get zIndex() {
      let t = ce.getMaxZIndex(),
        e = lt.config.InstanceUtils.getPopsMaxZIndex().zIndex;
      return ce.getMaxValue(t, e) + 100;
    },
  });
  O.GlobalConfig.setGlobalConfig({
    zIndex: () => {
      let t = ce.getMaxZIndex(void 0, void 0, (a) => {
          if (
            a?.classList?.contains("qmsg-shadow-container") ||
            (a?.closest("qmsg") && a.getRootNode() instanceof ShadowRoot)
          )
            return false;
        }),
        e = lt.config.InstanceUtils.getPopsMaxZIndex().zIndex;
      return ce.getMaxValue(t, e) + 100;
    },
    mask: { enable: true, clickEvent: { toClose: false, toHide: false } },
    drag: true,
  });
  const Oe = new p.GM_Menu({
      GM_getValue: ie,
      GM_setValue: pe,
      GM_registerMenuCommand: jt,
      GM_unregisterMenuCommand: Zt,
    }),
    E = new p.Httpx({ xmlHttpRequest: Kt, logDetails: Gt });
  E.interceptors.request.use((t) => t);
  E.interceptors.response.use(
    void 0,
    (t) => (
      g.error("拦截器-请求错误", t),
      t.type === "onabort"
        ? f.warning("请求取消", { consoleLogContent: true })
        : t.type === "onerror"
          ? f.error("请求异常", { consoleLogContent: true })
          : t.type === "ontimeout"
            ? f.error("请求超时", { consoleLogContent: true })
            : f.error("其它错误", { consoleLogContent: true }),
      t
    )
  );
  (me.Object.defineProperty,
    me.Function.prototype.apply,
    me.Function.prototype.call,
    me.Element.prototype.appendChild,
    me.setTimeout);
  const vt = p.addStyle.bind(p),
    He = B.selector.bind(B),
    Yt = B.selectorAll.bind(B);
  new p.GM_Cookie();
  const Mt = "GM_Panel",
    kt = "data-init",
    ue = "data-key",
    we = "data-default-value",
    Jt = "data-init-more-value",
    U = "data-storage-api",
    ve = {
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
          return ve.width < 550 ? "88vw" : ve.width < 700 ? "550px" : "700px";
        },
        get height() {
          return ve.height < 450 ? "70vh" : ve.height < 550 ? "450px" : "550px";
        },
      },
      settingMiddle: {
        get width() {
          return ve.width < 350 ? "88vw" : "350px";
        },
        get height() {
          return ve.height < 450 ? "88vh" : "450px";
        },
      },
      settingBig: {
        get width() {
          return ve.width < 800 ? "92vw" : "800px";
        },
        get height() {
          return ve.height < 600 ? "80vh" : "600px";
        },
      },
      info: {
        get width() {
          return ve.width < 350 ? "88vw" : "350px";
        },
        get height() {
          return ve.height < 250 ? "88vh" : "250px";
        },
      },
    };
  class Ve {
    storageKey;
    listenerData;
    constructor(e) {
      if (typeof e == "string") {
        let a = e.trim();
        if (a == "") throw new Error("key参数不能为空字符串");
        this.storageKey = a;
      } else throw new Error("key参数类型错误，必须是字符串");
      this.listenerData = new ce.Dictionary();
    }
    getLocalValue() {
      let e = ie(this.storageKey);
      return (e == null && ((e = {}), this.setLocalValue(e)), e);
    }
    setLocalValue(e) {
      pe(this.storageKey, e);
    }
    set(e, a) {
      let n = this.get(e),
        r = this.getLocalValue();
      (Reflect.set(r, e, a), this.setLocalValue(r), this.triggerValueChangeListener(e, n, a));
    }
    get(e, a) {
      let n = this.getLocalValue();
      return Reflect.get(n, e) ?? a;
    }
    getAll() {
      return this.getLocalValue();
    }
    delete(e) {
      let a = this.get(e),
        n = this.getLocalValue();
      (Reflect.deleteProperty(n, e), this.setLocalValue(n), this.triggerValueChangeListener(e, a, void 0));
    }
    has(e) {
      let a = this.getLocalValue();
      return Reflect.has(a, e);
    }
    keys() {
      let e = this.getLocalValue();
      return Reflect.ownKeys(e);
    }
    values() {
      let e = this.getLocalValue();
      return Reflect.ownKeys(e).map((a) => Reflect.get(e, a));
    }
    clear() {
      wt(this.storageKey);
    }
    addValueChangeListener(e, a) {
      let n = Math.random(),
        r = this.listenerData.get(e) || [];
      return (r.push({ id: n, key: e, callback: a }), this.listenerData.set(e, r), n);
    }
    removeValueChangeListener(e) {
      let a = false;
      for (const [n, r] of this.listenerData.entries()) {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          ((typeof e == "string" && i.key === e) || (typeof e == "number" && i.id === e)) &&
            (r.splice(s, 1), s--, (a = true));
        }
        this.listenerData.set(n, r);
      }
      return a;
    }
    triggerValueChangeListener(e, a, n) {
      if (!this.listenerData.has(e)) return;
      let r = this.listenerData.get(e);
      for (let s = 0; s < r.length; s++) {
        const i = r[s];
        if (typeof i.callback == "function") {
          let l = this.get(e),
            o,
            c;
          (typeof a < "u" && arguments.length >= 2 ? (c = a) : (c = l),
            typeof n < "u" && arguments.length > 2 ? (o = n) : (o = l),
            i.callback(e, c, o));
        }
      }
    }
  }
  const Me = new Ve(Mt),
    De = {
      $data: {
        __contentConfig: null,
        get contentConfig() {
          return (this.__contentConfig == null && (this.__contentConfig = new p.Dictionary()), this.__contentConfig);
        },
      },
      addContentConfig(t) {
        Array.isArray(t) || (t = [t]);
        let e = this.$data.contentConfig.keys().length;
        this.$data.contentConfig.set(e, t);
      },
      getAllContentConfig() {
        return this.$data.contentConfig.values().flat();
      },
      getConfig(t = 0) {
        return this.$data.contentConfig.get(t) ?? [];
      },
      getDefaultBottomContentConfig() {
        return [
          {
            id: "script-version",
            title: `版本：${Pe?.script?.version || "未知"}`,
            isBottom: true,
            forms: [],
            clickFirstCallback(t, e, a) {
              let n = Pe?.script?.supportURL || Pe?.script?.namespace;
              return (typeof n == "string" && p.isNotNull(n) && window.open(n, "_blank"), false);
            },
          },
        ];
      },
    },
    ct = {
      $data: {
        __menuOption: [
          {
            key: "show_pops_panel_setting",
            text: "⚙ 设置",
            autoReload: false,
            isStoreValue: false,
            showText(t) {
              return t;
            },
            callback: () => {
              j.showPanel(De.getConfig(0));
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
        j.isTopWindow() && Oe.add(this.$data.menuOption);
      },
      addMenuOption(t) {
        (Array.isArray(t) || (t = [t]), this.$data.menuOption.push(...t));
      },
      updateMenuOption(t) {
        (Array.isArray(t) || (t = [t]),
          t.forEach((e) => {
            let a = this.$data.menuOption.findIndex((n) => n.key === e.key);
            a !== -1 && (this.$data.menuOption[a] = e);
          }));
      },
      getMenuOption(t = 0) {
        return this.$data.menuOption[t];
      },
      deleteMenuOption(t = 0) {
        this.$data.menuOption.splice(t, 1);
      },
    },
    j = {
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
            this.__contentConfigInitDefaultValue == null && (this.__contentConfigInitDefaultValue = new p.Dictionary()),
            this.__contentConfigInitDefaultValue
          );
        },
        contentConfigInitDisabledKeys: [],
        get onceExecMenuData() {
          return (
            this.__onceExecMenuData == null && (this.__onceExecMenuData = new p.Dictionary()),
            this.__onceExecMenuData
          );
        },
        get urlChangeReloadMenuExecOnce() {
          return (
            this.__urlChangeReloadMenuExecOnce == null && (this.__urlChangeReloadMenuExecOnce = new p.Dictionary()),
            this.__urlChangeReloadMenuExecOnce
          );
        },
        get onceExecData() {
          return (this.__onceExecData == null && (this.__onceExecData = new p.Dictionary()), this.__onceExecData);
        },
        get scriptName() {
          return ft;
        },
        get panelConfig() {
          return this.__panelConfig;
        },
        set panelConfig(t) {
          this.__panelConfig = t;
        },
        key: Mt,
        attributeKeyName: ue,
        attributeDefaultValueName: we,
      },
      init() {
        (this.initContentDefaultValue(), ct.init());
      },
      isTopWindow() {
        return me.top === me.self;
      },
      initContentDefaultValue() {
        const t = (n) => {
            if (!n.attributes || n.type === "button" || n.type === "forms" || n.type === "deepMenu") return;
            let r = n.attributes[kt];
            if (typeof r == "function") {
              let o = r();
              if (typeof o == "boolean" && !o) return;
            }
            let s = new Map(),
              i = n.attributes[ue];
            if (i != null) {
              const o = n.attributes[we];
              s.set(i, o);
            }
            let l = n.attributes[Jt];
            if (
              (typeof l == "object" &&
                l &&
                Object.keys(l).forEach((o) => {
                  s.set(o, l[o]);
                }),
              !s.size)
            ) {
              g.warn(["请先配置键", n]);
              return;
            }
            if (n.type === "switch") {
              let o = typeof n.disabled == "function" ? n.disabled() : n.disabled;
              typeof o == "boolean" && o && this.$data.contentConfigInitDisabledKeys.push(...s.keys());
            }
            for (const [o, c] of s.entries()) this.setDefaultValue(o, c);
          },
          e = (n) => {
            for (let r = 0; r < n.length; r++) {
              let s = n[r];
              t(s);
              let i = s.forms;
              i && Array.isArray(i) && e(i);
            }
          },
          a = [...De.getAllContentConfig()];
        for (let n = 0; n < a.length; n++) {
          let r = a[n];
          if (!r.forms) continue;
          const s = r.forms;
          s && Array.isArray(s) && e(s);
        }
        this.$data.contentConfigInitDisabledKeys = [...new Set(this.$data.contentConfigInitDisabledKeys)];
      },
      setDefaultValue(t, e) {
        (this.$data.contentConfigInitDefaultValue.has(t) && g.warn("请检查该key(已存在): " + t),
          this.$data.contentConfigInitDefaultValue.set(t, e));
      },
      getDefaultValue(t) {
        return this.$data.contentConfigInitDefaultValue.get(t);
      },
      setValue(t, e) {
        Me.set(t, e);
      },
      getValue(t, e) {
        let a = Me.get(t);
        return (
          a ?? (this.$data.contentConfigInitDefaultValue.has(t) ? this.$data.contentConfigInitDefaultValue.get(t) : e)
        );
      },
      deleteValue(t) {
        Me.delete(t);
      },
      hasKey(t) {
        return Me.has(t);
      },
      addValueChangeListener(t, e) {
        return Me.addValueChangeListener(t, (n, r, s) => {
          e(t, s, r);
        });
      },
      removeValueChangeListener(t) {
        Me.removeValueChangeListener(t);
      },
      triggerMenuValueChange(t, e, a) {
        Me.triggerValueChangeListener(t, a, e);
      },
      exec(t, e, a, n = true) {
        const r = this;
        let s;
        typeof t == "string" || Array.isArray(t) ? (s = () => t) : (s = t);
        let i = false,
          l = s(),
          o = [];
        Array.isArray(l) ? ((i = true), (o = l)) : o.push(l);
        let c = o.find((_) => !this.$data.contentConfigInitDefaultValue.has(_));
        if (c) {
          g.warn(`${c} 键不存在`);
          return;
        }
        let u = JSON.stringify(o);
        if (n && this.$data.onceExecMenuData.has(u)) return this.$data.onceExecMenuData.get(u);
        let d = [],
          h = [],
          m = (_, D) => {
            let S = [];
            (Array.isArray(D) || (D = [D]),
              D.forEach((A) => {
                if (A != null && A instanceof HTMLStyleElement) {
                  S.push(A);
                  return;
                }
              }),
              (d = d.concat(S)));
          },
          b = (_) => this.getValue(_),
          k = () => {
            for (let _ = 0; _ < d.length; _++) (d[_].remove(), d.splice(_, 1), _--);
          },
          x = () => {
            let _ = false;
            return (typeof a == "function" ? (_ = a(o)) : (_ = o.every((D) => b(D))), _);
          },
          v = (_) => {
            let D = x(),
              S = [];
            if (D) {
              let A = o.map((M) => this.getValue(M)),
                R = e({ value: i ? A : A[0], addStyleElement: (...M) => m(true, ...M) });
              (Array.isArray(R) || (R = [R]),
                R.forEach((M) => {
                  if (M != null && M instanceof HTMLStyleElement) {
                    S.push(M);
                    return;
                  }
                }));
            }
            (k(), (d = [...S]));
          };
        (n &&
          o.forEach((_) => {
            let D = this.addValueChangeListener(_, (S, A, R) => {
              v();
            });
            h.push(D);
          }),
          v());
        let T = {
          reload() {
            v();
          },
          clear() {
            (this.clearStoreStyleElements(), this.removeValueChangeListener(), n && r.$data.onceExecMenuData.delete(u));
          },
          clearStoreStyleElements: () => k(),
          removeValueChangeListener: () => {
            h.forEach((_) => {
              this.removeValueChangeListener(_);
            });
          },
        };
        return (this.$data.onceExecMenuData.set(u, T), T);
      },
      execMenu(t, e, a = false, n = false) {
        return this.exec(
          t,
          (r) => e(r),
          (r) =>
            r.every((i) => {
              let l = !!this.getValue(i);
              return (
                j.$data.contentConfigInitDisabledKeys.includes(i) &&
                  ((l = false), g.warn(`.execMenu${n ? "Once" : ""} ${i} 被禁用`)),
                a && (l = !l),
                l
              );
            }),
          n
        );
      },
      execMenuOnce(t, e, a = false, n = false) {
        const r = this.execMenu(t, e, a, true);
        if (n && r) {
          const s = () => {
            r.reload();
          };
          (this.removeUrlChangeWithExecMenuOnceListener(t), this.addUrlChangeWithExecMenuOnceListener(t, s));
          const i = r.clear;
          r.clear = () => {
            (i(), this.removeUrlChangeWithExecMenuOnceListener(t));
          };
        }
        return r;
      },
      deleteExecMenuOnce(t) {
        return (
          (t = this.transformKey(t)),
          this.$data.onceExecMenuData.delete(t),
          this.$data.urlChangeReloadMenuExecOnce.delete(t),
          Me.removeValueChangeListener(t)
        );
      },
      onceExec(t, e) {
        if (((t = this.transformKey(t)), typeof t != "string")) throw new TypeError("key 必须是字符串");
        this.$data.onceExecData.has(t) || (e(), this.$data.onceExecData.set(t, 1));
      },
      deleteOnceExec(t) {
        ((t = this.transformKey(t)), this.$data.onceExecData.delete(t));
      },
      addUrlChangeWithExecMenuOnceListener(t, e) {
        ((t = this.transformKey(t)), this.$data.urlChangeReloadMenuExecOnce.set(t, e));
      },
      removeUrlChangeWithExecMenuOnceListener(t) {
        ((t = this.transformKey(t)), this.$data.urlChangeReloadMenuExecOnce.delete(t));
      },
      triggerUrlChangeWithExecMenuOnceEvent(t) {
        this.$data.urlChangeReloadMenuExecOnce.forEach((e, a) => {
          e(t);
        });
      },
      showPanel(t, e = `${ft}-设置`, a = false, n = false) {
        ((this.$data.$panel = null), (this.$data.panelContent = []));
        let r =
          t.findIndex(
            (i) => (typeof i.isBottom == "function" ? i.isBottom() : !!i.isBottom) && i.id === "script-version"
          ) !== -1;
        !a && !r && t.push(...De.getDefaultBottomContentConfig());
        let s = O.panel({
          title: { text: e, position: "center", html: false, style: "" },
          content: t,
          btn: {
            close: {
              enable: true,
              callback: (i, l) => {
                (i.close(), (this.$data.$panel = null));
              },
            },
          },
          mask: {
            enable: true,
            clickEvent: { toClose: true, toHide: false },
            clickCallBack: (i, l) => {
              (i(), (this.$data.$panel = null));
            },
          },
          width: K.setting.width,
          height: K.setting.height,
          drag: true,
          only: true,
          ...this.$data.panelConfig,
        });
        ((this.$data.$panel = s),
          (this.$data.panelContent = t),
          n || this.registerConfigSearch({ $panel: s, content: t }));
      },
      registerConfigSearch(t) {
        const { $panel: e, content: a } = t;
        let n = async (u, d) => {
            if (u == null) return;
            let h = await d(u);
            return h && typeof h.isFind == "boolean" && h.isFind ? h.data : await n(h.data, d);
          },
          r = (u, d) => {
            const h = new IntersectionObserver(
              (m) => {
                m.forEach((b) => {
                  b.isIntersecting && (d?.(), h.disconnect());
                });
              },
              { root: null, threshold: 1 }
            );
            (h.observe(u), u.scrollIntoView({ behavior: "smooth", block: "center" }));
          },
          s = (u) => {
            const d = "pops-flashing";
            (w.animationend(u, () => {
              u.classList.remove(d);
            }),
              u.classList.add(d));
          },
          i = (u, d) => {
            p.preventEvent(u);
            let h = O.alert({
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
					${O.config.cssText.panelCSS}

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
					${t.searchDialogStyle ?? ""}
				`,
            });
            h.$shadowRoot.querySelector(".search-wrapper");
            let m = h.$shadowRoot.querySelector(".search-config-text"),
              b = h.$shadowRoot.querySelector(".search-result-wrapper");
            m.focus();
            let k = () => {
                w.empty(b);
              },
              x = (T) => {
                const _ = p.queryProperty(T, (S) =>
                  S?.next ? { isFind: false, data: S.next } : { isFind: true, data: S }
                );
                let D = w.createElement("div", {
                  className: "search-result-item",
                  innerHTML: `
							<div class="search-result-item-path">${_.matchedData?.path}</div>
							<div class="search-result-item-description">${_.matchedData?.description ?? ""}</div>
						`,
                });
                return (
                  w.on(D, "click", (S) => {
                    let R = e.$shadowRoot.querySelectorAll("aside.pops-panel-aside .pops-panel-aside-top-container li")[
                      T.index
                    ];
                    if (!R) {
                      f.error(`左侧项下标${T.index}不存在`);
                      return;
                    }
                    (R.scrollIntoView({ behavior: "smooth", block: "center" }),
                      R.click(),
                      n(T.next, async (M) => {
                        if (M?.next) {
                          let I = await p.waitNode(
                            () =>
                              Array.from(e.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find((L) => {
                                const F = Reflect.get(L, "__formConfig__");
                                return typeof F == "object" && F != null && F.text === M.name;
                              }),
                            2500
                          );
                          if (I) I.click();
                          else return (f.error("未找到对应的二级菜单"), { isFind: true, data: M });
                          return { isFind: false, data: M.next };
                        } else {
                          let I = await p.waitNode(
                            () =>
                              Array.from(e.$shadowRoot.querySelectorAll("li:not(.pops-panel-deepMenu-nav-item)")).find(
                                (L) => Reflect.get(L, "__formConfig__") === M.matchedData?.formConfig
                              ),
                            2500
                          );
                          if (I) {
                            r(I);
                            let L = I.closest(".pops-panel-forms-fold[data-fold-enable]");
                            (L && (L.querySelector(".pops-panel-forms-fold-container").click(), await p.sleep(500)),
                              r(I, () => {
                                s(I);
                              }));
                          } else f.error("未找到对应的菜单项");
                          return { isFind: true, data: M };
                        }
                      }));
                  }),
                  D
                );
              },
              v = (T) => {
                const _ = new RegExp(T, "i"),
                  D = [],
                  S = (R, M) => {
                    for (let I = 0; I < R.length; I++) {
                      const L = R[I];
                      let F = L.forms;
                      if (F && Array.isArray(F)) {
                        const W = p.deepClone(M);
                        if (L.type === "deepMenu") {
                          const ee = p.queryProperty(W, (ae) =>
                            ae?.next ? { isFind: false, data: ae.next } : { isFind: true, data: ae }
                          );
                          ee.next = { name: L.text };
                        }
                        S(F, W);
                      } else {
                        let W = Reflect.get(L, "text"),
                          ee = Reflect.get(L, "description");
                        const ae = [W, ee];
                        let fe = ae.findIndex((he) => {
                          if (typeof he == "string") return he.match(_);
                        });
                        if (fe !== -1) {
                          const he = p.deepClone(M),
                            Te = p.queryProperty(he, (ke) =>
                              ke?.next ? { isFind: false, data: ke.next } : { isFind: true, data: ke }
                            );
                          Te.next = {
                            name: W,
                            matchedData: { path: "", formConfig: L, matchedText: ae[fe], description: ee },
                          };
                          const Le = [];
                          p.queryProperty(he, (ke) => {
                            const et = ke?.name;
                            return (
                              typeof et == "string" && et.trim() !== "" && Le.push(et),
                              ke?.next ? { isFind: false, data: ke.next } : { isFind: true, data: ke }
                            );
                          });
                          const Qe = Le.join(We.escapeHtml(" - "));
                          ((Te.next.matchedData.path = Qe), D.push(he));
                        }
                      }
                    }
                  };
                for (let R = 0; R < a.length; R++) {
                  const M = a[R];
                  if (!M.forms || (M.isBottom && M.id === "script-version")) continue;
                  const I = M.forms;
                  if (I && Array.isArray(I)) {
                    let L = M.title;
                    (typeof L == "function" && (L = L()), S(I, { index: R, name: L }));
                  }
                }
                let A = document.createDocumentFragment();
                for (const R of D) {
                  let M = x(R);
                  A.appendChild(M);
                }
                (k(), b.append(A));
              };
            w.on(
              m,
              "input",
              p.debounce((T) => {
                p.preventEvent(T);
                let _ = w.val(m).trim();
                if (_ === "") {
                  k();
                  return;
                }
                v(_);
              }, 200)
            );
          },
          l = null,
          o = false,
          c;
        (w.on(e.$shadowRoot, "dblclick", "aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)", i),
          w.on(
            e.$shadowRoot,
            "touchend",
            "aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)",
            (u, d) => {
              (clearTimeout(c),
                (c = void 0),
                o && l === d
                  ? ((o = false), (l = null), i(u))
                  : ((c = setTimeout(() => {
                      o = false;
                    }, 200)),
                    (o = true),
                    (l = d)));
            },
            { capture: true }
          ),
          e.$shadowRoot.appendChild(
            w.createElement("style", {
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
      transformKey(t) {
        if (Array.isArray(t)) {
          const e = t.sort();
          return JSON.stringify(e);
        } else return t;
      },
    },
    Re = ft || "网盘链接识别",
    It = Ot,
    Fe = Pt ?? window.CryptoJS ?? me.CryptoJS,
    je = {
      $data: {
        __storeApiFn: null,
        get storeApiValue() {
          return (this.__storeApiFn || (this.__storeApiFn = new ce.Dictionary()), this.__storeApiFn);
        },
      },
      getStorageApi(t) {
        if (this.hasStorageApi(t)) return this.$data.storeApiValue.get(t);
      },
      hasStorageApi(t) {
        return this.$data.storeApiValue.has(t);
      },
      setStorageApi(t, e) {
        this.$data.storeApiValue.set(t, e);
      },
      initComponentsStorageApi(t, e, a) {
        let n;
        (this.hasStorageApi(t) ? (n = this.getStorageApi(t)) : (n = a), this.setComponentsStorageApiProperty(e, n));
      },
      setComponentsStorageApiProperty(t, e) {
        Reflect.set(t.props, U, e);
      },
    },
    H = function (t, e, a, n, r, s, i, l) {
      let o = {
        text: t,
        type: "switch",
        description: r,
        disabled: i,
        attributes: {},
        props: {},
        getValue() {
          return this.props[U].get(e, a);
        },
        callback(c, u) {
          let d = !!u;
          if ((g.success(`${d ? "开启" : "关闭"} ${t}`), typeof n == "function" && n(c, d))) return;
          (this.props[U].set(e, d), typeof l == "function" && l(c, d));
        },
        afterAddToUListCallBack: s,
      };
      return (
        Reflect.set(o.attributes, ue, e),
        Reflect.set(o.attributes, we, a),
        je.initComponentsStorageApi("switch", o, {
          get(c, u) {
            return j.getValue(c, u);
          },
          set(c, u) {
            j.setValue(c, u);
          },
        }),
        o
      );
    },
    G = function (t, e, a, n, r, s = "", i, l, o, c) {
      let u = {
        text: t,
        type: "input",
        isNumber: !!i,
        isPassword: !!l,
        attributes: {},
        props: {},
        description: n,
        afterAddToUListCallBack: o,
        getValue() {
          return this.props[U].get(e, a);
        },
        callback(d, h, m) {
          if (typeof r == "function" && r(d, h, m)) return;
          this.props[U].set(e, h);
        },
        placeholder: s,
      };
      return (
        Reflect.set(u.attributes, ue, e),
        Reflect.set(u.attributes, we, a),
        je.initComponentsStorageApi("input", u, {
          get(d, h) {
            return j.getValue(d, h);
          },
          set(d, h) {
            j.setValue(d, h);
          },
        }),
        u
      );
    },
    rt = function (t, e, a, n, r, s, i, l, o, c) {
      let u = {
        text: t,
        type: "button",
        attributes: {},
        props: {},
        description: e,
        buttonIcon: n,
        buttonIsRightIcon: r,
        buttonIconIsLoading: s,
        buttonType: i,
        buttonText: a,
        callback(d) {
          typeof l == "function" && l(d);
        },
        afterAddToUListCallBack: o,
      };
      return (
        Reflect.set(u.attributes, kt, () => {
          u.disable = false;
        }),
        u
      );
    },
    Xt = {
      tianYiYunLoginTip: { PC: { width: "30vw", height: "280px" }, Mobile: { width: "80vw", height: "250px" } },
      jianGuoYunLoginTip: { PC: { width: "350px", height: "200px" }, Mobile: { width: "350px", height: "200px" } },
      settingView: { PC: { width: "800px", height: "600px" }, Mobile: { width: "92vw", height: "80vh" } },
      setDefaultValueView: { PC: { width: "350px", height: "200px" }, Mobile: { width: "350px", height: "200px" } },
      mainView: { PC: { width: "500px", height: "100%" }, Mobile: { width: "88vw", height: "50vh" } },
      mainViewSmallWindow: {
        PC: {
          get width() {
            return y.smallWindow["netdisk-ui-small-window-width"].value + "px";
          },
          height: "auto",
        },
        Mobile: {
          get width() {
            return y.smallWindow["netdisk-ui-small-window-width"].value + "px";
          },
          height: "auto",
        },
      },
      oneFileStaticView: { PC: { width: "550px", height: "350px" }, Mobile: { width: "88vw", height: "300px" } },
      moreFileStaticView: { PC: { width: "700px", height: "600px" }, Mobile: { width: "88vw", height: "500px" } },
      inputNewAccessCodeView: { PC: { width: "400px", height: "200px" }, Mobile: { width: "88vw", height: "160px" } },
      historyMatchView: { PC: { width: "50vw", height: "65vh" }, Mobile: { width: "88vw", height: "60vh" } },
      customRulesView: { PC: { width: "50vw", height: "65vh" }, Mobile: { width: "88vw", height: "60vh" } },
      customRuleDebugView: { PC: { width: "55vw", height: "70vh" }, Mobile: { width: "88vw", height: "70vh" } },
      matchPasteTextView: { PC: { width: "50vw", height: "65vh" }, Mobile: { width: "88vw", height: "60vh" } },
      accessCodeRuleView: { PC: { width: "50vw", height: "65vh" }, Mobile: { width: "88vw", height: "60vh" } },
      accessCodeRuleEditView: { PC: { width: "44vw", height: "50vh" }, Mobile: { width: "70vw", height: "45vh" } },
      websiteRuleView: { PC: { width: "45vw", height: "65vh" }, Mobile: { width: "88vw", height: "60vh" } },
      websiteEditRuleView: { PC: { width: "45vw", height: "65vh" }, Mobile: { width: "88vw", height: "60vh" } },
    },
    Qt = function (t) {
      (window.location.hostname === "pan.baidu.com" &&
        window.location.pathname === "/share/init" &&
        window.location.search.startsWith("?surl=") &&
        (g.success("自动填写链接", t),
        p.waitNode("div.verify-form #accessCode").then((e) => {
          if (!p.isVisible(e)) {
            g.error("输入框不可见，不输入密码");
            return;
          }
          (f.success("自动填充访问码"),
            (e.value = t.accessCode),
            p.dispatchEvent(e, "input"),
            document.querySelector("div.verify-form #submitBtn")?.click());
        })),
        window.location.hostname === "pan.baidu.com" &&
          window.location.pathname === "/wap/init" &&
          window.location.search.startsWith("?surl=") &&
          (g.success("自动填写链接", t),
          p.waitNode("div.extractWrap div.extract-content div.extractInputWrap.extract input[type=text]").then((e) => {
            if (!p.isVisible(e)) {
              g.error("输入框不可见，不输入密码");
              return;
            }
            (f.success("自动填充访问码"),
              (e.value = t.accessCode),
              p.dispatchEvent(e, "input"),
              document.querySelector("div.extractWrap div.extract-content button.m-button")?.click());
          })));
    },
    ea = function (t) {
      window.location.hostname.match(/lanzou[a-z]{1}.com/gi) &&
        (g.success("自动填写链接", t),
        p.waitNode("#pwd").then((e) => {
          if (!p.isVisible(e)) {
            g.error("输入框不可见，不输入密码");
            return;
          }
          (f.success("自动填充访问码"),
            (e.value = t.accessCode),
            p.dispatchEvent(e, "input"),
            (document.querySelector("#passwddiv div.passwddiv-input > div") || e.nextElementSibling)?.click(),
            document.querySelector("#sub")?.click());
        }),
        p.waitNode("#f_pwd").then((e) => {
          p.mutationObserver(e, {
            config: { attributes: true, attributeFilter: ["style"] },
            callback: (a, n) => {
              let r = document.querySelector("#f_pwd #pwd");
              if (!p.isVisible(r)) {
                g.error("输入框不可见，不输入密码");
                return;
              }
              (n.disconnect(),
                g.success("自动填充访问码并关闭观察者"),
                f.success("自动填充访问码"),
                (r.value = t.accessCode),
                p.dispatchEvent(r, "input"),
                document.querySelector("#f_pwd #sub")?.click());
            },
          });
        }));
    },
    ta = function (t) {
      function e(a, n) {
        let r = 0,
          s = 30,
          i = setInterval(() => {
            if ((r++, r > s)) {
              (g.error("结束循环检查，退出。"), clearInterval(i));
              return;
            }
            if (!p.isVisible(a)) {
              g.warn(`第 ${r} 次：输入框不可见，不输入密码`);
              return;
            }
            (n(), clearInterval(i));
          }, 500);
      }
      (window.location.hostname === "cloud.189.cn" &&
        (g.success("自动填写链接", t),
        p.waitNode("input#code_txt").then((a) => {
          e(a, () => {
            f.success("自动填充访问码");
            let n = document.querySelector(".btn.btn-primary.visit");
            ((a.value = t.accessCode),
              Reflect.set(a, "_value", t.accessCode),
              p.dispatchEvent(a, "input"),
              p.dispatchEvent(n, "click"));
          });
        })),
        window.location.hostname === "h5.cloud.189.cn" &&
          (g.success("自动填写链接", t),
          p.waitNode("input.access-code-input").then((a) => {
            e(a, () => {
              (f.success("自动填充访问码"),
                (a.value = t.accessCode),
                Reflect.set(a, "_value", t.accessCode),
                p.dispatchEvent(a, "input"),
                p.dispatchEvent(document.querySelector("div.button"), "click"));
            });
          })));
    },
    aa = function (t) {
      window.location.hostname === "caiyun.139.com" &&
        (g.success("自动填写链接", t),
        p.waitNode("#token-input").then((e) => {
          if (!p.isVisible(e)) {
            g.error("输入框不可见，不输入密码");
            return;
          }
          (f.success("自动填充访问码"),
            (e.value = t.accessCode),
            p.dispatchEvent(e, "input"),
            document.querySelector("#homepage div.token div.token-form a").click());
        }),
        p.waitNode("#app div.token-form input[type=text]").then((e) => {
          if (!p.isVisible(e)) {
            g.error("输入框不可见，不输入密码");
            return;
          }
          (f.success("自动填充访问码"),
            (e.value = t.accessCode),
            p.dispatchEvent(e, "input"),
            document.querySelector("div.token-form a.btn-token").click());
        }));
    },
    yt = {
      async waitReactPropsToSet(t, e, a) {
        (Array.isArray(e) || (e = [e]), Array.isArray(a) || (a = [a]));
        function n() {
          let r = null;
          return (
            typeof t == "string"
              ? (r = w.selector(t))
              : typeof t == "function"
                ? (r = t())
                : t instanceof HTMLElement && (r = t),
            r
          );
        }
        (typeof t == "string" && !(await p.waitNode(t, 1e4))) ||
          a.forEach((r) => {
            typeof r.msg == "string" && g.info(r.msg);
            function s() {
              let i = n();
              if (i == null) return { status: false, isTimeout: true, inst: null, $el: i };
              let l = p.getReactObj(i);
              if (l == null) return { status: false, isTimeout: false, inst: null, $el: i };
              let o = Array.from(e).findIndex((d) => {
                  let h = l[d];
                  if (!h) return false;
                  let m = r.check(h, i);
                  return ((m = !!m), m);
                }),
                c = e[o],
                u = l[c];
              return { status: o !== -1, isTimeout: false, inst: u, $el: i };
            }
            p.waitPropertyByInterval(
              () => n(),
              () => s().status,
              250,
              1e4
            ).then(() => {
              let i = s();
              if (i.status) {
                let l = i.inst;
                r.set(l, i.$el);
              } else typeof r.failWait == "function" && r.failWait(i.isTimeout);
            });
          });
      },
    },
    na = function (t) {
      (window.location.hostname === "www.aliyundrive.com" || window.location.hostname === "www.alipan.com") &&
        (g.success("自动填写链接", t),
        w.ready(() => {
          p.waitAnyNode([
            "#root input.ant-input[placeholder*='提取码']",
            "#root input[name=pwd][placeholder*='提取码']",
          ]).then((e) => {
            yt.waitReactPropsToSet(e, ["reactProps", "reactFiber"], {
              check(a) {
                return typeof a?.onChange == "function" || typeof a?.memoizedProps?.onChange == "function";
              },
              set(a) {
                if (!p.isVisible(e)) {
                  g.error("输入框不可见，不输入密码");
                  return;
                }
                ((e.value = t.accessCode),
                  (a?.onChange || a?.memoizedProps?.onChange)({ currentTarget: e, target: e }),
                  f.success("自动填充访问码"));
                let r = He('#root button[type="submit"]');
                if (!r) {
                  f.error("提交按钮不存在");
                  return;
                }
                r.click();
              },
            });
          });
        }));
    },
    ra = function (t) {
      window.location.hostname === "www.123pan.com" &&
        (g.success("自动填写链接", t),
        w.ready(() => {
          p.waitAnyNode([
            "#app .ca-fot input.ant-input[type=text][placeholder*='提取码']",
            "#app .appinput input.ant-input[type=text][placeholder*='提取码']",
          ]).then((e) => {
            yt.waitReactPropsToSet(e, ["reactProps", "reactFiber"], {
              check(a) {
                return typeof a?.onChange == "function" || typeof a?.memoizedProps?.onChange == "function";
              },
              set(a) {
                if (!p.isVisible(e)) {
                  g.error("输入框不可见，不输入密码");
                  return;
                }
                ((e.value = t.accessCode),
                  (a?.onChange || a?.memoizedProps?.onChange)({ currentTarget: e, target: e }),
                  f.success("自动填充访问码"));
                let r = e.nextElementSibling;
                if (!r) {
                  f.error("提交按钮不存在");
                  return;
                }
                r.click();
              },
            });
          });
        }));
    },
    ia = function (t) {
      window.location.hostname === "share.weiyun.com" &&
        (g.success("自动填写链接", t),
        p.waitNode("#app input.input-txt").then((e) => {
          if (!p.isVisible(e)) {
            g.error("输入框不可见，不输入密码");
            return;
          }
          (f.success("自动填充访问码"),
            (e.value = t.accessCode),
            p.dispatchEvent(e, "input"),
            p.dispatchEvent(e, "change"),
            setTimeout(() => {
              document.querySelector(".form-item button.btn-main").click();
            }, 500));
        }),
        p.waitNode(".input-wrap input.pw-input").then((e) => {
          if (!p.isVisible(e)) {
            g.error("输入框不可见，不输入密码");
            return;
          }
          (f.success("自动填充访问码"),
            (e.value = t.accessCode),
            p.dispatchEvent(e, "input"),
            p.dispatchEvent(e, "change"),
            setTimeout(() => {
              document.querySelector(".pw-btn-wrap button.btn").click();
            }, 500));
        }));
    },
    sa = function (t) {
      window.location.hostname === "pan.xunlei.com" &&
        (g.success("自动填写链接", t),
        p.waitNode("#__layout div.pass-input-wrap input.td-input__inner").then((e) => {
          if (!p.isVisible(e)) {
            g.error("输入框不可见，不输入密码");
            return;
          }
          (g.error("输入框不可见，不输入密码"),
            (e.value = t.accessCode),
            p.dispatchEvent(e, "input"),
            p.dispatchEvent(e, "change"),
            setTimeout(() => {
              document.querySelector("#__layout div.pass-input-wrap button.td-button").click();
            }, 500));
        }),
        p.waitNode("#__layout div.pass-wrapper input.td-input__inner").then((e) => {
          if (!p.isVisible(e)) {
            g.error("输入框不可见，不输入密码");
            return;
          }
          (g.error("输入框不可见，不输入密码"),
            (e.value = t.accessCode),
            p.dispatchEvent(e, "input"),
            p.dispatchEvent(e, "change"),
            setTimeout(() => {
              document.querySelector("#__layout div.pass-wrapper button.td-button").click();
            }, 500));
        }));
    },
    oa = function (t) {
      window.location.hostname === "pan.quark.cn" &&
        (g.success("自动填写链接", t),
        w.ready(() => {
          p.waitNode("#ice-container input.ant-input[class*=ShareReceive][placeholder*='提取码']").then((e) => {
            yt.waitReactPropsToSet(e, ["reactProps", "reactEventHandlers"], {
              check(a) {
                return typeof a?.onChange == "function" || typeof a?.memoizedProps?.onChange == "function";
              },
              set(a) {
                if (!p.isVisible(e)) {
                  g.error("输入框不可见，不输入密码");
                  return;
                }
                ((e.value = t.accessCode),
                  (a?.onChange || a?.memoizedProps?.onChange)({ currentTarget: e, target: e }),
                  f.success("自动填充访问码"));
              },
            });
          });
        }));
    },
    la = function (t) {
      (g.success("自动填写链接", t),
        p.waitNode("#passcode").then((e) => {
          if (!p.isVisible(e)) {
            g.error("输入框不可见，不输入密码");
            return;
          }
          (f.success("自动填充访问码"),
            (e.value = t.accessCode),
            p.dispatchEvent(e, "input"),
            He("#main-content .form-group button.btn[type=button]").click());
        }));
    },
    ca = function (t) {
      ["115.com", "115cdn.com", "anxia.com"].includes(window.location.hostname) &&
        (g.success("自动填写链接", t),
        p.waitNode("input.text", 1e4).then((e) => {
          if (e) {
            if (!p.isVisible(e)) {
              g.error("输入框不可见，不输入密码");
              return;
            }
            (f.success("自动填充访问码"),
              (e.value = t.accessCode),
              p.dispatchEvent(e, "input"),
              He("#js-share_code div.form-decode div.submit a").click());
          }
        }));
    },
    ua = function (t) {
      window.location.hostname.endsWith(".link.yunpan.com") &&
        (g.success("自动填写链接", t),
        p.waitNode("#extract-bg-container input.pwd-input").then((e) => {
          if (!p.isVisible(e)) {
            g.error("输入框不可见，不输入密码");
            return;
          }
          (f.success("自动填充访问码"),
            (e.value = t.accessCode),
            p.dispatchEvent(e, "input"),
            He("#extract-bg-container input.submit-btn")?.click());
        }),
        p.waitNode("#extractForm input.pwd-input").then((e) => {
          if (!p.isVisible(e)) {
            g.error("输入框不可见，不输入密码");
            return;
          }
          (f.success("自动填充访问码"),
            (e.value = t.accessCode),
            p.dispatchEvent(e, "input"),
            He("#extractForm input.submit-btn")?.click());
        }));
    },
    P = {
      matchRange_text: { before: (t) => `${t}-text-match-range-before`, after: (t) => `${t}-text-match-range-after` },
      matchRange_html: { before: (t) => `${t}-html-match-range-before`, after: (t) => `${t}-html-match-range-after` },
      function: {
        enable: (t) => `${t}-enable`,
        checkLinkValidity: (t) => `${t}-check-link-valid`,
        checkLinkValidityHoverTip: (t) => `${t}-check-link-valid-hover-tip`,
        linkClickMode: (t) => `${t}-click-mode`,
      },
      linkClickMode_openBlank: {
        openBlankAutoFilleAccessCode: (t) => `${t}-open-blank-auto-fill-accesscode`,
        openBlankWithCopyAccessCode: (t) => `${t}-open-blank-with-copy-accesscode`,
      },
      schemeUri: {
        enable: (t) => `${t}-scheme-uri-enable`,
        isForwardLinearChain: (t) => `${t}-scheme-uri-forward-linear-chain`,
        isForwardBlankLink: (t) => `${t}-scheme-uri-forward-blank-link`,
        uri: (t) => `${t}-scheme-uri-uri`,
      },
    },
    Be = {
      features: {
        customAccessCodeEnable: (t) => `${t}-custom-accesscode-enable`,
        customAccessCode: (t) => `${t}-custom-accesscode`,
      },
    },
    J = {
      matchRange_text: {
        before(t, e) {
          ((t = P.matchRange_text.before(t)), (e = j.getDefaultValue(t) ?? 20));
          const a = V(t, e);
          return parseInt(a.value.toString());
        },
        after(t, e) {
          ((t = P.matchRange_text.after(t)), (e = j.getDefaultValue(t) ?? 10));
          const a = V(t, e);
          return parseInt(a.value.toString());
        },
      },
      matchRange_html: {
        before(t, e) {
          ((t = P.matchRange_html.before(t)), (e = j.getDefaultValue(t) ?? 100));
          const a = V(t, e);
          return parseInt(a.value.toString());
        },
        after(t, e) {
          ((t = P.matchRange_html.after(t)), (e = j.getDefaultValue(t) ?? 15));
          const a = V(t, e);
          return parseInt(a.value.toString());
        },
      },
      function: {
        enable(t, e) {
          return ((t = P.function.enable(t)), (e = j.getDefaultValue(t) ?? true), !!V(t, e).value);
        },
        linkClickMode(t, e) {
          return ((t = P.function.linkClickMode(t)), (e = j.getDefaultValue(t) ?? "copy"), V(t, e).value);
        },
        checkLinkValidity(t, e) {
          return ((t = P.function.checkLinkValidity(t)), (e = j.getDefaultValue(t) ?? false), !!V(t, e).value);
        },
        checkLinlValidityHoverTip(t, e) {
          return ((t = P.function.checkLinkValidityHoverTip(t)), (e = j.getDefaultValue(t) ?? true), !!V(t, e).value);
        },
      },
      linkClickMode_openBlank: {
        openBlankAutoFilleAccessCode(t, e) {
          return (
            (t = P.linkClickMode_openBlank.openBlankAutoFilleAccessCode(t)),
            (e = j.getDefaultValue(t) ?? true),
            !!V(t, e).value
          );
        },
        openBlankWithCopyAccessCode(t, e) {
          return (
            (t = P.linkClickMode_openBlank.openBlankWithCopyAccessCode(t)),
            (e = j.getDefaultValue(t) ?? false),
            !!V(t, e).value
          );
        },
      },
      schemeUri: {
        enable(t, e) {
          return ((t = P.schemeUri.enable(t)), (e = j.getDefaultValue(t) ?? false), !!V(t, e).value);
        },
        isForwardLinearChain(t, e) {
          return ((t = P.schemeUri.isForwardLinearChain(t)), (e = j.getDefaultValue(t) ?? false), !!V(t, e).value);
        },
        isForwardBlankLink(t, e) {
          return ((t = P.schemeUri.isForwardBlankLink(t)), (e = j.getDefaultValue(t) ?? false), !!V(t, e).value);
        },
        uri(t, e) {
          return ((t = P.schemeUri.uri(t)), (e = j.getDefaultValue(t) ?? ""), V(t, e).value);
        },
      },
    },
    Ge = {
      key: "tempNetDiskInfo",
      $data: {
        netDiskInfo: null,
        get enable() {
          return y.features.autoFillAccessCode.value;
        },
      },
      init() {
        if (!this.$data.enable) return;
        this.$data.netDiskInfo = this.getValue();
        let t = false;
        for (let e = 0; e < this.$data.netDiskInfo.length; e++) {
          const a = this.$data.netDiskInfo[e];
          if (!J.linkClickMode_openBlank.openBlankAutoFilleAccessCode(a.ruleKeyName)) continue;
          let r = a.accessCode;
          if (r == null || (typeof r == "string" && r.trim() === "")) continue;
          let s = a.shareCode;
          if (
            (a.ruleKeyName === "baidu" && s.startsWith("1") && (s = s.slice(1, s.length)),
            window.location.href.includes(s))
          ) {
            let l = Ge.netDisk[a.ruleKeyName];
            (typeof l == "function"
              ? (g.success("成功匹配到对应的自动填充访问码的网盘信息：", a), l(a))
              : g.warn("自动填充访问码失败：" + a.ruleKeyName + "，原因：该网盘未适配"),
              (t = true));
            break;
          }
        }
        t || g.error("未触发自动填充访问码，原因：未找到对应的网盘信息：👇", this.$data.netDiskInfo);
      },
      netDisk: {
        baidu: Qt,
        lanzou: ea,
        tianyiyun: ta,
        hecaiyun: aa,
        aliyun: na,
        wenshushu: () => {},
        nainiu: () => {},
        _123pan: ra,
        weiyun: ia,
        xunlei: sa,
        _115pan: ca,
        chengtong: la,
        kuake: oa,
        jianguoyun: () => {},
        onedrive: () => {},
        "360yunpan": ua,
      },
      setValue(t) {
        pe(this.key, t);
      },
      addValue(t) {
        let e = t.accessCode;
        if (e == null || (typeof e == "string" && e.trim() === "")) return;
        let a = this.getValue();
        ((a = a.filter((n) => !(n.ruleKeyName === t.ruleKeyName && n.shareCode === t.shareCode))),
          a.push(t),
          this.setValue(a));
      },
      getValue() {
        let t = ie(this.key, []);
        return (
          Array.isArray(t) || (t = [t]),
          (t = t.filter((e) => Date.now() - e.time < 1440 * 60 * 1e3)),
          this.setValue(t),
          t
        );
      },
    },
    da = function () {},
    tt = "(123pan|123865|123684|123652|123912).(com|cn)",
    Et = {
      rule: [
        {
          link_innerText: `${tt}/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
          link_innerHTML: `${tt}/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
          shareCode: new RegExp(`${tt}/s/([a-zA-Z0-9_-]{8,14})`, "gi"),
          shareCodeNeedRemoveStr: new RegExp(`${tt}/s/`, "gi"),
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "123pan.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://123pan.com/s/{#shareCode#}",
          copyUrl: `https://123pan.com/s/{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "123盘",
        key: "_123pan",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: {
              openBlank: { default: true },
              parseFile: { enable: true },
              "parseFile-closePopup": { enable: true },
            },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardLinearChain: true, isForwardBlankLink: true, uri: "" },
        },
      },
    },
    Lt = {
      KEY: "_123pan_User_Authorization",
      set(t) {
        pe(this.KEY, t);
      },
      get() {
        return ie(this.KEY);
      },
    },
    pa = function () {
      if (window.location.hostname !== "www.123pan.com" || J.function.linkClickMode(Et.setting.key) !== "parseFile")
        return;
      let t = me.localStorage.getItem("authorToken");
      p.isNull(t) ||
        ((t = t.replace(/^\"/, "").replace(/\"$/, "")),
        g.success("获取123网盘已登录用户的authorToken值👇"),
        g.success(t),
        Lt.set(t));
    },
    xt = {
      init() {
        Object.keys(xt.netDisk).forEach((t) => {
          this.netDisk[t]();
        });
      },
      netDisk: { _123pan: pa, lanzouyx: da },
    },
    re = {
      getDefaultLinkClickMode() {
        return {
          copy: { default: false, enable: true, text: "复制到剪贴板" },
          "copy-closePopup": { default: false, enable: true, text: "复制到剪贴板 & 关闭弹窗" },
          openBlank: { default: false, enable: true, text: "新标签页打开" },
          "openBlank-closePopup": { default: false, enable: true, text: "新标签页打开 & 关闭弹窗" },
          parseFile: { default: false, enable: false, text: "文件解析" },
          "parseFile-closePopup": { default: false, enable: false, text: "文件解析 & 关闭弹窗" },
          own: { default: false, enable: false, text: "自定义动作" },
        };
      },
      replaceParam(t, e = {}) {
        return (
          typeof t != "string" ||
            Object.keys(e).forEach((a) => {
              let n = e[a];
              if (p.isNotNull(n)) {
                try {
                  t = t.replaceAll(`{#encodeURI-${a}#}`, encodeURI(n));
                } catch {
                  g.error("encodeURI-替换的文本失败", [n]);
                }
                try {
                  t = t.replaceAll(`{#encodeURIComponent-${a}#}`, encodeURIComponent(n));
                } catch {
                  g.error("encodeURIComponent-替换的文本失败", [n]);
                }
                try {
                  t = t.replaceAll(`{#decodeURI-${a}#}`, decodeURI(n));
                } catch {
                  g.error("decodeURI-替换的文本失败", [n]);
                }
                try {
                  t = t.replaceAll(`{#decodeURIComponent-${a}#}`, decodeURIComponent(n));
                } catch {
                  g.error("encodeURIComponent-替换的文本失败", [n]);
                }
                t = t.replaceAll(`{#${a}#}`, n);
              }
            }),
          t
        );
      },
      replaceChinese(t) {
        return t.replace(/[\u4e00-\u9fa5]/g, "");
      },
      getDecodeComponentUrl(t = window.location.href) {
        try {
          t = decodeURIComponent(t);
        } catch {}
        return t;
      },
    },
    q = {
      protocol: "jumpwsv",
      pathname: "go",
      parseDataToSchemeUri(t, e) {
        if (!this.isEnableForward(t)) return e;
        let n = J.schemeUri.uri(t);
        return (
          p.isNull(n) && (n = this.getSchemeUri(this.get1DMSchemeUriOption(e))),
          n.startsWith(this.protocol) && ((e = e.replace(/&/g, "{-and-}")), (e = e.replace(/#/g, "{-number-}"))),
          (n = re.replaceParam(n, { intentData: e })),
          n
        );
      },
      isEnableForward(t) {
        return J.schemeUri.enable(t);
      },
      isForwardDownloadLink(t) {
        return this.isEnableForward(t) && J.schemeUri.isForwardLinearChain(t);
      },
      isForwardBlankLink(t) {
        return this.isEnableForward(t) && J.schemeUri.isForwardBlankLink(t);
      },
      getSchemeUri(t) {
        return `${this.protocol}://${this.pathname}?${p.toSearchParamsStr(t)}`;
      },
      get1DMSchemeUriOption(t = "") {
        return {
          package: "idm.internet.download.manager.plus",
          activity: "idm.internet.download.manager.UrlHandlerDownloader",
          intentAction: "android.intent.action.VIEW",
          intentData: t,
          intentExtra: "",
        };
      },
    };
  class be {
    ruleIndex = 0;
    shareCode = "";
    accessCode = "";
    init(e) {
      ((this.ruleIndex = e.ruleIndex), (this.shareCode = e.shareCode), (this.accessCode = e.accessCode));
    }
  }
  class ha extends be {
    panelList = [];
    Authorization = "";
    code = {
      5113: "您今日下载流量已超出10GB限制，购买VIP会员即可体验无限流量下载",
      5103: "分享码错误或者分享地址错误",
      5104: "分享已过期",
      "-1000": "获取出错",
      "-2000": "请求异常",
      "-3000": "请求意外中止",
      "-4000": "请求超时",
      104: "文件已失效",
    };
    Headers = {
      "user-agent": "123pan/v2.4.0(Android_7.1.2;Xiaomi)",
      platform: "android",
      "app-version": "61",
      "x-app-version": "2.4.0",
    };
    async init(e) {
      super.init(e);
      const a = this;
      let { ruleIndex: n, shareCode: r, accessCode: s } = e;
      if (((this.panelList = []), (this.Authorization = Lt.get()), !(await this.checkLinkValidity()))) return;
      let l = await this.getFiles();
      if (l)
        if (l.length === 1 && l[0].Type == 0) {
          let o = l[0];
          if (o.Status == 104) {
            f.error("文件已失效");
            return;
          }
          let c = o.DownloadUrl,
            u = "";
          if (c === "") {
            let m = await a.getFileDownloadInfo(o.Etag, o.FileId, o.S3KeyFlag, a.shareCode, o.Size);
            m && m.code === 0
              ? ((c = m.data.DownloadURL),
                q.isForwardDownloadLink("_123pan") && (c = q.parseDataToSchemeUri("_123pan", c)),
                (u = String(p.formatByteToSize(o.Size))))
              : m && m.code === 401
                ? ((c = "javascript:;"), (u = "请登录后下载"))
                : ((c = "javascript:;"), (u = "获取下载链接失败"));
          } else
            (q.isForwardDownloadLink("_123pan") && (c = q.parseDataToSchemeUri("_123pan", c)),
              (u = p.formatByteToSize(o.Size).toString()));
          let d = new Date(o.CreateAt).getTime(),
            h = new Date(o.UpdateAt).getTime();
          ((d = p.formatTime(d)),
            (h = p.formatTime(h)),
            C.$inst.linearChainDialogView.oneFile({
              title: "123盘单文件直链",
              fileName: o.FileName,
              fileSize: u,
              downloadUrl: c,
              fileUploadTime: d,
              fileLatestTime: h,
            }));
        } else {
          f.info("正在递归文件");
          let o = f.loading("正在解析多文件中，请稍后..."),
            c = a.getFolderInfo(l, 0);
          (o.close(), g.info("递归完毕"), C.$inst.linearChainDialogView.moreFile("123盘文件解析", c));
        }
    }
    async checkLinkValidity() {
      const e = this;
      f.info("正在校验链接有效性");
      let a = `https://www.123pan.com/s/${e.shareCode}`,
        n = await E.get({ url: a, headers: { "User-Agent": p.getRandomPCUA(), Referer: "https://www.123pan.com" } });
      if ((g.info(n), !n.status)) return false;
      let s = n.data.responseText.match(/window.g_initialProps[\s]*=[\s]*\{(.+?)\};/s);
      if (s) {
        g.info(s);
        let i = p.toJSON(`{${s[s.length - 1]}}`);
        if ((g.info(i), i.res.code !== 0)) return (f.error(i.res.message), false);
        if (i.res.data.HasPwd && (e.accessCode == null || e.accessCode === ""))
          (f.error("密码缺失!"),
            C.$inst.newAccessCodeView("密码缺失", "_123pan", e.ruleIndex, e.shareCode, e.accessCode, (o) => {
              e.init({ ruleIndex: e.ruleIndex, shareCode: e.shareCode, accessCode: o.accessCode });
            }));
        else return true;
      } else f.error("校验链接-获取初始化内容失败");
    }
    async getFiles(e = 0) {
      const a = this,
        n = {
          limit: 100,
          next: 1,
          orderBy: "share_id",
          orderDirection: "desc",
          shareKey: a.shareCode,
          SharePwd: a.accessCode,
          ParentFileId: e,
          Page: 1,
        };
      let r = `https://www.123pan.com/b/api/share/get?${p.toSearchParamsStr(n)}`,
        s = await E.get({
          url: r,
          headers: { Accept: "*/*", Referer: `https://www.123pan.com/s/${a.shareCode}`, ...a.Headers },
        });
      if ((g.info(s), !s.status)) return;
      let i = s.data,
        l = p.toJSON(i.responseText);
      if (l.code === 0) return l.data.InfoList;
      l.code === 5103
        ? C.$inst.newAccessCodeView(void 0, "_123pan", a.ruleIndex, a.shareCode, a.accessCode, (o) => {
            a.init({ ruleIndex: a.ruleIndex, shareCode: a.shareCode, accessCode: o.accessCode });
          })
        : a.code[l.code]
          ? f.error(a.code[l.code])
          : "message" in l
            ? f.error(l.message)
            : f.error("123盘：未知的JSON格式");
    }
    async getFilesByRec(e) {
      const a = this;
      let n = await E.get({
        url: `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${a.shareCode}&SharePwd=${a.accessCode}&ParentFileId=${e}&Page=1`,
        headers: { Accept: "*/*", Referer: `https://www.123pan.com/s/${a.shareCode}`, ...a.Headers },
      });
      if (!n.status) return;
      let r = n.data;
      g.info(r);
      let s = p.toJSON(r.responseText);
      if (s.code == 0) return s.data.InfoList;
    }
    getFolderInfo(e, a) {
      const n = this;
      let r = [],
        s = [],
        i = [];
      return (
        e.forEach((l) => {
          l.Type
            ? s.push({
                fileName: l.FileName,
                fileSize: 0,
                fileType: "",
                createTime: new Date(l.CreateAt).getTime(),
                latestTime: new Date(l.UpdateAt).getTime(),
                isFolder: true,
                index: a,
                async clickEvent() {
                  let o = await n.getFilesByRec(l.FileId.toString());
                  return o ? n.getFolderInfo(o, a + 1) : [];
                },
              })
            : i.push({
                fileName: l.FileName,
                fileSize: l.Size,
                fileType: "",
                createTime: new Date(l.CreateAt).getTime(),
                latestTime: new Date(l.UpdateAt).getTime(),
                isFolder: false,
                index: a,
                async clickEvent() {
                  if (l.Status == 104) f.error("文件已失效");
                  else if (l.DownloadUrl) {
                    let o = l.DownloadUrl;
                    return (
                      q.isForwardDownloadLink("_123pan") && (o = q.parseDataToSchemeUri("_123pan", o)),
                      { url: o, autoDownload: true, mode: "aBlank" }
                    );
                  } else {
                    let o = await n.getFileDownloadInfo(l.Etag, l.FileId, l.S3KeyFlag, n.shareCode, l.Size);
                    if (o && o.code === 0) return { url: o.data.DownloadURL, autoDownload: true, mode: "aBlank" };
                    o && o.code === 401 ? f.error("请登录后下载") : f.error(o?.message || "获取下载链接失败");
                  }
                },
              });
        }),
        s.sort((l, o) => l.fileName.localeCompare(o.fileName)),
        i.sort((l, o) => l.fileName.localeCompare(o.fileName)),
        (r = r.concat(s)),
        (r = r.concat(i)),
        r
      );
    }
    async getFileDownloadInfo(e, a, n, r, s) {
      const i = this;
      let l = i.getFileDownloadAuth(),
        o = {
          "Content-Type": "application/json;charset=UTF-8",
          Host: "www.123pan.com",
          Accept: "*/*",
          Referer: "https://www.123pan.com/s/" + r,
          Origin: "https://www.123pan.com",
          ...i.Headers,
        };
      (i.Authorization && Reflect.set(o, "Authorization", "Bearer " + i.Authorization),
        g.success("获取下载链接加密参数：" + l));
      let c = await E.post(`https://www.123pan.com/a/api/share/download/info?${l[0]}=${l[1]}`, {
        data: JSON.stringify({ Etag: e, FileID: a, S3keyFlag: n, ShareKey: r, Size: s }),
        responseType: "json",
        headers: o,
      });
      if (!c.status) return;
      let u = c.data,
        d = p.toJSON(u.responseText);
      return (
        g.info(d),
        d.code == 0
          ? ((d.data.DownloadURL = i.decodeDownloadUrl(d.data.DownloadURL)), d)
          : { code: d.code, message: d.message }
      );
    }
    getFileDownloadAuth() {
      function e(r) {
        var s,
          i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 8;
        if (arguments.length !== 0) {
          typeof r == "object" ? (s = r) : (("" + r).length === 10 && (r = 1e3 * parseInt(r)), (s = new Date(r)));
          var l = r + 6e4 * new Date(r).getTimezoneOffset(),
            o = l + 36e5 * i;
          return (
            (s = new Date(o)),
            {
              y: s.getFullYear(),
              m: s.getMonth() + 1 < 10 ? "0" + (s.getMonth() + 1) : s.getMonth() + 1,
              d: s.getDate() < 10 ? "0" + s.getDate() : s.getDate(),
              h: s.getHours() < 10 ? "0" + s.getHours() : s.getHours(),
              f: s.getMinutes() < 10 ? "0" + s.getMinutes() : s.getMinutes(),
            }
          );
        }
      }
      function a(r) {
        for (
          var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10,
            i = function () {
              for (var d, h = [], m = 0; m < 256; m++) {
                d = m;
                for (var b = 0; b < 8; b++) d = 1 & d ? 3988292384 ^ (d >>> 1) : d >>> 1;
                h[m] = d;
              }
              return h;
            },
            l = i(),
            o = r,
            c = -1,
            u = 0;
          u < o.length;
          u++
        )
          c = (c >>> 8) ^ l[255 & (c ^ o.charCodeAt(u))];
        return ((c = (-1 ^ c) >>> 0), c.toString(s));
      }
      function n(r) {
        var s = "web",
          i = 3,
          l = Math.round((new Date().getTime() + 60 * new Date().getTimezoneOffset() * 1e3 + 288e5) / 1e3).toString(),
          o = "a,d,e,f,g,h,l,m,y,i,j,n,o,p,k,q,r,s,t,u,b,c,v,w,s,z",
          c = Math.round(1e7 * Math.random()),
          u,
          d,
          h,
          m,
          b,
          k,
          x,
          v,
          T;
        for (var _ in ((u = o.split(",")),
        (d = e(l)),
        (h = d.y),
        (m = d.m),
        (b = d.d),
        (k = d.h),
        (x = d.f),
        (v = [h, m, b, k, x].join("")),
        (T = []),
        v))
          T.push(u[Number(v[_])]);
        var D, S;
        return (
          (D = a(T.join(""))),
          (S = a("".concat(l, "|").concat(c, "|").concat(r, "|").concat(s, "|").concat(i, "|").concat(D))),
          [D, "".concat(l, "-").concat(c, "-").concat(S)]
        );
      }
      return n("/a/api/share/download/info");
    }
    decodeDownloadUrl(e) {
      return e === "" ? "" : e;
    }
  }
  class fa extends be {
    X_Share_Token_Data = { expire_time: "2000-01-01T00:00:00.000Z", expires_in: 7200, share_token: "" };
    X_Device_Id = null;
    X_Canary = "client=web,app=share,version=v2.3.1";
    async init(e) {
      super.init(e);
      const a = this;
      let { ruleIndex: n, shareCode: r, accessCode: s } = e;
      if (
        ((a.X_Device_Id = a.get_X_Device_Id()),
        g.info("生成X_Device_Id：" + a.X_Device_Id),
        globalThis.location.hostname !== "www.aliyundrive.com" && globalThis.location.hostname !== "www.alipan.com")
      ) {
        let c = X.getBlankUrl({ ruleKeyName: "aliyun", ruleIndex: n, shareCode: r, accessCode: s }),
          u = f.error(`请在阿里云盘页面解析，<a href="${c}">点我前往</a>`, { timeout: 1e4, isHTML: true });
        w.on(u.$Qmsg.querySelector("a[href]"), "click", void 0, (d) => {
          (p.preventEvent(d), Ce.openBlankUrl(c, "aliyun", a.ruleIndex, a.shareCode, a.accessCode));
        });
        return;
      }
      let i = await this.list_by_share(r, "root");
      if (!i) return;
      f.info("正在解析链接");
      let l = f.loading("正在解析多文件中，请稍后..."),
        o = a.getFolderInfo(i, 0);
      (l.close(), g.info("解析完毕"), C.$inst.linearChainDialogView.moreFile("阿里云盘文件解析", o));
    }
    getFolderInfo(e, a = 0) {
      const n = this;
      let r = [],
        s = [],
        i = [];
      return (
        e.forEach((l) => {
          l.type !== "folder"
            ? i.push({
                fileName: l.name,
                fileSize: l.size,
                fileType: l.file_extension,
                createTime: new Date(l.created_at).getTime(),
                latestTime: new Date(l.updated_at).getTime(),
                isFolder: false,
                index: a,
                async clickEvent() {
                  let o = await n.get_share_link_download_url(l.share_id, l.file_id);
                  if (!o) return;
                  let c = o;
                  return (
                    q.isForwardDownloadLink("aliyun") && (c = q.parseDataToSchemeUri("aliyun", c)),
                    { autoDownload: true, mode: "aBlank", url: c }
                  );
                },
              })
            : s.push({
                fileName: l.name,
                fileSize: 0,
                fileType: "",
                createTime: l.created_at,
                latestTime: l.updated_at,
                isFolder: true,
                index: a,
                async clickEvent() {
                  let o = await n.list_by_share(l.share_id, l.file_id);
                  return o ? n.getFolderInfo(o, a + 1) : [];
                },
              });
        }),
        s.sort((l, o) => l.fileName.localeCompare(o.fileName)),
        i.sort((l, o) => l.fileName.localeCompare(o.fileName)),
        (r = r.concat(s)),
        (r = r.concat(i)),
        g.info("getFilesInfoByRec", r),
        r
      );
    }
    async list_by_share(e, a, n = "name", r = "DESC") {
      const s = this;
      let i = await E.post("https://api.aliyundrive.com/adrive/v2/file/list_by_share", {
        data: JSON.stringify({
          share_id: e,
          parent_file_id: a,
          limit: 20,
          image_thumbnail_process: "image/resize,w_256/format,jpeg",
          image_url_process: "image/resize,w_1920/format,jpeg/interlace,1",
          video_thumbnail_process: "video/snapshot,t_1000,f_jpg,ar_auto,w_256",
          order_by: n,
          order_direction: r,
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Origin: "https://www.aliyundrive.com",
          Referer: "https://www.aliyundrive.com/",
          "X-Canary": s.X_Canary,
          "X-Device-Id": s.X_Device_Id,
          "X-Share-Token": await s.get_X_Share_Token(s.shareCode, s.accessCode),
          "User-Agent": p.getRandomPCUA(),
        },
        allowInterceptConfig: false,
      });
      if (!i.status) {
        s.handle_request_error(i);
        return;
      }
      let l = p.toJSON(i.data.responseText);
      return (g.info("列出文件列表：", l), l.items);
    }
    async get_share_link_download_url(e, a) {
      const n = this;
      let r = await E.post("https://api.aliyundrive.com/v2/file/get_share_link_download_url", {
        data: JSON.stringify({ expire_sec: 600, file_id: a, share_id: e }),
        headers: {
          Accept: "application/json, text/plain, */*",
          Origin: "https://www.aliyundrive.com",
          Referer: "https://www.aliyundrive.com/",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + n.getAuthorization(),
          "X-Share-Token": await n.get_X_Share_Token(n.shareCode, n.accessCode),
          "User-Agent": p.getRandomPCUA(),
        },
        responseType: "arraybuffer",
        allowInterceptConfig: false,
      });
      if (!r.status) {
        n.handle_request_error(r);
        return;
      }
      let s = p.toJSON(r.data.responseText);
      return (g.info("获取文件的下载链接：", s), s.download_url);
    }
    handle_request_error(e) {
      g.error(e);
      let a = p.toJSON(e.data.responseText);
      a.message == "" ? f.error(e.msg) : f.error(a.message);
    }
    getAuthorization() {
      let e = me.localStorage.getItem("token");
      if (p.isNotNull(e) && e != null) {
        let n = p.toJSON(e).access_token;
        return (g.success("获取阿里云盘的access_token：", n), n);
      } else (g.error("获取access_token失败，请先登录账号！"), f.error("获取access_token失败，请先登录账号！"));
    }
    async get_X_Share_Token(e, a) {
      const n = this;
      if (new Date() < new Date(n.X_Share_Token_Data.expire_time)) return n.X_Share_Token_Data.share_token;
      let r = await E.post("https://api.aliyundrive.com/v2/share_link/get_share_token", {
        data: JSON.stringify({ share_id: e, share_pwd: a }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Origin: "https://www.aliyundrive.com",
          Referer: "https://www.aliyundrive.com/",
          "X-Canary": n.X_Canary,
          "X-Device-Id": n.X_Device_Id,
          "User-Agent": p.getRandomPCUA(),
        },
        allowInterceptConfig: false,
      });
      if (!r.status) {
        n.handle_request_error(r);
        return;
      }
      let s = p.toJSON(r.data.responseText);
      return (
        (n.X_Share_Token_Data = s),
        g.info("获取share_token：", n.X_Share_Token_Data),
        n.X_Share_Token_Data.share_token
      );
    }
    get_X_Device_Id() {
      for (
        var e =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
          a = [],
          n = 0;
        n < 256;
        ++n
      )
        a.push((n + 256).toString(16).substr(1));
      function r() {
        return crypto.getRandomValues(new Uint8Array(16));
      }
      var s = function (l) {
          var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
            c = (
              a[l[o + 0]] +
              a[l[o + 1]] +
              a[l[o + 2]] +
              a[l[o + 3]] +
              "-" +
              a[l[o + 4]] +
              a[l[o + 5]] +
              "-" +
              a[l[o + 6]] +
              a[l[o + 7]] +
              "-" +
              a[l[o + 8]] +
              a[l[o + 9]] +
              "-" +
              a[l[o + 10]] +
              a[l[o + 11]] +
              a[l[o + 12]] +
              a[l[o + 13]] +
              a[l[o + 14]] +
              a[l[o + 15]]
            ).toLowerCase();
          if (
            !(function (u) {
              return typeof u == "string" && e.test(u);
            })(c)
          )
            throw TypeError("Stringified UUID is invalid");
          return c;
        },
        i = function (l, o, c) {
          var u = (l = l || {}).random || (l.rng || r)();
          return ((u[6] = (15 & u[6]) | 64), (u[8] = (63 & u[8]) | 128), s(u));
        };
      return i();
    }
  }
  class ga extends be {
    async init(e) {
      super.init(e);
      let { ruleIndex: a, shareCode: n, accessCode: r } = e,
        s = ie("baidu-baiduwp-php-url"),
        i = ie("baidu-baiduwp-php-post-form"),
        l = ie("baidu-baiduwp-php-copy-url");
      if (!s) {
        f.error("请先在设置中配置百度网盘-网址");
        return;
      }
      if (!i) {
        f.error("请先在设置中配置百度网盘-表单参数");
        return;
      }
      i = re.replaceParam(i, { shareCode: n, accessCode: r });
      let o = document.createElement("form"),
        c = {};
      const u = new URLSearchParams(i);
      ((o.action = s),
        (o.method = "post"),
        (o.style.display = "none"),
        (o.target = "_blank"),
        u.forEach((d, h) => {
          const m = document.createElement("textarea");
          ((m.name = h), (m.value = d), o.appendChild(m), (c[h] = d));
        }),
        g.info("表单数据", c),
        document.body.appendChild(o),
        g.info("访问网址", s),
        l
          ? (Ce.copy("baidu", a, n, r, "1.5秒后跳转至解析站"),
            setTimeout(() => {
              o.submit();
            }, 1500))
          : o.submit());
    }
  }
  const Z = {
      alert(t, e) {
        const a = this.handleDetails(t, e);
        return O.alert(a);
      },
      confirm(t, e) {
        const a = this.handleDetails(t, e);
        return O.confirm(a);
      },
      loading(t) {
        return (
          typeof t.animation > "u" && (t.animation = y.pops.popsAnimation.value),
          typeof t.forbiddenScroll > "u" && (t.forbiddenScroll = C.$data.isForbiddenScrollByDefault),
          O.loading(t)
        );
      },
      prompt(t, e) {
        const a = this.handleDetails(t, e);
        return O.prompt(a);
      },
      folder(t, e) {
        const a = this.handleDetails(t, e);
        return (
          (a.sort = {
            name: y.popsFolder["pops-folder-sort-name"].value,
            isDesc: y.popsFolder["pops-folder-sort-is-desc"].value,
            callback(n, r, s, i) {
              ((y.popsFolder["pops-folder-sort-name"].value = s), (y.popsFolder["pops-folder-sort-is-desc"].value = i));
            },
          }),
          O.folder(a)
        );
      },
      panel(t, e) {
        const a = this.handleDetails(t, e);
        return O.panel(a);
      },
      rightClickMenu(t) {
        const e = this.handleDetails(t);
        return O.rightClickMenu(e);
      },
      handleDetails(t, e) {
        if (
          ((t = Object.assign(
            {
              animation: y.pops.popsAnimation.value,
              drag: y.pops.pcDrag.value,
              dragLimit: y.pops.pcDragLimit.value,
              forbiddenScroll: C.$data.isForbiddenScrollByDefault,
            },
            t
          )),
          e != null)
        )
          if (O.isPhone()) {
            let a = typeof e.Mobile.width == "function" ? e.Mobile.width() : e.Mobile.width,
              n = typeof e.Mobile.height == "function" ? e.Mobile.height() : e.Mobile.height;
            ((t.width = a), (t.height = n));
          } else {
            let a = typeof e.PC.width == "function" ? e.PC.width() : e.PC.width,
              n = typeof e.PC.height == "function" ? e.PC.height() : e.PC.height;
            ((t.width = a), (t.height = n));
          }
        if (
          (t.mask == null && (t.mask = {}),
          typeof t.mask.enable != "boolean" && (t.mask.enable = true),
          t.mask.clickEvent == null && (t.mask.clickEvent = {}),
          typeof t.mask.clickEvent.toClose != "boolean" &&
            (t.mask.clickEvent.toClose = y.pops.clickMaskToCloseDialog.value),
          y.pops.popsAcrylic.value)
        ) {
          let a = `
            .pops {
                --acrylic-opacity: 0.7;
                --acrylic-color: rgba(232, 232, 232, var(--acrylic-opacity));
                --acrylic-blur: 30px;
                --acrylic-saturate: 125%;
                --pops-bg-opacity: var(--acrylic-opacity);
            }
            .pops {
                backdrop-filter: blur(var(--acrylic-blur)) saturate(var(--acrylic-saturate)) !important;
                background-color: var(--acrylic-color) !important;
            }
            .pops[type-value=panel]{
                --aside-bg-color: rgba(221, 221, 221, var(--acrylic-opacity));
				--pops-bg-color: #f2f2f2;
				--title-bg-color: var(--acrylic-color);
				--aside-bg-color: var(--acrylic-color);
				--container-item-bg-color: var(--acrylic-color);
            }
            `;
          typeof t.style == "string" ? (t.style += a) : (t.style = a);
        }
        return (
          (t.zIndex = () => {
            let n = p.getMaxZIndex(10),
              r = O.config.InstanceUtils.getPopsMaxZIndex(10).zIndex;
            return p.getMaxValue(99999, n, r) + 10;
          }),
          t
        );
      },
    },
    St = `.pops[type-value="alert"] .pops-alert-title:has(+ .pops-alert-content .netdisk-url-box-all:empty) {\r
  border-bottom: none;\r
}\r
.netdisk-url-box {\r
  border-bottom: 1px solid #e4e6eb;\r
}\r
.netdisk-url-div {\r
  display: flex;\r
  align-items: center;\r
  width: 100%;\r
  padding: 5px 0px 5px 0px;\r
}\r
.netdisk-icon {\r
  display: contents;\r
}\r
.netdisk-icon .netdisk-icon-img {\r
  cursor: pointer;\r
  width: 28px;\r
  height: 28px;\r
  min-width: 28px;\r
  min-height: 28px;\r
  font-size: 0.8em;\r
  margin: 0px 10px;\r
}\r
.netdisk-url-div .netdisk-icon,\r
.netdisk-url-div .netdisk-status {\r
  flex: 0 0 auto;\r
}\r
.netdisk-url-div .netdisk-url {\r
  flex: 1;\r
}\r
.netdisk-icon .netdisk-icon-img {\r
  border-radius: 10px;\r
  box-shadow:\r
    0 0.3px 0.6px rgb(0 0 0 / 6%),\r
    0 0.7px 1.3px rgb(0 0 0 / 8%),\r
    0 1.3px 2.5px rgb(0 0 0 / 10%),\r
    0 2.2px 4.5px rgb(0 0 0 / 12%),\r
    0 4.2px 8.4px rgb(0 0 0 / 14%),\r
    0 10px 20px rgb(0 0 0 / 20%);\r
}\r
.netdisk-status[data-check-failed] {\r
  padding: 5px 5px;\r
}\r
.netdisk-url {\r
  padding: 5px 5px;\r
}\r
.netdisk-url a {\r
  color: #ff4848 !important;\r
  min-height: 28px;\r
  overflow-x: hidden;\r
  overflow-y: auto;\r
  font-size: 0.8em;\r
  border: none;\r
  display: flex;\r
  align-items: center;\r
  width: fit-content;\r
  height: 100%;\r
  padding: 0px;\r
  word-break: break-word;\r
  text-align: left;\r
}\r
.netdisk-status {\r
  display: none;\r
}\r
.netdisk-status[data-check-valid] {\r
  display: flex;\r
  align-items: center;\r
  width: 15px;\r
  height: 15px;\r
  color: #000000;\r
}\r
\r
.netdisk-status[data-check-valid="failed"] {\r
  color: red;\r
}\r
\r
.netdisk-status[data-check-valid="partial-violation"] {\r
  color: orange;\r
}\r
\r
.netdisk-status[data-check-valid="error"] {\r
  cursor: pointer;\r
}\r
\r
.netdisk-status[data-check-valid="success"] {\r
  color: green;\r
}\r
\r
.netdisk-status[data-check-valid="verify"] {\r
  color: #faad14;\r
}\r
\r
.netdisk-status[data-check-valid="loading"] svg {\r
  animation: rotating 2s linear infinite;\r
}\r
\r
.netdisk-url-box:has(.netdisk-status[data-check-valid="failed"]) {\r
  text-decoration: line-through;\r
}\r
\r
.whitesevPop-whitesevPopSetting :focus-visible {\r
  outline-offset: 0;\r
  outline: 0;\r
}\r
.netdisk-url a[isvisited="true"] {\r
  color: #8b8888 !important;\r
}\r
.netdisk-url a:active {\r
  box-shadow: 0 0 0 1px #616161 inset;\r
}\r
.netdisk-url a:focus-visible {\r
  outline: 0;\r
}\r
.whitesevPop-content p[pop] {\r
  text-indent: 0;\r
}\r
.whitesevPop-button[data-type="primary"] {\r
  border-color: #2d8cf0;\r
  background-color: #2d8cf0;\r
}\r
`,
    Ie = function (t, e) {
      return {
        KEY: t,
        default: e,
        get value() {
          return ie(t, e);
        },
        set value(a) {
          pe(t, a);
        },
      };
    },
    Rt = {
      generateViewData() {
        let t = [];
        return (
          C.$data.isMatchedNetDiskIconMap.forEach((e) => {
            N.$match.matchedInfo.get(e).forEach((n, r) => {
              t.push({ ruleKeyName: e, shareCode: r, netDiskDictData: n });
            });
          }),
          (t = ce.sortListByProperty(t, (e) => e.netDiskDictData.matchTime, false)),
          t
        );
      },
    },
    de = {
      $el: {
        get $urlBoxAll() {
          return C.$el.$linkView.$shadowRoot.querySelector(".netdisk-url-box-all");
        },
      },
      $inst: { dataPaging: null },
      $data: { dataPagingEnable: false },
      show() {
        const t = y.smallWindow["netdisk-ui-link-view-data-paging-enable"].value;
        C.$el.$linkView == null
          ? ((this.$data.dataPagingEnable = t), this.createLinkView(), Ye.init())
          : (C.$el.$linkView.show(),
            this.$data.dataPagingEnable !== t &&
              (t ? this.$inst.dataPaging.show() : this.$inst.dataPaging.hide(),
              this.refreshLinkView(),
              (this.$data.dataPagingEnable = t)));
      },
      createLinkView() {
        const t = {
            view: {
              "netdisl-small-window-shrink-status": Ie("netdisl-small-window-shrink-status", false),
              "netdisk-ui-small-window-position": Ie("netdisk-ui-small-window-position", null),
            },
          },
          e =
            '<div class="netdisk-url-search-wrapper"></div><div class="netdisk-url-box-all"></div><div class="netdisk-url-pagination-wrapper"></div>';
        let a = () => y.features["netdisk-behavior-mode"].value.toLowerCase().includes("suspension"),
          n = () => {
            a()
              ? ((oe.mode.current_suspension_smallwindow_mode.value = "suspension"),
                C.$el.$linkView.hide(),
                C.$inst.suspension.init())
              : (C.$el.$linkView.close(), (C.$el.$linkView = void 0));
          };
        const r = y.features["netdisk-behavior-mode"].value.toLowerCase().includes("smallwindow");
        if (r) {
          C.$el.$linkView = Z.alert(
            {
              title: { text: "网盘", position: "center" },
              content: { text: e, html: true },
              btn: {
                ok: { enable: false },
                close: {
                  callback() {
                    n();
                  },
                },
              },
              mask: { enable: false },
              animation: "",
              beforeAppendToPageCallBack(h, m) {
                let b = h.querySelector(".pops-header-control"),
                  k = h.querySelector(".pops-alert-title"),
                  x = h.querySelector(".pops-alert-content"),
                  v = w.createElement(
                    "button",
                    {
                      className: "pops-header-control",
                      innerHTML: `
                                <i class="pops-icon">
									<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
										<path fill="currentColor" d="M290.816 774.144h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m462.848-524.288h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m188.416 323.584c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z">
										</path>
									</svg>
                                </i>
                                `,
                    },
                    { type: "button", "data-type": "launch", "data-header": true }
                  ),
                  T = w.createElement(
                    "button",
                    {
                      className: "pops-header-control",
                      innerHTML: `
                                <i class="pops-icon">
									<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
										<path fill="currentColor" d="M618.496 425.984h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m-192.512 172.032h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m516.096-24.576c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z">
										</path>
									</svg>
                                </i>
                                `,
                    },
                    { type: "button", "data-type": "shrink", "data-header": true }
                  );
                (w.before(b, v),
                  w.before(b, T),
                  w.on(
                    v,
                    "click",
                    function () {
                      (w.addClass(v, "pops-hide-important"),
                        w.removeClass(T, "pops-hide-important"),
                        w.removeClass(k, "pops-no-border-important"),
                        w.removeClass(x, "pops-hide-important"),
                        (t.view["netdisl-small-window-shrink-status"].value = false));
                    },
                    { capture: true }
                  ),
                  w.on(
                    T,
                    "click",
                    function () {
                      (w.removeClass(v, "pops-hide-important"),
                        w.addClass(T, "pops-hide-important"),
                        w.addClass(k, "pops-no-border-important"),
                        w.addClass(x, "pops-hide-important"),
                        (t.view["netdisl-small-window-shrink-status"].value = true));
                    },
                    { capture: true }
                  ),
                  t.view["netdisl-small-window-shrink-status"].value ? T.click() : v.click());
              },
              dragMoveCallBack(h, m, b) {
                t.view["netdisk-ui-small-window-position"].value = { left: m, top: b };
              },
              class: "whitesevPop netdisk-link-view-small-window",
              style: `
                    ${St}

                    .pops {
                        --container-title-height: 35px;
                        --content-max-height: ${y.smallWindow["netdisk-ui-small-window-max-height"].value}px;
                        --netdisk-line-space: 8px;
                        --netdisk-icon-size: 24px;
                    }
                    .pops[type-value="alert"]{
                        transform: none;
                    }
                    .pops {
                        max-height: var(--content-max-height);
                    }
                    .pops[type-value=alert] .pops-alert-content{
                        max-height: calc(var(--content-max-height) - var(--container-title-height) - var(--container-bottom-btn-height));
                    }
                    .pops-header-controls button.pops-header-control[type][data-header]{
                        padding: 0px 5px;
                    }
                    .netdisk-url-div{
                        padding: 0px;
                    }
                    .netdisk-icon .netdisk-icon-img{
                        width: var(--netdisk-icon-size);
                        height: var(--netdisk-icon-size);
                        min-width: var(--netdisk-icon-size);
                        min-height: var(--netdisk-icon-size);
                        margin: 0px var(--netdisk-line-space);
                    }
                    .netdisk-status{
                        margin-right: var(--netdisk-line-space);
                    }
                    .netdisk-url{
                        padding: 2px 0px;
                    }
                    `,
            },
            C.$config.viewSizeConfig.mainViewSmallWindow
          );
          let u = t.view["netdisk-ui-small-window-position"].value,
            d = C.$el.$linkView.popsElement;
          if (u) {
            let h = w.width(d, true),
              m = w.height(d, true),
              b = w.width(window),
              k = w.height(window);
            const { transformLeft: x, transformTop: v } = w.getTransform(d);
            let T = b - h + x,
              _ = k - m + v,
              D = 0 + x,
              S = 0 + v;
            (u.top > _ ? (u.top = _) : u.top < S && (u.top = S),
              u.left > T ? (u.left = T) : u.left < D && (u.left = D),
              (d.style.transitionDuration = "0s"),
              (d.style.left = u.left + "px"),
              (d.style.top = u.top + "px"),
              setTimeout(() => {
                d.style.transitionDuration = "0s";
              }, 300));
          }
        } else
          C.$el.$linkView = Z.alert(
            {
              title: { text: "网盘", position: "center" },
              content: { text: e, html: true },
              btn: {
                ok: { enable: false },
                close: {
                  callback() {
                    n();
                  },
                },
              },
              mask: {
                clickCallBack() {
                  n();
                },
              },
              class: "whitesevPop netdisk-link-view-window",
              style: `
                    ${St}

                    .pops {
                        max-height: 60vh;
                    }
					@media screen and (max-width: 600px) {
						.pops {
                       		max-height: 50vh;
                    	}
					}
                    `,
            },
            C.$config.viewSizeConfig.mainView
          );
        const s = C.$el.$linkView.$shadowRoot.querySelector(".netdisk-url-pagination-wrapper"),
          i = Rt.generateViewData(),
          l = y.smallWindow["netdisk-ui-link-view-data-paging-show-data-count"].value;
        ((this.$inst.dataPaging = new It({
          data: i,
          pageShowDataMaxCount: l,
          pageMaxStep: r ? 2 : 4,
          currentPage: 1,
          pageChangeCallBack: async (u) => {
            Q.clearAllDelayCheckLinkValidity();
            const d = y.smallWindow["netdisk-ui-link-view-data-paging-enable"].value;
            await this.dataPagingChangeCallback({
              data: this.$inst.dataPaging.CONFIG.data,
              refreshView: true,
              page: d ? u : void 0,
              filter(h) {
                return true;
              },
            });
          },
        })),
          this.$inst.dataPaging.addCSS(C.$el.$linkView.$shadowRoot),
          this.$inst.dataPaging.append(s));
        const o = w.createElement("style", {
          type: "text/css",
          textContent: `
          .pops-content:has(.netdisk-url-pagination-wrapper){
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }
          .pops-content:has(.netdisk-url-pagination-wrapper) .netdisk-url-box-all{
            flex: 1;
            overflow: auto;
          }
          .pops-content .netdisk-url-pagination-wrapper{
            flex: 0;
            display: flex;
            justify-content: center;
            padding: 4px 0px;
          }
          .pops-content #data-paging-wrapper{

          }
          .pops-content #data-paging-wrapper a{

          }

          /* 小窗 */
          .netdisk-link-view-small-window #data-paging-wrapper{
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
          }
          .netdisk-link-view-small-window .pops-content .netdisk-url-pagination-wrapper{
            scale: 0.7;
            padding: 0px;
          }
        `,
        });
        (C.$el.$linkView.$shadowRoot.appendChild(o),
          y.smallWindow["netdisk-ui-link-view-data-paging-enable"].value || this.$inst.dataPaging.hide(),
          this.refreshLinkView());
        let c = y.smallWindow["netdisk-link-view-z-index"].value;
        c > 0 && w.css(C.$el.$linkView.popsElement, { "z-index": c });
      },
      refreshLinkView() {
        const t = this.$inst.dataPaging.PAGE_CONFIG.currentPage();
        this.$inst.dataPaging.CONFIG.pageChangeCallBack(t);
      },
      clearLinkView() {
        w.empty(this.$el.$urlBoxAll);
      },
      async dataPagingChangeCallback(t) {
        const { refreshView: e, page: a, isCheckValid: n } = t;
        let { data: r } = t,
          s = document.createDocumentFragment();
        const i = [];
        if (typeof a == "number") {
          let l = (a - 1) * 10;
          r = r.slice(l, l + 9);
        }
        for (const l of r) {
          const o = await t.filter?.(l);
          if (typeof o == "boolean" && !o) continue;
          const { ruleKeyName: c, netDiskDictData: u, shareCode: d } = l;
          let h = N.handleLinkShow({
            ruleKeyName: c,
            ruleIndex: u.ruleIndex,
            shareCode: d,
            accessCode: u.accessCode,
            matchText: u.matchText,
            showToast: false,
          });
          if (!h) continue;
          let m = this.createBoxItemInfo(C.$inst.icon.getIcon(c), c, u.ruleIndex, d, u.accessCode, h);
          (i.push({
            $urlBox: m.$urlBox,
            ruleKeyName: c,
            ruleIndex: u.ruleIndex,
            shareCode: d,
            accessCode: u.accessCode,
          }),
            s.appendChild(m.$urlBox));
        }
        (e && this.clearLinkView(), this.$el.$urlBoxAll.appendChild(s), (n ?? true) && Q.check(i));
      },
      addBoxItemView(t, e, a, n, r) {
        if ((C.$inst.historyMatch.changeMatchedData(t, e, a, n, r), !C.$el.$linkView)) return;
        g.info(t, e, a, n);
        let s = C.$inst.icon.getIcon(t),
          i = N.handleLinkShow({ ruleKeyName: t, ruleIndex: e, shareCode: a, accessCode: n, matchText: r });
        if (
          i &&
          (this.$inst.dataPaging.changeConfig({ data: Rt.generateViewData() }),
          this.$inst.dataPaging.refresh(this.$inst.dataPaging.CONFIG.data),
          this.$inst.dataPaging.PAGE_CONFIG.currentPage() === this.$inst.dataPaging.PAGE_CONFIG.maxPage ||
            !this.$data.dataPagingEnable)
        ) {
          let l = this.createBoxItemInfo(s, t, e, a, n, i);
          (this.$el.$urlBoxAll.appendChild(l.$urlBox),
            Q.check({ $urlBox: l.$urlBox, ruleKeyName: t, ruleIndex: e, shareCode: a, accessCode: n }));
        }
      },
      changeBoxItemView(t, e, a, n, r) {
        if ((C.$inst.historyMatch.changeMatchedData(t, e, a, n, r), !C.$el.$linkView)) return;
        let s = N.handleLinkShow({ ruleKeyName: t, ruleIndex: e, shareCode: a, accessCode: n, matchText: r });
        if (!s) return;
        let i = C.$el.$linkView.popsElement.querySelector(
          `.netdisk-url a[data-sharecode='${a}'][data-rule-index='${e}']`
        );
        i && (g.info("修改网盘链接视图"), g.info(i), i.setAttribute("data-accesscode", n), w.html(i, s));
      },
      createBoxAttrRuleInfo(t) {
        return {
          "data-rule-key": t.ruleKeyName,
          "data-rule-index": t.ruleIndex,
          "data-sharecode": t.shareCode,
          "data-accesscode": t.accessCode,
        };
      },
      parseBoxAttrRuleInfo(t) {
        let e = {
          ruleKeyName: t.getAttribute("data-rule-key"),
          ruleIndex: parseInt(t.getAttribute("data-rule-index")),
          shareCode: t.getAttribute("data-sharecode"),
          accessCode: t.getAttribute("data-accesscode"),
        };
        return (isNaN(e.ruleIndex) && (g.warn("元素上的 ruleIndex 的值是NaN，调整为默认值0", t), (e.ruleIndex = 0)), e);
      },
      handleBoxAttrRuleInfo(t, e) {
        let a = this.createBoxAttrRuleInfo(t);
        for (const n in a) {
          const r = a[n];
          Array.isArray(e)
            ? e.forEach((s) => {
                s.setAttribute(n, r.toString());
              })
            : e.setAttribute(n, r.toString());
        }
      },
      createBoxItemInfo(t, e, a, n, r, s) {
        let i = w.createElement("div", {
          className: "netdisk-url-box",
          innerHTML: `
			<div class="netdisk-url-div">
          <div class="netdisk-icon">
              <div class="netdisk-icon-img"></div>
          </div>
          <div class="netdisk-status"></div>
          <div class="netdisk-url">
              <a  class="netdisk-link" href="javascript:;" isvisited="false"></a>
          </div>
      </div>
			`,
        });
        const { $urlDiv: l, $icon: o, $iconImg: c, $checkValidStatus: u, $url: d, $link: h } = this.parseBoxItemInfo(i);
        return (
          (c.style.cssText = `background: url(${t}) no-repeat;background-size: 100%;`),
          w.html(h, s),
          this.handleBoxAttrRuleInfo({ ruleKeyName: e, ruleIndex: a, shareCode: n, accessCode: r }, [c, h]),
          N.$rule.rule.forEach((m) => {
            m.setting.key === e &&
              typeof m.afterRenderUrlBox == "function" &&
              m.afterRenderUrlBox({
                $viewBox: i,
                $urlDiv: l,
                $url: d,
                $link: h,
                ruleKeyName: e,
                ruleIndex: a,
                shareCode: n,
                accessCode: r,
              });
          }),
          { $urlBox: i, $urlDiv: l, $icon: o, $iconImg: c, $checkValidStatus: u, $url: d, $link: h }
        );
      },
      parseBoxItemInfo(t) {
        let e = t.matches(".netdisk-url-box") ? t : t.closest(".netdisk-url-box"),
          a = e.querySelector(".netdisk-url-div"),
          n = e.querySelector(".netdisk-icon"),
          r = e.querySelector(".netdisk-icon-img"),
          s = e.querySelector(".netdisk-status"),
          i = e.querySelector(".netdisk-url"),
          l = e.querySelector(".netdisk-link");
        return { $urlBox: e, $urlDiv: a, $icon: n, $iconImg: r, $checkValidStatus: s, $url: i, $link: l };
      },
    };
  class ma {
    option;
    constructor(e) {
      this.option = e;
    }
    showView() {
      let e = O.alert({
          title: { text: this.option.title, position: "center" },
          content: {
            text: `
                <div class="filter-container"></div>
                `,
          },
          btn: { ok: { text: "关闭", type: "default" } },
          drag: true,
          mask: { enable: true },
          width: window.innerWidth > 500 ? "350px" : "80vw",
          height: window.innerHeight > 500 ? "300px" : "70vh",
          style: `
            .filter-container{
                height: 100%;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .filter-container button{
                text-wrap: wrap;
                padding: 8px;
                height: auto;
                text-align: left;
            }
            `,
        }),
        a = e.$shadowRoot.querySelector(".filter-container"),
        n = document.createDocumentFragment();
      (this.option.filterOption.forEach((r) => {
        let s = w.createElement("button", { innerText: r.name }, { type: "button" }),
          i = async () => {
            ((await this.option.getAllRuleInfo()).forEach(async (o) => {
              (await r.filterCallBack(o.data)) ? w.show(o.$el, false) : w.hide(o.$el, false);
            }),
              typeof this.option.execFilterCallBack == "function" && (await this.option.execFilterCallBack()),
              e.close());
          };
        (w.on(s, "click", async (l) => {
          (p.preventEvent(l), !(typeof r.callback == "function" && !(await r.callback(l, i))) && (await i()));
        }),
          n.appendChild(s));
      }),
        a.appendChild(n));
    }
  }
  class wa {
    option;
    constructor(e) {
      this.option = e;
    }
    async showView() {
      let e = O.confirm({
          title: { text: this.option.title, position: "center" },
          content: {
            text: `
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,
            html: true,
          },
          btn: p.assign(
            {
              ok: {
                callback: async () => {
                  await s();
                },
              },
            },
            this.option.btn || {},
            true
          ),
          drag: true,
          mask: { enable: true },
          style: `
                ${O.config.cssText.panelCSS}
                
                .rule-form-container {
                    
                }
                .rule-form-container li{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 5px 20px;
                    gap: 10px;
                }
				.rule-form-ulist-dynamic{
					--button-margin-top: 0px;
					--button-margin-right: 0px;
					--button-margin-bottom: 0px;
					--button-margin-left: 0px;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					padding: 5px 0px 5px 20px;
				}
				.rule-form-ulist-dynamic__inner{
					width: 100%;
				}
				.rule-form-ulist-dynamic__inner-container{
					display: flex;
					align-items: center;
				}
				.dynamic-forms{
					width: 100%;
				}
                .pops-panel-item-left-main-text{
                    max-width: 150px;
                }
                .pops-panel-item-right-text{
                    padding-left: 30px;
                }
                .pops-panel-item-right-text,
                .pops-panel-item-right-main-text{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
				.pops-panel-item-left-desc-text{
					line-height: normal;
					margin-top: 6px;
					font-size: 0.8em;
					color: rgb(108, 108, 108);
				}

                ${this.option?.style ?? ""}
            `,
          width:
            typeof this.option.width == "function" ? this.option.width() : window.innerWidth > 500 ? "500px" : "88vw",
          height:
            typeof this.option.height == "function"
              ? this.option.height()
              : window.innerHeight > 500
                ? "500px"
                : "80vh",
        }),
        a = e.$shadowRoot.querySelector(".rule-form-container");
      e.$shadowRoot.querySelector("input[type=submit]");
      let n = e.$shadowRoot.querySelector(".rule-form-ulist"),
        r = await this.option.getView(await this.option.data());
      n.appendChild(r);
      const s = async () => {
        (await this.option.onsubmit(a, await this.option.data())).success &&
          (e.close(), await this.option.dialogCloseCallBack(true));
      };
    }
  }
  class Nt {
    option;
    constructor(e) {
      this.option = e;
    }
    async showView(e) {
      const a = this;
      let n = this.option.contentConfig;
      (n.forEach((r) => {
        ((r.forms = []),
          (r.headerTitle = r.headerTitle || r.title),
          r.subscribe?.enable &&
            (r.headerTitle =
              r.headerTitle +
              `
					<div class="subscribe-container">
						<button class="subscribe-btn" type="button" data-type="subscribe" data-has-icon="false" data-righticon="false">
							<span>${r.subscribe?.title || "订阅"}</span>
						</button>
					</div>`));
        let s = r.clickCallback;
        r.clickCallback = async (i, l, o) => {
          if ((typeof s == "function" && s(i, o, o), r.subscribe && r.subscribe.enable)) {
            let h = l.querySelector(".subscribe-btn");
            const m = r.subscribe;
            w.on(h, "click", async (b) => {
              (p.preventEvent(b), await m?.callback?.());
              let k = await this.enterDeepMenu(o, m?.headerTitle || m?.title || "订阅", () => {
                  this.updateRuleContaienrElement(r.ruleOption, m, o);
                }),
                x = k.$rightRuleContainer;
              this.createButtonControls(x, x, m, async () => {
                let T = O.prompt({
                    title: { text: "添加订阅", position: "center" },
                    content: { text: "", focus: true, placeholder: "输入URL" },
                    btn: {
                      cancel: { enable: false },
                      ok: {
                        enable: true,
                        text: "下一步",
                        async callback(S, A) {
                          let R = w.val(_).trim();
                          if (R === "") return;
                          g.info("订阅：" + R);
                          let M = f.loading("正在获取订阅信息...");
                          try {
                            let I = await m?.getSubscribeInfo(R);
                            if (I.data) {
                              S.close();
                              let L = I.data,
                                F = L.data.title || L.subscribeData.title || L.data.url,
                                W = O.alert({
                                  title: { text: "添加订阅", position: "center" },
                                  content: {
                                    text: `
																	<div class="subscribe-network-title">
																		<span>订阅链接名称：</span>
																		<input type="text" placeholder="输入订阅链接的名称">
																	</div>
																	<div class="subscribe-network-data-count"></div>
																	<div class="subscribe-network-home-url"></div>
																	<div class="subscribe-network-url"></div>
																	<div class="subscribe-network-version"></div>
																	<div class="subscribe-network-last-modified"></div>
																`,
                                    html: !0,
                                  },
                                  btn: {
                                    ok: {
                                      text: "添加",
                                      type: "subscribe",
                                      callback: async (Qe, ke) => {
                                        ((await m.addData(L)) || f.error("该订阅已存在", { consoleLogContent: !0 }),
                                          a.updateRuleContaienrElement(m, m, k.$section),
                                          Qe.close());
                                      },
                                    },
                                  },
                                  drag: !0,
                                  mask: { enable: !0 },
                                  width: K.setting.width,
                                  height: "auto",
                                  style: `
																.pops button[data-type="subscribe"]{
																	--button-color: #ffffff;
																	--button-bd-color: #67b279;
																	--button-bg-color: #67b279;
																}
																.pops button[data-type="subscribe"]:hover{
																	--button-color: #ffffff;
																	--button-bd-color:rgb(91, 159, 107);;
																	--button-bg-color:rgb(91, 159, 107);;
																}

																.pops-alert-content{
																	display: flex;
																	flex-direction: column;
																	gap: 4px;
																	padding: 20px;
																}
																.pops-alert-content a {
																	color: #3d3d3d;
																}
																.pops-alert-content > div{
																	display: flex;
																}
																.pops-alert-content > div > span:first-child{
																	white-space: nowrap;
																}
																.subscribe-network-title input{
																	width: 100%;
																	flex: 1 1 auto;
																	line-height: 1.3;
																	outline: none;
																	text-overflow: ellipsis;
																	border-radius: 8px;
																	border: 1px solid #e4e4e4;
																	background-color: #f6f6f6;
																	padding: 16px 16px 16px 16px;
																	font-size: 16px;
																}
																.subscribe-network-title input:focus{

																}
															`,
                                }),
                                ee = W.$shadowRoot.querySelector(".subscribe-network-title input"),
                                ae = W.$shadowRoot.querySelector(".subscribe-network-data-count"),
                                fe = W.$shadowRoot.querySelector(".subscribe-network-home-url"),
                                he = W.$shadowRoot.querySelector(".subscribe-network-url"),
                                Te = W.$shadowRoot.querySelector(".subscribe-network-version"),
                                Le = W.$shadowRoot.querySelector(".subscribe-network-last-modified");
                              (w.val(ee, F),
                                w.on(ee, ["input", "propertychange"], (Qe) => {
                                  let ke = w.val(ee);
                                  L.data.title = ke === "" ? void 0 : ke;
                                }),
                                w.html(
                                  ae,
                                  `
																<span>规则数量：</span>
																<span>${L.subscribeData.ruleData.length}</span>
															`
                                ),
                                typeof L.subscribeData.homePage == "string"
                                  ? w.html(
                                      fe,
                                      `
																<span>主页：</span>
																<a href="${L.subscribeData.homePage}" target="_blank">${L.subscribeData.homePage}</a>
															`
                                    )
                                  : fe.remove(),
                                w.html(
                                  he,
                                  `
																<span>URL：</span>
																<a href="${L.data.url}" target="_blank">${L.data.url}</a>
															`
                                ),
                                L.subscribeData.version != null
                                  ? w.html(
                                      Te,
                                      `
																	<span>版本：</span>
																	<span>${L.subscribeData.version}</span>
																`
                                    )
                                  : Te.remove(),
                                L.subscribeData.lastModified != null
                                  ? w.html(
                                      Le,
                                      `
																	<span>更新时间：</span>
																	<span>${p.formatTime(L.subscribeData.lastModified)}</span>
																`
                                    )
                                  : Le.remove());
                            } else f.error(I.msg, { consoleLogContent: !0 });
                          } catch (I) {
                            f.error(I.toString(), { consoleLogContent: true });
                          } finally {
                            M.close();
                          }
                        },
                      },
                    },
                    drag: true,
                    mask: { enable: true },
                    width: K.info.width,
                    height: "auto",
                  }),
                  _ = T.$shadowRoot.querySelector("input"),
                  D = T.$shadowRoot.querySelector(".pops-prompt-btn-ok ");
                (w.on(_, ["input", "propertychange"], (S) => {
                  w.val(_) === "" ? w.attr(D, "disabled", "true") : w.removeAttr(D, "disabled");
                }),
                  w.listenKeyboard(_, "keydown", (S, A, R, M) => {
                    S === "Enter" && R.length === 0 && (p.preventEvent(M), p.dispatchEvent(D, "click"));
                  }),
                  p.dispatchEvent(_, "input"));
              });
              let v = await m.data();
              await this.addRuleElement(m, m, k.$section, v);
            });
          }
          let c = this.createButtonControls(o, o, r.ruleOption, async () => {
              this.showEditView(r.ruleOption, void 0, false, await r.ruleOption.getAddData(), o);
            }),
            u = await r.ruleOption.data(),
            d = false;
          (await this.addRuleElement(r.ruleOption, void 0, o, u, (h, m) => {
            (typeof e == "function" ? e(h) : true) || ((d = true), w.hide(m, false));
          }),
            d && c.$ruleControlFilter && w.text(c.$ruleControlFilter, "取消过滤"));
        };
      }),
        O.panel({
          title: {
            text: typeof this.option.title == "function" ? this.option.title() : this.option.title,
            position: "center",
          },
          content: n,
          btn: {
            close: {
              enable: true,
              callback(r, s) {
                r.close();
              },
            },
          },
          drag: true,
          mask: { enable: true, clickEvent: { toClose: false } },
          class: this.option.className || "rule-panel-view",
          width: K.settingBig.width,
          height: K.settingBig.height,
          style: `
                ${this.option.style || ""}
                .pops button[data-type="subscribe"]{
                    --button-color: #ffffff;
                    --button-bd-color: #67b279;
                    --button-bg-color: #67b279;
                }
                .pops button[data-type="subscribe"]:hover{
                    --button-color: #ffffff;
                    --button-bd-color:rgb(91, 159, 107);;
                    --button-bg-color:rgb(91, 159, 107);;
                }
                section.pops-panel-container .pops-panel-container-header-ul li:has(.subscribe-btn){
                    justify-content: space-between !important;
                }
				section.pops-panel-container ul li.rule-controls{
					justify-content: flex-start;
					overflow-x: auto;
				}

				section.pops-panel-container ul:has(>.rule-view-container){
					overflow: hidden;
					display: flex;
					flex-direction: column;
					margin: var(--pops-panel-forms-container-item-margin-top-bottom) var(--pops-panel-forms-margin-left-right);
					gap: var(--pops-panel-forms-container-item-margin-top-bottom);
				}

				.rule-view-container{
					margin: 0;
					margin-top: 0;
					overflow: auto;
					background: #ffffff;
					border-radius: var(--pops-panel-forms-container-item-border-radius);
					padding: 5px 10px;
					position: relative;
					flex: 1;
				}
				.rule-view-container:empty{
					display: none;
				}
				.rule-item{
					display: flex;
					align-items: center;
					line-height: normal;
					font-size: 16px;
					padding: 4px 8px;
					gap: 8px;
				}
				.rule-name{
					flex: 1;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.rule-controls{
					display: flex;
					align-items: center;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					gap: 8px;
					padding: 0px;
				}
				.rule-controls button{
					margin: 0;
				}
				.rule-controls-enable{
					
				}
				.rule-controls-edit{
					
				}
				.rule-controls-delete{
					
				}
				.rule-controls-edit,
				.rule-controls-delete{
					width: 16px;
					height: 16px;
					cursor: pointer;
				}

				section.pops-panel-container > ul li:not(.pops-panel-forms-container-item){
					margin: 0;
				}
            `,
        }));
    }
    async enterDeepMenu(e, a, n) {
      const r = { duration: 220, easing: "ease-in-out" },
        s = e.matches("section") ? e : e.closest("section"),
        i = w.createElement("section", {
          className: "pops-panel-container pops-panel-deepMenu-container",
          innerHTML: `
				<ul class="pops-panel-container-header-ul pops-panel-deepMenu-container-header-ul">
					<li class="pops-panel-container-header-title-text pops-panel-deepMenu-container-header">
						<i class="pops-panel-deepMenu-container-left-arrow-icon">${O.config.iconSVG.arrowLeft}</i>
						<p class="pops-panel-deepMenu-container-header-title-text">${a}</p>
					</li>
				</ul>
				<ul class="pops-panel-container-main-ul"></ul>
			`,
        }),
        l = i.querySelector(".pops-panel-deepMenu-container-header-ul"),
        o = i.querySelector(".pops-panel-deepMenu-container-left-arrow-icon"),
        c = i.querySelector(".pops-panel-container-main-ul");
      w.on(o, "click", async (d) => {
        p.preventEvent(d);
        const h = () => {
          const m = s;
          (w.removeClass(m, "pops-hide-important"), w.remove(i), n());
        };
        if (this.option.useDeepMenuSwtichAnimation && document.startViewTransition) {
          const m = document.startViewTransition(h);
          (await m.ready,
            await Promise.all([
              i.animate([{ transform: "translateX(0)" }, { transform: "translateX(100%)" }], r).finished,
              s.animate([{ transform: "translateX(-100%)" }, { transform: "translateX(0)" }], r).finished,
            ]),
            await m.finished);
        } else h();
      });
      const u = () => {
        (w.addClass(s, "pops-hide-important"), w.after(s, i));
      };
      if (this.option.useDeepMenuSwtichAnimation && document.startViewTransition) {
        const d = document.startViewTransition(u);
        (await d.ready,
          await i.animate([{ transform: "translateX(100%)" }, { transform: "translateX(0)" }], r).finished,
          await d.finished);
      } else u();
      return {
        $section: i,
        $headerContainer: l,
        $arrowLeft: o,
        $rightRuleContainer: c,
        quiteDeepMenu: () => {
          o.click();
        },
      };
    }
    createButtonControls(e, a, n, r) {
      let s = n.btnControls,
        i = w.createElement("li", { className: "rule-controls" });
      w.append(e, i);
      let l = null;
      s?.add?.enable &&
        ((l = w.createElement(
          "button",
          { className: "rule-control-add", innerHTML: "<span>添加</span>" },
          { type: "button", "data-type": "primary", "data-has-icon": "false", "data-righticon": "false" }
        )),
        w.on(l, "click", async (m) => {
          p.preventEvent(m);
          let b = await n.btnControls?.add?.callback?.call(this, { event: m, $section: a });
          (typeof b == "boolean" && !b) || (await r?.());
        }),
        w.append(i, l));
      let o = null;
      s?.filter?.enable &&
        ((o = w.createElement(
          "button",
          { className: "rule-control-filter", innerHTML: "<span>过滤</span>" },
          { type: "button", "data-type": "default", "data-has-icon": "false", "data-righticon": "false" }
        )),
        w.on(o, "click", async (m) => {
          p.preventEvent(m);
          let b = await s?.filter?.callback?.();
          if (typeof b == "boolean" && !b) return;
          let k = () => Array.from(a.querySelectorAll(".rule-view-container .rule-item")),
            x = o;
          if (x)
            if (w.text(x).includes("取消")) {
              let v = await s?.filter?.cancelFilterCallback?.({ $button: x, getAllRuleElement: k });
              if (typeof v == "boolean" && !v) return;
              (k().forEach((T) => {
                w.show(T, false);
              }),
                w.text(x, "过滤"));
            } else {
              let v = "过滤规则";
              (typeof s?.filter?.title == "function"
                ? (v = s?.filter?.title())
                : typeof s?.filter?.title == "string" && (v = s?.filter?.title),
                new ma({
                  title: v,
                  filterOption: s?.filter?.option || [],
                  execFilterCallBack() {
                    w.text(x, "取消过滤");
                  },
                  getAllRuleInfo: () => k().map((_) => ({ data: this.parseRuleElement(_).data, $el: _ })),
                }).showView());
            }
        }),
        w.append(i, o));
      let c = null;
      s?.clearAll?.enable &&
        ((c = w.createElement(
          "button",
          { className: "rule-control-clear-all", innerHTML: "<span>清空所有</span>" },
          { type: "button", "data-type": "xiaomi-primary", "data-has-icon": "false", "data-righticon": "false" }
        )),
        w.on(c, "click", (m) => {
          p.preventEvent(m);
          let b = O.confirm({
            title: { text: "提示", position: "center" },
            content: { text: "确定清空所有的数据？", html: false },
            btn: {
              ok: {
                enable: true,
                callback: async (k) => {
                  g.success("清空所有");
                  let x = await s?.clearAll?.callback?.();
                  if (typeof x == "boolean" && !x) return;
                  let v = await n?.data();
                  if (!v || v.length) {
                    f.error("清理失败");
                    return;
                  } else f.success("清理成功");
                  (await this.updateDeleteAllBtnText(n, i), this.clearContent(a), b.close());
                },
              },
              cancel: { text: "取消", enable: true },
            },
            drag: true,
            mask: { enable: true },
            width: "300px",
            height: "200px",
          });
        }),
        w.append(i, c));
      let u = null;
      s?.import?.enable &&
        ((u = w.createElement(
          "button",
          { className: "rule-control-import", innerHTML: "<span>导入</span>" },
          { type: "button", "data-type": "default", "data-has-icon": "false", "data-righticon": "false" }
        )),
        w.on(u, "click", async (m) => {
          p.preventEvent(m);
          await s?.import?.callback?.(() => {
            this.updateRuleContaienrElement(n, void 0, a);
          });
        }),
        w.append(i, u));
      let d = null;
      s?.export?.enable &&
        ((d = w.createElement(
          "button",
          { className: "rule-control-export", innerHTML: "<span>导出</span>" },
          { type: "button", "data-type": "default", "data-has-icon": "false", "data-righticon": "false" }
        )),
        w.on(d, "click", async (m) => {
          p.preventEvent(m);
          await s?.export?.callback?.({ event: m });
        }),
        w.append(i, d));
      let h = w.createElement("div", { className: "rule-view-container", innerHTML: "" });
      return (
        w.append(a, h),
        {
          $ruleContainer: h,
          $ruleControls: i,
          $ruleControlAdd: l,
          $ruleControlFilter: o,
          $ruleControlClearAll: c,
          $ruleControlImport: u,
          $ruleControlExport: d,
        }
      );
    }
    parseViewElement(e) {
      let a = e.querySelector(".rule-view-container"),
        n = e.querySelector(".rule-control-clear-all");
      return { $container: a, $deleteBtn: n };
    }
    parseRuleElement(e) {
      let a = e.querySelector(".rule-controls-enable"),
        n = a.querySelector(".pops-panel-switch"),
        r = a.querySelector(".pops-panel-switch__input"),
        s = a.querySelector(".pops-panel-switch__core"),
        i = e.querySelector(".rule-controls-edit"),
        l = e.querySelector(".rule-controls-delete");
      return {
        $enable: a,
        $enableSwitch: n,
        $enableSwitchInput: r,
        $enableSwitchCore: s,
        $edit: i,
        $delete: l,
        data: Reflect.get(e, "data-rule"),
      };
    }
    async createRuleElement(e, a, n, r) {
      let s = n,
        i = await e.getDataItemName(s),
        l = w.createElement("div", {
          className: "rule-item",
          innerHTML: `
			<div class="rule-name">${i}</div>
			<div class="rule-controls">
				<div class="rule-controls-enable">
					<div class="pops-panel-switch">
						<input class="pops-panel-switch__input" type="checkbox">
						<span class="pops-panel-switch__core">
							<div class="pops-panel-switch__action">
							</div>
						</span>
					</div>
				</div>
				<div class="rule-controls-edit">
					${O.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${O.config.iconSVG.delete}
				</div>
			</div>
			`,
        });
      Reflect.set(l, "data-rule", s);
      let o = "pops-panel-switch-is-checked";
      const {
        $enable: c,
        $enableSwitch: u,
        $enableSwitchCore: d,
        $enableSwitchInput: h,
        $delete: m,
        $edit: b,
      } = this.parseRuleElement(l);
      return (
        e.btnControls?.ruleEnable?.enable
          ? (w.on(d, "click", async (k) => {
              let x = false;
              if (
                (u.classList.contains(o) ? (u.classList.remove(o), (x = false)) : (u.classList.add(o), (x = true)),
                (h.checked = x),
                await e?.btnControls?.ruleEnable?.callback(s, x),
                x && a)
              ) {
                let v = n,
                  T = await a.getSubscribeInfo(v.data.url);
                if (T.data) {
                  let _ = T.data;
                  ((_.uuid = v.uuid), (_.data = v.data), (_.data.latestUpdateTime = Date.now()), await a.updateData(_));
                } else
                  ((v.data.updateFailedTime = Date.now()),
                    await a.updateData(v),
                    g.error(v),
                    f.error(T.msg, { consoleLogContent: true }));
                await this.updateRuleContaienrElement(e, a, r);
              }
            }),
            (await e?.btnControls?.ruleEnable?.getEnable(s)) && u.classList.add(o))
          : c.remove(),
        e?.btnControls?.ruleEdit?.enable
          ? w.on(b, "click", (k) => {
              if ((p.preventEvent(k), typeof e.btnControls?.ruleEdit?.callback == "function")) {
                let x = e.btnControls?.ruleEdit?.callback({
                  context: this,
                  event: k,
                  option: e,
                  subscribeOption: a,
                  ruleData: s,
                  $section: r,
                  $ruleItem: l,
                  enterDeepMenu: async (v) => {
                    let T = await this.enterDeepMenu(r, v.headerTitle || "", () => {
                        this.updateRuleContaienrElement(e, a, r);
                      }),
                      _ = T.$rightRuleContainer;
                    this.createButtonControls(_, T.$rightRuleContainer, v, void 0);
                    let D = await v.data();
                    await this.addRuleElement(v, void 0, T.$section, D);
                  },
                });
                if (typeof x == "boolean" && !x) return;
              }
              this.showEditView(e, a, true, s, r, l, (x) => {
                ((s = null), (s = x));
              });
            })
          : b.remove(),
        e?.btnControls?.ruleDelete?.enable
          ? w.on(m, "click", (k) => {
              p.preventEvent(k);
              let x = O.confirm({
                title: { text: "提示", position: "center" },
                content: { text: "确定删除该条数据？", html: false },
                btn: {
                  ok: {
                    enable: true,
                    callback: async (v) => {
                      (g.success("删除数据"),
                        (await e?.btnControls?.ruleDelete?.deleteCallBack(s))
                          ? (f.success("成功删除该数据"),
                            l.remove(),
                            await this.updateDeleteAllBtnText(e, r),
                            x.close())
                          : f.error("删除该数据失败"));
                    },
                  },
                  cancel: { text: "取消", enable: true },
                },
                drag: true,
                mask: { enable: true },
                width: "300px",
                height: "200px",
              });
            })
          : m.remove(),
        l
      );
    }
    async addRuleElement(e, a, n, r, s) {
      let { $container: i } = this.parseViewElement(n),
        l = [],
        o = Array.isArray(r) ? r : [r],
        c = document.createDocumentFragment();
      for (let u = 0; u < o.length; u++) {
        let d = o[u],
          h = await this.createRuleElement(e, a, d, n);
        (c.appendChild(h), s?.(d, h), l.push(h));
      }
      return (i.appendChild(c), await this.updateDeleteAllBtnText(e, n), l);
    }
    async updateRuleContaienrElement(e, a, n) {
      this.clearContent(n);
      const { $container: r } = this.parseViewElement(n);
      let s = await e.data();
      (await this.addRuleElement(e, a, n, s), await this.updateDeleteAllBtnText(e, n));
    }
    async updateRuleItemElement(e, a, n, r, s) {
      let i = await this.createRuleElement(e, a, n, s);
      return (r.after(i), r.remove(), i);
    }
    clearContent(e) {
      const { $container: a } = this.parseViewElement(e);
      w.html(a, "");
    }
    setDeleteBtnText(e, a, n = false) {
      const { $deleteBtn: r } = this.parseViewElement(e);
      n ? w.html(r, a) : w.text(r, a);
    }
    async updateDeleteAllBtnText(e, a) {
      let r = (await e.data()).length,
        s = "清空所有";
      (r !== 0 && (s += `(${r})`), this.setDeleteBtnText(a, s));
    }
    showEditView(e, a, n, r, s, i, l, o) {
      let c = async (d) => {
        if (d) {
          if (typeof o == "function") {
            let h = await e.getData(r);
            o(h);
          }
        } else if ((n || (await e.deleteData(r)), typeof l == "function")) {
          let h = await e.getData(r);
          l(h);
        }
      };
      new wa({
        title: n ? "编辑" : "添加",
        data: () => r,
        dialogCloseCallBack: c,
        getView: async (d) => await e.btnControls?.ruleEdit?.getView?.(d, n),
        btn: {
          ok: { enable: true, text: n ? "修改" : "添加" },
          cancel: {
            callback: async (d, h) => {
              (d.close(), await c(false));
            },
          },
          close: {
            callback: async (d, h) => {
              (d.close(), await c(false));
            },
          },
        },
        onsubmit: async (d, h) => {
          let m = await e?.btnControls?.ruleEdit?.onsubmit?.(d, n, h);
          return (
            m.success
              ? n
                ? (f.success("修改成功"), s && (await this.updateRuleItemElement(e, a, m.data, i, s)))
                : s && (await this.addRuleElement(e, a, s, m.data))
              : n && g.error("修改失败"),
            m
          );
        },
        style: e?.btnControls?.ruleEdit?.style,
        width: e?.btnControls?.ruleEdit?.viewWidth,
        height: e?.btnControls?.ruleEdit?.viewHeight,
      }).showView();
    }
  }
  let Vt = class {
    option;
    storageApi;
    constructor(e) {
      ((this.option = e), (this.storageApi = new Ve(e.STORAGE_API_KEY)));
    }
    getAllSubscribe() {
      return this.storageApi.get(this.option.STORAGE_KEY, []);
    }
    getAllSubscribeRule(e = false) {
      let a = this.getAllSubscribe(),
        n = [];
      for (let r = 0; r < a.length; r++) {
        const s = a[r];
        if (!(e && !s.data.enable))
          for (let i = 0; i < s.subscribeData.ruleData.length; i++) {
            const l = s.subscribeData.ruleData[i];
            (e && !l.enable) || ((l.subscribeUUID = s.uuid), n.push(l));
          }
      }
      return n;
    }
    getSubscribe(e) {
      return this.getAllSubscribe().find((n) => n.uuid == e);
    }
    getSubscribeRule(e, a) {
      let n = this.getSubscribe(e);
      if (n) return n.subscribeData.ruleData.find((s) => s.uuid === a);
    }
    deleteAllSubscribe() {
      this.storageApi.delete(this.option.STORAGE_KEY);
    }
    deleteSubscribe(e) {
      let a = typeof e == "string" ? e : e.uuid,
        n = this.getAllSubscribe(),
        r = n.findIndex((s) => s.uuid === a);
      return (r !== -1 && (n.splice(r, 1), this.storageApi.set(this.option.STORAGE_KEY, n)), r !== -1);
    }
    clearSubscribe(e) {
      let a = typeof e == "string" ? e : e.uuid,
        n = this.getAllSubscribe(),
        r = n.findIndex((s) => s.uuid === a);
      return r !== -1
        ? ((n[r].subscribeData.ruleData = []), this.storageApi.set(this.option.STORAGE_KEY, n), true)
        : false;
    }
    addSubscribe(e) {
      let a = false,
        n = this.getAllSubscribe();
      return (
        n.findIndex((s) => s.uuid === e.uuid) === -1 && (n.push(e), (a = true)),
        a && this.storageApi.set(this.option.STORAGE_KEY, n),
        a
      );
    }
    updateSubscribe(e) {
      let a = false,
        n = this.getAllSubscribe(),
        r = n.findIndex((s) => s.uuid === e.uuid);
      return (r !== -1 && ((n[r] = e), (a = true)), a && this.storageApi.set(this.option.STORAGE_KEY, n), a);
    }
    updateSubscribeRule(e, a) {
      let n = false,
        r = this.getAllSubscribe(),
        s = r.find((i) => i.uuid === e);
      if (s) {
        let i = s.subscribeData.ruleData.findIndex((l) => l.uuid === a.uuid);
        i !== -1 && ((s.subscribeData.ruleData[i] = a), (n = true));
      }
      return (n && this.storageApi.set(this.option.STORAGE_KEY, r), true);
    }
    deleteSubscribeRule(e, a) {
      let n = false,
        r = this.getAllSubscribe(),
        s = r.findIndex((i) => i.uuid === e);
      if (s !== -1) {
        let l = r[s].subscribeData.ruleData.findIndex((o) => o.uuid === a.uuid);
        l !== -1 &&
          (r[s].subscribeData.ruleData.splice(l, 1), this.storageApi.set(this.option.STORAGE_KEY, r), (n = true));
      }
      return n;
    }
    async getSubscribeInfo(e) {
      let a = await E.get(e, {
        allowInterceptConfig: false,
        timeout: 1e4,
        headers: { "User-Agent": p.getRandomPCUA() },
      });
      if (!a.status) return (g.error(a), { data: null, msg: "获取订阅信息失败" });
      let n = a.data.responseText,
        r = p.toJSON(n);
      return typeof r.title == "string" &&
        typeof r.version == "number" &&
        typeof r.lastModified == "number" &&
        Array.isArray(r.ruleData)
        ? {
            data: {
              uuid: p.generateUUID(),
              subscribeData: r,
              data: { enable: true, url: e, latestUpdateTime: Date.now(), updateFailedTime: null },
            },
            msg: "",
          }
        : (g.error(r), { data: null, msg: "订阅链接的内容格式不正确" });
    }
    async updateAllSubscribe() {
      let e = this.getAllSubscribe();
      for (let a = 0; a < e.length; a++) {
        const n = e[a];
        if (
          !n.data.enable ||
          (typeof n.data.updateFailedTime == "number" &&
            p.formatTime(n.data.updateFailedTime, "yyyyMMdd") === p.formatTime(Date.now(), "yyyyMMdd")) ||
          (typeof n.data.latestUpdateTime == "number" &&
            p.formatTime(Date.now(), "yyyyMMdd") === p.formatTime(n.data.latestUpdateTime, "yyyyMMdd"))
        )
          continue;
        let r = await this.getSubscribeInfo(n.data.url),
          s = false;
        if (r.data) {
          let i = r.data;
          ((i.uuid = n.uuid), (i.data = n.data), (i.data.latestUpdateTime = Date.now()));
          let l = i.data.title || i.subscribeData.title || i.data.url;
          ((n.data.updateFailedTime = null),
            (s = this.updateSubscribe(i)),
            s ? g.success(`更新订阅成功：${l}`) : g.error(`更新订阅失败：${l}`, n));
        } else g.error("更新订阅失败：" + r.msg, n);
        s || ((n.data.updateFailedTime = Date.now()), this.updateSubscribe(n));
      }
    }
    importSubscribe(e) {
      let a = O.alert({
          title: { text: "请选择导入方式", position: "center" },
          content: {
            text: `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
            html: true,
          },
          btn: {
            ok: { enable: false },
            close: {
              enable: true,
              callback(o, c) {
                o.close();
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
				}
            `,
        }),
        n = a.$shadowRoot.querySelector(".btn-control[data-mode='local']"),
        r = a.$shadowRoot.querySelector(".btn-control[data-mode='network']"),
        s = a.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),
        i = async (o) => {
          let c = this.getAllSubscribe(),
            u = [],
            d = [];
          for (let h = 0; h < o.length; h++) {
            const m = o[h];
            let b = c.findIndex((k) => k.uuid === m.uuid);
            b !== -1 ? d.push({ index: b, data: m }) : u.push(m);
          }
          (await new Promise((h) => {
            if (globalThis.confirm(`存在相同的uuid的规则 ${d.length}条，是否进行覆盖？`))
              for (const b of d) c[b.index] = b.data;
            h(true);
          }),
            (c = c.concat(u)),
            this.storageApi.set(this.option.STORAGE_KEY, c),
            f.success(`共 ${o.length} 条订阅，新增 ${u.length} 条`),
            e?.());
        },
        l = (o) =>
          new Promise(async (c) => {
            let u = p.toJSON(o);
            if (!Array.isArray(u)) {
              (g.error(u), f.error("导入失败，格式不符合（不是数组）", { consoleLogContent: true }), c(false));
              return;
            }
            if (!u.length) {
              (f.error("导入失败，解析出的数据为空", { consoleLogContent: true }), c(false));
              return;
            }
            let d = u[0];
            if (
              !(
                typeof d.data == "object" &&
                d.data != null &&
                typeof d.subscribeData == "object" &&
                d.subscribeData != null &&
                typeof d.uuid == "string"
              )
            ) {
              (f.error("导入失败，解析的格式不符合", { consoleLogContent: true }), c(false));
              return;
            }
            (await i(u), c(true));
          });
      (w.on(n, "click", (o) => {
        (p.preventEvent(o), a.close());
        let c = w.createElement("input", { type: "file", accept: ".json" });
        (w.on(c, ["propertychange", "input"], (u) => {
          if (!c.files?.length) return;
          let d = c.files[0],
            h = new FileReader();
          ((h.onload = () => {
            l(h.result);
          }),
            h.readAsText(d, "UTF-8"));
        }),
          c.click());
      }),
        w.on(r, "click", (o) => {
          (p.preventEvent(o), a.close());
          let c = O.prompt({
              title: { text: "网络导入", position: "center" },
              content: { text: "", placeholder: "请填写URL", focus: true },
              btn: {
                close: {
                  enable: true,
                  callback(h, m) {
                    h.close();
                  },
                },
                ok: {
                  text: "导入",
                  callback: async (h, m) => {
                    let b = h.text;
                    if (p.isNull(b)) {
                      f.error("请填入完整的url");
                      return;
                    }
                    let k = f.loading("正在获取配置..."),
                      x = await E.get(b, { allowInterceptConfig: false });
                    if ((k.close(), !x.status)) {
                      (g.error(x), f.error("获取配置失败", { consoleLogContent: true }));
                      return;
                    }
                    (await l(x.data.responseText)) && h.close();
                  },
                },
                cancel: { enable: false },
              },
              drag: true,
              mask: { enable: true },
              width: K.info.width,
              height: "auto",
            }),
            u = c.$shadowRoot.querySelector("input"),
            d = c.$shadowRoot.querySelector(".pops-prompt-btn-ok");
          (w.on(u, ["input", "propertychange"], (h) => {
            w.val(u) === "" ? w.attr(d, "disabled", "true") : w.removeAttr(d, "disabled");
          }),
            w.listenKeyboard(u, "keydown", (h, m, b) => {
              h === "Enter" && b.length === 0 && w.val(u) !== "" && p.dispatchEvent(d, "click");
            }),
            p.dispatchEvent(u, "input"));
        }),
        w.on(s, "click", async (o) => {
          (p.preventEvent(o), a.close());
          let c = await We.getClipboardText();
          if (c.trim() === "") {
            f.warning("获取到的剪贴板内容为空");
            return;
          }
          await l(c);
        }));
    }
    exportSubscribe(e = "rule.json") {
      let a = O.alert({
          title: { text: "请选择导出方式", position: "center" },
          content: {
            text: `
                    <div class="btn-control" data-mode="only-export-rule-list">导出订阅</div>
                `,
            html: true,
          },
          btn: {
            ok: { enable: false },
            close: {
              enable: true,
              callback(s, i) {
                s.close();
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
				}
            `,
        }),
        n = a.$shadowRoot.querySelector(".btn-control[data-mode='only-export-rule-list']"),
        r = (s, i) => {
          let l = new Blob([JSON.stringify(i, null, 4)]),
            o = window.URL.createObjectURL(l),
            c = document.createElement("a");
          ((c.href = o),
            (c.download = s),
            c.click(),
            setTimeout(() => {
              window.URL.revokeObjectURL(o);
            }, 1500));
        };
      w.on(n, "click", (s) => {
        p.preventEvent(s);
        try {
          let i = this.getAllSubscribe();
          if (i.length === 0) {
            f.warning("订阅为空，无需导出");
            return;
          }
          (r(e, i), a.close());
        } catch (i) {
          f.error(i.toString(), { consoleLogContent: true });
        }
      });
    }
  };
  const ne = new Vt({ STORAGE_API_KEY: "character-mapping-rule", STORAGE_KEY: "character-mapping-subscribe-rule" }),
    ht = new Ve("character-mapping-rule"),
    ut = {
      $data: { STORAGE_KEY: "character-mapping", EXPORT_CONFIG_KEY: "rule-export-config" },
      getTemplateData() {
        return {
          uuid: p.generateUUID(),
          subscribeUUID: null,
          enable: true,
          name: "",
          data: { url: "", isRegExp: true, regExpFlag: "ig", searchValue: "", replaceValue: "" },
          dynamicData: [],
        };
      },
      getRulePanelViewOption(t) {
        const e = this;
        let a = O.config.PanelHandlerComponents(),
          n = () => t ?? this.getTemplateData();
        function r(i) {
          return {
            get(l, o) {
              return i[l] ?? o;
            },
            set(l, o) {
              i[l] = o;
            },
          };
        }
        return {
          id: "netdisk-rule",
          title: "字符映射",
          headerTitle: "字符映射规则",
          subscribe: {
            enable: true,
            data() {
              return ne.getAllSubscribe();
            },
            getData: (i) => ne.getSubscribe(i.uuid) ?? i,
            getDataItemName(i) {
              return `
						<style>
							.subscribe-rule-title-info-wrapper{
								display: flex;
								flex-direction: column;
								gap: 4px;
							}
							.subscribe-rule-title-info-wrapper .rule-name-text{
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
								font-weight: 600;
								font-size: 16px;
								line-height: 24px;
							}
							.subscribe-rule-title-info-wrapper .subscribe-rule-small-span-text{
								font-size: 14px;
								line-height: 16px;
								white-space: pre-wrap;
							}
						</style>
						<div class="subscribe-rule-title-info-wrapper">
							<div class="rule-name-text" style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 16px;font-weight: 600;line-height: 24px;">${i.data.title || i.subscribeData.title || i.data.url}</div>
								<div class="subscribe-rule-small-span-text">${i.subscribeData.ruleData.length} 条规则，更新于：${p.formatTime(i.data.latestUpdateTime, "yyyy年MM月dd日 HH:mm:ss")}${typeof i.data.updateFailedTime == "number" ? `，<span style="color: red;">更新失败于：${p.formatTime(i.data.updateFailedTime, "yyyy年MM月dd日 HH:mm:ss")}</span>` : ""}</div>
								${i.subscribeData.homePage ? `<a href="${i.subscribeData.homePage}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">转到主页</a>` : ""}
								<a href="${i.data.url}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">订阅地址</a>
						</div>`;
            },
            addData: (i) => ne.addSubscribe(i),
            updateData: (i) => ne.updateSubscribe(i),
            deleteData: (i) => ne.deleteSubscribe(i),
            btnControls: {
              add: { enable: true },
              filter: {
                enable: true,
                title: "过滤订阅",
                option: [
                  {
                    name: "过滤【已启用】的订阅",
                    filterCallBack(i) {
                      return i.data.enable;
                    },
                  },
                  {
                    name: "过滤【未启用】的订阅",
                    filterCallBack(i) {
                      return !i.data.enable;
                    },
                  },
                ],
              },
              clearAll: {
                enable: true,
                callback: () => {
                  ne.deleteAllSubscribe();
                },
              },
              ruleEnable: {
                enable: true,
                getEnable(i) {
                  return i.data.enable;
                },
                async callback(i, l) {
                  ((i.data.enable = l), ne.updateSubscribe(i));
                },
              },
              ruleEdit: {
                enable: true,
                callback: (i) => {
                  let l = i.ruleData.uuid;
                  return (
                    i.enterDeepMenu({
                      headerTitle: i.ruleData.data.title || i.ruleData.subscribeData.title || i.ruleData.data.url,
                      data() {
                        return ne.getSubscribe(l)?.subscribeData?.ruleData ?? i.ruleData.subscribeData.ruleData;
                      },
                      getData(o) {
                        return ne.getSubscribeRule(l, o.uuid) ?? o;
                      },
                      getDataItemName(o) {
                        return o.name ?? o.data.url;
                      },
                      addData(o) {
                        return true;
                      },
                      updateData(o) {
                        return ne.updateSubscribeRule(l, o);
                      },
                      deleteData(o) {
                        return ne.deleteSubscribeRule(l, o);
                      },
                      btnControls: {
                        filter: {
                          enable: true,
                          option: [
                            {
                              name: "过滤【已启用】的规则",
                              filterCallBack(o) {
                                return o.enable;
                              },
                            },
                            {
                              name: "过滤【未启用】的规则",
                              filterCallBack(o) {
                                return !o.enable;
                              },
                            },
                          ],
                        },
                        clearAll: {
                          enable: true,
                          callback: () => {
                            ne.clearSubscribe(l);
                          },
                        },
                        ruleEnable: {
                          enable: true,
                          getEnable(o) {
                            return o.enable;
                          },
                          callback(o, c) {
                            ((o.enable = c), ne.updateSubscribeRule(l, o));
                          },
                        },
                        ruleEdit: {
                          enable: true,
                          getView: (o, c) => {
                            c || (o = n());
                            let u = document.createDocumentFragment(),
                              d = H("启用", "enable", true);
                            Reflect.set(d.props, U, r(o));
                            let h = a.createSectionContainerItem_switch(d),
                              m = G("规则名称", "name", "", "", void 0, "必填");
                            Reflect.set(m.props, U, r(o));
                            let b = a.createSectionContainerItem_input(m),
                              k = G("匹配网址", "url", "", "", void 0, "必填，可正则");
                            Reflect.set(k.props, U, r(o.data));
                            let x = a.createSectionContainerItem_input(k),
                              v = (R) => {
                                let M = this.getTemplateData(),
                                  I = G("字符规则", "searchValue", M.data.searchValue, "", void 0, "必填，可正则");
                                Reflect.set(I.props, U, r(R));
                                let L = a.createSectionContainerItem_input(I),
                                  F = H(
                                    "是否启用正则",
                                    "isRegExp",
                                    M.data.isRegExp,
                                    void 0,
                                    "使用正则进行匹配字符规则"
                                  );
                                Reflect.set(F.props, U, r(o.data));
                                let W = a.createSectionContainerItem_switch(F),
                                  ee = G(
                                    "正则标识符",
                                    "regExpFlag",
                                    M.data.regExpFlag,
                                    "",
                                    void 0,
                                    "i:不区分大小写  g:全局"
                                  );
                                Reflect.set(ee.props, U, r(o.data));
                                let ae = a.createSectionContainerItem_input(ee),
                                  fe = G("映射为", "replaceValue", M.data.replaceValue, "", void 0, "");
                                Reflect.set(fe.props, U, r(o.data));
                                let he = a.createSectionContainerItem_input(fe);
                                return {
                                  $data_searchValue: L,
                                  $data_isRegExp: W,
                                  $data_regExpFlag: ae,
                                  $data_replaceValue: he,
                                };
                              },
                              T = w.createElement("div", {
                                className: "rule-form-ulist-dynamic",
                                innerHTML: `
												<div class="rule-form-ulist-dynamic__inner">

												</div>
												<div class="pops-panel-button pops-panel-button-no-icon">
													<button class="pops-panel-button_inner" type="button" data-type="default">
														<i class="pops-bottom-icon" is-loading="false"></i>
														<span class="pops-panel-button-text">添加额外属性</span>
													</button>
												</div>`,
                              }),
                              _ = T.querySelector(".rule-form-ulist-dynamic__inner"),
                              D = T.querySelector(".pops-panel-button"),
                              S = (R) => {
                                let M = this.getTemplateData();
                                R = R ?? {
                                  searchValue: M.data.searchValue,
                                  isRegExp: M.data.isRegExp,
                                  regExpFlag: M.data.regExpFlag,
                                  replaceValue: M.data.replaceValue,
                                };
                                let I = w.createElement("div", {
                                    className: "rule-form-ulist-dynamic__inner-container",
                                    innerHTML: `
										<div class="dynamic-control-delete">
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="button" data-type="danger">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">×</span>
												</button>
											</div>
										</div>
										<ul class="dynamic-forms">

										</ul>`,
                                  }),
                                  L = I.querySelector(".dynamic-control-delete");
                                w.on(L, "click", (he) => {
                                  if ((p.preventEvent(he), I.remove(), Array.isArray(o.dynamicData))) {
                                    let Te = o.dynamicData.findIndex((Le) => Le == R);
                                    Te !== -1 && o.dynamicData.splice(Te, 1);
                                  }
                                });
                                let F = I.querySelector(".dynamic-forms"),
                                  {
                                    $data_searchValue: W,
                                    $data_isRegExp: ee,
                                    $data_regExpFlag: ae,
                                    $data_replaceValue: fe,
                                  } = v(R);
                                (F.appendChild(W),
                                  F.appendChild(ee),
                                  F.appendChild(ae),
                                  F.appendChild(fe),
                                  _.appendChild(I));
                              };
                            if (
                              (w.on(D, "click", (R) => {
                                (p.preventEvent(R), S());
                              }),
                              Array.isArray(o.dynamicData))
                            )
                              for (let R = 0; R < o.dynamicData.length; R++) {
                                const M = o.dynamicData[R];
                                S(M);
                              }
                            let A = v(o.data);
                            return (
                              u.appendChild(h),
                              u.appendChild(b),
                              u.appendChild(x),
                              u.appendChild(A.$data_searchValue),
                              u.appendChild(A.$data_isRegExp),
                              u.appendChild(A.$data_regExpFlag),
                              u.appendChild(A.$data_replaceValue),
                              u.appendChild(T),
                              u
                            );
                          },
                          onsubmit: (o, c, u) => {
                            let d = o.querySelectorAll(".rule-form-ulist > li"),
                              h = this.getTemplateData();
                            return (
                              c && (h.uuid = u.uuid),
                              d.forEach((m) => {
                                let b = Reflect.get(m, "__formConfig__"),
                                  k = Reflect.get(b, "attributes"),
                                  x = Reflect.get(m, U),
                                  v = Reflect.get(k, ue),
                                  T = Reflect.get(k, we),
                                  _ = x.get(v, T);
                                Reflect.has(h, v)
                                  ? Reflect.set(h, v, _)
                                  : Reflect.has(h.data, v)
                                    ? Reflect.set(h.data, v, _)
                                    : g.error(`${v}不在数据中`);
                              }),
                              o.querySelectorAll(".rule-form-ulist-dynamic__inner-container").forEach((m) => {
                                let b = {};
                                (m.querySelectorAll(".dynamic-forms > li").forEach((k) => {
                                  let x = Reflect.get(k, "__formConfig__");
                                  if (!x) return;
                                  let v = Reflect.get(x, "attributes");
                                  if (!v) return;
                                  let T = Reflect.get(k, U),
                                    _ = Reflect.get(v, ue),
                                    D = Reflect.get(v, we),
                                    S = T.get(_, D);
                                  Reflect.set(b, _, S);
                                }),
                                  h.dynamicData.push(b));
                              }),
                              h.name.trim() === ""
                                ? (f.error("规则名称不能为空"), { success: false, data: h })
                                : h.data.url.trim() === ""
                                  ? (f.error("匹配网址不能为空"), { success: false, data: h })
                                  : h.data.searchValue.trim() === "" ||
                                      (Array.isArray(h.dynamicData) &&
                                        h.dynamicData.findIndex((m) => m.searchValue.trim() === "") !== -1)
                                    ? (f.error("字符规则不能为空"), { success: false, data: h })
                                    : c
                                      ? { success: this.updateData(h), data: h }
                                      : { success: this.addData(h), data: h }
                            );
                          },
                        },
                        ruleDelete: {
                          enable: true,
                          deleteCallBack(o) {
                            return ne.deleteSubscribeRule(l, o);
                          },
                        },
                      },
                    }),
                    false
                  );
                },
              },
              ruleDelete: { enable: true, deleteCallBack: (i) => ne.deleteSubscribe(i) },
              import: {
                enable: true,
                callback(i) {
                  ne.importSubscribe(() => {
                    i();
                  });
                },
              },
              export: {
                enable: true,
                callback() {
                  ne.exportSubscribe(Re + "-字典映射-订阅.json");
                },
              },
            },
            getSubscribeInfo: ne.getSubscribeInfo.bind(ne),
          },
          ruleOption: {
            btnControls: {
              add: { enable: true },
              filter: {
                enable: true,
                title: "过滤规则",
                option: [
                  {
                    name: "过滤【已启用】的规则",
                    filterCallBack(i) {
                      return i.enable;
                    },
                  },
                  {
                    name: "过滤【未启用】的规则",
                    filterCallBack(i) {
                      return !i.enable;
                    },
                  },
                  {
                    name: "过滤【在当前网址生效】的规则",
                    filterCallBack(i) {
                      return !!window.location.href.match(i.data.url);
                    },
                  },
                ],
              },
              clearAll: {
                enable: true,
                callback: () => {
                  e.clearData();
                },
              },
              import: {
                enable: true,
                callback: (i) => {
                  e.importRule(() => {
                    i();
                  });
                },
              },
              export: {
                enable: true,
                callback: () => {
                  e.exportRule(Re + "-字符映射.json", Re + "-字符映射-订阅模式.json");
                },
              },
              ruleEnable: {
                enable: true,
                getEnable(i) {
                  return i.enable;
                },
                callback: (i, l) => {
                  ((i.enable = l), e.updateData(i));
                },
              },
              ruleEdit: {
                enable: true,
                getView: (i, l) => {
                  let o = document.createDocumentFragment();
                  l || (i = n());
                  let c = H("启用", "enable", true);
                  Reflect.set(c.props, U, r(i));
                  let u = a.createSectionContainerItem_switch(c),
                    d = G("规则名称", "name", "", "", void 0, "必填");
                  Reflect.set(d.props, U, r(i));
                  let h = a.createSectionContainerItem_input(d),
                    m = G("匹配网址", "url", "", "", void 0, "必填，可正则");
                  Reflect.set(m.props, U, r(i.data));
                  let b = a.createSectionContainerItem_input(m),
                    k = (S) => {
                      let A = this.getTemplateData(),
                        R = G("字符规则", "searchValue", A.data.searchValue, "", void 0, "必填，可正则");
                      Reflect.set(R.props, U, r(S));
                      let M = a.createSectionContainerItem_input(R),
                        I = H("是否启用正则", "isRegExp", A.data.isRegExp, void 0, "使用正则进行匹配字符规则");
                      Reflect.set(I.props, U, r(i.data));
                      let L = a.createSectionContainerItem_switch(I),
                        F = G("正则标识符", "regExpFlag", A.data.regExpFlag, "", void 0, "i:不区分大小写  g:全局");
                      Reflect.set(F.props, U, r(i.data));
                      let W = a.createSectionContainerItem_input(F),
                        ee = G("映射为", "replaceValue", A.data.replaceValue, "", void 0, "");
                      Reflect.set(ee.props, U, r(i.data));
                      let ae = a.createSectionContainerItem_input(ee);
                      return { $data_searchValue: M, $data_isRegExp: L, $data_regExpFlag: W, $data_replaceValue: ae };
                    },
                    x = w.createElement("div", {
                      className: "rule-form-ulist-dynamic",
                      innerHTML: `
									<div class="rule-form-ulist-dynamic__inner">

									</div>
									<div class="pops-panel-button pops-panel-button-no-icon">
										<button class="pops-panel-button_inner" type="button" data-type="default">
											<i class="pops-bottom-icon" is-loading="false"></i>
											<span class="pops-panel-button-text">添加额外属性</span>
										</button>
									</div>`,
                    }),
                    v = x.querySelector(".rule-form-ulist-dynamic__inner"),
                    T = x.querySelector(".pops-panel-button"),
                    _ = (S) => {
                      let A = this.getTemplateData();
                      S = S ?? {
                        searchValue: A.data.searchValue,
                        isRegExp: A.data.isRegExp,
                        regExpFlag: A.data.regExpFlag,
                        replaceValue: A.data.replaceValue,
                      };
                      let R = w.createElement("div", {
                          className: "rule-form-ulist-dynamic__inner-container",
                          innerHTML: `
										<div class="dynamic-control-delete">
											<div class="pops-panel-button pops-panel-button-no-icon">
												<button class="pops-panel-button_inner" type="button" data-type="danger">
													<i class="pops-bottom-icon" is-loading="false"></i>
													<span class="pops-panel-button-text">×</span>
												</button>
											</div>
										</div>
										<ul class="dynamic-forms">

										</ul>`,
                        }),
                        M = R.querySelector(".dynamic-control-delete");
                      w.on(M, "click", (ae) => {
                        if ((p.preventEvent(ae), R.remove(), Array.isArray(i.dynamicData))) {
                          let fe = i.dynamicData.findIndex((he) => he == S);
                          fe !== -1 && i.dynamicData.splice(fe, 1);
                        }
                      });
                      let I = R.querySelector(".dynamic-forms"),
                        { $data_searchValue: L, $data_isRegExp: F, $data_regExpFlag: W, $data_replaceValue: ee } = k(S);
                      (I.appendChild(L), I.appendChild(F), I.appendChild(W), I.appendChild(ee), v.appendChild(R));
                    };
                  if (
                    (w.on(T, "click", (S) => {
                      (p.preventEvent(S), _());
                    }),
                    Array.isArray(i.dynamicData))
                  )
                    for (let S = 0; S < i.dynamicData.length; S++) {
                      const A = i.dynamicData[S];
                      _(A);
                    }
                  let D = k(i.data);
                  return (
                    o.appendChild(u),
                    o.appendChild(h),
                    o.appendChild(b),
                    o.appendChild(D.$data_searchValue),
                    o.appendChild(D.$data_isRegExp),
                    o.appendChild(D.$data_regExpFlag),
                    o.appendChild(D.$data_replaceValue),
                    o.appendChild(x),
                    o
                  );
                },
                onsubmit: (i, l, o) => {
                  let c = i.querySelectorAll(".rule-form-ulist > li"),
                    u = this.getTemplateData();
                  return (
                    l && (u.uuid = o.uuid),
                    c.forEach((d) => {
                      let h = Reflect.get(d, "__formConfig__"),
                        m = Reflect.get(h, "attributes"),
                        b = Reflect.get(d, U),
                        k = Reflect.get(m, ue),
                        x = Reflect.get(m, we),
                        v = b.get(k, x);
                      Reflect.has(u, k)
                        ? Reflect.set(u, k, v)
                        : Reflect.has(u.data, k)
                          ? Reflect.set(u.data, k, v)
                          : g.error(`${k}不在数据中`);
                    }),
                    i.querySelectorAll(".rule-form-ulist-dynamic__inner-container").forEach((d) => {
                      let h = {};
                      (d.querySelectorAll(".dynamic-forms > li").forEach((m) => {
                        let b = Reflect.get(m, "__formConfig__");
                        if (!b) return;
                        let k = Reflect.get(b, "attributes");
                        if (!k) return;
                        let x = Reflect.get(m, U),
                          v = Reflect.get(k, ue),
                          T = Reflect.get(k, we),
                          _ = x.get(v, T);
                        Reflect.set(h, v, _);
                      }),
                        u.dynamicData.push(h));
                    }),
                    u.name.trim() === ""
                      ? (f.error("规则名称不能为空"), { success: false, data: u })
                      : u.data.url.trim() === ""
                        ? (f.error("匹配网址不能为空"), { success: false, data: u })
                        : u.data.searchValue.trim() === "" ||
                            (Array.isArray(u.dynamicData) &&
                              u.dynamicData.findIndex((d) => d.searchValue.trim() === "") !== -1)
                          ? (f.error("字符规则不能为空"), { success: false, data: u })
                          : l
                            ? { success: this.updateData(u), data: u }
                            : { success: this.addData(u), data: u }
                  );
                },
              },
              ruleDelete: { enable: true, deleteCallBack: (i) => e.deleteData(i) },
            },
            data: () => this.getData(),
            getAddData: () => n(),
            getData: (i) => this.getData().find((c) => c.uuid === i.uuid) ?? i,
            getDataItemName: (i) => i.name ?? i.data.url,
            updateData: (i) => this.updateData(i),
            deleteData: (i) => this.deleteData(i),
          },
        };
      },
      getUrlMatchedRule(t = true, e = window.location.href) {
        let a = this.getData(),
          n = ne.getAllSubscribeRule(t);
        return (
          (a = a.concat(n)),
          a.filter((r) => {
            if (!(t && !r.enable)) return !!e.match(r.data.url);
          })
        );
      },
      getMappingData(t = window.location.href) {
        let e = this.getUrlMatchedRule(true, t),
          a = [];
        return (
          e.forEach((n) => {
            try {
              let r = Array.isArray(n.dynamicData) ? [...n.dynamicData].concat(n.data) : [n.data];
              for (let s = 0; s < r.length; s++) {
                const i = r[s];
                i.isRegExp
                  ? a.push({ searchValue: new RegExp(i.searchValue, i.regExpFlag), replaceValue: i.replaceValue })
                  : a.push({ searchValue: i.searchValue, replaceValue: i.replaceValue });
              }
            } catch (r) {
              g.error("字符映射规则转换发生错误：", r);
            }
          }),
          a
        );
      },
      getData() {
        return ie(this.$data.STORAGE_KEY, []);
      },
      setData(t) {
        pe(this.$data.STORAGE_KEY, t);
      },
      addData(t) {
        let e = this.getData();
        return e.findIndex((n) => n.uuid == t.uuid) === -1 ? (e.push(t), pe(this.$data.STORAGE_KEY, e), true) : false;
      },
      updateData(t) {
        let e = this.getData(),
          a = e.findIndex((r) => r.uuid == t.uuid),
          n = false;
        return (a !== -1 && ((n = true), (e[a] = t)), this.setData(e), n);
      },
      deleteData(t) {
        let e = this.getData(),
          a = e.findIndex((r) => r.uuid == t.uuid),
          n = false;
        return (a !== -1 && ((n = true), e.splice(a, 1)), this.setData(e), n);
      },
      clearData() {
        wt(this.$data.STORAGE_KEY);
      },
      exportRule(t = "rule.json", e = "rule-subscribe.json") {
        let a = Z.alert({
            title: { text: "请选择导出方式", position: "center" },
            content: {
              text: `
                    <div class="btn-control" data-mode="only-export-rule-list">导出规则</div>
                    <div class="btn-control" data-mode="export-to-subscribe">导出订阅规则</div>
                `,
              html: true,
            },
            btn: {
              ok: { enable: false },
              close: {
                enable: true,
                callback(i, l) {
                  i.close();
                },
              },
            },
            mask: { enable: true },
            drag: true,
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
				}
            `,
          }),
          n = a.$shadowRoot.querySelector(".btn-control[data-mode='only-export-rule-list']"),
          r = a.$shadowRoot.querySelector(".btn-control[data-mode='export-to-subscribe']"),
          s = (i, l) => {
            let o = new Blob([JSON.stringify(l, null, 4)]),
              c = window.URL.createObjectURL(o),
              u = document.createElement("a");
            ((u.href = c),
              (u.download = i),
              u.click(),
              setTimeout(() => {
                window.URL.revokeObjectURL(c);
              }, 1500));
          };
        (w.on(n, "click", (i) => {
          p.preventEvent(i);
          try {
            let l = this.getData();
            if (l.length === 0) {
              f.warning("规则为空，无需导出");
              return;
            }
            (s(t, l), a.close());
          } catch (l) {
            f.error(l.toString(), { consoleLogContent: true });
          }
        }),
          w.on(r, "click", (i) => {
            p.preventEvent(i);
            const l = this;
            a.close();
            try {
              if (this.getData().length === 0) {
                f.warning("规则为空，无需导出");
                return;
              }
              let c = O.config.PanelHandlerComponents(),
                u = function (S) {
                  return {
                    get(A, R) {
                      return S[A] ?? R;
                    },
                    set(A, R) {
                      ((S[A] = R), ht.set(l.$data.EXPORT_CONFIG_KEY, S));
                    },
                  };
                },
                d = () => {
                  let S = ht.get(this.$data.EXPORT_CONFIG_KEY, {});
                  if (S?.title === "" || S.title == null) {
                    f.error("订阅标题不能为空");
                    return;
                  }
                  if (S.version == null) {
                    f.error("版本号不能为空");
                    return;
                  } else S.version = Number(S.version);
                  (S.homePage == null && (S.homePage = void 0),
                    (S.lastModified = Date.now()),
                    (S.ruleData = this.getData()),
                    s(e, S),
                    h.close());
                },
                h = Z.alert({
                  title: { text: "请填写导出配置", position: "center" },
                  content: {
                    text: `
							
						`,
                    html: !0,
                  },
                  btn: {
                    ok: {
                      enable: !0,
                      text: "导出",
                      callback(S, A) {
                        d();
                      },
                    },
                    close: {
                      enable: !0,
                      callback(S, A) {
                        S.close();
                      },
                    },
                  },
                  mask: { enable: !0 },
                  drag: !0,
                  width: K.info.width,
                  height: K.info.height,
                  style: `
						${O.config.cssText.panelCSS}

						.pops-alert-content li{
							list-style-type: none;
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin: 10px;
						}
					`,
                }),
                m = h.$shadowRoot.querySelector(".pops-alert-content"),
                b = ht.get(this.$data.EXPORT_CONFIG_KEY, {}),
                k = G("订阅标题", "title", "", "", void 0, "");
              Reflect.set(k.props, U, u(b));
              let x = c.createSectionContainerItem_input(k),
                v = G("版本号", "version", "", "", void 0, "", !1);
              Reflect.set(v.props, U, u(b));
              let T = c.createSectionContainerItem_input(v),
                _ = G("主页地址", "homePage", "", "", void 0, "选填");
              Reflect.set(_.props, U, u(b));
              let D = c.createSectionContainerItem_input(_);
              (w.append(m, x), w.append(m, T), w.append(m, D));
            } catch (o) {
              f.error(o.toString(), { consoleLogContent: true });
            }
          }));
      },
      importRule(t) {
        let e = Z.alert({
            title: { text: "请选择导入方式", position: "center" },
            content: {
              text: `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
              html: true,
            },
            btn: {
              ok: { enable: false },
              close: {
                enable: true,
                callback(l, o) {
                  l.close();
                },
              },
            },
            mask: { enable: true },
            drag: true,
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
            `,
          }),
          a = e.$shadowRoot.querySelector(".btn-control[data-mode='local']"),
          n = e.$shadowRoot.querySelector(".btn-control[data-mode='network']"),
          r = e.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),
          s = (l) => {
            let o = this.getData(),
              c = [];
            for (let u = 0; u < l.length; u++) {
              const d = l[u];
              o.findIndex((m) => m.uuid === d.uuid) !== -1 || c.push(d);
            }
            ((o = o.concat(c)), this.setData(o), f.success(`共 ${l.length} 条规则，新增 ${c.length} 条`), t?.());
          },
          i = (l) =>
            new Promise((o) => {
              let c = p.toJSON(l);
              if (!Array.isArray(c)) {
                (g.error(c), f.error("导入失败，格式不符合（不是数组）", { consoleLogContent: true }), o(false));
                return;
              }
              if (!c.length) {
                (f.error("导入失败，解析出的数据为空", { consoleLogContent: true }), o(false));
                return;
              }
              (s(c), o(true));
            });
        (w.on(a, "click", (l) => {
          (p.preventEvent(l), e.close());
          let o = w.createElement("input", { type: "file", accept: ".json" });
          (w.on(o, ["propertychange", "input"], (c) => {
            if (!o.files?.length) return;
            let u = o.files[0],
              d = new FileReader();
            ((d.onload = () => {
              i(d.result);
            }),
              d.readAsText(u, "UTF-8"));
          }),
            o.click());
        }),
          w.on(n, "click", (l) => {
            (p.preventEvent(l), e.close());
            let o = Z.prompt({
                title: { text: "网络导入", position: "center" },
                content: { text: "", placeholder: "请填写URL", focus: true },
                btn: {
                  close: {
                    enable: true,
                    callback(d, h) {
                      d.close();
                    },
                  },
                  ok: {
                    text: "导入",
                    callback: async (d, h) => {
                      let m = d.text;
                      if (p.isNull(m)) {
                        f.error("请填入完整的url");
                        return;
                      }
                      let b = f.loading("正在获取配置..."),
                        k = await E.get(m, { allowInterceptConfig: false });
                      if ((b.close(), !k.status)) {
                        (g.error(k), f.error("获取配置失败", { consoleLogContent: true }));
                        return;
                      }
                      (await i(k.data.responseText)) && d.close();
                    },
                  },
                  cancel: { enable: false },
                },
                mask: { enable: true },
                drag: true,
                width: K.info.width,
                height: "auto",
              }),
              c = o.$shadowRoot.querySelector("input"),
              u = o.$shadowRoot.querySelector(".pops-prompt-btn-ok");
            (w.on(c, ["input", "propertychange"], (d) => {
              w.val(c) === "" ? w.attr(u, "disabled", "true") : w.removeAttr(u, "disabled");
            }),
              w.listenKeyboard(c, "keydown", (d, h, m) => {
                d === "Enter" && m.length === 0 && w.val(c) !== "" && p.dispatchEvent(u, "click");
              }),
              p.dispatchEvent(c, "input"));
          }),
          w.on(r, "click", async (l) => {
            (p.preventEvent(l), e.close());
            let o = await p.getClipboardInfo();
            if (o.error != null) {
              f.error(o.error.toString());
              return;
            }
            if (o.content.trim() === "") {
              f.warning("获取到的剪贴板内容为空");
              return;
            }
            await i(o.content);
          }));
      },
    },
    Y = new Vt({ STORAGE_API_KEY: "websiteRule", STORAGE_KEY: "rule-subscribe" });
  class ba {
    option;
    storageApi;
    constructor(e) {
      ((this.option = e), (this.storageApi = new Ve(e.STORAGE_API_KEY)));
    }
    getAllSubscribe() {
      return this.storageApi.get(this.option.STORAGE_KEY, []);
    }
    getAllSubscribeRule(e = false) {
      let a = this.getAllSubscribe(),
        n = [];
      for (let r = 0; r < a.length; r++) {
        const s = a[r];
        if (!(e && !s.data.enable))
          for (let i = 0; i < s.subscribeData.ruleData.length; i++) {
            const l = s.subscribeData.ruleData[i];
            (e && !l.setting.enable) || ((l.subscribeUUID = s.uuid), n.push(l));
          }
      }
      return n;
    }
    getSubscribe(e) {
      return this.getAllSubscribe().find((n) => n.uuid == e);
    }
    getSubscribeRule(e, a) {
      let n = this.getSubscribe(e);
      if (n) return n.subscribeData.ruleData.find((s) => s.key === a);
    }
    deleteAllSubscribe() {
      this.storageApi.delete(this.option.STORAGE_KEY);
    }
    deleteSubscribe(e) {
      let a = typeof e == "string" ? e : e.uuid,
        n = this.getAllSubscribe(),
        r = n.findIndex((s) => s.uuid === a);
      return (r !== -1 && (n.splice(r, 1), this.storageApi.set(this.option.STORAGE_KEY, n)), r !== -1);
    }
    clearSubscribe(e) {
      let a = typeof e == "string" ? e : e.uuid,
        n = this.getAllSubscribe(),
        r = n.findIndex((s) => s.uuid === a);
      return r !== -1
        ? ((n[r].subscribeData.ruleData = []), this.storageApi.set(this.option.STORAGE_KEY, n), true)
        : false;
    }
    addSubscribe(e) {
      let a = false,
        n = this.getAllSubscribe();
      return (
        n.findIndex((s) => s.uuid === e.uuid) === -1 && (n.push(e), (a = true)),
        a && this.storageApi.set(this.option.STORAGE_KEY, n),
        a
      );
    }
    updateSubscribe(e) {
      let a = false,
        n = this.getAllSubscribe(),
        r = n.findIndex((s) => s.uuid === e.uuid);
      return (r !== -1 && ((n[r] = e), (a = true)), a && this.storageApi.set(this.option.STORAGE_KEY, n), a);
    }
    updateSubscribeRule(e, a) {
      let n = false,
        r = this.getAllSubscribe(),
        s = r.find((i) => i.uuid === e);
      if (s) {
        let i = s.subscribeData.ruleData.findIndex((l) => l.key === a.key);
        i !== -1 && ((s.subscribeData.ruleData[i] = a), (n = true));
      }
      return (n && this.storageApi.set(this.option.STORAGE_KEY, r), true);
    }
    deleteSubscribeRule(e, a) {
      let n = false,
        r = typeof a == "string" ? a : a.key,
        s = this.getAllSubscribe(),
        i = s.findIndex((l) => l.uuid === e);
      if (i !== -1) {
        let o = s[i].subscribeData.ruleData.findIndex((c) => c.key === r);
        o !== -1 &&
          (s[i].subscribeData.ruleData.splice(o, 1), this.storageApi.set(this.option.STORAGE_KEY, s), (n = true));
      }
      return n;
    }
    async getSubscribeInfo(e) {
      let a = await E.get(e, {
        allowInterceptConfig: false,
        timeout: 1e4,
        headers: { "User-Agent": p.getRandomPCUA() },
      });
      if (!a.status) return (g.error(a), { data: null, msg: "获取订阅信息失败" });
      let n = a.data.responseText,
        r = p.toJSON(n);
      return typeof r.title == "string" &&
        typeof r.version == "number" &&
        typeof r.lastModified == "number" &&
        Array.isArray(r.ruleData)
        ? {
            data: {
              uuid: p.generateUUID(),
              subscribeData: r,
              data: { enable: true, url: e, latestUpdateTime: Date.now(), updateFailedTime: null },
            },
            msg: "",
          }
        : (g.error(r), { data: null, msg: "订阅链接的内容格式不正确" });
    }
    async updateAllSubscribe() {
      let e = this.getAllSubscribe();
      for (let a = 0; a < e.length; a++) {
        const n = e[a];
        if (
          !n.data.enable ||
          (typeof n.data.updateFailedTime == "number" &&
            p.formatTime(n.data.updateFailedTime, "yyyyMMdd") === p.formatTime(Date.now(), "yyyyMMdd")) ||
          (typeof n.data.latestUpdateTime == "number" &&
            p.formatTime(Date.now(), "yyyyMMdd") === p.formatTime(n.data.latestUpdateTime, "yyyyMMdd"))
        )
          continue;
        let r = await this.getSubscribeInfo(n.data.url),
          s = false;
        if (r.data) {
          let i = r.data;
          ((i.uuid = n.uuid), (i.data = n.data), (i.data.latestUpdateTime = Date.now()));
          let l = i.data.title || i.subscribeData.title || i.data.url;
          ((n.data.updateFailedTime = null),
            (s = this.updateSubscribe(i)),
            s ? g.success(`更新订阅成功：${l}`) : g.error(`更新订阅失败：${l}`, n));
        } else g.error("更新订阅失败：" + r.msg, n);
        s || ((n.data.updateFailedTime = Date.now()), this.updateSubscribe(n));
      }
    }
    importSubscribe(e) {
      let a = Z.alert({
          title: { text: "请选择导入方式", position: "center" },
          content: {
            text: `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
            html: true,
          },
          btn: {
            ok: { enable: false },
            close: {
              enable: true,
              callback(o, c) {
                o.close();
              },
            },
          },
          mask: { enable: true },
          drag: true,
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
				}
            `,
        }),
        n = a.$shadowRoot.querySelector(".btn-control[data-mode='local']"),
        r = a.$shadowRoot.querySelector(".btn-control[data-mode='network']"),
        s = a.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),
        i = (o) => {
          let c = this.getAllSubscribe(),
            u = [];
          for (let d = 0; d < o.length; d++) {
            const h = o[d];
            c.findIndex((b) => b.uuid === h.uuid) !== -1 || u.push(h);
          }
          ((c = c.concat(u)),
            this.storageApi.set(this.option.STORAGE_KEY, c),
            f.success(`共 ${o.length} 条订阅，新增 ${u.length} 条`),
            e?.());
        },
        l = (o) =>
          new Promise((c) => {
            let u = p.toJSON(o);
            if (!Array.isArray(u)) {
              (g.error(u), f.error("导入失败，格式不符合（不是数组）", { consoleLogContent: true }), c(false));
              return;
            }
            if (!u.length) {
              (f.error("导入失败，解析出的数据为空", { consoleLogContent: true }), c(false));
              return;
            }
            let d = u[0];
            if (
              !(
                typeof d.data == "object" &&
                d.data != null &&
                typeof d.subscribeData == "object" &&
                d.subscribeData != null &&
                typeof d.uuid == "string"
              )
            ) {
              (f.error("导入失败，解析的格式不符合", { consoleLogContent: true }), c(false));
              return;
            }
            (i(u), c(true));
          });
      (w.on(n, "click", (o) => {
        (p.preventEvent(o), a.close());
        let c = w.createElement("input", { type: "file", accept: ".json" });
        (w.on(c, ["propertychange", "input"], (u) => {
          if (!c.files?.length) return;
          let d = c.files[0],
            h = new FileReader();
          ((h.onload = () => {
            l(h.result);
          }),
            h.readAsText(d, "UTF-8"));
        }),
          c.click());
      }),
        w.on(r, "click", (o) => {
          (p.preventEvent(o), a.close());
          let c = Z.prompt({
              title: { text: "网络导入", position: "center" },
              content: { text: "", placeholder: "请填写URL", focus: true },
              btn: {
                close: {
                  enable: true,
                  callback(h, m) {
                    h.close();
                  },
                },
                ok: {
                  text: "导入",
                  callback: async (h, m) => {
                    let b = h.text;
                    if (p.isNull(b)) {
                      f.error("请填入完整的url");
                      return;
                    }
                    let k = f.loading("正在获取配置..."),
                      x = await E.get(b, { allowInterceptConfig: false });
                    if ((k.close(), !x.status)) {
                      (g.error(x), f.error("获取配置失败", { consoleLogContent: true }));
                      return;
                    }
                    (await l(x.data.responseText)) && h.close();
                  },
                },
                cancel: { enable: false },
              },
              mask: { enable: true },
              drag: true,
              width: K.info.width,
              height: "auto",
            }),
            u = c.$shadowRoot.querySelector("input"),
            d = c.$shadowRoot.querySelector(".pops-prompt-btn-ok");
          (w.on(u, ["input", "propertychange"], (h) => {
            w.val(u) === "" ? w.attr(d, "disabled", "true") : w.removeAttr(d, "disabled");
          }),
            w.listenKeyboard(u, "keydown", (h, m, b) => {
              h === "Enter" && b.length === 0 && w.val(u) !== "" && p.dispatchEvent(d, "click");
            }),
            p.dispatchEvent(u, "input"));
        }),
        w.on(s, "click", async (o) => {
          (p.preventEvent(o), a.close());
          let c = await p.getClipboardInfo();
          if (c.error != null) {
            f.error(c.error.toString());
            return;
          }
          if (c.content.trim() === "") {
            f.warning("获取到的剪贴板内容为空");
            return;
          }
          await l(c.content);
        }));
    }
    exportSubscribe(e = "rule.json") {
      let a = Z.alert({
          title: { text: "请选择导出方式", position: "center" },
          content: {
            text: `
                    <div class="btn-control" data-mode="only-export-rule-list">导出订阅</div>
                `,
            html: true,
          },
          btn: {
            ok: { enable: false },
            close: {
              enable: true,
              callback(s, i) {
                s.close();
              },
            },
          },
          mask: { enable: true },
          drag: true,
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
				}
            `,
        }),
        n = a.$shadowRoot.querySelector(".btn-control[data-mode='only-export-rule-list']"),
        r = (s, i) => {
          let l = new Blob([JSON.stringify(i, null, 4)]),
            o = window.URL.createObjectURL(l),
            c = document.createElement("a");
          ((c.href = o),
            (c.download = s),
            c.click(),
            setTimeout(() => {
              window.URL.revokeObjectURL(o);
            }, 1500));
        };
      w.on(n, "click", (s) => {
        p.preventEvent(s);
        try {
          let i = this.getAllSubscribe();
          if (i.length === 0) {
            f.warning("订阅为空，无需导出");
            return;
          }
          (r(e, i), a.close());
        } catch (i) {
          f.error(i.toString(), { consoleLogContent: true });
        }
      });
    }
  }
  const te = new ba({ STORAGE_API_KEY: "userRule", STORAGE_KEY: "rule-subscribe" }),
    Xe = {
      init() {
        this.updateAllSubscribe();
      },
      getPanelView(t = 0) {
        let e = {
          title: "规则管理器",
          contentConfig: [le.getRulePanelViewOption(), xe.getRulePanelViewOption(), ut.getRulePanelViewOption()],
        };
        return (
          (e.contentConfig = e.contentConfig.map(
            (n, r) => (
              (typeof t == "number" && t === r) || (typeof t == "string" && t === n.title)
                ? (n.isDefault = true)
                : (n.isDefault = false),
              n
            )
          )),
          new Nt(e)
        );
      },
      showView(t) {
        this.getPanelView(t).showView();
      },
      updateAllSubscribe() {
        (te.updateAllSubscribe(), Y.updateAllSubscribe(), ne.updateAllSubscribe());
      },
    },
    Ze = {
      depthQueryShadowRootAllNode(t) {
        let e = [];
        function a(n) {
          let r = Array.from(n.querySelectorAll("*"));
          return (
            r.forEach((s) => {
              if (s.classList && s.classList.contains("pops-shadow-container")) return;
              let i = s.shadowRoot;
              i && i instanceof ShadowRoot && e.push({ shadowRoot: i, childNode: a(i) });
            }),
            r
          );
        }
        return (a(t), e);
      },
      ignoreStrRemove(t, e = false) {
        let a = [];
        return (
          a.length &&
            a.forEach((n) => {
              if (n != null)
                if (e) n.innerHTML != null && (t = t.replaceAll(n.innerHTML, ""));
                else {
                  let r = n.innerText || n.textContent;
                  r != null && (r = r.replaceAll(r, ""));
                }
            }),
          t
        );
      },
      getPageText(t = document.documentElement, e) {
        let a = [];
        if ((a.push(t?.textContent || t?.innerText || ""), e)) {
          let n = this.depthQueryShadowRootAllNode(t);
          n.length &&
            n.forEach((r) => {
              let s = r.shadowRoot.textContent;
              s && a.push(s);
            });
        }
        return ((a = a.filter((n) => n !== "")), a);
      },
      getPageHTML(t = document.documentElement, e) {
        let a = [];
        if ((a.push(t.innerHTML), e)) {
          let n = this.depthQueryShadowRootAllNode(t);
          n.length &&
            n.forEach((r) => {
              let s = r.shadowRoot.innerHTML;
              s && a.push(s);
            });
        }
        return ((a = a.filter((n) => n !== "")), a);
      },
      getInputElementValue(t = document.documentElement, e) {
        let a = [];
        if (
          (Array.from(t.querySelectorAll("input")).forEach((n) => {
            a.push(n.value);
          }),
          e)
        ) {
          let n = this.depthQueryShadowRootAllNode(t);
          n.length &&
            n.forEach((r) => {
              for (let s = 0; s < r.childNode.length; s++) {
                const i = r.childNode[s];
                i instanceof HTMLInputElement && i.value && a.push(i.value);
              }
            });
        }
        return a;
      },
      getTextAreaElementValue(t = document.documentElement, e) {
        let a = [];
        if (
          (Array.from(t.querySelectorAll("textarea")).forEach((n) => {
            a.push(n.value);
          }),
          e)
        ) {
          let n = this.depthQueryShadowRootAllNode(t);
          n.length &&
            n.forEach((r) => {
              for (let s = 0; s < r.childNode.length; s++) {
                const i = r.childNode[s];
                i instanceof HTMLTextAreaElement && i.value && a.push(i.value);
              }
            });
        }
        return a;
      },
      getSelectContent() {
        let t = { text: "", html: "" },
          e = window.getSelection();
        if (e) {
          t.text = e.toString();
          let a = w.createElement("div");
          if (!e.isCollapsed) {
            const n = e.getRangeAt(0).cloneContents();
            (a.appendChild(n), (t.html = w.html(a)));
          }
        }
        return t;
      },
    },
    ka = `.whitesevPopNetDiskHistoryMatch .pops-confirm-content {\r
  display: flex;\r
  flex-direction: column;\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content ul {\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content li {\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: center;\r
  border-radius: 10px;\r
  box-shadow:\r
    0 0.3px 0.6px rgb(0 0 0 / 6%),\r
    0 0.7px 1.3px rgb(0 0 0 / 8%),\r
    0 1.3px 2.5px rgb(0 0 0 / 10%),\r
    0 2.2px 4.5px rgb(0 0 0 / 12%),\r
    0 4.2px 8.4px rgb(0 0 0 / 14%),\r
    0 10px 20px rgb(0 0 0 / 20%);\r
  margin: 20px 10px;\r
  padding: 10px;\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search {\r
  /*height: 11%;*/\r
  flex: 0;\r
  padding: 5px 0px;\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-table {\r
  /*height: calc(85% - 40px);*/\r
  overflow: auto;\r
  flex: 1;\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-page {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  /*margin-top: 10px;*/\r
  flex: 0;\r
  padding: 5px 0px;\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search input {\r
  border: none;\r
  border-bottom: 1px solid #000000;\r
  padding: 0px 5px;\r
  line-height: normal;\r
  width: -moz-available;\r
  width: -webkit-fill-available;\r
  width: fill-available;\r
  margin: 5px 5px 0px 5px;\r
  background: none;\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search input:focus-visible {\r
  outline: none;\r
  border-bottom: 1px solid #0009ff;\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link {\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a {\r
  color: #ff4848;\r
  font-size: 0.8em;\r
  border: none;\r
  word-break: break-word;\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a[isvisited="true"] {\r
  color: #8b8888;\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon {\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon .netdisk-icon-img {\r
  width: 28px;\r
  height: 28px;\r
  min-width: 28px;\r
  min-height: 28px;\r
  font-size: 0.8em;\r
  border-radius: 10px;\r
  box-shadow:\r
    0 0.3px 0.6px rgb(0 0 0 / 6%),\r
    0 0.7px 1.3px rgb(0 0 0 / 8%),\r
    0 1.3px 2.5px rgb(0 0 0 / 10%),\r
    0 2.2px 4.5px rgb(0 0 0 / 12%),\r
    0 4.2px 8.4px rgb(0 0 0 / 14%),\r
    0 10px 20px rgb(0 0 0 / 20%);\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url {\r
  color: #000;\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url {\r
  color: #000;\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete {\r
  background: #263cf3;\r
  color: #fff;\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete:active {\r
  background: #6e7be8;\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link,\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon,\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url,\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url,\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-add-time,\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-update-time,\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url-title,\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions {\r
  display: flex;\r
  margin: 5px 0px;\r
}\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link p,\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon p,\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url p,\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url p,\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-add-time p,\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-update-time p,\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url-title p,\r
.whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions p {\r
  min-width: 80px;\r
  max-width: 80px;\r
  align-self: center;\r
}\r
`,
    dt = {
      storageKey: "netDiskHistoryMatch",
      isSetOtherEvent: false,
      dataPaging: void 0,
      show() {
        let t = this.getStorageData(),
          e = "",
          a = this;
        ((t = this.orderNetDiskHistoryMatchData(t)),
          (e = `
        <div class="netdiskrecord-search">
            <input type="text" placeholder="搜索链接/网址/网址标题，按下回车进行搜索（可正则）">
        </div>
        <div class="netdiskrecord-table">
			<ul></ul>
		</div>
        <div class="netdiskrecord-page">

        </div>`),
          (C.$el.$historyView = Z.confirm(
            {
              title: { text: "历史匹配记录", position: "center" },
              content: { text: e, html: true },
              btn: {
                reverse: true,
                position: "space-between",
                close: {
                  callback(n) {
                    (n.close(), (C.$el.$historyView = void 0));
                  },
                },
                ok: {
                  enable: false,
                  callback(n) {
                    (n.close(), (C.$el.$historyView = void 0));
                  },
                },
                cancel: {
                  enable: true,
                  text: "关闭",
                  callback(n) {
                    (n.close(), (C.$el.$historyView = void 0));
                  },
                },
                other: {
                  enable: true,
                  text: `清空所有(${t.length})`,
                  type: "xiaomi-primary",
                  callback: () => {
                    Z.confirm({
                      title: { text: "删除", position: "center" },
                      content: { text: "确定清空所有的记录？", html: false },
                      btn: {
                        ok: {
                          enable: true,
                          callback(n) {
                            (a.clearStorageData(), a.clearLinkElements(), a.clearPageNavigator(), n.close());
                            let r = C.$el.$historyView.$shadowRoot.querySelector(".netdiskrecord-page"),
                              s = C.$el.$historyView.$shadowRoot.querySelector(".pops-confirm-btn-other");
                            (w.html(r, ""), w.text(s, w.text(s).replace(/[\d]+/gi, "0")));
                          },
                        },
                        cancel: { text: "取消", enable: true },
                      },
                    });
                  },
                },
              },
              mask: {
                clickCallBack(n) {
                  (n(), (C.$el.$historyView = null));
                },
              },
              class: "whitesevPopNetDiskHistoryMatch",
              style: ka,
            },
            C.$config.viewSizeConfig.historyMatchView
          )),
          this.addLinkElements(t.slice(0, 9)),
          this.setDataPaging(t),
          this.setEvent(C.$el.$historyView.$shadowRoot),
          this.setSearchEvent(),
          it.setRightClickMenu(
            C.$el.$historyView.$shadowRoot.querySelector(".whitesevPopNetDiskHistoryMatch"),
            ".netdiskrecord-link a",
            true
          ));
      },
      getLinkContainer() {
        return C.$el.$historyView.$shadowRoot.querySelector(".netdiskrecord-table ul");
      },
      addLinkElements(t) {
        Array.isArray(t) || (t = [t]);
        let e = document.createDocumentFragment();
        for (let n = 0; n < t.length; n++) {
          let r = t[n],
            s = this.createLinkItemElementInfo(r);
          e.appendChild(s.$liItemContainer);
        }
        this.getLinkContainer().appendChild(e);
      },
      createLinkItemElementInfo(t) {
        let e = N.handleLinkShow({
            ruleKeyName: t.ruleKeyName,
            ruleIndex: t.ruleIndex,
            shareCode: t.shareCode,
            accessCode: t.accessCode,
            matchText: t.matchText,
          }),
          a = w.createElement("li", {
            innerHTML: `
			<div class="netdiskrecord-link">
				<p>链接</p>
				<a  href="javascript:;" isvisited="false">${e}</a>
			</div>
			<div class="netdiskrecord-icon">
				<p>网盘</p>
				<div class="netdisk-icon-img"></div>
			</div>
			<div class="netdiskrecord-url">
				<p>网址</p>
				<a href="${t.url}" target="_blank">${t.url}</a>
			</div>
			<div class="netdiskrecord-url-title">
				<p>网址标题</p>
				${t.title}
			</div>
			<div class="netdiskrecord-add-time">
				<p>记录时间</p>
				${p.formatTime(t.addTime)}
			</div>
			<div class="netdiskrecord-update-time">
				<p>更新时间</p>
				${p.formatTime(t.updateTime)}
			</div>
			<div class="netdiskrecord-functions">
				<p>功能</p>
				<button class="btn-delete" type="button">删除</button>
			</div>
			`,
          }),
          n = a.querySelector(".netdiskrecord-link"),
          r = n.querySelector("a"),
          s = a.querySelector(".netdiskrecord-icon"),
          i = a.querySelector(".netdisk-icon-img"),
          l = a.querySelector(".netdiskrecord-url"),
          o = a.querySelector(".netdiskrecord-url-title"),
          c = a.querySelector(".netdiskrecord-add-time"),
          u = a.querySelector(".netdiskrecord-update-time"),
          d = a.querySelector(".netdiskrecord-functions"),
          h = d.querySelector(".btn-delete");
        if (
          (de.handleBoxAttrRuleInfo(
            { ruleKeyName: t.ruleKeyName, ruleIndex: t.ruleIndex, shareCode: t.shareCode, accessCode: t.accessCode },
            r
          ),
          (i.style.cssText = `background: url(${C.$inst.icon.getIcon(t.ruleKeyName)}) no-repeat;background-size:100%`),
          t.url !== t.topURL)
        ) {
          let m = w.createElement("div", {
            className: "netdiskrecord-top-url",
            innerHTML: `
				<p>Top网址</p>
				<a href="${t.topURL}" target="_blank">${t.topURL}</a>
				`,
          });
          w.after(l, m);
        }
        return (
          h.setAttribute("data-json", JSON.stringify(t)),
          Reflect.set(h, "data-json", t),
          {
            $liItemContainer: a,
            $link: n,
            $linkAnchor: r,
            $icon: s,
            $iconImg: i,
            $url: l,
            $urlTitle: o,
            $addTime: c,
            $updateTime: u,
            $features: d,
            $featuresBtnDelete: h,
            html: a.outerHTML,
          }
        );
      },
      clearLinkElements() {
        let t = this.getLinkContainer();
        w.empty(t);
      },
      clearPageNavigator() {
        w.remove(C.$el.$historyView.$shadowRoot.querySelectorAll(".netdiskrecord-page > *"));
      },
      setEvent(t) {
        let e = this;
        (Ye.setNetDiskUrlClickEvent(t, ".netdiskrecord-link a"),
          w.on(t, "click", ".netdiskrecord-functions button.btn-delete", function (a) {
            let n = t.querySelector(".pops-confirm-btn-other"),
              r = Z.loading({
                parent: e.getLinkContainer(),
                content: { text: "删除中..." },
                only: true,
                addIndexCSS: false,
              }),
              s = a.target,
              i = s.getAttribute("data-json");
            (s.closest("li")?.remove(), e.deleteStorageData(i), r?.close());
            let l = w.text(n),
              o = l.match(/[\d]+/gi),
              c = parseInt(o[o.length - 1]);
            (c--, (l = l.replace(/[\d]+/gi, c.toString())), w.text(n, l));
            let u = e.getStorageData();
            ((u = e.orderNetDiskHistoryMatchData(u)),
              e.dataPaging.refresh(u),
              e.pageChangeCallBack(u, e.dataPaging.CONFIG.currentPage));
          }));
      },
      pageChangeCallBack(t, e) {
        let a = (e - 1) * 10,
          n = t.slice(a, a + 9);
        (this.clearLinkElements(), this.addLinkElements(n));
      },
      setDataPaging(t) {
        let e = this,
          a = new It({
            data: t,
            pageShowDataMaxCount: 10,
            pageMaxStep: O.isPhone() ? 2 : 4,
            currentPage: 1,
            pageChangeCallBack: function (r) {
              e.pageChangeCallBack(t, r);
            },
          });
        ((this.dataPaging = a), a.addCSS(C.$el.$historyView.$shadowRoot));
        const n = C.$el.$historyView.$shadowRoot.querySelector(".whitesevPopNetDiskHistoryMatch .netdiskrecord-page");
        a.append(n);
      },
      setSearchEvent() {
        let t = false,
          e,
          a = this;
        function n() {
          if (t) return;
          ((t = true),
            (e = Z.loading({
              parent: a.getLinkContainer(),
              content: { text: "搜索中..." },
              only: true,
              addIndexCSS: false,
            })));
          let r = C.$el.$historyView.$shadowRoot
              .querySelector(".whitesevPopNetDiskHistoryMatch .netdiskrecord-search input")
              .value.trim(),
            s = a.getStorageData();
          if (((s = a.orderNetDiskHistoryMatchData(s)), r === "")) {
            (a.clearLinkElements(),
              a.clearPageNavigator(),
              a.addLinkElements(s.slice(0, 9)),
              e?.close(),
              (t = false),
              a.setDataPaging(s));
            return;
          }
          g.info("历史匹配记录-搜索：" + r);
          let i = s.filter((l) => {
            let o = N.handleLinkShow({
              ruleKeyName: l.ruleKeyName,
              ruleIndex: l.ruleIndex,
              shareCode: l.shareCode,
              accessCode: l.accessCode,
              matchText: l.matchText,
              showToast: false,
            });
            o || g.info(l);
            let c = p.stringToRegular(r, "i");
            if (
              (typeof o == "string" && o.match(c)) ||
              l.shareCode.match(c) ||
              l.url.match(c) ||
              l.topURL.match(c) ||
              l.title.match(c)
            )
              return true;
          });
          (a.clearLinkElements(), a.clearPageNavigator(), a.addLinkElements(i), e?.close(), (e = void 0), (t = false));
        }
        w.listenKeyboard(
          C.$el.$historyView.$shadowRoot.querySelector(".whitesevPopNetDiskHistoryMatch .netdiskrecord-search input"),
          "keypress",
          (r) => {
            r === "Enter" && n();
          }
        );
      },
      orderNetDiskHistoryMatchData(t) {
        let e = y.historyMatch["netdisk-history-match-ordering-rule"].value,
          a = e.indexOf("降序") !== -1,
          n = e.indexOf("记录时间") !== -1 ? "addTime" : "updateTime";
        return (p.sortListByProperty(t, (r) => r[n], a), t);
      },
      queryAccessCode(t, e, a) {
        let n = this.getStorageData();
        for (let r = 0; r < n.length; r++) {
          const s = n[r];
          if (s.ruleKeyName === t && s.shareCode === e) return (a && p.isNotNull(s.accessCode), s.accessCode);
        }
      },
      syncAccessCode(t, e, a, n) {
        if (y.historyMatch.saveMatchNetDisk.value) {
          if (dt.changeMatchedDataAccessCode(t, e, a, n)) return (g.success("已成功同步访问码至历史匹配记录"), true);
          g.error("同步访问码至历史匹配记录失败");
        }
        return false;
      },
      changeMatchedDataAccessCode(t, e, a, n) {
        let r = this.getStorageData(),
          s = false;
        for (let i = 0; i < r.length; i++) {
          const l = r[i];
          l.ruleKeyName === t &&
            String(l.ruleIndex) === String(e) &&
            l.shareCode === a &&
            ((s = true), (r[i].accessCode = n), (r[i].updateTime = Date.now()));
        }
        return (s && this.saveStorageData(r), s);
      },
      changeMatchedData(t, e, a, n, r) {
        if (!y.historyMatch.saveMatchNetDisk.value) return false;
        let s = this.getStorageData(),
          i = false;
        for (let l = 0; l < s.length; l++) {
          const o = s[l];
          if (
            o.ruleKeyName === t &&
            a.startsWith(o.shareCode) &&
            o.ruleIndex === e &&
            (y.historyMatch["netdisk-history-match-merge-same-link"].value ||
              (o.url === window.location.href && o.topURL === top.window.location.href))
          ) {
            i = true;
            let c = false;
            if (
              (r.trim() !== "" &&
                o.matchText !== r &&
                ((c = true), g.success("匹配历史记录 -> 设置新的matchText", [r]), (s[l].matchText = r)),
              p.isNotNull(n) &&
                o.accessCode !== n &&
                ((c = true), g.success("匹配历史记录 -> 修改accessCode"), (s[l].accessCode = n)),
              c)
            ) {
              ((s[l].updateTime = Date.now()),
                s[l].title && (s[l].title = document.title),
                y.historyMatch["netdisk-history-match-merge-same-link"].value &&
                  ((s[l].url = window.location.href), (s[l].topURL = top.window.location.href)));
              break;
            }
          }
        }
        if (!i) {
          ((i = true), g.success("匹配历史记录 -> 增加新的"));
          let l = Date.now();
          s = [
            ...s,
            {
              url: window.location.href,
              topURL: top.window.location.href,
              ruleKeyName: t,
              ruleIndex: e,
              shareCode: a,
              accessCode: n,
              addTime: l,
              updateTime: l,
              title: document.title || top.document.title,
              matchText: r,
            },
          ];
        }
        return (this.saveStorageData(s), true);
      },
      checkAndRepairLocalData() {
        let t = 0,
          e = ie(this.storageKey);
        if (Array.isArray(e))
          for (let a = 0; a < e.length; a++) {
            let n = false;
            const r = e[a];
            (typeof r.matchText != "string" && ((r.matchText = ""), (n = true)),
              typeof r.ruleKeyName != "string" &&
                typeof r.netDiskName == "string" &&
                ((r.ruleKeyName = r.netDiskName), delete r.netDiskName, (n = true)),
              typeof r.ruleIndex != "number" &&
                typeof r.netDiskIndex == "number" &&
                ((r.ruleIndex = r.netDiskIndex), delete r.netDiskIndex, (n = true)),
              n && t++);
          }
        else e = [];
        return (this.saveStorageData(e), { count: e.length, repairCount: t });
      },
      getStorageData() {
        let t = ie(this.storageKey, []);
        return (t == null && ((t = []), this.saveStorageData(t)), t);
      },
      saveStorageData(t) {
        pe(this.storageKey, t);
      },
      deleteStorageData(t) {
        let e = false,
          a = this.getStorageData();
        for (let n = 0; n < a.length; n++)
          if (JSON.stringify(a[n]) === t) {
            (g.success("删除 ===> ", a[n]), a.splice(n, 1), (e = true));
            break;
          }
        return (e && this.saveStorageData(a), e);
      },
      clearStorageData() {
        this.saveStorageData([]);
      },
    },
    at = {
      addHost(t) {
        let e = this.getList();
        (e.includes(t) || e.push(t), this.updateList(e));
      },
      findHost(t) {
        return this.getList().findIndex((n) => n === t) !== -1;
      },
      removeHost(t) {
        let e = this.getList(),
          a = false,
          n = e.findIndex((r) => r === t);
        return (n !== -1 && ((a = true), e.splice(n, 1), this.updateList(e)), a);
      },
      getList() {
        let t = ie(z.neverTipWorkerInitErrorKey, []);
        return (Array.isArray(t) || (t = [t]), t);
      },
      updateList(t) {
        pe(z.neverTipWorkerInitErrorKey, t);
      },
    },
    ya = {
      $data: { ajaxHooker: null },
      execMatch(t) {
        y.match.toBeMatchedXhrHookResponseText.value &&
          (this.$data.ajaxHooker ||
            ((this.$data.ajaxHooker = p.ajaxHooker()),
            this.$data.ajaxHooker.hook((e) => {
              e.response = (a) => {
                typeof a.responseText == "string" && z.postMessage({ ...t, textList: [a.responseText], from: "Xhr" });
              };
            })));
      },
    },
    z = {
      isHandleMatch: false,
      workerInitError: null,
      neverTipWorkerInitErrorKey: "never-toast-worker-error",
      delayNotMatchCount: 0,
      postMessageType: "worker-init-error",
      dispatchMonitorDOMChange: false,
      blobUrl: "",
      GM_matchWorker: void 0,
      init() {
        (this.listenWorkerInitErrorDialog(), this.initWorkerBlobUrl(), this.initWorker(), this.monitorDOMChange());
      },
      initWorkerBlobUrl() {
        const t = `
        (() => {
            function ${z.handleRegularMatch.toString()}

            function ${z.uniqueArr}
            
            this.addEventListener(
            "message",
            function (event) {
                const data = event.data;
                let matchedList = [];
                ${z.handleRegularMatch.name}(data,(matchData)=>{
                	matchedList.push(matchData);
					data.textList = matchData.textList;
                })
                matchedList = ${z.uniqueArr.name}(matchedList);
                this.postMessage({
					options: data,
					msg: "Match End",
					data: matchedList,
					startTime: data.startTime,
					endTime: Date.now(),
                });
            },
            {
                capture: true,
            }
            );
        })();
  		`;
        let e = new Blob([t], { type: "application/javascript" }),
          a = window.URL.createObjectURL(e);
        (window.trustedTypes &&
          typeof window.trustedTypes.createPolicy == "function" &&
          (a = window.trustedTypes.createPolicy("workerPolicy", { createScriptURL: (r) => r }).createScriptURL(a)),
          (z.blobUrl = a));
      },
      handleRegularMatch(t, e) {
        const a = Object.keys(t.matchedRuleOption),
          n = [];
        for (let r of t.textList) {
          for (let s = 0; s < t.characterMapping.length; s++) {
            const i = t.characterMapping[s];
            try {
              typeof i.searchValue == "string"
                ? (r = r.replaceAll(i.searchValue, i.replaceValue))
                : (r = r.replace(i.searchValue, i.replaceValue));
            } catch {}
          }
          n.push(r);
        }
        for (const r of a) {
          const s = t.matchedRuleOption[r];
          for (let i = 0; i < s.length; i++) {
            const l = s[i];
            let o = [];
            if (
              (t.matchTextRange.includes("innerText") && o.push(new RegExp(l.link_innerText, "gi")),
              t.matchTextRange.includes("innerHTML") && o.push(new RegExp(l.link_innerHTML, "gi")),
              !t.matchTextRange.length)
            )
              throw (console.error(t), new TypeError("未设置匹配范围"));
            if (!o.length) throw new TypeError("未知的匹配范围: " + t.matchTextRange);
            for (let c = 0; c < o.length; c++) {
              const u = o[c];
              for (let d = 0; d < n.length; d++) {
                let m = n[d].match(u);
                m && m.length && e({ ruleKeyName: r, ruleIndex: i, data: m, textList: n });
              }
            }
          }
        }
      },
      uniqueArr(t) {
        return t.filter((e, a, n) => a === n.findIndex((r) => JSON.stringify(r) === JSON.stringify(e)));
      },
      initWorker() {
        try {
          ((z.GM_matchWorker = new Worker(z.blobUrl)),
            (z.GM_matchWorker.onmessage = z.onMessage),
            (z.GM_matchWorker.onerror = z.onError),
            g.info(`Worker Blob Link ===> ${z.blobUrl}`));
        } catch (t) {
          ((this.workerInitError = t),
            (z.GM_matchWorker = {
              postMessage(e) {
                return new Promise((a, n) => {
                  let r = [];
                  try {
                    z.handleRegularMatch(e, (s) => {
                      (r.push(s), (e.textList = s.textList));
                    });
                  } catch (s) {
                    z.onError(s);
                  } finally {
                    ((r = z.uniqueArr(r)),
                      z.onMessage(
                        new MessageEvent("message", {
                          data: { options: e, msg: "Match End", data: r, startTime: e.startTime, endTime: Date.now() },
                        })
                      ),
                      a(null));
                  }
                });
              },
            }));
        } finally {
          (globalThis.URL.revokeObjectURL(z.blobUrl), (z.blobUrl = ""));
        }
      },
      listenWorkerInitErrorDialog() {
        if (!j.isTopWindow()) return;
        const t = this;
        w.on(window, "message", (e) => {
          let a = e.data;
          if (typeof a == "object" && a?.type === this.postMessageType) {
            let n = a.data;
            (t.registerWorkerInitErrorNeverTipToast(n.hostname),
              Z.confirm(
                {
                  title: { text: "Worker Init Error", position: "center" },
                  content: {
                    text: `
							<div style="padding: 10px;gap: 10px;display: flex;flex-direction: column;">
								<p>链接：${n.url}</p>
								<p>来源：${j.isTopWindow() ? "top" : "iframe"}</p>
								<p>原因：初始化Worker失败，可能页面使用了Content-Security-Policy策略，执行匹配时如果页面的内容过大会导致页面卡死，请使用Menu模式进行匹配或者使用CSP插件禁用CSP策略（不建议）。</p>
								<p>
									错误信息：
									<span style="color: red;">${n.error}</span>
								</p>
							</div>
							`,
                    html: true,
                  },
                  btn: {
                    merge: true,
                    position: "space-between",
                    ok: {
                      text: "添加网站规则",
                      callback(r, s) {
                        let i = xe.getTemplateData();
                        ((i.name = "手动匹配：" + n.hostname),
                          (i.url = `^http(s|):\\/\\/${n.hostname}\\/`),
                          (i.data[y.features["netdisk-match-mode"].KEY] = "Menu"));
                        let l = new Nt({
                          title() {
                            return "规则管理器";
                          },
                          contentConfig: [xe.getRulePanelViewOption(i)],
                        });
                        l.showEditView(
                          l.option.contentConfig[0].ruleOption,
                          void 0,
                          false,
                          i,
                          void 0,
                          void 0,
                          void 0,
                          () => {
                            f.success("添加成功");
                          }
                        );
                      },
                    },
                    cancel: {
                      text: "网站规则",
                      callback(r, s) {
                        Xe.showView("网站规则");
                      },
                    },
                    other: {
                      enable: true,
                      text: "不再提示",
                      type: "xiaomi-primary",
                      callback(r, s) {
                        Z.confirm(
                          {
                            title: { text: "提示", position: "center" },
                            content: { text: `确定不再弹出该提示？（仅针对域名：${n.hostname}）` },
                            btn: {
                              ok: {
                                callback(i, l) {
                                  (at.addHost(n.hostname), i.close());
                                },
                              },
                            },
                          },
                          { PC: { width: "400px", height: "200px" }, Mobile: { width: "80vw", height: "200px" } }
                        );
                      },
                    },
                  },
                },
                { PC: { width: "550px", height: "350px" }, Mobile: { width: "88vw", height: "500px" } }
              ));
          }
        });
      },
      dispatchWorkerInitErrorDialog() {
        top?.postMessage(
          {
            type: this.postMessageType,
            data: { url: window.location.href, hostname: window.location.hostname, error: this.workerInitError },
          },
          "*"
        );
      },
      registerWorkerInitErrorNeverTipToast(t) {
        let e = "💀 Worker初始化失败",
          a = () => (at.findHost(t) ? e + "（已设置不再提示）" : e),
          n = {
            key: "workerInitErrorNeverTipToast-" + t,
            text: a(),
            autoReload: false,
            isStoreValue: false,
            showText: a,
            callback: () => {
              at.findHost(t)
                ? confirm("是否允许弹出Worker初始化失败的弹窗提示？") &&
                  (at.removeHost(t) ? f.success("删除成功") : f.error("删除失败"), Oe.update(n))
                : this.dispatchWorkerInitErrorDialog();
            },
          };
        Oe.update(n);
      },
      postMessage(t, e) {
        z.GM_matchWorker.postMessage(t, e);
      },
      onMessage(t) {
        const e = t.data;
        ((e.options.from === "PasteText" || e.options.from === "ShortCut-Select-Content") &&
          C.$inst.matchPasteText.workerMatchEndCallBack(e),
          e.options.from.startsWith("FirstLoad") && z.delayNotMatchCount++,
          z.successCallBack(e));
      },
      onError(t) {
        z.errorCallBack(t);
      },
      successCallBack(t) {
        if (!t.data.length) {
          z.matchingEndCallBack();
          return;
        }
        const e = [];
        for (const n of t.data) {
          N.$match.matchedInfoRuleKey.add(n.ruleKeyName);
          let r = new Set();
          (n.data.forEach((s) => {
            r.add(s);
          }),
            r.forEach((s) => {
              let i = N.handleLink({ ruleKeyName: n.ruleKeyName, ruleIndex: n.ruleIndex, matchText: s });
              i &&
                e.push({
                  shareCode: i.shareCode,
                  accessCode: i.accessCode,
                  ruleKeyName: n.ruleKeyName,
                  ruleIndex: n.ruleIndex,
                  matchText: s,
                });
            }));
        }
        let a = e.filter(
          (n, r, s) =>
            s.findIndex(
              (l) =>
                l.accessCode === n.accessCode &&
                l.ruleIndex === n.ruleIndex &&
                l.ruleKeyName === n.ruleKeyName &&
                l.shareCode === n.shareCode
            ) === r
        );
        if (
          (a.forEach((n) => {
            N.$match.tempMatchedInfo.has(n.ruleKeyName) &&
              N.$match.tempMatchedInfo.get(n.ruleKeyName).set(n.shareCode, n);
          }),
          a.forEach((n) => {
            let { shareCode: r, accessCode: s, ruleKeyName: i, ruleIndex: l, matchText: o } = n;
            const u = N.$rule.rule.find((m) => m.setting.key === i).rule[l];
            let d = false;
            if (
              (N.$match.blackMatchedInfo.forEach((m, b) => {
                if (b !== n.ruleKeyName) return;
                m.has(r) && ((d = true), g.warn(`匹配到黑名单分享码，已过滤：${r}`, JSON.stringify(n)));
              }),
              d)
            )
              return;
            if (u.shareCodeExcludeRegular && Array.isArray(u.shareCodeExcludeRegular))
              for (const m of u.shareCodeExcludeRegular) {
                let b = N.$match.matchedInfo.get(m),
                  k = N.$match.tempMatchedInfo.get(m);
                if (b.startsWith(r) || k.startsWith(r)) {
                  g.warn(`${i}：该分享码【${r}】与已匹配到该分享码的规则【${m}】冲突`);
                  return;
                }
              }
            const h = N.$match.matchedInfo.get(i);
            if (((N.$data.isMatchedLink = true), h.startsWith(r))) {
              let m = h.getStartsWith(r);
              if (
                (typeof m.isForceAccessCode == "boolean" && m.isForceAccessCode) ||
                p.isNotNull(m.accessCode) ||
                p.isNull(s)
              )
                return;
              (h.set(r, N.createLinkStorageInst(s, l, false, o)),
                C.$inst.linkView.changeBoxItemView(i, l, r, s, o),
                g.info(`该匹配项无密码，设置密码 ${i} ${l}: ${r}  ===> ${s}`));
            } else {
              if (p.isNull(s) && y.accessCode.allowQueryHistoryMatchingAccessCode.value) {
                let m = dt.queryAccessCode(i, r, true);
                m && (g.info("历史匹配记录 ==> 查询到访问码：" + m), (s = m));
              }
              (h.set(r, N.createLinkStorageInst(s, l, false, o)),
                C.$data.isMatchedNetDiskIconMap.add(i),
                C.$inst.linkView.addBoxItemView(i, l, r, s, o),
                g.success(`添加链接 ${i} ${l}: ${r}  ===> ${s}`));
            }
          }),
          Object.keys(N.$match.tempMatchedInfo.getItems()).forEach((n) => {
            N.$match.tempMatchedInfo.get(n).clear();
          }),
          N.$data.isMatchedLink)
        )
          switch (y.features["netdisk-behavior-mode"].value) {
            case "suspension_smallwindow".toLowerCase():
              oe.mode.current_suspension_smallwindow_mode.value === "suspension"
                ? C.$inst.suspension.init()
                : C.$inst.linkView.show();
              break;
            case "suspension_window".toLowerCase():
              C.$inst.suspension.init();
              break;
            case "smallwindow".toLowerCase():
              C.$inst.linkView.show();
              break;
            default:
              g.error("未知的行为模式：" + y.features["netdisk-behavior-mode"].value);
          }
        z.matchingEndCallBack();
      },
      errorCallBack(t) {
        (z.matchingEndCallBack(true), g.error("Worker Error", t));
      },
      matchingEndCallBack(t) {
        if (t)
          ((z.isHandleMatch = false),
            z.delayNotMatchCount > 0 && ((z.delayNotMatchCount = 0), (z.dispatchMonitorDOMChange = true)));
        else {
          const e = parseFloat(y.match.delaytime.value.toString()) * 1e3;
          setTimeout(() => {
            z.matchingEndCallBack(true);
          }, e);
        }
      },
      monitorDOMChange() {
        const t = y.match.isAddedNodesToMatch.value,
          e = y.match.readClipboard.value,
          a = y.match.pageMatchRange.value;
        let n = true,
          r = true,
          s = true,
          i = y.match.depthQueryWithShadowRoot.value;
        const l = {},
          o = ut.getMappingData();
        N.$rule.rule.forEach((h) => {
          let m = h.setting.key;
          J.function.enable(m) && (Reflect.has(l, m) ? (l[m] = [...l[m], ...h.rule]) : Reflect.set(l, m, h.rule));
        });
        async function c(h) {
          if (z.isHandleMatch) {
            z.delayNotMatchCount++;
            return;
          }
          if (t && h && h.length) {
            let k = false;
            for (let x = 0; x < h.length; x++) {
              const v = h[x];
              if (v.addedNodes && v.addedNodes instanceof NodeList && v.addedNodes.length) {
                k = true;
                break;
              }
            }
            if (!k) return;
          }
          z.isHandleMatch = true;
          const m = Date.now();
          if (e)
            try {
              let k = await p.getClipboardInfo();
              k.error != null && (N.$data.clipboardText = k.content);
            } catch {}
          typeof N.$data.clipboardText != "string" && (N.$data.clipboardText = "");
          const b = [];
          if (p.isNotNull(N.$data.clipboardText)) {
            let k = N.$data.clipboardText;
            b.push(k);
          }
          if (y.match.allowMatchLocationHref.value) {
            let k = re.getDecodeComponentUrl();
            b.push(k);
          }
          if (n && ((n = false), b.length)) {
            z.postMessage({
              characterMapping: o,
              textList: b,
              matchTextRange: a,
              matchedRuleOption: l,
              startTime: m,
              from: "FirstLoad-DOMChange",
            });
            return;
          }
          if (a.includes("innerText")) {
            let k = Ze.getPageText(document.documentElement, i);
            if ((b.push(...k), r)) {
              ((r = false),
                z.postMessage({
                  characterMapping: o,
                  textList: b,
                  matchTextRange: a,
                  matchedRuleOption: l,
                  startTime: m,
                  from: "FirstLoad-Text-DOMChange",
                }));
              return;
            }
          }
          if (a.includes("innerHTML")) {
            let k = Ze.getPageHTML(document.documentElement, i);
            if ((b.push(...k), s)) {
              ((s = false),
                z.postMessage({
                  characterMapping: o,
                  textList: b,
                  matchTextRange: a,
                  matchedRuleOption: l,
                  startTime: m,
                  from: "FirstLoad-HTML-DOMChange",
                }));
              return;
            }
          }
          if (y.match.toBeMatchedWithInputElementValue.value) {
            let k = Ze.getInputElementValue(document.documentElement, i);
            b.push(...k);
          }
          if (y.match.toBeMatchedTextAreaElementValue.value) {
            let k = Ze.getTextAreaElementValue(document.documentElement, i);
            b.push(...k);
          }
          z.postMessage({
            characterMapping: o,
            textList: b,
            matchTextRange: a,
            matchedRuleOption: l,
            startTime: m,
            from: "DOMChange",
          });
        }
        let u = z.dispatchMonitorDOMChange;
        Object.defineProperty(z, "dispatchMonitorDOMChange", {
          set: function (h) {
            if (((u = h), h)) {
              let m = Yt("html");
              c([
                {
                  addedNodes: m,
                  attributeName: null,
                  attributeNamespace: null,
                  nextSibling: null,
                  oldValue: null,
                  previousSibling: null,
                  removedNodes: m,
                  target: m[0],
                  type: "attributes",
                },
              ]);
            }
          },
          get: function () {
            return u;
          },
        });
        let d = y.features["netdisk-match-mode"].value;
        if (d !== "Menu") {
          let h = ie(this.neverTipWorkerInitErrorKey, []);
          if ((Array.isArray(h) || (h = [h]), this.workerInitError != null)) {
            g.error(
              "初始化Worker失败，可能页面使用了Content-Security-Policy策略，使用代替函数，该函数执行匹配时如果页面的内容过大会导致页面卡死",
              this.workerInitError
            );
            let m = h.find((b) => b === window.location.hostname);
            m ? this.registerWorkerInitErrorNeverTipToast(m) : this.dispatchWorkerInitErrorDialog();
          }
        }
        (ya.execMatch({ characterMapping: o, matchTextRange: a, matchedRuleOption: l, startTime: Date.now() }),
          d === "MutationObserver"
            ? (p.mutationObserver(document.documentElement, {
                callback: c,
                config: {
                  childList: y.match["mutationObserver-childList"].value,
                  characterData: y.match["mutationObserver-characterData"].value,
                  subtree: y.match["mutationObserver-subtree"].value,
                },
              }),
              (this.dispatchMonitorDOMChange = true))
            : d === "Menu"
              ? Oe.add({
                  key: "performPageTextMatchingManually_" + window.location.href,
                  text: "点击执行文本匹配" + (j.isTopWindow() ? "" : "（iframe）"),
                  autoReload: false,
                  isStoreValue: false,
                  showText(h) {
                    return h;
                  },
                  callback: () => {
                    this.dispatchMonitorDOMChange = true;
                  },
                })
              : g.error("未知匹配模式：" + d));
      },
    },
    At = {
      $el: { $select: null, $log: null, $matchText: null, $button: null },
      reset() {
        Object.keys(this.$el).forEach((t) => {
          Reflect.deleteProperty(this.$el, t);
        });
      },
      setLog(t, ...e) {
        let a = "";
        e.forEach((r) => {
          (a !== "" &&
            (a += `
`),
            typeof r != "string" ? (a += JSON.stringify(r, void 0, 4)) : (a += r));
        });
        let n = w.createElement("p", { innerText: a }, { "data-tag": t });
        w.append(this.$el.$log, n);
      },
      clearLog() {
        w.empty(this.$el.$log);
      },
      showUI(t) {
        if ((this.reset(), p.isNull(t.regexp))) {
          f.error("请先配置regexp");
          return;
        }
        let e = this,
          n = le.parseRule([t])[0].rule,
          r = Z.confirm(
            {
              title: { text: `调试规则 ${t.key}`, position: "center" },
              content: {
                text: `
                    <div class="custom-rule-container">
                        <textarea class="custom-rule-match-text" placeholder="请输入需要测试匹配的字符串"></textarea>
                        <div class="custom-rule-input-container">
                        <select class="custom-rule-select-regexp"></select>
                        <button class="custom-rule-run-match-button" type="button" data-type="primary" data-icon="" data-righticon="false">
                            <span>执行</span>
                        </button>
                        </div>
                    </div>
                    <div class="custom-rule-match-log">
                        <div>匹配日志↓</div>
                        <div class="custom-rule-match-log-container"></div>
                    </div>
                    `,
                html: true,
              },
              btn: { ok: { enable: false } },
              style: `
                .custom-rule-container{
                    display: flex;
                    align-items: center;
                }
                .custom-rule-select-regexp{
                    width: 100%;
                    height: 32px;
                    line-height: normal;
                    border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));
                    border-radius: 5px;
                    text-align: center;
                    outline: 0;
                    background: rgb(255, 255, 255, var(--pops-bg-opacity));
                    box-shadow: none;
                }
                .custom-rule-input-container{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin: 5px;
                    width: 30%;
                }
                .custom-rule-select-regexp-item{

                }
                button.custom-rule-run-match-button{
                    margin-top: 5px;
                }
                textarea.custom-rule-match-text{
                    width: 100%;
                    min-height: 70px;
                    outline: none;
                    margin: 0px;
                    background-image: none;
                    background-color: transparent;
                    display: inline-block;
                    resize: vertical;
                    padding: 5px;
                    line-height: normal;
                    box-sizing: border-box;
                    border: 1px solid rgb(220, 223, 230);
                    appearance: none;
                }
                .custom-rule-match-log{

                }
                .custom-rule-match-log-container{
                    padding: 5px;
                    background: rgb(229, 229, 229);
                }
                .custom-rule-match-log-container p{
                    margin: 2px 0px;
                    border-bottom: 1px solid #000000;
                }
                .custom-rule-match-log-container p:last-child{
                    border-bottom: 0px;
                    margin-bottom: 0px;
                }
                .custom-rule-match-log-container p[data-tag]{
                	padding: 10px 0px;
                }
                .custom-rule-match-log-container p[data-tag="info"]{

                }
                .custom-rule-match-log-container p[data-tag="success"]{
                    color: green;
                }
                .custom-rule-match-log-container p[data-tag="warn"]{
                    color: yellow;
                }
                .custom-rule-match-log-container p[data-tag="error"]{
                    color: red;
                }
                `,
            },
            C.$config.viewSizeConfig.customRuleDebugView
          );
        ((this.$el.$select = r.$shadowRoot.querySelector(".custom-rule-select-regexp")),
          (this.$el.$matchText = r.$shadowRoot.querySelector(".custom-rule-match-text")),
          (this.$el.$log = r.$shadowRoot.querySelector(".custom-rule-match-log-container")),
          (this.$el.$button = r.$shadowRoot.querySelector(".custom-rule-run-match-button")),
          n.forEach((l, o) => {
            this.$el.$select.appendChild(
              w.createElement("option", {
                className: "custom-rule-select-regexp-item",
                innerText: "regexp下标:" + o,
                "data-value": l,
              })
            );
          }));
        function s(l) {
          (Array.isArray(l.msg)
            ? e.setLog(l.status ? "info" : "error", ...l.msg)
            : e.setLog(l.status ? "info" : "error", l.msg),
            l.status || e.setLog("error", "执行完毕"));
        }
        function i() {
          try {
            if (p.isNull(e.$el.$matchText.value)) {
              f.error("请先输入待匹配的字符串");
              return;
            }
            e.clearLog();
            let l = t.key,
              o = e.$el.$select.selectedIndex,
              c = e.$el.$select.options[o]["data-value"];
            g.info("当前选中的规则: ", c);
            let u = {};
            u[t.key] = [c];
            let d = [];
            if (
              (z.handleRegularMatch(
                {
                  characterMapping: ut.getMappingData(),
                  matchedRuleOption: u,
                  textList: [e.$el.$matchText.value],
                  matchTextRange: ["innerText", "innerHTML"],
                  startTime: Date.now(),
                  from: "Debug",
                },
                (h) => {
                  d.push(...h.data);
                }
              ),
              !d.length)
            ) {
              e.setLog("error", "未成功匹配到数据");
              return;
            }
            ((d = z.uniqueArr(d)),
              e.setLog("info", "成功匹配到的数据 ==> ", d),
              d.forEach((h, m) => {
                (e.setLog("success", "当前处理的字符串: " + h),
                  e.setLog("success", "当前执行: 对shareCode进行处理获取"));
                let b = N.handleShareCode({
                  ruleKeyName: l,
                  ruleIndex: o,
                  matchText: h,
                  debugConfig: { matchText: h, config: c, logCallBack: s },
                });
                if (p.isNull(b)) return;
                (e.setLog("info", " "),
                  e.setLog("info", "================分割线================"),
                  e.setLog("info", " "),
                  e.setLog("success", "当前执行: 对accessCode进行处理获取"));
                let k = N.handleAccessCode({
                  ruleKeyName: l,
                  ruleIndex: o,
                  matchText: h,
                  debugConfig: { matchText: h, config: c, logCallBack: s },
                });
                (e.setLog("info", " "),
                  e.setLog("info", "================分割线================"),
                  e.setLog("info", " "),
                  e.setLog("success", "当前执行: 对uiLinkShow进行处理获取"));
                let x = N.handleLinkShow({
                  ruleKeyName: l,
                  ruleIndex: o,
                  shareCode: b,
                  accessCode: k,
                  matchText: h,
                  debugConfig: { matchText: h, config: c, logCallBack: s },
                });
                (e.setLog("info", " "),
                  e.setLog("info", "================分割线================"),
                  e.setLog("info", " "),
                  e.setLog("success", "当前执行: 对blank进行处理获取"));
                let v = X.getBlankUrl({
                  ruleKeyName: l,
                  ruleIndex: o,
                  shareCode: b,
                  accessCode: k,
                  debugConfig: { matchText: h, config: c, logCallBack: s },
                });
                (e.setLog("info", " "),
                  e.setLog("info", "================分割线================"),
                  e.setLog("info", " "),
                  e.setLog("success", "当前执行: 对copyUrl进行处理获取"));
                let T = X.getCopyUrlInfo({
                  ruleKeyName: l,
                  ruleIndex: o,
                  shareCode: b,
                  accessCode: k,
                  debugConfig: { matchText: h, config: c, logCallBack: s },
                });
                e.setLog("success", "执行完毕");
              }));
          } catch (l) {
            (g.error(l), e.setLog(l.toString()));
          }
        }
        w.on(e.$el.$button, "click", void 0, i);
      },
    },
    _t = `.pops[type-value="confirm"] .pops-confirm-content {\r
  overflow: hidden;\r
}\r
/* textarea美化 */\r
.pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea {\r
  width: 100%;\r
  height: 100%;\r
  border: none;\r
  outline: none;\r
  padding: 0;\r
  margin: 0;\r
  -webkit-appearance: none;\r
  -moz-appearance: none;\r
  appearance: none;\r
  background-image: none;\r
  background-color: transparent;\r
\r
  display: inline-block;\r
  resize: vertical;\r
  padding: 5px 15px;\r
  line-height: normal;\r
  box-sizing: border-box;\r
  border: 1px solid #dcdfe6;\r
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r
  appearance: none;\r
  resize: none;\r
}\r
/* 获得焦点 */\r
.pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea:focus {\r
  outline: none;\r
  border-color: #3677f0;\r
}\r
/* 提示文字 */\r
.pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea::placeholder {\r
  color: #c0c4cc;\r
}\r
/* 鼠标hover */\r
.pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea:hover {\r
  border-color: #c0c4cc;\r
}\r
`,
    Ee = {
      show(t, e, a) {
        let n = "添加";
        (t && (n = "编辑"), (n += "链接识别规则"));
        let r = null;
        function s(u, d) {
          let h = r.value.trim(),
            m = le.parseRuleStrToRule(h);
          if (m.success) {
            let b = m.data;
            if (t)
              if (le.updateRule(e, b)) f.success("更新成功");
              else {
                f.error("更新失败");
                return;
              }
            else (le.addRule(b), f.success("添加成功"));
            a?.(b);
          } else f.error(m.msg);
        }
        function i(u) {
          let d = r.value.trim(),
            h = le.parseRuleStrToRule(d);
          if (h.success) {
            let m = h.data;
            At.showUI(m);
          } else f.error(h.msg);
        }
        function l(u) {
          try {
            let d = JSON.parse(r.value),
              h = le.getFormatRule(d);
            ((r.value = h), f.success("格式化成功"));
          } catch (d) {
            (g.error(d), f.error(d.message, { timeout: 3500, isHTML: true }));
          }
        }
        r = Z.confirm(
          {
            title: { text: n, position: "center" },
            content: {
              text: '<textarea class="netdisk-custom-rules" placeholder="请输入规则配置"></textarea>',
              html: true,
            },
            btn: {
              merge: true,
              mergeReverse: false,
              reverse: false,
              position: "space-between",
              ok: {
                text: "保存",
                callback: (u, d) => {
                  s();
                },
              },
              cancel: {
                text: "调试",
                callback: (u, d) => {
                  i();
                },
              },
              other: {
                enable: true,
                text: "格式化",
                type: "xiaomi-primary",
                callback: (u, d) => {
                  l();
                },
              },
            },
            class: "whitesevPopNetDiskCustomRules",
            style: _t,
          },
          C.$config.viewSizeConfig.customRulesView
        ).$shadowRoot.querySelector("textarea");
        let c;
        (t ? (c = le.getRule(e)) : (c = le.getTemplateRule()), (r.value = le.getFormatRule(c)));
      },
      showSubscribe(t, e, a) {
        let n = "编辑订阅的链接识别规则",
          r = null;
        function s(u, d) {
          let h = r.value.trim(),
            m = le.parseRuleStrToRule(h);
          if (m.success) {
            let b = m.data;
            if (te.updateSubscribeRule(t, b)) f.success("更新成功");
            else {
              f.error("更新失败");
              return;
            }
            a?.(b);
          } else f.error(m.msg);
        }
        function i(u) {
          let d = r.value.trim(),
            h = le.parseRuleStrToRule(d);
          if (h.success) {
            let m = h.data;
            At.showUI(m);
          } else f.error(h.msg);
        }
        function l(u) {
          try {
            let d = JSON.parse(r.value),
              h = le.getFormatRule(d);
            ((r.value = h), f.success("格式化成功"));
          } catch (d) {
            (g.error(d), f.error(d.message, { isHTML: true, timeout: 3500 }));
          }
        }
        r = Z.confirm(
          {
            title: { text: n, position: "center" },
            content: {
              text: '<textarea class="netdisk-custom-rules" placeholder="请输入规则配置"></textarea>',
              html: true,
            },
            btn: {
              merge: true,
              mergeReverse: false,
              reverse: false,
              position: "space-between",
              ok: {
                text: "保存",
                callback: (u, d) => {
                  s();
                },
              },
              cancel: {
                text: "调试",
                callback: (u, d) => {
                  i();
                },
              },
              other: {
                enable: true,
                text: "格式化",
                type: "xiaomi-primary",
                callback: (u, d) => {
                  l();
                },
              },
            },
            class: "whitesevPopNetDiskCustomRules",
            style: _t,
          },
          C.$config.viewSizeConfig.customRulesView
        ).$shadowRoot.querySelector("textarea");
        let c;
        ((c = te.getSubscribeRule(t, e)), (r.value = le.getFormatRule(c)));
      },
    },
    xa = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M510.1056 674.2528c-89.1904 0-161.6896-72.5504-161.6896-161.6896s72.5504-161.6896 161.6896-161.6896 161.6896 72.5504 161.6896 161.6896-72.4992 161.6896-161.6896 161.6896z m0-251.7504c-49.664 0-90.0096 40.3968-90.0096 90.0096s40.3968 90.0096 90.0096 90.0096 90.0096-40.3968 90.0096-90.0096-40.3456-90.0096-90.0096-90.0096z"></path>\r
	<path\r
		d="M510.1056 957.5424c-36.1984 0-72.3968-4.4544-107.5712-13.1584a35.88096 35.88096 0 0 1-27.1872-36.352c0.0512-1.2288 0.1024-2.4576 0.1024-3.6864 0-49.664-40.3968-90.0608-90.0608-90.0608-17.2544 0-34.048 4.9152-48.5376 14.2336a35.86048 35.86048 0 0 1-45.0048-5.12c-53.2992-54.5792-91.8528-122.0608-111.5136-195.2256a35.7888 35.7888 0 0 1 19.3024-41.6768c31.3856-14.848 51.6608-46.7968 51.6608-81.4592 0-33.8944-18.7904-64.6144-48.9984-80.128a35.8656 35.8656 0 0 1-17.92-42.3424c20.5824-67.5328 57.7536-130.0992 107.3664-180.9408 11.8784-12.1856 30.72-14.336 45.0048-5.12 14.4896 9.3184 31.2832 14.2336 48.5888 14.2336 49.664 0 90.0608-40.3968 90.0608-90.0096 0-1.28-0.0512-2.5088-0.1024-3.7376a35.82464 35.82464 0 0 1 27.1872-36.3008c72.2944-17.9712 149.504-17.408 221.9008 1.792 16.0768 4.2496 27.136 19.0464 26.624 35.6864l-0.0512 2.6112c0 49.664 40.3968 90.0096 90.0096 90.0096 16.128 0 31.9488-4.352 45.7728-12.4928a35.87072 35.87072 0 0 1 44.1344 5.9904c48.4864 50.432 84.7872 112.2816 104.96 178.8416 5.0176 16.4864-2.4064 34.1504-17.6128 42.1376a89.8048 89.8048 0 0 0-48.2816 79.7696c0 34.3552 20.0192 66.2016 50.944 81.152a35.80928 35.80928 0 0 1 19.0464 41.5232c-19.2512 72.0896-56.9856 138.8544-109.1072 193.0752a35.79904 35.79904 0 0 1-44.0832 5.9904c-13.824-8.192-29.6448-12.4928-45.7216-12.4928-49.664 0-90.0096 40.3968-90.0096 90.0608l0.0512 2.6112a35.8912 35.8912 0 0 1-26.624 35.6864 445.69088 445.69088 0 0 1-114.3296 14.8992z m-64.768-77.3632a375.53664 375.53664 0 0 0 135.936-1.1776c12.1856-77.2096 79.1552-136.3968 159.744-136.3968 18.8416 0 37.4784 3.2768 55.04 9.6768a374.58944 374.58944 0 0 0 66.9184-117.9136c-40.0384-30.208-64.7168-78.2336-64.7168-129.3312 0-49.7152 22.5792-95.744 60.416-126.0544a374.74304 374.74304 0 0 0-62.5664-106.1376 161.34144 161.34144 0 0 1-55.1424 9.6768c-80.5376 0-147.5584-59.1872-159.744-136.3968a376.76032 376.76032 0 0 0-135.936-1.2288C433.664 222.6176 366.3872 282.4704 285.44 282.4704c-20.6336 0-40.9088-3.9424-59.8528-11.4688a375.0912 375.0912 0 0 0-63.8464 107.264c38.4 30.3104 61.2864 76.5952 61.2864 126.7712 0 51.5584-24.9856 99.84-65.5872 129.9968a373.74464 373.74464 0 0 0 68.1984 119.04c18.8928-7.5264 39.168-11.4688 59.8016-11.4688 80.9472 0 148.224 59.8528 159.8976 137.5744z"></path>\r
</svg>\r
`,
    Ca = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M511.998 64C264.574 64 64 264.574 64 511.998S264.574 960 511.998 960 960 759.422 960 511.998 759.422 64 511.998 64z m353.851 597.438c-82.215 194.648-306.657 285.794-501.306 203.579S78.749 558.36 160.964 363.711 467.621 77.917 662.27 160.132c168.009 70.963 262.57 250.652 225.926 429.313a383.995 383.995 0 0 1-22.347 71.993z"></path>\r
	<path\r
		d="M543.311 498.639V256.121c0-17.657-14.314-31.97-31.97-31.97s-31.97 14.314-31.97 31.97v269.005l201.481 201.481c12.485 12.485 32.728 12.485 45.213 0s12.485-32.728 0-45.213L543.311 498.639z"></path>\r
</svg>\r
`,
    va = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M761.948797 511.939185c0-16.541632-13.500891-30.042523-30.042523-30.042523H542.042395v-189.742249c0-16.541632-13.379261-30.042523-30.042523-30.042523-16.541632 0-30.042523 13.500891-30.042523 30.042523v189.863879H292.09347c-16.541632 0-30.042523 13.500891-30.042523 30.042523 0 8.270816 3.40563 15.811854 8.757335 21.285188 5.473334 5.473334 12.892743 8.757335 21.285188 8.757335h189.863879v189.863879c0 8.270816 3.40563 15.811854 8.757335 21.285188 5.473334 5.473334 12.892743 8.757335 21.285188 8.757335 16.541632 0 30.042523-13.500891 30.042523-30.042523V541.981708h189.863879c16.541632 0 30.042523-13.379261 30.042523-30.042523z m0 0"></path>\r
	<path\r
		d="M780.436504 511.939185c0-17.757928-14.473928-32.231857-32.231857-32.231856H544.353358V275.85604c0-17.757928-14.473928-32.231857-32.231856-32.231857s-32.231857 14.473928-32.231857 32.231857v203.972918H275.916727C258.158799 479.828958 243.684871 494.302886 243.684871 512.060815c0 8.878964 3.648889 17.028151 9.487112 22.866374 5.838223 5.838223 13.86578 9.487112 22.866374 9.487112h203.972918v203.972918c0 8.878964 3.648889 17.028151 9.487113 22.866374 5.838223 5.838223 13.86578 9.487112 22.866373 9.487113 17.757928 0 32.231857-14.473928 32.231857-32.231857V544.292671h203.972918c17.514669 0 31.866968-14.473928 31.866968-32.353486z m0 0"></path>\r
	<path\r
		d="M829.93977 928.034208H194.181604C140.29967 928.034208 96.512997 884.247535 96.512997 830.487231V193.512769c0-53.760304 43.786673-97.546977 97.546977-97.546977H829.93977c53.760304 0 97.546977 43.786673 97.546977 97.546977v636.974462c0.12163 53.760304-43.665043 97.546977-97.546977 97.546977zM194.181604 156.780615C173.869453 156.780615 157.327821 173.322247 157.327821 193.512769v636.974462C157.327821 850.677753 173.869453 867.219385 194.181604 867.219385H829.93977c20.312151 0 36.732153-16.541632 36.732154-36.732154V193.512769c0-20.312151-16.541632-36.732153-36.732154-36.732154H194.181604z"></path>\r
</svg>\r
`,
    Sa = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M560.104 574.25c0.625-0.64 1.182-1.2 1.67-1.683 24.773-24.465 55.547-42.364 89.471-51.779 1.014-0.281 2.241-0.603 3.682-0.965a16 16 0 0 1 13.64 2.823l1.477 1.134 25.485 19.554h22.942l15.46-11.862 11.457-8.791a16 16 0 0 1 13.692-2.81c3.65 0.93 6.585 1.734 8.803 2.412a206.001 206.001 0 0 1 14.852 5.167 205.45 205.45 0 0 1 69.482 45.108c0.491 0.485 1.05 1.049 1.68 1.692a16 16 0 0 1 4.412 13.355l-0.529 3.863-3.935 28.758 11.471 19.547L892.89 651.5l3.15 1.34a16 16 0 0 1 9.166 10.48c0.38 1.385 0.695 2.575 0.942 3.57A198.992 198.992 0 0 1 912 714.91c0 18.075-2.424 35.85-7.152 52.976-0.204 0.74-0.452 1.6-0.745 2.584a16 16 0 0 1-8.956 10.114l-1.606 0.699-28.225 12.274-11.471 19.547 2.152 24.3 0.645 7.282a16 16 0 0 1-4.654 12.755 179.21 179.21 0 0 1-4.143 4.013A205.62 205.62 0 0 1 762.876 909c-1.373 0.382-3.109 0.83-5.206 1.345a16 16 0 0 1-12.839-2.331l-4.217-2.883-22.143-15.135H695.53l-23.053 15.757-3.288 2.248a16 16 0 0 1-12.864 2.324c-3.02-0.745-5.463-1.389-7.331-1.93a205.604 205.604 0 0 1-83.28-47.352 173.687 173.687 0 0 1-3.705-3.6 16 16 0 0 1-4.65-12.751c0.252-2.85 0.458-5.184 0.62-7.001l2.177-24.587-11.471-19.547-28.313-12.313-1.5-0.652a16 16 0 0 1-8.957-10.116 163.909 163.909 0 0 1-1.291-4.546c-4.38-16.522-6.623-33.632-6.623-51.02 0-17.065 2.16-33.866 6.384-50.11 0.042-0.158 0.193-0.697 0.454-1.615a16 16 0 0 1 9.128-10.347l1.675-0.713 29.043-12.352 11.471-19.547a317416336.627 317416336.627 0 0 0-4.464-32.62 16 16 0 0 1 4.413-13.357z m58.693 51.865l-32.6 57.431-26.86 10.457A155.784 155.784 0 0 0 558 714.416c0 8.177 0.634 16.258 1.884 24.192l26.314 10.244 32.599 57.43-4.232 27.01c11.838 9.538 25.036 17.206 39.159 22.708l20.677-17.064h65.198L760.276 856c14.123-5.502 27.321-13.17 39.16-22.709l-4.233-27.008 32.6-57.431 26.313-10.244A155.435 155.435 0 0 0 856 714.416c0-6.882-0.45-13.696-1.337-20.413l-26.86-10.457-32.6-57.431 4.728-30.173A148.3 148.3 0 0 0 763.181 574L739.6 593.462h-65.198L650.819 574a148.3 148.3 0 0 0-36.75 21.942l4.728 30.173zM707.1 802.289c-48.228 0-87.324-39.096-87.324-87.324s39.096-87.324 87.324-87.324 87.325 39.096 87.325 87.324-39.097 87.324-87.325 87.324z m0-56.938c17.768 0 32.172-14.404 32.172-32.172 0-17.768-14.404-32.172-32.172-32.172-17.768 0-32.172 14.404-32.172 32.172 0 17.768 14.404 32.172 32.172 32.172zM256 348v-56a8 8 0 0 1 8-8h432a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H264a8 8 0 0 1-8-8z m0 192v-56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H264a8 8 0 0 1-8-8z m0 192v-56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H264a8 8 0 0 1-8-8z m584-548H184v656h288a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H144c-17.673 0-32-14.327-32-32V144c0-17.673 14.327-32 32-32h736c17.673 0 32 14.327 32 32v328a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V184z"></path>\r
</svg>\r
`,
    Ra = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M648.6016 128c0-18.7904 15.2576-34.048 34.048-34.048H896c18.7904 0 34.048 15.2576 34.048 34.048v213.3504a34.048 34.048 0 1 1-68.096 0V162.048h-179.3024a34.048 34.048 0 0 1-34.048-34.048zM93.952 128c0-18.7904 15.2576-34.048 34.048-34.048h213.3504a34.048 34.048 0 1 1 0 68.096H162.048v179.3024a34.048 34.048 0 1 1-68.096 0V128zM896 648.6016c18.7904 0 34.048 15.2576 34.048 34.048V896a34.048 34.048 0 0 1-34.048 34.048h-213.3504a34.048 34.048 0 0 1 0-68.096h179.3024v-179.3024c0-18.7904 15.2576-34.048 34.048-34.048zM128 648.6016c18.7904 0 34.048 15.2576 34.048 34.048v179.3024h179.3024a34.048 34.048 0 1 1 0 68.096H128a34.048 34.048 0 0 1-34.048-34.048v-213.3504c0-18.7904 15.2576-34.048 34.048-34.048zM322.3552 358.4c0-18.8416 15.3088-34.1504 34.1504-34.1504h310.9888c18.8416 0 34.1504 15.3088 34.1504 34.1504v58.3168a34.1504 34.1504 0 0 1-68.2496 0v-24.1664H390.6048v24.1664a34.1504 34.1504 0 0 1-68.2496 0V358.4zM438.9888 708.2496c0-18.8416 15.3088-34.0992 34.1504-34.0992h77.7216a34.0992 34.0992 0 1 1 0 68.2496H473.1392a34.0992 34.0992 0 0 1-34.1504-34.1504z"></path>\r
	<path\r
		d="M512 363.1616c18.8416 0 34.0992 15.2576 34.0992 34.0992v310.9888a34.0992 34.0992 0 1 1-68.1984 0V397.312c0-18.8416 15.2576-34.0992 34.0992-34.0992z"></path>\r
</svg>\r
`,
    Aa = `<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M563.2 672c-6.4-6.4 0 0 0 0L448 793.6c-57.6 57.6-153.6 57.6-211.2 0-57.6-57.6-64-147.2 0-211.2l121.6-121.6-6.4-6.4-38.4-32-6.4-6.4-121.6 121.6C108.8 614.4 108.8 755.2 192 832s217.6 83.2 300.8 0l121.6-121.6-6.4-6.4-44.8-32z m38.4-294.4c6.4 0 6.4 0 0 0l38.4 38.4 6.4 6.4-230.4 230.4-38.4-51.2 224-224zM531.2 192c83.2-83.2 217.6-83.2 300.8 0 83.2 83.2 83.2 217.6 0 300.8l-121.6 121.6-44.8-44.8 128-128c44.8-44.8 51.2-147.2-6.4-204.8-57.6-57.6-160-57.6-204.8-6.4l-128 128v-6.4l-38.4-38.4-6.4-6.4L531.2 192z"></path>\r
</svg>\r
`,
    $t = `<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M892 928.1H134c-19.9 0-36-16.1-36-36v-758c0-19.9 16.1-36 36-36h314.1c19.9 0 36 16.1 36 36s-16.1 36-36 36H170v686h686V579.6c0-19.9 16.1-36 36-36s36 16.1 36 36v312.5c0 19.9-16.1 36-36 36z"></path>\r
	<path\r
		d="M927.9 131.6v-0.5c-0.1-1.7-0.4-3.3-0.7-4.9 0-0.1 0-0.2-0.1-0.3-0.4-1.7-0.9-3.3-1.5-4.9v-0.1c-0.6-1.6-1.4-3.1-2.2-4.6 0-0.1-0.1-0.1-0.1-0.2-0.8-1.4-1.7-2.8-2.7-4.1-0.1-0.1-0.2-0.3-0.3-0.4-0.5-0.6-0.9-1.1-1.4-1.7 0-0.1-0.1-0.1-0.1-0.2-0.5-0.6-1-1.1-1.6-1.6l-0.4-0.4c-0.5-0.5-1.1-1-1.6-1.5l-0.1-0.1c-0.6-0.5-1.2-1-1.9-1.4-0.1-0.1-0.3-0.2-0.4-0.3-1.4-1-2.8-1.8-4.3-2.6l-0.1-0.1c-1.6-0.8-3.2-1.5-4.9-2-1.6-0.5-3.3-1-5-1.2-0.1 0-0.2 0-0.3-0.1l-2.4-0.3h-0.3c-0.7-0.1-1.3-0.1-2-0.1H640.1c-19.9 0-36 16.1-36 36s16.1 36 36 36h165L487.6 487.6c-14.1 14.1-14.1 36.9 0 50.9 7 7 16.2 10.5 25.5 10.5 9.2 0 18.4-3.5 25.5-10.5L856 221v162.8c0 19.9 16.1 36 36 36s36-16.1 36-36V134.1c0-0.8 0-1.7-0.1-2.5z"></path>\r
</svg>\r
`,
    _a = `<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M288 384v-74.666667c0-123.722667 100.266667-224 224-224s224 100.224 224 224v74.666667h10.677333C811.445333 384 864 436.597333 864 501.333333v320c0 64.821333-52.469333 117.333333-117.322667 117.333334H277.333333C212.554667 938.666667 160 886.069333 160 821.333333V501.333333c0-64.821333 52.469333-117.333333 117.322667-117.333333H288z m64 0h320v-74.666667c0-88.426667-71.605333-160-160-160-88.384 0-160 71.626667-160 160v74.666667zM224 501.333333v320c0 29.397333 23.914667 53.333333 53.322667 53.333334H746.666667A53.269333 53.269333 0 0 0 800 821.333333V501.333333c0-29.397333-23.914667-53.333333-53.322667-53.333333H277.333333A53.269333 53.269333 0 0 0 224 501.333333z"></path>\r
</svg>\r
`,
    $a = `<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">\r
	<path\r
		d="M826.92 857.397H197.08c-33.667 0-60.953-27.287-60.953-60.953V349.46c0-33.666 27.286-60.952 60.952-60.952h121.905v-60.952c0-33.666 27.286-60.953 60.953-60.953h243.809c33.666 0 60.952 27.287 60.952 60.953v60.952H826.921c33.666 0 60.952 27.286 60.952 60.952v446.984c0 33.666-27.286 60.953-60.952 60.953zM644.064 247.873c0-22.43-18.204-40.635-40.634-40.635H400.254c-22.43 0-40.635 18.205-40.635 40.635v40.635h284.444v-40.635z m203.175 121.905c0-22.43-18.204-40.635-40.635-40.635H217.397c-22.43 0-40.635 18.204-40.635 40.635v162.54h304.762v-50.794c0-16.823 13.653-30.476 30.476-30.476s30.476 13.653 30.476 30.476v50.793h304.762v-162.54z m0 203.174H542.476v10.16c0 16.842-13.653 30.475-30.476 30.475s-30.476-13.633-30.476-30.476v-10.159H176.762v203.175c0 22.43 18.204 40.635 40.635 40.635h589.206c22.43 0 40.635-18.205 40.635-40.635V572.952z"></path>\r
</svg>\r
`,
    it = {
      setGlobalRightClickMenu(t) {
        Ye.registerContextMenu(t, void 0, [
          {
            text: "设置",
            icon: xa,
            callback() {
              (g.info("右键菜单-打开-" + this.text), pt.show());
            },
          },
          {
            text: "历史匹配记录",
            icon: Ca,
            callback() {
              (g.info("右键菜单-打开-" + this.text), C.$inst.historyMatch.show());
            },
          },
          {
            text: "添加链接识别规则",
            icon: va,
            callback() {
              (g.info("右键菜单-打开-" + this.text), Ee.show(false));
            },
          },
          {
            text: "规则管理器",
            icon: Sa,
            callback() {
              (g.info("右键菜单-打开-" + this.text), Xe.showView());
            },
          },
          {
            text: "主动识别文本",
            icon: Ra,
            callback() {
              (g.info("右键菜单-打开-" + this.text), C.$inst.matchPasteText.show());
            },
          },
        ]);
      },
      setRightClickMenu(t, e, a) {
        let n = [
          {
            text: "链接",
            icon: Aa,
            callback(r, s, i, l) {
              return false;
            },
            item: [
              {
                text: "复制",
                icon: "documentCopy",
                callback: function (r, s, i, l) {
                  let o = l;
                  const { ruleKeyName: c, ruleIndex: u, shareCode: d, accessCode: h } = de.parseBoxAttrRuleInfo(o);
                  Ce.copy(c, u, d, h);
                },
              },
              {
                text: "打开",
                icon: $t,
                callback: function (r, s, i, l) {
                  let o = l;
                  const { ruleKeyName: c, ruleIndex: u, shareCode: d, accessCode: h } = de.parseBoxAttrRuleInfo(o);
                  let m = X.getBlankUrl({ ruleKeyName: c, ruleIndex: u, shareCode: d, accessCode: h });
                  Ce.openBlankUrl(m, c, u, d, h);
                },
              },
              {
                text: "后台打开",
                icon: $t,
                callback: function (r, s, i, l) {
                  let o = l;
                  const { ruleKeyName: c, ruleIndex: u, shareCode: d, accessCode: h } = de.parseBoxAttrRuleInfo(o);
                  let m = X.getBlankUrl({ ruleKeyName: c, ruleIndex: u, shareCode: d, accessCode: h });
                  Ce.openBlankUrl(m, c, u, d, h, true);
                },
              },
            ],
          },
          {
            text: "密码",
            icon: _a,
            callback: function (r, s, i) {
              return false;
            },
            item: [
              {
                text: "复制",
                icon: "documentCopy",
                callback(r, s, i, l) {
                  let o = l;
                  const { ruleKeyName: c, ruleIndex: u, shareCode: d, accessCode: h } = de.parseBoxAttrRuleInfo(o);
                  if (h == null || (typeof h == "string" && h.trim() === "")) {
                    f.warning("无访问码");
                    return;
                  }
                  p.setClip(h)
                    .then((m) => {
                      m ? f.success("已复制") : f.error("执行复制失败", { consoleLogContent: true });
                    })
                    .catch(() => {
                      f.error("执行复制失败", { consoleLogContent: true });
                    });
                },
              },
              {
                text: "修改",
                icon: "edit",
                callback: function (r, s, i, l) {
                  let o = l;
                  const { ruleKeyName: c, ruleIndex: u, shareCode: d, accessCode: h } = de.parseBoxAttrRuleInfo(o);
                  C.$inst.newAccessCodeView(this.text, c, u, d, h, (m) => {
                    if (a)
                      if (m.isUpdatedMatchedDict) {
                        let b = new Date().getTime(),
                          k = o.closest("li").querySelector(".netdiskrecord-update-time");
                        (w.text(k, p.formatTime(b)),
                          w.attr(o, "data-accesscode", m.accessCode),
                          f.success(
                            `
												<div style="text-align: left;">旧: ${h}</div>
												<div style="text-align: left;">新: ${m.accessCode}</div>`,
                            { isHTML: true }
                          ));
                      } else f.error("修改失败");
                    else
                      (w.attr(o, "data-accesscode", m.accessCode),
                        m.isUpdatedMatchedDict
                          ? f.success(
                              `
												<div style="text-align: left;">旧: ${h}</div>
												<div style="text-align: left;">新: ${m.accessCode}</div>`,
                              { isHTML: true }
                            )
                          : m.isFindInMatchedDict
                            ? f.error("修改访问码失败")
                            : f.error("修改访问码失败，因为当前已匹配字典中未找到对应的访问码"));
                  });
                },
              },
            ],
          },
          {
            text: "其它",
            icon: $a,
            callback(r, s, i, l) {
              return false;
            },
            item: [
              {
                text: "复制全部",
                icon: "documentCopy",
                callback(r, s, i, l) {
                  let c = l.closest(".netdisk-url-box-all"),
                    u = [];
                  (c.querySelectorAll(e).forEach((d) => {
                    const { ruleKeyName: h, ruleIndex: m, shareCode: b, accessCode: k } = de.parseBoxAttrRuleInfo(d);
                    let x = X.getCopyUrlInfo({ ruleKeyName: h, ruleIndex: m, shareCode: b, accessCode: k });
                    u.push(x);
                  }),
                    p
                      .setClip(
                        u.join(`
`)
                      )
                      .then((d) => {
                        d ? f.success("成功复制全部") : f.error("复制全部失败");
                      })
                      .catch(() => {
                        f.error("复制全部失败");
                      }));
                },
              },
            ],
          },
        ];
        (a ||
          n[2].item.push(
            {
              text: "删除当前",
              icon: "delete",
              callback: function (r, s, i, l) {
                let o = l,
                  c = o.closest(".netdisk-url-box");
                const { ruleKeyName: u, ruleIndex: d, shareCode: h, accessCode: m } = de.parseBoxAttrRuleInfo(o);
                let b = false;
                (N.$match.matchedInfo.forEach((k, x) => {
                  x === u &&
                    k.forEach((v, T) => {
                      T === h && ((b = true), k.delete(T), g.info("删除：", x, JSON.stringify(v)));
                    });
                }),
                  N.$match.matchedInfoRuleKey.clear(),
                  N.$match.matchedInfo.forEach((k, x) => {
                    k.length && N.$match.matchedInfoRuleKey.add(x);
                  }),
                  b ? c.remove() : f.error("发生意外情况，未在已匹配到的信息中到对应的网盘信息"));
              },
            },
            {
              text: "删除所有",
              icon: "delete",
              callback: function (r, s, i, l) {
                let o = l,
                  c = o.closest(".netdisk-url-box-all");
                const { ruleKeyName: u, ruleIndex: d, shareCode: h, accessCode: m } = de.parseBoxAttrRuleInfo(o);
                (N.$match.matchedInfo.forEach((b, k) => {
                  b.clear();
                }),
                  N.$match.matchedInfoRuleKey.clear(),
                  w.html(c, ""));
              },
            }
          ),
          Ye.registerContextMenu(t, e, n));
      },
    },
    Ye = {
      init() {
        (it.setRightClickMenu(C.$el.$linkView.$shadowRoot, ".whitesevPop .netdisk-url a"),
          this.registerIconGotoPagePosition(C.$el.$linkView.$shadowRoot),
          this.setNetDiskUrlClickEvent(C.$el.$linkView.$shadowRoot, ".netdisk-url a"),
          it.setGlobalRightClickMenu(C.$el.$linkView.$shadowRoot.querySelector(".pops .pops-alert-title > p")));
      },
      setNetDiskUrlClickEvent(t, e) {
        (B.on(t, "click", e, (a) => {
          let n = a.target;
          n.setAttribute("isvisited", "true");
          const r = de.parseBoxAttrRuleInfo(n);
          a.ctrlKey
            ? this.netDiskUrlClickEvent({ data: r, clickMode: "openBlank", $click: n })
            : this.netDiskUrlClickEvent({ data: r, $click: n });
        }),
          B.on(t, "auxclick", e, (a, n) => {
            if (a.button !== 1) return;
            (ce.preventEvent(a), n.setAttribute("isvisited", "true"));
            const r = de.parseBoxAttrRuleInfo(n);
            let s = X.getBlankUrl({
              ruleKeyName: r.ruleKeyName,
              ruleIndex: r.ruleIndex,
              shareCode: r.shareCode,
              accessCode: r.accessCode,
            });
            Ce.openBlankUrl(s, r.ruleKeyName, r.ruleIndex, r.shareCode, r.accessCode, true);
          }));
      },
      netDiskUrlClickEvent(t) {
        const { ruleKeyName: e, ruleIndex: a, shareCode: n, accessCode: r } = t.data;
        let s = t.clickMode ?? J.function.linkClickMode(t.data.ruleKeyName),
          i = () => {
            if (t.$click) {
              let l = t.$click.closest(".pops");
              if (l) {
                let o = l.querySelector('.pops-header-control[type="close"]');
                o && o.click();
              }
            }
          };
        if (s === "copy" || s === "copy-closePopup") (Ce.copy(e, a, n, r), s === "copy-closePopup" && i());
        else if (s === "openBlank" || s === "openBlank-closePopup") {
          let l = X.getBlankUrl({ ruleKeyName: e, ruleIndex: a, shareCode: n, accessCode: r });
          (q.isForwardBlankLink(e) ? Ce.openBlankWithScheme(e, a, n, r) : Ce.openBlankUrl(l, e, a, n, r),
            s === "openBlank-closePopup" && i());
        } else
          s === "parseFile" || s === "parseFile-closePopup"
            ? Ce.parseFile(e, a, n, r).then(() => {
                s === "parseFile-closePopup" && i();
              })
            : (g.error("未知点击动作：" + s), f.error("未知点击动作：" + s));
      },
      registerContextMenu(t, e, a = [], n = "whitesevSuspensionContextMenu") {
        let r = [];
        a.forEach((i) => {
          r.push({
            text: i.text,
            callback: i.callback,
            icon: i?.icon ?? "",
            iconIsLoading: i?.iconIsLoading ?? false,
            item: i?.item ?? null,
          });
        });
        let s = {
          target: t,
          targetSelector: e,
          data: r,
          isAnimation: false,
          className: n,
          only: true,
          chileMenuLeftOrRightDistance: -3,
          childMenuTopOrBottomDistance: -5,
        };
        Z.rightClickMenu(s);
      },
      registerIconGotoPagePosition(t) {
        let e, a, n;
        B.on(t, "click", ".whitesevPop .netdisk-icon .netdisk-icon-img", (r, s) => {
          let l = s.getAttribute("data-sharecode");
          if (y.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode"].value) {
            if (typeof l != "string") {
              f.error("获取data-sharecode属性失败");
              return;
            }
            if (
              (n == null
                ? (n = l)
                : n !== l && (g.info(`上一个搜索：${n}，切换至：${l}`), (e = void 0), (a = void 0), (n = l)),
              e == null && ((e = ce.findElementsWithText(document.documentElement, l)), (a = e.next())),
              a?.value)
            )
              if (
                (g.success("定位元素", a), a.value.nodeType === Node.ELEMENT_NODE && a.value.getClientRects().length)
              ) {
                if (
                  (a.value.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }),
                  y.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode-with-select"].value)
                ) {
                  let o = a.value.innerText || a.value.textContent,
                    c,
                    u,
                    d;
                  if (o.includes(l)) {
                    let h = Array.from(a.value.childNodes).filter((m) => m.nodeType === Node.TEXT_NODE);
                    for (const m of h)
                      if (m.textContent.includes(l)) {
                        ((c = m), (u = m.textContent.indexOf(l)), (d = u + l.length));
                        break;
                      }
                  }
                  try {
                    ce.selectElementText(a.value, c, u, d);
                  } catch (h) {
                    (g.error(h), ce.selectElementText(a.value));
                  }
                }
              } else if (a.value.nodeType === Node.TEXT_NODE && a.value.parentElement.getClientRects().length)
                if (y.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode-with-select"].value) {
                  let o = a.value.textContent || a.value.nodeValue,
                    c = a.value,
                    u = o.indexOf(l),
                    d = u + l.length;
                  try {
                    ce.selectElementText(a.value, c, u, d);
                  } catch (m) {
                    (g.error(m), ce.selectElementText(a.value.parentElement));
                  }
                  let h = globalThis.getSelection();
                  if (h.rangeCount > 0) {
                    let b = h.getRangeAt(0).getBoundingClientRect(),
                      k = globalThis.scrollY,
                      x = b.top + k - globalThis.innerHeight / 2;
                    globalThis.scrollTo({ behavior: "smooth", top: x });
                  } else
                    a.value.parentElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                } else
                  try {
                    let o = new Range();
                    o.selectNodeContents(a.value);
                    let c = o.getBoundingClientRect(),
                      u = globalThis.scrollY,
                      d = c.top + u - globalThis.innerHeight / 2;
                    globalThis.scrollTo({ behavior: "smooth", top: d });
                  } catch (o) {
                    (g.error(o),
                      a.value.parentElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }));
                  }
              else {
                g.error("无法定位该元素位置", a.value);
                const o = (a.value.nodeName || a.value.localName || a.value.tagName).toLowerCase();
                f.error(`无法定位该元素位置，类型：${We.escapeHtml("<")}${o}${We.escapeHtml(">")}`, { isHTML: true });
              }
            if (((a = e.next()), a.done)) {
              if (!y.smallIconNavgiator["pops-netdisk-icon-click-event-loop-find-sharecode"].value) {
                f.info("已经定位至最后一个元素了");
                return;
              }
              ((e = void 0), (a = void 0));
            }
          }
        });
      },
    };
  class Da extends be {
    async init(e) {
      super.init(e);
      let { ruleIndex: a, shareCode: n, accessCode: r } = e,
        s = "chengtong";
      if (a !== 3) {
        (g.warn("解析站暂时只支持单文件解析，非单文件链接的点击动作为新标签页打开"),
          Ye.netDiskUrlClickEvent({
            data: { ruleKeyName: s, ruleIndex: a, shareCode: n, accessCode: r },
            clickMode: "openBlank",
          }));
        return;
      }
      let i = ie("chengtong-parse-file-api-host");
      if (p.isNull(i)) {
        f.error("请先配置文件解析接口地址");
        return;
      }
      i.endsWith("/") || (i += "/");
      let l = i + "?file=" + n;
      (p.isNotNull(r) && (l += "&pass=" + r), window.open(l, "_blank"));
    }
  }
  const st = {
    async parseFileMetaInfo(t) {
      const e = await E.get("https://whatslink.info/api/v1/link?url=" + t, {
        headers: { Referer: "https://whatslink.info/" },
        allowInterceptConfig: false,
      });
      let a = p.toJSON(e.data.responseText);
      if (!e.status) {
        if (typeof a.error == "string" && a.error.trim() !== "") {
          f.error(a.error);
          return;
        }
        f.error("请求失败");
        return;
      }
      return a;
    },
    showFileMetaInfoDialog(t) {
      Z.alert({
        title: { text: "元数据信息", position: "center" },
        content: {
          text: `
						<div class="wrapper">
							<div class="title">Summary</div>
							<div class="content">
								<div>Resource Name: ${t.name}</div>
								<div>Number of Files: ${t.count}</div>
								<div>Total File Size: ${p.formatByteToSize(t.size)}</div>
								<div>File Type: ${t.type.toLowerCase()}</div>
							</div>
						</div>
						${
              Array.isArray(t.screenshots)
                ? `
							<div class="wrapper">
								<div class="title">Screenshots</div>
								<div class="content">
									<div class="image-list">
										${t.screenshots
                      .map(
                        (e) => `
											<div class="img">
												<img src="${e.screenshot}" alt="img">
											</div>
										`
                      )
                      .join("")}
										
									</div>
								</div>
							</div>
						`
                : ""
            }
						`,
          html: true,
        },
        btn: { ok: { enable: false } },
        width: K.setting.width,
        height: "auto",
        style: `
                .pops-alert-content{
                    padding: 0 15px;
                }
                .wrapper{
                    border: 1px solid #2c3e50;
                    margin: 24px 0;
                    max-width: 100%;
                }
                .wrapper .title{
                    font-size: 18px;
                    font-weight: 700;
                    padding: 8px 24px;
                    border-bottom: 1px solid #2c3e50;
                }
                .wrapper .content{
                    padding: 24px;
                }
                .wrapper .image-list{
                    display: flex;
                    max-width: 100%;
                    overflow-x: auto;
                    overflow-y: hidden;
                    gap: 12px;
                }
                .wrapper .image-list .img{
                    flex-shrink: 0;
                    height: 120px;
                    width: 160px;
                }
                .wrapper .image-list img{
                    height: 100%;
                    width: 100%;
                    cursor: pointer;
                }
            `,
      });
    },
  };
  class Ta extends be {
    async init(e) {
      super.init(e);
      let { ruleIndex: a, shareCode: n, accessCode: r } = e,
        s = X.getBlankUrl({ ruleKeyName: "ed2k", ruleIndex: a, shareCode: n, accessCode: r }),
        i = f.loading("正在请求Api中..."),
        l = await st.parseFileMetaInfo(s);
      (i.close(), l && st.showFileMetaInfoDialog(l));
    }
  }
  class Ma extends be {
    errorCode = { UnAuthorized: "请先登录坚果云账号" };
    async init(e) {
      super.init(e);
      let { ruleIndex: a, shareCode: n, accessCode: r } = e;
      const s = this;
      let i = await s.getRequestDownloadParams();
      if (i)
        if (i.isdir) {
          let l = f.loading("正在遍历多文件信息..."),
            o = await s.getFolderInfo(i.hash);
          if (!o) {
            l.close();
            return;
          }
          let c = s.parseMoreFile(o, i.hash, i.name);
          (l.close(), C.$inst.linearChainDialogView.moreFile("坚果云文件解析", c));
        } else {
          let l = p.formatByteToSize(i.size),
            o = await s.getFileLink(i.hash, i.name);
          if (!o) return;
          (q.isForwardDownloadLink("jianguoyun") && (o = q.parseDataToSchemeUri("jianguoyun", o)),
            g.info(o),
            C.$inst.linearChainDialogView.oneFile({
              title: "坚果云盘单文件直链",
              fileName: i.name,
              fileSize: l,
              downloadUrl: o,
            }));
        }
    }
    parseMoreFile(e, a = "", n = "") {
      const r = this;
      g.info("解析多文件信息", e);
      let s = [];
      return (
        e.forEach((i) => {
          let l = i.relPath;
          (l.startsWith("/") && (l = l.replace(/^\//, "")),
            s.push({
              fileName: l,
              fileSize: i.size,
              fileType: "",
              createTime: i.mtime,
              latestTime: i.mtime,
              isFolder: false,
              index: 0,
              async clickEvent() {
                f.info("正在获取下载链接...");
                let o = await r.getDirLink(a, l, i.relPath);
                if (o)
                  return (
                    f.success("获取成功！"),
                    q.isForwardDownloadLink("jianguoyun") && (o = q.parseDataToSchemeUri("jianguoyun", o)),
                    g.info(o),
                    { autoDownload: true, mode: "aBlank", url: o }
                  );
              },
            }));
        }),
        s
      );
    }
    async getRequestDownloadParams() {
      const e = this;
      (g.info("获取hash值"), f.info("正在获取请求信息"));
      let a = /var[\s]*PageInfo[\s]*=[\s]*{([\s\S]+)};/i;
      new FormData().append("pd", e.accessCode);
      let r = {
          url: `https://www.jianguoyun.com/p/${e.shareCode}`,
          data: e.accessCode === "" ? void 0 : `pd=${e.accessCode}`,
          responseType: "html",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": p.getRandomPCUA(),
            Referer: `https://www.jianguoyun.com/p/${e.shareCode}`,
          },
        },
        s;
      if ((e.accessCode === "" ? (s = await E.get(r)) : (s = await E.post(r)), !s.status)) return;
      let i = s.data;
      (g.info("请求信息"), g.info(i));
      let l = i.responseText.match(a);
      if (l) {
        let o = l[l.length - 1];
        ((o = `({${o}})`), (o = window.eval(o)), g.info(o));
        let c = o.name,
          u = o.size,
          d = o.hash,
          h = o.needsPassword,
          m = o.owner,
          b = o.isdir,
          k = o.errorCode;
        if (
          ((c = decodeURIComponent(c)),
          g.success("是否是文件夹 ===> " + b),
          g.success("hash ===> " + d),
          g.success("name ===> " + c),
          g.success("size ===> " + u),
          h && (e.accessCode == null || e.accessCode === ""))
        ) {
          (f.error("密码不正确!"),
            C.$inst.newAccessCodeView("密码缺失", "jianguoyun", e.ruleIndex, e.shareCode, e.accessCode, (x) => {
              e.init({ ruleIndex: e.ruleIndex, shareCode: e.shareCode, accessCode: x.accessCode });
            }));
          return;
        }
        if (k === "AuthenticationFailed") {
          (f.error("密码错误"),
            C.$inst.newAccessCodeView(void 0, "jianguoyun", e.ruleIndex, e.shareCode, e.accessCode, (x) => {
              e.init({ ruleIndex: e.ruleIndex, shareCode: e.shareCode, accessCode: x.accessCode });
            }));
          return;
        }
        if (d === "" || d == null) {
          (g.error("hash为空，可能文件被撤销分享了"), f.error("文件分享已被撤销"));
          return;
        }
        if (u == null && b == false) {
          (g.error("无size，可能文件被删除了"), f.error(`“${c}”文件已被拥有者（“${m}”）删除`));
          return;
        } else return { name: c, hash: d, size: u, needsPassword: h, owner: m, isdir: b };
      } else
        i.responseText.match("对不起，找不到您指定的文件。")
          ? (g.error("啊噢！ (404) 对不起，找不到您指定的文件。"), f.error("坚果云: 对不起，找不到您指定的文件。"))
          : i.responseText.match("对不起，您的某些输入不正确。")
            ? (g.error("可能该链接不需要访问码或者访问码有问题"),
              C.$inst.newAccessCodeView(void 0, "jianguoyun", e.ruleIndex, e.shareCode, e.accessCode, (o) => {
                e.init({ ruleIndex: e.ruleIndex, shareCode: e.shareCode, accessCode: o.accessCode });
              }))
            : (g.error("获取PageInfo失败"), f.error("坚果云: 获取PageInfo失败"));
    }
    async getFileLink(e = "", a = "") {
      const n = this;
      a = encodeURIComponent(a);
      let r = await E.get({
        url: `https://www.jianguoyun.com/d/ajax/fileops/pubFileLink?k=${e}&name=${a}&wm=false${n.accessCode === "" ? "" : "&pd=" + n.accessCode}&forwin=1&_=${new Date().getTime()}`,
        responseType: "json",
        headers: { "User-Agent": p.getRandomPCUA() },
        allowInterceptConfig: false,
      });
      if (!r.status) {
        if (p.isNotNull(r.data?.responseText)) {
          let l = p.toJSON(r.data.responseText);
          (g.error("坚果云", l), l.errorCode === "UnAuthorized" ? n.gotoLogin() : f.error(l.detailMsg));
        } else f.error("请求异常");
        return;
      }
      let s = r.data;
      g.info("请求信息", s);
      let i = p.toJSON(s.responseText);
      if ((g.info("解析JSON", i), i.hasOwnProperty("errorCode"))) {
        f.error("坚果云: " + i.detailMsg);
        return;
      } else {
        if (i.hasOwnProperty("url")) return i.url;
        f.error("坚果云: 处理下载链接异常");
      }
    }
    async getDirLink(e = "", a = "", n = "/") {
      const r = this;
      a = encodeURIComponent(a);
      let s = await E.get({
        url: `https://www.jianguoyun.com/d/ajax/dirops/pubDIRLink?k=${e}&dn=${a}&p=${n}&forwin=1&_=${new Date().getTime()}`,
        responseType: "json",
        headers: { "User-Agent": p.getRandomPCUA() },
        allowInterceptConfig: false,
      });
      if (!s.status) {
        if (p.isNotNull(s.data?.responseText)) {
          let o = p.toJSON(s.data.responseText);
          (g.error("坚果云", o), o.errorCode === "UnAuthorized" ? r.gotoLogin() : f.error(o.detailMsg));
        } else f.error("请求异常");
        return;
      }
      let i = s.data;
      g.info("请求信息", i);
      let l = p.toJSON(i.responseText);
      if ((g.info(l), l.hasOwnProperty("errorCode"))) {
        f.error("坚果云: " + l.detailMsg);
        return;
      } else {
        if (l.hasOwnProperty("url")) return l.url;
        f.error("坚果云: 处理下载链接异常");
      }
    }
    async getFolderInfo(e = "") {
      let a = await E.get({
        url: `https://www.jianguoyun.com/d/ajax/dirops/pubDIRBrowse?hash=${e}&relPath=%2F&_=${Date.now()}`,
        responseType: "json",
        headers: { "User-Agent": p.getRandomPCUA() },
      });
      if (!a.status) return;
      let n = a.data;
      g.info("请求信息", n);
      let r = p.toJSON(n.responseText);
      if ((g.info(r), "objects" in r)) return r.objects;
      f.error("坚果云: 处理多文件信息异常");
    }
    gotoLogin() {
      Z.confirm(
        {
          title: { text: "提示", position: "center" },
          content: { text: "解析失败，原因：当前尚未登录坚果云，是否前往登录？" },
          btn: {
            reverse: true,
            position: "end",
            ok: {
              text: "前往",
              callback: function (e) {
                window.open("https://www.jianguoyun.com/d/login#from=https%3A%2F%2Fwww.jianguoyun.com%2F", "_blank");
              },
            },
          },
        },
        C.$config.viewSizeConfig.jianGuoYunLoginTip
      );
    }
  }
  const ge = {
    DEFAULT_HOST_NAME: "www.lanzout.com",
    MENU_KEY: "lanzou-host-name",
    get hostname() {
      return V(this.MENU_KEY, this.DEFAULT_HOST_NAME).value;
    },
  };
  let Ia = (t) => ((t = t.replace(/\/\/.+/gi, "")), (t = t.replace(/\/\*[\s\S\n]+\*\//gi, "")), t);
  class Ea extends be {
    router = {
      root(e = "") {
        return (e.startsWith("/") && (e = e.replace(/^\//, "")), `https://${ge.hostname}/${e}`);
      },
      root_tp(e = "") {
        return (e.startsWith("/") && (e = e.replace(/^\//, "")), `https://${ge.hostname}/tp/${e}`);
      },
      root_s(e = "") {
        return (e.startsWith("/") && (e = e.replace(/^\//, "")), `https://${ge.hostname}/s/${e}`);
      },
    };
    regexp = {
      unicode: { match: /[%\u4e00-\u9fa5]+/g, tip: "中文链接", isUnicode: false },
      noFile: { match: /div>来晚啦...文件取消分享了<\/div>/g, tip: "来晚啦...文件取消分享了" },
      noExists: { match: /div>文件不存在，或已删除<\/div>/g, tip: "文件不存在，或已删除" },
      linkInValid: { match: /div>文件链接失效，请获取新链接<\/div>/g, tip: "文件链接失效，请获取新链接" },
      needVipToShare: {
        match: /class="fbox">非会员.+请先开通会员/gi,
        tip: "该链接为非会员用户分享的文件，目前无法下载",
      },
      moreFile: { match: /<span id=\"filemore\" onclick=\"more\(\);\">/g },
      sign: { match: /var[\s]*(posign|postsign|vidksek|skdklds)[\s]*=[\s]*'(.+?)';/ },
      fileName: { match: /<title>(.*)<\/title>/ },
      fileSize: { match: /<span class=\"mtt\">\((.*)\)<\/span>/ },
      loadDownHost: { match: /var[\s]*(vkjxld)[\s]*=[\s]*'(.+?)'/i },
      loadDown: { match: /var[\s]*(loaddown|oreferr|spototo|domianload|hyggid)[\s]*=[\s]*'(.+?)'/i },
      appleDown: { match: /var[\s]*appitem[\s]*=[\s]*'(.+?)'/i },
      uploadTime: { match: /mt2\"\>时间:<\/span>(.+?)[\s]*<span/i },
    };
    async init(e) {
      super.init(e);
      let { ruleIndex: a, shareCode: n, accessCode: r } = e;
      this.regexp.unicode.isUnicode = !!n.match(this.regexp.unicode.match);
      let s = a === 1 ? this.router.root_s(n) : this.router.root(n),
        i = await this.getPageInfo(s);
      if (i)
        if (this.isMoreFile(i)) {
          g.info("多文件");
          let l = f.loading("正在解析多文件中，请稍后..."),
            o = await this.parseFiles(n, r);
          if (!o) {
            l.close();
            return;
          }
          let c = this.getFolderInfo(this.transformFileInfoToInfoList(n, r, o), 0);
          (l.close(), g.info("递归完毕"), C.$inst.linearChainDialogView.moreFile("蓝奏云文件解析", c));
        } else {
          g.info("单文件");
          let l = await this.getFileDownloadInfo(n, r, i);
          l &&
            C.$inst.linearChainDialogView.oneFile({
              title: "蓝奏云单文件直链",
              fileName: l.fileName,
              fileSize: l.fileSize,
              downloadUrl: l.downloadUrl,
              fileUploadTime: l.fileUploadTime,
            });
        }
    }
    transformFileInfoToInfoList(e, a, n) {
      return [
        ...n.folders.map((r) => ({
          isFolder: true,
          fileName: r.folderName,
          fileSize: 0,
          createTime: "",
          latestTime: "",
          shareCode: r.shareCode,
          accessCode: r.accessCode,
        })),
        ...(n.infos || []).map((r) => ({
          isFolder: false,
          fileName: r.name_all,
          fileSize: r.size,
          createTime: r.time,
          latestTime: r.time,
          shareCode: r.id,
          accessCode: a,
        })),
      ].filter((r) => r != null);
    }
    getFolderInfo(e, a) {
      const n = this;
      let r = [],
        s = [],
        i = [];
      return (
        e.forEach((l) => {
          l.isFolder
            ? s.push({
                fileName: l.fileName,
                fileSize: 0,
                fileType: "",
                createTime: l.createTime,
                latestTime: l.latestTime,
                isFolder: true,
                index: a,
                clickEvent: async () => {
                  let o = await this.parseFiles(l.shareCode, l.accessCode);
                  return o
                    ? n.getFolderInfo(this.transformFileInfoToInfoList(this.shareCode, this.accessCode, o), a + 1)
                    : [];
                },
              })
            : i.push({
                fileName: l.fileName,
                fileSize: l.fileSize,
                fileType: "",
                createTime: l.createTime,
                latestTime: l.latestTime,
                isFolder: false,
                index: a,
                clickEvent: async () => {
                  let o = this.ruleIndex === 1 ? this.router.root_s(l.shareCode) : this.router.root(l.shareCode),
                    c = await this.getPageInfo(o);
                  if (!c) return;
                  let u = await this.getFileDownloadInfo(l.shareCode, l.accessCode, c);
                  if (u) return { url: u.downloadUrl, autoDownload: true, mode: "aBlank" };
                },
              });
        }),
        s.sort((l, o) => l.fileName.localeCompare(o.fileName)),
        i.sort((l, o) => l.fileName.localeCompare(o.fileName)),
        (r = r.concat(s)),
        (r = r.concat(i)),
        r
      );
    }
    async getFileDownloadInfo(e, a, n) {
      let r,
        s = w.parseHTML(n.responseText, true, true),
        i = Ia(n.responseText),
        l = s.querySelector('iframe[class^="ifr"]') || s.querySelector('iframe[class^="n_downlink"]');
      if (l) {
        let o = l.getAttribute("src");
        (g.error("该链接需要重新通过iframe地址访问获取信息", o), f.info("正在请求下载信息"));
        let c =
            s.querySelector("body div.d > div")?.innerText ||
            s.querySelector("#filenajax")?.innerText ||
            s.querySelector("title")?.textContent?.replace(/ - 蓝奏云$/i, ""),
          u =
            i.match(/文件大小：<\/span>(.+?)<br>/i) ||
            s.querySelector("div.n_box div.n_file div.n_filesize")?.innerText ||
            s.querySelector(".d2 table tr td .fileinfo:nth-child(1) .fileinforight")?.innerText,
          d =
            i.match(/上传时间：<\/span>(.+?)<br>/i) ||
            s.querySelector("#file[class=''] .n_file_info span.n_file_infos")?.innerText ||
            s.querySelector(".d2 table tr td .fileinfo:nth-child(3) .fileinforight")?.innerText ||
            s.querySelector("#file[class='filter'] .n_file_info span.n_file_infos")?.innerText;
        (u
          ? (Array.isArray(u) && (u = u[u.length - 1]), typeof u == "string" && (u = u.replaceAll("大小：", "")))
          : g.error("解析文件大小信息失败"),
          d
            ? (Array.isArray(d) && (d = d[d.length - 1]),
              d.toString().toLowerCase().startsWith("android") &&
                (g.error("解析出的文件上传时间信息是Android/xxxx开头"), (d = void 0)))
            : g.error("解析文件上传时间信息失败"));
        let h = await this.getLinkByIframe(e, a, o, { fileName: c, fileSize: u, fileUploadTime: d });
        if (!h) return;
        r = { fileName: c, fileSize: u, downloadUrl: h, fileUploadTime: d };
      } else {
        g.warn("该页面不是使用iframe获取链接，使用其它方式解析");
        let o = i.match(/'sign':'(.+?)',/i) || i.match(this.regexp.sign.match),
          c = "",
          u = "",
          d = i.match(this.regexp.fileName.match),
          h = d ? d[d.length - 1].trim() : "",
          m = i.match(this.regexp.fileSize.match) || i.match(/<div class="n_filesize">大小：(.+?)<\/div>/i),
          b = m ? m[m.length - 1].trim() : "",
          k = i.match(this.regexp.uploadTime.match) || i.match(/<span class="n_file_infos">(.+?)<\/span>/i),
          x = k ? k[k.length - 1].trim() : "",
          v =
            i.match(/[\s]+url[\s]+:[\s]+'\/ajaxm.php\?file=([0-9]+)',/i) ||
            i.match(/\/\/url[\s]+:[\s]+'\/ajaxm.php\?file=([0-9]+)',/i),
          T = v ? v[v.length - 1] : "1";
        if (o) {
          ((u = o[o.length - 1]),
            g.info(`获取Sign: ${u}`),
            p.isNotNull(a) ? (g.info("传入参数=>有密码"), (c = a)) : g.info("传入参数=>无密码"));
          let _ = await this.getKNDS(),
            D = await E.post({
              url: this.router.root("ajaxm.php?file=" + T),
              responseType: "json",
              headers: {
                accept: "application/json, text/javascript, */*",
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": p.getRandomAndroidUA(),
                Origin: "https://" + ge.hostname,
                Referer: this.router.root(e),
              },
              data: `action=downprocess&sign=${u}&p=${c}&kd=${_}`,
            });
          if (!D.status) return;
          let S = D.data;
          g.info(S);
          let A = p.toJSON(S.responseText),
            R = `${A.dom}/file/${A.url}`;
          if (
            (typeof A.url == "string" && (A.url.startsWith("http") || A.url.startsWith(A.dom)) && (R = A.url),
            A.zt,
            "密码不正确".indexOf(A.inf) != -1)
          ) {
            f.error("密码不正确!");
            let M = await new Promise((F) => {
              C.$inst.newAccessCodeView(
                void 0,
                "lanzou",
                this.ruleIndex,
                e,
                a,
                (W) => {
                  F({ accessCode: W.accessCode });
                },
                () => {
                  F(void 0);
                }
              );
            });
            if (!M) return;
            a = M.accessCode;
            let I = this.ruleIndex === 1 ? this.router.root_s(e) : this.router.root(e),
              L = await this.getPageInfo(I);
            return L ? await this.getFileDownloadInfo(e, a, L) : void 0;
          } else h = A.inf ? A.inf : h;
          r = { fileName: h, fileSize: b, fileUploadTime: x, downloadUrl: R };
        } else {
          let _ = i.match(this.regexp.loadDownHost.match),
            D = i.match(this.regexp.loadDown.match),
            S = i.match(this.regexp.appleDown.match),
            A = S[S.length - 1];
          if (
            (p.isNull(D) && (D = i.match(/var[\s]*(cppat)[\s]*=[\s]*'(.+?)'/i)),
            p.isNull(_) &&
              A &&
              ((A = A[A.length - 1]), (_ = [A]), (D = [""]), g.success("多文件-当前链接猜测为苹果的文件", A)),
            p.isNull(_))
          ) {
            f.error("蓝奏云直链：获取sign的域名失败，请反馈开发者", { timeout: 3500 });
            return;
          }
          if (p.isNull(D)) {
            f.error("蓝奏云直链：获取sign失败，请反馈开发者", { timeout: 3500 });
            return;
          }
          let R = `${_[_.length - 1]}${D[D.length - 1]}`;
          r = { fileName: h, fileSize: b, fileUploadTime: x, downloadUrl: R };
        }
      }
      return (
        r && q.isForwardDownloadLink("lanzou") && (r.downloadUrl = q.parseDataToSchemeUri("lanzou", r.downloadUrl)),
        r
      );
    }
    async getPageInfo(e) {
      let a = await E.get({
        url: e,
        headers: { Accept: "*/*", "User-Agent": p.getRandomPCUA(), Referer: e },
        allowInterceptConfig: false,
      });
      if (!a.status) {
        if ((g.error(a), a.type === "ontimeout")) {
          f.error("请求超时");
          return;
        }
        if (p.isNull(a.data.responseText)) {
          f.error("请求异常");
          return;
        }
        this.checkPageCode(a.data) && f.error("请求失败，未知情况");
        return;
      }
      let n = a.data.responseText;
      if (p.isNull(n)) {
        (g.error(a), f.error("获取网页内容为空"));
        return;
      }
      if (!this.checkPageCode(a.data)) {
        g.error(a);
        return;
      }
      return a.data;
    }
    checkPageCode(e) {
      let a = e.responseText;
      return a.match(this.regexp.noFile.match)
        ? (f.error(this.regexp.noFile.tip), false)
        : a.match(this.regexp.noExists.match)
          ? (f.error(this.regexp.noExists.tip), false)
          : a.match(this.regexp.needVipToShare.match)
            ? (f.error(this.regexp.needVipToShare.tip), false)
            : a.match(this.regexp.linkInValid.match)
              ? (f.error(this.regexp.linkInValid.tip), false)
              : true;
    }
    isMoreFile(e) {
      return e.responseText.match(this.regexp.moreFile.match)
        ? (g.info("该链接为多文件"), true)
        : (g.info("该链接为单文件"), false);
    }
    async parseFiles(e, a) {
      let n = this.ruleIndex === 1 ? this.router.root_s(e) : this.router.root(e),
        r = await this.getPageInfo(n);
      if (!r) return;
      let s = r.responseText,
        i = w.parseHTML(s, true, true),
        l = Array.from(i.querySelectorAll("#folder a.mlink[href]"))
          .map((A) => {
            let R = A.href,
              I = new URL(R).pathname.match(/^\/([0-9a-zA-Z]{5,})/);
            if (I == null) return;
            let L = I[I.length - 1],
              W = A.querySelector(".filename")?.firstChild?.textContent || "";
            return { url: R, shareCode: L, accessCode: a, folderName: W };
          })
          .filter((A) => A != null),
        o,
        c = s.match(/\'fid\':(.+?),/)[1].replaceAll("'", ""),
        u = s.match(/\'uid\':(.+?),/)[1].replaceAll("'", ""),
        d = 1,
        h = s.match(/\'t\':(.+?),/)[1],
        m = new RegExp(h + `[\\s]*=[\\s]*('|")(.+?)('|");`),
        b = s.match(m)[2],
        k = s.match(/\'k\':(.+?),/)[1],
        x = new RegExp(k + `[\\s]*=[\\s]*('|")(.+?)('|");`),
        v = s.match(x)[2],
        T = e.match(this.regexp.unicode.match) ? 1 : 2,
        _ = await this.fileMoreAjax(e, a, { lx: T, fid: c, uid: u, pg: d, t: b, k: v, pwd: a }),
        D;
      if (_) {
        g.info("json_data：", _);
        const { zt: A, info: R, text: M } = _;
        if (A !== 1)
          if (A === 4) D = M;
          else if (R?.includes("密码不正确")) {
            f.error("密码不正确!");
            let I = await new Promise((L) => {
              C.$inst.newAccessCodeView(
                void 0,
                "lanzou",
                this.ruleIndex,
                e,
                a,
                (F) => {
                  L({ accssCode: F.accessCode });
                },
                () => {
                  L(void 0);
                }
              );
            });
            return I ? await this.parseFiles(e, I.accssCode) : void 0;
          } else R?.includes("没有了") ? (D = "没有文件了") : (D = "未知错误");
        Array.isArray(M) && (o = M);
      }
      typeof D == "string" && g.error(D);
      let S = { folders: l, infos: o };
      return (g.info(S), S);
    }
    async getLinkByIframe(e, a, n, r) {
      g.info(n, r);
      let s = this.router.root(n),
        i = await E.get({
          url: s,
          headers: {
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "User-Agent": p.getRandomPCUA(),
            Referer: this.router.root(e),
          },
        });
      if (!i.status) return;
      let l = i.data;
      g.info(l);
      let o = l.responseText,
        c = o.match(/'websignkey'[\s]*:[\s]*'(.+?)'/i) || o.match(/var[\s]*aihidcms[\s]*=[\s]*'(.*)';/i),
        u = o.match(/var[\s]*ciucjdsdc[\s]*=[\s]*'(.*)';/i),
        d = o.match(/var[\s]*ajaxdata[\s]*=[\s]*'(.+)';/i),
        h = o.match(/'sign':[\s]*'(.+)',/i) || o.match(/var[\s]*wp_sign[\s]*=[\s]*'(.*)';/i),
        m = o.match(/[^\/\/]url[\s]*:[\s]*'(.+?)'[\s]*,/i) || o.match(/url[\s]*:[\s]*'(.+?)'[\s]*,/),
        b = "ajaxm.php",
        k = "",
        x = "",
        v = "",
        T = "",
        _ = await this.getKNDS();
      if ((m ? (b = m[m.length - 1]) : f.error("提取ajaxm.php的具体参数失败，使用默认的" + b), c)) k = c[c.length - 1];
      else {
        f.error("ajaxm.php请求参数 websignkey 获取失败");
        return;
      }
      if (u) x = u[u.length - 1];
      else {
        f.error("ajaxm.php请求参数 websign 获取失败");
        return;
      }
      if (d) v = d[d.length - 1];
      else {
        f.error("ajaxm.php请求参数 signs 获取失败");
        return;
      }
      if (h) T = h[h.length - 1];
      else {
        f.error("ajaxm.php请求参数 sign 获取失败");
        return;
      }
      let D = { action: "downprocess", signs: v, sign: T, websign: x, websignkey: k, kd: _, ves: 1 };
      (g.success("请求的路径参数：" + b), g.success(["ajaxm.php的请求参数-> ", D]));
      let S = await E.post(this.router.root(b), {
        data: p.toSearchParamsStr(D),
        headers: {
          Accept: "application/json, text/javascript, */*",
          "Content-Type": "application/x-www-form-urlencoded",
          Referer: this.router.root(e),
          "User-Agent": p.getRandomPCUA(),
        },
      });
      if (!S.status) return;
      let A = S.data;
      g.info(A);
      let R = p.toJSON(A.responseText),
        M = `${R.dom}/file/${R.url}`;
      if (
        (R.zt,
        await E.get("https://down-load.lanrar.com/file/kdns.js", { allowInterceptConfig: false }),
        (await E.get("https://boce.lanosso.com/file/kdns2.js", { allowInterceptConfig: false })).status
          ? g.info("测试killdns2成功，不改变原downloadUrl")
          : ((M += "&lanosso"), g.info("测试killdns2失败使用参数 lanosso")),
        g.success("直链", M),
        "密码不正确".indexOf(R.inf) != -1)
      )
        (f.error("密码不正确!"),
          C.$inst.newAccessCodeView(void 0, "lanzou", this.ruleIndex, e, a, (L) => {
            this.init({ ruleIndex: this.ruleIndex, shareCode: e, accessCode: L.accessCode });
          }));
      else return ((r.fileName = p.isNotNull(R.inf) ? R.inf : r.fileName), g.info(M), M);
    }
    async getKNDS() {
      let e = await E.get("https://down-load.lanrar.com/file/kdns.js", { allowInterceptConfig: false });
      return e.status && p.isNotNull(e.data.responseText) ? 1 : 0;
    }
    async fileMoreAjax(e, a, n) {
      let r = p.toFormData({ rep: 0, up: 1, ls: 1, ...n }),
        s = this.router.root("filemoreajax.php"),
        i = await E.post({
          url: this.router.root("filemoreajax.php"),
          responseType: "json",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "User-Agent": p.getRandomAndroidUA(),
            Referer: s,
          },
          data: r,
        });
      if (!i.status) return;
      let l = i.data;
      return (g.info(l), p.toJSON(l.responseText));
    }
  }
  const nt = {
    LanZouDiskApp: "lanZouY-disk-app",
    EncryptList: [
      "Y",
      "y",
      "0",
      "Z",
      "z",
      "N",
      "n",
      "M",
      "I",
      "6",
      "m",
      "W",
      "w",
      "1",
      "X",
      "x",
      "L",
      "l",
      "K",
      "7",
      "k",
      "i",
      "U",
      "u",
      "2",
      "V",
      "v",
      "J",
      "j",
      "8",
      "G",
      "g",
      "F",
      "S",
      "s",
      "3",
      "T",
      "t",
      "H",
      "h",
      "f",
      "E",
      "e",
      "D",
      "Q",
      "q",
      "4",
      "R",
      "r",
      "9",
      "d",
      "a",
      "C",
      "c",
      "B",
      "O",
      "o",
      "5",
      "P",
      "p",
      "b",
      "A",
    ],
    decodeChar(t) {
      for (let e = 0; e < this.EncryptList.length; e++) if (t == this.EncryptList[e]) return e;
      return -1;
    },
    idEncrypt(t) {
      let e = 1,
        a = 0;
      if (t != "" && t.length > 4) {
        let n;
        t = t.substring(3, t.length - 1);
        for (let r = 0; r < t.length; r++) ((n = t.charAt(t.length - r - 1)), (a += this.decodeChar(n) * e), (e *= 62));
      }
      return a;
    },
    encrypt(t) {
      const e = Fe.enc.Utf8.parse(this.LanZouDiskApp),
        a = Fe.enc.Utf8.parse(t);
      return Fe.AES.encrypt(a, e, { mode: Fe.mode.ECB, padding: Fe.pad.Pkcs7 });
    },
    encryptHex(t) {
      return this.encrypt(t, this.LanZouDiskApp).ciphertext.toString().toUpperCase();
    },
  };
  class La extends be {
    $data = { devType: 6, devModel: "Chrome", extra: 2, type: 0, offset: 1, limit: 60 };
    uuid = void 0;
    userId = void 0;
    shareCodeId = void 0;
    async init(e) {
      super.init(e);
      let { ruleIndex: a, shareCode: n, accessCode: r } = e;
      ((this.shareCodeId = this.getDecodeShareCodeId(n)), (this.uuid = this.getEncodeUUID()));
      let s = await this.recommendList(
        this.$data.devType,
        this.$data.devModel,
        this.uuid,
        this.$data.extra,
        this.getEncodeTimeStamp(),
        this.shareCode,
        this.$data.type,
        this.$data.offset,
        this.$data.limit
      );
      if (s && s.list.length) {
        if (s.list[0]?.map?.userId) this.userId = s.list[0]?.map?.userId;
        else {
          f.error("解析获取【userId】为空");
          return;
        }
        if (s.list[0].folderIds == null) {
          g.success("该链接是 单文件");
          let i = s.list[0].fileList[0],
            o = await this.parseFolderInfo(s.list[0].fileList, 0)[0].clickEvent();
          if (o && !Array.isArray(o)) {
            let c = o.url;
            (q.isForwardDownloadLink("lanzouyx") && (c = q.parseDataToSchemeUri("lanzouyx", c)),
              C.$inst.linearChainDialogView.oneFile({
                title: "蓝奏云优享单文件直链",
                fileName: i.fileName,
                fileSize: i.fileSize * 1024,
                downloadUrl: c,
                fileUploadTime: p.formatToTimeStamp(i.updTime),
                fileLatestTime: p.formatToTimeStamp(i.updTime),
              }));
          }
        } else {
          (g.success("该链接是 多文件"), f.info("正在递归文件"));
          let i = f.loading("正在解析多文件中，请稍后..."),
            l = this.parseFolderInfo(s.list[0].fileList, 0);
          (i.close(), g.info("递归完毕"), C.$inst.linearChainDialogView.moreFile("蓝奏云优享解析", l));
        }
      }
    }
    parseFolderInfo(e, a) {
      const n = this;
      let r = [],
        s = [],
        i = [];
      return (
        e.forEach((l) => {
          l.fileType === 2
            ? s.push({
                fileName: l.folderName,
                fileSize: 0,
                fileType: "",
                createTime: new Date(l.updTime).getTime(),
                latestTime: new Date(l.updTime).getTime(),
                isFolder: true,
                index: a,
                async clickEvent(o, c) {
                  let u = n.getEncodeTimeStamp(),
                    d = l.folderId,
                    h = await n.getFolderInfo(
                      n.$data.devType,
                      n.$data.devModel,
                      n.uuid,
                      n.$data.extra,
                      u,
                      n.shareCode,
                      d,
                      n.$data.offset,
                      n.$data.limit
                    );
                  return h && h.list ? n.parseFolderInfo(h.list, a + 1) : [];
                },
              })
            : i.push({
                fileName: l.fileName,
                fileSize: l.fileSize * 1024,
                fileType: "",
                createTime: new Date(l.updTime).getTime(),
                latestTime: new Date(l.updTime).getTime(),
                isFolder: false,
                index: a,
                async clickEvent() {
                  let o = l.fileId,
                    c = l.userId || n.userId,
                    u = n.uuid;
                  if (p.isNull(c)) {
                    f.error("获取【userId】为空");
                    return;
                  }
                  if (p.isNull(u)) {
                    f.error("获取【uuid】为空");
                    return;
                  }
                  let d = await n.getDownloadFileUrl(...n.getDownloadFileParams(o, c, u));
                  if (d)
                    return (
                      q.isForwardDownloadLink("lanzouyx") && (d = q.parseDataToSchemeUri("lanzouyx", d)),
                      { url: d, autoDownload: true, mode: "aBlank" }
                    );
                },
              });
        }),
        s.sort((l, o) => l.fileName.localeCompare(o.fileName)),
        i.sort((l, o) => l.fileName.localeCompare(o.fileName)),
        (r = r.concat(s)),
        (r = r.concat(i)),
        r
      );
    }
    async recommendList(
      e = this.$data.devType,
      a = this.$data.devModel,
      n = "",
      r = this.$data.extra,
      s = "",
      i = "",
      l = this.$data.type,
      o = this.$data.offset,
      c = this.$data.limit
    ) {
      let u = await E.post(
        `https://api.ilanzou.com/unproved/recommend/list?${p.toSearchParamsStr({ devType: e, devModel: a, uuid: n, extra: r, timestamp: s, shareId: i, code: this.accessCode, type: l, offset: o, limit: c })}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            Origin: "https://www.ilanzou.com",
            Referer: "https://www.ilanzou.com/",
            "Sec-Fetch-Site": "same-site",
            Host: "api.ilanzou.com",
            "User-Agent": p.getRandomPCUA(),
          },
          responseType: "json",
        }
      );
      if (!u.status) return;
      let d = p.toJSON(u.data.responseText);
      if ((g.success("获取链接信息：", d), d.code !== 200)) {
        f.error("请求链接信息失败");
        return;
      }
      if (!d.list.length) {
        f.error("获取链接信息为空");
        return;
      }
      return d;
    }
    async getFolderInfo(
      e = this.$data.devType,
      a = this.$data.devModel,
      n = "",
      r = this.$data.extra,
      s = "",
      i = "",
      l = "",
      o = this.$data.offset,
      c = this.$data.limit
    ) {
      let u = await E.post(
        `https://api.ilanzou.com/unproved/share/list?${p.toSearchParamsStr({ devType: e, devModel: a, uuid: n, extra: r, timestamp: s, shareId: i, code: this.accessCode, folderId: l, offset: o, limit: c })}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            Origin: "https://www.ilanzou.com",
            Referer: "https://www.ilanzou.com/",
            "Sec-Fetch-Site": "same-site",
            Host: "api.ilanzou.com",
            "User-Agent": p.getRandomPCUA(),
          },
        }
      );
      if (!u.status) return;
      let d = p.toJSON(u.data.responseText);
      if ((g.success("获取文件列表信息：", d), d.code === 200)) return d;
      f.error(d.msg);
    }
    async getDownloadFileUrl(e = "", a = 1, n = this.$data.devType, r = "", s = "", i = "", l = this.shareCode) {
      return `https://api.ilanzou.com/unproved/file/redirect?${p.toSearchParamsStr({ downloadId: e, enable: a, devType: n, uuid: r, timestamp: s, auth: i, shareId: l })}`;
    }
    getEncodeUUID(e = 21) {
      return ((n = 21) =>
        crypto
          .getRandomValues(new Uint8Array(n))
          .reduce(
            (r, s) => (
              (s &= 63),
              (r += s < 36 ? s.toString(36) : s < 62 ? (s - 26).toString(36).toUpperCase() : s > 62 ? "-" : "_"),
              r
            ),
            ""
          ))(e);
    }
    getDecodeShareCodeId(e) {
      return nt.idEncrypt(e);
    }
    getEncodeTimeStamp(e = Date.now()) {
      return nt.encryptHex(e);
    }
    getDownloadFileParams(e, a = "", n) {
      const r = this;
      let s = Date.now(),
        i = nt.encryptHex(e + "|" + a),
        l = 1,
        o = r.getEncodeTimeStamp(s),
        c = nt.encryptHex(e + "|" + s);
      return [i, l, r.$data.devType, n, o, c, r.shareCode];
    }
    gotoLogin() {
      Z.confirm(
        {
          title: { position: "center", text: "蓝奏云优享" },
          content: {
            text: "必须先在【蓝奏云优享】进行登录，然后登录成功后刷新获取必备的下载参数【uuid】和【userId】。",
            html: false,
          },
          btn: {
            reverse: true,
            position: "end",
            ok: {
              text: "前往",
              enable: true,
              callback() {
                window.open("https://www.ilanzou.com", "_blank");
              },
            },
          },
        },
        C.$config.viewSizeConfig.tianYiYunLoginTip
      );
    }
  }
  class Na extends be {
    async init(e) {
      super.init(e);
      let { ruleIndex: a, shareCode: n, accessCode: r } = e,
        s = X.getBlankUrl({ ruleKeyName: "magnet", ruleIndex: a, shareCode: n, accessCode: r }),
        i = f.loading("正在请求Api中..."),
        l = await st.parseFileMetaInfo(s);
      (i.close(), l && st.showFileMetaInfoDialog(l));
    }
  }
  const Ut = {
    isSupport_GM_download() {
      try {
        return typeof bt == "function";
      } catch (t) {
        return (console.error(t), false);
      }
    },
  };
  class Va extends be {
    panelList = [];
    panelContent = "";
    OK_CODE = "0000";
    async init(e) {
      super.init(e);
      let { ruleIndex: a, shareCode: n, accessCode: r } = e;
      ((this.panelList = []), (this.panelContent = ""));
      let s = await this.checkLinkValidity(this.shareCode, this.accessCode);
      if (s)
        if (s.isFolder) {
          f.info("正在递归文件");
          let i = f.loading("正在解析多文件中，请稍后..."),
            l = await this.getShareFolder(s.data.guid);
          if (!l) {
            i.close();
            return;
          }
          let o = await this.getShareFiles(s.data.guid);
          if (!o) {
            i.close();
            return;
          }
          let c = this.getFolderInfo(s.data.guid, l, o, 0);
          (i.close(), g.info("递归完毕"), C.$inst.linearChainDialogView.moreFile("奶牛快传文件解析", c));
        } else {
          let i;
          if (
            (s.zipDownload
              ? (i = await this.getZipFileDownloadUrl(this.shareCode, s.guid, s.fileName))
              : (i = await this.getDownloadUrl(this.shareCode, s.guid, s.id)),
            !i)
          )
            return;
          (q.isForwardDownloadLink("nainiu") && (i = q.parseDataToSchemeUri("nainiu", i)),
            C.$inst.linearChainDialogView.oneFile({
              title: "奶牛快传单文件直链",
              fileName: s.fileName,
              fileType: s.fileType,
              fileSize: s.fileSize,
              downloadUrl: i,
              fileUploadTime: s.fileUploadTime,
              fileLatestTime: s.fileLatestTime,
              clickCallBack: (l) => {
                this.downloadFile(s.fileName, i);
              },
            }));
        }
    }
    async checkLinkValidity(e, a) {
      const n = this;
      let r = await n.getShareByUniqueUrl(e);
      if (!r) return false;
      let s = r.code,
        i = r.message;
      if (s !== n.OK_CODE) return (f.error(i), false);
      {
        let l = r.data.needPassword,
          o = r.data.zipDownload;
        return l && p.isNull(a)
          ? (f.error("密码缺失!"),
            C.$inst.newAccessCodeView("密码缺失", "nainiu", n.ruleIndex, n.shareCode, n.accessCode, (c) => {
              n.init({ ruleIndex: n.ruleIndex, shareCode: n.shareCode, accessCode: c.accessCode });
            }),
            false)
          : o
            ? (f.success("该链接为zip单文件"),
              {
                zipDownload: o,
                guid: r.data.guid,
                fileSize: p.formatByteToSize(r.data.firstFolder.size),
                fileName: r.data.firstFolder.title,
                fileUploadTime: p.formatTime(r.data.firstFolder.created_at),
                fileLatestTime: p.formatTime(r.data.firstFolder.updated_at),
              })
            : r.data.firstFile == null
              ? (f.success("该链接为文件夹类型"),
                { isFolder: true, guid: r.data.guid, firstFolder: r.data.firstFolder, data: r.data })
              : {
                  zipDownload: o,
                  guid: r.data.guid,
                  id: r.data.firstFile.id,
                  fileSize: p.formatByteToSize(r.data.firstFile.file_info.size),
                  fileName: r.data.firstFile.file_info.title,
                  fileType: r.data.firstFile.file_info.format,
                  fileUploadTime: p.formatTime(r.data.firstFile.created_at),
                  fileLatestTime: p.formatTime(r.data.firstFile.updated_at),
                };
      }
    }
    getFolderInfo(e, a, n, r = 0) {
      const s = this;
      let i = [],
        l = [],
        o = [];
      return (
        a.forEach((c) => {
          i.push({
            fileName: c.title,
            fileSize: 0,
            fileType: "",
            createTime: c.created_at,
            latestTime: c.updated_at,
            isFolder: true,
            index: r,
            async clickEvent() {
              if (!c.child_folder_count && !c.content_count) return [];
              let u = await s.getShareFolder(e, c.id);
              if (!u) return [];
              let d = await s.getShareFiles(e, c.id);
              return d ? s.getFolderInfo(e, u, d, r + 1) : [];
            },
          });
        }),
        n.forEach((c) => {
          let u = c.file_info.title,
            d = c.file_info.format ?? "";
          (d && (u = u + "." + d),
            i.push({
              fileName: u,
              fileSize: c.file_info.size,
              fileType: d,
              createTime: c.created_at,
              latestTime: c.updated_at,
              isFolder: false,
              index: r,
              async clickEvent() {
                let h = await s.getDownloadUrl(s.shareCode, e, c.id);
                h &&
                  (q.isForwardDownloadLink("nainiu") && (h = q.parseDataToSchemeUri("nainiu", h)),
                  s.downloadFile(u, h));
              },
            }));
        }),
        l.sort((c, u) => c.fileName.localeCompare(u.fileName)),
        o.sort((c, u) => c.fileName.localeCompare(u.fileName)),
        (i = i.concat(l)),
        (i = i.concat(o)),
        g.info("getFolderInfo", i),
        i
      );
    }
    async parseMoreFile(e, a) {}
    async getShareFolder(e, a = "", n = 0, r = 100) {
      const s = this;
      let i = await E.get(
        `https://cowtransfer.com/core/api/transfer/share/folders?transferGuid=${e}&folderId=${a}&page=${n}&size=${r}`,
        {
          headers: { Accept: "application/json", "User-Agent": p.getRandomPCUA(), Referer: "https://cowtransfer.com/" },
        }
      );
      if ((g.success(i), !i.status)) return;
      let l = p.toJSON(i.data.responseText);
      if (l.code !== s.OK_CODE) {
        f.error(l.message);
        return;
      }
      let o = l.data.folders;
      if (!Array.isArray(o)) {
        f.error("data.folders不是数组");
        return;
      }
      return o;
    }
    async getShareFiles(e, a = "", n = 0, r = 20, s = false) {
      const i = this;
      let l = await E.get(
        `https://cowtransfer.com/core/api/transfer/share/files?transferGuid=${e}&folderId=${a}&page=${n}&size=${r}&subContent=${s}`,
        {
          headers: { Accept: "application/json", "User-Agent": p.getRandomPCUA(), Referer: "https://cowtransfer.com/" },
        }
      );
      if ((g.success(l), !l.status)) return;
      let o = p.toJSON(l.data.responseText);
      if (o.code !== i.OK_CODE) {
        f.error(o.message);
        return;
      }
      let c = o.data.files;
      if (!Array.isArray(c)) {
        f.error("data.files不是数组");
        return;
      }
      return c;
    }
    async getShareByUniqueUrl(e) {
      let a = `https://cowtransfer.com/core/api/transfer/share?uniqueUrl=${e}`,
        n = await E.get({
          url: a,
          headers: { "User-Agent": p.getRandomPCUA(), Referer: "https://cowtransfer.com/s/" + e },
        });
      if ((g.info(n), !n.status)) return;
      let r = n.data,
        s = p.toJSON(r.responseText);
      return (g.info("转换的JSON", s), s);
    }
    async getDownloadUrl(e, a = "", n = "") {
      const r = this;
      let s = `https://cowtransfer.com/core/api/transfer/share/download?transferGuid=${a}&fileId=${n}`,
        i = await E.get({
          url: s,
          headers: { "User-Agent": p.getRandomPCUA(), Referer: "https://cowtransfer.com/s/" + e },
        });
      if ((g.info(i), !i.status)) return;
      let l = i.data,
        o = p.toJSON(l.responseText);
      if ((g.info("转换的JSON", o), o.code === r.OK_CODE)) return o.data.downloadUrl;
      f.error(`奶牛快传-获取直链：${o.message}`);
    }
    async getZipFileDownloadUrl(e, a = "", n = "") {
      const r = this;
      let s = `https://cowtransfer.com/core/api/transfer/share/download?transferGuid=${a}&title=${n}`,
        i = await E.get({
          url: s,
          headers: { "User-Agent": p.getRandomPCUA(), Referer: "https://cowtransfer.com/s/" + e },
        });
      if ((g.info(i), !i.status)) return;
      let l = i.data,
        o = p.toJSON(l.responseText);
      if ((g.info("转换的JSON", o), o.code === r.OK_CODE)) return o.data.downloadUrl;
      f.error(`奶牛快传-获取直链：${o.message}`);
    }
    async downloadFile(e, a) {
      if ((g.info("下载文件：", e, a), window.location.hostname === "cowtransfer.com")) {
        window.open(a, "_blank");
        return;
      }
      if (!Ut.isSupport_GM_download()) {
        f.error("当前脚本环境不支持API 【GM_download】");
        return;
      }
      f.info(`调用【GM_download】下载：${e}`);
      let n = null,
        r = false,
        s = false,
        i = f.loading("下载中...", {
          showClose: true,
          onClose() {
            !r && typeof n == "function" && n();
          },
        }),
        l = bt({
          url: a,
          name: e,
          headers: { Referer: "https://cowtransfer.com/s/" + this.shareCode },
          onload() {
            ((r = true), i.close(), f.success(`下载 ${e} 已完成`, { consoleLogContent: true }));
          },
          onprogress(o) {
            if (typeof o == "object" && "loaded" in o && "total" in o && !s) {
              let u = ((o.loaded / o.total) * 100).toFixed(2);
              (i.setText(`下载中...${u}%`), o.loaded === o.total && (s = true));
            }
          },
          onerror(o) {
            (i.close(),
              g.error("下载失败error👉", o),
              typeof o == "object" && o.error
                ? f.error(`下载 ${e} 失败或已取消 原因：${o.error}`, { timeout: 6e3, consoleLogContent: true })
                : f.error(`下载 ${e} 失败或已取消`, { consoleLogContent: true }));
          },
          ontimeout() {
            (i.close(), f.error(`下载 ${e} 请求超时`, { consoleLogContent: true }));
          },
        });
      typeof l == "object" && l != null && "abort" in l && (n = l.abort);
    }
  }
  class Ua extends be {
    shareId = void 0;
    shareMode = 1;
    code = {
      ShareNotFoundFlatDir: "抱歉，该文件的分享平铺目录未找到",
      ShareNotFound: "抱歉，您访问的页面地址有误，或者该页面不存在。",
      ShareAuditNotPass: "抱歉，该内容审核不通过",
      FileNotFound: "抱歉，文件不存在",
      ShareExpiredError: "抱歉，您访问的页面地址有误，或者该页面不存在",
      ShareAuditWaiting: "抱歉，该链接处于审核中",
      ShareInfoNotFound: "抱歉，您访问的页面地址有误，或者该页面不存在",
      FileTooLarge: "抱歉，文件太大，不支持下载",
      InvalidSessionKey:
        "天翼云PC端Cookie未生成，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC且在登录后要等待进入个人云空间后生成Cookie，不是手机端浏览的个人云空间，那样生成的Cookie无法使用)",
    };
    async init(e) {
      super.init(e);
      let { ruleIndex: a, shareCode: n, accessCode: r } = e,
        s = await this.getShareInfoByCodeV2(n);
      if (s) {
        if ((g.info("解析的JSON信息", s), s.needAccessCode && p.isNull(this.accessCode))) {
          (f.error("密码不正确!"),
            C.$inst.newAccessCodeView(void 0, "tianyiyun", this.ruleIndex, this.shareCode, this.accessCode, (i) => {
              this.init({ ruleIndex: this.ruleIndex, shareCode: this.shareCode, accessCode: i.accessCode });
            }));
          return;
        }
        if ("shareId" in s) this.shareId = s.shareId;
        else {
          let i = await this.getShareId(n, r);
          i && (this.shareId = i);
        }
        if (("shareMode" in s && (this.shareMode = s.shareMode), this.shareId != null))
          if (s.isFolder) {
            f.info("正在递归文件");
            let i = f.loading("正在解析多文件中，请稍后..."),
              l = s.fileId,
              o = await this.listShareDir(n, r, void 0, void 0, l, l, void 0, this.shareId, void 0, void 0, void 0);
            if (!o) {
              i.close();
              return;
            }
            let c = this.getFolderInfo(n, r, o, 0);
            (i.close(), g.info("递归完毕"), C.$inst.linearChainDialogView.moreFile("天翼云文件解析", c));
            return;
          } else {
            let i = await this.getDownloadUrl(this.shareCode, this.accessCode, s.fileId, this.shareId);
            i &&
              (q.isForwardDownloadLink("tianyiyun") && (i = q.parseDataToSchemeUri("tianyiyun", i)),
              C.$inst.linearChainDialogView.oneFile({
                title: "天翼云单文件直链",
                fileName: s.fileName,
                fileSize: p.formatByteToSize(s.fileSize),
                downloadUrl: i,
                fileUploadTime: s.fileCreateDate,
                fileLatestTime: s.fileLastOpTime,
              }));
          }
      }
    }
    async getUserBriefInfo(e) {
      const a = this;
      let n = await E.get("https://cloud.189.cn/api/portal/v2/getUserBriefInfo.action", {
        headers: {
          Accept: "application/json;charset=UTF-8",
          Referer: "https://cloud.189.cn/web/share?code=" + e,
          "User-Agent": p.getRandomPCUA(),
        },
        allowInterceptConfig: false,
      });
      if ((g.info(n), !n.status)) {
        let s = p.toJSON(n.data.responseText);
        s.res_code in a.code ? f.error(a.code[s.res_code]) : f.error("请求异常");
        return;
      }
      let r = p.toJSON(n.data.responseText);
      if (r.res_code === 0) return r;
    }
    async getShareInfoByCodeV2(e) {
      const a = this;
      let n = await E.post({
        url: "https://cloud.189.cn/api/open/share/getShareInfoByCodeV2.action",
        data: `shareCode=${e}`,
        headers: {
          Accept: "application/json;charset=UTF-8",
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": p.getRandomPCUA(),
          "Sign-Type": 1,
          Referer: "https://cloud.189.cn/web/share?code=" + e,
          Origin: "https://cloud.189.cn",
        },
        allowInterceptConfig: false,
      });
      if (!n.status) {
        let i = p.toJSON(n.data.responseText);
        (g.error("获取下载参数失败的JSON信息", i),
          i.res_code in a.code ? f.error(a.code[i.res_code]) : f.error(i.res_message));
        return;
      }
      let r = n.data;
      g.info(r);
      let s = p.toJSON(r.responseText);
      if (s.res_code == 0) return s;
      a.code.hasOwnProperty(s.res_code) ? f.error(a.code[s.res_code]) : f.error("获取FileId失败");
    }
    async getShareId(e, a) {
      let n = await E.get({
        url: `https://cloud.189.cn/api/open/share/checkAccessCode.action?shareCode=${e}&accessCode=${a}`,
        headers: {
          Accept: "application/json;charset=UTF-8",
          "Cache-Control": "no-cache",
          "User-Agent": p.getRandomPCUA(),
          "Sign-Type": 1,
          Referer: `https://cloud.189.cn/web/share?code=${e}`,
        },
        responseType: "json",
      });
      if (!n.status) return;
      let r = n.data;
      g.info(r);
      let s = p.toJSON(r.responseText);
      if (s.res_code === 0 && "shareId" in s) return s.shareId;
      (f.error("获取shareId失败"), g.info(s));
    }
    getNoCacheValue() {
      let e = "";
      for (let a = 0; a < 17; a++) e += p.getRandomValue(1, 9);
      return "0." + e;
    }
    async getDownloadUrl(e, a, n, r) {
      const s = this;
      let i = await E.get({
        url: `https://cloud.189.cn/api/open/file/getFileDownloadUrl.action?fileId=${n}&dt=1&shareId=${r}`,
        headers: {
          Accept: "application/json;charset=UTF-8",
          "Cache-Control": "no-cache",
          "User-Agent": p.getRandomPCUA(),
          Referer: `https://cloud.189.cn/web/share?code=${e}`,
          "Sign-Type": 1,
        },
        responseType: "json",
        allowInterceptConfig: false,
      });
      if ((g.info(i), !i.status)) {
        let c = p.toJSON(i.data.responseText);
        c.errorCode === "InvalidSessionKey"
          ? s.gotoLogin(s.code.InvalidSessionKey)
          : c.res_code in s.code
            ? f.error(s.code[c.res_code])
            : f.error("请求异常");
        return;
      }
      let l = i.data,
        o = p.toJSON(l.responseText);
      if ((g.info(o), o.res_code === 0)) return o.fileDownloadUrl;
      o.res_code === "InvalidSessionKey" || o.errorCode === "InvalidSessionKey"
        ? s.gotoLogin(s.code.InvalidSessionKey)
        : s.code.hasOwnProperty(o.res_code)
          ? f.error(s.code[o.res_code])
          : (f.error("请求失败"), g.error(l));
    }
    gotoLogin(e = "") {
      Z.confirm(
        {
          title: { position: "center", text: "天翼云" },
          content: { text: e, html: false },
          btn: {
            reverse: true,
            position: "end",
            ok: {
              text: "前往",
              enable: true,
              callback() {
                window.open(
                  "https://cloud.189.cn/api/portal/loginUrl.action?redirectURL=https://cloud.189.cn/web/main",
                  "_blank"
                );
              },
            },
          },
        },
        C.$config.viewSizeConfig.tianYiYunLoginTip
      );
    }
    async listShareDir(e, a, n = 1, r = 60, s, i, l = true, o, c = 5, u = "lastOpTime", d = true) {
      const h = this,
        m = {
          pageNum: n,
          pageSize: r,
          fileId: s,
          shareDirFileId: i,
          isFolder: l,
          shareId: o,
          shareMode: this.shareMode,
          iconOption: c,
          orderBy: u,
          descending: d,
          accessCode: a,
        };
      let b = await E.get(`https://cloud.189.cn/api/open/share/listShareDir.action?${p.toSearchParamsStr(m)}`, {
        headers: {
          Accept: "application/json;charset=UTF-8",
          Referer: `https://cloud.189.cn/web/share?code=${e}`,
          "Sign-Type": 1,
          "User-Agent": p.getRandomPCUA(),
        },
        responseType: "json",
        allowInterceptConfig: false,
      });
      if (!b.status) {
        let v = p.toJSON(b.data.responseText);
        (g.error("解析文件夹信息失败", v),
          v.res_code in h.code
            ? f.error(h.code[v.res_code])
            : "res_message" in v
              ? f.error(v.res_message)
              : f.error("解析文件夹信息失败"));
        return;
      }
      let k = b.data;
      g.info(k);
      let x = p.toJSON(k.responseText);
      if (x.res_code == 0) return x.fileListAO;
      h.code.hasOwnProperty(x.res_code) ? f.error(h.code[x.res_code]) : f.error("获取FileId失败");
    }
    getFolderInfo(e, a, n, r = 0) {
      const s = this;
      let i = [],
        l = [],
        o = [];
      return (
        n.folderList.forEach((c) => {
          i.push({
            fileName: c.name,
            fileSize: 0,
            fileType: "",
            createTime: p.formatToTimeStamp(c.createDate),
            latestTime: p.formatToTimeStamp(c.lastOpTime),
            isFolder: true,
            index: r,
            async clickEvent() {
              let u = await s.listShareDir(e, a, 1, 100, c.id, c.id, void 0, s.shareId, void 0, void 0, void 0);
              return u ? s.getFolderInfo(e, a, u, r + 1) : [];
            },
          });
        }),
        n.fileList.forEach((c) => {
          i.push({
            fileName: c.name,
            fileSize: c.size,
            fileType: "",
            createTime: p.formatToTimeStamp(c.createDate),
            latestTime: p.formatToTimeStamp(c.lastOpTime),
            isFolder: false,
            index: r,
            async clickEvent() {
              let u = await s.getDownloadUrl(e, a, c.id, s.shareId);
              if (u)
                return (
                  q.isForwardDownloadLink("tianyiyun") && (u = q.parseDataToSchemeUri("tianyiyun", u)),
                  { autoDownload: true, mode: "aBlank", url: u }
                );
            },
          });
        }),
        l.sort((c, u) => c.fileName.localeCompare(u.fileName)),
        o.sort((c, u) => c.fileName.localeCompare(u.fileName)),
        (i = i.concat(l)),
        (i = i.concat(o)),
        g.info("getFolderInfo", i),
        i
      );
    }
  }
  class za extends be {
    async init(e) {
      super.init(e);
      let { ruleIndex: a, shareCode: n, accessCode: r } = e;
      if ((f.info("检查是否已登录UC网盘"), !(await this.isLogin()))) {
        this.gotoLogin(
          "检测到尚未登录UC网盘，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC才有登录选项)"
        );
        return;
      }
      let i = await this.getStoken(this.shareCode, this.accessCode);
      if (!i) return;
      let l = await this.getDetail(this.shareCode, this.accessCode, i);
      if (!l) {
        f.error("UC网盘：获取detail失败");
        return;
      }
      if (l.length === 1 && l[0].dir == false && l[0].file_type === 1) {
        let o = l[0],
          c = await this.getDownload(this.shareCode, i, o.fid, o.share_fid_token);
        if (!c) return;
        if (!c[0].download_url) {
          f.error("获取download_url失败");
          return;
        }
        C.$inst.linearChainDialogView.oneFile({
          title: "UC网盘单文件直链",
          fileName: c[0].file_name,
          fileSize: p.formatByteToSize(c[0].size),
          downloadUrl: c[0].download_url,
          fileUploadTime: p.formatTime(c[0].created_at),
          fileLatestTime: p.formatTime(c[0].last_update_at),
          clickCallBack: () => {
            this.downloadFile(c[0].file_name, c[0].download_url);
          },
        });
      } else {
        f.info("正在递归文件");
        let o = f.loading("正在解析多文件中，请稍后..."),
          c = this.getFolderInfo(l, i, 0);
        (o.close(), g.info("递归完毕"), C.$inst.linearChainDialogView.moreFile("UC网盘文件解析", c));
        return;
      }
    }
    async isLogin() {
      let e = await E.get("https://drive.uc.cn/", { headers: { "User-Agent": p.getRandomPCUA() } });
      if ((g.success("判断是否已登录UC网盘", e), !!e.status))
        return e.data.finalUrl === "https://drive.uc.cn/list" ? "已登录" : false;
    }
    downloadFile(e, a) {
      if ((g.info("调用【GM_download】下载：", arguments), window.location.hostname === "drive.uc.cn")) {
        window.open(a, "_blank");
        return;
      }
      if (!Ut.isSupport_GM_download()) {
        f.error("当前脚本环境不支持API 【GM_download】");
        return;
      }
      f.info(`调用【GM_download】下载：${e}`);
      let n = null,
        r = false,
        s = false,
        i = f.loading("下载中...", {
          showClose: true,
          onClose() {
            !r && typeof n == "function" && n();
          },
        }),
        l = bt({
          url: a,
          name: e,
          headers: { Referer: "https://drive.uc.cn/" },
          onload() {
            ((r = true), i.close(), f.success(`下载 ${e} 已完成`, { consoleLogContent: true }));
          },
          onprogress(o) {
            if (typeof o == "object" && "loaded" in o && "total" in o && !s) {
              let u = ((o.loaded / o.total) * 100).toFixed(2);
              (i.setText(`下载中...${u}%`), o.loaded === o.total && (s = true));
            }
          },
          onerror(o) {
            (i.close(),
              g.error("下载失败error👉", o),
              typeof o == "object" && o.error
                ? f.error(`下载 ${e} 失败或已取消 原因：${o.error}`, { timeout: 6e3, consoleLogContent: true })
                : f.error(`下载 ${e} 失败或已取消`, { consoleLogContent: true }));
          },
          ontimeout() {
            (i.close(), f.error(`下载 ${e} 请求超时`, { consoleLogContent: true }));
          },
        });
      typeof l == "object" && l != null && "abort" in l && (n = l.abort);
    }
    gotoLogin(e = "") {
      Z.confirm(
        {
          title: { position: "center", text: "UC网盘" },
          content: { text: e, html: false },
          btn: {
            reverse: true,
            position: "end",
            ok: {
              text: "前往",
              enable: true,
              callback() {
                window.open("https://drive.uc.cn", "_blank");
              },
            },
          },
        },
        C.$config.viewSizeConfig.tianYiYunLoginTip
      );
    }
    async getStoken(e, a) {
      let n = await E.post("https://pc-api.uc.cn/1/clouddrive/share/sharepage/token?entry=ft&fr=pc&pr=UCBrowser", {
        data: JSON.stringify({ share_for_transfer: true, passcode: a, pwd_id: e }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=UTF-8",
          "User-Agent": p.getRandomPCUA(),
          Origin: "https://drive.uc.cn",
          Referer: "https://drive.uc.cn/",
        },
        allowInterceptConfig: false,
      });
      if (!n.status) {
        let s = p.toJSON(n.data.responseText);
        (g.error("获取stoken失败JSON信息", s),
          "message" in s ? f.error(s.message) : f.error("请求异常，获取stoken失败"));
        return;
      }
      let r = p.toJSON(n.data.responseText);
      if ((g.info("获取stoken：", r), r.code !== 0)) {
        (g.error("获取stoken失败", r), f.error("获取stoken失败"));
        return;
      }
      return r.data.stoken;
    }
    async getDetail(e, a, n, r = 0, s = 0, i = 1, l = 50, o = 0, c = 0, u = 1) {
      let d = await E.get(
        `https://pc-api.uc.cn/1/clouddrive/transfer_share/detail?pr=UCBrowser&fr=h5&pwd_id=${e}&__t=${new Date().getTime()}&passcode=${a}&stoken=${encodeURIComponent(n)}&pdir_fid=${r}&force=${s}&_page=${i}&_size=${l}&_fetch_banner=${o}&_fetch_share=${c}&_fetch_total=${u}&_sort=${encodeURIComponent("file_type:asc,file_name:asc")}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "User-Agent": p.getRandomPCUA(),
            Origin: "https://drive.uc.cn",
            Referer: "https://drive.uc.cn/",
          },
        }
      );
      if (!d.status) return;
      let h = p.toJSON(d.data.responseText);
      if ((g.info("获取detail：", h), h.code !== 0)) {
        (g.error("获取detail失败", h), f.error("获取detail失败"));
        return;
      }
      let m = h.metadata;
      return m && m._total && m._total > m._size
        ? await this.getDetail(e, a, n, r, s, i, m._total, o, c, u)
        : h.data.list;
    }
    async getDownload(e, a, n, r) {
      let s = await E.post("https://pc-api.uc.cn/1/clouddrive/file/download?entry=ft&fr=pc&pr=UCBrowser", {
        data: JSON.stringify({ fids: [n], pwd_id: e, stoken: a, fids_token: [r] }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=UTF-8",
          "User-Agent": p.getRandomPCUA(),
          Origin: "https://drive.uc.cn",
          Referer: "https://drive.uc.cn/",
        },
      });
      if (!s.status) return;
      let i = p.toJSON(s.data.responseText);
      if ((g.info("获取download：", i), i.code !== 0)) {
        (g.error("获取download失败", i), f.error("获取download失败"));
        return;
      }
      if (i.data.length === 0) {
        (g.error("获取download detail失败", i), f.error("获取download detail失败失败"));
        return;
      }
      return i.data;
    }
    getFolderInfo(e, a, n = 0) {
      const r = this;
      let s = [],
        i = [],
        l = [];
      return (
        e.forEach((o) => {
          o.dir == false && o.file_type === 1
            ? l.push({
                fileName: o.file_name,
                fileSize: o.size,
                fileType: "",
                createTime: o.created_at,
                latestTime: o.updated_at,
                isFolder: false,
                index: n,
                async clickEvent() {
                  let c = "",
                    u = await r.getDownload(r.shareCode, a, o.fid, o.share_fid_token);
                  if ((u && u.length ? (c = u[0].download_url) : (c = ""), o.ban)) f.error("文件已被禁止下载");
                  else {
                    let d = c;
                    if ((q.isForwardDownloadLink("uc") && (d = q.parseDataToSchemeUri("uc", d)), d === c))
                      r.downloadFile(o.file_name, c);
                    else return { autoDownload: true, mode: "aBlank", url: c };
                  }
                },
              })
            : i.push({
                fileName: o.file_name,
                fileSize: o.size,
                fileType: "",
                createTime: o.created_at,
                latestTime: o.updated_at,
                isFolder: true,
                index: n,
                async clickEvent() {
                  if (o.include_items === 0) return (g.success("里面没有文件"), []);
                  let c = await r.getDetail(r.shareCode, r.accessCode, a, o.fid);
                  return c ? r.getFolderInfo(c, a, n + 1) : [];
                },
              });
        }),
        i.sort((o, c) => o.fileName.localeCompare(c.fileName)),
        l.sort((o, c) => o.fileName.localeCompare(c.fileName)),
        (s = s.concat(i)),
        (s = s.concat(l)),
        g.info("getFilesInfoByRec", s),
        s
      );
    }
  }
  class Fa extends be {
    token = void 0;
    code = {
      1004: "no token",
      1008: "您没有权限访问",
      1013: "糟糕，此任务已过期销毁，下次要记得续期",
      1066: "对方设置的下载 / 预览次数已用完",
      1088: "糟糕，您访问的页面不存在",
    };
    async init(e) {
      super.init(e);
      let { ruleIndex: a, shareCode: n, accessCode: r } = e;
      if ((f.info("正在请求直链中..."), !(await this.getWssToken()))) return;
      let i = await this.getPid();
      i && (await this.getFileNList(i.bid, i.pid));
    }
    async getWssToken() {
      const e = this;
      let a = await E.post("https://www.wenshushu.cn/ap/login/anonymous", {
        responseType: "json",
        data: JSON.stringify({ dev_info: "{}" }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": p.getRandomAndroidUA(),
          Referer: "https://www.wenshushu.cn/f/" + e.shareCode,
        },
      });
      if ((g.success(a), !a.status)) return;
      let n = p.toJSON(a.data.responseText);
      if (n.code === 0) return ((e.token = n.data.token), n.data.token);
      n.code in e.code ? f.error(e.code[n.code]) : f.error("获取wss失败");
    }
    async getPid() {
      const e = this;
      let a = await E.post({
        url: "https://www.wenshushu.cn/ap/task/mgrtask",
        responseType: "json",
        data: JSON.stringify({ tid: e.shareCode, password: "", ufileid: "" }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": p.getRandomAndroidUA(),
          Referer: "https://www.wenshushu.cn/f/" + e.shareCode,
          "x-token": e.token,
        },
      });
      if ((g.success(a), !a.status)) return;
      let n = a.data,
        r = p.toJSON(n.responseText);
      if (r.code === 0) return { bid: r.data.boxid, pid: r.data.ufileid };
      r.code in e.code ? f.error(e.code[r.code]) : f.error("获取pid失败");
    }
    async getFileNList(e, a) {
      const n = this;
      let r = await E.post("https://www.wenshushu.cn/ap/ufile/nlist", {
        responseType: "json",
        data: JSON.stringify({
          start: 0,
          sort: { name: "asc" },
          bid: e,
          pid: a,
          options: { uploader: "true" },
          size: 50,
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": p.getRandomAndroidUA(),
          Referer: "https://www.wenshushu.cn/f/" + n.shareCode,
          "x-token": n.token,
        },
      });
      if ((g.success(r), !r.status)) return;
      let s = r.data,
        i = p.toJSON(s.responseText);
      i.code === 0
        ? i.data.fileList[0].type === 2
          ? (f.error("该链接为多层级文件嵌套，跳转"),
            Ce.openBlankUrl(
              X.getBlankUrl({
                ruleKeyName: "wenshushu",
                ruleIndex: n.ruleIndex,
                shareCode: n.shareCode,
                accessCode: n.accessCode,
              }),
              "wenshushu",
              n.ruleIndex,
              n.shareCode,
              n.accessCode
            ))
          : await n.getDownloadUrl(i.data.fileList[0])
        : i.code in n.code
          ? f.error(n.code[i.code])
          : f.error("获取文件信息失败");
    }
    async getDownloadUrl(e) {
      const a = this;
      let n = e.fname,
        r = p.formatByteToSize(e.size),
        s = await E.post("https://www.wenshushu.cn/ap/dl/sign", {
          responseType: "json",
          data: JSON.stringify({ ufileid: e.fid, consumeCode: 0 }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "User-Agent": p.getRandomAndroidUA(),
            Referer: "https://www.wenshushu.cn/f/" + a.shareCode,
            "x-token": a.token,
          },
        });
      if (!s.status) return;
      g.success(s);
      let i = s.data,
        l = p.toJSON(i.responseText);
      if (l.code == 0) {
        let o = l.data.url;
        o === ""
          ? f.error("对方的分享流量不足")
          : (q.isForwardDownloadLink("wenshushu") && (o = q.parseDataToSchemeUri("wenshushu", o)),
            C.$inst.linearChainDialogView.oneFile({
              title: "文叔叔单文件直链",
              fileName: n,
              fileSize: r,
              downloadUrl: o,
            }));
      } else l.data in a.code ? f.error(a.code[l.data]) : f.error("获取下载链接失败");
    }
  }
  const ot = {
      rule: {
        baidu: ga,
        lanzou: Ea,
        lanzouyx: La,
        tianyiyun: Ua,
        wenshushu: Fa,
        _123pan: ha,
        jianguoyun: Ma,
        nainiu: Va,
        uc: za,
        aliyun: fa,
        chengtong: Da,
        magnet: Na,
        ed2k: Ta,
      },
    },
    Ke = {
      replaceText(t, e, a) {
        if (Array.isArray(e)) for (const n of e) t = this.replaceText(t, n, a);
        else typeof e == "string" ? (t = t.replaceAll(e, a)) : (t = t.replace(e, a));
        return t;
      },
    },
    X = {
      getBlankUrl(t) {
        let e = t.debugConfig?.config ?? N.$rule.ruleOption[t.ruleKeyName][t.ruleIndex],
          a = e.blank;
        if (
          (t.shareCode &&
            ((a = re.replaceParam(a, { shareCode: t.shareCode })),
            t.debugConfig?.logCallBack?.({
              status: true,
              msg: ["正则: blank", "作用: 用于点击跳转的链接", "备注: 对shareCode进行参数替换", `结果: ${a}`],
            })),
          t.accessCode && t.accessCode !== ""
            ? ((a = re.replaceParam(a, { accessCode: t.accessCode })),
              t.debugConfig?.logCallBack?.({
                status: true,
                msg: ["正则: blank", "作用: 用于点击跳转的链接", "备注: 对accessCode进行参数替换", `结果: ${a}`],
              }))
            : ((a = Ke.replaceText(a, N.$extraRule.noAccessCodeRegExp, "")),
              t.debugConfig?.logCallBack?.({
                status: true,
                msg: [
                  "正则: 内置的noAccessCodeRegExp",
                  "作用: 因accessCode为空，使用该正则去除不需要的字符串",
                  `结果: ${a}`,
                ],
              })),
          e.paramMatch)
        ) {
          let n = N.$match.matchedInfo.get(t.ruleKeyName).get(t.shareCode),
            s = (t.debugConfig?.matchText || n.matchText).match(e.paramMatch),
            i = {};
          if (s) for (let l = 0; l < s.length; l++) i[`$${l}`] = s[l];
          ((a = re.replaceParam(a, i)),
            t.debugConfig?.logCallBack?.({
              status: true,
              msg: [
                "正则: paramMatch",
                "作用: 用于对matchText进行提取需要的关键内容，替换关键字：{#$1#}、{#$2#}...",
                "参数: " + JSON.stringify(i, void 0, 4),
                `结果: ${a}`,
              ],
            }));
        }
        return a;
      },
      getCopyUrlInfo(t) {
        let e = t.debugConfig?.config ?? N.$rule.ruleOption[t.ruleKeyName][t.ruleIndex],
          a = e.copyUrl;
        if (
          (t.shareCode &&
            ((a = re.replaceParam(a, { shareCode: t.shareCode })),
            t.debugConfig?.logCallBack?.({
              status: true,
              msg: ["正则: copyUrl", "作用: 用于复制到剪贴板的链接", "备注: 对shareCode进行参数替换", `结果: ${a}`],
            })),
          t.accessCode && t.accessCode !== ""
            ? ((a = re.replaceParam(a, { accessCode: t.accessCode })),
              t.debugConfig?.logCallBack?.({
                status: true,
                msg: ["正则: copyUrl", "作用: 用于复制到剪贴板的链接", "备注: 对accessCode进行参数替换", `结果: ${a}`],
              }))
            : ((a = Ke.replaceText(a, N.$extraRule.noAccessCodeRegExp, "")),
              t.debugConfig?.logCallBack?.({
                status: true,
                msg: [
                  "正则: 内置的noAccessCodeRegExp",
                  "作用: 因accessCode为空，使用该正则去除不需要的字符串",
                  `结果: ${a}`,
                ],
              })),
          e.paramMatch)
        ) {
          let n = N.$match.matchedInfo.get(t.ruleKeyName).get(t.shareCode),
            s = (t.debugConfig?.matchText || n.matchText).match(e.paramMatch),
            i = {};
          if (s) for (let l = 0; l < s.length; l++) i[`$${l}`] = s[l];
          ((a = re.replaceParam(a, i)),
            t.debugConfig?.logCallBack?.({
              status: true,
              msg: [
                "正则: paramMatch",
                "作用: 用于对matchText进行提取需要的关键内容，替换关键字：{#$1#}、{#$2#}...",
                "参数: " + JSON.stringify(i, void 0, 4),
                `结果: ${a}`,
              ],
            }));
        }
        return (t.debugConfig?.logCallBack?.({ status: true, msg: "处理完毕的copyUrl: " + a }), a);
      },
    },
    Ce = {
      copy(t, e, a, n, r = "已复制") {
        p.setClip(X.getCopyUrlInfo({ ruleKeyName: t, ruleIndex: e, shareCode: a, accessCode: n }))
          .then((s) => {
            s ? f.success(r) : f.error("执行复制失败", { consoleLogContent: true });
          })
          .catch(() => {
            f.error("执行复制失败", { consoleLogContent: true });
          });
      },
      async parseFile(t, e, a, n) {
        if ((g.success("链接解析：", [...arguments]), ot.rule[t])) {
          let r = new ot.rule[t]();
          const s = { ruleIndex: e, shareCode: a, accessCode: n ?? "" };
          ((r.ruleIndex = s.ruleIndex),
            (r.shareCode = s.shareCode),
            (r.accessCode = s.accessCode),
            g.info(["文件解析：", s]),
            await r.init(s));
        } else (g.error(`${t} 未配置解析函数`, [t, e, a, n]), f.error("该链接未配置解析函数"));
      },
      openBlankUrl(t, e, a, n, r, s = false) {
        (g.success(`新标签页打开${s ? "（后台打开）" : ""}`, [...arguments]),
          Ge.$data.enable &&
            Ge.addValue({ url: t, ruleKeyName: e, ruleIndex: a, shareCode: n, accessCode: r, time: Date.now() }),
          q.isForwardBlankLink(e) && (t = q.parseDataToSchemeUri(e, t)),
          He("meta[name='referrer']")?.setAttribute("content", "no-referrer"));
        let i = () => {
          if (s) Ht(t, { active: false });
          else
            try {
              let l = window.open(t, "_blank");
              l && l.focus();
            } catch (l) {
              g.error(l, t);
              let o = w.createElement("a");
              (o.setAttribute("href", t), o.setAttribute("target", "_blank"), o.click(), o.remove());
            }
        };
        p.isNotNull(r) && J.linkClickMode_openBlank.openBlankWithCopyAccessCode(e)
          ? p.setClip(r).then(() => {
              i();
            })
          : i();
      },
      openBlankWithScheme(t, e, a, n) {
        g.success("scheme新标签页打开", [...arguments]);
        let r = X.getBlankUrl({ ruleKeyName: t, ruleIndex: e, shareCode: a, accessCode: n });
        ((r = q.parseDataToSchemeUri(t, r)), window.open(r, "_blank"));
      },
    },
    $ = {
      loading: {
        code: 1,
        msg: "验证中...",
        setIcon(t) {
          w.html(t, O.config.iconSVG.loading);
        },
        setView(t, e, a) {
          (Q.setViewCheckValid(t, "loading", a ?? this.msg), this.setIcon(t));
        },
      },
      success: {
        code: 200,
        msg: "有效",
        setIcon(t) {
          w.html(
            t,
            `
				<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
					<path
					fill="currentColor"
					d="M874.119618 149.859922A510.816461 510.816461 0 0 0 511.997 0.00208a509.910462 509.910462 0 0 0-362.119618 149.857842c-199.817789 199.679789-199.817789 524.581447 0 724.260236a509.969462 509.969462 0 0 0 362.119618 149.857842A508.872463 508.872463 0 0 0 874.119618 874.120158c199.836789-199.679789 199.836789-524.581447 0-724.260236zM814.94268 378.210681L470.999043 744.132295a15.359984 15.359984 0 0 1-5.887994 4.095996c-1.751998 1.180999-2.913997 2.362998-5.276994 2.913997a34.499964 34.499964 0 0 1-13.469986 2.914997 45.547952 45.547952 0 0 1-12.897986-2.303998l-4.095996-2.363997a45.291952 45.291952 0 0 1-7.009992-4.095996l-196.902793-193.789796a34.126964 34.126964 0 0 1-10.555989-25.186973c0-9.37399 3.583996-18.74698 9.98399-25.186974a36.429962 36.429962 0 0 1 50.372947 0l169.98382 167.423824L763.389735 330.220732a37.059961 37.059961 0 0 1 50.371947-1.732998 33.647965 33.647965 0 0 1 11.165988 25.186973 35.544963 35.544963 0 0 1-9.98399 24.575974v-0.04z m0 0"></path>
				</svg>
				`
          );
        },
        setView(t, e, a) {
          (Q.setViewCheckValid(t, "success", a ?? this.msg), this.setIcon(t), Q.setViewAgainCheckClickEvent(t, e));
        },
      },
      networkError: {
        code: -404,
        msg: "网络异常",
        setIcon(t) {
          w.html(
            t,
            `
				<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
					<path
					fill="currentColor"
					d="M511.808 692.224c-18.048 0-35.136 3.968-50.432 11.392-25.472 12.416-46.528 33.92-57.792 60.032-5.632 14.144-9.024 29.504-9.024 45.952 0 65.152 52.672 117.824 117.248 117.824 65.28 0 117.952-52.672 117.952-117.824 0-64.64-52.672-117.376-117.952-117.376z m0 178.496c-33.408 0-60.608-27.712-60.608-61.12 0-33.472 27.2-60.672 60.608-60.672s61.248 27.2 61.248 60.672c0 33.472-27.776 61.12-61.248 61.12zM286.784 661.632c3.968 3.392 8.512 5.632 12.992 5.632L438.08 523.328c-60.032 14.72-114.432 49.344-155.328 98.624-9.536 11.84-7.872 30.08 4.032 39.68zM622.912 534.656l-43.008 45.312c45.312 13.056 86.72 40.256 117.376 78.208 5.632 6.784 13.568 10.24 22.08 10.24 6.272 0 12.416-2.24 18.176-6.784 11.904-9.6 13.568-27.84 3.392-39.68-31.808-39.104-72.704-69.12-118.016-87.296zM511.808 391.168c17.024 0 33.408 1.216 49.856 3.456l47.68-49.856c-31.744-6.848-64.064-10.24-97.536-10.24-142.784 0-277.12 63.488-367.232 174.656-10.24 11.904-8.576 30.08 3.904 39.68 5.12 4.48 11.328 6.784 18.176 6.784 7.936 0 15.872-3.968 21.568-10.816 79.872-97.536 197.76-153.664 323.584-153.664zM751.616 400.32l-40.256 41.92c47.04 24.96 89.536 60.032 124.096 102.592 10.24 12.48 27.84 14.208 40.256 3.968 11.968-9.6 13.632-27.84 3.968-39.68-36.16-44.8-79.872-81.088-128.064-108.8zM705.152 244.928l42.56-44.672c-73.664-28.992-153.6-44.224-235.904-44.224-196.672 0-380.864 87.872-505.6 239.744-9.6 12.48-7.872 30.08 3.968 40.256 5.632 3.968 11.904 6.208 18.112 6.208 7.936 0 16.448-3.392 22.144-10.176C163.84 292.608 332.096 212.672 511.808 212.672c66.944 0 132.16 10.752 193.344 32.256zM1017.472 395.776c-40.192-49.92-87.296-92.416-139.456-126.976l-39.68 41.344C889.408 343.04 935.36 383.808 973.888 432c9.6 11.904 27.776 13.568 39.68 3.968 11.84-10.176 14.144-27.712 3.904-40.192zM937.408 104.512c-11.328-10.944-29.312-10.496-40.064 0.832L179.008 854.72c-10.816 11.328-10.496 29.248 0.896 40.064 5.44 5.312 12.48 7.872 19.584 7.872 7.488 0 14.848-2.88 20.416-8.704L938.24 144.576c10.88-11.328 10.496-29.248-0.832-40.064z"></path>
				</svg>
				`
          );
        },
        setView(t, e, a) {
          (Q.setViewCheckValid(t, "error", a ?? this.msg), this.setIcon(t), Q.setViewAgainCheckClickEvent(t, e));
        },
      },
      verify: {
        code: -405,
        msg: "触发安全验证",
        setIcon(t) {
          w.html(
            t,
            `
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<path 
						fill="currentColor"
						d="M514.389 1005.60899999c-269.967 0-489.59499999-219.642-489.595-489.59499999S244.42199999 26.405 514.389 26.405 1003.984 246.047 1003.984 516s-219.62800001 489.60899999-489.595 489.60900001z m0-938.24399999C267.00400001 67.365 65.754 268.615 65.754 516s201.264 448.63499999 448.635 448.635S963.024 763.385 963.024 516 761.774 67.365 514.389 67.365z" p-id="9895"></path><path d="M245.993 621.56800001c41.014-8.138 86.112-18.03600001 135.264-29.71000001-0.355 14.145-0.177 26.69199999 0.532 37.65499999-40.318 8.493-82.93 18.92400001-127.836 31.29400001l-7.959-39.23900001z m78.506-261.50200001l-12.206 145.872h53.57500001l13.78999998-178.763H259.249v-36.073h160.727l-16.438 214.821h33.423c-2.471 74.61499999-4.779 135.973-6.895 184.06100002-1.065 53.754-24.399 80.623-70.01399999 80.62299998-19.101 0-41.547-0.53200001-67.36500001-1.598-1.775-13.079-4.06799999-27.047-6.895-41.902 25.46300001 3.181 48.087 4.779 67.898 4.779 24.753 0 37.834-15.033 39.253-45.084 2.11599999-38.898 3.891-87.163 5.31099998-144.807H270.951l16.971-181.945h36.577z m309.248-98.659l-10.076 16.971c42.789 76.03500001 95.833 131.373 159.13 166.025-11.318 14.145-20.685 26.528-28.112 37.13699999-62.231-45.971-112.981-101.30799999-152.235-166.02499998-36.073 64.006-86.466 121.474-151.17000001 172.38699999-6.363-9.18799999-15.21-20.33-26.52799998-33.423 70.369-48.797 124.30000001-113.158 161.77799999-193.086h47.213zM441.194 718.111h191.488c25.46300001-62.942 48.087-128.723 67.89800001-197.318l40.31799999 12.725c-20.862 63.297-42.96699999 124.832-66.301 184.593h93.361v36.60499999H441.19300001v-36.60499999z m27.047-169.73900001l37.137-11.67399999c17.32599998 50.217 31.82600002 94.945 43.5 134.198l-39.253 13.258c-11.674-45.261-25.46300001-90.522-41.383-135.78200001z m27.06099999-91.76399999h218.53500001v36.605H495.30200001v-36.605z m64.17100001 67.885l37.655-10.076c14.854 53.043 27.047 99.369 36.605 138.977l-38.72099999 11.141c-10.254-48.797-22.091-95.477-35.53900001-140.04300001z">
					</path>
				</svg>
				`
          );
        },
        setView(t, e, a) {
          (Q.setViewCheckValid(t, "verify", a ?? this.msg), this.setIcon(t), Q.setViewAgainCheckClickEvent(t, e));
        },
      },
      failed: {
        code: 0,
        msg: "已失效",
        setIcon(t) {
          w.html(
            t,
            `
				<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="currentColor"
						d="M549.044706 512l166.189176-166.249412a26.383059 26.383059 0 0 0 0-36.98447 26.383059 26.383059 0 0 0-37.044706 0L512 475.015529l-166.249412-166.249411a26.383059 26.383059 0 0 0-36.98447 0 26.383059 26.383059 0 0 0 0 37.044706L475.015529 512l-166.249411 166.249412a26.383059 26.383059 0 0 0 0 36.98447 26.383059 26.383059 0 0 0 37.044706 0L512 548.984471l166.249412 166.249411a26.383059 26.383059 0 0 0 36.98447 0 26.383059 26.383059 0 0 0 0-37.044706L548.984471 512zM512 1024a512 512 0 1 1 0-1024 512 512 0 0 1 0 1024z"></path>
				</svg>
				`
          );
        },
        setView(t, e, a) {
          (Q.setViewCheckValid(t, "failed", a ?? this.msg), this.setIcon(t), Q.setViewAgainCheckClickEvent(t, e));
        },
      },
      needAccessCode: {
        code: 201,
        msg: "需要提取码",
        setIcon(t) {
          w.html(
            t,
            `
				<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
					<path
					fill="currentColor"
					d="M757.810429 373.751333 325.645708 373.751333l0-83.895759c0-103.694687 81.507362-184.922686 185.559183-184.922686 78.121242 0 146.053424 46.74565 173.062568 119.090329 3.865028 10.352789 15.384385 15.609513 25.742291 11.746532 10.351766-3.866051 15.609513-15.390525 11.744485-25.742291C688.844707 121.877815 606.198405 64.918545 511.204891 64.918545c-61.918211 0-119.246895 23.662933-161.423483 66.63156-41.3692 42.142819-64.151066 98.363262-64.151066 158.305469l0 83.895759-20.007683 0c-60.774155 0-110.042255 49.267077-110.042255 110.042255l0 366.139981c0 60.774155 49.267077 110.042255 110.042255 110.042255l492.187769 0c60.775178 0 110.042255-49.267077 110.042255-110.042255L867.852684 483.793588C867.852684 423.01841 818.585607 373.751333 757.810429 373.751333zM827.837318 849.933569c0 38.674834-31.352055 70.02689-70.02689 70.02689L265.62266 919.960459c-38.674834 0-70.02689-31.352055-70.02689-70.02689L195.59577 483.793588c0-38.674834 31.352055-70.02689 70.02689-70.02689l492.187769 0c38.674834 0 70.02689 31.352055 70.02689 70.02689L827.837318 849.933569z"></path>
					<path
					fill="currentColor"
					d="M509.715981 583.832002c-11.048637 0-20.007683 8.959046-20.007683 20.007683l0 110.042255c0 11.048637 8.958022 20.007683 20.007683 20.007683s20.007683-8.958022 20.007683-20.007683L529.723663 603.839685C529.723663 592.790024 520.765641 583.832002 509.715981 583.832002z"></path>
				</svg>
				`
          );
        },
        setView(t, e, a) {
          (Q.setViewCheckValid(t, "needAccessCode", a ?? this.msg),
            this.setIcon(t),
            Q.setViewAgainCheckClickEvent(t, e));
        },
      },
      partialViolation: {
        code: 202,
        msg: "存在部分违规文件",
        setIcon(t) {
          w.html(
            t,
            `
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<path 
					fill="currentColor"
					d="M954.963 810.267L543.112 96.919c-14.07-24.37-49.245-24.37-63.315 0L67.945 810.267c-14.07 24.37 3.518 54.832 31.657 54.832h823.703c28.141 0 45.728-30.463 31.658-54.832zM476.699 306.55c0-19.115 15.64-34.755 34.755-34.755 19.115 0 34.755 15.64 34.755 34.755v281.817c0 19.115-15.64 34.755-34.755 34.755-19.115 0-34.755-15.64-34.755-34.755V306.55z m34.755 445.293c-23.198 0-42.004-18.806-42.004-42.004s18.806-42.004 42.004-42.004c23.198 0 42.004 18.806 42.004 42.004s-18.806 42.004-42.004 42.004z"></path>
				</svg>`
          );
        },
        setView(t, e, a) {
          (Q.setViewCheckValid(t, "partial-violation", a ?? this.msg),
            this.setIcon(t),
            Q.setViewAgainCheckClickEvent(t, e));
        },
      },
      unknown: {
        code: -200,
        msg: "未知检查情况",
        setIcon(t) {
          w.html(
            t,
            `
				<svg viewBox="0 0 1025 1024" xmlns="http://www.w3.org/2000/svg">
					<path
					fill="currentColor"
					d="M512.473172 1023.995242A511.814852 511.814852 0 0 1 313.545134 40.351073a512.244696 512.244696 0 0 1 398.855715 943.658633 508.815937 508.815937 0 0 1-199.927677 39.985536z m0-943.658634C274.559237 80.336608 80.629391 274.266455 80.629391 512.18039s193.929846 431.843781 431.843781 431.843781 431.843781-193.929846 431.843781-431.843781S751.386745 80.336608 512.473172 80.336608z"></path>
					<path
					fill="currentColor"
					d="M506.475342 716.10662a39.985535 39.985535 0 0 1-39.985536-39.985535v-76.972156c0-79.971071 64.976495-144.947566 144.947566-144.947565a77.971794 77.971794 0 0 0 0-155.943588H445.4974a56.979388 56.979388 0 0 0-56.979387 56.979388 39.985535 39.985535 0 0 1-79.971071 0c0-74.972879 60.977941-136.950458 136.950458-136.950459h164.940333c86.968539 0 157.942864 70.974325 157.942865 157.942865s-69.974687 157.942864-157.942865 157.942864a64.976495 64.976495 0 0 0-64.976494 64.976495v76.972156a39.985535 39.985535 0 0 1-38.985897 39.985535zM505.475703 742.097218a48.982281 48.982281 0 1 0 48.982281 48.982281 48.982281 48.982281 0 0 0-48.982281-48.982281z"></path>
				</svg>
				`
          );
        },
        setView(t, e, a) {
          (Q.setViewCheckValid(t, "unknown", a ?? this.msg), this.setIcon(t), Q.setViewAgainCheckClickEvent(t, e));
        },
      },
    },
    Ba = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = X.getBlankUrl({ ruleKeyName: "baidu", ruleIndex: e, shareCode: a, accessCode: n }),
          s = await E.get(r, {
            headers: {
              Accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
              Host: "pan.baidu.com",
              Referer: `https://pan.baidu.com/share/init?surl=${a}&pwd=${n}`,
              "sec-ch-ua": '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
              Origin: "https://pan.baidu.com",
            },
            ...se,
          }),
          i = s.data.responseText,
          l = s.data.finalUrl;
        return typeof l == "string" && new URL(l).hostname !== "pan.baidu.com"
          ? { ...$.verify, msg: `<a href='${l}' target='_blank' style="color: red;">触发百度安全验证</a>`, data: s }
          : !s.status && p.isNull(i)
            ? { ...$.networkError, data: s }
            : s.data.finalUrl.includes("404.html")
              ? { ...$.networkError, data: s }
              : i.includes("过期时间：")
                ? { ...$.success, data: s }
                : i.includes("输入提取")
                  ? { ...$.needAccessCode, data: s }
                  : i.includes("不存在") || i.includes("已失效")
                    ? { ...$.failed, data: s }
                    : { ...$.unknown, data: s };
      },
    },
    Pa = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = X.getBlankUrl({ ruleKeyName: "lanzou", ruleIndex: e, shareCode: a, accessCode: n }),
          s = new URL(r),
          i = await E.get(r, {
            headers: { "User-Agent": p.getRandomPCUA(), Host: s.hostname, Origin: s.origin, Referer: r },
            ...se,
          });
        if (!i.status && i.type === "ontimeout") return { ...$.networkError, data: i };
        let l = i.data.responseText;
        return p.isNull(l)
          ? { ...$.failed, data: i, tipMsg: "响应数据为空" }
          : l.includes("输入密码")
            ? { ...$.needAccessCode, data: i }
            : l.includes("来晚啦") || l.includes("不存在") || l.includes("div>文件链接失效，请获取新链接</div>")
              ? { ...$.failed, data: i }
              : i.status
                ? { ...$.success, data: i }
                : { ...$.unknown, data: i, tipMsg: i.msg };
      },
    },
    Oa = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = new ot.rule.lanzouyx();
        r.shareCodeId = r.getDecodeShareCodeId(a);
        let s = r.getEncodeTimeStamp(),
          i = r.getEncodeUUID(),
          l = await E.post(
            `https://api.ilanzou.com/unproved/recommend/list?${p.toSearchParamsStr({ devType: r.$data.devType, devModel: r.$data.devModel, uuid: i, extra: r.$data.extra, timestamp: s, code: n, shareId: a, type: r.$data.type, offset: r.$data.offset, limit: r.$data.limit })}`,
            {
              headers: {
                Accept: "application/json, text/plain, */*",
                Origin: "https://www.ilanzou.com",
                Referer: "https://www.ilanzou.com/",
                "Sec-Fetch-Site": "same-site",
                Host: "api.ilanzou.com",
                "User-Agent": p.getRandomPCUA(),
              },
              responseType: "json",
              ...se,
            }
          );
        if (!l.status) return { ...$.networkError, data: l };
        let o = p.toJSON(l.data.responseText);
        return (
          g.success("获取链接信息：", o),
          o.code !== 200
            ? { ...$.networkError, data: o }
            : o.list.length
              ? { ...$.success, data: o }
              : { ...$.failed, data: o }
        );
      },
    },
    Ha = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = await E.post("https://api.cloud.189.cn/open/share/getShareInfoByCodeV2.action", {
            data: `shareCode=${a}`,
            headers: {
              Accept: "application/json;charset=UTF-8",
              "Content-Type": "application/x-www-form-urlencoded",
              "User-Agent": p.getRandomPCUA(),
              "Sign-Type": 1,
              Referer: "https://cloud.189.cn/web/share?code=" + a,
              Origin: "https://cloud.189.cn",
            },
            ...se,
          }),
          s = r.data.responseText;
        return !r.status && p.isNull(s)
          ? { ...$.networkError, data: r }
          : s.includes("ShareInfoNotFound") ||
              s.includes("ShareNotFound") ||
              s.includes("FileNotFound") ||
              s.includes("ShareAuditWaiting") ||
              s.includes("ShareExpiredError") ||
              s.includes("ShareAuditNotPass")
            ? { ...$.failed, data: r }
            : s.includes("needAccessCode")
              ? { ...$.needAccessCode, data: r }
              : { ...$.success, data: r };
      },
    },
    ja = {
      async init(t) {
        const { shareCode: e } = t;
        let a = await E.post("https://api.aliyundrive.com/adrive/v3/share_link/get_share_by_anonymous?share_id=" + e, {
            data: JSON.stringify({ share_id: e }),
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
              "User-Agent": p.getRandomPCUA(),
              Referer: "https://www.aliyundrive.com/",
              Origin: "https://www.aliyundrive.com",
            },
            ...se,
          }),
          n = p.toJSON(a.data.responseText);
        return !a.status && p.isNull(n)
          ? { ...$.networkError, data: a }
          : n.code === "ParamFlowException" || n.code === "NotFound.ShareLink" || n.code === "ShareLink.Cancelled"
            ? { ...$.failed, data: n }
            : n.file_count === 0 || n.file_infos?.length === 0
              ? { ...$.failed, data: n }
              : { ...$.success, data: n };
      },
    },
    Za = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = await E.post("https://www.wenshushu.cn/ap/task/mgrtask", {
          data: JSON.stringify({ tid: a }),
          headers: {
            "Content-Type": "application/json",
            "User-Agent": p.getRandomPCUA(),
            "x-token": "wss:7pmakczzw6i",
            Host: "www.wenshushu.cn",
            Origin: "https://www.wenshushu.cn",
            Referer: X.getBlankUrl({ ruleKeyName: "wenshushu", ruleIndex: e, shareCode: a, accessCode: n }),
          },
          responseType: "json",
          ...se,
        });
        if (!r.status && p.isNull(r.data.responseText)) return { ...$.networkError, data: r };
        let s = p.toJSON(r.data.responseText);
        return s.code !== 0 ? { ...$.failed, data: s } : { ...$.success, data: s };
      },
    },
    Ka = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = await E.get(`https://cowtransfer.com/core/api/transfer/share?uniqueUrl=${a}`, {
          headers: {
            "User-Agent": p.getRandomPCUA(),
            Host: "cowtransfer.com",
            Origin: "https://cowtransfer.com",
            Referer: "https://cowtransfer.com/",
          },
          ...se,
        });
        if (!r.status && p.isNull(r.data.responseText)) return { ...$.networkError, data: r };
        let s = p.toJSON(r.data.responseText);
        return s.code != "0000"
          ? { ...$.failed, data: s }
          : s.data.needPassword && s.data.needPassword
            ? { ...$.needAccessCode, data: s }
            : { ...$.success, data: s };
      },
    },
    qa = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = await E.get("https://www.123pan.com/api/share/info?shareKey=" + a, {
          headers: {
            "User-Agent": p.getRandomPCUA(),
            Host: "www.123pan.com",
            Origin: "https://www.123pan.com",
            Referer: "https://www.123pan.com/",
          },
          responseType: "json",
          ...se,
        });
        if (!r.status && p.isNull(r.data.responseText)) return { ...$.networkError, data: r };
        let s = p.toJSON(r.data.responseText);
        return r.data.responseText.includes("分享页面不存在") || s.code !== 0
          ? { ...$.failed, data: s }
          : s.data.HasPwd
            ? { ...$.needAccessCode, data: s }
            : { ...$.success, data: s };
      },
    },
    Wa = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = X.getBlankUrl({ ruleKeyName: "weiyun", ruleIndex: e, shareCode: a, accessCode: n }),
          s = await E.get(r, {
            headers: {
              "User-Agent": p.getRandomPCUA(),
              Host: "share.weiyun.com",
              Origin: "https://share.weiyun.com",
              Referer: r,
            },
            ...se,
          });
        if (!s.status && p.isNull(s.data.responseText)) return { ...$.networkError, data: s };
        let i = s.data.responseText;
        return i.includes("已删除") ||
          i.includes("已被删除") ||
          i.includes("已经删除") ||
          i.includes("违反相关法规") ||
          i.includes("已过期") ||
          i.includes("目录无效")
          ? { ...$.failed, data: s }
          : i.includes('"need_pwd":1') || (i.includes('"pwd":"') && !i.includes('"pwd":""'))
            ? { ...$.needAccessCode, data: s }
            : { ...$.success, data: s };
      },
    },
    Ga = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = await E.post("https://xluser-ssl.xunlei.com/v1/shield/captcha/init", {
          data: JSON.stringify({
            client_id: "Xqp0kJBXWhwaTpB6",
            device_id: "925b7631473a13716b791d7f28289cad",
            action: "get:/drive/v1/share",
            meta: {
              package_name: "pan.xunlei.com",
              client_version: "1.45.0",
              captcha_sign: "1.fe2108ad808a74c9ac0243309242726c",
              timestamp: "1645241033384",
            },
          }),
          headers: {
            "User-Agent": p.getRandomPCUA(),
            Host: "pan.xunlei.com",
            Referer: X.getBlankUrl({ ruleKeyName: "xunlei", ruleIndex: e, shareCode: a, accessCode: n }),
            Origin: "https://pan.xunlei.com",
          },
          ...se,
        });
        if (!r.status && p.isNull(r.data.responseText)) return { ...$.networkError, data: r };
        let i = p.toJSON(r.data.responseText).captcha_token,
          l = await E.get("https://api-pan.xunlei.com/drive/v1/share?share_id=" + a, {
            headers: {
              "User-Agent": p.getRandomPCUA(),
              Host: "pan.xunlei.com",
              Referer: X.getBlankUrl({ ruleKeyName: "xunlei", ruleIndex: e, shareCode: a, accessCode: n }),
              Origin: "https://pan.xunlei.com",
              "x-captcha-token": i,
              "x-client-id": "Xqp0kJBXWhwaTpB6",
              "x-device-id": "925b7631473a13716b791d7f28289cad",
            },
            ...se,
          });
        if (!l.status && p.isNull(l.data.responseText)) return { ...$.networkError, data: [r, l] };
        let o = l.data.responseText;
        return o.includes("NOT_FOUND") ||
          o.includes("SENSITIVE_RESOURCE") ||
          o.includes("EXPIRED") ||
          o.includes("DELETED")
          ? { ...$.failed, data: l }
          : o.includes("PASS_CODE_EMPTY")
            ? { ...$.needAccessCode, data: l }
            : { ...$.success, data: l };
      },
    },
    Ya = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = X.getBlankUrl({ ruleKeyName: "chengtong", ruleIndex: e, shareCode: a, accessCode: n }),
          s = new URL(r),
          i = s.pathname.split("/")[1].trim(),
          l = "";
        if ((s.pathname === "/" && s.hash.startsWith("#/d/") && (i = "d"), i === "f" || i === "file"))
          l = `https://webapi.ctfile.com/getfile.php?path=${i}&f=${a}&passcode=${n}&token=0&r=${Math.random()}&ref=`;
        else if (i === "d" || i === "dir")
          l = `https://webapi.ctfile.com/getdir.php?path=${i}&d=${a}&folder_id=&passcode=${n}&token=0&r=${Math.random()}&ref=`;
        else return (g.warn("未知path", [e, a, n]), { ...$.unknown, data: null });
        let o = await E.get(l, {
            headers: {
              Host: "webapi.ctfile.com",
              Origin: "https://url95.ctfile.com",
              Referer: r,
              Accept: "application/json, text/javascript, */*; q=0.01",
              "User-Agent": p.getRandomPCUA(),
            },
            ...se,
          }),
          c = o.data.responseText;
        if (!o.status && p.isNull(c)) return { ...$.networkError, data: o };
        let u = p.toJSON(c);
        return u.code === 200
          ? { ...$.success, data: u }
          : u.code === 401
            ? { ...$.needAccessCode, data: u }
            : u.code === 404 || u.code === 503 || u.code === 504
              ? { ...$.failed, data: u }
              : { ...$.unknown, data: u };
      },
    },
    Ja = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = await E.post("https://drive.quark.cn/1/clouddrive/share/sharepage/token?pr=ucpro&fr=pc", {
          data: JSON.stringify({ pwd_id: a, passcode: "" }),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=UTF-8",
            "User-Agent": p.getRandomPCUA(),
            Origin: "https://pan.quark.cn",
            Referer: X.getBlankUrl({ ruleKeyName: "kuake", ruleIndex: e, shareCode: a, accessCode: n }),
          },
          ...se,
        });
        if (!r.status && p.isNull(r.data.responseText)) return { ...$.networkError, data: r };
        let s = p.toJSON(r.data.responseText);
        if (s.message.includes("需要提取码")) return { ...$.needAccessCode, data: s };
        if (s.message.includes("ok")) {
          let i = s.data.stoken,
            l = { pwd_id: a, stoken: i, _fetch_share: 1, __t: Date.now() },
            o = await E.get(`https://drive-h.quark.cn/1/clouddrive/share/sharepage/detail?${p.toSearchParamsStr(l)}`, {
              headers: {
                Accept: "application/json, text/plain, */*",
                Origin: "https://pan.quark.cn",
                Referer: "https://pan.quark.cn/",
                "User-Agent": p.getRandomPCUA(),
              },
              ...se,
            });
          if (!o.status || p.isNull(o.data.responseText)) return { ...$.networkError, data: o };
          let c = p.toJSON(o.data.responseText);
          return c.data.share.status == 1
            ? c.data.share.partial_violation
              ? { ...$.partialViolation, data: [s, c] }
              : { ...$.success, data: [s, c] }
            : { ...$.failed, data: [s, c] };
        } else return { ...$.failed, data: s };
      },
    },
    Xa = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = X.getBlankUrl({ ruleKeyName: "jianguoyun", ruleIndex: e, shareCode: a, accessCode: n }),
          s = await E.get(r, {
            headers: {
              "User-Agent": p.getRandomPCUA(),
              Host: "www.jianguoyun.com",
              Referer: X.getBlankUrl({ ruleKeyName: "jianguoyun", ruleIndex: e, shareCode: a, accessCode: n }),
              Origin: "https://www.jianguoyun.com",
            },
            ...se,
          }),
          i = s.data.responseText;
        return !s.status && p.isNull(i)
          ? { ...$.networkError, data: s }
          : i.includes("<h1>啊噢！")
            ? { ...$.failed, data: s }
            : { ...$.success, data: s };
      },
    },
    Qa = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = X.getBlankUrl({ ruleKeyName: "onedrive", ruleIndex: e, shareCode: a, accessCode: n }),
          s = new URL(r),
          i = await E.get(r, {
            headers: { "User-Agent": p.getRandomPCUA(), Host: s.hostname, Referer: r, Origin: s.origin },
            ...se,
          });
        if (!i.status) {
          let o = i.data?.status?.toString();
          return o === "429"
            ? { ...$.networkError, data: i }
            : o === "404"
              ? { ...$.failed, data: i }
              : { ...$.networkError, data: i };
        }
        let l = i.data.responseText;
        if (p.isNotNull(l))
          try {
            let c = w.parseHTML(l, !0, !0).querySelector("title");
            if (c && w.html(c).includes("错误")) return { ...$.failed, data: i };
          } catch {}
        return { ...$.success, data: i };
      },
    },
    en = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = await E.get("https://drive.uc.cn/s/" + a, {
            headers: {
              "User-Agent": p.getRandomAndroidUA(),
              Host: "drive.uc.cn",
              Referer: X.getBlankUrl({ ruleKeyName: "uc", ruleIndex: e, shareCode: a, accessCode: n }),
              Origin: "https://drive.uc.cn",
            },
            ...se,
          }),
          s = r.data.responseText;
        if (!r.status && p.isNull(s)) return { ...$.networkError, data: r };
        let i = w.parseHTML(s, true, true);
        if (i.querySelector(".h5-page-main")) {
          let l = i.querySelector(".h5-page-main"),
            o = l.textContent || l.innerText;
          return o.includes("失效") || o.includes("不存在") || o.includes("违规") || o.includes("删除")
            ? { ...$.failed, data: r }
            : { ...$.unknown, data: r };
        } else
          return i.querySelector(".main-body .input-wrap input")
            ? { ...$.needAccessCode, data: r }
            : { ...$.success, data: r };
      },
    },
    tn = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = await E.get(`https://webapi.115.com/share/snap?share_code=${a}&offset=0&limit=20&receive_code=&cid=`, {
          headers: {
            Accept: "application/json, text/javascript, */*;",
            "User-Agent": p.getRandomPCUA(),
            Host: "webapi.115.com",
            Referer: "https://115.com/",
            Origin: "https://115.com",
          },
          ...se,
        });
        if (!r.status) return p.isNull(r.data.responseText) ? { ...$.failed, data: r } : { ...$.networkError, data: r };
        let s = p.toJSON(r.data.responseText);
        if (s.state) return { ...$.success, data: s };
        if (typeof s.error == "string") {
          if (s.error.includes("访问码")) return { ...$.needAccessCode, data: s };
          if (s.error.includes("链接") || s.error.includes("分享已取消")) return { ...$.failed, data: s };
        }
        return { ...$.unknown, data: s };
      },
    },
    an = {
      async init(t) {
        const { ruleIndex: e, shareCode: a, accessCode: n } = t;
        let r = "https://www.yunpan.com/lk/surl_" + a,
          s = await E.get(r, { headers: { "User-Agent": p.getRandomPCUA() }, responseType: "json", ...se });
        if (!s.status && p.isNull(s.data.responseText)) return { ...$.networkError, data: s };
        let l = w.parseHTML(s.data.responseText, true, true).querySelector(".page-error .error-msg");
        if (l) {
          let o = w.text(l);
          return o.includes("分享链接已失效") ? { ...$.failed, data: s } : { ...$.unknown, data: s, tipMsg: o };
        }
        return { ...$.success, data: s };
      },
    },
    nn = {
      baidu: Ba,
      lanzou: Pa,
      lanzouyx: Oa,
      tianyiyun: Ha,
      aliyun: ja,
      wenshushu: Za,
      nainiu: Ka,
      _123pan: qa,
      weiyun: Wa,
      xunlei: Ga,
      _115pan: tn,
      chengtong: Ya,
      kuake: Ja,
      jianguoyun: Xa,
      onedrive: Qa,
      uc: en,
      "360yunpan": an,
    },
    se = { allowInterceptConfig: false, onerror() {}, ontimeout() {} },
    Q = {
      $data: { subscribeMap: new Map(), subscribeMapConsuming: new Map(), checkValidStatusMapCache: new Map() },
      get status() {
        return $;
      },
      ruleCheckValidFunction: nn,
      async check(t) {
        Array.isArray(t) || (t = [t]);
        for (const a of t) {
          const { ruleKeyName: n } = a;
          (this.$data.subscribeMap.has(n) || this.$data.subscribeMap.set(n, []),
            this.$data.subscribeMap.get(n).push(a));
        }
        await (async () => {
          let a = [];
          for (const [n, r] of this.$data.subscribeMap.entries())
            a.push(
              new Promise(async (s) => {
                if (this.$data.subscribeMapConsuming.get(n)) {
                  s(null);
                  return;
                }
                let l = async () => {
                  for (let c = 0; c < r.length; c++)
                    try {
                      const u = r[c];
                      if (u.$urlBox.parentElement) {
                        const { needAwait: d } = await this.checkLinkValidity(u, !1);
                        d && (await p.sleep(250));
                      }
                      (r.splice(c, 1), c--);
                    } catch (u) {
                      g.error(u);
                    }
                  this.$data.subscribeMap.get(n)?.length && r.length && (await l());
                };
                (await l(), this.$data.subscribeMapConsuming.delete(n), s(null));
              })
            );
          await Promise.all(a);
        })();
      },
      clearAllDelayCheckLinkValidity() {
        (this.$data.subscribeMap.clear(), this.$data.subscribeMapConsuming.clear());
      },
      async checkLinkValidity(t, e) {
        const a = { needAwait: false },
          { $checkValidStatus: n } = de.parseBoxItemInfo(t.$urlBox);
        if (this.isViewCheckValid(n) && !e) return a;
        this.setCheckStatusElementToolTip(t);
        const r = t.ruleKeyName;
        if (!J.function.checkLinkValidity(r)) return (g.error("该规则未开启checkLinkValidity功能", t), a);
        const s = this.ruleCheckValidFunction[t.ruleKeyName];
        if (!s || (s && typeof s.init != "function")) return (g.error("该规则未配置有效性校验函数", t), a);
        const i = { ruleIndex: t.ruleIndex, shareCode: t.shareCode, accessCode: t.accessCode },
          l = JSON.stringify(i);
        let o;
        if (!e && Q.$data.checkValidStatusMapCache.has(l)) o = Q.$data.checkValidStatusMapCache.get(l);
        else {
          if (($.loading.setView(n, t), (o = await s.init(i)), (a.needAwait = true), !o))
            return (g.error("该规则的有效性验证函数的返回值不是有效值", [o, t]), a);
          o.code === $.loading.code ||
          o.code === $.networkError.code ||
          o.code === $.verify.code ||
          o.code === $.unknown.code
            ? Q.$data.checkValidStatusMapCache.delete(l)
            : Q.$data.checkValidStatusMapCache.set(l, o);
        }
        return (o.setView(n, t, o.tipMsg), o.data && Reflect.set(n, "data-httpx-response", o.data), a);
      },
      setViewAgainCheckClickEvent(t, e) {
        (w.off(
          t,
          "click",
          void 0,
          void 0,
          void 0,
          (a) => !!a.option.once && a.originCallBack.toString().includes("this.checkLinkValidity")
        ),
          w.on(
            t,
            "click",
            () => {
              const { $urlBox: a, $link: n } = de.parseBoxItemInfo(t),
                r = de.parseBoxAttrRuleInfo(n);
              let s = {
                $urlBox: a,
                ruleKeyName: r.ruleKeyName,
                ruleIndex: r.ruleIndex,
                shareCode: r.shareCode,
                accessCode: r.accessCode,
              };
              this.checkLinkValidity(s, true);
            },
            { once: true }
          ));
      },
      isViewCheckValid(t) {
        return !(!t.hasAttribute("data-check-valid") || t.getAttribute("data-check-valid") === "error");
      },
      setViewCheckValid(t, e, a) {
        (t.setAttribute("data-check-valid", e), t.setAttribute("data-msg", a), Reflect.set(t, "data-msg", a));
      },
      removeViewCheckValid(t) {
        (t.removeAttribute("data-check-valid"), t.removeAttribute("data-msg"), Reflect.deleteProperty(t, "data-msg"));
      },
      isStatusSuccess(t) {
        return Math.floor(t.code / 100) === 2;
      },
      getStatusName(t) {
        for (const e of Object.keys($)) {
          let a = $[e];
          if (t.code === a.code) return e;
        }
      },
      setCheckStatusElementToolTip(t) {
        if (!J.function.checkLinlValidityHoverTip(t.ruleKeyName)) return;
        function e() {
          const { $checkValidStatus: r } = de.parseBoxItemInfo(t.$urlBox);
          return r;
        }
        let a = e();
        if (a.hasAttribute("data-pops-tooltip")) return;
        a.setAttribute("data-pops-tooltip", "true");
        let n = (r) => {
          let s = Reflect.get(r, "data-msg"),
            i = r.getAttribute("data-msg");
          return s ?? i;
        };
        O.tooltip({
          target: a,
          className: "github-tooltip",
          isFixed: true,
          content() {
            return n(a);
          },
          showBeforeCallBack() {
            let r = n(a);
            if (r == null || (typeof r == "string" && r.trim() === "")) return false;
          },
          zIndex() {
            let r = p.getMaxZIndex(10),
              s = O.config.InstanceUtils.getPopsMaxZIndex(10).zIndex;
            return p.getMaxValue(r, s) + 100;
          },
        });
      },
    },
    rn = {
      requiredFileMap: new Map(),
      async file(t, e) {
        if (p.isNull(t)) return (g.error("NetDiskRequire.file的参数path为空", t), false);
        if (this.requiredFileMap.has(t)) return (g.warn("NetDiskRequire.file的参数path已引入过", t), true);
        let a = await E.get(t, e);
        if (!a.status) return false;
        let n = a.data.responseText,
          r = this.requiredFileMap.get(t);
        return (
          this.requiredFileMap.set(t, r++),
          g.info("加载js文件", t),
          me.eval(
            `
		let exports = void 0;
		let module = void 0;
		let define = void 0;
		` + n
          ),
          await p.sleep(300),
          true
        );
      },
    },
    zt = (t) => ({
      "matchRange-text-before": J.matchRange_text.before(t).toString(),
      "matchRange-text-after": J.matchRange_text.after(t).toString(),
    }),
    Ft = (t) => ({
      "matchRange-html-before": J.matchRange_html.before(t).toString(),
      "matchRange-html-after": J.matchRange_html.after(t).toString(),
    }),
    Ne = new Ve("userRule"),
    ze = new Ve("userRuleBindContext"),
    le = {
      $data: {
        STORAGE_KEY: "rule",
        EXPORT_CONFIG_KEY: "rule-export-config",
        __userRule: null,
        get userRule() {
          return (this.__userRule == null && (this.__userRule = new p.Dictionary()), this.__userRule);
        },
      },
      init() {
        let t = ie("userRule");
        Array.isArray(t) && (wt("userRule"), this.setRule(t));
        let e = this.parseRule(this.getAllRule()),
          a = this.parseRule(te.getAllSubscribeRule());
        ((e = e.concat(a)),
          e.forEach((n) => {
            this.$data.userRule.set(n.setting.key, n);
          }));
      },
      parseRuleStrToRule(t) {
        function e(n) {
          return typeof n.link_innerText != "string"
            ? { success: false, msg: "regexp缺失的键名: link_innerText，类型: string" }
            : typeof n.link_innerHTML != "string"
              ? { success: false, msg: "regexp缺失的键名: link_innerHTML，类型: string" }
              : typeof n.shareCode != "string"
                ? { success: false, msg: "regexp缺失的键名: shareCode，类型: string" }
                : typeof n.shareCodeNeedRemoveStr != "string" && !Array.isArray(n.shareCodeNeedRemoveStr)
                  ? { success: false, msg: "regexp缺失的键名: shareCodeNeedRemoveStr，类型: string|string[]" }
                  : typeof n.uiLinkShow != "string"
                    ? { success: false, msg: "regexp缺失的键名: uiLinkShow，类型: string" }
                    : typeof n.blank != "string"
                      ? { success: false, msg: "regexp缺失的键名: blank，类型: string" }
                      : typeof n.copyUrl != "string"
                        ? { success: false, msg: "regexp缺失的键名: copyUrl，类型: string" }
                        : typeof n.accessCode == "string" && typeof n.checkAccessCode != "string"
                          ? { success: false, msg: "regexp设置了accessCode但是没有设置checkAccessCode" }
                          : typeof n.accessCode != "string" && typeof n.checkAccessCode == "string"
                            ? { success: false, msg: "regexp设置了checkAccessCode但是没有设置accessCode" }
                            : { success: true, msg: "校验rule成功" };
        }
        function a(n) {
          return typeof n.name != "string"
            ? { success: false, msg: "setting缺失的键名: name，类型: string" }
            : typeof n.enable != "boolean"
              ? { success: false, msg: "setting缺失的键名: enable，类型: boolean" }
              : { success: true, msg: "校验setting成功" };
        }
        try {
          let n = typeof t == "string" ? p.toJSON(t) : t;
          if ((g.info("解析出的规则对象：", n), typeof n != "object"))
            return { success: !1, msg: "该规则不是object类型" };
          if (Object.keys(n).length === 0) return { success: !1, msg: "该规则为空" };
          if (typeof n.key != "string") return { success: !1, msg: "缺失的键名: key，类型: string" };
          if (typeof n.regexp != "object") return { success: !1, msg: "缺失的键名: regexp，类型: object|Arrany" };
          if (typeof n.setting != "object") return { success: !1, msg: "缺失的键名: setting，类型: object" };
          if (Array.isArray(n.regexp))
            for (const s of n.regexp) {
              let i = e(s);
              if (!i.success) return i;
            }
          else {
            let s = e(n.regexp);
            if (!s.success) return s;
          }
          let r = a(n.setting);
          return r.success ? { success: !0, msg: "解析成功", data: n } : r;
        } catch (n) {
          return (g.error(n), { success: false, msg: n.message });
        }
      },
      getBindContext(t) {
        return {
          rule: t,
          NetDiskRequire: rn,
          CryptoJS: Fe,
          httpx: E,
          utils: p,
          DOMUtils: w,
          window,
          unsafeWindow: me,
          NetDiskCheckLinkValidity: Q,
          NetDiskCheckLinkValidityStatus: $,
          log: g,
          Qmsg: f,
          pops: O,
          setValue: ze.set.bind(ze),
          getValue: ze.get.bind(ze),
          deleteValue: ze.delete.bind(ze),
        };
      },
      parseRule(t) {
        function e(n, r, s) {
          let {
              shareCode: i,
              shareCodeNeedRemoveStr: l,
              shareCodeNotMatch: o,
              checkAccessCode: c,
              accessCode: u,
              acceesCodeNotMatch: d,
              accessCodeNeedRemoveStr: h,
              paramMatch: m,
              ...b
            } = s,
            k = { ...b };
          if (
            ((k.link_innerText = re.replaceParam(k.link_innerText, zt(n))),
            (k.link_innerHTML = re.replaceParam(k.link_innerText, Ft(n))),
            typeof i == "string" && (k.shareCode = new RegExp(i, "ig")),
            l && (typeof l == "string" && (l = [l]), Array.isArray(l)))
          ) {
            k.shareCodeNeedRemoveStr = [];
            for (const x of l)
              if (typeof x == "string") {
                const v = new RegExp(x, "ig");
                k.shareCodeNeedRemoveStr.push(v);
              }
          }
          if (o && (typeof o == "string" && (o = [o]), Array.isArray(o))) {
            k.shareCodeNotMatch = [];
            for (const x of o)
              if (typeof x == "string") {
                const v = new RegExp(x, "ig");
                k.shareCodeNotMatch.push(v);
              }
          }
          if (
            (typeof c == "string" && (k.checkAccessCode = new RegExp(c, "ig")),
            typeof u == "string" && (k.accessCode = new RegExp(u, "ig")),
            d && (typeof d == "string" && (d = [d]), Array.isArray(d)))
          ) {
            k.acceesCodeNotMatch = [];
            for (const x of d)
              if (typeof x == "string") {
                const v = new RegExp(x, "ig");
                k.acceesCodeNotMatch.push(v);
              }
          }
          if (h && (typeof h == "string" && (h = [h]), Array.isArray(h))) {
            k.accessCodeNeedRemoveStr = [];
            for (const x of h)
              if (typeof x == "string") {
                const v = new RegExp(x, "ig");
                k.accessCodeNeedRemoveStr.push(v);
              }
          }
          return (typeof m == "string" && (k.paramMatch = new RegExp(m, "i")), k);
        }
        let a = [];
        for (const n of t) {
          let r = {
            subscribeUUID: n.subscribeUUID,
            rule: [],
            setting: {
              name: n.setting.name,
              key: n.key,
              configurationInterface: {
                matchRange_text: {},
                matchRange_html: {},
                function: {},
                linkClickMode_openBlank: {},
                schemeUri: {},
                ownFormList: [],
              },
            },
            isUserRule: true,
            afterRenderUrlBox: void 0,
          };
          const s = n.regexp,
            i = n.key;
          if (
            (Array.isArray(s)
              ? s.forEach((c) => {
                  r.rule.push(e(i, n, c));
                })
              : r.rule.push(e(i, n, s)),
            n.setting)
          ) {
            if (
              (this.initDefaultValue(P.function.enable(i), !!n.setting.enable),
              (r.setting.configurationInterface.function.enable = !!n.setting.enable),
              typeof n.setting.isBlank == "boolean" &&
                (this.initDefaultValue(P.function.linkClickMode(i), "openBlank"),
                (r.setting.configurationInterface.function.linkClickMode = {
                  openBlank: { default: true, enable: true },
                })),
              typeof n.setting.linkClickMode == "object")
            ) {
              let c = p.assign(re.getDefaultLinkClickMode(), n.setting.linkClickMode || {}),
                u = null,
                d = [];
              const h = Object.keys(c);
              for (const m of h) {
                let b = c[m];
                b.enable && (b.default && (u = m), d.push({ value: m, text: b.text }));
              }
              (u == null && (u = d[0].value), this.initDefaultValue(P.function.linkClickMode(i), u));
            }
            (typeof n.setting.openBlankWithCopyAccessCode == "boolean" &&
              (this.initDefaultValue(
                P.linkClickMode_openBlank.openBlankWithCopyAccessCode(i),
                !!n.setting.openBlankWithCopyAccessCode
              ),
              (r.setting.configurationInterface.linkClickMode_openBlank.openBlankWithCopyAccessCode =
                !!n.setting.openBlankWithCopyAccessCode)),
              typeof n.setting.openBlankAutoFilleAccessCode == "boolean" &&
                (this.initDefaultValue(
                  P.linkClickMode_openBlank.openBlankAutoFilleAccessCode(i),
                  !!n.setting.openBlankAutoFilleAccessCode
                ),
                (r.setting.configurationInterface.linkClickMode_openBlank.openBlankAutoFilleAccessCode =
                  !!n.setting.openBlankAutoFilleAccessCode)),
              typeof n.setting.checkLinkValidity == "boolean" &&
                (this.initDefaultValue(P.function.checkLinkValidity(i), !!n.setting.checkLinkValidity),
                (r.setting.configurationInterface.function.checkLinkValidity = !!n.setting.checkLinkValidity)),
              typeof n.setting.checkLinkValidityHoverTip == "boolean" &&
                this.initDefaultValue(P.function.checkLinkValidityHoverTip(i), !!n.setting.checkLinkValidityHoverTip),
              typeof n.setting.isForward == "boolean" &&
                (this.initDefaultValue(P.schemeUri.enable(i), !!n.setting.isForward),
                (r.setting.configurationInterface.schemeUri.enable = !!n.setting.isForward)),
              typeof n.setting.schemeUri == "string" &&
                (this.initDefaultValue(P.schemeUri.uri(i), n.setting.schemeUri),
                (r.setting.configurationInterface.schemeUri.uri = n.setting.schemeUri)),
              typeof n.setting.innerTextAccessCodeBeforeMaxRange == "number" &&
                (this.initDefaultValue(P.matchRange_text.before(i), n.setting.innerTextAccessCodeBeforeMaxRange),
                (r.setting.configurationInterface.matchRange_text.before =
                  n.setting.innerTextAccessCodeBeforeMaxRange)),
              typeof n.setting.innerTextAccessCodeAfterMaxRange == "number" &&
                (this.initDefaultValue(P.matchRange_text.after(i), n.setting.innerTextAccessCodeAfterMaxRange),
                (r.setting.configurationInterface.matchRange_text.after = n.setting.innerTextAccessCodeAfterMaxRange)),
              typeof n.setting.innerHTMLAccessCodeBeforeMaxRange == "number" &&
                (this.initDefaultValue(P.matchRange_html.before(i), n.setting.innerHTMLAccessCodeBeforeMaxRange),
                (r.setting.configurationInterface.matchRange_html.before =
                  n.setting.innerHTMLAccessCodeBeforeMaxRange)),
              typeof n.setting.innerHTMLAccessCodeAfterMaxRange == "number" &&
                (this.initDefaultValue(P.matchRange_html.after(i), n.setting.innerHTMLAccessCodeAfterMaxRange),
                (r.setting.configurationInterface.matchRange_html.after = n.setting.innerHTMLAccessCodeAfterMaxRange)));
          }
          if (typeof n.icon == "string") {
            let c = n.icon;
            C.$inst.icon.addIcon(i, c);
          }
          const l = Object.getPrototypeOf(async function () {}).constructor;
          if (typeof n.checkLinkValidityFunction == "string")
            try {
              let c = this.getBindContext(n);
              Reflect.set(Q.ruleCheckValidFunction, i, {
                init: new l("netDiskInfo", n.checkLinkValidityFunction).bind(c),
              });
            } catch (c) {
              g.error(c);
            }
          if (typeof n.AuthorizationFunction == "string")
            try {
              let c = this.getBindContext(n);
              (Reflect.deleteProperty(c, "NetDiskCheckLinkValidity"),
                (xt.netDisk[i] = new l(n.AuthorizationFunction).bind(c)));
            } catch (c) {
              g.error(c);
            }
          if (typeof n.AutoFillAccessCodeFunction == "string")
            try {
              let c = this.getBindContext(n);
              (Reflect.deleteProperty(c, "NetDiskCheckLinkValidity"),
                (Ge.netDisk[i] = new l("netDiskInfo", n.AutoFillAccessCodeFunction).bind(c)));
            } catch (c) {
              g.error(c);
            }
          if (typeof n.parseFunction == "string")
            try {
              let c = this.getBindContext(n);
              (Reflect.deleteProperty(c, "NetDiskCheckLinkValidity"),
                Reflect.set(ot.rule, i, new l(n.parseFunction).bind(c)));
            } catch (c) {
              g.error(c);
            }
          if (typeof n.afterRenderUrlBox == "string")
            try {
              let c = this.getBindContext(n);
              (Reflect.deleteProperty(c, "NetDiskCheckLinkValidity"),
                (r.afterRenderUrlBox = new l("option", n.afterRenderUrlBox).bind(c)));
            } catch (c) {
              g.error(c);
            }
          let o = a.find((c) => c.setting.key === r.setting.key);
          o ? (o.rule = o.rule.concat(r.rule)) : a.push(r);
        }
        return a;
      },
      getNetDiskRuleConfig() {
        return this.$data.userRule.values();
      },
      initDefaultValue(t, e) {
        ie(t) == null && pe(t, e);
      },
      getTemplateRule() {
        return {
          key: "规则名",
          icon: "图标链接字符串或图片的base64字符串",
          regexp: [
            {
              link_innerText: "",
              link_innerHTML: "",
              shareCode: "",
              shareCodeNeedRemoveStr: "",
              uiLinkShow: "",
              blank: "",
              copyUrl: "",
            },
          ],
          setting: {
            name: "设置界面的名字",
            enable: true,
            linkClickMode: "openBlank",
            openBlankWithCopyAccessCode: true,
          },
        };
      },
      getRulePanelViewOption(t) {
        const e = this;
        let a = () => t ?? this.getTemplateRule(),
          n = {
            id: "user-rule",
            title: "链接识别",
            headerTitle: "链接识别规则",
            subscribe: {
              enable: true,
              data() {
                return te.getAllSubscribe();
              },
              getData: (r) => te.getSubscribe(r.uuid) ?? r,
              getDataItemName(r) {
                return `
						<style>
							.subscribe-rule-title-info-wrapper{
								display: flex;
								flex-direction: column;
								gap: 4px;
							}
							.subscribe-rule-title-info-wrapper .rule-name-text{
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
								font-weight: 600;
								font-size: 16px;
								line-height: 24px;
							}
							.subscribe-rule-title-info-wrapper .subscribe-rule-small-span-text{
								font-size: 14px;
								line-height: 16px;
								white-space: pre-wrap;
							}
						</style>
						<div class="subscribe-rule-title-info-wrapper">
							<div class="rule-name-text" style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 16px;font-weight: 600;line-height: 24px;">${r.data.title || r.subscribeData.title || r.data.url}</div>
								<div class="subscribe-rule-small-span-text">${r.subscribeData.ruleData.length} 条规则，更新于：${p.formatTime(r.data.latestUpdateTime, "yyyy年MM月dd日 HH:mm:ss")}${typeof r.data.updateFailedTime == "number" ? `，<span style="color: red;">更新失败于：${p.formatTime(r.data.updateFailedTime, "yyyy年MM月dd日 HH:mm:ss")}</span>` : ""}</div>
								${r.subscribeData.homePage ? `<a href="${r.subscribeData.homePage}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">转到主页</a>` : ""}
								<a href="${r.data.url}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">订阅地址</a>
						</div>`;
              },
              addData: (r) => te.addSubscribe(r),
              updateData: (r) => te.updateSubscribe(r),
              deleteData: (r) => te.deleteSubscribe(r),
              btnControls: {
                add: { enable: true },
                filter: {
                  enable: true,
                  title: "过滤订阅",
                  option: [
                    {
                      name: "过滤【已启用】的订阅",
                      filterCallBack(r) {
                        return r.data.enable;
                      },
                    },
                    {
                      name: "过滤【未启用】的订阅",
                      filterCallBack(r) {
                        return !r.data.enable;
                      },
                    },
                  ],
                },
                clearAll: {
                  enable: true,
                  callback: () => {
                    te.deleteAllSubscribe();
                  },
                },
                ruleEnable: {
                  enable: true,
                  getEnable(r) {
                    return r.data.enable;
                  },
                  async callback(r, s) {
                    ((r.data.enable = s), te.updateSubscribe(r));
                  },
                },
                ruleEdit: {
                  enable: true,
                  callback: (r) => {
                    let s = r.ruleData.uuid;
                    return (
                      r.enterDeepMenu({
                        headerTitle: r.ruleData.data.title || r.ruleData.subscribeData.title || r.ruleData.data.url,
                        data() {
                          return te.getSubscribe(s)?.subscribeData?.ruleData ?? r.ruleData.subscribeData.ruleData;
                        },
                        getData(i) {
                          return te.getSubscribeRule(s, i.key) ?? i;
                        },
                        getDataItemName(i) {
                          return i.setting.name;
                        },
                        addData(i) {
                          return true;
                        },
                        updateData(i) {
                          return te.updateSubscribeRule(s, i);
                        },
                        deleteData(i) {
                          return te.deleteSubscribeRule(s, i);
                        },
                        btnControls: {
                          filter: {
                            enable: true,
                            option: [
                              {
                                name: "过滤【已启用】的规则",
                                filterCallBack(i) {
                                  return i.setting.enable;
                                },
                              },
                              {
                                name: "过滤【未启用】的规则",
                                filterCallBack(i) {
                                  return !i.setting.enable;
                                },
                              },
                            ],
                          },
                          clearAll: {
                            enable: true,
                            callback: () => {
                              te.clearSubscribe(s);
                            },
                          },
                          ruleEdit: {
                            enable: true,
                            callback(i) {
                              return (
                                Ee.showSubscribe(s, i.ruleData.key, async (l) => {
                                  let o = await i.context.updateRuleItemElement(
                                    i.option,
                                    i.subscribeOption,
                                    l,
                                    i.$ruleItem,
                                    i.$section
                                  );
                                  i.$ruleItem = o;
                                }),
                                false
                              );
                            },
                          },
                          ruleDelete: {
                            enable: true,
                            deleteCallBack(i) {
                              return te.deleteSubscribeRule(s, i);
                            },
                          },
                        },
                      }),
                      false
                    );
                  },
                },
                ruleDelete: { enable: true, deleteCallBack: (r) => te.deleteSubscribe(r) },
                import: {
                  enable: true,
                  callback(r) {
                    te.importSubscribe(() => {
                      r();
                    });
                  },
                },
                export: {
                  enable: true,
                  callback() {
                    te.exportSubscribe(Re + "-网站规则-订阅.json");
                  },
                },
              },
              getSubscribeInfo: te.getSubscribeInfo.bind(te),
            },
            ruleOption: {
              btnControls: {
                add: {
                  enable: true,
                  callback(r) {
                    return (
                      Ee.show(false, void 0, (s) => {
                        this.updateRuleContaienrElement(n.ruleOption, void 0, r.$section);
                      }),
                      false
                    );
                  },
                },
                filter: {
                  enable: true,
                  title: "过滤规则",
                  option: [
                    {
                      name: "过滤【已启用】的规则",
                      filterCallBack(r) {
                        return r.setting.enable;
                      },
                    },
                    {
                      name: "过滤【未启用】的规则",
                      filterCallBack(r) {
                        return !r.setting.enable;
                      },
                    },
                  ],
                },
                clearAll: {
                  enable: true,
                  callback: () => {
                    e.clearRule();
                  },
                },
                import: {
                  enable: true,
                  callback: (r) => {
                    e.importRule(() => {
                      r();
                    });
                  },
                },
                export: {
                  enable: true,
                  callback: () => {
                    e.exportRule(Re + "-链接识别规则.json", Re + "-链接识别规则-订阅模式.json");
                  },
                },
                ruleEdit: {
                  enable: true,
                  callback(r) {
                    return (
                      Ee.show(true, r.ruleData.key, async (s) => {
                        let i = await r.context.updateRuleItemElement(
                          r.option,
                          r.subscribeOption,
                          s,
                          r.$ruleItem,
                          r.$section
                        );
                        r.$ruleItem = i;
                      }),
                      false
                    );
                  },
                },
                ruleDelete: { enable: true, deleteCallBack: (r) => e.deleteRule(r.key) },
              },
              data: () => this.getAllRule(),
              getAddData: () => a(),
              getData: (r) => this.getAllRule().find((l) => l.key === r.key) ?? r,
              getDataItemName: (r) => r.setting.name,
              updateData: (r) => this.updateRule(r.key, r),
              deleteData: (r) => this.deleteRule(r.key),
            },
          };
        return n;
      },
      addRule(t) {
        let e = this.getAllRule();
        (e.push(t), this.setRule(e));
      },
      setRule(t) {
        ((t = Array.isArray(t) ? t : [t]), Ne.set(this.$data.STORAGE_KEY, t));
      },
      updateRule(t, e) {
        let a = this.getAllRule(),
          n = a.findIndex((r) => r.key === t);
        return n !== -1 ? (a.splice(n, 1, e), this.setRule(a), true) : false;
      },
      deleteRule(t) {
        let e = this.getAllRule(),
          a = e.findIndex((n) => n.key === t);
        return a !== -1 ? (e.splice(a, 1), this.setRule(e), true) : false;
      },
      clearRule() {
        Ne.delete(this.$data.STORAGE_KEY);
      },
      getAllRule() {
        return Ne.get(this.$data.STORAGE_KEY, []);
      },
      getRule(t) {
        return this.getAllRule().find((a) => a.key === t);
      },
      getFormatRule(t) {
        return JSON.stringify(t || this.getAllRule(), void 0, 4);
      },
      exportRule(t = "rule.json", e = "rule-subscribe.json") {
        let a = Z.alert({
            title: { text: "请选择导出方式", position: "center" },
            content: {
              text: `
                    <div class="btn-control" data-mode="only-export-rule-list">导出规则</div>
                    <div class="btn-control" data-mode="export-to-subscribe">导出订阅规则</div>
                `,
              html: true,
            },
            btn: {
              ok: { enable: false },
              close: {
                enable: true,
                callback(i, l) {
                  i.close();
                },
              },
            },
            mask: { enable: true },
            drag: true,
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
				}
            `,
          }),
          n = a.$shadowRoot.querySelector(".btn-control[data-mode='only-export-rule-list']"),
          r = a.$shadowRoot.querySelector(".btn-control[data-mode='export-to-subscribe']"),
          s = (i, l) => {
            let o = new Blob([JSON.stringify(l, null, 4)]),
              c = window.URL.createObjectURL(o),
              u = document.createElement("a");
            ((u.href = c),
              (u.download = i),
              u.click(),
              setTimeout(() => {
                window.URL.revokeObjectURL(c);
              }, 1500));
          };
        (w.on(n, "click", (i) => {
          p.preventEvent(i);
          try {
            let l = this.getAllRule();
            if (l.length === 0) {
              f.warning("规则为空，无需导出");
              return;
            }
            (s(t, l), a.close());
          } catch (l) {
            f.error(l.toString(), { consoleLogContent: true });
          }
        }),
          w.on(r, "click", (i) => {
            p.preventEvent(i);
            const l = this;
            a.close();
            try {
              if (this.getAllRule().length === 0) {
                f.warning("规则为空，无需导出");
                return;
              }
              let c = O.config.PanelHandlerComponents(),
                u = function (S) {
                  return {
                    get(A, R) {
                      return S[A] ?? R;
                    },
                    set(A, R) {
                      ((S[A] = R), Ne.set(l.$data.EXPORT_CONFIG_KEY, S));
                    },
                  };
                },
                d = () => {
                  let S = Ne.get(this.$data.EXPORT_CONFIG_KEY, {});
                  if (S?.title === "" || S.title == null) {
                    f.error("订阅标题不能为空");
                    return;
                  }
                  if (S.version == null) {
                    f.error("版本号不能为空");
                    return;
                  } else S.version = Number(S.version);
                  (S.homePage == null && (S.homePage = void 0),
                    (S.lastModified = Date.now()),
                    (S.ruleData = this.getAllRule()),
                    s(e, S),
                    h.close());
                },
                h = Z.alert({
                  title: { text: "请填写导出配置", position: "center" },
                  content: {
                    text: `
							
						`,
                    html: !0,
                  },
                  btn: {
                    ok: {
                      enable: !0,
                      text: "导出",
                      callback(S, A) {
                        d();
                      },
                    },
                    close: {
                      enable: !0,
                      callback(S, A) {
                        S.close();
                      },
                    },
                  },
                  mask: { enable: !0 },
                  drag: !0,
                  width: K.info.width,
                  height: K.info.height,
                  style: `
						${O.config.cssText.panelCSS}

						.pops-alert-content li{
							list-style-type: none;
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin: 10px;
						}
					`,
                }),
                m = h.$shadowRoot.querySelector(".pops-alert-content"),
                b = Ne.get(this.$data.EXPORT_CONFIG_KEY, {}),
                k = G("订阅标题", "title", "", "", void 0, "");
              Reflect.set(k.props, U, u(b));
              let x = c.createSectionContainerItem_input(k),
                v = G("版本号", "version", "", "", void 0, "", !1);
              Reflect.set(v.props, U, u(b));
              let T = c.createSectionContainerItem_input(v),
                _ = G("主页地址", "homePage", "", "", void 0, "选填");
              Reflect.set(_.props, U, u(b));
              let D = c.createSectionContainerItem_input(_);
              (w.append(m, x), w.append(m, T), w.append(m, D));
            } catch (o) {
              f.error(o.toString(), { consoleLogContent: true });
            }
          }));
      },
      importRule(t) {
        let e = Z.alert({
            title: { text: "请选择导入方式", position: "center" },
            content: {
              text: `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
              html: true,
            },
            btn: {
              ok: { enable: false },
              close: {
                enable: true,
                callback(l, o) {
                  l.close();
                },
              },
            },
            mask: { enable: true },
            drag: true,
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
				}
            `,
          }),
          a = e.$shadowRoot.querySelector(".btn-control[data-mode='local']"),
          n = e.$shadowRoot.querySelector(".btn-control[data-mode='network']"),
          r = e.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),
          s = (l) => {
            let o = this.getAllRule(),
              c = [];
            for (let u = 0; u < l.length; u++) {
              const d = l[u];
              o.findIndex((m) => m.key === d.key) !== -1 || c.push(d);
            }
            ((o = o.concat(c)),
              c.length
                ? (Ne.set(this.$data.STORAGE_KEY, o),
                  g.info(["新增的规则：", c]),
                  f.success(`共 ${l.length} 条规则，新增 ${c.length} 条`))
                : f.error("未新增规则，请删除旧规则再重新导入"),
              t?.());
          },
          i = (l) =>
            new Promise((o) => {
              let c = p.toJSON(l);
              if (Array.isArray(c)) {
                if (!c.length) {
                  (f.error("导入失败，解析出的数据为空", { consoleLogContent: true }), o(false));
                  return;
                }
              } else c = [c];
              let u = [];
              for (let h = 0; h < c.length; h++) {
                const m = c[h];
                let b = this.parseRuleStrToRule(m);
                if (!b.success) {
                  if (c.length === 1) {
                    f.error(b.msg, { timeout: 4e3 });
                    return;
                  }
                  continue;
                }
                b.data && u.push(b.data);
              }
              let d = c.length - u.length;
              (d > 0 &&
                (d === c.length
                  ? f.error("所有规则均未通过规则检查，请检查规则", { timeout: 4e3 })
                  : f.warning(`检测到有 ${d}条未通过规则检查的规则，已忽略`, { timeout: 4e3 })),
                u.length && (s(u), o(true)));
            });
        (w.on(a, "click", (l) => {
          (p.preventEvent(l), e.close());
          let o = w.createElement("input", { type: "file", accept: ".json" });
          (w.on(o, ["propertychange", "input"], (c) => {
            if (!o.files?.length) return;
            let u = o.files[0],
              d = new FileReader();
            ((d.onload = () => {
              i(d.result);
            }),
              d.readAsText(u, "UTF-8"));
          }),
            o.click());
        }),
          w.on(n, "click", (l) => {
            (p.preventEvent(l), e.close());
            let o = Z.prompt({
                title: { text: "网络导入", position: "center" },
                content: { text: "", placeholder: "请填写URL", focus: true },
                btn: {
                  close: {
                    enable: true,
                    callback(d, h) {
                      d.close();
                    },
                  },
                  ok: {
                    text: "导入",
                    callback: async (d, h) => {
                      let m = d.text;
                      if (p.isNull(m)) {
                        f.error("请填入完整的url");
                        return;
                      }
                      let b = f.loading("正在获取配置..."),
                        k = await E.get(m, { allowInterceptConfig: false });
                      if ((b.close(), !k.status)) {
                        (g.error(k), f.error("获取配置失败", { consoleLogContent: true }));
                        return;
                      }
                      (await i(k.data.responseText)) && d.close();
                    },
                  },
                  cancel: { enable: false },
                },
                mask: { enable: true },
                drag: true,
                width: K.info.width,
                height: "auto",
              }),
              c = o.$shadowRoot.querySelector("input"),
              u = o.$shadowRoot.querySelector(".pops-prompt-btn-ok");
            (w.on(c, ["input", "propertychange"], (d) => {
              w.val(c) === "" ? w.attr(u, "disabled", "true") : w.removeAttr(u, "disabled");
            }),
              w.listenKeyboard(c, "keydown", (d, h, m) => {
                d === "Enter" && m.length === 0 && w.val(c) !== "" && p.dispatchEvent(u, "click");
              }),
              p.dispatchEvent(c, "input"));
          }),
          w.on(r, "click", async (l) => {
            (p.preventEvent(l), e.close());
            let o = await p.getClipboardInfo();
            if (o.error != null) {
              f.error(o.error.toString());
              return;
            }
            if (o.content.trim() === "") {
              f.warning("获取到的剪贴板内容为空");
              return;
            }
            await i(o.content);
          }));
      },
    },
    sn = {
      rule: [
        {
          link_innerText:
            "pan.baidu.com/s/[0-9a-zA-Z-_]{6,24}([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码|\\?pwd=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)",
          link_innerHTML:
            "pan.baidu.com/s/[0-9a-zA-Z-_]{6,24}([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码|\\?pwd=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)",
          shareCode: /pan\.baidu\.com\/s\/([0-9a-zA-Z-_]+)/gi,
          shareCodeNeedRemoveStr: /pan\.baidu\.com\/s\//gi,
          checkAccessCode: /(密码|访问码|提取码|pwd=)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}",
          blank: "https://pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}",
          copyUrl: "https://pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}",
        },
        {
          link_innerText:
            "pan.baidu.com/(share|wap)/init\\?surl=[0-9a-zA-Z-_]{5,24}([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码|&pwd=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)",
          link_innerHTML:
            "pan.baidu.com/(share|wap)/init\\?surl=[0-9a-zA-Z-_]{5,24}([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码|&pwd=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)",
          shareCode: /pan\.baidu\.com\/(share|wap)\/init\?surl=([0-9a-zA-Z-_]+)/gi,
          shareCodeNeedRemoveStr: /pan\.baidu\.com\/(share|wap)\/init\?surl=/gi,
          checkAccessCode: /(密码|访问码|提取码|&pwd=)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "pan.baidu.com/share/init?surl={#shareCode#}&pwd={#accessCode#}",
          blank: "https://pan.baidu.com/share/init?surl={#shareCode#}&pwd={#accessCode#}",
          copyUrl: "https://pan.baidu.com/share/init?surl={#shareCode#}&pwd={#accessCode#}",
        },
      ],
      setting: {
        name: "百度网盘",
        key: "baidu",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: { openBlank: { default: true } },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardBlankLink: true, uri: "" },
        },
      },
    },
    on = () => ({
      rule: [
        {
          link_innerText:
            "(lanzou[a-z]{0,1}|lan[a-z]{2}).com/(tp/|u/|)([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{3,6}|)",
          link_innerHTML:
            "(lanzou[a-z]{0,1}|lan[a-z]{2}).com/(tp/|u/|)([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{3,6}|)",
          shareCode:
            /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/(tp\/|u\/|)([0-9a-zA-Z_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{3,20})/gi,
          shareCodeNeedRemoveStr: /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/(tp\/|u\/|)/gi,
          shareCodeExcludeRegular: ["lanzouyx"],
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{3,})/gi,
          uiLinkShow: `${ge.hostname}/{#shareCode#} 提取码: {#accessCode#}`,
          blank: `https://${ge.hostname}/{#shareCode#}`,
          copyUrl: `https://${ge.hostname}/{#shareCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText:
            "(lanzou[a-z]{0,1}|lan[a-z]{2}).com/s/([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{3,6}|)",
          link_innerHTML:
            "(lanzou[a-z]{0,1}|lan[a-z]{2}).com/s/([0-9a-zA-Z_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{3,20})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{3,6}|)",
          shareCode:
            /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/s\/([0-9a-zA-Z_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{3,20})/gi,
          shareCodeNeedRemoveStr: /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/s\//gi,
          shareCodeExcludeRegular: ["lanzouyx"],
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{3,})/gi,
          uiLinkShow: `${ge.hostname}/s/{#shareCode#} 提取码: {#accessCode#}`,
          blank: `https://${ge.hostname}/s/{#shareCode#}`,
          copyUrl: `https://${ge.hostname}/s/{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "蓝奏云",
        key: "lanzou",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: {
              openBlank: { default: true },
              parseFile: { enable: true },
              "parseFile-closePopup": { enable: true },
            },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardLinearChain: false, isForwardBlankLink: false, uri: "" },
          ownFormList: [
            {
              text: "其它配置",
              type: "forms",
              forms: [G("蓝奏云域名", ge.MENU_KEY, ge.DEFAULT_HOST_NAME, "", void 0, `例如：${ge.DEFAULT_HOST_NAME}`)],
            },
          ],
        },
      },
    }),
    ln = {
      rule: [
        {
          link_innerText:
            "ilanzou.com/s/([a-zA-Z0-9_-]{5,22})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码|\\?code=)[\\s\\S]{0,{#matchRange-text-after#}}[a-zA-Z0-9]{3,6}|)",
          link_innerHTML:
            "ilanzou.com/s/([a-zA-Z0-9_-]{5,22})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码|\\?code=)[\\s\\S]{0,{#matchRange-html-after#}}[a-zA-Z0-9]{3,6}|)",
          shareCode: /ilanzou.com\/s\/([a-zA-Z0-9_\-]{5,22})/gi,
          shareCodeNeedRemoveStr: /ilanzou.com\/s\//gi,
          checkAccessCode: /(密码|访问码|提取码|\?code=)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{3,})/gi,
          uiLinkShow: "www.ilanzou.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.ilanzou.com/s/{#shareCode#}?code={#accessCode#}",
          copyUrl: "https://www.ilanzou.com/s/{#shareCode#}?code={#accessCode#}",
        },
      ],
      setting: {
        name: "蓝奏云优享",
        key: "lanzouyx",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: {
              openBlank: { default: true },
              parseFile: { enable: true },
              "parseFile-closePopup": { enable: true },
            },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardLinearChain: false, isForwardBlankLink: false, uri: "" },
        },
      },
    },
    cn = {
      rule: [
        {
          link_innerText:
            "(cloud.189.cn/web/share\\?code=([0-9a-zA-Z_-]){8,14}|cloud.189.cn/t/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)",
          link_innerHTML:
            "(cloud.189.cn/web/share\\?code=([0-9a-zA-Z_-]){8,14}|cloud.189.cn/t/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)",
          shareCode: /cloud.189.cn\/web\/share\?code=([0-9a-zA-Z_\-]){8,14}|cloud.189.cn\/t\/([a-zA-Z0-9_\-]{8,14})/gi,
          shareCodeNeedRemoveStr: /cloud\.189\.cn\/t\/|cloud.189.cn\/web\/share\?code=/gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "cloud.189.cn/t/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://cloud.189.cn/t/{#shareCode#}",
          copyUrl: `https://cloud.189.cn/t/{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "天翼云",
        key: "tianyiyun",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: {
              openBlank: { default: true },
              parseFile: { enable: true },
              "parseFile-closePopup": { enable: true },
            },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardLinearChain: false, isForwardBlankLink: false, uri: "" },
        },
      },
    },
    un = {
      rule: [
        {
          link_innerText:
            "caiyun.139.com/m/i\\?([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)",
          link_innerHTML:
            "caiyun.139.com/m/i\\?([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)",
          shareCode: /caiyun\.139\.com\/m\/i\?([a-zA-Z0-9_\-]{8,14})/gi,
          shareCodeNeedRemoveStr: /caiyun\.139\.com\/m\/i\?/gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "caiyun.139.com/m/i?{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://caiyun.139.com/m/i?{#shareCode#}",
          copyUrl: `https://caiyun.139.com/m/i?{#shareCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText:
            "caiyun.139.com/w/i/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)",
          link_innerHTML:
            "caiyun.139.com/w/i/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)",
          shareCode: /caiyun\.139\.com\/w\/i\/([a-zA-Z0-9_\-]{8,14})/gi,
          shareCodeNeedRemoveStr: /caiyun\.139\.com\/w\/i\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "caiyun.139.com/w/i/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://caiyun.139.com/w/i/{#shareCode#}",
          copyUrl: `https://caiyun.139.com/w/i/{#shareCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText:
            "yun.139.com/link/w/i/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)",
          link_innerHTML:
            "yun.139.com/link/w/i/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)",
          shareCode: /yun\.139\.com\/link\/w\/i\/([a-zA-Z0-9_\-]{8,14})/gi,
          shareCodeNeedRemoveStr: /yun\.139\.com\/link\/w\/i\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "yun.139.com/link/w/i/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://yun.139.com/link/w/i/{#shareCode#}",
          copyUrl: `https://yun.139.com/link/w/i/{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "中国移动云盘",
        key: "hecaiyun",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: { enable: true, linkClickMode: { openBlank: { default: true } } },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardBlankLink: false, uri: "" },
        },
      },
    },
    dn = {
      rule: [
        {
          link_innerText:
            "aliyundrive.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)",
          link_innerHTML:
            "aliyundrive.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)",
          shareCode: /aliyundrive\.com\/s\/([a-zA-Z0-9_\-]{8,14})/g,
          shareCodeNeedRemoveStr: /aliyundrive\.com\/s\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "aliyundrive.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.aliyundrive.com/s/{#shareCode#}",
          copyUrl: `https://www.aliyundrive.com/s/{#shareCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText:
            "aliyundrive.com/t/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)",
          link_innerHTML:
            "aliyundrive.com/t/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)",
          shareCode: /aliyundrive\.com\/t\/([a-zA-Z0-9_\-]{8,14})/g,
          shareCodeNeedRemoveStr: /aliyundrive\.com\/t\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "aliyundrive.com/t/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.aliyundrive.com/t/{#shareCode#}",
          copyUrl: `https://www.aliyundrive.com/t/{#shareCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText:
            "alipan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)",
          link_innerHTML:
            "alipan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)",
          shareCode: /alipan\.com\/s\/([a-zA-Z0-9_\-]{8,14})/g,
          shareCodeNeedRemoveStr: /alipan\.com\/s\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "alipan.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.alipan.com/s/{#shareCode#}",
          copyUrl: `https://www.alipan.com/s/{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "阿里云",
        key: "aliyun",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: {
              openBlank: { default: true },
              parseFile: { enable: true },
              "parseFile-closePopup": { enable: true },
            },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardLinearChain: true, isForwardBlankLink: true, uri: "" },
        },
      },
    },
    pn = {
      rule: [
        {
          link_innerText:
            "(wenshushu.cn|wss.ink|ws28.cn|wss1.cn|ws59.cn|wss.cc)/f/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)",
          link_innerHTML:
            "(wenshushu.cn|wss.ink|ws28.cn|wss1.cn|ws59.cn|wss.cc)/f/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)",
          shareCode: /(wenshushu.cn|wss.ink|ws28.cn|wss1.cn|ws59.cn|wss.cc)\/f\/([a-zA-Z0-9_-]{8,14})/gi,
          shareCodeNeedRemoveStr: /(wenshushu.cn|wss.ink|ws28.cn|wss1.cn|ws59.cn|wss.cc)\/f\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /[0-9a-zA-Z]{4}/gi,
          uiLinkShow: "www.wenshushu.cn/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.wenshushu.cn/f/{#shareCode#}",
          copyUrl: `https://www.wenshushu.cn/f/{#shareCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText:
            "wenshushu.cn/k/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)",
          link_innerHTML:
            "wenshushu.cn/k/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)",
          shareCode: /wenshushu.cn\/k\/([a-zA-Z0-9_-]{8,14})/gi,
          shareCodeNeedRemoveStr: /wenshushu.cn\/k\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /[0-9a-zA-Z]{4}/gi,
          uiLinkShow: "www.wenshushu.cn/k/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.wenshushu.cn/k/{#shareCode#}",
          copyUrl: `https://www.wenshushu.cn/k/{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "文叔叔",
        key: "wenshushu",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: {
              openBlank: { default: true },
              parseFile: { enable: true },
              "parseFile-closePopup": { enable: true },
            },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardLinearChain: true, isForwardBlankLink: true, uri: "" },
        },
      },
    },
    hn = {
      rule: [
        {
          link_innerText:
            "cowtransfer.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)",
          link_innerHTML:
            "cowtransfer.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)",
          shareCode: /cowtransfer.com\/s\/([a-zA-Z0-9_\-]{8,14})/gi,
          shareCodeNeedRemoveStr: /cowtransfer\.com\/s\//gi,
          checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "cowtransfer.com/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://cowtransfer.com/s/{#shareCode#}",
          copyUrl: `https://cowtransfer.com/s/{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "奶牛",
        key: "nainiu",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: {
              openBlank: { default: true },
              parseFile: { enable: true },
              "parseFile-closePopup": { enable: true },
            },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardLinearChain: true, isForwardBlankLink: true, uri: "" },
        },
      },
    },
    fn = {
      rule: [
        {
          link_innerText:
            "weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)",
          link_innerHTML:
            "weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)",
          shareCode: /weiyun.com\/([0-9a-zA-Z\-_]{7,24})/gi,
          shareCodeNeedRemoveStr: /weiyun.com\//gi,
          shareCodeNotMatch: /^(ftn_handler)/,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "share.weiyun.com/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://share.weiyun.com/{#shareCode#}",
          copyUrl: `https://share.weiyun.com/{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "微云",
        key: "weiyun",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: { openBlank: { default: true } },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardBlankLink: true, uri: "" },
        },
      },
    },
    gn = {
      rule: [
        {
          link_innerText:
            "xunlei.com/s/[0-9a-zA-Z-_]{8,30}([\\s\\S]{0,{#matchRange-text-before#}}(\\?pwd=|访问码|提取码|密码|)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)",
          link_innerHTML:
            "xunlei.com/s/[0-9a-zA-Z-_]{8,30}([\\s\\S]{0,{#matchRange-html-before#}}(\\?pwd=|访问码|提取码|密码|)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)",
          shareCode: /xunlei.com\/s\/([0-9a-zA-Z\-_]{8,30})/gi,
          shareCodeNeedRemoveStr: /xunlei.com\/s\//gi,
          checkAccessCode: /(\?pwd=|提取码|密码|访问码)[\s\S]+/g,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#} 提取码: {#accessCode#}",
          blank: "https://pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#}",
          copyUrl: "https://pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#}",
        },
      ],
      setting: {
        name: "迅雷云盘",
        key: "xunlei",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: { openBlank: { default: true } },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardBlankLink: true, uri: "" },
        },
      },
    },
    mn = {
      rule: [
        {
          link_innerText:
            "(pan.jc-box.com|download.jamcz.com|545c.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)",
          link_innerHTML:
            "(pan.jc-box.com|download.jamcz.com|545c.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)",
          shareCode: /(pan.jc-box.com|download.jamcz.com|545c.com)\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /(pan.jc-box.com|download.jamcz.com|545c.com)\/d\//gi,
          checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          paramMatch: /([a-zA-Z0-9\.]+)\/d\//i,
          uiLinkShow: "{#$1#}/d/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://{#$1#}/d/{#shareCode#}?p={#accessCode#}",
          copyUrl: `https://{#$1#}/d/{#shareCode#}?p={#accessCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText:
            "ct.ghpym.com(/|/#/)d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)",
          link_innerHTML:
            "ct.ghpym.com(/|/#/)d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)",
          shareCode: /ct.ghpym.com(\/|\/#\/)d\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /ct.ghpym.com(\/|\/#\/)d\//gi,
          checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          paramMatch: /([a-zA-Z0-9\.]+)(\/|\/#\/)d\//i,
          uiLinkShow: "{#$1#}{#$2#}d/{#shareCode#} 提取码: {#accessCode#}",
          blank: "http://{#$1#}{#$2#}d/{#shareCode#}?p={#accessCode#}",
          copyUrl: `http://{#$1#}{#$2#}d/{#shareCode#}?p={#accessCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText:
            "ctfile.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)",
          link_innerHTML:
            "ctfile.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)",
          shareCode: /ctfile.com\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /ctfile.com\/d\//gi,
          checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "url95.ctfile.com/d/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://url95.ctfile.com/d/{#shareCode#}?p={#accessCode#}",
          copyUrl: `https://url95.ctfile.com/d/{#shareCode#}?p={#accessCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText:
            "(2k.us|u062.com|545c.com|t00y.com|tc5.us)/file/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)",
          link_innerHTML:
            "(2k.us|u062.com|545c.com|t00y.com|tc5.us)/file/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)",
          shareCode: /(2k.us|u062.com|545c.com|t00y.com|tc5.us)\/file\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /(2k.us|u062.com|545c.com|t00y.com|tc5.us)\/file\//gi,
          checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "u062.com/file/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://u062.com/file/{#shareCode#}?p={#accessCode#}",
          copyUrl: `https://u062.com/file/{#shareCode#}?p={#accessCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText:
            "(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)",
          link_innerHTML:
            "(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)",
          shareCode:
            /(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr:
            /(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)\/f\//gi,
          checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          paramMatch: /([0-9a-zA-Z\.]+)\/f\//i,
          uiLinkShow: "{#$1#}/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "http://{#$1#}/f/{#shareCode#}?p={#accessCode#}",
          copyUrl: `http://{#$1#}/f/{#shareCode#}?p={#accessCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText:
            "url[0-9]{2}.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)",
          link_innerHTML:
            "url[0-9]{2}.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)",
          shareCode: /url[0-9]{2}.com\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /url[0-9]{2}.com\/f\//gi,
          checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          paramMatch: /([0-9a-zA-Z\.]+)\/f\//i,
          uiLinkShow: "{#$1#}/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "http://{#$1#}/f/{#shareCode#}?p={#accessCode#}",
          copyUrl: `http://{#$1#}/f/{#shareCode#}?p={#accessCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText:
            "(ctfile.com|089u.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)",
          link_innerHTML:
            "(ctfile.com|089u.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)",
          shareCode: /(ctfile.com|089u.com)\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /(ctfile.com|089u.com)\/f\//gi,
          checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,6})/gi,
          uiLinkShow: "url95.ctfile.com/f/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://url95.ctfile.com/f/{#shareCode#}?p={#accessCode#}",
          copyUrl: `https://url95.ctfile.com/f/{#shareCode#}?p={#accessCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText:
            "(089u.com|474b.com)/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)",
          link_innerHTML:
            "(089u.com|474b.com)/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{6}|)",
          shareCode: /(089u.com|474b.com)\/dir\/([0-9a-zA-Z\-_]{8,26})/gi,
          shareCodeNeedRemoveStr: /(089u.com|474b.com)\/dir\//gi,
          checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{6})/gi,
          uiLinkShow: "089u.com/dir/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://089u.com/dir/{#shareCode#}?p={#accessCode#}",
          copyUrl: `https://089u.com/dir/{#shareCode#}?p={#accessCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "城通网盘",
        key: "chengtong",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: {
              openBlank: { default: true },
              parseFile: { enable: true },
              "parseFile-closePopup": { enable: true },
            },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardBlankLink: true, uri: "" },
          ownFormList: [
            {
              type: "forms",
              text: "文件解析配置",
              forms: [
                G(
                  "<a target='_blank' href='https://github.com/qinlili23333/ctfileGet/'>解析站</a>",
                  "chengtong-parse-file-api-host",
                  "https://ctfile.qinlili.bid",
                  "解析站配置，暂时只支持file，非file为新标签页打开",
                  void 0,
                  ""
                ),
              ],
            },
          ],
        },
      },
    },
    wn = {
      rule: [
        {
          link_innerText:
            "quark.cn/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)",
          link_innerHTML:
            "quark.cn/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)",
          shareCode: /quark.cn\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
          shareCodeNeedRemoveStr: /quark.cn\/s\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "quark.cn/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://pan.quark.cn/s/{#shareCode#}",
          copyUrl: `https://pan.quark.cn/s/{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "夸克网盘",
        key: "kuake",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: { openBlank: { default: true } },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardBlankLink: true, uri: "" },
        },
      },
    },
    bn = {
      rule: [
        {
          link_innerText: "magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}",
          link_innerHTML: "magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}",
          shareCode: /magnet:\?xt=urn:btih:([0-9a-fA-F]{32,40})/gi,
          shareCodeNeedRemoveStr: /magnet:\?xt=urn:btih:/gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          uiLinkShow: "magnet:?xt=urn:btih:{#shareCode#}",
          blank: "magnet:?xt=urn:btih:{#shareCode#}",
          copyUrl: "magnet:?xt=urn:btih:{#shareCode#}",
        },
      ],
      setting: {
        name: "BT磁力",
        key: "magnet",
        configurationInterface: {
          function: {
            enable: true,
            linkClickMode: {
              openBlank: { default: true },
              "openBlank-closePopup": { enable: true },
              parseFile: { enable: true },
              "parseFile-closePopup": { enable: true },
            },
          },
          schemeUri: { enable: false, isForwardBlankLink: true, uri: "" },
        },
      },
    },
    kn = {
      rule: [
        {
          link_innerText:
            "jianguoyun.com/p/[0-9a-zA-Z-_]{16,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]+|)",
          link_innerHTML:
            "jianguoyun.com/p/[0-9a-zA-Z-_]{16,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]+|)",
          shareCode: /jianguoyun.com\/p\/([0-9a-zA-Z\-_]{16,24})/gi,
          shareCodeNeedRemoveStr: /jianguoyun.com\/p\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{3,6})/gi,
          uiLinkShow: "jianguoyun.com/p/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://www.jianguoyun.com/p/{#shareCode#}",
          copyUrl: `https://www.jianguoyun.com/p/{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "坚果云",
        key: "jianguoyun",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: {
              openBlank: { default: true },
              parseFile: { enable: true },
              "parseFile-closePopup": { enable: true },
            },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardLinearChain: false, isForwardBlankLink: false, uri: "" },
        },
      },
    },
    yn = {
      rule: [
        {
          link_innerText:
            "[0-9a-zA-Z-_]+.sharepoint.com/[0-9a-zA-Z-_:]+/[0-9a-zA-Z-_:]+/personal/[0-9a-zA-Z-_]+/[0-9a-zA-Z-_]+([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=\\?e=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]+|)",
          link_innerHTML:
            "[0-9a-zA-Z-_]+.sharepoint.com/[0-9a-zA-Z-_:]+/[0-9a-zA-Z-_:]+/personal/[0-9a-zA-Z-_]+/[0-9a-zA-Z-_]+([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=\\?e=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]+|)",
          shareCode: /[0-9a-zA-Z-_]+\/[0-9a-zA-Z-_:]+\/[0-9a-zA-Z-_:]+\/personal\/[0-9a-zA-Z-_]+\/([0-9a-zA-Z\-_]+)/gi,
          shareCodeNeedRemoveStr: /[0-9a-zA-Z-_]+\/[0-9a-zA-Z-_:]+\/[0-9a-zA-Z-_:]+\/personal\/[0-9a-zA-Z-_]+\//gi,
          checkAccessCode: /(提取码|密码|访问码|\?password=|\?e=)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4,8})/gi,
          paramMatch:
            /([0-9a-zA-Z-_]+).sharepoint.com\/([0-9a-zA-Z-_:]+)\/([0-9a-zA-Z-_:]+)\/personal\/([0-9a-zA-Z-_]+)\/([0-9a-zA-Z-_]+)/i,
          uiLinkShow: "{#$1#}.sharepoint.com/{#$2#}/{#$3#}/personal/{#$4#}/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://{#$1#}.sharepoint.com/{#$2#}/{#$3#}/personal/{#$4#}/{#shareCode#}?e={#accessCode#}",
          copyUrl: `https://{#$1#}.sharepoint.com/{#$2#}/{#$3#}/personal/{#$4#}/{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "OneDrive",
        key: "onedrive",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: { openBlank: { default: true } },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardBlankLink: false, uri: "" },
        },
      },
    },
    xn = {
      rule: [
        {
          link_innerText:
            "(drive|fast).uc.cn/s/[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]+|)",
          link_innerHTML:
            "(drive|fast).uc.cn/s/[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]+|)",
          shareCode: /(drive|fast).uc.cn\/s\/([0-9a-zA-Z]{8,24})/gi,
          shareCodeNeedRemoveStr: /(drive|fast).uc.cn\/s\//gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]+)/gi,
          uiLinkShow: "drive.uc.cn/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://drive.uc.cn/s/{#shareCode#}",
          copyUrl: `https://drive.uc.cn/s/{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "UC网盘",
        key: "uc",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: {
              openBlank: { default: true },
              parseFile: { enable: true },
              "parseFile-closePopup": { enable: true },
            },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardLinearChain: false, isForwardBlankLink: false, uri: "" },
        },
      },
    },
    ye = function (t, e, a, n, r, s, i, l, o, c) {
      let u = {
        text: t,
        type: "slider",
        description: l,
        attributes: {},
        props: {},
        getValue() {
          return this.props[U].get(e, a);
        },
        getToolTipContent(d) {
          return typeof i == "function" ? i(d) : `${d}`;
        },
        callback(d, h) {
          if (typeof s == "function" && s(d, h)) return;
          this.props[U].set(e, h);
        },
        min: n,
        max: r,
        step: o,
      };
      return (
        Reflect.set(u.attributes, ue, e),
        Reflect.set(u.attributes, we, a),
        je.initComponentsStorageApi("slider", u, {
          get(d, h) {
            return j.getValue(d, h);
          },
          set(d, h) {
            j.setValue(d, h);
          },
        }),
        u
      );
    },
    $e = function (t, e, a, n, r, s, i) {
      let l = [];
      typeof n == "function" ? (l = n()) : (l = n);
      let o = {
        text: t,
        type: "select",
        description: s,
        attributes: {},
        props: {},
        getValue() {
          return this.props[U].get(e, a);
        },
        callback(c, u, d) {
          let h = u;
          (g.info(`选择：${d}`), this.props[U].set(e, h));
        },
        data: l,
      };
      return (
        Reflect.set(o.attributes, ue, e),
        Reflect.set(o.attributes, we, a),
        je.initComponentsStorageApi("select", o, {
          get(c, u) {
            return j.getValue(c, u);
          },
          set(c, u) {
            j.setValue(c, u);
          },
        }),
        o
      );
    },
    Cn = {
      rule: [
        {
          link_innerText:
            "(115.com|115cdn.com|anxia.com)/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)",
          link_innerHTML:
            "(115.com|115cdn.com|anxia.com)/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)",
          shareCode: /(115.com|115cdn.com|anxia.com)\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
          shareCodeNeedRemoveStr: /(115.com|115cdn.com|anxia.com)\/s\//gi,
          checkAccessCode: /(提取码|密码|\?password=|访问码)[\s\S]+/gi,
          accessCode: /(提取码|密码|\?password=|访问码)([0-9a-zA-Z]{4})/i,
          paramMatch: /(115.com|115cdn.com|anxia.com)/i,
          uiLinkShow: "{#$1#}/s/{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://{#$1#}/s/{#shareCode#}",
          copyUrl: `https://{#$1#}/s/{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "115网盘",
        key: "_115pan",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: { openBlank: { default: true } },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardBlankLink: true, uri: "" },
        },
      },
    },
    vn = {
      rule: [
        {
          link_innerText: "ed2k://\\|file\\|[^\\|]+\\|\\d+\\|[a-fA-F0-9]{32}\\|",
          link_innerHTML: "ed2k://\\|file\\|[^\\|]+\\|\\d+\\|[a-fA-F0-9]{32}\\|",
          shareCode: /ed2k:\/\/\\|file\\|[^\\|]+\\|\\d+\\|([a-fA-F0-9]{32})\|/gi,
          shareCodeNeedRemoveStr: / /gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]{4})/gi,
          paramMatch: /ed2k:\/\/\|file\|([^\|]+)\|(\d+)\|([a-fA-F0-9]{32})\|/i,
          uiLinkShow: "ed2k://|file|{#$1#}|{#$2#}|{#$3#}|/",
          blank: "ed2k://|file|{#$1#}|{#$2#}|{#$3#}|/",
          copyUrl: "ed2k://|file|{#$1#}|{#$2#}|{#$3#}|/",
        },
      ],
      setting: {
        name: "ed2k",
        key: "ed2k",
        configurationInterface: {
          function: {
            enable: true,
            linkClickMode: {
              openBlank: { default: true },
              "openBlank-closePopup": { enable: true },
              parseFile: { enable: true },
              "parseFile-closePopup": { enable: true },
            },
          },
          schemeUri: { enable: false, isForwardBlankLink: true, uri: "" },
        },
      },
    },
    Sn = {
      rule: [
        {
          link_innerText:
            "[0-9a-z]+.(link.yunpan.com|link.yunpan.360.cn)/lk/surl_[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]+|)",
          link_innerHTML:
            "[0-9a-z]+.(link.yunpan.com|link.yunpan.360.cn)/lk/surl_[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]+|)",
          shareCode: /(link.yunpan.com|link.yunpan.360.cn)\/lk\/surl_([0-9a-zA-Z]{8,24})/gi,
          shareCodeNeedRemoveStr: /(link.yunpan.com|link.yunpan.360.cn)\/lk\/surl_/gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]+)/gi,
          paramMatch: /([0-9a-z]+).(link.yunpan.com|link.yunpan.360.cn)\/lk\//i,
          uiLinkShow: "https://{#$1#}.{#$2#}/lk/surl_{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://{#$1#}.{#$2#}/lk/surl_{#shareCode#}",
          copyUrl: `https://{#$1#}.{#$2#}/lk/surl_{#shareCode#}
密码：{#accessCode#}`,
        },
        {
          link_innerText:
            "(yunpan.360.cn|www.yunpan.com)/lk/surl_[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]+|)",
          link_innerHTML:
            "(yunpan.360.cn|www.yunpan.com)/lk/surl_[0-9a-zA-Z]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]+|)",
          shareCode: /(yunpan.360.cn|www.yunpan.com)\/lk\/surl_([0-9a-zA-Z]{8,24})/gi,
          shareCodeNeedRemoveStr: /(yunpan.360.cn|www.yunpan.com)\/lk\/surl_/gi,
          checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
          accessCode: /([0-9a-zA-Z]+)/gi,
          paramMatch: /(yunpan.360.cn|www.yunpan.com)/i,
          uiLinkShow: "https://{#$1#}/lk/surl_{#shareCode#} 提取码: {#accessCode#}",
          blank: "https://{#$1#}/lk/surl_{#shareCode#}",
          copyUrl: `https://{#$1#}/lk/surl_{#shareCode#}
密码：{#accessCode#}`,
        },
      ],
      setting: {
        name: "360AI云盘",
        key: "360yunpan",
        configurationInterface: {
          matchRange_text: { before: 20, after: 10 },
          matchRange_html: { before: 100, after: 15 },
          function: {
            enable: true,
            linkClickMode: { openBlank: { default: true } },
            checkLinkValidity: true,
            checkLinkValidityHoverTip: true,
          },
          linkClickMode_openBlank: { openBlankAutoFilleAccessCode: true, openBlankWithCopyAccessCode: true },
          schemeUri: { enable: false, isForwardLinearChain: false, isForwardBlankLink: false, uri: "" },
        },
      },
    },
    Je = {
      dataKey: "ruleData",
      $data: { ruleContent: [] },
      init() {
        this.initRule();
      },
      initRule() {
        let t = [sn, on, ln, cn, un, dn, pn, hn, Et, fn, gn, Cn, mn, wn, bn, vn, kn, yn, xn, Sn],
          e = le.getNetDiskRuleConfig();
        [...t, ...e].forEach((a) => {
          if ((typeof a == "function" && (a = a()), typeof a.setting.key != "string")) throw new Error("规则未设置key");
          if (a.rule == null) throw new Error("规则未设置rule");
          const n = a.setting.key,
            r = a.setting.name,
            s = a.rule;
          if (Reflect.has(N.$rule.ruleOption, n)) {
            let c = N.$rule.ruleOption[n];
            a.isUserRule ? (c = [...s, ...c]) : (c = [...c, ...s]);
            let u = N.$rule.rule.find((d) => d.setting.key === n);
            u.rule = c;
          } else (Reflect.set(N.$rule.ruleOption, n, a.rule), N.$rule.rule.push(a));
          (Reflect.set(N.$rule.ruleSetting, n, a.setting), (a.rule = this.parseRuleMatchRule(a)));
          let i = this.parseRuleSetting(a),
            l = a.setting.name;
          C.$inst.icon.hasIcon(n) &&
            (l = `
					<div class="netdisk-aside-icon" style="background-image: url(${C.$inst.icon.getIcon(n)});"></div>
					<div class="netdisk-aside-text">${r}</div>`);
          let o = r;
          (a.isUserRule &&
            ((o += `
					<div 
						class="netdisk-custom-rule-edit" 
						data-key="${n}" 
						data-type="${a.setting.name}"
						${typeof a.subscribeUUID == "string" ? `data-subscribe-uuid="${a.subscribeUUID}"` : ""}"
						
					>${O.config.iconSVG.edit}</div>`),
            (o += `
					<div
						class="netdisk-custom-rule-delete"
						data-key="${n}"
						data-type="${a.setting.name}"
						${typeof a.subscribeUUID == "string" ? `data-subscribe-uuid="${a.subscribeUUID}"` : ""}"
					>${O.config.iconSVG.delete}</div>`)),
            this.$data.ruleContent.push({
              id: "netdisk-panel-config-" + n,
              title: l,
              headerTitle: o,
              attributes: { "data-key": n },
              forms: i,
              afterRender: (c) => {
                c.$asideLiElement.setAttribute("data-function-enable", J.function.enable(n, true).toString());
              },
            }));
        });
      },
      parseRuleMatchRule(t) {
        let e = t.rule,
          a = [],
          n = t.setting.key;
        for (let r = 0; r < e.length; r++) {
          const s = e[r];
          (typeof s.link_innerText == "string" && (s.link_innerText = re.replaceParam(s.link_innerText, zt(n))),
            typeof s.link_innerHTML == "string" && (s.link_innerHTML = re.replaceParam(s.link_innerHTML, Ft(n))),
            a.push(s));
        }
        return a;
      },
      parseRuleSetting(t) {
        let e = [];
        const a = t.setting.configurationInterface,
          n = t.setting.key;
        if (a == null) return [];
        if (a.function) {
          let r = [];
          if ("enable" in a.function) {
            let s = typeof a.function.enable == "boolean" ? a.function.enable : false;
            (r.push(
              H(
                "启用",
                P.function.enable(n),
                s,
                (i, l) => {
                  const o = "data-function-enable";
                  let d = i.target.getRootNode().querySelector(`.pops-panel-aside li[data-key="${n}"]`);
                  d && d.setAttribute(o, l.toString());
                },
                "开启可允许匹配该规则"
              )
            ),
              (a.function.enable = J.function.enable(n)));
          }
          if ("linkClickMode" in a.function) {
            let s = p.assign(re.getDefaultLinkClickMode(), a.function.linkClickMode || {}),
              i = null,
              l = [];
            const o = Object.keys(s);
            for (const c of o) {
              let u = s[c];
              u.enable && (u.default && (i = c), l.push({ value: c, text: u.text }));
            }
            (i == null && (i = l[0].value),
              r.push($e("点击动作", P.function.linkClickMode(n), i, l, void 0, "点击匹配到的链接的执行的动作")));
            for (const c in a.function.linkClickMode) {
              const u = a.function.linkClickMode[c];
              c === J.function.linkClickMode(n) ? (u.default = true) : (u.default = false);
            }
          }
          if ("checkLinkValidity" in a.function) {
            const s = typeof a.function.checkLinkValidity == "boolean" ? a.function.checkLinkValidity : true;
            (r.push(
              H(
                "验证链接有效性",
                P.function.checkLinkValidity(n),
                s,
                void 0,
                "自动请求链接，判断该链接是否有效，在大/小窗内显示验证结果图标"
              )
            ),
              (a.function.checkLinkValidity = J.function.checkLinkValidity(n)));
          }
          if ("checkLinkValidityHoverTip" in a.function) {
            const s =
              typeof a.function.checkLinkValidityHoverTip == "boolean" ? a.function.checkLinkValidityHoverTip : true;
            r.push(
              H(
                "验证链接有效性-悬停提示",
                P.function.checkLinkValidityHoverTip(n),
                s,
                void 0,
                "当鼠标悬停在验证结果图标上时会显示相关验证信息"
              )
            );
          }
          r.length && e.push({ text: "功能", type: "forms", forms: r });
        }
        if (a.linkClickMode_openBlank) {
          let r = [];
          if ("openBlankAutoFilleAccessCode" in a.linkClickMode_openBlank) {
            const s =
              typeof a.linkClickMode_openBlank.openBlankAutoFilleAccessCode == "boolean"
                ? a.linkClickMode_openBlank.openBlankAutoFilleAccessCode
                : true;
            (r.push(
              H(
                "自动填充访问码",
                P.linkClickMode_openBlank.openBlankAutoFilleAccessCode(n),
                s,
                void 0,
                "当点击动作是【新标签页打开】时且存在访问码，那就会自动填充访问码"
              )
            ),
              (a.linkClickMode_openBlank.openBlankAutoFilleAccessCode =
                J.linkClickMode_openBlank.openBlankAutoFilleAccessCode(n)));
          }
          if ("openBlankWithCopyAccessCode" in a.linkClickMode_openBlank) {
            const s =
              typeof a.linkClickMode_openBlank.openBlankWithCopyAccessCode == "boolean"
                ? a.linkClickMode_openBlank.openBlankWithCopyAccessCode
                : false;
            (r.push(
              H(
                "跳转时复制访问码",
                P.linkClickMode_openBlank.openBlankWithCopyAccessCode(n),
                s,
                void 0,
                "当点击动作是【新标签页打开】时且存在访问码，那就会复制访问码到剪贴板"
              )
            ),
              (a.linkClickMode_openBlank.openBlankWithCopyAccessCode =
                J.linkClickMode_openBlank.openBlankWithCopyAccessCode(n)));
          }
          r.length && e.push({ text: "点击动作-新标签页打开", type: "forms", forms: r });
        }
        if (a.schemeUri) {
          const r = [];
          if ("enable" in a.schemeUri) {
            const s = typeof a.schemeUri.enable == "boolean" ? a.schemeUri.enable : false;
            (r.push(H("启用", P.schemeUri.enable(n), s, void 0, "开启后可进行scheme uri转发")),
              (a.schemeUri.enable = J.schemeUri.enable(n)));
          }
          if ("isForwardBlankLink" in a.schemeUri) {
            const s = typeof a.schemeUri.isForwardBlankLink == "boolean" ? a.schemeUri.isForwardBlankLink : false;
            (r.push(
              H("转发新标签页链接", P.schemeUri.isForwardBlankLink(n), s, void 0, "对新标签页打开的链接进行scheme转换")
            ),
              (a.schemeUri.isForwardBlankLink = J.schemeUri.isForwardBlankLink(n)));
          }
          if ("isForwardLinearChain" in a.schemeUri) {
            const s = typeof a.schemeUri.isForwardLinearChain == "boolean" ? a.schemeUri.isForwardLinearChain : false;
            (r.push(H("转发直链", P.schemeUri.isForwardLinearChain(n), s, void 0, "对解析的直链进行scheme转换")),
              (a.schemeUri.isForwardLinearChain = J.schemeUri.isForwardLinearChain(n)));
          }
          if ("uri" in a.schemeUri) {
            const s = typeof a.schemeUri.uri == "string" ? a.schemeUri.uri : "";
            (r.push(
              G(
                "Uri链接",
                P.schemeUri.uri(n),
                s,
                "自定义的Scheme的Uri链接",
                void 0,
                "jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx"
              )
            ),
              (a.schemeUri.uri = J.schemeUri.uri(n)));
          }
          r.length && e.push({ text: "Scheme Uri转发", type: "forms", isFold: true, forms: r });
        }
        if (a.matchRange_text) {
          let r = [];
          if ("before" in a.matchRange_text) {
            const s = typeof a.matchRange_text.before == "number" ? a.matchRange_text.before : 0;
            (r.push(ye("间隔前", P.matchRange_text.before(n), s, 0, 100, void 0, void 0, "提取码间隔前的字符长度")),
              (a.matchRange_text.before = J.matchRange_text.before(n)));
          }
          if ("after" in a.matchRange_text) {
            const s = typeof a.matchRange_text.after == "number" ? a.matchRange_text.after : 0;
            (r.push(ye("间隔后", P.matchRange_text.after(n), s, 0, 100, void 0, void 0, "提取码间隔后的字符长度")),
              (a.matchRange_text.after = J.matchRange_text.after(n)));
          }
          r.length && e.push({ text: "提取码文本匹配Text", type: "forms", forms: r });
        }
        if (a.matchRange_html) {
          let r = [];
          if ("before" in a.matchRange_html) {
            const s = typeof a.matchRange_html.before == "number" ? a.matchRange_html.before : 0;
            (r.push(ye("间隔前", P.matchRange_html.before(n), s, 0, 100, void 0, void 0, "提取码间隔前的字符长度")),
              (a.matchRange_html.before = J.matchRange_html.before(n)));
          }
          if ("after" in a.matchRange_html) {
            const s = typeof a.matchRange_html.after == "number" ? a.matchRange_html.after : 0;
            (r.push(ye("间隔后", P.matchRange_html.after(n), s, 0, 100, void 0, void 0, "提取码间隔后的字符长度")),
              (a.matchRange_html.after = J.matchRange_html.after(n)));
          }
          r.length && e.push({ text: "提取码文本匹配HTML", type: "forms", forms: r });
        }
        return (a.ownFormList && e.push(...a.ownFormList), e);
      },
      getRulePanelContent() {
        return this.$data.ruleContent;
      },
    },
    gt = `div[class^="netdisk-custom-rule-"] {\r
  display: flex;\r
  align-items: center;\r
  margin-left: 10px;\r
  cursor: pointer;\r
}\r
div[class^="netdisk-custom-rule-"] svg,\r
div[class^="netdisk-custom-rule-"] svg {\r
  width: 1.2em;\r
  height: 1.2em;\r
}\r
/* 控件被禁用的颜色 */\r
aside.pops-panel-aside li[data-key][data-function-enable="false"] {\r
  color: #a8abb2;\r
  filter: grayscale(100%);\r
}\r
/* 左侧网盘图标 */\r
aside.pops-panel-aside .netdisk-aside-icon {\r
  width: 20px;\r
  height: 20px;\r
  background-size: 100% 100%;\r
  background-repeat: no-repeat;\r
}\r
/* 设置间隔 */\r
aside.pops-panel-aside ul li {\r
  gap: 4px;\r
}\r
\r
/* mobile模式 */\r
@media screen and (max-width: 600px) {\r
  /* 隐藏左侧网盘图标 */\r
  aside.pops-panel-aside .netdisk-aside-text {\r
    display: none;\r
  }\r
}\r
`,
    pt = {
      show() {
        if (C.$el.$settingView) {
          f.error("设置界面已存在");
          return;
        }
        let t = Je.getRulePanelContent(),
          e = [...De.getConfig(0), ...t, ...De.getDefaultBottomContentConfig()],
          a = Z.panel(
            {
              title: { text: `${Pe?.script?.name || Re}-设置`, position: "center" },
              content: e,
              btn: {
                close: {
                  enable: true,
                  callback(n) {
                    (n.close(), (C.$el.$settingView = void 0));
                  },
                },
              },
              mask: {
                clickCallBack(n) {
                  (n(), (C.$el.$settingView = void 0));
                },
              },
              class: "whitesevPopSetting",
              style: gt,
            },
            C.$config.viewSizeConfig.settingView
          );
        (j.registerConfigSearch({
          $panel: a,
          content: e,
          searchDialogStyle: `
			/* 网盘图标 */
			.netdisk-aside-icon {
				width: 20px;
				height: 20px;
				background-size: 100% 100%;
				background-repeat: no-repeat;
				margin: 0px 4px;
			}
		`,
        }),
          (C.$el.$settingView = a),
          this.setRuleHeaderControlsClickEvent(a.$shadowRoot));
      },
      setRuleHeaderControlsClickEvent(t) {
        (w.on(t, "click", ".netdisk-custom-rule-edit", function (e) {
          let a = e.target,
            n = a.getAttribute("data-key");
          a.getAttribute("data-type");
          let r = a.getAttribute("data-subscribe-uuid");
          typeof r == "string" && r.trim() !== ""
            ? Ee.showSubscribe(r, n, function (s) {
                le.updateRule(n, s);
              })
            : Ee.show(true, n);
        }),
          w.on(t, "click", ".netdisk-custom-rule-delete", function (e) {
            let a = e.target,
              n = a.getAttribute("data-key"),
              r = a.getAttribute("data-type"),
              s = a.getAttribute("data-subscribe-uuid");
            Z.alert({
              title: { text: "提示", position: "center" },
              content: { text: `确定删除规则 ${r}(${n}) 吗？` },
              btn: {
                ok: {
                  callback(i) {
                    let l;
                    if (
                      (typeof s == "string" && s.trim() !== ""
                        ? (l = te.deleteSubscribeRule(s, n))
                        : (l = le.deleteRule(n)),
                      l)
                    ) {
                      let o = C.$el.$settingView.$shadowRoot.querySelector(
                          `.pops-panel-aside > ul > li[data-key="${n}"]`
                        ),
                        c = o.previousElementSibling,
                        u = o.nextElementSibling;
                      (c ? c.click() : u && u.click(), o?.remove(), f.success("删除成功"), i.close());
                    } else f.error("删除规则失败");
                  },
                },
              },
            });
          }));
      },
    },
    Rn = `.whitesevSuspension {\r
  top: 0;\r
  position: fixed;\r
  right: 10px;\r
  border-radius: 12px;\r
}\r
.whitesevSuspension .whitesevSuspensionMain {\r
  background: #fff;\r
  border: 1px solid #f2f2f2;\r
  box-shadow: 0 0 15px #e4e4e4;\r
  box-sizing: border-box;\r
  border-radius: inherit;\r
  height: inherit;\r
  width: inherit;\r
}\r
.whitesevSuspension .whitesevSuspensionFloor {\r
  border-bottom: 1px solid #f2f2f2;\r
  position: relative;\r
  box-sizing: border-box;\r
  border-radius: inherit;\r
  height: inherit;\r
  width: inherit;\r
}\r
.whitesevSuspension .whitesevSuspensionFloor .netdisk {\r
  background-position: center center;\r
  background-size: 115% 115%;\r
  background-repeat: no-repeat;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: inherit;\r
  height: inherit;\r
  width: inherit;\r
}\r
.whitesevSuspension .whitesevSuspensionFloor .netdisk:hover {\r
  transition: all 300ms linear;\r
  background-color: #e4e4e4;\r
  transform: scale(1.1);\r
}\r
.whitesevPop-content p[pop] {\r
  height: 100%;\r
}\r
`,
    oe = {
      position: {
        suspensionX: Ie("suspensionX", B.width(window) - 50),
        suspensionY: Ie("suspensionY", (B.height(window) - 50) / 2),
        suspensionMaxX: Ie("susponsionMax-x", B.width(window) - 50),
        suspensionMaxY: Ie("suspensionMax-y", B.height(window) - 50),
        isRight: Ie("isRight", false),
      },
      mode: { current_suspension_smallwindow_mode: Ie("current_suspension_smallwindow_mode", "suspension") },
    },
    qe = {
      $el: { $suspension: null, $suspensionZIndexStyle: null },
      $data: { isShow: false, isInitAllEvent: false, isSwitchBackground: false },
      init() {
        (this.$data.isShow ||
          ((this.$data.isShow = true), this.createElement(), this.updateZIndex(), this.updatePosition(true)),
          this.$data.isInitAllEvent ||
            ((this.$data.isInitAllEvent = true), this.setAllEvent(), this.setResizeEventListener()),
          this.changeBackground(),
          this.show());
      },
      show() {
        B.css(this.$el.$suspension, { display: "" });
      },
      hide() {
        B.css(this.$el.$suspension, { display: "none" });
      },
      createElement() {
        (y.suspension.size.value < 15 && (y.suspension.size.value = 15),
          y.suspension.size.value > 250 && (y.suspension.size.value = 250),
          y.suspension.opacity.value < 0.1 && (y.suspension.opacity.value = 0.1),
          y.suspension.opacity.value > 1 && (y.suspension.opacity.value = 1));
        let t = B.createElement("div", { className: "whitesev-suspension-shadow-container" }),
          e = t.attachShadow({ mode: "open" });
        ((this.$el.$suspension = B.createElement(
          "div",
          {
            id: "whitesevSuspensionId",
            className: "whitesevSuspension",
            innerHTML: `
					<style type="text/css">${Rn}</style>
					<style type="text/css" data-z-index></style>
					<div class="whitesevSuspensionMain">
						<div class="whitesevSuspensionFloor">
							<div class="netdisk"></div>
						</div>
					</div>
                `,
          },
          {
            style: `
                    width: ${y.suspension.size.value}px;
                    height: ${y.suspension.size.value}px;
                    opacity: ${y.suspension.opacity.value}
                `,
          }
        )),
          (this.$el.$suspensionZIndexStyle = this.$el.$suspension.querySelector("style[data-z-index]")),
          e.appendChild(this.$el.$suspension),
          (document.body || document.documentElement).appendChild(t));
      },
      setAllEvent() {
        let t = this,
          e = C.$inst.suspension.$el.$suspension,
          a = new Wt(e),
          n,
          r = false,
          s = false,
          i = 0,
          l = 0;
        (a.on("pan", function (o) {
          if (!r) {
            r = true;
            let c = e.getBoundingClientRect();
            ((i = o.x - c.left), (l = o.y - c.top), B.css(e, { cursor: "move", transition: "none" }));
          }
          if ((o.phase === "start" && t.updateZIndex(), o.phase === "move")) {
            let c = B.width(window) - y.suspension.size.value,
              u = B.height(window) - y.suspension.size.value,
              d = o.x - i,
              h = o.y - l;
            ((d = d > c ? c : d),
              (h = h > u ? u : h),
              (d = d < 0 ? 0 : d),
              (h = h < 0 ? 0 : h),
              qe.savePosition({ x: d, y: h }),
              B.css(e, { left: d + "px", top: h + "px" }));
          }
          if (o.phase === "end") {
            ((r = false), B.css(e, { cursor: "auto" }));
            let c = parseInt(B.css(e, "left"));
            if (y.suspension["suspended-button-adsorption-edge"].value) {
              let u = 0;
              (c >= B.width(window) / 2
                ? ((u = B.width(window) - y.suspension.size.value),
                  j.isTopWindow() && (oe.position.isRight.value = true))
                : j.isTopWindow() && (oe.position.isRight.value = false),
                qe.savePosition({ x: u }),
                B.css(e, { left: u + "px" }));
            }
            (B.css(e, { transition: "left 300ms ease 0s" }), t.updateZIndex());
          }
        }),
          a.on("tap", function (o) {
            (clearTimeout(n),
              (n = void 0),
              s
                ? ((s = false), pt.show())
                : ((n = setTimeout(() => {
                    ((s = false),
                      y.features["netdisk-behavior-mode"].value.includes("smallwindow") &&
                        ((oe.mode.current_suspension_smallwindow_mode.value = "smallwindow"),
                        C.$inst.suspension.hide()),
                      C.$inst.linkView.show());
                  }, 200)),
                  (s = true)));
          }),
          it.setGlobalRightClickMenu(e));
      },
      setResizeEventListener() {
        B.on(globalThis, "resize", () => {
          let t = document.activeElement;
          if (p.isPhone()) {
            if (["input", "textarea"].includes(t.localName)) return;
            if (
              (t.hasAttribute("contenteditable") && t.getAttribute("contenteditable") === "true") ||
              t.closest("[contenteditable='true']")
            )
              return;
            if (!document.hasFocus()) return;
          }
          this.updatePosition(false);
        });
      },
      savePosition(t) {
        j.isTopWindow() &&
          t != null &&
          (typeof t.x == "number" && (oe.position.suspensionX.value = t.x),
          typeof t.y == "number" && (oe.position.suspensionY.value = t.y),
          (oe.position.suspensionMaxX.value = oe.position.suspensionMaxX.default),
          (oe.position.suspensionMaxY.value = oe.position.suspensionMaxY.default));
      },
      updatePosition(t) {
        const e = B.width(window) - y.suspension.size.value,
          a = B.height(window) - y.suspension.size.value,
          n = oe.position.suspensionMaxX.value,
          r = oe.position.suspensionMaxY.value;
        ((oe.position.suspensionMaxX.default = e), (oe.position.suspensionMaxY.default = a));
        let s = oe.position.suspensionX.value,
          i = oe.position.suspensionY.value;
        if (e !== n) {
          let l = s / n;
          s = e * l;
        }
        if (a !== r) {
          let l = i / r;
          i = a * l;
        }
        (s > e ? (s = e) : s < 0 && (s = 0),
          i > a ? (i = a) : i < 0 && (i = 0),
          y.suspension["suspended-button-adsorption-edge"].value && (oe.position.isRight.value ? (s = e) : (s = 0)),
          t && qe.savePosition({ x: s, y: i }),
          B.css(C.$inst.suspension.$el.$suspension, { left: s + "px", top: i + "px" }));
      },
      updateZIndex() {
        let t = y.suspension["suspended-z-index"].value;
        (t <= 0 && (t = p.getMaxValue(4e4, p.getMaxZIndex(10))),
          B.html(
            this.$el.$suspensionZIndexStyle,
            `
			#whitesevSuspensionId{
				z-index: ${t};
			}
			`
          ));
      },
      changeBackground() {
        if (this.$data.isSwitchBackground) return;
        function t() {
          let i = [];
          return (
            C.$data.isMatchedNetDiskIconMap.forEach((l) => {
              i = [...i, C.$inst.icon.getIcon(l)];
            }),
            i
          );
        }
        function e(i, l) {
          ((a = t()),
            B.fadeOut(s, i, function () {
              (n++,
                (n = n < a.length ? n : 0),
                (l = a[n]),
                B.css(s, { "background-image": `url(${l})` }),
                B.fadeIn(s, i, function () {
                  setTimeout(() => {
                    e(parseInt(y.suspension["randbg-time"].value.toString()), l);
                  }, parseInt(y.suspension["randbg-show-time"].value.toString()));
                }));
            }));
        }
        let a = [],
          n = 0;
        a = t();
        let r = a[n],
          s = C.$inst.suspension.$el.$suspension.querySelector(".whitesevSuspension .netdisk");
        (B.css(s, { "background-image": `url(${r})` }),
          !(a.length < 2 || y.suspension["randbg-time"].value <= 0) &&
            ((this.$data.isSwitchBackground = true),
            e(parseInt(y.suspension["randbg-time"].value.toString().toString()), r)));
      },
    },
    Dt = `.pops-folder-list .list-name-text {\r
  max-width: 300px;\r
}\r
.netdisk-static-link-onefile .pops-folder-list .list-name-text {\r
  max-width: 220px;\r
}\r
.netdisk-static-link-onefile .pops-mobile-folder-content .pops-folder-list .list-name-text {\r
  max-width: unset;\r
}\r
`,
    An = {
      oneFile(t) {
        (g.success("成功获取单文件直链", t),
          Z.folder(
            {
              title: { text: t.title },
              folder: [
                {
                  fileName: t.fileName,
                  fileSize: t.fileSize,
                  fileType: t.fileType ?? "",
                  createTime: t.fileUploadTime || t.fileLatestTime,
                  latestTime: t.fileLatestTime || t.fileUploadTime,
                  isFolder: false,
                  index: 0,
                  async clickEvent() {
                    if (typeof t.clickCallBack == "function") t.clickCallBack(t);
                    else return { autoDownload: true, mode: "aBlank", url: t.downloadUrl };
                  },
                },
              ],
              btn: {
                ok: {
                  text: "下载",
                  callback() {
                    typeof t.clickCallBack == "function" ? t.clickCallBack(t) : window.open(t.downloadUrl, "_blank");
                  },
                },
              },
              class: "netdisk-static-link-onefile",
              style: Dt,
            },
            C.$config.viewSizeConfig.oneFileStaticView
          ));
      },
      moreFile(t, e = []) {
        (g.success("文件解析信息", e),
          Z.folder(
            { title: { text: t }, folder: e, btn: { ok: { enable: false }, cancel: { enable: true } }, style: Dt },
            C.$config.viewSizeConfig.moreFileStaticView
          ));
      },
    },
    _n = function (t = "密码错误", e = "", a, n, r, s = () => {}, i) {
      const l = Z.prompt(
        {
          title: { text: t, position: "center", html: false },
          btn: {
            reverse: true,
            position: "end",
            cancel: {
              text: "取消",
              callback(o, c) {
                (l.close(), i?.());
              },
            },
            close: {
              callback(o, c) {
                (o.close(), i?.());
              },
            },
            ok: {
              callback: (o) => {
                let c = o.text.replace(/[\s]*/gi, ""),
                  u = N.handleLinkShow({ ruleKeyName: e, ruleIndex: a, shareCode: n, accessCode: c });
                if (!u) return;
                let d = `.netdisk-url a[data-rule-key='${e}'][data-sharecode='${n}']`,
                  h = `.netdiskrecord-link a[data-rule-key='${e}'][data-sharecode='${n}']`,
                  m = C.$el.$linkView?.$shadowRoot?.querySelector(d),
                  b = C.$el.$historyView?.$shadowRoot?.querySelector(h);
                (m && (m.setAttribute("data-accesscode", c), w.html(m, u)),
                  b && (b.setAttribute("data-accesscode", c), w.html(b, u)),
                  g.info(`${e} 重新输入的密码：${c}`));
                let k = {
                    isFindInMatchedDict: false,
                    isUpdatedMatchedDict: false,
                    isUpdatedHistoryMatched: false,
                    accessCode: c,
                  },
                  x = N.$match.matchedInfo.get(e);
                if (x.has(n)) {
                  ((k.isFindInMatchedDict = true), (k.isUpdatedMatchedDict = true));
                  let v = x.get(n);
                  x.set(n, N.createLinkStorageInst(c, a, true, v.matchText));
                }
                ((k.isUpdatedHistoryMatched = dt.syncAccessCode(e, a, n, c)), s(k), o.close(), i?.());
              },
            },
          },
          content: {
            placeholder: "请重新输入密码",
            focus: true,
            select: true,
            text: r == null ? "" : typeof r == "string" ? r : "",
          },
          style: `
			input{
				font-size: larger;
			}
			`,
        },
        C.$config.viewSizeConfig.inputNewAccessCodeView
      );
      w.listenKeyboard(l.$shadowRoot, "keypress", (o) => {
        o === "Enter" && l.$shadowRoot.querySelector(".pops-prompt-btn-ok").click();
      });
    },
    $n = `.pops[type-value="confirm"] .pops-confirm-content {\r
  overflow: hidden;\r
}\r
.netdisk-match-paste-text {\r
  --textarea-bd-color: #dcdfe6;\r
  display: inline-block;\r
  resize: vertical;\r
  padding: 5px 15px;\r
  line-height: normal;\r
  box-sizing: border-box;\r
  color: #606266;\r
  border: 1px solid var(--textarea-bd-color);\r
  border-radius: 4px;\r
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r
  outline: none;\r
  margin: 0;\r
  -webkit-appearance: none;\r
  -moz-appearance: none;\r
  appearance: none;\r
  background: none;\r
  width: 100%;\r
  height: 100%;\r
  appearance: none;\r
  resize: none;\r
}\r
.netdisk-match-paste-text:hover {\r
  --textarea-bd-color: #c0c4cc;\r
}\r
.netdisk-match-paste-text:focus {\r
  --textarea-bd-color: #3677f0;\r
}\r
`,
    Dn = {
      show() {
        let t = Z.confirm(
          {
            title: { text: "主动识别文本", position: "center" },
            content: {
              text: `
                    <textarea class="netdisk-match-paste-text"></textarea>
                    `,
              html: true,
            },
            btn: {
              ok: {
                text: "识别",
                callback() {
                  let e = t.popsElement?.querySelector(".netdisk-match-paste-text")?.value || "";
                  e.trim() !== "" &&
                    ((e = re.replaceChinese(e)),
                    z.postMessage({
                      characterMapping: [{ searchValue: /[\u4e00-\u9fa5]/g, replaceValue: "" }],
                      textList: [e],
                      matchTextRange: y.match.pageMatchRange.value,
                      matchedRuleOption: N.$rule.ruleOption,
                      startTime: Date.now(),
                      from: "PasteText",
                    }));
                },
              },
            },
            class: "whitesevPopNetDiskMatchPasteText",
            style: $n,
          },
          C.$config.viewSizeConfig.matchPasteTextView
        );
        t.popsElement.querySelector("textarea").focus();
      },
      workerMatchEndCallBack(t) {
        t.data.length
          ? f.success(`成功匹配${t.data.length}个，用时${Date.now() - t.startTime}ms`)
          : f.error("未识别到链接");
      },
    },
    Tn = {
      src: new ce.Dictionary(),
      hasIcon(t) {
        return this.src.has(t);
      },
      addIcon(t, e) {
        return this.hasIcon(t) ? (g.warn("图标字典中已存在该icon：" + t), false) : this.src.set(t, e);
      },
      getIcon(t) {
        return this.src.get(t);
      },
      assign(t) {
        const e = Object.keys(t);
        for (let a = 0; a < e.length; a++) {
          const n = e[a],
            r = t[n];
          this.addIcon(n, r);
        }
      },
    },
    C = {
      $el: { $linkView: void 0, $historyView: void 0, $settingView: void 0 },
      $inst: {
        suspension: qe,
        linkView: de,
        linearChainDialogView: An,
        newAccessCodeView: _n,
        historyMatch: dt,
        matchPasteText: Dn,
        icon: Tn,
      },
      $data: { isMatchedNetDiskIconMap: new Set(), isForbiddenScrollByDefault: false },
      $config: { viewSizeConfig: Xt },
    },
    Tt = `/* 容器 */\r
.website-rule-container {\r
}\r
/* 每一条规则 */\r
.website-rule-item {\r
  display: flex;\r
  align-items: center;\r
  line-height: normal;\r
  font-size: 16px;\r
  padding: 4px 4px;\r
  gap: 6px;\r
}\r
/* 规则名 */\r
.website-rule-item .website-rule-name {\r
  flex: 1;\r
  white-space: nowrap;\r
  text-overflow: ellipsis;\r
  overflow: hidden;\r
}\r
/* 操作按钮 */\r
.website-rule-item .website-controls {\r
  display: flex;\r
  align-items: center;\r
  text-overflow: ellipsis;\r
  overflow: hidden;\r
  white-space: nowrap;\r
  gap: 8px;\r
  padding: 0px 4px;\r
}\r
/* 编辑和删除按钮 */\r
.website-rule-item .website-rule-edit,\r
.website-rule-item .website-rule-delete {\r
  width: 16px;\r
  height: 16px;\r
  cursor: pointer;\r
}\r
/* 启用按钮 */\r
.website-rule-item .website-rule-enable {\r
}\r
/* 编辑按钮 */\r
.website-rule-item .website-rule-edit {\r
}\r
/* 删除按钮 */\r
.website-rule-item .website-rule-delete {\r
}\r
`;
  function mt(t) {
    if (t === null || typeof t != "object") return t;
    let e = Array.isArray(t) ? [] : {};
    for (let a in t) t.hasOwnProperty(a) && (e[a] = mt(t[a]));
    return e;
  }
  const Ae = new Ve("websiteRule"),
    xe = {
      $data: { STORAGE_KEY: "rule", EXPORT_CONFIG_KEY: "rule-export-config", isShowEditView: false },
      init() {},
      getTemplateData() {
        return { uuid: p.generateUUID(), subscribeUUID: null, enable: true, name: "", url: "", data: {} };
      },
      getRulePanelViewOption(t) {
        const e = this;
        let a = O.config.PanelHandlerComponents(),
          n = () => t ?? this.getTemplateData(),
          r = function (i) {
            return {
              get(l, o) {
                return i[l] ?? o;
              },
              set(l, o) {
                i[l] = o;
              },
            };
          };
        return {
          id: "website-rule",
          title: "网站规则",
          subscribe: {
            enable: true,
            data() {
              return Y.getAllSubscribe();
            },
            getData: (i) => Y.getSubscribe(i.uuid) ?? i,
            getDataItemName(i) {
              return `
						<style>
							.subscribe-rule-title-info-wrapper{
								display: flex;
								flex-direction: column;
								gap: 4px;
							}
							.subscribe-rule-title-info-wrapper .rule-name-text{
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
								font-weight: 600;
								font-size: 16px;
								line-height: 24px;
							}
							.subscribe-rule-title-info-wrapper .subscribe-rule-small-span-text{
								font-size: 14px;
								line-height: 16px;
								white-space: pre-wrap;
							}
						</style>
						<div class="subscribe-rule-title-info-wrapper">
							<div class="rule-name-text" style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 16px;font-weight: 600;line-height: 24px;">${i.data.title || i.subscribeData.title || i.data.url}</div>
								<div class="subscribe-rule-small-span-text">${i.subscribeData.ruleData.length} 条规则，更新于：${p.formatTime(i.data.latestUpdateTime, "yyyy年MM月dd日 HH:mm:ss")}${typeof i.data.updateFailedTime == "number" ? `，<span style="color: red;">更新失败于：${p.formatTime(i.data.updateFailedTime, "yyyy年MM月dd日 HH:mm:ss")}</span>` : ""}</div>
								${i.subscribeData.homePage ? `<a href="${i.subscribeData.homePage}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">转到主页</a>` : ""}
								<a href="${i.data.url}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">订阅地址</a>
						</div>`;
            },
            addData: (i) => Y.addSubscribe(i),
            updateData: (i) => Y.updateSubscribe(i),
            deleteData: (i) => Y.deleteSubscribe(i),
            btnControls: {
              add: { enable: true },
              filter: {
                enable: true,
                title: "过滤订阅",
                option: [
                  {
                    name: "过滤【已启用】的订阅",
                    filterCallBack(i) {
                      return i.data.enable;
                    },
                  },
                  {
                    name: "过滤【未启用】的订阅",
                    filterCallBack(i) {
                      return !i.data.enable;
                    },
                  },
                ],
              },
              clearAll: {
                enable: true,
                callback: () => {
                  Y.deleteAllSubscribe();
                },
              },
              ruleEnable: {
                enable: true,
                getEnable(i) {
                  return i.data.enable;
                },
                async callback(i, l) {
                  ((i.data.enable = l), Y.updateSubscribe(i));
                },
              },
              ruleEdit: {
                enable: true,
                callback: (i) => {
                  let l = i.ruleData.uuid;
                  return (
                    i.enterDeepMenu({
                      headerTitle: i.ruleData.data.title || i.ruleData.subscribeData.title || i.ruleData.data.url,
                      data() {
                        return Y.getSubscribe(l)?.subscribeData?.ruleData ?? i.ruleData.subscribeData.ruleData;
                      },
                      getData(o) {
                        return Y.getSubscribeRule(l, o.uuid) ?? o;
                      },
                      getDataItemName(o) {
                        return o.name ?? o.url;
                      },
                      addData(o) {
                        return true;
                      },
                      updateData(o) {
                        return Y.updateSubscribeRule(l, o);
                      },
                      deleteData(o) {
                        return Y.deleteSubscribeRule(l, o);
                      },
                      btnControls: {
                        filter: {
                          enable: true,
                          option: [
                            {
                              name: "过滤【已启用】的规则",
                              filterCallBack(o) {
                                return o.data.enable;
                              },
                            },
                            {
                              name: "过滤【未启用】的规则",
                              filterCallBack(o) {
                                return !o.data.enable;
                              },
                            },
                          ],
                        },
                        clearAll: {
                          enable: true,
                          callback: () => {
                            Y.clearSubscribe(l);
                          },
                        },
                        ruleEnable: {
                          enable: true,
                          getEnable(o) {
                            return o.enable;
                          },
                          callback(o, c) {
                            ((o.data.enable = c), Y.updateSubscribeRule(l, o));
                          },
                        },
                        ruleEdit: {
                          enable: true,
                          getView: (o, c) => {
                            ((e.$data.isShowEditView = true), c || (o = n()));
                            function u(D) {
                              return {
                                get(S, A) {
                                  let R = Y.getSubscribeRule(l, D);
                                  return Reflect.get(R.data, S) ?? A;
                                },
                                set(S, A) {
                                  let R = Y.getSubscribeRule(l, D);
                                  (Reflect.set(R.data, S, A), Y.updateSubscribeRule(l, R));
                                },
                              };
                            }
                            let d = document.createDocumentFragment(),
                              h = H("启用", "enable", true);
                            Reflect.set(h.props, U, r(o));
                            let m = a.createSectionContainerItem_switch(h),
                              b = G("规则名称", "name", "", "", void 0, "必填");
                            Reflect.set(b.props, U, r(o));
                            let k = a.createSectionContainerItem_input(b),
                              x = G("匹配网址", "url", "", "", void 0, "必填，可正则");
                            Reflect.set(x.props, U, r(o));
                            let v = a.createSectionContainerItem_input(x),
                              T = rt(
                                "覆盖设置",
                                "",
                                "自定义",
                                void 0,
                                false,
                                false,
                                "primary",
                                (D) => {
                                  p.preventEvent(D);
                                  let S = [...De.getConfig(0), ...Je.getRulePanelContent()],
                                    A = mt(S);
                                  function R(M) {
                                    M.forEach((I) => {
                                      if (typeof I?.props == "object" && Reflect.has(I.props, U)) {
                                        let F = u(o.uuid);
                                        Reflect.set(I.props, U, F);
                                      }
                                      let L = I.forms;
                                      L && Array.isArray(L) && R(L);
                                    });
                                  }
                                  for (let M = 0; M < A.length; M++) {
                                    let I = A[M];
                                    if (!I.forms) continue;
                                    if (
                                      (typeof I.afterRender == "function" &&
                                        I?.id.toString().startsWith("netdisk-panel-config-") &&
                                        (I.afterRender = (F) => {
                                          let W = Reflect.get(F.asideConfig.attributes, "data-key"),
                                            ee = P.function.enable(W),
                                            ae = Y.getSubscribeRule(l, o.uuid);
                                          F.$asideLiElement.setAttribute("data-function-enable", ae.data[ee] ?? true);
                                        }),
                                      typeof I.attributes == "object" && I.forms != null && ue in I.attributes)
                                    ) {
                                      let F = I.attributes[ue],
                                        W = H(
                                          "启用",
                                          Be.features.customAccessCodeEnable(F),
                                          false,
                                          void 0,
                                          "启用后将允许执行下面的功能",
                                          void 0
                                        );
                                      Reflect.set(W.props, U, u(o.uuid));
                                      let ee = G(
                                        "自定义访问码",
                                        Be.features.customAccessCode(F),
                                        "",
                                        "让获取的到的链接的访问码都为自定义的访问码",
                                        void 0,
                                        "请输入自定义访问码",
                                        false,
                                        false
                                      );
                                      Reflect.set(ee.props, U, u(o.uuid));
                                      let ae = { text: "额外功能", type: "forms", forms: [W, ee] };
                                      I.forms.length ? I.forms.splice(1, 0, ae) : I.forms.push(ae);
                                    }
                                    let L = I.forms;
                                    L && Array.isArray(L) && R(L);
                                  }
                                  Z.panel(
                                    {
                                      title: { text: "覆盖设置", position: "center" },
                                      content: A,
                                      btn: {
                                        close: {
                                          enable: true,
                                          callback(M) {
                                            M.close();
                                          },
                                        },
                                      },
                                      mask: {
                                        clickCallBack(M) {
                                          M();
                                        },
                                      },
                                      only: false,
                                      class: "whitesevPopSetting",
                                      style: `
																${gt}
																
																${Tt}
						
						
																/* 隐藏顶部的图标 */
																.netdisk-custom-rule-edit,
																.netdisk-custom-rule-delete,
																/* 隐藏快捷键设置菜单，因为这个是全局唯一的 */
																.netdisk-panel-forms-shortcut-keys-deepMenu{
																	display: none !important;
																}`,
                                    },
                                    C.$config.viewSizeConfig.settingView
                                  );
                                },
                                void 0
                              ),
                              _ = a.createSectionContainerItem_button(T);
                            return (d.appendChild(m), d.appendChild(k), d.appendChild(v), d.appendChild(_), d);
                          },
                          onsubmit: (o, c, u) => {
                            let d = o.querySelectorAll(".rule-form-ulist > li"),
                              h = n();
                            if (c) {
                              h.uuid = u.uuid;
                              let b = this.getAllRule().find((k) => k.uuid === h.uuid);
                              b && (h.data = b.data);
                            }
                            return (
                              d.forEach((m) => {
                                let b = Reflect.get(m, "__formConfig__"),
                                  k = Reflect.get(b, "attributes"),
                                  x = Reflect.get(m, U),
                                  v = Reflect.get(k, ue);
                                if (v == null) return;
                                let T = Reflect.get(k, we),
                                  _ = x.get(v, T);
                                Reflect.has(h, v)
                                  ? Reflect.set(h, v, _)
                                  : Reflect.has(h.data, v)
                                    ? Reflect.set(h.data, v, _)
                                    : g.error(`${v}不在数据中`);
                              }),
                              h.name == null || h.name.trim() === ""
                                ? (f.error("规则名称不能为空"), { success: false, data: h })
                                : h.url.trim() === ""
                                  ? (f.error("匹配网址不能为空"), { success: false, data: h })
                                  : c
                                    ? { success: this.updateRule(h), data: h }
                                    : { success: this.addRule(h), data: h }
                            );
                          },
                        },
                        ruleDelete: {
                          enable: true,
                          deleteCallBack(o) {
                            return Y.deleteSubscribeRule(l, o);
                          },
                        },
                      },
                    }),
                    false
                  );
                },
              },
              ruleDelete: { enable: true, deleteCallBack: (i) => Y.deleteSubscribe(i) },
              import: {
                enable: true,
                callback(i) {
                  Y.importSubscribe(() => {
                    i();
                  });
                },
              },
              export: {
                enable: true,
                callback() {
                  Y.exportSubscribe(Re + "-网站规则-订阅.json");
                },
              },
            },
            getSubscribeInfo: Y.getSubscribeInfo.bind(Y),
          },
          ruleOption: {
            btnControls: {
              add: { enable: true },
              filter: {
                enable: true,
                title: "过滤规则",
                option: [
                  {
                    name: "过滤【已启用】的规则",
                    filterCallBack(i) {
                      return i.enable;
                    },
                  },
                  {
                    name: "过滤【未启用】的规则",
                    filterCallBack(i) {
                      return !i.enable;
                    },
                  },
                  {
                    name: "过滤【在当前网址生效】的规则",
                    filterCallBack(i) {
                      let l = new RegExp(i.url, "ig");
                      return !!window.location.href.match(l);
                    },
                  },
                ],
              },
              clearAll: {
                enable: true,
                callback: () => {
                  e.deleteAllRule();
                },
              },
              import: {
                enable: true,
                callback: (i) => {
                  e.importRule(() => {
                    i();
                  });
                },
              },
              export: {
                enable: true,
                callback: () => {
                  e.exportRule(Re + "-网站规则.json", Re + "-网站规则-订阅模式.json");
                },
              },
              ruleEnable: {
                enable: true,
                getEnable(i) {
                  return i.enable;
                },
                callback: (i, l) => {
                  ((i.enable = l), e.updateRule(i));
                },
              },
              ruleEdit: {
                enable: true,
                getView: (i, l) => {
                  ((e.$data.isShowEditView = true), l || (i = n()));
                  function o(T) {
                    return {
                      get(_, D) {
                        let S = e.getRule(T) ?? n(),
                          A = j.getValue(_, D);
                        return (S && Reflect.get(S.data, _)) ?? A;
                      },
                      set(_, D) {
                        let S = e.getRule(T) ?? n();
                        (Reflect.set(S.data, _, D), e.updateRule(S));
                      },
                    };
                  }
                  let c = document.createDocumentFragment();
                  l || (i = n());
                  let u = H("启用", "enable", true);
                  Reflect.set(u.props, U, r(i));
                  let d = a.createSectionContainerItem_switch(u),
                    h = G("规则名称", "name", "", "", void 0, "必填");
                  Reflect.set(h.props, U, r(i));
                  let m = a.createSectionContainerItem_input(h),
                    b = G("匹配网址", "url", "", "", void 0, "必填，可正则");
                  Reflect.set(b.props, U, r(i));
                  let k = a.createSectionContainerItem_input(b),
                    x = rt(
                      "覆盖设置",
                      "",
                      "自定义",
                      void 0,
                      false,
                      false,
                      "primary",
                      (T) => {
                        p.preventEvent(T);
                        let _ = [...De.getConfig(0), ...Je.getRulePanelContent()],
                          D = mt(_);
                        function S(A) {
                          A.forEach((R) => {
                            if (typeof R?.props == "object" && Reflect.has(R.props, U)) {
                              let I = o(i.uuid);
                              Reflect.set(R.props, U, I);
                            }
                            let M = R.forms;
                            M && Array.isArray(M) && S(M);
                          });
                        }
                        for (let A = 0; A < D.length; A++) {
                          let R = D[A];
                          if (!R.forms) continue;
                          if (
                            (typeof R.afterRender == "function" &&
                              R?.id.toString().startsWith("netdisk-panel-config-") &&
                              (R.afterRender = (I) => {
                                let L = Reflect.get(I.asideConfig.attributes, "data-key"),
                                  F = P.function.enable(L);
                                I.$asideLiElement.setAttribute(
                                  "data-function-enable",
                                  l ? xe.getRuleDataValue(i.uuid, F, true) : (i.data[F] ?? true)
                                );
                              }),
                            typeof R.attributes == "object" && R.forms != null && ue in R.attributes)
                          ) {
                            let I = R.attributes[ue],
                              L = H(
                                "启用",
                                Be.features.customAccessCodeEnable(I),
                                false,
                                void 0,
                                "启用后将允许执行下面的功能",
                                void 0
                              );
                            Reflect.set(L.props, U, o(i.uuid));
                            let F = G(
                              "自定义访问码",
                              Be.features.customAccessCode(I),
                              "",
                              "让获取的到的链接的访问码都为自定义的访问码",
                              void 0,
                              "请输入自定义访问码",
                              false,
                              false
                            );
                            Reflect.set(F.props, U, o(i.uuid));
                            let W = { text: "额外功能", type: "forms", forms: [L, F] };
                            R.forms.length ? R.forms.splice(1, 0, W) : R.forms.push(W);
                          }
                          let M = R.forms;
                          M && Array.isArray(M) && S(M);
                        }
                        Z.panel(
                          {
                            title: { text: "覆盖设置", position: "center" },
                            content: D,
                            btn: {
                              close: {
                                enable: true,
                                callback(A) {
                                  A.close();
                                },
                              },
                            },
                            mask: {
                              clickCallBack(A) {
                                A();
                              },
                            },
                            only: false,
                            class: "whitesevPopSetting",
                            style: `
											${gt}
											
											${Tt}
	
	
											/* 隐藏顶部的图标 */
											.netdisk-custom-rule-edit,
											.netdisk-custom-rule-delete,
											/* 隐藏快捷键设置菜单，因为这个是全局唯一的 */
											.netdisk-panel-forms-shortcut-keys-deepMenu{
												display: none !important;
											}
											`,
                          },
                          C.$config.viewSizeConfig.settingView
                        );
                      },
                      void 0
                    ),
                    v = a.createSectionContainerItem_button(x);
                  return (c.appendChild(d), c.appendChild(m), c.appendChild(k), c.appendChild(v), c);
                },
                onsubmit: (i, l, o) => {
                  let c = i.querySelectorAll(".rule-form-ulist > li"),
                    u = n();
                  if (l) {
                    u.uuid = o.uuid;
                    let h = this.getAllRule().find((m) => m.uuid === u.uuid);
                    h && (u.data = h.data);
                  }
                  return (
                    c.forEach((d) => {
                      let h = Reflect.get(d, "__formConfig__"),
                        m = Reflect.get(h, "attributes"),
                        b = Reflect.get(d, U),
                        k = Reflect.get(m, ue);
                      if (k == null) return;
                      let x = Reflect.get(m, we),
                        v = b.get(k, x);
                      Reflect.has(u, k)
                        ? Reflect.set(u, k, v)
                        : Reflect.has(u.data, k)
                          ? Reflect.set(u.data, k, v)
                          : g.error(`${k}不在数据中`);
                    }),
                    u.name == null || u.name.trim() === ""
                      ? (f.error("规则名称不能为空"), { success: false, data: u })
                      : u.url.trim() === ""
                        ? (f.error("匹配网址不能为空"), { success: false, data: u })
                        : l
                          ? { success: this.updateRule(u), data: u }
                          : { success: this.addRule(u), data: u }
                  );
                },
              },
              ruleDelete: { enable: true, deleteCallBack: (i) => e.deleteRule(i.uuid) },
            },
            data: () => this.getAllRule(),
            getAddData: () => n(),
            getData: (i) => this.getAllRule().find((c) => c.uuid === i.uuid) ?? i,
            getDataItemName: (i) => i.name ?? i.url,
            updateData: (i) => this.updateRule(i),
            deleteData: (i) => ((e.$data.isShowEditView = false), this.deleteRule(i.uuid)),
          },
        };
      },
      addRule(t) {
        let e = this.getAllRule();
        return (e.push(t), Ae.set(this.$data.STORAGE_KEY, e), true);
      },
      getRule(t) {
        let e = this.getAllRule().find((n) => n.uuid === t);
        return e || Y.getAllSubscribeRule().find((n) => n.uuid === t);
      },
      getRuleData(t) {
        return typeof t == "string" ? this.getRule(t).data : t.data;
      },
      getRuleDataValue(t, e, a) {
        let n = this.getRuleData(t);
        return (n && Reflect.get(n, e)) ?? a;
      },
      updateRule(t) {
        let e = this.getAllRule(),
          a = false;
        for (let n = 0; n < e.length; n++)
          if (e[n].uuid === t.uuid) {
            ((e[n] = t), (a = true));
            break;
          }
        return (
          a
            ? Ae.set(this.$data.STORAGE_KEY, e)
            : Y.getAllSubscribeRule().find((r) => r.uuid === t.uuid) && (a = Y.updateSubscribeRule(t.subscribeUUID, t)),
          a
        );
      },
      deleteRule(t) {
        let e = this.getAllRule(),
          a = false,
          n = typeof t == "string" ? t : t.uuid;
        for (let r = 0; r < e.length; r++)
          if (e[r].uuid === n) {
            (e.splice(r, 1), (a = true));
            break;
          }
        if (a) Ae.set(this.$data.STORAGE_KEY, e);
        else {
          let r = Y.getAllSubscribeRule().find((s) => s.uuid === n);
          r && (a = Y.deleteSubscribeRule(r.subscribeUUID, r));
        }
        return a;
      },
      deleteAllRule() {
        Ae.delete(this.$data.STORAGE_KEY);
      },
      getAllRule() {
        return Ae.get(this.$data.STORAGE_KEY, []);
      },
      getUrlMatchedRule(t = true, e = window.location.href) {
        let a = this.getAllRule(),
          n = Y.getAllSubscribeRule(true);
        return (
          (a = a.concat(n)),
          a.filter((s) => {
            if (t && !s.enable) return false;
            let i = new RegExp(s.url, "ig");
            return !!e.match(i);
          })
        );
      },
      exportRule(t = "rule.json", e = "rule-subscribe.json") {
        let a = Z.alert({
            title: { text: "请选择导出方式", position: "center" },
            content: {
              text: `
                    <div class="btn-control" data-mode="only-export-rule-list">导出规则</div>
                    <div class="btn-control" data-mode="export-to-subscribe">导出订阅规则</div>
                `,
              html: true,
            },
            btn: {
              ok: { enable: false },
              close: {
                enable: true,
                callback(i, l) {
                  i.close();
                },
              },
            },
            mask: { enable: true },
            drag: true,
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
				}
            `,
          }),
          n = a.$shadowRoot.querySelector(".btn-control[data-mode='only-export-rule-list']"),
          r = a.$shadowRoot.querySelector(".btn-control[data-mode='export-to-subscribe']"),
          s = (i, l) => {
            let o = new Blob([JSON.stringify(l, null, 4)]),
              c = window.URL.createObjectURL(o),
              u = document.createElement("a");
            ((u.href = c),
              (u.download = i),
              u.click(),
              setTimeout(() => {
                window.URL.revokeObjectURL(c);
              }, 1500));
          };
        (w.on(n, "click", (i) => {
          p.preventEvent(i);
          try {
            let l = this.getAllRule();
            if (l.length === 0) {
              f.warning("规则为空，无需导出");
              return;
            }
            (s(t, l), a.close());
          } catch (l) {
            f.error(l.toString(), { consoleLogContent: true });
          }
        }),
          w.on(r, "click", (i) => {
            p.preventEvent(i);
            const l = this;
            a.close();
            try {
              if (this.getAllRule().length === 0) {
                f.warning("规则为空，无需导出");
                return;
              }
              let c = O.config.PanelHandlerComponents(),
                u = function (S) {
                  return {
                    get(A, R) {
                      return S[A] ?? R;
                    },
                    set(A, R) {
                      ((S[A] = R), Ae.set(l.$data.EXPORT_CONFIG_KEY, S));
                    },
                  };
                },
                d = () => {
                  let S = Ae.get(this.$data.EXPORT_CONFIG_KEY, {});
                  if (S?.title === "" || S.title == null) {
                    f.error("订阅标题不能为空");
                    return;
                  }
                  if (S.version == null) {
                    f.error("版本号不能为空");
                    return;
                  } else S.version = Number(S.version);
                  (S.homePage == null && (S.homePage = void 0),
                    (S.lastModified = Date.now()),
                    (S.ruleData = this.getAllRule()),
                    s(e, S),
                    h.close());
                },
                h = Z.alert({
                  title: { text: "请填写导出配置", position: "center" },
                  content: {
                    text: `
							
						`,
                    html: !0,
                  },
                  btn: {
                    ok: {
                      enable: !0,
                      text: "导出",
                      callback(S, A) {
                        d();
                      },
                    },
                    close: {
                      enable: !0,
                      callback(S, A) {
                        S.close();
                      },
                    },
                  },
                  mask: { enable: !0 },
                  drag: !0,
                  width: K.info.width,
                  height: K.info.height,
                  style: `
						${O.config.cssText.panelCSS}

						.pops-alert-content li{
							list-style-type: none;
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin: 10px;
						}
					`,
                }),
                m = h.$shadowRoot.querySelector(".pops-alert-content"),
                b = Ae.get(this.$data.EXPORT_CONFIG_KEY, {}),
                k = G("订阅标题", "title", "", "", void 0, "");
              Reflect.set(k.props, U, u(b));
              let x = c.createSectionContainerItem_input(k),
                v = G("版本号", "version", "", "", void 0, "", !1);
              Reflect.set(v.props, U, u(b));
              let T = c.createSectionContainerItem_input(v),
                _ = G("主页地址", "homePage", "", "", void 0, "选填");
              Reflect.set(_.props, U, u(b));
              let D = c.createSectionContainerItem_input(_);
              (w.append(m, x), w.append(m, T), w.append(m, D));
            } catch (o) {
              f.error(o.toString(), { consoleLogContent: true });
            }
          }));
      },
      importRule(t) {
        let e = Z.alert({
            title: { text: "请选择导入方式", position: "center" },
            content: {
              text: `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
              html: true,
            },
            btn: {
              ok: { enable: false },
              close: {
                enable: true,
                callback(l, o) {
                  l.close();
                },
              },
            },
            mask: { enable: true },
            drag: true,
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
				}
            `,
          }),
          a = e.$shadowRoot.querySelector(".btn-control[data-mode='local']"),
          n = e.$shadowRoot.querySelector(".btn-control[data-mode='network']"),
          r = e.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']"),
          s = (l) => {
            let o = this.getAllRule(),
              c = [];
            for (let u = 0; u < l.length; u++) {
              const d = l[u];
              o.findIndex((m) => m.uuid === d.uuid) !== -1 || c.push(d);
            }
            ((o = o.concat(c)),
              Ae.set(this.$data.STORAGE_KEY, o),
              f.success(`共 ${l.length} 条规则，新增 ${c.length} 条`),
              t?.());
          },
          i = (l) =>
            new Promise((o) => {
              let c = p.toJSON(l);
              if (!Array.isArray(c)) {
                (g.error(c), f.error("导入失败，格式不符合（不是数组）", { consoleLogContent: true }), o(false));
                return;
              }
              if (!c.length) {
                (f.error("导入失败，解析出的数据为空", { consoleLogContent: true }), o(false));
                return;
              }
              (s(c), o(true));
            });
        (w.on(a, "click", (l) => {
          (p.preventEvent(l), e.close());
          let o = w.createElement("input", { type: "file", accept: ".json" });
          (w.on(o, ["propertychange", "input"], (c) => {
            if (!o.files?.length) return;
            let u = o.files[0],
              d = new FileReader();
            ((d.onload = () => {
              i(d.result);
            }),
              d.readAsText(u, "UTF-8"));
          }),
            o.click());
        }),
          w.on(n, "click", (l) => {
            (p.preventEvent(l), e.close());
            let o = Z.prompt({
                title: { text: "网络导入", position: "center" },
                content: { text: "", placeholder: "请填写URL", focus: true },
                btn: {
                  close: {
                    enable: true,
                    callback(d, h) {
                      d.close();
                    },
                  },
                  ok: {
                    text: "导入",
                    callback: async (d, h) => {
                      let m = d.text;
                      if (p.isNull(m)) {
                        f.error("请填入完整的url");
                        return;
                      }
                      let b = f.loading("正在获取配置..."),
                        k = await E.get(m, { allowInterceptConfig: false });
                      if ((b.close(), !k.status)) {
                        (g.error(k), f.error("获取配置失败", { consoleLogContent: true }));
                        return;
                      }
                      (await i(k.data.responseText)) && d.close();
                    },
                  },
                  cancel: { enable: false },
                },
                mask: { enable: true },
                drag: true,
                width: K.info.width,
                height: "auto",
              }),
              c = o.$shadowRoot.querySelector("input"),
              u = o.$shadowRoot.querySelector(".pops-prompt-btn-ok");
            (w.on(c, ["input", "propertychange"], (d) => {
              w.val(c) === "" ? w.attr(u, "disabled", "true") : w.removeAttr(u, "disabled");
            }),
              w.listenKeyboard(c, "keydown", (d, h, m) => {
                d === "Enter" && m.length === 0 && w.val(c) !== "" && p.dispatchEvent(u, "click");
              }),
              p.dispatchEvent(c, "input"));
          }),
          w.on(r, "click", async (l) => {
            (p.preventEvent(l), e.close());
            let o = await p.getClipboardInfo();
            if (o.error != null) {
              f.error(o.error.toString());
              return;
            }
            if (o.content.trim() === "") {
              f.warning("获取到的剪贴板内容为空");
              return;
            }
            await i(o.content);
          }));
      },
    },
    Mn = (t, e, a) => {
      if (xe.$data.isShowEditView) return e ?? a;
      let r = xe.getUrlMatchedRule().find((s) => {
        let i = xe.getRuleData(s);
        return Reflect.has(i, t);
      });
      return r ? Reflect.get(xe.getRuleData(r), t) : (e ?? a);
    },
    In = function (t, e, a) {
      return {
        get KEY() {
          return t;
        },
        get default() {
          return e;
        },
        get value() {
          let n = ie(t, this.default);
          return typeof a == "function" ? a(t, n, this.default) : n;
        },
        set value(n) {
          pe(t, n);
        },
      };
    },
    V = function (t, e) {
      return In(t, e, Mn);
    },
    y = {
      toast: {
        position: V("qmsg-config-position", "top"),
        maxnums: V("qmsg-config-maxnums", 3),
        showreverse: V("qmsg-config-showreverse", true),
      },
      pops: {
        popsAnimation: V("popsAnimation", "pops-anim-fadein-zoom"),
        clickMaskToCloseDialog: V("clickMaskToCloseDialog", true),
        pcDrag: V("pcDrag", true),
        pcDragLimit: V("pcDragLimit", true),
        popsAcrylic: V("popsAcrylic", false),
      },
      popsFolder: {
        "pops-folder-sort-name": V("pops-folder-sort-name", "fileName"),
        "pops-folder-sort-is-desc": V("pops-folder-sort-is-desc", false),
      },
      smallIconNavgiator: {
        "pops-netdisk-icon-click-event-find-sharecode": V("pops-netdisk-icon-click-event-find-sharecode", true),
        "pops-netdisk-icon-click-event-find-sharecode-with-select": V(
          "pops-netdisk-icon-click-event-find-sharecode-with-select",
          true
        ),
        "pops-netdisk-icon-click-event-loop-find-sharecode": V(
          "pops-netdisk-icon-click-event-loop-find-sharecode",
          true
        ),
      },
      suspension: {
        size: V("size", 50),
        opacity: V("opacity", 1),
        "randbg-time": V("randbg-time", 1500),
        "randbg-show-time": V("randbg-show-time", 1200),
        "suspended-button-adsorption-edge": V("suspended-button-adsorption-edge", false),
        "suspended-z-index": V("suspended-z-index", -1),
      },
      smallWindow: {
        "netdisk-ui-small-window-width": V("netdisk-ui-small-window-width", 250),
        "netdisk-ui-small-window-max-height": V("netdisk-ui-small-window-max-height", 200),
        "netdisk-link-view-z-index": V("netdisk-link-view-z-index", -1),
        "netdisk-ui-link-view-data-paging-enable": V("netdisk-ui-link-view-data-paging-enable", false),
        "netdisk-ui-link-view-data-paging-show-data-count": V("netdisk-ui-link-view-data-paging-show-data-count", 10),
      },
      historyMatch: {
        saveMatchNetDisk: V("saveMatchNetDisk", false),
        "netdisk-history-match-ordering-rule": V("netdisk-history-match-ordering-rule", "按 更新时间 - 降序"),
        "netdisk-history-match-merge-same-link": V("netdisk-history-match-merge-same-link", true),
      },
      match: {
        pageMatchRange: V("pageMatchRange", ["innerText", "innerHTML"]),
        depthQueryWithShadowRoot: V("depthQueryWithShadowRoot", false),
        readClipboard: V("readClipboard", false),
        allowMatchLocationHref: V("allowMatchLocationHref", true),
        toBeMatchedWithInputElementValue: V("to-be-matched-inputElementValue", false),
        toBeMatchedTextAreaElementValue: V("to-be-matched-textAreaElementValue", false),
        toBeMatchedXhrHookResponseText: V("to-be-matched-xhrHookResponseText", false),
        delaytime: V("delaytime", 0.8),
        isAddedNodesToMatch: V("isAddedNodesToMatch", false),
        "mutationObserver-childList": V("mutationObserver-childList", true),
        "mutationObserver-characterData": V("mutationObserver-characterData", true),
        "mutationObserver-subtree": V("mutationObserver-subtree", true),
      },
      features: {
        "netdisk-match-mode": V("netdisk-match-mode", "MutationObserver"),
        "netdisk-behavior-mode": V("netdisk-behavior-mode", "suspension_smallwindow"),
        autoFillAccessCode: V("autoFillAccessCode", true),
      },
      shareCode: {
        excludeIdenticalSharedCodesCoefficient: V("excludeIdenticalSharedCodesCoefficient", 1),
        excludeIdenticalSharedCodes: V("excludeIdenticalSharedCodes", false),
      },
      accessCode: { allowQueryHistoryMatchingAccessCode: V("allowQueryHistoryMatchingAccessCode", true) },
    },
    N = {
      $data: { isMatchedLink: false, clipboardText: "" },
      $match: {
        matchedInfo: new ce.Dictionary(),
        blackMatchedInfo: new ce.Dictionary(),
        tempMatchedInfo: new ce.Dictionary(),
        matchedInfoRuleKey: new Set(),
      },
      $rule: { ruleOption: {}, ruleSetting: {}, rule: [] },
      $extraRule: {
        shareCodeNotMatchRegExpList: [
          /vipstyle|notexist|ajax|file|download|ptqrshow|xy-privacy/g,
          /comp|web|undefined|1125|unproved|console|account|favicon|setc/g,
        ],
        accessCodeNotMatchRegExpList: [/^(font|http)/gi],
        accessCodeNeedRemoveStr: [
          "：",
          " ",
          ":",
          `
`,
          "提取码",
          "密码",
          "?password=",
          "?pwd=",
          "&pwd=",
          "?p=",
          "访问码",
        ],
        noAccessCodeRegExp: [
          /( |提取码:|\n密码：)/gi,
          /{#accessCode#}/gi,
          /{#encodeURI-accessCode#}|{#encodeURIComponent-accessCode#}/gi,
          /{#decodeURI-accessCode#}|{#decodeURIComponent-accessCode#}/gi,
          /(\?pwd=|&pwd=|\?password=|\?p=)/gi,
        ],
      },
      init() {
        this.initLinkDict();
      },
      initLinkDict() {
        Object.keys(this.$rule.ruleOption).forEach((a) => {
          (this.$match.matchedInfo.set(a, new p.Dictionary()),
            this.$match.blackMatchedInfo.set(a, new p.Dictionary()),
            this.$match.tempMatchedInfo.set(a, new p.Dictionary()));
        });
        const t = xe.getUrlMatchedRule();
        t.length &&
          (g.info("成功命中网站规则 ==> ", t),
          Oe.add({
            key: "matchedUrlRuleList",
            text: `🌏 命中网站规则 ${t.length} 条`,
            autoReload: false,
            isStoreValue: false,
            showText(a) {
              return a;
            },
            callback: () => {
              (g.info("当前网址：" + self.location.href),
                j.isTopWindow() &&
                  alert(
                    `以下是命中的规则名：
` +
                      t.map((a) => a.name).join(`
`)
                  ));
            },
          }));
        const e = ut.getUrlMatchedRule();
        e.length &&
          (g.info("成功命中字符规则 ==> ", e),
          Oe.add({
            key: "characterMapping",
            text: `🌏 命中字符规则 ${e.length} 条`,
            autoReload: false,
            isStoreValue: false,
            showText(a) {
              return a;
            },
            callback: () => {
              (g.info("当前网址：" + self.location.href),
                j.isTopWindow() &&
                  alert(
                    `以下是命中的规则名：
` +
                      e.map((a) => a.name).join(`
`)
                  ));
            },
          }));
      },
      handleLink(t) {
        const e = this.handleShareCode(t);
        if (p.isNull(e)) return;
        let a = this.handleAccessCode(t);
        return ((a = this.handleAccessCodeByUserRule({ ...t, accessCode: a })), { shareCode: e, accessCode: a });
      },
      handleShareCode(t) {
        const e = t?.debugConfig?.config ?? this.$rule.ruleOption[t.ruleKeyName][t.ruleIndex],
          a = t.matchText.match(e.shareCode)?.filter((s) => p.isNotNull(s));
        if (
          (t.debugConfig?.logCallBack?.({
            status: true,
            msg: ["正则: shareCode", "作用: 获取shareCode", "结果: ", JSON.stringify(a)],
          }),
          p.isNull(a))
        ) {
          t.debugConfig?.logCallBack?.({ status: false, msg: "匹配shareCode为空" });
          return;
        }
        let n = a[0];
        if ((t.debugConfig?.logCallBack?.({ status: true, msg: ["取第一个值: " + n] }), e.shareCodeNeedRemoveStr)) {
          let s = e.shareCodeNeedRemoveStr;
          Array.isArray(s) || (s = [s]);
          for (const i of s) n = n.replace(i, "");
          s.length &&
            t.debugConfig?.logCallBack?.({
              status: true,
              msg: ["正则: shareCodeNeedRemoveStr", "作用: 删除ShareCode前面不需要的字符串", `结果: ${n}`],
            });
        }
        for (const s of N.$extraRule.shareCodeNotMatchRegExpList)
          if (n.match(s)) {
            t.debugConfig?.logCallBack?.({
              status: false,
              msg: [
                "正则: 内置的shareCodeNotMatchRegExpList",
                "作用: 使用该正则判断提取到的shareCode是否正确",
                "结果: true 该shareCode不是正确的",
              ],
            });
            return;
          }
        let r = e.shareCodeNotMatch;
        if (r != null) {
          Array.isArray(r) || (r = [r]);
          for (const s of r)
            if (n.match(s)) {
              t.debugConfig?.logCallBack?.({
                status: false,
                msg: [
                  "正则: shareCodeNotMatch",
                  "作用: 用于判断提取到的shareCode是否是错误的shareCode",
                  "结果: true 该shareCode不是正确的",
                ],
              });
              return;
            }
        }
        if (
          ((n = decodeURI(n)),
          t.debugConfig?.logCallBack?.({ status: true, msg: ["对shareCode进行解码: " + n] }),
          y.shareCode.excludeIdenticalSharedCodes.value &&
            p.isSameChars(n, y.shareCode.excludeIdenticalSharedCodesCoefficient.value))
        ) {
          t.debugConfig?.logCallBack?.({ status: false, msg: ["已开启【排除分享码】且该分享码命中该规则"] });
          return;
        }
        if (n.endsWith("http") || n.endsWith("https")) {
          t.debugConfig?.logCallBack?.({ status: false, msg: ["该分享码以http|https结尾"] });
          return;
        }
        return (t.debugConfig?.logCallBack?.({ status: true, msg: "处理完毕的shareCode: " + n }), n);
      },
      handleAccessCode(t) {
        const e = t.debugConfig?.config ?? this.$rule.ruleOption[t.ruleKeyName][t.ruleIndex];
        let a = "";
        if (!e.checkAccessCode)
          return (
            t.debugConfig?.logCallBack?.({ status: true, msg: "因未配置规则checkAccessCode，默认accessCode的值为空" }),
            ""
          );
        const n = t.matchText.match(e.checkAccessCode);
        if (
          (t.debugConfig?.logCallBack?.({
            status: true,
            msg: [
              "正则: checkAccessCode",
              "作用: 用来判断link_innerText或者link_innerHTML匹配到的字符串中是否存在密码",
              "结果: ",
              JSON.stringify(n),
            ],
          }),
          n)
        ) {
          const r = n[n.length - 1];
          t.debugConfig?.logCallBack?.({ status: true, msg: "取最后一个值: " + r });
          const s = r.match(e.accessCode)?.filter((i) => p.isNotNull(i));
          if (
            (t.debugConfig?.logCallBack?.({
              status: true,
              msg: [
                "正则: accessCode",
                "作用: 用来提取link_innerText或者link_innerHTML匹配到的字符串中的密码",
                "结果: ",
                JSON.stringify(s),
              ],
            }),
            p.isNull(s))
          )
            return (
              t.debugConfig?.logCallBack?.({ status: true, msg: "因↑匹配到的结果为空，默认accessCode的值为空" }),
              ""
            );
          s.length && ((a = s[0]), t.debugConfig?.logCallBack?.({ status: true, msg: "取第一个值: " + a }));
        }
        if (p.isNotNull(a)) {
          for (const i of N.$extraRule.accessCodeNotMatchRegExpList)
            if (a.match(i)) {
              ((a = ""),
                t.debugConfig?.logCallBack?.({
                  status: true,
                  msg: [
                    "正则: 内置的accessCodeNotMatchRegExpList",
                    "作用: 使用该正则判断提取到的accessCode是否正确",
                    "结果: true 重置accessCode为空",
                  ],
                }));
              break;
            }
          let r = e.acceesCodeNotMatch;
          if (r) {
            Array.isArray(r) || (r = [r]);
            for (const i of r)
              if (a.match(i)) {
                ((a = ""),
                  t.debugConfig?.logCallBack?.({
                    status: true,
                    msg: [
                      "正则: acceesCodeNotMatch",
                      "作用: 用于判断提取到的accessCode是否是错误的accessCode",
                      "结果: true 重置accessCode为空",
                    ],
                  }));
                break;
              }
          }
          for (const i of N.$extraRule.accessCodeNeedRemoveStr) a = Ke.replaceText(a, i, "");
          t.debugConfig?.logCallBack?.({
            status: true,
            msg: [
              "正则: 内置的accessCodeNeedRemoveStr",
              "作用: 用于处理提取到的accessCode删除部分不需要的字符串",
              `结果: ${a}`,
            ],
          });
          const s = e.accessCodeNeedRemoveStr;
          s &&
            ((a = Ke.replaceText(a, s, "")),
            t.debugConfig?.logCallBack?.({
              status: true,
              msg: [
                "正则: accessCodeNeedRemoveStr",
                "作用: 用于处理提取到的accessCode删除部分不需要的字符串",
                "结果: true 重置accessCode为空",
              ],
            }));
        }
        return (t.debugConfig?.logCallBack?.({ status: true, msg: "处理完毕的accessCode: " + a }), a);
      },
      handleAccessCodeByUserRule(t) {
        const e = xe.getUrlMatchedRule();
        let a = t.accessCode;
        for (let n = 0; n < e.length; n++) {
          const r = e[n],
            s = xe.getRuleData(r),
            i = Reflect.get(s, Be.features.customAccessCode(t.ruleKeyName));
          if (Reflect.get(s, Be.features.customAccessCodeEnable(t.ruleKeyName)) && typeof i == "string") {
            a = i;
            break;
          }
        }
        return a;
      },
      handleLinkShow(t) {
        if (!(t.debugConfig?.config ? true : this.checkHasRuleOption(t.ruleKeyName, t.ruleIndex))) {
          (g.error(`BUG: ${t.ruleKeyName}不存在，分析参数`, t),
            (t.showToast ?? true) && f.error(`规则：${t.ruleKeyName}不存在`));
          return;
        }
        const a = t.debugConfig?.config ?? N.$rule.ruleOption[t.ruleKeyName][t.ruleIndex];
        let n = re.replaceParam(a.uiLinkShow, { shareCode: t.shareCode });
        if (
          (t.debugConfig?.logCallBack?.({
            status: true,
            msg: ["正则: uiLinkShow", "作用: 用于显示在弹窗中的字符串", "备注: 对shareCode进行参数替换", `结果: ${n}`],
          }),
          typeof t.accessCode == "string" && t.accessCode.trim() != ""
            ? ((n = re.replaceParam(n, { accessCode: t.accessCode })),
              t.debugConfig?.logCallBack?.({
                status: true,
                msg: [
                  "正则: uiLinkShow",
                  "作用: 用于显示在弹窗中的字符串",
                  "备注: 对accessCode进行参数替换",
                  `结果: ${n}`,
                ],
              }))
            : ((n = Ke.replaceText(n, N.$extraRule.noAccessCodeRegExp, "")),
              t.debugConfig?.logCallBack?.({
                status: true,
                msg: [
                  "正则: 内置的noAccessCodeRegExp",
                  "作用: 因accessCode为空，使用该正则去除不需要的字符串",
                  `结果: ${n}`,
                ],
              })),
          a.paramMatch)
        ) {
          const r = N.$match.matchedInfo.get(t.ruleKeyName).get(t.shareCode);
          if (((t.matchText = t.matchText ?? r?.matchText), p.isNotNull(t.matchText))) {
            const s = t.matchText.match(a.paramMatch),
              i = {};
            if (s) for (let l = 0; l < s.length; l++) i[`$${l}`] = s[l];
            ((n = re.replaceParam(n, i)),
              t.debugConfig?.logCallBack?.({
                status: true,
                msg: [
                  "正则: paramMatch",
                  "作用: 用于对matchText进行提取需要的关键内容，替换关键字：{#$1#}、{#$2#}...",
                  "参数: " + JSON.stringify(i, void 0, 4),
                  `结果: ${n}`,
                ],
              }));
          }
        }
        return (t.debugConfig?.logCallBack?.({ status: true, msg: "处理完毕的uiLink: " + n }), n);
      },
      createLinkStorageInst(t, e = 0, a = false, n) {
        return { accessCode: t, ruleIndex: e, isForceAccessCode: a, matchText: n, matchTime: performance.now() };
      },
      checkHasRuleOption(t, e) {
        const a = N.$rule.ruleOption?.[t];
        return !(!Array.isArray(a) || (typeof e == "number" && (e < 0 || a.length <= e)));
      },
    };
  class En {
    key = "short-cut";
    $data;
    isWaitPress = false;
    currentWaitEnterPressInstanceHandler = null;
    constructor(e) {
      (typeof e == "string" && (this.key = e), (this.$data = { otherShortCutOptions: [] }));
    }
    initConfig(e, a) {
      this.hasOption(e) || this.setOption(e, a);
    }
    getStorageKey() {
      return this.key;
    }
    getLocalAllOptions() {
      return ie(this.key, []);
    }
    hasOption(e) {
      return !!this.getLocalAllOptions().find((r) => r.key === e);
    }
    hasOptionValue(e) {
      return this.hasOption(e) ? this.getOption(e)?.value != null : false;
    }
    getOption(e, a) {
      return this.getLocalAllOptions().find((s) => s.key === e) ?? a;
    }
    setOption(e, a) {
      let n = this.getLocalAllOptions(),
        r = n.findIndex((s) => s.key === e);
      (r == -1 ? n.push({ key: e, value: a }) : Reflect.set(n[r], "value", a), pe(this.key, n));
    }
    emptyOption(e) {
      let a = false,
        n = this.getLocalAllOptions(),
        r = n.findIndex((s) => s.key === e);
      return (r !== -1 && ((n[r].value = null), (a = true)), pe(this.key, n), a);
    }
    deleteOption(e) {
      let a = false,
        n = this.getLocalAllOptions(),
        r = n.findIndex((s) => s.key === e);
      return (r !== -1 && (n.splice(r, 1), (a = true)), pe(this.key, n), a);
    }
    translateKeyboardValueToButtonText(e) {
      let a = "";
      return (
        e.ohterCodeList.forEach((n) => {
          a += p.stringTitleToUpperCase(n, true) + " + ";
        }),
        (a += p.stringTitleToUpperCase(e.keyName)),
        a
      );
    }
    getShowText(e, a) {
      if (this.hasOption(e)) {
        let n = this.getOption(e);
        return n.value == null ? a : this.translateKeyboardValueToButtonText(n.value);
      } else return a;
    }
    async enterShortcutKeys(e) {
      const a = this;
      return new Promise((n) => {
        this.isWaitPress = true;
        let r = w.listenKeyboard(window, "keyup", (s, i, l) => {
          const o = { keyName: s, keyValue: i, ohterCodeList: l };
          let c = {};
          try {
            const u = JSON.stringify(o),
              d = this.getLocalAllOptions();
            Array.isArray(this.$data.otherShortCutOptions) && d.push(...this.$data.otherShortCutOptions);
            for (let h = 0; h < d.length; h++) {
              let m = d[h];
              if (m.key === e) continue;
              const b = JSON.stringify(m.value);
              let k = !1;
              if ((m.value != null && u === b && (k = !0), k)) {
                c = { status: !1, key: m.key, option: o };
                return;
              }
            }
            (this.setOption(e, o), (c = { status: !0, key: e, option: o }));
          } catch (u) {
            (console.log(u), (c = { status: false, key: e, option: o }));
          } finally {
            ((a.isWaitPress = false), r.removeListen(), (a.currentWaitEnterPressInstanceHandler = null), n(c));
          }
        });
        ((a.currentWaitEnterPressInstanceHandler = null),
          (a.currentWaitEnterPressInstanceHandler = () => {
            ((a.isWaitPress = false), r.removeListen());
          }));
      });
    }
    cancelEnterShortcutKeys() {
      typeof this.currentWaitEnterPressInstanceHandler == "function" && this.currentWaitEnterPressInstanceHandler();
    }
    initGlobalKeyboardListener(e, a) {
      let n = this.getLocalAllOptions();
      if (!n.length) {
        g.warn("没有设置快捷键");
        return;
      }
      const r = this;
      function s(o, c) {
        w.listenKeyboard(
          o,
          "keydown",
          (u, d, h, m) => {
            if (r.isWaitPress) return;
            (a?.isPrevent && p.preventEvent(m), (n = r.getLocalAllOptions()));
            let b = n.findIndex((k) => {
              let x = k.value,
                v = { keyName: u, keyValue: d, ohterCodeList: h };
              if (JSON.stringify(x) === JSON.stringify(v)) return k;
            });
            if (b != -1) {
              let k = n[b];
              k.key in c && (g.info(["调用快捷键", k]), c[k.key].callback());
            }
          },
          { capture: !!a?.capture }
        );
      }
      let i = {},
        l = {};
      (Object.keys(e).forEach((o) => {
        let c = e[o];
        ((c.target == null || (typeof c.target == "string" && c.target === "")) && (c.target = "window"),
          c.target === "window" ? Reflect.set(i, o, c) : Reflect.set(l, o, c));
      }),
        s(window, i),
        w.ready(() => {
          Object.keys(l).forEach(async (o) => {
            let c = l[o];
            if (typeof c.target == "string")
              p.waitNode(c.target, 1e4).then((u) => {
                if (!u) return;
                let d = {};
                (Reflect.set(d, o, c), s(u, d));
              });
            else if (typeof c.target == "function") {
              let u = await c.target();
              if (u == null) return;
              let d = {};
              (Reflect.set(d, o, c), s(u, d));
            } else {
              let u = {};
              (Reflect.set(u, o, c), s(c.target, u));
            }
          });
        }));
    }
  }
  const Se = {
      shortCut: new En("GM_shortcut"),
      init() {
        this.shortCut.initGlobalKeyboardListener(this.getShortCutMap());
      },
      getShortCutMap() {
        return {
          "netdisk-keyboard-open-setting": {
            target: "window",
            callback: () => {
              (g.info("快捷键 ==> 【打开】⚙ 设置"), pt.show());
            },
          },
          "netdisk-keyboard-open-history-matching-records": {
            target: "window",
            callback: () => {
              (g.info("快捷键 ==> 【打开】⚙ 历史匹配记录"), C.$inst.historyMatch.show());
            },
          },
          "netdisk-keyboard-open-user-rule": {
            target: "window",
            callback: () => {
              (g.info("快捷键 ==> 【打开】⚙ 链接识别规则"), Ee.show(false));
            },
          },
          "netdisk-keyboard-open-proactively-recognize-text": {
            target: "window",
            callback: () => {
              (g.info("快捷键 ==> 【打开】⚙ 主动识别文本"), C.$inst.matchPasteText.show());
            },
          },
          "netdisk-keyboard-performPageTextMatchingManually": {
            target: "window",
            callback() {
              (g.info("快捷键 ==> 执行文本匹配"), (z.dispatchMonitorDOMChange = true));
            },
          },
          "netdisk-keyboard-character-mapping": {
            target: "window",
            callback() {
              (g.info("快捷键 ==> 【打开】⚙ 字符映射规则"), Xe.showView("字符映射"));
            },
          },
          "netdisk-keyboard-identifyTheSelectedContent": {
            target: "window",
            callback() {
              g.info("快捷键 ==> 识别选中内容");
              const { text: t, html: e } = Ze.getSelectContent();
              (g.info("选中的内容信息：", [t, e]),
                z.postMessage({
                  characterMapping: [],
                  textList: [t, e],
                  matchTextRange: y.match.pageMatchRange.value,
                  matchedRuleOption: N.$rule.ruleOption,
                  startTime: Date.now(),
                  from: "ShortCut-Select-Content",
                }));
            },
          },
        };
      },
    },
    _e = function (t, e, a, n, r, s = "default", i) {
      let l = r,
        o = () => i.getShowText(a, l),
        c = rt(t, e, o, "keyboard", false, false, s, async (u) => {
          let h = u.target.closest(".pops-panel-button")?.querySelector("span");
          if (i.isWaitPress) {
            f.warning("请先执行当前的录入操作");
            return;
          }
          if (i.hasOptionValue(a)) (i.emptyOption(a), f.success("清空快捷键"));
          else {
            let m = f.loading("请按下快捷键...", {
                showClose: true,
                onClose() {
                  i.cancelEnterShortcutKeys();
                },
              }),
              { status: b, option: k, key: x } = await i.enterShortcutKeys(a);
            (m.close(),
              b
                ? (g.success(["成功录入快捷键", k]), f.success("成功录入"))
                : f.error(`快捷键 ${i.translateKeyboardValueToButtonText(k)} 已被 ${x} 占用`));
          }
          h.innerHTML = o();
        });
      return ((c.attributes = {}), Reflect.set(c.attributes, kt, () => false), c);
    },
    Ln = function (t, e, a, n, r, s, i = "请至少选择一个选项", l, o) {
      let c = [];
      typeof n == "function" ? (c = n()) : (c = n);
      let u = {
        text: t,
        type: "select-multiple",
        description: s,
        placeholder: i,
        attributes: {},
        props: {},
        getValue() {
          return this.props[U].get(e, a);
        },
        selectConfirmDialogDetails: l,
        callback(d) {
          let h = this.props[U],
            m = [];
          (d.forEach((b) => {
            m.push(b.value);
          }),
            g.info("多选-选择：", m),
            h.set(e, m));
        },
        data: c,
      };
      return (
        Reflect.set(u.attributes, ue, e),
        Reflect.set(u.attributes, we, a),
        je.initComponentsStorageApi("select-multiple", u, {
          get(d, h) {
            return j.getValue(d, h);
          },
          set(d, h) {
            j.setValue(d, h);
          },
        }),
        u
      );
    },
    Nn = () => ({
      id: "netdisk-panel-config-all-setting",
      title: "设置",
      headerTitle: "总设置",
      isDefault: true,
      forms: [
        {
          type: "forms",
          text: "",
          forms: [
            {
              type: "deepMenu",
              text: "Toast",
              forms: [
                {
                  type: "forms",
                  text: "",
                  className: "netdisk-panel-forms-toast",
                  forms: [
                    $e(
                      "位置",
                      y.toast.position.KEY,
                      y.toast.position.default,
                      [
                        { value: "topleft", text: "左上角" },
                        { value: "top", text: "顶部" },
                        { value: "topright", text: "右上角" },
                        { value: "left", text: "左边" },
                        { value: "center", text: "中间" },
                        { value: "right", text: "右边" },
                        { value: "bottomleft", text: "左下角" },
                        { value: "bottom", text: "底部" },
                        { value: "bottomright", text: "右下角" },
                      ],
                      void 0,
                      `Toast显示在九宫格的位置，默认: ${y.toast.position.default}`
                    ),
                    $e(
                      "同时最多显示的数量",
                      y.toast.maxnums.KEY,
                      y.toast.maxnums.default,
                      [
                        { value: 1, text: "1" },
                        { value: 2, text: "2" },
                        { value: 3, text: "3" },
                        { value: 4, text: "4" },
                        { value: 5, text: "5" },
                      ],
                      void 0,
                      `默认: ${y.toast.maxnums.default}`
                    ),
                    H(
                      "逆序弹出",
                      y.toast.showreverse.KEY,
                      y.toast.showreverse.value,
                      void 0,
                      "默认是自上往下显示Toast，逆序则是自下往上显示Toast"
                    ),
                  ],
                },
              ],
            },
            {
              type: "deepMenu",
              text: "弹窗",
              forms: [
                {
                  className: "netdisk-panel-forms-pops",
                  type: "forms",
                  text: "",
                  forms: [
                    $e(
                      "动画",
                      y.pops.popsAnimation.KEY,
                      y.pops.popsAnimation.default,
                      [
                        { value: "", text: "无" },
                        { value: "pops-anim-spread", text: "spread" },
                        { value: "pops-anim-shake", text: "shake" },
                        { value: "pops-anim-rolling-left", text: "rolling-left" },
                        { value: "pops-anim-rolling-right", text: "rolling-right" },
                        { value: "pops-anim-slide-top", text: "slide-top" },
                        { value: "pops-anim-slide-bottom", text: "slide-bottom" },
                        { value: "pops-anim-slide-left", text: "slide-left" },
                        { value: "pops-anim-slide-right", text: "slide-right" },
                        { value: "pops-anim-fadein", text: "fadein" },
                        { value: "pops-anim-fadein-zoom", text: "fadein-zoom" },
                        { value: "pops-anim-fadein-alert", text: "fadein-alert" },
                        { value: "pops-anim-don", text: "don" },
                        { value: "pops-anim-roll", text: "roll" },
                        { value: "pops-anim-sandra", text: "sandra" },
                        { value: "pops-anim-gather", text: "gather" },
                      ],
                      void 0,
                      `显示/关闭的动画效果，默认: ${y.pops.popsAnimation.default}`
                    ),
                    H(
                      "点击弹窗遮罩层关闭弹窗",
                      y.pops.clickMaskToCloseDialog.KEY,
                      y.pops.clickMaskToCloseDialog.default,
                      void 0,
                      "点击遮罩层触发关闭弹窗事件"
                    ),
                    H("窗口拖拽", y.pops.pcDrag.KEY, y.pops.pcDrag.default, void 0, "长按标题栏可拖拽移动弹窗"),
                    H(
                      "限制拖拽距离",
                      y.pops.pcDragLimit.KEY,
                      y.pops.pcDragLimit.default,
                      void 0,
                      "只能在浏览器的可视窗口内拖动"
                    ),
                    H("亚克力效果", y.pops.popsAcrylic.KEY, y.pops.popsAcrylic.default, void 0, ""),
                  ],
                },
              ],
            },
            {
              type: "deepMenu",
              text: "文件弹窗",
              forms: [
                {
                  type: "forms",
                  text: "",
                  className: "netdisk-panel-forms-pops-folder",
                  forms: [
                    $e(
                      "排序名",
                      y.popsFolder["pops-folder-sort-name"].KEY,
                      y.popsFolder["pops-folder-sort-name"].default,
                      [
                        { value: "fileName", text: "文件名" },
                        { value: "latestTime", text: "修改时间" },
                        { value: "fileSize", text: "大小" },
                      ],
                      void 0,
                      "当前的规则"
                    ),
                    $e(
                      "排序规则",
                      y.popsFolder["pops-folder-sort-is-desc"].KEY,
                      y.popsFolder["pops-folder-sort-is-desc"].default,
                      [
                        { value: false, text: "升序" },
                        { value: true, text: "降序" },
                      ],
                      void 0,
                      "当前的规则"
                    ),
                  ],
                },
              ],
            },
            {
              type: "deepMenu",
              text: "悬浮按钮",
              forms: [
                {
                  type: "forms",
                  text: "",
                  forms: [
                    ye(
                      "大小",
                      y.suspension.size.KEY,
                      y.suspension.size.default,
                      15,
                      250,
                      (t, e) => {
                        ((y.suspension.size.value = parseInt(e.toString())),
                          C.$inst.suspension.$data.isShow &&
                            (B.css(C.$inst.suspension.$el.$suspension, {
                              width: y.suspension.size.value,
                              height: y.suspension.size.value,
                            }),
                            C.$inst.suspension.updatePosition(true)));
                      },
                      (t) => `${t}px`,
                      "悬浮按钮的大小，默认: " + y.suspension.size.default
                    ),
                    ye(
                      "透明度",
                      y.suspension.opacity.KEY,
                      y.suspension.opacity.default,
                      0.1,
                      1,
                      (t, e) => {
                        ((y.suspension.opacity.value = parseFloat(e.toString())),
                          C.$inst.suspension.$data.isShow &&
                            B.css(C.$inst.suspension.$el.$suspension, { opacity: y.suspension.opacity.value }));
                      },
                      void 0,
                      "值越小越透明，默认: " + y.suspension.opacity.default,
                      0.1
                    ),
                    ye(
                      "背景轮播时间",
                      y.suspension["randbg-time"].KEY,
                      y.suspension["randbg-time"].default,
                      0,
                      1e4,
                      void 0,
                      (t) => `${t}ms`,
                      "淡入/淡出的时间，默认: " + y.suspension["randbg-time"].default + "ms",
                      100
                    ),
                    ye(
                      "背景显示时间",
                      y.suspension["randbg-show-time"].KEY,
                      y.suspension["randbg-show-time"].default,
                      0,
                      1e4,
                      void 0,
                      (t) => `${t}ms`,
                      "图标显示的持续时间，默认: 1200",
                      100
                    ),
                    H(
                      "吸附边缘",
                      y.suspension["suspended-button-adsorption-edge"].KEY,
                      y.suspension["suspended-button-adsorption-edge"].default,
                      void 0,
                      "移动悬浮按钮松开后自动吸附边缘",
                      void 0,
                      void 0,
                      () => {
                        qe.updatePosition(false);
                      }
                    ),
                    G(
                      "z-index",
                      y.suspension["suspended-z-index"].KEY,
                      y.suspension["suspended-z-index"].default,
                      "值小于等于0则为动态获取z-index",
                      (t, e, a) => ((y.suspension["suspended-z-index"].value = a), true),
                      "",
                      true
                    ),
                  ],
                },
              ],
            },
            {
              type: "deepMenu",
              text: "大/小链接弹窗",
              forms: [
                {
                  type: "forms",
                  text: "通用配置",
                  forms: [
                    G(
                      "z-index",
                      y.smallWindow["netdisk-link-view-z-index"].KEY,
                      y.smallWindow["netdisk-link-view-z-index"].default,
                      "值小于等于0则为动态获取z-index",
                      (t, e, a) => ((y.smallWindow["netdisk-link-view-z-index"].value = a), true),
                      "",
                      true
                    ),
                  ],
                },
                {
                  type: "forms",
                  text: "数据分页显示",
                  forms: [
                    H(
                      "启用",
                      y.smallWindow["netdisk-ui-link-view-data-paging-enable"].KEY,
                      y.smallWindow["netdisk-ui-link-view-data-paging-enable"].default,
                      void 0,
                      "如果页面的数据量大，建议开启分页以显示防止卡顿"
                    ),
                    G(
                      "分页数量",
                      y.smallWindow["netdisk-ui-link-view-data-paging-show-data-count"].KEY,
                      y.smallWindow["netdisk-ui-link-view-data-paging-show-data-count"].default,
                      "每页显示的数据数量",
                      void 0,
                      "默认：10",
                      true
                    ),
                  ],
                },
                {
                  type: "forms",
                  text: "小窗",
                  className: "netdisk-panel-forms-small-window",
                  forms: [
                    ye(
                      "宽度",
                      y.smallWindow["netdisk-ui-small-window-width"].KEY,
                      y.smallWindow["netdisk-ui-small-window-width"].default,
                      50,
                      B.width(window),
                      void 0,
                      (t) => `${t}px`,
                      "设置小窗宽度(px)，默认: 250",
                      1
                    ),
                    ye(
                      "高度",
                      y.smallWindow["netdisk-ui-small-window-max-height"].KEY,
                      y.smallWindow["netdisk-ui-small-window-max-height"].default,
                      50,
                      B.height(window),
                      void 0,
                      (t) => `${t}px`,
                      "设置小窗最大高度(px)，默认: " + y.smallWindow["netdisk-ui-small-window-max-height"].default,
                      1
                    ),
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "forms",
          text: "",
          forms: [
            {
              type: "deepMenu",
              text: "功能",
              forms: [
                {
                  type: "forms",
                  text: "",
                  className: "netdisk-panel-forms-function",
                  forms: [
                    $e(
                      "匹配模式",
                      y.features["netdisk-match-mode"].KEY,
                      y.features["netdisk-match-mode"].default,
                      [
                        { text: "MutationObserver", value: "MutationObserver" },
                        { text: "Menu", value: "Menu" },
                      ],
                      void 0,
                      "MutationObserver是自动监听并识别链接<br>Menu是手动点击油猴菜单进行识别"
                    ),
                    $e(
                      "行为模式",
                      y.features["netdisk-behavior-mode"].KEY,
                      y.features["netdisk-behavior-mode"].default,
                      [
                        { text: "悬浮按钮+小窗", value: "suspension_smallwindow" },
                        { text: "悬浮按钮+大窗", value: "suspension_window" },
                        { text: "小窗", value: "smallwindow" },
                      ],
                      void 0,
                      "匹配到链接时触发的UI执行"
                    ),
                    H(
                      "自动填充访问码",
                      y.features.autoFillAccessCode.KEY,
                      y.features.autoFillAccessCode.default,
                      void 0,
                      "通过主动点击链接跳转时，会自动输入网盘访问码"
                    ),
                  ],
                },
              ],
            },
            {
              type: "deepMenu",
              text: "匹配设置",
              forms: [
                {
                  type: "forms",
                  text: "文本匹配范围",
                  forms: [
                    Ln(
                      "匹配规则类型",
                      y.match.pageMatchRange.KEY,
                      y.match.pageMatchRange.default,
                      [
                        { value: "innerText", text: "普通文本" },
                        { value: "innerHTML", text: "超文本" },
                      ],
                      void 0,
                      "执行的文本匹配规则",
                      void 0,
                      { height: "auto" }
                    ),
                    H(
                      "深入ShadowRoot获取匹配文本",
                      y.match.depthQueryWithShadowRoot.KEY,
                      y.match.depthQueryWithShadowRoot.default,
                      void 0,
                      "遍历ShadowRoot，获取匹配的内容"
                    ),
                    H(
                      "匹配剪贴板",
                      y.match.readClipboard.KEY,
                      y.match.readClipboard.default,
                      void 0,
                      "Api兼容性查看：<a href='https://caniuse.com/mdn-api_permissions_permission_clipboard-read' target='_blank'>读取剪贴板权限申请</a>、<a href='https://caniuse.com/mdn-api_clipboard_readtext' target='_blank'>直接读取剪贴板</a>"
                    ),
                    H(
                      "匹配当前URL",
                      y.match.allowMatchLocationHref.KEY,
                      y.match.allowMatchLocationHref.default,
                      void 0,
                      "提取<code>window.location.href</code>进行匹配"
                    ),
                    H(
                      "匹配input标签的内容",
                      y.match.toBeMatchedWithInputElementValue.KEY,
                      y.match.toBeMatchedWithInputElementValue.default,
                      void 0,
                      "提取页面中的<code>&lt;input&gt;</code>的内容进行匹配"
                    ),
                    H(
                      "匹配textarea标签的内容",
                      y.match.toBeMatchedTextAreaElementValue.KEY,
                      y.match.toBeMatchedTextAreaElementValue.default,
                      void 0,
                      "提取页面中的<code>&lt;textarea&gt;</code>的内容进行匹配"
                    ),
                    H(
                      "匹配网络请求的内容",
                      y.match.toBeMatchedXhrHookResponseText.KEY,
                      y.match.toBeMatchedXhrHookResponseText.default,
                      void 0,
                      "劫持xhr请求并对请求的内容进行匹配，注意：该功能可能会导致页面的部分功能异常，请谨慎使用"
                    ),
                  ],
                },
                {
                  type: "forms",
                  text: "MutationObserver观察器",
                  forms: [
                    ye(
                      "匹配间隔",
                      y.match.delaytime.KEY,
                      y.match.delaytime.default,
                      0,
                      5,
                      void 0,
                      (t) => `${t}s`,
                      "匹配文本完毕后的延迟xxx秒允许下一次匹配",
                      0.1
                    ),
                    H(
                      "添加元素时进行匹配",
                      y.match.isAddedNodesToMatch.KEY,
                      y.match.isAddedNodesToMatch.default,
                      void 0,
                      "当监听到页面添加元素时才进行匹配文本"
                    ),
                    H(
                      "观察器：childList",
                      y.match["mutationObserver-childList"].KEY,
                      y.match["mutationObserver-childList"].default,
                      void 0,
                      "子节点的变动（新增、删除或者更改）"
                    ),
                    H(
                      "观察器：characterData",
                      y.match["mutationObserver-characterData"].KEY,
                      y.match["mutationObserver-characterData"].default,
                      void 0,
                      "节点内容或节点文本的变动"
                    ),
                    H(
                      "观察器：subtree",
                      y.match["mutationObserver-subtree"].KEY,
                      y.match["mutationObserver-subtree"].default,
                      void 0,
                      "是否将观察器应用于该节点的所有后代节点"
                    ),
                  ],
                },
              ],
            },
            {
              type: "deepMenu",
              text: "网盘图标",
              forms: [
                {
                  type: "forms",
                  text: "",
                  forms: [
                    H(
                      "点击定位分享码",
                      y.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode"].KEY,
                      y.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode"].default,
                      void 0,
                      "自动滚动页面至包含分享码的元素"
                    ),
                    H(
                      "选中分享码",
                      y.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode-with-select"].KEY,
                      y.smallIconNavgiator["pops-netdisk-icon-click-event-find-sharecode-with-select"].default,
                      void 0,
                      "使用光标选中分享码/元素"
                    ),
                    H(
                      "循环定位",
                      y.smallIconNavgiator["pops-netdisk-icon-click-event-loop-find-sharecode"].KEY,
                      y.smallIconNavgiator["pops-netdisk-icon-click-event-loop-find-sharecode"].default,
                      void 0,
                      "关闭则是每一个元素只定位一次"
                    ),
                  ],
                },
              ],
            },
            {
              type: "deepMenu",
              text: "历史匹配记录",
              forms: [
                {
                  type: "forms",
                  text: "",
                  className: "netdisk-panel-history-match",
                  forms: [
                    H(
                      "保存匹配记录",
                      y.historyMatch.saveMatchNetDisk.KEY,
                      y.historyMatch.saveMatchNetDisk.default,
                      void 0,
                      "将匹配到的链接信息进行本地存储，可点击【油猴菜单-⚙ 历史匹配记录】进行查看"
                    ),
                    H(
                      "合并相同链接",
                      y.historyMatch["netdisk-history-match-merge-same-link"].KEY,
                      y.historyMatch["netdisk-history-match-merge-same-link"].default,
                      void 0,
                      "将合并匹配到的相同链接，并更新它最后一次匹配到的更新时间、网址信息"
                    ),
                    $e(
                      "排序规则",
                      y.historyMatch["netdisk-history-match-ordering-rule"].KEY,
                      y.historyMatch["netdisk-history-match-ordering-rule"].default,
                      [
                        { value: "按 记录时间 - 升序", text: "按 记录时间 - 升序" },
                        { value: "按 记录时间 - 降序", text: "按 记录时间 - 降序" },
                        { value: "按 更新时间 - 升序", text: "按 更新时间 - 升序" },
                        { value: "按 更新时间 - 降序", text: "按 更新时间 - 降序" },
                      ]
                    ),
                    rt(
                      "修复存储记录",
                      "如果【匹配记录】弹窗打不开，可能是存储的数据缺失某些字段，可尝试点击此处进行修复",
                      "修复",
                      void 0,
                      void 0,
                      false,
                      "primary",
                      (t) => {
                        p.preventEvent(t);
                        try {
                          const { count: e, repairCount: a } = C.$inst.historyMatch.checkAndRepairLocalData();
                          a === 0 ? f.info("不存在需要修复的数据") : f.success(`共计: ${e} 条，修复${a}条`);
                        } catch (e) {
                          f.error("修复异常：" + e.toString());
                        }
                      }
                    ),
                  ],
                },
              ],
            },
            {
              type: "deepMenu",
              text: "分享码",
              forms: [
                {
                  type: "forms",
                  text: "",
                  className: "netdisk-panel-forms-share-code",
                  forms: [
                    H(
                      "排除分享码",
                      y.shareCode.excludeIdenticalSharedCodes.KEY,
                      y.shareCode.excludeIdenticalSharedCodes.default,
                      void 0,
                      "启用后会根据【相同系数】排除掉匹配到的分享码"
                    ),
                    ye(
                      "相同系数",
                      y.shareCode.excludeIdenticalSharedCodesCoefficient.KEY,
                      y.shareCode.excludeIdenticalSharedCodesCoefficient.default,
                      0,
                      1,
                      void 0,
                      (t) => t.toString(),
                      "例如分享码: aaaaaaaabb，它的相同系数是0.8，设置相同系数≥0.8时会被排除",
                      0.01
                    ),
                  ],
                },
              ],
            },
            {
              type: "deepMenu",
              text: "访问码",
              forms: [
                {
                  className: "netdisk-panel-forms-access-code",
                  text: "",
                  type: "forms",
                  forms: [
                    H(
                      "允许查询历史匹配记录",
                      y.accessCode.allowQueryHistoryMatchingAccessCode.KEY,
                      y.accessCode.allowQueryHistoryMatchingAccessCode.default,
                      void 0,
                      "当访问码为空时，访问码将从历史匹配记录中查询，优先级：页面匹配 < 历史匹配记录 < 网站规则 < 黑名单"
                    ),
                  ],
                },
              ],
            },
            {
              type: "deepMenu",
              className: "netdisk-panel-forms-shortcut-keys-deepMenu",
              text: "快捷键",
              forms: [
                {
                  className: "netdisk-panel-forms-shortcut-keys",
                  text: "",
                  type: "forms",
                  forms: [
                    _e(
                      "【打开】⚙ 设置",
                      "",
                      "netdisk-keyboard-open-setting",
                      void 0,
                      "暂无快捷键",
                      "default",
                      Se.shortCut
                    ),
                    _e(
                      "【打开】⚙ 历史匹配记录",
                      "",
                      "netdisk-keyboard-open-history-matching-records",
                      void 0,
                      "暂无快捷键",
                      "default",
                      Se.shortCut
                    ),
                    _e(
                      "【打开】⚙ 访问码规则",
                      "",
                      "netdisk-keyboard-open-accesscode-rule",
                      void 0,
                      "暂无快捷键",
                      "default",
                      Se.shortCut
                    ),
                    _e(
                      "【打开】⚙ 添加链接识别规则",
                      "",
                      "netdisk-keyboard-open-user-rule",
                      void 0,
                      "暂无快捷键",
                      "default",
                      Se.shortCut
                    ),
                    _e(
                      "【打开】⚙ 网站规则",
                      "",
                      "netdisk-keyboard-website-rule",
                      void 0,
                      "暂无快捷键",
                      "default",
                      Se.shortCut
                    ),
                    _e(
                      "【打开】⚙ 字符映射规则",
                      "",
                      "netdisk-keyboard-character-mapping",
                      void 0,
                      "暂无快捷键",
                      "default",
                      Se.shortCut
                    ),
                    _e(
                      "【打开】⚙ 识别文本",
                      "",
                      "netdisk-keyboard-open-proactively-recognize-text",
                      void 0,
                      "暂无快捷键",
                      "default",
                      Se.shortCut
                    ),
                    _e(
                      "执行文本匹配",
                      "",
                      "netdisk-keyboard-performPageTextMatchingManually",
                      void 0,
                      "暂无快捷键",
                      "default",
                      Se.shortCut
                    ),
                    _e(
                      "识别选中内容",
                      "",
                      "netdisk-keyboard-identifyTheSelectedContent",
                      void 0,
                      "暂无快捷键",
                      "default",
                      Se.shortCut
                    ),
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  try {
    let t;
    ((t = RESOURCE_ICON), C.$inst.icon.assign(t), Object.assign(C.$inst.icon.src, t));
  } catch (t) {
    console.error("init NetDisk icon error", t);
  }
  ["input", "select-multiple", "select", "slider", "switch", "textarea"].forEach((t) => {
    je.setStorageApi(t, {
      get(e, a) {
        return ie(e, a);
      },
      set(e, a) {
        pe(e, a);
      },
    });
  });
  xe.init();
  le.init();
  Je.init();
  De.addContentConfig([Nn()]);
  De.addContentConfig(Je.getRulePanelContent());
  let Bt = ct.getMenuOption(0);
  Bt.callback = () => {
    pt.show();
  };
  ct.updateMenuOption(Bt);
  ct.addMenuOption([
    {
      key: "showNetDiskHistoryMatch",
      text: "⚙ 历史匹配记录",
      autoReload: false,
      isStoreValue: false,
      showText(t) {
        return t;
      },
      callback() {
        C.$inst.historyMatch.show();
      },
    },
    {
      key: "ruleManager",
      text: "⚙ 规则管理器",
      autoReload: false,
      isStoreValue: false,
      showText(t) {
        return t;
      },
      callback() {
        Xe.showView();
      },
    },
    {
      key: "showUserRule",
      text: "⚙ 添加链接识别规则",
      autoReload: false,
      isStoreValue: false,
      showText(t) {
        return t;
      },
      callback() {
        Ee.show(false);
      },
    },
    {
      key: "showMatchPasteText",
      text: "⚙ 识别文本",
      autoReload: false,
      isStoreValue: false,
      showText(t) {
        return t;
      },
      callback() {
        C.$inst.matchPasteText.show();
      },
    },
  ]);
  j.init();
  N.init();
  Se.init();
  w.ready(() => {
    (Ge.init(), xt.init(), z.init(), Xe.init());
  });
})(Qmsg, DOMUtils, Utils, pops, CryptoJS, DataPaging);
