import { log } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

export const DouYinVideoBlock_RightMenu = {
  $data: {
    /**
     * 右键菜单的通用选择器
     */
    menuSelector: '.basePlayerContainer div:not(.danmu) div[style*="top:"][style*="left:"]:not([style*="transform:"])',
    /**
     * 右键菜单的通用选择器（仅推荐/搜索）
     */
    menuSelector_sliderVideo:
      '#sliderVideo .basePlayerContainer div:not(.danmu) div[style*="top:"][style*="left:"]:not([style*="transform:"])',
    /**
     * 右键菜单的通用选择器（仅合集/详情）
     */
    menuSelector_slideMode: `#slideMode .basePlayerContainer div:not(.danmu) div[style*="top:"][style*="left:"]:not([style*="transform:"])`,
    /**
     * 右键菜单的通用选择器（仅单个视频）
     */
    menuSelector_onlyVideo: `.video-detail-container .basePlayerContainer div:not(.danmu) div[style*="top:"][style*="left:"]:not([style*="transform:"])`,
  },
  $el: {
    hideMenuStyle: null as null | HTMLStyleElement,
  },
  init() {
    const ExecMenu: {
      enable: boolean;
      key: string;
      callback: () => any;
    }[] = [
      {
        enable: false,
        key: "dy-video-player-block-right-menu-clearScreen",
        callback: () => {
          return this.clearScreen();
        },
      },
      {
        enable: false,
        key: "dy-video-player-block-right-menu-comment",
        callback: () => {
          return this.comment();
        },
      },
      {
        enable: false,
        key: "dy-video-player-block-right-menu-like",
        callback: () => {
          return this.like();
        },
      },
      {
        enable: false,
        key: "dy-video-player-block-right-menu-enterAuthorHomePage",
        callback: () => {
          return this.enterAuthorHomePage();
        },
      },
      {
        enable: false,
        key: "dy-video-player-block-right-menu-recommendToFriends",
        callback: () => {
          return this.recommendToFriends();
        },
      },
      {
        enable: false,
        key: "dy-video-player-block-right-menu-share",
        callback: () => {
          return this.share();
        },
      },
      {
        enable: false,
        key: "dy-video-player-block-right-menu-notInterested",
        callback: () => {
          return this.notInterested();
        },
      },
      {
        enable: false,
        key: "dy-video-player-block-right-menu-feedback",
        callback: () => {
          return this.feedback();
        },
      },
      {
        enable: false,
        key: "dy-video-player-block-right-menu-report",
        callback: () => {
          return this.report();
        },
      },
      {
        enable: false,
        key: "dy-video-player-block-right-menu-enterDetailsPage",
        callback: () => {
          return this.enterDetailsPage();
        },
      },
    ];
    const handleMenuBlock = () => {
      const allEnable = ExecMenu.every((it) => it.enable);
      if (allEnable) {
        // 全部执行了
        // 屏蔽总菜单
        if (this.$el.hideMenuStyle == null) {
          this.$el.hideMenuStyle = CommonUtil.addBlockCSS(`${this.$data.menuSelector}`)!;
        } else {
          if (!document.contains(this.$el.hideMenuStyle)) {
            // 不在页面，重新添加
            document.head.appendChild(this.$el.hideMenuStyle);
          }
        }
      } else {
        // 不完全执行
        // 移除总屏蔽css
        if (this.$el.hideMenuStyle != null) {
          this.$el.hideMenuStyle.remove();
          this.$el.hideMenuStyle = null;
        }
      }
    };
    ExecMenu.forEach((item) => {
      Panel.execMenuOnce(
        item.key,
        () => {
          item.enable = true;
          return item.callback();
        },
        false,
        true
      );
      Panel.addValueChangeListener(item.key, (key, newValue, oldValue) => {
        const findValue = ExecMenu.find((it) => it.key === key);
        if (findValue) {
          findValue.enable = newValue;
        }
        handleMenuBlock();
      });
    });
    handleMenuBlock();
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
    return CommonUtil.addBlockCSS(
      `${this.$data.menuSelector_slideMode} > *:nth-child(5):not([data-danmu-id]):not(:empty)`,
      `${this.$data.menuSelector_sliderVideo} > *:nth-child(5):not([data-danmu-id]):not(:empty)`
    );
  },
  /**
   * 【屏蔽】分享
   */
  share() {
    log.info(`【屏蔽】右键菜单-分享`);
    if (DouYinRouter.isVideo()) {
      return CommonUtil.addBlockCSS(
        `${this.$data.menuSelector_onlyVideo} > *:nth-child(5):not([data-danmu-id]):not(:empty)`
      );
    }
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-child(6):not([data-danmu-id]):not(:empty)`);
  },
  /**
   * 【屏蔽】不感兴趣
   */
  notInterested() {
    log.info(`【屏蔽】右键菜单-不感兴趣`);
    // 在进入详情页时，此选项没有
    return CommonUtil.addBlockCSS(
      `${this.$data.menuSelector_sliderVideo} > *:nth-child(7):not([data-danmu-id]):not(:empty)`
    );
  },
  /**
   * 【屏蔽】意见反馈
   */
  feedback() {
    log.info(`【屏蔽】右键菜单-意见反馈`);
    if (DouYinRouter.isVideo()) {
      return CommonUtil.addBlockCSS(
        `${this.$data.menuSelector_onlyVideo} > *:nth-last-child(2):not([data-danmu-id]):not(:empty)`
      );
    }
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-last-child(3):not([data-danmu-id]):not(:empty)`);
  },
  /**
   * 【屏蔽】举报
   */
  report() {
    log.info(`【屏蔽】右键菜单-举报`);
    if (DouYinRouter.isVideo()) {
      return CommonUtil.addBlockCSS(
        `${this.$data.menuSelector_onlyVideo} > *:nth-last-child(1):not([data-danmu-id]):not(:empty)`
      );
    }
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-last-child(2):not([data-danmu-id]):not(:empty)`);
  },
  /**
   * 【屏蔽】进入详情页
   */
  enterDetailsPage() {
    log.info(`【屏蔽】右键菜单-进入详情页`);
    if (DouYinRouter.isVideo()) {
      return;
    }
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-last-child(1):not([data-danmu-id]):not(:empty)`);
  },
};

