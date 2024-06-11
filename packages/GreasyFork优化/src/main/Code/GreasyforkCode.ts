import { log, utils } from "@/env";
import { GM_addStyle } from "ViteGM";
import i18next from "i18next";

const GreasyforkCode = {
	init() {
		this.repairCodeLineNumber();
	},

	/**
	 * 修复代码的行号显示不够问题
	 * 超过1w行不会高亮代码
	 */
	repairCodeLineNumber() {
		log.info("修复代码的行号显示不够问题");
		utils
			.waitNode<HTMLOListElement>(
				"#script-content div.code-container pre.prettyprint ol"
			)
			.then(($prettyPrintOL) => {
				if ($prettyPrintOL.childElementCount >= 1000) {
					log.success(
						`当前代码行数${$prettyPrintOL.childElementCount}行，超过1000行，优化行号显示问题`
					);
					GM_addStyle(`
                    pre.prettyprint{
                        padding-left: 10px;
                        font-family: Monaco,Consolas,'Lucida Console','Courier New',serif;
                        font-size: 12px;
                    }`);
				}
			});
	},
};

export { GreasyforkCode };
