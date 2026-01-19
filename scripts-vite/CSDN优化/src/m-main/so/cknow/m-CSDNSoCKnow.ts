import { CSDNSoCKnow } from "@/main/so/cknow/CSDNSoCKnow";
import { Panel } from "@components/setting/panel";

export const M_CSDNSoCKnow = {
  init() {
    Panel.execMenu("m-csdn-so-cknow-removeMaskCover", () => {
      CSDNSoCKnow.removeMaskCover();
    });
  },
};
