import { log } from "@/env";
import { WeiBoHook } from "@/hook/WeiBoHook";
import { Panel } from "@components/setting/panel";

export const WeiBoVideoHook = {
  init() {
    this.hookWebpack();
  },
  /**
   * 劫持webpack
   */
  hookWebpack() {
    log.info("劫持webpack");
    WeiBoHook.hookWebpack("webpackJsonp", "chunk-common", (webpackExports) => {
      if (
        typeof webpackExports?.exports === "object" &&
        typeof webpackExports.exports["a"] === "object" &&
        typeof webpackExports.exports["a"]["gotoApp"] === "function" &&
        Panel.getValue("weibo_video_webpack_gotoApp")
      ) {
        log.success("成功劫持webpack调用函数", webpackExports);
        webpackExports.exports["a"]["gotoApp"] = function (...args: any[]) {
          log.info("阻止唤醒App：", args);
        };
        return webpackExports;
      }
    });
  },
};
