import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, { cdn, util } from 'vite-plugin-monkey';
import { SCRIPT_NAME } from "./vite.build"
import Icons from 'unplugin-icons/dist/vite'
import IconsResolver from 'unplugin-icons/dist/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { Utils, GetLib } from "./vite.utils"



let FILE_NAME = SCRIPT_NAME + ".user.js";
/* 是否压缩代码 */
let isMinify = false;
if (process.argv.includes("--minify")) {
  isMinify = true;
  FILE_NAME = SCRIPT_NAME + ".min.user.js";
}
let isEmptyOutDir = true;
if (process.argv.includes("--no-empty-outDir")) {
  isEmptyOutDir = false;
}
const VERSION = Utils.getScriptVersion(!isEmptyOutDir);
const RequireLib = await GetLib([
  "CoverUMD",
  "Viewer",
  "Qmsg",
  "pops",
  "Utils",
  "DOMUtils",
  "showdown"
]);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: SCRIPT_NAME,
        icon: 'https://www.baidu.com/favicon.ico',
        namespace: 'https://github.com/WhiteSevs/TamperMonkeyScript',
        supportURL: "https://github.com/WhiteSevs/TamperMonkeyScript/issues",
        version: VERSION,
        author: "WhiteSevs",
        "run-at": "document-start",
        "description": "用于【移动端】的百度系列产品优化，包括【百度搜索】、【百家号】、【百度贴吧】、【百度文库】、【百度经验】、【百度百科】、【百度知道】、【百度翻译】、【百度图片】、【百度地图】、【百度好看视频】、【百度爱企查】、【百度问题】、【百度识图】等",
        match: [
          "*://*.baidu.com/*",
          "*://www.tieba.com/*",
          "*://uf9kyh.smartapps.cn/*",
        ],
        connect: [
          "www.baidu.com",
          "m.baidu.com",
          "tieba.baidu.com",
          "www.tieba.com",
          "baike.baidu.com",
          "chat.baidu.com",
          "chat-ws.baidu.com"
        ],
        grant: [
          "GM_addStyle",
          "GM_registerMenuCommand",
          "GM_unregisterMenuCommand",
          "GM_getValue",
          "GM_setValue",
          "GM_deleteValue",
          "GM_xmlhttpRequest",
          "GM_info",
          "unsafeWindow"
        ],
        require: RequireLib,
        resource: {
          "ElementPlusResourceCSS": "https://cdn.jsdelivr.net/npm/element-plus@2.7.2/dist/index.min.css",
        },
      },
      clientAlias: "ViteGM",
      server: {
        mountGmApi: false,
        open: true,
      },
      build: {
        autoGrant: true,
        externalResource: {
          'element-plus/dist/index.css': cdn.jsdelivr(),
        },
        fileName: FILE_NAME,
        externalGlobals: {
          "vue": cdn.jsdelivr('Vue', 'dist/vue.global.prod.js').concat(util.dataUrl("window.Vue=Vue;")),
          "vue-router": cdn.jsdelivr('VueRouter', 'dist/vue-router.global.js').concat(util.dataUrl("window.VueRouter=VueRouter;")),
          'element-plus': cdn.jsdelivr('ElementPlus', 'dist/index.full.min.js').concat(util.dataUrl("window.ElementPlus=ElementPlus;")),
          "@element-plus/icons-vue": cdn.jsdelivr("ElementPlusIconsVue", 'dist/index.iife.min.js').concat(util.dataUrl("window.ElementPlusIconsVue=ElementPlusIconsVue;"))
        },
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
            if (typeof GM_addStyle == 'function') {
              // @ts-ignore
              GM_addStyle(cssText);
              return;
            }
            addStyle(cssText);
          };
        }
      },
    }),
  ],
  resolve: {
    alias: {
      "@库": Utils.getAbsolutePath("./../库"),
      '@': Utils.getAbsolutePath('./src'),
    },
  },
  build: {
    /* 构建的.user.js是否压缩 */
    minify: isMinify,
    emptyOutDir: isEmptyOutDir,
  },
});

