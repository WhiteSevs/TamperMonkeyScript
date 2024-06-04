import { addStyle, log } from "@/env";
import XueShieldCSS from "./shield.css?raw";

const BaiduXue = {
	init() {
		addStyle(XueShieldCSS);
		log.info("插入CSS规则");
	},
};

export { BaiduXue };
