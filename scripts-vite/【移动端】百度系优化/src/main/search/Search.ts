import { DOMUtils, log, utils, addStyle } from "@/env";
import { BaiduRouter } from "@/router/BaiduRouter";
import { PopsPanel } from "@/setting/setting";
import SearchShieldCSS from "./shield.css?raw";
import { BaiduHeadlth } from "./bh/SearchHealth";
import { BaiduSearchHook } from "./SearchHook";
import { BaiduResultItem } from "./SearchResultItem";
import { SearchNextPage, SearchNextPage_SearchCraft } from "./SearchNextPage";
import { SearchInputEvent } from "./SearchInput";
import { BaiduSearchRule } from "./SearchRule";
import { BaiduSearchVideo } from "./video/SearchVideo";
import { BaiduSearchVSearch } from "./vsearch/VSearch";

/**
 * 处理百度搜索自定义的样式添加
 */
const UserCustomStyle = {
	/**
	 * 获取用户自定义样式
	 */
	getUserStyle() {
		return PopsPanel.getValue("baidu-search-user-style", "");
	},
};

const BaiduSearch = {
	async init() {
		addStyle(UserCustomStyle.getUserStyle());
		log.info("插入用户CSS规则");
		BaiduSearchRule.init();
		if (BaiduRouter.isSearchBh()) {
			/* 百度健康 */
			BaiduHeadlth.init();
		} else if (BaiduRouter.isSearchVideo()) {
			// 视频页
			BaiduSearchVideo.init();
		} else {
			BaiduSearchHook.init();
			/* 默认的百度搜索 */
			addStyle(SearchShieldCSS);
			log.info("插入CSS规则");
			PopsPanel.execMenu("baidu_search_hijack__onClick_to_blank", () => {
				this.openResultBlank();
			});
			DOMUtils.ready(function () {
				/* 解析真实地址 from <script> */
				BaiduResultItem.originURLMap =
					BaiduResultItem.parseScriptDOMOriginUrlMap(document);
				/* 处理搜索结果 */
				let baidu_search_handle_search_result_enable = PopsPanel.getValue(
					"baidu_search_handle_search_result"
				);
				if (baidu_search_handle_search_result_enable) {
					let searchUpdateRealLink = new utils.LockFunction(async () => {
						try {
							await BaiduResultItem.replaceLink();
						} catch (error) {
							log.error(["替换为真实链接失败", error]);
						}
					}, 600);
					let removeAdsLockFunction = new utils.LockFunction(
						BaiduResultItem.removeAds,
						600
					);
					utils
						.waitNode<HTMLDivElement>("div#page.search-page")
						.then((element) => {
							utils.mutationObserver(element, {
								callback: async () => {
									if (baidu_search_handle_search_result_enable) {
										await searchUpdateRealLink.run();
									}
									removeAdsLockFunction.run();
								},
								config: {
									childList: true,
									subtree: true,
								},
							});
						});

					if (baidu_search_handle_search_result_enable) {
						searchUpdateRealLink.run();
					}
					removeAdsLockFunction.run();
				}
				/* 处理搜索置顶的卡片的style */
				utils
					.waitNodeList<NodeListOf<HTMLStyleElement>>(
						"style[class^='vsearch-sigma-style']"
					)
					.then((nodeList) => {
						/* 这个style标签就是某些搜索置顶的卡片 */
						log.success(["删除sigma的CSS", nodeList]);
						nodeList.forEach((item) => item.remove());
					});
				PopsPanel.execMenu("baidu_search_redirect_top_link", () => {
					BaiduResultItem.redirectTopLink();
				});
				BaiduResultItem.replaceScriptBaiDuTip();
				PopsPanel.execMenu("baidu_search_refactoring_input_boxes", () => {
					SearchInputEvent.init();
				});
				/* 处理自动加载下一页 */
				if (PopsPanel.getValue("baidu_search_automatically_expand_next_page")) {
					SearchNextPage.init();
				} else if (
					PopsPanel.getValue(
						"baidu_search_automatically_click_on_the_next_page_with_searchcraft_ua"
					)
				) {
					SearchNextPage_SearchCraft.init();
				}
				if (BaiduRouter.isSearchVSearch()) {
					// /sf/vsearch
					BaiduSearchVSearch.init();
				}
			});
		}
	},
	/**
	 * 新标签页打开
	 */
	openResultBlank() {
		function globalResultClickEvent(event: PointerEvent | MouseEvent | Event) {
			let url = null;
			let $click = event.composedPath()[0] as HTMLElement;
			let $result = event.target as HTMLElement;
			if ($click) {
				if ($click.closest("a")) {
					let $link = $click.closest("a") as HTMLAnchorElement;
					if (utils.isNotNull($link.href)) {
						log.info([
							"链接来自上层a元素",
							{
								event,
								$click,
								$link,
							},
						]);
						url = $link.href;
					}
				} else if ($click.closest("[rl-link-href]")) {
					let $rlLinkDiv = $click.closest("[rl-link-href]") as HTMLElement;
					let rlLinkHref = $rlLinkDiv.getAttribute("rl-link-href");
					if (utils.isNotNull(rlLinkHref)) {
						log.info([
							"链接来自上层含有[rl-link-href]属性的元素",
							{
								event,
								$click,
								$rlLinkDiv,
							},
						]);
						url = rlLinkHref;
					}
				}
			} else {
				let $article = $result.querySelector("article") as HTMLElement;
				url = $article.getAttribute("rl-link-href");
				log.info([
					"链接来自顶层向下寻找article元素",
					{ event, $result, $article },
				]);
			}
			if (utils.isNull(url)) {
				log.info(["未找到有效链接", { event, url, $result, $click }]);
				return;
			}
			/* 阻止事件传递 */
			utils.preventEvent(event);
			log.success(["新标签页打开-来自click事件", url]);
			window.open(url, "_blank");
		}
		DOMUtils.on(document, "click", ".c-result.result", globalResultClickEvent, {
			capture: true,
		});
	},
};

export { BaiduSearch };
