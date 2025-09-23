import { PopsFolderDetails } from "@whitesev/pops/dist/types/src/components/folder/types/index";
import { GeneratePanelStorage } from "./NetDiskDataUtils";

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
    position: GeneratePanelStorage("qmsg-config-position", "top"),
    /** 同时最多显示的数量 */
    maxnums: GeneratePanelStorage("qmsg-config-maxnums", 3),
    /** 逆序弹出 */
    showreverse: GeneratePanelStorage("qmsg-config-showreverse", true),
  },
  /** 弹窗 */
  pops: {
    /** 动画 */
    popsAnimation: GeneratePanelStorage("popsAnimation", "pops-anim-fadein-zoom"),
    /** 点击弹窗遮罩层是否可以关闭弹窗 */
    clickMaskToCloseDialog: GeneratePanelStorage("clickMaskToCloseDialog", true),
    /** 窗口拖拽 */
    pcDrag: GeneratePanelStorage("pcDrag", true),
    /** 限制拖拽距离 */
    pcDragLimit: GeneratePanelStorage("pcDragLimit", true),
    /** 亚克力效果 */
    popsAcrylic: GeneratePanelStorage("popsAcrylic", false),
  },
  /** 文件弹窗 */
  popsFolder: {
    /** 排序名 */
    "pops-folder-sort-name": GeneratePanelStorage(
      "pops-folder-sort-name",
      "fileName" as PopsFolderDetails["sort"]["name"]
    ),
    /** 排序规则 */
    "pops-folder-sort-is-desc": GeneratePanelStorage("pops-folder-sort-is-desc", false),
  },
  /** 小图标导航 */
  smallIconNavgiator: {
    /** 点击定位分享码 */
    "pops-netdisk-icon-click-event-find-sharecode": GeneratePanelStorage(
      "pops-netdisk-icon-click-event-find-sharecode",
      true
    ),
    /** 选中分享码 */
    "pops-netdisk-icon-click-event-find-sharecode-with-select": GeneratePanelStorage(
      "pops-netdisk-icon-click-event-find-sharecode-with-select",
      true
    ),
    /** 循环定位 */
    "pops-netdisk-icon-click-event-loop-find-sharecode": GeneratePanelStorage(
      "pops-netdisk-icon-click-event-loop-find-sharecode",
      true
    ),
  },
  /** 悬浮按钮 */
  suspension: {
    /** 大小 */
    size: GeneratePanelStorage("size", 50),
    /** 透明度 */
    opacity: GeneratePanelStorage("opacity", 1),
    /** 背景轮播时间 */
    "randbg-time": GeneratePanelStorage("randbg-time", 1500),
    /** 背景显示时间 */
    "randbg-show-time": GeneratePanelStorage("randbg-show-time", 1200),
    /** 吸附边缘 */
    "suspended-button-adsorption-edge": GeneratePanelStorage("suspended-button-adsorption-edge", false),
    /** z-index层级 */
    "suspended-z-index": GeneratePanelStorage("suspended-z-index", -1),
  },
  /** 小窗模式 */
  smallWindow: {
    /** 宽度 */
    "netdisk-ui-small-window-width": GeneratePanelStorage("netdisk-ui-small-window-width", 250),
    /** 高度 */
    "netdisk-ui-small-window-max-height": GeneratePanelStorage("netdisk-ui-small-window-max-height", 200),
    /** z-index */
    "netdisk-link-view-z-index": GeneratePanelStorage("netdisk-link-view-z-index", -1),
    /** 数据分页显示 启用状态 */
    "netdisk-ui-link-view-data-paging-enable": GeneratePanelStorage("netdisk-ui-link-view-data-paging-enable", false),
    /** 数据分页显示 分页数量 */
    "netdisk-ui-link-view-data-paging-show-data-count": GeneratePanelStorage(
      "netdisk-ui-link-view-data-paging-show-data-count",
      10
    ),
  },
  /** 历史匹配记录 */
  historyMatch: {
    /** 保存匹配记录 */
    saveMatchNetDisk: GeneratePanelStorage("saveMatchNetDisk", false),
    /** 排序规则 */
    "netdisk-history-match-ordering-rule": GeneratePanelStorage(
      "netdisk-history-match-ordering-rule",
      "按 更新时间 - 降序"
    ),
    /** 合并相同链接 */
    "netdisk-history-match-merge-same-link": GeneratePanelStorage("netdisk-history-match-merge-same-link", true),
  },
  /** 匹配设置 */
  match: {
    /** 匹配类型 */
    pageMatchRange: GeneratePanelStorage("pageMatchRange", [
      "innerText",
      "innerHTML",
    ] as NetDiskWorkerOptions["matchTextRange"]),
    /** 深入ShadowRoot获取匹配文本 */
    depthQueryWithShadowRoot: GeneratePanelStorage("depthQueryWithShadowRoot", false),
    /** 匹配剪贴板 */
    readClipboard: GeneratePanelStorage("readClipboard", false),
    /** 匹配当前URL */
    allowMatchLocationHref: GeneratePanelStorage("allowMatchLocationHref", true),
    /** 匹配input标签的内容 */
    toBeMatchedWithInputElementValue: GeneratePanelStorage("to-be-matched-inputElementValue", false),
    /** 匹配textarea标签的内容 */
    toBeMatchedTextAreaElementValue: GeneratePanelStorage("to-be-matched-textAreaElementValue", false),
    /** 匹配网络请求的内容 */
    toBeMatchedXhrHookResponseText: GeneratePanelStorage("to-be-matched-xhrHookResponseText", false),

    /** 匹配间隔 */
    delaytime: GeneratePanelStorage("delaytime", 0.8),
    /** 添加元素时进行匹配 */
    isAddedNodesToMatch: GeneratePanelStorage("isAddedNodesToMatch", false),
    /** 观察器：childList */
    "mutationObserver-childList": GeneratePanelStorage("mutationObserver-childList", true),
    /** 观察器：characterData */
    "mutationObserver-characterData": GeneratePanelStorage("mutationObserver-characterData", true),
    /** 观察器：subtree */
    "mutationObserver-subtree": GeneratePanelStorage("mutationObserver-subtree", true),
  },
  /** 功能 */
  features: {
    /** 匹配模式 */
    "netdisk-match-mode": GeneratePanelStorage("netdisk-match-mode", "MutationObserver" as "MutationObserver" | "Menu"),
    /** 行为模式 */
    "netdisk-behavior-mode": GeneratePanelStorage(
      "netdisk-behavior-mode",
      "suspension_smallwindow" as "suspension_smallwindow" | "suspension_window" | "smallwindow"
    ),
    /** 自动填充访问码 */
    autoFillAccessCode: GeneratePanelStorage("autoFillAccessCode", true),
  },
  /** 分享码相关 */
  shareCode: {
    /** 相同系数 */
    excludeIdenticalSharedCodesCoefficient: GeneratePanelStorage("excludeIdenticalSharedCodesCoefficient", 1),
    /** 排除分享码 */
    excludeIdenticalSharedCodes: GeneratePanelStorage("excludeIdenticalSharedCodes", false),
  },
  /** 访问码 */
  accessCode: {
    /** 允许查询历史匹配记录 */
    allowQueryHistoryMatchingAccessCode: GeneratePanelStorage("allowQueryHistoryMatchingAccessCode", true),
  },
};
