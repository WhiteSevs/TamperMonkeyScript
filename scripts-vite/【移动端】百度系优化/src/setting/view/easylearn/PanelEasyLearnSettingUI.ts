import { BaiduRouter } from "@/router/BaiduRouter";
import { UISwitch } from "@/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

const PanelEasyLearnSettingUI: PopsPanelContentConfig = {
	id: "baidu-panel-config-easy-learn",
	title: "教育",
	headerTitle: "百度教育<br />easylearn.baidu.com<br />uf9kyh.smartapps.cn",
	isDefault() {
		return BaiduRouter.isEasyLearn() || BaiduRouter.isMiniJiaoYu();
	},
	scrollToDefaultView: true,
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: "小程序",
					type: "deepMenu",
					forms: [
						{
							text: "屏蔽",
							type: "forms",
							forms: [
								UISwitch(
									"【屏蔽】底部下拉菜单",
									"mini_baidu_jiaoyu_shield_bottom_pull_down_menu",
									false
								),
								UISwitch(
									"【屏蔽】大家还在搜",
									"mini_baidu_jiaoyu-blockEveryOneSearch",
									false
								),
							],
						},
					],
				},
			],
		},
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
								UISwitch(
									"解锁顶部搜索框",
									"baidu_easylearn_unlocking_top_search_input",
									true
								),
								UISwitch(
									"解锁搜题上限",
									"baidu_easylearn_unlocking_the_upper_limit_of_search_questions",
									true
								),
								UISwitch(
									"自动显示答案",
									"baidu_easylearn_auto_show_answer",
									true
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
									"【屏蔽】本题试卷",
									"baidu_easylearn_shield_this_question_paper",
									false
								),
								UISwitch(
									"【屏蔽】本卷好题",
									"baidu_easylearn_shield_good_questions_in_this_volume",
									false
								),
								UISwitch(
									"【屏蔽】相关试卷",
									"baidu_easylearn_shield_related_test_papers",
									false
								),
								UISwitch(
									"【屏蔽】视频讲解",
									"baidu_easylearn_shield_video_explanation",
									false
								),
								UISwitch(
									"【屏蔽】学霸笔记",
									"baidu_easylearn_shield_xueba_notes",
									false
								),
								UISwitch(
									"【屏蔽】底部工具栏",
									"baidu_easylearn_shield_bottom_toolbar",
									false
								),
							],
						},
					],
				},
			],
		},
	],
};

export { PanelEasyLearnSettingUI };