export const DouYinVideoBlock_RightMenu_Live = {
  $data: {
    /**
     * 右键菜单的通用选择器
     */
    menuSelector: '[data-e2e="feed-live"] div[style*="top:"][style*="left:"]:not([style*="transform:"])',
  },
  $el: {
    hideMenuStyle: null as null | HTMLStyleElement,
  },
  init() {
    const ExecMenu: {
      enable: boolean;
      key: string;
      callback: () => any;
    }[] = [
      {
        enable: false,
        key: "dy-video-player-block-right-menu-live-not-interested",
        callback: () => {
          return this.notInterested();
        },
      },
      {
        enable: false,
        key: "dy-video-player-block-right-menu-live-report",
        callback: () => {
          return this.report();
        },
      },
      {
        enable: false,
        key: "dy-video-player-block-right-menu-live-open-blank-room",
        callback: () => {
          return this.openBlankRoom();
        },
      },
    ];
    const handleMenuBlock = () => {
      const allEnable = ExecMenu.every((it) => it.enable);
      if (allEnable) {
        // 全部执行了
        // 屏蔽总菜单
        if (this.$el.hideMenuStyle == null) {
          this.$el.hideMenuStyle = CommonUtil.addBlockCSS(`${this.$data.menuSelector}`)!;
        } else {
          if (!document.contains(this.$el.hideMenuStyle)) {
            // 不在页面，重新添加
            document.head.appendChild(this.$el.hideMenuStyle);
          }
        }
      } else {
        // 不完全执行
        // 移除总屏蔽css
        if (this.$el.hideMenuStyle != null) {
          this.$el.hideMenuStyle.remove();
          this.$el.hideMenuStyle = null;
        }
      }
    };
    ExecMenu.forEach((item) => {
      Panel.execMenuOnce(item.key, () => {
        item.enable = true;
        return item.callback();
      });
      Panel.addValueChangeListener(item.key, (key, newValue, oldValue) => {
        const findValue = ExecMenu.find((it) => it.key === key);
        if (findValue) {
          findValue.enable = newValue;
        }
        handleMenuBlock();
      });
    });
    handleMenuBlock();
  },
  /**
   * 【屏蔽】不感兴趣
   */
  notInterested() {
    log.info(`【屏蔽】右键菜单-直播间-不感兴趣`);
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-child(1):not(:empty)`);
  },
  /**
   * 【屏蔽】举报
   */
  report() {
    log.info(`【屏蔽】右键菜单-直播间-举报`);
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-child(2):not(:empty)`);
  },
  /**
   * 【屏蔽】在新标签页打开直播间
   */
  openBlankRoom() {
    log.info(`【屏蔽】右键菜单-直播间-在新标签页打开直播间`);
    return CommonUtil.addBlockCSS(`${this.$data.menuSelector} > *:nth-child(3):not(:empty)`);
  },
};
