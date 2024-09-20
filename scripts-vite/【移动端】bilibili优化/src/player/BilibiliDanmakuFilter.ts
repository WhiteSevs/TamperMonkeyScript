import { log, utils } from "@/env";
import { GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
import { BilibiliPlayer } from "./BilibiliPlayer";
import { BilibiliRouter } from "@/router/BilibiliRouter";
import { PopsPanel } from "@/setting/setting";

/** 弹幕过滤器 */
export const BilibiliDanmakuFilter = {
	key: "bili-danmaku-filter",
	/** 弹幕类型 */
	mode: {
		6: "从左往右",
		5: "顶部",
		4: "底部",
		1: "从右往左",
	},
	$player: {
		async danmakuArray() {
			await utils.waitPropertyByInterval(
				unsafeWindow,
				() => {
					return (
						typeof BilibiliPlayer.player === "object" &&
						typeof BilibiliPlayer.player?.playerPromise === "object"
					);
				},
				250,
				10000
			);
			let playerPromise = await BilibiliPlayer.$player.playerPromise();
			await utils.waitPropertyByInterval(
				async () => {
					playerPromise = await BilibiliPlayer.$player.playerPromise();
				},
				() => {
					return (
						typeof playerPromise?.danmaku?.danmakuCore?.danmakuArray ===
							"object" &&
						playerPromise?.danmaku?.danmakuCore?.danmakuArray != null &&
						Array.isArray(playerPromise?.danmaku?.danmakuCore?.danmakuArray)
					);
				},
				250,
				10000
			);
			let danmakuArray = playerPromise?.danmaku?.danmakuCore?.danmakuArray;
			// log.info(`获取当前弹幕列表数量: ${danmakuArray.length}`);
			return danmakuArray;
		},
		async danmakuFilter() {
			await utils.waitPropertyByInterval(
				unsafeWindow,
				() => {
					return (
						typeof BilibiliPlayer.player === "object" &&
						typeof BilibiliPlayer.player?.playerPromise === "object"
					);
				},
				250,
				10000
			);
			let playerPromise = await BilibiliPlayer.$player.playerPromise();
			await utils.waitPropertyByInterval(
				async () => {
					playerPromise = await BilibiliPlayer.$player.playerPromise();
				},
				() => {
					return (
						typeof playerPromise?.danmaku?.danmakuCore?.config
							?.danmakuFilter === "function"
					);
				},
				250,
				10000
			);
			let danmakuFilter =
				playerPromise?.danmaku?.danmakuCore?.config?.danmakuFilter;
			return danmakuFilter;
		},
	},
	$data: {
		danmakuArray: <DanmaConfig[]>[],
	},
	$fn: {
		updateDanmakuArray: new utils.LockFunction(async () => {
			BilibiliDanmakuFilter.$data.danmakuArray =
				await BilibiliDanmakuFilter.$player.danmakuArray();
		}, 250),
	},
	/** 初始化弹幕过滤器 */
	async init() {
		let totalRule = this.parseRule();

		let danmakuFilter = await this.$player.danmakuFilter();
		let that = this;
		if (typeof danmakuFilter == "function") {
			let playerPromise = await BilibiliPlayer.$player.playerPromise();
			await utils.waitPropertyByInterval(
				async () => {
					playerPromise = await BilibiliPlayer.$player.playerPromise();
				},
				() => {
					return (
						typeof playerPromise?.danmaku?.danmakuCore?.config
							?.danmakuFilter === "function"
					);
				},
				250,
				10000
			);
			let isBangumi = BilibiliRouter.isBangumi();
			/**
			 * 自定义的弹幕过滤函数，用于替换页面原有的过滤函数
			 * @param danmaConfig
			 */
			let ownFilter = function (
				danmaConfig: DanmaConfig | BangumiDanmaConfig
			): boolean {
				let isFilter = false;
				isFilter = that.filter(danmaConfig as DanmaConfig, totalRule);
				if (isBangumi) {
					// 番剧页面中，true是不过滤，false是过滤
					isFilter = !isFilter;
				}
				return isFilter;
			};
			Reflect.set(
				playerPromise.danmaku.danmakuCore.config,
				"danmakuFilter",
				ownFilter
			);
			log.success(`成功覆盖danmakuFilter`);
		}
	},
	/** 更新弹幕列表 */
	updateDanmakuArray() {
		this.$fn.updateDanmakuArray.run();
	},
	/**
	 * 判断是否需要过滤
	 * @param danmaConfig
	 * @param totalRule
	 * @param danmakuArray
	 */
	filter(danmaConfig: DanmaConfig, totalRule: RegExp[]): boolean {
		this.updateDanmakuArray();
		let filterFlag = false;
		if (!filterFlag) {
			if (PopsPanel.getValue("bili-danmaku-filter-type-roll")) {
				// 滚动
				if (danmaConfig.mode === 1 || danmaConfig.mode === 6) {
					filterFlag = true;
				}
			}
		}
		if (!filterFlag) {
			if (PopsPanel.getValue("bili-danmaku-filter-type-top")) {
				// 顶部
				if (
					danmaConfig.mode === 5 ||
					danmaConfig.mode === 1 ||
					danmaConfig.mode === 6
				) {
					filterFlag = true;
				}
			}
		}
		if (!filterFlag) {
			if (PopsPanel.getValue("bili-danmaku-filter-type-bottom")) {
				// 底部
				if (danmaConfig.mode === 4) {
					filterFlag = true;
				}
			}
		}
		if (!filterFlag) {
			if (PopsPanel.getValue("bili-danmaku-filter-type-colour")) {
				// 彩色
				if (danmaConfig.color !== 16777215) {
					filterFlag = true;
				}
			}
		}
		if (!filterFlag) {
			if (PopsPanel.getValue("bili-danmaku-filter-type-repeat")) {
				// 重复
				let findIndex = this.$data.danmakuArray.findIndex(
					(__danmaConfig__, __index__) => {
						return (
							danmaConfig.text === __danmaConfig__.text &&
							danmaConfig != __danmaConfig__
						);
					}
				);
				if (findIndex != -1) {
					filterFlag = true;
				}
			}
		}
		if (!filterFlag) {
			// if (PopsPanel.getValue("bili-danmaku-filter-type-senior")) {
			// 	// 高级
			// }
		}

		if (!filterFlag) {
			if (PopsPanel.getValue<boolean>("bili-danmaku-filter")) {
				// 自定义规则
				for (let ruleIndex = 0; ruleIndex < totalRule.length; ruleIndex++) {
					const rule = totalRule[ruleIndex];
					if (
						typeof danmaConfig.text === "string" &&
						danmaConfig.text.match(rule)
					) {
						filterFlag = true;
						break;
					}
				}
			}
		}
		return filterFlag;
	},
	/** 解析规则 */
	parseRule() {
		let localRule = this.getValue();
		let rule: RegExp[] = [];
		localRule.split("\n").forEach((ruleItemStr) => {
			// 去除左右空格
			let ruleItem = ruleItemStr.trim();
			// 把规则转换为正则
			let regExpRule = new RegExp(
				utils.parseStringToRegExpString(ruleItem),
				"ig"
			);
			rule.push(regExpRule);
		});
		return rule;
	},
	getValue(): string {
		return GM_getValue(this.key, "");
	},
	setValue(value: string = "") {
		GM_setValue(this.key, value);
	},
};
