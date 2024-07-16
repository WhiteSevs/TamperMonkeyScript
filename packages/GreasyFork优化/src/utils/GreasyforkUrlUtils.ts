import { utils } from "@/env";

export const GreasyforkUrlUtils = {
	/**
	 * 获取脚本安装的链接
	 * @param scriptId
	 * @param scriptVersion
	 * @param scriptName
	 * @returns
	 */
	getInstallUrl(
		scriptId: string | number,
		scriptVersion: string | number,
		scriptName?: string
	) {
		if (utils.isNotNull(scriptName)) {
			scriptName = "/" + scriptName;
		} else {
			scriptName = "";
		}
		return `https://update.greasyfork.org/scripts/${scriptId}/${scriptVersion}${scriptName}.user.js`;
	},
	/**
	 * 获取脚本的代码页面链接
	 * @param scriptId
	 * @param scriptVersion
	 * @returns
	 */
	getCodeUrl(
		scriptId: string | number,
		scriptVersion?: string | number | null
	) {
		if (utils.isNull(scriptVersion)) {
			scriptVersion = "";
		}
		return `https://greasyfork.org/scripts/${scriptId}/code?version=${scriptVersion}`;
	},
};
