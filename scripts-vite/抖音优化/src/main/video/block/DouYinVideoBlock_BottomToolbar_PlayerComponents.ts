import { addStyle, log } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import { DouYinVideoPlayer } from "../player/DouYinVideoPlayer";

/**
 * 底部工具栏 - 播放器组件
 */
export const DouYinVideoBlock_BottomToolbar_PlayerComponents = {
  init() {
    Panel.execMenuOnce("shieldBottomVideoToolBar", () => {
      return this.shieldBottomVideoToolBar();
    });
    Panel.execMenuOnce("shieldBottomVideoToolBar-play", () => {
      return this.blockPlay();
    });
    Panel.execMenuOnce("shieldBottomVideoToolBar-time", () => {
      return this.blockTime();
    });
    Panel.execMenuOnce("shieldBottomVideoToolbar-blockChapterContainer", () => {
      return this.blockChapterContainer();
    });
    Panel.execMenuOnce("shieldBottomVideoToolbarDanmuContainer", () => {
      return this.shieldBottomVideoToolbarDanmuContainer();
    });
    Panel.execMenuOnce("shieldBottomVideoToolbar-autoPlay", () => {
      return this.autoPlay();
    });
    Panel.execMenuOnce("shieldBottomVideoToolbar-aiNotes", () => {
      return this.aiNotes();
    });
    Panel.execMenuOnce("shieldBottomVideoToolbar-clearScreen", () => {
      return this.clearScreen();
    });
    Panel.execMenuOnce("shieldBottomVideoToolbar-playclarity", () => {
      return this.playclarity();
    });
    Panel.execMenuOnce("shieldBottomVideoToolbar-playback", () => {
      return this.playback();
    });
    Panel.execMenuOnce("shieldBottomVideoToolbar-watchLater", () => {
      return this.watchLater();
    });
    Panel.execMenuOnce("shieldBottomVideoToolbar-miniMode", () => {
      return this.miniMode();
    });
    Panel.execMenuOnce("shieldBottomVideoToolbar-volume", () => {
      return this.volume();
    });
    Panel.execMenuOnce("shieldBottomVideoToolbar-pageFullScreen", () => {
      return this.pageFullScreen();
    });
    Panel.execMenuOnce("shieldBottomVideoToolbar-fullScreen", () => {
      return this.fullScreen();
    });
  },
  /**
   * 【屏蔽】播放器组件
   */
  shieldBottomVideoToolBar() {
    log.info("【屏蔽】播放器组件");
    return [
      CommonUtil.addBlockCSS("xg-controls.xgplayer-controls", ".douyin-player-controls"),
      // 修复屏蔽后视频信息区域未沉底
      DouYinVideoPlayer.removeStyleBottom(),
      addStyle(/*css*/ `
        /* 视频信息往下移 */
			  #sliderVideo[data-e2e="feed-active-video"] div:has( > div > #video-info-wrap),
        div:has(> #video-info-wrap){
            bottom: 0px !important;
        }
      `),
    ];
  },
  /**
   * 【屏蔽】播放
   */
  blockPlay() {
    log.info(`【屏蔽】播放`);
    return CommonUtil.addBlockCSS(
      ".xgplayer-play",
      // 推荐视频中刷出的直播
      ".douyin-player-controls .douyin-player-play"
    );
  },
  /**
   * 【屏蔽】播放时长
   */
  blockTime() {
    log.info(`【屏蔽】播放时长`);
    return CommonUtil.addBlockCSS(
      ".xgplayer-time",
      // 在搜索页面下它会被强制flex !important
      // 这里要提高优先级
      ".search-result-card .xgplayer[id^='oK_'] xg-controls.xgplayer-controls xg-left-grid.xg-left-grid .xgplayer-play+xg-icon.xgplayer-time"
    );
  },
  /**
   * 【屏蔽】章节要点
   */
  blockChapterContainer() {
    log.info(`【屏蔽】章节要点`);
    return CommonUtil.addBlockCSS('.chapterContainer[data-e2e="chapter-container"]');
  },
  /**
   * 【屏蔽】底部视频工具栏的弹幕容器
   */
  shieldBottomVideoToolbarDanmuContainer() {
    // 弹幕
    // .basePlayerContainer > div.danmu
    log.info("【屏蔽】底部视频工具栏的弹幕容器");
    return CommonUtil.addBlockCSS('xg-controls xg-inner-controls .danmakuContainer[data-e2e="danmaku-container"]');
  },
  /**
   * 【屏蔽】AI笔记
   */
  aiNotes() {
    log.info(`【屏蔽】AI笔记`);
    return CommonUtil.addBlockCSS('.ai-note-container[data-e2e="ai-note-container"]');
  },
  /**
   * 【屏蔽】连播
   */
  autoPlay() {
    log.info(`【屏蔽】连播`);
    return CommonUtil.addBlockCSS(
      ".xgplayer-autoplay-setting",
      // 直播视频的
      '[data-e2e="feed-live"] xg-controls xg-right-grid .pluginContainer',
      ".douyin-player-controls .douyin-player-controls-right slot:last-child:not([data-index])"
    );
  },
  /**
   * 【屏蔽】清屏
   */
  clearScreen() {
    log.info(`【屏蔽】清屏`);
    return CommonUtil.addBlockCSS(".xgplayer-immersive-switch-setting");
  },
  /**
   * 【屏蔽】清晰度
   */
  playclarity() {
    log.info(`【屏蔽】清晰度`);
    return CommonUtil.addBlockCSS(".xgplayer-playclarity-setting");
  },
  /**
   * 【屏蔽】倍速
   */
  playback() {
    log.info(`【屏蔽】倍速`);
    return CommonUtil.addBlockCSS(".xgplayer-playback-setting");
  },
  /**
   * 【屏蔽】稍后再看
   */
  watchLater() {
    log.info(`【屏蔽】稍后再看`);
    return CommonUtil.addBlockCSS(".xgplayer-watch-later");
  },
  /**
   * 【屏蔽】小窗模式
   */
  miniMode() {
    log.info(`【屏蔽】小窗模式`);
    return CommonUtil.addBlockCSS(".xgplayer-pip");
  },
  /**
   * 【屏蔽】音量
   */
  volume() {
    log.info(`【屏蔽】音量`);
    return CommonUtil.addBlockCSS(".xgplayer-volume", ".douyin-player-controls .douyin-player-volume");
  },
  /**
   * 【屏蔽】网页全屏
   */
  pageFullScreen() {
    log.info(`【屏蔽】网页全屏`);
    return CommonUtil.addBlockCSS(".xgplayer-page-full-screen");
  },
  /**
   * 【屏蔽】进入全屏
   */
  fullScreen() {
    log.info(`【屏蔽】进入全屏`);
    return CommonUtil.addBlockCSS(".xgplayer-fullscreen");
  },
};
