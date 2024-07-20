import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import beautifyVersionsPageCSS from "./beautifyVersionsPage.css?raw";
import { GM_addStyle } from "ViteGM";
import { CommonUtils } from "@/utils/CommonUtils";
import i18next from "i18next";
import Qmsg from "qmsg";
import { GreasyforkUrlUtils } from "@/utils/GreasyforkUrlUtils";

export const GreasyforkVersions = {
	init() {
		PopsPanel.execMenuOnce("beautifyHistoryVersionPage", () => {
			return this.beautifyHistoryVersionPage();
		});
		PopsPanel.execMenuOnce("scripts-versions-addExtraTagButton", () => {
			this.addExtraTagButton();
		});
	},
	/**
	 * 美化 历史版本 页面
	 */
	beautifyHistoryVersionPage() {
		log.info("美化 历史版本 页面");
		let result = [];
		/* 美化version页面 */
		result.push(GM_addStyle(beautifyVersionsPageCSS));
		result.push(
			CommonUtils.addBlockCSS(
				".version-number",
				".version-date",
				".version-changelog"
			)
		);
		DOMUtils.ready(function () {
			let $historyVersion = document.querySelector<HTMLUListElement>(
				"ul.history_versions"
			);
			if (!$historyVersion) {
				Qmsg.error(i18next.t("未找到history_versions元素列表"));
				return;
			}
			/* 遍历每一个版本块 */
			Array.from($historyVersion.children).forEach((liElement) => {
				/* 版本链接 */
				let versionUrl =
					liElement.querySelector<HTMLAnchorElement>(".version-number a")!.href;
				/* 版本号 */
				let versionNumber =
					liElement.querySelector<HTMLAnchorElement>(
						".version-number a"
					)!.innerText;
				/* 更新日期 */
				let versionDate = liElement
					.querySelector(".version-date")
					?.getAttribute("datetime") as string;
				/* 更新日志 */
				let updateNote =
					liElement.querySelector(".version-changelog")?.innerHTML || "";

				let versionDateElement = DOMUtils.createElement("span", {
					className: "script-version-date",
					innerHTML: utils.formatTime(
						versionDate,
						i18next.t("yyyy年MM月dd日 HH:mm:ss")
					),
				});
				let tagElement = DOMUtils.createElement("div", {
					className: "script-tag",
					innerHTML: /*html*/ `
                    <div class="script-tag-version">
                        <a href="${versionUrl}" class="flex-align-item-center">
                        <svg aria-label="Tag" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                        </svg>
                        <span>${versionNumber}</span>
                        </a>
                    </div>`,
				});
				let boxBodyElement = DOMUtils.createElement("div", {
					className: "script-note-box-body",
					innerHTML: updateNote,
				});
				liElement.appendChild(versionDateElement);
				liElement.appendChild(tagElement);
				liElement.appendChild(boxBodyElement);
			});
		});

		return result;
	},
	/**
	 * 添加额外的标签按钮
	 */
	addExtraTagButton() {
		log.info("添加额外的标签按钮");
		DOMUtils.ready(() => {
			document
				.querySelectorAll<HTMLDivElement>(".script-tag-version")
				.forEach(($tagVersion) => {
					let $anchor = $tagVersion.querySelector<HTMLAnchorElement>("a");
					if (!$anchor) {
						return;
					}
					let urlObj = new URL($anchor.href);
					let scriptId = urlObj.pathname.match(/\/scripts\/([\d]+)/)?.[1]!;
					let scriptVersion = urlObj.searchParams.get("version")!;
					let scriptName = urlObj.pathname.match(/\/scripts\/[\d]+-(.+)/)?.[1]!;
					let installUrl = GreasyforkUrlUtils.getInstallUrl(
						scriptId,
						scriptVersion,
						scriptName
					);
					let codeUrl = GreasyforkUrlUtils.getCodeUrl(scriptId, scriptVersion);
					let $buttonTag = DOMUtils.createElement("div", {
						className: "scripts-tag-install",
						innerHTML: /*html*/ `
						<a class="script-btn-install install-link" data-install-format="js" target="_blank" href="${installUrl}">${i18next.t(
							"安装此脚本"
						)}</a>
						<a class="script-btn-see-code" target="_blank" href="${codeUrl}">${i18next.t(
							"查看代码"
						)}</a>
						`,
					});
					DOMUtils.after($tagVersion, $buttonTag);
				});
		});
	},
};
