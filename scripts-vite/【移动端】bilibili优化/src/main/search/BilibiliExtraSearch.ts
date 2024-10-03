import { BilibiliApiProxy } from "@/api/BilibiliCDNProxy";
import {
	BilibiliSearchApi,
	type BilibiliSearchBangumiResultEntity,
} from "@/api/BilibiliSearchApi";
import { addStyle, DOMUtils, log, pops, Qmsg, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { VueUtils } from "@/utils/VueUtils";

/**
 * 额外搜索
 */
export const BilibiliExtraSearch = {
	$flag_css: {
		enableOtherAreaSearchBangumi: false,
	},
	$data: {},
	init() {
		DOMUtils.ready(() => {
			PopsPanel.execMenu("bili-search-enableOtherAreaSearchBangumi", () => {
				this.enableOtherAreaSearchBangumi();
			});
		});
	},
	/**
	 * 初始化搜索的tab
	 */
	enableOtherAreaSearchBangumi() {
		if (!this.$flag_css.enableOtherAreaSearchBangumi) {
			this.$flag_css.enableOtherAreaSearchBangumi = true;

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
				color: var(--bili-color);
				border-bottom: 0.53333vmin solid var(--bili-color);
			}
			`);
			addStyle(/*css*/ `
			.gm-result-panel {
				padding-top: 23.46667vmin;
				background: #f4f4f4;
				--card-img-width: 90px;
				--card-img-height: calc(var(--card-img-width) * 1.33 );
				--card-desc-color: #808080;
				--card-desc-size: 0.8em;
			}
			.gm-card-cover{
			}
			.gm-card-cover img {
				width: var(--card-img-width);
				height: var(--card-img-height);
				border-radius: 8px;
			}
			.gm-card-container {
				display: flex;
				gap: 15px;
			}
	
			.gm-card-box {
				padding: 0px 10px;
			}
	
			.gm-card-item em {
				color: var(--bili-color);
				font-style: unset;
			}
	
			.gm-card-title {
				font-family: 微软雅黑;
				font-size: 1em;
			}
	
			.gm-card-pubtime,
			.gm-card-styles,
			span.gm-card-media_score-user_count {
				font-size: var(--card-desc-size);
				color: var(--card-desc-color);
			}
	
			.gm-card-info-container {
				display: flex;
				flex-direction: column;
				gap: 3px;
				justify-content: flex-start;
			}
			.gm-card-info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
			span.gm-card-media_score-score {
				color: #F77C2E;
				font-size: 1.2em;
				font-weight: bold;
			}
	
			.gm-card-media_score {
				display: flex;
				align-items: flex-end;
				gap: 0.5em;
			}
			.gm-card-item {
				padding: 1.6vmin;
				background: #fff;
				margin: 10px 0px;
				border-radius: 6px;
				display: flex;
				flex-direction: column;
				gap: 15px;
			}
			.gm-card-badges {
				background: var(--bili-color);
				color: #fff;
				padding: 3px;
				font-size: 12px;
				border-radius: 3px;
				white-space: nowrap;
				position: absolute;
				margin: 5px 0px 0px calc(var(--card-img-width) - 36px );
			}
			.gm-card-eps {
				display: flex;
				overflow: auto;
				gap: 10px;
			}
	
			.gm-card-eps-item {
				text-align: center;
				white-space: nowrap;
				padding: 10px;
				background: #edeff3;
				border-radius: 8px;
				font-size: 14px;
			}
	
			.gm-card-eps-item-info {
				min-width: 30px;
			}
			`);
		}
		utils
			.waitNode(".m-search-result .tabs:not(:has(.gm-tab-item))")
			.then(($tabs) => {
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
						.forEach(($ele) => $tab != $ele && $ele.classList.remove("on"));
					// 给自己添加选中状态
					$tab.classList.add("on");
				};
				DOMUtils.on($tabs, "click", ".tab-item", async (event) => {
					let $tab = event.target as HTMLElement;
					// 先取消其它的item的选中状态
					refreshTabActive($tab);
					let $resultPanel =
						document.querySelector<HTMLElement>(".result-panel")!;
					let $oldGmResultPanel =
						document.querySelector<HTMLElement>(".gm-result-panel");
					if ($oldGmResultPanel) {
						// 移除旧的结果
						$oldGmResultPanel.remove();
						// 显示页面的搜索结果
						DOMUtils.show($resultPanel!);
					}
					if (!$tab.classList.contains("gm-tab-item")) {
						// 页面的tab，返回
						return;
					}
					let area = $tab.dataset.area!;
					let host = $tab.dataset.host!;
					/** 搜索结果 */
					let $searchResult =
						document.querySelector<HTMLDivElement>(".m-search-result")!;
					let searchResultVueIns = VueUtils.getVue($searchResult)!;
					// 切换tab为2（番剧）页面
					searchResultVueIns.switchTab(233);
					// 隐藏页面的原始搜索结果
					DOMUtils.hide($resultPanel);
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

					// 自定义搜索结果元素添加到页面中
					let $gmResultPanel = DOMUtils.createElement("div", {
						className: "gm-result-panel",
						innerHTML: /*html*/ `
					<div class="gm-list-view">
						<div class="gm-video-list-box">
							<div class="gm-video-list">
								<div class="gm-card-box"></div>
							</div>
						</div>
					</div>

					`,
					});
					let $gmCardBox =
						$gmResultPanel.querySelector<HTMLElement>(".gm-card-box")!;
					searchBangumiResult.forEach((searchBangumiResultItem) => {
						$gmCardBox.appendChild(
							this.createSearchResultVideoItem(searchBangumiResultItem)
						);
					});
					$searchResult.appendChild($gmResultPanel);
				});
			});
	},
	/**
	 * 创建搜索结果项
	 */
	createSearchResultVideoItem(option: BilibiliSearchBangumiResultEntity) {
		let $item = DOMUtils.createElement(
			"div",
			{
				className: "gm-card-item",
				innerHTML: /*html*/ `
				<div class="gm-card-container">
					<div class="gm-card-cover">
						<img src="${option.cover}" alt="封面">
					</div>
					<div class="gm-card-badges">${option.season_type_name}</div>
					<div class="gm-card-info">
						<div class="gm-card-info-container">
							<div class="gm-card-title">${option.title}</div>
							<div class="gm-card-pubtime">
							</div>
							<div class="gm-card-styles">${
								option.styles ||
								Reflect.get(option, "style") ||
								Reflect.get(option, "styles_v2") ||
								""
							}</div>
						</div>
						<div class="gm-card-media_score">
							
						</div>
					</div>
					<div class="gm-card-ferture">
					</div>
				</div>
				<div class="gm-card-eps">
					
				</div>
				`,
			},
			{
				"data-url": option.url,
				"data-type": option.type,
				"data-media_id": option.media_id,
				"data-pgc_season_id": option.pgc_season_id,
				"data-is_follow": option.is_follow,
				"data-is_selection": option.is_selection,
			}
		);
		DOMUtils.on($item, "click", (event) => {
			utils.preventEvent(event);
			window.open(option.url, "_blank");
		});
		// 添加发布时间、发布区域信息
		let $pubtime = $item.querySelector<HTMLElement>(".gm-card-pubtime")!;
		if (option.pubtime) {
			DOMUtils.append(
				$pubtime,
				/*html*/ `
			<span>${utils.formatTime(option.pubtime * 1000, "yyyy")}</span>
			`
			);
		}
		let areas = option.areas || Reflect.get(option, "area");
		if (areas) {
			if ($pubtime.children.length) {
				DOMUtils.append(
					$pubtime,
					/*html*/ `
					<span> | </span>
				`
				);
			}
			DOMUtils.append(
				$pubtime,
				/*html*/ `
					<span>${areas}</span>
				`
			);
		}
		// 添加评分信息
		let $mediaScore = $item.querySelector<HTMLElement>(".gm-card-media_score")!;
		if (option.media_score && option.media_score.user_count) {
			// 有人评分才添加信息
			DOMUtils.append(
				$mediaScore,
				/*html*/ `
				<span class="gm-card-media_score-score">${
					option.media_score?.score || 0
				}分</span>
				<span class="gm-card-media_score-user_count">${
					option.media_score?.user_count || 0
				}人参与</span>
				`
			);
		}

		// 添加集数信息
		let $eps = $item.querySelector<HTMLElement>(".gm-card-eps")!;
		// 兼容一下漫游服务器的公告信息
		let epsList = [
			...(option.eps || []),
			...(Reflect.get(option, "episodes_new") || []),
		].filter((item) => utils.isNotNull(item));
		epsList.forEach((epsItem) => {
			let title = epsItem.title || epsItem.long_title;
			let url = epsItem.url || Reflect.get(epsItem, "uri");
			let $epsItem = DOMUtils.createElement(
				"div",
				{
					className: "gm-card-eps-item",
					innerHTML: /*html*/ `
				<div class="gm-card-eps-item-badges">
					
				</div>
				<div class="gm-card-eps-item-info">
					${title}
				</div>`,
				},
				{
					"data-id": epsItem.id,
					"data-url": url,
					"data-title": title,
					"data-long_title": epsItem.long_title,
				}
			);
			DOMUtils.on($epsItem, "click", (event) => {
				utils.preventEvent(event);
				window.open(url, "_blank");
			});
			$eps.appendChild($epsItem);
		});
		return $item;
	},
	/**
	 * 搜索番剧(从自定义服务器拉取搜索结果)
	 */
	searchBangumi() {},
};
