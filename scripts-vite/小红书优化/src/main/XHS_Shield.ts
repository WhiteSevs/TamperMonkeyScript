import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";
import XHSShieldCSS from "./shield.css?raw";
import { DOMUtils, log, utils } from "@/env";

const XHS_Shield = {
	init() {
		PopsPanel.execMenu("pc-xhs-shieldAd", () => {
			GM_addStyle(XHSShieldCSS);
		});
		PopsPanel.execMenu("pc-xhs-shield-select-text-search-position", () => {
			this.shieldSelectTextVisibleSearchPosition();
		});
		PopsPanel.execMenu("pc-xhs-shield-topToolbar", () => {
			this.shieldTopToolbar();
		});
		DOMUtils.ready(() => {
			PopsPanel.execMenu("pc-xhs-shield-login-dialog", () => {
				this.shieldLoginContainer();
			});
		});
	},
	/**
	 * 屏蔽登录弹窗显示
	 */
	shieldLoginContainer() {
		log.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现");
		GM_addStyle(`
        /* 登录弹窗 */
        .login-container{
            display: none !important;
        }
        `);
		/* 观察内容加载并关闭弹窗 */
		utils.mutationObserver(document.body, {
			config: {
				subtree: true,
				childList: true,
			},
			callback: () => {
				let $close = document.querySelector(
					".login-container .icon-btn-wrapper"
				) as HTMLDivElement;
				if ($close) {
					$close.click();
					log.success("登录弹窗出现，关闭");
				}
			},
		});
	},
	/**
	 * 屏蔽选择文字弹出的搜索提示
	 */
	shieldSelectTextVisibleSearchPosition() {
		log.info("屏蔽选择文字弹出的搜索提示");
		GM_addStyle(`
        .search-position{
            display: none !important;
        }
        `);
	},
	/**
	 * 【屏蔽】顶部工具栏
	 */
	shieldTopToolbar() {
		log.info("【屏蔽】顶部工具栏");
		GM_addStyle(`
        #headerContainer{
            display: none !important;
        }
        /* 主内容去除padding */
        #mfContainer{
            padding-top: 0 !important;
        }
        .outer-link-container{
            margin-top: 0 !important;
            height: 100dvh !important;
            padding: 30px 0;
        }
        #noteContainer{
            height: 100%;
        }
        `);
	},
};

export { XHS_Shield };
