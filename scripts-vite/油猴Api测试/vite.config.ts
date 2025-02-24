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
const SCRIPT_NAME = "GM Api Test";
/**
 * 是否是Vue项目
 *
 * + true 启用vue插件
 */
const isVueProject = false;

// 油猴插件配置
const MonkeyOption: Partial<__MonkeyOption__> = {
	userscript: {
		// GM_xmlhttpRequest允许访问的域
		connect: ["*"],
		// 脚本描述
		description: "用于测试您的油猴脚本管理器对油猴函数的支持程度",
		// 脚本图标
		icon: "data:image/png;base64,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",
		// 脚本运行域
		match: ["*://*/*"],
		// 引用库
		require: [],
		grant: ["window.onurlchange", "window.focus", "window.close"],
		// 资源引用
		resource: {
			ViewerCSS: `https://fastly.jsdelivr.net/npm/viewerjs@${pkg.dependencies["viewerjs"]}/dist/viewer.min.css`,
		},
	},
	build: {
		// import库的文件映射
		externalGlobals: {
			// viewerjs: cdn.jsdelivrFastly("Viewer", "dist/viewer.min.js"),
		},
		// import资源文件的映射
		externalResource: {
			// "viewerjs/dist/viewer.css": cdn.jsdelivrFastly(
			// 	"ViewerCSS",
			// 	"dist/viewer.min.css"
			// ),
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
			// "@whitesev/utils": cdn.jsdelivrFastly("Utils", "dist/index.umd.js"),
			// "@whitesev/domutils": cdn.jsdelivrFastly("DOMUtils", "dist/index.umd.js"),
			// "@whitesev/pops": cdn.jsdelivrFastly("pops", "dist/index.umd.js"),
			// qmsg: cdn.jsdelivrFastly("Qmsg", "dist/index.umd.js"),
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
			resource: {},
		},
		build: {
			externalResource: {},
			externalGlobals: {},
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
