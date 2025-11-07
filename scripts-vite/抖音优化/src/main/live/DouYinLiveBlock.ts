import { addStyle, DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

export const DouYinLiveBlock_ChatRoom = {
  init() {
    Panel.execMenuOnce("live-shieldChatRoom", () => {
      return this.shieldChatRoom();
    });
    Panel.execMenuOnce("live-shielChatRoomVipSeats", () => {
      return this.shielChatRoomVipSeats();
    });
    Panel.execMenuOnce("dy-live-shieldUserLevelIcon", () => {
      return this.shieldUserLevelIcon();
    });
    Panel.execMenuOnce("dy-live-shieldUserVIPIcon", () => {
      return this.shieldUserVIPIcon();
    });
    Panel.execMenuOnce("dy-live-shieldUserFansIcon", () => {
      return this.shieldUserFansIcon();
    });
    Panel.execMenuOnce("dy-live-shieldMessage", () => {
      return this.shieldMessage();
    });
  },
  /**
   * 【屏蔽】评论区（聊天室）
   */
  shieldChatRoom() {
    log.info("【屏蔽】评论区（聊天室）");
    return [
      CommonUtil.addBlockCSS(
        "#chatroom",
        // 2025.6.29 新版
        "#RightBackgroundLayout"
      ),
      addStyle(/*css*/ `
            div[data-e2e="living-container"],
            div[data-e2e="living-container"] > div{
                margin-bottom: 0px !important;
            }`),
    ];
  },
  /**
   * 【屏蔽】评论区的贵宾席
   */
  shielChatRoomVipSeats() {
    log.info("【屏蔽】评论区的贵宾席");
    return [
      CommonUtil.addBlockCSS(
        "#chatroom > div > div:has(#audiencePanelScrollId)",
        '#chatroom > div > div:has([data-e2e="live-room-audience"])',
        // Firefox上的CSS，多了个pace-island
        '#chatroom > pace-island > div > div:has([data-e2e="live-room-audience"])'
      ),
    ];
  },
  /**
   * 【屏蔽】用户等级图标
   */
  shieldUserLevelIcon() {
    log.info("【屏蔽】用户等级图标");
    return [CommonUtil.addBlockCSS('#chatroom .webcast-chatroom___item span:has(>img[src*="level"])')];
  },
  /**
   * 【屏蔽】VIP图标
   */
  shieldUserVIPIcon() {
    log.info("【屏蔽】VIP图标");
    return [CommonUtil.addBlockCSS('#chatroom .webcast-chatroom___item span:has(>img[src*="subscribe"])')];
  },
  /**
   * 【屏蔽】粉丝牌
   */
  shieldUserFansIcon() {
    log.info("【屏蔽】粉丝牌");
    return [
      CommonUtil.addBlockCSS(
        '#chatroom .webcast-chatroom___item span:has(>div[style*="fansclub"])',
        '#chatroom .webcast-chatroom___item span:has(>img[src*="fansclub"])'
      ),
    ];
  },
  /**
   * 【屏蔽】信息播报
   */
  shieldMessage() {
    log.info("【屏蔽】信息播报");
    // 暂时失效
    return [
      CommonUtil.addBlockCSS(
        "#chatroom .webcast-chatroom___bottom-message",
        // 上面的滚动播报，xxx进入/加入了直播间
        `#chatroom > div > div> pace-island:has(div[style*="new_grade_enter"])`
      ),
    ];
  },
};

export const DouYinLiveBlock_VideoAreaRightMenu = {
  init() {
    Panel.execMenuOnce("dy-live-blockVideoRightMenu-downloadClient", () => {
      return this.blockDownloadClient();
    });
  },
  /**
   * 【屏蔽】右键菜单-下载客户端
   */
  blockDownloadClient() {
    log.info(`【屏蔽】右键菜单-下载客户端`);
    return [CommonUtil.addBlockCSS('.__menu_container_className:has(>a[href*="douyin-pc-web"])')];
  },
};

/**
 * 需验证以下状态下的屏蔽情况，防止误杀
 *
 * + Chrome、Firefox浏览器下
 * + 普通播放情况下
 * + 网页宽屏模式下
 * + F11全屏情况下
 */
export const DouYinLiveBlock = {
  init() {
    Panel.execMenuOnce("live-shieldGiftColumn", () => {
      return this.shieldGiftColumn();
    });
    Panel.execMenuOnce("live-shieldTopToolBarInfo", () => {
      return this.shieldTopToolBarInfo();
    });
    Panel.execMenuOnce("live-shieldGiftEffects", () => {
      return this.shieldGiftEffects();
    });
    Panel.execMenuOnce("live-shieldLucky", () => {
      return this.shieldLucky();
    });
    Panel.execMenuOnce("live-shielYellowCar", () => {
      return this.shieldYellowCar();
    });
    Panel.execMenuOnce("live-shieldDanmuku", () => {
      return this.shieldDanmu();
    });
    Panel.execMenuOnce("live-block-exhibition-banner-dylive-tooltip", () => {
      return this.block_exhibition_banner_dylive_tooltip();
    });
    DouYinLiveBlock_ChatRoom.init();
    DouYinLiveBlock_VideoAreaRightMenu.init();
  },
  /**
   * 【屏蔽】底部的礼物栏
   */
  shieldGiftColumn() {
    log.info("【屏蔽】底部的礼物栏");
    return [
      CommonUtil.addBlockCSS(
        // 2025.5.9
        'div[data-e2e="living-container"] [id^="living_room_player_container"] > :last-child:has(.gitBarOptimizeEnabled )',
        // Firefox上的CSS，多了个pace-island
        'div[data-e2e="living-container"] >div> div:has(>pace-island >.gitBarOptimizeEnabled)',
        // 全屏状态下的
        'div[data-e2e="living-container"] xg-controls > div:has(div[data-e2e="gifts-container"]):not(:has(video))',
        // 2025.6.29 新版
        "#BottomLayout",
        // 2025.7.23 新版 全屏下的礼物栏
        ".douyin-player .douyin-player-controls >div:nth-child(2):has(> .gitBarOptimizeEnabled )",
        // 2025.9.6 新版
        `div[data-e2e="living-container"] >div div:has(>pace-island>.gitBarOptimizeEnabled)`
      ),
      addStyle(/*css*/ `
            /* 去除全屏状态下的礼物栏后，上面的工具栏bottom也去除 */
            div[data-e2e="living-container"] xg-controls xg-inner-controls:has(+div div[data-e2e="gifts-container"]){
                bottom: 0 !important;
            }`),
    ];
  },
  /**
   * 【屏蔽】顶栏信息
   * 包括直播作者、右侧的礼物展馆
   */
  shieldTopToolBarInfo() {
    log.info("【屏蔽】顶栏信息");
    return [
      CommonUtil.addBlockCSS(
        'div[data-e2e="living-container"] div[id*="living_room_player_container"] > pace-island[id^="island_"]',
        // 2024.12.26
        'div[data-e2e="living-container"] div[id*="living_room_player_container"] >div>div>pace-island[id^="island_"]:has(.__isFullPlayer)',
        // 全屏状态下的
        'div[data-e2e="living-container"] xg-bar.xg-top-bar',
        // 2025.6.29 新版
        "#HeaderLayout",
        // 2025.7.23 新版 全屏下的礼物栏
        ".douyin-player .douyin-player-top-bar"
      ),
      addStyle(/*css*/ `
				/* 去除屏蔽顶部后直播的video偏移 */
				#PlayerLayout [id^="living_player_containerdouyin-player"]{
					padding-top: 0 !important;
				}
			`),
    ];
  },
  /**
   * 【屏蔽】礼物特效
   */
  shieldGiftEffects() {
    // log.info("【屏蔽】礼物特效");
    // let result: (HTMLStyleElement | undefined)[] = [
    // 	CommonUtil.addBlockCSS(
    // 		// ↓该屏蔽会把连麦的用户也屏蔽了
    // 		// '.basicPlayer[data-e2e="basicPlayer"]  pace-island[id^="island_"]:has(>div>div>div)'
    // 		// 排除掉福袋
    // 		'.basicPlayer[data-e2e="basicPlayer"] > pace-island[id^="island_"]:not(:has(.ShortTouchContainer)):has(>div > div:not([class*="video_layout_container"]) > div)',
    // 		// 2025.6.29 新版
    // 		"#GiftTrayLayout"
    // 	),
    // ];
    DOMUtils.ready(() => {
      DOMUtils.waitNode(() => {
        return (
          DOMUtils.selector<HTMLElement>("xg-icon.pluginContainer > div:contains('屏蔽礼物特效')") ||
          DOMUtils.selector<HTMLElement>(`xg-icon[classname*="pluginContainer"] > div:contains('屏蔽礼物特效')`) ||
          DOMUtils.selector<HTMLElement>('.douyin-player-controls-right > slot > div:has([data-e2e="effect-switch"])')
        );
      }, 10000).then(($el) => {
        if (!$el) {
          log.error("【屏蔽】礼物特效失败，原因：获取按钮超时");
          return;
        }
        let { reactFiber } = utils.getReactInstance($el);
        let onClick = reactFiber?.memoizedProps?.children?.[1]?.props?.onClick;
        if (typeof onClick === "function") {
          log.info(`调用【屏蔽】礼物特效按钮的onClick函数`);
          onClick();
        } else {
          log.error(`【屏蔽】礼物特效失败，原因：未获取到onClick函数`);
        }
      });
    });
    // return result;
  },
  /**
   * 【屏蔽】福袋
   */
  shieldLucky() {
    log.info("【屏蔽】福袋");
    return [
      CommonUtil.addBlockCSS(
        '.basicPlayer[data-e2e="basicPlayer"] > pace-island[id^="island_"]:has(.ShortTouchContainer):has(>div > div:not([class*="video_layout_container"]) > div)',
        // 2026.6.29 新版
        "#ShortTouchLayout x-view",
        // 2025.7.23 新版
        "#ShortTouchLayout .ShortTouchContainer"
      ),
    ];
  },
  /**
   * 【屏蔽】小黄车
   */
  shieldYellowCar() {
    log.info("【屏蔽】小黄车");
    return [
      CommonUtil.addBlockCSS(
        'div[id^="living_room_player_container"] .basicPlayer  > div:has(div[data-e2e="yellowCart-container"])',
        // 2026.6.29 新版
        "#EcmoCardLayout"
      ),
    ];
  },
  /**
   * 屏蔽弹幕
   */
  shieldDanmu() {
    log.info("屏蔽弹幕");
    return [
      CommonUtil.addBlockCSS(
        "xg-danmu.xgplayer-danmu",
        // 2025.6.29 新版
        "#DanmakuLayout"
      ),
    ];
  },
  /**
   * 【屏蔽】点亮展馆帮主播集星
   */
  block_exhibition_banner_dylive_tooltip() {
    log.info(`【屏蔽】点亮展馆帮主播集星`);
    return [CommonUtil.addBlockCSS('[data-e2e="exhibition-banner"] .dylive-tooltip')];
  },
};
