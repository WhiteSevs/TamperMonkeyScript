// ==UserScript==
// @name         CSDN|简书优化
// @icon         https://www.csdn.net/favicon.ico
// @namespace    https://greasyfork.org/zh-CN/scripts/406136
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @version      2023.12.16
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
// @require      https://update.greasyfork.org/scripts/449471/1249086/Viewer.js
// @require      https://update.greasyfork.org/scripts/456485/1296731/pops.js
// @require      https://update.greasyfork.org/scripts/455186/1295728/WhiteSevsUtils.js
// @require      https://update.greasyfork.org/scripts/465772/1296704/DOMUtils.js
// ==/UserScript==

(function () {
  /**
   * @type {import("../库/pops")}
   */
  const pops = window.pops;
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
  /**
   * 菜单
   */
  let GM_Menu = new utils.GM_Menu({
    GM_getValue,
    GM_setValue,
    GM_registerMenuCommand,
    GM_unregisterMenuCommand,
  });
  /**
   * 移除元素（未出现也可以等待出现）
   * @param {string} selectorText 元素选择器
   */
  const waitForElementToRemove = function (selectorText = "") {
    utils.waitNodeList(selectorText).then((nodeList) => {
      nodeList.forEach((item) => {
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
          utils.waitNodeList("div._gp-ck").then((nodeList) => {
            nodeList.forEach((item) => {
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
            .then((element) => {
              element.style["visibility"] = "hidden";
              utils.mutationObserver(element, {
                callback: (mutations) => {
                  if (mutations.length == 0) {
                    return;
                  }
                  if (mutations.target.style["display"] != "none") {
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
          if (PopsPanel.getValue("JianShuArticleCenter")) {
            this.articleCenter();
          }
          if (PopsPanel.getValue("JianShuShieldRelatedArticles")) {
            this.shieldRelatedArticles();
          }
          if (PopsPanel.getValue("JianShuShieldUserComments")) {
            this.shieldUserComments();
          }
          if (PopsPanel.getValue("JianShuShieldRecommendedReading")) {
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
          if (PopsPanel.getValue("JianShuremoveFooterRecommendRead")) {
            this.removeFooterRecommendRead();
          }
          if (PopsPanel.getValue("JianShuShieldUserCommentsMobile")) {
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
            .comment-list-box,
            main div.blog-content-box pre{
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
         * 添加在wenku.csdn.net下的CSS
         */
        addWenKuCSS() {
          GM_addStyle(`
          /* wenku顶部横幅 */
          #app > div > div.main.pb-32 > div > div.top-bar,
          /* 底部展开全文 */
          #chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open{
            display: none !important;
          }
          #chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid{
            max-height: unset !important;
            height: auto !important;
            overflow: auto !important;
          }
          `);
          GM_addStyle(`
          .forbid{
            user-select: text !important;
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
          utils.waitNode("#content_views").then((element) => {
            unsafeWindow?.$("#content_views")?.unbind("copy");
            element.addEventListener("copy", function (event) {
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
          if (!PopsPanel.getValue("autoExpandContent")) {
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
          utils.waitNode(".first-recommend-box").then((element) => {
            let recommendBoxElement = document.querySelector(
              ".recommend-box.insert-baidu-box.recommend-box-style"
            );
            recommendBoxElement.insertBefore(
              element,
              recommendBoxElement.firstChild
            );
          });
          log.info("恢复评论到正确位置-第二条评论");
          /* 第二条评论 */
          utils.waitNode(".second-recommend-box").then((element) => {
            let recommendBoxElement = document.querySelector(
              ".recommend-box.insert-baidu-box.recommend-box-style"
            );
            recommendBoxElement.insertBefore(
              element,
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
              if (PopsPanel.getValue("removeCSDNDownloadPC")) {
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
          if (!PopsPanel.getValue("articleCenter")) {
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
            window.scrollTo({
              top: toolbarBoxOffsetTop - csdnToolBarHeight - 8,
              left: 0,
              behavior: "smooth",
            });
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
          if (PopsPanel.getValue("shieldLoginDialog")) {
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
          if (!PopsPanel.getValue("autoExpandContent")) {
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
          if (!PopsPanel.getValue("csdnShieldfloatingButton")) {
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
          if (!PopsPanel.getValue("csdnShieldBottomRecommendArticle")) {
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
          if (!PopsPanel.getValue("csdnShieldBottomFloatingToolbar")) {
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
          if (PopsPanel.getValue("showOrHideDirectory")) {
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
          if (PopsPanel.getValue("showOrHideSidebar")) {
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
        /**
         * C知道
         */
        cKnow() {
          if (!window.location.href.startsWith("https://so.csdn.net/so/ai")) {
            return;
          }
          if (PopsPanel.getValue("csdn_pc_cknow")) {
            GM_addStyle(`
              div.username_mask_cover{
                background-image: none !important;
              }
            `);
          }
        },
        run() {
          this.addCSS();
          this.cKnow();
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
          DOMUtils.ready(readyCallBack);
          if (window.location.hostname === "wenku.csdn.net") {
            this.addWenKuCSS();
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
          }`);
        },
        /**
         * 重构底部推荐
         */
        refactoringRecommendation() {
          function refactoring() {
            /* 反复执行的重构函数 */
            log.success("重构底部推荐");
            document.querySelectorAll(".container-fluid").forEach((item) => {
              /* 链接 */
              let url = "";
              /* 标题 */
              let title = "";
              /* 内容 */
              let content = "";
              /* 图片 */
              let img = "";
              /* 判断是否是CSDN资源下载 */
              let isCSDNDownload = false;
              /* 判断是否是CSDN-学院资源下载 */
              let isCSDNEduDownload = false;
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
              var _URL_ = new URL(url);
              if (
                _URL_.host === "download.csdn.net" ||
                (_URL_.host === "www.iteye.com" &&
                  _URL_.pathname.match(/^\/resource/gi))
              ) {
                /* 该链接为csdn资源下载 */
                log.info("该链接为csdn资源下载");
                isCSDNDownload = true;
                title =
                  `<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>` +
                  title;
              } else if (_URL_.origin.match(/edu.csdn.net/gi)) {
                /* 该链接为csdn学院下载 */
                isCSDNEduDownload = true;
                log.info("该链接为csdn学院下载");
                title =
                  `<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>` +
                  title;
              }
              item.setAttribute("class", "GM-csdn-dl");
              item.setAttribute("data-url", url);
              item.innerHTML = `<div class="GM-csdn-title"><div class="left">${title}</div></div><div class="GM-csdn-content">${content}</div><div class="GM-csdn-img">${img}</div>`;
              item.addEventListener("click", function () {
                if (PopsPanel.getValue("openNewTab")) {
                  window.open(url, "_blank");
                } else {
                  window.location.href = url;
                }
              });
              if (
                (isCSDNDownload || isCSDNEduDownload) &&
                PopsPanel.getValue("removeCSDNDownloadMobile")
              ) {
                item.remove();
              }
            });
          }
          let lockFunction = new utils.LockFunction(refactoring, this, 50);
          utils.waitNode("#recommend").then((element) => {
            lockFunction.run();
            utils.mutationObserver(element, {
              callback: lockFunction.run,
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
        /**
         * C知道
         */
        cKnow() {
          if (!window.location.href.startsWith("https://so.csdn.net/so/ai")) {
            return;
          }
          if (PopsPanel.getValue("csdn_mobile_cknow")) {
            GM_addStyle(`
              div.username_mask_cover{
                background-image: none !important;
              }
            `);
          }
        },
        run() {
          this.addCSS();
          this.cKnow();
          let that = this;
          let readyCallBack = function () {
            that.removeAds();
            that.refactoringRecommendation();
          };
          DOMUtils.ready(readyCallBack);
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
          if (!PopsPanel.getValue("huaweiCSDNShieldLeftFloatingButton")) {
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
          if (!PopsPanel.getValue("huaweiCSDNBlockRightColumn")) {
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
          if (
            !PopsPanel.getValue("huaweiCSDNBlockRecommendedContentAtTheBottom")
          ) {
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
          if (
            !PopsPanel.getValue(
              "huaweiCSDNShieldTheBottomForMoreRecommendations"
            )
          ) {
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
          key: "transfer_old_data",
          text: "🔧 迁移旧数据",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.transferOldData();
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
     * @param {any} defaultValue 默认值
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
          text: `${GM_info?.script?.name || "CSDN|简书优化"}-设置`,
          position: "center",
        },
        content: this.getContent(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
          },
        },
        width: pops.isPhone() ? "92vw" : "800px",
        height: pops.isPhone() ? "80vh" : "600px",
        only: true,
        drag: true,
      });
    },
    /**
     * 获取按钮配置
     * @param {string} text
     * @param {string} key
     * @param {boolean} defaultValue
     * @param {?(event:Event,value: boolean)=>boolean} _callback_
     */
    getSwtichDetail(text, key, defaultValue, _callback_) {
      let result = {
        text: text,
        type: "switch",
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
          PopsPanel.setValue(key, value);
        },
      };
      result.attributes[this.attributeDataKey_Name] = key;
      result.attributes[this.attributeDataDefaultValue_Name] =
        Boolean(defaultValue);
      return result;
    },
    /**
     * 获取配置内容
     */
    getContent() {
      return [
        {
          id: "csdn-panel-config-pc",
          title: "CSDN-桌面端",
          forms: [
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "登录弹窗",
                  "shieldLoginDialog",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "底部的CSDN下载文章",
                  "removeCSDNDownloadPC",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "右侧悬浮按钮",
                  "csdnShieldfloatingButton",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "底部的推荐文章",
                  "csdnShieldBottomRecommendArticle",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "底部的悬浮工具栏",
                  "csdnShieldBottomFloatingToolbar",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "C知道的背景水印",
                  "csdn_pc_cknow",
                  false
                ),
              ],
            },
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail("全文居中", "articleCenter", true),
                PopsPanel.getSwtichDetail(
                  "自动展开内容块",
                  "autoExpandContent",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "显示目录",
                  "showOrHideDirectory",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "显示侧边栏",
                  "showOrHideSidebar",
                  false
                ),
              ],
            },
          ],
        },
        {
          id: "csdn-panel-config-mobile",
          title: "CSDN-移动端",
          forms: [
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "底部的CSDN下载文章",
                  "removeCSDNDownloadMobile",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "C知道的背景水印",
                  "csdn_mobile_cknow",
                  false
                ),
              ],
            },
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "底部文章新标签页打开",
                  "openNewTab",
                  true
                ),
              ],
            },
          ],
        },
        {
          id: "csdn-panel-config-huawei",
          title: "CSDN-华为",
          forms: [
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "云开发者任务挑战活动",
                  "huaweiCSDNShieldCloudDeveloperTaskChallengeEvent",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "左侧悬浮按钮",
                  "huaweiCSDNShieldLeftFloatingButton",
                  false,
                  function (event, enable) {
                    if (enable) {
                      alert(
                        "开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】"
                      );
                    }
                  }
                ),
                PopsPanel.getSwtichDetail(
                  "右侧",
                  "huaweiCSDNShieldLeftFloatingButton",
                  false,
                  function (event, enable) {
                    if (enable) {
                      alert(
                        "开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】"
                      );
                    }
                  }
                ),
                PopsPanel.getSwtichDetail(
                  "底部推荐内容",
                  "huaweiCSDNBlockRecommendedContentAtTheBottom",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "底部更多推荐",
                  "huaweiCSDNShieldTheBottomForMoreRecommendations",
                  false
                ),
              ],
            },
          ],
        },
        {
          id: "jianshu-panel-config-pc",
          title: "简书-桌面端",
          forms: [
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "推荐阅读",
                  "JianShuShieldRecommendedReading",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "评论区",
                  "JianShuShieldUserComments",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "相关文章",
                  "JianShuShieldRelatedArticles",
                  false
                ),
              ],
            },
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "全文居中",
                  "JianShuArticleCenter",
                  true
                ),
              ],
            },
          ],
        },
        {
          id: "jianshu-panel-config-mobile",
          title: "简书-移动端",
          forms: [
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "底部推荐阅读",
                  "JianShuremoveFooterRecommendRead",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "评论区",
                  "JianShuShieldUserCommentsMobile",
                  false
                ),
              ],
            },
          ],
        },
      ];
    },
    /**
     * 迁移旧数据
     */
    transferOldData() {
      let oldData = GM_getValue("GM_Menu_Local_Map");
      let currentData = GM_getValue(this.key, {});
      if (oldData) {
        Object.assign(currentData, oldData);
        GM_setValue(this.key, currentData);
        GM_deleteValue("GM_Menu_Local_Map");
        alert("共迁移数据量：" + Object.keys(oldData).length);
      } else {
        alert("不存在旧数据");
      }
    },
  };

  PopsPanel.initMenu();

  if (Optimization.huaWeiCSDN.locationMatch()) {
    Optimization.huaWeiCSDN.PC.run();
  } else if (Optimization.csdn.locationMatch()) {
    GM_Menu.add({
      key: "gotoCSDNCKnow",
      text: "⚙ 前往C知道",
      autoReload: false,
      showText(text) {
        return text;
      },
      callback() {
        window.open("https://so.csdn.net/so/ai?", "_blank");
      },
    });
    Optimization.csdn.run();
  } else if (Optimization.jianshu.locationMatch()) {
    Optimization.jianshu.run();
  }
})();
