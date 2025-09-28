import { ApiTestBase } from "./ApiTestBase";

type AsyncOption = {
  /**
   * 异步写法的名字
   */
  name: string;
  /**
   * 是否支持该api
   */
  isSupport: boolean;
};
export abstract class ApiAsyncTestBase extends ApiTestBase {
  /**
   * 获取异步写法的api信息
   *
   * 如果获取为空，那么就是不存在异步写法
   */
  public abstract getAsyncApiOption(): AsyncOption | undefined;
}
