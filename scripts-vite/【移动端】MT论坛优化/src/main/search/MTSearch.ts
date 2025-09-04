import { $, addStyle, log, pops, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import DOMUtils from "@whitesev/domutils";
import type { PopsSearchSuggestionData } from "@whitesev/pops/dist/types/src/components/searchSuggestion/types";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";

export const MTSearch = {
	init() {
		addStyle(/*css*/ `
		/* 去除搜索框的蒙版 */
        #comiis_search_noe{
            display: none !important;
        }
		/* 显示真正的试搜索框 */
        #comiis_search_two{
            display: block !important;
        }
        `);
		DOMUtils.ready(() => {
			Panel.execMenuOnce("mt-search-showSearchHistory", () => {
				this.showSearchHistory();
			});
			Panel.execMenuOnce("mt-search-repairClearBtn", () => {
				this.repairClearBtn();
			});
			Panel.execMenuOnce("mt-search-searchInputAutoFocus", () => {
				this.searchInputAutoFocus();
			});
		});
	},
	/**
	 * 显示搜索历史
	 */
	async showSearchHistory() {
		log.info(`显示搜索历史`);
		let searchHistoryList = GM_getValue<string[]>("search_history", []);
		let $input = $<HTMLInputElement>("#scform_srchtxt")!;
		let $submit = $<HTMLFormElement>("#searchform")!;
		const searchSuggestionData: PopsSearchSuggestionData[] = searchHistoryList.map((item) => {
			return {
				value: item,
				enableDeleteButton: true,
				deleteButtonClickCallback(event, $dataItem, dataItem, config) {
					let findIndex = searchHistoryList.findIndex((item) => item === dataItem.value);
					if (findIndex !== -1) {
						searchHistoryList.splice(findIndex, 1);
						GM_setValue("search_history", searchHistoryList);
					}
					$dataItem.remove();
				},
				itemView(dateItem, $parent, config) {
					return dateItem.value;
				},
				clickCallback(event, $dataItem, dataItem, config) {
					$input.value = dataItem.value;
					$submit.submit();
				},
			};
		});
		let suggestion = pops.searchSuggestion({
			target: $input,
			inputTarget: $input,
			data: searchSuggestionData,
			inputTargetChangeRefreshShowDataCallback(inputValue, data, config) {
				return searchSuggestionData.filter((item) => {
					return item.value.includes(inputValue);
				});
			},
		});
		suggestion.init();
		suggestion.setAllEvent();
		function search_event() {
			/* 搜索历史事件 */
			/* 搜索界面增加关闭按钮事件，清空input内容 */
			/* 点击搜索保存搜索记录 */
			let $submit = document.querySelector("#scform_submit")!;
			DOMUtils.on($submit, "click", function () {
				let searchText = $input.value;
				if (searchText != "") {
					let localHistorySearchText = GM_getValue<string[]>("search_history", []);
					if (localHistorySearchText.includes(searchText)) {
						log.info(`已有该搜索历史记录`);
					} else {
						log.info(`无该记录，追加`);
						localHistorySearchText.push(searchText);
					}
					GM_setValue("search_history", localHistorySearchText);
				}
			});
		}

		/**
		 * 搜索界面添加清理历史记录和历史记录个数
		 */
		function add_clear_history() {
			let localHistorySearchText = GM_getValue<string[]>("search_history", []);
			let clear_history_innerHTML =
				/*html*/ `<div class="comiis_p12 f14 bg_f f_c b_b cl" style="padding-bottom:10px">搜索记录个数: ` +
				localHistorySearchText.length +
				/*html*/ `<button class="btn_clear_search_history" style="
                    border: none;
                    float: right;
                    background: red;
                    color: #fff;
                    border-radius: 3px;
                    font-weight: 600;
                    min-width: 20vw;
                    width: 20vw;
                ">清理记录</button></div>`;
			DOMUtils.before(document.querySelector<HTMLElement>(".comiis_p12")!, clear_history_innerHTML);
			let $searchHistory = document.querySelector(".btn_clear_search_history")!;
			DOMUtils.on($searchHistory, "click", (event) => {
				utils.preventEvent(event);
				GM_deleteValue("search_history");
				window.location.reload();
			});
		}

		search_event();
		add_clear_history();
	},
	/**
	 * 修复清空按钮
	 */
	repairClearBtn() {
		utils.waitNode("a.ssclose").then(($empty) => {
			log.info(`修复清空按钮`);
			DOMUtils.on(
				$empty,
				"click",
				(event) => {
					let $input = document.querySelector<HTMLInputElement>("#scform_srchtxt");
					if ($input) {
						$input.value = "";
					} else {
						Qmsg.error("获取输入框失败");
					}
				},
				{
					capture: true,
				}
			);
		});
	},
	/**
	 * 搜索框自动获取焦点
	 */
	searchInputAutoFocus() {
		let searchParams = new URLSearchParams(window.location.search);
		if (searchParams.has("kw")) {
			// 不在搜索结果页面获取焦点
			return;
		}
		utils.waitNode<HTMLInputElement>("#scform_srchtxt").then(($input) => {
			log.info(`搜索框自动获取焦点`);
			$input.focus();
		});
	},
};
