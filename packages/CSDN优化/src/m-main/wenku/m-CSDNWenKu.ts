import { PopsPanel } from "@/setting/setting";
import ShieldCSS from "./shield.css?raw";
import { GM_addStyle } from "ViteGM";

const M_CSDNWenKu = {
    init() {
        GM_addStyle(ShieldCSS);
        PopsPanel.execMenu('m-csdn-wenku-shieldBottomToolbar', () => {
            this.shieldBottomToolbar()
        });
    },
    /**
     * 【屏蔽】底部工具栏
     */
    shieldBottomToolbar(){
        GM_addStyle(`
        .page-container > div.btn{
            display: none !important;
        }
        `);
    }
}

export {
    M_CSDNWenKu
}