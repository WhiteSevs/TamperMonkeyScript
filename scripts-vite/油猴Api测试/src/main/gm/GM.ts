import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { GM } from "ViteGM";

export class ApiTest_GM extends ApiAsyncTestBase {
  public getApiName() {
    return "GM";
  }
  public getAsyncApiOption() {
    return void 0;
  }
  public isSupport() {
    return typeof GM === "object" && GM != null;
  }
  public getUIOption() {
    return void 0;
  }
}
