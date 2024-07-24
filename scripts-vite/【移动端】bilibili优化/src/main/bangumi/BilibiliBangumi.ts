import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { unsafeWindow } from "ViteGM";
import { Qmsg } from "@/env";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { BilibiliData } from "@/data/BlibiliData";
import { BilibiliBangumiVueProp } from "./BilibiliBangumiVueProp";
import { Vue2Context } from "@whitesev/utils/dist/types/src/Utils";

const BilibiliOpenApp = {
	getUrl($ele: HTMLElement | null | Element) {
		if ($ele == null) {
			return;
		}
		return $ele.getAttribute("universallink");
	},
	/**
	 * 直接跳转Url
	 * @param event
	 */
	jumpToUrl(event: Event) {
		let $click = event.target as HTMLElement;
		let $biliOpenApp = $click.querySelector("bili-open-app");
		if ($biliOpenApp) {
			let url = BilibiliOpenApp.getUrl($biliOpenApp);
			if (url) {
				BilibiliUtils.goToUrl(url);
			} else {
				Qmsg.error("获取bili-open-app的Url失败");
				log.error("获取bili-open-app的Url失败");
			}
		} else {
			Qmsg.error("未获取到<bili-open-app>元素");
			log.error("未获取到<bili-open-app>元素");
		}
	},
};

const BilibiliBangumi = {
	init() {
		BilibiliBangumiVueProp.init();
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
	},
	/**
	 * 阻止唤醒App
	 */
	hookCallApp() {
		let oldSetTimeout = unsafeWindow.setTimeout;
		(unsafeWindow as any).setTimeout = function (...args: any[]): any {
			let callString = args[0].toString();
			if (callString.includes("autoOpenApp")) {
				log.success(["阻止唤醒App", args]);
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
		BilibiliUtils.waitVuePropToSet("#app", [
			{
				msg: "设置参数 $store.state.userStat.pay",
				check(vueObj: Vue2Context) {
					return (
						typeof typeof vueObj?.$store?.state?.userStat?.pay === "number"
					);
				},
				set(vueObj: Vue2Context) {
					log.success("成功设置参数 $store.state.userStat.pay=1");
					vueObj.$store.state.userStat.pay = 1;
				},
			},
			{
				msg: "设置参数 $store.state.mediaInfo.user_status.pay",
				check(vueObj: Vue2Context) {
					return (
						typeof vueObj?.$store?.state?.mediaInfo?.user_status?.pay ===
						"number"
					);
				},
				set(vueObj: Vue2Context) {
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
};

export { BilibiliBangumi };
