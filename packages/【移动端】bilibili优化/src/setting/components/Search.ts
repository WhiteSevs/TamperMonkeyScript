import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "../common-components/ui-switch";

const SettingUISearch: PopsPanelContentConfig = {
	id: "panel-search",
	title: "搜索",
	isDefault() {
		return BilibiliRouter.isSearch();
	},
	forms: [],
};

export { SettingUISearch };
