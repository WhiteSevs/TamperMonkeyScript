import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monkey, { cdn, util } from "vite-plugin-monkey";
import Icons from "unplugin-icons/dist/vite";
import IconsResolver from "unplugin-icons/dist/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { ViteUtils, GetLib } from "./vite.utils";

const SCRIPT_NAME = "【移动端】百度系优化";
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
let ElementPlusUrl = await GetLib("Element-Plus");
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
				icon: "https://www.baidu.com/favicon.ico",
				namespace: "https://github.com/WhiteSevs/TamperMonkeyScript",
				supportURL: "https://github.com/WhiteSevs/TamperMonkeyScript/issues",
				version: VERSION,
				author: "WhiteSevs",
				"run-at": "document-start",
				license: "GPL-3.0-only",
				description:
					"用于【移动端】的百度系列产品优化，包括【百度搜索】、【百家号】、【百度贴吧】、【百度文库】、【百度经验】、【百度百科】、【百度知道】、【百度翻译】、【百度图片】、【百度地图】、【百度好看视频】、【百度爱企查】、【百度问题】、【百度识图】等",
				match: [
					"*://*.baidu.com/*",
					"*://www.tieba.com/*",
					"*://uf9kyh.smartapps.cn/*",
				],
				connect: [
					"www.baidu.com",
					"m.baidu.com",
					"tieba.baidu.com",
					"www.tieba.com",
					"baike.baidu.com",
					"chat.baidu.com",
					"chat-ws.baidu.com",
				],
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
				require: await GetLib(["CoverUMD", "pops", "showdown"]),
				resource: {
					ElementPlusResourceCSS:
						"https://cdn.jsdelivr.net/npm/element-plus@2.7.2/dist/index.min.css",
					ViewerCSS:
						"https://cdn.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.css",
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
					"viewerjs/dist/viewer.css": cdn.jsdelivr(
						"Viewer",
						"dist/viewer.min.css"
					),
				},
				fileName: FILE_NAME,
				externalGlobals: {
					vue: cdn.jsdelivr("Vue", "dist/vue.global.prod.js"),
					"vue-demi": cdn.jsdelivr("VueDemi", "lib/index.iife.min.js"),
					pinia: cdn.jsdelivr("Pinia", "dist/pinia.iife.prod.js"),
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
					qmsg: cdn.jsdelivr("Qmsg", "dist/index.umd.js"),
					"@whitesev/utils": cdn.jsdelivr("Utils", "dist/index.umd.js"),
					"@whitesev/domutils": cdn.jsdelivr("DOMUtils", "dist/index.umd.js"),
					viewerjs: cdn.jsdelivr("Viewer", "dist/viewer.min.js"),
					// "@tiptap/vue-3": cdn.jsdelivr(""),
					// "@tiptap/starter-kit": cdn.jsdelivr(""),
					// "@tiptap/pm": cdn.jsdelivr(""),
					// "@tiptap/extension-placeholder": cdn.jsdelivr(""),
					// "@tiptap/extension-image": cdn.jsdelivr(""),
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
