import { XHSUrlApi } from "@/api/XHSUrlApi";
import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import Qmsg from "qmsg";

const XHS_Article = {
	init() {
		if (
			PopsPanel.getValue("pc-xhs-search-open-blank-btn") ||
			PopsPanel.getValue("pc-xhs-search-open-blank-keyboard-enter")
		) {
			this.optimizationSearch();
		}
	},
	/**
	 * 优化搜索
	 */
	optimizationSearch() {
		function blankSearchText(searchText?: string, isBlank: boolean = true) {
			if (searchText == null) {
				let $searchText =
					document.querySelector<HTMLInputElement>("#search-input");
				if ($searchText) {
					let searchText = $searchText.value;
					let searchUrl = XHSUrlApi.getSearchUrl(searchText);
					log.info("搜索内容: " + searchText);
					window.open(searchUrl, isBlank ? "_blank" : "_self");
				} else {
					Qmsg.error("未找到搜索的输入框");
				}
			} else {
				log.info("搜索内容: " + searchText);
				window.open(searchText, isBlank ? "_blank" : "_self");
			}
		}
		utils.waitNode<HTMLInputElement>("#search-input").then(($searchInput) => {
			/* 搜索输入框 */
			$searchInput.placeholder = "搜索小红书";
			PopsPanel.execMenu("pc-xhs-search-open-blank-keyboard-enter", () => {
				utils.listenKeyboard(
					$searchInput,
					"keydown",
					(keyName, keyValue, otherCodeList, event) => {
						if (keyName === "Enter" && !otherCodeList.length) {
							log.info("按下回车键");
							utils.preventEvent(event);
							$searchInput.blur();
							blankSearchText();
						}
					}
				);
			});
		});
		utils
			.waitNode<HTMLDivElement>("#search-input + .input-button .search-icon")
			.then(($searchIconBtn) => {
				/* 右侧的搜索按钮 */
				PopsPanel.execMenu("pc-xhs-search-open-blank-btn", () => {
					DOMUtils.on<PointerEvent | MouseEvent>(
						$searchIconBtn,
						"click",
						(event) => {
							utils.preventEvent(event);
							log.info("点击搜索按钮");
							blankSearchText();
						},
						{
							capture: true,
						}
					);
				});
			});
	},
};

export { XHS_Article };
