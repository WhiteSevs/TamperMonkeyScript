// ==UserScript==
// @name         贴吧优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @icon         data:image/png;base64,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
// @version      2024.3.13
// @description  功能增强、浏览美化、屏蔽悬浮工具栏
// @author       WhiteSevs
// @license      GPL-3.0-only
// @match        *://tieba.baidu.com/*
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        unsafeWindow
// @run-at       document-start
// @require      https://update.greasyfork.org/scripts/462234/1322684/Message.js
// @require      https://update.greasyfork.org/scripts/456485/1342149/pops.js
// @require      https://update.greasyfork.org/scripts/455186/1341797/WhiteSevsUtils.js
// @require      https://update.greasyfork.org/scripts/465772/1342148/DOMUtils.js
// ==/UserScript==

(function () {
  if(typeof unsafeWindow === "undefined"){
    unsafeWindow = globalThis;
  }
  /** @type {import("../库/pops")} */
  const pops = window.pops;
  /** @type {import("../库/Qmsg")} */
  const Qmsg = window.Qmsg;
  /** @type {import("../库/Utils")} */
  const utils = window.Utils.noConflict();
  /**@type {import("../库/DOMUtils")} */
  const DOMUtils = window.DOMUtils.noConflict();

  const console = unsafeWindow.console || window.console;
  const log = new utils.Log(GM_info, console);

  const httpx = new utils.Httpx(GM_xmlhttpRequest);
  httpx.config({
    onabort() {
      Qmsg.warning("请求取消");
    },
    ontimeout() {
      Qmsg.error("请求超时");
    },
    onerror(response) {
      Qmsg.error("请求异常");
      log.error(["httpx-onerror 请求异常", response]);
    },
  });
  /** 油猴菜单 */
  const GM_Menu = new utils.GM_Menu({
    GM_getValue,
    GM_setValue,
    GM_registerMenuCommand,
    GM_unregisterMenuCommand,
  });
  /* 配置控制台日志 */
  log.config({
    debug: false,
    logMaxCount: 20000,
    autoClearConsole: true,
    tag: true,
  });
  /* 配置吐司Qmsg */
  Qmsg.config({
    position: "top",
    html: true,
    maxNums: 5,
    autoClose: true,
    showClose: false,
    showReverse: true,
  });

  class LoadingView {
    doc = document;
    /**
     *
     * @param {Document|ShadowRoot} doc 所在环境
     * @param {boolean} withIcon 是否添加icon
     * @param {boolean} isEnd icon是否添加在后面
     */
    constructor(doc = document, withIcon, isEnd) {
      this.doc = doc;
      this.config = {
        className: "whitesev-load-view",
        textClassName: "whitesev-load-view-text",
        iconClassName: "whitesev-load-view-icon",
        outSideClassName: "whitesev-load-view-icon-outside",
        withInClassName: "whitesev-load-view-icon-within",
      };
      /**
       * @type {?HTMLElement}
       */
      this.loadingViewElement = null;
      this.loadingViewHTML = `
        <div class="${this.config.className}">
          <span class="${this.config.textClassName}">Loading...</span>
        </div>`.trim();
      this.loadingViewIconHTML = `
        <div class="${this.config.iconClassName}">
          <div class="${this.config.outSideClassName}"></div>
          <div class="${this.config.withInClassName}"></div>
        </div>`.trim();
      this.initCSS();
      this.initLoadingView(withIcon, isEnd);
    }
    /**
     * 加载需要的CSS
     */
    initCSS() {
      if (this.isExistsCSS()) {
        return;
      }
      let loadingViewCSSText = this.getCSS();
      let loadingViewCSSElement = document.createElement("style");
      loadingViewCSSElement.setAttribute("type", "text/css");
      loadingViewCSSElement.setAttribute("data-from", "loadingView");
      loadingViewCSSElement.setAttribute("data-author", "whitesev");
      loadingViewCSSElement.innerHTML = loadingViewCSSText;
      if (this.doc instanceof ShadowRoot) {
        if (this.doc.firstElementChild) {
          /* 插入到最前面 */
          this.doc.insertBefore(
            loadingViewCSSElement,
            this.doc.firstElementChild
          );
        } else {
          /* 插入最底部 */
          this.doc.appendChild(loadingViewCSSElement);
        }
      } else {
        if (this.doc.documentElement.childNodes.length === 0) {
          /* 插入最底部 */
          this.doc.documentElement.appendChild(loadingViewCSSElement);
        } else {
          /* 插入head内 */
          this.doc.head.appendChild(loadingViewCSSElement);
        }
      }
    }
    /**
     * 获取CSS
     */
    getCSS() {
      return `
      .${this.config.className}{
        background: #fff;
        font-size: 15px;
        text-align: center;
        width: inherit;
        border-radius: 0.12rem;
      }
      .${this.config.iconClassName}{
        width: 45px;
      }
      .${this.config.className},
      .${this.config.iconClassName}{
        height: 45px;
        line-height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .${this.config.outSideClassName},
      .${this.config.withInClassName}{
        position: absolute;
        margin-left: 140px;
        border: 5px solid rgba(0, 183, 229, 0.9);
        opacity: .9;
        border-radius: 50px;
        width: 20px;
        height: 20px;
        margin: 0 auto;
      }
      .${this.config.outSideClassName}{
        background-color: rgba(0, 0, 0, 0);
        border-right: 5px solid rgba(0, 0, 0, 0);
        border-left: 5px solid rgba(0, 0, 0, 0);
        box-shadow: 0 0 35px #2187e7;
        -moz-animation: spinPulse 1s infinite ease-in-out;
        -webkit-animation: spinPulse 1s infinite ease-in-out;
        -o-animation: spinPulse 1s infinite ease-in-out;
        -ms-animation: spinPulse 1s infinite ease-in-out;
      }
      .${this.config.withInClassName}{
        background: rgba(0, 0, 0, 0) no-repeat center center;
        border-top: 5px solid rgba(0, 0, 0, 0);
        border-bottom: 5px solid rgba(0, 0, 0, 0);
        box-shadow: 0 0 15px #2187e7;
        -moz-animation: spinoffPulse 3s infinite linear;
        -webkit-animation: spinoffPulse 3s infinite linear;
        -o-animation: spinoffPulse 3s infinite linear;
        -ms-animation: spinoffPulse 3s infinite linear;
      }
      @-moz-keyframes spinPulse{0%{-moz-transform:rotate(160deg);opacity:0;box-shadow:0 0 1px #505050}
      50%{-moz-transform:rotate(145deg);opacity:1}
      100%{-moz-transform:rotate(-320deg);opacity:0}
      }
      @-moz-keyframes spinoffPulse{0%{-moz-transform:rotate(0)}
      100%{-moz-transform:rotate(360deg)}
      }
      @-webkit-keyframes spinPulse{0%{-webkit-transform:rotate(160deg);opacity:0;box-shadow:0 0 1px #505050}
      50%{-webkit-transform:rotate(145deg);opacity:1}
      100%{-webkit-transform:rotate(-320deg);opacity:0}
      }
      @-webkit-keyframes spinoffPulse{0%{-webkit-transform:rotate(0)}
      100%{-webkit-transform:rotate(360deg)}
      }
      @-o-keyframes spinPulse{0%{-o-transform:rotate(160deg);opacity:0;box-shadow:0 0 1px #505050}
      50%{-o-transform:rotate(145deg);opacity:1}
      100%{-o-transform:rotate(-320deg);opacity:0}
      }
      @-o-keyframes spinoffPulse{0%{-o-transform:rotate(0)}
      100%{-o-transform:rotate(360deg)}
      }
      @-ms-keyframes spinPulse{0%{-ms-transform:rotate(160deg);opacity:0;box-shadow:0 0 1px #505050}
      50%{-ms-transform:rotate(145deg);opacity:1}
      100%{-ms-transform:rotate(-320deg);opacity:0}
      }
      @-ms-keyframes spinoffPulse{0%{-ms-transform:rotate(0)}
      100%{-ms-transform:rotate(360deg)}
      }
      `;
    }
    /**
     * 初始化loadingView元素
     * @param {boolean} withIcon 是否添加icon
     * @param {boolean} isEnd icon是否添加在后面
     * @returns {HTMLDivElement}
     */
    initLoadingView(withIcon = false, isEnd = true) {
      this.setLoadingViewElement(null);
      let divElement = document.createElement("div");
      divElement.innerHTML = this.loadingViewHTML;
      let resultElement = divElement.firstChild;
      if (withIcon) {
        let iconElement = document.createElement("div");
        iconElement.innerHTML = this.loadingViewIconHTML;
        if (isEnd) {
          resultElement.appendChild(iconElement.firstChild);
        } else {
          resultElement.insertBefore(
            iconElement.firstChild,
            resultElement.firstChild
          );
        }
      }
      this.setLoadingViewElement(resultElement);
      return resultElement;
    }
    /**
     * 设置LoadingView
     * @param {HTMLDivElement} element
     */
    setLoadingViewElement(element) {
      this.loadingViewElement = element;
    }
    /**
     * 获取LoadingView
     * @returns {?HTMLDivElement}
     */
    getLoadingViewElement() {
      if (!this.loadingViewElement) {
        throw new Error("object loadingViewElement is null");
      }
      return this.loadingViewElement;
    }
    /**
     * 获取实例化的loadingView的icon
     * @returns {Element|undefined}
     */
    getIconElement() {
      return this.getLoadingViewElement().querySelector(
        "." + this.config.iconClassName
      );
    }
    /**
     * 显示LoadingView
     */
    show() {
      this.getLoadingViewElement().style.display = "";
    }
    /**
     * 隐藏LoadingView
     */
    hide() {
      this.getLoadingViewElement().style.display = "none";
    }
    /**
     * 显示icon
     */
    showIcon() {
      let iconElement = this.getIconElement();
      iconElement && (iconElement.style.display = "");
    }
    /**
     * 隐藏icon
     */
    hideIcon() {
      let iconElement = this.getIconElement();
      iconElement && (iconElement.style.display = "none");
    }
    /**
     * 设置文本
     * @param {string} text 文本
     * @param {boolean} withIcon 是否设置Icon图标
     * @param {boolean} isEnd icon是否添加在后面
     */
    setText(text, withIcon = false, isEnd = true) {
      this.getLoadingViewElement().innerHTML = `<span>${text}</span>`;
      if (withIcon) {
        let iconElement = this.getIconElement();
        if (!iconElement) {
          let divElement = document.createElement("div");
          divElement.innerHTML = this.loadingViewIconHTML;
          iconElement = divElement.firstChild;
          if (isEnd) {
            this.getLoadingViewElement().appendChild(iconElement);
          } else {
            this.getLoadingViewElement().insertBefore(
              iconElement,
              this.getLoadingViewElement().firstChild
            );
          }
        }
        iconElement.style.display = "";
      } else {
        this.getIconElement()?.remove();
      }
    }
    /**
     * 删除Loading元素
     */
    destory() {
      this.getLoadingViewElement()?.remove();
      this.setLoadingViewElement(null);
    }
    /**
     * 删除页面中所有的loadingView
     */
    removeAll() {
      this.doc
        .querySelectorAll("." + this.config.className)
        .forEach((item) => item.remove());
    }
    /**
     * 判断Loading是否已加载到页面中
     * @returns {boolean}
     */
    isExists() {
      return Boolean(this.doc.querySelector(`.${this.config.className}`));
    }
    /**
     * 判断Loading是否存在Loading图标
     * @returns {boolean}
     */
    isExistsIcon() {
      return Boolean(this.getIconElement());
    }
    /**
     * 判断Loading中的文本是否存在
     * @returns {boolean}
     */
    isExistsText() {
      return Boolean(
        this.getLoadingViewElement().querySelector(
          `.${this.config.textClassName}`
        )
      );
    }
    /**
     * 判断页面中是否存在CSS的style
     * @returns {boolean}
     */
    isExistsCSS() {
      return Boolean(
        this.doc.querySelector(
          "style[data-from='loadingView'][type='text/css'][data-author='whitesev']"
        )
      );
    }
  }

  /**
   * 配置面板
   */
  const PopsPanel = {
    /** 本地存储的总键名 */
    key: "GM_Panel",
    /** 属性attributes的data-key */
    attributeDataKey_Name: "data-key",
    /** 属性attributes的data-default-value */
    attributeDataDefaultValue_Name: "data-default-value",
    /** 初始化菜单 */
    initMenu() {
      this.initLocalDefaultValue();
      if (unsafeWindow.top !== unsafeWindow.self) {
        /* 不允许在iframe内重复注册 */
        return;
      }
      GM_Menu.add([
        {
          key: "show_pops_panel_setting",
          text: "⚙ 设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.showPanel();
          },
        },
      ]);
    },
    /** 初始化本地设置默认的值 */
    initLocalDefaultValue() {
      let content = this.getContent();
      content.forEach((item) => {
        if (!item["forms"]) {
          return;
        }
        item.forms.forEach((__item__) => {
          if (__item__.forms) {
            __item__.forms.forEach((containerItem) => {
              if (!containerItem.attributes) {
                return;
              }
              let key = containerItem.attributes[this.attributeDataKey_Name];
              let defaultValue =
                containerItem.attributes[this.attributeDataDefaultValue_Name];
              if (this.getValue(key) == null) {
                this.setValue(key, defaultValue);
              }
            });
          } else {
          }
        });
      });
    },
    /**
     * 设置值
     * @param {string} key 键
     * @param {any} value 值
     */
    setValue(key, value) {
      let localValue = GM_getValue(this.key, {});
      localValue[key] = value;
      GM_setValue(this.key, localValue);
    },
    /**
     * 获取值
     * @param {string} key 键
     * @param {boolean} defaultValue 默认值
     * @returns {any}
     */
    getValue(key, defaultValue) {
      let localValue = GM_getValue(this.key, {});
      return localValue[key] ?? defaultValue;
    },
    /**
     * 删除值
     * @param {string} key 键
     */
    deleteValue(key) {
      let localValue = GM_getValue(this.key, {});
      delete localValue[key];
      GM_setValue(this.key, localValue);
    },
    /**
     * 显示设置面板
     */
    showPanel() {
      pops.panel({
        title: {
          text: `${GM_info?.script?.name || ""}-设置`,
          position: "center",
        },
        content: this.getContent(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
          },
        },
        isMobile: true,
        width: "92vw",
        height: "80vh",
        drag: true,
        only: true,
      });
    },
    /**
     * 获取checkbox按钮配置
     * @param {string} text 文字
     * @param {string} key 键
     * @param {boolean} defaultValue 默认值
     * @param {?string} description （可选）描述
     * @param {?(event: InputEvent,value: boolean)=>boolean} clickCallBack （可选）点击回调
     * @returns {PopsPanelSwitchDetails}
     */
    getSwtichDetail(text, key, defaultValue, description, clickCallBack) {
      /**
       * @type {PopsPanelSwitchDetails}
       */
      let result = {
        text: text,
        type: "switch",
        description: description,
        attributes: {},
        getValue() {
          return Boolean(PopsPanel.getValue(key, defaultValue));
        },
        callback(event, value) {
          log.success(`${value ? "开启" : "关闭"} ${text}`);
          if (typeof clickCallBack === "function") {
            if (clickCallBack(event, value)) {
              return;
            }
          }
          PopsPanel.setValue(key, Boolean(value));
        },
      };
      result.attributes[this.attributeDataKey_Name] = key;
      result.attributes[this.attributeDataDefaultValue_Name] =
        Boolean(defaultValue);
      return result;
    },
    /**
     * 获取下拉列表配置
     * @param {string} text 文字
     * @param {string} key 键
     * @param {any} defaultValue 默认值
     * @param {{
     * value: any,
     * text: string,
     * }[]} data 数据
     * @param {string} description （可选）描述
     * @param {(event:PointerEvent, isSelectedValue: any, isSelectedText:string)=>void} selectCallBack（可选）选择的回调
     * @returns {PopsPanelSelectDetails}
     */
    getSelectDetail(
      text,
      key,
      defaultValue,
      data,
      description,
      selectCallBack
    ) {
      return {
        text: text,
        type: "select",
        description: description,
        attributes: {
          "data-key": key,
          "data-default-value": defaultValue,
        },
        getValue() {
          return GM_getValue(key, defaultValue);
        },
        callback(event, isSelectedValue, isSelectedText) {
          GM_setValue(key, isSelectedValue);
          if (typeof selectCallBack === "function") {
            selectCallBack(event, isSelectedValue, isSelectedText);
          }
        },
        data: data,
      };
    },
    /**
     * 获取配置内容
     * @returns {PopsPanelContentConfig[]}
     */
    getContent() {
      return [
        {
          id: "panel-config-",
          title: "通用",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [this.getSwtichDetail()],
            },
          ],
        },
      ];
    },
  };

  const TieBaRouter = {
    /**
     * 判断是否是帖子
     * @param {string} [url=window.location.href]
     */
    isTieZi(url = window.location.href) {
      let urlObj = new URL(url);
      return urlObj.pathname.startsWith("/p/");
    },
    /**
     * 判断是否是吧内
     * @param {string} [url=window.location.href]
     */
    isBaNei(url = window.location.href) {
      let urlObj = new URL(url);
      return urlObj.pathname.startsWith("/f");
    },
    /**
     * 判断是否是吧内-看帖
     * @param {string} [url=window.location.href]
     */
    isBaNei_KanTie(url = window.location.href) {
      let urlObj = new URLSearchParams(url);
      if (!urlObj.has("tab") || urlObj.get("tab") === "main") {
        return true;
      }
      return false;
    },
  };

  /**
   * 贴吧api
   * + https://www.52fisher.cn/93.html
   */
  const TieBaApi = {
    /**
     * 根据un获取个人主页信息
     * @param {string} un
     */
    async getUserHomeInfoByUN(un) {
      let getResp = await httpx.get(
        `https://tieba.baidu.com/home/get/panel?ie=utf-8&un=${un}`,
        {
          fetch: true,
        }
      );
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      if (data["no"] !== 0) {
        return;
      }
      return data;
    },
    /**
     * 获取楼中楼评论
     * + -1 请求失败
     * + -2 解析回复失败
     * + 0 暂无更多回复
     * + 200 成功
     * @param {string} tid 帖子id
     * @param {string} pid 回复主体id
     * @param {string|number} pn 当前页，默认1
     * @returns {Promise<{
     * status: number,
     * msg: string,
     * nextPage?: number,
     * data?: TieBaLzlUserPostInfo[],
     * }>}
     */
    async getLzlCommentReply(tid = "", pid = "", pn = 1) {
      let getResp = await httpx.get({
        url: `https://tieba.baidu.com/p/comment?tid=${tid}&pid=${pid}&pn=${pn}&t=${new Date().getTime()}`,
        fetch: true,
      });
      if (!getResp.status) {
        log.error(getResp);
        return {
          status: -1,
          msg: "请求失败",
        };
      }
      let respData = getResp.data;
      log.success(respData);
      let parseDOM = DOMUtils.parseHTML(respData.responseText, false, true);
      let lzlPostList = parseDOM.querySelectorAll("li.lzl_single_post");
      if (!lzlPostList.length) {
        return {
          status: 0,
          msg: "暂无更多回复",
        };
      }
      let data = [];
      let nextPage = void 0;
      lzlPostList.forEach((item) => {
        let dataFieldJSON = utils.toJSON(item.getAttribute("data-field"));
        let userName = dataFieldJSON["showname"];
        let userPostId = dataFieldJSON["spid"];
        let userPortrait = dataFieldJSON["portrait"];
        let userHomeUrl = item.querySelector("a[data-field]").href;
        let userAvatar = item.querySelector("a[data-field] img").src;
        let userReplyContent = item.querySelector(
          "span.lzl_content_main"
        ).innerHTML;
        let userReplyTime = item.querySelector("span.lzl_time").innerHTML;
        userReplyTime = utils.formatToTimeStamp(userReplyTime);
        userReplyTime =
          utils.getDaysDifference(new Date().getTime(), userReplyTime, "auto") +
          "前";
        data.push({
          userName: userName,
          userPostId: userPostId,
          userPortrait: userPortrait,
          userHomeUrl: userHomeUrl,
          userAvatar: userAvatar,
          userReplyContent: userReplyContent,
          userReplyTime: userReplyTime,
        });
      });
      parseDOM.querySelectorAll("p.j_pager a").forEach((item) => {
        if (item.textContent.trim() === "下一页") {
          nextPage = parseInt(item.getAttribute("href").replace("#", ""));
        }
      });
      if (!data.length) {
        return {
          status: -2,
          msg: "解析回复失败",
        };
      } else {
        return {
          status: 200,
          msg: "成功",
          nextPage: nextPage,
          data: data,
        };
      }
    },
    /**
     * 根据portrait获取用户头像
     */
    getUserAvatar(portrait) {
      let authorImgId = "6LZ1dD3d1sgCo2Kml5_Y_D3";
      return `https://gss0.bdstatic.com/${authorImgId}/sys/portrait/item/${portrait}`;
    },
    /**
     * 根据portrait获取用户主页地址
     */
    getUserHomeUrlByPortrait(portrait) {
      return `https://tieba.baidu.com/home/main?id=${portrait}`;
    },
  };

  /**
   * 帖子
   */
  const TieBaTieZi = {
    init() {
      this.beautifyPage();
      this.optimizationLzlReplyView();
      this.shieldRightToolBar();
      this.shieldRightUserInfoBlock();
    },
    /**
     * 美化页面
     */
    beautifyPage() {
      GM_addStyle(`
      html[data-gf]{
        .left_section,
        .core_title_wrap_bright,
        .tittle_fill_dom,
        .l_post_bright{
            width: 100%;
        }
        .l_post{
            display: flex;
            .d_author{
                flex: 0 0 auto;
            }
            .d_post_content_main{
                flex: 1;
            }
        }
        #pb_content{
            width: 100%;
        }
        #container{
            width: 75dvw;
        }
        .content{
            width: 100%;
            .core_title_txt{
                padding-left: 10px;
            }

            .left_section{
                background-color: #FAFAFA;
            }
            a.p_author_face,
            a.p_author_face img{
                border-radius: 6px;
            }
            .user_badge{
                background-color: #F1F1F1;
                border-radius: 4px;

                .d_badge_title{
                    font-family: "Microsoft Yahei", Simsun, Tahoma;
                }
            }
            .d_author{
                border-top: 1px solid #e5e5e5;
                border-left: 1px solid #e5e5e5;
                border-right: 1px solid #e5e5e5;
            }
            .tb_rich_poster_container .tb_rich_poster .poster_head{
              margin: 0 12px 12px 0;
            }
            .left_section .core_title_wrap_bright.tbui_follow_fixed{
              width: 100%;
              left: 0;
            }
            .edui-container .edui-editor-body{
              height: initial !important;
            }
        }
    }

      `);
      // 按钮
      GM_addStyle(`
        html[data-gf]{
          --el-button-text-color: #606266;
          --el-button-font-weight: 500;
          --el-button-bg-color: #ffffff;
          --el-border: 1px solid #dcdfe6;
          --el-button-border-color: #dcdfe6;
          --el-font-size-base: 14px;
          --el-border-radius-base: 4px;

          --el-button-active-text-color: #409eff;
          --el-button-active-border-color: #ffffff;
          --el-button-active-bg-color: #409eff;

          --el-button-hover-text-color: #409eff;
          --el-button-hover-border-color: #409eff;
          --el-button-hover-bg-color: #ffffff;

          --el-button-outline-color: #a0cfff;

        }
        a.btn-sub:active,
        button[type="button"]:active,
        span.lzl_panel_submit:active{
            color: var(--el-button-active-text-color);
            border-color: var(--el-button-active-border-color);
            background-color: var(--el-button-active-bg-color);
            outline: none;
        }
        a.btn-sub:hover,
        button[type="button"]:hover,
        span.lzl_panel_submit:hover{
            color: var(--el-button-hover-text-color);
            border-color: var(--el-button-hover-border-color);
            background-color: var(--el-button-hover-bg-color);
            outline: none;
        }
        a.btn-sub:focus-visible,
        button[type="button"]:focus-visible,
        span.lzl_panel_submit:focus-visible{
            outline: 2px solid var(--el-button-outline-color);
            outline-offset: 1px;
            transition: outline-offset 0s, outline 0s;
        }
        a.btn-sub,
        button[type="button"],
        span.lzl_panel_submit{
            display: inline-flex;
            justify-content: center;
            align-items: center;
            line-height: 1;
            /*height: 32px;*/
            white-space: nowrap;
            cursor: pointer;
            text-align: center;
            box-sizing: border-box;
            outline: none;
            transition: .1s;
            user-select: none;
            vertical-align: middle;
            -webkit-appearance: none;
            /*padding: 8px 15px;*/
            padding: 4px 10px;

            background-image: none;
        }
        a.btn-sub,
        button[type="button"],
        span.lzl_panel_submit{
            color: var(--el-button-text-color);
            font-weight: var(--el-button-font-weight);
            background-color: var(--el-button-bg-color);
            border: var(--el-border);
            border-color: var(--el-button-border-color);
            font-size: var(--el-font-size-base);
            border-radius: var(--el-border-radius-base);
        }
        span.lzl_panel_submit{
          /* 按钮默认样式 */
          --el-button-text-color: #409eff;
          --el-button-font-weight: 500;
          --el-button-bg-color: #ecf5ff;
          --el-border: 1px solid #dcdfe6;
          --el-button-border-color: #a0cfff;
          --el-font-size-base: 14px;
          --el-border-radius-base: 4px;

          /* active */
          --el-button-active-text-color: #ffffff;
          --el-button-active-border-color: #337ecc;
          --el-button-active-bg-color: #337ecc;

          /* hover */
          --el-button-hover-text-color: #ffffff;
          --el-button-hover-border-color: #409eff;
          --el-button-hover-bg-color: #409eff;

          /* focus-visible */
          --el-button-outline-color: #a0cfff;
        }
      `);
      document.documentElement.setAttribute("data-gf", true);
    },
    /**
     * 屏蔽右侧用户信息块
     */
    shieldRightUserInfoBlock() {
      GM_addStyle(`
        .right_section{display: none !important;}

        /* 页跳转栏 */
        .p_thread,
        /* 功能栏-看帖-图片-吧主推荐等 */
        .nav_list{
            width: 100% !important;
        }
        /* 底部回复框 */
        .old_style_wrapper,
        .pb_footer,
        #tb_rich_poster_container{
            width: inherit !important;
        }
        /* 楼中楼区域信息 */
        .j_lzl_container,
        /* 楼中楼回复框 */
        .edui-container,
        /* 楼中楼回复框底部的表情、发表按钮区域 */
        table.lzl_panel_wrapper{
            width: 100% !important;
        }
      `);
    },
    /**
     * 屏蔽右侧悬浮工具栏
     */
    shieldRightToolBar() {
      GM_addStyle(`.tbui_aside_float_bar{display: none !important;}`);
    },
    /**
     * 优化楼中楼回复浏览
     */
    optimizationLzlReplyView() {
      /**
       * 显示回复弹窗
       */
      function showReplyDialog(floor_num, content) {
        return pops.alert({
          title: {
            text: `${floor_num}楼的回复`,
            position: "center",
            html: false,
          },
          content: {
            text: `
            <div class="whitesev-reply-dialog-sheet-other-content">
              ${content}
            </div>
            `,
            html: true,
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true,
            },
          },
          drag: true,
          dragLimit: true,
          width: "700px",
          height: "600px",
          style: `
          .whitesev-reply-dialog-sheet-other-content{
            --whitesev-avatar-width: 40px;
            --whitesev-avatar-margin-right: 10px;
          }
          
          .whitesev-reply-dialog-sheet-other-content .BDE_Smiley {
            width: 20px;
            height: 20px;
            vertical-align: middle;
          }
          .whitesev-reply-dialog-sheet-other-content .BDE_Image{
              margin-top: 8px;
              max-width: 350px;
              cursor: url(//tb2.bdstatic.com/tb/static-pb/img/cur_zin.cur),pointer;
              height: auto;
              width: auto;
              width: 100%;
          }
          .whitesev-reply-dialog-sheet-other-content .at{
              font-weight: 600;
              color: #614FBC;
          }
          .whitesev-reply-dialog-sheet-other-content{
            margin: 10px;
          }
          .whitesev-reply-dialog-sheet-other-content-item{
    
          }
          .whitesev-reply-dialog-user-line{
            display: flex;
            align-items: flex-start;
          }
          .whitesev-reply-dialog-avatar{
            position: relative;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            width: var(--whitesev-avatar-width);
            height: var(--whitesev-avatar-width);
            margin-right: var(--whitesev-avatar-margin-right);
            border-radius: 50%;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
            -webkit-box-flex: 0;
            -moz-box-flex: 0;
            -webkit-flex: none;
            -ms-flex: none;
            flex: none;
          }
          .whitesev-reply-dialog-user-info{
    
          }
          .whitesev-reply-dialog-user-username{
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            overflow: hidden;
            font-size: 16px;
            line-height: 1;
            white-space: nowrap;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            font-weight: 400;
          }
          .whitesev-reply-dialog-user-username{
            margin-top: 6px;
            color: #000000;
            text-decoration: none;
          }
          .whitesev-reply-dialog-lzl-info{
            font-size: 14px;
            color: #a3a2a8;
          }
          .whitesev-reply-dialog-user-comment,
          .whitesev-reply-dialog-user-desc-info{
            margin-left: calc( var(--whitesev-avatar-width) + var(--whitesev-avatar-margin-right) );
          }
          .whitesev-reply-dialog-user-comment{
            font-size: 16px;
          }
          .whitesev-reply-dialog-user-line,
          .whitesev-reply-dialog-user-comment{
            padding-bottom: 8px;
          }
          .whitesev-reply-dialog-user-desc-info{
            padding-bottom: 4px;
          }
          .whitesev-reply-dialog-user-desc-info{
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            border-bottom: 1px solid #dfdfdf;
          }
          .whitesev-reply-dialog-user-desc-info span{
            margin-right: 5px;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -moz-box-align: center;
            -webkit-align-items: center;
            -moz-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            font-size: 14px;
            line-height: 1;
            overflow: hidden;
            white-space: nowrap;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            color: #a3a2a8;
          }
          .whitesev-reply-dialog-user-desc-info span[data-time]{
            
          }
          .whitesev-reply-dialog-user-desc-info span[data-ip]{
    
          }
          `,
        });
      }
      /**
       * @param {TieBaLzlUserPostInfo} lzlReplyData
       * @param {number} lzlPage
       * @param {number} floor_lzl_num
       */
      function getReplyItemHTML(lzlReplyData, lzlPage, floor_lzl_num) {
        let portrait = lzlReplyData.userPortrait;
        let avatar = lzlReplyData.userAvatar;
        let userName = lzlReplyData.userName;
        let content = lzlReplyData.userReplyContent;
        let time = lzlReplyData.userReplyTime;
        let ip = "";
        return `
        <div class="whitesev-reply-dialog-sheet-other-content-item">
          <div class="whitesev-reply-dialog-user-line" data-portrait="${portrait}">
            <div class="whitesev-reply-dialog-avatar" style="background-image: url(${avatar});"></div>
            <div class="whitesev-reply-dialog-user-info">
              <a class="whitesev-reply-dialog-user-username" href="${TieBaApi.getUserHomeUrlByPortrait(
                portrait
              )}" target="_blank">${userName}</a>
              <span class="whitesev-reply-dialog-lzl-info">第${lzlPage}-${floor_lzl_num}楼</span>
            </div>
          </div>
          <div class="whitesev-reply-dialog-user-comment">${content}</div>
          <div class="whitesev-reply-dialog-user-desc-info">
              <span data-time="${time}">${time}</span>
              <span data-ip="${ip}">${ip}</span>
          </div>
        </div>
        `;
      }
      /**
       *
       * @param {HTMLDivElement} lzlContainer
       */
      async function containerClick(lzlContainer) {
        if (!lzlContainer.hasAttribute("data-field")) {
          log.error(["不存在data-field属性", lzlContainer]);
          return;
        }
        let lzlContainerDataField = utils.toJSON(
          lzlContainer.getAttribute("data-field")
        );
        log.info(["该评论的楼中楼信息data-field", lzlContainerDataField]);
        if (lzlContainerDataField["total_num"] === 0) {
          log.warn(["该评论没有楼中楼的回复"]);
          return;
        }
        // 阻止默认触发
        //utils.preventEvent(event);
        const {
          // 层主的pid
          pid: layerMasterPid,
          // 层主的楼层
          floor_num: layerMasterFloorNum,
          // 层主的回复数量
          total_num: layerMasterTotalReplyNum,
        } = lzlContainerDataField;
        // 页信息
        const PageData = unsafeWindow["PageData"];
        // 当前帖子的id
        const tid = PageData["thread"]["thread_id"];
        // 当前页
        const page = PageData["pager"]["cur_page"];
        const dialog = showReplyDialog(lzlContainerDataField["floor_num"], "");
        const $dialogContent = dialog.$shadowRoot.querySelector(
          ".whitesev-reply-dialog-sheet-other-content"
        );
        const loadingView = new LoadingView(dialog.$shadowRoot, false, false);
        loadingView.initLoadingView(false, false);
        DOMUtils.after(
          dialog.$shadowRoot.querySelector(
            ".whitesev-reply-dialog-sheet-other-content"
          ),
          loadingView.getLoadingViewElement()
        );
        let isLoadingNextPage = false;
        let lzlPage = 1;
        const intersectionObserver = new IntersectionObserver(
          async (entries) => {
            if (!isLoadingNextPage && entries[0].isIntersecting) {
              isLoadingNextPage = true;
              await scrollEvent();
              await utils.sleep(300);
              isLoadingNextPage = false;
            }
          },
          { threshold: 0 }
        );
        async function scrollEvent() {
          let lzlReplyInfoResult = await TieBaApi.getLzlCommentReply(
            tid,
            layerMasterPid,
            lzlPage
          );
          if (lzlReplyInfoResult.status === 0) {
            log.info(lzlReplyInfoResult.msg);
            log.info("取消intersectionObserver观察");
            loadingView.setText("暂无更多回复");
            intersectionObserver.disconnect();
            return;
          }
          if (lzlReplyInfoResult.status !== 200) {
            Qmsg.error(lzlReplyInfoResult.msg);
            return;
          }
          const lzlReplyInfo = lzlReplyInfoResult.data;
          let lzlFloorNum = 1;
          lzlReplyInfo.forEach((lzlReplyData) => {
            DOMUtils.append(
              $dialogContent,
              getReplyItemHTML(lzlReplyData, lzlPage, lzlFloorNum)
            );
            lzlFloorNum++;
          });
          if (lzlReplyInfoResult.nextPage == null) {
            log.info("没有下一页了，取消intersectionObserver观察");
            loadingView.setText("暂无更多回复");
            intersectionObserver.disconnect();
          } else {
            lzlPage = lzlReplyInfoResult.nextPage;
          }
        }
        intersectionObserver.observe(loadingView.loadingViewElement);
      }
      GM_addStyle(`
      .j_lzl_new{
        color: #1D53BF;
        cursor: pointer;
      }
      `);
      function handleLzlSee() {
        document
          .querySelectorAll(".core_reply .j_lzl_r[data-field]")
          .forEach((lzlElement) => {
            if (lzlElement.nextElementSibling != null) {
              // 已添加过
              return;
            }
            let dataField = utils.toJSON(lzlElement.getAttribute("data-field"));
            if (dataField["total_num"] == null) {
              return;
            }
            DOMUtils.after(
              lzlElement,
              DOMUtils.createElement("span", {
                className: "j_lzl_new",
                innerHTML: `查看回复(${dataField["total_num"]})`,
              })
            );
          });
      }
      const lockCallBack = new utils.LockFunction(handleLzlSee);
      utils.mutationObserver(document.documentElement, {
        config: {
          childList: true,
          subtree: true,
        },
        callback() {
          lockCallBack.run();
        },
      });
      DOMUtils.on(document, "click", ".j_lzl_new", (event) => {
        containerClick(
          event.target.closest(".l_post").querySelector(".j_lzl_container")
        );
      });
    },
  };

  /**
   * 吧内
   */
  const TieBaBaNei = {
    $data: {
      isInit_beautifyPage: false,
      isInit_shieldRightToolBar: false,
      isInit_beautifyInfoFlow: false,
    },
    init() {
      if (!this.isInit_beautifyPage) {
        this.isInit_beautifyPage = true;
        this.beautifyPage();
      }
      if (!this.isInit_shieldRightToolBar) {
        this.isInit_shieldRightToolBar = true;
        this.shieldRightToolBar();
      }

      if (TieBaRouter.isBaNei_KanTie()) {
        log.info("吧内-看帖");
        this.shieldRightUserInfoBlock();
        DOMUtils.ready(() => {
          this.beautifyInfoFlow();
        });
      }
    },
    /**
     * 美化页面
     */
    beautifyPage() {},
    /**
     * 美化信息流
     */
    beautifyInfoFlow() {
      if (!this.isInit_beautifyInfoFlow) {
        this.isInit_beautifyInfoFlow = true;

        GM_addStyle(`
        li.thread_top_list_folder {
          border-bottom: 1px dotted #e4e6eb !important;
        }
        .tiezi-thread-info-container {
          display: flex;
        }
        .tiezi-thread-info-container .tiezi-user-info{
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 180px;
          border-right: 1px dotted #e4e6eb;
          padding: 10px 0px 10px 0px;
        }
        .tiezi-thread-info-container .tiezi-thread-info{
          margin: 0px 10px;
          width: 100%;
          padding: 10px 20px 10px 20px;
        }
        .tiezi-thread-info-container .tiezi-user-info .tb_icon_author{
          display: flex;
          align-items: center;
          margin: 10px 0px;
        }
        .tiezi-thread-info-container .tiezi-user-info .tb_icon_author .frs-author-name{
          display: flex;
          align-items: center;
        }
        .tiezi-user-info img {
          display: block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }


        .tiezi-title-container {
        }
        .tiezi-info-container{
          display: flex;
          justify-content: space-between;
        }
        .tiezi-info{
          display: flex;
          flex-direction: column;
          color: #999;
        }
        .tiezi-info .tb_icon_author_rely,
        .tiezi-info .frs-author-name{
          display: flex;
          align-items: center;
        }
        .tiezi-info .frs-author-name,
        .tiezi-see-info{
          color: #999;
        }
        span.tiezi-reply-num{
          float: right;
        }
        span.tiezi-reply-num img{
          height: 18px;
          margin: 1px 1px 0 0;
          vertical-align: top;
        }
        .tiezi-pipe{
          margin: 0 5px;
          color: #CCC;
        }
        .tiezi-content-container .threadlist_abs{
          width: 100%;
          white-space: pre-line;
          color: initial;
        }
        `);
      }
      function handleThread() {
        let threadList = Array.from(
          document.querySelectorAll(".j_thread_list")
        );
        threadList.forEach((element) => {
          if (element.querySelector(".tiezi-thread-info-container")) {
            return;
          }
          // 数据信息块
          let dataField = utils.toJSON(
            element.getAttribute("data-field") || {}
          );
          // 帖子id
          let tid = element.getAttribute("data-tid");
          // 回复数量
          let replyNum =
            dataField["reply_num"] ||
            parseInt(
              element.querySelector(".threadlist_rep_num")?.innerText || 0
            );
          // 发帖作者
          let authorName =
            element.querySelector(".frs-author-name-wrap a.frs-author-name")
              ?.innerText || dataField["author_name"];
          // 发帖作者的portrait
          let authorPortrait = dataField["author_portrait"];
          // 发帖作者的主页
          let authorHomeUrl =
            element.querySelector(".frs-author-name-wrap a.frs-author-name")
              ?.href || `/home/main/?id=${authorPortrait}`;
          // 标题
          let title =
            element.querySelector(".threadlist_title")?.innerHTML || "";
          // 内容
          let content =
            element.querySelector(".threadlist_text")?.innerHTML || "";
          // 创建时间，可能是只有日期，如3-6，可能是只有时间，如18:35
          let createTime = (
            element.querySelector("span.is_show_create_time")?.innerText || ""
          ).trim();
          // 回复的data-field信息
          let replyDataField = utils.toJSON(
            element
              .querySelector(".tb_icon_author_rely a.frs-author-name")
              ?.getAttribute("data-field") || {}
          );
          // 回复人
          let replyAuthorName = (
            element.querySelector(".tb_icon_author_rely a.frs-author-name")
              ?.innerText || replyDataField["un"]
          )?.trim();
          // 回复人的portrait
          let replyAuthorPortrait = replyDataField["id"];
          // 回复人的主页
          let replyAuthorHomeUrl =
            element.querySelector(".tb_icon_author_rely a.frs-author-name")
              ?.href || `/home/main/?id=${replyAuthorPortrait}`;
          // 回复的创建时间，可能是只有日期，如3-6，可能是只有时间，如18:35
          let replyCreateTime = (
            element.querySelector("span.threadlist_reply_date")?.innerText || ""
          ).trim();
          let threadInfo = {
            tid,
            title,
            content,
            createTime,
            user: {
              name: authorName,
              portrait: authorPortrait,
              homeUrl: authorHomeUrl,
              avatar: `https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/${authorPortrait}?t=${Date.now()}`,
            },
            reply: {
              num: replyNum,
              name: replyAuthorName,
              portrait: replyAuthorPortrait,
              avatar: `https://gss0.bdstatic.com/6LZ1dD3d1sgCo2Kml5_Y_D3/sys/portrait/item/${replyAuthorPortrait}?t=${Date.now()}`,
              homeUrl: replyAuthorHomeUrl,
              createTime: replyCreateTime,
            },
          };
          // 过滤掉不需要的className
          let titleClassName = Array.from(
            element.querySelector(".threadlist_title")?.classList || []
          )
            .filter((className) => {
              return className !== "pull_left" && className !== "j_th_tit";
            })
            .join(" ");
          element.firstElementChild.style.display = "none";
          let threadInfoElement = DOMUtils.createElement("div", {
            className: "tiezi-thread-info-container",
            innerHTML: `
            <div class="tiezi-user-info">
              <a rel="noopener" class="frs-author-name j_user_card" href="${
                threadInfo.user.homeUrl
              }" target="_blank">
                <img src="${threadInfo.user.avatar}" loading="lazy">
              </a>
              ${
                element.querySelector(".threadlist_author .tb_icon_author")
                  .outerHTML
              }
            </div>
            <div class="tiezi-thread-info">
              <div class="tiezi-title-container ${titleClassName}">
                ${threadInfo.title}
              </div>
              <div class="tiezi-info-container">
                <div class="tiezi-info">
                  ${
                    element.querySelector(
                      ".threadlist_detail  .threadlist_author .tb_icon_author_rely"
                    )?.outerHTML || ""
                  }
                </div>
                <div class="tiezi-see-info">
                  <span class="tiezi-reply-num">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+1X0XETMRDdtfRP0gFUgG9O+iZUAKmApAJMBZgKMBUQKohTQcy3dHOmApIOzL/lZTbc3eh0ki/kfMkww37Zlkbv7e7bJxnhiQOfGB/+HQJlWR45594AwAkAvAWAo6B6GwBYAsBKCHGVZRl/743eCjDwbrd7T0SzCGgKYIOIi8lk8qWPyF4C1lrO9OtfAIeEuArnSimuTDSSBIqiOCMiBh8ciPghz/NF7KAogUOC16CIeJ7n+UVIokPAGHOCiNeD044cQESvtdYrf6lDwFq7BoCXIxFYa62zJIFKdJdjgHtnnvqibFXAWss9ejcygW9KqbNGGz6YtZbH5tnIBDZKqeMUAQrBieiT1noemYwfQgj2CXDO8Zw3uqkVb4yZI+LH8EylVFP55kNZllPnXLlvszFmhYiveI8/20VRzIjoM/9ORN+11mzXd2Gt7SQlhMiyLGOxty+j2OZ6dKq74Kfnikul1GkFwhXge4JjI4R4wRacGuloBVJsq0N5dqehJRPRnywQec0P1hKvNZXwF5ME/BKPKMQrpdSddjotGMOCw0RCS275QNXnmxFH8VYIMfWv6I4V+4oeoQ0tF+y0wBsdX9WH4tFywKgG6h+rVrDyD3UpRcGTFfAqMfhuqJ00Vca9T7IhbwN2RCnlrHa8xyJwyy9jIlqGD4+DEOCsAGAupbzZbrfP/UOllOu+F3CMxN4WeMb0CxFnsTfd0BHp08CcAaSUi4dkdx9yvX9M7nPIkD3/CfwGBboJMIftEqkAAAAASUVORK5CYII=">
                    ${threadInfo.reply.num}
                  </span>
                </div>
              </div>
              <div class="tiezi-content-container">
                ${threadInfo.content}
              </div>
            </div>
            `,
          });
          // 设置用户头像上的鼠标悬浮card
          const frsAuthorName = threadInfoElement.querySelector(
            ".tiezi-user-info .frs-author-name"
          );
          frsAuthorName.setAttribute(
            "data-field",
            element
              .querySelector(
                ".threadlist_author .tb_icon_author a.frs-author-name"
              )
              .getAttribute("data-field")
          );
          // 把发帖时间添加到发帖用户后面
          const tieziUserInfo =
            threadInfoElement.querySelector(".tiezi-user-info");
          tieziUserInfo.appendChild(
            DOMUtils.createElement("span", {
              className: "tiezi-create-time",
              innerText: threadInfo.createTime,
            })
          );
          // 把发帖回帖时间添加到回帖用户后面（如果存在）
          const tbIconAuthorReply = threadInfoElement.querySelector(
            ".tiezi-info .tb_icon_author_rely"
          );
          if (tbIconAuthorReply) {
            tbIconAuthorReply.appendChild(
              DOMUtils.createElement("span", {
                className: "tiezi-pipe",
                innerHTML: "   |   ",
              })
            );
            tbIconAuthorReply.appendChild(
              DOMUtils.createElement("span", {
                className: "tiezi-latest-reply-time",
                innerText: threadInfo.reply.createTime,
              })
            );
          }
          // 保存数据到元素上
          threadInfoElement["data-info"] = threadInfo;
          element.appendChild(threadInfoElement);
        });
      }
      const lockCallBack = new utils.LockFunction(handleThread);
      utils.mutationObserver(document.documentElement, {
        config: {
          childList: true,
          subtree: true,
        },
        callback() {
          lockCallBack.run();
        },
      });
    },
    /**
     * 屏蔽右侧用户信息块
     */
    shieldRightUserInfoBlock() {
      GM_addStyle(`
        #aside{display: none !important;}
        #content_wrap,
        .old_style_wrapper,
        .edui-container{width: 100% !important;}
        .forum_content{background: #ffffff;}
        .j_title_wrap{
          display: flex;
          flex-wrap: wrap;
        }
        .tb_rich_poster .poster_body .editor_title{
          width: 100% !important;
        }
      `);
    },
    /**
     * 屏蔽右侧悬浮工具栏
     */
    shieldRightToolBar() {
      GM_addStyle(`.tbui_aside_float_bar{display: none !important;}`);
    },
  };

  /**
   * 贴吧
   */
  const TieBa = {
    init() {
      if (TieBaRouter.isBaNei()) {
        // 吧内
        log.info("当前router: 吧内");
        TieBaBaNei.init();
      } else if (TieBaRouter.isTieZi()) {
        // 帖子
        log.info("当前router: 帖子");
        TieBaTieZi.init();
      }
    },
    /**
     * 美化页面
     */
    beautifyPage() {},
  };

  /* ---------------------入口--------------------- */
  PopsPanel.initMenu();
  TieBa.init();

  /* ---------------------入口--------------------- */
})();
