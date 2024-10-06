import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISelect } from "../common-components/ui-select";
import { UISwitch } from "../common-components/ui-switch";
import { NetDiskUI } from "@/main/ui/NetDiskUI";
import { NetDiskGlobalData } from "@/main/data/NetDiskGlobalData";
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
									NetDiskGlobalData.toast.position.KEY,
									NetDiskGlobalData.toast.position.default,
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
									`Toast显示在九宫格的位置，默认: ${NetDiskGlobalData.toast.position.default}`
								),
								UISelect(
									"同时最多显示的数量",
									NetDiskGlobalData.toast.maxnums.KEY,
									NetDiskGlobalData.toast.maxnums.default,
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
									`默认: ${NetDiskGlobalData.toast.maxnums.default}`
								),
								UISwitch(
									"逆序弹出",
									NetDiskGlobalData.toast.showreverse.KEY,
									NetDiskGlobalData.toast.showreverse.value,
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
									NetDiskGlobalData.pops.popsAnimation.KEY,
									NetDiskGlobalData.pops.popsAnimation.default,
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
									`显示/关闭的动画效果，默认: ${NetDiskGlobalData.pops.popsAnimation.default}`
								),
								UISwitch(
									"点击弹窗遮罩层关闭弹窗",
									NetDiskGlobalData.pops.clickMaskToCloseDialog.KEY,
									NetDiskGlobalData.pops.clickMaskToCloseDialog.default,
									void 0,
									"点击遮罩层触发关闭弹窗事件"
								),
								UISwitch(
									"窗口拖拽",
									NetDiskGlobalData.pops.pcDrag.KEY,
									NetDiskGlobalData.pops.pcDrag.default,
									void 0,
									"长按标题栏可拖拽移动弹窗"
								),
								UISwitch(
									"限制拖拽距离",
									NetDiskGlobalData.pops.pcDragLimit.KEY,
									NetDiskGlobalData.pops.pcDragLimit.default,
									void 0,
									"只能在浏览器的可视窗口内拖动"
								),
								UISwitch(
									"亚克力效果",
									NetDiskGlobalData.pops.popsAcrylic.KEY,
									NetDiskGlobalData.pops.popsAcrylic.default,
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
									NetDiskGlobalData.popsFolder["pops-folder-sort-name"].KEY,
									NetDiskGlobalData.popsFolder["pops-folder-sort-name"].default,
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
									NetDiskGlobalData.popsFolder["pops-folder-sort-is-desc"].KEY,
									NetDiskGlobalData.popsFolder["pops-folder-sort-is-desc"]
										.default,
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
					text: "悬浮按钮",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UISlider(
									"大小",
									NetDiskGlobalData.suspension.size.KEY,
									NetDiskGlobalData.suspension.size.default,
									15,
									250,
									(event, value) => {
										NetDiskGlobalData.suspension.size.value = parseInt(
											value.toString()
										);
										if (NetDiskUI.suspension.isShow) {
											DOMUtils.css(NetDiskUI.suspension.suspensionNode, {
												width: NetDiskGlobalData.suspension.size.value,
												height: NetDiskGlobalData.suspension.size.value,
											});
											NetDiskUI.suspension.setSuspensionPosition();
										}
									},
									(value) => {
										return `${value}px`;
									},
									"悬浮按钮的大小，默认: " +
										NetDiskGlobalData.suspension.size.default
								),
								UISlider(
									"透明度",
									NetDiskGlobalData.suspension.opacity.KEY,
									NetDiskGlobalData.suspension.opacity.default,
									0.1,
									1,
									(event, value) => {
										NetDiskGlobalData.suspension.opacity.value = parseFloat(
											value.toString()
										);
										if (NetDiskUI.suspension.isShow) {
											DOMUtils.css(NetDiskUI.suspension.suspensionNode, {
												opacity: NetDiskGlobalData.suspension.opacity.value,
											});
										}
									},
									void 0,
									"值越小越透明，默认: " +
										NetDiskGlobalData.suspension.opacity.default,
									0.1
								),
								UISlider(
									"背景轮播时间",
									NetDiskGlobalData.suspension["randbg-time"].KEY,
									NetDiskGlobalData.suspension["randbg-time"].default,
									0,
									10000,
									void 0,
									(value) => {
										return `${value}ms`;
									},
									"淡入/淡出的时间，默认: " +
										NetDiskGlobalData.suspension["randbg-time"].default +
										"ms",
									100
								),
								UISlider(
									"背景显示时间",
									NetDiskGlobalData.suspension["randbg-show-time"].KEY,
									NetDiskGlobalData.suspension["randbg-show-time"].default,
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
									NetDiskGlobalData.suspension[
										"suspended-button-adsorption-edge"
									].KEY,
									NetDiskGlobalData.suspension[
										"suspended-button-adsorption-edge"
									].default,
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
									NetDiskGlobalData.smallWindow["netdisk-ui-small-window-width"]
										.KEY,
									NetDiskGlobalData.smallWindow["netdisk-ui-small-window-width"]
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
									NetDiskGlobalData.smallWindow[
										"netdisk-ui-small-window-max-height"
									].KEY,
									NetDiskGlobalData.smallWindow[
										"netdisk-ui-small-window-max-height"
									].default,
									50,
									DOMUtils.height(window),
									void 0,
									(value) => {
										return `${value}px`;
									},
									"设置小窗最大高度(px)，默认: " +
										NetDiskGlobalData.smallWindow[
											"netdisk-ui-small-window-max-height"
										].default,
									1
								),
							],
						},
					],
				},
			],
		},
		{
			type: "forms",
			text: "",
			forms: [
				{
					type: "deepMenu",
					text: "网盘图标",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UISwitch(
									"点击定位分享码",
									NetDiskGlobalData.smallIconNavgiator[
										"pops-netdisk-icon-click-event-find-sharecode"
									].KEY,
									NetDiskGlobalData.smallIconNavgiator[
										"pops-netdisk-icon-click-event-find-sharecode"
									].default,
									void 0,
									"自动滚动页面至包含分享码的元素"
								),
								UISwitch(
									"选中分享码",
									NetDiskGlobalData.smallIconNavgiator[
										"pops-netdisk-icon-click-event-find-sharecode-with-select"
									].KEY,
									NetDiskGlobalData.smallIconNavgiator[
										"pops-netdisk-icon-click-event-find-sharecode-with-select"
									].default,
									void 0,
									"使用光标选中分享码/元素"
								),
								UISwitch(
									"循环定位",
									NetDiskGlobalData.smallIconNavgiator[
										"pops-netdisk-icon-click-event-loop-find-sharecode"
									].KEY,
									NetDiskGlobalData.smallIconNavgiator[
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
					text: "历史匹配记录",
					forms: [
						{
							type: "forms",
							text: "",
							className: "netdisk-panel-history-match",
							forms: [
								UISwitch(
									"保存匹配记录",
									NetDiskGlobalData.historyMatch.saveMatchNetDisk.KEY,
									NetDiskGlobalData.historyMatch.saveMatchNetDisk.default,
									void 0,
									"将匹配到的链接信息进行本地存储，可点击【油猴菜单-⚙ 历史匹配记录】进行查看"
								),
								UISwitch(
									"合并相同链接",
									NetDiskGlobalData.historyMatch[
										"netdisk-history-match-merge-same-link"
									].KEY,
									NetDiskGlobalData.historyMatch[
										"netdisk-history-match-merge-same-link"
									].default,
									void 0,
									"将合并匹配到的相同链接，并更新它最后一次匹配到的更新时间、网址信息"
								),
								UISelect(
									"排序规则",
									NetDiskGlobalData.historyMatch[
										"netdisk-history-match-ordering-rule"
									].KEY,
									NetDiskGlobalData.historyMatch[
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
									NetDiskGlobalData.match.pageMatchRange.KEY,
									NetDiskGlobalData.match.pageMatchRange.default,
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
									"执行的文本匹配规则",
									void 0,
									{
										height: "auto",
									}
								),
								UISwitch(
									"深入ShadowRoot获取匹配文本",
									NetDiskGlobalData.match.depthQueryWithShadowRoot.KEY,
									NetDiskGlobalData.match.depthQueryWithShadowRoot.default,
									void 0,
									"遍历ShadowRoot，获取匹配的内容"
								),
								UISwitch(
									"匹配剪贴板",
									NetDiskGlobalData.match.readClipboard.KEY,
									NetDiskGlobalData.match.readClipboard.default,
									void 0,
									"Api兼容性查看：<a href='https://caniuse.com/mdn-api_permissions_permission_clipboard-read' target='_blank'>读取剪贴板权限申请</a>、<a href='https://caniuse.com/mdn-api_clipboard_readtext' target='_blank'>直接读取剪贴板</a>"
								),
								UISwitch(
									"匹配当前URL",
									NetDiskGlobalData.match.allowMatchLocationHref.KEY,
									NetDiskGlobalData.match.allowMatchLocationHref.default,
									void 0,
									"提取window.location.href进行匹配"
								),
								UISwitch(
									"匹配input标签的内容",
									NetDiskGlobalData.match.toBeMatchedWithInputElementValue.KEY,
									NetDiskGlobalData.match.toBeMatchedWithInputElementValue
										.default,
									void 0,
									"提取页面中的&lt;input&gt;的内容进行匹配"
								),
								UISwitch(
									"匹配textarea标签的内容",
									NetDiskGlobalData.match.toBeMatchedTextAreaElementValue.KEY,
									NetDiskGlobalData.match.toBeMatchedTextAreaElementValue
										.default,
									void 0,
									"提取页面中的&lt;textarea&gt;的内容进行匹配"
								),
							],
						},
						{
							type: "forms",
							text: "MutationObserver观察器",
							forms: [
								UISlider(
									"匹配间隔",
									NetDiskGlobalData.match.delaytime.KEY,
									NetDiskGlobalData.match.delaytime.default,
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
									NetDiskGlobalData.match.isAddedNodesToMatch.KEY,
									NetDiskGlobalData.match.isAddedNodesToMatch.default,
									void 0,
									"当监听到页面添加元素时才进行匹配文本"
								),
								UISwitch(
									"观察器：childList",
									NetDiskGlobalData.match["mutationObserver-childList"].KEY,
									NetDiskGlobalData.match["mutationObserver-childList"].default,
									void 0,
									"子节点的变动（新增、删除或者更改）"
								),
								UISwitch(
									"观察器：characterData",
									NetDiskGlobalData.match["mutationObserver-characterData"].KEY,
									NetDiskGlobalData.match["mutationObserver-characterData"]
										.default,
									void 0,
									"节点内容或节点文本的变动"
								),
								UISwitch(
									"观察器：subtree",
									NetDiskGlobalData.match["mutationObserver-subtree"].KEY,
									NetDiskGlobalData.match["mutationObserver-subtree"].default,
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
									"匹配模式",
									NetDiskGlobalData.function["netdisk-match-mode"].KEY,
									NetDiskGlobalData.function["netdisk-match-mode"].default,
									[
										{
											text: "MutationObserver",
											value: "MutationObserver",
										},
										{
											text: "Menu",
											value: "Menu",
										},
									],
									void 0,
									"MutationObserver是网页加载完毕后自动监听识别链接，Menu是油猴菜单点击进行识别"
								),
								UISelect(
									"行为模式",
									NetDiskGlobalData.function["netdisk-behavior-mode"].KEY,
									NetDiskGlobalData.function["netdisk-behavior-mode"].default,
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
									NetDiskGlobalData.function.autoFillAccessCode.KEY,
									NetDiskGlobalData.function.autoFillAccessCode.default,
									void 0,
									"通过主动点击链接跳转时，会自动输入网盘访问码"
								),
								UISwitch(
									"获取重定向后的直链",
									NetDiskGlobalData.function.getTheDirectLinkAfterRedirection
										.KEY,
									NetDiskGlobalData.function.getTheDirectLinkAfterRedirection
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
									NetDiskGlobalData.aboutShareCode.excludeIdenticalSharedCodes
										.KEY,
									NetDiskGlobalData.aboutShareCode.excludeIdenticalSharedCodes
										.default,
									void 0,
									"启用后会根据【相同系数】排除掉匹配到的分享码"
								),
								UISlider(
									"相同系数",
									NetDiskGlobalData.aboutShareCode
										.excludeIdenticalSharedCodesCoefficient.KEY,
									NetDiskGlobalData.aboutShareCode
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
									"【打开】⚙ 自定义规则",
									"",
									"netdisk-keyboard-open-user-rule",
									void 0,
									"暂无快捷键",
									"default",
									NetDiskShortcut.shortCut
								),
								UIButtonShortCut(
									"【打开】⚙ 网站规则",
									"",
									"netdisk-keyboard-website-rule",
									void 0,
									"暂无快捷键",
									"default",
									NetDiskShortcut.shortCut
								),
								UIButtonShortCut(
									"【打开】⚙ 识别文本",
									"",
									"netdisk-keyboard-open-proactively-recognize-text",
									void 0,
									"暂无快捷键",
									"default",
									NetDiskShortcut.shortCut
								),
								UIButtonShortCut(
									"执行文本匹配",
									"",
									"netdisk-keyboard-performPageTextMatchingManually",
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
