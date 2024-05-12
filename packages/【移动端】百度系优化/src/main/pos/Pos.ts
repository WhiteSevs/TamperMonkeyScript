import { GM_addStyle } from "ViteGM";
import { log } from "@/env";
import PosShieldCSS from "./shield.css?raw";

const BaiduPos = {
    init() {
        GM_addStyle(PosShieldCSS);
        log.info("插入CSS规则");
    }
}

export {
    BaiduPos
}