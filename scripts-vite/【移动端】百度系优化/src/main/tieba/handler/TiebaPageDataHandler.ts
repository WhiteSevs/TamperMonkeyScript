import { $, utils } from "@/env";
import { VueUtils } from "@components/utils/VueUtils";

export const TiebaPageDataHandler = {
	/**
	 * 从页面中获取forum的id
	 */
	getForumId() {
		let dataBannerInfoStr =
			$(".recommend-item")?.getAttribute("data-banner-info");
		let dataBannerInfo = utils.toJSON(dataBannerInfoStr as string);
		if (dataBannerInfo["forum_id"]) {
			return dataBannerInfo["forum_id"];
		} else {
			return VueUtils.getVue($<HTMLElement>(".app-view")!)?.forum?.id;
		}
	},
};
