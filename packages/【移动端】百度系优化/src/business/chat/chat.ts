import { GM_addStyle } from "ViteGM";
import { log, utils } from "@/env";
import ChatShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/ui/setting";


const BaiduChat = {
    init() {
        GM_addStyle(ChatShieldCSS);
        log.info("插入CSS规则");
        PopsPanel.execMenu("baidu_chat_remove_ai_mask", () => {
            this.removeAiMask();
        })
    },
    /**
     * 去除AI的遮罩
     */
    removeAiMask() {
        GM_addStyle(`
        .bot-body .watermark,
        #searchChatApp div[class^="watermark"]{
            background-image: none !important;
        }`);
        let maskMutationObserver = new utils.LockFunction(function () {
            (Array.from(document.querySelectorAll("img[src*='style/wm_ai']")) as HTMLImageElement[]).forEach((imgElement) => {
                log.info("处理AI水印：" + imgElement.src);
                imgElement.src = imgElement.src.replace(/style\/wm_ai/g, "");
            });
        }, 400);
        utils.mutationObserver(document.body, {
            config: { subtree: true, childList: true },
            callback: maskMutationObserver.run,
        });
    },
};
export {
    BaiduChat
}