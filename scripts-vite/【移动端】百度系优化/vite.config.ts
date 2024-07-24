import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monkey, { cdn, util } from "vite-plugin-monkey";
import Icons from "unplugin-icons/dist/vite";
import IconsResolver from "unplugin-icons/dist/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { ViteUtils, GetLib } from "../../vite.utils";
import mkcert from "vite-plugin-mkcert";

const SCRIPT_NAME = "【移动端】百度系优化";
const Utils = new ViteUtils(__dirname);
const pkg = Utils.getPackageJSON();
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
		mkcert(),
		vue(),
		AutoImport({
			// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
			imports: ["vue"],
			dts: "./types/auto-imports.d.ts",
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
			// 生成的.d.ts文件的路径
			dts: "./types/components.d.ts",
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
					"*",
					"www.baidu.com",
					"m.baidu.com",
					"tieba.baidu.com",
					"www.tieba.com",
					"baike.baidu.com",
					"chat.baidu.com",
					"chat-ws.baidu.com",
					"wappass.baidu.com",
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
				require: await GetLib(["CoverUMD", "showdown"]),
				resource: {
					ElementPlusResourceCSS: `https://fastly.jsdelivr.net/npm/element-plus@${pkg.devDependencies["element-plus"]}/dist/index.min.css`,
					ViewerCSS: `https://fastly.jsdelivr.net/npm/viewerjs@${pkg.dependencies["viewerjs"]}/dist/viewer.min.css`,
				},
			},
			clientAlias: "ViteGM",
			server: {
				mountGmApi: true,
				open: false,
			},
			build: {
				autoGrant: true,
				externalResource: {
					"element-plus/dist/index.css": cdn.jsdelivrFastly(),
					"viewerjs/dist/viewer.css": cdn.jsdelivrFastly(
						"Viewer",
						"dist/viewer.min.css"
					),
				},
				fileName: FILE_NAME,
				externalGlobals: {
					vue: cdn.jsdelivrFastly("Vue", "dist/vue.global.prod.js"),
					"vue-demi": cdn.jsdelivrFastly("VueDemi", "lib/index.iife.min.js"),
					pinia: cdn.jsdelivrFastly("Pinia", "dist/pinia.iife.prod.js"),
					"vue-router": cdn.jsdelivrFastly(
						"VueRouter",
						"dist/vue-router.global.js"
					),
					"element-plus": ["ElementPlus", ElementPlusUrl],
					"@element-plus/icons-vue": cdn.jsdelivrFastly(
						"ElementPlusIconsVue",
						"dist/index.iife.min.js"
					),
					qmsg: cdn.jsdelivrFastly("Qmsg", "dist/index.umd.js"),
					"@whitesev/utils": cdn.jsdelivrFastly("Utils", "dist/index.umd.js"),
					"@whitesev/domutils": cdn.jsdelivrFastly(
						"DOMUtils",
						"dist/index.umd.js"
					),
					viewerjs: cdn.jsdelivrFastly("Viewer", "dist/viewer.min.js"),
					"@whitesev/pops": cdn.jsdelivrFastly("pops", "dist/index.umd.js"),
					// "@tiptap/vue-3": cdn.jsdelivrFastly(""),
					// "@tiptap/starter-kit": cdn.jsdelivrFastly(""),
					// "@tiptap/pm": cdn.jsdelivrFastly(""),
					// "@tiptap/extension-placeholder": cdn.jsdelivrFastly(""),
					// "@tiptap/extension-image": cdn.jsdelivrFastly(""),
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
