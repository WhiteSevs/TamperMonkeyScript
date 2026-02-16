import type {
  PopsTitleConfig,
  PopsDragConfig,
  PopsGeneralConfig,
  PopsMoreButtonConfig,
} from "../../../types/components";

/**
 * pops.prompt
 */
export interface PopsPromptConfig
  extends
    PopsTitleConfig,
    PopsDragConfig,
    PopsMoreButtonConfig<{
      text: string;
    }>,
    PopsGeneralConfig {
  /**
   * 内容配置
   */
  content: {
    /**
     * 内容文字
     */
    text: string;
    /**
     * 是否是密码
     */
    password?: boolean;
    /**
     * 是否支持多行输入
     * @default false
     */
    row?: boolean;
    /**
     * 是否自动获取焦点
     * @default true
     */
    focus?: boolean;
    /**
     * 是否自动选择输入框的所有文字
     * @default false
     */
    select?: boolean;
    /**
     * 输入框内的提示文字
     * @default ""
     */
    placeholder?: string;
    /**
     * （可选）文字的自定义CSS
     * @default ""
     */
    style?: string;
  };
}
