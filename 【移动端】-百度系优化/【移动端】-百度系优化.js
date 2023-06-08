// ==UserScript==
// @name         【移动端】-百度系优化
// @icon         https://www.baidu.com/favicon.ico
// @namespace    https://greasyfork.org/zh-CN/scripts/418349-移动端-百度系优化
// @supportURL   https://greasyfork.org/zh-CN/scripts/418349-移动端-百度系优化/feedback
// @version      0.8.6
// @author       WhiteSevs
// @description  用于【移动端】的百度系列产品优化，包括【百度搜索】、【百家号】、【百度贴吧】、【百度文库】、【百度经验】、【百度百科】、【百度知道】、【百度翻译】、【百度图片】、【百度地图】、【百度好看视频】、【百度爱企查】、【百度问题】
// @match        *://m.baidu.com/*
// @match        *://www.baidu.com/*
// @match        *://baijiahao.baidu.com/*
// @match        *://tieba.baidu.com/*
// @match        *://wk.baidu.com/*
// @match        *://tanbi.baidu.com/*
// @match        *://jingyan.baidu.com/*
// @match        *://baike.baidu.com/*
// @match        *://zhidao.baidu.com/*
// @match        *://fanyi.baidu.com/*
// @match        *://fanyi-app.baidu.com/*
// @match        *://image.baidu.com/*
// @match        *://map.baidu.com/*
// @match        *://xue.baidu.com/*
// @match        *://mbd.baidu.com/*
// @match        *://aiqicha.baidu.com/*
// @match        *://pos.baidu.com/*
// @match        *://haokan.baidu.com/*
// @connect      www.baidu.com
// @connect      m.baidu.com
// @connect      tieba.baidu.com
// @connect      baike.baidu.com
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        unsafeWindowresponse
// @require	     https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @require      https://greasyfork.org/scripts/449471-viewer/code/Viewer.js
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js
// @run-at       document-start
// ==/UserScript==

