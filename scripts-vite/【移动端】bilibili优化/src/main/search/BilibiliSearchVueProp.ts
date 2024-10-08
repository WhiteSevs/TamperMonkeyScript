import { utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { VueUtils } from "@/utils/VueUtils";

export const BilibiliSearchVueProp = {
	init() {
		PopsPanel.execMenuOnce("bili-search-vue-prop-noCallApp", () => {
			this.noCallApp();
		});
		PopsPanel.execMenuOnce("bili-search-vue-prop-openAppDialog", () => {
			this.openAppDialog();
		});
	},
	/**
	 * 该属性会让点击搜索结果弹出打开哔哩哔哩app的弹窗
	 * + __vue__.noCallApp
	 */
	noCallApp() {
		let lockFn = new utils.LockFunction(() => {
			document
				.querySelectorAll<HTMLDivElement>(
					".video-list .card-box > div:not([data-gm-inject-no-call-app])"
				)
				.forEach(($div) => {
					let vueIns = VueUtils.getVue($div);
					if (!vueIns) {
						return;
					}
					if (typeof vueIns.noCallApp === "boolean") {
						Object.defineProperty(vueIns, "noCallApp", {
							value: true,
							writable: false,
							enumerable: true,
							configurable: true,
						});
						$div.setAttribute("data-gm-inject-no-call-app", "true");
					}
				});
		});
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			callback() {
				lockFn.run();
			},
		});
	},
	/**
	 * 该属性会让点击搜索结果弹出打开哔哩哔哩app的弹窗
	 * + __vue__.openAppDialog
	 */
	openAppDialog() {
		let lockFn = new utils.LockFunction(() => {
			document
				.querySelectorAll<HTMLDivElement>(
					".video-list .card-box > div:not([data-gm-inject-openAppDialog])"
				)
				.forEach(($div) => {
					let vueIns = VueUtils.getVue($div);
					if (!vueIns) {
						return;
					}
					if (typeof vueIns.openAppDialog === "boolean") {
						Object.defineProperty(vueIns, "openAppDialog", {
							value: false,
							writable: false,
							enumerable: true,
							configurable: true,
						});
						$div.setAttribute("data-gm-inject-openAppDialog", "true");
					}
				});
		});
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			callback() {
				lockFn.run();
			},
		});
	},
};
