import { BilibiliData } from "@/data/BlibiliData";
import { DOMUtils, Qmsg, log, utils } from "@/env";
import { BilibiliHook } from "@/hook/BilibiliHook";
import { PopsPanel } from "@/setting/setting";
import { BilibiliUtils } from "@/utils/BilibiliUtils";

export const BilibiliOpus = {
	init() {
		PopsPanel.execMenuOnce("bili-opus-cover-topicJump", () => {
			this.coverTopicJump();
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
				let vueObj = BilibiliUtils.getVue($click);
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
};
