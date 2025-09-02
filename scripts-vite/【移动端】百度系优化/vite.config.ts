import { defineConfig } from "vite";
import { cdn } from "vite-plugin-monkey";
import { ViteUtils, GetLib, viteUtils } from "./../../vite.utils";
import { GenerateUserConfig } from "./../../script-components/components/base.vite.config";

const Utils = new ViteUtils(__dirname);
const pkg = Utils.getPackageJSON();

let userConfig = await GenerateUserConfig({
	__dirname: __dirname,
	monkeyOption: {
		isVueProject: true,
		userscript: {
			name: "【移动端】百度系优化",
			// GM_xmlhttpRequest允许访问的域
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
				"viewerjs/dist/viewer.css": cdn.jsdelivrFastly("Viewer", "dist/viewer.min.css"),
			},
		},
	},
});

export default defineConfig(userConfig);
