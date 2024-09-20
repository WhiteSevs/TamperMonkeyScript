import { PopsFolderDetails } from "@whitesev/pops/dist/types/src/components/folder/indexType";
import { GM_getValue, GM_setValue } from "ViteGM";
import { GenerateData } from "./NetDiskDataUtils";

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
		position: GenerateData("qmsg-config-position", "top"),
		/** 同时最多显示的数量 */
		maxnums: GenerateData("qmsg-config-maxnums", 3),
		/** 逆序弹出 */
		showreverse: GenerateData("qmsg-config-showreverse", true),
	},
	/** 弹窗 */
	pops: {
		/** 动画 */
		popsAnimation: GenerateData("popsAnimation", "pops-anim-fadein-zoom"),
		/** 点击弹窗遮罩层是否可以关闭弹窗 */
		clickMaskToCloseDialog: GenerateData("clickMaskToCloseDialog", true),
		/** 窗口拖拽 */
		pcDrag: GenerateData("pcDrag", true),
		/** 限制拖拽距离 */
		pcDragLimit: GenerateData("pcDragLimit", true),
		/** 亚克力效果 */
		popsAcrylic: GenerateData("popsAcrylic", false),
	},
	/** 文件弹窗 */
	popsFolder: {
		/** 排序名 */
		"pops-folder-sort-name": GenerateData(
			"pops-folder-sort-name",
			"fileName" as PopsFolderDetails["sort"]["name"]
		),
		/** 排序规则 */
		"pops-folder-sort-is-desc": GenerateData("pops-folder-sort-is-desc", false),
	},
	/** 小图标导航 */
	smallIconNavgiator: {
		/** 点击定位分享码 */
		"pops-netdisk-icon-click-event-find-sharecode": GenerateData(
			"pops-netdisk-icon-click-event-find-sharecode",
			true
		),
		/** 选中分享码 */
		"pops-netdisk-icon-click-event-find-sharecode-with-select": GenerateData(
			"pops-netdisk-icon-click-event-find-sharecode-with-select",
			true
		),
		/** 循环定位 */
		"pops-netdisk-icon-click-event-loop-find-sharecode": GenerateData(
			"pops-netdisk-icon-click-event-loop-find-sharecode",
			true
		),
	},
	/** 悬浮按钮 */
	suspension: {
		/** 大小 */
		size: GenerateData("size", 50),
		/** 透明度 */
		opacity: GenerateData("opacity", 1),
		/** 背景轮播时间 */
		"randbg-time": GenerateData("randbg-time", 1500),
		/** 背景显示时间 */
		"randbg-show-time": GenerateData("randbg-show-time", 1200),
		/** 吸附边缘 */
		"suspended-button-adsorption-edge": GenerateData(
			"suspended-button-adsorption-edge",
			false
		),
	},
	/** 小窗模式 */
	smallWindow: {
		/** 宽度 */
		"netdisk-ui-small-window-width": GenerateData(
			"netdisk-ui-small-window-width",
			250
		),
		/** 高度 */
		"netdisk-ui-small-window-max-height": GenerateData(
			"netdisk-ui-small-window-max-height",
			200
		),
	},
	/** 历史匹配记录 */
	historyMatch: {
		/** 排序规则 */
		"netdisk-history-match-ordering-rule": GenerateData(
			"netdisk-history-match-ordering-rule",
			"按 更新时间 - 降序"
		),
		/** 保存匹配记录 */
		saveMatchNetDisk: GenerateData("saveMatchNetDisk", false),
	},
	/** 匹配设置 */
	match: {
		/** 匹配类型 */
		pageMatchRange: GenerateData("pageMatchRange", [
			"innerText",
			"innerHTML",
		] as NetDiskWorkerOptions["matchTextRange"]),
		/** 深入ShadowRoot获取匹配文本 */
		depthQueryWithShadowRoot: GenerateData("depthQueryWithShadowRoot", false),
		/** 匹配剪贴板 */
		readClipboard: GenerateData("readClipboard", false),
		/** 匹配当前URL */
		allowMatchLocationHref: GenerateData("allowMatchLocationHref", true),
		/** 匹配input标签的内容 */
		toBeMatchedWithInputElementValue: GenerateData(
			"to-be-matched-inputElementValue",
			false
		),
		/** 匹配textarea标签的内容 */
		toBeMatchedTextAreaElementValue: GenerateData(
			"to-be-matched-textAreaElementValue",
			false
		),
		/** 匹配间隔 */
		delaytime: GenerateData("delaytime", 0.8),
		/** 添加元素时进行匹配 */
		isAddedNodesToMatch: GenerateData("isAddedNodesToMatch", false),
		/** 观察器：childList */
		"mutationObserver-childList": GenerateData(
			"mutationObserver-childList",
			true
		),
		/** 观察器：characterData */
		"mutationObserver-characterData": GenerateData(
			"mutationObserver-characterData",
			true
		),
		/** 观察器：subtree */
		"mutationObserver-subtree": GenerateData("mutationObserver-subtree", true),
	},
	/** 功能 */
	function: {
		/** 行为模式 */
		"netdisk-behavior-mode": GenerateData(
			"netdisk-behavior-mode",
			"suspension_smallwindow" as
				| "suspension_smallwindow"
				| "suspension_window"
				| "smallwindow"
		),
		/** 自动输入访问码 */
		autoFillAccessCode: GenerateData("autoFillAccessCode", true),
		/** 获取重定向后的直链 */
		getTheDirectLinkAfterRedirection: GenerateData(
			"getTheDirectLinkAfterRedirection",
			false
		),
	},
	/** 分享码相关 */
	aboutShareCode: {
		/** 相同系数 */
		excludeIdenticalSharedCodesCoefficient: GenerateData(
			"excludeIdenticalSharedCodesCoefficient",
			1
		),
		/** 排除分享码 */
		excludeIdenticalSharedCodes: GenerateData(
			"excludeIdenticalSharedCodes",
			false
		),
	},
};
