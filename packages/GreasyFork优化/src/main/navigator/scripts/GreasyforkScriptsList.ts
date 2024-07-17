import { log, pops, utils } from "@/env";
import { GreasyforkScriptsFilter } from "@/main/navigator/scripts/GreasyforkScriptsFilter";
import { PopsPanel } from "@/setting/setting";
import DOMUtils from "@whitesev/domutils";
import i18next from "i18next";
import { GreasyforkScriptsCollectEvent } from "./GreasyforkScripts";
import { GM_addStyle } from "ViteGM";
import beautifyCenterContentCSS from "./beautifyCenterContent.css?raw";
import Qmsg from "qmsg";

export interface GreasyforkScriptsInfoDataset {
	/** 脚本id */
	scriptId: string;
	/** 脚本名 */
	scriptName: string;
	/** 脚本发布作者也可能是联合作者 */
	scriptAuthors: string;
	/** 脚本日安装量 */
	scriptDailyInstalls: string;
	/** 脚本总安装量 */
	scriptTotalInstalls: string;
	/** 脚本评分 */
	scriptRatingScore: string;
	/** 脚本创建日期，例如：2024-1-1，只有年月日 */
	scriptCreatedDate: string;
	/** 脚本更新日期，例如：2024-1-1，只有年月日 */
	scriptUpdatedDate: string;
	/** 脚本类型 */
	scriptType: "public";
	/** 脚本版本号 */
	scriptVersion: string;
	/**  */
	sensitive: "true" | "false";
	/** 脚本语言，js脚本或者css脚本 */
	scriptLanguage: "js" | "css";
	/**  */
	cssAvailableAsJs: "true" | "false";
	/** 脚本代码链接 */
	codeUrl: string;
	/** 脚本描述 */
	scriptDescription: string;
	/** 脚本作者id */
	scriptAuthorId: string;
	/** 脚本作者名 */
	scriptAuthorName: string;
}

export interface GreasyforkScriptsInfo {
	/** 脚本id */
	scriptId: number;
	/** 脚本名 */
	scriptName: string;
	/** 脚本发布作者也可能是联合作者 */
	scriptAuthors: {
		authorId: number;
		authorName: string;
	}[];
	/** 脚本日安装量 */
	scriptDailyInstalls: number;
	/** 脚本总安装量 */
	scriptTotalInstalls: number;
	/** 脚本评分 */
	scriptRatingScore: number;
	/** 脚本创建日期，例如：2024-1-1，只有年月日 */
	scriptCreatedDate: Date;
	/** 脚本更新日期，例如：2024-1-1，只有年月日 */
	scriptUpdatedDate: Date;
	/** 脚本类型 */
	scriptType: "public";
	/** 脚本版本号 */
	scriptVersion: string;
	/**  */
	sensitive: boolean;
	/** 脚本语言，js脚本或者css脚本 */
	scriptLanguage: "js" | "css";
	/**  */
	cssAvailableAsJs: boolean;
	/** 脚本代码链接 */
	codeUrl: string;
	/** 脚本描述 */
	scriptDescription: string;
	/** 脚本作者id */
	scriptAuthorId: number;
	/** 脚本作者名 */
	scriptAuthorName: string;
}
/** 解析出<li>元素上存储的脚本信息 */
export const parseScriptListInfo = ($scriptList: HTMLLIElement) => {
	let dataset = $scriptList.dataset as any as GreasyforkScriptsInfoDataset;
	const info = {
		scriptId: parseInt(dataset.scriptId),
		scriptName: dataset.scriptName,
		scriptAuthors: [],
		scriptDailyInstalls: parseInt(dataset.scriptDailyInstalls),
		scriptTotalInstalls: parseInt(dataset.scriptTotalInstalls),
		scriptRatingScore: parseFloat(dataset.scriptRatingScore),
		scriptCreatedDate: new Date(dataset.scriptCreatedDate),
		scriptUpdatedDate: new Date(dataset.scriptUpdatedDate),
		scriptType: dataset.scriptType,
		scriptVersion: dataset.scriptVersion,
		sensitive: dataset.sensitive === "true",
		scriptLanguage: dataset.scriptLanguage,
		cssAvailableAsJs: dataset.cssAvailableAsJs === "true",
		codeUrl: dataset.codeUrl,
		scriptDescription: dataset.scriptDescription,
		scriptAuthorId: parseInt(dataset.scriptAuthorId),
		scriptAuthorName: dataset.scriptAuthorName,
	} as GreasyforkScriptsInfo;

	let scriptAuthorsObj = utils.toJSON(dataset.scriptAuthors);
	Object.keys(scriptAuthorsObj).forEach((authorId) => {
		let authorName = scriptAuthorsObj[authorId];
		info.scriptAuthors.push({
			authorId: parseInt(authorId),
			authorName: authorName,
		});
	});
	return info;
};

