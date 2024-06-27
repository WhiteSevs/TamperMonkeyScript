import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";

// 脚本屏蔽
const GreasyforkShield = {
	key: "gf-shield-rule",
	init() {
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
				let data = $scriptList.dataset;
				let scriptDescription = $scriptList.querySelector<HTMLElement>(
					".script-description"
				);
				data["scriptDescription"] =
					scriptDescription?.innerText || scriptDescription?.textContent || "";
				let scriptAuthors = utils.toJSON(data["scriptAuthors"] as string);
				if (utils.isNotNull(scriptAuthors)) {
					let scriptAuthorId = Object.keys(scriptAuthors)[0];
					let scriptAuthorName = scriptAuthors[scriptAuthorId];
					data["scriptAuthorId"] = scriptAuthorId;
					data["scriptAuthorName"] = scriptAuthorName;
				}
				(data["scriptRatingScore"] as any) = parseFloat(
					data["scriptRatingScore"] as string
				);
				let localValueSplit = this.getValue().split("\n");
				for (const localRule of localValueSplit) {
					let ruleSplit = localRule.split("##");
					let ruleName = ruleSplit[0];
					let ruleValue = ruleSplit[1];
					if (ruleName === "scriptRatingScore") {
						/* 评分 */
						if (ruleValue.startsWith(">")) {
							/* 大于 */
							if (
								(data["scriptRatingScore"] as any) >
								parseFloat(ruleValue.slice(1))
							) {
								log.info(["触发过滤规则", [localRule, data]]);
								$scriptList.remove();
								break;
							}
						} else if (ruleValue.startsWith("<")) {
							/* 小于 */
							if (
								(data["scriptRatingScore"] as any) <
								parseFloat(ruleValue.slice(1))
							) {
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
						if ((data as any)[ruleName].match(regexpRuleValue)) {
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
	getValue() {
		return PopsPanel.getValue(this.key, "");
	},
};

export { GreasyforkShield };
