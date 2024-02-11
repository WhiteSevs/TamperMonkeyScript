// ==UserScript==
// @name        【移动端】小红书优化
// @namespace    https://greasyfork.org/zh-CN/users/521923-whitesevs
// @icon         https://fe-video-qc.xhscdn.com/fe-platform/ed8fe781ce9e16c1bfac2cd962f0721edabe2e49.ico
// @version      2024.2.11
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @author       WhiteSevs
// @license      GPL-3.0-only
// @match        http*://www.xiaohongshu.com/*
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
// @connect      edith.xiaohongshu.com
// @require      https://update.greasyfork.org/scripts/449471/1305484/Viewer.js
// @require      https://update.greasyfork.org/scripts/462234/1322684/Message.js
// @require      https://update.greasyfork.org/scripts/456485/1324038/pops.js
// @require      https://update.greasyfork.org/scripts/455186/1325839/WhiteSevsUtils.js
// @require      https://update.greasyfork.org/scripts/465772/1318702/DOMUtils.js
// ==/UserScript==

(function () {
  /* -----------------↓公共配置↓----------------- */
  /**
   * @type {import("../库/Qmsg")}
   */
  const Qmsg = window.Qmsg;
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
  Qmsg.config({
    position: "bottom",
    html: true,
    maxNums: 5,
    autoClose: true,
    showClose: false,
    showReverse: false,
  });
  const log = new utils.Log(GM_info);
  log.config({
    debug: false,
  });
  const httpx = new utils.Httpx(GM_xmlhttpRequest);
  httpx.config({
    onabort() {
      Qmsg.error("请求被取消");
    },
    ontimeout() {
      Qmsg.error("请求超时");
    },
    onerror(response) {
      Qmsg.error("请求异常");
      log.error(["httpx-onerror", response]);
    },
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
  /* -----------------↑公共配置↑----------------- */

  /* 小红书屏蔽 */
  const littleRedBookShield = {
    /**
     * 屏蔽广告
     */
    shieldAd() {
      GM_addStyle(`
        /* 底部的App内打开 */
        .bottom-button-box,
        /* 顶部的打开看看 */
        .nav-bar-box{
          display: none !important;
        }

        /* 视频笔记 */
        /* 底部评论区的- 打开小红书查看全部评论  */
        #new-note-view-container .comment-box .comment-items .button-launch{
          display: none !important;
        }
        
        /* 用户主页 */
        /* 底部的-App内打开 */
        .launch-app-container.bottom-bar,
        /* 顶部的-打开看看 */
        .main-container > .scroll-view-container > .launch-app-container:first-child,
        /* 底部的-打开小红书看更多精彩内容 */
        .bottom-launch-app-tip.show-bottom-bar{
          display: none !important;
        }
        `);
      if (
        littleRedBookRouter.isHomePage() ||
        littleRedBookRouter.isSearchPage()
      ) {
        /* 首页 */
        GM_addStyle(`
        /* 底部的-App内打开 */
        .container .launch-app-container,
        /* 顶部的视频 */
        .container .banner{
          display: none !important;
        }
        `);
      }
    },
    /**
     * 允许复制
     */
    allowCopy() {
      GM_addStyle(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `);
    },
    /**
     * 屏蔽底部搜索发现
     */
    shieldBottomSearchFind() {
      GM_addStyle(`
        .hotlist-container,
        /* 一大块空白区域 */
        .safe-area-bottom.margin-placeholder{
            display: none !important;
        }
        `);
    },
    /**
     * 屏蔽底部工具栏
     */
    shieldBottomToorBar() {
      GM_addStyle(`
        .engage-bar-container{
            display: none !important;
        }
        `);
    },
    /**
     * 屏蔽视频笔记的作者热门笔记
     */
    shieldAuthorHotNote() {
      GM_addStyle(`
      .user-notes-box.user-notes-clo-layout-container{
        display: none !important;
      }
      `);
    },
    /**
     * 屏蔽视频笔记的热门推荐
     */
    shieldHotRecommendNote() {
      GM_addStyle(`
      #new-note-view-container .recommend-box{
        display: none !important;
      }
      `);
    },
  };
  /* 小红书api */
  const littleRedBookApi = {
    /**
     * 获取页信息
     * @returns {Promise<?{
     * comments: any[],
     * cursor: string,
     * has_more: boolean,
     * time: number,
     * user_id: string,
     * }>}
     */
    async getPageInfo(
      note_id,
      cursor = "",
      top_comment_id = "",
      image_formats = "jpg,webp"
    ) {
      let getResp = await httpx.get(
        `https://edith.xiaohongshu.com/api/sns/web/v2/comment/page?note_id=${note_id}&cursor=${cursor}&top_comment_id=${top_comment_id}&image_formats=${image_formats}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "User-Agent": utils.getRandomPCUA(),
            Origin: "https://www.xiaohongshu.com",
            Referer: "https://www.xiaohongshu.com/",
            "X-T": Date.now(),
          },
        }
      );
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      log.info(["获取页信息", data]);
      if (data["code"] === 0 || data["success"]) {
        return data["data"];
      } else {
        Qmsg.error(data["msg"]);
      }
    },
    /**
     * 获取楼中楼页信息
     * @returns {Promise<?{
     * comments: any[],
     * cursor: string,
     * has_more: boolean,
     * time: number,
     * user_id: string,
     * }>}
     */
    async getLzlPageInfo(
      note_id = "",
      root_comment_id = "",
      num = 10,
      cursor = "",
      image_formats = "jpg,webp"
    ) {
      let getResp = await httpx.get(
        `https://edith.xiaohongshu.com/api/sns/web/v2/comment/sub/page?note_id=${note_id}&root_comment_id=${root_comment_id}&num=${num}&cursor=${cursor}&image_formats=${image_formats}`,
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "User-Agent": utils.getRandomPCUA(),
            Origin: "https://www.xiaohongshu.com",
            Referer: "https://www.xiaohongshu.com/",
            "X-T": Date.now(),
          },
        }
      );
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      log.info(["获取楼中楼页信息", data]);
      if (data["code"] === 0 || data["success"]) {
        return data["data"];
      } else {
        Qmsg.error(data["msg"]);
      }
    },
  };
  /* 小红书router */
  const littleRedBookRouter = {
    /**
     * 判断是否是笔记页面
     */
    isNotePage() {
      return globalThis.location.pathname.startsWith("/discovery/item/");
    },
    /**
     * 判断是否是用户主页页面
     */
    isUserHomePage() {
      return globalThis.location.pathname.startsWith("/user/profile/");
    },
    /**
     * 判断是否是主页
     */
    isHomePage() {
      return (
        globalThis.location.href === "https://www.xiaohongshu.com/" ||
        globalThis.location.href === "https://www.xiaohongshu.com"
      );
    },
    /**
     * 判断是否是搜索页面
     */
    isSearchPage() {
      return globalThis.location.pathname.startsWith("/search_result/");
    },
  };
  /* 小红书业务 */
  const littleRedBookBusiness = {
    /**
     * 优化评论浏览
     */
    optimizeCommentBrowsing() {
      /* 评论 */
      const Comments = {
        QmsgLoading: undefined,
        scrollFunc: undefined,
        noteData: {},
        commentData: {},
        emojiMap: {},
        emojiNameList: [],
        currentCursor: undefined,
        commentContainer: undefined,
        init() {
          /* emoji数据 */
          this.emojiMap =
            utils.toJSON(unsafeWindow.localStorage.getItem("redmoji"))?.[
              "redmojiMap"
            ] || {};
          /* emoji的名字数组 */
          this.emojiNameList = Object.keys(this.emojiMap);
          /* 滚动事件 */
          this.scrollFunc = new utils.LockFunction(this.scrollEvent, this);
          /* 笔记数据 */
          Comments.noteData =
            unsafeWindow["__INITIAL_STATE__"].noteData.data.noteData;
          /* 评论数据 */
          Comments.commentData =
            unsafeWindow["__INITIAL_STATE__"].noteData.data.commentData;
          log.info(["笔记数据", Comments.noteData]);
          log.info(["评论数据", Comments.commentData]);
        },
        /**
         *
         * @param {{
         * user_id: string,
         * user_avatar: string,
         * user_nickname: string,
         * content: string,
         * create_time: string|number,
         * ip_location: string
         * }} data
         * @returns
         */
        getCommentHTML(data) {
          return `
            <div class="little-red-book-comments-avatar">
                    <a target="_blank" href="/user/profile/${data.user_id}">
                        <img src="${data.user_avatar}" crossorigin="anonymous">
                    </a>
              </div>
              <div class="little-red-book-comments-content-wrapper">
                <div class="little-red-book-comments-author-wrapper">
                    <div class="little-red-book-comments-author">
                        <a href="/user/profile/${
                          data.user_id
                        }" class="little-red-book-comments-author-name" target="_blank">
                            ${data.user_nickname}
                        </a>
                    </div>
                    <div class="little-red-book-comments-content">
                        ${data.content}
                    </div>
                    <div class="little-red-book-comments-info">
                        <div class="little-red-book-comments-info-date">
                            <span class="little-red-book-comments-create-time">${utils.formatTime(
                              data.create_time
                            )}</span>
                            <span class="little-red-book-comments-location">${
                              data.ip_location
                            }</span>
                        </div>
                    </div>
                </div>
              </div>
            `;
        },
        /**
         * 获取内容元素
         * @param {object} data
         * @returns
         */
        getCommentElement(data) {
          /* 评论内容 */
          let content = data["content"];
          /* 发布时间 */
          let create_time = data["create_time"];
          /* 发布的id，用于加载楼中楼评论 */
          let id = data["id"];
          /* 发布者的ip地址 */
          let ip_location = data["ip_location"];
          /* 是否继续存在子评论 */
          let sub_comment_has_more = data["sub_comment_has_more"];
          /* 楼中楼回复的总数量 */
          let sub_comment_count = parseInt(data["sub_comment_count"]) || 0;
          /* 加载楼中楼更多回复的时候需要的参数 */
          let sub_comment_cursor = data["sub_comment_cursor"];
          /* 楼中楼评论的数据 */
          let sub_comments = data["sub_comments"];
          /* 评论的用户头像 */
          let user_avatar = data["user_info"]["image"];
          /* 评论的用户名 */
          let user_nickname = data["user_info"]["nickname"];
          /* 评论的用户id */
          let user_id = data["user_info"]["user_id"];

          content = Comments.converContent(content);
          /* 创建元素 */
          let commentItemElement = DOMUtils.createElement("div", {
            className: "little-red-book-comments-item",
            innerHTML: `
            <div class="little-red-book-comments-parent">
              ${Comments.getCommentHTML({
                user_id: user_id,
                user_avatar: user_avatar,
                user_nickname: user_nickname,
                content: content,
                create_time: create_time,
                ip_location: ip_location,
              })}
            </div>
              `,
          });

          /* 判断是否存在楼中楼回复 */
          if (sub_comment_has_more && Array.isArray(sub_comments)) {
            sub_comments.forEach((subCommentInfo) => {
              let subCommentElement = DOMUtils.createElement("div", {
                className: "little-red-book-comments-reply-container",
                innerHTML: Comments.getCommentHTML({
                  user_id: subCommentInfo["user_info"]["user_id"],
                  user_avatar: subCommentInfo["user_info"]["image"],
                  user_nickname: subCommentInfo["user_info"]["nickname"],
                  content: Comments.converContent(subCommentInfo["content"]),
                  create_time: subCommentInfo["create_time"],
                  ip_location: subCommentInfo["ip_location"],
                }),
              });
              commentItemElement.appendChild(subCommentElement);
            });
            if (sub_comment_count !== sub_comments.length) {
              /* 楼中楼回复还没加载完 */
              /* 计算出还没加载完的楼中楼回复的数量 */
              let endReplyCount = sub_comment_count - sub_comments.length;
              /* 楼中楼的cursor */
              let lzlCursor = sub_comment_cursor;
              let showMoreElement = DOMUtils.createElement("div", {
                className: "little-red-book-comments-reply-show-more",
                innerText: `展开 ${endReplyCount} 条回复`,
              });
              async function showMoreEvent() {
                let QmsgLoading = Qmsg.loading("加载中，请稍后...");
                let pageInfo = await littleRedBookApi.getLzlPageInfo(
                  Comments.noteData["id"],
                  id,
                  10,
                  lzlCursor,
                  undefined
                );
                QmsgLoading.close();
                if (!pageInfo) {
                  return;
                }
                /* 覆盖cursor */
                lzlCursor = pageInfo.cursor;
                /* 重新计算剩余的回复数量 */
                endReplyCount = endReplyCount - pageInfo.comments.length;
                /* 修改页面显示 */
                showMoreElement.innerText = `展开 ${endReplyCount} 条回复`;
                pageInfo.comments.forEach((subCommentInfo) => {
                  let subCommentElement = DOMUtils.createElement("div", {
                    className: "little-red-book-comments-reply-container",
                    innerHTML: Comments.getCommentHTML({
                      user_id: subCommentInfo["user_info"]["user_id"],
                      user_avatar: subCommentInfo["user_info"]["image"],
                      user_nickname: subCommentInfo["user_info"]["nickname"],
                      content: Comments.converContent(
                        subCommentInfo["content"]
                      ),
                      create_time: subCommentInfo["create_time"],
                      ip_location: subCommentInfo["ip_location"],
                    }),
                  });
                  DOMUtils.before(showMoreElement, subCommentElement);
                });
                if (!pageInfo.has_more) {
                  /* 没有更多回复了 */
                  DOMUtils.off(
                    showMoreElement,
                    "click",
                    undefined,
                    showMoreEvent,
                    {
                      capture: true,
                    }
                  );
                  showMoreElement.remove();
                }
              }
              DOMUtils.on(showMoreElement, "click", undefined, showMoreEvent, {
                capture: true,
              });
              commentItemElement.appendChild(showMoreElement);
            }
          }
          return commentItemElement;
        },
        /**
         * 转换内容字符串中的emoji
         */
        converContent(content) {
          /* 将内容的emoji代码换成html元素 */
          Comments.emojiNameList.forEach((emojiName) => {
            if (content.includes(emojiName)) {
              content = content.replaceAll(
                emojiName,
                `<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${Comments.emojiMap[emojiName]}">`
              );
            }
          });
          return content;
        },
        /**
         * 滚动事件
         */
        async scrollEvent() {
          if (!utils.isNearBottom(window.innerHeight / 3)) {
            return;
          }
          if (this.QmsgLoading == null) {
            this.QmsgLoading = Qmsg.loading("加载中，请稍后...");
          }
          let pageInfo = await littleRedBookApi.getPageInfo(
            Comments.noteData["id"],
            Comments.currentCursor
          );
          if (this.QmsgLoading) {
            this.QmsgLoading.close();
            this.QmsgLoading = undefined;
          }
          if (!pageInfo) {
            return;
          }
          Comments.currentCursor = pageInfo.cursor;
          pageInfo.comments.forEach((commentItem) => {
            let commentItemElement = Comments.getCommentElement(commentItem);
            Comments.commentContainer.appendChild(commentItemElement);
          });

          if (!pageInfo.has_more) {
            /* 没有更多数据了 */
            Qmsg.info("已加载全部评论");
            Comments.removeScrollEventListener();
            return;
          }
        },
        /**
         * 添加滚动监听
         */
        addSrollEventListener() {
          log.success("添加滚动监听事件");
          DOMUtils.on(document, "scroll", undefined, Comments.scrollFunc.run, {
            capture: true,
            once: false,
            passive: true,
          });
        },
        /**
         * 移除滚动监听
         */
        removeScrollEventListener() {
          log.success("移除滚动监听事件");
          DOMUtils.off(document, "scroll", undefined, Comments.scrollFunc.run, {
            capture: true,
          });
        },
      };
      /* 等待内容元素出现 */
      utils.waitNode(".narmal-note-container").then(async () => {
        let noteViewContainer = document.querySelector(".note-view-container");
        let loading = Qmsg.loading("获取评论中，请稍后...");
        let commentContainer = DOMUtils.createElement("div", {
          className: "little-red-book-comments-container",
          innerHTML: `
          <style>
            .little-red-book-comments-parent {
                position: relative;
                display: flex;
                padding: 8px;
                width: 100%;
            }
            
            .little-red-book-comments-reply-container {
                position: relative;
                display: flex;
                padding: 8px;
                width: 100%;
                padding-left: 52px;
            }
            .little-red-book-comments-container {
                background: #fff;
                position: relative;
                padding: 8px 8px;
            }
            
            .little-red-book-comments-item {
                position: relative;
            }
            
            .little-red-book-comments-avatar {
                flex: 0 0 auto;
            }
            
            .little-red-book-comments-avatar img {
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border-radius: 100%;
                border: 1px solid rgba(0,0,0,0.08);
                object-fit: cover;
                width: 40px;
                height: 40px;
            }
            .little-red-book-comments-content-wrapper {
                margin-left: 12px;
                display: flex;
                flex-direction: column;
                font-size: 14px;
                flex-grow: 1;
            }
            
            .little-red-book-comments-author {display: flex;justify-content: space-between;align-items: center;}
            
            a.little-red-book-comments-author-name {
                line-height: 18px;
                color: rgba(51,51,51,0.6);
            }
            
            .little-red-book-comments-content {
                margin-top: 4px;
                line-height: 140%;
                color: #333;
            }
            
            .little-red-book-comments-info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                font-size: 12px;
                line-height: 16px;
                color: rgba(51,51,51,0.6);
            }
            
            .little-red-book-comments-info-date {
                margin: 8px 0;
            }
            
            span.little-red-book-comments-location {
                margin-left: 4px;
                line-height: 120%;
            }
            img.little-red-book-note-content-emoji {
                margin: 0 1px;
                height: 16px;
                transform: translateY(2px);
                position: relative;
            }
            .little-red-book-comments-reply-container .little-red-book-comments-avatar img {
                width: 24px;
                height: 24px;
            }
            .little-red-book-comments-total{
                font-size: 14px;
                color: rgba(51,51,51,0.6);
                margin-left: 8px;
                margin-bottom: 12px;
            }
            .little-red-book-comments-reply-show-more {
              padding-left: calc(52px + 24px + 12px);
              height: 32px;
              line-height: 32px;
              color: #13386c;
              cursor: pointer;
              font-weight: 500;
              font-size: 14px;
            }
          </style>
          `,
        });
        Comments.commentContainer = commentContainer;
        Comments.init();
        let totalElement = DOMUtils.createElement("div", {
          className: "little-red-book-comments-total",
          innerHTML: `共 ${Comments.noteData["comments"]} 条评论`,
        });
        commentContainer.appendChild(totalElement);
        let pageInfo = await littleRedBookApi.getPageInfo(
          Comments.noteData["id"]
        );
        if (pageInfo) {
          Comments.currentCursor = pageInfo.cursor;
          pageInfo.comments.forEach((commentItem) => {
            let commentItemElement = Comments.getCommentElement(commentItem);
            commentContainer.appendChild(commentItemElement);
          });
          /* 评论尚未加载完 */
          if (pageInfo.has_more) {
            Comments.addSrollEventListener();
          }
        }
        loading.close();
        DOMUtils.append(noteViewContainer, commentContainer);
      });
    },
    /**
     * 修复正确的点击跳转-用户主页
     * 点啥都不好使，都会跳转至下载页面
     */
    repariClick() {
      DOMUtils.on(
        document,
        "click",
        undefined,
        function (event) {
          /**
           * @type {Element}
           */
          let clickElement = event.target;
          if (clickElement?.className?.includes("follow-btn")) {
            /* 关注按钮 */
            /* 就不关注 */
          } else if (clickElement?.closest("button.reds-button.message-btn")) {
            /* 私信按钮 */
            /* 就不私信 */
          } else if (clickElement?.closest("div.reds-tab-item")) {
            /* 笔记/收藏按钮 */
          } else if (clickElement?.closest("section.reds-note-card")) {
            /* 笔记卡片 */
            let sectionElement = clickElement?.closest(
              "section.reds-note-card"
            );
            let note_id =
              sectionElement.getAttribute("id") ||
              utils.toJSON(sectionElement.getAttribute("impression"))?.[
                "noteTarget"
              ]?.["value"]?.["noteId"];
            if (note_id) {
              window.open(
                `https://www.xiaohongshu.com/discovery/item/${clickElement
                  ?.closest("section.reds-note-card")
                  .getAttribute("id")}`,
                "_blank"
              );
            } else {
              Qmsg.error("获取笔记note_id失败");
            }
          }
          log.info(["点击的按钮", clickElement]);
          utils.preventEvent(event);
          return false;
        },
        {
          capture: true,
        }
      );
    },
    /**
     * 优化图片浏览
     */
    optimizeImageBrowsing() {
      /**
       * 查看图片
       * @param {string[]} imgSrcList
       * @param {number} index
       */
      function viewIMG(imgSrcList = [], index = 0) {
        let viewerULNodeHTML = "";
        imgSrcList.forEach((item) => {
          viewerULNodeHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
        });
        let viewerULNode = DOMUtils.createElement("ul", {
          innerHTML: viewerULNodeHTML,
        });
        /**
         * @type {import("../库/Viewer")}
         */
        let viewer = new Viewer(viewerULNode, {
          inline: false,
          url: "data-src",
          zIndex: utils.getMaxZIndex() + 100,
          hidden: () => {
            viewer.destroy();
          },
        });
        index = index < 0 ? 0 : index;
        viewer.view(index);
        viewer.zoomTo(1);
        viewer.show();
      }
      DOMUtils.on(document, "click", ".note-image-box", function (event) {
        /**
         * @type {HTMLElement}
         */
        let clickElement = event.target;
        let imgElement = clickElement.querySelector("img");
        let imgList = [];
        let imgBoxList = [];
        if (clickElement.closest(".onix-carousel-item")) {
          /* 多组图片 */
          imgBoxList = Array.from(
            clickElement
              .closest(".onix-carousel-item")
              .parentElement.querySelectorAll("img")
          );
        } else {
          /* 单个图片 */
          imgBoxList = [imgElement];
        }
        let index = imgBoxList.findIndex((value) => {
          return value == imgElement;
        });
        imgBoxList.forEach((element) => {
          let imgSrc =
            element.getAttribute("src") ||
            element.getAttribute("data-src") ||
            element.getAttribute("alt");
          imgList.push(imgSrc);
        });
        log.success(["点击浏览图片👉", imgList[index]]);
        viewIMG(imgList, index);
      });
    },
    /**
     * 优化视频笔记的描述（可滚动）
     */
    optimizeVideoNoteDesc() {
      GM_addStyle(`
      .author-box .author-desc-wrapper .author-desc{
        max-height: 70px !important;
        overflow: auto !important;
      }
      /* 展开按钮 */
      .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
        display: none !important;
      }
      `);
    },
    /**
     * PC端 允许复制
     */
    allowPCCopy() {
      DOMUtils.on(
        globalThis,
        "copy",
        undefined,
        function (event) {
          utils.preventEvent(event);
          utils.setClip(globalThis.getSelection().toString());
          return false;
        },
        {
          capture: true,
        }
      );
    },
  };
  /* 小红书劫持函数 */
  const littleRedBookHijack = {
    /**
     * 劫持webpack
     * 笔记的
     */
    webpackChunkranchi() {
      let originObject = undefined;
      let webpackName = "webpackChunkranchi";
      Object.defineProperty(unsafeWindow, webpackName, {
        get() {
          return originObject;
        },
        set(newValue) {
          originObject = newValue;
          const oldPush = originObject.push;
          originObject.push = function (...args) {
            let _mainCoreData = args[0][0];
            if (typeof args[0][1] === "object") {
              Object.keys(args[0][1]).forEach((keyName, index) => {
                if (
                  typeof args[0][1][keyName] === "function" &&
                  args[0][1][keyName]
                    .toString()
                    .includes("是否打开小红书App?") &&
                  PopsPanel.getValue("little-red-book-hijack-webpack-mask")
                ) {
                  /* 这个是弹窗的 */
                  log.success(["成功劫持各种弹窗/遮罩层：" + keyName]);
                  args[0][1][keyName] = function () {};
                } else if (
                  typeof args[0][1][keyName] === "function" &&
                  args[0][1][keyName]
                    .toString()
                    .startsWith(
                      "function(e,n,t){t.d(n,{Z:function(){return y}});"
                    ) &&
                  args[0][1][keyName].toString().includes("jumpToApp") &&
                  PopsPanel.getValue("little-red-book-hijack-webpack-scheme")
                ) {
                  /* 这个scheme唤醒的 */
                  let oldFunc = args[0][1][keyName];
                  args[0][1][keyName] = function (...args_1) {
                    log.success(["成功劫持scheme唤醒", args_1]);
                    let oldD = args_1[2].d;
                    args_1[2].d = function (...args_2) {
                      if (
                        args_2.length === 2 &&
                        typeof args_2[1]?.["Z"] === "function"
                      ) {
                        let oldZ = args_2[1]["Z"];
                        if (oldZ.toString() === "function(){return y}") {
                          args_2[1]["Z"] = function (...args_3) {
                            let result = oldZ.call(this, ...args_3);
                            if (
                              typeof result === "function" &&
                              result.toString().includes("jumpToApp")
                            ) {
                              return function () {
                                return {
                                  jumpToApp(data) {
                                    log.success(["拦截唤醒", data]);
                                    if (
                                      data["deeplink"]?.startsWith(
                                        "xhsdiscover://user/"
                                      )
                                    ) {
                                      /* 正确跳转用户主页 */
                                      let userId = data["deeplink"].replace(
                                        /^xhsdiscover:\/\/user\//,
                                        ""
                                      );
                                      let userHomeUrl = `https://www.xiaohongshu.com/user/profile/${userId}`;
                                      window.open(userHomeUrl, "_blank");
                                    }
                                  },
                                };
                              };
                            }
                            return result;
                          };
                        }
                      }
                      oldD.call(this, ...args_2);
                    };
                    oldFunc.call(this, ...args_1);
                  };
                }
              });
            }

            return oldPush.call(this, ...args);
          };
        },
      });
    },
    /**
     * 劫持vue，恢复属性__Ivue__
     */
    webPackVue() {
      let originApply = unsafeWindow.Function.prototype.apply;
      let isHijack = false;
      unsafeWindow.Function.prototype.apply = function (...args) {
        const result = originApply.call(this, ...args);
        if (
          !isHijack &&
          args.length === 2 &&
          args[0]?.addRoute &&
          args[0]?.currentRoute &&
          args[0]?.getRoutes &&
          args[0]?.hasRoute &&
          args[0]?.install &&
          args[0]?.removeRoute
        ) {
          isHijack = !0;
          let __vue__ = args[1][0];
          log.success(["成功劫持vue，version版本：", __vue__.version]);
          __vue__["mixin"]({
            mounted: function () {
              this.$el["__Ivue__"] = this;
            },
          });
        }
        return result;
      };
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
          text: `${GM_info?.script?.name || "【移动端】小红书优化"}-设置`,
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
        only: true,
        drag: true,
      });
    },
    /**
     * 获取按钮配置
     * @param {string} text 文字
     * @param {string} description 描述
     * @param {string} key 键
     * @param {boolean} defaultValue 默认值
     * @param {?(event:Event,value: boolean)=>boolean} _callback_ 点击回调
     */
    getSwtichDetail(text, description, key, defaultValue, _callback_) {
      /**
       * @type {PopsPanelSwitchDetails}
       */
      let result = {
        text: text,
        description: description,
        type: "switch",
        attributes: {},
        getValue() {
          if (PopsPanel.getValue(key) == null) {
            PopsPanel.setValue(key, Boolean(defaultValue));
          }
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
     */
    getContent() {
      return [
        {
          id: "little-red-book-panel-config-shield",
          title: "屏蔽",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】广告",
                  "如：App内打开",
                  "little-red-book-shieldAd",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部搜索发现",
                  "建议开启",
                  "little-red-book-shieldBottomSearchFind",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部工具栏",
                  "建议开启",
                  "little-red-book-shieldBottomToorBar",
                  true
                ),
              ],
            },
          ],
        },
        {
          id: "little-red-book-panel-config-note",
          title: "笔记",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "优化评论浏览",
                  "加载评论，未登录最多查看1页评论(包括楼中楼的)",
                  "little-red-book-optimizeCommentBrowsing",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "优化图片浏览",
                  "更方便的浏览图片",
                  "little-red-book-optimizeImageBrowsing",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "允许复制",
                  "可以复制笔记的内容",
                  "little-red-book-allowCopy",
                  true
                ),
              ],
            },
            {
              text: "视频笔记",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "优化视频描述",
                  "让视频描述可以滚动显示更多",
                  "little-red-book-optimizeVideoNoteDesc",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】作者热门笔记",
                  "建议开启",
                  "little-red-book-shieldAuthorHotNote",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】热门推荐",
                  "建议开启",
                  "little-red-book-shieldHotRecommendNote",
                  true
                ),
              ],
            },
            {
              text: "劫持/拦截",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "劫持webpack-弹窗",
                  "如：打开App弹窗、登录弹窗",
                  "little-red-book-hijack-webpack-mask",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "劫持webpack-唤醒App",
                  "禁止跳转商店小红书详情页/小红书",
                  "little-red-book-hijack-webpack-scheme",
                  true
                ),
              ],
            },
          ],
        },
        {
          id: "little-red-book-panel-config-home",
          title: "主页",
          forms: [
            {
              text: "劫持/拦截",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "劫持点击事件",
                  "可阻止点击跳转至下载页面",
                  "little-red-book-repariClick",
                  true
                ),
              ],
            },
          ],
        },
        {
          id: "little-red-book-panel-config-other",
          title: "其它",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "全局允许复制",
                  "PC端使用",
                  "little-red-book-pc-allow-copy",
                  false
                ),
              ],
            },
            {
              text: "劫持/拦截",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "劫持Vue",
                  "恢复__vue__属性",
                  "little-red-book-hijack-vue",
                  false
                ),
              ],
            },
          ],
        },
      ];
    },
  };
  /* -----------------↓函数区域↓----------------- */

  /* -----------------↑函数区域↑----------------- */

  /* -----------------↓执行入口↓----------------- */
  /* 修复一下Qmsg的loading图标问题 */
  GM_addStyle(`
    .qmsg svg.animate-turn {
        fill: none;
    }
  `);
  PopsPanel.initMenu();
  if (PopsPanel.getValue("little-red-book-hijack-vue")) {
    littleRedBookHijack.webPackVue();
  }
  if (PopsPanel.getValue("little-red-book-shieldAd")) {
    littleRedBookShield.shieldAd();
  }
  if (PopsPanel.getValue("little-red-book-allowCopy")) {
    littleRedBookShield.allowCopy();
  }

  if (littleRedBookRouter.isNotePage()) {
    if (PopsPanel.getValue("little-red-book-shieldBottomSearchFind")) {
      littleRedBookShield.shieldBottomSearchFind();
    }
    if (PopsPanel.getValue("little-red-book-shieldBottomToorBar")) {
      littleRedBookShield.shieldBottomToorBar();
    }
    if (
      PopsPanel.getValue("little-red-book-hijack-webpack-mask") ||
      PopsPanel.getValue("little-red-book-hijack-webpack-scheme")
    ) {
      littleRedBookHijack.webpackChunkranchi();
    }
    if (PopsPanel.getValue("little-red-book-optimizeImageBrowsing")) {
      littleRedBookBusiness.optimizeImageBrowsing();
    }
    if (PopsPanel.getValue("little-red-book-optimizeVideoNoteDesc")) {
      littleRedBookBusiness.optimizeVideoNoteDesc();
    }
    if (PopsPanel.getValue("little-red-book-shieldAuthorHotNote")) {
      littleRedBookShield.shieldAuthorHotNote();
    }
    if (PopsPanel.getValue("little-red-book-shieldHotRecommendNote")) {
      littleRedBookShield.shieldHotRecommendNote();
    }
  }
  if (PopsPanel.getValue("little-red-book-pc-allow-copy")) {
    littleRedBookBusiness.allowPCCopy();
  }

  DOMUtils.ready(function () {
    if (littleRedBookRouter.isNotePage()) {
      if (PopsPanel.getValue("little-red-book-optimizeCommentBrowsing")) {
        littleRedBookBusiness.optimizeCommentBrowsing();
      }
    }

    if (littleRedBookRouter.isUserHomePage()) {
      if (PopsPanel.getValue("little-red-book-repariClick")) {
        littleRedBookBusiness.repariClick();
      }
    }
  });
  /* -----------------↑执行入口↑----------------- */
})();
