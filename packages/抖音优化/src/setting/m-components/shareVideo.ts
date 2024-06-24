import { UISwitch } from "../common-components/ui-switch";

export const MPanelShareVideoConfig: PopsPanelContentConfig = {
	id: "m-panel-config-share-video",
	title: "视频",
	headerTitle: "/share/video<br />视频",
	forms: [
		{
			text: "覆盖点击事件",
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
};
