import { DOMUtils, log, utils } from "@/env";

export const DouYinElement = {
	/**
	 * 观察 #slidelist的加载每条视频
	 * @param callback
	 */
	watchVideDataListChange(callback: (osElement: HTMLDivElement) => void) {
		let $os = null as HTMLDivElement | null;
		DOMUtils.ready(() => {
			utils
				.waitAnyNode<HTMLDivElement>([
					"#slidelist",
					// 搜索页面的↓搜索结果列表
					'#search-content-area ul[data-e2e="scroll-list"]',
				])
				.then(($ele) => {
					utils.mutationObserver($ele, {
						config: {
							childList: true,
							subtree: true,
						},
						callback: () => {
							if (!$os) {
								$os = this.getOSElement();
							}
							if (!$os) {
								log.error("watchVideDataListChange：获取osElement失败");
								return;
							}
							callback($os);
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
