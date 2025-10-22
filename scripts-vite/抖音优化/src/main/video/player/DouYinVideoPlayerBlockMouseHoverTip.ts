import { log } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

export const DouYinVideoPlayerBlockMouseHoverTip = {
  init() {
    // 右侧工具栏的
    DouYinVideoPlayerBlockMouseHoverTip_RightToolBar.init();

    // 底部工具栏的
    DouYinVideoPlayerBlockMouseHoverTip_BottomToolBar.init();
  },
};

export const DouYinVideoPlayerBlockMouseHoverTip_RightToolBar = {
  init() {
    Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-enterUserHome", () => {
      return this.blockEnterUserHomeMouseHoverTip();
    });
    Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-follow", () => {
      return this.blockFollowMouseHoverTip();
    });
    Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-addLike", () => {
      return this.blockAddLikeMouseHoverTip();
    });
    Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-comment", () => {
      return this.blockCommentMouseHoverTip();
    });
    Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-collect", () => {
      return this.blockCollectMouseHoverTip();
    });
    Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-share", () => {
      return this.blockShareMouseHoverTip();
    });
    Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-seeCorrelation", () => {
      return this.blockSeeCorrelationMouseHoverTip();
    });
    Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-more", () => {
      return this.blockMoreMouseHoverTip();
    });
  },
  /**
   * 禁用进入作者主页按钮的悬浮提示
   */
  blockEnterUserHomeMouseHoverTip() {
    log.info(`禁用进入作者主页按钮的悬浮提示`);
    return CommonUtil.addBlockCSS(` div > div:has( >a[data-e2e="video-avatar"]) + .semi-portal`);
  },
  /**
   * 禁用关注按钮的悬浮提示
   */
  blockFollowMouseHoverTip() {
    log.info(`禁用关注按钮的悬浮提示`);
    return CommonUtil.addBlockCSS(`div[data-e2e="feed-follow-icon"]  .semi-portal`);
  },
  /**
   * 禁用点赞按钮的悬浮提示
   */
  blockAddLikeMouseHoverTip() {
    log.info(`禁用点赞按钮的悬浮提示`);
    return CommonUtil.addBlockCSS(`div[data-e2e="video-player-digg"] + .semi-portal`);
  },
  /**
   * 禁用评论按钮的悬浮提示
   */
  blockCommentMouseHoverTip() {
    log.info(`禁用评论按钮的悬浮提示`);
    return CommonUtil.addBlockCSS(`div[data-e2e="feed-comment-icon"] + .semi-portal`);
  },
  /**
   * 禁用收藏按钮的悬浮提示
   */
  blockCollectMouseHoverTip() {
    log.info(`禁用收藏按钮的悬浮提示`);
    return CommonUtil.addBlockCSS(`div[data-e2e="video-player-collect"] + .semi-always-dark`);
  },
  /**
   * 禁用分享按钮的悬浮提示
   */
  blockShareMouseHoverTip() {
    log.info(`禁用分享按钮的悬浮提示`);
    return CommonUtil.addBlockCSS(`div[data-e2e="video-share-container"]`);
  },
  /**
   * 禁用看相关推荐按钮的悬浮提示
   */
  blockSeeCorrelationMouseHoverTip() {
    log.info(`禁用看相关推荐按钮的悬浮提示`);
    return CommonUtil.addBlockCSS(`div:has(+[data-e2e="video-play-more"]) .semi-portal`);
  },
  /**
   * 禁用更多按钮的悬浮提示
   */
  blockMoreMouseHoverTip() {
    log.info(`禁用更多按钮的悬浮提示`);
    return CommonUtil.addBlockCSS(`[data-e2e="video-play-more"] > div:has([data-e2e="more-music-detail"])`);
  },
};

export const DouYinVideoPlayerBlockMouseHoverTip_BottomToolBar = {
  init() {
    Panel.execMenuOnce("dy-video-mouseHoverTip-bottomToolBar-automaticBroadcast", () => {
      return this.blockAutomaticBroadcast();
    });
    Panel.execMenuOnce("dy-video-mouseHoverTip-bottomToolBar-clearScreen", () => {
      return this.blockClearScreenMouseHoverTip();
    });
    Panel.execMenuOnce("dy-video-mouseHoverTip-bottomToolBar-watchLater", () => {
      return this.blockWatchLaterMouseHoverTip();
    });
    Panel.execMenuOnce("dy-video-mouseHoverTip-bottomToolBar-pageFullScreen", () => {
      return this.blockPageFullScreenMouseHoverTip();
    });
    Panel.execMenuOnce("dy-video-mouseHoverTip-bottomToolBar-fullScreen", () => {
      return this.blockFullScreenMouseHoverTip();
    });
  },
  /**
   * 禁用自动连播按钮的悬浮提示
   */
  blockAutomaticBroadcast() {
    log.info(`禁用自动连播按钮的悬浮提示`);
    return CommonUtil.addBlockCSS(`div[data-e2e="video-player-auto-play"] + .xgTips`);
  },
  /**
   * 禁用清屏按钮的悬浮提示
   */
  blockClearScreenMouseHoverTip() {
    log.info(`禁用清屏按钮的悬浮提示`);
    return CommonUtil.addBlockCSS(`.xgplayer-immersive-switch-setting .xgTips`);
  },
  /**
   * 禁用稍后再看按钮的悬浮提示
   */
  blockWatchLaterMouseHoverTip() {
    log.info(`禁用稍后再看按钮的悬浮提示`);
    return CommonUtil.addBlockCSS(`.xgplayer-watch-later .xgTips`, `.xgplayer-watch-later-item + .xgTips`);
  },
  /**
   * 禁用网页全屏按钮的悬浮提示
   */
  blockPageFullScreenMouseHoverTip() {
    log.info(`禁用网页全屏按钮的悬浮提示`);
    return CommonUtil.addBlockCSS(`.xgplayer-page-full-screen .xgTips`);
  },
  /**
   * 禁用全屏按钮的悬浮提示
   */
  blockFullScreenMouseHoverTip() {
    log.info(`禁用全屏按钮的悬浮提示`);
    return CommonUtil.addBlockCSS(`.xgplayer-fullscreen .xg-tips`);
  },
};
