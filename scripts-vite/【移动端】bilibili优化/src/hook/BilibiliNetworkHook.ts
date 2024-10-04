import { log, utils } from "@/env";
import { BilibiliPlayerToast } from "@/player/BilibiliPlayerToast";
import { VideoQualityNameMap } from "@/video-info/VideoDict";
import { UtilsAjaxHookResult } from "@whitesev/utils/dist/types/src/AjaxHookerType";

let _ajaxHooker_ = null as any as UtilsAjaxHookResult;

const XhrHook = {
	get ajaxHooker() {
		if (_ajaxHooker_ == null) {
			log.info("启用ajaxHooker拦截网络");
			_ajaxHooker_ = utils.ajaxHooker();
		}
		return _ajaxHooker_;
	},
};

// https://socialsisteryi.github.io/bilibili-API-collect/
export const BilibiliNetworkHook = {
	$flag: {
		is_hook_video_playurl: false,
		is_hook_bangumi_html5: false,
	},
	init() {},
	/**
	 * 视频播放地址获取
	 *
	 * + //api.bilibili.com/x/player/wbi/playurl
	 * + //api.bilibili.com/x/player/playurl
	 *
	 */
	hook_video_playurl() {
		if (this.$flag.is_hook_video_playurl) {
			return;
		}
		this.$flag.is_hook_video_playurl = true;
		XhrHook.ajaxHooker.hook((request) => {
			if (
				request.url.includes("//api.bilibili.com/x/player/wbi/playurl")
				// || request.url.includes("//api.bilibili.com/x/player/playurl")
			) {
				if (request.url.startsWith("//")) {
					request.url = window.location.protocol + request.url;
				}
				let playUrl = new URL(request.url);
				// 该值用于移动端html5播放，如果删除，虽然通过其它办法可以获取到，但是无法播放，因为源会鉴权referer为www.bilibili.com
				playUrl.searchParams.set("platform", "html5");
				// 视频清晰度选择
				playUrl.searchParams.set(
					"qn",
					VideoQualityNameMap["1080P60 高帧率"].toString()
				);
				// 高质量画质
				playUrl.searchParams.set("high_quality", "1");
				// 固定0
				playUrl.searchParams.set("fnver", "0");
				// 是否允许 4K 视频
				playUrl.searchParams.set("fourk", "1");
				if (playUrl.searchParams.has("__t")) {
					// 自己的主动请求，不做修改
					playUrl.searchParams.delete("__t");
					return;
				}
				request.url = playUrl.toString();
				request.response = (res) => {
					let data = utils.toJSON(res.responseText);
					let unlockQuality: number = data?.["data"]?.["quality"];
					let support_formats: {
						quality: number;
						new_description: string;
						display_desc: string;
					}[] = data?.["data"]?.["support_formats"];
					log.info("当前解锁的quality值：" + unlockQuality);
					if (unlockQuality) {
					}
					if (unlockQuality && support_formats) {
						let findValue = support_formats.find((item: any) => {
							return item["quality"] == unlockQuality;
						});
						if (findValue) {
							let qualityText =
								findValue["new_description"] || findValue["display_desc"];
							log.info("成功解锁画质 " + qualityText);
							BilibiliPlayerToast.toast(`成功解锁画质 ${qualityText}`);
						}
					}
				};
			}
		});
	},
	/**
	 * 番剧播放地址获取
	 *
	 * + //api.bilibili.com/pgc/player/web/playurl/html5
	 *
	 */
	hook_bangumi_html5() {
		if (this.$flag.is_hook_bangumi_html5) {
			return;
		}
		this.$flag.is_hook_bangumi_html5 = true;
		XhrHook.ajaxHooker.hook((request) => {
			if (
				request.url.includes("//api.bilibili.com/pgc/player/web/playurl/html5")
			) {
				if (request.url.startsWith("//")) {
					request.url = window.location.protocol + request.url;
				}
				let playUrl = new URL(request.url);
				// 修改请求地址
				playUrl.pathname = "/pgc/player/web/playurl";
				// 删除bsource参数
				playUrl.searchParams.delete("bsource");

				// 视频清晰度选择
				playUrl.searchParams.set(
					"qn",
					VideoQualityNameMap["1080P60 高帧率"].toString()
				);
				// 视频获取方式选择。这里固定mp4，填入80虽然可以获取1080p+，但是那是m4s格式的，无法播放
				playUrl.searchParams.set("fnval", "1");
				// 固定0
				playUrl.searchParams.set("fnver", "0");
				// 是否允许 4K 视频
				playUrl.searchParams.set("fourk", "1");
				playUrl.searchParams.set("from_client", "BROWSER");
				playUrl.searchParams.set("drm_tech_type", "2");
				request.url = playUrl.toString();
				request.response = (res) => {
					let data = utils.toJSON(res.responseText);
					let result = data["result"];
					log.info("当前解锁的quality值：" + result["quality"]);
					if (result["quality"] && result["support_formats"]) {
						let findValue = result["support_formats"].find((item: any) => {
							return item["quality"] == result["quality"];
						});
						if (findValue) {
							log.info(
								"当前已解锁的画质：" + findValue["new_description"] ||
									findValue["display_desc"]
							);
						}
					}
				};
			}
		});
	},
};
