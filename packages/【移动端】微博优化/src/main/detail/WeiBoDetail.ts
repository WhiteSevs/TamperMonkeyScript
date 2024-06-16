import { WeiBoApi } from "@/api/WeiBoApi";
import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { VueUtils } from "@/utils/VueUtils";
import Qmsg from "qmsg";

export const VideoQualityMapWithPC = {
	"流畅 360P": {
		label: "流畅",
		sign: 1,
		name: "mp4_ld_mp4",
	},
	"标清 480P": {
		label: "标清",
		sign: 2,
		name: "mp4_hd_mp4",
	},
	"高清 720P": {
		label: "高清",
		sign: 3,
		name: "mp4_720p_mp4",
	},
	"高清 1080P": {
		label: "超清",
		sign: 4,
		name: "mp4_1080p_mp4",
	},
	"超清 2K": {
		label: "2K",
		sign: 5,
		name: "mp4_1440p_mp4",
	},
	"超清 2K60": {
		label: "2K-60",
		sign: 6,
		name: "mp4_1440p_60fps_mp4",
	},
	"超清 4K60": {
		label: "4K-60",
		sign: 7,
		name: "mp4_2160p_60fps_mp4",
	},
} as {
	[key: string]: {
		label: string;
		sign: number;
		name: string;
	};
};

export const WeiBoDetail = {
	$src: {
		"高清 1080P": {
			...VideoQualityMapWithPC["高清 1080P"],
			src: "",
		},
		"超清 2K": {
			...VideoQualityMapWithPC["超清 2K"],
			src: "",
		},
		"超清 2K60": {
			...VideoQualityMapWithPC["超清 2K60"],
			src: "",
		},
		"超清 4K60": {
			...VideoQualityMapWithPC["超清 4K60"],
			src: "",
		},
	},
	init() {
		this.quality();
		DOMUtils.ready(() => {
			PopsPanel.execMenu("weibo-detail-unlockHigherVideoQuality", () => {
				this.unlockHigherVideoQuality();
			});
		});
	},
	/**
	 * 锁定视频清晰度
	 */
	quality() {
		log.info("锁定视频清晰度");
		let that = this;
		VueUtils.waitVuePropToSet(".video-player .mwb-video", [
			{
				msg: "等待获取属性 __vue__.player.controlBar.addChild",
				check(vueObj) {
					return typeof vueObj.player.controlBar.addChild === "function";
				},
				set(vueObj) {
					let oldAddChild = vueObj.player.controlBar.addChild;
					let userSetQuality = PopsPanel.getValue(
						"weibo-detail-quality"
					) as string;
					let userSetQualitySign = -1;
					Object.keys(VideoQualityMapWithPC).find((key) => {
						if (VideoQualityMapWithPC[key].name === userSetQuality) {
							userSetQualitySign = VideoQualityMapWithPC[key].sign;
							return true;
						} else {
							return false;
						}
					});
					let details_myAddChild = function (this: any, ...args: any[]) {
						let name = args[0];
						if (name === "qualityButton") {
							let qualityInfo = args[1];
							let qualityList = qualityInfo["qualityList"];
							log.info(["锁定视频清晰度", qualityInfo]);
							Object.keys(that.$src).forEach((srcKey) => {
								let srcInfo = (that.$src as any)[srcKey];
								let findValue = qualityInfo["qualityList"].find(
									(item: any) => item.sign === srcInfo.sign
								);
								if (!findValue && utils.isNotNull(srcInfo.src)) {
									qualityList.push({
										label: srcInfo.label,
										sign: srcInfo.sign,
										src: srcInfo.src,
									});
								}
							});
							if (userSetQualitySign !== -1) {
								// 不是选择的自动
								let findSign = qualityList.find(
									(item: any) => item["sign"] === userSetQualitySign
								);
								if (findSign) {
									qualityInfo["defaultSign"] = userSetQualitySign;
								} else {
									let signList = qualityInfo["qualityList"]
										.map((item: any) => {
											if (item.sign <= userSetQualitySign) {
												return item.sign;
											}
										})
										.filter((item: any) => item);
									let userSetQualitySignLower = utils.getMaxValue(...signList);
									qualityInfo["defaultSign"] = userSetQualitySignLower;
									log.error(
										"该清晰度不存在，选择比该画质低的清晰度：" +
											userSetQualitySignLower
									);
								}
							} else {
								/* 直接锁定sign值最大的一个 */
								let signList = qualityInfo["qualityList"].map(
									(item: any) => item.sign
								);
								let maxSign = utils.getMaxValue(...signList);
								qualityInfo["defaultSign"] = maxSign;
							}
						}
						return oldAddChild.apply(this, args);
					};

					if (oldAddChild == details_myAddChild) {
						return;
					}
					vueObj.player.controlBar.addChild = details_myAddChild;

					log.success("成功覆盖属性 __vue__.player.controlBar.addChild");
				},
			},
		]);
	},
	/**
	 * 解锁更多视频清晰度
	 */
	unlockHigherVideoQuality() {
		VueUtils.waitVuePropToSet(".weibo-media-wraps:not([data-unlock-quality])", [
			{
				msg: "等待获取属性 __vue__.item.object_id",
				check(vueObj) {
					if (
						typeof vueObj?.item?.type === "string" &&
						vueObj?.item?.type !== "video"
					) {
						return true;
					}
					return typeof vueObj?.item?.object_id === "string";
				},
				async set(vueObj) {
					if (vueObj.item.type !== "video") {
						return;
					}
					vueObj.$el?.setAttribute("data-unlock-quality", "true");
					let object_id = vueObj.item.object_id;
					let urls = vueObj.item.urls;
					log.success("成功获取属性 __vue__.item.object_id=" + object_id);

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
						if (srcName in WeiBoDetail.$src) {
							(WeiBoDetail.$src as any)[srcName].src = src;
						}
						if (srcName in VideoQualityMapWithPC) {
							let newSrcInfo = VideoQualityMapWithPC[srcName];
							if (newSrcInfo.name in urls) {
								// 该清晰度已存在
							} else {
								log.success(["新增清晰度：", newSrcInfo]);
								urls[newSrcInfo.name] = src;
							}
						} else {
							log.error(["视频清晰度映射尚未补充", { srcName, src }]);
						}
					});
				},
			},
		]);
	},
};
