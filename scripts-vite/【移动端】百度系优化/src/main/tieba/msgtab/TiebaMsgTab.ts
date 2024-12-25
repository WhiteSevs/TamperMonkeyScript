import { addStyle, MountVue, VUE_ELE_NAME_ID } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";
import { TiebaMsgTabRouter } from "./router";
import ElementPlus from "element-plus";
import App from "./App.vue";
import AppCSS from "./css/App.css?raw";

export const TiebaMsgTab = {
	$data: {
		appName: "vite-app",
	},
	pathname: "/index/tbwise/msgtab",
	init() {
		TiebaMsgTabRouter.init();
		// 屏蔽错误提示
		CommonUtil.addBlockCSS("body > .error-page");

		MountVue(App, [TiebaMsgTabRouter.router, ElementPlus]);
		addStyle(/*css*/ `
        #${VUE_ELE_NAME_ID}{
            z-index: 1000;
        }
        body > div:not([id="${VUE_ELE_NAME_ID}"]){
            display: none;
        }
        body > div[class="dia_wrapper"],
        body > div[class="dia_mask"],
        #${VUE_ELE_NAME_ID} ~ *{
            display: unset;
        }
        `);
		addStyle(AppCSS);
	},
};
