import { CSDNLink } from "@/main/link/CSDNLink";
import { PopsPanel } from "@/setting/setting";

const M_CSDNLink = {
    init() {
        PopsPanel.execMenu("m-csdn-link-jumpRedirect", () => {
            CSDNLink.jumpRedirect();
        });
    },
}


export {
    M_CSDNLink
}