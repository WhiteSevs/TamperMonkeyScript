import { addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";

export const GreasyforkScriptsCode = {
	init() {
		PopsPanel.execMenuOnce("code-repairCodeLineNumber", () => {
			this.repairCodeLineNumber();
		});
	},

	/**
	 * 修复代码的行号显示不够问题
	 * 超过1w行不会高亮代码
	 */
	repairCodeLineNumber() {
		log.info("修复代码的行号显示不够问题");
		PopsPanel.execMenuOnce("beautifyGreasyforkBeautify", () => {
			/* 修复Greasyfork Beautify美化后的代码块 */
			addStyle(/*css*/ `
				.code-container pre code .marker{
					padding-left: 6px;
				}	
				`);
		});

		utils
			.waitNode<HTMLOListElement>(
				"#script-content div.code-container pre.prettyprint ol"
			)
			.then(($prettyPrintOL) => {
				if ($prettyPrintOL.childElementCount >= 1000) {
					log.success(
						`当前代码行数${$prettyPrintOL.childElementCount}行，超过1000行，优化行号显示问题`
					);
					addStyle(/*css*/ `
                    pre.prettyprint{
                        padding-left: 26px;
                    }
					`);
				}
			});
	},
};
