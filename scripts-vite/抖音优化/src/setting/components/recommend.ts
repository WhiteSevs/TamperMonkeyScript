import { DOMUtils, utils } from "@/env";
import { DouYinRecommendVideoFilter } from "@/main/recommend/DouYinRecommendVideoFilter";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "../common-components/ui-switch";
import { UIButton } from "../common-components/ui-button";
import { DouYinRecommendVideoFilterDebug } from "@/main/recommend/DouYinRecommendVideoFilterDebug";
import Qmsg from "qmsg";
import { DouYinRouter } from "@/router/DouYinRouter";
import { PopsPanel } from "../setting";

export const PanelRecommendVideoConfig: PopsPanelContentConfig = {
	id: "panel-config-recommend-video",
	title: "推荐",
	forms: [
		{
			type: "forms",
			text: "",
			forms: [
				{
					text: "过滤-推荐视频",
					type: "deepMenu",
					forms: [
						{
							text: '<a href="https://greasyfork.org/zh-CN/scripts/494643-%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',
							type: "forms",
							forms: [
								UIButton(
									"调试规则",
									"测试自定义规则对当前正在播放的视频是否生效",
									"调试",
									void 0,
									false,
									false,
									"primary",
									() => {
										DouYinRecommendVideoFilterDebug.init();
									}
								),
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
								UISwitch(
									"【屏蔽】广告",
									"shieldVideo-ads",
									true,
									void 0,
									"过滤掉广告"
								),
								UIButton(
									"初始化规则",
									"重新解析并初始化规则",
									"更新",
									void 0,
									false,
									false,
									"primary",
									() => {
										DouYinRecommendVideoFilter.videoFilter.initLocalRule();
										Qmsg.success("更新完毕");
										if (!DouYinRouter.isSearch()) {
											PopsPanel.execMenu("shieldVideo", () => {
												DouYinRecommendVideoFilter.init();
											});
										}
									}
								),
								{
									type: "own",
									getLiElementCallBack(liElement: HTMLLIElement) {
										let textareaDiv = DOMUtils.createElement(
											"div",
											{
												className: "pops-panel-textarea",
												innerHTML: /*html*/ `<textarea placeholder="请输入屏蔽规则，每行一个" style="height:350px;"></textarea>`,
											},
											{
												style: "width: 100%;",
											}
										);
										let textarea = textareaDiv.querySelector("textarea")!;
										textarea.value = DouYinRecommendVideoFilter.get();
										DOMUtils.on(
											textarea,
											["input", "propertychange"],
											utils.debounce(function () {
												DouYinRecommendVideoFilter.set(textarea.value);
											}, 80)
										);
										liElement.appendChild(textareaDiv);
										return liElement;
									},
								},
							],
						},
					],
				},
			],
		},
	],
};
