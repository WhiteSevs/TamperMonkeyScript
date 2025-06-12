import { BilibiliApiProxy } from "@/api/BilibiliCDNProxy";
import {
	BilibiliSearchApi,
	type BilibiliSearchBangumiResultEntity,
} from "@/api/BilibiliSearchApi";
import { addStyle, DOMUtils, log, pops, utils } from "@/env";
import { VueUtils } from "@components/utils/VueUtils";
import beautifyCSS from "./css/beautify.css?raw";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";

/**
 * 额外搜索
 */
export const BilibiliExtraSearch = {
	$flag_css: {
		enableOtherAreaSearchBangumi: false,
	},
	init() {
		addStyle(beautifyCSS);
		DOMUtils.ready(() => {
			Panel.execMenu("bili-search-enableOtherAreaSearchBangumi", () => {
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
					let searchBangumiResultInfo =
						await BilibiliSearchApi.getBangumiSearchResult({
							keyword: keyword,
							area: area as any,
							host: host,
						});
					$loading.close();
					if (!searchBangumiResultInfo) {
						return;
					}
					if (!searchBangumiResultInfo.isSuccess) {
						alert(JSON.stringify(searchBangumiResultInfo.data, null, 2));
						return;
					}
					let searchBangumiResultData = searchBangumiResultInfo.data;
					log.info("搜索结果：", searchBangumiResultData);

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
					searchBangumiResultData.forEach((searchBangumiResultItem) => {
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
						<div class="gm-card-badges">${option.season_type_name}</div>
						<img src="${option.cover}" alt="封面">
					</div>
					<div class="gm-card-info">
						<div class="gm-card-info-container">
							<div class="gm-card-title">${option.title}</div>
							<div class="gm-card-display-info">
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
		Reflect.set($item, "data-option", option);
		DOMUtils.on($item, "click", (event) => {
			utils.preventEvent(event);
			window.open(option.url, "_blank");
		});
		// 显示信息，包括发布时间、发布区域信息
		// 排在前面的是display_info内的信息
		let $displayInfo = $item.querySelector<HTMLElement>(
			".gm-card-display-info"
		)!;
		let totalDisplayInfo: BilibiliSearchBangumiResultEntity["badges"] = [];

		if (Array.isArray(option?.display_info)) {
			totalDisplayInfo = totalDisplayInfo.concat(option.display_info);
		}
		if (Array.isArray(option?.badges)) {
			totalDisplayInfo = totalDisplayInfo.concat(option.badges);
		}
		// 去重
		totalDisplayInfo = utils.uniqueArray(totalDisplayInfo, (item) => item.text);

		totalDisplayInfo.forEach((displayInfo) => {
			let $displayInfoItem = DOMUtils.createElement("span", {
				className: "gm-card-badge-info-item",
				innerText: displayInfo.text,
			});
			if (typeof displayInfo.border_color === "string") {
				// 边框颜色
				$displayInfoItem.style.border = `1px solid ${displayInfo.border_color}`;
				// 字体跟随边框
				$displayInfoItem.style.color = displayInfo.border_color;
			}
			DOMUtils.append($displayInfo, $displayInfoItem);
		});

		if (option.pubtime) {
			// 发布时间
			DOMUtils.append(
				$displayInfo,
				/*html*/ `
				<span>${utils.formatTime(option.pubtime * 1000, "yyyy")}</span>
				`
			);
		}
		let areas = option.areas || Reflect.get(option, "area");
		if (areas) {
			// 发布区域
			if ($displayInfo.children.length) {
				DOMUtils.append(
					$displayInfo,
					/*html*/ `
					<span> | </span>
				`
				);
			}
			DOMUtils.append(
				$displayInfo,
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
		let epsList: BilibiliSearchBangumiResultEntity["eps"] = [
			...(option.eps || []),
			...(Reflect.get(option, "episodes_new") || []),
		].filter((item) => utils.isNotNull(item));
		epsList.forEach((epsItem) => {
			let title = epsItem.title || epsItem.long_title;
			let url = epsItem.url || Reflect.get(epsItem, "uri");
			let $epItem = DOMUtils.createElement(
				"div",
				{
					className: "gm-card-ep-conatiner",
					innerHTML: /*html*/ `
				<div class="gm-card-ep-badges-container">
					
				</div>
				<div class="gm-card-ep-info-container">
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
			// 右上角标志
			let $epBadges = $epItem.querySelector<HTMLElement>(
				".gm-card-ep-badges-container"
			)!;
			// 番剧集数
			let $epInfo = $epItem.querySelector<HTMLElement>(
				".gm-card-ep-info-container"
			)!;
			if (Array.isArray(epsItem.badges) && epsItem.badges.length) {
				// 添加badges
				// 只添加1个
				let epItemBadgeInfo = epsItem.badges[0];
				let $badge = DOMUtils.createElement("span", {
					className: "gm-card-ep-badge-top-right",
					innerText: epItemBadgeInfo.text,
				});
				if (typeof epItemBadgeInfo.bg_color === "string") {
					// 背景颜色
					$badge.style.backgroundColor = epItemBadgeInfo.bg_color;
				}
				if (typeof epItemBadgeInfo.text_color === "string") {
					// 字体颜色
					$badge.style.color = epItemBadgeInfo.text_color;
				}
				DOMUtils.append($epBadges, $badge);
			}

			DOMUtils.on($epItem, "click", (event) => {
				utils.preventEvent(event);
				window.open(url, "_blank");
			});
			$eps.appendChild($epItem);
		});
		return $item;
	},
	/**
	 * 搜索番剧(从自定义服务器拉取搜索结果)
	 */
	searchBangumi() {},
};
