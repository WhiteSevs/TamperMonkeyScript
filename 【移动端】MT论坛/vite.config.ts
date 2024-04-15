import { build, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import monkey, { cdn } from 'vite-plugin-monkey';
import path from "path";
const getAbsolutePath = (pathName: string) => {
  return path.resolve(__dirname, pathName);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: "【移动端】MT论坛",
        icon: 'https://bbs.binmt.cc/favicon.ico',
        author: "WhiteSevs",
        "run-at": "document-start",
        namespace: 'https://greasyfork.org/zh-CN/scripts/401359',
        supportURL: "https://github.com/WhiteSevs/TamperMonkeyScript/issues",
        description: "MT论坛效果增强，如自动签到、自动展开帖子、滚动加载评论、显示UID、自定义屏蔽、手机版小黑屋、编辑器优化、在线用户查看、便捷式图床、自定义用户标签、积分商城商品上架提醒等",
        // @ts-ignore
        updateLog: "全新的设置界面；去除功能：【蓝奏云功能】、【聊天内图床】",
        version: "2024.4.13",
        match: ["*://bbs.binmt.cc/*"],
        exclude: [/^http(s|):\/\/bbs\.binmt\.cc\/uc_server.*$/],
        license: "GPL-3.0-only",
        grant: [
          "unsafeWindow",
          "GM_addStyle",
          "GM_setValue",
          "GM_getValue",
          "GM_deleteValue",
          "GM_setClipboard",
          "GM_xmlhttpRequest",
          "GM_registerMenuCommand",
          "GM_unregisterMenuCommand",
          "GM_info",
          "GM_cookie"
        ],
        connect: "*",
        require: [
          "file://D:\\Code\\JavaScript\\油猴\\库\\Utils\\Utils.js",
          "file://D:\\Code\\JavaScript\\油猴\\库\\DOMUtils\\DOMUtils.js",
          "file://D:\\Code\\JavaScript\\油猴\\库\\pops.js",
          "file://D:\\Code\\JavaScript\\油猴\\库\\Qmsg.js",
        ],
      },
      server: {
        mountGmApi: true,
        open: false,
      },
      build: {
        autoGrant: true,
        fileName: "【移动端】MT论坛.user.js",
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@库": getAbsolutePath("./../库")
    }
  },
  build: {
    minify: false,
  },
});
