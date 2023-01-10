// ==UserScript==
// @name         CSDN|简书优化
// @namespace    http://tampermonkey.net/
// @version      0.4.7
// @description  支持手机端和PC端
// @author       MT-戒酒的李白染
// @include      http*://www.csdn.net/*
// @include      http*://bbs.csdn.net/*
// @include      http*://www.jianshu.com/*
// @include      http*://*blog.csdn.net/*
// @include      http*://download.csdn.net/*
// @include      http*://huaweicloud.csdn.net/*
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        unsafeWindow
// @run-at       document-start
// @require	     https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1135447
// @require      https://greasyfork.org/scripts/449471-viewer/code/Viewer.js?version=1081056
// ==/UserScript==

(function () {
  "use strict";
  var GM_menu = {
    data: [
      ["menu_showRedirect", "手机csdn显示Redirect", true],
      ["menu_thistab", "手机csdn新页面打开", true],
    ],
    init: function () {
      /* 初始化数据 */
      let _this_ = this;
      Array.from(this.data).forEach((item, index) => {
        let menuKey = item[0];
        let menuValue = GM_getValue(menuKey);
        if (menuValue == null) {
          GM_setValue(menuKey, true);
          menuValue = GM_getValue(menuKey);
        }
        _this_.data[index][item.length - 1] = menuValue;
      });
    },
    register: function () {
      /* 注册油猴菜单 */
      Array.from(this.data).forEach((item) => {
        let menuKey = item[0];
        let menuName = item[1];
        let menuValue = item[2];
        let menuShowName = "[" + (menuValue ? "√" : "×") + "]" + menuName;
        GM_registerMenuCommand(menuShowName, function () {
          if (menuValue) {
            GM_setValue(menuKey, false);
          } else {
            GM_setValue(menuKey, true);
          }
          window.location.reload();
        });
      });
    },
  };

  function JianShu() {
    /* 简书 */
    function isJianShu() {
      /* 判断是否是 简书 */
      return Boolean(/jianshu.com/i.test(window.location.origin));
    }
    function PC() {
      console.log("简书");
      const css = `
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
      .nav.navbar-nav + div{
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
      `;
      GM_addStyle(css);
      Utils.waitForDOM('div#homepage div[class*="dialog-"]').then((dom) => {
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
    }
    if (isJianShu()) {
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
      console.log("CSDN-移动端");
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
      div.btn_open_app_prompt_div{
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
      #content_views pre.set-code-hide{
        height: 100% !important;
        overflow-y: auto !important;
      }
      `;
      GM_addStyle(css);
      function replace_all_commend() {
        //替换所有的推荐
        var commend_list = $(".container-fluid");
        for (var coml = 0; coml < commend_list.length; coml++) {
          let current_commend_className =
            commend_list[coml].getAttribute("class");
          let current_commend_url = "";
          let current_commend_title = "";
          let current_commend_content = "";
          let current_commend_img = "";
          if (commend_list[coml].getAttribute("data-url")) {
            //有data-url 就有recommend_title
            /* console.log("有 data-url"); */
            current_commend_url = commend_list[coml].getAttribute("data-url");
            current_commend_title = $(commend_list[coml])
              .find(".recommend_title")
              .html();
            current_commend_content = $(commend_list[coml])
              .find(".text")
              .html();
            // current_commend_title = commend_list[coml].getElementsByClassName("recommend_title")[0].innerHTML;
            // current_commend_content = commend_list[coml].getElementsByClassName("text active")[0].innerHTML;
            let current_commend_img_dom = $(commend_list[coml]).find(
              ".recommend-img"
            );
            if (current_commend_img_dom.length) {
              for (
                var imgs = 0;
                imgs < current_commend_img_dom.length;
                imgs++
              ) {
                current_commend_img =
                  current_commend_img + current_commend_img_dom[imgs].innerHTML;
              }
            }
          } else {
            /* console.log("没有data-url"); */
            current_commend_url =
              commend_list[coml].getElementsByTagName("a")[0].href;
            current_commend_title =
              commend_list[coml].getElementsByTagName("a")[0].innerHTML;
            current_commend_content =
              commend_list[coml].getElementsByClassName("text")[0].innerHTML;
            current_commend_img = "";
          }
          /* console.log("真实url：", current_commend_url); */
          if (GM_menu.data[0][2]) {
            current_commend_title =
              current_commend_title +
              `<div class="GM-csdn-Redirect">Redirect</div>`;
          }
          if (
            current_commend_url.match(
              /http(s|):\/\/(download.csdn.net|www.iteye.com\/resource)/g
            )
          ) {
            console.log("该链接为csdn资源下载，标识");
            current_commend_title =
              current_commend_title +
              `<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>`;
          } else if (current_commend_url.match(/edu.csdn.net/g)) {
            console.log("该链接为csdn学院下载，标识");
            current_commend_title =
              current_commend_title +
              `<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>`;
          }
          commend_list[coml].className = "GM-csdn-dl";
          commend_list[coml].setAttribute("data-url", current_commend_url);
          commend_list[coml].innerHTML =
            `<div class="GM-csdn-title">` +
            current_commend_title +
            "</div>" +
            `<div class="GM-csdn-content">` +
            current_commend_content +
            "</div>" +
            `<div class="GM-csdn-img">` +
            current_commend_img +
            "</div>";
          $("#recommend")
            .find(".recommend_list")
            .before($("#first_recommend_list").find("dl").parent().html());
          $("#first_recommend_list")?.remove();
        }
      }

      function new_commend_event() {
        //新的推荐跳转事件
        $(".GM-csdn-dl").bind("click", function (e) {
          let current_click_url = e.currentTarget.dataset.url;
          if (GM_menu.data[1][2]) {
            window.open(current_click_url);
          } else {
            window.location.href = current_click_url;
          }
        });
      }

      function auto_review() {
        //自动展开
        $(".article_content")?.removeAttr("style");
        $(".readall_box")?.show();
        $(".readall_box")?.addClass("readall_box_nobg");
        $(".readall_box")?.hide();
        $(".readall_box")?.addClass("readall_box_nobg");
        $(".detail-open-app-isshow")?.css("display", "block");
        $(".isshow-mask-lock-box")?.show();
      }
      function removeElement() {
        /* 移除一些元素 */
        $(".passport-login-container")?.remove();
      }

      $(document).ready(function () {
        var csdn_interval_runum = 0;
        var csdn_interval = setInterval(function () {
          csdn_interval_runum = csdn_interval_runum + 1;
          console.log("展开");
          if (csdn_interval_runum <= 5) {
            auto_review();
            removeElement();
          } else {
            clearInterval(csdn_interval);
          }
        }, 200);
        var loding_comment_dom_num = 0;
        var loding_comment_dom = setInterval(function () {
          loding_comment_dom_num = loding_comment_dom_num + 1;
          if (loding_comment_dom_num <= 5) {
            try {
              replace_all_commend();
            } catch (err) {
              console.log("替换底部链接失败", err);
            }
          } else {
            clearInterval(loding_comment_dom);
            new_commend_event();
          }
        }, 500);
      });
    }
    function PC() {
      /* 桌面端 */
      console.log("CSDN-桌面端访问");
      const css = `
      .ecommend-item-box.recommend-recommend-box,
      .login-mark,
      .opt-box.text-center,
      .leftPop,
      #csdn-shop-window,
      #passportbox,
      .passport-login-container,
      .toolbar-advert,
      .hide-article-box,
      .user-desc.user-desc-fix,
      .recommend-card-box,
      .more-article,
      .article-show-more{
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
      #content_views pre code{
          user-select: text !important;
      }
      #article_content,
      .user-article.user-article-hide{
        height: auto !important;
        overflow: auto !important;
      }
  `;
      function UnblockCopy(dom) {
        /* 取消禁止复制 */
        if (dom.length) {
          $(".hljs-button.signin").attr("data-title", "复制");
          $(".hljs-button.signin").on("click", function () {
            const copyBtn = $(this);
            const copyArea = $(this).parent();
            copyBtn.attr("data-title", "复制成功");
            const btnParentElement = Utils.findParentDOM(this, (dom) => {
              return dom.className == "prettyprint" ? true : false;
            });
            if (btnParentElement) {
              $(btnParentElement).bind({
                mouseenter: function (e) {
                  copyBtn.attr("data-title", "复制");
                  $(btnParentElement).unbind("mouseenter").unbind("mouseleave");
                },
                mouseleave: function (e) {
                  copyBtn.attr("data-title", "复制");
                  $(btnParentElement).unbind("mouseenter").unbind("mouseleave");
                },
              });
            }
            Utils.setClip(copyArea.text());
          });
        }
      }
      function clickPreCodeAutoPreview() {
        /* 点击代码块自动展开 */
        $("pre[data-index]").on("click", function () {
          let obj = $(this);
          obj.css("height", "auto");
          obj.find(".hide-preCode-box")?.remove();
        });
      }
      GM_addStyle(css);
      $(document).ready(function () {
        unsafeWindow.articleType = 0;
        unsafeWindow.csdn.copyright.textData = undefined;
        unsafeWindow.csdn.copyright.htmlData = undefined;
        $(".article-copyright")?.remove();
        Utils.waitForDOM(".hljs-button.signin").then((dom) => {
          UnblockCopy(dom);
        });
        $(".recommend-item-box[data-url*='https://download.csdn.net/']").each(
          (index, item) => {
            $(item).find(".content-box").css("border", "2px solid red");
          }
        );
        clickPreCodeAutoPreview();
      });
    }

    if (isCSDN()) {
      if (Utils.isPhone()) {
        Mobile();
      } else {
        PC();
      }
    }
  }

  GM_menu.init();
  GM_menu.register();

  JianShu();
  CSDN();
})();
