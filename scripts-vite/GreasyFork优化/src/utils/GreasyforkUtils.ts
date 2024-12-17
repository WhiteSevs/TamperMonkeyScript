import { GreasyforkRouter } from "@/router/GreasyforkRouter";
import { GreasyforkElementUtils } from "./GreasyforkElementUtils";
import { addStyle, DOMUtils } from "@/env";
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
	async monacoEditor() {
		/** 版本号 */
		const MonacoVersion = "0.52.0";
		if (!isRegisdterMonacoEditorCSS) {
			isRegisdterMonacoEditorCSS = true;
			addStyle(`
			@font-face {
				font-family: 'codicon';
				src: url('https://fastly.jsdelivr.net/npm/monaco-editor@${MonacoVersion}/min/vs/base/browser/ui/codicons/codicon/codicon.ttf') format('truetype');
			}
		`);
		}
		let $monacoScript = DOMUtils.createElement("script", {
			type: "module",
			innerHTML: `
					import * as monaco from "https://fastly.jsdelivr.net/npm/monaco-editor@${MonacoVersion}/+esm";
					window.monaco = monaco;
					window.dispatchEvent(new CustomEvent("monaco-editor-ready"));
				`,
		});
		DOMUtils.append(document.head || document.documentElement, $monacoScript);

		return new Promise<any>((resolve) => {
			DOMUtils.on(
				unsafeWindow,
				"monaco-editor-ready",
				() => {
					// @ts-ignore
					let monaco = unsafeWindow.monaco;
					resolve(monaco);
				},
				{ once: true }
			);
		});
	},
};
