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

const SCRIPT_NAME = "【移动端】bilibili优化";
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
			entry: "src/main.ts",
			userscript: {
				name: SCRIPT_NAME,
				namespace: "https://github.com/WhiteSevs/TamperMonkeyScript",
				supportURL: "https://github.com/WhiteSevs/TamperMonkeyScript/issues",
				version: VERSION,
				author: "WhiteSevs",
				"run-at": "document-start",
				license: "GPL-3.0-only",
				require: await GetLib(["CoverUMD", "QRCode"]),
				resource: {
					// "ElementPlusResourceCSS": "https://fastly.jsdelivr.net/npm/element-plus@2.7.2/dist/index.min.css",
				},
				icon: "https://i0.hdslb.com/bfs/static/jinkela/long/images/512.png",
				description:
					"移动端专用，免登录（但登录后可以看更多评论）、阻止跳转App、App端推荐视频流、解锁视频画质(番剧解锁需配合其它插件)、美化显示、去广告等",
				match: [
					"*://m.bilibili.com/*",
					"*://live.bilibili.com/*",
					"*://www.bilibili.com/read/*",
				],
				connect: [
					"*",
					"m.bilibili.com",
					"www.bilibili.com",
					"api.bilibili.com",
					"app.bilibili.com",
					"passport.bilibili.com",
					"hdslb.com",
					"aisubtitle.hdslb.com",
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
				mountGmApi: true,
				open: false,
			},
			build: {
				metaFileName: true,
				metaLocalFileName: true,
				autoGrant: true,
				fileName: FILE_NAME,
				externalResource: {
					// 'element-plus/dist/index.css': cdn.jsdelivrFastly(),
				},
				externalGlobals: {
					// vue: cdn.jsdelivrFastly("Vue", "dist/vue.global.prod.js"),
					// "vue-router": cdn.jsdelivrFastly("VueRouter", "dist/vue-router.global.js"),
					// "element-plus": [
					// 	"ElementPlus",
					// 	() => {
					// 		return ElementPlusUrl;
					// 	},
					// ],
					// "@element-plus/icons-vue": cdn.jsdelivrFastly(
					// 	"ElementPlusIconsVue",
					// 	"dist/index.iife.min.js"
					// ),
					qmsg: cdn.jsdelivrFastly("Qmsg", "dist/index.umd.js"),
					"@whitesev/utils": cdn.jsdelivrFastly("Utils", "dist/index.umd.js"),
					"@whitesev/domutils": cdn.jsdelivrFastly(
						"DOMUtils",
						"dist/index.umd.js"
					),
					"@whitesev/pops": cdn.jsdelivrFastly("pops", "dist/index.umd.js"),
					md5: cdn.jsdelivrFastly("MD5", "dist/md5.min.js"),
					"flv.js": cdn.jsdelivrFastly("MD5", "dist/flv.js"),
					// "artplayer-plugin-danmuku": cdn.jsdelivrFastly(
					// 	"artplayerPluginDanmuku",
					// 	"dist/artplayer-plugin-danmuku.js"
					// ),
					// artplayer: cdn.jsdelivrFastly("Artplayer", "dist/artplayer.js"),
					"artplayer-plugin-danmuku": [
						"artplayerPluginDanmuku",
						() =>
							`https://fastly.jsdelivr.net/gh/WhiteSevs/ArtPlayer@e1349a55018c01dc6a12725ddd243b58b9fe0e6d/packages/artplayer-plugin-danmuku/dist/artplayer-plugin-danmuku.js`,
					],
					artplayer: [
						`Artplayer`,
						() =>
							`https://fastly.jsdelivr.net/gh/WhiteSevs/ArtPlayer@3cbe20292ddaf3018362944c2e6e06250b463d14/packages/artplayer/dist/artplayer.js`,
					],
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
