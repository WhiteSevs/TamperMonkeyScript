import { unsafeWindow } from "ViteGM";
import { DOMUtils, addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import MiniJiaoYuShieldCSS from "./shield.css?raw";

const BaiduMiniJiaoYu = {
	init() {
		addStyle(MiniJiaoYuShieldCSS);
		log.info("插入CSS规则");
		PopsPanel.execMenu("mini_baidu_jiaoyu_shield_bottom_pull_down_menu", () => {
			this.shieldBottomPullDownMenu();
		});
	},
	/**
	 * 屏蔽底部下拉菜单
	 */
	shieldBottomPullDownMenu() {
		log.info("屏蔽底部下拉菜单");
		let hideCSS = `
        #page_loft{
            display: none !important;
        }`;
		addStyle(hideCSS);
		/* 同源iframe，注入CSS */
		if (unsafeWindow.top === unsafeWindow.self) {
			DOMUtils.ready(function () {
				utils
					.waitNode<HTMLIFrameElement>("iframe.swan-web-iframe")
					.then((iframeElement) => {
						let _document = (iframeElement as HTMLIFrameElement)
							.contentDocument as Document;
						let _window = (iframeElement as HTMLIFrameElement)
							.contentWindow as Window & typeof globalThis;
						let _globalThis = _window;
						let _self = _window;
						let iframeDOMUtils = DOMUtils.createDOMUtils({
							document: _document,
							window: _window,
							globalThis: _globalThis,
							self: _self,
						});
						let iframeUtils = utils.createUtils({
							document: _document,
							window: _window,
							globalThis: _globalThis,
							self: _self,
							top: unsafeWindow.top as Window,
						});
						iframeDOMUtils.ready(() => {
							log.info("iframe => 注入CSS规则");
							iframeUtils.addStyle(hideCSS);
						});
					});
			});
		}
	},
};

export { BaiduMiniJiaoYu };
