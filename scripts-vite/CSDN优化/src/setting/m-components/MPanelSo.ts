import { CSDNRouter } from "@/router/CSDNRouter";
import { UISwitch } from "@/setting/common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

const MSettingUISo: PopsPanelContentConfig = {
	id: "panel-so",
	title: "搜索",
	isDefault() {
		return CSDNRouter.isSo();
	},
	forms: [
		{
			text: "C知道-功能",
			type: "forms",
			forms: [UISwitch("去除水印", "m-csdn-so-cknow-removeMaskCover", true)],
		},
	],
};

export { MSettingUISo };
