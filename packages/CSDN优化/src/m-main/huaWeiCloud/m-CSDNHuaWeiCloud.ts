import { GM_addStyle } from "ViteGM";
import ShieldCSS from "./css/shield.css?raw";
import { CSDNHuaWeiCloud } from "@/main/huaWeiCloud/CSDNHuaWeiCloud";
import { PopsPanel } from "@/setting/setting";

const M_CSDNHuaWeiCloud = {
    init() {
        GM_addStyle(ShieldCSS);
        PopsPanel.execMenu('m-csdn-hua-wei-cloud-autoExpandContent', () => {
            CSDNHuaWeiCloud.autoExpandContent();
        });
    }
}

export {
    M_CSDNHuaWeiCloud
}