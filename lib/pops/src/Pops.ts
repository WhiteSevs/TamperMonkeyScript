import { popsDOMUtils } from "./utils/PopsDOMUtils";
import { PopsInstanceUtils } from "./utils/PopsInstanceUtils";
import { popsUtils } from "./utils/PopsUtils";
import { PopsCore } from "./PopsCore";
import { PopsAlert } from "./components/alert";
import type { PopsAlertDetails } from "./components/alert/types";
import { PopsConfirm } from "./components/confirm";
import type { PopsConfirmDetails } from "./components/confirm/types";
import type { PopsPromptDetails } from "./components/prompt/types/index";
import { PopsPrompt } from "./components/prompt";
import type { PopsLoadingDetails } from "./components/loading/types";
import { PopsLoading } from "./components/loading";
import type { PopsIframeDetails } from "./components/iframe/types";
import { PopsIframe } from "./components/iframe";
import type { PopsToolTipDetails } from "./components/tooltip/types/index";
import { PopsDrawer } from "./components/drawer";
import type { PopsDrawerDetails } from "./components/drawer/types";
import type { PopsFolderDetails } from "./components/folder/types";
import { PopsFolder } from "./components/folder";
import type { PopsPanelDetails } from "./components/panel/types";
import { PopsPanel } from "./components/panel";
import { PopsRightClickMenu } from "./components/rightClickMenu";
import type { PopsRightClickMenuDetails } from "./components/rightClickMenu/types";
import type { PopsSearchSuggestionDetails } from "./components/searchSuggestion/types/index";
import { PopsSearchSuggestion } from "./components/searchSuggestion";
import { PopsMathFloatUtils } from "./utils/PopsMathUtils";
import { PanelHandlerComponents } from "./components/panel/handlerComponents";
import { GlobalConfig } from "./config/GlobalConfig";
import { PopsTooltip } from "./components/tooltip";
import { PopsCSS } from "./PopsCSS";
import { PopsIcon } from "./PopsIcon";
import { PopsInstData } from "./PopsInst";
import { PopsAnimation } from "./PopsAnimation";

class Pops {
	/** 配置 */
	config = {
		/** 版本号 */
		version: "2025.7.16",
		cssText: PopsCSS,
		/** icon图标的svg代码 */
		iconSVG: PopsIcon.$data,
		/** 当前已配置的动画@keyframes名字映射(初始化时生成) */
		animation: PopsAnimation.$data,
		/** 存储已创建的元素 */
		instData: PopsInstData,
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
		PanelHandlerComponents: PanelHandlerComponents,
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
	 *
	 * 注意：调用后需要主动调用.init()和.setAllEvent()进行初始化
	 * @param details 配置
	 * @example
	 * let $input = document.querySelector("#input");
	 * let searchSuggestion = pops.searchSuggestion({
	 *     target: $input,
	 *     inputTarget: $input,
	 *     getItemHTML: function (item) {
	 *         return item.value;
	 *     }
	 * });
	 * searchSuggestion.init();
	 * searchSuggestion.setAllEvent();
	 */
	searchSuggestion = <T = any>(details: PopsSearchSuggestionDetails<T>) => {
		let popsSearchSuggestion = PopsSearchSuggestion.init(details);
		return popsSearchSuggestion;
	};
}

const pops = new Pops();

export { pops };
