import { DOMUtils, log, utils } from "@/env";

export const DouYinElement = {
	/**
	 * 观察 #slidelist的加载每条视频
	 * @param callback
	 */
	watchVideDataListChange(
		callback: (osElement: HTMLDivElement, observer: MutationObserver) => void
	) {
		let $os = null as HTMLDivElement | null;
		DOMUtils.ready(() => {
			utils
				.waitAnyNode<HTMLDivElement>([
					"#slidelist",
					// 搜索页面的↓搜索结果列表
					'#search-content-area ul[data-e2e="scroll-list"]',
				])
				.then(($ele) => {
					log.info(`启用观察器观察加载的视频`);
					utils.mutationObserver(document.body, {
						config: {
							childList: true,
							subtree: true,
						},
						immediate: true,
						callback: (mutations, observer) => {
							$os = $os || this.getOSElement();
							if (!$os) {
								log.error("watchVideDataListChange：获取osElement失败");
								return;
							}
							callback($os, observer);
						},
					});
				});
		});
	},
	getOSElement() {
		return (
			document.querySelector<HTMLDivElement>("#root div[class*='-os']") ||
			document.querySelector<HTMLDivElement>("#douyin-right-container")
		);
	},
};
