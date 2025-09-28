import { GM } from "ViteGM";
import { TestUIBase } from "./TestBase";

export abstract class ApiTestBase extends TestUIBase {
  /**
   * 显示在通用面板上的名字
   */
  public abstract getApiName(): string;
  /**
   * 是否支持该Api
   */
  public abstract isSupport(): boolean;
  /**
   * 是否支持GM函数
   */
  public isSupportGM() {
    return typeof GM === "object" && GM != null;
  }
}
