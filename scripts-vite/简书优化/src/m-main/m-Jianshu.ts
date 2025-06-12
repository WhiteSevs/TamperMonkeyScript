import { log } from "@/env";
import { Jianshu } from "@/main/Jianshu";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import { unsafeWindow } from "ViteGM";

export const M_Jianshu = {
	init() {
		this.addCSS();
		Panel.execMenu("JianShuAutoJumpRedirect_Mobile", () => {
			Jianshu.jumpRedirect();
		});
		Panel.execMenu("JianShuHijackSchemeScriptLabel_Mobile", () => {
			this.handlePrototype();
		});
		Panel.execMenu("JianShuRemoveClipboardHijacking_Mobile", () => {
			Jianshu.removeClipboardHijacking();
		});

		Panel.execMenu("JianShuAutoExpandFullText_Mobile", () => {
			Jianshu.autoExpandFullText();
		});
		Panel.execMenuOnce("JianShuremoveFooterRecommendRead", () => {
			return this.blockeFooterRecommendRead();
		});
		Panel.execMenu("JianShuShieldUserCommentsMobile", () => {
			return this.blockUserComments();
		});
	},
	/**
	 * 添加屏蔽CSS
	 */
	addCSS() {
		Jianshu.addCSS();
	},
	/**
	 * 手机-屏蔽底部推荐阅读
	 */
	blockeFooterRecommendRead() {
		log.info("屏蔽底部推荐阅读");
		return CommonUtil.addBlockCSS("#recommended-notes");
	},
	/**
	 * 处理原型
	 */
	handlePrototype() {
		log.info("处理原型添加script标签");
		let originalAppendChild = Node.prototype.appendChild;
		unsafeWindow.Node.prototype.appendChild = function (element: any): any {
			/* 允许添加的元素localName */
			let allowElementLocalNameList = ["img"];
			/* 不允许script标签加载包括jianshu.io的js资源，会让简书跳到广告页面 */
			if (
				element.src &&
				!element.src.includes("jianshu.io") &&
				!allowElementLocalNameList.includes(element.localName)
			) {
				log.success(["禁止添加的元素", element]);
				return null;
			} else {
				return originalAppendChild.call(this, element);
			}
		};
	},
	/**
	 * 屏蔽评论区
	 */
	blockUserComments() {
		log.info("屏蔽评论区");
		return CommonUtil.addBlockCSS("#comment-main");
	},
};
