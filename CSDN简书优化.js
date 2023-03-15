// ==UserScript==
// @name         CSDN|简书优化
// @icon         https://www.csdn.net/favicon.ico
// @namespace    https://greasyfork.org/zh-CN/scripts/406136-csdn-简书优化
// @supportURL   https://greasyfork.org/zh-CN/scripts/406136-csdn-简书优化/feedback
// @version      0.5.9
// @description  支持手机端和PC端
// @author       WhiteSevs
// @match        http*://*.csdn.net/*
// @match        http*://*.jianshu.com/*
// @match        http*://*.jianshu.io/*
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        unsafeWindow
// @run-at       document-start
// @require	     https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @require      https://greasyfork.org/scripts/449471-viewer/code/Viewer.js?version=1081056
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1160801
// ==/UserScript==

(function () {
  "use strict";
  var log = {
    tag: "CSDN|简书优化",
    info: function (tag, text, color = "0") {
      /* #f400ff */
      if (typeof text === "object") {
        this.info(tag, "输出Object👇", color);
        console.log(text);
      } else {
        console.log(
          `%c[${log.tag}%c-%c${tag}%c]%c ${text}`,
          "font-weight:bold;color:cornflowerblue",
          "font-weight:bold;color:cornflowerblue",
          "font-weight:bold;color:darkorange",
          "font-weight:bold;color:cornflowerblue",
          `color:${color}`
        );
      }
    },
    error: function (tag, text, color = "red") {
      if (!GM_getValue("LOG", false)) {
        return;
      }
      this.info(tag, text, color);
    },
    success: function (tag, text, color = "blue") {
      if (!GM_getValue("LOG", false)) {
        return;
      }
      this.info(tag, text, color);
    },
  };
  function waitForElementToRemove(_query_ = "") {
    /* 移除元素（未出现也可以等待出现） */
    Utils.waitNode(_query_, undefined, 200).then((dom) => {
      dom.forEach((item) => {
        $(item).remove();
      });
    });
  }
  /**
   * 因为在有些页面上，比如：简书，当插入style元素到head中，该页面清除该元素
   * @param {String} styleText
   * @returns
   */
  function GM_addStyle(styleText) {
    let cssDOM = document.createElement("style");
    cssDOM.setAttribute("type", "text/css");
    cssDOM.innerHTML = styleText;
    /* 在<html>后面追加style元素，而非head后 */
    document.documentElement.insertBefore(
      cssDOM,
      document.documentElement.childNodes[0]
    );
    return cssDOM;
  }
  function JianShu() {
    /* 简书 */
    function isJianShu() {
      /* 判断是否是 简书 */
      return Boolean(/jianshu.(com|io)/i.test(window.location.origin));
    }
    function articleCenter() {
      /* 全文居中 */
      const articleCenterCSS = `
			div[role=main] aside,
			div._3Pnjry{
				display: none !important;
			}
			div._gp-ck{
				width: 100% !important;
			}
			`;
      GM_addStyle(articleCenterCSS);
      waitForElementToRemove("div[role=main] aside");
      waitForElementToRemove("div._3Pnjry");
      Utils.waitNode("div._gp-ck").then((dom) => {
        dom.forEach((item) => {
          item.style["width"] = "100%";
        });
      });
    }
    function JianShuremoveFooterRecommendRead() {
      /* 手机-移除底部推荐阅读 */
      GM_addStyle(`
			#recommended-notes{
				display: none !important;
			}
			`);
    }
    function PC() {
      log.info("简书", "当前为PC和移动端混合处理");
      var JianShuCSS = `
		.download-app-guidance,
		.call-app-btn,
		.collapse-tips,
		.note-graceful-button,
		.app-open,
		.header-wrap,
		.recommend-wrap.recommend-ad,
		.call-app-Ad-bottom,
		#recommended-notes p.top-title span.more,
		#homepage .modal,
		button.index_call-app-btn,
		span.note__flow__download,
		.download-guide,
		#footer,
		.comment-open-app-btn-wrap,
		.nav.navbar-nav + div,
		.self-flow-ad,
		#free-reward-panel,
		div[id*='AdFive']{
			display:none !important;
		}
		body.reader-day-mode.normal-size {
			overflow: auto !important;
		}
		.collapse-free-content{
			height:auto !important;
		}
		.copyright{
			color:#000 !important;
		}
		#note-show .content .show-content-free .collapse-free-content:after{
			background-image:none !important;
		}
		footer > div > div{
			justify-content: center;
		}
		`;
      let JianShuCSSNode = GM_addStyle(JianShuCSS);
      log.info("简书", "添加css");
      log.info("简书", JianShuCSSNode);
      Utils.waitNode('div#homepage div[class*="dialog-"]').then((dom) => {
        if (dom.length) {
          dom[0].style["visibility"] = "hidden";
        }
      });
      Utils.mutationObserver('div#homepage div[class*="dialog-"]', {
        fn: (mutations) => {
          if (mutations.length == 0) {
            return;
          }
          if (mutations[0].target.style["display"] != "none") {
            document
              .querySelector('div#homepage div[class*="dialog-"] .cancel')
              ?.click();
          }
        },
        config: {
          /* 子节点的变动（新增、删除或者更改） */
          childList: false,
          /* 属性的变动 */
          attributes: true,
          /* 节点内容或节点文本的变动 */
          characterData: true,
          /* 是否将观察器应用于该节点的所有后代节点 */
          subtree: true,
        },
      });
      if (GM_Menu.get("JianShuArticleCenter")) {
        articleCenter();
      }
      if (GM_Menu.get("JianShuremoveFooterRecommendRead")) {
        JianShuremoveFooterRecommendRead();
      }
    }
    if (isJianShu()) {
      if (window.location.pathname === "/go-wild") {
        /* 禁止简书拦截跳转 */
        let search = window.location.href.replace(
          window.location.origin + "/",
          ""
        );
        search = decodeURIComponent(search);
        let newURL = search
          .replace(/^go-wild\?ac=2&url=/gi, "")
          .replace(/^https:\/\/link.zhihu.com\/\?target\=/gi, "");
        window.location.href = newURL;
      }
      PC();
    }
  }
  function CSDN() {
    /* csdn-移动端 */
    function isCSDN() {
      /* 判断是否是 CSDN */
      return Boolean(/csdn.net/i.test(window.location.origin));
    }
    function Mobile() {
      /* 移动端 */
      log.info("CSDN-移动端", "执行");
      const css = `
      #mainBox{
        width: auto;
      }
      .user-desc.user-desc-fix{
        height: auto  !important;
        overflow: auto !important;
      }
      #operate,.feed-Sign-span,
      .view_comment_box,
      .weixin-shadowbox.wap-shadowbox,
      .feed-Sign-span,
      .user-desc.user-desc-fix,
      .comment_read_more_box,
      #content_views pre.set-code-hide .hide-preCode-box,
      .passport-login-container,
      .hljs-button[data-title='登录后复制'],
      .article-show-more,
      #treeSkill,
      div.btn_open_app_prompt_div,
      div.readall_box,
      div.aside-header-fixed{
        display:none !important;
      }
      .GM-csdn-dl{
        padding: .24rem .32rem;
        width: 100%;
        justify-content: space-between;
        -webkit-box-pack: justify;
        border-bottom: 1px solid #F5F6F7!important;
      }
      .GM-csdn-title{
        font-size: .3rem;
        color: #222226;
        letter-spacing: 0;
        line-height: .44rem;
        font-weight: 600;
        //max-height: .88rem;
        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2
      }
      .GM-csdn-title a{
        word-break: break-all;
        color: #222226;
        font-weight: 600;
      }
      .GM-csdn-title em,.GM-csdn-content em{
        font-style: normal;
        color: #fc5531
      }
      .GM-csdn-content{
        //max-width: 5.58rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        color: #555666;
        font-size: .24rem;
        line-height: .34rem;
        max-height: .34rem;
        word-break: break-all;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        margin-top: .16rem;
      }
      .GM-csdn-img img{
        width: 2.18rem;
        height: 1.58rem;
        //margin-left: .16rem
      }
      .GM-csdn-Redirect{
        color: #fff;
        background-color: #f90707;
        font-family: sans-serif;
        margin: auto 2px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 0px 3px;
        font-size: xx-small;
        display: inline;
        white-space: nowrap;
      }
      .component-box .praise {
        background: #ff5722;
        border-radius: 5px;
        padding: 0px 8px;
        height: auto;
              
      }
      .component-box .praise,.component-box .share {
        color: #fff;
      }
      .component-box a {
        display: inline-block;
        font-size:xx-small;
      }
      .component-box {
        display: inline;
        margin: 0;
        position: relative;
        white-space:nowrap;
      }
      .csdn-edu-title{
        background: #4d6de1;
        border-radius: 5px;
        padding: 0px 8px;
        height: auto;
        color: #fff !important;
      }
      #comment{
        max-height: none !important;
      }
      #content_views pre,
      #content_views pre code{
        webkit-touch-callout: text !important;
        -webkit-user-select: text !important;
        -khtml-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
      }
      #content_views pre.set-code-hide,
      .article_content{
        height: 100% !important;
        overflow: auto !important;
      }
      `;
      GM_addStyle(css);
      function refactoringRecommendation() {
        /* 重构底部推荐 */
		log.info("CSDN-移动端", "重构底部推荐");
        function refactoring() {
          /* 反复执行的重构函数 */
          $(".container-fluid").each((index, item) => {
            item = $(item);
            var url = ""; /* 链接 */
            var title = ""; /* 标题 */
            var content = ""; /* 内容 */
            var img = ""; /* 图片 */
            var isCSDNDownload = false; /* 判断是否是CSDN资源下载 */
            var isCSDNEduDownload = false; /* 判断是否是CSDN-学院资源下载 */
            if (item.attr("data-url")) {
              /* 存在真正的URL */
              url = item.attr("data-url");
              title = item.find(".recommend_title div.left").html();
              content = item.find(".text").html();
              if (item.find(".recommend-img").length) {
                /* 如果有图片就加进去 */
                item.find(".recommend-img").each((_index_, _item_) => {
                  img += $(_item_).html();
                });
              }
            } else {
              log.info("CSDN-移动端", "节点上无data-url");
              url = item.find("a[data-type]").attr("href");
              title = item.find(".recommend_title div.left").html();
              content = item.find(".text").html();
            }
            if (GM_Menu.get("showDirect")) {
              /* 开启就添加 */
              title += `<div class="GM-csdn-Redirect">Redirect</div>`;
            }
            var _URL_ = new URL(url);
            if (
              _URL_.host === "download.csdn.net" ||
              (_URL_.host === "www.iteye.com" &&
                _URL_.pathname.match(/^\/resource/gi))
            ) {
              /* 该链接为csdn资源下载 */
              log.info("CSDN-移动端", "该链接为csdn资源下载");
              isCSDNDownload = true;
              title += `<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>`;
            } else if (_URL_.origin.match(/edu.csdn.net/gi)) {
              /* 该链接为csdn学院下载 */
              isCSDNEduDownload = true;
              log.info("CSDN-移动端", "该链接为csdn学院下载");
              title += `<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>`;
            }
            item.attr("class", "GM-csdn-dl");
            item.attr("data-url", url);
            item.html(
              `<div class="GM-csdn-title"><div class="left">${title}</div></div><div class="GM-csdn-content">${content}</div><div class="GM-csdn-img">${img}</div>`
            );
            if (
              (isCSDNDownload || isCSDNEduDownload) &&
              GM_Menu.get("removeCSDNDownloadMobile")
            ) {
              item.remove();
            }
            /* $("#recommend")
              .find(".recommend_list")
              .before($("#first_recommend_list").find("dl").parent().html()); */
          });
        }

        Utils.mutationObserver("#recommend", {
          fn: () => {
            setTimeout(() => {
              refactoring();
            }, 300);
          },
          config: { childList: true, subtree: true, attributes: true },
        });

        gmRecommendClickEvent();
      }

      function gmRecommendClickEvent() {
        /* 设置底部推荐点击跳转事件 */
		log.info("CSDN-移动端", "设置底部推荐点击跳转事件");
        $(document).on("click", ".GM-csdn-dl", function () {
          let url = $(this).attr("data-url");
          if (GM_Menu.get("openNewTab")) {
            window.open(url, "_blank");
          } else {
            window.location.href = url;
          }
        });
      }

      function removeAds() {
        /* 去除广告 */
        log.info("CSDN-移动端", "去除广告");
        waitForElementToRemove(".passport-login-container");
        waitForElementToRemove(".btn_open_app_prompt_box.detail-open-removed");
        waitForElementToRemove(".add-firstAd");
      }

      $(document).ready(function () {
        removeAds();
        refactoringRecommendation();
      });
    }
    function PC() {
      /* 桌面端 */
      log.info("CSDN-桌面端", "执行");
      const css = `
      .ecommend-item-box.recommend-recommend-box,
      .login-mark,
      .opt-box.text-center,
      .leftPop,
      #csdn-shop-window,
      .toolbar-advert,
      .hide-article-box,
      .user-desc.user-desc-fix,
      .recommend-card-box,
      .more-article,
      .article-show-more,
      #csdn-toolbar-profile-nologin,
			.guide-rr-first{
          display: none !important;
      }
      .comment-list-box{
          max-height: none !important;
      }
      .blog_container_aside,
      #nav{
          margin-left: -45px;
      }
      .recommend-right.align-items-stretch.clearfix,.dl_right_fixed{
          margin-left: 45px;
      }
			#content_views pre,
      #content_views pre code{
          user-select: text !important;
      }
      #article_content,
      .user-article.user-article-hide{
        height: auto !important;
        overflow: auto !important;
      }
  `;
      function removeClipboardHijacking() {
        /* 去除剪贴板劫持 */
        log.info("CSDN-桌面端", "去除剪贴板劫持");
        $(".article-copyright")?.remove();
        if (unsafeWindow.articleType) {
          unsafeWindow.articleType = 0;
        }
        if (
          unsafeWindow.csdn &&
          unsafeWindow.csdn.copyright &&
          unsafeWindow.csdn.copyright.textData
        ) {
          unsafeWindow.csdn.copyright.textData = "";
        }
        if (
          unsafeWindow.csdn &&
          unsafeWindow.csdn.copyright &&
          unsafeWindow.csdn.copyright.htmlData
        ) {
          unsafeWindow.csdn.copyright.htmlData = "";
        }
      }
      function unBlockCopy() {
        /* 取消禁止复制 */
        log.info("CSDN-桌面端", "取消禁止复制");
        $(document).on("click", ".hljs-button.signin", function () {
          /* 复制按钮 */
          let btnNode = $(this);
          /* 需要复制的文本 */
          let copyText = btnNode.parent().text();
          Utils.setClip(copyText);
          btnNode.attr("data-title", "复制成功");
        });
        $(document).on("mouseenter mouseleave", "pre", function () {
          this.querySelector(".hljs-button.signin")?.setAttribute(
            "data-title",
            "复制"
          );
        });
      }
      function clickPreCodeAutomatically() {
        /* 点击代码块自动展开 */
        if (!GM_Menu.get("autoExpandContent")) {
          return;
        }
        log.info("CSDN-桌面端", "点击代码块自动展开");
        $(document).on("click", "pre", function () {
          let obj = $(this);
          obj.css("height", "auto");
          obj.find(".hide-preCode-box")?.remove();
        });
      }
      function restoreComments() {
        /* 恢复评论到正确位置 */
        /* 第一条评论 */
        log.info("CSDN-桌面端", "恢复评论到正确位置-第一条评论");
        Utils.waitNode(".first-recommend-box").then((dom) => {
          $(".recommend-box.insert-baidu-box.recommend-box-style").prepend(
            $(dom)
          );
        });
        log.info("CSDN-桌面端", "恢复评论到正确位置-第二条评论");
        /* 第二条评论 */
        Utils.waitNode(".second-recommend-box").then((dom) => {
          $(".recommend-box.insert-baidu-box.recommend-box-style").prepend(
            $(dom)
          );
        });
      }
      function identityCSDNDownload() {
        /* 标识CSDN下载的链接 */
        log.info("CSDN-桌面端", "标识CSDN下载的链接");
        $(".recommend-item-box[data-url*='https://download.csdn.net/']").each(
          (index, item) => {
            if (GM_Menu.get("removeCSDNDownloadPC")) {
              item.remove();
            } else {
              $(item).find(".content-box").css("border", "2px solid red");
            }
          }
        );
      }

      function articleCenter() {
        /* 全文居中 */
        if (!GM_Menu.get("articleCenter")) {
          return;
        }
        log.info("CSDN-桌面端", "全文居中");
        GM_addStyle(
          `aside.blog_container_aside{
            display:none !important;
          }
          #mainBox main{
            width: inherit !important;
          }
        `
        );
      }
      function addGotoRecommandButton() {
        /* 添加前往评论的按钮，在返回顶部的下面 */
        log.info("CSDN-桌面端", "添加前往评论的按钮，在返回顶部的下面");
        const btnElement = $(`
        <a class="option-box" data-type="gorecommand">
          <span class="show-txt" style="display:flex;opacity:100;">前往<br>评论</span>
        </a>
        `);
        $(document).on(
          "click",
          '.option-box[data-type="gorecommand"]',
          function () {
            log.info("CSDN-桌面端", "滚动到评论");
            $("html, body").animate(
              {
                scrollTop:
                  $("#toolBarBox").offset().top -
                  $("#csdn-toolbar").height() -
                  8,
              },
              1000
            );
          }
        );
        Utils.waitNode(".csdn-side-toolbar").then((dom) => {
          $(dom).append(btnElement);
        });
      }
      function shieldLoginDialog() {
        /* 屏蔽登录弹窗 */
        if (GM_Menu.get("shieldLoginDialog")) {
          log.info("CSDN-桌面端", "屏蔽登录弹窗");
          window.GM_CSS_GM_shieldLoginDialog = [
            GM_addStyle(`.passport-login-container{display: none !important;}`),
          ];
        }
      }
      function autoExpandContent() {
        /* 自动展开内容块 */
        if (!GM_Menu.get("autoExpandContent")) {
          return;
        }
        log.info("CSDN-桌面端", "自动展开内容块");
        GM_addStyle(`
			pre.set-code-hide{
				height: auto !important;
			}
			pre.set-code-hide .hide-preCode-box{
				display: none !important;
			}
		`);
      }
      GM_addStyle(css);
      articleCenter();
      shieldLoginDialog();
      autoExpandContent();
      $(document).ready(function () {
        removeClipboardHijacking();
        unBlockCopy();
        identityCSDNDownload();
        clickPreCodeAutomatically();
        restoreComments();
        addGotoRecommandButton();
      });
    }

    if (isCSDN()) {
      if (window.location.host === "link.csdn.net") {
        /* 禁止CSDN拦截跳转 */
        let search = window.location.href.replace(
          window.location.origin + "/",
          ""
        );
        search = decodeURIComponent(search);
        let newURL = search
          .replace(/^\?target\=/gi, "")
          .replace(/^https:\/\/link.zhihu.com\/\?target\=/gi, "");
        window.location.href = newURL;
      }
      if (Utils.isPhone()) {
        Mobile(); /* 移动端 */
      } else {
        PC(); /* 桌面端 */
      }
    }
  }
  if (Boolean(/csdn.net/i.test(window.location.origin))) {
    var GM_Menu = new Utils.GM_Menu({
      removeCSDNDownloadPC: {
        text: "电脑-移除文章底部的CSDN下载",
        enable: false,
        showText: (_text_, _enable_) => {
          return (_enable_ ? "✅" : "❌") + " " + _text_;
        },
        callback: () => {
          window.location.reload();
        },
      },
      articleCenter: {
        text: "电脑-全文居中",
        enable: true,
        showText: (_text_, _enable_) => {
          return (_enable_ ? "✅" : "❌") + " " + _text_;
        },
        callback: () => {
          window.location.reload();
        },
      },
      shieldLoginDialog: {
        text: "电脑-屏蔽登录弹窗",
        enable: true,
        showText: (_text_, _enable_) => {
          return (_enable_ ? "✅" : "❌") + " " + _text_;
        },
        callback: (_key_, _enable_) => {
          if (!_enable_) {
            window.GM_CSS_GM_shieldLoginDialog.forEach((item) => {
              item.remove();
            });
          } else {
            if (typeof window.GM_CSS_GM_shieldLoginDialog !== "undefined") {
              window.GM_CSS_GM_shieldLoginDialog = [
                ...window.GM_CSS_GM_shieldLoginDialog,
                GM_addStyle(
                  `.passport-login-container{display: none !important;}`
                ),
              ];
            } else {
              window.GM_CSS_GM_shieldLoginDialog = [
                GM_addStyle(
                  `.passport-login-container{display: none !important;}`
                ),
              ];
            }
          }
        },
      },
      autoExpandContent: {
        text: "电脑-自动展开内容块",
        enable: false,
        showText: (_text_, _enable_) => {
          return (_enable_ ? "✅" : "❌") + " " + _text_;
        },
        callback: () => {
          window.location.reload();
        },
      },
      showDirect: {
        text: "手机-标识处理过的底部推荐文章",
        enable: true,
        showText: (_text_, _enable_) => {
          return (_enable_ ? "✅" : "❌") + " " + _text_;
        },
        callback: () => {
          window.location.reload();
        },
      },
      openNewTab: {
        text: "手机-底部推荐文章新标签页打开",
        enable: true,
        showText: (_text_, _enable_) => {
          return (_enable_ ? "✅" : "❌") + " " + _text_;
        },
        callback: () => {
          window.location.reload();
        },
      },
      removeCSDNDownloadMobile: {
        text: "手机-移除文章底部的CSDN下载",
        enable: false,
        showText: (_text_, _enable_) => {
          return (_enable_ ? "✅" : "❌") + " " + _text_;
        },
        callback: () => {
          window.location.reload();
        },
      },
    });
  } else if (Boolean(/jianshu.(com|io)/i.test(window.location.origin))) {
    var GM_Menu = new Utils.GM_Menu({
      JianShuArticleCenter: {
        text: "电脑-全文居中",
        enable: true,
        showText: (_text_, _enable_) => {
          return (_enable_ ? "✅" : "❌") + " " + _text_;
        },
        callback: () => {
          window.location.reload();
        },
      },
      JianShuremoveFooterRecommendRead: {
        text: "手机-移除底部推荐阅读",
        enable: false,
        showText: (_text_, _enable_) => {
          return (_enable_ ? "✅" : "❌") + " " + _text_;
        },
        callback: () => {
          window.location.reload();
        },
      },
    });
  }

  JianShu();
  CSDN();
})();
