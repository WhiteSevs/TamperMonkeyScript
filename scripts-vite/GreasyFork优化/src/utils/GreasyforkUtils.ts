import { GreasyforkRouter } from "@/router/GreasyforkRouter";
import { GreasyforkElementUtils } from "./GreasyforkElementUtils";
import { addStyle, DOMUtils, log } from "@/env";
import { unsafeWindow } from "ViteGM";

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
		/** 版本号 */
		const MonacoVersion = "0.52.0";
		const readyEventType = "monaco-editor-ready";
		log.info(`网络加载monaco编辑器中，请稍后...`);
		if (!isRegisdterMonacoEditorCSS) {
			isRegisdterMonacoEditorCSS = true;
			let $css = addStyle(/*css*/ `
				@font-face {
					font-family: 'codicon';
					src: url('https://fastly.jsdelivr.net/npm/monaco-editor@${MonacoVersion}/min/vs/base/browser/ui/codicons/codicon/codicon.ttf') format('truetype');
				}
			`);
		}
		let $monacoScript = DOMUtils.createElement("script", {
			type: "module",
			defer: true,
			innerHTML: /*js*/ `
					import * as monaco from "https://fastly.jsdelivr.net/npm/monaco-editor@${MonacoVersion}/+esm";
					window.monaco = monaco;
					window.dispatchEvent(new CustomEvent("${readyEventType}"));
				`,
		});
		DOMUtils.append(document.head || document.documentElement, $monacoScript);

		return new Promise<any>((resolve) => {
			DOMUtils.on(
				unsafeWindow,
				readyEventType,
				() => {
					// @ts-ignore
					let monaco = unsafeWindow.monaco;
					log.success(`网络加载monaco编辑器成功`);
					resolve(monaco);
				},
				{ once: true }
			);
		});
	},
};
