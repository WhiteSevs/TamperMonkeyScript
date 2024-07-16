import { log, pops, utils } from "@/env";
import { GreasyforkShield } from "@/main/GreasyforkShield";
import { PopsPanel } from "@/setting/setting";
import { CommonUtils } from "@/utils/CommonUtils";
import DOMUtils from "@whitesev/domutils";
import i18next from "i18next";
import { GreasyforkScriptsCollectEvent } from "./GreasyforkScripts";
import { GM_addStyle } from "ViteGM";
import beautifyCenterContentCSS from "./beautifyCenterContent.css?raw";

export const GreasyforkScriptsList = {
	init() {
		PopsPanel.execMenuOnce("greasyfork-shield-enable", () => {
			GreasyforkShield.init();
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
			document
				.querySelectorAll<HTMLLIElement>("#browse-script-list li")
				.forEach(($scriptLi) => {
					let $inlineStats = $scriptLi.querySelector<HTMLElement>(
						".inline-script-stats"
					)!;
					let code_url = $scriptLi.getAttribute("data-code-url");
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
						<button class="script-collect-btn">${i18next.t("收藏")}</button>`,
						},
						{
							style:
								"gap:10px;display: flex;flex-wrap: wrap;align-items: center;",
						}
					);
					let $collect = $operationRight.querySelector<HTMLButtonElement>(
						".script-collect-btn"
					)!;
					DOMUtils.on($collect, "click", (event) => {
						utils.preventEvent(event);
						GreasyforkScriptsCollectEvent(
							$scriptLi.dataset["scriptId"] as string
						);
					});
					$inlineStats.appendChild($operationLeft);
					$inlineStats.appendChild($operationRight);
				});
		});
		return result;
	},
};
