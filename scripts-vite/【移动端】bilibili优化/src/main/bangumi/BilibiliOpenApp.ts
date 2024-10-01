import { log, Qmsg } from "@/env";
import { BilibiliUtils } from "@/utils/BilibiliUtils";

export const BilibiliOpenApp = {
	getUrl($ele: HTMLElement | null | Element) {
		if ($ele == null) {
			return;
		}
		return $ele.getAttribute("universallink");
	},
	/**
	 * 直接跳转Url
	 * @param event
	 */
	jumpToUrl(event: Event) {
		let $click = event.target as HTMLElement;
		let $biliOpenApp = $click.querySelector("bili-open-app");
		if ($biliOpenApp) {
			let url = BilibiliOpenApp.getUrl($biliOpenApp);
			if (url) {
				BilibiliUtils.goToUrl(url);
			} else {
				Qmsg.error("获取bili-open-app的Url失败");
				log.error("获取bili-open-app的Url失败");
			}
		} else {
			Qmsg.error("未获取到<bili-open-app>元素");
			log.error("未获取到<bili-open-app>元素");
		}
	},
};
