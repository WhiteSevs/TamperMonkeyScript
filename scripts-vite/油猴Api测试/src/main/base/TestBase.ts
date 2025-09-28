import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

export abstract class TestUIBase {
  /**
   * 获取界面配置
   */
  public abstract getUIOption(): PopsPanelContentConfig | undefined;
}
