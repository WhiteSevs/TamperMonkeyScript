import { unsafeWindow } from "ViteGM";
import { DOMUtils, addStyle, log } from "@/env";
import YiYanShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/setting/setting";

const BaiduYiYan = {
	init() {
		addStyle(YiYanShieldCSS);
		log.info("插入CSS规则");
		PopsPanel.execMenu("baidu_yiyan_remove_ai_mask", () => {
			BaiduYiYan.blockWaterMark();
		});
	},
	/**
	 * 通过处理attachShadow和appendChild原型来去除水印
	 * 屏蔽 AI生成内容仅供参考
	 * 屏蔽 AI作图
	 */
	blockWaterMark() {
		log.info("hook: Element.attachShadow");
		let oldShadow = unsafeWindow.Element.prototype.attachShadow;
		unsafeWindow.Element.prototype.attachShadow = function (...args: any) {
			const shadowRoot = oldShadow.call(this, args);
			(this as any)._shadowRoot = shadowRoot;
			shadowRoot.appendChild(
				DOMUtils.createElement(
					"style",
					"div[id^='mask']{display: none !important;}"
				)
			);
			return shadowRoot;
		};
		log.success("hook: Element.appendChild");
		let oldAppendChild = unsafeWindow.Element.prototype.appendChild;
		unsafeWindow.Element.prototype.appendChild = function <T extends Node>(
			element: T
		): T {
			if ((element as any).localName === "img") {
				setTimeout(() => {
					document
						.querySelectorAll<HTMLImageElement>("img")
						.forEach((imageElement) => {
							if (imageElement.src.endsWith("style/wm_ai")) {
								imageElement.src = imageElement.src.replace(
									/style\/wm_ai$/gi,
									""
								);
							}
						});
				}, 150);
			}
			return oldAppendChild.call(this, element) as T;
		};
	},
};

export { BaiduYiYan };