export const GreasyforkScriptsList = {
	init() {
		PopsPanel.execMenuOnce("gf-scripts-filter-enable", () => {
			GreasyforkScriptsFilter.init();
		});
		PopsPanel.execMenuOnce("beautifyCenterContent", () => {
			return this.beautifyCenterContent();
		});
	},
	/**
	 * 美化脚本列表
	 */
	beautifyCenterContent() {
		log.info("美化脚本列表");
		let result = [];
		result.push(GM_addStyle(beautifyCenterContentCSS));
		DOMUtils.ready(() => {
			let allScriptsList = GreasyforkScriptsFilter.getScriptElementList();

			allScriptsList.forEach(($scriptList) => {
				let scriptInfo = parseScriptListInfo($scriptList);
				let $inlineStats = $scriptList.querySelector<HTMLElement>(
					".inline-script-stats"
				)!;
				let code_url = scriptInfo.codeUrl;
				let $operationLeft = DOMUtils.createElement("dt", {
					className: "script-list-operation",
					innerHTML: `<span>${i18next.t("操作")}</span>`,
				});
				let $operationRight = DOMUtils.createElement(
					"dd",
					{
						className: "script-list-operation",
						innerHTML: `
						<a 	class="install-link"
							data-install-format="js"
							target="_blank"
							href="${code_url}">${i18next.t("安装此脚本")}</a>
						<button class="script-collect-btn">${i18next.t("收藏")}</button>
						`,
					},
					{
						style:
							"gap:10px;display: flex;flex-wrap: wrap;align-items: center;",
					}
				);
				let $collect = $operationRight.querySelector<HTMLButtonElement>(
					".script-collect-btn"
				)!;
				// 收藏按钮点击事件
				DOMUtils.on($collect, "click", (event) => {
					utils.preventEvent(event);
					GreasyforkScriptsCollectEvent(scriptInfo.scriptId);
				});

				if (PopsPanel.getValue("gf-scripts-filter-enable")) {
					let $filter = DOMUtils.createElement("button", {
						className: "script-filter-btn",
						innerHTML: i18next.t("过滤"),
					});
					// 过滤按钮点击事件
					let attr_filter_key = "data-filter-key";
					let attr_filter_value = "data-filter-value";
					DOMUtils.on($filter, "click", (event) => {
						utils.preventEvent(event);
						let $dialog = pops.alert({
							title: {
								text: i18next.t("选择过滤的选项"),
								position: "center",
							},
							content: {
								text: `
									<button ${attr_filter_key}="scriptId" ${attr_filter_value}="^${
									scriptInfo.scriptId
								}$">${i18next.t("脚本id：{{text}}", {
									text: scriptInfo.scriptId,
								})}</button>
									<button ${attr_filter_key}="scriptName" ${attr_filter_value}="^${utils.parseStringToRegExpString(
									scriptInfo.scriptName
								)}$">${i18next.t("脚本名：{{text}}", {
									text: scriptInfo.scriptName,
								})}</button>
									`,
								html: true,
							},
							mask: {
								enable: true,
								clickEvent: {
									toClose: true,
								},
							},
							width: "350px",
							height: "300px",
							drag: true,
							dragLimit: true,
							style: `
								.pops-alert-content{
									display: flex;
									flex-direction: column;
    								gap: 20px;
								}
								.pops-alert-content button{
									text-wrap: wrap;
									padding: 8px;
									height: auto;
									text-align: left;
								}
								`,
						});
						let $content = $dialog.$shadowRoot.querySelector<HTMLDivElement>(
							".pops-alert-content"
						)!;
						scriptInfo.scriptAuthors.forEach((scriptAuthorInfo) => {
							let $authorIdButton = DOMUtils.createElement("button", {
								innerHTML: i18next.t("作者id：{{text}}", {
									text: scriptAuthorInfo.authorId,
								}),
							});
							$authorIdButton.setAttribute(attr_filter_key, "scriptAuthorId");
							$authorIdButton.setAttribute(
								attr_filter_value,
								"^" + scriptAuthorInfo.authorId + "$"
							);
							let $authorNameButton = DOMUtils.createElement("button", {
								innerHTML: i18next.t("作者名：{{text}}", {
									text: scriptAuthorInfo.authorName,
								}),
							});
							$authorNameButton.setAttribute(
								attr_filter_key,
								"scriptAuthorName"
							);
							$authorNameButton.setAttribute(
								attr_filter_value,
								"^" +
									utils.parseStringToRegExpString(scriptAuthorInfo.authorName) +
									"$"
							);

							$content.appendChild($authorIdButton);
							$content.appendChild($authorNameButton);
						});
						DOMUtils.on($dialog.$shadowRoot, "click", "button", (event) => {
							utils.preventEvent(event);
							let $click = event.target as HTMLButtonElement;
							let key = $click.getAttribute(attr_filter_key);
							let value = $click.getAttribute(attr_filter_value);
							GreasyforkScriptsFilter.addValue(`${key}##${value}`);
							$dialog.close();
							GreasyforkScriptsFilter.filter();
							Qmsg.success(i18next.t("添加成功"));
						});
					});
					$operationRight.appendChild($filter);
				}
				$inlineStats.appendChild($operationLeft);
				$inlineStats.appendChild($operationRight);
			});
		});
		return result;
	},
};
