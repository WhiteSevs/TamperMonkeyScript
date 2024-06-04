import MapShieldCSS from "./shield.css?raw";
import { BaiduMapHook } from "./MapHook";
import { addStyle, log } from "@/env";

const BaiduMap = {
	init() {
		addStyle(MapShieldCSS);
		log.info("插入CSS规则");
		BaiduMapHook.init();
	},
};

export { BaiduMap };
