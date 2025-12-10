import { log } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

export const DouYinVideoBlock_RightMenu = {
  $data: {
    /**
     * 右键菜单的通用选择器
     */
    menuSelector: '.basePlayerContainer div:not(.danmu) div[style*="top:"][style*="left:"]:not([style*="transform:"])',
  },
  init() {
    Panel.execMenuOnce("dy-video-player-block-right-menu-clearScreen", () => {
      return this.clearScreen();
    });
    Panel.execMenuOnce("dy-video-player-block-right-menu-comment", () => {
      return this.comment();
    });
    Panel.execMenuOnce("dy-video-player-block-right-menu-like", () => {
      return this.like();
    });
    Panel.execMenuOnce("dy-video-player-block-right-menu-enterAuthorHomePage", () => {
      return this.enterAuthorHomePage();
    });
    Panel.execMenuOnce("dy-video-player-block-right-menu-recommendToFriends", () => {
      return this.recommendToFriends();
    });
    Panel.execMenuOnce("dy-video-player-block-right-menu-share", () => {
      return this.share();
    });
    Panel.execMenuOnce("dy-video-player-block-right-menu-notInterested", () => {
      return this.notInterested();
    });
    Panel.execMenuOnce("dy-video-player-block-right-menu-feedback", () => {
      return this.feedback();
    });
    Panel.execMenuOnce("dy-video-player-block-right-menu-report", () => {
      return this.report();
    });
    Panel.execMenuOnce("dy-video-player-block-right-menu-enterDetailsPage", () => {
      return this.enterDetailsPage();
    });
  },
  /**
   * 【屏蔽】清屏
   */
  clearScreen() {
    log.info(`【屏蔽】右键菜单-清屏`);
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-child(1):not([data-danmu-id]):not(:empty)`);
  },
  /**
   * 【屏蔽】评论
   */
  comment() {
    log.info(`【屏蔽】右键菜单-评论`);
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-child(2):not([data-danmu-id]):not(:empty)`);
  },
  /**
   * 【屏蔽】赞
   */
  like() {
    log.info(`【屏蔽】右键菜单-赞`);
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-child(3):not([data-danmu-id]):not(:empty)`);
  },
  /**
   * 【屏蔽】进入作者主页
   */
  enterAuthorHomePage() {
    log.info(`【屏蔽】右键菜单-进入作者主页`);
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-child(4):not([data-danmu-id]):not(:empty)`);
  },
  /**
   * 【屏蔽】推荐给朋友
   */
  recommendToFriends() {
    log.info(`【屏蔽】右键菜单-推荐给朋友`);
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-child(5):not([data-danmu-id]):not(:empty)`);
  },
  /**
   * 【屏蔽】分享
   */
  share() {
    log.info(`【屏蔽】右键菜单-分享`);
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-child(6):not([data-danmu-id]):not(:empty)`);
  },
  /**
   * 【屏蔽】不感兴趣
   */
  notInterested() {
    log.info(`【屏蔽】右键菜单-不感兴趣`);
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-child(7):not([data-danmu-id]):not(:empty)`);
  },
  /**
   * 【屏蔽】意见反馈
   */
  feedback() {
    log.info(`【屏蔽】右键菜单-意见反馈`);
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-child(8):not([data-danmu-id]):not(:empty)`);
  },
  /**
   * 【屏蔽】举报
   */
  report() {
    log.info(`【屏蔽】右键菜单-举报`);
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-child(9):not([data-danmu-id]):not(:empty)`);
  },
  /**
   * 【屏蔽】进入详情页
   */
  enterDetailsPage() {
    log.info(`【屏蔽】右键菜单-进入详情页`);
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-child(10):not([data-danmu-id]):not(:empty)`);
  },
};
