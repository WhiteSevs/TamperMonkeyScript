import type { PopsAlertConfig } from "../components/alert/types";
import type { PopsConfirmConfig } from "../components/confirm/types";
import type { PopsDrawerConfig } from "../components/drawer/types";
import type { PopsFolderConfig } from "../components/folder/types";
import type { PopsIframeConfig } from "../components/iframe/types";
import type { PopsLoadingConfig } from "../components/loading/types";
import type { PopsPanelConfig } from "../components/panel/types";
import type { PopsPromptConfig } from "../components/prompt/types/index";
import type { PopsRightClickMenuConfig } from "../components/rightClickMenu/types";
import type { PopsToolTipConfig } from "../components/tooltip/types/index";
import type { PopsSearchSuggestionConfig } from "../components/searchSuggestion/types";

export interface PopsUtilsOwnObject<V> {
  [key: string]: V | PopsUtilsOwnObject<V>;
}

/** pops所有的类型配置 11个*/
export interface PopsConfig {
  alert: PopsAlertConfig;
  confirm: PopsConfirmConfig;
  prompt: PopsPromptConfig;
  loading: PopsLoadingConfig;
  iframe: PopsIframeConfig;
  tooltip: PopsToolTipConfig;
  drawer: PopsDrawerConfig;
  folder: PopsFolderConfig;
  panel: PopsPanelConfig;
  rightClickMenu: PopsRightClickMenuConfig;
  searchSuggestion: PopsSearchSuggestionConfig;
}

/** pops的类型 */
export type PopsType = keyof PopsConfig;

/** pops中支持only的配置 */
export type PopsSupportOnlyConfig = Omit<PopsConfig, "searchSuggestion">;

/** 存储实例的类型 */
export type PopsInstStoreType = keyof Omit<PopsConfig, "searchSuggestion">;

/** pops弹窗支持动画元素的配置 8个 */
export type PopsSupportAnimConfig = Omit<PopsConfig, "tooltip" | "rightClickMenu" | "searchSuggestion">;

/** pops弹窗支持动画元素的类型 */
export type PopsSupportAnimConfigType = keyof PopsSupportAnimConfig;

/** pops弹窗支持标题栏的配置 */
export type PopsSupportHeaderTitleConfig = Pick<
  PopsConfig,
  "alert" | "confirm" | "prompt" | "iframe" | "drawer" | "folder" | "panel"
>;

/** pops弹窗支持标题栏的类型 */
export type PopsSupportHeaderTitleConfigType = keyof PopsSupportHeaderTitleConfig;

/** pops支持底部按钮的配置 */
export type PopsSupportBottomButtonConfig = Pick<PopsConfig, "alert" | "confirm" | "prompt" | "drawer">;

/** pops支持底部按钮的类型 */
export type PopsSupportBottomButtonConfigType = keyof PopsSupportHeaderTitleConfig;

/** pops支持中间内容的配置 */
export type PopsSupportContentConfig = Pick<PopsConfig, "alert" | "confirm" | "prompt" | "drawer" | "loading">;

/** pops支持中间内容的类型 */
export type PopsSupportContentConfigType = keyof PopsSupportContentConfig;
