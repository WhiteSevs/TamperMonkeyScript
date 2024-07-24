import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
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

export const BilibiliVideoPlayUrlQN = {
	/**
	 * 仅mp4方式支持
	 */
	"240P 极速": 6,
	"360P 流畅": 16,
	"480P 清晰": 32,
	/**
	 * web端默认值
	 *
	 * B站前端需要登录才能选择，但是直接发送请求可以不登录就拿到720P的取流地址
	 *
	 * 无720P时则为720P60
	 */
	"720P 高清": 64,
	/**
	 * 需要认证登录账号
	 */
	"720P60 高帧率": 74,
	/**
	 * TV端与APP端默认值
	 *
	 * 需要认证登录账号
	 */
	"1080P 高清": 80,
	/**
	 * 大多情况需求认证大会员账号
	 */
	"1080P+ 高码率": 112,
	/**
	 * 大多情况需求认证大会员账号
	 */
	"1080P60 高帧率": 116,
	/**
	 * 需要fnval&128=128且fourk=1
	 *
	 * 大多情况需求认证大会员账号
	 */
	"4K 超清": 120,
	/**
	 * 仅支持dash方式
	 *
	 * 需要fnval&64=64
	 *
	 */
	"HDR 真彩色": 125,
	/**
	 * 仅支持dash方式
	 *
	 * 需要fnval&512=512
	 *
	 * 大多情况需求认证大会员账号
	 */
	杜比视界: 126,
	/**
	 * 仅支持dash方式
	 *
	 * 需要fnval&1024=1024
	 *
	 * 大多情况需求认证大会员账号
	 */
	"8K 超高清": 127,
};

// https://socialsisteryi.github.io/bilibili-API-collect/
export const BilibiliNetworkHook = {
	$flag: {
		is_hook_video_playurl: false,
		is_hook_bangumi_html5: false,
	},
	init() {
		PopsPanel.execMenuOnce("bili-video-xhr-unlockQuality", () => {
			this.hook_video_playurl();
		});
		PopsPanel.execMenuOnce("bili-bangumi-xhr-unlockQuality", () => {
			this.hook_bangumi_html5();
		});
	},
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
				request.url.includes("//api.bilibili.com/x/player/wbi/playurl") ||
				request.url.includes("//api.bilibili.com/x/player/playurl")
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
					BilibiliVideoPlayUrlQN["1080P60 高帧率"].toString()
				);
				// 高质量画质
				playUrl.searchParams.set("high_quality", "1");
				// 固定0
				playUrl.searchParams.set("fnver", "0");
				// 是否允许 4K 视频
				playUrl.searchParams.set("fourk", "1");
				request.url = playUrl.toString();
				request.response = (res) => {
					let data = utils.toJSON(res.responseText);
					log.info("当前解锁的quality值：" + data["data"]["quality"]);
					if (data["data"]["quality"] && data["data"]["support_formats"]) {
						let findValue = data["data"]["support_formats"].find(
							(item: any) => {
								return item["quality"] == data["data"]["quality"];
							}
						);
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
					BilibiliVideoPlayUrlQN["1080P60 高帧率"].toString()
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
