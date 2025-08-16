import { log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";
import { BaiduSearchVideoBlock } from "./SearchVideoBlock";

export const BaiduSearchVideo = {
	init() {
		BaiduSearchVideoBlock.init();
		Panel.execMenuOnce("baidu-search-video-autoJumpToOriginUrl", () => {
			this.autoJumpToOriginUrl();
		});
	},
	/**
	 * 自动跳转至原网页
	 */
	autoJumpToOriginUrl() {
		utils.waitNode<HTMLAnchorElement>(".sfc-video-page-info-showurl", 10000).then(($showUrl) => {
			if (!$showUrl) {
				Qmsg.error("未找到.sfc-video-page-info-showurl元素");
				return;
			}
			let url = $showUrl.getAttribute("data-url") || $showUrl.href;
			if (utils.isNull(url)) {
				Qmsg.error("获取原网页Url失败");
				return;
			}
			window.location.href = url;
		});
	},
};
