import ShieldCSS from "./css/shield.css?raw";
import { GM_addStyle } from "ViteGM";
import { log } from "@/env";
import { CSDNRouter } from "@/router/CSDNRouter";
import { CSDNSoCKnow } from "./cknow/CSDNSoCKnow";

const CSDNSo = {
	init() {
		GM_addStyle(ShieldCSS);
		log.success("添加屏蔽CSS");
		if (CSDNRouter.isSoCKnow()) {
			CSDNSoCKnow.init();
		}
	},
};

export { CSDNSo };
