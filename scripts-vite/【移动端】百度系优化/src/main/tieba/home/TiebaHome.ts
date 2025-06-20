import { MountVue, VUE_ELE_NAME_ID, addStyle } from "@/env";
import App from "./App.vue";
import { TiebaRouter } from "./router";
import AppCSS from "./app.css?raw";
import ElementPlus from "element-plus";
import { Panel } from "@components/setting/panel";

const TiebaHome = {
	$data: {
		appName: "vite-app",
	},
	init() {
		if (!Panel.getValue("baidu-tieba-beautify-home-page")) {
			return;
		}
		TiebaRouter.init();
		MountVue(App, [TiebaRouter.router, ElementPlus]);
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

export { TiebaHome };
