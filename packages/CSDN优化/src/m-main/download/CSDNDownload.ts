import { addStyle } from "@/env";
import CSDNBlockCSS from "./block.css?raw";
import { PopsPanel } from "@/setting/setting";
export const M_CSDNDownload = {
	init() {
		PopsPanel.execMenu("m-csdn-download-removeAds", () => {
			addStyle(CSDNBlockCSS);
		});
	},
};
