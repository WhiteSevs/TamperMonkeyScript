import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";
import XHSShieldCSS from "./shield.css?raw";
import { DOMUtils, log, utils } from "@/env";

const XHS_Shield = {
    init() {
        PopsPanel.execMenu("pc-xhs-shieldAd", () => {
            GM_addStyle(XHSShieldCSS)
        })
        PopsPanel.execMenu("pc-xhs-shield-select-text-search-position", () => {
            XHS_Shield.shieldSelectTextVisibleSearchPosition();
        })
        DOMUtils.ready(() => {
            PopsPanel.execMenu("pc-xhs-shield-login-dialog", () => {
                XHS_Shield.shieldLoginContainer();
            })
        })
    },
    /**
     * 屏蔽登录弹窗显示
     */
    shieldLoginContainer() {
        log.success("添加屏蔽登录弹窗CSS，监听登录弹窗出现")
        GM_addStyle(`
        /* 登录弹窗 */
        .login-container{
            display: none !important;
        }
        `);
        /* 观察内容加载并关闭弹窗 */
        utils.mutationObserver(document.body, {
            config: {
                subtree: true,
                childList: true,
            },
            callback: () => {
                let $close = document.querySelector(".login-container .icon-btn-wrapper") as HTMLDivElement;
                if ($close) {
                    $close.click();
                    log.success("登录弹窗出现，关闭")
                }
            }
        })
    },
    /**
     * 屏蔽选择文字弹出的搜索提示
     */
    shieldSelectTextVisibleSearchPosition() {
        log.success("屏蔽选择文字弹出的搜索提示");
        GM_addStyle(`
        .search-position{
            display: none !important;
        }
        `)
    }
}

export {
    XHS_Shield
}