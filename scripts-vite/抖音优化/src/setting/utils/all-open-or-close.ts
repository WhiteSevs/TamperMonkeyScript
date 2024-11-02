import { DOMUtils, utils } from "@/env";
import type { PopsPanelDeepMenuDetails } from "@whitesev/pops/dist/types/src/components/panel/deepMenuType";

const afterEnterDeepMenuCallBack: PopsPanelDeepMenuDetails["afterEnterDeepMenuCallBack"] =
	(formConfig, container) => {
		let $oneClickOpen =
			container.sectionBodyContainer.querySelector<HTMLAnchorElement>(
				".keyboard-oneClickOpen"
			);
		let $oneClickClose =
			container.sectionBodyContainer.querySelector<HTMLAnchorElement>(
				".keyboard-oneClickClose"
			);
		let clickCallBack = (isOpen: boolean) => {
			container.sectionBodyContainer
				?.querySelectorAll<HTMLElement>(".pops-panel-switch")
				.forEach(($ele) => {
					let $input = $ele.querySelector<HTMLInputElement>(
						".pops-panel-switch__input"
					)!;
					let $checkbox = $ele.querySelector<HTMLInputElement>(
						".pops-panel-switch__core"
					)!;
					if (isOpen) {
						if (!$input.checked) {
							$checkbox.click();
						}
					} else {
						if ($input.checked) {
							$checkbox.click();
						}
					}
				});
		};
		DOMUtils.on($oneClickOpen, "click", (event) => {
			utils.preventEvent(event);
			clickCallBack(true);
		});
		DOMUtils.on($oneClickClose, "click", (event) => {
			utils.preventEvent(event);
			clickCallBack(false);
		});
	};
export const AutoOpenOrClose = {
	text: /*html*/ `
        <a href="javascript:;" class="keyboard-oneClickOpen">一键开启</a>
        <br>
        <a href="javascript:;" class="keyboard-oneClickClose">一键关闭</a>
    `,
	afterEnterDeepMenuCallBack: afterEnterDeepMenuCallBack,
};
