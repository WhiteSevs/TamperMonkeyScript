import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { parseScriptListInfo } from "./GreasyforkScriptsList";

/** 脚本过滤 */
export const GreasyforkScriptsFilter = {
	/** 存储的键 */
	key: "gf-shield-rule",
	init() {
		log.info("脚本过滤");
		let lockFunction = new utils.LockFunction(() => {
			this.filter();
		}, 50);
		DOMUtils.ready(() => {
			utils.mutationObserver(document.body, {
				config: {
					subtree: true,
					childList: true,
				},
				callback: () => {
					lockFunction.run();
				},
			});
			lockFunction.run();
		});
	},
	filter() {
		document
			.querySelectorAll<HTMLLIElement>("#browse-script-list > li")
			.forEach(($scriptList) => {
				let data = parseScriptListInfo($scriptList);

				let localValueSplit = this.getValue().split("\n");
				for (let index = 0; index < localValueSplit.length; index++) {
					let localRule = localValueSplit[index];
					let ruleSplit = localRule.split("##");
					/** 规则名 */
					let ruleName = ruleSplit[0];
					/** 规则值 */
					let ruleValue = ruleSplit[1];
					if (ruleName === "scriptRatingScore") {
						/* 评分 */
						let userRatingScoreValue = parseFloat(ruleValue.slice(1));
						if (ruleValue.startsWith(">")) {
							/* 大于 */
							if (data.scriptRatingScore > userRatingScoreValue) {
								log.info(["触发过滤规则", [localRule, data]]);
								$scriptList.remove();
								break;
							}
						} else if (ruleValue.startsWith("<")) {
							/* 小于 */
							if (data.scriptRatingScore < userRatingScoreValue) {
								log.info(["触发过滤规则", [localRule, data]]);
								$scriptList.remove();
								break;
							}
						}
					} else if (ruleName in data || ruleName === "scriptDescription") {
						if (typeof ruleValue !== "string") {
							continue;
						}
						let regexpRuleValue = new RegExp(ruleValue, "ig");
						if ((data as any)[ruleName].toString().match(regexpRuleValue)) {
							log.info(["触发过滤规则", [localRule, data]]);
							$scriptList.remove();
							break;
						}
					}
				}
			});
	},
	setValue(value: string) {
		PopsPanel.setValue(this.key, value);
	},
	addValue(value: string) {
		let localValue = this.getValue();
		if (localValue.trim() !== "") {
			localValue += "\n";
		}
		localValue += value;
		return this.setValue(localValue);
	},
	getValue() {
		return PopsPanel.getValue(this.key, "");
	},
};
