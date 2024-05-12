import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import BaiKeTaShuoShieldCSS from "./shield.css?raw";
import { GM_addStyle } from "ViteGM";

const BaiduBaiKeTaShuo = {
    init() {
        GM_addStyle(BaiKeTaShuoShieldCSS);
        log.info("插入CSS规则");
        if (PopsPanel.getValue("baidu_baike_tashuo_remove_bottom_ad")) {
            this.removeBottomAd();
        }
    },
    /**
     * 去除底部广告
     */
    removeBottomAd() {
        utils.waitNode("#index_tashuo_list").then(() => {
            log.info("去除底部广告");
            utils.mutationObserver(
                document.querySelector("#index_tashuo_list") as HTMLElement,
                {
                    callback() {
                        Array.from(
                            (document.querySelector("#index_tashuo_list") as HTMLElement).children
                        ).forEach((item) => {
                            if (item.className !== "J-hot-item-container") {
                                log.info(["存在广告-删除！", item]);
                                item.remove();
                            }
                        });
                    },
                    config: { subtree: true, childList: true, attributes: true },
                }
            );
        });
    },
};

export {
    BaiduBaiKeTaShuo
}