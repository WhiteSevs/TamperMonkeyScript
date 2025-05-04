import { $, $$, addStyle, DOMUtils, httpx, log, pops, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import beautifyVersionsPageCSS from "./css/beautifyVersionsPage.css?raw";
import { CommonUtil } from "@/utils/CommonUtil";
import i18next from "i18next";
import Qmsg from "qmsg";
import { GreasyforkUrlUtils } from "@/utils/GreasyforkUrlUtils";
import { GreasyforkUtils } from "@/utils/GreasyforkUtils";
import { GreasyforkApi } from "@/api/GreasyForkApi";

export const GreasyforkVersions = {
	init() {
		PopsPanel.execMenuOnce("beautifyHistoryVersionPage", () => {
			return this.beautifyHistoryVersionPage();
		});
		PopsPanel.execMenuOnce("scripts-versions-addExtraTagButton", () => {
			this.addExtraTagButton();
		});
		PopsPanel.execMenuOnce("scripts-versions-addCompareCodeButton", () => {
			this.sourceDiffMonacoEditor();
		});
	},
	/**
	 * 美化 历史版本 页面
	 */
	beautifyHistoryVersionPage() {
		log.info("美化 历史版本 页面");
		let result = [];
		/* 美化version页面 */
		result.push(addStyle(beautifyVersionsPageCSS));
		result.push(
			CommonUtil.addBlockCSS(
				".version-number",
				".version-date",
				".version-changelog"
			)
		);
		DOMUtils.ready(function () {
			let $historyVersion = $<HTMLUListElement>("ul.history_versions");
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
			$$<HTMLDivElement>(".script-tag-version").forEach(($tagVersion) => {
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
	/**
	 * 源码对比（monacoEditor）
	 */
	sourceDiffMonacoEditor() {
		log.info(`源码对比（monacoEditor）`);
		GreasyforkUtils.monacoEditor().then((monaco) => {
			DOMUtils.ready(() => {
				$$<HTMLElement>(
					`#script-content form[action*="/diff"] input[type="submit"]`
				).forEach(($submit) => {
					let $compareButton = DOMUtils.createElement(
						"input",
						{
							type: "button",
							value: i18next.t("对比选中版本差异（monacoEditor）"),
						},
						{
							style: "margin-left: 10px;",
						}
					);
					DOMUtils.after($submit, $compareButton);
					DOMUtils.on($compareButton, "click", async (event) => {
						utils.preventEvent(event);
						let $form = $submit.closest("form")!;
						let formData = new FormData($form);
						let compareLeftVersion = formData.get("v1")!;
						let compareRighttVersion = formData.get("v2")!;
						if (compareLeftVersion === compareRighttVersion) {
							Qmsg.warning(i18next.t("版本号相同，不需要比较源码"));
							return;
						}
						let loading = Qmsg.loading(i18next.t("正在获取对比文本中..."));
						let scriptId = GreasyforkUrlUtils.getScriptId()!;
						let scriptInfo = await GreasyforkApi.getScriptInfo(scriptId);
						if (!scriptInfo) {
							loading.close();
							return;
						}
						let code_url: string = scriptInfo["code_url"];
						let compareLeftUrl = code_url.replace(
							new RegExp(`/${scriptId}(/[\\d]+|)`),
							`/${scriptId}/${compareLeftVersion}`
						);
						let compareRightUrl = code_url.replace(
							new RegExp(`/${scriptId}(/[\\d]+|)`),
							`/${scriptId}/${compareRighttVersion}`
						);
						let compareLeftText = "";
						let compareRightText = "";
						const [compareLeftResponse, compareRightResponse] =
							await Promise.all([
								httpx.get(compareLeftUrl, {
									timeout: 20000,
								}),
								httpx.get(compareRightUrl, {
									timeout: 20000,
								}),
							]);
						loading.close();
						if (!compareLeftResponse.status || !compareRightResponse.status) {
							return;
						}
						compareLeftText = compareLeftResponse.data.responseText;
						compareRightText = compareRightResponse.data.responseText;
						let { recovery } = CommonUtil.lockScroll();
						let $alert = pops.alert({
							title: {
								text: i18next.t("代码对比"),
								html: false,
								position: "center",
							},
							content: {
								html: true,
								text: /*html*/ `
								<div class="monaco-editor-diff-container">
									<div class="monaco-editor-diff"></div>
								</div>
								`,
							},
							mask: {
								enable: true,
								clickEvent: {
									toClose: false,
									toHide: false,
								},
							},
							btn: {
								ok: {
									enable: false,
								},
								close: {
									callback(details, event) {
										details.close();
										recovery();
									},
								},
							},
							zIndex() {
								let maxZIndex = utils.getMaxZIndex();
								let popsMaxZIndex =
									pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
								return utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
							},
							useShadowRoot: false,
							width: "90vw",
							height: "90vh",
							drag: true,
							style: /*css*/ `
							.monaco-editor-diff-container{
								width: 100%;
								height: 100%;
							}
							.monaco-editor-diff{
								width: 100%;
								height: 100%;
							}
							.pops{
								border-radius: 0px;
							}
							.pops[type-value="alert"] .pops-alert-title{
								--container-title-height: 40px;
							}
						`,
						});
						let $monacoEditorContainer =
							$alert.$shadowRoot.querySelector<HTMLElement>(
								".monaco-editor-diff-container"
							)!;
						let $monacoEditor = $alert.$shadowRoot.querySelector<HTMLElement>(
							".monaco-editor-diff"
						)!;
						let monacoEditor = monaco.editor.createDiffEditor($monacoEditor, {
							hideUnchangedRegions: {
								enabled: true,
							},
							minimap: { enabled: true }, // 小地图
							automaticLayout: true, // 自动布局,
							codeLens: true,
							colorDecorators: true,
							contextmenu: false,
							readOnly: true, //是否只读
							formatOnPaste: true,
							overviewRulerBorder: true, // 滚动条的边框
							scrollBeyondLastLine: true,
							theme: "vs-dark", // 主题
							fontSize: window.innerWidth > 600 ? 14 : 12, // 字体
							wordWrap: "off", // 换行
							language: "javascript", // 语言
						});
						// 跟gf默认的相同，左边的是新的，右边的是旧的
						const originModel = monaco.editor.createModel(
							compareRightText,
							"javascript"
						);
						const modifyModel = monaco.editor.createModel(
							compareLeftText,
							"javascript"
						);
						monacoEditor.setModel({
							original: originModel,
							modified: modifyModel,
						});
					});
				});
			});
		});
	},
};
