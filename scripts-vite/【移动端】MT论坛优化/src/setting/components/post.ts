import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "../common-components/ui-switch";
import { UIInput } from "../common-components/ui-input";
import { UIButton } from "../common-components/ui-button";
import { MTEditorOptimizationNormal } from "@/main/forum-post/MTEditorOptimization-normal";
import Qmsg from "qmsg";
import { DOMUtils } from "@/env";
import { MTEditorOptimization } from "@/main/forum-post-publish/MTEditorOptimization";

export const Component_ForumPost: PopsPanelContentConfig = {
	id: "component-forum-post",
	title: "帖子",
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
									true,
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
							],
						},
					],
				},
				{
					text: "自动加载评论",
					type: "deepMenu",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UISwitch(
									"自动加载下一页评论",
									"mt-forum-post-loadNextPageComment",
									true,
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
				},
				{
					text: "编辑器-简略版",
					type: "deepMenu",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UISwitch(
									"启用",
									"mt-forum-post-editorOptimizationNormal",
									true,
									void 0,
									"优化样式，插入bbcode代码等"
								),
								UISwitch(
									"自动保存输入记录",
									"mt-forum-post-editorOptimizationNormal-recordInputText",
									true,
									void 0,
									"当回复时会自动清空记录"
								),
								UIButton(
									"清空回复记录",
									"当前占用空间大小：计算中",
									"清理",
									void 0,
									false,
									false,
									"default",
									async (event) => {
										let $click = event.target as HTMLElement;
										let $li = $click.closest("li") as HTMLLIElement;
										let $desc = $li.querySelector<HTMLElement>(
											".pops-panel-item-left-desc-text"
										)!;
										let result =
											await MTEditorOptimizationNormal.clearAllReplyRecord();
										if (result.success) {
											Qmsg.success("清理成功");
											DOMUtils.text(
												$desc,
												`当前占用空间大小：${await MTEditorOptimizationNormal.getReplyRecordSize()}`
											);
										} else {
											Qmsg.error("清理失败 " + result.msg);
										}
									},
									async (formCOnfig, container) => {
										let $desc = container.target!.querySelector<HTMLElement>(
											".pops-panel-item-left-desc-text"
										)!;
										DOMUtils.text(
											$desc,
											`当前占用空间大小：${await MTEditorOptimizationNormal.getReplyRecordSize()}`
										);
									}
								),
							],
						},
					],
				},
				{
					text: "编辑器-完整版",
					type: "deepMenu",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UISwitch(
									"启用",
									"mt-forum-post-publish-editorOptimization",
									true,
									void 0,
									"优化样式，插入bbcode代码，双列预览等"
								),
								UISwitch(
									"自动保存输入记录",
									"mt-forum-post-editorOptimization-recordInputText",
									true,
									void 0,
									"当回复/发表时会自动清空记录"
								),
								UIButton(
									"清空回复记录",
									"当前占用空间大小：计算中",
									"清理",
									void 0,
									false,
									false,
									"default",
									async (event) => {
										let $click = event.target as HTMLElement;
										let $li = $click.closest("li") as HTMLLIElement;
										let $desc = $li.querySelector<HTMLElement>(
											".pops-panel-item-left-desc-text"
										)!;
										let result =
											await MTEditorOptimization.clearAllReplyRecord();
										if (result.success) {
											Qmsg.success("清理成功");
											DOMUtils.text(
												$desc,
												`当前占用空间大小：${await MTEditorOptimization.getReplyRecordSize()}`
											);
										} else {
											Qmsg.error("清理失败 " + result.msg);
										}
									},
									async (formCOnfig, container) => {
										let $desc = container.target!.querySelector<HTMLElement>(
											".pops-panel-item-left-desc-text"
										)!;
										DOMUtils.text(
											$desc,
											`当前占用空间大小：${await MTEditorOptimization.getReplyRecordSize()}`
										);
									}
								),
							],
						},
					],
				},
				{
					text: "编辑器-图床配置",
					type: "deepMenu",
					forms: [
						{
							type: "forms",
							text: `<a href="https://www.helloimg.com/" target="_blank">Hello图床</a>`,
							forms: [
								UISwitch(
									"启用",
									"mt-image-bed-hello-enable",
									false,
									void 0,
									"启用Hello图床"
								),
								UIInput(
									"账号",
									"mt-image-bed-hello-account",
									"",
									"",
									void 0,
									"必填"
								),
								UIInput(
									"密码",
									"mt-image-bed-hello-password",
									"",
									"",
									void 0,
									"必填",
									false,
									true
								),
								UIInput(
									"token",
									"mt-image-bed-hello-token",
									"",
									"",
									void 0,
									"必填",
									false,
									true
								),
							],
						},
						{
							type: "forms",
							text: `<a href="https://img.binmt.cc/" target="_blank">MT图床</a>`,
							forms: [
								UISwitch(
									"启用",
									"mt-image-bed-mt-enable",
									true,
									void 0,
									"启用MT图床"
								),
							],
						},
						{
							type: "forms",
							text: "图片水印",
							forms: [
								UISwitch(
									"启用",
									"mt-image-bed-watermark-enable",
									false,
									void 0,
									"开启后会为图床图片添加文字水印"
								),
								UISwitch(
									"自动添加水印",
									"mt-image-bed-watermark-autoAddWaterMark",
									false,
									void 0,
									"开启后会自动添加水印，关闭后会有添加水印后的图片预览"
								),
								UIInput("水印文字", "mt-image-bed-watermark-text", "MT论坛"),
								UIInput(
									"颜色",
									"mt-image-bed-watermark-text-color",
									"#000000",
									void 0,
									void 0,
									"",
									false,
									false,
									(formCOnfig, container) => {
										let $input = container.target?.querySelector("input")!;
										let $suffix =
											container.target?.querySelector<HTMLDivElement>(
												".pops-panel-input__suffix"
											)!;
										DOMUtils.hide($suffix, false);
										$input.setAttribute("type", "color");
										DOMUtils.css($input, {
											margin: "unset",
											padding: "unset",
											width: "80px",
										});
									}
								),
								UIInput(
									"大小",
									"mt-image-bed-watermark-font-size",
									16,
									void 0,
									void 0,
									void 0,
									true
								),
								UIInput(
									"透明度",
									"mt-image-bed-watermark-font-opacity",
									1,
									void 0,
									void 0,
									void 0,
									true
								),
								UIInput(
									"左右间距",
									"mt-image-bed-watermark-left-right-margin",
									80,
									void 0,
									void 0,
									void 0,
									true
								),
								UIInput(
									"上下间距",
									"mt-image-bed-watermark-top-bottom-margin",
									80,
									void 0,
									void 0,
									void 0,
									true
								),
								UIInput(
									"旋转角度",
									"mt-image-bed-watermark-rotate",
									45,
									void 0,
									void 0,
									void 0,
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
