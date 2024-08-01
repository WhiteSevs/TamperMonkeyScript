import { PopsPanel } from "@/setting/setting";
import beautifyContentCSS from "./beautifyContent.css?raw";
import { addStyle, log } from "@/env";

export const GreasyforkConversations = {
	init() {
		PopsPanel.execMenuOnce("conversations-beautifyDialogBox", () => {
			return this.beautifyDialogBox();
		});
	},
	/**
	 * 美化对话框
	 */
	beautifyDialogBox() {
		log.info("美化对话框");
		let result = [];
		result.push(addStyle(beautifyContentCSS));
	},
};
