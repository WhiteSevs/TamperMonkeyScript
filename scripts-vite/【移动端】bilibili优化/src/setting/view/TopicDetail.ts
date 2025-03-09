import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

export const SettingUITopicDetail: PopsPanelContentConfig = {
	id: "panel-topic-detail",
	title: "话题",
	isDefault() {
		return BilibiliRouter.isTopicDetail();
	},
	forms: [],
};
