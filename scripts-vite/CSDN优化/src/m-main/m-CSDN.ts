import { CSDNRouter } from "@/router/CSDNRouter";
import { M_CSDNLink } from "./link/m-CSDNLink";
import { M_CSDNHuaWeiCloud } from "./huaWeiCloud/m-CSDNHuaWeiCloud";
import { M_CSDNBlog } from "./blog/m-CSDNBlog";
import { M_CSDNWenKu } from "./wenku/m-CSDNWenKu";
import { log } from "@/env";
import { M_CSDNDownload } from "./download/CSDNDownload";

const M_CSDN = {
	init() {
		if (CSDNRouter.isLink()) {
			log.info("Router: 中转链接");
			M_CSDNLink.init();
		} else if (CSDNRouter.isHuaWeiCloudBlog()) {
			log.info("Router: 华为云联盟");
			M_CSDNHuaWeiCloud.init();
		} else if (CSDNRouter.isBlog()) {
			log.info("Router: 博客");
			M_CSDNBlog.init();
		} else if (CSDNRouter.isWenKu()) {
			log.info("Router: 文库");
			M_CSDNWenKu.init();
		} else if (CSDNRouter.isDownload()) {
			log.info("Router: 资源下载");
			M_CSDNDownload.init();
		} else {
			log.error("暂未适配，请反馈开发者：" + globalThis.location.href);
		}
	},
};

export { M_CSDN };
