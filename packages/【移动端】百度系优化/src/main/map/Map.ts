import MapShieldCSS from "./shield.css?raw";
import { GM_addStyle } from "ViteGM";
import { BaiduMapHook } from "./MapHook";
import { log } from "@/env";

const BaiduMap = {
    init() {
        GM_addStyle(MapShieldCSS);
        log.info("插入CSS规则");
        BaiduMapHook.init();
    }
}

export {
    BaiduMap
}