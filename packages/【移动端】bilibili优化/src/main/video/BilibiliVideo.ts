import { DOMUtils, Qmsg, log, utils } from "@/env";
import { BilibiliVideoHook } from "./BilibiliVideoHook";
import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { BilibiliUrlUtils } from "@/utils/BilibiliUrlUtils";
import { BilibiliData } from "@/data/BlibiliData";
import BilibiliVideoBeautifyCSS from "./BilibiliVideoBeautify.css?raw";

const BilibiliVideo = {
	$data: {
		isAddBeautifyCSS: false,
	},
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
		PopsPanel.execMenu("bili-video-beautify", () => {
			this.beautify();
		});
		PopsPanel.execMenuOnce("bili-video-cover-bottomRecommendVideo", () => {
			this.coverBottomRecommendVideo();
		});
	},
	/**
	 * 美化
	 */
	beautify() {
		log.info("美化");
		/* 先添加美化CSS */
		if (!this.$data.isAddBeautifyCSS) {
			this.$data.isAddBeautifyCSS = true;
			GM_addStyle(BilibiliVideoBeautifyCSS);
		}

		utils
			.waitNode<HTMLDivElement>(
				BilibiliData.className.video + " .bottom-tab .list-view .card-box",
				10000
			)
			.then(($cardBox) => {
				if (!$cardBox) {
					log.error("$cardBox is null");
					return;
				}
				let lockFunc = new utils.LockFunction(() => {
					document
						.querySelectorAll<HTMLDivElement>(
							BilibiliData.className.video +
								" .bottom-tab .list-view .card-box .v-card-toapp"
						)
						.forEach(($vCard) => {
							let $title = $vCard.querySelector<HTMLElement>(".title");
							let $left = $vCard.querySelector<HTMLDivElement>(".count .left");
							let vueObj = BilibiliUtils.getVue($vCard);
							if (
								$title &&
								$left &&
								!$vCard.querySelector(".gm-right-container")
							) {
								let $upInfo = document.createElement("div");
								let upName = vueObj?.info?.owner?.name;
								$upInfo.className = "gm-up-name";
								$upInfo.innerHTML = `
								<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
									<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
									</path>
								</svg>
								<span class="gm-up-name-text">${upName}</span>
								`;
								let $rightContainer = document.createElement("div");
								let $rightBottom = document.createElement("div");
								$rightContainer.className = "gm-right-container";
								$rightBottom.className = "gm-right-bottom";
								DOMUtils.after($title, $rightContainer);
								/* 标题 */
								$rightContainer.appendChild($title);

								/* 底部内容 */
								$rightContainer.appendChild($rightBottom);
								/* UP主 */
								$rightBottom.appendChild($upInfo);
								/* 播放量 弹幕量 */
								$rightBottom.appendChild($left);
							}
						});
				}, 25);
				utils.mutationObserver(
					document.querySelector(BilibiliData.className.video) as any,
					{
						config: {
							subtree: true,
							childList: true,
						},
						callback() {
							setTimeout(() => {
								lockFunc.run();
							}, 0);
						},
					}
				);
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
