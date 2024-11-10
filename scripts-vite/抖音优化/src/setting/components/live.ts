import { DOMUtils, log, utils } from "@/env";
import { UISwitch } from "../common-components/ui-switch";
import { DouYinDanmuFilter } from "@/main/live/DouYinLiveDanmuku";
import { PopsPanel } from "../setting";
import { UISelect } from "../common-components/ui-select";
import { VideoQualityMap } from "@/main/live/DouYinLive";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { AutoOpenOrClose } from "../utils/all-open-or-close";
import { UIButtonShortCut } from "../common-components/ui-button-shortcut";
import { DouYinLiveShortCut } from "@/main/live/DouYinLiveShortCut";

const PanelLiveConfig: PopsPanelContentConfig = {
	id: "panel-config-live",
	title: "直播",
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
							text: "功能",
							type: "forms",
							forms: [
								UISelect<string>(
									"清晰度",
									"live-chooseQuality",
									"auto",
									(() => {
										return Object.keys(VideoQualityMap).map((key: string) => {
											let item = VideoQualityMap[key];
											return {
												value: key,
												text: item.label,
											};
										});
									})(),
									void 0,
									"自行选择清晰度"
								),
								UISwitch(
									"解锁画质选择",
									"live-unlockImageQuality",
									true,
									void 0,
									"未登录的情况下选择原画实际上是未登录的情况下最高选择的画质"
								),
								UISwitch(
									"自动进入网页全屏",
									"live-autoEnterElementFullScreen",
									false,
									void 0,
									"网页加载完毕后自动点击网页全屏按钮进入全屏"
								),
								UISwitch(
									"监听并关闭【长时间无操作，已暂停播放】弹窗",
									"live-waitToRemovePauseDialog",
									true,
									void 0,
									"自动监听并检测弹窗"
								),
								UISwitch(
									"禁止自动播放",
									"live-pauseVideo",
									false,
									void 0,
									"暂停直播播放"
								),
								UISwitch(
									"解析直播信息",
									"live-parsePlayerInstance",
									false,
									void 0,
									"开启后将在油猴菜单中新增菜单【⚙ PlayerInstance】，可解析当前的直播信息"
								),
								UISwitch(
									"禁用双击点赞",
									"dy-live-disableDoubleClickLike",
									false,
									void 0,
									"禁止直播视频区域双击点赞"
								),
							],
						},
						{
							text: "视频区域背景色",
							type: "forms",
							forms: [
								UISwitch(
									"启用",
									"live-bgColor-enable",
									false,
									void 0,
									"自定义视频背景色"
								),
								{
									type: "own",
									attributes: {
										"data-key": "live-changeBackgroundColor",
										"data-default-value": "#000000",
									},
									getLiElementCallBack(liElement) {
										let $left = DOMUtils.createElement("div", {
											className: "pops-panel-item-left-text",
											innerHTML: `
											<p class="pops-panel-item-left-main-text">视频背景颜色</p>
											<p class="pops-panel-item-left-desc-text">自定义视频背景颜色，包括评论区</p>
											`,
										});
										let $right = DOMUtils.createElement("div", {
											className: "pops-panel-item-right",
											innerHTML: `
											<input type="color" class="pops-color-choose" />
											`,
										});
										let $color =
											$right.querySelector<HTMLInputElement>(
												".pops-color-choose"
											)!;
										$color.value = PopsPanel.getValue(
											"live-changeBackgroundColor"
										);
										let $style = DOMUtils.createElement("style");
										DOMUtils.append(document.head, $style);
										DOMUtils.on(
											$color,
											["input", "propertychange"],
											(event) => {
												log.info("选择颜色：" + $color.value);
												$style.innerHTML = `
											div[id^="living_room_player_container"] > div,
											#chatroom > div{
												background: ${$color.value};
											}
											`;
												PopsPanel.setValue(
													"live-changeBackgroundColor",
													$color.value
												);
											}
										);

										liElement.appendChild($left);
										liElement.appendChild($right);
										return liElement;
									},
								},
							],
						},
					],
				},
				{
					text: "过滤-弹幕",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"启用",
									"live-danmu-shield-rule-enable",
									false,
									void 0,
									"启用自定义的弹幕过滤规则"
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
				},
				{
					text: "自定义快捷键",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UIButtonShortCut(
									"【屏蔽】聊天室",
									"",
									"dy-live-block-chatroom",
									void 0,
									"点击录入快捷键",
									void 0,
									DouYinLiveShortCut.shortCut
								),
								UIButtonShortCut(
									"【屏蔽】礼物特效",
									"",
									"dy-live-shieldGiftEffects",
									void 0,
									"点击录入快捷键",
									void 0,
									DouYinLiveShortCut.shortCut
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "快捷键禁用",
					afterEnterDeepMenuCallBack:
						AutoOpenOrClose.afterEnterDeepMenuCallBack,
					forms: [
						{
							type: "forms",
							text: AutoOpenOrClose.text,
							forms: [
								UISwitch("刷新", "dy-live-refresh", false, void 0, "E"),
								UISwitch(
									"屏幕旋转",
									"dy-live-screenRotation",
									false,
									void 0,
									"D"
								),
								UISwitch(
									"开启小窗模式",
									"dy-live-enableSmallWindowMode",
									false,
									void 0,
									"U"
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
					text: "屏蔽-视频区域内",
					type: "deepMenu",
					afterEnterDeepMenuCallBack:
						AutoOpenOrClose.afterEnterDeepMenuCallBack,
					forms: [
						{
							text: AutoOpenOrClose.text,
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
								UISwitch(
									"【屏蔽】小黄车",
									"live-shielYellowCar",
									false,
									void 0,
									"屏蔽元素"
								),
							],
						},
					],
				},
				{
					text: "屏蔽-聊天室",
					type: "deepMenu",
					afterEnterDeepMenuCallBack:
						AutoOpenOrClose.afterEnterDeepMenuCallBack,
					forms: [
						{
							text: AutoOpenOrClose.text,
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
					],
				},
			],
		},
	],
};

export { PanelLiveConfig };
