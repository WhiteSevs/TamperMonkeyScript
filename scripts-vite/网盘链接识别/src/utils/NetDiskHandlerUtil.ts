import { log } from "@/env";

export const NetDiskHandlerUtil = {
	/**
	 * 替换文字
	 * @param text 需要替换的文字
	 * @param pattern 需要替换的文字的正则表达式
	 * @param newText 替换为的文字
	 */
	replaceText(
		text: string,
		pattern: RegExp | RegExp[] | string | string[],
		newText: string
	) {
		if (Array.isArray(pattern)) {
			for (const patternItem of pattern) {
				text = text.replace(patternItem, newText);
			}
		} else {
			text = text.replace(pattern, newText);
		}
		return text;
	},
	/**
	 * 获取剪贴板文本
	 */
	async getClipboardText(): Promise<string> {
		/** 读取剪贴板 */
		function readClipboardText(resolve: Function) {
			navigator.clipboard
				.readText()
				.then((clipboardText) => {
					resolve(clipboardText);
				})
				.catch((error: TypeError) => {
					log.error("读取剪贴板内容失败👉", error);
					resolve("");
				});
		}
		/** 申请读取剪贴板的权限 */
		function requestPermissionsWithClipboard(resolve: Function) {
			navigator.permissions
				.query({
					// @ts-ignore
					name: "clipboard-read",
				})
				.then((permissionStatus) => {
					readClipboardText(resolve);
				})
				.catch((error: TypeError) => {
					log.error(
						"申请剪贴板权限失败，尝试直接读取👉",
						error.message ?? error.name ?? error.stack
					);
					/* 该权限申请Api可能在该环境下不生效，尝试直接读取剪贴板 */
					readClipboardText(resolve);
				});
		}
		function checkClipboardApi() {
			if (typeof navigator?.clipboard?.readText !== "function") {
				return false;
			}
			if (typeof navigator?.permissions?.query !== "function") {
				return false;
			}
			return true;
		}
		return new Promise((resolve) => {
			if (!checkClipboardApi()) {
				resolve("");
				return;
			}
			if (document.hasFocus()) {
				requestPermissionsWithClipboard(resolve);
			} else {
				window.addEventListener(
					"focus",
					() => {
						requestPermissionsWithClipboard(resolve);
					},
					{
						once: true,
					}
				);
			}
		});
	},
};
