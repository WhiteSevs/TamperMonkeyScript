import { addStyle, log } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { addBlockCSS, DOMUtils, utils } from "@components/env.base";
import { Panel } from "@components/setting/panel";
import { DouYinVideoBlock_BottomToolbar_PlayerComponents } from "./DouYinVideoBlock_BottomToolbar_PlayerComponents";
import { DouYinVideoBlock_BottomToolbar_videoInfo } from "./DouYinVideoBlock_BottomToolbar_videoInfo";
import { DouYinVideoBlock_Comment } from "./DouYinVideoBlock_Comment";
import { DouYinVideoBlock_Live } from "./DouYinVideoBlock_Live";
import { DouYinVideoBlock_RightMenu, DouYinVideoBlock_RightMenu_Live } from "./DouYinVideoBlock_RightMenu";
import { DouYinVideoBlock_RightToolbar } from "./DouYinVideoBlock_RightToolbar";

/**
 * 总屏蔽
 */
export const DouYinVideoBlock = {
  init() {
    Panel.execMenuOnce("shieldRightExpandCommentButton", () => {
      return this.blockRightExpandCommentButton();
    });
    Panel.execMenuOnce(
      "shieldSearchFloatingBar",
      () => {
        return this.blockSearchFloatingBar();
      },
      void 0,
      true
    );
    Panel.execMenuOnce(
      "shieldCloseFullScreenButton",
      () => {
        return this.blockCloseFullScreenButton();
      },
      void 0,
      true
    );
    Panel.execMenuOnce("dy-video-blockShopInfo", () => {
      return this.blockShopInfo();
    });
    Panel.execMenuOnce("dy-video-blockDanmaku", () => {
      return this.blockDanmaku();
    });
    Panel.execMenuOnce("dy-video-blockStartPlayIcon", () => {
      return this.blockStartPlayIcon();
    });
    Panel.execMenuOnce("dy-video-watchAndRemoveFullScreenTip", () => {
      return this.watchAndRemoveFullScreenTip();
    });
    Panel.execMenuOnce("dy-video-blockMessage", () => {
      return this.blockMessage();
    });
    DouYinVideoBlock_BottomToolbar_videoInfo.init();
    DouYinVideoBlock_BottomToolbar_PlayerComponents.init();
    DouYinVideoBlock_RightToolbar.init();
    DouYinVideoBlock_Comment.init();
    DouYinVideoBlock_Live.init();
    DouYinVideoBlock_RightMenu.init();
    DouYinVideoBlock_RightMenu_Live.init();
  },
  /**
   * 【屏蔽】右侧的展开评论按钮
   */
  blockRightExpandCommentButton() {
    log.info("【屏蔽】右侧的展开评论按钮");
    return [
      addBlockCSS(
        '#sliderVideo[data-e2e="feed-active-video"] > div > div > button[type="button"]',
        '.playerContainer button[type=button] svg > g[filter] > path[d="M21.316 29.73a1.393 1.393 0 01-1.97 0l-5.056-5.055a1.393 1.393 0 010-1.97l.012-.011 5.044-5.045a1.393 1.393 0 011.97 1.97l-4.07 4.071 4.07 4.071a1.393 1.393 0 010 1.97z"]'
      ),
      addStyle(/*css*/ `
			.basePlayerContainer .positionBox{
				padding-right: 20px !important;
			}`),
    ];
  },
  /**
   * 左上角的鼠标的快捷搜索热点的悬浮栏
   * 【屏蔽】搜索悬浮栏
   */
  blockSearchFloatingBar() {
    log.info("【屏蔽】搜索悬浮栏");
    const result = [];
    result.push(
      addBlockCSS(
        /* 看相关页面的 */
        "#slideMode + div",
        // 2024.7.16
        '.playerContainer .slider-video>div>div:has([data-e2e="searchbar-button"]):not([class*="douyin-player"])',
        '.douyin-player > div:has([data-e2e="searchbar-input"])'
      )
    );
    if (DouYinRouter.isSearch() || DouYinRouter.isDiscover()) {
      // 搜索页面的
      result.push(
        addBlockCSS(
          // 2024.7.30
          '#douyin-right-container > div > div > div > div:has( div> input[data-e2e="searchbar-input"])'
        )
      );
    } else if (DouYinRouter.isUser()) {
      // 用户页面的
      result.push(
        addBlockCSS('#douyin-right-container > div > div > div > div:has( div> input[data-e2e="searchbar-input"])')
      );
    } else if (DouYinRouter.isVideo()) {
      // 单个视频页面
      result.push(
        addBlockCSS(
          '[data-e2e="video-detail"] .video-detail-container > div > div > div:nth-child(2):has( div> input[data-e2e="searchbar-input"])'
        )
      );
    } else if (DouYinRouter.isNote()) {
      // 单个笔记页面，但这个笔记可能包含了视频
      // 视频+图片
      // 图片
      result.push(
        addBlockCSS('.note-detail-container > div > div:has( > div > div input[data-e2e="searchbar-input"])')
      );
    } else if (DouYinRouter.isJingXuan() || DouYinRouter.isHot()) {
      // 精选
      // 热点榜
      result.push(
        addBlockCSS(
          '#douyin-right-container div:has([data-e2e="modal-video-container"]) div:has(>div>input[data-e2e="searchbar-input"])'
        )
      );
    }
    return result;
  },
  /**
   * 【屏蔽】网页全屏关闭按钮
   */
  blockCloseFullScreenButton() {
    log.info("【屏蔽】网页全屏关闭按钮");
    const result = [];
    result.push(
      addBlockCSS(
        // 2024.7.16
        '.playerContainer .slider-video > div > div:not([class*="douyin-player"]):has(path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])',
        // 推荐视频 - 直播的左上角关闭按钮
        'div:has(>svg path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
      )
    );
    if (DouYinRouter.isSearch() || DouYinRouter.isDiscover()) {
      // 搜索页面
      result.push(
        addBlockCSS(
          '#douyin-right-container  div > div:has( > svg > path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
        )
      );
    }
    if (DouYinRouter.isUser()) {
      // 用户页面
      result.push(
        addBlockCSS(
          '#douyin-right-container  div > div > div:has( > svg > path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
        )
      );
    }
    if (DouYinRouter.isVideo()) {
      // 单个视频页面
      result.push(
        addBlockCSS(
          '#douyin-right-container  div > div > div:has( > svg > path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
        )
      );
    }
    return result;
  },
  /**
   * 【屏蔽】购物信息
   */
  blockShopInfo() {
    log.info(`【屏蔽】购物信息`);
    return addBlockCSS(`.xgplayer-shop-anchor`);
  },
  /**
   * 【屏蔽】弹幕
   */
  blockDanmaku() {
    log.info(`【屏蔽】弹幕`);
    return addBlockCSS(".basePlayerContainer .danmu");
  },
  /**
   * 【屏蔽】中间的播放图标
   */
  blockStartPlayIcon() {
    log.info(`【屏蔽】中间的播放图标`);
    return addBlockCSS(".xgplayer-start");
  },
  /**
   * 【屏蔽】ESC或Y可退出网页全屏
   */
  watchAndRemoveFullScreenTip() {
    log.info(`【屏蔽】ESC或Y可退出网页全屏`);
    const lockFn = new utils.LockFunction(() => {
      if (DouYinRouter.isLive()) return;
      DOMUtils.remove('body>div:has(>div:only-child)[style*="z-index"]:not(.semi-portal):contains("可退出网页全屏")');
    });
    const observer = utils.mutationObserver(document.body, {
      config: {
        childList: true,
      },
      immediate: true,
      callback: () => {
        lockFn.run();
      },
    });
    return () => {
      observer.disconnect();
    };
  },
  /**
   * 【屏蔽】消息
   */
  blockMessage() {
    log.info(`【屏蔽】消息`);
    return addBlockCSS(
      '.xgplayer > div[style*="transform"]:has(>img[src^="data:image"])',
      '.douyin-player>div:has(path[d="M11.348 18.245l6.883-11.841A1.6 1.6 0 0 0 16.847 4L3.13 4.007c-1.402 0-2.125 1.675-1.165 2.696L6.59 11.62a.1.1 0 0 1 .023.04l1.816 6.23c.394 1.35 2.213 1.572 2.92.355zM3.13 5.508L16.848 5.5c.03 0 .043.007.05.01a.11.11 0 0 1 .036.04.11.11 0 0 1 .016.051c0 .008 0 .022-.016.05l-6.882 11.84a.14.14 0 0 1-.026.035.048.048 0 0 1-.012.008.117.117 0 0 1-.06.007.117.117 0 0 1-.059-.021.046.046 0 0 1-.01-.011.142.142 0 0 1-.016-.04l-1.644-5.64 4.84-3.803c.184-.145.014-.433-.201-.342l-5.669 2.39-4.137-4.399a.141.141 0 0 1-.026-.034.045.045 0 0 1-.004-.014.116.116 0 0 1 .01-.06.116.116 0 0 1 .037-.05.045.045 0 0 1 .013-.005.141.141 0 0 1 .042-.005z"])',
      '.xgplayer>div:has(path[d="M11.348 18.245l6.883-11.841A1.6 1.6 0 0 0 16.847 4L3.13 4.007c-1.402 0-2.125 1.675-1.165 2.696L6.59 11.62a.1.1 0 0 1 .023.04l1.816 6.23c.394 1.35 2.213 1.572 2.92.355zM3.13 5.508L16.848 5.5c.03 0 .043.007.05.01a.11.11 0 0 1 .036.04.11.11 0 0 1 .016.051c0 .008 0 .022-.016.05l-6.882 11.84a.14.14 0 0 1-.026.035.048.048 0 0 1-.012.008.117.117 0 0 1-.06.007.117.117 0 0 1-.059-.021.046.046 0 0 1-.01-.011.142.142 0 0 1-.016-.04l-1.644-5.64 4.84-3.803c.184-.145.014-.433-.201-.342l-5.669 2.39-4.137-4.399a.141.141 0 0 1-.026-.034.045.045 0 0 1-.004-.014.116.116 0 0 1 .01-.06.116.116 0 0 1 .037-.05.045.045 0 0 1 .013-.005.141.141 0 0 1 .042-.005z"])'
    );
  },
};
