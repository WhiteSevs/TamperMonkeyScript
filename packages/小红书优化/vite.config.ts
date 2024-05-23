import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monkey, { cdn, util } from "vite-plugin-monkey";
import { SCRIPT_NAME } from "./vite.build";
import { ViteUtils, GetLib } from "./vite.utils";

const Utils = new ViteUtils(__dirname);
let FILE_NAME = SCRIPT_NAME + ".user.js";
/* 是否压缩代码 */
let isMinify = false;
if (process.argv.includes("--minify")) {
	isMinify = true;
	FILE_NAME = SCRIPT_NAME + ".min.user.js";
}
let isEmptyOutDir = true;
if (process.argv.includes("--no-empty-outDir")) {
	isEmptyOutDir = false;
}
const VERSION = Utils.getScriptVersion(!isEmptyOutDir);
const RequireLib = await GetLib(["Viewer", "pops", "Utils", "DOMUtils"]);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		monkey({
			entry: "src/main.ts",
			userscript: {
				name: SCRIPT_NAME,
				namespace: "https://github.com/WhiteSevs/TamperMonkeyScript",
				supportURL: "https://github.com/WhiteSevs/TamperMonkeyScript/issues",
				version: VERSION,
				author: "WhiteSevs",
				"run-at": "document-start",
				require: RequireLib,
				license: "GPL-3.0-only",

				icon: "https://fe-video-qc.xhscdn.com/fe-platform/ed8fe781ce9e16c1bfac2cd962f0721edabe2e49.ico",
				description:
					"屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等",
				match: ["*://www.xiaohongshu.com/*"],
				connect: ["edith.xiaohongshu.com"],
				grant: [
					"GM_addStyle",
					"GM_registerMenuCommand",
					"GM_unregisterMenuCommand",
					"GM_getValue",
					"GM_setValue",
					"GM_deleteValue",
					"GM_xmlhttpRequest",
					"GM_info",
					"unsafeWindow",
				],
			},
			clientAlias: "ViteGM",
			server: {
				mountGmApi: false,
				open: true,
			},
			build: {
				autoGrant: true,
				fileName: FILE_NAME,
				externalResource: {
					"element-plus/dist/index.css": cdn.jsdelivr(),
				},
				externalGlobals: {
					qmsg: cdn.jsdelivr("Qmsg", "dist/index.umd.js"),
				},
				cssSideEffects: () => {
					return (cssText: string) => {
						function addStyle(cssText: string) {
							if (typeof cssText !== "string") {
								throw new TypeError("cssText must be a string");
							}
							let cssNode = document.createElement("style");
							cssNode.setAttribute("type", "text/css");
							cssNode.innerHTML = cssText;
							if (document.head) {
								/* 插入head最后 */
								document.head.appendChild(cssNode);
							} else if (document.body) {
								/* 插入body后 */
								document.body.appendChild(cssNode);
							} else if (document.documentElement.childNodes.length === 0) {
								/* 插入#html第一个元素后 */
								document.documentElement.appendChild(cssNode);
							} else {
								/* 插入head前面 */
								document.documentElement.insertBefore(
									cssNode,
									document.documentElement.childNodes[0]
								);
							}
							return cssNode;
						}
						// @ts-ignore
						if (typeof GM_addStyle == "function") {
							// @ts-ignore
							GM_addStyle(cssText);
							return;
						}
						addStyle(cssText);
					};
				},
			},
		}),
	],
	resolve: {
		alias: {
			"@库": Utils.getAbsolutePath("./../../库"),
			"@": Utils.getAbsolutePath("./src"),
		},
	},
	build: {
		/* 构建的.user.js是否压缩 */
		minify: isMinify,
		emptyOutDir: isEmptyOutDir,
	},
});
