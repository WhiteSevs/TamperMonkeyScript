import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

const SettingUISearch: PopsPanelContentConfig = {
	id: "panel-search",
	title: "搜索",
	isDefault() {
		return BilibiliRouter.isSearch();
	},
	forms: [],
};

export { SettingUISearch };
