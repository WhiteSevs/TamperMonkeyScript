import type { PopsAlertDetails } from "../components/alert/indexType";
import type { PopsConfirmDetails } from "../components/confirm/indexType";
import type { PopsDrawerDetails } from "../components/drawer/indexType";
import type { PopsFolderDetails } from "../components/folder/indexType";
import type { PopsIframeDetails } from "../components/iframe/indexType";
import type { PopsLoadingDetails } from "../components/loading/indexType";
import type { PopsPanelDetails } from "../components/panel/indexType";
import type { PopsPromptDetails } from "../components/prompt/indexType";

export interface PopsUtilsOwnObject<V extends any> {
	[key: string]: V | PopsUtilsOwnObject<V>;
}

/** pops的类型 8个 */
export type PopsType =
	| "alert"
	| "confirm"
	| "prompt"
	| "loading"
	| "iframe"
	// | "tooltip"
	| "drawer"
	| "folder"
	| "panel";
// | "rightClickMenu";

/** pops所有的类型 10个 */
export type PopsMode = PopsType | "tooltip" | "rightClickMenu";

/** 存储实例的类型 9个 */
export type PopsLayerMode = PopsType | "tooltip";

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
