import { GM_addStyle } from "ViteGM";
import { log } from "@/env";
import ImageShieldCSS from "./shield.css?raw";

const BaiduImage = {
    init() {
        GM_addStyle(ImageShieldCSS);
        log.info("插入CSS规则");
    },
};
export {
    BaiduImage
}