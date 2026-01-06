import { DOMUtils, log } from "@/env";
import { GreasyforkRouter } from "@/router/GreasyforkRouter";
import { unsafeWindow } from "ViteGM";
import i18next from "i18next";
import Qmsg from "qmsg";
import { GreasyforkElementUtils } from "./GreasyforkElementUtils";

export const GreasyforkUtils = {
  /**
   * 判断是否是当前已登录账户的主页
   */
  isCurrentLoginUserHome() {
    const currentLoginUserId = GreasyforkElementUtils.getCurrentLoginUserId();
    if (
      currentLoginUserId != null &&
      GreasyforkRouter.isUsers() &&
      window.location.pathname.includes("/" + currentLoginUserId)
    ) {
      return true;
    } else {
      return false;
    }
  },
  /**
   * 加载monaco编辑器
   */
  monacoEditor() {
    return new Promise<any>((resolve) => {
      /** 版本号 */
      const MonacoVersion = "0.52.2";
      const readyEventType = "monaco-editor-ready";
      // if (!isRegisdterMonacoEditorCSS) {
      // 	isRegisdterMonacoEditorCSS = true;
      // 	// 字体资源
      // 	addStyle(/*css*/ `
      // 		@font-face {
      // 			font-family: 'codicon';
      // 			src: url('https://fastly.jsdelivr.net/npm/monaco-editor@${MonacoVersion}/min/vs/base/browser/ui/codicons/codicon/codicon.ttf') format('truetype');
      // 		}
      // 	`);
      // }
      if (unsafeWindow.monaco) {
        resolve(unsafeWindow.monaco);
        return;
      }
      const $loading = Qmsg.loading(i18next.t("monaco-editor加载中..."));
      const $monacoScript = DOMUtils.createElement("script", {
        type: "module",
        defer: true,
        innerHTML: /*js*/ `
					// import * as monaco from "https://fastly.jsdelivr.net/npm/monaco-editor@${MonacoVersion}/+esm";
					import {  monaco } from "https://fastly.jsdelivr.net/npm/@live-codes/monaco-editor/monaco.js";
					window.monaco = monaco;
					window.dispatchEvent(new CustomEvent("${readyEventType}"));
				`,
      });
      DOMUtils.append(document.head || document.documentElement, $monacoScript);

      DOMUtils.on(
        unsafeWindow,
        readyEventType,
        () => {
          const monaco = unsafeWindow.monaco;
          log.success(`网络加载monaco编辑器成功`);
          $loading.close();
          resolve(monaco);
        },
        { once: true }
      );
    });
  },
};
