import { CSDNRouter } from "@/router/CSDNRouter";
import { CSDNBlogArticle } from "./CSDNBlogArticle";
import { $$, addStyle, DOMUtils, log, utils } from "@/env";
import BlogShieldCSS from "./css/shield.css?raw";
import BlogCSS from "./css/CSDNBlog.css?raw";
import { PopsPanel } from "@/setting/setting";
import { unsafeWindow } from "ViteGM";
import { CommonUtil } from "@/utils/CommonUtil";

export const CSDNBlog = {
	init() {
		this.addCSS();
		PopsPanel.execMenuOnce("csdn-blog-shieldTopToolbar", () => {
			return this.shieldTopToolbar();
		});
		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("csdn-blog-removeClipboardHijacking", () => {
				this.removeClipboardHijacking();
			});
			PopsPanel.execMenuOnce("csdn-blog-unBlockCopy", () => {
				this.unBlockCopy();
			});
		});
	},
	/**
	 * 添加屏蔽CSS和功能CSS
	 */
	addCSS() {
		log.info("添加屏蔽CSS和功能CSS");
		return [addStyle(BlogShieldCSS), addStyle(BlogCSS)];
	},
	/**
	 * 去除剪贴板劫持
	 */
	removeClipboardHijacking() {
		log.info("去除剪贴板劫持");
		let $article_copyright =
			document.querySelector<HTMLDivElement>(".article-copyright");
		if ($article_copyright) {
			$article_copyright.remove();
		}
		if ((unsafeWindow as any).articleType) {
			(unsafeWindow as any).articleType = 0;
		}
		if (
			(unsafeWindow as any).csdn &&
			(unsafeWindow as any).csdn.copyright &&
			(unsafeWindow as any).csdn.copyright.textData
		) {
			(unsafeWindow as any).csdn.copyright.textData = "";
		}
		if (
			(unsafeWindow as any).csdn &&
			(unsafeWindow as any).csdn.copyright &&
			(unsafeWindow as any).csdn.copyright.htmlData
		) {
			(unsafeWindow as any).csdn.copyright.htmlData = "";
		}
	},
	/**
	 * 取消禁止复制
	 */
	unBlockCopy() {
		log.info("取消禁止复制");
		DOMUtils.on(
			document,
			"click",
			function (event) {
				let $click = event.target as HTMLElement;
				let $parent = $click.parentElement as HTMLElement;
				if (!$click.classList.contains("hljs-button")) {
					return;
				}
				let $code = $parent.querySelector<HTMLElement>("code");
				$code = $code || $parent;
				utils.preventEvent(event);
				/* 需要复制的文本 */
				let copyText = $code.innerText;
				log.info(
					"点击复制按钮复制内容：" +
						(copyText.length > 8 ? copyText.substring(0, 8) + "..." : copyText)
				);
				utils.setClip(copyText);
				$click.setAttribute("data-title", "复制成功");
			},
			{
				capture: true,
			}
		);
		/* 修改点击复制按钮后修改悬浮的文字 */
		let changeDataTitle = new utils.LockFunction(function (event: Event) {
			let $mouse = event.target as HTMLElement;
			if ($mouse.localName !== "pre") {
				return;
			}
			let $hljsBtn = $mouse.querySelector<HTMLDivElement>(".hljs-button");
			if ($hljsBtn) {
				$hljsBtn.setAttribute("data-title", "复制");
			}
		});
		DOMUtils.on(
			document,
			["mouseenter", "mouseleave"],
			function (event) {
				changeDataTitle.run(event);
			},
			{
				capture: true,
			}
		);
		/* 取消Ctrl+C的禁止 */
		utils.waitNode<HTMLDivElement>("#content_views").then(($content_views) => {
			if ((unsafeWindow as any).$) {
				(unsafeWindow as any).$("#content_views")?.unbind("copy");
			}
			DOMUtils.on(
				$content_views,
				"copy",
				function (event) {
					utils.preventEvent(event);
					let selectText = unsafeWindow.getSelection()!;
					let copyText = selectText?.toString();
					log.info(
						"Ctrl+C复制内容：" +
							(copyText.length > 8
								? copyText.substring(0, 8) + "..."
								: copyText)
					);
					utils.setClip(copyText);
					return false;
				},
				{
					capture: true,
				}
			);
		});
		/* 删除所有复制按钮的原有的复制事件 */
		utils.waitNode(".hljs-button").then(() => {
			setTimeout(() => {
				$$<HTMLDivElement>(".hljs-button").forEach(($el) => {
					$el.removeAttribute("onclick");
					$el.removeAttribute("data-report-click");
					$el.setAttribute("data-title", "复制");
				});
			}, 250);
		});
	},
	/**
	 * 屏蔽顶部Toolbar
	 */
	shieldTopToolbar() {
		log.info("屏蔽顶部Toolbar");
		return CommonUtil.addBlockCSS("#toolbarBox", "#csdn-toolbar");
	},
};
