import { MDouYinRouter } from "@/router/MDouYinRouter";
import { MDouYinShareUser } from "./user/MDouYinShareUser";
import { log } from "@/env";
import { MDouYinShareVideo } from "./video/MDouYinShareVideo";

export const MDouYin = {
	init() {
		if (MDouYinRouter.isShareUser()) {
			log.info("M-Router: 分享用户");
			MDouYinShareUser.init();
		} else if (MDouYinRouter.isShareVideo()) {
			log.info("M-Router: 分享视频");
			MDouYinShareVideo.init();
		} else {
			log.error("未知M-router: " + window.location.hostname);
		}
	},
};
