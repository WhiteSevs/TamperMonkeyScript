import { $, DOMUtils, log, utils } from "@/env";
import { GreasyforkUrlUtils } from "./GreasyforkUrlUtils";

export const GreasyforkElementUtils = {
	/**
	 * 获取当前登录用户id
	 */
	getCurrentLoginUserId() {
		let $anchor = document.querySelector<HTMLAnchorElement>(
			"#nav-user-info .user-profile-link a"
		);
		if (!$anchor) {
			return;
		}
		let userId = GreasyforkUrlUtils.getUserId($anchor.href);
		if (userId == null) {
			return;
		}
		return userId;
	},
	/**
	 * 注册顶部导航菜单
	 */
	registerTopNavMenu(config: {
		name: string;
		className: string;
		clickEvent: (event: MouseEvent | PointerEvent) => void;
	}) {
		DOMUtils.ready(() => {
			let $nav = $<HTMLElement>("#site-nav nav");
			// 更多
			let $subNav = $<HTMLElement>("#site-nav .with-submenu nav");
			if (!$nav) {
				log.error("元素#site-nav nav不存在");
				return;
			}

			let $menuLink = DOMUtils.createElement("li", {
				className: config.className,
				innerHTML: /*html*/ `
                <a href="javascript:;">${config.name}</a>
                `,
			});
			DOMUtils.on($menuLink, "click", (event) => {
				utils.preventEvent(event);
				config.clickEvent(event);
			});

			if ($subNav && $subNav.children.length) {
				$subNav.appendChild($menuLink);
			} else {
				$nav.appendChild($menuLink);
			}

			// 再克隆一个，新版新增的移动端的更多的样式

			let $mobileMenuLink = DOMUtils.createElement("li", {
				className: config.className,
				innerHTML: /*html*/ `
                <a href="javascript:;">${config.name}</a>
                `,
			});
			DOMUtils.on($mobileMenuLink, "click", (event) => {
				utils.preventEvent(event);
				config.clickEvent(event);
			});
			let $mobileNav = $<HTMLElement>("#mobile-nav nav");
			// 已登录的账号的元素
			let $multiLinkNav = $<HTMLElement>("#mobile-nav nav .multi-link-nav");
			if ($multiLinkNav) {
				DOMUtils.before($multiLinkNav, $mobileMenuLink);
			} else {
				if ($mobileNav) {
					DOMUtils.append($mobileNav, $mobileMenuLink);
				} else {
					log.error("元素#mobile-nav nav不存在");
				}
			}
		});
	},
};
