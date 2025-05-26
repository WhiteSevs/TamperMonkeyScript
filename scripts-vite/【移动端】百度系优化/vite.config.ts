import { defineConfig, type UserConfig } from "vite";
import monkey, {
	cdn,
	type MonkeyOption as __MonkeyOption__,
} from "vite-plugin-monkey";
import { ViteUtils, GetLib, viteUtils } from "../../vite.utils";
import mkcert from "vite-plugin-mkcert";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/dist/vite";
import IconsResolver from "unplugin-icons/dist/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const Utils = new ViteUtils(__dirname);
const pkg = Utils.getPackageJSON();
/**
 * 脚本名
 *
 * 除了这里还有env内的 _SCRIPT_NAME_
 *
 * @link file://./src/env.ts
 */
const SCRIPT_NAME = "【移动端】百度系优化";
/**
 * 是否是Vue项目
 *
 * + true 启用vue插件
 */
const isVueProject = true;

// 油猴插件配置
const MonkeyOption: Partial<__MonkeyOption__> = {
	userscript: {
		// GM_xmlhttpRequest允许访问的域
		connect: [
			"www.baidu.com",
			"m.baidu.com",
			"tieba.baidu.com",
			"www.tieba.com",
			"baike.baidu.com",
			"chat.baidu.com",
			"chat-ws.baidu.com",
			"wappass.baidu.com",
			"tiebaswan.baidu.com",
		],
		// 脚本描述
		description:
			"用于【移动端】的百度系列产品优化，包括【百度搜索】、【百家号】、【百度贴吧】、【百度文库】、【百度经验】、【百度百科】、【百度知道】、【百度翻译】、【百度图片】、【百度地图】、【百度好看视频】、【百度爱企查】、【百度问题】、【百度识图】等",
		// 脚本图标
		icon: "data:image/png;base64,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",
		// 脚本运行域
		match: [
			"*://*.baidu.com/*",
			"*://www.tieba.com/*",
			"*://jump2.bdimg.com/*",
			"*://uf9kyh.smartapps.cn/*",
		],
		// 引用库
		require: await GetLib(["showdown"]),
		// 资源引用
		resource: {
			ViewerCSS: `https://fastly.jsdelivr.net/npm/viewerjs@${pkg.dependencies["viewerjs"]}/dist/viewer.min.css`,
		},
	},
	build: {
		// import库的文件映射
		externalGlobals: {
			viewerjs: cdn.jsdelivrFastly("Viewer", "dist/viewer.min.js"),
		},
		// import资源文件的映射
		externalResource: {
			"viewerjs/dist/viewer.css": cdn.jsdelivrFastly(
				"ViewerCSS",
				"dist/viewer.min.css"
			),
		},
	},
};

