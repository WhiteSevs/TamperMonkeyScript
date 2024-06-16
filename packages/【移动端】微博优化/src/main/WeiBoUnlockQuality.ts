import { WeiBoApi } from "@/api/WeiBoApi";
import { log, utils } from "@/env";
import { WeiBoRouter } from "@/router/WeiBoRouter";
import { PopsPanel } from "@/setting/setting";
import { VueUtils } from "@/utils/VueUtils";
import Qmsg from "qmsg";

interface VideoQualityMapInfo {
	label: string;
	sign: number;
	name: string;
	src: string;
}

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

export class WeiBoUnlockQuality {
	$src = {
		"高清 1080P": {
			...VideoQualityMapWithPC["高清 1080P"],
		},
		"超清 2K": {
			...VideoQualityMapWithPC["超清 2K"],
		},
		"超清 2K60": {
			...VideoQualityMapWithPC["超清 2K60"],
		},
		"超清 4K60": {
			...VideoQualityMapWithPC["超清 4K60"],
		},
	};
	$data = {
		newQualityNameList: <string[]>[],
		videoQualityMap: new utils.Dictionary<string, VideoQualityMapInfo[]>(),
	};
	constructor() {
		this.$data.newQualityNameList = [];
		this.$data.newQualityNameList.push(...Object.keys(this.$src));
	}
	/**
	 * 锁定视频清晰度
	 */
	lockVideoQuality() {
		let that = this;
		log.info("锁定视频清晰度");
		VueUtils.waitVuePropToSet(".video-player .mwb-video", [
			{
				msg: "等待获取属性 __vue__.player.controlBar.addChild",
				check(vueObj) {
					return typeof vueObj.player.controlBar.addChild === "function";
				},
				set(vueObj) {
					let oldAddChild = vueObj.player.controlBar.addChild;
					let userSetQuality = PopsPanel.getValue(
						"weibo-common-lockVideoQuality"
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
					let ownAddChild = function (this: any, ...args: any[]) {
						let name = args[0];
						if (name === "qualityButton") {
							let qualityInfo = args[1];
							log.info(["锁定视频清晰度", qualityInfo]);
							qualityInfo["qualityList"].find((item: any) => {
								if (
									!(item.sign === 1 && that.$data.videoQualityMap.has(item.src))
								) {
									return false;
								}
								that.$data.videoQualityMap
									.get(item.src)!
									.forEach((videoQualityMapInfo) => {
										// 先遍历添加的清晰度，判断添加的清晰度是否在列表中，如果不在，则添加进去
										let findIndex = qualityInfo["qualityList"].findIndex(
											(qualityItem: any) => {
												return qualityItem.sign === videoQualityMapInfo.sign;
											}
										);
										if (findIndex === -1) {
											// 不存在，添加新的清晰度
											let newQuality = {
												label: videoQualityMapInfo.label,
												sign: videoQualityMapInfo.sign,
												src: videoQualityMapInfo.src,
											} as any;
											log.success(["添加新的视频清晰度", newQuality]);
											qualityInfo["qualityList"].push(newQuality);
										}
									});
								return true;
							});
							if (userSetQualitySign !== -1) {
								// 不是选择的自动
								let findSign = qualityInfo["qualityList"].find(
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

					if (oldAddChild == ownAddChild) {
						return;
					}
					vueObj.player.controlBar.addChild = ownAddChild;
					log.success("成功覆盖属性 __vue__.player.controlBar.addChild");
				},
			},
		]);
	}
	/**
	 * 解锁更多视频清晰度
	 */
	async unlockVideoHigherQuality() {
		let that = this;
		// 任务队列
		let taskQueue: Function[] = [];

		document
			.querySelectorAll<HTMLDivElement>(
				".weibo-media-wraps:not([data-unlock-quality])"
			)
			.forEach(($ele) => {
				$ele.setAttribute("data-unlock-quality", "true");
				let taskFunc = function () {
					return new Promise<void>((resolve, reject) => {
						VueUtils.waitVuePropToSet($ele, [
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
								close() {
									resolve();
								},
								async set(vueObj) {
									try {
										if (vueObj.item.type !== "video") {
											return;
										}
										let object_id = vueObj.item.object_id;
										let urls = vueObj.item.urls;
										log.success(
											"成功获取属性 __vue__.item.object_id=" + object_id
										);

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
											if (that.$data.newQualityNameList.includes(srcName)) {
												let mapInfo = {
													label: (that.$src as any)[srcName].label,
													name: (that.$src as any)[srcName].name,
													sign: (that.$src as any)[srcName].sign,
													src: src,
												} as VideoQualityMapInfo;

												let ld_mp4_url = urls["mp4_ld_mp4"];
												if (ld_mp4_url) {
													// 添加以流畅url为映射的字典（因为直接播放时是没有该正文的id信息的，只有视频url信息）

													if (!that.$data.videoQualityMap.has(ld_mp4_url)) {
														that.$data.videoQualityMap.set(ld_mp4_url, [
															mapInfo,
														]);
													} else {
														let currentMapInfo =
															that.$data.videoQualityMap.get(ld_mp4_url)!;
														currentMapInfo.push(mapInfo);
														that.$data.videoQualityMap.set(
															ld_mp4_url,
															currentMapInfo
														);
													}
												}
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
									} catch (error) {
										log.error(error);
									} finally {
										resolve();
									}
								},
							},
						]);
					});
				};
				taskQueue.push(taskFunc);
			});
		for (const taskIterator of taskQueue) {
			taskIterator();
			await utils.sleep(100);
		}
	}
}
