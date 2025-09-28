import { DebugToolVersionConfig } from "./DebugToolVersionConfig";

/** 全局调试工具的配置 */
export const DebugToolConfig = {
  eruda: {
    /** 版本号 */
    version: DebugToolVersionConfig.eruda.version,
    /** 项目地址 */
    homeUrl: "https://github.com/liriliri/eruda",
    /** 项目最新的js文件地址 */
    latestFileUrl: "https://cdn.jsdelivr.net/npm/eruda",
    /** 设置文档 */
    settingDocUrl: "https://github.com/liriliri/eruda/blob/master/README.md",
  },
  vConsole: {
    /** 版本号 */
    version: DebugToolVersionConfig.vconsole.version,
    /** 项目地址 */
    homeUrl: "https://github.com/Tencent/vConsole",
    /** 项目最新的js文件地址 */
    latestFileUrl: "https://cdn.jsdelivr.net/npm/vconsole",
    /** 设置文档 */
    settingDocUrl: "https://github.com/Tencent/vConsole/blob/dev/README_CN.md",
  },
  pageSpy: {
    /** 版本号 */
    version: DebugToolVersionConfig["@huolala-tech/page-spy-browser"].version,
    /** 项目地址 */
    homeUrl: "https://github.com/HuolalaTech/page-spy-web",
    /** 项目最新的js文件地址 */
    latestFileUrl: "https://github.com/HuolalaTech/page-spy/tree/main/packages/page-spy-browser",
    /** 设置文档 */
    settingDocUrl: "https://github.com/HuolalaTech/page-spy-web/blob/main/README_ZH.md",
    /** 默认配置 */
    defaultConfig: {
      api: "pagespy.jikejishu.com",
      cliennOrigin: "https://pagespy.jikejishu.com",
    },
  },
  chii: {
    /** 项目地址 */
    homeUrl: "https://github.com/liriliri/chii",
    /** 设置文档 */
    settingDocUrl: "https://github.com/liriliri/chii/blob/master/README_CN.md",
    /** 默认配置 */
    defaultConfig: {
      url: "https://chii.liriliri.io/",
      scriptJs: "//chii.liriliri.io/target.js",
    },
  },
};
