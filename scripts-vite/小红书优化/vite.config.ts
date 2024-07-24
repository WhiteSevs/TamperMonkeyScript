import { defineConfig } from "vite";
import monkey, { cdn, util } from "vite-plugin-monkey";
import { ViteUtils, GetLib } from "../../vite.utils";
import mkcert from "vite-plugin-mkcert";

const SCRIPT_NAME = "小红书优化";
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

let VERSION = "0.0.1";
if (process.argv.findIndex((i) => i.startsWith("build")) !== -1) {
	VERSION = Utils.getScriptVersion(!isEmptyOutDir);
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		mkcert({
			force: true,
		}),
		monkey({
			entry: "src/main.ts",
			userscript: {
				name: SCRIPT_NAME,
				namespace: "https://github.com/WhiteSevs/TamperMonkeyScript",
				supportURL: "https://github.com/WhiteSevs/TamperMonkeyScript/issues",
				version: VERSION,
				author: "WhiteSevs",
				"run-at": "document-start",
				require: await GetLib(["CoverUMD", "Viewer"]),
				license: "GPL-3.0-only",

				icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=",
				description:
					"屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等",
				match: ["*://www.xiaohongshu.com/*"],
				connect: ["edith.xiaohongshu.com"],
				grant: [
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
				open: false,
			},
			build: {
				autoGrant: true,
				fileName: FILE_NAME,
				externalResource: {
					"element-plus/dist/index.css": cdn.jsdelivrFastly(),
				},
				externalGlobals: {
					qmsg: cdn.jsdelivrFastly("Qmsg", "dist/index.umd.js"),
					"@whitesev/utils": cdn.jsdelivrFastly("Utils", "dist/index.umd.js"),
					"@whitesev/domutils": cdn.jsdelivrFastly(
						"DOMUtils",
						"dist/index.umd.js"
					),
					"@whitesev/pops": cdn.jsdelivrFastly("pops", "dist/index.umd.js"),
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
			"@": Utils.getAbsolutePath("./src"),
		},
	},
	server: {
		host: "::",
	},
	optimizeDeps: {
		force: true,
	},
	build: {
		/* 构建的.user.js是否压缩 */
		minify: isMinify,
		emptyOutDir: isEmptyOutDir,
	},
});
