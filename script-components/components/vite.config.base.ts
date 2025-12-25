import { type UserConfig, type Plugin } from "vite";
import monkey, { cdn, util, type MonkeyOption as __MonkeyOption__ } from "vite-plugin-monkey";
import { ViteUtils, GetLib, viteUtils } from "../../vite.utils";
import mkcert from "vite-plugin-mkcert";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import fs from "fs";
import path from "path";
import pc from "picocolors";

type OwnMonkeyOption = {
  /**
   * 是否是Vue项目
   *
   * + `true` 启用vue插件依赖
   * @default false
   */
  isVueProject?: boolean;
  /**
   * 是否禁用默认的externalGlobals属性
   * @default false
   */
  disableExternalGlobals?: boolean;
  build: {
    /**
     * 本地化的meta文件
     *
     * 如果设置`false`，则不创建该文件
     * @default true
     */
    metaLocalFileName?: string | boolean | ((fileName: string) => string);
    /**
     * 前提条件，设置了 `metaLocalFileName`
     *
     * 将`@require`的库使用本地引入，用于在`.meta.local.user.js`
     * @example
     * ["@whitesev/utils","file:///..."]
     */
    externalGlobalsLocal?: Record<string, string>;
    /**
     * 前提条件，设置了 `metaLocalFileName`
     *
     * 将`@resource`的库使用本地引入，用于在`.meta.local.user.js`
     * @example
     * ["ElementPlusResourceCSS","file:///..."]
     */
    externalResourceLocal?: Record<string, string>;
  };
};

const baseUtils = new ViteUtils(__dirname);
/**
 * 生成用户配置
 * @param option 配置项
 */
