import { WeiBoApi } from "@/api/WeiBoApi";
import { log } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { VueUtils } from "@/utils/VueUtils";
import Qmsg from "qmsg";

export const WeiBoDetail = {
	init() {
		this.quality();
	},
	/**
	 * 锁定视频清晰度
	 */
	quality() {
		log.info("锁定视频清晰度");

		VueUtils.waitVuePropToSet(".weibo-media-wraps", [
			{
				msg: "等待获取属性 __vue__.item.object_id",
				check(vueObj) {
					return typeof vueObj?.item?.object_id === "string";
				},
				async set(vueObj) {
					let unlockVideo1080p = PopsPanel.getValue(
						"weibo-video-unlockVideo1080p"
					);
					let urlsMap = {
						"标清 480P": "mp4_hd_mp4",
						"流畅 360P": "mp4_ld_mp4",
						"高清 720P": "mp4_720p_mp4",
						"高清 1080P": "mp4_1080p_mp4",
					};
					const object_id = vueObj.item.object_id;
					log.success("成功获取属性 __vue__.item.object_id=" + object_id);

					if (unlockVideo1080p) {
						let componentInfo = await WeiBoApi.component(object_id);
						if (!componentInfo) {
							return;
						}
						log.info(["获取组件信息成功", componentInfo]);
						if (!componentInfo.urls) {
							log.error("获取组件信息urls失败");
							Qmsg.error("获取组件信息urls失败");
							return;
						}
						if (typeof componentInfo.urls !== "object") {
							log.error("组件信息urls不是一个对象");
							Qmsg.error("组件信息urls不是一个对象");
							return;
						}
						if (!Object.keys(componentInfo.urls).length) {
							log.error("组件信息urls为空");
							Qmsg.error("组件信息urls为空");
							return;
						}
						Object.keys(componentInfo.urls).forEach((srcName) => {
							let src = componentInfo.urls[srcName];
							if (srcName in urlsMap) {
								let newSrcName = (urlsMap as any)[srcName];
								if (newSrcName in vueObj.item.urls) {
									// 该清晰度已存在
								} else {
									log.success("新增清晰度：" + newSrcName);
									vueObj.item.urls[newSrcName] = src;
								}
							} else {
								log.error(["视频清晰度映射尚未补充", { srcName, src }]);
							}
						});
					}
					let userSetQuality = PopsPanel.getValue(
						"weibo-video-quality"
					) as string;
					if (
						userSetQuality &&
						Object.keys(vueObj.item.urls).includes(userSetQuality)
					) {
						let userSetQualitySrc = vueObj.item.urls[userSetQuality];
						vueObj.item.media_info.stream_url = userSetQualitySrc;
						Object.keys(vueObj.item.urls).forEach((keyName) => {
							if (keyName === userSetQuality) {
								return;
							}
							delete vueObj.item.urls[keyName];
						});
						log.success(
							"成功设置属性 __vue__.item.media_info.stream_url=" +
								userSetQualitySrc
						);
					}
				},
			},
		]);
	},
};
