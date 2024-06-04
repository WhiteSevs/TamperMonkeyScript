import { addStyle, log } from "@/env";
import PosShieldCSS from "./shield.css?raw";

const BaiduPos = {
	init() {
		addStyle(PosShieldCSS);
		log.info("插入CSS规则");
	},
};

export { BaiduPos };
