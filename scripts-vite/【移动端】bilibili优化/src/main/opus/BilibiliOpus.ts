import { BilibiliData } from "@/data/BlibiliData";
import { DOMUtils, Qmsg, addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliUrlUtils } from "@/utils/BilibiliUrlUtils";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { VueUtils } from "@/utils/VueUtils";

export const BilibiliOpus = {
	init() {
		PopsPanel.execMenuOnce("bili-opus-cover-topicJump", () => {
			this.coverTopicJump();
		});
		PopsPanel.execMenuOnce(
			"bili-opus-automaticallyExpandToReadFullText",
			() => {
				return this.automaticallyExpandToReadFullText();
			}
		);
		PopsPanel.execMenuOnce("bili-opus-cover-header", () => {
			this.coverHeaderJump();
		});
	},
	/**
	 * 覆盖话题跳转点击事件
	 */
	coverTopicJump() {
		log.info("覆盖话题跳转点击事件");
		DOMUtils.on<PointerEvent | MouseEvent>(
			document,
			"click",
			BilibiliData.className.opus + " .launch-app-btn.opus-module-topic",
			function (event) {
				let $click = event.target as HTMLDivElement;
				let vueObj = VueUtils.getVue($click);
				if (!vueObj) {
					Qmsg.error("获取话题的__vue__失败");
					return;
				}
				let data = vueObj?.$props?.data;
				let jump_url = data?.jump_url;
				if (utils.isNull(jump_url)) {
					Qmsg.error("获取话题的jump_url失败");
					return;
				}
				log.info(["话题的跳转信息: ", data]);
				BilibiliUtils.goToUrl(jump_url);
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 自动展开阅读全文
	 */
	automaticallyExpandToReadFullText() {
		log.info("自动展开阅读全文");
		return [
			BilibiliUtils.addBlockCSS(
				BilibiliData.className.opus + " .opus-read-more"
			),
			addStyle(/*css*/ `
			${BilibiliData.className.opus} .opus-module-content{
				overflow: unset !important;
				max-height: unset !important;
			}
			`),
		];
	},
	/**
	 * 覆盖header点击事件
	 */
	coverHeaderJump() {
		log.info("覆盖header点击事件");
		DOMUtils.on<PointerEvent | MouseEvent>(
			document,
			"click",
			BilibiliData.className.opus + " .opus-module-author",
			function (event) {
				utils.preventEvent(event);
				let $click = event.target as HTMLDivElement;
				let vueObj = VueUtils.getVue($click);
				if (!vueObj) {
					Qmsg.error("获取vue属性失败");
					return;
				}
				let mid = vueObj?.data?.mid;
				if (!mid) {
					Qmsg.error("获取mid失败");
					return;
				}
				BilibiliUtils.goToUrl(BilibiliUrlUtils.getUserSpaceUrl(mid));
			},
			{
				capture: true,
			}
		);
	},
};
