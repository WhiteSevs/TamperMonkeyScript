import { DOMUtils, Qmsg, log, utils } from "@/env";
import { BilibiliVideoHook } from "./BilibiliVideoHook";
import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { BilibiliUrlUtils } from "@/utils/BilibiliUrlUtils";
import { BilibiliData } from "@/data/BlibiliData";

const BilibiliVideo = {
	init() {
		/* 执行hook */
		BilibiliVideoHook.init();

		PopsPanel.execMenu("bili-video-setVideoPlayer", () => {
			this.setVideoPlayer();
		});
		PopsPanel.execMenuOnce("bili-video-repairVideoBottomAreaHeight", () => {
			this.repairVideoBottomAreaHeight();
		});
		PopsPanel.execMenuOnce(
			"bili-video-autoClickContinueToWatchOnTheWebpage",
			() => {
				this.autoClickContinueToWatchOnTheWebpage();
			}
		);
		PopsPanel.execMenuOnce("bili-video-cover-bottomRecommendVideo", () => {
			this.coverBottomRecommendVideo();
		});
	},
	/**
	 * 修改视频播放器设置参数
	 *
	 * + __vue__.playBtnNoOpenApp: `true`
	 * + __vue__.playBtnOpenApp: `false`
	 * + __vue__.coverOpenApp: `false`
	 */
	setVideoPlayer() {
		utils
			.waitNode<HTMLDivElement>(
				BilibiliData.className.video + " .m-video-player"
			)
			.then(($app: any) => {
				let check = function (__vue__: any) {
					return (
						__vue__ != null &&
						typeof __vue__.playBtnNoOpenApp === "boolean" &&
						typeof __vue__.playBtnOpenApp === "boolean" &&
						typeof __vue__.coverOpenApp === "boolean"
					);
				};
				utils
					.waitVueByInterval(
						() => {
							return document.querySelector(".m-video-player") as HTMLElement;
						},
						check,
						250,
						10000
					)
					.then(() => {
						$app = document.querySelector(".m-video-player") as any;
						if (check($app.__vue__)) {
							log.success(
								"成功设置参数 playBtnNoOpenApp、playBtnOpenApp、coverOpenApp"
							);
							$app.__vue__.playBtnNoOpenApp = true;
							$app.__vue__.playBtnOpenApp = false;
							$app.__vue__.coverOpenApp = false;
						}
					});
			});
	},
	/**
	 * 修复视频底部区域高度
	 */
	repairVideoBottomAreaHeight() {
		log.info("修复视频底部区域高度");
		GM_addStyle(`
		${BilibiliData.className.video} {
			/* 修复视频区域底部的高度 */
			.natural-module .fixed-module-margin {
				margin-top: 55.13333vmin;
			}
			/* 点击播放视频后的 */
			.m-video-new:has(> div > .m-video-player) {
				margin-top: 75vmin;
			}
			/* 未播放视频状态下的 */
			.m-video-new:has(> div[style*="display:none"] > .m-video-player) {
				margin-top: unset;
			}
		}
		html.tiny-app{
			${BilibiliData.className.video}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`);
	},
	/**
	 * 自动点击【继续在网页观看】
	 */
	autoClickContinueToWatchOnTheWebpage() {
		DOMUtils.on<MouseEvent | PointerEvent>(
			document,
			"click",
			BilibiliData.className.video + " .main-info .btn",
			function () {
				log.info("触发点击【立即播放】，自动等待弹窗出现");
				utils.waitNode<HTMLDivElement>(".to-see", 10000).then(($toSee) => {
					if (!$toSee) {
						log.error("弹窗按钮【继续在网页观看】10秒内未出现，取消等待");
						return;
					}
					log.success("自动点击 继续在网页观看");
					$toSee.click();
				});
			}
		);
	},
	/**
	 * 覆盖视频标题区域的点击事件
	 */
	coverBottomRecommendVideo() {
		log.info("覆盖 相关视频 点击事件");
		DOMUtils.on<MouseEvent | PointerEvent>(
			document,
			"click",
			BilibiliData.className.video + " .list-view .card-box .launch-app-btn",
			function (event) {
				let $click = event.target as HTMLDivElement;
				let vueObj = BilibiliUtils.getVue($click);
				if (!vueObj) {
					Qmsg.error("获取相关视频的__vue__失败");
					return;
				}
				let bvid = vueObj.bvid;
				if (utils.isNull(bvid)) {
					if (
						vueObj.$children &&
						vueObj.$children[0] &&
						utils.isNotNull(vueObj.$children[0].bvid)
					) {
						bvid = vueObj.$children[0].bvid;
					} else {
						Qmsg.error("获取相关视频的bvid失败");
						return;
					}
				}
				log.info("相关视频的bvid: " + bvid);
				BilibiliUtils.goToUrl(BilibiliUrlUtils.getVideoUrl(bvid));
				utils.preventEvent(event);
			},
			{
				capture: true,
			}
		);
	},
};

export { BilibiliVideo };
