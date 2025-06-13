import { $$, DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { GreasyforkUtils } from "@/utils/GreasyforkUtils";
import { GreasyforkElementUtils } from "@/utils/GreasyforkElementUtils";

export type ScriptFilterRule = {
	/** 脚本代码链接 */
	codeUrl: string;
	/** 脚本id */
	scriptId: string;
	/** 脚本名 */
	scriptName: string;
	/** 脚本描述 */
	scriptDescription: string;
	/** 脚本作者id	 */
	scriptAuthorId: string;
	/** 脚本作者名	 */
	scriptAuthorName: string;
	/** 脚本评分 */
	scriptRatingScore: string;
};

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
			if (GreasyforkUtils.isCurrentLoginUserHome()) {
				log.warn("当前在已登录的账户主页下，禁用脚本过滤");
				return;
			}
			utils.mutationObserver(document.body, {
				config: {
					subtree: true,
					childList: true,
				},
				immediate: true,
				callback: () => {
					lockFunction.run();
				},
			});
			lockFunction.run();
		});
	},
	/**
	 * 获取脚本列表元素
	 */
	getElementList() {
		let scriptList: HTMLLIElement[] = [
			...Array.from($$<HTMLLIElement>("ol.script-list li[data-script-name]")),
		];
		return scriptList;
	},
	/**
	 * 对页面进行过滤
	 */
	filter() {
		this.getElementList().forEach(($scriptList) => {
			let data = GreasyforkElementUtils.parseScriptListInfo($scriptList);

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
							log.info("触发脚本过滤规则", [localRule, data]);
							$scriptList.remove();
							break;
						}
					} else if (ruleValue.startsWith("<")) {
						/* 小于 */
						if (data.scriptRatingScore < userRatingScoreValue) {
							log.info("触发脚本过滤规则", [localRule, data]);
							$scriptList.remove();
							break;
						}
					}
				} else if (ruleName in data || ruleName === "scriptDescription") {
					if (typeof ruleValue !== "string") {
						continue;
					}
					let ruleValueRegExp = new RegExp(ruleValue, "ig");
					let scriptInfoString = String((data as any)[ruleName]);
					if (scriptInfoString.match(ruleValueRegExp)) {
						log.info("触发脚本过滤规则", localRule, data);
						$scriptList.remove();
						break;
					}
				}
			}
		});
	},
	setValue(value: string) {
		Panel.setValue(this.key, value);
	},
	addValue(
		key: keyof ScriptFilterRule,
		value: ScriptFilterRule[keyof ScriptFilterRule]
	) {
		let localValue = this.getValue();
		if (localValue.trim() !== "") {
			localValue += "\n";
		}
		if (utils.isNull(key)) {
			return;
		}
		key = key.toString().trim() as any;
		let rule = key + "##" + value;
		localValue += rule;
		this.setValue(localValue);
	},
	getValue() {
		return Panel.getValue(this.key, "");
	},
};
