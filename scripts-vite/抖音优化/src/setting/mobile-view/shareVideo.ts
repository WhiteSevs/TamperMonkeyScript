import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "@components/setting/components/ui-switch";

export const MPanelShareVideoConfig: PopsPanelContentConfig = {
	id: "m-panel-config-share-video",
	title: "视频",
	headerTitle: "/share/video<br />视频",
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: "覆盖点击事件",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"全局点击",
									"m-dy-share-video-coverGlobalClick",
									true,
									void 0,
									"阻止跳转至下载页"
								),
							],
						},
					],
				},
			],
		},
	],
};
