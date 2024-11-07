import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { CommonUtil } from "@/utils/CommonUtil";

// 屏蔽元素
const BilibiliLiveBlockNode = {
	init() {
		PopsPanel.execMenuOnce("bili-live-block-chatRoom", () => {
			return this.blockChatRoom();
		});
		PopsPanel.execMenuOnce("bili-live-block-brush-prompt", () => {
			return this.blockBrushPrompt();
		});
		PopsPanel.execMenuOnce("bili-live-block-control-panel", () => {
			return this.blockControlPanel();
		});
	},
	/**
	 * 屏蔽聊天室
	 */
	blockChatRoom() {
		log.info("屏蔽聊天室");
		return CommonUtil.addBlockCSS("#chat-items");
	},
	/**
	 * 屏蔽xxx进入直播间
	 */
	blockBrushPrompt() {
		log.info("屏蔽xxx进入直播间");
		return CommonUtil.addBlockCSS("#brush-prompt");
	},
	/**
	 * 屏蔽底部工具栏
	 */
	blockControlPanel() {
		log.info("屏蔽底部工具栏");
		return CommonUtil.addBlockCSS(".control-panel");
	},
};

export const BilibiliLive = {
	init() {
		BilibiliLiveBlockNode.init();
		PopsPanel.execMenuOnce("bili-live-prevent-openAppBtn", () => {
			this.preventOpenAppBtn();
		});
	},
	/**
	 * 阻止触发打开App
	 */
	preventOpenAppBtn() {
		utils.waitNode("body").then(($body) => {
			log.info("阻止.open-app-btn元素触发点击事件");
			DOMUtils.on<PointerEvent | MouseEvent>(
				$body,
				"click",
				".open-app-btn",
				function (event) {
					utils.preventEvent(event);
				},
				{
					capture: true,
				}
			);
			DOMUtils.on<PointerEvent | MouseEvent>(
				$body,
				"click",
				"#web-player-controller-wrap-el",
				function (event) {
					utils.preventEvent(event);
				},
				{
					capture: true,
				}
			);
		});
	},
};
