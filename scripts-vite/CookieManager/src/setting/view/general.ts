import { log } from "@/env";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UITextArea } from "@components/setting/components/ui-textarea";
import { UISelect } from "@components/setting/components/ui-select";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { PanelSettingConfig } from "@components/setting/panel-setting-config";

export const Component_Common: PopsPanelContentConfig = {
	id: "view-general",
	title: "通用",
	forms: [
		{
			text: "Toast配置",
			type: "forms",
			forms: [
				UISelect(
					"Toast位置",
					PanelSettingConfig.qmsg_config_position.key,
					PanelSettingConfig.qmsg_config_position.defaultValue,
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
					PanelSettingConfig.qmsg_config_maxnums.key,
					PanelSettingConfig.qmsg_config_maxnums.defaultValue,
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
					PanelSettingConfig.qmsg_config_showreverse.key,
					PanelSettingConfig.qmsg_config_showreverse.defaultValue,
					void 0,
					"修改Toast弹出的顺序"
				),
			],
		},
	],
};
