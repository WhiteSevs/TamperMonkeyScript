import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monkey, { cdn, util } from "vite-plugin-monkey";
import { SCRIPT_NAME } from "./vite.build";
import { GetLib, ViteUtils } from "./vite.utils";
import Icons from "unplugin-icons/dist/vite";
import IconsResolver from "unplugin-icons/dist/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

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
				namespace: "https://github.com/WhiteSevs/TamperMonkeyScript",
				supportURL: "https://github.com/WhiteSevs/TamperMonkeyScript/issues",
				version: VERSION,
				author: "WhiteSevs",
				"run-at": "document-start",
				license: "GPL-3.0-only",
				require: await GetLib(["CoverUMD", "DOMUtils", "Utils", "pops"]),
				resource: {
					// "ElementPlusResourceCSS": "https://cdn.jsdelivr.net/npm/element-plus@2.7.2/dist/index.min.css",
				},

				icon: "https://i0.hdslb.com/bfs/static/jinkela/long/images/512.png",
				description: "bilibili(哔哩哔哩)优化，免登录等",
				match: ["*://m.bilibili.com/*", "*://live.bilibili.com/*"],
				connect: [
					"*",
					"m.bilibili.com",
					"www.bilibili.com",
					"api.bilibili.com",
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
					// 'element-plus/dist/index.css': cdn.jsdelivr(),
				},
				externalGlobals: {
					// vue: cdn.jsdelivr("Vue", "dist/vue.global.prod.js"),
					// "vue-router": cdn.jsdelivr("VueRouter", "dist/vue-router.global.js"),
					// "element-plus": [
					// 	"ElementPlus",
					// 	() => {
					// 		return ElementPlusUrl;
					// 	},
					// ],
					// "@element-plus/icons-vue": cdn.jsdelivr(
					// 	"ElementPlusIconsVue",
					// 	"dist/index.iife.min.js"
					// ),
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
