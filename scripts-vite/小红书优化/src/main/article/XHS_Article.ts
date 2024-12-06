import { XHSUrlApi } from "@/api/XHSUrlApi";
import { $, $$, addStyle, DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { VueUtils } from "@/utils/VueUtils";
import Qmsg from "qmsg";

/**
 * 一些信息
 *
 * 笔记页面，当页面宽度<960px时，会触发笔记布局改变，即变为竖向列表布局
 * ↓
 * 图
 * 介绍
 * 评论区
 *
 * >=960px时
 *
 * 图   文
 *      介绍
 *      评论区
 *
 */

export const XHS_Article = {
	init() {
		if (
			PopsPanel.getValue("pc-xhs-search-open-blank-btn") ||
			PopsPanel.getValue("pc-xhs-search-open-blank-keyboard-enter")
		) {
			this.optimizationSearch();
		}
		PopsPanel.execMenuOnce("pc-xhs-article-fullWidth", () => {
			return this.fullWidth();
		});
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
				DOMUtils.listenKeyboard(
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
	/**
	 * 笔记宽屏
	 */
	fullWidth() {
		log.info("笔记宽屏");
		let noteContainerWidth = PopsPanel.getValue(
			"pc-xhs-article-fullWidth-widthSize",
			90
		);
		return addStyle(/*css*/ `
		.main-container .main-content{
			padding-left: 0 !important;
		}
		.outer-link-container{
			width: 100vw !important;
		}
		/* 隐藏左侧工具栏 */
		.main-container .side-bar{
			display: none !important;
		}
		#noteContainer{
			width: ${noteContainerWidth}vw;
		}
		`);
	},
	/**
	 * 转换笔记发布时间
	 */
	transformPublishTime() {
		log.info(`转换笔记发布时间`);
		let lockFn = new utils.LockFunction(() => {
			$$<HTMLElement>(".note-content:not([data-edit-date])").forEach(
				($noteContent) => {
					let vueInstance = VueUtils.getVue($noteContent);
					if (!vueInstance) {
						return;
					}
					let note = vueInstance?._?.props?.note;
					if (note == null) {
						return;
					}
					let publishTime = note.time;
					let lastUpdateTime = note.lastUpdateTime;
					let ipLocation = note.ipLocation;
					if (typeof publishTime === "number") {
						let detailTimeLocationInfo = [];
						detailTimeLocationInfo.push(
							`发布：${utils.formatTime(publishTime)}`
						);
						if (typeof lastUpdateTime === "number") {
							detailTimeLocationInfo.push(
								`修改：${utils.formatTime(lastUpdateTime)}`
							);
						}
						if (typeof ipLocation === "string" && utils.isNotNull(ipLocation)) {
							detailTimeLocationInfo.push(ipLocation);
						}
						let $date = $noteContent.querySelector<HTMLElement>(".date")!;
						DOMUtils.html($date, detailTimeLocationInfo.join("<br>"));
						$noteContent.setAttribute("data-edit-date", "");
					}
				}
			);
		});
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			callback: () => {
				lockFn.run();
			},
		});
	},
};
