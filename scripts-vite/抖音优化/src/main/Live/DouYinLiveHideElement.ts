import { addStyle, log } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { DouYinUtils } from "@/utils/DouYinUtils";

export const DouYinLiveChatRoomHideElement = {
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
	 * 【屏蔽】评论区
	 */
	shieldChatRoom() {
		log.info("【屏蔽】评论区");
		return [
			DouYinUtils.addBlockCSS("#chatroom"),
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
			DouYinUtils.addBlockCSS(
				"#chatroom > div > div:has(#audiencePanelScrollId)"
			),
		];
	},
	/**
	 * 【屏蔽】用户等级图标
	 */
	shieldUserLevelIcon() {
		log.info("【屏蔽】用户等级图标");
		return [
			DouYinUtils.addBlockCSS(
				'.webcast-chatroom___item span:has(>img[src*="level"])'
			),
		];
	},
	/**
	 * 【屏蔽】VIP图标
	 */
	shieldUserVIPIcon() {
		log.info("【屏蔽】VIP图标");
		return [
			DouYinUtils.addBlockCSS(
				'.webcast-chatroom___item span:has(>img[src*="subscribe"])'
			),
		];
	},
	/**
	 * 【屏蔽】粉丝牌
	 */
	shieldUserFansIcon() {
		log.info("【屏蔽】粉丝牌");
		return [
			DouYinUtils.addBlockCSS(
				'.webcast-chatroom___item span:has(>div[style*="fansclub"])'
			),
		];
	},
	/**
	 * 【屏蔽】信息播报
	 */
	shieldMessage() {
		log.info("【屏蔽】信息播报");
		return [
			DouYinUtils.addBlockCSS(
				".webcast-chatroom___bottom-message",
				// 上面的滚动播报，xxx加入了直播间
				'#chatroom >div>div>div:has(>div[elementtiming="element-timing"])'
			),
		];
	},
};

export const DouYinLiveDanmuHideElement = {
	init() {
		PopsPanel.execMenuOnce("live-shieldDanmuku", () => {
			return this.shieldDanmu();
		});
	},

	/**
	 * 屏蔽弹幕
	 */
	shieldDanmu() {
		log.info("屏蔽弹幕");
		return [DouYinUtils.addBlockCSS("xg-danmu.xgplayer-danmu")];
	},
};

export const DouYinLiveHideElement = {
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
		PopsPanel.execMenuOnce("live-shielYellowCar", () => {
			return this.shieldYellowCar();
		});
		DouYinLiveChatRoomHideElement.init();
		DouYinLiveDanmuHideElement.init();
	},

	/**
	 * 【屏蔽】底部的礼物栏
	 */
	shieldGiftColumn() {
		log.info("屏蔽底部的礼物栏");
		return [
			DouYinUtils.addBlockCSS(
				'div[data-e2e="living-container"] >div> :last-child',
				/* 全屏状态下的礼物栏 */
				'div[data-e2e="living-container"] xg-controls > div:has(div[data-e2e="gifts-container"])'
			),
			addStyle(`
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
			DouYinUtils.addBlockCSS(
				'div[data-e2e="living-container"] > div > pace-island[id^="island_"]'
			),
		];
	},
	/**
	 * 【屏蔽】礼物特效
	 */
	shieldGiftEffects() {
		log.info("【屏蔽】礼物特效");
		return [
			DouYinUtils.addBlockCSS(
				// ↓该屏蔽会把连麦的用户也屏蔽了
				// '.basicPlayer[data-e2e="basicPlayer"]  pace-island[id^="island_"]:has(>div>div>div)'
				'.basicPlayer[data-e2e="basicPlayer"]  pace-island[id^="island_"]:has(>div>div:not([class*="video_layout_container"])>div)'
			),
		];
	},
	/**
	 * 【屏蔽】小黄车
	 */
	shieldYellowCar() {
		log.info("【屏蔽】小黄车");
		return [
			DouYinUtils.addBlockCSS(
				'div[id^="living_room_player_container"] .basicPlayer  > div:has(div[data-e2e="yellowCart-container"])'
			),
		];
	},
};
