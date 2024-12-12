import { PopsPanel } from "@/setting/setting";
import {
	DouYinVideoFilterBase,
	type DouYinVideoAwemeInfo,
} from "../video/DouYinVideoFilterBase";
import { DOMUtils, log, utils } from "@/env";
import { DouYinNetWorkHook } from "@/hook/DouYinNetWorkHook";
import { CommonUtil } from "@/utils/CommonUtil";

export const DouYinChannelVideoFilter = {
	$flag: {
		isWatchFeed: false,
	},
	__videoFilter: null as any as DouYinVideoFilterBase,
	get videoFilter() {
		if (this.__videoFilter == null) {
			const KEY = "douyin-video-channel-shield-rule";
			this.__videoFilter = new DouYinVideoFilterBase({
				key: KEY,
			});
		}
		return this.__videoFilter;
	},
	init() {
		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("shieldVideo-exec-network-channel", () => {
				log.info(`执行视频过滤器 - channel`);
				DouYinNetWorkHook.ajaxHooker.hook((request) => {
					let url = CommonUtil.fixUrl(request.url);
					let urlObj = new URL(url);
					if (urlObj.pathname.startsWith("/aweme/v1/web/channel/feed")) {
						log.info(`拦截器 ==> ` + url);
						request.response = (response) => {
							let data = utils.toJSON(response.responseText);
							let aweme_list = data["aweme_list"];
							if (Array.isArray(aweme_list)) {
								for (let index = 0; index < aweme_list.length; index++) {
									let awemeInfo = aweme_list[index];
									if (typeof awemeInfo === "object" && awemeInfo != null) {
										let flag =
											this.videoFilter.checkAwemeInfoIsFilter(awemeInfo);
										if (flag) {
											this.videoFilter.removeAweme(aweme_list, index--);
										}
									}
								}
								response.responseText = JSON.stringify(data);
							}
						};
					}
				});
			});
		});
	},
};
