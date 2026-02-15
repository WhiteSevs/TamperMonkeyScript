import { addStyle, log } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
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
      CommonUtil.addBlockCSS(
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
      CommonUtil.addBlockCSS(
        /* 看相关页面的 */
        "#slideMode + div",
        // 2024.7.16
        '.playerContainer .slider-video>div>div:has([data-e2e="searchbar-button"])'
      )
    );
    if (DouYinRouter.isSearch() || DouYinRouter.isDiscover()) {
      // 搜索页面的
      result.push(
        CommonUtil.addBlockCSS(
          // 2024.7.30
          '#douyin-right-container > div > div > div > div:has( div> input[data-e2e="searchbar-input"])'
        )
      );
    }
    if (DouYinRouter.isUser()) {
      // 用户页面的
      result.push(
        CommonUtil.addBlockCSS(
          '#douyin-right-container > div > div > div > div:has( div> input[data-e2e="searchbar-input"])'
        )
      );
    }
    if (DouYinRouter.isVideo()) {
      // 单个视频页面
      result.push(
        CommonUtil.addBlockCSS(
          '[data-e2e="video-detail"] .video-detail-container > div > div > div:nth-child(2):has( div> input[data-e2e="searchbar-input"])'
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
      CommonUtil.addBlockCSS(
        // 2024.7.16
        '.playerContainer .slider-video > div > div:has(path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])',
        // 推荐视频 - 直播的左上角关闭按钮
        'div:has(>svg path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
      )
    );
    if (DouYinRouter.isSearch() || DouYinRouter.isDiscover()) {
      // 搜索页面
      result.push(
        CommonUtil.addBlockCSS(
          '#douyin-right-container  div > div:has( > svg > path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
        )
      );
    }
    if (DouYinRouter.isUser()) {
      // 用户页面
      result.push(
        CommonUtil.addBlockCSS(
          '#douyin-right-container  div > div > div:has( > svg > path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
        )
      );
    }
    if (DouYinRouter.isVideo()) {
      // 单个视频页面
      result.push(
        CommonUtil.addBlockCSS(
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
    return CommonUtil.addBlockCSS(`.xgplayer-shop-anchor`);
  },
  /**
   * 【屏蔽】弹幕
   */
  blockDanmaku() {
    log.info(`【屏蔽】弹幕`);
    return CommonUtil.addBlockCSS(".basePlayerContainer .danmu");
  },
  /**
   * 【屏蔽】中间的播放图标
   */
  blockStartPlayIcon() {
    log.info(`【屏蔽】中间的播放图标`);
    return CommonUtil.addBlockCSS(".xgplayer-start");
  },
};
