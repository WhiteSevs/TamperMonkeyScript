import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";

const BilibiliLive = {
	init() {
		PopsPanel.execMenuOnce("bili-live-prevent-openAppBtn", () => {
			this.preventOpenAppBtn();
		});
		PopsPanel.execMenuOnce("bili-live-block-chatRoom", () => {
			this.blockChatRoom();
		});
		PopsPanel.execMenuOnce("bili-live-block-brush-prompt", () => {
			this.blockBrushPrompt();
		});
		PopsPanel.execMenuOnce("bili-live-block-control-panel", () => {
			this.blockControlPanel();
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
	/**
	 * 屏蔽聊天室
	 */
	blockChatRoom() {
		log.info("屏蔽聊天室");
		GM_addStyle(`
        #chat-items{
            display: none !important;
        }
        `);
	},
	/**
	 * 屏蔽xxx进入直播间
	 */
	blockBrushPrompt() {
		log.info("屏蔽xxx进入直播间");
		GM_addStyle(`
        #brush-prompt{
            display: none !important;
        }
        `);
	},
	/**
	 * 屏蔽底部工具栏
	 */
	blockControlPanel() {
		log.info("屏蔽底部工具栏");
		GM_addStyle(`
        .control-panel{
            display: none !important;
        }`);
	},
};

export { BilibiliLive };
