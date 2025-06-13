import { GreasyforkRouter } from "@/router/GreasyforkRouter";
import { GreasyforkElementUtils } from "./GreasyforkElementUtils";
import { addStyle, DOMUtils, httpx, log, utils } from "@/env";
import { unsafeWindow } from "ViteGM";
import Qmsg from "qmsg";
import i18next from "i18next";

let isRegisdterMonacoEditorCSS = false;

export const GreasyforkUtils = {
	/**
	 * 判断是否是当前已登录账户的主页
	 */
	isCurrentLoginUserHome() {
		let currentLoginUserId = GreasyforkElementUtils.getCurrentLoginUserId();
		if (
			currentLoginUserId != null &&
			GreasyforkRouter.isUsers() &&
			window.location.pathname.includes("/" + currentLoginUserId)
		) {
			return true;
		} else {
			return false;
		}
	},
	/**
	 * 加载monaco编辑器
	 */
	monacoEditor() {
		return new Promise<any>((resolve) => {
			/** 版本号 */
			const MonacoVersion = "0.52.2";
			const readyEventType = "monaco-editor-ready";
			// if (!isRegisdterMonacoEditorCSS) {
			// 	isRegisdterMonacoEditorCSS = true;
			// 	// 字体资源
			// 	addStyle(/*css*/ `
			// 		@font-face {
			// 			font-family: 'codicon';
			// 			src: url('https://fastly.jsdelivr.net/npm/monaco-editor@${MonacoVersion}/min/vs/base/browser/ui/codicons/codicon/codicon.ttf') format('truetype');
			// 		}
			// 	`);
			// }
			if (unsafeWindow.monaco) {
				resolve(unsafeWindow.monaco);
				return;
			}
			let $loading = Qmsg.loading(i18next.t("monaco-editor加载中..."));
			let $monacoScript = DOMUtils.createElement("script", {
				type: "module",
				defer: true,
				innerHTML: /*js*/ `
					// import * as monaco from "https://fastly.jsdelivr.net/npm/monaco-editor@${MonacoVersion}/+esm";
					import {  monaco } from "https://fastly.jsdelivr.net/npm/@live-codes/monaco-editor/monaco.js";
					window.monaco = monaco;
					window.dispatchEvent(new CustomEvent("${readyEventType}"));
				`,
			});
			DOMUtils.append(document.head || document.documentElement, $monacoScript);

			DOMUtils.on(
				unsafeWindow,
				readyEventType,
				() => {
					// @ts-ignore
					let monaco = unsafeWindow.monaco;
					log.success(`网络加载monaco编辑器成功`);
					$loading.close();
					resolve(monaco);
				},
				{ once: true }
			);
		});
	},
};
