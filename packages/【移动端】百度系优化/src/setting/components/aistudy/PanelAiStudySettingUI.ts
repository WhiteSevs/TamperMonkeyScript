import { BaiduRouter } from "@/router/BaiduRouter";
import { UISwitch } from "@/setting/common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

const PanelAiStudySettingUI: PopsPanelContentConfig = {
	id: "baidu-panel-config-ai-study",
	title: "知了爱学",
	headerTitle:
		"知了爱学<br />aistudy.baidu.com<br />isite.baidu.com/site/wjz2tdly",
	isDefault() {
		return BaiduRouter.isAiStudy() || BaiduRouter.isISite();
	},
	scrollToDefaultView: true,
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: "知了爱学",
					description: "isite",
					type: "deepMenu",
					forms: [
						{
							text: "屏蔽",
							type: "forms",
							forms: [
								UISwitch(
									"【屏蔽】底部免费在线咨询",
									"baidu_isite_wjz2tdly_shieldBottomBarRootContainer",
									true
								),
								UISwitch(
									"【屏蔽】右侧悬浮按钮-查看更多",
									"baidu_isite_wjz2tdly_shieldRightSeeMoreToolBar",
									false
								),
								UISwitch(
									"【屏蔽】大家还在看",
									"baidu_isite_wjz2tdly_shieldArticleBottom",
									true
								),
							],
						},
						{
							text: "功能",
							type: "forms",
							forms: [
								UISwitch(
									"自动展开全文",
									"baidu_isite_wjz2tdly_autoExpandFullText",
									true
								),
							],
						},
					],
				},
				{
					text: "知了爱学",
					description: "aistudy",
					type: "deepMenu",
					forms: [
						{
							text: "屏蔽",
							type: "forms",
							forms: [
								UISwitch(
									"【屏蔽】底部工具栏",
									"baidu_ai_study_shieldBottomToolBar",
									true
								),
							],
						},
						{
							text: "功能",
							type: "forms",
							forms: [
								UISwitch(
									"自动展开全文",
									"baidu_ai_study_autoExpandFullText",
									true
								),
							],
						},
					],
				},
			],
		},
	],
};

export { PanelAiStudySettingUI };
