import { defineConfig } from "vite";
import monkey, { cdn, util } from "vite-plugin-monkey";
import { ViteUtils, GetLib } from "../../vite.utils";
import mkcert from "vite-plugin-mkcert";

const SCRIPT_NAME = "简书优化";
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
				icon: "https://www.jianshu.com/favicon.ico",
				// 脚本描述
				description:
					"支持手机端和PC端、屏蔽广告、优化浏览体验、重定向链接、全文居中、自动展开全文、允许复制文字、劫持唤醒/跳转App、自定义屏蔽元素等",
				// 脚本运行域
				match: ["*://*.jianshu.com/*", "*://*.jianshu.io/*"],
				// GM_xmlhttpRequest允许访问的域
				// connect: [""],
				// GM api权限申请
				grant: [
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
				// 引入外部库
				externalGlobals: {
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
