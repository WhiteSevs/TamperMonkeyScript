import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";

const SettingUIPC: PopsPanelContentConfig = {
	id: "jianshu-panel-config-pc",
	title: "桌面端",
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: "功能",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch("全文居中", "JianShuArticleCenter", true),
								UISwitch("自动展开全文", "JianShuAutoExpandFullText", true),
								UISwitch(
									"重定向链接",
									"JianShuAutoJumpRedirect_PC",
									true,
									void 0,
									"自动跳转简书拦截的Url链接"
								),
							],
						},
					],
				},
				{
					text: "屏蔽",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"【屏蔽】底部推荐阅读",
									"JianShuShieldRecommendedReading",
									false
								),
								UISwitch("【屏蔽】评论区", "JianShuShieldUserComments", false),
								UISwitch(
									"【屏蔽】相关文章",
									"JianShuShieldRelatedArticles",
									false
								),
								UISwitch(
									"【屏蔽】客户端弹窗",
									"jianshu-shieldClientDialog",
									true,
									void 0,
									"弹出的【扫码安装简书客户端 畅享全文阅读体验】"
								),
								UISwitch("【屏蔽】顶部导航栏", "jianshu-shieldTopNav", false),
								UISwitch(
									"【屏蔽】底部工具栏",
									"jianshu-shieldBottomToolbar",
									false,
									void 0,
									"屏蔽掉底部悬浮的评论输入框、评论、点赞..."
								),
							],
						},
					],
				},
				{
					text: "劫持/拦截",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"拦截-剪贴板",
									"JianShuRemoveClipboardHijacking",
									true,
									void 0,
									"去除禁止复制"
								),
							],
						},
					],
				},
			],
		},
	],
};

export { SettingUIPC };
