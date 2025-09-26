import ShieldCSS from "./css/shield.css?raw";
import { addStyle, log } from "@/env";
import { CSDNRouter } from "@/router/CSDNRouter";
import { CSDNSoCKnow } from "./cknow/CSDNSoCKnow";

const CSDNSo = {
  init() {
    addStyle(ShieldCSS);
    log.info("添加屏蔽CSS");
    if (CSDNRouter.isSoCKnow()) {
      CSDNSoCKnow.init();
    }
  },
};

export { CSDNSo };
