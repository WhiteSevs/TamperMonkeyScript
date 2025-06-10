import { defineConfig } from "vite";
import { cdn } from "vite-plugin-monkey";
import { ViteUtils, GetLib, viteUtils } from "./../../vite.utils";
import { GenerateUserConfig } from "./../../script-components/components/base.vite.config";

const Utils = new ViteUtils(__dirname);
const pkg = Utils.getPackageJSON();

let userConfig = await GenerateUserConfig({
	__dirname: __dirname,
	monkeyOption: {
		userscript: {
			name: "",
			// GM_xmlhttpRequest允许访问的域
			connect: [""],
			// 脚本描述
			description: "",
			// 脚本图标
			icon: "",
			// 脚本运行域
			match: [""],
			// 引用库
			require: [],
			// 资源引用
			resource: {
				// ViewerCSS: `https://fastly.jsdelivr.net/npm/viewerjs@${pkg.dependencies["viewerjs"]}/dist/viewer.min.css`,
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
				// 	"Viewer",
				// 	"dist/viewer.min.css"
				// ),
			},
		},
	},
	userConfig: {
		resolve: {
			alias: {
				"@": Utils.getAbsolutePath("./src"),
				"@lib": Utils.getAbsolutePath("./../../lib"),
				"@components": Utils.getAbsolutePath("./../../script-components/src"),
			},
		},
	},
});

export default defineConfig(userConfig);
