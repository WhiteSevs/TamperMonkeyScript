import { addStyle, log } from "@/env";
import ImageShieldCSS from "./shield.css?raw";

const BaiduImage = {
	init() {
		addStyle(ImageShieldCSS);
		log.info("插入CSS规则");
	},
};
export { BaiduImage };
