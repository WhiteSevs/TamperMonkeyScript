// ==UserScript==
// @name         CSDN|简书优化
// @icon         https://www.csdn.net/favicon.ico
// @namespace    https://greasyfork.org/zh-CN/scripts/406136-csdn-简书优化
// @supportURL   https://greasyfork.org/zh-CN/scripts/406136-csdn-简书优化/feedback
// @version      2023.9.18
// @description  支持手机端和PC端，屏蔽广告，优化浏览体验，自动跳转简书拦截URL
// @author       WhiteSevs
// @match        *://*.csdn.net/*
// @match        *://*.jianshu.com/*
// @match        *://*.jianshu.io/*
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_info
// @grant        unsafeWindow
// @run-at       document-start
// @require      https://greasyfork.org/scripts/449471-viewer/code/Viewer.js?version=1249086
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1253311
// @require      https://greasyfork.org/scripts/465772-domutils/code/DOMUtils.js?version=1253312
// ==/UserScript==

(function () {
  /**
   * @type {import("../库/Utils")}
   */
  const utils = window.Utils.noConflict();
  /**
   * @type {import("../库/DOMUtils")}
   */
  const DOMUtils = window.DOMUtils.noConflict();
  const log = new utils.Log(GM_info);
  log.config({
    logMaxCount: 20,
    autoClearConsole: true,
  });
  /**
   * 因为在有些页面上，比如：简书，当插入style元素到head中，该页面清除该元素
   */
  const GM_addStyle = utils.GM_addStyle;
  let GM_Menu = null;
  /**
   * 移除元素（未出现也可以等待出现）
   * @param {string} selectorText 元素选择器
   */
  const waitForElementToRemove = function (selectorText = "") {
    utils.waitNode(selectorText).then((dom) => {
      dom.forEach((item) => {
        item.remove();
      });
    });
  };

  const Optimization = {
    jianshu: {
      /**
       * 判断是否是简书
       */
      locationMatch() {
        return Boolean(/jianshu.(com|io)/i.test(window.location.origin));
      },
      PC: {
        /**
         * 添加屏蔽CSS
         */
        addCSS() {
          GM_addStyle(`
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
          div[id*='AdFive'],
          #index-aside-download-qrbox,
          .baidu-app-download-2eIkf_1,
          /* 底部的"小礼物走一走，来简书关注我"、赞赏支持和更多精彩内容，就在简书APP */
          div[role="main"] > div > section:first-child > div:nth-last-child(2){
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
          /* 修复底部最后编辑于：。。。在某些套壳浏览器上的错位问题 */
          #note-show .content .show-content-free .note-meta-time{
            margin-top: 0px !important;
          }
          `);
        },
        /**
         * 全文居中
         */
        articleCenter() {
          log.success("全文居中");
          GM_addStyle(`
          div[role=main] aside,
          div._3Pnjry{
            display: none !important;
          }
          div._gp-ck{
            width: 100% !important;
          }`);
          waitForElementToRemove("div[role=main] aside");
          waitForElementToRemove("div._3Pnjry");
          utils.waitNode("div._gp-ck").then((dom) => {
            dom.forEach((item) => {
              item.style["width"] = "100%";
            });
          });
        },
        /**
         * 去除剪贴板劫持
         */
        removeClipboardHijacking() {
          log.success("去除剪贴板劫持");
          const stopNativePropagation = (event) => {
            event.stopPropagation();
          };
          window.addEventListener("copy", stopNativePropagation, true);
          document.addEventListener("copy", stopNativePropagation, true);
        },
        /**
         * 自动展开全文
         */
        autoExpandFullText() {
          utils
            .waitNode(`div#homepage div[class*="dialog-"]`)
            .then((nodeList) => {
              nodeList[0].style["visibility"] = "hidden";
              utils.mutationObserver(nodeList[0], {
                callback: (mutations) => {
                  if (mutations.length == 0) {
                    return;
                  }
                  if (mutations[0].target.style["display"] != "none") {
                    log.success("自动展开全文");
                    document
                      .querySelector(
                        'div#homepage div[class*="dialog-"] .cancel'
                      )
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
            });
        },
        /**
         * 去除简书拦截其它网址的url并自动跳转
         */
        jumpRedirect() {
          if (window.location.pathname === "/go-wild") {
            /* 禁止简书拦截跳转 */
            window.stop();
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
        },
        /**
         * 屏蔽相关文章
         */
        shieldRelatedArticles() {
          log.success("屏蔽相关文章");
          GM_addStyle(`
          div[role="main"] > div > section:nth-child(2){
            display: none !important;
          }
          `);
        },
        /**
         * 屏蔽评论区
         */
        shieldUserComments() {
          log.success("屏蔽评论区");
          GM_addStyle(`
          div#note-page-comment{
            display: none !important;
          }
          `);
        },
        /**
         * 屏蔽推荐阅读
         */
        shieldRecommendedReading() {
          log.success("屏蔽推荐阅读");
          GM_addStyle(`
          div[role="main"] > div > section:last-child{
            display: none !important;
          }
          `);
        },
        run() {
          this.addCSS();
          this.removeClipboardHijacking();
          this.autoExpandFullText();
          if (GM_Menu.get("JianShuArticleCenter")) {
            this.articleCenter();
          }
          if (GM_Menu.get("JianShuShieldRelatedArticles")) {
            this.shieldRelatedArticles();
          }
          if (GM_Menu.get("JianShuShieldUserComments")) {
            this.shieldUserComments();
          }
          if (GM_Menu.get("JianShuShieldRecommendedReading")) {
            this.shieldRecommendedReading();
          }
        },
      },
      Mobile: {
        addCSS() {
          Optimization.jianshu.PC.addCSS();
        },
        /**
         * 手机-移除底部推荐阅读
         */
        removeFooterRecommendRead() {
          log.success("移除底部推荐阅读");
          GM_addStyle(`
          #recommended-notes{
            display: none !important;
          }`);
        },
        /**
         * 处理原型
         */
        handlePrototype() {
          log.success("处理原型添加script标签");
          let originalAppendChild = Node.prototype.appendChild;
          Node.prototype.appendChild = function (element) {
            /* 允许添加的元素localName */
            let allowElementLocalNameList = ["img"];
            /* 不允许script标签加载包括jianshu.io的js资源，会让简书跳到广告页面 */
            if (
              element.src &&
              !element.src.includes("jianshu.io") &&
              !allowElementLocalNameList.includes(element.localName)
            ) {
              log.success(["禁止添加的元素", element]);
              return null;
            } else {
              return originalAppendChild.call(this, element);
            }
          };
        },
        /**
         * 屏蔽评论区
         */
        shieldUserComments() {
          log.success("屏蔽评论区");
          GM_addStyle(`
          #comment-main{
            display: none !important;
          }
          `);
        },
        run() {
          this.handlePrototype();
          this.addCSS();
          Optimization.jianshu.PC.removeClipboardHijacking();
          Optimization.jianshu.PC.autoExpandFullText();
          if (GM_Menu.get("JianShuremoveFooterRecommendRead")) {
            this.removeFooterRecommendRead();
          }
          if (GM_Menu.get("JianShuShieldUserComments")) {
            this.shieldUserComments();
          }
        },
      },
      /**
       * 函数入口
       */
      run() {
        this.PC.jumpRedirect();
        if (utils.isPhone()) {
          log.success("简书-移动端");
          this.Mobile.run();
        } else {
          log.success("简书-桌面端");
          this.PC.run();
        }
      },
    },
    csdn: {
      /**
       * 判断是否是CSDN
       */
      locationMatch() {
        return Boolean(/csdn.net/i.test(window.location.origin));
      },
      PC: {
        addCSS() {
          GM_addStyle(`
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
            .guide-rr-first,
            #recommend-item-box-tow,
            /* 发文章得原力分图片提示 */
            div.csdn-toolbar-creative-mp,
            /* 阅读终点，创作起航，您可以撰写心得或摘录文章要点写篇博文。 */
            #toolBarBox div.write-guide-buttom-box,
            /* 觉得还不错? 一键收藏 */
            ul.toolbox-list div.tool-active-list,
            /* 右边按钮组的最上面的创作话题 */
            div.csdn-side-toolbar .activity-swiper-box,
            .sidetool-writeguide-box .tip-box{
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
          `);
        },
        /**
         * 去除剪贴板劫持
         */
        removeClipboardHijacking() {
          log.info("去除剪贴板劫持");
          document.querySelector(".article-copyright")?.remove();
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
        },
        /**
         * 取消禁止复制
         */
        unBlockCopy() {
          log.info("取消禁止复制");
          document.addEventListener("click", function (event) {
            let target = event.target;
            if (!target.classList.contains("hljs-button")) {
              return;
            }
            utils.preventEvent(event);
            /* 需要复制的文本 */
            let copyText = target.parentElement.textContent;
            utils.setClip(copyText);
            log.success("点击复制 复制成功~");
            target.setAttribute("data-title", "复制成功");
          });
          let changeDataTitle = new utils.LockFunction(function (event) {
            let target = event.target;
            if (!target.localName === "pre") {
              return;
            }
            target
              .querySelector(".hljs-button")
              ?.setAttribute("data-title", "复制");
          });

          document.addEventListener("mouseenter", changeDataTitle.run, true);
          document.addEventListener("mouseleave", changeDataTitle.run, true);
          /* 取消Ctrl+C的禁止 */
          utils.waitNode("#content_views").then((nodeList) => {
            unsafeWindow?.$("#content_views")?.unbind("copy");
            nodeList[0].addEventListener("copy", function (event) {
              utils.preventEvent(event);
              utils.setClip(unsafeWindow.getSelection().toString());
              log.success("Ctrl+C 复制成功~");
              return false;
            });
          });
          /* 删除所有复制按钮的原有的复制事件 */
          document.querySelectorAll(".hljs-button").forEach((item) => {
            item.removeAttribute("onclick");
          });
        },
        /**
         * 点击代码块自动展开
         */
        clickPreCodeAutomatically() {
          if (!GM_Menu.get("autoExpandContent")) {
            return;
          }
          log.info("点击代码块自动展开");
          document.addEventListener("click", function (event) {
            let target = event.target;
            if (target.localName !== "pre") {
              return;
            }
            target.style.setProperty("height", "auto");
            target.querySelector(".hide-preCode-box")?.remove();
          });
        },
        /**
         * 恢复评论到正确位置
         */
        restoreComments() {
          /* 第一条评论 */
          log.info("恢复评论到正确位置-第一条评论");
          utils.waitNode(".first-recommend-box").then((nodeList) => {
            let recommendBoxElement = document.querySelector(
              ".recommend-box.insert-baidu-box.recommend-box-style"
            );
            recommendBoxElement.insertBefore(
              nodeList[0],
              recommendBoxElement.firstChild
            );
          });
          log.info("恢复评论到正确位置-第二条评论");
          /* 第二条评论 */
          utils.waitNode(".second-recommend-box").then((nodeList) => {
            let recommendBoxElement = document.querySelector(
              ".recommend-box.insert-baidu-box.recommend-box-style"
            );
            recommendBoxElement.insertBefore(
              nodeList[0],
              recommendBoxElement.firstChild
            );
          });
        },
        /**
         * 标识CSDN下载的链接
         */
        identityCSDNDownload() {
          log.info("标识CSDN下载的链接");
          document
            .querySelectorAll(
              ".recommend-item-box[data-url*='https://download.csdn.net/']"
            )
            .forEach((item) => {
              if (GM_Menu.get("removeCSDNDownloadPC")) {
                item.remove();
              } else {
                item
                  .querySelector(".content-box")
                  .style.setProperty("border", "2px solid red");
              }
            });
        },
        /**
         * 全文居中
         */
        articleCenter() {
          if (!GM_Menu.get("articleCenter")) {
            return;
          }
          log.info("全文居中");
          GM_addStyle(`
          aside.blog_container_aside{
            display:none !important;
          }
          #mainBox main{
            width: inherit !important;
          }
          `);
          GM_addStyle(`
          @media (min-width: 1320px) and (max-width:1380px) {
            .nodata .container {
                width:900px !important
            }

            .nodata .container main {
                width: 900px
            }
        
            .nodata .container main #pcCommentBox pre >ol.hljs-ln {
                width: 490px !important
            }
        
            .nodata .container main .articleConDownSource {
                width: 500px
            }
          }
          
          @media screen and (max-width: 1320px) {
              .nodata .container {
                  width:760px !important
              }
      
              .nodata .container main {
                  width: 760px
              }
          
              .nodata .container main #pcCommentBox pre >ol.hljs-ln {
                  width: 490px !important
              }
          
              .nodata .container main .toolbox-list .tool-reward {
                  display: none
              }
          
              .nodata .container main .more-toolbox-new .toolbox-left .profile-box .profile-name {
                  max-width: 128px
              }
          
              .nodata .container main .articleConDownSource {
                  width: 420px
              }
          }
          
          @media screen and (min-width: 1380px) {
              .nodata .container {
                  width:1010px !important
              }
          
              .nodata .container main {
                  width: 1010px
              }
          
              .nodata .container main #pcCommentBox pre >ol.hljs-ln {
                  width: 490px !important
              }
          
              .nodata .container main .articleConDownSource {
                  width: 560px
              }
          }
          
          @media (min-width: 1550px) and (max-width:1700px) {
              .nodata .container {
                  width:820px !important
              }
          
              .nodata .container main {
                  width: 820px
              }
          
              .nodata .container main #pcCommentBox pre >ol.hljs-ln {
                  width: 690px !important
              }
          
              .nodata .container main .articleConDownSource {
                  width: 500px
              }
          }
          
          @media screen and (min-width: 1700px) {
              .nodata .container {
                  width:1010px !important
              }
          
              .nodata .container main {
                  width: 1010px
              }
          
              .nodata .container main #pcCommentBox pre >ol.hljs-ln {
                  width: 690px !important
              }
          
              .nodata .container main .articleConDownSource {
                  width: 560px
              }
          }
          `);
        },
        /**
         * 添加前往评论的按钮，在返回顶部的下面
         */
        addGotoRecommandButton() {
          log.info("添加前往评论的按钮，在返回顶部的上面");
          let gotoRecommandNode = document.createElement("a");
          gotoRecommandNode.className = "option-box";
          gotoRecommandNode.setAttribute("data-type", "gorecommand");
          gotoRecommandNode.innerHTML = `<span class="show-txt" style="display:flex;opacity:100;">前往<br>评论</span>`;
          gotoRecommandNode.addEventListener("click", function () {
            log.info("滚动到评论");
            let toolbarBoxElement = document.querySelector("#toolBarBox");
            let toolbarBoxOffsetTop =
              toolbarBoxElement.getBoundingClientRect().top + window.scrollY;
            let csdnToolBarElement = document.querySelector("#csdn-toolbar");
            let csdnToolBarStyles = window.getComputedStyle(csdnToolBarElement);
            let csdnToolBarHeight =
              csdnToolBarElement.clientHeight -
              parseFloat(csdnToolBarStyles.paddingTop) -
              parseFloat(csdnToolBarStyles.paddingBottom);
            unsafeWindow.$("html, body").animate(
              {
                scrollTop: toolbarBoxOffsetTop - csdnToolBarHeight - 8,
              },
              1000
            );
          });
          utils.waitNode(".csdn-side-toolbar").then(() => {
            let targetElement = document.querySelector(
              ".csdn-side-toolbar a:nth-last-child(2)"
            );
            targetElement.parentElement.insertBefore(
              gotoRecommandNode,
              targetElement.nextSibling
            );
          });
        },
        /**
         * 屏蔽登录弹窗
         */
        shieldLoginDialog() {
          if (GM_Menu.get("shieldLoginDialog")) {
            log.info("屏蔽登录弹窗");
            window.GM_CSS_GM_shieldLoginDialog = [
              GM_addStyle(
                `.passport-login-container{display: none !important;}`
              ),
            ];
          }
        },
        /**
         * 自动展开内容块
         */
        autoExpandContent() {
          if (!GM_Menu.get("autoExpandContent")) {
            return;
          }
          log.info("自动展开内容块");
          GM_addStyle(`
            pre.set-code-hide{
              height: auto !important;
            }
            pre.set-code-hide .hide-preCode-box{
              display: none !important;
            }
          `);
        },
        /**
         * 屏蔽右侧悬浮按钮
         */
        csdnShieldfloatingButton() {
          if (!GM_Menu.get("csdnShieldfloatingButton")) {
            return;
          }
          log.info("屏蔽右侧悬浮按钮");
          GM_addStyle(`
          div.csdn-side-toolbar{
            display: none !important;
          }
          `);
        },
        /**
         * 屏蔽底部推荐文章
         */
        csdnShieldBottomRecommendArticle() {
          if (!GM_Menu.get("csdnShieldBottomRecommendArticle")) {
            return;
          }
          log.info("屏蔽底部推荐文章");
          GM_addStyle(`
          main > div.recommend-box {
            display: none !important;
          }
          `);
        },
        /**
         * 屏蔽底部悬浮工具栏
         */
        csdnShieldBottomFloatingToolbar() {
          if (!GM_Menu.get("csdnShieldBottomFloatingToolbar")) {
            return;
          }
          log.info("屏蔽底部悬浮工具栏");
          GM_addStyle(`
          #toolBarBox {
            display: none !important;
          }
          `);
        },
        /**
         * 显示/隐藏目录
         */
        showOrHideDirectory() {
          if (GM_Menu.get("showOrHideDirectory")) {
            log.info("显示目录");
            GM_addStyle(`
            aside.blog_container_aside{
              display: none !important;
            }
            `);
          } else {
            log.info("隐藏目录");
            GM_addStyle(`
            aside.blog_container_aside{
              display: block !important;
            }
            `);
          }
        },
        /**
         * 显示/隐藏侧边栏
         */
        showOrHideSidebar() {
          if (GM_Menu.get("showOrHideSidebar")) {
            log.info("显示侧边栏");
            GM_addStyle(`
            #rightAsideConcision{
              display: none !important;
            }
            `);
          } else {
            log.info("隐藏侧边栏");
            GM_addStyle(`
            #rightAsideConcision{
              display: block !important;
            }
            `);
          }
        },
        /**
         * 去除CSDN拦截其它网址的url并自动跳转
         */
        jumpRedirect() {
          /* https://link.csdn.net/?target=https%3A%2F%2Fjaist.dl.sourceforge.net%2Fproject%2Fportecle%2Fv1.11%2Fportecle-1.11.zip */
          if (
            window.location.hostname === "link.csdn.net" &&
            window.location.search.startsWith("?target")
          ) {
            /* 禁止CSDN拦截跳转 */
            window.stop();
            let search = window.location.search.replace(/^\?target=/gi, "");
            search = decodeURIComponent(search);
            let newURL = search;
            log.success(`跳转链接 ${newURL}`);
            window.location.href = newURL;
          }
        },
        run() {
          this.addCSS();
          this.articleCenter();
          this.shieldLoginDialog();
          this.autoExpandContent();
          this.csdnShieldfloatingButton();
          this.csdnShieldBottomRecommendArticle();
          this.csdnShieldBottomFloatingToolbar();
          this.showOrHideDirectory();
          this.showOrHideSidebar();
          let that = this;
          let readyCallBack = function () {
            that.removeClipboardHijacking();
            that.unBlockCopy();
            that.identityCSDNDownload();
            that.clickPreCodeAutomatically();
            that.restoreComments();
            that.addGotoRecommandButton();
          };
          if (document.readyState !== "loading") {
            readyCallBack();
          } else {
            document.addEventListener("DOMContentLoaded", readyCallBack);
          }
        },
      },
      Mobile: {
        addCSS() {
          GM_addStyle(`
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
          div.aside-header-fixed,
          div.feed-Sign-weixin,
          div.ios-shadowbox{
            display:none !important;
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
          }`);
          GM_addStyle(`
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
          }`);
        },
        /**
         * 重构底部推荐
         */
        refactoringRecommendation() {
          log.info("重构底部推荐");
          function refactoring() {
            /* 反复执行的重构函数 */
            document.querySelectorAll(".container-fluid").forEach((item) => {
              var url = ""; /* 链接 */
              var title = ""; /* 标题 */
              var content = ""; /* 内容 */
              var img = ""; /* 图片 */
              var isCSDNDownload = false; /* 判断是否是CSDN资源下载 */
              var isCSDNEduDownload = false; /* 判断是否是CSDN-学院资源下载 */
              if (item.hasAttribute("data-url")) {
                /* 存在真正的URL */
                url = item.getAttribute("data-url");
                title = item.querySelector(
                  ".recommend_title div.left"
                ).innerHTML;
                content = item.querySelector(".text").innerHTML;
                if (item.querySelectorAll(".recommend-img").length) {
                  /* 如果有图片就加进去 */
                  item.querySelectorAll(".recommend-img").forEach((item2) => {
                    img += item2.innerHTML;
                  });
                }
              } else {
                log.info("节点上无data-url");
                url = item.querySelector("a[data-type]").getAttribute("href");
                title = item.querySelector(
                  ".recommend_title div.left"
                ).innerHTML;
                content = item.querySelector(".text").innerHTML;
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
                log.info("该链接为csdn资源下载");
                isCSDNDownload = true;
                title += `<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>`;
              } else if (_URL_.origin.match(/edu.csdn.net/gi)) {
                /* 该链接为csdn学院下载 */
                isCSDNEduDownload = true;
                log.info("该链接为csdn学院下载");
                title += `<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>`;
              }
              item.setAttribute("class", "GM-csdn-dl");
              item.setAttribute("data-url", url);
              item.innerHTML = `<div class="GM-csdn-title"><div class="left">${title}</div></div><div class="GM-csdn-content">${content}</div><div class="GM-csdn-img">${img}</div>`;
              item.addEventListener("click", function () {
                if (GM_Menu.get("openNewTab")) {
                  window.open(url, "_blank");
                } else {
                  window.location.href = url;
                }
              });
              if (
                (isCSDNDownload || isCSDNEduDownload) &&
                GM_Menu.get("removeCSDNDownloadMobile")
              ) {
                item.remove();
              }
            });
          }
          utils.waitNode("#recommend").then((nodeList) => {
            utils.mutationObserver(nodeList[0], {
              callback: () => {
                setTimeout(() => {
                  refactoring();
                }, 300);
              },
              config: { childList: true, subtree: true, attributes: true },
            });
          });
        },
        /**
         * 去除广告
         */
        removeAds() {
          log.info("去除广告");
          /* 登录窗口 */
          waitForElementToRemove(".passport-login-container");
          /* 打开APP */
          waitForElementToRemove(
            ".btn_open_app_prompt_box.detail-open-removed"
          );
          /* 广告 */
          waitForElementToRemove(".add-firstAd");
          /* 打开CSDN APP 小程序看全文 */
          waitForElementToRemove("div.feed-Sign-weixin");
          /* ios版本提示 */
          waitForElementToRemove("div.ios-shadowbox");
        },
        run() {
          this.addCSS();
          let that = this;
          let readyCallBack = function () {
            that.removeAds();
            that.refactoringRecommendation();
          };
          if (document.readyState !== "loading") {
            readyCallBack();
          } else {
            document.addEventListener("DOMContentLoaded", readyCallBack);
          }
        },
      },
      /**
       * 函数入口
       */
      run() {
        Optimization.csdn.PC.jumpRedirect();
        if (utils.isPhone()) {
          log.success("移动端模式");
          this.Mobile.run();
        } else {
          log.success("桌面端模式");
          this.PC.run();
        }
      },
    },
    huaWeiCSDN: {
      /**
       * 判断是否是CSDN
       */
      locationMatch() {
        return Boolean(/huaweicloud.csdn.net/i.test(window.location.origin));
      },
      PC: {
        addCSS() {
          GM_addStyle(`
          /* 底部免费抽xxx奖品广告 */
          div.siderbar-box,
          /* 华为开发者联盟加入社区 */
          div.user-desc.user-desc-fix,
          /* 点击阅读全文 */
          div.article-show-more{
            display: none !important;
          }

          /* 自动展开全文 */
          .main-content .user-article{
            height: auto !important;
            overflow: auto !important;
          }
          `);
        },
        run() {
          this.addCSS();
          this.huaweiCSDNShieldCloudDeveloperTaskChallengeEvent();
          this.huaweiCSDNShieldLeftFloatingButton();
          this.huaweiCSDNBlockRightColumn();
          this.huaweiCSDNBlockRecommendedContentAtTheBottom();
          this.huaweiCSDNShieldTheBottomForMoreRecommendations();
        },
        /**
         * 屏蔽云开发者任务挑战活动
         */
        huaweiCSDNShieldCloudDeveloperTaskChallengeEvent() {
          let GM_cookie = new utils.GM_Cookie();
          GM_cookie.set({ name: "show_join_group_index", value: 1 });
          log.success("屏蔽云开发者任务挑战活动");
        },
        /**
         * 屏蔽左侧悬浮按钮
         */
        huaweiCSDNShieldLeftFloatingButton() {
          if (!GM_Menu.get("huaweiCSDNShieldLeftFloatingButton")) {
            return;
          }
          log.success(
            "屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮"
          );
          GM_addStyle(`
          div.toolbar-wrapper.article-interact-bar{
            display: none !important;
          }`);
        },
        /**
         * 屏蔽右侧栏
         */
        huaweiCSDNBlockRightColumn() {
          if (!GM_Menu.get("huaweiCSDNBlockRightColumn")) {
            return;
          }
          log.success("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签");
          GM_addStyle(`
          div.page-home-right.dp-aside-right{
            display: none !important;
          }
          `);
        },
        /**
         * 屏蔽底部推荐内容
         */
        huaweiCSDNBlockRecommendedContentAtTheBottom() {
          if (!GM_Menu.get("huaweiCSDNBlockRecommendedContentAtTheBottom")) {
            return;
          }
          log.success("屏蔽底部推荐内容");
          GM_addStyle(`
          div.recommend-card-box{
            display: none !important;
          }`);
        },
        /**
         * 屏蔽底部更多推荐
         */
        huaweiCSDNShieldTheBottomForMoreRecommendations() {
          if (!GM_Menu.get("huaweiCSDNShieldTheBottomForMoreRecommendations")) {
            return;
          }
          log.success("屏蔽底部更多推荐");
          GM_addStyle(`
          div.more-article{
            display: none !important;
          }`);
        },
      },
    },
  };
  if (Optimization.huaWeiCSDN.locationMatch()) {
    GM_Menu = new utils.GM_Menu(
      {
        huaweiCSDNShieldCloudDeveloperTaskChallengeEvent: {
          text: "电脑-屏蔽云开发者任务挑战活动",
          enable: true,
          showText: (_text_, _enable_) => {
            return (_enable_ ? "✅" : "❌") + " " + _text_;
          },
          callback: () => {
            window.location.reload();
          },
        },
        huaweiCSDNShieldLeftFloatingButton: {
          text: "电脑-屏蔽左侧悬浮按钮",
          enable: false,
          title: "包括当前阅读量、点赞按钮、评论按钮、分享按钮",
          showText: (_text_, _enable_) => {
            return (_enable_ ? "✅" : "❌") + " " + _text_;
          },
          callback: () => {
            window.location.reload();
          },
        },
        huaweiCSDNBlockRightColumn: {
          text: "电脑-屏蔽右侧",
          enable: false,
          title: "包括相关产品-活动日历-运营活动-热门标签",
          showText: (_text_, _enable_) => {
            return (_enable_ ? "✅" : "❌") + " " + _text_;
          },
          callback: () => {
            window.location.reload();
          },
        },
        huaweiCSDNBlockRecommendedContentAtTheBottom: {
          text: "电脑-屏蔽底部推荐内容",
          enable: false,
          showText: (_text_, _enable_) => {
            return (_enable_ ? "✅" : "❌") + " " + _text_;
          },
          callback: () => {
            window.location.reload();
          },
        },
        huaweiCSDNShieldTheBottomForMoreRecommendations: {
          text: "电脑-屏蔽底部更多推荐",
          enable: false,
          showText: (_text_, _enable_) => {
            return (_enable_ ? "✅" : "❌") + " " + _text_;
          },
          callback: () => {
            window.location.reload();
          },
        },
      },
      false,
      GM_getValue,
      GM_setValue,
      GM_registerMenuCommand,
      GM_unregisterMenuCommand
    );
    Optimization.huaWeiCSDN.PC.run();
  } else if (Optimization.csdn.locationMatch()) {
    if (utils.isPhone()) {
      GM_Menu = new utils.GM_Menu(
        {
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
        },
        false,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
    } else {
      GM_Menu = new utils.GM_Menu(
        {
          removeCSDNDownloadPC: {
            text: "电脑-屏蔽底部推荐文章的CSDN下载",
            enable: false,
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
                window.GM_CSS_GM_shieldLoginDialog?.forEach((item) => {
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
          csdnShieldfloatingButton: {
            text: "电脑-屏蔽右侧悬浮按钮",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
            callback: () => {
              window.location.reload();
            },
          },
          csdnShieldBottomRecommendArticle: {
            text: "电脑-屏蔽底部推荐文章",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
            callback: () => {
              window.location.reload();
            },
          },
          csdnShieldBottomFloatingToolbar: {
            text: "电脑-屏蔽底部悬浮工具栏",
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
          showOrHideDirectory: {
            text: "电脑-显示目录",
            enable: false,
            showText: (_text_, _enable_) => {
              return _enable_ ? `⚙ 电脑-隐藏目录` : `⚙ ${_text_}`;
            },
            callback: (_key_, _enable_) => {
              window.location.reload();
            },
          },
          showOrHideSidebar: {
            text: "电脑-显示侧边栏",
            enable: false,
            showText: (_text_, _enable_) => {
              return _enable_ ? `⚙ 电脑-隐藏侧边栏` : `⚙ ${_text_}`;
            },
            callback: (_key_, _enable_) => {
              window.location.reload();
            },
          },
        },
        false,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
    }
    GM_Menu.add({
      gotoCSDNCKnow: {
        text: "⚙ 前往C知道",
        callback() {
          window.open("https://so.csdn.net/so/ai?", "_blank");
        },
      },
    });
    Optimization.csdn.run();
  } else if (Optimization.jianshu.locationMatch()) {
    if (utils.isPhone()) {
      GM_Menu = new utils.GM_Menu(
        {
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
          JianShuShieldUserComments: {
            text: "手机-屏蔽评论区",
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
            callback: () => {
              window.location.reload();
            },
          },
        },
        false,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
    } else {
      GM_Menu = new utils.GM_Menu(
        {
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
          JianShuShieldRelatedArticles: {
            text: "电脑-屏蔽相关文章",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
            callback: () => {
              window.location.reload();
            },
          },
          JianShuShieldUserComments: {
            text: "电脑-屏蔽评论区",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
            callback: () => {
              window.location.reload();
            },
          },
          JianShuShieldRecommendedReading: {
            text: "电脑-屏蔽推荐阅读",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
            callback: () => {
              window.location.reload();
            },
          },
        },
        false,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
    }

    Optimization.jianshu.run();
  }
})();