const GenerateUserConfig = async (option: {
  /**
   * 油猴配置
   */
  monkeyOption: Partial<__MonkeyOption__> & OwnMonkeyOption;
  /**
   * vite配置
   */
  userConfig?: UserConfig;
  /**
   * 项目地址
   */
  __dirname: string;
}) => {
  const inheritUtils = new ViteUtils(option.__dirname);
  const pkg = inheritUtils.getPackageJSON();
  let SCRIPT_NAME = option.monkeyOption.userscript.name;
  if (typeof SCRIPT_NAME !== "string") {
    SCRIPT_NAME = Object.values(SCRIPT_NAME).find((it) => typeof it === "string");
  }

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

  let VERSION = "9999.99.99";
  if (process.argv.findIndex((i) => i.startsWith("build")) !== -1) {
    VERSION = inheritUtils.getScriptVersion(!isEmptyOutDir);
  }

  /**
   * cdn是提供给vite-plugin-monkey的配置
   *
   * local是提供给hook使用替换的
   */
  const externalGlobalsConfig = {
    CoverUMD: {
      local: await GetLib("CoverUMD", true),
    },
    "@whitesev/utils": {
      cdn: cdn.jsdelivrFastly("Utils", isMinify ? "dist/index.umd.min.js" : "dist/index.umd.js"),
      local: `file:///${baseUtils.getAbsolutePath(`./../../lib/Utils/dist/index.umd.${isMinify ? "min." : ""}js`)}`,
    },
    "@whitesev/domutils": {
      cdn: cdn.jsdelivrFastly("DOMUtils", isMinify ? "dist/index.umd.min.js" : "dist/index.umd.js"),
      local: `file:///${baseUtils.getAbsolutePath(`./../../lib/DOMUtils/dist/index.umd.${isMinify ? "min." : ""}js`)}`,
    },
    "@whitesev/pops": {
      cdn: cdn.jsdelivrFastly("pops", isMinify ? "dist/index.umd.min.js" : "dist/index.umd.js"),
      local: `file:///${baseUtils.getAbsolutePath(`./../../lib/pops/dist/index.umd.${isMinify ? "min." : ""}js`)}`,
    },
    "@whitesev/data-paging": {
      cdn: cdn.jsdelivrFastly("DataPaging", isMinify ? "dist/index.umd.min.js" : "dist/index.umd.js"),
      local: `file:///${baseUtils.getAbsolutePath(`./../../lib/DataPaging/dist/index.umd.${isMinify ? "min." : ""}js`)}`,
    },
    qmsg: {
      cdn: cdn.jsdelivrFastly("Qmsg", isMinify ? "dist/index.umd.min.js" : "dist/index.umd.js"),
      local: `file:///${baseUtils.getAbsolutePath(`./../../lib/Qmsg/dist/index.umd.${isMinify ? "min." : ""}js`)}`,
    },
    showdown: {
      local: await GetLib("showdown", true),
    },
  };
  /**
   * 默认配置
   */
  let DefaultMonkeyOption: __MonkeyOption__ = {
    /**
     * 脚本入口文件
     * @link file://./src/entrance.ts
     */
    entry: "./src/entrance.ts",
    // 脚本meta信息
    userscript: {
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
      // 自动申请权限，可以不用填上面的grant
      autoGrant: true,
      // import库的文件映射
      externalGlobals: Object.assign(
        {},
        (() => {
          const result = {};
          for (const [key, value] of Object.entries(externalGlobalsConfig)) {
            if ("cdn" in value) {
              result[key] = value.cdn;
            }
          }
          return result;
        })()
      ),
      // import资源文件的映射
      externalResource: {},
      cssSideEffects: (cssText: string) => {
        function addStyle(cssText: string) {
          // @ts-ignore
          if (typeof GM_addStyle == "function") {
            // @ts-ignore
            return GM_addStyle(cssText);
          }
          const $css = document.createElement("style");
          $css.setAttribute("type", "text/css");
          $css.setAttribute("data-type", "gm-css");
          if (globalThis.trustedTypes) {
            // @ts-ignore
            const policy = globalThis.trustedTypes.createPolicy("safe-innerHTML", {
              createHTML: (html: string) => html,
            });
            $css.innerHTML = policy.createHTML(cssText);
          } else {
            $css.innerHTML = cssText;
          }
          (document.head || document.documentElement).appendChild($css);
          return $css;
        }
        addStyle(cssText);
      },
    },
  };
  /**
   * 默认自定义配置
   */
  const DefaultOwnMonkeyOption: Required<OwnMonkeyOption> = {
    isVueProject: option.monkeyOption.isVueProject ?? false,
    disableExternalGlobals: option.monkeyOption.disableExternalGlobals ?? false,
    build: {
      metaLocalFileName: option.monkeyOption?.build?.metaLocalFileName ?? true,
      // 本地映射
      externalGlobalsLocal: Object.assign(
        {},
        (() => {
          let result = {};
          for (const [key, value] of Object.entries(externalGlobalsConfig)) {
            if ("local" in value) {
              result[key] = value.local;
            }
          }
          return result;
        })(),
        option.monkeyOption?.build?.externalGlobalsLocal ?? {}
      ),
      externalResourceLocal: Object.assign({}, option.monkeyOption?.build?.externalResourceLocal ?? {}),
    },
  };
  /* -------------以下配置不需要动------------- */
  /* -------------以下配置不需要动------------- */
  /* -------------以下配置不需要动------------- */
  if (DefaultOwnMonkeyOption.disableExternalGlobals) {
    delete DefaultOwnMonkeyOption.disableExternalGlobals;
    delete option.monkeyOption.disableExternalGlobals;
    if (
      typeof DefaultMonkeyOption.build?.externalGlobals === "object" &&
      DefaultMonkeyOption.build.externalGlobals != null
    ) {
      DefaultMonkeyOption.build!.externalGlobals = {};
    }
  }
  DefaultMonkeyOption = viteUtils.assign(DefaultMonkeyOption, option.monkeyOption, true);
  process.on("exit", (code) => {
    try {
      const dir = option.__dirname; // 当前目录
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

  /**
   * vite配置
   */
  let BaseUserConfig: UserConfig = {
    plugins: [mkcert()],
    resolve: {
      alias: {
        "@": inheritUtils.getAbsolutePath("./src"),
        "@lib": baseUtils.getAbsolutePath("./../../lib"),
        "@components": baseUtils.getAbsolutePath("./src"),
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

  if (option.userConfig) {
    BaseUserConfig = viteUtils.assign(BaseUserConfig, option.userConfig, true);
  }

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
          (Array.isArray(DefaultMonkeyOption.userscript!.match) && DefaultMonkeyOption.userscript!.match.length === 0)
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
  if (DefaultOwnMonkeyOption.isVueProject) {
    // 添加vue插件
    BaseUserConfig.plugins!.push(
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
          ElementPlusResourceCSS: `https://fastly.jsdelivr.net/npm/element-plus@${
            pkg.devDependencies["element-plus"] || pkg.dependencies["element-plus"]
          }/dist/index.min.css`,
        },
      },
      build: {
        externalResource: {
          "element-plus/dist/index.css": (pkg) =>
            `https://fastly.jsdelivr.net/npm/${pkg.name}@${pkg.version}}/dist/index.css`,
        },
        externalGlobals: {
          vue: cdn.jsdelivrFastly("Vue", "dist/vue.global.prod.js").concat(util.dataUrl(";window.Vue||=Vue;")),
          "vue-demi": cdn.jsdelivrFastly("VueDemi", "lib/index.iife.min.js"),
          pinia: cdn.jsdelivrFastly("Pinia", "dist/pinia.iife.prod.js"),
          "vue-router": cdn.jsdelivrFastly("VueRouter", "dist/vue-router.global.js"),
          "element-plus": cdn.jsdelivrFastly("ElementPlus", "dist/index.full.min.js"),
          "@element-plus/icons-vue": cdn.jsdelivrFastly("ElementPlusIconsVue", "dist/index.iife.min.js"),
        },
      },
    };
    DefaultMonkeyOption = viteUtils.assign(DefaultMonkeyOption, VueMonkeyOption, true);
  }

  // 添加油猴插件
  // @grant不用管，使用import GM_xxx from "ViteGM"会自动添加
  // 设置版本号
  DefaultMonkeyOption.userscript!.version = VERSION;
  // 设置构建的文件名
  DefaultMonkeyOption.build!.fileName = FILE_NAME;
  // 添加@require
  DefaultMonkeyOption.userscript!.require!.splice(0, 0, await GetLib("CoverUMD"));

  // 对vite-plugin-monkey插件进行hook
  const MonkeyHookPlugin: Plugin = {
    name: "vite-plugin-monkey-hook",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url;
        if (!url.includes("vite-plugin-monkey.install.user.js")) {
          return next();
        }
        const originEnd = res.end;
        res.end = (...args: any[]) => {
          let text: string = args[0];
          if (typeof text === "string" && text.trim().match(/^\/\/[\s]+==UserScript==/)) {
            // version <7.2.2
            // when script inject too fast, document.head is null
            // this replace can fix this bug
            text = text.replaceAll("document.head", "(document.head || document.documentElement)");
            // ↓ collect GM API to fix cannot find GM API in global
            // for example dev in via or x browser
            const textSplit = text.split("\n");
            const userScriptMetaEndIndex = textSplit.findIndex((item) =>
              item.trim().match(/^\/\/[\s]+==\/UserScript==/)
            );
            const collectGrant: string[] = [];
            textSplit.forEach((item, index) => {
              item = item.trim();
              const grantApiMatcher = item.match(/^\/\/[\s]+@grant[\s]+/);
              if (grantApiMatcher) {
                const grantApi = item.replace(grantApiMatcher[grantApiMatcher.length - 1], "").trim();
                if (grantApi.startsWith("window.") || grantApi.startsWith("GM.")) {
                  // ignore window.* API
                  // ignore GM.* API
                  return;
                }
                collectGrant.push(grantApi);
              }
            });
            textSplit.splice(
              userScriptMetaEndIndex + 1,
              0,
              /*js*/ `
;(()=>{
	const needRepairGMApi = {};
	if (typeof unsafeWindow !== "undefined" && unsafeWindow == window || typeof unsafeWindow === "undefined") {
		console.log("[vite-plugin-monkey] window == unsafeWindow start check and repair GM api with this env");
		if (window.GM == null && typeof GM === "object") {
			Reflect.set(needRepairGMApi, "GM", GM);
		}

		${collectGrant
      .map(
        (it) => `if (
			typeof ${it} !== "undefined" &&
			${it} != null &&
			window.${it} == null
		) {
			Reflect.set(needRepairGMApi, "${it}", ${it});
		}`
      )
      .join("\n\n		")}
	}
	Object.freeze(needRepairGMApi);
	if (Object.keys(needRepairGMApi).length > 0) {
		console.log("[vite-plugin-monkey] repair GM api info ↓");
		console.table(needRepairGMApi, Object.keys(needRepairGMApi));
		const now = Date.now();
		Reflect.set(document, "__monkeyApi-repair-" + now, needRepairGMApi);
		for (const key in needRepairGMApi) {
			if (!Object.hasOwn(needRepairGMApi, key)) continue;
			const value = needRepairGMApi[key];
			Reflect.set(window, key, value);
		}
	}
})();`
            );
            text = textSplit.join("\n");
            args[0] = text;
            console.log(pc.green("success modify [vite-plugin-monkey] dev .install.user.js"));
          }
          return originEnd.apply(res, args);
        };
        next();
      });
    },
    writeBundle(options, bundle) {
      const isBuild = process.argv.includes("build");
      if (!isBuild) {
        return;
      }
      if (
        typeof DefaultOwnMonkeyOption.build.metaLocalFileName === "boolean" &&
        !DefaultOwnMonkeyOption.build.metaLocalFileName
      ) {
        return;
      }
      /**
       * format file size
       * @param bytes 字节数
       */
      const formatFileSize = (bytes: number): string => {
        if (bytes < 1024) return bytes + " B";
        const kb = bytes / 1024;
        if (kb < 1024) return `${kb.toFixed(1)} KB`;
        const mb = kb / 1024;
        if (mb < 1024) return `${mb.toFixed(1)} MB`;
        const gb = mb / 1024;
        return `${gb.toFixed(1)} GB`;
      };
      for (const fileName in bundle) {
        if (!fileName.endsWith(".meta.js")) {
          continue;
        }
        let localMetaFileName = fileName.replace(/\.meta\.js$/gi, "");
        const chunk = bundle[fileName];
        const filePath = path.join(options.dir, fileName);
        const content = fs.readFileSync(filePath, "utf-8");
        const splitContent = content.split("\n");
        let insertIndex = -1;
        let inserRequireSpace = " ";
        let metaEndIndex = -1;
        for (let index = splitContent.length - 1; index >= 0; index--) {
          // reverse loop because @require info in meta.js is end
          const metaItem = splitContent[index].trim();
          if (metaEndIndex === -1 && metaItem.startsWith("// ==/UserScript==")) {
            metaEndIndex = index;
          }
          const requireMatch = metaItem.match(/^\/\/[\s]+@require([\s]+)/i);
          if (requireMatch) {
            inserRequireSpace = requireMatch[requireMatch.length - 1];
            insertIndex = index;
            break;
          } else if (insertIndex === -1 && metaItem.startsWith("// ==UserScript==")) {
            // start
            insertIndex = metaEndIndex;
          }
        }
        for (let index = 0; index < splitContent.length; index++) {
          let metaItem = splitContent[index];
          // replace require lib link to local link
          const requireMatch = metaItem.match(/^\/\/[\s]+@require([\s]+)/i);
          const resourceMatch = metaItem.match(/^\/\/[\s]+@resource([\s]+)/i);
          if (requireMatch) {
            metaItem = metaItem.replace(requireMatch[0], "");
            for (const [requiredMatchKey, requiredUrl] of Object.entries(
              DefaultOwnMonkeyOption.build.externalGlobalsLocal
            )) {
              if (metaItem.includes(requiredMatchKey)) {
                splitContent[index] = `// @require${inserRequireSpace}${requiredUrl}`;
                break;
              }
            }
          } else if (resourceMatch) {
            let insertResourceSpace = resourceMatch[1];
            let metaEndStr = metaItem.replace(resourceMatch[0], "").trim();
            let resourceKey = metaEndStr.split(" ")[0];
            let metaAfterResouceStr = metaEndStr.replace(resourceKey, "").match(/^([\s]+)/)[1];
            for (const [resourceMatchKey, resourceUrl] of Object.entries(
              DefaultOwnMonkeyOption.build.externalResourceLocal
            )) {
              if (resourceKey === resourceMatchKey) {
                splitContent[index] =
                  `// @resource${insertResourceSpace}${resourceKey}${metaAfterResouceStr}${resourceUrl}`;
              }
            }
          }
        }
        const localMainFilePath = `${options.dir}\\${SCRIPT_NAME}.user.js`;
        const localMainFileRequire = `// @require${inserRequireSpace}file:///${localMainFilePath}`;
        splitContent.splice(insertIndex + 1, 0, localMainFileRequire);

        localMetaFileName = `${localMetaFileName}.meta.local.user.js`;
        if (typeof DefaultOwnMonkeyOption.build.metaLocalFileName === "string") {
          localMetaFileName = DefaultOwnMonkeyOption.build.metaLocalFileName;
        } else if (typeof DefaultOwnMonkeyOption.build.metaLocalFileName === "function") {
          localMetaFileName = DefaultOwnMonkeyOption.build.metaLocalFileName(localMetaFileName);
        }
        const metaLocalFilePath = `${options.dir}\\${localMetaFileName}`;
        fs.writeFileSync(metaLocalFilePath, splitContent.join("\n"));

        const metaLocalFileSize = fs.statSync(metaLocalFilePath).size;
        console.log(pc.green(metaLocalFilePath) + `   ${pc.gray(formatFileSize(metaLocalFileSize))}`);
      }
    },
  };
  BaseUserConfig.plugins!.push(MonkeyHookPlugin);
  BaseUserConfig.plugins!.push(monkey(DefaultMonkeyOption));
  // https://vitejs.dev/config/
  return BaseUserConfig;
};

export { GenerateUserConfig, baseUtils };
