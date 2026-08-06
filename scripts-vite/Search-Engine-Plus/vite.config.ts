import { defineConfig } from "vite";
import { cdn } from "vite-plugin-monkey";
import { ViteUtils, GetLib, viteUtils } from "./../../vite.utils";
import { GenerateUserConfig } from "./../../script-components/components/vite.config.base";

const Utils = new ViteUtils(__dirname);
const pkg = Utils.getPackageJSON();

const userConfig = await GenerateUserConfig({
  __dirname: __dirname,
  gitProjectPath: "scripts-vite/Search-Engine-Plus",
  monkeyOption: {
    userscript: {
      name: "SearchEnginePlus",
      // GM_xmlhttpRequest允许访问的域
      connect: ["www.baidu.com", "cn.bing.com", "www.bing.com"],
      // 脚本描述
      description: "搜索页面优化，包含以下搜索引擎：百度搜索、谷歌、Bing",
      // 脚本图标
      icon: "data:image/png;base64,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",
      // 脚本运行域
      match: [
        // 百度
        "*://ipv6.baidu.com/*",
        "*://www.baidu.com/*",
        "*://www1.baidu.com/*",
        "*://m.baidu.com/*",
        "*://*.google.com/search*",
        "*://*.google.com.hk/search*",
        "*://s.cn.bing.net/search*",
        "*://www.bing.com/search*",
        "*://cn.bing.com/search*",
      ],
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
});

export default defineConfig(userConfig);