let DefaultMonkeyOption: __MonkeyOption__ = {
	/**
	 * 脚本入口文件
	 * @link file://./src/entrance.ts
	 */
	entry: "./src/entrance.ts",
	// 脚本meta信息
	userscript: {
		// 脚本名
		name: SCRIPT_NAME,
		// 命名空间
		namespace: "https://github.com/WhiteSevs/TamperMonkeyScript",
		// 反馈地址
		supportURL: "https://github.com/WhiteSevs/TamperMonkeyScript/issues",
		// 作者
		author: "WhiteSevs",
		// 运行时刻
		"run-at": "document-start",
		// 许可证
		license: "GPL-3.0-only",
		// GM_xmlhttpRequest允许访问的域
		connect: ["*"],
	},
	clientAlias: "ViteGM",
	server: {
		// 把GM api 挂载到unsafeWindow上
		mountGmApi: true,
		// dev时浏览器自动访问地址从而触发脚本管理器安装本脚本
		open: false,
	},
	build: {
		// 输出.meta.js
		metaFileName: true,
		// 输出.meta.local.user.js
		metaLocalFileName: true,
		// 自动申请权限，可以不用填上面的grant
		autoGrant: true,
		// import库的文件映射
		externalGlobals: {
			"@whitesev/utils": cdn.jsdelivrFastly("Utils", "dist/index.umd.js"),
			"@whitesev/domutils": cdn.jsdelivrFastly("DOMUtils", "dist/index.umd.js"),
			"@whitesev/pops": cdn.jsdelivrFastly("pops", "dist/index.umd.js"),
			qmsg: cdn.jsdelivrFastly("Qmsg", "dist/index.umd.js"),
		},
		// import资源文件的映射
		externalResource: {},
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
};
/* -------------以下配置不需要动------------- */
/* -------------以下配置不需要动------------- */
/* -------------以下配置不需要动------------- */
DefaultMonkeyOption = viteUtils.assign(DefaultMonkeyOption, MonkeyOption, true);
process.on("exit", (code) => {
	try {
		const dir = "."; // 当前目录
		const pattern = /^vite\.config\.ts\.timestamp.+/;

		// 读取目录中的所有文件
		const files = fs.readdirSync(dir);

		// 遍历文件并删除匹配的文件
		files.forEach((file) => {
			if (file.match(pattern)) {
				const filePath = path.join(dir, file);
				fs.unlinkSync(filePath);
				console.log(`已删除文件: ${filePath}`);
			}
		});
	} catch (error) {
		console.error("删除文件时出错:", error);
	}
});

let FILE_NAME = SCRIPT_NAME + ".user.js";

/* 是否压缩代码 */
let isMinify: boolean | "esbuild" | "terser" = false;
if (process.argv.includes("--minify")) {
	isMinify = "esbuild";
	FILE_NAME = SCRIPT_NAME + ".min.user.js";
}

/* 是否清空输出目录 */
let isEmptyOutDir = true;
if (process.argv.includes("--no-empty-outDir")) {
	isEmptyOutDir = false;
}

/* 脚本版本号 */
let VERSION = "0.0.1";
if (process.argv.findIndex((i) => i.startsWith("build")) !== -1) {
	VERSION = Utils.getScriptVersion(!isEmptyOutDir);
}

/**
 * vite配置
 */
const UserConfig: UserConfig = {
	plugins: [
		mkcert({
			force: true,
		}),
	],
	resolve: {
		alias: {
			"@": Utils.getAbsolutePath("./src"),
			"@lib": Utils.getAbsolutePath("./../../lib"),
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
};

// 完善油猴配置
if (DefaultMonkeyOption.userscript!.resource == null) {
	DefaultMonkeyOption.userscript!.resource = {};
}
if (!Array.isArray(DefaultMonkeyOption.userscript.require)) {
	DefaultMonkeyOption.userscript!.require = [];
}

const CheckOptionList = [
	{
		checkFn: () => {
			return (
				typeof DefaultMonkeyOption.userscript!.icon !== "string" ||
				(typeof DefaultMonkeyOption.userscript!.icon === "string" &&
					DefaultMonkeyOption.userscript!.icon.trim() === "")
			);
		},
		msg: "Error：是不是忘记填 MonkeyOption.userscript.icon 了？不填会显得脚本有点儿不友好呢~",
	},
	{
		checkFn: () => {
			return (
				typeof DefaultMonkeyOption.userscript!.description !== "string" ||
				(typeof DefaultMonkeyOption.userscript!.description === "string" &&
					DefaultMonkeyOption.userscript!.description.trim() === "")
			);
		},
		msg: "Error：是不是忘记填 MonkeyOption.userscript.description 了？不填没人知道脚本是干嘛的呢~",
	},
	{
		checkFn: () => {
			return (
				!Array.isArray(DefaultMonkeyOption.userscript.match) ||
				(Array.isArray(DefaultMonkeyOption.userscript!.match) &&
					DefaultMonkeyOption.userscript!.match.length === 0)
			);
		},
		msg: "Error：是不是忘记填 MonkeyOption.userscript.match 了？不填脚本没法运行哦~",
	},
];

for (let index = 0; index < CheckOptionList.length; index++) {
	const checkOption = CheckOptionList[index];
	if (checkOption.checkFn()) {
		console.error(checkOption.msg);
		console.error(DefaultMonkeyOption);
		process.exit(0);
	}
}
if (isVueProject) {
	// 添加vue插件
	UserConfig.plugins!.push(
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
		})
	);

	// 添加vue的油猴配置
	const VueMonkeyOption: Partial<__MonkeyOption__> = {
		userscript: {
			resource: {
				/**
				 * 添加element-plus资源引用
				 *
				 * @link file://./src/GM_Resource_Mapping.ts
				 */
				ElementPlusResourceCSS: `https://fastly.jsdelivr.net/npm/element-plus@${pkg.devDependencies["element-plus"]}/dist/index.min.css`,
			},
		},
		build: {
			externalResource: {
				"element-plus/dist/index.css": (pkg) =>
					`https://cdn.jsdelivr.net/npm/${pkg.name}@${pkg.version}}/dist/index.css`,
			},
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
			},
		},
	};
	DefaultMonkeyOption = viteUtils.assign(
		DefaultMonkeyOption,
		VueMonkeyOption,
		true
	);
}

// 添加油猴插件
// @grant不用管，使用import GM_xxx from "ViteGM"会自动添加
// 设置版本号
DefaultMonkeyOption.userscript!.version = VERSION;
// 设置构建的文件名
DefaultMonkeyOption.build!.fileName = FILE_NAME;
// 添加@require
DefaultMonkeyOption.userscript!.require!.splice(0, 0, await GetLib("CoverUMD"));

UserConfig.plugins!.push(monkey(DefaultMonkeyOption));
// https://vitejs.dev/config/
export default defineConfig(UserConfig);
