import { DOMUtils } from "@/env";
import { CSDNRouter } from "@/router/CSDNRouter";
import { UISlider } from "@/setting/common-components/ui-slider";
import { UISwitch } from "@/setting/common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

const MSettingUIBlog: PopsPanelContentConfig = {
	id: "m-panel-blog",
	title: "博客",
	isDefault() {
		return CSDNRouter.isBlog();
	},
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: "全局屏蔽",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"【屏蔽】广告",
									"m-csdn-blog-removeAds",
									true,
									void 0,
									"包括：登录弹窗、打开APP、ios版本提示等"
								),
								UISwitch(
									"【屏蔽】顶部Toolbar",
									"m-csdn-blog-shieldTopToolbar",
									false
								),
							],
						},
					],
				},
				{
					text: "内容",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"允许选中文字",
									"m-csdn-blog-allowSelectText",
									true,
									void 0,
									"设置user-select: text;"
								),
								UISwitch(
									"自动展开",
									"m-csdn-blog-autoExpandContent",
									true,
									void 0,
									"包括内容、代码块"
								),
								UISwitch(
									"不限制代码块的最大高度",
									"m-csdn-blog-notLimitCodePreMaxHeight",
									false,
									void 0,
									"让代码块的高度直接被撑开"
								),
							],
						},
					],
				},
				{
					text: "评论",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"启用",
									"m-csdn-blog-comment-enable",
									true,
									void 0,
									"关闭是屏蔽评论区"
								),
								UISwitch(
									"不限制评论区的最大高度",
									"m-csdn-blog-notLimitCommentMaxHeight",
									true,
									void 0,
									"让评论区高度直接被撑开"
								),
							],
						},
					],
				},
				{
					text: "底部文章",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"启用",
									"m-csdn-blog-bottomArticleEnable",
									true,
									void 0,
									"关闭是屏蔽底部文章"
								),
								UISwitch(
									"移除资源下载",
									"m-csdn-blog-removeResourceArticle",
									false,
									void 0,
									"移除download.csdn.net、www.iteye.com、edu.csdn.net的文章链接"
								),
								UISwitch(
									"重构",
									"m-csdn-blog-refactoringRecommendation",
									true,
									void 0,
									"文章的样式统一"
								),
								UISwitch(
									"新标签页打开",
									"m-csdn-blog-openNewTab",
									true,
									void 0,
									"新标签页打开文章"
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
									"劫持-禁止复制",
									"m-csdn-blog-unBlockCopy",
									true,
									void 0,
									"允许点击复制按钮进行复制"
								),
							],
						},
					],
				},
			],
		},
	],
};

export { MSettingUIBlog };
