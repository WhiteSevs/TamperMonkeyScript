import type { PopsAlertDetails } from "../components/alert/types";
import type { PopsConfirmDetails } from "../components/confirm/types";
import type { PopsDrawerDetails } from "../components/drawer/types";
import type { PopsFolderDetails } from "../components/folder/types";
import type { PopsIframeDetails } from "../components/iframe/types";
import type { PopsLoadingDetails } from "../components/loading/types";
import type { PopsPanelButtonDetails } from "../components/panel/types/components-button";
import type { PopsPanelDeepMenuDetails } from "../components/panel/types/components-deepMenu";
import type { PopsPanelDetails } from "../components/panel/types";
import type { PopsPanelInputDetails } from "../components/panel/types/components-input";
import type { PopsPanelOwnDetails } from "../components/panel/types/components-own";
import type { PopsPanelSelectDetails } from "../components/panel/types/components-select";
import type { PopsPanelSliderDetails } from "../components/panel/types/components-slider";
import type { PopsPanelSwitchDetails } from "../components/panel/types/components-switch";
import type { PopsPanelTextAreaDetails } from "../components/panel/types/components-textarea";
import type { PopsPromptDetails } from "../components/prompt/types/index";
import { PopsRightClickMenuDetails } from "../components/rightClickMenu/types";
import { PopsToolTipDetails } from "../components/tooltip/types/index";
import type { PopsSearchSuggestionDetails } from "../components/searchSuggestion/types";

export interface PopsUtilsOwnObject<V extends any> {
	[key: string]: V | PopsUtilsOwnObject<V>;
}

/** pops所有的类型配置 11个*/
export interface PopsDetails {
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
	searchSuggestion: PopsSearchSuggestionDetails;
}

/** pops的类型 */
export type PopsType = keyof PopsDetails;

/** pops中支持only的配置 */
export type PopsSupportOnlyDetails = Omit<PopsDetails, "searchSuggestion">;

/** 存储实例的类型 */
export type PopsInstStoreType = keyof Omit<PopsDetails, "searchSuggestion">;

/** pops弹窗支持动画元素的配置 8个 */
export type PopsSupportAnimDetails = Omit<PopsDetails, "tooltip" | "rightClickMenu" | "searchSuggestion">;

/** pops弹窗支持动画元素的类型 */
export type PopsSupportAnimDetailsType = keyof PopsSupportAnimDetails;

/** pops弹窗支持标题栏的配置 */
export type PopsSupportHeaderTitleDetails = Pick<
	PopsDetails,
	"alert" | "confirm" | "prompt" | "iframe" | "drawer" | "folder" | "panel"
>;

/** pops弹窗支持标题栏的类型 */
export type PopsSupportHeaderTitleDetailsType = keyof PopsSupportHeaderTitleDetails;

/** pops支持底部按钮的配置 */
export type PopsSupportBottomBtnDetails = Pick<PopsDetails, "alert" | "confirm" | "prompt" | "drawer">;

/** pops支持底部按钮的类型 */
export type PopsSupportBottomBtnDetailsType = keyof PopsSupportHeaderTitleDetails;

/** pops支持中间内容的配置 */
export type PopsSupportContentDetails = Pick<
	PopsDetails,
	"alert" | "confirm" | "prompt" | "drawer" | "loading"
>;

/** pops支持中间内容的类型 */
export type PopsSupportContentDetailsType = keyof PopsSupportContentDetails;

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
