import { $$, addStyle, httpx, log, pops, utils } from "@/env";
import {
	GreasyforkScriptsFilter,
	ScriptFilterRule,
} from "@/main/navigator/scripts/GreasyforkScriptsFilter";
import { PopsPanel } from "@/setting/setting";
import DOMUtils from "@whitesev/domutils";
import i18next from "i18next";
import { GreasyforkScriptsCollectEvent } from "./GreasyforkScripts";
import beautifyCenterContentCSS from "./css/beautifyCenterContent.css?raw";
import Qmsg from "qmsg";
import { GreasyforkCheckVersion } from "@/utils/GreasyforkCheckVersion";
import { GreasyforkUrlUtils } from "@/utils/GreasyforkUrlUtils";
import { GreasyforkApi } from "@/api/GreasyForkApi";

/** 解析出<li>元素上存储的脚本信息 */
export const parseScriptListInfo = ($scriptList: HTMLLIElement) => {
	let dataset = $scriptList.dataset as any as GreasyforkScriptListInfoDataset;
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
	} as GreasyforkScriptListInfo;

	let scriptAuthorsObj = utils.toJSON(dataset.scriptAuthors);
	Object.keys(scriptAuthorsObj).forEach((authorId) => {
		let authorName = scriptAuthorsObj[authorId];
		info.scriptAuthors.push({
			authorId: parseInt(authorId),
			authorName: authorName,
		});
	});
	// scriptAuthorName可能是空的
	// scriptAuthorId可能是空的
	if (
		(info.scriptAuthorName == null || isNaN(info.scriptAuthorId)) &&
		info.scriptAuthors.length
	) {
		info.scriptAuthorName = info.scriptAuthors[0].authorName;
		info.scriptAuthorId = info.scriptAuthors[0].authorId;
	}
	// scriptDescription可能是空的
	if (info.scriptDescription == null) {
		let $description =
			$scriptList.querySelector<HTMLSpanElement>(".script-description")! ||
			$scriptList.querySelector<HTMLSpanElement>(".description")!;
		if ($description) {
			info.scriptDescription =
				$description.innerText || $description.textContent!;
		}
	}
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
		log.info("美化脚本列表-双列");
		let result = [];
		result.push(addStyle(beautifyCenterContentCSS));

		const lodingClassName = "lum-lightbox-loader";
		const noInstallBtnText = i18next.t("安装此脚本");
		DOMUtils.ready(() => {
			/** 遍历所有的脚本容器状态 */
			let allScriptContainerStatus =
				GreasyforkCheckVersion.getScriptContainerStatus();
			/** 是否存在脚本容器 */
			let hasScriptContainer = Object.values(allScriptContainerStatus).find(
				(item) => item
			);
			/** 获取当前已注册的脚本容器 */
			let isRegisterScriptContainerNameList =
				GreasyforkCheckVersion.getRegisterScriptContainerNameList();
			/** 是否强制使用命名空间来查询信息 */
			let isForceUseNameSpace = PopsPanel.getValue<boolean>(
				"beautifyCenterContent-queryNameSpace"
			);

			if (!hasScriptContainer) {
				log.error("脚本容器未暴露external信息", window.external);
			} else {
				log.info(
					"当前暴露的external信息：" +
						isRegisterScriptContainerNameList
							.map((it) => `【${it}】`)
							.join("、")
				);
			}

			let lockFn = new utils.LockFunction(() => {
				let allScriptsList = GreasyforkScriptsFilter.getElementList();

				allScriptsList.forEach(($scriptList) => {
					if ($scriptList.querySelector(".script-list-operation")) {
						// 已经美化
						return;
					}
					let scriptInfo = parseScriptListInfo($scriptList);
					let $inlineStats = $scriptList.querySelector<HTMLElement>(
						".inline-script-stats"
					);
					if (!$inlineStats) {
						// log.error("美化脚本列表失败，未获取到.inline-script-stats");
						return;
					}
					let code_url = scriptInfo.codeUrl;

					// 评分
					let $ratingScoreLeft = DOMUtils.createElement("dt", {
						className: "script-list-rating-score",
						innerHTML: `<span>${i18next.t("评分")}</span>`,
					});
					let $ratingScoreRight = DOMUtils.createElement(
						"dd",
						{
							className: "script-list-rating-score",
							innerHTML: `<span>${scriptInfo.scriptRatingScore}</span>`,
						},
						{
							"data-position": "right",
						}
					);
					// 好评
					let $goodRatingCount = $scriptList.querySelector<HTMLSpanElement>(
						"dd.script-list-ratings .good-rating-count"
					);
					// 中评
					let $okRatingCount = $scriptList.querySelector<HTMLSpanElement>(
						"dd.script-list-ratings .ok-rating-count"
					);
					// 差评
					let $badRatingCount = $scriptList.querySelector<HTMLSpanElement>(
						"dd.script-list-ratings .bad-rating-count"
					);
					if ($goodRatingCount && $okRatingCount && $badRatingCount) {
						let goodRatingCount = parseInt($goodRatingCount.innerText);
						let okRatingCount = parseInt($okRatingCount.innerText);
						let badRatingCount = parseInt($badRatingCount.innerText);
						// 所有评价数
						let totalRatingCount =
							goodRatingCount + okRatingCount + badRatingCount;
						if (totalRatingCount >= 10) {
							// 评价的数量超过10个
							if (goodRatingCount / totalRatingCount >= 0.6) {
								$ratingScoreRight.classList.add("good-rating-count");
							} else {
								$ratingScoreRight.classList.add("bad-rating-count");
							}
						} else if (totalRatingCount == 0) {
							// 暂无评价
							$ratingScoreRight.classList.add("good-rating-count");
						} else {
							if (goodRatingCount > okRatingCount + badRatingCount) {
								$ratingScoreRight.classList.add("good-rating-count");
							} else {
								$ratingScoreRight.classList.add("bad-rating-count");
							}
						}
					}

					// 版本
					let $versionLeft = DOMUtils.createElement("dt", {
						className: "script-list-version",
						innerHTML: /*html*/ `<span>${i18next.t("版本")}</span>`,
					});
					let $versionRight = DOMUtils.createElement(
						"dd",
						{
							className: "script-list-version",
							innerHTML: /*html*/ `<span>${scriptInfo.scriptVersion}</span>`,
						},
						{
							"data-position": "right",
						}
					);

					// 操作
					let $operationLeft = DOMUtils.createElement("dt", {
						className: "script-list-operation",
						innerHTML: `<span>${i18next.t("操作")}</span>`,
					});
					let $operationRight = DOMUtils.createElement(
						"dd",
						{
							className: "script-list-operation",
							innerHTML: /*html*/ `
						<a
							target="_blank"
							class="install-link"
							data-install-format="js"
							data-script-name="${scriptInfo.scriptName}"
							data-script-namespace=""
							data-script-version="${scriptInfo.scriptVersion}"
							data-update-label="${i18next.t("更新到 {{version}} 版本", {
								version: scriptInfo.scriptVersion,
							})}"
							data-downgrade-label="${i18next.t("降级到 {{version}} 版本", {
								version: scriptInfo.scriptVersion,
							})}"
							data-reinstall-label="${i18next.t("重新安装 {{version}} 版本", {
								version: scriptInfo.scriptVersion,
							})}"
							href="${code_url}"></a>
						<button class="script-collect-btn">${i18next.t("收藏")}</button>
						`,
						},
						{
							"data-position": "right",
							style:
								"gap:10px;display: flex;flex-wrap: wrap;align-items: center;",
						}
					);
					let $collect = $operationRight.querySelector<HTMLButtonElement>(
						".script-collect-btn"
					)!;

					let $installLink =
						$operationRight.querySelector<HTMLAnchorElement>(".install-link")!;
					// 存储数据
					($installLink as any)["data-script-info"] = scriptInfo;
					// 添加加载脚本已安装版本号加载中的样式
					DOMUtils.addClass($installLink, lodingClassName);
					if (scriptInfo.scriptType === "library") {
						// 当它是个库时，是不应该被安装的
						$installLink.remove();
					}

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
									text: i18next.t("选择需要过滤的选项"),
									position: "center",
								},
								content: {
									text: /*html*/ `
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
								style: /*css*/ `
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
										utils.parseStringToRegExpString(
											scriptAuthorInfo.authorName
										) +
										"$"
								);

								$content.appendChild($authorIdButton);
								$content.appendChild($authorNameButton);
							});
							DOMUtils.on(
								$dialog.$shadowRoot,
								"click",
								`button[${attr_filter_key}]`,
								(event) => {
									utils.preventEvent(event);
									let $click = event.target as HTMLButtonElement;
									let key = $click.getAttribute(
										attr_filter_key
									)! as keyof ScriptFilterRule;
									let value = $click.getAttribute(attr_filter_value)!;
									GreasyforkScriptsFilter.addValue(key, value);
									$dialog.close();
									GreasyforkScriptsFilter.filter();
									Qmsg.success(i18next.t("添加成功"));
								}
							);
						});
						$operationRight.appendChild($filter);
					}

					$inlineStats.appendChild($ratingScoreLeft);
					$inlineStats.appendChild($ratingScoreRight);
					$inlineStats.appendChild($versionLeft);
					$inlineStats.appendChild($versionRight);
					$inlineStats.appendChild($operationLeft);
					$inlineStats.appendChild($operationRight);
				});
			}, 100);
			let lockFn2 = new utils.LockFunction(async () => {
				/** 页面上所有的安装按钮 */
				let $installLinkList = Array.from(
					$$<HTMLElement>(
						".install-link[data-install-format=js]:not([gm-is-check-install-status])"
					)
				);
				for (let index = 0; index < $installLinkList.length; index++) {
					const $installLink = $installLinkList[index];
					$installLink.setAttribute("gm-is-check-install-status", "");
					let scriptLocalInfo = Reflect.get(
						$installLink,
						"data-script-info"
					) as GreasyforkScriptListInfo;
					if (hasScriptContainer) {
						// 得有脚本容器才可以获取版本号信息嘞
						if (isForceUseNameSpace) {
							// 强制获取namespace
							let scriptInfo = await GreasyforkApi.getScriptInfo(
								scriptLocalInfo.scriptId
							);
							if (scriptInfo) {
								// 设置namespace信息
								$installLink.setAttribute(
									"data-script-namespace",
									scriptInfo.namespace
								);
							} else {
								// 脚本信息获取失败
							}
						}
						// 更新安装信息
						GreasyforkCheckVersion.checkForUpdatesJS($installLink, true).then(
							(checkResult) => {
								// 移除加载中的样式
								DOMUtils.removeClass($installLink, lodingClassName);
								if (!checkResult) {
									// 检测失败
									// 设置初始状态
									DOMUtils.text($installLink, noInstallBtnText);
								}
							}
						);
					} else {
						// 啥容器也没有
						// 移除加载中的样式
						DOMUtils.removeClass($installLink, lodingClassName);
						// 设置初始状态
						DOMUtils.text($installLink, noInstallBtnText);
					}
				}
			});
			utils.mutationObserver(document, {
				config: {
					subtree: true,
					childList: true,
				},
				immediate: true,
				callback: () => {
					lockFn.run();
					lockFn2.run();
				},
			});
		});
		return result;
	},
};
