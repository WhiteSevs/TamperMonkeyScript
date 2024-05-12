import { CSDNSoCKnow } from "@/main/so/cknow/CSDNSoCKnow";
import { PopsPanel } from "@/setting/setting";

const M_CSDNSoCKnow = {
    init() {
        PopsPanel.execMenu('m-csdn-so-cknow-removeMaskCover', () => {
            CSDNSoCKnow.removeMaskCover();
        });
    }
}

export {
    M_CSDNSoCKnow
}