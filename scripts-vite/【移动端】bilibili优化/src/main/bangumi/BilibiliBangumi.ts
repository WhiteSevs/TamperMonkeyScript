import { addStyle, DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { unsafeWindow } from "ViteGM";
import { BilibiliData } from "@/data/BlibiliData";
import { Vue2Instance } from "@whitesev/utils/dist/types/src/types/Vue2";
import { VueUtils } from "@/utils/VueUtils";
import artPlayerCSS from "./artplayer/index.css?raw";
import artPlayerCommonCSS from "@/player/player.css?raw";
import type Artplayer from "artplayer";
import { BilibiliOpenApp } from "./BilibiliOpenApp";
import { BlibiliBangumiPlayer } from "./BilibiliBangumiPlayer";
import { CommonUtils } from "@/utils/CommonUtils";

const BilibiliBangumi = {
	$data: {
		art: null as any as Artplayer,
	},
	init() {
		PopsPanel.execMenuOnce("bili-bangumi-initialScale", () => {
			CommonUtils.initialScale();
		});
		PopsPanel.execMenuOnce("bili-bangumi-hook-callApp", () => {
			this.hookCallApp();
		});
		PopsPanel.execMenu("bili-bangumi-cover-clicl-event-chooseEp", () => {
			this.setChooseEpClickEvent();
		});
		PopsPanel.execMenu("bili-bangumi-cover-clicl-event-other", () => {
			this.setClickOtherVideo();
		});
		PopsPanel.execMenu("bili-bangumi-cover-clicl-event-recommend", () => {
			this.setRecommendClickEvent();
		});
		this.coverVideoPlayer();
	},
	/**
	 * 阻止唤醒App
	 */
	hookCallApp() {
		let oldSetTimeout = unsafeWindow.setTimeout;
		(unsafeWindow as any).setTimeout = function (...args: any[]): any {
			let callString = args[0].toString();
			if (callString.includes("autoOpenApp")) {
				log.success("阻止唤醒App", args);
				return;
			}
			// @ts-ignore
			return oldSetTimeout.apply(this, args);
		};
	},
	/**
	 * 设置已购买番剧(会员？)
	 *
	 * + $store.state.userStat.pay 1
	 * + $store.state.mediaInfo.user_status.pay 1
	 */
	setPay() {
		VueUtils.waitVuePropToSet("#app", [
			{
				msg: "设置参数 $store.state.userStat.pay",
				check(vueIns: Vue2Instance) {
					return (
						typeof typeof vueIns?.$store?.state?.userStat?.pay === "number"
					);
				},
				set(vueIns: Vue2Instance) {
					log.success("成功设置参数 $store.state.userStat.pay=1");
					vueIns.$store.state.userStat.pay = 1;
				},
			},
			{
				msg: "设置参数 $store.state.mediaInfo.user_status.pay",
				check(vueObj: Vue2Instance) {
					return (
						typeof vueObj?.$store?.state?.mediaInfo?.user_status?.pay ===
						"number"
					);
				},
				set(vueObj: Vue2Instance) {
					log.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1");
					vueObj.$store.state.mediaInfo.user_status.pay = 1;
				},
			},
		]);
	},
	/**
	 * 覆盖【选集】的点击事件
	 */
	setChooseEpClickEvent() {
		utils
			.waitNode<HTMLUListElement>(
				BilibiliData.className.bangumi +
					" .ep-list-pre-wrapper ul.ep-list-pre-container"
			)
			.then(($preContainer) => {
				log.info("覆盖【选集】的点击事件");
				DOMUtils.on<PointerEvent | MouseEvent>(
					$preContainer,
					"click",
					"li.episode-item",
					function (event) {
						utils.preventEvent(event);
						BilibiliOpenApp.jumpToUrl(event);
					},
					{
						capture: true,
					}
				);
			});
		utils
			.waitNode<HTMLUListElement>(
				BilibiliData.className.bangumi +
					" .ep-list-pre-wrapper ul.season-list-wrapper"
			)
			.then(($listWapper) => {
				log.info("覆盖【xx季】的点击事件");
				DOMUtils.on<PointerEvent | MouseEvent>(
					$listWapper,
					"click",
					"li",
					function (event) {
						utils.preventEvent(event);
						BilibiliOpenApp.jumpToUrl(event);
					},
					{
						capture: true,
					}
				);
			});
		utils
			.waitNode<HTMLDivElement>(
				BilibiliData.className.bangumi + " .ep-list-pre-header"
			)
			.then(($preHeader) => {
				log.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件");
				DOMUtils.on<PointerEvent | MouseEvent>(
					$preHeader,
					"click",
					function (event) {
						utils.preventEvent(event);
					},
					{
						capture: true,
					}
				);
			});
	},
	/**
	 * 覆盖【PV&其他】、【预告】、【主题曲】的点击事件
	 */
	setClickOtherVideo() {
		utils
			.waitNode<HTMLUListElement>(
				BilibiliData.className.bangumi +
					" .section-preview-wrapper ul.ep-list-pre-container"
			)
			.then(($preContainer) => {
				log.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件");
				DOMUtils.on<PointerEvent | MouseEvent>(
					$preContainer,
					"click",
					"li.section-preview-item",
					function (event) {
						utils.preventEvent(event);
						BilibiliOpenApp.jumpToUrl(event);
					},
					{
						capture: true,
					}
				);
			});
		utils
			.waitNode<HTMLDivElement>(
				BilibiliData.className.bangumi + " .section-preview-header"
			)
			.then(($previewHeader) => {
				log.info(
					"覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"
				);
				DOMUtils.on<PointerEvent | MouseEvent>(
					$previewHeader,
					"click",
					function (event) {
						utils.preventEvent(event);
					},
					{
						capture: true,
					}
				);
			});
	},
	/**
	 * 覆盖【更多推荐】番剧的点击事件
	 */
	setRecommendClickEvent() {
		utils
			.waitNode<HTMLUListElement>(
				BilibiliData.className.bangumi + " .recom-wrapper ul.recom-list"
			)
			.then(($recomList) => {
				log.info("覆盖【更多推荐】番剧的点击事件");
				DOMUtils.on<PointerEvent | MouseEvent>(
					$recomList,
					"click",
					"li.recom-item-v2",
					function (event) {
						utils.preventEvent(event);
						BilibiliOpenApp.jumpToUrl(event);
					},
					{
						capture: true,
					}
				);
			});
	},
	/**
	 * 覆盖视频播放器
	 */
	coverVideoPlayer() {
		if (document.querySelector("#artplayer")) {
			log.warn("已存在播放器，更新播放信息");
		} else {
			addStyle(/*css*/ `
			.player-wrapper,
			.open-app-bar{
				display: none !important;
			}
			
			${artPlayerCommonCSS}
			
			${artPlayerCSS}
			
			`);
			let controlsPadding = PopsPanel.getValue(
				"bili-bangumi-artplayer-controlsPadding-left-right",
				0
			);
			if (controlsPadding != 0) {
				addStyle(/*css*/ `
				@media (orientation: landscape) {
					.art-video-player .art-layers .art-layer-top-wrap,
					/* 底部 */
					.art-video-player .art-bottom{
						padding-left: ${controlsPadding}px !important;
						padding-right: ${controlsPadding}px !important;
					}
					
					/* 锁定图标 */
					.art-video-player  .art-layer-lock{
						--art-lock-left-size: ${controlsPadding}px;
					}
				}
				`);
			}
		}
		BlibiliBangumiPlayer.updateArtPlayerVideoInfo();
	},
};

export { BilibiliBangumi };
