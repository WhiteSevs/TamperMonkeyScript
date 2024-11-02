import { addStyle, DOMUtils, log, pops, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import i18next from "i18next";
import { GM_getValue, GM_setValue } from "ViteGM";
import { GreasyforkScriptsFilter } from "../scripts/GreasyforkScriptsFilter";
import { parseScriptListInfo } from "../scripts/GreasyforkScriptsList";

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
			let $el = document.querySelector<HTMLDivElement>(
				"#gm-script-filter-controls"
			);
			return $el?.shadowRoot?.querySelector<HTMLDivElement>(".pops");
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
                    align-items: center;
                    flex-direction: row;
                    gap: 10px;
                    padding: 10px;
                }
                .pops .gm-script-control-item{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .pops .pops-panel-item-left-main-text{
                    display: flex;
                    align-items: center;
                    margin: 0px;
                    padding: 0px;
                }
            `,
			})
		);
		let $pops = DOMUtils.createElement("div", {
			className: "pops",
		});
		shadowRoot.appendChild($pops);
		DOMUtils.before($scriptList, $controlsContainer);
		return $pops;
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
				let $filterControlsContainer =
					GreasyforkScriptsSearchElement.addFilterControls($scriptList);
				this.addFilterControlsItem($filterControlsContainer);
			});
		});
	},
	/**
	 * 添加过滤项
	 */
	addFilterControlsItem($filterControlsContainer: HTMLElement) {
		let controlsConfig = [
			{
				name: i18next.t("名称-全词匹配"),
				ENABLE_KEY: "gf-script-search-filterScriptTitleWholeWordMatching",
				STORAGE_KEY:
					"gf-script-search-filterScriptTitleWholeWordMatching-enable",
				callback: (
					searchText: string,
					scriptInfo: GreasyforkScriptListInfo
				) => {
					return !scriptInfo.scriptName.includes(searchText);
				},
			},
			{
				name: i18next.t("描述-全词匹配"),
				ENABLE_KEY: "gf-script-search-filterScriptDescWholeWordMatching",
				STORAGE_KEY:
					"gf-script-search-filterScriptDescWholeWordMatching-enable",
				callback: (
					searchText: string,
					scriptInfo: GreasyforkScriptListInfo
				) => {
					return !scriptInfo.scriptDescription.includes(searchText);
				},
			},
			{
				name: i18next.t("作者名称-全词匹配"),
				ENABLE_KEY: "gf-script-search-filterScriptAuthorNameWholeWordMatching",
				STORAGE_KEY:
					"gf-script-search-filterScriptAuthorNameWholeWordMatching-enable",
				callback: (
					searchText: string,
					scriptInfo: GreasyforkScriptListInfo
				) => {
					return !scriptInfo.scriptAuthorName.includes(searchText);
				},
			},
		];
		/**
		 * 切换的回调
		 * @param enable
		 */
		function callback() {
			let searchParams = new URLSearchParams(window.location.search);
			/** 搜索关键词 */
			let searchText = searchParams.get("q")!.trim();
			if (searchText == "") {
				return;
			}
			let allScriptsList = GreasyforkScriptsFilter.getElementList();
			allScriptsList.forEach(($scriptList) => {
				// 解析出脚本信息
				let scriptInfo = parseScriptListInfo($scriptList);

				let fitlerFlagList = controlsConfig
					.map((controlsConfig) => {
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
		}
		controlsConfig.forEach((controlConfig) => {
			if (!PopsPanel.getValue(controlConfig.ENABLE_KEY)) {
				return;
			}
			log.info(`添加按钮${controlConfig.name}`);
			let panelHandleContentUtils = pops.config.panelHandleContentUtils();
			let $controlContainer =
				panelHandleContentUtils.createSectionContainerItem_switch({
					type: "switch",
					className: "gm-script-control-item",
					text: controlConfig.name,
					getValue() {
						let value = GM_getValue<boolean>(controlConfig.STORAGE_KEY, false);
						callback();
						return value;
					},
					callback(event, value) {
						GM_setValue(controlConfig.STORAGE_KEY, value);
						callback();
					},
				});
			DOMUtils.append($filterControlsContainer, $controlContainer);
		});
	},
};
