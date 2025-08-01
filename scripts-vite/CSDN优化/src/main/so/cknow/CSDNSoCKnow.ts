import ShieldCSS from "./css/shield.css?raw";
import { addStyle, log } from "@/env";
import { Panel } from "@components/setting/panel";

export const CSDNSoCKnow = {
	init() {
		addStyle(ShieldCSS);
		log.info("添加屏蔽CSS");
		Panel.execMenuOnce("csdn-so-cknow-removeMaskCover", () => {
			return this.removeMaskCover();
		});
	},
	/**
	 * 去除水印
	 */
	removeMaskCover() {
		log.info("去除水印");
		return addStyle(/*css*/ `
        /* C知道水印 */
        div.username_mask_cover {
            background-image: none !important;
        }
        `);
	},
};
