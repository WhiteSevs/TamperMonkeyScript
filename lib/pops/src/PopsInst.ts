import type { PopsInstCommonConfig } from "./types/inst";
import type { PopsInstStoreType } from "./types/main";

/**
 * 弹窗实例数据
 */
export const PopsInstData: {
  [key in PopsInstStoreType]: PopsInstCommonConfig[];
} = {
  alert: [],
  confirm: [],
  drawer: [],
  folder: [],
  iframe: [],
  loading: [],
  panel: [],
  prompt: [],
  rightClickMenu: [],
  // 没有 searchSuggestion
  tooltip: [],
};
