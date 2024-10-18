import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { VueUtils } from "@/utils/VueUtils";
import DOMUtils from "@whitesev/domutils";
import Qmsg from "qmsg";

export const WeiBoHotSearch = {
	init() {
		PopsPanel.execMenuOnce("weibo-hot-search-openBlank", () => {
			this.openBlank();
		});
	},
	/**
	 * 新标签页打开链接
	 */
	openBlank() {
		DOMUtils.on(
			document,
			"click",
			".card-list .card",
			(event) => {
				utils.preventEvent(event);
				let vueIns = VueUtils.getVue(event.target);
				if (!vueIns) {
					log.error("没有找到对应的Vue实例", vueIns);
					Qmsg.error("没有找到对应的Vue实例");
					return;
				}
				let carddata = vueIns?.carddata;
				if (typeof carddata?.scheme !== "string") {
					log.error("没有找到对应的scheme", vueIns);
					Qmsg.error("没有找到对应的scheme");
					return;
				}
				let scheme = carddata.scheme;
				log.success(`新标签页打开：` + scheme);
				window.open(scheme, "_blank");
			},
			{
				capture: true,
			}
		);
	},
};
