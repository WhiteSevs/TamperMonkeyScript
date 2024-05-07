import { GM_addStyle, unsafeWindow } from "ViteGM";
import { DOMUtils, log } from "@/env";
import YiYanShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/ui";

const BaiduYiYan = {
    init() {
        GM_addStyle(YiYanShieldCSS);
        log.info("插入CSS规则");
        PopsPanel.execMenu("baidu_yiyan_remove_ai_mask", () => {
            BaiduYiYan.blockWaterMark();
        })
    },
    /**
     * 通过处理attachShadow和appendChild原型来去除水印
     * 屏蔽 AI生成内容仅供参考
     * 屏蔽 AI作图
     */
    blockWaterMark() {
        let oldShadow = unsafeWindow.Element.prototype.attachShadow;
        unsafeWindow.Element.prototype.attachShadow = function (...args: any) {
            const shadowRoot = oldShadow.call(this, args);
            (this as any)._shadowRoot = shadowRoot;
            shadowRoot.appendChild(
                DOMUtils.createElement(
                    "style",
                    "div[id^='mask']{display: none !important;}"
                )
            );
            return shadowRoot;
        };
        let oldAppendChild = unsafeWindow.Element.prototype.appendChild;
        (unsafeWindow as any).Element.prototype.appendChild = function (element: HTMLElement) {
            if (element.localName === "img") {
                setTimeout(() => {
                    Array.from(document.querySelectorAll("img")).forEach(
                        (imageElement) => {
                            if (imageElement.src.endsWith("style/wm_ai")) {
                                imageElement.src = imageElement.src.replace(
                                    /style\/wm_ai$/gi,
                                    ""
                                );
                            }
                        }
                    );
                }, 150);
            }

            return oldAppendChild.call(this, element);
        };
    },
};

export {
    BaiduYiYan
}