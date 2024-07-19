import { MDouYinRouter } from "@/router/MDouYinRouter";
import { MDouYinShareUser } from "./user/MDouYinShareUser";
import { log } from "@/env";
import { MDouYinShareVideo } from "./video/MDouYinShareVideo";
import { MDouYinShareNote } from "./note/MDouYinShareNote";
import { MDouYinShareChallenge } from "./challenge/MDouYinShareChallenge";
import { MDouYinShareMusic } from "./music/MDouYinShareMusic";

export const MDouYin = {
	init() {
		if (MDouYinRouter.isShareUser()) {
			log.info("M-Router: 分享用户");
			MDouYinShareUser.init();
		} else if (MDouYinRouter.isShareVideo()) {
			log.info("M-Router: 分享视频");
			MDouYinShareVideo.init();
		} else if (MDouYinRouter.isShareNote()) {
			log.info("M-Router: 分享笔记");
			MDouYinShareNote.init();
		} else if (MDouYinRouter.isShareChallenge()) {
			log.info("M-Router: 分享话题");
			MDouYinShareChallenge.init();
		} else if (MDouYinRouter.isShareMusic()) {
			log.info("M-Router: 分享音乐");
			MDouYinShareMusic.init();
		} else {
			log.error("未知M-router: " + window.location.hostname);
		}
	},
};
