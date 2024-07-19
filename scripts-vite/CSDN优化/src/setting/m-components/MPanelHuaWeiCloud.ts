import { CSDNRouter } from "@/router/CSDNRouter";
import { UISwitch } from "@/setting/common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

const MSettingUIHuaWeiCloud: PopsPanelContentConfig = {
	id: "m-panel-hua-wei-cloud",
	title: "华为云开发者联盟",
	isDefault() {
		return CSDNRouter.isHuaWeiCloudBlog();
	},
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"自动展开全文",
					"m-csdn-hua-wei-cloud-autoExpandContent",
					true
				),
			],
		},
	],
};

export { MSettingUIHuaWeiCloud };
