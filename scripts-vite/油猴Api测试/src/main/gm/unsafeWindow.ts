import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { ApiTestBase } from "../base/ApiTestBase";
import { monkeyWindow, unsafeWindow } from "ViteGM";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { CommonUtil } from "@components/utils/CommonUtil";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelContainerConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-container";

export class ApiTest_unsafeWindow extends ApiAsyncTestBase {
  public getApiName() {
    return "unsafeWindow";
  }
  public getAsyncApiOption() {
    return void 0;
  }
  public isSupport() {
    return typeof unsafeWindow === "object" && unsafeWindow != null;
  }
  public getUIOption() {
    const that = this;
    let apiName = this.getApiName();
    let result: PopsPanelContentConfig = {
      id: "aside-" + apiName,
      title: apiName,
      headerTitle: `${TamperMonkeyUtils.getApiDocUrl(apiName)}`,
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
      },
      clickCallback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
      },
      views: [
        {
          type: "container",
          text: "函数测试",
          views: [
            UIInfo(() =>
              this.isSupport()
                ? {
                    text: "支持 " + apiName,
                    tag: "success",
                  }
                : {
                    text: "不支持 " + apiName,
                    tag: "error",
                  }
            ),
          ],
        },
        {
          type: "container",
          text: "功能测试",
          views: [],
        },
      ],
    };

    if (this.isSupport()) {
      (<PopsPanelContainerConfig>result["views"][1]).views.push(
        UIInfo(() => {
          let key = "test-gm-window";
          let flag = monkeyWindow == unsafeWindow;
          // @ts-ignore
          monkeyWindow[key] = key;
          // @ts-ignore
          flag = typeof unsafeWindow[key] !== "string";
          Reflect.deleteProperty(monkeyWindow, key);
          if (flag) {
            return {
              text: "window已被Proxy代理",
              tag: "success",
            };
          } else {
            return {
              text: "window未被Proxy代理，定义全局变量时会影响到页面变量",
              tag: "warn",
            };
          }
        })
      );
    }
    return result;
  }
}
