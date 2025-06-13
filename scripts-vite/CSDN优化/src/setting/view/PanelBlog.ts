import { DOMUtils } from "@/env";
import { CSDNRouter } from "@/router/CSDNRouter";
import { UISlider } from "@components/setting/components/ui-slider";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

const SettingUIBlog: PopsPanelContentConfig = {
	id: "panel-blog",
	title: "博客",
	isDefault() {
		return CSDNRouter.isBlog();
	},
	forms: [
		{
			type: "forms",
			text: "",
			forms: [
				{
					type: "deepMenu",
					text: "文章",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								{
									text: "布局屏蔽",
									type: "deepMenu",
									forms: [
										{
											text: "",
											type: "forms",
											forms: [
												UISwitch(
													"【屏蔽】登录弹窗",
													"csdn-blog-shieldLoginDialog",
													true
												),
												UISwitch(
													"【屏蔽】左侧博客信息",
													"csdn-blog-shieldLeftBlogContainerAside",
													false
												),
												UISwitch(
													"【屏蔽】右侧目录信息",
													"csdn-blog-shieldRightDirectoryInformation",
													false
												),
												UISwitch(
													"【屏蔽】底部的悬浮工具栏",
													"csdn-blog-shieldBottomFloatingToolbar",
													false
												),
											],
										},
									],
								},
								{
									text: "右侧悬浮工具栏",
									type: "deepMenu",
									forms: [
										{
											text: "功能",
											type: "forms",
											forms: [
												UISwitch(
													"启用",
													"csdn-blog-rightToolbarEnable",
													true,
													void 0,
													"创作中心，隐藏/显示侧栏，新手引导，客服、举报..."
												),
												UISwitch(
													"【添加按钮】前往评论",
													"csdn-blog-addGotoRecommandButton",
													true,
													void 0,
													"在悬浮工具栏最后面添加"
												),
												UISlider(
													"right偏移",
													"csdn-blog-rightToolbarRightOffset",
													90,
													0,
													document.documentElement.clientWidth,
													(event, value) => {
														let csdnSideToolbar = document.querySelector(
															".csdn-side-toolbar"
														) as HTMLDivElement;
														DOMUtils.css(csdnSideToolbar, {
															right: value + "px",
														});
													},
													(value) => {
														return `当前：${value}px，默认：90px`;
													}
												),
												UISlider(
													"top偏移",
													"csdn-blog-rightToolbarTopOffset",
													140,
													0,
													document.documentElement.clientHeight,
													(event, value) => {
														let csdnSideToolbar = document.querySelector(
															".csdn-side-toolbar"
														) as HTMLDivElement;
														DOMUtils.css(csdnSideToolbar, {
															top: value + "px",
														});
													},
													(value) => {
														return `当前：${value}px，默认：90px`;
													}
												),
											],
										},
										{
											text: "屏蔽",
											type: "forms",
											forms: [
												UISwitch(
													"【屏蔽】创作中心",
													"csdn-blog-rightToolbarCreativeCenter",
													false
												),
												UISwitch(
													"【屏蔽】显示/隐藏侧栏",
													"csdn-blog-rightToolbarShowOrSidebar",
													false
												),
												UISwitch(
													"【屏蔽】新手引导",
													"csdn-blog-rightToolbarBeginnerGuidance",
													false
												),
												UISwitch(
													"【屏蔽】客服",
													"csdn-blog-rightToolbarCustomerService",
													false
												),
												UISwitch(
													"【屏蔽】举报",
													"csdn-blog-rightToolbarReport",
													false
												),
												UISwitch(
													"【屏蔽】返回顶部",
													"csdn-blog-rightToolbarBackToTop",
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
											text: "功能",
											type: "forms",
											forms: [
												UISwitch(
													"点击代码块自动展开",
													"csdn-blog-clickPreCodeAutomatically",
													true,
													void 0,
													"当鼠标点击代码块区域时，将自动展开内容"
												),
												UISwitch(
													"自动展开代码块",
													"csdn-blog-autoExpandCodeContent",
													true,
													void 0,
													"懒人操作，免手动点击展开"
												),
												UISwitch(
													"自动展开内容",
													"csdn-blog-autoExpandContent",
													true,
													void 0,
													"懒人操作，免手动点击展开"
												),
												UISwitch(
													"全文居中",
													"csdn-blog-articleCenter",
													true,
													function (event, enable) {
														if (enable) {
															alert(
																"为了更好的呈现效果，请开启功能：【屏蔽】左侧博客信息、【屏蔽】右侧目录信息"
															);
														}
													},
													"自动屏蔽左侧和右侧的信息，且将文章居中"
												),
												UISwitch(
													"允许选择内容",
													"csdn-blog-allowSelectContent",
													true,
													void 0
												),
											],
										},
										{
											text: "屏蔽",
											type: "forms",
											forms: [
												UISwitch(
													"【屏蔽】底部xx技能树",
													"csdn-blog-shieldBottomSkillTree",
													false
												),
												UISwitch(
													"【屏蔽】选中文字悬浮栏",
													"csdn-blog-shieldArticleSearchTip",
													false,
													void 0,
													"选中文字弹出的，例如：搜索、评论、笔记"
												),
											],
										},
									],
								},
								{
									text: "评论区",
									type: "deepMenu",
									forms: [
										{
											text: "",
											type: "forms",
											forms: [
												UISwitch(
													"启用",
													"csdn-blog-blockComment",
													true,
													void 0,
													"关闭是屏蔽评论区"
												),
												UISwitch(
													"优化评论区的位置",
													"csdn-blog-restoreComments",
													true
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
													"csdn-blog-bottomRecommendArticleEnable",
													true,
													void 0,
													"关闭是屏蔽底部文章"
												),
												UISwitch(
													"标识CSDN下载",
													"csdn-blog-identityCSDNDownload",
													true,
													void 0,
													"使用红框标识"
												),
												UISwitch(
													"移除资源下载的文章",
													"csdn-blog-removeResourceDownloadArticle",
													false,
													void 0,
													"download.csdn.net<br>www.iteye.com<br>edu.csdn.net"
												),
											],
										},
									],
								},
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
					text: "全局布局屏蔽",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"【屏蔽】顶部工具栏",
									"csdn-blog-shieldTopToolbar",
									false
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
									"拦截-复制的小尾巴",
									"csdn-blog-removeClipboardHijacking",
									true
								),
								UISwitch(
									"劫持-禁止复制",
									"csdn-blog-unBlockCopy",
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

export { SettingUIBlog };
