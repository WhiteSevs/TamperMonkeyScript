import { addStyle, log } from "@/env";
import JingYanShieldCSS from "./shield.css?raw";

const BaiduJingYan = {
  init() {
    addStyle(JingYanShieldCSS);
    log.info("插入CSS规则");
  },
};
export { BaiduJingYan };
