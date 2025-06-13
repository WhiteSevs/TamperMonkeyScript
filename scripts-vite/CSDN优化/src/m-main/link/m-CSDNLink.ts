import { CSDNLink } from "@/main/link/CSDNLink";
import { Panel } from "@components/setting/panel";

export const M_CSDNLink = {
	init() {
		Panel.execMenuOnce("m-csdn-link-jumpRedirect", () => {
			CSDNLink.jumpRedirect();
		});
	},
};
