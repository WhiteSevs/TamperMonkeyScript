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
  $el: {
    hideMenuStyle: void 0 as undefined | HTMLStyleElement,
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
    const handlerBlock = () => {
      if (ExecMenu.every((it) => it.enable)) {
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
        if (this.$el.hideMenuStyle == null) {
          //
        } else {
          this.$el.hideMenuStyle.parentElement?.removeChild(this.$el.hideMenuStyle);
          this.$el.hideMenuStyle = void 0;
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
        handlerBlock();
      });
    });
    handlerBlock();
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
