import { defineConfig } from "vite";
import { ViteUtils } from "./../../vite.utils.mjs";
import { GenerateUserConfig } from "./vite.config.base.mjs";

const utils = new ViteUtils(import.meta.dirname);
const pkg = utils.getPackageJSON();

const userConfig = await GenerateUserConfig({
  projectDirName: utils.dirName,
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
});

export default defineConfig(userConfig);
