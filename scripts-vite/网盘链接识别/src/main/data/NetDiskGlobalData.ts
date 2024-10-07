import { PopsFolderDetails } from "@whitesev/pops/dist/types/src/components/folder/indexType";
import { GeneratePanelData } from "./NetDiskDataUtils";

// /** 数据过滤器 一般用于数据覆盖 */
// const NetDiskConfigDataFilter = {
// 	/**
// 	 * 覆盖某个数据
// 	 */
// 	override<T extends ReturnType<typeof GenerateNetDiskConfig>>(
// 		netdiskconfig: T,
// 		callback: (data: T) => void
// 	) {
// 		netdiskconfig.value = (newValue: any) => {
// 			callback();
// 		};
// 	},
// };

/** 全局设置 */
export const NetDiskGlobalData = {
	/** Toast */
	toast: {
		/** 位置 */
		position: GeneratePanelData("qmsg-config-position", "top"),
		/** 同时最多显示的数量 */
		maxnums: GeneratePanelData("qmsg-config-maxnums", 3),
		/** 逆序弹出 */
		showreverse: GeneratePanelData("qmsg-config-showreverse", true),
	},
	/** 弹窗 */
	pops: {
		/** 动画 */
		popsAnimation: GeneratePanelData("popsAnimation", "pops-anim-fadein-zoom"),
		/** 点击弹窗遮罩层是否可以关闭弹窗 */
		clickMaskToCloseDialog: GeneratePanelData("clickMaskToCloseDialog", true),
		/** 窗口拖拽 */
		pcDrag: GeneratePanelData("pcDrag", true),
		/** 限制拖拽距离 */
		pcDragLimit: GeneratePanelData("pcDragLimit", true),
		/** 亚克力效果 */
		popsAcrylic: GeneratePanelData("popsAcrylic", false),
	},
	/** 文件弹窗 */
	popsFolder: {
		/** 排序名 */
		"pops-folder-sort-name": GeneratePanelData(
			"pops-folder-sort-name",
			"fileName" as PopsFolderDetails["sort"]["name"]
		),
		/** 排序规则 */
		"pops-folder-sort-is-desc": GeneratePanelData(
			"pops-folder-sort-is-desc",
			false
		),
	},
	/** 小图标导航 */
	smallIconNavgiator: {
		/** 点击定位分享码 */
		"pops-netdisk-icon-click-event-find-sharecode": GeneratePanelData(
			"pops-netdisk-icon-click-event-find-sharecode",
			true
		),
		/** 选中分享码 */
		"pops-netdisk-icon-click-event-find-sharecode-with-select":
			GeneratePanelData(
				"pops-netdisk-icon-click-event-find-sharecode-with-select",
				true
			),
		/** 循环定位 */
		"pops-netdisk-icon-click-event-loop-find-sharecode": GeneratePanelData(
			"pops-netdisk-icon-click-event-loop-find-sharecode",
			true
		),
	},
	/** 悬浮按钮 */
	suspension: {
		/** 大小 */
		size: GeneratePanelData("size", 50),
		/** 透明度 */
		opacity: GeneratePanelData("opacity", 1),
		/** 背景轮播时间 */
		"randbg-time": GeneratePanelData("randbg-time", 1500),
		/** 背景显示时间 */
		"randbg-show-time": GeneratePanelData("randbg-show-time", 1200),
		/** 吸附边缘 */
		"suspended-button-adsorption-edge": GeneratePanelData(
			"suspended-button-adsorption-edge",
			false
		),
	},
	/** 小窗模式 */
	smallWindow: {
		/** 宽度 */
		"netdisk-ui-small-window-width": GeneratePanelData(
			"netdisk-ui-small-window-width",
			250
		),
		/** 高度 */
		"netdisk-ui-small-window-max-height": GeneratePanelData(
			"netdisk-ui-small-window-max-height",
			200
		),
	},
	/** 历史匹配记录 */
	historyMatch: {
		/** 保存匹配记录 */
		saveMatchNetDisk: GeneratePanelData("saveMatchNetDisk", false),
		/** 排序规则 */
		"netdisk-history-match-ordering-rule": GeneratePanelData(
			"netdisk-history-match-ordering-rule",
			"按 更新时间 - 降序"
		),
		/** 合并相同链接 */
		"netdisk-history-match-merge-same-link": GeneratePanelData(
			"netdisk-history-match-merge-same-link",
			true
		),
	},
	/** 匹配设置 */
	match: {
		/** 匹配类型 */
		pageMatchRange: GeneratePanelData("pageMatchRange", [
			"innerText",
			"innerHTML",
		] as NetDiskWorkerOptions["matchTextRange"]),
		/** 深入ShadowRoot获取匹配文本 */
		depthQueryWithShadowRoot: GeneratePanelData(
			"depthQueryWithShadowRoot",
			false
		),
		/** 匹配剪贴板 */
		readClipboard: GeneratePanelData("readClipboard", false),
		/** 匹配当前URL */
		allowMatchLocationHref: GeneratePanelData("allowMatchLocationHref", true),
		/** 匹配input标签的内容 */
		toBeMatchedWithInputElementValue: GeneratePanelData(
			"to-be-matched-inputElementValue",
			false
		),
		/** 匹配textarea标签的内容 */
		toBeMatchedTextAreaElementValue: GeneratePanelData(
			"to-be-matched-textAreaElementValue",
			false
		),
		/** 匹配间隔 */
		delaytime: GeneratePanelData("delaytime", 0.8),
		/** 添加元素时进行匹配 */
		isAddedNodesToMatch: GeneratePanelData("isAddedNodesToMatch", false),
		/** 观察器：childList */
		"mutationObserver-childList": GeneratePanelData(
			"mutationObserver-childList",
			true
		),
		/** 观察器：characterData */
		"mutationObserver-characterData": GeneratePanelData(
			"mutationObserver-characterData",
			true
		),
		/** 观察器：subtree */
		"mutationObserver-subtree": GeneratePanelData(
			"mutationObserver-subtree",
			true
		),
	},
	/** 功能 */
	features: {
		/** 匹配模式 */
		"netdisk-match-mode": GeneratePanelData(
			"netdisk-match-mode",
			"MutationObserver" as "MutationObserver" | "Menu"
		),
		/** 行为模式 */
		"netdisk-behavior-mode": GeneratePanelData(
			"netdisk-behavior-mode",
			"suspension_smallwindow" as
				| "suspension_smallwindow"
				| "suspension_window"
				| "smallwindow"
		),
		/** 自动输入访问码 */
		autoFillAccessCode: GeneratePanelData("autoFillAccessCode", true),
		/** 获取重定向后的直链 */
		getTheDirectLinkAfterRedirection: GeneratePanelData(
			"getTheDirectLinkAfterRedirection",
			false
		),
	},
	/** 分享码相关 */
	shareCode: {
		/** 相同系数 */
		excludeIdenticalSharedCodesCoefficient: GeneratePanelData(
			"excludeIdenticalSharedCodesCoefficient",
			1
		),
		/** 排除分享码 */
		excludeIdenticalSharedCodes: GeneratePanelData(
			"excludeIdenticalSharedCodes",
			false
		),
	},
	/** 访问码 */
	accessCode: {
		/** 允许查询历史匹配记录 */
		allowQueryHistoryMatchingAccessCode: GeneratePanelData(
			"allowQueryHistoryMatchingAccessCode",
			true
		),
	},
};
