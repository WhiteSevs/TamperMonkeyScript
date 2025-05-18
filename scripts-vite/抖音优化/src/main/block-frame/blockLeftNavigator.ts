import { addStyle, log } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { PopsPanel } from "@/setting/setting";
import { CommonUtil } from "@/utils/CommonUtil";

export const BlockLeftNavigator = {
	init() {
		PopsPanel.execInheritMenuOnce(
			"shieldLeftNavigator",
			"search-shieldLeftNavigator",
			() => {
				return this.shieldLeftNavigator();
			},
			(mainValue, childValue) => {
				if (DouYinRouter.isSearch()) {
					if (childValue == 1) {
						// 开
						return true;
					} else if (childValue == 0) {
						// 关
						return false;
					} else {
						// 跟随主设置
					}
				}
			}
		);
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-home", () => {
			return this.block_tab_home();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-recommend", () => {
			return this.block_tab_recommend();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-follow", () => {
			return this.block_tab_follow();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-friend", () => {
			return this.block_tab_friend();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-user_self", () => {
			return this.block_tab_user_self();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-user_self_like", () => {
			return this.block_tab_user_self_like();
		});
		PopsPanel.execMenuOnce(
			"shieldLeftNavigator-tab-user_self_collection",
			() => {
				return this.block_tab_user_self_collection();
			}
		);
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-user_self_record", () => {
			return this.block_tab_user_self_record();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-olympics", () => {
			return this.block_tab_olympics();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-live", () => {
			return this.block_tab_live();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-vs", () => {
			return this.block_tab_vs();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-series", () => {
			return this.block_tab_series();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-channel_300203", () => {
			return this.block_tab_channel_300203();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-channel_300205", () => {
			return this.block_tab_channel_300205();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-channel_300206", () => {
			return this.block_tab_channel_300206();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-channel_300209", () => {
			return this.block_tab_channel_300209();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-channel_300204", () => {
			return this.block_tab_channel_300204();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-activity_2644292", () => {
			return this.block_tab_activity_2644292();
		});
		PopsPanel.execMenuOnce("shieldLeftNavigator-tab-activity_2643710", () => {
			return this.block_tab_activity_2643710();
		});
	},
	/**
	 * 【屏蔽】左侧导航栏
	 */
	shieldLeftNavigator() {
		log.info("【屏蔽】左侧导航栏");
		let result = [];
		result.push(CommonUtil.addBlockCSS("#douyin-navigation"));
		result.push(
			addStyle(/*css*/ `
			/* 修复顶部导航栏的宽度 */
			#douyin-header{
				width: 100%;
			}`)
		);
		return result;
	},
	/**
	 * 【屏蔽】精选
	 */
	block_tab_home() {
		log.info("【屏蔽】精选");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-discover)'
		);
	},
	/**
	 * 【屏蔽】推荐
	 */
	block_tab_recommend() {
		log.info("【屏蔽】推荐");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-recommend)'
		);
	},
	/**
	 * 【屏蔽】关注
	 */
	block_tab_follow() {
		log.info("【屏蔽】关注");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-follow)'
		);
	},
	/**
	 * 【屏蔽】朋友
	 */
	block_tab_friend() {
		log.info("【屏蔽】朋友");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-friend)'
		);
	},
	/**
	 * 【屏蔽】我的
	 */
	block_tab_user_self() {
		log.info("【屏蔽】我的");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div > div:has(.tab-user_self)'
		);
	},
	/**
	 * 【屏蔽】喜欢
	 */
	block_tab_user_self_like() {
		log.info("【屏蔽】喜欢");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div > div:has(.tab-user_self_like)'
		);
	},
	/**
	 * 【屏蔽】收藏
	 */
	block_tab_user_self_collection() {
		log.info("【屏蔽】收藏");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div > div:has(.tab-user_self_collection)'
		);
	},
	/**
	 * 【屏蔽】观看历史
	 */
	block_tab_user_self_record() {
		log.info("【屏蔽】观看历史");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div > div:has(.tab-user_self_record)'
		);
	},
	/**
	 * 【屏蔽】看奥运
	 */
	block_tab_olympics() {
		log.info("【屏蔽】看奥运");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-olympics)'
		);
	},
	/**
	 * 【屏蔽】直播
	 */
	block_tab_live() {
		log.info("【屏蔽】直播");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-live)'
		);
	},
	/**
	 * 【屏蔽】放映厅
	 */
	block_tab_vs() {
		log.info("【屏蔽】放映厅");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-vs)'
		);
	},
	/**
	 * 【屏蔽】短剧
	 */
	block_tab_series() {
		log.info(`短剧`);
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-series)'
		);
	},
	/**
	 * 【屏蔽】知识
	 */
	block_tab_channel_300203() {
		log.info("【屏蔽】知识");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300203)'
		);
	},
	/**
	 * 【屏蔽】游戏
	 */
	block_tab_channel_300205() {
		log.info("【屏蔽】游戏");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300205)'
		);
	},
	/**
	 * 【屏蔽】二次元
	 */
	block_tab_channel_300206() {
		log.info("【屏蔽】二次元");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300206)'
		);
	},
	/**
	 * 【屏蔽】音乐
	 */
	block_tab_channel_300209() {
		log.info("【屏蔽】音乐");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300209)'
		);
	},
	/**
	 * 【屏蔽】美食
	 */
	block_tab_channel_300204() {
		log.info("【屏蔽】美食");
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300204)'
		);
	},
	/**
	 * 【屏蔽】美好跨年季
	 */
	block_tab_activity_2644292() {
		log.info(`【屏蔽】美好跨年季`);
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has([class^="tab-activity_"] img[alt="抖音美好跨年季"])'
		);
	},
	/**
	 * 【屏蔽】2025新春环游记
	 */
	block_tab_activity_2643710() {
		log.info(`【屏蔽】2025新春环游记`);
		return CommonUtil.addBlockCSS(
			'div[data-e2e="douyin-navigation"] > div > div > div > div:has([class^="tab-activity_"] img[alt="2025新春环游记"])'
		);
	},
};
