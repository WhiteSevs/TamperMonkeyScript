import { GM_addStyle } from "ViteGM"
import ShieldCSS from "./css/shield.css?raw"
import { log } from "@/env";
import { PopsPanel } from "@/setting/setting";

const CSDNSoCKnow = {
    init() {
        GM_addStyle(ShieldCSS)
        log.success('添加屏蔽CSS');
        PopsPanel.execMenu('csdn-so-cknow-removeMaskCover', () => {
            this.removeMaskCover()
        });
    },
    /**
     * 去除水印
     */
    removeMaskCover() {
        log.success('去除水印');
        GM_addStyle(`
        /* C知道水印 */
        div.username_mask_cover {
            background-image: none !important;
        }
        `)
    }
}


export {
    CSDNSoCKnow
}