import { CSDNLink } from "@/main/link/CSDNLink";
import { PopsPanel } from "@/setting/setting";

export const M_CSDNLink = {
	init() {
		PopsPanel.execMenuOnce("m-csdn-link-jumpRedirect", () => {
			CSDNLink.jumpRedirect();
		});
	},
};
