import { UISwitch } from "../common-components/ui-switch";

export const MPanelShareUserConfig: PopsPanelContentConfig = {
	id: "m-panel-config-share-user",
	title: "主页",
	forms: [
		{
			text: "/share/user<br />覆盖点击事件",
			type: "forms",
			forms: [
				UISwitch(
					"视频合集",
					"m-dy-share-user-coverPlayletList",
					true,
					void 0,
					"正确跳转视频合集页面"
				),
				UISwitch(
					"视频列表",
					"m-dy-share-user-coverPostListContainer",
					true,
					void 0,
					"正确跳转视频页面"
				),
			],
		},
	],
};
