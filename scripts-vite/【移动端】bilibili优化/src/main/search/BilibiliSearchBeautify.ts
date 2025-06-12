import { addStyle, DOMUtils, utils } from "@/env";
import { VueUtils } from "@components/utils/VueUtils";
import { BilibiliExtraSearch } from "./BilibiliExtraSearch";

export const BilibiliSearchBeautify = {
	$flag: { mutationSearchResult: false },
	init() {
		this.mutationSearchResult();
	},
	/**
	 * 监听搜索结果改变
	 */
	mutationSearchResult() {
		if (this.$flag.mutationSearchResult) {
			return;
		}
		this.$flag.mutationSearchResult = true;
        addStyle(/*css*/`
        .bangumi-list{
            padding: 0 10px;
        }
        `)
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			callback: utils.debounce(() => {
				// 番剧搜索结果
				document
					.querySelectorAll<HTMLAnchorElement>(".m-search-bangumi-item")
					.forEach(($bangumiItem) => {
						let vueIns = VueUtils.getVue($bangumiItem)!;
						if (!vueIns) {
							return;
						}
						let info = vueIns.info;
						if (!info) {
							return;
						}
						let $newBangumiItem =
							BilibiliExtraSearch.createSearchResultVideoItem(info);
						DOMUtils.after($bangumiItem, $newBangumiItem);
						$bangumiItem.remove();
					});
			}),
		});
	},
};
