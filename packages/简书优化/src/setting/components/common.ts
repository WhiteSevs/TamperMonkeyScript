import { log } from "@/env";
import { UISelect } from "../common-components/ui-select";
import { UISwitch } from "../common-components/ui-switch";

export const SettingUICommon: PopsPanelContentConfig = {
	id: "jianshu-panel-common",
	title: "通用",
	forms: [
		{
			text: "Toast配置",
			type: "forms",
			forms: [
				UISelect(
					"Toast位置",
					"qmsg-config-position",
					"bottom",
					[
						{
							value: "topleft",
							text: "左上角",
						},
						{
							value: "top",
							text: "顶部",
						},
						{
							value: "topright",
							text: "右上角",
						},
						{
							value: "left",
							text: "左边",
						},
						{
							value: "center",
							text: "中间",
						},
						{
							value: "right",
							text: "右边",
						},
						{
							value: "bottomleft",
							text: "左下角",
						},
						{
							value: "bottom",
							text: "底部",
						},
						{
							value: "bottomright",
							text: "右下角",
						},
					],
					(event, isSelectValue, isSelectText) => {
						log.info("设置当前Qmsg弹出位置" + isSelectText);
					},
					"Toast显示在页面九宫格的位置"
				),
				UISelect(
					"最多显示的数量",
					"qmsg-config-maxnums",
					3,
					[
						{
							value: 1,
							text: "1",
						},
						{
							value: 2,
							text: "2",
						},
						{
							value: 3,
							text: "3",
						},
						{
							value: 4,
							text: "4",
						},
						{
							value: 5,
							text: "5",
						},
					],
					void 0,
					"限制Toast显示的数量"
				),
				UISwitch(
					"逆序弹出",
					"qmsg-config-showreverse",
					false,
					void 0,
					"修改Toast弹出的顺序"
				),
			],
		},
	],
};
