import type { PopsAlertDetails } from "../components/alert/indexType";
import type { PopsConfirmDetails } from "../components/confirm/indexType";
import type { PopsDrawerDetails } from "../components/drawer/indexType";
import type { PopsFolderDetails } from "../components/folder/indexType";
import type { PopsIframeDetails } from "../components/iframe/indexType";
import type { PopsLoadingDetails } from "../components/loading/indexType";
import type { PopsPanelDetails } from "../components/panel/indexType";
import type { PopsPromptDetails } from "../components/prompt/indexType";
import { PopsRightClickMenuDetails } from "../components/rightClickMenu/indexType";
import { PopsToolTipDetails } from "../components/tooltip/indexType";

export interface PopsUtilsOwnObject<V extends any> {
	[key: string]: V | PopsUtilsOwnObject<V>;
}

/** pops的所有类型配置 10个 */
export interface PopsAllDetails {
	alert: PopsAlertDetails;
	confirm: PopsConfirmDetails;
	prompt: PopsPromptDetails;
	loading: PopsLoadingDetails;
	iframe: PopsIframeDetails;
	tooltip: PopsToolTipDetails;
	drawer: PopsDrawerDetails;
	folder: PopsFolderDetails;
	panel: PopsPanelDetails;
	rightClickMenu: PopsRightClickMenuDetails;
}

/** pops的类型配置 8个 */
export interface PopsTypeDetails {
	alert: PopsAlertDetails;
	confirm: PopsConfirmDetails;
	prompt: PopsPromptDetails;
	loading: PopsLoadingDetails;
	iframe: PopsIframeDetails;
	// tooltip: PopsToolTipDetails;
	drawer: PopsDrawerDetails;
	folder: PopsFolderDetails;
	panel: PopsPanelDetails;
	// rightClickMenu: PopsRightClickMenuDetails;
}

/** pops的类型 8个 */
export type PopsType = keyof PopsTypeDetails;

/** pops所有的类型 10个 */
export type PopsMode = PopsType | "tooltip" | "rightClickMenu";

/** 存储实例的类型 9个 */
export type PopsLayerMode = PopsType | "tooltip" | "rightClickMenu";

/** pops弹窗支持动画元素的配置 */
export interface PopsSupportAnim {
	alert: PopsAlertDetails;
	confirm: PopsConfirmDetails;
	prompt: PopsPromptDetails;
	loading: PopsLoadingDetails;
	iframe: PopsIframeDetails;
	drawer: PopsDrawerDetails;
	folder: PopsFolderDetails;
	panel: PopsPanelDetails;
}
/** pops弹窗支持动画元素的类型 */
export type PopsTypeSupportAnim = keyof PopsSupportAnim;

/** pops弹窗支持标题栏的配置 */
export interface PopsSupportHeaderTitle {
	alert: PopsAlertDetails;
	confirm: PopsConfirmDetails;
	prompt: PopsPromptDetails;
	iframe: PopsIframeDetails;
	drawer: PopsDrawerDetails;
	folder: PopsFolderDetails;
	panel: PopsPanelDetails;
}
/** pops弹窗支持标题栏的类型 */
export type PopsTypeSupportHeaderTitle = keyof PopsSupportHeaderTitle;

/** pops支持底部按钮的配置 */
export interface PopsSupportBottomBtn {
	alert: PopsAlertDetails;
	confirm: PopsConfirmDetails;
	prompt: PopsPromptDetails;
	drawer: PopsDrawerDetails;
}
/** pops支持底部按钮的类型 */
export type PopsTypeSupportBottomBtn = keyof PopsSupportHeaderTitle;

/** pops支持中间内容的配置 */
export interface PopsSupportContent {
	alert: PopsAlertDetails;
	confirm: PopsConfirmDetails;
	prompt: PopsPromptDetails;
	drawer: PopsDrawerDetails;
	loading: PopsLoadingDetails;
}
/** pops支持中间内容的类型 */
export type PopsTypeSupportContent = keyof PopsSupportContent;

/** panel的各种类型的配置项 */
export type PopsPanelFormsTotalDetails =
	| PopsPanelSwitchDetails
	| PopsPanelSliderDetails
	| PopsPanelInputDetails
	| PopsPanelTextAreaDetails
	| PopsPanelSelectDetails<any>
	| PopsPanelButtonDetails
	| PopsPanelDeepMenuDetails
	| PopsPanelOwnDetails;

/**
 * pops.xxx的调用返回值
 */
export interface PopsCallResult {
	/** 唯一标识id */
	guid: string;
	/** 影子元素 */
	$shadowContainer: HTMLDivElement;
	/** 影子元素的根节点 */
	$shadowRoot: ShadowRoot | HTMLElement;
	/** 元素 */
	element: HTMLDivElement;
	/** 动画层元素 */
	animElement: HTMLDivElement;
	/** pops元素 */
	popsElement: HTMLDivElement;
	/** 遮罩层元素 */
	maskElement?: HTMLDivElement;
	/** 关闭弹窗 */
	close(): void;
	/** 隐藏弹窗 */
	hide(): void;
	/** 显示弹窗 */
	show(): void;
}
