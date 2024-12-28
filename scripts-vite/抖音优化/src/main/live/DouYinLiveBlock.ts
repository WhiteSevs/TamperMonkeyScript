import { addStyle, log } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { CommonUtil } from "@/utils/CommonUtil";

/**
 * 需验证以下状态下的屏蔽情况，防止误杀
 * 1. Chrome、Firefox浏览器下
 * 2. 普通播放情况下
 * 3. 网页宽屏模式下
 * 3. F11全屏情况下
 */
export const DouYinLiveBlock = {
	init() {
		PopsPanel.execMenuOnce("live-shieldGiftColumn", () => {
			return this.shieldGiftColumn();
		});
		PopsPanel.execMenuOnce("live-shieldTopToolBarInfo", () => {
			return this.shieldTopToolBarInfo();
		});
		PopsPanel.execMenuOnce("live-shieldGiftEffects", () => {
			return this.shieldGiftEffects();
		});
		PopsPanel.execMenuOnce("live-shieldLucky", () => {
			return this.shieldLucky();
		});
		PopsPanel.execMenuOnce("live-shielYellowCar", () => {
			return this.shieldYellowCar();
		});
		PopsPanel.execMenuOnce("live-shieldDanmuku", () => {
			return this.shieldDanmu();
		});
		DouYinLiveChatRoomBlock.init();
		DouYinLiveVideoAreaRightMenu.init();
	},
	/**
	 * 屏蔽弹幕
	 */
	shieldDanmu() {
		log.info("屏蔽弹幕");
		return [CommonUtil.addBlockCSS("xg-danmu.xgplayer-danmu")];
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
				'div[data-e2e="living-container"] xg-bar.xg-top-bar'
			),
		];
	},
	/**
	 * 【屏蔽】礼物特效
	 */
	shieldGiftEffects() {
		log.info("【屏蔽】礼物特效");
		return [
			CommonUtil.addBlockCSS(
				// ↓该屏蔽会把连麦的用户也屏蔽了
				// '.basicPlayer[data-e2e="basicPlayer"]  pace-island[id^="island_"]:has(>div>div>div)'
				// 排除掉福袋
				'.basicPlayer[data-e2e="basicPlayer"] > pace-island[id^="island_"]:not(:has(.ShortTouchContainer)):has(>div > div:not([class*="video_layout_container"]) > div)'
			),
		];
	},
	/**
	 * 【屏蔽】福袋
	 */
	shieldLucky() {
		log.info("【屏蔽】福袋");
		return [
			CommonUtil.addBlockCSS(
				'.basicPlayer[data-e2e="basicPlayer"] > pace-island[id^="island_"]:has(.ShortTouchContainer):has(>div > div:not([class*="video_layout_container"]) > div)'
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
				'div[id^="living_room_player_container"] .basicPlayer  > div:has(div[data-e2e="yellowCart-container"])'
			),
		];
	},

	/**
	 * 【屏蔽】底部的礼物栏
	 */
	shieldGiftColumn() {
		log.info("【屏蔽】底部的礼物栏");
		return [
			CommonUtil.addBlockCSS(
				'div[data-e2e="living-container"] >div> div:has(>.gitBarOptimizeEnabled)',
				// 2024.12.26
				'div[data-e2e="living-container"] >div> div:not(:has(video)):has(pace-island >.gitBarOptimizeEnabled)',
				// Firefox上的CSS，多了个pace-island
				'div[data-e2e="living-container"] >div> div:has(>pace-island >.gitBarOptimizeEnabled)',
				// 全屏状态下的
				'div[data-e2e="living-container"] xg-controls > div:has(div[data-e2e="gifts-container"])'
			),
			addStyle(/*css*/ `
            /* 去除全屏状态下的礼物栏后，上面的工具栏bottom也去除 */
            div[data-e2e="living-container"] xg-controls xg-inner-controls:has(+div div[data-e2e="gifts-container"]){
                bottom: 0 !important;
            }`),
		];
	},
};

export const DouYinLiveChatRoomBlock = {
	init() {
		PopsPanel.execMenuOnce("live-shieldChatRoom", () => {
			return this.shieldChatRoom();
		});
		PopsPanel.execMenuOnce("live-shielChatRoomVipSeats", () => {
			return this.shielChatRoomVipSeats();
		});
		PopsPanel.execMenuOnce("dy-live-shieldUserLevelIcon", () => {
			return this.shieldUserLevelIcon();
		});
		PopsPanel.execMenuOnce("dy-live-shieldUserVIPIcon", () => {
			return this.shieldUserVIPIcon();
		});
		PopsPanel.execMenuOnce("dy-live-shieldUserFansIcon", () => {
			return this.shieldUserFansIcon();
		});
		PopsPanel.execMenuOnce("dy-live-shieldMessage", () => {
			return this.shieldMessage();
		});
	},
	/**
	 * 【屏蔽】评论区（聊天室）
	 */
	shieldChatRoom() {
		log.info("【屏蔽】评论区（聊天室）");
		return [
			CommonUtil.addBlockCSS("#chatroom"),
			addStyle(`
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
				// Firefox上的CSS，多了个pace-island
				"#chatroom > pace-island > div > div:has(#audiencePanelScrollId)"
			),
		];
	},
	/**
	 * 【屏蔽】用户等级图标
	 */
	shieldUserLevelIcon() {
		log.info("【屏蔽】用户等级图标");
		return [
			CommonUtil.addBlockCSS(
				'#chatroom .webcast-chatroom___item span:has(>img[src*="level"])'
			),
		];
	},
	/**
	 * 【屏蔽】VIP图标
	 */
	shieldUserVIPIcon() {
		log.info("【屏蔽】VIP图标");
		return [
			CommonUtil.addBlockCSS(
				'#chatroom .webcast-chatroom___item span:has(>img[src*="subscribe"])'
			),
		];
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
		return [
			CommonUtil.addBlockCSS(
				"#chatroom .webcast-chatroom___bottom-message",
				// 上面的滚动播报，xxx加入了直播间
				"#chatroom >div:nth-child(2)>div>div:nth-child(3)",
				// Firefox的，多了个pace-island
				"#chatroom >pace-island>div>div:first-child>div:nth-child(3)"
			),
		];
	},
};

export const DouYinLiveVideoAreaRightMenu = {
	init() {
		PopsPanel.execMenuOnce("dy-live-blockVideoRightMenu-downloadClient", () => {
			return this.blockDownloadClient();
		});
	},
	/**
	 * 【屏蔽】右键菜单-下载客户端
	 */
	blockDownloadClient() {
		log.info(`【屏蔽】右键菜单-下载客户端`);
		return [
			CommonUtil.addBlockCSS(
				'.__menu_container_className:has(>a[href*="douyin-pc-web"])'
			),
		];
	},
};
