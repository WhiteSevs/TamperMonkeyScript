import { BaiduRouter } from "@/router/BaiduRouter";
import { UISwitch } from "@/setting/common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

const PanelWenKuSettingUI: PopsPanelContentConfig = {
	id: "baidu-panel-config-wenku",
	title: "文库",
	headerTitle: "百度文库<br />wk.baidu.com<br />tanbi.baidu.com",
	isDefault: BaiduRouter.isWenKu,
	scrollToDefaultView: true,
	forms: [
		{
			text: "屏蔽",
			type: "forms",
			forms: [
				UISwitch("【屏蔽】会员精选", "baidu_wenku_block_member_picks", true),
				UISwitch("【屏蔽】APP精选", "baidu_wenku_blocking_app_featured", true),
				UISwitch(
					"【屏蔽】相关文档",
					"baidu_wenku_blocking_related_documents",
					false
				),
				UISwitch(
					"【屏蔽】底部工具栏",
					"baidu_wenku_blocking_bottom_toolbar",
					false
				),
				UISwitch("【屏蔽】下一篇按钮", "baidu_wenku_shield_next_btn", false),
				UISwitch(
					"【屏蔽】文档助手",
					"baidu_wenku_blockDocumentAssistant",
					false,
					void 0,
					"右下角的悬浮按钮"
				),
			],
		},
	],
};

export { PanelWenKuSettingUI };
