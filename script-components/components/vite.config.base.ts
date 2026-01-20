import vue from "@vitejs/plugin-vue";
import fs from "fs";
import path from "path";
import pc from "picocolors";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { type Plugin, type UserConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import monkey, { cdn, type MonkeyOption as __MonkeyOption__ } from "vite-plugin-monkey";
import { GetLib, ViteUtils, viteUtils } from "../../vite.utils";

type IArray<T> = T[] | T;

type SuperMonkeyOption = {
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
     *
     * ["用于匹配原始@require的字符串", "本地文件路径"]
     * @example
     * ["@whitesev/utils","file:///..."]
     */
    externalLocalRequire?: Record<string, string>;
    /**
     * 前提条件，设置了 `metaLocalFileName`
     *
     * 将`@resource`的库使用本地引入，用于在`.meta.local.user.js`
     *
     * ["用于匹配原始@resource的字符串", "本地文件路径"]
     * @example
     * ["ElementPlusResourceCSS","file:///..."]
     */
    externalLocalResouce?: Record<string, string>;
  };
  userscript: {
    /**
     * 其它脚本管理器的权限Api（请手动添加需要申请的权限，目前暂未适配autoGrant=true）
     */
    otherGrant?: IArray<
      | "GM.ChromeXt"
      | "CAT_userConfig"
      | "CAT_fileStorage"
      | "CAT_scriptLoaded"
      | "CAT_setProxy"
      | "CAT_clearProxy"
      | "CAT_click"
    >;
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
  monkeyOption: Partial<__MonkeyOption__> & SuperMonkeyOption;
  /**
   * vite配置
   */
  userConfig?: UserConfig;
  /**
   * 项目地址
   */
  __dirname: string;
}) => {
  /**
   * 当前是否是build模式
   */
  const isBuild = process.argv.findIndex((i) => i.startsWith("build")) !== -1;
  const inheritUtils = new ViteUtils(option.__dirname);
  const pkg = inheritUtils.getPackageJSON();
  let SCRIPT_NAME = option.monkeyOption.userscript.name;
  if (typeof SCRIPT_NAME !== "string") {
    SCRIPT_NAME = Object.values(SCRIPT_NAME).find((it) => typeof it === "string");
  }

  /**
   * 用户脚本文件名
   */
  let FILE_NAME = SCRIPT_NAME + ".user.js";

  /**
   * 是否压缩代码
   */
  let isMinify: boolean | "esbuild" | "terser" = false;
  if (process.argv.includes("--minify")) {
    isMinify = "esbuild";
    FILE_NAME = SCRIPT_NAME + ".min.user.js";
  }

  /**
   * 是否清空输出目录
   */
  let isEmptyOutDir = true;
  if (process.argv.includes("--no-empty-outDir")) {
    isEmptyOutDir = false;
  }
  /**
   * dev模式或本地打包的版本号
   */
  const devOrLocalVersion = "9999.99.99";
  let VERSION = devOrLocalVersion;
  if (isBuild) {
    VERSION = inheritUtils.getScriptVersion(!isEmptyOutDir);
  }

  /**
   * cdn是提供给vite-plugin-monkey的配置
   *
   * key: {
   *   cdn: string;
   *   local: string;
   *   importName?: string;
   * }
   *
   * `key`：用于匹配的字符串
   * `importName`：是在ts中直接import xx from 'xx' 中引用的名称
   * `cdn`：是提供给vite-plugin-monkey使用的cdn
   * `local`：是提供给hook使用替换的
   */
  const externalRequireConfig = {
    CoverUMD: {
      local: GetLib("CoverUMD", true),
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
      local: GetLib("showdown", true),
    },
    "Element-Plus": {
      cdn: (async () => {
        const url = await GetLib("element-plus", false);
        return isMinify ? url : url.replace("min.js", "js");
      })(),
      local: `file:///${baseUtils.getAbsolutePath(`./../../lib/Element-Plus/index.full.${isMinify ? "min." : ""}js`)}`,
    },
    viewerjs: {
      cdn: cdn.jsdelivrFastly("Viewer", isMinify ? "dist/viewer.min.js" : "dist/viewer.js"),
    },
    "crypto-js": {
      requireMatch: "/lib/CryptoJS/index.js",
      local: GetLib("Crypto-JS", true),
      importName: "crypto-js",
      cdn: GetLib("Crypto-JS", false),
    },
    "网盘链接识别-图标": {
      requireMatch: encodeURIComponent("网盘链接识别-图标.js"),
      local: GetLib("网盘链接识别-图标", true),
    },
  };
  /**
   * cdn是提供给vite-plugin-monkey的配置
   *
   *
   * key: {
   *   name: string;
   *   cdn: string;
   *   local: string;
   * }
   *
   * `key`：用于匹配的字符串
   * `name`：用于GM_getResource使用的名称
   * `cdn`：是提供给vite-plugin-monkey使用的cdn
   * `local`：是提供给hook使用替换的
   *
   */
  const externalResouceConfig = {
    "viewerjs/dist/viewer.css": {
      name: "ViewerCSS",
      cdn: `https://fastly.jsdelivr.net/npm/viewerjs@${pkg.dependencies["viewerjs"]}/dist/viewer${isMinify ? ".min" : ""}.css`,
    },
  };
  /**
   * 默认配置
   */
  let defaultMonkeyOption: __MonkeyOption__ = {
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
      // 通过import导入库文件的cdn映射
      externalGlobals: Object.assign(
        {},
        await (async () => {
          const result = {};
          for (const [key, value] of Object.entries(externalRequireConfig)) {
            if ("cdn" in value) {
              const libName = "importName" in value ? value.importName : key;
              result[libName] = await value.cdn;
            }
          }
          return result;
        })()
      ),
      // 通过import导入资源文件的cdn映射
      externalResource: Object.assign({}),
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
  const defaultSuperMonkeyOption: Required<SuperMonkeyOption> = {
    isVueProject: option.monkeyOption.isVueProject ?? false,
    disableExternalGlobals: option.monkeyOption.disableExternalGlobals ?? false,
    build: {
      metaLocalFileName: option.monkeyOption?.build?.metaLocalFileName ?? true,
      // 本地映射
      externalLocalRequire: Object.assign(
        {},
        await (async () => {
          let result = {};
          for (const [key, value] of Object.entries(externalRequireConfig)) {
            if ("local" in value) {
              const libName = "requireMatch" in value ? value.requireMatch : key;
              result[libName] = await value.local;
            }
          }
          return result;
        })(),
        option.monkeyOption?.build?.externalLocalRequire ?? {}
      ),
      externalLocalResouce: Object.assign(
        {},
        (() => {
          let result = {};
          for (const [key, value] of Object.entries(externalResouceConfig)) {
            if ("local" in value) {
              result[key] = value.local;
            }
          }
          return result;
        })(),
        option.monkeyOption?.build?.externalLocalResouce ?? {}
      ),
    },
    userscript: {
      otherGrant: option.monkeyOption?.userscript?.otherGrant ?? [],
    },
  };
  /* -------------以下配置不需要动------------- */
  /* -------------以下配置不需要动------------- */
  /* -------------以下配置不需要动------------- */
  if (defaultSuperMonkeyOption.disableExternalGlobals) {
    delete defaultSuperMonkeyOption.disableExternalGlobals;
    delete option.monkeyOption.disableExternalGlobals;
    if (
      typeof defaultMonkeyOption.build?.externalGlobals === "object" &&
      defaultMonkeyOption.build.externalGlobals != null
    ) {
      defaultMonkeyOption.build!.externalGlobals = {};
    }
  }
  defaultMonkeyOption = viteUtils.assign(defaultMonkeyOption, option.monkeyOption, true);
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

  const plugins = BaseUserConfig.plugins!;

  if (option.userConfig) {
    BaseUserConfig = viteUtils.assign(BaseUserConfig, option.userConfig, true);
  }

  // 完善油猴配置
  if (defaultMonkeyOption.userscript!.resource == null) {
    defaultMonkeyOption.userscript!.resource = {};
  }
  if (!Array.isArray(defaultMonkeyOption.userscript.require)) {
    defaultMonkeyOption.userscript!.require = [];
  }

  const CheckOptionList = [
    {
      checkFn: () => {
        return (
          typeof defaultMonkeyOption.userscript!.icon !== "string" ||
          (typeof defaultMonkeyOption.userscript!.icon === "string" &&
            defaultMonkeyOption.userscript!.icon.trim() === "")
        );
      },
      msg: "Error：是不是忘记填 MonkeyOption.userscript.icon 了？不填会显得脚本有点儿不友好呢~",
    },
    {
      checkFn: () => {
        return (
          defaultMonkeyOption.userscript!.description == null ||
          (Array.isArray(defaultMonkeyOption.userscript!.description) &&
            defaultMonkeyOption.userscript!.description.length === 0) ||
          (typeof defaultMonkeyOption.userscript!.description === "string" &&
            defaultMonkeyOption.userscript!.description.trim() === "")
        );
      },
      msg: "Error：是不是忘记填 MonkeyOption.userscript.description 了？不填没人知道脚本是干嘛的呢~",
    },
    {
      checkFn: () => {
        return (
          !Array.isArray(defaultMonkeyOption.userscript.match) ||
          (Array.isArray(defaultMonkeyOption.userscript!.match) && defaultMonkeyOption.userscript!.match.length === 0)
        );
      },
      msg: "Error：是不是忘记填 MonkeyOption.userscript.match 了？不填脚本没法运行哦~",
    },
  ];

  for (let index = 0; index < CheckOptionList.length; index++) {
    const checkOption = CheckOptionList[index];
    if (checkOption.checkFn()) {
      console.error(checkOption.msg);
      console.error(defaultMonkeyOption);
      process.exit(0);
    }
  }
  if (defaultSuperMonkeyOption.isVueProject) {
    // 添加vue插件
    plugins.push(
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
    const elementPlus_cdn = await externalRequireConfig["Element-Plus"].cdn;
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
          vue: cdn.jsdelivrFastly("Vue", "dist/vue.global.prod.js"),
          "vue-demi": cdn.jsdelivrFastly("VueDemi", "lib/index.iife.min.js"),
          pinia: cdn.jsdelivrFastly("Pinia", "dist/pinia.iife.prod.js"),
          "vue-router": cdn.jsdelivrFastly("VueRouter", "dist/vue-router.global.js"),
          // "element-plus": cdn.jsdelivrFastly("ElementPlus", "dist/index.full.min.js"),
          "element-plus": ["ElementPlus", () => elementPlus_cdn],
          "@element-plus/icons-vue": cdn.jsdelivrFastly("ElementPlusIconsVue", "dist/index.iife.min.js"),
        },
      },
    };
    defaultMonkeyOption = viteUtils.assign(defaultMonkeyOption, VueMonkeyOption, true);
  }

  // 添加油猴插件
  // @grant不用管，使用import GM_xxx from "ViteGM"会自动添加
  // 设置版本号
  defaultMonkeyOption.userscript!.version = VERSION;
  // 设置构建的文件名
  defaultMonkeyOption.build!.fileName = FILE_NAME;
  // 添加@require
  defaultMonkeyOption.userscript!.require!.splice(0, 0, await GetLib("CoverUMD"));

  // 其它脚本管理器的Api引用
  const otherGrant = defaultSuperMonkeyOption.userscript.otherGrant;
  if (Array.isArray(otherGrant)) {
    if (Array.isArray(defaultMonkeyOption.userscript.grant)) {
      defaultMonkeyOption.userscript!.grant = defaultMonkeyOption.userscript!.grant.concat(
        // @ts-expect-error
        otherGrant
      );
    } else {
      // @ts-expect-error
      defaultMonkeyOption.userscript!.grant = otherGrant;
    }
  }
  const LibTag = defaultMonkeyOption.clientAlias ?? "ViteGM";
  const LibInfo = [
    {
      name: LibTag + "ChromeXt",
      code: /*js*/ `
      const _ChromeXt = /* @__PURE__ */ (() => typeof ChromeXt != "undefined" ? ChromeXt : typeof GM === "object" && GM != null && typeof GM.ChromeXt !== "undefined" ? GM.ChromeXt : void 0)();
      export { _ChromeXt as ChromeXt };
      `,
    },
    {
      name: LibTag + "ScriptCat",
      code: /*js*/ `
      ${["CAT_userConfig", "CAT_fileStorage", "CAT_scriptLoaded", "CAT_setProxy", "CAT_clearProxy", "CAT_click"]
        .map((it) => {
          return `
          const _${it} = /* @__PURE__ */ (() => typeof ${it} != "undefined" ? ${it} : void 0)();
          export { _${it} as ${it} };
          `;
        })
        .join("\n")}
      `,
    },
  ];
  const LibName = LibInfo.map((it) => it.name);
  const VirtualLibName = LibName.map((it) => "\0" + it);
  const ScriptManagerTransformPlugin: Plugin = {
    name: "hook:vite-plugin-monkey:script-manager-transform-api",
    enforce: "pre",
    apply(config, mode) {
      return mode.command === "build" || mode.command === "serve";
    },
    resolveId(source) {
      if (LibName.includes(source)) {
        return "\0" + source;
      }
    },
    load(id) {
      if (VirtualLibName.includes(id)) {
        const name = id.slice(1);
        const code = LibInfo.find((it) => it.name === name).code;
        if (typeof code === "string") {
          return code;
        }
      }
    },
  };
  /**
   * UserScript的meta的解析器
   */
  const ParseUserScriptMeta = (
    meta: string
  ):
    | {
        /**
         * 在//和@中间的空格
         */
        spaceBeforeAt: string;
        /**
         * 在key后面的空格
         */
        spaceAfterKey: string;
        /**
         * @后面的名称，如@name、@version、@require等
         */
        key: string;
        /**
         * key后面的值（已去除左右空格）
         */
        value: string;
      }
    | undefined => {
    // 必须是 // @xx 这种类型
    const atMatcher = meta.match(/[\s]*\/\/[\s]+@/);
    if (!atMatcher) return;

    const spaceBeforeAtMatcher = meta.match(/[\s]*\/\/([\s]+)@/);
    let spaceBeforeAt = "";
    if (spaceBeforeAtMatcher?.length >= 2) {
      spaceBeforeAt = spaceBeforeAtMatcher[1];
    }

    const keyMatcher = meta.match(/[\s]*\/\/[\s]+@([\w-]+)/);
    // 必须匹配到键
    if (!keyMatcher || keyMatcher.length < 2) return;
    const key = keyMatcher[1];

    const spaceAfterKeyMatcher = meta.match(/[\s]*\/\/[\s]+@[\w-]+([\s]+)/);
    let spaceAfterKey = "";
    if (spaceAfterKeyMatcher?.length >= 2) {
      spaceAfterKey = spaceAfterKeyMatcher[1];
    }

    const valueMatcher = meta.match(/[\s]*\/\/[\s]+@[\w-]+([\s\S]+)/);
    // 必须匹配到值
    if (!valueMatcher || valueMatcher.length < 2) return;
    const value = valueMatcher[1].trim();
    // 不能为空
    if (value === "") return;

    return {
      spaceBeforeAt,
      spaceAfterKey,
      key,
      value,
    };
  };
  // 对vite-plugin-monkey插件进行hook
  const SuperMonkeyPlugin: Plugin = {
    name: "hook:vite-plugin-monkey",
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
              const metaItemInfo = ParseUserScriptMeta(item);
              if (!metaItemInfo) return;
              if (metaItemInfo.key === "grant") {
                const grantApi = metaItemInfo.value;
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
      if (!isBuild) {
        return;
      }
      if (
        typeof defaultSuperMonkeyOption.build.metaLocalFileName === "boolean" &&
        !defaultSuperMonkeyOption.build.metaLocalFileName
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
          const metaItemInfo = ParseUserScriptMeta(metaItem);
          if (!metaItemInfo) {
            continue;
          }
          if (metaEndIndex === -1 && metaItem.startsWith("// ==/UserScript==")) {
            metaEndIndex = index;
          }
          if (metaItemInfo.key === "require") {
            inserRequireSpace = metaItemInfo.spaceAfterKey;
            insertIndex = index;
            break;
          } else if (insertIndex === -1 && metaItem.startsWith("// ==UserScript==")) {
            // start
            insertIndex = metaEndIndex;
          }
        }
        for (let index = 0; index < splitContent.length; index++) {
          let metaItem = splitContent[index];
          const metaItemInfo = ParseUserScriptMeta(metaItem);
          if (!metaItemInfo) {
            continue;
          }
          // replace require lib link to local link
          if (metaItemInfo.key === "require") {
            for (const [requiredMatchKey, requiredUrl] of Object.entries(
              defaultSuperMonkeyOption.build.externalLocalRequire
            )) {
              if (metaItemInfo.value.includes(requiredMatchKey)) {
                splitContent[index] =
                  `//${metaItemInfo.spaceBeforeAt}@${metaItemInfo.key}${metaItemInfo.spaceAfterKey}${requiredUrl}`;
                break;
              }
            }
          } else if (metaItemInfo.key === "resource") {
            for (const [resourceKey, resourceUrl] of Object.entries(
              defaultSuperMonkeyOption.build.externalLocalResouce
            )) {
              const resourceKeyMatcher = metaItemInfo.value.match(/(.+?)[\s]+[\S]+/);
              if (resourceKeyMatcher) {
                const __resourceKey = resourceKeyMatcher[1];
                if (__resourceKey === resourceKey) {
                  splitContent[index] =
                    `//${metaItemInfo.spaceBeforeAt}@${metaItemInfo.key}${metaItemInfo.spaceAfterKey}${resourceUrl}`;
                }
              }
            }
          }
        }
        const localMainFilePath = `${options.dir}\\${SCRIPT_NAME}.user.js`;
        const localMainFileRequire = `// @require${inserRequireSpace}file:///${localMainFilePath}`;
        splitContent.splice(insertIndex + 1, 0, localMainFileRequire);

        // 本地meta文件名
        localMetaFileName = `${localMetaFileName}.meta.local.user.js`;
        // meta文件内容
        const metaLocalContentSplitList = [].concat(splitContent);
        for (let index = 0; index < metaLocalContentSplitList.length; index++) {
          const metaItem = metaLocalContentSplitList[index];
          const metaItemInfo = ParseUserScriptMeta(metaItem);
          if (!metaItemInfo) {
            continue;
          }
          // 处理版本号
          if (metaItemInfo.key === "version") {
            metaLocalContentSplitList[index] =
              `//${metaItemInfo.spaceBeforeAt}@${metaItemInfo.key}${metaItemInfo.spaceAfterKey}${devOrLocalVersion}`;
            break;
          }
        }
        if (typeof defaultSuperMonkeyOption.build.metaLocalFileName === "string") {
          localMetaFileName = defaultSuperMonkeyOption.build.metaLocalFileName;
        } else if (typeof defaultSuperMonkeyOption.build.metaLocalFileName === "function") {
          localMetaFileName = defaultSuperMonkeyOption.build.metaLocalFileName(localMetaFileName);
        }
        const metaLocalFilePath = `${options.dir}\\${localMetaFileName}`;
        fs.writeFileSync(metaLocalFilePath, metaLocalContentSplitList.join("\n"));

        const metaLocalFileSize = fs.statSync(metaLocalFilePath).size;
        console.log(pc.green(metaLocalFilePath) + `   ${pc.gray(formatFileSize(metaLocalFileSize))}`);
      }
    },
  };

  plugins.push([ScriptManagerTransformPlugin, SuperMonkeyPlugin]);
  plugins.push(monkey(defaultMonkeyOption));

  // https://vitejs.dev/config/
  return BaseUserConfig;
};

export { baseUtils, GenerateUserConfig };
