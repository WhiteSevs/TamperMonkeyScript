import { DouYin } from "@/main/DouYin";
import { Panel } from "./setting/panel";
import { MDouYinRouter } from "./router/MDouYinRouter";
import { MDouYin } from "./m-main/MDouYin";

Panel.init();
if (MDouYinRouter.isMDouYin()) {
	MDouYin.init();
} else {
	DouYin.init();
}
