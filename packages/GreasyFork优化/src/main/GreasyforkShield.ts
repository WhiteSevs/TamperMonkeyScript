import { utils } from "@/env";
import { PopsPanel } from "@/setting/setting";

const GreasyforkShield = {
	key: "gf-shield-rule",
	init() {
		document
			.querySelectorAll<HTMLLIElement>("#browse-script-list > li")
			.forEach(($element) => {
				let data = $element.dataset;
				let scriptDescription = $element.querySelector<HTMLElement>(
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
								$element.remove();
								break;
							}
						} else if (ruleValue.startsWith("<")) {
							/* 小于 */
							if (
								(data["scriptRatingScore"] as any) <
								parseFloat(ruleValue.slice(1))
							) {
								$element.remove();
								break;
							}
						}
					} else if (ruleName in data || ruleName === "scriptDescription") {
						if (typeof ruleValue !== "string") {
							continue;
						}
						let regexpRuleValue = new RegExp(ruleValue, "ig");
						if ((data as any)[ruleName].match(regexpRuleValue)) {
							$element.remove();
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
