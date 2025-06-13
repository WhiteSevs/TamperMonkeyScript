import { DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import { VueUtils } from "@components/utils/VueUtils";
import { TiebaUrlHandler } from "../handler/TiebaUrlHandler";

export const TiebaTopicTemplate = {
	init() {
		Panel.execMenu("baidu_tieba_topic_redirect_jump", () => {
			this.redirectJump();
		});
	},
	/**
	 * 重定向跳转
	 */
	redirectJump() {
		log.info("话题热榜-阻止默认跳转");
		DOMUtils.on(
			document,
			"click",
			".topic-share-item",
			function (event) {
				/* 设置正确跳转帖子 */
				utils.preventEvent(event);
				window?.stop();
				let clickNode = event.target;
				let pid = VueUtils.getVue(clickNode)?.item.tid;
				let url = TiebaUrlHandler.getPost(pid);
				log.success(`跳转至: ${url}`);
				if (Panel.getValue("baidu_tieba_topic_openANewTab")) {
					window.open(url, "_blank");
				} else {
					window.open(url);
				}
				return false;
			},
			{
				capture: true,
			}
		);
	},
};
