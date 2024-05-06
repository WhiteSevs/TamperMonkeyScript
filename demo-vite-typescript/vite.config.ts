import { defineConfig } from 'vite';
import monkey, { cdn, util } from 'vite-plugin-monkey';
import { SCRIPT_NAME, GetLib, Utils } from "./vite.build"



const currentTime = new Date();
const VERSION = `${Utils.formatTime(currentTime, "yyyy.MM.dd", false)}`;


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


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: SCRIPT_NAME,
        namespace: 'https://github.com/WhiteSevs/TamperMonkeyScript',
        supportURL: "https://github.com/WhiteSevs/TamperMonkeyScript/issues",
        version: VERSION,
        author: "WhiteSevs",
        "run-at": "document-start",
        require: await GetLib([
          "CoverUMD",
          "DOMUtils",
          "Qmsg",
          "Utils",
          "pops"
        ]),
        resource: {
          "ElementPlusResourceCSS": "https://cdn.jsdelivr.net/npm/element-plus@2.7.2/dist/index.min.css",
        },
        cssSideEffects: () => {
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
          return (cssText: string) => {
            // @ts-ignore
            if (typeof GM_addStyle == 'function') {
              // @ts-ignore
              GM_addStyle(cssText);
              return;
            }
            addStyle(cssText);
          };
        },


        icon: '',
        description: 'demo desc',
        match: [
          '*://*/*'
        ],
        connect: [
          "*"
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
      },
      clientAlias: "ViteGM",
      server: {
        mountGmApi: false,
        open: true,
      },
      build: {
        autoGrant: true,
        fileName: FILE_NAME,
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
