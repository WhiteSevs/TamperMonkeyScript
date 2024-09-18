import { PopsFolderDetails } from "@whitesev/pops/dist/types/src/components/folder/indexType";
import { GM_getValue, GM_setValue } from "ViteGM";

/**
 * 生成配置
 * @param key
 * @param defaultValue
 */
export const GenerateNetDiskConfig = function <T = any>(
	key: string,
	defaultValue: T
) {
	return {
		KEY: key,
		default: defaultValue,
		get value() {
			return GM_getValue(this.KEY, this.default);
		},
		set value(newValue) {
			GM_setValue(this.KEY, newValue);
		},
	};
};

export const NetDiskConfig = {
	/** Toast */
	toast: {
		/** 位置 */
		position: GenerateNetDiskConfig("qmsg-config-position", "top"),
		/** 同时最多显示的数量 */
		maxnums: GenerateNetDiskConfig("qmsg-config-maxnums", 3),
		/** 逆序弹出 */
		showreverse: GenerateNetDiskConfig("qmsg-config-showreverse", true),
	},
	/** 弹窗 */
	pops: {
		/** 动画 */
		popsAnimation: GenerateNetDiskConfig(
			"popsAnimation",
			"pops-anim-fadein-zoom"
		),
		/** 点击弹窗遮罩层是否可以关闭弹窗 */
		clickMaskToCloseDialog: GenerateNetDiskConfig(
			"clickMaskToCloseDialog",
			true
		),
		/** 窗口拖拽 */
		pcDrag: GenerateNetDiskConfig("pcDrag", true),
		/** 限制拖拽距离 */
		pcDragLimit: GenerateNetDiskConfig("pcDragLimit", true),
		/** 亚克力效果 */
		popsAcrylic: GenerateNetDiskConfig("popsAcrylic", false),
	},
	/** 文件弹窗 */
	popsFolder: {
		/** 排序名 */
		"pops-folder-sort-name": GenerateNetDiskConfig(
			"pops-folder-sort-name",
			"fileName" as PopsFolderDetails["sort"]["name"]
		),
		/** 排序规则 */
		"pops-folder-sort-is-desc": GenerateNetDiskConfig(
			"pops-folder-sort-is-desc",
			false
		),
	},
	/** 小图标导航 */
	smallIconNavgiator: {
		/** 点击定位分享码 */
		"pops-netdisk-icon-click-event-find-sharecode": GenerateNetDiskConfig(
			"pops-netdisk-icon-click-event-find-sharecode",
			true
		),
		/** 选中分享码 */
		"pops-netdisk-icon-click-event-find-sharecode-with-select":
			GenerateNetDiskConfig(
				"pops-netdisk-icon-click-event-find-sharecode-with-select",
				true
			),
		/** 循环定位 */
		"pops-netdisk-icon-click-event-loop-find-sharecode": GenerateNetDiskConfig(
			"pops-netdisk-icon-click-event-loop-find-sharecode",
			true
		),
	},
	/** 悬浮按钮 */
	suspension: {
		/** 大小 */
		size: GenerateNetDiskConfig("size", 50),
		/** 透明度 */
		opacity: GenerateNetDiskConfig("opacity", 1),
		/** 背景轮播时间 */
		"randbg-time": GenerateNetDiskConfig("randbg-time", 1500),
		/** 背景显示时间 */
		"randbg-show-time": GenerateNetDiskConfig("randbg-show-time", 1200),
		/** 吸附边缘 */
		"suspended-button-adsorption-edge": GenerateNetDiskConfig(
			"suspended-button-adsorption-edge",
			false
		),
	},
	/** 小窗模式 */
	smallWindow: {
		/** 宽度 */
		"netdisk-ui-small-window-width": GenerateNetDiskConfig(
			"netdisk-ui-small-window-width",
			250
		),
		/** 高度 */
		"netdisk-ui-small-window-max-height": GenerateNetDiskConfig(
			"netdisk-ui-small-window-max-height",
			200
		),
	},
	/** 历史匹配记录 */
	historyMatch: {
		/** 排序规则 */
		"netdisk-history-match-ordering-rule": GenerateNetDiskConfig(
			"netdisk-history-match-ordering-rule",
			"按 更新时间 - 降序"
		),
		/** 保存匹配记录 */
		saveMatchNetDisk: GenerateNetDiskConfig("saveMatchNetDisk", false),
	},
	/** 匹配设置 */
	match: {
		/** 匹配类型 */
		pageMatchRange: GenerateNetDiskConfig("pageMatchRange", [
			"innerText",
			"innerHTML",
		] as NetDiskWorkerOptions["matchTextRange"]),
		/** 深入ShadowRoot获取匹配文本 */
		depthQueryWithShadowRoot: GenerateNetDiskConfig(
			"depthQueryWithShadowRoot",
			false
		),
		/** 匹配剪贴板 */
		readClipboard: GenerateNetDiskConfig("readClipboard", false),
		/** 匹配当前URL */
		allowMatchLocationHref: GenerateNetDiskConfig(
			"allowMatchLocationHref",
			true
		),
		/** 匹配input标签的内容 */
		toBeMatchedWithInputElementValue: GenerateNetDiskConfig(
			"to-be-matched-inputElementValue",
			false
		),
		/** 匹配textarea标签的内容 */
		toBeMatchedTextAreaElementValue: GenerateNetDiskConfig(
			"to-be-matched-textAreaElementValue",
			false
		),
		/** 匹配间隔 */
		delaytime: GenerateNetDiskConfig("delaytime", 0.8),
		/** 添加元素时进行匹配 */
		isAddedNodesToMatch: GenerateNetDiskConfig("isAddedNodesToMatch", false),
		/** 观察器：childList */
		"mutationObserver-childList": GenerateNetDiskConfig(
			"mutationObserver-childList",
			true
		),
		/** 观察器：characterData */
		"mutationObserver-characterData": GenerateNetDiskConfig(
			"mutationObserver-characterData",
			true
		),
		/** 观察器：subtree */
		"mutationObserver-subtree": GenerateNetDiskConfig(
			"mutationObserver-subtree",
			true
		),
	},
	/** 功能 */
	function: {
		/** 行为模式 */
		"netdisk-behavior-mode": GenerateNetDiskConfig(
			"netdisk-behavior-mode",
			"suspension_smallwindow" as
				| "suspension_smallwindow"
				| "suspension_window"
				| "smallwindow"
		),
		/** 自动输入访问码 */
		autoFillAccessCode: GenerateNetDiskConfig("autoFillAccessCode", true),
		/** 获取重定向后的直链 */
		getTheDirectLinkAfterRedirection: GenerateNetDiskConfig(
			"getTheDirectLinkAfterRedirection",
			false
		),
	},
	/** 分享码相关 */
	aboutShareCode: {
		/** 相同系数 */
		excludeIdenticalSharedCodesCoefficient: GenerateNetDiskConfig(
			"excludeIdenticalSharedCodesCoefficient",
			1
		),
		/** 排除分享码 */
		excludeIdenticalSharedCodes: GenerateNetDiskConfig(
			"excludeIdenticalSharedCodes",
			false
		),
	},
};
