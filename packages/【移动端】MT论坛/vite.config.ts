import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monkey, { cdn, util } from "vite-plugin-monkey";
import { SCRIPT_NAME } from "./vite.build";
import Icons from "unplugin-icons/dist/vite";
import IconsResolver from "unplugin-icons/dist/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
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
const RequireLib = await GetLib([
	"CoverUMD",
	"Qmsg",
	"pops",
	"Utils",
	"DOMUtils",
]);
const ElementPlusUrl = await GetLib("Element-Plus");
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
			imports: ["vue"],
			resolvers: [
				// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
				ElementPlusResolver(),
				// 自动导入图标组件
				IconsResolver({
					prefix: "Icon",
				}),
			],
		}),
		Components({
			resolvers: [
				// 自动注册图标组件
				IconsResolver({
					enabledCollections: ["ep"],
				}),
				// 自动导入 Element Plus 组件
				ElementPlusResolver(),
			],
		}),
		Icons({
			autoInstall: true,
		}),
		monkey({
			entry: "src/main.ts",
			userscript: {
				name: SCRIPT_NAME,
				icon: "https://bbs.binmt.cc/favicon.ico",
				author: "WhiteSevs",
				"run-at": "document-start",
				namespace: "https://github.com/WhiteSevs/TamperMonkeyScript",
				supportURL: "https://github.com/WhiteSevs/TamperMonkeyScript/issues",
				description:
					"MT论坛效果增强，如自动签到、自动展开帖子、滚动加载评论、显示UID、自定义屏蔽、手机版小黑屋、编辑器优化、在线用户查看、便捷式图床、自定义用户标签、积分商城商品上架提醒等",
				// @ts-ignore
				updateLog: "全新的设置界面；去除功能：【蓝奏云功能】、【聊天内图床】",
				version: VERSION,
				match: ["*://bbs.binmt.cc/*"],
				exclude: [/^http(s|):\/\/bbs\.binmt\.cc\/uc_server.*$/],
				license: "GPL-3.0-only",
				grant: [
					"unsafeWindow",
					"GM_addStyle",
					"GM_setValue",
					"GM_getValue",
					"GM_deleteValue",
					"GM_setClipboard",
					"GM_xmlhttpRequest",
					"GM_registerMenuCommand",
					"GM_unregisterMenuCommand",
					"GM_info",
					"GM_cookie",
				],
				connect: "*",
				require: RequireLib,
				resource: {
					ElementPlusResourceCSS:
						"https://cdn.jsdelivr.net/npm/element-plus@2.7.2/dist/index.min.css",
				},
			},
			clientAlias: "ViteGM",
			server: {
				mountGmApi: false,
				open: true,
			},
			build: {
				autoGrant: true,
				externalResource: {
					"element-plus/dist/index.css": cdn.jsdelivr(),
				},
				fileName: FILE_NAME,
				externalGlobals: {
					vue: cdn.jsdelivr("Vue", "dist/vue.global.prod.js"),
					"vue-router": cdn.jsdelivr("VueRouter", "dist/vue-router.global.js"),
					"element-plus": [
						"ElementPlus",
						() => {
							return ElementPlusUrl;
						},
					],
					"@element-plus/icons-vue": cdn.jsdelivr(
						"ElementPlusIconsVue",
						"dist/index.iife.min.js"
					),
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
		minify: isMinify,
		emptyOutDir: isEmptyOutDir,
	},
});
