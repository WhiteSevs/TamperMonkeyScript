import { addStyle, log } from "@/env";
import PanShieldCSS from "./shield.css?raw";

const BaiduPan = {
  init() {
    addStyle(PanShieldCSS);
    log.info("插入CSS规则");
  },
};

export { BaiduPan };
