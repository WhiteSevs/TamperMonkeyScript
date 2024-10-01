import { BilibiliApiProxy } from "@/api/BilibiliCDNProxy";
import { BilibiliSearchApi } from "@/api/BilibiliSearchApi";
import { addStyle, DOMUtils, log, pops, Qmsg, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { VueUtils } from "@/utils/VueUtils";

/**
 * 额外搜索
 */
export const BilibiliExtraSearch = {
	$data: {},
	init() {
		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("bili-search-enableOtherAreaSearchBangumi", () => {
				this.enableOtherAreaSearchBangumi();
			});
		});
	},
	/**
	 * 初始化搜索的tab
	 */
	enableOtherAreaSearchBangumi() {
		addStyle(/*css*/ `
        .m-search-result .tabs{
            overflow: auto;
            white-space: nowrap;
        }
        .m-search-result .tabs .tab-item{
            display: inline-block;
            height: 8vmin;
            line-height: 8vmin;
            color: #757575;
            font-size: 3.73333vmin;
            margin-top: 1.86667vmin;
            padding: 0 2.33vmin;
        }
        .m-search-result .tabs .tab-item:first-child{
            padding-left: 0;
        }
        .m-search-result .tabs .tab-item:last-child{
            padding-right: 0;
        }
        .m-search-result .tabs .tab-item.on{
            color: #fb7299;
            border-bottom: 0.53333vmin solid #fb7299;
        }
        `);
		utils.waitNode(".m-search-result .tabs").then(($tabs) => {
			// 先获取设置了搜索服务器的配置
			let enableSearchServer = BilibiliApiProxy.getSearchProxyHost();
			enableSearchServer.forEach((proxyServerInfo) => {
				let $tab = DOMUtils.createElement(
					"a",
					{
						className: "tab-item gm-tab-item",
						innerHTML: `番剧（${proxyServerInfo.name}）`,
					},
					{
						"data-area": proxyServerInfo.area,
						"data-host": proxyServerInfo.host,
					}
				);
				$tabs.appendChild($tab);
			});
			/**
			 * 刷新tab选中状态
			 */
			const refreshTabActive = ($tab: HTMLElement) => {
				$tabs
					.querySelectorAll(".tab-item")
					.forEach(($ele) => $ele.classList.remove("on"));
				// 给自己添加选中状态
				$tab.classList.add("on");
			};
			DOMUtils.on($tabs, "click", ".tab-item", async (event) => {
				let $tab = event.target as HTMLElement;
				// 先取消其它的item的选中状态
				refreshTabActive($tab);
				if (!$tab.classList.contains("gm-tab-item")) {
					// 页面的tab，返回
					return;
				}
				let area = $tab.dataset.area!;
				let host = $tab.dataset.host!;
				let $searchResult =
					document.querySelector<HTMLDivElement>(".m-search-result")!;
				let searchResultVueIns = VueUtils.getVue($searchResult)!;
				// 切换tab为2（番剧）页面
				searchResultVueIns.switchTab(2);
				let refreshCount = 0;
				// 循环刷新，因为切换tab可能不会立即
				let intervalRefreshId = setInterval(() => {
					if (refreshCount > 10) {
						clearInterval(intervalRefreshId);
						return;
					}
					refreshCount++;
					refreshTabActive($tab);
				}, 250);
				/** 搜索关键词 */
				let keyword = searchResultVueIns.keyword;
				let $loading = Qmsg.loading("搜索中，请稍后...");
				// 搜索
				let searchBangumiResult =
					await BilibiliSearchApi.getBangumiSearchResult({
						keyword: keyword,
						area: area as any,
						host: host,
					});
				$loading.close();
				if (!searchBangumiResult) {
					return;
				}
				log.info(["搜索结果：", searchBangumiResult]);
				let videoListVueIns = VueUtils.getVue(
					$searchResult.querySelector<HTMLDivElement>(".video-list")!
				)!;
				// 清空旧的搜索结果
				for (let index = 0; index < videoListVueIns.list.length; index++) {
					videoListVueIns.list.splice(index, 1);
					index--;
				}
				// 添加新的搜索结果
				videoListVueIns.list = videoListVueIns.list.concat(searchBangumiResult);

				let $listViewState =
					$searchResult.querySelector<HTMLElement>(".list-view__state")!;
				let $listViewShim =
					$searchResult.querySelector<HTMLElement>(".list-view__shim")!;
				// 设置搜索结果状态
				if (searchBangumiResult.length) {
					DOMUtils.hide($listViewState);
					DOMUtils.hide($listViewShim);
				} else {
					DOMUtils.show($listViewState);
					DOMUtils.show($listViewShim);
				}
			});
		});
	},
	/**
	 * 搜索番剧(从自定义服务器拉取搜索结果)
	 */
	searchBangumi() {},
};
