// ==UserScript==
// @name         【移动端】-百度系优化
// @icon         https://www.baidu.com/favicon.ico
// @namespace    https://greasyfork.org/zh-CN/scripts/418349-移动端-百度系优化
// @supportURL   https://greasyfork.org/zh-CN/scripts/418349-移动端-百度系优化/feedback
// @version      0.6.7
// @author       WhiteSevs
// @description  用于【移动端】的百度系列产品优化，包括【百度搜索】、【百家号】、【百度贴吧】、【百度文库】、【百度经验】、【百度百科】、【百度知道】、【百度翻译】、【百度图片】、【百度地图】
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
// @require	     https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @require      https://greasyfork.org/scripts/449471-viewer/code/Viewer.js?version=1081056
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1149608
// @run-at       document-start
// ==/UserScript==

https: (function () {
	"use strict";
	const LOG = GM_getValue("LOG", false);
	var __console__ = {};
	__console__.log = function () {
		if (!LOG) {
			return;
		}
		console.log.apply(console, arguments);
	};
	const CSDN_FLAG_CSS = `标识
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

	var LoadingView = function () {
		this.html =
			'<div class="page-isloading whitesev-page-isloading" style="margin: 0.08rem;background: #fff;height: 45px;font-size: 15px;display: flex;text-align: center;align-items: center;width: inherit;justify-content: center;border-radius: 0.12rem;">' +
			'<span class="whitesev-isloading-text" style="">Loading...</span>' +
			"</div>";
		this.iconHTML =
			'<div class="whitesev-isloading-icon" style="margin:0px 0px 28px 15px;">' +
			'<div id="whitesev-isloading-outside"></div>' +
			'<div id="whitesev-isloading-within"></div>' +
			"</div>";
		this.setVisible = function (_value_) {
			/* 修改 提示的显示状态 */
			$(".page-isloading")?.css("display", _value_ ? "flex" : "none");
		};
		this.setIconVisible = function (_value_) {
			/* 修改正在加载中图标的状态 */
			$(".whitesev-isloading-icon")?.css("display", _value_ ? "unset" : "none");
		};
		this.setText = function (_value_) {
			/* 设置加载的文本 */
			$(".whitesev-isloading-text")?.html("<span>" + _value_ + "</span>");
		};
		this.setTextWithLoadIcon = function (_value_) {
			/* 设置加载的文本-外加加载图标 */
			$(".whitesev-isloading-text")?.html("<span>" + _value_ + "</span>");
			$(".whitesev-isloading-icon")?.remove();
			$(".whitesev-isloading-text")?.after(this.iconHTML);
			$(".whitesev-isloading-icon")?.css("display", "unset");
		};
		this.setHTML = function (_value_) {
			/* 设置加载的HTML */
			$(".whitesev-isloading-text")?.html("<span>" + _value_ + "</span>");
			if (!$(".whitesev-isloading-icon").length) {
				$(".page-isloading")?.append(this.iconHTML);
			}
			$(".whitesev-isloading-icon")?.css("display", "none");
		};
		this.setCSS = function () {
			/* 设置CSS */
			GM_addStyle(`
            #whitesev-isloading-outside,
            #whitesev-isloading-within{
                position: absolute;
                margin-left: 140px;
            }
            #whitesev-isloading-outside {
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
                -ms-animation: spinPulse 1s infinite ease-in-out
            }
            #whitesev-isloading-within {
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
                -ms-animation: spinoffPulse 3s infinite linear
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
		};
		this.destory = function () {
			/* 销毁 */
			$(".page-isloading")?.remove();
		};
		this.exists = function () {
			/* 判断是否已加载 */
			return $(".whitesev-page-isloading").length == 0 ? false : true;
		};
		this.iconExists = function () {
			/* 判断图标是否存在 */
			return $(".whitesev-isloading-icon").length == 0 ? false : true;
		};
		this.textExists = function () {
			/* 判断带图标的文本是否存在 */
			return $(".whitesev-isloading-text").length == 0 ? false : true;
		};
	};

	var loadingView = new LoadingView();

	var baidu = {
		current_url: window.location.href,
		init() {
			this.search();
			this.baijiahao();
			this.tieba();
			this.wenku();
			this.jingyan();
			this.baike();
			this.baiketashuo();
			this.zhidao();
			this.fanyi();
			this.image();
			this.map();
			this.xue();
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
                div[class*='rec-wrapper__']{
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
                .open-app{
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
                #app,
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
                .vip-rec-card-main{
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
								.inner.clearfix{
                  display:none !important;
                }
                .new-header-dl.{
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
                .index-widget-guidebanner{
                  display:none !important;
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
		},
		search() {
			/* 百度搜索 */
			function replaceLink() {
				/* 替换链接 */
				function setNodeAttrHref(jQDOM, url) {
					/* 为元素设置真实链接 */
					jQDOM.find("a").each((index, item) => {
						let newUrl = realLink.has(item.href)
							? realLink.get(item.href)
							: url;
						let aTagDataIvk = item.getAttribute("data-ivk");
						if (
							aTagDataIvk !== "" &&
							aTagDataIvk != null &&
							aTagDataIvk !== "{}"
						) {
							try {
								aTagDataIvk = JSON.parse(aTagDataIvk);
								if (aTagDataIvk["control"] != null) {
									newUrl = aTagDataIvk["control"]["default_url"]
										? aTagDataIvk["control"]["default_url"]
										: aTagDataIvk["control"]["dataUrl"];
									/* __console__.log(
										"%c[BaiDu优化%c-%c百度搜索%c]%c A标签上存在隐藏的url: %s",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:0",
										url
									); */
								}
							} catch (error) {
								__console__.log(error);
								/* __console__.log(
									"%c[BaiDu优化%c-%c百度搜索%c]%c A标签上存在隐藏的url，但是替换失败",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:darkorange",
									"font-weight:bold;color:cornflowerblue",
									"color:red"
								); */
							}
						}
						if (
							newUrl === item.href ||
							newUrl == null ||
							newUrl === "undefined"
						) {
							return;
						}
						item.href = newUrl;
						/* __console__.log(
							"%c[BaiDu优化%c-%c百度搜索%c]%c 替换成新链接: %s",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:darkorange",
							"font-weight:bold;color:cornflowerblue",
							"color:0",
							url
						); */
					});
				}

				function getRealLinkJSON() {
					/*  由于部分真实链接存储在 script 标签中，得取出 */
					let data = new Utils.Dictionary();
					$("script[id^='atom-data-']").each((index, item) => {
						let json_data = JSON.parse(item.innerHTML);
						if (json_data["data"]["resultAtomData"] == null) {
							return;
						}
						json_data = json_data["data"]["resultAtomData"];
						let site = json_data["content"]["site"];
						if (site == null) {
							return;
						}
						site["list"].forEach((item) => {
							data.set(
								item["urlParams"]["tcUrl"],
								item["urlParams"]["originUrl"]
							);
						});
					});
					return data;
				}

				function parseDOMAttrOriginUrl(jQDOM) {
					/* 解析DOM节点上隐藏在属性中的真正url */
					let url = null;
					let dataLog = jQDOM.attr("data-log");
					try {
						dataLog = JSON.parse(dataLog);
						url = dataLog.mu;
					} catch (error) {
						__console__.log(
							"%c[BaiDu优化%c-%c百度搜索%c]%c DOM的属性data-log不存在👇",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:darkorange",
							"font-weight:bold;color:cornflowerblue",
							"color:red"
						);
					}
					if (!url || url === "") {
						let articleDataLog = jQDOM
							.find("article")
							?.attr("rl-link-data-log");
						if (articleDataLog) {
							try {
								articleDataLog = JSON.parse(articleDataLog);
								url = articleDataLog.mu;
							} catch (error) {
								__console__.log(
									"%c[BaiDu优化%c-%c百度搜索%c]%c article DOM的属性的rl-link-data-log也不存在👇，获取真实链接失败",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:darkorange",
									"font-weight:bold;color:cornflowerblue",
									"color:red"
								);
								__console__.log(jQDOM);
							}
						} else {
							__console__.log(
								"%c[BaiDu优化%c-%c百度搜索%c]%c article DOM不存在",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:red"
							);
						}
					}

					if (!url || url === "") {
						let dataIVK = jQDOM.attr("data-ivk");
						try {
							dataLog = JSON.parse(dataIVK);
							url = dataLog.control.default_url;
						} catch (error) {
							__console__.log(
								"%c[BaiDu优化%c-%c百度搜索%c]%c DOM的属性data-ivk不存在👇",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:red"
							);
						}
					}
					if (url !== "" || url != null) {
						url = decodeURIComponent(url);
					} else {
						url = null;
					}
					return url;
				}

				function addCSDNFlag(jQDOM) {
					/* 添加标识CSDN标签 */
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
					__console__.log(
						"%c[BaiDu优化%c-%c百度搜索%c]%c 插入CSDN下载提示标题",
						"font-weight:bold;color:cornflowerblue",
						"font-weight:bold;color:cornflowerblue",
						"font-weight:bold;color:darkorange",
						"font-weight:bold;color:cornflowerblue",
						"color:blue"
					);
				}

				function removeAds() {
					/* 移除广告、推广 */
					$(".icon-logo")?.first().remove(); /* 底部下一页前面图标删除 */
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
							__console__.log(
								"%c[BaiDu优化%c-%c百度搜索%c]%c 删除广告==>大家还在搜",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:blue"
							);
						}
						if (item.text().substr(0, 5) == "大家还在搜") {
							item?.remove();
							__console__.log(
								"%c[BaiDu优化%c-%c百度搜索%c]%c 删除广告==>大家都在搜:显示出来的",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:blue"
							);
						}
						if (item.find(".c-atom-afterclick-recomm-wrap").length) {
							item.find(".c-atom-afterclick-recomm-wrap")?.remove();
							__console__.log(
								"%c[BaiDu优化%c-%c百度搜索%c]%c 删除广告==>大家还在搜:隐藏的(点击后，跳出来的)",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:blue"
							);
						}
						let bottomLogoElement = item.find(".c-color-source"); /* 底部标识 */
						if (bottomLogoElement.length) {
							bottomLogoElement.each((_index_, _item_) => {
								if (_item_.outerText.match(/百度(APP内打开|手机助手)/)) {
									item.remove();
									__console__.log(
										"%c[BaiDu优化%c-%c百度搜索%c]%c 删除广告==>百度APP内打开",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:blue"
									);
								}
							});
						}

						if (
							searchArticleOriginal_link.match(
								/http(s|):\/\/(download.csdn.net|www.iteye.com\/resource)/g
							)
						) {
							addCSDNFlag(item);
						}
						if (
							item.attr("srcid") &&
							item.attr("srcid").match(/(sigma|vid_fourfold)/g)
						) {
							item.remove();
							__console__.log(
								"%c[BaiDu优化%c-%c百度搜索%c]%c 删除推荐==>xxx 相关 xxx",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:blue"
							);
						}
						if (searchArticleOriginal_link.match(/expert.baidu.com/g)) {
							item?.remove();
							__console__.log(
								"%c[BaiDu优化%c-%c百度搜索%c]%c 删除广告==>百度健康",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:blue"
							);
						}
						if (searchArticleOriginal_link.match(/author.baidu.com\/home\//g)) {
							item?.remove();
							__console__.log(
								"%c[BaiDu优化%c-%c百度搜索%c]%c 删除广告==>百家号聚合",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:blue"
							);
						}
						if (dataLog["ensrcid"] == "wenda_inquiry") {
							item?.remove();
							__console__.log(
								"%c[BaiDu优化%c-%c百度搜索%c]%c 删除广告==>问一问",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:blue"
							);
						}
					});
					$("span").each((index, item) => {
						item = $(item);
						let resultParentElement = item.parent().parent();
						if (
							item.text().match(/百度APP内打开/) ||
							resultParentElement.attr("data-from") === "etpl"
						) {
							resultParentElement?.remove();
							__console__.log(
								"%c[BaiDu优化%c-%c百度搜索%c]%c 删除广告==>隐藏的广告，会跳出来的",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:blue"
							);
						}
					});
				}

				function replaceLink() {
					/* 替换链接 */
					$(".c-result.result").each((index, item) => {
						item = $(item);
						let realLinkUrl =
							parseDOMAttrOriginUrl(item); /* 根据已获取的真实链接取值 */
						if (!realLinkUrl) {
							/* 未取到值 */
							return;
						}
						let articleElement = item.find("article");
						if (articleElement.length === 0) {
							return;
						}

						if (realLinkUrl.match(/http:\/\/www.internal.video.baidu.com/g)) {
							let internalVideo = decodeURIComponent(
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
								setNodeAttrHref(item, newinternalVideo);
								articleElement.attr("rl-link-href", newinternalVideo);
							}
						} else if (
							realLinkUrl.match(/http:\/\/m.baidu.com\/productcard/g)
						) {
							__console__.log(
								"%c[BaiDu优化%c-%c百度搜索%c]%c 该链接不予替换: %s",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:red",
								realLinkUrl
							);
						} else {
							setNodeAttrHref(item, realLinkUrl);
							articleElement.attr("rl-link-href", realLinkUrl);
						}

						if (!realLinkUrl.match(/http(s|):\/\/m.baidu.com\/from/g)) {
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
				}

				let realLink = getRealLinkJSON();
				removeAds();
				replaceLink();
			}

			function redirectTopLink() {
				/* 重定向顶部的链接，如全部、视频、图片、贴吧、咨询... */
				document.querySelectorAll(".se-head-tablink a").forEach((item) => {
					if (
						item.hasAttribute("data-sflink") &&
						item.getAttribute("href") != item.getAttribute("data-sflink")
					) {
						__console__.log(
							"%c[BaiDu优化%c-%c百度搜索%c]%c %s",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:darkorange",
							"font-weight:bold;color:cornflowerblue",
							"color:#ba00f8",
							"重定向顶部按钮: " + item.outerText.trim()
						);
						item.href = item.getAttribute("data-sflink");
					}
				});
			}

			function replaceScriptBaiDuTip() {
				/* 删除script标签中的百度APP提示 */
				$("script").each((index, item) => {
					if (item.text.match(/define\(\"@molecule\/aftclk\/index\",/g)) {
						item?.remove();
						__console__.log(
							"%c[BaiDu优化%c-%c百度搜索%c]%c 删除跳转百度app提示js==>",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:darkorange",
							"font-weight:bold;color:cornflowerblue",
							"color:blue"
						);
					}
				});
			}

			function clickOtherSearchEvent() {
				/* 点击输入框，输入其它文字，有提示，禁止百度篡改，且极大地增加搜索速度 */
				var suggestList = "#se-box .suggest-content";
				var suggestBtn = "#se-box .suggest-content button";
				var suggestList_HOME = "#index-box .suggest-content";
				var suggestBtn_HOME = "#index-box .suggest-content button";
				var searchInput = "#kw";
				var searchBtn = "#se-bn";
				var searchInput_HOME = "#index-kw";
				var searchBtn_HOME = "#index-bn";
				function mutationObserverFunction(btnElement) {
					$(btnElement)?.on("click", function (e) {
						e?.stopPropagation();
						e?.preventDefault();
						__console__.log("点击按钮跳转搜索 -> " + $(this).text());
						__console__.log(
							window.location.origin + "/s?word=" + $(this).text()
						);
						window.location.href =
							window.location.origin + "/s?word=" + $(this).text();
						return false;
					});
				}
				function searchBtnJump(e, searchInput) {
					var searchInputElement = $(searchInput);
					e?.stopPropagation();
					e?.preventDefault();
					__console__.log("点击按钮跳转搜索 -> " + searchInputElement.val());
					__console__.log(
						window.location.origin + "/s?word=" + searchInputElement.val()
					);
					window.location.href =
						window.location.origin + "/s?word=" + searchInputElement.val();
					return false;
				}

				function enterKeyDownEvent(e, searchInput) {
					if (e.keyCode === 108 || e.keyCode === 13) {
						var searchInputElement = $(searchInput);
						e?.stopPropagation();
						e?.preventDefault();
						__console__.log("回车键跳转搜索 -> " + searchInputElement.val());
						__console__.log(
							window.location.origin + "/s?word=" + searchInputElement.val()
						);
						window.location.href =
							window.location.origin + "/s?word=" + searchInputElement.val();
						return false;
					}
					return true;
				}
				Utils.mutationObserver(suggestList, {
					fn: () => {
						mutationObserverFunction(suggestBtn);
					},
					config: { childList: true, attributes: true },
				});
				Utils.mutationObserver(suggestList_HOME, {
					fn: () => {
						mutationObserverFunction(suggestBtn_HOME);
					},
					config: { childList: true, attributes: true },
				});

				$(searchBtn)?.on("click", function (e) {
					return searchBtnJump(e, searchInput);
				});
				$(searchBtn_HOME)?.on("click", function (e) {
					return searchBtnJump(e, searchInput_HOME);
				});
				$(searchInput)?.on("keydown", function (e) {
					return enterKeyDownEvent(e, searchInput);
				});
				$(searchInput_HOME)?.on("keydown", function (e) {
					return enterKeyDownEvent(e, searchInput_HOME);
				});
			}

			if (this.current_url.match(/http(s|):\/\/(m|www).baidu.com/g)) {
				__console__.log(
					"%c[BaiDu优化%c-%c百度搜索%c]%c %s",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:darkorange",
					"font-weight:bold;color:cornflowerblue",
					"color:0",
					"插入CSS规则"
				);
				GM_addStyle(this.css.search);
				$(function () {
					var lock = false;
					Utils.mutationObserver($(".search-page"), {
						fn: async () => {
							if (lock) {
								return;
							}
							lock = true;
							try {
								replaceLink();
							} catch (error) {
								__console__.log(error);
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
					replaceScriptBaiDuTip();
					redirectTopLink();
					clickOtherSearchEvent();
					if (GM_Menu.get("menu_autoloading")) {
						autoLoadNextPage();
					}
				});
			}
			if (
				this.current_url.match(/^http(s|):\/\/(m|www).baidu.com\/$/g) ||
				this.current_url.match(/^http(s|):\/\/(m|www).baidu.com\/\?ref=/g) ||
				this.current_url.match(/^http(s|):\/\/(m|www).baidu.com\/\?tn=/g)
			) {
				GM_addStyle(this.css.searchHome);
				__console__.log(
					"%c[BaiDu优化%c-%c百度搜索%c]%c %s",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:darkorange",
					"font-weight:bold;color:cornflowerblue",
					"color:0",
					"插入CSS规则-主页"
				);
			}
		},
		baijiahao() {
			/* 百家号 */
			if (this.current_url.match(/http(s|):\/\/baijiahao.baidu.com/g)) {
				GM_addStyle(this.css.baijiahao);
				__console__.log(
					"%c[BaiDu优化%c-%百家号%c]%c %s",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:darkorange",
					"font-weight:bold;color:cornflowerblue",
					"color:0",
					"插入CSS规则"
				);
			}
		},
		tieba() {
			/* 百度贴吧 */
			function tiebaLoadComments() {
				/* 贴吧加载评论 */
				const tiebaConfig = {
					getNewCommentInnerHTML: (element, user_commands_list) => {
						/* 根据dom获取需要插入的评论的html */
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
								__console__.log(
									"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:darkorange",
									"font-weight:bold;color:cornflowerblue",
									"color:red",
									"获取PC端的数据楼层和时间信息失败👇"
								);
								__console__.log(childrenElement);
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
									let newInnerHTML =
										'<div><div data-v-5b60f30b="" class="lzl-post-item" style="">' +
										'<div data-v-5b60f30b="" class="text-box">' +
										'<span data-v-5b60f30b="" class="link username">' +
										u_user_name +
										": </span>" +
										'<div data-v-ab14b3fe="" data-v-5b60f30b="" class="thread-text lzl-post-text"><span data-v-ab14b3fe="" class="text-content">' +
										u_content +
										"</span></div>" +
										"</div>" +
										"</div></div>";
									new_user_commands_innerHTML += newInnerHTML;
								}
							);
						}

						if (new_user_commands_innerHTML) {
							new_user_commands_innerHTML =
								'<div data-v-5b60f30b="" data-v-74eb13e2="" class="lzl-post lzl-post" style="max-height: 2.35rem;overflow-y: auto;">' +
								new_user_commands_innerHTML +
								"</div>";
						}
						let new_command_innerHTML =
							`
                            <div data-v-74eb13e2="" data-v-602e287c="" class="post-item" data-floor="` +
							window.floor_num +
							`" landlord=` +
							is_landlord +
							`>
                                <div data-v-188c0e84="" data-v-74eb13e2="" class="user-line-wrapper user-line-post">
                                    <div data-v-188c0e84="" class="user-line">
                                        <div data-v-188c0e84="" class="tbfe-1px-border avatar"
                                            data-src="` +
							user_avator +
							`"
                                            lazy="loaded"
                                            style="background-image: url(` +
							user_avator +
							`);">
                                        </div>
                                        <div data-v-188c0e84="" class="user-info">
                                            <div data-v-188c0e84="" class="username">` +
							user_name +
							`</div>
                                            <p data-v-188c0e84="" class="desc-info">
                                                <span data-v-188c0e84="" class="floor-info">` +
							user_floor +
							`</span>
                                                <span data-v-188c0e84="" class="time" style='margin-right: .08rem;'>` +
							user_comment_time +
							`</span>
                                                <span data-v-188c0e84="" class="ip">` +
							user_ip_position +
							`</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-74eb13e2="" class="content">
                                    <p data-v-ab14b3fe="" data-v-74eb13e2="" class="thread-text post-text">
                                        <span data-v-ab14b3fe="" class="text-content">
                                        ` +
							user_command +
							`
                                        </span>
                                    </p>
                                    ` +
							new_user_commands_innerHTML +
							`
                                    <div data-v-74eb13e2="" class="post-split-line"></div>
                                </div>
                            </div>
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
							$(window).unbind();
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
								__console__.log(
									"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:darkorange",
									"font-weight:bold;color:cornflowerblue",
									"color:0",
									"执行 正序"
								);
							} else {
								event.currentTarget.setAttribute("class", "white-btn-comment");
								mainReverse();
								__console__.log(
									"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:darkorange",
									"font-weight:bold;color:cornflowerblue",
									"color:0",
									"执行 倒序"
								);
							}
						});
					},
					getPageComment: (url) => {
						/* 获取第一页的评论（不包括评论的评论） */
						return new Promise((res) => {
							GM_xmlhttpRequest({
								url: url,
								timeout: 5000,
								method: "GET",
								headers: {
									"User-Agent": Utils.getRandomPCUA(),
								},
								onload: function (resp) {
									let _html_ = $(resp.responseText);
									res(_html_);
								},
								onerror: function (resp) {
									if (resp.error.match("wappass.baidu.com")) {
										let url = resp.error.match(/"(.*?)"/)[1];
										__console__.log(
											"%c[BaiDu优化%c-%c百度贴吧%c]%c 触发百度校验: %s",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:darkorange",
											"font-weight:bold;color:cornflowerblue",
											"color:0",
											url
										);
										window.location.href = url;
									} else {
										__console__.log(
											"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:darkorange",
											"font-weight:bold;color:cornflowerblue",
											"color:red",
											"获取评论数据失败 👇"
										);
										__console__.log(resp);
										res(400);
									}
								},
								ontimeout: function () {
									res(400);
								},
							});
						});
					},
					getPageCommentList: (url) => {
						/* 获取第一页的评论的评论 */
						return new Promise((res) => {
							GM_xmlhttpRequest({
								url: url,
								timeout: 5000,
								method: "GET",
								headers: {
									Accept: "application/json, text/javascript, */*; q=0.01",
									"User-Agent": Utils.getRandomPCUA(),
								},
								onload: function (resp) {
									let data = JSON.parse(resp.responseText);
									let comment_list = data["data"]["comment_list"];
									res(comment_list);
								},
								onerror: function (resp) {
									__console__.log(
										"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:red",
										"取第一页的评论的评论数据失败 👇"
									);
									__console__.log(resp);
									res(400);
								},
								ontimeout: function () {
									res(400);
								},
							});
						});
					},
					loadingNextCommand: () => {
						/* 自动加载下一页的评论 */
						var isloding_flag = false;
						$(window).bind("scroll", async function () {
							let userScrollHeight = Math.ceil(
								$(window).scrollTop() + $(window).height() + 150
							);
							if (userScrollHeight >= $(document).height()) {
								if (isloding_flag) {
									__console__.log(
										"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:0",
										"正在请求中"
									);
								} else {
									isloding_flag = true;
									loadingView.setTextWithLoadIcon("Loading...");
									loadingView.setVisible(true);
									let timeStamp = Date.now();
									let next_page_url =
										"https://tieba.baidu.com/p/" +
										window.param_tid +
										"?pn=" +
										window.page;
									let next_page_all_comment_url =
										"https://tieba.baidu.com/p/totalComment?t=" +
										timeStamp +
										"&tid=" +
										window.param_tid +
										"&fid=" +
										window.param_forum_id +
										"&pn=" +
										window.page +
										"&see_lz=0";
									__console__.log(
										"%c[BaiDu优化%c-%c百度贴吧%c]%c 请求下一页评论的url: %s",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:0",
										next_page_url
									);
									__console__.log(
										"%c[BaiDu优化%c-%c百度贴吧%c]%c 贴子所有评论的url: %s",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:0",
										next_page_all_comment_url
									);
									let pageHTML = await tiebaConfig.getPageComment(
										next_page_url
									);
									__console__.log(
										"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:0",
										"成功获取下一页评论"
									);
									let user_commands_list = await tiebaConfig.getPageCommentList(
										next_page_all_comment_url
									);
									__console__.log(
										"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:0",
										"成功获取下一页评论对应的数组"
									);
									if (pageHTML == 400 || user_commands_list == 400) {
										loadingView.setHTML("未知错误，请看控制台");
										$(window).unbind();
										__console__.log(
											"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:darkorange",
											"font-weight:bold;color:cornflowerblue",
											"color:#f400ff",
											"取消绑定监听"
										);
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
										__console__.log(
											"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:darkorange",
											"font-weight:bold;color:cornflowerblue",
											"color:0",
											"已加载所有的评论"
										);
										loadingView.setHTML("已加载所有的评论");
										loadingView.setVisible(false);
										$(window).unbind();
										__console__.log(
											"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:darkorange",
											"font-weight:bold;color:cornflowerblue",
											"color:#f400ff",
											"取消绑定监听"
										);
									}
									window.page++;
									isloding_flag = false;
								}
							}
						});
					},
					loadingPrevCommand: () => {
						/* 自动加载上一页的评论 */
						var isloding_flag = false;
						$(window).bind("scroll", async function () {
							let userScrollHeight = Math.ceil(
								$(window).scrollTop() + $(window).height() + 150
							);
							if (userScrollHeight >= $(document).height()) {
								if (isloding_flag) {
									__console__.log(
										"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:0",
										"正在请求中"
									);
								} else {
									isloding_flag = true;
									loadingView.setTextWithLoadIcon("Loading...");
									loadingView.setVisible(true);
									let timeStamp = Date.now();
									let page_url =
										"https://tieba.baidu.com/p/" +
										window.param_tid +
										"?pn=" +
										window.page;
									let page_all_comment_url =
										"https://tieba.baidu.com/p/totalComment?t=" +
										timeStamp +
										"&tid=" +
										window.param_tid +
										"&fid=" +
										window.param_forum_id +
										"&pn=" +
										window.page +
										"&see_lz=0";
									__console__.log(
										"%c[BaiDu优化%c-%c百度贴吧%c]%c 请求上一页评论的url: %s",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:0",
										page_url
									);
									__console__.log(
										"%c[BaiDu优化%c-%c百度贴吧%c]%c 贴子所有评论的url: %s",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:0",
										page_all_comment_url
									);
									let pageHTML = await tiebaConfig.getPageComment(page_url);
									__console__.log(
										"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:0",
										"成功获取上一页评论"
									);
									let user_commands_list = await tiebaConfig.getPageCommentList(
										page_all_comment_url
									);
									__console__.log(
										"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:0",
										"成功获取下一页评论对应的数组"
									);
									if (pageHTML == 400 || user_commands_list == 400) {
										loadingView.setHTML("未知错误，请看控制台");
										$(window).unbind();
										__console__.log(
											"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:darkorange",
											"font-weight:bold;color:cornflowerblue",
											"color:#f400ff",
											"取消绑定监听"
										);
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
										__console__.log(
											"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:darkorange",
											"font-weight:bold;color:cornflowerblue",
											"color:0",
											"已加载所有的评论"
										);
										loadingView.setHTML("已加载所有的评论");
										loadingView.setVisible(false);
										$(window).unbind();
										__console__.log(
											"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:darkorange",
											"font-weight:bold;color:cornflowerblue",
											"color:#f400ff",
											"取消绑定监听"
										);
									}
									window.page--;
									isloding_flag = false;
								}
							}
						});
					},
					insertLoadingHTML: () => {
						/* 插入加载中的html */
						if (!loadingView.exists()) {
							__console__.log(
								"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:0",
								"插入loading"
							);
							$(".main-page-wrap").append($(loadingView.html));
							loadingView.setCSS();
						}
					},
					displayCommand: (classlist) => {
						/* 动态显示只看楼主 */
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
				async function mainPositive() {
					/* 正序 */
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
							loadingView.setTextWithLoadIcon("Loading...");
							loadingView.setVisible(true);
							let url =
								"https://tieba.baidu.com/p/totalComment?t=" +
								timeStamp +
								"&tid=" +
								window.param_tid +
								"&fid=" +
								window.param_forum_id +
								"&pn=" +
								window.page +
								"&see_lz=0";
							let pageUrl =
								"https://tieba.baidu.com/p/" +
								window.param_tid +
								"?pn=" +
								window.page;
							let pageHTML = await tiebaConfig.getPageComment(pageUrl);
							let user_commands_list = await tiebaConfig.getPageCommentList(
								url
							);
							if (pageHTML == 400 || user_commands_list == 400) {
								__console__.log(
									"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:darkorange",
									"font-weight:bold;color:cornflowerblue",
									"color:red",
									"新评论区获取失败"
								);
								return;
							}
							__console__.log(
								"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:0",
								"成功获取评论HTML"
							);
							window.max_page = pageHTML.find(".jump_input_bright");
							if (window.max_page.length) {
								window.max_page = parseInt(
									max_page[0].attributes["max-page"].value
								);
								tiebaConfig.loadingNextCommand();
								$(window).trigger("scroll");
								__console__.log(
									"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:darkorange",
									"font-weight:bold;color:cornflowerblue",
									"color:0",
									"当前为多页，执行监听"
								);
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
							__console__.log(
								"%c[BaiDu优化%c-%c百度贴吧%c]%c 共 %s 页评论，当前所在 %s 页",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:0",
								window.max_page,
								window.page
							);
						} else {
							__console__.log(
								"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:red",
								"贴吧：获取参数data-banner-info失败"
							);
						}
					} else {
						__console__.log(
							"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:darkorange",
							"font-weight:bold;color:cornflowerblue",
							"color:red",
							"贴吧：未找到本页参数p"
						);
					}
				}
				async function mainReverse() {
					/* 倒序 */
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
							loadingView.setTextWithLoadIcon("Loading...");
							loadingView.setVisible(true);
							let url =
								"https://tieba.baidu.com/p/totalComment?t=" +
								timeStamp +
								"&tid=" +
								window.param_tid +
								"&fid=" +
								window.param_forum_id +
								"&pn=" +
								window.page +
								"&see_lz=0";
							let pageUrl =
								"https://tieba.baidu.com/p/" +
								window.param_tid +
								"?pn=" +
								window.page;
							let pageHTML = await tiebaConfig.getPageComment(pageUrl);
							let user_commands_list = await tiebaConfig.getPageCommentList(
								url
							);
							if (pageHTML == 400 || user_commands_list == 400) {
								__console__.log(
									"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:darkorange",
									"font-weight:bold;color:cornflowerblue",
									"color:red",
									"新评论区获取失败"
								);
								return;
							}
							__console__.log(
								"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:0",
								"成功获取评论HTML"
							);
							window.max_page = pageHTML.find(".jump_input_bright");
							if (window.max_page.length) {
								window.max_page = parseInt(
									max_page[0].attributes["max-page"].value
								);
								window.page = window.max_page;
								tiebaConfig.loadingPrevCommand();
								$(window).trigger("scroll");
								__console__.log(
									"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:darkorange",
									"font-weight:bold;color:cornflowerblue",
									"color:0",
									"当前为多页，执行监听"
								);
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

							__console__.log(
								"%c[BaiDu优化%c-%c百度贴吧%c]%c 共 %s 页评论，当前所在 %s 页",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:0",
								window.max_page,
								window.page
							);
						} else {
							__console__.log(
								"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:red",
								"贴吧：获取参数data-banner-info失败"
							);
						}
					} else {
						__console__.log(
							"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:darkorange",
							"font-weight:bold;color:cornflowerblue",
							"color:red",
							"贴吧：未找到本页参数p"
						);
					}
				}
				let intervalNum = 0;
				let interval = setInterval(() => {
					if (
						$(".recommend-item").attr("data-banner-info") ||
						intervalNum > 30
					) {
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
                    color: #a3a1a9;
                }
                `);
			}
			function registerImagePreview() {
				/* 注册全局贴吧图片点击预览 */
				$(document).on("click", function (event) {
					if (
						event.target.getAttribute("src") &&
						event.target
							.getAttribute("src")
							.match(/http(s|):\/\/tiebapic.baidu.com\/forum/g)
					) {
						__console__.log(
							"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:darkorange",
							"font-weight:bold;color:cornflowerblue",
							"color:0",
							"点击图片👇"
						);
						__console__.log(event.target);
						var viewer = new Viewer(event.target, {
							inline: false,
							hidden: () => {
								viewer.destroy();
							},
						});
						viewer.zoomTo(1);
						viewer.show();
					}
				});
			}
			if (this.current_url.match(/http(s|):\/\/tieba.baidu.com/g)) {
				GM_addStyle(this.css.tieba);
				__console__.log(
					"%c[BaiDu优化%c-%c百度贴吧%c]%c %s",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:darkorange",
					"font-weight:bold;color:cornflowerblue",
					"color:0",
					"插入CSS规则"
				);
				if (this.current_url.match(/http(s|):\/\/tieba.baidu.com\/p\//g)) {
					setTimeout(function () {
						tiebaLoadComments();
						registerImagePreview();
					}, 2000);
				}
			}
		},
		wenku() {
			/* 百度文库 */
			if (this.current_url.match(/http(s|):\/\/(wk|tanbi).baidu.com/g)) {
				GM_addStyle(this.css.wenku);
				__console__.log(
					"%c[BaiDu优化%c-%c百度文库%c]%c %s",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:darkorange",
					"font-weight:bold;color:cornflowerblue",
					"color:0",
					"插入CSS规则"
				);
			}
		},
		jingyan() {
			/* 百度经验 */
			if (this.current_url.match(/http(s|):\/\/jingyan.baidu.com/g)) {
				GM_addStyle(this.css.jingyan);
				__console__.log(
					"%c[BaiDu优化%c-%c百度经验%c]%c %s",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:darkorange",
					"font-weight:bold;color:cornflowerblue",
					"color:0",
					"插入CSS规则"
				);
			}
		},
		baike() {
			/* 百度百科 */
			if (this.current_url.match(/http(s|):\/\/baike.baidu.com/g)) {
				GM_addStyle(this.css.baike);
				__console__.log(
					"%c[BaiDu优化%c-%c百度百科%c]%c %s",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:darkorange",
					"font-weight:bold;color:cornflowerblue",
					"color:0",
					"插入CSS规则"
				);
				let page_ = 1;
				let page_interval_lock = false;
				let more_url = "https://baike.baidu.com" + window.location.pathname;
				let ele_url = document.getElementById("J-gotoPC-top")?.href;
				if (!ele_url) {
					return;
				}
				let match_id = ele_url.match(/item\/.*\/(\d*)/);

				function set_normal_img_size() {
					/* 获取到的图片大小要重新设置 */
					let col_para = document.getElementsByClassName("col-para");
					$.each(col_para, (i, n) => {
						n.setAttribute("style", "width: 42.936vw;margin: 0 auto;");
						let content_img_item = n.getElementsByClassName("content-img-item");
						let content_img_link = n.getElementsByClassName("content-img-link");
						let content_album = n.getElementsByClassName("content-album");
						if (content_album.length != 0) {
							content_album[0].setAttribute("style", "");
							content_img_item = n.getElementsByClassName("content-album-item");
							content_img_link = n.getElementsByClassName("content-album-link");
						}
						if (content_img_item.length != 0) {
							content_img_item[0].setAttribute(
								"style",
								"max-height: 39vw;max-width: 30vw;border-radius: 0.09rem;margin: 0 auto;overflow: hidden;"
							);
						}
						if (content_img_link.length != 0) {
							content_img_link[0].setAttribute("style", "width: 30vw;");
						}
					});
				}

				function insert_img() {
					/* 获取到的要重新将图片链接插入到img标签中 */
					let content_img = document.getElementsByClassName("lazy-img");
					$.each(content_img, (i, v) => {
						let content_img = v.parentElement.parentElement.parentElement;
						let img_url = content_img.getAttribute("data-src")
							? content_img.getAttribute("data-src")
							: v.getAttribute("data-url");
						if (img_url != null) {
							v.innerHTML = '<img src="' + img_url + '"></img>';
						}
					});
				}

				function loadMore() {
					/* 循环加载更多内容 */
					loadingView.setCSS();
					$(".BK-main-content").after(loadingView.html);
					if (match_id.length >= 2) {
						/* 由于不知道有多少页，定时器加载判断 */
						var page_interval = setInterval(function () {
							__console__.log(
								"%c[BaiDu优化%c-%c百度百科%c]%c 定时器loading",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:0"
							);
							loadingView.setVisible(true);
							if (page_interval_lock == true) {
								return;
							}
							page_interval_lock = true;
							more_url =
								more_url +
								"?wpf=3&ldr=1&page=" +
								page_ +
								"&insf=1&_=" +
								new Date().getTime();
							__console__.log(
								"%c[BaiDu优化%c-%c百度百科%c]%c %s",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:0",
								more_url
							);
							GM_xmlhttpRequest({
								url: more_url,
								timeout: 5000,
								method: "GET",
								async: false,
								headers: {
									"User-Agent": Utils.getRandomPCUA(),
								},
								onload: function (resp) {
									loadingView.setVisible(false);
									let $_resp = $(resp.response);
									let main_content = $_resp.find(".BK-main-content");
									let new_content = main_content.prevObject[0].innerHTML;
									if (new_content.trim() == `<a name="u0"></a>`) {
										__console__.log(
											"%c[BaiDu优化%c-%c百度百科%c]%c %s",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:darkorange",
											"font-weight:bold;color:cornflowerblue",
											"color:0",
											"已到达最大页" + (page_ - 1)
										);
										insert_img();
										set_normal_img_size();
										loadingView.setHTML("已到达最大页" + (page_ - 1));
										clearInterval(page_interval);
									} else {
										loadingView.setTextWithLoadIcon("正在加载页 " + page_);
										$(".BK-main-content").append($(new_content));
									}
									window.history.pushState("forward", null, setLocationUrl);
									page_++;
									page_interval_lock = false;
								},
								onerror: function (resp) {
									__console__.log(
										"%c[BaiDu优化%c-%c百度百科%c]%c %s",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:red",
										"请求失败 👇"
									);
									__console__.log(resp);
									insert_img();
									set_normal_img_size();
									loadingView.setHTML("请求失败");
									loadingView.setIconVisible(false);
									clearInterval(page_interval);
								},
								ontimeout: function () {
									__console__.log(
										"%c[BaiDu优化%c-%c百度百科%c]%c %s",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:cornflowerblue",
										"font-weight:bold;color:darkorange",
										"font-weight:bold;color:cornflowerblue",
										"color:red",
										"请求超时 👇"
									);
									__console__.log(resp);
									insert_img();
									set_normal_img_size();
									loadingView.setHTML("请求超时");
									loadingView.setIconVisible(false);
									clearInterval(page_interval);
								},
							});
						}, 1000);
					} else {
						__console__.log(
							"%c[BaiDu优化%c-%c百度百科%c]%c %s",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:darkorange",
							"font-weight:bold;color:cornflowerblue",
							"color:red",
							"匹配id失败"
						);
					}
				}
				setTimeout(function () {
					loadMore(page_);
				}, 3000);
			}
		},
		baiketashuo() {
			/* 百度百科-他说 */
			if (this.current_url.match(/http(s|):\/\/baike.baidu.com\/tashuo/g)) {
				setTimeout(function () {
					remove_bottom_ad();
				}, 2000);

				function remove_bottom_ad() {
					/* 去除底部广告 */
					let index_tashuo_list_bottom =
						document.getElementById("index_tashuo_list").children;
					for (let i = 0; i < index_tashuo_list_bottom.length; i++) {
						let item = index_tashuo_list_bottom[i];
						let class_name = item.className;
						if (class_name != "J-hot-item-container") {
							__console__.log(
								"%c[BaiDu优化%c-%c百度百科-他说%c]%c %s",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:0",
								"TA has ad，remove ！"
							);
							item.remove();
							i--;
						}
					}
				}
			}
		},
		zhidao() {
			/* 百度知道 */
			if (this.current_url.match(/http(s|):\/\/zhidao.baidu.com/g)) {
				GM_addStyle(this.css.zhidao);
				__console__.log(
					"%c[BaiDu优化%c-%c百度知道%c]%c %s",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:darkorange",
					"font-weight:bold;color:cornflowerblue",
					"color:0",
					"插入CSS规则"
				);
				$(".ec-ad")?.parent()?.remove();
			}
		},
		fanyi() {
			/* 百度翻译 */
			if (this.current_url.match(/http(s|):\/\/fanyi.baidu.com/g)) {
				GM_addStyle(this.css.fanyi);
				__console__.log(
					"%c[BaiDu优化%c-%c百度翻译%c]%c %s",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:darkorange",
					"font-weight:bold;color:cornflowerblue",
					"color:0",
					"插入CSS规则"
				);
			}
			if (this.current_url.match(/http(s|):\/\/fanyi-app.baidu.com/g)) {
				GM_addStyle(this.css.fanyiapp);
				Utils.waitNode(
					"#page-content",
					() => {
						$("#page-content")?.attr("style", "max-height:unset !important");
					},
					30,
					150
				);
				__console__.log(
					"%c[BaiDu优化%c-%c百度翻译APP%c]%c %s",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:darkorange",
					"font-weight:bold;color:cornflowerblue",
					"color:0",
					"插入CSS规则"
				);
			}
		},
		image() {
			if (this.current_url.match(/http(s|):\/\/image.baidu.com/g)) {
				GM_addStyle(this.css.image);
				__console__.log(
					"%c[BaiDu优化%c-%c百度图片%c]%c %s",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:darkorange",
					"font-weight:bold;color:cornflowerblue",
					"color:0",
					"插入CSS规则"
				);
			}
		},
		map() {
			if (this.current_url.match(/http(s|):\/\/map.baidu.com/g)) {
				GM_addStyle(this.css.map);
				__console__.log(
					"%c[BaiDu优化%c-%c百度地图%c]%c %s",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:darkorange",
					"font-weight:bold;color:cornflowerblue",
					"color:0",
					"插入CSS规则"
				);
			}
		},
		xue() {
			if (this.current_url.match(/http(s|):\/\/xue.baidu.com/g)) {
				GM_addStyle(this.css.xue);
				__console__.log(
					"%c[BaiDu优化%c-%c知了好学%c]%c %s",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:cornflowerblue",
					"font-weight:bold;color:darkorange",
					"font-weight:bold;color:cornflowerblue",
					"color:0",
					"插入CSS规则"
				);
			}
		},
	};

	function autoLoadNextPage() {
		/* 百度搜索-自动加载下一页 */
		var isloding_flag = false;
		$("#page-controller").after($(loadingView.html));
		loadingView.setCSS();
		$(window).bind("scroll", function () {
			let userScrollHeight = Math.ceil(
				$(window).scrollTop() + $(window).height() + 200
			);
			if (userScrollHeight >= $(document).height()) {
				if (isloding_flag == false) {
					loadingView.setVisible(true);
					isloding_flag = true;

					let next_page_url =
						$(".new-nextpage").attr("href") ||
						$(".new-nextpage-only").attr("href");
					if (!next_page_url) {
						__console__.log(
							"%c[BaiDu优化%c-%c百度搜索%c]%c %s",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:darkorange",
							"font-weight:bold;color:cornflowerblue",
							"color:0",
							"获取不到下一页，怀疑已加载所有的搜索结果"
						);
						isloding_flag = false;
						$(window).unbind();
						__console__.log(
							"%c[BaiDu优化%c-%c百度搜索%c]%c %s",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:cornflowerblue",
							"font-weight:bold;color:darkorange",
							"font-weight:bold;color:cornflowerblue",
							"color:#f400ff",
							"取消绑定监听"
						);
						loadingView.destory();
						return;
					}
					let params_pn = new URL(next_page_url).search.match(/[0-9]+/);
					let next_page_textContent =
						params_pn.length == 0
							? "第 10 条"
							: "第 " + parseInt(params_pn[0]) + " 条";
					__console__.log(
						"%c[BaiDu优化%c-%c百度搜索%c]%c 正在请求%s数据: %s",
						"font-weight:bold;color:cornflowerblue",
						"font-weight:bold;color:cornflowerblue",
						"font-weight:bold;color:darkorange",
						"font-weight:bold;color:cornflowerblue",
						"color:0",
						next_page_textContent,
						next_page_url
					);
					loadingView.setTextWithLoadIcon("Loading...");
					GM_xmlhttpRequest({
						url: next_page_url,
						timeout: 5000,
						method: "GET",
						onload: function (resp) {
							loadingView.setVisible(false);
							let page_html = $(resp.response);
							page_html.find("style").filter(function (index) {
								/* 插入vue打包的css */ if (
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
										__console__.log(
											"%c[BaiDu优化%c-%c百度搜索%c]%c 插入Vue的CSS: %s",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:cornflowerblue",
											"font-weight:bold;color:darkorange",
											"font-weight:bold;color:cornflowerblue",
											"color:0",
											dataVueSsrIdValue
										);
									}
								}
							});
							let search_result = page_html.find(".c-result.result");
							let next_html_next_page_html = page_html.find("#page-controller");
							let this_page_results = $("#results");
							if (this_page_results != void 0) {
								$.each(search_result, (i, n) => {
									this_page_results.append(n);
								});
								$("#page-controller").html(next_html_next_page_html);
							} else {
								__console__.log(
									"%c[BaiDu优化%c-%c百度搜索%c]%c %s",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:darkorange",
									"font-weight:bold;color:cornflowerblue",
									"color:0",
									"已加载所有的搜索结果"
								);
								$(window).unbind();
								__console__.log(
									"%c[BaiDu优化%c-%c百度搜索%c]%c %s",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:darkorange",
									"font-weight:bold;color:cornflowerblue",
									"color:#f400ff",
									"取消绑定监听"
								);
							}
							isloding_flag = false;
							window.history.pushState("forward", null, next_page_url);
						},
						onerror: function (resp) {
							if (next_page_url == undefined) {
								__console__.log(
									"%c[BaiDu优化%c-%c百度搜索%c]%c %s",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:darkorange",
									"font-weight:bold;color:cornflowerblue",
									"color:red",
									"未获取到下一页的url"
								);
							} else {
								__console__.log(
									"%c[BaiDu优化%c-%c百度搜索%c]%c %s",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:cornflowerblue",
									"font-weight:bold;color:darkorange",
									"font-weight:bold;color:cornflowerblue",
									"color:red",
									"加载失败 👇"
								);
								__console__.log(resp);
								loadingView.setHTML("加载失败");
							}
							isloding_flag = false;
						},
						ontimeout: function () {
							__console__.log(
								"%c[BaiDu优化%c-%c百度搜索%c]%c %s",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:cornflowerblue",
								"font-weight:bold;color:darkorange",
								"font-weight:bold;color:cornflowerblue",
								"color:red",
								"请求超时 👇"
							);
							__console__.log(resp);
							loadingView.setHTML("请求超时");
							isloding_flag = false;
						},
					});
				} else {
					let next_page_textContent =
						$(".new-nowpage").length == 0
							? "第 10 条"
							: "第 " +
							  (parseInt($(".new-nowpage")[0].textContent.match(/([0-9]+)/)) +
									1) +
							  " 条";
					__console__.log(
						"%c[BaiDu优化%c-%c百度搜索%c]%c 正在加载%s中请稍后，请勿重复",
						"font-weight:bold;color:cornflowerblue",
						"font-weight:bold;color:cornflowerblue",
						"font-weight:bold;color:darkorange",
						"font-weight:bold;color:cornflowerblue",
						"color:0",
						next_page_textContent
					);
				}
			}
		});
	}

	var GM_Menu = new Utils.GM_Menu(
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
		},
		true
	);
	GM_addStyle(CSDN_FLAG_CSS);
	baidu.init();
})();
