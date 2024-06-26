import { DOMUtils, utils } from "@/env";
import { UISelect } from "../common-components/ui-select";
import { UISwitch } from "../common-components/ui-switch";
import { DouYinVideoFilter } from "@/main/video/DouYinVideoFilter";
import { UIButton } from "../common-components/ui-button";
import { DouYinVideoShortcut } from "@/main/video/DouYinVideoShortCut";

const PanelVideoConfig: PopsPanelContentConfig = {
	id: "panel-config-video",
	title: "视频",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"沉浸模式",
					"fullScreen",
					false,
					void 0,
					"移除右侧工具栏、底部信息栏等"
				),
				UISwitch("手机模式", "mobileMode", false, void 0, "放大各种文字和图标"),
			],
		},
		{
			text: "视频",
			type: "forms",
			forms: [
				UISelect<number>(
					"清晰度",
					"chooseVideoDefinition",
					1,
					[
						{
							text: "智能",
							value: 0,
						},
						{
							text: "极速",
							value: 4,
						},
						{
							text: "流畅",
							value: 3,
						},
						{
							text: "清晰",
							value: 2,
						},
						{
							text: "高清",
							value: 1,
						},
					],
					void 0,
					"自行选择清晰度"
				),
				UISwitch(
					"视频解析",
					"parseVideo",
					true,
					void 0,
					"分享->下载(灰色的也可点击)"
				),
				UISwitch(
					"评论区移到中间",
					"changeCommentToBottom",
					true,
					void 0,
					"修改评论区为中间弹出而非右侧区域"
				),
				UISwitch(
					"↑自适应评论区位置",
					"douyin-video-autoCheckChangeCommentToBottom",
					true,
					void 0,
					"根据window.screen.orientation.type自动判断是否开启【评论区移到中间】"
				),
				UISwitch(
					"自动进入网页全屏",
					"autoEnterElementFullScreen",
					false,
					void 0,
					"网页加载完毕后自动点击网页全屏按钮进入全屏"
				),
				UISwitch(
					"双击进入网页全屏",
					"dy-video-doubleClickEnterElementFullScreen",
					false,
					void 0,
					"双击视频自动进入网页全屏，检测间隔250ms"
				),
			],
		},
		{
			text: "快捷键",
			type: "forms",
			forms: [
				UIButton(
					"倍速 -> 小",
					"视频倍速变小",
					() => {
						return DouYinVideoShortcut.shortCut.getShowText(
							"dy-video-rate-low",
							"暂无快捷键"
						);
					},
					"keyboard",
					false,
					false,
					"default",
					(event) => {
						let $click = event.target as HTMLDivElement;
						let spanElement = $click
							.closest(".pops-panel-button")
							?.querySelector("span") as HTMLSpanElement;
						DouYinVideoShortcut.shortCut.inputShortCut(
							"dy-video-rate-low",
							"暂无快捷键",
							(showText) => {
								spanElement.innerHTML = showText;
							}
						);
					}
				),
				UIButton(
					"倍速 -> 大",
					"视频倍速变大",
					() => {
						return DouYinVideoShortcut.shortCut.getShowText(
							"dy-video-rate-up",
							"暂无快捷键"
						);
					},
					"keyboard",
					false,
					false,
					"default",
					(event) => {
						let $click = event.target as HTMLDivElement;
						let spanElement = $click
							.closest(".pops-panel-button")
							?.querySelector("span") as HTMLSpanElement;
						DouYinVideoShortcut.shortCut.inputShortCut(
							"dy-video-rate-up",
							"暂无快捷键",
							(showText) => {
								spanElement.innerHTML = showText;
							}
						);
					}
				),
			],
		},
		{
			text: "视频区域内-屏蔽",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】右侧的展开评论按钮",
					"shieldRightExpandCommentButton",
					true,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】搜索悬浮栏",
					"shieldSearchFloatingBar",
					true,
					void 0,
					"屏蔽元素，一般出现在左上角"
				),
				UISwitch(
					"【屏蔽】网页全屏关闭按钮",
					"shieldCloseFullScreenButton",
					true,
					void 0,
					"屏蔽元素，一般开启网页全屏后出现在左上角"
				),
				UISwitch(
					"【屏蔽】切换播放",
					"shieldPlaySwitchButton",
					false,
					void 0,
					"屏蔽元素，在右侧作者头像上方"
				),
				UISwitch(
					"【屏蔽】作者头像",
					"shieldAuthorAvatar",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch("【屏蔽】点赞", "shieldLikeButton", false, void 0, "屏蔽元素"),
				UISwitch(
					"【屏蔽】评论",
					"shieldCommentButton",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】收藏",
					"shieldCollectionButton",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】分享",
					"shieldSharenButton",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】看相关",
					"shieldRelatedRecommendationsButton",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】更多",
					"shieldMoreButton",
					false,
					void 0,
					"...按钮，屏蔽元素"
				),
				UISwitch(
					"【屏蔽】底部视频工具栏",
					"shieldBottomVideoToolBar",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】弹幕容器",
					"shieldBottomVideoToolbarDanmuContainer",
					false,
					void 0,
					"屏蔽元素（不包括屏蔽弹幕）"
				),
			],
		},
		{
			text: "评论区域内-屏蔽",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】评论工具栏",
					"dy-video-shieldUserCommentToolBar",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】大家都在搜",
					"dy-video-shieldUserCommentEveryOneAllSearch",
					false,
					void 0,
					"在评论区的顶部出现"
				),
			],
		},
		{
			text: "视频过滤规则(可正则)",
			type: "forms",
			forms: [
				UISwitch(
					"启用",
					"shieldVideo",
					true,
					void 0,
					"开启后可启用下面的屏蔽功能"
				),
				UISwitch(
					"【屏蔽】直播",
					"shieldVideo-live",
					true,
					void 0,
					"过滤掉直播"
				),
				UISwitch("【屏蔽】广告", "shieldVideo-ads", true, void 0, "过滤掉广告"),

				{
					type: "own",
					getLiElementCallBack(liElement: HTMLLIElement) {
						let textareaDiv = DOMUtils.createElement(
							"div",
							{
								className: "pops-panel-textarea",
								innerHTML: `<textarea placeholder="请输入屏蔽规则，每行一个" style="height:350px;"></textarea>`,
							},
							{
								style: "width: 100%;",
							}
						);
						let textarea = textareaDiv.querySelector(
							"textarea"
						) as HTMLTextAreaElement;
						textarea.value = DouYinVideoFilter.get();
						DOMUtils.on(
							textarea,
							["input", "propertychange"],
							utils.debounce(function () {
								DouYinVideoFilter.set(textarea.value);
							}, 200)
						);
						liElement.appendChild(textareaDiv);
						return liElement;
					},
				},
			],
		},
	],
};

export { PanelVideoConfig };
