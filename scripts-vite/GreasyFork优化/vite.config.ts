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
const SCRIPT_NAME = "GreasyFork优化";
const localizedConfig = {
	name: {
		"": SCRIPT_NAME,
		"en-US": "GreasyFork Optimization",
	},
	description: {
		"": "自动登录账号、快捷寻找自己库被其他脚本引用、更新自己的脚本列表、库、优化图片浏览、美化页面、Markdown复制按钮",
		"en-US":
			"Automatically log in to the account, quickly find your own library referenced by other scripts, update your own script list, library, optimize image browsing, beautify the page, Markdown copy button",
	},
};
/**
 * 是否是Vue项目
 *
 * + true 启用vue插件
 */
const isVueProject = false;

// 油猴插件配置
const MonkeyOption: Partial<__MonkeyOption__> = {
	userscript: {
		// 脚本名
		name: localizedConfig.name,
		// GM_xmlhttpRequest允许访问的域
		connect: ["greasyfork.org", "sleazyfork.org", "cn-greasyfork.org"],
		// 脚本描述
		description: localizedConfig.description,
		// 脚本图标
		icon: "data:image/png;base64,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",
		// 脚本运行域
		match: [
			"*://greasyfork.org/*",
			"*://sleazyfork.org/*",
			"*://cn-greasyfork.org/*",
		],
		// 引用库
		require: [],
		// 资源引用
		resource: {
			ViewerCSS: `https://fastly.jsdelivr.net/npm/viewerjs@${pkg.dependencies["viewerjs"]}/dist/viewer.min.css`,
		},
	},
	build: {
		// import库的文件映射
		externalGlobals: {
			viewerjs: cdn.jsdelivrFastly("Viewer", "dist/viewer.min.js"),
			i18next: cdn.jsdelivrFastly("i18next", "i18next.min.js"),
		},
		// import资源文件的映射
		externalResource: {
			"viewerjs/dist/viewer.css": cdn.jsdelivrFastly(
				"Viewer",
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
		connect: [],
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
				DefaultMonkeyOption.userscript!.description == null ||
				(Array.isArray(DefaultMonkeyOption.userscript!.description) &&
					DefaultMonkeyOption.userscript!.description.length === 0) ||
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
