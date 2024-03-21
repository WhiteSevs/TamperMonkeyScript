// ==UserScript==
// @name         【移动端】百度系优化
// @icon         https://www.baidu.com/favicon.ico
// @namespace    https://greasyfork.org/zh-CN/scripts/418349
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @version      2024.3.21
// @author       WhiteSevs
// @run-at       document-start
// @description  用于【移动端】的百度系列产品优化，包括【百度搜索】、【百家号】、【百度贴吧】、【百度文库】、【百度经验】、【百度百科】、【百度知道】、【百度翻译】、【百度图片】、【百度地图】、【百度好看视频】、【百度爱企查】、【百度问题】、【百度识图】等
// @match        *://*.baidu.com/*
// @match        *://www.tieba.com/*
// @match        *://uf9kyh.smartapps.cn/*
// @connect      www.baidu.com
// @connect      m.baidu.com
// @connect      tieba.baidu.com
// @connect      www.tieba.com
// @connect      baike.baidu.com
// @connect      chat.baidu.com
// @connect      chat-ws.baidu.com
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        unsafeWindow
// @require      https://update.greasyfork.org/scripts/449471/1305484/Viewer.js
// @require      https://update.greasyfork.org/scripts/462234/1322684/Message.js
// @require      https://update.greasyfork.org/scripts/456485/1346764/pops.js
// @require      https://update.greasyfork.org/scripts/455186/1346755/WhiteSevsUtils.js
// @require      https://update.greasyfork.org/scripts/465772/1344519/DOMUtils.js
// @require      https://update.greasyfork.org/scripts/488179/1332779/showdown.js
// ==/UserScript==

(function () {
  if (typeof unsafeWindow === "undefined") {
    unsafeWindow = globalThis || window;
  }
  const OriginPrototype = {
    Object: {
      defineProperty: unsafeWindow.Object.defineProperty,
      keys: unsafeWindow.Object.keys,
      values: unsafeWindow.Object.values,
      assign: unsafeWindow.Object.assign,
    },
    Function: {
      apply: unsafeWindow.Function.prototype.apply,
      call: unsafeWindow.Function.prototype.call,
    },
    Element: {
      appendChild: unsafeWindow.Element.prototype.appendChild,
    },
    setTimeout: unsafeWindow.setTimeout,
  };
  /**
   * 是否为调试模式
   */
  const DEBUG = false;
  /**
   * @type {import("../库/pops")}
   */
  const pops = window.pops;
  /**
   * @type {import("../库/Viewer")}
   */
  const Viewer = window.Viewer;
  /**
   * @type {import("../库/Qmsg")}
   */
  const Qmsg = window.Qmsg;
  /**
   * @type {import("../库/Utils")}
   */
  const utils = window.Utils.noConflict();
  /**
   * @type {import("../库/DOMUtils")}
   */
  const DOMUtils = window.DOMUtils.noConflict();
  /**
   * @type {import("../库/showdown")}
   */
  const showdown = window.showdown;
  const log = new utils.Log(GM_info, unsafeWindow.console || console);
  log.config({
    debug: DEBUG,
    logMaxCount: 20000,
    autoClearConsole: true,
    tag: true,
  });
  const httpx = new utils.Httpx(GM_xmlhttpRequest);
  httpx.config({
    logDetails: DEBUG,
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
  Qmsg.config({
    position: "bottom",
    html: true,
    maxNums: 5,
    autoClose: true,
    showClose: false,
    showReverse: true,
  });
  /**
   * 菜单对象
   */
  const GM_Menu = new utils.GM_Menu({
    GM_getValue,
    GM_setValue,
    GM_registerMenuCommand,
    GM_unregisterMenuCommand,
  });

  class LoadingView {
    /**
     *
     * @param {boolean} withIcon 是否添加icon
     * @param {boolean} isEnd icon是否添加在后面
     */
    constructor(withIcon, isEnd) {
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
      let loadingViewCSSText = `
      .${this.config.className}{
        margin: 0.08rem;
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
      let loadingViewCSSElement = document.createElement("style");
      loadingViewCSSElement.setAttribute("type", "text/css");
      loadingViewCSSElement.setAttribute("data-from", "loadingView");
      loadingViewCSSElement.setAttribute("data-author", "whitesev");
      loadingViewCSSElement.innerHTML = loadingViewCSSText;
      if (document.documentElement.childNodes.length === 0) {
        /* 插入最底部 */
        document.documentElement.appendChild(loadingViewCSSElement);
      } else {
        /* 插入head内 */
        document.head.appendChild(loadingViewCSSElement);
      }
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
      document
        .querySelectorAll("." + this.config.className)
        .forEach((item) => item.remove());
    }
    /**
     * 判断Loading是否已加载到页面中
     * @returns {boolean}
     */
    isExists() {
      return Boolean(document.querySelector(`.${this.config.className}`));
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
        document.querySelector(
          "style[data-from='loadingView'][type='text/css'][data-author='whitesev']"
        )
      );
    }
  }

  const Router = {
    isSearch() {
      return window.location.href.match(
        /^http(s|):\/\/(m[0-9]{0,2}|www).baidu.com\/.*/g
      );
    },
    isSearchBh() {
      return this.isSearch() && window.location.pathname.startsWith("/bh");
    },
    isSearchHome() {
      return (
        window.location.href.match(
          /^http(s|):\/\/(m[0-9]{0,2}|www).baidu.com\/$/g
        ) ||
        window.location.href.match(
          /^http(s|):\/\/(m[0-9]{0,2}|www).baidu.com\/(\?ref=|\?tn=|\?from=)/g
        )
      );
    },
    isBaiJiaHao() {
      return window.location.href.match(/^http(s|):\/\/baijiahao.baidu.com/g);
    },
    isTieBa() {
      return window.location.href.match(
        /^http(s|):\/\/(tieba.baidu|www.tieba|ala.baidu).com/g
      );
    },
    isTieBaPost() {
      return this.isTieBa() && window.location.pathname.startsWith("/p/");
    },
    isTieBaNewTopic() {
      return (
        this.isTieBa() &&
        window.location.pathname.startsWith("/mo/q/newtopic/topicTemplate")
      );
    },
    isTieBaNei() {
      return this.isTieBa() && window.location.pathname === "/f";
    },
    isWenKu() {
      return window.location.href.match(/^http(s|):\/\/(wk|tanbi).baidu.com/g);
    },
    isJingYan() {
      return window.location.href.match(/^http(s|):\/\/jingyan.baidu.com/g);
    },
    isBaiKe() {
      return window.location.href.match(
        /^http(s|):\/\/(baike|wapbaike).baidu.com/g
      );
    },
    isBaiKeTaShuo() {
      return this.isBaiKe() && window.location.pathname.startsWith("/tashuo");
    },
    isZhiDao() {
      return window.location.href.match(/^http(s|):\/\/zhidao.baidu.com/g);
    },
    isFanYi() {
      return window.location.href.match(/^http(s|):\/\/fanyi.baidu.com/g);
    },
    isFanYiApp() {
      return window.location.href.match(/^http(s|):\/\/fanyi-app.baidu.com/g);
    },
    isImage() {
      return window.location.href.match(/^http(s|):\/\/image.baidu.com/g);
    },
    isMap() {
      return window.location.href.match(/^http(s|):\/\/map.baidu.com/g);
    },
    isMbd() {
      return window.location.href.match(/^http(s|):\/\/mbd.baidu.com/g);
    },
    isXue() {
      return window.location.href.match(/^http(s|):\/\/xue.baidu.com/g);
    },
    isAiQiCha() {
      return window.location.href.match(/^http(s|):\/\/aiqicha.baidu.com/g);
    },
    isPos() {
      return window.location.href.match(/^http(s|):\/\/pos.baidu.com/g);
    },
    isHaoKan() {
      return window.location.href.match(/^http(s|):\/\/haokan.baidu.com/g);
    },
    isGraph() {
      return window.location.href.match(/^http(s|):\/\/graph.baidu.com/g);
    },
    isPan() {
      return window.location.href.match(/^http(s|):\/\/pan.baidu.com/g);
    },
    isYiYan() {
      return window.location.href.match(/^http(s|):\/\/yiyan.baidu.com/g);
    },
    isChat() {
      return window.location.href.match(/^http(s|):\/\/chat.baidu.com/g);
    },
    isMiniJiaoYu() {
      return window.location.href.match(/^http(s|):\/\/uf9kyh.smartapps.cn/g);
    },
    isEasyLearn() {
      return window.location.href.match(/^http(s|):\/\/easylearn.baidu.com/g);
    },
    isISite() {
      return window.location.href.match(
        /^http(s|):\/\/isite.baidu.com\/site\/wjz2tdly/g
      );
    },
    isAiStudy() {
      return window.location.href.match(/^http(s|):\/\/aistudy.baidu.com/g);
    },
  };

  const BaiDu = {
    $data: {
      search: {
        isHijack_onClick: false,
      },
    },
    init() {
      this.search();
      this.searchHome();
      this.baijiahao();
      this.tieba();
      this.wenku();
      this.jingyan();
      this.baike();
      this.baiketashuo();
      this.zhidao();
      this.fanyi();
      this.fanyiApp();
      this.image();
      this.map();
      this.mbd();
      this.xue();
      this.aiqicha();
      this.pos();
      this.haokan();
      this.graph();
      this.pan();
      this.yiyan();
      this.chat();
      this.mini_jiaoyu();
      this.easyLearn();
      this.aiStudy();
    },
    css: {
      search: `
			.c-container.na-ec-item,
			.c-container.ec-container,
			div[data-type="ad"],
			.c-result.sfc-log[data-tpl="adv_wenku_fc"],
			.c-recomm-wrap.new-ux-recom-wrapper.animation,
			#results-pre,
			.video-recommend,
			.c-result.sfc-log[data-tpl="search_recomm"],
			.sfc-image-content-waterfall-item[wat-item-data-id="no-img"],
			.se-results-pre,
			.ec_wise_ad,
			div#copyright + div,
			div#pop-up,
			div[class*='ad-wrapper__'],
			div[class*='rec-wrapper__'],
      .brand-entry,
      .barea-ad,
      .swan-ad-fc-rcmd.swan-ad-fc-base-wrap[data-platform],
      div#page-bd div.recommend,
      div.short-mini div[data-module="rec:undefined-undefined"],
      /* 相关软件 */
      div[srcid="sigma_celebrity_rela"],
      /* 搜一些隐私的内容时弹出的来的，开启无痕模式----保护隐私，安全浏览 */
      div:has(p.ivk-private-p){
				display:none !important;
			}
			.searchboxtop.newsearch-white-style .se-form {
				border-color: #4e6ef2 !important;
			}
			.searchboxtop.newsearch-white-style .se-bn {
				color: #fff !important;
				background: #4e6ef2 !important;
			}
			.se-head-logo .se-logo img {
				display: inherit !important;
			}
			.se-head-tablink {
				border-bottom: 1px solid #e6e6e6 !important;
				//background-color: #fff !important;
				background-color: transparent !important;
			}

			a.se-tabitem span{
				color: #000 !important;
			}
			// div.c-peak-layer{
			//   display:none !important;
			// } 百度关键字背景
			.se-tablink-scroll-wrapper .se-tab-cur:after{
				border-bottom: 2px solid #38f !important;
			}
			.c-tags-scroll.c-padding-x{
				display: none !important;
			}
			.white-bdsearch-isredirecrt{  
				display: inline-flex;
				background: #43ba76;
				color: #fff;
				width: 28px;
				font-size: 16px;
				line-height: 25px;
				justify-content: center;
				align-items: center;
				border-radius: 5px;
				margin: 0 auto;
				margin-right: 6px;
			}
			/* 修复图片显示问题 */
			.image-strong-card div[class*="image-content__"] > div{
				display: inline-block;
				overflow: hidden;
				vertical-align: top;
			}
			.c-result-content div[class*="tieba-newxml-forum-img-class__"]{
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-box-align: center;
        -moz-box-align: center;
				-webkit-align-items: center;
				align-items: center;
			}
			
			.c-result-content div[class*="tieba-newxml-forum-img__"]{
				width: .553rem;
				height: .553rem;
			}
			
			.c-result-content div[class*="tieba-newxml-forum-img__"] img{
				width: 100%;
				height: 100%;
				border-radius: .09rem;
			}
			.c-result-content div[class*="tieba-newxml-forum-class__"]{
				display: -webkit-flex;
				display: flex;
				-webkit-box-orient: vertical;
        -moz-box-orient: vertical;
				-webkit-box-direction: normal;
        -moz-box-direction: normal;
				-webkit-flex-direction: column;
        -moz-flex-direction: column;
				flex-direction: column;
				-webkit-box-pack: center;
				-moz-box-pack: center;
				-webkit-justify-content: center;
				-moz-justify-content: center;
				justify-content: center;
				max-width: 2.2rem;
			}
			.c-result-content div[class*="c-img-content-btn__"]{
				position: absolute;
				right: 0;
				width: .55rem;
				text-align: center;
				line-height: .28rem;
				border: 1px solid rgba(31,31,31,.5);
				border-radius: .15rem;
				font-family: PingFangSC-Medium;
				font-size: .13rem;
				color: #1f1f1f;
			}
			.c-result-content div[class*="tieba-newxml-thread-comment-user__"]{
				display: -webkit-flex;
				display: flex;
				-webkit-box-align: center;
				-moz-box-align: center;
				-webkit-align-items: center;
				-moz-align-items: center;
				align-items: center;
				margin-top: .03rem;
			}
			.c-result-content div[class*="tieba-newxml-thread-comment-user__"] img{
				width: .16rem;
				height: .16rem;
				border-radius: 50%;
			}
			.c-result-content div[class*="tieba-newxml-thread-comment-user__"] span{
				margin-right: .08rem;
			}
			.whitesev-gm-refactor-everyone-searching{
        width: 100%;
        box-sizing: border-box;
        height: 2.857em;
        line-height: 2.857;
        background-color: #f5f6f9;
        border-color: #f5f6f9;
        padding: 0 .08rem;
        vertical-align: middle;
        outline: 0;
        font-size: 14px;
        overflow: hidden;
        border-radius: 9px;
        text-align: center;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        -moz-tap-highlight-color: transparent;
        text-overflow: ellipsis;
        white-space: nowrap;
        -webkit-box-orient: horizontal;
        -moz-box-orient: horizontal;
        -webkit-box-align: stretch;
        -moz-box-align: stretch;
        display: block;
        -webkit-justify-content: space-between;
        -moz-justify-content: space-between;
        -webkit-align-items: stretch;
        -moz-align-items: stretch;
        -webkit-flex-wrap: nowrap;
        -moz-flex-wrap: nowrap;
      }

      /* 让搜索中某些视频的阶段可以横向滚动 */
      div[class^="new-summary-container_"]{
        overflow: auto;
      }
		`,
      searchHome: `
			html,
			body,
			div#header{
				height: calc( 100vh - 120px );
			}
			form#index-form{
				position: static;
				top:0;
				right:0;
				bottom:0;
				left:0;
				margin:auto !important;
				width: 90%;
			}
			div#navs ~ div,
			#login-wraps,
			a.square-enterance,
			div#ts-image-uploader-icon,
			div.baiduappcall-wrap div.voice.call,
			div.tab_news,
			div#navs{
				display: none !important;
			}
      /* 图片logo往下移40px */
      #logo{
          padding-top: 40px;
      }
		`,
      searchBaiduHealth: `
    /* 右下角悬浮的健康直播间图标按钮 */
    div[class^='index_brandEntry']{
      display: none !important;
    }
    `,
      baijiahao: `
			.layer-wrap,
			.openImg,
			.oPadding,
			.bottomTTSStruct,
			.undefined,
			.headDeflectorContainer,
			.followSuper,
			#searchwordSdk,
			div#commentModule > div > div > span:nth-child(2),
      /* 顶部打开APP横幅 */
      #headDeflectorContainer,
      /* 展开全文 */
      .foldMaskWrapper{
				display:none !important;
			}
			body.scrollHide{
				overflow:auto !important;
			}
			.mainContent,
      #mainContentContainer{
				height:  auto !important;
			}
		`,
      tieba: `
			.tb-backflow-defensive,
			.fixed-nav-bar-defensive,
			.post-cut-guide,
			.ertiao-wrap-defensive,
			.feed-warp.gray-background,
			.pb-page-wrapper.app-view.transition-fade nav:first-child,
			.comment-box,
			.only-lz,
			.nav-bar-v2 .nav-bar-bottom,
			.more-image-desc,
			.fengchao-banner-defensive,
			.wake-app,
			.banner-wrapper-defensive,
			.open-app,
      .topic-share-page-v2 .bav-bar-top,
      /* 打开APP查看更多评论 */
      .cmt-large-cut-guide,
      /* 底部评论滚动栏 */
      div.diy-guide-wrapper,
      /* 底部评论滚动栏上面的空白 */
      .individuality,
      /* 吧内的广告 */
      .tb-threadlist__wrapper .tb-banner-wrapper-defensive{
				display:none !important;
			}
			body.tb-modal-open{
				overflow:auto !important;
			}
		`,
      wenku: `
			.reader-pop-manager-view-containter,
			.core-download,
			.card-wrap.card-vip,
			.pop-manager-view-containter,
			#carousel,
			.card-wrap,
			.n-card-wrap-exp,
			.pageNo .pager~div[class*="__wm"],
			.fold-pager,
			.vip-choice,
			.wk-bottom-btn,
			.continue-read-wrap.invite-clipboard,
			.wk-student,
			.search-pay-container,
			.wk-student-defense,
			.vip-rec-card-main,
      .back-dialog,
      div.middle-box-root{
				display:none !important;
			}
			.bartop{
				display: unset;
			}
			.reader-wrap{
				height:auto !important;
			}
			#view-rr-app{
				overflow-y:auto !important;
			}
			#view-app,
			#view-rr-app{
				max-height: 100% !important;
			}
			.top-card{
				margin-top: 10px !important;
			}
			*{
				-webkit-touch-callout: inherit !important;
				-khtml-user-select: auto !important;
				-moz-user-select: auto !important;
				-ms-user-select: auto !important;
				user-select: auto !important;
			}
		`,
      jingyan: `
			.article-feed-next,
			.wgt-rel-exp-feed,
			.article-feed-btn-fixed,
			.read-whole-mask.app,
			.asp-self-rander,
			.baobao-image-item,
			#wgt-ad-guess{
				display:none !important;
			}
			.exp-content-container{
				max-height: 100% !important;
				overflow:auto !important;
			}
		`,
      baike: `

		`,
      zhidao: `
			/* .dec + div, */
			#feed-recommend,
			.dec,
			.wgt-topic-hot,
			#respect-footer,
			#wap-youx-change-asp,
			div.question-line + div:not(.replies-container),
			.wgt-asp-youx,
			.w-detail-display-btn,
			.ask-for-friend,
			#knowledge-answer-list,
			.go-to-ask,
			div[class*='ads'],
      /* 免费领票 */
      .doodle-container{
				display:none !important;
			}
			.w-detail-container{
				max-height: 100% !important;
				overflow: auto !important;
			}
		`,
      fanyi: `
			.app-bar,
			.jifeng-container,
			.intro-title,
      .sideQrContainer,
      .inner.clearfix,
      section.bottom-intro,
      #desktop-guide-wrapper{
				display:none !important;
			}
			.new-header-dl{
				visibility: hidden;
			}
		`,
      fanyiApp: `
			.fanyi-invoke-btn,
			.top-bn{
				display:none !important;
			}
		`,
      image: `
			#boxBanner{
				display:none !important;
			}
		`,
      map: `
			.index-widget-guidebanner,
			.common-widget-bottom-banner-changeId,
			#index-areaEntry-widget,
			div.common-widget-bottom-banner-changeId,
			#downloadnativepopup,
			.xiaoduVoiceCard,
			.index-widget-guidebanner,
      #message-center-panel,
      .xiaoduVoice-banner.-border-round,
      /* 底部中间横幅-打开百度地图APP */
      #main div[id^="fis_elm"] .btn-banner-float{
				display:none !important;
			}
		`,
      mbd: `
			div.headDeflectorContainer,
      #bdrainrwDragButton,
			#page_wrapper .other div[class*='undefined'],
			#page_wrapper .other > div[class=""],
      /* 底部按钮-百度APP内播放 */
      div.common-wrap.single-pd,
      /* 顶部横幅-APP内播放 */
      div#app div.guid-new,
      /* 顶部横幅-APP内阅读 */
      #headDeflectorContainer,
      /* 底部 打开百度APP，阅读体验更佳 */
      #page_wrapper div[class^="foldMaskWrapper-"],
      /* 打开百度APP，阅读完整内容 */
      #content_wrapper .foldMaskWrapper,
      /* 影响定位元素的遮罩层 */
      #page_wrapper .bdboxshare>div:first-child,
      /* 来百度APP畅享高清图片 */
      .contentMedia .openImg{
				display: none !important;
			}
      /* 展开阅读 */
      #page_wrapper #dynamicItem,
      /* 手机版-展开阅读 */
      #mainContentContainer{
        height: auto !important;
      }
		`,
      xue: `
			.sc-dkcEsn,
			.sc-fHSyak,
			.sc-gikAfH,
			swan-view.strategy-institution-list,
			swan-view.strategy-wrapper,
			.swan-spider-tap,
			.booking,
			.head-bar,
			.head-bar-placeholder{
				display: none !important;
			}
			.sc-cHGmPC{
				width: auto !important;
			}
		`,
      aiqicha: `
      div.header-down-app,
      div.active-enter,
      div.app-enter,
      div.coupon-active,
      div.cpc-adv-container,
      div.detail-footer.detail-footer-test,
      div.index-more[data-show-id="indexMoreExposure"]
      {
        display: none !important;
      }
      .bread-crumbs.has-down,
      .border-bottom-line{
        top: 0 !important;
      }
    `,
      pos: `
      html,body{
        display: none !important;
      }`,
      haokan: `
      div.share-origin.wx-share-launch,
      div.open-app-top,
      div.open-app-bottom.wx-share-launch,
      /* 打开APP  好看更清晰(1080P) */
      .NewOpenApp,
      /* 顶部空白区域 */
      .placeholder,
      /* 底部好看视频图片 */
      .page-buttom,
      /* 暂停视频弹出来的打开百度好看视频 */
      .video-player-download-tips{
        display: none !important;
      }
      `,
      graph: `
      #app section.vf-home-booth div.vf-w-button.vf-home-booth-camera,
      #viewport .graph-imagecut-banner-invoke,
      /* 往下滑动右下角的搜索图标按钮 */
      #app .vf-home-camera{
        display: none !important;
      }
      `,
      pan: `
      /* 失败页底部广告推荐 */
      div.share-error-ad,
      /* 左侧导航栏底部下载百度网盘APP横栏 */
      #app div.download-app,
      /* 失败页-小飞机送惊喜 */
      div.errorWrap div.share-plane,
      /* 保存到网盘右上角的领红包图标 */
      img.sharelist-savebutton-hb-tip{
        display: none !important;
      }
      `,
      yiyan: `
      
      `,
      chat: `
      
      `,
      mini_jiaoyu: `
      
      `,
      easyLearn: `
      /* 中间弹窗-限时专享福利 */
      #app .pre-unpaid-wrap,
      /* 底部工具栏上面-月考全胜 您有xx元体验卡 */
      .question-bottom-bar .vip-bar,
      /* 解析-免费查看答案及解析 */
      .question-analysis-new .see-more,
      /* 最底部-百度教育商务合作、产品代理销售或内容合作等*/
      .business-el-line,
      .business-el-line-background,
      /* 展开按钮 */
      .question-analysis-new .expand,
      /* 7日VIP限免 大学生免费领 */
      #app .bgk-question-detail .float-fixed{
        display: none !important;
      }
      /* 显示答案及解析 */
      .ques-title.analysis-title + div{
        display: unset !important;
      }
      .question-analysis-new .analysis-wrap,
      #analysis{
        overflow: unset !important;
        height: unset !important;
        max-height: unset !important;
      }
      /* 电脑端 */
      /* 中间弹窗-限时专享福利 */
      .kaixue-dialog-mask,
      /* 解析-免费查看答案及解析 */
      .question-cont .mask,
      /* 底部-横幅畅享百万解题视频、 千万整本试题解析VIP全场免费下 */
      .vip-banner-cont{
        display: none !important;
      }
      `,
      aiStudy: `

      `,
      isite_wjz2tdly: `
      /* 底部推荐广告项 */
      .gt-local-h5-advert-card-root-container{
        display: none !important;
      }      
      `,
    },
    /**
     * 百度搜索-主页
     */
    searchHome() {
      if (!Router.isSearchHome()) {
        return;
      }
      const that = this;
      const BaiDuSearchHome = {
        init() {
          if (PopsPanel.getValue("baidu_search_home_homepage_minification")) {
            this.homepageMinification();
          }
        },
        homepageMinification() {
          GM_addStyle(that.css.searchHome);
          log.info("插入精简主页CSS规则");
        },
      };

      BaiDuSearchHome.init();
    },
    /**
     * 百度搜索
     */
    search() {
      if (!Router.isSearch()) {
        return;
      }

      const HandleItemURL = {
        /**
         * @type {UtilsDictionaryConstructor}
         */
        originURLMap: null,
        /**
         * 判断链接是否是百度的中转链接
         * @param {string} url
         * @returns {boolean}
         * + true 是百度的中转链接
         * + false 不是百度的中转链接
         */
        isBaiDuTransferStation(url) {
          try {
            url = decodeURIComponent(url);
            return utils.startsWith(
              url,
              "http(s|)://(m[0-9]{0,2}|www).baidu.com/from"
            );
          } catch (error) {
            log.error(error);
            return false;
          }
        },
        /**
         * 判断链接是否是黑名单链接，不进行处理
         * @param {string} url
         * @returns {boolean}
         * + true 是黑名单url
         * + false 不是黑名单url
         */
        isBlackList(url) {
          let blackList = [
            new RegExp(
              "^http(s|)://(m[0-9]{0,2}|www).baidu.com/productcard",
              "g"
            ),
            new RegExp("^http(s|)://ks.baidu.com"),
          ];
          for (const blackUrlRegexp of blackList) {
            if (url.match(blackUrlRegexp)) {
              return true;
            }
          }
          return false;
        },
        /**
         * 为搜索结果每一条设置原始链接
         * @param {Element} targetNode
         * @param {string} articleURL article的真实url
         */
        setArticleOriginUrl(targetNode, articleURL) {
          /* 处理超链接 */
          targetNode.querySelectorAll("a").forEach(async (item) => {
            if (HandleItemURL.originURLMap.has(item.href)) {
              articleURL = HandleItemURL.originURLMap.get(item.href);
            }
            let domOriginUrl = HandleItemURL.parseDOMAttrOriginUrl(item);
            if (!utils.isNull(domOriginUrl)) {
              articleURL = domOriginUrl;
            }
            if (utils.isNull(articleURL) || articleURL === item.href) {
              return;
            }
            if (HandleItemURL.isBlackList(articleURL)) {
              return;
            }
            item.href = articleURL;
            //log.info("替换成新链接: " + articleURL);
          });
          /* 这个是百度笔记(可能) */
          targetNode
            .querySelectorAll("div[data-aftclk][class*=img-container]")
            .forEach((item) => {
              let domOriginUrl = HandleItemURL.parseDOMAttrOriginUrl(item);
              if (
                !utils.isNull(domOriginUrl) &&
                !HandleItemURL.isBlackList(domOriginUrl)
              ) {
                item.setAttribute("href", domOriginUrl);
                item.setAttribute("rl-link-href", domOriginUrl);
                //log.info("替换成新链接2: " + domOriginUrl);
              }
            });
          /* 对搜索结果中存在的视频进行处理 */
          targetNode
            .querySelectorAll("div.c-video-container div[data-aftclk]")
            .forEach((item) => {
              let domOriginUrl = HandleItemURL.parseDOMAttrOriginUrl(item);
              if (
                !utils.isNull(domOriginUrl) &&
                !HandleItemURL.isBlackList(domOriginUrl)
              ) {
                item.setAttribute("href", domOriginUrl);
                item.setAttribute("rl-link-href", domOriginUrl);
                //log.info("视频替换成新链接1: " + domOriginUrl);
              }
            });
          /* 对搜索结果中存在的视频进行处理 */
          targetNode
            .querySelectorAll('div[data-module="sc_pc"] div[rl-link-href]')
            .forEach((item) => {
              let domOriginUrl = HandleItemURL.parseDOMAttrOriginUrl(item);
              if (
                !utils.isNull(domOriginUrl) &&
                !HandleItemURL.isBlackList(domOriginUrl)
              ) {
                item.setAttribute("href", domOriginUrl);
                item.setAttribute("rl-link-href", domOriginUrl);
                //log.info("视频替换成新链接2: " + domOriginUrl);
              }
            });
        },
        /**
         * 解析在JSON数据中的urlParams中真正的链接，如果不存在，返回undefined
         * @param {object} data 传入 {"urlParams":{...}} 中的urlParams
         * @returns {?string}
         */
        parseURLParamsOriginURL(data) {
          if (data["originUrl"]) {
            return data["originUrl"];
          } else if (data["log"]) {
            /* 隐藏在log的mu中 */
            let url = void 0;
            try {
              url = utils.toJSON(data["log"])["mu"];
              utils.isNull(url) && (url = void 0);
            } catch (error) {}
            return url;
          }
        },
        /**
         * 由于部分真实链接存储在 script 标签中，得取出
         * @param {Element} targetNode 目标元素
         * @returns {UtilsDictionaryConstructor}
         */
        parseScriptDOMOriginUrlMap(targetNode) {
          let urlMap = new utils.Dictionary();
          targetNode
            .querySelectorAll("script[id^='atom-data-']")
            .forEach((item) => {
              let jsonData = utils.toJSON(item.innerHTML);
              if (jsonData["data"]["resultAtomData"] == null) {
                return;
              }
              let resultAtomData = jsonData["data"]["resultAtomData"];
              if (
                resultAtomData["abstract"] &&
                resultAtomData["abstract"]["urlParams"] &&
                resultAtomData["abstract"]["urlParams"]["tcUrl"]
              ) {
                let url = HandleItemURL.parseURLParamsOriginURL(
                  resultAtomData["abstract"]["urlParams"]
                );
                if (url) {
                  urlMap.set(
                    resultAtomData["abstract"]["urlParams"]["tcUrl"],
                    url
                  );
                }
              }
              if (
                resultAtomData["content"] &&
                resultAtomData["content"]["abstract"] &&
                resultAtomData["content"]["abstract"]["urlParams"] &&
                resultAtomData["content"]["abstract"]["urlParams"]["tcUrl"]
              ) {
                let url = HandleItemURL.parseURLParamsOriginURL(
                  resultAtomData["content"]["abstract"]["urlParams"]
                );
                if (url) {
                  urlMap.set(
                    resultAtomData["content"]["abstract"]["urlParams"]["tcUrl"],
                    url
                  );
                }
              }
              if (
                resultAtomData["content"] &&
                resultAtomData["content"]["links"] &&
                resultAtomData["content"]["links"]["list"]
              ) {
                resultAtomData["content"]["links"]["list"].forEach((item) => {
                  item.forEach((item2) => {
                    if (item2["urlParams"]["tcUrl"]) {
                      let url = HandleItemURL.parseURLParamsOriginURL(
                        item2["urlParams"]
                      );
                      if (url) {
                        urlMap.set(item2["urlParams"]["tcUrl"], url);
                      }
                    }
                  });
                });
              }
              if (
                resultAtomData["content"] &&
                resultAtomData["content"]["site"]
              ) {
                resultAtomData["content"]["site"]["list"].forEach((item) => {
                  if (item["urlParams"]["tcUrl"]) {
                    let url = HandleItemURL.parseURLParamsOriginURL(
                      item["urlParams"]
                    );
                    if (url) {
                      urlMap.set(item["urlParams"]["tcUrl"], url);
                    }
                  }
                });
              }
            });
          return urlMap;
        },
        /**
         * 判断传入的链接是否不是正确的真实链接
         * @param {string} url
         */
        isNotRlLinkUrl(url) {
          if (utils.isNull(url)) {
            return true;
          }
          if (typeof url !== "string") {
            return true;
          }
          if (!url.startsWith("http")) {
            return true;
          }
          if (url.match(/^http(s|):\/\/nourl\.(ubs\.|)baidu\.com/gi)) {
            return true;
          }
          return false;
        },
        /**
         * 解析DOM节点上隐藏在属性中的真正url
         * @param {HTMLElement} element 目标元素
         * @returns {?string}
         */
        parseDOMAttrOriginUrl(element) {
          let url = null;
          let dataLog = element.getAttribute("data-log");
          let $article = element.querySelector("article");
          if (dataLog && dataLog !== "{") {
            /* 百度在a标签上的data-log="{" */
            try {
              dataLog = utils.toJSON(dataLog);
              url = dataLog.mu;
            } catch (error) {
              log.error("DOM的属性data-log不存在👇");
              log.error(error);
            }
          }
          if (this.isNotRlLinkUrl(url)) {
            let rlLinkDataUrl =
              $article?.getAttribute("rl-link-data-url") ||
              element.getAttribute("rl-link-data-url");
            if (rlLinkDataUrl) {
              url = rlLinkDataUrl;
            }
          }

          if (this.isNotRlLinkUrl(url)) {
            let dataIVK = element.getAttribute("data-ivk");
            if (dataIVK) {
              try {
                dataIVK = utils.toJSON(dataIVK);
                if (
                  dataIVK?.control?.default_url &&
                  !HandleItemURL.isBaiDuTransferStation(
                    dataIVK?.control?.default_url
                  )
                ) {
                  url = dataIVK?.control?.default_url;
                } else if (
                  dataIVK?.control?.dataUrl &&
                  !HandleItemURL.isBaiDuTransferStation(
                    dataIVK?.control?.dataUrl
                  )
                ) {
                  url = dataIVK?.control?.dataUrl;
                } else if (
                  dataIVK?.control?.ext?.url &&
                  !HandleItemURL.isBaiDuTransferStation(
                    dataIVK?.control?.ext?.url
                  )
                ) {
                  url = dataIVK?.control?.ext?.url;
                }
              } catch (error) {
                log.error("DOM的属性data-ivk不存在👇");
                log.error(error);
              }
            }
          }

          if (this.isNotRlLinkUrl(url)) {
            let rlLinkDataLog = element.getAttribute("rl-link-data-log");
            if (rlLinkDataLog) {
              try {
                rlLinkDataLog = utils.toJSON(rlLinkDataLog);
                if (utils.isNull(rlLinkDataLog.mu) && rlLinkDataLog.extra) {
                  try {
                    let rlLinkDataLogExtra = utils.toJSON(rlLinkDataLog.extra);
                    if (
                      rlLinkDataLogExtra.loc &&
                      !HandleItemURL.isBaiDuTransferStation(
                        rlLinkDataLogExtra.loc
                      )
                    ) {
                      url = decodeURIComponent(rlLinkDataLogExtra.loc);
                    } else if (
                      rlLinkDataLogExtra.log_loc &&
                      !HandleItemURL.isBaiDuTransferStation(
                        rlLinkDataLogExtra.log_loc
                      )
                    ) {
                      url = decodeURIComponent(rlLinkDataLogExtra.log_loc);
                    }
                  } catch (error) {
                    log.error("DOM的属性rl-link-data-log的extra不存在👇");
                    log.error(error);
                  }
                } else {
                  url = rlLinkDataLog.mu;
                }
              } catch (error) {
                log.error("DOM的属性rl-link-data-log不存在👇");
                log.error(error);
              }
            }
          }

          if (this.isNotRlLinkUrl(url)) {
            let rlLinkDataIvk = element.getAttribute("rl-link-data-ivk");
            if (rlLinkDataIvk) {
              try {
                rlLinkDataIvk = utils.toJSON(rlLinkDataIvk);
                if (
                  rlLinkDataIvk?.control?.default_url &&
                  !HandleItemURL.isBaiDuTransferStation(
                    rlLinkDataIvk?.control?.default_url
                  )
                ) {
                  url = rlLinkDataIvk?.control?.default_url;
                } else if (
                  rlLinkDataIvk?.control?.invoke_url &&
                  !HandleItemURL.isBaiDuTransferStation(
                    rlLinkDataIvk?.control?.invoke_url
                  )
                ) {
                  url = rlLinkDataIvk?.control?.invoke_url;
                } else if (
                  rlLinkDataIvk?.control?.ext?.url &&
                  !HandleItemURL.isBaiDuTransferStation(
                    rlLinkDataIvk?.control?.ext?.url
                  )
                ) {
                  url = rlLinkDataIvk?.control?.ext?.url;
                }
              } catch (error) {
                log.error("DOM的属性rl-link-data-ivk不存在👇");
                log.error(error);
              }
            }
          }

          if (this.isNotRlLinkUrl(url)) {
            let articleDataLog = $article?.getAttribute("rl-link-data-log");
            if (articleDataLog) {
              try {
                articleDataLog = utils.toJSON(articleDataLog);
                url = articleDataLog.mu;
              } catch (error) {
                log.error("article DOM的属性的rl-link-data-log不存在👇");
                log.error(element);
              }
            }
          }
          if (this.isNotRlLinkUrl(url)) {
            let articleLinkDataIVK = $article?.getAttribute("rl-link-data-ivk");
            if (articleLinkDataIVK) {
              try {
                articleLinkDataIVK = utils.toJSON(articleLinkDataIVK);
                if (
                  articleLinkDataIVK?.control?.default_url &&
                  !HandleItemURL.isBaiDuTransferStation(
                    articleLinkDataIVK?.control?.default_url
                  )
                ) {
                  url = articleLinkDataIVK?.control?.default_url;
                } else if (
                  articleLinkDataIVK?.control?.dataUrl &&
                  !HandleItemURL.isBaiDuTransferStation(
                    articleLinkDataIVK?.control?.dataUrl
                  )
                ) {
                  url = articleLinkDataIVK?.control?.dataUrl;
                }
              } catch (error) {
                log.error("article DOM的属性rl-link-data-ivk不存在👇");
                log.error(error);
              }
            }
          }

          if (this.isNotRlLinkUrl(url)) {
            url = null;
            /* log.error(["未在元素节点中找到隐藏的原始URL", jQDOM]); */
          } else {
            /* 对每个中文字符进行编码 */
            let chineseArr = url.match(/[\u4e00-\u9fa5]/g);
            if (chineseArr) {
              for (let i = 0; i < chineseArr.length; i++) {
                url = url.replace(chineseArr[i], encodeURI(chineseArr[i]));
              }
            }
          }

          if (this.isNotRlLinkUrl(url)) {
            /* 最新资讯上的隐藏的链接 */
            let labelUrl = element.getAttribute("label-url");
            if (labelUrl) {
              url = labelUrl;
            }
          }
          /* 因为链接中存在%25，需要正确替换成% */
          if (
            !this.isNotRlLinkUrl(url) &&
            utils.startsWith(url, "http(s|)://(m[0-9]{0,2}|www).baidu.com/sf?")
          ) {
            url = decodeURIComponent(url);
            /* url = url.replaceAll("%25","%") */
          }
          /* 有些url是错误的， */
          if (!this.isNotRlLinkUrl(url)) {
            if (utils.startsWith(url, "http(s|)://nourl.baidu.com")) {
              url = "";
            }
          }
          return url;
        },
        /**
         * 获取每一项的标题元素
         * @param {Element} targetNode 目标项
         * @returns {?Element}
         */
        getItemTitleElement(targetNode) {
          return (
            targetNode.querySelector(".c-title-text") ||
            targetNode.querySelector("p.cu-title") ||
            targetNode.querySelector("div[class^=header-wrapper]") ||
            targetNode.querySelector(".c-title")
          );
        },
        /**
         * 添加CSDN的CSS
         */
        addCSDNFlagCSS() {
          GM_addStyle(`
          .csdn-flag-component-box{display:flex;margin:0;text-align:left;font-size:0;position:relative;width:260px;margin:5px 0}
          .csdn-flag-component-box a{display:inline-block;font-size:14px}
          .csdn-flag-component-box .praise {
              padding-right: 20px;
              background: #ff5722;
              border-top-left-radius: 50px;
              border-top-right-radius: 50px;
              border-bottom-left-radius: 50px;
              border-bottom-right-radius: 50px;
              background: -webkit-linear-gradient(left,#ff5722,#f78d6b);
              background: -o-linear-gradient(right,#ff5722,#f78d6b);
              background: -moz-linear-gradient(right,#ff5722,#f78d6b);
              background: linear-gradient(to right,#ff5722,#f78d6b);
          }
          .csdn-flag-component-box .praise,
          .csdn-flag-component-box .share {
              height:auto;
              line-height:normal;
              color: #fff;
              background: #ff0505;
              border-radius: 5px;
              padding: 2px 4px;
          }`);
        },
        /**
         * 给元素添加【CSDN】下载标识
         * @param {Element} targetNode
         */
        addCSDNFlag(targetNode) {
          if (targetNode.querySelector(".csdn-flag-component-box")) {
            return;
          }
          let title_text_element =
            HandleItemURL.getItemTitleElement(targetNode);
          if (title_text_element) {
            DOMUtils.append(
              title_text_element,
              `<div class="csdn-flag-component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>`
            );
            log.success("插入CSDN下载提示标题");
          }
        },
        /**
         * 移除广告、推广
         */
        removeAds() {
          if (
            PopsPanel.getValue(
              "baidu_search_blocking_everyone_is_still_searching"
            )
          ) {
            let pageRelativeElement =
              document.querySelectorAll("#page-relative");
            if (pageRelativeElement.length) {
              log.success(
                `删除广告位 ==> 末尾 大家都在搜 ${pageRelativeElement.length}个`
              );
              DOMUtils.remove(pageRelativeElement);
            }
            let centerRecommandWarpperElement = document.querySelectorAll(
              ".c-recomm-wrap.new-ux-recom-wrapper.c-bg-color-white.animation"
            );
            if (centerRecommandWarpperElement.length) {
              log.success(
                `删除广告位 ==> 中间 大家都在搜 ${centerRecommandWarpperElement.length}个`
              );
              DOMUtils.remove(centerRecommandWarpperElement);
            }
            let relativewordsElement =
              document.querySelectorAll("#relativewords");
            if (relativewordsElement.length) {
              log.success(
                `删除广告位 ==> 简单搜索加载下一页出现的 大家都在搜 ${relativewordsElement.length}个`
              );
              DOMUtils.remove(relativewordsElement);
            }
          } else {
            if (HandleEveryOneSearch.refactorEveryoneIsStillSearching) {
              HandleEveryOneSearch.handleBottom(
                document.querySelectorAll("#page-relative")
              );
              HandleEveryOneSearch.handleCenter(
                document.querySelectorAll(
                  '.c-result.result[tpl^="recommend_list"]'
                )
              );
            }
          }
          let popUpElement = document.querySelectorAll("#pop-up");
          if (popUpElement.length) {
            log.success(`删除 ==> 跳转百度app提示 ${popUpElement.length}个`);
            DOMUtils.remove(popUpElement);
          }
          let ecWiseAdElement = document.querySelectorAll(".ec_wise_ad");
          if (ecWiseAdElement.length) {
            log.success(
              `删除 ==> 顶部的部分商品广告 ${ecWiseAdElement.length}个`
            );
            DOMUtils.remove(DOMUtils.parent(ecWiseAdElement));
          }

          document.querySelectorAll(".c-result.result").forEach((item) => {
            /* 获取属性上的LOG */
            let dataLog = utils.toJSON(item.getAttribute("data-log"));
            /* 真实链接 */
            let searchArticleOriginal_link = dataLog["mu"];
            if (
              BaiduSearchRule.handleCustomRule(item, searchArticleOriginal_link)
            ) {
              item.remove();
              return;
            }
            if (
              PopsPanel.getValue(
                "baidu_search_blocking_everyone_is_still_searching"
              )
            ) {
              let $title = item.querySelector(".rw-little-title");
              if ($title && $title.textContent.startsWith("大家还在搜")) {
                item?.remove();
                log.success("删除广告 ==> 大家都在搜（能看到的）");
              }
              document.querySelectorAll("span").forEach((item) => {
                let resultParentElement = item.parentElement.parentElement;
                if (
                  item.innerText.match(/百度APP内打开/) ||
                  resultParentElement.getAttribute("data-from") === "etpl"
                ) {
                  resultParentElement.remove();
                  log.success(
                    "删除广告 ==> 百度APP内打开，隐藏的广告，会在滚动时跳出来的"
                  );
                }
              });
            }
            /* 底部标识 */
            let bottomLogoElement = item.querySelectorAll(".c-color-source");
            if (bottomLogoElement.length) {
              bottomLogoElement.forEach((_item_) => {
                if (_item_.outerText.match(/百度(APP内打开|手机助手)/)) {
                  item.remove();
                  log.success("删除广告 ==> 百度APP内打开|百度手机助手");
                }
              });
            }

            /* 添加CSDN下载标识 */
            if (
              searchArticleOriginal_link.match(
                /^http(s|):\/\/(download.csdn.net|www.iteye.com\/resource)/g
              )
            ) {
              HandleItemURL.addCSDNFlag(item);
            }
          });
        },
        /**
         * 重定向顶部的链接，如全部、视频、图片、贴吧、咨询...
         */
        redirectTopLink() {
          document.querySelectorAll(".se-head-tablink a").forEach((item) => {
            if (
              item.hasAttribute("data-sflink") &&
              !utils.isNull(item.getAttribute("data-sflink")) &&
              HandleItemURL.isBaiDuTransferStation(item.getAttribute("href")) &&
              item.getAttribute("href") !== item.getAttribute("data-sflink")
            ) {
              /* log.success(
                "重定向顶部按钮: " + item.outerText.trim(),
                "#ba00f8"
              ); */
              item.href = item.getAttribute("data-sflink");
            }
          });
        },
        /**
         * 删除script标签中的百度APP提示
         */
        replaceScriptBaiDuTip() {
          document.querySelectorAll("script").forEach((item) => {
            if (
              item.innerText.match(/define\(\"@molecule\/aftclk\/index\",/g)
            ) {
              item.remove();
              log.success("删除广告 ==> script元素 跳转百度app提示");
            }
          });
        },
        /**
         * 替换链接
         * @returns {Promise}
         */
        async replaceLink() {
          /** @type {HTMLDivElement} */
          let searchResultList = Array.from(
            document.querySelectorAll(".c-result.result")
          );
          for (const searchResultItem of searchResultList) {
            let resultItemOriginURL =
              HandleItemURL.parseDOMAttrOriginUrl(searchResultItem);
            /* 根据已获取的真实链接取值 */
            if (utils.isNull(resultItemOriginURL)) {
              /* 未取到值 */
              continue;
            }
            let articleElement = searchResultItem.querySelector("article");
            /* 不处理没有article标签的元素 */
            if (!articleElement) {
              continue;
            }
            /* 移除属性rl-link-data-click，猜测该属性是用于点击事件触发 */
            articleElement.removeAttribute("rl-link-data-click");
            /* ivk应该是invoke缩写，可能是调用跳转百度APP */
            articleElement.removeAttribute("rl-link-data-ivk");
            /* 不对黑名单链接进行处理 */
            if (HandleItemURL.isBlackList(resultItemOriginURL)) {
              log.error("黑名单链接不进行替换👉" + resultItemOriginURL);
              continue;
            }

            if (
              searchResultItem.getAttribute("tpl") === "wenda_abstract" &&
              searchResultItem.getAttribute("preventClick") == null
            ) {
              /* 该item为搜索智能生成该为点击该块，获取url进行跳转 */
              searchResultItem.setAttribute("preventClick", "true");
              DOMUtils.on(searchResultItem, "click", function (event) {
                utils.preventEvent(event);
                let clickNode = event.target;
                if (
                  clickNode.localName &&
                  clickNode.localName === "sup" &&
                  clickNode.getAttribute("rl-type") === "stop"
                ) {
                  return;
                } else {
                  window.stop();
                  window.location.href = decodeURI(resultItemOriginURL);
                }
              });
              continue;
            }

            /* 视频 */
            if (
              resultItemOriginURL.match(
                /^http(s|):\/\/www.internal.video.baidu.com/g
              )
            ) {
              let internalVideo = decodeURI(
                articleElement.getAttribute("rl-link-data-log")
              );
              let internalVideoMatch = internalVideo.match(
                /\/sf\?pd=video_pag(.*?)={/g
              );
              if (internalVideoMatch) {
                internalVideoMatch = internalVideoMatch[0];
                let newinternalVideo = internalVideoMatch.substring(
                  0,
                  internalVideoMatch.length - 2
                );
                resultItemOriginURL = newinternalVideo;
                log.info(`视频链接 ${newinternalVideo}`);
              }
            }
            /* 替换链接 */
            HandleItemURL.setArticleOriginUrl(
              searchResultItem,
              resultItemOriginURL
            );
            articleElement.setAttribute("rl-link-href", resultItemOriginURL);
          }
        },
        /**
         * 替换链接-vsearch
         */
        replaceVSearchLink() {
          document
            .querySelectorAll("#realtime-container  div:not([class])")
            .forEach((element) => {
              let linkElement = element.querySelector("a");
              if (linkElement.hasAttribute("data-sf-visited")) {
                let dataSfVisited = linkElement.getAttribute("data-sf-visited");
                if (dataSfVisited !== linkElement.href) {
                  linkElement.href = dataSfVisited;
                  log.success("替换链接  " + dataSfVisited);
                }
              }
            });
        },
      };

      const HandleEveryOneSearch = {
        /**
         * 是否重构大家都在搜
         */
        refactorEveryoneIsStillSearching: PopsPanel.getValue(
          "baidu_search_refactor_everyone_is_still_searching",
          false
        ),
        /**
         * 处理底部的
         * @param {NodeList} bottomElement
         */
        handleBottom(bottomElement) {
          bottomElement.forEach((item) => {
            if (item.hasAttribute("gm-refactor-everyone-search-bottom")) {
              return;
            }
            item.removeAttribute("class");
            item.removeAttribute("id");
            item.setAttribute("gm-refactor-everyone-search-bottom", true);
            item
              .querySelectorAll(".rw-list-container .rw-list-new")
              .forEach((searchItemEle) => {
                let searchText = searchItemEle.textContent.trim();
                searchItemEle.innerHTML = `
                <a href="javascript:;" onclick="return false;" target="_self" class="whitesev-gm-refactor-everyone-searching">
                  <span>${searchText}</span>
                </a>`;
                searchItemEle.style.setProperty("padding", "0.06rem");
              });
            item.querySelector("div.c-line-clamp1")?.remove();
            if (!item.closest("#results")) {
              document.querySelector("#results").appendChild(item);
            }
            DOMUtils.on(item, "click", "div.rw-list-new", function (event) {
              let searchText = event.target
                .querySelector("span")
                .textContent.trim();
              log.success("底部 点击大家还在搜 ==> " + searchText);
              utils.preventEvent(event);
              window.location.href = `https://m.baidu.com/s?word=${event.target.textContent.trim()}`;
            });
          });
        },
        /**
         * 处理中间的
         * @param {NodeList} centerElement
         */
        handleCenter(centerElement) {
          centerElement.forEach((recommendElement) => {
            if (
              recommendElement.hasAttribute(
                "gm-refactor-everyone-search-center"
              )
            ) {
              return;
            }
            if (
              !recommendElement.querySelector("div.c-gap-inner-bottom-small") &&
              !recommendElement.querySelector("div.cos-row div.cos-col")
            ) {
              return;
            }
            recommendElement.setAttribute(
              "gm-refactor-everyone-search-center",
              true
            );
            let rwListContainerHTML = "";
            let innerBottomSmallElementList = recommendElement.querySelectorAll(
              "div.c-gap-inner-bottom-small"
            );
            if (!innerBottomSmallElementList.length) {
              innerBottomSmallElementList = recommendElement.querySelectorAll(
                "div.cos-row div.cos-col"
              );
            }
            innerBottomSmallElementList.forEach((item) => {
              let searchText = item.textContent.trim();
              rwListContainerHTML += `
              <div class="rw-list-new rw-list-new2" style="padding: 0.06rem;width: 49%;">
                <a href="javascript:;" onclick="return false;" target="_self" class="whitesev-gm-refactor-everyone-searching">
                  <span>${searchText}</span>
                </a>
              </div>`;
            });
            recommendElement.innerHTML = `
            <div m-service="relative" data-tpl="san" id="relativewords" class="se-relativewords c-container se-relativewords-new c-bg-color-white">
              <div class="rw-little-title">
                <div class="c-row">
                  <div class="c-color little-title c-span10 c-row-youth c-row-gap-zero-two-youth c-fwb">大家还在搜</div>
                  <div class="func-btn">
                    <div class="func-btn-bg"><i class="c-icon c-color-gray"></i></div>
                  </div>
                </div>
              </div>
              <div class="rw-list-container rw-list-container2" style="
              display: inline-table;display: -webkit-inline-box;
          ">${rwListContainerHTML}</div>
            </div>`;
            DOMUtils.on(
              recommendElement,
              "click",
              "div.rw-list-new",
              function (event) {
                let searchText = event.target
                  .querySelector("span")
                  .textContent.trim();
                log.success("中间 点击大家还在搜 ==> " + searchText);
                utils.preventEvent(event);
                window.location.href = `https://m.baidu.com/s?word=${searchText}`;
              }
            );
          });
        },
      };

      /* unsafeWindow.handleItemURL = handleItemURL; */
      /**
       * 点击输入框，输入其它文字，有提示，禁止百度篡改，且极大地增加搜索速度
       */
      const HandleInputEvent = {
        init() {
          let suggestListSelector = "#se-box .suggest-content";
          let suggestListBtnSelectorList = "#se-box .suggest-content button";
          let suggestList2Selector = "#se-box2 .suggest-content";
          let suggestListBtn2SelectorList = "#se-box2 .suggest-content button";
          let suggestList_HOME_Selector = "#index-box .suggest-content";
          let suggestListBtn_HOME_SelectorList =
            "#index-box .suggest-content button";
          let searchInputSelector = "#kw";
          let searchInput2Selector = "#kw2";
          let searchBtnSelector = "#se-bn";
          let searchBtn2Selector = "#se-bn2";
          let searchInput_HOME_Selector = "#index-kw";
          let searchBtn_HOME_Selector = "#index-bn";
          /* 顶部搜索输入框点击后的搜索建议 */
          utils.waitNode(suggestListSelector).then((element) => {
            utils.mutationObserver(element, {
              callback: () => {
                HandleInputEvent.mutationObserverFunction(
                  suggestListBtnSelectorList
                );
              },
              config: { childList: true, attributes: true },
            });
          });
          /* 底部搜索输入框点击后的搜索建议 */
          utils.waitNode(suggestList2Selector).then((element) => {
            utils.mutationObserver(element, {
              callback: () => {
                HandleInputEvent.mutationObserverFunction(
                  suggestListBtn2SelectorList
                );
              },
              config: { childList: true, attributes: true },
            });
          });
          /* 百度主页的搜索输入框点击后的搜索建议 */
          utils.waitNode(suggestList_HOME_Selector).then((element) => {
            utils.mutationObserver(element, {
              callback: () => {
                HandleInputEvent.mutationObserverFunction(
                  suggestListBtn_HOME_SelectorList
                );
              },
              config: { childList: true, attributes: true },
            });
          });
          /* 顶部搜索按钮 */
          DOMUtils.on(searchBtnSelector, "click", function (event) {
            return HandleInputEvent.searchBtnJump(
              event,
              document.querySelector(searchInputSelector)
            );
          });
          /* 顶部搜索输入框 */
          DOMUtils.on(searchInputSelector, "keydown", function (event) {
            return HandleInputEvent.enterKeyDownEvent(
              event,
              document.querySelector(searchInputSelector)
            );
          });
          /* 底部搜索按钮 */
          DOMUtils.on(searchBtn2Selector, "click", function (event) {
            return HandleInputEvent.searchBtnJump(
              event,
              document.querySelector(searchInput2Selector)
            );
          });
          /* 底部部搜索输入框 */
          DOMUtils.on(
            document.querySelector(searchInput2Selector),
            "keydown",
            function (event) {
              return HandleInputEvent.enterKeyDownEvent(
                event,
                document.querySelector(searchInput2Selector)
              );
            }
          );
          /* 百度主页搜索按钮 */
          DOMUtils.on(searchBtn_HOME_Selector, "click", function (event) {
            return HandleInputEvent.searchBtnJump(
              event,
              document.querySelector(searchInput_HOME_Selector)
            );
          });
          /* 百度主页搜索输入框 */
          DOMUtils.on(searchInput_HOME_Selector, "keydown", function (event) {
            return HandleInputEvent.enterKeyDownEvent(
              event,
              document.querySelector(searchInput_HOME_Selector)
            );
          });
        },
        /**
         * 设置搜索建议自定义click事件
         * @param {string} elementSelector
         */
        mutationObserverFunction(elementSelector) {
          log.success("设置搜索建议自定义click事件");
          document.querySelectorAll(elementSelector).forEach((item) => {
            DOMUtils.on(item, "click", function (event) {
              utils.preventEvent(event);
              window?.stop();
              let searchText = event.target.textContent;
              let redirectURL =
                window.location.origin + "/s?word=" + searchText;
              log.success("点击按钮跳转搜索 -> " + searchText);
              log.success(redirectURL);
              window.location.href = redirectURL;
              return false;
            });
          });
        },
        /**
         * 搜索按钮点击跳转
         * @param {Event} event
         * @param {Element} searchInputElement
         * @returns
         */
        searchBtnJump(event, searchInputElement) {
          utils.preventEvent(event);
          window?.stop();
          let redirectURL =
            window.location.origin + "/s?word=" + searchInputElement.value;
          log.success("点击按钮跳转搜索 -> " + searchInputElement.value);
          log.success(redirectURL);
          window.location.href = redirectURL;
          return false;
        },
        /**
         * 判决回车搜索事件
         * @param {Event} event
         * @param {Element} searchInputElement
         * @returns
         */
        enterKeyDownEvent(event, searchInputElement) {
          if (event.keyCode === 108 || event.keyCode === 13) {
            window?.stop();
            utils.preventEvent(event);
            let redirectURL =
              window.location.origin + "/s?word=" + searchInputElement.value;
            log.success("回车键跳转搜索 -> " + searchInputElement.value);
            log.success(redirectURL);
            window.location.href = redirectURL;
            return false;
          }
          return true;
        },
      };

      /**
       * 自动加载下一页
       */
      const HandleNextPage = {
        /**
         * 当前页
         */
        currentPage: 1,
        /**
         * 观察器
         * @type {IntersectionObserver}
         */
        intersectionObserver: null,
        init() {
          this.initPageLineCSS();
          loadingView.initLoadingView(true);
          DOMUtils.after(
            document.querySelector("#page-controller"),
            loadingView.getLoadingViewElement()
          );
          this.setNextPageLoadingObserver();
        },
        /**
         * 设置滚动事件
         */
        setNextPageLoadingObserver() {
          let isLoadingNextPage = false;
          if (typeof IntersectionObserver === "undefined") {
            DOMUtils.on(
              document,
              "scroll",
              void 0,
              async () => {
                if (isLoadingNextPage) {
                  return;
                }
                if (!utils.isNearBottom(window.innerHeight / 3)) {
                  return;
                }
                isLoadingNextPage = true;
                await this.scrollEvent();
                await utils.sleep(150);
                isLoadingNextPage = false;
              },
              {
                capture: true,
                passive: true,
                once: false,
              }
            );
          } else {
            this.intersectionObserver = new IntersectionObserver(
              async (entries) => {
                if (!isLoadingNextPage && entries[0].isIntersecting) {
                  isLoadingNextPage = true;
                  await this.scrollEvent();
                  isLoadingNextPage = false;
                }
              },
              { threshold: 0 }
            );
            this.intersectionObserver.observe(loadingView.loadingViewElement);
          }
        },
        /**
         * 移除滚动事件
         */
        removeNextPageLoadingObserver() {
          if (typeof IntersectionObserver === "undefined") {
            DOMUtils.off(
              document,
              "scroll",
              void 0,
              void 0,
              {
                capture: true,
              },
              (value) => {
                return value.originCallBack
                  .toString()
                  .includes("isLoadingNextPage");
              }
            );
            loadingView.destory();
            log.info("取消监听：scroll", "#f400ff");
          } else {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = null;
            loadingView.destory();
            log.info("取消观察器：intersectionObserver", "#f400ff");
          }
        },
        /**
         * 滚动事件
         * @async
         */
        async scrollEvent() {
          log.success(`正在加载第 ${HandleNextPage.currentPage} 页`);
          let nextPageUrl =
            document.querySelector(".new-nextpage")?.getAttribute("href") ||
            document.querySelector(".new-nextpage-only")?.getAttribute("href");
          if (!nextPageUrl) {
            log.warn("获取不到下一页，怀疑已加载所有的搜索结果");
            HandleNextPage.removeNextPageLoadingObserver();
            return;
          }
          let params_pn = new URL(nextPageUrl).search.match(/[0-9]+/);
          log.info(
            `正在请求${
              params_pn.length === 0
                ? "第 10 条"
                : "第 " + parseInt(params_pn[0]) + " 条"
            }数据: ${nextPageUrl}`
          );
          HandleNextPage.currentPage = parseInt(params_pn[0] / 10);
          loadingView.setText("Loading...", true);
          let getResp = await httpx.get({
            url: nextPageUrl,
            fetch: true,
          });
          let respData = getResp.data;
          if (getResp.status) {
            log.success("响应的finalUrl: " + respData["finalUrl"]);
            let nextPageHTMLNode = DOMUtils.parseHTML(
              respData.responseText,
              true,
              true
            );
            let scriptAtomData = DOMUtils.createElement("div");
            nextPageHTMLNode
              .querySelectorAll("script[id^=atom-data]")
              .forEach((item) => {
                scriptAtomData.appendChild(item);
              });
            let nextPageScriptOriginUrlMap =
              HandleItemURL.parseScriptDOMOriginUrlMap(scriptAtomData);
            HandleItemURL.originURLMap.concat(nextPageScriptOriginUrlMap);

            nextPageHTMLNode
              .querySelectorAll("style[data-vue-ssr-id]")
              .forEach((item) => {
                /* 插入vue打包的css需重新引入 */
                let dataVueSsrId = "data-vue-ssr-id";
                let dataVueSsrIdValue = item.getAttribute(dataVueSsrId);
                if (
                  utils.isNull(dataVueSsrIdValue) ||
                  !document.querySelector(
                    `style[data-vue-ssr-id="${dataVueSsrIdValue}"]`
                  )
                ) {
                  let cssDOM = GM_addStyle(item.innerHTML);
                  cssDOM.setAttribute("data-vue-ssr-id", dataVueSsrIdValue);
                  log.info(["插入Vue的CSS", cssDOM]);
                }
              });

            let searchResultDOM =
              nextPageHTMLNode.querySelectorAll(".c-result.result");
            let nextPageControllerDOM =
              nextPageHTMLNode.querySelector("#page-controller");
            let currentResultsDOM = document.querySelector("#results");
            if (nextPageControllerDOM) {
              /* 用于划分显示分页 */
              currentResultsDOM.appendChild(
                HandleNextPage.getPageLineElement(HandleNextPage.currentPage)
              );
              /* 每一条搜索结果拼接在后面 */
              searchResultDOM.forEach((item) => {
                currentResultsDOM.appendChild(item);
              });
              DOMUtils.html(
                document.querySelector("#page-controller"),
                nextPageControllerDOM.innerHTML
              );
            } else {
              log.info("已加载所有的搜索结果");
              HandleNextPage.removeNextPageLoadingObserver();
            }
            if (PopsPanel.getValue("baidu_search_sync_next_page_address")) {
              window.history.pushState("forward", null, nextPageUrl);
            }
            /* 处理下一页的【大家还在搜】 */
            if (HandleEveryOneSearch.refactorEveryoneIsStillSearching) {
              HandleEveryOneSearch.handleBottom(
                nextPageHTMLNode.querySelectorAll("#page-relative")
              );
            }
          } else if (getResp.type === "onerror") {
            if (utils.isNull(nextPageUrl)) {
              log.error("未获取到下一页的url");
            } else {
              log.error("加载失败 👇");
              loadingView.setText("加载失败");
            }
            log.error(respData);
          } else if (getResp.type === "ontimeout") {
            log.error("请求超时 👇");
            loadingView.setText("请求超时");
            log.error(respData);
          } else {
            log.error("未知错误");
            loadingView.setText("未知错误");
            log.error(respData);
          }
        },
        /**
         * 初始化页码的CSS
         */
        initPageLineCSS() {
          GM_addStyle(`
          .whitesev-page-info{-webkit-tap-highlight-color:transparent}
          .whitesev-page-info .whitesev-new-pagenav{display:block;width:auto;color:#333;z-index:1;font-weight:700;text-decoration:none;position:relative;height:52px;line-height:52px}
          .whitesev-page-info .whitesev-new-pagenav{margin:.08rem;background:#fff;word-wrap:break-word;border:0;border-radius:.06rem;text-align:center;text-align:-webkit-center}
          .whitesev-page-info p::before{content:"第";margin-right:10px}
          .whitesev-page-info p::after{content:"页";margin-left:10px}
          `);
        },
        /**
         * 获取自定义页码元素
         * @param {string|number} _pageText_ 页码
         * @returns {HTMLElement}
         */
        getPageLineElement(_pageText_) {
          return DOMUtils.createElement("div", {
            className: "whitesev-page-info result-op",
            innerHTML: `
              <div class="whitesev-new-pagenav">
                <p>${_pageText_}</p>
              </div>
            `,
          });
        },
      };

      /**
       * 简单UA-自动点击下一页
       */
      const HandleNextPage_SearchCraft = {
        /**
         * 观察器
         * @type {IntersectionObserver}
         */
        intersectionObserver: null,
        init() {
          let isSearchCraft = navigator?.userAgent?.includes("SearchCraft");
          log.success(
            `判断是否是SearchCraft：${
              isSearchCraft
                ? GM_Menu.getEnableTrueEmoji()
                : GM_Menu.getEnableFalseEmoji()
            }`
          );
          if (isSearchCraft) {
            this.setNextPageInterSectionObserver();
          }
        },
        /**
         * 设置滚动事件
         */
        setNextPageInterSectionObserver() {
          let isLoadingNextPage = false;
          let nextPageElement = document.querySelector(
            ".infinite-load-wrap .se-infiniteload-text"
          );
          if (typeof IntersectionObserver === "undefined") {
            DOMUtils.on(
              document,
              "scroll",
              void 0,
              async () => {
                if (isLoadingNextPage) {
                  return;
                }
                if (!utils.isNearBottom(window.innerHeight / 3)) {
                  return;
                }
                isLoadingNextPage = true;
                nextPageElement = document.querySelector(
                  ".infinite-load-wrap .se-infiniteload-text"
                );
                await this.scrollEvent(nextPageElement);
                await utils.sleep(150);
                isLoadingNextPage = false;
              },
              {
                capture: true,
                passive: true,
                once: false,
              }
            );
          } else {
            this.intersectionObserver = new IntersectionObserver(
              async (entries) => {
                if (!isLoadingNextPage && entries[0].isIntersecting) {
                  isLoadingNextPage = true;
                  await this.scrollEvent(entries[0].target);
                  isLoadingNextPage = false;
                }
              },
              { threshold: 0 }
            );
            this.intersectionObserver.observe(nextPageElement);
          }
        },
        /**
         * 移除滚动事件
         */
        removeNextPageInterSectionObserver() {
          if (typeof IntersectionObserver === "undefined") {
            DOMUtils.off(
              document,
              "scroll",
              void 0,
              void 0,
              {
                capture: true,
              },
              (value) => {
                return value.originCallBack
                  .toString()
                  .includes("isLoadingNextPage");
              }
            );
            log.info("取消监听：scroll", "#f400ff");
          } else {
            this.intersectionObserver?.disconnect();
            this.intersectionObserver = null;
            log.info("取消观察器：intersectionObserver", "#f400ff");
          }
        },
        /**
         * 滚动事件
         * @async
         */
        async scrollEvent(nextPageElement) {
          let elementText =
            nextPageElement.textContent || nextPageElement.innerText;
          if (elementText.includes("更多结果")) {
            log.success("点击【更多结果】");
            nextPageElement.click();
            await utils.sleep(500);
          } else if (elementText.includes("到底了 没有更多内容了")) {
            log.error("到底了 没有更多内容了，移除滚动监听");
            HandleNextPage_SearchCraft.removeNextPageInterSectionObserver();
          }
        },
      };
      /**
       * 处理劫持
       */
      const HandleHijack = {
        init() {
          if (PopsPanel.getValue("baidu_search_hijack_define")) {
            OriginPrototype.Object.defineProperty(unsafeWindow, "define", {
              get(...args) {
                return function (...args) {};
              },
            });
          }
          if (PopsPanel.getValue("baidu_search_hijack__onClick")) {
            BaiduHijack.hijack_onClick("baidu_search_hijack__onClick");
          }
          if (PopsPanel.getValue("baidu_search_hijack_openbox")) {
            BaiduHijack.hijackOpenBox();
          }
          if (
            PopsPanel.getValue("baidu_search_hijack_scheme") ||
            PopsPanel.getValue("baidu_search_hijack_copy")
          ) {
            if (
              PopsPanel.getValue("baidu_search_hijack_scheme") &&
              PopsPanel.getValue("baidu_search_hijack_copy")
            ) {
              BaiduHijack.hijackFunctionApply("copy scheme");
            } else {
              if (PopsPanel.getValue("baidu_search_hijack_scheme")) {
                BaiduHijack.hijackFunctionApply("scheme");
              }
              if (PopsPanel.getValue("baidu_search_hijack_copy")) {
                BaiduHijack.hijackFunctionApply("copy");
              }
            }
          }
          if (PopsPanel.getValue("baidu_search_hijack_setTimeout")) {
            BaiduHijack.hijackSetTimeout("getGeoLocation|loopPlay()");
          }
        },
      };

      /**
       * 处理百度搜索自定义的样式添加
       */
      const HandleUserOwnStyle = {
        getUserStyle() {
          return PopsPanel.getValue("baidu-search-user-style", "");
        },
      };
      /**
       * 百度健康
       */
      const BaiduHeadlth = {
        init() {
          if (PopsPanel.getValue("baidu_search_headlth_shield_other_info")) {
            this.shieldOtherInfo();
          }
          if (
            PopsPanel.getValue("baidu_search_headlth_shield_bottom_toolbar")
          ) {
            this.shieldServiceButtonsRow();
          }
        },
        /**
         * 【屏蔽】底部其它信息
         */
        shieldOtherInfo() {
          GM_addStyle(`
          article[class] > div[class^="index_container"]{
            display: none !important;
          }
          `);
        },
        /**
         * 【屏蔽】底部工具栏
         */
        shieldServiceButtonsRow() {
          GM_addStyle(`
            article[class] > div[class^="index_healthServiceButtonsRow"]{
              display: none !important;
            }
            `);
        },
      };
      const BaiDuSearch = {
        init() {
          if (PopsPanel.getValue("baidu_search_hijack__onClick_to_blank")) {
            this.openResultBlank();
          }
        },
        /**
         * 新标签页打开
         */
        openResultBlank() {
          function globalResultClickEvent(event) {
            let url = null;
            let srcElement = event.srcElement;
            let eventTarget = event.target;
            if (srcElement) {
              if (srcElement.closest("a")) {
                let anchorNode = srcElement.closest("a");
                if (utils.isNotNull(anchorNode.href)) {
                  log.info([
                    "链接来自上层a元素",
                    {
                      event,
                      srcElement,
                      anchorNode,
                    },
                  ]);
                  url = anchorNode.href;
                }
              } else if (srcElement.closest("[rl-link-href]")) {
                let rlLinkHrefNode = srcElement.closest("[rl-link-href]");
                let rlLinkHref = rlLinkHrefNode.getAttribute("rl-link-href");
                if (utils.isNotNull(rlLinkHref)) {
                  log.info([
                    "链接来自上层含有[rl-link-href]属性的元素",
                    {
                      event,
                      srcElement,
                      rlLinkHrefNode,
                    },
                  ]);
                  url = rlLinkHref;
                }
              }
            } else {
              let $resultNode = eventTarget.querySelector("article");
              url = $resultNode.getAttribute("rl-link-href");
              log.info([
                "链接来自顶层向下寻找article元素",
                { event, eventTarget, $resultNode },
              ]);
            }
            if (utils.isNull(url)) {
              log.info([
                "未找到有效链接",
                { event, eventTarget, srcElement, url },
              ]);
              return;
            }
            /* 阻止事件传递 */
            utils.preventEvent(event);
            log.success(["新标签页打开-来自click事件", { url }]);
            window.open(url, "_blank");
          }
          DOMUtils.on(
            document,
            "click",
            ".c-result.result",
            globalResultClickEvent
          );
        },
      };

      GM_addStyle(HandleUserOwnStyle.getUserStyle());
      log.info("插入用户CSS规则");

      if (Router.isSearchBh()) {
        /* 百度健康 */
        GM_addStyle(this.css.searchBaiduHealth);
        log.info("插入CSS规则");
        BaiduHeadlth.init();
      } else {
        HandleHijack.init();
        BaiDuSearch.init();
        /* 默认的百度搜索 */
        GM_addStyle(this.css.search);
        log.info("插入CSS规则");
        DOMUtils.ready(function () {
          HandleItemURL.originURLMap =
            HandleItemURL.parseScriptDOMOriginUrlMap(document);
          let baidu_search_handle_search_result_enable = PopsPanel.getValue(
            "baidu_search_handle_search_result",
            true
          );
          if (baidu_search_handle_search_result_enable) {
            let searchUpdateRealLink = new utils.LockFunction(async () => {
              try {
                await HandleItemURL.replaceLink();
              } catch (error) {
                log.error(["替换为真实链接失败", error]);
              }
            }, 600);
            let removeAdsLockFunction = new utils.LockFunction(
              HandleItemURL.removeAds,
              600
            );
            utils.waitNode("div#page.search-page").then((element) => {
              utils.mutationObserver(element, {
                callback: async () => {
                  if (baidu_search_handle_search_result_enable) {
                    await searchUpdateRealLink.run();
                  }
                  removeAdsLockFunction.run();
                },
                config: {
                  childList: true,
                  subtree: true,
                },
              });
            });

            if (baidu_search_handle_search_result_enable) {
              searchUpdateRealLink.run();
            }
            removeAdsLockFunction.run();
          }

          utils
            .waitNodeList("style[class^='vsearch-sigma-style']")
            .then((nodeList) => {
              /* 这个style标签就是某些搜索置顶的卡片 */
              log.success(["删除sigma的CSS", nodeList]);
              nodeList.forEach((item) => item.remove());
            });

          if (PopsPanel.getValue("baidu_search_redirect_top_link")) {
            HandleItemURL.redirectTopLink();
          }
          HandleItemURL.replaceScriptBaiDuTip();
          if (PopsPanel.getValue("baidu_search_refactoring_input_boxes")) {
            HandleInputEvent.init();
          }
          if (
            PopsPanel.getValue("baidu_search_automatically_expand_next_page")
          ) {
            HandleNextPage.init();
          } else if (
            PopsPanel.getValue(
              "baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua"
            )
          ) {
            HandleNextPage_SearchCraft.init();
          }
          if (
            utils.startsWith(
              window.location.href,
              "https://(m[0-9]{0,2}|www).baidu.com/sf/vsearch"
            )
          ) {
            utils
              .waitNode("#realtime-container .c-infinite-scroll")
              .then((element) => {
                let replaceVSearchLinkLonkFunction = new utils.LockFunction(
                  HandleItemURL.replaceVSearchLink,
                  600
                );
                utils.mutationObserver(element, {
                  config: {
                    subtree: true,
                    childList: true,
                  },
                  callback: replaceVSearchLinkLonkFunction.run,
                });
              });
          }
        });
      }
    },
    /**
     * 百家号
     */
    baijiahao() {
      if (!Router.isBaiJiaHao()) {
        return;
      }
      GM_addStyle(this.css.baijiahao);
      log.info("插入CSS规则");

      const BaiJiaHao = {
        init() {
          if (PopsPanel.getValue("baijiahao_shield_recommended_article")) {
            log.success("【屏蔽】推荐文章");
            this.shieldRecommendArticle();
          }
          if (PopsPanel.getValue("baijiahao_shield_user_comment")) {
            log.success("【屏蔽】用户评论");
            this.shieldUserComment();
          }

          if (PopsPanel.getValue("baijiahao_shield_user_comment_input_box")) {
            log.success("【屏蔽】底部悬浮工具栏");
            this.shieldBottomToolBar();
          }
        },
        shieldRecommendArticle() {
          GM_addStyle(`
          .infinite-scroll-component__outerdiv, 
          div#page_wrapper > div > div:nth-child(5), 
          div:has(+ .infinite-scroll-component__outerdiv), 
          /* 电脑端的左边的按钮-屏蔽 */
          #ssr-content > :last-child , 
          /* 电脑端的右边的推荐-屏蔽 */
          #ssr-content > div:nth-child(2) > div:nth-child(1) > div:nth-child(2){
            display: none !important;
          }
  
          /* 电脑端的文章居中 */
          #ssr-content > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) {
            width: 55% !important;
          }`);
          /* 某些情况下的CSS */
          GM_addStyle(`
          #page_wrapper > div.other > div[class=""]:nth-child(4){
            display: none !important;
          }
          `);
          /* 简单UA&链接参数wfr=spide下的精彩推荐 */
          GM_addStyle(`
          #page_wrapper div.spider > div[class=""]:nth-child(4),
          #page_wrapper div.spider > div[class=""]:nth-child(5){
            display: none !important;
          }`);
          /* Gecko的简单UA下的精彩推荐 */
          GM_addStyle(`
          #page_wrapper .searchCraft > div[class=""]{
            display: none !important;
          }`);
        },
        shieldUserComment() {
          GM_addStyle(`
          #commentModule{
            display: none !important;
          }`);
        },
        shieldBottomToolBar() {
          GM_addStyle(`
          div#wise-invoke-interact-bar{
            display: none !important;
          }`);
        },
      };
      const BaiJiaHaoHijack = {
        init() {
          if (PopsPanel.getValue("baijiahao_hijack_wakeup")) {
            BaiduHijack.hijackFunctionCall_BaiJiaHao_Map();
          }

          if (PopsPanel.getValue("baidu_baijiahao_hijack_iframe")) {
            BaiduHijack.hijackElementAppendChild(function (element) {
              if (
                element.localName === "script" &&
                element?.src?.includes("landing-share")
              ) {
                log.success("阻止加载：" + element.src);
                return true;
              }
            });
          }
          if (PopsPanel.getValue("baidu_baijiahao_hijack_openbox")) {
            BaiduHijack.hijackOpenBox();
          }
        },
      };
      BaiJiaHaoHijack.init();
      BaiJiaHao.init();
    },
    /**
     * 百度贴吧
     * document.querySelector("div.app-view").__vue__
     * + disablePbGuide 是否隐藏顶部导航栏
     * + loading 是否隐藏整个页面的内容（清空）
     * + isVideoThread 该帖子是否是个视频，是的话把帖子变成视频样式
     * + isErrorThread 该帖子是否发生错误(被禁用)，是的话全屏变成显示【贴子不存在或者已被删除】
     * + isNoForumThread 该帖子是否是来自动态
     * + isShowLoginWakeModal 是否显示需要登录的弹窗【继续操作需要登录贴吧账号】
     * + isHitMedicalPost 是否是精选回复的帖子，是的话隐藏顶部的工具栏，且修改帖子主内容的背景（淡蓝色），修改回复的标识为【精选回复】
     * + isPornographicComment 是否隐藏评论
     * + isGreyPage 页面是否变成灰色，包括文字
     * + isFromFengchaoAd 是否是点击广告进的帖子，是的话整个页面被广告提示覆盖【打开贴吧APP，继续浏览】
     * + isAutoInvoke 猜测是自动调用各种唤醒
     * + isShowResourceFixedCard 是否显示底部悬浮的工具栏【资源合集】卡片
     * + slientUpNewConfig 里面应该是各种静默弹窗的配置，存储自localStorage
     *
     *
     * document.querySelector("div.tb-mobile-viewport").__vue_
     * + isShowModal 是否显示需要登录的弹窗【继续操作需要登录贴吧账号】
     */
    tieba() {
      if (!Router.isTieBa()) {
        return;
      }

      /**
       * 贴吧数据信息
       */
      const tiebaData = {
        /**
         * 当前吧名
         */
        forumName: void 0,
        /**
         * 高清图片映射
         */
        imageMap: new Map(),
      };
      /**
       * 贴吧加载评论
       */
      const tiebaCommentConfig = {
        /**
         * 当前页
         */
        page: 1,
        /**
         * 当前最大页
         */
        maxPage: 1,
        /**
         * 楼层数量
         */
        floor_num: 1,
        /**
         * 滚动监听锁
         */
        funcLock: null,
        /**
         * tid
         */
        param_tid: null,
        /**
         * 帖子id
         */
        param_forum_id: null,
        /**
         * 帖子回复的数量
         */
        reply_num: 0,
        /**
         * 进过百度验证的额外安全参数
         */
        extraSearchSignParams: "",
        /**
         * vue根元素
         * @type {HTMLElement}
         */
        vueRootView: null,
        /**
         * 判断是否在底部附近的误差值
         * @type
         */
        isNearBottomValue: 250,

        init() {
          let urlSignParams = new URLSearchParams(window.location.search);
          if (
            urlSignParams.has("p_tk") &&
            urlSignParams.has("p_sign") &&
            urlSignParams.has("p_signature")
          ) {
            log.error("当前页面是经过百度验证后的网站，添加验证参数");
            urlSignParams.forEach((value, key) => {
              if (["pn", "tid", "pid", "fid", "t", "see_lz"].includes(key)) {
                return;
              }
              log.success(`设置额外参数：${key}=${value}`);
              /* tiebaCommentConfig.extraSearchSignParams += `&${key}=${value}`; */
            });
            log.error([
              "百度验证后的参数👇",
              tiebaCommentConfig.extraSearchSignParams,
            ]);
          }
          utils.waitNode(".main-page-wrap").then(() => {
            tiebaCommentConfig.insertLoadingHTML();
          });
          utils
            .waitAnyNode(
              ".recommend-item[data-banner-info]",
              "div.app-view.transition-fade.pb-page-wrapper.mask-hidden .post-item"
            )
            .then(() => {
              DOMUtils.remove(".post-item");
              tiebaCommentConfig.initReplyDialogCSS();
              tiebaCommentConfig.mainPositive();
              tiebaCommentConfig.insertReverseBtn();
              tiebaCommentConfig.insertOnlyLZ();
            });

          utils.waitNodeWithInterval(".app-view", 10000).then(async () => {
            utils
              .waitPropertyByInterval(
                () => {
                  return document.querySelector(".app-view").__vue__;
                },
                () => {
                  return document.querySelector(".app-view").__vue__
                    .isHitMedicalPost;
                },
                void 0,
                10000
              )
              .then(() => {
                document.querySelector(".app-view").__vue__.isHitMedicalPost =
                  !1;
              });
            utils
              .waitPropertyByInterval(
                () => {
                  return document.querySelector(".app-view").__vue__;
                },
                () => {
                  return (
                    typeof document.querySelector(".app-view")?.__vue__?.thread
                      ?.reply_num === "number"
                  );
                },
                void 0,
                10000
              )
              .then(() => {
                tiebaCommentConfig.reply_num =
                  document.querySelector(".app-view").__vue__.thread.reply_num;
                log.success(
                  "当前帖子的回复数量：" + tiebaCommentConfig.reply_num
                );
              });
          });
          /* 此处是百度贴吧帖子的css，应对贴吧前端重新编译文件 */
          GM_addStyle(`
          /* 去除底部高度设定 */
          .pb-page-wrapper{
            margin-bottom: 0 !important;
          }
          .post-item[data-v-74eb13e2] {
              overflow: hidden;
              margin: .16rem .13rem 0;
          }
          .post-item .user-line-post[data-v-74eb13e2] {
              margin-bottom: .06rem;
          }
          .user-line-wrapper[data-v-188c0e84], .user-line[data-v-188c0e84] {
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
          }
          .user-line-wrapper[data-v-188c0e84] {
              -webkit-box-pack: justify;
              -moz-box-pack: justify;
              -webkit-justify-content: space-between;
              -moz-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
          }
          .post-item .content[data-v-74eb13e2] {
              padding-left: .44rem;
          }
          .user-line[data-v-188c0e84] {
              -webkit-box-align: center;
              -moz-box-align: center;
              -webkit-align-items: center;
              -moz-align-items: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-pack: left;
              -moz-box-pack: left;
              -webkit-justify-content: left;
              -moz-justify-content: left;
              -ms-flex-pack: left;
              justify-content: left;
          }
          .user-line-wrapper[data-v-188c0e84], .user-line[data-v-188c0e84] {
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
          }
          .user-line .avatar[data-v-188c0e84] {
              position: relative;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              width: .36rem;
              height: .36rem;
              margin-right: .08rem;
              border-radius: 50%;
              background-repeat: no-repeat;
              background-position: 50%;
              background-size: cover;
              -webkit-box-flex: 0;
              -webkit-flex: none;
              -ms-flex: none;
              flex: none;
          }
          .tbfe-1px-border {
              position: relative;
              border-radius: .08rem;
              font-size: 0;
          }
          .user-line .user-info[data-v-188c0e84] {
              position: relative;
              overflow: hidden;
              -webkit-box-flex: 0;
              -webkit-flex: none;
              -ms-flex: none;
              flex: none;
          }
          .user-line .avatar[data-v-188c0e84]:after {
              border-radius: 50%;
          }
          .tbfe-1px-border:after {
              content: "";
              position: absolute;
              z-index: 100;
              top: 0;
              left: 0;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              border: 1px solid rgba(0,0,0,.12);
              -webkit-transform-origin: 0 0;
              -ms-transform-origin: 0 0;
              transform-origin: 0 0;
              pointer-events: none;
          }
          .user-line .user-info .username[data-v-188c0e84],
          #whitesev-reply-dialog .whitesev-reply-dialog-user-username {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -webkit-align-items: center;
              -ms-flex-align: center;
              align-items: center;
              overflow: hidden;
              font-size: .15rem;
              line-height: .28rem;
              white-space: nowrap;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              font-weight: 400;
          }
          .user-line .user-info .desc-info[data-v-188c0e84] {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -webkit-align-items: center;
              -ms-flex-align: center;
              align-items: center;
              font-size: .12rem;
              line-height: .18rem;
              overflow: hidden;
              white-space: nowrap;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              color: #a3a2a8;
          }
          .user-line .user-info .floor-info[data-v-188c0e84], .user-line .user-info .forum-info[data-v-188c0e84] {
              margin-right: .08rem;
          }
          .post-item .content .post-text[data-v-74eb13e2] {
              display: unset;
              font-size: .16rem;
              line-height: .24rem;
          }
          .thread-text[data-v-ab14b3fe] {
              font-size: .13rem;
              line-height: .21rem;
              text-align: justify;
              word-break: break-all;
          }
          .post-item .content .lzl-post[data-v-74eb13e2] {
              margin-top: .06rem;
          }
          .lzl-post[data-v-5b60f30b] {
              padding: .08rem .12rem;
              background: #f8f7fd;
              border-radius: .08rem;
          }
          .post-item .content .post-split-line[data-v-74eb13e2] {
              margin-top: .12rem;
              background-color: #ededf0;
              height: 1px;
              width: 200%;
              -webkit-transform: scale(.5);
              -ms-transform: scale(.5);
              transform: scale(.5);
              -webkit-transform-origin: top left;
              -ms-transform-origin: top left;
              transform-origin: top left;
          }
          .lzl-post .lzl-post-item[data-v-5b60f30b]:first-child {
              margin-top: 0;
          }
          .lzl-post .lzl-post-item[data-v-5b60f30b] {
              margin-top: .04rem;
          }
          .lzl-post .lzl-post-item .text-box[data-v-5b60f30b] {
              font-size: .13rem;
              line-height: .2rem;
          }
          .lzl-post .lzl-post-item .text-box .link[data-v-5b60f30b] {
              display: -webkit-inline-box;
              display: -webkit-inline-flex;
              display: -ms-inline-flexbox;
              display: inline-flex;
              -webkit-box-align: center;
              -webkit-align-items: center;
              -ms-flex-align: center;
              align-items: center;
              font-weight: 600;
              color: #a4a1a8;
          }
          .lzl-post .lzl-post-item .lzl-post-text[data-v-5b60f30b] {
              display: inline;
          }
          .thread-text[data-v-ab14b3fe] {
              font-size: .13rem;
              line-height: .26rem;
              text-align: justify;
              word-break: break-all;
          }
          .lzl-post .lzl-post-item .text-box .link .landlord[data-v-5b60f30b] {
              width: .28rem;
              height: .28rem;
              margin-left: .04rem;
          }
          .user-line .user-info .username .landlord[data-v-188c0e84],
          #whitesev-reply-dialog .landlord[data-v-188c0e84]{
              width: .28rem;
              height: .28rem;
              margin-left: .04rem
          }
          `);
          GM_addStyle(`
          .thread-text .BDE_Smiley {
              width: .2rem;
              height: .2rem;
              vertical-align: middle;
          }
          .thread-text .BDE_Image{
              margin-top: 8px;
              max-width: 350px;
              cursor: url(//tb2.bdstatic.com/tb/static-pb/img/cur_zin.cur),pointer;
              height: auto;
              width: auto;
              width: 100%;
          }
          .text-content .at{
              font-weight: 600;
              color: #614FBC;
          }`);
          /* 隐藏百度贴吧精选帖子的底部空栏 */
          GM_addStyle(`
          body > div.main-page-wrap > div.app-view.transition-fade.pb-page-wrapper.mask-hidden > div.placeholder,
          div.app-view.transition-fade.pb-page-wrapper.mask-hidden .post-item[data-track]{
            display: none;
          }`);
        },
        /**
         * scroll事件触发 自动加载下一页的评论
         */
        nextPageScrollEvent: async (event) => {
          if (event.jsTrigger) {
            /* js主动触发 */
          } else if (
            !utils.isNearBottom(tiebaCommentConfig.isNearBottomValue)
          ) {
            return;
          }
          loadingView.setText("Loading...", true);
          loadingView.show();
          let timeStamp = Date.now();
          let nextPageUrl = `https://tieba.baidu.com/p/${tiebaCommentConfig.param_tid}?pn=${tiebaCommentConfig.page}${tiebaCommentConfig.extraSearchSignParams}`;
          let nextPageAllCommentUrl = `https://tieba.baidu.com/p/totalComment?t=${timeStamp}&tid=${tiebaCommentConfig.param_tid}&fid=${tiebaCommentConfig.param_forum_id}&pn=${tiebaCommentConfig.page}&see_lz=0${tiebaCommentConfig.extraSearchSignParams}`;
          let pageDOM = await tiebaCommentConfig.getPageComment(nextPageUrl);
          let pageCommentList = await tiebaCommentConfig.getPageCommentList(
            nextPageAllCommentUrl
          );
          if (
            !pageDOM ||
            typeof pageDOM === "string" ||
            !pageCommentList.commentList
          ) {
            loadingView.setText(
              loadingView.setText(
                typeof pageDOM === "string" ? pageDOM : "获取评论失败"
              )
            );
            log.error(pageDOM);
            log.error(pageCommentList);
            tiebaCommentConfig.removeScrollListener();
            return;
          }
          log.info("成功获取下一页评论和楼中楼评论");
          let comments = pageDOM.querySelectorAll(".l_post.l_post_bright");
          comments = Array.from(comments);
          if (tiebaCommentConfig.page == 1) {
            /* 为第一页时，去除第一个，也就是主评论 */
            comments.splice(0, 1);
          }
          comments.forEach((ele) => {
            tiebaCommentConfig.insertNewCommentInnerElement(
              tiebaCommentConfig.getNewCommentInnerElement(ele, pageCommentList)
            );
            tiebaCommentConfig.floor_num += 1;
          });
          if (
            document
              .querySelector(".white-only-lz")
              .classList.contains("white-only-lz-qx")
          ) {
            document.querySelectorAll(".post-item").forEach((ele) => {
              let landlord = ele.getAttribute("landlord");
              if (landlord == "0") {
                ele.classList.add("white-only-lz-none");
              }
            });
          }
          loadingView.hide();
          if (tiebaCommentConfig.page >= tiebaCommentConfig.maxPage) {
            log.info("已加载所有的评论");
            loadingView.setText("已加载所有的评论");
            loadingView.hide();
            tiebaCommentConfig.removeScrollListener();
          }
          tiebaCommentConfig.page++;
        },
        /**
         * scroll事件触发 自动加载上一页的评论
         */
        prevPageScrollEvent: async (event) => {
          if (event.jsTrigger) {
            /* js主动触发 */
          } else if (
            !utils.isNearBottom(tiebaCommentConfig.isNearBottomValue)
          ) {
            return;
          }
          loadingView.setText("Loading...", true);
          loadingView.show();
          let timeStamp = Date.now();
          let pageUrl = `https://tieba.baidu.com/p/${tiebaCommentConfig.param_tid}?pn=${tiebaCommentConfig.page}${tiebaCommentConfig.extraSearchSignParams}`;
          let pageAllCommentUrl = `https://tieba.baidu.com/p/totalComment?t=${timeStamp}&tid=${tiebaCommentConfig.param_tid}&fid=${tiebaCommentConfig.param_forum_id}&pn=${tiebaCommentConfig.page}&see_lz=0${tiebaCommentConfig.extraSearchSignParams}`;
          let pageDOM = await tiebaCommentConfig.getPageComment(pageUrl);
          let pageCommentList = await tiebaCommentConfig.getPageCommentList(
            pageAllCommentUrl
          );
          if (
            !pageDOM ||
            typeof pageDOM === "string" ||
            !pageCommentList.commentList
          ) {
            loadingView.setText(
              loadingView.setText(
                typeof pageDOM === "string" ? pageDOM : "获取评论失败"
              )
            );
            log.error(pageDOM);
            log.error(pageCommentList);
            tiebaCommentConfig.removeScrollListener();
            return;
          }
          log.info("成功获取上一页评论和楼中楼评论");
          let comments = pageDOM.querySelectorAll(".l_post.l_post_bright");
          comments = Array.from(comments);
          if (tiebaCommentConfig.page == 1) {
            /* 为第一页时，去除第一个，也就是主评论 */
            comments.splice(0, 1);
          }
          comments.reverse();
          comments.forEach((element) => {
            tiebaCommentConfig.insertNewCommentInnerElement(
              tiebaCommentConfig.getNewCommentInnerElement(
                element,
                pageCommentList
              )
            );
            tiebaCommentConfig.floor_num++;
          });
          if (
            document
              .querySelector(".white-only-lz")
              .classList.contains("white-only-lz-qx")
          ) {
            document.querySelectorAll(".post-item").forEach((ele) => {
              let landlord = ele.getAttribute("landlord");
              if (landlord == "0") {
                ele.classList.add("white-only-lz-none");
              }
            });
          }
          loadingView.hide();
          if (tiebaCommentConfig.page <= 1) {
            log.info("已加载所有的评论");
            loadingView.setText("已加载所有的评论");
            loadingView.hide();
            tiebaCommentConfig.removeScrollListener();
          }
          tiebaCommentConfig.page--;
        },
        /**
         * 设置自动加载下一页的scrol事件
         */
        setNextPageScrollListener() {
          tiebaCommentConfig.funcLock = new utils.LockFunction(
            tiebaCommentConfig.nextPageScrollEvent,
            this
          );
          document.addEventListener("scroll", tiebaCommentConfig.funcLock.run);
          utils.dispatchEvent(document, "scroll", { jsTrigger: true });
          log.success("scroll监听事件【下一页】");
        },
        /**
         * 设置自动加载上一页的scrol事件
         */
        setPrevPageScrollListener() {
          tiebaCommentConfig.funcLock = new utils.LockFunction(
            tiebaCommentConfig.prevPageScrollEvent,
            this
          );
          document.addEventListener("scroll", tiebaCommentConfig.funcLock.run);
          utils.dispatchEvent(document, "scroll", { jsTrigger: true });
          log.success("scroll监听事件【上一页】");
        },
        /**
         * 移除scoll事件
         */
        removeScrollListener() {
          if (tiebaCommentConfig.funcLock) {
            document.removeEventListener(
              "scroll",
              tiebaCommentConfig.funcLock.run
            );
            log.success("取消绑定scroll", "#f400ff");
          }
        },
        /**
         * 根据dom获取需要插入的评论的html
         * @param {HTMLElement} element
         * @param { {commentList: any[], userList: any[]}[] } pageCommentList
         * @returns {?HTMLElement}
         */
        getNewCommentInnerElement: (element, pageCommentList) => {
          let data_field = utils.toJSON(element.getAttribute("data-field"));
          if (OriginPrototype.Object.keys(data_field).length == 0) {
            return;
          }
          let user_id = data_field["author"]["user_id"];
          let builderId = data_field["content"]["builderId"];

          let userComment = data_field["content"]["content"];
          let userHomeUrl = element
            .querySelector(".p_author_face")
            .getAttribute("href");
          let user_landlord_name = data_field["author"]["user_name"];
          let userName = element.querySelector(".p_author_name");
          if (userName) {
            userName = userName.textContent;
          } else {
            userName = element
              .querySelector(".p_author_face > img")
              .getAttribute("username");
          }

          let userAvatar =
            element
              .querySelector(".p_author_face > img")
              .getAttribute("data-tb-lazyload") ||
            element.querySelector(".p_author_face > img").src;

          let is_landlord = 0;
          if (user_id == builderId) {
            userName =
              userName +
              '<svg data-v-188c0e84="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>';
            is_landlord = 1;
          }
          let ele_tail_wrap = element.querySelector(".post-tail-wrap");
          let user_ip_position = "";
          let user_floor = "";
          let user_comment_time = "1970-1-1 00:00:00";
          if (ele_tail_wrap) {
            let childrenElement =
              ele_tail_wrap.querySelectorAll("span.tail-info");
            let childSpanElementList = Array.from(
              ele_tail_wrap.querySelectorAll("span")
            );
            for (const childSpanElement of childSpanElementList) {
              if (childSpanElement.hasAttribute("class")) {
                continue;
              }
              if (!childSpanElement.textContent.match("来自|禁言")) {
                user_ip_position = childSpanElement.textContent;
                break;
              }
            }
            if (childrenElement.length == 3 || childrenElement.length == 2) {
              user_floor =
                childrenElement[childrenElement.length - 2].textContent;
              user_comment_time =
                childrenElement[childrenElement.length - 1].textContent;
            } else {
              log.error("获取PC端的数据楼层和时间信息失败👇");
              log.error(childrenElement);
              user_floor = "";
              user_comment_time = "";
            }
          } else {
            ele_tail_wrap = element.querySelector(".acore_reply_tail");
            user_ip_position = data_field["content"]["ip_address"];
            /* 评论楼层 */
            user_floor = data_field["content"]["post_no"] + "楼";
            user_comment_time = data_field["content"]["date"];
            if (!userComment) {
              userComment = element.querySelector(".d_post_content").innerHTML;
            }
          }
          /* 结束时间 */
          let currentTime = new Date();
          /* 时间差的毫秒数 */
          let timeDifference =
            currentTime.getTime() -
            new Date(user_comment_time.replace(/-/g, "/")).getTime();

          /* ------------------------------ */

          /* 计算出相差天数 */
          let days = Math.floor(timeDifference / (24 * 3600 * 1000));
          if (days > 0) {
            user_comment_time = days + "天前";
          } else {
            /* 计算天数后剩余的毫秒数 */
            let leave1 = timeDifference % (24 * 3600 * 1000);
            /* 计算出小时数 */
            let hours = Math.floor(leave1 / (3600 * 1000));
            if (hours > 0) {
              user_comment_time = hours + "小时前";
            } else {
              /* 计算相差分钟数 */
              let leave2 = leave1 % (3600 * 1000);
              /* 计算小时数后剩余的毫秒数 */
              let minutes = Math.floor(leave2 / (60 * 1000));
              if (minutes > 0) {
                user_comment_time = minutes + "分钟前";
              } else {
                /* 计算相差秒数 */
                let leave3 = leave2 % (60 * 1000);
                /* 计算分钟数后剩余的毫秒数 */
                let seconds = Math.round(leave3 / 1000);
                user_comment_time = seconds + "秒前";
              }
            }
          }
          if (userAvatar.startsWith("//")) {
            userAvatar = "https:" + userAvatar;
          }
          let userAvatarObj = new URL(userAvatar);
          let userPortrait = data_field["author"]["portrait"];
          if (!userPortrait) {
            let userAvatarObjMatch =
              userAvatarObj.pathname.match(/\/item\/(.+)/i);
            if (userAvatarObjMatch) {
              userPortrait = userAvatarObjMatch[1];
            }
          }
          if (PopsPanel.getValue("baidu_tieba_shield_commnets_baodating")) {
            /* 屏蔽贴吧包打听 */
            if (user_id != null && user_id.toString() === "6421022725") {
              return;
            } else if (
              userPortrait != null &&
              userPortrait
                .toString()
                .includes("tb.1.4c46bb61.pOGb2yswbMUBKOIUpteLvg")
            ) {
              return;
            }
          }
          let post_id = data_field["content"]["post_id"];
          let newUserCommentHTML = "";
          if (pageCommentList.commentList[post_id]) {
            Array.from(
              pageCommentList.commentList[post_id].comment_info
            ).forEach((result) => {
              let u_user_name = result["show_nickname"];
              let u_content = result["content"];
              let u_user_id = result["user_id"];
              let u_user_portrait =
                pageCommentList.userList[u_user_id]["portrait"];
              let u_user_home_url = "/home/main?id=" + u_user_portrait;
              if (builderId == u_user_id) {
                u_user_name +=
                  '<svg data-v-5b60f30b="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>';
              }
              let newInnerHTML = `<div data-v-5b60f30b="" class="lzl-post-item" style="">
                  <div data-v-5b60f30b="" class="text-box">
                    <span data-v-5b60f30b="" class="link username" data-home-url="${u_user_home_url}">${u_user_name}</span>
                    <div data-v-ab14b3fe="" data-v-5b60f30b="" class="thread-text lzl-post-text">
                      <span data-v-ab14b3fe="" class="text-content">${u_content}</span>
                    </div>
                  </div>
                </div>
                `;
              newUserCommentHTML += newInnerHTML;
            });
          }

          if (newUserCommentHTML) {
            newUserCommentHTML = `
            <div data-v-5b60f30b="" data-v-74eb13e2="" class="lzl-post lzl-post" style="max-height: 2.35rem;overflow-y: hidden;">
              ${newUserCommentHTML}
            </div>
            `;
          }
          let newCommentElement = DOMUtils.createElement(
            "div",
            {
              className: "post-item",
              innerHTML: `
              <div
                data-v-188c0e84=""
                data-v-74eb13e2=""
                class="user-line-wrapper user-line-post">
                <div data-v-188c0e84="" class="user-line">
                  <div
                    data-v-188c0e84=""
                    class="tbfe-1px-border avatar"
                    data-home-url="${userHomeUrl}"
                    data-src="${userAvatar}"
                    lazy="loaded"
                    style="background-image: url(${userAvatar});"></div>
                  <div data-v-188c0e84="" class="user-info">
                    <div data-v-188c0e84="" class="username" data-home-url="${userHomeUrl}">
                      ${userName}
                    </div>
                    <p data-v-188c0e84="" class="desc-info">
                      <span data-v-188c0e84="" class="floor-info">
                        ${user_floor}
                      </span>
                      <span data-v-188c0e84="" class="time" style="margin-right: .08rem;">
                        ${user_comment_time}
                      </span>
                      <span data-v-188c0e84="" class="ip">
                        ${user_ip_position}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div data-v-74eb13e2="" class="content">
                <p data-v-ab14b3fe="" data-v-74eb13e2="" class="thread-text post-text">
                  <span data-v-ab14b3fe="" class="text-content">
                    ${userComment}
                  </span>
                </p>
                ${newUserCommentHTML}
                <div data-v-74eb13e2="" class="post-split-line"></div>
              </div>
              `,
              "data-whitesev": {
                userId: user_id,
                userPostId: post_id,
                userPortrait: userPortrait,
                userFloor: parseInt(user_floor),
                userComment: userComment,
                userHomeUrl: userHomeUrl,
                userAvatar: userAvatar,
                userName: userName,
                userCommentTime: user_comment_time,
                userIpPosition: user_ip_position,
                pageCommentList: pageCommentList,
              },
            },
            {
              "data-v-74eb13e2": "",
              "data-v-602e287c": "",
              "data-floor": tiebaCommentConfig.floor_num,
              landlord: is_landlord,
            }
          );
          return newCommentElement;
        },
        /**
         * 根据评论的html插入页面中
         * @param {?Element} newCommentDOM
         */
        insertNewCommentInnerElement: (newCommentDOM) => {
          if (newCommentDOM == null) {
            return;
          }

          /* 评论，点击头像跳转到这个人的空间 */
          newCommentDOM
            .querySelectorAll(".tbfe-1px-border.avatar")
            .forEach((item) => {
              if (item.hasAttribute("data-home-url")) {
                item.onclick = function () {
                  window.open(item.getAttribute("data-home-url"), "_blank");
                };
              }
            });
          /* 评论，点击名字跳转到这个人的空间 */
          newCommentDOM
            .querySelectorAll(".user-info .username")
            .forEach((item) => {
              if (item.hasAttribute("data-home-url")) {
                item.onclick = function () {
                  window.open(item.getAttribute("data-home-url"), "_blank");
                };
              }
            });
          /* 评论的回复，点击头像跳转到这个人的空间 */
          /* newCommentDOM.querySelectorAll(".link.username").forEach((item) => {
            if (item.hasAttribute("data-home-url")) {
              item.onclick = function () {
                window.open(item.getAttribute("data-home-url"), "_blank");
              };
            }
          }); */
          /* 评论的回复的回复，点击头像跳转到这个人的空间 */
          /* newCommentDOM.querySelectorAll("a.at").forEach((item) => {
            item.removeAttribute("onclick");
            item.removeAttribute("onmouseover");
            item.removeAttribute("onmouseout");
            if (item.hasAttribute("portrait")) {
              item.setAttribute(
                "href",
                "/home/main?id=" + item.getAttribute("portrait")
              );
            }
          }); */

          if (document.querySelector(".post-cut-guide")) {
            DOMUtils.before(
              document.querySelector(".post-cut-guide"),
              newCommentDOM
            );
          } else {
            /* 老版帖子 */
            DOMUtils.append(
              document.querySelector(".pb-page-wrapper"),
              newCommentDOM
            );
          }
          /* 如果评论存在不可见的，添加一个 查看全部xx条回复 */
          let lzlPostElement =
            newCommentDOM.querySelector(".lzl-post.lzl-post");
          if (lzlPostElement) {
            let lzlPostElementHeight = DOMUtils.height(lzlPostElement);
            let lzlPostItemList =
              lzlPostElement.querySelectorAll(".lzl-post-item");
            let currentLzlPostElementHeight = 0;
            let addSeeAllReply = false;
            for (const lzlPostItem of lzlPostItemList) {
              currentLzlPostElementHeight += DOMUtils.outerHeight(lzlPostItem);
              if (currentLzlPostElementHeight > lzlPostElementHeight) {
                addSeeAllReply = true;
                break;
              }
            }
            if (addSeeAllReply) {
              let lzlCommentNums =
                newCommentDOM["data-whitesev"]["pageCommentList"][
                  "commentList"
                ][newCommentDOM["data-whitesev"]["userPostId"]]["comment_num"];
              let seeAllReplyElement = DOMUtils.createElement(
                "div",
                {
                  className: "whitesev-see-all-reply",
                  innerHTML: `查看全部${lzlCommentNums}条回复`,
                },
                {
                  style: "color: #6251B3;margin-top: 5px 0 0 10px;",
                }
              );
              DOMUtils.on(seeAllReplyElement, "click", function () {
                lzlPostElement.click();
              });
              DOMUtils.after(lzlPostElement, seeAllReplyElement);
            }
            DOMUtils.on(
              lzlPostElement,
              "click",
              function (event) {
                utils.preventEvent(event);
                log.success(`点击查看全部回复`);
                tiebaCommentConfig.showReplyDialog(lzlPostElement);
              },
              {
                capture: true,
              }
            );
          }
        },
        /**
         * 初始化评论的弹窗的所有设置包括CSS
         */
        initReplyDialogCSS() {
          log.success("初始化回复的弹窗");
          GM_addStyle(`
          /* 主 */
          #whitesev-reply-dialog{
            z-index: 99999;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          /* 背景 */
          .whitesev-reply-dialog-bg{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.5);
            transition-timing-function: ease-in;
            transition-duration: .1s;
            transition-property: background-color,opacity;
          }
          /* 内容容器 */
          .whitesev-reply-dialog-sheet{
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            background-color: #fff;
            transition: .1s ease-in;
            transition-property: transform;
            transform: translate(0,100%);
            border-radius: 10px 10px 0px 0px;
          }
          /* 关闭 */
          .whitesev-reply-dialog-close{
            position: absolute;
          }
          /* 标题 */
          .whitesev-reply-dialog-sheet-title{
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 15px;
            color: #222;
            line-height: 20px;
            text-align: center;
            border-bottom: 1px solid #dbdbdb;
          }
          /* 内容 */
          .whitesev-reply-dialog-sheet-content{
            height: 100%;
            overflow-y: auto;
          }
          /* 内容中主内容和其它内容 */
          .whitesev-reply-dialog-sheet-main-content,
          .whitesev-reply-dialog-sheet-other-content{
            margin: 20px 10px 10px 10px;
          }
          /* 内容中其它内容 */
          .whitesev-reply-dialog-sheet-ohter-content{

          }
          /* 弹出 */
          #whitesev-reply-dialog[data-on] .whitesev-reply-dialog-bg{
            transition-timing-function: ease-in;
            transition-duration: .2s;
          }
          #whitesev-reply-dialog[data-on] .whitesev-reply-dialog-bg{
            background-color: rgba(0,0,0,.5);
          }
          #whitesev-reply-dialog[data-on] .whitesev-reply-dialog-sheet{
            transition: .2s ease-in;
            transform: translate(0,0);
          }

          /* 头像 */
          .whitesev-reply-dialog-avatar {
            position: relative;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            width: .36rem;
            height: .36rem;
            margin-right: .08rem;
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
          
          /* 用户行 */
          .whitesev-reply-dialog-user-line {
              display: flex;
              align-items: center;
          }
          .whitesev-reply-dialog-user-line,
          .whitesev-reply-dialog-user-comment,
          .whitesev-reply-dialog-user-desc-info {
              margin-bottom: 8px;
          }
          /* 评论 */
          .whitesev-reply-dialog-user-comment {
              margin-left: .44rem;
          }
          /* 评论的贴吧自带表情 */
          .whitesev-reply-dialog-user-comment img.BDE_Smiley{
            width: .2rem;
            height: .2rem;
            vertical-align: middle;
          }
          /* 评论的贴吧自己上传的图片 */
          .whitesev-reply-dialog-user-comment img:not(.BDE_Smiley){
            margin-top: 8px;
            max-width: 350px;
            cursor: url(//tb2.bdstatic.com/tb/static-pb/img/cur_zin.cur),pointer;
            height: auto;
            width: auto;
            width: 100%;
          }
          /* 底部信息 */
          .whitesev-reply-dialog-user-desc-info{
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              margin-left: .44rem;
              border-bottom: 1px solid #dfdfdf;
          }
          .whitesev-reply-dialog-user-desc-info span{
              margin-right: .08rem;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -moz-box-align: center;
              -webkit-align-items: center;
              -moz-align-items: center;
              -ms-flex-align: center;
              align-items: center;
              font-size: .12rem;
              line-height: .18rem;
              overflow: hidden;
              white-space: nowrap;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              color: #a3a2a8;
          }
          /* 第xx楼 */
          .whitesev-reply-dialog-user-desc-info span[data-floor-info]::before {
              content:"第"
          }
          .whitesev-reply-dialog-user-desc-info span[data-floor-info]::after {
              content:"楼"
          }
          /* 中间行 */
          .whitesev-reply-dialog-sheet-main-content-bottom-line {
            background: #ebebeb;
            height: 6px;
          }
          /* 隐藏顶部主回复的底部边框 */
          .whitesev-reply-dialog-sheet-main-content .whitesev-reply-dialog-user-desc-info{
              border-bottom: none;
          }
          /* 其它回复中的最后一个 */
          .whitesev-reply-dialog-sheet-other-content > div:last-child{
            
          }
          /* 其它回复的每一项 */
          .whitesev-reply-dialog-sheet-other-content-item{
            margin-top: 12px;
          }
          /* 其它回复的底部边框 */
          .whitesev-reply-dialog-sheet-other-content-item .whitesev-reply-dialog-user-desc-info{
            padding-bottom: 12px;
          }
          /* xx条回复 */
          .whitesev-reply-dialog-sheet-comment-num {
            margin-top: -10px;
            margin-bottom: 20px;
          }
          /* 查看全部xx条回复 */
          .whitesev-see-all-reply{
            padding-top: 10px;
            padding-left: 10px;
          }
          `);
        },
        /**
         * 显示评论的弹窗
         * @param {HTMLElement} element
         */
        showReplyDialog(element) {
          let contentElement = element.closest(
            "div.post-item[data-v-74eb13e2]"
          );
          let data = {};
          if (contentElement && contentElement["data-whitesev"]) {
            data = contentElement["data-whitesev"];
          }
          log.success(["data-whitesev数据", data]);
          /* 当前评论数据信息JSON */
          let currentCommentData =
            data["pageCommentList"]["commentList"][data["userPostId"]][
              "comment_info"
            ];
          log.success(["当前评论数据信息JSON", currentCommentData]);
          /* 楼中楼评论的总共数量 */
          let currentCommentListNum =
            data["pageCommentList"]["commentList"][data["userPostId"]][
              "comment_num"
            ];
          /* 用户信息JSON */
          let userList = data["pageCommentList"]["userList"];
          let mainUserAvatar = data["userAvatar"];
          let otherCommentsHTML = "";
          let userAvatarHostName = new URL(mainUserAvatar).hostname;
          let userAvatarPath = new URL(mainUserAvatar).pathname.split("/")[1];
          let landlordInfo = tiebaBusiness.getLandlordInfo();
          log.success(["头像加密值路径是", userAvatarPath]);
          log.success(["本帖楼主的信息", landlordInfo]);
          currentCommentData.forEach((item) => {
            /* 用户信息 */
            let itemUserInfo = userList[item["user_id"]];
            /* 用户id值 */
            let userPortrait = itemUserInfo["portrait"];
            /* 判断是否是楼主 */
            let isLandlord = Boolean(
              landlordInfo && landlordInfo.id === item["user_id"]
            );
            /* 获取时间差 */
            let itemUserCommentTime =
              utils.getDaysDifference(item["now_time"] * 1000, void 0, "auto") +
              "前";
            /* 用户ip？好像没有 */
            let itemUserCommentIp = "";
            if (item["location"] && item["location"]["name"]) {
              itemUserCommentIp = item["location"]["name"];
            }
            if (userAvatarHostName === "imgsa.baidu.com") {
              userAvatarHostName = "gss0.bdstatic.com";
              userAvatarPath = "6LZ1dD3d1sgCo2Kml5_Y_D3";
            }
            let itemUserAvatar = `https://${userAvatarHostName}/${userAvatarPath}/sys/portrait/item/${userPortrait}`;
            if (userAvatarPath === "sys") {
              itemUserAvatar = itemUserAvatar.replace(
                "/sys/sys/portrait/item/",
                "/sys/portrait/item/"
              );
            }
            otherCommentsHTML += `
            <div class="whitesev-reply-dialog-sheet-other-content-item">
              <div class="whitesev-reply-dialog-user-line" data-portrait="${userPortrait}">
                <div class="whitesev-reply-dialog-avatar" style="background-image: url(${itemUserAvatar});"></div>
                <div class="whitesev-reply-dialog-user-info">
                  <div class="whitesev-reply-dialog-user-username">${
                    item["show_nickname"]
                  }${
              isLandlord
                ? `<svg data-v-188c0e84="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>`
                : ""
            }</div>
                </div>
              </div>
              <div class="whitesev-reply-dialog-user-comment">${
                item["content"]
              }</div>
              <div class="whitesev-reply-dialog-user-desc-info">
                  <span data-time="">${itemUserCommentTime}</span>
                  <span data-ip="">${itemUserCommentIp}</span>
              </div>
            </div>
            `;
          });
          log.success(["显示评论的弹窗", data]);
          let dialog = DOMUtils.createElement("div", {
            id: "whitesev-reply-dialog",
            innerHTML: `
            <div class="whitesev-reply-dialog-bg"></div>
            <div class="whitesev-reply-dialog-sheet" style="height: ${
              document.documentElement.clientHeight * 0.92
            }px;">
              <div class="whitesev-reply-dialog-sheet-title">
                <div class="whitesev-reply-dialog-close">
                  <svg t="1694574625629" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2306" width="20" height="20"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z" fill="#444444" p-id="2307"></path></svg>
                </div>
                ${data.userFloor}楼的回复
              </div>
              <div class="whitesev-reply-dialog-sheet-content">
              <div class="whitesev-reply-dialog-sheet-main-content">
                  <div class="whitesev-reply-dialog-user-line" data-portrait="${
                    data["userPortrait"]
                  }">
                    <div class="whitesev-reply-dialog-avatar" style="background-image: url(${
                      data["userAvatar"]
                    });"></div>
                    <div class="whitesev-reply-dialog-user-info">
                      <div class="whitesev-reply-dialog-user-username">${
                        data["userName"]
                      }</div>
                    </div>
                  </div>
                  <div class="whitesev-reply-dialog-user-comment">${
                    data["userComment"]
                  }</div>
                  <div class="whitesev-reply-dialog-user-desc-info" style="border-bottom: none;">
                      <span data-floor-info="">${data["userFloor"]}</span>
                      <span data-time="">${data["userCommentTime"]}</span>
                      <span data-ip="">${data["userIpPosition"]}</span>
                  </div>
              </div>
              <div class="whitesev-reply-dialog-sheet-main-content-bottom-line"></div>
              <div class="whitesev-reply-dialog-sheet-other-content">
                <div class="whitesev-reply-dialog-sheet-comment-num">${currentCommentListNum}条回复</div>
                ${otherCommentsHTML}
              </div>
              </div>
            </div>
            `,
          });

          let dialogTitleElement = dialog.querySelector(
            ".whitesev-reply-dialog-sheet-title"
          );
          let dialogContentElement = dialog.querySelector(
            ".whitesev-reply-dialog-sheet-content"
          );
          let dialogOhterContentElement = dialog.querySelector(
            ".whitesev-reply-dialog-sheet-other-content"
          );
          /**
           * 设置浏览器历史地址
           */
          function popstateEvent() {
            log.success("触发popstate事件");
            resumeBack();
          }

          /**
           * 禁止浏览器后退按钮
           */
          function banBack() {
            /* 监听地址改变 */
            log.success("监听地址改变");
            tiebaCommentConfig.vueRootView.__vue__.$router.push("/seeLzlReply");
            DOMUtils.on(window, "popstate", popstateEvent);
          }

          /**
           * 允许浏览器后退并关闭小窗
           */
          async function resumeBack() {
            DOMUtils.off(window, "popstate", popstateEvent);
            log.success("浏览器地址后退，并关闭小窗");
            closeDialogByUrlChange();
            while (1) {
              if (
                tiebaCommentConfig.vueRootView.__vue__.$router.history.current
                  .fullPath === "/seeLzlReply"
              ) {
                log.info("后退！");
                tiebaCommentConfig.vueRootView.__vue__.$router.back();
                await utils.sleep(250);
              } else {
                return;
              }
            }
          }

          /**
           * 关闭楼中楼弹窗
           * @param {Event|undefined} event 事件
           */
          function closeDialog() {
            dialog.removeAttribute("data-on");
            DOMUtils.on(dialog, utils.getTransitionEndNameList(), function () {
              DOMUtils.off(dialog, utils.getTransitionEndNameList());
              log.success("关闭楼中楼回复弹窗_click");
              dialog.remove();
              if (PopsPanel.getValue("baidu_tieba_lzl_ban_global_back")) {
                resumeBack();
              }
            });
          }
          /**
           * 关闭楼中楼弹窗(来自url改变)
           */
          function closeDialogByUrlChange() {
            dialog.removeAttribute("data-on");
            DOMUtils.on(dialog, utils.getTransitionEndNameList(), function () {
              DOMUtils.off(dialog, utils.getTransitionEndNameList());
              log.success("关闭楼中楼回复弹窗_urlchange");
              dialog.remove();
            });
          }
          /* 关闭图标的点击事件 */
          DOMUtils.on(
            dialog.querySelector(".whitesev-reply-dialog-close"),
            "click",
            closeDialog
          );
          /* 点击遮罩层则关闭弹窗 */
          DOMUtils.on(
            dialog.querySelector(".whitesev-reply-dialog-bg"),
            "click",
            closeDialog
          );
          /* 处理评论的头像点击新标签页打开主页 */
          DOMUtils.on(
            dialog,
            "click",
            ".whitesev-reply-dialog-avatar",
            function (event) {
              window.open(
                "/home/main?id=" +
                  event.target
                    .closest(".whitesev-reply-dialog-user-line")
                    .getAttribute("data-portrait"),
                "_blank"
              );
            }
          );
          /* 处理评论的名字点击新标签页打开主页 */
          DOMUtils.on(
            dialog,
            "click",
            ".whitesev-reply-dialog-user-info",
            function (event) {
              window.open(
                "/home/main?id=" +
                  event.target
                    .closest(".whitesev-reply-dialog-user-line")
                    .getAttribute("data-portrait"),
                "_blank"
              );
            }
          );
          /* 去除楼中楼回复@的超链接错误跳转 */
          dialog
            .querySelectorAll(".whitesev-reply-dialog-user-comment a[portrait]")
            .forEach((item) => {
              item.setAttribute(
                "href",
                "/home/main?id=" + item.getAttribute("portrait")
              );
              item.removeAttribute("onclick");
              item.removeAttribute("onmouseover");
              item.removeAttribute("onmouseout");
            });
          const lzlLoadingView = new LoadingView(false);
          /* 初始页数为2 */
          let lzlPage = 2;
          /* 处理楼中楼的滚动加载更多回复 */
          let lzlReplyCommentScrollEvent = async function (event) {
            /**
             * @type {HTMLElement}
             */
            let scrollElement = event.target;
            if (
              scrollElement.scrollTop + scrollElement.clientHeight + 50 <
              scrollElement.scrollHeight
            ) {
              return;
            }
            log.success("加载更多回复");
            lzlLoadingView.show();
            let replyInfo = await tiebaCommentConfig.getLzlCommentReply(
              tiebaCommentConfig.param_tid,
              data["userPostId"],
              lzlPage
            );
            log.success(["加载更多回复的数据", replyInfo]);
            if (replyInfo === "暂无更多回复") {
              log.error("暂无更多回复");
              lzlLoadingView.setText("暂无更多回复");
              DOMUtils.off(
                dialog.querySelector(".whitesev-reply-dialog-sheet-content"),
                "scroll"
              );
              log.error("取消绑定楼中楼scroll监听事件【下一页】");
              return;
            } else if (typeof replyInfo === "string") {
              lzlLoadingView.setText(replyInfo);
              return;
            }
            replyInfo["data"].forEach((item) => {
              /* 判断是否是楼主 */
              let isLandlord = false;
              if (landlordInfo) {
                if (landlordInfo.id === item["user_id"]) {
                  isLandlord = true;
                } else if (
                  utils.isNotNull(item["userPortrait"]) &&
                  landlordInfo.portrait.includes(item["userPortrait"])
                ) {
                  /* 用includes是因为landlordInfo.portrait获取到的后面可能会带时间参数?t=1660430754 */
                  isLandlord = true;
                }
              }
              let lastCommentHTML = `
              <div class="whitesev-reply-dialog-sheet-other-content-item">
                <div class="whitesev-reply-dialog-user-line" data-portrait="${
                  item["userPortrait"]
                }">
                  <div class="whitesev-reply-dialog-avatar" style="background-image: url(${
                    item["userAvatar"]
                  });"></div>
                  <div class="whitesev-reply-dialog-user-info">
                    <div class="whitesev-reply-dialog-user-username">
                    ${item["userName"]}
                    ${
                      isLandlord
                        ? `<svg data-v-188c0e84="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>`
                        : ""
                    }
                    </div>
                  </div>
                </div>
                <div class="whitesev-reply-dialog-user-comment">${
                  item["userReplyContent"]
                }</div>
                <div class="whitesev-reply-dialog-user-desc-info">
                    <span data-time="">${item["userReplyTime"]}</span>
                    <span data-ip=""></span>
                </div>
              </div>
              `;
              if (
                scrollElement.querySelector("." + loadingView.config.className)
              ) {
                DOMUtils.before(
                  scrollElement.querySelector(
                    "." + loadingView.config.className
                  ),
                  lastCommentHTML
                );
              } else {
                DOMUtils.append(
                  scrollElement.querySelector(
                    ".whitesev-reply-dialog-sheet-other-content"
                  ),
                  lastCommentHTML
                );
              }
            });
            /* 去除楼中楼回复@的超链接错误跳转 */
            scrollElement
              .querySelectorAll(
                ".whitesev-reply-dialog-user-comment a[portrait]"
              )
              .forEach((item) => {
                item.setAttribute(
                  "href",
                  "/home/main?id=" + item.getAttribute("portrait")
                );
                item.removeAttribute("onclick");
                item.removeAttribute("onmouseover");
                item.removeAttribute("onmouseout");
              });

            if (!replyInfo["nextPage"]) {
              log.error("暂无更多回复");
              lzlLoadingView.setText("暂无更多回复");
              DOMUtils.off(
                dialog.querySelector(".whitesev-reply-dialog-sheet-content"),
                "scroll"
              );
              log.error("取消绑定楼中楼scroll监听事件【下一页】");
              return;
            }
            lzlPage = replyInfo["nextPage"];
          };
          let lzlScrollEventLock = new utils.LockFunction(
            lzlReplyCommentScrollEvent,
            this
          );
          /* 监听楼中楼内滚动 */
          DOMUtils.on(
            dialog.querySelector(".whitesev-reply-dialog-sheet-content"),
            "scroll",
            lzlScrollEventLock.run
          );
          log.success("绑定楼中楼scroll监听事件【下一页】");
          /* 插入楼中楼弹窗 */
          document.body.appendChild(dialog);

          DOMUtils.append(
            dialog.querySelector(".whitesev-reply-dialog-sheet-other-content"),
            lzlLoadingView.getLoadingViewElement()
          );
          lzlLoadingView
            .getLoadingViewElement()
            .style.setProperty("color", "#c5c5c5");
          lzlLoadingView
            .getLoadingViewElement()
            .style.setProperty("font-size", "14px");
          lzlLoadingView.setText("加载更多");
          lzlLoadingView.hide();
          /* 延迟显示 */
          setTimeout(() => {
            dialog.setAttribute("data-on", true);
            /* 修改根据标题高度设置内容margin-bottom */
            dialogContentElement.style.setProperty(
              "height",
              `calc(100% - ${DOMUtils.height(dialogTitleElement)}px)`
            );
            this.vueRootView = document.querySelector(".main-page-wrap");
            log.success(["成功获取Vue根元素", this.vueRootView.__vue__]);
            if (PopsPanel.getValue("baidu_tieba_lzl_ban_global_back")) {
              banBack();
            }
          }, 0);
        },
        /**
         * 获取楼中楼评论
         * @param {string} tid 帖子id
         * @param {string} pid 回复主体id
         * @param {string|Number} pn 当前页
         * @returns {Promise<{
         * data: {
         * userAvatar: string,
         * userHomeUrl: string,
         * userName:string,
         * userPortrait: string,
         * userPostId: number,
         * userReplyContent: string,
         * userReplyTime: string,
         * }[]}>}
         */
        async getLzlCommentReply(tid = "", pid = "", pn = 1) {
          let getResp = await httpx.get({
            url: `https://tieba.baidu.com/p/comment?tid=${tid}&pid=${pid}&pn=${pn}&t=${new Date().getTime()}${
              tiebaCommentConfig.extraSearchSignParams
            }`,
            headers: {
              "User-Agent": utils.getRandomPCUA(),
              Host: "tieba.baidu.com",
              Referer: window.location.href,
            },
          });
          if (!getResp.status) {
            log.error(getResp);
            return "请求失败";
          }
          let respData = getResp.data;
          log.success(respData);
          let parseDOM = DOMUtils.parseHTML(respData.responseText, false, true);
          let lzlPostList = parseDOM.querySelectorAll("li.lzl_single_post");
          if (!lzlPostList.length) {
            return "暂无更多回复";
          }
          let result = {
            data: [],
          };
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
              utils.getDaysDifference(
                new Date().getTime(),
                userReplyTime,
                "auto"
              ) + "前";
            result["data"].push({
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
              result["nextPage"] = parseInt(
                item.getAttribute("href").replace("#", "")
              );
            }
          });
          if (!result["data"].length) {
            return "解析回复失败";
          } else {
            return result;
          }
        },
        /**
         * 获取第XX页的评论（不包括楼中楼评论）
         * @param {string} url
         * @returns {?HTMLElement|string}
         */
        async getPageComment(url) {
          let getDetails = {
            url: url,
            headers: {
              "User-Agent": utils.getRandomPCUA(),
              Referer: "tieba.baidu.com",
            },
          };
          if (PopsPanel.getValue("baidu_tieba_request_with_cookie")) {
            log.success("贴吧-发送请求携带cookie");
            getDetails.headers["Cookie"] = document.cookie;
          }
          let getResp = await httpx.get(getDetails);
          let respData = getResp.data;
          log.success(["获取评论", getResp]);
          if (getResp.status) {
            let pageCommentHTMLElement = DOMUtils.parseHTML(
              respData.responseText,
              true,
              true
            );
            if (
              pageCommentHTMLElement.title === "百度安全验证" ||
              respData.finalUrl.startsWith("https://wappass.baidu.com")
            ) {
              log.error("触发百度安全验证 👇" + respData.finalUrl);
              log.error(respData);
              return "触发百度安全验证";
              /* let gotoBaiduWappass = confirm("触发百度安全验证，是否前往："+respData.finalUrl);
              if(gotoBaiduWappass){
                window.location.href = respData.finalUrl;
              } */
            } else {
              return pageCommentHTMLElement;
            }
          } else if (getResp.type === "onerror") {
            if (
              typeof respData.error === "string" &&
              respData.error.match("wappass.baidu.com")
            ) {
              let url = respData.error.match(/"(.*?)"/)[1];
              log.error("触发百度校验: " + url);
              let gotoBaiduWappass = confirm(
                "触发百度安全验证，是否前往：" + url
              );
              if (gotoBaiduWappass) {
                window.location.href = url;
              }
            } else {
              log.error("获取评论数据失败 👇");
              log.error(respData);
            }
          }
        },
        /**
         * 获取第XX页的所有楼中楼评论
         * @param {string} url
         * @returns { {commentList: any[], userList: any[]} }
         */
        async getPageCommentList(url) {
          let getResp = await httpx.get({
            url: url,
            headers: {
              Accept: "application/json, text/javascript, */*; q=0.01",
              "User-Agent": utils.getRandomPCUA(),
              Referer: "tieba.baidu.com",
            },
          });
          log.info(["获取楼中楼评论", getResp]);
          let respData = getResp.data;
          if (getResp.status) {
            let data = utils.toJSON(respData.responseText);
            log.success(["帖子评论信息JSON", data]);
            return {
              commentList: data["data"]["comment_list"],
              userList: data["data"]["user_list"],
            };
          } else if (getResp.type === "onerror") {
            log.error("获取楼中楼评论数据失败 👇");
            log.error(getResp);
          }
        },
        /**
         * 插入加载中的html
         */
        insertLoadingHTML() {
          if (!loadingView.isExists()) {
            log.info("插入loading");
            loadingView.initLoadingView();
            loadingView.hide();
            document
              .querySelector(".main-page-wrap")
              .appendChild(loadingView.getLoadingViewElement());
          }
        },

        /**
         * 插入只看楼主的按钮
         */
        insertOnlyLZ() {
          let replyRightContainer = document.querySelector(
            ".reply-right-container"
          );
          if (!replyRightContainer) {
            log.error("元素.reply-right-container不存在");
            return;
          }
          GM_addStyle(`
          .white-only-lz{
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -moz-box-align: center;
            -webkit-align-items: center;
            -moz-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            line-height: .24rem;
            border-radius: .14rem;
            font-size: .13rem;
            color: #614ec2;
            margin-right: 16px;
          }
          .white-only-lz-qx:before {
            content: "取消";
          }
          .white-only-lz-none {
            display: none;
          }
          `);
          let onlyLzInnerElement = DOMUtils.createElement("div", {
            className: "white-only-lz",
            textContent: "只看楼主",
          });
          replyRightContainer.appendChild(onlyLzInnerElement);
          DOMUtils.on(
            document.querySelector(".white-only-lz"),
            "click",
            (event) => {
              tiebaCommentConfig.displayComment(
                Array.from(event.currentTarget.classList)
              );
            }
          );
        },
        /**
         * 插入 正序=倒序的按钮
         */
        insertReverseBtn() {
          let replySwitchElement = document.querySelector("#replySwitch");
          if (!replySwitchElement) {
            log.error("元素#replySwitch不存在");
            return;
          }
          GM_addStyle(`
          .reply-right-container {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
          }
          .btn-comment-reverse-pack{
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            display: inline-block;
            white-space: nowrap;
            text-align: center;
            height: .29rem;
            line-height: .29rem;
            border-radius: .15rem;
            color: #a3a2a8;
            font-size: 13px;
            background-color: #f3f2f5;
          }
          .btn-comment-reverse-pack .tab-item{
            display: inline-block;
            width: .48rem;
          }
          .btn-comment-reverse-pack .selected-tab-item{
            position: relative;
            z-index: 99;
            color: #141414;
          }
          .btn-comment-reverse-pack .selected-tab-item:after{
            content: "";
            z-index: -99;
            position: absolute;
            top: 0;
            left: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            display: block;
            height: .29rem;
            width: .48rem;
            border-radius: .15rem;
            border: .01rem solid #f3f2f5;
            background-color: #fff;
            color: #141414;
          }
          `);
          let replyRightContainer = DOMUtils.createElement("div", {
            className: "reply-right-container",
          });
          let btnElement = DOMUtils.createElement("div", {
            className: "btn-comment-reverse-pack",
            innerHTML: `
              <span class="tab-item selected-tab-item" data-positive>正序</span>
              <span class="tab-item" data-reverse>倒序</span>`,
          });
          /**
           * 正序
           * @type {HTMLSpanElement}
           */
          const positiveElement = btnElement.querySelector(
            ".tab-item[data-positive]"
          );
          /**
           * 倒序
           * @type {HTMLSpanElement}
           */
          const reverseElement = btnElement.querySelector(
            ".tab-item[data-reverse]"
          );
          replyRightContainer.appendChild(btnElement);
          replySwitchElement.appendChild(replyRightContainer);
          let isReverse = false;
          function clearSelected() {
            positiveElement.classList.remove("selected-tab-item");
            reverseElement.classList.remove("selected-tab-item");
          }
          DOMUtils.on(btnElement, "click", () => {
            isReverse = !isReverse;
            tiebaCommentConfig.removeScrollListener();
            DOMUtils.remove(".post-item");
            clearSelected();
            if (isReverse) {
              /* 倒序 */
              reverseElement.classList.add("selected-tab-item");
              positiveElement.classList.remove("selected-tab-item");
              reverseElement.classList.add("selected-tab-item");
              tiebaCommentConfig.mainReverse();
              log.info("获取评论===>倒序");
            } else {
              /* 正序 */
              positiveElement.classList.add("selected-tab-item");
              reverseElement.classList.remove("selected-tab-item");
              positiveElement.classList.add("selected-tab-item");
              tiebaCommentConfig.mainPositive();
              log.info("获取评论===>正序");
            }
          });
        },
        /**
         * 动态显示只看楼主
         * @param {Array} classlist
         */
        displayComment(classlist) {
          if (classlist.includes("white-only-lz-qx")) {
            document
              .querySelector(".white-only-lz")
              .classList.remove("white-only-lz-qx");
            document.querySelectorAll(".post-item").forEach((ele) => {
              ele.classList.remove("white-only-lz-none");
            });
          } else {
            document
              .querySelector(".white-only-lz")
              .classList.add("white-only-lz-qx");
            document.querySelectorAll(".post-item").forEach((ele) => {
              let landlord = ele.getAttribute("landlord");
              if (landlord == "0") {
                ele.classList.add("white-only-lz-none");
              }
            });
          }
        },
        /**
         * 查看-正序
         */
        async mainPositive() {
          tiebaCommentConfig.param_tid = tiebaBusiness.getCurrentForumPostTid();
          if (!tiebaCommentConfig.param_tid) {
            log.error("贴吧：未找到本页参数p");
            return;
          }
          let dataBannerInfo = document
            .querySelector(".recommend-item")
            ?.getAttribute("data-banner-info");
          tiebaCommentConfig.param_forum_id =
            dataBannerInfo != null
              ? utils.toJSON(dataBannerInfo)["forum_id"]
              : document.querySelector(".app-view")?.__vue__?.forum?.id;
          if (!tiebaCommentConfig.param_forum_id) {
            return log.error("贴吧：获取参数data-banner-info失败");
          }

          let timeStamp = Date.now();
          tiebaCommentConfig.page = 1;
          loadingView.setText("Loading...", true);
          loadingView.show();
          let url = `https://tieba.baidu.com/p/totalComment?t=${timeStamp}&tid=${tiebaCommentConfig.param_tid}&fid=${tiebaCommentConfig.param_forum_id}&pn=${tiebaCommentConfig.page}&see_lz=0${tiebaCommentConfig.extraSearchSignParams}`;
          let pageUrl = `https://tieba.baidu.com/p/${tiebaCommentConfig.param_tid}?pn=${tiebaCommentConfig.page}${tiebaCommentConfig.extraSearchSignParams}`;
          let pageDOM = await tiebaCommentConfig.getPageComment(pageUrl);
          let pageCommentList = await tiebaCommentConfig.getPageCommentList(
            url
          );
          if (
            !pageDOM ||
            typeof pageDOM === "string" ||
            !pageCommentList.commentList
          ) {
            loadingView.setText(
              typeof pageDOM === "string" ? pageDOM : "获取评论失败"
            );
            log.error("评论数据获取失败");
            return;
          }
          log.info("成功获取第一页评论和楼中楼评论");
          let jumpInputBrightDOM = pageDOM.querySelector(".jump_input_bright");
          tiebaCommentConfig.maxPage = 1;
          if (jumpInputBrightDOM) {
            tiebaCommentConfig.maxPage = parseInt(
              jumpInputBrightDOM.getAttribute("max-page")
            );
            tiebaCommentConfig.setNextPageScrollListener();
            log.info("当前为多页，执行监听");
          } else {
            let comments = pageDOM.querySelectorAll(".l_post.l_post_bright");
            comments = Array.from(comments);
            document
              .querySelectorAll(".post-item")
              .forEach((ele) => ele.remove());
            comments.shift();
            tiebaCommentConfig.floor_num = 1;
            comments.forEach((element) => {
              tiebaCommentConfig.insertNewCommentInnerElement(
                tiebaCommentConfig.getNewCommentInnerElement(
                  element,
                  pageCommentList
                )
              );
              tiebaCommentConfig.floor_num++;
            });
            loadingView.hide();
          }
          log.info(
            `共 ${tiebaCommentConfig.maxPage} 页评论，当前所在 ${tiebaCommentConfig.page} 页`
          );
        },
        /**
         * 查看-倒序
         */
        async mainReverse() {
          tiebaCommentConfig.param_tid = tiebaBusiness.getCurrentForumPostTid();
          if (!tiebaCommentConfig.param_tid) {
            log.error("贴吧：未找到本页参数p");
            return;
          }
          let dataBannerInfo = document
            .querySelector(".recommend-item")
            ?.getAttribute("data-banner-info");
          tiebaCommentConfig.param_forum_id =
            dataBannerInfo != null
              ? utils.toJSON(dataBannerInfo)["forum_id"]
              : document.querySelector(".app-view")?.__vue__?.forum?.id;
          if (!tiebaCommentConfig.param_forum_id) {
            return log.error("贴吧：获取参数data-banner-info失败");
          }

          let timeStamp = Date.now();
          tiebaCommentConfig.page = 1;
          loadingView.setText("Loading...", true);
          loadingView.show();
          let url = `https://tieba.baidu.com/p/totalComment?t=${timeStamp}&tid=${tiebaCommentConfig.param_tid}&fid=${tiebaCommentConfig.param_forum_id}&pn=${tiebaCommentConfig.page}&see_lz=0${tiebaCommentConfig.extraSearchSignParams}`;
          let pageUrl = `https://tieba.baidu.com/p/${tiebaCommentConfig.param_tid}?pn=${tiebaCommentConfig.page}${tiebaCommentConfig.extraSearchSignParams}`;
          let pageDOM = await tiebaCommentConfig.getPageComment(pageUrl);
          let pageCommentList = await tiebaCommentConfig.getPageCommentList(
            url
          );
          if (
            !pageDOM ||
            typeof pageDOM === "string" ||
            !pageCommentList.commentList
          ) {
            loadingView.setText(
              loadingView.setText(
                typeof pageDOM === "string" ? pageDOM : "获取评论失败"
              )
            );
            log.error("评论数据获取失败");
            return;
          }
          log.info("成功获取第一页评论和楼中楼评论");
          tiebaCommentConfig.maxPage = 1;
          let jumpInputBrightDOM = pageDOM.querySelector(".jump_input_bright");
          if (jumpInputBrightDOM) {
            tiebaCommentConfig.maxPage = parseInt(
              jumpInputBrightDOM.getAttribute("max-page")
            );
            tiebaCommentConfig.page = tiebaCommentConfig.maxPage;
            tiebaCommentConfig.setPrevPageScrollListener();
            log.info("当前为多页");
          } else {
            let comment = pageDOM.querySelectorAll(".l_post.l_post_bright");
            tiebaCommentConfig.maxPage = 1;
            comment = Array.from(comment);
            document
              .querySelectorAll(".post-item")
              .forEach((ele) => ele.remove());
            comment.shift();

            tiebaCommentConfig.floor_num = 1;
            comment.reverse();
            comment.forEach((element) => {
              tiebaCommentConfig.insertNewCommentInnerElement(
                tiebaCommentConfig.getNewCommentInnerElement(
                  element,
                  pageCommentList
                )
              );
              tiebaCommentConfig.floor_num++;
            });
            loadingView.hide();
          }
          log.info(
            `共 ${tiebaCommentConfig.maxPage} 页评论，当前所在 ${tiebaCommentConfig.page} 页`
          );
        },
      };

      /**
       * 贴吧搜索
       */
      const tiebaSearchConfig = {
        isSetClickEvent: false,
        /**
         * @type {PopsSearchSuggestionResult}
         */
        searchSuggestion: null,
        /**
         * 获取搜索建议
         * @param {string} queryText 搜索内容
         * @async
         */
        async getSuggestion(queryText = "") {
          let getResp = await httpx.get({
            url: `https://tieba.baidu.com/suggestion?query=${queryText}&ie=utf-8&_=${new Date().getTime()}`,
            headers: {
              "User-Agent": utils.getRandomPCUA(),
              Accept: "application/json, text/javascript, */*; q=0.01",
              Host: "tieba.baidu.com",
              Referer: window.location.href,
            },
          });
          if (!getResp.status) {
            return;
          }
          let respData = getResp.data;
          return utils.toJSON(respData.responseText);
        },
        init() {
          utils.waitNode("div.more-btn-desc").then((element) => {
            element.outerHTML = `
              <input type="search" id="tieba-search" placeholder="请输入搜索内容..." style="display: none;padding: 0 10px;height: 32px;line-height: 32px;font-size: 14px;border-radius: 5px;box-sizing: border-box;-webkit-appearance: none;-moz-appearance: none;-o-appearance: none;appearance: none;border: 1px solid #000000;outline: none;flex: 1;margin: 0px 40px;" autocomplete="off">
              <div class="more-btn-desc" style="margin-right: 13px;font-size: .15rem;font-weight: 700;color: #614ec2;">搜索</div>
              `;
            DOMUtils.on(
              document.querySelector("div.more-btn-desc"),
              "click",
              function () {
                let searchParams = new URLSearchParams(window.location.search);
                if (
                  window.location.pathname === "/f" &&
                  utils.isNotNull(searchParams.get("kw"))
                ) {
                  /* 当前是在吧内，搜索按钮判定搜索帖子 */
                  loadingView.removeAll();
                  loadingView.initLoadingView();
                  DOMUtils.after(
                    document.querySelector("div.tb-page__main"),
                    loadingView.getLoadingViewElement()
                  );
                  tiebaSearchConfig.isSetClickEvent = true;
                  tiebaSearchConfig.postsSearch();
                } else if (
                  window.location.href.startsWith("https://tieba.baidu.com/p/")
                ) {
                  /* 当前是在帖子内，搜索按钮判定搜索帖子 */
                  if (!tiebaSearchConfig.isSetClickEvent) {
                    tiebaSearchConfig.isSetClickEvent = true;
                    tiebaSearchConfig.postsSearch();
                  }
                } else {
                  /* 当前是在主页中，搜索按钮判定为搜索吧 */
                  tiebaSearchConfig.frontPageSeach();
                  utils.listenKeyboard(
                    document.querySelector("#tieba-search"),
                    "keypress",
                    (keyName) => {
                      if (keyName === "Enter") {
                        tiebaSearchConfig.frontPageSeach();
                      }
                    }
                  );
                }
              }
            );

            async function getData(inputValue) {
              let result = [];
              log.success("搜索中...");
              let suggestionData = await tiebaSearchConfig.getSuggestion(
                inputValue
              );
              if (utils.isNull(suggestionData)) {
                return result;
              }
              log.success(suggestionData);
              result = suggestionData.query_match.search_data || [];
              return result;
            }
            this.searchSuggestion = pops.searchSuggestion({
              selfDocument: document,
              className: "WhiteSevsSearchSelect",
              target: document.querySelector("#tieba-search"),
              inputTarget: document.querySelector("#tieba-search"),
              data: [],
              isAbsolute: false,
              followTargetWidth: true,
              deleteIcon: {
                enable: false,
              },
              topDistance: 4,
              itemClickCallBack(event, liElement, data) {
                window.location.href =
                  "https://tieba.baidu.com/f?ie=utf-8&kw=" + data.fname;
              },
              getData: getData,
              getItemHTML(item) {
                return `
                <div class="forum_item">
                  <img class="forum_image" src="${item.fpic}">
                  <div class="forum_right">
                    <div class="forum_name">${item.fname}</div>
                    <div class="forum_desc">${item.forum_desc}</div>
                    <div class="forum_member">${item.member_num}</div>
                    <div class="forum_thread">${item.thread_num}</div>
                  </div>
                </div>
                `;
              },
              style: `
              .WhiteSevsSearchSelect .forum_item{
                display: flex;
                text-wrap: wrap;
                align-items: center;
              }
              .WhiteSevsSearchSelect .forum_image{
                float: left;
                width: 32px;
                height: 32px;
              }
              .WhiteSevsSearchSelect .forum_right{
                float: left;
                margin-left: 8px;
                color: #999;
                width: 88%;
              }
              .WhiteSevsSearchSelect .forum_name{
                color: #000;
                font-size: 14px;
                font-weight: 700;
              }
              .WhiteSevsSearchSelect .forum_name::after{
                content:"吧";
              }
              .WhiteSevsSearchSelect .forum_member,
              .WhiteSevsSearchSelect .forum_thread{
                margin: 4px 0px;
                padding: 0 0 0 18px;
                color: #999;
                font-weight: 400;
                font-size: 12px;
                background: url(//tb2.bdstatic.com/tb/static-common/img/suggestion/sugestion_ed6a819.png) no-repeat;
              }
              .WhiteSevsSearchSelect .forum_member{
                background-position: 0 0;
              }
              .WhiteSevsSearchSelect .forum_thread{
                background-position: 0 -26px;
              }
              `,
            });
            this.searchSuggestion.init();
            this.searchSuggestion.setAllEvent();
            log.success("初始化默认搜索...");
            getData("").then((result) => {
              if (result.length) {
                this.searchSuggestion.update(result);
              }
            });
          });
        },
        /**
         * 帖子外搜索(也就是首页搜索吧)
         */
        frontPageSeach() {
          log.success("当前是在首页");
          let searchInputElement = document.querySelector("#tieba-search");
          let searchText = searchInputElement.value.trim();
          /* 搜索框隐藏的话就显示出来 */
          if (getComputedStyle(searchInputElement).display === "none") {
            searchInputElement.previousElementSibling.style.display = "none";
            searchInputElement.style.display = "block";
          } else {
            /* 已显示出来的话就跳转搜索 */
            if (utils.isNull(searchText)) {
              alert("请勿输入空内容");
              return;
            }
            window.location.href =
              "https://tieba.baidu.com/f?ie=utf-8&kw=" + searchText;
          }
        },
        /**
         * 帖子内搜索(搜索帖子)
         * */
        postsSearch() {
          let that = this;
          let gbkEncoder = new utils.GBKEncoder();
          let nextPageUrl = null;
          let lockFunction = null;
          /**
           * 0 按时间顺序
           * 1 按时间倒序
           * 2 按相关性顺序
           * 3 只看主题贴
           */
          let searchModel = 1;
          /**
           * 0 吧内搜索
           * 1 全吧搜索
           */
          let searchType = 0;
          /**
           * 当前搜索的内容
           */
          let currentSearchText = "";
          /**
           * 获取搜索结果
           * @param {string} [qw=""] 搜索的关键字
           * @param {number} [pn=0] 当前页码
           * @param {number} [sm=0] 搜索结果排序
           * @param {string} [kw=""] 搜索的目标吧，留空是全部
           * 0 按时间顺序
           * 1 按时间倒序 如果加上only_thread为1，就是只看主题贴
           * 2 按相关性顺序
           * @returns {Promise}
           */
          async function getSearchResult(qw = "", pn = 0, sm = 1, kw = "") {
            currentSearchText = qw;
            if (sm === 3) {
              sm = "1&only_thread=1";
            }
            let url = "";
            let originText = "";
            if (arguments.length === 1) {
              url = arguments[0];
              log.success(`请求的下一页url: ${url}`);
            } else {
              originText = qw;
              qw = gbkEncoder.encode(qw);
              kw = gbkEncoder.decode(kw);
              kw = gbkEncoder.encode(kw);
              log.success(`搜索内容gbk编码转换: ${originText} => ${qw}`);
              url = `https://tieba.baidu.com/f/search/res?isnew=1&kw=${kw}&qw=${qw}&un=&rn=10&pn=${pn}&sd=&ed=&sm=${sm}`;
            }

            log.success(
              `当前请求第 ${new URLSearchParams(new URL(url).search).get(
                "pn"
              )} 页`
            );
            let getResp = await fetch(url, {
              url: url,
              headers: {
                accept:
                  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language":
                  "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                "cache-control": "no-cache",
                pragma: "no-cache",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "none",
              },
            });
            let respArrayBuffer = await getResp.arrayBuffer();
            if (!respArrayBuffer) {
              log.error("获取ArrayBuffer失败");
            }
            let encoding = "gb18030";
            if (
              getResp.headers.has("Content-Type") &&
              getResp.headers.get("Content-Type").includes("charset=utf-8")
            ) {
              encoding = "utf-8";
            }
            log.info("当前编码：" + encoding);
            let decoder = new TextDecoder(encoding);
            let respText = decoder.decode(respArrayBuffer);
            if (!getResp.ok) {
              if (respText.trim() === "") {
                log.error("获取内容为空，可能触发了百度校验，请刷新网页再试");
                return "获取内容为空，可能触发了百度校验，请刷新网页再试";
              }
              if (
                respText.match("wappass.baidu.com") ||
                respText.match(
                  "https://seccaptcha.baidu.com/v1/webapi/verint/svcp.html"
                )
              ) {
                let wappassUrl = respText.match(/href="(.*?)"/)[1];
                log.error("触发百度校验: " + wappassUrl);
                window.location.href = wappassUrl;
                return "触发百度校验";
              }
              log.error(respText);
              return;
            }
            log.success(getResp);
            let searchDoc = DOMUtils.parseHTML(respText, true, true);
            if (searchDoc.querySelector(".search_noresult")) {
              return "抱歉，没有找到与“" + originText + "”相关的结果。";
            }
            let result = [];
            nextPageUrl = searchDoc.querySelector(".pager-search a.next")?.href;
            searchDoc
              .querySelectorAll(".s_main .s_post_list .s_post")
              .forEach((item) => {
                if (item.id === "post_user" || item.id === "no_head") {
                  return;
                }
                let url = item.querySelector("span.p_title a").href;
                let title = item.querySelector("span.p_title a").innerHTML;
                let content = item.querySelector(".p_content").innerHTML;
                /* 来自哪个贴吧 */
                let forum = item.querySelector(
                  "a.p_forum font.p_violet"
                ).textContent;
                let author = (
                  item.querySelector("a[href^='/home'] font.p_violet") ||
                  item.querySelectorAll("font.p_violet")[1]
                ).textContent;
                let authorHomeUrl =
                  "https://tieba.baidu.com/home/main?un=" +
                  gbkEncoder.encode(author);
                let time = item.querySelector(".p_date").textContent;
                let imgList = [];
                item
                  .querySelectorAll("img.p_pic")
                  .forEach((pictureImg) =>
                    imgList.push(
                      pictureImg.getAttribute("original") || pictureImg.src
                    )
                  );
                result.push({
                  url: url,
                  title: title,
                  content: content,
                  forum: forum,
                  author: author,
                  authorHomeUrl: authorHomeUrl,
                  time: time,
                  media: imgList,
                });
              });
            return result;
          }
          function getItemElement(item) {
            let time = item["time"];
            let newTime = utils.getDaysDifference(
              utils.formatToTimeStamp(time),
              void 0,
              "auto"
            );
            if (
              newTime.endsWith("小时") ||
              newTime.endsWith("分钟") ||
              newTime.endsWith("秒")
            ) {
              /* 今天内的时间全都转换成xx时|分|秒前 */
              time = newTime + "前";
            }
            /* 高亮搜索关键字 */
            let splitText = currentSearchText.split(" ");
            splitText.filter((value, index, _splitText_) => {
              return _splitText_.indexOf(value) === index;
            });
            splitText.forEach((text) => {
              item["title"] = item["title"].replaceAll(
                text,
                "<em>" + text + "</em>"
              );
            });
            let resultElement = DOMUtils.createElement("div", {
              className: "s_post search_result",
              innerHTML: `
              <div class="search-result-media">
                <div class="search-result-media-left">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAGdBJREFUeF7tXWuT3MZ1Pd0AZmZfXL4pS5Qo2ZEcybG/JFX583FKkT8lKVc5FiU6liWbkimK1GbJfc4MHt2pc283gMHuPHa5qxlRO1XUUksAA9zT93Xu7Qvzb38sPK4+KyMBcwXIymAhN3IFyGrhcQXIiuFxBcgVIKsmgRW7nysfcgXIiklgxW7H/PbT8ioPWSIo3qv4jTH68wqQJaIBwDl3BchyIZj97VcasmR0osmKt3EFyBUgS5bAin/9lYYsGaC2yeLff5KAtON8DTZX57N0QLwJYZ+3KhXfEpGJotNjJv45HN8VqO1kVS4c0PzadL7CY5VAWT4gQdC1UE4FhAdFUCxmrfBpgAiYE6DyGz2I+RUgC1iIRrBxiVvoag/ARO1pAwhgEq72F7lwflDCKRq2wK1d6iFL15DafnTMk40mjOu3/jsaUOrjW8s+/K6rJY0EG9MXf+dMMJWXKubFL76igDgoIPzTaEj9WOJ3fGvFuwnQ2ibIBg1SrE7Sdvzn6GcWF9vlHbk6gPAZRWq6iptVPn0FT5iwGA90TVEAJF7FBDIvBgirBIaIYNnkogre1C5bQWk78ZNmRjVHRdw2T23hTo+dJrVklRz6CgESzMaJCItgODA0bqKwCEYbkMZh16Fx0JSOz2+sXsDlCpCu+a1KWGvhbQJmqo5hqNQG+Bcnf698qeGpMfDewJpUdcg5GFGRRovkGMYBEQnnkSTh2jw+1h28DddbrXLQkk2Wg3FeBWNV2I70gTETwnLwSKwC4ipi5QVEHmsT/q+XP21gRFO8R2KsAu30fAFfjtfvWLWP+e2n+VKXSBRK5HS4sA0SkZP+zogmWKgwqSoE0XsiY1GJ5ujxxhAAFbEKvZKf/A5qiWqV/psx1BCgksjrND/1w0DFe2/zWSsASLwhFYoAIqaJWbQVEJRdoZt2CoQrRfBqivRYBaGCDeZOzZaHNQkqzwtYEFZHzUgz+aKyLGEFweUBEoOTCP/SAWluKNp3Cj3UmQWUEEkZB2scetajP0ixPuhjY81iawOg4ojycMVXQJ4Do7FDXji8PDjEwXGJsgJsbx2lT1A5PUG0hicsFZBJTVw6INH50tw0DpdCUhrEgqveY5AaXLs2wK3tBBvr+hCMs2iIQggw8WSaOqqoj8fA7h6w8/IQx2MPYzOig4IBxUoxWZKHLNeHxGCI5kmcefAPiXVIrYevhrh35zru3rLoZwoAFUgMkPgLwiKOIfiR6Kg1LOZvow6McmBnF/hu5wXGuUM6WBdtoSlblc/SAaFUxdYHR46qRIISaVKin3q8//PtGggKTV1z2VrXSicqDOor6p8EiU6ToISDeMThEfDs+T5298dwdh0Venp2DAgYbgu+lw9UO9ITv/nvD2fvD+n2DcWVNO333ZU273w64iTJ4GnXnRMgTHWIuzf6eO/+JlKJuppPDAlPD1g7gHTOi6wJtbIogKfPD/Bsp4JLNpBXBj5l1JYTQ/VdhL8KmhbyHR/JSCZMrX6qaRo27/m7offSAUkSjXaAFP3EwhX7eOveJt5+I0UaTFPjMVQVZLHPRqaWT8xRJGQOyWT8e+GAb595PHl2CJ8OkDMqsBVKV2n+UlEjMzV9lwRIF8ilA0KfkWYWRTFGZjxu31rDu2+qGCQf72ZJ58jlYi4SH17yGiaIAMYOePykxM7eEIWEEAbGpvAVj0lhqLkCSCnMAY2rmDLREPq92WncPA1ZOUBk4fkCaVJhYz3BB++tyyPTqjP/UMfd+oSS71nte1cwStOQIaBHAj7/80sc5fQjAxSVQZZlqCoP6xI4+pQJQKhqTTI6zVwJkCeCDT26248VrzFXQ7o+oz7xjLTDiYawcD4BSZDD4Ai//ugOBswngnacVIZuAjff6UZtOE04cW0XDI1z4E9f7iJ3A1i7jmGeI03TUGfx8MhVS0KdxiITpplgLfKZ9vxn1pDLBES1o0KCMd55cwt3bxkxVUYMQ6s7oUZmGhW/iEiaY5pVSy0p4ZjNI8HTnRJPvhujcBlskqBwzPRpOFkMywGjgDBEj76lW5OZdic/DkDgkPgS/azCr365pcFnqStTe5AtYlDT0O/BltVPPl9LqqqqicW2wBjhGeNQkZJBH8MC+OKrIY5zminCkIYcJQAClgE0kkt8Xy71qoCcAGpe2HupGoISthrj7be2ce8Ggrliksc/iTiQmG3Xxdw6umq6UM6iH5M2nddQVsBTT73Fsx3gm6dHcDaB8wl8pPqpHa38pwHk1UzWuQE5y0Mveix9R+pH+M2HNwUM5hzCr4t/UWdy0YBM3JuAS15ef5t7C4bC//NoD5VP4WwG5zMlPGO+T59B0jP4kkV9yKIyWdipL3rBsxxH37G9VuKXzMZjbiHZdUDCivUORkJN02T+ERPBs3xr61jxYSHNFyoeYJr8v18NcTgsUZoMDj3hmRtdjTV/DX+XBsi01ppFmwROOz8xQ9y/neH+vYFELCJyPm+LjiIg+mkBco5c5FTIIiCaUogmMOJ68tzh6feH4typJRJiiJrwbzRdvM35vqv9nYvKb2ENWfSC09bqaeenGOL9d9Zx61oiQMTiUn2NEFKq2wiAnFMZpp4WaeHgpCjul0fAF397icIPUJl0EhD6N0OtXRIg05vO9BHnacis81PmHu9vY6uvlbxQEGz49FOSwAUZk8Vhayfahn4EGFXAwz/tocSaaA2FHxv3pEgmz71YUHFW+c3VkLNesCuJeYD8y4fb6FNBguvg+UzDhNiQLFcz4nZa0vrfxQU/7cjoQ+Snw9h7kG/+w8OXqMz6SUB4WwRDtKTR3LNYhvax3QU9FZB5QMSLTtOQRc7PcIR//adtJPKQTd3Oo0IqIRb/gdRr+Dbx9SoGc0aTMQsPvZ6ufNbYmST+/tMDlIYaEoIKr50uDCoWAWSR5z/NwqwGICxK2aZZrgZE1CXY6jpxv2hACETogmctn5EWLH7/8BC5WwMSpo0sIzeAUDuqOSbr3IB8/Ony5mXRh1BD9FGBKviRxmxdVDg13bLVLoTFIaqicUxX8d8PD1GYDVQSd2mIK7xb4K+q1q0tKvxF7KtZJUBiCqKARNdxdkJxkQePxzSABMtIH2IN/vPhgTj1xiRHQPR+ihAmJ4sl6gvf0koAksygqC+7mY0+SYMIdtxpQFEZBYRhL02pfhSQaFipIfR7PwlAYkGpW1haeJmd4UAJEsRcNdEcc5H/+ow+pB8qhREQctCqEq8tIP/8q23023VzyZ5bMXCLhddo6KI/2gdWAwJg6IA/PDpEjsFEvsFc5DUHZIjfvL+FzX5b0LGl55LzD8E1OgCnFcDALh+MgM/+cojC9qUbUrNyTQ7bgIjezK7gnnn1LNmHDPHBgy3c3ArEiPTczk4I4xNejKY0gDinbaskGHf3gT9/zTyElKfSJJHdfc0BGePdN9bwxu3IU4UMXew6y6dkHFX0F9DrcMpqbUIkqZ8nrBwCz3eBr57soyIHbell2tRJKAmEFfFaaQjp91sbHr94b1NbQkX+BKNSQEjDd3yISpWVu7ORe6fbjhYgEmHpTt8vvx7hxYFD6dOQqTeAyHVa5OJrBkiOfjLGr//xhhSnqBBZBAQZXFXJqo2FqgiGOveLAETBld4taNmWGvLHR3vIS6XepcDLdi0X0teQoUe29+IBeTi+YLe0uB8zpPHcCB+8exPXNpV+jw3WtckKWtLcZIs6icTg4l954sg6xA7F3N0j4M9fvpDOE3IYjqk5nXcLkFcsi828W/PxMgHxDqlxuHGtj/feToRCaQChrWoirTYgYsU6HNd5MZGaNndmBUC++nuJ3b0RgAHyqoSXrVvu0gDpblhaMiDUCo/UFvjol5sCSE82SeXafkNb0dGQmoK8KEDirioLjErg0ZcHGBcJ2JDEry/DXsfL0pATzdbL1BDxBd4iNTnu3enj/l3VEna/i66w34ErtI6yurtxXz1TpOZxDChx//b7HN88G6KsUmTpGkofWN0fQEPkGRn2/8dns/eHTGt5rPOBOR2MM88PnRupKZCZA3z4/m2sZezpLeEYhnJjzUSUdfGAsDBGTmo0Bv7y+HscjPtwZh3UEdZGSktj5pC0fQgBkoY5rpvZGdEi8msfsxKAsLe3n4xw59YAb9/ri+dIOs0NjY8IoepCJqtNxXajMm2cjiX1J8+O8fT5Hiq7DW/XULCVNMtQhKaG4NvDbahbvwhAur5vwoech1mdQPeM/b4SvdBXsPG5PMag5/Hegy1sDRj+6i4pLl+pU8SWLUbBrcrh9KZrXdnN+mXHevRJBIOUCAUOjNix+JcXGOYeJluTBjnel3Qvhu3W04LsV33+LoE6V0POG70seh7bPLn5kquNbaWDXoWPPtiU05kFyBY2+pKwv0MTM4paNg7M2OWkbZ9SDaS+lbq3vUk2HQpnBZAvHuc4OBzBJnTk3CvPM9N6S7UsnB9oY+jSASlcgX6awZXMygiIx+Y68IsHa8F0FfCeaZi6+3Zj2+Tu2dYabmVW0rVD3PgnUDFSO2cGmADfPAf+/nQXadaXiqWXfSMWpdM9j4wCf8jPkgHRGSViKrlbyVDsHlV1hPv3NvCzu5m4VjJMVjrZUmn7FSWRPqop1cSuDNvdiSGr46++3wW+fvpCKBJqR06UZAiB6oNs2JEBBT/cZyUAkX2GSGQLQlFUsgXauWM8uH8Td2/EinYVxvGFZFFWe0fyrUFnXRFWjjGTFTqAwt4lGN++QIEUlUlkWkTWG6AoCpkMIaM7JmajKPhxj+FiXVlnB3LJgGjDmQKiIzTSdIAyL5BaIEtKvH1vE9e3gR7LFXHfSOihmihktZ+9DUx0zBxiw5zDAbsvgW+f7mNUGtgsk552Otc07SHPc9k9xXtpO1wTVPO1B0QGyrgS3sZJDgkM7ZjjnnUODRjiZ3e3ce+2kYY6MVfiU+Kggeg7Tus24FF03hwWoOnmk+9GeL5zDGs3UFZGicNUL5wTLboWCTLUVEUgIt4NIPq9F+3sl64hVemR9bhbiaZCp/RIu7/twQrXVaHMD7C9meDNe9dwffP02Ep8dqvhLYbD0QMcjLw476ORR+UHKMoUSTqoB9TEEJdgMPLrZ4mYr26/8WUCslCmfnYreIYzaFpcmG8Vth0znJWVSTvO0KgskFmPaxspNjcSbAwMBn2LQW8yA2mNC6gDVKFFKmD/oEThEjzbOcC4JMfMHCNDyVlaYYtWl1OKK/+npSHcqyfjiaQqgYq5BbUkRk/ec2ulmIXN9QTXNjKklgPPSvTSDJk1yHoc22TE50jdxNH0cDBAISaoLJiJ9MDpo9/tHCMvDQpv4ZNWa2g9b0sjPpmrFVtWY1gX1tllaogsxHlc1hnW+7kOlaRPGN2k3pxf22uSbZXuQ9ze7uPmdgprKlRFrmObpPyukVYSKHT52codOCHCJBmKEnj6/RilS1AZVgatAE8tpL+I1/Fx9lb4XTOcphtlvaY+pJ6HzFXa4umiCWFe4l2B61s9XN/OYE0BL86e4zgMknpCnAKjg82aUX5c0cakojU7OwXGFRvhUsnGS8+5W3pebbK8lnEbDYnL4ycCCJ0mjVUMMcVkkOqQihFXcIkscdjezrC1yZ54zUcISJwOFwWqQlUOS8AhwcIIC7oL6sVejr3DQvyKOHQZfMNgInBlBD/O+WVeJGMEdcfUlEHa57IKs05aAZPFqW5xihxjfybgyjuR2bZujI2NDNev9THoJ6IdYqKE3mCIyhmK+ogN0deEwPI7yyzH4HjosLs/xHBMIXMTNvVAt0xLyyh9S5jR2FQkQ8k4fsfF9B9NxWTpgMRpo9yUL8Ij2Zga9HsW/V6CDUZUfYMeAQrDY3icWHBZ4TEqozPWcWZyHQpXxmeUMEkio/yoLaOxx/GokJ/jghrEzUKaNAoIXB1hDyHP/8G5rE8+L/y8IspMFUOYmVjzSlP4pXARVX09huuTOzIYWWVZgsFaT8b29fqQqIkBDn/K4q10gimjMtUG3cWkEVkkqMJgmBbprhk4tzsH05PQKwFVoR0m45wT50ocD3Pk41Kodw7IpHOvR80KZXK6FOJ8yIuyXeaThyMRUTeca4Q26dRi9K/NYyTgEng6Sk/TQxvC/YLqExIJLS08a6Qs1SYa0bgql4SLK//6Ziaa0O/TZoddbKElSMAL48cb2moyM9e5va1Ph8+qF1uYAdxs1tTrSJmKm4U8MB4BB0c5hkcl8pLPpGSN9muF9y7ErWzheikDhLLtA8OM4DiQYMr91XsWO/9+bkCijeUqoh0XFypzQ3Ql8qMj+xjTEwiNltKE9Hof17aoDdpXErPhyB/FcxdadS3G97QC27wCEhcBM3PvEpiUhSlIiHx0BByPPPYOjlGxPiKztDhqw4vvijOAg9zbw9L1tq2OteW1ydfpoJqmW6Z++0OHsTY0WTNNUicxkhXfUd8qJFakq+k+xXY7J8OPGSURiF5mcP3aBrY2jWTZUlrif5iHdMYYadAThyPPhmWewGefbZXO75QDpawbZheMC2Bvv8DeAZsfuMq0bMZe4NCxBT4oBwlqtBjJmtAeW0/SjmZPzXXU1PbLAWQhngcQNXH6qIzlpRLHor8sATpfNU0kKawpcX17DTe2LPrscg8DAnQG7yRBKPlhuG7Uljj9bSFtOfNBRgCJ36v19ZhvkNJRU0bAaM52X+TYPxyHEi/HbvAJQ4QWcyBDuFQOGnwERrTVaR+3WgsArbc1yP9//LmMhzzBWjbJ7nTmX9+9EVoxnQHtqeyodSWy1GNjLcGdmyl6GZCxgYTfRIrdEjCl2+O4n/Z9TdSZ582jmlEDOQs+UqcPmiLjPILWs4LoSHaGquPBEfB/u2McHw3hmZzanmT+0UrE7yRjICaUIXywQc2QzWafe/PimmDm5wMy/bFkFIUrhK5OmRFXTswTafIb1zdw95ZSsLGJWodIqznjBGqbpDp1WkbE6vdEYKT8LXMx55RQp4U/4bbbQJ/Wg6Ez4cN3C5umURs1U2h4CtsBRTCtHIrNEZEvXnrs7O5jxOGZJCs5FjBEZlxQMWSWEemtRxBWOVqB0E7UlrD5OPiQaEa7JWQ5+bRV2ApzxWIVBawtcPPaOu7e6qHPvIv+3VfIEt3oIoN+OC2OI8JlCnVDl7QdcvuFvfr76aBMCvxkbHpaSN91/gyh20yBLgwVqobAMZMPC4z37rXY9eS7fRznHnlJLzIQ0lLWmNA33G4dmIUgw8ihqR852TMzE5BFwJB2smqMQZbg1s0N3L7BTkTVBG4tyEjkcRky2gqDJyVvCw0HYirC/yvT2miJ/n1ek8GrpM7x2k3uFAf712RjeBNDFGCjsUJ4gTMyyZF9vzvEqOBrN9Zk1lZN4YQIix2a+pkMn6c69UneP0RSku2GqpoYUX0AVviYwcpejmqI9Z7FvbvbuLWt3RyG9Wlm0axJ08WF7kBZeXE+SpDj4u38p1UE9QFnfeYBejJUDlRJ96JCq0z+sr4jA+wdshX1WMaaO8Pey8gcaDwlUWf9hgaabE7Ni+8/aa5bR1knAAkPSqdWlhXSLEEl83UdBj2LIh/L8MrrGxnuv7GJtYFM54O1XjWEbyqQcauNwYlgyIMFk8eYbBYojYKcD5Cz9+4F9rf2QZMaGkgb+VelfXROCzWFDXePvz3G4biCSQZSIla+jcybk5xEygbhPShqMSa7Wswnn+v+kMZ3xObm8JPJjTCmdHTEI0ciM9nHuL29gbfu9tBno3q4LuezUw0IorxOoiVHjcro1BpTIa+kmGeVzhIudY6d140Z3i9/4htil/3M8+VtP/q8sk060TnAf/vmEHtHjBbWxOGTqNCSQGxe1SZzzekmF9oCgGh4ygnUBCOzFYp8iDfv3sKdmwbrmfxaODk5JCxpoSPC23OiqZLbqqOM0FAQBhW/gsxf6dRpGhSt0zwXxrUl+xNTThHSvITR4V+/HmH/qETpOZEulfiNpClDNo3A2BnJXOcEIJqpn4iugsliSz7BMBx2TEa2GuHOjU28dW8grTmMpELThghGtEleLRQilVN8brTSUTMWc8vT1Gj22fMEegLNztfUgNVf0z5AE0s+q/PcrVshsRnyED49flJg5+UQPiE1QRpF370YKSVakBhRxvto+ZDJWxNbyUEszqGXQrSCbyu4sZnhwf0N9KRW0cTwky2ereioLhqd700djUBPB2SeSTq3+gixWbeyTL1MfVftLd0mwTAHiMM335V4urMPJKQp1HwRNFeW9cvK2hefmqnXiBkv7Cz5p7UU+IcHG9KZLi0CMgYu3FJ4TZHQBTG8lbKQLq1ATzXfHR+4/sdziu4V/Q8ZqNM/isYswCVIUdZN6RLpDwiePmwg5XS6v/59H3tHTOf60sStWxkahvgUQDoTBOu9FyUSGTacS2j73jtbAoq8QiI4KpU07eLkW8+YgcfX253Q9kmtf7V5Ga8IyKvM6uBXs0FVFh2jqdiLFB6YySNFybDpi69eYv/YI+tvIi+aV/l1F4P53aNyokAVhchuvxQF+v4Y/bTEg3duC11OEyJbmIX+CIPaT805Z6z4LiDnVI4fw2lSBGUhrOJs+aco3QbKOO3UNB2StUX63aM8ABKnKZC/MdJ+2Tcl0nwXP3/nDq7fiG0v2pRAFjMOrvwxCObS7jEurpoP029qWwWpnyQc2ZHjr9+E4Zp2TUjJbne9+d2jkQCi79OL9l69/yBxuLMFvPMmuzb0W7jVjBv6+Vacq0+LZpsBSKyvUFMef5vj5WElNAtrK5ogt6ibTz4fqqzrFxxGDtpikFb41c8zYW9l/F5CM6aFGO7VuLQI58eE9AIaEgd8kufgwP+vHo9xNKbW6C6tNiD/DzWlRSi59QxkAAAAAElFTkSuQmCC">
                </div>
                <div class="search-result-media-body">
                  <h4 class="search-result-media-body-author-name">${item["author"]}</h4>
                  <p class="search-result-media-body-time">${time}</p>
                </div>
              </div>
              <div class="search-result-title">
                <h1 class="search-result-title-h1">
                  <span class="search-result-title-span">${item["title"]}</span>
                </h1>
              </div>
              <div class="search-result-content">
                <span class="search-result-content-span">${item["content"]}</span>
              </div>
              <div class="search-result-bottom-toolbar">
                  <span class="search-result-bottom-toolbar-span">${item["forum"]}</span>
              </div>
              `,
            });
            let userAvatarElement = resultElement.querySelector(
              ".search-result-media-left img"
            );
            let userNameElement = resultElement.querySelector(
              ".search-result-media-body-author-name"
            );
            let mediaElement = resultElement.querySelector(
              ".search-result-media"
            );
            let titleElement = resultElement.querySelector(
              ".search-result-title"
            );
            let contentElement = resultElement.querySelector(
              ".search-result-content"
            );
            let contentSpanElement = resultElement.querySelector(
              ".search-result-content-span"
            );
            let bottomToolBarElement = resultElement.querySelector(
              ".search-result-bottom-toolbar"
            );
            /* 获取用户信息，替换用户头像 */
            if (PopsPanel.getValue("baidu_tieba_search_opt_user_info")) {
              tiebaApi
                .getUserHomeInfoByUN(item["author"])
                .then((userHomeInfo) => {
                  if (!userHomeInfo) {
                    return;
                  }
                  userAvatarElement.src = tiebaApi.getUserAvatar(
                    userHomeInfo["data"]["portrait"]
                  );
                  userNameElement.innerText =
                    userHomeInfo["data"]["show_nickname"];
                });
            }

            let eleList = [
              { element: mediaElement, url: item["authorHomeUrl"] },
              { element: [titleElement, contentElement], url: item["url"] },
              {
                element: bottomToolBarElement,
                url: `https://tieba.baidu.com/f?kw=${item["forum"]}`,
              },
            ];
            eleList.forEach((item) => {
              DOMUtils.on(
                item.element,
                "click",
                void 0,
                function (event) {
                  utils.preventEvent(event);
                  globalThis.open(item.url, "_blank");
                },
                {
                  capture: true,
                }
              );
            });

            let content_BDE_Image = resultElement.querySelectorAll(
              ".search-result-content img.BDE_Image"
            );
            let repetitiveImageList = [];
            content_BDE_Image.forEach((BDE_Image) => {
              let originalImageIndex = item["media"].findIndex((src) => {
                return src.includes(BDE_Image.src);
              });
              if (originalImageIndex !== -1) {
                let originalImage = item["media"][originalImageIndex];
                BDE_Image.src = originalImage;
                repetitiveImageList.push(originalImage);
                item["media"].splice(originalImageIndex, 1);
              }
            });
            item["media"].forEach((mediaSrc) => {
              DOMUtils.append(
                contentSpanElement,
                DOMUtils.createElement("img", {
                  className: "BDE_Image",
                  src: mediaSrc,
                })
              );
            });
            return resultElement;
          }
          function setCSS() {
            GM_addStyle(`
            .search-result-content img.BDE_Smiley{
              width: .2rem;
              height: .2rem;
              vertical-align: middle;
            }
            .search-result-content img:not(.BDE_Smiley){
              margin-top: 8px;
              max-width: 350px;
              cursor: url(//tb2.bdstatic.com/tb/static-pb/img/cur_zin.cur),pointer;
              height: auto;
              width: auto;
              width: 100%;
            }
            .s_post.search_result {
              background: #f7f7fa;
              margin: 0.08rem .08rem;
              border-radius: .12rem;
              padding: .11rem .11rem;
            }
            `);
            if (
              globalThis.location.search.startsWith("?kw=") ||
              globalThis.location.pathname === "/f"
            ) {
              /* 吧内和贴内的background不同 */
              GM_addStyle(`
              .s_post.search_result{
                background: #ffffff;
              }
              `);
            }
            GM_addStyle(`
            .s_post,
            .s_order,
            .s_search {
              margin: 25px;
            }
            .s_post em{
              color: #e10900;
              font-style: normal;
            }


            .search-result-media {
              display: flex;
              align-items: center;
            }
            
            .search-result-media-left {
              padding-right: .08rem;
            }
            
            .search-result-media-left img {
              width: .35rem;
              height: .35rem;
              border-radius: 50%;
            }
            
            .search-result-media-body-author-name {
              margin-top: .02rem;
              color: #272829;
              font-weight: 400;
              font-size: .16rem;
              line-height: .15rem;
            }
            
            .search-result-media-body-time {
              margin-top: .06rem;
              color: #a2a6a8;
              font-size: .12rem;
              line-height: .12rem;
            }
            
            h1.search-result-title-h1 {
              font-size: 0.16rem;
            }
            .search-result-content {
              min-height: 66px;
            }
            span.search-result-content-span {
              color: #141414;
              text-overflow: ellipsis;
              display: inline;
              word-break: break-all;
            }
            
            .search-result-title ,
            .search-result-content,
            .search-result-bottom-toolbar{
              margin-top: 0.08rem;
            }
            
            span.search-result-bottom-toolbar-span {
              color: #b7b9c1;
            }
            span.search-result-bottom-toolbar-span::before{
              content:"贴吧："   
            }
            `);
          }

          /**
           * 设置搜索结果模式
           * @param {Element} searchElement
           * @param {Element} orderElement
           */
          function setCurrentOrderHTML(searchElement, orderElement) {
            for (const targetElement of orderElement.querySelectorAll("a")) {
              let targetElementHTML = DOMUtils.html(targetElement);
              let flag = false;
              if (
                (targetElementHTML.includes("按时间顺序") &&
                  searchModel === 0) ||
                (targetElementHTML.includes("按时间倒序") &&
                  searchModel === 1) ||
                (targetElementHTML.includes("按相关性顺序") &&
                  searchModel === 2) ||
                (targetElementHTML.includes("只看主题贴") && searchModel === 3)
              ) {
                flag = true;
              }
              if (flag) {
                log.success(`当前搜索模式-${targetElementHTML}`);
                DOMUtils.replaceWith(
                  targetElement,
                  `<b>${targetElementHTML}</b>`
                );
                break;
              }
            }
            if (searchType === 1) {
              DOMUtils.val(searchElement.querySelector("#searchtb"), true);
              log.success("当前搜索类型-全吧搜索");
            } else if (searchType === 0) {
              log.success("当前搜索类型-吧内搜索");
            } else {
              log.error("未知的搜索类型，请排查");
            }
          }
          /**
           * 设置搜索结果模式点击事件
           */
          function setOrderClickEvent() {
            DOMUtils.on(document, "click", ".s_order a", function (event) {
              let clickOrderElement = event.target;
              let clickOrderHTML = DOMUtils.html(clickOrderElement);
              let orderBElement = document.querySelector(".s_order b");
              DOMUtils.replaceWith(
                orderBElement,
                `<a>${DOMUtils.html(orderBElement)}</a>`
              );
              clickOrderElement.replaceWith(`<b>${clickOrderHTML}</b>`);
              if (clickOrderHTML.includes("按时间顺序")) {
                searchModel = 0;
                log.success("设置当前搜索模式-按时间顺序");
              } else if (clickOrderHTML.includes("按相关性顺序")) {
                searchModel = 2;
                log.success("设置当前搜索模式-按相关性顺序");
              } else if (clickOrderHTML.includes("只看主题贴")) {
                searchModel = 3;
                log.success("设置当前搜索模式-只看主题贴");
              } else {
                searchModel = 1;
                log.success("设置当前搜索模式-按时间倒序");
              }
              nextPageUrl = null;
              removeScrollListener();
              document.querySelector(".more-btn-desc").click();
            });
            DOMUtils.on(
              document,
              "change",
              ".s_search input[type='radio']",
              function (event) {
                if (event.target.id === "searchtb") {
                  searchType = 1;
                  log.success("切换搜索模式-全吧搜索");
                } else if (event.target.id === "nowtb") {
                  searchType = 0;
                  log.success("切换搜索模式-吧内搜索");
                } else {
                  log.error("未知的搜索类型，请排查");
                }
              }
            );
          }
          async function _click_event_() {
            tiebaCommentConfig.removeScrollListener();
            let contentElement =
              document.querySelector(".main-thread-content-margin") ||
              document.querySelector(".main-thread-content") ||
              document.querySelector(".tb-page__main");
            DOMUtils.remove("#replySwitch");
            DOMUtils.remove(".post-item");
            DOMUtils.html(contentElement, "");
            searchInputElement.focus();
            let searchText = searchInputElement.value.trim();
            if (utils.isNull(searchText)) {
              alert("请勿输入纯空格或空内容");
              return;
            }
            loadingView.setText("Loading...", true);
            loadingView.show();
            if (searchType === 0) {
              if (utils.isNull(tiebaData.forumName)) {
                loadingView.hide();
                alert("获取当前吧失败");
                return;
              }
              log.success("当前搜索的范围吧：" + tiebaData.forumName);
            }
            /* 搜索的吧，留空是全吧搜索 */
            let searchKW = searchType === 1 ? "" : tiebaData.forumName;
            let searchResult = await getSearchResult(
              searchText,
              void 0,
              searchModel,
              searchKW
            );
            tiebaCommentConfig.removeScrollListener();
            if (!searchResult) {
              loadingView.hide();
              alert("请求失败，详情请看控制台");
              return;
            }
            if (
              typeof searchResult === "string" &&
              (searchResult.startsWith("抱歉") ||
                searchResult.startsWith("获取内容为空"))
            ) {
              DOMUtils.html(contentElement, "");
              searchModel = 1;
              loadingView.hide();
              alert(searchResult + " 已重置搜索模式为-按时间倒序");
              return;
            }
            DOMUtils.html(contentElement, "");
            log.success(searchResult);
            let searchElement = DOMUtils.createElement("div", {
              className: "s_search",
              innerHTML: `
              搜索类型：
              <input id="nowtb" name="tb" type="radio"checked="checked">
              <label for="nowtb">吧内搜索</label>
              <input id="searchtb" name="tb" type="radio">
              <label for="searchtb">全吧搜索</label>`,
            });
            let orderElement = DOMUtils.createElement("div", {
              className: "s_order",
              innerHTML: `
              排序结果：
              <a>按时间倒序</a>
              <span class="split_line">|</span>
              <a>按时间顺序</a>
              <span class="split_line">|</span>
              <a>按相关性顺序</a>
              <span class="split_line">|</span>
              <a>只看主题贴</a>
              `,
            });
            setCurrentOrderHTML(searchElement, orderElement);
            DOMUtils.append(contentElement, searchElement);
            DOMUtils.append(contentElement, orderElement);
            for (const searchResultItem of searchResult) {
              DOMUtils.append(contentElement, getItemElement(searchResultItem));
            }
            loadingView.hide();
            if (nextPageUrl) {
              addScrollListener();
            }
          }
          /**
           * 添加滚动监听
           */
          function addScrollListener() {
            document.addEventListener("scroll", lockFunction.run);
            log.success("添加scroll事件监听");
          }
          /**
           * 移除滚动监听
           */
          function removeScrollListener() {
            document.removeEventListener("scroll", lockFunction.run);
            log.success("移除scroll事件监听");
          }
          /**
           * 滚动事件
           */
          async function _scroll_event_() {
            if (!utils.isNearBottom()) {
              return;
            }
            loadingView.show();
            if (!nextPageUrl) {
              removeScrollListener();
              log.success("已到达最后一页");
              loadingView.show();
              return;
            }
            let contentElement =
              document.querySelector(".main-thread-content-margin") ||
              document.querySelector(".main-thread-content") ||
              document.querySelector(".tb-page__main");
            let searchResult = await getSearchResult(nextPageUrl);
            if (!searchResult) {
              loadingView.hide();
              alert("请求下一页失败，详情请看控制台");
              return;
            }
            if (
              typeof searchResult === "string" &&
              (searchResult.startsWith("抱歉") ||
                searchResult.startsWith("获取内容为空"))
            ) {
              loadingView.hide();
              alert(searchResult);
              return;
            }
            log.success(searchResult);
            for (const searchResultItem of searchResult) {
              DOMUtils.append(contentElement, getItemElement(searchResultItem));
            }
            loadingView.hide();
            if (!nextPageUrl) {
              removeScrollListener();
              log.success("已到达最后一页");
              return;
            }
          }
          log.success("当前是在吧内");
          lockFunction = new utils.LockFunction(_scroll_event_, this);
          tiebaCommentConfig.removeScrollListener();
          this.searchSuggestion.removeAllEvent();
          let searchInputElement = document.querySelector("#tieba-search");
          /* 搜索框显示出来 */
          searchInputElement.previousElementSibling.style.display = "none";
          searchInputElement.style.display = "block";
          document
            .querySelector(".more-btn-desc")
            .addEventListener("click", _click_event_);
          utils.listenKeyboard(
            searchInputElement,
            "keypress",
            (keyName, keyValue, otherKeyList, event) => {
              if (keyName === "Enter") {
                _click_event_(event);
              }
            }
          );
          setOrderClickEvent();
          setCSS();
        },
      };

      /**
       * 贴吧其它功能
       */
      const tiebaBusiness = {
        /**
         * 伪装客户端已调用
         */
        clientCallMasquerade() {
          let originGetItem = window.localStorage.getItem;
          /* 劫持localStorage */
          window.localStorage.getItem = function (key) {
            if (
              key === "p_w_app_call" ||
              key === "p_w_launchappcall" ||
              key === "loginWakeModal"
            ) {
              log.info("伪装客户端已调用 " + key);
              return JSON.stringify({
                value: 1,
                date: utils.formatTime(void 0, "yyyyMMdd"),
              });
            } else if (
              key.startsWith("p_w_new_slient") ||
              key.startsWith("f_w_slient") ||
              key.startsWith("f_w_pop_slient") ||
              key.startsWith("f_w_floor") ||
              key.startsWith("t_w_slient") ||
              key.startsWith("t_w_pop_slient") ||
              key.startsWith("auto_slient_wakeup")
            ) {
              log.info("伪装客户端已调用 " + key);
              return "1";
            } else {
              return originGetItem.call(window.localStorage, key);
            }
          };
          /* 伪装localStorage已赋值 */
          let masqueradeParamsList = [
            "p_w_new_slient_",
            "f_w_slient_",
            "f_w_pop_slient_",
            "f_w_floor_",
            "t_w_slient_",
            "t_w_pop_slient_",
            "auto_slient_wakeup_",
          ];
          masqueradeParamsList.forEach((masqueradeParam) => {
            window.localStorage.setItem(
              masqueradeParam + utils.formatTime(void 0, "yyyy-MM-dd"),
              1
            );
          });
          for (let index = 0; index < window.localStorage.length; index++) {
            let keyName = window.localStorage.key(index);
            masqueradeParamsList.forEach((item) => {
              if (
                keyName.startsWith(item) &&
                !keyName.endsWith(utils.formatTime(void 0, "yyyy-MM-dd"))
              ) {
                log.success("删除过期键 ===> " + keyName);
                window.localStorage.removeItem(keyName);
              }
            });
          }
        },
        /**
         * 获取本帖楼主的信息
         * @returns {?{
         *   id: number,
         *   name: string,
         *   name_show: string,
         *   portrait: string,
         *   show_nickname: string,
         *   type: number,
         *   userhide: number,
         * }}
         */
        getLandlordInfo() {
          return document.querySelector(
            ".main-page-wrap .user-line-wrapper.thread-user-line"
          )?.__vue__?.$props?.author;
        },
        /**
         * 获取当前的贴吧名字
         * @returns {string}
         */
        getCurrentForumName() {
          let tbMobileViewport = document.querySelector(".tb-mobile-viewport")
            ?.__vue__?.forum?.name;
          let mainPageWrap =
            document.querySelector(".main-page-wrap")?.__vue__?.$children[0]
              ?.$children[0]?.forum?.name;
          let tbForum = document.querySelector(".tb-mobile-viewport .tb-forum")
            ?.__vue__?.forum?.name;
          let appView =
            document.querySelector(".app-view")?.__vue__?.forum?.name;
          return tbMobileViewport || mainPageWrap || tbForum || appView;
        },
        /**
         * 获取当前帖子的tid
         * @returns {?string}
         */
        getCurrentForumPostTid() {
          let tid = null;
          let appViewVue = document.querySelector(".app-view")?.__vue__;
          if (appViewVue?.thread?.id !== "" && appViewVue?.thread?.id != null) {
            tid = appViewVue.thread.id.toString();
          } else {
            tid = window.location.pathname.match(/([0-9]+)/g)?.[0];
          }
          return tid;
        },
        /**
         * 添加滚动到顶部按钮
         */
        addScrollTopButton() {
          log.success("添加滚动到顶部按钮");
          let isInsertButton = false;
          let showScrollTopButton = function () {
            isInsertButton = true;
            let buttonElement = DOMUtils.parseHTML(
              `
            <div class="tb-totop whitesev-tb-totop">
              <style>
              .whitesev-tb-totop{
                position: fixed;
                right: .09rem;
                bottom: 1rem;
                z-index: 1000;
              }
              .whitesev-tb-totop .tb-totop__span{
                display: inline-block;
                width: .51rem;
                height: .51rem;
              }
              .whitesev-tb-totop .tb-totop__svg{
                width: 100%;
                height: 100%;
              }
              </style>
              <span class="tb-totop__span">
                <svg class="tb-totop__svg">
                  <use xlink:href="#icon_frs_top_50"></use>
                </svg>
              </span>
            </div>`,
              true,
              false
            );
            DOMUtils.on(buttonElement, "click", function () {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            });
            document.body.appendChild(buttonElement);
          };
          let hideScrollTopButton = function () {
            isInsertButton = false;
            document.querySelector(".whitesev-tb-totop")?.remove();
          };
          let checkScroll = new utils.LockFunction(
            function () {
              let scrollTop =
                window.document.documentElement.scrollTop ||
                window.document.body.scrollTop;
              let scrollHeight =
                window.innerHeight ||
                document.documentElement.clientHeight ||
                window.document.body.clientHeight;
              if (scrollTop > scrollHeight * 2) {
                /* 页面中不存在该按钮元素才显示 */
                if (!isInsertButton) {
                  showScrollTopButton();
                }
              } else {
                /* 隐藏 */
                hideScrollTopButton();
              }
            },
            this,
            50
          );
          window.addEventListener("scroll", checkScroll.run);
        },
        /**
         * 添加顶部的楼主头像/名字的点击事件-直接进入楼主的个人主页
         */
        addAuthorClickEvent() {
          utils
            .waitNode("div.main-page-wrap .main-thread-content .user-line")
            .then((element) => {
              DOMUtils.on(element, "click", function () {
                let vueInfo =
                  element.parentElement?.__vue__ ||
                  element.closest(".user-line-wrapper")?.__vue__;
                let authorInfo = vueInfo.author;
                if (!authorInfo) {
                  log.error("获取贴主信息失败", vueInfo);
                  return;
                }
                log.success(["贴主信息", authorInfo]);
                window.open(`/home/main?id=${authorInfo.portrait}`);
              });
            });
        },
        /**
         * 检测骨架屏
         */
        checkSkeleton() {
          setTimeout(() => {
            let appElement = document.querySelector("#app");
            if (appElement && appElement.innerHTML === "") {
              Qmsg.warning("检测到骨架屏，异常加载，刷新页面", {
                onClose() {
                  window.location.reload();
                },
              });
            }
          }, 900);
        },
      };

      /**
       * 贴吧 首页功能
       */
      const tiebaHome = {
        /**
         * 重定向跳转
         */
        redirectJump() {
          log.info("话题热榜-阻止默认跳转");
          DOMUtils.on(document, "click", ".topic-share-item", function (event) {
            utils.preventEvent(event);
            window?.stop();
            let clickNode = event.target;
            let dataTrack = clickNode.getAttribute("data-track");
            if (dataTrack == null) {
              log.error("未找到data-track");
              log.error(clickNode);
              return false;
            }
            dataTrack = utils.toJSON(dataTrack);
            let tid = dataTrack["tid"];
            if (tid == null) {
              log.error("未找到tid");
              log.error(dataTrack);
              return false;
            }
            log.success(`跳转至: https://tieba.baidu.com/p/${tid}`);
            window.location.href = `https://tieba.baidu.com/p/${tid}`;
            return false;
          });
          utils.waitNodeList(".thread-bottom .forum").then((nodeList) => {
            log.success("设置贴吧种类正确跳转");
            log.success(nodeList);
            nodeList.forEach((item) => {
              item.ontouchstart = function (event) {
                utils.preventEvent(event);
                window?.stop();
                window.location.href = `https://tieba.baidu.com/f?kw=${DOMUtils.text(
                  event.target
                )
                  .trim()
                  .replace(/吧$/g, "")}`;
                return false;
              };
            });
          });
          utils
            .waitNode(".topic-share-thread .list-content")
            .then((element) => {
              utils.mutationObserver(element, {
                callback: (mutations) => {
                  mutations.forEach((item) => {
                    item.addedNodes.forEach((item2) => {
                      if (
                        typeof item2.className === "string" &&
                        item2.className.includes("topic-share-item")
                      ) {
                        log.success("设置新增的帖子的贴吧种类正确跳转");
                        log.success(item2);
                        item2.querySelector(
                          ".thread-bottom .forum"
                        ).ontouchstart = function (event) {
                          utils.preventEvent(event);
                          window?.stop();
                          window.location.href = `https://tieba.baidu.com/f?kw=${DOMUtils.text(
                            event.target
                          )
                            .trim()
                            .replace(/吧$/g, "")}`;
                          return false;
                        };
                      }
                    });
                  });
                },
                config: {
                  childList: true,
                  subtree: true,
                },
              });
            });

          DOMUtils.on(
            document,
            "touchstart",
            ".topic-share-item .forum",
            function (event) {
              return utils.preventEvent(event);
            }
          );
        },
      };

      /**
       * 贴吧 吧内功能
       */
      const tiebaBaNei = {
        /**
         * __vue__
         * @type {object}
         */
        vueRootView: null,
        /**
         * 解除签到限制
         */
        removeForumSignInLimit() {
          /* 修改页面中的APP内签到 */
          utils.waitNode(".tb-mobile-viewport").then(async () => {
            tiebaBaNei.vueRootView = document.querySelector(
              ".tb-mobile-viewport"
            ).__vue__;
            let isLogin = Boolean(
              tiebaBaNei.vueRootView?.["user"]?.["is_login"]
            );
            utils.waitNode(".tb-forum-user__join-btn").then((element) => {
              if (isLogin) {
                element.children[0].innerText = "点击签到";
              } else {
                element.children[0].innerText = "点击登录";
              }
              log.success("修改页面中的APP内签到");
              DOMUtils.on(
                element,
                "click",
                async function (event) {
                  utils.preventEvent(event);
                  if (isLogin) {
                    /* 已登录-签到 */
                    let userPortrait =
                      tiebaBaNei.vueRootView["user"]["portrait"];
                    let forumName = tiebaBaNei.vueRootView["forum"]["name"];
                    let tbs =
                      tiebaBaNei.vueRootView["$store"]["state"]["common"][
                        "tbs"
                      ];
                    let signResult = await BaiduExtraApi.tieba.forumSign(
                      forumName,
                      tbs
                    );
                    if (typeof signResult["data"] === "object") {
                      Qmsg.success(
                        `今日本吧第${signResult["data"]["finfo"]["current_rank_info"]["sign_count"]}个签到`
                      );
                    } else {
                      Qmsg.error(signResult["error"]);
                    }
                  } else {
                    /* 未登录-前往登录 */
                    tiebaBaNei.vueRootView["isShowModal"] = true;
                  }
                },
                {
                  capture: true,
                }
              );
            });
          });
        },
        /**
         * 记住当前用户的看帖排序
         * + -1 不知道什么作用
         * + 1  不知道什么作用
         * + 2  回复
         * + 3  发布
         */
        rememberPostSort() {
          let userSortModel = parseInt(
            PopsPanel.getValue("baidu-tieba-sort-model", 3)
          );
          utils
            .waitNode(".tb-page__main .tb-sort .tab-pack")
            .then((element) => {
              let originChange = element.__vue__.change;
              originChange(userSortModel);
              element.__vue__.change = function (index) {
                PopsPanel.setValue("baidu-tieba-sort-model", index);
                originChange(index);
              };
              log.info("注入记住当前选择的看帖排序");
            });
        },
        /**
         * 过滤重复帖子
         */
        filterDuplicatePosts() {
          utils.waitNode(".tb-threadlist").then(async (element) => {
            await utils.waitVueByInterval(
              element,
              (__vue__) => {
                return Boolean(__vue__?.$props?.list);
              },
              100,
              10000
            );
            let tbThreadListVue =
              document.querySelector(".tb-threadlist").__vue__;
            if (!tbThreadListVue) {
              log.error("未找到.tb-threadlist元素的vue属性");
              return;
            }
            log.success("监听帖子数量改变");
            tbThreadListVue.$watch(
              "list",
              function (newVal, oldVal) {
                log.success("帖子数量触发改变");
                let postsId = {};
                for (let index = 0; index < this.$props.list.length; index++) {
                  let postsInfo = this.$props.list[index];
                  if (!postsInfo.id) {
                    /* 不存在id属性，可能是中间的广告？ */
                    continue;
                  }
                  if (postsId[postsInfo.id]) {
                    /* 重复帖子 */
                    log.error("移除重复帖子：" + postsInfo.title);
                    this.$props.list.splice(index, 1);
                    index--;
                    continue;
                  }
                  postsId[postsInfo.id] = postsInfo.title ?? "";
                }
              },
              {
                deep: false,
                immediate: true,
              }
            );
          });
        },
      };

      /**
       * 贴吧 帖子功能
       */
      const tiebaPost = {
        /**
         * @type {{
         * bsize: string,
         * origin_size: number,
         * origin_src: string,
         * size: string,
         * src: string,
         * type: number
         * }[]}
         */
        mainPostImgList: [],
        /**
         * 注册全局贴吧图片点击预览(只预览通过贴吧上传的图片，非其它图床图片)
         */
        optimizeImagePreview() {
          /**
           * 查看图片
           * @param {Array} imgList
           * @param {Number} _index_
           */
          function viewIMG(imgList = [], _index_ = 0) {
            let viewerULNodeHTML = "";
            imgList.forEach((item) => {
              viewerULNodeHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
            });
            let viewerULNode = DOMUtils.createElement("ul", {
              innerHTML: viewerULNodeHTML,
            });
            let viewer = new Viewer(viewerULNode, {
              inline: false,
              url: "data-src",
              zIndex: utils.getMaxZIndex() + 100,
              hidden: () => {
                viewer.destroy();
              },
            });
            _index_ = _index_ < 0 ? 0 : _index_;
            viewer.view(_index_);
            viewer.zoomTo(1);
            viewer.show();
          }
          DOMUtils.on(document, "click", "img", function (event) {
            let clickElement = event.target;
            let imgSrc =
              clickElement.getAttribute("data-src") ||
              clickElement.getAttribute("src");
            if (
              clickElement.parentElement.className === "viewer-canvas" ||
              clickElement.parentElement.hasAttribute("data-viewer-action")
            ) {
              return;
            }
            if (
              imgSrc?.match(/^http(s|):\/\/(tiebapic|imgsa).baidu.com\/forum/g)
            ) {
              log.info(`点击图片👇`);
              log.info(clickElement);
              if (clickElement.parentElement.className === "img-box") {
                /* 帖子主体内的图片 */
                let parentMain = clickElement.closest(
                  ".img-sudoku.main-img-sudoku"
                );
                log.info(parentMain);
                if (!parentMain) {
                  viewIMG([imgSrc]);
                  return;
                }
                utils.preventEvent(event);
                let lazyImgList = [];
                if (tiebaPost.mainPostImgList.length) {
                  tiebaPost.mainPostImgList.forEach((item) => {
                    lazyImgList.push(item.src);
                  });
                } else {
                  Array.from(parentMain.querySelectorAll("img.img")).forEach(
                    (item) => {
                      let _imgSrc_ =
                        item.getAttribute("data-src") ||
                        item.getAttribute("src");
                      log.info(`获取图片: ${_imgSrc_}`);
                      let imgUrlInfo = new URL(_imgSrc_);
                      if (imgUrlInfo.pathname.startsWith("/forum/")) {
                        let picName = imgUrlInfo.pathname.split("/").pop();
                        let picIdSplit = picName.split(".");
                        if (picIdSplit) {
                          let picId = picIdSplit[0];
                          if (tiebaData.imageMap.has(picId)) {
                            _imgSrc_ = tiebaData.imageMap.get(picId);
                            log.success(["替换成高清图片", _imgSrc_]);
                          }
                        }
                      }
                      lazyImgList.push(_imgSrc_);
                    }
                  );
                }

                log.info("图片列表👇");
                log.info(lazyImgList);
                viewIMG(lazyImgList, lazyImgList.indexOf(imgSrc));
              } else if (
                clickElement.parentElement.className === "text-content"
              ) {
                /* 评论区内的图片 */
                let parentMain = clickElement.parentElement;
                let lazyImgList = [];
                log.info(parentMain);
                parentMain.querySelectorAll("img.BDE_Image").forEach((item) => {
                  let _imgSrc_ =
                    item.getAttribute("data-src") || item.getAttribute("src");
                  log.info(`获取图片: ${_imgSrc_}`);
                  let imgUrlInfo = new URL(_imgSrc_);
                  if (imgUrlInfo.pathname.startsWith("/forum/")) {
                    let picName = imgUrlInfo.pathname.split("/").pop();
                    let picIdSplit = picName.split(".");
                    if (picIdSplit) {
                      let picId = picIdSplit[0];
                      if (tiebaData.imageMap.has(picId)) {
                        _imgSrc_ = tiebaData.imageMap.get(picId);
                        log.success(["替换成高清图片", _imgSrc_]);
                      }
                    }
                  }
                  lazyImgList.push(_imgSrc_);
                });
                log.info("评论区图片列表👇");
                log.info(lazyImgList);
                viewIMG(lazyImgList, lazyImgList.indexOf(imgSrc));
              } else {
                /* 单个图片预览 */
                viewIMG([imgSrc]);
              }
            }
          });
          DOMUtils.ready(function () {
            utils.waitNodeWithInterval("div.img-sudoku", 10000).then(() => {
              utils
                .waitNodeWithInterval("div.img-sudoku img", 10000)
                .then(() => {
                  let imgSudoKuElement =
                    document.querySelector("div.img-sudoku");
                  let imgSudoKuImageElementList =
                    imgSudoKuElement.querySelectorAll("img.img");
                  log.success([
                    "重构主内容的图片",
                    imgSudoKuElement,
                    imgSudoKuImageElementList,
                  ]);
                  imgSudoKuImageElementList.forEach((element) => {
                    if (element.hasAttribute("data-src")) {
                      element.src = element.getAttribute("data-src");
                    }
                  });
                  /* 通过重新赋值innerHTML来覆盖原有的事件 */
                  imgSudoKuElement.innerHTML = imgSudoKuElement.innerHTML;
                });
              utils
                .waitVueByInterval(
                  () => {
                    return document.querySelector("div.img-sudoku");
                  },
                  (__vue__) => {
                    return __vue__?.imgs != null;
                  },
                  250,
                  10000
                )
                .then((isFind) => {
                  if (!isFind) {
                    return;
                  }
                  let imgSudoKuElement =
                    document.querySelector("div.img-sudoku");
                  tiebaPost.mainPostImgList = imgSudoKuElement.__vue__.imgs;
                  log.success([
                    "Vue上隐藏的帖子高清图片列表",
                    tiebaPost.mainPostImgList,
                  ]);
                });
            });
          });
        },
        /**
         * 初始化帖子内图片信息
         */
        initPostImageInfo() {
          let forumName = tiebaBusiness.getCurrentForumName();
          let tid = tiebaBusiness.getCurrentForumPostTid();
          if (forumName && tid) {
            BaiduExtraApi.tieba
              .getPictureGuide(forumName, tid)
              .then((result) => {
                if (!result) {
                  log.error("获取图片信息失败");
                  return;
                }
                log.success(["请求本贴图片信息", result]);
                OriginPrototype.Object.values(result["pic_list"]).forEach(
                  (item) => {
                    /* 图片id */
                    let id =
                      item?.["img"]?.["original"]?.["id"] ||
                      item?.["img"]?.["medium"]?.["id"] ||
                      item?.["img"]?.["screen"]?.["id"];
                    let pictureUrl =
                      item?.["img"]?.["original"]?.["waterurl"] ||
                      item?.["img"]?.["screen"]?.["waterurl"];

                    if (id != null && pictureUrl != null) {
                      tiebaData.imageMap.set(id, pictureUrl);
                    }
                  }
                );
              });
          }
        },
        /**
         * 强制查看-贴子不存在或者已被删除
         */
        repairErrorThread() {
          /**
           * 获取页面信息
           * @returns {Promise<?{
           * field: object,
           * PageData: object,
           * time: number
           * }>}
           */
          async function getPageInfo() {
            let getResp = await httpx.get(window.location.href, {
              headers: {
                "User-Agent": utils.getRandomPCUA(),
              },
            });
            if (!getResp.status) {
              return;
            }
            log.info(getResp);
            let pageDOM = DOMUtils.parseHTML(
              getResp.data.responseText,
              true,
              true
            );
            let postListFirstElement = pageDOM.querySelector(
              "#j_p_postlist .l_post"
            );
            if (!postListFirstElement) {
              log.error("未找到#j_p_postlist .l_post元素");
              Qmsg.error("未找到#j_p_postlist .l_post元素");
              return;
            }
            if (!postListFirstElement.hasAttribute("data-field")) {
              log.error("未找到 data-field 属性");
              Qmsg.error("未找到 data-field 属性");
              return;
            }
            let field = utils.toJSON(
              postListFirstElement.getAttribute("data-field")
            );
            let PageData = null;
            let PageDataScriptString = "";
            Array.from(pageDOM.querySelectorAll("script")).forEach(
              (scriptElement) => {
                if (scriptElement.innerHTML.includes("var PageData")) {
                  PageDataScriptString = `
                ${PageDataScriptString}

                ${scriptElement.innerHTML}

                `;
                }
              }
            );
            if (PageDataScriptString === "") {
              log.error("未找到 PageData的script标签");
              Qmsg.error("未找到 PageData的script标签");
              return;
            }
            PageData = new Function(`
              ${PageDataScriptString}

              return PageData;
              `)();
            if (!PageData) {
              log.error("未找到 PageData");
              Qmsg.error("未找到 PageData");
              return;
            }
            let time =
              pageDOM.querySelector(
                "#j_p_postlist .post-tail-wrap span.tail-info:nth-child(6)"
              )?.innerText || "";
            if (utils.isNotNull(time)) {
              time = utils.formatToTimeStamp(time) / 1000;
            }
            return {
              field: field,
              PageData: PageData,
              time: time,
            };
          }
          /**
           * 获取帖子列表信息
           * @param {object} field
           * @param {object} PageData
           * @param {number} time 帖子时间
           * @returns
           */
          function getPostList(field, PageData, time) {
            let data = {
              agree: {
                agree_num: 0,
                disagree_num: 0,
              },
              author: {
                /* author.user_id */
                id: field.author.user_id,
                /* author.user_name */
                name: field.author.user_name,
                /* author.user_nickname */
                name_show: field.author.user_nickname,
                /* author.portrait */
                portrait: field.author.portrait,
                /* author.user_nickname */
                show_nickname: field.author.user_nickname,
                type: 1,
                userhide: 0,
              },
              content: [
                {
                  /* content.content */
                  text: field.content.content,
                  /* parseInt(content.type) */
                  type: parseInt(field.content.type),
                },
              ],
              floor: 1,
              game_info: [null],
              /* content.post_id */
              id: parseInt(field.content.post_id),
              is_bub: 0,
              is_voice: 0,
              is_vote: 0,
              ptype: 0,
              reply_num: PageData.thread.reply_num,
              sub_post_number: 0,
              time: time,
              title: PageData.thread.title,
              index: 0,
            };
            let firstData = data;
            let secondData = data;
            secondData.floor = 3;
            return [firstData, secondData];
          }
          utils.waitNodeWithInterval(".app-view", 10000).then(async () => {
            await utils.waitPropertyByInterval(
              () => {
                return document.querySelector(".app-view").__vue__;
              },
              () => {
                return (
                  typeof document.querySelector(".app-view").__vue__
                    .isErrorThread === "boolean"
                );
              },
              void 0,
              10000
            );
            let appViewVue = document.querySelector(".app-view").__vue__;
            if (!(appViewVue && appViewVue.isErrorThread)) {
              return;
            }
            /* 该帖子不能查看 */
            log.warn("该帖子不能查看 修复中...");
            Qmsg.info("该帖子不能查看 修复中...");
            let pageInfo = await getPageInfo();
            if (!pageInfo) {
              return;
            }
            log.info(["获取到的页面信息", pageInfo]);
            let postList = getPostList(
              pageInfo.field,
              pageInfo.PageData,
              pageInfo.time
            );
            appViewVue.postList = postList;
            appViewVue.postAuthorId = postList[0].author.id;
            appViewVue.thread = {
              agree: {
                agree_num: 0,
                disagree_num: 0,
              },
              collect_mark_pid: "0",
              collect_status: 0,
              create_time: postList[0].time,
              id: appViewVue.tid,
              is_frs_mask: 0,
              is_share_thread: 0,
              reply_num: postList[0].reply_num,
              robot_thread_type: 0,
              t_share_img: "",
              thread_type: 0,
              valid_post_num: 0,
              works_info: {},
            };
            appViewVue.forum = {
              /* PageData.forum.avatar */
              avatar: pageInfo.PageData.forum.avatar,
              /* PageData.forum.first_class */
              first_dir: pageInfo.PageData.forum.first_class,
              /* PageData.forum.id */
              id: pageInfo.PageData.forum.id,
              is_exists: 1,
              is_forbidden: 0,
              is_forum_merged: 0,
              /* PageData.forum.name */
              name: pageInfo.PageData.forum.name,
              /* PageData.forum.second_class */
              second_dir: pageInfo.PageData.forum.second_class,
            };
            /* 固定一下值吧，没测出什么作用 */
            appViewVue.postNum = 100;

            appViewVue.isErrorThread = false;
            setTimeout(() => {
              DOMUtils.append(
                document.querySelector(
                  "div.app-view div.thread-main-wrapper .thread-text"
                ),
                postList[0].content[0].text
              );
            }, 300);
          });
        },
      };

      /**
       * 贴吧api
       * + https://www.52fisher.cn/93.html
       */
      const tiebaApi = {
        /**
         * 根据un获取个人主页信息
         * @param {string} un
         */
        async getUserHomeInfoByUN(un) {
          let getResp = await httpx.get(
            `https://tieba.baidu.com/home/get/panel?ie=utf-8&un=${un}`,
            {
              headers: {
                "User-Agent": utils.getRandomPCUA(),
                Host: "tieba.baidu.com",
                Referer: "https://tieba.baidu.com/",
              },
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
         * 根据portrait获取用户头像
         */
        getUserAvatar(portrait) {
          let authorImgId = "6LZ1dD3d1sgCo2Kml5_Y_D3";
          return `https://gss0.bdstatic.com/${authorImgId}/sys/portrait/item/${portrait}`;
        },
      };
      if (PopsPanel.getValue("baidu_tieba_clientCallMasquerade")) {
        tiebaBusiness.clientCallMasquerade();
      }
      BaiduHijack.hijackElementAppendChild();
      if (PopsPanel.getValue("baidu_tieba_hijack_wake_up")) {
        BaiduHijack.hijackFunctionCall_WebPack_TieBa();
      }
      GM_addStyle(this.css.tieba);
      log.info("插入CSS规则");
      if (Router.isTieBaPost()) {
        if (PopsPanel.getValue("baidu_tieba_optimize_see_comments")) {
          log.success("优化查看评论");
          tiebaCommentConfig.init();
        }
        if (PopsPanel.getValue("baidu_tieba_optimize_image_preview")) {
          log.success("优化图片预览");
          tiebaPost.optimizeImagePreview();
        }
        if (PopsPanel.getValue("baidu_tieba_repairErrorThread")) {
          log.success("强制查看-贴子不存在或者已被删除");
          tiebaPost.repairErrorThread();
        }
      }
      if (Router.isTieBaNewTopic()) {
        if (PopsPanel.getValue("baidu_tieba_topic_redirect_jump")) {
          tiebaHome.redirectJump();
        }
      }
      if (Router.isTieBaNei()) {
        /* 吧内 */
        if (PopsPanel.getValue("baidu_tieba_remember_user_post_sort")) {
          tiebaBaNei.rememberPostSort();
        }
        if (PopsPanel.getValue("baidu_tieba_filterDuplicatePosts")) {
          tiebaBaNei.filterDuplicatePosts();
        }
        if (PopsPanel.getValue("baidu_tieba_removeForumSignInLimit")) {
          tiebaBaNei.removeForumSignInLimit();
        }
      } else {
        /* 贴内 */
        if (PopsPanel.getValue("baidu_tieba_add_scroll_top_button_in_forum")) {
          tiebaBusiness.addScrollTopButton();
        }
        if (
          PopsPanel.getValue(
            "baidu_tieba_clickOnTheOwnerSAvatarToCorrectlyRedirectToTheHomepage"
          )
        ) {
          tiebaBusiness.addAuthorClickEvent();
        }
      }
      if (PopsPanel.getValue("baidu_tieba_add_search")) {
        tiebaSearchConfig.init();
      }
      DOMUtils.ready(function () {
        if (PopsPanel.getValue("baidu_tieba_checkSkeleton")) {
          tiebaBusiness.checkSkeleton();
        }
        utils
          .waitAnyNode(".tb-mobile-viewport", ".main-page-wrap")
          .then(async () => {
            let interval = setInterval(() => {
              tiebaData.forumName = tiebaBusiness.getCurrentForumName();
              if (tiebaData.forumName) {
                log.info("当前吧：" + tiebaData.forumName);
                if (PopsPanel.getValue("baidu_tieba_optimize_image_preview")) {
                  tiebaPost.initPostImageInfo();
                }
                clearInterval(interval);
              }
            }, 250);
          });
      });
    },
    /**
     * 百度文库
     */
    wenku() {
      if (!Router.isWenKu()) {
        return;
      }
      GM_addStyle(this.css.wenku);
      log.info("插入CSS规则");
      const WenKu = {
        init() {
          if (PopsPanel.getValue("baidu_wenku_block_member_picks")) {
            this.shieldVipPicks();
          }

          if (PopsPanel.getValue("baidu_wenku_blocking_app_featured")) {
            this.shieldAppPicks();
          }
          if (PopsPanel.getValue("baidu_wenku_blocking_related_documents")) {
            this.shieldRelatedDocuments();
          }
          if (PopsPanel.getValue("baidu_wenku_blocking_bottom_toolbar")) {
            this.shieldBottomToolBar();
          }
          if (PopsPanel.getValue("baidu_wenku_shield_next_btn")) {
            this.shieldNextArticleButton();
          }
        },
        /* 屏蔽会员精选 */
        shieldVipPicks() {
          GM_addStyle(`
          div[class*="vip-choice_"][data-ait-action="vipChoiceShow"]{
            display: none !important;
          }`);
        },
        /* 屏蔽APP精选 */
        shieldAppPicks() {
          GM_addStyle(`
          div[class*="app-choice_"][data-ait-action="appChoiceNewShow"],
          div.folder-wrap.invite-clipboard[data-clipboard-text]{
            display: none !important;
          }`);
        },
        /* 屏蔽相关文档 */
        shieldRelatedDocuments() {
          GM_addStyle(`
          div.fold-page-conversion,
          div.newrecom-list.invite-clipboard[data-clipboard-text]{
            display: none !important;
          }`);
        },
        /* 屏蔽底部工具栏 */
        shieldBottomToolBar() {
          GM_addStyle(`
          div.barbottom{
            display: none !important;
          }`);
        },
        /* 屏蔽下一篇按钮 */
        shieldNextArticleButton() {
          GM_addStyle(`
          div.next-page-container{
            display: none !important;
          }`);
        },
      };
      WenKu.init();
    },
    /**
     * 百度经验
     */
    jingyan() {
      if (!Router.isJingYan()) {
        return;
      }
      GM_addStyle(this.css.jingyan);
      log.info("插入CSS规则");
    },
    /**
     * 百度百科
     */
    baike() {
      if (!Router.isBaiKe()) {
        return;
      }
      GM_addStyle(this.css.baike);
      log.info("插入CSS规则");
      const BaiKe = {
        init() {
          if (
            PopsPanel.getValue("baidu_baike_automatically_expand_next_page")
          ) {
            this.automaticallyExpandNextPage();
          }
        },
        automaticallyExpandNextPage() {
          let old_Box = null;
          OriginPrototype.Object.defineProperty(unsafeWindow, "Box", {
            get() {
              if (old_Box == null) {
                return;
              }
              return new Proxy(old_Box, {
                get(target, prop, receiver) {
                  if (
                    (prop === "isBox" || prop === "$isBox") &&
                    PopsPanel.getValue("baidu-baike-Box-isBox")
                  ) {
                    return true;
                  }
                  if (
                    (prop === "isLiteBox" || prop === "$isLiteBox") &&
                    PopsPanel.getValue("baidu-baike-Box-isLiteBox")
                  ) {
                    return true;
                  }
                  if (
                    (prop === "isInfoBox" || prop === "$isInfoBox") &&
                    PopsPanel.getValue("baidu-baike-Box-isInfoBox")
                  ) {
                    return true;
                  }
                  if (
                    (prop === "isIOS" || prop === "$isIOS") &&
                    PopsPanel.getValue("baidu-baike-Box-isIOS")
                  ) {
                    return true;
                  }
                  if (
                    (prop === "isAndroid" || prop === "$isAndroid") &&
                    PopsPanel.getValue("baidu-baike-Box-isAndroid")
                  ) {
                    return true;
                  }
                  if (
                    (prop === "isAndroid" || prop === "$isAndroid") &&
                    PopsPanel.getValue("baidu-baike-Box-isAndroid")
                  ) {
                    return true;
                  }
                  if (prop === "android") {
                    let android = Reflect.get(target, prop, receiver);
                    if (
                      android["invokeApp"] &&
                      PopsPanel.getValue("baidu-baike-Box-android.invokeApp")
                    ) {
                      android["invokeApp"] = function (...args) {
                        log.info(["阻止调用android.invokeApp", args]);
                      };
                    }
                    if (
                      android["invokeLiteApp"] &&
                      PopsPanel.getValue(
                        "baidu-baike-Box-android.invokeLiteApp"
                      )
                    ) {
                      android["invokeLiteApp"] = function (...args) {
                        log.info(["阻止调用android.invokeLiteApp", args]);
                      };
                    }
                  }
                  if (prop === "ios") {
                    let ios = Reflect.get(target, prop, receiver);
                    if (
                      ios["invokeLiteApp"] &&
                      PopsPanel.getValue("baidu-baike-Box-ios.invokeApp")
                    ) {
                      ios["invokeLiteApp"] = function (...args) {
                        log.info(["阻止调用ios.invokeApp", args]);
                      };
                    }
                  }
                  return Reflect.get(target, prop, receiver);
                },
              });
            },
            set(value) {
              old_Box = value;
            },
          });
        },
      };
      BaiKe.init();
    },
    /**
     * 百度百科-他说
     */
    baiketashuo() {
      if (!Router.isBaiKeTaShuo()) {
        return;
      }
      const BaiKeTaShuo = {
        init() {
          if (PopsPanel.getValue("baidu_baike_tashuo_remove_bottom_ad")) {
            this.removeBottomAd();
          }
        },
        /**
         * 去除底部广告
         */
        removeBottomAd() {
          utils.waitNode("#index_tashuo_list").then(() => {
            utils.mutationObserver(
              document.querySelector("#index_tashuo_list"),
              {
                callback() {
                  Array.from(
                    document.querySelector("#index_tashuo_list").children
                  ).forEach((item) => {
                    if (item.className !== "J-hot-item-container") {
                      log.info(["存在广告-删除！", item]);
                      item.remove();
                    }
                  });
                },
                config: { subtree: true, childList: true, attributes: true },
              }
            );
          });
        },
      };
      BaiKeTaShuo.init();
    },
    /**
     * 百度知道
     */
    zhidao() {
      if (!Router.isZhiDao()) {
        return;
      }
      GM_addStyle(this.css.zhidao);
      log.info("插入CSS规则");
      const ZhiDao = {
        init() {
          this.removeAd();
          if (
            PopsPanel.getValue(
              "baidu_zhidao_block_recommend_more_exciting_content"
            )
          ) {
            this.blockRecommendMoreExcitingContent();
          }
          if (PopsPanel.getValue("baidu_zhidao_block_other_answers")) {
            this.blockOtherAnswers();
          }
          if (PopsPanel.getValue("baidu_zhidao_block_related_issues")) {
            this.blockRelatedIssues();
          }
          if (PopsPanel.getValue("baidu_zhidao_shield_top_fixed_toolbar")) {
            this.shieldTopFloatToolBar();
          }
        },
        removeAd() {
          if (document.querySelector(".ec-ad")) {
            DOMUtils.remove(
              DOMUtils.parent(document.querySelectorAll(".ec-ad"))
            );
          }
        },
        blockRecommendMoreExcitingContent() {
          GM_addStyle(`
          .feed-recommend-title,
          #feed-recommend,
          .mm-content-box.mm-content-line.feed-recommend{
            display: none !important;
          }`);
        },
        blockOtherAnswers() {
          GM_addStyle(`
          .replies-container + div{
            display: none !important;
          }`);
        },
        blockRelatedIssues() {
          GM_addStyle(`
          div[id^=wahsd],
          div[class^="w-question-list"]{
            display: none !important;
          }`);
        },
        shieldTopFloatToolBar() {
          GM_addStyle(
            `.iknow-root-dom-element .question-answer-container .question-answer-layer.fixed{display: none !important;}`
          );
        },
      };
      ZhiDao.init();
    },
    /**
     * 百度翻译
     */
    fanyi() {
      if (!Router.isFanYi()) {
        return;
      }
      GM_addStyle(this.css.fanyi);
      log.info("插入CSS规则");
      const FanYi = {
        init() {
          if (PopsPanel.getValue("baidu_fanyi_recommended_shielding_bottom")) {
            this.recommendedShieldingBottom();
          }
          if (PopsPanel.getValue("baidu_fanyi_other_shielding_bottom")) {
            this.shieldBottom();
          }

          if (PopsPanel.getValue("baidu_fanyi_auto_focus")) {
            this.autoFocus();
          }
        },
        recommendedShieldingBottom() {
          GM_addStyle(`
          section.article.android-style{
            display: none !important;
          }`);
        },
        shieldBottom() {
          GM_addStyle(`
          .trans-other-wrap.clearfix{
            display: none !important;
          }`);
        },
        autoFocus() {
          utils.waitNode("textarea#j-textarea").then(() => {
            setTimeout(() => {
              document.querySelector("textarea#j-textarea").focus();
            }, 2500);
          });
        },
      };
      FanYi.init();
    },
    /**
     * 百度翻译-APP
     */
    fanyiApp() {
      if (!Router.isFanYiApp()) {
        return;
      }
      log.info("插入CSS规则");
      GM_addStyle(this.css.fanyiApp);
      const FanYiApp = {
        init() {
          this.repairContentHeight();
          if (PopsPanel.getValue("baidu_fanyi_app_shield_column_information")) {
            this.shieldColumnInformation();
          }
          if (
            PopsPanel.getValue("baidu_fanyi_app_shield_recommended_for_you")
          ) {
            this.shieldRecommendedForYou();
          }
          if (
            PopsPanel.getValue("baidu_fanyi_app_shield_i_need_to_follow_along")
          ) {
            this.shieldINeedToFollowAlong();
          }
        },
        repairContentHeight() {
          utils.waitNode("#page-content").then((element) => {
            element.setAttribute("style", "max-height:unset !important");
          });
        },
        shieldColumnInformation() {
          GM_addStyle(`
          div.fanyi-zhuan-lan-wrapper{
            display: none !important;
          }
          `);
        },
        shieldRecommendedForYou() {
          GM_addStyle(`
          #fr-section{
            display: none !important;
          }
          `);
        },
        shieldINeedToFollowAlong() {
          GM_addStyle(`
          .cover-all .daily-bottom{
            display: none !important;
          }
          `);
        },
      };

      FanYiApp.init();
    },
    /**
     * 百度图片
     */
    image() {
      if (!Router.isImage()) {
        return;
      }
      GM_addStyle(this.css.image);
      log.info("插入CSS规则");
      const BaiDuImage = {
        init() {},
      };
      BaiDuImage.init();
    },
    /**
     * 百度地图
     */
    map() {
      if (!Router.isMap()) {
        return;
      }
      GM_addStyle(this.css.map);
      log.info("插入CSS规则");
      const BaiDuMap = {
        init() {},
      };

      const BaiDuMapHijack = {
        init() {
          if (PopsPanel.getValue("baidu_map_hijack_wakeup")) {
            BaiduHijack.hijackElementAppendChild();
            DOMUtils.ready(function () {
              BaiduHijack.hijackJQueryAppend();
            });
            BaiduHijack.hijackSetTimeout(
              /goToDownloadOfAndrod|downloadAndrFromMarket|jumpToDownloadPage|jumpToMiddlePage|downloadIosPkg/
            );
          }
        },
      };

      BaiDuMap.init();
      BaiDuMapHijack.init();
    },
    /**
     * 百家号
     */
    mbd() {
      if (!Router.isMbd()) {
        return;
      }
      /* 
        示例
        https://mbd.baidu.com/newspage/data/landingsuper?isBdboxFrom=1&pageType=1&context=%7B%22nid%22%3A%22news_8924612668430208297%22,%22sourceFrom%22%3A%22bjh%22%7D
        https://mbd.baidu.com/newspage/data/dtlandingshare?sourceFrom=share_ugc&nid=dt_5121203594593120342
        */
      GM_addStyle(this.css.mbd);
      log.info("插入CSS规则");

      const BaiDuMbd = {
        init() {
          if (PopsPanel.getValue("baidu_mbd_block_exciting_comments")) {
            this.blockExcitingComments();
          }
          if (PopsPanel.getValue("baidu_mbd_block_exciting_recommendations")) {
            this.blockExcitingRecommendations();
          }
          if (PopsPanel.getValue("baidu_mbd_shield_bottom_toolbar")) {
            this.shieldBottomToolbar();
          }
        },
        blockExcitingComments() {
          GM_addStyle(`
          div#commentModule,
          #comment,
          #page_wrapper > div > div[class^="borderBottom-"]{
            display: none !important;
          }
          `);
        },
        blockExcitingRecommendations() {
          GM_addStyle(`
          div[class^="relateTitle"],
          .infinite-scroll-component__outerdiv,
          div#fuseVideo + div[class],
          /* 精彩推荐的文字 */
          #content_wrapper + div + div,
          /* 简单UA下精彩推荐的文字 */
          #page_wrapper .searchCraft #content_wrapper + div{
            display: none !important;
          }
          `);
          GM_addStyle(`
          /* Gecko下的简单UA下精彩推荐 */
          #page_wrapper > div > div:nth-child(6){
            display: none !important;
          }
          `);
        },
        shieldBottomToolbar() {
          GM_addStyle(`
          div#wise-invoke-interact-bar{
            display: none !important;
          }
          `);
        },
      };

      const BaiDuMbdHijack = {
        init() {
          if (PopsPanel.getValue("baidu_mbd_camouflage_lite_baiduboxapp")) {
            let oldNavigatorUserAgent = unsafeWindow.navigator.userAgent;
            OriginPrototype.Object.defineProperty(
              unsafeWindow.navigator,
              "userAgent",
              {
                get() {
                  return oldNavigatorUserAgent + " lite baiduboxapp";
                },
              }
            );
          }
          if (PopsPanel.getValue("baidu_mbd_hijack_wakeup")) {
            BaiduHijack.hijackFunctionCall_BaiJiaHao_Map();
          }
          if (PopsPanel.getValue("baidu_mbd_hijack_BoxJSBefore")) {
            BaiduHijack.hijackBoxJSBefore();
          }
          if (PopsPanel.getValue("baidu_mbd_hijack_iframe")) {
            /* 劫持iframe添加到页面 */
            BaiduHijack.hijackElementAppendChild();
          }
        },
      };
      BaiDuMbd.init();
      BaiDuMbdHijack.init();
    },
    /**
     * 百度知了好学
     */
    xue() {
      if (!Router.isXue()) {
        return;
      }
      GM_addStyle(this.css.xue);
      log.info("插入CSS规则");
    },
    /**
     * 百度-爱企查
     */
    aiqicha() {
      if (!Router.isAiQiCha()) {
        return;
      }
      GM_addStyle(this.css.aiqicha);
      log.info("插入CSS规则");

      const BaiDuAiQiCha = {
        init() {
          this.camouflageBottomPopup();
          if (PopsPanel.getValue("baidu_aiqicha_shield_carousel")) {
            this.shieldCarousel();
          }
          if (PopsPanel.getValue("baidu_aiqicha_shield_industry_host_news")) {
            this.shieldIndustryHostNews();
          }
        },
        camouflageBottomPopup() {
          unsafeWindow.localStorage.setItem(
            "coupon_bottom_popup",
            new Date().getTime()
          );
        },
        /**
         * 屏蔽轮播图
         */
        shieldCarousel() {
          GM_addStyle(`
          div.index-banner-container.van-swipe{
            display: none !important;
          }`);
        },
        /**
         * 屏蔽行业热点新闻
         */
        shieldIndustryHostNews() {
          GM_addStyle(`
          div.hot-news{
            display: none !important;
          }`);
        },
      };

      BaiDuAiQiCha.init();
    },
    /**
     * 百度网盟推广
     */
    pos() {
      if (!Router.isPos()) {
        return;
      }
      GM_addStyle(this.css.pos);
      log.info("插入CSS规则");
    },
    /**
     * 百度好看视频
     */
    haokan() {
      if (!Router.isHaoKan()) {
        return;
      }
      GM_addStyle(this.css.haokan);
      log.info("插入CSS规则");

      const BaiDuHaoKan = {
        init() {
          if (PopsPanel.getValue("baidu_haokan_shield_may_also_like")) {
            this.shieldMayAlsoLike();
          }
          if (PopsPanel.getValue("baidu_haokan_shield_today_s_hot_list")) {
            this.shieldTodayHotList();
          }
          if (PopsPanel.getValue("baidu_haokan_shield_right_video_action")) {
            this.shieldRightVideoAction();
          }
          DOMUtils.ready(function () {
            let playBtn = document.querySelector(".play-btn");
            DOMUtils.on(playBtn, "click", function () {
              let currentPageSee = document.querySelector(
                ".video-player .video-player-pause-btns .continue"
              );
              setTimeout(() => {
                utils
                  .getReactObj(currentPageSee)
                  ["reactEventHandlers"]["onClick"]();
                if (
                  PopsPanel.getValue(
                    "baidu_haokan_play_video_and_automatically_enter_full_screen"
                  )
                ) {
                  if (utils.isFullscreenEnabled()) {
                    let videoElement = document.querySelector(
                      "#video video.hplayer-video"
                    );
                    utils.enterFullScreen(videoElement);
                  }
                }
              }, 0);
            });
          });
        },
        shieldMayAlsoLike() {
          GM_addStyle(`
          div.top-video-list-container{display: none !important};
          `);
        },
        shieldTodayHotList() {
          GM_addStyle(`
          .hot-rank-video{
            display: none !important;
          }
          `);
        },
        shieldRightVideoAction() {
          GM_addStyle(`
          .video-author-info-mask .new-video-action{
            display: none !important;
          }
          `);
        },
      };

      const BaiDuHaoKanHijack = {
        init() {
          if (PopsPanel.getValue("baidu_haokan_hijack_wakeup")) {
            BaiduHijack.hijackFunctionCall_WebPack_HaoKan();
          }
        },
      };
      BaiDuHaoKan.init();
      BaiDuHaoKanHijack.init();
    },
    /**
     * 百度识图
     */
    graph() {
      if (!Router.isGraph()) {
        return;
      }
      GM_addStyle(this.css.graph);
      log.info("插入CSS规则");

      const BaiDuGraphApi = {
        /**
         * 上传图片
         * @async
         * @param {InputEvent} event
         * @returns
         */
        async uploadImage(event) {
          let uploadImageFile = event.target.files[0];
          if (!uploadImageFile) {
            alert("似乎并未正确上传图片？");
            return;
          }
          let formData = new FormData();
          formData.append("image", uploadImageFile);
          formData.append("tn", "pc");
          formData.append("from", "pc");
          formData.append("image_source", "PC_UPLOAD_FILE");
          formData.append("sdkParams", "undefined");
          let postResp = await httpx.post({
            url: `https://graph.baidu.com/upload?uptime=${Date.now()}`,
            data: formData,
            resposeType: "json",
            headers: {
              "user-agent": utils.getRandomPCUA(),
              Origin: "https://graph.baidu.com",
              Referer: "https://graph.baidu.com/pcpage/index?tpl_from=pc",
              Accept: "*/*",
            },
          });
          event.target.value = "";
          log.success(postResp);
          if (!postResp.status || postResp.data.status !== 200) {
            alert("图片上传失败，详情请看控制台");
            return;
          }
          let imageJSONData = utils.toJSON(postResp.data.responseText);
          log.success(imageJSONData);
          if (imageJSONData["status"] !== 0) {
            alert("图片API返回信息中status不为0，详情请看控制台");
          }
          if (window.location.pathname === "/s") {
            window.location.href = imageJSONData["data"]["url"];
          } else {
            window.open(imageJSONData["data"]["url"], "_blank");
          }
        },
      };
      const BaiDuGraph = {
        init() {
          this.addNewUploadImageButton();
          if (PopsPanel.getValue("baidu-graph-repairHomeRecognitionPicture")) {
            this.repairHomeRecognitionPicture();
          }
          if (
            PopsPanel.getValue("baidu-graph-baidu-graph-repairSearchButton")
          ) {
            this.repairSearchButton();
          }
          if (
            PopsPanel.getValue("baidu-graph-baidu-graph-repairSearchNoResult")
          ) {
            this.repairSearchNoResult();
          }
          if (
            PopsPanel.getValue("baidu-graph-baidu-graph-repairRetakeButton")
          ) {
            this.repairRetakeButton();
          }
        },
        /**
         * 添加上传图片按钮（不可见的）
         */
        addNewUploadImageButton() {
          DOMUtils.ready(function () {
            let uploadImageInput = DOMUtils.createElement(
              "input",
              {
                id: "whitesev-upload-image",
              },
              {
                type: "file",
                accept: "image/*",
                style: "display: none",
              }
            );
            DOMUtils.on(uploadImageInput, "change", BaiDuGraphApi.uploadImage);
            DOMUtils.append(document.body, uploadImageInput);
          });
        },
        /**
         *重构主页的识图一下
         */
        repairHomeRecognitionPicture() {
          utils
            .waitNode(
              "#app section.vf-home-booth div.vf-w-button.vf-home-booth-camera"
            )
            .then((element) => {
              log.success("重构主页的识图一下");
              let uploadImageDivDOM = DOMUtils.createElement("div", {
                className: "vf-home-booth-camera",
              });
              DOMUtils.css(uploadImageDivDOM, {
                position: "absolute",
                bottom: "-.42rem",
                left: "50%",
                width: "2.2rem",
                height: ".74rem",
                "background-image":
                  "url(https://imgn0.bdstatic.com/image/mobile/n/static/wiseik/static/img/camera_5e72a3a.png)",
                "background-repeat": "no-repeat",
                "background-size": "cover",
                "background-position": "top",
                "-webkit-transform": "translateX(-50%)",
                "-ms-transform": "translateX(-50%)",
                transform: "translateX(-50%)",
                "-webkit-tap-highlight-color": "transparent",
              });
              DOMUtils.on(uploadImageDivDOM, "click", function () {
                document.querySelector("input#whitesev-upload-image").click();
              });

              DOMUtils.after(element, uploadImageDivDOM);
            });
        },
        /**
         * 重构主页的往下滑动右下角出现的搜索图标按钮
         */
        repairSearchButton() {
          utils.waitNode(".vf-home.view-page").then((element) => {
            log.success("重构主页的往下滑动右下角出现的搜索图标按钮");
            let divHomeCamera = DOMUtils.createElement("div", {
              className: "whitesev-vf-home-camera",
            });
            DOMUtils.css(divHomeCamera, {
              display: "none",
              position: "fixed",
              right: ".1rem",
              bottom: ".48rem",
              height: ".74rem",
              width: ".74rem",
              "border-radius": "3px",
              background:
                "url(https://imgn0.bdstatic.com/image/mobile/n/static/wiseik/static/img/cameraBtn_c19ac1e.png) no-repeat 50%/100% auto",
              "text-align": "center",
            });
            DOMUtils.on(divHomeCamera, "click", function () {
              document.querySelector("input#whitesev-upload-image").click();
            });
            DOMUtils.append(element, divHomeCamera);
            utils.watchObject(
              element.__vue__,
              "showBottomCamera",
              () => {
                return false;
              },
              (_value_) => {
                if (_value_) {
                  DOMUtils.show(divHomeCamera);
                } else {
                  DOMUtils.hide(divHomeCamera);
                }
              }
            );
          });
        },
        /**
         * 如果出现识图没结果，重新识别，可能是因为后面参数多了tpl_from=pc的问题
         */
        repairSearchNoResult() {
          utils.waitNode("#app .graph-noresult-text1").then(() => {
            if (window.location.search.endsWith("&tpl_from=pc")) {
              window.location.href = window.location.href.replace(
                /&tpl_from=pc$/gi,
                ""
              );
            }
          });
        },
        /**
         * 在已搜索出相关结果的界面中的重构【重拍】按钮
         */
        repairRetakeButton() {
          utils
            .waitNode("#viewport .graph-imagecut-banner-ctn")
            .then((element) => {
              let retakeDivDOM = DOMUtils.createElement("div", {
                className: "retake-image",
                textContent: "重拍",
              });
              DOMUtils.css(retakeDivDOM, {
                position: "absolute",
                top: "50%",
                right: "0",
                padding: "0 .17rem",
                "font-size": "16px",
                "line-height": "60px",
                color: "#000",
                "-webkit-transform": "translateY(-50%)",
                transform: "translateY(-50%)",
              });
              DOMUtils.on(retakeDivDOM, "click", function (event) {
                utils.preventEvent(event);
                document.querySelector("input#whitesev-upload-image").click();
                DOMUtils.trigger(
                  document.querySelector("input#whitesev-upload-image"),
                  "click"
                );
              });
              setTimeout(() => {
                DOMUtils.append(element, retakeDivDOM);
              }, 2000);
            });
        },
      };

      BaiDuGraph.init();
    },
    /**
     * 百度网盘
     */
    pan() {
      if (!Router.isPan()) {
        return;
      }
      GM_addStyle(this.css.pan);
      log.info("插入CSS规则");
    },
    /**
     * 文心一言
     */
    yiyan() {
      if (!Router.isYiYan()) {
        return;
      }
      GM_addStyle(this.css.yiyan);
      log.info("插入CSS规则");

      const BaiDuYiYan = {
        init() {
          if (PopsPanel.getValue("baidu_yiyan_remove_ai_mask")) {
            BaiDuYiYan.blockWaterMark();
          }
        },
        /**
         * 通过处理attachShadow和appendChild原型来去除水印
         * 屏蔽 AI生成内容仅供参考
         * 屏蔽 AI作图
         */
        blockWaterMark() {
          let oldShadow = Element.prototype.attachShadow;
          Element.prototype.attachShadow = function () {
            const shadowRoot = oldShadow.call(this, arguments);
            this._shadowRoot = shadowRoot;
            shadowRoot.appendChild(
              DOMUtils.createElement(
                "style",
                "div[id^='mask']{display: none !important;}"
              )
            );
            return shadowRoot;
          };
          let oldAppendChild = Element.prototype.appendChild;
          Element.prototype.appendChild = function (element) {
            if (element.localName === "img") {
              setTimeout(() => {
                Array.from(document.querySelectorAll("img")).forEach(
                  (imageElement) => {
                    if (imageElement.src.endsWith("style/wm_ai")) {
                      imageElement.src = imageElement.src.replace(
                        /style\/wm_ai$/gi,
                        ""
                      );
                    }
                  }
                );
              }, 150);
            }

            return oldAppendChild.call(this, element);
          };
        },
      };

      BaiDuYiYan.init();
    },
    /**
     * AI对话
     */
    chat() {
      if (!Router.isChat()) {
        return;
      }
      GM_addStyle(this.css.chat);
      log.info("插入CSS规则");

      const BaiDuChat = {
        init() {
          if (PopsPanel.getValue("baidu_chat_remove_ai_mask")) {
            this.removeAiMask();
          }
        },
        removeAiMask() {
          GM_addStyle(`
        .bot-body .watermark,
        #searchChatApp div[class^="watermark"]{
          background-image: none !important;
        }`);
          let maskMutationObserver = new utils.LockFunction(function () {
            document
              .querySelectorAll("img[src*='style/wm_ai']")
              .forEach((imgElement) => {
                log.info("处理AI水印：" + imgElement.src);
                imgElement.src = imgElement.src.replace(/style\/wm_ai/g, "");
              });
          }, 400);
          utils.mutationObserver(document.body, {
            config: { subtree: true, childList: true },
            callback: maskMutationObserver.run,
          });
        },
      };

      BaiDuChat.init();
    },
    /**
     * 百度小程序-百度教育
     */
    mini_jiaoyu() {
      if (!Router.isMiniJiaoYu()) {
        return;
      }
      GM_addStyle(this.css.mini_jiaoyu);
      log.info("插入CSS规则");

      const BaiDuMiniJiaoYu = {
        init() {
          if (
            PopsPanel.getValue("mini_baidu_jiaoyu_shield_bottom_pull_down_menu")
          ) {
            this.shieldBottomPullDownMenu();
          }
        },
        shieldBottomPullDownMenu() {
          let hideCSS = `
          #page_loft{
            display: none !important;
          }
          `;
          GM_addStyle(hideCSS);
          /* 同源iframe，注入CSS */
          if (unsafeWindow.top === unsafeWindow.self) {
            DOMUtils.ready(function () {
              utils.waitNode("iframe.swan-web-iframe").then((iframeElement) => {
                let _document = iframeElement.contentDocument;
                let _window = iframeElement.contentWindow;
                function callback() {
                  _document.head.appendChild(
                    DOMUtils.createElement(
                      "style",
                      {
                        innerHTML: hideCSS,
                      },
                      {
                        type: "text/css",
                      }
                    )
                  );
                }
                function completed() {
                  _document.removeEventListener("DOMContentLoaded", completed);
                  _window.removeEventListener("load", completed);
                  callback();
                }
                if (
                  _document.readyState === "complete" ||
                  (_document.readyState !== "loading" &&
                    !_document.documentElement.doScroll)
                ) {
                  _window.setTimeout(callback);
                } else {
                  /* 监听DOMContentLoaded事件 */
                  _document.addEventListener("DOMContentLoaded", completed);
                  /* 监听load事件 */
                  _window.addEventListener("load", completed);
                }
              });
            });
          }
        },
      };

      BaiDuMiniJiaoYu.init();
    },
    /**
     * 百度教育
     */
    easyLearn() {
      if (!Router.isEasyLearn()) {
        return;
      }
      GM_addStyle(this.css.easyLearn);
      log.info("插入CSS规则");

      const BaiDuEasylearnBusiness = {
        init() {
          if (
            PopsPanel.getValue("baidu_easylearn_shield_this_question_paper")
          ) {
            this.shieldQuestionPaper();
          }
          if (
            PopsPanel.getValue(
              "baidu_easylearn_shield_good_questions_in_this_volume"
            )
          ) {
            this.shieldGoodQuestionsInThisVolume();
          }
          if (
            PopsPanel.getValue("baidu_easylearn_shield_related_test_papers")
          ) {
            this.shieldRelatedTestPapers();
          }
          if (PopsPanel.getValue("baidu_easylearn_shield_video_explanation")) {
            this.shieldVideoExplanation();
          }
          if (PopsPanel.getValue("baidu_easylearn_shield_xueba_notes")) {
            this.shieldXuebaNotes();
          }
          if (PopsPanel.getValue("baidu_easylearn_shield_bottom_toolbar")) {
            this.shieldBottomToolbar();
          }
          if (
            PopsPanel.getValue(
              "baidu_easylearn_unlocking_the_upper_limit_of_search_questions"
            )
          ) {
            this.hijackUserSearchQuestCount();
          }
          if (PopsPanel.getValue("baidu_easylearn_auto_show_answer")) {
            this.showAnswerContent();
          }
          DOMUtils.ready(() => {
            if (
              PopsPanel.getValue("baidu_easylearn_unlocking_top_search_input")
            ) {
              this.allowUserSearchInput();
            }
          });
        },
        shieldQuestionPaper() {
          GM_addStyle(`
          .question-shijuan-wrap,
          /* PC端 */
          .question-cont .timu-wrap .doc-cont-v2 .left{
            display: none !important;
          }
          `);
        },
        shieldGoodQuestionsInThisVolume() {
          GM_addStyle(`
          .exercise-questions-wrap{
            display: none !important;
          }
          `);
        },
        shieldRelatedTestPapers() {
          GM_addStyle(`
          .related-papers-wrap,
          /* PC端 */
          .question-cont .timu-wrap .doc-cont-v2 .right{
            display: none !important;
          }{
            display: none !important;
          }
          `);
        },
        shieldVideoExplanation() {
          GM_addStyle(`
          .video-doc-compo,
          /* PC端 */
          .container #questionVideo{
            display: none !important;
          }
          `);
        },
        shieldXuebaNotes() {
          GM_addStyle(`
          .note-list{
            display: none !important;
          }
          `);
        },
        shieldBottomToolbar() {
          GM_addStyle(`
          .question-bottom-bar,
          #app .bgk-question-detail .float-btm{
            display: none !important;
          }
          `);
        },
        /**
         * 显示答案内容
         */
        showAnswerContent() {
          utils.waitNode("div.question-swiper").then(async () => {
            await utils.waitVueByInterval(
              function () {
                return document.querySelector("div.question-swiper");
              },
              function (__vue__) {
                return "$watch" in __vue__;
              },
              100,
              10000
            );
            document.querySelector("div.question-swiper").__vue__.$watch(
              ["isShowAnswer", "isShowAnswerContent"],
              function (newVal, oldVal) {
                log.success("显示答案");
                this.isShowAnswer = true;
                this.isShowAnswerContent = true;
              },
              {
                deep: true,
                immediate: true,
              }
            );
            document
              .querySelector("div.question-swiper")
              .__vue__.$parent.$watch(
                "isOnAlternativeDialog",
                function (newVal, oldVal) {
                  log.success("禁止显示弹窗");
                  this.isOnAlternativeDialog = false;
                },
                {
                  deep: true,
                  immediate: true,
                }
              );
            document
              .querySelector("div.question-swiper")
              .__vue__.$parent.$watch(
                "userChangeQuestionCount",
                function () {
                  log.success("滑动改变题目");
                  document.querySelector(
                    "div.question-swiper"
                  ).__vue__.isShowAnswer = true;
                  document.querySelector(
                    "div.question-swiper"
                  ).__vue__.isShowAnswerContent = true;
                },
                {
                  deep: true,
                  immediate: true,
                }
              );
            /* 阻止调用App Scheme */
            document.querySelector(
              "div.question-swiper"
            ).__vue__.$parent.openBgkApp = function () {
              log.success(["openBgkApp：阻止调用App Scheme", arguments]);
            };
            document.querySelector("div.question-swiper").__vue__.openApp =
              function () {
                log.success(["openApp：阻止调用App Scheme", arguments]);
              };
            document.querySelector(
              "div.question-swiper"
            ).__vue__.$parent.goToApp = function () {
              log.success(["goToApp：阻止调用App Scheme", arguments]);
            };
          });
        },
        /**
         * 劫持-今日搜题次数已达上限
         */
        hijackUserSearchQuestCount() {
          unsafeWindow.localStorage.removeItem("user_search_quest_count");
        },
        /**
         * 允许使用顶部的输入框
         */
        allowUserSearchInput() {
          utils
            .waitNodeWithInterval(
              ".search-input .search-box-wrap.search-box",
              10000
            )
            .then(async () => {
              await utils.waitVueByInterval(
                function () {
                  return document.querySelector(
                    ".search-input .search-box-wrap.search-box"
                  );
                },
                function (__vue__) {
                  return "$watch" in __vue__;
                },
                250,
                10000
              );
              document
                .querySelector(".search-input .search-box-wrap.search-box")
                .__vue__.$watch(
                  "isFake",
                  function (newVal, oldVal) {
                    log.success("允许使用顶部搜索输入框");
                    this.isFake = false;
                  },
                  {
                    deep: true,
                    immediate: true,
                  }
                );
            });
        },
      };
      BaiDuEasylearnBusiness.init();
    },
    /**
     * 知了爱学
     */
    aiStudy() {
      let that = this;
      /**
       * 知了爱学-百度基木鱼
       */
      const BaiDuISite = {
        init() {
          GM_addStyle(that.css.isite_wjz2tdly);
          log.info("插入CSS规则");
          if (
            PopsPanel.getValue(
              "baidu_isite_wjz2tdly_shieldBottomBarRootContainer"
            )
          ) {
            this.shieldBottomBarRootContainer();
          }
          if (
            PopsPanel.getValue("baidu_isite_wjz2tdly_shieldRightSeeMoreToolBar")
          ) {
            this.shieldRightSeeMoreToolBar();
          }
          if (PopsPanel.getValue("baidu_isite_wjz2tdly_shieldArticleBottom")) {
            this.shieldArticleBottom();
          }
          if (PopsPanel.getValue("baidu_isite_wjz2tdly_autoExpandFullText")) {
            this.autoExpandFullText();
          }
        },
        /**
         * 屏蔽底部免费在线咨询
         */
        shieldBottomBarRootContainer() {
          GM_addStyle(`
          .gt-local-h5-article-bottom-bar-root-container{
            display: none !important;
          }
          `);
        },
        /**
         * 屏蔽右侧悬浮按钮-查看更多
         */
        shieldRightSeeMoreToolBar() {
          GM_addStyle(`
          .icon-article-list.icon-article-list-exp{
            display: none !important;
          }
          `);
        },
        /**
         * 屏蔽底部-大家还在看
         */
        shieldArticleBottom() {
          GM_addStyle(`
          .article-bottom{
            display: none !important;
          }
          `);
        },
        /**
         * 自动展开全文
         */
        autoExpandFullText() {
          GM_addStyle(`
          .gt-local-h5-article-detail-article-fold-exp{
            max-height: unset !important;
          }
          /* 点击查看全文按钮 */
          .fold-wrapper{
            display: none !important;
          }
          `);
        },
      };
      /**
       * 知了爱学
       */
      const BaiDuAiStudy = {
        init() {
          GM_addStyle(that.css.aiStudy);
          log.info("插入CSS规则");
          if (PopsPanel.getValue("baidu_ai_study_shieldBottomToolBar")) {
            this.shieldBottomToolBar();
          }
          if (PopsPanel.getValue("baidu_ai_study_autoExpandFullText")) {
            this.autoExpandFullText();
          }
        },
        /**
         * 屏蔽底部工具栏
         */
        shieldBottomToolBar() {
          GM_addStyle(`
          .gt-edu-h5-c-article-bottom{
            display: none !important;
          }
          `);
        },
        /**
         * 自动展开全文
         */
        autoExpandFullText() {
          GM_addStyle(`
          .gt-edu-h5-c-article-content .content-wrapper .detail-wrapper{
            max-height: unset !important;
          }
          /* 点击查看全文 */
          .gt-edu-h5-c-article-content .content-wrapper .detail-wrapper .unfold-wrapper{
            display: none !important;
          }
          `);
        },
      };
      if (Router.isISite()) {
        /* 知了爱学-百度基木鱼 */
        BaiDuISite.init();
      } else if (Router.isAiStudy()) {
        /* 知了爱学 */
        BaiDuAiStudy.init();
      }
    },
  };

  /* 文心一言 */
  const YiYan = {
    /**
     * @type {PopsCallResult}
     */
    dialogAlias: null,
    /** 是否正在进行初始化参数 */
    isIniting: false,
    /** 是否已初始化参数 */
    isInitParams: false,
    aisearch_id: null,
    pvId: null,
    sessionId: null,
    /**
     * @type {{
     * questionText: string,
     * answerText: string,
     * markdownText: string,
     * }[]}
     */
    question: [],
    async init() {
      if (!this.isInitParams) {
        this.isIniting = true;
        Qmsg.info("初始化参数中...");
        this.isInitParams = Boolean(await this.initParams());
        this.isIniting = false;
        if (this.isInitParams) {
          Qmsg.success("初始化成功！");
          this.init();
        } else {
          Qmsg.error("初始化参数失败");
        }
      } else if (!this.isIniting) {
        this.showChatGPTDialog();
      }
    },
    /**
     * 初始化参数
     * @param {string} [queryText=""] 需要提问的问题
     */
    async initParams(queryText = "") {
      let getResp = await httpx.get(
        `https://chat.baidu.com/?pcasync=pc&asyncRenderUrl=&passportStaticPage=https%3A%2F%2Fwww.baidu.com%2Fcache%2Fuser%2Fhtml%2Fv3Jump.html&from=pc_tab&word=${encodeURI(
          queryText
        )}&source=pd_ic`,
        {
          fetch: true,
          headers: {
            Accept: "*/*",
            Origin: "https://www.baidu.com",
            Referer: `https://www.baidu.com/`,
          },
          data: JSON.stringify({
            data: {},
          }),
        }
      );
      if (!getResp.status) {
        return false;
      }
      try {
        YiYan.aisearch_id = /"aisearch_id":"(.*?)"/i.exec(
          getResp.data.responseText
        )[1];
        YiYan.pvId = /"pvId":"(.*?)"/i.exec(getResp.data.responseText)[1];
        YiYan.sessionId = /"sessionId":"(.*?)"/i.exec(
          getResp.data.responseText
        )[1];
        log.success("获取一言参数aisearch_id：" + YiYan.aisearch_id);
        log.success("获取一言参数pvId：" + YiYan.pvId);
        log.success("获取一言参数sessionId：" + YiYan.sessionId);
        return true;
      } catch (error) {
        log.error(error);
        return false;
      }
    },
    /**
     * 显示ChatGPT回答弹窗
     */
    showChatGPTDialog() {
      if (YiYan.dialogAlias != null) {
        if (!YiYan.dialogAlias.popsElement.getClientRects().length) {
          YiYan.dialogAlias.show();
        } else {
          log.info("请勿重复打开");
        }
        return;
      }
      YiYan.dialogAlias = pops.alert({
        title: {
          text: "<p style='width:100%;'>文心一言</p>",
          position: "center",
          html: true,
        },
        content: {
          text: "",
        },
        mask: {
          enable: true,
          clickEvent: {
            toHide: true,
          },
        },
        btn: {
          close: {
            enable: true,
            callback(event) {
              event.hide();
            },
          },
        },
        drag: true,
        dragLimit: true,
        width: "95vw",
        height: "90vh",
        style: `
        .pops{
          --container-title-height: 45px;
          --container-bottom-btn-height: 100px;

          --gpt-bg-color: #ffffff;
          --gpt-border-radius: 4px;
        }
        .pops-alert-content{
          background: #ECEAF7;
        }
        .pops-alert-btn .ask-question{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .pops-alert-btn .ask-question textarea{
          width: inherit;
          height: inherit;
        }
        .pops-alert-btn .ask-question textarea {
          vertical-align: bottom;
          position: relative;
          display: block;
          resize: none;
          padding: 5px 11px;
          line-height: 1.5;
          box-sizing: border-box;
          font-size: 16px;
          font-family: inherit;
          background-color: var(--gpt-bg-color);
          background-image: none;
          -webkit-appearance: none;
          appearance: none;
          box-shadow: 0 0 0 1px #dcdfe6 inset;
          border-radius: 0;
          transition: box-shadow .2s cubic-bezier(.645, .045, .355, 1);
          border: none;
        }
        .pops-alert-btn .ask-question textarea:hover{box-shadow:0 0 0 1px #c0c4cc inset}
        .pops-alert-btn .ask-question textarea:focus{outline:0;box-shadow:0 0 0 1px #409eff inset}

        .ask-container{

        }
        .ask-container .user-question,
        .ask-container .gpt-answer{
          display: flex;
          margin: 10px 10px;
        }
        .ask-container .user-question{

        }
        .ask-container .gpt-answer{

        }
        .ask-container .avatar-img{
          
        }
        .ask-container .avatar-img img{
          width: 30px;
          height: 30px;
          border-radius: 6px;
          background: var(--gpt-bg-color);
        }
        .ask-container .ask-text,
        .ask-container .answer-text{
          background: var(--gpt-bg-color);
          border-radius: var(--gpt-border-radius);
          padding: 10px;
          margin-left: 10px;
          text-align: left;
        }
        .ask-container .ask-text{
          width: auto;
        }
        .ask-container .answer-text{
        }
        .ask-container .answer-text *{
          text-wrap: wrap;
        }
        .gpt-btn-control{
          display: flex;
          flex-direction: column;
        }
        .gpt-btn-control .pops-alert-btn-clear-history{
          margin-bottom: 5px;
        }
        .gpt-btn-control .pops-alert-btn-ok{
          margin-top: 5px;
        }

        .markdown-body .code-header{
          align-items: center;
          background: #e3e8f6;
          border-radius: 7px 7px 0 0;
          display: flex;
          height: 34px;
        }
        .markdown-body .code-header+pre{
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
        }
        .markdown-body span.code-lang{
          color: #120649;
          flex: 1 0 auto;
          font-family: PingFangSC-Semibold;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0;
          padding-left: 14px;
          text-align: justify;
          display: flex;
        }
        .markdown-body span.code-copy{
          align-items: center;
          color: #7886a4;
          display: flex;
          font-family: PingFangSC-Regular;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0;
          line-height: 14px;
          text-align: justify;
          user-select: none;
        }
        .markdown-body span.code-copy-text{
          margin-left: 7px;
          margin-right: 20px;
        }


        .typing::after {
          content: '▌';
        }
        .typing::after {
          animation: blinker 1s step-end infinite;
        }
        @keyframes blinker {
          0% {
            visibility: visible;
          }
          50% {
            visibility: hidden;
          }
          100% {
            visibility: visible;
          }
        }
        `,
      });
      YiYan.loadCSS(
        "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown.min.css"
      );
      let $alertBtn =
        YiYan.dialogAlias.popsElement.querySelector(".pops-alert-btn");
      $alertBtn.innerHTML = `
      <div class="ask-question">
        <textarea class="ask-question-input" placeholder="请输入问题"></textarea>
        <div class="gpt-btn-control">
          <button class="pops-alert-btn-clear-history" type="danger" data-icon="" data-righticon="false">
            <span>清空</span>
          </button>
          <button class="pops-alert-btn-ok" type="primary" data-icon="" data-righticon="false">
            <span>发送</span>
          </button>
        </div>
      </div>
      `;
      let $textArea = $alertBtn.querySelector("textarea");
      let $enterBtn = $alertBtn.querySelector(".pops-alert-btn-ok");
      let $clearHistoryBtn = $alertBtn.querySelector(
        ".pops-alert-btn-clear-history"
      );
      let $content = YiYan.dialogAlias.popsElement.querySelector(
        ".pops-alert-content"
      );
      $content.innerHTML = "";

      /**
       * 查询事件
       */
      function sendEvent(event) {
        let queryText = $textArea.value;
        if (queryText.trim() === "") {
          Qmsg.error("你没有输入内容哦", {
            timeout: 1500,
          });
          return;
        }
        $textArea.value = "";
        let askElement = YiYan.getAskElement(queryText);
        let answerElement = YiYan.getAnswerElement();
        let answerTextElement = answerElement.querySelector(".answer-text");
        let askContainer = DOMUtils.createElement("div", {
          className: "ask-container",
        });
        let newQueryText = "";
        YiYan.question.forEach((item) => {
          /* 合并之前的提问和回答 */
          if (item.questionText) {
            newQueryText += "\n\n" + item.questionText;
            if (item.answerText) {
              newQueryText += "\n\n" + item.answerText;
            }
          }
        });
        newQueryText += "\n\n" + queryText;
        YiYan.question.push({
          questionText: queryText,
          answerText: void 0,
          markdownText: void 0,
        });
        YiYan.conversation(newQueryText).then(async (stream) => {
          if (!stream) {
            YiYan.question.pop();
            return;
          }
          try {
            let latestQuestion = YiYan.question[YiYan.question.length - 1];
            let answer = await YiYan.getAnswerStream(stream, (itemText) => {
              latestQuestion.answerText += itemText;
              answerTextElement.innerText += itemText;
              YiYan.scrollToContentContainerEnd();
            });
            answerTextElement.classList.remove("typing");
            if (!answer) {
              YiYan.question.pop();
              return;
            }
            latestQuestion.answerText = answer;
            /* 把text转换成markdown元素 */
            let parseData = YiYan.conversionTextToMarkdown(answer);
            log.info(["转换为markdown", parseData]);
            if (parseData.status) {
              latestQuestion.markdownText = parseData.text;
              answerTextElement.innerHTML = parseData.text;
              YiYan.handleMarkdown(answerTextElement);
            } else {
              Qmsg.error("转换为Markdown失败");
            }
            YiYan.scrollToContentContainerEnd();
          } catch (error) {
            answerTextElement.classList.remove("typing");
            YiYan.question.pop();
            log.error(error);
            Qmsg.error(error);
          }
        });
        askContainer.appendChild(askElement);
        askContainer.appendChild(answerElement);
        $content.appendChild(askContainer);
        YiYan.scrollToContentContainerEnd();
      }
      utils.listenKeyboard(
        $textArea,
        "keydown",
        function (keyName, keyValue, otherCodeList) {
          if (otherCodeList.includes("ctrl") && keyName === "Enter") {
            $enterBtn.click();
          }
        }
      );
      DOMUtils.on($enterBtn, "click", void 0, sendEvent);
      DOMUtils.on($clearHistoryBtn, "click", void 0, function () {
        YiYan.clearHistoryQuestion();
      });
    },
    /**
     * 获取回答流
     * @param {ReadableStream<string>} stream
     * @param {(text:string)=>void} callback 每次的流读取的回调
     */
    async getAnswerStream(stream, callback) {
      const reader = stream.getReader();
      async function parseStreamText() {
        /**
         * 所有回答
         * @type {string[]}
         **/
        let answerChunkList = [];
        /** 前一记录 */
        let preResponseItem = "";
        /** 合并 */
        let combineItem = [];
        /** 引用 */
        let referenceList;
        return new Promise((resolve, reject) => {
          reader
            .read()
            .then(function processText({ done, value }) {
              try {
                if (done) {
                  log.success("=====读取结束，转换内容=====");
                  /* 所有回答合数组并成字符串 */
                  let result = answerChunkList.join("");
                  resolve(result);
                  return;
                }
                let responseItem = new TextDecoder("utf-8").decode(value);
                /* 去除空格 */
                responseItem = responseItem.trim();
                if (
                  !responseItem.includes("event:ping") &&
                  !responseItem.startsWith("event:messag")
                ) {
                  combineItem.push(preResponseItem);
                  combineItem.push(responseItem);
                  /* 重置 */
                  preResponseItem = "";
                  /* 合并 */
                  responseItem = combineItem.join("");
                  /* 清空 */
                  combineItem = [];
                } else if (!responseItem.includes("event:ping")) {
                  preResponseItem = responseItem;
                }
                let responseItemSplit = responseItem
                  .split("\n")
                  .filter((item) => item.trim().startsWith("data:"));
                for (let item of responseItemSplit) {
                  item = item.trim();
                  /* 解析出数据 */
                  let streamDataStr = item.replace(/^data:/gi, "").trim();
                  if (utils.isNull(streamDataStr)) {
                    continue;
                  }
                  log.info(streamDataStr);
                  let streamData = utils.toJSON(streamDataStr);
                  if (utils.isNull(streamData)) {
                    continue;
                  }
                  /** 回答的文字块 @type {string} */
                  let answerChunk =
                    streamData?.data?.message?.content?.generator?.text;
                  if (!answerChunk) {
                    /* 不存在回答内容 */
                    continue;
                  }
                  callback(answerChunk);
                  /* 添加到数组中 */
                  answerChunkList.push(answerChunk);
                  if (
                    streamData?.data?.message?.content?.generator?.referenceList
                  ) {
                    referenceList =
                      streamData?.data.message.content.generator.referenceList;
                  }
                }
              } catch (error) {
                log.error(error);
              }
              return reader.read().then(processText);
            })
            .catch((error) => {
              reject(error);
            });
        });
      }
      return parseStreamText();
    },
    /**
     * 添加CSS链接
     * @param {string} url
     */
    loadCSS(url) {
      YiYan.dialogAlias.$shadowRoot.insertBefore(
        DOMUtils.createElement("link", {
          rel: "stylesheet",
          href: url,
          type: "text/css",
          crossOrigin: "anonymous",
        }),
        YiYan.dialogAlias.$shadowRoot.childNodes[0]
      );
    },
    /**
     * 获取提问的元素
     * @param {string} [queryText=""] 提问的问题
     */
    getAskElement(queryText = "") {
      let element = DOMUtils.createElement("div", {
        className: "user-question",
        innerHTML: `
        <div class="avatar-img">
          <img src="https://www.baidu.com/img/flexible/logo/bearicon_198.png"></img>
        </div>
        <div class="ask-text">${queryText}</div>
        `,
      });
      return element;
    },
    /**
     * 获取回答的元素
     */
    getAnswerElement() {
      let element = DOMUtils.createElement("div", {
        className: "gpt-answer",
        innerHTML: `
        <div class="avatar-img">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAADwZJREFUaEN1WmlsXdUR/s59tuPsCYmAOM5KnQYSx06TOCnZ2Erpj1aiqAv93eVPpaqoFRCytAIKBVSqItr+qESphFSpgv6gVf8USAJBxGscO7ZjkjgrblZCVi/vnVPNmZlzzn3PiRT5+fnee87MfPPNN3Oucc45lP0bHwMGux2G+h0uDDuM3QT0Igv67GBhQLfS9/Rd5e+AdXyfM/LZAdZ/pvsM/zR8jX+Gv97BOgNn4jX8bKB2MrBgvkHzigz3rjaYNMmUbx2m3KD+dof9/7UYHUmvpSWNX8w5A+s/qSHwi7FRYoADSn6jfD07gI1mY8QB/u/xXjIIhp0VjNa15DrvIJBxBo89XMD9G7KcUcEgWwLe/6fF0d7ygKkxsmEnC0qk/IY0AolR6m0fCfV64gi6zxutUZQI6bO80+hvck1cQw1mh61vKuDH361CVYHtCga997bFkZ4K9Pm4sMcEGgoR62CNwK4MUj4CYrj3qDc6Hw2NDEdLI08GEOQiDPlZ5bBUNPC1G5oL+OnjVdGggQ6HPe8SKMRK+anhDXnj4SMLSC4EmCUQpNtpIb+RW2xQ74vXyLM1R/29KUQlp9RBwRFs3A8fq8aDLRnM+Khzb71qMXKTwBGTnz77RRPsRkJQr1f+PRABgBJZRpES2NDvwUlKAJKb3gHkJCswmyAy9LgIU4mkGD11isHrT9XAHGqz7sN/xeikGaaJHvJBI6TRSXIgMFSAJzNYyW9ciCEHJWUxgVyaf2XGRNgqlOWZHtbR8T/6djXMv/9WdKeO5tlPH+DpNsE3s1vcnM+twFTMXhP+PYFpRcTDphRyMYc0F5n2aS3NJWHKhEHp2qZlGcybvy25mzfycMvhO3iOveFpmxLc8s88LPMMRIvMqzNoXs2k0tFpcXq4LMF9lOU5uXqkdJ4QhjiUWbOMOABMn2pg/ryrSA7w/7S2+AU8g8l3mtxpHRHMc3FVapZEpodPB9a1AAsWCkPSM5zD0AngkzaHy1eliCpshcZpEzESWoTTOsfMmrsmqX/BoGiMPFD5PxBDfIgyXaoaFHpVNUBjs8GKFVQU+CEeLmIQ3VMsAgf7gK4eh/HxWHR1o/rcWMTFYR66oiLSYh4IBhwhjU6UHWkdiTInpwaIcUQ1eWkCh7saDL6y1niJ4nPFinP8T66SASoWuH4TaO1yGDxmo/TRyCv1K3JEJlUwb4go55U3KK03kQSkECaRqqhHstjc2x1avpphzpzoCNohR0Vqko+0kIp1KJGnBdJnLzh80mExfEHlUpRGwQAp4hVQ8wZFxjR/IoNyuJWIlLNbLo/Y85OnOqxpMViyNEKKDUjyj+oKeVt/BiMT5SCRPHocaO22uHYjoeMyosgVdlEkrBdZjZg/7io6L1MC3kVEprorV52BrAq4ZxWwstEgK0ixVHhprvifBpc+d+g8yB5sagRmzDBwcm1OXdP1FhgtAt0DFj2HHcZLtxDDuTqVpIQBzOs7iy5W8DwdpupZ4bZwaYY16xwmTxO2Ee/4Tar34TAyYtDZ7dB/mODFzyUp8uWGzBtWXZ2/P0glieSV6w77DzoMneb8qiAtEby52khLvCYRCpI+oURV0vS3yVOATfcDc+9kdeo3QIun1E7Ua4GBQYeOLoeRMYGOqAVtHWomAU2NGRqWkEuT0hBIRJgRDsMXHHa3WU8gKSHw59iKqGHmDzuLzheqoIqTBZLc2rAFnsW8p+l6iQjtSCNzZthhf6vDpcupREn7oNhLzZ4NbFpfwIzpkTiCSg95xrk4cMJiX5fnSf97KaiThMKFHc3vxSCvkMuoMiWLrV8zmL8gNnAKMTLm6lWgtd3h+EmCBydorClR0tDzJtUaNDcCdy3O4gal8VHYxY6WHXNiGHh/P5lR1tmq9BLJRSabV3eOO9ZJUacFTwWqNNj6oMH8hQxmvzB9tEBnp0NvHyWwwE/0n2e60KlyjV2+zGDl3RmqqxRS/AxFh69rUqu4n2JiOTFs8V4rG6SqJKSDZVWvpcf8bsc4ybK8NpKGjDfFC5JB9QsIahIBC5w4Bbz/AUOBo8sKO97Hm5pfZ7CmyWBaSiTqmEAkwNi4w81RYOrk5Bk+Qg4ftJVQSuYYvjXJtfS8B/PKDs6hwCIBLom6dcAWMqg+epM81NfvsL/NTw6CN9OGbtoMg7XNGebdwcUv1KfEGFUOnx636OhzaL7HYGl9Jh0vO/rk/9ggRkaMvLboKVmYlylCOUWt4i/pTuGw9YEMdfUxh+jhZBDlTg7bxmHuHIMnflKFaVM4qU+fdRgaLrFCV6UsBfjcJYf93RYXPmenbFidYWk9EY3SOnDirMMH7aXKAY3MHGIvBpiXyKAwLxAvansrmCVsb70v86SQarH+ATaIO9KoMF7ZVYPaSfkeq+eoxflLQhrO4foNoK3X4tjpqBjIeDJoiTdI1zIcofZirEc5Q5Lok1J4UQ3KbUovigVtCxlEEUpIob/foa2DDIp1Y/Jkg1d2VFfMyy5+AXQeLqFUAnoHSQlYjJVkNJZ0nevJoPkUSVIUXJBPnnXY3VEK3alCrLLYAuYFgRxTtLYI2pUqXg02bwXqyXMJK5EKaO2IOUQLFQrAa8/WVBh09pLDu7uLaOtxuHZDBKVOjZIBy/omNijM66wY1KksJ219xeiMjTfPbx93nMjlLXB+oLhlq/Fs5fNN5AkZ1NZpGR5S8Wkjzz1Zjbmz4lSTvvvLO0XsbbMemjzoSGldSoYDyKDFFKFEqZ+iCHVRDsUZYCgzyshSdM1z24kUkmlm0l+k6mHLZoM6D4UIuwGKUFcSIcnFbzyUYd3KAm6baTA6BvQdL2H3fou+o5QvMdeUjLRLpd/XryKDmOV8g+ccTp0Tg0JvlHa10Rm+sD6rBt2isVK5vpkMqhcoiPf6Bx3aupSyY0f7yAMZZs7UERezVdtBh/5jSgBJCx1mA+zUlsYCFteRQdKiO3iD9nSVwjgsiFXtr7SAE+R+7Q0SlgpjKYFWMnvevIkjFPoRB/QPWrQfYOymiviRBwqYNSPf4LX1lhKDJp6Mkklk0KI6dpwfgYlBe7u1DqnWzM/IFTnmV2RQmWqlXQc5ITO4TZsy1MlC6r3+QaDjgK0YJH79vgJmzUympw5o7y1hYIhaiUQPSnnQkwvaVEtjhkUUIV+z1CCLvd1E28qK2sqrM2M+ml3bx1jLCW2nWsmrWnnoxk0F1NXl24VTZxz2fCzzAD1pMA5k0EwfIYmodejodegbYjbRSSrTfQJNABtXZ5g3N5+rp8857D0o4jQMR+RkQ0ZpZLwXQzueGWPI5WbWsU9nrnfYeG/GLOfrUEzEnn6L3gGHoq8ZzIzeoOlxIEJR6Txk0X/MxvOg5IyIuuUsc7h7SYblSwpRTUiJOHXe4aODUofKRmu5WkQ59Mz2MT9TCK2C8HuUQ/y3jfcaD7mUTrnIctXvOuRw/Ax7/OGtme9zVDzSdx2HHAaOi5CVhGcaNqi/02BVQ+bVhUIynUGcPm/xYQ9zMe9TdWbaYbNDzbZnxvzUR3uh3AQoya21awyWLMqTQuhfZA527qJDW4/FuqaMIyQtBv3s7LMYGCrJiQKvR8TRvDzDbTRnkJlbaBuSucORMxZtg6zlWAiLzksnUuIk87RCLsV2MnLVyE2qBdatzXDHXO1Ak6iWtQIlcnOWZ7nOfofDQwQbgxoaRjZkWKgkI8U6ODWB1WeXHFr7Srg5JiSTDkDToxrJLfMUGZQzJlHUQQrFpq5unsGqlQZ0fKFFMghJFZQyFAlNnjPo7C/h05MOX1pksHxJhkJBa1qk/RTOV244HDhiceaiFO6kNMROWhVOPFU0T6pByXFGfiRbeRZEg42GuwyWN9DGElyLmAwHwoR1y2x06pzF9GkGU2pjZNkAVgOq4seKDoeGHA7TtEcmrmGAk3TA+VliLMLml2IQD+iV7ZImKswZ8t/RIgSdlcsNFtbzfCAwYNKiM4zys23ueiUyCi8LHPvMomfI4uZo2dmSzA21XirzquOUpclI84ttRNt6lK49iIYw1qGU2tP+R5O76R6DObNZsih0uNInTCTR0BZEnXD+skPXpxaXrtK6SX+UDhRzI+kINT6PikLAPLFNWC6dxyVyPsh4KbBemSvL5GAK1M8zWLEsQ21t1HwMp9iOaBSJGK+NAN1HrIcjy6fKgyy9N7zroM2nM36c5UtD+A4wP3961Hle96fUZS2E1iTpEFU15Fv2PNuZKmDZ4gwNiwxMGdNpRGhCRLM2+j+uM289xk+avbQWpspc34EISkTLC80tf0YRynknCs1cFU5O2jyk/Lgq8Xwik2jx2lpgZUOGuttFXUhNou7z4NESro/E0RNB0x8Ie8USTxIYDRHCHKV4wBagpvqQ4rXt+TF35VqSKxO9RDHhJEjuSeEZMB9PqGfPApYvzrwCIOlz/gu+T0+zaYNsTERHUBhlecMkkJ6zqrP4GXOm05HkX4uu5zDrJIUUz7zyLUH0jHgsKWqxk4zDyjC8DHO6yjYjREPgxkZpHiVISTpV/w4Q0Tm17zoL9JlkcP+KDGZfa8m99U4xxxQRasJ25Cn//oBjWAgt02NoIpTO9EJHG6aZlRJfaTeSS37WFtT4BLUx96qNvJ0iJ0H4zfdqYEZGndv+0hiu0uAihFMbPh1WlLFPCkutOf6liSRC4QgkHv0z5nmR6GFhtzQKqSHJqznKgkpe5GD/OAPcNtVgz85aftfn43aLN9/muVdglnASrvlQqRhylJ7O8tIGMT0hD0Zq4ks+yZmK9kca5SCag7bMz//0UJrGMS88XoPvrK+KLy+98Y8i9tEEp+y0LjBg+Vlr8GjyCpkynx9wJG9phfeCZC4uJMOz6qT+BIPj6QW976PF2Ttb9qFzMjLm0ZYqvPwDHp3F18uswxtvl/Chn38lczEdVqSLlVdzZR8hikDrCZ1q8YsvCqZvoZRNcSbooNnR0SF8DgE8uq4KL36/xs8DcwapxR91lPD3/5Rw+doEk5myEWxI7oqN3/oI0d8TGHJio1jnxcMCZbPQZlPOTDN48pvVeKyFXysLEZvwFc1xYN8Bi/Y+i6OnLS5eiTUnDDkCZcorMul7Nwm5hMI4QWH2k53kbCcOa/SUg0/odKp050yDFfUZHmos4FtrqlBbOXHG/wFNfBNjhmzqbQAAAABJRU5ErkJggg=="></img>
        </div>
        <div class="answer-text markdown-body typing"></div>
        `,
      });
      return element;
    },
    /**
     * 获取AI的回答
     * @returns {Promise<ReadableStream<string>>}
     */
    async conversation(queryText = "") {
      let postResp = await httpx.post(
        "https://chat-ws.baidu.com/aichat/api/conversation",
        {
          headers: {
            Accept: "text/event-stream",
            "Content-Type": "application/json",
            Origin: "https://www.baidu.com",
            Referer: `https://www.baidu.com/`,
          },
          fetch: true,
          responseType: "stream",
          data: JSON.stringify({
            message: {
              inputMethod: "keyboard",
              isRebuild: false,
              content: {
                query: queryText,
                qtype: 0,
              },
            },
            sessionId: YiYan.sessionId,
            aisearchId: YiYan.aisearch_id,
            pvId: YiYan.pvId,
          }),
        }
      );
      if (!postResp.status) {
        return;
      }
      let stream = postResp.data.response;
      return stream;
    },
    /**
     * 转换文本为markdown格式
     * @param {string} text
     */
    conversionTextToMarkdown(text) {
      let converter = new showdown.Converter();
      /* 启用表格选项。从showdown 1.2.0版开始，表支持已作为可选功能移入核心拓展，showdown.table.min.js扩展已被弃用 */
      converter.setOption("tables", true);
      /* 链接在新窗口打开 */
      converter.setOption("openLinksInNewWindow", true);
      /* 删除线 */
      converter.setOption("strikethrough", true);
      /* 开启emoji */
      converter.setOption("emoji", true);

      /***
       * original: John Gruber 规范中的原始 Markdown 风格
       * vanilla：对决基础风味（v1.3.1 起）
       * github: GitHub 风格的 Markdown，或 GFM
       */
      showdown.setFlavor("github");
      try {
        let markHTML = converter.makeHtml(text);
        return {
          status: true,
          text: markHTML,
        };
      } catch (error) {
        return {
          status: false,
          error: error,
        };
      }
    },
    /**
     * 对内部的markdown元素进行处理
     * @param {HTMLElement} element
     */
    handleMarkdown(element) {
      element.querySelectorAll("pre").forEach((ele) => {
        let codeElement = ele.querySelector("code");
        let language = "";
        if (codeElement.classList.length >= 2) {
          language = codeElement.classList[0];
        }
        let copyText = codeElement.innerText || codeElement.textContent;
        let codeHeader = DOMUtils.createElement("div", {
          className: "code-header",
          innerHTML: `
          <span class="code-lang">${language}</span>
          <span class="code-copy">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 32 32">
              <path d="M28 1.333H9.333C8.597 1.333 8 1.93 8 2.667v4H4c-.736 0-1.333.597-1.333 1.333v14.667c0 .353.14.692.39.943l6.667 6.666c.25.25.589.39.943.39h12c.736 0 1.333-.596 1.333-1.333v-4h4c.736 0 1.333-.597 1.333-1.333V2.667c0-.737-.597-1.334-1.333-1.334zM9.333 26.115L7.22 24h2.114v2.115zm12 1.885H12v-5.333c0-.737-.597-1.334-1.333-1.334H5.333v-12h16V28zm5.334-5.333H24V8c0-.736-.597-1.333-1.333-1.333h-12V4h16v18.667z"></path>
            </svg>
            <span class="code-copy-text">复制代码</span>
          </span>
          `,
        });
        let codeCopyText = codeHeader.querySelector(".code-copy-text");
        DOMUtils.on(codeCopyText, "click", void 0, function () {
          try {
            utils.setClip(copyText);
            Qmsg.success("复制成功");
          } catch (error) {
            Qmsg.error("复制失败，" + error);
          }
        });
        DOMUtils.before(ele, codeHeader);
      });
    },
    /**
     * 清除提问历史
     */
    clearHistoryQuestion() {
      YiYan.question = [];
      YiYan.dialogAlias.$shadowRoot.querySelector(
        ".pops-alert-content"
      ).innerHTML = "";
    },
    /**
     * 滚动到内容容器的底部
     */
    scrollToContentContainerEnd() {
      let $contentElement = YiYan.dialogAlias.popsElement.querySelector(
        ".pops-alert-content"
      );
      $contentElement.scrollTo(0, $contentElement.scrollHeight);
    },
  };

  /**
   * 配置面板
   */
  const PopsPanel = {
    /**
     * 本地存储的总键名
     */
    key: "GM_Panel",
    /**
     * 属性attributes的data-key
     */
    attributeDataKey_Name: "data-key",
    /**
     * 属性attributes的data-default-value
     */
    attributeDataDefaultValue_Name: "data-default-value",
    /**
     * 初始化菜单
     */
    initMenu() {
      this.initLocalDefaultValue();
      if (unsafeWindow.top !== unsafeWindow.self) {
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
        {
          key: "show_yiyan_chatgpt",
          text: "⚙ 文心一言",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            YiYan.init();
          },
        },
      ]);
    },
    /**
     * 初始化本地设置默认的值
     */
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
      Reflect.deleteProperty(localValue, key);
      GM_setValue(this.key, localValue);
    },
    /**
     * 显示设置面板
     */
    showPanel() {
      pops.panel({
        title: {
          text: `${GM_info?.script?.name || "【移动端】百度系优化"}-设置`,
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
     * 获取按钮配置
     * @param {string} text 文字
     * @param {string} key 键
     * @param {boolean} defaultValue 默认值
     * @param {?(event:Event,value: boolean)=>boolean} _callback_ 点击回调
     * @param {string|undefined} description 描述
     */
    getSwtichDetail(text, key, defaultValue, _callback_, description) {
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
          if (typeof _callback_ === "function") {
            if (_callback_(event, value)) {
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
     * 获取配置内容
     * @returns {PopsPanelContentConfig[]}
     */
    getContent() {
      return [
        {
          id: "baidu-panel-config-search",
          title: "搜索",
          headerTitle: "百度搜索<br />m.baidu.com<br />www.baidu.com",
          isDefault() {
            return (
              Router.isSearch() || Router.isSearchHome() || Router.isSearchBh()
            );
          },
          forms: [
            {
              text: "主页",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "精简主页",
                  "baidu_search_home_homepage_minification",
                  true
                ),
              ],
            },
            {
              text: "百度健康(快速问医生)",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部其它信息",
                  "baidu_search_headlth_shield_other_info",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部工具栏",
                  "baidu_search_headlth_shield_bottom_toolbar",
                  true
                ),
              ],
            },
            {
              text: "userAgent包含SearchCraft时",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "自动点击翻页",
                  "baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua",
                  false,
                  function (event, enable) {
                    if (
                      enable &&
                      PopsPanel.getValue(
                        "baidu_search_automatically_expand_next_page"
                      )
                    ) {
                      let checkboxCoreElement = document.querySelector(
                        `li[${PopsPanel.attributeDataKey_Name}="baidu_search_automatically_expand_next_page"] span.pops-panel-switch__core`
                      );
                      checkboxCoreElement.click();
                    }
                  },
                  "与【功能-自动翻页】冲突"
                ),
              ],
            },
            {
              text: "屏蔽/禁止",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】大家还在搜",
                  "baidu_search_blocking_everyone_is_still_searching",
                  true,
                  void 0,
                  "用于补充下面自定义拦截规则的默认配置的【大家还在搜】"
                ),
              ],
            },
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "处理搜索结果",
                  "baidu_search_handle_search_result",
                  true,
                  void 0,
                  "将百度重定向链接替换为真实地址(存在就替换，不存在的话保持原样)"
                ),
                PopsPanel.getSwtichDetail(
                  "重定向顶部的链接",
                  "baidu_search_redirect_top_link",
                  true,
                  void 0,
                  "如全部、视频、图片、贴吧、咨询..."
                ),
                PopsPanel.getSwtichDetail(
                  "重构百度搜索",
                  "baidu_search_refactoring_input_boxes",
                  true,
                  void 0,
                  "重构顶部的输入框、百度一下按钮、搜索建议框，可不出现百度App提示"
                ),
                PopsPanel.getSwtichDetail(
                  "自动翻页",
                  "baidu_search_automatically_expand_next_page",
                  false,
                  function (event, enable) {
                    if (
                      enable &&
                      PopsPanel.getValue(
                        "baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua"
                      )
                    ) {
                      let checkboxCoreElement = document.querySelector(
                        `li[${PopsPanel.attributeDataKey_Name}="baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua"] span.pops-panel-switch__core`
                      );
                      checkboxCoreElement.click();
                    }
                  },
                  "与上面的【自动点击翻页】冲突"
                ),
                PopsPanel.getSwtichDetail(
                  "同步地址",
                  "baidu_search_sync_next_page_address",
                  false,
                  function (event, enable) {
                    if (enable) {
                      alert(
                        "开启后，且开启【自动翻页】，当自动加载到第N页时，浏览器地址也会跟随改变，刷新网页就是当前加载的第N页"
                      );
                    }
                  },
                  "地址同步自动翻页的地址"
                ),
                PopsPanel.getSwtichDetail(
                  "【优化】大家还在搜",
                  "baidu_search_refactor_everyone_is_still_searching",
                  true,
                  void 0,
                  "正确新标签页打开"
                ),
                PopsPanel.getSwtichDetail(
                  "【beta】新标签页打开",
                  "baidu_search_hijack__onClick_to_blank",
                  false,
                  void 0,
                  "实验性功能，需开启【劫持-_onClick函数】和【处理搜索结果】且能成功劫持到该函数才会生效，否则是粗糙的提取article的链接跳转"
                ),
              ],
            },
            {
              text: "劫持/拦截",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "劫持-define函数",
                  "baidu_search_hijack_define",
                  false,
                  void 0,
                  "开启后将禁止原有的define"
                ),
                PopsPanel.getSwtichDetail(
                  "劫持-复制",
                  "baidu_search_hijack_copy",
                  false,
                  void 0,
                  "阻止百度复制xxx到剪贴板"
                ),
                PopsPanel.getSwtichDetail(
                  "劫持-Scheme唤醒App",
                  "baidu_search_hijack_scheme",
                  false,
                  void 0,
                  "阻止唤醒调用App"
                ),
                PopsPanel.getSwtichDetail(
                  "劫持-OpenBox函数",
                  "baidu_search_hijack_openbox",
                  false,
                  void 0,
                  "优化搜索结果跳转"
                ),
                PopsPanel.getSwtichDetail(
                  "劫持-_onClick函数",
                  "baidu_search_hijack__onClick",
                  false,
                  void 0,
                  "优化搜索结果跳转"
                ),
                PopsPanel.getSwtichDetail(
                  "劫持-setTimeout",
                  "baidu_search_hijack_setTimeout",
                  false,
                  void 0,
                  "可阻止获取定位、视频播放"
                ),
              ],
            },
            {
              text: "自定义拦截规则<br><a href='https://greasyfork.org/zh-CN/scripts/418349' target='_blank'>查看规则文档(在最下面)</><br><a href='javascript:;' class='baidu-search-shield-css-reset'>点击重置</a>",
              type: "forms",
              forms: [
                {
                  type: "own",
                  afterAddToUListCallBack(formConfig, rightContainerOptions) {
                    DOMUtils.on(
                      rightContainerOptions.formHeaderDivElement.querySelector(
                        "a.baidu-search-shield-css-reset"
                      ),
                      "click",
                      void 0,
                      () => {
                        BaiduSearchRule.clearLocalRule();
                        rightContainerOptions.ulElement.querySelector(
                          "textarea"
                        ).value = BaiduSearchRule.defaultRule;
                        Qmsg.success("已重置");
                      }
                    );
                  },
                  getLiElementCallBack(liElement) {
                    let $textAreaContainer = DOMUtils.createElement("div", {
                      className:
                        "pops-panel-textarea baidu-search-interception-rule",
                      innerHTML: `
                        <style type="text/css">
                        .baidu-search-interception-rule{
                          width: 100%;
                        }
                        .baidu-search-interception-rule textarea{
                          min-height: 3.6rem;
                          white-space: pre;
                          border-radius: 0 !important;
                        }
                        </style>
                        <textarea></textarea>
                        `,
                    });
                    let $textArea =
                      $textAreaContainer.querySelector("textarea");
                    /* 自定义规则 */
                    let customRule = BaiduSearchRule.getLocalRule();
                    $textArea.value = customRule;
                    liElement.appendChild($textAreaContainer);
                    DOMUtils.on(
                      $textArea,
                      "input propertychange",
                      void 0,
                      utils.debounce(function () {
                        BaiduSearchRule.setLocalRule($textArea.value);
                      }, 100)
                    );
                    return liElement;
                  },
                },
              ],
            },
            {
              text: "自定义样式",
              type: "forms",
              forms: [
                {
                  type: "own",
                  getLiElementCallBack(liElement) {
                    let $textAreaContainer = DOMUtils.createElement("div", {
                      className: "pops-panel-textarea baidu-search-user-style",
                      innerHTML: `
                      <style type="text/css">
                      .baidu-search-user-style{
                        width: 100%;
                      }
                      .baidu-search-user-style textarea{
                        min-height: 3.6rem;
                        white-space: pre;
                        border-radius: 0 !important;
                      }
                      </style>
                      <textarea></textarea>
                      `,
                    });
                    let $textArea =
                      $textAreaContainer.querySelector("textarea");
                    /* 自定义样式 */
                    $textArea.value = PopsPanel.getValue(
                      "baidu-search-user-style",
                      ""
                    );
                    liElement.appendChild($textAreaContainer);
                    DOMUtils.on(
                      $textArea,
                      "input propertychange",
                      void 0,
                      utils.debounce(function () {
                        PopsPanel.setValue(
                          "baidu-search-user-style",
                          $textArea.value
                        );
                      }, 100)
                    );
                    return liElement;
                  },
                },
              ],
            },
          ],
        },
        {
          id: "baidu-panel-config-baijiahao",
          title: "百家号",
          headerTitle: "百家号<br />baijiahao.baidu.com<br />mbd.baidu.com",
          isDefault() {
            return Router.isBaiJiaHao() || Router.isMbd();
          },
          scrollToDefaultView: true,
          forms: [
            {
              text: "百家号（baijiahao）👇",
              type: "forms",
              forms: [],
            },
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】推荐文章",
                  "baijiahao_shield_recommended_article",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】用户评论",
                  "baijiahao_shield_user_comment",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部悬浮工具栏",
                  "baijiahao_shield_user_comment_input_box",
                  false
                ),
              ],
            },
            {
              text: "劫持/拦截",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "劫持-唤醒App",
                  "baijiahao_hijack_wakeup",
                  false,
                  void 0,
                  "阻止唤醒调用App"
                ),
                PopsPanel.getSwtichDetail(
                  "劫持-iframe唤醒App",
                  "baidu_baijiahao_hijack_iframe",
                  true,
                  void 0,
                  "阻止唤醒调用App"
                ),
                PopsPanel.getSwtichDetail(
                  "劫持-OpenBox函数",
                  "baidu_baijiahao_hijack_openbox",
                  false
                ),
              ],
            },
            {
              text: "百家号（mbd）👇",
              type: "forms",
              forms: [],
            },
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】精彩评论",
                  "baidu_mbd_block_exciting_comments",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】精彩推荐",
                  "baidu_mbd_block_exciting_recommendations",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部工具栏",
                  "baidu_mbd_shield_bottom_toolbar",
                  false
                ),
              ],
            },
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "伪装成lite baiduboxapp",
                  "baidu_mbd_camouflage_lite_baiduboxapp",
                  true,
                  void 0,
                  "可以优化浏览体验"
                ),
              ],
            },
            {
              text: "劫持/拦截",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "拦截-唤醒App",
                  "baidu_mbd_hijack_wakeup",
                  false,
                  void 0,
                  "阻止唤醒调用App"
                ),
                PopsPanel.getSwtichDetail(
                  "拦截-iframe唤醒App",
                  "baidu_mbd_hijack_iframe",
                  true,
                  void 0,
                  "阻止唤醒调用App"
                ),
                PopsPanel.getSwtichDetail(
                  "劫持-BoxJSBefore函数",
                  "baidu_mbd_hijack_BoxJSBefore",
                  false,
                  void 0,
                  "阻止唤醒调用App"
                ),
              ],
            },
          ],
        },
        {
          id: "baidu-panel-config-tieba",
          title: "贴吧",
          headerTitle: "百度贴吧<br />tieba.baidu.com<br />www.tieba.com",
          isDefault() {
            return Router.isTieBa();
          },
          scrollToDefaultView: true,
          forms: [
            {
              text: "通用",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "检测骨架屏",
                  "baidu_tieba_checkSkeleton",
                  true,
                  void 0,
                  "当页面加载完毕后检测到还是骨架屏，将会自动刷新页面"
                ),
              ],
            },
            {
              text: "搜索功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "启用",
                  "baidu_tieba_add_search",
                  true,
                  void 0,
                  "在贴内和吧内右上角添加搜索按钮"
                ),
                PopsPanel.getSwtichDetail(
                  "获取详细信息",
                  "baidu_tieba_search_opt_user_info",
                  true,
                  void 0,
                  "将搜索结果的【用户名/头像】替换成请求获取的【用户名/头像】"
                ),
              ],
            },
            {
              text: "账号功能",
              type: "forms",
              forms: [
                {
                  text: "签到所有关注的吧",
                  type: "button",
                  buttonIconIsLoading: false,
                  buttonType: "default",
                  buttonText: "点击签到",
                  async callback(event) {
                    /**
                     * 获取提示内容
                     * @param {number} index
                     * @param {number} maxIndex
                     * @param {string} forumName
                     * @param {string} text
                     * @param {?string} signText
                     * @returns
                     */
                    function getLoadingHTML(
                      index,
                      maxIndex,
                      forumName,
                      text,
                      signText
                    ) {
                      return `
                     <div>进度：${index}/${maxIndex}</div>
                     <div>吧名：${forumName}</div>
                     <div>信息：${text}</div>
                     ${signText ? `签到：${signText}` : ""}
                     `;
                    }
                    Qmsg.info("正在获取所有关注吧");
                    let likeForumList =
                      await BaiduExtraApi.tieba.getUserAllLikeForum();
                    if (!likeForumList) {
                      return;
                    }
                    if (!likeForumList.length) {
                      Qmsg.error("该账号尚未关注帖子");
                      return;
                    }
                    let isStop = false;
                    let loading = Qmsg.loading(
                      getLoadingHTML(
                        1,
                        likeForumList.length,
                        likeForumList[0].forum_name,
                        "正在获取tbs"
                      ),
                      {
                        showClose: true,
                        onClose() {
                          isStop = true;
                        },
                      }
                    );
                    for (let index = 0; index < likeForumList.length; index++) {
                      if (isStop) {
                        Qmsg.info("中断");
                        return;
                      }
                      let likeForum = likeForumList[index];
                      loading.setHTML(
                        getLoadingHTML(
                          index + 1,
                          likeForumList.length,
                          likeForum.forum_name,
                          "正在获取tbs"
                        )
                      );
                      let tbs = await BaiduExtraApi.tieba.getForumTbs(
                        likeForum.forum_name
                      );
                      if (!tbs) {
                        Qmsg.info("2秒后切换至下一个");
                        await utils.sleep(2000);
                        continue;
                      }
                      Qmsg.success(`tbs ===> ${tbs}`);
                      loading.setHTML(
                        getLoadingHTML(
                          index + 1,
                          likeForumList.length,
                          likeForum.forum_name,
                          "发送签到请求..."
                        )
                      );
                      let signResult = await BaiduExtraApi.tieba.forumSign(
                        likeForum.forum_name,
                        tbs
                      );
                      if (!signResult) {
                        Qmsg.info("2秒后切换至下一个");
                        await utils.sleep(2000);
                        continue;
                      }
                      if (typeof signResult["data"] === "object") {
                        loading.setHTML(
                          getLoadingHTML(
                            index + 1,
                            likeForumList.length,
                            likeForum.forum_name,
                            `今日本吧第${signResult["data"]["finfo"]["current_rank_info"]["sign_count"]}个签到`
                          )
                        );
                      } else {
                        Qmsg.error(signResult["error"]);
                      }
                      Qmsg.info("2秒后切换至下一个");
                      await utils.sleep(2000);
                    }
                    Qmsg.success(`执行签到 ${likeForumList.length} 个贴吧完毕`);
                    loading.close();
                  },
                },
              ],
            },
            {
              text: "吧内功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "记住当前选择的看帖排序",
                  "baidu_tieba_remember_user_post_sort",
                  true,
                  void 0,
                  "记住选择的发布/回复"
                ),
                PopsPanel.getSwtichDetail(
                  "重定向xx吧跳转",
                  "baidu_tieba_topic_redirect_jump",
                  true,
                  void 0,
                  "点击帖子直接跳转"
                ),
                PopsPanel.getSwtichDetail(
                  "过滤重复帖子",
                  "baidu_tieba_filterDuplicatePosts",
                  false,
                  void 0,
                  "过滤掉重复id的帖"
                ),
                PopsPanel.getSwtichDetail(
                  "解除签到限制",
                  "baidu_tieba_removeForumSignInLimit",
                  true,
                  void 0,
                  "在登录情况下可点击签到"
                ),
              ],
            },
            {
              text: "帖内功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "楼中楼回复弹窗后退手势优化",
                  "baidu_tieba_lzl_ban_global_back",
                  false,
                  function (event, enable) {
                    if (enable) {
                      alert(
                        "开启后，当在手机浏览器中使用屏幕左滑回退网页操作或者点击浏览器的回退到上一页按钮，不会触发回退上一页操作，而是会关闭当前查看的楼中楼的弹窗。注：某些浏览器不适用"
                      );
                    }
                  },
                  "使浏览器后退变成关闭楼中楼弹窗"
                ),
                PopsPanel.getSwtichDetail(
                  "新增滚动到顶部按钮",
                  "baidu_tieba_add_scroll_top_button_in_forum",
                  true,
                  void 0,
                  "向下滚动的距离>页面高度*2就会出现按钮"
                ),
                PopsPanel.getSwtichDetail(
                  "优化查看评论",
                  "baidu_tieba_optimize_see_comments",
                  true,
                  void 0,
                  "可以查看更多的评论"
                ),
                PopsPanel.getSwtichDetail(
                  "优化图片点击预览",
                  "baidu_tieba_optimize_image_preview",
                  true,
                  void 0,
                  "使用Viewer查看图片"
                ),
                PopsPanel.getSwtichDetail(
                  "强制查看被屏蔽的帖子",
                  "baidu_tieba_repairErrorThread",
                  false,
                  function (event, enable) {
                    if (enable) {
                      window.alert(
                        "开启后，如果查看的帖子显示【贴子不存在或者已被删除】，且该帖子在PC端可以查看，那么该修复可以生效。"
                      );
                    }
                  },
                  "PC端可以查看帖子该功能才能正确生效"
                ),
                PopsPanel.getSwtichDetail(
                  "点击楼主头像正确跳转主页",
                  "baidu_tieba_clickOnTheOwnerSAvatarToCorrectlyRedirectToTheHomepage",
                  true,
                  void 0,
                  "点击头像正确跳转至用户主页"
                ),
                PopsPanel.getSwtichDetail(
                  "屏蔽机器人",
                  "baidu_tieba_shield_commnets_baodating",
                  true,
                  void 0,
                  "屏蔽【贴吧包打听】机器人，回答的评论都是牛头不对马嘴的"
                ),
                PopsPanel.getSwtichDetail(
                  "实验性-请求携带Cookie",
                  "baidu_tieba_request_with_cookie",
                  false,
                  void 0,
                  "非浏览器插件使用"
                ),
              ],
            },
            {
              text: "劫持/拦截",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "劫持-唤醒App",
                  "baidu_tieba_hijack_wake_up",
                  false,
                  void 0,
                  "阻止唤醒调用App"
                ),
                PopsPanel.getSwtichDetail(
                  "伪装客户端已调用",
                  "baidu_tieba_clientCallMasquerade",
                  true,
                  void 0,
                  "阻止弹窗"
                ),
              ],
            },
          ],
        },
        {
          id: "baidu-panel-config-wenku",
          title: "文库",
          headerTitle: "百度文库<br />wk.baidu.com<br />tanbi.baidu.com",
          isDefault() {
            return Router.isWenKu();
          },
          scrollToDefaultView: true,
          forms: [
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "屏蔽会员精选",
                  "baidu_wenku_block_member_picks",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "屏蔽APP精选",
                  "baidu_wenku_blocking_app_featured",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "屏蔽相关文档",
                  "baidu_wenku_blocking_related_documents",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "屏蔽底部工具栏",
                  "baidu_wenku_blocking_bottom_toolbar",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "屏蔽下一篇按钮",
                  "baidu_wenku_shield_next_btn",
                  false
                ),
              ],
            },
          ],
        },
        {
          id: "baidu-panel-config-jingyan",
          title: "经验",
          headerTitle: "百度经验<br />jingyan.baidu.com",
          isDefault() {
            return Router.isJingYan();
          },
          scrollToDefaultView: true,
          forms: [],
        },
        {
          id: "baidu-panel-config-baike",
          title: "百科",
          headerTitle: "百度百科<br />baike.baidu.com<br />wapbaike.baidu.com",
          isDefault() {
            return Router.isBaiKe();
          },
          scrollToDefaultView: true,
          forms: [
            {
              text: "劫持Box",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "isBox",
                  "baidu-baike-Box-isBox",
                  true,
                  void 0,
                  "Box.isBox和Box.$isBox强制返回true"
                ),
                PopsPanel.getSwtichDetail(
                  "isLiteBox",
                  "baidu-baike-Box-isLiteBox",
                  false,
                  void 0,
                  "Box.isLiteBox和Box.$isLiteBox强制返回true"
                ),
                PopsPanel.getSwtichDetail(
                  "isInfoBox",
                  "baidu-baike-Box-isInfoBox",
                  false,
                  void 0,
                  "Box.isInfoBox和Box.$isInfoBox强制返回true"
                ),
                PopsPanel.getSwtichDetail(
                  "isIOS",
                  "baidu-baike-Box-isIOS",
                  false,
                  void 0,
                  "Box.isIOS和Box.$isIOS强制返回true"
                ),
                PopsPanel.getSwtichDetail(
                  "isAndroid",
                  "baidu-baike-Box-isAndroid",
                  false,
                  void 0,
                  "Box.isAndroid和Box.$isAndroid强制返回true"
                ),
                PopsPanel.getSwtichDetail(
                  "android.invokeApp",
                  "baidu-baike-Box-android.invokeApp",
                  true,
                  void 0,
                  "Box.android.invokeApp()置空"
                ),
                PopsPanel.getSwtichDetail(
                  "android.invokeLiteApp",
                  "baidu-baike-Box-android.invokeLiteApp",
                  true,
                  void 0,
                  "Box.android.invokeLiteApp()置空"
                ),
                PopsPanel.getSwtichDetail(
                  "ios.invokeApp",
                  "baidu-baike-Box-ios.invokeApp",
                  true,
                  void 0,
                  "Box.ios.invokeApp()置空"
                ),
              ],
            },
            {
              text: "他说(/tashuo)",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部广告",
                  "baidu_baike_tashuo_remove_bottom_ad",
                  true
                ),
              ],
            },
          ],
        },
        {
          id: "baidu-panel-config-zhidao",
          title: "知道",
          headerTitle: "百度知道<br />zhidao.baidu.com",
          isDefault() {
            return Router.isZhiDao();
          },
          scrollToDefaultView: true,
          forms: [
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】推荐更多精彩内容",
                  "baidu_zhidao_block_recommend_more_exciting_content",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】相关问题",
                  "baidu_zhidao_block_related_issues",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】其他回答",
                  "baidu_zhidao_block_other_answers",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】顶部浮动工具栏",
                  "baidu_zhidao_shield_top_fixed_toolbar",
                  false
                ),
              ],
            },
          ],
        },
        {
          id: "baidu-panel-config-fanyi",
          title: "翻译",
          headerTitle: "百度翻译<br />fanyi.baidu.com<br />fanyi-app.baidu.com",
          isDefault() {
            return Router.isFanYi() || Router.isFanYiApp();
          },
          scrollToDefaultView: true,
          forms: [
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部推荐",
                  "baidu_fanyi_recommended_shielding_bottom",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部其它",
                  "baidu_fanyi_other_shielding_bottom",
                  true
                ),
              ],
            },
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "自动聚焦输入框",
                  "baidu_fanyi_auto_focus",
                  true
                ),
              ],
            },
            {
              text: "App（fanyi-app）",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】专栏信息",
                  "baidu_fanyi_app_shield_column_information",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】为你推荐",
                  "baidu_fanyi_app_shield_recommended_for_you",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】我要跟读",
                  "baidu_fanyi_app_shield_i_need_to_follow_along",
                  false
                ),
              ],
            },
          ],
        },
        {
          id: "baidu-panel-config-image",
          title: "图片",
          headerTitle: "百度经验<br />image.baidu.com",
          isDefault() {
            return Router.isJingYan();
          },
          scrollToDefaultView: true,
          forms: [],
        },
        {
          id: "baidu-panel-config-map",
          title: "地图",
          headerTitle: "百度地图<br />map.baidu.com",
          isDefault() {
            return Router.isMap();
          },
          scrollToDefaultView: true,
          forms: [
            {
              text: "劫持/拦截",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "拦截-唤醒App",
                  "baidu_map_hijack_wakeup",
                  false,
                  void 0,
                  "阻止唤醒调用App"
                ),
              ],
            },
          ],
        },
        {
          id: "baidu-panel-config-xue",
          title: "知了好学",
          headerTitle: "知了好学<br />xue.baidu.com",
          isDefault() {
            return Router.isJingYan();
          },
          scrollToDefaultView: true,
          forms: [],
        },
        {
          id: "baidu-panel-config-aiqicha",
          title: "爱企查",
          headerTitle: "爱企查<br />aiqicha.baidu.com",
          isDefault() {
            return Router.isAiQiCha();
          },
          scrollToDefaultView: true,
          forms: [
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】轮播图",
                  "baidu_aiqicha_shield_carousel",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】行业热点新闻",
                  "baidu_aiqicha_shield_industry_host_news",
                  true
                ),
              ],
            },
          ],
        },
        {
          id: "baidu-panel-config-pos",
          title: "网盟",
          headerTitle: "百度网盟推广<br />pos.baidu.com",
          isDefault() {
            return Router.isPos();
          },
          scrollToDefaultView: true,
          forms: [],
        },
        {
          id: "baidu-panel-config-haokan",
          title: "好看视频",
          headerTitle: "好看视频<br />haokan.baidu.com",
          isDefault() {
            return Router.isHaoKan();
          },
          scrollToDefaultView: true,
          forms: [
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】猜你喜欢",
                  "baidu_haokan_shield_may_also_like",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】今日热播榜单",
                  "baidu_haokan_shield_today_s_hot_list",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】右侧工具栏",
                  "baidu_haokan_shield_right_video_action",
                  true
                ),
              ],
            },
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "播放视频自动进入全屏",
                  "baidu_haokan_play_video_and_automatically_enter_full_screen",
                  false
                ),
              ],
            },

            {
              text: "劫持/拦截",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "拦截-唤醒App",
                  "baidu_haokan_hijack_wakeup",
                  false,
                  void 0,
                  "阻止唤醒调用App"
                ),
              ],
            },
          ],
        },
        {
          id: "baidu-panel-config-graph",
          title: "识图",
          headerTitle: "百度识图<br />graph.baidu.com",
          isDefault() {
            return Router.isGraph();
          },
          scrollToDefaultView: true,
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "【重构】识图一下",
                  "baidu-graph-repairHomeRecognitionPicture",
                  true,
                  void 0,
                  "重构主页的识图一下，就可以直接点击上传图片进行搜索"
                ),
                this.getSwtichDetail(
                  "【重构】搜索按钮",
                  "baidu-graph-repairSearchButton",
                  true,
                  void 0,
                  "重构主页的往下滑动右下角出现的搜索图标按钮"
                ),
                this.getSwtichDetail(
                  "【重构】重拍",
                  "baidu-graph-repairRetakeButton",
                  true,
                  void 0,
                  "在已搜索出相关结果的界面中的重构【重拍】按钮"
                ),
                this.getSwtichDetail(
                  "修复搜索无结果",
                  "baidu-graph-repairSearchNoResult",
                  true,
                  void 0,
                  "如果出现识图没结果，重新识别，可能是因为后面参数多了tpl_from=pc的问题"
                ),
              ],
            },
          ],
        },
        {
          id: "baidu-panel-config-pan",
          title: "网盘",
          headerTitle: "百度经验<br />pan.baidu.com",
          isDefault() {
            return Router.isPan();
          },
          scrollToDefaultView: true,
          forms: [],
        },
        {
          id: "baidu-panel-config-yiyan",
          title: "文心一言",
          headerTitle: "文心一言<br />yiyan.baidu.com",
          isDefault() {
            return Router.isYiYan();
          },
          scrollToDefaultView: true,
          forms: [
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】文字/图片水印",
                  "baidu_yiyan_remove_ai_mask",
                  true
                ),
              ],
            },
          ],
        },
        {
          id: "baidu-panel-config-chat",
          title: "AI伙伴",
          headerTitle: "搜索AI伙伴<br />chat.baidu.com",
          isDefault() {
            return Router.isChat();
          },
          scrollToDefaultView: true,
          forms: [
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】文字/图片水印",
                  "baidu_chat_remove_ai_mask",
                  true
                ),
              ],
            },
          ],
        },
        {
          id: "baidu-panel-config-easy-learn",
          title: "教育",
          headerTitle:
            "百度教育<br />easylearn.baidu.com<br />uf9kyh.smartapps.cn",
          isDefault() {
            return Router.isEasyLearn() || Router.isMiniJiaoYu();
          },
          scrollToDefaultView: true,
          forms: [
            {
              text: "小程序",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部下拉菜单",
                  "mini_baidu_jiaoyu_shield_bottom_pull_down_menu",
                  false
                ),
              ],
            },
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】本题试卷",
                  "baidu_easylearn_shield_this_question_paper",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】本卷好题",
                  "baidu_easylearn_shield_good_questions_in_this_volume",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】相关试卷",
                  "baidu_easylearn_shield_related_test_papers",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】视频讲解",
                  "baidu_easylearn_shield_video_explanation",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】学霸笔记",
                  "baidu_easylearn_shield_xueba_notes",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部工具栏",
                  "baidu_easylearn_shield_bottom_toolbar",
                  false
                ),
              ],
            },
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "解锁顶部搜索框",
                  "baidu_easylearn_unlocking_top_search_input",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "解锁搜题上限",
                  "baidu_easylearn_unlocking_the_upper_limit_of_search_questions",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "自动显示答案",
                  "baidu_easylearn_auto_show_answer",
                  true
                ),
              ],
            },
          ],
        },
        {
          id: "baidu-panel-config-ai-study",
          title: "知了爱学",
          headerTitle:
            "知了爱学<br />aistudy.baidu.com<br />isite.baidu.com/site/wjz2tdly",
          isDefault() {
            return Router.isAiStudy() || Router.isISite();
          },
          scrollToDefaultView: true,
          forms: [
            {
              text: "知了爱学（isite）👇",
              type: "forms",
              forms: [],
            },
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部免费在线咨询",
                  "baidu_isite_wjz2tdly_shieldBottomBarRootContainer",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】右侧悬浮按钮-查看更多",
                  "baidu_isite_wjz2tdly_shieldRightSeeMoreToolBar",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】大家还在看",
                  "baidu_isite_wjz2tdly_shieldArticleBottom",
                  true
                ),
              ],
            },
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "自动展开全文",
                  "baidu_isite_wjz2tdly_autoExpandFullText",
                  true
                ),
              ],
            },
            {
              text: "知了爱学（aistudy）👇",
              type: "forms",
              forms: [],
            },
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部工具栏",
                  "baidu_ai_study_shieldBottomToolBar",
                  true
                ),
              ],
            },
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "自动展开全文",
                  "baidu_ai_study_autoExpandFullText",
                  true
                ),
              ],
            },
          ],
        },
      ];
    },
  };

  /** 百度搜索自定义拦截规则 */
  const BaiduSearchRule = {
    defaultRule: `
// 百度健康
match-href##expert.baidu.com
// 大家还在搜
match-href##recommend_list.baidu.com&&&&match-attr##tpl##recommend_list
// 大家还在搜:隐藏的(点击后，跳出来的)
remove-child##.c-atom-afterclick-recomm-wrap
// 百家号聚合
match-href##author.baidu.com/home/
// xxx 相关 xxx
match-attr##srcid##(sigma|vid_fourfold)
// 问一问
match-attr##data-log##wenda_inquiry
// 自动播放视频
remove-child##[class*='-video-player']
// 百度游戏
match-attr##srcid##yx_entity_san
// 大家还在看
match-attr##srcid##yl_recommend_list
// 百度-智能小程序
match-attr##srcid##xcx_multi`,
    /**
     * @type { {
     * mode: "match-href"|"match-attr"|"contains-child"|"remove-child",
     * matchText?: RegExp,
     * attr?: string;
     * moreRule?: {
     *  mode: "match-href"|"match-attr"|"contains-child"|"remove-child",
     *  matchText?: RegExp,
     *  attr?: string;
     * }[],
     * }[]}
     */
    rule: [],
    init() {
      let localRule = this.getLocalRule();
      this.rule = this.parseRule(localRule);
    },
    /** 获取本地存储的自定义拦截规则 */
    getLocalRule() {
      let localRule = PopsPanel.getValue(
        "baidu-search-interception-rules",
        this.defaultRule
      );
      if (localRule === "") {
        return this.defaultRule;
      }
      localRule = localRule.trim();
      return localRule;
    },
    /** 设置本地存储的自定义拦截规则 */
    setLocalRule(rule) {
      PopsPanel.setValue("baidu-search-interception-rules", rule);
    },
    /** 清空规则 */
    clearLocalRule() {
      PopsPanel.deleteValue("baidu-search-interception-rules");
    },
    /**
     * 把规则进行转换
     * @param {string} rule
     */
    parseRule(localRule) {
      let result = [];
      function parseOneRule(ruleItem) {
        let cRuleItemSplit = ruleItem.split("##");
        if (!cRuleItemSplit.length) {
          log.error(["无效规则", ruleItem]);
          return;
        }
        let ruleName = cRuleItemSplit[0];
        let ruleNameLowerCase = ruleName.toLowerCase();
        let endRule = ruleItem.replace(ruleName + "##", "");
        if (ruleNameLowerCase === "match-href") {
          return {
            rule: ruleItem,
            mode: ruleNameLowerCase,
            matchText: new RegExp(endRule),
          };
        } else if (ruleNameLowerCase === "match-attr") {
          let otherRuleSplit = endRule.split("##");
          if (otherRuleSplit.length === 1) {
            log.error(["无效规则", ruleItem]);
            return;
          }
          let attrName = otherRuleSplit[0];
          let attrValueMatch = endRule.replace(attrName + "##", "");
          return {
            rule: ruleItem,
            mode: ruleNameLowerCase,
            attr: attrName,
            matchText: new RegExp(attrValueMatch),
          };
        } else if (
          ruleNameLowerCase === "contains-child" ||
          ruleNameLowerCase === "remove-child"
        ) {
          return {
            rule: ruleItem,
            mode: ruleNameLowerCase,
            matchText: endRule,
          };
        } else {
          log.error(["无效规则", ruleItem]);
        }
      }

      localRule.split("\n").forEach((ruleItem) => {
        ruleItem = ruleItem.trim();
        if (ruleItem === "") {
          return;
        }
        if (ruleItem.startsWith("//")) {
          return;
        }
        let moreRule = ruleItem.split("&&&&");
        if (moreRule.length === 1) {
          let parsedRule = parseOneRule(ruleItem);
          if (parsedRule) {
            result.push(parsedRule);
          }
        } else {
          let resultRule = [];
          moreRule.forEach((oneRule) => {
            oneRule = oneRule.trim();
            let parsedRule = parseOneRule(oneRule);
            if (parsedRule) {
              resultRule.push(parsedRule);
            }
          });
          result.push({
            mode: "more-rule",
            moreRule: resultRule,
          });
        }
      });
      return result;
    },
    /**
     * 执行自定义规则，拦截返回true
     * @param {HTMLDivElement} element
     * @param {string} url 真实链接
     */
    handleCustomRule(element, url) {
      function handleOneRule(ruleItem) {
        if (ruleItem.mode === "match-href") {
          if (url.match(ruleItem.matchText)) {
            return true;
          }
        } else if (ruleItem.mode === "match-attr") {
          if (
            element.hasAttribute(ruleItem.attr) &&
            element.getAttribute(ruleItem.attr).match(ruleItem.matchText)
          ) {
            return true;
          }
        } else if (ruleItem.mode === "contains-child") {
          if (element.querySelector(ruleItem.matchText)) {
            return true;
          }
        } else if (ruleItem.mode === "remove-child") {
          element.querySelector(ruleItem["matchText"])?.remove();
        }
      }
      for (const ruleItem of this.rule) {
        if (ruleItem.moreRule) {
          let flag = true;
          for (const oneRule of ruleItem.moreRule) {
            if (!handleOneRule(oneRule)) {
              flag = false;
              break;
            }
          }
          if (flag) {
            return true;
          }
        } else {
          if (handleOneRule(ruleItem)) {
            return true;
          }
        }
      }
    },
  };

  /**
   * 百度劫持
   */
  const BaiduHijack = {
    /**
     * 统一管理apply的劫持，防止套娃
     * @param {string} mode copy scheme
     */
    hijackFunctionApply(mode) {
      mode = mode.toLowerCase();
      unsafeWindow.Function.prototype.apply = function (...args) {
        /**
         * 劫持剪贴板写入
         * + 百度搜索
         */
        if (mode.includes("copy")) {
          try {
            let firstParam = args[1];
            if (
              args.length === 2 &&
              typeof firstParam === "object" &&
              "" + firstParam === "[object Arguments]" &&
              firstParam.length === 1 &&
              typeof firstParam[0] === "object" &&
              firstParam[0] != null &&
              "appName" in firstParam[0] &&
              "checkTokenCopied" in firstParam[0] &&
              "deeplink" in firstParam[0] &&
              "scheme" in firstParam[0] &&
              "token" in firstParam[0] &&
              "useDeeplink" in firstParam[0]
            ) {
              log.success(["劫持复制到剪贴板函数", ...firstParam]);
              return new Promise(function (resolve) {
                log.success(["修改参数并劫持复制到剪贴板返回true"]);
                resolve({
                  status: true,
                });
              });
            }
          } catch (error) {
            /*log.error(error);*/
          }
        } else if (mode.includes("scheme")) {
          /**
           * 劫持apply的Scheme调用
           * + 百度搜索
           */
          try {
            let firstParam = args[1];
            if (
              args.length === 2 &&
              typeof firstParam === "object" &&
              "" + firstParam === "[object Arguments]" &&
              firstParam.length === 2 &&
              firstParam[1] === "scheme"
            ) {
              log.success(["劫持Scheme", ...firstParam]);
              return;
            }
          } catch (error) {
            /*log.error(error);*/
          }
        }
        return OriginPrototype.Function.apply.call(this, ...args);
      };
    },
    /**
     * 劫持百度搜索某些项的点击事件
     * + 百度搜索
     *
     * Object.defineProperty
     * @param {string} menuKeyName
     */
    hijack_onClick(menuKeyName) {
      unsafeWindow.Object.defineProperty = function (
        target,
        propertyKey,
        _attributes
      ) {
        if (propertyKey === "_onClick") {
          BaiDu.$data.search.isHijack_onClick = true;
          log.info(["成功劫持_onClick", arguments]);
          let oldFn = _attributes["value"];
          _attributes["value"] = function (event) {
            let eventNode = this._getNode(event.target);
            let eventNodeName = this._getType(eventNode);
            if (eventNodeName === "link") {
              let linkProps = this._getLinkProps(eventNode);
              log.success(["点击事件-linkProps信息", linkProps]);
              if (!linkProps.href) {
                DOMUtils.trigger(document, "click", event, false);
                return;
              }
              utils.preventEvent(event);
              if (PopsPanel.getValue("baidu_search_hijack__onClick_to_blank")) {
                log.success("新标签页打开: " + linkProps.href);
                window.open(linkProps.href, "_blank");
              } else {
                window.location.href = linkProps.href;
              }
            } else {
              log.success([
                "点击事件-this._getType(eventNode)不为link",
                eventNodeName,
                event,
              ]);
              oldFn.call(this, ...arguments);
            }
          };
        }
        return OriginPrototype.Object.defineProperty.call(this, ...arguments);
      };
    },
    /**
     * 劫持添加元素，包括script标签、iframe标签，默认劫持iframe的非http链接
     * + 百度贴吧(tieba.baidu.com)
     * + 百度地图(map.baidu.com)
     * Element.prototype.appendChild
     * @param {(element:HTMLElement)=>{}|undefined} handleCallBack 处理的回调函数，如果劫持请返回true
     */
    hijackElementAppendChild(handleCallBack) {
      unsafeWindow.Element.prototype.appendChild = function (element) {
        if (element instanceof HTMLIFrameElement) {
          if (!element?.src?.startsWith("http")) {
            log.success(["劫持iframe唤醒：" + element.src, element]);
            return;
          }
        }
        if (typeof handleCallBack === "function") {
          let handleResult = handleCallBack(element);
          if (handleResult) {
            return;
          }
        }
        return OriginPrototype.Element.appendChild.call(this, element);
      };
    },
    /**
     * 劫持jQuery的append的iframe
     * + 百度地图(map.baidu.com)
     *
     * $().append();
     */
    hijackJQueryAppend() {
      let originAppend = $.fn.append;
      $.fn.append = function (params) {
        if (typeof params === "string") {
          params = params.trim();
          if (
            params.startsWith('<iframe src="') &&
            !params.startsWith('<iframe src="http')
          ) {
            log.success(["劫持jQuery的iframe", params]);
            return;
          }
        }
        originAppend.apply(this, arguments);
      };
    },
    /**
     * 劫持OpenBox
     * + 百度搜索
     *
     * window.OpenBox
     */
    hijackOpenBox() {
      let OpenBox = function () {
        return {
          open(...args) {
            log.info(["劫持OpenBox-open传入参数👇", args]);
            if (!args.length) {
              return;
            }
            let invokeUrl = args[0]["invokeURL"] || args[0]["invoke_url"];
            if (typeof args[0] === "object" && typeof invokeUrl === "string") {
              log.success("直接跳转Url：" + invokeUrl);
              window.location.href = invokeUrl;
            }
          },
          ready(...args) {
            log.info(["劫持OpenBox-ready传入参数👇", args]);
          },
          version: 20170811,
        };
      };
      OpenBox.prototype.getIdmData = function () {
        return {};
      };
      let OpenBox_u = {
        open(...args) {
          log.info(["劫持OpenBox-open传入参数👇", args]);
          if (!args.length) {
            return;
          }
          let invokeUrl = args[0]["invokeURL"] || args[0]["invoke_url"];
          if (typeof args[0] === "object" && typeof invokeUrl === "string") {
            log.success("直接跳转Url：" + invokeUrl);
            window.location.href = invokeUrl;
          }
        },
      };
      let isObjectOpenBox = false;
      OriginPrototype.Object.defineProperty(unsafeWindow, "OpenBox", {
        get() {
          return isObjectOpenBox ? OpenBox_u : OpenBox;
        },
        set(v) {
          log.info(["OpenBox ==> ", v]);
          isObjectOpenBox = typeof v === "object";
        },
      });
    },

    /**
     * 劫持全局setTimeout
     * + 百度地图
     * + 百度搜索
     *
     * window.setTimeout
     * @param {RegExp|string} [matchStr=""] 需要进行匹配的函数字符串
     */
    hijackSetTimeout(matchStr = "") {
      unsafeWindow.setTimeout = function (...args) {
        let callBackString = args[0].toString();
        if (callBackString.match(matchStr)) {
          log.success(["劫持延迟函数", callBackString]);
          return;
        }
        return OriginPrototype.setTimeout.apply(this, args);
      };
    },
    /**
     * 劫持百度贴吧的window.webpackJsonp
     * 当前 "core:67"
     * + 百度贴吧(tieba.baidu.com)
     *
     * https://tb3.bdstatic.com/tb/wise/wise-main-core/static/js/collect~download~frs~gaokao~index~pb~userpost.e5a81d45.js
     * tiebaNewWakeup.js v3.0.3
     * (c) 2018-2023 liugui01
     * Released under the BaiDuTieBa License.
     */
    hijackFunctionCall_WebPack_TieBa() {
      this.hijackWebpack("webpackJsonp", ["core:0"], function (webpackExports) {
        if (
          typeof webpackExports?.exports === "object" &&
          typeof webpackExports.exports["getSchema"] === "function" &&
          typeof webpackExports.exports["getToken"] === "function" &&
          typeof webpackExports.exports["init"] === "function" &&
          typeof webpackExports.exports["initDiffer"] === "function"
        ) {
          log.success(["成功劫持webpack调用函数", webpackExports]);
          let codeId = webpackExports?.["i"];
          webpackExports.exports.getSchema = function (...args) {
            // log.info(["阻止调用getSchema", ...arguments]);
          };
          webpackExports.exports.getToken = function (...args) {
            log.info(["阻止调用getToken", ...args]);
          };
          webpackExports.exports.init = function (...args) {
            log.info(["阻止初始化", ...args]);
            if (args?.[0]?.["page"] === "usercenter") {
              /* 跳转至用户空间 */
              let homeUrl = "/home/main?id=" + args[0]["param"]["portrait"];
              log.info(["跳转至用户空间", homeUrl]);
              window.open(homeUrl);
            }
            return;
          };
          webpackExports.exports.initDiffer = function (...args) {
            log.info(["阻止初始化差异", ...args]);
            return;
          };
        }
        return webpackExports;
      });
    },
    /**
     * 劫持webpack
     * @param {string} webpackName 当前全局变量的webpack名
     * @param {string|any[]} mainCoreData 需要劫持的webpack的顶部core，例如：(window.webpackJsonp = window.webpackJsonp || []).push([["core:0"],{}])
     * @param {(webpackExports: object|undefined)=>{}} checkCallBack 如果mainCoreData匹配上，则调用此回调函数
     */
    hijackWebpack(webpackName = "webpackJsonp", mainCoreData, checkCallBack) {
      let originObject = void 0;
      OriginPrototype.Object.defineProperty(unsafeWindow, webpackName, {
        get() {
          return originObject;
        },
        set(newValue) {
          log.success("成功劫持webpack，当前webpack名：" + webpackName);
          originObject = newValue;
          const originPush = originObject.push;
          originObject.push = function (...args) {
            let _mainCoreData = args[0][0];
            if (
              mainCoreData == _mainCoreData ||
              (Array.isArray(mainCoreData) &&
                Array.isArray(_mainCoreData) &&
                JSON.stringify(mainCoreData) === JSON.stringify(_mainCoreData))
            ) {
              OriginPrototype.Object.keys(args[0][1]).forEach((keyName) => {
                let originSwitchFunc = args[0][1][keyName];
                args[0][1][keyName] = function (..._args) {
                  let result = originSwitchFunc.call(this, ..._args);
                  _args[0] = checkCallBack(_args[0]);
                  return result;
                };
              });
            }
            return originPush.call(this, ...args);
          };
        },
      });
    },
    /**
     * 劫持百度好看视频的window.webpackJsonp
     * + 百度好看视频(haokan.baidu.com)
     *
     */
    hijackFunctionCall_WebPack_HaoKan() {
      this.hijackWebpack("webpackJsonp", [40, 1], function (webpackExports) {
        if (
          typeof webpackExports?.exports === "object" &&
          typeof webpackExports.exports["LaunchScheme"] === "function" &&
          typeof webpackExports.exports["__esModule"] === "boolean"
        ) {
          log.success(["成功劫持webpack调用函数", webpackExports]);
          let codeId = webpackExports?.["i"];
          webpackExports.exports["LaunchScheme"] = function () {
            log.success(["修改参数：LaunchScheme"]);
            return {
              launch() {
                return new Promise(function (resolve) {
                  log.success(["修改参数：launch"]);
                  resolve();
                });
              },
            };
          };
        }
        return webpackExports;
      });
    },
    /**
     * 劫持百家号和百度地图的Function的call
     * + 百家号(baijiahao.baidu.com)
     * + 百度地图(map.baidu.com)
     * Function.property.call
     */
    hijackFunctionCall_BaiJiaHao_Map() {
      unsafeWindow.Function.prototype.call = function (...args) {
        if (
          args.length === 2 &&
          args[0] === void 0 &&
          args[1] != null &&
          "arg" in args[1] &&
          "delegate" in args[1] &&
          "done" in args[1] &&
          "method" in args[1] &&
          "next" in args[1] &&
          "prev" in args[1]
        ) {
          log.success(["修改参数", args[1]]);
          args[1]["method"] = "return";
          args[1]["next"] = "end";
          args[1]["prev"] = 24;
        }
        let result = OriginPrototype.Function.call.apply(this, args);
        return result;
      };
    },
    /**
     * 劫持window下的BoxJSBefore对象调用，它的所有的属性都是函数
     * + 百家号(mbd.baidu.com)
     *
     * window.BoxJSBefore
     */
    hijackBoxJSBefore() {
      OriginPrototype.Object.defineProperty(unsafeWindow, "BoxJSBefore", {
        get() {
          return new Proxy(
            {},
            {
              get(target, name, receiver) {
                log.success("劫持BoxJSBefore调用：" + name);
              },
            }
          );
        },
      });
    },
  };

  /**
   * 独立出来的Api功能
   */
  const BaiduExtraApi = {
    tieba: {
      /**
       * 签到吧
       * @param {string} forumName 吧名
       * @param {string} tbs 应该是用户token
       * @returns {Promise<?boolean>}
       */
      async forumSign(forumName, tbs) {
        log.success(["发送签到请求→", forumName, tbs]);
        let postResp = await httpx.post("https://tieba.baidu.com/sign/add", {
          data: `ie=utf-8&kw=${forumName}&tbs=${tbs}`,
          responseType: "json",
          headers: {
            Accept: "application/json, text/javascript, */*; q=0.01",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Host: "tieba.baidu.com",
            Origin: "https://tieba.baidu.com",
            "User-Agent": utils.getRandomPCUA(),
            Referer: "https://tieba.baidu.com/p/",
            "X-Requested-With": "XMLHttpRequest",
          },
        });
        log.success(postResp);
        if (!postResp.status) {
          return;
        }
        let data = utils.toJSON(postResp.data.responseText);
        log.success(data);
        return data;
      },
      /**
       * 获取用户所有关注的吧
       * 需要cookie
       * 如果未登录，那么会获取到空列表
       * @returns {Promise<?{
       * forum_name: string,
       * is_brand_forum: 0|number,
       * }[]>}
       */
      async getUserAllLikeForum() {
        let getResp = await httpx.get(
          "https://tieba.baidu.com/mo/q/sug?query=&is_ajax=1&sug=1",
          {
            headers: {
              Accept: "application/json",
              Host: "tieba.baidu.com",
              Referer: "https://tieba.baidu.com/i/i/forum",
              "User-Agent": utils.getRandomAndroidUA(),
            },
          }
        );
        log.success(getResp);
        if (!getResp.status) {
          return;
        }
        let data = utils.toJSON(getResp.data.responseText);
        log.success(data);
        return data["data"]["like_forum"];
      },
      /**
       * 获取吧的tbs值
       * @returns {Promise<?string>}
       */
      async getForumTbs(forumName) {
        let getResp = await httpx.get(
          `https://tieba.baidu.com/f?kw=${forumName}&ie=utf-8`,
          {
            headers: {
              Host: "tieba.baidu.com",
              Referer: `https://tieba.baidu.com/f?kw=${forumName}&ie=utf-8`,
            },
          }
        );
        if (!getResp.status) {
          return;
        }
        let PageData = getResp.data.responseText.match(
          /var[\s]*PageData[\s\S]*'tbs'.*"(.+)"/
        );
        if (!PageData) {
          return;
        }
        return PageData[1];
      },
      /**
       * 获取帖子内的图片
       * @param {string} forumName 吧名
       * @param {string} tid 帖子的id
       * @param {0|1} [see_lz=0]
       * @param {number} [from_page=0]
       * @param {string} [alt="jview"]
       * @param {number} [next=1000]
       * @param {number} [prev=1000]
       * @returns {Promise<?{
       * has_sep: ?boolean
       * pic_amount: number,
       * pic_list: object,
       * }>}
       */
      async getPictureGuide(
        forumName,
        tid,
        see_lz = 0,
        from_page = 0,
        alt = "jview",
        next = 1000,
        prev = 1000
      ) {
        let getResp = await httpx.get(
          `https://tieba.baidu.com/photo/bw/picture/guide?kw=${forumName}&tid=${tid}&see_lz=${see_lz}&from_page=${from_page}&alt=${alt}&next=${next}&prev=${prev}&_=${Date.now()}`,
          {
            headers: {
              Accept: "*/*",
              Host: "tieba.baidu.com",
              "User-Agent": utils.getRandomPCUA(),
            },
            responseType: "json",
          }
        );
        if (!getResp.status) {
          return;
        }
        let data = utils.toJSON(getResp.data.responseText);
        if (data["no"] === 0 || data["error"] === "sucess!") {
          return data["data"];
        }
      },
    },
  };

  /* --------------入口-------------- */
  if (typeof unsafeWindow.BaiDuOptimization !== "number") {
    unsafeWindow.BaiDuOptimization = 0;
  } else {
    unsafeWindow.BaiDuOptimization++;
    log.warn(
      "阻止脚本容器反复执行本脚本 " + unsafeWindow.BaiDuOptimization + " 次"
    );
    return;
  }
  const loadingView = new LoadingView(true);
  PopsPanel.initMenu();
  BaiduSearchRule.init();
  BaiDu.init();
  /* --------------入口-------------- */
})();
