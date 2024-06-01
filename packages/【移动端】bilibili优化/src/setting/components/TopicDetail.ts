import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "../common-components/ui-switch";

export const SettingUITopicDetail: PopsPanelContentConfig = {
	id: "panel-topic-detail",
	title: "话题",
	isDefault() {
		return BilibiliRouter.isTopicDetail();
	},
	forms: [
	],
};
