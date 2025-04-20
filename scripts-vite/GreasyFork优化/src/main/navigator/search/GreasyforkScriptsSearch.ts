import { $, DOMUtils, log, pops, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import i18next from "i18next";
import { GM_getValue, GM_setValue } from "ViteGM";
import { GreasyforkScriptsFilter } from "../scripts/GreasyforkScriptsFilter";
import { GreasyforkElementUtils } from "@/utils/GreasyforkElementUtils";

const GreasyforkScriptsSearchElement = {
	/**
	 * 等待脚本列表元素
	 */
	waitScritList() {
		return utils.waitNode<HTMLDivElement>("#browse-script-list", 10000);
	},
	/**
	 * 添加控制区域
	 */
	addFilterControls($scriptList: HTMLElement) {
		function getControls() {
			let $el = $<HTMLDivElement>("#gm-script-filter-controls");
			if (!$el) {
				return;
			}
			let shadowRoot = $el?.shadowRoot!;
			if (!shadowRoot) {
				return;
			}
			let $filterControl = shadowRoot.querySelector<HTMLElement>(
				".pops-filter-controls_inner"
			);
			let $search = shadowRoot.querySelector<HTMLElement>(
				".pops-filter-search-container"
			);
			if ($filterControl && $search) {
				return {
					$filterControl,
					$search,
				};
			}
		}
		let $controls = getControls();
		if ($controls) {
			return $controls;
		}

		let $controlsContainer = DOMUtils.createElement("div", {
			id: "gm-script-filter-controls",
		});
		let shadowRoot = $controlsContainer.attachShadow({ mode: "open" });
		shadowRoot.appendChild(
			DOMUtils.createElement("style", {
				innerHTML: /*css*/ `
                    ${pops.config.cssText.index}

                    ${pops.config.cssText.common}

                    ${pops.config.cssText.panelCSS}
                `,
			})
		);
		shadowRoot.appendChild(
			DOMUtils.createElement("style", {
				innerHTML: /*css*/ `
                .pops{
					display: flex;
					flex-direction: column;
					gap: 10px;
					padding: 10px;
                }
				.pops-filter-controls_inner{
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    gap: 10px;
					flex-wrap: wrap;
				}
                .pops .gm-script-control-item{
                    display: flex;
                    align-items: center;
                    gap: 10px;
					width: 150px;
                }
                .pops .pops-panel-item-left-main-text{
                    display: flex;
                    align-items: center;
                    margin: 0px;
                    padding: 0px;
                }
				.pops .pops-panel-item-left-desc-text{
					line-height: normal;
					margin-top: 6px;
					font-size: 0.8em;
					color: rgb(108, 108, 108);
				}
				.gm-script-search-input{
					display: flex;
					align-items: center;
					gap: 20px;
				}
            `,
			})
		);
		let $pops = DOMUtils.createElement("div", {
			className: "pops pops-filter-controls-container",
			innerHTML: /*html*/ `
				<div class="pops-filter-search-container"></div>
				<div class="pops-filter-controls_inner"></div>
			`,
		});
		let $filterControl = $pops.querySelector<HTMLElement>(
			".pops-filter-controls_inner"
		)!;
		let $search = $pops.querySelector<HTMLDivElement>(
			".pops-filter-search-container"
		)!;
		shadowRoot.appendChild($pops);
		DOMUtils.before($scriptList, $controlsContainer);
		return { $filterControl: $filterControl, $search };
	},
};

export const GreasyforkScriptsSearch = {
	init() {
		DOMUtils.ready(() => {
			GreasyforkScriptsSearchElement.waitScritList().then(($scriptList) => {
				if (!$scriptList) {
					log.error("未找到脚本列表节点，无法继续执行");
					return;
				}
				PopsPanel.onceExec("GreasyforkScriptsSearch", () => {
					let { $filterControl, $search } =
						GreasyforkScriptsSearchElement.addFilterControls($scriptList);
					this.addFilterControlsItem($search, $filterControl);
				});
			});
		});
	},
	/**
	 * 添加过滤项
	 */
	addFilterControlsItem(
		$search: HTMLElement,
		$filterControlsContainer: HTMLElement
	) {
		let panelHandleContentUtils = pops.config.panelHandleContentUtils();
		let controlsConfig: {
			/** 名称 */
			name: string;
			/** 描述 */
			desc: string;
			/** 启用开关的键名 */
			ENABLE_KEY: string;
			/** 存储的键名 */
			STORAGE_KEY: string;
			/** 遍历元素的回调 @returns true表示过滤掉 false则是不过滤掉 */
			callback: (
				/** 当前搜索的关键词 */
				searchText: string,
				/** 当前的脚本信息 */
				scriptInfo: GreasyforkScriptListInfo
			) => boolean;
			/** 互斥选择器 */
			mutualExclusionSwitch?: string[];
		}[] = [
			{
				name: i18next.t("名称"),
				desc: i18next.t("全词匹配"),
				ENABLE_KEY: "gf-script-search-filterScriptTitleWholeWordMatching",
				STORAGE_KEY:
					"gf-script-search-filterScriptTitleWholeWordMatching-enable",
				callback: (
					searchText: string,
					scriptInfo: GreasyforkScriptListInfo
				) => {
					try {
						return !scriptInfo.scriptName.match(new RegExp(searchText, "i"));
					} catch (error) {
						log.error(error);
						return !scriptInfo.scriptName.match(searchText);
					}
				},
				mutualExclusionSwitch: [
					`.gm-script-control-item[data-storage-key="gf-script-search-filterScriptTitleOrDescWholeWordMatching-enable"]`,
				],
			},
			{
				name: i18next.t("描述"),
				desc: i18next.t("全词匹配"),
				ENABLE_KEY: "gf-script-search-filterScriptDescWholeWordMatching",
				STORAGE_KEY:
					"gf-script-search-filterScriptDescWholeWordMatching-enable",
				callback: (
					searchText: string,
					scriptInfo: GreasyforkScriptListInfo
				) => {
					try {
						return !scriptInfo.scriptDescription.match(
							new RegExp(searchText, "i")
						);
					} catch (error) {
						return !scriptInfo.scriptDescription.match(searchText);
					}
				},
				mutualExclusionSwitch: [
					`.gm-script-control-item[data-storage-key="gf-script-search-filterScriptTitleOrDescWholeWordMatching-enable"]`,
				],
			},
			{
				name: i18next.t("名称/描述"),
				desc: i18next.t("任一全词匹配"),
				ENABLE_KEY: "gf-script-search-filterScriptTitleOrDescWholeWordMatching",
				STORAGE_KEY:
					"gf-script-search-filterScriptTitleOrDescWholeWordMatching-enable",
				callback: (
					searchText: string,
					scriptInfo: GreasyforkScriptListInfo
				) => {
					let isFilterNameFlag = controlsConfig
						.find(
							(it) =>
								it.ENABLE_KEY ===
								"gf-script-search-filterScriptTitleWholeWordMatching"
						)!
						.callback(searchText, scriptInfo);
					let isFilterDescFlag = controlsConfig
						.find(
							(it) =>
								it.ENABLE_KEY ===
								"gf-script-search-filterScriptDescWholeWordMatching"
						)!
						.callback(searchText, scriptInfo);

					return isFilterNameFlag && isFilterDescFlag;
				},
				mutualExclusionSwitch: [
					`.gm-script-control-item[data-storage-key="gf-script-search-filterScriptTitleWholeWordMatching-enable"]`,
					`.gm-script-control-item[data-storage-key="gf-script-search-filterScriptDescWholeWordMatching-enable"]`,
				],
			},
			{
				name: i18next.t("作者名称"),
				desc: i18next.t("全词匹配"),
				ENABLE_KEY: "gf-script-search-filterScriptAuthorNameWholeWordMatching",
				STORAGE_KEY:
					"gf-script-search-filterScriptAuthorNameWholeWordMatching-enable",
				callback: (
					searchText: string,
					scriptInfo: GreasyforkScriptListInfo
				) => {
					try {
						return !scriptInfo.scriptAuthorName.match(
							new RegExp(searchText, "i")
						);
					} catch (error) {
						return !scriptInfo.scriptAuthorName.match(searchText);
					}
				},
			},
		];
		/**
		 * 获取搜索关键词
		 */
		let querySearchText = () => {
			let $ownSearchInput = $search.querySelector("input");
			if ($ownSearchInput) {
				return $ownSearchInput.value;
			}
			let searchParams = new URLSearchParams(window.location.search);
			/** 搜索关键词 */
			let searchText =
				searchParams.get("q")?.trim() || searchParams.get("c")?.trim() || "";
			return searchText;
		};
		/**
		 * 重新执行全部过滤
		 * @param enable
		 */
		let execTotalFilter = () => {
			let searchText = querySearchText();
			let allScriptsList = GreasyforkScriptsFilter.getElementList();
			allScriptsList.forEach(($scriptList) => {
				// 解析出脚本信息
				let scriptInfo =
					GreasyforkElementUtils.parseScriptListInfo($scriptList);
				let fitlerFlagList = controlsConfig
					.map((controlsConfig) => {
						if (searchText == "") {
							return false;
						}
						let enable = GM_getValue<boolean>(controlsConfig.STORAGE_KEY);
						if (!enable) {
							return;
						}
						return controlsConfig.callback(searchText, scriptInfo);
					})
					.filter((item) => typeof item === "boolean");
				if (fitlerFlagList.length !== 0) {
					let flag = false;
					fitlerFlagList.forEach((enable) => {
						flag = flag || enable;
					});
					if (flag) {
						DOMUtils.hide($scriptList, false);
					} else {
						DOMUtils.show($scriptList, false);
					}
				} else {
					DOMUtils.show($scriptList, false);
				}
			});
		};
		if (PopsPanel.getValue("gf-script-search-addFilterSearchInput")) {
			let $searchInner =
				panelHandleContentUtils.createSectionContainerItem_input({
					type: "input",
					className: "gm-script-search-input",
					getValue() {
						let queryText = querySearchText();
						return (
							PopsPanel.getValue<string>(
								"gf-script-search-addFilterSearchInput-text"
							) ||
							queryText ||
							""
						);
					},
					description: i18next.t("自动执行过滤"),
					placeholder: i18next.t("过滤的关键词"),
					text: i18next.t("关键词"),
					callback: utils.debounce((event, value) => {
						PopsPanel.setValue(
							"gf-script-search-addFilterSearchInput-text",
							value.toString()
						);
						execTotalFilter();
					}, 500),
				});
			DOMUtils.append($search, $searchInner);
		}
		controlsConfig.forEach((controlConfig) => {
			if (!PopsPanel.getValue(controlConfig.ENABLE_KEY)) {
				return;
			}
			log.info(`添加按钮${controlConfig.name}`);
			let $controlContainer =
				panelHandleContentUtils.createSectionContainerItem_switch({
					type: "switch",
					className: "gm-script-control-item",
					text: controlConfig.name,
					description: controlConfig.desc,
					attributes: {
						"data-storage-key": controlConfig.STORAGE_KEY,
					},
					getValue() {
						let value = GM_getValue<boolean>(controlConfig.STORAGE_KEY, false);
						value = Boolean(value);
						execTotalFilter();
						return value;
					},
					callback(event, value) {
						GM_setValue(controlConfig.STORAGE_KEY, value);
						execTotalFilter();
						if (value && Array.isArray(controlConfig.mutualExclusionSwitch)) {
							// 开启
							// 互斥的关闭
							let $pops = $controlContainer.closest<HTMLElement>(".pops")!;
							controlConfig.mutualExclusionSwitch.forEach((selector) => {
								let $switch = $pops.querySelector<HTMLElement>(selector);
								if ($switch) {
									let $input = $switch.querySelector<HTMLInputElement>("input");
									if ($input?.checked) {
										let $core = $switch.querySelector<HTMLElement>(
											".pops-panel-switch__core"
										);
										$core?.click();
									}
								}
							});
						}
					},
				});
			DOMUtils.append($filterControlsContainer, $controlContainer);
		});
	},
};
