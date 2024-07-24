import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monkey, { cdn, util } from "vite-plugin-monkey";
import { GetLib, ViteUtils } from "../../vite.utils";
import Icons from "unplugin-icons/dist/vite";
import IconsResolver from "unplugin-icons/dist/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import mkcert from "vite-plugin-mkcert";

/* 脚本名 */
const SCRIPT_NAME = "Demo Script Name";
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

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		mkcert({
			force: true,
		}),
		vue(),
		AutoImport({
			// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
			imports: ["vue"],
			// 生成的.d.ts文件的路径
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
			// 自动安装图标库
			autoInstall: true,
		}),
		monkey({
			// 脚本入口
			entry: "src/main.ts",
			userscript: {
				// 脚本名
				name: SCRIPT_NAME,
				// 命名空间
				namespace: "https://github.com/WhiteSevs/TamperMonkeyScript",
				// 反馈地址
				supportURL: "https://github.com/WhiteSevs/TamperMonkeyScript/issues",
				version: VERSION,
				// 版本号
				author: "WhiteSevs",
				// 运行时刻
				"run-at": "document-start",
				// 许可证
				license: "GPL-3.0-only",
				// 引用库
				require: await GetLib(["CoverUMD"]),
				// 图标
				icon: "",
				// 脚本描述
				description: "",
				// 脚本运行域
				match: [""],
				// GM_xmlhttpRequest允许访问的域
				connect: [""],
				// GM api权限申请
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
					"GM_getResourceText",
				],

				// 引用外部资源
				resource: {
					ElementPlusResourceCSS: `https://fastly.jsdelivr.net/npm/element-plus@${pkg.devDependencies["element-plus"]}/dist/index.min.css`,
				},
			},
			clientAlias: "ViteGM",
			server: {
				// 把GM api 挂载到unsafeWindow上
				mountGmApi: false,
				// dev时浏览器自动访问地址从而触发脚本管理器安装本脚本
				open: false,
			},
			build: {
				// 自动申请权限，可以不用填上面的grant
				autoGrant: true,
				// 输出文件名
				fileName: FILE_NAME,
				// 引入外部资源
				externalResource: {
					"element-plus/dist/index.css": cdn.jsdelivrFastly(),
				},
				// 引入外部库
				externalGlobals: {
					vue: cdn.jsdelivrFastly("Vue", "dist/vue.global.prod.js"),
					"vue-demi": cdn.jsdelivrFastly("VueDemi", "lib/index.iife.min.js"),
					pinia: cdn.jsdelivrFastly("Pinia", "dist/pinia.iife.prod.js"),
					"vue-router": cdn.jsdelivrFastly(
						"VueRouter",
						"dist/vue-router.global.js"
					),
					"element-plus": [
						"ElementPlus",
						await (async () => {
							return await GetLib("Element-Plus");
						})(),
					],
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
					"@whitesev/pops": cdn.jsdelivrFastly("pops", "dist/index.umd.js"),
				},
				// 样式添加到页面的自定义处理
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
		// 允许外部访问
		host: "::",
	},
	optimizeDeps: {
		// 无论deps是否发生变化，都要强制dep预优化。
		force: true,
	},
	build: {
		/* 构建的.user.js是否压缩 */
		minify: isMinify,
		// 构建输出目录
		emptyOutDir: isEmptyOutDir,
	},
});
