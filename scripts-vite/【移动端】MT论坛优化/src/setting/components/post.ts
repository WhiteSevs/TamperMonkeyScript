import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "../common-components/ui-switch";

export const Component_ForumPost: PopsPanelContentConfig = {
	id: "component-forum-post",
	title: "帖子",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"评论过滤器",
					"mt-post-comment-filter",
					true,
					void 0,
					"将会在左侧面板添加【评论过滤器】菜单"
				),
				UISwitch(
					"自动展开内容",
					"mt-forum-post-autoExpandContent",
					true,
					void 0,
					"注入CSS展开帖子的内容"
				),
				UISwitch(
					"修复图片宽度",
					"mt-forum-post-repairImageWidth",
					true,
					void 0,
					"修复图片宽度超出页面宽度的问题"
				),
				UISwitch(
					"移除帖子字体效果",
					"mt-forum-post-removeFontStyle",
					false,
					void 0,
					""
				),
				UISwitch(
					"移除评论区的字体效果",
					"mt-forum-post-removeCommentFontStyle",
					false,
					void 0,
					""
				),
				UISwitch(
					"添加【点评】按钮",
					"mt-forum-post-addCommentOnBtn",
					false,
					void 0,
					"在评论区的每个评论右下角添加按钮"
				),
				UISwitch(
					"附件点击提醒",
					"mt-forum-post-setAttachmentsClickTip",
					true,
					void 0,
					"阻止默认点击附件就会触发附件下载"
				),
				UISwitch(
					"代码块优化",
					"mt-forum-post-codeQuoteOptimization",
					false,
					void 0,
					"自动检测代码块语言并设置关键字高亮"
				),
				UISwitch(
					"图片查看优化",
					"mt-forum-post-optimizationImagePreview",
					true,
					void 0,
					"使用Viewer查看图片"
				),
				UISwitch(
					"编辑器优化-简略版",
					"mt-forum-post-editorOptimizationNormal",
					false,
					void 0,
					"优化样式，插入bbcode代码等"
				),
			],
		},
		{
			type: "forms",
			text: "自动加载评论",
			forms: [
				UISwitch(
					"自动加载下一页评论",
					"mt-forum-post-loadNextPageComment",
					false,
					void 0,
					""
				),
				UISwitch(
					"同步加载的地址",
					"mt-forum-post-syncNextPageUrl",
					false,
					void 0,
					"便于刷新页面会停留在当前查看的评论页面"
				),
			],
		},
	],
};
