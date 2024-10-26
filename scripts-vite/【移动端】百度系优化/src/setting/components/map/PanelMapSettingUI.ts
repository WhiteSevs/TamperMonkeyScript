import { BaiduRouter } from "@/router/BaiduRouter";
import { UISwitch } from "@/setting/common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

const PanelMapSettingUI: PopsPanelContentConfig = {
	id: "baidu-panel-config-map",
	title: "地图",
	headerTitle: "百度地图<br />map.baidu.com",
	isDefault() {
		return BaiduRouter.isMap();
	},
	scrollToDefaultView: true,
	forms: [
		{
			text: "劫持/拦截",
			type: "forms",
			forms: [
				UISwitch(
					"劫持Element.appendChild",
					"baidu_map_hijack-element-appendChild",
					true,
					void 0,
					"阻止唤醒调用App"
				),
				UISwitch(
					"劫持$.append",
					"baidu_map_hijack-jQuery-append",
					true,
					void 0,
					"阻止唤醒调用App"
				),
				UISwitch(
					"劫持setTimeout",
					"baidu_map_hijack-setTimeout",
					true,
					void 0,
					"阻止唤醒调用App和剪贴板复制"
				),
			],
		},
	],
};

export { PanelMapSettingUI };
