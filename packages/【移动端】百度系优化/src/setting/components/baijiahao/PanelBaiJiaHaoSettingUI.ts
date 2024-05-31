import { BaiduRouter } from "@/router/BaiduRouter";
import { UISwitch } from "@/setting/common-components/ui-switch";

const PanelBaiJiaHaoSettingUI: PopsPanelContentConfig = {
	id: "baidu-panel-config-baijiahao",
	title: "百家号",
	headerTitle: "百家号<br />baijiahao.baidu.com<br />mbd.baidu.com",
	isDefault() {
		return BaiduRouter.isBaiJiaHao() || BaiduRouter.isMbd();
	},
	scrollToDefaultView: true,
	forms: [
		{
			text: "百家号（baijiahao）👇",
			type: "forms",
			forms: [],
		},
		{
			text: "屏蔽",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】推荐文章",
					"baijiahao_shield_recommended_article",
					true
				),
				UISwitch("【屏蔽】用户评论", "baijiahao_shield_user_comment", false),
				UISwitch(
					"【屏蔽】底部悬浮工具栏",
					"baijiahao_shield_user_comment_input_box",
					false
				),
			],
		},
		{
			text: "劫持/拦截",
			type: "forms",
			forms: [
				UISwitch(
					"劫持-唤醒App",
					"baijiahao_hijack_wakeup",
					true,
					void 0,
					"阻止唤醒调用App"
				),
				UISwitch(
					"劫持-iframe唤醒App",
					"baidu_baijiahao_hijack_iframe",
					true,
					void 0,
					"阻止唤醒调用App"
				),
				UISwitch("劫持-OpenBox函数", "baidu_baijiahao_hijack_openbox", true),
			],
		},
		{
			text: "百家号（mbd）👇",
			type: "forms",
			forms: [],
		},
		{
			text: "屏蔽",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】精彩评论",
					"baidu_mbd_block_exciting_comments",
					false
				),
				UISwitch(
					"【屏蔽】精彩推荐",
					"baidu_mbd_block_exciting_recommendations",
					false
				),
				UISwitch(
					"【屏蔽】底部工具栏",
					"baidu_mbd_shield_bottom_toolbar",
					false
				),
			],
		},
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"伪装成lite baiduboxapp",
					"baidu_mbd_camouflage_lite_baiduboxapp",
					true,
					void 0,
					"可以优化浏览体验"
				),
			],
		},
		{
			text: "劫持/拦截",
			type: "forms",
			forms: [
				UISwitch(
					"拦截-唤醒App",
					"baidu_mbd_hijack_wakeup",
					true,
					void 0,
					"阻止唤醒调用App"
				),
				UISwitch(
					"拦截-iframe唤醒App",
					"baidu_mbd_hijack_iframe",
					true,
					void 0,
					"阻止唤醒调用App"
				),
				UISwitch(
					"劫持-BoxJSBefore函数",
					"baidu_mbd_hijack_BoxJSBefore",
					true,
					void 0,
					"阻止唤醒调用App"
				),
			],
		},
	],
};

export { PanelBaiJiaHaoSettingUI };
