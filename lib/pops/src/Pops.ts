import { popsDOMUtils } from "./utils/PopsDOMUtils";
import { PopsInstanceUtils } from "./utils/PopsInstanceUtils";
import { popsUtils } from "./utils/PopsUtils";
import { PopsCore } from "./Core";
import { PopsAlert } from "./components/alert";
import type { PopsAlertDetails } from "./components/alert/indexType";
import { PopsConfirm } from "./components/confirm";
import type { PopsConfirmDetails } from "./components/confirm/indexType";
import type { PopsPromptDetails } from "./components/prompt/indexType";
import { PopsPrompt } from "./components/prompt";
import type { PopsLoadingDetails } from "./components/loading/indexType";
import { PopsLoading } from "./components/loading";
import type { PopsIframeDetails } from "./components/iframe/indexType";
import { PopsIframe } from "./components/iframe";
import type { PopsToolTipDetails } from "./components/tooltip/indexType";
import { PopsDrawer } from "./components/drawer";
import type { PopsDrawerDetails } from "./components/drawer/indexType";
import type { PopsFolderDetails } from "./components/folder/indexType";
import { PopsFolder } from "./components/folder";
import type { PopsPanelDetails } from "./components/panel/indexType";
import { PopsPanel } from "./components/panel";
import { PopsRightClickMenu } from "./components/rightClickMenu";
import type { PopsRightClickMenuDetails } from "./components/rightClickMenu/indexType";
import type { PopsSearchSuggestionDetails } from "./components/searchSuggestion/indexType";
import { PopsSearchSuggestion } from "./components/searchSuggestion";
import { PopsMathFloatUtils } from "./utils/PopsMathUtils";
import { PanelHandleContentDetails } from "./components/panel/PanelHandleContentDetails";
import { GlobalConfig } from "./GlobalConfig";
import { PopsTooltip } from "./components/tooltip";
import { PopsCSS } from "./PopsCSS";
import { PopsIcon } from "./PopsIcon";
import { PopsLayer } from "./PopsLayer";
import { PopsAnimation } from "./PopsAnimation";

class Pops {
	/** 配置 */
	config = {
		/** 版本号 */
		version: "2025.6.12",
		cssText: PopsCSS,
		/** icon图标的svg代码 */
		iconSVG: PopsIcon.$data,
		/** 当前已配置的动画@keyframes名字映射(初始化时生成) */
		animation: PopsAnimation.$data,
		/** 存储已创建的元素 */
		layer: PopsLayer,
		/** 禁止滚动 */
		forbiddenScroll: {
			event(event: Event) {
				return popsDOMUtils.preventEvent(event);
			},
		},
		/** pops使用的工具类 */
		Utils: popsUtils,
		/** pops使用的DOM工具类 */
		DOMUtils: popsDOMUtils,
		/** pops创建的实例使用的工具类 */
		InstanceUtils: PopsInstanceUtils,
		/** pops处理float类型使用的工具类 */
		MathFloatUtils: PopsMathFloatUtils,
		/** pops.panel中用于处理各个类型的工具 */
		panelHandleContentUtils: PanelHandleContentDetails,
	};
	init() {}
	/**
	 * 释放原有的pops控制权
	 * @example
	 * let pops = window.pops.noConflict()
	 */
	noConflict() {
		if (typeof (PopsCore.globalThis as any).pops === "object") {
			popsUtils.delete(PopsCore.globalThis, "pops");
		}
		if (
			typeof unsafeWindow === "object" &&
			unsafeWindow != null &&
			typeof (unsafeWindow as any).pops === "object"
		) {
			popsUtils.delete(unsafeWindow, "pops");
		}
		return new Pops();
	}
	/**
	 * 通过navigator.userAgent判断是否是手机访问
	 * @param userAgent
	 */
	isPhone(userAgent?: string) {
		return popsUtils.isPhone(userAgent);
	}
	/**
	 * 为所有弹窗设置全局属性
	 */
	GlobalConfig = GlobalConfig;
	/**
	 * 普通信息框
	 * @param details 配置
	 */
	alert = (details: PopsAlertDetails) => {
		let dialog = PopsAlert.init(details);
		return dialog;
	};

	/**
	 * 询问框
	 * @param details 配置
	 */
	confirm = (details: PopsConfirmDetails) => {
		let dialog = PopsConfirm.init(details);
		return dialog;
	};

	/**
	 * 输入框
	 * @param details 配置
	 */
	prompt = (details: PopsPromptDetails) => {
		let dialog = PopsPrompt.init(details);
		return dialog;
	};

	/**
	 * 加载层
	 * @param details 配置
	 */
	loading = (details: PopsLoadingDetails) => {
		let popsLoading = PopsLoading.init(details);
		return popsLoading;
	};

	/**
	 * iframe层
	 * @param details 配置
	 */
	iframe = (details: PopsIframeDetails) => {
		let dialog = PopsIframe.init(details);
		return dialog;
	};

	/**
	 * 提示框
	 * @param details 配置
	 */
	tooltip = (details: PopsToolTipDetails) => {
		let popsTooltip = PopsTooltip.init(details);
		return popsTooltip;
	};

	/**
	 * 抽屉
	 * @param details 配置
	 */
	drawer = (details: PopsDrawerDetails) => {
		let dialog = PopsDrawer.init(details);
		return dialog;
	};

	/**
	 * 文件夹
	 * @param details 配置
	 */
	folder = (details: PopsFolderDetails) => {
		let dialog = PopsFolder.init(details);
		return dialog;
	};

	/**
	 * 配置面板
	 * @param details 配置
	 */
	panel = (details: PopsPanelDetails) => {
		let dialog = PopsPanel.init(details);
		return dialog;
	};

	/**
	 * 右键菜单
	 * @param details 配置
	 */
	rightClickMenu = (details: PopsRightClickMenuDetails) => {
		let popsRightClickMenu = PopsRightClickMenu.init(details);
		return popsRightClickMenu;
	};

	/**
	 * 搜索建议
	 * @param details 配置
	 */
	searchSuggestion = <T = any>(details: PopsSearchSuggestionDetails<T>) => {
		let popsSearchSuggestion = PopsSearchSuggestion.init(details);
		return popsSearchSuggestion;
	};
}

const pops = new Pops();

export { pops };
