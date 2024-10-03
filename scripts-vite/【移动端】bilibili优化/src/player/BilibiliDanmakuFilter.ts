import { utils } from "@/env";
import { GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
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
	$data: {
		danmakuArray: <DanmaConfig[]>[],
	},
	/** 初始化弹幕过滤器 */
	async init() {
		let totalRule = this.parseRule();
		let that = this;
		/**
		 * 自定义的弹幕过滤函数，用于替换页面原有的过滤函数
		 * @param danmaConfig
		 */
		let ownFilter = function (
			danmaConfig: DanmaConfig | BangumiDanmaConfig
		): boolean {
			let isFilter = false;
			isFilter = that.filter(danmaConfig as DanmaConfig, totalRule);
			return isFilter;
		};
	},
	/**
	 * 判断是否需要过滤
	 * @param danmaConfig
	 * @param totalRule
	 * @param danmakuArray
	 */
	filter(danmaConfig: DanmaConfig, totalRule: RegExp[]): boolean {
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
