// ==UserScript==
// @name         CSDN|简书优化
// @icon         https://www.csdn.net/favicon.ico
// @namespace    https://greasyfork.org/zh-CN/scripts/406136-csdn-简书优化
// @supportURL   https://greasyfork.org/zh-CN/scripts/406136-csdn-简书优化/feedback
// @version      0.6.8
// @description  支持手机端和PC端，屏蔽广告，优化浏览体验，自动跳转简书拦截URL
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
// @grant        GM_info
// @grant        unsafeWindow
// @run-at       document-start
// @require	     https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @require      https://greasyfork.org/scripts/449471-viewer/code/Viewer.js?version=1170654
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1211907
// ==/UserScript==

(function () {
  let log = new Utils.Log(GM_info);
  log.config({
    logMaxCount: 20,
    autoClearConsole: true,
  });
  /**
   * 因为在有些页面上，比如：简书，当插入style元素到head中，该页面清除该元素
   */
  let GM_addStyle = Utils.GM_addStyle;
  let GM_Menu = null;
  /**
   * 移除元素（未出现也可以等待出现）
   * @param {string} selectorText 元素选择器
   */
  let waitForElementToRemove = function (selectorText = "") {
    Utils.waitNode(selectorText).then((dom) => {
      dom.forEach((item) => {
        $(item).remove();
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
          #index-aside-download-qrbox{
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
          }`);
        },
        /**
         * 全文居中
         */
        articleCenter() {
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
          Utils.waitNode("div._gp-ck").then((dom) => {
            dom.forEach((item) => {
              item.style["width"] = "100%";
            });
          });
        },
        /**
         * 去除剪贴板劫持
         */
        removeClipboardHijacking() {
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
          Utils.waitNode(`div#homepage div[class*="dialog-"]`).then(
            (nodeList) => {
              nodeList[0].style["visibility"] = "hidden";
              Utils.mutationObserver(nodeList[0], {
                callback: (mutations) => {
                  if (mutations.length == 0) {
                    return;
                  }
                  if (mutations[0].target.style["display"] != "none") {
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
            }
          );
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
        run() {
          this.addCSS();
          this.removeClipboardHijacking();
          this.autoExpandFullText();
          if (GM_Menu.get("JianShuArticleCenter")) {
            this.articleCenter();
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
          GM_addStyle(`
          #recommended-notes{
            display: none !important;
          }`);
        },
        run() {
          this.addCSS();
          Optimization.jianshu.PC.removeClipboardHijacking();
          Optimization.jianshu.PC.autoExpandFullText();
          if (GM_Menu.get("JianShuremoveFooterRecommendRead")) {
            this.removeFooterRecommendRead();
          }
        },
      },
      /**
       * 函数入口
       */
      run() {
        this.PC.jumpRedirect();
        if (Utils.isPhone()) {
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
            #recommend-item-box-tow{
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
        },
        /**
         * 取消禁止复制
         */
        unBlockCopy() {
          log.info("取消禁止复制");
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
          /* 取消Ctrl+C的禁止 */
          Utils.waitNode("#content_views").then(() => {
            unsafeWindow.$("#content_views").unbind("copy");
            $("#content_views")
              .off("copy")
              .on("copy", function (event) {
                event?.preventDefault();
                event?.stopPropagation();
                Utils.setClip(unsafeWindow.getSelection().toString());
                return false;
              });
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
          $(document).on("click", "pre", function () {
            let clickNode = $(this);
            clickNode.css("height", "auto");
            clickNode.find(".hide-preCode-box")?.remove();
          });
        },
        /**
         * 恢复评论到正确位置
         */
        restoreComments() {
          /* 第一条评论 */
          log.info("恢复评论到正确位置-第一条评论");
          Utils.waitNode(".first-recommend-box").then((dom) => {
            $(".recommend-box.insert-baidu-box.recommend-box-style").prepend(
              $(dom)
            );
          });
          log.info("恢复评论到正确位置-第二条评论");
          /* 第二条评论 */
          Utils.waitNode(".second-recommend-box").then((dom) => {
            $(".recommend-box.insert-baidu-box.recommend-box-style").prepend(
              $(dom)
            );
          });
        },
        /**
         * 标识CSDN下载的链接
         */
        identityCSDNDownload() {
          log.info("标识CSDN下载的链接");
          $(".recommend-item-box[data-url*='https://download.csdn.net/']").each(
            (index, item) => {
              if (GM_Menu.get("removeCSDNDownloadPC")) {
                item.remove();
              } else {
                $(item).find(".content-box").css("border", "2px solid red");
              }
            }
          );
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
          let gotoRecommandNode = $(`
          <a class="option-box" data-type="gorecommand">
            <span class="show-txt" style="display:flex;opacity:100;">前往<br>评论</span>
          </a>
          `);
          $(gotoRecommandNode).on("click", function () {
            log.info("滚动到评论");
            $("html, body").animate(
              {
                scrollTop:
                  $("#toolBarBox").offset().top -
                  $("#csdn-toolbar").height() -
                  8,
              },
              1000
            );
          });
          Utils.waitNode(".csdn-side-toolbar").then(() => {
            $(".csdn-side-toolbar a").eq("-2").after(gotoRecommandNode);
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
          this.showOrHideDirectory();
          this.showOrHideSidebar();
          let that = this;
          $(document).ready(function () {
            that.removeClipboardHijacking();
            that.unBlockCopy();
            that.identityCSDNDownload();
            that.clickPreCodeAutomatically();
            that.restoreComments();
            that.addGotoRecommandButton();
          });
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
                log.info("节点上无data-url");
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
                log.info("该链接为csdn资源下载");
                isCSDNDownload = true;
                title += `<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>`;
              } else if (_URL_.origin.match(/edu.csdn.net/gi)) {
                /* 该链接为csdn学院下载 */
                isCSDNEduDownload = true;
                log.info("该链接为csdn学院下载");
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
          Utils.waitNode("#recommend").then((nodeList) => {
            Utils.mutationObserver(nodeList[0], {
              callback: () => {
                setTimeout(() => {
                  refactoring();
                }, 300);
              },
              config: { childList: true, subtree: true, attributes: true },
            });
          });

          this.recommendClickEvent();
        },
        /**
         * 设置底部推荐点击跳转事件
         */
        recommendClickEvent() {
          log.info("设置底部推荐点击跳转事件");
          $(document).on("click", ".GM-csdn-dl", function () {
            let url = $(this).attr("data-url");
            if (GM_Menu.get("openNewTab")) {
              window.open(url, "_blank");
            } else {
              window.location.href = url;
            }
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
          $(document).ready(function () {
            that.removeAds();
            that.refactoringRecommendation();
          });
        },
      },
      /**
       * 函数入口
       */
      run() {
        Optimization.csdn.PC.jumpRedirect();
        if (Utils.isPhone()) {
          log.success("移动端模式");
          this.Mobile.run();
        } else {
          log.success("桌面端模式");
          this.PC.run();
        }
      },
    },
  };

  if (Optimization.csdn.locationMatch()) {
    if (Utils.isPhone()) {
      GM_Menu = new Utils.GM_Menu(
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
      GM_Menu = new Utils.GM_Menu(
        {
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
    Optimization.csdn.run();
  } else if (Optimization.jianshu.locationMatch()) {
    if (Utils.isPhone()) {
      GM_Menu = new Utils.GM_Menu(
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
        },
        false,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
    } else {
      GM_Menu = new Utils.GM_Menu(
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
