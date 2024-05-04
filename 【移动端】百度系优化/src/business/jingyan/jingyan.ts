import { GM_addStyle } from "ViteGM";
import { log } from "@/env";
import JingYanShieldCSS from "./shield.css?raw";

const BaiduJingYan = {
    init() {
        GM_addStyle(JingYanShieldCSS);
        log.info("插入CSS规则");
    }
}
export {
    BaiduJingYan
}