(function () {
  let log = new Utils.Log(GM_info);
  log.config({
    logMaxCount: 20000,
    autoClearConsole: true,
  });
  let httpx = new Utils.Httpx(GM_xmlhttpRequest);
  httpx.config({
    onabort: function () {
      log.error("请求取消");
    },
    ontimeout: function () {
      log.error("请求超时");
    },
    onerror: function (response) {
      log.error(["httpx-onerror 请求异常", response]);
    },
  });
  const CSDN_FLAG_CSS = `
    .csdn-flag-component-box .praise {
        padding-right: 20px;
        background: #ff5722;
        text-indent: 1em;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        background: -webkit-linear-gradient(left,#ff5722,#f78d6b);
        background: -o-linear-gradient(right,#ff5722,#f78d6b);
        background: -moz-linear-gradient(right,#ff5722,#f78d6b);
        background: linear-gradient(to right,#ff5722,#f78d6b);
    }
    .csdn-flag-component-box .praise,.csdn-flag-component-box .share {
        /*width: 110px;
        height: 34px;
        line-height: 34px;*/
        height:auto;
        line-height:normal;
        color: #fff;
        background: #ff0505;
        border-radius: 5px;
        padding: 2px;
    }
    .csdn-flag-component-box a {
        display: inline-block;
        font-size: 14px;
    }
    .csdn-flag-component-box {
        /*margin: 0 auto;
        text-align: center;
        display: inline;*/
        display: flex;
        margin: 0;
        text-align: left;
        font-size: 0;
        position: relative;
        width: 260px;
        margin: 5px 0px;
    }
`;

  class LoadingView {
    constructor() {
      this.loadingClassName = "whitesev-page-isloading";
      this.loadingTextClassName = "whitesev-isloading-text";
      this.loadingIconClassName = "whitesev-isloading-icon";
      this.loadingOutSideIconClassName = "whitesev-isloading-outside";
      this.loadingWithInIconClassName = "whitesev-isloading-within";
      this.html = `
      <div class="${this.loadingClassName}">
        <span class="${this.loadingTextClassName}">Loading...</span>
      </div>`;
      this.iconHTML = `
      <div class="${this.loadingIconClassName}">
        <div class="${this.loadingOutSideIconClassName}"></div>
        <div class="${this.loadingWithInIconClassName}"></div>
      </div>`;
    }
    /**
     * 获取经过jQuery转换过的Loading的HTML
     * @param {Boolean} withIcon
     * @returns {jQuery}
     */
    getLoadingNode(withIcon = false) {
      let parseHTML = $(this.html);
      if (withIcon) {
        parseHTML
          .find(`.${this.loadingTextClassName}`)
          ?.after($(this.iconHTML));
      }
      return parseHTML;
    }
    /**
     * 设置Loading显示/关闭 true显示|false关闭
     * @param {Boolean} value
     */
    setVisible(value) {
      $(`.${this.loadingClassName}`)?.css("display", value ? "flex" : "none");
    }
    /**
     * 设置Loading图标显示/关闭
     * @param {Boolean} value
     */
    setIconVisible(value) {
      $(`.${this.loadingIconClassName}`)?.css(
        "display",
        value ? "unset" : "none"
      );
    }
    /**
     * 设置Loading的文本
     * @param {String} text 文本
     * @param {Boolean} withIcon 设置Icon图标
     */
    setText(text, withIcon = false) {
      $(`.${this.loadingTextClassName}`)?.html(`<span>${text}</span>`);
      if (withIcon) {
        if ($(`.${this.loadingIconClassName}`).length === 0) {
          $(`.${this.loadingTextClassName}`)?.after(this.iconHTML);
        }
        $(`.${this.loadingIconClassName}`)?.css("display", "unset");
      } else {
        $(`.${this.loadingIconClassName}`)?.remove();
      }
    }
    /**
     * 删除Loading元素
     */
    destory() {
      /* 销毁 */
      $(`.${this.loadingClassName}`)?.remove();
    }
    /**
     * 判断Loading是否已加载到页面中
     * @returns true|false
     */
    isExists() {
      return $(`.${this.loadingClassName}`).length == 0 ? false : true;
    }
    /**
     * 判断Loading是否存在Loading图标
     * @returns true|false
     */
    isExistsIcon() {
      return $(`.${this.loadingIconClassName}`).length == 0 ? false : true;
    }
    /**
     * 判断Loading中的文本是否存在
     * @returns true|false
     */
    isExistsText() {
      return $(`.${this.loadingTextClassName}`).length == 0 ? false : true;
    }
    /**
     * 加载需要的CSS
     */
    setCSS() {
      GM_addStyle(`
        .${this.loadingClassName}{
          margin: 0.08rem;
          background: #fff;
          height: 45px;
          font-size: 15px;
          display: flex;
          text-align: center;
          align-items: center;
          width: inherit;
          justify-content: center;
          border-radius: 0.12rem;
        }
        .${this.loadingIconClassName}{
          margin:0px 0px 28px 15px;
        }
        .${this.loadingOutSideIconClassName},
        .${this.loadingWithInIconClassName}{
          position: absolute;
          margin-left: 140px;
        }
        .${this.loadingOutSideIconClassName}{
          background-color: rgba(0, 0, 0, 0);
          border: 5px solid rgba(0, 183, 229, 0.9);
          opacity: .9;
          border-right: 5px solid rgba(0, 0, 0, 0);
          border-left: 5px solid rgba(0, 0, 0, 0);
          border-radius: 50px;
          box-shadow: 0 0 35px #2187e7;
          width: 20px;
          height: 20px;
          margin: 0 auto;
          /*position: fixed;
          left: 50%;
          top: 50%;
          margin-left: -25px;
          margin-top: -25px;*/
          -moz-animation: spinPulse 1s infinite ease-in-out;
          -webkit-animation: spinPulse 1s infinite ease-in-out;
          -o-animation: spinPulse 1s infinite ease-in-out;
          -ms-animation: spinPulse 1s infinite ease-in-out;
        }
        .${this.loadingWithInIconClassName}{
          background: rgba(0, 0, 0, 0) no-repeat center center;
          border: 5px solid rgba(0, 183, 229, 0.9);
          opacity: .9;
          border-top: 5px solid rgba(0, 0, 0, 0);
          border-bottom: 5px solid rgba(0, 0, 0, 0);
          border-radius: 50px;
          box-shadow: 0 0 15px #2187e7;
          width: 20px;
          height: 20px;
          margin: 0 auto;
          /*position: fixed;
          left: 50%;
          top: 50%;
          margin-left: -15px;
          margin-top: -15px;*/
          -moz-animation: spinoffPulse 3s infinite linear;
          -webkit-animation: spinoffPulse 3s infinite linear;
          -o-animation: spinoffPulse 3s infinite linear;
          -ms-animation: spinoffPulse 3s infinite linear;
        }
        @-moz-keyframes spinPulse {
            0% {
                -moz-transform: rotate(160deg);
                opacity: 0;
                box-shadow: 0 0 1px #505050
            }
            50% {
                -moz-transform: rotate(145deg);
                opacity: 1
            }
            100% {
                -moz-transform: rotate(-320deg);
                opacity: 0
            }
        }
        @-moz-keyframes spinoffPulse {
            0% {
                -moz-transform: rotate(0deg)
            }
            100% {
                -moz-transform: rotate(360deg)
            }
        }
        @-webkit-keyframes spinPulse {
            0% {
                -webkit-transform: rotate(160deg);
                opacity: 0;
                box-shadow: 0 0 1px #505050
            }
            50% {
                -webkit-transform: rotate(145deg);
                opacity: 1
            }
            100% {
                -webkit-transform: rotate(-320deg);
                opacity: 0
            }
        }
        @-webkit-keyframes spinoffPulse {
            0% {
                -webkit-transform: rotate(0deg)
            }
            100% {
                -webkit-transform: rotate(360deg)
            }
        }
        @-o-keyframes spinPulse {
            0% {
                -o-transform: rotate(160deg);
                opacity: 0;
                box-shadow: 0 0 1px #505050
            }
            50% {
                -o-transform: rotate(145deg);
                opacity: 1
            }
            100% {
                -o-transform: rotate(-320deg);
                opacity: 0
            }
        }
        @-o-keyframes spinoffPulse {
            0% {
                -o-transform: rotate(0deg)
            }
            100% {
                -o-transform: rotate(360deg)
            }
        }
        @-ms-keyframes spinPulse {
            0% {
                -ms-transform: rotate(160deg);
                opacity: 0;
                box-shadow: 0 0 1px #505050
            }
            50% {
                -ms-transform: rotate(145deg);
                opacity: 1
            }
            100% {
                -ms-transform: rotate(-320deg);
                opacity: 0
            }
        }
        @-ms-keyframes spinoffPulse {
            0% {
                -ms-transform: rotate(0deg)
            }
            100% {
                -ms-transform: rotate(360deg)
            }
        }`);
    }
  }

  var loadingView = new LoadingView();
  var GM_Menu = null; /* 菜单 */
  var baidu = {
    current_url: window.location.href,
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
      div.short-mini div[data-module="rec:undefined-undefined"]{
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
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-box-orient: vertical;
				-webkit-box-direction: normal;
				-webkit-flex-direction: column;
				flex-direction: column;
				-webkit-box-pack: center;
				-webkit-justify-content: center;
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
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-box-align: center;
				-webkit-align-items: center;
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
			
		`,
      searchHome: `
			html,
			body,
			div#header{
				height: calc( 100vh - 120px );
			}
			form#index-form{ /* fixed垂直水平居中 */
				position: fixed;
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
		`,
      baijiahao: `
			.layer-wrap,
			.openImg,
			.oPadding,
			.infinite-scroll-component__outerdiv,
			.bottomTTSStruct,
			.undefined,
			.headDeflectorContainer,
			.followSuper,
			#searchwordSdk ~ div:nth-child(n+4),
			#searchwordSdk,
			div#commentModule div div span:last-child{
				display:none !important;
			}
			body.scrollHide{
				overflow:auto !important;
			}
			.mainContent{
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
      .topic-share-page-v2 .bav-bar-top{
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
			.BK-after-content-wrapper,
			.yitiao-container,
			.BK-content-load,
			#J-tashuo-button-fixed,
			#J-super-layer-promote{
				display:none !important;
			}
			#J-other-content{
				display:block !important;
			}
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
			div[class*='ads']{
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
      #desktop-guide-wrapper,
      .trans-other-wrap.clearfix{
				display:none !important;
			}
			.new-header-dl{
				visibility: hidden;
			}
		`,
      fanyiapp: `
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
      .xiaoduVoice-banner.-border-round{
				display:none !important;
			}
		`,
      mbd: `
			div.headDeflectorContainer,
			#page_wrapper .other div[class*='undefined'],
			#page_wrapper .other > div[class=""]{
				display: none !important;
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
      div.open-app-top.share-origin-fixed.wx-share-launch,
      div.open-app-bottom.wx-share-launch{
        display: none !important;
      }
      `,
    },
    /**
     * 百度搜索-主页
     */
    searchHome() {
      if (
        !this.current_url.match(/^http(s|):\/\/(m|www).baidu.com\/$/g) &&
        !this.current_url.match(/^http(s|):\/\/(m|www).baidu.com\/\?ref=/g) &&
        !this.current_url.match(/^http(s|):\/\/(m|www).baidu.com\/\?tn=/g)
      ) {
        return;
      }
      GM_addStyle(this.css.searchHome);
      log.info("插入CSS规则-主页");
    },
    /**
     * 百度搜索
     */
    search() {
      if (!this.current_url.match(/^http(s|):\/\/(m|www).baidu.com\/.+/g)) {
        return;
      }

      /**
       * @param {Dictionary} originURLMap 链接字典
       */
      const handleItemURL = {
        originURLMap: null,
        /**
         * 为搜索结果每一条设置原始链接
         * @param {jQuery} jQDOM
         * @param {String} articleURL article的真实url
         */
        setArticleOriginUrl(jQDOM, articleURL) {
          /* 处理超链接 */
          jQDOM.find("a").each(async (index, item) => {
            if (handleItemURL.originURLMap.has(item.href)) {
              articleURL = handleItemURL.originURLMap.get(item.href);
            }
            let domOriginUrl = handleItemURL.parseDOMAttrOriginUrl($(item));
            if (!Utils.isNull(domOriginUrl)) {
              articleURL = domOriginUrl;
            }
            if (Utils.isNull(articleURL) || articleURL === item.href) {
              return;
            }
            item.href = articleURL;
            log.info("替换成新链接: " + articleURL);
          });
          /* 这个是百度笔记(可能) */
          jQDOM
            .find("div[data-aftclk][class*=img-container]")
            .each((index, item) => {
              let domOriginUrl = handleItemURL.parseDOMAttrOriginUrl($(item));
              if (!Utils.isNull(domOriginUrl)) {
                item.setAttribute("href", domOriginUrl);
                item.setAttribute("rl-link-href", domOriginUrl);
                log.info("替换成新链接2: " + domOriginUrl);
              }
            });
          /* 对搜锁结果中存在的视频进行处理 */
          jQDOM
            .find("div.c-video-container div[data-aftclk]")
            .each((index, item) => {
              let domOriginUrl = handleItemURL.parseDOMAttrOriginUrl($(item));
              if (!Utils.isNull(domOriginUrl)) {
                item.setAttribute("href", domOriginUrl);
                item.setAttribute("rl-link-href", domOriginUrl);
                log.info("视频替换成新链接: " + domOriginUrl);
              }
            });
          /* 对搜锁结果中存在的视频进行处理 */
          jQDOM
            .find('div[data-module="sc_pc"] div[rl-link-href]')
            .each((index, item) => {
              let domOriginUrl = handleItemURL.parseDOMAttrOriginUrl($(item));
              if (!Utils.isNull(domOriginUrl)) {
                item.setAttribute("href", domOriginUrl);
                item.setAttribute("rl-link-href", domOriginUrl);
                log.info("视频替换成新链接: " + domOriginUrl);
              }
            });
            
        },
        /**
         * 解析在JSON数据中的urlParams中真正的链接，如果不存在，返回undefined
         * @param {object} data 传入 {"urlParams":{...}} 中的urlParams
         * @returns {undefined|string}
         */
        parseURLParamsOriginURL(data) {
          if (data["originUrl"]) {
            return data["originUrl"];
          } else if (data["log"]) {
            /* 隐藏在log的mu中 */
            let url = undefined;
            try {
              url = JSON.parse(data["log"])["mu"];
              Utils.isNull(url) && (url = undefined);
            } catch (error) {}
            return url;
          }
        },
        /**
         * 由于部分真实链接存储在 script 标签中，得取出
         * @param {jQuery} jqNode 目标元素
         * @returns {Map}
         */
        parseScriptDOMOriginUrlMap(jqNode) {
          let urlMap = new Utils.Dictionary();
          jqNode.find("script[id^='atom-data-']").each((index, item) => {
            let json_data = JSON.parse(item.innerHTML);
            if (json_data["data"]["resultAtomData"] == null) {
              return;
            }
            let resultAtomData = json_data["data"]["resultAtomData"];
            if (
              resultAtomData["abstract"] &&
              resultAtomData["abstract"]["urlParams"] &&
              resultAtomData["abstract"]["urlParams"]["tcUrl"]
            ) {
              let url = handleItemURL.parseURLParamsOriginURL(
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
              let url = handleItemURL.parseURLParamsOriginURL(
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
                    let url = handleItemURL.parseURLParamsOriginURL(
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
                  let url = handleItemURL.parseURLParamsOriginURL(
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
         * 解析DOM节点上隐藏在属性中的真正url
         * @param {jQuery} jQDOM
         * @returns {string|undefined}
         */
        parseDOMAttrOriginUrl(jQDOM) {
          let url = null;
          let dataLog = jQDOM.attr("data-log");
          if (dataLog) {
            try {
              dataLog = JSON.parse(dataLog);
              url = dataLog.mu;
            } catch (error) {
              log.error("DOM的属性data-log不存在👇");
              log.error(error);
            }
          }
          if (Utils.isNull(url)) {
            let dataIVK = jQDOM.attr("data-ivk");
            if (dataIVK) {
              try {
                dataIVK = JSON.parse(dataIVK);
                url = dataIVK.control.default_url || dataIVK.control.dataUrl;
              } catch (error) {
                log.error("DOM的属性data-ivk不存在👇");
                log.error(error);
              }
            }
          }

          if (Utils.isNull(url)) {
            let rlLinkDataLog = jQDOM.attr("rl-link-data-log");
            if (rlLinkDataLog) {
              try {
                rlLinkDataLog = JSON.parse(rlLinkDataLog);
                if (Utils.isNull(rlLinkDataLog.mu) && rlLinkDataLog.extra) {
                  try {
                    let rlLinkDataLogExtra = JSON.parse(rlLinkDataLog.extra);
                    url = rlLinkDataLogExtra.loc || rlLinkDataLogExtra.log_loc;
                    url = decodeURIComponent(url);
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
          if (Utils.isNull(url)) {
            let articleDataLog = jQDOM
              .find("article")
              ?.attr("rl-link-data-log");
            if (articleDataLog) {
              try {
                articleDataLog = JSON.parse(articleDataLog);
                url = articleDataLog.mu;
              } catch (error) {
                log.error("article DOM的属性的rl-link-data-log不存在👇");
                log.error(jQDOM);
              }
            }
          }
          if (Utils.isNull(url)) {
            let articleLinkDataIVK = jQDOM
              .find("article")
              ?.attr("rl-link-data-ivk");
            if (articleLinkDataIVK) {
              try {
                articleLinkDataIVK = JSON.parse(articleLinkDataIVK);
                url =
                  articleLinkDataIVK.control.default_url ||
                  articleLinkDataIVK.control.dataUrl;
              } catch (error) {
                log.error("article DOM的属性rl-link-data-ivk不存在👇");
                log.error(error);
              }
            }
          }

          if (Utils.isNull(url)) {
            url = null;
            /* log.error(["未在元素节点中找到隐藏的原始URL", jQDOM]); */
          } else {
            /* 对每个中文字符进行编码 */
            let chineseArr = url.match(/[\u4e00-\u9fa5]/g);
            if (chineseArr) {
              for (var i = 0; i < chineseArr.length; i++) {
                url = url.replace(chineseArr[i], encodeURI(chineseArr[i]));
              }
            }
          }
          return url;
        },
        /**
         * 给元素添加【CSDN】下载标识
         * @param {jQuery} jQDOM
         */
        addCSDNFlag(jQDOM) {
          if (jQDOM.find(".csdn-flag-component-box").length) {
            return;
          }
          jQDOM
            .find(".c-title-text")
            ?.append(
              $(
                `<div class="csdn-flag-component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>`
              )
            );
          log.success("插入CSDN下载提示标题");
        },
        /**
         * 移除广告、推广
         */
        removeAds() {
          $(".icon-logo")?.first()?.remove(); /* 底部下一页前面图标删除 */
          $("#page-relative")?.remove(); /* 末尾 ===>>  大家都在搜  广告位 */
          $(
            ".c-recomm-wrap.new-ux-recom-wrapper.c-bg-color-white.animation"
          )?.remove(); /* 中间 ===>>  大家都在搜  广告位 */
          $("#pop-up")?.remove(); /* 跳转百度app提示 */
          $(".ec_wise_ad")?.parent()?.remove(); /* 顶部的部分商品广告 */

          $(".c-result.result").each((index, item) => {
            item = $(item);
            let dataLog = JSON.parse(
              item.attr("data-log")
            ); /* 获取属性上的LOG */
            let searchArticleOriginal_link = dataLog["mu"]; /* 真实链接 */
            if (
              searchArticleOriginal_link.match(/recommend_list.baidu.com/g) ||
              item.attr("tpl") === "recommend_list"
            ) {
              item?.remove();
              log.success("删除广告==>大家还在搜");
            }
            if (item.text().substr(0, 5) === "大家还在搜") {
              item?.remove();
              log.success("删除广告==>大家都在搜（能看到的）");
            }
            if (item.find(".c-atom-afterclick-recomm-wrap").length) {
              item.find(".c-atom-afterclick-recomm-wrap")?.remove();
              log.success("删除广告==>大家还在搜:隐藏的(点击后，跳出来的)");
            }
            let bottomLogoElement = item.find(".c-color-source"); /* 底部标识 */
            if (bottomLogoElement.length) {
              bottomLogoElement.each((_index_, _item_) => {
                if (_item_.outerText.match(/百度(APP内打开|手机助手)/)) {
                  item.remove();
                  log.success("删除广告==>百度APP内打开");
                }
              });
            }

            if (
              searchArticleOriginal_link.match(
                /^http(s|):\/\/(download.csdn.net|www.iteye.com\/resource)/g
              )
            ) {
              handleItemURL.addCSDNFlag(item);
            }
            if (
              item.attr("srcid") &&
              item.attr("srcid").match(/(sigma|vid_fourfold)/g)
            ) {
              item.remove();
              log.success("删除推荐==>xxx 相关 xxx");
            }
            if (searchArticleOriginal_link.match(/expert.baidu.com/g)) {
              item?.remove();
              log.success("删除广告==>百度健康");
            }
            if (searchArticleOriginal_link.match(/author.baidu.com\/home\//g)) {
              item?.remove();
              log.success("删除广告==>百家号聚合");
            }
            if (dataLog["ensrcid"] == "wenda_inquiry") {
              item?.remove();
              log.success("删除广告==>问一问");
            }
          });
          document.querySelectorAll("span").forEach((item) => {
            let resultParentElement = item.parentElement.parentElement;
            if (
              item.innerText.match(/百度APP内打开/) ||
              resultParentElement.getAttribute("data-from") === "etpl"
            ) {
              resultParentElement.remove();
              log.success("删除广告==>隐藏的广告，会在滚动时跳出来的");
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
              !Utils.isNull(item.getAttribute("data-sflink")) &&
              item.getAttribute("href") !== item.getAttribute("data-sflink")
            ) {
              log.success(
                "重定向顶部按钮: " + item.outerText.trim(),
                "#ba00f8"
              );
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
              log.success("删除广告==>跳转百度app提示");
            }
          });
        },
        /**
         * 替换链接
         */
        replaceLink() {
          document
            .querySelectorAll(".c-result.result")
            .forEach(async (item) => {
              item = $(item);
              let resultItemOriginURL =
                handleItemURL.parseDOMAttrOriginUrl(
                  item
                ); /* 根据已获取的真实链接取值 */
              if (Utils.isNull(resultItemOriginURL)) {
                /* 未取到值 */
                return;
              }
              let articleElement = item.find("article");
              /* 不处理没有article标签的元素 */
              if (articleElement.length === 0) {
                return;
              }
              if (
                item.attr("tpl") === "wenda_abstract" &&
                item.attr("preventClick") == null
              ) {
                /* 该item为搜索智能生成该为点击该块，获取url进行跳转 */
                item.attr("preventClick", "true");
                item.on("click", function (event) {
                  event.preventDefault();
                  let clickNode = event.target;
                  if (
                    clickNode.localName &&
                    clickNode.localName === "sup" &&
                    $(clickNode).attr("rl-type") === "stop"
                  ) {
                    return;
                  } else {
                    window.stop();
                    window.location.href = resultItemOriginURL;
                  }
                });
                return;
              }
              /* 视频 */
              if (
                resultItemOriginURL.match(
                  /http:\/\/www.internal.video.baidu.com/g
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
                  log.info(`视频链接 ${newinternalVideo}`);
                  handleItemURL.setArticleOriginUrl(item, newinternalVideo);
                  articleElement.attr("rl-link-href", newinternalVideo);
                }
              } else if (
                resultItemOriginURL.match(/http:\/\/m.baidu.com\/productcard/g)
              ) {
                log.error("该链接不予替换: " + resultItemOriginURL);
              } else {
                handleItemURL.setArticleOriginUrl(item, resultItemOriginURL);
                articleElement.attr("rl-link-href", resultItemOriginURL);
              }

              if (
                !resultItemOriginURL.match(/^http(s|):\/\/m.baidu.com\/from/g)
              ) {
                if (!GM_Menu.get("menu_showisdirect")) {
                  return;
                }
                if (item.find(".white-bdsearch-isredirecrt").length === 0) {
                  let title_text_element = item.find(".c-title-text");
                  let is_redirect_icon = document.createElement("div");
                  is_redirect_icon.className = "white-bdsearch-isredirecrt";
                  is_redirect_icon.innerHTML = "<span>重</span>";
                  title_text_element.prepend(is_redirect_icon);
                }
              }
            });
        },
      };

      /**
       * 点击输入框，输入其它文字，有提示，禁止百度篡改，且极大地增加搜索速度
       */
      function clickOtherSearchEvent() {
        var suggestList = "#se-box .suggest-content";
        var suggestBtn = "#se-box .suggest-content button";
        var suggestList_HOME = "#index-box .suggest-content";
        var suggestBtn_HOME = "#index-box .suggest-content button";
        var searchInput = "#kw";
        var searchBtn = "#se-bn";
        var searchInput_HOME = "#index-kw";
        var searchBtn_HOME = "#index-bn";
        function mutationObserverFunction(btnElement) {
          log.success("设置搜索建议自定义click事件");
          $(btnElement)?.on("click", function (event) {
            event?.stopPropagation();
            event?.preventDefault();
            window?.stop();
            let redirectURL =
              window.location.origin + "/s?word=" + $(this).text();
            log.success("点击按钮跳转搜索 -> " + $(this).text());
            log.success(redirectURL);
            window.location.href = redirectURL;
            return false;
          });
        }
        function searchBtnJump(event, searchInput) {
          var searchInputElement = $(searchInput);
          event?.stopPropagation();
          event?.preventDefault();
          window?.stop();
          let redirectURL =
            window.location.origin + "/s?word=" + searchInputElement.val();
          log.success("点击按钮跳转搜索 -> " + searchInputElement.val());
          log.success(redirectURL);
          window.location.href = redirectURL;
          return false;
        }

        function enterKeyDownEvent(event, searchInput) {
          if (event.keyCode === 108 || event.keyCode === 13) {
            var searchInputElement = $(searchInput);
            event?.stopPropagation();
            event?.preventDefault();
            window?.stop();
            let redirectURL =
              window.location.origin + "/s?word=" + searchInputElement.val();
            log.success("回车键跳转搜索 -> " + searchInputElement.val());
            log.success(redirectURL);
            window.location.href = redirectURL;
            return false;
          }
          return true;
        }
        Utils.waitNode(suggestList).then((nodeList) => {
          Utils.mutationObserver(nodeList[0], {
            callback: () => {
              mutationObserverFunction(suggestBtn);
            },
            config: { childList: true, attributes: true },
          });
        });
        Utils.waitNode(suggestList_HOME).then((nodeList) => {
          Utils.mutationObserver(nodeList[0], {
            callback: () => {
              mutationObserverFunction(suggestBtn_HOME);
            },
            config: { childList: true, attributes: true },
          });
        });

        $(searchBtn)?.on("click", function (event) {
          return searchBtnJump(event, searchInput);
        });
        $(searchBtn_HOME)?.on("click", function (event) {
          return searchBtnJump(event, searchInput_HOME);
        });
        $(searchInput)?.on("keydown", function (event) {
          return enterKeyDownEvent(event, searchInput);
        });
        $(searchInput_HOME)?.on("keydown", function (event) {
          return enterKeyDownEvent(event, searchInput_HOME);
        });
      }

      /**
       * 自动加载下一页
       */
      function autoLoadNextPage() {
        var isloding_flag = false;
        $("#page-controller").after(loadingView.getLoadingNode(true));
        loadingView.setCSS();
        $(window).on("scroll", async function () {
          let userScrollHeight = Math.ceil(
            $(window).scrollTop() + $(window).height() + 300
          );
          if (userScrollHeight >= $(document).height()) {
            if (isloding_flag == false) {
              loadingView.setVisible(true);
              isloding_flag = true;

              let next_page_url =
                $(".new-nextpage").attr("href") ||
                $(".new-nextpage-only").attr("href");
              if (!next_page_url) {
                log.info("获取不到下一页，怀疑已加载所有的搜索结果");
                isloding_flag = false;
                $(window).off("scroll");
                log.info("取消绑定scroll", "#f400ff");
                loadingView.destory();
                return;
              }
              let params_pn = new URL(next_page_url).search.match(/[0-9]+/);
              let next_page_textContent =
                params_pn.length == 0
                  ? "第 10 条"
                  : "第 " + parseInt(params_pn[0]) + " 条";
              log.info(
                `正在请求${next_page_textContent}数据: ${next_page_url}`
              );

              loadingView.setText("Loading...", true);
              let getResp = await httpx.get({
                url: next_page_url,
              });
              let respData = getResp.data;
              if (getResp.status) {
                loadingView.setVisible(false);
                let nextPageHTMLNode = $(respData.responseText);
                let scriptAtomData = $("<div></div>");
                nextPageHTMLNode.each((index, item) => {
                  if (
                    item.localName === "script" &&
                    typeof item.id === "string" &&
                    item.id.startsWith("atom-data")
                  ) {
                    scriptAtomData.append($(item));
                  }
                });
                let nextPageScriptOriginUrlMap =
                  handleItemURL.parseScriptDOMOriginUrlMap(scriptAtomData);
                log.info(["下一页的网址Map", nextPageScriptOriginUrlMap]);
                handleItemURL.originURLMap.concat(nextPageScriptOriginUrlMap);

                nextPageHTMLNode.find("style").filter(function () {
                  /* 插入vue打包的css需重新引入 */ if (
                    this.hasAttribute("data-vue-ssr-id")
                  ) {
                    let dataVueSsrId = "data-vue-ssr-id";
                    let dataVueSsrIdValue = this.getAttribute(dataVueSsrId);
                    if (
                      !document.querySelector(
                        "style[data-vue-ssr-id='" + dataVueSsrIdValue + "']"
                      )
                    ) {
                      let cssDOM = GM_addStyle(this.innerHTML);
                      cssDOM.setAttribute("data-vue-ssr-id", dataVueSsrIdValue);
                      log.info(`插入Vue的CSS id: ${dataVueSsrIdValue}`);
                    }
                  }
                });

                let search_result = nextPageHTMLNode.find(".c-result.result");
                let next_html_next_page_html =
                  nextPageHTMLNode.find("#page-controller");
                let this_page_results = $("#results");
                if (this_page_results != void 0) {
                  $.each(search_result, (i, n) => {
                    this_page_results.append(n);
                  });
                  $("#page-controller").html(next_html_next_page_html);
                } else {
                  log.info("已加载所有的搜索结果");
                  $(window).off("scroll");
                  log.info("取消绑定scroll", "#f400ff");
                }
                isloding_flag = false;
                if (GM_Menu.get("baidu_search_sync_next_page_address")) {
                  window.history.pushState("forward", null, next_page_url);
                }
              } else if (getResp.type === "onerror") {
                if (next_page_url == undefined) {
                  log.error("未获取到下一页的url");
                } else {
                  log.error("加载失败 👇");
                  log.error(respData);
                  loadingView.setText("加载失败");
                }
                isloding_flag = false;
              } else if (getResp.type === "ontimeout") {
                log.error("请求超时 👇");
                loadingView.setText("请求超时");
                isloding_flag = false;
              } else {
                log.error("未知错误");
                loadingView.setText("未知错误");
                isloding_flag = false;
              }
            } else {
              let next_page_textContent =
                $(".new-nowpage").length == 0
                  ? "第 10 条"
                  : "第 " +
                    (parseInt(
                      $(".new-nowpage")[0].textContent.match(/([0-9]+)/)
                    ) +
                      1) +
                    " 条";
              log.info(
                "百度搜索",
                `正在加载${next_page_textContent}中请稍后，请勿重复`
              );
            }
          }
        });
      }

      log.info("插入CSS规则");
      GM_addStyle(this.css.search);
      GM_Menu = new Utils.GM_Menu(
        {
          menu_autoloading: {
            text: "自动展开下一页",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          menu_showisdirect: {
            text: "显示已重定向图标",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          LOG: {
            text: "控制台输出日志",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_search_sync_next_page_address: {
            text: "同步下一页地址",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
      $(function () {
        var lock = false;
        Utils.waitNode("div#page.search-page").then((nodeList) => {
          Utils.mutationObserver(nodeList[0], {
            callback: async () => {
              if (lock) {
                return;
              }
              lock = true;
              try {
                handleItemURL.replaceLink();
              } catch (error) {
                log.error("替换为真实链接失败");
                log.error(error);
              } finally {
                setTimeout(() => {
                  lock = false;
                }, 600);
              }
            },
            config: {
              childList: true,
              subtree: true,
            },
          });
        });
        handleItemURL.originURLMap = handleItemURL.parseScriptDOMOriginUrlMap(
          $(document)
        );
        handleItemURL.removeAds();
        handleItemURL.replaceScriptBaiDuTip();
        handleItemURL.redirectTopLink();
        clickOtherSearchEvent();
        handleItemURL.replaceLink();
        if (GM_Menu.get("menu_autoloading")) {
          autoLoadNextPage();
        }
      });
    },
    /**
     * 百家号
     */
    baijiahao() {
      if (!this.current_url.match(/^http(s|):\/\/baijiahao.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.baijiahao);
      log.info("插入CSS规则");
    },
    /**
     * 百度贴吧
     */
    tieba() {
      if (!this.current_url.match(/^http(s|):\/\/tieba.baidu.com/g)) {
        return;
      }
      function tiebaLoadComments() {
        /* 贴吧加载评论 */
        const tiebaConfig = {
          /**
           * 根据dom获取需要插入的评论的html
           * @param {HTMLElement} element
           * @param {Array} user_commands_list
           * @returns
           */
          getNewCommentInnerHTML: (element, user_commands_list) => {
            let data_field = JSON.parse(element.attributes["data-field"].value);
            if (Object.keys(data_field).length == 0) {
              return;
            }
            let user_id = data_field["author"]["user_id"];
            let builderId = data_field["content"]["builderId"];

            let user_command = data_field["content"]["content"];
            let user_home_url =
              element.querySelector(".p_author_face").attributes["href"].value;
            let user_landlord_name = data_field["author"]["user_name"];
            let user_name = element.querySelector(".p_author_name");
            if (user_name) {
              user_name = user_name.textContent;
            } else {
              user_name = element.querySelector(".p_author_face > img")
                .attributes["username"].value;
            }

            let user_avator =
              element.querySelector(".p_author_face > img").attributes[
                "data-tb-lazyload"
              ] ||
              element.querySelector(".p_author_face > img").attributes["src"];
            user_avator = user_avator.value;

            let is_landlord = 0;
            if (user_id == builderId) {
              user_name =
                user_name +
                '<svg data-v-188c0e84="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>';
              is_landlord = 1;
            }
            let ele_tail_wrap = element.querySelector(".post-tail-wrap");
            let user_ip_position = ele_tail_wrap;
            let user_floor = "";
            let user_comment_time = "1970-1-1 00:00:00";
            if (ele_tail_wrap) {
              let childrenElement = $(ele_tail_wrap).find("span.tail-info");
              $(ele_tail_wrap)
                .find("span")
                .filter(function (index) {
                  if (!this.getAttribute("class")) {
                    user_ip_position = this.textContent;
                    if (user_ip_position.match("来自|禁言")) {
                      user_ip_position = "";
                    }
                    return this;
                  }
                });
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
              user_floor =
                data_field["content"]["post_no"] + "楼"; /* 评论楼层 */
              user_comment_time = data_field["content"]["date"];
              if (!user_command) {
                user_command =
                  element.querySelector(".d_post_content").innerHTML;
              }
              if (user_ip_position) {
                user_ip_position = "IP属地:" + user_ip_position;
              }
            }
            let currentTime = new Date(); /* 结束时间 */
            let timeDifference =
              currentTime.getTime() -
              new Date(
                user_comment_time.replace(/-/g, "/")
              ).getTime(); /* 时间差的毫秒数 */

            /* ------------------------------ */

            /* 计算出相差天数 */
            let days = Math.floor(timeDifference / (24 * 3600 * 1000));
            if (days > 0) {
              user_comment_time = days + "天前";
            } else {
              /* 计算出小时数 */
              let leave1 =
                timeDifference %
                (24 * 3600 * 1000); /* 计算天数后剩余的毫秒数 */
              let hours = Math.floor(leave1 / (3600 * 1000));
              if (hours > 0) {
                user_comment_time = hours + "小时前";
              } else {
                /* 计算相差分钟数 */
                let leave2 =
                  leave1 % (3600 * 1000); /* 计算小时数后剩余的毫秒数 */
                let minutes = Math.floor(leave2 / (60 * 1000));
                if (minutes > 0) {
                  user_comment_time = minutes + "分钟前";
                } else {
                  /* 计算相差秒数 */
                  let leave3 =
                    leave2 % (60 * 1000); /* 计算分钟数后剩余的毫秒数 */
                  let seconds = Math.round(leave3 / 1000);
                  user_comment_time = seconds + "秒前";
                }
              }
            }

            let post_id = data_field["content"]["post_id"];
            let new_user_commands_innerHTML = "";
            if (user_commands_list[post_id]) {
              Array.from(user_commands_list[post_id].comment_info).forEach(
                (result) => {
                  let u_user_name = result["show_nickname"];
                  let u_content = result["content"];
                  let u_user_id = result["user_id"];
                  if (builderId == u_user_id) {
                    u_user_name +=
                      '<svg data-v-5b60f30b="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>';
                  }
                  let newInnerHTML = `<div data-v-5b60f30b="" class="lzl-post-item" style="">
                    <div data-v-5b60f30b="" class="text-box">
                      <span data-v-5b60f30b="" class="link username">
                        ${u_user_name}:{" "}
                      </span>
                      <div
                        data-v-ab14b3fe=""
                        data-v-5b60f30b=""
                        class="thread-text lzl-post-text">
                        <span data-v-ab14b3fe="" class="text-content">
                          ${u_content}
                        </span>
                      </div>
                    </div>
                  </div>;
                  `;
                  new_user_commands_innerHTML += newInnerHTML;
                }
              );
            }

            if (new_user_commands_innerHTML) {
              new_user_commands_innerHTML = `
              <div data-v-5b60f30b="" data-v-74eb13e2="" class="lzl-post lzl-post" style="max-height: 2.35rem;overflow-y: auto;">
                ${new_user_commands_innerHTML}
              </div>
              `;
            }
            let new_command_innerHTML = `
              <div
                data-v-74eb13e2=""
                data-v-602e287c=""
                class="post-item"
                data-floor="${window.floor_num}"
                landlord=${is_landlord}>
                <div
                  data-v-188c0e84=""
                  data-v-74eb13e2=""
                  class="user-line-wrapper user-line-post">
                  <div data-v-188c0e84="" class="user-line">
                    <div
                      data-v-188c0e84=""
                      class="tbfe-1px-border avatar"
                      data-src="${user_avator}"
                      lazy="loaded"
                      style="background-image: url(${user_avator});"></div>
                    <div data-v-188c0e84="" class="user-info">
                      <div data-v-188c0e84="" class="username">
                        ${user_name}
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
                      ${user_command}
                    </span>
                  </p>
                  ${new_user_commands_innerHTML}
                  <div data-v-74eb13e2="" class="post-split-line"></div>
                </div>
              </div>;
              `;
            return new_command_innerHTML;
          },
          insertNewCommentInnerHTML: (_html_) => {
            /* 根据评论的html插入页面中 */
            if ($(".post-cut-guide").length) {
              $(".post-cut-guide").before(_html_);
            } else {
              $(".pb-page-wrapper").append(_html_); /* 老版帖子 */
            }
          },
          insertOnlyLZ: () => {
            /* 插入只看楼主的按钮 */
            let ele_parent = $("#replySwitch");
            let onlyLzInnerHTML = `
                        <div style="display: -webkit-box;
                            display: -webkit-flex;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-align: center;
                            -webkit-align-items: center;
                            -ms-flex-align: center;
                            align-items: center;
                            line-height: .24rem;
                            border-radius: .14rem;
                            font-size: .13rem;
                            color: #614ec2;" class="white-only-lz">只看楼主</div>`;
            ele_parent.append(onlyLzInnerHTML);
            let quxiaoonlylz_css = `
                        .white-only-lz-qx:before {
                            content: "取消";
                        }
                        .white-only-lz-none {
                            display: none;
                        }`;
            GM_addStyle(quxiaoonlylz_css);
            $(".white-only-lz").on("click", (event) => {
              tiebaConfig.displayCommand(event.currentTarget.classList);
            });
          },
          insertReverseBtn: () => {
            /* 插入 正序=倒序的按钮 */
            let ele_parent = $("#replySwitch");
            let btnHTML = `
                        <div style="display: -webkit-box;
                            display: -webkit-flex;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-align: center;
                            -webkit-align-items: center;
                            -ms-flex-align: center;
                            align-items: center;
                            line-height: .24rem;
                            border-radius: .14rem;
                            font-size: .13rem;
                            color: #614ec2;
                            width: auto;
                            margin-left: auto;
                            margin-right: 15px;" class="white-btn-comment-reverse"></div>`;
            ele_parent.append(btnHTML);
            let btnCSS = `
                        .white-btn-comment:before {
                            content: "正序";
                        }
                        .white-btn-comment-reverse:before {
                            content: "倒序";
                        }
                        .white-btn-comment-reverse-none {
                            display: none;
                        }`;
            GM_addStyle(btnCSS);
            $(".white-btn-comment-reverse").on("click", (event) => {
              $(window).off("scroll");
              $(".post-item")?.remove();
              if (
                event.currentTarget.getAttribute("class") ===
                "white-btn-comment"
              ) {
                event.currentTarget.setAttribute(
                  "class",
                  "white-btn-comment-reverse"
                );
                mainPositive();
                log.info("获取评论===>正序");
              } else {
                event.currentTarget.setAttribute("class", "white-btn-comment");
                mainReverse();
                log.info("获取评论===>倒序");
              }
            });
          },
          /**
           * 获取第一页的评论（不包括评论的评论）
           * @param {string} url
           * @returns
           */
          getPageComment: async (url) => {
            let getResp = await httpx.get({
              url: url,
              headers: {
                "User-Agent": Utils.getRandomPCUA(),
              },
            });
            let respData = getResp.data;
            if (getResp.status) {
              return $(respData.responseText);
            } else if (getResp.type === "onerror") {
              if (
                typeof respData.error === "string" &&
                respData.error.match("wappass.baidu.com")
              ) {
                let url = respData.error.match(/"(.*?)"/)[1];
                log.error("触发百度校验: " + url);
                window.location.href = url;
              } else {
                log.error("获取评论数据失败 👇");
                log.error(respData);
              }
            }
          },
          /**
           * 获取第一页的评论的评论
           * @param {string} url
           * @returns
           */
          getPageCommentList: async (url) => {
            let getResp = await httpx.get({
              url: url,
              headers: {
                Accept: "application/json, text/javascript, */*; q=0.01",
                "User-Agent": Utils.getRandomPCUA(),
              },
            });
            let respData = getResp.data;
            if (getResp.status) {
              let data = JSON.parse(respData.responseText);
              return data["data"]["comment_list"];
            } else if (getResp.type === "onerror") {
              log.error("取第一页的评论的评论数据失败 👇");
              log.error(getResp);
            }
          },
          /**
           * 自动加载下一页的评论
           */
          loadingNextCommand: () => {
            var isloding_flag = false;
            $(window).on("scroll", async function (event, isInit = false) {
              let userScrollHeight = Math.ceil(
                $(window).scrollTop() + $(window).height() + 250
              );
              if (userScrollHeight >= $(document).height() || isInit) {
                if (isloding_flag) {
                  log.info("正在请求中");
                } else {
                  isloding_flag = true;
                  loadingView.setText("Loading...", true);
                  loadingView.setVisible(true);
                  let timeStamp = Date.now();
                  let next_page_url = `https://tieba.baidu.com/p/${window.param_tid}?pn=${window.page}`;
                  let next_page_all_comment_url = `https://tieba.baidu.com/p/totalComment?t=${timeStamp}&tid=${window.param_tid}&fid=${window.param_forum_id}&pn=${window.page}&see_lz=0`;
                  log.info("请求下一页评论的url: " + next_page_url);
                  log.info(
                    "百度贴吧",
                    "贴子所有评论的url: " + next_page_all_comment_url
                  );
                  let pageHTML = await tiebaConfig.getPageComment(
                    next_page_url
                  );
                  log.info("成功获取下一页评论");
                  let user_commands_list = await tiebaConfig.getPageCommentList(
                    next_page_all_comment_url
                  );
                  log.info("成功获取下一页评论对应的数组");
                  if (!pageHTML || !user_commands_list) {
                    loadingView.setText("未知错误，请看控制台");
                    $(window).off("scroll");
                    log.success("取消绑定scroll", "#f400ff");
                    return;
                  }
                  let commands = pageHTML.find(".l_post.l_post_bright");
                  commands = Array.from(commands);
                  if (window.page == 1) {
                    /* 为第一页时，去除第一个，也就是主评论 */
                    commands.splice(0, 1);
                  }
                  commands.forEach((ele) => {
                    tiebaConfig.insertNewCommentInnerHTML(
                      tiebaConfig.getNewCommentInnerHTML(
                        ele,
                        user_commands_list
                      )
                    );
                    window.floor_num += 1;
                  });
                  if (
                    Array.from($(".white-only-lz")[0].classList).includes(
                      "white-only-lz-qx"
                    )
                  ) {
                    let lzReply = $(".post-item");
                    Array.from(lzReply).forEach((ele) => {
                      let landlord = ele.getAttribute("landlord");
                      if (landlord == "0") {
                        ele.classList.add("white-only-lz-none");
                      }
                    });
                  }
                  loadingView.setVisible(false);
                  if (window.page >= window.max_page) {
                    log.info("已加载所有的评论");
                    loadingView.setText("已加载所有的评论");
                    loadingView.setVisible(false);
                    $(window).off("scroll");
                    log.success("取消绑定scroll", "#f400ff");
                  }
                  window.page++;
                  isloding_flag = false;
                }
              }
            });
          },
          /**
           * 自动加载上一页的评论
           */
          loadingPrevCommand: () => {
            var isloding_flag = false;
            $(window).on("scroll", async function (event, isInit = false) {
              let userScrollHeight = Math.ceil(
                $(window).scrollTop() + $(window).height() + 250
              );
              if (userScrollHeight >= $(document).height() || isInit) {
                if (isloding_flag) {
                  log.info("正在请求中");
                } else {
                  isloding_flag = true;
                  loadingView.setText("Loading...", true);
                  loadingView.setVisible(true);
                  let timeStamp = Date.now();
                  let page_url = `https://tieba.baidu.com/p/${window.param_tid}?pn=${window.page}`;
                  let page_all_comment_url = `https://tieba.baidu.com/p/totalComment?t=${timeStamp}&tid=${window.param_tid}&fid=${window.param_forum_id}&pn=${window.page}&see_lz=0`;
                  log.info("请求上一页评论的url: " + page_url);
                  log.info(
                    "百度贴吧",
                    "贴子所有评论的url: " + page_all_comment_url
                  );
                  let pageHTML = await tiebaConfig.getPageComment(page_url);
                  log.info("成功获取上一页评论");
                  let user_commands_list = await tiebaConfig.getPageCommentList(
                    page_all_comment_url
                  );
                  log.info("成功获取下一页评论对应的数组");
                  if (!pageHTML || !user_commands_list) {
                    loadingView.setText("未知错误，请看控制台");
                    $(window).off("scroll");
                    log.success("取消绑定scroll", "#f400ff");
                    return;
                  }
                  let commands = pageHTML.find(".l_post.l_post_bright");
                  commands = Array.from(commands);
                  if (window.page == 1) {
                    /* 为第一页时，去除第一个，也就是主评论 */
                    commands.splice(0, 1);
                  }
                  commands.reverse();
                  commands.forEach((ele) => {
                    tiebaConfig.insertNewCommentInnerHTML(
                      tiebaConfig.getNewCommentInnerHTML(
                        ele,
                        user_commands_list,
                        true
                      )
                    );
                    window.floor_num++;
                  });
                  if (
                    Array.from($(".white-only-lz")[0].classList).includes(
                      "white-only-lz-qx"
                    )
                  ) {
                    let lzReply = $(".post-item");
                    Array.from(lzReply).forEach((ele) => {
                      let landlord = ele.getAttribute("landlord");
                      if (landlord == "0") {
                        ele.classList.add("white-only-lz-none");
                      }
                    });
                  }
                  loadingView.setVisible(false);
                  if (window.page <= 1) {
                    log.info("已加载所有的评论");
                    loadingView.setText("已加载所有的评论");
                    loadingView.setVisible(false);
                    $(window).off("scroll");
                    log.info("取消绑定scroll", "#f400ff");
                  }
                  window.page--;
                  isloding_flag = false;
                }
              }
            });
          },
          /**
           * 插入加载中的html
           */
          insertLoadingHTML: () => {
            if (!loadingView.isExists()) {
              log.info("插入loading");
              $(".main-page-wrap").append(loadingView.getLoadingNode());
              loadingView.setCSS();
            }
          },
          /**
           * 动态显示只看楼主
           * @param {*} classlist
           */
          displayCommand: (classlist) => {
            if (Array.from(classlist).includes("white-only-lz-qx")) {
              $(".white-only-lz").removeClass("white-only-lz-qx");
              let lzReply = $(".post-item");
              Array.from(lzReply).forEach((ele) => {
                ele.classList.remove("white-only-lz-none");
              });
            } else {
              $(".white-only-lz").addClass("white-only-lz-qx");
              let lzReply = $(".post-item");
              Array.from(lzReply).forEach((ele) => {
                let landlord = ele.getAttribute("landlord");
                if (landlord == "0") {
                  ele.classList.add("white-only-lz-none");
                }
              });
            }
          },
        };
        /**
         * 查看-正序
         * @returns
         */
        async function mainPositive() {
          window.param_tid = window.location.pathname.match(/([0-9]+)/g);
          if (window.param_tid) {
            window.param_tid = window.param_tid[0];
            window.param_forum_id =
              $(".recommend-item").attr("data-banner-info");
            if (window.param_forum_id) {
              window.param_forum_id = JSON.parse(window.param_forum_id)[
                "forum_id"
              ];
              let timeStamp = Date.now();
              window.page = 1;
              tiebaConfig.insertLoadingHTML();
              loadingView.setText("Loading...", true);
              loadingView.setVisible(true);
              let url = `https://tieba.baidu.com/p/totalComment?t=${timeStamp}&tid=${window.param_tid}&fid=${window.param_forum_id}&pn=${window.page}&see_lz=0`;
              let pageUrl = `https://tieba.baidu.com/p/${window.param_tid}?pn=${window.page}`;
              let pageHTML = await tiebaConfig.getPageComment(pageUrl);
              let user_commands_list = await tiebaConfig.getPageCommentList(
                url
              );
              if (!pageHTML || !user_commands_list) {
                loadingView.setText("获取评论失败");
                log.error("新评论区获取失败");
                return;
              }
              log.info("成功获取评论HTML");
              window.max_page = pageHTML.find(".jump_input_bright");
              if (window.max_page.length) {
                window.max_page = parseInt(
                  max_page[0].attributes["max-page"].value
                );
                tiebaConfig.loadingNextCommand();
                $(window).trigger("scroll", true);
                log.info("当前为多页，执行监听");
              } else {
                let commands = pageHTML.find(".l_post.l_post_bright");
                window.max_page = 1;
                commands = Array.from(commands);
                Array.from(
                  document.getElementsByClassName("post-item")
                ).forEach((ele) => {
                  ele.remove();
                });
                commands.shift();

                window.floor_num = 1;
                commands.forEach((element) => {
                  tiebaConfig.insertNewCommentInnerHTML(
                    tiebaConfig.getNewCommentInnerHTML(
                      element,
                      user_commands_list,
                      true
                    )
                  );
                  window.floor_num++;
                });
                loadingView.destory();
              }
              log.info(
                "百度贴吧",
                `共 ${window.max_page} 页评论，当前所在 ${window.page} 页`
              );
            } else {
              log.error("贴吧：获取参数data-banner-info失败");
            }
          } else {
            log.error("贴吧：未找到本页参数p");
          }
        }
        /**
         * 查看-倒序
         * @returns
         */
        async function mainReverse() {
          window.param_tid = window.location.pathname.match(/([0-9]+)/g);
          if (window.param_tid) {
            window.param_tid = window.param_tid[0];
            window.param_forum_id =
              $(".recommend-item").attr("data-banner-info");
            if (window.param_forum_id) {
              window.param_forum_id = JSON.parse(window.param_forum_id)[
                "forum_id"
              ];
              let timeStamp = Date.now();
              window.page = 1;
              tiebaConfig.insertLoadingHTML();
              loadingView.setText("Loading...", true);
              loadingView.setVisible(true);
              let url = `https://tieba.baidu.com/p/totalComment?t=${timeStamp}&tid=${window.param_tid}&fid=${window.param_forum_id}&pn=${window.page}&see_lz=0`;
              let pageUrl = `https://tieba.baidu.com/p/${window.param_tid}?pn=${window.page}`;
              let pageHTML = await tiebaConfig.getPageComment(pageUrl);
              let user_commands_list = await tiebaConfig.getPageCommentList(
                url
              );
              if (!pageHTML || !user_commands_list) {
                loadingView.setText("获取评论失败");
                log.error("新评论区获取失败");
                return;
              }
              log.info("成功获取评论HTML");
              window.max_page = pageHTML.find(".jump_input_bright");
              if (window.max_page.length) {
                window.max_page = parseInt(
                  max_page[0].attributes["max-page"].value
                );
                window.page = window.max_page;
                tiebaConfig.loadingPrevCommand();
                $(window).trigger("scroll", true);
                log.info("当前为多页，执行监听");
              } else {
                let commands = pageHTML.find(".l_post.l_post_bright");
                window.max_page = 1;
                commands = Array.from(commands);
                Array.from(
                  document.getElementsByClassName("post-item")
                ).forEach((ele) => {
                  ele.remove();
                });
                commands.shift();

                window.floor_num = 1;
                commands.reverse();
                commands.forEach((element) => {
                  tiebaConfig.insertNewCommentInnerHTML(
                    tiebaConfig.getNewCommentInnerHTML(
                      element,
                      user_commands_list,
                      true
                    )
                  );
                  window.floor_num++;
                });
                loadingView.destory();
              }
              log.info(
                "百度贴吧",
                `共 ${window.max_page} 页评论，当前所在 ${window.page} 页`
              );
            } else {
              log.error(`贴吧：获取参数data-banner-info失败`);
            }
          } else {
            log.error(`贴吧：未找到本页参数p`);
          }
        }
        let intervalNum = 0;
        let intervalMaxNum = 60;
        let interval = setInterval(() => {
          if (intervalNum >= intervalMaxNum) {
            log.error(
              `贴吧：超次数，未找到recommend-item的属性data-banner-info`
            );
            clearInterval(interval);
            return;
          }
          if ($(".recommend-item").attr("data-banner-info")) {
            $(".post-item")?.remove();
            mainPositive();
            tiebaConfig.insertReverseBtn();
            tiebaConfig.insertOnlyLZ();
            clearInterval(interval);
          }
          intervalNum++;
        }, 300);
        /* 此处是百度贴吧帖子的css，应对贴吧前端重新编译文件 */
        GM_addStyle(`
                .post-item[data-v-74eb13e2] {
                    overflow: hidden;
                    margin: .16rem .13rem 0;
                }
                .post-item .user-line-post[data-v-74eb13e2] {
                    margin-bottom: .06rem;
                }
                .user-line-wrapper[data-v-188c0e84], .user-line[data-v-188c0e84] {
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                }
                .user-line-wrapper[data-v-188c0e84] {
                    -webkit-box-pack: justify;
                    -webkit-justify-content: space-between;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                }
                .post-item .content[data-v-74eb13e2] {
                    padding-left: .44rem;
                }
                .user-line[data-v-188c0e84] {
                    -webkit-box-align: center;
                    -webkit-align-items: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-pack: left;
                    -webkit-justify-content: left;
                    -ms-flex-pack: left;
                    justify-content: left;
                }
                .user-line-wrapper[data-v-188c0e84], .user-line[data-v-188c0e84] {
                    display: -webkit-box;
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
                .user-line .user-info .username[data-v-188c0e84] {
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
                    line-height: .21rem;
                    white-space: nowrap;
                    -o-text-overflow: ellipsis;
                    text-overflow: ellipsis;
                    color: #141414;
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
                    font-size: .16rem;
                    line-height: .24rem;
                }
                .thread-text[data-v-ab14b3fe] {
                    font-size: .13rem;
                    line-height: .21rem;
                    color: #141414;
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
                    color: #141414;
                    text-align: justify;
                    word-break: break-all;
                }
                .lzl-post .lzl-post-item .text-box .link .landlord[data-v-5b60f30b] {
                    width: .28rem;
                    height: .28rem;
                    margin-left: .04rem;
                }
                .user-line .user-info .username .landlord[data-v-188c0e84] {
                    width: .28rem;
                    height: .28rem;
                    margin-left: .04rem
                }
                `);
        GM_addStyle(
          `
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
              color: #a3a1a9;
          }
          `
        );
      }
      /**
       * 注册全局贴吧图片点击预览(只预览通过贴吧上传的图片，非其它图床图片)
       */
      function registerImagePreview() {
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
          let viewerULNode = $(`<ul>${viewerULNodeHTML}</ul>`)[0];
          let viewer = new Viewer(viewerULNode, {
            inline: false,
            url: "data-src",
            zIndex: Utils.getMaxZIndex() + 100,
            hidden: () => {
              viewer.destroy();
            },
          });
          _index_ = _index_ < 0 ? 0 : _index_;
          viewer.view(_index_);
          viewer.zoomTo(1);
          viewer.show();
        }
        $(document).on("click", "img", function (event) {
          let imgNode = event.target;
          let imgSrc =
            imgNode.getAttribute("data-src") || imgNode.getAttribute("src");
          if (
            imgNode.parentElement.getAttribute("data-viewer-action") === "view"
          ) {
            return;
          }
          if (
            imgSrc &&
            imgSrc.match(/^http(s|):\/\/tiebapic.baidu.com\/forum/g)
          ) {
            log.info(`点击图片👇`);
            log.info(imgNode);
            if (imgNode.parentElement.className === "img-box") {
              /* 帖子主体内的图片 */
              let parentMain = Utils.findParentNode(imgNode, (node) => {
                return node.className === "img-sudoku main-img-sudoku";
              });
              log.info(parentMain);
              if (!parentMain) {
                viewIMG([imgSrc]);
                return;
              }
              let lazyImgList = [];
              parentMain.querySelectorAll("img.img").forEach((item) => {
                let _imgSrc_ =
                  item.getAttribute("data-src") || item.getAttribute("src");
                log.info(`获取图片: ${_imgSrc_}`);
                lazyImgList = [...lazyImgList, _imgSrc_];
              });
              log.info("图片列表👇");
              log.info(lazyImgList);
              viewIMG(lazyImgList, lazyImgList.indexOf(imgSrc));
            } else if (imgNode.parentElement.className === "text-content") {
              /* 评论区内的图片 */
              let parentMain = imgNode.parentElement;
              let lazyImgList = [];
              log.info(parentMain);
              parentMain.querySelectorAll("img.BDE_Image").forEach((item) => {
                let _imgSrc_ =
                  item.getAttribute("data-src") || item.getAttribute("src");
                log.info(`获取图片: ${_imgSrc_}`);
                lazyImgList = [...lazyImgList, _imgSrc_];
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
      }
      /**
       * 重定向跳转
       */
      function redirectJump() {
        log.info("话题热榜-阻止默认跳转");
        $(document).on("click", ".topic-share-item", function (event) {
          event?.stopPropagation();
          event?.preventDefault();
          window?.stop();
          let clickNode = $(this);
          let dataTrack = clickNode.attr("data-track");
          if (dataTrack == null) {
            log.error("未找到data-track");
            log.error(clickNode);
            return false;
          }
          dataTrack = JSON.parse(dataTrack);
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
        Utils.waitNode(".thread-bottom .forum").then((nodeList) => {
          log.success("设置贴吧种类正确跳转");
          log.success(nodeList);
          nodeList.forEach((item) => {
            item.ontouchstart = function (event) {
              event?.stopPropagation();
              event?.preventDefault();
              window?.stop();
              window.location.href = `https://tieba.baidu.com/f?kw=${$(this)
                .text()
                .trim()
                .replace(/吧$/g, "")}`;
              return false;
            };
          });
        });
        Utils.waitNode(".topic-share-thread .list-content").then((nodeList) => {
          Utils.mutationObserver(nodeList[0], {
            callback: (mutations) => {
              mutations.forEach((item) => {
                item.addedNodes.forEach((item2) => {
                  if (
                    typeof item2.className === "string" &&
                    item2.className.indexOf("topic-share-item") != -1
                  ) {
                    log.success("设置新增的帖子的贴吧种类正确跳转");
                    log.success(item2);
                    item2.querySelector(".thread-bottom .forum").ontouchstart =
                      function (event) {
                        event?.stopPropagation();
                        event?.preventDefault();
                        window?.stop();
                        window.location.href = `https://tieba.baidu.com/f?kw=${$(
                          this
                        )
                          .text()
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

        $(document).on(
          "touchstart",
          ".topic-share-item .forum",
          function (event) {
            event?.stopPropagation();
            event?.preventDefault();
            return false;
          }
        );
      }
      GM_addStyle(this.css.tieba);
      log.info("插入CSS规则");
      if (this.current_url.match(/^http(s|):\/\/tieba.baidu.com\/p\//g)) {
        tiebaLoadComments();
        registerImagePreview();
      }
      if (
        this.current_url.match(
          /^http(s|):\/\/tieba.baidu.com\/mo\/q\/newtopic\/topicTemplate/g
        )
      ) {
        redirectJump();
      }
    },
    /**
     * 百度文库
     */
    wenku() {
      if (!this.current_url.match(/^http(s|):\/\/(wk|tanbi).baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.wenku);
      log.info("插入CSS规则");
      GM_Menu = new Utils.GM_Menu(
        {
          baidu_wenku_block_member_picks: {
            text: "屏蔽会员精选",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_wenku_blocking_app_featured: {
            text: "屏蔽APP精选",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_wenku_blocking_related_documents: {
            text: "屏蔽相关文档",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_wenku_blocking_bottom_toolbar: {
            text: "屏蔽底部工具栏",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_wenku_shield_next_btn: {
            text: "屏蔽下一篇按钮",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
      /* 屏蔽会员精选 */
      if (GM_Menu.get("baidu_wenku_block_member_picks")) {
        GM_addStyle(`
          div[class*="vip-choice_"][data-ait-action="vipChoiceShow"]{
            display: none !important;
          }`);
      }
      /* 屏蔽APP精选 */
      if (GM_Menu.get("baidu_wenku_blocking_app_featured")) {
        GM_addStyle(`
          div[class*="app-choice_"][data-ait-action="appChoiceNewShow"],
          div.folder-wrap.invite-clipboard[data-clipboard-text]{
            display: none !important;
          }`);
      }
      /* 屏蔽相关文档 */
      if (GM_Menu.get("baidu_wenku_blocking_related_documents")) {
        GM_addStyle(`
          div.fold-page-conversion,
          div.newrecom-list.invite-clipboard[data-clipboard-text]{
            display: none !important;
          }`);
      }
      /* 屏蔽底部工具栏 */
      if (GM_Menu.get("baidu_wenku_blocking_bottom_toolbar")) {
        GM_addStyle(`
          div.barbottom{
            display: none !important;
          }`);
      }
      /* 屏蔽下一篇按钮 */
      if (GM_Menu.get("baidu_wenku_shield_next_btn")) {
        GM_addStyle(`
          div.next-page-container{
            display: none !important;
          }`);
      }
    },
    /**
     * 百度经验
     */
    jingyan() {
      if (!this.current_url.match(/^http(s|):\/\/jingyan.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.jingyan);
      log.info("插入CSS规则");
    },
    /**
     * 百度百科
     */
    baike() {
      if (!this.current_url.match(/^http(s|):\/\/baike.baidu.com/g)) {
        return;
      }
      let page = 1;
      GM_addStyle(this.css.baike);
      log.info("插入CSS规则");
      GM_Menu = new Utils.GM_Menu(
        {
          baidu_baike_sync_next_page_address: {
            text: "同步下一页地址",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );

      /**
       * 获取到的图片大小要重新设置
       */
      function setImageWidthHeight() {
        document.querySelectorAll(".col-para").forEach((item) => {
          item.setAttribute("style", "width: 42.936vw;margin: 0 auto;");
          let content_img_item = item.querySelector(".content-img-item");
          let content_img_link = item.querySelector(".content-img-link");
          let content_album = item.querySelector(".content-album");
          content_album?.setAttribute("style", "");
          if (content_album) {
            content_img_item = item.querySelector(".content-album-item");
            content_img_link = item.querySelector(".content-album-link");
          }
          content_img_item?.setAttribute(
            "style",
            "max-height: 39vw;max-width: 30vw;border-radius: 0.09rem;margin: 0 auto;overflow: hidden;"
          );
          content_img_link?.setAttribute("style", "width: 30vw;");
        });
      }

      /**
       * 获取到的要重新将图片链接插入到img标签中
       */
      function insertUrlToImageNode() {
        document.querySelectorAll(".lazy-img").forEach((item) => {
          item = $(item);
          let content_img = $(item.parent().parent().parent());
          let img_url = content_img.attr("data-src")
            ? content_img.attr("data-src")
            : item.attr("data-url");
          if (img_url != null) {
            item.innerHTML = `<img src="${img_url}"></img>`;
          }
        });
      }
      /**
       * 循环加载更多内容
       */
      function loadMore() {
        Utils.waitNode(".BK-main-content", "#J-gotoPC-top").then(async () => {
          let nextTargetNode = document.querySelector("#J-gotoPC-top");
          let nextUrl = nextTargetNode.href;
          let nextUrlObj = new URL(nextUrl);
          let itemId = nextUrlObj.pathname.match(
            new RegExp("/item/.+?/([0-9]+)", "i")
          );
          if (!itemId) {
            log.error(nextUrl);
            log.error("匹配id失败");
            return;
          }
          loadingView.setCSS();
          $(".BK-main-content").after(loadingView.getLoadingNode());
          while (1) {
            loadingView.setVisible(true);
            let nextPageUrl = `https://baike.baidu.com${
              nextUrlObj.pathname
            }?wpf=3&ldr=1&page=${page}&insf=1&_=${new Date().getTime()}`;
            log.info(nextPageUrl);
            let getResp = await httpx.get({
              url: nextPageUrl,
              headers: {
                "User-Agent":
                  "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/112.0.0.0",
              },
            });
            let respData = getResp.data;
            if (getResp.status) {
              let respObj = $(respData.responseText);
              let main_content = respObj.find(".BK-main-content");
              let nextPageContent = main_content.prevObject[0].innerHTML.trim();
              if (nextPageContent === `<a name="u0"></a>`) {
                log.info("已到达最大页" + (page - 1));
                insertUrlToImageNode();
                setImageWidthHeight();
                loadingView.setText("已到达最大页" + (page - 1));
                break;
              } else {
                loadingView.setText("正在加载页 " + page, true);
                log.info(nextPageContent);
                $(".BK-main-content").append($(nextPageContent));
                await Utils.sleep(350);
              }
              if (GM_Menu.get("baidu_baike_sync_next_page_address")) {
                window.history.pushState("forward", null, respData.finalUrll);
              }
              page++;
            } else if (getResp.type === "onerror") {
              log.error("请求失败 👇");
              log.error(respData);
              insertUrlToImageNode();
              setImageWidthHeight();
              loadingView.setText("请求失败");
              loadingView.setIconVisible(false);
              break;
            } else if (getResp.type === "ontimeout") {
              log.error("请求超时 👇");
              insertUrlToImageNode();
              setImageWidthHeight();
              loadingView.setText("请求超时");
              loadingView.setIconVisible(false);
              break;
            } else {
              log.error("未知错误");
              insertUrlToImageNode();
              setImageWidthHeight();
              loadingView.setText("未知错误");
              loadingView.setIconVisible(false);
              break;
            }
          }
        });
      }
      loadMore();
    },
    /**
     * 百度百科-他说
     */
    baiketashuo() {
      if (!this.current_url.match(/^http(s|):\/\/baike.baidu.com\/tashuo/g)) {
        return;
      }
      /**
       * 去除底部广告
       */
      function remove_bottom_ad() {
        Utils.waitNode("#index_tashuo_list").then(() => {
          Utils.mutationObserver(document.querySelector("#index_tashuo_list"), {
            callback: (mutations, observer) => {
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
          });
        });
      }
      remove_bottom_ad();
    },
    /**
     * 百度知道
     */
    zhidao() {
      if (!this.current_url.match(/^http(s|):\/\/zhidao.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.zhidao);
      log.info("插入CSS规则");
      $(".ec-ad")?.parent()?.remove();
      GM_Menu = new Utils.GM_Menu(
        {
          baidu_zhidao_block_recommend_more_exciting_content: {
            text: "屏蔽-推荐更多精彩内容",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_zhidao_block_other_answers: {
            text: "屏蔽-其他回答",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_fanyi_auto_focus: {
            text: "自动点击-展开更多回答",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
      if (GM_Menu.get("baidu_zhidao_block_recommend_more_exciting_content")) {
        GM_addStyle(`
          .feed-recommend-title,
          #feed-recommend,
          .mm-content-box.mm-content-line.feed-recommend{
            display: none !important;
          }`);
      }
      if (GM_Menu.get("baidu_zhidao_block_other_answers")) {
        GM_addStyle(`
          .replies-container + div{
            display: none !important;
          }`);
      }
    },
    /**
     * 百度翻译
     */
    fanyi() {
      if (!this.current_url.match(/^http(s|):\/\/fanyi.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.fanyi);
      log.info("插入CSS规则");
      GM_Menu = new Utils.GM_Menu(
        {
          baidu_fanyi_recommended_shielding_bottom: {
            text: "屏蔽底部推荐",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_fanyi_auto_focus: {
            text: "自动聚焦",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
      if (GM_Menu.get("baidu_fanyi_recommended_shielding_bottom")) {
        GM_addStyle(`
        section.article.android-style{
          display: none !important;
        }`);
      }
      if (GM_Menu.get("baidu_fanyi_auto_focus")) {
        Utils.waitNode("textarea#j-textarea").then(() => {
          setTimeout(() => {
            document.querySelector("textarea#j-textarea").focus();
          }, 2500);
        });
      }
    },
    /**
     * 百度翻译-APP
     */
    fanyiApp() {
      if (!this.current_url.match(/^http(s|):\/\/fanyi-app.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.fanyiapp);
      Utils.waitNode("#page-content").then(() => {
        $("#page-content")?.attr("style", "max-height:unset !important");
      });
      log.info("插入CSS规则");
    },
    /**
     * 百度图片
     */
    image() {
      if (!this.current_url.match(/^http(s|):\/\/image.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.image);
      log.info("插入CSS规则");
    },
    /**
     * 百度地图
     */
    map() {
      if (!this.current_url.match(/^http(s|):\/\/map.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.map);
      log.info("插入CSS规则");
    },
    /**
     * 百度知道
     */
    mbd() {
      if (!this.current_url.match(/^http(s|):\/\/mbd.baidu.com/g)) {
        return;
      }
      /* 
        示例
        https://mbd.baidu.com/newspage/data/landingsuper?p_from=7&n_type=-1&context=%7B%22nid%22%3A%22news_10287525329342817547%22%7D
        */
      GM_addStyle(this.css.mbd);
      log.info("插入CSS规则");
    },
    /**
     * 百度知了好学
     */
    xue() {
      if (!this.current_url.match(/^http(s|):\/\/xue.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.xue);
      log.info("插入CSS规则");
    },
    /**
     * 百度-爱企查
     */
    aiqicha() {
      if (!this.current_url.match(/^http(s|):\/\/aiqicha.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.aiqicha);
      log.info("插入CSS规则");
      unsafeWindow.localStorage.setItem(
        "coupon_bottom_popup",
        new Date().getTime()
      );
      GM_Menu = new Utils.GM_Menu(
        {
          baidu_aiqicha_shidld_carousel: {
            text: "屏蔽轮播图",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_aiqicha_shidld_industry_host_news: {
            text: "屏蔽行业热点新闻",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
      /**
       * 屏蔽轮播图
       */
      if (GM_Menu.get("baidu_aiqicha_shidld_carousel")) {
        GM_addStyle(`
        div.index-banner-container.van-swipe{
          display: none !important;
        }`);
      }
      /**
       * 屏蔽行业热点新闻
       */
      if (GM_Menu.get("baidu_aiqicha_shidld_industry_host_news")) {
        GM_addStyle(`
        div.hot-news{
          display: none !important;
        }`);
      }
    },
    /**
     * 百度网盟推广
     */
    pos() {
      if (!this.current_url.match(/^http(s|):\/\/pos.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.pos);
      log.info("插入CSS规则");
    },
    /**
     * 百度好看视频
     */
    haokan(){
      if (!this.current_url.match(/^http(s|):\/\/haokan.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.haokan);
      log.info("插入CSS规则");
      GM_Menu = new Utils.GM_Menu(
        {
          baidu_haokan_shidld_may_also_like: {
            text: "屏蔽猜你喜欢",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          }
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
      if(GM_Menu.get("baidu_haokan_shidld_may_also_like")){
        GM_addStyle(`
        div.top-video-list-container{display: none !important};
        `);
      }
    }
  };

  GM_addStyle(CSDN_FLAG_CSS);
  baidu.init();
})();
