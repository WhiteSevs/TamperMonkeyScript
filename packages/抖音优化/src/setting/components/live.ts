import { DOMUtils, utils } from "@/env";
import { UISwitch } from "../common-components/ui-switch";
import { DouYinDanmuFilter } from "@/main/Live/DouYinLiveDanmuku";

const PanelLiveConfig: PopsPanelContentConfig = {
	id: "panel-config-live",
	title: "直播",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"自动进入网页全屏",
					"live-autoEnterElementFullScreen",
					false,
					void 0,
					"网页加载完毕后自动点击网页全屏按钮进入全屏"
				),
				UISwitch(
					"解锁画质选择",
					"live-unlockImageQuality",
					true,
					void 0,
					"未登录的情况下选择原画实际上是未登录的情况下最高选择的画质"
				),
			],
		},
		{
			text: "视频区域内-屏蔽",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】顶栏信息",
					"live-shieldTopToolBarInfo",
					false,
					void 0,
					"屏蔽元素，包括直播作者、右侧的礼物展馆"
				),
				UISwitch(
					"【屏蔽】底部的礼物栏",
					"live-shieldGiftColumn",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】礼物特效",
					"live-shieldGiftEffects",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】弹幕",
					"live-shieldDanmuku",
					false,
					void 0,
					"屏蔽元素"
				),
			],
		},
		{
			text: "聊天室-屏蔽",
			type: "forms",
			forms: [
				UISwitch(
					"【屏蔽】聊天室",
					"live-shieldChatRoom",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】贵宾席",
					"live-shielChatRoomVipSeats",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】用户等级图标",
					"dy-live-shieldUserLevelIcon",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】VIP图标",
					"dy-live-shieldUserVIPIcon",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】粉丝牌",
					"dy-live-shieldUserFansIcon",
					false,
					void 0,
					"屏蔽元素"
				),
				UISwitch(
					"【屏蔽】信息播报",
					"dy-live-shieldMessage",
					false,
					void 0,
					"底部滚动播报的的xxx来了，xxx给主播点赞"
				),
			],
		},
		{
			text: "弹幕屏蔽规则(可正则)",
			type: "forms",
			forms: [
				UISwitch(
					"启用",
					"live-danmu-shield-rule-enable",
					false,
					void 0,
					"启用弹幕屏蔽规则"
				),
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
						textarea.value = DouYinDanmuFilter.get();
						DOMUtils.on(
							textarea,
							["input", "propertychange"],
							utils.debounce(function () {
								DouYinDanmuFilter.set(textarea.value);
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

export { PanelLiveConfig };
