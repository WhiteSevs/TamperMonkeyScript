import { DOMUtils, log, pops, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { CommonUtil } from "@/utils/CommonUtil";
import i18next from "i18next";
import { GreasyforkScriptsList } from "../scripts/GreasyforkScriptsList";
import { GreasyforkScriptsFilter } from "../scripts/GreasyforkScriptsFilter";

export const GreasyforkUsers = {
	init() {
		PopsPanel.execMenuOnce("users-changeConsoleToTopNavigator", () => {
			this.changeConsoleToTopNavigator();
		});
		PopsPanel.execMenuOnce("gf-scripts-filter-enable", () => {
			GreasyforkScriptsFilter.init();
		});
		PopsPanel.execMenuOnce("beautifyCenterContent", () => {
			return GreasyforkScriptsList.beautifyCenterContent();
		});
	},
	/**
	 * 迁移【控制台】到顶部导航栏
	 */
	changeConsoleToTopNavigator() {
		log.info("迁移【控制台】到顶部导航栏");
		CommonUtil.addBlockCSS("#about-user");
		DOMUtils.ready(() => {
			let $aboutUser = document.querySelector<HTMLElement>("#about-user");
			let $siteNav = document.querySelector<HTMLElement>("#site-nav nav");
			if (!$aboutUser) {
				log.error("#about-user元素不存在");
				return;
			}
			if (!$siteNav) {
				log.error("#site-nav nav元素不存在");
				return;
			}
			$aboutUser = $aboutUser.cloneNode(true) as HTMLElement;
			let $consoleNav = DOMUtils.createElement("li", {
				className: "scripts-console",
				innerHTML: `<a href="javascript:;">${i18next.t("控制台")}</a>`,
			});
			DOMUtils.on($consoleNav, "click", (event) => {
				utils.preventEvent(event);
				let $drawer = pops.drawer({
					title: {
						enable: false,
					},
					content: {
						text: "",
						html: true,
					},
					size: "auto",
					direction: "top",
					zIndex: utils.getMaxZIndex(100),
					style: /*css*/ `
                    .text-content{
                        list-style-type: none;
                        box-shadow: rgb(221, 221, 221) 0px 0px 5px;
                        background-color: rgb(255, 255, 255);
                        box-sizing: border-box;
                        border-width: 1px;
                        border-style: solid;
                        border-color: rgb(187, 187, 187);
                        border-image: initial;
                        border-radius: 5px;
                        margin: 14px 0px;
                        padding: 10px 40px;
                    }
                    a.report-link{
                        position: absolute;
                        right: 0px;
                        font-size: smaller;
                        margin-right: 16px;
                        margin-top: 8px;
                    }
                    `,
				});
				let $drawerContent = $drawer.$shadowRoot.querySelector<HTMLElement>(
					".pops-drawer-content"
				)!;
				$drawerContent.appendChild($aboutUser);
			});
			$siteNav.appendChild($consoleNav);
		});
	},
};
