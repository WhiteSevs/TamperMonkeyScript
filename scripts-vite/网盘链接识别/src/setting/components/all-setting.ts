import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISelect } from "../common-components/ui-select";
import { UISwitch } from "../common-components/ui-switch";
import { NetDiskUI } from "@/main/ui/NetDiskUI";
import { NetDiskConfig } from "@/main/data/NetDiskData";
import { UISlider } from "../common-components/ui-slider";
import { DOMUtils } from "@/env";
import Qmsg from "qmsg";
import { UIButtonShortCut } from "../common-components/ui-button-shortcut";
import { NetDiskShortcut } from "@/main/shortcut/NetDiskShortcut";
import { UIButton } from "../common-components/ui-button";
import { UISelectMultiple } from "../common-components/ui-select-multiple";

export const PanelUI_allSetting: PopsPanelContentConfig = {
	id: "netdisk-panel-config-all-setting",
	title: "总设置",
	isDefault: true,
	forms: [
		{
			type: "forms",
			text: "",
			forms: [
				{
					type: "deepMenu",
					text: "Toast",
					forms: [
						{
							type: "forms",
							text: "",
							className: "netdisk-panel-forms-toast",
							forms: [
								UISelect(
									"位置",
									NetDiskConfig.toast.position.KEY,
									NetDiskConfig.toast.position.default,
									[
										{
											value: "topleft",
											text: "左上角",
										},
										{
											value: "top",
											text: "顶部",
										},
										{
											value: "topright",
											text: "右上角",
										},
										{
											value: "left",
											text: "左边",
										},
										{
											value: "center",
											text: "中间",
										},
										{
											value: "right",
											text: "右边",
										},
										{
											value: "bottomleft",
											text: "左下角",
										},
										{
											value: "bottom",
											text: "底部",
										},
										{
											value: "bottomright",
											text: "右下角",
										},
									],
									void 0,
									`Toast显示在九宫格的位置，默认: ${NetDiskConfig.toast.position.default}`
								),
								UISelect(
									"同时最多显示的数量",
									NetDiskConfig.toast.maxnums.KEY,
									NetDiskConfig.toast.maxnums.default,
									[
										{
											value: 1,
											text: "1",
										},
										{
											value: 2,
											text: "2",
										},
										{
											value: 3,
											text: "3",
										},
										{
											value: 4,
											text: "4",
										},
										{
											value: 5,
											text: "5",
										},
									],
									void 0,
									`默认: ${NetDiskConfig.toast.showreverse.default}`
								),
								UISwitch(
									"逆序弹出",
									NetDiskConfig.toast.showreverse.KEY,
									NetDiskConfig.toast.showreverse.value,
									void 0,
									"默认是自上往下显示Toast，逆序则是自下往上显示Toast"
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "弹窗",
					forms: [
						{
							className: "netdisk-panel-forms-pops",
							type: "forms",
							text: "",
							forms: [
								UISelect(
									"动画",
									NetDiskConfig.pops.popsAnimation.KEY,
									NetDiskConfig.pops.popsAnimation.default,
									[
										{
											value: "",
											text: "无",
										},
										{
											value: "pops-anim-spread",
											text: "spread",
										},
										{
											value: "pops-anim-shake",
											text: "shake",
										},
										{
											value: "pops-anim-rolling-left",
											text: "rolling-left",
										},
										{
											value: "pops-anim-rolling-right",
											text: "rolling-right",
										},
										{
											value: "pops-anim-slide-top",
											text: "slide-top",
										},
										{
											value: "pops-anim-slide-bottom",
											text: "slide-bottom",
										},
										{
											value: "pops-anim-slide-left",
											text: "slide-left",
										},
										{
											value: "pops-anim-slide-right",
											text: "slide-right",
										},
										{
											value: "pops-anim-fadein",
											text: "fadein",
										},
										{
											value: "pops-anim-fadein-zoom",
											text: "fadein-zoom",
										},
										{
											value: "pops-anim-fadein-alert",
											text: "fadein-alert",
										},
										{
											value: "pops-anim-don",
											text: "don",
										},
										{
											value: "pops-anim-roll",
											text: "roll",
										},
										{
											value: "pops-anim-sandra",
											text: "sandra",
										},
										{
											value: "pops-anim-gather",
											text: "gather",
										},
									],
									void 0,
									`显示/关闭的动画效果，默认: ${NetDiskConfig.pops.popsAnimation.default}`
								),
								UISwitch(
									"点击弹窗遮罩层关闭弹窗",
									NetDiskConfig.pops.clickMaskToCloseDialog.KEY,
									NetDiskConfig.pops.clickMaskToCloseDialog.default,
									void 0,
									"点击遮罩层触发关闭弹窗事件"
								),
								UISwitch(
									"窗口拖拽",
									NetDiskConfig.pops.pcDrag.KEY,
									NetDiskConfig.pops.pcDrag.default,
									void 0,
									"长按标题栏可拖拽移动弹窗"
								),
								UISwitch(
									"限制拖拽距离",
									NetDiskConfig.pops.pcDragLimit.KEY,
									NetDiskConfig.pops.pcDragLimit.default,
									void 0,
									"只能在浏览器的可视窗口内拖动"
								),
								UISwitch(
									"亚克力效果",
									NetDiskConfig.pops.popsAcrylic.KEY,
									NetDiskConfig.pops.popsAcrylic.default,
									void 0,
									""
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "文件弹窗",
					forms: [
						{
							type: "forms",
							text: "",
							className: "netdisk-panel-forms-pops-folder",
							forms: [
								UISelect(
									"排序名",
									NetDiskConfig.popsFolder["pops-folder-sort-name"].KEY,
									NetDiskConfig.popsFolder["pops-folder-sort-name"].default,
									[
										{
											value: "fileName",
											text: "文件名",
										},
										{
											value: "latestTime",
											text: "修改时间",
										},
										{
											value: "fileSize",
											text: "大小",
										},
									],
									void 0,
									"当前的规则"
								),
								UISelect(
									"排序规则",
									NetDiskConfig.popsFolder["pops-folder-sort-is-desc"].KEY,
									NetDiskConfig.popsFolder["pops-folder-sort-is-desc"].default,
									[
										{
											value: false,
											text: "升序",
										},
										{
											value: true,
											text: "降序",
										},
									],
									void 0,
									"当前的规则"
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "小图标导航",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UISwitch(
									"点击定位分享码",
									NetDiskConfig.smallIconNavgiator[
										"pops-netdisk-icon-click-event-find-sharecode"
									].KEY,
									NetDiskConfig.smallIconNavgiator[
										"pops-netdisk-icon-click-event-find-sharecode"
									].default,
									void 0,
									"自动滚动页面至包含分享码的元素"
								),
								UISwitch(
									"选中分享码",
									NetDiskConfig.smallIconNavgiator[
										"pops-netdisk-icon-click-event-find-sharecode-with-select"
									].KEY,
									NetDiskConfig.smallIconNavgiator[
										"pops-netdisk-icon-click-event-find-sharecode-with-select"
									].default,
									void 0,
									"使用光标选中分享码/元素"
								),
								UISwitch(
									"循环定位",
									NetDiskConfig.smallIconNavgiator[
										"pops-netdisk-icon-click-event-loop-find-sharecode"
									].KEY,
									NetDiskConfig.smallIconNavgiator[
										"pops-netdisk-icon-click-event-loop-find-sharecode"
									].default,
									void 0,
									"关闭则是每一个元素只定位一次"
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "悬浮按钮",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UISlider(
									"大小",
									NetDiskConfig.suspension.size.KEY,
									NetDiskConfig.suspension.size.default,
									15,
									250,
									(event, value) => {
										NetDiskConfig.suspension.size.value = parseInt(
											value.toString()
										);
										if (NetDiskUI.suspension.isShow) {
											DOMUtils.css(NetDiskUI.suspension.suspensionNode, {
												width: NetDiskConfig.suspension.size.value,
												height: NetDiskConfig.suspension.size.value,
											});
											NetDiskUI.suspension.setSuspensionPosition();
										}
									},
									(value) => {
										return `${value}px`;
									},
									"悬浮按钮的大小，默认: " +
										NetDiskConfig.suspension.size.default
								),
								UISlider(
									"透明度",
									NetDiskConfig.suspension.opacity.KEY,
									NetDiskConfig.suspension.opacity.default,
									0.1,
									1,
									(event, value) => {
										NetDiskConfig.suspension.opacity.value = parseFloat(
											value.toString()
										);
										if (NetDiskUI.suspension.isShow) {
											DOMUtils.css(NetDiskUI.suspension.suspensionNode, {
												opacity: NetDiskConfig.suspension.opacity.value,
											});
										}
									},
									void 0,
									"值越小越透明，默认: " +
										NetDiskConfig.suspension.opacity.default,
									0.1
								),
								UISlider(
									"背景轮播时间",
									NetDiskConfig.suspension["randbg-time"].KEY,
									NetDiskConfig.suspension["randbg-time"].default,
									0,
									10000,
									void 0,
									(value) => {
										return `${value}ms`;
									},
									"淡入/淡出的时间，默认: " +
										NetDiskConfig.suspension["randbg-time"].default +
										"ms",
									100
								),
								UISlider(
									"背景显示时间",
									NetDiskConfig.suspension["randbg-show-time"].KEY,
									NetDiskConfig.suspension["randbg-show-time"].default,
									0,
									10000,
									void 0,
									(value) => {
										return `${value}ms`;
									},
									"图标显示的持续时间，默认: 1200",
									100
								),
								UISwitch(
									"吸附边缘",
									NetDiskConfig.suspension["suspended-button-adsorption-edge"]
										.KEY,
									NetDiskConfig.suspension["suspended-button-adsorption-edge"]
										.default,
									void 0,
									"移动悬浮按钮松开后自动吸附边缘"
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "小窗模式",
					forms: [
						{
							type: "forms",
							text: "",
							className: "netdisk-panel-forms-small-window",
							forms: [
								UISlider(
									"宽度",
									NetDiskConfig.smallWindow["netdisk-ui-small-window-width"]
										.KEY,
									NetDiskConfig.smallWindow["netdisk-ui-small-window-width"]
										.default,
									50,
									DOMUtils.width(window),
									void 0,
									(value) => {
										return `${value}px`;
									},
									"设置小窗宽度(px)，默认: 250",
									1
								),
								UISlider(
									"高度",
									NetDiskConfig.smallWindow[
										"netdisk-ui-small-window-max-height"
									].KEY,
									NetDiskConfig.smallWindow[
										"netdisk-ui-small-window-max-height"
									].default,
									50,
									DOMUtils.height(window),
									void 0,
									(value) => {
										return `${value}px`;
									},
									"设置小窗最大高度(px)，默认: " +
										NetDiskConfig.smallWindow[
											"netdisk-ui-small-window-max-height"
										].default,
									1
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "历史匹配记录",
					forms: [
						{
							type: "forms",
							text: "",
							className: "netdisk-panel-history-match",
							forms: [
								UISelect(
									"排序规则",
									NetDiskConfig.historyMatch[
										"netdisk-history-match-ordering-rule"
									].KEY,
									NetDiskConfig.historyMatch[
										"netdisk-history-match-ordering-rule"
									].default,
									[
										{
											value: "按 记录时间 - 升序",
											text: "按 记录时间 - 升序",
										},
										{
											value: "按 记录时间 - 降序",
											text: "按 记录时间 - 降序",
										},
										{
											value: "按 更新时间 - 升序",
											text: "按 更新时间 - 升序",
										},
										{
											value: "按 更新时间 - 降序",
											text: "按 更新时间 - 降序",
										},
									]
								),
								UIButton(
									"修复存储记录",
									"如果【匹配记录】弹窗打不开，可能是存储的数据缺失某些字段，可尝试点击此处进行修复",
									"修复",
									void 0,
									void 0,
									false,
									"primary",
									() => {
										try {
											const { count, repairCount } =
												NetDiskUI.netDiskHistoryMatch.checkAndRepairLocalData();
											if (repairCount === 0) {
												Qmsg.info(`不存在需要修复的数据`);
											} else {
												Qmsg.success(`共计: ${count} 条，修复${repairCount}条`);
											}
										} catch (error: any) {
											Qmsg.error("修复异常：" + error.toString());
										}
									}
								),
								UISwitch(
									"保存匹配记录",
									NetDiskConfig.historyMatch.saveMatchNetDisk.KEY,
									NetDiskConfig.historyMatch.saveMatchNetDisk.default,
									void 0,
									"将匹配到的链接信息进行本地存储，可点击【油猴菜单-⚙ 历史匹配记录】进行查看"
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "匹配设置",
					forms: [
						{
							type: "forms",
							text: "文本匹配范围",
							forms: [
								UISelectMultiple<
									ExtractElementType<NetDiskWorkerOptions["matchTextRange"]>
								>(
									"匹配规则类型",
									NetDiskConfig.match.pageMatchRange.KEY,
									NetDiskConfig.match.pageMatchRange.default,
									[
										{
											value: "innerText",
											text: "普通文本",
										},
										{
											value: "innerHTML",
											text: "超文本",
										},
									],
									void 0,
									"执行的文本匹配规则"
								),
								UISwitch(
									"深入ShadowRoot获取匹配文本",
									NetDiskConfig.match.depthQueryWithShadowRoot.KEY,
									NetDiskConfig.match.depthQueryWithShadowRoot.default,
									void 0,
									"遍历ShadowRoot，获取匹配的内容"
								),
								UISwitch(
									"匹配剪贴板",
									NetDiskConfig.match.readClipboard.KEY,
									NetDiskConfig.match.readClipboard.default,
									void 0,
									"Api兼容性查看：<a href='https://caniuse.com/mdn-api_permissions_permission_clipboard-read' target='_blank'>读取剪贴板权限申请</a>、<a href='https://caniuse.com/mdn-api_clipboard_readtext' target='_blank'>直接读取剪贴板</a>"
								),
								UISwitch(
									"匹配当前URL",
									NetDiskConfig.match.allowMatchLocationHref.KEY,
									NetDiskConfig.match.allowMatchLocationHref.default,
									void 0,
									"提取window.location.href进行匹配"
								),
								UISwitch(
									"匹配input标签的内容",
									NetDiskConfig.match.toBeMatchedWithInputElementValue.KEY,
									NetDiskConfig.match.toBeMatchedWithInputElementValue.default,
									void 0,
									"提取页面中的&lt;input&gt;的内容进行匹配"
								),
								UISwitch(
									"匹配textarea标签的内容",
									NetDiskConfig.match.toBeMatchedTextAreaElementValue.KEY,
									NetDiskConfig.match.toBeMatchedTextAreaElementValue.default,
									void 0,
									"提取页面中的&lt;textarea&gt;的内容进行匹配"
								),
							],
						},
						{
							type: "forms",
							text: "页面内容改变时的观察器",
							forms: [
								UISlider(
									"匹配间隔",
									NetDiskConfig.match.delaytime.KEY,
									NetDiskConfig.match.delaytime.default,
									0.0,
									5.0,
									void 0,
									(value) => {
										return `${value}s`;
									},
									"匹配文本完毕后的延迟xxx秒允许下一次匹配",
									0.1
								),
								UISwitch(
									"添加元素时进行匹配",
									NetDiskConfig.match.isAddedNodesToMatch.KEY,
									NetDiskConfig.match.isAddedNodesToMatch.default,
									void 0,
									"当监听到页面添加元素时才进行匹配文本"
								),
								UISwitch(
									"观察器：childList",
									NetDiskConfig.match["mutationObserver-childList"].KEY,
									NetDiskConfig.match["mutationObserver-childList"].default,
									void 0,
									"子节点的变动（新增、删除或者更改）"
								),
								UISwitch(
									"观察器：characterData",
									NetDiskConfig.match["mutationObserver-characterData"].KEY,
									NetDiskConfig.match["mutationObserver-characterData"].default,
									void 0,
									"节点内容或节点文本的变动"
								),
								UISwitch(
									"观察器：subtree",
									NetDiskConfig.match["mutationObserver-subtree"].KEY,
									NetDiskConfig.match["mutationObserver-subtree"].default,
									void 0,
									"是否将观察器应用于该节点的所有后代节点"
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "功能",
					forms: [
						{
							type: "forms",
							text: "",
							className: "netdisk-panel-forms-function",
							forms: [
								UISelect(
									"行为模式",
									NetDiskConfig.function["netdisk-behavior-mode"].KEY,
									NetDiskConfig.function["netdisk-behavior-mode"].default,
									[
										{
											text: "悬浮按钮+小窗",
											value: "suspension_smallwindow",
										},
										{
											text: "悬浮按钮+大窗",
											value: "suspension_window",
										},
										{
											text: "小窗",
											value: "smallwindow",
										},
									],
									void 0,
									"匹配到链接时触发的UI执行"
								),
								UISwitch(
									"自动输入访问码",
									NetDiskConfig.function.autoFillAccessCode.KEY,
									NetDiskConfig.function.autoFillAccessCode.default,
									void 0,
									"通过主动点击链接跳转时，会自动输入网盘访问码"
								),
								UISwitch(
									"获取重定向后的直链",
									NetDiskConfig.function.getTheDirectLinkAfterRedirection.KEY,
									NetDiskConfig.function.getTheDirectLinkAfterRedirection
										.default,
									void 0,
									"对获取的链接再进行一次重定向获取链接"
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "分享码相关",
					forms: [
						{
							type: "forms",
							text: "",
							className: "netdisk-panel-forms-share-code",
							forms: [
								UISwitch(
									"排除分享码",
									NetDiskConfig.aboutShareCode.excludeIdenticalSharedCodes.KEY,
									NetDiskConfig.aboutShareCode.excludeIdenticalSharedCodes
										.default,
									void 0,
									"启用后会根据【相同系数】排除掉匹配到的分享码"
								),
								UISlider(
									"相同系数",
									NetDiskConfig.aboutShareCode
										.excludeIdenticalSharedCodesCoefficient.KEY,
									NetDiskConfig.aboutShareCode
										.excludeIdenticalSharedCodesCoefficient.default,
									0,
									1,
									void 0,
									(value) => {
										return value.toString();
									},
									"例如分享码: aaaaaaaabb，它的相同系数是0.8，设置相同系数≥0.8时会被排除",
									0.01
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "快捷键",
					forms: [
						{
							className: "netdisk-panel-forms-shortcut-keys",
							text: "",
							type: "forms",
							forms: [
								UIButtonShortCut(
									"【打开】⚙ 设置",
									"",
									"netdisk-keyboard-open-setting",
									void 0,
									"暂无快捷键",
									"default",
									NetDiskShortcut.shortCut
								),
								UIButtonShortCut(
									"【打开】⚙ 历史匹配记录",
									"",
									"netdisk-keyboard-open-history-matching-records",
									void 0,
									"暂无快捷键",
									"default",
									NetDiskShortcut.shortCut
								),
								UIButtonShortCut(
									"【打开】⚙ 访问码规则",
									"",
									"netdisk-keyboard-open-accesscode-rule",
									void 0,
									"暂无快捷键",
									"default",
									NetDiskShortcut.shortCut
								),
								UIButtonShortCut(
									"【打开】⚙ 用户自定义规则",
									"",
									"netdisk-keyboard-open-user-rule",
									void 0,
									"暂无快捷键",
									"default",
									NetDiskShortcut.shortCut
								),
								UIButtonShortCut(
									"【打开】⚙ 主动识别文本",
									"",
									"netdisk-keyboard-open-proactively-recognize-text",
									void 0,
									"暂无快捷键",
									"default",
									NetDiskShortcut.shortCut
								),
							],
						},
					],
				},
			],
		},
	],
};
