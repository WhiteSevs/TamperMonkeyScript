import { GM_addStyle } from "ViteGM";
import { log } from "@/env";
import XueShieldCSS from "./shield.css?raw";

const BaiduXue = {
    init() {
        GM_addStyle(XueShieldCSS);
        log.info("插入CSS规则");
    }
}


export {
    BaiduXue
}