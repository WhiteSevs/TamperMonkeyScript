import i18next from "i18next";
import { zh_CN_language } from "./zh-CN/zh-CN";
import { en_US_language } from "./en-US/en-US";
import { GM_getValue } from "ViteGM";
import { KEY } from "@components/setting/panel-config";

export const LanguageInit = function () {
	let settingPanel = GM_getValue(KEY, {}) as any;
	let lng = settingPanel["setting-language"] || "zh-CN";
	i18next.init({
		lng: lng,
		// lng: "zh-CN",
		fallbackLng: "zh-CN",
		resources: {
			"zh-CN": {
				translation: { ...zh_CN_language },
			},
			"en-US": {
				translation: { ...en_US_language },
			},
		},
	});
};
