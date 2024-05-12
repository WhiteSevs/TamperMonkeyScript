import { GM_addStyle, unsafeWindow } from "ViteGM";
import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import MiniJiaoYuShieldCSS from "./shield.css?raw";

const BaiduMiniJiaoYu = {
    init() {
        GM_addStyle(MiniJiaoYuShieldCSS);
        log.info("插入CSS规则");
        PopsPanel.execMenu("mini_baidu_jiaoyu_shield_bottom_pull_down_menu", () => {
            this.shieldBottomPullDownMenu();
        })
    },
    /**
     * 屏蔽底部下拉菜单
     */
    shieldBottomPullDownMenu() {
        log.info("屏蔽底部下拉菜单");
        let hideCSS = `
        #page_loft{
            display: none !important;
        }`;
        GM_addStyle(hideCSS);
        /* 同源iframe，注入CSS */
        if (unsafeWindow.top === unsafeWindow.self) {
            DOMUtils.ready(function () {
                utils.waitNode("iframe.swan-web-iframe").then((iframeElement) => {
                    let _document = (iframeElement as HTMLIFrameElement).contentDocument as Document;
                    let _window = (iframeElement as HTMLIFrameElement).contentWindow as Window;
                    function callback() {
                        _document.head.appendChild(
                            DOMUtils.createElement(
                                "style",
                                {
                                    innerHTML: hideCSS,
                                },
                                {
                                    type: "text/css",
                                }
                            )
                        );
                    }
                    function completed() {
                        _document.removeEventListener("DOMContentLoaded", completed);
                        _window.removeEventListener("load", completed);
                        callback();
                    }
                    if (
                        _document.readyState === "complete" ||
                        (_document.readyState !== "loading" &&
                            // @ts-ignore
                            !_document.documentElement.doScroll)
                    ) {
                        _window.setTimeout(callback);
                    } else {
                        /* 监听DOMContentLoaded事件 */
                        _document.addEventListener("DOMContentLoaded", completed);
                        /* 监听load事件 */
                        _window.addEventListener("load", completed);
                    }
                });
            });
        }
    },
};


export {
    BaiduMiniJiaoYu
}