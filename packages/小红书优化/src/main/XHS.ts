import { DOMUtils, Qmsg, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { GM_addStyle, unsafeWindow } from "ViteGM";
import { XHS_Shield } from "./XHS_Shield";
import { XHS_Hook } from "@/hook/hook";


const XHS = {
    init() {
        XHS_Shield.init();
        PopsPanel.execMenu("pc-xhs-allowCopy", () => {
            XHS.allowPCCopy();
        })
        PopsPanel.execMenu("pc-xhs-hook-vue", () => {
            XHS_Hook.webPackVue();
        })
        PopsPanel.execMenu("pc-xhs-open-blank-article", () => {
            XHS.openBlankArticle();
        })
    },
    /**
     * 允许复制
     */
    allowPCCopy() {
        log.success("允许复制文字")
        DOMUtils.on(
            unsafeWindow,
            "copy",
            void 0,
            function (event) {
                utils.preventEvent(event);
                let selectText = unsafeWindow.getSelection();
                if (selectText) {
                    utils.setClip(selectText.toString());
                } else {
                    log.error("未选中任何内容");
                }
                return false;
            },
            {
                capture: true,
            }
        );
    },
    /**
     * 新标签页打开文章
     */
    openBlankArticle() {
        log.success("新标签页打开文章")
        DOMUtils.on(document, "click", ".feeds-container .note-item", function (event) {
            utils.preventEvent(event);
            let $click = event.target as HTMLDivElement;
            let $url = $click.querySelector("a[href]") as HTMLAnchorElement;
            if ($url && $url.href) {
                log.info("跳转文章: " + $url.href)
                window.open($url.href, "_blank")
            } else {
                Qmsg.error("未找到文章链接")
            }
        }, {
            capture: true
        })
    }
}

export {
    XHS
}