import { unsafeWindow } from "ViteGM";
import { DOMUtils, addStyle, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import MiniJiaoYuShieldCSS from "./shield.css?raw";

const BaiduMiniJiaoYu = {
  init() {
    addStyle(MiniJiaoYuShieldCSS);
    log.info("插入CSS规则");
    Panel.execMenuOnce("mini_baidu_jiaoyu_shield_bottom_pull_down_menu", () => {
      this.shieldBottomPullDownMenu();
    });
    Panel.execMenuOnce("mini_baidu_jiaoyu-blockEveryOneSearch", () => {
      return this.blockEveryOneSearch();
    });
  },
  /**
   * 注入到iframe
   * @param [iframeSelector="iframe.swan-web-iframe"] iframe选择器
   * @param readyCallback 加载完毕的回调
   */
  injectIframe(
    iframeSelector = "iframe.swan-web-iframe",
    readyCallback?: (iframeGlobal: {
      document: Document;
      window: Window | typeof globalThis;
      globalThis: Window | typeof globalThis;
      self: Window | typeof globalThis;
      utils: typeof utils;
      DOMUtils: typeof DOMUtils;
    }) => void
  ) {
    if (!Panel.isTopWindow()) {
      return;
    }
    DOMUtils.onReady(() => {
      DOMUtils.waitNode<HTMLIFrameElement>(iframeSelector, 10000).then(($iframe) => {
        if (!$iframe) {
          return;
        }
        let iframe__document = $iframe.contentDocument!;
        let iframe__window = $iframe.contentWindow! as any as Window & typeof globalThis;
        let iframe__globalThis = iframe__window;
        let iframe__self = iframe__window;
        let coreOption = {
          document: iframe__document,
          window: iframe__window,
          globalThis: iframe__globalThis,
          self: iframe__self,
          top: unsafeWindow.top!,
          setTimeout: unsafeWindow.setTimeout.bind(unsafeWindow),
          setInterval: unsafeWindow.setInterval.bind(unsafeWindow),
          clearTimeout: unsafeWindow.clearTimeout.bind(unsafeWindow),
          clearInterval: unsafeWindow.clearInterval.bind(unsafeWindow),
        };
        let iframeDOMUtils = DOMUtils.createDOMUtils(coreOption);
        let iframeUtils = utils.createUtils(coreOption);
        if (typeof readyCallback === "function") {
          readyCallback({
            ...coreOption,
            utils: iframeUtils,
            DOMUtils: iframeDOMUtils,
          });
        }
      });
    });
  },
  /**
   * 【屏蔽】底部下拉菜单
   */
  shieldBottomPullDownMenu() {
    let hideCSS = /*css*/ `
        #page_loft{
            display: none !important;
        }`;
    this.injectIframe(void 0, (iframeGlobal) => {
      iframeGlobal.DOMUtils.onReady(() => {
        log.info("【屏蔽】底部下拉菜单");
        iframeGlobal.DOMUtils.addStyle(hideCSS);
      });
    });
  },
  /**
   * 【屏蔽】大家还在搜
   */
  blockEveryOneSearch() {
    let hideCSS = /*css*/ `
        swan-everyone-search-box{
            display: none !important;
        }`;
    this.injectIframe(void 0, (iframeGlobal) => {
      iframeGlobal.DOMUtils.onReady(() => {
        log.info("【屏蔽】大家还在搜");
        iframeGlobal.DOMUtils.addStyle(hideCSS);
      });
    });
  },
};

export { BaiduMiniJiaoYu };
