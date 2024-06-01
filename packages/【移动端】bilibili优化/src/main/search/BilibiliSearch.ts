import { BilibiliData } from "@/data/BlibiliData";
import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";

const BilibiliSearch = {
	init() {
		PopsPanel.execMenuOnce("bili-search-repair-enter-user-home", () => {
			this.repairEnterUserHome();
		});
	},
	/**
	 * 修复点击UP主正确进入空间
	 */
	repairEnterUserHome() {
		utils
			.waitNode<HTMLDivElement>(
				BilibiliData.className.search + " .result-panel"
			)
			.then(($cardBox) => {
				log.info("修复点击UP主正确进入空间");
				DOMUtils.on<PointerEvent | MouseEvent>(
					$cardBox,
					"click",
					"a.m-search-user-item[href]",
					function (event) {
						utils.preventEvent(event);
						let $click = event.target as HTMLAnchorElement;
						let url = $click.href;
						log.success("链接跳转: " + url);
						window.location.href = url;
					},
					{
						capture: true,
					}
				);
			});
	},
};

export { BilibiliSearch };
