import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

export const SettingUITopicDetail: PopsPanelContentConfig = {
	id: "panel-topic-detail",
	title: "话题",
	isDefault() {
		return BilibiliRouter.isTopicDetail();
	},
	forms: [],
};
