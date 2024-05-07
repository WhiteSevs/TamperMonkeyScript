import { log } from "@/env";
import PanShieldCSS from "./shield.css?raw";
import { GM_addStyle } from "ViteGM";

const BaiduPan = {
    init() {
        GM_addStyle(PanShieldCSS);
        log.info("插入CSS规则");
    }
}

export {
    BaiduPan
}