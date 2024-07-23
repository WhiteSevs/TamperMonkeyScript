import { ShortCut, type ShortCutOption } from "@/utils/ShortCut";
import { Greasyfork } from "./Greasyfork";
import { log } from "@/env";

export const GreasyforkShortCut = {
	shortCut: new ShortCut(),
	shortOption: {
		"gf-quickReply": {
			target: () => {
				let $commentText =
					document.querySelector<HTMLButtonElement>("#comment_text");
				let $replyBtn = document.querySelector<HTMLButtonElement>(
					'input[name="commit"][type="submit"]'
				);
				if (!$commentText) {
					log.error("页面不存在输入框");
					return;
				} else if (!$replyBtn) {
					log.error("页面不存在【发表回复】按钮");
					return;
				}
				return $commentText;
			},
			callback() {
				let $replyBtn = document.querySelector<HTMLButtonElement>(
					'input[name="commit"][type="submit"]'
				);
				if (!$replyBtn) {
					log.error("页面不存在【发表回复】按钮");
					return;
				}
				$replyBtn.click();
			},
		},
	} as ShortCutOption,
	init() {
		this.shortCut.initGlobalKeyboardListener(this.shortOption);
	},
};
