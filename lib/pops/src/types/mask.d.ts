import type { PopsAlertConfig } from "../components/alert/types";
import type { PopsDrawerConfig } from "../components/drawer/types";
import type { PopsFolderConfig } from "../components/folder/types";
import type { PopsIframeConfig } from "../components/iframe/types";
import type { PopsLoadingConfig } from "../components/loading/types";
import type { PopsPanelConfig } from "../components/panel/types";
import type { PopsPromptConfig } from "../components/prompt/types/index";

/**
 * 遮罩层配置
 */
export interface PopsMaskConfig {
  /**
   * 是否启用遮罩层，默认false
   * @default false
   */
  enable?: boolean;
  /**
   * 点击事件
   */
  clickEvent?: {
    /**
     * 点击遮罩层是否触发关闭事件
     * @default false
     */
    toClose?: boolean;
    /**
     * 点击遮罩层是否触发隐藏事件
     * @default false
     */
    toHide?: boolean;
  };
  /**
   * 遮罩层自定义的点击事件
   * @param originalRun 当toClose为true，它是关闭弹窗，当toHide为true，它是隐藏弹窗
   * @param config 配置信息
   */
  clickCallBack?:
    | ((
        originalRun: () => void | Promise<void>,
        config:
          | PopsAlertConfig
          | PopsDrawerConfig
          | PopsIframeConfig
          | PopsPromptConfig
          | PopsFolderConfig
          | PopsLoadingConfig
          | PopsPanelConfig
      ) => void)
    | undefined
    | null;
}
