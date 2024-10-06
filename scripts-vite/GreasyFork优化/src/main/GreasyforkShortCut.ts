import { ShortCut, type ShortCutOption } from "@/utils/ShortCut";
import { Greasyfork } from "./Greasyfork";
import { log } from "@/env";

export const GreasyforkShortCut = {
	shortCut: new ShortCut(),
	shortOption: {
		"gf-quickReply": {
			target: () => {
				let $commentText =
					document.querySelector<HTMLButtonElement>("form textarea");
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
				log.success("监听快捷键：" + "gf-quickReply");
				return $commentText;
			},
			callback() {
				if (document.activeElement) {
					let $parentForm = document.activeElement.closest("form");
					if (!$parentForm) {
						log.error("当前activeElement不在表单内，无法触发快捷键");
						return;
					}
					let $replyBtnList = $parentForm.querySelectorAll<HTMLButtonElement>(
						'input[name="commit"][type="submit"]'
					);
					if (!$replyBtnList.length) {
						log.error("表单内不存在【发表回复】按钮");
						return;
					}
					if ($replyBtnList.length > 1) {
						log.warn("表单内存在多个【发表回复】按钮，只触发第一个");
					}
					$replyBtnList[0].click();
				} else {
					log.error("当前页面没有激活元素，无法触发快捷键");
				}
			},
		},
	} as ShortCutOption,
	init() {
		this.shortCut.initGlobalKeyboardListener(this.shortOption);
	},
};
