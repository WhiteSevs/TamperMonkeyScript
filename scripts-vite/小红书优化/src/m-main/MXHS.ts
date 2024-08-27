import { XHS_Hook } from "@/hook/hook";
import { PopsPanel } from "@/setting/setting";
import MXiaoHongShuSheldCSS from "./shield.css?raw";
import { ScriptRouter } from "@/router/router";
import { MXHS_Article } from "./article/MXHS_Article";
import { MXHS_Home } from "./home/MXHS-Home";
import { addStyle, log } from "@/env";

const MXHS = {
	init() {
		PopsPanel.execMenu("little-red-book-hijack-vue", () => {
			log.info("劫持页面的Vue");
			XHS_Hook.webPackVue();
		});
		PopsPanel.execMenuOnce("little-red-book-shieldAd", () => {
			log.info("注入默认屏蔽CSS");
			return addStyle(MXiaoHongShuSheldCSS);
		});
		PopsPanel.execMenuOnce("little-red-book-allowCopy", () => {
			return MXHS.allowCopy();
		});
		if (ScriptRouter.isArticle()) {
			/* 笔记页面 */
			MXHS_Article.init();
		} else if (ScriptRouter.isUserHome()) {
			/* 用户主页 */
			MXHS_Home.init();
		}
	},
	/**
	 * 允许复制
	 */
	allowCopy() {
		log.info("允许复制文字");
		return addStyle(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `);
	},
};

export { MXHS };
