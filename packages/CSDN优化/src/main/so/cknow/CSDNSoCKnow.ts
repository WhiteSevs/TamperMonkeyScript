import ShieldCSS from "./css/shield.css?raw";
import { addStyle, log } from "@/env";
import { PopsPanel } from "@/setting/setting";

const CSDNSoCKnow = {
	init() {
		addStyle(ShieldCSS);
		log.info("添加屏蔽CSS");
		PopsPanel.execMenu("csdn-so-cknow-removeMaskCover", () => {
			this.removeMaskCover();
		});
	},
	/**
	 * 去除水印
	 */
	removeMaskCover() {
		log.info("去除水印");
		addStyle(`
        /* C知道水印 */
        div.username_mask_cover {
            background-image: none !important;
        }
        `);
	},
};

export { CSDNSoCKnow };
