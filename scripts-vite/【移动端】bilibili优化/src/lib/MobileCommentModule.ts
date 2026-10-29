import { BilibiliApiConfig } from "@/api/BilibiliApiConfig";
import { addStyle, DOMUtils, httpx, log, utils } from "@/env";
import { XhrHook } from "@/hook/BilibiliNetworkHook";
import { BilibiliGlobalData } from "@/main/BilibiliGlobalData";
import { BilibiliRouter } from "@/router/BilibiliRouter";
import Qmsg from "qmsg";
import Viewer from "viewerjs";
import { unsafeWindow } from "ViteGM";
import { b2a } from "./b2a";
import { wbi } from "./wbi";

// patch for 'unsafeWindow is not defined'
const global = typeof unsafeWindow === "undefined" ? window : unsafeWindow;

// define sort types
const sortTypeConstant = { LATEST: 0, HOT: 2 };

/**
 *
 * + https://greasyfork.org/zh-CN/scripts/524844-bilibili-mobile-comment-module
 */
export const MobileCommentModule = {
  $data: {
    oid: null as null | string,
    createrID: void 0 as undefined | string,
    commentType: null as null | string | number,
    /**
     * 当前评论排序类型
     *
     * + 0 最新
     * + 2 最热
     */
    currentSortType: sortTypeConstant.HOT,
    replyPool: {},
    nextOffset: "",
    dynamicDetail: {
      oid: null as string | null,
      commentType: null as string | null,
    },
  },
  $el: {
    root: null as null | HTMLElement,
    commentContainer: null as null | HTMLElement,
    /**
     * 回复列表元素
     */
    replyList: null as null | HTMLElement,
    /**
     * 排序导航元素
     */
    navSort: null as null | HTMLElement,
    /**
     * 最热
     */
    hotSort: null as null | HTMLElement,
    /**
     * 最新
     */
    timeSort: null as null | HTMLElement,
    /**
     * 评论数量
     */
    totalReply: null as null | HTMLElement,
    /**
     * 评论容器
     */
    replyWrapper: null as null | HTMLElement,
  },
  $flag: {
    isInitCSS: false,
    isHookNetwork: false,
  },
  option: {
    onEnterLzlWrapper: null as null | Function | undefined,
    onQuitLzlWrapper: null as null | Function | undefined,
    onEnterViewer: null as null | Function | undefined,
    onQuitViewer: null as null | Function | undefined,
  },
  async init($el: HTMLElement, opt?: Partial<typeof this.option>) {
    this.initData();

    // @ts-expect-error
    this.option = opt || ({} as any as typeof this.option);
    this.networkHook();
    this.addStyle();
    this.setupStandardCommentContainer($el);
    this.onLzlPreviewClickEvent();
    this.onPreviewImageClickEvent();

    // collect oid & commentType
    await new Promise((resolve) => {
      DOMUtils.wait(() => {
        if (BilibiliRouter.isVideo()) {
          const videoID = global.location.pathname.replace("/video/", "").replace("/", "");
          if (videoID.startsWith("av")) this.$data.oid = videoID.slice(2);
          if (videoID.startsWith("BV")) this.$data.oid = b2a(videoID);
          this.$data.commentType = 1;
        } else if (BilibiliRouter.isDynamic()) {
          this.$data.oid = this.$data.dynamicDetail?.oid;
          this.$data.commentType = this.$data.dynamicDetail?.commentType;
        } else if (BilibiliRouter.isOpus()) {
          // @ts-expect-error
          this.$data.oid = global?.__INITIAL_STATE__?.opus?.detail?.basic?.comment_id_str;
          // @ts-expect-error
          this.$data.commentType = global?.__INITIAL_STATE__?.opus?.detail?.basic?.comment_type; // should be '11'
        }

        // final check
        if (this.$data.oid && this.$data.commentType) {
          // utils.workerClearInterval(timer);
          resolve(null);
          return {
            success: true,
            data: {},
          };
        }
        return {
          success: false,
          data: null,
        };
      }, 0);
    });

    await this.enableSwitchingSortType($el);
    await this.loadFirstPagination($el);
  },
  /**
   * 初始化数据
   */
  initData() {
    this.$data.oid = null;
    this.$data.createrID = void 0;
    this.$data.commentType = null;
    // @ts-expect-error
    this.$data.replyPool = null;
    this.$data.replyPool = {};
    this.$data.nextOffset = "";
    this.$data.currentSortType = sortTypeConstant.HOT;
    this.$data.dynamicDetail = {
      oid: null,
      commentType: null,
    };
    // 重置存储的元素
    Object.keys(this.$el).forEach((key) => {
      const value = Reflect.get(this.$el, key);
      if (!document.contains(value)) return;
      Reflect.set(this.$el, key, null);
    });
    // 重置存储的配置
    Object.keys(this.option).forEach((key) => {
      Reflect.set(this.option, key, null);
    });
  },
  /**
   * 网络劫持
   */
  networkHook() {
    if (this.$flag.isHookNetwork) return;
    if (!BilibiliRouter.isDynamic()) return;

    XhrHook.ajaxHooker.hook((request) => {
      const url = request.url;
      if (typeof url === "string" && url.includes("reply/wbi/main")) {
        const { searchParams } = new URL(`${url.startsWith("//") ? "https:" : ""}${url}`);
        this.$data.dynamicDetail = {
          oid: searchParams.get("oid"),
          commentType: searchParams.get("type"),
        };
      }
    });
  },
  /**
   * 添加样式
   */
  async addStyle() {
    if (this.$flag.isInitCSS) return;
    this.$flag.isInitCSS = true;

    await DOMUtils.onReady();
    // reply header CSS
    addStyle(/*css*/ `
    .reply-header {
        padding: 12px;
        border-bottom: 1px solid #f1f2f3;
    }

    .reply-navigation {
        margin-bottom: 0 !important;
    }

    .reply-navigation .nav-bar .nav-title {
        font-size: 1rem !important;
    }
    `);

    // reply list CSS
    addStyle(/*css*/ `
    .reply-list {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    .reply-item {
        padding: 12px !important;
        font-size: 1rem !important;
        border-bottom: 1px solid #f4f5f7;
    }

    .reply-item .root-reply-container {
        padding: 0 !important;
        display: flex;
        gap: 24px;
    }

    .reply-item .root-reply-container .root-reply-avatar {
        position: relative !important;
        width: initial !important;
    }

    .reply-item .root-reply-container .content-warp {
        margin-left: 0px;
    }

    .reply-item .root-reply-container .content-warp .user-info,
    .reply-item .root-reply-container .content-warp .root-reply .reply-content {
        font-size: 14px !important;
    }

    .reply-item .root-reply-container .content-warp .root-reply .reply-content-container {
        /* width: calc(100vw - 88px) !important; */
    }

    .reply-item .root-reply-container .content-warp .root-reply .reply-content .note-prefix {
        margin-right: 4px !important;
    }

    .reply-item .sub-reply-container {
        padding-left: 64px !important;
    }

    .reply-item .sub-reply-container .sub-reply-list .sub-reply-item {
        width: calc(100% - 24px);
    }

    .reply-item .sub-reply-container .sub-reply-list .sub-reply-item .sub-user-info {
        margin-right: 0 !important;
    }

    .reply-item .sub-reply-container .sub-reply-list .sub-reply-item .sub-user-info .sub-user-name,
    .reply-item .sub-reply-container .sub-reply-list .sub-reply-item .reply-content {
        font-size: 14px !important;
    }

    .reply-info .reply-time,
    .reply-info .reply-like,
    .sub-reply-info .sub-reply-time,
    .sub-reply-info .sub-reply-like {
        margin-right: 12px !important;
    }
    `);

    // avatar CSS
    const avatarCSS = document.createElement("style");
    avatarCSS.textContent = `
            
          `;
    addStyle(/*css*/ `
    .reply-item .root-reply-avatar .avatar .bili-avatar {
        width: 40px;
        height: 40px;
    }

    .sub-reply-item .sub-reply-avatar .avatar .bili-avatar {
        width: 24px;
        height: 24px;
    }
    `);

    // view-more CSS
    addStyle(/*css*/ `
    .sub-reply-container .view-more-btn:hover {
        color: #00AEEC;
    }

    .view-more {
        padding-left: 8px;
        color: #222;
        font-size: 13px;
        user-select: none;
    }

    .pagination-page-count {
        margin-right: 4px !important;
    }

    .pagination-page-dot,
    .pagination-page-number {
        margin: 0 4px;
    }

    .pagination-btn,
    .pagination-page-number {
        cursor: pointer;
    }

    .current-page,
    .pagination-btn:hover,
    .pagination-page-number:hover {
        color: #00AEEC;
    }
    `);

    // add other CSS
    const otherCSS = document.createElement("style");
    otherCSS.textContent = `
            
          `;
    addStyle(/*css*/ `
    :root {
        --text1: #18191C;
        --text3: #9499A0;
        --brand_blue: #00AEEC;
        --brand_pink: #FF6699;
        --bg2: #F6F7F8;
    }

    a.jump-link {
        color: #008DDA;
    }
    `);
  },
  /**
   * setup standard comment container & get reply list
   */
  setupStandardCommentContainer($root: HTMLElement) {
    DOMUtils.html(
      $root,
      /*html*/ `
        <div class="comment-container">
          <div class="reply-header">
            <div class="reply-navigation">
              <ul class="nav-bar">
                <li class="nav-title">
                  <span class="nav-title-text">评论</span>
                  <span class="total-reply">-</span>
                </li>
                <li class="nav-sort hot">
                  <div class="hot-sort">最热</div>
                  <div class="part-symbol"></div>
                  <div class="time-sort">最新</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="reply-warp">
            <div class="reply-list"></div>
          </div>  
        </div>
    `
    );
    this.$el.commentContainer = $root.querySelector(".comment-container");
    this.$el.replyList = $root.querySelector<HTMLElement>(".reply-list");
    this.$el.navSort = $root.querySelector(".comment-container .reply-header .nav-sort");
    this.$el.hotSort = this.$el.navSort!.querySelector(".hot-sort");
    this.$el.timeSort = this.$el.navSort!.querySelector(".time-sort");
    this.$el.totalReply = $root.querySelector(".comment-container .reply-header .total-reply");
    this.$el.replyWrapper = $root.querySelector(".comment-container .reply-warp");

    this.$el.root = $root;
  },
  /**
   * 绑定楼中楼预览的点击事件
   */
  onLzlPreviewClickEvent() {
    DOMUtils.on(this.$el.replyWrapper, "click", ".sub-reply-list-preview", (evt, selectorTarget) => {
      let $click = evt.composedPath()[0];
      if (!($click instanceof Element)) {
        return;
      }
      if ($click.closest(".view-more")) {
        return;
      }
      if ($click.closest("a")) {
        return;
      }
      if ($click.closest("img")) {
        return;
      }
      if ($click.closest(".viewer-container")) {
        return;
      }
      const $viewMore = selectorTarget.querySelector(".view-more");
      if (!$viewMore) {
        return;
      }
      DOMUtils.emit($viewMore, "click", false);
    });
  },
  /**
   * 全局图片预览
   */
  onPreviewImageClickEvent() {
    DOMUtils.on(this.$el.root, "click", ".preview-image-container", (evt, $preview) => {
      DOMUtils.preventEvent(evt);
      const $click = evt.composedPath()[0];
      const viewer = new Viewer($preview, {
        title: false,
        toolbar: false,
        tooltip: false,
        keyboard: false,
        container: $preview.parentElement!,
        hidden: () => {
          viewer.destroy();
          if (typeof this.option.onQuitViewer == "function") {
            this.option.onQuitViewer();
          }
        },
      });
      let index = 0;
      if ($click instanceof Element) {
        const imgList = Array.from($preview.querySelectorAll("img[src]"));
        const $img = $click.closest("img");
        index = $img ? imgList.indexOf($img) : index;
      }
      viewer.view(index);
      if (typeof this.option.onEnterViewer == "function") {
        this.option.onEnterViewer();
      }
    });
  },
  /**
   * enable switching sort type
   */
  enableSwitchingSortType($root: HTMLElement) {
    // reset classes
    DOMUtils.addClass(this.$el.navSort!, "hot");
    DOMUtils.removeClass(this.$el.navSort!, "time");

    // setup click event listener
    DOMUtils.on(this.$el.hotSort, "click", (evt) => {
      DOMUtils.preventEvent(evt);
      if (this.$data.currentSortType === sortTypeConstant.HOT) return;
      this.$data.currentSortType = sortTypeConstant.HOT;
      DOMUtils.addClass(this.$el.navSort!, "hot");
      DOMUtils.removeClass(this.$el.navSort!, "time");
      this.$el.commentContainer!.scrollTo(0, 0);
      this.loadFirstPagination($root);
    });

    DOMUtils.on(this.$el.timeSort, "click", (evt) => {
      DOMUtils.preventEvent(evt);
      if (this.$data.currentSortType === sortTypeConstant.LATEST) return;
      this.$data.currentSortType = sortTypeConstant.LATEST;
      DOMUtils.addClass(this.$el.navSort!, "time");
      DOMUtils.removeClass(this.$el.navSort!, "hot");
      this.$el.commentContainer!.scrollTo(0, 0);
      this.loadFirstPagination($root);
    });
  },
  /**
   * load first pagination
   */
  async loadFirstPagination($root: HTMLElement) {
    // reset offset data
    this.$data.nextOffset = "";
    // get data of first pagination
    const { data: firstPaginationData, code: resultCode } = await this.getPaginationData(1);

    // get creater ID
    this.$data.createrID = firstPaginationData.upper.mid;

    // clear replyList
    DOMUtils.empty(this.$el.replyList!);

    // clear replyPool
    this.$data.replyPool = {};

    // clear bottom modules
    DOMUtils.remove(".comment-container .reply-warp .no-more-replies-info");
    DOMUtils.remove(".comment-container .reply-warp .anchor-for-loading");

    // script ends here if not able to fetch pagination data
    if (resultCode !== 0) {
      // ref: BV12r4y147Bj
      const info = resultCode === 12061 ? "UP主已关闭评论区" : "无法从API获取评论数据";
      DOMUtils.html(
        this.$el.replyList!,
        /*html*/ `
        <p style="padding: 100px 0; text-align: center; color: #999;">${info}</p>
      `
      );
      return;
    }

    // load reply count
    const totalReplyCount = parseInt(firstPaginationData?.cursor?.all_count) || 0;
    DOMUtils.text(this.$el.totalReply!, totalReplyCount);

    // check whether replies are selected
    // ref: BV1Dy2mY3EGy
    if (firstPaginationData?.cursor?.name?.includes("精选")) {
      DOMUtils.html(
        this.$el.navSort!,
        /*html*/ `
            <div class="selected-sort">精选评论</div>
        `
      );
    }

    // load the top reply if it exists
    if (firstPaginationData.top_replies && firstPaginationData.top_replies.length !== 0) {
      const topReplyData = firstPaginationData.top_replies[0];
      this.appendReplyItem(topReplyData, true);
    }

    // load normal replies
    for (const replyData of firstPaginationData.replies) {
      this.appendReplyItem(replyData);
    }

    // script ends here if there are no more replies
    if (firstPaginationData.replies.length === 0 || firstPaginationData.cursor.is_end) {
      const infoElement = DOMUtils.createElement(
        "p",
        {
          className: "no-more-replies-info",
          textContent: "没有更多评论",
        },
        {
          style: "padding-bottom: 100px; text-align: center; color: #999;",
        }
      );
      DOMUtils.append(this.$el.replyWrapper!, infoElement);
      return;
    }

    // add page loader
    this.addAnchor();
  },
  async getPaginationData(plat: number) {
    const params = {
      pagination_str: JSON.stringify({
        offset: this.$data.nextOffset || "",
      }),
      oid: this.$data.oid,
      type: this.$data.commentType,
      wts: parseInt((Date.now() / 1000).toString()),
      // plat: 1,
      // web_location: 1315875,
    };

    if (this.$data.currentSortType === sortTypeConstant.HOT) {
      Reflect.set(params, "mode", 3);
      if (!this.$data.nextOffset) {
        // params.seek_rpid = "";
      }
    } else if (this.$data.currentSortType === sortTypeConstant.LATEST) {
      Reflect.set(params, "mode", 2);
    }

    const isLogin = await BilibiliGlobalData.isLogin();
    // 已登录就用跨域请求且不带Cookie
    // 未登录就用fetch请求

    const fetchResult = await httpx.get(
      `https://${BilibiliApiConfig.web_host}/x/v2/reply/wbi/main?${await wbi(params)}`,
      {
        allowInterceptConfig: false,
        fetch: !isLogin,
        fetchInit: {
          credentials: "same-origin",
        },
        anonymous: !isLogin,
      }
    );
    const fetchResultJSON = utils.toJSON(fetchResult.data.responseText);
    this.$data.nextOffset = fetchResultJSON.data.cursor?.pagination_reply?.next_offset || "";
    return fetchResultJSON;
  },
  getReplyItem(replyData: any, isTopReply?: boolean, isShowLzlReplyContent: boolean = true) {
    const $replyItem = DOMUtils.createElement("div", {
      className: "reply-item",
      innerHTML: /*html*/ `
            <div class="root-reply-container">
          <a class="root-reply-avatar" href="https://space.bilibili.com/${
            replyData.mid
          }" target="_blank" data-user-id="${replyData.mid}" data-root-reply-id="${replyData.rpid}">
            <div class="avatar">
              <div class="bili-avatar">
                <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius" data-src="${
                  replyData.member.avatar
                }" alt="" src="${replyData.member.avatar}">
                <span class="bili-avatar-icon bili-avatar-right-icon bili-avatar-size-40"></span>
              </div>
            </div>
          </a>
          <div class="content-warp">
            <div class="user-info">
              <a class="user-name" href="https://space.bilibili.com/${replyData.mid}" target="_blank" data-user-id="${
                replyData.mid
              }" data-root-reply-id="${replyData.rpid}" style="color: ${
                replyData.member.vip.nickname_color ? replyData.member.vip.nickname_color : "#61666d"
              }">${replyData.member.uname}</a>
              <span style="height: 14px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 10px; color: white; border-radius: 2px; background-color: ${this.getMemberLevelColor(
                replyData.member.level_info.current_level
              )};">LV${replyData.member.level_info.current_level}</span>
              ${
                this.$data.createrID === replyData.mid
                  ? '<i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>'
                  : ""
              }
            </div>
            <div class="root-reply">
              <span class="reply-content-container root-reply" style="padding-bottom: 8px;">
                <span class="reply-content">${
                  isTopReply ? '<span class="top-icon" style="top: -1px;">置顶</span>' : ""
                }${
                  replyData.content.pictures
                    ? `<div class="note-prefix" style="transform: translateY(-1px);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#BBBBBB"><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm.75 2.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z"></path></svg><div style="margin-left: 3px;">笔记</div></div>`
                    : ""
                }${this.getConvertedMessage(replyData.content)}</span>
              </span>
              ${
                replyData.content.pictures
                  ? `
                <div class="image-exhibition" style="margin-top: 0; margin-bottom: 8px;">
                  <div class="preview-image-container" style="display: flex; width: 300px;">
                    ${this.getImageItems(replyData.content.pictures)}
                  </div>
                </div>
                `
                  : ""
              }
              <div class="reply-info">
                <span class="reply-time" style="margin-right: 20px;">${this.getFormattedTime(replyData.ctime)}</span>
                <span class="reply-like">
                  <i class="svg-icon like use-color like-icon" style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                  <span>${replyData.like}</span>
                </span>
              </div>
              <div class="reply-tag-list">
                ${
                  replyData.card_label
                    ? replyData.card_label.reduce(
                        (acc: any, cur: any) =>
                          acc +
                          `<span class="reply-tag-item ${cur.text_content === "热评" ? "reply-tag-hot" : ""} ${
                            cur.text_content === "UP主觉得很赞" ? "reply-tag-liked" : ""
                          }" style="font-size: 12px; background-color: ${
                            cur.label_color_day
                          }; color: ${cur.text_color_day};">${cur.text_content}</span>`,
                        ""
                      )
                    : ""
                }
              </div>
            </div>
          </div>
        </div>
        ${
          isShowLzlReplyContent
            ? /*html*/ `
        <div class="sub-reply-container">
          <div class="sub-reply-list-preview">${this.getSubReplyPreviewItems(replyData.replies)}<div class="view-more" style="padding-left: 0px; font-size: 13px; color: #9499A0;${replyData.rcount > (replyData.replies || []).length ? "" : "display:none;"}">
                <div class="view-more-default">
                  ${replyData.reply_control.up_reply ? /*html*/ "<span>UP主等人</span>" : ""}
                  <span>共${replyData.rcount}条回复</span>
                  <span class="view-more-btn">&nbsp;&gt;</span>
                </div>
              </div>
          </div>
        </div>
        `
            : ""
        }
        
        `,
    });
    return $replyItem;
  },
  /**
   * 添加评论项
   */
  appendReplyItem(replyData: any, isTopReply?: boolean) {
    if (
      typeof this.$data.replyPool === "object" &&
      this.$data.replyPool != null &&
      // @ts-expect-error
      this.$data.replyPool[replyData.rpid]
    ) {
      // 评论重复了
      return;
    }

    const $replyItem = this.getReplyItem(replyData, isTopReply);
    DOMUtils.append(this.$el.replyList!, $replyItem);
    // @ts-expect-error
    this.$data.replyPool[replyData.rpid_str] = true;

    // setup view more button
    const subReplyList = $replyItem.querySelector<HTMLElement>(".sub-reply-list")!;
    const $viewMore = $replyItem.querySelector<HTMLElement>(".view-more")!;
    if ($viewMore) {
      DOMUtils.on($viewMore, "click", (evt) => {
        DOMUtils.preventEvent(evt);
        // this.loadPaginatedSubReplies(replyData.rpid, subReplyList, replyData.rcount, 1);
        this.showLzlWrapper(replyData.rpid, 1, replyData, replyData.replies);
        if (typeof this.option.onEnterLzlWrapper == "function") {
          this.option.onEnterLzlWrapper();
        }
      });
    }
  },
  getFormattedTime(ms: number) {
    /**
     * 格式化时间字符串
     * @param {Date} date - 传入的Date类型时间
     * @returns {string} 格式化后的时间字符串
     */
    function formatRelativeTime(date: number | Date) {
      // 确保传入的是有效的 Date 对象
      if (typeof date === "number") {
        date = new Date(date);
      }

      const now = new Date();
      const diffMs = now.getTime() - date.getTime(); // 时间差（毫秒）
      const diffMinutes = Math.floor(diffMs / (1000 * 60)); // 时间差（分钟）
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60)); // 时间差（小时）

      // 获取当前时间的0点时间戳，以及传入时间的0点时间戳，用于准确计算相差几天
      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
      const dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
      const diffDays = Math.floor((todayStart - dateStart) / (1000 * 60 * 60 * 24)); // 相差天数（按自然日计算）

      // 辅助函数：补零
      const padZero = (num: number) => String(num).padStart(2, "0");

      // 辅助函数：格式化为 HH:mm:ss
      const formatTime = (d: Date) => {
        const HH = padZero(d.getHours());
        const mm = padZero(d.getMinutes());
        const ss = padZero(d.getSeconds());
        return `${HH}:${mm}:${ss}`;
      };

      // 大于3天：返回 yyyy-MM-dd HH:mm:ss
      if (diffDays > 3) {
        return utils.formatTime(date, "yyyy-MM-dd HH:mm:ss");
      }

      // 距离第3天（即前3天）：返回 3天前
      if (diffDays === 3) {
        return `3天前`;
      }
      // 前天：返回 前天 HH:mm:ss
      if (diffDays === 2) {
        return `前天 ${formatTime(date)}`;
      }
      // 昨天：返回 昨天 HH:mm:ss
      if (diffDays === 1) {
        return `昨天 ${formatTime(date)}`;
      }
      // 大于1小时，且在1天内（即今天内）：返回 xx小时前
      if (diffDays === 0) {
        // 1小时内：返回 xx分钟前
        if (diffMinutes < 60) {
          if (diffMinutes == 0) {
            return "刚刚";
          }
          return `${diffMinutes}分钟前`;
        }
        return `${diffHours}小时前`;
      }

      return utils.formatTime(date, "yyyy-MM-dd HH:mm:ss");
    }

    return formatRelativeTime(ms * 1000);
  },
  /**
   * 获取等级颜色
   */
  getMemberLevelColor(level: number | string) {
    return {
      0: "#C0C0C0",
      1: "#BBBBBB",
      2: "#8BD29B",
      3: "#7BCDEF",
      4: "#FEBB8B",
      5: "#EE672A",
      6: "#F04C49",
    }[level];
  },

  getConvertedMessage(content: any) {
    let result: string = content.message;

    // built blacklist of keyword, to avoid being converted to link incorrectly
    const keywordBlacklist = ["https://www.bilibili.com/video/av", "https://b23.tv/mall-"];

    // convert vote to link
    if (content.vote && content.vote.deleted === false) {
      const linkElementHTML = /*html*/ `<a class="jump-link normal" href="${content.vote.url}" target="_blank" noopener noreferrer>${content.vote.title}</a>`;
      keywordBlacklist.push(linkElementHTML);
      result = result.replace(`{vote:${content.vote.id}}`, linkElementHTML);
    }

    // convert emote tag to image
    if (content.emote) {
      for (const [key, value] of Object.entries(content.emote)) {
        const imageElementHTML = `<img class="emoji-${
          // @ts-expect-error
          ["", "small", "large"][value.meta.size]
        }" src="${
          // @ts-expect-error
          value.url
        }" alt="${key}">`;
        keywordBlacklist.push(imageElementHTML);
        result = result.replaceAll(key, imageElementHTML);
      }
    }

    // convert timestamp to link
    result = result.replaceAll(/(\d{1,2}[:：]){1,2}\d{1,2}/g, (timestamp) => {
      timestamp = timestamp.replaceAll("：", ":");

      // return plain text if no video in page
      if (!BilibiliRouter.isVideo()) return timestamp;

      const parts = timestamp.split(":");
      // return plain text if any part of timestamp equal to or bigger than 60
      if (parts.some((part) => parseInt(part) >= 60)) return timestamp;

      let totalSecond;
      if (parts.length === 2) totalSecond = parseInt(parts[0]) * 60 + parseInt(parts[1]);
      else if (parts.length === 3)
        totalSecond = parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
      // return plain text if failed to get vaild number of second
      if (Number.isNaN(totalSecond)) return timestamp;

      const linkElementHTML = /*html*/ `<a class="jump-link video-time" onclick="(async () => {
          // jump to exact time
          const videoElement = document.querySelector('video.art-video');
          videoElement.currentTime = ${totalSecond};
        })()">${timestamp}</a>`;
      keywordBlacklist.push(linkElementHTML);

      return linkElementHTML;
    });

    // convert @ user
    if (content.at_name_to_mid) {
      for (const [key, value] of Object.entries(content.at_name_to_mid)) {
        const linkElementHTML = `<a class="jump-link user" data-user-id="${value}" href="https://space.bilibili.com/${value}" target="_blank" noopener noreferrer>@${key}</a>`;
        keywordBlacklist.push(linkElementHTML);
        result = result.replaceAll(`@${key}`, linkElementHTML);
      }
    }

    // convert url to link
    if (Object.keys(content.jump_url).length) {
      // make sure links are converted first
      const entries: any[] = [].concat(
        // @ts-expect-error
        Object.entries(content.jump_url).filter((entry) => entry[0].startsWith("https://")),
        Object.entries(content.jump_url).filter((entry) => !entry[0].startsWith("https://"))
      );

      for (const [key, value] of entries) {
        const href =
          key.startsWith("BV") || /^av\d+$/.test(key) ? `https://www.bilibili.com/video/${key}` : value.pc_url || key;
        if (href.includes("search.bilibili.com") && keywordBlacklist.join("").includes(key)) continue;
        const linkElementHTML = /*html*/ `<img class="icon normal" src="${value.prefix_icon}" style="${
          value.extra && value.extra.is_word_search && "width: 12px;"
        }"><a class="jump-link normal" href="${href}" target="_blank" noopener noreferrer>${value.title}</a>`;
        keywordBlacklist.push(linkElementHTML);
        result = result.replaceAll(key, linkElementHTML);
      }
    }

    return result;
  },
  getImageItems(images: any[]) {
    let imageSizeConfig = "width: 84px; height: 84px;";
    if (images.length === 1) imageSizeConfig = "max-width: 260px; max-height: 180px;";
    if (images.length === 2) imageSizeConfig = "width: 128px; height: 128px;";

    let result = "";
    for (const image of images) {
      result += /*html*/ `<div class="image-item-wrap" style="margin-top: 4px; margin-right: 4px; cursor: zoom-in;"><img loading="lazy" src="${image.img_src}" style="border-radius: 4px; ${imageSizeConfig}"></div>`;
    }
    return result;
  },

  getSubReplyItems(subReplies: any[]) {
    if (!(subReplies instanceof Array)) return "";

    let result = "";
    for (const replyData of subReplies) {
      result += /*html*/ `
          <div class="sub-reply-item">
            <div class="sub-user-info">
              <a class="sub-reply-avatar" href="https://space.bilibili.com/${
                replyData.mid
              }" target="_blank" data-user-id="${replyData.mid}" data-root-reply-id="${replyData.rpid}">
                <div class="avatar">
                  <div class="bili-avatar">
                    <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius" data-src="${
                      replyData.member.avatar
                    }" alt="" src="${replyData.member.avatar}">
                    <span class="bili-avatar-icon bili-avatar-right-icon  bili-avatar-size-24"></span>
                  </div>
                </div>
              </a>
              <a class="sub-user-name" href="https://space.bilibili.com/${
                replyData.mid
              }" target="_blank" data-user-id="${replyData.mid}" data-root-reply-id="${replyData.rpid}" style="color: ${
                replyData.member.vip.nickname_color ? replyData.member.vip.nickname_color : "#61666d"
              }">${replyData.member.uname}</a>
              <span style="height: 14px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 10px; color: white; border-radius: 2px; background-color: ${this.getMemberLevelColor(
                replyData.member.level_info.current_level
              )};">LV${replyData.member.level_info.current_level}</span>
              ${
                this.$data.createrID === replyData.mid
                  ? `<i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>`
                  : ""
              }
            </div>
            <span class="reply-content-container sub-reply-content">
              <span class="reply-content">${this.getConvertedMessage(replyData.content)}</span>
            </span>
            <div class="sub-reply-info" style="margin: 4px 0;">
              <span class="sub-reply-time" style="margin-right: 20px;">${this.getFormattedTime(replyData.ctime)}</span>
              <span class="sub-reply-like">
                <i class="svg-icon like use-color sub-like-icon" style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                <span>${replyData.like}</span>
              </span>
            </div>
          </div>
        `;
    }

    return result;
  },
  getSubReplyPreviewItems(subReplies: any[]) {
    if (!(subReplies instanceof Array)) return "";
    if (!subReplies.length) return "";

    const preview_subReplies = subReplies.slice(0, 3);
    let result = "";
    for (const replyItemData of preview_subReplies) {
      result += /*html*/ `
          <div class="sub-reply-item">
            <span class="reply-content-container sub-reply-content">
              <a class="sub-user-name" href="https://space.bilibili.com/${replyItemData.mid}" target="_blank" data-user-id="${replyItemData.mid}" data-root-reply-id="${replyItemData.rpid}">${replyItemData.member.uname}</a>
              ${
                this.$data.createrID && this.$data.createrID.toString() === replyItemData.mid.toString()
                  ? /*html*/ `
                <i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);vertical-align: middle;margin-left:4px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect>
                    <path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path>
                  </svg>
                </i>`
                  : ""
              }
              <span>：</span>
              <span class="reply-content">${this.getConvertedMessage(replyItemData.content)}</span>
              ${
                replyItemData.like
                  ? /*html*/ `
              <span class="reply-split-line">|</span>
              <span class="sub-reply-like">
                <i class="svg-icon like use-color sub-like-icon" style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                <span>${replyItemData.like}</span>
              </span>`
                  : ""
              }
            </span>
          </div>
        `;
    }

    return result;
  },
  isLzlShow() {
    return this.$el.root?.querySelector<HTMLElement>(".lzl-comment-container") !== null;
  },
  showLzlWrapper(rootReplyID: any, paginationNumber: number, replyData: any, lzlReplyDataList: any[]) {
    const $commentContainer = this.$el.root?.querySelector<HTMLElement>(".comment-container")!;
    let $lzlWrapper = this.$el.root?.querySelector<HTMLElement>(".lzl-comment-container");
    if ($lzlWrapper) {
      DOMUtils.remove($lzlWrapper);
      $lzlWrapper = null;
    }
    if (!$lzlWrapper) {
      $lzlWrapper = DOMUtils.createElement("div", {
        className: "lzl-comment-container",
        innerHTML: /*html*/ `
          <div class="reply-header">
            <div class="reply-navigation">
              <ul class="nav-bar">
                <li class="nav-title">
                  <span class="nav-title-text">评论详情</span>
                </li>
                <li class="nav-back"></li>
              </ul>
            </div>
          </div>
          <div class="reply-warp">
            <div class="reply-list-main"></div>
            <div class="reply-lzl-split-line"></div>
            <div class="reply-lzl-content-control">
              <div class="reply-lzl-content-navigation">
                <ul class="nav-bar">
                  <li class="nav-title">
                    <span class="nav-title-text"></span>
                  </li>
                  <li class="nav-sort" style="display: none;">
                    <span class="nav-sort-hot">按热度</span>
                    <span class="nav-sort-time">按时间</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="reply-list"></div>
            <div class="anchor-for-loading" style="text-align: center;color: #61666d;margin: 25px 0px;">正在加载...</div>
          </div>
        `,
      });
      DOMUtils.after($commentContainer, $lzlWrapper);
    }
    // 隐藏主评论
    DOMUtils.css($commentContainer, "position", "absolute");
    DOMUtils.css($commentContainer, "display", "none");

    const $replyMainTopContainer = $lzlWrapper.querySelector<HTMLElement>(".reply-list-main")!;
    const $replyList = $lzlWrapper.querySelector<HTMLElement>(".reply-list")!;
    const $lzlNavTitleText = $lzlWrapper.querySelector<HTMLElement>(".reply-lzl-content-control .nav-title-text")!;
    DOMUtils.append($replyMainTopContainer, this.getReplyItem(replyData, false, false));
    DOMUtils.text($lzlNavTitleText, `相关回复共${replyData.rcount}条`);

    const $lzlReplyFragment: HTMLElement[] = [];
    // 预加载楼中楼的1个或者2个评论
    for (const replyItemData of lzlReplyDataList) {
      const $replyItem = this.getReplyItem(replyItemData, false, false);
      $lzlReplyFragment.push($replyItem);
    }
    DOMUtils.append($replyList, $lzlReplyFragment);

    const $loadNext = $lzlWrapper.querySelector<HTMLElement>(".anchor-for-loading")!;

    let startPageNumber = paginationNumber;

    if (replyData.rcount == replyData.replies.length && startPageNumber == 1) {
      // 如果以获取到的评论数量等于评论总数，则说明没有更多评论了
      $loadNext.textContent = "所有评论已加载完毕";
      return {
        $commentContainer,
        $lzlWrapper,
        $loadNext,
      };
    }
    const ob = new IntersectionObserver(async (entries) => {
      if (!entries[0].isIntersecting) return;
      const { data: newPaginationData } = await this.getLzlReplyData(rootReplyID, startPageNumber);
      if (!newPaginationData.replies || newPaginationData.replies.length === 0) {
        $loadNext.textContent = "所有评论已加载完毕";
        ob.disconnect();
        return;
      }

      const $lzlReplyFragment: HTMLElement[] = [];

      for (const replyItemData of newPaginationData.replies) {
        // this.appendReplyItem(replyData);
        if (startPageNumber == 1) {
          // 过滤掉预加载的重复的评论
          const isFilter = lzlReplyDataList.some((item) => item.rpid === replyItemData.rpid);
          if (isFilter) continue;
        }
        const $replyItem = this.getReplyItem(replyItemData, false, false);
        $lzlReplyFragment.push($replyItem);
      }
      DOMUtils.append($replyList, $lzlReplyFragment);
      startPageNumber++;
    });

    ob.observe($loadNext);

    return {
      $commentContainer,
      $lzlWrapper,
      $loadNext,
    };
  },
  exitLzl() {
    const $commentContainer = this.$el.root?.querySelector<HTMLElement>(".comment-container");
    const $lzlWrapper = this.$el.root?.querySelector<HTMLElement>(".lzl-comment-container");
    if ($commentContainer) {
      DOMUtils.css($commentContainer, "display", "");
      DOMUtils.css($commentContainer, "visibility", "");
      DOMUtils.css($commentContainer, "position", "");
    }
    if ($lzlWrapper) {
      DOMUtils.remove($lzlWrapper);
      if (typeof this.option.onQuitLzlWrapper == "function") {
        this.option.onQuitLzlWrapper();
      }
    }
  },
  async getLzlReplyData(rootReplyID: any, paginationNumber: number) {
    // replace reply list with new replies
    const params = {
      oid: this.$data.oid,
      type: this.$data.commentType,
      root: rootReplyID,
      ps: 10,
      pn: paginationNumber,
      web_location: 333.788,
    };
    const isLogin = await BilibiliGlobalData.isLogin();
    // 已登录就用跨域请求且不带Cookie
    // 未登录就用fetch请求
    const subReplyResponse = await httpx.get(
      `https://${BilibiliApiConfig.web_host}/x/v2/reply/reply?${utils.toSearchParamsStr(params)}`,
      {
        allowInterceptConfig: false,
        fetch: !isLogin,
        fetchInit: {
          credentials: "same-origin",
        },
        anonymous: !isLogin,
      }
    );
    if (!subReplyResponse.isSuccess) {
      log.error(subReplyResponse);
      Qmsg.error("请求异常，获取评论的回复失败");
      return;
    }
    const subReplyJSON = utils.toJSON(subReplyResponse.data.responseText);
    if (subReplyJSON === -352) {
      Qmsg.error("请登录后再进行操作");
      console.error("you should login first", subReplyResponse);
      return;
    }
    const subReplyData = subReplyJSON;

    return subReplyData;
  },

  addAnchor() {
    const anchorElement = DOMUtils.createElement(
      "div",
      {
        className: "anchor-for-loading",
        textContent: "正在加载...",
      },
      {
        style: `text-align: center; color: #61666d; transform: translateY(-50px)`,
      }
    );
    DOMUtils.append(this.$el.replyWrapper!, anchorElement);

    let paginationCounter = 1;
    const ob = new IntersectionObserver(async (entries) => {
      if (!entries[0].isIntersecting) return;
      const { data: newPaginationData } = await this.getPaginationData(++paginationCounter);
      if (!newPaginationData.replies || newPaginationData.replies.length === 0) {
        anchorElement.textContent = "所有评论已加载完毕";
        ob.disconnect();
        return;
      }

      for (const replyData of newPaginationData.replies) {
        this.appendReplyItem(replyData);
      }
    });

    ob.observe(anchorElement);
  },
};
