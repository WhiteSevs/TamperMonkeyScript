import { DouYin } from "@/main/DouYin";
import { PopsPanel } from "./setting/setting";
import { MDouYinRouter } from "./router/MDouYinRouter";
import { MDouYin } from "./m-main/MDouYin";

PopsPanel.init();
if (MDouYinRouter.isMDouYin()) {
	MDouYin.init();
} else {
	DouYin.init();
}
