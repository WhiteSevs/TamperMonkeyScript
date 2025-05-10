import { $$, DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { GM_getValue, GM_setValue } from "ViteGM";

export const DouYinDanmuFilter = {
	key: "douyin-live-danmu-rule",
	$data: {
		rule: [] as RegExp[],
	},
	init() {
		this.resetRule();
		this.initRule();
	},
	/**
	 * 初始化解析规则
	 */
	initRule() {
		let localRule = this.get().trim();
		let localRuleSplit = localRule.split("\n");
		localRuleSplit.forEach((item: string) => {
			if (item.trim() == "") return;
			item = item.trim();
			let itemRegExp = new RegExp(item.trim());
			this.$data.rule.push(itemRegExp);
		});
	},
	/**
	 * 重置规则数据
	 */
	resetRule() {
		this.$data.rule = [];
	},
	/**
	 * 通知弹幕改变(可能是新增)
	 */
	change() {
		let danmakuQueue = $$<HTMLDivElement>(
			"xg-danmu.xgplayer-danmu > div > div:not([data-is-filter])"
		);
		for (let index = 0; index < danmakuQueue.length; index++) {
			let $danmuItem = danmakuQueue[index];
			// 获取弹幕对象
			let $messageIns =
				utils.getReactObj($danmuItem)?.reactFiber?.return?.memoizedProps
					?.message;
			let message =
				$messageIns?.payload?.content || $messageIns?.payload?.common?.describe;

			/**
			 * 弹幕类型
			 *
			 * + WebcastChatMessage 普通弹幕
			 * + WebcastGiftMessage 礼物弹幕
			 * + WebcastRoomMessage
			 * + WebcastFansclubMessage
			 */
			let method = $messageIns.method;
			let chat_by: undefined | string = $messageIns?.payload?.chat_by;
			let flag = false;
			if (!flag) {
				if (method === "WebcastGiftMessage") {
					// 礼物弹幕
					if (PopsPanel.getValue("live-danmu-shield-gift")) {
						flag = true;
					}
				} else if (method === "WebcastChatMessage") {
					// 普通弹幕
					if (chat_by === "0") {
						//
					} else if (chat_by === "9") {
						// 来自福袋一键发送
						// 福袋口令
						if (PopsPanel.getValue("live-danmu-shield-lucky-bag")) {
							flag = true;
						}
					} else {
						if (import.meta.env.DEV) {
							log.info("未知的弹幕chat_by：" + chat_by, $messageIns);
						}
					}
				} else if (method === "WebcastRoomMessage") {
					//
				} else if (method === "WebcastFansclubMessage") {
					//
				} else {
					if (import.meta.env.DEV) {
						log.info("未知的弹幕类型：" + method, $messageIns);
					}
				}
			}
			if (!flag) {
				// 自定义弹幕过滤器
				this.$data.rule.some;
				flag =
					flag &&
					typeof message === "string" &&
					this.$data.rule.some((ruleItem) => {
						if (message.match(ruleItem)) {
							log.info("过滤弹幕: " + message);
							return true;
						}
					});
			}

			if (flag) {
				$danmuItem.setAttribute("data-is-filter", "true");
				DOMUtils.hide($danmuItem);
			}
		}
	},
	set(value: string) {
		GM_setValue(this.key, value);
	},
	get() {
		return GM_getValue(this.key, "");
	},
};

export const DouYinLiveDanmuku = {
	/**
	 * 弹幕过滤
	 */
	filterDanmu() {
		utils
			.waitNode<HTMLElement>("xg-danmu.xgplayer-danmu", 100000)
			.then(($danmu) => {
				if (!$danmu) {
					log.error("xg-danmu.xgplayer-danmu获取失败");
					return;
				}
				log.success("弹幕过滤");
				DouYinDanmuFilter.init();
				utils.mutationObserver($danmu, {
					config: {
						childList: true,
						subtree: true,
					},
					immediate: true,
					callback: () => {
						DouYinDanmuFilter.change();
					},
				});
			});
	},
};
